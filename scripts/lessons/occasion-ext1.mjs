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
## Les applications mobiles dédiées à l'électronique reconditionnée

Au-delà des grandes plateformes généralistes, des applications mobiles spécialisées ont émergé pour faciliter les achats d'électronique reconditionnée. Swappie est une plateforme finlandaise qui s'est imposée en France pour les smartphones reconditionnés, avec une approche qui ressemble à celle de Backmarket mais avec des garanties encore plus étendues et une interface utilisateur particulièrement soignée. Les smartphones vendus par Swappie sont reconditionnés en interne, ce qui garantit une cohérence dans les standards de qualité.

Recommerce, entreprise française pionnière du reconditionnement, travaille directement avec les opérateurs téléphoniques pour racheter les smartphones rendus dans le cadre des programmes de reprise, les reconditionner et les revendre. Cette chaîne courte — sans intermédiaires multiples — est un argument de qualité, car l'historique du smartphone est connu du reconditionneur. Les téléphones reconditionnés par Recommerce sont classés par grade de qualité (A, B, C) selon l'état esthétique, avec des vérifications fonctionnelles standardisées.

## L'importance de vérifier la compatibilité réseau

Un aspect souvent négligé lors de l'achat d'un smartphone d'occasion est la vérification de la compatibilité réseau avec les fréquences utilisées par les opérateurs français. La 4G et la 5G en France utilisent des bandes de fréquences spécifiques que tous les téléphones ne supportent pas, notamment les modèles achetés hors d'Europe ou conçus pour d'autres marchés. Un smartphone vendu légalement aux États-Unis peut ne pas supporter toutes les bandes 4G utilisées en France, résultant en une connexion de mauvaise qualité ou limitée.

Pour vérifier la compatibilité, la liste des bandes supportées par un modèle de smartphone est généralement disponible sur les sites de test technique comme GSMArena. Les opérateurs français (Orange, SFR, Bouygues, Free) publient les listes des bandes fréquentielles de leurs réseaux sur leurs sites. Une vérification croisée simple permet de s'assurer que le smartphone d'occasion envisagé supporte bien les bandes utilisées par son opérateur. Cette vérification, qui prend moins de cinq minutes, peut éviter une déconvenue majeure après l'achat.

## Les programmes de reprise : vendre son ancien smartphone pour financer le nouveau

Les programmes de reprise proposés par les fabricants, les opérateurs et les grandes enseignes permettent d'obtenir une valeur pour son ancien smartphone qui vient en déduction du prix du nouveau. Ces programmes sont devenus très courants en France — Orange, SFR, Bouygues et Free proposent tous des estimations de reprise en ligne et des reprises en boutique. Les sites spécialisés comme Trade-in Tech ou Reborn proposent des prix de rachat compétitifs pour les smartphones en bon état.

La valeur de reprise dépend de nombreux facteurs : le modèle, l'âge de l'appareil, l'état de l'écran et du boîtier, et la capacité de stockage. Un iPhone en bon état conserve généralement une valeur de reprise plus élevée que les smartphones Android concurrents, en raison de la demande soutenue pour les iPhones reconditionnés. Comparer les offres de reprise de plusieurs acteurs avant de choisir est recommandé — les différences de prix peuvent être significatives pour un même modèle.
`;

const EXT1_L2 = `
## Les plateformes spécialisées par catégorie de produit

L'écosystème des plateformes d'occasion en France s'est progressivement spécialisé par catégorie de produit, permettant aux acheteurs de trouver les meilleures offres selon leur besoin spécifique. Pour les livres, PriceMinister (devenu Rakuten Marketplace) reste une référence, aux côtés de Momox et World of Books qui proposent des livres d'occasion à prix fixes avec expédition standardisée. Ces plateformes, moins connues que Leboncoin pour les livres, offrent des garanties de qualité minimale et des systèmes d'évaluation fiables.

Pour le mobilier de bureau et le matériel professionnel d'occasion, des plateformes comme Auchan Occasion Pro, Manutan Occasion, ou les revendeurs spécialisés offrent des stocks importants de matériel professionnel déclassé (ordinateurs, téléphones de bureau, mobilier de bureau) à des prix significativement inférieurs aux prix neufs. Ces plateformes sont particulièrement adaptées aux étudiants qui cherchent du mobilier ergonomique pour leur domicile à prix réduit.

