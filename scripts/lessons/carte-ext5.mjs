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

const EXT5_L1 = `
## Les cartes multi-comptes et la gestion financière segmentée

Certaines banks en ligne et néobanques proposent des "sous-comptes" ou "espaces" qui permettent de segmenter son argent selon des objectifs : un sous-compte pour le loyer qui sera prélevé le 5 du mois, un sous-compte pour les courses alimentaires, un sous-compte pour les loisirs, et un sous-compte pour l'épargne. Ces enveloppes budgétaires virtuelles, auxquelles une carte virtuelle dédiée peut être reliée, permettent une gestion budgétaire très fine.

Cette segmentation a un intérêt psychologique fort : rendre visible la répartition de l'argent entre différents objectifs aide à maintenir la discipline budgétaire. Quand le sous-compte "loisirs" est épuisé, il n'y a plus d'argent disponible pour ces dépenses, sans que cela affecte les montants réservés pour les besoins essentiels. Cette approche, inspirée des enveloppes budgétaires physiques, est numérisée et automatisée dans les solutions bancaires les plus modernes.

## L'impact des fêtes et des achats saisonniers sur la gestion de la carte

Les périodes de fêtes (Noël, anniversaires, Saint-Valentin) génèrent des pics de dépenses qui doivent être anticipés dans la gestion de la carte bancaire. Les plafonds hebdomadaires et mensuels peuvent être atteints plus rapidement pendant ces périodes, nécessitant une anticipation de l'ajustement des plafonds. Les offres trop séduisan de crédit saisonniers (achats à crédit à 0% pendant les fêtes) doivent être examinées avec lucidité : le coût apparent de zéro peut cacher des conditions qui activent des taux élevés si le crédit n'est pas remboursé intégralement dans la période promotionnelle.

Préparer un budget saisonnier — définir à l'avance combien on est prêt à dépenser pour les cadeaux de fin d'année, les sorties festives ou les vacances d'été — et l'alimenter progressivement avec un virement mensuel automaique vers un sous-compte dédié est la méthode la plus efficace pour financer ces dépenses saisonnières sans stress ni crédit. À raison de 50 euros par mois tout au long de l'année, 600 euros se seront accumulés en décembre pour les achats de Noël, sans aucune dette.

## Les cartes bancaires et les plateformes de financement participatif

Le financement participatif (crowdfunding) utilise les cartes bancaires comme principal mode de paiement. Pour les backers (soutiens) des projets Kickstarter, Ulule, ou Indiegogo, la carte est utilisée pour les contributions. Pour les porteurs de projets qui collectent des fonds, ces plateformes reversent les fonds collectés directement sur un compte bancaire via virement.

Les risques liés aux contributions par carte sur les plateformes de crowdfunding : si le projet n'atteint pas son objectif de financement, les plateformes remboursent généralement les contributions (mais les délais varient). Si le projet est financé mais ne livre pas les récompenses promises, la procédure de chargeback est souvent la seule voie de remboursement — et elle est soumise aux délais spécifiques à chaque réseau de carte. Contribuer à des projets crowdfunding avec une carte bancaire reste donc moins protecteur qu'un achat sur un site e-commerce réglementé, même si les risques sont limités sur les grandes plateformes établies.

## Comment récupérer une carte avalée par un distributeur

Un distributeur automatique peut avaler la carte de l'utilisateur si des transactions anormales sont détectées (trois saisies incorrectes du code PIN, par exemple) ou suite à un problème technique. Cette situation, bien qu'inconfortable, a une procédure de résolvabilité standardisée. La première étape est de noter le numéro de la machine (inscrit sur le distributeur) et d'appeler immédiatement soit la banque propriétaire du distributeur, soit le numéro d'opposition de sa propre banque.

Si la carte est avalée par un distributeur de sa propre banque, le service client peut souvent la récupérer le jour même pendant les heures d'ouverture de l'agence, ou lors de la prochaine vidange de la machine. Si la carte est avalée par un distributeur d'une autre banque, le processus est plus complexe : la banque propriétaire du distributeur doit être contactée, et la carte est généralement détruite après un délai de conservation. Dans tous les cas, il est prudent de faire opposition sur la carte dès qu'elle est avalée, quitte à annuler l'opposition si la carte peut être récupérée — par précaution pendant la période de non-maîtrise physique de la carte.
`;

