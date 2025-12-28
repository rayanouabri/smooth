# 📦 Guide : Exécuter des Requêtes SQL Volumineuses

Si vous obtenez l'erreur "Query is too large to be run via the SQL Editor", voici plusieurs solutions.

---

## 🎯 Solution 1 : Diviser le SQL en Petits Lots (Recommandé)

### Méthode A : Diviser manuellement

1. **Ouvrez votre fichier SQL** dans un éditeur de texte
2. **Divisez en sections** : Par exemple, 5-10 cours à la fois
3. **Copiez et exécutez chaque section** séparément dans Supabase SQL Editor

```sql
-- ==========================================
-- LOT 1 : Cours 1 à 5
-- ==========================================

-- COURS 1
INSERT INTO courses (...) VALUES (...);

-- LEÇONS pour COURS 1
INSERT INTO lessons (...) VALUES (...);
INSERT INTO lessons (...) VALUES (...);

-- COURS 2
INSERT INTO courses (...) VALUES (...);
...

-- ==========================================
-- LOT 2 : Cours 6 à 10
-- ==========================================
...
```

### Méthode B : Script Python pour diviser automatiquement

Créez un fichier `split_sql.py` :

```python
import re

def split_sql_file(input_file, output_dir, courses_per_batch=5):
    """
    Divise un gros fichier SQL en plusieurs petits fichiers
    """
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Trouve tous les blocs cours (INSERT INTO courses)
    course_pattern = r'-- COURS \d+.*?(?=-- COURS \d+|$)'
    courses = re.findall(course_pattern, content, re.DOTALL)
    
    total_courses = len(courses)
    batch_num = 1
    
    for i in range(0, total_courses, courses_per_batch):
        batch = courses[i:i+courses_per_batch]
        output_file = f"{output_dir}/batch_{batch_num}.sql"
        
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(f"-- ==========================================\n")
            f.write(f"-- LOT {batch_num} : Cours {i+1} à {min(i+courses_per_batch, total_courses)}\n")
            f.write(f"-- ==========================================\n\n")
            f.write('\n\n'.join(batch))
        
        print(f"✅ Créé : {output_file}")
        batch_num += 1
    
    print(f"\n🎉 {total_courses} cours divisés en {batch_num-1} fichiers")

# Utilisation
split_sql_file('cours_complet.sql', 'batches', courses_per_batch=5)
```

Exécutez :
```bash
python split_sql.py
```

---

## 🔌 Solution 2 : Utiliser psql (Client PostgreSQL)

### Étape 1 : Installer psql

**Windows :**
- Téléchargez PostgreSQL : https://www.postgresql.org/download/windows/
- Ou installez via Chocolatey : `choco install postgresql`

**Mac :**
```bash
brew install postgresql
```

**Linux :**
```bash
sudo apt-get install postgresql-client
```

### Étape 2 : Récupérer les identifiants de connexion

1. Allez sur votre projet Supabase
2. **Settings** → **Database**
3. Trouvez la section **Connection string**
4. Notez :
   - **Host**
   - **Database**
   - **Port**
   - **User**
   - **Password**

### Étape 3 : Connecter et exécuter

```bash
# Méthode 1 : Avec mot de passe en ligne de commande
psql "postgresql://postgres:[VOTRE_PASSWORD]@db.[VOTRE_PROJECT_REF].supabase.co:5432/postgres" -f cours_complet.sql

# Méthode 2 : Avec variable d'environnement (plus sûr)
export PGPASSWORD='[VOTRE_PASSWORD]'
psql -h db.[VOTRE_PROJECT_REF].supabase.co -U postgres -d postgres -f cours_complet.sql

# Méthode 3 : Avec fichier .pgpass (recommandé pour la sécurité)
# Créez ~/.pgpass (Linux/Mac) ou %APPDATA%\postgresql\pgpass.conf (Windows)
# Format : hostname:port:database:username:password
echo "db.[VOTRE_PROJECT_REF].supabase.co:5432:postgres:postgres:[VOTRE_PASSWORD]" > ~/.pgpass
chmod 600 ~/.pgpass
psql -h db.[VOTRE_PROJECT_REF].supabase.co -U postgres -d postgres -f cours_complet.sql
```

---

## 🐍 Solution 3 : Utiliser un Script Python avec Supabase

Créez un fichier `import_courses.py` :

