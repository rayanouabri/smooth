# 🚀 Exécuter la Mise à Jour des Images - MAINTENANT

## ✅ Vous avez configuré les 3 étapes, maintenant testons !

---

## 🎯 Méthode 1 : Via Supabase Dashboard (Le Plus Simple)

### 1. Aller dans Supabase Dashboard

1. Ouvrez https://supabase.com/dashboard/project/xkecqmsgvjjtujvlotpm
2. Allez dans **Edge Functions** (menu de gauche)
3. Cliquez sur **`update-course-images`**

### 2. Invoker la fonction

1. Cliquez sur le bouton **"Invoke"** (ou "Test")
2. Cliquez sur **"Invoke function"**
3. Attendez quelques secondes
4. Vérifiez le résultat dans la console

**Résultat attendu** :
```json
{
  "success": true,
  "message": "✅ X cours mis à jour avec succès",
  "updated": X,
  "total": Y,
  "stats": { ... }
}
```

### 3. Vérifier dans la table

1. Allez dans **Table Editor** → **courses**
2. Vérifiez que les `thumbnail_url` contiennent maintenant `unsplash`
3. Filtrez par catégorie pour vérifier que les images correspondent

---

## 🎯 Méthode 2 : Via Script Node.js (Alternative)

Si vous avez un fichier `.env.local` avec vos variables :

```bash
node test-update-images.js
```

**Note** : Installez `dotenv` si nécessaire :
```bash
npm install dotenv
```

---

## 🎯 Méthode 3 : Via cURL (Tester depuis Terminal)

```bash
curl -X POST "https://xkecqmsgvjjtujvlotpm.supabase.co/functions/v1/update-course-images" \
  -H "Authorization: Bearer VOTRE_ANON_KEY_ICI" \
  -H "Content-Type: application/json"
```

Remplacez `VOTRE_ANON_KEY_ICI` par votre vraie clé anon.

---

## 🎯 Méthode 4 : Depuis le Code (Frontend)

Dans votre application React, vous pouvez créer un bouton admin :

```javascript
const handleUpdateImages = async () => {
  const { data, error } = await supabase.functions.invoke('update-course-images');
  
  if (data?.success) {
    alert(`✅ ${data.updated} cours mis à jour !`);
  } else {
    alert('❌ Erreur: ' + (error?.message || data?.error));
  }
};
```

---

## ✅ Vérification Rapide

Après avoir exécuté la fonction :

1. **Table Editor** → **courses**
2. Vérifiez que les cours ont maintenant des `thumbnail_url` avec `unsplash`
3. Exemples de catégories :
   - `integration_administrative` → Image bureaux/administration
   - `preparation_academique` → Image université/livres
   - `culture_codes_sociaux` → Image culture française
   - etc.

---

## 🆘 Si ça ne marche pas

### Erreur : "Function not found"
- Vérifiez que la fonction est bien déployée dans Supabase
- Vérifiez que le nom est exactement `update-course-images`

### Erreur : "Unauthorized"
- Vérifiez que vous utilisez la bonne clé anon
- Vérifiez que la fonction a bien accès aux variables d'environnement

### Rien ne se passe
- Vérifiez les logs dans Supabase Dashboard → Edge Functions → Logs
- Vérifiez que les cours ont `is_published = true`

---

## 🎉 C'est fait !

Une fois la fonction exécutée avec succès, tous les cours auront des images par catégorie automatiquement ! 🎊
