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

// L1: 3743 → petite extension
const EXT6_L1 = `
## L'avenir de la carte bancaire dans un écosystème financier renouvelé

La carte bancaire reste aujourd'hui l'outil de paiement dominant en France et en Europe, mais son rôle dans l'écosystème financier évolue progressivement. La frontière entre carte physique, application mobile, et portefeuille numérique devient de plus en plus floue. Les usages se diversifient et les besoins des consommateurs changent. Pour les étudiants qui démarrent avec une première carte bancaire, comprendre ce contexte d'évolution leur permet d'être des utilisateurs actifs et avertis des transformations à venir, capables de s'adapter aux nouvelles solutions qui émergeront sans renoncer aux protections et aux services qui font toujours la valeur d'une carte bancaire bien choisie. La maîtrise actuelle des fondamentaux — sécurité, frais, droits — est la base sur laquelle toutes les adaptations futures s'appuient.
`;

// L2: 3040 → besoin ~+960
const EXT6_L2 = `
## L'ouverture de compte en ligne : avantages et pièges à éviter

L'ouverture de compte entièrement en ligne, sans passer par une agence, est maintenant la norme pour les banques en ligne. Le processus est généralement simple et rapide, mais quelques pièges méritent d'être anticipés. Le premier piège est de ne pas lire attentivement les conditions générales — certaines offres qui semblent gratuites incluent des conditions d'utilisation minimale (nombre de transactions, domiciliation de revenus) dont le non-respect génère des frais. Le deuxième est de ne pas garder une copie de tous les documents soumis lors de l'ouverture — en cas de litige ultérieur sur les conditions initiales du contrat, avoir conservé les preuves de ce qui a été accepté et de ce qui a été accepté est indispensable.

## Les délais de traitement des oppositions et leur impact

Faire opposition sur une carte bancaire est une opération qui prend effet immédiatement sur le plan technique — la carte est bloquée dans les secondes suivant l'appel au serveur d'opposition ou la validation dans l'application. Cependant, les transactions qui étaient déjà "en attente" de validation au moment de l'opposition peuvent parfois passer avant que le blocage ne soit pris en compte dans certains systèmes. Pour minimiser ce risque, l'opposition doit être effectuée aussi rapidement que possible dès la constatation de la perte ou du vol.

## La carte et l'effet psychologique sur les dépenses

Des études en psychologie comportementale ont montré que les paiements par carte génèrent moins de "douleur psychologique" que les paiements en espèces. Sortir physiquement des billets de sa poche ancre davantage la réalité du coût d'un achat que le geste abstrait de toucher une carte à un terminal. Cette différence peut conduire à des dépenses plus importantes avec la carte qu'avec les espèces, souvent sans que l'utilisateur en soit conscient. Pour les étudiants avec un budget limité qui ont tendance à dépenser excessivement, réserver certaines dépenses discrétionnaires aux espèces peut être un outil efficace pour reprendre conscience de la valeur de l'argent.

## Les étudiants travailleurs et la gestion de plusieurs cartes

Les étudiants qui travaillent en parallèle de leurs études — job étudiant, missions de freelance, alternance — peuvent se retrouver avec plusieurs cartes bancaires associées à différents comptes. Une organisation rigoureuse est nécessaire pour éviter la confusion : quelle carte est reliée à quel compte, quels plafonds sont associés à chaque carte, et quels abonnements sont liés à quelle carte. Un simple tableau récapitulatif, mis à jour à chaque nouvelle carte ou nouveau compte, est une aide précieuse pour maintenir une vision claire de sa situation bancaire multi-comptes.
`;

