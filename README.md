# FrancePrep Academy

Plateforme d'apprentissage pour l'intégration des étudiants étrangers en France.

## Architecture

\\nsrc/
  api/           - Services backend (auth, database, entities)
  pages/         - Pages React (Home, Courses, Community, etc.)
  components/    - Composants réutilisables + shadcn/ui
  utils/         - Utilitaires (premium, validate-uuid, i18n)
  contexts/      - Contextes React

api/             - Vercel Serverless Functions
  gemini.js      - API Gemini pour chatbot
  stripe/        - Checkout, webhook, billing

supabase/
  migrations/    - Migrations SQL
  functions/     - Edge Functions
\\n
## Base de données (Supabase)

Tables: courses, lessons, enrollments, user_profiles, forum_posts, forum_replies, progress, certificates.

RLS activé sur toutes les tables. Trigger on_auth_user_created crée automatiquement un profil.

## Paiements (Stripe)

1. Frontend -> /api/stripe/checkout
2. Stripe session créée
3. Webhook met à jour is_premium

Variables Vercel: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, SUPABASE_SERVICE_ROLE_KEY

## Assistant IA

Gemini 2.5 Flash via /api/gemini. Variable: GEMINI_API_KEY

## Déploiement

Variables requises: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, GEMINI_API_KEY

## Commandes

- npm install - Installer
- npm run dev - Développement
- npm run build - Production

## Sécurité

- Variables d'environnement pour toutes les clés
- RLS activé sur Supabase
- Signature webhook vérifiée
- Jamais de secrets dans le code

## Pour les futures IA

Pattern: createEntityService(tableName) crée un service CRUD.
Les entités sont exportées depuis src/api/entities.js.
L'auth est gérée par src/api/auth.js.
Les pages utilisent useQuery de React Query.
