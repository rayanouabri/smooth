# 🔍 Diagnostic - Emails non reçus

## ✅ Checklist de vérification

### 1. Vérifier que pg_net est activé

```sql
-- Dans SQL Editor, exécutez :
SELECT * FROM pg_extension WHERE extname = 'pg_net';
```

Si rien ne s'affiche, activez l'extension :
- Database → Extensions → pg_net → Enable

### 2. Vérifier que le trigger existe

```sql
-- Dans SQL Editor, exécutez :
SELECT * FROM pg_trigger WHERE tgname = 'trigger_notify_contact_request';
```

Si rien ne s'affiche, le trigger n'existe pas. Réexécutez le script SQL.

### 3. Vérifier que la fonction existe

```sql
-- Dans SQL Editor, exécutez :
SELECT proname, prosrc FROM pg_proc WHERE proname = 'notify_contact_request_pgnet';
```

### 4. Vérifier les secrets de l'Edge Function

- Allez dans **Settings** → **Edge Functions** → **Secrets**
- Vérifiez que ces 3 secrets existent :
  - `RESEND_API_KEY`
  - `ADMIN_EMAIL`
  - `FROM_EMAIL`

### 5. Vérifier que l'Edge Function est déployée

- Allez dans **Edge Functions**
- Vérifiez que `send-email-notification` existe et est déployée

### 6. Tester manuellement l'Edge Function

Dans SQL Editor, testez manuellement :

```sql
-- Créer une demande de test
INSERT INTO contact_requests (
  request_type,
  name,
  email,
  phone,
  form_data,
  status
) VALUES (
  'private_course',
  'Test User',
  'test@example.com',
  '0123456789',
  '{"subject": "Mathématiques", "level": "L1"}'::jsonb,
  'pending'
);
```

Puis vérifiez les logs :
- **Edge Functions** → **send-email-notification** → **Logs**

### 7. Vérifier les logs pg_net

```sql
-- Voir les requêtes HTTP envoyées par pg_net
SELECT * FROM net.http_request_queue 
ORDER BY created DESC 
LIMIT 10;
```

### 8. Vérifier les notifications créées

```sql
-- Voir si des notifications ont été créées
SELECT * FROM contact_notifications 
ORDER BY sent_at DESC 
LIMIT 10;
```

## 🐛 Problèmes courants

### Problème : "function net.http_post does not exist"
**Solution** : Activez l'extension `pg_net` dans Database → Extensions

### Problème : "RESEND_API_KEY n'est pas configurée"
**Solution** : Ajoutez le secret `RESEND_API_KEY` dans Settings → Edge Functions → Secrets

### Problème : "Failed to queue email notification"
**Solution** : Vérifiez que :
1. La clé anon est correcte dans le script SQL
2. L'URL Supabase est correcte
3. L'Edge Function est déployée

### Problème : Email dans le spam
**Solution** : Vérifiez votre dossier spam/courrier indésirable

## 📧 Tester avec Resend directement

Si rien ne fonctionne, testez Resend directement :

1. Allez sur [Resend Dashboard](https://resend.com/emails)
2. Cliquez sur "Send Test Email"
3. Envoyez un email à `contact@franceprepacademy.fr`
4. Si vous le recevez, le problème vient de Supabase
5. Si vous ne le recevez pas, le problème vient de Resend ou de votre domaine
