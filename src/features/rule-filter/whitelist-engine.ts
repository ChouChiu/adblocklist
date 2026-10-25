import type { ParsedRule } from "../../core";
import { cleanDomain, toAdblockRule } from "../rule-normalizer";

/** Parses raw allowlist lines into structured ParsedRule items. */
export function parseAllowlistLines(lines: string[], sourceName = "Allowlist"): ParsedRule[] {
  const rules: ParsedRule[] = [];

  for (const rawLine of lines) {
    let line = rawLine.trim();
    if (!line || line.startsWith("#") || line.startsWith("!")) {
      continue;
    }

    line = line.replace(/[#;].*$/, "").trim();
    if (!line) continue;

    let domainPart = line;
    if (domainPart.startsWith("@@")) domainPart = domainPart.substring(2);
    if (domainPart.startsWith("||")) domainPart = domainPart.substring(2);

    const dollarIdx = domainPart.indexOf("$");
    if (dollarIdx !== -1) {
      // Discard conditional allowlist rules (e.g. $domain=foo.com) to prevent leaking into global DNS rules
      continue;
    }
    domainPart = domainPart.replace(/[\/^]+$/, "");

    // Skip rules with URL paths (not applicable to DNS filtering)
    if (domainPart.includes("/")) continue;

    const validDomain = cleanDomain(domainPart);
    if (validDomain) {
      rules.push({
        domain: validDomain,
        isWhitelist: true,
        syntax: toAdblockRule(validDomain, true),
        sourceName,
      });
    }
  }

  return rules;
}

/**
 * Resolves conflicts between blocklist rules and allowlist rules.
 * Suppresses block rules whose exact domain or parent domain is explicitly whitelisted.
 */
export function resolveConflicts(
  blockRules: ParsedRule[],
  allowRules: ParsedRule[],
): { resolvedBlockRules: ParsedRule[]; activeAllowRules: ParsedRule[] } {
  if (allowRules.length === 0) {
    return { resolvedBlockRules: blockRules, activeAllowRules: [] };
  }

  const allowDomainSet = new Set(allowRules.map((r) => r.domain));

  const resolvedBlockRules = blockRules.filter((b) => {
    // If exact domain is whitelisted, suppress block rule
    if (allowDomainSet.has(b.domain)) return false;

    // If any parent domain is whitelisted (e.g. @@||example.com^ unblocks sub.example.com), suppress block rule
    let dotIdx = b.domain.indexOf(".");
    while (dotIdx !== -1) {
      const parent = b.domain.substring(dotIdx + 1);
      if (parent.includes(".") && allowDomainSet.has(parent)) {
        return false;
      }
      dotIdx = b.domain.indexOf(".", dotIdx + 1);
    }

    return true;
  });

  return {
    resolvedBlockRules,
    activeAllowRules: allowRules,
  };
}

export const WhitelistEngine = {
  parseAllowlistLines,
  resolveConflicts,
};
