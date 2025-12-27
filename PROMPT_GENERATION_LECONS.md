# 🤖 Prompt pour Génération Automatique de Leçons en SQL

Copiez-collez ce prompt dans ChatGPT/Claude pour générer automatiquement vos leçons au format SQL.

---

## 📋 PROMPT À COPIER-COLLER :

```
Tu es un expert en génération de contenu éducatif pour une plateforme d'apprentissage en ligne pour étudiants internationaux en France.

Génère des INSERT SQL pour la table `lessons` avec les spécifications suivantes :

## STRUCTURE DE LA TABLE `lessons`

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Auto | Génère un UUID v4 unique pour chaque leçon |
| `course_id` | UUID | ✅ Oui | UUID du cours parent (je te fournirai l'UUID) |
| `title` | TEXT | ✅ Oui | Titre clair et descriptif de la leçon (max 200 caractères) |
| `content` | TEXT | Non | Contenu en Markdown (très détaillé et structuré) |
| `order` | INTEGER | Non | Numéro d'ordre (1, 2, 3, 4...) - Commence à 1 |
| `duration_minutes` | INTEGER | Non | Durée estimée en minutes (entre 10 et 60) |
| `video_url` | TEXT | Non | Laisse NULL si pas de vidéo |
| `resources` | JSONB | Non | Array JSON d'objets ressources ou '[]'::jsonb si vide |
| `created_date` | TIMESTAMPTZ | Auto | Laisse la valeur par défaut |
| `updated_date` | TIMESTAMPTZ | Auto | Laisse la valeur par défaut |

## FORMAT DU CONTENU MARKDOWN

Le contenu doit être en Markdown avec cette structure :

```markdown
# Titre Principal de la Leçon

## Section 1 : Introduction / Contexte

Texte d'introduction qui explique l'importance et le contexte.

## Section 2 : [Sous-titre pertinent]

### Sous-section si nécessaire

- Liste à puces pour les points clés
- Utilise des listes numérotées pour les étapes
- Utilise du **gras** pour mettre en valeur

## Section 3 : Étapes Pratiques

1. **Étape 1** : Description détaillée
   - Sous-points si nécessaire
   
2. **Étape 2** : Description détaillée

## Section 4 : Points Importants / Conseils

> 💡 Conseil : Texte de conseil
> ⚠️ Attention : Mise en garde si nécessaire

## Section 5 : Ressources / Liens

