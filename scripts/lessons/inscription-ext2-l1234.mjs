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

const ADD2_L1 = `
## Les systèmes universitaires étrangers et leur reconnaissance en France

Comprendre comment les différents systèmes universitaires mondiaux sont perçus et reconnus en France aide à anticiper les étapes de la démarche d'équivalence et à préparer son dossier de façon appropriée. Les systèmes anglo-saxons (Royaume-Uni, États-Unis, Canada, Australie) sont généralement bien connus des services français de reconnaissance et leurs diplômes font l'objet d'équivalences rapides : un Bachelor de trois ou quatre ans d'une université britannique ou américaine accréditée est reconnu comme équivalent d'une licence française, un Master of Arts ou Master of Science corresponds au master français, un PhD au doctorat.

Les systèmes d'Afrique subsaharienne francophone, historiquement calqués sur le système français par héritage colonial, présentent une situation particulière. Les diplômes des universités publiques des pays comme le Sénégal, la Côte d'Ivoire, le Cameroun ou le Congo portent des appellations françaises (licence, master, doctorat) et sont organisés selon le modèle LMD depuis les années 2000, ce qui facilite leur reconnaissance en principe. En pratique, la qualité des établissements varie très significativement, et les universités françaises exercent un jugement différencié selon la réputation de l'établissement d'origine dans le pays. Un diplôme de l'Université Cheikh Anta Diop de Dakar (l'une des universités les plus cotées d'Afrique de l'Ouest) sera perçu différemment d'un diplôme d'un établissement privé moins établi du même pays.

Les systèmes d'Asie du Sud et du Sud-Est (Inde, Pakistan, Bangladesh, Vietnam, Indonésie, Philippines) présentent une grande diversité selon les pays et les établissements : certaines universités d'excellence (IIT en Inde, Universidad de Filipinas) ont des programmes rigoureux dont les diplômes sont bien valorisés en France, tandis que d'autres établissements moins connus requièrent un examen plus attentif du dossier.

## Comment préparer sa demande d'attestation ENIC-NARIC

La demande d'attestation ENIC-NARIC s'effectue par voie postale ou, selon la période, via un formulaire en ligne sur le site de France Éducation International. Les documents à envoyer comprennent le formulaire de demande dûment rempli, les copies légalisées ou apostillées de vos diplômes, les relevés de notes, et les justificatifs d'identité. La demande est payante (frais de dossier de l'ordre de 70 euros en 2024) et non remboursable en cas de réponse défavorable.

L'attestation délivrée précise le niveau de reconnaissance : « niveau licence », « niveau master 1 », « niveau master 2 » ou « niveau doctorat ». Cette attestation a une durée de validité indéfinie — une fois obtenue, elle peut être utilisée pour toutes vos candidatures ultérieures en France. Il est donc judicieux de demander plusieurs exemplaires certifiés conformes lors de la délivrance, pour pouvoir en envoyer des copies à différents établissements sans révéler l'original à chaque fois.

## Les erreurs à éviter dans les démarches d'équivalence

Plusieurs erreurs récurrentes pénalisent les candidats dans leurs démarches d'équivalence. La première est de confondre reconnaissance académique et reconnaissance professionnelle — un médecin étranger dont le diplôme est académiquement reconnu comme équivalent d'un doctorat français n'est pas pour autant autorisé à exercer la médecine en France sans passer par la procédure spécifique de reconnaissance professionnelle de l'Ordre des médecins. Ces deux démarches sont parallèles et distinctes.

La deuxième erreur est d'attendre d'avoir reçu l'attestation ENIC-NARIC pour candidater dans les établissements, alors qu'on peut candidater en mentionnant la demande en cours et en s'engageant à fournir l'attestation dès réception. De nombreux établissements acceptent des candidatures conditionnelles et s'engagent de leur côté sur une admission sous réserve de confirmation du niveau par l'attestation.

La troisième erreur est de sous-estimer la diversité des procédures selon les disciplines. En droit, les reconnaissances sont particulièrement complexes car le droit est par nature national — les connaissances acquises dans un système juridique étranger ne sont pas directement transférables au droit français. Un étudiant en droit formé à l'étranger souhaitant exercer en France comme avocat ou magistrat fait face à des exigences bien plus complexes qu'un étudiant en sciences ou en lettres.
`;

