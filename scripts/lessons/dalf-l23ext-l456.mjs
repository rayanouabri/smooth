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

// EXT2 for L2 (DALF C2) - need ~900 more words
const EXT2_L2 = `
## La correction au DALF C2 : comprendre les grilles d'évaluation

La transparence sur les critères d'évaluation est une caractéristique importante du DALF. France Éducation International publie les grilles d'évaluation utilisées par les correcteurs formés pour noter les productions écrites et orales. Comprendre ces grilles vous permet de savoir exactement ce qui est valorisé et ce qui est pénalisé lors de la correction.

Pour la production écrite au niveau C2, les correcteurs évaluent séparément plusieurs dimensions. La compréhension et l'utilisation des sources (avez-vous bien saisi les positions des textes du dossier et les avez-vous utilisées pertinement dans votre argumentation ?) est une première dimension. La cohérence et la cohésion du discours (votre texte est-il logiquement organisé, avec des transitions claires entre les idées et une progression argumentative lisible ?) en est une autre. La richesse et la précision du lexique, ainsi que la complexité et la correction grammaticale des structures utilisées, sont également évaluées. Enfin, la pertinence et la profondeur de l'argumentation personnelle — avez-vous simplement résumé les textes ou avez-vous formulé un point de vue construit et nuancé ? — est le critère qui distingue souvent les candidats excellents des candidats simplement corrects au niveau C2.

Pour la production orale, les examinateurs évaluent la qualité phonologique (prononciation, rythme, intonation), la cohérence du discours, la richesse et la précision du vocabulaire, la souplesse et la précision grammaticale, et l'aisance dans l'interaction (capacité à réagir rapidement aux questions du jury, à reformuler, à nuancer, à défendre ses positions sous la pression). À ce niveau, les examinateurs accordent une importance particulière à la spontanéité et à la naturalité de la communication : un candidat qui récite un exposé mémorisé sans réelle interaction n'obtiendra pas les meilleures notes, même si son français formel est impeccable.

## Ressources pédagogiques complémentaires pour le DALF C2

La préparation au DALF C2 bénéficie d'un écosystème de ressources beaucoup plus restreint que pour les niveaux inférieurs, car le public visé est plus réduit et plus spécialisé. Voici les ressources les plus recommandées par les enseignants de FLE spécialisés dans la préparation aux certifications de haut niveau.

Les annales officielles publiées par France Éducation International sur son site sont le point de départ incontournable. Elles fournissent des sujets authentiques des sessions précédentes avec les barèmes de notation, permettant une préparation très ciblée sur le format réel de l'examen. Le manuel «DALF C2 : 200 activités» des éditions CLE International est l'un des rares ouvrages spécialement conçus pour la préparation au DALF C2, avec des exercices progressifs sur toutes les compétences. Les ressources en ligne de TV5Monde (apprendre.tv5monde.com) proposent des activités pédagogiques sur des contenus authentiques adaptées aux niveaux C1 et C2. Le portail RFI Savoirs (savoirs.rfi.fr) met à disposition des thèmes d'actualité traités avec une richesse lexicale et un niveau de complexité appropriés pour la préparation aux niveaux C du CECRL.

Pour la compréhension orale, l'écoute des émissions de France Culture — notamment «Les Chemins de la philosophie», «La Grande Table», «Cultures Monde» et autres émissions à haute valeur intellectuelle — constitue une préparation authentique et engageante qui enrichit simultanément la culture générale indispensable aux épreuves de C2. Pour la production écrite, lire et analyser des éditoriaux du Monde, des chroniques de L'Obs et des tribunes d'intellectuels dans Libération ou Le Figaro vous exposera aux genres écrits que vous devrez produire lors de l'examen.
`;

