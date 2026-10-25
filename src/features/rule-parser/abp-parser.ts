import type { ParsedRule } from "../../core";
import { cleanDomain, normalizeApex, toAdblockRule } from "../rule-normalizer";

/** Parses Adblock Plus / AdGuard DNS rule syntax. */
export function parseAbp(content: string, sourceName = "ABP"): ParsedRule[] {
  const rules: ParsedRule[] = [];
  const lines = content.split(/\r?\n/);

  for (const rawLine of lines) {
    const line = rawLine.trim();

    // Skip empty lines, headers, comments, and preprocessor directives
    if (!line || line.startsWith("!") || line.startsWith("#") || line.startsWith("[Adblock")) {
      continue;
    }

    // Ignore cosmetic and element-hiding rules in DNS filtering
    if (
      line.includes("##") ||
      line.includes("#@#") ||
      line.includes("#?#") ||
      line.includes("#%#") ||
      line.includes("$$")
    ) {
      continue;
    }

    // Whitelist prefix
    const isWhitelist = line.startsWith("@@");
    const cleanLine = isWhitelist ? line.substring(2) : line;

    // Check modifier options
    const dollarIdx = cleanLine.indexOf("$");
    if (dollarIdx !== -1) {
      const modifier = cleanLine.substring(dollarIdx + 1).toLowerCase();
      if (modifier.includes("badfilter")) {
        continue;
      }
      // DNS defense: Allowlist rules with modifiers ($domain=, $~third-party, $script, etc.)
      // are browser-scoped rules. In DNS filtering, converting them into global allowlist rules
      // punches holes in ad/tracker blocking (e.g. allowing Google AdSense, Bugsnag, Sentry globally).
      if (isWhitelist) {
        continue;
      }
    }

    // Identify target domain part (either ||domain^ or plain domain)
    let domainPart: string;
    if (cleanLine.startsWith("||")) {
      domainPart = cleanLine.substring(2);
    } else if (
      !cleanLine.startsWith("|") &&
      !cleanLine.startsWith("/") &&
      !cleanLine.includes("*")
    ) {
      domainPart = cleanLine;
    } else {
      continue;
    }

    // Strip trailing modifier options if present
    const innerDollarIdx = domainPart.indexOf("$");
    if (innerDollarIdx !== -1) {
      domainPart = domainPart.substring(0, innerDollarIdx);
    }

    // Strip trailing separators (^ or /)
    domainPart = domainPart.replace(/[\/^]+$/, "");

    // Skip URL path rules (DNS cannot filter paths; stripping path causes false blocking)
    if (domainPart.includes("/")) {
      continue;
    }

    const validDomain = cleanDomain(domainPart);
    if (validDomain) {
      const domain = isWhitelist ? validDomain : normalizeApex(validDomain);
      rules.push({
        domain,
        isWhitelist,
        syntax: toAdblockRule(domain, isWhitelist),
        sourceName,
      });
    }
  }

  return rules;
}

export const AbpParser = {
  parse: parseAbp,
};
