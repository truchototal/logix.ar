import cors from "cors";
import { CORS_ORIGINS } from "../config/env.js";

/**
 * CORS middleware configured for the Logix frontend.
 * In production, restrict to the actual domain.
 */
export const corsMiddleware = cors({
  origin: CORS_ORIGINS,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
});
