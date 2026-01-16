# 📖 Guide : Comment Exécuter la Suppression des Cours

## 🎯 Vue d'ensemble

Le script SQL est divisé en **2 étapes** :
- **ÉTAPE 1** : Vérification (ne supprime rien, juste affiche ce qui sera supprimé)
- **ÉTAPE 2** : Suppression réelle (décommentée pour exécuter)

---

## 📝 ÉTAPE 1 : Vérifier les Cours à Supprimer

### Ce que fait l'ÉTAPE 1 :
- ✅ Affiche la liste des cours qui seront supprimés
- ✅ Montre combien d'inscriptions et de leçons ils ont
- ⚠️ **NE SUPPRIME RIEN** - C'est juste une vérification

### Comment l'exécuter :

1. **Ouvrez le fichier** `supprimer_cours_guide_complet_EXECUTE.sql`

2. **Repérez l'ÉTAPE 1** (lignes ~11 à ~50)
   ```sql
   -- ÉTAPE 1 : Vérifier quels cours seront supprimés
   SELECT 
     id,
     title,
     category,
     ...
   ```

3. **Copiez UNIQUEMENT la section ÉTAPE 1** :
   - Sélectionnez depuis `-- ÉTAPE 1` jusqu'à `ORDER BY title;`
   - **N'incluez PAS** la section ÉTAPE 2 (celle avec les `/*`)

4. **Ouvrez Supabase Dashboard** → **SQL Editor**

5. **Collez le code** dans l'éditeur SQL

6. **Cliquez sur "Run"** (ou appuyez sur Ctrl+Enter)

### Résultat attendu :
Vous verrez un tableau avec tous les cours qui seront supprimés, comme :
```
| id                                    | title                          | category | nb_inscriptions | nb_lecons |
|---------------------------------------|--------------------------------|----------|-----------------|-----------|
| 550e8400-e29b-41d4-a716-446655440001  | CAF - Guide Complet            | ...      | 0               | 9         |
| ...                                   | ...                            | ...      | ...             | ...       |
```

### ⚠️ Vérification importante :
- ✅ Vérifiez que ce sont bien les 27 cours que vous voulez supprimer
- ✅ Vérifiez qu'il n'y a pas de cours que vous voulez garder
- ✅ Notez les IDs si vous voulez les référencer plus tard

---

## 🗑️ ÉTAPE 2 : Exécuter la Suppression

### ⚠️ ATTENTION : Cette étape supprime définitivement les cours !

### Ce que fait l'ÉTAPE 2 :
- 🗑️ Supprime les inscriptions (enrollments)
- 🗑️ Supprime les progressions (progress)
- 🗑️ Supprime les certificats (certificates)
- 🗑️ Supprime les leçons (lessons)
- 🗑️ Supprime les cours eux-mêmes

### Comment décommenter et exécuter :

#### Option 1 : Dans l'éditeur de texte

1. **Ouvrez le fichier** `supprimer_cours_guide_complet_EXECUTE.sql`

2. **Trouvez la section ÉTAPE 2** qui commence par :
   ```sql
   /*
   -- =====================================================
   -- ÉTAPE 2 : SUPPRESSION EN CASCADE (décommentez pour exécuter)
   -- =====================================================
   ```

3. **Supprimez `/*`** au début de l'ÉTAPE 2 (ligne ~53)
   - Cherchez : `/*`
   - Supprimez-le ou mettez `--` devant : `-- /*`

4. **Trouvez la fin de l'ÉTAPE 2** qui se termine par :
   ```sql
   'Guide Complet CAF - Allocation Familiales'
   )) as total_guides_complet_restants;
   */
   ```

5. **Supprimez `*/`** à la fin (dernière ligne du fichier)
   - Cherchez : `*/`
   - Supprimez-le ou mettez `--` devant : `-- */`

#### Option 2 : Dans Supabase SQL Editor

1. **Copiez tout le contenu** du fichier SQL

2. **Collez-le** dans Supabase SQL Editor

3. **Trouvez les lignes** qui contiennent :
   - `/*` (début du commentaire, ligne ~53)
   - `*/` (fin du commentaire, dernière ligne)

4. **Supprimez ces deux lignes** ou mettez `--` devant :
   - Changez `/*` en `-- /*` (ou supprimez la ligne)
   - Changez `*/` en `-- */` (ou supprimez la ligne)

### Exécution :

1. **Vérifiez** que tous les `DELETE` ne sont plus dans des commentaires

2. **Cliquez sur "Run"** (ou Ctrl+Enter)

3. **Attendez** que l'exécution se termine

### Résultat attendu :
Vous verrez un message de confirmation :
```
| resultat                              | cours_restants | total_guides_complet_restants |
|---------------------------------------|----------------|-------------------------------|
| Cours spécifiques supprimés avec succès | 0             | [nombre]                      |
```

---

## 📊 Exemple Visuel

### Avant de décommenter (ÉTAPE 2 commentée) :
```sql
-- ÉTAPE 1 : Vérifier quels cours seront supprimés
SELECT ... -- ✅ Cette partie s'exécute

/*
-- ÉTAPE 2 : SUPPRESSION EN CASCADE
DELETE FROM enrollments ... -- ⏸️ Cette partie NE s'exécute PAS (commentée)
DELETE FROM progress ...
...
*/
```

### Après décommenter (ÉTAPE 2 active) :
```sql
-- ÉTAPE 1 : Vérifier quels cours seront supprimés
SELECT ... -- ✅ Cette partie s'exécute

-- ÉTAPE 2 : SUPPRESSION EN CASCADE
DELETE FROM enrollments ... -- ✅ Cette partie s'exécute maintenant !
DELETE FROM progress ...
...
-- Plus de */ à la fin
```

---

## ✅ Checklist Complète

- [ ] J'ai exécuté l'ÉTAPE 1 et vérifié les résultats
- [ ] Les cours affichés sont bien ceux que je veux supprimer
- [ ] J'ai décommenté l'ÉTAPE 2 (supprimé `/*` et `*/`)
- [ ] Je suis prêt à supprimer définitivement ces cours
- [ ] J'ai cliqué sur "Run" pour exécuter l'ÉTAPE 2
- [ ] J'ai vérifié le message de confirmation

---

## 🆘 En Cas de Problème

### Si vous avez supprimé les mauvais cours :
- **Il n'y a pas de retour en arrière automatique**
- Vous devrez les recréer manuellement ou restaurer depuis une sauvegarde

### Si vous avez une erreur :
- Vérifiez que les titres de cours sont exactement identiques (espaces, majuscules, etc.)
- Vérifiez que vous avez les permissions nécessaires dans Supabase

---

## 💡 Conseil Pro

**Faites une sauvegarde avant !**

Dans Supabase SQL Editor, vous pouvez exporter les données avant :
```sql
-- Sauvegarder les cours avant suppression
SELECT * FROM courses 
WHERE title IN ('CAF - Guide Complet', ...)
ORDER BY title;
```

Copiez le résultat pour référence future si besoin.