const ADD2_L2 = `
## Les finances étudiantes et les aides spécifiques aux internationaux

Au-delà des droits d'inscription proprement dits, le financement des études en France pour un étudiant international implique de naviguer dans un système complexe d'aides qui combine des sources publiques françaises, des aides gouvernementales du pays d'origine, et des bourses d'institutions internationales. La maîtrise de ce paysage financier est une compétence qui peut significativement réduire le coût total des études et améliorer les conditions de vie et de travail académique.

Les bourses d'excellence du gouvernement français, gérées par Campus France, constituent la source de financement la plus directe. Elles couvrent les droits d'inscription (au tarif national), une allocation mensuelle (généralement entre 800 et 1200 euros selon le niveau d'études) et parfois les frais de voyage aller-retour. Ces bourses sont attribuées par les ambassades françaises dans le pays d'origine sur des critères d'excellence académique et de cohérence du projet. Leur attribution est compétitive et il faudra les demander plusieurs mois avant l'arrivée en France, idéalement 12 à 18 mois à l'avance pour les candidatures les plus anticipées.

Les bourses Erasmus+, dans leur dimension inter-établissements, permettent à des étudiants d'établissements partenaires d'universités françaises de venir en France avec un financement mensuel (400 à 700 euros selon le pays d'origine). Ces bourses s'inscrivent dans le cadre de conventions bilatérales entre universités et ne sont accessibles qu'aux étudiants inscrits dans des universités partenaires. Les candidatures se font via le bureau des Relations Internationales de l'université d'origine.

## Les implications fiscales pour les étudiants étrangers en France

Un aspect souvent méconnu du financement des études en France est la question fiscale. Les étudiants étrangers en France peuvent, sous certaines conditions, être redevables de l'impôt sur le revenu français — notamment s'ils perçoivent des revenus locaux (job étudiant, contrat d'apprentissage, bourse imposable). La France a signé des conventions fiscales bilatérales avec la plupart des pays permettant d'éviter la double imposition, mais les modalités varient selon les pays et les types de revenus.

La règle générale de la résidence fiscale s'applique : si vous vivez en France pendant plus de 183 jours dans l'année fiscale (1er janvier au 31 décembre), vous êtes considéré comme résident fiscal français et soumis à la déclaration de revenus française pour l'ensemble de vos revenus mondiaux. En pratique, les étudiants qui ne travaillent pas et ne perçoivent que des bourses non imposables ont rarement des obligations fiscales significatives, mais la situation mérite d'être vérifiée avec le service des impôts ou un conseiller fiscal si vous percevez des revenus d'activité.

## Les comptes bancaires et la gestion financière en France

L'ouverture d'un compte bancaire en France est l'une des premières démarches pratiques à effectuer à l'arrivée, et elle conditionne de nombreuses autres démarches : versement de l'APL, virement du loyer, paiement des frais d'inscription par virement, domiciliation des aides. Les banques traditionnelles (BNP Paribas, Société Générale, Crédit Agricole) proposent des offres spécifiques pour étudiants avec des frais réduits ou nuls, mais exigent un rendez-vous en agence et un dossier documentaire comprenant passeport, titre de séjour, justificatif de domicile, et souvent un justificatif d'étudiant.

Les néobanques (Revolut, N26, Nickel) offrent une alternative plus rapide, avec une ouverture de compte entièrement en ligne en quelques minutes et sans rendez-vous. Ces comptes, bien que moins complets que les comptes bancaires traditionnels pour certains services (absence de chéquier notamment), sont souvent suffisants pour les besoins courants des étudiants et permettent d'avoir un compte dès les premiers jours suivant l'arrivée en France, avant d'avoir rassemblé tous les documents nécessaires à l'ouverture d'un compte traditionnel.

## Le système de protection sociale des étudiants étrangers

La protection sociale des étudiants étrangers en France a été reformée en 2019. Désormais, les étudiants sont affiliés au régime général de la Sécurité sociale via la CPAM (Caisse Primaire d'Assurance Maladie) et non plus via des mutuelles étudiantes dédiées. Cette réforme a simplifié les démarches d'affiliation et généralisé la couverture maladie de base à tous les étudiants inscrits dans un établissement français, qu'ils soient français ou étrangers.

L'affiliation se fait automatiquement lors de l'inscription universitaire pour la plupart des étudiants. Le numéro de Sécurité sociale provisoire est attribué dans les semaines suivant l'inscription et permet de se faire rembourser les frais médicaux dès les premiers mois de la présence en France. Un numéro définitif est attribué ultérieurement après traitement complet du dossier d'affiliation.
`;

