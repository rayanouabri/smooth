# Historique des Modifications - FrancePrep Academy

Ce fichier documente toutes les modifications significatives apportees au projet par Cursor AI et les developpeurs.

---

## Convention de versioning

- **MAJOR.MINOR.PATCH**
- **MAJOR** : Changements majeurs (refonte, nouvelle fonctionnalite critique)
- **MINOR** : Nouvelles fonctionnalites
- **PATCH** : Corrections de bugs, optimisations

---

## [1.5.0] - 2026-01-28

### Fonctionnalites ajoutees

#### Systeme d'emails (Resend)
- **Nouveau fichier** : `api/contact.js` - Endpoint pour le formulaire de contact
- Configuration SMTP Resend dans Supabase Auth
- Emails de confirmation d'inscription fonctionnels
- Double email (admin + confirmation utilisateur) pour le formulaire contact

#### Page Contact
- **Nouveau fichier** : `src/pages/Contact.jsx`
- Design moderne avec gradient et animations (Framer Motion)
- Formulaire fonctionnel (nom, email, sujet, message)
- Section FAQ avec accordeon
- Suppression de l'adresse physique (confidentialite)

#### Traduction multilingue
- **Nouveau fichier** : `src/components/LanguageSelector.jsx`
- Selecteur de langue avec drapeaux (9 langues)
- Integration Google Translate Widget
- UI Google completement masquee (CSS)
- Traduction automatique de tout le site

### Modifications

#### Navigation et Layout
- `src/pages/Layout.jsx` : Ajout LanguageSelector dans navbar
- `src/pages/Layout.jsx` : Correction liens footer (Contact, Chatbot, Teachers)
- `src/pages/index.jsx` : Ajout route `/contact`
- `src/pages/Home.jsx` : Bouton "Lancer mon integration" redirige vers login si non auth

#### Styles
- `index.html` : Styles pour masquer barre Google Translate
- `src/index.css` : Styles additionnels pour cacher UI Google

### Documentation
- **Nouveau fichier** : `GUIDE_TRADUCTION.md` - Tutoriel integration traduction
- Mise a jour complete du `README.md`
- **Nouveau dossier** : `docs/` avec ce `CHANGELOG.md`

### Securite
- Verification que `RESEND_API_KEY` n'est pas expose cote client

---

## [1.4.0] - 2026-01-27

### Nettoyage du code

#### Fichiers supprimes (documentation obsolete)
- `WEBHOOK_SETUP.md`
- `TROUBLESHOOTING_WEBHOOK.md`
- `VERIFIER_PREMIUM_SUPABASE.md`
- `DIAGNOSTIC_WEBHOOK.md`
- `ACCEDER_LOGS_VERCEL.md`
- `VERIFIER_WEBHOOK_LOGS.md`
- `CONFIGURATION_EMAIL_AUTOMATIQUE.md`
- `SETUP_EMAIL_COMPLET.md`
- `TROUVER_CLE_ANON.md`
- `DIAGNOSTIC_EMAIL.md`
- `TEST_EDGE_FUNCTION.md`
- `VERIFICATION_EMAIL_SYSTEM.md`
- `TROUVER_SERVICE_ROLE_KEY.md`
- `SYSTEME_NOTIFICATIONS_OPERATIONNEL.md`
- `test-forum-ids.js`

#### Logs de debug supprimes
- `src/api/database.js` : Suppression console.log excessifs
- `src/api/auth.js` : Nettoyage des logs
- `src/pages/Community.jsx` : Suppression logs de debug forum

### Securite

#### Audit securite
- `api/stripe/checkout.js` : Suppression logs exposant cles Stripe
- `api/gemini.js` : Nettoyage logs sensibles
- Verification `.gitignore` (node_modules, .env exclus)
- Confirmation webhook Stripe verifie signature

### Modifications mineures
- `src/components/DashboardSidebar.jsx` : Suppression option "Certificats"
- `src/pages/index.jsx` : Route `/certificates` commentee

---

## [1.3.0] - 2026-01-26

### Corrections majeures

#### Forum - Affichage des 11 posts
**Probleme** : Seuls 4 posts s'affichaient au lieu de 11

**Cause identifiee** : 
1. Limite par defaut Supabase (1000 mais pas appliquee)
2. Fonction `isMockId` trop stricte filtrant des UUIDs valides

**Solution** :
- `src/api/database.js` : Requete REST directe avec `limit=1000` pour `forum_posts`
- `src/utils/validate-uuid.js` : Simplification - accepte tous les UUIDs valides

