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

const EXT_L7 = `
## Les mentions spéciales et les droits associés à chaque titre temporaire

Chaque carte de séjour temporaire porte une mention qui ne se contente pas d'identifier le motif du séjour : elle conditionne précisément les droits qui y sont attachés, en particulier les droits au travail. Cette relation entre mention et droits est souvent source de confusion pour les titulaires qui, surtout dans leurs premières années en France, ne maîtrisent pas encore parfaitement l'articulation du système.

La mention « salarié » autorise l'exercice d'une activité salariée pour un employeur précis, avec une qualification précise et pour un nombre d'heures précis. Ce n'est pas une autorisation générale de travailler pour n'importe quel employeur dans n'importe quel secteur — c'est une autorisation spécifique liée à un contrat de travail particulier. Tout changement d'employeur, même dans le même secteur et à salaire équivalent, déclenche en principe une obligation de régularisation administrative. La mention « travailleur temporaire » suit une logique analogue pour les contrats à durée déterminée.

La mention « vie privée et familiale » est plus généreuse en termes d'accès au travail : ses titulaires sont en principe autorisés à exercer toute activité professionnelle salariée ou indépendante sans restriction de secteur. Cette flexibilité explique pourquoi certaines personnes cherchent à obtenir cette mention plutôt qu'une mention professionnelle liée à un employeur unique. En revanche, l'accès à la mention « vie privée et familiale » est conditionné à une situation familiale spécifique — être marié à un résident régulier, parent d'enfant français, bénéficiaire d'une protection internationale — et non pas au simple souhait de bénéficier de ses avantages.

## La demande en ligne et les guichets dématérialisés

La transition vers la dématérialisation des demandes de titre de séjour est en cours mais à des rythmes très variables selon les départements. Le portail de l'Agence Nationale des Titres Sécurisés (ANTS) permet dans un nombre croissant de départements de prendre rendez-vous en ligne et de déposer les dossiers de demande de titre de séjour par voie dématérialisée. Cette dématérialisation, quand elle est disponible et fonctionnelle, simplifie considérablement la vie des demandeurs qui n'ont plus à se présenter physiquement à la préfecture pour déposer un dossier complet de paperasse.

En pratique cependant, la réalité de la dématérialisation est encore perfectible. Les dysfonctionnements de plateforme, les délais de traitement qui s'allongent après le dépôt dématérialisé, et les demandes de compléments de dossier envoyées par email nécessitant souvent plusieurs échanges, créent des frustrations chez les demandeurs. Certaines préfectures ont même temporairement désactivé les téléprocédures lors de périodes de forte demande pour revenir à un système de rendez-vous physiques. Il est donc recommandé de vérifier régulièrement l'actualité de la préfecture de son lieu de résidence concernant les modalités de dépôt des demandes.

## La convention internationale CPCAM et la protection sociale des titulaires

Les titulaires d'un titre de séjour en France ont droit, sous conditions, à l'affiliation à la Sécurité sociale française et à la protection sociale qu'elle procure. Cette affiliation est conditionnée à la régularité du séjour — une situation irrégulière prive en principe de l'accès à la Sécurité sociale — mais elle n'est pas conditionnée à l'exercice d'une activité professionnelle. La Protection Universelle Maladie (PUMa) permet depuis 2016 à toute personne résidant régulièrement et de façon stable en France d'être couverte par l'assurance maladie indépendamment de son statut professionnel.

Cette couverture maladie de base couvre les soins médicaux selon les barèmes de la Sécurité sociale — ce qui signifie que les soins non remboursés à 100% par la Sécu restent à la charge du patient. Une mutuelle complémentaire, qui peut être souscrite auprès de mutuelles privées ou via la Complémentaire Santé Solidaire (CSS, anciennement CMU-C) pour les personnes aux revenus les plus faibles, est donc fortement recommandée pour une protection complète.
`;

