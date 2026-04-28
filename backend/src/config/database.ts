import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_SERVICE_KEY } from "./env.js";

/**
 * Supabase admin client — uses the SERVICE_ROLE key.
 * ⚠️  Never expose this to the frontend.
 * This client bypasses RLS for backend operations.
 */
export const supabase = createClient(
  SUPABASE_URL || "https://placeholder.supabase.co",
  SUPABASE_SERVICE_KEY || "placeholder-key"
);
