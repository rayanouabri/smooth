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

// COURSE 1: Acheter d'occasion en France
const C1L1 = `# Électronique d'occasion : pièges, tests et garanties à vérifier

L'achat d'électronique d'occasion en France est l'une des catégories d'achats reconditionnés qui offre à la fois les plus grandes économies et les plus grands risques. Un smartphone d'occasion à moitié prix peut sembler une aubaine, mais un appareil défaillant que l'on ne peut pas retourner représente une perte sèche. Comprendre comment tester, évaluer et sécuriser ses achats d'électronique d'occasion est une compétence pratique qui permet de réaliser des économies substantielles tout en évitant les déconvenues les plus courantes.

## Les catégories d'électronique d'occasion et leurs spécificités

L'électronique d'occasion couvre un spectre très large de produits, chacun avec ses propres critères d'évaluation. Les smartphones sont la catégorie la plus active sur les plateformes comme Leboncoin, Backmarket et Vinted — leur durée de vie utile de plusieurs années et leur coût d'achat neuf élevé en font des cibles naturelles pour le marché de l'occasion. Les ordinateurs portables et de bureau représentent également un marché dynamique, alimenté par les renouvellements d'équipements des entreprises et particuliers. L'électroménager (réfrigérateurs, machines à laver, lave-vaisselle), moins fréquemment acheté, est souvent disponible en occasion lors des déménagements.

Pour chaque catégorie, les critères de qualité et les points de vigilance diffèrent. Un smartphone d'occasion doit faire l'objet de vérifications sur sa batterie (dont la capacité se dégrade avec les cycles de charge), sur son écran (rayures, pixels morts, décoloration), et sur ses fonctions réseau (déverrouillage SIM, compatibilité avec les fréquences 4G/5G françaises). Un ordinateur portable doit être testé sur ses performances pour les usages prévus, sur l'état de sa batterie, et sur le bon fonctionnement de tous ses ports et périphériques.

## Les plateformes spécialisées dans le reconditionnement certifié

Au-delà des plateformes de particulier à particulier comme Leboncoin, un écosystème de plateformes spécialisées dans le reconditionnement certifié s'est développé en France. Backmarket, la plus connue, propose des appareils reconditionnés par des professionnels certifiés, avec des garanties de six mois à deux ans et une politique de retour. Ces appareils ont été nettoyés, testés, et les pièces défaillantes ont été remplacées — le niveau de qualité est généralement plus élevé que celui des appareils vendus par des particuliers, mais les prix sont également plus élevés.

Fnac Reconditionné, CDiscount Occasion, et les services reconditionnement des fabricants eux-mêmes (Apple Certified Refurbished, Samsung Certified Pre-owned) offrent des garanties encore plus solides avec des produits proches du neuf en termes de qualité. Ces options sont particulièrement recommandées pour les personnes qui souhaitent les économies de l'occasion sans les risques associés aux achats entre particuliers.

## Les tests à effectuer avant tout achat d'électronique d'occasion

Lors d'un achat en direct auprès d'un particulier, un protocole de test rigoureux avant l'achat est indispensable. Pour un smartphone, ce protocole inclut la vérification de l'IMEI sur les sites de base de données volées (comme imei.fr), la vérification de l'état de santé de la batterie dans les paramètres du téléphone, un test de toutes les fonctions principales (écran tactile en entier, caméra avant et arrière, son, micro, haut-parleur, WiFi, Bluetooth, connecteur de charge), et la vérification que le téléphone est bien déverrouillé pour tous opérateurs.

Pour un ordinateur portable, le test comprend le démarrage complet du système, l'exécution de programmes de diagnostic des composants, la vérification de l'état de la batterie, le test de tous les ports USB et de la connectique, et l'inspection physique pour les éventuels dommages cachés (charnières abîmées, traces de chutes). Il est recommandé d'apporter avec soi un câble USB et une clé USB pour tester les ports, ainsi que d'utiliser des applications de diagnostic disponibles gratuitement en ligne.

## Les garanties légales applicables aux achats d'occasion

En France, le cadre légal des garanties sur les produits d'occasion dépend du vendeur. Pour les achats chez un professionnel (revendeur d'occasion, reconditionneurs certifiés), la garantie légale de conformité de deux ans s'applique, ainsi que la garantie contre les vices cachés. Pour les achats entre particuliers, seule la garantie contre les vices cachés s'applique — ce qui signifie que le vendeur particulier est responsable si les défauts existaient avant la vente et rendaient le bien impropre à l'usage, mais pas pour les usures normales déclarées.

La distinction entre un vice caché (défaut existant avant la vente, inconnu de l'acheteur) et une usure normale déclarée est fondamentale dans les litiges post-achat. Un vendeur qui a déclaré que la batterie était à 80% de sa capacité ne peut être tenu responsable si cette batterie continue de se dégrader normalement — c'était une information connue de l'acheteur lors de l'achat. En revanche, un vendeur qui a dissimulé un problème connu du téléphone engage sa responsabilité pour vice caché.

## La traçabilité et les documents à demander lors de l'achat

Certains documents accompagnant un appareil d'occasion sont des signaux positifs de sa fiabilité et de sa légalité. La facture d'achat originale prouves que l'appareil a été acheté légalement et permet de vérifier que le prix payé est cohérent avec le prix original du produit. La boîte d'origine avec ses accessoires indique que l'appareil a été traité avec soin. Les reçus de réparation antérieures montrent quels composants ont été remplacés et quand.

Un appareil électronique sans aucun document — ni facture, ni boîte, ni historique — peut avoir été volé. La vérification sur les bases de données de matériel volé (imei.fr pour les smartphones, por exemple) est toujours recommandée même si le vendeur semble honnête. En cas de doute sur la provenance d'un appareil, ne pas acheter est la meilleure décision — les économies réalisées ne valent pas le risque de se retrouver avec un appareil volé que la police pourrait récupérer.
`;

