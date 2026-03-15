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

const L9 = `# Les Documents à Fournir pour l'Inscription Administrative

L'inscription administrative à l'université française est une procédure rigoureuse qui requiert la constitution d'un dossier documentaire complet. Contrairement à d'autres systèmes universitaires où l'inscription peut se faire entièrement en ligne avec de simples déclarations, le système français repose sur une vérification documentaire physique des informations déclarées. Cette rigueur, parfois perçue comme bureaucratique, a pour objectif de garantir la validité des inscriptions et l'équité entre tous les candidats. Pour un étudiant étranger, qui doit en plus naviguer dans plusieurs systèmes administratifs simultanément, comprendre précisément quels documents sont requis, dans quels formats, et à quels moments, est une compétence administrative essentielle. Cette leçon vous guide à travers la liste exhaustive des documents d'inscription, leurs spécificités selon les situations, les erreurs les plus fréquentes et les stratégies pour préparer un dossier irréprochable du premier coup.

## La logique documentaire du système universitaire français

Avant d'énumérer les documents requis, il est utile de comprendre la logique qui sous-tend ces exigences documentaires. Le système universitaire français fonctionne sur le principe de la vérification de la capacité à s'inscrire dans la formation demandée. Cette capacité est définie réglementairement : pour s'inscrire en licence, il faut un baccalauréat ou un diplôme équivalent du même niveau ; pour s'inscrire en master, il faut une licence ou un diplôme équivalent de niveau bac+3. La vérification de ces prérequis par les pièces justificatives protège l'intégrité du système et garantit que les ressources pédagogiques sont accessible aux étudiants qui ont les prérequis requis.

Pour les étudiants étrangers, une dimension supplémentaire s'ajoute : la vérification du statut juridique de séjour en France. Un étudiant étranger doit démontrer non seulement qu'il possède le diplôme prérequis, mais aussi qu'il est autorisé à séjourner en France pour y suivre des études et à s'inscrire dans l'établissement d'accueil. Ces deux dimensions — académique et juridique — expliquent la double liste de documents requise pour les étudiants internationaux.

## Les documents académiques fondamentaux

Le premier groupe de documents à rassembler est celui qui établit vos qualifications académiques. Le diplôme ouvrant droit à l'inscription est la pièce maîtresse de ce groupe : pour une licence, il s'agit du baccalauréat ou d'un diplôme étranger de niveau équivalent reconnu par les procédures ENIC-NARIC ; pour un master, il s'agit d'une licence ou d'un diplôme étranger de niveau bac+3 ; pour un doctorat, un master ou un diplôme équivalent de niveau bac+5. Ce diplôme doit être présenté en original. Si l'original est dans une langue autre que le français, une traduction assermentée par un traducteur officiel est requise en parallèle.

Les relevés de notes des années d'études pertinentes complètent le dossier académique. Pour une première inscription en licence, les bulletins de terminale et les notes du baccalauréat sont les plus importants. Pour une inscription en master, les relevés de notes de toutes les années de licence sont demandés, permettant à la commission d'évaluer la progression et la cohérence du parcours. Ces relevés doivent présenter les notes obtenues dans chaque matière, les moyennes générales, les mentions éventuelles, et être accompagnés, si nécessaire, d'une traduction assermentée.

Dans certaines situations, notamment pour les étudiants dont le système de notation est très différent du système français (notation sur 100 points, notation par lettres, système de GPA américain), une explication ou attestation de l'établissement d'origine sur le système de notation utilisé peut être demandée pour permettre une évaluation correcte des résultats.

## Les documents d'identité et de séjour

Le passeport en cours de validité est le document d'identité de référence pour les étudiants étrangers. Une photocopie de la page principale du passeport (page biographique avec photo) est conservée par l'université. Le passeport doit être valide pendant toute la durée de l'année universitaire — vérifiez sa date d'expiration avant de commencer les démarches d'inscription, car un renouvellement de passeport prend du temps et peut retarder toutes les procédures administratives qui en dépendent.

Pour les étudiants qui sont déjà en France avec un titre de séjour, celui-ci doit être présenté lors de l'inscription. Le titre de séjour « étudiant » doit être en cours de validité et mentionner l'autorisation d'étudier en France. Pour les étudiants en première année en France qui arrivent avec un visa long séjour valant titre de séjour (VLS-TS), ce visa peut tenir lieu de titre de séjour pour les premiers mois, mais doit être validé auprès de l'OFII (Office Français de l'Immigration et de l'Intégration) dans les trois mois suivant l'arrivée.

## Le document CVEC : une obligation méconnue

La Contribution Vie Étudiante et de Campus (CVEC) est une contribution annuelle de 103 euros (tarif 2024-2025) que chaque étudiant doit acquitter avant de s'inscrire dans une formation du premier cycle de l'enseignement supérieur. Elle est collectée par le CROUS via le portail en ligne messervices.etudiant.gouv.fr et génère une attestation de paiement. Cette attestation est une pièce obligatoire du dossier d'inscription depuis 2018.

Certaines catégories d'étudiants sont exonérées de la CVEC : les boursiers sur critères sociaux (qui doivent néanmoins obtenir une attestation d'exonération via le même portail), les réfugiés, les bénéficiaires de la protection subsidiaire, et les apatrides. Les étudiants en formation par alternance et les étudiants en formation continue peuvent également être exonérés selon leur situation. Dans tous les cas, l'attestation — qu'elle soit de paiement ou d'exonération — est obligatoire et doit être présentée lors de l'inscription.

## Les justificatifs de domicile

Un justificatif de domicile récent est requis pour établir l'adresse de résidence en France de l'étudiant. Les documents acceptés sont généralement : une quittance de loyer du mois précédent, une facture d'eau, d'électricité ou de gaz à votre nom, une attestation d'hébergement signée par le propriétaire ou la personne qui vous héberge accompagnée d'une copie de sa pièce d'identité et d'un justificatif de domicile à son nom.

Pour les étudiants qui ne sont pas encore installés au moment de l'inscription (arrivée récente en France, hébergement provisoire), une déclaration sur l'honneur de l'adresse provisoire est généralement acceptée, avec l'engagement de fournir un justificatif définitif dès que la situation est stabilisée. Il est important de conserver une adresse à jour dans le système informatique de l'université, car tous les documents officiels (convocations aux examens, notifications de résultats, courriers administratifs) sont envoyés à cette adresse.

## Les photos d'identité

Des photos d'identité conformes aux normes officielles sont demandées pour la confection de la carte étudiant. Les normes techniques sont précises : fond blanc ou clair uni, visage de face et découvert, expression neutre, dimensions 35mm x 45mm. Les photos prises par des cabines automatiques dans les gares et centres commerciaux sont généralement conformes à ces normes si vous respectez les instructions affichées. Des photos de vacances ou de mauvaise qualité peuvent être refusées et obliger à recommencer la démarche.
`;

