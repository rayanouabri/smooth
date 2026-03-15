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

const EXT_L5 = `
## L'histoire et les origines de la dissertation française

La dissertation française est un genre académique qui plonge ses racines dans la tradition rhétorique et philosophique des XVIIe et XVIIIe siècles français. Elle s'est progressivement codifiée dans le système scolaire sous la modernisation républicaine du XIXe siècle, qui en a fait l'exercice de référence du baccalauréat et des concours d'entrée aux grandes écoles. Son omniprésence dans le système éducatif français est à la fois une marque de tradition et un objet de débat pédagogique vivant : ses défenseurs y voient la formation par excellence à la rigueur intellectuelle et à l'expression structurée de la pensée ; ses détracteurs lui reprochent d'être un exercice formel qui valorise la conformité aux normes rhétoriques au détriment de la créativité et de la pensée originale.

Pour l'étudiant international, cette tension est une information utile : la dissertation française est un genre avec des conventions fortes qui doivent être maîtrisées pour réussir les examens, mais qui ne doivent pas étrangler l'expression d'une pensée personnelle authentique. Les meilleurs dissertations françaises combinent la rigueur structurelle du genre avec une vraie profondeur de réflexion, des exemples originaux et une voix argumentative personnelle.

## La note de synthèse : une variante disciplinaire

Dans certaines filières, notamment en droit, en sciences politiques et dans les formations aux métiers de la communication et de l'administration, le format principal d'examen écrit n'est pas la dissertation mais la note de synthèse. Cet exercice consiste à lire et à analyser un corpus de documents hétérogènes (textes juridiques, articles de presse, extraits de décisions administratives, données statistiques) pour en produire une synthèse ordonnée et argumentée qui répond à une problématique donnée.

La note de synthèse est évaluée sur des critères partiellement différents de ceux de la dissertation : la fidélité aux documents du corpus (ne rien inventer ni projeter d'idées extérieures non étayées par les textes), la capacité à identifier et à articuler les idées directrices de chaque document, la construction d'un fil conducteur cohérent qui traverse l'ensemble du corpus, et la qualité de présentation formelle (plan apparent, paragraphes structurés, transitions claires). Contrairement à la dissertation, où la mobilisation de connaissances personnelles est valorisée, la note de synthèse repose exclusivement sur les documents fournis — apporter des connaissances extérieures non sollicitées est pénalisé.

## Le commentaire de texte : analyse et interprétation

Le commentaire de texte — commentaire littéraire, commentaire d'arrêt (en droit), commentaire d'un texte philosophique, explication de texte — est un autre format d'évaluation fréquent dans les filières de lettres, de philosophie et de droit. Il consiste à analyser en profondeur un extrait de texte de quelques paragraphes, en dégageant le sens, la structure argumentative et les enjeux du passage dans son contexte plus large.

Un commentaire de texte n'est pas un résumé du texte : c'est une interprétation informée qui révèle ce qui ne se lit pas à la surface du texte — les présupposés implicites, les ambiguïtés, les tensions, les effets rhétoriques, les connexions avec la pensée de l'auteur ou avec un contexte juridique ou philosophique plus large. Ce format suppose une lecture active, attentive et multiple du texte avant de commencer à rédiger.

La méthode du commentaire linéaire (suivre l'ordre du texte) est souvent moins valorisée que le commentaire composé (construire un plan thématique qui répond à une problématique dégagée du texte), mais les conventions varient selon les disciplines et les enseignants. Vérifiez le type de commentaire attendu dans les consignes de chaque exercice.

## Les formats d'examen en licence 1 : adaptation progressive

La première année de licence (L1) est une période de transition académique intense, où les étudiants passent d'un système d'évaluation secondaire (baccalauréat) à un système universitaire exigeant des compétences nouvelles. Les universités françaises ont progressivement aménagé cette transition en proposant des formats d'examens adaptés en L1 : des sujets de dissertation avec des consignes plus guidées (plan suggéré, sous-questions structurantes), des exercices de savoir-faire clairement séquencés, et des TD à effectifs réduits pour permettre un suivi individualisé.

Cette progressivité pédagogique signifie que les exigences de L1 sont normalement différentes de celles de L3 ou de master. Un étudiant de L1 qui produit une dissertation structurée en deux parties avec des exemples pertinents répondra aux attentes du niveau, même si sa réflexion est moins sophistiquée que celle d'un étudiant de L3. La progressivité attendue dans les années suivantes est à la fois une bonne nouvelle (il est normal d'être maladroit en L1) et un avertissement (un niveau L1 en L3 ne sera pas valorisé de la même façon).

## Les examens de maîtrise de la langue française

Dans certaines formations (licences de lettres, de FLE — français langue étrangère, de communication), des épreuves spécifiques évaluent directement la maîtrise de la langue française : orthographe, grammaire, syntaxe, vocabulaire, précision stylistique. Ces épreuves sont cruciales pour les étudiants étrangers qui poursuivent des filières où la langue elle-même est objet d'étude.

La préparation spécifique à ces épreuves nécessite un travail régulier sur les normes grammaticales et orthographiques du français, au-delà du seul travail disciplinaire. Des ressources comme le Bescherelle, les Exercices de style de Raymond Queneau (pour l'exploration stylistique), les dictionnaires des difficultés de la langue française (Hanse, Thomas) et les manuels de linguistique descriptive sont des outils de référence précieux pour ce travail.

## Témoignages d'étudiants étrangers sur la dissertation française

Aïcha Konaté, Mali, licence de sociologie : «La dissertation française m'a vraiment perturbée au début. Dans mon lycée au Mali, on écrivait des textes plus libres, moins structurés. Ici, l'enseignante m'a dit que ma première dissertation avait de bonnes idées mais 'pas de plan'. J'ai compris qu'il fallait que je soumette mes idées à une architecture formelle. Après deux semestres d'entraînement systématique, je fais maintenant des plans au brouillon avant chaque devoir. Ça a complètement transformé mes notes.»

Felipe Ortega, Mexique, master de science politique : «En master, la dissertation n'est plus un exercice de démonstration de connaissances — c'est une contribution à un débat académique. L'enseignant veut savoir ce que vous pensez vraiment du problème. Comment vous vous positionnez dans le champ des théories existantes. C'est une libération par rapport à la licence, mais ça exige vraiment d'avoir lu les auteurs de référence et de s'être forgé un avis propre.»

Anne-Marie Kowalski, Pologne, licence de droit : «Les premiers examens de droit m'ont traumatisée. Trois heures sur un sujet que je n'avais jamais vu, sans aucun support. En Pologne, les examens étaient souvent oraux ou avec des ressources. Ici, tout de tête. J'ai passé le premier semestre à apprendre à mémoriser des définitions, des règles, des cas jurisprudentiels. Maintenant j'ai développé des fiches systématiques pour chaque matière et je me sens beaucoup plus sereine.»
`;

