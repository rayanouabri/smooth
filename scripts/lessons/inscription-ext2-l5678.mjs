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

const ADD2_L5 = `
## L'identité numérique universitaire et les réseaux sociaux académiques

La vie universitaire contemporaine se déroule simultanément en présentiel sur le campus et dans un espace numérique qui a profondément transformé les pratiques académiques et sociales. Les réseaux sociaux académiques (ResearchGate, Academia.edu) permettent aux étudiants avancés de partager leurs travaux et de suivre les publications de chercheurs dans leur domaine. LinkedIn est devenu un outil incontournable de construction du réseau professionnel dès la licence, permettant de connecter avec des anciens étudiants de la même université, des intervenants professionnels des cours, et des entreprises qui recrutent.

Pour les étudiants étrangers qui construisent une identité professionnelle en France, la présence sur LinkedIn est particulièrement stratégique : elle permet de montrer son parcours international, de partager des articles ou réflexions qui démontrent une expertise en cours de construction, et de signaler sa disponibilité pour des stages ou des premiers emplois aux recruteurs qui utilisent ce réseau pour identifier des candidats en amont des processus de recrutement formels.

## Le réseau des anciens élèves comme ressource d'intégration

Les associations d'anciens élèves (alumni) des universités françaises constituent un réseau souvent sous-exploité par les étudiants courants, qui ne pensent pas encore à leur réseau de sortie d'études en étant encore en cours de formation. Pourtant, les alumni des meilleures universités et grandes écoles françaises sont souvent très actifs dans le soutien aux étudiants actuels — via des mentorings, des témoignages sur les métiers et les trajectoires professionnelles, des recommandations pour des stages ou des premiers emplois, et des contributions financières aux associations étudiantes.

Rejoindre l'association des anciens de son université ou de sa filière dès la deuxième année d'études permet de construire des connexions précieuses avec des professionnels établis dans son domaine. Pour les étudiants étrangers qui envisagent de rester travailler en France après leurs études, ce réseau constitue souvent la source la plus efficace de premières opportunités professionnelles — les recrutements par réseau représentant une part tout aussi importante que les candidatures formelles dans le marché de l'emploi français.

## L'intégration par la culture : comprendre les codes implicites

L'intégration dans la culture universitaire française dépasse les aspects purement institutionnels pour inclure une dimension culturelle implicite que les instances officielles ne communiquent pas explicitement. La culture académique française valorise la distance critique, le débat argumenté et la capacité à contester une thèse de façon constructive — ce qui surprend souvent les étudiants étrangers habitués à des cultures académiques où l'accord respectueux avec l'enseignant est la norme.

En France, un étudiant qui soulève une objection pertinente à ce que dit un enseignant, formulée avec courtoisie et fondée sur un argument solide, est généralement bien reçu — l'enseignant peut même être stimulé par la qualité de l'objection. Cette licéité du désaccord argumenté est un code culturel implicite qui représente une opportunité pour les étudiants étrangers de plus en plus à l'aise en français : participer intellectuellement aux cours plutôt que d'être des observateurs passifs est le meilleur moyen de progresser rapidement et d'être perçu comme un étudiant engagé.

## L'expérience du choc culturel et les stratégies de résilience

L'expérience du choc culturel est un phénomène psychologique documenté qui affecte la quasi-totalité des personnes qui s'installent dans un pays dont la culture est significativement différente de leur culture d'origine. Il se manifeste par des phases alternantes d'enthousiasme initial (la « lune de miel » culturelle des premières semaines), de désenchantement et de frustration lorsque les différences commencent à peser (à partir du deuxième ou troisième mois), d'adaptation progressive, et finalement d'intégration où les deux cultures coexistent confortablement.

Reconnaître ce processus comme normal et prévisible est la première étape de la résilience. Plusieurs stratégies aident à traverser la phase de désenchantement sans se décourager : maintenir des contacts réguliers avec sa famille et ses amis restés dans le pays d'origine pour ne pas se sentir seul ; rejoindre une communauté d'expatriés ou d'étudiants internationaux qui comprennent cette expérience de l'intérieur ; s'accorder des moments de reconnexion avec sa culture d'origine (cuisine, musique, films, lectures) sans se sentir coupable de se ressourcer ; et progresser activement dans la langue française pour réduire la barrière qui isole des interactions quotidiennes.
`;

