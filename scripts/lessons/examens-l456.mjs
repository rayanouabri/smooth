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

const L4 = `# Les Rattrapages, la Compensation et le Jury : Comprendre les Règles

Le système d'évaluation universitaire français repose sur un ensemble de règles de compensation, de rattrapage et de délibération de jury dont la maîtrise est indispensable pour tout étudiant souhaitant optimiser ses résultats et comprendre avec précision sa situation académique à chaque fin de semestre. Ces règles, codifiées dans les textes réglementaires (arrêtés Licence et Master) et déclinées dans les règlements intérieurs de chaque université, peuvent sembler complexes au premier abord, mais leur logique devient claire une fois les principes fondamentaux assimilés.

## La compensation entre unités d'enseignement

Le principe de compensation est l'une des spécificités les plus importantes du système universitaire français. Il permet à un étudiant de valider un semestre même sans avoir obtenu la note minimale de 10/20 dans chacune de ses unités d'enseignement, à condition que sa moyenne générale pondérée (calculée en tenant compte des coefficients de chaque UE) soit égale ou supérieure à 10/20. En d'autres termes, une très bonne performance dans une matière peut compenser une note insuffisante dans une autre.

Concrètement, si vous obtenez 16/20 dans une UE de coefficient 3 et 7/20 dans une UE de coefficient 2, votre moyenne pondérée sera (16×3 + 7×2) / (3+2) = (48+14)/5 = 62/5 = 12,4/20 — vous avez donc compensé et validé votre semestre malgré la note insuffisante de 7. Cette mécanique mathématique est fondamentale : connaître les coefficients de chaque UE vous permet de stratégiser vos efforts et d'identifier les matières à haut coefficient sur lesquelles un investissement supplémentaire a un impact maximal sur votre moyenne générale.

La compensation s'applique à l'intérieur d'un semestre (compensation entre les UE d'un même semestre), et peut également s'appliquer entre les semestres d'une même année dans certains établissements (compensation annuelle). Les modalités exactes de compensation varient selon les universités et les niveaux de formation : elles sont précisées dans le règlement des études de votre composante. Il est impératif de lire ce document attentivement, car les règles peuvent différer significativement d'un département à l'autre, même au sein d'une même université.

## La note minimale plancher : la règle du 5/20

Dans de nombreux établissements, la compensation ne s'applique que si aucune des UE n'est inférieure à une note plancher, généralement fixée à 5/20 ou 7/20. Une note inférieure à ce seuil est considérée comme éliminatoire et empêche la compensation, quel que soit le niveau de la moyenne générale. Cette règle vise à éviter qu'un étudiant puisse valider un semestre sans avoir une maîtrise minimale dans toutes les matières.

Exemples : si votre université applique un plancher à 7/20 et que vous obtenez 4/20 dans une UE, vous ne pouvez pas compenser même si votre moyenne générale est de 12/20 — vous devrez repasser cette UE à la session 2. L'existence ou non d'un plancher, et son niveau, est une information capitale que vous devez vérifier dans votre règlement des études.

## La session de rattrapage (session 2)

La session 2, communément appelée « rattrapage » ou « deuxième chance », est une session d'examens distincte de la session principale (session 1), organisée généralement en juin pour le premier semestre et en septembre pour le second. Elle porte sur les mêmes UE qu'en session 1 et offre aux étudiants ayant échoué ou étant défaillants la possibilité de présenter à nouveau leurs épreuves.

Un point crucial que tout étudiant doit connaître est la règle de conservation de note entre les deux sessions. Dans la grande majorité des universités françaises, si vous vous présentez à la session 2, c'est la note obtenue en session 2 qui remplace définitivement celle de la session 1 pour le calcul de la compensation — même si elle est inférieure. Autrement dit, repasser une matière en session 2 alors que vous avez obtenu 9/20 en session 1 vous expose à descendre à 6/20 si vous avez moins bien travaillé entre les deux sessions. Avant de vous inscrire aux rattrapages, évaluez lucidement vos chances d'amélioration.

Certains établissements appliquent toutefois la règle avantageuse de la «note retenue» qui conserve le maximum entre les deux sessions. Dans ces établissements, présenter la session 2 est toujours dans votre intérêt puisque vous ne pouvez qu'améliorer (ou maintenir) votre note. Là encore, la seule façon de connaître avec certitude la règle applicable chez vous est de lire le règlement des études ou de consulter le secrétariat pédagogique.

## Le jury de délibération

Le jury de délibération est l'instance collégiale composée des enseignants responsables des UE et du responsable de formation qui se réunit à l'issue de chaque session d'examens pour arrêter officiellement les résultats des étudiants. Le jury examine les notes obtenues, applique les règles de compensation, prononce les validations et les ajournements, et peut dans certains cas exercer son pouvoir souverain de « faire passer » un étudiant à titre exceptionnel (jury de clémence).

Le jury de délibération dispose d'un pouvoir discrétionnaire pour accorder des points de jury dans des cas limites — un étudiant ayant 9,7/20 de moyenne peut être « arrondi » à 10/20 à la discrétion du jury si sa progression, son assiduité et son engagement le justifient. Ce pouvoir de clémence est exercé de façon variable selon les établissements et les politiques de formation ; il ne peut jamais être invoqué comme un droit mais comme une possibilité.

Les décisions du jury sont souveraines et définitives : elles ne peuvent être contestées que sur le motif d'une irrégularité procédurale (vice de forme) devant les juridictions administratives, pas sur le fond de l'appréciation pédagogique des enseignants.

## La conservation des notes et crédits ECTS

Les crédits ECTS (European Credit Transfer and Accumulation System) associés aux UE validées sont définitivement acquis et conservés à vie, même si l'étudiant interrompt ses études ou change d'établissement. Si vous avez validé 48 crédits ECTS sur les 60 requis pour votre première année et que vous interrompez vos études, vous conservez l'intégralité de ces 48 crédits que vous pourrez faire valoir ultérieurement lors d'une reprise d'études.

La portabilité des crédits ECTS est également garantie à l'échelle européenne : des crédits obtenus dans une université française sont reconnus par les établissements d'autres pays de l'espace européen d'enseignement supérieur selon les accords de reconnaissance bilatéraux ou multilatéraux. Cette architecture de reconnaissance mutuelle facilite la mobilité étudiante entre pays et constitue l'un des accomplissements les plus concrets de la construction européenne dans le domaine de l'éducation.

## Les mentions au diplôme

Les diplômes universitaires français sont attribués avec des mentions qui qualifient le niveau de performance global de l'étudiant. Ces mentions sont calculées sur la base d'une moyenne générale pondérée sur l'ensemble des UE de la formation. Les seuils standard sont : Passable (moins de 12), Assez Bien (12 à 13,99), Bien (14 à 15,99), Très Bien (16 et au-dessus). Dans les formations sélectives (CPGE, masters d'écoles d'élite), les barèmes peuvent être légèrement différents.

Les mentions jouent un rôle dans les candidatures aux études ultérieures, notamment pour l'accès aux masters sélectifs et aux doctorats. Un dossier de candidature à un master avec une licence mention Très Bien a une valeur supérieure à un dossier avec une licence mention Passable, toutes choses égales par ailleurs. Connaître les seuils de mention dès le début de votre formation vous permet de vous fixer des objectifs clairs et de calibrer votre investissement en conséquence.

## Stratégies pour optimiser sa trajectoire académique

La connaissance des règles de compensation et de rattrapage n'est pas seulement utile en cas de difficulté — elle permet aussi de planifier stratégiquement son parcours. Voici quelques principes concrets.

Connaître les coefficients de toutes vos UE vous permet d'identifier où investir en priorité. Une UE de coefficient 4 a deux fois plus d'impact sur votre moyenne qu'une UE de coefficient 2 — il est donc rationnel de lui consacrer proportionnellement plus de temps de préparation.

Anticiper les UE à risque dès le début du semestre vous permet de prendre des mesures préventives — solliciter des tuteurs, assister aux permanences des enseignants, rejoindre un groupe de travail — avant qu'une situation difficile ne devienne une situation d'échec.

Conserver la note de session 1 lorsqu'elle est raisonnablement bonne est souvent plus prudent que de tout risquer sur une session 2 incertaine. Évaluez honnêtement vos capacités et votre niveau de préparation avant de décider de passer ou non les rattrapages.
`;

