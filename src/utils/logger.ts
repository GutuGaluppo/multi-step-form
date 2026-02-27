/**
 * Logger utility that only logs in development mode
 * Prevents console.logs in production builds
 */
export const logger = {
  /**
   * Log messages only in development
   */
  log: (...args: unknown[]) => {
    if (import.meta.env.DEV) {
      console.log(...args);
    }
  },

  /**
   * Log errors (always logged, even in production)
   */
  error: (...args: unknown[]) => {
    console.error(...args);
  },

  /**
   * Log warnings only in development
   */
  warn: (...args: unknown[]) => {
    if (import.meta.env.DEV) {
      console.warn(...args);
    }
  },

  /**
   * Log info only in development
   */
  info: (...args: unknown[]) => {
    if (import.meta.env.DEV) {
      console.info(...args);
    }
  },
};
