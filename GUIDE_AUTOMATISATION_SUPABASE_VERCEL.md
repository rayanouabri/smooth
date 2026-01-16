# 🚀 Guide d'Automatisation - Supabase & Vercel

## 📋 Scripts SQL Prêts à Exécuter

### 1. Mettre à jour les images des cours par catégorie

**Fichier** : `mettre_a_jour_images_cours.sql`

**Action** : Assigne automatiquement des images Unsplash pertinentes à tous les cours selon leur catégorie.

**Comment l'utiliser** :
1. Ouvrez Supabase Dashboard → **SQL Editor**
2. Ouvrez le fichier `mettre_a_jour_images_cours.sql`
3. Copiez tout le contenu
4. Collez dans SQL Editor
5. Cliquez sur **"Run"**

**Résultat** : Tous les cours auront des images appropriées selon leur catégorie.

---

### 2. Supprimer des cours spécifiques

**Fichier** : `supprimer_cours_27_AUTOMATIQUE.sql`

**Action** : Supprime automatiquement 27 cours spécifiques et toutes leurs données liées.

**Comment l'utiliser** :
1. Supabase Dashboard → **SQL Editor**
2. Ouvrez `supprimer_cours_27_AUTOMATIQUE.sql`
3. Copiez-collez dans SQL Editor
4. Cliquez sur **"Run"**

---

## 🔧 Scripts Node.js pour Automatisation

### 3. Mettre à jour les images via API (à venir)

Pour automatiser via Node.js, vous pouvez utiliser le client Supabase :

```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(url, key);

// Mettre à jour les images
const { data, error } = await supabase
  .from('courses')
  .update({ thumbnail_url: 'https://...' })
  .eq('category', 'integration_administrative');
```

---

## 📱 Corrections Mobile Appliquées

### Meta Tags Améliorés

Le fichier `index.html` a été mis à jour avec :
- ✅ Viewport optimisé pour mobile
- ✅ Meta tags pour apps mobiles
- ✅ Prévention du zoom incontrôlé
- ✅ Support iOS Safari

### CSS Responsive

Le fichier `src/index.css` a été amélioré avec :
- ✅ Prévention du débordement horizontal
- ✅ Images responsives (max-width: 100%)
- ✅ Containers adaptatifs
- ✅ Support multi-écrans

### Layout Responsive

Le fichier `src/pages/Layout.jsx` a été optimisé :
- ✅ Navigation mobile améliorée
- ✅ Menu hamburger fonctionnel
- ✅ Pas de débordement horizontal

---

## 🎯 Tâches Automatisées Disponibles

### ✅ Déjà Faites Automatiquement

1. **Images des cours** → Script SQL prêt (`mettre_a_jour_images_cours.sql`)
2. **Suppression de cours** → Script SQL prêt (`supprimer_cours_27_AUTOMATIQUE.sql`)
3. **Responsive mobile** → Corrections CSS appliquées
4. **Meta tags mobile** → Ajoutés dans `index.html`

### 🔄 Pour Automatiser Davantage

Pour créer des scripts d'automatisation plus avancés, vous pouvez :

1. **Utiliser Supabase Edge Functions** :
   - Créer des fonctions serverless pour les tâches récurrentes
   - Déclencher automatiquement lors d'événements (webhooks)

2. **Utiliser Vercel Cron Jobs** :
   - Exécuter des tâches périodiques (mise à jour quotidienne, etc.)
   - Configurer dans `vercel.json`

3. **GitHub Actions** :
   - Automatiser les déploiements
   - Exécuter des scripts de vérification

---

## 📝 Checklist de Vérification

### Responsive Mobile

- [x] Meta viewport configuré
- [x] CSS responsive appliqué
- [x] Pas de débordement horizontal
- [x] Navigation mobile fonctionnelle
- [x] Images responsives

### Images des Cours

- [ ] Script SQL exécuté dans Supabase
- [ ] Tous les cours ont des images
- [ ] Images correspondent aux catégories

### Automatisation

- [x] Scripts SQL prêts
- [ ] Scripts Node.js créés (si nécessaire)
- [ ] Documentation à jour

---

## 🆘 Support

Pour toute question ou problème :
1. Vérifiez les scripts SQL dans Supabase SQL Editor
2. Consultez les logs dans Supabase Dashboard → Logs
3. Vérifiez les erreurs dans la console du navigateur (F12)
