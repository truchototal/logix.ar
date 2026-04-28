-- ============================================
-- Migration 001: Initial Schema
-- ============================================
-- Creates the base tables for the Logix system:
-- - contact_submissions (leads from website)
-- - clients (active Logix clients)
-- - automations (per-client automation configs)
-- ============================================
-- Run this in Supabase SQL Editor or via CLI:
-- supabase db push
-- ============================================

-- See: ../schema.sql for the full schema
-- This file exists for migration tracking purposes.

\i ../schema.sql
