# ✅ Instructions : Suppression Automatique des 27 Cours

## 🎯 Ce que fait ce script

Le fichier `supprimer_cours_27_AUTOMATIQUE.sql` va automatiquement supprimer **UNIQUEMENT** les 27 cours spécifiques que vous avez listés, **PAS tous les "Guide Complet"**.

## 📋 Liste des cours qui seront supprimés

1. Naturalisation - Guide Complet
2. Renouvellement - Guide Complet
3. Permis de Séjour - Guide Complet
4. Urssaf - Guide Complet
5. RSI - Guide Complet
6. Carte Vitale - Guide Complet
7. Visa - Guide Complet
8. Démarches Préfecture - Guide Complet
9. Impôts - Guide Complet
10. LMD - Guide Complet
11. Passeport - Guide Complet
12. Mutuelle - Guide Complet
13. Sécurité Sociale - Guide Complet
14. CAF - Guide Complet
15. Assurance - Guide Complet
16. Banque - Guide Complet
17. Apprentissage - Guide Complet
18. Prise de Notes - Guide Complet
19. Méthodologie - Guide Complet
20. Bibliographie - Guide Complet
21. Recherche - Guide Complet
22. Thèse - Guide Complet
23. Mémoire - Guide Complet
24. Équivalences - Guide Complet
25. Bourses - Guide Complet
26. Système Éducatif - Guide Complet
27. Guide Complet CAF - Allocation Familiales

**Total : 27 cours**

---

## 🚀 Comment l'exécuter (2 minutes)

### Étape 1 : Ouvrir le fichier
1. Ouvrez le fichier `supprimer_cours_27_AUTOMATIQUE.sql`
2. Sélectionnez **tout le contenu** (Ctrl+A)
3. Copiez (Ctrl+C)

### Étape 2 : Aller dans Supabase
1. Ouvrez votre **Supabase Dashboard**
2. Allez dans **SQL Editor** (dans le menu de gauche)

### Étape 3 : Exécuter
1. Collez le script (Ctrl+V) dans l'éditeur SQL
2. **Lisez rapidement** ce qui sera supprimé (la première partie du script)
3. Cliquez sur le bouton **"Run"** (ou appuyez sur Ctrl+Enter)

### Étape 4 : Vérifier
Le script va :
- ✅ D'abord **afficher** les cours qui seront supprimés (pour vérification)
- ✅ Ensuite **supprimer automatiquement** :
  - Toutes les inscriptions (enrollments)
  - Toutes les progressions (progress)
  - Tous les certificats (certificates)
  - Toutes les leçons (lessons)
  - Les 27 cours eux-mêmes
- ✅ Afficher un message de confirmation

---

## ✅ Résultat Attendu

À la fin, vous verrez un message comme :
```
| resultat                                   | cours_restants_de_la_liste | total_autres_guides_complet_restants |
|--------------------------------------------|----------------------------|--------------------------------------|
| ✅ Cours spécifiques supprimés avec succès | 0                          | [nombre]                              |
```

- `cours_restants_de_la_liste` = **0** (tous les 27 cours supprimés ✅)
- `total_autres_guides_complet_restants` = nombre d'autres cours "Guide Complet" qui restent (ceux que vous voulez garder ✅)

---

## ⚠️ Important

- **Cette opération est irréversible** ⚠️
- Les 27 cours et **toutes leurs données** (leçons, inscriptions, etc.) seront définitivement supprimés
- Les **autres cours "Guide Complet"** (ceux pas dans la liste) **ne seront PAS supprimés** ✅

---

## 🆘 En cas de problème

Si vous avez une erreur :
- Vérifiez que vous avez les **permissions** nécessaires dans Supabase
- Vérifiez que les **titres exacts** des cours correspondent (espaces, majuscules, etc.)

---

## ✨ C'est tout !

1. Copiez le fichier `supprimer_cours_27_AUTOMATIQUE.sql`
2. Collez dans Supabase SQL Editor
3. Cliquez "Run"
4. **C'est fait !** ✅
