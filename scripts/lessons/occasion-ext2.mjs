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
## La durée de vie réelle des appareils reconditionnés

Une question légitime que se posent les acheteurs d'électronique reconditionnée est la durée de vie réelle de ces appareils par rapport à un achat neuf. Les études menées par des organismes indépendants tendent à montrer que les appareils reconditionnés par des professionnels certifiés ont une durée de vie comparable à celle d'appareils neufs, à condition que les composants usés (notamment la batterie) aient été remplacés lors du reconditionnement. Un smartphone dont la batterie a été changée par un professionnel peut avoir autant d'autonomie qu'un modèle neuf.

Les appareils achetés entre particuliers sans reconditionnement professionnel ont une durée de vie moins prévisible, car leur historique d'utilisation est inconnu et les composants dégradés n'ont pas été remplacés. La batterie d'un smartphone se dégrade de 20 à 30% sur trois ans d'utilisation normale — un smartphone de trois ans acheté d'occasion avec sa batterie d'origine aura donc une autonomie significativement réduite par rapport à un modèle neuf. Cette information, si elle est déclarée par le vendeur, justifie une remise proportionnelle sur le prix.

## Le marché des accessoires d'occasion pour compléter ses appareils

L'achat d'accessoires d'occasion est souvent moins risqué que l'achat de l'appareil principal, car les accessoires ont généralement moins de composants complexes et de points de défaillance. Les câbles de charge, les coques de protection, les supports et les chargeurs d'occasion fonctionnent en général aussi bien que leurs équivalents neufs, à condition de vérifier qu'ils ne sont pas endommagés physiquement. La seule exception concerne les chargeurs et câbles de marques inconnues — les accessoires de chargement non certifiés peuvent dans de rares cas endommager la batterie ou créer des risques électriques.

Vinted est une source excellent pour les coques de smartphone d'occasion — ces accessoires, souvent achetés par curiosité et rapidement oubliés, se retrouvent en abondance sur la plateforme à des prix très bas. Pour les appareils photo reflex, le marché des objectifs d'occasion est très développé, avec des objectifs de qualité professionnelle disponibles à des fractions de leur prix neuf sur les sites spécialisés comme MPB ou Phox Occasion. Un objectif bien conservé peut durer des décennies et ne se déprécie que légèrement avec les ans.

## Les pièces détachées et l'auto-réparation des appareils électroniques

La culture de la réparation des appareils électroniques, encouragée par la loi française sur l'indice de réparabilité (obligatoire depuis 2021), ouvre de nouvelles possibilités pour les acheteurs qui souhaitent maintenir leurs appareils en bon état à moindre coût. Des sites comme iFixit publient des guides de réparation gratuits et détaillés pour des milliers de modèles d'appareils électroniques, accompagnés des outils spécialisés nécessaires. La réparation d'un écran de smartphone cassé, la remplacement d'une batterie ou le nettoyage d'une prise de charge bouchée sont des opérations accessibles à un bricoleur patient.

Les pièces détachées pour les modèles populaires sont disponibles sur des sites comme AliExpress (en acceptant des délais de livraison plus longs), Amazon (pour les pièces les plus courantes), ou les sites spécialisés comme Mobile Senteret ou Just Réparation. Le coût total d'une réparation DIY (pièce + outil si nécessaire) est généralement bien inférieur au coût d'une réparation en boutique, et cette compétence, une fois acquise, peut être réutilisée pour de futurs appareils.
`;

const EXT2_L2 = `
## Les conseils pour sécuriser ses transactions sur Leboncoin

La sécurité des transactions sur Leboncoin a été l'objet de nombreuses améliorations de la plateforme ces dernières années, notamment avec le développement du paiement sécurisé intégré. Le Paiement Sécurisé Leboncoin (disponible pour de nombreuses catégories de produits) fonctionne comme un service d'escrow — l'argent est conservé par la plateforme jusqu'à confirmation de la réception de l'article par l'acheteur. Ce système protège les deux parties : le vendeur est assuré d'être payé, l'acheteur est protégé contre les non-livraisons ou les articles non conformes.

