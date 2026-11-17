import { describe, expect, it } from "bun:test";
import { existsSync, unlinkSync } from "node:fs";
import type { MatrixItemStats, SourceFetchResult } from "../../src/core";
import { generateReadme } from "../../src/features/documentation/readme-generator";

describe("DocumentationFeature", () => {
  const mockMatrixStats: MatrixItemStats[] = [
    {
      matrixKey: "lite-all",
      scale: "lite",
      region: "all",
      fileName: "lite-all.txt",
      filePath: "output/lite-all.txt",
      totalCount: 5000,
      allowCount: 50,
      blockCount: 4950,
      fileSizeBytes: 120000,
    },
    {
      matrixKey: "standard-china",
      scale: "standard",
      region: "china",
      fileName: "standard-china.txt",
      filePath: "output/standard-china.txt",
      totalCount: 15000,
      allowCount: 80,
      blockCount: 14920,
      fileSizeBytes: 350000,
    },
  ];

  const mockSourceResults: SourceFetchResult[] = [
    {
      source: {
        name: "Test Source",
        format: "adblock",
        region: "china",
        tier: "lite",
        type: "block",
        enabled: true,
        priority: 100,
      },
      success: true,
      content: "",
      durationMs: 120,
      rawLineCount: 6000,
      validRuleCount: 5000,
    },
  ];

  it("should generate README without unreplaced template placeholders", () => {
    const targetPath = "test-readme.tmp.md";
    try {
      const rendered = generateReadme({
        templatePath: "templates/README.md.tpl",
        targetPath,
        matrixStats: mockMatrixStats,
        sourceResults: mockSourceResults,
        buildTime: "2026-10-25 12:00:00",
      });

      expect(rendered.includes("{{MATRIX_ROWS}}")).toBe(false);
      expect(rendered.includes("{{SOURCES_ROWS}}")).toBe(false);
      expect(rendered.includes("{{TOTAL_UNIQUE_RULES}}")).toBe(false);
      expect(rendered.includes("{{BUILD_TIME}}")).toBe(false);
      expect(rendered.includes("{{UPDATE_TIME}}")).toBe(false);
      expect(rendered.includes("最后更新: 2026-10-25 12:00:00")).toBe(true);
    } finally {
      if (existsSync(targetPath)) {
        unlinkSync(targetPath);
      }
    }
  });
});