const EXT_L8 = `
## La validation OFII en pratique : étapes concrètes et délais

La validation du visa long séjour valant titre de séjour (VLS-TS) auprès de l'OFII est une formalité qui se déroule entièrement en ligne depuis la réforme de simplification administrative des années 2020. Le processus commence par la création d'un compte personnel sur le portail de validation OFII, accessible à l'adresse dédiée du site officiel de l'OFII. Le numéro de visa apposé sur le passeport sert d'identifiant pour lier le compte à la demande de validation.

Une fois le compte créé, le demandeur doit renseigner ses informations personnelles et téléverser les documents requis : une photographie d'identité numérique aux normes officielles, la copie du visa, et une preuve d'entrée récente sur le territoire français (tampon de frontière dans le passeport, ou le cas échéant, un billet d'avion ou un ticket de transport daté). Le traitement de la demande prend généralement deux à quatre semaines, après quoi une vignette de validation est envoyée par courrier à l'adresse indiquée dans le dossier.

Cette vignette, qui se colle sur le passeport à côté du visa, fait du VLS-TS un titre de séjour pleinement valide pour la durée indiquée. Son absence expose le titulaire à des difficultés lors des contrôles d'identité et, plus sérieusement, à un refus de renouvellement lors de la première demande annuelle — les préfectures vérifient systématiquement si la validation OFII a bien été effectuée. Cette formalité simple mais indispensable est l'une des premières obligations administratives d'un étudiant étranger nouvellement arrivé.

## Les examens de langue française exigés pour le titre étudiant

Pour les candidats issus de pays non francophones souhaitant étudier en France, la maîtrise du français est une condition préalable à l'admission dans une formation française, mais aussi une condition implicite de la réussite académique une fois en France. Les universités et grandes écoles françaises exigent généralement un niveau minimal de B1 à B2 selon le Cadre Européen Commun de Référence pour les Langues pour les candidatures en licence, et de B2 à C1 pour les masters.

Ces niveaux de français sont certifiés par des examens reconnus internationalement : le diplôme DALF (Diplôme Approfondi de Langue Française) aux niveaux C1 et C2, le DELF (Diplôme d'Études en Langue Française) aux niveaux A1 à B2, le TCF (Test de Connaissance du Français) proposé par France Éducation International, ou le TEF (Test d'Évaluation de Français). La plupart des établissements acceptent l'un ou l'autre de ces diplômes selon leurs conditions d'admission spécifiques.

Pour les étudiants dont le niveau de français n'atteint pas encore le niveau requis, des solutions existent : les cours intensifs de français comme langue étrangère dans des instituts de langue en France ou dans leur pays d'origine, les classes de préparation linguistique offertes parfois par les universités françaises pour les étudiants internationaux avant le début de leur cursus, ou encore les formations en FLE (Français Langue Étrangère) associées aux programmes d'accueil pour les étudiants débutants.

## Le mentorat étudiant et les ressources d'accompagnement

L'adaptation à la vie universitaire française représente un défi réel pour les étudiants étrangers qui découvrent simultanément un nouveau système académique, une nouvelle langue d'enseignement, un nouveau pays et une nouvelle culture. Les universités françaises ont progressivement développé des dispositifs de mentorat et d'accompagnement conçus spécifiquement pour faciliter cette adaptation.

Le système de tutorat ou de parrainage pair-à-pair met en relation des étudiants étrangers nouvellement arrivés avec des étudiants français ou des étudiants étrangers plus anciens qui ont déjà traversé le processus d'adaptation. Ces tuteurs peuvent aider sur des questions pratiques — comprendre le fonctionnement de la bibliothèque, s'orienter dans le campus, comprendre comment fonctionne une unité d'enseignement — mais aussi sur des questions plus personnelles liées à l'adaptation culturelle et sociale.

Les services de santé universitaire (SCAS ou SSU selon les établissements) proposent également des consultations psychologiques qui peuvent être très utiles pour les étudiants qui traversent des difficultés liées à l'isolation, au dépaysement culturel ou à la pression académique. Ces consultations sont généralement gratuites pour les étudiants inscrits dans l'établissement, dans la limite d'un quota de séances par semestre. L'obstacle de la méconnaissance de ces ressources est souvent plus important que l'obstacle de l'accès lui-même — il suffit parfois d'en avoir entendu parler une fois pour penser à y recourir en cas de besoin.
`;

