const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

async function patch(id, content) {
  const w = content.split(/\s+/).filter(Boolean).length;
  const p = await fetch(BASE+'/rest/v1/lessons?id=eq.'+id, {
    method: 'PATCH', headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content })
  });
  console.log(p.ok ? '✅' : '❌ '+p.status, id.slice(0,8), w+' mots');
}

const L1 = `# Les différents types de cartes bancaires en France

La carte bancaire est l'instrument de paiement le plus utilisé en France. Il en existe plusieurs types, adaptés à des besoins et des situations différents. Comprendre ces distinctions permet de choisir la carte qui correspond le mieux à son profil.

## La carte de débit à débit immédiat

La carte à débit immédiat est la plus courante pour les jeunes et les étudiants. Each transaction est prélevée directement sur le compte dans les heures qui suivent le paiement, voire le jour même. Cette immédiateté a un avantage majeur : le solde du compte reflète en temps réel les dépenses effectuées, ce qui permet un pilotage précis du budget. Il est difficile de dépenser plus que ce qu'on a sur le compte, sauf en cas de découvert autorisé.

## La carte de débit à débit différé

La carte à débit différé regroupe toutes les transactions du mois et les débite en une seule opération en fin de mois. Ce fonctionnement offre une forme de crédit gratuit de quelques semaines — les achats réalisés en début de mois ne sont prélevés que fin du mois. Cette option est appréciée des professionnels qui avancent des frais remboursés par leur employeur, mais peut être piégeuse pour les étudiants qui peinent à visualiser leur solde réel incluant les dépenses non encore prélevées.

## La carte prépayée

La carte prépayée fonctionne comme une carte rechargeable : on y dépose une somme d'argent et on dépense jusqu'à épuisement du crédit chargé. Impossible de dépenser plus que le solde disponible. Des solutions comme Nickel, PCS MasterCard, ou les cartes prépayées virtuelles sont populaires pour les personnes qui souhaitent contrôler strictement leurs dépenses ou qui n'ont pas accès à un compte bancaire traditionnel. Pour un étudiant qui part en voyage et ne veut pas risquer de dépenser excessivement, une carte prépayée rechargée avec le budget voyage est une solution disciplinante.

## Les niveaux de cartes standard et premium

Au-delà du type de débit, les cartes se différencient par leur niveau de service : cartes standards (Visa Classic, Mastercard Standard), cartes haut de gamme (Visa Premier, Mastercard Gold), et cartes très haut de gamme (Visa Infinite, Mastercard World Elite). Les cartes premium incluent des assurances voyages, des assistances, et des plafonds de paiement et de retrait plus élevés, mais coûtent plus cher en frais annuels. Le choix du niveau doit être guidé par l'utilisation réelle des avantages inclus.
`;

const L2 = `# Obtenir une carte bancaire en France : démarches et conditions

Pour un étudiant ou un arrivant en France, obtenir une carte bancaire est l'une des premières démarches pratiques à accomplir. Les conditions varient selon la banque et le type de compte choisi.

## Les documents nécessaires pour ouvrir un compte et obtenir une carte

Quelle que soit la banque choisie, l'ouverture d'un compte bancaire nécessite un processus de vérification d'identité (KYC — Know Your Customer). Les documents requis sont : une pièce d'identité valide (carte nationale d'identité, passeport, ou titre de séjour pour les ressortissants non européens), un justificatif de domicile récent (facture d'eau, d'électricité, quittance de loyer, ou attestation d'hébergement), et pour les étudiants, un certificat de scolarité ou une carte d'étudiant en cours de validité.

## Les banques en ligne et la rapidité d'obtention

Les banques en ligne ont révolutionné la rapidité d'obtention d'une carte bancaire. Le processus entièrement numérique permet d'ouvrir un compte en quelques minutes : téléchargement et photo des documents d'identité, selfie de vérification biométrique, et signature électronique du contrat. La carte physique est généralement envoyée par courrier dans un délai de 5 à 10 jours ouvrés. Certaines banques proposent une carte virtuelle utilisable immédiatement pour les paiements en ligne, en attendant la réception de la carte physique.

## Le cas particulier des étudiants étrangers

Les étudiants étrangers fraîchement arrivés en France peuvent rencontrer des difficultés à ouvrir un compte dans certaines banques traditionnelles qui exigent des justificatifs que les nouveaux arrivants n'ont pas encore : avis d'imposition français, justificatif de revenus réguliers. Les néobanques et les banques en ligne sont généralement plus accessibles dans cette situation, acceptant une carte de résidence en cours de validité et une attestation de logement comme documents suffisants. La Banque Postale et certaines caisses d'épargne ont aussi des offres spécialement conçues pour les étrangers en situation régulière.
`;

