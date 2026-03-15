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
## L'histoire de la carte bancaire en France

La carte bancaire française a une histoire propre et originale. C'est en France qu'a été créé en 1967 le Groupement des Cartes Bancaires CB, un consortium interbancaire qui a mis en place le réseau partagé de cartes et de distributeurs automatiques de billets. Cette approche coopérative entre banques a permis une diffusion rapide des cartes et des DAB sur l'ensemble du territoire, bien avant que les réseaux internationaux Visa et Mastercard ne prennent leur importance actuelle en France.

Le réseau CB (Carte Bancaire) est le réseau de payments domestique français qui coexiste aujourd'hui avec les réseaux Visa et Mastercard. La grande majorité des cartes françaises portent à la fois le logo CB et le logo Visa ou Mastercard — CB pour les transactions domestiques françaises, et Visa ou Mastercard pour les transactions internationales. Cette dualité permet aux banques d'optimiser les frais d'interchange selon le réseau utilisé. Pour le consommateur, l'usage est transparent : la carte fonctionne dans les deux cas sans aucune différence visible.

## Les distributeurs automatiques de billets (DAB) et leur utilisation optimisée

Les distributeurs automatiques de billets (DAB) sont un équipement bancaire omniprésent en France, bien que leur nombre diminue progressivement avec la réduction des espèces dans les habitudes de paiement. En 2023, la France compte environ 50 000 DAB, essentiellement gérés par les banques traditionnelles. Les banques en ligne n'ont généralement pas leurs propres DAB — leurs clients utilisent ceux d'autres banques, parfois avec des frais.

Les meilleures pratiques pour optimiser l'utilisation des DAB : retirer des montants suffisamment importants pour réduire la fréquence des retraits (et donc les frais potentiels), utiliser les DAB de sa propre banque ou des banques partenaires pour éviter les commissions de retrait, et vérifier le réseau d'appartenance des DAB dans l'application de sa banque. Certaines applications bancaires incluent une fonctionnalité de localisation des DAB partenaires à proximité — une fonctionnalité utile quand on est en déplacement et qu'on cherche le DAB le moins coûteux à proximité.

## La protection par l'Autorité de contrôle prudentiel et de résolution (ACPR)

L'ACPR (Autorité de Contrôle Prudentiel et de Résolution) est le régulateur bancaire et assurantiel français, adossé à la Banque de France. Elle supervise la solidité financière de l'ensemble des établissements bancaires et d'assurance en France, vérifie leur conformité réglementaire, et peut prononcer des sanctions en cas de manquements. Son rôle de protecteur des clients est indirect : en garantissant la solidité et la conformité des établissements, elle protège les intérêts des déposants et assurés.

Pour les clients des banques, le rôle de l'ACPR se manifeste surtout en cas de défaillance d'un établissement. En cas de faillite d'une banque, c'est l'ACPR qui coordonne la résolution ordonnée et l'activation des fonds de garantie des dépôts. La liste des établissements autorisés à exercer des activités bancaires en France est publiée sur le site de l'ACPR — vérifier qu'une banque ou une néobanque figure dans cette liste est un geste de précaution élémentaire avant de lui confier ses finances.

## Les paiements peer-to-peer (P2P) et leur complémentarité avec la carte

Les paiements peer-to-peer (entre particuliers) ont connu une explosion avec les applications mobiles. Lydia, PayByBank (via les grandes banques), et les fonctionnalités intégrées dans les applications bancaires permettent de rembourser un ami en quelques secondes depuis son téléphone. Ces paiements P2P sont souvent basés sur des virements SEPA instantanés ou sur des portefeuilles numériques intermédiaires.

La carte bancaire reste l'outil principal pour les paiements chez les commerçants, mais les applications P2P sont devenues l'outil de choix pour les transactions entre particuliers : partage d'une note de restaurant, remboursement d'une course, participation aux charges communes d'une colocation. Pour les étudiants qui ont une vie sociale active et partagent régulièrement des dépenses avec leurs pairs, maîtriser ces applications P2P est aussi important que maîtriser l'usage de sa carte.
`;

const EXT3_L2 = `
## Le droit au compte et les banques qui refusent

