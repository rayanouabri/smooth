-- Fix RLS on lessons table: allow public (anon) read access
-- The lessons table has RLS enabled but no policy allowing public reads

-- Enable RLS on lessons table (in case it's not enabled)
ALTER TABLE IF EXISTS lessons ENABLE ROW LEVEL SECURITY;

-- Drop existing lessons policies if any
DROP POLICY IF EXISTS "Lessons are publicly readable" ON lessons;
DROP POLICY IF EXISTS "Anyone can read lessons" ON lessons;
DROP POLICY IF EXISTS "lessons_public_read" ON lessons;

-- Create public read policy: anyone (authenticated or not) can read lessons
CREATE POLICY "lessons_public_read"
  ON lessons
  FOR SELECT
  USING (true);
