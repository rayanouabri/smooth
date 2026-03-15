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

const EXT_L1 = `
## Les conditions de résidence et leur appréciation concrète

La résidence régulière et continue de cinq ans constitue le pilier central de la demande de naturalisation par décret. Cette exigence, qui semble simple en apparence, recouvre en réalité une conception précise que l'administration évalue avec attention. La régularité signifie que le demandeur a été en possession d'un titre de séjour valide — ou d'un statut l'exemptant de ce titre — pendant toute la période de cinq ans. Chaque interruption dans la détention d'un titre valide, même brève, peut être soulevée par le service instructeur pour contester la continuité de la résidence régulière.

La continuité, quant à elle, ne signifie pas que le demandeur n'a jamais quitté le territoire français pendant cinq ans. Des absences temporaires à l'étranger — pour des voyages, des vacances, des missions professionnelles ou des visites familiales — sont tout à fait compatibles avec la condition de résidence continue, à condition qu'elles ne soient pas trop fréquentes, trop longues, ou qu'elles ne révèlent pas un centre d'intérêt principal situé hors de France. La jurisprudence administrative a progressivement précisé ce que signifie une absence « compatible » avec la résidence continue : des absences représentant plus de six mois cumulés par an commencent à fragiliser la condition de continuité.

La preuve de cette résidence s'apporte notamment par les titres de séjour successifs, les avis d'imposition émis par l'administration fiscale française, les baux de logement, les relevés bancaires, les justificatifs d'emploi, et tout document officiel daté attestant de la présence physique en France sur la période concernée. Plus les preuves sont cohérentes, abondantes et couvrant l'intégralité de la période de cinq ans, plus le dossier est solide.

## Les dérogations à la condition de cinq ans

Le délai de cinq ans de résidence souffre de nombreuses exceptions qui permettent à certaines catégories de personnes d'accéder à la naturalisation plus rapidement. Ces dérogations reflètent des choix politiques qui valorisent soit des liens particuliers avec la France, soit des contributions exceptionnelles à la société française.

Le délai réduit à deux ans s'applique aux personnes ayant accompli avec succès des études supérieures d'au moins deux ans en France dans un établissement d'enseignement supérieur habilité. Cette dérogation reconnaît que les étudiants étrangers formés dans le système supérieur français ont acquis une connaissance approfondie de la société et de la culture françaises. Elle est particulièrement pertinente pour les étudiants extra-européens qui, après un master ou une école d'ingénieurs en France, souhaitent s'y installer définitivement.

Le délai réduit à deux ans s'applique également aux personnes qui ont rendu des services importants à la France dans des domaines particuliers — la recherche scientifique, la création artistique, l'innovation technologique, ou la défense des intérêts économiques ou culturels français. Cette dérogation à caractère discrétionnaire est rarement invoquée mais ouvre des voies pour des profils exceptionnels.

La dispense totale du délai de résidence est prévue pour les personnes qui ont accompli des actes exceptionnels au service de la France — pour les résistants et Compagnons de la Libération, pour les personnes ayant servi dans une unité combattante de l'armée française, ou pour les personnes dont la naturalisation présente pour la France un intérêt exceptionnel. Ces cas restent rares mais illustrent la flexibilité du système lorsque les enjeux le justifient.

## L'intégration républicaine : un concept multidimensionnel

La condition d'intégration républicaine est la plus subjective et la plus difficile à prouver formellement dans un dossier de naturalisation. Elle dépasse la simple maîtrise du français — même si cette composante linguistique est évaluée dès l'entretien — pour englober une adhésion aux valeurs et aux modes de vie de la société française contemporaine.

L'administration évalue cette intégration à travers plusieurs prismes. Le premier est la stabilité professionnelle et économique : une personne qui a exercé une activité professionnelle stable en France, qui a payé ses impôts régulièrement et qui est autonome financièrement présente un profil d'intégration économique solide. Le second prisme est l'intégration sociale et civique : la participation à des associations, l'engagement bénévole, la fréquentation de cercles amicaux mixtes franco-étrangers, les liens de voisinage tissés sur la durée — autant d'éléments qui peuvent être mentionnés dans les entretiens de naturalisation.

Le troisième prisme, et le plus délicat, est l'adhésion aux valeurs fondamentales de la République française. La laïcité, l'égalité entre les femmes et les hommes, le respect des droits fondamentaux, le rejet de la discrimination : ces valeurs ne sont pas vérifiées par un test formel mais elles sont discutées lors de l'entretien d'assimilation. Une personne dont les déclarations ou les comportements publics contrediront ces valeurs verra sa demande fragilisée, indépendamment de la qualité des autres aspects de son dossier.
`;

