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

const ADD2_L9 = `
## Les situations documentaires particulières et leurs solutions

Certaines situations personnelles créent des complications documentaires spécifiques qu'il est important d'anticiper pour ne pas se retrouver bloqué au moment de l'inscription. La première est la situation des apatrides et des personnes sans nationalité reconnue — des personnes dont le pays d'origine n'émet pas de documents d'identité reconnus internationalement. Dans ces cas, l'OFPRA délivre des documents de voyage et d'identité aux personnes sous protection internationale qui permettent d'effectuer les démarches administratives en France.

La situation des personnes dont les documents sont en attente de renouvellement est une autre complication fréquente. Un passeport expiré pendant l'année universitaire peut bloquer la réinscription l'année suivante. Un titre de séjour en cours de renouvellement (le récépissé de demande de renouvellement ayant une valeur juridique de titre de séjour provisoire) est généralement accepté pour l'inscription, mais il est important de vérifier auprès du service des inscriptions que tel est bien le cas dans l'établissement concerné.

La perte ou le vol des documents originaux est une situation d'urgence qui nécessite une réaction rapide sur deux fronts simultanés. D'un côté, le signalement du vol à la police et la demande de renouvellement des documents auprès des autorités compétentes (ambassade ou consulat pour le passeport, préfecture pour le titre de séjour). De l'autre côté, l'information du service des inscriptions de l'université sur la situation, en fournissant une copie certifiée conforme des documents manquants si disponible, pour éviter une annulation administrative de l'inscription pendant les délais de renouvellement.

## L'inscription dans plusieurs établissements simultanément

Il est possible, dans certaines conditions, d'être inscrit simultanément dans plusieurs établissements d'enseignement supérieur français. Cette double inscription est légale mais soumise à conditions : elle est possible si les deux formations ne sont pas à temps plein dans les mêmes créneaux horaires, et elle requiert l'accord explicite des deux établissements. Les situations typiques de double inscription incluent la poursuite simultanée d'une licence et d'un diplôme d'établissement (DE) dans une école de musique ou d'art, la combinaison d'une licence à l'université et d'un BTS dans un lycée, ou la préparation simultanée d'une licence et d'un concours de la fonction publique dans un centre de formation dédié.

La double inscription permet d'optimiser son capital académique en combinant des formations complémentaires, mais elle implique une charge de travail considérable et doit être envisagée uniquement par les étudiants qui ont démontré une capacité à gérer une charge importante. Les bénéfices académiques et professionnels potentiels (doubles compétences, double réseau) doivent être mis en balance avec les risques d'épuisement et de résultats décevants dans les deux formations.

## La dématérialisation progressive et ses limites

La tendance à la dématérialisation des procédures administratives universitaires est irréversible mais inégalement avancée selon les établissements. Les grandes universités disposent généralement de portails numériques complets qui permettent de gérer en ligne la quasi-totalité des démarches administratives : inscription, choix des cours, demande de documents, consultation des résultats. Les établissements plus petits ou moins dotés en ressources informatiques maintiennent davantage de procédures en présentiel.

Pour les étudiants qui vivent dans des zones avec une connexion internet limitée ou qui ont des difficultés avec les outils numériques, la dématérialisation peut créer des obstacles supplémentaires. Les universités sont theoriquement tenues d'offrir une alternative non-numérique pour les usagers qui ne peuvent pas accéder aux services en ligne — en pratique, la qualité et la disponibilité de ces alternatives varient. Il est utile de vérifier à l'avance si une aide à la saisie des dossiers en ligne est disponible dans l'établissement.

## Conseils pratiques pour une inscription réussie

Pour résumer les enseignements de cette leçon en conseils opérationnels, voici les clés d'une inscription administrative réussie. Anticipez les délais : commencez à rassembler les documents six mois avant la date d'inscription prévue, pas trois semaines avant. Vérifiez chaque document : assurez-vous que chaque traduction est assermentée, que chaque copie est certifiée conforme, et que les dates de validité sont respectées. Constituez un dossier numérique et physique parallèle : numérisez chaque document en haute qualité et conservez une copie physique de sécurité.

Prenez contact avec le service des inscriptions avant de soumettre le dossier : un email ou un appel téléphonique pour confirmer les documents requis dans votre situation spécifique peut éviter des surprises. Notez toutes les dates limites dans votre agenda et planifiez chaque démarche avec une marge de sécurité de deux semaines. Et si quelque chose va de travers, cherchez rapidement de l'aide plutôt que d'espérer que le problème se résolve seul.
`;

