export type ScaleTier = "lite" | "standard" | "full";
export type RegionScope = "china" | "overseas" | "all";
export type RuleFormat = "adblock" | "hosts" | "domains";
export type SourceType = "block" | "allow";

export interface SourceConfig {
  name: string;
  url?: string;
  path?: string;
  format: RuleFormat;
  region: RegionScope;
  tier: ScaleTier;
  type: SourceType;
  enabled: boolean;
  priority: number;
  homepage?: string;
  description?: string;
  reason?: string;
}

export interface ResourceSourceItem {
  name?: string;
  url?: string;
  path?: string;
}

export type ResourceSource = string | ResourceSourceItem;

export interface AppSettings {
  outputDir: string;
  timeoutMs: number;
  retries: number;
  userAgent: string;
  excludeFile?: string;
  allowlistFile?: string;
  excludeSources: ResourceSource[];
  allowlistSources: ResourceSource[];
  readmeTemplate: string;
  targetReadme: string;
  enableSubdomainPruning: boolean;
  maxOutputSizeBytes?: number;
}

export interface AppConfig {
  settings: AppSettings;
  sources: SourceConfig[];
}

export interface ParsedRule {
  domain: string;
  isWhitelist: boolean;
  syntax: string;
  sourceName?: string;
}

export interface SourceFetchResult {
  source: SourceConfig;
  success: boolean;
  content: string;
  error?: string;
  durationMs: number;
  rawLineCount: number;
  validRuleCount: number;
}

export type MatrixKey = `${ScaleTier}-${RegionScope}`;

export interface MatrixItemStats {
  matrixKey: MatrixKey;
  scale: ScaleTier;
  region: RegionScope;
  fileName: string;
  filePath: string;
  totalCount: number;
  allowCount: number;
  blockCount: number;
  fileSizeBytes: number;
}

export interface PipelineStats {
  startTime: string;
  endTime: string;
  durationMs: number;
  totalSourcesConfigured: number;
  totalSourcesEnabled: number;
  totalSourcesSuccess: number;
  totalSourcesFailed: number;
  sourceResults: SourceFetchResult[];
  totalRawRules: number;
  totalValidNormalizedRules: number;
  totalExcludedCount: number;
  totalWhitelistedCount: number;
  totalDeduplicatedCount: number;
  matrixStats: MatrixItemStats[];
}
