import type { Request, Response } from "express";
import { ContactSubmissionSchema } from "../models/contact.js";
import { ContactService } from "../services/contactService.js";

/**
 * Contact controller — handles HTTP requests for lead management.
 * 
 * POST /api/contact   → New lead from website form
 * GET  /api/contact   → List all leads (for dashboard)
 * PATCH /api/contact/:id/status → Update lead funnel stage
 */
export class ContactController {
  /**
   * POST /api/contact
   * Receives a form submission from the landing page.
   * → This generates leads. This is what makes money.
   */
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const parsed = ContactSubmissionSchema.safeParse(req.body);

      if (!parsed.success) {
        res.status(400).json({
          success: false,
          errors: parsed.error.flatten().fieldErrors,
        });
        return;
      }

      const result = await ContactService.create(parsed.data);

      res.status(201).json({
        success: true,
        data: result,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error("[ContactController.create]", message);
      res.status(500).json({ success: false, error: message });
    }
  }

  /**
   * GET /api/contact
   * Returns all leads for the Logix dashboard.
   */
  static async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const data = await ContactService.getAll();
      res.json({ success: true, data });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error("[ContactController.getAll]", message);
      res.status(500).json({ success: false, error: message });
    }
  }

  /**
   * PATCH /api/contact/:id/status
   * Update lead status in the acquisition funnel.
   */
  static async updateStatus(req: Request<{ id: string }>, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { status } = req.body as { status?: string };

      if (!status) {
        res.status(400).json({ success: false, error: "Status is required" });
        return;
      }

      const data = await ContactService.updateStatus(id, status);
      res.json({ success: true, data });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error("[ContactController.updateStatus]", message);
      res.status(500).json({ success: false, error: message });
    }
  }
}