- [Texte du lien](https://exemple.com)
- Documentation officielle
- Fichiers à télécharger

## Résumé

Résumé des points clés à retenir.
```

## RÈGLES STRICTES À RESPECTER

1. **UUID Génération** : Génère un UUID v4 unique pour chaque leçon (format : `'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'`)
2. **Échappement SQL** : Double toutes les apostrophes simples dans le texte (ex: `l''important` au lieu de `l'important`)
3. **Format SQL** : Utilise exactement ce format pour chaque INSERT :

```sql
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'UUID-GENERE-ICI',
  'UUID-COUR-PARENT-ICI',
  'Titre de la leçon',
  '# Titre de la leçon

Contenu en Markdown avec apostrophes doublées (l''exemple)...

## Section 1
...
',
  NUMERO_ORDRE,
  DUREE_MINUTES,
  NULL,
  '[]'::jsonb
);
```

4. **Ordre** : Commence à `order = 1` et incrémente pour chaque leçon suivante
5. **Durée** : Estime une durée réaliste entre 10 et 60 minutes selon la complexité
6. **Qualité du contenu** :
   - Contenu détaillé et éducatif (minimum 500 mots par leçon)
   - Instructions claires et actionnables
   - Adapté aux étudiants internationaux
   - Langue française claire et accessible
   - Inclure des exemples concrets
   - Utiliser des sections structurées
7. **Ressources** : Si tu dois ajouter des ressources, utilise ce format :
   ```sql
   resources = '[
     {
       "type": "pdf",
       "title": "Guide officiel CAF",
       "url": "https://exemple.com/guide.pdf"
     },
     {
       "type": "link",
       "title": "Site officiel CAF",
       "url": "https://www.caf.fr"
     }
   ]'::jsonb
   ```

## EXEMPLE COMPLET

```sql
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  'COURSE-UUID-HERE',
  'Introduction à la demande CAF',
  '# Introduction à la demande CAF

## Pourquoi c''est important ?

La CAF (Caisse d''Allocations Familiales) vous permet d''obtenir des aides au logement essentielles pour votre budget en France.

## Ce que vous allez apprendre

- Les conditions d''éligibilité aux APL
- Les documents nécessaires
- Comment remplir votre demande
- Le suivi de votre dossier

## Les étapes principales

1. **Vérifier votre éligibilité** : Assurez-vous de remplir tous les critères
2. **Préparer vos documents** : Passeport, contrat de location, etc.
3. **Créer votre compte** : Sur le site caf.fr
4. **Remplir le formulaire** : En ligne ou en version papier

## Documents nécessaires

- Passeport ou carte de séjour
- Contrat de location ou justificatif de domicile
- Relevé d''identité bancaire (RIB)
- Attestation de scolarité ou contrat de travail

## ⚠️ Attention

N''oubliez pas de signaler tout changement de situation dans les 30 jours.

## Ressources utiles

- [Site officiel CAF](https://www.caf.fr)
- [Simulateur d''aides](https://www.caf.fr/simulateur)

## Résumé

Les APL peuvent représenter jusqu''à 200€ par mois d''aide. N''hésitez pas à faire votre demande dès votre installation en France.
',
  1,
  25,
  NULL,
  '[]'::jsonb
);
```

## INSTRUCTIONS POUR TOI

Quand je te fournis :
- L''UUID du cours parent (`course_id`)
- Le sujet/thème du cours
- La liste des leçons à générer (ou le nombre de leçons souhaitées)

Tu dois générer :
- Une série d''INSERT SQL complets et prêts à exécuter
- Un contenu riche et éducatif pour chaque leçon
- Des titres clairs et descriptifs
- Un ordre logique de progression
- Des durées réalistes

Réponds UNIQUEMENT avec le code SQL, sans explications supplémentaires, sauf si je demande des clarifications.

---

PRÊT ? Donne-moi maintenant :
1. L''UUID du cours parent
2. Le sujet/thème du cours
3. La liste des leçons à créer (ou dis-moi combien de leçons tu veux)
```

---

## 📝 COMMENT UTILISER CE PROMPT :

### Étape 1 : Préparer vos informations

Avant d'utiliser le prompt, rassemblez :
- **UUID du cours** : L'identifiant du cours auquel vous voulez ajouter des leçons
- **Sujet du cours** : Le thème principal (ex: "Demande CAF", "Visa étudiant", "Trouver un logement")
- **Liste des leçons** : Les titres ou sujets des leçons que vous voulez créer

### Étape 2 : Trouver l'UUID du cours

```sql
-- Dans Supabase SQL Editor, exécutez cette requête :
SELECT id, title, slug 
FROM courses 
WHERE slug = 'votre-slug-de-cours' 
   OR title ILIKE '%votre titre%';

-- Copiez l'UUID retourné
```

### Étape 3 : Utiliser le prompt

1. Ouvrez ChatGPT ou Claude
2. Copiez le prompt ci-dessus
3. À la fin du prompt, ajoutez vos informations :

```
UUID du cours : '12345678-1234-1234-1234-123456789012'
Sujet : Demande CAF (Aides au logement)
Leçons à créer :
1. Introduction à la CAF
2. Vérifier son éligibilité aux APL
3. Documents nécessaires
4. Créer son compte CAF
5. Remplir le formulaire de demande
6. Suivre son dossier
```

### Étape 4 : Copier le SQL généré

L'IA générera directement le code SQL que vous pourrez :
1. Copier-coller dans Supabase SQL Editor
2. Exécuter immédiatement
3. Vérifier dans Table Editor

---

## ✅ VÉRIFICATIONS AVANT D'EXÉCUTER

Avant d'exécuter le SQL généré, vérifiez :

1. **UUIDs valides** : Format correct (8-4-4-4-12 caractères hexadécimaux)
2. **Apostrophes doublées** : Toutes les apostrophes doivent être doublées (`l''exemple`)
3. **Ordre séquentiel** : Les valeurs `order` doivent être 1, 2, 3, 4...
4. **course_id correct** : Vérifiez que l'UUID du cours existe
5. **Format JSONB** : Les ressources doivent être au format JSON valide

---

## 🔧 EXEMPLE D'UTILISATION COMPLET

### Scénario : Ajouter des leçons pour un cours "Guide CAF"

**1. Trouver l'UUID du cours :**
```sql
SELECT id FROM courses WHERE slug = 'guide-caf-complet';
-- Résultat : '7fe7066b-abbe-5914-9f89-93157bf0d2a7'
```

**2. Prompt à donner à l'IA :**
```
[COLLER LE PROMPT COMPLET CI-DESSUS]

UUID du cours : '7fe7066b-abbe-5914-9f89-93157bf0d2a7'
Sujet : Guide complet CAF - Aides au logement pour étudiants
Nombre de leçons : 6
Sujets des leçons :
1. Introduction à la CAF et aux APL
2. Vérifier votre éligibilité
3. Documents à préparer
4. Créer votre compte CAF en ligne
5. Remplir votre demande d'APL
6. Suivre et gérer votre dossier
```

**3. L'IA génère le SQL, vous le copiez dans Supabase**

**4. Résultat :** 6 nouvelles leçons ajoutées à votre cours !

---

## 💡 CONSEILS POUR UNE MEILLEURE GÉNÉRATION

- **Soyez précis** : Plus vous donnez de détails sur le contenu souhaité, meilleur sera le résultat
- **Spécifiez le niveau** : Mentionnez si c'est pour débutants, intermédiaires ou avancés
- **Ajoutez des exemples** : Donnez des exemples de contenu que vous voulez voir
- **Demandez des ressources** : Précisez si vous voulez des liens, PDFs, etc.
- **Vérifiez après génération** : Lisez rapidement le contenu généré avant d'exécuter

---

## 🐛 SI L'IA NE GÉNÈRE PAS LE BON FORMAT

Si le SQL généré n'est pas correct, ajoutez à votre prompt :

```
IMPORTANT : 
- Génère UNIQUEMENT le code SQL INSERT
- Pas d'explications avant ou après le code
- Double bien toutes les apostrophes
- Utilise exactement le format fourni dans l'exemple
- Chaque INSERT doit être séparé par une ligne vide
```

---

**Bon travail avec la génération automatique de vos leçons ! 🚀**

