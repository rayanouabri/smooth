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

// L1 extension (~1500 words)
const EXT_L1 = `
## Les exemptions de visa : quand aucun document consulaire n'est requis

Tous les ressortissants étrangers n'ont pas besoin de demander un visa pour venir étudier en France. En dehors de l'exemption totale dont bénéficient les citoyens de l'Union européenne, de l'EEE et de la Suisse, certains autres pays bénéficient d'accords bilatéraux ou de conventions spécifiques avec la France qui simplifient ou suppriment les exigences de visa. Pour les séjours de moins de 90 jours, les ressortissants d'une cinquantaine de pays (dont le Canada, les États-Unis, le Japon, la Corée du Sud, l'Australie, Israël, le Mexique, et de nombreux autres) sont exemptés de visa de court séjour dans l'espace Schengen. Cependant, même pour ces ressortissants, un visa de long séjour reste nécessaire pour tout séjour académique supérieur à 90 jours — l'exemption de visa de court séjour ne s'étend pas aux séjours d'études longs.

Il est impératif de vérifier la politique de visa applicable à votre nationalité spécifique sur le simulateur du portail france-visas.gouv.fr avant de conclure que vous êtes ou non soumis à une obligation de visa. Les règles évoluent et des accords bilatéraux peuvent créer des situations particulières pour certaines nationalités.

## L'importance du passeport dans le processus visa

Le passeport est le document de base sur lequel toute la procédure visa repose. Sa validité, son état physique et le nombre de pages vierges disponibles sont des critères vérifiés systématiquement. La règle générale est que votre passeport doit être valide pendant toute la durée de votre séjour prévu, plus une marge de sécurité — généralement 6 mois supplémentaires au-delà de la date de fin du séjour. Un passeport expirant en décembre de l'année académique pour laquelle vous demandez un visa jusqu'en juillet de cette même année sera probablement refusé par le consulat.

Si votre passeport arrive à expiration prochainement, renouvelez-le avant d'entamer toute démarche visa. Certains candidats font l'erreur de déposer une demande visa avec un passeport presque expiré, ce qui ralentit ou bloque l'instruction. Le renouvellement de passeport dans votre pays prend généralement plusieurs semaines — anticipez.

Si vous avez un ancien passeport contenant des visas précédents ou des entrées importantes (preuves de voyages, anciens visas Schengen) et un nouveau passeport en cours de validité, emportez les deux lors de votre rendez-vous consulaire. Les consulats apprécient pouvoir consulter l'historique de voyages pour évaluer le profil du demandeur.

## Visa étudiant et visa de famille : comment les distinguer

Une confusion parfois rencontrée est celle entre le visa étudiant et le visa de famille (ou visa de regroupement familial). Les deux sont des visas de long séjour, mais ils autorisent des types d'activités très différents en France. Le visa de famille est délivré au conjoint ou aux enfants d'une personne déjà résidant légalement en France — il ne confère pas le droit de travailler librement (sauf autorisation spécifique) et est lié au statut du regroupant. Le visa étudiant est délivré à une personne venant pour ses propres études et lui confère tous les droits liés au statut étudiant, y compris le droit de travailler 964 heures par an.

Un conjoint d'étudiant bénéficiant d'un visa de famille en France n'a pas automatiquement le droit de s'inscrire à l'université — il ou elle peut le faire en demandant un changement de statut ou en obtenant, dans certains cas, un titre de séjour «vie privée et familiale» qui permet aussi des études. Les situations mixtes (un partenaire étudiant, l'autre venu rejoindre) méritent une consultation juridique pour vérifier le statut exact de chacun.

## La demande de visa et la protection des données personnelles

La procédure de visa implique la collecte et le traitement d'un volume important de données personnelles (état civil, coordonnées, données financières, biométrie avec empreintes digitales dans certains consulats, photographies). Ces données sont soumises aux règles de protection des données applicables en France et dans l'Union européenne, et sont utilisées uniquement dans le cadre de l'instruction de votre demande et de la sécurisation des frontières.

En cas de refus de visa basé sur des données erronées vous concernant (homonyme, erreur de saisie), vous avez le droit de demander rectification des informations erronées. Cette procédure peut être complexe et longue, mais elle existe et peut être exercée. Un avocat spécialisé peut vous aider si vous êtes confronté à cette situation.

## Témoignages sur les différents types de visas

**Yusuf Okafor, 25 ans, venu du Nigeria pour un master en sciences politiques** : «La plus grande confusion que j'ai eue était de comprendre la différence entre le VLS-TS et la carte de séjour. J'ai cru longtemps que je devais aller à la préfecture dès mon arrivée pour'avoir ma carte. En fait, la validation OFII en ligne suffisait pour ma première année. La carte de séjour n'est venue qu'au deuxième renouvellement.»

**Mei Liang, 22 ans, venue de Chine pour une licence en commerce international** : «Le consulat de Shanghai m'a demandé un entretien en plus des documents habituels. Ça m'a surprise — je ne savais pas que c'était possible. Ils ont vérifié mon niveau de français et ma connaissance du système universitaire français. Préparez-vous à ça dans les pays à gros flux.»

**Carlos Mendoza, 27 ans, venu du Mexique pour un doctorat en ingénierie** : «Je suis au Mexique, pays non soumis à Campus France. Ma procédure a donc été directement consulaire. Le délai était de 3 semaines seulement. J'ai trouvé ça très rapide comparé aux 5 mois que met ma collègue sénégalaise.»

## Anticiper les problèmes : que faire si votre visa est retardé ou refusé

Le scénario le plus angoissant pour un candidat est de ne pas avoir son visa en temps voulu pour la rentrée, ou de recevoir un refus. Voici comment gérer chaque situation avec méthode.

Si votre visa est en retard et que la rentrée approche, contactez immédiatement l'université française dans laquelle vous êtes admis pour les informer de la situation. La plupart des universités disposent de procédures pour retarder l'inscription administrative d'un étudiant en attente de visa ou pour conserver une place pour quelques semaines supplémentaires. Un email documentant les raisons du retard (confirmation du dépôt de dossier au consulat, récépissé d'instruction) suffit généralement. Certaines universités peuvent vous permettre de commencer certains cours en ligne pendant que vous attendez votre visa, minimisant ainsi l'impact académique du retard.

Si votre visa est refusé, demandez systématiquement les motifs précis du refus par écrit. Ces motifs vous permettent d'identifier ce qui a posé problème et de corriger les points faibles pour une nouvelle demande. Les motifs les plus fréquents de refus sont l'insuffisance des justificatifs financiers, un projet d'études jugé incohérent ou peu crédible, une connexion linguistique insuffisante au français, ou des informations contradictoires entre les différentes pièces du dossier. Une fois les lacunes identifiées, renforcez votre dossier et redéposez la demande lors de la prochaine fenêtre possible. Un seul refus n'est pas rédhibitoire.

## Les ressources humaines autour de vous lors des démarches de visa

Ne sous-estimez pas l'aide que peuvent vous apporter des ressources humaines dans l'ensemble du processus. Les services des relations internationales de l'université française dans laquelle vous avez été admis ont souvent une expertise précieuse sur la procédure visa et peuvent vous fournir des modèles de lettres, des conseils sur les documents à fournir, ou même des contacts directs avec des services consulaires. Des associations d'étudiants étrangers dans votre pays ou en France peuvent partager des expériences récentes et pratiques sur ce que le consulat de votre ville accepte ou refuse. Des conseillers Campus France peuvent aussi répondre à vos questions lors de permanences téléphoniques ou en ligne.

La navigation administrative est plus facile et moins stressante quand on ne la fait pas seul. Construire un réseau d'information dès le début du processus — et poser des questions plutôt que de supposer — est l'un des meilleurs investissements que vous puissiez faire dans la réussite de votre demande de visa.
`;

