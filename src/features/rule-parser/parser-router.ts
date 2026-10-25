import type { ParsedRule, RuleFormat, SourceType } from "../../core";
import { toAdblockRule } from "../rule-normalizer";
import { parseAbp } from "./abp-parser";
import { parseDomains } from "./domains-parser";
import { parseHosts } from "./hosts-parser";

/** Routes content parsing to appropriate parser according to source format. */
export function parseRules(
  content: string,
  format: RuleFormat,
  sourceName: string,
  sourceType: SourceType = "block",
): ParsedRule[] {
  let parsed: ParsedRule[];

  switch (format) {
    case "hosts":
      parsed = parseHosts(content, sourceName);
      break;
    case "domains":
      parsed = parseDomains(content, sourceName);
      break;
    default:
      parsed = parseAbp(content, sourceName);
      break;
  }

  // Force allowlist syntax if source type is explicitly allow
  if (sourceType === "allow") {
    for (const rule of parsed) {
      if (!rule.isWhitelist) {
        rule.isWhitelist = true;
        rule.syntax = toAdblockRule(rule.domain, true);
      }
    }
  }

  return parsed;
}

export const ParserRouter = {
  parse: parseRules,
};
