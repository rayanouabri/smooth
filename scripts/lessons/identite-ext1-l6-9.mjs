const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

async function appendAndPatch(id, addition) {
  const r = await fetch(BASE+'/rest/v1/lessons?id=eq.'+id+'&select=content', { headers: H });
  const [row] = await r.json();
  const newContent = row.content + addition;
  const w = newContent.split(/\s+/).filter(Boolean).length;
  const p = await fetch(BASE+'/rest/v1/lessons?id=eq.'+id, {
    method: 'PATCH', headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content: newContent })
  });
  console.log(p.ok ? '✅' : '❌ '+p.status, id.slice(0,8), w+' mots');
}

const EXT1_L6 = `
## La reconnaissance mutuelle des documents d'identité au sein de l'UE

L'Union européenne n'a pas encore atteint une harmonisation complète des documents d'identité — chaque État membre délivre ses propres documents selon ses standards nationaux. Cependant, les autorités des États membres sont tenues de reconnaître les documents d'identité officiels délivrés par d'autres États membres dans les situations couvertes par les traités européens (libre circulation des personnes, droit de résidence, exercice d'une activité professionnelle). Cette reconnaissance mutuelle obligatoire est un pilier de l'espace de liberté, de sécurité et de justice construit par l'UE.

Dans la pratique, certaines situations peuvent créer des difficultés de reconnaissance des documents étrangers. Un opérateur privé français (une banque, une agence immobilière) peut refuser un document d'identité étranger qu'il ne connaît pas ou ne peut pas vérifier l'authenticité — par exemple, un passeport dont les caractéristiques de sécurité lui sont inconnues. Cette réalité crée parfois des discriminations indirectes que le droit européen tend à combattre, mais que les individus doivent gérer pragmatiquement dans leur vie quotidienne.

## Les documents probatoires spécifiques aux démarches d'intégration

Certaines démarches liées à l'intégration en France requièrent des documents d'identité spécifiques qui vont au-delà de la simple preuve de l'identité civile. Pour l'inscription à l'OFPRA (Office Français de Protection des Réfugiés et Apatrides), qui instruit les demandes d'asile, les documents d'identité présentés sont analysés pour vérifier la nationalité et la situation administrative du demandeur dans son pays d'origine. Pour les procédures de rapprochement familial, les documents d'état civil étrangers doivent être authentifiés et traduits pour établir les liens de filiation.

Pour les personnes qui souhaitent accéder au marché du travail en France, la combinaison titre de séjour avec autorisation de travail + document d'identité constitue la preuve complète que les employeurs doivent vérifier avant d'embaucher un ressortissant étranger hors UE/EEE. Cette obligation de vérification, qui pèse sur l'employeur sous peine de sanctions pénales, signifie que les candidats étrangers à l'emploi doivent être prêts à présenter leurs documents dans des délais parfois courts lors des processus de recrutement.

## La conservation physique des documents originaux

La conservation physique des documents d'identité originaux est une responsabilité que tout adulte doit prendre au sérieux, mais qui revêt une importance particulière pour les étrangers dont les documents de séjour représentent leur autorisation légale de rester en France. Les principes de bonne conservation incluent le stockage dans un endroit dry et à l'abri de la lumière directe — les plastiques utilisés dans les titres de séjour modernes peuvent se dégrader avec les UV et l'humidité. L'utilisation d'un classeur ou d'un porte-documents organisé par type de document facilite la récupération rapide en cas de besoin.

Pour les documents les plus importants — passeport, titre de séjour, actes d'état civil originaux — l'utilisation d'un coffre-fort ou d'une boîte ignifuge à domicile, ou d'un coffre en banque, est une précaution justifiée. La plupart des banques proposent la location de coffres pour un tarif annuel raisonnable, et cette option est particulièrement pertinente pour les actes d'état civil irremplaçables (acte de naissance original, acte de mariage religieux, documents de filiation) qui ne peuvent pas être reconstitués en cas de destruction par un incendie ou une inondation.
`;