const EXT_L2 = `
## Les conséquences juridiques de l'irrégularité de séjour

La situation irrégulière de séjour ne signifie pas simplement « absence de papiers en règle » — elle entraîne un ensemble de conséquences juridiques sérieuses qui peuvent compromettre non seulement le séjour en cours mais aussi les demandes futures de régularisation. Comprendre ces conséquences permet de mesurer l'enjeu réel que représente la vigilance administrative dans la gestion de son titre de séjour.

La première conséquence est l'impossibilité de renouveler légalement son titre de séjour si l'on se retrouve en situation irrégulière. Les préfectures refusent en principe d'instruire les demandes de renouvellement lorsque le demandeur est en situation irrégulière depuis plus de quelques semaines — sauf dans certains cas particuliers où la régularisation peut être demandée simultanément. Cette règle crée un cercle vicieux : l'irrégularité non traitée rapidement se consolide et rend la sortie de l'irrégularité de plus en plus difficile.

La deuxième conséquence est la vulnérabilité administrative accrue : une personne en situation irrégulière peut à tout moment faire l'objet d'une mesure d'éloignement du territoire français — obligation de quitter le territoire (OQTF) ou arrêté d'expulsion. Si une OQTF est notifiée, elle crée en outre une interdiction de retour sur le territoire français pour une durée qui varie selon les circonstances (généralement un à trois ans, mais pouvant aller jusqu'à dix ans dans les cas graves). Cette interdiction de retour, inscrite dans le système informatique partagé entre les États Schengen, s'applique à l'ensemble de l'espace Schengen et pas seulement au territoire français.

La troisième conséquence, souvent méconnue, est l'impact sur les droits sociaux. En situation irrégulière, l'accès aux droits sociaux est considérablement réduit : impossibilité de s'inscrire à Pôle Emploi, impossibilité d'accéder aux allocations soumises à condition de régularité du séjour. Seul l'Aide Médicale d'État (AME) reste accessible, sous conditions, pour les soins médicaux urgents.

## Le dépassement du délai de renouvellement : comment réagir

Le dépassement du délai de renouvellement est l'un des pièges les plus fréquents et les plus évitables. La grande majorité des préfectures exigent que la demande de renouvellement soit déposée au moins deux mois avant l'expiration du titre de séjour — certaines recommandent même trois à quatre mois d'anticipation compte tenu des délais de traitement actuels. Un dépôt tardif ne rend pas automatiquement la demande irrecevable, mais il expose à une période sans titre de séjour valide entre l'expiration du titre et la délivrance du récépissé.

Lorsque la demande est déposée à temps — avant l'expiration du titre — le récépissé de demande de renouvellement délivré par la préfecture permet de demeurer régulièrement sur le territoire pendant l'instruction du dossier. Ce récépissé a une valeur juridique de titre provisoire de séjour, même si ce n'est pas un titre de séjour au sens plein du terme. Il permet de travailler, de se déplacer sur le territoire national et de justifier de sa situation régulière vis-à-vis des administrations.

Si le délai est dépassé et que le titre de séjour est expiré sans qu'une demande ait été déposée, il est impératif d'agir sans délai supplémentaire. Se présenter à la préfecture avec tous les documents habituels de renouvellement et expliquer les circonstances du retard est la première étape. La préfecture dispose d'un pouvoir d'appréciation pour accepter la demande malgré le retard — et ce pouvoir d'appréciation s'exerce plus favorablement si le retard est limité (quelques jours à quelques semaines), si le demandeur peut justifier d'une raison valable, et si son dossier de fond est solide.

## L'erreur sur la mention du titre de séjour et ses conséquences

Chaque titre de séjour porte une mention qui précise le type de séjour autorisé et conditionne les droits qui y sont attachés — notamment les droits au travail. L'exercice d'une activité non couverte par la mention du titre constitue une irrégularité de travail, même si le séjour lui-même est régulier. C'est un piège fréquent que de confondre régularité du séjour et régularité du travail : les deux ne sont pas automatiquement synonymes.

La mention « salarié » autorise l'exercice d'un emploi salarié chez un employeur précis, sous une qualification précise, pour un volume horaire précis — tout changement d'employeur, de poste ou d'horaire doit être signalé et peut nécessiter une modification du titre. La mention « étudiant » autorise un travail salarié dans la limite des 964 heures annuelles — au-delà, c'est une irrégularité de travail. La mention « visiteur » n'autorise aucun travail rémunéré — même un travail intellectuel rémunéré de façon indirecte peut poser problème.
`;

