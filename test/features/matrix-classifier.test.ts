import { describe, expect, it } from "bun:test";
import type { ParsedRule, SourceConfig } from "../../src/core";
import {
  type SourceRulesMap,
  buildMatrix,
} from "../../src/features/matrix-classifier/matrix-engine";

function mockSource(
  name: string,
  tier: "lite" | "standard" | "full",
  region: "china" | "overseas" | "all",
): SourceConfig {
  return {
    name,
    format: "adblock",
    region,
    tier,
    type: "block",
    enabled: true,
    priority: 80,
  };
}

function mockRule(domain: string, isWhitelist = false): ParsedRule {
  return {
    domain,
    isWhitelist,
    syntax: isWhitelist ? `@@||${domain}^` : `||${domain}^`,
    sourceName: "mock",
  };
}

describe("MatrixEngine", () => {
  it("should build 9 distinct matrix files with correct rule scoping and allowlist placement", () => {
    const sourceMaps: SourceRulesMap[] = [
      {
        source: mockSource("Lite China", "lite", "china"),
        rules: [mockRule("china-lite.com")],
      },
      {
        source: mockSource("Standard Overseas", "standard", "overseas"),
        rules: [mockRule("overseas-standard.com")],
      },
      {
        source: mockSource("Full All", "full", "all"),
        rules: [mockRule("all-full.com")],
      },
    ];

    const results = buildMatrix(
      sourceMaps,
      [mockRule("whitelist.org", true)],
      new Set(),
      "output",
      true,
    );

    expect(results.length).toBe(9);

    // Verify lite-china only contains china-lite and whitelist
    const liteChina = results.find((r) => r.matrixKey === "lite-china");
    expect(liteChina).toBeDefined();
    expect(liteChina?.content.includes("china-lite.com")).toBe(true);
    expect(liteChina?.content.includes("whitelist.org")).toBe(true);
    expect(liteChina?.content.includes("overseas-standard.com")).toBe(false);
    expect(liteChina?.content.includes("all-full.com")).toBe(false);

    // Verify allowlist is placed before blocklist
    const content = liteChina?.content ?? "";
    const allowIdx = content.indexOf("@@||whitelist.org^");
    const blockIdx = content.indexOf("||china-lite.com^");
    expect(allowIdx).toBeGreaterThan(-1);
    expect(blockIdx).toBeGreaterThan(-1);
    expect(allowIdx).toBeLessThan(blockIdx);

    // Verify full-all contains all eligible rules
    const fullAll = results.find((r) => r.matrixKey === "full-all");
    expect(fullAll).toBeDefined();
    expect(fullAll?.content.includes("china-lite.com")).toBe(true);
    expect(fullAll?.content.includes("overseas-standard.com")).toBe(true);
    expect(fullAll?.content.includes("all-full.com")).toBe(true);
  });

  it("should defensively cap file size strictly under maxOutputSizeBytes", () => {
    // Generate many rules to exceed a tiny size budget
    const manyRules: ParsedRule[] = [];
    for (let i = 0; i < 200; i++) {
      manyRules.push(mockRule(`ad-tracking-domain-number-${i}.example.org`));
    }

    const sourceMaps: SourceRulesMap[] = [
      {
        source: mockSource("Bulk", "lite", "all"),
        rules: manyRules,
      },
    ];

    // Restrict size budget to 1.5 KB
    const tightLimitBytes = 1500;
    const results = buildMatrix(
      sourceMaps,
      [mockRule("important-allow.com", true)],
      new Set(),
      "output",
      true,
      tightLimitBytes,
    );

    for (const r of results) {
      expect(r.stats.fileSizeBytes).toBeLessThanOrEqual(tightLimitBytes);
      // Ensure allowlist rule is preserved
      expect(r.content.includes("@@||important-allow.com^")).toBe(true);
    }
  });
});
