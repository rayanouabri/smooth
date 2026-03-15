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

const EXT1_L1 = `
## Les cartes virtuelles : une protection supplémentaire pour les achats en ligne

Les cartes virtuelles représentent une innovation de sécurité majeure pour les paiements en ligne. Contrairement à la carte physique, une carte virtuelle possède un numéro, une date d'expiration et un cryptogramme générés pour un usage unique ou limité dans le temps. En cas de compromission de ces données — par un site marchand hacké ou une interception lors de la transaction — les données volées ne peuvent pas être réutilisées. Cette protection ciblée sur le vecteur de fraude en ligne le plus répandu est particulièrement précieuse pour les achats sur des sites peu connus ou utilisés occasionnellement.

Les banques en ligne leaders comme Revolut, Bunq, et certaines offres de banques traditionnelles intègrent maintenant la génération de cartes virtuelles directement dans l'application. L'utilisation est simple : sélectionner "carte virtuelle", définir la limite de montant ou la durée de validité, et utiliser les données générées pour l'achat. Ces cartes virtuelles sont également utiles pour les abonnements en ligne que l't utilisateur souhaite pouvoir annuler facilement — il suffit de bloquer la carte virtuelle sans toucher à la carte principale.

## La technologie NFC et le paiement sans contact

Le paiement sans contact repose sur la technologie NFC (Near Field Communication), qui permet à deux appareils équipés d'échanger des données à faible distance (quelques centimètres). La puce NFC intégrée dans la carte et le terminal de paiement communiquent en quelques fractions de seconde pour valider la transaction, sans contact physique ni saisie d'un code PIN pour les montants inférieurs à 50 euros. Cette rapidité est appréciable dans les situations de flux important (caisses de supermarché, transports publics, cafés).

La sécurité du paiement sans contact a parfois été mise en question, mais les protocoles de cryptage utilisés rendent extrêmement difficile l'interception des données de transaction. Le risque le plus réel est le vol de la carte elle-même, permettant d'effectuer des transactions sans contact jusqu'à ce que le titulaire s'en aperçoive et fasse opposition. La limite de 50 euros par transaction, et le plafond journalier de transactions sans contact, limitent l'exposition en cas de vol. Certaines banques proposent également la désactivation du paiement sans contact via l'application, pour les clients qui souhaitent une protection maximale.

## Les wallets numériques et leur intégration

Les wallets numériques (Apple Pay, Google Pay, Samsung Pay) permettent de payer avec un smartphone ou une montre connectée à la place de la carte physique. Le mécanisme de sécurité est particuièrement robuste : les données de carte ne sont pas transmises au terminal, mais remplacées par un token numérique unique à chaque transaction. Cela signifie que même si les données du terminal sont compromises, elles ne permettent pas de reconstituer le numéro de carte réel.

L'adoption des wallets numériques progresse régulièrement en France, avec une accélération notable depuis la pandémie. Pour les étudiants toujours connectés qui ont leur smartphone en main, payer avec l'application de wallet est souvent plus rapide que de sortir sa carte physique. La condition préalable est que sa banque soit compatible avec le wallet choisi — la grande majorité des banques françaises, y compris les néobanques, supportent désormais Apple Pay et Google Pay.

## Les cartes bankées dans les applications de fidélité

Une évolution récente est l'intégration de la fonction carte bancaire dans des applications de fidélité. Le programme Carrefour PASS, par exemple, propose une carte qui est à la fois carte de paiement et carte de fidélité. Des applications comme Fidelity, ou les super-applications asiatiques comme Alipay, vont encore plus loin en intégrant paiement, fidélité, et services divers dans une seule application. Cette convergence simplifie le portefeuille du consommateur mais crée aussi une concentration de données personnelles (habitudes d'achat et données financières) dans les mains d'un seul acteur.

Pour les étudiants qui accumulent des points de fidélité dans leurs enseignes habituelles, vérifier si leur banque propose des partenariats de cashback ou de fidélité intégrés peut représenter un avantage financier concret. Certaines banques reversent un pourcentage des dépenses effectuées chez des partenaires, directement sur le compte du client. Ces programmes de cashback, bien que souvent modestes en termes de montants unitaires, peuvent représenter plusieurs dizaines d'euros d'économies sur l'année pour un utilisateur régulier.
`;

