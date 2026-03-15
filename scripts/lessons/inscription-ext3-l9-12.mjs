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

const ADD3_L9 = `
## La gestion des situations particulières liées au séjour

La jonction entre les démarches universitaires et les démarches de séjour est une source de stress particulière pour les étudiants étrangers. Le calendrier de l'inscription universitaire et celui des procédures préfectorales liées au titre de séjour ne sont pas toujours synchronisés, et des décalages peuvent créer des situations où l'étudiant est admis dans une formation mais ne peut pas s'y inscrire administrativement car son titre de séjour est en cours de renouvellement ou son VLS-TS n'a pas encore été validé à l'OFII.

Dans ces situations, la communication proactive avec le service des inscriptions de l'université est essentielle. La plupart des établissements ont des procédures pour gérer ces cas de figure — inscription conditionnelle en attendant la régularisation du séjour, délai supplémentaire pour fournir les documents — à condition que l'étudiant les informe clairement et rapidement de sa situation. Attendre en espérant que la situation se régularise sans en informer l'université est la pire stratégie, car elle peut conduire à une annulation administrative de l'admission.

## L'organisation du dossier physique et numérique

La constitution et la conservation d'un dossier documentaire bien organisé est une compétence administrative qui se développe avec la pratique et qui fait souvent la différence entre des procédures fluides et des obstacles répétés. Un dossier documentaire complet pour un étudiant étranger en France typique contient : passeport (toutes les pages avec tampons), titre de séjour original et copies, diplômes originaux avec traductions assermentées, relevés de notes originaux avec traductions, attestation ENIC-NARIC si obtenue, certificats de scolarité des années précédentes, justificatifs de domicile des 3 derniers mois, RIB (relevé d'identité bancaire).

La version numérique de ce dossier doit être stockée sur un service cloud fiable (Google Drive, OneDrive, Dropbox) accessible depuis n'importe quel appareil et depuis n'importe quel pays, et sur un disque dur externe personnel en backup. Les numérisations doivent être à haute résolution (300 dpi minimum pour les documents textuels) et nommées de façon explicite (Passeport-NOM-Prenom.pdf, Diplome-Licence-Universite-Pays-2024.pdf). Ce nommage systématique permet de retrouver n'importe quel document en quelques secondes plutôt qu'en parcourant un dossier de fichiers anonymement nommés.

## Les situations de refus d'inscription : recours et alternatives

Les refus d'inscription peuvent survenir pour diverses raisons : dossier incomplet, diplôme étranger non reconnu au niveau requis, titre de séjour expiré ou non valide pour les études, place indisponible dans la formation. Comprendre la raison précise du refus est le préalable indispensable à toute action. En France, tout refus d'inscription doit être motivé par l'université, c'est-à-dire que la raison du refus doit vous être communiquée soit oralement lors de l'entretien, soit par écrit si vous le demandez.

En cas de refus pour une raison que vous estimez injuste ou contestable, vous pouvez exercer un recours hiérarchique en adressant une demande de réexamen au président de l'université ou au directeur de la formation, accompagnée de votre argumentation et des pièces complémentaires éventuelles. Si ce recours interne n'aboutit pas, un recours contentieux devant le tribunal administratif est possible, mais cette voie est longue et complexe — mieux vaut explorer toutes les alternatives pratiques avant d'y recourir.

## Les formations passerelles et les accès alternatifs

Pour les étudiants dont le dossier ne correspond pas exactement aux exigences d'une formation directe, des formations passerelles permettent de combler les écarts. Les mises à niveau en français académique (DUEF, cours de FLE de niveau avancé) permettent aux étudiants dont le niveau de français est insuffisant pour intégrer directement une formation universitaire de progresser avant leur inscription définitive. Les classes préparatoires d'intégration (CPI) de certaines grandes écoles permettent aux étudiants étrangers d'excellence de se préparer aux concours d'entrée dans un environnement adapté.

Les années spéciales de mise à niveau (DASSU, DU de pré-master) permettent à des étudiants ayant des lacunes dans certains domaines disciplinaires de les combler avant d'intégrer le master souhaité. Ces formations de transition, bien que représentant une dépense de temps et d'argent supplémentaire, augmentent significativement les chances de succès dans la formation finale par rapport à une intégration directe sans la préparation adéquate.
`;

