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
## Le choix entre Visa et Mastercard : y a-t-il une différence ?

Pour les consommateurs français, la différence pratique entre une carte Visa et une carte Mastercard est minime au quotidien. Les deux réseaux offrent une acceptation quasi-universelle en France et dans les principaux pays touristiques. Les différences apparaissent dans les détails : certains programmes de fidélité sont liés à l'un ou l'autre réseau, certaines assurances incluses dans les cartes premium peuvent varier entre les deux réseaux, et quelques pays exotiques peuvent favoriser l'un sur l'autre.

La vraie différence se situe davantage dans le niveau de la carte (Standard, Gold, Premier, Infinite) que dans le réseau lui-même. Une Visa Infinite offre des avantages significativement supérieurs à une Mastercard Standard, même si les deux partagent théoriquement le même réseau Visa/Mastercard. Le choix entre Visa et Mastercard se résume souvent à ce que propose la banque choisie — la plupart des banques française n'offrent pas les deux réseaux et le client reçoit celui que propose sa banque.

## La tokenisation comme avenir du paiement par carte

La tokenisation est la technologie qui est en train de transformer profondément la sécurité des paiements par carte. Plutôt que de transmettre le vrai numéro de carte lors d'une transaction, un token — un numéro substitut temporaire et sans valeur en dehors du contexte de la transaction — est utilisé. Cette technologie est déjà à l'œuvre dans les paiements via Apple Pay et Google Pay, et s'étend progressivement aux paiements en ligne et aux transactions physiques.

L'intérêt de la tokenisation pour la sécurité est considérable : si un token est intercepté ou volé, il ne peut pas être utilisé pour effectuer d'autres transactions car il est lié à un contexte spécifique (marchand, montant, date). Contrairement aux données de carte traditionnelles qui peuvent être réutilisées à l'infini si elles sont compromises, un token piraté est inutilisable. Cette technologie, combinée à l'authentification forte DSP2, est en train de rendre les fraudes à la carte de plus en plus difficiles à réaliser.

## Les cartes de crédit révolutives : fonctionnement et risques

Les cartes de crédit revolving, parfois proposées dans les magasins (carte de fidélité avec crédit intégré) ou par des organismes de crédit spécialisés, fonctionnent comme un crédit renouvelable : chaque remboursement recharge le crédit disponible, créant un cycle d'endettement potentiellement difficile à gérer. Les taux d'intérêt de ces cartes sont généralement très élevés — souvent entre 15% et 20% annuels — ce qui en fait l'une des formes de crédit les plus coûteuses disponibles sur le marché français.

Pour les étudiants, les cartes revolving sont à éviter catégoriquement. Leur marketing attrayant (disponibilité immédiate, pas de refus, utilisation flexible) masque un coût réel qui peut rapidement transformer une petite dette en fardeau financier important. Un achat de 300 euros remboursé en petites mensualités sur une carte revolving à 18% d'intérêts peut coûter 150 euros supplémentaires en intérêts. Les offres des organismes de financement présents dans les grandes surfaces sont particulièrement agressives commercialement — vérifier toujours le taux effectif global (TEG) avant d'accepter toute forme de crédit associée à une carte.

## L'impact de la carte bancaire sur le quotient d'emprunt futur

La façon dont on gère sa carte bancaire aujourd'hui influence directement sa capacité d'emprunt futur. Les banques analysent l'historique de compte lors d'une demande de crédit immobilier ou à la consommation : des dépassements fréquents du découvert autorisé, des incidents de paiement répétés (chèques sans provision, prélèvements rejetés), et une utilisation chronique du découvert sont des signaux négatifs qui affectent l'évaluation du dossier.

À l'inverse, une gestion méticuleuse du compte — solde maintenu positif, aucun incident de paiement, épargne régulière — constitue un historique positif. Les banques ne consultent pas un score de crédit centralisé comme dans les pays anglosaxons, mais elles ont accès aux fichiers négatifs (FICP - Fichier National des Incidents de Remboursement des Crédits aux Particuliers) qui recensent les incidents sérieux, et elles analysent leurs propres données d'historique client. Un étudiant qui établit une relation bancaire propre pendant ses années d'études se donne les meilleures chances pour ses futurs projets de crédit.
`;

const EXT2_L2 = `
## Les conditions d'obtention d'une carte premium dès les études