const EXT_L9 = `
## Les modalités pratiques de la convention d'accueil pour les chercheurs

La convention d'accueil qui fonde le droit au Passeport Talent Chercheur est un document contractuel bilatéral — entre le chercheur et l'organisme d'accueil — mais dont la validité est subordonnée à l'approbation par les services préfectoraux. Le contenu de cette convention doit satisfaire à des exigences précises : identification claire de la mission de recherche ou d'enseignement, durée couvrant l'intégralité du séjour prévu, ressources financières et matérielles mises à disposition, et rémunération conforme aux minimums légaux.

La rédaction de la convention d'accueil est généralement prise en charge par le service administratif ou le service des ressources humaines de l'organisme d'accueil, avec qui le chercheur doit collaborer étroitement pour s'assurer que tous les éléments requis sont présents. Les services des Relations Internationales et/ou Welcome Desk des grandes universités et organismes de recherche (CNRS, INSERM, CEA et équivalents) disposent de modèles de convention validés par les préfectures qui simplifient et accélèrent ce processus.

Il est important de comprendre que la convention d'accueil n'est pas simplement un document formel à cocher — elle doit refléter la réalité de la mission prévue et les conditions dans lesquelles elle sera effectuée. Une convention rédigée de façon vague ou ne correspondant pas à la situation réelle du chercheur peut être rejetée par la préfecture ou, pire, donner lieu à un constat d'irrégularité si la mission réelle diffère sensiblement de ce qui est décrit dans la convention. La précision et la sincérité dans la rédaction de ce document sont donc essentielles.

## Le réseau européen Marie Skłodowska-Curie et ses implications administratives

Le programme Marie Skłodowska-Curie Actions (MSCA) de l'Union européenne finance des bourses de mobilité internationale pour les chercheurs postdoctoraux, favorisant les parcours de recherche à travers plusieurs pays. Pour les chercheurs MSCA en mobilité en France, l'articulation entre les règles européennes du programme et les procédures administratives françaises du Passeport Talent peut créer des complexités spécifiques.

Les bourses MSCA offrent généralement des salaires substantiellement supérieurs au SMIC — ce qui satisfait la condition de rémunération minimale du Passeport Talent Chercheur. Cependant, le cadrage contractuel d'un chercheur MSCA (contrat de travail ou convention de bourse selon le type d'action MSCA) peut affecter la nature du document à présenter à la préfecture. Les établissements d'accueil expérimentés dans l'accueil de chercheurs MSCA ont généralement développé des procédures internes pour gérer ces spécificités, et leur bureau des relations internationales est le premier interlocuteur à contacter pour ces questions.

## La mobilité intra-européenne facilitée par le Passeport Talent

Une caractéristique souvent méconnue des titres de séjour « chercheur » — dérivée de la directive européenne sur les chercheurs — est la facilitation de la mobilité intra-européenne pour les chercheurs en mission. Un chercheur titulaire d'un titre de séjour « chercheur » ou « Passeport Talent Chercheur » délivré par un État membre de l'Union européenne peut se rendre dans un autre État membre pour exercer une partie de sa mission de recherche, pour une durée pouvant aller jusqu'à 180 jours sur une période de 360 jours, sans avoir à obtenir un titre de séjour dans le pays de destination.

Cette mobilité simplifiée est encadrée par des procédures de notification : le chercheur ou son organisme d'accueil doit notifier les autorités du pays de destination de sa venue, selon les modalités prévues par la directive. Ces modalités varient d'un État membre à l'autre — certains exigent une notification préalable au départ, d'autres acceptent une notification à l'arrivée. La préparation de ces mobilités intra-européennes doit donc inclure une vérification des procédures spécifiques de chaque pays de destination.

## La démarche d'installation pratique pour les chercheurs internationaux

Au-delà des formalités administratives liées au titre de séjour, l'installation concrète d'un chercheur étranger en France implique une série de démarches pratiques dont la gestion simultanée peut s'avérer chronophage et épuisante. La recherche de logement, l'ouverture d'un compte bancaire, la souscription à une assurance, l'inscription à la Sécurité sociale, le raccordement aux services d'eau et d'électricité, l'inscription des enfants à l'école : autant de démarches qui doivent être menées en parallèle, souvent dans une langue qui n'est pas la langue maternelle du chercheur.

Les Welcome Desk des organismes d'accueil jouent un rôle central dans la facilitation de ces démarches. Ils disposent généralement de listes de logements disponibles à louer à des chercheurs en mobilité internationale, parfois à des tarifs négociés. Ils orientent vers des banques qui ont l'habitude d'ouvrir des comptes pour les étrangers nouvellement arrivés. Ils fournissent les formulaires administratifs traduits et accompagnent les chercheurs dans leur rédaction. Cette infrastructure d'accueil est un critère de qualité important à prendre en compte lors du choix d'un organisme d'accueil — deux organismes d'accueil comparables en termes de recherche peuvent offrir des expériences administratives radicalement différentes selon l'investissement qu'ils ont réalisé dans leurs services d'accueil.
`;

