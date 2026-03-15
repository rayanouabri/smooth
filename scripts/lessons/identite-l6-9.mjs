const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

async function patch(id, content) {
  const r = await fetch(`${BASE}/rest/v1/lessons?id=eq.${id}`, {
    method: 'PATCH', headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content })
  });
  const w = content.split(/\s+/).filter(Boolean).length;
  console.log(r.ok ? '✅' : '❌ '+r.status, id.slice(0,8), w+' mots');
}

const L6 = `# Les Pièces d'Identité en France : Passeport, Titre de Séjour et Légalité

L'identité légale en France repose sur un ensemble de documents officiels dont le rôle, la portée et les conditions d'obtention varient selon la nationalité et le statut administratif de leur titulaire. Comprendre quels documents constituent des preuves d'identité reconnues en France, dans quelles situations chacun d'eux peut être utilisé, et comment gérer efficacement ces documents au quotidien est une compétence pratique fondamentale pour toute personne résidant en France.

## Le passeport : document de voyage et pièce d'identité internationale

Le passeport est le document de voyage universel qui permet à son titulaire de franchir les frontières internationales et de prouver son identité et sa nationalité à l'étranger. En France, les ressortissants français peuvent obtenir un passeport biométrique auprès de la mairie équipée du dispositif de recueil, selon une procédure similaire à celle de la carte nationale d'identité.

Pour les étrangers résidant en France, le passeport est un document émis par leur pays de nationalité — les ambassades et consulats de leur pays en France sont les interlocuteurs compétents pour son renouvellement ou son remplacement. Il est important de maintenir son passeport étranger valide pendant toute la durée de son séjour en France, car il est souvent requis conjointement avec le titre de séjour dans les démarches administratives et les voyages à l'international.

La date de validité du passeport étranger doit être surveillée avec attention. Un passeport expirant pendant un voyage à l'étranger peut créer des difficultés pour le retour en France — même si le titre de séjour français est valide, un passeport périmé aux frontières peut poser des problèmes selon les pays de transit. Anticiper le renouvellement du passeport étranger avec plusieurs mois d'avance est une précaution administrative recommandée.

## La Carte Nationale d'Identité pour les ressortissants de l'UE

Les ressortissants des États membres de l'Union européenne peuvent s'installer et résider en France sans avoir besoin d'un titre de séjour spécifique s'ils remplissent certaines conditions (activité professionnelle, ressources suffisantes, inscription dans une formation). Dans ce contexte, leur carte nationale d'identité de leur pays d'origine joue un rôle analogue à celui du passeport pour identifier son titulaire et prouver sa nationalité européenne.

Pour les Européens résidant en France, le maintien en validité de leur carte nationale d'identité nationale est important pour les démarches administratives françaises — notamment pour les interactions avec les banques, les entreprises et les administrations qui demandent une pièce d'identité. La carte d'identité de leur pays d'origine est généralement acceptée dans les mêmes conditions qu'un passeport européen.

## Les documents d'identité pour les mineurs

Les mineurs ont des règles spécifiques en termes de documents d'identité. Pour les enfants de nationalité française, une carte nationale d'identité ou un passeport peut être obtenu dès la naissance. Pour les enfants de parents étrangers, le titre de séjour des parents peut inclure une mention des enfants mineurs — mais cette mention sur le titre des parents ne remplace pas un document personnel pour l'enfant.

Pour les voyages à l'étranger impliquant des mineurs, les exigences varient selon les pays de destination et les compagnies de transport. Certains pays exigent une autorisation de sortie du territoire pour les mineurs qui voyagent avec un seul parent ou sans leurs parents — ce document, délivré gratuitement via le service en ligne du ministère de l'Intérieur français, est une précaution administrative qui évite des situations inconfortables aux frontières.

## La légalité des documents produits : vigilance sur l'authenticité

La présentation de documents d'identité falsifiés ou contrefaits est un délit grave en France, sanctionné pénalement et administrativement. Toutes les administrations françaises disposent de procédures et d'outils de vérification de l'authenticité des documents présentés — les titres de séjour modernes, en particulier, comportent de nombreux éléments de sécurité (hologrammes, encres spéciales, micropuces) qui rendent leur contrefaçon techniquement difficile et facilement détectable.

Pour les personnes qui reçoivent de la part de prestataires de services (voyagistes, agents immobiliers, banques) des demandes de documents d'identité, il est important de ne fournir que des copies légalisées ou certifiées conformes des documents originaux — et non les originaux eux-mêmes. La conservation des originaux en lieu sûr et la fourniture de copies certifiées réduisent les risques liés à la perte ou au vol de documents dans ces transactions.

## La gestion de l'identité dans les transactions commerciales privées

De nombreuses transactions commerciales privées en France requièrent la présentation ou la communication d'une pièce d'identité. La location d'appartement, l'ouverture de compte bancaire, la souscription d'une assurance, l'achat de certains produits ou services : toutes ces situations impliquent des vérifications d'identité encadrées par la loi.

Le Règlement Général sur la Protection des Données (RGPD), applicable dans l'ensemble de l'Union européenne, encadre strictement la collecte et le traitement des données d'identité par les acteurs privés. Les entreprises et professionnels ne peuvent collecter que les données d'identité strictement nécessaires à la finalité pour laquelle elles sont demandées, et doivent les traiter avec confidentialité. En cas de doute sur la légitimité d'une demande de pièce d'identité, il est possible de demander à l'acteur concerné de justifier le fondement légal de cette collecte.
`;

