# 🎯 Parcours Client Complet - Documentation

## 📋 Vue d'ensemble

Ce document décrit tous les points d'entrée et les flux pour créer/mettre à jour le profil utilisateur avec les colonnes premium.

## 🔄 Points d'entrée pour la création/mise à jour du profil

### 1. Inscription (Signup)
**Fichier**: `src/pages/Login.jsx`
- Utilisateur s'inscrit avec email/password
- Supabase Auth crée l'utilisateur dans `auth.users`
- **Trigger automatique** : `handle_new_user()` crée le profil dans `user_profiles`
- Le trigger doit inclure `is_premium: false` et `subscription_status: 'inactive'`

### 2. Connexion OAuth (Google, etc.)
**Fichier**: `src/pages/AuthCallback.jsx`
- Utilisateur se connecte via OAuth
- Redirection vers `/auth/callback`
- Si profil n'existe pas, création avec `is_premium: false` et `subscription_status: 'inactive'`

### 3. Paiement Stripe - Utilisateur connecté
**Fichier**: `src/pages/PaymentSuccess.jsx`
- Utilisateur déjà connecté
- Après paiement réussi, `markUserAsPremium()` met à jour le profil
- Met `is_premium: true`, `subscription_status: 'active'`, `premium_since: NOW()`

### 4. Paiement Stripe - Utilisateur non connecté
**Fichier**: `src/pages/PaymentSuccess.jsx`
- Utilisateur paie sans être connecté
- Formulaire d'inscription affiché
- Après inscription, `markUserAsPremium()` crée le profil avec `is_premium: true`

### 5. Webhook Stripe
**Fichier**: `supabase/functions/stripe-webhook/index_simple.ts`
- Stripe envoie un webhook après paiement
- Met à jour le profil avec les données Stripe
- Gère les cas : profil existant, utilisateur auth existant, ou création sans auth

## ✅ Checklist de vérification

### Base de données
- [ ] Colonnes premium ajoutées (`add-premium-columns.sql` exécuté)
- [ ] Trigger `handle_new_user()` mis à jour avec colonnes premium (`update-trigger-premium.sql` exécuté)
- [ ] Index créés pour `is_premium` et `subscription_status`

### Code Frontend
- [ ] `AuthCallback.jsx` crée le profil avec colonnes premium si nécessaire
- [ ] `PaymentSuccess.jsx` met à jour/crée le profil premium correctement
- [ ] `Login.jsx` gère l'inscription (le trigger s'occupe du profil)

### Code Backend
- [ ] Webhook Stripe met à jour le profil correctement
- [ ] Tous les cas de figure sont gérés (profil existant, nouveau, avec/sans auth)

### Vérifications
- [ ] Nouvel utilisateur → profil créé avec `is_premium: false`
- [ ] Paiement réussi → profil mis à jour avec `is_premium: true`
- [ ] Webhook Stripe → profil mis à jour même si l'utilisateur n'est pas connecté
- [ ] `me()` retourne correctement `is_premium` et `subscription_status`

## 🔧 Scripts SQL à exécuter

1. **add-premium-columns.sql** - Ajoute les colonnes premium
2. **update-trigger-premium.sql** - Met à jour le trigger pour inclure les colonnes premium
3. **set-user-premium.sql** - Pour tester manuellement (optionnel)

## 🐛 Dépannage

### Le profil n'est pas créé automatiquement
- Vérifiez que le trigger `on_auth_user_created` existe dans Supabase
- Vérifiez que la fonction `handle_new_user()` est à jour

### is_premium est toujours undefined
- Vérifiez que les colonnes existent dans la table `user_profiles`
- Exécutez `add-premium-columns.sql`

### Le webhook ne met pas à jour le profil
- Vérifiez que le webhook Stripe est configuré
- Vérifiez les logs Supabase Edge Functions
- Vérifiez que `STRIPE_WEBHOOK_SECRET` est configuré

