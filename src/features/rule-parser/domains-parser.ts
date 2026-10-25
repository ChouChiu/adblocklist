import type { ParsedRule } from "../../core";
import { cleanDomain, normalizeApex, toAdblockRule } from "../rule-normalizer";

/** Parses plain domain list into standard DNS rules. */
export function parseDomains(content: string, sourceName = "Domains"): ParsedRule[] {
  const rules: ParsedRule[] = [];
  const lines = content.split(/\r?\n/);

  for (const rawLine of lines) {
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

export const DomainsParser = {
  parse: parseDomains,
};
