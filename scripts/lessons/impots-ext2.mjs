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

// L1: 982 → ~+800 words
const EXT2_L1 = `
## Les particularités des étudiants Erasmus et des programmes d'échange

Les étudiants Erasmus et participants à des programmes d'échange universitaire ont une situation fiscale particulière. La bourse Erasmus accordée par l'Union européenne est généralement exonérée d'impôt sur le revenu dans les pays de l'UE, y compris en France. Cette exonération spécifique aux bourses Erasmus est prévue par les règlements européens régissant le programme.

Pour un étudiant étranger arrivant en France via Erasmus, la bourse Erasmus n'est pas à déclarer comme revenu imposable. Cependant, si l'étudiant a d'autres revenus (travail à temps partiel, allocations de son pays d'origine), ces revenus doivent être évalués selon les règles de résidence fiscale et de convention bilatérale applicable.

La durée typique d'un séjour Erasmus est d'un semestre (5-6 mois) ou d'une année académique complète. Pour un séjour de moins de 6 mois, la question de la résidence fiscale française se pose : si le séjour est inférieur à 183 jours, l'étudiant peut conserver sa résidence fiscale dans son pays d'origine et n'être imposé en France que sur ses éventuels revenus de source française.

## Les comptes bancaires étrangers et leur déclaration

Les résidents fiscaux français qui détiennent des comptes bancaires à l'étranger ont l'obligation de les déclarer auprès de l'administration fiscale française. Cette obligation est distincte de la déclaration de revenus et s'effectue via le formulaire 3916 ("Déclaration des comptes ouverts, détenus, utilisés ou clos à l'étranger").

Pour un étudiant étranger résident fiscal en France, cela signifie que son compte bancaire dans son pays d'origine doit être déclaré. L'obligation s'applique dès que le compte est simplement détenu ou utilisé, même s'il n'y a aucun revenu sur ce compte pendant l'année. La non-déclaration d'un compte étranger peut entraîner des amendes significatives (1 500 euros par compte non déclaré, ou 10 000 euros si le compte est dans un État qui n'a pas conclu de convention d'échange d'informations avec la France).

## L'impact des aides familiales étrangères sur la déclaration

De nombreux étudiants étrangers en France reçoivent des aides financières de leur famille dans leur pays d'origine — virement mensuel des parents pour les frais de vie, financement ponctuels des frais de scolarité. La question de l'imposition de ces transferts familiaux est souvent source de confusion.

En principe, les dons et aides reçus de membres de la famille ne sont pas des "revenus" au sens fiscal et ne sont pas imposables comme tels. Ces transferts familiaux ne doivent pas être déclarés dans les cases de revenus. Cependant, des transferts réguliers et importants peuvent parfois être questionnés par l'administration fiscale sur leur nature (s'agit-il d'une prestation de service non déclarée, d'un revenu d'activité dissimulé ?). Dans la pratique courante, les virements familiaux destinés à financer les études sont traités comme des aides non imposables et ne posent pas de problème si les autres sources de revenus sont correctement déclarées.

## Les outils numériques d'aide à la déclaration

Plusieurs outils numériques peuvent faciliter la préparation de la déclaration de revenus. Le simulateur d'impôt sur le revenu disponible sur impots.gouv.fr permet d'estimer son impôt avant de déposer la déclaration officielle. Cet outil est particulièrement utile pour simuler l'impact de différents choix (rattachement vs déclaration séparée, frais réels vs déduction forfaitaire) et prendre la meilleure décision.

Des applications mobiles privées (Fisc et Moi, Tax calculators) offrent des interfaces simplifiées pour les calculs fiscaux. Cependant, ces outils tiers donnent des estimations et ne remplacent pas la déclaration officielle sur impots.gouv.fr. Pour les situations complexes (revenus étrangers, conventions fiscales, multiples sources de revenus), l'accompagnement par un professionnel ou par un service d'aide à la déclaration reste recommandé.
`;

