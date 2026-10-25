import type { PipelineStats } from "../../core";
import { formatBytes, writeFileUtf8 } from "../../core";

/** Generates pipeline build and audit report in Markdown format. */
export function generateReportMarkdown(stats: PipelineStats): string {
  const lines: string[] = [
    "# AdBlocklist 构建与审计报告",
    "",
    `> 构建时间: ${stats.startTime} - ${stats.endTime} (耗时: ${(stats.durationMs / 1000).toFixed(2)}s)`,
    "",
    "## 一、总体概览",
    "",
    `- 配置源总数: ${stats.totalSourcesConfigured}`,
    `- 启用源数量: ${stats.totalSourcesEnabled}`,
    `- 拉取成功数: ${stats.totalSourcesSuccess}`,
    `- 拉取失败数: ${stats.totalSourcesFailed}`,
    `- 原始行总数: ${stats.totalRawRules.toLocaleString()}`,
    `- 规范化有效规则: ${stats.totalValidNormalizedRules.toLocaleString()}`,
    `- 误判排除规则: ${stats.totalExcludedCount.toLocaleString()}`,
    `- 白名单规则总数: ${stats.totalWhitelistedCount.toLocaleString()}`,
    `- 剪枝与去重数量: ${stats.totalDeduplicatedCount.toLocaleString()}`,
    "",
    "## 二、规则源明细状态",
    "",
    "| 规则源 | 格式 | 区域 | 层级 | 状态 | 耗时(ms) | 原始行数 | 有效规则数 | 错误信息 |",
    "| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |",
  ];

  for (const item of stats.sourceResults) {
    const s = item.source;
    const statusText = item.success ? "成功" : s.enabled ? "失败" : "已停用";
    const err = item.error ? item.error.replace(/\|/g, "/") : "-";
    lines.push(
      `| ${s.name} | ${s.format} | ${s.region} | ${s.tier} | ${statusText} | ${item.durationMs} | ${item.rawLineCount.toLocaleString()} | ${item.validRuleCount.toLocaleString()} | ${err} |`,
    );
  }

  lines.push("");
  lines.push("## 三、9 类规则文件输出指标");
  lines.push("");
  lines.push("| 规模版本 | 覆盖范围 | 输出文件名 | 规则总数 | 白名单数 | 阻断数 | 规则体积 |");
  lines.push("| :--- | :--- | :--- | :--- | :--- | :--- | :--- |");

  for (const m of stats.matrixStats) {
    lines.push(
      `| ${m.scale} | ${m.region} | \`${m.fileName}\` | ${m.totalCount.toLocaleString()} | ${m.allowCount.toLocaleString()} | ${m.blockCount.toLocaleString()} | ${formatBytes(m.fileSizeBytes)} |`,
    );
  }

  lines.push("");
  return lines.join("\n");
}

/** Writes report.md and report.json to output directory. */
export function generateReports(
  stats: PipelineStats,
  outputDir: string,
): { mdPath: string; jsonPath: string } {
  const mdContent = generateReportMarkdown(stats);
  const sanitizedStats = {
    ...stats,
    sourceResults: stats.sourceResults.map(({ content, ...rest }) => rest),
  };
  const jsonContent = JSON.stringify(sanitizedStats, null, 2);

  const mdPath = `${outputDir}/report.md`;
  const jsonPath = `${outputDir}/report.json`;

  writeFileUtf8(mdPath, mdContent);
  writeFileUtf8(jsonPath, jsonContent);

  return { mdPath, jsonPath };
}

export const ReportGenerator = {
  generateMarkdown: generateReportMarkdown,
  generate: generateReports,
};
