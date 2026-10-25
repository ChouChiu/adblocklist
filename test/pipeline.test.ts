import { afterAll, beforeAll, describe, expect, it } from "bun:test";
import { existsSync, readFileSync, rmSync } from "node:fs";
import { ensureDir, writeFileUtf8 } from "../src/core";
import { PipelineOrchestrator } from "../src/features/pipeline";

describe("PipelineIntegration", () => {
  const testDir = "tmp-test-env";
  const testConfigPath = `${testDir}/test-sources.yaml`;
  const testOutputDir = `${testDir}/output`;

  beforeAll(() => {
    ensureDir(`${testDir}/rules`, false);

    // Create local fixture files
    writeFileUtf8(
      `${testDir}/rules/local-abp.txt`,
      `
[Adblock Plus 2.0]
! Local test ABP
||ad.localtest.com^
||deep.sub.ad.localtest.com^
||cloudflare.com^
@@||auth.localtest.com^
      `,
    );

    writeFileUtf8(
      `${testDir}/rules/local-hosts.txt`,
      `
# Local test hosts
127.0.0.1 tracker.localhosts.com
0.0.0.0 bad.localhosts.org
      `,
    );

    writeFileUtf8(
      `${testDir}/rules/local-allow.txt`,
      `
@@||whitelisted.localtest.com^
      `,
    );

    // Create test exclude and allowlist
    writeFileUtf8(`${testDir}/exclude.txt`, "cloudflare.com\n");
    writeFileUtf8(`${testDir}/allowlist.txt`, "@@||custom-allow.com^\n");
    writeFileUtf8(`${testDir}/README.md.tpl`, "# Test Readme\n{{MATRIX_ROWS}}\n{{SOURCES_ROWS}}");

    // Create test configuration
    writeFileUtf8(
      testConfigPath,
      `
settings:
  outputDir: "${testOutputDir}"
  timeoutMs: 5000
  retries: 1
  excludeFile: "${testDir}/exclude.txt"
  allowlistFile: "${testDir}/allowlist.txt"
  readmeTemplate: "${testDir}/README.md.tpl"
  targetReadme: "${testDir}/README.md"
  enableSubdomainPruning: true

sources:
  - name: "Local ABP Source"
    path: "${testDir}/rules/local-abp.txt"
    format: "adblock"
    region: "china"
    tier: "lite"
    type: "block"
    enabled: true
    priority: 100

  - name: "Local Hosts Source"
    path: "${testDir}/rules/local-hosts.txt"
    format: "hosts"
    region: "overseas"
    tier: "standard"
    type: "block"
    enabled: true
    priority: 80

  - name: "Local Allow Source"
    path: "${testDir}/rules/local-allow.txt"
    format: "adblock"
    region: "all"
    tier: "lite"
    type: "allow"
    enabled: true
    priority: 90
`,
    );
  });

  afterAll(() => {
    if (existsSync(testDir)) {
      rmSync(testDir, { recursive: true, force: true });
    }
  });

  it("should execute end-to-end pipeline and output 9 matrix files and reports", async () => {
    const stats = await PipelineOrchestrator.run({
      configPath: testConfigPath,
      outputDir: testOutputDir,
    });

    expect(stats.totalSourcesEnabled).toBe(3);
    expect(stats.totalSourcesSuccess).toBe(3);
    expect(stats.matrixStats.length).toBe(9);

    // Check all 9 output files exist on disk
    const expectedFiles = [
      "lite-all.txt",
      "lite-china.txt",
      "lite-overseas.txt",
      "standard-all.txt",
      "standard-china.txt",
      "standard-overseas.txt",
      "full-all.txt",
      "full-china.txt",
      "full-overseas.txt",
    ];

    for (const fileName of expectedFiles) {
      const filePath = `${testOutputDir}/${fileName}`;
      expect(existsSync(filePath)).toBe(true);
      expect(existsSync(`${filePath}.gz`)).toBe(false);

      const content = readFileSync(filePath, "utf-8");
      // Check header exists
      expect(content.includes("! Title: AdBlocklist")).toBe(true);
    }

    // Check lite-china file content
    const liteChinaContent = readFileSync(`${testOutputDir}/lite-china.txt`, "utf-8");
    // Should have parent domain
    expect(liteChinaContent.includes("||ad.localtest.com^")).toBe(true);
    // Should prune child domain deep.sub.ad.localtest.com
    expect(liteChinaContent.includes("||deep.sub.ad.localtest.com^")).toBe(false);
    // Should exclude cloudflare.com
    expect(liteChinaContent.includes("||cloudflare.com^")).toBe(false);
    // Should include allowlist rules
    expect(liteChinaContent.includes("@@||auth.localtest.com^")).toBe(true);
    expect(liteChinaContent.includes("@@||whitelisted.localtest.com^")).toBe(true);
    expect(liteChinaContent.includes("@@||custom-allow.com^")).toBe(true);

    // Check report files exist
    expect(existsSync(`${testOutputDir}/report.md`)).toBe(true);
    expect(existsSync(`${testOutputDir}/report.json`)).toBe(true);
    expect(existsSync(`${testDir}/README.md`)).toBe(true);
  });
});
