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

// === FRAIS BANCAIRES ET AGIOS ===
const FRAIS_L1 = `# Les frais bancaires : panorama et réglementation

Les frais bancaires représentent l'ensemble des sommes prélevées par la banque pour rémunérer ses services. Comprendre quels frais peuvent être facturés, dans quelles conditions, et à quels montants est fondamental pour maîtriser le coût réel de sa banque.

## La réglementation des frais bancaires en France

La loi française encadre strictement les frais bancaires que les banques peuvent prélever sur les comptes de leurs clients. La liste des frais autorisés, leurs conditions de facturation, et les plafonds applicables sont définis par des textes législatifs et réglementaires révisés régulièrement. Toute banque opérant en France est tenue de respecter ce cadre réglementaire.

Les banques ont l'obligation de publier leur grille tarifaire complète, accessible gratuitement en agence et sur leur site internet. Cette grille liste tous les services facturables et leurs prix unitaires. Avant d'ouvrir un compte ou de comparer des offres, consulter et comparer les grilles tarifaires de plusieurs banques est une démarche indispensable pour s'informer sur le coût réel de chaque offre.

## La plaquette tarifaire annuelle

Chaque année, les banques ont l'obligation d'envoyer à leurs clients une plaquette tarifaire récapitulant l'ensemble des frais applicables pour l'année à venir. Ces modifications tarifaires doivent être annoncées avec un délai de préavis de deux mois avant leur entrée en vigueur. Ce délai de préavis permet au client de résilier son contrat bancaire si les nouvelles conditions tarifaires ne lui conviennent pas.

La lecture de cette plaquette annuelle est souvent négligée par les clients mais représente une information précieuse. Les hausses de frais non signalées ou appliquées sans respecter le délai de préavis constituent une violation des obligations de la banque et peuvent faire l'objet d'une contestation.

## Les principales catégories de frais bancaires courants

Les frais bancaires se répartissent en plusieurs grandes catégories. Les frais de tenue de compte sont des frais fixes prélevés mensuellement ou annuellement pour la maintenance du compte courant. Les frais de carte bancaire couvrent la mise à disposition et le maintien d'une carte de débit ou de crédit. Les frais de virement couvrent les virements internes (entre comptes de la même banque) et externes (vers d'autres banques). Les frais d'incidents recouvrent les frais associés aux découverts, aux rejets de prélèvements, et aux chèques sans provision.

## Les services gratuits obligatoires selon la loi

La loi impose que certains services bancaires de base soient fournis sans frais pour les clients des offres de banque au détail. Ces services gratuits obligatoires incluent notamment l'ouverture et la clôture d'un compte courant, les virements internes entre comptes du même titulaire dans la même banque, et certains relevés de compte.
`;

const FRAIS_L2 = `# Les agios et intérêts débiteurs : fonctionnement et calcul

Les agios, également appelés intérêts débiteurs, sont des frais spécifiques facturés par la banque lorsqu'un compte présente un solde négatif. Comprendre comment ils sont calculés et comment les minimiser est un enjeu financier direct pour les titulaires de comptes courants.

## La définition des agios

Les agios désignent les intérêts que la banque facture lorsqu'elle finance un découvert sur le compte du client. Lorsque le solde du compte passe en négatif, la banque prête en quelque sorte la différence entre le solde négatif et zéro — et facture des intérêts sur ce prêt informel. Le taux d'intérêt applicable aux agios est généralement significativement plus élevé que les taux des crédits à la consommation standards.

## Le calcul des agios

Les agios sont calculés journellement sur la base du solde débiteur. La formule est la suivante : montant des agios = montant débiteur × taux d'intérêt annuel / 365 × nombre de jours en débit. Par exemple, un solde débiteur de 100 euros pendant 10 jours avec un taux de 18% génère des agios de : 100 × 0,18 / 365 × 10 = 0,49 euros. Si le découvert est de 500 euros pendant 30 jours, les agios s'élèvent à : 500 × 0,18 / 365 × 30 = 7,40 euros. Ces montants semblent modestes unitairement mais peuvent s'accumuler rapidement pour des découverts fréquents ou prolongés.

## La distinction entre découvert autorisé et non autorisé

Le taux d'intérêt applicable aux agios diffère selon que le découvert est dans la limite autorisée préalablement convenue avec la banque ou au-delà de cette limite. Le découvert autorisé est un service contractuel qui permet au client de mettre son compte en débit dans une limite fixée, généralement contre le paiement d'une commission ou d'agios à un taux défini.

Le découvert non autorisé — lorsque le compte dépasse la limite de découvert autorisé ou lorsqu'aucun découvert n'a été préalablement autorisé — est soumis à un taux d'intérêt plus élevé et peut entraîner des frais d'incident supplémentaires. La distinction entre ces deux situations est importante car les frais associés peuvent différer considérablement.

## La commission d'intervention

La commission d'intervention est un frais spécifique facturé à chaque opération traitée alors que le compte est en débit non autorisé ou lorsque l'opération entraîne un dépassement de l'autorisation de découvert. Cette commission est plafonnée par la loi à 8 euros par opération et 80 euros par mois pour les clients ordinaires, avec des plafonds réduits à deux fois moins pour les clients bénéficiant de l'offre de services bancaires spécifiques (OFS) pour les personnes en situation de fragilité financière.
`;

