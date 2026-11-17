import { type ParsedRule, splitLines } from "../../core";
import { cleanDomain, normalizeApex, toAdblockRule } from "../rule-normalizer";

// Browser/resource-scoped modifiers that cannot be safely converted into global DNS rules
const UNSAFE_DNS_MODIFIER_REGEX =
  /(?:^|,)(?:badfilter|domain=|denyallow=|from=|dnsrewrite=|dnstype=|csp=|redirect(?:-rule)?=|removeparam=|replace=|cookie=|~?(?:script|image|stylesheet|object|subdocument|xmlhttprequest|xhr|font|media|websocket|ping|other|inline-script|inline-font)|~(?:third-party|3p)|first-party|1p)(?:,|=|$)/i;

/** Parses Adblock Plus / AdGuard DNS rule syntax. */
export function parseAbp(content: string, sourceName = "ABP"): ParsedRule[] {
  const rules: ParsedRule[] = [];

  for (const rawLine of splitLines(content)) {
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

    const isWhitelist = line.startsWith("@@");
    const cleanLine = isWhitelist ? line.substring(2) : line;

    // Split rule body and modifier options once
    const dollarIdx = cleanLine.indexOf("$");
    let ruleBody = cleanLine;
    if (dollarIdx !== -1) {
      // Discard all modified allowlist rules and browser-scoped block rules
      if (isWhitelist) continue;
      const modifier = cleanLine.substring(dollarIdx + 1);
      if (UNSAFE_DNS_MODIFIER_REGEX.test(modifier)) continue;
      ruleBody = cleanLine.substring(0, dollarIdx);
    }

    if (ruleBody.includes("*")) continue;

    // Identify target domain part (either ||domain^ or plain domain)
    const isAnchored = ruleBody.startsWith("||");
    let domainPart: string;
    if (isAnchored) {
      domainPart = ruleBody.substring(2);
    } else if (!ruleBody.startsWith("|") && !ruleBody.startsWith("/")) {
      domainPart = ruleBody;
    } else {
      continue;
    }

    const hasCaret = domainPart.endsWith("^");
    domainPart = domainPart.replace(/[\/^]+$/, "");

    // Skip URL path rules (DNS cannot filter paths; stripping path causes false blocking)
    if (domainPart.includes("/")) {
      continue;
    }

    // Allow single-label TLDs only for explicit anchored ||tld^ rules
    const validDomain = cleanDomain(domainPart, isAnchored && hasCaret);
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