const C1L2 = `# Où chercher et comment acheter d'occasion en France : Leboncoin et les plateformes

La France dispose d'un écosystème riche et diversifié de plateformes et de marchés d'occasion, qui va bien au-delà du simple Leboncoin. Savoir naviguer dans cet écosystème — comprendre quelle plateforme est la mieux adaptée à chaque type d'achat, comment utiliser efficacement les outils de recherche et de filtrage, et comment sécuriser les transactions — est la première compétence à acquérir pour réussir ses achats d'occasion en France.

## Leboncoin : la plateforme généraliste incontournable

Leboncoin est la plateforme d'annonces généraliste la plus utilisée en France, avec plusieurs millions d'annonces actives dans toutes les catégories. Sa force est sa polyvalence — on y trouve de l'électronique, des meubles, des vêtements, des véhicules, des immobilier, des animaux, et même des services. Pour les étudiants et nouveaux arrivants en France, Leboncoin est souvent la première plateforme à consulter pour s'équiper, car les prix y sont généralement compétitifs et les vendeurs accessibles géographiquement.

La recherche sur Leboncoin peut être affinée par localisation géographique (dans un rayon de X km autour d'une ville), par fourchette de prix, et par état de l'objet (neuf, très bon état, bon état, état correct). La fonction de recherche avancée permet de sauvegarder des recherches récurrentes — pour être alerté par email dès qu'une nouvelle annonce correspondant à ses critères est publiée, une fonctionnalité précieuse pour les articles très demandés.

## Vinted : la spécialiste des vêtements et accessoires

Vinted est la plateforme européenne de référence pour l'achat et la vente de vêtements, chaussures et accessoires d'occasion. Fondée en Lituanie et très populaire en France, Vinted s'est imposée grâce à un modèle économique particulier : les acheteurs paient des frais de service à la place des vendeurs, permettant aux vendeurs de proposer des prix sans frais supplémentaires. Ce modèle, qui peut sembler défavorable aux acheteurs, est compensé par la protection acheteur incluse dans ces frais.

La protection acheteur de Vinted garantit que si l'article reçu ne correspond pas à la description (taille incorrecte, état différent de celui décrit, article manquant), l'acheteur peut ouvrir un litige dans les deux jours suivant la réception et obtenir un remboursement. Cette protection, qui n'existe pas lors des achats en direct entre particuliers, est l'un des grands avantages des plateformes par rapport aux transactions directes. Pour les vêtements en particulier — où les tailles varient selon les marques et les photos peuvent être trompeuses — cette protection est précieuse.

## Facebook Marketplace : les bonnes affaires locales

Facebook Marketplace a rapidement gagné du terrain comme plateforme d'annonces locales depuis son lancement en France. Son intégration dans l'application Facebook facilite les vérifications informelles sur les vendeurs — il est possible de voir leur profil, leur localisation approximative, et parfois leurs activités en commun avec des contacts. Ce niveau de transparence supplémentaire réduit l'anonymat des transactions par rapport à Leboncoin.

Les meilleures opportunités sur Facebook Marketplace sont souvent les articles volumineux (meubles, électroménager, vélos) que les vendeurs veulent écouler rapidement sans les déplacer loin — et donc à des prix très compétitifs pour une récupération sur place. Pour les étudiants qui s'installent dans un nouvel appartement, Facebook Marketplace dans les groupes locaux peut être une mine d'or pour meubler à bas prix.

## La Ressourcerie et les brocantes : achats physiques d'occasion

Les ressourceries sont des structures associatives ou coopératives qui collectent des objets usagés, les réparent et les revendent à prix modique. Présentes dans de nombreuses villes françaises, elles proposent souvent des prix inférieurs à ceux des plateformes en ligne pour des objets en bon état — meubles, livres, vaisselle, électroménager. L'Emmaüs, le Secours Populaire et d'autres associations chrétiennes ou laïques gèrent des boutiques d'occasion qui peuvent être de bonnes alternatives pour meubler ou équiper à faible coût.

Les brocantes et vide-greniers (marchés aux puces locaux) sont organisés régulièrement dans les communes françaises, generalement les week-ends de printemps et d'été. Ces marchés permettent de trouver des articles à des prix très bas sur certains stands, même si la qualité et la sélection sont moins prévisibles qu'en ligne. Les applications comme Chinebrocante ou Brocabrac répertorient les brocantes et vide-greniers dans toute la France par date et lieu.

## Sécuriser ses paiements lors des achats d'occasion

La sécurisation du paiement est l'aspect le plus important des achats d'occasion entre particuliers. En France, plusieurs modes de paiement sont couramment utilisés, avec des niveaux de protection différents. Le virement bancaire est rapide et gratuit via les applis bancaires modernes, mais il ne protège pas en cas de problème — une fois le virement effectué, récupérer l'argent si l'article n'est pas livré ou ne correspond pas est très difficile.

Les applications de paiement sécurisé comme Leboncoin Paiement Sécurisé (pour les transactions via Leboncoin) ou PayPal (pour les transactions entre particuliers) offrent une protection acheteur dans certains cas. Pour les achats importants effectués en personne, le paiement en espèces est une option simple mais qui nécessite de se munir du montant exact. Les chèques, autrefois courants, sont à éviter en raison des risques de chèques sans provision.
`;

