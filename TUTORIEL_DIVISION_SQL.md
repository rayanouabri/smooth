# 📚 Tutoriel : Diviser un Fichier SQL Volumineux

Guide étape par étape pour diviser votre fichier SQL généré en petits lots exécutables.

---

## 🎯 Objectif

Diviser votre fichier SQL volumineux en plusieurs petits fichiers de 5-10 cours chacun, pour pouvoir les exécuter séparément dans Supabase SQL Editor.

---

## 📋 Prérequis

- ✅ Votre fichier SQL généré par l'IA
- ✅ Un éditeur de texte (Notepad++, VS Code, ou même le Bloc-notes)
- ✅ Accès à Supabase SQL Editor

---

## 🚀 Étape 1 : Ouvrir le Fichier SQL

1. **Localisez votre fichier SQL**
   - Il s'appelle probablement quelque chose comme `cours_complet.sql` ou le contenu copié depuis ChatGPT/Claude

2. **Ouvrez-le dans un éditeur de texte**
   - **Windows** : Bloc-notes, Notepad++, ou VS Code
   - **Mac** : TextEdit ou VS Code
   - **Linux** : Gedit, VS Code, ou nano

3. **Vérifiez la structure**
   - Vous devriez voir des sections comme :
   ```sql
   -- COURS 1
   INSERT INTO courses (...)
   ...
   
   -- LEÇONS pour COURS 1
   INSERT INTO lessons (...)
   ...
   
   -- COURS 2
   INSERT INTO courses (...)
   ...
   ```

---

## ✂️ Étape 2 : Identifier les Sections

Votre fichier devrait contenir des commentaires qui séparent chaque cours :

```sql
-- COURS 1
INSERT INTO courses (id, title, slug, ...) VALUES (...);

-- LEÇONS pour COURS 1
INSERT INTO lessons (id, course_id, title, ...) VALUES (...);
INSERT INTO lessons (id, course_id, title, ...) VALUES (...);
-- ... toutes les leçons du cours 1

-- COURS 2
INSERT INTO courses (id, title, slug, ...) VALUES (...);

-- LEÇONS pour COURS 2
INSERT INTO lessons (id, course_id, title, ...) VALUES (...);
-- ... toutes les leçons du cours 2
```

**Comptez combien de cours vous avez** :
- Appuyez sur `Ctrl+F` (ou `Cmd+F` sur Mac)
- Recherchez `-- COURS`
- Comptez les occurrences

**Exemple** : Si vous avez 25 cours, vous pouvez faire 5 lots de 5 cours chacun.

---

## 📦 Étape 3 : Créer le Premier Lot

### 3.1 Trouver le début du premier cours

1. **Cherchez** `-- COURS 1` dans votre fichier
2. **Sélectionnez** tout depuis `-- COURS 1` jusqu'à la fin de `-- COURS 5` (incluant toutes les leçons)

### 3.2 Copier le premier lot

**Exemple de ce que vous devriez copier pour le LOT 1 :**

```sql
-- COURS 1
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'uuid-cours-1',
  'CAF - Guide Complet',
  'caf-guide-complet',
  'Description...',
  'Description courte',
  'integration_administrative',
  'intermediaire',
  'fr',
  3,
  0,
  'https://images.unsplash.com/...',
  '["Objectif 1", "Objectif 2"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5,
  250,
  1500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 1
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'uuid-lecon-1-1',
  'uuid-cours-1',
  'Introduction à la CAF',
  '# Introduction...
  ...',
  1,
  45,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'uuid-lecon-1-2',
  'uuid-cours-1',
  'Vérifier son éligibilité',
  '# Vérifier...
  ...',
  2,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- COURS 2
INSERT INTO courses (...)
-- ... toutes les leçons du cours 2

-- COURS 3
-- ... toutes les leçons du cours 3

-- COURS 4
-- ... toutes les leçons du cours 4

-- COURS 5
-- ... toutes les leçons du cours 5
```

**⚠️ Important** : Assurez-vous d'inclure :
- ✅ Le `INSERT INTO courses` du cours
- ✅ Toutes les leçons de ce cours (tous les `INSERT INTO lessons`)
- ✅ Le cours suivant jusqu'au cours 5

---

## 💾 Étape 4 : Exécuter le Premier Lot dans Supabase

