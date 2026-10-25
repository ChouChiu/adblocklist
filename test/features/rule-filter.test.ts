import { describe, expect, it } from "bun:test";
import type { ParsedRule } from "../../src/core";
import { exactDeduplicate, pruneSubdomains } from "../../src/features/rule-filter/deduplicator";
import {
  filterExclusions,
  isExcludedDomain,
} from "../../src/features/rule-filter/exclusion-filter";
import { resolveConflicts } from "../../src/features/rule-filter/whitelist-engine";

function createRule(domain: string, isWhitelist = false): ParsedRule {
  return {
    domain,
    isWhitelist,
    syntax: isWhitelist ? `@@||${domain}^` : `||${domain}^`,
    sourceName: "test",
  };
}

describe("RuleFilter", () => {
  describe("ExclusionFilter", () => {
    it("should distinguish exact domain exclusions from wildcard subdomains", () => {
      const exclusions = new Set(["apple.com", "*.cloudflare.com"]);

      // Exact apex exclusion protects the apex domain from being blocked
      expect(isExcludedDomain("apple.com", exclusions)).toBe(true);
      // But allows blocking ad/telemetry subdomains
      expect(isExcludedDomain("iadsdk.apple.com", exclusions)).toBe(false);
      expect(isExcludedDomain("events.data.apple.com", exclusions)).toBe(false);

      // Wildcard exclusion protects the domain AND all of its subdomains
      expect(isExcludedDomain("cloudflare.com", exclusions)).toBe(false);
      expect(isExcludedDomain("api.cloudflare.com", exclusions)).toBe(true);
      expect(isExcludedDomain("deep.edge.cloudflare.com", exclusions)).toBe(true);
      expect(isExcludedDomain("unrelated.org", exclusions)).toBe(false);
    });

    it("should filter out excluded rules from rule array", () => {
      const rules = [
        createRule("evil.com"),
        createRule("api.cloudflare.com"),
        createRule("tracker.net"),
      ];
      const exclusions = new Set(["*.cloudflare.com"]);
      const { kept, excludedCount } = filterExclusions(rules, exclusions);

      expect(kept.length).toBe(2);
      expect(excludedCount).toBe(1);
      expect(kept.some((r) => r.domain === "evil.com")).toBe(true);
    });
  });

  describe("WhitelistEngine", () => {
    it("should resolve conflicts by suppressing exact block rules", () => {
      const blockRules = [createRule("auth.example.com"), createRule("ad.example.com")];
      const allowRules = [createRule("auth.example.com", true)];

      const { resolvedBlockRules, activeAllowRules } = resolveConflicts(blockRules, allowRules);

      expect(resolvedBlockRules.length).toBe(1);
      expect(resolvedBlockRules[0].domain).toBe("ad.example.com");
      expect(activeAllowRules.length).toBe(1);
      expect(activeAllowRules[0].isWhitelist).toBe(true);
    });

    it("should suppress block rules when parent domain is whitelisted", () => {
      const blockRules = [
        createRule("sub.allowed-service.com"),
        createRule("deep.sub.allowed-service.com"),
        createRule("ad.unrelated.com"),
      ];
      const allowRules = [createRule("allowed-service.com", true)];

      const { resolvedBlockRules } = resolveConflicts(blockRules, allowRules);

      expect(resolvedBlockRules.length).toBe(1);
      expect(resolvedBlockRules[0].domain).toBe("ad.unrelated.com");
    });
  });

  describe("Deduplicator", () => {
    it("should exact deduplicate rules", () => {
      const rules = [createRule("example.com"), createRule("example.com"), createRule("other.com")];
      const deduped = exactDeduplicate(rules);
      expect(deduped.length).toBe(2);
    });

    it("should prune subdomains when parent domain is blocked", () => {
      const rules = [
        createRule("example.com"),
        createRule("ad.example.com"),
        createRule("deep.sub.example.com"),
        createRule("unrelated.org"),
      ];
      const { prunedRules, prunedCount } = pruneSubdomains(rules);

      expect(prunedRules.length).toBe(2);
      expect(prunedCount).toBe(2);
      expect(prunedRules.some((r) => r.domain === "example.com")).toBe(true);
      expect(prunedRules.some((r) => r.domain === "unrelated.org")).toBe(true);
      expect(prunedRules.some((r) => r.domain === "ad.example.com")).toBe(false);
    });

    it("should prune subdomains in allowlist when parent domain is whitelisted", () => {
      const rules = [
        createRule("service.com", true),
        createRule("api.service.com", true),
        createRule("sub.api.service.com", true),
      ];
      const { prunedRules, prunedCount } = pruneSubdomains(rules);

      expect(prunedRules.length).toBe(1);
      expect(prunedCount).toBe(2);
      expect(prunedRules[0].domain).toBe("service.com");
    });
  });
});
