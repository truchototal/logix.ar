import { z } from "zod";

/**
 * Contact form submission model.
 * Used by the landing page to capture leads.
 * 
 * → This is the #1 conversion point for Logix clients.
 */
export const ContactSubmissionSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  whatsapp: z.string().min(8, "WhatsApp requerido"),
  businessType: z.string().min(2, "Tipo de negocio requerido"),
  message: z.string().optional(),
});

export type ContactSubmission = z.infer<typeof ContactSubmissionSchema>;

/**
 * Lead model for tracking client acquisition.
 * Each lead represents a potential client for a Logix project.
 */
export const LeadSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  whatsapp: z.string(),
  businessType: z.string(),
  message: z.string().nullable(),
  status: z.enum(["new", "contacted", "qualified", "converted", "lost"]).default("new"),
  source: z.enum(["website", "whatsapp", "instagram", "referral", "other"]).default("website"),
  createdAt: z.string().datetime().optional(),
});

export type Lead = z.infer<typeof LeadSchema>;
