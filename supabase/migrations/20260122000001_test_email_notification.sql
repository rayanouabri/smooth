-- =====================================================
-- SCRIPT DE DIAGNOSTIC ET TEST - Emails automatiques
-- =====================================================
-- Exécutez ce script pour diagnostiquer les problèmes
-- =====================================================

-- 1. Vérifier que pg_net est activé
SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM pg_extension WHERE extname = 'pg_net') 
    THEN '✅ pg_net est activé'
    ELSE '❌ pg_net N''EST PAS activé - Allez dans Database → Extensions → pg_net → Enable'
  END as pg_net_status;

-- 2. Vérifier que le trigger existe
SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'trigger_notify_contact_request') 
    THEN '✅ Le trigger existe'
    ELSE '❌ Le trigger N''EXISTE PAS - Réexécutez le script de migration'
  END as trigger_status;

-- 3. Vérifier que la fonction existe
SELECT 
  CASE 
    WHEN EXISTS (SELECT 1 FROM pg_proc WHERE proname = 'notify_contact_request_pgnet') 
    THEN '✅ La fonction existe'
    ELSE '❌ La fonction N''EXISTE PAS - Réexécutez le script de migration'
  END as function_status;

-- 4. Voir les dernières requêtes HTTP envoyées par pg_net
SELECT 
  id,
  created,
  method,
  url,
  status_code,
  error_msg
FROM net.http_request_queue 
ORDER BY created DESC 
LIMIT 5;

-- 5. Voir les notifications créées
SELECT 
  id,
  contact_request_id,
  notification_type,
  sent_at
FROM contact_notifications 
ORDER BY sent_at DESC 
LIMIT 5;

-- 6. Voir les dernières demandes de contact
SELECT 
  id,
  request_type,
  name,
  email,
  status,
  created_at
FROM contact_requests 
ORDER BY created_at DESC 
LIMIT 5;

-- 7. TEST : Créer une demande de test pour déclencher le trigger
-- Décommentez les lignes ci-dessous pour tester
/*
INSERT INTO contact_requests (
  request_type,
  name,
  email,
  phone,
  form_data,
  status
) VALUES (
  'private_course',
  'Test User - Diagnostic',
  'test@example.com',
  '0123456789',
  '{"subject": "Mathématiques", "level": "L1", "frequency": "Hebdomadaire"}'::jsonb,
  'pending'
) RETURNING id, created_at;
*/

-- 8. Vérifier les erreurs dans les logs (si disponibles)
-- Note: Les logs détaillés sont visibles dans Edge Functions → send-email-notification → Logs