// L2: 1006 → ~+800 words
const EXT2_L2 = `
## Les revenus de capitaux mobiliers pour les étudiants

Les étudiants qui ont des placements financiers (livrets d'épargne, actions, obligations, assurances-vie) perçoivent des revenus de capitaux mobiliers (intérêts et dividendes). Ces revenus sont soumis au Prélèvement Forfaitaire Unique (PFU) de 30%, communément appelé "flat tax", sauf option pour le barème progressif.

Pour la plupart des étudiants, les livrets réglementés (Livret A, LDDS, LEP, Livret Jeune) génèrent des intérêts exonérés d'impôt et de prélèvements sociaux — ces revenus n'ont même pas besoin d'être déclarés. Les comptes à terme, les livrets ordinaires de banque, et les dividendes d'actions sont en revanche soumis au PFU ou au barème progressif selon l'option choisie.

Pour un étudiant avec un revenu imposable faible, le barème progressif peut être plus avantageux que le PFU car la tranche à 0% peut s'appliquer à une partie de ces revenus. Cette option "pour le barème" doit être exercée lors de la déclaration — elle s'applique alors à l'ensemble des revenus de capitaux mobiliers et plus-values financières de l'année.

## La gestion des remboursements de frais par l'employeur

Les étudiants qui travaillent et dont l'employeur rembourse certains frais professionnels (frais de transport, frais de repas, matériel professionnel) doivent comprendre comment ces remboursements interagissent avec leur déclaration de revenus. Les remboursements de frais sur base réelle (l'employeur rembourse exactement les frais engagés sur justificatifs) ne sont pas considérés comme des revenus et ne sont pas imposables.

En revanche, les indemnités forfaitaires versées par l'employeur (prime de transport, tickets restaurant, forfait repas) sont partiellement exonérées dans les limites légales — au-delà de ces limites, la partie excédentaire est ajoutée au salaire imposable. Les bulletins de salaire indiquent généralement clairement quelles sommes sont incluses dans le salaire imposable et quelles indemnités sont exonérées.

## Le traitement specifique des bourses de mobilité et de recherche

Les bourses accordées aux étudiants sont traitées différemment selon leur nature et leur origine. Les bourses sur critères sociaux (bourses CROUS) sont exonérées d'impôt. Les bourses d'excellence, les bourses de mérite académique, et les allocations de recherche ont des régimes fiscaux plus variables selon leur source et les textes réglementaires qui les encadrent.

Les allocations de recherche versées aux doctorants dans le cadre d'un contrat doctoral sont généralement imposables comme des salaires et bénéficient des mêmes règles d'exonération que la rémunération d'apprentissage. Les bourses versées par des fondations privées ou des entreprises peuvent être imposables ou non selon leurs conditions d'attribution. En cas de doute sur le régime fiscal d'une bourse, contacter l'administration fiscale ou l'organisme versant la bourse pour obtenir une clarification est la démarche appropriée.

## La retenue à la source pour les non-résidents temporairement en France

Pour les étudiants étrangers qui ne sont pas résidents fiscaux français (séjour inférieur à 183 jours, convention bilatérale établissant la résidence fiscale dans le pays d'origine), leurs revenus de source française peuvent faire l'objet d'une retenue à la source selon un taux fixe. Cette retenue à la source sur les revenus des non-résidents est gérée directement par l'employeur et peut représenter une imposition plus lourde que le barème progressif normal.

Les non-résidents qui travaillent en France et subissent la retenue à la source peuvent, dans certains cas, opter pour l'imposition au barème progressif si cela est plus avantageux. Cette option doit être demandée lors de la déclaration de revenus des non-résidents, via le formulaire 2042-NR disponible sur impots.gouv.fr. La comparaison entre retenue à la source et barème progressif peut générer un remboursement significatif pour les non-résidents avec de faibles revenus.

## Les services d'aide fiscale gratuits pour les étudiants

L'association Uni'Vers Impôts, active dans de nombreuses universités françaises, propose de l'aide gratuite pour la déclaration de revenus des étudiants, réalisée par des étudiants d'IUT et de BTS de comptabilité sous supervision professionnelle. Ce service, disponible pendant la période de déclaration (avril-juin), est une ressource précieuse pour les étudiants qui naviguent leur première déclaration.

Les centres communaux d'action sociale (CCAS) de nombreuses communes proposent également des permanences fiscales gratuites pour les personnes aux revenus modestes, dont les étudiants font souvent partie. Ces services sont généralement disponibles pendant les mois de mars à juin et peuvent accompagner les déclarations avec des situations particulières (revenus mixtes, situations internationales, déclarations à rattraper).
`;