Le droit au compte est un droit fondamental en France : toute personne résidant en France, quelle que soit sa situation financière, a le droit d'avoir un compte bancaire. Si une banque refuse l'ouverture d'un compte, la Banque de France peut être saisie et elle désigne alors d'office un établissement bancaire qui doit obligatoirement ouvrir un compte de base au demandeur. Ce compte de base inclut les services minimaux : compte de dépôt, carte de retrait (et non de paiement), quatre virements mensuels, et accès aux extraits de compte.

Pour les étudiants étrangers ou les personnes en situation précaire qui essuient des refus d'ouverture de compte, la procédure de droit au compte est la solution. La démarche consiste à obtenir une attestation de refus de la banque, puis à contacter la Banque de France par courrier ou via son site internet avec les pièces justificatives d'identité et de domicile. La Banque de France dispose d'un délai d'un jour ouvré pour désigner l'établissement bancaire, qui doit alors ouvrir le compte dans les trois jours ouvrés suivant la réception des documents. Ce mécanisme garantit l'inclusion bancaire de tous les résidents en France.

## L'accès aux services bancaires en zone rurale

La fermeture des agences bancaires dans les zones rurales est un phénomène préoccupant qui fragilise l'accès aux services financiers des populations les moins mobiles. Les banques traditionnelles ont rationalisé leur réseau en fermant les agences peu rentables, notamment dans les petites villes et villages. Cette désertification bancaire touche particulièrement les seniors et les personnes sans véhicule ou sans maîtrise des outils numériques.

Pour les étudiants issus de zones rurales qui reviennent au domicile familial pendant les vacances, la disponibilité d'une agence physique peut être un facteur dans le choix de la banque familiale. Les bureaux de poste, qui proposent des services bancaires via La Banque Postale, maintiennent une présence physique dans la plupart des communes françaises même celles où les banques privées ont fermé. Les distributeurs automatiques relais, installés dans les mairies, les supermarchés, et les pharmacies, palliallement le manque de DAB traditionnels dans certaines zones.

## La relation banque-commerçant et les commissions d'interchange

La compréhension du modèle économique des réseaux de paiement par carte aide à mieux appréhender le refus de certains commerçants d'accepter les paiements par carte. Chaque transaction par carte génère des commissions d'interchange — une fraction du montant de la transaction reversée par la banque du commerçant à la banque du client, via le réseau. Ces commissions, encadrées par la réglementation européenne à un taux maximum de 0,2% pour les cartes de débit et 0,3% pour les cartes de crédit, représentent un coût pour les commerçants.

Pour les petits commerçants avec des marges faibles, ces commissions peuvent représenter une part significative du bénéfice sur de petites transactions. C'est pourquoi certains commerçants fixent un montant minimum de transaction pour les paiements par carte (souvent 5 ou 10 euros), ou invitent les clients à payer en espèces pour les petits montants. Cette pratique est tolérée en France même si elle est légalement dans une zone grise. Pour les étudiants, avoir toujours un peu d'espèces sur soi reste une précaution pratique pour ces situations, même dans une société qui se dirige vers la dématérialisation des paiements.
`;

const EXT3_L3 = `
## L'audit de sécurité de ses pratiques de paiement

Effectuer un audit régulier de ses pratiques de sécurité liées à la carte est une bonne habitude. Voici les questions à se poser : ai-je changé mon code PIN récemment, ou utilise-je le même depuis des années ? Est-ce que je couvre toujours le clavier lorsque je saisis mon code dans un lieu public ? Est-ce que j'utilise une carte virtuelle ou une application de wallet pour mes achats en ligne ? Est-ce que je vérifie mes transactions au moins une fois par semaine ? Est-ce que je sais comment faire opposition rapidement si ma carte est volée ?

