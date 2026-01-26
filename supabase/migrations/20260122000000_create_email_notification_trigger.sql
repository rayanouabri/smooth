-- =====================================================
-- TRIGGER POUR ENVOYER DES EMAILS AUTOMATIQUES
-- =====================================================
-- Ce trigger appelle automatiquement l'Edge Function
-- send-email-notification quand une nouvelle demande
-- de contact est créée
-- =====================================================

-- Fonction pour appeler l'Edge Function Supabase
CREATE OR REPLACE FUNCTION notify_contact_request()
RETURNS TRIGGER AS $$
DECLARE
  payload jsonb;
  response http_response;
BEGIN
  -- Construire le payload avec les données de la demande
  payload := jsonb_build_object(
    'contactRequest', jsonb_build_object(
      'id', NEW.id,
      'request_type', NEW.request_type,
      'name', NEW.name,
      'email', NEW.email,
      'phone', NEW.phone,
      'form_data', NEW.form_data,
      'status', NEW.status,
      'created_at', NEW.created_at
    )
  );

  -- Appeler l'Edge Function via HTTP
  -- Note: Cette approche nécessite l'extension http de Supabase
  -- Si l'extension n'est pas disponible, on utilisera pg_net ou webhooks
  SELECT * INTO response
  FROM http_post(
    current_setting('app.settings.supabase_url') || '/functions/v1/send-email-notification',
    payload::text,
    'application/json'::text,
    ARRAY[
      'Authorization: Bearer ' || current_setting('app.settings.supabase_anon_key', true)
    ]
  );

  -- Logger le résultat (optionnel)
  RAISE NOTICE 'Email notification sent for contact request %', NEW.id;

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- En cas d'erreur, logger mais ne pas bloquer l'insertion
    RAISE WARNING 'Failed to send email notification for contact request %: %', NEW.id, SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Version optimisée utilisant pg_net (recommandé pour Supabase)
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
  -- ⚠️ IMPORTANT: Remplacez cette valeur par votre vraie clé anon
  supabase_anon_key := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwMjY0MDAsImV4cCI6MjA1MDYwMjQwMH0.YOUR_ANON_KEY_HERE';

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
  SELECT net.http_post(
    url := supabase_url || '/functions/v1/send-email-notification',
    body := payload::text,
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