Les cartes premium (Visa Premier, Mastercard Gold) sont généralement réservées aux titulaires de revenus élevés ou aux clients avec un historique bancaire solide. Cependant, certaines banques proposent des conditions préférentielles pour les étudiants de grandes écoles ou les étudiants en alternance. La justification commerciale est claire : un étudiant de grande école ou d'école d'ingénieurs deviendra vraisemblablement un professionnel à revenus élevés — la banque investit dans la relation de long terme.

Pour obtenir une carte premium en tant qu'étudiant, les voies possibles sont : être étudiant dans un établissement partenaire de la banque (certaines banques ont des accords avec les grandes écoles), avoir un compte avec domiciliation de revenus d'alternance significatifs, ou souscrire à une offre payante qui inclut une carte premium. Les avantages pratiques d'une carte premium — assurances voyages étendues, assistance médicale internationale, accès aux lounges d'aéroport avec certaines cartes très haut de gamme — peuvent justifier le coût pour les étudiants qui voyagent fréquemment dans le cadre de leurs études ou de stages à l'étranger.

## La portabilité bancaire et le changement de carte

Changer de banque implique souvent de changer de carte. Le numéro de carte bancaire est unique à chaque carte physique et change à chaque renouvellement ou changement d'établissement. Cela signifie que tous les paiements récurrents (abonnements Netflix, Spotify, Amazon Prime, salles de sport, mutuelles) qui sont liés au numéro de carte doivent être mise à jour manuellement avec le nouveau numéro.

Cette mise à jour des paiements récurrents est l'une des frictions majeures du changement de banque. Certaines banques facilitent ce processus en proposant une liste des entreprises chez lesquelles des paiements récurrents ont été effectués avec l'ancienne carte, permettant au client de les contacter facilement pour mettre à jour ses informations de paiement. Des services tiers spécialisés dans la migration de paiements récurrents émergent également. Planifier ce changement et consacrer du temps à la mise à jour systématique des paiements récurrents est indispensable pour éviter des interruptions de service.

## Les cartes pour les seniors et leur utilisation par une génération connectée

Les cartes bancaires pour seniors, proposées dans certaines banques traditionnelles, intègrent des fonctionnalités de protection supplémentaires adaptées aux risques spécifiques des personnes âgées : plafonds de retrait réduits, notifications systématiques des transactions, et accès simplifié au service client humain. Ces offres sont mentionnées ici non pour leur pertinence directe pour les étudiants, mais parce que certains étudiants gèrent les finances de parents ou grands-parents et doivent comprendre l'offre bancaire globale.

La digitalisation bancaire a créé une fracture numérique qui touche particulièrement les seniors peu familiers avec les applications mobiles. Les banques traditionnelles, avec leurs réseaux d'agences et leurs conseillers humains accessibles, restent plus adaptées pour les personnes qui ont besoin d'assistance physique dans leurs démarches bancaires. Cette dimension est un facteur dans les décisions familiales de choix bancaire — les enfants et petits-enfants qui conseillent leurs aînés doivent tenir compte de cette réalité dans leurs recommandations.
`;

const EXT2_L3 = `
## Le refus de paiement par carte : causes et solutions

Un paiement refusé par carte est une situation embarrassante qui peut avoir plusieurs causes distinctes. Le dépassement du plafond de paiement ou de retrait est la cause la plus fréquente et la plus facilement résolue — un coup de fil à la banque ou une modification dans l'application suffit. La suspicion de fraude — quand le système de détection de la banque identifie une transaction comme anormale par rapport aux habitudes du titulaire — peut aussi entraîner un blocage automatique temporaire.