const L7 = `# En Cas de Perte ou Vol de Documents : Démarches et Urgences

La perte ou le vol de documents d'identité est une situation déstabilisante qui survient à des moments souvent imprévisibles — lors d'un voyage, d'un déménagement, d'une agression. Savoir exactement quoi faire dans les premières heures et les premiers jours qui suivent la perte ou le vol de ses documents est une préparation pratique qui peut faire la différence entre une situation rapidement résolue et une spirale administrative longue et stressante.

## La déclaration de perte ou vol : première étape indispensable

La première démarche à effectuer en cas de perte ou de vol de documents d'identité est de déclarer la perte ou le vol auprès des autorités compétentes. En cas de vol, cette déclaration est faite auprès de la police nationale (commissariat de police) ou de la gendarmerie nationale (brigade de gendarmerie) — ces deux corps de police peuvent recevoir une déclaration de vol, indépendamment du lieu exact où le vol s'est produit.

En cas de perte (sans indice de vol), une déclaration peut être faite en mairie ou auprès de la police, selon le document perdu. Pour une carte nationale d'identité ou un titre de séjour, une déclaration auprès de la police est recommandée même en cas de perte simple — cela signale officiellement le document dans les fichiers de documents perdus ou volés, ce qui prévient son utilisation frauduleuse par un tiers qui l'aurait trouvé.

Le récépissé de déclaration de perte ou vol est un document essentiel que vous devez conserver : il servira de preuve dans vos démarches de remplacement et peut constituer une preuve d'identité temporaire dans certaines situations.

## Le remplacement du titre de séjour perdu ou volé

Le remplacement d'un titre de séjour perdu ou volé est une démarche urgente qui doit être initiée le plus rapidement possible, car être sans titre de séjour est une situation d'irrégularité même si elle est non intentionnelle et peut être justifiée. La démarche se fait auprès de la préfecture du lieu de résidence, avec le récépissé de déclaration de perte ou vol.

Les pièces à fournir pour le remplacement comprennent généralement le récépissé de déclaration, une pièce d'identité complémentaire (passeport étranger), un justificatif de domicile récent, et les photos d'identité aux normes. La préfecture peut demander des frais de remplacement si le titre de séjour est remplacé avant son terme normal dans certaines circonstances — vérifier les modalités spécifiques de la préfecture concernée est recommandé.

En attendant le remplacement du titre, la préfecture peut délivrer un récépissé de demande de remplacement qui permet de justifier de la régularité du séjour pendant le délai de traitement. Ce document temporaire doit être conservé et présenté dans toutes les situations où le titre de séjour serait normalement requis.

## Le remplacement du passeport étranger à l'étranger

Si le passeport étranger est perdu ou volé pendant un voyage en France ou à l'étranger, le consulat ou l'ambassade du pays d'origine est l'interlocuteur compétent. Les procédures varient selon les pays mais impliquent généralement une déclaration de perte ou vol auprès des autorités locales (en France, auprès de la police), la présentation à l'ambassade ou au consulat avec d'autres justificatifs d'identité (photocopies de documents), et la demande d'un titre de voyage d'urgence pour rentrer dans son pays d'origine si nécessaire.

Pour les étrangers dont le passeport est perdu ou volé en France et qui doivent voyager dans les jours suivants, contacter l'ambassade ou le consulat de leur pays avec des copies de documents d'identité (photos, copies certifiées conformes que vous auriez conservées) est la priorité. C'est pourquoi il est fortement recommandé de conserver des copies numérisées de ses documents importants dans un espace de stockage sécurisé accessible en ligne.

## La perte de documents lors d'un vol avec violence

La perte de documents lors d'un vol avec violence — agression dans la rue, vol à l'arraché, cambriolage — est une situation particulièrement éprouvante qui génère non seulement le stress de la perte des documents mais aussi le traumatisme de l'agression. Dans cette situation, la priorité est d'abord la sécurité personnelle, puis la déclaration de vol aux autorités.

Des services d'aide aux victimes existent dans toutes les grandes villes françaises — les maisons de justice et du droit, les associations d'aide aux victimes agréées par le ministère de la Justice — qui peuvent accompagner les personnes victimes de vol avec violence dans leurs démarches administratives consécutives, y compris la reconstitution de leurs documents d'identité. Ces services sont gratuits et accessibles sans condition de nationalité.

## La prévention : les bonnes pratiques de conservation des documents

La meilleure protection contre les conséquences d'une perte ou d'un vol de documents est une préparation préventive. Cette préparation comprend trois volets. La numérisation préalable des documents importants — titre de séjour, passeport, carte Vitale, permis de conduire, actes d'état civil importants — et leur stockage dans un espace sécurisé accessible en ligne (service cloud chiffré, coffre-fort numérique) permet de retrouver rapidement les informations nécessaires aux démarches de remplacement.

La conservation de copies papier certifiées conformes dans un endroit séparé des originaux — chez un membre de la famille, dans un placard ignifuge — offre une sécurité supplémentaire. La constitution d'un « dossier de crise » physique ou numérique, qui regroupe les contacts utiles en cas de perte ou vol (numéro du consulat de votre pays en France, numéro de la préfecture, contacts des associations d'aide) permet d'agir efficacement dans les premières heures sans avoir à rechercher ces informations dans un état de stress élevé.
`;

