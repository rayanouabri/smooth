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

const EXT2_L1 = `
## Les cas d'usage spécifiques où la banque en ligne excelle

Certaines situations de la vie bancaire quotidienne favorisent clairement les banques en ligne. Les voyages à l'étranger sont un exemple parfait : Revolut et N26 ne facturent pas ou peu de frais sur les paiements en devises étrangères à l'étranger, là où une banque traditionnelle peut prélever 2 à 3% de commission sur chaque transaction hors zone euro. Sur un voyage d'un mois avec 1000 euros de dépenses, l'économie peut atteindre 20 à 30 euros.

Les transactions en ligne régulières (abonnements streaming, achats sur des sites étrangers) bénéficient également de l'absence de frais des cartes de banques en ligne. La fonction de carte virtuelle disponible chez certaines néobanques permet de générer un numéro de carte unique pour chaque achat en ligne, limitant le risque de fraude sur les sites moins fiables. Cette fonctionnalité de sécurité, absente de la plupart des banques traditionnelles, est particulièrement appréciée pour les achats sur des sites peu connus.

## Les défis rencontrés par les utilisateurs de banques en ligne

Malgré leurs avantages, les banques en ligne présentent des défis pratiques que leurs utilisateurs rencontrent régulièrement. L'un des plus courants est la difficulté à déposer des espèces — il n'y a pas de guichet pour déposer des billets. Pour les personnes qui reçoivent des paiements en espèces régulièrement (travaux rémunérés en cash, ventes sur marchés), cette limitation peut être contraignante. La seule solution est d'utiliser en parallèle un compte dans une banque traditionnelle avec un réseau de distributeurs automatiques permettant les dépôts.

Un autre défi est la gestion des chèques. Les chèques restent utilisés en France pour certains paiements (certains propriétaires demandent le premier loyer par chèque, certaines administrations acceptent encore les chèques). La plupart des banques en ligne ne délivrent pas de chéquiers, ou le font avec des délais. Si la situation nécessite l'utilisation régulière de chèques, une banque traditionnelle reste nécessaire.

## Les innovations récentes dans les banques en ligne

L'innovation dans les banques en ligne est constante et rapide. Revolut a lancé des fonctionnalités d'investissement qui permettent d'acheter des fractions d'actions, des crypto-actifs, et de l'or directement depuis l'application bancaire. N26 propose des comptes joints simplifiés et des fonctionnalités de partage de dépenses entre partenaires. Lydia, partie comme application de paiement entre amis, s'est transformée en banque en ligne complète avec une interface de gestion de groupe très intuitive.

Ces innovations, qui auraient pris des années à développer dans les banques traditionnelles, émergent en quelques mois dans les néobanques grâce à leur agilité technique et à leurs équipes entièrement orientées vers la technologie. Pour les utilisateurs qui apprécient les nouvelles fonctionnalités bancaires, les néobanques restent les pioniers de l'innovation dans ce secteur.

## Les réglementations bancaires et leur impact sur les banques en ligne

Les banques en ligne agréées sont soumises aux mêmes réglementations prudentielles que les banques traditionnelles : ratio de fonds propres (Bâle III), règles de lutte contre le blanchiment (LCB-FT), protection des consommateurs (directive sur les services de paiement DSP2). Ces réglementations garantissent un niveau minimal de protection pour tous les clients bancaires, quelle que soit leur banque.

Cependant, l'application de ces réglementations peut présenter des différences pratiques. Les banques traditionnelles, avec leurs équipes compliance plus importantes et leurs processus KYC (Know Your Customer) plus développés, traitent souvent les situations complexes plus efficacement. Les néobanques, avec leurs processus très automatisés, peuvent parfois bloquer des comptes de manière arbitraire en cas de détection automatique d'une situation inhabituelle, avec des délais de résolution plus longs.
`;

