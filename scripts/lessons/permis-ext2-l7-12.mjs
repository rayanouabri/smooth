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

const EXT2_L7 = `
## Le renouvellement de la carte temporaire : pièges et bonnes pratiques

Le renouvellement annuel d'une carte de séjour temporaire est une démarche qui, si elle est bien maîtrisée, se déroule sans encombres. Mais plusieurs pièges récurrents attendent les titulaires peu préparés. Le premier piège est d'attendre la convocation de la préfecture plutôt que de prendre l'initiative de la démarche : les préfectures ne convoquent pas systématiquement les titulaires avant l'expiration de leur titre — c'est à la charge du titulaire d'anticiper et de soumettre sa demande.

Le second piège est de sous-estimer le temps nécessaire pour réunir toutes les pièces du dossier. Les justificatifs requis varient selon le type de titre et peuvent inclure des documents dont l'obtention prend du temps : relevés bancaires sur une longue période, bulletins de paye sur plusieurs mois, documents d'un employeur ou d'un établissement d'enseignement qui peut tarder à les délivrer. S'y prendre au moins deux mois à l'avance est le minimum, et quatre mois permettent d'absorber les imprévus.

Le troisième piège est de ne pas se renseigner sur les changements de procédure ou de liste de pièces dans la préfecture concernée. Les pièces requises et les modalités de dépôt (rendez-vous physique, dépôt dématérialisé, guichet unique) évoluent fréquemment. Le site internet de la préfecture de son département est la source officielle à consulter pour connaître les procédures actualisées — les informations données par des amis dont le renouvellement date de plus d'un an peuvent être périmées.

## Le titre de séjour « entrepreneur » : conditions et processus

Le titre de séjour mention « entrepreneur / profession libérale » s'adresse aux étrangers souhaitant créer, racheter ou diriger une entreprise en France ou exercer une profession libérale. Ce titre est distinct du Passeport Talent catégorie « créateur d'entreprise » — il ne requiert pas le même niveau d'exception ou d'innovation, mais il implique la démonstration d'une viabilité économique réelle.

Les conditions pour obtenir ce titre incluent la preuve que l'activité envisagée est viable économiquement — ce qui exige généralement un business plan documenté et des ressources initiales suffisantes pour lancer l'activité sans dépendre immédiatement du travail pour subsister. La préfecture demande généralement des justificatifs d'enregistrement ou d'immatriculation de l'entreprise (KBIS ou extrait d'immatriculation), ainsi que des éléments sur le financement de l'activité.

Pour les professions libérales réglementées — avocat, médecin, expert-comptable, architecte — l'accès à la profession est conditionné à une reconnaissance de la formation étrangère par l'ordre professionnel compétent. Cette reconnaissance professionnelle préalable est une condition sine qua non du titre de séjour mention profession libérale dans ces secteurs, et son obtention peut prendre des mois voire des années selon la profession et le pays d'origine des diplômes.

## Les délais de traitement dans les grandes préfectures urbaines et leur gestion

Le problème des délais de traitement dans les préfectures des grandes agglomérations françaises est une réalité que tout étranger résidant dans ces zones doit apprendre à gérer avec pragmatisme. Les préfectures de Paris, de la Seine-Saint-Denis, de Val-de-Marne, des Bouches-du-Rhône et du Rhône sont régulièrement citées pour des délais de traitement particulièrement longs — plusieurs mois pour obtenir un rendez-vous de dépôt de dossier, plusieurs mois supplémentaires pour le traitement et la délivrance du titre.

Ces délais ont des conséquences pratiques qui peuvent paraître kafkaïennes. Un étranger dont le titre expire en septembre dépose son dossier de renouvellement en juillet, reçoit un récépissé valable deux mois, obtient une prolongation du récépissé, et ne reçoit son nouveau titre qu'en février — soit cinq mois de navigation administrative pendant lesquels il est en transit juridique, avec un récépissé comme seule preuve de régularité. Certains employeurs contestent la valeur du récépissé, certains bailleurs hésitent à renouveler un bail à un locataire qui n'a pas de titre de séjour plein.

La stratégie la plus efficace pour gérer ces délais est l'anticipation maximale : déposer le dossier de renouvellement au plus tôt possible avant l'expiration du titre — dès cinq mois avant dans les préfectures les plus engorgées. Cette anticipation ne hâte pas le traitement, mais elle assure que le titre expiré laissera place à un récépissé sans période de vide documentaire.
`;

