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

const EXT3_L1 = `
## La nationalité française et ses implications pratiques à l'international

L'acquisition de la nationalité française a des implications importantes pour la vie internationale du naturalisé. La possession d'un passeport français permet d'accéder sans visa, ou avec un visa obtenu facilement à l'arrivée, à plus de 180 pays dans le monde — ce qui représente une liberté de circulation considérablement supérieure à celle offerte par la plupart des passeports de pays en développement. Cette mobilité accrue est souvent citée par les personnes naturalisées comme l'un des bénéfices pratiques les plus immédiats de la citoyenneté française.

Le passeport français est également l'un des documents de voyage les plus respectés et les plus efficaces dans les aéroports du monde entier : absence de bouchon dans les files des ressortissants de l'UE dans les pays qui proposent ce traitement différencié, accès aux programmes de trusted traveler dans certains pays, et traitement prioritaire dans certains consulats. Pour les voyageurs fréquents, notamment ceux qui ont des activités professionnelles internationales, la possession du passeport français peut représenter un gain de temps et d'efficacité significatif.

La protection consulaire française à l'étranger est un autre avantage concret. Un citoyen français qui se retrouve en difficulté à l'étranger — détention arbitraire, catastrophe naturelle, conflit armé — peut se tourner vers les ambassades et consulats français pour une assistance. Cette protection, bien que ne permettant pas de miracles face à des gouvernements étrangers déterminés à ne pas coopérer, représente un soutien institutionnel qui est absent pour les ressortissants de pays dont la représentation diplomatique est moins bien établie internationalement.

## Le délai entre la naturalisation et la pleine jouissance des droits

La naturalisation par décret publiée au Journal Officiel est immédiatement effective — du jour de la publication, la personne est française et peut se prévaloir de cette nationalité. Cependant, l'exercice pratique de certains droits requiert des démarches complémentaires dont les délais s'ajoutent à la durée de la procédure de naturalisation.

La première démarche après la naturalisation est généralement l'obtention du certificat de nationalité française, délivré par le tribunal judiciaire. Ce document, qui atteste officiellement de la naturalisation, est nécessaire pour les démarches suivantes et peut être demandé par les administrations qui n'ont pas accès direct au Journal Officiel. Son obtention prend généralement deux à six semaines.

La carte nationale d'identité française peut ensuite être demandée — pour la première fois pour un naturalisé, puisqu'il n'en avait pas avant. La demande de CNI se fait en mairie, avec le certificat de nationalité comme pièce centrale. La carte d'identité peut être obtenue en quelques semaines. Le passeport français peut être demandé simultanément à la CNI ou séparément, avec des délais similaires.

L'inscription sur les listes électorales, enfin, est la démarche qui concrétise le droit de vote. Elle peut se faire en ligne ou en mairie, à tout moment de l'année, mais des délais s'appliquent pour pouvoir voter lors d'un scrutin donné. Pour les naturalisés qui souhaitent participer à des élections imminentes, l'inscription au plus tôt est une priorité.

## La naturalisation des enfants et le concept d'effet collectif

La naturalisation d'un parent a des effets sur ses enfants mineurs dans certaines conditions — c'est ce que la loi appelle l'effet collectif de la naturalisation. Un enfant mineur résidant habituellement avec le parent naturalisé devient automatiquement français à la date de la naturalisation du parent, si le lien de filiation (légalement établi) est présent et si l'enfant réside habituellement en France.

Cet effet collectif automatique simplifie considérablement la situation administrative des familles où un parent se naturalise : les enfants mineurs n'ont pas à attendre leurs dix-huit ans ni à faire leur propre demande — ils deviennent français dans la foulée de leurs parents, sans procédure spécifique. Pour les enfants scolarisés en France depuis leur plus jeune âge et dont l'intégration dans la société française est souvent encore plus avancée que celle de leurs parents, cet effet collectif est une consécration logique.

Les enfants majeurs, en revanche, ne bénéficient pas de cet effet collectif. Un enfant devenu majeur après la naturalisation de son parent devra faire sa propre demande s'il souhaite acquérir la nationalité française. Sa situation est cependant généralement favorable si lui-même réside en France depuis de nombreuses années — les conditions de la naturalisation ordinaire (cinq ans de résidence, intégration) sont souvent remplies dans ces cas.
`;

