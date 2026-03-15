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

// EXTENSION L2 : DALF C2
const EXT_L2 = `
## Les sujets types au DALF C2 : exemples et analyse

Pour préparer efficacement le DALF C2, il est utile de comprendre précisément le type de sujets proposés dans chacune des épreuves et les attentes des correcteurs. France Éducation International met à disposition des annales officielles sur son site — des sujets des sessions précédentes avec leurs barèmes de notation — qui constituent la ressource de référence absolue pour la préparation. Les exemples suivants illustrent la nature des sujets typiques sans reproduire des sujets officiels protégés.

Pour la compréhension de l'oral, un sujet typique de DALF C2 pourrait présenter un débat radiophonique d'une durée totale de 35 minutes entre trois experts (un économiste, un sociologue et un philosophe) sur les transformations du travail à l'ère numérique. Les questions demandraient d'identifier les thèses spécifiques de chaque expert, les points d'accord et de désaccord entre eux, les implications implicites de certaines affirmations et les présupposés idéologiques qui sous-tendent le discours de chaque locuteur. Cette épreuve teste non seulement la compréhension brute du discours mais la capacité à l'analyser critiquement en temps réel.

Pour la production écrite, un dossier documentaire de 4 à 5 textes de plusieurs pages chacun — articles de presse, extraits d'essais académiques, contributions à des débats d'opinion — pourrait porter sur la question de l'éducation aux médias dans les sociétés numériques. Le candidat doit produire un article de synthèse analytique qui met en perspective les sources, identifie leurs convergences et divergences, formule un point de vue argumenté et propose une problématique cohérente. Une production de moins de 600 mots ou une production qui paraphrase les sources sans les analyser sera pénalisée, quelle que soit la qualité grammaticale de la langue.

Pour la production orale, le candidat dispose de 60 minutes pour préparer un exposé de 15 minutes sur un dossier documentaire, suivi d'une interaction de 20 minutes avec le jury. L'exposé doit être structuré, argumenté et personnel — le candidat doit exprimer et défendre un point de vue, pas simplement résumer le dossier. Le jury cherche à évaluer la capacité du candidat à soutenir des positions sous la pression des questions, à reformuler ses arguments de manière nuancée et à démontrer une aisance dans la langue qui suggère une véritable intégration culturelle et intellectuelle dans le monde francophone.

## Conseils méthodologiques spécifiques pour le DALF C2

Réussir le DALF C2 demande une préparation qui intègre à la fois le travail systématique des compétences spécifiques à l'examen et une pratique intensive de la langue dans ses dimensions les plus exigeantes. Voici des recommandations méthodologiques précises pour chacune des quatre épreuves.

Pour la compréhension de l'oral, l'entraînement régulier à la prise de notes lors de l'écoute de conférences, séminaires et débats en français est indispensable. France Culture (radio publique culturelle) et RFI (Radio France Internationale) proposent quotidiennement des émissions d'une durée et d'une complexité lexicale et conceptuelle comparables aux documents du DALF C2. Entraînez-vous à écouter une émission de 20 à 30 minutes en notant synthétiquement les thèses et arguments principaux, puis à reformuler oralement ou par écrit les orientations du discours entendu sans consulter vos notes.

Pour la compréhension de l'écrit, la lecture analytique d'ouvrages académiques et d'essais intellectuels constitue la préparation la plus efficace. Choisissez des ouvrages qui couvrent des thèmes de société et des questions contemporaines traités avec rigueur intellectuelle : l'intelligence artificielle, les enjeux climatiques, les inégalités sociales, les mutations du travail, les questions de genre et d'identité. Au-delà de comprendre ces textes, entraînez-vous à identifier leur structure argumentative, leurs présupposés et leurs lacunes : c'est ce regard analytique que l'examen C2 vous demandera d'appliquer à des textes que vous n'avez jamais lus.

Pour la production écrite, rien ne remplace l'écriture régulière de textes longs et structurés. Imposez-vous l'exercice hebdomadaire de rédiger un article de synthèse de 600 à 800 mots à partir de trois ou quatre textes sur un même sujet. Faites corriger vos productions par un enseignant de FLE ou un locuteur natif cultivé pour obtenir un retour sur la précision lexicale, la richesse stylistique et la solidité de l'argumentation.

Pour la production orale, la pratique de l'exposé formel suivi d'un débat est la clé. Cherchez des opportunités de prendre la parole en français dans des contextes formels : groupes de conversation, conférences étudiantes, clubs de débat, présentations académiques. Si ces opportunités sont rares, l'enregistrement vidéo de vos propres exposés et leur visiionnage critique est une pratique utile pour identifier vos tics de langage, vos hésitations et vos lacunes dans l'argumentation orale.

## Questions fréquentes complémentaires sur le DALF C2

**Q : Le DALF C2 est-il nécessaire pour enseigner le français dans le secondaire en France ?**
Pour enseigner dans l'éducation nationale française en tant que professeur de lettres ou de français, les enseignants doivent obtenir le CAPES (Certificat d'Aptitude au Professorat de l'Enseignement du Second degré) ou l'Agrégation. Ces concours sont ouverts aux ressortissants de l'UE et, sous certaines conditions, à des ressortissants non-UE. Un DALF C2 est une preuve utile de maîtrise linguistique mais ne remplace pas les diplômes académiques (licence, master) et les concours du Ministère de l'Éducation Nationale qui qualifient pour l'enseignement.

**Q : Combien coûte l'inscription au DALF C2 ?**
Les frais d'inscription au DALF C2 varient selon le pays et le centre d'examen. En France, le coût est généralement autour de 100 à 130 euros par session. Dans les centres étrangers, les tarifs peuvent être différents selon le contexte local. Les centres d'examen officiels agréés par France Éducation International publient leurs tarifs sur leurs sites. Il est possible de demander des réductions ou des bourses auprès des instituts français pour les candidats en situation financière difficile.

**Q : Comment puis-je obtenir les annales officielles du DALF C2 pour préparer l'examen ?**
France Éducation International met à disposition gratuitement sur son site internet (france-education-international.fr) des exemples de sujets et des annales pour le DALF C1 et C2. Ces ressources officielles sont la référence absolue pour connaître le format exact de l'examen et les attentes des correcteurs. Des manuels commerciaux de préparation au DALF C2 sont également disponibles chez les éditeurs spécialisés en FLE (CLE International, Hachette FLE, Belin, Maison des Langues).
`;