const ADD3_L10 = `
## Les espaces calmes et la concentration au travail

La bibliothèque universitaire est l'espace de travail le plus structuré du campus, mais ce n'est pas le seul. Les cafétérias en dehors des heures de pointe, les jardins du campus par beau temps, les salles d'étude libre, les résidences étudiantes équipées d'espaces communs : l'université française offre une variété d'environnements de travail adaptés à différentes préférences et différents modes de concentration.

Identifier très tôt dans l'année les espaces de travail qui vous conviennent le mieux est une pratique de gestion de l'efficacité personnelle qui peut avoir un impact significatif sur la productivité académique. Certains étudiants travaillent mieux en complète solitude et silence ; d'autres ont besoin d'une légère animation de fond pour maintenir leur concentration. Certains préfèrent rester debout à des tables hautes ; d'autres ont besoin d'un fauteuil confortable. Le campus universitaire offre généralement une gamme suffisante d'environnements pour satisfaire toutes ces préférences.

## Les services d'impression et de reprographie

L'impression et la reprographie de documents sont des besoins récurrents des étudiants — plans de cours, documents de TD, rendus de travaux. Les bibliothèques universitaires disposent généralement de postes d'impression en libre accès, fonctionnant par crédit (quota d'impression inclus dans les droits d'inscription, puis facturation au-delà du quota). Les formats acceptés sont variés (PDF, Word, OpenOffice) et les options incluent généralement l'impression recto-verso et la photocopie.

Les reprographes universitaires (ateliers d'impression internes à l'université) proposent des services d'impression en volume à des tarifs étudiants compétitifs. Pour les travaux de mémoire ou les dossiers volumineux à rendre en plusieurs exemplaires, ces services sont plus économiques que les imprimantes bureautiques personnelles. Des services d'impression en ligne (avec livraison ou retrait en point relais) se sont également développés comme alternatives pratiques pour les documents urgents à toute heure.

## L'accessibilité numérique et les étudiants en situation de handicap

L'accessibilité numérique des services universitaires est une priorité croissante dans les politiques d'enseignement supérieur français. Les ENT doivent progressivement se conformer aux normes d'accessibilité RGAA (Référentiel Général d'Amélioration de l'Accessibilité) qui garantissent que les plateformes numériques sont utilisables par les personnes souffrant de différents types de handicap (déficience visuelle, handicap moteur, troubles cognitifs).

En pratique, le niveau d'accessibilité varie encore significativement selon les établissements et les plateformes. Les étudiants en situation de handicap qui rencontrent des obstacles dans l'accès aux services numériques de leur université doivent le signaler au service handicap et à la direction du numérique de l'établissement, qui ont obligation de mettre en place des solutions alternatives ou d'améliorer l'accessibilité de leurs outils.

## La vie culturelle de la ville universitaire

La vie universitaire ne se limite pas au campus — elle s'étend à la ville entière dans laquelle l'université est implantée. Les étudiants bénéficient de tarifs préférentiels dans de nombreux équipements culturels de la ville : musées, théâtres, cinémas, concerts, festivals. La carte étudiant, combinée à la preuve d'inscription dans un établissement d'enseignement supérieur, ouvre des accès à prix réduit qui permettent de s'immerger dans la vie culturelle locale avec un budget limité.

Les villes universitaires françaises ont généralement une vie culturelle riche et diversifiée qui constitue un environnement intellectuellement stimulant au-delà du campus. Les festivals de cinéma (Cannes, Annecy, Clermont-Ferrand, Strasbourg), les festivals de musique (Nantes, Lyon, Nîmes), les biennales d'art contemporain, les foires du livre : ces événements culturels annuels sont autant d'occasions de découvrir la culture française contemporaine dans ses expressions les plus vivantes et les plus diversifiées.
`;