const EXT5_L2 = `
## Les offres d'accueil bancaires pour les étudiants internationaux

Les universités et grandes écoles françaises accueillent chaque année des milliers d't étudiants internationaux qui ont besoin de services bancaires rapidement après leur arrivée. En réponse, plusieurs banques ont développé des offres spécifiques pour les étudiants internationaux incluant l'ouverture de compte à distance avant même l'arrivée en France. La BNP Paribas, le Crédit Agricole, et plusieurs banques en ligne proposent des parcours d'ouverture de compte simplifiés pour les futurs étudiants en France.

Certaines universités ont des partenariats avec des banques spécifiques et peuvent faciliter l'ouverture de compte pour leurs étudiants internationaux. Pour les étudiants qui arrivent de pays où la vérification d'identité numérique est moins développée, l'appui de l'université auprès de la banque partenaire peut contourner certaines frictions du processus d'ouverture de compte automatisé. Se renseigner auprès du service d'accueil international de son université avant l'arrivée en France peut économiser beaucoup de temps et d'énergie dans la recherche d'un compte bancaire.

## Le virement instantané SEPA et son impact sur l'utilisation de la carte

Le virement instantané SEPA (SEPA Instant Credit Transfer) est une innovation qui permet de transférer de l'argent entre deux comptes bancaires en Europe en moins de 10 secondes, 24 heures sur 24, 7 jours sur 7. Ce mode de paiement, qui était l'apanage des pays nordiques, s'est généralisé en Europe et en France dans les dernières années. Pour les étudiants, il change la façon de rembourser des amis, de payer des services entre particuliers, et de gérer les urgences financières.

L'impact sur l'utilisation de la carte est progressif : pour les paiements entre personnes de confiance (famille, collocataires, amis proches), le virement instantané concurrence directement la carte. Son principal avantage par rapport à la carte est l'absence de plafond (soumis aux seules limites bancaires), l'absence de réseau de carte (pas de dépendance à Visa/Mastercard), et la quasi-gratuité. Son inconvénient majeur est l'irrévocabilité : un virement instantané envoyé à la mauvaise personne est très difficile à récupérer. La carte conserve donc un avantage pour les transactions avec des inconnus ou des commerçants peu connus, où le mécanisme de chargeback offre une protection supplémentaire.

## La banque et les étudiants en contrat de professionnalisation

Les étudiants en contrat de professionnalisation, comme les alternants en apprentissage, reçoivent une rémunération de leur employeur et peuvent bénéficier des offres bancaires dédiées aux jeunes actifs plutôt qu'aux étudiants classiques. Cette distinction est importante car les revenus d'alternance sont plus réguliers et plus élevés que les revenus des étudiants sans emploi, ce qui améliore le profil bancaire et donne accès à des offres plus favorables en terme de découvert autorisé, de carte disponible, et parfois de conditions d'accès à des produits d'épargne complémentaires.

Pour l'étudiant en professionnalisation qui touche un salaire mensuel, même modeste, la domiciliation de ce salaire dans sa banque principale est une condition qui débloque souvent la gratuité d'une carte ou des conditions tarifaires préférentielles. Cette domiciliation est aussi le premier élément d'un historique bancaire solide qui sera utile pour les demandes de crédit futures.

## Le rôle des Points Relais et des agences postales dans l'accès aux espèces

La réduction du nombre de distributeurs automatiques dans certaines zones géographiques a conduit au développement d'alternatives pour l'accès aux espèces. Les points retrait d'espèces chez les commerçants (épiceries, bureaux de tabac) permettent de retirer de l'argent lors d'un achat, sans se déplacer spécifiquement pour cela. Ce service de "cashback" chez le commerçant est généralement gratuit pour le client et compensé par la banque ou le réseau.

La Banque Postale via ses agences postales maintient un réseau de points de retrait d'espèces dans pratiquement toutes les communes françaises. Pour les habitants des zones rurales ou les étudiants qui retournent dans des communes peu équipées, ces points d'accès alternatifs aux espèces sont une solution pratique. Savoir que ces options existent évite d'avoir à chercher un distributeur dans des zones isolées ou de ne pas pouvoir payer en espèces lorsque c'est nécessaire.
`;

