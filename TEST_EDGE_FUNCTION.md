# 🧪 Tester l'Edge Function manuellement

## Méthode 1 : Via curl (Terminal)

Remplacez `YOUR_ANON_KEY` par votre clé anon et `YOUR_PROJECT_URL` par votre URL Supabase :

```bash
curl -X POST https://YOUR_PROJECT_URL.supabase.co/functions/v1/send-email-notification \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contactRequest": {
      "id": "test-id-123",
      "request_type": "private_course",
      "name": "Test User",
      "email": "test@example.com",
      "phone": "0123456789",
      "form_data": {
        "subject": "Mathématiques",
        "level": "L1",
        "frequency": "Hebdomadaire"
      },
      "status": "pending",
      "created_at": "2024-01-22T12:00:00Z"
    }
  }'
```

## Méthode 2 : Via Supabase Dashboard

1. Allez dans **Edge Functions** → **send-email-notification**
2. Cliquez sur **Invoke function**
3. Dans le champ "Request body", collez :

```json
{
  "contactRequest": {
    "id": "test-id-123",
    "request_type": "private_course",
    "name": "Test User",
    "email": "test@example.com",
    "phone": "0123456789",
    "form_data": {
      "subject": "Mathématiques",
      "level": "L1",
      "frequency": "Hebdomadaire"
    },
    "status": "pending",
    "created_at": "2024-01-22T12:00:00Z"
  }
}
```

4. Cliquez sur **Invoke**
5. Vérifiez la réponse et les logs

## Vérifier les résultats

1. **Vérifiez les logs** :
   - Edge Functions → send-email-notification → Logs
   - Cherchez les erreurs ou les messages de succès

2. **Vérifiez votre email** :
   - Allez sur `contact@franceprepacademy.fr`
   - Vérifiez aussi le dossier spam

3. **Vérifiez Resend Dashboard** :
   - Allez sur [Resend Dashboard](https://resend.com/emails)
   - Vérifiez que l'email a été envoyé

## Erreurs courantes

### "Email service not configured"
→ Vérifiez que `RESEND_API_KEY` est configuré dans Settings → Edge Functions → Secrets

### "Resend API error"
→ Vérifiez que votre clé API Resend est correcte et valide

### "Unauthorized"
→ Vérifiez que vous utilisez la bonne clé anon dans l'Authorization header
