-- ============================================
-- Seed Data for Development
-- ============================================

-- Sample leads for testing
INSERT INTO contact_submissions (name, whatsapp, business_type, message, status, source) VALUES
  ('Juan Pérez', '+5491155001234', 'Peluquería', 'Quiero automatizar los turnos', 'new', 'website'),
  ('María López', '+5491144002345', 'Consultorio médico', 'Necesito que me respondan los mensajes automáticamente', 'contacted', 'whatsapp'),
  ('Carlos Ruiz', '+5491133003456', 'Restaurante', NULL, 'qualified', 'instagram')
ON CONFLICT DO NOTHING;
