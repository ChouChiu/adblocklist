import type { MatrixItemStats, SourceFetchResult } from "../../core";
import { readFileUtf8, writeFileUtf8 } from "../../core";

export interface ReadmeGeneratorOptions {
  templatePath: string;
  targetPath: string;
  matrixStats: MatrixItemStats[];
  sourceResults: SourceFetchResult[];
  buildTime: string;
  repoBaseUrl?: string;
}

const SCENARIO_DESCRIPTIONS: Record<string, string> = {
  "lite-all": "全域精简，零误杀，适合路由器与电视盒子",
  "lite-china": "国内精简，适合低配路由器与日常免维护",
  "lite-overseas": "海外精简，适合轻量海淘与海外网页",
  "standard-all": "全域标准，平衡拦截率与稳定性，推荐主力使用",
  "standard-china": "国内标准，强力过滤国内 App 与网页广告",
  "standard-overseas": "海外标准，强力过滤海外广告与跟踪网络",
  "full-all": "全域全量，高强度去广告与深层隐私阻断",
  "full-china": "国内全量，针对国内生态的深度拦截",
  "full-overseas": "海外全量，针对海外生态的深度拦截",
};

/** Generates root README.md documentation from template and matrix statistics. */
export function generateReadme(options: ReadmeGeneratorOptions): string {
  const template = readFileUtf8(options.templatePath);
  const repoBase =
    options.repoBaseUrl ?? "https://raw.githubusercontent.com/chouchiu/adblocklist/main/output";

  // Build MATRIX_ROWS
  const matrixRows = options.matrixStats.map((item) => {
    const scenario = SCENARIO_DESCRIPTIONS[item.matrixKey] ?? "通用广告过滤";
    const rawLink = `[Raw](${repoBase}/${item.fileName})`;
    const localLink = `[本地](output/${item.fileName})`;
    return `| ${item.scale} | ${item.region} | \`${item.fileName}\` | ${item.totalCount.toLocaleString()} | ${item.allowCount.toLocaleString()} | ${scenario} | ${rawLink} / ${localLink} |`;
  });

  // Build SOURCES_ROWS
  const sourceRows = options.sourceResults.map((item) => {
    const s = item.source;
    const status = item.success ? "正常" : item.source.enabled ? "失败" : "停用";
    const count = item.validRuleCount > 0 ? item.validRuleCount.toLocaleString() : "-";
    const upstream = s.homepage ? `[访问](${s.homepage})` : s.url ? `[链接](${s.url})` : "本地";

    return `| ${s.name} | ${s.format} | ${s.region} | ${s.tier} | ${status} | ${s.priority} | ${count} | ${upstream} |`;
  });

  // Compute stats
  const maxRules = Math.max(...options.matrixStats.map((m) => m.totalCount), 0);
  const enabledCount = options.sourceResults.filter((r) => r.source.enabled).length;
  const successCount = options.sourceResults.filter((r) => r.success).length;

  // Substitute placeholders
  let rendered = template;
  rendered = rendered.replace(/\{\{TOTAL_UNIQUE_RULES\}\}/g, maxRules.toLocaleString());
  rendered = rendered.replace(
    /\{\{BUILD_TIME\}\}/g,
    options.buildTime.split(" ")[0].replace(/-/g, "."),
  );
  rendered = rendered.replace(/\{\{UPDATE_TIME\}\}/g, options.buildTime);
  rendered = rendered.replace(/\{\{ENABLED_SOURCES_COUNT\}\}/g, enabledCount.toString());
  rendered = rendered.replace(/\{\{SUCCESS_SOURCES_COUNT\}\}/g, successCount.toString());
  rendered = rendered.replace(/\{\{TOTAL_SOURCES\}\}/g, options.sourceResults.length.toString());
  rendered = rendered.replace(/\{\{MATRIX_ROWS\}\}/g, matrixRows.join("\n"));
  rendered = rendered.replace(/\{\{SOURCES_ROWS\}\}/g, sourceRows.join("\n"));

  // Write target README
  writeFileUtf8(options.targetPath, rendered);

  return rendered;
}

export const ReadmeGenerator = {
  generate: generateReadme,
};
