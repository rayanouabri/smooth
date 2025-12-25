# 🚀 Configuration Stripe - GUIDE RAPIDE

## ✅ Ce qui a été fait

1. **Code mis à jour** :
   - Page Pricing.jsx avec intégration Stripe complète
   - Edge Functions Supabase créées
   - Gestion des paiements et webhooks

2. **Fichiers créés** :
   - `supabase/functions/create-checkout-session/index.ts`
   - `supabase/functions/stripe-webhook/index.ts`
   - `CONFIGURATION_STRIPE.md` (guide détaillé)

## 🎯 ÉTAPES OBLIGATOIRES (15 min)

### 1. Créer un compte Stripe

👉 https://dashboard.stripe.com/register

Mode **Test** au début (gratuit, illimité)

### 2. Obtenir vos clés API

�� https://dashboard.stripe.com/test/apikeys

Copiez :
- **Publishable key** : `pk_test_...`
- **Secret key** : `sk_test_...`

### 3. Créer un produit Premium

👉 https://dashboard.stripe.com/test/products

```
Nom : FrancePrep Academy - Premium
Prix mensuel : 29€
Prix annuel : 290€ (ou 24€/mois)
Type : Récurrent
```

**IMPORTANT** : Notez les **Price IDs** :
- `price_xxxxx` pour mensuel
- `price_yyyyy` pour annuel

### 4. Mettre à jour le code

Ouvrez `src/pages/Pricing.jsx` et remplacez ligne ~26 :

```javascript
const STRIPE_PRICES = {
  monthly: 'price_VOTRE_PRICE_ID_MENSUEL', // ⬅️ Remplacez
  annual: 'price_VOTRE_PRICE_ID_ANNUEL',   // ⬅️ Remplacez
};
```

### 5. Configurer Vercel

Ajoutez ces variables d'environnement :

```
VITE_STRIPE_PUBLISHABLE_KEY = pk_test_...
```

(La clé secrète sera dans Supabase, pas Vercel)

### 6. Installer Supabase CLI

```bash
npm install -g supabase
supabase login
```

### 7. Déployer les Edge Functions

```bash
cd /workspaces/smooth

# Déployer la fonction de checkout
supabase functions deploy create-checkout-session --project-ref xkecqmsgvjjtujvlotpm

# Déployer la fonction webhook
supabase functions deploy stripe-webhook --project-ref xkecqmsgvjjtujvlotpm
```

### 8. Configurer les secrets Supabase

```bash
supabase secrets set STRIPE_SECRET_KEY=sk_test_votre_cle_secrete --project-ref xkecqmsgvjjtujvlotpm
```

### 9. Configurer le webhook Stripe

👉 https://dashboard.stripe.com/test/webhooks

- **Endpoint URL** : `https://xkecqmsgvjjtujvlotpm.supabase.co/functions/v1/stripe-webhook`
- **Événements** :
  - `checkout.session.completed`
  - `customer.subscription.updated`
  - `customer.subscription.deleted`
  - `invoice.payment_failed`

Copiez le **Signing secret** : `whsec_...`

```bash
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_votre_secret --project-ref xkecqmsgvjjtujvlotpm
```

### 10. Ajouter le champ Premium dans la base

Dans Supabase, ajoutez ces colonnes à `user_profiles` :

```sql
ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS is_premium BOOLEAN DEFAULT FALSE;
ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS subscription_status TEXT;
ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT;
ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS stripe_subscription_id TEXT;
ALTER TABLE user_profiles ADD COLUMN IF NOT EXISTS premium_since TIMESTAMPTZ;
```

## 🧪 TESTER

### Carte de test Stripe

```
Numéro : 4242 4242 4242 4242
Date : 12/34
CVC : 123
```

### Test complet

1. Sur votre site, cliquez "Passer à Premium"
2. Remplissez avec la carte de test
3. Validez le paiement
4. Vérifiez dans Supabase que `is_premium = true`

## ✅ Checklist finale

- [ ] Compte Stripe créé (mode test)
- [ ] Clés API obtenues
- [ ] Produit Premium créé avec Price IDs
- [ ] Price IDs ajoutés dans Pricing.jsx
- [ ] VITE_STRIPE_PUBLISHABLE_KEY sur Vercel
- [ ] Edge Functions déployées sur Supabase
- [ ] STRIPE_SECRET_KEY configurée sur Supabase
- [ ] Webhook configuré sur Stripe
- [ ] STRIPE_WEBHOOK_SECRET configurée sur Supabase
- [ ] Colonnes Premium ajoutées dans user_profiles
- [ ] Test de paiement réussi ✅

## 🚀 Push sur GitHub

```bash
git add .
git commit -m "💳 Configuration Stripe complète"
git push origin main
```

Vercel redéploiera automatiquement !

## 💡 Aide rapide

- **Stripe fonctionne pas** : Vérifiez les logs dans Supabase Functions
- **Webhook échoue** : Vérifiez STRIPE_WEBHOOK_SECRET
- **Paiement ok mais pas Premium** : Vérifiez que user_email correspond dans la DB

📞 Support : contact@franceprepacademy.fr
