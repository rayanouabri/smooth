-- =====================================================
-- TABLE POUR STOCKER LES DEMANDES DE CONTACT
-- =====================================================
-- Cette solution n'utilise AUCUN service externe
-- Les demandes sont stockées dans Supabase et vous pouvez
-- les consulter via le dashboard ou recevoir des notifications
-- =====================================================

-- Table pour les demandes de cours particuliers
CREATE TABLE IF NOT EXISTS contact_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  request_type TEXT NOT NULL CHECK (request_type IN ('private_course', 'expert_service')),
  
  -- Informations du client
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  
  -- Données spécifiques (stockées en JSONB pour flexibilité)
  form_data JSONB NOT NULL,
  
  -- Métadonnées
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'in_progress', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour les recherches
CREATE INDEX IF NOT EXISTS idx_contact_requests_type ON contact_requests(request_type);
CREATE INDEX IF NOT EXISTS idx_contact_requests_status ON contact_requests(status);
CREATE INDEX IF NOT EXISTS idx_contact_requests_created ON contact_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_requests_email ON contact_requests(email);

-- Table pour les notifications (optionnel)
CREATE TABLE IF NOT EXISTS contact_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_request_id UUID REFERENCES contact_requests(id) ON DELETE CASCADE,
  notification_type TEXT NOT NULL,
  sent_at TIMESTAMPTZ DEFAULT NOW()
);

-- Fonction pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_contact_requests_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_contact_requests_timestamp ON contact_requests;

CREATE TRIGGER update_contact_requests_timestamp
BEFORE UPDATE ON contact_requests
FOR EACH ROW
EXECUTE FUNCTION update_contact_requests_updated_at();

-- Vue pour faciliter la consultation
CREATE OR REPLACE VIEW contact_requests_view AS
SELECT 
  id,
  request_type,
  name,
  email,
  phone,
  form_data,
  status,
  notes,
  created_at,
  updated_at,
  CASE 
    WHEN request_type = 'private_course' THEN form_data->>'subject'
    WHEN request_type = 'expert_service' THEN form_data->>'serviceType'
    ELSE 'N/A'
  END as service_name
FROM contact_requests
ORDER BY created_at DESC;

-- RLS (Row Level Security) - Les utilisateurs peuvent voir leurs propres demandes
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Supprimer les politiques existantes si elles existent
DROP POLICY IF EXISTS "Users can view their own contact requests" ON contact_requests;
DROP POLICY IF EXISTS "Users can insert their own contact requests" ON contact_requests;
DROP POLICY IF EXISTS "Admins can view all contact requests" ON contact_requests;
DROP POLICY IF EXISTS "Admins can update contact requests" ON contact_requests;

CREATE POLICY "Users can view their own contact requests"
ON contact_requests FOR SELECT
TO authenticated
USING (
  email = (
    SELECT email FROM auth.users 
    WHERE id = auth.uid()
  )
);

-- Les utilisateurs authentifiés peuvent insérer leurs propres demandes
CREATE POLICY "Users can insert their own contact requests"
ON contact_requests FOR INSERT
TO authenticated
WITH CHECK (true);

-- Les admins peuvent tout voir (ajustez l'email selon vos besoins)
CREATE POLICY "Admins can view all contact requests"
ON contact_requests FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'contact@franceprepacademy.fr'
  )
  OR
  EXISTS (
    SELECT 1 FROM user_profiles 
    WHERE user_id = auth.uid() 
    AND user_email LIKE '%@franceprepacademy.fr'
  )
);

-- Les admins peuvent mettre à jour le statut
CREATE POLICY "Admins can update contact requests"
ON contact_requests FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'contact@franceprepacademy.fr'
  )
  OR
  EXISTS (
    SELECT 1 FROM user_profiles 
    WHERE user_id = auth.uid() 
    AND user_email LIKE '%@franceprepacademy.fr'
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE id = auth.uid() 
    AND email = 'contact@franceprepacademy.fr'
  )
  OR
  EXISTS (
    SELECT 1 FROM user_profiles 
    WHERE user_id = auth.uid() 
    AND user_email LIKE '%@franceprepacademy.fr'
  )
);

COMMENT ON TABLE contact_requests IS 'Stocke toutes les demandes de contact (cours particuliers et services experts)';
COMMENT ON COLUMN contact_requests.form_data IS 'Contient toutes les données du formulaire au format JSON';
COMMENT ON COLUMN contact_requests.status IS 'pending: en attente, contacted: contacté, in_progress: en cours, completed: terminé, cancelled: annulé';

