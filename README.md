# FrancePrep Academy

Plateforme d'apprentissage pour l'integration des etudiants etrangers en France.

**URL Production :** [https://franceprepacademy.fr](https://franceprepacademy.fr)

---

## Table des matieres

1. [Architecture](#architecture)
2. [Base de donnees](#base-de-donnees-supabase)
3. [Authentification](#authentification)
4. [Paiements Stripe](#paiements-stripe)
5. [Assistant IA](#assistant-ia-sophie)
6. [Traduction](#traduction-multilingue)
7. [Emails](#emails-resend)
8. [Deploiement](#deploiement)
9. [Limites et Scaling](#limites-et-scaling)
10. [Debugging](#debugging)
11. [Historique des changements](#historique-des-changements)

---

## Architecture

```
src/
  api/                     # Services backend
    auth.js                # Authentification Supabase
    database.js            # Services CRUD generiques
    entities.js            # Reexport des entites
    supabaseClient.js      # Client Supabase
    functions.js           # Edge Functions
    integrations.js        # Integrations externes

  pages/                   # Pages React
    Home.jsx               # Page d'accueil
    Courses.jsx            # Liste des cours
    CourseDetail.jsx       # Detail d'un cours
    Community.jsx          # Forum communautaire (11 sujets)
    Dashboard.jsx          # Tableau de bord utilisateur
    Pricing.jsx            # Plans d'abonnement
    Login.jsx              # Connexion/Inscription
    Contact.jsx            # Page contact avec formulaire
    PaymentSuccess.jsx     # Confirmation paiement
    Layout.jsx             # Layout principal (navbar, footer)

  components/              # Composants reutilisables
    ui/                    # Composants shadcn/ui
    ChatBot.jsx            # Assistant IA (Sophie)
    LanguageSelector.jsx   # Selecteur de langue avec drapeaux
    DashboardSidebar.jsx   # Sidebar du dashboard

  utils/                   # Utilitaires
    premium.js             # Verification statut premium
    validate-uuid.js       # Validation des IDs (accepte tous UUIDs)
    i18n.js                # Internationalisation
    index.ts               # createPageUrl et autres utils

  contexts/                # Contextes React
    LanguageContext.jsx    # Contexte de langue

api/                       # Vercel Serverless Functions
  gemini.js                # API Gemini pour le chatbot
  contact.js               # Envoi emails formulaire contact
  _middleware.js           # CORS middleware
  stripe/
    checkout.js            # Creation session Stripe
    webhook.js             # Webhook paiements
    billing-portal.js      # Portail facturation

supabase/
  migrations/              # Migrations SQL (RLS, triggers)
  functions/               # Edge Functions Supabase

docs/                      # Documentation
  CHANGELOG.md             # Historique des modifications
  CURSOR_AI_GUIDE.md       # Guide pour AI

public/                    # Assets statiques
  favicon.svg
```

---

## Base de donnees (Supabase)

**Projet ID :** `xkecqmsgvjjtujvlotpm`  
**Region :** `eu-west-1` (Irlande)  
**Plan actuel :** Free

### Tables principales

| Table | Description | RLS |
|-------|-------------|-----|
| `courses` | Cours disponibles (gratuits + premium) | Lecture publique |
| `lessons` | Lecons de chaque cours | Lecture publique |
| `enrollments` | Inscriptions aux cours | Par utilisateur |
| `user_profiles` | Profils (premium, subscription_status, etc.) | Par utilisateur |
| `forum_posts` | 11 posts du forum communautaire | Lecture publique |
| `forum_replies` | Reponses aux posts | Ecriture authentifiee |
| `progress` | Progression des utilisateurs | Par utilisateur |
| `teacher_profiles` | Profils des professeurs | Lecture publique |
| `assessments` | Evaluations | Par utilisateur |
| `resumes` | CV generes | Par utilisateur |
| `contact_requests` | Demandes de contact | Insert public |
| `ai_messages` | Messages IA (limite 5/mois gratuit) | Par utilisateur |

### Colonnes importantes `user_profiles`

```sql
id                  UUID PRIMARY KEY (= auth.uid())
user_email          TEXT
full_name           TEXT
is_premium          BOOLEAN DEFAULT false
subscription_status TEXT DEFAULT 'inactive' -- 'active', 'inactive', 'cancelled'
stripe_customer_id  TEXT
stripe_session_id   TEXT
created_date        TIMESTAMP
```

### Row Level Security (RLS)

Toutes les tables ont RLS active. Politiques principales :

```sql
-- user_profiles : Lecture/ecriture par proprietaire uniquement
CREATE POLICY "Users can view their own profile"
ON user_profiles FOR SELECT
USING (auth.uid()::text = id::text);

-- enrollments : Via user_profiles.user_email
CREATE POLICY "Users can view their enrollments"
ON enrollments FOR SELECT
USING (
  user_email IN (
    SELECT user_email FROM user_profiles WHERE id = auth.uid()
  )
);
```

### Trigger automatique

Le trigger `on_auth_user_created` cree automatiquement un `user_profiles` lors de l'inscription :

```sql
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO user_profiles (id, user_email, full_name, created_date)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    NOW()
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

---

## Authentification

### Methodes supportees

1. **Email/Password** - Avec email de confirmation (via Resend SMTP)
2. **Google OAuth** - Recommande (pas besoin de confirmation email)

### Configuration Supabase Auth

- **Site URL :** `https://franceprepacademy.fr`
- **Redirect URLs :** `https://franceprepacademy.fr/auth/callback`
- **SMTP :** Resend configure

### Flux d'authentification

1. Utilisateur clique "S'inscrire" ou "Google"
2. Supabase cree l'entree dans `auth.users`
3. Trigger cree automatiquement `user_profiles`
4. Redirection vers `/dashboard`

---

## Paiements Stripe

### Flux de paiement

```
Frontend (Pricing.jsx)
    | POST /api/stripe/checkout
Vercel Function
    | Cree session Stripe
Stripe Checkout
    | Utilisateur paie
Stripe Webhook -> /api/stripe/webhook
    | Verifie signature
    | Met a jour user_profiles.is_premium = true
Redirect -> /paymentsuccess?session_id=xxx
    | Verifie et confirme
Dashboard (Premium active)
```

### Plans tarifaires

| Plan | Prix | Fonctionnalites |
|------|------|-----------------|
| **Gratuit** | 0 EUR | Cours gratuits, 5 messages IA/mois |
| **Premium** | 9.99 EUR/mois | Tous les cours, IA illimitee |
| **Ultimate** | 29.99 EUR/mois | Premium + Conciergerie VIP |

### Variables Stripe (Vercel)

```env
STRIPE_SECRET_KEY=sk_live_...      # Cle secrete Stripe
STRIPE_WEBHOOK_SECRET=whsec_...    # Secret du webhook
```

### Webhook Events traites

- `checkout.session.completed` -> Active premium
- `customer.subscription.updated` -> Met a jour statut
- `customer.subscription.deleted` -> Desactive premium

---

## Assistant IA (Sophie)

- **Modele :** Gemini 2.0 Flash
- **Endpoint :** `/api/gemini`
- **Limite gratuit :** 5 messages/mois
- **Limite premium :** Illimite

### Variable requise

```env
GEMINI_API_KEY=...
```

### Comportement

Sophie est configuree pour :
- Repondre en francais
- Aider sur l'integration en France
- Donner des conseils administratifs (visa, logement, etc.)

---

## Traduction multilingue

### Implementation

- **Google Translate Widget** pour la traduction automatique
- **LanguageSelector.jsx** : Interface personnalisee avec drapeaux
- **UI Google masquee** via CSS

### Langues supportees

| Code | Langue | Drapeau |
|------|--------|---------|
| fr | Francais | FR |
| en | English | GB |
| es | Espanol | ES |
| ar | Arabe | SA |
| zh-CN | Chinois | CN |
| pt | Portugais | BR |
| de | Deutsch | DE |
| it | Italiano | IT |
| ru | Russe | RU |

### Fonctionnement

```javascript
// Le selecteur modifie le cookie Google Translate
document.cookie = `googtrans=/fr/${langCode}; path=/`;
// Et declenche la traduction
document.querySelector('.goog-te-combo').value = langCode;
```

---

## Emails (Resend)

### Configuration

- **Provider :** Resend
- **Domaine verifie :** `franceprepacademy.fr`
- **Utilisations :**
  1. Emails de confirmation d'inscription (via Supabase Auth SMTP)
  2. Formulaire de contact (`/api/contact`)

### DNS Records (Vercel)

```
Type    Name                            Value
TXT     resend._domainkey              p=MIGfMA0GCSqGSIb3...
TXT     @                              v=spf1 include:_spf.resend.com ~all
TXT     _dmarc                         v=DMARC1; p=none;
MX      send                           feedback-smtp.eu-west-1.amazonses.com
```

### Limites Resend

| Plan | Emails/jour | Emails/mois |
|------|-------------|-------------|
| **Free** | 100 | 3,000 |
| **Pro** ($20) | 1,666 | 50,000 |

---

## Deploiement

### Services utilises

| Service | Role | Plan |
|---------|------|------|
| **Vercel** | Hebergement + Serverless | Free (Hobby) |
| **Supabase** | BDD + Auth + Storage | Free |
| **Stripe** | Paiements | Standard |
| **Resend** | Emails | Free |
| **Gemini** | IA | Free tier |

### Variables d'environnement (Vercel)

```env
# Supabase (publiques - prefixe VITE_)
VITE_SUPABASE_URL=https://xkecqmsgvjjtujvlotpm.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...

# Supabase (privee - webhook uniquement)
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Gemini
GEMINI_API_KEY=...

# Resend
RESEND_API_KEY=re_...
```

### Commandes

```bash
npm install       # Installer les dependances
npm run dev       # Serveur de developpement (localhost:5173)
npm run build     # Build de production
npm run preview   # Preview du build local
```

### Deploiement automatique

Le projet se deploie automatiquement via GitHub :
- Push sur `main` -> Deploiement production
- Push sur autre branche -> Preview deployment

---

## Limites et Scaling

### Capacite actuelle (Plans gratuits)

| Ressource | Limite | Impact |
|-----------|--------|--------|
| **Supabase API** | 500K req/mois | ~25K visites/mois |
| **Supabase DB** | 500 MB | ~10K utilisateurs |
| **Supabase Realtime** | 200 connexions | Forum peut saturer |
| **Vercel Bandwidth** | 100 GB/mois | OK |
| **Resend Emails** | 100/jour | Inscriptions limitees |
| **Gemini** | 60 req/min | OK |

### Recommandations scaling

| Niveau | Users actifs | Cout/mois | Upgrade necessaire |
|--------|--------------|-----------|-------------------|
| **Actuel** | ~500 | $0 | - |
| **Petit** | ~2,000 | $45 | Supabase Pro + Resend Pro |
| **Moyen** | ~10,000 | $100 | + Vercel Pro |
| **Grand** | 50,000+ | $700+ | Supabase Team |

### Contourner la limite emails

1. **Promouvoir Google Auth** (pas d'email de confirmation)
2. **Desactiver confirmation email** (Supabase Dashboard)
3. **Passer a Resend Pro** ($20/mois = 50K emails)

---

## Debugging

### Problemes courants

| Symptome | Cause probable | Solution |
|----------|----------------|----------|
| Forum vide (0 posts) | `isMockId` trop strict | Verifier `validate-uuid.js` |
| 403 sur enrollments | RLS bloque | Verifier politiques RLS |
| Premium non active | Webhook echoue | Verifier logs Vercel |
| Emails non recus | SMTP pas configure | Configurer Resend dans Supabase |
| Page blanche dashboard | Non authentifie | Redirection normale vers /login |
| Texte corrompu (A(c)) | Encoding PowerShell | Restaurer depuis Git |

### Logs a verifier

1. **Vercel Functions** : Dashboard Vercel -> Logs
2. **Supabase** : Dashboard -> Logs -> API
3. **Stripe** : Dashboard -> Developers -> Webhooks -> Events
4. **Console navigateur** : F12 -> Console

### Commandes utiles

```bash
# Voir les logs Vercel en temps reel
vercel logs --follow

# Tester webhook Stripe localement
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## Historique des changements

Voir le fichier detaille : **[docs/CHANGELOG.md](docs/CHANGELOG.md)**

### Resume des versions

| Date | Version | Description |
|------|---------|-------------|
| 2026-01-28 | 1.5.0 | Emails Resend, Contact page, Traduction |
| 2026-01-27 | 1.4.0 | Nettoyage code, README complet |
| 2026-01-26 | 1.3.0 | Fix Forum (11 posts), Fix Premium |
| 2026-01-25 | 1.2.0 | Fix RLS enrollments, Courses |
| 2026-01-24 | 1.1.0 | Stripe webhook, OAuth callback |
| 2026-01-22 | 1.0.0 | Version initiale |

---

## Pour les futures IA (Cursor, etc.)

### Stack technique

- **React 18** + Vite
- **Supabase** (PostgreSQL, Auth, Storage, Realtime)
- **Stripe** (Paiements)
- **Gemini 2.0** (Assistant IA)
- **Resend** (Emails)
- **shadcn/ui** (Composants)
- **TailwindCSS** (Styling)
- **React Query** (Data fetching & cache)

### Patterns principaux

```javascript
// 1. Service CRUD generique
const Course = createEntityService('courses');
const data = await Course.filter({ category: 'language' }, '-created_date', 100);

// 2. Authentification
const { user } = await me(); // Retourne user + profile
const isAuthenticated = !!user;
const isPremium = user?.is_premium === true;

// 3. Data fetching avec React Query
const { data, isLoading } = useQuery({
  queryKey: ['courses'],
  queryFn: () => Course.all()
});

// 4. Navigation
import { createPageUrl } from '@/utils';
navigate(createPageUrl('Dashboard')); // -> /dashboard
```

### Points d'attention

1. **Ne jamais exposer** `SUPABASE_SERVICE_ROLE_KEY` cote client
2. **RLS obligatoire** sur toutes les tables
3. **Webhook Stripe** verifie la signature
4. **Profil cree automatiquement** par trigger SQL
5. **Forum** : Ne pas filtrer les UUIDs valides (11 posts reels)

---

*Derniere mise a jour : 28 Janvier 2026*