const FRAIS_L3 = `# Les frais d'incidents bancaires : comprendre et contester

Les frais d'incidents bancaires sont les frais facturés par la banque lorsque des incidents de paiement surviennent sur le compte. Ces frais peuvent représenter une charge significative pour les clients aux finances serrées — d'où l'importance de les comprendre et de savoir les contester quand ils ne sont pas justifiés.

## Les frais de rejet de prélèvement

Lors d'un prélèvement automatique (abonnement, loyer, remboursement de crédit), si le compte ne dispose pas des fonds suffisants, la banque peut rejeter le prélèvement. Ce rejet de prélèvement génère des frais de la banque, auxquels s'ajoutent souvent des pénalités de l'émetteur du prélèvement. Les frais de rejet de prélèvement sont plafonnés par la loi : 20 euros maxi pour les prélèvements jusqu'à 20 euros, et le montant du prélèvement rejeté pour les prélèvements supérieurs à 20 euros (mais dans la limite de 20 euros).

## Les frais de rejet de chèque

Le rejet d'un chèque sans provision est un incident bancaire sérieux aux conséquences multiples. Outre les frais bancaires de rejet, le titulaire est inscrit au Fichier Central des Chèques (FCC) de la Banque de France et se voit interdire d'émettre des chèques jusqu'à régularisation. Les frais de rejet de chèque sont également plafonnés : 30 euros maximum pour les chèques d'un montant inférieur ou égal à 50 euros, et 50 euros maximum pour les chèques supérieurs à 50 euros.

## La contestation des frais d'incidents

Tous les frais d'incidents ne sont pas nécessairement justifiés ou correctement calculés. Une transaction rejetée à tort, des frais appliqués en dehors des conditions contractuelles, ou des montants dépassant les plafonds légaux constituent des motifs de contestation valables. La procédure de contestation commence par une réclamation auprès du service clients de la banque, puis par une escalade vers le médiateur bancaire si la réponse est insatisfaisante.

## La protection des personnes en situation de fragilité financière

Les banco es sont tenues d'identifier les clients en situation de fragilité financière (incidents de paiement récurrents, procédure d'insolvabilité) et de leur proposer l'offre spécifique (OFS). Cette offre inclut un plafonnement des frais d'incidents à 25 euros par mois et un ensemble minimum de services bancaires à un tarif social. L'identification de la fragilité financière est automatique selon des critères objectifs, mais le client peut aussi demander à en bénéficier.
`;

