# FrancePrep Academy

Plateforme d'apprentissage pour l'intégration des étudiants étrangers en France.

## 🏗️ Architecture

```
├── src/
│   ├── api/                 # Services backend
│   │   ├── auth.js          # Authentification Supabase
│   │   ├── database.js      # Services CRUD génériques
│   │   ├── entities.js      # Réexport des entités
│   │   ├── supabaseClient.js # Client Supabase
│   │   ├── functions.js     # Edge Functions
│   │   └── integrations.js  # Intégrations externes
│   │
│   ├── pages/               # Pages React
│   │   ├── Home.jsx         # Page d'accueil
│   │   ├── Courses.jsx      # Liste des cours
│   │   ├── CourseDetail.jsx # Détail d'un cours
│   │   ├── Community.jsx    # Forum communautaire
│   │   ├── Dashboard.jsx    # Tableau de bord utilisateur
│   │   ├── Pricing.jsx      # Plans d'abonnement
│   │   ├── Login.jsx        # Connexion/Inscription
│   │   └── ...
│   │
│   ├── components/          # Composants réutilisables
│   │   ├── ui/              # Composants shadcn/ui
│   │   ├── ChatBot.jsx      # Assistant IA (Sophie)
│   │   └── ...
│   │
│   ├── utils/               # Utilitaires
│   │   ├── premium.js       # Vérification statut premium
│   │   ├── validate-uuid.js # Validation des IDs
│   │   └── i18n.js          # Internationalisation
│   │
│   └── contexts/            # Contextes React
│       └── LanguageContext.jsx
│
├── api/                     # Vercel Serverless Functions
│   ├── gemini.js            # API Gemini pour le chatbot
│   └── stripe/
│       ├── checkout.js      # Création session Stripe
│       ├── webhook.js       # Webhook paiements
│       └── billing-portal.js # Portail facturation
│
├── supabase/
│   ├── migrations/          # Migrations SQL
│   └── functions/           # Edge Functions Supabase
│
└── public/                  # Assets statiques
```

## 🗄️ Base de données (Supabase)

### Tables principales

| Table | Description |
|-------|-------------|
| `courses` | Cours disponibles |
| `lessons` | Leçons de chaque cours |
| `enrollments` | Inscriptions aux cours |
| `user_profiles` | Profils utilisateurs (premium, etc.) |
| `forum_posts` | Posts du forum |
| `forum_replies` | Réponses aux posts |
| `progress` | Progression des utilisateurs |
| `certificates` | Certificats générés |
| `teacher_profiles` | Profils des professeurs |
| `assessments` | Évaluations |
| `resumes` | CV générés |
| `contact_requests` | Demandes de contact |
| `ai_messages` | Messages IA (limite 5/mois gratuit) |

### Row Level Security (RLS)

Toutes les tables ont RLS activé. Les politiques principales :
- `user_profiles` : Lecture/écriture par le propriétaire uniquement
- `enrollments` : Utilisateurs peuvent voir/créer leurs inscriptions
- `forum_posts/replies` : Lecture publique, écriture authentifiée

### Triggers

- `on_auth_user_created` : Crée automatiquement un `user_profiles` à l'inscription

## 💳 Paiements (Stripe)

### Flux de paiement

1. **Frontend** (`Pricing.jsx`) → Appelle `/api/stripe/checkout`
2. **Checkout** → Crée une session Stripe avec `price_id`
3. **Paiement** → Utilisateur paie sur Stripe
4. **Webhook** (`/api/stripe/webhook`) → Met à jour `is_premium` dans `user_profiles`
5. **Redirect** → `PaymentSuccess.jsx` vérifie et confirme

### Plans

- **Premium** : Accès cours premium + assistant IA illimité
- **Ultimate** : Premium + conciergerie VIP

### Variables Stripe (Vercel)

```
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## 🤖 Assistant IA (Sophie)

- Utilise **Gemini 2.5 Flash**
- Limite : 5 messages/mois (gratuit), illimité (premium)
- Endpoint : `/api/gemini`

Variable requise :
```
GEMINI_API_KEY=...
```

## 🔐 Authentification

- **Supabase Auth** avec email/password et Google OAuth
- Session persistante avec auto-refresh
- Callback OAuth : `/auth/callback`

## 🚀 Déploiement

### Vercel

Le projet se déploie automatiquement via GitHub.

**Variables d'environnement requises :**

```env
# Supabase
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ... (pour webhook)

# Stripe
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Gemini
GEMINI_API_KEY=...
```

### Commandes

```bash
npm install      # Installer les dépendances
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Preview du build
```

## 📁 Fichiers importants

| Fichier | Description |
|---------|-------------|
| `src/api/database.js` | Service CRUD générique pour toutes les tables |
| `src/api/auth.js` | Gestion authentification et profils |
| `api/stripe/webhook.js` | Webhook Stripe (mise à jour premium) |
| `src/utils/premium.js` | Vérification statut premium |
| `supabase/migrations/` | Toutes les migrations SQL |

## ⚠️ Points d'attention

1. **Ne jamais exposer** `SUPABASE_SERVICE_ROLE_KEY` côté client
2. **Webhook Stripe** utilise la signature pour vérifier l'authenticité
3. **RLS** doit être activé sur toutes les tables
4. **Profil utilisateur** créé automatiquement par trigger SQL

## 🐛 Debugging

- **Forum vide** : Vérifier que `forum_posts` n'est pas filtré par `isMockId`
- **Premium non activé** : Vérifier les logs webhook dans Vercel
- **403 sur enrollments** : Vérifier les politiques RLS

## 📝 Pour les futures IA

Ce projet utilise :
- **React 18** + Vite
- **Supabase** pour BDD, Auth, Storage
- **Stripe** pour les paiements
- **Gemini** pour l'assistant IA
- **shadcn/ui** pour les composants UI
- **TailwindCSS** pour le styling
- **React Query** pour le data fetching

Le pattern principal est :
1. `createEntityService(tableName)` crée un service CRUD
2. Les entités sont exportées depuis `src/api/entities.js`
3. L'auth est gérée par `src/api/auth.js`
4. Les pages utilisent `useQuery` de React Query

---

*Dernière mise à jour : Janvier 2026*