const EXT2_L8 = `
## Les bourses sur critères universitaires disponibles pour les étudiants étrangers

En dehors des bourses du gouvernement français gérées par Campus France et des aides sociales conditionnées à la nationalité ou au statut de réfugié, un ensemble de bourses sur critères académiques est accessible aux étudiants étrangers régulièrement inscrits dans les établissements d'enseignement supérieur français. Ces bourses, finançées par les régions françaises, les collectivités locales, les grandes entreprises, les fondations privées et les établissements eux-mêmes, constituent un écosystème de financements complémentaires que les étudiants motivés peuvent mobiliser pour améliorer leurs conditions de vie et d'études.

Les régions françaises proposent souvent des programmes de bourses pour les étudiants en mobilité internationale sur leur territoire. Ces programmes, dont les conditions et les montants varient considérablement d'une région à l'autre, sont accessibles sans condition de nationalité pour les étudiants régulièrement inscrits dans un établissement de la région. Certaines régions ont mis en place des aides au logement étudiant, des aides à la mobilité internationale ou des bourse spécifiques pour les étudiants en alternance.

Les grandes écoles françaises ont généralement leurs propres programmes de bourses internes, parfois dotés de montants significatifs, accessibles via un processus de candidature distinct de l'admission académique. Ces bourses visent à assurer la diversité sociale et internationale dans des formations dont les droits d'inscription sont élevés. Pour un étudiant étranger inscrit dans une grande école, la recherche active de ces bourses internes peut réduire de façon substantielle le coût effectif de la formation.

## La gestion du titre de séjour étudiant lors d'un stage à l'étranger

Un aspect peu connu du titre de séjour étudiant est son rapport aux stages et aux mobilités académiques à l'étranger, notamment dans le cadre des programmes Erasmus+ ou des contrats de stage international. Quand un étudiant étranger inscrit en France part effectuer un stage ou une mobilité académique dans un autre pays pendant quelques mois, que devient son titre de séjour français ?

En principe, le titre de séjour étudiant reste valable pendant une absence temporaire à l'étranger, à condition que cette absence ne soit pas trop prolongée et que l'étudiant conserve son inscription dans l'établissement français. Un stage de trois à six mois à l'étranger est généralement compatible avec le titre de séjour étudiant français, mais il est recommandé de vérifier auprès de la préfecture les conditions spécifiques applicables, notamment si l'absence intervient pendant la période de validité maximale du titre ou s'il s'agit d'une absence vers le pays d'origine de l'étudiant.

Pour les stages en dehors de l'espace Schengen, l'étudiant devra veiller à avoir les autorisations de séjour nécessaires dans le pays de destination du stage — ce n'est pas le titre de séjour français qui autorise le travail dans un autre pays. La coordination entre les titres de séjour dans deux pays différents est une complexité administrative qui mérite d'être anticipée, notamment pour les stages en dehors de l'Union européenne.

## Le changement d'établissement en cours de visa

Un cas fréquent mais peu documenté est celui de l'étudiant qui change d'établissement en cours de visa étudiant — qui passe de l'université A à l'université B, ou d'une école privée à une université publique, sans que ce changement soit prévu au moment de la délivrance du titre de séjour.

En principe, le titre de séjour étudiant est accordé pour des études dans un établissement spécifique, et un changement d'établissement devrait être signalé à la préfecture. Dans la pratique, un changement au sein du même niveau d'études et compatible avec le projet académique annoncé est généralement accepté sans formalité particulière, à condition d'être préparé à l'expliquer lors du renouvellement. En revanche, un changement vers un établissement non reconnu ou un changement réduisant le niveau d'études (du master à la licence, par exemple) peut poser des questions que le service instructeur devra apprécier.

La règle d'or est de signaler tout changement significatif à la préfecture sans attendre le renouvellement, et de conserver les preuves de ses inscriptions successives pour pouvoir démontrer la continuité de son projet d'études en France au moment où cela sera demandé.
`;