const C1L3 = `# Négociation et finalisation d'achat d'occasion : contrats et garanties légales

Savoir négocier le prix d'un article d'occasion est une compétence qui peut faire économiser des dizaines à des centaines d'euros sur un seul achat. En France, la négociation sur les marchés d'occasion est non seulement acceptée mais attendue — un vendeur qui publie une annonce sait généralement qu'il recevra des propositions inférieures au prix affiché. Comprendre les tactiques de négociation appropriées, savoir quand et comment les utiliser, et formaliser les achats importants pour se protéger juridiquement sont des compétences indispensables pour tout acheteur régulier d'occasion.

## Les principes de la négociation sur les marchés d'occasion français

La culture de la négociation sur les marchés d'occasion en France est moins agressive que dans certains autres pays, mais elle est omniprésente. La règle non-écrite est que les négociations raisonnables sont les bienvenues — proposer 80 à 90% du prix affiché pour un article dont le prix est raisonnable est généralement acceptable, tandis qu'une offre de 50% pour un article bien prixé sera perçue comme irrespectueuse et refusée.

La négociation est d'autant plus légitime quand elle repose sur des arguments objectifs. Des défauts visibles ou mentionnés dans l'annonce justifient une remise proportionnelle. La comparaison avec des articles similaires disponibles moins cher sur d'autres annonces est un argument factuel acceptable. Le paiement immédiat en espèces, qui évite au vendeur d'attendre un virement ou de risquer un chèque sans provision, peut justifier une légère remise. La récupération immédiate sans que le vendeur n'ait à faire de déplacement est un avantage pour le vendeur qui peut être monétisé.

## Les tactiques de négociation efficaces

Plusieurs tactiques de négociation sont particulièrement efficaces dans le contexte français des achats d'occasion. La première est l'approche progressive : commencer par montrer un intérêt sincère et non conditionnel pour l'article avant d'aborder le prix — les vendeurs sont plus enclins à faire des concessions à quelqu'un qui semble vraiment intéressé par l'objet plutôt qu'à un négociateur pur qui ne regarde que le prix. Venir voir l'article, interagir positivement avec le vendeur, puis proposer un prix crée une dynamique relationnelle qui facilite la négociation.

La technique du lot est une autre approche efficace : si un vendeur a plusieurs articles à vendre, proposer d'en acheter plusieurs simultanément en contrepartie d'une remise globale est une proposition gagnant-gagnant — le vendeur se débarrasse de plusieurs articles d'un coup, et l'acheteur obtient un meilleur prix unitaire. Cette technique est particulièrement utile pour s'équiper à bas prix en une seule visite.

## Le bon de vente entre particuliers : protection juridique simple

Pour les achats importants entre particuliers — à partir de quelques centaines d'euros, et a fortiori pour les véhicules, le mobilier de valeur ou l'électronique coûteux — la rédaction d'un bon de vente simple est une protection juridique précieuse. Ce document n'a pas besoin d'être rédigé par un notaire ou un avocat pour avoir une valeur légale — un bon de vente manuscrit ou tapé, signé des deux parties, suffit.

Un bon de vente efficace entre particuliers doit mentionner les identités des deux parties (noms, prénoms, adresses), la description précise de l'article vendu (marque, modèle, numéro de série si disponible), l'état déclaré de l'article, le prix de vente convenu, le mode de paiement utilisé, la date et le lieu de la transaction, et la mention « vendu en l'état » si applicable pour clarifier que l'acheteur accepte l'état décrit. Ce document simple vous protège efficacement en cas de litige ultérieur, notamment pour les vices cachés.

## La clause de vice caché et ses implications

La garantie des vices cachés est un mécanisme légal français (Article 1641 du Code civil) qui protège l'acheteur contre les défauts non apparents qui existaient avant la vente et qui rendent le bien impropre à l'usage auquel il était destiné. Cette garantie s'applique même entre particuliers, même si le bien a été vendu « en l'état » — la mention « vendu en l'état sansgarantie ni reprise » ne supprime pas la garantie des vices cachés, contrairement à ce que certains vendeurs croient.

Pour invoquer la garantie des vices cachés, l'acheteur doit prouver que le défaut existait avant la vente (et n'est pas apparu après), qu'il était caché (non apparent lors de la vérification raisonnable lors de l'achat), et qu'il était suffisamment grave pour que l'acheteur n'aurait pas acheté l'article ou l'aurait acheté à un prix inférieur s'il en avait été informé. Cette garantie s'exerce généralement dans un délai de deux ans à compter de la découverte du vice.

## La médiation en cas de litige

Quand une transaction d'occasion tourne mal — article non conforme, refus de remboursement, comportement frauduleux du vendeur — plusieurs voies de résolution existent avant d'envisager une action en justice. La première est la tentative directe de résolution amiable avec le vendeur — un email ou un message documenté exposant le problème et demandant une solution (remboursement partiel, échange, réparation) est la première démarche.

Si cette démarche échoue, les plateformes sur lesquelles la transaction a eu lieu (Leboncoin, Vinted, Facebook Marketplace) ont des procédures de litige. Leboncoin Paiement Sécurisé permet d'ouvrir un litige qui sera arbitré par la plateforme. Pour les transactions sans plateforme intermédiaire, la DGCCRF (Direction Générale de la Concurrence, Consommation et Répression des Fraudes) peut être saisie pour les professionnels indélicats, et les associations de consommateurs comme UFC-Que Choisir peuvent conseiller et accompagner dans les démarches.
`;