const L5 = `# La Dissertation Française : Structure, Argumentation, Style

La dissertation est l'exercice académique le plus emblématique et le plus exigeant du système éducatif français. Présente dans l'enseignement secondaire depuis le lycée et omniprésente dans les filières de lettres, de philosophie, de sciences humaines, de droit et d'économie à l'université, elle représente la forme par excellence de la production intellectuelle française : un texte argumenté, structuré en parties équilibrées, qui répond à une problématique en mobilisant des exemples précis et une réflexion personnelle nuancée. Pour un étudiant étranger, maîtriser la dissertation française est un enjeu majeur de réussite académique et un passage culturel obligé.

## Ce que la dissertation française n'est pas

Avant de décrire ce qu'est la dissertation, il est utile de démythifier certaines idées reçues et de clarifier ce que ce format n'est pas. La dissertation française n'est pas un résumé du cours. Un texte qui récite les contenus vus en classe sans construire une argument autour d'une problématique précise ne sera pas considéré comme une dissertation, même s'il est bien écrit et riche en informations. La dissertation n'est pas non plus un texte d'opinion libre où l'on exprime ses idées personnelles sans rigueur argumentative ni références précises. Et contrairement aux formats académiques anglosaxons (l'essay à la britannique ou le research paper américain), la dissertation française n'est pas structurée autour d'une thèse unique défendue de façon linéaire : elle explore un problème dans sa complexité, en présentant et en articulant plusieurs perspectives avant de conclure.

## La problématique : le cœur de la dissertation

La problématique est la question centrale que vous avez choisie de traiter à la lumière du sujet donné. Elle n'est pas identique au sujet : le sujet est souvent une affirmation, une citation, ou une question large, et votre travail est d'en extraire une problématique, c'est-à-dire une question précise, paradoxale ou nuancée, qui permet d'organiser une réflexion riche et structurée.

La formulation d'une bonne problématique est souvent la partie la plus difficile de la dissertation pour les étudiants étrangers. Une problématique efficace doit satisfaire plusieurs critères simultanément. Elle doit être en rapport direct avec le sujet sans le paraphraser simplement. Elle doit mettre en tension deux dimensions ou deux perspectives du sujet (un paradoxe, une opposition, une nuance). Elle doit être suffisamment précise pour être traitée dans le format imparti (2h ou 3h selon le niveau). Et elle doit permettre d'aboutir à une conclusion non triviale — c'est-à-dire que la réponse n'est pas évidente dès la lecture du sujet.

Exemple : si le sujet est «La liberté est-elle une illusion ?», une problématique faible serait «Qu'est-ce que la liberté ?» (trop large et vague). Une problématique plus efficace serait «Dans quelle mesure notre sentiment de liberté peut-il être considéré comme une construction sociale qui masque des déterminismes réels ?» — une question précise qui oriente le développement vers une tension productive entre l'expérience subjective de la liberté et les conditionnements objectifs qui la limitent.

## La structure en trois parties : le plan dialectique

La structure standard de la dissertation française est le plan en deux ou trois parties, chaque partie se décomposant en deux ou trois sous-parties. Le plan dialectique en trois parties (thèse / antithèse / dépassement ou synthèse) est le modèle le plus valorisé dans les filières de lettres et de philosophie. Le plan analytique (analyse successive de différents aspects du problème) est plus courant en sciences sociales et en droit. Dans tous les cas, l'équilibre entre les parties est un critère de forme important.

La partie 1 (thèse) présente une première réponse au problème, généralement la perspective la plus immédiate ou la plus courante. La partie 2 (antithèse) nuance ou contredit cette première réponse en apportant des éléments qui la remettent en question. La partie 3 (synthèse ou dépassement) transcende l'opposition entre thèse et antithèse en proposant une vision plus complexe et plus nuancée du problème, qui intègre les apports des deux premières parties sans simplement les «faire la moyenne».

Chaque partie est divisée en plusieurs sous-parties qui présentent chacune un argument principal, développé et illustré par un ou plusieurs exemples précis. La transition entre sous-parties et entre parties est assurée par des phrases de liaison explicites qui montrent au lecteur comment les idées s'articulent logiquement.

## L'introduction : accroche, contextualisation, problématique, annonce du plan

L'introduction d'une dissertation française suit une structure codifiée en quatre mouvements que les enseignants identifient immédiatement.

L'accroche (ou «amorce») est une entrée en matière destinée à capter l'intérêt du lecteur. Elle peut être une citation, un exemple concret, un fait d'actualité, un paradoxe apparent ou une question rhétorique. Elle doit être en rapport direct avec le sujet et servir de tremplin vers la problématique. L'accroche ne doit jamais être une platitude («Depuis la nuit des temps, les hommes se sont interrogés sur...») qui est systématiquement mal reçue par les correcteurs.

La contextualisation situe le sujet dans son champ disciplinaire, son contexte historique ou intellectuel, et délimite le périmètre de la réflexion. Elle répond implicitement à la question «Pourquoi ce sujet est-il intéressant et légitime ?».

La problématique est formulée explicitement, le plus souvent sous la forme d'une ou deux questions directes. Dans certaines disciplines, elle peut être reformulée sous la forme d'une tension ou d'un paradoxe explicite.

L'annonce du plan présente de façon concise et directe les grandes parties de la dissertation. Elle doit être précise sans être détaillée : «Nous verrons d'abord que... Puis nous montrerons que... Enfin, nous analyserons comment...».

## Le développement : argument, exemple, explication

Chaque sous-partie du développement suit une structure interne cohérente : l'annonce de l'argument (la thèse de la sous-partie), l'illustration par un exemple précis (un fait historique, une référence littéraire, une donnée statistique, un cas jurisprudentiel), et l'explication du lien entre l'exemple et l'argument (pourquoi cet exemple illustre-t-il ce que vous venez d'affirmer ?).

Les exemples sont le nerf de la guerre en dissertation. Un exemple pertinent, précis et bien explicité vaut infiniment plus que plusieurs exemples vagues et génériques. Un correcteur voit immédiatement si l'exemple est réellement maîtrisé par l'étudiant ou s'il est cité à titre décoratif. Travaillez votre stock d'exemples dans toutes les matières où la dissertation est utilisée : œuvres littéraires avec citations précises en lettres, décisions de jurisprudence en droit, expériences historiques documentées en histoire, résultats empiriques en sciences sociales.

## La conclusion : bilan et ouverture

La conclusion d'une dissertation a deux fonctions complémentaires. Elle doit d'abord synthétiser le raisonnement développé, en répondant explicitement à la problématique posée en introduction. Cette réponse doit être nuancée et refléter la complexité du traitement effectué — «oui, mais...» ou «cela dépend de...» sont souvent des formulations plus honnêtes intellectuellement qu'une réponse tranchée. Ensuite, la conclusion doit ouvrir sur une perspective plus large ou une nouvelle question que la réflexion menée a permis d'envisager. Cette ouverture ne doit pas être artificielle ou gratuite — elle doit découler naturellement du raisonnement.

## L'écriture formelle : exigences du style académique français

Le registre de la dissertation est soutenu et impersonnel. On n'utilise pas le «je» dans la plupart des disciplines (sauf en philosophie dans certains contextes), mais le «nous» (de modestie) ou une formulation impersonnelle. Les abréviations, le langage familier, les formulations colloquiales et les anglicismes non nécessaires sont à proscrire absolument. La richesse lexicale est valorisée : évitez les répétitions en variant la formulation de vos idées avec des synonymes précis et des périphrases appropriées.

Les connecteurs logiques jouent un rôle crucial dans la cohérence du texte : «en effet», «or», «certes», «toutefois», «néanmoins», «par conséquent», «ainsi», «en outre», «de surcroît», «à l'inverse» sont des balises qui guident le lecteur à travers votre raisonnement et signalent les relations logiques entre vos idées. L'abus de connecteurs génériques («de plus», «aussi», «mais») est une marque d'immaturité académique.

## Conseils pratiques pour préparer la dissertation en langue étrangère

Pour les étudiants étrangers qui rédigent en français, la dissertation pose le défi simultané de la maîtrise méthodologique et de l'expression linguistique. Quelques conseils pratiques pour naviguer cet exercice double.

Constituez un répertoire personnel de formulations académiques françaises types : des phrases d'introduction de problématique, des formules de transition entre parties, des formulations de nuance et de concession, des formules de conclusion. Ces «briques» linguistiques, mémorisées et intégrées, vous permettent de consacrer votre énergie mentale au contenu argumentatif plutôt qu'à chercher comment formuler les transitions.

Rédigez des plans au brouillon systématiquement, même dans le cadre d'entraînements à la maison. La compétence de planification d'une dissertation é en 15-20 minutes (la durée typique allouée en examen) s'acquiert par la répétition.

Montrez vos copies à des camarades français ou à des enseignants tuteurs pour recevoir des retours sur la structure logique et la correction linguistique. La progression en dissertation exige un retour externe régulier.
`;

