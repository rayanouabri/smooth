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

const EXT3_L1 = `
## Comprendre les différents grades de reconditionnement et ce qu'ils impliquent

Les grades de reconditionnement — généralement désignés par des lettres (A, B, C) ou des descriptifs textuels (comme neuf, très bon état, bon état, correct) — sont utilisés de façon non standardisée par les différents acteurs du marché. Chez Backmarket, le grade A correspond à un appareil sans traces visibles à l'œil nu, le grade B à des micro-rayures légères visibles sous une lumière directe, et le grade C à des rayures ou traces visibles en utilisation normale. Cette gradation esthétique ne préjuge pas du fonctionnement — tous les appareils de tous grades ont été testés fonctionnellement avant la mise en vente.

La cohérence entre grading et prix est un indicateur de la fiabilité d'un vendeur ou d'une plateforme. Un grade A vendu à peine moins cher qu'un grade B chez le même vendeur suggère soit que les grades sont mal calibrés, soit que la différence esthétique est réellement infime. Comparer les descriptions détaillées et les photos de chaque grade avant d'acheter est toujours préférable à la lecture seule de la lettre de grade — les photos sous différents éclairages montrent bien mieux l'état réel qu'une lettre abstraite.

## Les garanties commerciales additionnelles des reconditionneurs

Outre la garantie légale de conformité de deux ans applicable à tous les achats chez un professionnel, de nombreux reconditionneurs proposent des garanties commerciales complémentaires qui renforcent la protection de l'acheteur. Ces garanties peuvent inclure des éléments non couverts par la garantie légale — comme le remplacement de la batterie si sa capacité descend en dessous d'un certain seuil dans l'année suivant l'achat, ou la prise en charge de la réparation si un composant défaille même après la période de garantie légale.

Ces garanties commerciales sont des engagements volontaires du vendeur qui créent de réelles obligations contractuelles. Il est important de lire les conditions de ces garanties avant l'achat — notamment les exclusions (dommages accidentels, eau, modifications non autorisées), la procédure pour faire valoir la garantie (expédition à ses frais ou prise en charge), et les délais d'intervention. Une garantie commerciale bien rédigée et vérifiée peut être le facteur décisif entre deux appareils similaires à prix comparable.

## L'impact du reconditionnement sur la performance des appareils

Une préoccupation fréquente des acheteurs d'appareils reconditionnés est l'impact du reconditionnement sur les performances de l'appareil. Pour les smartphones, le reconditionnement implique généralement le remplacement de la batterie — ce qui restaure les performances de charge et d'autonomie à un niveau proche du neuf. Le remplacement de l'écran, quand il est nécessaire, peut parfois introduire des différences de qualité si l'écran de remplacement est une pièce d'origine aftermarket plutôt que d'origine fabricant — notamment en termes de rendu des couleurs ou de réactivité tactile.

Pour les ordinateurs portables reconditionnés, les performances processeur et mémoire sont généralement intactes et non affectées par le reconditionnement physique. La vitesse de lecture/écriture du disque dur ou SSD peut avoir légèrement diminué avec l'usage, mais cette dégradation est en général imperceptible pour les usages quotidiens. Un nettoyage du disque (réinstallation propre du système d'exploitation) par le reconditionneur élimine les données personnelles de l'utilisateur précédent et peut aussi améliorer les performances du système.

## Les particularités des smartphones Apple en occasion

Les smartphones Apple (iPhone) occupent une place particulière dans le marché de l'occasion en France, en raison de leur forte demande et de leur durée de vie logicielle exceptionnellement longue. Apple supporte ses iPhones avec des mises à jour iOS pendant 5 à 7 ans après leur sortie — ce qui signifie qu'un iPhone de 4 ou 5 ans peut encore recevoir des mises à jour de sécurité et accéder aux dernières versions des applications. Cette durée de vie logicielle est nettement supérieure à celle de la plupart des smartphones Android, dont les mises à jour constructeur s'arrêtent souvent après 2 à 3 ans.

Pour vérifier si un iPhone d'occasion est éligible pour être activé (non verrouillé par l'activation lock d'Apple), il est indispensable de demander au vendeur de désactiver le verrouillage d'activation (Activer Localiser) depuis son compte Apple et de confirmer que le téléphone peut être réinitialisé proprement. Un iPhone qui reste bloqué sur l'écran d'activation lock après réinitialisation est inutilisable sans les identifiants Apple du propriétaire précédent — une situation à éviter absolument.
`;

