-- Ajouter le suivi d'usage mensuel pour l'assistant IA
-- Executez ce SQL dans l'editeur Supabase si necessaire

ALTER TABLE user_profiles
ADD COLUMN IF NOT EXISTS ai_messages_used INTEGER DEFAULT 0;

ALTER TABLE user_profiles
ADD COLUMN IF NOT EXISTS ai_messages_month DATE DEFAULT (DATE_TRUNC('month', NOW())::date);

CREATE INDEX IF NOT EXISTS idx_user_profiles_ai_messages_month
  ON user_profiles (ai_messages_month);