### 4.1 Ouvrir Supabase SQL Editor

1. Allez sur **https://supabase.com/dashboard**
2. Sélectionnez votre projet
3. Cliquez sur **SQL Editor** dans le menu de gauche
4. Cliquez sur **New Query**

### 4.2 Ajouter un en-tête au lot

**Copiez ceci en premier** (pour vous repérer) :

```sql
-- ==========================================
-- LOT 1 : Cours 1 à 5
-- ==========================================

```

### 4.3 Coller et exécuter

1. **Collez** tout le contenu du LOT 1 (les 5 cours avec leurs leçons)
2. **Vérifiez** que le SQL semble correct
3. Cliquez sur **Run** (ou appuyez sur `Ctrl+Enter` / `Cmd+Enter`)

### 4.4 Vérifier le résultat

Vous devriez voir :
- ✅ Un message de succès
- ✅ Le nombre de lignes affectées
- Pas d'erreurs rouges

**Si vous avez des erreurs** :
- Vérifiez les messages d'erreur
- Corrigez et réessayez
- Vérifiez les UUIDs (pas de doublons)

---

## 🔄 Étape 5 : Répéter pour les Autres Lots

### 5.1 Créer le LOT 2

1. **Retournez** à votre fichier SQL original
2. **Trouvez** `-- COURS 6`
3. **Sélectionnez** depuis `-- COURS 6` jusqu'à la fin de `-- COURS 10` (avec toutes les leçons)

### 5.2 Exécuter le LOT 2

1. Dans Supabase SQL Editor, créez une **nouvelle query** (`New Query`)
2. Ajoutez l'en-tête :
   ```sql
   -- ==========================================
   -- LOT 2 : Cours 6 à 10
   -- ==========================================
   
   ```
3. **Collez** le contenu du LOT 2
4. **Exécutez** (`Run`)

### 5.3 Continuer jusqu'à la fin

**Répétez pour** :
- LOT 3 : Cours 11 à 15
- LOT 4 : Cours 16 à 20
- LOT 5 : Cours 21 à 25
- ... jusqu'à ce que tous les cours soient insérés

---

## 📊 Exemple Complet avec 25 Cours

Si vous avez **25 cours**, voici comment les diviser :

| Lot | Cours inclus | Nombre de cours |
|-----|--------------|-----------------|
| LOT 1 | Cours 1 à 5 | 5 cours |
| LOT 2 | Cours 6 à 10 | 5 cours |
| LOT 3 | Cours 11 à 15 | 5 cours |
| LOT 4 | Cours 16 à 20 | 5 cours |
| LOT 5 | Cours 21 à 25 | 5 cours |

**En-têtes à utiliser** :

```sql
-- LOT 1 : Cours 1 à 5
-- LOT 2 : Cours 6 à 10
-- LOT 3 : Cours 11 à 15
-- LOT 4 : Cours 16 à 20
-- LOT 5 : Cours 21 à 25
```

---

## ✅ Vérification Après Exécution

### Vérifier que tous les cours sont insérés

Dans Supabase SQL Editor, exécutez :

```sql
-- Compter le nombre total de cours
SELECT COUNT(*) as total_cours FROM courses;

-- Voir la liste des cours créés
SELECT id, title, slug, category 
FROM courses 
ORDER BY created_date DESC 
LIMIT 25;
```

### Vérifier que toutes les leçons sont insérées

```sql
-- Compter le nombre total de leçons
SELECT COUNT(*) as total_lecons FROM lessons;

-- Voir la répartition des leçons par cours
SELECT 
  c.title as cours,
  COUNT(l.id) as nombre_lecons
FROM courses c
LEFT JOIN lessons l ON l.course_id = c.id
GROUP BY c.id, c.title
ORDER BY c.created_date DESC;
```

---

## 🎯 Astuces et Bonnes Pratiques

### ✅ Astuce 1 : Sauvegarder chaque lot

Créez des fichiers séparés pour chaque lot :

- `lot_1_cours_1_a_5.sql`
- `lot_2_cours_6_a_10.sql`
- etc.

**Avantage** : Vous pourrez les réexécuter si nécessaire.

### ✅ Astuce 2 : Vérifier après chaque lot

Après chaque lot exécuté, vérifiez rapidement :