const EXT2_L9 = `
## L'international academic staffing et ses spécificités françaises

La France accueille chaque année plusieurs milliers de chercheurs et enseignants-chercheurs étrangers dans ses universités et organismes de recherche. Cette mobilité internationale est encouragée non seulement par les procédures facilitées du Passeport Talent Chercheur mais aussi par une politique active d'attractivité scientifique, portée notamment par l'Agence Nationale de la Recherche (ANR), le programme d'attractivité des chaires et des projets collaboratifs internationaux.

Dans ce contexte, les établissements d'enseignement supérieur français font face à des enjeux de compétition internationale pour attirer les meilleurs chercheurs — et la qualité de l'accueil administratif fait partie des critères de décision des chercheurs qui comparent plusieurs offres de différents pays. Un chercheur de niveau international qui hésite entre une offre d'une université française et d'une université néerlandaise ou suédoise prendra en compte non seulement les conditions scientifiques et salariales, mais aussi la facilité anticipée des démarches de titre de séjour, la qualité du service d'accueil des chercheurs étrangers, et la rapidité de traitement des dossiers.

Cette dimension compétitive pousse les universités et organismes français à améliorer continuellement leurs processus d'accueil administratif. Les établissements de recherche avec les meilleurs Welcome Desk sont souvent ceux qui ont investi tôt dans ces services — le CNRS, l'INRIA, le CEA, l'Institut Pasteur — et qui peuvent se prévaloir d'une expérience accumulée dans l'accompagnement de chercheurs de toutes nationalités.

## La portabilité internationale des travaux de recherche et le droit à la propriété intellectuelle

Pour les chercheurs étrangers qui travaillent en France dans le cadre d'un Passeport Talent, la question de la propriété intellectuelle des travaux réalisés en France mérite une attention particulière. La loi française sur la propriété intellectuelle attribue en principe la propriété des inventions faites dans le cadre d'une mission confiée à un salarié à l'employeur — une règle qui s'applique aux chercheurs salariés des organismes publics. Les conventions d'accueil des chercheurs en rotation internationale peuvent prévoir des dispositions spécifiques sur ce point.

Pour les chercheurs qui viennent en France pour des missions courtes mais très productives — une collaboration de six mois qui aboutit à des publications ou à des brevets — la clarification préalable de la propriété intellectuelle des résultats est un enjeu juridique et économique qui mérite d'être abordé avant la signature de la convention d'accueil. Les services de valorisation de la recherche des établissements peuvent aider à structurer ces questions.

## La transition du Passeport Talent vers la carte de résident

Après quatre ans sous Passeport Talent, de nombreux chercheurs et professionnels éligibles souhaitent obtenir la carte de résident dès qu'elle est accessible — c'est généralement après un an supplémentaire de régularité au-delà des quatre ans du Passeport Talent, pour atteindre les cinq ans de résidence régulière et continue requis. Cette transition, souvent bien préparée par les personnes concernées en raison de leur habitude des démarches administratives, est généralement fluide lorsque le dossier est solide.

La demande de carte de résident à l'expiration du Passeport Talent est souvent préparée en parallèle du renouvellement de ce dernier — si les cinq ans ne sont pas encore atteints à l'expiration du Passeport Talent, un renouvellement de ce titre est nécessaire pour la période intermédiaire jusqu'à l'éligibilité à la carte de résident. Certains titulaires choisissent de demander directement la naturalisation si les conditions sont remplies, en sautant l'étape de la carte de résident — une stratégie possible mais qui nécessite que tous les critères de naturalisation, notamment l'intégration républicaine, soient solidement établis.

## Les organisations internationales et le statut diplomatique des chercheurs

Un segment particulier des chercheurs étrangers en France est celui des personnes travaillant pour des organisations internationales basées en France — l'UNESCO (éducation, science, culture), l'OCDE (coopération économique), l'Agence Internationale de l'Énergie Atomique (AIEA, basée à Vienne mais avec des représentations en France), entre autres. Ces personnes bénéficient d'un statut administratif distinct du Passeport Talent — elles ont généralement un laissez-passer de l'organisation internationale qui les emploie, et leur statut est régi par les accords de siège entre la France et ces organisations.

Ce statut diplomatique ou semi-diplomatique confère des avantages d'immunité et de facilité administrative, mais il crée aussi des complexités lors des transitions — notamment lorsqu'un chercheur quitte son poste dans une organisation internationale pour rejoindre un établissement public de recherche français. La transition entre le statut d'agent d'une organisation internationale et celui de titulaire d'un Passeport Talent Chercheur doit être soigneusement coordonnée pour éviter toute période d'irrégularité.
`;

