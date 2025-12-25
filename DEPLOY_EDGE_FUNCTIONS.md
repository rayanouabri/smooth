# 🚀 Déployer les Edge Functions - Guide

## Option 1 : Depuis votre ordinateur (PLUS SIMPLE)

### 1. Installer Supabase CLI

**Sur Mac/Linux** :
```bash
brew install supabase/tap/supabase
```

**Sur Windows** :
```bash
choco install supabase
```

ou télécharger depuis : https://github.com/supabase/cli/releases

### 2. Se connecter à Supabase

```bash
supabase login
```

Vous serez redirigé vers Supabase pour autoriser

### 3. Déployer les Edge Functions

```bash
# Dans le dossier du projet
cd /chemin/vers/smooth

# Déployer create-checkout-session
supabase functions deploy create-checkout-session --project-ref xkecqmsgvjjtujvlotpm

# Déployer stripe-webhook
supabase functions deploy stripe-webhook --project-ref xkecqmsgvjjtujvlotpm
```

### 4. Configurer les secrets Stripe

```bash
# Secret key Stripe
supabase secrets set STRIPE_SECRET_KEY=sk_test_51XXXXX... --project-ref xkecqmsgvjjtujvlotpm

# Secret webhook Stripe
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_1XXXXX... --project-ref xkecqmsgvjjtujvlotpm
```

✅ C'est tout ! Les Edge Functions sont déployées !

---

## Option 2 : Via l'interface Supabase Dashboard (SI SUPABASE CLI ne marche pas)

### 1. Allez sur https://supabase.com/dashboard

### 2. Sélectionnez votre projet

### 3. Allez dans **Edge Functions**

### 4. Cliquez **Create a new function**
   - Name: `create-checkout-session`
   - Copy/paste le contenu de `supabase/functions/create-checkout-session/index.ts`

### 5. Créez une 2ème fonction
   - Name: `stripe-webhook`
   - Copy/paste le contenu de `supabase/functions/stripe-webhook/index.ts`

### 6. Allez dans **Project Settings** → **Secrets**
   - Ajoutez : `STRIPE_SECRET_KEY` = `sk_test_...`
   - Ajoutez : `STRIPE_WEBHOOK_SECRET` = `whsec_...`

✅ Déployé !

---

## Option 3 : Avec Git (Si vous avez un remote Supabase configuré)

```bash
git add supabase/functions/
git commit -m "Add Stripe Edge Functions"
git push origin main
```

Supabase peut redéployer automatiquement via Git integration.

---

## ✅ Vérifier que ça marche

### 1. Dans le Supabase Dashboard → **Edge Functions**
- Vous devez voir 2 fonctions listées
- Statut : **Active** (vert) ✅

### 2. Tester une fonction

```bash
curl -X POST https://xkecqmsgvjjtujvlotpm.supabase.co/functions/v1/create-checkout-session \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "priceId": "price_test_123",
    "userId": "user-123",
    "userEmail": "test@example.com",
    "successUrl": "http://localhost:3000/success",
    "cancelUrl": "http://localhost:3000/cancel"
  }'
```

Vous devriez recevoir une URL Stripe Checkout ! 🎉

---

## 🎯 Résumé rapide

1. **Installer CLI** : `brew install supabase/tap/supabase`
2. **Se connecter** : `supabase login`
3. **Déployer** :
   ```bash
   supabase functions deploy create-checkout-session --project-ref xkecqmsgvjjtujvlotpm
   supabase functions deploy stripe-webhook --project-ref xkecqmsgvjjtujvlotpm
   ```
4. **Configurer secrets** :
   ```bash
   supabase secrets set STRIPE_SECRET_KEY=sk_test_... --project-ref xkecqmsgvjjtujvlotpm
   supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_... --project-ref xkecqmsgvjjtujvlotpm
   ```

📍 **Project ref** : `xkecqmsgvjjtujvlotpm`

---

**C'est fait ?** Testez le paiement sur votre site ! 🚀