const C1L4 = `# Vendre vos articles d'occasion : générer du revenu et économiser

Vendre ses articles d'occasion en France n'est pas seulement une façon de désencombrer son logement — c'est une source de revenu non négligeable pour les étudiants et nouveaux arrivants qui peuvent ainsi contribuer à leur budget mensuel ou financer de nouveaux achats. Le marché de l'occasion est florissant en France, et des articles qui paraissent sans valeur peuvent trouver acquéreur rapidement si la présentation et le prix sont adaptés.

## Les articles les plus faciles à vendre sur les plateformes françaises

Certaines catégories d'articles se vendent plus facilement que d'autres sur les marchés d'occasion français. Les vêtements de marque en bon état, particulièrement les vêtements de sport (Nike, Adidas, New Balance), les vêtements de création (pièces vintage, marques tendance), et les vêtements pour enfants (vite dépassés en raison de la croissance) se vendent très bien sur Vinted. Les prix accessibles et la facilité d'expédition par colis postal font de ces articles des bestsellers de la plateforme.

L'électronique grand public — smartphones, écouteurs, consoles de jeux, laptops — se vend bien sur Backmarket, Leboncoin et Facebook Marketplace, surtout si les appareils sont récents et en bon état. Les meubles IKEA et autres meubles standards se vendent facilement sur Leboncoin et Facebook Marketplace, surtout dans les grandes villes universitaires où les étudiants meublent régulièrement des appartements. Les livres universitaires — particulièrement les manuels coûteux — trouvent preneurs sur Leboncoin ou dans les groupes Facebook de partage por les étudiants d'une même filière.

## Préparer ses annonces pour maximiser les chances de vente

La qualité de l'annonce est déterminante dans le succès d'une vente d'occasion. La photographie est l'élément le plus important — des photos de qualité, prises à la lumière naturelle sur un fond neutre (sol blanc, drap clair), sous plusieurs angles, montrant clairement l'état de l'article et ses éventuels défauts, génèrent beaucoup plus de contacts qu'une photo floue prise dans un environnement encombré. Il vaut mieux investir dix minutes dans une bonne mise en scène photographique que de recevoir des dizaines de questions des acheteurs potentiels.

La description doit être précise, honnête et complète. Mentionner les dimensions exactes pour les objets (meubles, appareils photo), la capacité de la batterie pour l'électronique, les défauts visibles avec leur emplacement exact, les accessoires inclus ou manquants — cette transparence rassure les acheteurs potentiels et réduit les négociations basées sur des accusations de dissimulation lors de la rencontre. Une description honnête qui mentionne les défauts attire des acheteurs qui acceptent ces défauts, évitant ainsi les rencontres qui n'aboutissent pas.

## Fixer le bon prix pour une vente rapide

La fixation du prix de vente est le défi principal de la vente d'occasion. Un prix trop élevé fait languir l'annonce pendant des mois ; un prix trop bas laisse de l'argent sur la table. La méthode la plus efficace est de rechercher des annonces similaires (même marque, même modèle, même état) sur les plateformes cibles pour avoir une fourchette de prix du marché, puis de se positionner légèrement en dessous du milieu de cette fourchette pour une vente rapide.

Pour les articles rares ou très demandés, il est possible de se positionner dans le tiers supérieur de la fourchette, voire au-dessus, en sachant que les délais de vente seront plus longs. Pour les articles très courants (comme les vêtements basiques ou la petite électronique), se positionner dans le tiers inférieur de la fourchette maximise les chances d'une vente rapide. Mettre en avant les accessoires inclus ou la boîte d'origine peut justifier un prix légèrement supérieur à la moyenne.

## Les déclarations fiscales et les revenus de vente d'occasion

En France, les revenus issus de la vente d'occasion entre particuliers sont généralement imposables au-delà de certains seuils. La vente d'articles personnels usagés (vêtements, meubles, livres) est en principe exonérée d'impôt, car elle est considérée comme la cession de biens personnels dont la valeur a diminué. Cependant, pour les vendeurs réguliers ou professionnels qui achètent pour revendre, les revenus peuvent être qualifiés de bénéfices commerciaux et devenir imposables.

La plateforme Vinted, par exemple, est tenue de transmettre à l'administration fiscale les données de ses vendeurs dont les revenus annuels dépassent certains seuils (250 transactions ou 5 000 euros de revenus annuels). Ces signalements permettent à l'administration fiscale de vérifier que les revenus significatifs issus de la vente d'occasion sont correctement déclarés. Pour les vendeurs occasionnels qui vendent de temps en temps leurs propres affaires, aucune démarche fiscale n'est généralement nécessaire.

## Sécuriser les remises en main propre

Les remises en main propre pour les articles achetés sur Leboncoin ou Facebook Marketplace requièrent quelques précautions pratiques. Ne pas inviter des inconnus chez soi pour une remise en main propre d'article de valeur — préférer un lieu public neutre (café, parking d'hypermarché, parvis de gare) pour les rencontres. Informer un proche de l'heure et du lieu de la rencontre. Pour les articles de valeur importante, ne pas se déplacer seul.

Pendant la remise, permettre à l'acheteur de tester l'article sur place et vérifier que le paiement est bien reçu avant de remettre l'article. Les virements bancaires mobiles sont quasi-instantanés avec les applis modernes mais peuvent dans de rares cas être retardés — attendre la confirmation de réception dans son application bancaire avant de conclure la transaction.
`;