Pour les transactions en espèces lors des remises en main propre, quelques précautions supplémentaires sont recommandées. Vérifier les billets reçus avec un stylo détecteur de faux billets (disponible pour quelques euros) ou sous lumière UV est une précaution simple pour les transactions importantes. Les banques et certains commerces mettent parfois à disposition ce type d'équipement. Pour des transactions de plusieurs centaines d'euros, la remise en main propre dans une agence bancaire, où les billets peuvent être vérifiés par les équipements de la banque, est une option sûre.

## Les tendances du marché de l'occasion en France

Le marché de l'occasion en France connaît une croissance soutenue depuis plusieurs années, avec des volumes en hausse régulière sur toutes les grandes plateformes. Cette croissance est portée par des facteurs structurels : la prise de conscience environnementale des consommateurs, la hausse du coût de la vie qui pousse à optimiser ses dépenses, et l'amélioration de l'offre et de la confiance dans les plateformes d'occasion. Le marché de la mode d'occasion, en particulier, a connu une explosion, avec Vinted devenant l'une des applications les plus téléchargées en France.

Cette dynamique favorable crée à la fois des opportunités et des défis pour les acheteurs. D'un côté, l'offre sur les plateformes n'a jamais été aussi importante et diversifiée. De l'autre, la demande accrue tire les prix vers le haut dans certaines catégories, notamment pour les articles de marque et l'électronique récente. Connaître les tendances du marché — savoir que les prix des smartphones reconditionnés baissent après la sortie d'un nouveau modèle, par exemple — permet d'optimiser le moment de ses achats.

## Les applications iOS et Android pour faciliter les transactions d'occasion

Les applications mobiles officielles de Leboncoin, Vinted, et Facebook Marketplace offrent des fonctionnalités spécifiques qui améliorent l'expérience par rapport à la navigation web sur mobile. Les notifications push permettent d'être alerté immédiatement quand une nouvelle annonce corresponded à ses alertes configurées — un avantage décisif pour les articles très demandés qui partent en quelques heures. Leboncoin app permet de gérer ses annonces, répondre aux messages, et suivre ses transactions depuis le smartphone.

Vinted a développé son application mobile de façon particulièrement soignée, avec des fonctionnalités de recherche par traitement d'image (prendre une photo d'un vêtement pour trouver des articles similaires), des recommandations personnalisées basées sur les préférences et les achats passés, et une interface de messagerie intégrée permettant de négocier directement dans l'app. Pour les vendeurs réguliers sur Vinted, l'application est indispensable pour gérer les commandes, préparer les étiquettes d'expédition, et suivre les livraisons.

## Les bonnes pratiques pour les étudiants étrangers qui achètent d'occasion à leur arrivée en France

Pour un étudiant international qui arrive en France avec un budget limité et doit s'équiper rapidement, l'achat d'occasion est une nécessité économique. Quelques stratégies pratiques permettent de s'en sortir dans les meilleures conditions même sans connaissance préalable du marché local. Chercher d'abord les associations étudiantes de son université — beaucoup organisent des ventes de fournitures et de mobilier en début d'année académique pour les nouveaux arrivants, avec des prix très accessibles et une logistique simplifiée.