const EXT3_L2 = `
## La gestion des conflits avec les services préfectoraux

Tout étranger qui gère ses titres de séjour sur plusieurs années sera, tôt ou tard, confronté à une difficulté administrative : une demande de pièces supplémentaires perçue comme injustifiée, un rendez-vous annulé sans préavis, un dossier égaré, un agent peu coopératif, ou une décision dont la motivation semble insuffisante. Savoir comment gérer ces situations avec efficacité et sans laisser que le stress prenne le dessus est une compétence pratique précieuse.

La première règle est de rester calme et factuel dans toutes les interactions avec les services préfectoraux, même face à des situations frustrantes ou injustes. Les agents préfectoraux disposent d'un pouvoir discrétionnaire dans le traitement des dossiers, et un comportement hostile ou accusateur de la part du demandeur peut nuire à la relation et compliquer la résolution du problème. Travailler à construire une relation respectueuse, même dans des situations de tension, est généralement plus efficace.

La deuxième règle est de tout documenter. Chaque interaction avec la préfecture doit être documentée : noter la date, l'heure, le nom de l'agent si possible, le contenu de l'échange. Ce journal de communication peut être précieux si une situation litigieuse doit être escaladée — que ce soit vers un responsable de la préfecture, vers le médiateur de la préfecture, ou vers un tribunal administratif. Les courriers recommandés avec accusé de réception sont préférables aux échanges verbaux pour toute demande formelle.

La troisième règle est de connaître ses droits et les recours disponibles. Toute décision administrative défavorable doit mentionner les voies de recours disponibles et les délais pour les exercer — c'est une obligation légale. Si une décision ne mentionne pas les voies de recours, c'est en elle-même une irrégularité. Contacter une association d'aide aux étrangers ou un avocat pour évaluer les options est toujours préférable à l'acceptation résignée d'une décision qui pourrait être contestée.

## Les technologies numériques et la gestion de son dossier administratif

Les outils numériques peuvent considérablement faciliter la gestion d'un dossier de titre de séjour, à condition d'être utilisés de façon organisée. La numérisation systématique de tous les documents — scans en haute résolution des titres de séjour, des récépissés, des convocations, des décisions — constitue une sauvegarde essentielle. Un disque dur externe ou un service de stockage cloud chiffré permettent de conserver ces copies en sécurité et de les retrouver rapidement en cas de besoin.

Les applications de rappel ou les agenda partagés peuvent être configurés pour alerter plusieurs mois avant la date d'expiration de chaque titre et rappeler la date limite de dépôt du dossier de renouvellement. Cette automatisation préventive décharge la mémoire et élimine le risque d'oubli pur et simple qui est l'une des principales causes de situation irrégulière non intentionnelle.

Pour les familles où plusieurs membres ont des titres de séjour à gérer, un tableau de suivi partagé (document en ligne, tableur) qui récapitule pour chaque membre les dates d'expiration et les démarches à effectuer permet une gestion coordonnée et prévenante de l'ensemble des situations administratives.

## Les associations d'anciens naturalisés et les réseaux de pairs

À côté des associations d'aide aux étrangers qui accompagnent les procédures administratives, des réseaux informels ou formels d'anciens étrangers devenus citoyens français se sont développés, partageant leurs expériences et proposant un accompagnement de pair à pair pour les candidats à la naturalisation. Ces réseaux sont précieux car leurs membres ont vécu de façon concrète les démarches que les candidats actuels doivent accomplir.

Ces pairs peuvent partager des informations très pratiques que les guides officiels ne mentionnent pas : les particularités de telle ou telle préfecture, les questions typiquement posées lors des entretiens d'assimilation dans leur département, les délais réels de traitement dans leur zone géographique, ou simplement l'expérience émotionnelle de l'entretien et de l'attente de la décision. Cette dimension humaine de l'accompagnement, qui ne remplace pas le conseil juridique professionnel mais le complète utilement, peut réduire le stress de la démarche et aider les candidats à se préparer de façon plus réaliste.
`;