Répondre honnêtement à ces questions et corriger les pratiques défaillantes est un investissement de sécurité dont le coût est minimal mais le bénéfice potentiel considérable. La fraude à la carte bancaire représente des centaines de millions d'euros de pertes annuelles en France. La grande majorité de ces fraudes touchent des personnes qui n'avaient pas adopté les précautions de base.

## Le rôle de la carte bancaire dans la constitution d'une preuve de paiement

La trace bancaire générée par un paiement par carte constitue une preuve de paiement juridiquement solide. Contrairement aux espèces dont la transaction ne laisse aucune trace, un paiement par carte est enregistré avec la date, le montant, le nom du marchand et l'heure. Cette traçabilité est un avantage majeur dans les situations où un paiement peut être contesté : garant pour un bien loué non restitué, litige avec un prestataire sur le règlement d'une facture, ou preuve d'un engagement dans un contrat.

Pour les étudiants qui font des achats de seconde main (sur Vinted, LeBonCoin, ou en brocante), les paiements par carte ou par application bancaire (Lydia, PayPal) laissent une trace qui peut s'avérer utile en cas de litige. Payer en espèces pour ce type de transaction signifie perdre cette protection. Pour les achats importants entre particuliers dont la valeur dépasse quelques dizaines d'euros, utiliser un mode de paiement traçable est une précaution avisée.

## Les cartes bancaires et le formulaire de prise en charge médicale à l'étranger

L'assurance médicale incluse dans les cartes premium (Visa Premier, Mastercard Gold) est l'une des garanties les plus précieuses mais aussi l'une des moins bien connues. En cas d'hospitalisation ou de consultation médicale à l'étranger, la procédure pour activer cette garantie doit être suivie précisément pour être remboursé. Le numéro d'assistance internationale doit être appelé avant ou au moment de l'incident (et non après le retour en France pour les situations non urgentes).

L'assistance médicale peut prendre plusieurs formes : prise en charge directe des frais médicaux auprès de l'établissement de soin, avance des fonds nécessaires aux soins, et organisation du rapatriement médical si l'état de santé le requiert. Ces services fonctionnent uniquement si le voyage a été payé avec la carte concernée ou si des dispositions contractuelles spécifiques ont été respectées. Lire une fois la notice d'assurance de sa carte avant un voyage international est une précaution minimale qui peut avoir des conséquences cruciales dans une situation d'urgence médicale.
`;

const EXT3_L4 = `
## La carte et les micro-crédits instantanés

Les micro-crédits instantanés associés aux cartes bancaires sont une offre émergente qui permet d'obtenir un crédit ponctuel directement depuis l'application bancaire, sans dossier formel et avec une décision en quelques secondes. Ces micro-crédits, de quelques centaines à quelques milliers d'euros, sont proposés par certaines banques en ligne et néobanques en lien avec leurs données comportementales du client. Un client avec un historique de bonne gestion peut se voir proposer un accès instantané à un crédit à la consommation à des conditions avantageuses.

La praticité de ces offres est séduisante, mais les conditions financières méritent un examen attentif. Le taux d'intérêt appliqué à ces crédits instantanés est souvent supérieur aux crédits à la consommation classiques instruits via un dossier formel, en compensation de la rapidité et de la flexibilité offerte. Pour les besoins ponctuels urgents, ces micro-crédits sont plus avantageux que les découverts bancaires ou les crédits revolving des magasins. Mais pour des besoins récurrents ou pour financer des dépenses non urgentes, prendre le temps de comparer les offres de crédit formelles reste la meilleure pratique financière.

## La gestion de la fin de mois et les alternatives au découvert

La fin de mois difficile est une réalité courante pour beaucoup d'étudiants. Avant d'utiliser le découvert autorisé — qui génère des frais — plusieurs alternatives méritent d'être explorées. La vérification de toutes les dépenses prévues jusqu'au prochain versement de revenus permet de savoir si le découvert est vraiment inévitable ou si des ajustements sont possibles. Décaler certaines dépenses non urgentes (abonnements non essentiels, achats non indispensables) de quelques jours peut suffire à éviter le découvert.

