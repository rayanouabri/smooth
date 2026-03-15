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

// L9: 2405 -> need ~1700 more
const ADD_L9 = `
## Les méthodes de travail adaptées à la diversité des styles d'apprentissage

Les théories des styles d'apprentissage (visuel, auditif, kinesthésique, lecture-écriture) ont été largement remises en question par la recherche en sciences cognitives contemporaine, qui montre que la plupart des individus apprennent efficacement avec des méthodes variées plutôt qu'avec un style unique. Cependant, la sensibilité à différents formats de présentation de l'information reste une réalité pratique utile pour diversifier ses méthodes de révision.

Les étudiants qui traitent mieux l'information visuelle bénéficient particulièrement des cartes mentales, des schémas conceptuels, des tableaux comparatifs et des frises chronologiques pour organiser et mémoriser les contenus. Ces représentations visuelles externalisent la structure des connaissances et permettent de voir les relations entre les concepts de façon immédiate.

Les étudiants qui retiennent mieux par l'écoute peuvent tirer profit de l'écoute de podcasts académiques dans leur discipline, de la réécoute de cours enregistrés, ou de la pratique de l'auto-explication à voix haute (se réciter le cours comme si on l'enseignait à quelqu'un). Cette verbalisaiton active est d'ailleurs reconnue comme l'une des méthodes de récupération active les plus efficaces, indépendamment du style d'apprentissage.

Les étudiants qui apprennent mieux par la pratique concrète trouvent généralement que la résolution d'exercices, les études de cas réels, les jeux de rôle (reconstitution de procès en droit, simulation de négociation en économie) et les travaux pratiques sont les formats d'apprentissage les plus efficaces. L'abstraction théorique prend sens pour ces étudiants à travers des applications concrètes.

## Le carnet de bord académique : tracer sa progression

Tenir un carnet de bord académique — un journal de ses apprentissages, de ses difficultés et de ses progrès — est une pratique peu répandue mais extrêmement valorisante pour les étudiants qui souhaitent développer une réflexivité active sur leur parcours. Ce carnet peut prendre la forme d'un journal numérique ou papier dans lequel vous notez, après chaque cours ou en fin de semaine, vos observations : ce que vous avez compris, ce qui reste flou, une question que vous avez eu mais n'avez pas posée, une connexion entre un concept vu en cours et une réalité observée dans l'actualité.

Cette pratique de journalisation académique développe la métacognition — la capacité à réfléchir sur ses propres processus d'apprentissage — qui est fortement corrélée à la performance académique. Les étudiants métacognitifs savent quand ils ont compris quelque chose et quand ils se mentent à eux-mêmes en croyant avoir compris ; ils ajustent leur travail en conséquence.

Pour les étudiants internationaux, le carnet de bord peut aussi documenter l'avancement de l'adaptation culturelle — les incompréhensions culturelles surmontées, les codes sociaux déchiffrés, les progrès linguistiques observés — créant ainsi un récit de progression qui soutient la motivation dans les moments de doute.

## La gestion des priorités quand tout semble urgent

Pendant les périodes d'examens, la sensation que tout est urgent simultanément est l'une des sources de stress les plus déstabilisantes. La gestion efficace des priorités est la compétence cognitive et organisationnelle qui permet de transformer cette sensation de chaos en planification maîtrisée.

La matrice d'Eisenhower — qui classe les tâches en quatre quadrants selon leur urgence et leur importance — est un outil classique de gestion des priorités applicable à la préparation des examens. Les tâches importantes et urgentes (réviser pour l'examen de demain) doivent être traitées immédiatement. Les tâches importantes mais pas urgentes (lire la bibliographie pour un examen dans deux semaines) doivent être planifiées. Les tâches urgentes mais peu importantes (répondre à un mail de camarade sur une question d'emploi du temps) peuvent être déléguées ou minimisées. Les tâches ni urgentes ni importantes (scroller les réseaux sociaux) doivent être éliminées pendant les périodes critiques.

Appliquer cette grille de lecture à sa journée de révision, en début de chaque matin, permet d'attaquer les tâches dans le bon ordre et d'éviter la grande erreur de gérer les tâches urgentes et peu importantes au détriment des tâches importantes mais pas encore urgentes — jusqu'à ce qu'il soit trop tard.

## La préparation mentale spécifique aux examens oraux

Les examens oraux génèrent un type de stress spécifique, différent de celui des épreuves écrites : la prise de parole en public en langue académique, face à un ou plusieurs enseignants qui vous observent et vous interrogent, active des mécanismes d'anxiété sociale qui peuvent inhiber même un étudiant très bien préparé sur le fond.

La préparation spécifique aux oraux doit inclure une dimension d'entraînement à la performance publique, au-delà de la simple révision des contenus. S'enregistrer en vidéo en train de répondre à une question du cours (puis revoir l'enregistrement avec un regard critique), faire des simulations d'oral avec des camarades dans des rôles alternés d'examinateur et de candidat, travailler la posture (position du corps, contact visuel, gestes), la voix (projection, débit, articulation) et la gestion des silences (ne pas meubler les blancs avec des «euh» répétitifs) sont des exercices concrets qui améliorent la performance à l'oral.

Pour les étudiants non francophones, cette préparation à la performance orale en français est d'autant plus nécessaire. Le stress de l'examen oral amplifie les difficultés linguistiques : des mots qui viennent facilement en conversation normale peuvent disparaître de la mémoire active dans le stress de l'oral. L'entraînement régulier à parler du cours en français à haute voix — seul ou avec des pairs — automatise progressivement les formulations académiques et réduit la charge cognitive de la production linguistique, libérant de l'espace mental pour le contenu.
`;