const EXT5_L3 = `
## La protection des données bancaires dans les applications tiers

Les applications de finance personnelle et de gestion budgétaire (Bankin, Linxo, YNAB) accèdent aux données bancaires de l'utilisateur pour fournir leur service de catégorisation et d'analyse des dépenses. Cette connexion se fait via le protocole Open Banking (API bancaires sécurisées mises en place dans le cadre de la directive DSP2), qui permet aux utilisateurs d'autoriser des tiers à lire (et uniquement lire) leurs données bancaires sans communiquer leurs identifiants bancaires.

La sécurité de ces connexions est réglementée, mais leur multiplication augmente la surface d'attaque potentielle. Chaque application à laquelle on donne accès aux données bancaires est un maillon de plus dans la chaîne de protection. Les pratiques recommandées : vérifier que l'application est agréée par l'ACPR avant de lui accorder l'accès, révoquer l'accès des applications qu'on n'utilise plus, et préférer les applications dont la politique de confidentialité est transparente sur la façon dont les données sont stockées et utilisées.

## La comparaison internationale des habitudes de paiement

Les habitudes de paiement varient considérablement selon les pays, et les étudiants en mobilité internationale bénéficient de comprendre ces différences culturelles. En Allemagne et dans les pays nordiques, les paiements en espèces sont encore très répandus — notamment en Allemagne où certains commerces n'acceptent pas la carte. En Grande-Bretagne et dans les pays anglosaxons, les paiements sans contact et les applications mobiles sont très avancés. En Asie, les super-applications (WeChat Pay, Alipay) intégrant chat, paiement et services dans un seul outil dominent totalement le marché.

Pour les étudiants qui font un Erasmus ou un échange en dehors de la zone euro, anticiper les usages locaux est une façon d'éviter des situations inconfortables. Se renseigner sur les modes de paiement courants dans le pays d'accueil, emporter des espèces locales en quantité suffisante pour les premiers jours, et vérifier que sa carte est bien acceptée dans la zone sont des préparations indispensables avant tout séjour à l'étranger. Les applications de voyage comme TripAdvisor ou Google Maps indiquent souvent dans les avis si les établissements acceptent la carte bancaire.

## La relation entre l'agence bancaire physique et l'application mobile

Même pour les banques en ligne sans agences, des points de contact physiques peuvent être utiles. Certaines néobanques proposent des espaces de travail partagés (corking spaces) dans les grandes villes où les clients peuvent rencontrer des conseillers sur rendez-vous. Des partenariats avec des bureaux de poste permettent à certaines banques en ligne d'offrir des services physiques à leurs clients malgré l'absence d'agences propres.

La question de l'accès à un service humain dédié est particulièrement pertinente pour les situations complexes : résolution d'un litige important, demande de crédit, ou accompagnement pour une situation financière difficile. Une banque digi-physique qui offre à la fois une excellente application et la possibilité de rencontrer un conseiller humain en cas de besoin représente le meilleur compromis pour les étudiants qui veulent la commodité du numérique avec la sécurité d'un accompagnement humain pour les moments importants.

## Les outils de budgétisation intégrés dans les applications bancaires

Les applications bancaires les plus avancées proposent des outils de budgétisation qui vont au-delà de la simple liste de transactions. Des catégories automatiquement assignées à chaque dépense (alimentation, transports, loisirs, abonnements, santé) permettent de visualiser en temps réel la répartition des dépenses. Des alertes personnalisables signalent quand un budget de catégorie est atteint à X% pour permettre un ajustement comportemental avant le dépassement complet.

Pour les étudiants qui s'initient à la gestion de budget, ces outils intégrés sont une introduction concrète à la gestion financière sans nécessiter de logiciel séparé ou de tableur labourant. La seule condition est d'utiliser sa carte bancaire pour la grande majorité de ses dépenses — les achats en espèces ne sont pas automatiquement catégorisés. Une habitude de paiement par carte, documentée et catégorisée dans l'application, fournit ainsi un vrai tableau de bord financier personnel mis à jour en temps réel.
`;

