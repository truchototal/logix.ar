/**
 * Contact service — sends form data to the Logix API backend.
 * 
 * Before: frontend → Supabase (directo, inseguro)
 * Ahora:  frontend → Backend API → Supabase (seguro, validado)
 */

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

const API_BASE = import.meta.env.VITE_API_URL || "/api";

/**
 * Submits contact form data to the Logix backend.
 * The backend validates, persists to Supabase, and can trigger automations.
 */
export async function submitContactForm(data: ContactFormData): Promise<SubmitResult> {
  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("[Contact] API error:", result.error || result.errors);
      return {
        success: false,
        error: result.error || "Error al enviar el formulario",
      };
    }

    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[Contact] Network error:", message);
    return { success: false, error: message };
  }
}