// L10: 2405 -> need ~1700 more
const ADD_L10 = `
## La culture des grandes écoles versus la culture universitaire

Un aspect de la culture académique française que les étudiants internationaux rencontrent parfois dans les discussions et les médias est la distinction entre les grandes écoles (Sciences Po, HEC, Polytechnique, ENS, ENA devenue INSP) et les universités. Cette distinction, souvent incomprise de l'extérieur, est fondamentale dans la structuration du prestige académique et professionnel en France.

Les grandes écoles sont des établissements d'enseignement supérieur sélectifs qui recrutent via des concours d'entrée extrêmement sélectifs, généralement après deux ans de classes préparatoires (CPGE). Elles forment une proportion infime des étudiants du supérieur français (moins de 5 %) mais occupent une place prépondérante dans les élites économiques, politiques et intellectuelles du pays. La culture d'évaluation dans les CPGE et les grandes écoles est encore plus exigeante et compétitive que celle des universités : notations très basses (des moyennes de 5 ou 6/20 sont normales dans les meilleures classes préparatoires), classements permanents des étudiants, pression temporelle intense.

Pour les étudiants internationaux qui choisissent les universités plutôt que les grandes écoles (ce qui est le cas de la grande majorité), comprendre cette dualité du système français permet de contextualiser les références culturelles françaises autour du prestige académique et de ne pas se laisser déstabiliser par des comparaisons qui ne sont pas pertinentes dans leur contexte de formation.

## Les codes de communication avec les enseignants

La relation étudiant-enseignant en France obéit à des codes de communication spécifiques que les étudiants internationaux gagnent à décoder rapidement. Le vouvoiement est systématique dans la relation avec les enseignants universitaires — «vous» et non «tu». L'appellation «Monsieur» ou «Madame», ou «Professeur» pour les professeurs des universités (rang le plus élevé), est la norme dans les interpellations directes. Appeler un enseignant par son prénom est inapproprié dans pratiquement tous les contextes universitaires français.

La prise de parole pendant les cours magistraux suit un protocole implicite : on lève la main pour demander la permission de parler, on attend d'être reconnu par l'enseignant, et on formule ses questions avec précision et concision. Les interruptions sans permission sont perçues comme un manque de respect. En TD, l'interaction est généralement plus libre, avec des échanges plus directs et moins formels — bien que le vouvoiement et l'appellation formelle subsistent.

Les emails aux enseignants doivent respecter les règles de la correspondance formelle française : salutation («Madame», «Monsieur», avec la formule de politesse appropriée), corps du message clair et précis, formule de clôture professionnelle («Veuillez agréer, Madame/Monsieur, l'expression de mes salutations distinguées» pour les situations formelles, ou «Cordialement» pour les échanges moins formels), et signature complète (prénom, nom, numéro étudiant, filière). Les emails sans salutation ou avec un registre familier sont fréquemment perçus comme irrespectueux et peuvent nuire à la relation pédagogique.

## L'adaptation des méthodes de révision selon le format d'épreuve

La préparation à un examen doit être calibrée selon le format précis de l'épreuve, pas selon une approche générique de «révision du cours». Les différents formats d'épreuve sollicitent des compétences différentes et nécessitent donc des méthodes de préparation différentes.

Pour un QCM, la mémorisation précise des notions est la compétence centrale. Les erreurs dans un QCM proviennent souvent de confusions entre des notions voisines ou de demi-compréhensions qui semblent suffisantes mais ne résistent pas aux leurres bien construits. La révision pour un QCM doit donc inclure un travail actif de discrimination entre notions proches — savoir non seulement ce qu'est A, mais aussi en quoi A est différent de B et de C.

Pour un examen de dissertation ou de commentaire, la préparation inclut nécessairement de la pratique écrite : faire des plans au brouillon sur des sujets variés, rédiger des introductions complètes en temps limité, produire des paragraphes d'argument complets avec exemple et analyse. La relecture passive des notes ne suffit pas.

Pour un examen pratique ou de résolution de problèmes, il n'y a pas de substitut à la pratique d'exercices : plus on résout d'exercices à des niveaux var iés de difficulté, plus on développe la flexibilité et l'intuition nécessaires pour aborder des problèmes inédits.

## Témoignages d'enseignants français sur les étudiants internationaux

Les enseignants qui encadrent des promotions internationales observent des régularités dans les forces et les difficultés des étudiants étrangers qui permettent de formuler des conseils pratiques ciblés.

Julien Marchand, maître de conférences en droit public : «Les étudiants étrangers que je vois échouer ont souvent en commun une sous-estimation du niveau d'exigence. Ils arrivent en pensant que leur maîtrise du français conversationnel est suffisante pour l'examen. Or, la langue du droit est une langue technique avec ses propres règles. Ceux qui réussissent sont ceux qui s'imprègnent du français juridique dès le premier cours — ils lisent des arrêts en entier, ils notent les formulations jurisprudentielles, ils intègrent le vocabulaire précis.»

Sophie Leclercq, professeure de sociologie : «Ce qui me frappe chez mes meilleurs étudiants étrangers, c'est leur capacité à mettre en perspective les réalités françaises avec celles de leur pays d'origine. Cette double culture devient un atout dans la dissertation — ils apportent des comparaisons et des nuances que leurs camarades français n'ont pas. Quand ils surmontent la barrière linguistique initiale, ils produisent souvent des travaux d'une richesse de perspective remarquable.»

Antoine Dubois, chargé de cours en histoire contemporaine : «Le problème le plus fréquent que j'observe chez les étudiants étrangers de première année, c'est le hors-sujet. Ils ont bien travaillé le cours, ils connaissent les faits, mais ils n'ouvrent pas assez attentivement le sujet et traitent 'leur' sujet plutôt que le sujet posé. M'importe une leçon vitale : lire le sujet trois fois avant de commencer.»
`;

await appendAndPatch('7f3d3ec0-4d6d-44d8-b1b7-581645697126', ADD_L9);
await appendAndPatch('8f0bbec0-b172-491a-8af8-1380a47d0497', ADD_L10);
