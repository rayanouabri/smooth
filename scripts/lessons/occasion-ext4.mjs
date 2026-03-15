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

const TAIL = `
## Les ressources complémentaires pour approfondir le sujet

Le marché de l'occasion en France bénéficie d'une communauté en ligne active qui partage conseils, bons plans et retours d'expérience. Les forums comme Reddit (subreddits r/france et r/frugal_france) regorgent de discussions sur les meilleures plateformes, les arnaques à éviter, et les stratégies d'achat gagnantes. Les groupes Facebook thématiques — par ville, par catégorie de produit, ou par communauté spécifique (étudiants d'une université, expatriés d'un même pays) — sont des espaces d'entraide précieux pour naviguer dans le marché local.

Les flux RSS ou les newsletters de sites comme SeLoger Occasion, Caradisiac Occasions, ou les blogs de consommateurs permettent de rester informé des évolutions réglementaires, des nouvelles plateformes, et des tendances du marché. Cette veille permet d'adapter sa stratégie d'achat d'occasion aux évolutions du marché et de profiter des opportunités qui émergent, comme les nouvelles plateformes de reconditionnement certifié ou les nouvelles protections légales pour les acheteurs.

## Les compétences transférables de l'achat d'occasion dans d'autres domaines

Les compétences développées dans la pratique de l'achat d'occasion — évaluation rapide de la qualité, négociation respectueuse, vérification des documents et des garanties, gestion des litiges — sont des compétences transférables dans de nombreux autres contextes professionnels et personnels. La capacité à évaluer la valeur d'un actif, à négocier un prix, et à naviguer dans des relations commerciales informelles est une compétence professionnelle reconnue dans de nombreux secteurs.

La pratique régulière de l'achat d'occasion développe également un sens aigu du rapport qualité-prix et une résistance aux stratégies marketing du neuf — une compétence de consommateur avisé qui protège contre les achats impulsifs et les dépenses non nécessaires bien au-delà du marché de l'occasion. Ces compétences, une fois acquises, enrichissent durablement la relation de chacun avec le monde de la consommation et la gestion de ses ressources financières.
`;

const EXT4_L1 = `
## La logistique des achats groupés entre étudiants

La stratégie des achats groupés — plusieurs étudiants qui s'organisent pour acheter ensemble des articles d'occasion à un même vendeur — peut générer des remises significatives tout en simplifiant la logistique pour le vendeur. Un étudiant qui recherche un bureau et un autre qui recherche une chaise peuvent contacter ensemble un vendeur qui propose les deux articles séparément et négocier un lot avec une remise globale. Cette approche coopérative est plus courante dans les milieux étudiants organisés mais reste applicable à toute situation où les acheteurs peuvent se coordonner.

Les applications de messagerie comme WhatsApp permettent de créer rapidement des groupes de coordination pour des achats d'occasion collectifs. Un groupe « équipement appart 2025 » entre collocataires ou futurs collocataires permet de centraliser les recherches, partager les bonnes annonces, et organiser des visites collectives. Cette mutualisation des efforts de recherche est une application directe des principes de l'économie collaborative au marché de l'occasion.
`;

const EXT4_L2 = `
## Les bonnes pratiques d'expédition de vêtements sur Vinted

L'expédition de vêtements via Vinted suit un processus standardisé qui simplifie considérablement la logistique pour le vendeur. Une fois la commande confirmée, Vinted génère automatiquement une étiquette d'expédition prépayée que le vendeur doit imprimer et coller sur le colis. L'emballage des vêtements pour l'expédition doit les protéger des salissures et de l'humidité sans pour autant nécessiter des matériaux coûteux — un sac plastique pour protéger contre l'humidité, enveloppé dans du papier kraft ou glissé dans une enveloppe à bulles, suffit pour la plupart des vêtements.

Les vendeurs qui emballent leurs vêtements soigneusement et ajoutent parfois un petit mot personnel reçoivent systématiquement de meilleures évaluations — ce qui améliore leur visibilité dans les algorithmes de Vinted et facilite les ventes futures. Certains vendeurs réguliers sur Vinted ont développé une véritable marque personnelle avec des packagings soignés, du papier de soie, et des notes manuscrites — une stratégie qui crée de la fidélité chez les acheteurs réguliers et des recommandations dans les réseaux sociaux.
`;

