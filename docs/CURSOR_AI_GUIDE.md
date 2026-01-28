# Guide pour Cursor AI

Ce guide aide les futures sessions Cursor a comprendre rapidement le projet.

---

## Demarrage rapide

### Comprendre l'architecture en 30 secondes

```
Frontend (React + Vite)
    | Supabase Client
Supabase (PostgreSQL + Auth + RLS)
    |
Vercel Serverless (Stripe, Gemini, Contact)
```

### Fichiers cles a lire en premier

1. `README.md` - Vue d'ensemble complete
2. `docs/CHANGELOG.md` - Historique des modifications
3. `src/api/database.js` - Pattern CRUD generique
4. `src/api/auth.js` - Authentification

---

## Structure des fichiers importants

### Services API (`src/api/`)

| Fichier | Role |
|---------|------|
| `database.js` | `createEntityService()` - CRUD generique |
| `auth.js` | `me()`, `signInWithEmail()`, `signUpWithEmail()`, `signInWithGoogle()` |
| `supabaseClient.js` | Instance Supabase |
| `entities.js` | Export de toutes les entites (Course, Enrollment, etc.) |

### Pages principales (`src/pages/`)

| Page | URL | Description |
|------|-----|-------------|
| `Home.jsx` | `/` | Landing page |
| `Login.jsx` | `/login` | Connexion/Inscription |
| `Dashboard.jsx` | `/dashboard` | Tableau de bord (auth required) |
| `Courses.jsx` | `/courses` | Liste des cours |
| `CourseDetail.jsx` | `/courses/:id` | Detail d'un cours |
| `Community.jsx` | `/community` | Forum (11 posts) |
| `Pricing.jsx` | `/pricing` | Plans tarifaires |
| `Contact.jsx` | `/contact` | Formulaire contact |

### Serverless Functions (`api/`)

| Fichier | Endpoint | Role |
|---------|----------|------|
| `stripe/checkout.js` | POST `/api/stripe/checkout` | Cree session Stripe |
| `stripe/webhook.js` | POST `/api/stripe/webhook` | Recoit events Stripe |
| `gemini.js` | POST `/api/gemini` | Chat avec Sophie (IA) |
| `contact.js` | POST `/api/contact` | Envoi email contact |

---

## Patterns de code

### 1. Service CRUD (database.js)

```javascript
// Creer un service pour une table
const Course = createEntityService('courses');

// Utilisation
const allCourses = await Course.all();
const course = await Course.get('uuid-xxx');
const filtered = await Course.filter({ category: 'language' }, '-created_date', 100);
const created = await Course.create({ title: 'New Course', ... });
const updated = await Course.update('uuid-xxx', { title: 'Updated' });
await Course.delete('uuid-xxx');
```

### 2. Authentification (auth.js)

```javascript
import { me, signInWithEmail, signInWithGoogle, signOut } from '@/api/auth';

// Recuperer l'utilisateur actuel
const { user, profile } = await me();

// Verifier premium
const isPremium = profile?.is_premium === true;

// Connexion
await signInWithEmail(email, password);
await signInWithGoogle();

// Deconnexion
await signOut();
```

### 3. Data fetching (React Query)

```javascript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Course } from '@/api/entities';

// Lecture
const { data: courses, isLoading } = useQuery({
  queryKey: ['courses'],
  queryFn: () => Course.all()
});

// Mutation
const queryClient = useQueryClient();
const mutation = useMutation({
  mutationFn: (newCourse) => Course.create(newCourse),
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['courses'] });
  }
});
```

### 4. Navigation

```javascript
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const navigate = useNavigate();

// Navigation simple
navigate('/dashboard');

// Avec createPageUrl (convertit en lowercase)
navigate(createPageUrl('Dashboard')); // -> /dashboard
navigate(createPageUrl('CourseDetail')); // -> /coursedetail
```

---

## Pieges a eviter