const EXT2_L2 = `
## Le conseil bancaire dans les grandes étapes de la vie

La relation avec un conseiller bancaire prend toute sa valeur lors des grandes étapes de vie financière : l'achat immobilier, la création d'entreprise, la succession familiale, la préparation de la retraite. Pour ces moments, l'accompagnement personnalisé d'un conseiller qui connaît l'historique du client et peut proposer des solutions adaptées à sa situation globale a une valeur réelle difficile à reproduire en digital.

Un conseiller bancaire qui connaît un client depuis dix ans peut accorder une meilleure flexibilité lors d'une demande de prêt (meilleur taux, meilleures conditions), être plus réactif en cas de problème urgent (blocage d'une transaction suspecte, déblocage d'urgence), et anticiper les besoins (proposition d'un produit d'épargne adapté à une prochaine rentrée d'argent). Cette valeur relationnelle est intangible mais réelle.

## La sécurité des paiements et la gestion des fraudes

La gestion des fraudes est un aspect critique de la relation bancaire que les études sur la satisfaction client placent systématiquement parmi les préoccupations prioritaires. En cas de paiement frauduleux sur sa carte (hameçonnage, skimming de carte, fraude en ligne), la réactivité de la banque pour bloquer la carte, contester la transaction, et rembourser le client est déterminante.

Les banques traditionnelles disposent généralement de services anti-fraude opérationnels 24h/24 avec des équipes humaines disponibles en cas d'urgence. Les banques en ligne utilisent davantage l'automatisation et les chatbots pour le premier niveau de prise en charge, ce qui peut créer des délais en cas de fraude complexe. Les applications bancaires des deux types d'établissements permettent désormais de bloquer sa carte en temps réel depuis le smartphone, ce qui est la première mesure à prendre en cas de suspicion de fraude.

## Les offres packagées et leur analyse

Les banques traditionnelles proposent souvent des offres packagées (ou packages) qui regroupent plusieurs services avec une tarification globale : compte courant + carte bancaire + assurance + service téléphonique pour 10 à 20 euros par mois. Ces packages peuvent paraître attractifs car ils simplifient la gestion (un seul abonnement pour plusieurs services) et offrent parfois une économie par rapport à la souscription individuelle des services.

L'analyse critique de ces packages révèle cependant que les services inclus ne correspondent pas toujours aux besoins réels du client. Payer pour une assurance accident de la vie quand on est déjà couvert par une assurance scolaire, ou pour une garantie décès quand on n'a pas de personnes à charge, représente un surcoût injustifié. La recommandation est de décomposer chaque package et de vérifier si chaque service inclus est réellement utilisé ou nécessaire avant d'accepter l'offre globale.

## Le traitement des réclamations et litiges bancaires

En cas de litige avec sa banque — transaction non reconnue, service non rendu, frais injustifiés — la procédure de réclamation suit des étapes structurées. La première étape est la réclamation auprès du service client de la banque (par messagerie sécurisée, email, courrier recommandé). Si la réponse est insatisfaisante ou absente dans un délai de deux mois, la deuxième étape est la saisine du médiateur bancaire.

Chaque banque est tenue par la loi de proposer un service de médiation gratuit pour les clients. Le médiateur est un tiers indépendant dont la mission est de proposer une solution équitable au litige. Sa décision, bien que consultative, est généralement respectée par les banques. Si la médiation échoue, un dernier recours est possible devant le tribunal compétent. Le CMAP (Centre de Médiation et d'Arbitrage de Paris) propose également des services de médiation commerciale pour les litiges plus complexes.
`;

const EXT2_L3 = `
## Les ressources d'aide à la comparaison bancaire disponibles en France

Pour les étudiants qui débutent dans la vie bancaire française et se sentent dépassés par la multiplicité des offres, plusieurs ressources d'aide objective sont disponibles. Le site de la Banque de France propose des guides et comparatifs sur les points clés des offres bancaires. L'association UFC-Que Choisir publie régulièrement des comparatifs détaillés des frais bancaires et des classements de satisfaction client. Ces ressources sont gratuites, indépendantes des banques, et régulièrement mises à jour.

Les services d'information de l'INC (Institut National de la Consommation) et le magazine 60 Millions de Consommateurs publient des études comparatives approfondies qui aident les consommateurs à faire des choix informés. Pour les étudiants qui n'ont pas le temps d'effectuer eux-mêmes une comparaison exhaustive, ces études constituent un point de départ fiable.

## L'accessibilité financière et les offres à prix réduit

Le gouvernement français a mis en place plusieurs dispositifs pour améliorer l'accessibilité des services bancaires aux personnes à revenus modestes. L'Offre Specific de Clientèle (OSC) est une offre bancaire à tarif plafonné dont chaque banque est tenue de proposer une version. Cette offre, accessible aux personnes bénéficiant de certaines aides sociales, comprend les services bancaires de base à un tarif d'environ 3 euros par mois maximum.

Pour les étudiants en grande précarité, les banques ont l'obligation de proposer cette offre spécifique sans discrimination. La saisine de la Banque de France via le droit au compte ou la signature d'une banque partenaire via l'OSC peut permettre à des personnes qui se voient refuser un compte standard d'accéder aux services bancaires essentiels. Ces dispositifs, peu connus, sont pourtant des droits garantis par la loi.

## Comment les banques évaluent les risques des nouveaux clients

Comprendre comment les banques évaluent le risque des nouveaux clients aide à préparer son dossier d'ouverture de compte de manière optimale. Les critères d'évaluation incluent : la stabilité des revenus (CDI vs CDD vs chômage vs étudiant), le niveau de revenus (certaines offres requièrent un minimum mensuel), le lieu de résidence (certaines banques refusent les personnes résidant dans certains pays), et l'historique bancaire (vérification du fichier des incidents de remboursement des crédits FICP et du fichier des chèques impayés FCC).

Pour un étudiant étranger sans historique bancaire en France et sans revenus réguliers, le risque perçu par la banque est plus élevé. Cette réalité explique pourquoi certaines banques traditionnelles peuvent être réticentes à ouvrir un compte standard pour ce profil. La connaissance de ces critères permet d'orienter sa démarche vers les banques et les offres les plus accessibles pour son profil spécifique.

## La convention de compte : ce qu'il faut lire avant de signer

La convention de compte est le contrat qui régit la relation entre la banque et le client. Ce document, souvent long et rédigé en termes juridiques, contient les conditions générales et particulières du compte : les tarifs, les règles de fonctionnement du découvert, les procédures en cas d'incident de paiement, les conditions de résiliation, et les droits du client. Avant de signer, il est fortement recommandé de lire, même en diagonale, les sections suivantes : les frais applicables, les conditions du découvert, et les conditions de résiliation.

La convention de compte peut être modifiée par la banque avec un préavis de deux mois. Si les nouvelles conditions sont défavorables, le client peut résilier le contrat sans frais dans ce délai de deux mois — c'est une protection légale importante. Avant chaque modification de la convention, la banque est tenue d'informer le client par un document clair qui résume les changements, ce qui permet une prise de décision informée.
`;