const C1L5 = `# Transport et logistique d'articles volumineux : emballage et assurance

L'achat d'articles volumineux d'occasion — meubles, électroménager, vélos, matériel sportif — soulève une question pratique souvent sous-estimée par les acheteurs : comment transporter l'article depuis le vendeur jusqu'à son domicile ? Cette dimension logistique peut rendre certains achats d'occasion difficiles voire impossibles pour des personnes sans véhicule adapté ou sans accès à des services de livraison abordables. Pourtant, des solutions existent pour chaque situation.

## Les options de transport pour les achats volumineux

La location de véhicule utilitaire est la solution la plus flexible pour transporter des articles volumineux lors d'achats d'occasion. Des sociétés comme Renault Rent, Citroën Rent, ou des loueurs locaux proposent des véhicules utilitaires (fourgonnettes, camionnettes) à la journée ou à la demi-journée pour des tarifs accessibles. La réservation à l'avance est recommandée, surtout pour les week-ends où la demande est forte. Il faut s'assurer que le permis de conduire est valide pour la catégorie de véhicule louée et que l'assurance du véhicule de location couvre bien le chargement.

Les services de déménagement express entre particuliers, proposés sur des plateformes comme Shiply, Brenger ou Airbrake, permettent de faire transporter un article volumineux par une personne physique avec un véhicule utilitaire qui effectue une livraison entre deux points de sa tournée habituelle. Ces services, moins coûteux que les sociétés de déménagement classiques, sont bien adaptés au transport d'un à deux articles d'occasion. La réservation se fait en ligne avec une description de l'article et des adresses de départ et d'arrivée.

## L'emballage approprié pour éviter les dégâts lors du transport

Un article d'occasion mal emballé peut subir des dégâts pendant le transport qui diminuent sa valeur ou le rendent inutilisable. Pour les meubles, protéger les surfaces avec des couvertures de déménagement ou du film plastique à bulles est indispensable. Les angles et les coins, zones fragiles par excellence, méritent une protection renforcée. Le démontage des meubles (retrait des pieds, des tiroirs, des portes) facilite le transport et réduit les risques de casse.

Pour l'électronique, l'emballage original est le meilleur protection — si l'acheteur peut récupérer les boîtes d'origine, c'est la solution idéale. À défaut, un emballage solide avec du mousse ou du papier journal entre l'appareil et les parois de la boîte est recommandé. Les écrans LCD ou OLED sont particulièrement fragiles aux chocs et aux pressions — les transporter debout (orientés verticalement) plutôt que à plat sur une face fragile réduit le risque d'endommagement.

## L'expédition postale pour les petits articles

Pour les articles de petite taille achetés sur des plateformes comme Vinted ou Leboncoin auprès de vendeurs dans d'autres villes, l'expédition postale est la solution standard. Les options d'expédition principales en France sont La Poste (Colissimo), Chronopost, Mondial Relay, Colis Privé, et DPD. Chaque service a ses propres tarifs, délais et points de dépôt et de retrait.

Mondial Relay est particulièrement populaire pour les particuliers grâce à ses tarifs compétitifs et au réseau dense de points relais (dans les commerces de proximité) qui permettent le retrait en dehors des horaires de bureau. Pour envoyer un colis via Mondial Relay, il suffit de créer une étiquette en ligne, de payer le transport, et de déposer le colis dans le point relais le plus proche. L'assurance optionnelle proposée lors de la création de l'étiquette couvre les dommages ou la perte lors du transport — une option à ne pas négliger pour les articles de valeur.

## Les risques d'expédition et l'assurance transport

Les colis perdus, volés ou endommagés lors du transport sont une réalité des achats et ventes d'occasion avec expédition. Les assurances transport proposées par les transporteurs couvrent généralement les dommages jusqu'à un certain montant (variant selon le niveau d'assurance choisi), mais elles nécessitent souvent de conserver les preuves d'emballage et de signaler les dommages dans des délais très courts après la réception.

Pour les articles de valeur significative (au-delà de 50 à 100 euros), souscrire à l'assurance transport n'est pas optionnel mais indispensable. Le coût de cette assurance (généralement quelques euros par colis) est négligeable par rapport à la valeur assurée. Lors de la réception d'un colis, inspecter l'emballage avant de l'accepter et noter les dommages apparents sur le bon de livraison en présence du livreur est une précaution importante — les réclamations post-signature sont souvent plus difficiles à faire valoir.

## Les ressources locales : la Croix-Rouge et les banques d'entraide

Pour les personnes aux ressources très limitées qui ne peuvent pas se permettre d'acheter même de l'occasion, des ressources locales existent en France pour obtenir gratuitement ou presque des articles dont on a besoin. Les Croix-Rouge locales, les banques solidaires, et les ressourceries partenaires des CCAS (Centres Communaux d'Action Sociale) peuvent fournir des meubles, vêtements et articles ménagers de base à des personnes en situation de grande précarité.

Pour les étudiants boursiers ou non boursiers en difficulté, les associations étudiantes de certaines universités organisent des trocs d'occasion ou des distributions gratuites d'articles de première nécessité en début d'année académique. Ces ressources, méconnues, permettent de s'installer décemment même avec des ressources très limitées. Se renseigner auprès du CROUS et du bureau de la vie étudiante de son université est le point de départ pour accéder à ces ressources.
`;

