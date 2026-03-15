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

const ADD_L5 = `
## Les associations sportives et le bien-être physique sur le campus

La pratique sportive régulière est l'un des investissements les plus rentables que puisse faire un étudiant universitaire pour sa réussite académique. Une recherche extensive en neurosciences et en psychologie de l'apprentissage démontre que l'exercice physique régulier améliore les fonctions cognitives, la mémoire de travail et la concentration, et réduit les niveaux de cortisol (l'hormone du stress) qui interfèrent avec l'apprentissage et la mémorisation. Les associations sportives universitaires sont le vecteur institutionnel de cette pratique à un coût minimal.

En France, les universités disposent de services universitaires des activités physiques et sportives (SUAPS) qui organisent une large offre d'activités sportives à des tarifs très réduits. L'affiliation au SUAPS coûte généralement entre 15 et 40 euros par semestre et donne accès à des dizaines de disciplines sportives, des créneaux de pratique adaptés aux emplois du temps chargés des étudiants, et des compétitions inter-universitaires. Les sports d'équipe — football, basketball, volleyball, rugby — offrent l'avantage supplémentaire de créer des occasions de socialisation et de construction de liens avec des camarades qui partagent le même intérêt.

Pour les étudiants étrangers, les associations sportives constituent souvent la voie d'intégration la plus naturelle dans la vie universitaire française. Le sport transcende les barrières linguistiques et culturelles — on peut faire partie d'une équipe de football et créer des amitiés solides avec des étudiants français même avec un niveau de français encore imparfait. Ces liens de terrain ont une qualité affective particulière qui construit des relations durables au-delà de la période universitaire.

## Les dispositifs de tutorat et d'accompagnement académique

Au-delà des associations à dimension sportive ou culturelle, les universités françaises proposent des dispositifs formels d'accompagnement académique qui peuvent être décisifs pour les étudiants qui rencontrent des difficultés dans les premiers mois de leur cursus. Le tutorat pédagogique — organisé par les universités avec des étudiants avancés formés pour cette mission — permet de bénéficier d'un accompagnement individualisé ou en petit groupe sur les matières difficiles, les méthodes de travail académiques et les exigences spécifiques des différentes disciplines.

Les permanences d'aide aux devoirs organisées par les UFR (Unités de Formation et de Recherche) ou par des associations étudiantes constituent un complément utile aux tutorials formels. Ces permanences, où des étudiants de niveaux avancés restent disponibles à des horaires fixes pour répondre aux questions de leurs camarades de niveaux inférieurs, permettent d'obtenir des explications pédagogiques rapides sur des points précis du cours qui ne sont pas clairs.

## L'engagement associatif comme format de développement de compétences

L'engagement dans le bureau d'une association étudiante — en tant que membre du bureau, trésorier, secrétaire ou responsable d'une commission — est une expérience qui développe des compétences transversales précieuses sur le marché du travail. La gestion d'un budget associatif, l'organisation d'un événement, la communication avec des partenaires extérieurs, la coordination d'une équipe de bénévoles : autant de compétences qui figurent en bonne place dans les CV des diplômés qui ont su investir leur temps universitaire au-delà des seuls cours.

Les recruteurs français connaissent bien la valeur des expériences associatives universitaires et les apprécient dans les dossiers des jeunes diplômés. Un ancien président de BDE ou un ancien membre actif d'une association caritative étudiante démontre des capacités de leadership et d'organisation qui complètent utilement un parcours académique, fût-il brillant. Pour les étudiants étrangers qui souhaitent s'insérer dans le marché du travail français après leur diplôme, l'engagement associatif est un signal fort d'intégration dans la culture universitaire française.

## La vie culturelle universitaire : cinéma, théâtre, musique, expositions

Les campus universitaires français sont des espaces culturels vivants qui proposent une programmation culturelle accessible à un tarif étudiant ou gratuitement. Les ciné-clubs universitaires organisent des projections de films, souvent des œuvres art et essai ou des classiques du cinéma mondial avec des présentations ou des débats. Les associations théâtrales montent des spectacles et offrent des ateliers de pratique amateur. Les orchestres et chorales universitaires accueillent des musiciens et vocalistes de tous niveaux. Ces activités culturelles constituent des occasions uniques d'immersion dans la culture française — le cinéma français, le théâtre français, les arts plastiques — à travers une expérience active et participative plutôt que passive et touristique.
`;

