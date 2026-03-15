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

// L9 3301 needs ~700 more
const ADD_L9 = `
## Construire un plan de révision détaillé semaine par semaine

À partir des principes évoqués précédemment, la construction d'un plan de révision semaine par semaine pour la période d'examens transforme les bonnes intentions en engagements concrets et vérifiables. Cette planification opérationnelle commence par la liste exhaustive de toutes les épreuves à venir avec leur date et leur format, puis par une estimation honnête du volume de travail nécessaire pour chacune selon votre niveau actuel de maîtrise. Les matières dans lesquelles vous êtes en retard ou avez des lacunes importantes méritent une allocation de temps proportionnellement plus grande que celles que vous maîtrisez déjà bien.

La planification doit intégrer des marges de manœuvre — des espaces non alloués à l'avance pour absorber les imprévus (un ami qui a besoin d'aide, une maladie d'un ou deux jours, un exercice plus long que prévu). Un planning trop dense, sans marge, s'effondre au premier imprévu et génère une frustration supplémentaire. Un planning raisonnable, tenu avec régularité sur trois à quatre semaines, produit des résultats académiques bien supérieurs à un marathon de révision intensif pendant la dernière semaine.

Revoyez et ajustez votre planning chaque dimanche soir pour la semaine à venir, en tenant compte de ce qui a été réellement accompli la semaine précédente. Cette revue hebdomadaire garde le plan vivant et adaptatif, transformant la planification en outil dynamique de pilotage plutôt qu'en document figé créé une fois et jamais consulté.

## Le rôle des émotions positives dans l'apprentissage

Les recherches en psychologie positive et en neurosciences de l'éducation montrent que les émotions positives — curiosité, intérêt, satisfaction, émerveillement — ne sont pas simplement le résultat de bons apprentissages : elles en sont aussi un facilitateur actif. Un étudiant curieux et engagé par un sujet apprend plus efficacement, mémorise plus durablement et produit des analyses plus profondes qu'un étudiant qui aborde le même contenu avec une attitude de survie ou d'indifférence polie.

Cultiver un intérêt authentique pour les matières de sa formation, même celles qui semblent initialement rebutantes, est une compétence académique à part entière. Cette curiosité peut être stimulée par la recherche d'angles inattendus dans un cours (que nous apprend ce concept sur notre vie quotidienne ?), par la connexion entre des notions de différentes disciplines, ou par la rencontre avec des enseignants passionnés dont la transmission de l'enthousiasme pour leur domaine est l'une des valeurs ajoutées les plus précieuses de l'enseignement en présentiel.

Pour les étudiants internationaux, la découverte de la société et de la culture française peut aussi alimenter la curiosité académique : les cours de droit s'éclairent à la lecture des journaux, les cours de sociologie prennent sens dans l'observation de la vie quotidienne, les cours d'histoire résonnent dans la visite des musées et des monuments.
`;

// L10 3333 needs ~700 more
const ADD_L10 = `
## La construction d'un réseau académique pendant les études

Au-delà de la dimension purement scolaire, les études universitaires sont une période unique pour construire un réseau académique et professionnel qui sera précieux tout au long de la carrière. Les camarades de promotion sont les futurs collègues, collaborateurs et décideurs dans de nombreux secteurs — les connexions établies à l'université ont une valeur à très long terme que peu d'étudiants anticipent pleinement.

Pour les étudiants internationaux, le réseau académique construit en France a une double valeur : il contribue à l'intégration en France et offre des portes d'entrée sur le marché du travail français, et il constitue simultanément un réseau international précieux pour des projets de collaboration entre la France et leur pays d'origine. Les anciens étudiants internationaux des universités françaises forment un tissu d'élites intellectuelles et professionnelles dans leurs pays respectifs — un réseau qui peut s'activer à travers les associations d'anciens élèves et les réseaux d'alumni de chaque université.

Participer activement à la vie de l'université — associations étudiantes, événements culturels, séminaires de recherche ouverts, jurys de concours étudiants — est le moyen de se rendre visible et de tisser des connexions avec des enseignants, des professionnels invités et des camarades dans une variété de disciplines. Ces connexions ne se font pas naturellement en restant dans sa chambre à réviser : elles nécessitent une présence active et une disponibilité relationnelle qui s'investit comme une compétence à développer, au même titre que la maîtrise d'un logiciel ou d'une langue.

## Conclusion : devenir un étudiant stratège de son propre parcours

La synthèse de toutes les méthodes et stratégies présentées dans cette leçon pointe vers une conclusion unifiante : les étudiants qui réussissent le mieux à l'université française ne sont pas passifs dans leur formation — ils en sont des acteurs stratèges qui comprennent le système, en maîtrisent les règles, diversifient leurs méthodes d'apprentissage et pilotent activement leur progression. Cette posture de stratège académique s'acquiert progressivement, souvent par l'expérience d'erreurs et de corrections, mais peut être accélérée par la connaissance préalable des méthodes qui fonctionnent. Chaque cours est une opportunité d'apprendre quelque chose de substantiel ; chaque examen est une occasion de démontrer et de consolider ce savoir. Aborder la formation universitaire dans cet état d'esprit transforme l'expérience d'une contrainte à subir en une aventure intellectuelle à construire activement.
`;

