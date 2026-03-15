export default [
  {
    course_id: "3893fa8d-2b7c-4b95-85a9-207da4ca19fe",
    title: "Structure de l'université française : Licence, Master, Doctorat",
    lesson_order: 1, order: 1, duration_minutes: 17,
    video_url: "https://www.youtube.com/watch?v=aA1bB2cC3dD4",
    resources: JSON.stringify([
      {"title":"Campus France – Système LMD France","url":"https://www.campusfrance.org","type":"link"},
      {"title":"Service-Public – Études universitaires France","url":"https://www.service-public.fr","type":"link"},
      {"title":"Étudiant.gouv – S'orienter à l'université","url":"https://www.etudiant.gouv.fr","type":"link"},
      {"title":"Onisep – Parcours Licence Master Doctorat","url":"https://www.onisep.fr","type":"link"},
      {"title":"CPU – Universités françaises en chiffres","url":"https://www.cpu.fr","type":"link"},
      {"title":"Légifrance – Code de l'enseignement LMD","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"Parcoursup – Accès formations universitaires","url":"https://www.parcoursup.gouv.fr","type":"link"},
      {"title":"CNOUS – Vie étudiante France","url":"https://www.cnous.fr","type":"link"}
    ]),
    content: `# Structure de l'université française : Licence, Master, Doctorat

Comprendre l'organisation du système universitaire français est la première étape indispensable pour tout étudiant international. La France suit le **système LMD** (Licence-Master-Doctorat), mis en place en 2002 dans le cadre du processus de Bologne, qui harmonise les diplômes à l'échelle européenne.

## Le système LMD : trois cycles d'études

| Diplôme | Durée après le bac | Crédits ECTS | Niveau |
|---|---|---|---|
| **Licence** | 3 ans (6 semestres) | 180 ECTS | Bac +3 |
| **Licence Professionnelle** | 1 an après L2 | 60 ECTS | Bac +3 spécialisé |
| **Master** | 2 ans (4 semestres) | 120 ECTS | Bac +5 |
| **Doctorat** | 3 ans minimum | — | Bac +8 |

### La Licence (Bac +3)

La Licence se divise en trois années : **L1, L2, L3**. La première année (L1) est souvent une année de consolidation et d'orientation. De nombreuses universités proposent des **passerelles** entre mentions, permettant de changer de filière en fin de L1 ou L2.

- **Mention** : la discipline principale (ex. Droit, Économie, Sciences de la Vie...)
- **Parcours** : une spécialisation au sein de la mention
- **UE libres** : cours optionnels au choix de l'étudiant

<iframe width="100%" height="480" src="https://www.youtube.com/embed/aA1bB2cC3dD4" title="Système LMD Licence Master Doctorat université française ECTS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Le Master (Bac +5)

Le Master se compose de deux années : **M1 et M2**. L'accès au Master n'est **pas automatique** après la Licence — les universités sélectionnent les étudiants sur dossier. Depuis 2019, toutes les candidatures Master passent par la plateforme **Mon Master** (monmaster.gouv.fr).

Deux types de master coexistent :
- **Master Recherche** : prépare au doctorat, fortement théorique
- **Master Professionnel** : tourné vers le marché du travail, avec stage obligatoire

### Le Doctorat (Bac +8)

Pour accéder au Doctorat, il faut un **Master recherche** et être accepté par un directeur de thèse dans une **école doctorale**. Le doctorant reçoit généralement un contrat doctoral et produit une thèse originale soutenue devant un jury.

## Les universités françaises : organisation interne

Les universités se divisent en **UFR (Unités de Formation et de Recherche)**, équivalents des facultés. Chaque UFR gère ses formations, ses enseignants et ses examens. Les universités proposent aussi des **IUT (Instituts Universitaires de Technologie)** qui délivrent des **BUT (Bachelor Universitaire de Technologie)** en 3 ans.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/bB2cC3dD4eE5" title="UFR IUT BUT université française organisation interne" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Points clés à retenir

- Le système LMD est reconnu dans tout l'**Espace Européen de l'Enseignement Supérieur (EEES)**
- Un semestre représente **30 crédits ECTS** à l'université française
- L'inscription se fait via **Parcoursup** (Licence) et **Mon Master** (Master)
- Les frais d'inscription sont fixés par l'État : environ **170 €/an en Licence**, 243 € en Master`,
  },
  {
    course_id: "3893fa8d-2b7c-4b95-85a9-207da4ca19fe",
    title: "CM et TD : comprendre les deux types de cours",
    lesson_order: 2, order: 2, duration_minutes: 18,
    video_url: "https://www.youtube.com/watch?v=cC3dD4eE5fF6",
    resources: JSON.stringify([
      {"title":"Campus France – Vie universitaire en France","url":"https://www.campusfrance.org","type":"link"},
      {"title":"Étudiant.gouv – Méthodes de travail université","url":"https://www.etudiant.gouv.fr","type":"link"},
      {"title":"Onisep – Organisation cours CM TD TP","url":"https://www.onisep.fr","type":"link"},
      {"title":"Service-Public – Droits étudiants université","url":"https://www.service-public.fr","type":"link"},
      {"title":"CPU – Enseignement supérieur organisation","url":"https://www.cpu.fr","type":"link"},
      {"title":"Légifrance – Statut enseignant-chercheur","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"CNOUS – Accompagnement pédagogique","url":"https://www.cnous.fr","type":"link"},
      {"title":"Parcoursup – Informations formations","url":"https://www.parcoursup.gouv.fr","type":"link"}
    ]),
    content: `# CM et TD : comprendre les deux types de cours à l'université

L'une des premières surprises pour un étudiant international en France est la distinction entre **CM** et **TD**. Ces deux formats de cours ont des rôles très différents, et savoir s'y adapter est essentiel pour réussir.

## Le Cours Magistral (CM)

Le CM est donné par un **professeur ou maître de conférences** (enseignant-chercheur) devant un amphi pouvant accueillir de 100 à 500 étudiants. Son rôle est de **transmettre le savoir** de manière structurée.

### Caractéristiques du CM

- **Pas d'interaction** : en CM, on écoute et prend des notes — les questions sont souvent renvoyées à la fin
- **Pas d'appel** : la présence est généralement libre, mais certains enseignants donnent des informations cruciales en amphi
- **Polycopiés (polys)** : certains professeurs mettent leurs slides sur l'**ENT** avant le cours — téléchargez-les en amont
- **Rythme rapide** : en 1h30 ou 2h, un professeur peut couvrir un chapitre entier

### Comment prendre des notes en CM

1. **Note tout en live, structure après** : écrivez vite et abrégez ; relisez et structurez le soir même
2. **Repérez les signaux** : « ce point est important », « ça tombe souvent à l'examen »
3. **Utilisez des abréviations** : → pour donc, ≠ pour différent, cf. pour voir
4. **Complétez avec le manuel** : après chaque CM, lisez le chapitre correspondant dans le manuel recommandé

<iframe width="100%" height="480" src="https://www.youtube.com/embed/cC3dD4eE5fF6" title="CM cours magistral université prise de notes efficace amphi France" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Les Travaux Dirigés (TD)

Le TD est une séance de **travail en petit groupe** (20 à 30 étudiants) encadrée par un **chargé de TD** (souvent un doctorant ou un enseignant vacataire). Son rôle est d'**approfondir et d'appliquer** ce qui a été vu en CM.

### Comparaison CM / TD

| Critère | CM | TD |
|---|---|---|
| Taille du groupe | 100–500 étudiants | 20–30 étudiants |
| Enseignant | Professeur / MCF | Chargé de TD |
| Format | Écoute passive | Participation active |
| Présence | Souvent libre | Généralement **obligatoire** |
| Évaluation | Rarement noté | Souvent noté (contrôle continu) |

### Comment réussir ses TD

- **Préparez les exercices à l'avance** : les TD supposent que vous avez lu le cours ou fait les exercices demandés
- **Participez activement** : proposer des réponses compte souvent pour la note de contrôle continu
- **Rendu de travaux** : exposés, fiches de lecture, dissertations courtes à rendre régulièrement
- **Absences** : au-delà de 2 à 3 absences injustifiées, vous pouvez être **défaillant** dans la matière

<iframe width="100%" height="480" src="https://www.youtube.com/embed/dD4eE5fF6gG7" title="TD travaux dirigés université participation contrôle continu étudiant international" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Les TP (Travaux Pratiques)

Dans les filières scientifiques, techniques ou médicales, les **TP** sont des séances en laboratoire ou en salle informatique pour expérimenter. La présence y est toujours **obligatoire** et les comptes-rendus de TP sont systématiquement notés.`,
  },
  {
    course_id: "3893fa8d-2b7c-4b95-85a9-207da4ca19fe",
    title: "Le système ECTS et les unités d'enseignement (UE)",
    lesson_order: 3, order: 3, duration_minutes: 16,
    video_url: "https://www.youtube.com/watch?v=eE5fF6gG7hH8",
    resources: JSON.stringify([
      {"title":"Campus France – Crédits ECTS explication","url":"https://www.campusfrance.org","type":"link"},
      {"title":"Étudiant.gouv – ECTS et validation semestre","url":"https://www.etudiant.gouv.fr","type":"link"},
      {"title":"Service-Public – Équivalence diplômes Europe","url":"https://www.service-public.fr","type":"link"},
      {"title":"Légifrance – Arrêté Licence ECTS","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"CPU – Processus de Bologne ECTS France","url":"https://www.cpu.fr","type":"link"},
      {"title":"Onisep – Comment valider son année","url":"https://www.onisep.fr","type":"link"},
      {"title":"Parcoursup – Formations et crédits","url":"https://www.parcoursup.gouv.fr","type":"link"},
      {"title":"CNOUS – Mobilité Erasmus+ ECTS","url":"https://www.cnous.fr","type":"link"}
    ]),
    content: `# Le système ECTS et les unités d'enseignement (UE)

Le système **ECTS (European Credit Transfer and Accumulation System)** est la pierre angulaire de la reconnaissance des diplômes en Europe. Comprendre ce système est indispensable pour suivre votre progression académique et anticiper les équivalences avec votre pays d'origine.

## Qu'est-ce qu'un crédit ECTS ?

Un crédit ECTS représente **25 à 30 heures de travail étudiant total**, incluant :
- Les heures de cours présentiels (CM + TD + TP)
- Le travail personnel (révisions, devoirs, recherches bibliographiques)
- La préparation des examens et la rédaction de travaux

À l'université française :
- **1 semestre = 30 crédits ECTS**
- **1 année universitaire = 60 crédits ECTS**
- **Licence complète = 180 crédits ECTS** (3 ans)
- **Master complet = 120 crédits ECTS** (2 ans, soit 300 depuis le bac)

<iframe width="100%" height="480" src="https://www.youtube.com/embed/eE5fF6gG7hH8" title="ECTS crédits système européen université française explication semestre" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Les unités d'enseignement (UE)

Les matières ne sont pas notées de façon isolée. Elles sont regroupées en **Unités d'Enseignement (UE)**, chacune affectée d'un nombre de crédits ECTS et d'un coefficient.

### Types d'UE

| Type d'UE | Description | Obligatoire ? |
|---|---|---|
| **UE fondamentales** | Matières cœur de la formation | Oui |
| **UE complémentaires** | Approfondissements disciplinaires | Oui |
| **UE méthodologiques** | Méthodologie universitaire, langue | Oui |
| **UE libres (optionnelles)** | Cours au choix dans d'autres UFR | Partiel |
| **UE transversales** | Langue vivante, informatique, sport | Souvent oui |

### Exemple de structure semestrielle en Licence 1

- **UE1** — Fondamentaux disciplinaires (6 ECTS)
- **UE2** — Approfondissement disciplinaire (6 ECTS)
- **UE3** — Culture générale / Histoire de la discipline (4 ECTS)
- **UE4** — Langue vivante (4 ECTS)
- **UE5** — Méthodologie universitaire (4 ECTS)
- **UE6** — UE libre au choix (6 ECTS)

**Total : 30 ECTS**

## Capitalisation et compensation

**1. La capitalisation** : toute UE obtenue avec une note ≥ 10/20 est **définitivement acquise**, même si vous échouez à d'autres UE du même semestre. Vous n'avez pas à la repasser.

**2. La compensation** : à l'intérieur d'un même semestre, une bonne note dans une UE peut **compenser** une note insuffisante dans une autre, à condition que la moyenne semestrielle soit ≥ 10/20.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/fF6gG7hH8iI9" title="UE capitalisation compensation validation semestre université France ECTS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Équivalences européennes et mobilité Erasmus+

Grâce aux crédits ECTS, vos crédits obtenus dans une université européenne partenaire peuvent être reconnus par votre université française. Un **Learning Agreement** (contrat pédagogique) est signé avant le départ pour établir les équivalences officielles entre les UE étrangères et françaises.`,
  },
  {
    course_id: "3893fa8d-2b7c-4b95-85a9-207da4ca19fe",
    title: "S'inscrire, choisir ses cours et lire son emploi du temps",
    lesson_order: 4, order: 4, duration_minutes: 15,
    video_url: "https://www.youtube.com/watch?v=gG7hH8iI9jJ0",
    resources: JSON.stringify([
      {"title":"Parcoursup – Inscription formation supérieure","url":"https://www.parcoursup.gouv.fr","type":"link"},
      {"title":"Étudiant.gouv – Inscription pédagogique université","url":"https://www.etudiant.gouv.fr","type":"link"},
      {"title":"Campus France – Démarches administratives arrivée","url":"https://www.campusfrance.org","type":"link"},
      {"title":"Service-Public – Inscription administrative université","url":"https://www.service-public.fr","type":"link"},
      {"title":"CNOUS – Bourse CVEC inscription","url":"https://www.cnous.fr","type":"link"},
      {"title":"Légifrance – Droits inscription universitaire","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"Onisep – ENT numérique étudiant","url":"https://www.onisep.fr","type":"link"},
      {"title":"CPU – Universités numériques ENT","url":"https://www.cpu.fr","type":"link"}
    ]),
    content: `# S'inscrire, choisir ses cours et lire son emploi du temps

La rentrée universitaire implique plusieurs démarches administratives et pédagogiques distinctes. Beaucoup d'étudiants internationaux sont surpris par la complexité du processus — voici un guide étape par étape.

## Les deux types d'inscription

### 1. L'inscription administrative (IA)

C'est l'inscription officielle à l'université. Elle se fait **une fois par an** et vous confère le statut d'étudiant. Elle comprend :
- Le règlement des **droits d'inscription** (frais de scolarité)
- Le paiement de la **CVEC (Contribution Vie Étudiante et de Campus)** — environ 103 €/an, obligatoire avant toute IA
- La remise de votre **carte étudiante** avec accès aux services universitaires
- L'obtention de votre **adresse e-mail universitaire** et accès à l'ENT

### 2. L'inscription pédagogique (IP)

C'est le choix concret de vos cours pour le semestre. L'IP se fait en ligne via l'**ENT** dans les premières semaines de chaque semestre. C'est à ce moment que vous :
- Choisissez vos **groupes de TD** (les places sont limitées — inscrivez-vous tôt)
- Sélectionnez vos **UE optionnelles** parmi les choix proposés
- Confirmez votre **parcours** de formation

> Attention : pour les étudiants en mobilité internationale (Erasmus, échanges bilatéraux), l'IP nécessite souvent une validation par le coordinateur pédagogique.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/gG7hH8iI9jJ0" title="Inscription administrative pédagogique université CVEC ENT étudiant international" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## L'ENT (Espace Numérique de Travail)

L'**ENT** est le portail numérique central de votre université. Chaque établissement a le sien (Moodle, Claroline, eSpace, Aurion...). Il centralise toutes vos ressources universitaires :

| Fonctionnalité | Description |
|---|---|
| **Emploi du temps** | Planning hebdomadaire personnalisé |
| **Moodle / Cours en ligne** | Ressources pédagogiques de chaque UE |
| **Notes et relevés** | Résultats d'examens, relevé de notes officiel |
| **Messagerie** | E-mail universitaire (à consulter quotidiennement) |
| **Scolarité** | Attestations d'inscription, certificats |
| **Bibliothèque universitaire** | Accès aux bases de données numériques |

### Lire son emploi du temps universitaire

- **CM** en amphi (A + numéro de salle) : cours pour tous les étudiants du groupe
- **TD** en salle (S + numéro) : votre groupe de TD uniquement
- **Créneaux libres** : à utiliser pour le travail personnel en BU ou révisions
- Les horaires standard sont **8h-10h, 10h-12h, 14h-16h, 16h-18h**

<iframe width="100%" height="480" src="https://www.youtube.com/embed/hH8iI9jJ0kK1" title="ENT emploi du temps université Moodle lecture planning étudiant" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Mon Master : candidature au Master

Pour accéder au Master, utilisez la plateforme **Mon Master** (monmaster.gouv.fr). Les candidatures ouvrent en **mars-avril** pour une rentrée en septembre. Préparez : relevés de notes de Licence, CV, lettre de motivation personnalisée par formation, et lettres de recommandation si demandées.`,
  },
  {
    course_id: "3893fa8d-2b7c-4b95-85a9-207da4ca19fe",
    title: "Examens universitaires : partiels, rattrapages, jurys",
    lesson_order: 5, order: 5, duration_minutes: 19,
    video_url: "https://www.youtube.com/watch?v=iI9jJ0kK1lL2",
    resources: JSON.stringify([
      {"title":"Étudiant.gouv – Examens et validation à l'université","url":"https://www.etudiant.gouv.fr","type":"link"},
      {"title":"Service-Public – Session de rattrapage université","url":"https://www.service-public.fr","type":"link"},
      {"title":"Légifrance – Règlement des examens universités","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"Campus France – Système de notation français","url":"https://www.campusfrance.org","type":"link"},
      {"title":"Onisep – Partiels et rattrapages expliqués","url":"https://www.onisep.fr","type":"link"},
      {"title":"CPU – Jurys de délibération universitaire","url":"https://www.cpu.fr","type":"link"},
      {"title":"CNOUS – Soutien pédagogique étudiant","url":"https://www.cnous.fr","type":"link"},
      {"title":"Parcoursup – Résultats et orientation après Licence","url":"https://www.parcoursup.gouv.fr","type":"link"}
    ]),
    content: `# Examens universitaires : partiels, rattrapages, jurys

Le système d'évaluation universitaire français repose sur un calendrier structuré avec deux sessions d'examens par an. Comprendre ses règles vous permet d'éviter les mauvaises surprises et de planifier votre révision efficacement.

## Le calendrier des examens

### Session 1 — les partiels de semestre

Les **partiels** sont les examens de fin de semestre. Ils se déroulent généralement :
- **Semestre 1** : janvier (après environ 12 semaines de cours)
- **Semestre 2** : mai-juin

Ces examens comptent pour la majorité de la note finale — souvent **60 à 70 %** de la note d'UE (le reste étant le contrôle continu en TD).

### Session 2 — les rattrapages

Si vous échouez à une ou plusieurs UE en session 1, vous avez droit à une **deuxième chance** lors de la session de rattrapage :
- Rattrapages du **Semestre 1** : généralement en juin
- Rattrapages du **Semestre 2** : généralement en septembre

> Important : en session 2, la note obtenue **remplace** la note de session 1 — même si elle est inférieure. Certaines formations retiennent le meilleur des deux notes : vérifiez le règlement de la vôtre.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/iI9jJ0kK1lL2" title="Partiels session 1 session 2 rattrapage université France règles" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Format des examens

| Format | Description | Fréquence |
|---|---|---|
| **Dissertation** | Développement argumenté sur une problématique | Lettres, Droit, SHS |
| **QCM** | Questions à choix multiples | Sciences, Médecine, Économie |
| **Examen sur documents** | Analyse de textes, commentaires | Droit, Géographie |
| **Problèmes** | Exercices de calcul, démonstrations | Maths, Physique, Informatique |
| **Cas pratique** | Mise en situation professionnelle | IUT, Droit, Gestion |
| **Oral** | Exposé ou entretien avec jury | Certaines matières |

## La notation sur 20

La France note sur **20 points**. Obtenir 15/20 est considéré comme **excellent**. Les repères habituels :

- **16–20/20** : Très bien — Excellent
- **14–15/20** : Bien
- **12–13/20** : Assez bien
- **10–11/20** : Passable (validé)
- **< 10/20** : Insuffisant (non validé)

## Le jury de délibération

À la fin de chaque semestre, un **jury de délibération** composé d'enseignants se réunit pour statuer officiellement sur les résultats. Le jury peut :
- **Valider** le semestre grâce à la compensation entre UE (si moyenne ≥ 10/20)
- **Accorder le passage** malgré un échec (décision discrétionnaire pour cas limites)
- **Ajouter des points de jury** en cas de situation exceptionnelle documentée

<iframe width="100%" height="480" src="https://www.youtube.com/embed/jJ0kK1lL2mM3" title="Jury délibération compensation passage université France notes résultats" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Défaillance et aménagements

Un étudiant est **défaillant** s'il ne se présente pas à un examen sans motif valable — il perd alors le bénéfice de la compensation semestrielle. En cas de maladie, fournissez un **justificatif médical** à la scolarité dans les 48 heures. Si vous êtes en situation de handicap reconnu, demandez un **tiers temps** supplémentaire via la Mission Handicap de l'université.`,
  },
  {
    course_id: "3893fa8d-2b7c-4b95-85a9-207da4ca19fe",
    title: "Vie étudiante et ressources universitaires",
    lesson_order: 6, order: 6, duration_minutes: 14,
    video_url: "https://www.youtube.com/watch?v=kK1lL2mM3nN4",
    resources: JSON.stringify([
      {"title":"CNOUS – Services CROUS logement restauration","url":"https://www.cnous.fr","type":"link"},
      {"title":"Campus France – Vie pratique étudiant France","url":"https://www.campusfrance.org","type":"link"},
      {"title":"Étudiant.gouv – Santé sport ressources campus","url":"https://www.etudiant.gouv.fr","type":"link"},
      {"title":"Service-Public – Aide sociale étudiant","url":"https://www.service-public.fr","type":"link"},
      {"title":"Onisep – Vie associative BDE université","url":"https://www.onisep.fr","type":"link"},
      {"title":"Légifrance – Statut étudiant en situation de handicap","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"CPU – Bibliothèques universitaires numériques","url":"https://www.cpu.fr","type":"link"},
      {"title":"Parcoursup – Vie de campus informations","url":"https://www.parcoursup.gouv.fr","type":"link"}
    ]),
    content: `# Vie étudiante et ressources universitaires

L'université française ne se limite pas aux cours. Elle offre un ensemble de ressources et services conçus pour accompagner les étudiants dans tous les aspects de leur vie — académique, sociale, sportive et médicale.

## La BU : la Bibliothèque Universitaire

La **Bibliothèque Universitaire (BU)** est un outil fondamental pour tout étudiant sérieux. Bien plus qu'un lieu de prêt de livres, elle propose :

- **Ressources physiques** : ouvrages, manuels, revues scientifiques, journaux
- **Ressources numériques** : accès à des milliers de bases de données (JSTOR, Cairn, ScienceDirect, PressReader...) avec vos identifiants universitaires, depuis n'importe où
- **Salles de travail** : postes informatiques, cabines de travail en groupe, zones de silence stricte
- **Formation documentaire** : ateliers sur la recherche bibliographique, les normes de citation, la lutte contre le plagiat

> Conseil : téléchargez l'application mobile de votre BU pour renouveler vos prêts, réserver des salles et accéder aux ressources numériques depuis chez vous.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/kK1lL2mM3nN4" title="BU bibliothèque universitaire ressources numériques étudiant France" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Santé : le SSU (Service de Santé Universitaire)

Le **SSU**, aussi appelé **SIUMPPS** ou **SSIEU** selon les universités, est le service médical gratuit du campus. Il propose :

- Consultations médicales et infirmières gratuites
- Suivi gynécologique et accès à la contraception
- Soutien psychologique avec des psychologues universitaires
- Vaccinations obligatoires ou recommandées (méningite, hépatite B, etc.)
- Bilan de santé complet pour les nouveaux entrants

Les étudiants internationaux doivent s'affilier à la **Sécurité Sociale** française (via la CPAM) dès leur arrivée pour bénéficier du remboursement des soins.

## Sport : le SUAPS

Le **SUAPS (Service Universitaire des Activités Physiques et Sportives)** propose plus d'une cinquantaine de disciplines sportives à tarif très réduit (souvent environ 50 €/an ou inclus dans la CVEC). C'est un excellent moyen de :
- Maintenir son équilibre mental et physique pendant les études
- Rencontrer des étudiants en dehors de sa filière
- Accéder à des infrastructures sportives de qualité (salles de musculation, terrains, piscines)

## Vie associative : le BDE et les associations

Le **BDE (Bureau Des Étudiants)** est l'association étudiante centrale. Il organise événements, soirées, voyages et représente les étudiants auprès de la direction. Rejoindre une association ou un club est fortement recommandé pour :
- S'intégrer rapidement dans la vie de campus
- Pratiquer le français dans un contexte informel et convivial
- Développer des compétences extra-académiques valorisées (leadership, gestion de projet)

<iframe width="100%" height="480" src="https://www.youtube.com/embed/lL2mM3nN4oO5" title="SUAPS sport BDE associations vie étudiante université France international" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Mission Handicap et services CROUS

La **Mission Handicap** accompagne les étudiants en situation de handicap (temporaire ou permanent) : aménagements d'examens, tutorat adapté, aide technique et matérielle.

Le **CROUS (Centre Régional des Œuvres Universitaires et Scolaires)** gère des services essentiels :

| Service CROUS | Description |
|---|---|
| **Logement** | Résidences universitaires (chambres à environ 200–400 €/mois) |
| **Restauration** | Restaurants universitaires (Resto U) à **3,30 €/repas** pour les étudiants boursiers |
| **Aides financières** | Bourses sur critères sociaux, aides d'urgence ponctuelles |
| **Culture** | Programme Culture-ActionS, aides aux projets étudiants artistiques |

Pour accéder au logement CROUS ou au tarif réduit en Resto U, déposez votre demande de **bourse CROUS** sur messervices.etudiant.gouv.fr avant la rentrée.`,
  },
]
