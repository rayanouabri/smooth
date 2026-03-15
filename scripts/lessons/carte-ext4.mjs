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

const EXT4_L1 = `
## Les nouvelles formes de cartes : métal, éco-responsable et personnalisable

La carte bancaire physique a évolué bien au-delà du simple rectangle en plastique standardisé. Plusieurs banques proposent des cartes en métal brossé, positionnées comme signe extérieur de statut et de prestige. Ces cartes métalliques ont un poids et un toucher caractéristique que certains clients apprécient comme signal de réussite. Au-delà de l'aspect symbolique, elles offrent généralement les mêmes fonctionnalités qu'une carte premium classique, avec en prime une durabilité supérieure à une carte en plastique standard.

D'autres banques ont choisi la voie de l'éco-responsabilité en proposant des cartes fabriquées à partir de plastiques recyclés, de bois, ou de matériaux biosourcés. Ces cartes "vertes" s'adressent aux clients qui souhaitent aligner leurs choix financiers avec leurs valeurs environnementales. Quelques néobanques vont plus loin en s'engageant à ne pas livrer de carte physique par défaut (usage exclusif de la carte virtuelle) pour réduire l'empreinte carbone liée à la production et à la livraison des cartes.

La personnalisation visuelle des cartes est une autre tendance : certaines banques permettent de choisir la couleur ou même de télécharger une photo personnelle pour l'impression sur la carte. Cette personnalisation, purement esthétique, répond à un désir de différenciation dans un monde où tous les services financiers tendent à se ressembler. Pour un étudiant, la couleur de sa carte ne change rien à son fonctionnement — mais si cette option est disponible gratuitement, l'utiliser pour obtenir une carte qui correspond à sa personnalité est un avantage cosmétique sans conséquence financière.

## Les programmes de cashback et leur calcul réel

Les programmes de cashback — remboursement d'un pourcentage des achats effectués par carte — sont devenus un argument marketing central pour de nombreuses banques. Les taux de cashback varient de 0,5% à 5% selon les marchands partenaires et les conditions du programme. Un cashback de 1% sur toutes les dépenses peut sembler faible, mais pour un étudiant qui dépense 1 000 euros par mois par carte, il représente 10 euros de remboursement mensuel, soit 120 euros par an — l'équivalent des frais annuels d'une carte premium.

La valeur réelle d'un programme de cashback doit être calculée en prenant en compte plusieurs facteurs : le taux de cashback moyen sur les dépenses habituelles (pas seulement les taux promotionnels sur les dépenses chez les marchands partenaires), les frais de la carte dans laquelle ce cashback est inclus, et les conditions d'utilisation (plafonds, délais de versement, éventuels points à convertir). Un programme de cashback complexe avec de nombreuses conditions est souvent moins avantageux en pratique qu'un cashback simple et direct même à un taux plus faible.

## Les cartes de voyage spécialisées et leur pertinence pour les étudiants Erasmus

Les étudiants qui partent en Erasmus ou en échange universitaire à l'étranger pendant 6 à 12 mois ont des besoins bancaires spécifiques : accès aux espèces locales sans frais prohibitifs, paiements dans la devise locale sans conversion coûteuse, et maintien de l'accès à leurs revenus et aides françaises. Une carte conçue pour les voyages longs est l'outil adapté à cette situation.

Les cartes Wise et Revolut sont particulièrement populaires auprès des étudiants Erasmus pour leurs taux de change avantageux. Wise utilise le taux de change interbancaire (le "vrai" taux) et facture une petite commission transparente. Revolut offre des transactions en devises étrangères gratuitement jusqu'à un certain plafond mensuel, puis avec une petite commission. Ces options sont bien plus avantageuses que les cartes bancaires standard qui appliquent souvent une commission de change de 2 à 3% sur chaque transaction en devise étrangère.

Pour les étudiants en Erasmus, combiner une carte de voyage (Wise ou Revolut) pour les dépenses locales avec la carte principale de leur banque française pour les urgences est la stratégie optimale. Cette combinaison assure la couverture dans toutes les situations tout en minimisant les frais de change sur les dépenses courantes.
`;