const EXT1_L2 = `
## Les spécificités de l'ouverture de compte pour les mineurs

Pour les étudiants mineurs (lycéens en première ou terminale admis dans des formations supérieures) ou pour les parents qui souhaitent préparer la transition bancaire de leur enfant, les offres bancaires pour mineurs méritent d'être connues. Les comptes pour mineurs, ouverts avec l'autorisation parentale, permettent généralement une carte à débit immédiat avec des plafonds adaptés à un usage jeune. L'accord du représentant légal est requis pour l'ouverture et pour les modifications importantes.

Des solutions spécialement conçues pour les 12-18 ans ont émergé : Pixpay, Kard, Vybe, et Green-Got Junior proposent des cartes prépayées ou des comptes courants supervisés avec un contrôle parental intégré. Les parents peuvent fixer des plafonds de dépenses, recevoir des notifications pour chaque transaction, et bloquer certaines catégories de marchands. Ces outils éducatifs permettent aux jeunes d'apprendre la gestion de l'argent en situation réelle tout en restant sous la supervision parentale. La transition vers un compte entièrement autonome lors du passage à la majorité se fait ensuite naturellement.

## Le compte joint et son fonctionnement

Le compte joint est un compte bancaire détenu par deux personnes ou plus, qui ont chacune un accès complet aux fonds et peuvent effectuer des opérations sans l'accord de l'autre. Il est fréquent entre conjoints ou partenaires de vie pour gérer les dépenses communes du foyer. Pour les étudiants qui cohabitent et partagent des charges fixes (loyer, factures, internet), un compte joint peut simplifier la gestion des dépenses communes : chaque colocataire verse une contribution mensuelle et les prélèvements automatiques sont débités sur ce compte partagé.

La responsabilité solidaire est le principal aspect légal d'un compte joint : chaque cotitulaire est responsable de l'ensemble des dettes générées sur le compte, quel que soit l'auteur de la dépense. Un découvert créé par un cotitulaire engage aussi l'autre. Cette solidarité doit être bien comprise avant d'ouvrir un compte joint — elle crée un lien financier fort qui peut avoir des conséquences en cas de désaccord ou de séparation. La clôture d'un compte joint requiert l'accord de tous les cotitulaires ou une décision judiciaire en cas de désaccord.

## Le processus d'activation d'une nouvelle carte

Recevoir une nouvelle carte bancaire par courrier ne suffit pas pour l'utiliser — une étape d'activation est généralement nécessaire. Les banques modernes proposent plusieurs méthodes d'activation : via l'application mobile (le plus simple), par un premier retrait avec saisie du code PIN au distributeur automatique, ou par un premier paiement avec saisie du code PIN en magasin. Cette activation sert à vérifier que la carte a bien été reçue par son destinataire légitime.

Le code PIN est généralement communiqué séparément de la carte elle-même, soit dans une lettre distincte envoyée quelques jours après la carte, soit via un code temporaire affiché dans l'application qui permet de définir son propre code PIN lors de la première utilisation. Pour les cartes des banques en ligne, l'ensemble du processus est souvent entièrement numérique : la carte est activée en quelques clics dans l'application, et le code PIN est défini directement dans l'application sans aucun courrier physique.
`;

