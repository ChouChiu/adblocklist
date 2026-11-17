import type {
  MatrixItemStats,
  MatrixKey,
  ParsedRule,
  RegionScope,
  ScaleTier,
  SourceConfig,
} from "../../core";
import { logger } from "../../core/utils/logger";
import { formatBytes, getFormattedDate } from "../../core/utils/text";
import { processRules } from "../rule-filter/deduplicator";
import { filterExclusions } from "../rule-filter/exclusion-filter";
import { resolveConflicts } from "../rule-filter/whitelist-engine";

export interface SourceRulesMap {
  source: SourceConfig;
  rules: ParsedRule[];
}

export interface MatrixTargetResult {
  matrixKey: MatrixKey;
  scale: ScaleTier;
  region: RegionScope;
  fileName: string;
  filePath: string;
  content: string;
  stats: MatrixItemStats;
}

export const SCALES: ScaleTier[] = ["lite", "standard", "full"];
export const REGIONS: RegionScope[] = ["china", "overseas", "all"];
export const DEFAULT_MAX_OUTPUT_SIZE_BYTES = 20 * 1024 * 1024; // 20MB limit

/** Checks if source tier is eligible for target matrix scale. */
export function isSourceEligibleForScale(sourceTier: ScaleTier, targetScale: ScaleTier): boolean {
  if (targetScale === "full") return true;
  if (targetScale === "standard") return sourceTier !== "full";
  return sourceTier === "lite";
}

/** Checks if source region is eligible for target matrix region. */
export function isSourceEligibleForRegion(
  sourceRegion: RegionScope,
  targetRegion: RegionScope,
): boolean {
  return targetRegion === "all" || sourceRegion === "all" || sourceRegion === targetRegion;
}

/** Generates subscription file metadata header. */
export function generateFileHeader(
  scale: ScaleTier,
  region: RegionScope,
  totalRules: number,
  allowRules: number,
  blockRules: number,
  buildTime: string,
): string {
  const scaleUpper = scale.toUpperCase();
  const regionUpper = region.toUpperCase();

  return [
    `! Title: AdBlocklist - ${scaleUpper} - ${regionUpper}`,
    `! Version: ${buildTime}`,
    `! Last modified: ${buildTime}`,
    `! Total count: ${totalRules}`,
    `! Allowlist count: ${allowRules}`,
    `! Blocklist count: ${blockRules}`,
    "! Homepage: https://github.com/chouchiu/adblocklist",
    "! License: MIT",
    "! Notice: Generated automatically. Do not edit manually.",
    "!",
    "",
  ].join("\n");
}

function compareRules(a: ParsedRule, b: ParsedRule): number {
  return a.syntax < b.syntax ? -1 : a.syntax > b.syntax ? 1 : 0;
}