const EXT4_L2 = `
## Les particularités bancaires dans les DOM-TOM et territoires d'outre-mer

Pour les étudiants qui proviennent ou qui font leurs études dans les territoires et départements d'outre-mer français (Martinique, Guadeloupe, Réunion, Guyane, Mayotte, Polynésie française, Nouvelle-Calédonie, etc.), les conditions bancaires peuvent présenter des particularités. Dans les DOM (départements d'outre-mer), les banques métropolitaines sont représentées via des filiales locales, et les cartes bancaires CB/Visa/Mastercard fonctionnent normalement. Les transferts entre un compte en métropole et un compte en DOM sont traités comme des virements nationaux sans frais.

Dans les collectivités d'outre-mer (COM) comme la Polynésie française et la Nouvelle-Calédonie qui n'utilisent pas l'euro, la situation est différente. Le franc Pacifique (XPF) est la monnaie locale, mais il est lié à l'euro par un taux de change fixe. Les retraits et paiements en XPF avec une carte française sont généralement possibles mais peuvent engendrer des frais. Les étudiants polynésiens ou calédoniens qui viennent étudier en métropole et souhaitent envoyer de l'argent chez leurs parents doivent vérifier les conditions de transfert spécifiques entre l'euro et le franc Pacifique.

## Le service après-vente des achats par carte

La carte bancaire offre une protection de consommateur souvent méconnue liée aux achats : le chargeback (rétrofacturation). Si un commerçant ne livre pas une marchandise commandée et payée, effectue une facturation en double, ou refuse de procéder à un remboursement auquel le client a droit, le titulaire de la carte peut contester la transaction auprès de sa banque. La banque initie alors une procédure de rétrofacturation auprès de la banque du commerçant, qui peut aboutir au remboursement si la contestation est justifiée.

Cette procédure de chargeback est un mécanisme de protection puissant, mais elle a des limites. Elle s'applique principalement aux transactions par carte (et non aux virements bancaires ou aux paiements en espèces), elle doit être initiée dans des délais (généralement 120 jours après la transaction selon le réseau), et elle nécessite que le commerçant ait bien reçu le paiement via le réseau de la carte (et pas via un autre canal). Pour les achats en ligne où la livraison est parfois incertaine, payer par carte plutôt que par virement offre cette protection supplémentaire du chargeback.

## La banque et les étudiants en situation de handicap

Les banques ont des obligations légales en matière d'accessibilité pour leurs clients en situation de handicap. Les sites internet et applications mobiles des banques doivent progressivement respecter les normes RGAA (Référentiel Général d'Amélioration de l'Accessibilité). Des fonctionnalités comme la lecture d'écran, le contraste élevé, et la navigation au clavier sont des standards que les banques sont tenues de respecter. En pratique, le niveau d'accessibilité numérique varie significativement entre les établissements.

Pour les étudiants malentendants, les banques proposent des alternatives au service client téléphonique classique : messagerie sécurisée dans l'application, chat en direct, et certaines banques offrent même un service de visiophonie avec interprète en langue des signes. Pour les étudiants malvoyants, les applications bancaires avec compatibilité VoiceOver (iOS) et TalkBack (Android) permettent une navigation autonome. Pour les étudiants avec des difficultés cognitives ou de lecture, des interfaces bancaires simplifiées et des interfaces de gestion budgétaire en pictogrammes existent dans quelques solutions spécialisées.
`;

