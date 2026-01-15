-- =====================================================
-- CORRECTION DES PROBLÈMES DE SÉCURITÉ
-- =====================================================
-- 1. Fix Function Search Path Mutable pour handle_new_user
-- 2. Note sur Leaked Password Protection
-- =====================================================

-- 1. CORRIGER LA FONCTION handle_new_user
-- Le problème : search_path mutable (risque de sécurité)
-- Solution : Définir explicitement le search_path

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  INSERT INTO public.user_profiles (
    id,
    user_id, 
    user_email, 
    full_name,
    is_premium,
    subscription_status
  )
  VALUES (
    NEW.id,
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email),
    FALSE,
    'inactive'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

-- Vérification
SELECT 
  p.proname as function_name,
  pg_get_functiondef(p.oid) as function_definition
FROM pg_proc p
JOIN pg_namespace n ON p.pronamespace = n.oid
WHERE n.nspname = 'public' 
  AND p.proname = 'handle_new_user';

-- =====================================================
-- 2. PROTECTION CONTRE LES MOTS DE PASSE DIVULGUÉS
-- =====================================================
-- Ce problème doit être résolu dans l'interface Supabase
-- Allez dans : Authentication > Settings > Password Protection
-- Activez "Enable leaked password protection"
-- =====================================================

-- Note : Cette fonctionnalité ne peut pas être activée via SQL
-- Vous devez l'activer dans l'interface Supabase :
-- 1. Allez dans votre projet Supabase
-- 2. Menu "Authentication" > "Settings"
-- 3. Section "Password Protection"
-- 4. Activez "Enable leaked password protection"
-- 5. Sauvegardez

-- =====================================================
-- VÉRIFICATION
-- =====================================================
-- Après avoir exécuté ce script et activé la protection,
-- les deux warnings devraient disparaître du Security Advisor


