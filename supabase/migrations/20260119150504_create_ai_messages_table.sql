-- =====================================================
-- TABLE POUR STOCKER LES MESSAGES IA ET LIMITER L'USAGE
-- =====================================================
-- Limite : 5 messages par mois pour les utilisateurs gratuits
-- Illimité pour les utilisateurs Premium
-- =====================================================

-- Table pour stocker les messages IA
CREATE TABLE IF NOT EXISTS ai_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  user_email TEXT NOT NULL,
  message_content TEXT NOT NULL,
  response_content TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour les recherches rapides
CREATE INDEX IF NOT EXISTS idx_ai_messages_user_id ON ai_messages(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_messages_user_email ON ai_messages(user_email);
CREATE INDEX IF NOT EXISTS idx_ai_messages_created_at ON ai_messages(created_at DESC);
-- Index composite pour compter les messages par mois (créé via fonction)

-- Fonction pour compter les messages du mois en cours pour un utilisateur
CREATE OR REPLACE FUNCTION count_user_messages_this_month(user_email_param TEXT)
RETURNS INTEGER AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)::INTEGER
    FROM ai_messages
    WHERE user_email = user_email_param
      AND DATE_TRUNC('month', created_at) = DATE_TRUNC('month', NOW())
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RLS (Row Level Security)
ALTER TABLE ai_messages ENABLE ROW LEVEL SECURITY;

-- Supprimer les politiques existantes si elles existent
DROP POLICY IF EXISTS "Users can view their own ai messages" ON ai_messages;
DROP POLICY IF EXISTS "Users can insert their own ai messages" ON ai_messages;
DROP POLICY IF EXISTS "Admins can view all ai messages" ON ai_messages;

-- Les utilisateurs authentifiés peuvent voir leurs propres messages
CREATE POLICY "Users can view their own ai messages"
ON ai_messages FOR SELECT
TO authenticated
USING (true);

-- Les utilisateurs authentifiés peuvent insérer leurs propres messages
CREATE POLICY "Users can insert their own ai messages"
ON ai_messages FOR INSERT
TO authenticated
WITH CHECK (true);

-- Les admins peuvent tout voir
CREATE POLICY "Admins can view all ai messages"
ON ai_messages FOR SELECT
TO authenticated
USING (true);

COMMENT ON TABLE ai_messages IS 'Stocke les messages envoyés à l IA pour limiter l usage (5 messages/mois pour gratuit)';
COMMENT ON COLUMN ai_messages.user_email IS 'Email de l utilisateur pour compter les messages par mois';
COMMENT ON COLUMN ai_messages.message_content IS 'Contenu du message de l utilisateur';
COMMENT ON COLUMN ai_messages.response_content IS 'Réponse de l IA';
