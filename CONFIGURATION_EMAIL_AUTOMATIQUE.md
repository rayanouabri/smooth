# 📧 Configuration du système d'emails automatiques

Ce guide vous explique comment configurer le système d'emails automatiques pour recevoir toutes les notifications sur **contact@franceprepacademy.fr**.

## 🎯 Fonctionnalités

Le système envoie automatiquement un email à **contact@franceprepacademy.fr** quand :
- ✅ Une nouvelle demande de cours particulier est créée
- ✅ Une nouvelle demande de service expert est créée
- ✅ Toute autre demande de contact est créée

## 📋 Prérequis

1. Un compte [Resend](https://resend.com) (gratuit jusqu'à 3000 emails/mois)
2. Accès au dashboard Supabase
3. Accès aux variables d'environnement Supabase

## 🚀 Étapes de configuration

### Étape 1 : Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte (gratuit)
3. Vérifiez votre domaine `franceprepacademy.fr` ou utilisez le domaine de test de Resend

### Étape 2 : Obtenir votre clé API Resend

1. Dans le dashboard Resend, allez dans **API Keys**
2. Cliquez sur **Create API Key**
3. Donnez un nom (ex: "FrancePrep Academy")
4. Copiez la clé API (commence par `re_...`)

### Étape 3 : Configurer les variables d'environnement Supabase

1. Allez dans votre projet Supabase
2. Allez dans **Settings** → **Edge Functions** → **Secrets**
3. Ajoutez les secrets suivants :

```
RESEND_API_KEY = re_votre_cle_api_resend
ADMIN_EMAIL = contact@franceprepacademy.fr
FROM_EMAIL = noreply@franceprepacademy.fr
```

**OU** si vous utilisez le domaine de test de Resend :

```
RESEND_API_KEY = re_votre_cle_api_resend
ADMIN_EMAIL = contact@franceprepacademy.fr
FROM_EMAIL = onboarding@resend.dev
```

### Étape 4 : Déployer l'Edge Function

1. **Via Supabase CLI** (recommandé) :

```bash
# Installer Supabase CLI si ce n'est pas fait
npm install -g supabase

# Se connecter à Supabase
supabase login

# Lier votre projet
supabase link --project-ref votre-project-ref

# Déployer la fonction
supabase functions deploy send-email-notification
```

2. **Via le Dashboard Supabase** :

   - Allez dans **Edge Functions**
   - Cliquez sur **Create a new function**
   - Nommez-la `send-email-notification`
   - Copiez le contenu de `supabase/functions/send-email-notification/index.ts`
   - Collez-le dans l'éditeur
   - Cliquez sur **Deploy**

### Étape 5 : Activer l'extension pg_net dans Supabase

1. Allez dans **Database** → **Extensions**
2. Cherchez `pg_net`
3. Cliquez sur **Enable**

### Étape 6 : Exécuter la migration SQL

1. Allez dans **SQL Editor** dans Supabase
2. Ouvrez le fichier `supabase/migrations/20260122000000_create_email_notification_trigger.sql`
3. Copiez tout le contenu
4. Collez-le dans l'éditeur SQL
5. Cliquez sur **Run**

### Étape 7 : Configurer les variables dans la fonction PostgreSQL

Si les variables d'environnement ne sont pas automatiquement disponibles, vous pouvez les définir manuellement :

```sql
-- Définir l'URL de votre projet Supabase
ALTER DATABASE postgres SET app.settings.supabase_url = 'https://xkecqmsgvjjtujvlotpm.supabase.co';

-- Définir la clé anon (récupérable dans Settings → API)
ALTER DATABASE postgres SET app.settings.supabase_anon_key = 'votre_cle_anon';
```

## ✅ Vérification

1. **Tester manuellement** :
   - Créez une demande de cours particulier depuis le site
   - Vérifiez que vous recevez un email sur **contact@franceprepacademy.fr**

2. **Vérifier les logs** :
   - Allez dans **Edge Functions** → **send-email-notification** → **Logs**
   - Vérifiez qu'il n'y a pas d'erreurs

3. **Vérifier la base de données** :
   - Allez dans **Table Editor** → **contact_notifications**
   - Vérifiez qu'une entrée a été créée pour chaque email envoyé

## 🔧 Dépannage

### L'email n'est pas envoyé

1. **Vérifier les secrets** :
   - Allez dans **Settings** → **Edge Functions** → **Secrets**
   - Vérifiez que `RESEND_API_KEY` est bien configuré

2. **Vérifier les logs de l'Edge Function** :
   - Allez dans **Edge Functions** → **send-email-notification** → **Logs**
   - Cherchez les erreurs

3. **Vérifier le trigger** :
   ```sql
   -- Vérifier que le trigger existe
   SELECT * FROM pg_trigger WHERE tgname = 'trigger_notify_contact_request';
   ```

4. **Tester l'Edge Function manuellement** :
   ```bash
   curl -X POST https://xkecqmsgvjjtujvlotpm.supabase.co/functions/v1/send-email-notification \
     -H "Authorization: Bearer YOUR_ANON_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "contactRequest": {
         "id": "test-id",
         "request_type": "private_course",
         "name": "Test User",
         "email": "test@example.com",
         "form_data": {"subject": "Mathématiques"},
         "status": "pending",
         "created_at": "2024-01-22T00:00:00Z"
       }
     }'
   ```

### Erreur "pg_net extension not found"

1. Allez dans **Database** → **Extensions**
2. Cherchez `pg_net`
3. Cliquez sur **Enable**

### Erreur "Resend API error"

1. Vérifiez que votre clé API Resend est correcte
2. Vérifiez que vous avez vérifié votre domaine dans Resend
3. Si vous utilisez le domaine de test, utilisez `onboarding@resend.dev` comme `FROM_EMAIL`

## 📊 Monitoring

- **Logs Edge Function** : Supabase Dashboard → Edge Functions → send-email-notification → Logs
- **Notifications envoyées** : Table `contact_notifications` dans Supabase
- **Statistiques Resend** : Dashboard Resend → Analytics

## 🔒 Sécurité

- ✅ Les secrets sont stockés de manière sécurisée dans Supabase
- ✅ L'Edge Function nécessite une authentification
- ✅ Le trigger utilise `SECURITY DEFINER` pour les permissions nécessaires
- ✅ Les emails sont envoyés uniquement à l'adresse configurée

## 📝 Notes importantes

- Les emails sont envoyés **automatiquement** dès qu'une demande est créée
- Le système est **asynchrone** : l'insertion dans la base n'est pas bloquée si l'email échoue
- Les erreurs sont loggées mais n'empêchent pas la création de la demande
- Vous pouvez répondre directement aux emails pour contacter les clients

## 🎉 C'est tout !

Une fois configuré, vous recevrez automatiquement tous les emails de contact sur **contact@franceprepacademy.fr** !
