# 💳 Configuration Stripe - Guide Complet

## 🎯 Étapes de configuration

### 1️⃣ Créer/Configurer votre compte Stripe

1. **Allez sur** : https://dashboard.stripe.com/register
2. **Créez un compte** ou connectez-vous
3. **Activez le mode Test** (pour tester d'abord)

### 2️⃣ Obtenir vos clés API

1. Dans le dashboard Stripe : https://dashboard.stripe.com/test/apikeys
2. Copiez ces 2 clés :

   **Clé Publique (Publishable key)** :
   - Format : `pk_test_...` ou `pk_live_...`
   - Utilisée côté client (frontend)

   **Clé Secrète (Secret key)** :
   - Format : `sk_test_...` ou `sk_live_...`
   - ⚠️ À garder SECRÈTE (backend uniquement)

### 3️⃣ Configurer sur Vercel

Allez dans **Vercel** → **Settings** → **Environment Variables**

Ajoutez ces 2 variables :

```
Variable 1 :
├─ Name  : VITE_STRIPE_PUBLISHABLE_KEY
└─ Value : pk_test_51...

Variable 2 :
├─ Name  : STRIPE_SECRET_KEY
└─ Value : sk_test_51...
```

⚠️ **Important** : 
- `VITE_STRIPE_PUBLISHABLE_KEY` (avec VITE_) → accessible frontend
- `STRIPE_SECRET_KEY` (sans VITE_) → backend seulement

### 4️⃣ Créer des produits sur Stripe

1. Dans Stripe Dashboard : **Products** → **Add Product**

2. **Produit Premium** :
   ```
   Nom : FrancePrep Academy - Premium
   Prix : 29€ / mois (ou 24€/mois annuel)
   Type : Récurrent
   ```

3. **Notez le Price ID** : `price_...` (vous en aurez besoin)

### 5️⃣ Créer une Supabase Edge Function

Créez le fichier : `supabase/functions/create-checkout-session/index.ts`

```typescript
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import Stripe from 'https://esm.sh/stripe@14.5.0?target=deno'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { priceId, userId, userEmail } = await req.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: userEmail,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get('origin')}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/pricing`,
      metadata: {
        userId: userId,
      },
    })

    return new Response(
      JSON.stringify({ url: session.url }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})
```

### 6️⃣ Déployer la fonction Supabase

```bash
# Installez Supabase CLI si pas déjà fait
npm install -g supabase

# Connectez-vous
supabase login

# Déployez la fonction
supabase functions deploy create-checkout-session --project-ref xkecqmsgvjjtujvlotpm
```

### 7️⃣ Configurer les secrets Supabase

```bash
supabase secrets set STRIPE_SECRET_KEY=sk_test_votre_cle_secrete --project-ref xkecqmsgvjjtujvlotpm
```

## 🧪 Tester les paiements

### Mode Test Stripe

Utilisez ces cartes de test :

✅ **Paiement réussi** :
- Numéro : `4242 4242 4242 4242`
- Date : n'importe quelle date future
- CVC : n'importe quel 3 chiffres

❌ **Paiement échoué** :
- Numéro : `4000 0000 0000 0002`

### Dans votre application

1. Cliquez sur "Passer à Premium"
2. Vous serez redirigé vers Stripe Checkout
3. Utilisez une carte de test
4. Vérifiez la redirection après paiement

## 🔄 Synchroniser avec votre base de données

Vous devrez créer un webhook Stripe pour mettre à jour la base de données :

1. Dans Stripe : **Developers** → **Webhooks** → **Add endpoint**
2. URL : `https://xkecqmsgvjjtujvlotpm.supabase.co/functions/v1/stripe-webhook`
3. Événements à écouter :
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`

## 📊 Vérifier que ça fonctionne

✅ **Checklist** :
- [ ] Clés Stripe ajoutées sur Vercel
- [ ] Edge Function déployée sur Supabase
- [ ] Produits créés sur Stripe
- [ ] Webhook configuré
- [ ] Test de paiement réussi
- [ ] Base de données mise à jour après paiement

## 🚀 Passer en production

Quand tout fonctionne en test :

1. **Activez votre compte Stripe** (vérification identité)
2. **Remplacez les clés** `pk_test_` et `sk_test_` par `pk_live_` et `sk_live_`
3. **Recréez les produits** en mode Live
4. **Mettez à jour les webhooks** avec l'URL de production

## 💡 Alternative rapide (sans Edge Function)

Si vous voulez juste tester rapidement, utilisez Stripe Checkout directement :

```javascript
// Dans votre code frontend
const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const handleCheckout = async () => {
  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'payment_method_types[]': 'card',
      'mode': 'subscription',
      'line_items[0][price]': 'price_votre_price_id',
      'line_items[0][quantity]': '1',
      'success_url': window.location.origin + '/payment-success',
      'cancel_url': window.location.origin + '/pricing',
    })
  });
  
  const session = await response.json();
  await stripe.redirectToCheckout({ sessionId: session.id });
};
```

⚠️ **Attention** : Cette méthode expose votre clé secrète, utilisez-la SEULEMENT pour tester !

## 📞 Support

- **Stripe** : https://support.stripe.com
- **Documentation** : https://stripe.com/docs
- **Email** : contact@franceprepacademy.fr