const EXT1_L3 = `
## Le phishing et l'ingénierie sociale : se protéger des manipulations

Les fraudes les plus sophistiquées ne s'attaquent pas aux systèmes techniques des banques — elles ciblent les humains. Le phishing (hameçonnage) consiste à tromper le titulaire d'une carte pour qu'il divulgue lui-même ses données confidentielles. Les emails qui imitent les communications officielles de la banque, les SMS qui alertent d'une "activation requise" ou d'une "transaction suspecte", et les appels téléphoniques de faux conseillers bancaires sont les vecteurs les plus courants.

Pour détecter ces tentatives, quelques règles simples : votre banque ne vous demandera jamais votre code PIN, vos mots de passe, ou vos codes SMS de validation par email ou téléphone. Les liens dans les emails ou SMS ne doivent jamais être cliqués pour accéder à votre espace bancaire — utilisez toujours l'application officielle ou tapez directement l'adresse dans votre navigateur. Les appels prétendant venir de votre banque et demandant une action urgente (valider une transaction, fournir un code) sont presque toujours frauduleux. En cas de doute, raccrochez et rappelez le numéro officiel de votre banque indiqué sur votre carte ou votre contrat.

## La surveillance régulière des relevés de compte

La surveillance régulière des relevés de compte est la pratique de sécurité la plus efficace à long terme. Elle permet de détecter rapidement les transactions non autorisées, les abonnements oubliés qui se prélèvent discrètement chaque mois, et les erreurs de facturation de commerçants. La fréquence idéale est hebdomadaire pour les estudiants avec une activité financière régulière — une vérification rapide de quelques minutes suffit pour repérer d'éventuelles anomalies.

Les applications bancaires modernes facilitent cette surveillance avec leurs notifications push automatiques pour chaque transaction. Activer ces notifications dans l'application de sa banque est une précaution simple qui transforme chaque dépense en une alerte en temps réel — toute transaction non reconnue déclenche immédiatement une investigation. Cette transparence en temps réel est l'un des avantages les plus concrets des banques en ligne par rapport aux relevés papier mensuels d'une banque traditionnelle.

## Les bonnes pratiques lors des achats chez des marchands peu connus

Faire des achats sur des sites e-commerce inconnus présente des risques supplémentaires. Les sites frauduleux qui collectent les données de carte sans intention de livrer la marchandise sont une réalité. Quelques précautions minimisent ce risque : vérifier la présence du cadenas HTTPS dans la barre d'adresse, rechercher des avis clients sur des plateformes indépendantes, préférer les paiements via un tiers de confiance (PayPal, Apple Pay) qui masque les données de carte, et utiliser une carte virtuelle à usage unique pour les sites peu connus.

Le protocole 3D Secure (Visa Secure, Mastercard Identity Check) est un standard de sécurité qui ajoute une étape de validation supplémentaire lors des paiements en ligne : un code envoyé par SMS ou via l'application bancaire doit être saisi pour valider la transaction. Même si un fraudeur a obtenu votre numéro de carte, il ne peut pas finaliser un achat sans accès à votre téléphone mobile. Ce protocole est maintenant obligatoire pour les transactions en ligne au-delà d'un certain montant, conformément à la réglementation européenne DSP2.
`;

const EXT1_L4 = `
## Les plafonds spéciaux pour les grands achats

Les plafonds standard d'une carte bancaire peuvent être insuffisants pour certains achats importants : un billet d'avion aller-retour intercontinental, l'achat d'équipements professionnels ou d'études coûteux, ou le règlement d'une caution de location. Dans ces situations, la modification temporaire des plafonds est la solution standard. La plupart des banques en ligne permettent de l'effectuer en quelques secondes via l'application. Pour les banques traditionnelles, un appel au service client ou une visite en agence peut être nécessaire, avec un délai de traitement de quelques heures à quelques jours.

Une alternative pour les très grands montants est le virement bancaire, qui n'est pas soumis aux plafonds de carte. Pour les achats immobiliers, les cautions importantes ou les règlements professionnels élevés, le virement est le mode de paiement adapté. Certains marchands — notamment les agences immobilières et les prestataires professionnels — refusent les paiements par carte au-delà d'un certain montant précisément pour éviter les frais de commission des réseaux de carte, et acceptent exclusivement les virements pour les transactions importantes.

## La gestion du découvert autorisé et ses implications

Le découvert autorisé est une facilité de caisse accordée par la banque qui permet de dépenser temporairement plus que le solde disponible sur le compte. Pour les étudiants, un découvert autorisé de quelques centaines d'euros peut aider à gérer les fins de mois difficiles avant le virement de la bourse ou des aides. Ce découvert est généralement facturé en intérêts calculés sur le montant et la durée du dépassement.

Les frais de découvert varient significativement entre les banques : certaines facturent des agios quotidiens (intérêts calculés chaque jour sur le solde négatif), d'autres facturent une commission mensuelle fixe, et quelques banques en ligne offrent un petit découvert gratuit jusqu'à un montant défini. Les agios de découvert constituent souvent une source de revenus importante pour les banques, ce qui explique l'attention portée à négocier des conditions de découvert avantageuses, notamment lors de l'ouverture d'un compte étudiant. Certaines banques proposent un découvert autorisé sans frais jusqu'à 200 euros pour les étudiants — un avantage concret dans les situations de tension budgétaire ponctuelle.

## L'historique des transactions et sa conservation

L'historique des transactions bancaires disponible dans l'application ou en ligne est typiquement conservé pendant 5 à 10 ans selon les banques. Cette conservation est précieuse pour de multiples usages : justifier des dépenses professionnelles déductibles, prouver un paiement en cas de litige avec un commerçant, ou analyser ses habitudes de dépenses sur plusieurs années. Pour les étudiants qui font des remboursements Pôle Emploi, CAF ou mutuelles, conserver une trace des transactions correspondantes facilite les démarches de preuve.

Les relevés de compte mensuels, qu'ils soient en version papier ou numérique, ont une valeur juridique de preuve. Archiver les relevés de chaque mois — idéalement en version numérique organisée par année — est une pratique d'organisation financière qui s'avère utile dans des situations inattendues : litiges avec des propriétaires sur des loyers, vérification d'un double débit, ou constitution d'un dossier de crédit. Les relevés de compte peuvent être téléchargés au format PDF depuis l'espace bancaire en ligne et conservés localement ou sur un service de stockage sécurisé en nuage.
`;

