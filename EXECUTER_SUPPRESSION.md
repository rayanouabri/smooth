# 🗑️ Exécuter la Suppression des Cours "Guide Complet"

## ⚡ Méthode Rapide : SQL Editor (Recommandé)

1. **Ouvrez Supabase Dashboard** → **SQL Editor**
2. **Copiez-collez** le contenu de `supprimer_cours_guide_complet_EXECUTE.sql`
3. **Cliquez sur "Run"** (ou Ctrl+Enter)
4. **C'est fait !** ✅

Le script va automatiquement :
- Supprimer les enrollments
- Supprimer les progress
- Supprimer les certificates
- Supprimer les lessons
- Supprimer les courses
- Afficher un résumé

---

## 🔧 Méthode Alternative : Script Node.js

Si vous préférez utiliser un script Node.js :

### Prérequis

1. Créez un fichier `.env.local` à la racine du projet avec :
```env
VITE_SUPABASE_URL=votre_url_supabase
SUPABASE_SERVICE_ROLE_KEY=votre_service_role_key
```

**⚠️ IMPORTANT** : Utilisez le **Service Role Key** (pas l'anon key) pour les suppressions.

### Exécution

```bash
node delete-guide-complet-courses.js
```

Le script va :
- Lister tous les cours "Guide Complet"
- Les supprimer un par un avec toutes leurs dépendances
- Afficher un résumé

---

## 📋 Vérification

Après la suppression, vérifiez dans Supabase :

```sql
SELECT COUNT(*) FROM courses WHERE title LIKE '%Guide Complet%';
```

Devrait retourner `0`.

---

## ⚠️ Attention

- Cette opération est **irréversible**
- Tous les enrollments, progress, certificates et lessons liés seront supprimés
- Faites une sauvegarde si nécessaire