```javascript
// Avant (trop strict)
const uuidV4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// Apres (accepte tous UUIDs)
const uuidFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
```

#### Forum - Chargement infini
**Probleme** : Le forum chargeait a l'infini

**Cause** : `queryClient.removeQueries` appele dans `queryFn`

**Solution** : 
- `src/pages/Community.jsx` : Suppression de `queryClient.removeQueries` du queryFn

### Migrations SQL appliquees

#### `20260122000003_fix_enrollments_rls.sql`
```sql
-- Suppression acces direct a auth.users
-- Utilisation de user_profiles.user_email
CREATE POLICY "Users can view their enrollments"
ON enrollments FOR SELECT
USING (
  user_email IN (
    SELECT user_email FROM user_profiles WHERE id = auth.uid()
  )
);
```

#### `20260122000004_fix_user_profiles_rls_no_auth_users.sql`
```sql
-- RLS simplifie sans acces a auth.users
CREATE POLICY "Users can view their own profile"
ON user_profiles FOR SELECT
USING (auth.uid()::text = id::text);
```

---

## [1.2.0] - 2026-01-25

### Corrections

#### Erreur 403 sur enrollments
**Probleme** : `POST /rest/v1/enrollments` retournait 403

**Cause** : Politiques RLS referencaient `auth.users` (non accessible)

**Solution** : Nouvelle migration RLS pour `enrollments`

#### Affichage "0 courses"
**Probleme** : La page `/courses` affichait "0 cours"

**Cause** : Import `Lesson` manquant

**Solution** :
```javascript
// src/pages/Courses.jsx
import { Lesson } from "@/api/entities"; // Ajoute
```

#### Premium non active apres paiement
**Probleme** : Paiement OK mais `is_premium` restait `false`

**Causes multiples** :
1. Colonne `stripe_session_id` manquante
2. Webhook ne trouvait pas le profil
3. Politiques RLS bloquaient l'update

**Solutions** :
- Migration `20260122000005_add_stripe_session_id.sql`
- `api/stripe/webhook.js` : Strategies multiples pour trouver le profil
- `src/pages/PaymentSuccess.jsx` : Retry logic avec fallback upsert

---

## [1.1.0] - 2026-01-24

### Fonctionnalites

#### Webhook Stripe
- `api/stripe/webhook.js` : Traitement `checkout.session.completed`
- Mise a jour automatique `is_premium` et `subscription_status`
- Verification signature Stripe

#### OAuth Callback
- `src/pages/AuthCallback.jsx` : Gestion retour Google OAuth
- Creation/mise a jour profil utilisateur

### Corrections

#### OAuth callback echoue
**Probleme** : Profil non cree apres Google login

**Cause** : Requete `.or()` Supabase problematique avec RLS

**Solution** : Logique sequentielle (chercher par ID, puis creer si absent)

---

## [1.0.0] - 2026-01-22

### Version initiale

#### Fonctionnalites principales
- **Cours** : Liste, detail, inscription
- **Forum** : Posts et reponses
- **Dashboard** : Tableau de bord utilisateur
- **Paiements** : Integration Stripe (Premium, Ultimate)
- **Assistant IA** : Sophie (Gemini)
- **Authentification** : Email/Password + Google OAuth

#### Base de donnees
- Tables creees : courses, lessons, enrollments, user_profiles, forum_posts, etc.
- RLS active sur toutes les tables
- Trigger `on_auth_user_created`

#### Infrastructure
- Deploiement Vercel
- Supabase (EU-West-1)
- Stripe webhooks configures

---

## Template pour futures entrees

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Fonctionnalites ajoutees
- Description de la nouvelle fonctionnalite
- **Nouveau fichier** : `chemin/fichier.js` - Description

### Modifications
- `fichier.jsx` : Description du changement

### Corrections
**Probleme** : Description
**Cause** : Explication
**Solution** : Ce qui a ete fait

### Securite
- Description de l'amelioration securite

### Breaking Changes
- Description si applicable

### Documentation
- Mise a jour de X
```

---

## Roadmap (suggestions)

### Court terme
- [ ] Optimiser cache React Query (augmenter staleTime)
- [ ] Rate limiting sur API Gemini
- [ ] Tests automatises

### Moyen terme
- [ ] PWA (Progressive Web App)
- [ ] Notifications push
- [ ] Mode hors-ligne pour cours

### Long terme
- [ ] App mobile (React Native)
- [ ] Systeme de badges/gamification
- [ ] Marketplace professeurs

---

*Fichier maintenu par Cursor AI - Derniere mise a jour : 28 Janvier 2026*
