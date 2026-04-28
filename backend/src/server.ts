import app from "./app.js";
import { PORT, NODE_ENV } from "./config/env.js";

/**
 * Logix API Server
 * 
 * Entry point for the backend service.
 * Handles lead capture, client management, and automation integrations.
 */
app.listen(PORT, () => {
  console.log(`
  ⚡ Logix API Server
  ───────────────────────
  🌐 Port:        ${PORT}
  🔧 Environment: ${NODE_ENV}
  📡 Health:      http://localhost:${PORT}/api/health
  ───────────────────────
  `);
});