const EXT_L10 = `
## La notion de « menace pour l'ordre public » et ses contours

La condition d'absence de menace pour l'ordre public est une condition tant pour l'obtention initiale que pour le renouvellement de la carte de résident. Sa méconnaissance conduit parfois à des refus inattendus pour des personnes qui estiment, à juste titre en apparence, avoir rempli toutes les conditions formelles de la demande.

La « menace pour l'ordre public » est appréciée par l'administration dans un sens administratif qui peut être plus large que la seule notion de condamnation pénale. Une condamnation pénale pour un délit grave est évidemment de nature à caractériser une telle menace. Mais des comportements moins directement liés à la criminalité peuvent aussi être retenus : troubles répétés de voisinage ayant fait l'objet de plaintes, comportements contraires aux valeurs de la République documentés, appartenance à des organisations considérées comme menaçantes par les services de renseignement. Ces cas restent relativement rares dans les demandes de carte de résident classiques, mais ils illustrent l'étendue du pouvoir d'appréciation de l'administration.

En cas de refus de carte de résident pour motif d'ordre public, le recours juridictionnel devant le tribunal administratif est la voie principale pour contester la décision. Ce recours exige la démonstration que l'appréciation de l'administration était manifestement disproportionnée ou fondée sur des faits inexacts. L'assistance d'un avocat spécialisé en droit des étrangers est quasi-indispensable pour ce type de recours, la jurisprudence étant complexe et les délais de procédure courts.

## Les obligations fiscales des titulaires de la carte de résident

La possession d'une carte de résident ne modifie pas en elle-même les obligations fiscales d'un étranger en France — ce sont les critères de résidence fiscale (définis par les conventions fiscales bilatérales et par le droit interne français) qui déterminent où une personne est imposée. Cependant, dans la pratique, la grande majorité des titulaires d'une carte de résident ont leur résidence fiscale en France, ce qui signifie qu'ils sont soumis à l'impôt français sur leurs revenus mondiaux.

Cette imposition sur les revenus mondiaux peut soulever des questions pour les personnes qui ont des sources de revenus à l'étranger — loyers de biens immobiliers dans leur pays d'origine, dividendes de sociétés étrangères, revenus d'activité à l'étranger. Les conventions fiscales bilatérales signées par la France avec la plupart des pays du monde prévoient des mécanismes pour éviter la double imposition — généralement soit une exonération en France avec progressivité, soit un crédit d'impôt pour les impôts payés à l'étranger. La consultation d'un conseiller fiscal est recommandée pour les personnes dont la situation présente de telles complexités.

## La portée de la carte de résident pour les enfants nés en France

Les enfants nés en France de parents étrangers titulaires d'une carte de résident ont un statut juridique particulier que les parents doivent comprendre pour optimiser les choix administratifs. Un enfant né en France de parents étrangers n'acquiert pas automatiquement la nationalité française à la naissance par le simple fait de la naissance sur le sol français — le droit du sol en France est conditionnel et ne s'applique pas automatiquement. L'enfant est étranger à la naissance, de la nationalité de ses parents.

À la majorité (18 ans), cet enfant peut réclamer la nationalité française s'il a résidé habituellement en France pendant au moins cinq ans depuis l'âge de onze ans — c'est la procédure de déclaration de nationalité par le droit du sol. Cette procédure, simple formellement, est automatiquement accordée si les conditions de résidence sont remplies. Pour les enfants scolarisés en France depuis leur petite enfance, dont les parents sont titulaires d'une carte de résident, les conditions de résidence sont généralement satisfaites sans difficulté.

Certains enfants peuvent également, à partir de treize ans, demander à être déclarés de nationalité française par leurs représentants légaux, si they déjà résidé cinq ans en France depuis l'âge de huit ans. Ces mécanismes de naturalisation des enfants nés ou élevés en France sont complémentaires de la situation administrative des parents titulaires de la carte de résident.
`;