const EXT4_L3 = `
## La fraude par copie de carte (clonage) : mécanismes et protection

Le clonage de carte est une technique de fraude dans laquelle les données de la piste magnétique d'une carte sont copiées sur une carte vierge. Cette technique exploite la bande magnétique présente sur les cartes pour des raisons de rétrocompatibilité. Les dispositifs de capture (skimmers) installés illégalement sur des distributeurs automatiques ou des terminaux de paiement enregistrent les données de la piste magnétique et permettent de créer des cartes clonées.

La migration vers les cartes à puce EMV a considérablement réduit ce risque dans les pays développés, car la puce génère un code unique pour chaque transaction qui ne peut pas être reproduit à partir des données interceptées. Cependant, dans les pays qui n'ont pas encore adopté la norme EMV ou où les terminaux non conformes restent en service, le clonage reste possible. Pour les voyageurs, vérifier que le terminal de paiement utilise bien la puce (et non la piste magnétique) est une précaution utile dans les destinations moins avancées technologiquement.

## Les fintechs de gestion des déplacements professionnels

Pour les étudiants en alternance qui voyagent régulièrement pour leur employeur, des solutions spécialisées dans la gestion des dépenses de déplacement professionnel existent et peuvent simplifier considérablement la vie. Des cartes de paiement spécifiquement conçues pour les déplacements professionnels (proposées par des startups comme Spendesk, Mooncard, ou Jenji) permettent une gestion automatisée des reçus, des notes de frais, et des remboursements.

Ces cartes, généralement prépayées et rechargeable par l'entreprise, permettent à l'employeur de contrôler les dépenses de déplacement tout en offrant à l'employé un outil pratique pour payer sans avancer ses fonds personnels. Pour les étudiants en alternance qui doivent régulièrement avancer des frais de déplacement importants (billets de train, hôtels, repas clients) avant d'être remboursés, l'accès à une telle carte d'entreprise est une amélioration significative de la gestion de trésorerie personnelle.

## Les bonnes pratiques lors du changement de carte suite à renouvellement

Toutes les cartes bancaires ont une date d'expiration, généralement tous les 2 ou 3 ans. À l'approche de cette date, la banque envoie automatiquement une nouvelle carte sans que l'ancien doive le demander. Le numéro de carte reste généralement le même lors du renouvellement, mais le cryptogramme (CVV/CVC) change et la date d'expiration change — ce qui nécessite une mise à jour partielle chez les marchands qui ont enregistré les données de l'ancienne carte.

La procédure recommandée lors de la réception d'une nouvelle carte : activer immédiatement la nouvelle carte selon les instructions de la banque, mettre à jour les informations de carte chez les services d'abonnement les plus importants (streaming, logiciels, sites e-commerce récurrents), et conserver l'ancienne carte active jusqu'à confirmation que tous les abonnements ont bien migré vers la nouvelle carte. Ce chevauchement temporaire de quelques semaines entre l'ancienne et la nouvelle carte préserve la continuité des services sans interruption.
`;

