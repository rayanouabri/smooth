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

// L2 needs ~200 more words
const ADD_L2 = `
## Perspectives internationales sur la reconnaissance du DALF C2

Le DALF C2, en tant que niveau de maîtrise le plus avancé de la certification officielle française, est reconnu au-delà des seules frontières de l'espace francophone par de nombreuses institutions académiques et professionnelles internationales qui valorisent les locuteurs de langues secondes capables d'opérer à un niveau de compétence native ou quasi-native. Dans plusieurs pays anglophones où les universités accueillent des étudiants francophones ou des étudiants souhaitant poursuivre des études partiellement en français (notamment au Canada anglophone, en Belgique flamande ou aux Pays-Bas), le DALF C2 est reconnu comme preuve de compétence linguistique suffisante pour les programmes d'enseignement en langue française. Les entreprises multinationales opérant en milieu francophone, qu'elles soient basées à Paris, Montréal, Bruxelles, Genève ou ailleurs, considèrent le DALF C2 comme une attestation de compétence professionnelle complète en français, suffisante pour occuper des postes de direction ou d'expertise dans un environnement entièrement francophone. Cette reconnaissance internationale croissante confirme la valeur durable du DALF C2 comme investissement dans le capital linguistique d'un locuteur engagé dans une trajectoire professionnelle ou académique internationale.
`;

// L3 needs ~200 more words
const ADD_L3 = `
## Le DALF dans une stratégie globale d'intégration francophone

Considérer le DALF uniquement comme une exigence administrative serait réducteur. Pour les candidats qui s'y préparent sérieusement, l'examen est avant tout un cadre structurant qui donne un objectif précis à plusieurs mois d'immersion linguistique intense. Les candidats qui ont préparé le DALF et réussi témoignent régulièrement d'un saut qualitatif dans leur rapport à la langue française qui va bien au-delà de ce que le diplôme atteste officiellement : une légitimité nouvelle dans les interactions formelles en français, une confiance accrue dans l'expression écrite et orale, et une curiosité intellectuelle renforcée pour la culture et les débats de la société française. Cette transformation dépasse la simple certification. Le DALF, quand il est préparé avec sérieux, agit comme un catalyseur d'intégration culturelle et linguistique qui enrichit durablement la relation du locuteur avec la langue française et le monde francophone. C'est en ce sens que la certification s'inscrit dans une stratégie d'intégration globale qui bénéficie au candidat bien au-delà de ses études ou de son parcours professionnel immédiat.
`;

