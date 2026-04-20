import { supabase } from "@/lib/supabase";

export interface ContactFormData {
  name: string;
  whatsapp: string;
  businessType: string;
  message: string;
}

interface SubmitResult {
  success: boolean;
  error?: string;
}

/**
 * Submits contact form data to Supabase.
 * The data is persisted in the `contact_submissions` table.
 * From there, n8n or Make.com can read it via Supabase webhooks or polling.
 */
export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  try {
    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      whatsapp: data.whatsapp,
      business_type: data.businessType,
      message: data.message || null,
    });

    if (error) {
      console.error("[Contact] Supabase insert error:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Contact] Unexpected error:", message);
    return { success: false, error: message };
  }
}
