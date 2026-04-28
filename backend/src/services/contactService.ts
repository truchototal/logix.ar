import { supabase } from "../config/database.js";
import type { ContactSubmission } from "../models/contact.js";

/**
 * Contact service — handles lead persistence.
 * 
 * Every submission = potential client.
 * This is the entry point of the Logix acquisition funnel.
 */
export class ContactService {
  /**
   * Save a new contact submission (lead) to Supabase.
   */
  static async create(data: ContactSubmission) {
    const { data: result, error } = await supabase
      .from("contact_submissions")
      .insert({
        name: data.name,
        whatsapp: data.whatsapp,
        business_type: data.businessType,
        message: data.message || null,
        status: "new",
        source: "website",
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create contact: ${error.message}`);
    }

    return result;
  }

  /**
   * Get all leads, ordered by most recent first.
   */
  static async getAll() {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch contacts: ${error.message}`);
    }

    return data;
  }

  /**
   * Update lead status (new → contacted → qualified → converted).
   */
  static async updateStatus(id: string, status: string) {
    const { data, error } = await supabase
      .from("contact_submissions")
      .update({ status })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update contact status: ${error.message}`);
    }

    return data;
  }
}
