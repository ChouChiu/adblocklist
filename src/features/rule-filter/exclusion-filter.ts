import type { ParsedRule } from "../../core";

/** Checks if domain matches an exclusion entry (exact domain or wildcard parent *.parent.com). */
export function isExcludedDomain(domain: string, exclusions: Set<string>): boolean {
  if (exclusions.size === 0) return false;

  const lower = domain.toLowerCase();

  // Exact match
  if (exclusions.has(lower)) {
    return true;
  }

  // Check wildcard parent domains (*.parent.com)
  let dotIdx = lower.indexOf(".");
  while (dotIdx !== -1) {
    const parent = lower.substring(dotIdx + 1);
    if (parent.includes(".") && exclusions.has(`*.${parent}`)) {
      return true;
    }
    dotIdx = lower.indexOf(".", dotIdx + 1);
  }

  return false;
}

/** Filters out excluded rules from a list of rules. */
export function filterExclusions(
  rules: ParsedRule[],
  exclusions: Set<string>,
): { kept: ParsedRule[]; excludedCount: number } {
  if (exclusions.size === 0) {
    return { kept: rules, excludedCount: 0 };
  }

  const kept: ParsedRule[] = [];
  let excludedCount = 0;

  for (const rule of rules) {
    if (isExcludedDomain(rule.domain, exclusions)) {
      excludedCount++;
    } else {
      kept.push(rule);
    }
  }

  return { kept, excludedCount };
}

export const ExclusionFilter = {
  isExcluded: isExcludedDomain,
  filter: filterExclusions,
};