```python
from supabase import create_client, Client
import re

# Configuration Supabase
SUPABASE_URL = "https://[VOTRE_PROJECT_REF].supabase.co"
SUPABASE_KEY = "[VOTRE_SERVICE_ROLE_KEY]"  # Service Role Key (pas l'anon key)

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

def parse_sql_file(filename):
    """
    Parse un fichier SQL et extrait les INSERT statements
    """
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Trouve tous les INSERT INTO courses
    course_pattern = r"INSERT INTO courses[^;]+;"
    courses = re.findall(course_pattern, content, re.DOTALL)
    
    # Trouve tous les INSERT INTO lessons
    lesson_pattern = r"INSERT INTO lessons[^;]+;"
    lessons = re.findall(lesson_pattern, content, re.DOTALL)
    
    return courses, lessons

def execute_sql_batch(sql_statements, batch_size=10):
    """
    Exécute des statements SQL par lots
    """
    for i in range(0, len(sql_statements), batch_size):
        batch = sql_statements[i:i+batch_size]
        batch_sql = '\n'.join(batch)
        
        try:
            result = supabase.rpc('execute_sql', {'sql_query': batch_sql})
            print(f"✅ Lot {i//batch_size + 1} exécuté ({len(batch)} statements)")
        except Exception as e:
            print(f"❌ Erreur lot {i//batch_size + 1}: {e}")
            # Continue avec le lot suivant

# Utilisation
courses, lessons = parse_sql_file('cours_complet.sql')
print(f"📚 {len(courses)} cours trouvés")
print(f"📝 {len(lessons)} leçons trouvées")

# Exécute les cours
print("\n🔄 Insertion des cours...")
execute_sql_batch(courses, batch_size=5)

# Exécute les leçons
print("\n🔄 Insertion des leçons...")
execute_sql_batch(lessons, batch_size=20)
```

**Note :** Cette méthode nécessite de créer une fonction Supabase Edge Function pour exécuter le SQL.

---

## 🔧 Solution 4 : Utiliser l'API Supabase directement

Créez un script Node.js ou Python qui insère les données via l'API :

```python
from supabase import create_client, Client
import json

SUPABASE_URL = "https://[VOTRE_PROJECT_REF].supabase.co"
SUPABASE_KEY = "[VOTRE_SERVICE_ROLE_KEY]"

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Exemple : Insérer un cours
course_data = {
    "id": "uuid-here",
    "title": "CAF - Guide Complet",
    "slug": "caf-guide-complet",
    "description": "...",
    # ... autres champs
}

try:
    result = supabase.table('courses').insert(course_data).execute()
    print(f"✅ Cours inséré : {result.data[0]['title']}")
except Exception as e:
    print(f"❌ Erreur : {e}")
```

**Avantage :** Pas de limite de taille, mais plus de travail pour parser le SQL.

---

## 📊 Solution 5 : Utiliser Supabase CLI

### Installation

```bash
npm install -g supabase
```

### Connexion

```bash
supabase login
supabase link --project-ref [VOTRE_PROJECT_REF]
```

### Exécution

```bash
# Exécuter directement depuis un fichier
supabase db execute -f cours_complet.sql

# Ou via stdin
cat cours_complet.sql | supabase db execute
```

---

## ✅ Solution Recommandée : Diviser le SQL

Pour une solution rapide et simple :

1. **Ouvrez votre fichier SQL** généré
2. **Repérez les commentaires** `-- COURS 1`, `-- COURS 2`, etc.
3. **Copiez par lots de 5-10 cours** dans Supabase SQL Editor
4. **Exécutez chaque lot** séparément

### Exemple de division :

```sql
-- ==========================================
-- LOT 1 : Cours 1 à 5
-- ==========================================

-- COURS 1
INSERT INTO courses (...) VALUES (...);
-- [toutes les leçons du cours 1]

-- COURS 2
INSERT INTO courses (...) VALUES (...);
-- [toutes les leçons du cours 2]

-- ... jusqu'au cours 5

-- ==========================================
-- LOT 2 : Cours 6 à 10
-- ==========================================
-- ... etc
```

---

## 🎯 Astuce : Modifier le Prompt pour Générer des Lots

Vous pouvez aussi demander à l'IA de générer le SQL directement par lots :

```
[Votre prompt habituel]

IMPORTANT : Divise le SQL généré en plusieurs fichiers ou sections :
- Chaque section doit contenir maximum 5 cours avec leurs leçons
- Sépare chaque section avec un commentaire : -- ==========================================
- Numérote les sections : -- LOT 1, -- LOT 2, etc.
```

---

## 📝 Checklist

Avant d'exécuter un gros fichier SQL :

- [ ] Vérifier la taille du fichier (si > 1MB, diviser)
- [ ] Tester sur 1-2 cours d'abord
- [ ] Vérifier que les UUIDs sont uniques
- [ ] Vérifier l'échappement SQL (apostrophes doublées)
- [ ] Sauvegarder une copie du fichier original
- [ ] Exécuter par petits lots si possible

---

## 🆘 En cas d'erreur

Si vous avez une erreur lors de l'exécution :

1. **Vérifiez les logs** dans Supabase Dashboard → Logs
2. **Testez avec UN seul cours** d'abord
3. **Vérifiez les contraintes** (UUIDs dupliqués, clés étrangères)
4. **Utilisez** `ON CONFLICT DO NOTHING` pour éviter les doublons

---

**Besoin d'aide ?** Testez d'abord avec la Solution 1 (division manuelle), c'est la plus simple ! 🚀

