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

const BLOCK = `
## Les pratiques responsables dans l'économie de l'occasion

Participer à l'économie de l'occasion implique des responsabilités envers les autres participants du marché. La transparence totale sur l'état des articles vendus — mentionner les défauts même mineurs, donner des informations honnêtes sur l'historique de l'article, ne pas gonfler artificiellement les qualités — est la base d'un marché sain. Les vendeurs qui mentent sur l'état de leurs articles détruisent la confiance dans l'ensemble du marché et finissent par nuire à tous, y compris aux vendeurs honnêtes dont les acheteurs potentiels sont devenus méfiants après de mauvaises expériences.

La ponctualité et la fiabilité dans les rendez-vous de remise en main propre sont également des dimensions importantes de la conduite responsable dans l'économie de l'occasion. Annuler un rendez-vous au dernier moment sans prévenir, laisser quelqu'un voyager pour rien, ou changer les conditions convenues au dernier moment sont des comportements qui génèrent de la frustration et du gaspillage de temps. Un acheteur ou un vendeur fiable, respectueux des engagements pris, construit une réputation positive qui se traduit concrètement par de meilleures évaluations et des transactions plus faciles à l'avenir.

## La gestion de sa réputation sur les plateformes d'occasion

Sur les plateformes qui proposent des systèmes d'évaluation bidirectionnels (Vinted, Paiement Sécurisé Leboncoin), la réputation construite au fil des transactions est un actif précieux. Un profil avec de nombreuses évaluations positives bénéficie d'une confiance implicite de la part des nouveaux partenaires commerciaux, et peut parfois justifier des prix légèrement plus élevés pour les articles vendus ou faciliter la conclusion d'achats pour les articles convoités. À l'inverse, des évaluations négatives — même peu nombreuses par rapport aux positives — peuvent déclencher la méfiance chez les acheteurs attentifs.

Laisser une évaluation honnête après chaque transaction est une contribution à l'hygiène du marché — elle aide les futurs participants à se faire une idée réaliste du vendeur ou de l'acheteur. Un vendeur qui a expédié rapidement, emballé soigneusement et décrit fidèlement son article mérite une évaluation positive qui le récompense de son sérieux. Un vendeur qui a livré un article en état différent de celui décrit mérite une évaluation précise qui prévient les futurs acheteurs. Ces évaluations honnêtes, positives comme négatives, sont la mécanique qui maintient la confiance dans l'ensemble du système des places de marché de l'occasion.
`;

// L1: 3127 → need +873
await appendAndPatch('54543fac-19ea-4f70-aa33-3db6ab648f5f', BLOCK + `
## Les opportunités de l'obsolescence programmée contournée

L'achat d'occasion et d'appareils reconditionnés est l'une des réponses les plus efficaces au phénomène de l'obsolescence programmée — la pratique consistant à réduire délibérément la durée de vie d'un produit pour stimuler le remplacement. En prolongeant la durée de vie utile des appareils électroniques via le reconditionnement, les acheteurs d'occasion contournent économiquement cette stratégie industrielle. Un smartphone de cinq ans qui fonctionne parfaitement pour ses usages actuels n'a pas besoin d'être remplacé même si le fabricant ne le supporte plus logiciellement — il peut continuer à servir ses fonctions essentielles pour de nombreuses années supplémentaires.

La loi française sur l'indice de réparabilité, obligatoire depuis 2021, force les fabricants à être transparents sur la facilité de réparation de leurs produits. Cet indice, affiché sur les produits neufs, guide également le marché de l'occasion en identifiant les appareils dont la réparation est plus facile et plus économique. Un appareil avec un bon indice de réparabilité sera un meilleur achat d'occasion qu'un concurrent techniquement similaire mais dont la réparation nécessite des outils spéciaux ou des pièces introuvables.
`);

// L2: 3175 → need +825
await appendAndPatch('87ee9dc9-5623-4cae-b27a-50eebf71c785', BLOCK + `
## L'achat d'occasion comme outil d'intégration sociale

Pour les étrangers qui s'installent en France, les marchés d'occasion et les vide-greniers locaux sont des espaces de socialisation et d'intégration auxquels on ne pense pas spontanément. Ces événements de quartier rassemblent des résidents locaux dans un contexte détendu et convivial, créant des opportunités d'échanges informels qui peuvent déboucher sur des connaissances, des amitiés, ou des informations utiles sur le quartier et la ville. Un vide-grenier de quartier, à Paris comme à Lyon ou Bordeaux, est souvent un microcosme social de la vie locale qui révèle beaucoup sur la culture et les pratiques de la communauté.

Les ressourceries et les brocantes solidaires (Emmaüs, boutiques du Secours Populaire) sont également des espaces d'intégration pour des personnes en situation de précarité ou d'isolement. Ces structures emploient souvent des personnes en insertion professionnelle et créent des espaces d'échange qui permettent aux personnes fragilisées de reconstruire des liens sociaux tout en accédant à des articles de première nécessité à prix très accessibles. Pour un étudiant étranger qui cherche à comprendre les solidarités locales françaises au-delà des grandes institutions, ces structures associatives sont une entrée privilégiée dans le tissu social local.
`);