/** Builds all 9 target matrix files with size defense guard. */
export function buildMatrix(
  sourceResults: SourceRulesMap[],
  staticAllowlist: ParsedRule[],
  exclusions: Set<string>,
  outputDir: string,
  enableSubdomainPruning = true,
  maxOutputSizeBytes = DEFAULT_MAX_OUTPUT_SIZE_BYTES,
): MatrixTargetResult[] {
  const matrixResults: MatrixTargetResult[] = [];
  const buildTime = getFormattedDate();

  for (const scale of SCALES) {
    for (const region of REGIONS) {
      const matrixKey: MatrixKey = `${scale}-${region}`;
      const fileName = `${scale}-${region}.txt`;
      const filePath = `${outputDir}/${fileName}`;

      // Collect rules from eligible sources
      const rawAllowRules: ParsedRule[] = [...staticAllowlist];
      const rawBlockRules: ParsedRule[] = [];

      for (const item of sourceResults) {
        if (
          isSourceEligibleForScale(item.source.tier, scale) &&
          isSourceEligibleForRegion(item.source.region, region)
        ) {
          for (const rule of item.rules) {
            if (rule.isWhitelist) {
              rawAllowRules.push(rule);
            } else {
              rawBlockRules.push(rule);
            }
          }
        }
      }

      // Filter exclusions if any were passed directly
      const { kept: filteredBlockRules } = filterExclusions(rawBlockRules, exclusions);

      // Resolve whitelist conflicts (removes block rules if exact or parent domain is allowed)
      const { resolvedBlockRules, activeAllowRules } = resolveConflicts(
        filteredBlockRules,
        rawAllowRules,
      );

      // Deduplicate and optionally prune subdomains for allowlist rules
      const { finalRules: processedAllowRules } = processRules(
        activeAllowRules,
        enableSubdomainPruning,
      );
      processedAllowRules.sort(compareRules);

      // Deduplicate and optionally prune subdomains for blocklist rules
      const { finalRules: processedBlockRules } = processRules(
        resolvedBlockRules,
        enableSubdomainPruning,
      );
      processedBlockRules.sort(compareRules);

      let totalCount = processedAllowRules.length + processedBlockRules.length;
      const allowCount = processedAllowRules.length;
      let blockCount = processedBlockRules.length;

      // Compose file body helper
      const composeContent = (
        allows: ParsedRule[],
        blocks: ParsedRule[],
      ): { content: string; bytes: number } => {
        const header = generateFileHeader(
          scale,
          region,
          allows.length + blocks.length,
          allows.length,
          blocks.length,
          buildTime,
        );
        const parts = [header];
        if (allows.length > 0) {
          parts.push("! === Allowlist Rules ===");
          parts.push(allows.map((r) => r.syntax).join("\n"));
          parts.push("");
        }
        if (blocks.length > 0) {
          parts.push("! === Blocklist Rules ===");
          parts.push(blocks.map((r) => r.syntax).join("\n"));
          parts.push("");
        }
        const text = parts.join("\n");
        return { content: text, bytes: Buffer.byteLength(text, "utf-8") };
      };

      let { content: fileContent, bytes: fileSizeBytes } = composeContent(
        processedAllowRules,
        processedBlockRules,
      );

      // Defensive size enforcement: ensure rule file strictly never exceeds maxOutputSizeBytes
      if (fileSizeBytes > maxOutputSizeBytes) {
        logger.warn(
          `Matrix ${fileName} (${formatBytes(fileSizeBytes)}) exceeds size limit (${formatBytes(maxOutputSizeBytes)}); applying defensive size cap`,
          "Matrix",
        );

        const baseBytes = composeContent(processedAllowRules, [
          { domain: "", isWhitelist: false, syntax: "", sourceName: "" },
        ]).bytes;
        let usedBytes = baseBytes + 16; // Reserve margin for header digit-count differences
        let keepCount = 0;

        for (const rule of processedBlockRules) {
          const lineBytes = Buffer.byteLength(rule.syntax, "utf-8") + 1;
          if (usedBytes + lineBytes > maxOutputSizeBytes) break;
          usedBytes += lineBytes;
          keepCount++;
        }

        let cappedBlocks = processedBlockRules.slice(0, keepCount);
        let capped = composeContent(processedAllowRules, cappedBlocks);
        while (capped.bytes > maxOutputSizeBytes && cappedBlocks.length > 0) {
          cappedBlocks = cappedBlocks.slice(0, -1);
          capped = composeContent(processedAllowRules, cappedBlocks);
        }

        fileContent = capped.content;
        fileSizeBytes = capped.bytes;
        totalCount = processedAllowRules.length + cappedBlocks.length;
        blockCount = cappedBlocks.length;
      }

      const stats: MatrixItemStats = {
        matrixKey,
        scale,
        region,
        fileName,
        filePath,
        totalCount,
        allowCount,
        blockCount,
        fileSizeBytes,
      };

      matrixResults.push({
        matrixKey,
        scale,
        region,
        fileName,
        filePath,
        content: fileContent,
        stats,
      });
    }
  }

  return matrixResults;
}