// L3: 3025 → besoin ~+975
const EXT6_L3 = `
## L'importance de la traçabilité bancaire dans les procédures d'immigration

Pour les étudiants étrangers qui anticipent des procédures d'immigration en France — renouvellement de titre de séjour, demande de statut de résident, naturalisation à terme — l'historique bancaire est un document important. Les préfectures évaluent la capacité d'autofinancement et la stabilité financière des demandeurs à partir de leurs relevés bancaires. Des relevés montrant des revenus réguliers, une épargne progressive, et une gestion sans incidents sont des éléments positifs pour les dossiers d'immigration.

Cette implication de l'historique bancaire dans les procédures d'immigration est une raison supplémentaire de gérer son compte de façon irréprochable depuis les premières années en France. Les incidents bancaires — rejets de prélèvements, impayés, découverts répétés — peuvent être interprétés comme des signes d'instabilité financière dans le contexte d'une évaluation de la capacité à résider autonomement en France.

## Les cartes bancaires et les coûts cachés à surveiller

Les frais bancaires liés à la carte peuvent prendre des formes insidieuses. Les frais de papier (envoi d'un relevé papier mensuel facturé quelques euros par mois alors que le relevé numérique est gratuit), les frais d'opposition téléphonique hors d'un numéro standard (numéro surtaxé pour signaler la perte), et les frais d'envoi d'une carte de remplacement en express sont des exemples de frais qui apparaissent rarement dans les tarifs mis en avant par les banques mais qui peuvent surprendre.

Lire la grille tarifaire complète de sa banque — publiée obligatoirement sur le site internet et communiquée à la demande — au moins une fois lors de l'ouverture du compte permet d'identifier ces frais potentiels. Paramétrer les alertes et notifications dans l'application permet souvent d'éviter de payer pour des informations dans la mesure où elles sont disponibles gratuitement via ce canal numérique. La vigilance tarifaire est une habitude de consommateur averti qui s'applique aux services bancaires comme à tout autre service.

## Les cartes pour les micro-entrepreneurs : fonctionnalités spécifiques

Les cartes bancaires destinées aux micro-entrepreneurs et auto-entrepreneurs ont des fonctionnalités spécifiques que les cartes personnelles n'ont pas. La séparation automatique des dépenses professionnelles et personnelles dans des catégories distinctes, l'export des transactions en format comptable (CSV, OFX) compatible avec les logiciels de comptabilité, et la génération automatique de justificatifs de paiement pour les notes de frais sont des fonctionnalités qui ont une valeur pratique concrète pour la gestion d'une activité indépendante.

Pour les étudiants qui développent une micro-entreprise en parallèle de leurs études, investir dans un compte professionnel avec ces fonctionnalités simplifie considérablement la gestion administrative de l'activité. Le coût de ces comptes professionnels spécialisés (souvent 5 à 15 euros par mois pour des solutions comme Qonto ou Shine) est déductible du chiffre d'affaires de la micro-entreprise en régime réel — ce qui réduit l'impôt correspondant.
`;

// L4: 2891 → besoin ~+1109
const EXT6_L4 = `
## La gestion des frais bancaires dans le cadre d'une relation durable

La tarification bancaire évolue dans le temps, et une offre attractive lors de l'ouverture du compte peut devenir moins compétitive avec les modifications tarifaires ou l'évolution des besoins. Les banques ont l'obligation légale de notifier les modifications de tarifs avec un préavis de deux mois. Cette notification peut prendre la forme d'un email, d'un message dans l'application, ou d'un courrier — selon les canaux de communication configurés.

La vigilance face à ces notifications est une compétence de consommateur bancaire actif. Ignorer un email d'une banque qui modifie ses conditions tarifaires peut signifier accepter des frais supplémentaires sans s'en apercevoir. Configurer des alertes spécifiques pour les communications officielles de sa banque — les distinguer des emails marketing — permet de ne pas rater ces informations importantes. En France, les frais bancaires anormalement élevés peuvent être signalés à l'Observatoire des Tarifs Bancaires, qui publie annuellement des comparatifs des tarifs des principales banques.

## Le rôle pédagogique de la première carte bancaire

La première carte bancaire est souvent le premier contact d'un jeune adulte avec la responsabilité financière directe et les conséquences réelles d'une mauvaise gestion. Un découvert créé par inattention, un abonnement oublié qui se prélève chaque mois, ou une publicité de crédit facile mal évaluée peuvent être des expériences d'apprentissage douloureuses à court terme mais formatrices à long terme.

L'approche pédagogique optimale est de traiter ces incidents non comme des catastrophes mais comme des opportunités d'apprentissage. Analyser pourquoi le découvert s'est produit, identifier le comportement qu'il faut changer, et mettre en place un dispositif qui évite que cela se reproduise (alerte de solde faible, plafond d'utilisation, virement d'épargne automatique) transforme une erreur en progress financial. Cette démarche réflexive sur sa propre gestion financière est une compétence qui se développe progressivement et qui a des bénéfices tout au long de la vie.

## La carte en mode dégradé : payer sans sa carte physique

Les situations où la carte physique n'est pas disponible — oubliée à domicile, en cours de renouvellement, temporairement bloquée — peuvent être gérées sans rencontrer de difficultés si les alternatives sont connues à l'avance. Les wallets numériques (Apple Pay, Google Pay) fonctionnent indépendamment de la présence physique de la carte si la carte y a été préalablement enregistrée. Les paiements en ligne peuvent utiliser un numéro de carte virtuelle généré dans l'application. L'accès aux espèces est possible sans carte via un virement sur un compte secondaire ou un Transfert d'argent dans certaines banques en ligne.

La dépendance exclusive à une seule carte physique crée une vulnérabilité dans la gestion quotidienne. Avoir une configuration de paiement redondante — au minimum la carte physique ET un wallet numérique — est une bonne pratique qui évite les situations de blocage dans les moments les plus inconfortables.
`;