// L11 3063 needs ~960 more
const ADD_L11 = `
## Les évolutions récentes du système ECTS

Le système ECTS a connu des évolutions importantes depuis sa création dans les années 1990. Le guide d'utilisation ECTS mis à jour par la Commission Européenne en 2015 a introduit la notion de «profil de cours» qui associe à chaque UE non seulement un nombre de crédits mais aussi une description détaillée des résultats d'apprentissage attendus (learning outcomes) et des compétences développées. Cette évolution vers une pédagogie par compétences — différente de la pédagogie par contenus traditionnelle — est en cours de déploiement dans les universités françaises et européennes.

Cette approche par compétences transforme la façon de lire un relevé de notes : ce n'est plus seulement «j'ai suivi UE Droit constitutionnel et obtenu 13/20» mais «j'ai développé les compétences suivantes en matière d'analyse constitutionnelle, de lecture des textes normatifs et d'application de règles de droit». Cette granularité descriptive facilite la reconnaissance internationale et professionnelle des apprentissages, qui ne dépend plus seulement d'une note chiffrée mais d'une description qualitative des compétences acquises.

Pour les étudiants, comprendre et pouvoir expliciter les compétences développées dans chaque UE est une compétence de communication professionnelle précieuse lors des entretiens d'embauche et des candidatures à des formations ultérieures.

## Les portails numériques de suivi des résultats

Les universités françaises disposent toutes d'un ENT (Espace Numérique de Travail) qui centralise, entre autres, le suivi en temps réel des résultats académiques. Les notes publiées par les enseignants, les relevés de notes semestriels officiels et les attestations de résultats sont accessibles via ces portails dès leur publication officielle. Vérifier régulièrement son ENT pendant la période des résultats est indispensable pour ne pas manquer la publication de notes qui déclenchent des délais (inscription en session 2, demande de consultation de copie).

Dans certaines universités, le portail ENT permet également de simuler des scénarios de compensation avec ses notes actuelles, d'accéder aux fiches pédagogiques des UE et de contacter directement les enseignants et les secrétariats via une messagerie intégrée. La maîtrise technique de l'ENT de son université est une compétence pratique de gestion administrative à développer dès les premiers jours de la formation.

## L'articulation entre les crédits ECTS et les certifications professionnelles

Dans certaines formations, notamment les licences professionnelles et les masters professionnels, des blocs de compétences ECTS peuvent être mis en équivalence directe avec des certifications professionnelles reconnues au RNCP. Cette articulation entre le monde académique et le monde des certifications professionnelles est un enjeu croissant dans la politique de formation en France, qui vise à réduire l'étanchéité entre les voies académiques et les voies professionnelles.

Pour un étudiant en master professionnel, il peut être utile de vérifier si sa formation est adossée à une certification RNCP et quelles sont les modalités pour obtenir cette certification en complément du master. Dans certains cas, la certification RNCP peut être obtenue séparément du diplôme universitaire (sur la base des seuls crédits ECTS correspondants), ce qui offre une flexibilité dans la valorisation des acquis.
`;