const EXT3_L2 = `
## Les techniques de vérification des profils vendeurs sur les plateformes

La vérification approfondie du profil d'un vendeur avant un achat important est une étape de diligence qui prend peu de temps mais peut éviter des déconvenues. Sur Leboncoin, le profil du vendeur affiche le nombre d'annonces actives, les évaluations reçues des acheteurs précédents (si le vendeur utilise le Paiement Sécurisé), et parfois la localisation générale. Un vendeur avec des évaluations positives nombreuses et reçues sur une longue période est un indicateur de fiabilité ; un profil récent sans évaluations est un signe de prudence.

Sur Vinted, le système d'évaluations est plus développé et plus visible — chaque transaction donne lieu à une évaluation publique de l'acheteur sur le vendeur, et vice versa. Le taux de réponse du vendeur et son délai de réponse habituel sont également affichés. Les vendeurs avec un grand nombre d'évaluations positives, un taux de réponse élevé et des délais d'expédition rapides sont les partenaires les plus fiables pour une transaction d'occasion. Prendre le temps de lire quelques évaluations récentes (pas seulement le score global) révèle souvent des informations précieuses sur le style du vendeur.

## L'utilisation des comparateurs de prix pour trouver la meilleure offre

Des outils comparateurs de prix permettent d'analyser en temps réel les offres disponibles sur plusieurs plateformes pour le même produit. Des sites comme Leguide.com, Idealo (pour les produits neufs et parfois d'occasion), ou des extensions navigateur comme Honey permettent de comparer les prix rapidement. Pour les livres, le comparateur Addall.com (disponible en anglais) agrège les offres de dizaines de revendeurs d'occasion internationaux.

Pour l'électronique reconditionnée spécifiquement, des comparateurs dédiés comme Comparatek ou les comparaisons directes sur les sites de reconditionneurs (en testant plusieurs plateformes pour le même modèle) permettent d'identifier où le rapport qualité/prix est le meilleur. Ces comparaisons prennent en compte non seulement le prix et le grade de l'article, mais aussi les frais de livraison, la durée de garantie proposée, et la politique de retour — des facteurs qui peuvent significativement modifier la valeur comparative des offres.

## Les points relais et leur rôle dans la facilitation des achats d'occasion

Le réseau de points relais en France — principalement Mondial Relay (plus de 10 000 points), Colissimo (plus de 9 000 bureaux de poste et points relais) et Chronopost (plus de 9 000 points) — joue un rôle crucial dans la facilitation des achats d'occasion avec expédition. Ces points relais, présents dans les commerces de proximité (tabacs, parfumeries, supermarchés), permettent de récupérer ses colis pendant les horaires d'ouverture du commerce, sans avoir besoin d'être présent à domicile lors de la livraison.

Pour les étudiants qui habitent dans des résidences universitaires ou des appartements avec des boîtes aux lettres inadaptées, les points relais sont souvent la solution préférée pour recevoir ses commandes d'occasion. L'application Mondial Relay permet de géolocaliser les points relais les plus proches, de suivre les colis en temps réel, et de paramétrer la livraison par défaut vers son point relais préféré. Cette organisation logistique préalable simplifie considérablement la réception des achats d'occasion avec expédition.

## Les garanties de compatibilité avec les systèmes français

Pour certains appareils électroniques, la compatibilité avec les normes et standards français doit être vérifiée lors des achats d'occasion, notamment pour les appareils importés de pays non-européens. Les appareils vendus légalement dans l'UE doivent être marqués CE (Conformité Européenne) et respecter les normes de sécurité électrique et électromagnétique européennes. Un appareil acheté d'occasion qui ne porte pas les marques de conformité européenne peut ne pas être compatible avec les prises françaises, peut présenter des risques de sécurité électrique, ou peut perturber les fréquences radio.

Pour les prises et les tensions électriques, les appareils européens fonctionnent en 220-240V et utilisent les prises de type E (standard français et belge). Les appareils vendus aux États-Unis fonctionnent en 110V — les brancher directement sur une prise française sans transformateur les endommagerait immédiatement. Les adaptateurs de prise permettent de connecter physiquement un appareil, mais ne convertissent pas la tension — il faut un transformateur de tension pour les appareils incompatibles. Cette vérification basique peut permettre d'éviter d'acheter un article d'occasion inutilisable en France.
`;