const EXT_L3 = `
## L'analyse concrète des cinq ans de résidence dans les dossiers préfectoraux

La présentation d'un dossier de demande de carte de résident exige une rigueur documentaire que peu de demandeurs anticipent correctement. La reconstitution chronologique des cinq ans de séjour régulier — du premier titre de séjour jusqu'à la demande en cours — doit être présentée de façon continue et cohérente, sans lacune temporelle non justifiée.

Dans la pratique, les services préfectoraux scrutent particulièrement les périodes de transition entre deux titres de séjour successifs. Entre l'expiration d'un titre et la délivrance du suivant, seul le récépissé de demande de renouvellement peut justifier de la régularité du séjour. Si ce récépissé n'a pas été conservé — ce qui arrive fréquemment car les demandeurs ne réalisent pas toujours son importance comme preuve documentaire — la continuité du séjour peut être remise en question pour cette période. La solution préventive est de conserver soigneusement tous les récépissés reçus lors de chaque demande de renouvellement, ainsi que les convocations et les attestations de dépôt.

Les absences prolongées du territoire français au cours des cinq ans peuvent également fragiliser la demande de carte de résident. Si des absences représentant plusieurs mois par an sont documentées dans le passeport, le service instructeur peut considérer que le demandeur n'a pas sa résidence principale en France, même s'il y revient régulièrement. La jurisprudence administrative a précisé que le « centre des intérêts principaux » doit être en France — ce qui signifie que l'emploi, le logement, la famille proche, et les attaches sociales doivent témoigner d'un ancrage français prépondérant.

## Les avantages concrets de la carte de résident dans la vie quotidienne

Au-delà du sentiment de sécurité qu'elle procure, la carte de résident apporte des avantages concrets dans de nombreuses situations de la vie quotidienne. Pour l'accès au logement, la carte de résident est souvent perçue positivement par les propriétaires et les agences immobilières : sa durée de validité de dix ans réduit les craintes liées à la résidence précaire d'un locataire dont le titre de séjour arrive à expiration fréquemment. Certaines grandes surfaces de location exigent implicitement une stabilité administrative que seule une carte de résident peut offrir pleinement.

Pour l'accès au crédit bancaire et aux prêts immobiliers, la carte de résident est également un atout majeur. Les établissements bancaires évaluent le risque d'un emprunteur en partie sur la base de sa situation administrative — un titre de séjour de dix ans donne une visibilité suffisante pour envisager des remboursements sur quinze à vingt-cinq ans, là où un titre annuel ou biannuel soulève des questions sur la capacité à honorer les engagements sur la durée.

Pour les déplacements à l'international, enfin, la carte de résident offre une liberté de mouvement accrue. Son titulaire peut s'absenter du territoire français pour des périodes allant jusqu'à trois ans consécutifs sans que sa carte ne soit remise en cause — contre quelques mois seulement pour les titres temporaires. Cette flexibilité est précieuse pour les personnes dont l'activité professionnelle ou les liens familiaux impliquent des mobilités internationales fréquentes.

## Le renouvellement de la carte de résident : une formalité en principe

À l'approche de l'expiration des dix ans, le titulaire d'une carte de résident doit déposer une demande de renouvellement. Ce renouvellement est en principe accordé de droit — la loi prévoit que la carte de résident est renouvelée sauf si le titulaire représente une menace pour l'ordre public ou a perdu les conditions qui justifiaient sa délivrance initiale. Cette quasi-automaticité distingue le renouvellement de la carte de résident du renouvellement des titres temporaires, qui implique une réévaluation substantielle des conditions à chaque fois.

Les conditions qui peuvent justifier un refus de renouvellement de la carte de résident sont limites : condamnation pénale grave remettant en cause l'honorabilité, absence prolongée du territoire (plus de trois ans consécutifs), ou perte manifeste des liens avec la France (installation définitive à l'étranger avec cession du logement, abandon de l'emploi et de toute attache française). Ces cas extrêmes sont relativement rares chez les titulaires qui ont réellement maintenu leur centre de vie en France.
`;