const ADD2_L10 = `
## Les associations étudiantes et le numérique

Les associations étudiantes ont adapté leur fonctionnement à l'ère numérique, avec une présence sur les réseaux sociaux (Instagram, Facebook, Discord, Telegram) qui permet de toucher les étudiants là où ils se trouvent déjà. Les groupes WhatsApp ou Telegram de promotion constituent des espaces d'information informelle très efficaces pour partager les actualités du campus, les alertes sur les dates limites administratives, les opportunités de stages ou d'emplois, et les informations pratiques sur la vie universitaire.

Ces groupes informels remplacent souvent, dans la pratique, les canaux officiels de communication de l'université qui sont perçus comme moins réactifs et moins proches des préoccupations quotidiennes des étudiants. Rejoindre le groupe de sa promotion ou de son UFR dès l'inscription est donc une démarche d'intégration numérique aussi importante que l'accès à l'ENT officiel.

## L'accès aux ressources pédagogiques en ligne

Les cours en ligne ont connu une transformation majeure depuis la pandémie de 2020. Dans de nombreuses universités françaises, les enseignants mettent désormais à disposition des enregistrements vidéo de leurs cours magistraux, des capsules pédagogiques courtes sur des points précis du cours, et des exercices interactifs en ligne. Ces ressources, accessibles via la plateforme pédagogique de l'ENT, permettent de revoir les points du cours less clairs, de travailler à son propre rythme et de combler les lacunes avant les examens.

L'enregistrement des cours magistraux en amphi est une pratique encadrée par les règlements universitaires : certains établissements l'autorisent pour usage personnel à condition d'en informer l'enseignant, d'autres le prohibent strictement. Il est important de vérifier la politique de votre établissement avant d'enregistrer quoi que ce soit pour éviter des situations conflictuelles.

## Les clubs et cercles thématiques : entre apprentissage et réseau

Les clubs thématiques (club de débat, cercle de réflexion politique, cercle philosophique, club de sciences) constituent une dimension de la vie universitaire particulièrement enrichissante pour les étudiants qui cherchent à approfondir leur réflexion au-delà des contraintes du programme officiel. Ces espaces de discussion libre, sans enjeux d'évaluation, permettent d'explorer des idées, de confronter des perspectives et de développer des compétences argumentatives dans un environnement intellectuellement stimulant.

Pour les étudiants étrangers, les clubs thématiques mixtes (avec des étudiants français) sont des espaces d'immersion intellectuelle dans la culture française de la discussion et du débat. Observer comment des étudiants français construisent un argument, mobilisent des références intellectuelles, et naviguent dans le désaccord respectueux est une leçon de culture académique française qui se vit de l'intérieur plutôt que de s'apprendre dans un manuel.

## La bibliothèque municipale comme complément de la bibliothèque universitaire

La bibliothèque universitaire n'est pas la seule ressource documentaire accessible aux étudiants. La bibliothèque municipale de la ville ou du quartier est une ressource complémentaire précieuse, particulièrement pour les œuvres littéraires, les livres de vulgarisation, les périodiques culturels et les ressources en langues étrangères. Son accès est généralement gratuit pour les résidents, avec une carte de lecteur délivrée sur présentation d'un justificatif de domicile et d'une pièce d'identité.

Certaines grandes bibliothèques municipales (Bibliothèque nationale de France, Bibliothèque publique d'information du Centre Pompidou à Paris, bibliothèques municipales des grandes villes) proposent des fonds documentaires extrêmement riches complémentaires aux bibliothèques universitaires, notamment dans les domaines culturels et artistiques qui sont moins représentés dans les fonds académiques spécialisés. Ces ressources sont accessibles sans inscription universitaire et restent disponibles après la fin des études, formant un réseau culturel pérenne.
`;

