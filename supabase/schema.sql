-- ============================================================
-- MOONMARU — Supabase Schema
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- Create the subscribers table
CREATE TABLE IF NOT EXISTS public.subscribers (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  email       text        NOT NULL UNIQUE,
  source      text        NOT NULL DEFAULT 'website',
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- Add a helpful index for fast duplicate checks
CREATE INDEX IF NOT EXISTS subscribers_email_idx ON public.subscribers (email);

-- ============================================================
-- Row Level Security (RLS)
-- ============================================================

-- Enable RLS on the table
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- POLICY: Allow anyone to INSERT (sign up)
CREATE POLICY "Allow public inserts"
  ON public.subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- POLICY: Block all public reads (only service role / dashboard can read)
-- No SELECT policy = no public reads.
-- To export emails, use the Supabase dashboard or service role key.

-- ============================================================
-- Optional: Grant insert permission to the anon role
-- ============================================================
GRANT INSERT ON public.subscribers TO anon;

-- ============================================================
-- Export subscribers (run in SQL Editor as service role):
-- SELECT email, source, created_at FROM public.subscribers ORDER BY created_at DESC;
-- ============================================================
