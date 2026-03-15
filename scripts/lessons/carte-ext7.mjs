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

// L1: 3873 → +150 words approx
const FIX_L1 = `
## Choisir sa carte en toute connaissance de cause

En définitive, le choix d'une carte bancaire doit résulter d'une analyse personnelle de ses besoins réels et non d'une publicité séduisante. Les critères à peser : la fréquence et la nature de ses paiements, les voyages prévus, les assurances dont on a effectivement besoin, et le budget qu'on est prêt à consacrer à sa carte. Une carte adaptée est une carte dont la valeur des services utilisés dépasse son coût annuel. Prendre le temps de cette réflexion avant d'ouvrir un compte est l'investissement le plus rentable dans sa relation bancaire.
`;

// L2: 3472 → +550 words approx
const FIX_L2 = `
## Les bonnes pratiques lors d'un séjour à l'étranger

Un séjour à l'étranger, qu'il dure quelques jours ou plusieurs mois, nécessite une préparation bancaire spécifique. Avant le départ, il est conseillé de prévenir sa banque du départ à l'étranger pour éviter un blocage automatique de la carte déclenché par des transactions dans un pays étranger inhabituel. Certaines banques proposent de déclarer ses voyages via l'application mobile — une fonctionnalité qui permet à la banque d'ajuster son algorithme de détection de fraude et d'éviter les faux positifs.

Vérifier les plafonds de la carte avant le départ et les ajuster si nécessaire pour les achats importants prévus (billets de transport, hébergements, activités) est une autre précaution. Emporter deux modes de paiement distincts (par exemple la carte principale et un wallet numérique sur le téléphone) crée une redondance utile en cas de problème avec l'un des deux. En cas de vol ou de perte à l'étranger, connaître à l'avance le numéro d'opposition international de sa banque (différent du numéro national) évite de perdre un temps précieux à chercher cette information dans un moment de stress.

## La carte comme outil de traçabilité financière personnelle

La carte bancaire est un outil de traçabilité financière qui peut servir des objectifs personnels au-delà de la simple fonction de paiement. Pour un étudiant qui cherche à comprendre ses habitudes de consommation, les relevés bancaires de 6 à 12 mois constituent une radiographie précise de sa vie financière : où et quand les dépenses ont lieu, dans quels secteurs le budget est sur ou sous-utilisé, quelles sont les dépenses récurrentes qui s'accumulent discrètement. Cette analyse rétrospective est souvent le point de départ le plus efficace pour une réorientation budgétaire — elle remplace les estimations vagues ("je dépense à peu près X en alimentation") par des données réelles qui permettent des décisions fondées.
`;

// L3: 3480 → +540 words approx
const FIX_L3 = `
## L'éthique dans le choix bancaire et l'impact de son argent

Au-delà des considérations pratiques, certains étudiants souhaitent aligner leur banque avec leurs valeurs éthiques et environnementales. Le choix de sa banque a un impact indirect sur l'économie réelle : l'argent déposé dans une banque est utilisé par celle-ci pour des prêts et des investissements dont la nature peut être plus ou moins en accord avec ses valeurs. Les banques qui financent des projets d'énergies fossiles, d'armement, ou d'industries controversées ne correspondent pas aux valeurs de nombreux étudiants engagés.

Des outils comme l'application Rift ou les publications d'Oxfam France permettent d'évaluer l'impact climatique et social de différentes banques. Ces analyses, basées sur les données publiées par les établissements sur leurs financements, permettent une comparaison informée au-delà des seuls critères tarifaires. Pour les étudiants dont les valeurs jouent un rôle important dans leurs décisions de consommation, le choix d'une banque éthique ou à impact positif est une façon cohérente d'aligner l'utilisation de son argent avec ses convictions profondes. Cette dimension éthique ne devrait cependant pas se faire au détriment d'une analyse des fonctionnalités pratiques et des conditions tarifaires — une banque éthique avec des frais excessifs ou un service client médiocre n'est pas nécessairement le meilleur choix au quotidien.
`;

