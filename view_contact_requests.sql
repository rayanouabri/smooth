-- =====================================================
-- REQUÊTES UTILES POUR CONSULTER LES DEMANDES
-- =====================================================

-- Voir toutes les demandes en attente
SELECT 
  id,
  request_type,
  name,
  email,
  phone,
  status,
  created_at,
  CASE 
    WHEN request_type = 'private_course' THEN form_data->>'subject'
    WHEN request_type = 'expert_service' THEN form_data->>'serviceType'
  END as service_name
FROM contact_requests
WHERE status = 'pending'
ORDER BY created_at DESC;

-- Voir toutes les demandes de cours particuliers
SELECT 
  id,
  name,
  email,
  phone,
  form_data->>'subject' as matiere,
  form_data->>'level' as niveau,
  form_data->>'frequency' as frequence,
  form_data->>'budget' as budget,
  status,
  created_at
FROM contact_requests
WHERE request_type = 'private_course'
ORDER BY created_at DESC;

-- Voir toutes les demandes de services experts
SELECT 
  id,
  name,
  email,
  phone,
  form_data->>'serviceType' as type_service,
  form_data->>'urgency' as urgence,
  form_data->>'budget' as budget,
  form_data->>'description' as description,
  status,
  created_at
FROM contact_requests
WHERE request_type = 'expert_service'
ORDER BY created_at DESC;

-- Marquer une demande comme "contactée"
UPDATE contact_requests
SET status = 'contacted', updated_at = NOW()
WHERE id = 'VOTRE_ID_ICI';

-- Ajouter une note à une demande
UPDATE contact_requests
SET notes = 'Votre note ici', updated_at = NOW()
WHERE id = 'VOTRE_ID_ICI';

-- Statistiques
SELECT 
  request_type,
  status,
  COUNT(*) as nombre
FROM contact_requests
GROUP BY request_type, status
ORDER BY request_type, status;

-- Demandes récentes (dernières 24h)
SELECT 
  id,
  request_type,
  name,
  email,
  status,
  created_at
FROM contact_requests
WHERE created_at >= NOW() - INTERVAL '24 hours'
ORDER BY created_at DESC;