const EXT3_L3 = `
## La déclaration de nationalité pour les enfants nés en France

Le droit du sol en France, souvent appelé « jus soli », permet aux enfants nés en France de parents étrangers d'accéder à la nationalité française dans certaines conditions. Ce mécanisme, distinct de la naturalisation par décret, suit des règles précises qui doivent être bien comprises pour être utilisées à bon escient.

Un enfant né en France de parents étrangers n'est pas automatiquement français à la naissance — c'est une idée reçue courante. L'accès à la nationalité française par le sol nécessite que l'enfant ait résidé en France habituellement pendant au moins cinq ans, de façon continue ou discontinue, depuis l'âge de onze ans. À seize ans, l'enfant peut lui-même réclamer la nationalité française par déclaration (sans attendre d'avoir dix-huit ans). À dix-huit ans, s'il continue à résider en France, la déclaration est encore plus simple. En dessous de seize ans, les représentants légaux peuvent faire la déclaration à partir des treize ans de l'enfant si les conditions de résidence depuis l'âge de huit ans sont remplies.

Cette déclaration de nationalité, contrairement à la naturalisation par décret, n'est pas soumise au pouvoir d'appréciation discrétionnaire du gouvernement : si les conditions légales sont remplies, la nationalité est accordée de droit. C'est une garantie importante pour les enfants dont les parents ont une situation administrative complexe ou précaire.

## L'accès à la carte de résident pour les personnes sous protection internationale

Les réfugiés reconnus et les bénéficiaires de la protection subsidiaire ont un régime d'accès à la carte de résident différent du régime ordinaire. Un réfugié reconnu par l'OFPRA peut obtenir la carte de résident dès sa première demande — sans avoir à attendre cinq ans de résidence régulière — car la loi considère que la recognition du statut de réfugié justifie à elle seule la délivrance d'un titre de long séjour.

Ce traitement préférentiel est fondé sur la logique humanitaire qui sous-tend le droit d'asile : une personne reconnue réfugiée ne peut pas retourner dans son pays d'origine sans risquer sa vie ou sa liberté — il serait incohérent de lui imposer un séjour précaire en France pendant cinq ans avant de lui offrir une stabilité de séjour. La carte de résident accordée au réfugié est donc un prolongement logique de la protection internationale qui lui a été accordée.

Le bénéficiaire de la protection subsidiaire, dont la situation est moins protégée que celle du réfugié à proprement parler, a accès à un titre de séjour « vie privée et familiale » de quatre ans renouvelable. La carte de résident lui est accessible après cinq ans de résidence régulière, selon les conditions ordinaires, avec la prise en compte de la durée de sa protection subsidiaire dans le calcul des cinq ans.

## Les recours spéciaux et les procédures d'urgence

Dans certains cas d'urgence — menace d'éloignement imminent, refus de renouvellement avec notification d'une OQTF, non-renouvellement avant une échéance critique — des procédures juridictionnelles accélérées permettent d'obtenir une décision rapide du juge administratif, avant même l'audience au fond.

Le référé-suspension, introduit devant le tribunal administratif dans les jours qui suivent la notification d'une décision défavorable, peut obtenir du juge la suspension temporaire de l'exécution de la décision jusqu'à ce que le fond soit examiné. Le référé-liberté, plus radical, peut être utilisé si la décision porte une atteinte grave et manifestement illégale à une liberté fondamentale — comme la liberté d'aller et venir ou le droit à la vie familiale normale. Ces procédures d'urgence sont des armes juridiques puissantes, mais elles sont soumises à des conditions strictes et requièrent impérativement l'assistance d'un avocat pour être valablement introduites.

## La réforme continue du droit des étrangers et la nécessité d'une veille juridique

Le droit des étrangers en France est l'une des matières juridiques les plus dynamiques et les plus fréquemment modifiées. Des lois importantes ont été adoptées ou modifiées régulièrement ces dernières années — réforme de 2016 créant le Passeport Talent, modifications successives des conditions de la naturalisation, réforme des procédures d'asile, introduction du compte personnel de formation pour les non-ressortissants. Cette évolution permanente signifie qu'une information valide il y a deux ou trois ans peut être périmée aujourd'hui.

Pour les personnes dont la situation administrative est complexe ou dont les projets s'inscrivent sur plusieurs années, une veille juridique personnelle sur l'évolution du droit des étrangers est un investissement utile. Les newsletters juridiques des associations spécialisées (GISTI, Cimade), les publications de la doctrine administrative accessibles sur le site Légifrance, et les informations actualisées des sites préfectoraux constituent les sources primaires d'une telle veille.
`;