const EXT_L11 = `
## Les procédures spéciales : regroupement familial et droit au séjour des conjoints

Au-delà des titres de séjour liés à l'activité professionnelle ou académique, les procédures de regroupement familial et les titres de séjour accordés aux membres de la famille de ressortissants réguliers en France constituent un pan important du droit au séjour. Ces procédures suivent des règles spécifiques qui s'appliquent parallèlement — et parfois en intersection — avec les règles générales des titres de séjour.

Le regroupement familial proprement dit est la procédure qui permet à un étranger régulièrement installé en France (le « regroupant ») de faire venir son conjoint et ses enfants mineurs depuis le pays d'origine. Cette procédure est conditionnée à des critères stricts : une résidence régulière d'au moins dix-huit mois en France pour le regroupant, des ressources suffisantes pour subvenir aux besoins de la famille, et un logement décent et de taille suffisante pour accueillir tous les membres de la famille. Le dossier est instruit par l'Office Français de l'Immigration et de l'Intégration (OFII) et la décision est prise par le maire de la commune de résidence du regroupant.

Le titre de séjour « vie privée et familiale » constitue une voie alternative au regroupement familial formel pour les personnes dont les liens familiaux avec des résidents légaux en France ouvrent droit au séjour. Le conjoint d'un ressortissant français présent en France depuis au moins trois ans, par exemple, peut obtenir directement un titre de séjour « vie privée et familiale » sans passer par la procédure de regroupement familial — une voie plus souple et moins exigeante en termes de conditions de ressources et de logement.

## L'accord franco-algérien : specificités et implications pratiques

L'accord franco-algérien du 27 décembre 1968 et ses avenants successifs constituent un corpus juridique distinct qui régit l'ensemble de la situation administrative des ressortissants algériens en France. Cet accord, signé peu après l'indépendance de l'Algérie en 1962, vise à maintenir des liens particuliers entre les deux pays et à organiser les droits de résidence et de travail des ressortissants algériens en France.

Les principales différences par rapport au droit commun sont les suivantes. Les ressortissants algériens bénéficient de « certificats de résidence » et non de « cartes de séjour » — une différence terminologique qui reflète un régime juridique distinct. Ces certificats de résidence ont des durées et des conditions spécifiques : le certificat d'un an pour diverses situations (travail, famille), le certificat de dix ans accessible après sept ans de résidence régulière (contre cinq ans pour la carte de résident du droit commun), et le certificat de résidence algérien de plein droit pour certaines catégories.

La hiérarchie des sources de droit pour les Algériens est également spécifique : lorsque l'accord franco-algérien prévoit des dispositions plus favorables que le droit commun des étrangers (CESEDA), ce sont les dispositions de l'accord qui s'appliquent. Lorsque le CESEDA est plus favorable, les Algériens peuvent en principe s'en prévaloir. Cette articulation complexe est souvent source d'incertitude, et les services préfectoraux eux-mêmes ne maîtrisent pas toujours parfaitement l'ensemble des subtilités de l'accord.

## Les associations d'aide aux étrangers et leur rôle dans l'accompagnement

Un réseau associatif dense s'est développé en France pour accompagner les étrangers dans leurs démarches administratives liées au séjour. Ces associations jouent un rôle complémentaire de celui des services publics : elles accompanient les personnes qui n'ont pas les ressources (financières, linguistiques, culturelles) pour naviguer seules dans le dédale administratif.

Les associations les plus connues et les plus actives dans ce domaine sont la Cimade (Service Oecuménique d'Entraide), le GISTI (Groupe d'Information et de Soutien des Immigrés), France Terre d'Asile, la Ligue des droits de l'homme et la Fédération des acteurs de la solidarité. Ces organisations proposent des permanences juridiques gratuites où des bénévoles formés ou des permanents juridiques aident à analyser les situations, à préparer les dossiers et à rédiger les recours en cas de refus. Certaines offrent également un accompagnement dans les démarches physiques auprès des services préfectoraux — une aide précieuse pour les personnes peu à l'aise avec la langue ou le fonctionnement des administrations françaises.
`;

