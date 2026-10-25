import {
  type AppConfig,
  type MatrixItemStats,
  type ParsedRule,
  type PipelineStats,
  type SourceFetchResult,
  ensureDir,
  formatBytes,
  getFormattedDate,
  logger,
  writeFileUtf8,
} from "../../core";
import { loadAllowlist, loadConfigFile, loadExclusions } from "../config/config-loader";
import { generateReadme } from "../documentation/readme-generator";
import { generateReports } from "../documentation/report-generator";
import { type SourceRulesMap, buildMatrix } from "../matrix-classifier/matrix-engine";
import { filterExclusions } from "../rule-filter/exclusion-filter";
import { parseRules } from "../rule-parser/parser-router";
import { fetchAllSources } from "../rule-source/source-fetcher";

export interface PipelineOptions {
  configPath?: string;
  outputDir?: string;
  offlineMode?: boolean;
  dryRun?: boolean;
  skipReadme?: boolean;
}

/** Runs the complete AdBlocklist aggregation, normalization, and generation pipeline. */
export async function runPipeline(options: PipelineOptions = {}): Promise<PipelineStats> {
  const startTimeStr = getFormattedDate();
  const startTime = Date.now();

  logger.info("Starting AdBlocklist consolidation pipeline...", "Pipeline");

  // 1. Load configuration
  const configPath = options.configPath ?? "config/sources.yaml";
  const config: AppConfig = loadConfigFile(configPath);
  const outputDir = options.outputDir ?? config.settings.outputDir ?? "output";
  ensureDir(outputDir, false);

  // 2. Load exclusions and static allowlist
  const exclusions = await loadExclusions(config.settings.excludeSources, {
    timeoutMs: config.settings.timeoutMs,
    retries: config.settings.retries,
    userAgent: config.settings.userAgent,
    offlineMode: options.offlineMode,
  });

  const staticAllowlistRules = await loadAllowlist(config.settings.allowlistSources, {
    timeoutMs: config.settings.timeoutMs,
    retries: config.settings.retries,
    userAgent: config.settings.userAgent,
    offlineMode: options.offlineMode,
  });

  // 3. Fetch rule sources
  const fetchResults: SourceFetchResult[] = await fetchAllSources(config.sources, {
    timeoutMs: config.settings.timeoutMs,
    retries: config.settings.retries,
    userAgent: config.settings.userAgent,
    offlineMode: options.offlineMode,
  });

  // 4. Parse rules and pre-filter exclusions per source
  logger.info("Parsing rule sources content...", "Pipeline");
  const sourceRulesMaps: SourceRulesMap[] = [];
  let totalRawRules = 0;
  let totalValidNormalizedRules = 0;
  let sourceExcludedTotal = 0;

  for (const result of fetchResults) {
    if (!result.success || !result.content) {
      continue;
    }

    totalRawRules += result.rawLineCount;
    const parsedRules = parseRules(
      result.content,
      result.source.format,
      result.source.name,
      result.source.type,
    );

    // Pre-filter excluded domains for block sources
    let filteredRules = parsedRules;
    if (result.source.type === "block" && exclusions.size > 0) {
      const { kept, excludedCount } = filterExclusions(parsedRules, exclusions);
      filteredRules = kept;
      sourceExcludedTotal += excludedCount;
    }

    result.validRuleCount = filteredRules.length;
    totalValidNormalizedRules += filteredRules.length;

    sourceRulesMaps.push({
      source: result.source,
      rules: filteredRules,
    });

    logger.info(`Parsed ${filteredRules.length} valid rules from ${result.source.name}`, "Parser");
  }

  // 5. Build 3x3 Matrix
  logger.info("Building 3x3 Matrix files...", "Matrix");
  const matrixOutputs = buildMatrix(
    sourceRulesMaps,
    staticAllowlistRules,
    new Set(), // Already pre-filtered per source
    outputDir,
    config.settings.enableSubdomainPruning,
    config.settings.maxOutputSizeBytes,
  );

  // 6. Write matrix files to disk
  if (!options.dryRun) {
    for (const target of matrixOutputs) {
      writeFileUtf8(target.filePath, target.content);
      logger.success(
        `Generated ${target.fileName} (${target.stats.totalCount.toLocaleString()} rules, ${formatBytes(target.stats.fileSizeBytes)})`,
        "Writer",
      );
    }
  } else {
    logger.warn("Dry-run enabled: skipped writing matrix files to disk", "Pipeline");
  }

  const endTimeStr = getFormattedDate();
  const durationMs = Date.now() - startTime;

  // 7. Calculate aggregate statistics
  const matrixStats: MatrixItemStats[] = matrixOutputs.map((m) => m.stats);
  const enabledSources = config.sources.filter((s) => s.enabled);
  const successSources = fetchResults.filter((r) => r.success);
  const failedSources = fetchResults.filter((r) => r.source.enabled && !r.success);

  const maxRulesInMatrix = Math.max(...matrixStats.map((m) => m.totalCount), 0);
  const totalExcluded = exclusions.size;
  const totalAllowlisted = staticAllowlistRules.length;

  const pipelineStats: PipelineStats = {
    startTime: startTimeStr,
    endTime: endTimeStr,
    durationMs,
    totalSourcesConfigured: config.sources.length,
    totalSourcesEnabled: enabledSources.length,
    totalSourcesSuccess: successSources.length,
    totalSourcesFailed: failedSources.length,
    sourceResults: fetchResults,
    totalRawRules,
    totalValidNormalizedRules,
    totalExcludedCount: sourceExcludedTotal > 0 ? sourceExcludedTotal : totalExcluded,
    totalWhitelistedCount: totalAllowlisted,
    totalDeduplicatedCount: Math.max(totalValidNormalizedRules - maxRulesInMatrix, 0),
    matrixStats,
  };

  // 8. Generate Reports
  if (!options.dryRun) {
    generateReports(pipelineStats, outputDir);
    logger.success(`Saved reports to ${outputDir}/report.md and report.json`, "Reporter");

    // 9. Synchronize README.md if enabled
    if (!options.skipReadme) {
      try {
        generateReadme({
          templatePath: config.settings.readmeTemplate,
          targetPath: config.settings.targetReadme,
          matrixStats,
          sourceResults: fetchResults,
          buildTime: endTimeStr,
        });
        logger.success(`Synchronized ${config.settings.targetReadme}`, "Docs");
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        logger.warn(`Failed to synchronize README: ${msg}`, "Docs");
      }
    }
  }

  logger.success(
    `Pipeline completed in ${(durationMs / 1000).toFixed(2)}s! Success: ${successSources.length}/${enabledSources.length}`,
    "Pipeline",
  );

  return pipelineStats;
}

export const PipelineOrchestrator = {
  run: runPipeline,
};