const EXT2_L10 = `
## La carte de résident pour les retraités étrangers vivant en France

Une catégorie spécifique de titulaires de carte de résident concerne les étrangers retraités qui ont passé une partie importante de leur vie active en France et y ont pris leur retraite. Pour ces personnes, dont le droit au séjour était lié à leur activité professionnelle, la retraite ne signifie pas nécessairement la perte du droit au séjour — au contraire, la loi prévoit des dispositions spécifiques pour garantir leur maintien en France.

L'étranger titulaire d'une pension de retraite française, ayant résidé régulièrement en France pendant au moins quinze ans, a droit de plein droit à la carte de résident retraité — sans que la préfecture puisse opposer de refus si les conditions sont remplies. Cette carte de résident retraité est valable dix ans et renouvelable, et son titulaire n'est soumis à aucune condition de ressources minimales particulières au-delà de sa pension.

Pour les retraités dont la pension française ne couvre pas à elle seule leurs besoins mais qui complètent avec des revenus à l'étranger (pension étrangère, loyers de biens immobiliers étrangers, épargne), la situation est plus complexe. La carte de résident ordinaire (hors catégorie retraité spécifique) requiert des resources suffisantes pour ne pas être à charge de l'assistance publique — ce critère est évalué par rapport à l'ensemble des ressources, françaises et étrangères, du demandeur.

## La carte de résident pour les victimes de violences conjugales

La loi française prévoit des dispositions spécifiques pour protéger les étrangers victimes de violences conjugales dont le titre de séjour était lié à leur conjoint. En principe, si le titre de séjour d'un étranger est dérivé d'une situation conjugale (regroupement familial, titre « vie privée et familiale » accordé en tant que conjoint), la séparation ou le divorce peut fragiliser le renouvellement de ce titre. La loi a cependant prévu des exceptions importantes pour les victimes de violences.

Un étranger dont le titre de séjour était lié à sa situation conjugale et qui est victime de violences conjugales documentées peut conserver son droit au séjour même après la séparation, et même si la communauté de vie avec l'agresseur a cessé. Cette protection, renforcée par les lois successives sur les violences conjugales, est essentielle pour éviter que la dépendance administrative à une communauté de vie ne devienne un instrument de maintien des victimes dans des situations de violence.

## L'articulation entre la carte de résident et les droits sociaux

La carte de résident ouvre pleinement l'accès à tous les droits sociaux, sur le même pied que les nationaux français, sous réserve de remplir les conditions propres à chaque prestation. Ce principe d'égalité d'accès aux droits sociaux est une conséquence directe de la stabilité et du caractère durable du séjour reconnu par la carte de résident.

En pratique, cela signifie qu'un titulaire de carte de résident qui cotise à l'assurance chômage a droit aux allocations chômage s'il perd son emploi, au même titre qu'un ressortissant français. Il a droit aux allocations familiales de la CAF pour ses enfants. Il peut accéder aux aides au logement selon les mêmes critères que les nationaux. Il peut bénéficier du revenu de solidarité active (RSA) s'il se retrouve en situation de précarité et que les conditions d'accès sont remplies — notamment la condition de résidence régulière pendant cinq ans, spécifique aux étrangers pour l'accès au RSA.

Cette égalité d'accès aux droits sociaux est l'un des arguments forts de la demande de carte de résident pour les personnes éligibles — les titres de séjour temporaires sont soumis à des conditions d'accès aux droits sociaux plus restrictives pour certaines prestations.
`;