// EXT2 for L3 (Le DALF, qu'est-ce-que c'est) - need ~900 more words
const EXT2_L3 = `
## La reconnaissance internationale du DALF : pays et institutions

Le réseau de reconnaissance du DALF s'étend bien au-delà de la France et couvre une géographie remarquablement vaste. France Éducation International dispose d'un réseau de centres agréés dans plus de 175 pays, ce qui fait du DALF l'une des certifications de langue les plus largement distribuées dans le monde. Ce réseau comprend les instituts français présents dans de nombreuses capitales et grandes villes, les alliances françaises dispersées sur les cinq continents, ainsi que des centres agréés dans des lycées, universités et organismes de formation partenaires.

Dans l'Union Européenne, le DALF est reconnu par les autorités éducatives de l'ensemble des États membres dans le cadre de la politque de reconnaissance des diplômes et des compétences. Le traitement réservé au DALF dans les procédures d'admission des universités belges, luxembourgeoises et suisses (pays partiellement francophones où le français est langue d'enseignement dans certaines régions) est généralement identique à celui des universités françaises : le DALF C1 dispense du test de langue pour les admissions dans les établissements où le français est la langue d'enseignement.

Dans les pays du Maghreb et de l'Afrique subsaharienne francophone, le DALF occupe une place particulière : ces pays ont une relation historique avec le français qui fait que la certification linguistique y est parfois moins nécessaire pour les programmes enseignés en français. Cependant, pour les candidatures à des programmes internationaux, pour les démarches liées à la mobilité académique ou professionnelle transfrontalière, et pour les certifications dans des contextes où un niveau formel de référence est exigé, le DALF reste la certification de référence.

## Comment intégrer la préparation au DALF dans un emploi du temps étudiant chargé

La préparation au DALF C1 ou C2 représente un investissement en temps et en énergie qui doit être intégré intelligemment dans un emploi du temps déjà dense pour la plupart des étudiants. La clé est de transformer les activités de la vie quotidienne et académique en autant d'opportunités de pratique ciblée des compétences évaluées au DALF, plutôt que d'ajouter un volume de travail supplémentaire sur des supports artificiels.

La lecture quotidienne de la presse française — en commençant par les titres et les premières lignes d'articles pour les niveaux moins avancés, puis en lisant les articles complets pour les niveaux C — prend 15 à 30 minutes par jour et développe simultanément la compréhension de l'écrit, le vocabulaire et la culture générale indispensables au DALF. Les applications mobiles des grands journaux français permettent d'intégrer cette lecture au quotidien, dans les transports ou pendant les pauses.

L'écoute passive d'émissions de radio françaises lors de moments non productifs (sportif, cuisine, déplacement) est une pratique de compréhension orale à coût zéro en termes d'effort spécifique. En réorientant l'écoute de musique ou de podcasts généralistes vers des émissions françaises de qualité, vous développez votre oreille pour les registres oraux formels du DALF sans heure supplémentaire consacrée spécifiquement à la préparation.

## Conclusion : le DALF comme étape et comme destination

Passer le DALF, qu'il s'agisse du C1 ou du C2, n'est pas seulement une démarche administrative pour satisfaire à une exigence d'admission. C'est une étape significative dans un parcours d'apprentissage, une occasion de formaliser et de célébrer un niveau de compétence acquis par des années d'effort, et une ouverture sur de nouvelles possibilités académiques, professionnelles et culturelles dans l'espace francophone mondial. Pour chaque étudiant international qui a choisi le français et la France comme horizon de ses projets, le DALF représente une façon de rendre ce choix visible, formalisé et permanent.
`;