const ADD3_L11 = `
## Les spécificités de l'évaluation par mémoire en master et doctorat

L'évaluation par mémoire est la modalité d'évaluation la plus exigeante et la plus formative qui existe dans le système LMD. Un mémoire de master est généralement un travail de recherche de 60 à 150 pages qui présente une question de recherche originale, une revue de la littérature académique pertinente, une méthodologie appropriée pour y répondre, des données ou une analyse, et une conclusion qui contribue à la connaissance du domaine. Ce format, très différent des dissertations et des examens sur table du premier cycle, requiert des compétences spécifiques qui s'apprennent progressivement.

Pour les étudiants étrangers qui n'ont pas été formés à la rédaction académique longue dans leur cursus antérieur, la rédaction du mémoire peut être une découverte difficile. Les ressources d'aide à la rédaction académique proposées par les bibliothèques universitaires (ateliers de rédaction, guides en ligne, suivi par des bibliothécaires spécialisés) sont des outils précieux à mobiliser dès le début du travail de mémoire, pas seulement en fin de rédaction lorsque les problèmes de structure deviennent évidents.

## Le contrat pédagogique et son importance

Le contrat pédagogique est un document formalisé entre l'étudiant et l'établissement qui précise les obligations de chacun dans le cadre de la formation. Il est particulièrement important dans les formations en alternance, les stages longs, et les mobilités Erasmus où les conditions de formation diffèrent du cadre standard. Dans le cas d'une mobilité Erasmus, le Learning Agreement est le contrat pédagogique qui précise quels cours seront suivis à l'étranger et comment ils seront reconnus à l'université d'origine.

La notion de contrat pédagogique reflète une évolution culturelle dans la conception de la formation universitaire : l'étudiant n'est plus un simple récipiendaire passif d'une formation définie unilatéralement par l'institution, mais un acteur co-responsable de son parcours académique. Cette évolution, encore en cours dans le système universitaire français, se manifeste dans la multiplication des options de personnalisation des cursus, des projets tutorés et des formations par projets qui placent l'étudiant en position d'acteur central de son apprentissage.

## Les acteurs de la gouvernance universitaire et leur rôle

Comprendre qui gouverne l'université française et comment aide à s'orienter dans l'institution et à savoir à qui s'adresser en cas de besoin. Le président de l'université est l'autorité exécutive suprême, élu par le Conseil d'Administration. Le directeur d'UFR (Unité de Formation et de Recherche) est responsable de la formation et de la pédagogie au niveau de la composante disciplinaire (faculté). Le responsable de formation ou directeur de master est directement responsable du programme dans lequel vous êtes inscrit.

Les représentants étudiants élus dans les différents conseils (Conseil d'Administration, Conseil Académique, Conseil de la Vie Universitaire) sont des interlocuteurs précieux pour les étudiants qui souhaitent faire remonter des problèmes collectifs ou obtenir des informations sur les politiques universitaires. Ces élus étudiants ont accès à des informations sur les décisions institutionnelles et peuvent servir de relais entre la base étudiante et la direction de l'établissement.

## Les perspectives d'évolution du système LMD

Le système LMD n'est pas un cadre figé — il continue d'évoluer sous l'influence des réformes législatives, des exigences du marché du travail et des tendances internationales de l'enseignement supérieur. Les réformes récentes ont notamment renforcé la place de l'apprentissage (désormais accessible jusqu'au niveau master dans de nombreuses disciplines), développé les formations hybrides combinant présentiel et distanciel, et soutenu l'internationalisation des formations (doubles diplômes, cursus intégrés avec des universités étrangères).

Pour un étudiant qui s'inscrit aujourd'hui dans le système universitaire français, comprendre ces tendances aide à anticiper les évolutions qui auront lieu pendant ses années d'études et à adapter son parcours en conséquence. L'apprentissage, par exemple, est une option qui devient progressivement disponible dans davantage de formations et à davantage de niveaux — si cette option n'est pas disponible dans votre formation aujourd'hui, elle pourrait l'être dans deux ou trois ans.
`;

