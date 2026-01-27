-- =====================================================
-- CORRECTION DES POLITIQUES RLS POUR user_profiles
-- =====================================================
-- Le problème : les politiques RLS utilisent auth.users qui n'est pas
-- accessible directement par les utilisateurs authentifiés
-- Solution : utiliser uniquement auth.uid() et user_profiles
-- =====================================================

-- Supprimer les anciennes politiques
DROP POLICY IF EXISTS "Users can view their own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can view all profiles" ON user_profiles;
DROP POLICY IF EXISTS "Users can insert their own user_profiles" ON user_profiles;
DROP POLICY IF EXISTS "Users can update their own user_profiles" ON user_profiles;
DROP POLICY IF EXISTS "Users can select their own user_profiles" ON user_profiles;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON user_profiles;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON user_profiles;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON user_profiles;

-- S'assurer que RLS est activé
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Politique 1: Les utilisateurs peuvent lire leur propre profil (par ID uniquement)
CREATE POLICY "Users can view their own profile"
ON user_profiles
FOR SELECT
TO authenticated
USING (
  auth.uid()::text = id::text
);

-- Politique 2: Les utilisateurs peuvent créer leur propre profil
-- (uniquement si l'ID correspond à leur auth.uid())
CREATE POLICY "Users can insert their own profile"
ON user_profiles
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid()::text = id::text
);

-- Politique 3: Les utilisateurs peuvent mettre à jour leur propre profil
-- Permettre l'update par ID (pour upsert avec onConflict)
CREATE POLICY "Users can update their own profile"
ON user_profiles
FOR UPDATE
TO authenticated
USING (
  auth.uid()::text = id::text
)
WITH CHECK (
  auth.uid()::text = id::text
);

-- =====================================================
-- NOTES:
-- 1. Ces politiques permettent aux utilisateurs de gérer leur propre profil
-- 2. L'upsert avec onConflict='id' fonctionnera car UPDATE est autorisé
-- 3. Les utilisateurs ne peuvent accéder qu'à leur propre profil par ID
-- 4. On n'utilise plus auth.users pour éviter les erreurs de permission
-- =====================================================