const L3 = `# Utiliser sa carte bancaire en toute sécurité

La sécurité des paiements par carte est un enjeu majeur à l'heure où les fraudes se multiplient. Connaître les bonnes pratiques protège efficacement contre les risques les plus courants.

## La protection du code PIN

Le code PIN (Personal Identification Number) à 4 chiffres est la première ligne de défense contre l'utilisation frauduleuse d'une carte volée. Quelques règles essentielles : ne jamais communiquer son code PIN à qui que ce soit, y compris aux agents bancaires ; couvrir le clavier lors de la saisie en magasin ou au distributeur ; ne pas utiliser un code trop prévisible (date de naissance, suite logique de chiffres). En cas de soupçon que le code a été observé, le modifier immédiatement via l'application bancaire ou l'automate.

## Les paiements en ligne sécurisés

Les paiements en ligne font l'objet d'une authentification renforcée obligatoire depuis l'entrée en vigueur de la directive DSP2. L'authentification forte requiert la combinaison de deux éléments parmi trois catégories : quelque chose que vous savez (code PIN, mot de passe), quelque chose que vous possédez (téléphone mobile, carte physique), et quelque chose que vous êtes (empreinte digitale, reconnaissance faciale). En pratique, cela se traduit par une validation de l'achat par un code envoyé par SMS ou via l'application de la banque.

## Reconnaître les tentatives de fraude

Le skimming est une technique de fraude qui consiste à copier les données de la carte lors d'un paiement physique ou d'un retrait au distributeur. Les dispositifs de skimming, installés illégalement sur les terminaux de paiement ou les distributeurs, sont de plus en plus difficiles à détecter. Vérifier visuellement l'absence de boîtier suspect sur le lecteur de carte, préférer les distributeurs dans les agences bancaires sécurisées, et surveiller régulièrement ses relevés de compte pour détecter rapidement toute transaction anormale sont les bonnes pratiques de base.
`;

const L4 = `# Les plafonds de paiement et de retrait : fonctionnement et gestion

Les cartes bancaires sont assorties de limites de dépenses et de retraits qui servent à la fois à protéger le titulaire en cas de vol et à gérer le risque pour la banque. Comprendre ces plafonds et savoir les gérer est une compétence pratique essentielle.

## Les types de plafonds

Il existe plusieurs types de plafonds sur une carte bancaire : le plafond de paiement (montant maximum total des achats sur une période glissante de 7 ou 30 jours), le plafond de retrait (montant maximum des espèces retirées aux distributeurs automatiques sur une période de 7 jours), et le plafond de paiement sans contact (généralement 50 euros par transaction sans saisie du code PIN). Ces plafonds sont cumulatifs — on ne peut pas dépasser l'un ou l'autre, quel que soit le montant des transactions individuelles.

## Consulter et modifier ses plafonds

Les plafonds par défaut sont fixés par la banque en fonction du type de carte et du profil du client. Ils peuvent généralement être consultés et modifiés via l'application bancaire ou en contactant le service client. Les banques en ligne facilitent particulièrement cette gestion : un curseur dans l'application permet souvent d'ajuster les plafonds en quelques secondes. Cette flexibilité est utile avant un voyage ou une dépense importante prévue — augmenter temporairement le plafond pour la durée du besoin, puis le réduire ensuite pour retrouver une protection maximale.

## Les situations de dépassement de plafond

Un paiement refusé pour dépassement de plafond peut être embarrassant, surtout lorsqu'on ne s'y attendait pas. Les bonnes pratiques pour l'éviter : vérifier son solde de plafond disponible avant un achat important, ajuster ses plafonds à l'avance si un dépassement est prévisible, et garder en tête la période de référence (hebdomadaire ou mensuelle selon les banques) pour anticiper le renouvellement du plafond dans quelques jours si nécessaire.
`;