const ADD_L6 = `
## La procédure d'inscription en ligne : étape par étape

La digitalisation croissante des procédures universitaires a conduit la plupart des établissements à proposer une inscription entièrement en ligne dans un premier temps, suivie d'un complément en présentiel pour la vérification des originaux et la remise des documents. Cette dématérialisation, qui simplifie les démarches pour les étudiants qui maîtrisent bien les outils numériques, peut être source de difficultés pour ceux qui sont moins à l'aise avec les portails administratifs en ligne ou qui disposent d'une connexion internet insuffisante.

La procédure en ligne commence généralement par la création d'un compte étudiant sur le portail de l'université, via une adresse email personnelle et un numéro de dossier ou de candidature. Ce compte sera l'identifiant permanent de l'étudiant dans le système informatique de l'université pendant toute la durée de ses études — il est donc important de choisir un email principal régulièrement consulté et de noter soigneusement les identifiants créés. La perte des identifiants de connexion au portail peut compliquer considérablement les démarches administratives ultérieures.

La saisie des informations personnelles doit être soignée et correspondre exactement aux documents officiels. Les noms, prénoms, dates et lieux de naissance doivent être identiques aux informations figurant sur le passeport — toute discordance peut créer des problèmes lors de la vérification des originaux ou, pire, sur les diplômes délivrés. Pour les noms contenant des caractères spéciaux ou des graphies propres aux alphabets non latins, une attention particulière est requise pour la transcription en caractères latins.

## La carte étudiante : délais d'obtention et statut provisoire

Lors de l'inscription administrative, un délai de quelques jours à quelques semaines peut s'écouler avant que la carte étudiante physique soit disponible. Pendant ce délai, l'université remet généralement un récépissé d'inscription ou une attestation provisoire qui peut tenir lieu de carte étudiante dans la plupart des situations (accès aux bibliothèques, restaurants universitaires, examens). Il est important de conserver ce document provisoire et de le présenter à chaque occasion jusqu'à réception de la carte définitive.

La carte étudiant est généralement valable pour l'année universitaire en cours et doit être renouvelée chaque année lors de la réinscription. Dans les universités qui ont adopté la carte à puce électronique, le renouvellement peut se faire par simple mise à jour des données sans nécessiter l'émission d'une nouvelle carte physique — une économie de ressources et de temps appréciable.

## Le rôle du service des étudiants étrangers

La plupart des universités françaises de taille significative disposent d'un service dédié aux étudiants étrangers, parfois intégré au service des Relations Internationales (RI), parfois distinct. Ce service est votre interlocuteur privilégié pour toutes les questions spécifiques à votre situation d'étudiant international : questions sur les équivalences de diplômes, informations sur les procédures d'inscription spécifiques aux étrangers, aide pour les démarches liées au titre de séjour, orientation vers les aides sociales spécifiques, et organisation d'événements d'intégration.

Ce service est souvent méconnu des étudiants étrangers qui, intimidés à leur arrivée, n'osent pas demander de l'aide. Or ses conseillers sont précisément formés pour accompagner les situations complexes des étudiants internationaux et sont habitués à répondre à des questions d'une grande variété. Prendre contact avec ce service dès les premières semaines de l'inscription, même sans question urgente précise, permet de créer une relation qui facilitera les démarches ultérieures.

## La réinscription annuelle : anticipation et vigilance

La réinscription annuelle est une étape souvent négligée par les étudiants étrangers qui pensent — à tort — que leur inscription est automatiquement renouvelée d'une année à l'autre. Cette méprise peut avoir des conséquences graves : une absence de réinscription dans les délais entraîne une interruption du statut d'étudiant, qui emporte à son tour l'impossibilité de passer les examens, la perte des aides sociales et potentiellement des complications avec le titre de séjour.

Les délais de réinscription sont publiés sur le site de chaque université dès le mois de mai ou juin précédant la rentrée suivante. Pour les étudiants étrangers, la réinscription est conditionnée à la validité du titre de séjour — une vigilance particulière s'impose donc sur l'anticipation du renouvellement du titre de séjour bien avant la date d'expiration, idéalement deux à trois mois à l'avance pour éviter tout risque de blocage.
`;