// L12 3131 needs ~900 more
const ADD_L12 = `
## Le rapport à la compétition : culture comparative et saine émulation

La culture de la compétition entre étudiants varie significativement selon les cultures académiques d'origine. Dans un cours magistral de 300 étudiants, les notes individuelles sont anonymes et la comparaison entre condisciples n'est pas systématiquement organisée par l'institution. Pourtant, dans les groupes de TD à effectifs réduits, dans les filières sélectives et dans les concours, la représentation de son propre niveau relativement à celui de ses pairs est inévitable.

Une relation saine à la compétition académique consiste à utiliser la performance des autres comme étalon et source d'émulation sans entrer dans une compétition anxieuse qui perturbe le travail et les relations interpersonnelles. Observer qu'un camarade a obtenu 15/20 alors qu'on a eu 11/20 devrait déclencher la curiosité («comment a-t-il préparé cet examen?», «qu'est-ce que sa copie contenait que la mienne n'avait pas?») plutôt que la jalousie ou le découragement. Cette curiosité productive est la base d'un apprentissage entre pairs efficace.

Les enquêtes sur le bien-être étudiant montrent que la comparaison sociale négative — se mesurer constamment et défavorablement à ses pairs — est l'un des facteurs les plus associés à la détresse psychologique dans les formations les plus compétitives. La remplacer par une comparaison constructive (s'inspirer de ceux qui réussissent mieux pour progresser soi-même) est à la fois plus efficace académiquement et plus bénéfique pour la santé mentale.

## Les implications du passage au numérique sur la notation

La dématérialisation progressive des copies et des processus de correction a des implications concrètes sur les modalités de notation. Les plateformes de correction numérique (Moodle, Evalucomp, Gradescope) permettent une standardisation accrue des critères : l'enseignant définit une grille de correction détaillée en amont, les points sont attribués rubrique par rubrique, et le total est calculé automatiquement. Cette standardisation réduit certains biais de correction liés à l'ordre de correction des copies (effet de halo, effets de contraste positif ou négatif) et facilite les statistiques sur les performances collectives.

Pour les étudiants, le passage à la correction numérique a un effet positif concret : les retours sont généralement plus détaillés et plus structurés que dans les corrections de copies papier, et les commentaires sont dactylographiés et donc lisibles, contrairement aux annotations manuscrites parfois incompréhensibles. Si votre université utilise une plateforme de correction numérique, vous pouvez accéder à vos retours détaillés directement depuis votre ENT sans nécessiter de consultation physique de la copie.

## Le diplôme universitaire comme ancrage d'identité professionnelle

Obtenir un diplôme universitaire français est un accomplissement qui dépasse la simple acquisition d'un document officiel. Pour un étudiant étranger qui a traversé les défis de l'adaptation linguistique, culturelle et académique du système français, le diplôme est aussi la certification d'une résilience personnelle et d'une capacité d'adaptation qui sont des compétences parmi les plus valorisées dans un monde professionnel globalisé. Ce diplôme ancre une identité professionnelle — celle d'un expert formé à la rigueur intellectuelle et méthodologique française — qui ouvre des portes dans de nombreux pays où l'enseignement supérieur français bénéficie d'une solide réputation internationale.

Le passage par l'université française laisse des empreintes intellectuelles durables : une façon de structurer la pensée, une rigueur argumentative, une culture de la nuance et du débat contradictoire qui sont des marques reconnaissables du style académique et professionnel français. Ces empreintes, portées et valorisées dans la suite d'une carrière internationale, sont l'héritage le plus précieux d'un cursus universitaire accompli en France.
`;

await appendAndPatch('7f3d3ec0-4d6d-44d8-b1b7-581645697126', ADD_L9);
await appendAndPatch('8f0bbec0-b172-491a-8af8-1380a47d0497', ADD_L10);
await appendAndPatch('e26cf05b-0668-4734-9b08-4ebb4b4742fa', ADD_L11);
await appendAndPatch('0bd01774-41f3-49c8-8d69-d325de793f99', ADD_L12);
