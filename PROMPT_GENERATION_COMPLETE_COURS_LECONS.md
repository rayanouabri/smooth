# 🤖 Prompt Complet : Génération de Cours + Leçons en SQL

Ce prompt génère **AUTOMATIQUEMENT** tous les cours ET toutes leurs leçons en SQL prêt à exécuter, en une seule fois.

---

## 📋 PROMPT À COPIER-COLLER :

```
Tu es un expert en génération de contenu éducatif pour une plateforme d'apprentissage en ligne pour étudiants internationaux en France.

Génère du SQL INSERT complet pour créer des COURS avec TOUTES leurs LEÇONS associées.

## STRUCTURE DE LA TABLE `courses`

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Auto | Génère un UUID v4 unique pour chaque cours |
| `title` | TEXT | ✅ Oui | Titre complet du cours (ex: "CAF - Guide Complet") |
| `slug` | TEXT | ✅ Oui | URL-friendly (ex: "caf-guide-complet") - Pas d'espaces, tirets uniquement, minuscules |
| `description` | TEXT | ✅ Oui | Description complète et détaillée (150-300 mots) |
| `short_description` | TEXT | ✅ Oui | Description courte pour les cartes (max 100 caractères) |
| `category` | TEXT | ✅ Oui | Catégorie (voir liste ci-dessous) |
| `level` | TEXT | ✅ Oui | Niveau : 'debutant', 'intermediaire', ou 'avance' |
| `language` | TEXT | Non | Niveau langue (A1, A2, B1, B2, C1, C2) ou 'fr' |
| `duration_hours` | INTEGER | Non | Durée totale estimée (somme des durées des leçons) |
| `price` | DECIMAL(10,2) | Non | Prix (0 = gratuit, >0 = premium) |
| `thumbnail_url` | TEXT | Non | URL image Unsplash ou autre |
| `rating` | DECIMAL(3,2) | Non | Note sur 5 (entre 3.5 et 5.0) |
| `reviews_count` | INTEGER | Non | Nombre d'avis (entre 0 et 1000) |
| `enrolled_count` | INTEGER | Non | Nombre d'inscrits (entre 0 et 5000) |
| `objectives` | JSONB | Non | Array JSON des objectifs (ex: '["Objectif 1", "Objectif 2"]'::jsonb) |
| `prerequisites` | JSONB | Non | Array JSON des prérequis ou '[]'::jsonb |
| `is_published` | BOOLEAN | Non | true pour publié, false pour brouillon |
| `created_date` | TIMESTAMPTZ | Auto | Laisse la valeur par défaut |
| `updated_date` | TIMESTAMPTZ | Auto | Laisse la valeur par défaut |

## STRUCTURE DE LA TABLE `lessons`

| Champ | Type | Obligatoire | Description |
|-------|------|-------------|-------------|
| `id` | UUID | Auto | Génère un UUID v4 unique pour chaque leçon |
| `course_id` | UUID | ✅ Oui | UUID du cours parent (celui que tu viens de créer) |
| `title` | TEXT | ✅ Oui | Titre clair de la leçon (max 150 caractères) |
 | `content` | TEXT | Non | Contenu en Markdown TRÈS DÉTAILLÉ (MINIMUM 1000 mots) |
| `order` | INTEGER | Non | Numéro d'ordre (1, 2, 3, 4...) - Commence à 1 pour chaque cours |
 | `duration_minutes` | INTEGER | Non | Durée estimée en minutes (entre 30 et 90) |
| `video_url` | TEXT | Non | Laisse NULL |
| `resources` | JSONB | Non | Array JSON ou '[]'::jsonb |
| `created_date` | TIMESTAMPTZ | Auto | Laisse la valeur par défaut |
| `updated_date` | TIMESTAMPTZ | Auto | Laisse la valeur par défaut |

## CATÉGORIES DISPONIBLES

Utilise EXACTEMENT ces valeurs pour `category` :
- 'integration_administrative' : CAF, CPAM, Préfecture, Titre de séjour
- 'logement' : Recherche logement, Contrat, Garantie, Assurances
- 'preparation_academique' : Système éducatif, Examens, Cours particuliers
- 'insertion_professionnelle' : CV, Entretiens, Alternance, Jobs
- 'culture_codes_sociaux' : Codes français, Traditions, Vie quotidienne
- 'formations_professionnelles' : Formations spécialisées
- 'sante' : Santé, Mutuelle, CPAM
- 'transport' : Transports, Permis, Navigo
- 'budget_finances' : Banque, Budget, Économies

## FORMAT DU CONTENU DES LEÇONS (Markdown)

Chaque leçon doit avoir un contenu TRÈS COMPLET et STRUCTURÉ :

```markdown
# Titre de la Leçon

