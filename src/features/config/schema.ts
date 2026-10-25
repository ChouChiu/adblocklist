import { z } from "zod";

export const SourceConfigSchema = z
  .object({
    name: z.string().min(1, "Source name must not be empty"),
    url: z.string().url().optional(),
    path: z.string().optional(),
    format: z.enum(["adblock", "hosts", "domains"]),
    region: z.enum(["china", "overseas", "all"]),
    tier: z.enum(["lite", "standard", "full"]),
    type: z.enum(["block", "allow"]).default("block"),
    enabled: z.boolean().default(true),
    priority: z.number().int().min(0).max(100).default(50),
    homepage: z.string().url().optional(),
    description: z.string().optional(),
    reason: z.string().optional(),
  })
  .refine((data) => Boolean(data.url || data.path), {
    message: "Either 'url' or 'path' must be provided for a source",
  });

export const ResourceSourceItemSchema = z.union([
  z.string(),
  z
    .object({
      name: z.string().optional(),
      url: z.string().url().optional(),
      path: z.string().optional(),
    })
    .refine((data) => Boolean(data.url || data.path), {
      message: "Either 'url' or 'path' must be provided for resource item",
    }),
]);

export const AppSettingsSchema = z
  .object({
    outputDir: z.string().default("output"),
    timeoutMs: z.number().int().positive().default(30000),
    retries: z.number().int().min(0).default(3),
    userAgent: z.string().default("Mozilla/5.0 (compatible; AdBlocklistAggregator/1.0)"),
    excludeFile: z.string().optional(),
    allowlistFile: z.string().optional(),
    excludeSources: z.array(ResourceSourceItemSchema).default(["config/exclude.txt"]),
    allowlistSources: z.array(ResourceSourceItemSchema).default(["config/allowlist.txt"]),
    readmeTemplate: z.string().default("templates/README.md.tpl"),
    targetReadme: z.string().default("README.md"),
    enableSubdomainPruning: z.boolean().default(true),
    maxOutputSizeBytes: z
      .number()
      .int()
      .positive()
      .default(20 * 1024 * 1024),
  })
  .transform((data) => {
    const excludeSources = [...data.excludeSources];
    if (data.excludeFile && !excludeSources.includes(data.excludeFile)) {
      excludeSources.unshift(data.excludeFile);
    }

    const allowlistSources = [...data.allowlistSources];
    if (data.allowlistFile && !allowlistSources.includes(data.allowlistFile)) {
      allowlistSources.unshift(data.allowlistFile);
    }

    return {
      ...data,
      excludeSources,
      allowlistSources,
    };
  });

export const AppConfigSchema = z.object({
  settings: AppSettingsSchema.default({}),
  sources: z.array(SourceConfigSchema).default([]),
});

export type ValidatedSourceConfig = z.infer<typeof SourceConfigSchema>;
export type ValidatedAppSettings = z.infer<typeof AppSettingsSchema>;
export type ValidatedAppConfig = z.infer<typeof AppConfigSchema>;
