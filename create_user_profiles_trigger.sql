-- =====================================================
-- TRIGGER POUR CRÉER AUTOMATIQUEMENT UN PROFIL UTILISATEUR
-- =====================================================
-- Ce trigger crée automatiquement un profil dans user_profiles
-- lorsqu'un utilisateur est créé dans auth.users
-- C'est la solution recommandée par Supabase
-- =====================================================

-- Fonction pour créer le profil utilisateur
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insérer le profil utilisateur avec toutes les colonnes nécessaires
  -- On utilise INSERT avec ON CONFLICT pour éviter les erreurs si le profil existe déjà
  INSERT INTO public.user_profiles (
    id,
    user_email,
    full_name,
    is_premium,
    subscription_status
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    false,
    'inactive'
  )
  ON CONFLICT (id) DO NOTHING; -- Éviter les erreurs si le profil existe déjà
  
  -- Note: user_id n'est probablement pas une colonne séparée si id = user.id
  -- Si la table a une colonne user_id, décommenter la ligne suivante:
  -- ON CONFLICT (id) DO UPDATE SET user_id = NEW.id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Supprimer le trigger s'il existe déjà
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Créer le trigger qui se déclenche après l'insertion dans auth.users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- =====================================================
-- NOTES:
-- 1. Ce trigger s'exécute AUTOMATIQUEMENT côté serveur
-- 2. Il fonctionne pour TOUTES les méthodes d'inscription:
--    - Email/Password
--    - OAuth (Google, etc.)
--    - Magic Link
-- 3. Il utilise SECURITY DEFINER pour avoir les permissions
--    nécessaires pour insérer dans user_profiles
-- 4. ON CONFLICT DO NOTHING évite les erreurs si le profil
--    existe déjà (cas où il est créé manuellement avant)
-- =====================================================
