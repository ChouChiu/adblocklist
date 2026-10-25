/** Splits string into lines across CRLF and LF. */
export function splitLines(text: string): string[] {
  return text.split(/\r?\n/);
}

/** Formats bytes into human-readable unit string. */
export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / k ** i).toFixed(2)} ${sizes[i]}`;
}

/** Pads number with leading zeros. */
export function padZero(num: number, len = 2): string {
  return num.toString().padStart(len, "0");
}

/** Returns formatted timestamp string (YYYY-MM-DD HH:mm:ss). */
export function getFormattedDate(date = new Date()): string {
  const y = date.getFullYear();
  const m = padZero(date.getMonth() + 1);
  const d = padZero(date.getDate());
  const h = padZero(date.getHours());
  const min = padZero(date.getMinutes());
  const s = padZero(date.getSeconds());
  return `${y}-${m}-${d} ${h}:${min}:${s}`;
}
