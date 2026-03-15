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

const L1 = `# Les banques en ligne en France : fonctionnement et avantages

Les banques en ligne sont des établissements bancaires entièrement digitaux qui proposent leurs services via une application mobile et un site internet, sans agences physiques. En France, les principales banques en ligne incluent Boursorama Banque, Hello bank!, Fortuneo, Orange Bank, N26, Revolut, et Lydia. Ces acteurs ont profondément transformé le paysage bancaire français depuis les années 2010 en proposant des services souvent gratuits ou peu coûteux, accessibles depuis n'importe où avec un smartphone.

## Le modèle économique des banques en ligne

Les banques en ligne fonctionnent avec des coûts de structure bien inférieurs aux banques traditionnelles puisqu'elles n'ont ni agences à entretenir, ni effectifs de conseillers en agence à rémunérer. Ces économies de structure leur permettent de proposer des tarifs très compétitifs, voire nuls pour les services bancaires courants. Boursorama Banque, par exemple, propose un compte courant sans frais de tenue de compte, une carte bancaire gratuite sous conditions, et des virements et prélèvements gratuits. Ce modèle a contraint les banques traditionnelles à s'adapter et à réduire leurs propres tarifs.

## Les services proposés par les banques en ligne

Les banques en ligne proposent l'ensemble des services bancaires courants : compte courant, carte bancaire (Visa ou Mastercard), virements et prélèvements, épargne (livrets, CEL, PEL selon les établissements). Certaines proposent également des crédits à la consommation et des crédits immobiliers, bien que ces services soient moins développés que dans les banques traditionnelles. Les notifications en temps réel pour chaque transaction, la gestion des plafonds de carte depuis l'application, et l'accès 24h/24 aux relevés et documents sont des fonctionnalités standard.

## Les conditions d'ouverture de compte dans les banques en ligne

La plupart des banques en ligne imposent des conditions d'entrée pour ouvrir un compte. Boursorama et Fortuneo exigent généralement un revenu mensuel minimum ou un dépôt initial significatif. N26 et Revolut sont plus accessibles car ils ne requièrent pas de conditions de revenus pour leurs offres de base. Pour les étudiants sans revenus réguliers, les options les plus accessible sont N26, Revolut, et les offres étudiantes spécifiques proposées par certaines banques en ligne ou banques traditionnelles.

## La qualité du service client dans les banques en ligne

L'absence d'agences physiques a une contrepartie : le service client se fait exclusivement à distance, par chat, email, ou téléphone. La réactivité et la qualité de ce service client varient significativement selon les établissements. N26 et Revolut ont parfois été critiqués pour des temps de réponse longs et des réponses automatisées peu satisfaisantes en cas de problème complexe. Boursorama et Fortuneo ont en général de meilleures évaluations sur la qualité du service client. Cette dimension est importante à prendre en compte, surtout pour les personnes qui anticipent des situations nécessitant un accompagnement personnalisé.
`;

