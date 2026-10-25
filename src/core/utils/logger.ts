const ANSI = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

function formatTime(): string {
  const now = new Date();
  return now.toISOString().replace("T", " ").substring(0, 19);
}

function logMessage(level: string, color: string, message: string, context?: string): void {
  const ctx = context ? `[${context}] ` : "";
  console.log(
    `${ANSI.dim}[${formatTime()}]${ANSI.reset} ${color}[${level}]${ANSI.reset} ${ctx}${message}`,
  );
}

export const logger = {
  info(message: string, context?: string): void {
    logMessage("INFO", ANSI.blue, message, context);
  },

  success(message: string, context?: string): void {
    logMessage("SUCCESS", ANSI.green, message, context);
  },

  warn(message: string, context?: string): void {
    const ctx = context ? `[${context}] ` : "";
    console.warn(
      `${ANSI.dim}[${formatTime()}]${ANSI.reset} ${ANSI.yellow}[WARN]${ANSI.reset} ${ctx}${message}`,
    );
  },

  error(message: string, context?: string): void {
    const ctx = context ? `[${context}] ` : "";
    console.error(
      `${ANSI.dim}[${formatTime()}]${ANSI.reset} ${ANSI.red}${ANSI.bold}[ERROR]${ANSI.reset} ${ctx}${message}`,
    );
  },

  debug(message: string, context?: string): void {
    if (process.env.DEBUG) {
      const ctx = context ? `[${context}] ` : "";
      console.log(`${ANSI.dim}[${formatTime()}] [DEBUG] ${ctx}${message}${ANSI.reset}`);
    }
  },
};