const EXT2_L4 = `
## La gestion financière structurée avec plusieurs comptes

Une configuration multi-comptes structurée peut devenir un véritable outil de gestion budgétaire efficace. La méthode des "enveloppes budgétaires numériques" consiste à affecter chaque flux financier à un compte ou espace dédié. Un compte principal reçoit tous les revenus. Des virements automatiques le jour de l'arrivée des revenus alimentent les "enveloppes" : loyer, dépenses courantes, épargne d'urgence, loisirs. Cette structuration automatique évite les dépenses impulsives et assure que les charges fixes sont couvertes.

La mise en place de cette structure nécessite quelques heures d'organisation initiale (paramétrage des virements automatiques, définition des montants par enveloppe) mais fonctionne ensuite pratiquement en autonomie. Des applications comme YNAB (You Need A Budget) ou les outils de budget intégrés dans certaines banques comme N26 facilitent ce type de gestion structurée. Pour un étudiant qui souhaite améliorer sa gestion financière, cette méthode est l'une des plus efficaces.

## Les solutions bancaires pour les travailleurs indépendants et auto-entrepreneurs

Les étudiants qui lancent une activité indépendante en parallèle de leurs études ont besoin d'un compte bancaire dédié à leur activité professionnelle. La réglementation française n'oblige pas les micro-entrepreneurs dont le chiffre d'affaires est inférieur à 10 000 euros sur deux ans consécutifs à séparer compte professionnel et compte personnel — mais cette séparation est fortement recommandée pour la clarté comptable et la crédibilité vis-à-vis des clients et de l'administration fiscale.

Des néobanques professionnelles comme Shine, Qonto, ou Propulse by CA se spécialisent dans les comptes pour auto-entrepreneurs et petites entreprises. Ces services proposent un compte courant professionnel avec des fonctionnalités adaptées : facturation intégrée, séparation automatique de la TVA, export comptable, etc. Pour les étudiants-entrepreneurs, ces solutions sont souvent plus adaptées et moins chères que les offres professionnelles des banques traditionnelles.

## Les pièges courants dans les offres de parrainage

Les programmes de parrainage des banques en ligne sont une source intéressante de revenus supplémentaires, mais ils méritent une lecture attentive pour éviter les mauvaises surprises. La prime de bienvenue est généralement conditionnée à plusieurs critères : utilisation effective du compte (nombre de transactions minimum dans une période donnée), domiciliation d'un revenu régulier, ou dépôt initial minimum. Si ces conditions ne sont pas remplies, la prime peut ne pas être versée.

Certaines primes de parrainage sont également soumises à des délais de versement étendus (3 à 6 mois après l'ouverture du compte) et peuvent être annulées si le compte est clôturé prématurément. La lecture attentive des conditions de la prime avant d'ouvrir le compte permet d'éviter les déceptions. Les forums d'utilisateurs (Reddit, Facebook, communautés en ligne spécialisées) proposent régulièrement des discussions sur les meilleures offres de parrainage du moment et leurs conditions réelles.

## Les néobanques pour adolescents et jeunes adultes

Un segment particulier du marché bancaire est destiné aux adolescents et jeunes adultes (12-25 ans) : des néobanques comme Pixpay, Kard, Vybe, et Green Got proposent des cartes bancaires avec contrôle parental, des fonctionnalités éducatives sur la gestion de l'argent, et des interfaces très intuitives. Ces produits servent de passerelle vers l'autonomie financière pour les mineurs et les jeunes adultes.

Pour les étudiants récemment majeurs qui n'ont pas encore de compte bancaire autonome, ces offres peuvent être un premier pas vers l'indépendance financière. La transition d'une carte Pixpay (carte parent-enfant) vers un compte N26 ou Revolut pleinement autonome est naturelle une fois la majorité atteinte. La familiarisation précoce avec la gestion d'un budget limité via ces outils éducatifs développe de bonnes habitudes financières qui perdurent.
`;

