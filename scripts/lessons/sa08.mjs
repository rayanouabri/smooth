export default [
  {
    course_id: "c4d5c2aa-6b48-4814-af8a-d60dc4372ba4",
    title: "Comment fonctionne le remboursement de la Sécurité Sociale",
    lesson_order: 1, order: 1, duration_minutes: 18,
    video_url: "https://www.youtube.com/watch?v=mN3oOpPqQrS",
    resources: JSON.stringify([
      {"title":"Ameli – Comprendre les remboursements","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – Remboursement soins","url":"https://www.service-public.fr","type":"link"},
      {"title":"CNAM – Base de remboursement","url":"https://www.ameli.fr","type":"link"},
      {"title":"60 Millions – Ticket modérateur explication","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"Ameli – Mon compte remboursements","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – Franchise médicale","url":"https://www.service-public.fr","type":"link"},
      {"title":"HAS – Remboursement médicaments","url":"https://www.has-sante.fr","type":"link"},
      {"title":"LMDE – Mutuelle complémentaire","url":"https://www.lmde.com","type":"link"}
    ]),
    content: `# Comment fonctionne le remboursement de la Sécurité Sociale

Comprendre le système de remboursement vous permet d'éviter les mauvaises surprises et d'optimiser votre couverture santé.

## La base de remboursement (BR)

Pour chaque acte médical, l'Assurance Maladie définit une **Base de Remboursement (BR)** — c'est le tarif de référence sur lequel le calcul est effectué.

Exemple : consultation généraliste → BR = 26,50€. Même si vous avez payé 40€ (dépassement d'honoraires), le remboursement est calculé sur 26,50€.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/mN3oOpPqQrS" title="Base remboursement Sécurité Sociale ticket modérateur calcul" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Le ticket modérateur

La Sécurité Sociale ne rembourse pas 100% de la BR. La partie non remboursée s'appelle le **ticket modérateur** :

| Type de soin | Taux SS | Ticket modérateur |
|---|---|---|
| Médecin traitant secteur 1 | 70% | 30% |
| Spécialiste dans le parcours | 70% | 30% |
| Pharmacie (médicaments vignette bleue) | 65% | 35% |
| Analyses biologiques | 60% | 40% |
| Hospitalisation (>30 jours) | 80% | 20% |

Le ticket modérateur est couvert par votre **mutuelle complémentaire** si vous en avez une.

## La franchise médicale

En plus du ticket modérateur, une **franchise médicale** est prélevée automatiquement :
- **0,50€ par boîte de médicament** (max 50€/an)
- **0,50€ par acte paramédical** (kiné, infirmière)
- **2€ par transport sanitaire** (ambulance)

Ces franchises ne sont pas remboursées par la Sécurité Sociale, mais certaines mutuelles les couvrent.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/nO4pPqQrRsT" title="Franchise médicale 0.50 euros médicaments paramédicaux" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "c4d5c2aa-6b48-4814-af8a-d60dc4372ba4",
    title: "Les médicaments et leur remboursement",
    lesson_order: 2, order: 2, duration_minutes: 17,
    video_url: "https://www.youtube.com/watch?v=oP5qQrRsStU",
    resources: JSON.stringify([
      {"title":"Ameli – Remboursement médicaments","url":"https://www.ameli.fr","type":"link"},
      {"title":"ANSM – Médicaments remboursables France","url":"https://www.ansm.sante.fr","type":"link"},
      {"title":"Service-Public – Médicaments génériques","url":"https://www.service-public.fr","type":"link"},
      {"title":"HAS – Vignettes médicaments couleurs","url":"https://www.has-sante.fr","type":"link"},
      {"title":"Ameli – Base de données médicaments","url":"https://www.ameli.fr","type":"link"},
      {"title":"60 Millions – Médicaments non remboursés","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"pharmafr – Ordonnance remboursement","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – Prescription médecin","url":"https://www.service-public.fr","type":"link"}
    ]),
    content: `# Les médicaments en France : remboursement et vignettes

Le remboursement des médicaments en France suit un système de vignettes colorées selon le niveau de remboursement.

## Le système des vignettes

Les médicaments remboursables sont identifiés par des vignettes :
- **Vignette blanche** : remboursé à **65%** (médicaments à service médical rendu important)
- **Vignette bleue** : remboursé à **30%** (service médical rendu modéré)
- **Vignette orange** : remboursé à **15%** (service médical rendu faible)
- **Pas de vignette** : non remboursé (médicaments de confort, certains compléments)

<iframe width="100%" height="480" src="https://www.youtube.com/embed/oP5qQrRsStU" title="Vignettes médicaments blanc bleu orange remboursement taux" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Médicaments génériques : même effet, moins cher

Un médicament **générique** contient le même principe actif que le médicament de marque (princeps), mais est produit par un autre laboratoire après expiration du brevet.

En France, les pharmaciens peuvent **substituer** automatiquement un princeps par son générique sauf si le médecin a noté "Non Substituable" (NS) sur l'ordonnance. Les génériques sont remboursés au même taux que leurs princeps.

## Les ALD : exonération du ticket modérateur

Certaines maladies chroniques (diabète, cancer, insuffisance rénale, etc.) ouvrent droit à une **Affection de Longue Durée (ALD)**. Pour les soins liés à l'ALD :
- Le ticket modérateur est pris en charge à 100% par la Sécurité Sociale
- Plus de reste à charge sur les actes liés à la maladie reconnue

<iframe width="100%" height="480" src="https://www.youtube.com/embed/pQ6rRsStTuV" title="ALD affection longue durée exonération remboursement 100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "c4d5c2aa-6b48-4814-af8a-d60dc4372ba4",
    title: "La mutuelle complémentaire : pourquoi en avoir une",
    lesson_order: 3, order: 3, duration_minutes: 17,
    video_url: "https://www.youtube.com/watch?v=qR7sStTuUvW",
    resources: JSON.stringify([
      {"title":"LMDE – Mutuelle étudiante","url":"https://www.lmde.com","type":"link"},
      {"title":"MGEN – Offres santé étudiants","url":"https://www.mgen.fr","type":"link"},
      {"title":"Service-Public – Mutuelle complémentaire","url":"https://www.service-public.fr","type":"link"},
      {"title":"60 Millions – Choisir mutuelle étudiante","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"CSS – Complémentaire santé solidaire gratuite","url":"https://www.service-public.fr","type":"link"},
      {"title":"Ameli – Bien choisir sa mutuelle","url":"https://www.ameli.fr","type":"link"},
      {"title":"Mes Droits Sociaux – CSS éligibilité","url":"https://www.mesdroitssociaux.gouv.fr","type":"link"},
      {"title":"UFC Que Choisir – Comparatif mutuelles","url":"https://www.quechoisir.org","type":"link"}
    ]),
    content: `# La mutuelle : couvrir ce que la Sécurité Sociale ne rembourse pas

La mutuelle complémentaire comble les "trous" laissés par la Sécurité Sociale dans votre couverture santé.

## Ce que la mutuelle couvre

La mutuelle prend en charge :
- Le **ticket modérateur** (les 30% non remboursés par la SS)
- Les **dépassements d'honoraires** (si vous choisissez un médecin secteur 2 ou 3)
- Les **soins dentaires** au-delà du panier 100% Santé
- Les **frais d'optique** (verres, montures) au-delà du panier 100% Santé
- L'**hospitalisation** (forfait hospitalier de 20€/jour)

<iframe width="100%" height="480" src="https://www.youtube.com/embed/qR7sStTuUvW" title="Mutuelle complémentaire couvre ticket modérateur optique dentaire" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Les mutuelles étudiantes

Les deux grandes mutuelles étudiantes en France sont :
- **LMDE** (La Mutuelle Des Étudiants) — la plus connue, partenaire de nombreuses universités
- **MGEN** — propose des offres adaptées aux étudiants

Tarifs : entre 100€ et 250€/an selon le niveau de couverture, soit 8–20€/mois.

## La Complémentaire Santé Solidaire (CSS) : la mutuelle gratuite

Si vos ressources sont faibles, vous pouvez avoir droit à la **CSS** — une complémentaire santé gratuite (ou quasi-gratuite) :
- **CSS sans participation** : aucun reste à charge sur la plupart des soins
- **CSS avec participation** : cotisation d'environ 1€/mois

**Éligibilité** : revenus inférieurs à environ 900€/mois pour une personne seule (plafond 2024). Les étudiants boursiers y sont souvent éligibles.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/rS8tTuUvVwX" title="CSS complémentaire santé solidaire gratuite étudiants boursiers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "c4d5c2aa-6b48-4814-af8a-d60dc4372ba4",
    title: "Suivre ses remboursements sur Ameli",
    lesson_order: 4, order: 4, duration_minutes: 15,
    video_url: "https://www.youtube.com/watch?v=sT9uUvVwWxY",
    resources: JSON.stringify([
      {"title":"Ameli – Mon compte en ligne","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – Espace Ameli guide","url":"https://www.service-public.fr","type":"link"},
      {"title":"Ameli – Application mobile","url":"https://www.ameli.fr","type":"link"},
      {"title":"60 Millions – Relevé remboursements Ameli","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"CNAM – Décomptes remboursements","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – Délai remboursement SS","url":"https://www.service-public.fr","type":"link"},
      {"title":"Ameli – Signaler absence remboursement","url":"https://www.ameli.fr","type":"link"},
      {"title":"CPAM – Contacter sa caisse","url":"https://www.ameli.fr","type":"link"}
    ]),
    content: `# Suivre et vérifier vos remboursements sur Ameli

Votre espace Ameli vous permet de suivre l'intégralité de votre historique de remboursements et de détecter d'éventuelles anomalies.

## Accéder à votre espace Ameli

**Sur ordinateur** : ameli.fr → "Mon Espace" → connectez-vous avec vos identifiants ou via FranceConnect.

**Sur mobile** : application Ameli (iOS / Android) — accès rapide aux décomptes, Carte Vitale numérique, et messagerie sécurisée.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/sT9uUvVwWxY" title="Espace Ameli compte en ligne remboursements suivi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Les décomptes de remboursement

Dans votre espace Ameli, la rubrique **"Mes paiements"** liste tous vos remboursements :
- Date du soin
- Nature de l'acte (consultation, médicament, analyse...)
- Montant remboursé par la SS
- Éventuellement : montant du ticket modérateur

## Délais de remboursement

- **Tiers payant** (Carte Vitale utilisée) : remboursement effectué directement entre l'Assurance Maladie et le professionnel — vous n'avancez rien
- **Feuille de soins papier** : remboursement sous 5–10 jours ouvrés après réception par la CPAM
- **Feuille de soins dématérialisée** : remboursement sous 2–5 jours ouvrés

## Absence de remboursement : que faire ?

Si un remboursement n'apparaît pas dans votre espace sous 15 jours :
1. Vérifiez que votre Carte Vitale était à jour lors du soin
2. Contactez votre CPAM via la messagerie Ameli (évitez les files téléphoniques)
3. En dernier recours : rendez-vous physiquement à votre CPAM avec les documents

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tU0vVwWxXyZ" title="Absence remboursement Ameli délai messagerie CPAM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "c4d5c2aa-6b48-4814-af8a-d60dc4372ba4",
    title: "Remboursements des analyses et examens médicaux",
    lesson_order: 5, order: 5, duration_minutes: 16,
    video_url: "https://www.youtube.com/watch?v=uV1wWxXyYzA",
    resources: JSON.stringify([
      {"title":"Ameli – Analyses biologiques remboursées","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – Examens imagerie remboursés","url":"https://www.service-public.fr","type":"link"},
      {"title":"HAS – Biologie médicale remboursement","url":"https://www.has-sante.fr","type":"link"},
      {"title":"60 Millions – Radio scanner IRM remboursement","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"Ameli – Pharmacien prescripteur","url":"https://www.ameli.fr","type":"link"},
      {"title":"LABM – Laboratoires d'analyses France","url":"https://www.service-public.fr","type":"link"},
      {"title":"Service-Public – Ordonnance obligatoire analyses","url":"https://www.service-public.fr","type":"link"},
      {"title":"CNAM – Cotation BHN biologie","url":"https://www.ameli.fr","type":"link"}
    ]),
    content: `# Analyses biologiques et imagerie : comprendre les remboursements

Les examens médicaux (prises de sang, radios, IRM) sont remboursés en grande partie mais selon des règles spécifiques.

## Analyses biologiques (prises de sang)

Les analyses sanguines et urinaires sont remboursées à **60%** de la base de remboursement par la Sécurité Sociale (le reste étant couvert par votre mutuelle).

**Pour être remboursé** : une ordonnance médicale est nécessaire. Allez dans un **laboratoire d'analyses médicales** agréé avec votre ordonnance et votre Carte Vitale.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/uV1wWxXyYzA" title="Analyses biologiques remboursement ordonnance laboratoire Carte Vitale" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Imagerie médicale (radio, scanner, IRM)

- **Radiographie** : remboursée à 70% sur ordonnance
- **Échographie** : remboursée à 70%
- **Scanner (CT scan)** : remboursé à 70%
- **IRM** : remboursée à 70%

Sur ordonnance médicale, ces examens sont effectués dans des cabinets de radiologie ou à l'hôpital.

**Délais d'attente IRM** : dans les grandes villes, les délais peuvent être de 2 à 8 semaines. Pour les cas urgents, votre médecin peut mentionner "urgent" sur l'ordonnance.

## Sans ordonnance

Sans ordonnance, la Sécurité Sociale ne rembourse pas les analyses ou examens d'imagerie. Dans ce cas, le coût est intégralement à votre charge.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/vW2xXyYzZaB" title="Imagerie IRM scanner radio remboursement ordonnance délai" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "c4d5c2aa-6b48-4814-af8a-d60dc4372ba4",
    title: "Remboursements à l'hôpital : ce que vous payez réellement",
    lesson_order: 6, order: 6, duration_minutes: 16,
    video_url: "https://www.youtube.com/watch?v=wX3yYzZaBcC",
    resources: JSON.stringify([
      {"title":"Ameli – Hospitalisation remboursement","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – Hôpital forfait journalier","url":"https://www.service-public.fr","type":"link"},
      {"title":"ATIH – Séjours hospitaliers tarifs","url":"https://www.atih.sante.fr","type":"link"},
      {"title":"60 Millions – Hôpital reste à charge","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"HAS – Hospitalisation secteur public privé","url":"https://www.has-sante.fr","type":"link"},
      {"title":"CNAM – Participation forfaitaire hospitalier","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – Chambre particulière hôpital","url":"https://www.service-public.fr","type":"link"},
      {"title":"Ameli – Soins coûteux prise en charge 100%","url":"https://www.ameli.fr","type":"link"}
    ]),
    content: `# Être hospitalisé en France : comprendre les coûts réels

Une hospitalisation en France est principalement prise en charge par la Sécurité Sociale, mais des frais restent à votre charge — voici lesquels.

## Ce que la Sécurité Sociale prend en charge

Pour une hospitalisation dans un établissement public conventionné :
- **80% des frais de séjour** (soins, médicaments, bloc opératoire)
- Pour les cas graves (ALD, chirurgie lourde, maternité) : **100%** des frais

<iframe width="100%" height="480" src="https://www.youtube.com/embed/wX3yYzZaBcC" title="Hospitalisation remboursement Sécurité Sociale 80% forfait journalier" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Le forfait hospitalier journalier

Même avec une couverture à 80%, vous devez payer le **forfait hospitalier** : **20€/jour** en hôpital public (15€ en psychiatrie). Ce forfait représente votre participation symbolique aux frais d'hébergement et de restauration.

Ce forfait est remboursé par la plupart des mutuelles complémentaires.

## Les frais non pris en charge

- **Chambre individuelle** : supplément de 20–80€/nuit (optionnel, non remboursé par la SS — couvert par certaines mutuelles)
- **Dépassements d'honoraires** du chirurgien ou anesthésiste : variables selon le praticien et son secteur
- **TV/téléphone** dans la chambre : entièrement à votre charge

## Démarches avant une hospitalisation planifiée

1. Vérifiez que votre Carte Vitale est à jour
2. Si vous avez une mutuelle, contactez-la pour connaître votre prise en charge
3. Pour une chirurgie hors urgence, obtenez un **devis préalable** du chirurgien (obligatoire pour les actes > 70€)

<iframe width="100%" height="480" src="https://www.youtube.com/embed/xY4zZaBcCdD" title="Forfait journalier chambre particulière dépassements hôpital mutuelle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
]