const L10 = `# La Vie sur le Campus : Carte Étudiante, Bibliothèques, Associations et ENT

La carte étudiante, les bibliothèques universitaires, les associations et l'Environnement Numérique de Travail (ENT) constituent les quatre piliers de la vie quotidienne sur le campus universitaire français. Ces ressources et outils, mis à la disposition de chaque étudiant dès son inscription administrative, forment un environnement de soutien académique, social et numérique dont une utilisation active améliore considérablement la qualité de l'expérience universitaire. Pour les étudiants étrangers qui arrivent en France sans réseau social préexistant et sans connaissance des ressources disponibles, s'approprier rapidement ces outils est une priorité stratégique. Cette leçon vous présente en détail chacun de ces quatre éléments, leurs fonctionnalités, leurs modes d'accès et les bonnes pratiques pour en tirer le meilleur parti.

## La carte étudiante : bien plus qu'un badge d'identification

La carte étudiante est le premier document remis à l'étudiant lors de la finalisation de son inscription administrative. Elle porte le nom, la photo, le numéro d'étudiant national (NNE), l'établissement d'étude, la formation suivie et l'année universitaire de validité. Sa fonction première est d'identifier l'étudiant comme membre de la communauté universitaire, mais ses utilisations pratiques vont bien au-delà de cette simple fonction.

Sur le campus, la carte étudiante est présentée à l'entrée des salles d'examen pour authentifier l'identité du candidat. Elle donne accès aux restaurants universitaires du CROUS au tarif étudiant. Elle permet l'emprunt de documents aux bibliothèques universitaires. Elle ouvre l'accès aux salles informatiques et aux équipements spécialisés du campus. Dans certains établissements équipés de systèmes de contrôle d'accès, elle donne accès aux bâtiments pendant les heures ouvertes aux étudiants.

En dehors du campus, la carte étudiante est une carte de réduction reconnue dans de nombreux commerces et services. Les musées nationaux et monuments historiques accordent des tarifs réduits ou l'entrée gratuite aux étudiants de moins de 26 ans — la carte étudiante est la preuve de ce statut. Les cinémas proposent des tarifs réduits sur présentation de la carte. Les compagnies de transport ferroviaire (SNCF) et les réseaux de transport régional accordent des remises significatives. De nombreuses enseignes commerciales (restauration rapide, librairies, logiciels informatiques, abonnements numériques) appliquent des tarifs étudiants sur présentation de la carte.

## Les bibliothèques universitaires : un patrimoine documentaire exceptionnel

Les bibliothèques universitaires (BU) françaises constituent un réseau documentaire d'une richesse exceptionnelle, souvent sous-exploré par les étudiants qui ne mesurent pas l'ampleur des ressources à leur disposition. En dehors des millions de livres, revues et ouvrages de référence en accès direct sur les rayonnages, les bibliothèques universitaires donnent accès à des bases de données numériques et des ressources en ligne qui, souscrites individuellement, coûteraient des milliers d'euros par an.

Les bases de données académiques accessibles depuis la bibliothèque universitaire ou via l'ENT avec les identifiants universitaires comprennent des encyclopédies spécialisées, des dictionnaires de langue et de terminologie, des collections de jurisprudence juridique, des bases de données de publications scientifiques (articles de revues à comité de lecture), des collections de presse nationale et locale, et des bibliothèques numériques (Gallica pour les fonds numérisés de la Bibliothèque nationale de France). Ces ressources représentent un capital documentaire d'une valeur considérable que l'inscription universitaire met gratuitement à disposition.

Les services du personnel de la bibliothèque sont trop souvent négligés. Les bibliothécaires sont des professionnels de la documentation dont la mission inclut l'accompagnement des étudiants dans leurs recherches documentaires. Une consultation de quelques minutes avec un bibliothécaire peut vous orienter vers les ressources les plus pertinentes pour votre sujet, vous apprendre à utiliser efficacement les bases de données, ou vous aider à trouver un document introuvable par les voies habituelles. N'hésitez pas à solliciter leur aide — c'est précisément pour cela qu'ils sont là.

## Les espaces de travail et de formation de la bibliothèque

Au-delà de son rôle documentaire, la bibliothèque universitaire est un espace de travail structuré particulièrement adapté aux besoins des étudiants. Les salles de lecture proposent différents environnements selon les besoins : salles silencieuses pour le travail individuel concentré, salles de travail en groupe pour les projets collaboratifs, cabines de travail individuelles pour les séances de révision intensive. Ces espaces sont généralement équipés de prises électriques pour les ordinateurs portables et de connexion Wi-Fi.

Les formations à la recherche documentaire organisées par les bibliothèques sont des ressources pédagogiques précieuses pour les étudiants qui débutent leurs études supérieures ou qui abordent un nouveau niveau académique. Ces formations — souvent d'une durée d'une à deux heures, en petits groupes — apprennent à formuler une requête de recherche efficace, à utiliser les catalogues en ligne, à évaluer la fiabilité des sources trouvées, et à citer correctement les documents consultés. Certaines de ces formations sont intégrées au cursus universitaire et comptent dans les crédits ECTS, d'autres sont proposées en accès libre.

## L'Environnement Numérique de Travail (ENT) : la plateforme centrale

L'Environnement Numérique de Travail est une plateforme numérique centralisée qui regroupe l'ensemble des services informatiques mis à disposition des étudiants par l'université. Accessible depuis n'importe quel appareil connecté à Internet avec les identifiants universitaires personnels (généralement un login du type prenom.nom@univ-xxx.fr et un mot de passe créé lors de l'inscription), l'ENT est le point d'entrée unique vers la grande majorité des ressources numériques de l'université.

Les services accessibles via l'ENT varient selon les établissements, mais comprennent généralement : la messagerie électronique universitaire officielle, la plateforme pédagogique de dépôt de cours et de ressources (Moodle, Blackboard, ou plateforme maison), l'accès aux notes et résultats d'examens, la consultation des emplois du temps et des salles, l'accès aux bases de données documentaires, les services administratifs en ligne (demandes de certificats de scolarité, inscription pédagogique aux cours), et les outils de communication avec les enseignants.
`;

