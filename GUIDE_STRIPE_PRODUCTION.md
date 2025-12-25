# 🚀 Guide de Passage à Stripe Production

Ce guide vous explique comment passer de Stripe Test Mode à Stripe Production pour FrancePrepAcademy.

## ⚠️ Important

**Ne passez en production que lorsque vous êtes prêt à accepter de vrais paiements !**

## 📋 Étapes de Migration

### 1. Créer un Compte Stripe Production

1. Allez sur [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Si vous n'avez pas encore de compte production, créez-en un
3. Complétez la vérification de votre compte (informations d'entreprise, documents, etc.)

### 2. Récupérer les Clés API Production

1. Dans le Dashboard Stripe, allez dans **Developers** → **API keys**
2. **Basculez de "Test mode" à "Live mode"** (toggle en haut à droite)
3. Copiez les clés suivantes :
   - **Publishable key** (commence par `pk_live_...`)
   - **Secret key** (commence par `sk_live_...`)

⚠️ **Ne partagez JAMAIS votre Secret key !**

### 3. Créer le Produit et Prix en Production

1. Dans Stripe Dashboard (mode Live), allez dans **Products**
2. Créez un nouveau produit "Premium FrancePrepAcademy"
3. Créez un prix récurrent (subscription) :
   - Type : **Recurring**
   - Billing period : **Monthly** (ou selon votre choix)
   - Prix : Votre prix en production (ex: 19.99€)
4. **Copiez le Price ID** (commence par `price_...`)

### 4. Configurer les Webhooks en Production

1. Dans Stripe Dashboard (mode Live), allez dans **Developers** → **Webhooks**
2. Cliquez sur **Add endpoint**
3. URL du webhook : `https://[VOTRE-PROJECT-ID].supabase.co/functions/v1/stripe-webhook`
   - Remplacez `[VOTRE-PROJECT-ID]` par votre ID Supabase
4. Sélectionnez les événements à écouter :
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
5. **Copiez le Signing secret** (commence par `whsec_...`)

### 5. Mettre à Jour les Variables d'Environnement Vercel

1. Allez sur [Vercel Dashboard](https://vercel.com)
2. Sélectionnez votre projet `franceprep-academy`
3. Allez dans **Settings** → **Environment Variables**
4. Mettez à jour les variables suivantes :

#### Variables à Modifier :

```bash
# Stripe - PRODUCTION
STRIPE_SECRET_KEY=sk_live_... (votre clé secrète production)
STRIPE_PUBLISHABLE_KEY=pk_live_... (votre clé publique production)
STRIPE_PRICE_ID=price_... (votre Price ID production)

# Webhook Stripe - PRODUCTION
STRIPE_WEBHOOK_SECRET=whsec_... (votre signing secret production)
```

#### Variables à Garder (ne pas modifier) :

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...

# Gemini
GEMINI_API_KEY=...
```

### 6. Mettre à Jour Supabase Edge Function

1. Allez sur [Supabase Dashboard](https://supabase.com)
2. Sélectionnez votre projet
3. Allez dans **Edge Functions** → **stripe-webhook**
4. Mettez à jour la variable d'environnement :
   - **STRIPE_WEBHOOK_SECRET** : Votre `whsec_...` de production

### 7. Mettre à Jour le Code Frontend (Optionnel)

Si vous avez hardcodé le Price ID dans le code, mettez-le à jour :

**Fichier : `src/pages/Pricing.jsx`**

```javascript
// Remplacer l'ancien price_id par le nouveau
const PREMIUM_PRICE_ID = process.env.VITE_STRIPE_PRICE_ID || 'price_...';
```

### 8. Tester en Production

1. **Déployez sur Vercel** pour que les nouvelles variables d'environnement soient prises en compte
2. Testez le parcours complet :
   - Créer un compte
   - Aller sur la page Tarifs
   - Cliquer sur "Passer Premium"
   - Compléter le paiement avec une **carte de test Stripe** :
     - Numéro : `4242 4242 4242 4242`
     - Date : N'importe quelle date future
     - CVC : N'importe quel 3 chiffres
     - Code postal : N'importe quel code postal
3. Vérifiez que :
   - Le webhook reçoit bien les événements
   - Le profil utilisateur est mis à jour avec `is_premium = true`
   - L'utilisateur a accès aux cours Premium

### 9. Configurer le Stripe Billing Portal

Le Stripe Customer Portal est déjà configuré dans le code. Assurez-vous que :
- L'URL de retour est correcte : `https://www.franceprepacademy.fr/profile?tab=subscription`
- Les fonctionnalités du portail sont activées dans Stripe Dashboard :
  - **Settings** → **Billing** → **Customer portal**
  - Activez les options souhaitées (annulation, changement de plan, etc.)

## 🔄 Retour en Mode Test (si nécessaire)

Si vous devez revenir en mode test :

1. Dans Vercel, remettez les variables d'environnement en mode test
2. Dans Stripe Dashboard, basculez en "Test mode"
3. Utilisez les clés de test (`sk_test_...` et `pk_test_...`)

## 📝 Checklist de Migration

- [ ] Compte Stripe production créé et vérifié
- [ ] Clés API production récupérées
- [ ] Produit et prix créés en production
- [ ] Webhook configuré en production
- [ ] Variables d'environnement Vercel mises à jour
- [ ] Variables d'environnement Supabase mises à jour
- [ ] Code déployé sur Vercel
- [ ] Test de paiement effectué avec succès
- [ ] Webhook reçoit bien les événements
- [ ] Profil utilisateur mis à jour correctement
- [ ] Stripe Billing Portal fonctionne

## 🆘 Support

En cas de problème :
- Vérifiez les logs Vercel : **Deployments** → **Functions** → **Logs**
- Vérifiez les logs Supabase : **Edge Functions** → **Logs**
- Vérifiez les logs Stripe : **Developers** → **Logs**
- Contactez le support Stripe si nécessaire

## 🔐 Sécurité

- **Ne commitez JAMAIS vos clés API dans Git**
- Utilisez toujours les variables d'environnement
- Activez la 2FA sur votre compte Stripe
- Vérifiez régulièrement les accès à votre compte Stripe

## 📚 Ressources

- [Documentation Stripe](https://stripe.com/docs)
- [Guide de migration Stripe](https://stripe.com/docs/keys)
- [Stripe Billing Portal](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal)