const EXT4_L4 = `
## Les plateformes de paiement alternatives aux cartes

La carte bancaire domaine le paiement en France, mais d'autres modes de paiement coexistent. Le chèque, bien qu'en forte décline, reste utilisé pour certaines transactions (loyers, dons, transactions entre particuliers) et certains commerçants l'acceptent encore. Le virement bancaire SEPA est le mode de paiement principal pour les transactions importantes (loyers, factures élevées) car il n'est pas soumis aux plafonds de carte. Le prélèvement automatique est utilisé pour les abonnements et les paiements récurrents.

Le Cash on Delivery (paiement à la livraison) est une option proposée par certains e-commerçants pour les clients réticents à communiquer leurs données de carte en ligne. Les applications de paiement entre particuliers (Lydia, Paylib, Virement instantané SEPA) ont, elles, largement remplacé la carte et les chèques pour les transactions entre amis. La crypto-monnaie comme moyen de paiement chez les commerçants reste marginal en France mais quelques dizaines de commerçants l'acceptent dans les grandes villes. Cette diversité de modes de paiement offre au consommateur informé la flexibilité d'utiliser le mode le plus adapté à chaque situation.

## La carte face aux risques cyber et les bonnes pratiques numériques

La sécurité des données de carte bancaire est indissociable de la sécurité numérique globale. Un téléphone mobile compromis par un logiciel malveillant peut exposer les données bancaires stockées dans les applications — codes d'accès, numéros de carte stockés dans les wallets, extraits de transactions. La sécurité de l'application bancaire dépend donc aussi de la sécurité de l'appareil qui l'héberge.

Quelques pratiques de sécurité numérique qui protègent également les données bancaires : mettre à jour régulièrement le système d'exploitation du téléphone (les mises à jour incluent souvent des correctifs de sécurité), ne pas installer d'applications en dehors des stores officiels (App Store, Google Play), utiliser un gestionnaire de mots de passe pour sécuriser les mots de passe des applications bancaires, et activer le code PIN, le mot de passe ou la reconnaissance biométrique sur le téléphone pour protéger l'accès en cas de vol. Ces précautions basiques de cybersécurité constituent une protection efficace contre les risques les plus fréquents.

## La compréhension du relevé de carte et les mentions indispensables

Le relevé de compte mensuel liste toutes les transactions effectuées par carte pendant la période. Chaque ligne de transaction mentionne typically : la date de l'opération, le nom du marchand, le montant, et pour les transactions en devise étrangère, la devise originale et le taux de conversion appliqué. Comprendre chacune de ces mentions permet de vérifier l'exactitude des transactions et de détecter les anomalies.

Les mentions qui méritent une attention particulière : les transactions en devises étrangères dont le taux de conversion peut indiquer des frais importants, les mentions "CB PAIEMENT DIFF" (carte à débit différé) qui indiquent que la transaction sera groupée et débitée en fin de mois, et les transactions dont le nom du marchand n'est pas immédiatement reconnaissable — ce qui peut indiquer soit un nom commercial différent du nom juridique du marchand, soit une transaction non reconnue à investiguer. Prendre l'habitude de réviser son relevé mensuellement, même rapidement, est une pratique de gestion financière saine.
`;

const EXT4_L5 = `
## Les fintechs spécialisées dans l'épargne automatique couplée à la carte

Une nouveauté dans le paysage bancaire est la combinaison de la carte bancaire avec des mécanismes d'épargne automatique intelligente. Des applications comme Epsor, ou des fonctionnalités intégrées dans certaines néobanques, arrondie automatiquement chaque dépense effectuée par carte à l'euro supérieur et transfèrent la différence sur un compte d'épargne. Ces "cents économisés" peuvent sembler dérisoires unitairement, mais s'accumulent de façon significative sur l'année.

Une autre approche est l'épargne conditionnelle : "chaque fois que je fais un achat chez un café, j'épargne 0,50 euro". Ces règles d'épargne comportementale, paramétrables dans certaines applications, transforment les habitudes de consommation en opportunités d'épargne automatique sans effort. Pour les étudiants qui peinent à épargner par des méthodes traditionnelles (virement mensuel volontaire), ces mécanismes automataiques peuvent contourner le biais d'inertie et créer des habitudes d'épargne sans effort conscient.

## Les alternatives à la carte pour les achats importants

Pour les achats de valeur élevée — un ordinateur portable pour les études, des équipements professionnels, des billets d'avion — la comparaison des modes de paiement est utile. Le paiement par carte offre la protection du chargeback et les assurances achat incluses dans les cartes premium. Le virement bancaire offre des limites plus élevées mais sans les protections de la carte. Le crédit à la consommation peut financer un achat immédiat dont le coût est lissé dans le temps, mais avec un coût des intérêts à intégrer dans la décision.

Pour les achats technologiques (ordinateurs, smartphones), vérifier si la carte bancaire inclut une assurance contre le vol ou la casse dans les 90 ou 180 premiers jours de possession peut être déterminant. Cette garantie achat de la carte remplace ou complète l'assurance proposée par le fabricant ou le revendeur. Savoir avant l'achat qu'on bénéficie de cette protection permet d'éviter d'acheter une assurance supplémentaire facturée par le revendeur — qui est souvent identique ou moins complète que celle déjà incluse dans la carte bancaire.

## La gestion des remboursements sur carte

Les remboursements effectués sur une carte bancaire — retour d'un article, remboursement d'un service non fourni, correction d'une erreur de facturation — apparaissent généralement sur le relevé de compte dans un délai de 3 à 10 jours ouvrés après que le commerçant a initié le remboursement. Pour les cartes à débit différé, le remboursement apparaît comme un crédit qui réduira le montant débité en fin de mois.

Contrairement aux transactions de paiement qui sont parfois prélevées en deux temps (pré-autorisation puis débit réel), les remboursements sont généralement traités en un seul mouvement. Si un remboursement est attendu et n'apparaît pas dans les 10 jours ouvrés, il est conseillé de contacter d'abord le commerçant pour confirmer que le remboursement a bien été initié de son côté, puis sa banque si le commerçant confirme avoir initié le remboursement mais que le crédit n'apparaît pas sur le compte. Des délais plus longs peuvent être dus à des procédures comptables complexes chez certains commerçants (notamment les agences de voyage ou les plateformes en ligne qui ont des délais contractuels de remboursement spécifiques).
`;

