import type { PipelineOptions } from "../features/pipeline";

export interface ParsedCliArgs extends PipelineOptions {
  help?: boolean;
}

/** Parses command line arguments into pipeline options. */
export function parseCliArgs(argv: string[]): ParsedCliArgs {
  const options: ParsedCliArgs = {};

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (arg === "--config" && i + 1 < argv.length) {
      options.configPath = argv[++i];
    } else if (arg === "--output" && i + 1 < argv.length) {
      options.outputDir = argv[++i];
    } else if (arg === "--no-remote") {
      options.offlineMode = true;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else if (arg === "--skip-readme") {
      options.skipReadme = true;
    }
  }

  return options;
}

/** Prints CLI command help message. */
export function printHelp(): void {
  console.log(`
Usage: bun run start [options]

Options:
  --config <path>   Path to configuration file (default: config/sources.yaml)
  --output <dir>    Output directory for generated rules (default: output)
  --no-remote       Run in offline mode (skip remote HTTP fetches)
  --dry-run         Simulate pipeline without writing files to disk
  --skip-readme     Do not update root README.md
  --help, -h        Show this help message
`);
}