const EXT1_L7 = `
## La déclaration de perte ou vol à l'étranger : spécificités et démarches

Lorsque la perte ou le vol de documents survient pendant un voyage à l'étranger — y compris dans un autre pays de l'espace Schengen — les démarches prennent une dimension supplémentaire liée aux obstacles linguistiques et à la distance des services administratifs habituels. La première étape reste identique à la procédure sur le territoire français : déclarer la perte ou le vol auprès des autorités locales compétentes (police nationale du pays concerné) et obtenir un récépissé de cette déclaration, le plus souvent en plusieurs exemplaires.

Pour les documents français perdus à l'étranger (titre de séjour, passeport français pour les naturalisés), le consulat ou l'ambassade de France du pays où se trouve la personne est l'interlocuteur compétent. Le consulat peut délivrer un laissez-passer consulaire français permettant de rentrer en France, avec les documents justifiant de l'identité du demandeur disponibles dans le pays étranger. Pour les documents étrangers perdus à l'étranger dans un pays autre que le pays d'origine, la situation est plus complexe — le consulat du pays d'origine dans le pays étranger ou, à défaut, la notification au consulat du pays d'origine en France par tout moyen disponible est la voie à suivre.

## Les organismes d'aide aux victimes de vol de documents

En France, un réseau d'organismes publics et associatifs peut apporter une aide concrète aux personnes victimes de vol ou de perte de documents, notamment quand ces personnes sont en situation de vulnérabilité administrative. Les maisons France Services, présentes dans toutes les communes de plus de 20 000 habitants et dans de nombreuses zones rurales, sont des guichets polyvalents qui peuvent aider à effectuer les démarches administratives, y compris la saisie des formulaires en ligne pour la déclaration de perte et la demande de remplacement de documents.

Dans les grandes villes, les associations d'aide aux étrangers (Cimade, GISTI, Secours Catholique) ont des permanences spécialisées qui peuvent accompagner les étrangers victimes de vol de documents dans leurs démarches, communiquer en leur langue si nécessaire, et les orienter vers les services préfectoraux. Ces associations peuvent également aider à rédiger des courriers administratifs en français lorsque la maîtrise de la langue reste un obstacle. Le recours à ces structures est entièrement gratuit et ne nécessite pas de rendez-vous préalable dans de nombreux cas — la possibilité de se présenter directement est un avantage précieux dans l'urgence d'une perte de documents.

## Les délais de remplacement et les documents provisoires

Les délais de remplacement des différents types de documents d'identité varient considérablement et doivent être connus pour gérer sereinement leur remplacement. Pour la carte nationale d'identité française, le délai est actuellement de deux à six semaines selon les mairies et les périodes. Pour le passeport français, le délai est comparable mais peut être raccourci en demandant un rendez-vous en urgence auprès d'une mairie qui dispose d'un stock de passeports d'urgence — en cas de voyage imminent justifié, certaines mairies peuvent délivrer un passeport en 24 ou 48 heures.

Pour le titre de séjour remplacé après vol, les délais sont plus longs — plusieurs semaines à plusieurs mois selon la préfecture. Le récépissé de demande de remplacement est le document provisoire qui permet de justifier de la régularité du séjour pendant ce délai. Il est impératif de conserver ce récépissé et de le présenter dans toutes les situations où le titre de séjour lui-même serait normalement requis. Si le récépissé arrive à expiration avant que le nouveau titre ne soit délivré, une demande de renouvellement du récépissé auprès de la préfecture est nécessaire — les préfectures renouvellent généralement les récépissés sans difficulté dans les situations de perte ou de vol documentée.
`;