## Les groupes Facebook locaux et les réseaux communautaires

Les groupes Facebook locaux sont devenus une ressource importante pour les achats d'occasion, particulièrement dans les villes universitaires. Des groupes comme « Acheter/Vendre [Nom de la Ville] » ou « Troc étudiants [Nom de l'Université] » rassemblent des dizaines de milliers de membres et génèrent des dizaines d'annonces de proximité chaque jour. L'avantage principal de ces groupes par rapport aux plateformes officielles est l'absence de frais et la proximité géographique — les vendeurs et acheteurs sont souvent dans le même quartier ou la même résidence universitaire.

La nature communautaire de ces groupes crée un niveau de confiance informel plus élevé que sur Leboncoin — les vendeurs sont visibles et identifiables, ce qui réduit les risques d'arnaques. Cependant, cette confiance implicite ne doit pas faire baisser la vigilance sur la qualité des articles et la réalisation des tests appropriés avant l'achat. Les règles de ces groupes varient — certains exigent que les prix soient mentionnés dans l'annonce, d'autres interdisent certaines catégories de produits ou les liens vers d'autres plateformes.

## Les ventes aux enchères en ligne pour les bonnes affaires

Les ventes aux enchères en ligne représentent une opportunité souvent méconnue pour obtenir des articles à des prix très bas, avec un niveau de risque légèrement plus élevé que les transactions directes. Les plateformes comme Interencheres, Invaluable, et les enchères en ligne des commissaires-priseurs provinciaux proposent régulièrement des lots d'électronique, de mobilier et d'objets divers issus de successions, de liquidations judiciaires ou de collections privées. Ces ventes, accessibles depuis le canapé via les applications mobiles, permettent d'acquérir des articles rarissimes ou des lots importants à des prix très inférieurs aux prix du marché.

La participation aux ventes aux enchères en ligne nécessite une inscription préalable et acceptation des conditions de vente (qui incluent généralement des frais d'acheteur de 20 à 30% sur le prix d'adjudication). Il est essentiel de consulter les conditions de chaque vente, de noter les dates et heures de fin d'enchère, et de fixer à l'avance le prix maximum que l'on est prêt à payer pour éviter de se laisser emporter par l'ambiance de l'enchère.
`;

const EXT1_L3 = `
## L'art de la contre-proposition dans les achats d'occasion

La contre-proposition — le moment où on annonce un prix différent de celui demandé — est un art subtil qui demande du doigté et de la préparation. Une contre-proposition bien formulée commence par une reconnaissance implicite de la valeur de l'article : « Je suis vraiment intéressé par cet ordinateur, il correspond exactement à ce que je cherche. J'ai cependant trouvé un modèle similaire à X euros sur Leboncoin — est-ce que vous seriez prêt à vous rapprocher de ce prix ? » Cette formulation présente la demande de remise non pas comme une critique du prix affiché, mais comme une information de marché qui justifie une révision.

Une contre-proposition par message écrit (sur Leboncoin ou via SMS) a l'avantage de donner au vendeur le temps de réfléchir sans pression immédiate — ce qui peut favoriser l'acceptation par rapport à une demande orale sur le vif. Si le vendeur refuse la première contre-proposition, une deuxième tentative avec un argumentaire différent peut parfois aboutir — par exemple, proposer une récupération immédiate ce jour-là en échange d'une légère remise par rapport à la première contre-proposition. La persistance raisonnée, sans harcèlement, peut finalement aboutir.

## La vérification de l'ancienneté et de l'authenticité d'une annonce

Sur Leboncoin et Facebook Marketplace, le comportement de l'annonce et de son auteur peut fournir des indices sur sa fiabilité. Une annonce récemment publiée avec une qualité de photos professionnelles, un prix très bas pour la catégorie, et un profil de vendeur fraîchement créé sans historique de transactions est un signal d'alarme pour une potentielle arnaque. Les arnaques classiques incluent les prétendues ventes de personnes qui « déménagent d'urgence » et demandent un paiement avant la rencontre.