const ADD3_L12 = `
## Les erreurs de candidature à éviter absolument

L'expérience accumulée par des générations de candidats et de conseillers en orientation permet d'identifier les erreurs les plus fréquentes et les plus coûteuses dans les procédures Parcoursup et Mon Master. La première est de candidater à des formations sans les avoir réellement étudiées au préalable — formulation de vœux par défaut sans avoir pris le temps de comprendre le contenu de la formation, ses débouchés, ses modalités pédagogiques. Ces candidatures de façade, perceptibles dans les projets de formation motivés génériques, obtiennent rarement des résultats positifs.

La deuxième erreur est d'attendre le dernier jour pour soumettre ses dossiers. Les bugs informatiques, les problèmes de connexion, les documents manquants découverts au dernier moment : ces imprévus sont courants et nécessitent du temps pour être résolus. Soumettre ses candidatures avec plusieurs jours d'avance par rapport à la date limite est une précaution élémentaire qui évite des situations de stress inutile.

La troisième erreur est de ne pas préparer son positionnement de phase d'admission — quelle formation accepter définitivement, laquelle conserver en attente. Ne pas avoir réfléchi à cette hiérarchie avant la phase d'admission conduit à des prises de décision précipitées sous pression, parfois regrettées ultérieurement.

## L'accompagnement par les lycées et les formations antérieures

Pour les candidats qui arrivent de formations antérieures françaises — lycée, BTS, université, grande école — l'accompagnement par les conseillers de l'établissement antérieur est une ressource précieuse dans la préparation des candidatures Parcoursup et Mon Master. Les professeures principaux, les conseillers d'orientation, les directeurs d'UFR connaissent les candidats, comprennent leurs profils, et peuvent apporter une aide précieuse pour les lettres de recommandation, la rédaction des projets motivés et le choix stratégique des formations.

Pour les candidats étrangers qui n'ont pas d'interlocuteurs institutionnels de référence en France — parce qu'ils candidatent depuis leur pays d'origine — les services Campus France dans leur pays jouent ce rôle d'accompagnement. Les conseillers Campus France ont une connaissance précise du système d'enseignement supérieur français et peuvent orienter les candidatures dans la bonne direction.

## La construction d'un parcours d'études cohérent sur 5 ans

La vision stratégique sur l'ensemble du parcours LMD — de la licence au master, avec les perspectives du doctorat pour ceux qui envisagent la recherche — aide à prendre des décisions de candidature plus cohérentes. Choisir une licence en sachant vers quels masters elle ouvre naturellement des portes, identifier les masters qui préparent le mieux aux métiers visés, anticiper les expériences complémentaires (stages, associations, mobilité internationale) qui enrichiront le dossier pour les masters sélectifs visés en fin de licence : cette vision long terme transforme une série de décisions ponctuelles en une trajectoire académique pensée et construite.

Cette construction stratégique ne signifie pas que le parcours sera linéaire et sans changement de cap — les réorientations, les découvertes imprévues et les opportunités saisies en chemin font partie de la richesse d'un parcours académique. Mais avoir une vision initiale, même provisoire, donne un cadre de référence qui aide à prendre de meilleures décisions à chaque étape et à saisir les opportunités qui s'alignent avec le projet.

## Conclusion : les plateformes comme outils au service d'un projet

En conclusion, Parcoursup et Mon Master sont des outils au service d'un projet — ils ne définissent pas ce projet, ils en facilitent ou en compliquent la réalisation selon la façon dont on les utilise. Un candidat qui arrive dans ces procédures avec un projet d'études clair, un dossier bien préparé et une compréhension précise de ses forces et de ses aspirations est dans la meilleure position pour tirer parti de ces plateformes. Un candidat qui les aborde sans préparation, en espérant que les algorithmes et les commissions lui indiquent ce qu'il devrait faire, est dans une position beaucoup plus fragile.

L'orientation et la construction d'un projet d'études sont des processus qui précèdent les candidatures sur les plateformes et qui leur donnent leur sens. Investir du temps et de l'énergie dans ce travail d'orientation — en se connaissant mieux, en explorant les métiers, en rencontrant des professionnels, en réfléchissant à ses valeurs et à ses ambitions — est le meilleur investissement qu'un candidat puisse faire avant d'ouvrir Parcoursup ou Mon Master.
`;

await appendAndPatch('0447d045-e377-4184-aa2c-8682c6502843', ADD3_L9);
await appendAndPatch('21a6d3ee-294f-4217-9756-32f874a332f4', ADD3_L10);
await appendAndPatch('c5439dd3-ee75-49a4-b7ab-c11c4dfc1435', ADD3_L11);
await appendAndPatch('b04e269f-0b07-40a2-a16a-fa43d5462e88', ADD3_L12);
