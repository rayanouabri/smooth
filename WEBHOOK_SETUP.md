# Configuration du Webhook Stripe

Ce guide explique comment configurer le webhook Stripe pour que les abonnements Premium fonctionnent correctement.

## 🔴 Problème résolu

Le webhook Stripe est maintenant implémenté dans `/api/stripe/webhook.js` (Vercel Serverless Function).

## 📋 Prérequis

1. **Variables d'environnement requises dans Vercel** :
   - `STRIPE_SECRET_KEY` - Clé secrète Stripe (sk_live_... ou sk_test_...)
   - `STRIPE_WEBHOOK_SECRET` - Secret du webhook (whsec_...)
   - `SUPABASE_URL` - URL de votre projet Supabase
   - `SUPABASE_SERVICE_ROLE_KEY` - Clé service role (pour bypass RLS)

## 🚀 Configuration étape par étape

### Étape 1 : Obtenir le Webhook Secret depuis Stripe

1. Allez sur [Stripe Dashboard](https://dashboard.stripe.com)
2. Naviguez vers **Developers** → **Webhooks**
3. Cliquez sur **Add endpoint**
4. Entrez l'URL de votre webhook :
   
   **IMPORTANT** : Trouvez d'abord votre URL Vercel :
   - Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
   - Sélectionnez votre projet
   - L'URL sera soit :
     - `https://votre-projet.vercel.app/api/stripe/webhook` (domaine Vercel par défaut)
     - `https://www.franceprepacademy.fr/api/stripe/webhook` (si vous avez un domaine personnalisé)
   
   **❌ NE PAS utiliser** : `vercel.com/username-projects/...` (cette URL n'existe pas)
   
   **✅ Utiliser** : `https://votre-projet.vercel.app/api/stripe/webhook`
5. Sélectionnez les événements à écouter :
   - ✅ `checkout.session.completed` (obligatoire)
   - ✅ `customer.subscription.created`
   - ✅ `customer.subscription.updated`
   - ✅ `customer.subscription.deleted`
   - ✅ `invoice.payment_succeeded`
   - ✅ `invoice.payment_failed`
6. Cliquez sur **Add endpoint**
7. **Copiez le "Signing secret"** (commence par `whsec_...`)
   - C'est votre `STRIPE_WEBHOOK_SECRET`

### Étape 2 : Configurer les variables d'environnement dans Vercel

1. Allez sur [Vercel Dashboard](https://vercel.com/dashboard)
2. Sélectionnez votre projet
3. Allez dans **Settings** → **Environment Variables**
4. Ajoutez les variables suivantes :

   | Variable | Valeur | Environnement |
   |----------|--------|---------------|
   | `STRIPE_SECRET_KEY` | `sk_live_...` ou `sk_test_...` | Production, Preview, Development |
   | `STRIPE_WEBHOOK_SECRET` | `whsec_...` | Production, Preview, Development |
   | `SUPABASE_URL` | `https://xxx.supabase.co` | Production, Preview, Development |
   | `SUPABASE_SERVICE_ROLE_KEY` | `eyJhbGc...` | Production, Preview, Development |

5. Cliquez sur **Save**
6. **Redéployez votre application** pour que les nouvelles variables soient prises en compte

### Étape 3 : Vérifier la configuration

1. Testez un paiement test sur votre site
2. Allez sur Stripe Dashboard → **Webhooks** → Votre endpoint
3. Vérifiez les **Recent events** :
   - Vous devriez voir `checkout.session.completed` avec un statut `200`
   - Si vous voyez `404` ou `500`, vérifiez les logs Vercel

## 🧪 Tester avec Stripe CLI (développement local)

Pour tester le webhook en local avant de déployer :

```bash
# Installer Stripe CLI
# Windows: https://github.com/stripe/stripe-cli/releases
# Mac: brew install stripe/stripe-cli/stripe
# Linux: voir documentation Stripe

# Se connecter à Stripe
stripe login

# Forwarder les webhooks vers votre serveur local
stripe listen --forward-to http://localhost:5173/api/stripe/webhook

# Dans un autre terminal, déclencher un événement test
stripe trigger checkout.session.completed
```

Le secret du webhook sera affiché dans le terminal (commence par `whsec_...`).

## 🔍 Debugging

### Vérifier les logs Vercel

1. Allez sur Vercel Dashboard → Votre projet → **Deployments**
2. Cliquez sur le dernier déploiement → **Functions** → `api/stripe/webhook`
3. Vérifiez les logs pour voir les erreurs

### Vérifier les logs Stripe

1. Allez sur Stripe Dashboard → **Webhooks** → Votre endpoint
2. Cliquez sur un événement pour voir les détails
3. Vérifiez le **Response** et les **Request logs**

### Erreurs communes

**❌ "Webhook signature verification failed"**
- Vérifiez que `STRIPE_WEBHOOK_SECRET` est correct
- Assurez-vous que le secret correspond à l'endpoint (test vs live)

**❌ "STRIPE_SECRET_KEY not configured"**
- Vérifiez que la variable est bien définie dans Vercel
- Redéployez après avoir ajouté la variable

**❌ "Supabase credentials not configured"**
- Vérifiez `SUPABASE_URL` et `SUPABASE_SERVICE_ROLE_KEY`
- La clé service role est différente de la clé anon

**❌ "No customer email in session"**
- Vérifiez que `customer_email` est bien passé dans `checkout.js`
- Le webhook ne peut pas fonctionner sans email

## 📝 Événements gérés

Le webhook gère les événements suivants :

| Événement | Action |
|-----------|--------|
| `checkout.session.completed` | Marque l'utilisateur comme Premium |
| `customer.subscription.created` | Met à jour le statut d'abonnement |
| `customer.subscription.updated` | Met à jour le statut d'abonnement |
| `customer.subscription.deleted` | Désactive Premium |
| `invoice.payment_succeeded` | Confirme Premium après paiement |
| `invoice.payment_failed` | Log pour monitoring (ne désactive pas) |

## 🔐 Sécurité

- ✅ Vérification de signature Stripe (protection contre les faux webhooks)
- ✅ Utilisation de `SUPABASE_SERVICE_ROLE_KEY` (bypass RLS uniquement côté serveur)
- ✅ Validation des données avant mise à jour
- ✅ Logs détaillés pour debugging

## 🎯 Résultat attendu

Après configuration :

1. ✅ Utilisateur paie sur Stripe
2. ✅ Stripe envoie webhook → `/api/stripe/webhook`
3. ✅ Webhook met à jour `is_premium = true` dans `user_profiles`
4. ✅ Utilisateur voit son statut Premium immédiatement
5. ✅ PaymentSuccess.jsx confirme le statut (fallback)

## 📞 Support

Si le webhook ne fonctionne toujours pas :

1. Vérifiez les logs Vercel
2. Vérifiez les logs Stripe Dashboard
3. Testez avec Stripe CLI en local
4. Vérifiez que toutes les variables d'environnement sont correctes