const ADD_L7 = `
## Les grandes écoles et leur spécificité dans le paysage mondial

Les grandes écoles françaises constituent une catégorie d'établissements sans équivalent dans la plupart des autres pays du monde, et leur compréhension requiert une mise en perspective culturelle. Dans les pays anglosaxons, les institutions d'élite (Harvard, Oxford, MIT) sont des universités au sens complet du terme — leur corps étudiant s'étend de la licence au doctorat, elles regroupent des dizaines de disciplines et leurs capacités d'accueil sont importantes. Les grandes écoles françaises, au contraire, sont généralement des établissements de taille modeste, hautement spécialisés, qui recrutent via des concours sélectifs et dispensent des formations professionnelles de haut niveau dans un domaine précis.

Cette spécificité française a des origines historiques profondes. Les grandes écoles ont été créées à partir du 17e et 18e siècle (l'École Polytechnique en 1794, l'École Normale Supérieure en 1795) avec une mission précise : former les cadres dont l'État français avait besoin pour ses projets de modernisation — ingénieurs, militaires, enseignants, administrateurs. Cette logique de formation des élites pour le service de l'État a marqué durablement la culture des grandes écoles, qui valorisent l'excellence au service du collectif autant que la performance individuelle.

## Les classes préparatoires : le sas d'accès aux grandes écoles

Pour la grande majorité des étudiants français qui intègrent une grande école, le parcours passe par deux années de classes préparatoires aux grandes écoles (CPGE) après le baccalauréat. Ces classes, dispensées dans des lycées publics et privés sélectifs, sont renommées pour leur intensité pédagogique — une charge de travail hebdomadaire qui peut dépasser 60 heures, des évaluations constantes (khôlles orales hebdomadaires, devoirs surveillés mensuels), une compétition permanente entre des étudiants en général issus des terminales les plus sélectives.

Les CPGE se divisent en plusieurs filières selon les concours visés : les Classes Préparatoires Scientifiques (MPSI, PCSI, PTSI, BCPST) préparent aux concours des grandes écoles d'ingénieurs ; les Classes Préparatoires Économiques et Commerciales (ECG, ECS, ECT) préparent aux concours des grandes écoles de commerce ; les Classes Préparatoires Littéraires (L, LSO, LSH) préparent aux concours des ENS et de Sciences Po. À l'issue des deux années de CPGE, les étudiants passent des concours nationaux dont les résultats déterminent l'admission dans les différentes grandes écoles par ordre de mérite et de préférence.

## L'accès international aux grandes écoles : les voies d'admission directe

Pour les étudiants étrangers formés hors des classes préparatoires françaises, l'accès aux grandes écoles est possible mais limité. La plupart des grandes écoles proposent des voies d'admission internationale — parfois appelées « admissions sur titre » ou « admissions parallèles » — qui permettent à des étudiants ayant suivi des formations équivalentes à l'étranger de candidater directement pour une intégration en deuxième ou troisième année du cursus de la grande école.

Les critères de sélection pour ces admissions internationales sont généralement excellents : un dossier académique exceptionnel, des lettres de recommandation de professeurs reconnus, souvent des tests de compétences (GMAT, GRE, tests spécifiques à l'école), et une maîtrise satisfaisante du français. Dans le cas des grandes écoles de commerce, une expérience professionnelle ou des stages de qualité peuvent également être pris en compte. Ces admissions sont numériquement limitées — quelques dizaines de places par an dans les plus grandes écoles — et la compétition est intense à l'échelle mondiale.

## La réforme des lycées professionnels et les nouvelles voies de formation

Le paysage de l'enseignement professionnel français s'est également transformé ces dernières années avec les réformes des lycées professionnels et la montée en puissance de l'apprentissage comme voie de formation initiale. Le contrat d'apprentissage permet de poursuivre des études supérieures (du BTS au titre d'ingénieur) tout en étant salarié d'une entreprise, en alternant périodes d'études au centre de formation et périodes de travail en entreprise. Cette formule, longtemps cantonnée aux formations courtes et techniques, s'est considérablement développée jusqu'aux masters et aux grandes écoles au cours des années 2010.

Pour les étudiants étrangers, l'apprentissage représente une opportunité particulièrement intéressante : en tant qu'apprentis, ils ont le statut de salarié et non d'étudiant, ce qui modifie leur rapport au titre de séjour (autorisation de travail incluse dans le statut) et leur garantit une expérience professionnelle rémunérée en France pendant leurs études. Les contraintes sont celles de tout salarié en apprentissage : respect d'un emploi du temps partagé, engagement contractuel envers l'entreprise, et parfois une mobilité géographique selon les besoins de l'employeur.
`;