const EXT3_L3 = `
## La préparation psychologique à la négociation

La dimension psychologique de la négociation est souvent sous-estimée dans les échanges commerciaux informels. La confiance en soi, la préparation préalable, et la gestion des émotions pendant la rencontre influencent le résultat autant que les arguments factuels utilisés. Un acheteur qui a fait ses devoirs — qui connaît les prix du marché, qui a identifié les défauts de l'article, et qui a une idée claire de son budget maximum — est en position de force pour négocier sereinement.

À l'inverse, un acheteur qui est « en amour » avec l'article avant même de l'avoir vu en personne est dans une position de faiblesse — sa motivation à l'obtenir est perceptible par le vendeur et réduit sa capacité à accepter un refus ou à s'éloigner sans conclure. Développer la capacité à « se détacher » d'un article pendant la négociation — en se rappelant que d'autres articles similaires existent sur le marché — est une compétence mentale qui améliore les résultats de négociation.

## La négociation multi-parties et le jeu des offres multiples

Quand plusieurs acheteurs sont intéressés par le même article, une dynamique d'offres multiples peut s'installer. Certains vendeurs, pour maximiser leur prix, mentionnent explicitement qu'ils ont d'autres intéressés — une tactique de pression légitime qui peut précipiter la décision de l'acheteur. Face à cette tactique, maintenir son calme et ne pas augmenter son offre sous la pression est la réponse adaptée — si l'autre acheteur est réel et offre plus, l'article ira à lui, et un autre article similaire sera disponible sur le marché.

Une variante de cette situation est l'acheteur qui arrive à une rencontre et découvre que le vendeur a programmé plusieurs visites pour le même créneau. Cette pratique — non annoncée préalablement — peut créer une atmosphère d'enchère informelle qui pousse les acheteurs à surenchérir. Dans cette situation, il est légitime de demander au vendeur de clarifier la procédure — choisit-il le meilleur prix proposé, ou le premier arrivé à son prix ? — avant d'ajuster sa stratégie en conséquence.

## La rédaction d'un bon de vente efficace : modèle pratique

Un bon de vente entre particuliers n'a pas besoin d'être un document juridique complexe pour avoir une valeur légale. Un texte simple rédigé sur une feuille de papier ordinaire, signé des deux parties, suffit. Un modèle efficace peut se présenter comme suit : « Je soussigné(e) [Nom Prénom], demeurant à [Adresse], vends à [Nom Prénom Acheteur], demeurant à [Adresse acheteur], l'article suivant : [Description précise - marque, modèle, numéro de série], état déclaré : [Description de l'état tel que convenu], au prix de [Montant] euros, réglé par [Mode de paiement]. La vente est conclue en l'état des défauts décrits ci-dessus. Fait à [Lieu], le [Date]. » Suivi des signatures des deux parties.

Ce document simple est suffisant dans la très grande majorité des litiges. Pour les transactions auprès de professionnels (reconditionneurs, troc), une facture officielle avec SIRET du vendeur remplace ce document et offre une protection encore plus solide. La facture professionnelle est également utile pour faire valoir la garantie légale de conformité de deux ans auprès du reconditionneur.

## La gestion des litiges post-achat : étapes pratiques

Quand un achat d'occasion ne correspond pas à ce qui a été décrit — article défectueux non déclaré, article différent de la description, article manquant — les étapes pratiques de gestion du litige suivent une progression logique. La première étape est toujours la documentation : photographier l'article dans l'état découvert, conserver tous les messages échangés avec le vendeur, noter précisément la date et les circonstances de la découverte du problème. Cette documentation est la base de tout recours ultérieur.

La deuxième étape est la communication avec le vendeur — un message clair et factuel qui décrit le problème sans accusation, et demande une solution (remboursement partiel, retour et remboursement intégral, remplacement). Ce message doit être envoyé par un canal traçable (message Leboncoin, email, SMS) et non transmis uniquement oralement. La réponse ou l'absence de réponse du vendeur dans un délai raisonnable (une semaine) détermine si l'escalade est nécessaire. L'escalade peut impliquer la plateforme (si la transaction est passée par Leboncoin Paiement Sécurisé ou Vinted), une association de consommateurs, ou une juridiction civile.
`;