### 1. Ne JAMAIS filtrer les UUIDs du forum

```javascript
// MAUVAIS - Filtrait des posts valides
const uuidV4Pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// BON - Accepte tous les UUIDs
const uuidFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
```

### 2. Ne pas appeler queryClient.removeQueries dans queryFn

```javascript
// MAUVAIS - Cause boucle infinie
const { data } = useQuery({
  queryKey: ['posts'],
  queryFn: async () => {
    queryClient.removeQueries({ queryKey: ['posts'] }); // BOUCLE INFINIE!
    return await ForumPost.all();
  }
});

// BON - removeQueries hors du queryFn
useEffect(() => {
  queryClient.removeQueries({ queryKey: ['posts'] });
}, [someCondition]);
```

### 3. PowerShell corrompt l'encoding UTF-8

```bash
# Si PowerShell corrompt un fichier (A(c) au lieu de e accent)
# Restaurer depuis Git :
git checkout HEAD -- src/pages/Community.jsx

# Puis reappliquer les changements avec Cursor (pas PowerShell)
```

### 4. RLS ne peut pas acceder a auth.users directement

```sql
-- MAUVAIS - Erreur "permission denied for table users"
CREATE POLICY "..." USING (
  email = (SELECT email FROM auth.users WHERE id = auth.uid())
);

-- BON - Utiliser auth.uid() directement
CREATE POLICY "..." USING (
  auth.uid()::text = id::text
);
```

---

## Base de donnees

### Tables principales

```sql
-- Utilisateurs
user_profiles (id, user_email, full_name, is_premium, subscription_status, ...)

-- Cours
courses (id, title, description, category, is_premium, instructor_name, ...)
lessons (id, course_id, title, content, video_url, order_index, ...)
enrollments (id, course_id, user_email, progress, ...)

-- Forum (11 posts reels)
forum_posts (id, title, content, author_name, category, likes, ...)
forum_replies (id, post_id, content, author_name, ...)

-- IA
ai_messages (id, user_id, message_count, last_reset, ...)
```

### Verifier les politiques RLS

```sql
-- Lister les politiques d'une table
SELECT * FROM pg_policies WHERE tablename = 'user_profiles';

-- Tester une requete avec RLS
SET ROLE authenticated;
SET request.jwt.claims TO '{"sub": "uuid-user-id"}';
SELECT * FROM user_profiles;
```

---

## Debugging

### Logs importants

```javascript
// Dans le navigateur (F12 -> Console)
me() - User: xxx          // Info authentification
me() - is_premium: true   // Statut premium

// Erreurs courantes
403 Forbidden             // RLS bloque la requete
"permission denied for table users" // RLS accede a auth.users
```

### Verifier le statut premium

```javascript
// Console navigateur
const { user, profile } = await me();
console.log('Premium:', profile?.is_premium);
console.log('Subscription:', profile?.subscription_status);
```

### Forcer refresh des donnees

```javascript
// Dans composant React
const queryClient = useQueryClient();
queryClient.invalidateQueries({ queryKey: ['user'] });
```

---

## Comment ajouter une entree au CHANGELOG

Apres chaque modification significative :

1. Ouvrir `docs/CHANGELOG.md`
2. Ajouter une entree sous la version actuelle ou creer nouvelle version
3. Suivre le template :

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Fonctionnalites ajoutees
- Description

### Modifications
- `fichier.jsx` : Description

### Corrections
**Probleme** : Description
**Solution** : Ce qui a ete fait
```

---

## Checklist avant de terminer une session

- [ ] Code fonctionne (pas d'erreurs console)
- [ ] Pas de cles API exposees cote client
- [ ] CHANGELOG mis a jour si changement significatif
- [ ] Commit avec message descriptif
- [ ] Push sur GitHub (declenche deploy Vercel)

---

*Guide cree le 28 Janvier 2026 - Mise a jour a chaque session majeure*
