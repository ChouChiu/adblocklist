import { parse } from "yaml";
import {
  type ParsedRule,
  type ResourceSource,
  fetchWithRetry,
  fileExists,
  logger,
  readFileUtf8,
  splitLines,
} from "../../core";
import { parseAllowlistLines } from "../rule-filter/whitelist-engine";
import { cleanDomain } from "../rule-normalizer";
import { AppConfigSchema, type ValidatedAppConfig } from "./schema";

export interface LoadResourceOptions {
  timeoutMs?: number;
  retries?: number;
  userAgent?: string;
  offlineMode?: boolean;
}

interface ResolvedResource {
  name: string;
  url?: string;
  path?: string;
}

function resolveResourceItem(item: ResourceSource, defaultName: string): ResolvedResource {
  if (typeof item === "string") {
    if (item.startsWith("http://") || item.startsWith("https://")) {
      return { name: item, url: item };
    }
    return { name: item, path: item };
  }
  return {
    name: item.name ?? (item.url || item.path || defaultName),
    url: item.url,
    path: item.path,
  };
}

async function fetchResourceContent(
  resource: ResolvedResource,
  options: LoadResourceOptions,
): Promise<string | null> {
  if (resource.path) {
    if (!fileExists(resource.path)) {
      logger.warn(`Local file not found: ${resource.path}, skipping`, "Config");
      return null;
    }
    return readFileUtf8(resource.path);
  }

  if (resource.url) {
    if (options.offlineMode) {
      logger.warn(`Skipping remote resource in offline mode: ${resource.name}`, "Config");
      return null;
    }
    try {
      logger.info(`Fetching remote resource: ${resource.name}`, "Config");
      return await fetchWithRetry(resource.url, {
        timeoutMs: options.timeoutMs,
        retries: options.retries,
        userAgent: options.userAgent,
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      logger.warn(`Failed to fetch remote resource ${resource.name}: ${msg}`, "Config");
      return null;
    }
  }

  return null;
}

/** Loads and validates application configuration from YAML or JSON. */
export function loadConfigFile(configPath: string): ValidatedAppConfig {
  if (!fileExists(configPath)) {
    throw new Error(`Configuration file not found: ${configPath}`);
  }

  const content = readFileUtf8(configPath);
  const parsed = parse(content);

  const result = AppConfigSchema.safeParse(parsed);
  if (!result.success) {
    const errorMsg = result.error.errors
      .map((e) => `[${e.path.join(".")}] ${e.message}`)
      .join("; ");
    throw new Error(`Invalid configuration: ${errorMsg}`);
  }

  logger.info(`Loaded ${result.data.sources.length} sources from ${configPath}`, "Config");
  return result.data;
}

/** Loads infrastructure and service exclusions from local files or remote URLs. */
export async function loadExclusions(
  sourcesInput: ResourceSource[] | ResourceSource,
  options: LoadResourceOptions = {},
): Promise<Set<string>> {
  const exclusions = new Set<string>();
  const sources = Array.isArray(sourcesInput) ? sourcesInput : [sourcesInput];

  for (let idx = 0; idx < sources.length; idx++) {
    const resource = resolveResourceItem(sources[idx], `Exclusion-${idx + 1}`);
    const content = await fetchResourceContent(resource, options);
    if (!content) continue;

    const lines = splitLines(content);
    for (const rawLine of lines) {
      let line = rawLine.replace(/[#;!].*$/, "").trim();
      if (!line) continue;

      const isWildcard = line.startsWith("*.") || line.startsWith("||");

      // Strip hosts sinkhole IP and adblock rule prefixes/suffixes
      line = line.replace(/^(?:0\.0\.0\.0|127\.0\.0\.1)\s+/, "");
      line = line.replace(/^@@?\|\|/, "");
      line = line.replace(/^\*\./, "");
      line = line.replace(/[\^$].*$/, "");

      const domain = cleanDomain(line);
      if (domain) {
        exclusions.add(domain);
        if (isWildcard) {
          exclusions.add(`*.${domain}`);
        }
      }
    }
  }

  logger.info(`Loaded ${exclusions.size} exclusion rules`, "Config");
  return exclusions;
}

/** Loads static allowlist rules from local files or remote URLs. */
export async function loadAllowlist(
  sourcesInput: ResourceSource[] | ResourceSource,
  options: LoadResourceOptions = {},
): Promise<ParsedRule[]> {
  const allRules: ParsedRule[] = [];
  const sources = Array.isArray(sourcesInput) ? sourcesInput : [sourcesInput];

  for (let idx = 0; idx < sources.length; idx++) {
    const resource = resolveResourceItem(sources[idx], `Allowlist-${idx + 1}`);
    const content = await fetchResourceContent(resource, options);
    if (!content) continue;

    const lines = splitLines(content);
    const parsed = parseAllowlistLines(lines, resource.name);
    allRules.push(...parsed);
  }

  logger.info(`Loaded ${allRules.length} static allowlist rules`, "Config");
  return allRules;
}

export const ConfigLoader = {
  loadConfigFile,
  loadExclusions,
  loadAllowlist,
};