const L6 = `# En Cas d'Échec : Session 2, VAE, Redoublement, Droits des Étudiants

Faire face à un échec académique — une note insuffisante, un semestre non validé, voire une année à recommencer — est une expérience difficile, parfois déstabilisante, mais qui n'est ni une fin en soi ni une exception dans le paysage universitaire français. Le système français prévoit des dispositifs multiples pour donner à chaque étudiant une seconde chance : la session de rattrapage, les règles de compensation, la possibilité de redoubler, la validation des acquis de l'expérience, et des mécanismes d'accompagnement vers une réorientation. Comprendre ces dispositifs avec précision permet de ne pas subir l'échec passivement mais d'y répondre de façon informée et stratégique.

## La session 2 : la deuxième chance

La session de rattrapage (session 2) est la première réponse institutionnelle à un échec ou à une note insuffisante en session 1. Elle est organisée quelques semaines après la session principale, généralement en mai-juin pour les semestres d'automne et en août-septembre pour les semestres de printemps. Elle porte sur les mêmes unités d'enseignement que la session 1 et offre à l'étudiant la possibilité de repasser les épreuves des UE non validées.

Avant de vous inscrire à la session 2, plusieurs points sont à vérifier impérativement. Premièrement, votre règlement des études précise-t-il que la note de la session 2 remplace systématiquement celle de la session 1, ou conserve-t-on le maximum entre les deux ? Si la règle de remplacement s'applique, repasser une matière que vous avez obtenu 8 ou 9/20 vous expose à descendre. Deuxièmement, avez-vous le niveau de préparation suffisant pour améliorer significativement votre résultat ? Une session 2 préparée dans les deux semaines qui suivent l'annonce des résultats, sans travail substantiel supplémentaire, a peu de chances d'apporter une amélioration. Troisièmement, quels sont les examens de session 2 obligatoires (ceux pour lesquels l'exemption n'est pas possible) et lesquels sont optionnels ?

La préparation de la session 2 doit être différente de celle de la session 1. Analysez d'abord vos copies de session 1 lors de la consultation pour comprendre précisément les points qui ont été pénalisés. Identifiez les lacunes conceptuelles spécifiques — ce n'est pas le cours entier qu'il faut retravailler, mais les notions et les compétences qui ont fait défaut. Construisez un plan de révision ciblé sur ces lacunes, en allouant plus de temps aux éléments les plus pénalisants. Si des permanences de révision ou des séances de soutien sont proposées par l'université pendant l'intersemestre, utilisez-les.

## Le redoublement : processus et conséquences

Le redoublement, ou la répétition d'une année universitaire, est une possibilité prévue par les textes réglementaires, mais sa mise en œuvre concrète est encadrée par les universités. Dans le cadre de la loi ORE (Orientation et Réussite des Étudiants) de 2018, les universités françaises peuvent limiter le nombre de redoublements autorisés dans certaines filières et conditions. Le redoublement en licence est généralement limité à une fois par cycle, sous réserve de l'accord de la commission pédagogique.

La demande de redoublement est une démarche active de l'étudiant : il ne s'agit pas d'une reconduction automatique. Vous devez déposer un dossier auprès du secrétariat de votre composante en exprimant votre souhait de recommencer l'année, en expliquant les circonstances qui ont conduit à l'échec et en exposant les mesures que vous comptez prendre pour vous assurer d'un résultat différent. La commission pédagogique examine ces dossiers et se prononce. Les critères pris en compte incluent l'assiduité en cours, le profil de résultats (très proche de la validation ou nettement insuffisant), les justifications de l'échec (difficultés personnelles documentées, problème de santé) et le projet académique de l'étudiant.

En cas de refus de redoublement, l'université a l'obligation de proposer à l'étudiant une orientation alternative. Ce peut être une réorientation vers une filière plus adaptée à son profil, une proposition d'insertion dans une formation professionnalisante (BTS, BUT), ou un accompagnement vers l'emploi. L'étudiant ne peut légalement se voir opposer un refus sans qu'une solution alternative soit proposée.

## La réorientation : changer de cap sans perdre le bénéfice de ses acquis

La réorientation est souvent la réponse la plus adaptée à un échec répété dans une filière qui ne correspond pas aux aptitudes ou aux motivations réelles de l'étudiant. Elle peut se faire à plusieurs moments du parcours universitaire : dès la fin du semestre 1 pour les étudiants de première année (grâce au dispositif «Parcours Aménagé» ou au portail de réorientation de Parcoursup), à la fin de l'année pour les étudiants qui n'ont pas validé leur niveau, ou dans le cadre d'une procédure de VAE.

La réorientation en cours d'année (fin de semestre 1) est fortement encouragée pour les étudiants de L1 qui réalisent que leur filière initiale ne leur correspond pas. Le dispositif officiel prévoit que les candidats qui souhaitent se réorienter après le premier semestre accèdent à Parcoursup en mode réorientation pour postuler à d'autres formations pour le semestre 2. Les crédits ECTS obtenus au semestre 1 sont conservés et intégrés dans la nouvelle formation selon les équivalences reconnues.

## La VAE : valoriser une expérience réelle

La Validation des Acquis de l'Expérience (VAE) est un dispositif qui permet à une personne justifiant d'une expérience professionnelle, bénévole, syndicale ou associative significative d'obtenir une certification universitaire (licence, master) sans suivre intégralement le cursus standard de la formation. Elle est ouverte aux adultes qui ont au moins un an d'expérience en rapport direct avec la certification visée.

Pour un étudiant universitaire qui a échoué à un diplôme mais a ensuite travaillé plusieurs années dans un domaine connexe à ses études, la VAE peut être une voie de rattrapage digne et valorisante. La procédure de VAE comprend un dossier de présentation de l'expérience (dossier de recevabilité), une étude de recevabilité par un jury universitaire, puis la rédaction d'un dossier de validation détaillé qui décrit les compétences acquises en lien avec les référentiels du diplôme visé. Si la validation est partielle, l'étudiant peut se voir proposer des modules complémentaires à suivre pour obtenir le diplôme complet.

La VAE est peu connue des jeunes étudiants, mais constitue une réelle ressource pour ceux qui se trouvent dans des situations d'interruption d'études prolongée suivie d'une expérience professionnelle riche. Les Services Académiques d'Information et d'Orientation (SAIO) et les services de formation continue des universités accompagnent les candidats dans cette démarche.

## L'accompagnement à la réorientation et à la réussite

Toutes les universités françaises disposent de services d'aide à la réorientation et à la réussite académique, même si leur dénomination vary : SCUIO-IP (Service Commun Universitaire d'Information, d'Orientation et d'Insertion Professionnelle), Bureau de l'Aide à la Réussite, Service d'Appui aux Études, ou Services de la Pédagogie. Ces services offrent des entretiens individuels avec des conseillers d'orientation qui évaluent le profil de l'étudiant, discutent des facteurs ayant mené à l'échec et proposent des pistes de réorientation ou d'amélioration adaptées.

Les tutorats pairs — dispositifs où des étudiants de licence avancée encadrent les étudiants de première année en difficulté — sont particulièrement précieux pour les étudiants étrangers. Au-delà de l'aide académique sur les contenus de cours, les tuteurs pairs peuvent partager des stratégies de travail, des ressources de révision et une connaissance informelle de l'institution universitaire qui fait défaut aux nouveaux arrivants.

Les Maisons des Étudiants (MDE) et les Bureau de Vie Étudiante (BVE) organisent également des ateliers sur les méthodes de travail universitaire (prise de notes, révision efficace, gestion du stress), des groupes de parole pour étudiants en difficulté, et des permanences psychologiques. Ces ressources sont gratuites et confidentielles, et leur utilisation n'entache en aucune façon le dossier académique de l'étudiant.

## L'impact psychologique de l'échec et les ressources de soutien

L'échec académique peut avoir un impact psychologique important, en particulier pour les étudiants étrangers qui portent souvent des attentes familiales et nationales élevées et qui vivent loin du soutien affectif habituel. La honte, la déception et le sentiment d'imposture sont des réactions normales face à un échec, mais elles ne doivent pas conduire à l'isolement ou à l'abandon.

Les services de santé universitaires (SSU) et les Services Universitaires de Médecine Préventive et de Promotion de la Santé (SUMPPS) proposent un suivi psychologique gratuit aux étudiants. Ces services sont confidentiels et distincts du suivi académique — las informations que vous partagez avec le psychologue universitaire n'ont aucun impact sur vos résultats ou votre dossier administratif. Si vous ressentez une détresse émotionnelle significative en lien avec votre situation académique, solliciter ce type de soutien est un acte de responsabilité envers vous-même et non un aveu de faiblesse.

## Questions fréquentes sur la gestion de l'échec

**Q : Peut-on continuer ses études si un semestre n'est pas validé ?**
Dans la plupart des systèmes de licence, la compensation annuelle permet aux étudiants de passer en deuxième année même si l'un des deux semestres de première année n'est pas validé, à condition que la moyenne annuelle globale soit satisfaisante. Les conditions exactes dépendent du règlement de votre composante.

**Q : L'échec figure-t-il définitivement dans mon dossier académique ?**
Le relevé de notes officiel que vous obtenez de l'université mentionne l'ensemble de vos résultats, y compris les UE non validées et les mentions «ajourné». Cependant, seul le diplôme obtenu (et les crédits ECTS associés) est mentionné dans une attestation de diplôme officielle. Lors de candidatures ultérieures, vous pouvez décider de ne transmettre que votre diplôme final et non l'intégralité de vos relevés, sauf si ceux-ci sont explicitement demandés.

**Q : Un étudiant étranger peut-il conserver son titre de séjour étudiant en cas d'échec ?**
La connexion entre les résultats académiques et le titre de séjour est réelle mais nuancée. Pour renouveler son titre de séjour «étudiant», l'étudiant doit justifier d'une progression sérieuse dans ses études. Un échec ponctuel accompagné d'une reprise d'études ou d'une réorientation est généralement accepté par la préfecture. Un retard académique manifeste et répété sans justification peut être une cause de refus de renouvellement. Il est conseillé de faire valoir auprès de la préfecture toutes les circonstances atténuantes (problème de santé, difficultés d'adaptation documentées) et de présenter un projet académique crédible pour l'année suivante.
`;

await patch('f3af208d-e414-4e9f-a538-19279d6ca4c3', L4);
await patch('24c0f17e-d65c-454f-89cd-43757ff78407', L5);
await patch('fc3dae13-7dd7-4761-bca4-00b6508b8cc5', L6);