const EXT1_L8 = `
## Le visa de sortie dans les pays qui le requis

Certains pays d'origine exigent que leurs ressortissants obtiennent un visa de sortie avant de quitter leur territoire pour s'installer à l'étranger — une procédure moins courante dans les États libéraux modernes mais qui subsiste dans plusieurs pays à régimes politiques particuliers. Pour les personnes originaires de ces pays qui résident en France, la question du visa de sortie se pose lors de chaque retour dans le pays d'origine pour des visites familiales. Si le passeport du pays d'origine porte les traces de nombreuses sorties sans que les visa de sortie correspondants aient été obtenus régulièrement, des difficultés peuvent survenir lors du passage des frontières du pays en question.

Cette réalité pousse certains ressortissants à maintenir un contact consulaire actif avec l'ambassade de leur pays en France, pour s'assurer que toutes les formalités liées à leur statut de ressortissant vivant à l'étranger sont bien respectées. Les ambassades et consulats jouent ici un rôle d'intermédiaire entre la législation du pays d'origine et la situation pratique des ressortissants établis en France.

## La gestion des passeports lors du renouvellement du titre de séjour

Le renouvellement du titre de séjour est l'occasion systématique pour la préfecture de vérifier que le passeport étranger présenté est valide et cohérent avec les informations figurant dans le titre de séjour. Cette vérification peut mettre en lumière des incohérences qui méritent une attention préventive. Par exemple, si le titulaire a changé de passeport depuis l'obtention de son titre de séjour, les numéros de passeport peuvent différer entre les deux documents — ce qui n'est pas problématique en soi, mais qui doit être expliqué clairement lors de la démarche de renouvellement.

De même, si la photo figurant sur le titre de séjour date d'il y a plusieurs années et ne ressemble plus clairement au titulaire actuel (en raison d'un vieillissement naturel, d'une modification de l'apparence physique ou d'un changement de nom après mariage), les agents préfectoraux peuvent demander des vérifications supplémentaires. Avoir son passeport récent, avec sa photo récente, lors du renouvellement du titre de séjour permet généralement d'éviter ces questionnements.

## Le passeport biométrique et les systèmes de contrôle automatisés aux frontières

Le développement des systèmes de contrôle aux frontières automatisés (ABC — Automated Border Control) dans les aéroports internationaux modifie progressivement l'expérience du passage aux frontières pour les détenteurs de passeports biométriques. Ces systèmes lisent automatiquement la puce RFID contenant les données biométriques du passeport, comparent l'empreinte digitale ou la reconnaissance faciale du passager avec les données stockées dans la puce, et confrontent les données au registre des personnes interdites de territoire ou recherchées.

Pour les ressortissants étrangers titulaires d'un titre de séjour français souhaitant utiliser ces portiques automatiques lors de leurs voyages, les règles varient selon les aéroports et les pays de destination. En France (notamment à Roissy et à Orly), certains portiques sont ouverts aux ressortissants de pays tiers résidant légalement dans l'espace Schengen, sous conditions. Se renseigner auprès de la compagnie aérienne ou de l'aéroport de départ sur les conditions d'accès à ces portiques automatiques avant le voyage évite les mauvaises surprises.

## Les passeports diplomatiques et de service pour les fonctionnaires étrangers

Une catégorie particulière de passeports étrangers concerne les fonctionnaires étrangers affectés en France — diplomates, agents consulaires, fonctionnaires d'organisations internationales. Ces personnes utilisent des passeports diplomatiques ou de service délivrés par leur gouvernement, qui confèrent des statuts administratifs distincts du droit commun des étrangers. Les détenteurs de passeports diplomatiques accrédités en France bénéficient d'immunités et de facilités définies par la Convention de Vienne sur les relations diplomatiques de 1961 — ils ne sont pas soumis aux mêmes procédures de titre de séjour que les étrangers de droit commun.

Cependant, les membres de la famille des diplomates qui n'exercent pas eux-mêmes une fonction diplomatique officielle peuvent être soumis à des règles spécifiques, et les diplomates dont la mission en France se termine doivent régler leur situation administrative s'ils souhaitent rester en France dans un autre cadre après la fin de leur mission. La transition du statut diplomatique vers un statut de droit commun est une démarche qui doit être anticipée avec le Protocole du ministère des Affaires étrangères français et les services préfectoraux.
`;