const EXT3_L4 = `
## La gestion des documents originaux et leur sécurisation

La perte ou la destruction de documents originaux relatifs à sa situation de séjour en France peut avoir des conséquences administratives sérieuses. Un titre de séjour perdu doit être déclaré auprès des autorités policières et un duplicata doit être demandé à la préfecture — une procédure qui prend du temps et peut laisser une période sans document valide. Des documents d'état civil étrangers — acte de naissance, acte de mariage — difficiles à se procurer depuis le pays d'origine peuvent être impossibles à reconstituer rapidement.

La protection des documents originaux passe par plusieurs mesures préventives simples mais efficaces. La numérisation sécurisée des documents originaux a déjà été mentionnée. La conservation physique des originaux dans un endroit sûr, à l'abri des incendies et des inondations, est une précaution élémentaire. Pour les documents particulièrement précieux et difficiles à reconstituer — acte de naissance étranger, diplômes, documents d'état civil — le dépôt d'une certification auprès d'un notaire ou d'une ambassade peut offrir une sécurisation supplémentaire.

La communication de copies certifiées conformes plutôt que des originaux chaque fois que c'est possible dans les démarches administratives est une bonne pratique qui préserve les originaux. La plupart des administrations françaises acceptent les copies certifiées conformes en lieu et place des originaux — une exception notable est la délivrance du premier titre de séjour qui requiert souvent la présentation des originaux pour vérification avant de travailler sur copies.

## Les faux professionnels de l'immigration : protéger son dossier

Une industrie parallèle de « consultants en immigration » s'est développée, proposant des services d'assistance aux démarches de titre de séjour, parfois à des prix élevés et avec des promesses de résultats qui ne peuvent être garanties. Ces prestataires ne sont pas nécessairement tous frauduleux — certains offrent des services de secrétariat ou d'organisation des dossiers qui ont une valeur réelle. Mais le secteur n'est pas réglementé et les abus sont fréquents.

Les signaux d'alerte caractéristiques des prestataires problématiques incluent : la promesse de régulariser une situation irrégulière par des voies « accélérées » non officielles, la demande d'honoraires proportionnels au résultat (ce qui est interdit pour les avocats mais pas pour les non-avocats), l'absence de contrat écrit précisant les services rendus, la possession de « relations » à la préfecture qui permettraient de passer devant les autres demandeurs, et la sollicitation de documents originaux ou de procurations larges.

Les avocats inscrits au barreau sont les seuls professionnels dont la compétence et la déontologie sont encadrées par la loi dans l'exercice du conseil juridique en matière d'immigration. Le recours à un avocat du barreau, dont les honoraires sont transparents et dont la responsabilité professionnelle est engagée, est la garantie minimale d'un accompagnement juridique fiable.

## La formation linguistique et son impact sur les trajectoires administratives

La maîtrise du français est à la fois une condition pour certains titres de séjour (exigée pour la naturalisation, recommandée pour la carte de résident) et un facteur d'efficacité administrative déterminant. Les étrangers dont le niveau de français est élevé naviguent dans le système administratif avec une facilité beaucoup plus grande : ils comprennent les courriers reçus, posent les bonnes questions aux agents préfectoraux, lisent et vérifient les documents qu'on leur soumet, et constituent des dossiers plus solides et plus complets.

Investir dans la formation linguistique est donc non seulement utile pour l'intégration sociale et professionnelle — ce qui est évident — mais aussi directement utile pour la gestion administrative de son séjour. Les centres de formation linguistique agréés (OFII, associations d'alphabétisation, institutes de langue français, GRETA) offrent des cours adaptés à différents niveaux et différents objectifs, du français de base pour les débutants au français administratif pour les personnes qui ont besoin de maîtriser spécifiquement le vocabulaire et les usages des échanges avec les administrations.

## La question spécifique des travailleurs saisonniers et de leur titre de séjour

Les travailleurs saisonniers étrangers, qui viennent en France chaque année pour des emplois à caractère saisonnier (agriculture, tourisme, hôtellerie-restauration), ont un régime de titre de séjour spécifique. Le titre de séjour « travailleur saisonnier » leur permet de venir travailler en France pour une durée maximale de six mois par année civile, sans nécessairement y établir leur résidence principale.

Ce titre suit une logique différente des autres titres de séjour : son titulaire peut entrer et sortir du territoire français dans le cadre de sa durée de validité, exercer l'activité saisonnière pour laquelle il a été autorisé, et repartir à la fin de la saison sans que la durée totale de présence en France soit intégrée dans le calcul des cinq ans de résidence requis pour la carte de résident ou la naturalisation. Ce régime est adapté aux personnes dont le projet de vie est dans leur pays d'origine avec des séjours saisonniers réguliers en France — il n'est pas un marchepied vers une installation permanente.
`;

