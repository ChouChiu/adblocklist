import { logger } from "./logger";

export interface FetchOptions {
  timeoutMs?: number;
  retries?: number;
  userAgent?: string;
  maxSizeBytes?: number;
}

const DEFAULT_TIMEOUT_MS = 30_000;
const DEFAULT_RETRIES = 3;
const DEFAULT_MAX_SIZE = 50 * 1024 * 1024; // 50MB
const DEFAULT_UA = "Mozilla/5.0 (compatible; AdBlocklistAggregator/1.0; +https://github.com/)";

/** Fetches remote URL with retry, timeout, and payload safety validation. */
export async function fetchWithRetry(url: string, options: FetchOptions = {}): Promise<string> {
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const retries = options.retries ?? DEFAULT_RETRIES;
  const userAgent = options.userAgent ?? DEFAULT_UA;
  const maxSizeBytes = options.maxSizeBytes ?? DEFAULT_MAX_SIZE;

  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(timeoutMs),
        headers: {
          "User-Agent": userAgent,
          Accept: "text/plain, text/tab-separated-values, text/*;q=0.9, */*;q=0.1",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
      if (contentType.includes("text/html") || contentType.includes("application/xhtml")) {
        throw new Error(`Invalid content-type: ${contentType}`);
      }

      const contentLength = Number.parseInt(response.headers.get("content-length") ?? "", 10);
      if (!Number.isNaN(contentLength) && contentLength > maxSizeBytes) {
        throw new Error(`Payload exceeds size limit: ${contentLength} > ${maxSizeBytes}`);
      }

      const text = await response.text();

      // Reject HTML documents returned with status 200 (e.g. captive portal or proxy interception)
      const head = text.substring(0, 200).trim().toLowerCase();
      if (head.startsWith("<!doctype html") || head.startsWith("<html")) {
        throw new Error("Received HTML document instead of plain text rules");
      }

      return text;
    } catch (err: unknown) {
      const isTimeout = err instanceof Error && err.name === "TimeoutError";
      const msg = isTimeout
        ? `Timeout after ${timeoutMs}ms`
        : err instanceof Error
          ? err.message
          : String(err);
      lastError = new Error(msg);
      logger.warn(`Fetch attempt ${attempt}/${retries} failed for ${url}: ${msg}`, "HTTP");

      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, attempt * 1000));
      }
    }
  }

  throw lastError ?? new Error(`Failed to fetch ${url} after ${retries} attempts`);
}