const ADD2_L3 = `
## Le budget livres et matériel académique

Le budget alloué aux livres et au matériel académique est souvent sous-estimé par les étudiants qui préparent leur budget avant l'arrivée en France. En licence, les bibliographies des cours peuvent inclure plusieurs ouvrages de référence pour chaque matière, dont certains peuvent coûter 30 à 60 euros chacun. Pour un étudiant inscrit en 5 ou 6 matières par semestre, le budget livres peut rapidement atteindre 200 à 400 euros par semestre si tous les ouvrages sont achetés neufs.

Des stratégies d'optimisation permettent de réduire significativement ce poste. Les bibliothèques universitaires constituent la première ressource à exploiter : la plupart des ouvrages de référence sont disponibles en emprunt. L'achat de livres d'occasion (via les bourses aux livres organisées par les associations étudiantes en début d'année, les sites de vente de livres d'occasion comme Momox ou les groupes Facebook de vente entre étudiants) permet généralement d'obtenir les ouvrages requis à 50-70% de moins que le prix neuf. Les bibliothèques numériques en ligne, dont certaines sont accessibles gratuitement via l'ENT, offrent également des versions numériques de nombreux ouvrages académiques.

Le matériel informatique est un autre poste à budgéter. Un ordinateur portable de qualité suffisante pour les études (15 à 16 pouces, 8 Go de RAM minimum, SSD) est indispensable dans la quasi-totalité des formations universitaires françaises. Si vous n'en disposez pas déjà, un budget de 500 à 900 euros pour un modèle performant de milieu de gamme est raisonnable. Certaines universités proposent des prêts d'ordinateurs pour les étudiants les plus démunis ou dans des situations d'urgence.

## Les frais de transport et la mobilité étudiante

Les transports représentent un poste budgétaire variable selon la ville et l'organisation personnelle. Dans les grandes villes dotées d'un réseau de transport en commun dense (Paris, Lyon, Marseille, Bordeaux, Nantes), l'abonnement mensuel ou annuel au réseau de transport est la solution la plus économique. À Paris, le pass Navigo mensuel coûte 86,40 euros toutes zones et donne un accès illimité au métro, RER, bus et tramway de l'Île-de-France. Des tarifs réduits liés au statut étudiant sont disponibles dans la plupart des villes.

Le vélo urbain est une alternative très économique — un vélo d'occasion en bon état s'achète entre 80 et 200 euros et n'implique aucun coût mensuel récurrent hormis l'entretien. Dans les villes avec des pistes cyclables développées, le velo est souvent plus rapide que les transports en commun pour les trajets campus-logement et contribue au bien-être physique. Les vélos en libre-service (Vélib à Paris, Velo'v à Lyon) offrent une flexibilité maximale pour un abonnement de 30 à 50 euros par an.

## Comparatifs de coût de vie par ville universitaire

Le coût de vie varie significativement selon la ville universitaire, et ce facteur doit être intégré dans le choix de la formation lorsque plusieurs établissements proposent des formations comparables. Paris est sans conteste la ville la plus chère, avec un budget total mensuel (logement, alimentation, transports, divers) qui oscille entre 1 200 et 1 800 euros pour un étudiant vivant de façon économe. La région parisienne (villes de banlieue comme Évry, Cergy, Créteil, Versailles) est légèrement moins chère que Paris intra-muros tout en restant accessible via les transports en commun.

Les grandes métropoles régionales (Lyon, Marseille, Bordeaux, Toulouse, Nantes, Strasbourg) offrent un coût de vie intermédiaire, avec des budgets mensuels de 850 à 1 200 euros. Les petites et moyennes villes universitaires (Clermont-Ferrand, Poitiers, Amiens, Brest, Perpignan) permettent de vivre pour 700 à 1 000 euros par mois. Pour un étudiant dont les ressources sont contraintes, le choix d'établissements en région peut permettre de réduire le budget en euros constants tout en accédant à la même qualité de formation dans certaines disciplines.

## Gérer un budget étudiant : outils et bonnes pratiques

La gestion budgétaire est une compétence pratique que l'université n'enseigne généralement pas mais qui est essentielle pour traverser les années d'études sans se retrouver en difficulté financière. Un budget mensuel simple, segmenté en postes fixes (loyer, abonnements) et postes variables (alimentation, loisirs, divers), permet de visualiser ses dépenses et d'identifier les postes sur lesquels des économies sont possibles.

Les applications de gestion de budget (Bankin, Lydia Budget, Money Daddy) permettent de connecter son compte bancaire et de catégoriser automatiquement les dépenses, donnant une vue en temps réel de la situation financière. L'application régulière du principe d'épargne de précaution — mettre de côté chaque mois une somme fixe avant de dépenser le reste — crée progressivement un fonds d'urgence qui absorbe les imprévus sans déstabiliser le budget.
`;