// L4: Préparer le DALF C1 — méthodes et ressources
const DALF4 = `# Préparer le DALF C1 : méthodes, ressources et stratégies de réussite

Le DALF C1 est l'examen clé qui ouvre les portes de l'enseignement supérieur français pour les étudiants non francophones visant une formation de niveau universitaire. Il est aussi, pour la majorité des candidats, le niveau d'ambition naturel après plusieurs années d'apprentissage du français, une fois que le niveau B2 est solidement installé. Préparer le DALF C1 de manière efficace requiert une stratégie claire, des ressources adaptées et une organisation rigoureuse sur plusieurs semaines ou plusieurs mois. Cette leçon vous guide dans chacun de ces aspects, de l'auto-évaluation initiale de votre niveau à la gestion du stress le jour de l'examen, en passant par les meilleures ressources disponibles pour chacune des quatre compétences évaluées.

## Évaluer son niveau avant de commencer la préparation

La première étape d'une préparation efficace au DALF C1 est une évaluation honnête et précise de votre niveau de français actuel. Commencer une préparation au C1 avec un niveau réel de B1 ou de B1+ serait contre-productif et frustrant. Le DALF C1 suppose un niveau réel d'entrée d'au moins B2 solide dans toutes les compétences. Si vous n'en êtes pas encore là, le temps est mieux investi dans la progression vers le B2 que dans la familiarisation avec les épreuves du C1.

Plusieurs outils permettent d'évaluer votre niveau avant de commencer la préparation. Le test de positionnement gratuit disponible sur le site du CIEP ou de France Éducation International donne une première indication. Les tests de positionnement en ligne proposés par TV5Monde, le Français des Affaires de la CCI Paris et d'autres sites spécialisés donnent des évaluations complémentaires. La tentative de réaliser un exercice de compréhension de l'écrit issu d'une annale officielle de DALF C1 est le test le plus direct : si vous comprenez à 70-80 % les textes proposés et que vous êtes capable de répondre correctement à la majorité des questions, votre niveau d'entrée est suffisant. Si les textes vous semblent très difficiles à comprendre dans leur intégralité, un travail préparatoire de niveau B2 est nécessaire avant d'aborder la préparation spécifique au DALF C1.

## Construire un plan de préparation sur mesure

La durée de préparation au DALF C1 varie considérablement selon le profil de chaque candidat. Pour un étudiant qui vit en France et est immergé dans un environnement francophone quotidien avec un niveau de départ solide (B2+), une préparation intensive de six à huit semaines peut être suffisante. Pour un candidat vivant hors de France avec moins d'exposition au français au quotidien et un niveau de départ de B2 standard, une préparation de trois à quatre mois est plus réaliste et plus prudente.

Un plan de préparation efficace doit répartir le temps de travail équitablement entre les quatre compétences évaluées, en accordant plus d'attention aux compétences de production (production écrite et production orale) qu'aux compétences de compréhension, car elles sont généralement celles qui demandent le plus de travail spécifique et pour lesquelles l'amélioration est la plus lente. Un plan type sur huit semaines pourrait ressembler à ceci : les deux premières semaines sont consacrées à la découverte du format des épreuves et à un premier diagnostic par compétence, les semaines trois et quatre aux exercices systématiques de compréhension, les semaines cinq et six à l'entraînement intensif en production écrite avec correction de ses productions, la septième semaine à la simulation complète d'examen en conditions réelles, et la huitième semaine à la consolidation et à la gestion du stress pré-examen.

## Ressources pour la compréhension de l'oral

La compréhension de l'oral au DALF C1 présente des documents authentiques de registres variés (journalistiques, académiques, culturels) d'une durée totale de 30 à 40 minutes. La difficulté principale pour la plupart des candidats est la densité informationnelle de ces documents et la vitesse à laquelle l'information est délivrée dans un discours naturel non simplifié.

Pour entraîner cette compétence, les contenus de France Culture (france.tv/france-culture en podcast) sont particulièrement adaptés au niveau C1 : les émissions «La Science, CQFD», «Le Cours de l'histoire» et «Grand bien vous fasse» proposent des contenus structurés, riches informationnellement et formulés dans un registre soutenu comparable aux documents du DALF. L'exercice recommandé est l'écoute active avec prise de notes : écoutez une émission de 20 minutes en notant les thèses principales et les arguments clés, puis vérifiez votre compréhension en consultant le transcript ou en réécoutant les passages difficiles.

RFI Savoirs (savoirs.rfi.fr) propose une section dédiée aux apprenants de FLE avec des émissions classées par niveau. Les émissions de niveau C1 disponibles sur ce portail sont directement transposables à la pratique de compréhension de l'oral C1. YouTube héberge des conférences TED en français et des séminaires de grande qualité donnés dans des universités françaises, qui constituent une ressource inépuisable de documents oraux authentiques variés.

## Ressources pour la compréhension de l'écrit

La compréhension de l'écrit au DALF C1 repose sur la lecture analytique de textes authentiques variés — articles de presse longue, extraits d'essais, textes académiques — et sur la capacité à répondre à des questions qui testent la compréhension fine, l'inférence et l'analyse critique. Le principal obstacle pour la plupart des candidats est l'exposé à des textes dont le vocabulaire technique ou culturellement spécialisé n'est pas familier.

La lecture régulière des journaux de référence français constitue la préparation la plus naturelle et la plus efficace pour cette épreuve. Le Monde, disponible intégralement en ligne avec abonnement, et dont de nombreux articles sont accessibles gratuitement, propose quotidiennement des analyses et des reportages de la longueur et de la complexité des textes du DALF C1. Le Monde Diplomatique, mensuel à la fois accessible et intellectuellement exigeant, est particulièrement adapté au travail préparatoire car ses articles traitent de thèmes de société, géopolitiques et culturels avec une profondeur analytique comparable aux exigences de l'examen.

## Ressources pour la production écrite

La production écrite au niveau C1 exige la rédaction d'un texte argumenté long (400 à 600 mots) à partir d'un dossier documentaire fourni lors de l'examen. Le candidat doit produire un texte structuré, cohérent, avec une argumentation personnelle appuyée sur les sources, une richesse lexicale attestant un niveau avancé, et une correctness grammaticale.

Le principal conseil pour préparer cette épreuve est de pratiquer régulièrement l'écriture de textes longs et argumentés, en se faisant corriger. Sans retour correctif de qualité, il est difficile d'identifier et de corriger ses propres erreurs récurrentes. Les instituts français, les alliances françaises et de nombreuses plateformes d'apprentissage en ligne (italki, preply, verbling) offrent des possibilités de correction personnalisée de productions écrites par des professeurs certifiés ou des natifs cultivés. Investir dans une ou deux corrections par semaine pendant la phase de préparation réduit significativement les erreurs au moment de l'examen.

## Ressources pour la production orale

L'épreuve orale du DALF C1 est une interaction avec un jury composé de deux examinateurs. Le candidat présente un exposé de 8 à 10 minutes à partir d'un document déclencheur fourni lors de l'examen, puis interagit avec le jury pendant 10 à 12 minutes supplémentaires. L'ensemble de l'épreuve dure environ 20 à 25 minutes.

Préparer l'épreuve orale requiert de la pratique réelle de la prise de parole formelle en français. Les clubs de conversation (conversation clubs) organisés par des instituts français, des universités ou des associations d'apprenants de langues sont des espaces informels pour s'exercer à l'expression orale soutenue. Des plateformes comme italki permettent de travailler la production orale formelle avec un tuteur natif qui peut simuler les conditions de l'épreuve. L'enregistrement de ses propres exposés et leur écoute critique, bien que moins confortable que le travail avec un interlocuteur humain, est une pratique de préparation accessible et utile.

## Témoignages d'étudiants sur leur préparation au DALF C1

**Amira Benali, 22 ans, Algérie, préparation de 2 mois avant du master** : «J'avais un bon niveau de français acquis au lycée francophone mais je n'avais jamais vraiment travaillé la production écrite formelle. J'ai acheté un manuel de préparation DALF C1, j'ai fait deux rédactions par semaine que mon professeur de français corrigeait, et j'ai passé les annales de compréhension en ligne tous les soirs. La clé a été la régularité et la correction systématique.»

**Jakub Nowak, 26 ans, Pologne, préparation de 4 mois** : «J'habitais à Varsovie et n'avais pas de cadre francophone autour de moi. J'ai passé l'essentiel de ma préparation avec des ressources en ligne. France Culture pour l'oral, Le Monde pour l'écrit, et des sessions hebdomadaires avec un tuteur sur italki pour la production. Mes points faibles étaient la fluor orale et la richesse lexicale en production écrite, deux choses sur lesquelles j'ai travaillé spécifiquement.»

## Questions fréquentes sur la préparation du DALF C1

**Q : Combien de temps par jour faut-il travailler pour préparer le DALF C1 ?**
Pour une préparation sur 8 semaines, un travail de 1 à 2 heures par jour (5 à 6 jours par semaine) est suffisant si vous êtes déjà à niveau B2 solide. Ce temps se répartit entre la compréhension (écoute et lecture 45 min), la production écrite (30 min) et la révision de vocabulaire et de grammaire (15-30 min). La régularité compte plus que l'intensité : travailler tous les jours de façon régulière est plus productif que des sessions marathon occasionnelles.

**Q : Faut-il s'inscrire dans un cours de préparation ou peut-on se préparer seul ?**
Les deux approches fonctionnent. Un cours de préparation avec un enseignant expert offre un cadre structuré, des corrections personnalisées et une motivation extrinsèque. La préparation autonome offre plus de flexibilité mais exige discipline et autocritique. Une solution intermédiaire — préparation autonome principale avec quelques sessions de tutorat personnalisé pour les compétences de production — est souvent le meilleur compromis en termes d'efficacité et de coût.

**Q : Les anciens sujets du DALF C1 sont-ils représentatifs des sujets actuels ?**
Les annales officielles diffusées par France Éducation International restent représentatives du format et du niveau de difficulté actuels, même si les thèmes spécifiques varient d'une session à l'autre. Les sujets tournent autour de grandes thématiques contemporaines (environnement, société numérique, education, culture, travail) et s'appuient toujours sur des documents authentiques. Travailler sur les annales des 5 à 7 dernières années donne une bonne maîtrise du format sans risquer d'être surpris par le contenu spécifique le jour de l'examen.

**Q : Que faire si je rate le DALF C1 ?**
En cas d'échec, analysez vos résultats par épreuve pour identifier votre point faible. Si vous avez échoué à cause de la note plancher (moins de 5 points sur 25) dans une seule épreuve, concentrez votre travail de préparation pour la session suivante sur cette compétence spécifique. Si votre note globale est insuffisante mais que toutes les épreuves ont dépassé la note plancher, un travail d'amélioration globale est nécessaire. Il n'y a pas de délai minimal imposé entre deux sessions.

## Ressources officielles

- [France Éducation International – DALF C1 annales](https://www.france-education-international.fr/diplome/dalf) : Annales officielles gratuites avec barèmes
- [TV5Monde – Apprendre](https://apprendre.tv5monde.com) : Ressources pédagogiques authentiques pour niveaux B2 et C
- [RFI Savoirs](https://savoirs.rfi.fr) : Contenus radio classés par niveaux CECRL pour la compréhension orale
- [France Culture podcasts](https://www.radiofrance.fr/franceculture/podcasts) : Émissions culturelles authentiques pour la préparation à l'oral
`;