Des outils simples permettent de vérifier l'authenticité d'une annonce. La recherche inverse d'image (via Google Images ou TinEye) sur les photos de l'annonce permet de détecter si les photos ont été copiées depuis un autre site — signe que l'article n't existe peut-être pas chez le vendeur prétendu. La vérification du profil du vendeur — depuis quand existe-t-il, combien de ventes réalisées, quels commentaires reçus — est une étape de diligence minimale pour les achats significatifs.

## Formaliser les engagements avant la rencontre pour les achats importants

Pour les achats importants (au-delà de 200 euros), il est recommandé de formaliser les engagements avant la rencontre pour éviter les déplacements inutiles. Un échange de messages clair sur le prix final convenu, les défauts déclarés de l'article, et la date-heure-lieu de la rencontre constitue une forme de confirmation préalable. Si le vendeur revient sur le prix convenu lors de la rencontre (technique appelée « bait and switch »), l'acheteur peut s'appuyer sur l'historique des messages pour défendre le prix initial ou décider de ne pas conclure la transaction.

Pour les véhicules ou les articles de très haute valeur (supérieurs à 500 euros), un acompte symbolique par virement peut parfois être demandé pour « réserver » l'article — une pratique plus courante pour les véhicules que pour les biens courants. Si vous acceptez de verser un acompte, assurez-vous que ce montant est considéré comme perdu si vous changez d'avis (ce qui est l'usage normal des arrhes), et que le solde sera payé lors de la remise effective de l'article après vérification de son état.
`;

const EXT1_L4 = `
## Les stratégies pour vider son appartement avant un déménagement

Le déménagement est l'occasion idéale pour transformer les objets inutilisés en argent frais. Une stratégie efficace est de commencer le tri et la mise en vente plusieurs semaines avant le déménagement, pour avoir le temps de vendre au bon prix sans être contraint par l'urgence. Les articles les plus volumineux (meubles, électroménager) doivent être mis en vente en premier, car ils nécessitent plus de temps pour trouver un acheteur et ne peuvent pas être déplacés à distance.

Pour maximiser l'efficacité, organiser une journée de « vide-appartement » — annoncée sur Leboncoin et les groupes locaux — permet de faire venir plusieurs acheteurs le même jour et de vendre plusieurs articles d'un coup. Cette approche est particulièrement populaire parmi les étudiants qui terminent leurs études et doivent vider leur appartement étudiant rapidement. Les prix sont généralement légèrement inférieurs à ceux d'une vente individuelle, mais la commodité de tout vendre en une journée compense largement cette différence.

## Gérer les acheteurs potentiels efficacement

La gestion des contacts d'acheteurs potentiels est une compétence pratique qui peut faire la différence entre une vente réussie et des semaines de frustrations. Pour les articles très demandés, il est normal de recevoir de nombreux messages rapidement après la publication de l'annonce — répondre dans l'ordre d'arrivée et donner la priorité aux acheteurs disponibles rapidement est la pratique standard sur Leboncoin. Certains vendeurs indiquent explicitement « premier arrivé, premier servi » et « disponible pour récupération immédiate » pour décourager les intéressés peu sérieux.

Les annuleurs de dernière minute sont un problème courant dans les ventes d'occasion. Pour réduire ce risque, il est utile de confirmer la rencontre par un message le matin du jour prévu et de ne pas refuser définitivement les autres acheteurs potentiels avant d'avoir le paiement en main. Cette pratique — maintenir deux ou trois acheteurs potentiels en paralèle — peut sembler déloyale, mais elle est courante et acceptée dans le marché de l'occasion français, du moment que l'on informe les autres acheteurs potentiels dès que la vente est conclue.

## Rédiger des annonces qui se démarquent

Dans un marché saturé d'annonces similaires, la qualité de la rédaction fait la différence entre une annonce qui génère des contacts et une annonce qui passe inaperçue. Un titre efficace doit être descriptif et inclure les mots-clés que les acheteurs utilisent dans leur recherche — plutôt que « Vends ordinateur », écrire « Vends MacBook Pro 2020 M1 — état excellent, batterie 94% — 850€ ». Ce titre inclut la marque, le modèle, l'année, le processeur, l'état, un indicateur de qualité de batterie, et le prix — toutes les informations qui permettent à l'algorithme de recherche de présenter l'annonce dans les résultats pertinents.

La description doit compléter le titre avec des détails supplémentaires. Pour l'électronique, mentionner les spécifications techniques complètes (RAM, stockage, résolution d'écran), les logiciels installés ou le système d'exploitation, les accessoires inclus, et les éventuelles réparations passées est indispensable. Pour le mobilier, les dimensions exactes sont prioritaires — la majorité des refus d'achat de mobilier sont dus à des tables ou armoires qui ne passent pas dans l'espace prévu. Inclure les dimensions dans la description et dans les photos (avec un objet de référence comme une règle) réduit considérablement ces malentendus.
`;

const EXT1_L5 = `
## Les plateformes collaboratives et le prêt d'objets entre particuliers