D'autres causes possibles : un solde insuffisant sans découvert autorisé, un code PIN saisi de façon incorrecte trois fois consécutives (ce qui bloque la carte pour 24 heures), un commerçant dont le terminal est en panne ou incompatible avec le type de carte, ou une carte expirée. Pour les paiements en ligne, une carte refusée peut aussi indiquer que le marchand a bloqué les cartes émises dans certains pays, ou que le code de sécurité (CVV/CVC) saisi est incorrect. Identifier la cause précise du refus est la première étape pour résoudre le problème rapidement.

## Les retraits à l'étranger : précautions et alternatives

Retirer des espèces à l'étranger avec sa carte française est possible dans la quasi-totalité des pays du monde via les réseaux Visa et Mastercard. Cependant, au-delà des frais déjà évoqués, plusieurs précautions s'imposent. Dans certains pays, les distributeurs automatiques peuvent pratiquer une conversion dynamique de devises (DCC — Dynamic Currency Conversion) : le terminal propose de convertir le montant dans la devise de la carte (euros) plutôt que dans la devise locale. Cette conversion est presque toujours défavorable car le taux appliqué est celui du gestionnaire du distributeur et non le taux interbancaire. Il faut systématiquement refuser cette option et choisir d'être débité en devise locale.

Les pays à forte prévalence de fraudes bancaires méritent une vigilance accrue. Dans certaines zones géographiques, des dispositifs de skimming ou de "shoulder surfing" (observation du code PIN par-dessus l'épaule du retrait) sont plus fréquents. Privilégier les distributeurs dans les banques et les hôtels sécurisés, effectuer les retraits en journée dans des zones fréquentées, et bloquer la carte via l'application immédiatement après le séjour si des retraits inhabituels étaient nécessaires sont de bonnes pratiques pour les voyages dans des destinations moins sécurisées.

## La carte bancaire et les obligations du commerçant

Les commerçants qui acceptent les cartes bancaires ont des obligations légales vis-à-vis des clients. Un commerçant ne peut pas imposer un surcoût pour le paiement par carte (sauf dans des cas spifiques d'achats de billets d'avion ou de plateformes en ligne où des frais de paiement sont autorisés et doivent être clairement affichés avant la transaction). En France, l'obligation d'accepter les cartes s'applique dès lors que le commerçant a un terminal de paiement — il ne peut pas refuser un paiement valide par carte sans raison légitime.

Le droit au remboursement d'un achat par carte est un point de friction fréquent. Quand un client retourne un article, le commerçant est techniquement tenu de rembourser sur la même carte — il ne peut pas imposer un avoir ou un remboursement en espèces si le paiement initial a été effectué par carte. En pratique, certains commerçants proposent d'abord un avoir, et la plupart des clients acceptent sans connaître leur droit au remboursement sur la même carte. Connaître ce droit permet de l'invoquer poliment en cas de préférence pour un remboursement réel.
`;

const EXT2_L4 = `
## L'optimisation des remboursements de frais professionnels

Pour les étudiants en alternance ou en stage long qui avancent des frais professionnels remboursés par leur entreprise, la gestion de ces dépenses avec la carte bancaire mérite une organisation rigoureuse. Garder une trace précise de chaque dépense professionnelle — en prenant en photo le ticket de caisse immédiatement lors de l'achat, en taggant la transaction dans l'application bancaire comme "professionnel" si cette fonctionnalité est disponible, et en transmettant régulièrement ses notes de frais à l'employeur — est une habitude professionnelle qui impressionne les employeurs et qui évite les discussions sur les remboursements.

Certaines applications de gestion de notes de frais (Expensify, N2F) sont compatibles avec les données bancaires et permettent de créer des notes de frais automatiquement à partir des transactions de carte. Cette automatisation transforme une tâche administrative fastidieuse en un processus de quelques clics. Pour les alternants qui avancent régulièrement des frais significatifs (transports, repas clients, matériaux), cet outil est un gain de temps considérable et réduit le risque d'oublier certains remboursements.

## Les cartes à contrôle parental pour les étudiants sous dépendance financière

Pour les étudiants financièrement dépendants de leurs parents (la grande majorité des étudiants de moins de 22 ans), des cartes avec fonctionnalités de contrôle parental peuvent être un outil de transition vers l'autonomie financière. Des applications comme Pixpay, Kard, et certaines offres des banques en ligne permettent aux parents de fixer des plafonds de dépenses par catégorie, de recevoir des notifications pour chaque transaction, et d'approuver ou refuser certains achats.

Cette supervision parentale, bien gérée dans une logique pédagogique plutôt que de contrôle strict, peut accompagner l'apprentissage de la gestion financière de façon bienveillante. Le jeune gagne en progressivité en autonomie — les plafonds augmentent, les catégories supervisées diminuent — à mesure que sa maturité financière se confirme. Cette approche progressive évite deux extrêmes : le contrôle total qui empêche l'apprentissage par l'expérience, et l'autonomie totale sans filet qui peut mener à de mauvaises décisions financières difficiles à corriger.

## La réglemenation des taux effectifs globaux sur les crédits associés aux cartes

Le Taux Effectif Global (TEG) est l'indicateur réglementaire obligatoire qui permet de comparer le vrai coût d'un crédit. Il inclut tous les frais associés — taux d'intérêt de base, frais de dossier, cotisation d'assurance obligatoire — exprimés en pourcentage annuel du montant emprunté. Pour les crédits revolving associés aux cartes (cartes de magasins, cartes de crédit renouvelable), le TEG est obligatoirement affiché sur les contrats et les relevés.

La loi Lagarde de 2010 a renforcé la protection des consommateurs en matière de crédit renouvelable en France : les demandes de remboursement minimum ont été revues à la hausse pour réduire le risque d'endettement chronique, et les informations sur le coût réel du crédit doivent être présentées de façon parfaitement lisible. Malgré ces protections, les crédits revolving restent une source d'endettement important pour les ménages fragiles financièrement. La règle de prudence est simple : ne jamais utiliser une carte de crédit revolving pour des dépenses courantes, et si une telle carte est détenue, la rembourser intégralement chaque mois pour éviter tout intérêt.
`;

const EXT2_L5 = `
## Le rechargement des cartes prépayées : méthodes et délais

Les cartes prépayées peuvent être rechargées par différents canaux selon l'émetteur. Les méthodes les plus courantes sont le virement bancaire depuis le compte courant (généralement instantané ou en quelques heures pour les virements SEPA), le rechargement par carte bancaire (soumis aux plafonds de la carte source), et le rechargement en espèces dans des points de vente agréés (bureaux de tabac, supermarchés). Chaque méthode a ses propres délais et peut engendrer des frais variables.

Pour les cartes prépayées utilisées pour les dépenses quotidiennes, préparer les rechargements à l'avance évite les situations de blocage. Programmer un virement automatique régulier depuis le compte courant vers la carte prépayée est la méthode la plus simple pour maintenir un solde suffisant sans y penser. Certaines cartes prépayées permettent de configurer ce rechargement automatique directement dans leur application avec un montant et une fréquence définis par l'utilisateur.

## Les assurances incluses dans les cartes bancaires et leur utilisation concrète

Les assurances incluses dans les cartes bancaires premium sont un avantage souvent surestimé en valeur théorique et sous-utilisé en pratique. L'assurance annulation voyage couvre les billets et hébergements prépayés non remboursables en cas d'annulation pour cause médicale ou événement imprévu grave — mais les conditions d'activation (paiement du voyage avec la carte concernée, déclaration du sinistre dans les délais, franchise applicable) sont méconnues. Une couverture de 5 000 euros d'assurance voyage n'a aucune valeur pratique si le titulaire ne sait pas comment l'activer.

La recommandation pratique est de lire les conditions générales de garantie de sa carte au moins une fois, de noter les numéros d'assistance et les délais de déclaration dans un document facilement accessible, et de tester une petite procédure de sinistre si l'occasion se présente pour se familiariser avec le processus. Les assistances médicales à l'étranger — souvent les garanties les plus précieuses — doivent être contactées au moment du problème et non après le retour en France : elles organisent l'assistance sur place et prennent en charge directement les dépenses médicales éligibles, ce qui évite l'avance de frais parfois considérables.

## La carte et la gestion des dépôts de garantie

Les hôtels, les agences de location de voiture, et certains services demandent une empreinte de carte bancaire comme garantie lors de la réservation ou de la prise en charge. Cette empreinte peut prendre la forme d'une pré-autorisation — un montant bloqué sur le compte sans être réellement débité — qui est libérée si aucun incident n'est constaté. La particularité des pré-autorisations est que le montant bloqué réduit le solde disponible sans apparaître comme une transaction prélevée, ce qui peut surprendre si on ne s'y attend pas.

Pour les étudiants qui louent une voiture pour un voyage ou qui réservent un hébergement avec caution, vérifier que la carte a un plafond suffisant pour absorber la pré-autorisation en plus des dépenses prévues est une précaution indispensable. Les pré-autorisations d'hôtels peuvent atteindre plusieurs centaines d'euros, et les agences de location de voiture peuvent bloquer jusqu'à 1 000 ou 2 000 euros en garantie. Avoir un plafond de carte suffisant et informer sa banque du voyage à l'avance (pour éviter les blocages de précaution sur des transactions en pays étranger) permet d'éviter des situations bloquantes pendant les voyages.
`;

const EXT2_L6 = `
## La continuité de service lors d'un remplacement de carte

Le remplacement d'une carte bancaire — que ce soit pour expiration, perte, ou demande voluntaire — peut créer une période de vulnérabilité pour les services liés à la carte. Les abonnements numériques (streaming, logiciels, services en ligne) qui font l'objet de prélèvements automatiques sur le numéro de carte doivent être mis à jour avec le nouveau numéro pour éviter des interruptions de service. Cette mise à jour est une tâche administrative qui doit être planifiée à l'avance.

Certaines banques proposent ce qu'on appelle la "mise à jour automatique du numéro de carte" via les réseaux Visa et Mastercard — un service qui transmet automatiquement le nouveau numéro de carte aux commerçants qui ont enregistré l'ancien numéro pour des prélèvements récurrents. Ce service est disponible chez plusieurs grandes banques françaises et néobanques. Vérifier si sa banque propose ce service et l'activer si c'est possible réduit significativement les désagréments liés au remplacement de carte.

## L'importance de l'éducation financière pour une meilleure gestion des cartes

La carte bancaire est un outil puissant qui peut faciliter la vie ou, mal utilisé, générer des difficultés financières. L'éducation financière — comprendre comment fonctionne le crédit, comment calculer le coût réel d'une dette, comment construire une épargne — est la fondation qui permet d'utiliser tous les outils bancaires, y compris la carte, de façon éclairée.

En France, des ressources d'éducation financière sont disponibles gratuitement : les ateliers budgétaires des centres communaux d'action sociale (CCAS), les ressources en ligne de la Banque de France (educationfinanciere.fr), les ateliers organisés par des associations comme Crésus, spécialisée dans la prévention et le traitement du surendettement. Les services sociaux des universités organisent parfois des ateliers de gestion budgétaire pour les étudiants en difficulté. Ces ressources sont sous-utilisées par les étudiants qui ne savent pas qu'elles existent — les connaître et les utiliser proactivement, sans attendre une situation d'urgence, est la marque d'une gestion financière mature et préventive.
`;

await appendAndPatch('fe29b046-82a5-408a-b117-a9c7b9c50c24', EXT2_L1);
await appendAndPatch('5c697fb8-6b1a-4ef0-871f-79d7ed372077', EXT2_L2);
await appendAndPatch('81753618-bf6e-4b22-80ba-30bb611450a6', EXT2_L3);
await appendAndPatch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', EXT2_L4);
await appendAndPatch('733031c8-73a4-44a3-a08c-2df6974a2545', EXT2_L5);
await appendAndPatch('74596b8d-7648-452c-bc1b-1d61d29f05ca', EXT2_L6);