Se connecter avec les étudiants de même origine ou de même filière qui ont passé les années précédentes en France est une source de bons plans — ils connaissent les meilleures ressources locales d'occasion et peuvent parfois vendre ou céder leurs propres équipements lors de leur départ. Les associations d'entraide étudiante (ESN — Erasmus Student Network, associations de l'université) organisent souvent des événements de troc où les équipements passent directement d'étudiants sortants à des étudiants entrants.
`;

const EXT2_L3 = `
## Les pratiques de négociation par culture et leurs nuances en France

La culture française de la négociation dans les marchés d'occasion présente des nuances importantes par rapport aux pratiques de nombreux pays d'où viennent les étudiants étrangers. Dans certaines cultures, la négociation est un rituel formel avec des va-et-vient attendus des deux côtés — une première offre très basse suivie d'une montée progressive vers un accord au milieu. Cette pratique, courante dans certains pays d'Asie du Sud-Est, d'Afrique ou du Moyen-Orient, peut être perçue comme agressive ou irrespectueuse dans le contexte français de l'occasion.

Un acheteur étranger qui propose 50% du prix d'un article bien évalué peut se voir opposer un refus catégorique non seulement pour cet achat, mais pour tout éventuel contact futur avec ce vendeur. En France, la valeur de la politesse dans les échanges commerciaux informels est réelle — une approche respectueuse et bien formulée est souvent plus efficace qu'une tactique de négociation agressive, même si le résultat financier final est moins extrême que ce qui serait possible dans d'autres contextes culturels.

## Les droits du consommateur dans les achats de particulier à particulier

Le cadre juridique des droits du consommateur dans les achats de particulier à particulier en France est plus limité que dans les achats chez un professionnel, mais il n'est pas inexistant. La garantie des vices cachés (Article 1641 du Code civil) s'applique à toutes les ventes, y compris entre particuliers — elle protège l'acheteur contre les défauts non apparents qui existaient avant la vente et qui rendent le bien impropre à l'usage. Cette protection est indépendante des clauses contractuelles — même un vendeur qui a mentionné « vendu sans garantie » reste responsable si un vice caché préexistant est découvert.

La distinction entre un vice caché et un risque accepté est importante. Si le vendeur a déclaré que la batterie du téléphone était à 78% de capacité, et que cette batterie continue de se dégrader normalement après l'achat, ce n'est pas un vice caché — l'acheteur était informé. En revanche, si le vendeur a dissimulé que le téléphone avait des problèmes de carte mère qui se manifestent uniquement sous certaines conditions d'utilisation, c'est un vice caché qui engage sa responsabilité. Rassembler les preuves d'une telle dissimulation — messages, photos, témoignages — est la première étape en cas de litige.

## Les délais de prescription et les voies de recours

Pour un achat d'occasion qui tourne mal, connaître les délais de prescription et les voies de recours disponibles est essentiel. L'action en garantie des vices cachés doit être intentée dans un délai de deux ans à compter de la découverte du vice — et non de l'achat. Ce délai long est favorable à l'acheteur, car les vices cachés se manifestent parfois plusieurs mois après l'achat. La première démarche est toujours la tentative de résolution amiable directe avec le vendeur — un contact documenté (message écrit) qui expose le problème et demande une solution.

Si la tentative amiable échoue, plusieurs voies s'offrent à l'acheteur. Pour les montants inférieurs à 5000 euros, le tribunal de proximité (ex-tribunal d'instance) est compétent, avec une procédure simplifiée. Pour les petits montants (inférieurs à 5000 euros), la saisine peut même se faire en ligne via le portail Service-Public.fr. Des associations de consommateurs comme UFC-Que Choisir et CLCV proposent une aide juridique à leurs adhérents pour préparer ce type de recours, avec souvent une première consultation gratuite.

## L'assurance des articles d'occasion

Assurer un article acheté d'occasion contre le vol, la casse accidentelle ou les dommages est une option que beaucoup d'acheteurs d'occasion ne considèrent pas, mais qui peut s'avérer précieuse pour les achats importants. Les assurances multirisques habitation couvrent souvent les appareils électroniques contre le vol (à domicile), mais rarement contre la casse accidentelle ou le vol en dehors du domicile. Des assurances spécifiques pour les smartphones et les ordinateurs portables existent et couvrent la casse accidentelle, le vol, et parfois la panne.

Des services comme Back-up by FNAC, Assurance Mobile chez Orange, ou des assureurs spécialisés comme Luko ou Lovys proposent des assurances pour appareils électroniques avec des tarifs mensuels accessibles (3 à 10 euros par mois selon l'appareil et le niveau de couverture). Pour un étudiant qui utilise intensivement son smartphone ou son ordinateur pour ses études, l'assurance casse et vol peut s'avérer un investissement judicieux — la perte ou la casse d'un appareil important peut compromettre sérieusement le travail académique.
`;

const EXT2_L4 = `
## Les plateformes de vente spécialisées par niche

Au-delà des grandes plateformes généralistes, des marchés d'occasion de niche permettent d'atteindre des acheteurs spécifiques prêts à payer des prix optimaux pour des articles corresponded à leur passion. Discogs est la référence mondiale pour la vente de disques vinyle et CD d'occasion — les collectionneurs de musique utilisent quasi-exclusivement cette plateforme pour leurs achats et ventes. Decluttr est spécialisé dans les livres, les jeux vidéo, et les films — avec un système de prix fixes qui simplifie la vente.

Pour les vêtements de luxe et de créateurs, les plateformes comme Vestiaire Collective, Vide Dressing ou The Real Real permettent d'atteindre des acheteurs de mode de second luxe qui paient des prix nettement supérieurs à ceux de Vinted pour des pièces de qualité authentifiée. Si vous possédez des pièces de marques comme Louis Vuitton, Chanel, ou des créateurs contemporains prisés, ces plateformes spécialisées peuvent générer des revenus nettement supérieurs à Vinted, bien que les processus d'authentification et les commissions soient plus stricts.

## La fiscalité des revenus de vente d'occasion : le détail pratique

Le régime fiscal des revenus de vente d'occasion en France a connu des clarifications importantes ces dernières années, notamment avec l'obligation pour les plateformes de déclarer les transactions significatives à l'administration fiscale. Depuis 2023, les plateformes numériques de mise en relation entre acheteurs et vendeurs (Vinted, Leboncoin, Airbnb, etc.) doivent transmettre à la Direction Générale des Finances Publiques un récapitulatif des transactions de chaque vendeur qui dépasse certains seuils.

Un vendeur sur Vinted qui réalise plus de 250 ventes dans l'année ou génère plus de 3000 euros de revenus annuels verra ses données transmises automatiquement à l'administration fiscale. Pour autant, cela ne signifie pas nécessairement que ces revenus sont imposables — la cession de biens personnels usagés à un prix inférieur à leur valeur d'achat reste en principe non imposable. La distinction entre la vente de ses affaires personnelles usagées (non imposable) et l'activité lucrative de revente (imposable en tant que bénéfices commerciaux) est la ligne que l'administration utilise pour qualifier les revenus.

## Construire un système de gestion des ventes en paralèle avec ses études

Gérer activement plusieurs ventes simultanées sur différentes plateformes tout en étant étudiant nécessite une organisation minimale pour éviter les oublis et les confusions. Un système simple — un tableur ou une application de liste de tâches — peut suffire pour suivre les articles mis en vente, les prix demandés, les messages reçus, et les transactions en cours. Cette organisation est particulièrement importante pour les vendeurs actifs sur plusieurs plateformes (Leboncoin, Vinted, Facebook Marketplace) simultanément, où les mêmes articles peuvent être proposés sur plusieurs sites.

La gestion du stock d'articles à vendre — s'assurer de ne pas vendre le même article à plusieurs personnes simultanément — est le principal défi logistique de la multi-plateforme. Dès qu'un article est vendu sur une plateforme, le retirer ou marquer comme vendu sur toutes les autres plateformes où il était proposé est une étape immédiate. Des outils comme Selency (pour le mobilier) ou les applications intégrées de gestion de stock permettent de synchroniser les annonces sur plusieurs plateformes, mais ces outils sont généralement réservés aux vendeurs professionnels.

## Les tendances saisonnières pour optimiser ses ventes

Comprendre les tendances saisonnières du marché de l'occasion permet d'optimiser le moment des ventes pour maximiser les prix. Les vêtements d'hiver se vendent bien en septembre-octobre, les vêtements d'été en mars-avril. Les articles de Noël (décorations, jouets) se vendent bien dès novembre. Les manuels universitaires se vendent mieux en août-septembre juste avant la rentrée.

À l'inverse, janvier est généralement un mois creux pour les ventes d'occasion — les gens ont dépensé pour les fêtes et sont prudents avec leurs achats. Les grandes périodes de déménagement (juin-juillet pour les étudiants, août pour les familles) génèrent une grande offre qui peut faire baisser les prix de certaines catégories (meubles, électroménager). Vendre ses propres articles avant ces périodes de forte offre permet d'obtenir de meilleurs prix, même si la demande peut être légèrement plus faible.
`;

const EXT2_L5 = `
## Les services de stockage temporaire pour faciliter les transactions

Pour les transactions d'occasion impliquant des articles volumineux et nécessitant une coordination logistique complexe (le vendeur est dans une autre ville, l'acheteur n'a pas de véhicule immédiatement disponible), les services de stockage temporaire peuvent servir de point intermédiaire. Des services comme Stasher (côte-à-côte avec des commerces qui louent leur espace de stockage) ou les casiers personnels dans les gares (Consigne automatique SNCF) permettent à un acheteur de déposer un article pour qu'un vendeur le récupère plus tard, ou vice versa.

Ces solutions sont certes moins courantes dans les transactions d'occasion courantes, mais elles existent pour les cas particuliers. Une solution plus simple pour les articles de taille moyenne — un ordinateur portable, une petite caisse d'objets — est le dépôt chez un commerçant de confiance qui accepte de servir de point relais informel entre les deux parties. Cette pratique est plus rare mais pas inexistante dans les communautés locales.

## La cotisation aux mutuelles d'entraide pour le transport

Dans certaines villes universitaires françaises, des coopératives étudiantes ou des associations d'entraide proposent l'accès à des utilitaires partagés pour les déménagements et les transports ponctuels. Ces structures, calquées sur le modèle des Amap (associations pour le maintien de l'agriculture paysanne) mais adaptées aux besoins logistiques, permettent à leurs membres d'accéder à un utilitaire ou à des ressources de transport pour un coût très réduit en échange d'une cotisation annuelle. Se renseigner auprès du CROUS ou du bureau de la vie étudiante de son université sur l'existence de tels services peut révéler des ressources précieuses et méconnues.

La pratique du covoiturage pour le transport d'objets — souvent appelée « uniswap » dans les milieux étudiants — est une variante plus informelle de ces systèmes. Des groupes de messagerie où les étudiants coordonnent des déplacements en voiture pour échanger ou transporter des articles permettent de s'ajuster aux besoins logistiques sans coût. Ces réseaux informels fonctionnent sur la base de la réciprocité — aider quelqu'un à transporter ses affaires aujourd'hui crée implicitement une demande de service similaire futur.

## Les emballages récupérés pour l'expédition à moindre coût

L'expédition de petits articles d'occasion peut générer des coûts d'emballage non négligeables si on achète des boîtes et des matériaux de protection à plein tarif. Des solutions plus économiques existent. Les grandes surfaces et les supermarchés disposent généralement de cartons d'emballage récupérables gratuitement le matin ou en fin de journée — il suffit de demander au responsable de la mise en rayon. Les librairies et les maisons d'édition ont souvent des caisses robustes adaptées aux expéditions.

Les boulettes de papier journal sont un excellent matériau de rembourrage gratuit pour les articles fragiles. Les boîtes à chaussures récupérées peuvent servir d'emballages pour les articles de taille appropriée. Des sites comme FreeCycle ou des groupes Facebook locaux d'objets gratuits proposent régulièrement des matériaux d'emballage récupérés que leurs propriétaires n'utilisent plus. Cette recherche d'emballages gratuits ou quasi-gratuits peut réduire les coûts d'expédition de 20 à 50% par rapport à l'achat de matériaux neufs.

## Les assurances des transporteurs et leur activation efficace

Quand un colis envoyé par Mondial Relay, Colissimo ou un autre transporteur arrive endommagé, activer l'assurance pour obtenir un remboursement nécessite une procédure précise et des délais stricts. La première étape est d'inspecter visuellement le colis à la réception en présence du livreur et de noter tout dommage externe visible sur le bon de livraison avant de signer. Si le colis est remis dans un point relais, l'inspection doit être effectuée immédiatement à l'ouverture dans le point relais — en général dans les 48 heures suivant la réception.

La déclaration de sinistre auprès du transporteur doit généralement être effectuée dans les 48 à 72 heures suivant la livraison pour les dommages visibles, et dans un délai variable (7 à 14 jours) pour les dommages qui n'étaient pas apparents à la livraison. Conserver l'emballage original endommagé est indispensable — les transporteurs peuvent demander à l'inspecter pour valider la réclamation. Les photos prises immédiatement à l'ouverture (émballage, contenu, dommages) sont la preuve la plus efficace pour appuyer la réclamation.
`;

const EXT2_L6 = `
## L'économie circulaire et le rôle des plateformes d'occasion

L'économie circulaire — modèle économique qui vise à prolonger la durée de vie des produits en les maintenant en usage plutôt que de les jeter — est un concept qui se traduit concrètement dans la vie quotidienne par l'achat et la vente d'occasion. Les plateformes comme Vinted, Leboncoin et Backmarket sont des acteurs majeurs de cette économie circulaire en France, en créant les marchés de liquidité qui permettent aux objets de passer d'un propriétaire à l'autre efficacement. La croissance de ces plateformes traduit une prise de conscience croissante des consommateurs sur la durabilité de leurs choix.

Les initiatives gouvernementales françaises soutiennent cette évolution. Le malus sur les achats de certains produits électroniques neufs (contribution sur la réparabilité), les fonds de soutien à la réparation (bonus réparation de 25 euros pour les téléphones réparés par un réparateur labellisé QualiRépar), et l'obligation d'étiquetage de l'indice de réparabilité visent à niveler la concurrence entre le neuf et l'occasion ou la réparation. Ces politiques publiques créent des incitations qui renforcent l'attractivité économique de l'achat d'occasion par rapport à l'achat neuf.

## Les magasins physiques d'occasion en France

Malgré la croissance des plateformes en ligne, les magasins physiques d'occasion restent une ressource importante dans de nombreuses villes françaises. Emmaus, réseau de récupération et de solidarité présent dans toute la France, possède des boutiques qui proposent des articles de toutes catégories à des prix très compétitifs. Les supérettes solidaires du Secours Populaire et les brocantes des Restos du Cœur proposent également des articles d'occasion accessibles aux personnes aux revenus modestes.

Les Cash Converters et les Troc de l'île sont des chaînes nationales de dépôt-vente qui proposent à la fois l'achat et la vente d'articles d'occasion dans des magasins physiques. Ces enseignes offrent la praticité d'un espace physique où l'on peut inspecter et tester les articles avant l'achat, avec une procédure simplifiée par rapport aux transactions entre particuliers. Les prix y sont généralement légèrement supérieurs à ceux des transactions directes entre particuliers, mais la tranquillité d'esprit de la traçabilité et du passage en boutique a une valeur pour beaucoup d'acheteurs.

## Planifier son budget d'installation sur plusieurs mois

L'installation dans un nouveau logement en France génère généralement une série de dépenses concentrées dans un court laps de temps — un « pic de dépenses » qui peut mettre sous pression un budget étudiant limité. Planifier ces dépenses sur plusieurs mois en les étalant intelligemment permet d'éviter ce pic et de réaliser des économies plus importantes grâce à la patience. Un plan d'achat sur trois à six mois — avec un ordre de priorité clair et des budgets cibles par article — transforme une période stressante en processus maîtrisé.

Les applications de gestion budgétaire comme Linxo, Budget Insight, ou tout simplement un tableau sur Google Sheets permettent de suivre ses dépenses d'équipement en temps réel et de comparer les dépenses réelles aux budgets prévus. Voir concrètement les économies réalisées par rapport à l'achat neuf équivalent — en notant le prix payé d'occasion versus le prix neuf comparable — est un feedback positif qui renforce la motivation à continuer cette stratégie d'achat responsable.

## Les ressources additionnelles pour s'informer sur les bonnes pratiques

Pour approfondir ses connaissances sur les achats d'occasion en France, plusieurs ressources en ligne et physiques sont complémentaires. La chaine YouTube « Faaast Smartphones » propose des tests et des comparaisons de smartphones reconditionnés. Le blog « Frugaliste.fr » documente une approche de vie frugale en France avec des conseils d'achat d'occasion appliqués. Les associations de consommateurs comme UFC-Que Choisir publient régulièrement des guides pratiques sur les achats d'occasion et sur les droits des consommateurs dans ce domaine.

Les podcasts en français sur les finances personnelles, comme « Epargnant 3.0 » ou « La Martingale », traitent occasionnellement des stratégies d'achat d'occasion dans le cadre de la gestion budgétaire globale. Ces ressources, complémentaires au contenu de ce cours, permettent d'approfondir les sujets les plus pertinents selon sa situation personnelle et de rester informé des évolutions du marché et de la réglementation.
`;

await appendAndPatch('54543fac-19ea-4f70-aa33-3db6ab648f5f', EXT2_L1);
await appendAndPatch('87ee9dc9-5623-4cae-b27a-50eebf71c785', EXT2_L2);
await appendAndPatch('08df7fd6-e4ff-42a9-9944-dc3aa944f4ee', EXT2_L3);
await appendAndPatch('f7eecf9c-2dac-4100-8215-dfb0483766d7', EXT2_L4);
await appendAndPatch('779e325f-9b54-4647-a25d-3e5e3f1f9303', EXT2_L5);
await appendAndPatch('ce39fca3-8b41-4daa-aaec-457a8683d2ab', EXT2_L6);
