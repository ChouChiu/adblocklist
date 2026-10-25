import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

/** Ensures parent directory exists. */
export function ensureDir(filePathOrDir: string, isFile = true): void {
  const dir = isFile ? dirname(filePathOrDir) : filePathOrDir;
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

/** Reads UTF-8 file content. */
export function readFileUtf8(filePath: string): string {
  const absPath = resolve(filePath);
  if (!existsSync(absPath)) {
    throw new Error(`File not found: ${absPath}`);
  }
  return readFileSync(absPath, "utf-8");
}

/** Writes UTF-8 file content safely. */
export function writeFileUtf8(filePath: string, content: string): void {
  const absPath = resolve(filePath);
  ensureDir(absPath, true);
  writeFileSync(absPath, content, "utf-8");
}

/** Writes binary buffer to file safely. */
export function writeFileBuffer(filePath: string, buffer: Uint8Array): void {
  const absPath = resolve(filePath);
  ensureDir(absPath, true);
  writeFileSync(absPath, buffer);
}

/** Checks whether file exists. */
export function fileExists(filePath: string): boolean {
  return existsSync(resolve(filePath));
}
