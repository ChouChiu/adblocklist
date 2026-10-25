import type { ParsedRule } from "../../core";
import { cleanDomain, normalizeApex, toAdblockRule } from "../rule-normalizer";

const SINKHOLE_IPS = new Set(["0.0.0.0", "127.0.0.1", "::1", "::", "0"]);

/** Parses hosts formatted files into standard DNS rules. */
export function parseHosts(content: string, sourceName = "Hosts"): ParsedRule[] {
  const rules: ParsedRule[] = [];
  const lines = content.split(/\r?\n/);

  for (const rawLine of lines) {
    let line = rawLine.trim();

    // Skip empty lines and comment lines
    if (!line || line.startsWith("#") || line.startsWith("!") || line.startsWith(";")) {
      continue;
    }

    // Strip inline comments
    line = line.replace(/[#;].*$/, "").trim();
    if (!line) continue;

    // Split by whitespace
    const tokens = line.split(/\s+/).filter(Boolean);
    if (tokens.length < 2) continue;

    const ip = tokens[0];
    if (!SINKHOLE_IPS.has(ip)) {
      continue;
    }

    // Process all hostnames on this line
    for (let i = 1; i < tokens.length; i++) {
      const validDomain = cleanDomain(tokens[i]);
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
  }

  return rules;
}

export const HostsParser = {
  parse: parseHosts,
};