const EXT2_L11 = `
## Les procédures de recours en cas de refus de titre de séjour

Face à un refus de titre de séjour, l'étranger concerné dispose de plusieurs voies de recours progressives qu'il est important de connaître et de mobiliser dans des délais stricts. La méconnaissance de ces voies de recours et des délais qui leur sont associés est souvent fatale pour les personnes qui découvrent trop tard qu'elles auraient pu contester une décision injuste.

Le premier recours possible est le recours gracieux : une lettre adressée directement au préfet qui a pris la décision, lui demandant de réexaminer le dossier à la lumière d'éléments supplémentaires ou d'arguments juridiques que l'étranger n'avait pas présentés dans son dossier initial. Ce recours est gratuit et ne nécessite pas d'avocat, mais il est rarement courounné de succès car le même service qui a pris la décision doit réviser son propre jugement — ce qui est psychologiquement difficile sans apport d'éléments véritablement nouveaux.

Le recours hiérarchique, adressé au ministre de l'Intérieur, est encore plus rarement efficace et est généralement déconseillé sauf dans des cas où la décision préfectorale est manifestement contraire à une instruction ministérielle explicite.

Le recours contentieux devant le tribunal administratif est la voie la plus efficace pour contester une décision illégale. Ce recours, qui doit être déposé dans un délai précis après la notification du refus (généralement deux mois pour les décisions ordinaires, mais des délais plus courts peuvent s'appliquer pour les OQTF), permet à un juge administratif indépendant d'examiner la légalité de la décision administrative. Si la décision est jugée illégale, elle est annulée et le préfet est invité à réexaminer le dossier. L'assistance d'un avocat est fortement recommandée pour ce type de recours.

## Les nouvelles technologies dans la gestion des titres de séjour

La dématérialisation des procédures de titre de séjour est une tendance de fond qui transforme progressivement l'expérience administrative des étrangers en France. Le passage de la file d'attente physique à la prise de rendez-vous en ligne, du dossier papier au dossier numérique, et du guichet physique au traitement dématérialisé représente une modernisation progressive du système.

Cette évolution n'est cependant pas sans difficultés. La « fracture numérique » — l'inégal accès aux outils numériques et aux compétences pour les utiliser efficacement — frappe particulièrement certaines populations étrangères : personnes âgées, personnes peu alphabétisées en français ou dans leur propre langue, personnes sans équipement informatique ou connexion internet stable. Pour ces populations, la dématérialisation forcée des procédures peut paradoxalement aggraver l'accès aux droits plutôt que le faciliter.

Des dispositifs d'accompagnement numérique ont été mis en place pour pallier ces difficultés : les Maisons France Services (anciens Points d'Accès au Numérique), les agents d'accueil des mairies, les associations d'aide aux étrangers qui ont développé des compétences d'accompagnement numérique. Pour une personne en difficulté avec les procédures en ligne, l'identification de ces ressources d'accompagnement est une étape préalable indispensable.

## La politique d'immigration française dans son contexte européen

Pour comprendre les évolutions récentes du droit des étrangers en France, il est utile de replacer la politique d'immigration française dans son contexte européen. La France est liée par plusieurs directives et règlements européens qui encadrent sa politique nationale d'immigration : la directive « retour » (relative aux conditions d'éloignement des ressortissants de pays tiers en séjour irrégulier), la directive « résidence longue durée » (qui crée un statut européen de résident de longue durée), la directive « chercheurs » (qui facilite la mobilité intra-européenne des chercheurs), entre autres.

Ces textes européens créent un plancher minimal de droits qui s'impose aux États membres, mais laissent à chacun d'eux une marge de manœuvre dans la transposition nationale. La France a parfois choisi de transposer ces directives de façon plus restrictive que le minimum requis, sur certains points, et plus généreuse sur d'autres, selon les majorités politiques successives et les priorités des gouvernements.

Cette dimension européenne signifie que les changements de politique d'immigration en France sont en partie contraints par le cadre juridique européen — toute modification de la législation nationale doit rester dans les limites posées par les directives. Pour les personnes concernées, il peut être utile de connaître l'existence de ces textes européens, car ils peuvent parfois fonder une demande ou un recours lorsque la législation nationale semble moins favorable que ce que le droit européen garantit.
`;

