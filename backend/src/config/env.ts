import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// ─── Server ───
export const PORT = parseInt(process.env.PORT || "3001", 10);
export const NODE_ENV = process.env.NODE_ENV || "development";

// ─── Supabase ───
export const SUPABASE_URL = process.env.SUPABASE_URL || "";
export const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY || "";

// ─── CORS ───
export const CORS_ORIGINS = (process.env.CORS_ORIGINS || "http://localhost:8080")
  .split(",")
  .map((s) => s.trim());

// ─── Validation ───
if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.warn(
    "[Config] ⚠️  Missing SUPABASE_URL or SUPABASE_SERVICE_KEY — API calls to Supabase will fail."
  );
}
