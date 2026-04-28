import { Router } from "express";
import contactRoutes from "./contact.js";

const router = Router();

/**
 * API route index.
 * All routes are prefixed with /api in app.ts
 */
router.use("/contact", contactRoutes);

// Health check
router.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "logix-api",
    timestamp: new Date().toISOString(),
  });
});

export default router;