const EXT_L4 = `
## La fraude documentaire : risques réels et conséquences durables

La fraude documentaire dans les dossiers de titre de séjour est l'une des erreurs les plus graves que puisse commettre un étranger dans ses relations avec l'administration. Elle englobe toute falsification ou présentation de documents non authentiques — faux contrats de travail, faux relevés bancaires, faux justificatifs de domicile, attestations mensongères — mais aussi toute omission volontaire d'informations qui auraient dû être communiquées.

Les conséquences de la fraude documentaire sont disproportionnées par rapport aux avantages escomptés. Sur le plan administratif, elle entraîne le refus immédiat ou le retrait du titre de séjour concerné, mais aussi une mention dans les fichiers administratifs qui fragilisera toutes les demandes futures — un étranger ayant fait l'objet d'une décision de refus ou de retrait pour fraude verra systématiquement ses dossiers ultérieurs soumis à un examen renforcé. Sur le plan pénal, la fraude documentaire est un délit susceptible d'emprisonnement et d'une amende conséquente au titre de l'article L. 823-1 du CESEDA.

Sur le plan des conséquences à long terme, une condamnation pénale pour fraude documentaire constitue un obstacle quasi-insurmontable à la naturalisation — l'honorabilité est une condition de fond de la naturalisation, et une condamnation pénale, même pour un fait jugé mineur, pèse très lourd dans l'appréciation de cette condition. La fraude documentaire est donc une erreur dont les effets peuvent s'étaler sur quinze à vingt ans, détruisant des perspectives de stabilité administrative qu'une démarche honnête aurait pu construire progressivement.

## Le changement de situation non signalé : obligation de notification

Les titulaires de titre de séjour ont une obligation légale de signaler à la préfecture tout changement substantiel de leur situation : changement d'adresse, changement d'employeur ou de situation professionnelle pour les titres liés à une activité, changement de situation familiale (mariage, divorce, naissance d'enfant). Cette obligation, qui découle directement de la logique conditionnelle des titres de séjour — accordés pour une situation précise —, est souvent méconnue ou négligée dans la pratique.

Le non-signalement d'un changement de situation peut conduire, lors du renouvellement, à la découverte par la préfecture d'un écart entre la situation déclarée lors de la précédente demande et la situation réelle au moment du renouvellement. Cet écart peut être interprété comme une dissimulation volontaire et conduire à un refus de renouvellement, voire à une procédure de retrait du titre pour fraude si les circonstances le justifient.

La bonne pratique est de notifier à la préfecture tout changement substantiel dans un délai raisonnable après qu'il soit intervenu — généralement un mois est considéré comme un délai acceptable. La notification se fait par courrier recommandé avec accusé de réception ou, dans les préfectures qui le proposent, par voie dématérialisée. Conserver une copie de chaque notification est indispensable pour pouvoir démontrer sa bonne foi en cas de questionnement ultérieur.

## L'erreur de catégorie de titre : demander le mauvais titre

Un piège particulier guette les personnes dont la situation évolue entre deux catégories de titres de séjour. Pour un étranger qui commence sa vie en France comme étudiant et souhaite ensuite se lancer dans la création d'entreprise, la transition vers un titre « entrepreneur / profession libérale » doit être préparée dès avant la fin des études — et non pas attendue jusqu'à l'expiration du titre étudiant. Une demande de changement de statut déposée après l'expiration du titre étudiant sera traitée en situation irrégulière, avec les difficultés que cela implique.

De même, un salarié dont l'employeur est en cours de licenciement ne peut pas attendre le licenciement effectif pour commencer à réfléchir à son titre de séjour. Il doit anticiper, soit en cherchant un nouvel emploi avant la fin de son contrat, soit en explorant d'autres catégories de titre compatibles avec sa situation future — titre « visiteur » si ses ressources le permettent, titre « vie privée et familiale » si sa situation familiale l'y autorise. L'inertie administrative est souvent le premier ennemi de la régularité du séjour.
`;