// L5: 2903 → besoin ~+1097
const EXT6_L5 = `
## Les programmes de bien-être financier pour les étudiants

Les banques et les organismes d'aide sociale développent des programmes de bien-être financier spécifiquement destinés aux étudiants. Ces programmes vont au-delà du simple compte bancaire pour inclure des ateliers d'éducation financière, des outils de planification budgétaire, et des accès à des conseillers financiers pour les étudiants en difficulté. L'idée sous-jacente est que la précarité financière est un facteur majeur d'abandon académique, et qu'un soutien financier bien accompagné peut avoir un impact significatif sur la réussite des études.

Les CPAM, les CROUS, et les services sociaux des universités sont souvent les portails d'entrée vers ces programmes. Connaître leur existence et ne pas hésiter à les solliciter en cas de difficulté financière est un réflexe sain. La honte liée aux difficultés financières est un obstacle réel à l'utilisation de ces ressources — une honte qui ne devrait pas exister dans un système conçu précisément pour soutenir les étudiants dans des situations difficiles.

## Les comparatifs de cartes bancaires : comment les lire

Les comparatifs de cartes bancaires publiés par les sites spécialisés (Meilleurtaux, Choisir.com, LesFurets) peuvent aider dans le choix d'une carte, mais leur lecture nécessite quelques précautions méthodologiques. Ces comparatifs sont souvent financés par des commissions d'affiliation — une banque qui paie une commission plus élevée peut être mieux positionnée dans le classement indépendamment de la qualité objective de son offre. Vérifier la mention légale "partenaire commercial" ou "lien affilié" sur les résultats recommandés est un réflexe de lecture critique.

Pour une comparaison objective, croiser plusieurs sources indépendantes (associations de consommateurs comme UFC-Que Choisir, comparatifs des médias financiers sans partenariat commercial, recommandations des communautés en ligne) donne une vue plus équilibrée. Les expériences concrètes des utilisateurs sur des forums ou groupes dédiés à la finance personnelle (reddit r/finances_personnelles_fr) complètent utilement la comparaison théorique avec des témoignages de pratique réelle.

## Les partenariats banque-université : avantages pour les étudiants

Certaines universités et grandes écoles ont des partenariats avec des banques spécifiques qui offrent des conditions préférentielles à leurs étudiants. Ces partenariats peuvent inclure des cartes gratuites pendant toute la durée des études, des taux d'intérêt préférentiels sur les prêts étudiants, des accès prioritaires à des conseils financiers, ou des offres de bienvenue exclusives. Ces avantages, bien réels, doivent cependant être évalués dans le contexte plus large de l'offre bancaire : un partenariat exclusif avec une banque peut être avantageux sur les points couverts par le partenariat mais moins compétitif globalement.

La promesse d'une relation de long terme entre l'université-alumni et la banque partenaire, qui peut commencer en école puis continuer dans la vie professionnelle, est le modèle commercial sous-jacent de ces partenariats. Pour les étudiants, cela signifie évaluer si les avantages concrets du partenariat justifient la relation bancaire avec l'établissement partenaire, ou si d'autres offres disponibles sur le marché sont plus avantageuses pour leurs besoins spécifiques.
`;