const EXT_L12 = `
## La décision de naturalisation et ses délais réels

Les délais de traitement des demandes de naturalisation sont notablement plus longs que ceux des demandes de titre de séjour ordinaires, et les candidats doivent s'y préparer avec patience et réalisme. Après le dépôt du dossier complet à la préfecture, une période d'instruction de six à dix-huit mois est courante — et des délais de deux ans ne sont pas exceptionnels dans les préfectures à forte charge de travail. Cette durée d'instruction couvre l'ensemble des vérifications effectuées : examen de la complétude du dossier, vérification de l'absence d'antécédents judiciaires, enquête de moralité, et évaluation de l'intégration sur la base des pièces et de l'entretien.

Pendant la période d'instruction, le demandeur reste titulaire de son titre de séjour habituel et doit le renouveler normalement le cas échéant. La demande de naturalisation n'affecte pas le titre de séjour en cours et ne constitue pas un titre provisoire pour le séjour. Si une décision de naturalisation est finalement prise, elle est publiée au Journal Officiel de la République Française et prend effet à la date de publication — c'est à partir de cette date que la personne est officiellement française et peut faire valoir ses droits de citoyen.

Le délai entre la publication au JO et la délivrance physique d'un certificat de nationalité française — document élémentaire pour prouver sa nationalité — est lui aussi de quelques semaines. Ce certificat est nécessaire pour faire établir une carte nationale d'identité française et un passeport français. La demande de passeport, en particulier, peut représenter un moment symbolique fort pour une personne qui vient d'acquérir la nationalité française au terme de nombreuses années d'intégration.

## La double nationalité : principe et exceptions

La France reconnaît en principe la double nationalité — un étranger naturalisé n'est pas obligé de renoncer à sa nationalité d'origine et peut demeurer binational. Cette position libérale de la France sur la double nationalité est une donnée importante pour les candidats à la naturalisation qui craignent de devoir choisir entre leurs attachements nationaux. La France n'oblige pas le demandeur à renoncer à sa nationalité antérieure : la lettre de renonciation que certaines personnes croient devoir rédiger n'est pas exigée par le droit français.

En revanche, certains pays d'origine n'acceptent pas la double nationalité et retirent automatiquement la nationalité de leurs ressortissants qui se font naturaliser dans un pays étranger. C'est notamment le cas de certains pays arabes, d'Asie ou d'Afrique. Le candidat à la naturalisation doit donc vérifier, avant sa demande, ce que prévoit la législation de son pays d'origine sur la double nationalité — une démarche auprès du consulat ou de l'ambassade de son pays en France peut clarifier ce point. La perte automatique de la nationalité d'origine, si elle est prévue par le droit du pays d'origine, est une conséquence indirecte de la naturalisation française que l'administration française ne contrôle pas et ne peut pas empêcher.

## Les droits civiques de la naturalisation : ce que l'on gagne concrètement

La naturalisation française confère l'ensemble des droits de la citoyenneté française, qui vont bien au-delà du simple droit d'être traité comme un « Français à part entière » dans les rapports avec l'administration. Ces droits ont des implications concrètes et pratiques dans de nombreuses sphères de la vie.

Le droit de vote et d'être élu est peut-être le droit civique le plus symboliquement fort. La participation aux élections — municipales, législatives, présidentielles — transforme la relation à la société française : d'observateur des décisions politiques qui affectent sa vie, le naturalisé devient acteur de ces décisions. Le droit d'être élu permet également à ceux qui le souhaitent de participer plus directement à la gouvernance de la cité — un droit que les résidents étrangers, même anciens, n'ont pas.

L'accès aux emplois de la fonction publique est un autre avantage concret majeur. De nombreux emplois publics — professeur de l'Éducation nationale, fonctionnaire territorial, policier, juge, diplomate, officier militaire — sont réservés aux citoyens français (ou, pour certains, aux citoyens de l'Union européenne). La naturalisation ouvre donc l'accès à des carrières professionnelles qui étaient auparavant inaccessibles, dans des secteurs qui représentent une part importante de l'emploi en France.

La protection consulaire française à l'étranger est également une nouveauté pratique : en voyage ou en résidence à l'étranger, le naturalisé peut se tourner vers les ambassades et consulats français pour une assistance administrative, une aide en cas de détresse, ou un soutien en cas de conflit avec les autorités locales d'un pays tiers — une protection dont les ressortissants étrangers ne bénéficient pas.
`;

await appendAndPatch('aac8c4c1-7ab2-45b3-a5b5-4e2748f16939', EXT_L7);
await appendAndPatch('2db95ef5-7de7-4bac-a68f-0ef96dddf981', EXT_L8);
await appendAndPatch('c22002fe-75ce-41af-bd63-5ed570312d28', EXT_L9);
await appendAndPatch('9419e826-62cc-4a80-96e5-638ba995184e', EXT_L10);
await appendAndPatch('9a533bac-7df9-412e-922e-0dcdf500fd0b', EXT_L11);
await appendAndPatch('42981160-abc6-46a3-a324-505dfc7ea75e', EXT_L12);