const EXT4_L6 = `
## Le marché de l'acquisition de terminaux de paiement pour les indépendants

Pour les étudiants qui ont une activité freelance ou auto-entrepreneur et qui souhaitent accepter les paiements par carte de leurs clients, l'acquisition d'un terminal de paiement est accessible à un coût raisonnable. Des terminaux mobiles comme SumUp, Zettle by PayPal (ex-iZettle), ou Square permettent d'accepter les paiements par carte avec une application sur smartphone et un petit lecteur de carte qui se branche sur le port audio ou via Bluetooth.

Les frais de transaction de ces solutions mobiles sont généralement de 1,5% à 2,75% du montant de la transaction, sans abonnement mensuel. Ces taux sont plus élevés que les terminaux de paiement professionnels des grandes enseignes, mais l'absence de coût fixe les rend particulièrement adaptés aux petites structures et aux activités saisonnières. Un étudiant qui propose des cours particuliers, des services de bricolage, ou des activités artisanales peut équiper son activité d'un terminal de paiement pour quelques dizaines d'euros d'investissement matériel et sans frais fixes.

## Les tendances durables dans les paiements par carte

Le paiement par carte est lui-même en train de se transformer. La carte physique, telle qu'on la connaît, pourrait progressivement être remplacée par des formes d'identification numérique intégrées directement dans le téléphone mobile. Apple Pay, Google Pay, et les équivalents progressent régulièrement comme mode de paiement, au détriment de la carte physique. Cette dématérialisation de la carte simplifie la vie (un téléphone remplace le portefeuille) mais concentre également tous les moyens de paiement dans un seul appareil — qui devient donc à la fois pratique et critique à protéger.

L'euro numérique, en cours de développement par la Banque Centrale Européenne, pourrait modifier davantage ce paysage dans la décennie à venir. Si l'euro numérique est conçu pour fonctionner directement entre les applications des citoyens sans passer par les banques commerciales pour les petites transactions, le rôle de la carte bancaire traditionnelle serait marginalisé pour ces usages. Ces évolutions technologiques ne doivent pas inquiéter les utilisateurs actuels — les cartes physiques continueront à fonctionner pendant de nombreuses années en parallèle de ces nouvelles solutions. Mais s'y préparer progressivement, en adoptant les wallets numériques et en se familiarisant avec les nouvelles interfaces de paiement, est un investissement dans la maîtrise des outils financiers de demain.
`;

await appendAndPatch('fe29b046-82a5-408a-b117-a9c7b9c50c24', EXT4_L1);
await appendAndPatch('5c697fb8-6b1a-4ef0-871f-79d7ed372077', EXT4_L2);
await appendAndPatch('81753618-bf6e-4b22-80ba-30bb611450a6', EXT4_L3);
await appendAndPatch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', EXT4_L4);
await appendAndPatch('733031c8-73a4-44a3-a08c-2df6974a2545', EXT4_L5);
await appendAndPatch('74596b8d-7648-452c-bc1b-1d61d29f05ca', EXT4_L6);