const L8 = `# Le Passeport Étranger en France : Utilisation, Renouvellement et Perte

Le passeport étranger est le document le plus fondamental pour un étranger résidant en France : c'est la preuve de sa nationalité, son document de voyage principal, et souvent la pièce d'identité complémentaire exigée conjointement avec le titre de séjour dans les démarches administratives. Maintenir son passeport étranger en validité tout au long de son séjour en France est une obligation pratique incontournable, et comprendre comment gérer ce document depuis la France est une compétence administrative essentielle.

## Le passeport étranger et les démarches administratives françaises

Dans la grande majorité des démarches administratives françaises impliquant un étranger, le titre de séjour seul suffit comme pièce d'identité. Cependant, dans certaines situations — notamment lors des premières demandes de titre de séjour, lors des démarches à la préfecture pour toute demande de titre de première fois, et lors des demandes auprès de certains organismes (banques, certains services consulaires) — le passeport étranger est demandé en complément du titre de séjour.

La raison de cette double exigence est que le titre de séjour atteste de la régularité du séjour en France mais ne prouve pas à lui seul la nationalité du titulaire — c'est le passeport qui certifie la nationalité étrangère. La combinaison des deux documents permet à l'administration ou au prestataire de service de vérifier simultanément l'identité de la personne, sa nationalité, et sa régularité administrative en France.

## Le renouvellement du passeport étranger depuis la France

Le renouvellement d'un passeport étranger arrivant à expiration se fait auprès de l'ambassade ou du consulat du pays d'origine présent en France. Presque tous les pays ayant une représentation diplomatique en France proposent ce service de renouvellement pour leurs ressortissants résidant en France.

La procédure varie selon les pays — les délais, les documents requis, les frais, et les modalités de prise de rendez-vous diffèrent d'une ambassade à l'autre. Il est donc nécessaire de consulter le site web de l'ambassade ou du consulat de son pays pour connaître les exigences spécifiques. De façon générale, la procédure implique une photo d'identité récente, le passeport actuel (même s'il est périmé ou peu de temps avant sa péremption), un formulaire de demande rempli, le paiement de frais consulaires, et parfois un justificatif de résidence en France.

Les délais de renouvellement peuvent être plus longs que prévu si l'ambassade ou le consulat du pays d'origine est très sollicité. Il est donc recommandé d'anticiper le renouvellement au moins trois à six mois avant la date d'expiration du passeport, particulièrement si des voyages internationaux sont prévus dans les mois à venir.

## L'impact de l'expiration du passeport sur le titre de séjour en France

L'expiration du passeport étranger ne remet pas automatiquement en cause la validité du titre de séjour français, dont la durée de validité est indépendante. Un étranger dont le passeport expire mais dont le titre de séjour est toujours valide reste en situation régulière en France — la régularité du séjour est déterminée par le titre de séjour, non par le passeport.

Cependant, l'expiration du passeport crée des situations pratiques difficiles. Les déplacements à l'international deviennent impossibles avec un passeport périmé. Certains organismes peuvent refuser de reconnaître un passeport périmé comme preuve d'identité valide. Lors du renouvellement du titre de séjour, la préfecture peut demander un passeport en cours de validité — et certaines préfectures refusent de renouveler un titre de séjour si le passeport est périmé, même si le titre lui-même est encore valide.

Pour éviter ces situations inconfortables, il est recommandé de s'assurer que la durée de validité du passeport étranger s'étend au-delà de la durée de validité du titre de séjour actuel — ou de renouveler le passeport avant le prochain renouvellement du titre de séjour.

## Les passeports de certains pays et leurs particularités

Certains pays ont des particularités dans leurs documents de voyage qui méritent une mention spécifique. Les passeports biométriques, qui contiennent une puce électronique avec les données biométriques du titulaire (photo et empreintes digitales), sont désormais utilisés par la grande majorité des pays. Ces passeports biométriques sont généralement reconnus dans les systèmes de contrôle aux frontières modernes et facilitent les passages aux frontières automatisés.

Certains pays délivrent des passeports d'urgence à durée de validité limitée (un à deux ans) pour les situation d'urgence. Ces passeports, bien que reconnus comme documents de voyage, peuvent poser des questions spécifiques lors des contrôles aux frontières ou lors des demandes de visa — il est recommandé de vérifier leur acceptabilité dans les pays de destination avant de voyager avec un passeport d'urgence.

Les cas des personnes apatrides — sans nationalité reconnue par aucun État — sont traités différemment. Ces personnes ne possèdent pas de passeport national et doivent utiliser un titre de voyage délivré par le pays qui les reconnaît comme apatrides ou bénéficiaires de protection internationale.

## La gestion du passeport multiple pour les binationaux

Les binationaux — qui possèdent deux nationalités et donc potentiellement deux passeports — ont une liberté de choix dans l'utilisation de leurs documents de voyage. Pour les binationaux dont l'une des nationalités est française, il est généralement recommandé d'entrer et sortir de France avec le passeport français ou la carte nationale d'identité française — l'usage du passeport étranger dans ces cas peut créer des complications dans les registres d'entrée et sortie du territoire.

La possession de deux passeports implique aussi deux gestions administratives distinctes — l'un auprès des autorités françaises, l'autre auprès des autorités du pays d'origine. Maintenir les deux passeports en validité simultanément est une responsabilité que les binationaux doivent gérer activement pour éviter des situations où l'un des deux passeports est périmé au moment où il est nécessaire.
`;

