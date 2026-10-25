import { describe, expect, it } from "bun:test";
import {
  loadAllowlist,
  loadConfigFile,
  loadExclusions,
} from "../../src/features/config/config-loader";

describe("ConfigLoader", () => {
  it("should parse full sources.yaml correctly and apply defaults", () => {
    const config = loadConfigFile("config/sources.yaml");
    expect(config.sources.length).toBeGreaterThan(0);
    expect(config.settings.outputDir).toBe("output");
    expect(config.settings.excludeSources.length).toBeGreaterThan(0);
    expect(config.settings.allowlistSources.length).toBeGreaterThan(0);
    expect(config.settings.enableSubdomainPruning).toBe(true);

    // Verify all sources have valid mandatory fields
    for (const source of config.sources) {
      expect(source.name.length).toBeGreaterThan(0);
      expect(source.format).toBeDefined();
      expect(source.tier).toBeDefined();
      expect(source.region).toBeDefined();
      expect(Boolean(source.url || source.path)).toBe(true);
    }
  });

  it("should throw error for non-existent configuration file", () => {
    expect(() => loadConfigFile("non-existent-config.yaml")).toThrow(
      "Configuration file not found",
    );
  });

  it("should load exclusions from local files and object formats", async () => {
    const exclusions = await loadExclusions("config/exclude.txt");
    expect(exclusions.size).toBeGreaterThan(0);
    expect(exclusions.has("cloudflare.com")).toBe(true);
    expect(exclusions.has("apple.com")).toBe(true);
    expect(exclusions.has("github.com")).toBe(true);
    expect(exclusions.has("arkoselabs.com")).toBe(true);
  });

  it("should load allowlist from local and structured resources", async () => {
    const allowlist = await loadAllowlist("config/allowlist.txt");
    expect(allowlist.length).toBeGreaterThan(0);
    expect(allowlist.some((r) => r.domain === "y.qq.com")).toBe(true);
    expect(allowlist.some((r) => r.domain === "chatgpt.com")).toBe(true);
  });
});