const ADD2_L6 = `
## L'Environnement Numérique de Travail et les identités numériques

L'inscription administrative crée plusieurs identités numériques liées à votre statut d'étudiant dans l'université. La plus importante est votre adresse email universitaire officielle, de la forme prenom.nom@univ-xxx.fr ou une variante proche selon les établissements. Cette adresse email est l'adresse de communication officielle avec l'université : toutes les correspondances administratives importantes (convocations aux examens, notifications de résultats, communications pédagogiques des enseignants, alertes administratives) sont envoyées à cette adresse. L'ignorer ou ne pas la consulter régulièrement peut conduire à manquer des informations critiques.

La gestion des identités numériques multiples est une réalité du quotidien universitaire contemporain. En plus de l'adresse email universitaire, vous aurez un identifiant pour la plateforme pédagogique de dépôt de cours (Moodle, Blackboard), potentiellement un identifiant distinct pour la plateforme e-learning des langues, un autre pour la réservation de salles de sport, un pour la bibliothèque numérique. Un gestionnaire de mots de passe (Bitwarden, Keepass) permet de stocker et de générer des mots de passe robustes pour chacune de ces identités sans les oublier.

## Le rôle du secrétariat pédagogique dans la vie administrative

Le secrétariat pédagogique de votre UFR (Unité de Formation et de Recherche) est l'interface administrative quotidienne entre les étudiants et l'institution. C'est là que vous obtenez vos certificats de scolarité, que vous signalez absences et situations particulières aux examens, que vous déposez les demandes de dérogation ou de reports d'épreuve, et que vous récupérez les convocations et les relevés de notes officiels. Identifier rapidement l'emplacement et les horaires de votre secrétariat pédagogique est une priorité de la première semaine.

Les personnels des secrétariats pédagogiques sont souvent submergés de demandes, particulièrement en début d'année universitaire. La patience et la courtoisie dans les échanges avec ces personnels — même lorsque les délais semblent excessifs ou les réponses insuffisantes — sont essentielles pour maintenir une relation de travail constructive. Une attitude agressive ou impatiente est contre-productive et peut nuire à la qualité du service reçu sur le long terme.

## Les recours administratifs en cas de problème à l'inscription

Les problèmes à l'inscription — refus d'inscription pour des raisons contestables, dossier bloqué pour des raisons administratives, situations d'urgence liées au titre de séjour — peuvent être traités par différents mécanismes de recours. Le premier niveau est le dialogue direct avec le service des inscriptions pour comprendre le problème et proposer des solutions. Si ce dialogue n'aboutit pas, le second niveau est la demande d'un entretien avec le directeur du service des inscriptions ou le responsable de la scolarité.

En cas de blocage persistant, vous pouvez solliciter l'intervention du médiateur de l'université — un officier indépendant dont le rôle est de faciliter la résolution des conflits entre les étudiants et l'administration. Si toutes les voies internes sont épuisées sans résultat satisfaisant, le recours au médiateur de l'éducation nationale (défenseur des droits dans le secteur éducatif) est une option légale qui peut débloquer des situations apparemment sans issue.

## La préparation budgétaire avant l'inscription définitive

L'inscription administrative mobilise des ressources financières qui doivent être planifiées avec soin, d'autant plus que les versements se concentrent sur une courte période en août-septembre. Les droits d'inscription (2 770 euros pour une licence si vous êtes extra-européen non exonéré) sont généralement à régler en une fois lors de l'inscription, parfois en deux versements selon les établissements. La CVEC (103 euros) doit être payée avant de s'inscrire. Le dépôt de garantie du logement (un mois de loyer) et le premier loyer sont à payer simultanément.

En anticipant ce pic de dépenses, vous pouvez préparer le financement nécessaire avant de quitter votre pays d'origine — en sollicitant les aides de votre famille pour le démarrage, en vérifiant si votre bourse (si vous en avez une) couvre ces frais initiaux, ou en ouvrant un compte bancaire en France à distance avant votre arrivée pour pouvoir effectuer les virements nécessaires dès les premières heures.
`;

const ADD2_L7 = `
## L'université et le monde professionnel : les liens institutionnels

Les universités françaises entretiennent avec le monde professionnel des liens institutionnels qui ont considérablement évolué depuis les réformes des années 2000. Les conseils de perfectionnement des formations, qui incluent des représentants des employeurs et des professionnels du secteur, permettent d'adapter les contenus pédagogiques aux besoins évolutifs du marché du travail. Les conventions de stage obligatoires, qui encadrent légalement les stages étudiants, ont contribué à installer la culture du stage comme composante normale du cursus universitaire plutôt que comme une exception.

Les fondations universitaires et les chaires d'entreprises permettent à des entreprises privées de financer des conditions d'apprentissage de recherche dans les universités en contrepartie d'un accès privilégié aux résultats de recherche et aux étudiants les plus brillants. Ces partenariats public-privé, qui existent dans des formes diverses selon les disciplines et les établissements, créent des passerelles entre la formation académique et les pratiques professionnelles contemporaines.

## Les IUT et leur transformation en BUT : enjeux et implications

La transformation des DUT (Diplômes Universitaires de Technologie) en BUT (Bachelor Universitaire de Technologie) en 2021 représente l'une des réformes les plus significatives de l'enseignement supérieur français de ces dernières décennies. Le passage de deux à trois ans allonge la formation et lui confère le grade de licence (niveau 6 du CEC), ce qui change fondamentalement la valeur des diplômes des IUT sur le marché du travail et dans les poursuites d'études.

Pour les employeurs, le BUT signifie désormais un professionnel avec un an de formation supplémentaire par rapport au DUT, une expérience pratique significative (stages, projets tutorés) et des compétences renforcées dans les savoirs fondamentaux de la discipline. Pour les étudiants, le BUT offre la possibilité d'une insertion professionnelle directe en 3 ans avec un niveau bac+3 — un positionnement différent des licences généralistes qui sont davantage orientées vers la poursuite en master.

La réforme du BUT a également introduit des parcours modulaires dans certaines spécialités, permettant aux étudiants de personnaliser leur formation selon leurs préférences et projets professionnels dès la troisième année. Cette flexibilité, nouvelle dans les IUT traditionnellement très structurés, rapproche le modèle des IUT du fonctionnement des universités généralistes tout en conservant la forte orientation professionnelle qui est la marque de fabrique des IUT.

## Le développement des disciplines interdisciplinaires

Les frontières entre les disciplines universitaires classiques se perméabilisent progressivement sous l'influence de la complexité des problèmes contemporains. Les enjeux du changement climatique, de la santé globale, des transformations numériques ou des défis éthiques de l'intelligence artificielle ne se laissent pas appréhender par une seule discipline mais requièrent des approches qui combinent sciences exactes, sciences sociales, droit, économie et philosophie.

En réponse à ces besoins, des formations pluridisciplinaires se développent dans les universités françaises : bachelor sciences et humanités, formations en sciences des données combinant mathématiques, informatique et sciences sociales, diplômes d'humanités numériques associant lettres et technologies. Ces formations, encore minoritaires dans le paysage universitaire français, représentent une tendance croissante qui reflète les évolutions du monde professionnel et de la recherche académique.
`;

