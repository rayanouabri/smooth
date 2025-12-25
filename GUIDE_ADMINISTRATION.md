# 📚 Guide Complet d'Administration - FrancePrepAcademy

Ce guide explique comment administrer votre site FrancePrepAcademy sans utiliser Cursor.

## 📋 Table des matières

1. [Structure du Code](#structure-du-code)
2. [Ajouter des Cours](#ajouter-des-cours)
3. [Gérer les Utilisateurs](#gérer-les-utilisateurs)
4. [Gérer le Forum](#gérer-le-forum)
5. [Gérer les Abonnements Premium](#gérer-les-abonnements-premium)
6. [Modifier les Pages](#modifier-les-pages)
7. [Configuration](#configuration)

---

## 🏗️ Structure du Code

### Architecture générale

```
smooth/
├── src/
│   ├── pages/          # Pages principales (Home, Dashboard, Courses, etc.)
│   ├── components/     # Composants réutilisables (ChatBot, CourseCard, etc.)
│   ├── api/            # Services API (auth.js, integrations.js, functions.js)
│   ├── contexts/       # Contextes React (LanguageContext)
│   └── utils/          # Utilitaires
├── api/                # API Routes Vercel (gemini.js, stripe/)
├── supabase/
│   └── functions/      # Edge Functions Supabase
└── public/             # Fichiers statiques
```

### Technologies utilisées

- **Frontend**: React + Vite + Tailwind CSS + shadcn/ui
- **Backend**: Supabase (PostgreSQL, Auth, Storage, Edge Functions)
- **Paiements**: Stripe
- **IA**: Google Gemini API
- **Déploiement**: Vercel

---

## 📖 Ajouter des Cours

### Méthode 1 : Via Supabase SQL Editor (Recommandé)

1. **Allez sur [Supabase Dashboard](https://supabase.com/dashboard)**
2. **Sélectionnez votre projet**
3. **Allez dans SQL Editor**
4. **Exécutez ce SQL** :

```sql
-- 1. Créer un nouveau cours
INSERT INTO courses (
  title,
  slug,
  description,
  short_description,
  category,
  level,
  language,
  duration_hours,
  price,
  thumbnail_url,
  objectives,
  prerequisites,
  is_published,
  rating
) VALUES (
  'Titre du Cours',
  'slug-du-cours',  -- URL-friendly (ex: "guide-caf-complet")
  'Description complète du cours...',
  'Description courte pour les cartes',
  'integration_administrative',  -- ou 'francais', 'emploi', 'culture', etc.
  'debutant',  -- ou 'intermediaire', 'avance'
  'fr',
  5,  -- Durée en heures
  0,  -- Prix (0 = gratuit, >0 = premium)
  'https://images.unsplash.com/photo-xxx',  -- URL de l'image
  '["Objectif 1", "Objectif 2"]'::jsonb,
  '[]'::jsonb,
  true,  -- true = publié, false = brouillon
  4.5
) RETURNING id;

-- 2. Ajouter des leçons au cours (remplacez COURSE_ID par l'ID retourné)
INSERT INTO lessons (course_id, title, content, "order", duration_minutes) VALUES
  ('COURSE_ID', 'Leçon 1 : Introduction', '# Contenu de la leçon en Markdown...', 1, 15),
  ('COURSE_ID', 'Leçon 2 : Les bases', '# Contenu...', 2, 20),
  ('COURSE_ID', 'Leçon 3 : Approfondissement', '# Contenu...', 3, 25);
```

### Méthode 2 : Via l'Interface Supabase

1. **Allez dans Table Editor → `courses`**
2. **Cliquez sur "Insert row"**
3. **Remplissez les champs** :
   - `title` : Titre du cours
   - `slug` : Identifiant URL (ex: "guide-caf")
   - `description` : Description complète
   - `short_description` : Description courte
   - `category` : `integration_administrative`, `francais`, `emploi`, `culture`, `logement`
   - `level` : `debutant`, `intermediaire`, `avance`
   - `price` : `0` pour gratuit, `>0` pour premium
   - `is_published` : `true` pour publier
4. **Sauvegardez**
5. **Allez dans `lessons`** et ajoutez les leçons avec le `course_id`

### Catégories disponibles

- `integration_administrative` : CAF, sécurité sociale, etc.
- `francais` : Cours de français
- `emploi` : CV, entretiens, recherche d'emploi
- `culture` : Culture française, codes sociaux
- `logement` : Recherche de logement
- `sante` : Santé, mutuelle
- `etudes` : Études en France

---

## 👥 Gérer les Utilisateurs

### Voir tous les utilisateurs

**Via Supabase SQL Editor** :

```sql
-- Voir tous les utilisateurs avec leur profil
SELECT 
  u.id,
  u.email,
  u.created_at,
  p.full_name,
  p.is_premium,
  p.subscription_status,
  p.stripe_customer_id
FROM auth.users u
LEFT JOIN user_profiles p ON u.id = p.id
ORDER BY u.created_at DESC;
```

### Changer le mot de passe d'un utilisateur

**Option 1 : Via Supabase Dashboard**
1. **Allez dans Authentication → Users**
2. **Trouvez l'utilisateur**
3. **Cliquez sur "..." → "Reset password"**
4. Un email sera envoyé à l'utilisateur

**Option 2 : Via SQL (Admin uniquement)**
```sql
-- L'utilisateur doit utiliser "Reset password" depuis l'interface
-- Vous ne pouvez pas définir directement le mot de passe
-- Mais vous pouvez forcer une réinitialisation :
-- Allez dans Supabase Dashboard → Authentication → Users → Reset password
```

### Mettre un utilisateur en Premium

```sql
-- Mettre un utilisateur en premium par email
UPDATE user_profiles 
SET 
  is_premium = TRUE,
  subscription_status = 'active',
  premium_since = NOW()
WHERE user_email = 'email@example.com';

-- Vérifier
SELECT user_email, is_premium, subscription_status 
FROM user_profiles 
WHERE user_email = 'email@example.com';
```

### Supprimer un utilisateur

**Via Supabase Dashboard** :
1. **Allez dans Authentication → Users**
2. **Trouvez l'utilisateur**
3. **Cliquez sur "..." → "Delete user"**
4. **Confirmez**

⚠️ **Attention** : Cela supprimera aussi automatiquement son profil dans `user_profiles` (grâce à `ON DELETE CASCADE`)

### Désactiver un utilisateur (sans supprimer)

```sql
-- Désactiver un utilisateur (il ne pourra plus se connecter)
UPDATE auth.users 
SET banned_until = '2099-12-31'::timestamp
WHERE email = 'email@example.com';

-- Réactiver
UPDATE auth.users 
SET banned_until = NULL
WHERE email = 'email@example.com';
```

### Voir les statistiques utilisateurs

```sql
-- Nombre total d'utilisateurs
SELECT COUNT(*) as total_users FROM auth.users;

-- Utilisateurs premium
SELECT COUNT(*) as premium_users 
FROM user_profiles 
WHERE is_premium = TRUE;

-- Nouveaux utilisateurs ce mois
SELECT COUNT(*) as nouveaux_ce_mois
FROM auth.users
WHERE created_at >= date_trunc('month', CURRENT_DATE);

-- Utilisateurs par niveau de français
SELECT french_level, COUNT(*) as nombre
FROM user_profiles
GROUP BY french_level
ORDER BY nombre DESC;
```

---

## 💬 Gérer le Forum

### Voir tous les posts

```sql
-- Voir tous les posts avec auteur
SELECT 
  p.id,
  p.title,
  p.category,
  p.author_email,
  p.created_date,
  p.views_count,
  (SELECT COUNT(*) FROM forum_replies WHERE post_id = p.id) as replies_count
FROM forum_posts p
ORDER BY p.created_date DESC;
```

### Supprimer un post

```sql
-- Supprimer un post (supprime aussi automatiquement les réponses)
DELETE FROM forum_posts 
WHERE id = 'POST_ID';

-- Ou via Supabase Dashboard : Table Editor → forum_posts → Delete row
```

### Modérer un post (le masquer)

```sql
-- Ajouter une colonne "is_hidden" si elle n'existe pas
ALTER TABLE forum_posts ADD COLUMN IF NOT EXISTS is_hidden BOOLEAN DEFAULT FALSE;

-- Masquer un post
UPDATE forum_posts 
SET is_hidden = TRUE 
WHERE id = 'POST_ID';

-- Afficher à nouveau
UPDATE forum_posts 
SET is_hidden = FALSE 
WHERE id = 'POST_ID';
```

### Supprimer une réponse

```sql
DELETE FROM forum_replies 
WHERE id = 'REPLY_ID';
```

### Catégories du forum

- `general` : Discussions générales
- `questions` : Questions
- `conseils` : Conseils et astuces
- `temoignages` : Témoignages
- `aide` : Demande d'aide

---

## 💳 Gérer les Abonnements Premium

### Voir tous les abonnements actifs

```sql
-- Utilisateurs premium actifs
SELECT 
  user_email,
  full_name,
  is_premium,
  subscription_status,
  stripe_customer_id,
  stripe_subscription_id,
  premium_since
FROM user_profiles
WHERE is_premium = TRUE
ORDER BY premium_since DESC;
```

### Annuler un abonnement

**Option 1 : Via Stripe Dashboard (Recommandé)**
1. **Allez sur [Stripe Dashboard](https://dashboard.stripe.com)**
2. **Customers → Trouvez le client**
3. **Subscriptions → Cancel subscription**

**Option 2 : Via SQL (mise à jour manuelle)**
```sql
-- Mettre fin à un abonnement
UPDATE user_profiles 
SET 
  is_premium = FALSE,
  subscription_status = 'cancelled'
WHERE user_email = 'email@example.com';
```

### Vérifier le statut d'un abonnement Stripe

```sql
-- Voir les IDs Stripe d'un utilisateur
SELECT 
  user_email,
  stripe_customer_id,
  stripe_subscription_id
FROM user_profiles
WHERE user_email = 'email@example.com';
```

Puis allez sur Stripe Dashboard → Customers → Recherchez le `stripe_customer_id`

---

## 🎨 Modifier les Pages

### Modifier la page d'accueil

**Fichier** : `src/pages/Home.jsx`

- Modifiez le contenu, les textes, les boutons
- Les styles utilisent Tailwind CSS
- Sauvegardez et le site se mettra à jour automatiquement (si déployé sur Vercel)

### Modifier la page de tarifs

**Fichier** : `src/pages/Pricing.jsx`

- Modifiez les prix dans `STRIPE_PRICES` (ligne ~48)
- Modifiez les plans dans le tableau `plans` (ligne ~53)
- Modifiez les features (avantages) de chaque plan

### Modifier le chatbot

**Fichier** : `src/components/ChatBot.jsx` ou `src/pages/Chatbot.jsx`

- Modifiez le prompt initial
- Modifiez les messages d'erreur
- L'IA utilise l'API Gemini (configurée dans `api/gemini.js`)

---

## ⚙️ Configuration

### Variables d'environnement Vercel

**Allez sur [Vercel Dashboard](https://vercel.com/dashboard) → Votre projet → Settings → Environment Variables**

Variables nécessaires :

- `GEMINI_API_KEY` : Clé API Google Gemini
- `STRIPE_SECRET_KEY` : Clé secrète Stripe (sk_...)
- `VITE_SUPABASE_URL` : URL de votre projet Supabase
- `VITE_SUPABASE_ANON_KEY` : Clé anonyme Supabase

### Configuration Stripe

**Fichier** : `src/pages/Pricing.jsx` (ligne ~48)

```javascript
const STRIPE_PRICES = {
  monthly: 'price_XXXXX',  // Remplacez par votre Price ID mensuel
  annual: 'price_YYYYY',  // Remplacez par votre Price ID annuel
};
```

**Comment obtenir les Price IDs** :
1. Allez sur [Stripe Dashboard](https://dashboard.stripe.com)
2. Products → Créez ou sélectionnez un produit
3. Pricing → Copiez le "Price ID" (commence par `price_`)

### Configuration Supabase

**Fichier** : `.env.local` (local) ou Variables d'environnement Vercel (production)

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

---

## 🔧 Commandes Utiles

### Déployer sur Vercel

```bash
# Les changements sont automatiquement déployés si connecté à GitHub
# Sinon :
vercel --prod
```

### Tester localement

```bash
npm install
npm run dev
```

### Build pour production

```bash
npm run build
```

---

## 📞 Support

### Problèmes courants

**Le chatbot ne fonctionne pas** :
- Vérifiez que `GEMINI_API_KEY` est configurée dans Vercel
- Vérifiez les logs Vercel (Functions → `/api/gemini`)

**Les paiements ne fonctionnent pas** :
- Vérifiez que `STRIPE_SECRET_KEY` est configurée
- Vérifiez que les Price IDs sont corrects dans `Pricing.jsx`
- Vérifiez que le webhook Stripe est configuré dans Supabase

**Un utilisateur ne peut pas se connecter** :
- Vérifiez dans Supabase → Authentication → Users
- Vérifiez que l'email est confirmé
- Réinitialisez le mot de passe si nécessaire

---

## 📝 Notes Importantes

1. **Toujours tester en local avant de déployer** (`npm run dev`)
2. **Sauvegarder la base de données** avant des modifications importantes
3. **Vérifier les logs Vercel** en cas d'erreur
4. **Les changements SQL sont immédiats**, les changements de code nécessitent un redéploiement

---

**Dernière mise à jour** : 25 décembre 2024