// EXTENSION L3 : Le DALF, qu'est-ce que c'est
const EXT_L3 = `
## L'impact du DALF sur l'apprentissage et la motivation

La décision de préparer et de passer le DALF transforme fondamentalement l'approche de l'apprentissage du français. Un candidat qui se prépare au DALF C1 ou C2 n'apprend plus le français de façon passive mais active et ciblée. Il identifie ses lacunes spécifiques dans les compétences évaluées (compréhension fine, production argumentée) et travaille à les combler. Il lit des textes authentiques, écoute des émissions réelles, produit des écrits structurés et s'entraîne à l'expression orale formelle. Cette discipline de préparation, même si elle est temporairement focalisée sur les épreuves de l'examen, génère des acquisitions linguistiques et culturelles durables qui dépassent largement le cadre de l'examen.

Cette dimension motivationnelle du DALF est reconnue par les enseignants de FLE : fixer comme objectif le DALF C1 à un apprenant de niveau B2 solide structure l'apprentissage des mois suivants autour d'un horizon concret et valorisant. Les progrès sont mesurables par rapport à des critères précis (les grilles d'évaluation du DALF), l'atteinte de l'objectif est clairement définie (la réussite à l'examen), et la récompense est tangible (le diplôme). Ce cadre motivationnel est bien plus efficace qu'une démarche d'apprentissage sans horizon défini.

Pour les étudiants internationaux en France qui apprennent le français «sur le tas» par immersion quotidienne, se fixer l'objectif du DALF C1 (ou C2 pour ceux dont le niveau avancé permet d'y prétendre) donne une structure à un apprentissage informel. Les efforts faits pour préparer le DALF — lecture de la presse française, écoute de la radio, travail d'écriture formelle — s'intègrent de façon organique dans la vie universitaire et ne représentent pas un travail supplémentaire déconnecté du quotidien, mais plutôt une consolidation et une formalisation de ce qui s'apprend par l'immersion.

## Le DALF dans une perspective de francophonie mondiale

La France n'est pas le seul pays de langue française, et le DALF n'est pas uniquement utile pour un projet de vie en France. L'espace francophone mondial compte plus de 300 millions de locuteurs dans une cinquantaine de pays sur cinq continents, des rives canadiennes du Québec aux côtes méditerranéennes de la Tunisie, des grandes villes de l'Afrique subsaharienne aux archipels du Pacifique. Dans cet espace large et diversifié, le DALF C1 ou C2 constitue une certification reconnue de maîtrise du français qui valorise un projet de vie ou de carrière francophone bien au-delà des frontières de la France métropolitaine.

Pour les étudiants qui envisagent une carrière internationale dans des organisations francophones — l'Organisation Internationale de la Francophonie, les institutions de l'Union Africaine où le français est une langue officielle, les Nations Unies dont le français est une des langues de travail officielles, les banques de développement africaines, les organisations humanitaires actives en Afrique francophone — le DALF C2 est une certification qui valorise concrètement le profil dans les processus de recrutement de ces organisations.

Pour les étudiants qui étudient en France mais dont le projet à long terme est de rentrer dans leur pays d'origine avec une expertise enrichie par le séjour en France, le DALF représente une certification durable qui matérialise formellement les compétences linguistiques acquises et peut faciliter l'accès à des postes où la maîtrise du français est un avantage compétitif : entreprises multinationales présentes dans les pays francophones, cabinets de conseil actifs dans ces marchés, organisations internationales avec une présence locale.

## Le DALF et l'identité linguistique

Apprendre une langue jusqu'à la maîtrise représente bien plus qu'une acquisition fonctionnelle. C'est un voyage intellectuel et culturel qui élargit la vision du monde et enrichit la capacité de penser. Les chercheurs en psycholinguistique ont montré que les locuteurs plurilingues qui maîtrisent plusieurs langues à un niveau avancé présentent des capacités cognitives spécifiques : plus grande flexibilité mentale, meilleure gestion de l'ambiguïté, capacités accrues de méta-cognition. Atteindre le niveau C1 ou C2 en français n'est pas seulement un accomplissement diplômant mais une transformation cognitive réelle.

Pour les étudiants étrangers en France, le passage du DALF représente souvent un jalon symbolique important dans leur relation à la langue et à la culture françaises. C'est la reconnaissance formelle que leur investissement dans l'apprentissage du français a porté ses fruits à un niveau d'excellence. Cette reconnaissance a une valeur symbolique et identitaire qui dépasse la simple utilité administrative du diplôme.

## Questions fréquentes complémentaires

**Q : Le DALF est-il reconnu pour les demandes de regroupement familial en France ?**
Pour les procédures de regroupement familial et de rapprochement de conjoint en France, les autorités préfectorales peuvent exiger une preuve de maîtrise minimale du français. Le DALF C1 dépasse largement les exigences minimales qui sont généralement fixées à un niveau A1 ou A2 pour le conjoint souhaitant rejoindre un résident en France. Il constitue donc une preuve solide dans ce contexte.

**Q : Un enfant peut-il passer le DALF C1 ?**
Le DALF C1 et C2 est destiné aux adultes et aux adolescents à partir de 16 ans généralement. Pour les apprenants plus jeunes, il existe des versions adaptées du DELF (DELF Junior et DELF Prim) qui correspondent mieux à leur profil. Renseignez-vous auprès du centre d'examen pour les conditions d'âge spécifiques.

**Q : Le DALF certifie-t-il différemment selon qu'il est passé en France ou à l'étranger ?**
Non. Le diplôme DALF a la même valeur et la même reconnaissance, qu'il soit obtenu en France, en Allemagne, au Brésil, en Chine ou dans tout autre pays disposant d'un centre d'examen agréé. Les sujets, les barèmes et les procédures d'évaluation sont identiques partout dans le monde pour une même session. C'est garantie par France Éducation International dans sa gestion centralisée des sessions.
`;

await appendAndPatch('32d3fae1-2380-423c-bd33-6cfc98cc4693', EXT_L2);
await appendAndPatch('2ba85f3d-a957-4d2d-a409-9d476b648272', EXT_L3);
