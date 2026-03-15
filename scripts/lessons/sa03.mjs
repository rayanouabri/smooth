export default [
  {
    course_id: "fb5f1708-95b4-403f-ae8d-ea0b18ad7611",
    title: "Comprendre le numéro de Sécurité Sociale en France",
    lesson_order: 1, order: 1, duration_minutes: 17,
    video_url: "https://www.youtube.com/watch?v=sT7uUvVwWxY",
    resources: JSON.stringify([
      {"title":"Ameli – Numéro Sécurité Sociale","url":"https://www.ameli.fr","type":"link"},
      {"title":"CPAM – S'immatriculer Sécurité Sociale","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – NIR immatriculation","url":"https://www.service-public.fr","type":"link"},
      {"title":"Campus France – Sécu sociale étudiants","url":"https://www.campusfrance.org","type":"link"},
      {"title":"Étudiant.gouv – Sécurité Sociale guide","url":"https://www.etudiant.gouv.fr","type":"link"},
      {"title":"60 Millions – Numéro sécu décryptage","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"CNOUS – Affiliation SS étudiant","url":"https://www.cnous.fr","type":"link"},
      {"title":"Légifrance – Code Sécurité Sociale","url":"https://www.legifrance.gouv.fr","type":"link"}
    ]),
    content: `# Le numéro de Sécurité Sociale en France : à quoi il sert

Le numéro de Sécurité Sociale (NIR — Numéro d'Inscription au Répertoire) est votre identifiant personnel dans le système de santé français. Il ouvre l'accès à l'ensemble des remboursements de soins.

## Structure du numéro de Sécurité Sociale

Un numéro de Sécurité Sociale français contient 15 chiffres (y compris la clé de contrôle de 2 chiffres) :

**1 23 04 75 123 456 78**

- **1** : sexe (1 = homme, 2 = femme)
- **23** : année de naissance (2023 → 23)
- **04** : mois de naissance
- **75** : département de naissance (75 = Paris)
- **123** : commune de naissance
- **456** : rang de naissance dans la commune
- **78** : clé de contrôle

Pour les étrangers nés hors de France, les codes de département et commune sont remplacés par des codes spécifiques selon le pays de naissance.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/sT7uUvVwWxY" title="Numéro Sécurité Sociale France NIR décryptage structure" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Le numéro provisoire vs numéro définitif

En attendant l'attribution de votre numéro définitif, la CPAM peut vous attribuer un **numéro provisoire** (commençant par 7 ou 8). Ce numéro provisoire vous permet d'être remboursé, mais n'est pas permanent.

Le numéro définitif (commençant par 1 ou 2) vous est attribué après validation de votre état civil par l'INSEE.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/tU8vVwWxXyZ" title="Numéro Sécurité Sociale provisoire définitif INSEE CPAM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "fb5f1708-95b4-403f-ae8d-ea0b18ad7611",
    title: "S'immatriculer à la Sécurité Sociale : démarches pour étrangers",
    lesson_order: 2, order: 2, duration_minutes: 20,
    video_url: "https://www.youtube.com/watch?v=uV9wWxXyYzA",
    resources: JSON.stringify([
      {"title":"Ameli – Immatriculation étudiant étranger","url":"https://www.ameli.fr","type":"link"},
      {"title":"CPAM – Dossier affiliation étranger","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – S'affilier Sécurité Sociale","url":"https://www.service-public.fr","type":"link"},
      {"title":"Campus France – CPAM démarches","url":"https://www.campusfrance.org","type":"link"},
      {"title":"60 Millions – Sécurité Sociale étranger","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"CNOUS – Affiliation UE hors UE","url":"https://www.cnous.fr","type":"link"},
      {"title":"Étudiant.gouv – CPAM guide","url":"https://www.etudiant.gouv.fr","type":"link"},
      {"title":"Légifrance – Affiliation SS étrangers","url":"https://www.legifrance.gouv.fr","type":"link"}
    ]),
    content: `# S'immatriculer à la Sécurité Sociale en tant qu'étudiant étranger

Pour accéder aux remboursements de soins en France, vous devez vous immatriculer à la Sécurité Sociale. Voici la procédure selon votre situation.

## Étudiants de l'UE / EEE

Si vous êtes ressortissant d'un pays de l'Union Européenne :
- Si vous avez une **Carte Européenne d'Assurance Maladie (CEAM)** délivrée par votre pays, elle vous couvre temporairement en France pour les soins urgents
- Pour une couverture complète et durable, immatriculez-vous à la CPAM française

## Étudiants hors UE : la procédure d'immatriculation

Rendez-vous (ou écrivez) à la CPAM (Caisse Primaire d'Assurance Maladie) de votre département avec :
- Passeport + visa/titre de séjour
- Acte de naissance traduit par un traducteur assermenté (ou apostillé)
- Justificatif de scolarité
- RIB pour les remboursements
- Formulaire S1106 (disponible sur ameli.fr)

<iframe width="100%" height="480" src="https://www.youtube.com/embed/uV9wWxXyYzA" title="Immatriculation CPAM étudiant étranger hors UE documents" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Délai d'attribution du numéro

Le traitement prend généralement **1 à 3 mois**. Pendant ce délai, vous pouvez quand même consulter — gardez les feuilles de soins et demandez le remboursement à votre CPAM une fois immatriculé.

## Affiliation automatique pour certains étudiants

Depuis 2019, tous les étudiants inscrits dans une université française sont automatiquement rattachés à la CPAM de leur lieu d'études. Si vous étiez couvert par la LMDE ou une mutuelle étudiante, la gestion est désormais directement assurée par la CPAM.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/vW0xXyYzZaB" title="Affiliation automatique CPAM université étudiant France 2019" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "fb5f1708-95b4-403f-ae8d-ea0b18ad7611",
    title: "Créer son compte Ameli et gérer son dossier santé",
    lesson_order: 3, order: 3, duration_minutes: 16,
    video_url: "https://www.youtube.com/watch?v=wX1yYzZaBbC",
    resources: JSON.stringify([
      {"title":"Ameli – Mon Compte Ameli","url":"https://www.ameli.fr","type":"link"},
      {"title":"CPAM – Espace assuré","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – Ameli compte guide","url":"https://www.service-public.fr","type":"link"},
      {"title":"Mon Espace Santé – Dossier médical","url":"https://www.monespacesante.fr","type":"link"},
      {"title":"60 Millions – Ameli fonctionnalités","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"Étudiant.gouv – Compte Ameli étudiant","url":"https://www.etudiant.gouv.fr","type":"link"},
      {"title":"Ameli – Attestation droits","url":"https://www.ameli.fr","type":"link"},
      {"title":"Ameli – Relevé remboursements","url":"https://www.ameli.fr","type":"link"}
    ]),
    content: `# Créer son compte Ameli : accéder à ses remboursements

Ameli.fr est le portail de la Sécurité Sociale française. Il vous permet de gérer votre assurance maladie, consulter vos remboursements et télécharger vos attestations.

## Créer votre compte Ameli

Rendez-vous sur **ameli.fr** et cliquez "Mon compte" → "Créer mon compte assuré". Vous aurez besoin de :
- Votre numéro de Sécurité Sociale (provisoire ou définitif)
- Votre date de naissance
- Une adresse email

Un code de vérification sera envoyé par courrier ou email. L'activation prend 24–72h.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/wX1yYzZaBbC" title="Créer compte Ameli numéro sécu remboursements France" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Ce que vous pouvez faire sur Ameli

**Suivi des remboursements** : visualisez tous vos soins remboursés et leur montant. Pratique pour vérifier qu'un remboursement est bien arrivé.

**Attestation de droits** : document PDF officiel prouvant que vous êtes bien couvert par la Sécurité Sociale. Nécessaire pour certains dossiers (CAF, universités, organismes divers).

**Déclaration de médecin traitant** : obligation légale pour être bien remboursé — à faire via Ameli.

**Signalement de changement de situation** : nouvelle adresse, changement de mutuelle.

## Mon Espace Santé : le dossier médical partagé

**Mon Espace Santé** (monespacesante.fr) est le dossier médical numérique de chaque assuré. Il centralise vos ordonnances, résultats d'analyses et historique de soins. Les médecins peuvent y accéder avec votre accord.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/xY2zZaBbCcD" title="Mon Espace Santé dossier médical partagé ordonnances France" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "fb5f1708-95b4-403f-ae8d-ea0b18ad7611",
    title: "La Carte Vitale : obtention et utilisation",
    lesson_order: 4, order: 4, duration_minutes: 16,
    video_url: "https://www.youtube.com/watch?v=yZ3aBbCcDdE",
    resources: JSON.stringify([
      {"title":"Ameli – Carte Vitale demande","url":"https://www.ameli.fr","type":"link"},
      {"title":"CPAM – Première carte Vitale","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – Carte Vitale usage","url":"https://www.service-public.fr","type":"link"},
      {"title":"60 Millions – Carte Vitale perte vol","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"Mon Espace Santé – Carte Vitale numérique","url":"https://www.monespacesante.fr","type":"link"},
      {"title":"Ameli App – Application mobile","url":"https://www.ameli.fr","type":"link"},
      {"title":"Étudiant.gouv – Carte Vitale étudiant","url":"https://www.etudiant.gouv.fr","type":"link"},
      {"title":"Service-Public – Carte Vitale provisoire","url":"https://www.service-public.fr","type":"link"}
    ]),
    content: `# La Carte Vitale : votre pass pour les remboursements santé

La Carte Vitale est la carte d'assurance maladie française. Elle permet le remboursement automatique de vos soins. Voici comment l'obtenir et l'utiliser.

## Obtenir sa Carte Vitale

Après votre immatriculation à la CPAM et l'attribution de votre numéro, vous recevez un formulaire de demande de carte vitale. Retournez-le avec une photo d'identité.

La carte est envoyée par courrier en quelques semaines. En attendant, vous pouvez obtenir une **attestation de droits** sur ameli.fr qui sert de justificatif auprès des professionnels de santé.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/yZ3aBbCcDdE" title="Carte Vitale obtention délai photo demande France" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Utiliser sa Carte Vitale chez le médecin et à la pharmacie

Présentez simplement votre carte à la fin de la consultation ou à la pharmacie. Le professionnel de santé scanne la carte avec son lecteur, et le remboursement part automatiquement. Vous récupérez généralement l'argent sur votre compte bancaire en 48–72h.

## Mettre à jour sa Carte Vitale

La carte doit être mise à jour si vos droits changent (nouvelle mutuelle, changement de situation). Les bornes de mise à jour sont disponibles dans les CPAM et certaines pharmacies.

## La Carte Vitale numérique

Depuis 2021, vous pouvez télécharger la **Carte Vitale numérique** sur l'application **Ameli** (disponible sur iOS et Android). Elle a la même valeur que la carte physique chez la plupart des professionnels de santé.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/zA4bBcCdDeF" title="Carte Vitale numérique app Ameli mise à jour borne" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "fb5f1708-95b4-403f-ae8d-ea0b18ad7611",
    title: "Que faire si vous n'avez pas encore votre numéro de Sécu",
    lesson_order: 5, order: 5, duration_minutes: 15,
    video_url: "https://www.youtube.com/watch?v=aB5cCdDeEfG",
    resources: JSON.stringify([
      {"title":"Ameli – Sans numéro de sécu","url":"https://www.ameli.fr","type":"link"},
      {"title":"CPAM – Urgence sans couverture","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – Aide médicale état AME","url":"https://www.service-public.fr","type":"link"},
      {"title":"60 Millions – Sans SS soins France","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"PUMA – Protection universelle maladie","url":"https://www.ameli.fr","type":"link"},
      {"title":"Médecins Sans Frontières – Accès soins","url":"https://www.msf.fr","type":"link"},
      {"title":"PASS – Permanences accès soins santé","url":"https://www.service-public.fr","type":"link"},
      {"title":"Étudiant.gouv – Attendre numéro sécu","url":"https://www.etudiant.gouv.fr","type":"link"}
    ]),
    content: `# Sans numéro de Sécurité Sociale : comment accéder aux soins

L'immatriculation à la Sécurité Sociale prend du temps. En attendant, voici comment accéder aux soins sans vous retrouver bloqué.

## Pendant la période d'attente : conserver les feuilles de soins

Même sans numéro, vous pouvez consulter un médecin ou aller à la pharmacie. Demandez au professionnel de santé une **feuille de soins papier** (Cerfa 12049). Une fois votre numéro attribué, envoyez ces feuilles à votre CPAM pour être remboursé rétroactivement.

Les remboursements rétroactifs sont acceptés — conservez TOUTES vos ordonnances et feuilles de soins.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/aB5cCdDeEfG" title="Sans numéro sécu soins France feuille soins remboursement" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## La PUMA (Protection Universelle Maladie)

Depuis 2016, la PUMA garantit à toute personne résidant légalement et de manière stable en France un accès à la prise en charge de ses frais de santé. Même si vous attendez votre numéro définitif, vous êtes protégé.

## Les urgences hospitalières : toujours accessibles

En cas d'urgence, les hôpitaux publics ont l'obligation d'accueillir et soigner toute personne, quelle que soit sa situation administrative ou de couverture santé. Une régularisation administrative suit après la prise en charge médicale.

## Les PASS (Permanences d'Accès aux Soins de Santé)

Les PASS, présents dans les hôpitaux publics, offrent des consultations médicales et sociales gratuites pour les personnes sans couverture santé ou en situation précaire. Si vous êtes bloqué administrativement, les PASS peuvent vous aider.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/bC6dDeEfFgH" title="PASS permanence accès soins urgences PUMA France" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
  },
  {
    course_id: "fb5f1708-95b4-403f-ae8d-ea0b18ad7611",
    title: "Sécurité Sociale et départ de France : que faire ?",
    lesson_order: 6, order: 6, duration_minutes: 14,
    video_url: "https://www.youtube.com/watch?v=cD7eEfFgGhI",
    resources: JSON.stringify([
      {"title":"Ameli – Quitter France assurance","url":"https://www.ameli.fr","type":"link"},
      {"title":"Service-Public – CEAM carte européenne","url":"https://www.service-public.fr","type":"link"},
      {"title":"60 Millions – Partir France droits sécu","url":"https://www.60millions-mag.com","type":"link"},
      {"title":"CPAM – Fermer dossier départ","url":"https://www.ameli.fr","type":"link"},
      {"title":"Légifrance – SS résidence France","url":"https://www.legifrance.gouv.fr","type":"link"},
      {"title":"Campus France – Après études retour","url":"https://www.campusfrance.org","type":"link"},
      {"title":"Ameli – Portabilité droits Europe","url":"https://www.ameli.fr","type":"link"},
      {"title":"EUR-Lex – Coordination Sécurité Sociale UE","url":"https://eur-lex.europa.eu","type":"link"}
    ]),
    content: `# Quitter la France : vos droits à la Sécurité Sociale

Si vous quittez la France temporairement ou définitivement, voici ce qui se passe avec votre couverture santé.

## Droits en vigueur pendant votre séjour en France

Vos droits à la Sécurité Sociale française restent actifs tant que vous résidez régulièrement en France. Si vous partez en vacances à l'étranger (moins de 3 mois), vos droits sont maintenus.

## La Carte Européenne d'Assurance Maladie (CEAM)

Si vous êtes couvert par la Sécurité Sociale française et voyagez dans un pays de l'UE/EEE, demandez votre **CEAM** sur ameli.fr. Elle vous couvre pour les soins médicalement nécessaires lors de voyages temporaires en Europe (urgences, soins qui ne peuvent pas attendre votre retour).

La CEAM est gratuite et s'obtient en quelques jours par voie postale ou immédiatement en version numérique sur l'application Ameli.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/cD7eEfFgGhI" title="CEAM carte européenne assurance maladie voyage UE France" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Départ définitif de France

Si vous retournez définitivement dans votre pays, signalez-le à votre CPAM. Vos droits s'éteignent à la date de cessation de résidence en France.

Si vous partez travailler dans un pays de l'UE, vos droits peuvent être transférables grâce aux règlements de coordination européenne.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/dE8fFgGhHiJ" title="Départ France droits Sécurité Sociale CPAM cessation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**Conseil** : avant votre départ, téléchargez sur ameli.fr un relevé complet de votre historique de soins — utile si vous devez prouver votre suivi médical dans votre prochain pays de résidence.`,
  },
]