// L5: Structure de l'examen DALF C1
const DALF5 = `# Structure de l'examen DALF C1 : les quatre épreuves en détail

Comprendre précisément la structure de l'examen DALF C1 est une étape indispensable de la préparation. Connaître le format de chaque épreuve, la durée allouée, le nombre et la nature des documents présentés, les types de questions posées et les critères de notation permet d'aborder l'examen sans surprise et d'optimiser son temps le jour J. Cette leçon décrit chacune des quatre épreuves du DALF C1 avec un niveau de détail opérationnel, en expliquant les attendus précis des correcteurs et les stratégies les plus efficaces pour chaque partie.

## Vue d'ensemble de l'examen DALF C1

Le DALF C1 est divisé en quatre épreuves distinctes qui évaluent chacune l'une des quatre grandes compétences communicatives reconnues par le CECRL : la compréhension de l'oral (CO), la production orale (PO), la compréhension de l'écrit (CE) et la production écrite (PE). Chaque épreuve est notée sur 25 points, pour un total de 100 points. Pour obtenir le diplôme, le candidat doit satisfaire à deux conditions simultanées : obtenir une note globale d'au moins 50 points sur 100, et obtenir une note d'au moins 5 points sur 25 dans chacune des quatre épreuves. Cette double condition garantit une compétence minimale dans chaque dimension de la communication.

Les épreuves de compréhension (CO et CE) sont passées collectivement dans une salle avec tous les candidats de la session. Les épreuves de production écrite (PE) se passent également en salle dans le même temps collectif. Seule l'épreuve de production orale (PO) est individuelle et se déroule séparément, dans un créneau horaire attribué à chaque candidat. La durée totale des épreuves collectives est d'environ 3h30 à 4 heures selon les centres. La production orale dure 30 minutes préparation comprise.

## L'épreuve de compréhension de l'oral (CO) — 25 points, 40 min environ

La compréhension de l'oral au DALF C1 présente deux documents sonores authentiques d'une durée totale de 10 à 15 minutes. Ces documents sont le plus souvent des extraits d'émissions de radio françaises, de reportages, de débats ou de conférences, présentant des thèmes de société, culturels ou scientifiques d'un niveau de complexité avancé. Ils ne sont pas simplifiés ou adaptés : ils correspondent à des documents destinés à des francophones natifs cultivés.

Chaque document est diffusé deux fois lors de l'épreuve, avec un temps dédié à la prise de notes entre les deux écoutes. Le premier document est généralement plus court (5 à 7 minutes) et donne lieu à des questions de compréhension de sens global et de thématique spécifique. Le second document est plus long et plus complexe (8 à 12 minutes) et donne lieu à des questions plus analytiques. Les types de questions incluent des questions vrai/faux avec justification, des questions ouvertes à réponse courte, des questions d'identification de positions ou de points de vue, et des questions d'inférence ou d'implication.

Pour gérer efficacement cette épreuve, la prise de notes lors des écoutes est essentielle. Notez les thèses principales, les arguments clés, les exemples cités, les chiffres et références importantes, et les positions des locuteurs si plusieurs intervenants participent. Ne cherchez pas à noter les phrases intégralement mais à capturer l'information essentielle sous forme abrégée. Lors de la seconde écoute, complétez et corrigez vos notes. Répondez ensuite aux questions en vous appuyant sur vos notes, sans chercher à tout retenir de mémoire.

## L'épreuve de compréhension de l'écrit (CE) — 25 points, 50 min environ

La compréhension de l'écrit au DALF C1 présente un ou deux textes authentiques de longueur significative (au total de 1 000 à 2 000 mots). Ces textes peuvent être des articles de presse longue, des extraits d'essais ou de livres de référence, des textes académiques populaires, ou des textes d'opinion argumentée. Les thèmes sont contemporains et d'une portée culturelle, sociale ou scientifique qui exige du candidat une culture générale et une capacité à comprendre des textes denses.

Les questions de compréhension de l'écrit au DALF C1 vont de la simple identification d'informations explicites (vrai/faux, questions factuelles directes) à des questions d'analyse plus complexes (identification de la thèse centrale, compréhension des implicites, reformulation d'idées clés dans ses propres mots). La compréhension fine du vocabulaire est importante : certaines questions portent sur le sens d'expressions ou de métaphores dans le contexte du texte.

La stratégie de lecture recommandée pour cette épreuve suit une approche de lecture active à plusieurs niveaux. Commencez par une lecture rapide du texte en entier pour saisir le sujet général et la structure. Lisez ensuite les questions posées pour savoir ce que vous cherchez dans le texte. Relisez le texte à vitesse ordinaire en cherchant les réponses aux questions, en soulignant ou en annotant les passages pertinents. Répondez aux questions en vous appuyant sur votre lecture analytique plutôt que sur votre mémoire immédiate.

## L'épreuve de production écrite (PE) — 25 points, 2h30

La production écrite est l'épreuve la plus longue du DALF C1 et celle pour laquelle la préparation spécifique porte le plus ses fruits. Le candidat dispose d'un dossier documentaire de 4 à 6 textes courts relatifs à un même thème (entre 2 000 et 4 000 mots au total) et doit produire un texte argumenté long d'environ 400 à 600 mots. La consigne est formulée de façon à demander au candidat de prendre position, de synthétiser les sources ou de proposer une analyse en réponse à une problématique.

Les genres de textes demandés au DALF C1 en production écrite incluent la lettre formelle ou de réclamation, l'article de presse ou de blog, le rapport ou la note de synthèse, et la contribution à un débat ou un forum. Quelle que soit la forme demandée, le texte doit être structuré (avec une introduction, un développement et une conclusion ou une clôture cohérente), argumenté (avec des points de vue distincts, des exemples, des contre-arguments réfutés), et linguistiquement riche (vocabulaire précis, structures variées, cohésion lexicale et grammaticale).

Les critères de notation évaluent la pertinence et l'adéquation à la consigne (avez-vous répondu à ce qui était demandé ?), la compréhension et l'utilisation des sources (avez-vous mobilisé correctement les documents du dossier ?), la structure et la cohérence du texte produit, et la qualité linguistique (richesse lexicale, correction grammaticale, variété syntaxique).

## L'épreuve de production orale (PO) — 25 points, 30 min au total

La production orale est l'épreuve individuelle du DALF C1, la plus redoutée par de nombreux candidats car elle implique une performance en temps réel face à un jury. L'épreuve se déroule en deux phases : une phase de préparation individuelle de 10 minutes, et une phase de présentation et d'interaction avec le jury de 20 minutes.

Lors de la phase de préparation, le candidat reçoit un document déclencheur (une page d'article de presse, un extrait de texte, une infographie) sur un thème contemporain. Il dispose de 10 minutes pour lire et analyser ce document, identifier son thème central et sa problématique, et préparer un exposé structuré de 8 à 10 minutes. Des notes de préparation sont autorisées mais l'exposé ne doit pas être lu intégralement.

Lors de la phase de présentation, le candidat présente son exposé au jury (2 examinateurs). L'exposé duré 8 à 10 minutes et doit être structuré avec une introduction (présentation du thème et de la problématique), un développement (analyse du document, prise de position personnelle argumentée) et une conclusion. Après l'exposé, une interaction de 10 minutes avec le jury suit : les examinateurs posent des questions, demandent des précisions, proposent des contre-arguments, et évaluent la capacité du candidat à soutenir ses positions, à reformuler et à dialoguer avec aisance.

Les critères de notation évaluent la pertinence et la rigueur de l'exposé (avez-vous bien saisi et traité la problématique ?), la cohérence discursive (structure, articulation logique, progressivité de l'argumentation), l'aisance et la précision linguistiques (phonologie, lexique, grammaire), et la qualité et la spontanéité de l'interaction avec le jury.

## Stratégies pour optimiser son score global au DALF C1

Quelques principes généraux permettent d'optimiser son score global au DALF C1, au-delà du travail sur chaque compétence individuelle. Premièrement, ne laissez jamais une question sans réponse : même si vous n'êtes pas certain de la réponse, une réponse incomplète ou approximative peut valoir quelques points, une absence de réponse en vaut zéro. Deuxièmement, gérez votre temps à l'heure : pour chaque épreuve, estimez le temps disponible par question (2 h 30 = 150 minutes pour 25 points de production écrite = 6 minutes par point) et tenez-vous à ce rythme. Troisièmement, relisez vos productions écrites : 5 à 10 minutes de relecture après avoir achevé votre texte vous permettront de corriger des erreurs de grammaire et d'orthographe que vous n'aviez pas vues à l'écriture.

## Questions fréquentes sur la structure de l'examen DALF C1

**Q : Les sujets des épreuves sont-ils identiques dans tous les pays le même jour ?**
Oui. Pour une même session, les sujets sont identiques dans tous les centres agréés du monde entier. Cette standardisation internationale est garantie par France Éducation International, qui coordonne les sessions mondiales et distribue les sujets confidentiels aux centres quelques jours avant l'examen.

**Q : Peut-on utiliser un dictionnaire lors des épreuves du DALF C1 ?**
Non. Aucun document ou outil de référence (dictionnaire, grammaire, téléphone) n'est autorisé lors des épreuves de production écrite ou de compréhension. Le candidat doit s'appuyer exclusivement sur ses compétences personnelles.

**Q : Comment obtenir ses résultats après le passage du DALF C1 ?**
Les résultats sont communiqués par le centre d'examen où vous avez passé l'examen, généralement 6 à 8 semaines après la date de la session. En cas de réussite, le diplôme officiel est envoyé au centre quelques semaines après la notification des résultats. La plupart des centres informent les candidats par e-mail et affichent les résultats sur leur site ou leur espace candidat.

**Q : Est-il possible de contester ses résultats au DALF C1 ?**
Oui. En cas de désaccord sur la notation, le candidat peut demander une relecture de sa copie (pour les épreuves écrites) ou une révision de notation (recorrection par d'autres correcteurs). Cette procédure est payante et encadrée par les règles de France Éducation International. Elle est relativement rare en pratique, car les grilles d'évaluation normées laissent peu de place à des interprétations radicalement divergentes d'un correcteur à l'autre.

## Ressources officielles

- [France Éducation International – Exemples de sujets DALF C1](https://www.france-education-international.fr/diplome/dalf) : Accédez aux annales officielles et barèmes du DALF C1
- [Éduscol – Certifications en FLE](https://eduscol.education.fr) : Informations sur la reconnaissance des certifications de langue française dans le système éducatif français
`;