const EXT4_L3 = `
## L'impact de la demande émotionnelle sur les prix de marché

Sur les marchés de l'occasion, certains articles voient leurs prix influencés par une demande émotionnelle ou culturelle qui dépasse leur valeur utilitaire objective. Les edtions limitées de sneakers, les figurines de collection, les jeux vidéo rétro de certaines séries cultes, les vinyles de certains artistes — ces articles peuvent atteindre des prix très supérieurs à leur coût de fabrication initial en raison de la demande spécifique des collectionneurs. Pour un acheteur qui cherche un article à usage quotidien, éviter ces catégories à forte demande émotionnelle permet d'optimiser son rapport qualité-prix.

À l'inverse, un vendeur qui possède des articles à fort potentiel émotionnel ou collectionnable a intérêt à identifier les bonnes plateformes — celles où se trouvent les acheteurs passionnés prêts à payer les prix élevés que justifie la rareté ou le statut collectionnable de l'article. Vendre un jeu vidéo rare sur Leboncoin généraliste versus sur un forum de retrogaming spécialisé peut faire une différence de prix de 50 à 200%.
`;

const EXT4_L4 = `
## La confidentialité et la sécurité des données personnelles dans les ventes d'occasion

La vente d'appareils électroniques d'occasion avec des données personnelles encore stockées représente un risque sérieux de violation de la vie privée. Une réinitialisation d'usine complète de tout appareil électronique (smartphone, tablette, ordinateur) avant la vente est une étape obligatoire que de nombreux vendeurs négligent. La réinitialisation d'usine efface non seulement les fichiers personnels visibles, mais aussi les comptes de messagerie, les mots de passe sauvegardés, les photos, et les applications — protégeant l'ancien propriétaire contre l'accès non autorisé à ses données.

Pour les ordinateurs, la suppression sécurisée des données nécessite plus qu'une simple réinitialisation Windows ou macOS — un effacement cryptographique du disque (option disponible dans les outils de réinitialisation modernes) garantit que les données ne peuvent pas être récupérées avec des outils de récupération de données. Pour les SSD (qui utilisent des méthodes d'effacement différentes des disques durs classiques), utiliser l'outil de « Secure Erase » du fabricant du SSD garantit l'effacement complet et définitif des données.
`;

const EXT4_L5 = `
## La coordination avec les collectivités locales pour les décombres encombrants

La gestion des déchets encombrants — meubles brisés, appareils électroménagers hors service — est encadrée par les collectivités locales en France. Chaque commune ou intercommunalité propose des solutions pour collecter les encombrants qui ne peuvent pas être mis à la vente d'occasion en raison de leur état. La plupart des villes organisent des collectes d'encombrants sur rendez-vous ou en jours fixes, permettant aux habitants de déposer leurs articles devant leur domicile pour une collecte par les services municipaux.

Les déchèteries communales acceptent également les encombrants, les appareils électroniques et électroménagers (DEEE — Déchets d'Équipements Électriques et Électroniques), les meubles, et d'autres catégories de déchets non collectés en poubelle ordinaire. Cette filière de collecte organisée garantit que les articles qui ne peuvent pas être réutilisés sont recyclés de façon responsable plutôt que dumpés illégalement. Connaître la déchèterie la plus proche et ses horaires d'ouverture est une information pratique utile pour tout résident en France qui génère des encombrants.
`;

const EXT4_L6 = `
## Le suivi et l'évaluation de sa stratégie d'épargne occasion

Mesurer l'impact réel de sa stratégie d'achat d'occasion sur son budget annuel est un exercice motivant qui renforce les comportements économiques vertueux. Tenir un simple journal des achats d'occasion — notant pour chaque article le prix payé d'occasion et le prix neuf équivalent — permet de calculer les économies réalisées mois par mois et de les cumuler sur l'année. Ces chiffres concrets transforment une stratégie abstraite en résultats financiers mesurables.

Par exemple, un étudiant qui achète son ordinateur 350 euros d'occasion alors que le modèle neuf coûte 700 euros, ses vêtements d'hiver pour 80 euros sur Vinted alors qu'ils en vaudraient 250 neufs, et son bureau+chaise pour 60 euros d'occasion au lieu de 180 euros neufs, a déjà économisé 640 euros sur trois achats. Répliquer cette démarche sur l'ensemble des achats de l'année peut générer des économies dépassant facilement 1500 à 2000 euros annuels — un impact financier qui se traduit directement en une réduction du stress financier et en une plus grande liberté dans les choix de vie.
`;

await appendAndPatch('54543fac-19ea-4f70-aa33-3db6ab648f5f', TAIL + EXT4_L1);
await appendAndPatch('87ee9dc9-5623-4cae-b27a-50eebf71c785', TAIL + EXT4_L2);
await appendAndPatch('08df7fd6-e4ff-42a9-9944-dc3aa944f4ee', TAIL + EXT4_L3);
await appendAndPatch('f7eecf9c-2dac-4100-8215-dfb0483766d7', TAIL + EXT4_L4);
await appendAndPatch('779e325f-9b54-4647-a25d-3e5e3f1f9303', TAIL + EXT4_L5);
await appendAndPatch('ce39fca3-8b41-4daa-aaec-457a8683d2ab', TAIL + EXT4_L6);
