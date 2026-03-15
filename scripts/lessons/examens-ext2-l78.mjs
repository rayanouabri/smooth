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

// L7: 2194 -> need ~1900 more
const ADD_L7 = `
## L'évaluation des besoins d'aménagement : un processus personnalisé

Chaque demande d'aménagement fait l'objet d'une évaluation individualisée par le service compétent de l'université. Cette évaluation ne consiste pas à appliquer un barème rigide selon le diagnostic médical, mais à analyser les limitations fonctionnelles spécifiques de l'étudiant dans le contexte précis des épreuves d'examen. Deux étudiants avec le même diagnostic (par exemple, dyslexie sévère) peuvent avoir des besoins d'aménagement différents selon la nature de leurs limitations fonctionnelles spécifiques, le type d'épreuves de leur formation et les stratégies compensatoires qu'ils ont développées.

Cette personnalisation implique que la demande d'aménagement ne peut pas se faire par simple déclaration : elle nécessite un entretien avec un professionnel (médecin universitaire, neuropsychologue, RQTH reconnu) qui évalue de façon précise et documentée les limitations de l'étudiant et formule des recommandations d'aménagement proportionnées. Ce processus est certes contraignant en termes de démarches, mais il garantit que les aménagements accordés correspondent réellement aux besoins et produisent l'effet de compensation souhaité.

## Les aménagements en licence versus en master

Les aménagements d'examen suivent l'étudiant tout au long de son parcours universitaire, du moment qu'ils sont régulièrement renouvelés selon la procédure de chaque établissement. Le passage de la licence au master peut cependant nécessiter une réévaluation des besoins, car les formats d'évaluation changent significativement : les masters accordent généralement plus d'importance aux mémoires, aux soutenances orales et aux productions longues qu'aux examens sur table, ce qui peut modifier la nature des aménagements pertinents.

Pour les mémoires de master, les aménagements les plus courants concernent les délais (extension de la date limite de remise pour les étudiants ayant des difficultés de production écrite liées au handicap) et les conditions de soutenance (temps supplémentaire pour la présentation orale, support adapté pour la soutenance). Ces aménagements doivent faire l'objet d'une demande spécifique auprès du service handicap et du directeur de mémoire.

## La collaboration entre le service handicap et les équipes pédagogiques

La mise en œuvre effective des aménagements d'examen nécessite une collaboration entre le service handicap de l'université, les services d'examen (secrétariats pédagogiques), et les enseignants. Cette coordination, qui peut sembler aller de soi, requiert en pratique des délais et des processus formalisés pour garantir que les aménagements décrits dans la notification officielle sont effectivement mis en place le jour de l'examen.

Les problèmes de mise en œuvre les plus fréquents incluent : la notification transmise à la dernière minute sans que le secrétariat ait eu le temps de préparer la salle adaptée ou le matériel spécifique ; la notification reçue par le secrétariat mais non transmise aux surveillants ; le surveillant qui, par méconnaissance de la procédure, refuse d'appliquer l'aménagement prévu. Dans chacun de ces cas, l'étudiant doit avoir sur lui une copie de sa notification officielle d'aménagement le jour de l'examen, et peut exiger son application en faisant appel au responsable de scolarité présent dans le bâtiment des examens.

## Les aménagements et leur impact sur la relation aux autres étudiants

Un aspect souvent non abordé des aménagements d'examen est leur impact sur la relation de l'étudiant bénéficiaire avec ses camarades. Le tiers-temps supplémentaire, en particulier, peut être source de remarques parfois désobligeantes de la part d'autres étudiants qui perçoivent cet avantage de temps comme une «faveur injuste». Cette incompréhension reflète une méconnaissance de la nature des aménagements : le tiers-temps ne donne pas un avantage à l'étudiant handicapé par rapport aux autres — il vise à compenser un désavantage réel pour rétablir une égalité de chance de performance.

Gérer ces situations sociales requiert parfois une dose de pédagogie tranquille : rappeler à un camarade mal informé que l'aménagement vise la compensation d'un désavantage, pas l'octroi d'un privilège. Dans les cas de comportements franchement discriminatoires ou blessants, ne pas hésiter à en parler avec un référent de l'université (responsable de la vie étudiante, service de médiation).

## Les ressources numériques accessibles en situation de handicap

La transformation numérique de l'université ouvre des ressources d'accessibilité importantes pour les étudiants en situation de handicap. Les cours en ligne enregistrés (podcast audio, vidéo sous-titrée) permettent aux étudiants malentendants ou à ceux qui ont des difficultés de traitement de l'information orale de réécouter les cours à leur rythme, avec pause et retour en arrière. Les polycopiés et supports de cours en version numérique sont compatibles avec les logiciels de synthèse vocale et d'agrandissement, contrairement aux versions papier.

Les bibliothèques universitaires disposent de postes informatiques équipés de logiciels d'assistance (Zoomtext, JAWS pour déficients visuels, Dragon NaturallySpeaking pour la dictée vocale) qui peuvent être réservés à l'avance pour des sessions de travail adaptées. Des services de numérisation de documents sur demande sont également disponibles dans certaines bibliothèques pour les étudiants qui ne peuvent pas manipuler des documents imprimés.

Les MOOC (Massive Open Online Courses) et autres ressources d'apprentissage en ligne sont souvent plus accessibles que les formats présententiels traditionnels pour certains types de handicap, offrant une flexibilité de lieu, de rythme et de format qui correspond mieux à des besoins spécifiques.
`;