// L3: 943 → ~+800 words
const EXT2_L3 = `
## La déclaration des revenus étrangers sur impots.gouv.fr

Pour les étudiants étrangers résidents fiscaux en France qui ont des revenus de sources étrangères, des formulaires spécifiques complètent la déclaration standard. Le formulaire 2047 ("Déclaration des revenus encaissés à l'étranger") est utilisé pour déclarer les revenus de source étrangère et calculer, si applicable, le crédit d'impôt ou l'exonération prévus par la convention fiscale.

Le remplissage du formulaire 2047 nécessite de connaître le type de revenus étrangers (salaires, pensions, revenus de capitaux, revenus immobiliers), le pays d'origine de ces revenus, et le montant en euros (après conversion au taux de change officiel). Le formulaire guide ensuite le déclarant selon la convention fiscale applicable pour déterminer si ces revenus ouvrent droit à un crédit d'impôt ou à une exonération totale en France.

## La déclaration des comptes bancaires étrangers : le formulaire 3916

Comme mentionné dans la leçon sur les étudiants étrangers, tout compte bancaire ouvert à l'étranger doit être déclaré via le formulaire 3916. Dans la déclaration en ligne, cette déclaration se fait via un onglet spécifique "Comtes et actifs détenus à l'étranger" accessible depuis l'interface de déclaration. Les informations à fournir incluent le pays où le compte est ouvert, le nom de la banque étrangère, le numéro du compte, et une indication sur l'utilisation du compte (actif, clos, inactif).

Cette déclaration est distincte et complémentaire à la déclaration de revenus étrangers sur le formulaire 2047. Elle est obligatoire même si le compte étranger ne génère aucun intérêt et même s'il est maintenu uniquement pour des raisons pratiques (accès aux fonds lors de séjours dans le pays d'origine pendant les vacances).

## La gestion des justificatifs en format numérique

L'administration fiscale française reconnaît les documents numériques comme justificatifs lors d'un contrôle. Les bulletins de salaire, attestations employeur, et relevés annuels en format PDF sont acceptés. Ces documents doivent avoir une valeur probante — un document numérique modifié ou illisible ne serait pas recevable.

Pour les documents étrangers (attestation d'une bourse étrangère, relevé d'un compte bancaire étranger), ils peuvent être en langue étrangère mais une traduction en français peut être demandée en cas de contrôle. Pour les documents émis dans des alphabets non latins (arabe, cyrillique, caractères asiatiques), une traduction certifiée peut être requise. Il est donc prudent de conserver des traductions de ses principaux documents étrangers dès leur réception.

## Le suivi de l'évolution de sa situation fiscale

La situation fiscale d'un étudiant évolue chaque année en fonction de ses revenus, de sa situation familiale, et des changements législatifs. Revoir sa situation fiscale chaque année est une bonne pratique qui permet de prendre les meilleures décisions (rattachement vs déclaration séparée, frais réels vs forfait, option pour le barème des capitaux mobiliers) en connaissance de cause.

Des alertes peuvent être mises en place dans l'espace particulier sur impots.gouv.fr pour être informé des dates limites de déclaration et des avis d'imposition disponibles. Garder à jour son profil dans l'espace particulier (adresse, situation familiale, coordonnées bancaires pour le remboursement éventuel) évite des complications lors du traitement des déclarations.

## L'utilisation de la messagerie sécurisée pour poser des questions

L'espace particulier sur impots.gouv.fr dispose d'une messagerie sécurisée permettant de poser des questions à l'administration fiscale. Cette messagerie est différente de la messagerie email ordinaire — les échanges via ce canal ont une valeur juridique et l'administration est obligée de répondre dans un délai raisonnable. Pour les questions sur la déclarabilité d'un revenu, le choix d'une case, ou l'interprétation d'une convention fiscale, la messagerie sécurisée est un outil précieux qui permet d'obtenir une réponse officielle.

La réponse de l'administration via la messagerie sécurisée peut même servir de documentation en cas de contrôle ultérieur — si le contribuable a agi conformément à l'interprétation donnée par l'administration, les pénalités peuvent être réduites ou annulées. Cette "protection du contribuable de bonne foi" est un mécanisme important pour sécuriser les décisions fiscales incertaines.
`;

