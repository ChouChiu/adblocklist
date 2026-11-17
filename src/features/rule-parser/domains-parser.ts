import { type ParsedRule, splitLines } from "../../core";
import { cleanDomain, normalizeApex, toAdblockRule } from "../rule-normalizer";

/** Parses plain domain list into standard DNS rules. */
export function parseDomains(content: string, sourceName = "Domains"): ParsedRule[] {
  const rules: ParsedRule[] = [];

  for (const rawLine of splitLines(content)) {
    let line = rawLine.trim();

    // Skip empty lines and comments
    if (!line || line.startsWith("#") || line.startsWith("!") || line.startsWith(";")) {
      continue;
    }

    // Strip inline comments
    line = line.replace(/[#;].*$/, "").trim();
    if (!line) continue;

    const validDomain = cleanDomain(line);
    if (validDomain) {
      const domain = normalizeApex(validDomain);
      rules.push({
        domain,
        isWhitelist: false,
        syntax: toAdblockRule(domain, false),
        sourceName,
      });
    }
  }

  return rules;
}