// L8: 2565 -> need ~1500 more
const ADD_L8 = `
## Les dimensions culturelles du rapport au stress dans les examens

Le rapport au stress académique varie considérablement selon les cultures et les systèmes éducatifs d'origine. Dans certaines cultures à haute performance académique (Corée du Sud, Japon, Chine, certains pays d'Asie du Sud-Est), le niveau de pression académique subi dès l'enfance est extrêmement élevé, et les étudiants originaires de ces systèmes peuvent paradoxalement mieux tolérer le stress d'examen français perçu comme modéré en comparaison. À l'inverse, des étudiants venant de systèmes moins sélectifs peuvent être déstabilisés par l'intensité de la pression ressentie en France.

La culture française elle-même entretient un rapport ambivalent au stress académique. Le système des grandes écoles (Sciences Po, ENA, Polytechnique, Normale Sup) valorise historiquement une pression académique intense comme facteur de sélection et de formation des élites, tandis que le mouvement de bien-être étudiant (bien développé dans les médias depuis les années 2010) prône une réduction de cette pression au profit de la santé mentale et de l'apprentissage intrinsèque. Cette tension culturelle interne est visible dans les attitudes des enseignants français vis-à-vis du stress étudiant : certains le considèrent comme formateur et nécessaire, d'autres comme contre-productif et délétère.

Comprendre ce contexte culturel aide les étudiants étrangers à interpréter les comportements et les discours de leur environnement académique avec plus de nuance, sans sur-interpréter certaines attitudes enseignantes comme hostiles ou sans sous-estimer l'importance des enjeux académiques.

## La procrastination : comprendre pour dépasser

La procrastination — différer indéfiniment les tâches désagréables ou anxiogènes — est un phénomène universel mais particulièrement prévalent dans les contextes à fort enjeu perçu comme les révisions d'examens. Elle n'est pas principalement un problème de paresse ou de manque de volonté, comme une morale simpliste le suggère, mais un mécanisme de régulation émotionnelle : face à une tâche associée à des émotions négatives (peur de l'échec, sentiment d'incompétence, anxiété), le cerveau préfère l'évitement — une soulagement à court terme — à l'engagement — plus désagréable à court terme mais bénéfique à long terme.

Des stratégies cognitivo-comportementales éprouvées aident à surmonter la procrastination. La décomposition de la tâche redoutée («réviser le cours de statistiques») en actions minimales concrètes («ouvrir le cours de statistiques chapître 3 et lire les deux premières pages») réduit la dimension intimidante de la tâche et diminue l'activation émotionnelle associée. L'engagement contractuel (annoncer à un camarade qu'on va travailler pendant telle durée, utiliser des applications de comptabilité comme Focusmate) exploite la dynamique sociale pour renforcer la motivation.

L'auto-compassion — traiter ses propres difficultés de motivation avec la même bienveillance qu'on accorderait à un ami dans la même situation — est une approche documentée par des recherches en psychologie positive pour réduire la procrastination. Le perfectionnisme auto-critique qui accompagne souvent la procrastination («je dois faire ça parfaitement ou ça ne vaut pas la peine de commencer») est remplacé par une attitude plus réaliste et efficace («commencer imparfaitement est toujours mieux que ne pas commencer»).

## Le soutien par les pairs : groupes de révision et responsabilisation mutuelle

Les groupes de révision entre pairs constituent une forme de soutien mutuel qui combine les bénéfices de la socialisation (maintien de la motivation dans la durée), de l'explication mutuelle (la meilleure façon d'apprendre quelque chose est de l'expliquer à quelqu'un) et de la responsabilisation collective (les membres du groupe se tiennent mutuellement comptables de leurs engagements de travail).

Un groupe de révision efficace a quelques caractéristiques communes. Il est suffisamment petit (3 à 6 personnes) pour permettre des échanges substantiels. Il comprend des membres de niveaux comparables (des niveaux trop hétérogènes créent des déséquilibres de contribution). Il suit un agenda précis — sujets à traiter, format des échanges (questions-réponses, exercices collectifs, corrections croisées) — plutôt que de laisser les séances dériver vers des conversations hors sujet. Et il est régulier, avec des séances hebdomadaires planifiées à l'avance plutôt que des réunions improvisées.

Pour les étudiants internationaux, les groupes de révision mixtes (avec des étudiants français) sont doublement bénéfiques : en plus des bénéfices académiques, ils constituent une immersion dans le français académique oral et une opportunité de comprendre les intuitions et les raisonnements que les étudiants français ont naturellement internalisés mais que les étudiants étrangers doivent expliciter.

## La construction de rituels positifs autour des examens

Les rituels — séquences d'actions habituelles associées à des états émotionnels spécifiques — sont des outils psychologiques puissants pour conditionner des états mentaux productifs. Les sportifs de haut niveau utilisent des rituels pré-compétition pour se mettre dans un état d'activation optimal. Les artistes utilisent des rituels de préparation pour entrer dans «la zone» de concentration créative. Les étudiants peuvent développer de façon analogue des rituels de préparation aux examens qui signalent au cerveau le passage à un mode de concentration et de performance.

Ces rituels peuvent être très simples : toujours s'installer dans le même espace de travail, organiser son bureau d'une certaine façon avant de commencer, écouter la même musique de mise en concentration, ou réaliser une courte séquence d'exercices de pleine conscience. L'important n'est pas le contenu spécifique du rituel, mais sa répétition cohérente à chaque session de révision ou d'examen, qui crée progressivement une association automatique entre le rituel et l'état mental souhaité.

Développer ces rituels prend plusieurs semaines de pratique régulière. L'investissement est faible mais le retour potentiel — un état mental de préparation optimale déclenché presque automatiquement avant chaque épreuve — peut être significatif, particulièrement pour les étudiants qui ont tendance à l'anxiété situationnelle.
`;

await appendAndPatch('4f448018-2528-4570-9038-1abcbe1be9b6', ADD_L7);
await appendAndPatch('201a89fd-1685-4864-b756-6524941dadc8', ADD_L8);
