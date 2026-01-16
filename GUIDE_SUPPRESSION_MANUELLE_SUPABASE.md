# 📖 Guide : Supprimer des Cours Manuellement dans Supabase (Sans Code)

## 🎯 Objectif

Supprimer les 27 cours spécifiques via l'interface graphique de Supabase Table Editor, sans écrire de SQL.

---

## ⚠️ IMPORTANT : Ordre de Suppression

À cause des contraintes de clés étrangères, vous **DEVEZ** supprimer dans cet ordre :

1. **Enrollments** (inscriptions)
2. **Progress** (progressions)
3. **Certificates** (certificats)
4. **Lessons** (leçons)
5. **Courses** (cours) - En dernier !

Si vous essayez de supprimer un cours directement, vous aurez une erreur car il a des inscriptions/leçons liées.

---

## 📋 ÉTAPE PAR ÉTAPE

### ÉTAPE 1 : Identifier les IDs des Cours à Supprimer

1. **Ouvrez Supabase Dashboard** → **Table Editor** → **courses**

2. **Filtrez les cours "Guide Complet"** :
   - Cliquez sur le bouton **"Filter"** en haut à droite du tableau
   - Dans le filtre :
     - **Column** : `title`
     - **Operator** : `like` (ou `contains`)
     - **Value** : `Guide Complet`
   - Cliquez sur **"Apply"**

3. **Trouvez les cours spécifiques** dans la liste filtrée :
   - Cherchez les 27 cours de votre liste :
     - CAF - Guide Complet
     - Assurance - Guide Complet
     - Banque - Guide Complet
     - etc.

4. **Notez les IDs** de chaque cours :
   - Cochez les cases à gauche de chaque cours
   - **Copiez les IDs** (colonne `id`) ou gardez les cases cochées

---

### ÉTAPE 2 : Supprimer les Enrollments (Inscriptions)

1. **Allez dans** **Table Editor** → **enrollments**

2. **Filtrez par course_id** :
   - Cliquez sur **"Filter"**
   - **Column** : `course_id`
   - **Operator** : `in`
   - **Value** : Collez les IDs des cours (séparés par des virgules)
   - Exemple : `550e8400-e29b-41d4-a716-446655440001, 123e4567-e89b-12d3-a456-426614174000`

3. **Sélectionnez tous les résultats** :
   - Cliquez sur la case en haut à gauche pour tout sélectionner

4. **Supprimez** :
   - Cliquez sur le bouton **"Delete X rows"** en haut
   - Confirmez la suppression

---

### ÉTAPE 3 : Supprimer les Progress

1. **Allez dans** **Table Editor** → **progress**

2. **Filtrez par course_id** :
   - Même processus que pour enrollments
   - **Column** : `course_id`
   - **Operator** : `in`
   - **Value** : Mêmes IDs des cours

3. **Sélectionnez et supprimez** tous les résultats

---

### ÉTAPE 4 : Supprimer les Certificates

1. **Allez dans** **Table Editor** → **certificates**

2. **Filtrez par course_id** :
   - Même processus
   - **Column** : `course_id`
   - **Operator** : `in`
   - **Value** : Mêmes IDs des cours

3. **Sélectionnez et supprimez** tous les résultats

---

### ÉTAPE 5 : Supprimer les Lessons (Leçons)

1. **Allez dans** **Table Editor** → **lessons**

2. **Filtrez par course_id** :
   - Même processus
   - **Column** : `course_id`
   - **Operator** : `in`
   - **Value** : Mêmes IDs des cours

3. **Sélectionnez et supprimez** tous les résultats

⚠️ **Note** : S'il y a beaucoup de leçons, cela peut prendre du temps.

---

### ÉTAPE 6 : Supprimer les Courses (Cours)

1. **Retournez dans** **Table Editor** → **courses**

2. **Filtrez les cours à supprimer** :
   - Option A : **Par titre** (recommandé)
     - **Filter** → **Column** : `title`
     - **Operator** : `in`
     - **Value** : Listez tous les titres séparés par des virgules :
       ```
       CAF - Guide Complet, Assurance - Guide Complet, Banque - Guide Complet, ...
       ```
   
   - Option B : **Par IDs** (si vous avez les IDs)
     - **Filter** → **Column** : `id`
     - **Operator** : `in`
     - **Value** : Collez les IDs

