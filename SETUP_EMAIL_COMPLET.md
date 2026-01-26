# 🚀 Setup Complet - Emails Automatiques

## 📋 Checklist de configuration

### ✅ Étape 1 : Activer pg_net dans Supabase

1. Allez dans **Supabase Dashboard** → **Database** → **Extensions**
2. Cherchez `pg_net`
3. Cliquez sur **Enable**

### ✅ Étape 2 : Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte (gratuit jusqu'à 3000 emails/mois)
3. Vérifiez votre domaine `franceprepacademy.fr` OU utilisez le domaine de test `resend.dev`

### ✅ Étape 3 : Obtenir la clé API Resend

1. Dans Resend Dashboard → **API Keys**
2. Cliquez sur **Create API Key**
3. Nommez-la "FrancePrep Academy"
4. **Copiez la clé** (commence par `re_...`)

### ✅ Étape 4 : Déployer l'Edge Function

**Option A : Via Supabase CLI** (recommandé)

```bash
# Installer Supabase CLI
npm install -g supabase

# Se connecter
supabase login

# Lier le projet (remplacez par votre project-ref)
supabase link --project-ref xkecqmsgvjjtujvlotpm

# Déployer la fonction
supabase functions deploy send-email-notification
```

**Option B : Via Dashboard Supabase**

1. Allez dans **Edge Functions**
2. Cliquez sur **Create a new function**
3. Nommez-la `send-email-notification`
4. Copiez le contenu de `supabase/functions/send-email-notification/index.ts`
5. Collez-le dans l'éditeur
6. Cliquez sur **Deploy**

### ✅ Étape 5 : Configurer les secrets Supabase

1. Allez dans **Settings** → **Edge Functions** → **Secrets**
2. Ajoutez ces 3 secrets :

```
RESEND_API_KEY = re_votre_cle_api_resend
ADMIN_EMAIL = contact@franceprepacademy.fr
FROM_EMAIL = noreply@franceprepacademy.fr
```

**OU** si vous utilisez le domaine de test Resend :

```
RESEND_API_KEY = re_votre_cle_api_resend
ADMIN_EMAIL = contact@franceprepacademy.fr
FROM_EMAIL = onboarding@resend.dev
```

### ✅ Étape 6 : Récupérer votre clé anon Supabase

1. Allez dans **Settings** → **API**
2. Copiez la **anon/public key** (commence par `eyJhbGci...`)

### ✅ Étape 7 : Exécuter la migration SQL

1. Allez dans **SQL Editor** dans Supabase
2. Ouvrez `supabase/migrations/20260122000000_create_email_notification_trigger.sql`
3. **IMPORTANT** : Remplacez `YOUR_ANON_KEY_HERE` par votre vraie clé anon (étape 6)
4. Remplacez aussi l'URL si nécessaire (ligne avec `xkecqmsgvjjtujvlotpm`)
5. Exécutez le script complet

### ✅ Étape 8 : Tester

1. Allez sur votre site
2. Créez une demande de cours particulier ou de service expert
3. Vérifiez que vous recevez un email sur **contact@franceprepacademy.fr**

## 🔍 Vérification

### Vérifier que le trigger est actif

```sql
-- Dans SQL Editor
SELECT * FROM pg_trigger WHERE tgname = 'trigger_notify_contact_request';
```

### Vérifier les logs de l'Edge Function

1. Allez dans **Edge Functions** → **send-email-notification** → **Logs**
2. Vérifiez qu'il n'y a pas d'erreurs

### Vérifier les notifications envoyées

```sql
-- Dans SQL Editor
SELECT * FROM contact_notifications ORDER BY sent_at DESC LIMIT 10;
```

## 🐛 Dépannage

### Erreur "pg_net extension not found"
→ Activez l'extension dans **Database** → **Extensions**

### Erreur "Resend API error"
→ Vérifiez que `RESEND_API_KEY` est correct dans les secrets

### Pas d'email reçu
1. Vérifiez les logs de l'Edge Function
2. Vérifiez que le trigger est actif (requête SQL ci-dessus)
3. Vérifiez votre spam
4. Testez manuellement l'Edge Function (voir CONFIGURATION_EMAIL_AUTOMATIQUE.md)

### Erreur "function net.http_post does not exist"
→ Activez l'extension `pg_net` dans **Database** → **Extensions**

## 📧 Format des emails

Les emails contiennent :
- ✅ Informations du client (nom, email, téléphone)
- ✅ Détails de la demande (matière, niveau, budget, etc.)
- ✅ ID de la demande pour référence
- ✅ Date et heure de la demande
- ✅ Design HTML professionnel

## 🎉 C'est tout !

Une fois configuré, vous recevrez **automatiquement** tous les emails sur **contact@franceprepacademy.fr** !