const EXT3_L5 = `
## L'adaptation aux études supérieures françaises : les clés de la réussite académique

Les études supérieures françaises présentent des spécificités pédagogiques qui peuvent surprendre les étudiants étrangers habitués à d'autres systèmes. La pédagogie française valorise le raisonnement critique, la capacité à problématiser une question, la synthèse d'informations complexes et l'expression argumentée — des compétences qui sont généralement davantage évaluées que la mémorisation de connaissances factuelles.

Dans ce système, la participation active aux travaux dirigés (TD) est souvent aussi importante que la présence aux cours magistraux (CM). Les TD sont des petits groupes de travail où les étudiants sont censés avoir préparé le cours au préalable et où la participation à la discussion est valorisée. Un étudiant étranger qui maîtrise le contenu mais hésite à s'exprimer oralement en raison de sa maîtrise imparfaite du français peut se pénaliser dans ces contextes. Prendre des risques dans les TD, accepter de faire des erreurs de français devant ses camarades, est une démarche courageuse mais payante à long terme.

Les méthodes d'évaluation françaises — la dissertation, le commentaire de texte, le compte rendu, la note de synthèse — ont des formats précis avec des codes rhétoriques spécifiques que les étudiants étrangers n'ont pas appris dans leur pays d'origine. Des cours d'initiation à ces méthodes, proposés dans certaines universités en début d'année, ou des ouvrages spécialisés sur la méthodologie des écrits académiques français, sont des investissements utiles pour les étudiants qui souhaitent se conformer rapidement aux attentes de leurs évaluateurs.

## Le réseau de mentorat académique et son utilisation stratégique

Les étudiants qui réussissent le mieux dans les systèmes universitaires étrangers sont souvent ceux qui ont su construire un réseau de soutien académique solide dès leurs premières semaines. Ce réseau inclut des camarades de promotion (pour le partage de notes, la préparation des examens, le soutien moral), des tuteurs offerts par l'université (pour les questions pédagogiques et administratives), et des enseignants accessibles (pour les questions spécifiques aux cours et aux projets de recherche ou professionnels).

Construire une relation avec ses enseignants — en posant des questions en cours, en les consultant lors de leurs heures de bureau, en participant activement à leurs cours — est une pratique moins développée dans certaines cultures universitaires que dans la culture académique française, où les enseignants-chercheurs valorisent généralement l'initiative intellectuelle de leurs étudiants. Cette relation peut déboucher sur des opportunités de stage, des recommandations pour des bourses ou des programmes de recherche, et ultimement des débouchés professionnels — les personnalités de Paris, Lyon ou Toulouse ayant étudié dans les mêmes institutions ou travaillé dans les mêmes domaines que vos enseignants.

## Les organismes de financement spécifiques aux étudiants de certaines régions du monde

Au-delà des aides générales mentionnées précédemment, des organismes de financement spécifiques ciblent les étudiants issus de certaines régions du monde ou de certains pays. L'Agence Française de Développement (AFD) soutient des programmes de formation d'étudiants africains dans des domaines liés au développement économique. L'Institut Français gère des programmes de bourses dans de nombreux pays pour des projets culturels ou éducatifs. L'Association de Solidarité France-Afrique (ASFA) et de nombreuses fondations diasporiques soutiennent des étudiants d'Afrique subsaharienne dans leurs études en France.

Ces financements sectoriels ou géographiques sont souvent moins compétitifs que les grandes bourses nationales car ils ciblent un pool de candidats plus étroit. Un étudiant originaire d'un pays éligible qui fait l'effort de rechercher et de candidater à ces aides ciblées peut multiplier ses chances d'obtenir un soutien financier complémentaire. La consultation du bureau des Relations Internationales de l'établissement d'accueil ou de l'ambassade de France dans le pays d'origine peut aider à identifier ces sources de financement spécifiques.

## La préparation à l'après-études : la transition vers le marché du travail

La période de fin d'études est une transition cruciale qui détermine en grande partie la suite du séjour en France pour les étudiants étrangers. Les étudiants qui ont préparé cette transition — en ayant fait des stages relevants, en ayant construit un réseau professionnel, en ayant identifié des entreprises qui recrutent des profils internationaux — vivent cette transition beaucoup plus sereinement que ceux qui n'y ont pas pensé avant leur dernière année.

L'autorisation provisoire de séjour (APS) d'un an accordée après le diplôme offre une fenêtre de recherche d'emploi qui peut paraître longue mais qui, dans les secteurs où les processus de recrutement sont longs, peut se révéler insuffisante. Une stratégie de recherche d'emploi mise en place dès la dernière année d'études permet d'avoir des pistes concrètes au moment où l'APS est délivrée, plutôt que de partir de zéro avec une urgence administrative. Les Career Centers des universités et grandes écoles, les job fairs dédiées aux étudiants internationaux, et les plateformes spécialisées dans le recrutement de profils bilingues sont des ressources à mobiliser avec anticipation.
`;