const EXT3_L4 = `
## Les photos de vente : matériel et techniques accessibles

Réaliser de bonnes photos de vente ne nécessite pas de matériel photographique professionnel — un smartphone récent avec un bon appareil photo est largement suffisant. Les paramètres qui font la différence dans la qualité des photos de vente sont la lumière naturelle (près d'une fenêtre, sans soleil direct qui crée des reflets durs), un fond neutre et propre (une nappe blanche, un drap clair, ou un mur uni), et la stabilité de l'appareil (poser le téléphone sur une surface stable ou utiliser un mini-trépied pour éviter le flou de bougé).

Pour les vêtements, accrocher les pièces sur un cintre devant un mur neutre ou les photographier à plat sur une surface propre donne de bien meilleurs résultats qu'une photo prise sur une pile de vêtements ou dans un environnement encombré. Pour l'électronique, photographier l'appareil allumé (pour montrer que l'écran fonctionne) et les accessoires inclus séparément (câbles, chargeur, boîte) aide les acheteurs à évaluer l'offre complète. La philosophie est simple : montrer ce que l'acheteur verrait s'il était devant vous avec l'article en main.

## Optimiser ses profils de vendeur pour la crédibilité

Sur les plateformes comme Vinted et Leboncoin, un profil de vendeur soigné crée un sentiment de confiance qui facilite les ventes. Une photo de profil réelle (pas un avatar ni une image de paysage), une biographie courte mais informative (« Particulier à Paris, je vends mes affaires perso avec soin. Toujours disponible pour des questions. »), et un historique de transactions positives visibles en profil public sont des éléments qui distinguent un vendeur de confiance d'un inconnu sans historique.

Répondre rapidement aux questions des acheteurs est peut-être le facteur le plus simple et le plus impactant pour améliorer ses performances de vente. Les acheteurs qui reçoivent une réponse dans la demi-heure sont nettement plus susceptibles de conclure l'achat que ceux qui attendent plusieurs heures ou jours. Si vous êtes temporairement indisponible, paramétrer un message d'absence automatique sur les plateformes qui le permettent (Vinted le propose) évite aux acheteurs potentiels de penser que vous êtes inactif.

## Les erreurs les plus courantes des vendeurs débutants sur les plateformes

Les vendeurs qui débutent sur les marchés d'occasion font systématiquement les mêmes erreurs qui réduisent leurs résultats de vente. La première est de surestimer la valeur de leurs articles en se basant sur leur valeur personnelle ou sentimentale plutôt que sur la valeur de marché — ce qui crée des prix trop élevés qui n'attirent aucun acheteur. La deuxième erreur est de négliger la qualité des photos — une annonce avec une seule photo floue dans un environnement encombré génère beaucoup moins de contacts qu'une annonce avec plusieurs photos claires et bien composées.

La troisième erreur est d'ignorer les commentaires implicites du marché — si une annonce ne génère aucun contact après une semaine, c'est généralement un signe que le prix est trop élevé ou que la présentation est insuffisante. Baisser le prix de 10 à 15% ou améliorer les photos peut suffire à relancer l'intérêt. La quatrième erreur est de ne pas proposer la livraison — de nombreux acheteurs potentiels ne peuvent pas se déplacer pour une remise en main propre, et l'absence d'option d'expédition réduit considérablement le public d'acheteurs potentiels.

## La traçabilité des paiements pour éviter les litiges

La traçabilité des paiements est particulièrement importante pour les transactions importantes entre particuliers. Le virement bancaire laisse une trace à la fois dans le relevé bancaire de l'acheteur et dans celui du vendeur — avec le montant, la date et la référence de la transaction. Il est conseillé d'inclure une référence explicite dans le libellé du virement (par exemple : « Achat MacBook Pro annonce Leboncoin »), qui rend le paiement traçable et facilite les réclamations en cas de litige.

PayPal laisse également des traces de transaction que l'on peut utiliser en cas de litige — avec la protection acheteur disponible dans certains modes de paiement (paiement pour un bien ou service). En revanche, un paiement via PayPal en mode « envoyer de l'argent à un ami » ne bénéficie pas de la protection acheteur — cette distinction est importante à connaître. Les espèces, à l'inverse, ne laissent aucune trace — d'où l'intérêt de systématiquement faire signer un bon de vente simple pour les transactions en espèces importantes.
`;