Le virement depuis un compte d'épargne vers le compte courant est une autre option si une épargne de précaution a été constituée. La caisse d'épargne des étudiants (CEL, Livret A) peut être partiellement vidée temporairement pour passer la fin de mois et reconstituée dès le virement suivant. Cette utilisation du matelas de sécurité pour les urgences budgétaires est exactement sa vocation — beaucoup mieux que de payer des agios de découvert à la banque. La discipline de reconstituer l'épargne utilisée dès que les revenus arrivent est la clé pour maintenir ce filet de sécurité opérationnel sur le long terme.

## La déclaration des comptes bancaires étrangers associés à des cartes

Pour les étudiants qui ont ouvert des comptes bancaires à l'étranger — pour un semestre Erasmus, pour un stage dans un autre pays, ou simplement pour les avantages d'une néobanque domiciliée à l'étranger — il existe une obligation fiscale de déclarer ces comptes en France si on y est résident fiscal. Cette déclaration concerne tous les comptes étrangers, y compris les comptes associés à des cartes prépayées comme Revolut ou Wise, dès lors qu'ils peuvent recevoir ou conserver de l'argent.

Le formulaire 3916 joint à la déclaration de revenus annuelle est le support de cette déclaration. Elle est simple à remplir et ne génère aucune imposition supplémentaire sur les fonds détenus — elle sert uniquement à informer l'administration fiscale de l'existence de ces comptes et à permettre la vérification de la cohérence entre les fonds déclarés et les revenus déclarés. Ignorer cette obligation par méconnaissance peut entraîner des pénalités lors d'un contrôle fiscal, même si les fonds détenus à l'étranger sont parfaitement réguliers.
`;

const EXT3_L5 = `
## L'assurance protection juridique et les litiges liés à la carte

Certaines cartes bancaires premium incluent une protection juridique — une assurance qui permet d'accéder à un service d'information juridique téléphonique et qui peut prise en charge les frais d'avocat dans certains litiges. Cette protection peut être utile dans des litiges liés aux achats effectués par carte : article non conforme non remboursé par un commerçant, prestation de service not réalisée malgré le paiement, vacances non conformes à la description.

Pour activer cette protection juridique, il faut généralement contacter l'assureur (dont le numéro figure dans la notice de la carte) en précisant la nature du litige et les montants en jeu. L'assureur évalue si le litige entre dans le cadre de la garantie et, si c'est le cas, oriente vers un conseil juridique ou prend en charge les frais de représentation. Cette garantie est particulièrement utile pour les litiges de faible ou moyenne valeur pour lesquels les frais d'avocat feraient dépasser le coût du problème initial.

## Les comportements d'achat et les données comportementales

Chaque transaction effectuée par carte génère des données comportementales qui permettent aux banques (et aux réseaux Visa/Mastercard) de reconstituer les habitudes d'achat de leurs clients. Ces données — type de marchands, fréquence d'achat, montants moyens, géolocalisation des transactions — sont agrégées et utilisées à des fins d'analyse de marché, de détection de fraude, et de marketing ciblé. Le cadre RGPD encadre l'utilisation de ces données et donne aux clients des droits d'accès et d'opposition.

Pour les étudiants préoccupés par leur vie privée numérique, l'utilisation d'espèces pour certaines transactions sensibles ou le recours à des cartes prépayées non nominatives pour certains achats sont des options qui limitent la collecte de données comportementales. L'utilisation de cartes virtuelles à usage unique réduit également la traçabilité entre différents achats. Ces pratiques, qui relevaient jusqu'à récemment de la paranoïa, sont devenues des choix de vie privée légitimes dans un monde où les données personnelles ont une valeur économique considérable.

## Les fraudes à l'arnaque au faux conseiller bancaire