const ADD2_L11 = `
## Les logiques de l'évaluation dans le système LMD

L'évaluation universitaire dans le système LMD repose sur deux grands modes qui coexistent souvent dans un même cursus. Le contrôle continu consiste en une série d'évaluations tout au long du semestre — rendus de travaux, exposés oraux, devoirs sur table intermédiaires — dont les notes sont agrégées pour constituer une note finale ou une partie de la note finale. Le contrôle terminal (examen final) consiste en une ou plusieurs épreuves organisées à la fin du semestre dont la note constitue l'essentiel de l'évaluation.

La répartition entre contrôle continu et contrôle terminal varie selon les formation et les enseignants. Certains cours s'évaluent à 100% sur contrôle terminal (examen sur table de 2-3 heures en fin de semestre), d'autres à 100% sur contrôle continu (série de rendus tout au long du semestre), et la plupart combinent les deux dans des proportions variables. Comprendre très tôt dans le semestre quelle est la modalité d'évaluation de chaque cours permet de planifier son travail de façon appropriée.

## La mobilité internationale dans le cursus LMD : Erasmus et équivalents

Le système LMD a été conçu en partie pour faciliter la mobilité internationale des étudiants en harmonisant les niveaux et les unités de comptage (crédits ECTS) à l'échelle européenne. Dans ce cadre, les programmes d'échange universitaire — dont Erasmus+ est le plus connu et le plus développé — permettent aux étudiants d'effectuer une partie de leur cursus dans une université étrangère tout en voyant les crédits ECTS obtenus à l'étranger reconnus et intégrés dans leur parcours à l'université d'origine.

La mobilité Erasmus dure généralement un ou deux semestres et s'effectue dans le cadre d'accords bilatéraux entre universités partenaires. Un étudiant français peut aller dans l'une des universités partenaires de son université d'origine, et inversement. La mobilité est financée par une bourse Erasmus (entre 300 et 600 euros par mois selon le pays de destination) qui ne couvre généralement pas l'intégralité des frais mais représente un soutien financier significatif. Des bourses complémentaires régionales et de l'université d'origine peuvent s'y ajouter.

## La recherche académique et son lien avec l'enseignement

Un trait distinctif du système universitaire français est le lien organique entre enseignement et recherche. La quasi-totalité des enseignants des universités publiques françaises sont simultanément des enseignants-chercheurs — c'est-à-dire qu'ils ont une double fonction d'enseignement (cours, TD, encadrement) et de recherche (publications, projets de recherche, direction de thèses). Ce statut d'enseignant-chercheur est différent du modèle de certains pays où les enseignants universitaires et les chercheurs sont des corps distincts.

Cette fusion des rôles a des implications pour les étudiants. Les cours magistraux sont donnés par des personnes qui sont simultanément des spécialistes reconnus de leur domaine — ce qui implique une mise à jour constante des contenus avec les dernières avancées de la recherche et une capacité à introduire les étudiants dans les débats et questionnements ouverts de la discipline. L'accès à ces enseignants-chercheurs comme mentors potentiels, directeurs de stage ou de recherche, est une ressource précieuse que les étudiants ambitieux savent utiliser.

## L'université française dans l'espace mondial de l'enseignement supérieur

Placées dans le contexte mondial, les universités françaises occupent une position particulière. Historiquement peu valorisées dans les classements internationaux qui ont longtemps primé les critères de recherche en langue anglaise et les structures anglo-saxonnes, les meilleures universités françaises ont significativement progressé dans les classements depuis les réformes des années 2010 et la création des grandes Universités de Recherche (comme Sorbonne Université, Université Paris-Saclay, Université PSL). L'Université Paris-Saclay, qui regroupe plusieurs grandes universités et grandes écoles de la banlieue sud parisienne, figure régulièrement dans le top 20 mondial du classement de Shanghai en sciences.

Pour les étudiants étrangers qui considèrent les études en France dans une perspective internationale, il est utile de distinguer la réputation globale de l'université française (bonne dans les disciplines d'humanités, de droit, de mathématiques et de sciences naturelles, et en nette progression en sciences et technologie) de la réputation de l'établissement spécifique dans leur discipline. Dans certains domaines, comme les mathématiques fondamentales, les lettres classiques ou le droit continental, la France dispose d'établissements et de traditions académiques mondialement reconnus comme référence absolue.
`;