Au-delà de l'achat et de la vente d'occasion, des plateformes de prêt et de location entre particuliers permettent d'accéder à des objets volumineux ponctuellement sans les acheter. Zilok et OuiPrêt permettent de louer entre particuliers des objets comme des voitures, du matériel de jardinage, des outils de bricolage, ou du matériel de transport. Pour quelqu'un qui a besoin d'un véhicule utilitaire une seule fois par an pour un déménagement, la location entre particuliers est moins coûteuse que la location classique.

Les Repair Cafés, présents dans de nombreuses villes françaises, sont des lieux où des bénévoles compétents aident à réparer des objets défectueux gratuitement ou pour une somme modique. Apporter un appareil électronique ou électroménager défectueux à un Repair Café peut permettre de le remettre en état pour quelques euros au lieu d'en acheter un nouveau ou un autre d'occasion. L'application RepaireMap recense les Repair Cafés en France par ville et par date de session.

## Les applications de scan du code-barres pour évaluer la valeur d'un article

Les applications mobiles qui scannent les codes-barres des produits pour afficher leur prix actuel sur les principales plateformes d'occasion sont des outils pratiques pour les acheteurs réguliers. Des applications comme Foxbright (disponible sur iOS et Android) permettent de scanner le code-barres d'un livre, d'un jeu vidéo ou d'un disque pour voir immédiatement sa valeur sur Momox, Amazon, et d'autres revendeurs. Ce type d'outil est utile aussi bien pour acheter — vérifier si le prix demandé par un vendeur est raisonnable — que pour vendre — évaluer rapidement la valeur de ses propres articles.

Pour les marchés aux puces et les vide-greniers, cette capacité d'évaluation instantanée peut transformer une visite en chasse au trésor méthodique. Un acheteur équipé d'une application de scan et d'un accès internet mobile peut évaluer des dizaines d'articles en quelques minutes et identifier rapidement ceux qui sont sous-évalués par les vendeurs. Les vendeurs de marchés aux puces sont rarement des experts dans toutes les catégories de produits qu'ils vendent — un livre rare, un jeu vidéo vintage, ou un disque vinyle de collection peut être proposé à quelques euros alors qu'il vaut cent fois plus.

## La logistique de la récupération d'un article volumineux sans voiture

Pour les personnes sans voiture, la récupération d'articles volumineux d'occasion peut sembler un obstacle insurmontable. Cependant, plusieurs solutions permettent de contourner ce problème. La première est de chercher spécifiquement des vendeurs qui acceptent de livrer — certains vendeurs, surtout pour les articles encombrants dont ils souhaitent se débarrasser rapidement, acceptent de livrer quelques kilomètres autour de leur domicile, parfois gratuitement ou pour un prix modique.

La deuxième solution est de faire appel à quelqu'un disposant d'un véhicule en échange d'un service rendu — un ami ou un camarade de classe qui possède une voiture ou un accès à Getaround (location de voiture entre particuliers) peut être disponible contre une participation aux frais d'essence ou un service en retour. La troisième solution est de demander explicitement dans l'annonce ou aux vendeurs qui vous intéressent si l'article peut être expédié — certains meubles démontés rentrent dans des cartons et peuvent être envoyés par Chronopost ou Colissimo même s'ils sont encombrants une fois assemblés.
`;

const EXT1_L6 = `
## Le bilan carbone de l'achat d'occasion