const EXT2_L5 = `
## La gestion de compte bancaire depuis l'étranger

Pour les étudiants qui partent en échange universitaire à l'étranger tout en conservant leur compte bancaire français, la gestion à distance est un aspect pratique à anticiper. La plupart des banques en ligne permettent une gestion entièrement en ligne sans nécessité d'être physiquement présent en France : mise à jour d'adresse, commande d'une nouvelle carte, opposition sur une transaction, virement depuis l'étranger. Cette flexibilité est un avantage décisif pour les étudiants mobiles.

Les banques traditionnelles peuvent être plus contraignantes pour certaines opérations qui exigent une présence en agence. Modifier une procuration, signer un document pour un nouveau produit financier, ou accéder à certains services peuvent nécessiter un rendez-vous physique dans certaines banques. Pour les étudiants qui voyagent beaucoup, cette contrainte peut créer des difficultés pratiques.

## Les applications de budget et leur intégration avec les comptes bancaires

La gestion du budget étudiant est facilitée par des applications dédiées qui s'intègrent avec les comptes bancaires. Bankin' et Linxo permettent d'agréger plusieurs comptes dans une seule vue, de catégoriser les dépenses automatiquement, et de visualiser l'évolution du budget dans le temps. Ces applications se connectent aux comptes bancaires via les API Open Banking (DSP2) sans stocker les codes d'accès bancaires — la sécurité est maintenue via des tokens d'accès temporaires.

Pour un étudiant qui multiplie les petites dépenses quotidiennes et a du mal à suivre son budget, ces applications sont un outil concret d'amélioration de la gestion financière. La visualisation des habitudes de dépense — "je dépense 150 euros par mois en restaurants" — est souvent plus impactante que de simples relevés de compte, et peut déclencher des ajustements comportementaux bénéfiques.

## Les coûts cachés des retraits en espèces

Les retraits en espèces aux distributeurs automatiques de billets (DAB) peuvent engendrer des frais inattendus selon les circonstances. La règle générale est que les retraits dans les DAB de sa propre banque sont gratuits. Les retraits dans les DAB d'autres banques en France peuvent être facturés (généralement 0,90 à 1€ par retrait hors réseau selon la banque). Les retraits à l'étranger (hors zone euro) sont souvent facturés avec une commission de 2 à 3% plus des frais fixes.

Les néobanques comme Revolut permettent un certain nombre de retraits gratuits par mois (5 retraits gratuits jusqu'à 200 euros par mois avec l'offre standard) avant l'application de frais. N26 propose des retraits gratuits dans n'importe quel DAB en Europe. Pour les étudiants qui ont besoin d'espèces régulièrement, identifier le réseau de DAB gratuits associé à sa banque et l'utiliser en priorité est une habitude qui évite des frais inutiles.

## Comprendre le relevé de compte bancaire

Le relevé de compte bancaire est le document officiel qui liste toutes les transactions effectuées sur une période donnée. Savoir lire ce document est une compétence basique mais essentielle. Les éléments clés d'un relevé de compte incluent : la date d'opération (date à laquelle la transaction a été enregistrée), le libellé (description de la transaction), le montant débité ou crédité, et le solde après chaque opération. Les relevés sont disponibles en ligne (généralement pour les 12 à 24 derniers mois) et peuvent être téléchargés en PDF pour archivage.

La vérification régulière (mensuelle ou bimensuelle) de son relevé de compte est une pratique d'hygiène financière importante. Elle permet de détecter rapidement les erreurs de facturation, les prélèvements non reconnus, et les transactions frauduleuses. Plus une transaction suspecte est détectée tôt, plus la contestation et le remboursement sont faciles. Certaines banques en ligne envoient une notification pour chaque transaction — ce suivi en temps réel rend la vérification encore plus simple.
`;