```sql
-- Vérifier les 5 derniers cours créés
SELECT title, slug FROM courses 
ORDER BY created_date DESC 
LIMIT 5;
```

### ✅ Astuce 3 : Gérer les erreurs

Si une erreur survient :

1. **Lisez le message d'erreur** attentivement
2. **Identifiez** le cours ou la leçon problématique
3. **Corrigez** le problème
4. **Réexécutez** uniquement la partie corrigée

**Erreurs courantes** :
- UUID dupliqué → Changez l'UUID
- Slug dupliqué → Changez le slug
- Apostrophe non échappée → Doublez les apostrophes (`l''exemple`)

### ✅ Astuce 4 : Travailler par lots de 3 si nécessaire

Si vous avez encore des erreurs de taille :
- Réduisez à **3 cours par lot** au lieu de 5
- Ou même **1 cours par lot** si vraiment nécessaire

---

## 📝 Checklist Complète

Avant de commencer :
- [ ] Fichier SQL ouvert dans un éditeur
- [ ] Nombre de cours compté
- [ ] Plan de division établi (X lots de Y cours)

Pour chaque lot :
- [ ] En-tête ajouté (`-- LOT X : Cours Y à Z`)
- [ ] Contenu du lot sélectionné
- [ ] Collé dans Supabase SQL Editor
- [ ] Vérifié visuellement (pas d'erreur évidente)
- [ ] Exécuté (`Run`)
- [ ] Message de succès reçu
- [ ] Vérifié dans la base de données

Après tous les lots :
- [ ] Nombre total de cours vérifié
- [ ] Nombre total de leçons vérifié
- [ ] Quelques cours vérifiés manuellement

---

## 🆘 Résolution de Problèmes

### Problème : Je ne trouve pas les sections `-- COURS`

**Solution** : Recherchez d'autres patterns :
- `INSERT INTO courses`
- `-- COURS` (sans le numéro)
- Ou simplement comptez les `INSERT INTO courses`

### Problème : J'ai des erreurs "duplicate key"

**Solution** : 
1. Vérifiez si les cours existent déjà :
   ```sql
   SELECT slug FROM courses WHERE slug IN ('slug-1', 'slug-2', ...);
   ```
2. Utilisez `ON CONFLICT (slug) DO NOTHING` ou modifiez les slugs

### Problème : Le lot est encore trop gros

**Solution** :
- Divisez en lots plus petits (3 cours au lieu de 5)
- Ou même 1 cours à la fois

### Problème : J'ai oublié où j'en étais

**Solution** :
- Vérifiez les cours existants :
   ```sql
   SELECT COUNT(*) FROM courses;
   ```
- Comptez combien il vous en reste à faire

---

## 📸 Exemple Visuel (Texte)

**Structure du fichier SQL :**

```
┌─────────────────────────────────────┐
│ -- COURS 1                          │
│ INSERT INTO courses (...)           │
│ INSERT INTO lessons (...)           │
│ INSERT INTO lessons (...)           │
│                                     │
│ -- COURS 2                          │
│ INSERT INTO courses (...)           │
│ INSERT INTO lessons (...)           │
│ ...                                 │
└─────────────────────────────────────┘
         │
         ▼
   Diviser en lots
         │
    ┌────┴────┐
    │         │
┌───▼───┐ ┌───▼───┐
│ LOT 1 │ │ LOT 2 │
│ 1-5   │ │ 6-10  │
└───────┘ └───────┘
```

---

## 🎉 Félicitations !

Une fois tous les lots exécutés, vous devriez avoir :
- ✅ Tous vos cours dans la table `courses`
- ✅ Toutes vos leçons dans la table `lessons`
- ✅ Prêt à être utilisés sur votre plateforme !

**Vérification finale** :

```sql
-- Résumé complet
SELECT 
  COUNT(DISTINCT c.id) as nombre_cours,
  COUNT(l.id) as nombre_lecons,
  ROUND(AVG(l.duration_minutes), 0) as duree_moyenne_lecons
FROM courses c
LEFT JOIN lessons l ON l.course_id = c.id;
```

---

**Besoin d'aide ?** Si vous bloquez sur une étape, vérifiez d'abord les erreurs dans Supabase, puis adaptez la taille des lots ! 🚀