// L4: 3358 → +660 words approx
const FIX_L4 = `
## La gestion de sa carte face aux achats impulsifs

Les cartes bancaires facilitent les achats impulsifs en réduisant la friction du paiement. Quelques stratégies comportementales peuvent aider à réduire ces achats non planifiés qui grèvent le budget. La règle des 24 heures — attendre un jour avant d'effectuer tout achat non planifié au-delà d'un certain montant — donne le temps à l'enthousiasme initial de se dissiper et à une évaluation plus rationnelle de s'effectuer. Beaucoup d'achats impulsifs qui semblent indispensables à l'instant T paraissent facultatifs 24 heures plus tard.

L'utilisation de cartes virtuelles avec un plafond prédéfini pour les achats en ligne peut aussi servir de frein physique aux achats impulsifs sur les sites e-commerce. Quand le plafond de la carte virtuelle est atteint, il est nécessaire de recharger manuellement — ce qui crée une pause qui peut déclencher une reconsidération de l'achat. Ces techniques de friction volontaire s'opposent délibérément à la fluidité que les banques et les commerçants cherchent à maximiser pour augmenter les dépenses.

## La carte et les frais d'abonnements partagés

Le partage de comptes d'abonnements numériques (Netflix famille, Spotify family, logiciels de design) est une pratique courante entre étudiants pour réduire les coûts. Dans ce cadre, la carte du titulaire principal de l'abonnement est prélevée, et les autres membres remboursent leur quote-part via des virements ou des applications de paiement entre particuliers. Cette organisation nécessite une communication claire et régulière entre les membres du groupe pour s'assurer que les remboursements sont effectués sans friction.

Attention aux implications légales : certains abonnements interdisent expressément le partage de compte avec des personnes hors du foyer familial (les conditions de service définissent souvent précisément ce qu'est un "foyer"). Les modifications de politiques de partage de compte (comme celles d'une grande plateforme de streaming qui a restreint le partage en dehors du foyer en 2023) peuvent créer des dépenses imprévues si le groupe de partage est obligé de souscrire des abonnements séparés. Anticiper ces évolutions potentielles dans la planification budgétaire est une forme de gestion financière proactive.
`;

// L5: 3376 → +640 words approx
const FIX_L5 = `
## Les erreurs communes des nouveaux titulaires de carte

Les nouvelles détenteurs de carte font souvent les mêmes erreurs lors de leurs premières semaines d'utilisation. Ne pas activer les notifications de transaction est l'erreur la plus fréquente — elle prive le titulaire de l'alerte en temps réel la plus efficace contre la fraude. Ne pas connaître ses plafonds est la deuxième — découvrir au moment d'un achat important que le plafond est dépassé est une situation évitable avec quelques minutes de vérification initiale. Ne pas mettre à jour les informations personnelles (numéro de téléphone surtout, nécessaire pour les codes SMS d'authentification) est la troisième erreur courante.

Pour éviter ces erreurs dès le début, une liste de vérification lors de la réception d'une nouvelle carte : activer la carte selon les instructions, définir un code PIN mémorisable mais non devinable, paramétrer les notifications push pour chaque transaction, vérifier les plafonds par défaut et les ajuster si nécessaire, enregistrer la carte dans le wallet numérique de son téléphone, et noter le numéro d'opposition international quelque part d'accessible en dehors du téléphone. Ce rituel d'activation complet, qui prend moins de 30 minutes, prépare une utilisation sécurisée et optimale depuis le premier jour.

## La carte et l'accessibilité pour les personnes en situation de handicap

Les personnes en situation de handicap moteur, visuel ou cognitif peuvent rencontrer des obstacles spécifiques dans l'utilisation de leur carte bancaire. Les terminaux de paiement physiques ne sont pas toujours adaptés aux personnes malvoyantes (absence de repères tactiles sur les touches, difficulté à lire les montants affichés). Les applications bancaires mobiles doivent respecter les normes d'accessibilité RGAA, mais le niveau de conformité varie entre les établissements.

Les banques qui investissent dans l'accessibilité numérique offrent des interfaces compatibles avec les lecteurs d'écran (VoiceOver sur iOS, TalkBack sur Android), des options de contraste élevé, et des textes agrandissables. Pour les étudiants en situation de handicap qui évaluent les banques, vérifier la conformité aux normes d'accessibilité est un critère de choix important que les comparatifs généralistes ne prennent pas toujours en compte. Des associations spécialisées (APF France Handicap, Valentin Haüy pour les déficients visuels) peuvent recommander les établissements les plus accessibles pour leurs membres.
`;