const EXT1_L5 = `
## La carte et la gestion des abonnements numériques

La prolifération des abonnements numériques — streaming vidéo, musique, logiciels, services en ligne — est une réalité de la vie des étudiants connectés. Chacun de ces abonnements est généralement lié à une carte bancaire et prélevé automatiquement chaque mois ou chaque année. L'accumulation de petits abonnements peut représenter un coût mensuel significatif, souvent sous-estimé faute d'une vision consolidée.

Les applications de gestion budgétaire et certaines applications bancaires proposent maintenant la détection et le listing automatique des abonnements actifs. Cette fonctionnalité, qui scanne les transactions récurrentes des derniers mois, permet d'avoir une vue d'ensemble des engagements financiers réguliers. Un audit périodique de ces abonnements — une fois par trimestre par exemple — permet d'identifier les services qu'on n'utilise plus et qui continuent à être prélevés par habitude ou par oubli. Les économies potentielles peuvent être substantielles pour un étudiant dont le budget mensuel est limité.

## Les conditions de gratuité de certaines cartes en ligne

Les cartes gratuites des banques en ligne ne sont souvent gratuites que sous conditions. Les conditions les plus courantes sont : un nombre minimum de transactions par mois (généralement 3 à 5 paiements), un montant minimum de transactions par mois, ou la domiciliation des revenus. Si ces conditions ne sont pas remplies, des frais de tenue de compte ou de carte peuvent être facturés rétroactivement.

Pour les étudiants dont les dépenses sont parfois irrégulières — mois de vacances sans dépenses, périodes de stage loin du domicile — il convient de vérifier que les conditions d'utilisation seront systématiquement remplies, même dans les périodes d'activité réduite. Si ce n'est pas garanti, choisir une banque avec une offre vraiment gratuite sans condition (comme Revolut en offre de base, ou certaines offres spéciales étudiants sans obligation de transaction) est plus sécurisant que de risquer des frais imprévus lors d'un mois d'utilisation faible.

## Les innovations à venir dans les paiements par carte

Le secteur du paiement par carte est en constante évolution technologique. Plusieurs innovations sont en cours de déploiement ou attendues dans les prochaines années. La biométrie comme facteur d'authentification progresse : des cartes bancaires avec capteur d'empreinte digitale intégré existent déjà et commencent à être commercialisées en France. Ces cartes permettent de valider les paiements sans contact de n'importe quel montant en plaçant simplement le doigt sur le capteur de la carte — plus besoin de code PIN.

Les paiements entre particuliers via carte sont également en développement, grâce aux protocoles de paiement instantané (virement instantané SEPA) qui permettent des transferts de compte à compte en quelques secondes. La frontière entre le paiement par carte et le virement bancaire tend à s'estomper, avec des services comme PayLib en France qui permettent de payer sur des sites e-commerce directement via virement depuis son application bancaire, sans saisir de numéro de carte. Ces innovations offrent des alternatives aux cartes bancaires traditionnelles tout en conservant les garanties de sécurité du système bancaire réglementé.
`;

