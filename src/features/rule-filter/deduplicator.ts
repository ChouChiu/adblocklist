import type { ParsedRule } from "../../core";

// Counts dot characters in a string
function countDots(str: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 46) count++;
  }
  return count;
}

/** Deduplicates parsed rules by exact syntax match. */
export function exactDeduplicate(rules: ParsedRule[]): ParsedRule[] {
  const seen = new Set<string>();
  const unique: ParsedRule[] = [];

  for (const rule of rules) {
    if (!seen.has(rule.syntax)) {
      seen.add(rule.syntax);
      unique.push(rule);
    }
  }

  return unique;
}

/** Helper to prune subdomains from a homogeneous list of rules (all block or all allow). */
function pruneDomainList(rules: ParsedRule[]): { keptRules: ParsedRule[]; prunedCount: number } {
  const uniqueRules = exactDeduplicate(rules);

  // Group rules into buckets by dot count for O(N) depth-ordered processing
  const buckets: ParsedRule[][] = [];
  for (const rule of uniqueRules) {
    const dots = countDots(rule.domain);
    const bucket = buckets[dots];
    if (bucket) {
      bucket.push(rule);
    } else {
      buckets[dots] = [rule];
    }
  }

  const keptDomainSet = new Set<string>();
  const keptRules: ParsedRule[] = [];
  let prunedCount = 0;

  for (let dots = 1; dots < buckets.length; dots++) {
    const bucket = buckets[dots];
    if (!bucket) continue;

    // Fast path: 1-dot domains (e.g. example.com) cannot be subdomains of any kept domain
    if (dots === 1) {
      for (const rule of bucket) {
        keptDomainSet.add(rule.domain);
        keptRules.push(rule);
      }
      continue;
    }

    // Multi-dot domains: check parent domains from broad to narrow
    for (const rule of bucket) {
      const domain = rule.domain;
      let isSubdomainOfKept = false;

      let dotIdx = domain.indexOf(".");
      while (dotIdx !== -1) {
        const parent = domain.substring(dotIdx + 1);
        if (parent.includes(".") && keptDomainSet.has(parent)) {
          isSubdomainOfKept = true;
          break;
        }
        dotIdx = domain.indexOf(".", dotIdx + 1);
      }

      if (isSubdomainOfKept) {
        prunedCount++;
      } else {
        keptDomainSet.add(domain);
        keptRules.push(rule);
      }
    }
  }

  return { keptRules, prunedCount };
}

/** Prunes redundant subdomains where a broader parent domain is already present. */
export function pruneSubdomains(rules: ParsedRule[]): {
  prunedRules: ParsedRule[];
  prunedCount: number;
} {
  const allowRules: ParsedRule[] = [];
  const blockRules: ParsedRule[] = [];

  for (const rule of rules) {
    if (rule.isWhitelist) {
      allowRules.push(rule);
    } else {
      blockRules.push(rule);
    }
  }

  const { keptRules: prunedAllowRules, prunedCount: prunedAllowCount } =
    pruneDomainList(allowRules);
  const { keptRules: prunedBlockRules, prunedCount: prunedBlockCount } =
    pruneDomainList(blockRules);

  return {
    prunedRules: [...prunedAllowRules, ...prunedBlockRules],
    prunedCount: prunedAllowCount + prunedBlockCount,
  };
}

/** Executes full deduplication and optional subdomain pruning pipeline. */
export function processRules(
  rules: ParsedRule[],
  enableSubdomainPruning = true,
): {
  finalRules: ParsedRule[];
  dedupedCount: number;
  prunedCount: number;
} {
  const initialCount = rules.length;

  if (!enableSubdomainPruning) {
    const unique = exactDeduplicate(rules);
    return {
      finalRules: unique,
      dedupedCount: initialCount - unique.length,
      prunedCount: 0,
    };
  }

  const { prunedRules, prunedCount } = pruneSubdomains(rules);
  const dedupedCount = Math.max(initialCount - prunedRules.length - prunedCount, 0);

  return {
    finalRules: prunedRules,
    dedupedCount,
    prunedCount,
  };
}

export const Deduplicator = {
  exactDeduplicate,
  pruneSubdomains,
  process: processRules,
};
