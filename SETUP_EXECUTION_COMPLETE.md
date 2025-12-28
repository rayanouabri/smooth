# 🚀 Exécution Automatique Complète - Guide Simplifié

Solution la plus simple pour exécuter automatiquement votre fichier SQL sur Supabase.

---

## 🎯 Solution en 3 Étapes

### Étape 1 : Diviser le fichier SQL
### Étape 2 : Configurer les accès Supabase
### Étape 3 : Exécuter automatiquement tous les lots

---

## 📋 Étape 1 : Installer les Prérequis

### Installer Python (si pas déjà fait)
- Windows : https://www.python.org/downloads/
- Mac : `brew install python3`
- Linux : `sudo apt-get install python3`

### Installer psql (Client PostgreSQL)

**Windows :**
- Téléchargez PostgreSQL : https://www.postgresql.org/download/windows/
- Ou via Chocolatey : `choco install postgresql`

**Mac :**
```bash
brew install postgresql
```

**Linux :**
```bash
sudo apt-get install postgresql-client
```

**Vérifier l'installation :**
```bash
psql --version
```

---

## ✂️ Étape 2 : Diviser votre Fichier SQL

Placez votre fichier SQL dans le dossier du projet, puis :

```bash
python split_sql_file.py votre_fichier.sql
```

Cela va créer un dossier `batches/` avec tous les lots.

---

## 🔐 Étape 3 : Récupérer vos Identifiants Supabase

1. Allez sur **https://supabase.com/dashboard**
2. Sélectionnez votre projet
3. Allez dans **Settings** → **Database**
4. Trouvez la section **Connection string**
5. Notez ces informations :
   - **Host** : `db.xxxxx.supabase.co`
   - **Database** : `postgres`
   - **Port** : `5432`
   - **User** : `postgres`
   - **Password** : Cliquez sur "Reveal" pour voir le mot de passe

---

## ⚡ Étape 4 : Exécuter Automatiquement TOUS les Lots

### Option A : Mode Interactif (Le Plus Simple)

```bash
python execute_all_batches.py batches
```

Le script va vous demander :
- Host Supabase
- Password
- Database (appuyez Entrée pour 'postgres')
- User (appuyez Entrée pour 'postgres')
- Port (appuyez Entrée pour '5432')

### Option B : Mode Automatique (Une Ligne)

```bash
python execute_all_batches.py batches --host=db.xxxxx.supabase.co --password=VOTRE_PASSWORD
```

**Remplacez :**
- `db.xxxxx.supabase.co` par votre host
- `VOTRE_PASSWORD` par votre password

---

## 🎯 Exemple Complet

```bash
# 1. Diviser le fichier
python split_sql_file.py cours_complet.sql

# 2. Exécuter tous les lots automatiquement
python execute_all_batches.py batches --host=db.abcdefgh.supabase.co --password=monpassword123
```

**C'est tout !** Le script va :
- ✅ Se connecter à Supabase
- ✅ Exécuter tous les lots un par un
- ✅ Afficher la progression
- ✅ Vous donner un résumé à la fin

---

## 🔒 Sécurité

⚠️ **Ne partagez JAMAIS vos identifiants Supabase publiquement !**

Pour plus de sécurité, vous pouvez utiliser une variable d'environnement :

**Windows (PowerShell) :**
```powershell
$env:SUPABASE_PASSWORD="votre_password"
python execute_all_batches.py batches --host=db.xxxxx.supabase.co --password=$env:SUPABASE_PASSWORD
```

**Mac/Linux :**
```bash
export SUPABASE_PASSWORD="votre_password"
python execute_all_batches.py batches --host=db.xxxxx.supabase.co --password=$SUPABASE_PASSWORD
```

---

## 📊 Ce que vous verrez

```
📦 5 lots trouvés à exécuter
🔗 Connexion à : db.xxxxx.supabase.co
⏳ Délai entre chaque lot : 2 secondes

============================================================
📄 Lot 1/5 : lot_01_cours_1_a_5.sql
============================================================
🔄 Exécution de : lot_01_cours_1_a_5.sql
✅ Succès : lot_01_cours_1_a_5.sql

⏳ Attente de 2 secondes avant le lot suivant...

============================================================
📄 Lot 2/5 : lot_02_cours_6_a_10.sql
============================================================
...

============================================================
📊 RÉSUMÉ
============================================================
✅ Succès : 5/5
❌ Erreurs : 0/5

🎉 Tous les lots ont été exécutés avec succès !
```

---

## 🆘 Si vous avez des Erreurs

### Erreur : "psql n'est pas reconnu"

**Solution :** Installez PostgreSQL (voir Étape 1)

### Erreur : "Connection refused"

**Solution :** Vérifiez que :
- Le host est correct
- Le password est correct
- Votre IP n'est pas bloquée (Settings → Database → Connection Pooling)

### Erreur : "Query is too large"

**Solution :** Réduisez la taille des lots :
```bash
python split_sql_file.py votre_fichier.sql --batch-size=3
```

---

## ✅ Checklist

- [ ] Python installé
- [ ] psql installé (`psql --version` fonctionne)
- [ ] Fichier SQL divisé en lots (`batches/` existe)
- [ ] Identifiants Supabase récupérés
- [ ] Script exécuté avec succès
- [ ] Vérifié dans Supabase que tous les cours sont créés

---

## 🎉 Résultat Final

Une fois terminé, vous devriez avoir :
- ✅ Tous vos cours dans la table `courses`
- ✅ Toutes vos leçons dans la table `lessons`
- ✅ Prêt à être utilisés sur votre plateforme !

**Vérification rapide :**
```sql
SELECT COUNT(*) FROM courses;
SELECT COUNT(*) FROM lessons;
```

---

**C'est vraiment simple ! Lancez les commandes et c'est automatique ! 🚀**