const EXT5_L4 = `
## Les cartes bancaires et la gestion des successions

Lors du décès d'un titulaire de carte bancaire, les cartes doivent être bloquées et restituées à la banque dans le cadre de la procédure de succession. Les héritiers ou le tuteur légal ont l'obligation de notifier la banque du décès rapidement — généralement en apportant un certificat de décès à l'agence ou en contactant le service client. La banque bloque alors le compte et le perimettre jusqu'à ce que la succession soit réglée.

Cette procédure, bien que pénible dans un moment difficile, est conçue pour protéger les actifs du défunt et s'assurer qu'ils sont distribués selon les règles successorales. Les prélèvements automatiques sont bloqués, les virements sortants sont interdits, mais les virements entrants (retraites, loyers) peuvent continuer à être perçus jusqu'à la clôture officielle du compte. Pour les étudiants qui sont liés financièrement à un parent âgé dont ils connaissent les coordonnées bancaires, connaître cette procédure peut s'avérer nécessaire dans des circonstances difficiles.

## Les bonnes pratiques de conservation des documents liés à la carte

Les contrats bancaires — conditions générales du compte, contrats de carte, notices d'assurance — doivent être conservés pendant toute la durée de la relation bancaire et au moins 5 ans après la clôture du compte. Ces documents constituent la référence en cas de litige et permettent de vérifier les conditions qui s'appliquent si la banque modifie ses tarifs ou ses conditions.

Les relevés de compte, en particulier ceux qui montrent des transactions importantes, doivent être conservés au minimum 3 ans (prescriptiond e droit commun) et idéalement 10 ans pour les transactions impliquant potentiellement des aspects patrimoniaux ou fiscaux. La conservation numérique — téléchargement des relevés au format PDF et archivage dans un stockage sécurisé (cloud chiffré, disque dur externe) — est plus pratique et durable que la conservation papier. Des relevés papier perdus ou détériorés ne peuvent pas être récupérés facilement si la banque ne conserve plus l'historique en ligne.

## La carte bancaire et les enjeux de souveraineté numérique

La domination des réseaux Visa et Mastercard dans les paiements par carte est souvent citée comme un enjeu de souveraineté numérique européenne. Ces deux réseaux américains contrôlent la grande majorité des transactions par carte en Europe, ce qui signifie que les données sur les habitudes de consommation des Européens transitent par des infrastructures américaines. Les sanctions économiques ou les conflits géopolitiques pourraient théoriquement perturber ces flux de données.

En réponse, l'Union Européenne soutient activement le développement de l'EPI (European Payments Initiative), un projet de paiement instantané européen visant à créer un système de paiement paneuropéen indépendant des réseaux américains. Ce projet progresse sous la forme du portefeuille numérique Wero, déployé progressivement en France, Allemagne et Belgique depuis 2024. Pour les étudiants, cette initiative représente une alternative européenne qui pourra progressivement concurrencer les solutions Visa/Mastercard pour les paiements quotidiens.
`;

const EXT5_L5 = `
## Les solutions d'épargne accessibles depuis l'application bancaire

Au-delà de la simple carte, les applications bancaires modernes permettent d'accéder à une gamme de produits d'épargne directement depuis l'interface. L'ouverture d'un Livret A, d'un LDDS, ou d'une assurance-vie se fait maintenant en quelques clics dans la plupart des banques en ligne. Cette accessibilité réduit les frictions qui empêchaient historiquement les jeunes étudiants d'épargner — la démarche n'est plus une visite à l'agence avec rendez-vous, c'est quelques clics depuis son canapé.

La proximité visuelle entre le compte courant (avec la carte associée) et les produits d'épargne dans la même application crée une continuité naturelle entre dépenser et épargner. Quand la balance de fin de mois est positive après les dépenses courantes, le virement vers le livret d'épargne est facilité par la présence de ce livret dans la même interface. Cette réduction de la friction psychologique est l'un des facteurs qui explique les taux d'épargne plus élevés observés chez les clients des banques en ligne qui intègrent l'épargne dans leur interface principale.

## Les programmes d'assistance médicale internationale des cartes premium

Pour les étudiants qui voyagent dans le cadre de leurs études — Erasmus, cours intensifs à l'étranger, stages internationaux — l'assistance médicale internationale incluse dans les cartes premium est une protection précieuse. Ces programmes couvrent généralement les frais médicaux d'urgence à l'étranger (hospitalisation, consultation, médicaments), l'avance des frais médicaux ou la prise en charge directe auprès de l'établissement de soin, et l'organisation du rapatriement médical si nécessaire.

Les conditions d'activation de ces garanties sont critiques à connaître à l'avance. Le voyage doit généralement avoir été payé en totalité ou en partie avec la carte concernée pour activer la couverture. Le numéro d'assistance international doit être appelé avant de commencer les soins lorsque c'est possible (et non après) pour s'assurer que les frais seront pris en charge directement. Le plafond de garantie médicale varie selon les cartes, de quelques milliers d'euros à plusieurs dizaines de milliers — des montants qui peuvent sembler élevés mais qui peuvent être insuffisants dans des pays où les soins médicaux sont très coûteux (États-Unis, Japon, Australie).

## L'impact des innovations sur la carte bancaire de demain

La carte bancaire telle qu'on la connaît est le produit d'une évolution de 60 ans qui l'a transformée d'un simple rectangle en plastique en une interface multi-services connectée. Les prochaines années pourraient voir l'émergence de nouvelles formes : des cartes avec écran intégré affichant les informations de solde, des cartes avec biométrie intégrée pour remplacer le code PIN par une empreinte digitale, et à terme, peut-être le remplacement partiel de la carte physique par une identité numérique nativement intégrée dans les appareils mobiles.

La convergence entre identité numérique, paiement et accès à des services reste le mouvement de fond le plus puissant. Une application mobile qui sert à la fois d'identité citoyenne, de clé d'accès aux services publics, de porte-monnaie, et d'interface pour les services bancaires — c'est la direction prise par plusieurs initiatives étatiques en Europe. Pour les étudiants d'aujourd'hui qui apprivoisent les outils bancaires numériques, comprendre ces évolutions en cours leur permet d'anticiper les changements à venir et de rester compétents dans un environnement financier qui continuera à se transformer.
`;

