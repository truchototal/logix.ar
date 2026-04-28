-- ============================================
-- Logix Database Schema
-- ============================================
-- Sistema de adquisición automática de clientes
-- Supabase (PostgreSQL)
-- ============================================

-- ─── Contact Submissions (Leads) ───
-- Entry point del funnel de adquisición.
-- Cada fila = un posible cliente.
CREATE TABLE IF NOT EXISTS contact_submissions (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name          TEXT NOT NULL,
  whatsapp      TEXT NOT NULL,
  business_type TEXT NOT NULL,
  message       TEXT,
  status        TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')),
  source        TEXT DEFAULT 'website' CHECK (source IN ('website', 'whatsapp', 'instagram', 'referral', 'other')),
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- Index para consultas frecuentes (dashboard)
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_source ON contact_submissions(source);

-- ─── Clients (Clientes activos de Logix) ───
-- Negocios reales que contratan el sistema Logix.
CREATE TABLE IF NOT EXISTS clients (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name          TEXT NOT NULL,
  business_name TEXT NOT NULL,
  business_type TEXT NOT NULL,
  whatsapp      TEXT NOT NULL,
  email         TEXT,
  plan          TEXT DEFAULT 'starter' CHECK (plan IN ('starter', 'growth', 'enterprise')),
  status        TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'cancelled')),
  -- Metrics
  total_leads   INTEGER DEFAULT 0,
  total_conversions INTEGER DEFAULT 0,
  -- Timestamps
  started_at    TIMESTAMPTZ DEFAULT now(),
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

-- ─── Automations (Configuración de automatizaciones por cliente) ───
CREATE TABLE IF NOT EXISTS automations (
  id            UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id     UUID REFERENCES clients(id) ON DELETE CASCADE,
  name          TEXT NOT NULL,
  type          TEXT NOT NULL CHECK (type IN ('n8n', 'make', 'whatsapp', 'instagram', 'custom')),
  config        JSONB DEFAULT '{}',
  is_active     BOOLEAN DEFAULT true,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_automations_client ON automations(client_id);

-- ─── Updated At Trigger ───
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to all tables
DO $$
DECLARE
  t TEXT;
BEGIN
  FOR t IN SELECT unnest(ARRAY['contact_submissions', 'clients', 'automations'])
  LOOP
    EXECUTE format('
      DROP TRIGGER IF EXISTS update_%I_updated_at ON %I;
      CREATE TRIGGER update_%I_updated_at
        BEFORE UPDATE ON %I
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
    ', t, t, t, t);
  END LOOP;
END;
$$;

-- ─── RLS Policies ───
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE automations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts to contact_submissions (for the website form)
CREATE POLICY IF NOT EXISTS "Allow anon inserts" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

-- Service role has full access (used by backend)
CREATE POLICY IF NOT EXISTS "Service role full access" ON contact_submissions
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Service role full access" ON clients
  FOR ALL TO service_role USING (true) WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Service role full access" ON automations
  FOR ALL TO service_role USING (true) WITH CHECK (true);