const EXT_L5 = `
## La procédure Campus France : pour qui et comment

Campus France est l'agence française qui gère, dans les pays concernés, la procédure de candidature pour les étudiants souhaitant venir étudier en France pour la première fois. Cette procédure, appelée procédure CEF (Centre pour les Études en France), est obligatoire pour les ressortissants de plusieurs dizaines de pays — la liste est actualisée chaque année. Elle constitue l'interface entre le candidat étranger et le système d'enseignement supérieur français, permettant de candidater à plusieurs formations et d'obtenir une entrevue dans le cadre de laquelle la motivation pour étudier en France est évaluée.

La procédure CEF se déroule en plusieurs phases chronologiques strictes. L'étudiant doit d'abord créer un dossier en ligne sur la plateforme Campus France de son pays, y renseigner ses informations académiques, y déposer ses documents (relevés de notes, diplômes, lettre de motivation, CV), et y indiquer les formations françaises auxquelles il souhaite candidater. Il passe ensuite un entretien — soit physique dans les locaux du Campus France local, soit en visioconférence quand le réseau ne le permet pas autrement — au cours duquel sa maîtrise du français, la clarté de son projet et la cohérence de ses motivations sont évaluées. Enfin, si l'entretien est positif et si au moins une des formations souhaitées l'accepte, il peut demander son visa étudiant au consulat français.

Pour les pays non soumis à la procédure CEF — principalement les pays de l'Union européenne et certains pays avec lesquels des accords spéciaux ont été conclus — les étudiants candidatent directement auprès des établissements d'enseignement supérieur français sans passer par Campus France. Cette candidature directe se fait via les plateformes Parcoursup (pour les formations post-bac) ou Mon Master (pour les masters) ou directement auprès des établissements.

## L'autorisation de travail des étudiants étrangers : les 964 heures

L'autorisation de travailler accordée aux étudiants étrangers en France est une composante importante de leur titre de séjour qui mérite une attention particulière. Cette autorisation est limitée à 964 heures par an — ce qui représente approximativement 60% d'un temps plein annuel (basé sur 35 heures hebdomadaires sur 46 semaines de travail). Ce plafond horaire a été conçu pour permettre aux étudiants de financer une partie de leurs études et de leur vie quotidienne sans que l'activité professionnelle ne prenne le dessus sur la formation académique.

Dans la pratique, le calcul des 964 heures peut surprendre les étudiants qui travaillent de façon variable au fil de l'année — intensément pendant les vacances universitaires et peu pendant les périodes de cours et d'examens. Il est important de comprendre que le plafond s'applique sur l'année civile, et non sur l'année universitaire. Un étudiant qui travaille beaucoup en janvier-mars pour financer un voyage et énormément en juillet-août doit surveiller ses cumuls horaires pour ne pas franchir le seuil annuel.

La violation de cette limite de 964 heures constitue une irrégularité de travail qui peut être constatée lors du renouvellement du titre de séjour — les caisses de retraite et les organismes de sécurité sociale tiennent des registres des heures cotisées. Un étudiant qui dépasserait régulièrement ce plafond risque non seulement un refus de renouvellement de son titre étudiant mais aussi une requalification de sa situation par la préfecture, qui pourrait considérer que son activité principale n'est plus les études mais bien le travail.

## Le visa de retour pour les voyages dans l'espace Schengen et au-delà

Les titulaires d'un titre de séjour étudiant français peuvent circuler librement dans les autres pays de l'espace Schengen pour des séjours de courte durée (jusqu'à 90 jours sur 180), sans avoir besoin d'un visa de retour spécifique pour réintégrer le territoire français. Cette liberté de circulation est l'un des avantages pratiques de la résidence légale dans l'espace Schengen.

En revanche, pour les voyages hors Schengen — retour dans le pays d'origine, voyage dans des pays qui ne font pas partie de l'espace Schengen — les étudiants doivent s'assurer que leur titre de séjour est valide pour le retour sur le territoire français. Un titre de séjour expiré pendant un voyage à l'étranger ne permet pas de réintégrer le territoire — et aucun consulat français ne peut délivrer un visa de retour en urgence simplement parce que le titre a expiré. Il est donc impératif de vérifier la date d'expiration du titre de séjour avant tout voyage et de ne pas partir si le titre expire avant la date de retour prévue.

Pour les détenteurs d'un visa long séjour valant titre de séjour (VLS-TS) qui n'a pas encore été renouvelé en carte de séjour papier, des règles spécifiques s'appliquent pour les sorties et rentrées sur le territoire — il est recommandé de vérifier auprès de la préfecture les conditions de validité du VLS-TS pour les voyages internationaux.
`;

