import { Router } from "express";
import { ContactController } from "../controllers/contactController.js";

const router = Router();

/**
 * Contact / Lead routes
 * 
 * POST   /api/contact            → Create new lead (website form)
 * GET    /api/contact            → List all leads (dashboard)
 * PATCH  /api/contact/:id/status → Update lead funnel stage
 */
router.post("/", ContactController.create);
router.get("/", ContactController.getAll);
router.patch("/:id/status", ContactController.updateStatus);

export default router;