// L4 needs ~800 more words
const ADD_L4 = `
## Approfondir la préparation avec des partenaires d'échange linguistique

L'une des voies les plus efficaces et les moins coûteuses pour préparer la production orale du DALF C1 est de trouver un partenaire d'échange linguistique natif ou locuteur avancé du français avec qui pratiquer régulièrement la prise de parole formelle. Dans les grandes villes étudiantes françaises, les plateformes d'échange linguistique (tandem, My Language Exchange, Meetup francophone) permettent de trouver des locuteurs natifs qui cherchent eux-mêmes à améliorer une langue que vous maîtrisez. La réciprocité de l'échange crée une relation motivante et durable, et la pratique régulière avec un locuteur natif affine progressivement les aspects phonologiques et pragmatiques de la production orale que les manuels ne peuvent pas enseigner.

Pour bénéficier au maximum de ces échanges dans le cadre d'une préparation DALF, orientez-les délibérément vers des formats qui ressemblent à l'épreuve orale : prenez un article de presse, lisez-le individuellement, puis faites un exposé de 5 minutes sur sa problématique centrale, suivi d'une discussion avec des objections et des questions. Cette simulation régulière, même informelle, développe une aisance à l'exposé et à l'interaction qui complète efficacement les simulations d'examen plus formelles.

## La dimension interculturelle dans la préparation au DALF C1

Le DALF C1 n'évalue pas seulement des compétences linguistiques au sens strict mais aussi une compétence communicative qui inclut une dimension interculturelle. Les documents proposés à l'examen reflètent la société française dans ses débats, ses valeurs, ses références culturelles et historiques. Un candidat qui n'a aucune familiarité avec les grandes questions qui traversent la société française — la laïcité, le service public, le rapport à l'autorité, les conflits sociaux, la relation entre culture et identité nationale — aura plus de difficultés à interpréter les nuances des documents et à construire des réponses contextualisées que le jury attendrait d'un locuteur avancé.

Un investissement dans la compréhension de ce contexte socioculturel français enrichit considérablement la préparation au DALF. La lecture des éditoriaux du Monde, des chroniques de L'Obs, des émissions de débat de France Culture ou d'Arte vous plonge dans les codes interprétatifs et les références partagées que le DALF C1 sollicite implicitement. Plus vous intégrez ces codes, plus vous pouvez aller au-delà du simple contenu linguistique des documents pour exprimer des analyses finement nuancées, ce qui est précisément ce que les évaluateurs attendent au niveau C1.

## Autoévaluation rigoureuse : mesurer ses propres progrès

L'autoévaluation objective de son propre niveau est l'une des compétences les plus utiles dans la préparation au DALF C1. Sans retour externe régulier (d'un professeur, d'un correcteur, d'un partenaire d'échange), il est facile de surestimer ou sous-estimer ses progrès et de maintenir des zones d'aveuglement sur ses lacunes réelles. Certains outils d'autoévaluation sont particulièrement efficaces.

Enregistrez-vous lors de vos exposés oraux et réécoutez-vous de manière critique : repérez les hésitations excessives, les répétitions lexicales, les erreurs grammaticales récurrentes et les problèmes de structure argumentative. Cette écoute critique de soi-même, inconfortable au début, est l'un des plus puissants accélérateurs de la progression orale. De même, relisez vos productions écrites avec les yeux d'un correcteur, en appliquant délibérément la grille d'évaluation officielle critère par critère : est-ce que cette production mérite la note maximale pour la pertinence du contenu ? Pour la richesse lexicale ? Pour la correction grammaticale ? Cette grille est disponible sur le site de France Éducation International et constitue un outil de référence précieux pour l'autoévaluation.
`;

// L5 needs ~650 more words
const ADD_L5 = `
## L'écoute intensive et extensive dans la préparation à la compréhension de l'oral

La distinction entre écoute intensive et écoute extensive est fondamentale dans une préparation efficace à la compréhension de l'oral du DALF C1. L'écoute intensive consiste à travailler en profondeur un document audio spécifique : l'écouter plusieurs fois, noter les informations avec précision, identifier le vocabulaire inconnu, analyser la structure argumentative. L'écoute extensive, à l'opposé, consiste à s'exposer massivement à des contenus audios français variés sans pression de compréhension totale, simplement pour habituer l'oreille et les mécanismes cognitifs de traitement du français oral à la diversité des accents, des débits et des registres.

Les deux pratiques sont complémentaires et nécessaires. L'écoute intensive développe la précision de traitement et les compétences de prise de notes ; l'écoute extensive développe la fluidité cognitive et la reconnaissance automatique des structures, ce qui réduit la charge mentale lors de l'examen. Pour optimiser l'écoute extensive, adoptez des pratiques qui s'intègrent naturellement dans votre vie quotidienne : écouter France Inter ou France Info pendant le trajet du matin, regarder une série française en version originale le soir, suivre une émission de débat sur Arte. Ces expositions régulières s'accumulent sur des semaines et des mois pour construire une robustesse auditive que des sessions d'écoute intensive seule ne pourraient pas produire.

## Comprendre et exploiter le rapport de jury du DALF

France Éducation International publie chaque année des rapports de jury pour les épreuves des diplômes DELF/DALF. Ces rapports, disponibles sur le site officiel, analysent les performances des candidats lors des sessions récentes, identifient les erreurs les plus fréquentes, et formulent des recommandations spécifiques pour les candidats futurs. Ces rapports constituent une ressource hautement précieuse et très peu utilisée par les candidats qui se préparent sans accompagnement professionnel.

Un rapport de jury précise comment les correcteurs interprètent les consignes d'épreuve, quels types de réponses obtiennent les notes maximales, quelles erreurs récurrentes plombent les notes aux différents critères. Lire attentivement le rapport de jury du DALF C1 de la ou des dernières sessions disponibles vous donne un accès direct à la «pensée» du jury, ce qui est un avantage préparatoire concret. Ces rapports sont généralement disponibles en téléchargement gratuit sur la section ressources du site de France Éducation International.

## Construire et maintenir un journal de bord de préparation

Le maintien d'un journal de bord de préparation systématique est une pratique recommandée par de nombreux préparateurs expérimentés au DALF C1. Ce journal, qu'il soit numérique ou papier, enregistre vos sessions de travail quotidiennes, les ressources utilisées, les difficultés rencontrées, les progrès observés et les objectifs pour les prochaines sessions. Cette pratique réflexive présente plusieurs bénéfices : elle maintient la motivation en rendant visibles les progrès accumulés sur plusieurs semaines, elle identifie les patterns de difficultés récurrentes, et elle assure que vous ne ré-entraînez pas les mêmes compétences en négligeant d'autres. Un journal de bord bien tenu est aussi un outil de planification : en le relisant, vous pouvez évaluer si votre préparation est suffisamment équilibrée entre les quatre compétences ou si certaines reçoivent une attention disproportionnée.
`;