3. **Sélectionnez tous les cours filtrés** :
   - Cliquez sur la case en haut à gauche pour tout sélectionner
   - OU cochez individuellement chaque cours

4. **Supprimez** :
   - Cliquez sur **"Delete X rows"** en haut
   - Confirmez la suppression

5. **Vérifiez** :
   - Les cours devraient avoir disparu
   - Faites un nouveau filtre pour vérifier qu'il ne reste plus aucun cours "Guide Complet" de votre liste

---

## 🎯 Méthode Alternative : Cours par Cours

Si vous préférez supprimer cours par cours (plus sûr mais plus long) :

### Pour chaque cours :

1. **Trouvez le cours** dans Table Editor → courses

2. **Notez son ID** (colonne `id`)

3. **Supprimez dans l'ordre** :
   - **enrollments** : Filter par `course_id` = cet ID → Delete
   - **progress** : Filter par `course_id` = cet ID → Delete
   - **certificates** : Filter par `course_id` = cet ID → Delete
   - **lessons** : Filter par `course_id` = cet ID → Delete
   - **courses** : Sélectionnez ce cours → Delete

4. **Répétez** pour chaque cours

---

## 💡 Astuces

### Astuce 1 : Utiliser la recherche

Dans Table Editor, vous pouvez utiliser la barre de recherche en haut pour chercher :
- Tapez le titre du cours (ex: "CAF - Guide Complet")
- Les résultats filtrés s'affichent

### Astuce 2 : Vérifier avant de supprimer

Avant de supprimer un cours, vous pouvez vérifier combien d'enregistrements sont liés :
- Dans `courses`, regardez la colonne (si elle existe) ou
- Allez dans `enrollments` et filtrez par `course_id` pour voir combien il y en a

### Astuce 3 : Export avant suppression (Backup)

1. Dans Table Editor → courses
2. Filtrez les cours à supprimer
3. Cliquez sur **"Export"** (bouton en haut)
4. Sauvegardez le fichier CSV au cas où vous auriez besoin de restaurer

---

## ⚠️ Gestion des Erreurs

### Erreur : "Foreign key constraint violation"

**Cause** : Vous essayez de supprimer un cours qui a encore des enregistrements liés.

**Solution** :
- Vérifiez que vous avez bien supprimé dans l'ordre :
  1. Enrollments
  2. Progress
  3. Certificates
  4. Lessons
  5. Courses (en dernier)
- Allez dans chaque table et vérifiez qu'il ne reste plus rien lié à ce cours

### Erreur : "No rows selected"

**Cause** : Le filtre ne correspond à aucun enregistrement.

**Solution** :
- Vérifiez l'orthographe exacte du titre ou de l'ID
- Les filtres sont sensibles à la casse (majuscules/minuscules)
- Essayez avec un filtre plus large (ex: `contains` au lieu de `equals`)

---

## ✅ Checklist Finale

Après avoir supprimé tous les cours :

- [ ] Aucun enrollment lié aux cours supprimés
- [ ] Aucun progress lié aux cours supprimés
- [ ] Aucun certificate lié aux cours supprimés
- [ ] Aucune lesson liée aux cours supprimés
- [ ] Les 27 cours spécifiques ont été supprimés
- [ ] Les autres cours "Guide Complet" sont toujours présents

---

## 🆘 Besoin d'Aide ?

Si vous rencontrez des difficultés :

1. **Vérifiez l'ordre de suppression** (enrollments → progress → certificates → lessons → courses)
2. **Utilisez les filtres** pour trouver les enregistrements liés
3. **Faites une sauvegarde** avant de supprimer (Export CSV)

---

## 📝 Résumé Rapide

1. **Courses** → Trouvez les cours à supprimer (Filter par titre ou ID)
2. **Notez les IDs** ou gardez les cases cochées
3. **Supprimez dans l'ordre** :
   - Enrollments (Filter par `course_id`)
   - Progress (Filter par `course_id`)
   - Certificates (Filter par `course_id`)
   - Lessons (Filter par `course_id`)
   - Courses (Filter par titre ou ID)
4. **Vérifiez** que tout est supprimé

**C'est tout !** ✅