const L2 = `# Les banques traditionnelles en France : atouts et limites

Les banques traditionnelles — Crédit Agricole, BNP Paribas, Société Générale, LCL, Caisse d'Épargne, Banque Populaire, CIC — restent les acteurs dominants du paysage bancaire français avec des dizaines de millions de clients. Leur modèle repose sur un réseau dense d'agences physiques et de conseillers dédiés, offrant une relation clientèle directe et personnalisée que les banques en ligne ne peuvent pas reproduire. Cette présence physique est particulièrement précieuse dans certaines situations.

## Le réseau d'agences : un atout dans certaines situations

L'agence bancaire de proximité est utile pour les démarches complexes : ouverture d'un compte pour un non-résident ou une situation administrative atypique, demande de prêt immobilier avec présentation du dossier en face-à-face, résolution de problèmes urgents qui nécessitent une intervention humaine immédiate. Pour un étudiant étranger qui arrive en France sans les conditions habituellement requises par les banques en ligne, l'agence d'une banque traditionnelle peut être plus accommodante en appréciant le dossier globalement.

## Les offres jeunes et étudiantes des banques traditionnelles

Les grandes banques traditionnelles proposent des offres spécifiques pour les étudiants, souvent avec des frais réduits ou nuls pendant la durée des études. Le LCL proposait historiquement une offre "Kangourou" pour les jeunes de moins de 30 ans sans frais de tenue de compte. La Société Générale a son offre "Sobrio" pour les étudiants. La BNP Paribas propose "Nickel" comme alternative accessible. Ces offres étudiantes incluent généralement une carte bancaire à tarif préférentiel, des découverts autorisés, et un service de protection en cas de fraude.

## Les inconvénients des banques traditionnelles

Les frais bancaires des banques traditionnelles sont nettement plus élevés que ceux des banques en ligne. Les frais de tenue de compte (souvent entre 6 et 12 euros par mois), les frais de carte bancaire (30 à 60 euros par an), les commissions sur certaines opérations, et les frais de découvert représentent un coût annuel significatif. Pour un étudiant avec un budget serré, ces frais peuvent représenter une charge notable. La transparence sur les frais est également souvent critiquée — les grilles tarifaires sont complexes et les frais cachés malconnus.

## La fidélisation client et ses implications

Les banques traditionnelles investissent dans la fidélisation client à long terme — des remises commerciales, des taux préférentiels sur les prêts, et des services additionnels sont souvent proposés aux clients anciens et à fort potentiel. Pour un étudiant qui devient client d'une banque traditionnelle, la perspective d'une relation bancaire longue — jusqu'au premier crédit immobilier et au-delà — peut valoriser ce type de relation même si les frais courants sont plus élevés à court terme.
`;

const L3 = `# Critères de choix entre banque en ligne et banque traditionnelle

Le choix entre une banque en ligne et une banque traditionnelle dépend de plusieurs facteurs personnels : les besoins bancaires courants, la situation administrative, le budget disponible pour les frais bancaires, et les projets financiers à moyen terme. Il n'existe pas de réponse universelle — la meilleure banque est celle qui correspond le mieux à la situation et aux usages de chaque individu.

## Le critère des frais bancaires

Pour un étudiant qui utilise sa banque principalement pour recevoir des virements (allocation familiale, salaire de job étudiant, bourse), payer par carte, et faire quelques virements, les frais réels d'une banque en ligne peuvent être proches de zéro. Les mêmes usages dans une banque traditionnelle peuvent coûter 15 à 30 euros par mois. Sur une année universitaire, l'économie est de 180 à 360 euros — une somme non négligeable pour un budget étudiant. Ce critère de coût pur favorise clairement les banques en ligne pour ce profil d'usage simple.

## Le critère de l'accessibilité à l'ouverture

Pour un étudiant étranger qui arrive en France sans revenus et sans les documents habituellement requis, l'accessibilité à l'ouverture du compte est souvent le premier critère. Revolut et N26 permettent l'ouverture d'un compte avec un simple passeport et une adresse email, sans condition de revenus. Cette accessibilité est précieuse pour les primo-arrivants. Certaines banques traditionnelles en revanche peuvent proposer une ouverture de compte dans l'urgence si le client se présente en agence avec un titre de séjour, même si son dossier est incomplet.

## Le critère de la crédibilité auprès des tiers

Certains propriétaires immobiliers et employeurs accordent plus de confiance à un RIB d'une banque traditionnelle française (comme la BNP ou le Crédit Agricole) qu'à un RIB d'une banque en ligne ou d'une néobanque comme Revolut. Cette perception peut avoir des conséquences pratiques lors de la recherche d'un logement ou lors de l'inscription sur des plateformes de paiement. Pour les dossiers locatifs, un compte dans une grande banque traditionnelle peut être un signal de stabilité pour le propriétaire.

## Le critère des services spécialisés

Certains services nécessitent une banque traditionnelle : l'ouverture d'un compte titre ou d'un PEA (plan d'épargne en actions) pour les investisseurs en bourse, les opérations de change complexes pour les transferts internationaux importants, les crédits immobiliers (même si certaines banques en ligne les proposent), et les services aux professionnels (compte courant pro, terminal de paiement). Pour ces besoins spécifiques, la banque traditionnelle reste souvent incontournable.
`;