const EXT2_L12 = `
## La nationalité française par mariage : conditions et procédure

La nationalité française peut être acquise par déclaration par le conjoint étranger d'un citoyen français, sous certaines conditions. Cette voie d'acquisition de la nationalité est distincte de la naturalisation par décret — elle repose sur une déclaration unilatérale du conjoint étranger, qui n'est pas soumise au pouvoir d'appréciation de la même façon que la naturalisation. Cependant, ses conditions sont strictes et son instruction peut conduire à un refus si ces conditions ne sont pas remplies.

Les conditions sont les suivantes : le mariage doit avoir duré au moins quatre ans à la date de la déclaration ; le conjoint français et le conjoint étranger doivent avoir eu leur résidence commune en France pendant au moins trois ans depuis le mariage ; si le conjoint français est décédé, aucune condition de résidence commune n'est exigée ; le conjoint étranger doit justifier d'une résidence régulière depuis la célébration du mariage.

La communauté de vie — qui signifie à la fois vie commune sous le même toit et communauté affective — doit avoir été réelle et effective pendant toute la période requise. Les mariages de complaisance, les unions fictives contractées dans le but principal d'acquérir la nationalité française, constituent une fraude qui expose le candidat à un refus de la déclaration, à l'annulation du mariage, et aux poursuites pénales afférentes.

La procédure de déclaration de nationalité par mariage est déposée auprès du tribunal judiciaire du lieu de résidence. Le représentant de l'État peut s'opposer à la déclaration dans un délai de deux ans si les conditions ne sont pas remplies ou si les faits révèlent qu'il s'agit d'un mariage de complaisance. Cette opposition doit être motivée et peut faire l'objet d'un recours juridictionnel.

## La déchéance de la nationalité française

La nationalité française, une fois acquise, est permanente dans la très grande majorité des cas. Cependant, la loi prévoit la possibilité, dans des cas très restrictifs, de procéder à la déchéance de nationalité d'une personne naturalisée. Cette mesure exceptionnelle est prononcée par décret après avis du Conseil d'État, dans des circonstances limitativement prévues par la loi.

La déchéance est possible pour les personnes condamnées pour un crime ou un délit constituant une atteinte aux intérêts fondamentaux de la Nation (trahison, espionnage, complot contre la République), pour des actes de terrorisme ou pour des crimes ou délits prévus par le Code pénal, commis dans les dix ans suivant la naturalisation et si la personne possède une autre nationalité (la France ne peut pas créer d'apatrides par déchéance).

Dans la pratique, les déchéances de nationalité sont extrêmement rares et les cas qui ont fait l'objet de débats publics récents (notamment à la suite des attentats de 2015) illustrent à la fois la force symbolique de cet instrument et les difficultés juridiques et politiques qui entourent son utilisation. Pour la quasi-totalité des personnes naturalisées en bonne foi et qui respectent la loi, la déchéance de nationalité n'est pas un risque réel.

## L'inscription sur les listes électorales : premier acte de citoyenneté

L'acquisition de la nationalité française ouvre automatiquement le droit de vote, mais l'exercice effectif de ce droit suppose une inscription préalable sur les listes électorales. Cette inscription, autrefois fastidieuse et soumise à des délais stricts, a été considérablement simplifiée par la réforme de la procédure electorale de 2016 et la mise en place du Répertoire Électoral Unique (REU) géré par l'INSEE.

L'inscription sur les listes électorales peut désormais se faire en ligne sur le site du service public ou auprès de la mairie, de façon relativement simple et à n'importe quel moment de l'année. Cependant, des délais s'appliquent pour que l'inscription soit prise en compte pour un scrutin donné — il faut généralement être inscrit avant une certaine date pour pouvoir voter lors des élections suivantes. Pour une personne nouvellement naturalisée qui souhaite participer à une élection imminente, vérifier les délais d'inscription est une étape urgente.

Le vote en France est libre et secret — aucune contrainte ni aucune direction de vote ne peuvent légalement être imposées à un citoyen. La participation aux élections est encouragée mais non obligatoire. Pour les citoyens nouvellement naturalisés, la première participation à un scrutin est souvent vécue comme un moment symbolique fort, concrétisant la transformation administrative et identitaire que représente la naturalisation.

## Questions fréquentes sur la naturalisation

Plusieurs questions reviennent régulièrement chez les candidats à la naturalisation. Première question : « Mon conjoint français doit-il accompagner ma demande ? » Non — la naturalisation est une démarche individuelle que le candidat mène pour lui-même, indépendamment de son conjoint. Si le candidat est marié à un citoyen français, cela peut faciliter la preuve de son intégration et réduire le délai de résidence requis (à deux ans dans certains cas), mais le conjoint n'est pas partie à la procédure.

Deuxième question : « Mes enfants deviennent-ils automatiquement français si je suis naturalisé ? » Les enfants mineurs qui résident habituellement en France avec leur parent naturalisé acquièrent automatiquement la nationalité française au moment de la naturalisation du parent, si leur filiation est établie. Les enfants majeurs, en revanche, ne sont pas automatiquement couverts et doivent faire leur propre demande s'ils souhaitent acquérir la nationalité française.

Troisième question : « Puis-je déposer ma demande de naturalisation depuis l'étranger ? » Non — la naturalisation est réservée aux personnes résidant en France au moment du dépôt et pendant toute l'instruction du dossier. Une absence prolongée à l'étranger pendant l'instruction de la demande peut conduire à son classement sans suite.
`;

await appendAndPatch('aac8c4c1-7ab2-45b3-a5b5-4e2748f16939', EXT2_L7);
await appendAndPatch('2db95ef5-7de7-4bac-a68f-0ef96dddf981', EXT2_L8);
await appendAndPatch('c22002fe-75ce-41af-bd63-5ed570312d28', EXT2_L9);
await appendAndPatch('9419e826-62cc-4a80-96e5-638ba995184e', EXT2_L10);
await appendAndPatch('9a533bac-7df9-412e-922e-0dcdf500fd0b', EXT2_L11);
await appendAndPatch('42981160-abc6-46a3-a324-505dfc7ea75e', EXT2_L12);