const EXT3_L6 = `
## Le Passeport Talent et l'entrepreneuriat : l'écosystème de la French Tech

La France a fait de l'attractivité des entrepreneurs et des startups internationaux l'une de ses priorités économiques. La catégorie « créateur d'entreprise » du Passeport Talent s'inscrit dans cette politique et vise à attirer des entrepreneurs étrangers à fort potentiel qui choisiraient Paris, Lyon ou d'autres écosystèmes français pour développer leurs projets innovants, plutôt que Berlin, Londres ou Amsterdam.

Les conditions de cette catégorie incluent un projet de création ou de reprise d'entreprise innovante, avec un plan d'affaires documenté, des ressources financières suffisantes pour démarrer le projet, et généralement une lettre de soutien ou un document de référencement d'un incubateur reconnu, d'un fonds d'investissement, ou d'un organisme public de soutien à l'innovation (BpiFrance, un pôle de compétitivité, un programme d'accélération public). Ce dernier critère, qui nécessite d'avoir au préalable convaincu un acteur du financement ou de l'accélération des startups, est généralement le plus difficile à remplir pour les entrepreneurs étrangers qui découvrent l'écosystème français.

Les programmes d'accueil d'entrepreneurs étrangers, comme French Tech Visa, ont été conçus pour faciliter spécifiquement l'obtention du Passeport Talent pour les entrepreneurs, les salariés qualifiés recrutés par des startups, et les investisseurs. French Tech Visa est un programme qui permet à des startups labellisées French Tech de faire bénéficier leurs recrutements étrangers d'un accès facilité au Passeport Talent — sans avoir à attendre une décision préfectorale locale, thanks à une instruction centralisée.

## La portabilité de la carrière entre France et pays d'origine

Un aspect souvent sous-estimé du Passeport Talent est sa valeur pour construire une carrière internationale à long terme, avec la France comme base de développement. Les professionnels qui ont une expérience confirmée en France — qu'ils soient dans la recherche, la finance, l'ingénierie ou les arts — bénéficient d'une valorisation spécifique de cette expérience française dans de nombreux pays du monde, notamment dans les pays francophones et dans les pays qui entretiennent des liens économiques étroits avec la France.

Pour un chercheur africain titulaire d'un Passeport Talent Chercheur qui a travaillé dans un laboratoire du CNRS, les compétences et le réseau acquis en France ont une valeur directe s'il retourne dans son pays — les institutions académiques et les entreprises valorisent les profils formés dans l'une des premières puissances scientifiques mondiales. Pour un entrepreneur subsaharien qui a lancé et développé une startup en France avec succès, l'expérience de l'écosystème French Tech et le réseau d'investisseurs et de partenaires constitués sont des actifs transférables dans n'importe quel écosystème entrepreneurial du monde.

Cette dimension de portabilité internationale de la carrière construite durant le Passeport Talent est un argument que les candidats hésitants, qui s'interrogent sur le coût d'opportunité de passer plusieurs années en France plutôt que dans leur pays d'origine, peuvent faire valoir dans leur réflexion.

## Les questions fréquentes sur le Passeport Talent

Plusieurs points suscitent régulièrement des questions de la part des candidats au Passeport Talent. La première question porte sur la possibilité de changer de catégorie de Passeport Talent en cours de validité du titre : un salarié qualifié dont l'entreprise est en faillite peut-il passer en catégorie créateur d'entreprise ? La réponse est oui, en principe, mais ce changement nécessite une nouvelle demande à la préfecture avec les nouvelles pièces justificatives de la nouvelle catégorie.

La deuxième question porte sur le comptage du Passeport Talent dans les cinq ans de résidence requis pour la carte de résident. La réponse est affirmative — les années passées sous Passeport Talent comptent intégralement dans le calcul des cinq ans de résidence régulière. Un titulaire de Passeport Talent depuis quatre ans n'a plus qu'un an supplémentaire à attendre avant d'être éligible à la carte de résident.

La troisième question porte sur les conditions de maintien du Passeport Talent après un licenciement ou une rupture de contrat. En cas de perte involontaire d'emploi, le titulaire d'un Passeport Talent catégorie « salarié qualifié » n'est pas immédiatement en situation irrégulière — il dispose d'un délai pour retrouver un emploi ou pour se reconvertir vers une autre activité. Ce délai n'est pas fixé par la loi de façon explicite pour les Passeports Talent mais la tolérance administrative est généralement de quelques mois, à condition de pouvoir démontrer une recherche active d'emploi ou un projet professionnel alternatif.
`;

await appendAndPatch('a7731dff-3fba-4ef7-84d2-5febfe107c07', EXT3_L1);
await appendAndPatch('35a1efd2-6d33-42b9-b253-749418a6ae2b', EXT3_L2);
await appendAndPatch('245f4bd4-cc40-42db-8775-6e525fbebc14', EXT3_L3);
await appendAndPatch('cca2d227-e2f1-4c0b-afef-60b9c0359424', EXT3_L4);
await appendAndPatch('16d9efa8-d878-47a0-82cf-89173163dbcb', EXT3_L5);
await appendAndPatch('92fee6cd-d266-4081-b459-535cf1f26e9a', EXT3_L6);