La dimension environnementale de l'achat d'occasion est de plus en plus mise en avant dans les communications des plateformes et dans la conscience des consommateurs. L'ADEME (Agence de la transition écologique) publie régulièrement des études sur le bilan carbone comparatif de l'achat neuf versus l'achat d'occasion pour différentes catégories de produits. Pour un smartphone reconditionné, par exemple, l'empreinte carbone est 79% inférieure à celle d'un smartphone neuf équivalent — un gain environnemental considérable qui s'ajoute au gain financier.

Pour un étudiant qui souhaite adopter un mode de vie à la fois économique et respectueux de l'environnement, l'achat d'occasion est l'un des changements les plus impactants à portée de main. Chaque smartphone reconditionné acheté plutôt que neuf évite l'extraction d'environ 70kg de matières premières et la consommation d'environ 230 litres d'eau. Ces chiffres, bien que difficiles à visualiser dans la vie quotidienne, représentent un impact réel sur les ressources naturelles mondiales.

## Les gadgets et les appareils qui ne valent pas la peine en occasion

Tous les articles ne sont pas de bons candidats à l'achat d'occasion. Les articles dont la technologie évolue très rapidement (comme les routeurs Wi-Fi, les décodeurs internet) peuvent être dépassés au moment de leur achat d'occasion et ne pas être compatibles avec les derniers standards. Les articles dont la durée de vie est intrinsèquement limitée (batteries de grandes capacités, ampoules à durée de vie définie) peuvent avoir une durée de vie restante très courte à l'achat d'occasion, rendant l'économie illusoire.

Les casques et écouteurs d'occasion méritent une attention particulière en termes d'hygiène — les coussinets en contact avec les oreilles sont des supports qui retiennent les bactéries et les acariens. Si l'achat d'écouteurs d'occasion est envisagé, la décontamination des coussinets (remplacement si possible, nettoyage à l'alcool isopropylique sinon) est une étape d'hygiène essentielle. Les mousse memory foam des casques se dégradent avec le temps et peuvent ne plus offrir le confort et l'isolation sonore d'un article neuf.

## Construire une stratégie d'achat sur le long terme

L'optimisation de son budget équipement n'est pas un sprint mais un marathon. Construire une liste évolutive de ses besoins matériels et la mettre en parallèle avec une veille permanente sur les plateformes d'occasion transforme l'approvisionnement en équipement d'une dépense ponctuelle stressante en un processus continu et maîtrisé. Les alertes email sur Leboncoin pour les articles recherchés, les recherches sauvegardées sur Vinted, et les alertes de prix sur les plateformes de reconditionnement permettent d'être averti immédiatement quand l'article recherché apparaît au prix souhaité.

Ce système de veille active, une fois mis en place, réduit considérablement les décisions d'achat impulsives et améliore la qualité des achats. En n'achetant que quand les conditions sont réunies — bon article, bon état, bon prix, bon vendeur — on réalise des économies significativement supérieures à celles d'un acheteur qui cherche au dernier moment et prend ce qui est disponible. La patience est la vertu cardinale de l'acheteur d'occasion stratégique.
`;

await appendAndPatch('54543fac-19ea-4f70-aa33-3db6ab648f5f', EXT1_L1);
await appendAndPatch('87ee9dc9-5623-4cae-b27a-50eebf71c785', EXT1_L2);
await appendAndPatch('08df7fd6-e4ff-42a9-9944-dc3aa944f4ee', EXT1_L3);
await appendAndPatch('f7eecf9c-2dac-4100-8215-dfb0483766d7', EXT1_L4);
await appendAndPatch('779e325f-9b54-4647-a25d-3e5e3f1f9303', EXT1_L5);
await appendAndPatch('ce39fca3-8b41-4daa-aaec-457a8683d2ab', EXT1_L6);