## Pourquoi c'est important ?

Contexte et importance pour les étudiants internationaux.

## Ce que vous allez apprendre

- Point clé 1
- Point clé 2
- Point clé 3

## Introduction

Texte d'introduction détaillé...

## Étapes détaillées

1. **Étape 1** : Description très détaillée avec exemples
   - Sous-étape
   - Précaution importante
   
2. **Étape 2** : Description très détaillée

## Documents nécessaires / Informations importantes

- Document 1 : explication
- Document 2 : explication

## 💡 Conseils pratiques

Conseils concrets et actionnables.

## ⚠️ Pièges à éviter

Erreurs courantes et comment les éviter.

## 📚 Ressources officielles

- 🔗 [Site officiel de l'organisme](https://exemple.gouv.fr) - Portail principal
- 🔗 [Guide officiel PDF](https://exemple.gouv.fr/guide.pdf) - Documentation complète
- 🔗 [Simulateur en ligne](https://exemple.gouv.fr/simulateur) - Calculez vos droits
- 🔗 [FAQ officielle](https://exemple.gouv.fr/faq) - Questions fréquentes
- 🔗 [Contact et assistance](https://exemple.gouv.fr/contact) - Aide et support
- 🔗 [Formulaire en ligne](https://exemple.gouv.fr/formulaire) - Faire une demande
- 🔗 [Espace personnel](https://exemple.gouv.fr/mon-compte) - Suivre vos dossiers

## Résumé

Résumé complet des points essentiels à retenir.
```

## RÈGLES STRICTES

1. **Génération UUID** : Génère un UUID v4 unique pour chaque cours et chaque leçon (format : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')

2. **Échappement SQL** : DOUBLE toutes les apostrophes dans les textes :
   - ❌ 'l'exemple' 
   - ✅ 'l''exemple'

3. **Format SQL** : Utilise EXACTEMENT ce format :

```sql
-- COURS 1
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'UUID-COURS-1',
  'Titre du Cours',
  'slug-du-cours',
  'Description complète et détaillée du cours (150-300 mots). Explique ce que les étudiants vont apprendre, pourquoi c''est important, et comment cela les aidera dans leur intégration en France.',
  'Description courte pour les cartes',
  'category_name',
  'debutant',
  'fr',
  DUREE_TOTALE_HEURES,
  0,
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=1',
  '["Objectif 1", "Objectif 2", "Objectif 3", "Objectif 4"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5,
  250,
  1500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 1
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'UUID-LECON-1',
  'UUID-COURS-1',
   'Titre Leçon 1',
   '# Titre Leçon 1
 
 Contenu Markdown très détaillé (MINIMUM 1000 mots) avec beaucoup de liens vers sites officiels...
 ',
   1,
   45,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'UUID-LECON-2',
  'UUID-COURS-1',
   'Titre Leçon 2',
   '# Titre Leçon 2
 
 Contenu Markdown très détaillé (MINIMUM 1000 mots) avec beaucoup de liens vers sites officiels...
 ',
   2,
   60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- COURS 2
INSERT INTO courses (...) VALUES (...) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 2
INSERT INTO lessons (...) VALUES (...) ON CONFLICT (id) DO NOTHING;
...
```

4. **Ordre logique** : 
   - Les cours doivent être dans l'ordre fourni
   - Les leçons d'un cours doivent être dans un ordre logique (ordre = 1, 2, 3...)
   - Réinitialise l'ordre à 1 pour chaque nouveau cours

5. **Durées** :
   - Estime `duration_minutes` entre 30 et 90 minutes par leçon (30 min = 30, 1h30 = 90)
   - Calcule `duration_hours` = somme des minutes / 60 (arrondi au supérieur)

6. **Slugs** : 
   - Pas d'espaces, uniquement minuscules
   - Remplace espaces et caractères spéciaux par tirets
   - Exemple : "Guide CAF Complet" → "guide-caf-complet"

7. **Descriptions** :
   - `short_description` : Max 100 caractères, accrocheur
   - `description` : 150-300 mots, complet et engageant

8. **Objectifs** : Génère 4 objectifs pertinents au format JSON array

9. **Qualité du contenu des leçons** :
   - MINIMUM 1000 mots par leçon (très important !)
   - Très détaillé et actionnable
   - Adapté aux étudiants internationaux
   - Langue française claire et accessible
   - Exemples concrets et réalistes
   - **BEAUCOUP de redirections vers les sites officiels** : CAF, CPAM, Préfecture, sites gouvernementaux, etc.
   - Ne pas hésiter à citer les organisations d'État (CAF, CPAM, Ministère de l'Intérieur, etc.)
   - Design soigné avec emojis appropriés (🏛️ 📋 ✅ ⚠️ 💡 🔗)
   - Utilise des sections bien structurées avec sous-sections

10. **Prix** :
   - TOUJOURS mettre `price = 0` (gratuit) - Ne pas demander ou varier le prix
   - L'utilisateur modifiera lui-même si nécessaire

## FORMAT D'ENTRÉE QUE JE VAIS TE DONNER

Quand je te fournis une structure comme :

```
 CATÉGORIE: Integration Administrative
   COURS: Guide CAF
     Niveau: intermediaire
     Leçons:
      1. Introduction à la CAF et aux APL
      2. Vérifier votre éligibilité aux APL
      3. Documents à préparer pour votre demande
      4. Créer votre compte CAF en ligne
      5. Remplir votre demande d'APL étape par étape
      6. Suivre et gérer votre dossier CAF

   COURS: Guide CPAM
     Niveau: intermediaire
     Leçons:
      1. Introduction à la CPAM
      2. S'inscrire à la Sécurité Sociale
      3. Choisir sa mutuelle complémentaire
      4. Comprendre le remboursement des soins
```

## CE QUE TU DOIS GÉNÉRER

Pour CHAQUE cours, génère :
1. UN INSERT INTO courses avec TOUS les champs remplis
2. TOUS les INSERT INTO lessons pour ce cours
3. Continue avec le cours suivant

Génère TOUT le SQL d'un coup, prêt à exécuter dans Supabase SQL Editor.

## EXEMPLE COMPLET ATTENDU

```sql
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'a1b2c3d4-e5f6-4789-a012-3456789abcde',
  'CAF - Guide Complet',
  'caf-guide-complet',
  'Apprenez tout sur la CAF (Caisse d''Allocations Familiales) en France. Ce guide complet vous accompagne dans toutes vos démarches pour obtenir les APL (Aides Personnalisées au Logement), comprendre votre éligibilité, préparer votre dossier, créer votre compte en ligne et suivre votre demande. Idéal pour les étudiants internationaux qui cherchent à réduire leurs frais de logement.',
  'Guide pas à pas pour obtenir vos aides au logement CAF',
  'integration_administrative',
  'intermediaire',
  'fr',
  3,
  0,
   'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&sig=1',
   '["Comprendre le système CAF et les APL", "Vérifier votre éligibilité", "Préparer votre dossier complet", "Suivre votre demande efficacement"]'::jsonb,
   '[]'::jsonb,
   TRUE,
   4.6,
   320,
   2100
 ) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

 INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
 (
   'f1e2d3c4-b5a6-4789-0123-456789abcdef',
   'a1b2c3d4-e5f6-4789-a012-3456789abcde',
   'Introduction à la CAF et aux APL',
   '# Introduction à la CAF et aux APL

## Pourquoi c''est important ?

La CAF (Caisse d''Allocations Familiales) est un organisme public français qui verse des aides financières aux personnes qui remplissent certaines conditions. Pour les étudiants internationaux, l''aide la plus importante est l''APL (Aide Personnalisée au Logement), qui peut réduire significativement vos frais de logement mensuels.

Les APL peuvent représenter jusqu''à 200€ par mois d''aide, ce qui est un montant considérable pour un budget étudiant. Cette aide est versée directement à votre propriétaire ou à vous-même, selon votre situation.

## Ce que vous allez apprendre

- Qu''est-ce que la CAF et quelles aides propose-t-elle
- Les différents types d''aides au logement disponibles
- Pourquoi l''APL est essentielle pour les étudiants
- Les conditions générales d''éligibilité
- Comment calculer approximativement votre aide

## Introduction

La CAF gère plusieurs types d''aides sociales en France, mais pour les étudiants internationaux, l''aide la plus pertinente est l''APL (Aide Personnalisée au Logement). Cette aide est destinée à réduire le coût de votre loyer et de vos charges.

🔗 [Site officiel de la CAF](https://www.caf.fr) - Accédez à toutes les informations officielles

## Qu''est-ce que la CAF ?

La CAF est un organisme public qui dépend de la branche Famille de la Sécurité Sociale. Elle gère :
- Les aides au logement (APL, ALF, ALS)
- Les allocations familiales
- Le RSA (Revenu de Solidarité Active)
- Le Complément de Libre Choix d''Activité

🔗 [Présentation officielle de la CAF](https://www.caf.fr/caf-de-paris/je-suis/etudiant) - Section dédiée aux étudiants

## Les aides au logement

Il existe trois types d''aides au logement :
1. **APL (Aide Personnalisée au Logement)** : Pour les logements conventionnés (résidences étudiantes, foyers, logements sociaux)
2. **ALF (Allocation de Logement Familiale)** : Pour les logements non conventionnés si vous avez des charges de famille
3. **ALS (Allocation de Logement Sociale)** : Pour les logements non conventionnés sans charges de famille

🔗 [Guide officiel des aides au logement](https://www.caf.fr/aides-et-services/aides-au-logement) - Documentation complète de la CAF

## Pourquoi l''APL est importante pour vous

En tant qu''étudiant international :
- Votre budget est souvent limité
- Le logement représente une grande partie de vos dépenses
- L''APL peut réduire votre loyer de 50€ à 200€ par mois
- C''est une aide qui ne nécessite pas d''avoir la nationalité française

## Conditions générales d''éligibilité

Pour être éligible aux APL, vous devez généralement :
- Avoir un logement conventionné CAF (résidence étudiante, foyer, logement social)
- Être locataire ou sous-locataire
- Avoir des ressources inférieures à un certain plafond
- Résider en France de manière stable

🔗 [Conditions d''éligibilité officielles](https://www.caf.fr/aides-et-services/aides-au-logement/l-aide-personnalisee-au-logement-apl) - Page officielle sur les conditions APL

## 💡 Conseils pratiques

- Vérifiez avant de signer votre bail si le logement est conventionné CAF
- Les résidences étudiantes (CROUS, privées) sont souvent éligibles
- Vous pouvez faire une simulation sur le site caf.fr avant de faire votre demande

🔗 [Simulateur d''aides CAF](https://www.caf.fr/simulateur) - Calculez votre aide potentielle
🔗 [Liste des logements conventionnés](https://www.caf.fr/aides-et-services/aides-au-logement/les-logements-conventionnes) - Vérifiez si votre logement est éligible

## ⚠️ Pièges à éviter

- Ne confondez pas APL, ALF et ALS : ce sont des aides différentes
- L''APL n''est pas automatique : vous devez faire une demande
- Certains logements privés ne sont pas éligibles à l''APL

## 📚 Ressources officielles

- 🔗 [Site officiel CAF](https://www.caf.fr) - Portail principal
- 🔗 [Créer votre compte CAF](https://www.caf.fr/actualites/2021/creer-votre-compte-ou-vous-identifier) - Inscription en ligne
- 🔗 [Simulateur d''aides](https://www.caf.fr/simulateur) - Calculez votre aide
- 🔗 [FAQ officielle CAF](https://www.caf.fr/aides-et-services/aides-au-logement/faq-apl) - Questions fréquentes
- 🔗 [Carte des CAF par département](https://www.caf.fr/caf-de-paris/contacts) - Trouvez votre CAF locale
- 🔗 [Espace personnel CAF](https://www.caf.fr/mon-compte) - Suivez vos dossiers en ligne
- 🔗 [Formulaire de demande APL](https://www.caf.fr/aides-et-services/aides-au-logement/comprendre-les-aides-au-logement) - Guide de la demande

## Résumé

La CAF propose des aides au logement, notamment l''APL, qui peut réduire significativement vos frais de logement. Cette aide est accessible aux étudiants internationaux sous certaines conditions. Dans les prochaines leçons, vous apprendrez à vérifier votre éligibilité, préparer votre dossier et faire votre demande.

🔗 Retrouvez toutes les informations sur [www.caf.fr](https://www.caf.fr)
',
   1,
   45,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

[... autres leçons ...]
```

## INSTRUCTIONS FINALES

1. Quand je te donne une structure avec catégories > cours > leçons, génère TOUT le SQL
2. Pour chaque cours, crée d''abord le INSERT courses, puis TOUTES ses leçons
3. Utilise des UUIDs uniques pour chaque élément
4. Double TOUTES les apostrophes
5. Génère du contenu TRÈS DÉTAILLÉ (MINIMUM 1000 mots par leçon)
6. Inclus BEAUCOUP de liens vers sites officiels (CAF, CPAM, Préfecture, sites gouvernementaux)
7. TOUJOURS mettre price = 0 (gratuit) - ne pas demander ou varier
8. Réponds UNIQUEMENT avec le code SQL, sans explications
9. Sépare chaque cours par une ligne vide avec un commentaire -- COURS X
10. Inclus au moins 5-10 liens vers sites officiels par leçon

PRÊT ? Envoie-moi maintenant ta structure (catégories > cours > leçons) et je génère tout le SQL !
```

---

## 📝 COMMENT UTILISER CE PROMPT :

### Étape 1 : Préparer votre structure

Organisez vos cours dans ce format :

```
 CATÉGORIE: integration_administrative
   COURS: Guide CAF
     Niveau: intermediaire
     Leçons:
      1. Introduction à la CAF
      2. Vérifier l'éligibilité
      3. Documents nécessaires
      4. Créer son compte
      5. Remplir la demande
      6. Suivre son dossier

   COURS: Guide CPAM
     Niveau: intermediaire
     Leçons:
      1. Introduction CPAM
      2. S'inscrire
      3. Choisir mutuelle
      4. Comprendre remboursements

 CATÉGORIE: logement
   COURS: Trouver un logement étudiant
     Niveau: debutant
     Leçons:
      1. Où chercher
      2. Types de logements
      3. Comprendre le bail
      4. Garanties et cautions
```

### Étape 2 : Utiliser le prompt

1. Ouvrez ChatGPT ou Claude
2. Copiez le prompt complet ci-dessus
3. Ajoutez votre structure à la fin

### Étape 3 : Copier et exécuter le SQL

1. L'IA génère TOUT le SQL d'un coup
2. Copiez-le dans Supabase SQL Editor
3. Exécutez-le
4. Vérifiez dans Table Editor que tout est créé

---

## ✅ AVANTAGES DE CE PROMPT :

- ✅ Génère TOUT en une seule fois (cours + leçons)
- ✅ Contenu très détaillé (MINIMUM 1000 mots par leçon)
- ✅ Nombreuses références vers sites officiels (CAF, CPAM, Préfecture, etc.)
- ✅ Durée réaliste (30 min à 1h30 par leçon)
- ✅ Tout gratuit par défaut (price = 0)
- ✅ Design soigné avec emojis et structure claire
- ✅ SQL prêt à exécuter directement
- ✅ Format cohérent et professionnel
- ✅ Gestion automatique des UUIDs
- ✅ Échappement SQL correct

---

**Prêt à générer tous vos cours et leçons automatiquement ! 🚀**