// L4: 997 → ~+800 words
const EXT2_L4 = `
## Le crédit d'impôt pour la résidence principale et les étudiants locataires

Pour les étudiants qui paient un loyer pour leur résidence principale, certains dispositifs fiscaux peuvent réduire le coût net du logement. Bien qu'il n'existe pas de crédit d'impôt général pour les locataires, les étudiants bénéficient des APL (aides au logement de la CAF) qui sont calculées en partie sur la base des revenus déclarés aux impôts. Un avis d'imposition à jour est donc indirectement lié au montant des aides au logement.

Pour les étudiants domiciliés chez leurs parents, ceux-ci peuvent déduire de leur revenu imposable une pension alimentaire s'ils aident financièrement leur enfant. Cette déduction, soumise à des conditions et plafonds spécifiques, peut être plus avantageuse pour la famille qu'un simple rattachement au foyer fiscal, selon les situations. L'aide apportée doit être documentée et jugée "raisonnable" selon les conditions de vie de l'étudiant.

## Les implications fiscales de la colocation

La colocation est une forme d'hébergement très répandue parmi les étudiants. Du point de vue fiscal, chaque colocataire est traitement indépendant — il n'y a pas de foyer fiscal commun entre colocataires non mariés et non pacsés. Chacun déclare ses revenus séparément et sa situation personnelle ne dépend pas de celle de ses colocataires.

Si la colocation génère des revenus pour l'un des colocataires qui sous-loue une chambre (avec l'accord du propriétaire principal), ces revenus de sous-location doivent être déclarés. Pour la résidence principale, la sous-location d'une pièce est exonérée jusqu'à un certain plafond annuel de revenus. Au-delà, les revenus de sous-location sont imposables selon le régime des revenus fonciers.

## L'épargne retraite et les avantages fiscaux accessibles dès les études

Bien que la retraite puisse sembler lointaine pour un étudiant, certains produits d'épargne retraite offrent des avantages fiscaux immédiats. Le PER (Plan d'Épargne Retraite), créé par la loi PACTE en 2019, permet de déduire les versements de son revenu imposable dans certaines limites. Pour un étudiant avec des revenus modestes, cet avantage fiscal est limité car son imposition est déjà probablement nulle ou très faible.

Cependant, pour un étudiant-entrepreneur ou un alternant avec des revenus plus significatifs, commencer à alimenter un PER dès les études peut offrir un double avantage : économie d'impôt immédiate sur les versements et constitution précoce d'une épargne retraite avec l'effet des intérêts composés sur le long terme. La décision d'ouvrir un PER pendant les études mérite une réflexion personnalisée selon la situation fiscale et financière de chacun.

## Les règles de territorialité pour les revenus immobiliers des étudiants

Certains étudiants héritent de biens immobiliers ou en acquièrent pendant leurs études. Les revenus locatifs générés par ces biens sont soumis à l'impôt sur le revenu français s'ils sont situés en France, quelle que soit la résidence fiscale du propriétaire. Pour un étudiant étranger résident fiscal en France qui possède un bien immobilier dans son pays d'origine, les revenus locatifs de ce bien sont déclarés selon les règles de la convention fiscale applicable.

Le régime micro-foncier (pour les revenus locatifs inférieurs à 15 000 euros par an) offre un abattement forfaitaire de 30% sur les revenus bruts pour couvrir les charges de gestion, sans obligation de justifier chaque charge. Ce régime simplifié est souvent adapté aux étudiants-propriétaires avec un bien locatif simple. Pour les revenus supérieurs à ce seuil ou lorsque les charges réelles dépassent 30%, le régime réel permet de déduire les charges effectives.

## Le rescrit fiscal : obtenir une position officielle de l'administration

Pour les situations fiscales particulièrement complexes ou incertaines, le "rescrit fiscal" est un mécanisme permettant d'obtenir une prise de position officielle et opposable de l'administration fiscale sur une situation spécifique avant de la mettre en œuvre. Pour un étudiant dans une situation fiscale complexe (revenus mixtes français et étrangers, bourse de nature incertaine, activité entrepreneuriale), un rescrit fiscal peut sécuriser la déclaration.

La demande de rescrit fiscal se fait par courrier recommandé au directeur des services fiscaux compétent, en décrivant précisément la situation et en posant une question précise sur l'application d'une règle fiscale. L'administration dispose de 3 mois pour répondre. Si aucune réponse n'est apportée dans ce délai, la position de l'administration est considérée comme tacitement acquise. Cette procédure est gratuite et sans risque pour le contribuable.
`;