L'arnaque au faux conseiller bancaire est devenue l'une des fraudes bancaires les plus répandues en France. Le scenario type : un escroc appelle la victime en se faisant passer pour un conseiller de sa banque, l'informe d'une transaction suspecte sur son compte, et lui demande de fournir les codes de validation d'opérations sécurisées pour "protéger" le compte. Ces codes sont en réalité utilisés pour valider des virements frauduleux au profit de l'escroc.

La particularité de cette arnaque est qu'elle exploite l'affichage du numéro : les escrocs utilisent des techniques de spoofing qui leur permettent d'afficher le vrai numéro de téléphone de la banque sur le téléphone de la victime. Même en voyant le numéro officiel de sa banque s'afficher, la victime doit rester vigilante : la banque ne demande JAMAIS un code de validation par téléphone pour quelque raison que ce soit. Raccrocher et rappeler soi-même le numéro de la banque (en le tapant manuellement, sans utiliser le numéro du dernier appel entrant) est la seule façon de s'assurer de l'identité de l'interlocuteur.
`;

const EXT3_L6 = `
## La carte bancaire dans l'économie du partage et les plateformes collaboratives

L'économie du partage — plateformes de covoiturage, locations entre particuliers, services à la demande — a des implications bancaires spécifiques. Les paiements sur ces plateformes sont presque exclusivement effectués par carte bancaire ou via les wallets numériques associés. Certaines plateformes de location entre particuliers préfèrent des modes de paiement traçables pour la protection des deux parties (propriétaire et locataire). La carte bancaire offre ici la traçabilité requise tout en permettant les protections de l'assurance achat si la plateforme est réputée accepter les contestations de transaction.

Les revenus générés via ces plateformes — locations Airbnb, ventes Vinted, services Fiverr, revenus YouTube ou réseaux sociaux — sont souvent perçus sur des comptes associés à une carte. Ces revenus, même modestes, sont imposables en France au-delà des seuils de déclaration. Les plateformes collaboratives sont désormais légalement obligées de transmettre à l'administration fiscale les données sur les revenus de leurs utilisateurs au-delà d'un certain seuil, réduisant les possibilités d'omission déclarative non intentionnelle.

## La conclusion : maximiser la valeur de sa carte bancaire

La carte bancaire est à la fois un outil de paiement universel, un outil de sécurité, et pour les cartes premium, un paquet d'assurances et de services. La maximiser en termes de valeur signifie : choisir une carte dont les frais correspondent aux usages réels, utiliser activement les assurances et assistances incluses en connaissant les procédures d'activation, adopter toutes les pratiques de sécurité disponibles pour minimiser le risque de fraude, et garder une conscience de son historique de transactions pour détecter rapidement toute anomalie.

L'investissement de temps pour comprendre les caractéristiques de sa carte bancaire — lire la notice, appeler le service client pour poser des questions, vérifier les conditions des assurances incluses — est amplement rentabilisé à la première utilisation concrète d'un service auparavant ignoré. Un remboursement d'assurance voyage de 500 euros ou une prise en charge médicale de 2 000 euros à l'étranger transforment instantanément une carte bancaire premium d'un coût mensuel en un investissement rentable. La méconnaissance de ces avantages est le principal obstacle à leur utilisation — et y remédier est précisément l'objectif de ce chapitre.
`;

await appendAndPatch('fe29b046-82a5-408a-b117-a9c7b9c50c24', EXT3_L1);
await appendAndPatch('5c697fb8-6b1a-4ef0-871f-79d7ed372077', EXT3_L2);
await appendAndPatch('81753618-bf6e-4b22-80ba-30bb611450a6', EXT3_L3);
await appendAndPatch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', EXT3_L4);
await appendAndPatch('733031c8-73a4-44a3-a08c-2df6974a2545', EXT3_L5);
await appendAndPatch('74596b8d-7648-452c-bc1b-1d61d29f05ca', EXT3_L6);
