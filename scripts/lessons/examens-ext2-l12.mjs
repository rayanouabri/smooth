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

// L1: 3094 -> need ~1000 more
const ADD_L1 = `
## L'évolution numérique des examens universitaires

La transformation numérique de l'université française a ouvert de nouvelles modalités d'évaluation qui s'ajoutent aux formats traditionnels décrits précédemment. Les examens en ligne, les évaluations asynchrones et les devoirs à remettre via des plateformes numériques occupent une place croissante dans les modalités de contrôle des connaissances, accélérée par la généralisation du travail à distance pendant et après la période 2020-2022. Ces formats numériques impliquent des compétences techniques spécifiques que les étudiants doivent maîtriser : naviguer dans l'environnement numérique de travail de l'université, soumettre des fichiers dans les formats requis (PDF, docx, fichiers de données), respecter les délais stricts des plateformes et gérer les éventuels problèmes techniques en amont.

Les examens en ligne surveillés à distance (avec webcam et logiciel anti-triche) sont une réalité dans certains établissements et pour certaines épreuves. Ces formats posent des défis spécifiques aux étudiants dont la connexion internet n'est pas stable ou dont les conditions de logement ne permettent pas un environnement de travail calme et sans interruption. Certaines universités prévoient des espaces de passage des examens en ligne pour les étudiants dans cette situation — renseignez-vous auprès de votre secrétariat si vous êtes dans ce cas.

La maîtrise des outils bureautiques standards — traitement de texte (Word, LibreOffice), tableur (Excel), présentation (PowerPoint), et les outils de communication collaborative (Teams, Moodle, etc.) — est un prérequis implicite pour la majorité des formations universitaires françaises aujourd'hui. Si vous n'êtes pas à l'aise avec ces outils, des formations gratuites sont accessibles dans la plupart des bibliothèques universitaires et via des plateformes en ligne comme France Numérique (MOOC soutenu par l'Éducation nationale).

## Les pièges linguistiques dans les sujets d'examen français

Les sujets d'examen français comportent souvent des pièges linguistiques que des étudiants dont le français n'est pas la langue maternelle peuvent ne pas identifier immédiatement. Ces pièges se manifestent à plusieurs niveaux.

Les verbes de consigne ont des significations précises qui ne sont pas interchangeables : «analysez» invite à décomposer un phénomène en ses éléments constitutifs ; «discutez» invite à débattre une proposition en présentant les arguments pour et contre ; «montrez» invite à démontrer la vérité d'une affirmation en fournissant des preuves ; «expliquez» invite à clarifier les mécanismes et les raisons ; «commentez» invite à interpréter et à évaluer une proposition ou un texte. Confondre ces verbes conduit à répondre à une question différente de celle posée.

Les sujets formulés sous forme d'affirmation à discuter («La France est-elle une démocratie achevée ?», «L'art peut-il être engagé sans perdre sa valeur esthétique ?») invitent systématiquement à une réponse nuancée qui ne répond ni «oui» ni «non» de façon simple. La structure attendue est une exploration des arguments qui justifient l'affirmation, suivie des limites et des contre-arguments, aboutissant à un dépassement qui complexifie la question initiale. Un étudiant qui répond «oui, et voici pourquoi» à ce type de sujet sans intégrer la nuance passe à côté des attentes du format.

Les guillemets dans un sujet d'examen signalent toujours une mise à distance critique du terme cit : le sujet ne vous demande pas simplement de parler du terme, il vous invite à problématiser le terme lui-même, à en interroger le sens, les présupposés et les limites. Ignorer cette invitation à la réflexion méta-linguistique est une erreur de lecture fréquente.
`;