const EXT1_L9 = `
## La CMU-C et la CSS : la complémentaire pour les plus modestes

La Complémentaire Santé Solidaire (CSS), anciennement CMU-C (Couverture Maladie Universelle Complémentaire), est une aide publique permettant aux personnes à faibles ressources de bénéficier d'une couverture complémentaire sans reste à charge pour les soins. Elle est accessible à toute personne résidant régulièrement en France depuis plus de trois mois, sans condition de nationalité, sous réserve que ses ressources soient inférieures au plafond fixé annuellement par décret (en 2024, ce plafond est d'environ 1 000 euros mensuels pour une personne seule).

Pour les étrangers nouvellement arrivés en France dont les ressources sont limitées le temps de s'établir professionnellement, la CSS est une aide précieuse qui garantit un accès aux soins sans avance de frais. La demande se fait auprès de la CPAM du lieu de résidence, avec les pièces habituelles d'identité et de justification des ressources. Une fois accordée, la CSS offre une prise en charge à 100% des soins dans la limite des tarifs de la Sécurité sociale, sans reste à charge — ce qui signifie que les consultations médicales, les médicaments génériques, et les soins dentaires et optiques de base sont couverts intégralement.

## La coordination entre la carte Vitale et la mutuelle complémentaire

La carte Vitale gère le remboursement de la part obligatoire de l'Assurance Maladie — environ 70% du tarif de conventionnement pour une consultation de généraliste, par exemple. La mutuelle complémentaire prend en charge le reste à charge — les 30% restants, augmentés des éventuels dépassements d'honoraires si le médecin pratique des tarifs supérieurs au tarif conventionnel. La coordination entre les deux est automatisée quand le professionnel de santé pratique la télétransmission : la feuille de soins est envoyée simultanément à la CPAM et à la mutuelle, et les deux organismes remboursent leurs parts respectives au patient.

Cette coordination automatique nécessite que les informations de la mutuelle soient à jour dans la carte Vitale et dans les systèmes de la CPAM. Lors d'un changement de mutuelle — qui survient typiquement lors d'un changement d'emploi, d'une résiliation de contrat pour raisons de coût, ou d'une migration vers la CSS — il est important de mettre à jour ces informations dans les deux sens : informer la nouvelle mutuelle de son NIR et de sa situation de couverture maladie, et mettre à jour la carte Vitale en borne ou en agence CPAM pour intégrer les nouvelles informations de mutuelle. Omettre cette mise à jour peut conduire à des retards dans les remboursements complémentaires.

## Ameli.fr et la gestion des soins pour les familles

Le compte ameli.fr permet de gérer non seulement les remboursements personnels mais aussi ceux des ayants droit — enfants mineurs rattachés au régime de l'assuré. Les parents peuvent consulter les remboursements effectués pour leurs enfants, télécharger les attestations de droits qui peuvent être demandées par les médecins, garderies ou établissements scolaires, et gérer les changements de situation (rattachement d'un nouveau bébé après naissance, détachement d'un enfant devenu autonome).

Pour les familles étrangères dont les enfants sont nés en France et affiliés dès la naissance à l'Assurance Maladie par le biais du régime de leurs parents, le suivi via ameli.fr est la voie la plus efficace pour vérifier que toutes les démarches post-naissance ont bien été enregistrées. Un enfant né en France est automatiquement affilié à l'Assurance Maladie si au moins l'un de ses parents est lui-même affilié — mais une vérification sur ameli.fr que le numéro de Sécurité sociale provisoire de l'enfant est bien créé et que ses droits sont ouverts est recommandée dans les semaines suivant la naissance.

## Le médecin traitant et son rôle dans le parcours de soins

Déclarer un médecin traitant est une démarche importante pour optimiser les remboursements de l'Assurance Maladie française. Le médecin traitant — qui peut être un médecin généraliste ou un spécialiste si la situation l'exige — est le pivot du parcours de soins coordonné. Lorsqu'une personne consulte son médecin traitant, le taux de remboursement de l'Assurance Maladie est de 70% du tarif de base. Lorsqu'elle consulte un autre médecin sans passer par son médecin traitant (hors urgence ou situation exceptionnelle), le taux de remboursement est réduit à 30% — une différence significative qui peut être coûteuse sur la durée.

La déclaration du médecin traitant se fait en ligne sur ameli.fr ou par formulaire papier signé par le médecin choisi. Le médecin doit donner son accord pour être déclaré comme médecin traitant d'un patient — ce qui signifie qu'il accepte de prendre en charge ce patient pour ses soins courants et de le suivre dans la durée. Pour les étrangers nouvellement arrivés en France qui cherchent un médecin traitant dans un contexte de désert médical croissant, la recherche sur le site ameli.fr des médecins qui acceptent des nouveaux patients dans leur secteur est une démarche recommandée.
`;

await appendAndPatch('a7a6e229-2b37-48a5-80d2-ab3914db026d', EXT1_L6);
await appendAndPatch('1cb6c47a-d05f-4860-b778-79cf5cb7719a', EXT1_L7);
await appendAndPatch('edd463f6-1f57-4bda-b174-96754d0a67c6', EXT1_L8);
await appendAndPatch('0a9a5b53-ae1f-442b-bd5f-a6538622e740', EXT1_L9);