const EXT3_L5 = `
## La préparation du chargement et l'optimisation de l'espace utilitaire

Charger efficacement un véhicule utilitaire loué pour récupérer des articles d'occasion volumineux nécessite de la réflexion préalable. Les articles les plus lourds (électroménager, meubles en bois massif) doivent être chargés en premier et placés bas pour stabiliser le centre de gravité du véhicule. Les articles fragiles (électronique, miroirs, vitres) doivent être protégés sur tous leurs côtés et idéalement calés contre les parois du véhicule pour ne pas se déplacer pendant le transport.

Mesurer les articles à transporter avant de louer le véhicule est une étape qu'on néglige souvent et qui peut poser problème — s'assurer que le canapé ou l'armoire rentre dans le fourgon avant de se déplacer est indispensable. Les véhicules utilitaires ont des dimensions utilitaires variables (hauteur et largeur intérieure, hauteur de chargement) selon les modèles. Pour les pièces de mobilier très grandes, les sociétés de location indiquent les dimensions intérieures de leurs véhicules sur leurs sites, permettant de confirmer la compatibilité avant la réservation.

## Les contraintes d'accès dans les immeubles et bâtiments anciens

Un obstacle logistique souvent sous-estimé dans le transport d'articles volumineux d'occasion est l'accès aux appartements dans les bâtiments anciens français. Les immeubles haussmanniens (construits au XIXe siècle) ont souvent des escaliers étroits et en colimaçon qui rendent la montée d'un canapé ou d'un réfrigérateur très difficile voire impossible. Les ascenseurs, quand ils existent, sont souvent de petite taille dans ces bâtiments anciens.

Avant de conclure l'achat d'un meuble volumineux d'occasion, s'assurer que les dimensions de l'article permettent son transport jusqu'à l'appartement est une vérification pratique essentielle. Mesurer la largeur de la cage d'escalier, la hauteur des plafonds des paliers, et les dimensions de l'ascenseur est une étape concrète. Si le transport physique est impossible, le démontage de l'article en pièces transportables peut parfois résoudre le problème — à négocier avec le vendeur avant l'achat.

## La récupération de meubles IKEA d'occasion : points d'attention

Les meubles IKEA d'occasion représentent une catégorie particulièrement abondante sur les marchés d'occasion français, notamment sur Leboncoin et Facebook Marketplace. IKEA étant le fabricant de meubles le plus populaire en France, ses produits sont disponibles en grande quantité à des prix très compétitifs. Quelques points d'attention spécifiques aux meubles IKEA d'occasion guident les achats judicieux.

La vérification de l'intégralité des pièces et des instructions de montage est cruciale pour les meubles IKEA démontés — des pièces ou vis manquantes peuvent empêcher le remontage complet. Les roulettes et les ferrures (charnières, glissières de tiroirs) sont les composants les plus souvent usés ou cassés dans les meubles IKEA d'occasion — les vérifier avant l'achat permet d'éviter des surprises. Enfin, les placards et étagères IKEA de séries discontinuées ne permettent pas d'acheter des pièces de remplacement directement chez IKEA si elles sont manquantes — une recherche sur les marchés d'occasion ou les groupes Facebook IKEA peut parfois permettre de trouver des pièces compatibles.

## La valeur résiduelle des articles achetés d'occasion

L'un des avantages méconnus de l'achat d'occasion est la valeur résiduelle souvent supérieure à l'achat neuf. Un article acheté neuf perd généralement de 20 à 40% de sa valeur dès la sortie du magasin (la dépréciation initiale). Un article acheté d'occasion à 60% du prix neuf a déjà subi cette dépréciation initiale — si l'acheteur décide de le revendre quelques années plus tard, la dépréciation supplémentaire sera proportionnellement plus faible que pour un achat neuf.

Sur des appareils Apple bien conservés, cette valeur résiduelle peut être particulièrement haute — il est tout à fait possible de revendre un iPhone d'occasion après trois ans d'utilisation à 70 à 80% de son prix d'achat d'occasion, soit une dépréciation très faible pour trois ans d'usage. Cette perspective de valeur résiduelle change la façon de calculer le coût réel de possession d'un article — le coût total de possession (prix d'achat moins valeur de revente) est souvent nettement plus faible pour un achat d'occasion que pour un achat neuf.
`;