// L5: 1009 → ~+800 words
const EXT2_L5 = `
## Les erreurs dans la déclaration des revenus étrangers

La déclaration des revenus étrangers est une source d'erreurs particulièrement fréquente. La première confusion courante est entre revenus bruts et revenus nets : certains pays retiennent l'équivalent de cotisations sociales à la source sur les revenus versés. La France demande généralement de déclarer le revenu brut (avant retenues étrangères) et offre un crédit d'impôt ou une exonération pour éviter la double imposition.

Omettre de remplir le formulaire 2047 pour des revenus étrangers, même exonérés en France par convention, peut entraîner des demandes de renseignement de l'administration. La bonne pratique est de déclarer systématiquement tous les revenus étrangers dans les formulaires appropriés, en indiquant clairement leur origine et le traitement conventionnel applicable.

La conversion en euros doit utiliser le taux de change officiel à la date de perception ou le taux moyen annuel publié par la Banque de France. Utiliser un taux de change commercial ou un taux de change approximatif peut créer des écarts qui seront questionnés lors d'un contrôle.

## Les conséquences d'une déclaration inexacte ou frauduleuse

Il est important de distinguer l'erreur de bonne foi de la fraude fiscale délibérée. Une erreur de bonne foi (oubli involontaire, incompréhension d'une règle fiscale) est sanctionnée par une majoration de 10% de l'impôt supplémentaire dû, avec possibilité de remise si la situation est régularisée rapidement et si les erreurs ne sont pas répétées. Les pénalités d'intérêt de retard (0,20% par mois de retard) s'ajoutent à cette majoration.

La fraude fiscale délibérée (dissimulation intentionnelle de revenus, faux documents) est beaucoup plus sévèrement sanctionnée : majorations de 40% à 80% de l'impôt éludé, voire 100% en cas de manœuvres frauduleuses, sans compter les poursuites pénales possibles. Pour un étudiant, la fraude fiscale peut avoir des conséquences sur son titre de séjour, son accès aux aides sociales, et sa réputation professionnelle future.

## L'intérêt d'un expert-comptable ou d'un conseiller fiscal

Pour les situations fiscales complexes, faire appel à un professionnel peut être un investissement judicieux. Un expert-comptable ou un conseiller fiscal peut optimiser légalement la situation fiscale, éviter des erreurs coûteuses, et sécuriser les décisions dans des zones d'incertitude. Les honoraires d'un professionnel peuvent d'ailleurs être déductibles des revenus sous certaines conditions (frais réels professionnels ou charges déductibles selon les cas).

Pour les étudiants avec des revenus simples, le recours à un professionnel n'est généralement pas nécessaire. Mais pour les étudiants-entrepreneurs, les étudiants avec des revenus étrangers significatifs, ou les étudiants-propriétaires, le coût d'une consultation fiscale peut être largement compensé par les économies d'impôt réalisées et les pénalités évitées.

## La vigilance face aux escroqueries fiscales

La période de déclaration de revenus est propice aux escroqueries. Des emails frauduleux imitant les communications de l'administration fiscale peuvent demander des informations personnelles ou bancaires sous prétexte de régularisation fiscale ou de remboursement d'impôt. L'administration fiscale française ne demande jamais les informations bancaires ou les mots de passe par email.

Pour vérifier l'authenticité d'une communication fiscale, la règle est simple : toutes les communications officielles de l'administration fiscale sont accessibles dans l'espace particulier sur impots.gouv.fr. Tout email qui demande une action urgente avec des informations personnelles ou bancaires est suspect. En cas de doute, contacter directement le centre des finances publiques par téléphone ou en se rendant physiquement à guichet.

## La déclaration des années passées non déclarées

Pour les étudiants qui ont omis de déclarer leurs revenus lors d'années précédentes (généralement parce qu'ils ne savaient pas qu'ils devaient le faire), la régularisation spontanée est toujours possible et préférable à une découverte par l'administration. La déclaration volontaire des années non déclarées se fait via l'espace particulier sur impots.gouv.fr pour les 3 dernières années (délai de prescription) ou, pour les années plus anciennes, via une réclamation auprès du service des impôts.

Pour les années où aucun impôt n'était dû (revenus exonérés ou sous le seuil d'imposition), la régularisation n'entraîne aucune pénalité financière mais permet de remettre à jour le dossier fiscal. Pour les années où un impôt était effectivement dû et non payé, les intérêts de retard s'appliquent mais les majorations sont limitées si la déclaration est spontanée et si aucune mise en demeure n'a été émise.
`;

