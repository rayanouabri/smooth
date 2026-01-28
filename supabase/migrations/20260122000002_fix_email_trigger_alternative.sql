-- =====================================================
-- SOLUTION ALTERNATIVE : Utiliser Supabase Database Webhooks
-- =====================================================
-- Si pg_net ne fonctionne pas, on peut utiliser
-- Supabase Database Webhooks qui sont plus simples
-- =====================================================

-- Note: Cette migration crée une fonction qui sera appelée
-- par un webhook Supabase configuré manuellement dans le dashboard

-- Fonction simplifiée pour être appelée par webhook
CREATE OR REPLACE FUNCTION notify_contact_request_webhook()
RETURNS TRIGGER AS $$
BEGIN
  -- Cette fonction sera appelée par un webhook Supabase
  -- Le webhook doit être configuré dans Supabase Dashboard
  -- Database → Webhooks → New Webhook
  -- Table: contact_requests
  -- Events: INSERT
  -- Type: HTTP Request
  -- URL: https://xkecqmsgvjjtujvlotpm.supabase.co/functions/v1/send-email-notification
  
  -- Pour l'instant, on retourne juste NEW
  -- Le webhook Supabase enverra automatiquement les données
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Alternative: Utiliser pg_cron pour vérifier périodiquement les nouvelles demandes
-- et envoyer les emails (moins élégant mais plus fiable)

-- Fonction pour envoyer les emails des demandes en attente
CREATE OR REPLACE FUNCTION process_pending_email_notifications()
RETURNS void AS $$
DECLARE
  request_record RECORD;
  supabase_url text;
  supabase_anon_key text;
  request_id bigint;
  payload jsonb;
BEGIN
  supabase_url := 'https://xkecqmsgvjjtujvlotpm.supabase.co';
  supabase_anon_key := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1ODQyMTUsImV4cCI6MjA4MjE2MDIxNX0.7hfBylzDlSXcbVvIXkhN1S1hVhLVBERjoBz1xKNLk74';

  -- Trouver les demandes qui n'ont pas encore de notification
  FOR request_record IN
    SELECT cr.*
    FROM contact_requests cr
    LEFT JOIN contact_notifications cn ON cn.contact_request_id = cr.id
    WHERE cn.id IS NULL
    AND cr.created_at > NOW() - INTERVAL '1 hour'
    ORDER BY cr.created_at ASC
    LIMIT 10
  LOOP
    -- Construire le payload
    payload := jsonb_build_object(
      'contactRequest', jsonb_build_object(
        'id', request_record.id::text,
        'request_type', request_record.request_type,
        'name', request_record.name,
        'email', request_record.email,
        'phone', COALESCE(request_record.phone, ''),
        'form_data', request_record.form_data,
        'status', request_record.status,
        'created_at', request_record.created_at::text
      )
    );

    -- Envoyer la requête HTTP
    BEGIN
      SELECT net.http_post(
        url := supabase_url || '/functions/v1/send-email-notification',
        body := payload::text,
        headers := jsonb_build_object(
          'Content-Type', 'application/json',
          'Authorization', 'Bearer ' || supabase_anon_key
        )::jsonb
      ) INTO request_id;

      RAISE NOTICE 'Email notification queued for contact request % (request_id: %)', request_record.id, request_id;
    EXCEPTION
      WHEN OTHERS THEN
        RAISE WARNING 'Failed to queue email for contact request %: %', request_record.id, SQLERRM;
    END;
  END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Créer un job pg_cron pour exécuter cette fonction toutes les minutes
-- Note: pg_cron doit être activé dans Database → Extensions
SELECT cron.schedule(
  'process-email-notifications',
  '* * * * *', -- Toutes les minutes
  $$SELECT process_pending_email_notifications();$$
);