// L2: 2782 -> need ~1300 more
const ADD_L2 = `
## La gestion de la charge cognitive en révision

La charge cognitive est la quantité d'information que le cerveau peut traiter simultanément. Elle est limitée, et comprendre cette limite est essentiel pour organiser efficacement la révision. La mémoire de travail — le système cognitif qui maintient et manipule l'information pendant une tâche — a une capacité de stockage temporaire d'environ 4 à 7 «chunks» d'information simultanément. Dépasser cette capacité produit ce que les cognitivistes appellent la surcharge cognitive : les nouvelles informations ne s'encodent plus correctement, la compréhension se dégrade et la fatigue cognitive s'installe rapidement.

Pour éviter la surcharge cognitive pendant les révisions, quelques principes pratiques s'imposent. Révisez une seule matière à la fois pendant des plages de travail dédiées plutôt que de passer rapidement d'une matière à l'autre dans une même session. Décomposez les notions complexes en sous-concepts maîtrisables individuellement avant de les réintégrer dans une vision d'ensemble. Faites des pauses régulières pour permettre à votre cerveau de consolider les informations encodées avant d'aborder de nouveaux contenus. Et utilisez des supports visuels (schémas, cartes conceptuelles) pour externaliser la structure des informations et réduire la charge mémorielle active.

Ces principes ne sont pas des recettes magiques mais des optimisations documentées de la gestion cognitive qui, appliquées de façon constante, produisent une amélioration sensible de l'efficacité d'apprentissage.

## La valeur de l'erreur dans le processus d'apprentissage

L'erreur est généralement perçue comme un échec dans la culture académique française — une note basse, une réponse incorrecte, un raisonnement défaillant. Cette perception négative de l'erreur inhibe de nombreux étudiants : la peur de se tromper les pousse à ne pas oser s'engager dans des exercices difficiles, à ne pas poser les questions qui semblent «trop basiques», et à éviter les prises de risque intellectuelles dans leurs productions académiques.

Or, les sciences cognitives montrent que l'erreur, dans un contexte de feedback, est l'un des moteurs les plus puissants de l'apprentissage. L'erreur signale précisément là où la représentation mentale diverge de la réalité, permettant une correction ciblée. Un exercice réussi du premier coup ne produit pas d'apprentissage — il confirme simplement ce qui était déjà su. Un exercice échoué, suivi d'une correction comprise et intégrée, produit en revanche une reconfiguration mentale durable.

Dans ce cadre, les examens blancs, les QCM d'entraînement et les exposés en groupe — même quand ils produisent des résultats décevants — sont des outils d'apprentissage précieux. La clé est d'analyser systématiquement ses erreurs pour comprendre leur source (lacune de connaissance, erreur de raisonnement, mauvaise lecture du sujet, gestion du temps défaillante) et d'en tirer des leçons opérationnelles pour les prochaines épreuves.

## Les ressources de solidarité entre étudiants internationaux

Les communautés d'étudiants de même origine nationale ou de langue commune présentes dans chaque grande université française constituent une ressource de soutien mutuel précieuse pour naviguer les défis académiques de l'université française. Les associations d'étudiants africains, asiatiques, latino-américains, européens ou d'autres régions organisent des événements d'intégration, partagent des ressources d'information, et créent des réseaux informels d'entraide académique dans lesquels les expériences et les stratégies s'échangent.

Ces réseaux ne doivent pas se substituer à l'intégration dans les groupes de TD et les espaces de travail mixtes avec les étudiants français — l'immersion dans des groupes de travail variés est irremplaçable pour progresser en français académique et développer une compréhension nuancée de la culture universitaire française. Mais en complément de cette intégration, les communautés d'étudiants de même origine offrent un espace de soutien émotionnel et informatif qui facilite l'adaptation globale.

Les forums en ligne et groupes de messagerie (Telegram, WhatsApp, Facebook) d'étudiants d'un même pays dans une université française fonctionnent comme des plateformes de partage en temps réel d'informations pratiques : «L'inscription aux TD se fait comment ?», «L'examen de statistiques cette année ressemblait à quoi ?», «Ton enseignant de droit civil est comment ?». Ces informations informelles, partagées entre pairs ayant vécu les mêmes expériences, complètent utilement l'information officielle des services universitaires.
`;

await appendAndPatch('60206990-344f-4a69-8aa7-830f51598227', ADD_L1);
await appendAndPatch('64771279-ba7e-4cb4-a525-214585a259a6', ADD_L2);
