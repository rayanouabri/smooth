-- Ajouter la colonne stripe_session_id si elle n'existe pas
ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS stripe_session_id TEXT;

-- Commentaire
COMMENT ON COLUMN user_profiles.stripe_session_id IS 'ID de la session Stripe checkout';
