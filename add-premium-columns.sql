-- Ajouter les colonnes premium à la table user_profiles
-- Exécutez ce SQL dans l'éditeur SQL de Supabase

ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS is_premium BOOLEAN DEFAULT FALSE;

ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'inactive';

ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT;

ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT;

ALTER TABLE user_profiles 
ADD COLUMN IF NOT EXISTS premium_since TIMESTAMPTZ;

-- Mettre à jour les profils existants qui ont subscription_plan = 'premium'
UPDATE user_profiles 
SET is_premium = TRUE, 
    subscription_status = 'active'
WHERE subscription_plan = 'premium' OR subscription_plan = 'intensif';

-- Créer un index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_user_profiles_is_premium ON user_profiles(is_premium);
CREATE INDEX IF NOT EXISTS idx_user_profiles_subscription_status ON user_profiles(subscription_status);

