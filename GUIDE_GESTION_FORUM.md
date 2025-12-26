# 💬 Guide Complet : Gestion du Forum

Ce guide vous explique en détail comment ajouter, modifier ou supprimer des messages, commentaires et réponses sur le forum de FrancePrepAcademy.

---

## 📋 Table des matières

1. [Prérequis](#prérequis)
2. [Structure des données](#structure-des-données)
3. [Méthode 1 : Via l'interface Supabase](#méthode-1--via-linterface-supabase)
4. [Méthode 2 : Via SQL dans Supabase](#méthode-2--via-sql-dans-supabase)
5. [Méthode 3 : Via l'API JavaScript](#méthode-3--via-lapi-javascript)
6. [Gérer les réponses (commentaires)](#gérer-les-réponses-commentaires)
7. [Catégories disponibles](#catégories-disponibles)
8. [Modération du forum](#modération-du-forum)
9. [Exemples complets](#exemples-complets)
10. [Troubleshooting](#troubleshooting)

---

## 🔧 Prérequis

Avant de commencer, vous devez avoir :

- ✅ Un compte administrateur sur Supabase
- ✅ Accès à Supabase Dashboard (https://supabase.com/dashboard)
- ✅ Connaissances de base en SQL (pour la méthode SQL)
- ✅ Accès à votre projet Supabase (URL et clé API)

---

## 📊 Structure des données

### Table `forum_posts` (Messages principaux)

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Auto | Identifiant unique (généré automatiquement) |
| `title` | TEXT | ✅ Oui | Titre du message |
| `content` | TEXT | ✅ Oui | Contenu du message (peut inclure Markdown) |
| `category` | TEXT | Non | Catégorie (voir liste ci-dessous) |
| `author_email` | TEXT | ✅ Oui | Email de l'auteur |
| `author_name` | TEXT | Non | Nom affiché de l'auteur |
| `replies_count` | INTEGER | Non | Nombre de réponses (mis à jour automatiquement) |
| `views_count` | INTEGER | Non | Nombre de vues (défaut: 0) |
| `is_pinned` | BOOLEAN | Non | Épinglé en haut (défaut: false) |
| `is_solved` | BOOLEAN | Non | Marqué comme résolu (défaut: false) |
| `tags` | JSONB | Non | Array de tags (ex: ["visa", "urgence"]) |
| `created_date` | TIMESTAMPTZ | Auto | Date de création |
| `updated_date` | TIMESTAMPTZ | Auto | Date de modification |

### Table `forum_replies` (Réponses/Commentaires)

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Auto | Identifiant unique |
| `post_id` | UUID | ✅ Oui | ID du message parent (référence `forum_posts`) |
| `content` | TEXT | ✅ Oui | Contenu de la réponse |
| `author_email` | TEXT | ✅ Oui | Email de l'auteur de la réponse |
| `author_name` | TEXT | Non | Nom affiché de l'auteur |
| `is_solution` | BOOLEAN | Non | Marqué comme solution (défaut: false) |
| `likes_count` | INTEGER | Non | Nombre de likes (défaut: 0) |
| `created_date` | TIMESTAMPTZ | Auto | Date de création |

---

## 🎯 Méthode 1 : Via l'interface Supabase

### Accéder à Supabase Dashboard

1. Allez sur **https://supabase.com/dashboard**
2. Sélectionnez votre projet **FrancePrepAcademy**
3. Dans le menu de gauche, cliquez sur **"Table Editor"**
4. Vous verrez toutes les tables, incluant `forum_posts` et `forum_replies`

### Ajouter un nouveau message

1. Dans **Table Editor**, cliquez sur la table **`forum_posts`**
2. Cliquez sur le bouton **"Insert"** en haut à droite
3. Remplissez les champs :
   - **title** : Titre du message (ex: "Comment obtenir mon visa étudiant ?")
   - **content** : Contenu du message (vous pouvez utiliser Markdown)
   - **category** : Catégorie (optionnel, voir liste ci-dessous)
   - **author_email** : Email de l'auteur (ex: "etudiant@example.com")
   - **author_name** : Nom à afficher (ex: "Marie Dupont")
   - **tags** : Cliquez sur "Edit JSON" et ajoutez un array : `["visa", "etudiant"]`
   - **is_pinned** : Cochez si vous voulez épingler le message
   - **is_solved** : Cochez si le problème est résolu
4. Cliquez sur **"Save"**

### Modifier un message existant

1. Dans **Table Editor**, cliquez sur la table **`forum_posts`**
2. Trouvez le message à modifier (utilisez la recherche ou filtrez)
3. Cliquez sur la ligne pour l'éditer
4. Modifiez les champs souhaités
5. Cliquez sur **"Save"**

### Supprimer un message

⚠️ **Attention** : Supprimer un message supprimera automatiquement toutes ses réponses (CASCADE).

1. Dans **Table Editor**, cliquez sur la table **`forum_posts`**
2. Trouvez le message à supprimer
3. Cliquez sur l'icône **poubelle** (🗑️) à droite de la ligne
4. Confirmez la suppression

---

## 💻 Méthode 2 : Via SQL dans Supabase

### Accéder à l'éditeur SQL

1. Dans Supabase Dashboard, cliquez sur **"SQL Editor"** dans le menu de gauche
2. Cliquez sur **"New Query"** pour créer une nouvelle requête

### Ajouter un nouveau message (SQL)

```sql
INSERT INTO forum_posts (
  title,
  content,
  category,
  author_email,
  author_name,
  tags,
  is_pinned,
  is_solved
) VALUES (
  'Comment obtenir mon visa étudiant ?',
  'Bonjour, je suis étudiant international et je veux venir en France. Pouvez-vous me guider pour obtenir mon visa ?',
  'Visa',
  'etudiant@example.com',
  'Marie Dupont',
  '["visa", "etudiant", "aide"]'::jsonb,
  false,
  false
);
```

### Modifier un message (SQL)

```sql
-- Modifier le titre et le contenu d'un message
UPDATE forum_posts
SET 
  title = 'Nouveau titre du message',
  content = 'Nouveau contenu mis à jour',
  updated_date = NOW()
WHERE id = 'UUID_DU_MESSAGE';

-- Épingler un message
UPDATE forum_posts
SET is_pinned = true
WHERE id = 'UUID_DU_MESSAGE';

-- Marquer un message comme résolu
UPDATE forum_posts
SET is_solved = true
WHERE id = 'UUID_DU_MESSAGE';

-- Ajouter des tags
UPDATE forum_posts
SET tags = '["visa", "urgence", "campus-france"]'::jsonb
WHERE id = 'UUID_DU_MESSAGE';
```

### Supprimer un message (SQL)

```sql
-- Supprimer un message spécifique (supprimera aussi toutes ses réponses)
DELETE FROM forum_posts
WHERE id = 'UUID_DU_MESSAGE';

-- Supprimer plusieurs messages
DELETE FROM forum_posts
WHERE author_email = 'spam@example.com';

-- Supprimer tous les messages d'une catégorie
DELETE FROM forum_posts
WHERE category = 'Spam';
```

### Requêtes utiles

```sql
-- Voir tous les messages
SELECT * FROM forum_posts
ORDER BY created_date DESC;

-- Voir les messages épinglés
SELECT * FROM forum_posts
WHERE is_pinned = true
ORDER BY created_date DESC;

-- Voir les messages non résolus
SELECT * FROM forum_posts
WHERE is_solved = false
ORDER BY created_date DESC;

-- Voir les messages d'une catégorie
SELECT * FROM forum_posts
WHERE category = 'Visa'
ORDER BY created_date DESC;

-- Voir les messages avec un tag spécifique
SELECT * FROM forum_posts
WHERE tags @> '["visa"]'::jsonb
ORDER BY created_date DESC;

-- Compter les messages par catégorie
SELECT category, COUNT(*) as total
FROM forum_posts
GROUP BY category
ORDER BY total DESC;
```

---

## 🔌 Méthode 3 : Via l'API JavaScript

### Configuration initiale

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'VOTRE_URL_SUPABASE';
const supabaseKey = 'VOTRE_CLE_SUPABASE';
const supabase = createClient(supabaseUrl, supabaseKey);
```

### Ajouter un nouveau message (JavaScript)

```javascript
// Ajouter un message
async function createPost(title, content, category, authorEmail, authorName) {
  const { data, error } = await supabase
    .from('forum_posts')
    .insert([
      {
        title: title,
        content: content,
        category: category,
        author_email: authorEmail,
        author_name: authorName,
        tags: ['visa', 'aide'], // Array de tags
        is_pinned: false,
        is_solved: false
      }
    ])
    .select();

  if (error) {
    console.error('Erreur:', error);
    return null;
  }

  console.log('Message créé:', data);
  return data[0];
}

// Exemple d'utilisation
createPost(
  'Comment obtenir mon visa étudiant ?',
  'Bonjour, je suis étudiant international...',
  'Visa',
  'etudiant@example.com',
  'Marie Dupont'
);
```

### Modifier un message (JavaScript)

```javascript
// Modifier un message
async function updatePost(postId, updates) {
  const { data, error } = await supabase
    .from('forum_posts')
    .update({
      ...updates,
      updated_date: new Date().toISOString()
    })
    .eq('id', postId)
    .select();

  if (error) {
    console.error('Erreur:', error);
    return null;
  }

  console.log('Message modifié:', data);
  return data[0];
}

// Exemples d'utilisation
updatePost('UUID_DU_MESSAGE', {
  title: 'Nouveau titre',
  content: 'Nouveau contenu'
});

// Épingler un message
updatePost('UUID_DU_MESSAGE', {
  is_pinned: true
});

// Marquer comme résolu
updatePost('UUID_DU_MESSAGE', {
  is_solved: true
});

// Modifier les tags
updatePost('UUID_DU_MESSAGE', {
  tags: ['visa', 'urgence', 'campus-france']
});
```

### Supprimer un message (JavaScript)

```javascript
// Supprimer un message
async function deletePost(postId) {
  const { data, error } = await supabase
    .from('forum_posts')
    .delete()
    .eq('id', postId);

  if (error) {
    console.error('Erreur:', error);
    return false;
  }

  console.log('Message supprimé');
  return true;
}

// Exemple d'utilisation
deletePost('UUID_DU_MESSAGE');
```

### Récupérer les messages (JavaScript)

```javascript
// Récupérer tous les messages
async function getAllPosts() {
  const { data, error } = await supabase
    .from('forum_posts')
    .select('*')
    .order('created_date', { ascending: false });

  if (error) {
    console.error('Erreur:', error);
    return [];
  }

  return data;
}

// Récupérer les messages épinglés
async function getPinnedPosts() {
  const { data, error } = await supabase
    .from('forum_posts')
    .select('*')
    .eq('is_pinned', true)
    .order('created_date', { ascending: false });

  if (error) {
    console.error('Erreur:', error);
    return [];
  }

  return data;
}

// Récupérer les messages d'une catégorie
async function getPostsByCategory(category) {
  const { data, error } = await supabase
    .from('forum_posts')
    .select('*')
    .eq('category', category)
    .order('created_date', { ascending: false });

  if (error) {
    console.error('Erreur:', error);
    return [];
  }

  return data;
}

// Rechercher dans les messages
async function searchPosts(searchTerm) {
  const { data, error } = await supabase
    .from('forum_posts')
    .select('*')
    .or(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)
    .order('created_date', { ascending: false });

  if (error) {
    console.error('Erreur:', error);
    return [];
  }

  return data;
}
```

---

## 💬 Gérer les réponses (commentaires)

### Ajouter une réponse (SQL)

```sql
INSERT INTO forum_replies (
  post_id,
  content,
  author_email,
  author_name,
  is_solution
) VALUES (
  'UUID_DU_MESSAGE_PARENT',
  'Voici la réponse à votre question...',
  'expert@example.com',
  'Jean Expert',
  false
);

-- Mettre à jour le compteur de réponses
UPDATE forum_posts
SET replies_count = replies_count + 1
WHERE id = 'UUID_DU_MESSAGE_PARENT';
```

### Ajouter une réponse (JavaScript)

```javascript
// Ajouter une réponse
async function createReply(postId, content, authorEmail, authorName) {
  const { data, error } = await supabase
    .from('forum_replies')
    .insert([
      {
        post_id: postId,
        content: content,
        author_email: authorEmail,
        author_name: authorName,
        is_solution: false
      }
    ])
    .select();

  if (error) {
    console.error('Erreur:', error);
    return null;
  }

  // Mettre à jour le compteur de réponses
  await supabase.rpc('increment_replies_count', { post_id: postId });
  // Ou manuellement :
  // const { count } = await supabase
  //   .from('forum_replies')
  //   .select('*', { count: 'exact', head: true })
  //   .eq('post_id', postId);
  // await supabase
  //   .from('forum_posts')
  //   .update({ replies_count: count })
  //   .eq('id', postId);

  console.log('Réponse créée:', data);
  return data[0];
}
```

### Modifier une réponse (JavaScript)

```javascript
// Modifier une réponse
async function updateReply(replyId, content) {
  const { data, error } = await supabase
    .from('forum_replies')
    .update({
      content: content
    })
    .eq('id', replyId)
    .select();

  if (error) {
    console.error('Erreur:', error);
    return null;
  }

  console.log('Réponse modifiée:', data);
  return data[0];
}

// Marquer une réponse comme solution
async function markAsSolution(replyId, postId) {
  // D'abord, désactiver toutes les autres solutions du post
  await supabase
    .from('forum_replies')
    .update({ is_solution: false })
    .eq('post_id', postId);

  // Ensuite, marquer cette réponse comme solution
  const { data, error } = await supabase
    .from('forum_replies')
    .update({ is_solution: true })
    .eq('id', replyId)
    .select();

  // Marquer le post comme résolu
  await supabase
    .from('forum_posts')
    .update({ is_solved: true })
    .eq('id', postId);

  if (error) {
    console.error('Erreur:', error);
    return null;
  }

  console.log('Réponse marquée comme solution:', data);
  return data[0];
}
```

### Supprimer une réponse (JavaScript)

```javascript
// Supprimer une réponse
async function deleteReply(replyId, postId) {
  const { data, error } = await supabase
    .from('forum_replies')
    .delete()
    .eq('id', replyId);

  if (error) {
    console.error('Erreur:', error);
    return false;
  }

  // Mettre à jour le compteur de réponses
  const { count } = await supabase
    .from('forum_replies')
    .select('*', { count: 'exact', head: true })
    .eq('post_id', postId);

  await supabase
    .from('forum_posts')
    .update({ replies_count: count })
    .eq('id', postId);

  console.log('Réponse supprimée');
  return true;
}
```

### Récupérer les réponses d'un message (JavaScript)

```javascript
// Récupérer toutes les réponses d'un message
async function getReplies(postId) {
  const { data, error } = await supabase
    .from('forum_replies')
    .select('*')
    .eq('post_id', postId)
    .order('created_date', { ascending: true });

  if (error) {
    console.error('Erreur:', error);
    return [];
  }

  return data;
}

// Récupérer la solution d'un message
async function getSolution(postId) {
  const { data, error } = await supabase
    .from('forum_replies')
    .select('*')
    .eq('post_id', postId)
    .eq('is_solution', true)
    .single();

  if (error) {
    console.error('Erreur:', error);
    return null;
  }

  return data;
}
```

---

## 📁 Catégories disponibles

Vous pouvez utiliser ces catégories pour organiser les messages du forum :

- **Visa** : Questions sur les visas
- **Logement** : Recherche et gestion du logement
- **CAF** : Aide au logement (APL)
- **CPAM** : Sécurité sociale et santé
- **Titre de séjour** : Renouvellement et démarches préfecture
- **Travail** : Recherche d'emploi, alternance
- **Culture** : Codes sociaux, culture française
- **Langue** : Apprentissage du français
- **Autre** : Autres questions
- *(Vous pouvez ajouter d'autres catégories selon vos besoins)*

---

## 🛡️ Modération du forum

### Actions de modération courantes

#### Épingler un message important

```sql
UPDATE forum_posts
SET is_pinned = true
WHERE id = 'UUID_DU_MESSAGE';
```

#### Marquer un message comme résolu

```sql
-- Marquer le post comme résolu
UPDATE forum_posts
SET is_solved = true
WHERE id = 'UUID_DU_MESSAGE';

-- Marquer une réponse comme solution
UPDATE forum_replies
SET is_solution = true
WHERE id = 'UUID_DE_LA_REPONSE';
```

#### Supprimer les messages spam

```sql
-- Supprimer tous les messages d'un utilisateur spammeur
DELETE FROM forum_posts
WHERE author_email = 'spam@example.com';

-- Supprimer les messages avec un certain mot-clé
DELETE FROM forum_posts
WHERE title ILIKE '%spam%' OR content ILIKE '%spam%';
```

#### Archiver les anciens messages

```sql
-- Vous pouvez créer une table "forum_posts_archived" pour archiver
CREATE TABLE IF NOT EXISTS forum_posts_archived AS
SELECT * FROM forum_posts
WHERE created_date < NOW() - INTERVAL '1 year';

-- Puis supprimer les messages archivés de la table principale
DELETE FROM forum_posts
WHERE created_date < NOW() - INTERVAL '1 year';
```

---

## 📝 Exemples complets

### Exemple 1 : Créer un message avec réponses (SQL)

```sql
-- 1. Créer le message principal
INSERT INTO forum_posts (
  title,
  content,
  category,
  author_email,
  author_name,
  tags,
  is_pinned
) VALUES (
  'Guide Complet : Obtenir son Visa Étudiant',
  'Voici un guide complet pour obtenir votre visa étudiant en France...',
  'Visa',
  'admin@franceprepacademy.fr',
  'Équipe FrancePrepAcademy',
  '["visa", "guide", "etudiant"]'::jsonb,
  true
) RETURNING id;

-- 2. Noter l'UUID retourné et créer une réponse
INSERT INTO forum_replies (
  post_id,
  content,
  author_email,
  author_name,
  is_solution
) VALUES (
  'UUID_RETOURNE_CI_DESSUS',
  'Merci pour ce guide très complet !',
  'etudiant@example.com',
  'Marie',
  false
);

-- 3. Mettre à jour le compteur
UPDATE forum_posts
SET replies_count = replies_count + 1
WHERE id = 'UUID_RETOURNE_CI_DESSUS';
```

### Exemple 2 : Système complet de gestion (JavaScript)

```javascript
// Fonction complète pour créer un message avec validation
async function createPostWithValidation(title, content, category, authorEmail, authorName) {
  // Validation
  if (!title || title.length < 5) {
    throw new Error('Le titre doit contenir au moins 5 caractères');
  }
  
  if (!content || content.length < 10) {
    throw new Error('Le contenu doit contenir au moins 10 caractères');
  }

  // Vérifier si l'utilisateur existe
  const { data: user } = await supabase
    .from('user_profiles')
    .select('email')
    .eq('email', authorEmail)
    .single();

  if (!user) {
    console.warn('Utilisateur non trouvé, message créé quand même');
  }

  // Créer le message
  const { data, error } = await supabase
    .from('forum_posts')
    .insert([
      {
        title: title.trim(),
        content: content.trim(),
        category: category || 'Autre',
        author_email: authorEmail,
        author_name: authorName,
        tags: [],
        is_pinned: false,
        is_solved: false,
        replies_count: 0,
        views_count: 0
      }
    ])
    .select()
    .single();

  if (error) {
    throw new Error(`Erreur lors de la création: ${error.message}`);
  }

  return data;
}

// Fonction pour récupérer un message avec toutes ses réponses
async function getPostWithReplies(postId) {
  // Récupérer le message
  const { data: post, error: postError } = await supabase
    .from('forum_posts')
    .select('*')
    .eq('id', postId)
    .single();

  if (postError) {
    throw new Error(`Erreur: ${postError.message}`);
  }

  // Récupérer les réponses
  const { data: replies, error: repliesError } = await supabase
    .from('forum_replies')
    .select('*')
    .eq('post_id', postId)
    .order('created_date', { ascending: true });

  if (repliesError) {
    throw new Error(`Erreur: ${repliesError.message}`);
  }

  // Incrémenter le compteur de vues
  await supabase
    .from('forum_posts')
    .update({ views_count: (post.views_count || 0) + 1 })
    .eq('id', postId);

  return {
    ...post,
    replies: replies
  };
}
```

---

## 🔍 Troubleshooting

### Problème : Je ne peux pas insérer un message

**Solutions :**
1. Vérifiez que tous les champs obligatoires sont remplis (`title`, `content`, `author_email`)
2. Vérifiez que l'email de l'auteur est valide
3. Vérifiez les permissions RLS (Row Level Security) dans Supabase

### Problème : Les réponses ne s'affichent pas

**Solutions :**
1. Vérifiez que le `post_id` dans `forum_replies` correspond bien à un `id` existant dans `forum_posts`
2. Vérifiez que vous récupérez les réponses avec la bonne requête SQL/API
3. Vérifiez les permissions RLS pour `forum_replies`

### Problème : Le compteur de réponses est incorrect

**Solutions :**
1. Recalculez le compteur manuellement :
   ```sql
   UPDATE forum_posts
   SET replies_count = (
     SELECT COUNT(*) 
     FROM forum_replies 
     WHERE forum_replies.post_id = forum_posts.id
   );
   ```

### Problème : Je ne peux pas supprimer un message

**Solutions :**
1. Vérifiez que vous avez les droits administrateur
2. Vérifiez les contraintes de clé étrangère (les réponses seront supprimées automatiquement)
3. Vérifiez les politiques RLS dans Supabase

### Problème : Les tags ne fonctionnent pas

**Solutions :**
1. Assurez-vous que `tags` est bien un JSONB array : `'["tag1", "tag2"]'::jsonb`
2. Pour rechercher : utilisez l'opérateur `@>` : `WHERE tags @> '["visa"]'::jsonb`

---

## 💡 Conseils et bonnes pratiques

### 1. Organisation des messages

- Utilisez des catégories cohérentes
- Ajoutez des tags pertinents pour faciliter la recherche
- Épinglez les messages importants (guides, FAQ)
- Marquez les messages résolus

### 2. Modération

- Vérifiez régulièrement les nouveaux messages
- Répondez rapidement aux questions urgentes
- Supprimez les messages spam ou inappropriés
- Encouragez la communauté à marquer les solutions

### 3. Performance

- Indexez les colonnes fréquemment utilisées (`category`, `author_email`, `created_date`)
- Limitez le nombre de messages affichés par page
- Utilisez la pagination pour les grandes listes

### 4. Sécurité

- Ne stockez jamais d'informations sensibles dans les messages
- Validez le contenu avant l'insertion (longueur, format)
- Implémentez une modération automatique pour les mots-clés interdits

---

## 🎯 Récapitulatif rapide

| Action | SQL | JavaScript |
|--------|-----|------------|
| **Créer un message** | `INSERT INTO forum_posts...` | `supabase.from('forum_posts').insert()` |
| **Modifier un message** | `UPDATE forum_posts SET...` | `supabase.from('forum_posts').update()` |
| **Supprimer un message** | `DELETE FROM forum_posts...` | `supabase.from('forum_posts').delete()` |
| **Créer une réponse** | `INSERT INTO forum_replies...` | `supabase.from('forum_replies').insert()` |
| **Modifier une réponse** | `UPDATE forum_replies SET...` | `supabase.from('forum_replies').update()` |
| **Supprimer une réponse** | `DELETE FROM forum_replies...` | `supabase.from('forum_replies').delete()` |

---

**Besoin d'aide ?** Contactez l'équipe technique ou consultez la documentation Supabase : https://supabase.com/docs