// L3: 3350 → need +650
await appendAndPatch('08df7fd6-e4ff-42a9-9944-dc3aa944f4ee', BLOCK + `
## L'évolution des contrats de vente dans l'ère numérique

La dématérialisation progressive des échanges commerciaux a également transformé la façon dont les accords sont documentés dans les transactions d'occasion. Les messages échangés via les plateformes (Leboncoin, Vinted) constituent désormais une forme de traçabilité de l'accord qui peut être opposée aux deux parties en cas de litige. Un acheteur qui a posé une question écrite sur l'état d'un composant ("est-ce que la batterie tient bien la charge ?") et reçu une réponse affirmative du vendeur dispose d'une preuve écrite qui renforce sa position si la batterie s'avère défectueuse.

Cette évolution vers les preuves numériques simplifie paradoxalement la protection des acheteurs, qui n'ont plus besoin d'un bon de cession papier pour documenter les engagements du vendeur — les messages de la plateforme remplissent cette fonction. La bonne pratique est de s'assurer que toutes les questions importantes sur l'état de l'article sont posées et répondues par messages écrits sur la plateforme ou par SMS, et non uniquement à l'oral lors de la rencontre. Ce réflexe minimal de documentation numérique est l'adaptation naturelle des pratiques d'achat sécurisé à l'ère des transactions dématérialisées.
`);

// L4: 3281 → need +719
await appendAndPatch('f7eecf9c-2dac-4100-8215-dfb0483766d7', BLOCK + `
## Les tendances émergentes dans la vente d'occasion en ligne

Le secteur de la vente d'occasion en ligne continue d'évoluer rapidement avec l'émergence de nouveaux formats et de nouvelles modalités. Les ventes flash d'occasion — où des articles sont mis en vente pendant une durée limitée (quelques heures) avec un compte à rebours visible — créent une urgence artificielle qui peut inciter à des décisions d'achat rapides mais peut aussi générer de bons prix pour les vendeurs sur des articles très demandés. Certaines applications comme Depop (populaire pour la mode et les articles vintage) utilisent ces mécaniques pour créer de l'engagement et des transactions rapides.

Les modèles hybrides occasion/abonnement se développent également — des services qui permettent de louer des articles d'occasion pour une période déterminée avant de décider d'acheter, réduisant le risque pour l'acheteur qui peut tester l'article dans ses conditions d'utilisation réelles avant de s'engager financièrement. Ces modèles, encore émergents en France, proposent une alternative intéressante pour les articles dont l'adéquation aux besoins réels est difficile à évaluer sans une période d'essai prolongée.
`);

// L5: 3200 → need +800
await appendAndPatch('779e325f-9b54-4647-a25d-3e5e3f1f9303', BLOCK + `
## L'organisation d'un déménagement écologique et économique

Les déménagements étudiants sont particulièrement propices à une approche combinant occasion maximale et Impact environnemental minimal. La règle d'or du déménagement écologique est de ne déménager que ce qu'on utilisera dans le prochain logement — tout excédent est vendu, donné ou recyclé avant le déménagement. Cette approche disciplinée réduit à la fois le volume de matériel à transporter (et donc le coût de location de véhicule ou de transporteur) et contribue à l'économie circulaire locale.

Les plateformes d'échange locales (groupes Facebook de quartier, Geev pour les dons d'objets) permettent de donner rapidement ce qu'on ne peut pas vendre — livres, vêtements démodés, petits objets. Geev, une application française dédiée au don d'objets entre particuliers, est particulièrement active dans les villes étudiantes et permet de trouver en quelques minutes des personnes intéressées par les articles que l'on souhaite transmettre gratuitement. Ce processus de libération d'objets avant un déménagement est à la fois pratique (moins à déménager), économique (revenus des ventes), et solidaire (les dons profitent à d'autres).
`);

// L6: 3174 → need +826
await appendAndPatch('ce39fca3-8b41-4daa-aaec-457a8683d2ab', BLOCK + `
## Le rôle de la discipline financière dans le succès de la stratégie occasion

La stratégie d'achat d'occasion ne peut pas fonctionner sans une discipline financière de base — notamment la résistance aux achats impulsifs, qu'ils soient neufs ou d'occasion. Une bonne affaire d'occasion qu'on n'avait pas prévue dans son budget n'est pas forcément une bonne affaire si elle crée un déséquilibre budgétaire. La discipline consiste à n'accepter une opportunité d'occasion non prévue que si elle correspond à un besoin réel et si le budget disponible le permet.

Constituer un « fonds d'opportunité » — une petite réserve spécifiquement dédiée aux bonnes affaires d'occasion imprévues — permet de saisir ces opportunités sans déstabiliser le budget global. Ce fonds, modeste (cinquante à cent euros mensuels selon les moyens), est reconstitué chaque mois et disponible immédiatement pour les opportunités qui se présentent. Il disciplinairise aussi indirectement les décisions en fixant un plafond mensuel aux achats d'occasion non planifiés, évitant que les « petites opportunités » s'accumulent en une dépense mensuelle excessive.
`);