const L4 = `# La multi-bancarisation : la stratégie optimale pour les étudiants

La multi-bancarisation — détenir des comptes dans plusieurs banques simultanément — est une stratégie de plus en plus répandue en France, particulièrement chez les jeunes actifs et étudiants. Elle permet de combiner les avantages des différents types d'établissements sans subir leurs inconvénients respectifs. Un compte dans une banque en ligne pour les opérations courantes et les économies de frais, combiné avec un compte dans une banque traditionnelle pour les démarches qui le nécessitent, est la configuration typique.

## Pourquoi ouvrir un compte dans une néobanque

Les néobanques comme Revolut, N26, et Lydia offrent des fonctionnalités spécifiques qui les distinguent même des banques en ligne traditionnelles. Revolut propose des conversions de devises en temps réel aux taux interbancaires, ce qui le rend particulièrement avantageux pour les voyages à l'étranger et les transactions en devises étrangères. N26 propose une interface particulièrement intuitive avec des espaces d'épargne virtuelle (les "spaces") qui permettent de subdiviser son compte en enveloppes budgétaires. Ces fonctionnalités de gestion financière avancée sont rares dans les banques traditionnelles.

## La gestion de la trésorerie entre plusieurs comptes

Gérer plusieurs comptes bancaires nécessite de l'organisation pour éviter les découverts accidentels et optimiser la gestion budgétaire. Une approche commune est de domicilier ses revenus principaux dans la banque traditionnelle (pour la crédibilité) et de transférer un budget mensuel vers la néobanque pour les dépenses courantes. Les virements entre comptes personnels sont gratuits et instantanés dans les deux sens pour les virements SEPA, ce qui rend cette organisation pratique.

## Les offres de bienvenue et les promotions d'affiliation

De nombreuses banques en ligne proposent des primes de bienvenue pour attirer de nouveaux clients : Boursorama Banque offre régulièrement des primes à l'ouverture de compte (80 à 150 euros selon les périodes), parfois en plus d'une prime de parrainage si vous ouvrez votre compte via un lien de parrainage d'un ami. Fortuneo et Hello bank! proposent des offres similaires. Ces primes peuvent représenter une dizaine à une centaine d'euros en cash ou en avantages, ce qui constitue un bonus non négligeable à l'ouverture de compte.

## Les risques et précautions de la multi-bancarisation

La multi-bancarisation présente quelques risques qu'il convient d'anticiper. La dispersion des fonds entre plusieurs comptes peut compliquer le suivi du budget global. Les prélèvements automatiques peuvent échouer si le compte qui les supporte est insuffisamment approvisionné. Il faut également veiller à l'ordre dans lequel les relevés sont vérifiés pour ne pas manquer une transaction ou une irrégularité. Des applications de gestion budgétaire multi-comptes (comme Bankin ou Linxo) permettent d'agréger tous ses comptes dans une seule interface.
`;

const L5 = `# Ouvrir un compte bancaire en France : procédures et documents

L'ouverture d'un compte bancaire en France est l'une des premières démarches administratives à effectuer lors de l'installation dans le pays. Ce compte est nécessaire pour recevoir des virements (bourse, salaire, CAF), payer par carte, et mettre en place des prélèvements automatiques (loyer, EDF, téléphone). Sans compte bancaire français, la vie administrative devient rapidement très compliquée.

## Les documents requis pour l'ouverture de compte

Les documents généralement requis pour ouvrir un compte bancaire en France varient selon les établissements mais comprennent systématiquement : une pièce d'identité valide (passeport ou titre de séjour), un justificatif de domicile en France (contrat de location, quittance de loyer, facture d'eau ou d'électricité, ou attestation d'hébergement chez un tiers), et pour certaines banques, une attestation de situation (relevé d'immatriculation à l'université, certificat de scolarité) ou des justificatifs de revenus.

## L'ouverture de compte en ligne : procédure step by step

Pour une banque en ligne, l'ouverture de compte se fait entièrement en ligne. Vous remplissez un formulaire d'inscription, téléchargez les photos de vos documents d'identité et de domicile, réalisez une vidéo de vérification d'identité (selfie avec pièce d'identité en main), et signez les conditions générales électroniquement. Le délai d'activation du compte varie de quelques heures (N26, Revolut) à quelques jours (Boursorama). La carte bancaire est ensuite envoyée par courrier dans un délai de cinq à dix jours ouvrés.

## Le droit au compte pour les personnes refusées

Si une banque refuse d'ouvrir un compte, ce qui peut arriver dans certaines situations (historique bancaire négatif, situation administrative atypique), la loi française garantit le "droit au compte". Toute personne qui se voit refuser l'ouverture d'un compte bancaire peut saisir la Banque de France, qui désigne alors un établissement bancaire tenu d'ouvrir le compte. Ce droit au compte garantit l'accès aux services bancaires de base (compte courant, carte de retrait, prélèvements) même dans les situations les plus difficiles.

## Les délais de disponibilité des fonds après l'ouverture

Après l'ouverture du compte, les premiers virements entrants sont généralement disponibles immédiatement ou dans un délai de un à deux jours ouvrés selon la banque expéditrice. Pour un étudiant qui attend le versement d'une bourse ou d'une allocation CAF, connaître ce délai permet d'anticiper les besoins de trésorerie des premières semaines. Les banques en ligne traitent généralement les virements entrants très rapidement, parfois en temps réel pour les virements instantanés entre certains établissements.
`;