const C1L6 = `# Budget intelligent : vivre équipé pour moins de 1500 euros par an

Vivre équipé convenablement en France sans se ruiner est tout à fait possible grâce à une stratégie d'achat intelligente combinant occasions ciblées, ventes-débarras, ressources communautaires et quelques achats neufs stratégiques. Établir un budget annuel pour l'équipement et s'y tenir avec discipline est la clé d'une gestion financière saine, particulièrement pour les étudiants dont les ressources sont limitées.

## La différence entre les besoins immédiats et les besoins différables

La première étape d'une stratégie de budget intelligent pour l'équipement est de distinguer clairement les besoins immédiats (ce dont on a besoin dès l'installation) des besoins différables (ce qui peut attendre plusieurs semaines ou mois). Les besoins immédiats typiques lors d'une installation en France incluent un lit et une literie de base, un bureau et une chaise, un réfrigérateur, des ustensiles de cuisine basiques, et de la literie de bain. Ces articles doivent être acquis rapidement après l'installation, idéalement d'occasion.

Les besoins différables — télévision, canapé confortable, décoration, multi-cuiseur, machine à café — peuvent attendre que les opportunités d'occasion adéquates se présentent sans créer de difficulté immédiate. Cette patience dans l'acquisition des articles non-essentiels permet de saisir les meilleures occasions quand elles apparaissent, plutôt que d'acheter le premier article disponible par urgence.

## Le calendrier des meilleures opportunités d'occasion

Le marché de l'occasion en France a ses saisons, et les connaître permet de planifier ses achats au meilleur moment. La rentrée de septembre est la période la plus active pour les achats d'occasion en milieu universitaire — les étudiants retournent dans leur famille pour l'été en laissant derrière eux des meubles, vêtements et appareils à vendre ; de même, les étudiants qui finissent leurs études vendent leurs équipements en juin-juillet. Ces périodes de changement génèrent d'importantes quantités d'occasio de qualité à des prix très compétitifs.

Les soldes de janvier et d'été, qui concernent les produits neufs, sont également des opportunités pour certains achats neufs incontournables (linge de maison, petits électroménager basiques) à des prix réduits. Les promotions de rentrée chez les grandes enseignes d'électronique peuvent être comparées aux prix de l'occasion pour certains produits — il arrive que le neuf soldé soit moins cher que l'occasion courante pour les articles de base.

## Construire une liste d'achat priorisée et y tenir

Une liste d'achat priorisée, établie en début d'année scolaire ou lors de l'installation, est un outil de gestion budgétaire simple mais efficace. Cette liste classe les articles par ordre de priorité (besoins immédiats en premier, besoins différables ensuite), indique le budget cible pour chaque article, et permet de suivre les articles acquis versus ceux qui restent à acquérir. Cette liste empêche les achats impulsifs non-budgétés et aide à rester concentré sur les vrais besoins.

Pour tenir cette liste à jour et utiliser les alertes de nouvelles annonces sur Leboncoin ou Facebook Marketplace pour les articles en attente est la technique qui maximise les chances de trouver la bonne opportunité au bon prix. La patience est souvent récompensée — un article pour lequel on est prêt à attendre plusieurs semaines avec une alerte configurée sera souvent disponible à un prix significativement inférieur à celui que l'on aurait payé en achetant le premier article disponible.

## Les coûts cachés de l'occasion et comment les éviter

L'achat d'occasion n'est pas nécessairement toujours moins cher que l'achat neuf quand on tient compte de tous les coûts. Un article qui nécessite une réparation rapide après l'achat peut revenir plus cher que le neuf. Le coût du transport (déplacement pour récupérer l'article, location de véhicule) peut représenter un surcoût significatif pour les articles volumineux. Le temps investi dans la recherche, les visites et les transactions a une valeur qui doit être mise en balance avec les économies réalisées.

Pour éviter ces coûts cachés, quelques règles simples sont utiles. Ne pas acheter un article d'occasion si les frais de transport pour le récupérer dépassent 20% de son prix d'achat. Éviter les achats d'occasion pour les articles dont la réparation est non-standard ou très coûteuse (certains appareils électroniques avec des pièces difficiles à trouver). Privilégier les achats d'occasion proches géographiquement pour les articles volumineux.

## Exemples de budget équipement sur 12 mois

Un budget réaliste pour s'équiper intégralement en occasion sur 12 mois en France peut se décomposer ainsi : literie complète (matelas, couette, oreillers, draps) entre 100 et 200 euros en occasion ou en promotion ; mobilier de base (lit, bureau, chaise, armoire) entre 200 et 400 euros en occasion bien négociée ; petite cuisine (ustensiles, vaisselle, petit électroménager de base) entre 50 et 150 euros ; électronique (ordinateur portable reconditionné ou occasion) entre 200 et 400 euros selon les besoins ; vêtements sur l'année via Vinted et vide-greniers entre 100 et 300 euros.

Le total peut rester sous les 1000 à 1500 euros pour l'année en adoptant cette approche, contre plusieurs milliers d'euros pour des achats neufs équivalents. La différence représente plusieurs mois de loyer ou une réserve d'urgence substantielle — des économies qui ont un impact concret sur la qualité de vie et la sérénité financière d'un étudiant ou d'un nouvel arrivant en France.
`;

await patch('54543fac-19ea-4f70-aa33-3db6ab648f5f', C1L1);
await patch('87ee9dc9-5623-4cae-b27a-50eebf71c785', C1L2);
await patch('08df7fd6-e4ff-42a9-9944-dc3aa944f4ee', C1L3);
await patch('f7eecf9c-2dac-4100-8215-dfb0483766d7', C1L4);
await patch('779e325f-9b54-4647-a25d-3e5e3f1f9303', C1L5);
await patch('ce39fca3-8b41-4daa-aaec-457a8683d2ab', C1L6);
