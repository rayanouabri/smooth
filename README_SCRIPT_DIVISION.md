# 🚀 Utilisation du Script de Division SQL

Guide rapide pour utiliser le script Python qui divise automatiquement votre fichier SQL.

---

## 📋 Prérequis

- Python 3.6 ou supérieur installé
- Votre fichier SQL volumineux (ex: `cours_complet.sql`)

---

## ⚡ Utilisation Rapide

### Étape 1 : Vérifier Python

Ouvrez un terminal et vérifiez que Python est installé :

```bash
python --version
# ou
python3 --version
```

Si Python n'est pas installé : https://www.python.org/downloads/

### Étape 2 : Lancer le Script

**Windows (PowerShell ou CMD) :**
```bash
python split_sql_file.py cours_complet.sql
```

**Mac/Linux :**
```bash
python3 split_sql_file.py cours_complet.sql
```

### Étape 3 : Résultat

Le script va :
1. ✅ Lire votre fichier SQL
2. ✅ Détecter automatiquement les cours
3. ✅ Créer un dossier `batches/` avec tous les lots
4. ✅ Générer des fichiers : `lot_01_cours_1_a_5.sql`, `lot_02_cours_6_a_10.sql`, etc.

---

## 🎯 Options Avancées

### Changer le nombre de cours par lot

Par défaut : 5 cours par lot

```bash
# 3 cours par lot (si les fichiers sont encore trop gros)
python split_sql_file.py cours_complet.sql --batch-size=3

# 10 cours par lot (si vous voulez des lots plus gros)
python split_sql_file.py cours_complet.sql --batch-size=10
```

### Changer le dossier de sortie

Par défaut : dossier `batches/`

```bash
python split_sql_file.py cours_complet.sql --output-dir=sql_lots
```

### Combinaison

```bash
python split_sql_file.py cours_complet.sql --batch-size=3 --output-dir=small_batches
```

---

## 📁 Structure des Fichiers Générés

Après exécution, vous aurez :

```
batches/
├── lot_01_cours_1_a_5.sql
├── lot_02_cours_6_a_10.sql
├── lot_03_cours_11_a_15.sql
└── ...
```

Chaque fichier contient :
- Un en-tête avec le numéro du lot
- Les cours avec toutes leurs leçons
- Prêt à copier-coller dans Supabase SQL Editor

---

## 🔄 Exécuter les Lots

### Option 1 : Manuellement dans Supabase (Recommandé)

1. Ouvrez Supabase SQL Editor
2. Ouvrez le fichier `lot_01_cours_1_a_5.sql` dans un éditeur de texte
3. Copiez tout le contenu
4. Collez dans Supabase SQL Editor
5. Cliquez sur **Run**
6. Répétez pour les autres lots

### Option 2 : Avec psql (Plus rapide)

Si vous avez installé PostgreSQL :

```bash
# Se connecter à Supabase
psql "postgresql://postgres:[VOTRE_PASSWORD]@db.[VOTRE_PROJECT_REF].supabase.co:5432/postgres"

# Dans psql, exécuter chaque lot :
\i batches/lot_01_cours_1_a_5.sql
\i batches/lot_02_cours_6_a_10.sql
# etc.
```

**Trouver vos credentials** :
- Supabase Dashboard → Settings → Database
- Connection string

---

## 🆘 Résolution de Problèmes

### Erreur : "Fichier non trouvé"

**Solution** : Vérifiez que vous êtes dans le bon dossier :
```bash
# Windows
cd C:\Users\rayan\OneDrive\Bureau\smooth-1

# Mac/Linux
cd ~/path/to/smooth-1
```

### Erreur : "Python n'est pas reconnu"

**Solution** : Utilisez `python3` au lieu de `python` :
```bash
python3 split_sql_file.py cours_complet.sql
```

### Le script ne trouve pas les cours

**Solution** : Le script détecte automatiquement :
- Les commentaires `-- COURS X`
- Les `INSERT INTO courses`

Si ça ne fonctionne pas, vérifiez que votre fichier SQL contient bien ces patterns.

---

## 📊 Exemple de Sortie

```
📂 Lecture du fichier : cours_complet.sql
✅ Fichier lu : 2,500,000 caractères, 40,000 lignes
📁 Dossier de sortie : C:\Users\...\smooth-1\batches
📚 Méthode 1 : 25 cours trouvés avec commentaires '-- COURS'

🔄 Division en lots de 5 cours...
✅ Créé : lot_01_cours_1_a_5.sql (125,000 octets, 8,500 lignes)
✅ Créé : lot_02_cours_6_a_10.sql (130,000 octets, 8,700 lignes)
✅ Créé : lot_03_cours_11_a_15.sql (128,000 octets, 8,600 lignes)
✅ Créé : lot_04_cours_16_a_20.sql (132,000 octets, 8,800 lignes)
✅ Créé : lot_05_cours_21_a_25.sql (125,000 octets, 8,400 lignes)

🎉 25 cours divisés en 5 fichiers
📁 Tous les fichiers sont dans : C:\Users\...\smooth-1\batches

💡 Prochaine étape : Exécutez chaque fichier dans Supabase SQL Editor, un par un
   Commencez par : lot_01_cours_1_a_5.sql
```

---

## ✅ Checklist

- [ ] Python installé et vérifié
- [ ] Fichier SQL à portée de main
- [ ] Script exécuté avec succès
- [ ] Dossier `batches/` créé avec les fichiers
- [ ] Premier lot testé dans Supabase
- [ ] Tous les lots exécutés un par un

---

**Besoin d'aide ?** Le script affiche des messages clairs pour vous guider ! 🚀