const L11 = `# Comprendre le Système Universitaire Français : Licence, Master, Doctorat (LMD)

Le système universitaire français, organisé autour du triptyque Licence-Master-Doctorat depuis la réforme de Bologne, constitue le cadre académique fondamental dans lequel s'inscrit tout étudiant souhaitant poursuivre des études supérieures en France. Ce système, souvent abrégé LMD, harmonise les études françaises avec celles des autres pays européens, facilitant la mobilité internationale des étudiants et la reconnaissance mutuelle des qualifications. Pour un étudiant étranger arrivant en France, comprendre l'architecture de ce système — ses niveaux, ses logiques, ses passerelles et ses spécificités françaises — est non seulement une nécessité pratique pour naviguer dans le paysage universitaire, mais aussi une clé de compréhension culturelle qui permet de saisir les valeurs et les pratiques académiques françaises dans leur profondeur. Cette leçon vous propose une exploration approfondie du système LMD, depuis ses fondements historiques jusqu'à ses modalités pratiques contemporaines.

## L'origine et la logique du système LMD

Le système LMD a été introduit en France à partir de l'année universitaire 2002-2003, dans le cadre du processus de Bologne initié en 1999 par les ministres européens de l'enseignement supérieur. Ce processus visait à créer un Espace Européen de l'Enseignement Supérieur cohérent, dans lequel les diplômes seraient mutuellement reconnaissables et comparables, et où la mobilité étudiante et académique serait facilitée. Avant cette réforme, la France disposait d'une architecture propre — DEUG, Licence, Maîtrise, DEA/DESS, Doctorat — qui ne correspondait pas aux niveaux définis par le processus de Bologne.

La réforme LMD a aligné l'architecture française sur les trois cycles reconnus au niveau européen : le premier cycle (bac+3, 180 crédits ECTS), le deuxième cycle (bac+5, 120 crédits ECTS supplémentaires) et le troisième cycle (bac+8 en moyenne pour le doctorat). Ce cadre commun permet aujourd'hui à un étudiant français d'aller poursuivre un master en Espagne, en Allemagne ou en Finlande avec une certitude de reconnaissance de sa licence française, et inversement.

Au-delà de la dimension de reconnaissance internationale, le système LMD a aussi transformé la pédagogie universitaire française en introduisant la notion de crédits ECTS capitalisant les connaissances : chaque semestre validé représente 30 crédits ECTS, chaque année 60, et les crédits obtenus sont définitivement acquis — ce qui permet à un étudiant qui suspend ses études puis les reprend plus tard de conserver le bénéfice de ses acquis.

## Le premier cycle : la Licence

La Licence est le premier grade universitaire du système LMD, correspondant à trois années d'études supérieures après le baccalauréat (Bac+3) et à 180 crédits ECTS. Elle est dispensée dans les universités publiques, qui constituent le cadre normal de formation pour ce premier cycle, bien que des établissements privés sous contrat avec l'État proposent également des formations de niveau licence reconnues.

La licence est organisée en six semestres de six unités d'enseignement (UE) chacun. Chaque semestre représente 30 crédits ECTS. Les deux premières années constituent ce que les pédagogues appellent le « tronc commun disciplinaire » : les étudiants y acquièrent les fondamentaux de leur discipline (droit, économie, sociologie, histoire, sciences, langues, etc.) avec une diversité de contenus qui garantit une formation générale solide dans le domaine. La troisième année amorce une spécialisation plus marquée et prépare soit à l'entrée directe sur le marché du travail (pour certaines licences professionnelles), soit à la poursuite en master.

La licence générale est la forme la plus courante. Elle forme à une discipline ou à un ensemble de disciplines connexes dans une logique généraliste et prépare principalement à la poursuite d'études en master. La licence professionnelle est une forme spécifique conçue pour l'insertion professionnelle directe après Bac+3 : elle intègre un stage obligatoire en entreprise et des enseignements directement liés aux besoins des secteurs professionnels ciblés.

## Le deuxième cycle : le Master

Le Master est le deuxième grade universitaire du système LMD, correspondant à deux années supplémentaires après la licence (Bac+5 total) et à 120 crédits ECTS au-delà de la licence. Il représente une spécialisation approfondie dans un domaine académique ou professionnel précis et marque une élévation significative du niveau d'exigence académique par rapport à la licence.

La première année de master (M1) est une année de transition entre la formation générale de la licence et la spécialisation approfondie du M2. Elle permet d'approfondir les connaissances théoriques du domaine, de développer des compétences méthodologiques plus sophistiquées (recherche documentaire avancée, analyse critique, production académique) et de confirmer l'orientation vers un domaine de spécialisation précis. La deuxième année de master (M2) est l'apex du deuxième cycle : elle combine des enseignements spécialisés de haut niveau avec un stage long en milieu professionnel ou un mémoire de recherche — parfois les deux — qui constituent le principal critère d'évaluation finale.

Il existe deux grandes orientations de masters, qui reflètent deux trajectoires distinctes après la formation. Le master à orientation professionnelle (anciennement appelé DESS) prépare à des métiers précis dans le secteur privé ou public, avec une forte composante de terrain (stage de 4 à 6 mois) et des intervenants professionnels dans les enseignements. Le master à orientation recherche prépare à la carrière académique et scientifique, avec une composante recherche dominante incluant des séminaires de chercheurs, une participation à des équipes de recherche et un mémoire avec ambition de contribution originale à la connaissance.

## Le troisième cycle : le Doctorat

Le Doctorat est le grade académique le plus élevé du système LMD, culminant le troisième cycle des études universitaires. Il représente la frontière entre la formation et la production de connaissance : le doctorant n'est plus seulement un étudiant qui apprend, mais un chercheur qui contribue, par sa thèse, à l'avancement du savoir dans son domaine. Cette distinction culturelle fondamentale est souvent difficile à saisir pour des étudiants venant de systèmes où le doctorat est perçu comme une formation supplémentaire plutôt que comme une activité de recherche professionnelle.

La durée du doctorat varie selon les disciplines et les questions de recherche : trois ans en moyenne dans les sciences « dures » et quatre à cinq ans en sciences humaines et sociales. Le financement du doctorat est une question centrale que tout candidat au doctorat doit résoudre avant de démarrer. Les contrats doctoraux, financés par l'université ou par des contrats de recherche, sont la forme de financement institutionnelle de référence pour un salaire mensuel d'environ 2 000 euros. Les conventions CIFRE (Conventions Industrielles de Formation par la Recherche) permettent de préparer une thèse en lien avec une entreprise privée tout en étant salarié de celle-ci. Les bourses de gouvernements étrangers et les financement de fondations complètent le paysage.
`;