// L6: S'inscrire au DALF — centres et dates
const DALF6 = `# S'inscrire au DALF : centres d'examen, sessions et procédures d'inscription

Se préparer au DALF c'est bien, mais s'inscrire dans les délais et dans le bon centre d'examen est une étape tout aussi importante qui mérite une planification soigneuse. Les sessions du DALF ont lieu un nombre limité de fois par an, et les places dans les centres populaires sont souvent limitées. Un candidat mal informé sur les délais d'inscription peut se retrouver à devoir attendre la session suivante, reculant de plusieurs mois ses projets d'admission universitaire ou professionnels. Cette leçon vous guide pas à pas à travers toutes les étapes de l'inscription au DALF, du choix du centre d'examen à la réception de votre diplôme officiel.

## Le réseau mondial des centres d'examen DALF

Le réseau de centres habilités à organiser les sessions DALF comprend plus de 1 000 centres dans le monde, gérés par France Éducation International. Ces centres sont très variés dans leur nature : instituts français (établissements culturels officiels de l'État français à l'étranger), alliances françaises (associations culturelles indépendantes mais fédérées au niveau international), établissements scolaires habilités (lycées bilingues, écoles internationales, centres de langues universitaires), et centres privés agréés.

En France, les sessions DALF sont organisées dans les centres agréés présents dans toutes les grandes villes. À Paris et en Île-de-France, plusieurs dizaines de centres proposent des sessions régulières. Pour les grandes métropoles régionales (Lyon, Marseille, Bordeaux, Toulouse, Nantes, Strasbourg, Lille), des centres agréés existent généralement dans les instituts culturels, les universités et certains organismes de formation. Pour les villes plus petites ou les zones rurales, il peut être nécessaire de se déplacer vers la métropole régionale pour trouver un centre.

À l'étranger, la carte mondiale des centres est consultable sur le site de France Éducation International via son moteur de recherche géographique, accessible depuis france-education-international.fr. Vous pouvez chercher un centre par pays, par ville, et filtrer selon le type d'examen proposé (DALF C1, DALF C2). La densité du réseau varie selon les régions : l'Afrique du Nord et l'Afrique subsaharienne francophone, l'Asie du Sud-Est, le Moyen-Orient, l'Europe et l'Amérique latine disposent généralement d'un bon nombre de centres. En revanche, dans certaines régions d'Asie centrale ou d'Afrique subsaharienne non francophone, les centres peuvent être rares et le déplacement vers une grande ville régionale peut être nécessaire.

## Les sessions DALF dans l'année : calendrier type

Les sessions DALF se tiennent généralement deux fois par an dans la plupart des centres, à des périodes qui correspondent approximativement au printemps (mars-mai) et à l'automne (octobre-décembre). Cependant, le calendrier précis varie selon les centres et les pays : certains centres organisent trois sessions par an, d'autres uniquement une. Pour les candidats qui ont un projet d'admission universitaire en France lié à une date spécifique, il est impératif de vérifier le calendrier précis du ou des centres sélectionnés le plus tôt possible.

En France métropolitaine, les principales sessions ont généralement lieu en juin (pour les candidats qui ont une date butoir d'admission à l'automne) et en novembre-décembre (pour les candidats qui ont une date butoir d'admission au printemps suivant). Les sessions de juin permettent d'avoir les résultats en août-septembre, juste à temps pour les inscriptions universitaires de rentrée. Les sessions de novembre permettent d'avoir les résultats en janvier-février, utiles pour les candidatures en master ou pour les établissements avec des admissions de printemps.

Pour les candidats vivant à l'étranger et souhaitant passer le DALF dans leur pays avant de rejoindre la France, il est recommandé de vérifier dès la fin de l'année précédente le calendrier du centre le plus accessible. Les sessions les plus populaires dans les grands centres (instituts français de Paris ou de grandes capitales étrangères) affichent complet parfois plusieurs semaines avant la date limite d'inscription.

## La procédure d'inscription au DALF : étape par étape

La procédure d'inscription au DALF varie légèrement selon les centres, mais le processus général suit les mêmes étapes dans la quasi-totalité des centres agréés.

La première étape est d'identifier le centre le plus accessible pour vous et de consulter son calendrier des sessions. La plupart des centres publient leurs calendriers sur leur site internet ou sur leur page officielle. Les informations disponibles indiquent la date de la session, la date limite d'inscription, les frais d'inscription et le contact à utiliser pour l'inscription.

La deuxième étape est l'inscription proprement dite. Certains centres proposent une inscription en ligne via leur site ou une plateforme dédiée. D'autres exigent une inscription en personne ou par courrier. L'inscription nécessite généralement la fourniture de quelques informations personnelles (nom, prénom, date de naissance, nationalité, adresse, coordonnées), le choix du niveau d'examen (DALF C1 ou DALF C2), et le règlement des frais d'inscription.

La troisième étape est le règlement des frais d'inscription. Les frais varient selon les centres mais sont généralement compris entre 90 et 150 euros en France et dans les centres étrangers des principales villes développées. Dans certains pays à économie émergente, les tarifs peuvent être différents selon les politiques locales des centres. Les modes de paiement acceptés varient : espèces, chèque, virement bancaire, carte bancaire selon les centres. Une fois le paiement effectué, vous recevez une confirmation d'inscription et, selon les centres, une convocation ou une attestation d'inscription.

## Les documents à fournir pour l'inscription

L'inscription au DALF nécessite de fournir quelques documents administratifs dont la liste exacte est précisée par chaque centre. Dans la généralité des cas, il vous sera demandé une photocopie de votre pièce d'identité (passeport ou carte nationale d'identité selon les pays), une ou deux photos d'identité récentes, un formulaire d'inscription dûment rempli (disponible sur le site du centre), et le justificatif de paiement des frais d'inscription.

Pour les candidats mineurs (en dessous de l'âge requis par le centre, généralement 16 ans), une autorisation parentale peut être demandée. Pour les candidats souhaitant des aménagements spéciaux liés à un handicap ou une désignation médicale (dyslexie, troubles de la vue, handicap moteur temporaire), une demande d'aménagement accompagnée d'un justificatif médical doit être soumise lors de l'inscription, bien avant la date de l'examen. Les aménagements accordés peuvent inclure du temps supplémentaire, un matériel spécifique (agrandissement des documents, outils d'accessibilité) ou une salle séparée.

## Après l'inscription : attendre et se préparer

Une fois inscrit, vous recevrez de votre centre une convocation précisant l'adresse exacte du lieu de l'examen (qui peut être différente du centre d'inscription), la date, l'heure de convocation (généralement 30 minutes avant le début des épreuves), les documents à apporter le jour J (pièce d'identité, convocation) et les règles de comportement.

Le jour de l'examen, arriver au moins 30 minutes à l'avance est fortement conseillé. Les retardataires se voient parfois refuser l'accès à la salle une fois l'épreuve commencée. Apportez votre pièce d'identité originale (non scan, non photocopie) qui sera vérifiée à l'entrée de la salle. N'apportez pas de téléphone portable allumé, de dictionnaire, ni aucun document de travail personnel dans la salle d'examen.

## Les résultats et le diplôme officiel

Après la session, les résultats sont communiqués au terme d'une période de correction et de modération qui dure généralement 6 à 8 semaines. Les centres notifient leurs candidats par e-mail, par voie postale ou en affichant les résultats sur leur site. France Éducation International centralise la vérification des résultats : si vous avez accès à un espace candidat en ligne, vous pouvez y consulter vos résultats par épreuve.

En cas de réussite, le diplôme officiel est édité par France Éducation International et envoyé au centre d'examen, qui vous le remet en main propre ou vous l'expédie par voie postale selon ses procédures. Le diplôme est un document officiel de l'État français, signé et certifié par des autorités compétentes. Il inclut votre identité, le niveau certifié (DALF C1 ou DALF C2), la date d'obtention et les notes de chaque épreuve. Conservez ce document précieusement dans un lieu sûr et faites-en des photocopies et des scans pour vos dossiers.

## Vérification et authentification du diplôme par les établissements

Certains établissements d'enseignement supérieur ou administrations qui reçoivent votre DALF peuvent souhaiter vérifier son authenticité. France Éducation International propose un service de vérification en ligne des diplômes DELF et DALF via son site, accessible aux institutions qui souhaitent confirmer qu'un diplôme présenté est authentique. Cette procédure rassure les établissements et vous protège contre tout risque de voir votre diplôme remis en cause.

## Témoignages sur les démarches d'inscription

**Laure Tchamba, 24 ans, venue du Cameroun, inscrite à Lyon** : «J'ai eu du mal à trouver les dates de session sur le site de l'Institut Français de Yaoundé au début. Une fois l'information trouvée, l'inscription était simple : un formulaire en ligne, une photo, et un règlement par virement. La convocation est arrivée deux semaines avant. La salle de passage était très bien organisée et les examinateurs pour l'oral étaient bienveillants.»

**Martina Torres, 25 ans, venue d'Argentine, passé le DALF à Buenos Aires** : «J'ai passé le DALF C1 à l'Alliance Française de Buenos Aires avant de venir en France. Le calendrier était publié six mois à l'avance sur leur site. Je me suis inscrite deux mois avant la session pour être sûre d'avoir une place. Les frais correspondaient à environ 90 euros à l'époque. L'attestation de résultats a été envoyée par e-mail six semaines après l'examen, bien avant mon départ pour Paris.»

## Questions fréquentes sur les inscriptions au DALF

**Q : Peut-on s'inscrire à plusieurs centres simultanément pour une même session ?**
Non. Il n'est ni nécessaire ni éthiquement approprié de s'inscrire dans plusieurs centres pour une même session, puisque les sujets sont identiques partout. Choisissez un seul centre pour votre session et engagez-vous dans cette inscription. Si votre premier choix est complet, cherchez un centre alternatif.

**Q : Les frais d'inscription sont-ils remboursés en cas d'annulation ?**
Les politiques de remboursement varient selon les centres. La plupart des centres ne remboursent pas les frais d'inscription si vous annulez après confirmation de votre place. Certains centres proposent un report de la candidature à une session ultérieure en cas d'annulation justifiée par un motif valable (maladie certificée, hospitalisation). Renseignez-vous sur la politique du centre avant de vous inscrire.

**Q : Faut-il une attestation de niveau préalable pour s'inscrire au DALF C1 ?**
Non. N'importe quel candidat peut s'inscrire directement au DALF C1 sans présenter de preuve de niveau préalable. Il n'y a pas de test d'admission à l'examen ni d'obligation d'avoir obtenu un DELF B2 auparavant. C'est à chaque candidat d'évaluer si son niveau est suffisant pour se présenter avec des chances raisonnables de réussite.

**Q : Comment obtenir une attestation de participation en attendant le diplôme officiel ?**
Si vous avez réussi le DALF C1 mais attendez toujours le diplôme officiel (dont la réception peut prendre plusieurs mois), demandez à votre centre d'examen une attestation de réussite provisoire. Ce document, daté et signé par le centre, peut être utilisé dans les dossiers d'admission au titre de preuve de résultat positif dans l'attente du diplôme officiel. La plupart des universités et administrations acceptent cette attestation provisoire.

## Ressources officielles

- [France Éducation International – Trouver un centre](https://www.france-education-international.fr/service/trouver-un-centre-examination) : Moteur de recherche officiel des centres DALF dans le monde entier
- [Institutfrancais.fr](https://www.institutfrancais.com) : Réseau mondial des instituts français, organisateurs de sessions DALF dans de nombreux pays
- [AllianceFrancaise.net](https://www.alliancefrancaise.net) : Réseau mondial des alliances françaises, également organisatrices de sessions DALF
`;

await appendAndPatch('32d3fae1-2380-423c-bd33-6cfc98cc4693', EXT2_L2);
await appendAndPatch('2ba85f3d-a957-4d2d-a409-9d476b648272', EXT2_L3);
await patch('43552b36-dbd4-45a5-90dc-57a50489795c', DALF4);
await patch('aabc2950-a557-42fd-aa56-2d90aa214883', DALF5);
await patch('ab646234-1557-47bc-be86-e73840dc02c8', DALF6);