const EXT5_L6 = `
## L'historique de la fraude par carte bancaire et les leçons tirées

L'histoire de la fraude à la carte bancaire est une course aux armements entre les fraudeurs et les systèmes de sécurité. Les années 1990 ont vu exploser la fraude via la copie de piste magnétique (skimming). La migration vers les puces EMV dans les années 2000-2010 a drastiquement réduit cette fraude dans les pays qui avaient adopté la norme, mais déplacé la fraude vers les pays sans puce et vers les transactions en ligne. L'authentification forte DSP2 déployée depuis 2019 a réduit la fraude en ligne, mais généré une adaptation des fraudeurs vers les attaques psychologiques et sociales (phishing, vishing, smishing).

Cette histoire montre que chaque amélioration technique génère de nouvelles tactiques de fraude qui exploitent les failles humaines plutôt que techniques. Les systèmes de sécurité les plus robustes peuvent être contournés si l'utilisateur est manipulé pour divulguer ses informations d'authentification. La protection efficace contre la fraude est donc autant éducative (comprendre les tactiques des fraudeurs) que technique (activer les mesures de sécurité disponibles). La sensibilisation continue des utilisateurs est un composant aussi important que les algorithmes de détection de fraude des banques.

## La carte et l'internationalisation des études

La mondialisation des études supérieures — Erasmus en Europe, accords bilatéraux avec des universités asiatiques, doubles diplômes franco-américains — crée des besoins bancaires véritablement internationaux. Un étudiant français qui fait sa première année à Toronto et sa deuxième à Shanghai avant de terminer à Paris a besoin d'une solution bancaire qui fonctionne sans interruption dans trois pays, trois devises differentes, et deux fuseaux horaires éloignés.

Les banques en ligne et les néobanques à vocation internationale (Wise, Revolut, N26) répondent mieux à ces besoins que les banques traditionnelles locales. Leur infrastructure mondiale, leurs frais de change réduits, et leur gestion entièrement numérique les rendent particulièrement adaptées à la mobilité internationale intensive. Un étudiant qui anticipe une mobilité internationale significative a intérêt à ouvrir un compte dans l'une de ces néobanques internationales dès le début de ses études, pour bénéficier d'une solution bancaire qui accompagnera son parcours international sans friction.

## Récapitulatif pratique : bien gérer sa carte bancaire en France

En conclusion, la carte bancaire en France offre une protection et des services considérables si l'utilisateur en fait un usage éclairé. Les points essentiels à retenir : choisir le type de carte adapté à son profil d'utilisation (débit immédiat pour la visibilité du solde, premium si les voyages fréquents justifient les assurances incluses), adopter systématiquement les meilleures pratiques de sécurité (surveillance régulière, utilisation des cartes virtuelles pour les achats en ligne, prudence face aux communications inattendues), connaître ses droits en cas de fraude et savoir comment les exercer rapidement, et revoir annuellement les conditions de sa carte pour s'assurer qu'elles correspondent toujours aux meilleures offres disponibles sur le marché. Une relation bancaire maîtrisée commence par la compréhension et l'utilisation optimale de l'outil le plus utilisé au quotidien : sa carte bancaire.
`;

await appendAndPatch('fe29b046-82a5-408a-b117-a9c7b9c50c24', EXT5_L1);
await appendAndPatch('5c697fb8-6b1a-4ef0-871f-79d7ed372077', EXT5_L2);
await appendAndPatch('81753618-bf6e-4b22-80ba-30bb611450a6', EXT5_L3);
await appendAndPatch('1f0da2ea-ed8f-438c-9209-ea0f36f29359', EXT5_L4);
await appendAndPatch('733031c8-73a4-44a3-a08c-2df6974a2545', EXT5_L5);
await appendAndPatch('74596b8d-7648-452c-bc1b-1d61d29f05ca', EXT5_L6);
