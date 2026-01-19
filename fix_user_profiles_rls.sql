-- =====================================================
-- CORRECTION DES POLITIQUES RLS POUR user_profiles
-- =====================================================
-- Le problème : les utilisateurs ne peuvent pas créer leur propre profil
-- à cause de politiques RLS trop restrictives
-- Solution : permettre aux utilisateurs de créer et lire leur propre profil
-- =====================================================

-- Supprimer les anciennes politiques si elles existent
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

-- Politique 1: Les utilisateurs peuvent lire leur propre profil (par ID ou email)
CREATE POLICY "Users can view their own profile"
ON user_profiles
FOR SELECT
USING (
  auth.uid() = id 
  OR auth.uid()::text = id::text
  OR user_email = (SELECT email FROM auth.users WHERE id = auth.uid())
);

-- Politique 2: Les utilisateurs peuvent créer leur propre profil
-- (uniquement si l'ID correspond à leur auth.uid())
CREATE POLICY "Users can insert their own profile"
ON user_profiles
FOR INSERT
WITH CHECK (
  auth.uid() = id 
  OR auth.uid()::text = id::text
  OR user_email = (SELECT email FROM auth.users WHERE id = auth.uid())
);

-- Politique 3: Les utilisateurs peuvent mettre à jour leur propre profil
CREATE POLICY "Users can update their own profile"
ON user_profiles
FOR UPDATE
USING (
  auth.uid() = id 
  OR auth.uid()::text = id::text
  OR user_email = (SELECT email FROM auth.users WHERE id = auth.uid())
)
WITH CHECK (
  auth.uid() = id 
  OR auth.uid()::text = id::text
  OR user_email = (SELECT email FROM auth.users WHERE id = auth.uid())
);

-- =====================================================
-- NOTES:
-- 1. Ces politiques permettent aux utilisateurs de gérer leur propre profil
-- 2. Le trigger SQL handle_new_user() utilise SECURITY DEFINER, donc il
--    contourne RLS et peut créer le profil automatiquement
-- 3. Si le trigger échoue, le code client peut créer le profil grâce à ces politiques
-- 4. Les utilisateurs ne peuvent accéder qu'à leur propre profil
-- =====================================================
