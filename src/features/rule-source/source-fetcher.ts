import {
  type SourceConfig,
  type SourceFetchResult,
  fetchWithRetry,
  logger,
  readFileUtf8,
  splitLines,
} from "../../core";

export interface SourceFetcherOptions {
  timeoutMs?: number;
  retries?: number;
  userAgent?: string;
  offlineMode?: boolean;
}

/** Fetches content for a single rule source from local file or remote URL. */
export async function fetchSource(
  source: SourceConfig,
  options: SourceFetcherOptions = {},
): Promise<SourceFetchResult> {
  const startTime = Date.now();

  if (!source.enabled) {
    return {
      source,
      success: false,
      content: "",
      error: "Source disabled in configuration",
      durationMs: 0,
      rawLineCount: 0,
      validRuleCount: 0,
    };
  }

  // Local file read
  if (source.path) {
    try {
      logger.info(`Reading local file: ${source.path}`, source.name);
      const content = readFileUtf8(source.path);
      const lines = splitLines(content);
      const durationMs = Date.now() - startTime;
      return {
        source,
        success: true,
        content,
        durationMs,
        rawLineCount: lines.length,
        validRuleCount: 0,
      };
    } catch (err: unknown) {
      const error = err instanceof Error ? err.message : String(err);
      logger.error(`Failed to read local source ${source.name}: ${error}`);
      return {
        source,
        success: false,
        content: "",
        error,
        durationMs: Date.now() - startTime,
        rawLineCount: 0,
        validRuleCount: 0,
      };
    }
  }

  // Offline mode guard
  if (options.offlineMode) {
    return {
      source,
      success: false,
      content: "",
      error: "Skipped in offline mode (--no-remote)",
      durationMs: 0,
      rawLineCount: 0,
      validRuleCount: 0,
    };
  }

  // Remote fetch
  if (!source.url) {
    return {
      source,
      success: false,
      content: "",
      error: "No URL or path specified",
      durationMs: 0,
      rawLineCount: 0,
      validRuleCount: 0,
    };
  }

  try {
    logger.info(`Fetching remote URL: ${source.url}`, source.name);
    const content = await fetchWithRetry(source.url, {
      timeoutMs: options.timeoutMs,
      retries: options.retries,
      userAgent: options.userAgent,
    });

    const lines = splitLines(content);
    const durationMs = Date.now() - startTime;
    logger.success(`Fetched ${lines.length} lines in ${durationMs}ms`, source.name);

    return {
      source,
      success: true,
      content,
      durationMs,
      rawLineCount: lines.length,
      validRuleCount: 0,
    };
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    logger.error(`Failed to fetch remote source ${source.name}: ${error}`);
    return {
      source,
      success: false,
      content: "",
      error,
      durationMs: Date.now() - startTime,
      rawLineCount: 0,
      validRuleCount: 0,
    };
  }
}

/** Concurrently fetches all configured rule sources. */
export async function fetchAllSources(
  sources: SourceConfig[],
  options: SourceFetcherOptions = {},
): Promise<SourceFetchResult[]> {
  logger.info(`Starting parallel fetch for ${sources.length} sources...`, "Fetcher");

  const enabledSources = sources.filter((s) => s.enabled);
  const disabledSources = sources.filter((s) => !s.enabled);

  const disabledResults: SourceFetchResult[] = disabledSources.map((source) => ({
    source,
    success: false,
    content: "",
    error: "Disabled in configuration",
    durationMs: 0,
    rawLineCount: 0,
    validRuleCount: 0,
  }));

  const activeResults = await Promise.all(
    enabledSources.map((source) => fetchSource(source, options)),
  );

  return [...activeResults, ...disabledResults];
}

export const SourceFetcher = {
  fetchSource,
  fetchAllSources,
};