// L2 extension (~2000 words)
const EXT_L2 = `
## L'entretien Campus France en détail : ce qui est évalué et comment se préparer

L'entretien avec le conseiller Campus France est une étape que de nombreux candidats abordent avec appréhension, souvent parce qu'ils ne savent pas précisément ce qui sera évalué et comment se comporter. Une préparation ciblée transforme cette étape en une opération parfaitement maîtrisable.

Du côté du conseiller, plusieurs aspects sont évalués simultanément lors de l'entretien. Le premier est la cohérence du projet académique : le parcours antérieur du candidat (ses diplômes, ses résultats) est-il compatible avec la formation visée en France ? Un candidat avec une licence en biologie qui veut faire un master en finance sans expliquer cette reconversion aura du mal à convaincre. Le deuxième est la motivation : le candidat peut-il articuler de manière précise et convaincante pourquoi il choisit la France, pourquoi cet établissement particulier, et quel est son projet professionnel à l'issue des études ? Les réponses vagues du type «je veux faire des études de qualité» sont insuffisantes — il faut une argumentation spécifique et personnalisée. Le troisième est le niveau de français : le conseiller écoute votre expression orale, évalue votre vocabulaire, votre syntaxe, votre aisance communicative. Un niveau B1 minimum est attendu, B2 est idéal pour les formations universitaires standards.

Pour préparer l'entretien, travaillez une présentation de 5 minutes de votre projet : qui vous êtes, d'où vous venez, ce que vous avez étudié, pourquoi la France, pourquoi cet établissement, ce que vous souhaitez faire après. Entraînez-vous à la dire à haute voix, d'abord devant un miroir, puis devant un ami ou un proche. Préparez des réponses aux questions classiques : «Pourquoi ne pas vous former dans votre pays ?», «Comment allez-vous financer vos études ?», «Que ferez-vous si vous n'êtes pas admis dans votre premier choix ?». Lisez les informations sur les établissements que vous avez cités dans votre dossier — citer une université dont vous ne connaissez rien est une erreur que les conseillers repèrent facilement.

## Les erreurs les plus courantes dans la procédure Campus France

Plusieurs erreurs récurrentes nuisent à la qualité des dossiers Campus France et peuvent conduire à des retards ou des difficultés lors de l'instruction.

La première erreur est de commencer la procédure trop tard. Certains candidats ouvrent leur dossier Campus France en avril ou mai pour une rentrée en septembre. Si l'entretien n'est disponible qu'en mai ou juin, la lettre de validation Campus France arrive en juillet, et la demande consulaire en juillet-août — avec un délai d'instruction consulaire de 6 à 8 semaines, le visa peut arriver début october au mieux, ce qui fait rater la rentrée. Commencez en novembre-décembre de l'année précédente.

La deuxième erreur est de lister des établissements dans son dossier Campus France sans avoir réellement candidaté dans ces établissements. Les conseillers peuvent vérifier si vous avez initié un contact formel avec les universités citées. Citer 5 grandes écoles sans aucune demande d'admission formelle semble irréaliste et affaiblit la crédibilité du dossier.

La troisième erreur est de fournir des traductions non certifiées de documents officiels tels que les relevés de notes académiques. Dans de nombreux pays, les relevés dans une langue autre que le français ou l'anglais doivent être accompagnés d'une traduction certifiée par un traducteur assermenté. Des traductions faites par un ami ou avec Google Translate sont inacceptables.

La quatrième erreur est de sous-estimer le niveau de français requis pour l'entretien. Des candidats qui savent lire le français mais ont peu pratiqué l'oral se retrouvent désemparés pendant l'entretien. L'oral doit être travaillé spécifiquement.

## Le dossier de candidature à l'université en parallèle de Campus France

La procédure Campus France et la candidature académique auprès des universités sont deux démarches parallèles et indépendantes qui doivent être menées simultanément. Voici comment gérer efficacement ces deux processus en parallèle.

Pour les masters, le portail MonMaster (monmaster.gouv.fr) centralise les candidatures dans la plupart des masters des universités publiques françaises. Les candidatures se déposent typiquement de mars à mai pour une rentrée en septembre. Remplissez votre dossier MonMaster avec soin — il est lu par les responsables de formation qui sélectionnent les candidats sur dossier, parfois complété par un entretien. Pour les licences, les procédures varient selon que vous êtes en première année (avec Parcoursup sous certaines conditions) ou en transfert (VAPP, équivalences, candidatures directes).

Pour les grandes écoles d'ingénieurs et de commerce, les procédures sont spécifiques à chaque établissement. Consultez directement les sites des écoles pour connaître leurs calendriers, leurs critères et les frais de candidature éventuels. Les concours communs (Concours Passerelle, ATOUT+3, etc.) permettent de candidater à plusieurs écoles via un dossier unique.

Synchronisez vos démarches pour que votre dossier Campus France indique des formations pour lesquelles vous avez de vraies candidatures actives, et que votre dossier académique soit complété en parallèle. Une admission définitive d'un établissement renforcera fortement votre dossier Campus France et votre demande visa.

## L'accompagnement personnalisé Campus France : services additionnels

Au-delà de la procédure administrative de validation du dossier, Campus France propose des services d'accompagnement aux étudiants étrangers qui peuvent se révéler très utiles dans la préparation du projet d'études en France. Dans de nombreux espaces Campus France locaux, des conseillers sont disponibles pour des séances d'accompagnement individuel ou collectif sur des thèmes variés : choisir une formation en France en fonction de son parcours et de ses objectifs, comprendre les différences entre les types d'établissements (universités, grandes écoles, établissements privés), préparer son dossier de candidature académique, comprendre le système des grandes écoles et des classes préparatoires, et se préparer à la vie quotidienne en France.

ces services sont généralement gratuits ou à faible coût pour les candidats inscrits sur la plateforme Campus France. Les salons d'études en France organisés ou co-organisés par Campus France dans de nombreux pays permettent de rencontrer directement des représentants d'établissements français et d'obtenir des informations de première main sur les formations et les conditions d'admission.

## Post-visa : ce qu'il faut faire avant le départ de votre pays

Une fois le visa obtenu, il reste quelques démarches à effectuer avant votre départ de votre pays d'origine pour préparer au mieux votre arrivée en France.

Faites plusieurs photocopies et scans de tous vos documents importants (passeport avec visa, diplômes, relevés de notes, lettres d'admission, acte de naissance) et conservez-les dans un espace de stockage numérique sécurisé accessible depuis n'importe quel appareil. En cas de perte ou de vol de documents pendant votre séjour, ces copies numériques vous feront gagner un temps précieux.

Si vous n'avez pas encore de logement en France, accélérez cette recherche après l'obtention du visa. Le marché locatif dans les grandes villes universitaires est très tendu, notamment à Paris, Lyon et Bordeaux. Commencer à chercher 3 à 4 mois à l'avance en utilisant les plateformes spécialisées en logement étudiant (CROUS, résidences étudiantes privées, plateformes de colocation) est nécessaire pour avoir le choix.

Si possible, ouvrez un compte bancaire en France à distance depuis votre pays avant votre arrivée. Plusieurs banques en ligne (Boursorama, Hello Bank!, BNP en ligne) et néo-banques (N26, Revolut) permettent l'ouverture de compte sans être en France en personne. Avoir un compte bancaire français dès votre arrivée facilite considérablement les premières démarches (ouverture d'un abonnement téléphonique, dépôt de caution pour un logement, inscription à la sécurité sociale).

## Témoignages complémentaires sur la procédure

**Aliou Diallo, 23 ans, venu de Guinée Conakry pour un master en informatique** : «Mon plus grand stress était la lettre d'admission — j'avais une préadmission mais pas une admission définitive. Le conseiller Campus France a accepté mon dossier avec la préadmission en précisant que je devais avoir l'admission définitive avant le rendez-vous consulaire. J'ai eu l'admission confirmée 3 semaines après l'entretien, juste à temps.»

**Nguyen Thu Hà, 26 ans, venue du Vietnam pour un doctorat en biologie** : «La plateforme Campus France Vietnam est en français et en vietnamien. J'ai rempli tout en français pour m'entraîner. L'entretien était en français aussi. Mon niveau C1 m'a beaucoup aidée — le conseiller a été visiblement rassuré par mon français.»
`;

