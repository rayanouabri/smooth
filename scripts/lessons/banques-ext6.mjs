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

const EXT6_L1 = `
## Le plafond de garantie des dépôts et sa signification concrète

La garantie des dépôts bancaires est un mécanisme de protection instauré après la crise financière de 2008. En France, le Fonds de Garantie des Dépôts et de Résolution (FGDR) garantit les dépôts des particuliers jusqu'à 100 000 euros par établissement bancaire et par déposant. Cette garantie s'active en cas de faillite de la banque — l'éventualité reste rare pour les établissements agréés en France, mais pas nulle, comme l'ont montré quelques faillites bancaires dans l'histoire récente.

La garantie couvre les soldes des comptes courants, des livrets non réglementés, et des comptes à terme. Les livrets réglementés (Livret A, LDDS, LEP) bénéficient quant à eux d'une garantie d'État directe. En cas d'activation de la garantie FGDR, le remboursement des dépôts garantis intervient dans un délai de 7 jours ouvrés — un délai court qui protège les déposants contre une pénurie prolongée de liquidités. Pour les étudiants avec des économies, s'assurer que les dépôts ne dépassent pas 100 000 euros dans le même établissement est une précaution dont l'application est rarement nécessaire mais utile à connaître.

## Le choix du type de carte bancaire selon les usages dominants

Le marché des cartes bancaires propose plusieurs niveaux de service : cartes à débit immédiat ou différé, cartes standard, cartes premium, cartes virtuelles. La carte à débit différé — qui regroupe toutes les transactions du mois et les débite en une seule fois en fin de mois — est utile pour les professionnels qui gèrent leurs remboursements de frais, mais peut créer des surprises pour les étudiants qui ont du mal à anticiper leur solde en fin de mois. La carte à débit immédiat, bien que moins flexible, est plus facilement pilotable au jour le jour.

Les cartes virtuelles — numéro de carte unique généré à la demande pour un achat en ligne — offrent une protection accrue contre la fraude en ligne. Un numéro de carte virtuel utilisé pour un seul achat et désactivé ensuite ne peut pas être réutilisé si les données sont interceptées. Plusieurs banques en ligne proposent cet outil directement dans l'application. Pour les étudiants qui achètent régulièrement en ligne, l'utilisation de cartes virtuelles est une bonne pratique de sécurité qui limite très efficacement les risques de fraude par compromission du numéro de carte.
`;

const EXT6_L2 = `
## Les critères de solvabilité bancaire pour les banques en ligne

Évaluer la solidité financière d'une banque en ligne est une démarche prudente que peu d'utilisateurs pratiquent mais qui est possible grâce aux informations publiques disponibles. Les banques en ligne agréées en France publient leurs résultats financiers et leurs ratios de solvabilité dans leurs rapports annuels. Le ratio CET1 (Common Equity Tier 1) est l'indicateur principal de solidité financière bancaire — un ratio supérieur à 12% est considéré comme solide. Ces informations sont disponibles dans les rapports annuels publiés par les banques ou sur les sites des autorités de régulation.

Pour les néobanques qui n'ont pas encore atteint la rentabilité, la question de la durabilité du modèle économique est pertinente. Une néobanque qui brûle ses réserves de trésorerie sans atteindre la profitabilité finira par lever de nouveaux fonds ou par être rachetée ou liquidée. Les clients d'une néobanque qui ferme ne perdent pas leurs dépôts grâce à la garantie FGDR, mais subissent des inconvénients significatifs liés à la migration forcée vers une autre banque. Vérifier que la néobanque choisie a atteint ou est proche de la rentabilité est un critère de sélection qui protège contre ces désagréments.

## Les tendances en matière de paiements sans contact étendus

Les paiements sans contact ont connu une accélération spectaculaire avec la pandémie et l'augmentation du plafond de transaction sans code PIN à 50 euros. Les usages se sont étendus bien au-delà des petites transactions : dans les transports publics, pour le règlement des stationnements, dans les restaurants rapides et les distributeurs automatiques de boissons. Cette généralisation a créé de nouveaux comportements d'achat et modifié les attentes vis-à-vis des cartes bancaires.

Les montres et bracelets connectés (Apple Watch, Pixel Watch, Fitbit) avec NFC intégré permettent de payer sans sortir son téléphone ou son portefeuille. Pour les étudiants sportifs ou en déplacement constant, cette fonctionnalité peut être appréciable. La condition technique est d'avoir une banque dont l'application est compatible avec le système de paiement de la montre. Vérifier cette compatibilité avant d'investir dans un objet connecté est une précaution pratique. La plupart des grandes banques françaises sont désormais compatibles avec Apple Pay et Google Pay, mais la compatibilité avec les systèmes propriétaires d'autres marques est variable.
`;