const ADD2_L12 = `
## L'orientation et la découverte des formations sur les plateformes

Les plateformes Parcoursup et Mon Master ne sont pas seulement des outils de candidature — elles sont aussi des outils essentiels de découverte et d'orientation. La richesse des informations mises à disposition sur chaque formation (contenus pédagogiques, débouchés, témoignages d'étudiants et de diplômés, statistiques d'admission et d'insertion) permet à un candidat de construire une connaissance précise et comparative du paysage des formations dans son domaine bien avant de formuler ses vœux.

La fonction de recherche avancée de Parcoursup permet de filtrer les formations par discipline, par région, par type d'établissement et par niveau de sélectivité. Pour un candidat qui n'est pas encore certain de son orientation, explorer systématiquement les formations d'un domaine large (« sciences économiques et gestion ») permet de découvrir des spécialisations dont il ne connaissait peut-être pas l'existence et qui pourraient correspondre à ses intérêts et à ses compétences.

## Les journées portes ouvertes et visites de campus

Les journées portes ouvertes organisées par les universités et les grandes écoles entre janvier et mars constituent une ressource d'orientation précieuse qui complète les informations disponibles en ligne. Ces événements permettent de visiter les locaux, de rencontrer les enseignants de la formation et les étudiants actuels, de poser des questions à des experts qui connaissent intimement leur formation, et d'avoir une impression concrète de l'atmosphère et de la culture de l'établissement.

Pour un candidat étranger qui se trouve encore dans son pays au moment des journées portes ouvertes françaises, les alternatives numériques (webinaires de présentation, sessions de questions-réponses en ligne, chats avec des étudiants actuels sur les réseaux sociaux ) peuvent partiellement compenser l'impossibilité d'une visite physique. Les associations d'anciens étudiants ou les groupes d'alumni présents dans votre pays d'origine sont également des ressources précieuses pour obtenir des témoignages de première main sur les formations qui vous intéressent.

## La construction d'un projet d'études cohérent et motivant

Au-delà de la maîtrise technique des plateformes, la clé d'une candidature réussie est la clarté et la cohérence du projet d'études. Les commissions d'admission de Parcoursup et de Mon Master reconnaissent immédiatement les candidatures qui reflètent un projet authentique et réfléchi — et celles qui sont des candidatures « par défaut » sans conviction réelle. Un projet d'études cohérent articule de façon convaincante votre passé (formation, expériences, intérêts), votre présent (compétences, motivations, points forts) et votre futur (objectif professionnel ou académique à moyen terme).

La construction de ce projet ne se fait pas en une nuit avant la date limite de candidature. Elle requiert une exploration sérieuse des métiers et des secteurs qui vous attirent, des rencontres avec des professionnels qui exercent les métiers ciblés, une analyse honnête de vos points forts et de vos axes d'amélioration, et une réflexion sur les formations qui permettent le mieux d'atteindre vos objectifs. Ce travail d'orientation, préparé avec soin pendant les mois qui précèdent la candidature, produit des dossiers autrement plus convaincants que ceux rédigés dans l'improvisation.

## L'après-admission : préparer activement l'arrivée dans la formation

La période entre l'admission et le début effectif de la formation est une fenêtre précieuse pour préparer activement son entrée dans le nouveau programme. Pour les étudiants étrangers en particulier, cette période peut être mise à profit pour consolider le niveau de français académique dans la discipline visée (par la lecture d'ouvrages de référence dans la discipline en français), pour établir les premiers contacts avec des étudiants actuellement inscrits dans la formation (via les groupes de promotion sur les réseaux sociaux), et pour anticiper les démarches administratives de logement et d'installation.

La prise de contact proactive avec le bureau des Relations Internationales de l'université d'accueil avant même l'arrivée physique en France permet souvent d'obtenir des informations pratiques cruciales et de créer une relation de connaissance qui facilitera les démarches à l'arrivée. Certaines universités proposent des programmes d'accueil spéciaux pour les étudiants internationaux nouvellement admis — repérez-les et inscrivez-vous dès que l'information est disponible.
`;

await appendAndPatch('0447d045-e377-4184-aa2c-8682c6502843', ADD2_L9);
await appendAndPatch('21a6d3ee-294f-4217-9756-32f874a332f4', ADD2_L10);
await appendAndPatch('c5439dd3-ee75-49a4-b7ab-c11c4dfc1435', ADD2_L11);
await appendAndPatch('b04e269f-0b07-40a2-a16a-fa43d5462e88', ADD2_L12);
