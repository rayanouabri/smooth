export default [
  {
    course_id: "0f1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
    title: "France Travail (ex-Pôle Emploi) : rôle et inscription",
    lesson_order: 1, order: 1, duration_minutes: 16,
    video_url: "https://www.youtube.com/watch?v=tv04L1v1abc",
    resources: JSON.stringify([
      {"title":"France Travail – Site officiel","url":"https://www.francetravail.fr","type":"link"},
      {"title":"Service-Public – S'inscrire à France Travail","url":"https://www.service-public.fr","type":"link"},
      {"title":"Legifrance – Code du travail chômage","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"Unedic – Règles assurance chômage","url":"https://www.unedic.org","type":"link"},
      {"title":"Apec – Accompagnement cadres","url":"https://www.apec.fr","type":"link"},
      {"title":"CAF – Cumul RSA et chômage","url":"https://www.caf.fr","type":"link"},
      {"title":"Ameli – Droits santé chômeur","url":"https://www.ameli.fr","type":"link"},
      {"title":"Impots.gouv – Fiscalité allocation chômage","url":"https://www.impots.gouv.fr","type":"link"}
    ]),
    content: `# France Travail : comprendre le service public de l'emploi

France Travail (anciennement Pôle Emploi depuis janvier 2024) est l'opérateur public chargé à la fois du **versement des allocations chômage** et de **l'accompagnement à la recherche d'emploi**.

## Pourquoi s'inscrire à France Travail ?

S'inscrire à France Travail permet de :
- **Percevoir l'ARE** (Allocation de Retour à l'Emploi) si vous remplissez les conditions
- Accéder aux **offres d'emploi** et aux **formations financées** (CPF, formations France Travail)
- Bénéficier d'un **accompagnement personnalisé** par un conseiller
- Maintenir vos **droits à la sécurité sociale** pendant la période sans emploi

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L1v1abc" title="France Travail inscription rôle allocation chômage accompagnement" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Comment s'inscrire

L'inscription se fait **en ligne sur francetravail.fr** en 15–20 minutes :
1. Créer un compte avec votre email
2. Saisir vos informations personnelles et votre situation (fin de contrat, fin de mission, etc.)
3. Télécharger les justificatifs (attestation employeur, pièce d'identité, titre de séjour si hors UE)
4. Prendre rendez-vous avec un conseiller dans les 15 jours suivants

**Important** : inscrivez-vous dans les **12 mois** suivant la fin de votre contrat pour ne pas perdre vos droits.

## Les conditions pour percevoir l'ARE

Pour percevoir l'allocation chômage (ARE), vous devez :
- Avoir travaillé au moins **130 jours ou 910 heures** au cours des 24 derniers mois (36 mois pour les + de 53 ans)
- Avoir perdu votre emploi **involontairement** (licenciement, fin de CDD, rupture conventionnelle)
- Être en recherche active d'emploi et résider en France

**Les démissions** n'ouvrent pas droit à l'ARE sauf cas particuliers (suivi de conjoint, manquement grave de l'employeur, reconversion validée par le CPF de transition).

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L1v2abc" title="ARE conditions chômage droits fin CDD licenciement inscription" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "0f1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
    title: "L'allocation chômage (ARE) : calcul et durée",
    lesson_order: 2, order: 2, duration_minutes: 17,
    video_url: "https://www.youtube.com/watch?v=tv04L2v1abc",
    resources: JSON.stringify([
      {"title":"France Travail – Simulateur ARE","url":"https://www.francetravail.fr","type":"link"},
      {"title":"Unedic – Règles calcul allocation","url":"https://www.unedic.org","type":"link"},
      {"title":"Service-Public – Montant ARE 2024","url":"https://www.service-public.fr","type":"link"},
      {"title":"Legifrance – Décret ARE","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"Impots.gouv – ARE soumise à impôt","url":"https://www.impots.gouv.fr","type":"link"},
      {"title":"Ameli – Santé pendant le chômage","url":"https://www.ameli.fr","type":"link"},
      {"title":"CAF – Aides chômeurs logement","url":"https://www.caf.fr","type":"link"},
      {"title":"Apec – Accompagnement ARE cadres","url":"https://www.apec.fr","type":"link"}
    ]),
    content: `# L'Allocation de Retour à l'Emploi (ARE) : montant et durée de versement

L'ARE est le revenu de remplacement versé par l'Unédic (via France Travail) aux chômeurs éligibles. Son montant et sa durée dépendent de votre historique de travail.

## Comment est calculée l'ARE ?

L'ARE est calculée sur la base du **Salaire Journalier de Référence (SJR)**, lui-même calculé à partir de vos salaires bruts des 24 derniers mois.

Le montant journalier est le plus élevé des deux formules :
- **40,4% du SJR + 12,95€** (partie fixe)
- **57% du SJR**

**Plafond** : l'ARE ne peut pas dépasser 75% du SJR.
**Plancher** : 31,97€/jour minimum (si éligible).

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L2v1abc" title="Calcul ARE allocation chômage SJR formule montant plancher plafond" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Durée de versement de l'ARE

| Durée travaillée | Durée ARE versée |
|-----------------|-----------------|
| 6 mois (182 jours) | 6 mois |
| 12 mois | 12 mois |
| 24 mois | 24 mois |
| 24 mois + 53 ans | 36 mois maximum |

Les droits ARE sont rechargés si vous retravaillez au moins 6 mois avant de pointer à nouveau.

## Exemples concrets

- Salaire brut de **2 000€/mois** → ARE d'environ **1 100€/mois**
- Salaire brut de **3 000€/mois** → ARE d'environ **1 600€/mois**
- Salaire brut de **4 000€/mois** → ARE d'environ **2 100€/mois**

Utilisez le **simulateur officiel France Travail** pour un calcul précis.

## L'ARE est-elle imposable ?

Oui, l'ARE est soumise à l'**impôt sur le revenu** et aux **CSG/CRDS** (prélèvements sociaux). En pratique, si votre ARE est votre seul revenu de l'année, votre impôt sera très faible ou nul.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L2v2abc" title="ARE durée versement rechargement droits impôt CSG simulateur" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "0f1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
    title: "Chercher un emploi avec France Travail : outils et accompagnement",
    lesson_order: 3, order: 3, duration_minutes: 15,
    video_url: "https://www.youtube.com/watch?v=tv04L3v1abc",
    resources: JSON.stringify([
      {"title":"France Travail – Offres d'emploi","url":"https://www.francetravail.fr","type":"link"},
      {"title":"Indeed – Moteur de recherche emploi","url":"https://www.indeed.fr","type":"link"},
      {"title":"LinkedIn – Offres et réseau","url":"https://www.linkedin.com","type":"link"},
      {"title":"Apec – Accompagnement cadres chômage","url":"https://www.apec.fr","type":"link"},
      {"title":"Welcome to the Jungle – Offres entreprises","url":"https://www.welcometothejungle.com","type":"link"},
      {"title":"CPF – Formation pendant chômage","url":"https://www.moncompteformation.gouv.fr","type":"link"},
      {"title":"Glassdoor – Avis entreprises","url":"https://www.glassdoor.fr","type":"link"},
      {"title":"Cadremploi – Cadres et dirigeants","url":"https://www.cadremploi.fr","type":"link"}
    ]),
    content: `# Chercher un emploi avec France Travail : outils et conseils

France Travail met à disposition un ensemble d'outils et de services pour faciliter le retour à l'emploi. Voici comment en tirer le meilleur parti.

## Le suivi mensuel : obligations du demandeur d'emploi

En contrepartie du versement de l'ARE, vous devez :
- **Actualiser votre situation** chaque mois (en ligne ou par téléphone)
- **Accepter les offres raisonnables d'emploi** (ORE) correspondant à votre profil
- **Répondre aux convocations** de votre conseiller
- **Signaler immédiatement** toute reprise d'activité (même partielle)

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L3v1abc" title="Obligations demandeur emploi actualisation mensuelle ARE convocation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Les outils de France Travail pour chercher

- **Moteur d'offres** : francetravail.fr propose 800 000+ offres — filtrez par secteur, ville, contrat, télétravail
- **CV en ligne** : créez votre CV sur la plateforme pour être trouvé par des recruteurs
- **Alertes emploi** : configurez des alertes email pour les nouvelles offres correspondant à vos critères
- **Mon Espace** : suivi de votre dossier, historique, attestations téléchargeables

## Les services d'accompagnement

| Service | Pour qui | Comment y accéder |
|---------|----------|-------------------|
| Conseiller France Travail | Tous | Rendez-vous via votre espace |
| APEC | Cadres et ingénieurs (Bac+4/5) | Inscription gratuite sur apec.fr |
| Ateliers CV + entretien | Tous | Via votre conseiller France Travail |
| Bilan de compétences | Après 1 an de chômage | Financé par France Travail |

## Cumul emploi-chômage

Si vous retrouvez un emploi partiel ou des missions freelance pendant votre chômage :
- Vous pouvez **cumuler ARE + salaire** dans certaines limites
- Déclarez tout revenu dans votre actualisation mensuelle
- France Travail recalcule et ajuste le versement automatiquement

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L3v2abc" title="Cumul emploi chômage ARE salaire partiel déclaration actualisation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "0f1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
    title: "Se former pendant le chômage : CPF, VAE et dispositifs",
    lesson_order: 4, order: 4, duration_minutes: 16,
    video_url: "https://www.youtube.com/watch?v=tv04L4v1abc",
    resources: JSON.stringify([
      {"title":"Mon Compte Formation – CPF","url":"https://www.moncompteformation.gouv.fr","type":"link"},
      {"title":"France Travail – AIF formation","url":"https://www.francetravail.fr","type":"link"},
      {"title":"Service-Public – VAE validation acquis","url":"https://www.service-public.fr","type":"link"},
      {"title":"Legifrance – CPF droits","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"AFPA – Formations financées chômage","url":"https://www.afpa.fr","type":"link"},
      {"title":"GRETA – Formation adultes","url":"https://www.greta.fr","type":"link"},
      {"title":"OpenClassrooms – Formations certifiantes","url":"https://openclassrooms.com","type":"link"},
      {"title":"Coursera – MOOC certifiants France","url":"https://www.coursera.org","type":"link"}
    ]),
    content: `# Se former pendant le chômage : vos droits et options

La période de chômage est une opportunité unique pour se former et renforcer son profil. Plusieurs dispositifs permettent de le faire sans coût ou à faible coût.

## Le CPF (Compte Personnel de Formation)

Chaque salarié cumule des droits CPF :
- **500€/an** pour les salariés à temps plein (droits acquis sur votre espace moncompteformation.gouv.fr)
- **800€/an** pour les salariés peu qualifiés (sans Bac)
- Plafond : 5 000€ (8 000€ pour salariés peu qualifiés)

Pendant le chômage, vous conservez vos droits CPF et pouvez les utiliser librement.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L4v1abc" title="CPF compte formation chômage droits financement formation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## L'AIF (Aide Individuelle à la Formation)

Si votre formation répond à un besoin d'emploi identifié mais n'est pas financée par le CPF seul, France Travail peut financer via l'**AIF** :
- Demande via votre conseiller France Travail
- Format : financement partiel ou total des frais pédagogiques
- Condition : la formation doit être en lien avec un projet professionnel cohérent

## La VAE (Validation des Acquis de l'Expérience)

La VAE permet d'obtenir un **diplôme ou titre professionnel reconnu** grâce à votre expérience professionnelle, sans passer par la formation.

| Étape | Contenu |
|-------|---------|
| 1. Recevabilité | Dossier de candidature à l'organisme certificateur |
| 2. Livret 2 | Description détaillée de vos compétences et expériences |
| 3. Jury | Présentation orale devant un jury professionnel |
| 4. Diplôme | Validation totale ou partielle avec dispenses de modules |

## Formations en ligne à valoriser sur votre CV

- **OpenClassrooms** : parcours certifiants reconnus par l'État (Dev, Data, PME)
- **Coursera Google/IBM** : certifications reconnues en tech et data
- **LinkedIn Learning** : développement pro, outils, soft skills
- **MOOC France Université Numérique** (FUN) : cours des universités françaises, gratuits

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L4v2abc" title="VAE formation OpenClassrooms certifications chômage CPF AIF" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "0f1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
    title: "France Travail et les travailleurs étrangers : droits spécifiques",
    lesson_order: 5, order: 5, duration_minutes: 17,
    video_url: "https://www.youtube.com/watch?v=tv04L5v1abc",
    resources: JSON.stringify([
      {"title":"Service-Public – Chômage travailleur étranger","url":"https://www.service-public.fr","type":"link"},
      {"title":"France Travail – Étrangers et emploi","url":"https://www.francetravail.fr","type":"link"},
      {"title":"Interieur.gouv – Titre séjour et chômage","url":"https://www.interieur.gouv.fr","type":"link"},
      {"title":"Legifrance – Droits travailleurs étrangers","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"Ameli – Droits santé chômeur étranger","url":"https://www.ameli.fr","type":"link"},
      {"title":"CAF – Aides chômeur étranger","url":"https://www.caf.fr","type":"link"},
      {"title":"Defenseurdesdroits.fr – Discrimination emploi","url":"https://www.defenseurdesdroits.fr","type":"link"},
      {"title":"Campus France – Après diplôme rester France","url":"https://www.campusfrance.org","type":"link"}
    ]),
    content: `# France Travail et travailleurs étrangers : droits et spécificités

Les travailleurs étrangers ayant cotisé en France ont les **mêmes droits à l'assurance chômage** que les nationals français. Cependant, certains critères liés au titre de séjour s'appliquent.

## Conditions d'accès à l'ARE pour les non-ressortissants européens

Pour percevoir l'ARE, vous devez :
1. Avoir **travaillé et cotisé** en France (peu importe votre nationalité)
2. Disposer d'un **titre de séjour autorisant le travail** encore valide au moment de l'inscription
3. Résider **habituellement en France**

**Point important** : si votre titre de séjour expire pendant la période de chômage, vous devez le renouveler pour continuer à percevoir l'ARE.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L5v1abc" title="Étranger droits ARE chômage France titre séjour conditions" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Titre de séjour "salarié" pendant le chômage

Si vous étiez en titre de séjour "salarié" ou "travailleur temporaire" :
- Le renouvellement **est possible** même sans emploi, **si vous percevez l'ARE**
- La preuve d'inscription à France Travail et les bulletins ARE sont des justificatifs valides
- Le renouvellement se demande à la préfecture avant expiration du titre

**En cas de doute**, contactez la préfecture de votre département ou une association d'aide juridique aux étrangers.

## L'APS (Autorisation Provisoire de Séjour) pour diplômés

Si vous venez de terminer vos études en France (Master ou Bac+5 minimum) et cherchez un premier emploi :
- Vous avez droit à l'**APS** : une autorisation provisoire de 12 mois pour chercher un emploi en France
- L'APS autorise le travail à **60% d'un temps plein**
- Si vous trouvez un CDI pendant cette période → demande de titre "salarié"

## Documents à préparer pour France Travail

| Document | Pourquoi |
|----------|----------|
| Titre de séjour avec autorisation de travail | Condition obligatoire |
| Attestation employeur de fin de contrat | Calcul de l'ARE |
| Numéro de sécurité sociale | Identification dans le système |
| RIB français | Versement des allocations |

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L5v2abc" title="APS diplômé étranger France renouvellement titre séjour ARE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "0f1a2b3c-4d5e-6f7a-8b9c-0d1e2f3a4b5c",
    title: "Créer son entreprise ou devenir auto-entrepreneur en France",
    lesson_order: 6, order: 6, duration_minutes: 16,
    video_url: "https://www.youtube.com/watch?v=tv04L6v1abc",
    resources: JSON.stringify([
      {"title":"Autoentrepreneur.urssaf.fr – Inscription","url":"https://autoentrepreneur.urssaf.fr","type":"link"},
      {"title":"Service-Public – Créer auto-entreprise","url":"https://www.service-public.fr","type":"link"},
      {"title":"URSSAF – Cotisations auto-entrepreneur","url":"https://www.urssaf.fr","type":"link"},
      {"title":"BPI France – Aides création entreprise","url":"https://www.bpifrance.fr","type":"link"},
      {"title":"CCI – Accompagnement création","url":"https://www.cci.fr","type":"link"},
      {"title":"Impots.gouv – Fiscalité auto-entrepreneur","url":"https://www.impots.gouv.fr","type":"link"},
      {"title":"France Travail – ARCE aide création","url":"https://www.francetravail.fr","type":"link"},
      {"title":"Legifrance – Statut auto-entrepreneur","url":"https://www.legifrance.gouv.fr","type":"link"}
    ]),
    content: `# Devenir auto-entrepreneur en France : le guide pour les étudiants étrangers

Le statut d'auto-entrepreneur (micro-entrepreneur) est le moyen le plus simple de lancer une activité indépendante en France. Il est accessible aux étrangers sous certaines conditions.

## Le statut micro-entrepreneur : avantages et limites

| Avantage | Limite |
|----------|--------|
| Création en ligne en 15 minutes | Plafond de chiffre d'affaires (77 700€ services, 188 700€ commerce) |
| Comptabilité simplifiée | Pas de récupération de TVA |
| Charges proportionnelles au CA (0 CA = 0 charges) | Protection sociale minimale |
| Cumulable avec études ou emploi partiel | Pas adapté aux activités lourdes en investissement |

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L6v1abc" title="Auto-entrepreneur France création statut avantages démarches" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Conditions pour les étrangers non-européens

Pour créer une auto-entreprise en France, vous devez :
- Disposer d'un **titre de séjour autorisant l'exercice d'une activité non-salariée**
- Les titres "étudiant" **n'autorisent pas** généralement l'auto-entreprise (sauf si mention expresse)
- Les titres "salarié", "passeport talent", "talent entrepreneur" l'autorisent

Si vous voulez entreprendre en tant qu'étudiant étranger, renseignez-vous auprès de la préfecture — certains titres peuvent être amendés.

## L'ARCE : transformer ses droits chômage en capital

Si vous êtes au chômage et créez une entreprise, vous pouvez demander l'**ARCE** (Aide à la Reprise ou à la Création d'Entreprise) :
- Montant : **60% de vos droits ARE restants**, versé en deux fois
- Alternative à percevoir l'ARE mois par mois
- Accessible si votre projet a été validé par France Travail (attestation ACRE)

## Les taux de cotisations 2024

| Activité | Taux de charges |
|----------|----------------|
| Achat-revente, hébergement | 12,3% |
| Prestations de services commerciales | 21,2% |
| Prestations libérales (CIPAV) | 21,1% |
| Libéral SSI (médecins, etc.) | 21,2% |

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tv04L6v2abc" title="ARCE chômage entreprise ACRE cotisations auto-entrepreneur taux" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
]