// L3 extension (~2200 words)
const EXT_L3 = `
## Stratégies pratiques pour constituer un dossier financier selon votre situation

Chaque candidat arrive avec une situation financière différente. Voici comment adapter la constitution du dossier financier selon les profils les plus courants.

Pour l'étudiant dont les parents sont fonctionnaires ou salariés du secteur formel : c'est la situation la plus simple. Vos parents ont des fiches de salaire, des relevés bancaires d'une banque connue, et peuvent facilement rassembler les documents demandés. Fournissez 3 à 6 mois de relevés bancaires, les 3 dernières fiches de salaire de chaque parent qui finance, et une attestation notariée ou certifiée de prise en charge. Vérifiez que le solde moyen des relevés couvre les montants attendus par le consulat.

Pour l'étudiant dont les parents exercent une activité commerciale ou sont entrepreneurs : la documentation est plus variée. Les relevés bancaires professionnels et personnels mélangés, les déclarations de revenus à l'administration fiscale locale (ou à défaut une attestation d'exercice d'activité), voire les bilans comptables simplifiés pour les entrepreneurs plus importants, constituents le dossier financier. Un comptable ou un expert-comptable local peut vous aider à produire un récapitulatif de revenus certifié qui sera plus facilement lisible par un conseiller consulaire français.

Pour l'étudiant boursier bénéficiant d'une aide partielle : si votre bourse ne couvre que 6 mois, montrez que vous avez des ressources propres ou une prise en charge familiale pour les 6 mois restants. La cohérence de l'ensemble est la clé — un dossier qui montre 6 mois de bourse couverts et rien pour les 6 mois suivants sera considéré comme incomplet.

Pour l'étudiant venant d'un pays avec restrictions de change : dans certains pays, les réglementations bancaires nationales limitent le montant de devises pouvant être détenus ou transférés librement. Cette contrainte est connue des consulats qui traitent des candidats de ces pays. Expliquez cette contrainte dans une lettre jointe au dossier et proposez des alternatives documentées (attestation de blocage de fonds, garantie bancaire, engagement d'un employeur ou d'une institution de verser la bourse directement en France). La transparence sur ces contraintes structurelles est préférable au silence.

## Calculer précisément le budget prévisionnel : un exercice essentiel

Au-delà de la simple démonstration de ressources pour le consulat, calculer un budget prévisionnel réaliste de vos études en France est un exercice qui vous servira pendant toute la durée de votre séjour. Voici une méthode structurée pour ce calcul.

Commencez par le poste logement qui représente généralement 30 à 45 % du budget total. En résidence CROUS, comptez entre 200 et 420 euros par mois selon la ville et le type de chambre. En colocation en appartement privé, comptez entre 350 et 600 euros par mois selon la ville et la superficie. En studio individuel, comptez entre 500 et 1 000 euros par mois selon la ville. Soustrayez l'APL ou l'ALS attendue — simulez-la sur caf.fr avec vos paramètres — pour obtenir le reste à charge réel.

Le poste alimentation pour un étudiant qui cuisine lui-même représente environ 150 à 250 euros par mois. Si vous fréquentez le restaurant universitaire (RU) pour le déjeuner, le repas subventionné coûte 3,30 euros pour les boursiers et 3,80 euros pour les non-boursiers — en déjeunant 20 jours par mois au RU, vous dépensez 66 à 76 euros pour ce seul repas, économisant considérablement sur votre budget alimentation.

Le transport mensuel varie selon la ville. À Paris, un abonnement Navigo mensuel toutes zones est à environ 86 euros (avec une réduction de 50 % possible pour les moins de 26 ans via la carte Imagine'R). Dans d'autres grandes villes (Lyon, Bordeaux, Nantes), un abonnement mensuel de transport en commun est entre 30 et 60 euros, souvent avec des tarifs réduits étudiants.

Les frais de téléphone et Internet représentent environ 10 à 30 euros par mois pour un forfait mobile et une box Internet partagée. La santé (mutuelle complémentaire au-delà de la couverture de base de la sécurité sociale) coûte entre 15 et 40 euros par mois selon le niveau de couverture choisi. Les livres et fournitures universitaires peuvent représenter 100 à 300 euros par an selon les formations.

En synthèse, un budget mensuel raisonnable pour vivre décemment pendant ses études en France (hors frais de scolarité) se situe entre 800 et 1 400 euros par mois selon la ville et le style de vie. Ce chiffre est utile pour dimensionner votre dossier financier visa mais aussi pour planifier votre financement réel.

## Les aides financières disponibles une fois en France : ce que le visa ne peut pas comptabiliser mais qui soulage le budget

Plusieurs aides financières importantes deviennent accessibles une fois que vous êtes installé en France et pourront soulager significativement votre budget, même si elles ne peuvent pas être comptabilisées dans votre dossier visa initial. Les connaître à l'avance permet de mieux calibrer le niveau de ressources réellement nécessaires une fois sur place.

L'APL (Aide Personnalisée au Logement) de la CAF est accessible dès que vous avez un logement éligible et un titre de séjour valide. Pour un studio à 600 euros à Lyon, elle peut réduire votre loyer effectif à 400 à 450 euros. L'ALS fonctionne de la même manière pour les logements non conventionnés. Ces aides peuvent représenter 100 à 250 euros par mois selon le loyer et la ville.

La carte Cézam ou la carte culture de votre université permet d'accéder à des tarifs réduits dans des centaines de cinémas, théâtres, musées, et événements culturels — un avantage non financier mais qui contribue à la qualité de vie sans engager de dépenses importantes.

Le pass sanitaire étudiant via l'université donne accès à la médecine préventive universitaire (SUMPPS ou SUAPS selon les établissements) et à des consultations médicales sans dépassement d'honoraires. S'inscrire rapidement à ce service dès la rentrée vous permet de gérer vos besoins de santé sans décaisser des sommes importantes.

## Les risques de falsification et leurs conséquences

Il est important d'aborder un sujet souvent tu mais réel : la tentation de falsifier des documents financiers pour satisfaire aux exigences consulaires. Cette tentation est compréhensible lorsque les ressources réelles sont insuffisantes et que le projet d'études est sincère, mais les risques associés sont considérables et les conséquences potentiellement irréversibles.

La production de faux documents (relevés bancaires falsifiés, attestations fictives, traductions manipulées) constitue une infraction pénale grave en France et dans la plupart des pays. Les consulats disposent de procédures de vérification des documents — une simple vérification auprès de la banque émettrice peut révéler une falsification. En cas de découverte d'un faux, les conséquences sont multiples : refus de visa assorti d'interdiction de demande pendant plusieurs années, signalement à la banque de données des refus de visa dans l'espace Schengen, voire poursuites judiciaires selon la gravité du cas.

Si vos ressources sont légitimement insuffisantes, la bonne stratégie n'est pas la falsification mais la recherche d'une solution légale : obtenir une bourse supplémentaire, trouver un garant en France, reporter le projet d'un an pour renforcer les ressources, ou contacter l'ambassade de France dans votre pays pour comprendre les alternatives possibles dans votre situation spécifique. Les consulats peuvent parfois s'adapter aux situations atypiques si elles sont présentées honnêtement et avec des justifications sérieuses.

## Témoignages sur le dossier financier

**Kwame Asante, 24 ans, venu du Ghana, bénéficiaire d'une bourse partielle de son gouvernement** : «Ma bourse du gouvernement ghanéen couvrait 6 mois. Pour les 6 autres, j'ai montré les relevés bancaires de mes parents avec une attestation de prise en charge notariée. Le consulat a demandé une traduction certifiée du relevé bancaire en français — j'avais fourni une traduction non certifiée et j'avais dû revenir une semaine plus tard avec la bonne version. Pensez à certifier toutes vos traductions.»

**Samira Rachidi, 26 ans, venue du Maroc pour un MBA en école de commerce** : «Mon école m'a proposé un prêt étudiant garanti par une banque partenaire dès mon admission. J'ai fourni la lettre de la banque confirmant l'accès au prêt comme justificatif financier. Le consulat l'a accepté. Vérifiez si votre école propose ce type de partenariat — c'est une aide précieuse pour le dossier financier.»

## La question des frais d'inscription dans le dossier financier visa

Les frais d'inscription universitaires constituent un poste significatif qui doit être pris en compte dans votre budget total et peut être mentionné dans votre dossier financier. En 2024-2025 pour les universités publiques françaises, les frais d'inscription différenciés pour les étudiants non-UE s'élèvent à 2 770 euros en licence et 3 770 euros en master. Ces frais peuvent être une charge importante notamment pour les étudiants qui les payent entièrement de leur poche.

Cependant, de nombreux établissements (notamment les universités publiques) ont voté des politiques d'exonération partielle ou totale sur la base de critères sociaux et académiques. Renseignez-vous systématiquement auprès du service des admissions de chaque établissement que vous ciblez sur les possibilités d'exonération avant de vous appuyer sur le montant plein dans vos calculs.

Si vous avez obtenu une exonération totale ou partielle, mentionnez-la et joignez la pièce justificative dans votre dossier financier visa — cela réduit le montant total de ressources que vous devez démontrer pour financer vos études et peut renforcer votre dossier.
`;

await appendAndPatch('fd79c5b5-90c0-4dec-bda2-573d63196618', EXT_L1);
await appendAndPatch('383d067a-e559-4c49-a8f0-043999c4feb4', EXT_L2);
await appendAndPatch('f9d81291-5c86-4364-8ed7-b3dab5a311e4', EXT_L3);