const FRAIS_L4 = `# Comparer et réduire ses frais bancaires

La comparaison systématique des frais bancaires entre établissements, et la démarche active de réduction de ses propres frais, sont des compétences financières concrètes qui peuvent générer des économies significatives.

## Les outils de comparaison des frais bancaires

Plusieurs outils facilitent la comparaison des grilles tarifaires des banques françaises. Les comparateurs en ligne (Panorabanques, Bankin, Hello bank comparateur) permettent de paramétrer son profil d'utilisation bancaire et d'obtenir une estimation du coût annuel chez chaque banque. Par exemple, entrer que l'on utilise une carte de paiement, que l'on effectue des virements réguliers, et que l'on a eu quelques incidents par an permet d'obtenir une comparaison personnalisée.

Ces comparateurs doivent être utilisés comme point de départ — leurs données ne sont pas toujours parfaitement à jour et ne capturent pas tous les nuances des offres. La vérification directe sur les sites des banques comparées est toujours recommandée avant de prendre une décision.

## L'audit annuel de ses propres frais bancaires

Une pratique recommandée est de réaliser un audit annuel de ses frais bancaires réels en consultant les relevés de compte des 12 derniers mois et en totalisant toutes les lignes identifiées comme frais ou commissions. Cet audit réel est souvent révélateur — il permet de quantifier précisément ce que l'on paie et de comparer ce total avec les offres concurrentes.

Si l'audit révèle des frais inattendus ou incompris, les interroger auprès de la banque est la première étape. Des frais appliqués sans justification ou en dehors du cadre contractuel peuvent être remboursés sur réclamation. Des services facturés mais jamais utilisés (assurances, protections, abonnements premium) peuvent souvent être résiliés pour réduire les frais récurrents.

## Les stratégies de réduction des frais courants

Plusieurs stratégies permettent de réduire les frais bancaires sans changer de banque. Maintenir un solde suffisant pour éviter les découverts est la stratégie la plus directe pour éliminer les frais d'incidents. Utiliser les canaux gratuits (virement en ligne, prélèvements) plutôt que les canaux payants (virements urgents, chèques de banque) pour les paiements courants réduit les frais transactionnels. Vérifier et ajuster la couverture d'assurance incluse dans l'offre bancaire pour ne payer que ce qui est réellement utile et compétitif.

## L'impact de la négociation avec sa banque

La négociation avec sa banque est possible et parfois fructueuse. Les chargés de clientèle ont généralement une marge de manœuvre sur certains frais — remise des frais d'un incident exceptionnel, réduction des frais de carte lors d'un renouvellement, conditions améliorées en cas de domiciliation des revenus. Cette négociation est plus efficace pour les clients avec un historique bancaire propre et une longue relation avec l'établissement.
`;

const FRAIS_L5 = `# Les offres sans frais et les banques en ligne : avantages et limites

L'essor des banques en ligne et des néobanques a transformé le marché des frais bancaires. Des offres à zéro frais sont maintenant disponibles mais comportent des conditions et des limites à bien comprendre.

## Le modèle économique des offres sans frais

Les banques en ligne et néobanques qui proposent des comptes sans frais de tenue de compte ou des cartes gratuites compensent cette gratuité par d'autres leviers. Certaines génèrent des revenus sur les services premium optionnels (assurances, retraits à l'étranger, cartes premium). D'autres monétisent les données d'usage de leurs clients (sous réserve du RGPD). D'autres encore comptent sur les dépôts de leurs clients pour financer des placements. Comprendre le modèle économique de sa banque est utile pour anticiper les évolutions tarifaires futures et les limites des offres gratuites.

## Les conditions d'accès aux offres sans frais

La gratuité des offres des banques en ligne est souvent conditionnelle. Revolut, N26, Boursorama, ou Fortuneo imposent parfois une utilisation minimale mensuelle de la carte (nombre de transactions ou montant minimum), une domiciliation des revenus d'un montant minimum, ou le maintien d'un solde moyen minimum. Le non-respect de ces conditions peut entraîner la facturation de frais ou la dégradation automatique vers une offre de base moins avantageuse.

Lire attentivement les conditions d'éligibilité et de maintien des offres gratuites évite les surprises. Changer de conditions sans en être informé — par exemple perdre un job étudiant et ne plus satisfaire la condition de domiciliation des revenus — peut transformer une offre gratuite en offre payante sans notification implicite.

## Les limites des néobanques pour les besoins complexes

Les néobanques et banques en ligne excellent pour les services courants (paiements, retraits, virements, suivi des dépenses) mais peuvent être moins bien équipées pour les besoins financiers plus complexes. L'accès à un crédit immobilier, à un PEL, ou à des produits d'assurance compétitifs est généralement plus limité chez les néobanques que dans les banques traditionnelles à réseau d'agences. Pour les étudiants, cette limite est généralement peu contraignante car leurs besoins financiers restent simples, mais elle mérite d'être anticipée à l'approche de la vie professionnelle.

## La stabilité financière des jeunes pousses fintech

La fragilité relative de certaines fintech (startups bancaires) est un risque à considérer. Si la quasi-totalité des dépôts bancaires sont garantis jusqu'à 100 000 euros par le Fonds de Garantie des Dépôts et de Résolution (FGDR), la faillite d'une fintech peut créer des complications temporaires dans l'accès aux fonds pendant la procédure de liquidation ou de cession. Pour les sommes d'épargne significatives, la prudence recommande de ne pas concentrer l'ensemble de ses avoirs dans une seule fintech dont la solidité financière n'est pas garantie par un groupe bancaire établi.
`;

