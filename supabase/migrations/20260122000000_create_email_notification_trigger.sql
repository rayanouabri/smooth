-- =====================================================
-- TRIGGER POUR ENVOYER DES EMAILS AUTOMATIQUES
-- =====================================================
-- Ce trigger appelle automatiquement l'Edge Function
-- send-email-notification quand une nouvelle demande
-- de contact est créée
-- =====================================================
-- 
-- PRÉREQUIS: Activer l'extension pg_net dans Supabase
-- Database → Extensions → pg_net → Enable
-- =====================================================

-- Fonction pour appeler l'Edge Function Supabase via pg_net
CREATE OR REPLACE FUNCTION notify_contact_request_pgnet()
RETURNS TRIGGER AS $$
DECLARE
  payload jsonb;
  supabase_url text;
  supabase_anon_key text;
  request_id bigint;
BEGIN
  -- URL de votre projet Supabase (à remplacer par votre URL réelle)
  supabase_url := 'https://xkecqmsgvjjtujvlotpm.supabase.co';
  
  -- Clé anon de votre projet (récupérable dans Settings → API)
  supabase_anon_key := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1ODQyMTUsImV4cCI6MjA4MjE2MDIxNX0.7hfBylzDlSXcbVvIXkhN1S1hVhLVBERjoBz1xKNLk74';

  -- Construire le payload avec toutes les données de la demande
  payload := jsonb_build_object(
    'contactRequest', jsonb_build_object(
      'id', NEW.id::text,
      'request_type', NEW.request_type,
      'name', NEW.name,
      'email', NEW.email,
      'phone', COALESCE(NEW.phone, ''),
      'form_data', NEW.form_data,
      'status', NEW.status,
      'created_at', NEW.created_at::text
    )
  );

  -- Utiliser pg_net pour envoyer la requête HTTP de manière asynchrone
  -- Note: body doit être jsonb, pas text
  SELECT net.http_post(
    url := supabase_url || '/functions/v1/send-email-notification',
    body := payload,  -- jsonb directement
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || supabase_anon_key
    )::jsonb
  ) INTO request_id;

  -- Logger le résultat
  RAISE NOTICE 'Email notification queued (request_id: %) for contact request %', request_id, NEW.id;

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- En cas d'erreur, logger mais ne pas bloquer l'insertion
    RAISE WARNING 'Failed to queue email notification for contact request %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Créer le trigger
DROP TRIGGER IF EXISTS trigger_notify_contact_request ON contact_requests;

CREATE TRIGGER trigger_notify_contact_request
AFTER INSERT ON contact_requests
FOR EACH ROW
EXECUTE FUNCTION notify_contact_request_pgnet();

-- Commentaire
COMMENT ON FUNCTION notify_contact_request_pgnet() IS 'Envoie automatiquement un email via Edge Function quand une nouvelle demande de contact est créée';
