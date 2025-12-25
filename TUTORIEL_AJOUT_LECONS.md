# 📚 Tutoriel : Ajouter des Leçons Manuellement

Ce guide vous explique comment ajouter de nouvelles leçons à vos cours existants dans Supabase.

## 🎯 Méthode 1 : Via l'Éditeur SQL (Recommandé)

### Étape 1 : Trouver l'ID du Cours

1. Allez dans **Supabase Dashboard** → **Table Editor**
2. Sélectionnez la table **`courses`**
3. Trouvez votre cours et notez son **ID** (UUID)

Ou exécutez cette requête SQL :

```sql
SELECT id, title FROM courses WHERE title LIKE '%Nom de votre cours%';
```

### Étape 2 : Insérer une Nouvelle Leçon

Exécutez cette requête SQL dans l'**SQL Editor** :

```sql
INSERT INTO lessons (course_id, title, content, "order", duration_minutes)
VALUES (
  'ID_DU_COURS_ICI',  -- Remplacez par l'ID du cours
  'Titre de la leçon',
  '# Contenu de la leçon

Vous pouvez utiliser du **Markdown** ici.

## Section 1

- Point 1
- Point 2

## Section 2

Du texte avec des **gras** et de l''*italique*.

> Citation importante

```code```
',
  1,  -- Numéro d''ordre (1 = première leçon, 2 = deuxième, etc.)
  20  -- Durée en minutes
);
```

### Exemple Concret

```sql
INSERT INTO lessons (course_id, title, content, "order", duration_minutes)
VALUES (
  '550e8400-e29b-41d4-a716-446655440001',  -- ID du cours CAF
  'Nouvelle Leçon : Optimiser ses Allocations',
  '# Optimiser ses Allocations CAF

## Introduction

Cette leçon vous apprendra à maximiser vos droits CAF.

## Points Clés

1. **Vérifier régulièrement** votre dossier
2. **Déclarer tous vos revenus** pour éviter les erreurs
3. **Mettre à jour** vos informations en cas de changement

## Conseils Pratiques

- Connectez-vous chaque mois pour vérifier vos paiements
- Gardez tous vos justificatifs
- Contactez la CAF en cas de doute

## Conclusion

En suivant ces conseils, vous optimiserez vos allocations.',
  6,  -- 6ème leçon du cours
  25  -- 25 minutes
);
```

## 🎯 Méthode 2 : Ajouter Plusieurs Leçons en Une Fois

Pour ajouter plusieurs leçons d'un coup :

```sql
INSERT INTO lessons (course_id, title, content, "order", duration_minutes)
VALUES 
  (
    'ID_DU_COURS',
    'Leçon 1',
    'Contenu de la leçon 1...',
    1,
    15
  ),
  (
    'ID_DU_COURS',
    'Leçon 2',
    'Contenu de la leçon 2...',
    2,
    20
  ),
  (
    'ID_DU_COURS',
    'Leçon 3',
    'Contenu de la leçon 3...',
    3,
    25
  );
```

## 📝 Format du Contenu (Markdown)

Le champ `content` accepte du **Markdown**. Voici les éléments les plus utiles :

### Titres
```markdown
# Titre Principal
## Sous-titre
### Sous-sous-titre
```

### Formatage
```markdown
**Gras**
*Italique*
`Code inline`
```

### Listes
```markdown
- Point 1
- Point 2
- Point 3

1. Premier
2. Deuxième
3. Troisième
```

### Citations
```markdown
> Citation importante
```

### Code
````markdown
```javascript
const code = "exemple";
```
````

### Liens
```markdown
[Texte du lien](https://example.com)
```

## 🔍 Vérifier vos Leçons

Pour voir toutes les leçons d'un cours :

```sql
SELECT 
  l.id,
  l.title,
  l."order",
  l.duration_minutes,
  c.title as course_title
FROM lessons l
JOIN courses c ON l.course_id = c.id
WHERE c.id = 'ID_DU_COURS'
ORDER BY l."order";
```

## ✏️ Modifier une Leçon Existante

Pour modifier une leçon :

```sql
UPDATE lessons
SET 
  title = 'Nouveau titre',
  content = 'Nouveau contenu...',
  duration_minutes = 30
WHERE id = 'ID_DE_LA_LECON';
```

## 🗑️ Supprimer une Leçon

```sql
DELETE FROM lessons
WHERE id = 'ID_DE_LA_LECON';
```

## ⚠️ Points Importants

1. **L'ordre (`order`)** : Détermine l'ordre d'affichage. Commencez à 1.
2. **L'ID du cours** : Doit être un UUID valide existant dans la table `courses`
3. **Les apostrophes** : Si vous utilisez des apostrophes dans le texte, doublez-les : `l''apostrophe`
4. **Le Markdown** : Le contenu sera rendu en HTML sur le site

## 🎨 Exemple Complet avec Toutes les Options

```sql
INSERT INTO lessons (
  course_id, 
  title, 
  content, 
  "order", 
  duration_minutes,
  video_url,  -- Optionnel : URL d'une vidéo YouTube/Vimeo
  resources   -- Optionnel : JSON avec ressources
)
VALUES (
  '550e8400-e29b-41d4-a716-446655440001',
  'Leçon Complète avec Toutes les Options',
  '# Ma Super Leçon

## Introduction

Voici une leçon complète avec **tout** le formatage.

## Contenu Principal

- Point important 1
- Point important 2
- Point important 3

## Conclusion

> "Citation inspirante"

Pour plus d''infos, visitez [le site officiel](https://example.com)',
  1,
  30,
  'https://www.youtube.com/watch?v=exemple',  -- Vidéo optionnelle
  '["https://example.com/ressource1.pdf", "https://example.com/ressource2.pdf"]'::jsonb  -- Ressources optionnelles
);
```

## 🚀 Astuce : Copier une Leçon d'un Autre Cours

Pour dupliquer une leçon d'un cours à un autre :

```sql
-- 1. Trouver la leçon à copier
SELECT * FROM lessons WHERE id = 'ID_LECON_A_COPIER';

-- 2. Insérer avec le nouvel ID de cours
INSERT INTO lessons (course_id, title, content, "order", duration_minutes)
SELECT 
  'NOUVEL_ID_COURS',  -- Nouveau cours
  title,
  content,
  "order",
  duration_minutes
FROM lessons
WHERE id = 'ID_LECON_A_COPIER';
```

## ✅ Checklist Avant d'Ajouter une Leçon

- [ ] J'ai l'ID du cours (UUID)
- [ ] J'ai préparé le titre de la leçon
- [ ] J'ai écrit le contenu en Markdown
- [ ] J'ai vérifié l'ordre (`order`) - pas de doublon
- [ ] J'ai échappé les apostrophes (doublé les `'`)
- [ ] J'ai testé le Markdown si nécessaire

## 🆘 En Cas de Problème

Si vous avez une erreur :

1. **Vérifiez l'ID du cours** : Il doit exister dans la table `courses`
2. **Vérifiez les apostrophes** : Doublez-les (`'` → `''`)
3. **Vérifiez l'ordre** : Pas de conflit avec une autre leçon
4. **Vérifiez les guillemets** : Utilisez des guillemets simples `'...'` pour les textes

---

**Besoin d'aide ?** Consultez la documentation Supabase ou contactez le support.