const L5 = `# Les frais liés à la carte bancaire en France

La carte bancaire génère des frais qui varient considérablement selon la banque et le type de carte. Bien comprendre ces frais permet d'optimiser ses choix et d'éviter les mauvaises surprises.

## Les frais annuels de carte

Certaines banques facturent des frais annuels pour la carte bancaire. Ces frais vont de 0 euro pour les offres gratuites des banques en ligne à une centaine d'euros pour les cartes premium des banques traditionnelles. Les offres gratuites sont souvent conditionnées à une utilisation minimale de la carte (nombre de transactions par mois) ou à une domiciliation des revenus. Prendre conscience du coût réel de sa carte — en incluant les frais de tenue de compte associés — est la première étape pour comparer objectivement les offres.

## Les frais de retrait aux distributeurs

Le retrait d'espèces aux distributeurs automatiques est gratuit dans les distributeurs de sa propre banque ou du réseau partenaire. En revanche, les retraits dans les distributeurs d'autres banques peuvent entraîner des frais, généralement entre 0 et 2 euros par retrait. Ces frais sont plafonnés réglementairement et doivent être affichés avant que le retrait soit effectué. Pour les étudiants qui font régulièrement des retraits en espèces, choisir une banque avec un réseau de distributeurs dense dans sa zone de vie est un critère pratique important.

## Les frais à l'étranger

Les paiements et retraits à l'étranger génèrent souvent des frais supplémentaires : commission de change (généralement entre 1 et 3% du montant), frais fixes par transaction, et marge sur le taux de change. Ces frais peuvent rapidement s'accumuler lors d'un voyage. Les cartes de certaines banques en ligne (N26, Revolut, Wise) offrent des transactions en devises étrangères sans frais supplémentaires ou à des taux très compétitifs. Pour les étudiants Erasmus ou qui voyagent fréquemment, l'économie réalisée sur les frais de change peut justifier l'ouverture d'un compte secondaire dans l'une de ces néobanques.
`;

const L6 = `# Gérer les incidents de carte bancaire : opposition, fraude et remplacement

Les incidents liés à la carte bancaire — perte, vol, fraude, dysfonctionnement — font partie des situations auxquelles tout titulaire peut être confronté. Savoir y réagir efficacement limite les conséquences.

## Faire opposition sur une carte perdue ou volée

La mise en opposition est l'action d'urgence à effectuer immédiatement en cas de perte ou de vol de carte. Elle bloque toute utilisation ultérieure de la carte et protège le titulaire des transactions frauduleuses effectuées après l'opposition. Deux canaux sont disponibles : l'application bancaire (la plus rapide) et le numéro d'opposition de la banque (disponible 24h/24 sur le dos de la carte et sur le relevé de compte). Le numéro interbancaire d'opposition 0 892 705 705 (numéro payant) est aussi une solution de secours pour les cartes de toutes banques françaises.

## Le remboursement des transactions frauduleuses

Le cadre légal DSP2 protège fortement les titulaires de carte victimes de fraude. La banque est tenue de rembourser immédiatement toute transaction non autorisée signalée par le client, sauf si elle prouve que la fraude est due à la négligence grave du titulaire. En pratique, les transactions effectuées avant l'opposition sont remboursables (à l'exception d'une franchise maximale de 50 euros pour les paiements sans contact non autorisés). Les transactions effectuées après l'opposition sont entièrement à la charge de la banque. Signaler la fraude rapidement, conserver les preuves, et déposer plainte sont les étapes qui sécurisent le droit au remboursement.

## Obtenir une carte de remplacement

Après une opposition, la banque envoie automatiquement une nouvelle carte avec un nouveau numéro. Le délai de réception est généralement de 5 à 10 jours ouvrés. Certaines banques proposent un mode dégradé pendant ce délai : un numéro de carte virtuel utilisable pour les paiements en ligne ou une avance d'espèces en agence. Pour les situations d'urgence à l'étranger, certaines banques proposent un service de remplacement express avec livraison en 24-48 heures. Il est utile de connaître ces options avant d'en avoir besoin, en consultant les conditions de sa banque dans les paramètres de l'application ou la documentation contractuelle.
`;

await patch('fe29b046-82a5-408a-b117-a9c7b9c50c24', L1);
await patch('5c697fb8-6b1a-4ef0-871f-79d7ed372077', L2);
await patch('81753618-bf6e-4b22-80ba-30bb611450a6', L3);
await patch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', L4);
await patch('733031c8-73a4-44a3-a08c-2df6974a2545', L5);
await patch('74596b8d-7648-452c-bc1b-1d61d29f05ca', L6);