// L6: 2414 → besoin ~+1586
const EXT6_L6 = `
## Les options de paiement pour les achats secondaires ou d'occasion

Le marché des achats secondaires entre particuliers (Vinted, LeBonCoin, Facebook Marketplace) a explosé ces dernières années, notamment parmi les étudiants qui cherchent à économiser sur les vêtements, le mobilier, et les équipements d'études. Ces transactions entre particuliers posent des questions spécifiques en matière de paiement : comment payer en sécurité une personne inconnue sans risquer de se faire escroquer ?

Les options par ordre de sécurité décroissante : paiement via les systèmes de protection acheteur des plateformes (Vinted, Vestiaire Collective), qui offrent un remboursement en cas de non-livraison ou de description mensongère ; paiement par virement instantané pour les rencontres en personne (traçable, irréversible mais la marchandise est remise physiquement) ; paiement par espèces pour les rencontres en personne (no trace mais simplicité maximale). Le virement anticipé sans rencontre est à éviter absolument avec des inconnus — il offre toutes les conditions pour une arnaque sans aucun recours pratique.

## La résilience financière par la diversification bancaire

La diversification bancaire — avoir des comptes dans plusieurs établissements — est une protection contre les risques de pannes ou de défaillances d'un unique prestataire. Si votre banque principale rencontre une panne technique le jour où vous avez besoin d'effectuer un paiement urgent, une carte secondaire dans une autre banque vous permet de continuer à fonctionner normalement. Cette redondance bancaire, longtemps considérée comme une précaution excessive, est devenue une pratique courante avec la multiplication des néobanques qui proposent des services gratuits ou peu coûteux pour des comptes secondaires.

La configuration optimale pour un étudiant est d'avoir une banque principale où est domicilié le compte courant et où sont gérés les paiements récurrents, et un ou deux comptes secondaires dans des banques en ligne pour des usages spécifiques (voyages, achats en ligne avec carte virtuelle, épargne à taux compétitif). Cette diversification ne nécessite pas une complexité administrative excessive — deux ou trois applications bancaires sur le téléphone, une application agrégateur pour la vue d'ensemble, et une organisation claire de l'utilisation de chaque compte suffisent.

## La mise à jour régulière des informations personnelles auprès de la banque

Les coordonnées et informations personnelles enregistrées auprès de sa banque doivent être maintenues à jour. Un changement d'adresse, de numéro de téléphone, ou d'adresse email non communiqué à la banque peut avoir des conséquences sérieuses : courriers importants (avis de renouvellement, notifications de modification de conditions) qui n'arrivent pas, impossibilité de recevoir des codes SMS d'authentification sur un numéro périmé, et dans certains cas, blocage du compte si la banque ne peut pas contacter son client pour des raisons réglementaires.

La mise à jour de ces informations est généralement possible en quelques clics dans les paramètres de l'application bancaire. Après chaque déménagement, changement de téléphone ou création d'une nouvelle adresse email, vérifier que toutes ses banques ont bien les informations à jour est une tâche administrative rapide et importante. Pour les étudiants qui déménagent fréquemment (entre la résidence universitaire, le logement de stage, et le domicile parental), cette mise à jour régulière est particulièrement importante.

## Comprendre les mentions sur les terminaux de paiement

Les terminaux de paiement chez les commerçants affichent parfois des informations et des options que les utilisateurs ne comprennent pas toujours. La sélection de la devise au moment du paiement à l'étranger (DCC - Dynamic Currency Conversion) est peut-être la plus importante à comprendre : quand un terminal à l'étranger propose de débiter "en euros" plutôt que dans la devise locale, il applique son propre taux de change (généralement moins favorable que celui de votre banque). La bonne pratique universelle est de toujours choisir d'être débité dans la devise locale et de laisser votre banque effectuer la conversion.

Les options de fractionnement en paiement sur 3 fois proposées au moment du paiement chez certains commerçants sont à évaluer avec attention : bien que présentées comme sans frais, ces facilités incluent parfois des frais de dossier ou activent implicitement un crédit à la consommation dont les conditions sont rarement lues dans l'urgence du moment. Préférer payer en une seule fois sauf pour des achats dont le budget réel sera disponible en plusieurs mois est la pratique financière la plus prudente.

## Conclusion : une carte bancaire, un contrat de confiance

La carte bancaire est un contrat de confiance entre l'utilisateur et son établissement bancaire. En utilisant sa carte, l'utilisateur accepte les conditions définies dans sa convention de compte et bénéficie en retour d'une infrastructure de paiement sécurisée, de protections légales solides, et d'une facilité d'accès à ses fonds où qu'il soit dans le monde. Honorer sa part du contrat — gérer son compte de façon responsable, signaler immédiatement les anomalies, utiliser les mesures de sécurité disponibles — permet de bénéficier pleinement des protections offertes par ce cadre réglementé.

Pour les étudiants qui ont leur première carte bancaire, ou pour les arrivants en France qui découvrent le système bancaire français, cette compréhension des fondamentaux permet d'être un utilisateur actif et protégé, capable de tirer parti des fonctionnalités avancées disponibles tout en évitant les pièges qui guettent les utilisateurs non informés. La maîtrise de sa carte bancaire est une compétence de vie adulte aussi importante que la maîtrise de la cuisine ou de la conduite — et comme ces compétences, elle s'acquiert par la pratique éclairée et l'apprentissage continu.
`;

await appendAndPatch('fe29b046-82a5-408a-b117-a9c7b9c50c24', EXT6_L1);
await appendAndPatch('5c697fb8-6b1a-4ef0-871f-79d7ed372077', EXT6_L2);
await appendAndPatch('81753618-bf6e-4b22-80ba-30bb611450a6', EXT6_L3);
await appendAndPatch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', EXT6_L4);
await appendAndPatch('733031c8-73a4-44a3-a08c-2df6974a2545', EXT6_L5);
await appendAndPatch('74596b8d-7648-452c-bc1b-1d61d29f05ca', EXT6_L6);