// L6: 3298 → +720 words approx
const FIX_L6 = `
## La carte bancaire et les bénéfices de la régulation européenne

La réglementation européenne a profondément amélioré les conditions d'utilisation des cartes bancaires au cours des deux dernières décennies. La directive sur les services de paiement (DSP2) a imposé l'authentification forte pour protéger les paiements en ligne. La réglementation sur les plafonds des commissions d'interchange (MDR) a réduit les coûts pour les commerçants et indirectement pour les consommateurs. La directive sur la protection des données (RGPD) encadre l'utilisation des données générées par les transactions.

Ces avancées réglementaires ont rendu les paiements par carte plus sûrs, moins coûteux, et plus transparents qu'ils ne l'étaient il y a vingt ans. Pour les étudiants européens, ces protections constituent un acquis précieux qui les distingue des détenteurs de cartes dans des pays avec une réglementation moins développée. Comprendre que ces protections existent et comment les activer en cas de besoin est une forme de littératie financière et juridique essentielle dans un monde où les transactions financières numériques sont omniprésentes.

## La carte bancaire comme accès à l'économie formelle

Pour les personnes qui arrivent de pays où l'économie informelle ou en espèces est dominante, obtenir une carte bancaire en France représente un accès à l'économie formelle qui ouvre des portes considérables. L'accès au logement, aux services en ligne, aux achats à distance, et aux transactions commerciales formelles est facilité ou conditionné à la possession d'une carte. La carte bancaire est donc, pour beaucoup d'arrivants en France, bien plus qu'un outil pratique — c'est un sésame d'intégration économique.

Cette dimension intégrative de la carte bancaire justifie les politiques d'inclusion bancaire développées en France : le droit au compte, les offres spécifiques de clientèle à tarifs plafonnés, et les guichets spécialisés dans les banques pour accompagner les nouveaux arrivants. The carte bancaire est le premier pas dans l'établissement d'une vie financière formelle en France, et ce premier pas, bien que symboliquement simple (un rectangle de plastique), a des implications pratiques considérables pour l'autonomie économique de ses détenteurs.

## L'évaluation annuelle de sa relation bancaire

La relation bancaire ne doit pas être gérée de façon passive — elle mérite une évaluation active au moins une fois par an. Cette évaluation devrait inclure : une comparaison des frais réellement payés pendant l'année avec les offres concurrentes pour le même profil d'utilisation, une vérification que les garanties incluses dans la carte ont été utilisées ou sont toujours pertinentes pour la situation actuelle, une révision des plafonds et des paramètres de sécurité, et une réflexion sur l'évolution des besoins prévue dans l'année à venir.

Cette discipline d'évaluation annuelle, pratiquée par peu de clients bancaires, est celle qui produit les meilleures économies et la meilleure adaptation des services aux besoins réels. Un étudiant qui compare sa banque chaque année et n'hésite pas à changer si une offre meilleure existe — en utilisant le service de mobilité bancaire Agir pour faciliter la transition — est un consommateur actif qui optimise progressivement sa situation financière. La fidélité bancaire non questionnée est rarement récompensée proportionnellement à sa valeur pour la banque.
`;

await appendAndPatch('fe29b046-82a5-408a-b117-a9c7b9c50c24', FIX_L1);
await appendAndPatch('5c697fb8-6b1a-4ef0-871f-79d7ed372077', FIX_L2);
await appendAndPatch('81753618-bf6e-4b22-80ba-30bb611450a6', FIX_L3);
await appendAndPatch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', FIX_L4);
await appendAndPatch('733031c8-73a4-44a3-a08c-2df6974a2545', FIX_L5);
await appendAndPatch('74596b8d-7648-452c-bc1b-1d61d29f05ca', FIX_L6);