const EXT1_L6 = `
## La fraude au virement bancaire après usurpation d'identité

La fraude au virement prend une forme particulièrement insidieuse : après avoir obtenu les données d'accès au compte bancaire d'une victime (via phishing ou logiciel espion), le fraudeur initie des virements depuis l'espace bancaire numérique de la victime vers des comptes tiers. Ces virements, contrairement aux paiements par carte frauduleux, ne bénéficient pas du même cadre de remboursement automatique — car la banque a reçu un ordre qui semblait valide de l'espace bancaire du titulaire.

La protection contre ce type de fraude repose sur la sécurité des accès au compte : mot de passe fort et unique, activation de l'authentification à deux facteurs, et vigilance sur les applications installées sur le téléphone qui accèdent aux codes SMS. Ne pas se connecter à son espace bancaire depuis un Wi-Fi public non sécurisé, et vérifier régulièrement les appareils autorisés dans les paramètres de sécurité de l'application bancaire, sont des précautions supplémentaires pertinentes.

## Les recours autres que la banque en cas de fraude

Si la banque refuse de rembourser une fraude, des recours alternatifs existent. Le médiateur bancaire est la première instance de recours, accessible gratuitement après épuisement de la voie interne de réclamation de la banque. Son avis, bien que non juridiquement contraignant pour le client, est généralement suivi par les banques. Si le désaccord persiste, le tribunal de proximité pour les litiges inférieurs à 10 000 euros est accessible sans avocat obligatoire. Des associations de consommateurs comme UFC-Que Choisir peuvent accompagner le dossier gratuitement ou à faible coût.

Le signalement sur la plateforme Perceval (cybermalveillance.gouv.fr) permet de déclarer officiellement une fraude à la carte bancaire aux autorités compétentes. Ce signalement crée un dossier officiel qui peut être utilisé dans les démarches de remboursement avec la banque, et contribue à la veille nationale sur les nouvelles formes de fraude. Plus les fraudes sont signalées, plus les patterns sont identifiés rapidement et les mesures de protection adaptées.

## Le rôle des réseaux Visa et Mastercard

Visa et Mastercard ne sont pas des banques — ce sont des réseaux de paiement qui fournissent l'infrastructure technique et les règles de fonctionnement qui permettent aux cartes émises par différentes banques d'être acceptées chez des millions de commerçants dans le monde entier. La carte bancaire physique combine donc deux entités distinctes : la banque émettrice (qui gère le compte, fixe les conditions financières, et assume la responsabilité fiduciaire) et le réseau (qui assure l'interopérabilité mondiale).

Cette distinction a des implications pratiques : si votre banque a des problèmes techniques, les paiements par carte peuvent être bloqués même si le réseau Visa ou Mastercard fonctionne normalement. Inversement, si un commerçant refuse les Visa, il peut accepter les Mastercard — et vice versa. En France, les deux réseaux sont pratiquement universellement acceptés, mais la différence peut être notable à l'étranger, notamment dans certains pays d'Asie ou d'Amérique latine où l'un ou l'autre réseau est dominant. Avoir une carte de chaque réseau lors de voyages dans des zones géographiques moins familières est une précaution prudente.
`;

await appendAndPatch('fe29b046-82a5-408a-b117-a9c7b9c50c24', EXT1_L1);
await appendAndPatch('5c697fb8-6b1a-4ef0-871f-79d7ed372077', EXT1_L2);
await appendAndPatch('81753618-bf6e-4b22-80ba-30bb611450a6', EXT1_L3);
await appendAndPatch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', EXT1_L4);
await appendAndPatch('733031c8-73a4-44a3-a08c-2df6974a2545', EXT1_L5);
await appendAndPatch('74596b8d-7648-452c-bc1b-1d61d29f05ca', EXT1_L6);
