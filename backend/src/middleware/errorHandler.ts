import type { Request, Response, NextFunction } from "express";

/**
 * Global error handler.
 * Catches unhandled errors and returns a consistent JSON response.
 */
export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  console.error("[Error]", err.message, err.stack);

  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === "production"
      ? "Internal server error"
      : err.message,
  });
}