const EXT_L6 = `
## Les dix catégories du Passeport Talent en détail

Le Passeport Talent regroupe dix sous-catégories distinctes qui correspondent à des profils très différents. La catégorie « salarié qualifié » concerne les travailleurs salariés dont la rémunération est égale ou supérieure à 1,5 fois la valeur du SMIC annuel brut — un seuil qui cible les emplois à haute valeur ajoutée dans des secteurs d'activité variés. La catégorie « chercheur » s'adresse aux chercheurs et enseignants-chercheurs en mission dans un établissement public de recherche ou d'enseignement supérieur, dans le cadre d'une convention d'accueil.

La catégorie « investisseur » cible les personnes qui réalisent un investissement économique en France d'au moins 300 000 euros dans un projet de création ou de développement d'entreprise. La catégorie « créateur d'entreprise » concerne les porteurs de projet de création ou de reprise d'une entreprise innovante, sous réserve d'une évaluation du potentiel du projet par les services compétents. La catégorie « mandataire social » couvre les dirigeants mandataires sociaux de sociétés françaises qui exercent leurs fonctions à titre onéreux, sous conditions de rémunération.

La catégorie « artiste interprète ou auteur » est l'une des plus utilisées par les professionnels du spectacle et des arts. Elle couvre les artistes qui exercent en France sur la base d'un contrat avec une structure de production française ou qui ont signé un contrat d'édition, de représentation ou de production avec un éditeur ou producteur français. La catégorie « sportif de haut niveau » s'adresse aux sportifs professionnels recrutés par des clubs professionnels français ainsi qu'aux entraîneurs d'équipes professionnelles.

La catégorie « étranger ayant la qualité de réfugié » permet aux personnes reconnues réfugiées ou bénéficiaires de la protection subsidiaire qui relèvent par ailleurs d'une autre catégorie de Passeport Talent de bénéficier de ce titre avec ses avantages. Les catégories « salarié en mission » et « jeune entreprise innovante » complètent le panorama : la première couvre les salariés détachés temporairement en France dans le cadre d'une mission internationale, la seconde cible les profils innovants rejoignant une entreprise labellisée Jeune Entreprise Innovante (JEI) ou Jeune Entreprise Universitaire (JEU).

## La carte « famille accompagnante » du Passeport Talent

L'un des avantages distinctifs du Passeport Talent par rapport aux titres ordinaires est le régime de la famille accompagnante. Le conjoint et les enfants mineurs du titulaire d'un Passeport Talent peuvent obtenir une carte de séjour « vie privée et familiale » d'une durée identique à celle du Passeport Talent du titulaire principal, sans avoir à justifier de conditions spécifiques autres que le lien familial et la situation régulière du titulaire principal.

Cette carte de séjour du conjoint autorise l'exercice de toute activité professionnelle — salariée ou indépendante — sans restriction de secteur ni limite horaire. En pratique, cela signifie que le conjoint d'un titulaire de Passeport Talent peut travailler librement en France dès son arrivée, sans avoir à solliciter une autorisation de travail distincte ni à justifier de conditions de ressources ou de qualification. Cet avantage est particulièrement précieux pour les familles où les deux conjoints ont des carrières et des ambitions professionnelles — il évite la subordination d'une carrière à l'autre.

## Les conditions de ressources et leur vérification

Les conditions de ressources varient selon les catégories de Passeport Talent, mais elles sont globalement plus élevées que pour les titres ordinaires, ce qui reflète l'orientation de ce titre vers des profils économiquement actifs et autonomes. Pour les salariés qualifiés, le seuil de 1,5 SMIC est vérifié sur la base du contrat de travail et, lors du renouvellement, sur la base des bulletins de paye effectifs. Pour les créateurs d'entreprise, les ressources sont évaluées différemment : c'est la viabilité du projet et la possession de fonds propres suffisants pour le démarrer qui sont évaluées.

Le non-respect des conditions de ressources lors du renouvellement est l'un des motifs de refus le plus fréquent pour les détenteurs de Passeport Talent catégorie « salarié qualifié ». Un promoteur ayant bénéficié d'une rémunération élevée à son arrivée mais dont le salaire a baissé en dessous du seuil de 1,5 SMIC peut se voir refuser le renouvellement et se retrouver dans une situation délicate. La vigilance s'impose donc non seulement au moment de la demande initiale mais aussi tout au long de la durée du titre, pour s'assurer que les conditions contractuelles et les rémunérations effectives restent au-dessus des seuils requis.
`;

await appendAndPatch('a7731dff-3fba-4ef7-84d2-5febfe107c07', EXT_L1);
await appendAndPatch('35a1efd2-6d33-42b9-b253-749418a6ae2b', EXT_L2);
await appendAndPatch('245f4bd4-cc40-42db-8775-6e525fbebc14', EXT_L3);
await appendAndPatch('cca2d227-e2f1-4c0b-afef-60b9c0359424', EXT_L4);
await appendAndPatch('16d9efa8-d878-47a0-82cf-89173163dbcb', EXT_L5);
await appendAndPatch('92fee6cd-d266-4081-b459-535cf1f26e9a', EXT_L6);
