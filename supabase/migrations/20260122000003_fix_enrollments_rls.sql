-- =====================================================
-- CORRECTION DES POLITIQUES RLS POUR enrollments
-- =====================================================
-- Le problème : les politiques RLS utilisent auth.users qui n'est pas
-- accessible directement par les utilisateurs authentifiés
-- Solution : utiliser uniquement user_profiles et auth.uid()
-- =====================================================

-- Supprimer les anciennes politiques
DROP POLICY IF EXISTS "Users can create their own enrollments" ON enrollments;
DROP POLICY IF EXISTS "Users can view their own enrollments" ON enrollments;
DROP POLICY IF EXISTS "Users can update their own enrollments" ON enrollments;

-- S'assurer que RLS est activé
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Politique 1: Les utilisateurs peuvent créer leurs propres enrollments
-- Vérification basée uniquement sur user_profiles.user_email
CREATE POLICY "Users can create their own enrollments"
ON public.enrollments FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 
    FROM public.user_profiles 
    WHERE user_profiles.id = auth.uid() 
    AND user_profiles.user_email = enrollments.user_email
  )
);

-- Politique 2: Les utilisateurs peuvent voir leurs propres enrollments
-- Vérification basée uniquement sur user_profiles.user_email
CREATE POLICY "Users can view their own enrollments"
ON public.enrollments FOR SELECT
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 
    FROM public.user_profiles 
    WHERE user_profiles.id = auth.uid() 
    AND user_profiles.user_email = enrollments.user_email
  )
);

-- Politique 3: Les utilisateurs peuvent mettre à jour leurs propres enrollments
-- Vérification basée uniquement sur user_profiles.user_email
CREATE POLICY "Users can update their own enrollments"
ON public.enrollments FOR UPDATE
TO authenticated
USING (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 
    FROM public.user_profiles 
    WHERE user_profiles.id = auth.uid() 
    AND user_profiles.user_email = enrollments.user_email
  )
)
WITH CHECK (
  auth.uid() IS NOT NULL 
  AND EXISTS (
    SELECT 1 
    FROM public.user_profiles 
    WHERE user_profiles.id = auth.uid() 
    AND user_profiles.user_email = enrollments.user_email
  )
);

-- =====================================================
-- NOTES:
-- 1. Ces politiques utilisent uniquement user_profiles, pas auth.users
-- 2. L'accès est basé sur auth.uid() et user_profiles.user_email
-- 3. Cela évite l'erreur "permission denied for table users"
-- =====================================================
