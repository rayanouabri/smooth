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

// L5: 2556 -> need ~1500 more
const ADD_L5 = `
## Les nuances de la correction et les attentes by niveau

La dissertation de licence 1 et la dissertation de master 2 sont formellement du même genre, mais les attentes en termes de sophistication intellectuelle, de maîtrise des références théoriques et de finesse argumentative sont radicalement différentes. Comprendre où se situe le niveau attendu selon son cycle d'études permet de calibrer son investissement de façon appropriée et d'éviter deux écueils opposés : la sous-performance (produire un travail de niveau inférieur aux attentes) et l'over-engineering (consacrer une énergie disproportionnée à un exercice selon des standards qui ne correspondent pas au niveau de la formation).

En licence 1 et 2, l'enseignant évalue avant tout la maîtrise méthodologique de base (introduction avec problématique, plan en deux ou trois parties, conclusion avec ouverture), la connaissance des notions fondamentales du cours et la capacité à illustrer par des exemples appropriatifs. La profondeur de la réflexion théorique est appréciée en bonus mais n'est pas exigée.

En licence 3 et master 1, la maîtrise méthodologique est présupposée et non plus valorisée en tant que telle : l'enseignant évalue la qualité de la réflexion, la nuance de l'argumentation, la mobilisation de références précises (auteurs, concepts théoriques, données empiriques) et la capacité à formuler une position personnelle argumentée qui dépasse la simple exposition des cours.

En master 2, l'exigence de maturité académique atteint son point le plus élevé dans le cursus universitaire standard. Les productions écrites doivent témoigner d'une maîtrise des débats académiques actuels dans le champ disciplinaire, d'une capacité à articuler des positions théoriques complexes et contradictoires, et d'une voix argumentative personnelle qui prend position dans ces débats. L'imitation de l'enseignant ou la restitution de ses positions de cours, même élaborée, n'est plus suffisante à ce niveau.

## La citation et la référence dans les productions académiques françaises

La gestion des citations et des références bibliographiques est un marqueur important de La maturité académique dans les productions écrites universitaires françaises. Les normes varient légèrement selon les disciplines, mais quelques principes communs s'appliquent.

La citation directe (reproduction mot à mot d'un extrait de texte) doit être mise entre guillemets et suivie d'une référence précise (auteur, ouvrage, année, page). Elle ne doit pas être utilisée pour remplacer la reformulation personnelle quand celle-ci est possible : une dissertation qui enchaîne des citations sans les analyser constitue un collage, pas une production intellectuelle autonome. La citation directe est réservée aux formulations particulièrement frappantes ou précises que vous souhaitez analyser mot à mot.

La référence indirecte (paraphrase ou reformulation des idées d'un auteur sans guillemets) est acceptable et même encouragée, à condition d'être clairement attribuée à son auteur : «Selon Bourdieu, la reproduction sociale opère notamment via...», «Comme le montre Foucault dans Surveiller et Punir...». Cette attribution explicite distingue votre propre analyse des idées d'autres auteurs et démontre votre maîtrise des références du champ.

L'oubli d'attribution — utiliser une idée ou une formulation d'un auteur sans le citer — est une forme de plagiat même involontaire. Dans le doute, citez toujours vos sources.

## Les outils d'aide à la dissertation et leurs limites

Les outils d'aide à la rédaction — assistants grammaticaux, vérificateurs orthographiques, générateurs de plans — peuvent constituer des supports utiles dans le processus de préparation, à condition d'en comprendre les limites précises.

Un outil de correction grammaticale (Antidote, LanguageTool) est un complément légitime qui améliorera la qualité formelle d'un devoir maison, en signalant les fautes d'orthographe, les accords incorrects et les tournures syntaxiques maladroites. Son usage ne constitue pas une fraude — tout locuteur francophone de niveau avancé fait appel à ce type d'outil dans sa vie professionnelle.

En revanche, utiliser un outil de génération automatique de texte (chatbot, IA générative) pour produire tout ou partie d'une dissertation sans déclaration explicite est considéré comme une fraude académique dans la grande majorité des universités françaises qui ont mis à jour leurs règlements depuis 2023. Outre la sanction disciplinaire potentielle, cette pratique prive l'étudiant de l'apprentissage que l'exercice de dissertation visait à développer — un investissement perdu à long terme.

## La progression observable en dissertation sur plusieurs semestres

La progression dans la maîtrise de la dissertation française est un processus continu qui s'étend sur plusieurs semestres. Les étudiants qui s'y engagent sérieusement observent généralement une évolution en trois phases.

La première phase (semestres 1-2) est la phase d'apprentissage méthodologique : comprendre et appliquer la structure de la dissertation, maîtriser les formules d'introduction et de conclusion, identifier les types de sujets et les plans appropriés. Les notes sont souvent décevantes dans cette phase — ce qui est normal.

La deuxième phase (semestres 3-4) est la phase de consolidation : la structure méthodologique devient quasi automatique, permettant de consacrer son attention à la qualité du contenu argumentatif. Les notes s'améliorent significativement.

La troisième phase (semestres 5 et au-delà) est la phase de maîtrise : l'étudiant dispose d'un style argumentatif personnel, d'une connaissance approfondie du champ disciplinaire et d'une capacité à produire des analyses originales et nuancées. Les meilleures productions de cette phase commencent à ressembler à des publications académiques de vulgarisation.

Cette progression est universelle et ne dépend pas de la langue maternelle de l'étudiant : des étudiants non francophones atteignent les niveaux les plus élevés de maîtrise de la dissertation française, avec plus d'étapes et de travail mais au même niveau de finesse intellectuelle que leurs camarades de langue maternelle française.
`;