const ADD_L8 = `
## La stratégie de candidature sur Parcoursup pour les étudiants internationaux

La situation des étudiants étrangers sur Parcoursup est plus complexe que celle des candidats français habitués au système. Les étudiants étrangers résidant en France avec un numéro INE (identifiant national étudiant, attribué lors de la scolarisation dans un lycée français) candidatent sur Parcoursup dans les mêmes conditions que les lycéens français. Ceux qui arrivent directement de l'étranger, ressortissants de la plupart des pays hors Europe, passent en revanche par la procédure Études en France gérée par Campus France, qui est distincte de Parcoursup et doit être initiée plusieurs mois avant la rentrée souhaitée.

La procédure Études en France impose un calendrier beaucoup plus anticipé : les candidatures s'ouvrent en octobre-novembre pour une rentrée de septembre de l'année suivante. Cette anticipation de près d'un an surprend souvent les candidats habitués à des procédures plus rapides dans leur pays d'origine. Elle s'explique par la nécessité de vérifier le dossier académique, d'organiser un entretien dans le pays d'origine, et de traiter la demande de visa dans des délais raisonnables.

## La gestion de la liste d'attente sur Parcoursup

La liste d'attente est une situation fréquente sur Parcoursup, particulièrement pour les formations très demandées dans les grandes villes. Un candidat en liste d'attente n'est pas refusé — il est simplement en attente qu'une place se libère suite au refus ou à l'acceptation définitive d'un candidat classé avant lui. La position en liste d'attente peut évoluer très rapidement, passant de plusieurs centaines à quelques dizaines en quelques jours lors des périodes de forte activité (début de la phase d'admission en juin, phases de « tri » en juillet).

La gestion émotionnelle de la liste d'attente est un aspect important de l'expérience Parcoursup. L'incertitude prolongée et la comparaison constante avec d'autres candidats qui reçoivent des propositions peuvent générer un stress significatif. Il est utile de garder à l'esprit que la liste d'attente n'est pas un jugement définitif sur la valeur du dossier — elle reflète simplement une réalité mécanique de l'offre et de la demande dans une formation donnée.

## Mon Master et les spécificités de l'admission en deuxième cycle

La plateforme Mon Master, lancée en 2023 pour centraliser les admissions en master, a représenté une avancée significative en termes de transparence et d'égalité d'accès pour les candidats à des formations de deuxième cycle. Avant sa création, les candidats devaient gérer des dizaines de procédures parallèles avec des calendriers disparates, des dossiers différents et des modalités de communication hétérogènes. Cette fragmentation pénalisait particulièrement les étudiants internationaux et les étudiants de première génération, moins familiers avec les codes implicites des différentes institutions.

La plateforme centralise les candidatures mais laisse aux établissements une autonomie totale dans leur processus d'évaluation des dossiers. Certains masters examinent les dossiers exclusivement sur la base du dossier écrit. D'autres organisent des entretiens individuels ou collectifs en présentiel ou en vidéo pour les candidats présélectionnés. D'autres encore font passer des tests de niveau ou demandent des productions académiques (exposé, analyse de texte, dissertation courte). Cette diversité des processus de sélection doit être anticipée dans la préparation des candidatures.

## Les stratégies de candidature en master pour les étudiants étrangers

Pour un étudiant étranger qui candidate à un master français, quelques enjeux spécifiques méritent une attention particulière. La question de la langue est centrale : même pour les masters généralistes en sciences humaines et sociales qui n'exigent pas formellement de certification de niveau de français, un dossier rédigé dans un français académique impeccable — sans fautes grossières, avec une syntaxe claire et un vocabulaire précis — donne une impression de sérieux et de maîtrise qui joue favorablement dans l'évaluation. Inversement, un dossier truffé de fautes signale une préparation insuffisante qui peut dissuader même un comité d'admission bienveillant.

La cohérence narrative du dossier est le second enjeu majeur. Les comités d'admission de master recherchent une trajectoire logique : pourquoi cette discipline, pourquoi ce niveau de spécialisation, pourquoi cette université précisément, comment ce master s'inscrit dans un projet professionnel ou académique à moyen terme ? Un candidat étranger dont le parcours est atypique par rapport aux candidats français du même programme a tout intérêt à en faire une force plutôt qu'une faiblesse — en expliquant en quoi sa perspective internationale, son expérience dans un autre système, ou sa trajectoire non-linéaire enrichit le profil attendu et contribuera positivement au programme.
`;

await appendAndPatch('28169f27-de81-47cb-995b-b1f89aa9b9c3', ADD_L5);
await appendAndPatch('aaa8ee5c-c7c9-4264-a061-29eea0adc297', ADD_L6);
await appendAndPatch('c7d769eb-22d9-4d69-bc52-4261b428b47a', ADD_L7);
await appendAndPatch('c97fea4d-3d2d-4b1d-a5b7-3d4bde406dfa', ADD_L8);
