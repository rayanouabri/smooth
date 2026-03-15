-- Fix user_profiles RLS policies
-- Problem: existing policies reference auth.users table, causing
-- "permission denied for table users" for anon/authenticated roles.
-- Solution: use auth.uid() directly instead of subquerying auth.users.

-- Enable RLS (idempotent)
ALTER TABLE IF EXISTS user_profiles ENABLE ROW LEVEL SECURITY;

-- Drop ALL existing policies to start clean
DO $$
DECLARE
  pol RECORD;
BEGIN
  FOR pol IN
    SELECT policyname FROM pg_policies WHERE tablename = 'user_profiles'
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON user_profiles', pol.policyname);
  END LOOP;
END
$$;

-- SELECT: authenticated users can read their own profile
CREATE POLICY "user_profiles_select_own"
  ON user_profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- INSERT: authenticated users can create their own profile
CREATE POLICY "user_profiles_insert_own"
  ON user_profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- UPDATE: authenticated users can update their own profile
CREATE POLICY "user_profiles_update_own"
  ON user_profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