const ADD2_L4 = `
## Les professions réglementées et la reconnaissance spécifique

La reconnaissance des diplômes pour l'accès aux professions réglementées est gouvernée par un cadre juridique spécifique distinct de la reconnaissance académique générale. En France, plusieurs professions sont dites « réglementées » car leur exercice est conditionné à la possession d'un diplôme ou d'une qualification spécifique vérifiée par une autorité compétente. Ces professions incluent les professions médicales et paramédicales (médecin, dentiste, pharmacien, infirmier, kinésithérapeute), les professions juridiques (avocat, notaire, huissier), les professions de l'ingénierie et de l'architecture, et les professions de l'enseignement public.

Pour chacune de ces professions, une procédure de reconnaissance spécifique existe, gérée non par ENIC-NARIC mais par l'autorité compétente pour la profession concernée : l'Ordre des médecins pour les médecins, l'Ordre des avocats pour les avocats, le ministère de la Culture pour les architectes, etc. Ces procédures évaluent non seulement le niveau de formation mais aussi la conformité du contenu de la formation aux exigences françaises de la profession — des domaines de compétence qui peuvent varier significativement d'un pays à l'autre.

## La validation des acquis professionnels dans le cadre de la reconnaissance

Pour les personnes qui ont exercé une profession réglementée dans leur pays d'origine pendant plusieurs années et qui font face à des obstacles dans la reconnaissance directe de leur diplôme, la Validation des Acquis Professionnels (VAP) représente une voie alternative. La VAP, distincte de la VAE, permet d'accéder à une formation en justifiant d'une expérience professionnelle suffisante en lieu et place du diplôme normalement requis. Elle est particulièrement utilisée pour l'accès aux formations professionnalisantes (BTS, BUT, certaines licences professionnelles) par des personnes avec une expérience significative mais pas le diplôme académique correspondant.

La procédure de VAP implique le dépôt d'un dossier démontrant que l'expérience professionnelle acquise est suffisamment proche des compétences visées par la formation pour justifier l'admission sans le diplôme standard. Ce dossier est examiné par une commission qui peut accepter, refuser ou accepter de façon partielle (avec obligation de valider certaines unités d'enseignement complémentaires). La VAP n'est pas applicable pour l'accès aux masters sélectifs dont la sélection repose sur l'excellence académique plutôt que sur les compétences professionnelles.

## L'accompagnement humain dans les démarches de reconnaissance

Les démarches administratives de reconnaissance de diplômes peuvent être déroutantes, longues et épuisantes, surtout pour les personnes qui les vivent dans une langue qui n'est pas leur langue maternelle. Il existe des ressources d'accompagnement humain que les candidats en difficulté ne mobilisent pas assez. Les Points Accueil Étudiants (PAE) présents dans les universités offrent un accompagnement individualisé pour toutes les démarches administratives, y compris les demandes d'équivalence. Les associations d'aide aux migrants et aux réfugiés (CIMADE, Singa, France Terre d'Asile) proposent également des accompagnements administratifs pour leurs publics.

Pour les étudiants réfugiés ou demandeurs d'asile, des dispositifs spécifiques ont été mis en place par certaines universités et par le réseau des Universités Accueillantes. Ces dispositifs proposent un accompagnement renforcé pour les démarches administratives, des cours de français académique, et parfois un soutien financier spécifique pour couvrir les frais de constitution du dossier d'équivalence.

## Erreurs fréquentes et leçons apprises

Les erreurs les plus courantes dans les démarches de reconnaissance de diplômes se répètent d'une année à l'autre auprès des services d'accueil des universités françaises. La première est l'arrivée sans document préparé : des étudiants arrivent en France en septembre en croyant pouvoir s'inscrire avec simplement leur diplôme original, sans traduction, sans apostille, sans aucune démarche préalable d'équivalence. Deux à trois mois de délais administratifs plus tard, l'inscription est enfin possible mais l'année académique est déjà entamée.

La deuxième erreur est la méconnaissance des exigences spécifiques selon la formation. Les conditions d'accès à une licence de médecine ne sont pas les mêmes que celles d'une licence de mathématiques ou d'une licence de langues. Certaines formations ont des prérequis très spécifiques en termes de disciplines étudiées antérieurement, de niveau de langue ou de tests d'aptitude. Une vérification soigneuse et précoce des conditions d'accès de chaque formation visée est indispensable avant d'investir du temps et de l'argent dans un dossier de candidature.
`;

await appendAndPatch('8b527cad-23d4-4e1c-8f92-3f7bcf297de0', ADD2_L1);
await appendAndPatch('c0029686-e225-452b-982f-a1cd524ed753', ADD2_L2);
await appendAndPatch('ee522c1c-cd2c-4de5-b984-fc77338212a7', ADD2_L3);
await appendAndPatch('92a088d5-fe7d-4026-b228-a6fc57ce5d2d', ADD2_L4);