const EXT3_L6 = `
## La psychologie du désencombrement pour générer du budget occasion

Avant même d'envisager d'acheter de nouveaux articles d'occasion, un désencombrement méthodique du logement peut générer à la fois de l'espace et du budget. La méthode KonMari, popularisée par Marie Kondo, propose une approche par catégorie (vêtements, livres, papiers, divers) plutôt que par pièce, avec le criterère « est-ce que cet article me procure de la joie ? » pour décider de garder ou de lâcher. Appliquée avec rigueur, cette méthode peut identifier des dizaines d'articles que l'on possède sans les utiliser et qui pourraient trouver un second usage chez quelqu'un d'autre.

Le produit des ventes issues du désencombrement constitue un budget naturel pour les achats d'occasion prioritaires — en quelque sorte, on finance le renouvellement de son équipement avec les articles dont on n'a plus besoin. Ce cycle vertueux — désencombrer pour vendre, utiliser les revenus pour acheter d'occasion ce dont on a réellement besoin — est au cœur de l'économie d'occasion française et de la philosophie de minimalisme économique.

## Comparer le coût de possession total : occasion vs neuf vs location

Une analyse financière rigoureuse des options d'acquisition d'un article doit prendre en compte le coût total de possession, qui inclut le prix d'achat, les coûts de maintenance et de réparation éventuels, et la valeur résiduelle à la revente. Cette analyse complète change souvent l'ordre de préférence apparent — un article d'occasion légèrement moins fiable peut avoir un coût total de possession inférieur à l'occasion de meilleure qualité si sa valeur résiduelle est similaire.

La location à long terme d'appareils électroniques — proposée notamment par Darty (Darty Max), Amazon (Amazon Renewed Rental), et d'autres acteurs — est une troisième option à considérer pour certaines catégories d'appareils qui évoluent rapidement. Pour quelqu'un qui souhaite toujours avoir un smartphone récent, un programme d'échange annuel chez un opérateur ou un service de location peut coûter moins cher sur deux à trois ans que les achats successifs, compte tenu de la valeur résiduelle des appareils. Cette comparaison nuancée est l'outil d'un consommateur éclairé.

## Les habitudes de consommation durables à développer dès l'arrivée en France

L'installation en France est une opportunité unique de développer des habitudes de consommation durables dès le début, sans les compromis difficiles requis pour changer des habitudes installées. Commencer sa vie en France avec un modèle de consommation basé sur l'occasion par défaut, le neuf comme exception justifiée, crée des réflexes qui perdurent et génèrent des économies cumulées considérables sur le long terme.

Constituer un réseau local de confiance — voisins, camarades, associations — pour les échanges et prêts d'objets est un investissement social à faible coût mais à fort rendement pratique. Les personnes qui ont développé ce réseau peuvent emprunter une perceuse pour un week-end, prêter une valise pour un voyage, ou échanger des services sans transactions monétaires. Ce modèle d'économie collaborative informelle est une extension naturelle de la culture de l'occasion et renforce les liens communautaires locaux tout en réduisant les besoins d'achat.

## Synthèse et points clés pour l'acheteur d'occasion averti

L'achat d'occasion en France est une compétence qui s'acquiert et se perfectionne avec la pratique. Les principes fondamentaux — rechercher et comparer avant d'acheter, tester avant de payer, documenter les transactions importantes, connaître ses droits légaux — constituent le socle d'une pratique d'achat sûre et économique. La maîtrise des différentes plateformes disponibles, en comprenant leurs forces et leurs faiblesses spécifiques pour chaque catégorie d'article, permet d'optimiser ses résultats sur chaque achat.

Le marché de l'occasion en France est suffisamment développé et diversifié pour couvrir la quasi-totalité des besoins matériels d'un étudiant ou d'un nouvel arrivant, si on lui laisse le temps nécessaire pour trouver les bonnes opportunités. La patience stratégique — attendre la bonne offre plutôt que d'acheter le premier article disponible sous la pression de l'urgence — est souvent la différence entre un achat ordinaire et un achat exceptionnel. En combinant cette patience avec une veille active et des alertes configurées sur les plateformes, on crée un système d'approvisionnement efficace qui génère des économies substantielles tout au long de son séjour en France.
`;

await appendAndPatch('54543fac-19ea-4f70-aa33-3db6ab648f5f', EXT3_L1);
await appendAndPatch('87ee9dc9-5623-4cae-b27a-50eebf71c785', EXT3_L2);
await appendAndPatch('08df7fd6-e4ff-42a9-9944-dc3aa944f4ee', EXT3_L3);
await appendAndPatch('f7eecf9c-2dac-4100-8215-dfb0483766d7', EXT3_L4);
await appendAndPatch('779e325f-9b54-4647-a25d-3e5e3f1f9303', EXT3_L5);
await appendAndPatch('ce39fca3-8b41-4daa-aaec-457a8683d2ab', EXT3_L6);