const L9 = `# La Carte Vitale : Demande, Utilisation et Remboursement sur Ameli

La carte Vitale est le sésame d'accès aux soins remboursés dans le système de santé français. Cette carte à puce verte, délivrée à toute personne affiliée à l'Assurance Maladie française, permet la télétransmission automatique des feuilles de soins aux organismes de remboursement — supprimant pour la plupart des actes médicaux la nécessité de remplir des papiers. Comprendre comment obtenir sa carte Vitale, comment l'utiliser efficacement et comment suivre ses remboursements est une compétence pratique fondamentale pour toute personne résidant en France.

## L'affiliation à l'Assurance Maladie : pré-requis à la carte Vitale

La carte Vitale n'est délivrée qu'aux personnes affectées à une caisse d'assurance maladie. Pour les salariés, cette affiliation est réalisée automatiquement via les déclarations de l'employeur lors de l'embauche. Pour les non-salariés, travailleurs indépendants, étudiants et autres catégories, des démarches d'affiliation spécifiques sont nécessaires.

Pour les étrangers nouvellement arrivés en France, l'affiliation à la CPAM (Caisse Primaire d'Assurance Maladie) est la première étape. Elle nécessite de justifier de sa résidence régulière en France (titre de séjour valide), de son identité (passeport et titre de séjour), et parfois d'un acte de naissance traduit et légalisé. Le délai d'affiliation peut varier, mais une fois réalisée, les droits à l'assurance maladie sont ouverts et la demande de carte Vitale peut être initiée.

## La demande de carte Vitale : quand et comment

La demande de carte Vitale se fait une fois l'affiliation à l'Assurance Maladie établie et le numéro de Sécurité sociale définitif attribué. Pour les personnes qui disposaient auparavant d'un numéro provisoire, la demande de carte Vitale doit attendre l'attribution du numéro définitif.

La demande peut être initiée de plusieurs façons. En ligne, via le compte ameli.fr, la procédure est la plus simple : il suffit de renseigner ses informations et de télécharger une photo d'identité respectant les normes. En agence, la CPAM dispose de points d'accueil où les agents peuvent traiter les demandes de carte Vitale avec vérification physique d'identité. Certaines pharmacies sont également équipées de bornes de demande de carte Vitale.

Le délai de traitement de la demande est généralement de trois à six semaines. La carte Vitale est ensuite envoyée par courrier à l'adresse déclarée auprès de l'Assurance Maladie.

## L'utilisation de la carte Vitale chez les professionnels de santé

La carte Vitale est utilisée lors de chaque consultation médicale, visite chez un professionnel de santé (médecin généraliste, spécialiste, dentiste, kinésithérapeute, infirmier), achat de médicaments en pharmacie ou analyse dans un laboratoire. Il suffit de l'insérer dans le lecteur de carte du professionnel pour que les informations de droits à l'assurance maladie soient lues et que la feuille de soins soit transmise automatiquement à la CPAM.

Cette télétransmission automatique simplifie considérablement les remboursements : dans la grande majorité des cas, les remboursements sont crédités sur le compte bancaire du titulaire dans les trois à cinq jours ouvrés suivant la consultation, sans aucune démarche de la part du patient. Il n'y a pas de formulaire à remplir, pas de document à envoyer — la carte Vitale fait tout le travail administratif.

En l'absence de carte Vitale — lors de l'attente de réception de la première carte, ou en cas de perte temporaire — une attestation de droits délivrée par la CPAM peut être présentée au professionnel de santé. Ce dernier peut alors établir une feuille de soins papier qui sera envoyée à la CPAM pour traitement manuel. Les remboursements sont alors plus longs mais restent accessibles.

## Le suivi des remboursements sur ameli.fr

Le portail ameli.fr est le service en ligne de l'Assurance Maladie français qui permet à chaque assuré de suivre ses remboursements, vérifier ses droits, télécharger son attestation de droits, mettre à jour ses informations personnelles, et effectuer certaines démarches administratives. L'inscription sur ameli.fr est gratuite et ne nécessite qu'un numéro de Sécurité sociale et une adresse email.

Via ameli.fr, il est possible de consulter l'historique de tous les remboursements effectués sur les vingt-quatre derniers mois, avec le détail by transaction (date de soin, type d'acte, montant remboursé, délai de remboursement). Cette transparence permettant de contrôler que les remboursements sont effectués correctement est utile pour détecter d'éventuelles anomalies ou fraudes à la carte Vitale.

## La protection contre l'utilisation frauduleuse de la carte Vitale

La carte Vitale est un document à valeur financière réelle — elle permet l'accès à des soins remboursés et son utilisation frauduleuse par un tiers peut engendrer des remboursements indus des soins qu'on n'a pas reçus. En cas de perte ou de vol de la carte Vitale, il est important de la signaler à la CPAM dans les meilleurs délais pour que la carte soit invalidée dans les systèmes et qu'une nouvelle carte soit émise.

Il est également utile de surveiller régulièrement sur ameli.fr les remboursements effectués pour détecter des soins qui ne correspondent pas à des consultations réelles. En cas de détection d'un remboursement suspect, le signalement à la CPAM doit être fait immédiatement. L'utilisation frauduleuse des données de santé est un délit grave qui engage la responsabilité de l'utilisateur mais aussi, dans certains cas, celle du professionnel de santé mal intentionné.

## La mise à jour de la carte Vitale

La carte Vitale doit être mise à jour régulièrement pour refléter les évolutions de la situation administrative du titulaire. Un changement d'adresse, un changement de situation professionnelle, l'ajout ou le retrait d'ayants droit (enfants mineurs, conjoint), ou encore l'ajout d'une mutuelle complémentaire : toutes ces évolutions doivent être reflétées dans la carte pour que les remboursements soient traités correctement.

La mise à jour se fait dans les bornes multiservices présentes dans les pharmacies et agences CPAM — il suffit d'insérer la carte Vitale dans la borne et de la maintenir en contact quelques secondes pour que les nouvelles informations soient téléchargées depuis les serveurs de l'Assurance Maladie. Si la borne indique que la mise à jour n'est pas requise, c'est que la carte est déjà à jour. Une mise à jour annuelle est généralement recommandée à titre préventif.
`;

await patch('a7a6e229-2b37-48a5-80d2-ab3914db026d', L6);
await patch('1cb6c47a-d05f-4860-b778-79cf5cb7719a', L7);
await patch('edd463f6-1f57-4bda-b174-96754d0a67c6', L8);
await patch('0a9a5b53-ae1f-442b-bd5f-a6538622e740', L9);