// L6: 2598 -> need ~1500 more
const ADD_L6 = `
## Le rôle des associations étudiantes dans la gestion de l'échec

Les associations étudiantes jouent un rôle souvent méconnu mais précieux dans l'accompagnement des étudiants en difficulté. Au-delà de leur dimension festive et sociale, beaucoup d'associations universitaires développent des services d'aide à la réussite : permanences de conseil, bibliothèques de ressources pédagogiques partagées (annales, fiches de cours, conseils de méthode), groupes de révision collectifs, et connexions vers les services administratifs et sociaux de l'université.

Les associations d'étudiants étrangers sont des ressources particulièrement pertinentes pour les étudiants internationaux en difficulté. Composées d'étudiants qui ont vécu les mêmes défis d'adaptation, elles offrent un cadre de solidarité et d'expérience partagée que les services institutionnels ne peuvent pas reproduire. Un étudiant sénégalais en difficulté dans une université parisienne a plus de chances de trouver une oreille compréhensive et des conseils pratiques adaptés dans l'association des étudiants africains de son université que dans les services académiques génériques, même bienveillants.

Les tuteurs pairs issus des associations étudiantes qui accompagnent bénévolement leurs camarades représentent souvent la forme d'aide la plus efficace pour surmonter les obstacles académiques spécifiques aux étudiants internationaux : recommandations de ressources en bibliographie francophone accessible, explications des codes culturels implicites de l'université française, retours francs sur les productions académiques en langue seconde.

## L'importance du projet professionnel dans la gestion de l'échec

La solidité du projet professionnel est un facteur déterminant de la capacité à rebondir après un échec académique. Un étudiant qui sait clairement pourquoi il est en France et ce qu'il veut faire de sa formation trouve plus facilement la motivation pour traverser une période difficile et reconstruire une trajectoire académique cohérente. À l'inverse, un étudiant qui a choisi sa filière de façon peu réfléchie ou sous des pressions extérieures (famille, situation administrative) est plus vulnérable à l'abandon définitif après un premier échec.

La réflexion sur son projet professionnel n'est jamais perdue de temps, même en période de révision intensive. Les services d'orientation universitaire (SCUIO-IP) proposent des entretiens individuels d'orientation et de projet professionnel qui permettent de clarifier ses motivations profondes, d'explorer des voies alternatives et de construire un projet académique motivant. Ces entretiens sont gratuits et accessibles à tous les niveaux du cursus, pas uniquement aux étudiants de terminale.

## La dimension administrative post-échec : délais et démarches

La gestion administrative d'un échec académique comporte plusieurs démarches avec des délais à respecter scrupuleusement. Après la publication des résultats, le délai de demande d'inscription en session 2 est généralement court (une à deux semaines). Si vous souhaitez redoubler, la demande doit être déposée avant la date limite de réinscription académique, qui varie selon les établissements. Si vous envisagez une réorientation via Parcoursup, la période de candidature de réorientation (généralement janvier-mars pour une rentrée au semestre 2) doit être anticipée dès décembre.

Les étudiants étrangers doivent en plus coordonner ces démarches académiques avec les obligations liées à leur titre de séjour. Un changement de formation implique d'informer la préfecture, car le titre de séjour est lié à une formation précise. Un gap entre deux inscriptions doit être géré de façon à ne pas se retrouver en situation irrégulière — consultez le service des étudiants étrangers de votre université pour vous assurer que votre situation administrative reste régulière pendant toute période de transition.

## Les indicateurs de progression et d'adaptation culturelle

Après plusieurs semestres dans le système universitaire français, certains indicateurs permettent de mesurer l'adaptation culturelle et académique d'un étudiant international. Sur le plan académique : amélioration progressive des notes de dissertation ou de commentaire de texte, réduction du nombre de questions fondamentales sur le fonctionnement du système, capacité à anticiper les types de sujets qui tomberont à l'examen, et aisance croissante dans la consultation des services universitaires.

Sur le plan linguistique : réduction des erreurs grammaticales majeures dans les productions écrites, enrichissement du vocabulaire académique actif, fluidité croissante à l'oral en situations académiques (exposés, questions en cours), et capacité à suivre des cours magistraux denses sans devoir constamment demander des répétitions.

Sur le plan culturel : compréhension des non-dits de la vie universitaire française (comment se comporter avec les enseignants, quand il est acceptable de quitter le cours, comment interpréter les silences), adoption des codes vestimentaires et comportementaux de l'université, et développement d'un réseau social mixte (pas uniquement avec des compatriotes).

Ces indicateurs de progression, observés sur plusieurs semestres, dessinent la trajectoire d'intégration académique et culturelle qui transforme un étudiant étranger arrivé récemment en France en un acteur pleinement compétent du système universitaire français.
`;

await appendAndPatch('24c0f17e-d65c-454f-89cd-43757ff78407', ADD_L5);
await appendAndPatch('fc3dae13-7dd7-4761-bca4-00b6508b8cc5', ADD_L6);
