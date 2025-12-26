# 📚 Guide Complet : Gestion des Cours et Leçons

Ce guide vous explique en détail comment ajouter, modifier ou supprimer des cours et des leçons sur FrancePrepAcademy.

---

## 📋 Table des matières

1. [Prérequis](#prérequis)
2. [Structure des données](#structure-des-données)
3. [Méthode 1 : Via l'interface Admin](#méthode-1--via-linterface-admin)
4. [Méthode 2 : Via SQL dans Supabase](#méthode-2--via-sql-dans-supabase)
5. [Méthode 3 : Via l'API JavaScript](#méthode-3--via-lapi-javascript)
6. [Gérer les leçons](#gérer-les-leçons)
7. [Catégories et niveaux disponibles](#catégories-et-niveaux-disponibles)
8. [Exemples complets](#exemples-complets)
9. [Troubleshooting](#troubleshooting)

---

## 🔧 Prérequis

Avant de commencer, vous devez avoir :

- ✅ Un compte administrateur sur FrancePrepAcademy
- ✅ Accès à Supabase Dashboard
- ✅ Connaissances de base en SQL (pour la méthode SQL)

---

## 📊 Structure des données

### Table `courses`

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Auto | Identifiant unique (généré automatiquement) |
| `title` | TEXT | ✅ Oui | Titre du cours |
| `slug` | TEXT | ✅ Oui | URL-friendly (ex: "guide-caf-complet") |
| `description` | TEXT | ✅ Oui | Description complète (Markdown supporté) |
| `short_description` | TEXT | ✅ Oui | Description courte pour les cartes |
| `category` | TEXT | ✅ Oui | Catégorie (voir liste ci-dessous) |
| `level` | TEXT | ✅ Oui | Niveau (débutant, intermédiaire, avancé) |
| `language` | TEXT | Non | Niveau langue (A1-C2) ou "fr" |
| `duration_hours` | INTEGER | Non | Durée totale en heures |
| `price` | DECIMAL | Non | Prix (0 = gratuit, >0 = premium) |
| `thumbnail_url` | TEXT | Non | URL de l'image de couverture |
| `rating` | DECIMAL | Non | Note sur 5 (0-5) |
| `reviews_count` | INTEGER | Non | Nombre d'avis |
| `enrolled_count` | INTEGER | Non | Nombre d'inscrits |
| `objectives` | JSONB | Non | Array d'objectifs pédagogiques |
| `prerequisites` | JSONB | Non | Array de prérequis |
| `is_published` | BOOLEAN | Non | true = publié, false = brouillon |
| `created_date` | TIMESTAMPTZ | Auto | Date de création |
| `updated_date` | TIMESTAMPTZ | Auto | Date de modification |

### Table `lessons`

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Auto | Identifiant unique |
| `course_id` | UUID | ✅ Oui | ID du cours parent |
| `title` | TEXT | ✅ Oui | Titre de la leçon |
| `content` | TEXT | Non | Contenu en Markdown |
| `order` | INTEGER | Non | Ordre d'affichage (1, 2, 3...) |
| `duration_minutes` | INTEGER | Non | Durée en minutes |
| `video_url` | TEXT | Non | URL de la vidéo (YouTube, Vimeo, etc.) |
| `resources` | JSONB | Non | Array de ressources (PDF, liens) |
| `created_date` | TIMESTAMPTZ | Auto | Date de création |
| `updated_date` | TIMESTAMPTZ | Auto | Date de modification |

---

## 🎯 Méthode 1 : Via l'interface Admin

### Accéder à l'interface Admin

1. Connectez-vous avec un compte administrateur
2. Allez sur `/AdminCourses` ou cliquez sur "Administration" dans le menu
3. Vous verrez la liste de tous les cours

### Ajouter un nouveau cours

1. Cliquez sur **"Nouveau cours"**
2. Remplissez le formulaire :
   - **Titre** : Nom du cours (ex: "Guide Complet CAF")
   - **Slug** : Identifiant URL (ex: "guide-complet-caf")
     - ⚠️ Doit être unique
     - Pas d'espaces, utilisez des tirets
     - Exemple : "preparation-delf-b2"
   - **Description courte** : Une phrase accrocheuse
   - **Description complète** : Description détaillée
   - **Catégorie** : Sélectionnez dans la liste
   - **Niveau** : Débutant, Intermédiaire ou Avancé
   - **Niveau langue** : A1 à C2 (ou N/A)
   - **Durée (heures)** : Durée totale estimée
   - **Prix (€)** : 0 pour gratuit, >0 pour premium
   - **URL de l'image** : Lien vers l'image de couverture
   - **Publié** : Brouillon ou Publié
   - **Objectifs pédagogiques** : Cliquez sur "+ Ajouter un objectif"
3. Cliquez sur **"Créer le cours"**

### Modifier un cours existant

1. Dans la liste des cours, cliquez sur **"Modifier"**
2. Le formulaire se remplit automatiquement avec les données actuelles
3. Modifiez les champs souhaités
4. Cliquez sur **"Mettre à jour"**

### Supprimer un cours

1. Dans la liste des cours, cliquez sur **"Supprimer"**
2. Confirmez la suppression
3. ⚠️ **Attention** : La suppression d'un cours supprime aussi toutes ses leçons (CASCADE)

### Gérer les leçons depuis l'interface

⚠️ **Note** : L'interface Admin actuelle ne permet pas de gérer les leçons directement. Utilisez la méthode SQL ou l'API (voir ci-dessous).

---

## 🗄️ Méthode 2 : Via SQL dans Supabase

### Accéder à l'éditeur SQL

1. Allez sur [Supabase Dashboard](https://app.supabase.com)
2. Sélectionnez votre projet
3. Cliquez sur **"SQL Editor"** dans le menu de gauche
4. Cliquez sur **"New query"**

### Ajouter un nouveau cours

```sql
-- 1. Insérer un nouveau cours
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
  rating,
  reviews_count
) VALUES (
  'Guide Complet : Demande de Visa Étudiant',
  'guide-visa-etudiant',
  'Apprenez comment préparer et déposer votre demande de visa étudiant pour la France. Ce guide complet vous accompagne pas à pas dans toutes les étapes administratives.',
  'Guide pas à pas pour votre demande de visa étudiant',
  'integration_administrative',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
  '["Comprendre les types de visas","Préparer les documents nécessaires","Remplir le formulaire","Suivre sa demande"]'::jsonb,
  '[]'::jsonb,
  true,
  4.8,
  0
) RETURNING id;
```

**Important** : Notez l'`id` retourné, vous en aurez besoin pour ajouter les leçons.

### Modifier un cours existant

```sql
-- Trouver l'ID du cours à modifier
SELECT id, title, slug FROM courses WHERE slug = 'guide-visa-etudiant';

-- Modifier le cours
UPDATE courses
SET 
  title = 'Nouveau titre du cours',
  description = 'Nouvelle description',
  price = 29.90,
  is_published = true,
  updated_date = NOW()
WHERE id = 'VOTRE_COURSE_ID';
```

**Exemple concret** :
```sql
-- Changer le prix d'un cours gratuit en premium
UPDATE courses
SET 
  price = 1,
  is_published = true
WHERE slug = 'guide-complet-caf';
```

### Supprimer un cours

```sql
-- Supprimer un cours (supprime aussi toutes les leçons)
DELETE FROM courses
WHERE id = 'VOTRE_COURSE_ID';

-- OU supprimer par slug
DELETE FROM courses
WHERE slug = 'guide-visa-etudiant';
```

⚠️ **Attention** : Cette action est irréversible !

---

## 📝 Gérer les leçons

### Ajouter des leçons à un cours

#### Méthode SQL

```sql
-- 1. Récupérer l'ID du cours
SELECT id FROM courses WHERE slug = 'guide-visa-etudiant';

-- 2. Insérer les leçons (remplacez COURSE_ID par l'ID obtenu)
INSERT INTO lessons (course_id, title, content, "order", duration_minutes, video_url)
VALUES 
  (
    'COURSE_ID',
    'Leçon 1 : Introduction au visa étudiant',
    '# Qu''est-ce qu''un visa étudiant ?

Le visa étudiant est un titre de séjour temporaire qui permet aux étudiants étrangers de venir étudier en France.

## Types de visas étudiants

- **Visa court séjour** : Pour les études de moins de 3 mois
- **Visa long séjour** : Pour les études de plus de 3 mois (VLS-TS)
- **Visa de recherche** : Pour les chercheurs',
    1,
    15,
    NULL
  ),
  (
    'COURSE_ID',
    'Leçon 2 : Documents nécessaires',
    '# Documents à préparer

Pour faire votre demande de visa, vous aurez besoin de :

1. **Passeport valide**
2. **Preuve d''inscription** à un établissement français
3. **Justificatifs de ressources financières**
4. **Assurance santé**',
    2,
    20,
    'https://www.youtube.com/watch?v=VIDEO_ID'
  ),
  (
    'COURSE_ID',
    'Leçon 3 : Comment remplir le formulaire',
    '# Étapes du formulaire

1. Connectez-vous sur France-Visas
2. Remplissez toutes les sections
3. Joignez les documents
4. Prenez rendez-vous',
    3,
    25,
    NULL
  );
```

#### Méthode avec contenu Markdown avancé

```sql
INSERT INTO lessons (course_id, title, content, "order", duration_minutes)
VALUES (
  'COURSE_ID',
  'Leçon complète avec Markdown',
  '# Titre principal

## Section 1

Contenu de la section avec **texte en gras** et *texte en italique*.

### Sous-section

- Liste à puces point 1
- Liste à puces point 2
- Liste à puces point 3

1. Liste numérotée
2. Deuxième élément
3. Troisième élément

> Citation importante

`Code inline` pour les exemples

```sql
-- Bloc de code
SELECT * FROM courses;
```

[Lien](https://example.com) vers une ressource externe',
  1,
  30
);
```

### Modifier une leçon

```sql
-- Modifier le contenu d'une leçon
UPDATE lessons
SET 
  title = 'Nouveau titre',
  content = 'Nouveau contenu',
  duration_minutes = 35,
  video_url = 'https://www.youtube.com/watch?v=NOUVEAU_ID',
  updated_date = NOW()
WHERE id = 'LESSON_ID';

-- Modifier l'ordre d'une leçon
UPDATE lessons
SET "order" = 2
WHERE id = 'LESSON_ID';

-- Réorganiser toutes les leçons d'un cours
UPDATE lessons
SET "order" = 1
WHERE course_id = 'COURSE_ID' AND title LIKE '%Introduction%';

UPDATE lessons
SET "order" = 2
WHERE course_id = 'COURSE_ID' AND title LIKE '%Documents%';
```

### Supprimer une leçon

```sql
-- Supprimer une leçon spécifique
DELETE FROM lessons
WHERE id = 'LESSON_ID';

-- Supprimer toutes les leçons d'un cours
DELETE FROM lessons
WHERE course_id = 'COURSE_ID';
```

### Ajouter des ressources à une leçon

```sql
-- Ajouter des ressources (PDF, liens, etc.)
UPDATE lessons
SET resources = '[
  {
    "type": "pdf",
    "title": "Guide PDF",
    "url": "https://example.com/guide.pdf"
  },
  {
    "type": "link",
    "title": "Site officiel",
    "url": "https://www.service-public.fr"
  }
]'::jsonb
WHERE id = 'LESSON_ID';
```

---

## 🏷️ Catégories et niveaux disponibles

### Catégories (`category`)

| Valeur | Description |
|--------|-------------|
| `integration_administrative` | CAF, sécurité sociale, visas, préfecture |
| `francais` | Cours de français (DELF, DALF) |
| `emploi` | CV, entretiens, recherche d'emploi |
| `culture` | Culture française, codes sociaux |
| `logement` | Recherche de logement, garanties |
| `sante` | Santé, mutuelle, CPAM |
| `etudes` | Études en France, universités |
| `preparation_academique` | Préparation aux examens |
| `culture_codes_sociaux` | Culture et codes sociaux français |
| `insertion_professionnelle` | Insertion professionnelle |
| `formations_professionnelles` | Formations professionnelles |

### Niveaux (`level`)

| Valeur | Description |
|--------|-------------|
| `debutant` | Niveau débutant |
| `intermediaire` | Niveau intermédiaire |
| `avance` | Niveau avancé |

### Niveaux de langue (`language`)

| Valeur | Description |
|--------|-------------|
| `A1`, `A2` | Débutant |
| `B1`, `B2` | Intermédiaire |
| `C1`, `C2` | Avancé |
| `fr` | Français (pour les cours administratifs) |
| `N/A` | Non applicable |

---

## 💻 Méthode 3 : Via l'API JavaScript

### Ajouter un cours via l'API

```javascript
import { Course } from '@/api/entities';

// Créer un nouveau cours
const newCourse = await Course.create({
  title: 'Guide Complet CAF',
  slug: 'guide-complet-caf',
  description: 'Description complète...',
  short_description: 'Description courte',
  category: 'integration_administrative',
  level: 'debutant',
  language: 'fr',
  duration_hours: 3,
  price: 0,
  thumbnail_url: 'https://images.unsplash.com/...',
  objectives: ['Objectif 1', 'Objectif 2'],
  prerequisites: [],
  is_published: true
});

console.log('Cours créé avec l\'ID:', newCourse.id);
```

### Modifier un cours via l'API

```javascript
import { Course } from '@/api/entities';

// Modifier un cours
await Course.update('COURSE_ID', {
  title: 'Nouveau titre',
  price: 29.90,
  is_published: true
});
```

### Supprimer un cours via l'API

```javascript
import { Course } from '@/api/entities';

// Supprimer un cours
await Course.delete('COURSE_ID');
```

### Gérer les leçons via l'API

```javascript
import { Lesson } from '@/api/entities';
import { supabase } from '@/api/supabaseClient';

// Ajouter une leçon
const newLesson = await Lesson.create({
  course_id: 'COURSE_ID',
  title: 'Introduction',
  content: '# Contenu de la leçon',
  order: 1,
  duration_minutes: 15
});

// OU directement avec Supabase
const { data, error } = await supabase
  .from('lessons')
  .insert({
    course_id: 'COURSE_ID',
    title: 'Introduction',
    content: '# Contenu',
    order: 1
  });

// Modifier une leçon
await Lesson.update('LESSON_ID', {
  title: 'Nouveau titre',
  content: 'Nouveau contenu'
});

// Supprimer une leçon
await Lesson.delete('LESSON_ID');

// Récupérer toutes les leçons d'un cours
const lessons = await Lesson.filter({ course_id: 'COURSE_ID' }, 'order');
```

---

## 📖 Exemples complets

### Exemple 1 : Créer un cours complet avec leçons

```sql
-- 1. Créer le cours
WITH new_course AS (
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
    is_published
  ) VALUES (
    'Maîtrisez la Recherche d''Emploi en France',
    'recherche-emploi-france',
    'Apprenez les techniques pour trouver un emploi en France : CV à la française, lettre de motivation, réseautage, entretiens...',
    'Techniques complètes pour décrocher un emploi',
    'emploi',
    'intermediaire',
    'fr',
    5,
    0,
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    '["Créer un CV français","Écrire une lettre de motivation","Réseauter efficacement","Réussir les entretiens"]'::jsonb,
    '[]'::jsonb,
    true
  ) RETURNING id
)
-- 2. Ajouter les leçons
INSERT INTO lessons (course_id, title, content, "order", duration_minutes)
SELECT 
  new_course.id,
  lesson_data.title,
  lesson_data.content,
  lesson_data.order_num,
  lesson_data.duration
FROM new_course,
(VALUES
  (
    1,
    'Leçon 1 : Le CV français',
    '# Structure du CV français

Le CV français a ses propres codes :

## Informations personnelles
- Nom, prénom
- Adresse
- Téléphone, email
- Photo (optionnelle mais recommandée)

## Sections importantes
1. **Formation** : Vos diplômes
2. **Expérience professionnelle** : Vos emplois
3. **Compétences** : Langues, informatique
4. **Centres d''intérêt** : Pour humaniser',
    30
  ),
  (
    2,
    'Leçon 2 : La lettre de motivation',
    '# Écrire une lettre de motivation efficace

## Structure

1. **En-tête** : Vos coordonnées
2. **Introduction** : Pourquoi vous écrivez
3. **Développement** : Vos compétences
4. **Conclusion** : Votre motivation',
    25
  ),
  (
    3,
    'Leçon 3 : Le réseautage',
    '# Réseauter en France

## Plateformes importantes

- **LinkedIn** : Essentiel pour le professionnel
- **Meetup** : Événements sectoriels
- **Networking events** : Salons professionnels',
    20
  )
) AS lesson_data(order_num, title, content, duration);
```

### Exemple 2 : Modifier plusieurs cours en une requête

```sql
-- Passer tous les cours d'une catégorie en premium
UPDATE courses
SET 
  price = 1,
  updated_date = NOW()
WHERE category = 'francais' AND price = 0;

-- Publier tous les brouillons d'une catégorie
UPDATE courses
SET 
  is_published = true,
  updated_date = NOW()
WHERE category = 'culture' AND is_published = false;
```

### Exemple 3 : Réorganiser les leçons d'un cours

```sql
-- Réorganiser les leçons pour qu'elles soient dans l'ordre alphabétique
WITH reordered AS (
  SELECT 
    id,
    ROW_NUMBER() OVER (ORDER BY title) as new_order
  FROM lessons
  WHERE course_id = 'COURSE_ID'
)
UPDATE lessons l
SET "order" = r.new_order
FROM reordered r
WHERE l.id = r.id;
```

---

## 🔍 Requêtes utiles

### Lister tous les cours

```sql
SELECT 
  id,
  title,
  slug,
  category,
  level,
  price,
  is_published,
  created_date
FROM courses
ORDER BY created_date DESC;
```

### Compter les cours par catégorie

```sql
SELECT 
  category,
  COUNT(*) as nombre_cours,
  COUNT(*) FILTER (WHERE is_published = true) as publies,
  COUNT(*) FILTER (WHERE price = 0) as gratuits
FROM courses
GROUP BY category
ORDER BY nombre_cours DESC;
```

### Lister les cours sans leçons

```sql
SELECT c.*
FROM courses c
LEFT JOIN lessons l ON c.id = l.course_id
WHERE l.id IS NULL;
```

### Lister les leçons d'un cours

```sql
SELECT 
  id,
  title,
  "order",
  duration_minutes,
  video_url,
  created_date
FROM lessons
WHERE course_id = 'COURSE_ID'
ORDER BY "order";
```

### Trouver un cours par son slug

```sql
SELECT * FROM courses WHERE slug = 'guide-complet-caf';
```

### Trouver l'ID d'un cours

```sql
SELECT id FROM courses WHERE slug = 'guide-complet-caf';
```

---

## ⚠️ Troubleshooting

### Erreur : "Slug already exists"

Le slug doit être unique. Changez-le :
```sql
UPDATE courses
SET slug = 'nouveau-slug-unique'
WHERE id = 'COURSE_ID';
```

### Erreur : "Foreign key constraint"

Vous ne pouvez pas supprimer un cours qui a des leçons sans supprimer les leçons d'abord :
```sql
-- Supprimer d'abord les leçons
DELETE FROM lessons WHERE course_id = 'COURSE_ID';
-- Puis le cours
DELETE FROM courses WHERE id = 'COURSE_ID';
```

### Le cours n'apparaît pas sur le site

Vérifiez que :
1. `is_published = true`
2. Le cours est bien dans la base de données
3. La page est rafraîchie

```sql
-- Vérifier le statut
SELECT id, title, is_published FROM courses WHERE slug = 'votre-slug';

-- Publier le cours
UPDATE courses SET is_published = true WHERE id = 'COURSE_ID';
```

### Les leçons ne s'affichent pas dans le bon ordre

Vérifiez le champ `order` :
```sql
-- Voir l'ordre actuel
SELECT id, title, "order" 
FROM lessons 
WHERE course_id = 'COURSE_ID' 
ORDER BY "order";

-- Corriger l'ordre
UPDATE lessons SET "order" = 1 WHERE id = 'LESSON_ID_1';
UPDATE lessons SET "order" = 2 WHERE id = 'LESSON_ID_2';
```

### Image du cours ne s'affiche pas

Vérifiez que :
1. L'URL est correcte et accessible
2. L'URL commence par `https://`
3. Le serveur d'images autorise l'affichage

```sql
-- Tester une nouvelle image
UPDATE courses
SET thumbnail_url = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800'
WHERE id = 'COURSE_ID';
```

---

## 📝 Bonnes pratiques

1. **Slug unique** : Toujours utiliser un slug unique et descriptif
2. **Description complète** : Utilisez Markdown pour formater le contenu
3. **Ordre des leçons** : Commencez toujours à 1 et incrémentez
4. **Images** : Utilisez des URLs d'images externes (Unsplash, etc.)
5. **Testez en brouillon** : Créez d'abord avec `is_published = false`
6. **Sauvegardez les IDs** : Notez les IDs des cours/leçons pour faciliter les modifications
7. **Catégories cohérentes** : Utilisez toujours les mêmes valeurs de catégories
8. **Contenu Markdown** : Profitez de Markdown pour formater vos leçons

---

## 🔗 Ressources utiles

- **Interface Admin** : `/AdminCourses` (nécessite compte admin)
- **Documentation Supabase** : https://supabase.com/docs
- **Guide Markdown** : https://www.markdownguide.org/
- **Images gratuites** : https://unsplash.com/

---

## 💡 Astuces

### Générer un slug automatiquement

En SQL, vous pouvez créer une fonction :
```sql
CREATE OR REPLACE FUNCTION generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(
    regexp_replace(
      regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'),
      '\s+', '-', 'g'
    )
  );
END;
$$ LANGUAGE plpgsql;

-- Utilisation
INSERT INTO courses (title, slug, ...)
VALUES (
  'Mon Nouveau Cours',
  generate_slug('Mon Nouveau Cours'), -- Génère : "mon-nouveau-cours"
  ...
);
```

### Copier un cours existant

```sql
-- Créer un nouveau cours basé sur un existant
INSERT INTO courses (
  title, slug, description, short_description, category, level, 
  duration_hours, price, thumbnail_url, objectives, prerequisites, is_published
)
SELECT 
  title || ' (Copie)',
  slug || '-copie',
  description,
  short_description,
  category,
  level,
  duration_hours,
  price,
  thumbnail_url,
  objectives,
  prerequisites,
  false -- Mettre en brouillon
FROM courses
WHERE id = 'COURSE_ID_ORIGINAL'
RETURNING id;
```

---

**Besoin d'aide ?** Contactez le support : contact@franceprepacademy.fr