const FRAIS_L6 = `# Recours et droits du consommateur face aux frais bancaires abusifs

Les consommateurs disposent de droits concrets et de voies de recours effectifs face aux frais bancaires qu'ils jugent injustifiés ou abusifs. Connaître ces recours et savoir les exercer est une compétence de défense du consommateur précieuse.

## La réclamation formelle auprès de la banque

La première étape de tout recours est une réclamation formelle adressée au service de relation client ou de réclamation de la banque. Cette réclamation, idéalement par écrit (email via l'espace client ou courrier recommandé), doit préciser le motif de la contestation, le montant contesté, et la demande (remboursement, annulation). La banque dispose d'un délai de 10 jours ouvrés pour accuser réception et de 30 jours ouvrés pour répondre sur le fond.

Si la réclamation aboutit, la banque procède au remboursement ou à l'annulation dans les délais communiqués. Si la réponse est négative ou insatisfaisante, le client peut escalader sa réclamation vers la direction de la banque ou vers le médiateur bancaire.

## Le médiateur bancaire

Chaque banque est tenue de mettre à disposition de ses clients un service de médiation bancaire, dont les coordonnées figurent dans les conditions générales et sur le site internet de la banque. Le médiateur bancaire est un tiers indépendant qui examine les litiges entre la banque et ses clients.

La saisine du médiateur est gratuite pour le client et doit intervenir après épuisement de la voie de réclamation auprès de la banque (délai de 2 mois après la réclamation initiale sans résolution satisfaisante). Le médiateur dispose de 90 jours pour rendre un avis. Bien que non contraignant juridiquement, l'avis du médiateur est généralement suivi par les banques car son rejet répété nuit à leur image.

## L'Autorité de Contrôle Prudentiel et de Résolution (ACPR)

L'ACPR, rattachée à la Banque de France, est l'organisme de supervision des banques françaises. Elle veille au respect de la réglementation bancaire, y compris les règles relatives aux frais et à la transparence tarifaire. Les signalements de pratiques abusives généralisées (non pas des litiges individuels) peuvent lui être adressés via son portail. L'ACPR peut prononcer des sanctions contre les établissements qui enfreignent la réglementation.

## Les associations de consommateurs

Les grandes associations de consommateurs (UFC-Que Choisir, 60 millions de consommateurs, CLCV) proposent des services d'aide aux consommateurs dans leurs litiges avec les banques. Ces associations peuvent accompagner les démarches de réclamation, orienter vers les bons interlocuteurs, et parfois exercer des actions de groupe (class actions) pour les pratiques abusives touchant de nombreux clients. En cas de litige bancaire complexe, contacter l'association de consommateurs locale ou nationale est un soutien précieux.
`;

await patch('fbf63a00-1650-4eed-a4c2-049f621e1f96', FRAIS_L1);
await patch('5e32687f-134a-48db-bb0f-0fcd6923a617', FRAIS_L2);
await patch('871ed9cd-6fb3-49da-a10d-a51a08595841', FRAIS_L3);
await patch('319f34a2-c465-4fe2-b573-2b13672b1814', FRAIS_L4);
await patch('6733f1b5-5ea2-4524-b88b-2b7723999de5', FRAIS_L5);
await patch('0f90c56e-6ee5-426e-995f-960e67894f2f', FRAIS_L6);
