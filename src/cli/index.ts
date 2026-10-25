#!/usr/bin/env bun
import { logger } from "../core";
import { runPipeline } from "../features/pipeline";
import { parseCliArgs, printHelp } from "./args";

async function main(): Promise<void> {
  const args = parseCliArgs(process.argv);

  if (args.help) {
    printHelp();
    process.exit(0);
  }

  try {
    await runPipeline(args);
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    logger.error(`Pipeline execution failed: ${errorMsg}`);
    process.exit(1);
  }
}

main();