// L6 needs ~550 more words
const ADD_L6 = `
## La préparation logistique le jour de l'examen

La préparation au DALF C1 ou C2 ne concerne pas seulement les compétences linguistiques et les connaissances thématiques. Une préparation logistique rigoureuse pour le jour de l'examen est tout aussi importante pour garantir une performance optimale. De nombreux candidats compétents ont vu leur performance affectée par des problèmes logistiques évitables le jour J.

Préparez la veille au soir l'ensemble des documents que vous devez apporter : pièce d'identité valide (celle déclarée lors de l'inscription), convocation officielle au nom du centre imprimée, stylo à bille bleu ou noir (les épreuves écrites se font à la main — plusieurs stylos de rechange au cas où), montre si vous souhaitez suivre le temps sans chercher l'horloge de la salle. Dans certains centres, un justificatif de séjour peut aussi être demandé pour les candidats étrangers — vérifiez les exigences spécifiques de votre centre dans votre convocation.

Calculez le temps de trajet jusqu'au centre d'examen la veille, en prenant en compte les possibilités de retards sur les transports. Arrivez avec au moins 30 minutes d'avance : les retards au-delà d'une certaine durée après le début de l'épreuve peuvent entraîner votre exclusion de la salle, sans possibilité de rattrapage ni de remboursement. Manger quelque chose de nourrissant avant l'examen contribue également à la stabilité cognitive pendant les longues épreuves de compréhension et de production qui peuvent durer plusieurs heures.

## Retours d'expérience sur les formats des centres d'examen

Les conditions matérielles d'examen varient selon les centres. Certains centres organisent les épreuves dans des salles universitaires standardisées avec des tables individuelles et un espacement suffisant. D'autres utilisent des salles de cours conventionnelles avec des espaces plus réduits. La qualité acoustique pour les épreuves de compréhension de l'oral peut varier : certains centres utilisent des systèmes audio de qualité professionnelle, d'autres ont des équipements plus modestes. Si vous avez la possibilité de visiter le centre à l'avance lors d'une session d'information ou d'un examen blanc proposé par le centre lui-même, profitez-en pour vous familiariser avec l'environnement physique.

Pour la production orale, les candidats passent souvent dans des salles séparées différentes de celles utilisées pour les épreuves collectives. La salle de production orale est en général une salle plus petite avec deux ou trois examinateurs autour d'une table. Certains candidats trouvent cette configuration intimidante et bénéficient de s'y préparer psychologiquement à l'avance, en imaginant concrètement la scène et en se rappelant que les examinateurs sont des professionnels formés pour mettre les candidats à l'aise plutôt qu'à les déstabiliser.
`;

await appendAndPatch('32d3fae1-2380-423c-bd33-6cfc98cc4693', ADD_L2);
await appendAndPatch('2ba85f3d-a957-4d2d-a409-9d476b648272', ADD_L3);
await appendAndPatch('43552b36-dbd4-45a5-90dc-57a50489795c', ADD_L4);
await appendAndPatch('aabc2950-a557-42fd-aa56-2d90aa214883', ADD_L5);
await appendAndPatch('ab646234-1557-47bc-be86-e73840dc02c8', ADD_L6);