const EXT6_L3 = `
## La déclaration de compte bancaire étranger et ses obligations

Les résidents fiscaux français qui détiennent des comptes bancaires à l'étranger — y compris dans des néobanques domiciliées dans un autre pays de l'Union Européenne — ont l'obligation légale de déclarer ces comptes dans leur déclaration de revenus annuelle. Cette obligation existe depuis de nombreuses années mais est souvent méconnue. La non-déclaration est passible d'une amende de 1 500 euros par compte non déclaré (portée à 10 000 euros pour les comptes dans des pays non coopératifs).

Pour les étudiants qui ont un compte Wise, N26 (domicilié en Allemagne), ou Revolut (domicilié en Lituanie), l'obligation de déclaration s'applique. La déclaration se fait en remplissant le formulaire 3916 joint à la déclaration de revenus annuelle. Cette démarche est simple — elle consiste à mentionner le nom de l'établissement, le pays, le numéro de compte et les dates d'ouverture et de clôture éventuelles. Ne pas remplir ce formulaire par ignorance est une erreur fréquente qui peut, si elle est détectée lors d'un contrôle fiscal, conduire à des pénalités disproportionnées par rapport à la situation réelle du contribuable.

## Les comptes en devise étrangère proposés par certaines banques

Pour les étudiants qui reçoivent des revenus en devises étrangères — bourse d'un gouvernement étranger en dollars, paiements de missions freelance pour des clients internationaux — la possibilité d'avoir un compte dans la devise de réception évite des conversions qui engendrent des frais et des variations de change. Wise et Revolut proposent des comptes multidevises permettant de recevoir, détenir et envoyer de l'argent dans plusieurs dizaines de devises sans conversion forcée.

Cette fonctionnalité est particulièrement utile pour les étudiants qui travaillent pour des clients internationaux, qui reçoivent des bourses en devises, ou qui font régulièrement des transferts vers leur pays d'origine. La gestion des devises dans un seul portefeuille numérique — convertir aux moments où le taux de change est favorable, conserver des réserves dans la devise la plus utilisée — est une forme de gestion de change accessible même pour des montants modestes. Les applications Wise et Revolut affichent les taux de change en temps réel et permettent de paramétrer des alertes quand un taux cible est atteint.
`;

const EXT6_L4 = `
## L'ouverture de compte pour les mineurs devenus majeurs

La transition bancaire de la majorité est un moment clé pour les jeunes adultes fraîchement étudiants. Un compte ouvert sous tutelle parentale doit être transformé en compte autonome lors du passage à la majorité. Cette transition est aussi souvent l'occasion — ou la raison — d'un premier choix bancaire vraiment personnel, détaché des habitudes familiales. Les banques savent que cette période est un moment de recrutement important et proposent des offres de bienvenue attractives pour les 18-25 ans.

Pour les jeunes majeurs de 18-25 ans, les offres des banques en ligne incluent souvent une période de gratuité étendue, des primes d'ouverture de compte, et des cartes haut de gamme à tarif réduit. Ces offres commerciales ont une durée limitée — il est important de lire les conditions qui régissent le maintien de la gratuité au-delà de la période d'introduction. Une banque qui propose la gratuité jusqu'à 25 ans devient payante le jour de l'anniversaire des 25 ans — prévoir le changement ou la renégociation à cette échéance est une saine anticipation.

## Les recours en cas de vol ou de perte de carte

La procédure en cas de vol ou de perte de carte bancaire doit être connue à l'avance pour être exécutée rapidement dans le stress de la situation. La première étape est de bloquer la carte immédiatement — via l'application bancaire si elle est disponible, ou en appelant le numéro d'opposition de sa banque (obligatoirement affiché sur le relevé bancaire et disponible 24h/24). La mise en opposition arrête toute transaction future mais ne récupère pas les transactions déjà effectuées après la perte.

La deuxième étape est de signaler le vol ou la perte à la police ou à la gendarmerie en déposant une plainte. Ce dépôt de plainte est souvent exigé par la banque pour traiter la demande de remboursement des transactions non autorisées effectuées avant l'opposition. La troisième étape est de déclarer formellement à la banque les transactions contestées et de demander leur remboursement. Le cadre légal DSP2 oblige la banque à rembourser ces transactions sauf si elle peut prouver la négligence grave du client (code PIN communiqué, etc.).
`;

