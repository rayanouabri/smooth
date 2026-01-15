-- Mettre à jour le trigger pour créer le profil avec les colonnes premium
-- Exécutez ce SQL dans l'éditeur SQL de Supabase

-- Fonction pour créer un profil utilisateur automatiquement avec colonnes premium
-- Fix sécurité : search_path défini explicitement
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

-- Le trigger existe déjà, pas besoin de le recréer
-- Mais on peut vérifier qu'il est bien configuré
SELECT tgname, tgrelid::regclass 
FROM pg_trigger 
WHERE tgname = 'on_auth_user_created';