const L6 = `# Comparer les offres bancaires : méthode et outils pratiques

La comparaison des offres bancaires peut sembler ardue face à la complexité des grilles tarifaires et la multiplicité des établissements. Une méthode structurée simplifie cet exercice en se concentrant sur les critères qui correspondent à votre situation et vos usages réels, plutôt que de chercher la "meilleure banque" de manière absolue.

## L'analyse de ses besoins bancaires réels

La première étape d'une comparaison efficace est d'identifier ses besoins bancaires réels. Un étudiant qui utilise principalement sa carte pour les paiements quotidiens, reçoit des virements mensuels, et paie quelques prélèvements automatiques a des besoins très différents d'un expatrié qui reçoit des revenus en devises étrangères et transfère régulièrement de l'argent à l'étranger. Lister ses opérations types sur un mois — nombre de paiements par carte, retraits DAB, virements émis et reçus, prélèvements — permet de calculer le coût réel d'une offre bancaire dans sa grille tarifaire.

## Les comparateurs bancaires en ligne

Plusieurs sites de comparaison bancaire permettent d'évaluer rapidement les offres disponibles. Les comparateurs généralistes (Meilleurtaux, LesFurets, Panorabanques) permettent de comparer les offres sur la base de critères personnalisés. Ces comparateurs ont des accords commerciaux avec les banques qu'ils mettent en avant, ce qui peut biaiser les résultats en faveur de certains établissements. Une vérification directe sur les sites des banques comparées permet de confirmer les tarifs et les conditions.

## Les critères souvent négligés dans la comparaison

Plusieurs dimensions importantes sont souvent négligées dans les comparaisons d'offres bancaires. La couverture de l'assurance de la carte bancaire — incluse gratuitement avec les cartes premium ou moyennant un coût avec les cartes de base — peut avoir une valeur significative si on voyage fréquemment. Les plafonds de paiement et de retrait, et la facilité de les modifier depuis l'application, est un critère de confort quotidien important. La disponibilité et la qualité des applications mobiles doivent être vérifiées en lisant les avis des utilisateurs sur les stores d'applications.

## La lecture de la grille tarifaire

La lecture d'une grille tarifaire bancaire demande de la rigueur. Les frais à surveiller incluent : les frais de tenue de compte mensuels, les frais de carte annuels, les frais de découvert (taux d'intérêt débiteur, commissions d'intervention), les frais de rejet de prélèvement ou de chèque, et les frais de virements internationaux. Certains frais sont structurels et permanents, d'autres ne s'appliquent que dans des situations spécifiques. Un calcul basé sur ses propres usages estimés — en intégrant la probabilité d'occurrence de chaque type de frais — donne une estimation réaliste du coût annuel de chaque offre évaluée.
`;

await patch('4c9116f9-7601-44df-b251-025a5ef7e17c', L1);
await patch('5c36682c-cb31-424c-a796-8c3a1973783a', L2);
await patch('149737e3-08ca-4f30-88a3-6a4de0e61448', L3);
await patch('831ceaae-f8f0-4bdc-a84e-f6b80c8c54d5', L4);
await patch('869dc5a2-45ab-439d-b1e7-436a9b056181', L5);
await patch('6fd28914-d398-4ff8-9ec8-cf4f7207bbad', L6);