const EXT2_L6 = `
## L'analyse comparative des cartes bancaires

Au-delà du compte courant, le type de carte bancaire incluse ou proposée avec l'offre est un critère de choix important. Les cartes de débit immédiat débitent le compte instantanément lors de chaque paiement. Les cartes de débit différé regroupent toutes les transactions du mois et les débitent en une fois en fin de mois — une forme de crédit gratuit à très court terme. Les cartes de crédit, moins courantes en France que dans les pays anglo-saxons, permettent de payer sans avoir les fonds et créditent le débit à une date ultérieure selon les termes du contrat.

Pour les étudiants qui gèrent un budget serré, la carte de débit immédiat est généralement plus sûre car elle évite de dépenser de l'argent qu'on n'a pas. La carte de débit différé peut être avantageuse pour aligner les dépenses avec les rentrées de fonds (comme une bourse versée en fin de mois) mais exige une discipline dans le suivi du solde du compte pour éviter les surprises en fin de mois.

## Les produits d'épargne liés aux comptes bancaires

En parallèle du compte courant, les banques proposent des produits d'épargne qui permettent de faire fructifier ses économies. Le Livret A, le Livret de Développement Durable et Solidaire (LDDS), et le Livret d'Épargne Populaire (LEP) sont des livrets réglementés dont les taux sont fixés par l'État et dont les intérêts sont exonérés d'impôt. Ouvrir un Livret A dans sa banque (en ligne ou traditionnelle) dès l'ouverture du compte courant est une bonne pratique pour séparer les économies des dépenses courantes.

La comparaison des offres d'épargne entre banques inclut également les livrets non réglementés (dont les taux sont librement fixés par les banques et soumis à imposition), les comptes à terme (épargne bloquée sur une durée déterminée avec un taux fixe), et les plans épargne. Pour les petites économies étudiantes, les livrets réglementés (Livret A à taux défiscalisé) sont généralement le meilleur choix.

## La convention d'accueil des banques pour les étudiants internationaux

Certaines villes universitaires françaises ont négocié avec des banques locales des conventions d'accueil spécifiques pour les étudiants internationaux, simplifiant les conditions d'ouverture de compte. Ces conventions permettent aux étudiants étrangers d'ouvrir un compte avec un minimum de documents, parfois avec une présence organisée des agents bancaires directement sur les campus en début d'année académique. Les services des relations internationales des universités peuvent informer sur l'existence de telles conventions.

Ces partenariats universités-banques sont win-win : les étudiants bénéficient d'un accès facilité aux services bancaires, et les banques acquièrent de jeunes clients qui ont un fort potentiel de fidélisation à long terme (les étudiants qui restent en France après leurs études deviennent clients à part entière). Pour les universités qui ont ces partenariats, ils peuvent significativement simplifier l'installation financière des étudiants étrangers.

## Choisir sa banque : récapitulatif des critères essentiels

En synthèse, le choix d'une banque en France pour un étudiant devrait être guidé par les critères suivants, classés par ordre de priorité selon son profil. Premièrement, l'accessibilité à l'ouverture — est-ce que la banque peut m'ouvrir un compte avec ma situation actuelle (peu de revenus, documents atypiques) ? Deuxièmement, les frais réels sur mes usages prévus — quel est le coût total annuel basé sur mes habitudes de consommation bancaire ? Troisièmement, la qualité de l'application mobile et du service client digital. Quatrièmement, les services spéciaux requis (chéquier, virements internationaux, assurances). En combinant ces critères avec les spécificités de sa situation personnelle, toute personne peut identifier l'établissement ou la combinaison d'établissements qui lui convient le mieux.
`;

await appendAndPatch('4c9116f9-7601-44df-b251-025a5ef7e17c', EXT2_L1);
await appendAndPatch('5c36682c-cb31-424c-a796-8c3a1973783a', EXT2_L2);
await appendAndPatch('149737e3-08ca-4f30-88a3-6a4de0e61448', EXT2_L3);
await appendAndPatch('831ceaae-f8f0-4bdc-a84e-f6b80c8c54d5', EXT2_L4);
await appendAndPatch('869dc5a2-45ab-439d-b1e7-436a9b056181', EXT2_L5);
await appendAndPatch('6fd28914-d398-4ff8-9ec8-cf4f7207bbad', EXT2_L6);