const EXT6_L5 = `
## Les offres spéciales étudiants des banques traditionnelles

Les banques traditionnelles proposent des offres sur mesure pour les étudiants afin de les attirer dès les premières années d'études et de construire une relation bancaire de long terme. Ces offres incluent généralement la gratuité des frais de tenue de compte pendant les études, une carte bancaire gratuite ou à tarif réduit, un découvert autorisé de quelques centaines d'euros, et parfois des avantages supplémentaires comme des remises sur des services partenaires ou des prêts étudiants sans caution. La BNP Paribas, la Société Générale, la Caisse d'Épargne, et le Crédit Agricole ont toutes des gammes d'offres actives sur ce segment.

La condition principale de maintien de cette gratuité est généralement la preuve du statut étudiant, renouvelée chaque année. Un certificat de scolarité ou une carte d'étudiant en cours de validité suffit dans la grande majorité des cas. Il est prudent de noter dans son agenda le moment de renouvellement pour éviter une facturation automatique des frais standards en cas d'oubli. À la fin des études, ces offres student deviennent payantes ou se transforment en offres jeune actif — une transition à anticiper pour ne pas subir une facturation inopinée.

## Les aides financières et microcrédits accessibles via les banques

Pour les étudiants en situation de précarité financière, des solutions de microcrédit existent en dehors des crédits à la consommation classiques. La Caisse des Dépôts et certaines banques partenaires proposent des microcrédits personnels à des conditions préférentielles — montants faibles (jusqu'à 5 000 euros), taux d'intérêt réduits, remboursement sur des durées longues. Ces microcrédits sont destinés aux personnes exclues du crédit bancaire traditionnel et nécessitent généralement un accompagnement par une association partenaire.

Le CAF, le CNOUS, et les services sociaux des universités sont des points d'entrée pour accéder à ces dispositifs. Pour les étudiants en situation précaire, ces ressources sont à connaître et à mobiliser avant de recourir à des crédits à la consommation onéreux. Les établissements bancaires qui participent à ces programmes de microcrédit social adoptent une approche de banque responsable qui dépasse la simple logique commerciale. Cette dimension sociale du service bancaire est un critère de choix pour les étudiants qui accordent de l'importance à la cohérence des pratiques des entreprises avec lesquelles ils ont des relations.
`;

const EXT6_L6 = `
## L'intégration de l'intelligence artificielle dans le service client bancaire

L'intelligence artificielle a profondément transformé le service client bancaire au cours des dernières années. Les chatbots disponibles 24h/24 dans les applications bancaires répondent à la grande majorité des questions courantes — solde, historique de transactions, information sur les produits — sans intervention humaine. Les systèmes de reconnaissance de la parole permettent aux clients de dicter leurs demandes en langage naturel plutôt que de naviguer dans des menus. Ces innovations réduisent les temps d'attente et augmentent la disponibilité du service client.

Les limites de ces systèmes d'IA sont néanmoins réelles pour les situations complexes ou inédites. Un chat robotisé qui boucle sans comprendre une demande non standard est plus frustrant qu'une longue attente au téléphone. Les meilleures implémentations de service client IA sont celles qui savent reconnaître rapidement leurs limites et transférer fluidement vers un agent humain. Ce critère — la qualité de l'escalade IA vers humain — est une dimension du service client souvent sous-évaluée lors du choix d'une banque mais redoutablement importante dans les moments de difficulté.

## Construire un avenir financier solide à partir d'une relation bancaire choisie

La relation bancaire est bien plus qu'un service utilitaire de gestion de l'argent quotidien. Elle constitue l'infrastructure financière sur laquelle se construiront les grandes décisions économiques de la vie : l'achat d'un logement, le financement d'un projet professionnel, la constitution d'une épargne retraite. Choisir cette infrastructure avec soin, en fonction de besoins actuels et futurs bien compris, est l'une des décisions patrimoniales les plus importantes qui se prend souvent sans y attacher l'importance qu'elle mérite.

Les étudiants et les arrivants en France ont aujourd'hui accès à une offre bancaire d'une richesse inégalée dans l'histoire : des dizaines d'acteurs proposent des services de qualité variable à des prix allant du gratuit au premium, avec des spécialisations pour tous les profils et toutes les situations. La difficulté n'est plus de trouver une banque accessible — c'est de faire des choix éclairés dans cet excès d'offres. L'éducation financière, la comparaison rigoureuse, et la conscience de ses propres besoins sont les outils qui permettent de naviguer intelligemment dans ce paysage bancaire complexe et en permanente évolution. Investir du temps pour comprendre les fondamentaux du système bancaire français, comme vous le faites en suivant ce module, est un investissement dont les bénéfices se mesureront en années d'économies réalisées et de décisions financières optimisées.
`;

await appendAndPatch('4c9116f9-7601-44df-b251-025a5ef7e17c', EXT6_L1);
await appendAndPatch('5c36682c-cb31-424c-a796-8c3a1973783a', EXT6_L2);
await appendAndPatch('149737e3-08ca-4f30-88a3-6a4de0e61448', EXT6_L3);
await appendAndPatch('831ceaae-f8f0-4bdc-a84e-f6b80c8c54d5', EXT6_L4);
await appendAndPatch('869dc5a2-45ab-439d-b1e7-436a9b056181', EXT6_L5);
await appendAndPatch('6fd28914-d398-4ff8-9ec8-cf4f7207bbad', EXT6_L6);
