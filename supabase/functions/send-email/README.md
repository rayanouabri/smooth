# Send Email Edge Function

Cette fonction permet d'envoyer des emails depuis votre application.

## Configuration

### Option 1: Utiliser Resend (Recommandé)

1. Créez un compte sur [Resend](https://resend.com)
2. Obtenez votre API Key
3. Ajoutez-la dans Supabase:
   ```bash
   supabase secrets set RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

### Option 2: Utiliser SendGrid

1. Modifiez le code pour utiliser SendGrid
2. Ajoutez votre API Key:
   ```bash
   supabase secrets set SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```

## Déploiement

```bash
supabase functions deploy send-email
```

## Utilisation

```javascript
await SendEmail({
  to: "user@example.com",
  subject: "Sujet de l'email",
  html: "<h1>Contenu HTML</h1>",
  text: "Contenu texte"
});
```