const L12 = `# Parcoursup et Mon Master : Les Plateformes d'Admission

Dans le paysage de l'enseignement supérieur français, Parcoursup et Mon Master occupent des positions centrales et complémentaires : l'une gère les admissions en formations post-baccalauréat, l'autre celles des masters sélectifs. Ces deux plateformes numériques ont profondément transformé la façon dont les étudiants accèdent aux formations universitaires françaises, en centralisant des procédures qui étaient auparavant dispersées et opaques. Pour un étudiant étranger naviguant dans le système d'admission français, maîtriser le fonctionnement de ces plateformes — leurs calendriers, leurs logiques de sélection, leurs exigences documentaires et leurs recours en cas de difficulté — est une compétence administrative indispensable. Cette leçon vous en présente une analyse approfondie, couvrant à la fois les aspects techniques et les stratégies pour optimiser vos candidatures.

## Parcoursup : histoire, logique et architecture

Parcoursup a été lancé en 2018 pour remplacer l'ancien système APB (Admission Post-Bac), qui avait fait l'objet de nombreuses critiques pour son manque de transparence et le recours au tirage au sort pour départager des candidats à égalité — une procédure dont l'absurdité avait provoqué une vive controverse médiatique et politique. Parcoursup a été conçu pour rendre les admissions plus transparentes, plus équitables et plus adaptées aux profils des candidats, en remplaçant le tirage au sort par des critères d'examen des dossiers explicites.

L'architecture de Parcoursup repose sur quelques principes fondamentaux. Premièrement, la pluralité des vœux : chaque candidat peut saisir jusqu'à dix vœux de formation distincts, et, pour certaines formations, plusieurs vœux dans différents établissements proposant la même formation. Cette pluralité est conçue pour maximiser les chances d'admission de chaque candidat en lui permettant de postuler à des formations de différents niveaux de sélectivité. Deuxièmement, la transparence des critères : chaque formation affichée sur Parcoursup doit publier les critères et leur pondération utilisés pour examiner les dossiers — composition du dossier, résultats scolaires, mentions au baccalauréat, appréciations des enseignants, projet de formation motivé. Troisièmement, la continuité du service : le traitement des candidatures se déroule en continu à partir de la mi-juin, avec des propositions d'admission communiquées progressivement selon un calendrier annoncé à l'avance.

## Le calendrier détaillé de Parcoursup

La compréhension précise du calendrier Parcoursup est une condition sine qua non d'une candidature réussie. Les dates sont annoncées chaque année par le ministère de l'Enseignement supérieur et publiées sur le site officiel parcoursup.gouv.fr. Elles suivent un schéma récurrent d'une année à l'autre, avec des variations de quelques jours.

La phase d'information et de découverte s'ouvre généralement en décembre. Pendant cette période, le site est ouvert en consultation libre : n'importe qui peut parcourir les formations disponibles, consulter les critères d'admission, les profils des étudiants admis les années précédentes (en termes de mention au baccalauréat), les taux d'accès (proportion de candidats qui reçoivent une proposition d'admission) et les indicateurs d'insertion professionnelle. Cette phase est cruciale pour préparer une stratégie de candidature réfléchie.

La phase de saisie des vœux s'ouvre en janvier et se ferme en mars. Pendant cette fenêtre, les candidats créent leur compte, renseignent leurs informations personnelles et académiques, formulent leurs vœux de formation et rédigent leurs projets de formation motivés pour chaque vœu. À noter : les vœux saisis restent modifiables et supprimables jusqu'à la fermeture de la phase. Il n'y a pas de limite à modifier ses vœux pendant cette période — profitez-en pour affiner votre sélection en consultant les statistiques sur les formations.

La phase de confirmation des vœux intervient en avril. Après la fermeture de la phase de saisie, les candidats doivent confirmer chacun de leurs vœux (en cliquant sur un bouton de confirmation pour chaque vœu). Cette étape est critique : un vœu non confirmé est automatiquement supprimé. La confirmation n'implique pas un engagement ferme — elle signifie simplement que vous maintenez votre intérêt pour la formation.

La phase d'admission s'ouvre à partir de la mi-juin et se prolonge jusqu'en septembre. Les établissements examinent les dossiers selon leurs critères publiés et communiquent leurs propositions d'admission progressivement. Chaque matin à 8 heures, les candidats peuvent consulter les nouvelles propositions reçues. Pour chaque proposition, trois réponses sont possibles : accepter définitivement, accepter temporairement tout en maintenant des vœux en attente sur d'autres formations, ou refuser. La gestion stratégique de ces réponses — en acceptant temporairement des formations satisfaisantes tout en attendant des propositions de formations préférées — est un exercice qui requiert réflexion et anticipation.

## Le projet de formation motivé : clé du dossier Parcoursup

Le projet de formation motivé (PFM) est le seul élément entièrement rédigé par le candidat dans le dossier Parcoursup, et c'est souvent l'élément qui fait la différence dans les dossiers proches en termes de résultats scolaires. Limité à 1 500 caractères espaces compris (une page environ), le PFM doit convaincre la commission d'admission que vous avez une raison précise et réfléchie de choisir cette formation dans cet établissement, et que votre profil correspond aux attendus.

Un PFM efficace obéit à une structure claire : l'accroche ou la phrase d'entrée qui pose le contexte de votre démarche (votre parcours, votre projet, votre intérêt pour le domaine), le développement qui argumente en quoi cette formation correspond à votre projet (ses spécificités pédagogiques, ses débouchés, ses ressources) et la conclusion qui ouvre sur votre projet professionnel à moyen terme. Cette structure n'est pas rigide, mais elle permet de couvrir les éléments que la commission recherche.

La personnalisation est la qualité la plus importante du PFM. Un texte générique qui pourrait s'appliquer à n'importe quelle formation du même domaine est immédiatement perçu comme tel par les lecteurs habituels des dossiers d'admission. Au contraire, un texte qui cite des enseignants reconnus de la formation, des projets pédagogiques spécifiques, des ressources particulières de l'établissement ou des éléments de votre parcours directement en lien avec les points forts de la formation démontre que vous avez vraiment étudié l'offre et que votre candidature est sincère et réfléchie.
`;

await patch('0447d045-e377-4184-aa2c-8682c6502843', L9);
await patch('21a6d3ee-294f-4217-9756-32f874a332f4', L10);
await patch('c5439dd3-ee75-49a4-b7ab-c11c4dfc1435', L11);
await patch('b04e269f-0b07-40a2-a16a-fa43d5462e88', L12);
