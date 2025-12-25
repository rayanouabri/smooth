# 🚀 Guide Simple : Exécuter le Script SQL

## 📋 Ce qu'il faut faire

Vous devez copier le fichier SQL dans Supabase pour créer tous les cours et messages du forum.

## ✅ Étapes à Suivre

### Étape 1 : Ouvrir Supabase

1. Allez sur **supabase.com**
2. Connectez-vous à votre compte
3. Ouvrez votre projet **FrancePrep Academy**

### Étape 2 : Ouvrir l'Éditeur SQL

1. Dans le menu de gauche, cliquez sur **"SQL Editor"** (icône avec `</>`)
2. Cliquez sur le bouton **"+"** en haut à gauche pour créer une nouvelle requête
3. Donnez un nom à votre requête (ex: "Chargement des cours et forum")

### Étape 3 : Copier le Fichier SQL

1. Sur votre ordinateur, ouvrez le fichier : **`seed-complete-data.sql`**
   - Le fichier se trouve dans le dossier du projet
   - Ouvrez-le avec un éditeur de texte (Bloc-notes, VS Code, etc.)

2. **Sélectionnez TOUT** le contenu (Ctrl+A ou Cmd+A)

3. **Copiez** tout (Ctrl+C ou Cmd+C)

### Étape 4 : Coller dans Supabase

1. Dans l'éditeur SQL de Supabase, **collez** le contenu (Ctrl+V ou Cmd+V)
2. Le code SQL devrait apparaître dans l'éditeur

### Étape 5 : Exécuter

1. Cliquez sur le bouton vert **"Run"** en bas à droite
   - Ou appuyez sur **Ctrl+Enter** (ou Cmd+Enter sur Mac)

2. **Attendez quelques secondes** (le script peut prendre 10-30 secondes)

3. Vous devriez voir "Success" en bas de l'écran

## ✅ Vérifier que ça a marché

Pour vérifier, exécutez ces requêtes une par une :

```sql
-- Vérifier les cours
SELECT COUNT(*) FROM courses;
-- Devrait afficher environ 80

-- Vérifier les leçons
SELECT COUNT(*) FROM lessons;
-- Devrait afficher environ 321

-- Vérifier les posts forum
SELECT COUNT(*) FROM forum_posts;
-- Devrait afficher 25

-- Vérifier les commentaires
SELECT COUNT(*) FROM forum_replies;
-- Devrait afficher environ 74
```

## ❌ Si ça ne marche pas

**Erreur de syntaxe ?**
- Vérifiez que vous avez bien copié TOUT le fichier
- Assurez-vous qu'il n'y a pas de texte avant ou après le code SQL

**Erreur "table does not exist" ?**
- Vous devez d'abord exécuter `supabase-schema-with-courses.sql` pour créer les tables
- Ensuite exécutez `seed-complete-data.sql`

**Rien ne se passe ?**
- Vérifiez votre connexion internet
- Rechargez la page Supabase
- Réessayez

## 🎉 C'est tout !

Une fois que c'est fait, retournez sur votre site et vous devriez voir :
- ✅ 80 cours disponibles
- ✅ 25 messages dans le forum
- ✅ Des commentaires sous chaque message

---

**Besoin d'aide ?** Regardez les captures d'écran ou contactez le support.