const EXT_L6 = `
## Témoignages de parcours de rebond après l'échec

Les témoignages d'étudiants qui ont connu l'échec académique en France et qui ont réussi à rebondir constituent une source d'inspiration et d'information précieuse pour ceux qui traversent des difficultés similaires.

Kwabena Mensah, 26 ans, Ghana, aujourd'hui ingénieur en informatique : «J'ai raté ma première année de licence de mathématiques à Paris. Je n'avais pas compris que le rythme et le niveau d'abstraction seraient si différents de ceux de mon lycée ghanéen. Après cette première année, je me suis réorienté vers un BUT en informatique que j'ai obtenu avec mention. Aujourd'hui, je travaille dans une startup parisienne. L'échec en L1 n'a pas défini ma trajectoire — il l'a juste redirigée.»

Luiza Fernandes, 24 ans, Brésil, aujourd'hui chercheuse en sciences sociales : «J'ai échoué deux fois en master 1 de sociologie avant de comprendre que mon projet de recherche n'était pas viable. Un directeur de mémoire patient m'a aidée à reconstruire ma problématique. J'ai obtenu mon master 2 l'année suivante avec mention Bien et je suis maintenant en doctorat. Parfois, l'échec vous force à mieux définir ce que vous voulez vraiment faire.»

Ces trajectoires montrent que l'échec en France n'est pas une sentence définitive. Le système prévoit des portes de sortie et des voies de redressement que des étudiants de nombreux autres pays n'ont pas.

## La réorientation en cours d'année : le dispositif Parcoursup

Depuis la réforme de l'orientation post-bac de 2018, le dispositif Parcoursup propose une procédure spécifique de réorientation pour les étudiants de L1 qui souhaitent changer de filière après le premier semestre. Cette procédure, ouverte chaque année en janvier-février pour une prise d'effet au second semestre, permet de postuler à d'autres formations disponibles et compatible avec les crédits déjà acquis.

Les formations accessibles via cette procédure de réorientation sont celles qui ont des places disponibles en début de second semestre — généralement des formations moins sélectives ou des filières professionnelles (BUT, BTS, licences professionnelles). Les grandes licences très demandées (droit, médecine, psychologie) ont rarement des places en cours d'année. Mais la diversité des formations accessibles est suffisamment large pour que la plupart des étudiants puissent trouver une option compatible avec leur projet professionnel réorienté.

Les conseillers d'orientation du SCUIO-IP de chaque université peuvent accompagner les étudiants dans l'identification des formations de réorientation les plus adaptées à leur profil, leurs compétences et leur projet. Un entretien individuel avec ces conseillers est une étape utile avant de déposer des candidatures de réorientation.

## Les dispositifs d'aide financière pendant un redoublement ou une réorientation

Un aspect pratique souvent méconnu concerne les droits aux aides financières pendant un redoublement ou une réorientation. Les bourses sur critères sociaux du CROUS sont accordées annuellement, sous conditions de ressources, pour une durée maximale correspondant au cycle d'études normal augmenté d'une année supplémentaire par cycle. Un redoublement peut donc être couvert par la bourse, dans la limite de ce nombre d'années maximum.

Les étudiants qui se réorientent en cours d'études conservent généralement leurs droits à la bourse, à condition que la nouvelle formation soit compatible avec les critères d'éligibilité (établissement accrédité, inscription à plein temps). Il est nécessaire de déclarer la réorientation au CROUS pour mettre à jour le dossier de bourse.

Pour les étudiants étrangers bénéficiaires de bourses du gouvernement français ou d'autres programmes de mobilité, les conditions de renouvellement en cas de redoublement ou de réorientation dépendent des règles spécifiques du programme. Une vérification auprès du service des bourses ou du bureau des relations internationales de l'université est indispensable avant de prendre toute décision de redoublement ou de réorientation, afin d'éviter une interruption non anticipée du financement.

## Le soutien psychologique spécifique autour de l'échec

L'accompagnement psychologique autour de l'échec académique est une dimension que les universitaires commencent à prendre plus sérieusement en compte, notamment depuis les travaux de recherche sur le bien-être étudiant publiés dans les années 2020. Plusieurs universités françaises ont développé des programmes spécifiques d'accompagnement socio-psychologique des étudiants en situation d'échec ou de risque d'abandon, associant consultations psychologiques, groupes de parole et coaching académique.

Le syndrome de l'imposteur — sentiment de ne pas légitimement mériter sa place dans l'université et d'être voué à être «démasqué» comme incompétent — est particulièrement répandu chez les étudiants étrangers et les étudiants premiers de leur famille à accéder à l'enseignement supérieur. Ce syndrome, bien documenté en psychologie sociale, n'est pas un reflet de la réalité des capacités : il est un biais cognitif qui amplifie le vécu négatif des difficultés et freine la demande d'aide. Le reconnaître pour ce qu'il est — une distorsion cognitive, pas une vérité objective — est la première étape pour se libérer de son emprise et agir efficacement face aux difficultés académiques.

## Construire un projet académique post-échec solide

Après un échec, la construction d'un projet académique crédible et motivé est la condition pour rebondir efficacement. Ce projet doit répondre à trois questions fondamentales. Qu'est-ce qui a causé l'échec ? (réponse honnête et précise) Quels changements vais-je mettre en place pour que la situation soit différente la prochaine fois ? (mesures concrètes et réalistes) En quoi cette formation correspond-elle à mon projet professionnel et personnel ? (motivation substantielle et authentique).

Ces trois éléments constituent le cœur d'une lettre de motivation convaincante pour une demande de redoublement ou de réorientation, et forment le socle d'un entretien de commission pédagogique réussi. Les commissions pédagogiques qui examinent les demandes de redoublement ne cherchent pas des étudiants parfaits qui n'ont jamais connu la difficulté — elles cherchent des étudiants qui comprennent leurs difficultés et qui ont la maturité et la détermination pour y faire face de façon constructive.
`;

await appendAndPatch('24c0f17e-d65c-454f-89cd-43757ff78407', EXT_L5);
await appendAndPatch('fc3dae13-7dd7-4761-bca4-00b6508b8cc5', EXT_L6);