const ADD2_L8 = `
## Les recours en cas de problème sur Parcoursup

Parcoursup étant un dispositif national de service public, des mécanismes de recours existent pour les candidats qui rencontrent des situations injustes ou des dysfonctionnements. Le premier niveau de recours est la demande d'explication auprès de l'établissement lui-même — certains établissements communiquent sur les motifs du classement de leur dossier, d'autres moins, mais une demande formelle par email ou courrier est toujours possible.

Le médiateur Parcoursup, mis en place par le ministère de l'Enseignement supérieur, traite les réclamations des candidats qui estiment que leur dossier n'a pas été traité de façon équitable. Ce médiateur peut intervenir en cas de dysfonctionnement technique (vœu non enregistré malgré la confirmation, erreur dans les données du dossier) ou en cas de traitement apparemment incorrect de la candidature. Les délais de traitement par le médiateur sont courts pendant la phase d'admission pour permettre une résolution rapide.

La Commission d'Accès à l'Enseignement Supérieur (CAES) est une instance régionale, présidée par le recteur d'académie, qui intervient lorsqu'un candidat ayant le baccalauréat n'a reçu aucune proposition admissible à l'issue de la phase principale et de la phase complémentaire. La saisine de la CAES permet d'obtenir une affectation dans une formation adaptée au profil du candidat. Ce filet de sécurité garantit qu'aucun bachelier français ne se retrouve sans solution de formation après les procédures Parcoursup.

## Les différences entre l'admission en licence et l'admission en master

La logique d'admission diffère fondamentalement entre le premier et le deuxième cycle universitaire. Pour la licence, le principe général est celui de l'accès le plus large possible : la sélection est moins systématique que pour le master, et des licences non sélectives accueillent en théorie tous les bacheliers qui s'y inscrivent (avec orientation vers d'autres formations si l'effectif est dépassé). Ce principe d'accès large au premier cycle reflète la vision républicaine française d'un enseignement supérieur accessible.

Pour le master, le paradigme inverse s'applique : la sélection est la norme et l'accès libre l'exception. Le droit à la sélection en master est reconnu par la loi depuis 2003 pour tous les masters, ce qui signifie que chaque programme de master peut fixer ses propres critères d'admission et refuser des candidats qui ne répondent pas à ses exigences, même s'ils sont titulaires d'une licence dans la discipline correspondante.

## L'accompagnement Orientation+ et les dispositifs de réorientation

Pour les étudiants qui réalisent en cours de première année de licence que leur orientation ne leur convient pas, des dispositifs de réorientation permettent de changer de formation sans perdre une année entière. Parcoursup propose depuis 2022 une procédure de réorientation spécifique pour les étudiants de première année qui souhaitent changer de formation en cours d'année ou pour la rentrée suivante. Cette procédure, distincte de la procédure principale, ouvre une fenêtre de candidature en janvier-février pour une rentrée au second semestre dans certaines formations.

Le changement de filière, loin d'être un aveu d'échec, est souvent le signe d'une maturité dans l'analyse de ses intérêts et de ses compétences qui peut aboutir à une trajectoire académique plus solide. Les universités ont tout intérêt à accompagner ces réorientations plutôt qu'à les décourager — un étudiant dans la bonne formation est plus susceptible de réussir et d'en sortir diplômé qu'un étudiant qui persiste dans une voie qui ne lui convient pas.
`;

await appendAndPatch('28169f27-de81-47cb-995b-b1f89aa9b9c3', ADD2_L5);
await appendAndPatch('aaa8ee5c-c7c9-4264-a061-29eea0adc297', ADD2_L6);
await appendAndPatch('c7d769eb-22d9-4d69-bc52-4261b428b47a', ADD2_L7);
await appendAndPatch('c97fea4d-3d2d-4b1d-a5b7-3d4bde406dfa', ADD2_L8);