// L6: 1059 → ~+800 words
const EXT2_L6 = `
## La transition de l'apprentissage vers l'emploi permanent : implications fiscales

La transition d'un contrat d'apprentissage ou d'alternance vers un emploi permanent entraîne des changements fiscaux importants. Les revenus d'emploi permanent ne bénéficient pas de l'exonération spécifique à l'apprentissage. Dès la première année d'emploi permanent, les revenus sont entièrement soumis aux règles standard du calcul de l'impôt sur le revenu.

Cette transition peut créer une aug mentation significative de l'impôt lors de la première année d'emploi, car les revenus augmentent souvent avec l'emploi permanent et les exonérations spécifiques disparaissent. Anticiper cette augmentation d'impôt et ne pas la confondre avec une erreur de l'administration est important. L'impôt calculé sur les revenus de la première année d'emploi reflète simplement le changement de statut et le régime fiscal de droit commun qui s'applique désormais.

## La fiscalité des primes et avantages hors salaire

Les primes versées dans le cadre d'un contrat de travail (prime d'apprentissage, prime de fin de contrat, prime d'intéressement) ont des règles fiscales variées. La prime d'apprentissage versée par certains employeurs en plus de la rémunération légale peut bénéficier de l'exonération si elle reste dans les limites de l'exonération globale des revenus d'apprentissage.

L'intéressement et la participation des salariés sont exonérés d'impôt sur le revenu s'ils sont placés sur un plan d'épargne salariale (PEE, PER collectif). S'ils sont versés directement sans placement sur un dispositif d'épargne, ils sont imposables. Pour les apprentis dans des entreprises qui ont des accords d'intéressement, comprendre ces règles peut représenter une optimisation fiscale non négligeable.

## Le statut de micro-entrepreneur pour les étudiants : déclaration et fiscalité

Le régime de la micro-entreprise (anciennement auto-entrepreneur) est très populaire parmi les étudiants qui souhaitent exercer une activité professionnelle complémentaire à leurs études. Ce régime simplifié permet d'exercer une activité commerciale ou de services avec des obligations administratives réduites.

Du point de vue fiscal, le micro-entrepreneur peut choisir entre l'imposition au barème progressif normal ou l'option du versement libératoire de l'impôt, qui consiste à payer l'impôt en pourcentage du chiffre d'affaires lors de chaque déclaration de revenus trimestrielle ou mensuelle. Le taux du versement libératoire varie de 1% à 2,2% du CA selon l'activité. Cette option n'est ouverte qu'aux micro-entrepreneurs dont le revenu fiscal de référence du foyer fiscal de l'avant-dernière année ne dépasse pas un certain plafond, ce qui est généralement le cas des étudiants.

## Les obligations de déclaration pour les micro-entrepreneurs étudiants

Le micro-entrepreneur étudiant doit déclarer son chiffre d'affaires à l'URSSAF via le portail autoentrepreneur.urssaf.fr, même si ce CA est nul. La déclaration est mensuelle ou trimestrielle selon le choix effectué à l'inscription. Le chiffre d'affaires déclaré à l'URSSAF est également repris dans la déclaration de revenus annuelle sur impots.gouv.fr dans la case correspondant aux BIC (bénéfices industriels et commerciaux) ou BNC (bénéfices non commerciaux).

L'abattement forfaitaire appliqué aux revenus de micro-entreprise (71% pour les activités commerciales, 50% pour les prestations de services commerciales, 34% pour les activités libérales) représente la déduction forfaitaire des charges professionnelles. Seul le résultat après abattement est pris en compte dans le revenu imposable de l'étudiant. Pour les micro-entrepreneurs avec peu de charges réelles, ce forfait peut être très avantageux.

## La gestion de la TVA pour les micro-entrepreneurs étudiants

Les micro-entrepreneurs bénéficient d'une franchise de TVA tant que leur chiffre d'affaires reste en dessous de certains seuils (85 800 euros pour les activités commerciales, 34 400 euros pour les prestations de services en 2024). En dessous de ces seuils, ils ne facturent pas de TVA à leurs clients et ne la récupèrent pas sur leurs achats.

Pour la grande majorité des étudiants-micro-entrepreneurs, ces seuils ne sont jamais atteints. Cette franchise de TVA simplifie considérablement la gestion et représente souvent un avantage concurrentiel (prix moins élevés pour les clients particuliers non assujettis à la TVA). Si par exception les seuils sont dépassés, le micro-entrepreneur devient assujetti à la TVA et doit effectuer des déclarations trimestrielles ou mensuelles supplémentaires — une transition administrative significative qui mérite anticipation.
`;

await appendAndPatch('55c0efdd-5e48-46e0-bdd1-f6223e3ba8e2', EXT2_L1);
await appendAndPatch('449fb117-48e3-45da-89af-7a75c6212c80', EXT2_L2);
await appendAndPatch('0242d07b-a407-4d13-9a58-3abfb2aa6728', EXT2_L3);
await appendAndPatch('a824e932-2924-4061-9a58-af1834373a0f', EXT2_L4);
await appendAndPatch('22b05575-9363-4fd1-bdef-96e12749c592', EXT2_L5);
await appendAndPatch('3defd352-b13a-4f5d-97cc-2d4f35e289f6', EXT2_L6);
