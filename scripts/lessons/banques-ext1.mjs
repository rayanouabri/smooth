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
## La sécurité des fonds dans les banques en ligne

Une préoccupation fréquente des nouveaux utilisateurs de banques en ligne concerne la sécurité de leurs fonds. Les banques en ligne agréées par l'ACPR (Autorité de Contrôle Prudentiel et de Résolution) bénéficient exactement de la même protection que les banques traditionnelles : le Fonds de Garantie des Dépôts et de Résolution (FGDR) garantit les dépôts jusqu'à 100 000 euros par client et par établissement. Cette garantie s'applique à Boursorama (filiale de Société Générale), Fortuneo (filiale de Crédit Mutuel), et Hello bank! (filiale de BNP Paribas).

Les néobanques comme Revolut et N26 ont quant à elles des licences bancaires européennes (Revolut a une licence lituanienne, N26 une licence allemande) qui les soumettent aux mêmes règles de protection que les banques françaises dans l'espace européen. Cette protection peut néanmoins être différente dans les détails — notamment pour le traitement des réclamations en cas de litige. Les utilisateurs qui privilégient une protection maximale préféreront les banques en ligne qui sont des filiales de grands groupes bancaires français.

## Les fonctionnalités avancées des applications de banque en ligne

Les applications des banques en ligne et néobanques se distinguent souvent par des fonctionnalités de gestion financière avancées que les applications des banques traditionnelles peinent à égaler. Les catégorisations automatiques des dépenses permettent de visualiser en temps réel où l'argent est dépensé. Les notifications push pour chaque transaction permettent de détecter immédiatement une transaction suspecte. La possibilité de bloquer ou débloquer sa carte en temps réel depuis l'application est une fonctionnalité de sécurité très appréciée — particulièrement utile si on perd sa carte ou si on suspecte une fraude.

Revolut va plus loin avec des fonctionnalités comme les "coffres" (espaces d'épargne virtuelle), les arrondis automatiques vers l'épargne, et les analytics détaillés sur les habitudes de dépense. Ces outils transforment l'application bancaire en véritable outil de gestion budgétaire. Pour un étudiant qui cherche à mieux contrôler ses dépenses, ces fonctionnalités peuvent avoir une valeur significative au-delà des simples économies de frais.

## L'histoire et l'évolution des banques en ligne en France

La première banque en ligne française, Fortuneo, a été fondée en 2000. Boursorama, filiale de la Société Générale, a rapidement suivi. Pendant les premières années, ces banques étaient surtout connues pour leurs offres de courtage en bourse et leurs livrets d'épargne rémunérés. La transition vers une offre de banque du quotidien complète (compte courant, carte bancaire couleur, agios réduits) s'est opérée dans les années 2010. L'arrivée de N26 en France en 2015 et de Revolut en 2015 a accéléré la transformation du secteur en introduisant des interfaces mobiles radicalement simplifiées et des fonctionnalités innovantes.

Aujourd'hui, les banques en ligne comptent plusieurs millions de clients en France et leur part de marché continue de croître. Cette évolution a forcé les banques traditionnelles à investir massivement dans leurs propres applications mobiles et à réduire leurs frais pour rester compétitives. La concurrence entre les deux modèles bénéficie in fine aux consommateurs qui ont maintenant accès à une gamme plus large d'offres et de services.
`;

const EXT1_L2 = `
## La transformation numérique des banques traditionnelles

Face à la concurrence des banques en ligne, les banques traditionnelles ont massivement investi dans leur transformation numérique. Quasiment toutes proposent désormais des applications mobiles de qualité qui permettent de gérer son compte, effectuer des virements, et consulter ses relevés sans se déplacer en agence. Certaines banques traditionnelles ont lancé des offres digitales dédiées : LCL proposait "Monbanq", Crédit Mutuel a "Fortuneo" comme filiale numérique, et la Caisse d'Épargne a renforcé ses services en ligne. Cette transformation réduit une partie des avantages distinctifs des banques en ligne.

## Les relations avec les conseillers des banques traditionnelles

L'un des atouts majeur des banques traditionnelles est la relation avec un conseiller bancaire dédié. Ce conseiller connaît l'historique du client, peut anticiper ses besoins, et peut intervenir proactivement pour proposer des solutions adaptées (renégociation d'emprunt, révision des placements, adaptation des assurances). Pour les moments de vie importants — achat immobilier, création d'entreprise, succession — cette relation personnalisée a une valeur réelle qui peut dépasser les économies de frais obtenues avec une banque en ligne.

Cependant, la qualité de cette relation varie beaucoup selon les agences et les conseillers. Certains conseillers sont très réactifs et de bon conseil; d'autres sont surtout orientés vers la vente de produits bancaires et d'assurance de la banque. La rotation des conseillers (changement de poste tous les 2-3 ans dans certains établissements) peut remettre régulièrement à zéro la relation de confiance construite. Ces facteurs humains imprévisibles rendent la qualité de la relation conseiller-client difficile à garantir d'avance.

## Les alternatives hybrides : les offres 100% en ligne des banques traditionnelles

Face à la concurrence des banques en ligne, la plupart des grandes banques traditionnelles ont créé des offres 100% en ligne ou à tarifs réduits. La BNP Paribas a lancé "Hello bank!" comme sa marque digital-native. LCL a proposé "Monbanq". Le Crédit Agricole a développé des offres mobiles compétitives. Ces offres hybrides tentent de combiner l'avantage de coût des banques en ligne avec la solidité et la crédibilité institutionnelle des grandes banques françaises.

Ces offres hybrides peuvent être particulièrement intéressantes pour les clients qui veulent des frais réduits mais préfèrent avoir en arrière-plan la solidité d'un groupe bancaire traditionnel. La garantie des dépôts et la solidité financière du groupe parent peuvent rassurer les clients qui hésitent à confier leurs économies à une néobanque indépendante. La frontière entre banque en ligne et banque traditionnelle devient ainsi de plus en plus floue.

## L'accès aux services bancaires pour les personnes en situation précaire

La question de l'accès aux services bancaires est particulièrement pertinente pour les étudiants étrangers récemment arrivés en France. La loi française oblige les banques à ouvrir un compte à toute personne qui en fait la demande et qui fournit les documents requis. En cas de refus, le "droit au compte" permet à la Banque de France de désigner un établissement. Mais au-delà de cette obligation légale minimale, les services bancaires vraiment utiles (carte bancaire de débit, virements, prélèvements) ne sont pas toujours inclus dans les comptes de base.

Les associations comme la Croix-Rouge, les CCAS municipaux, et les associations d'aide aux étrangers peuvent accompagner les personnes en situation précaire dans leurs démarches d'ouverture de compte bancaire. Ces associations connaissent les établissements les plus accessibles dans chaque ville et peuvent parfois intervenir directement auprès des banques pour faciliter l'ouverture d'un compte.
`;

const EXT1_L3 = `
## L'importance du compte bancaire pour les démarches administratives en France

En France, un compte bancaire est indispensable pour quasiment toutes les démarches administratives importantes. La CAF versement des aides au logement (APL) par virement sur un compte bancaire français. Pôle Emploi verse les allocations chômage sur un compte bancaire. La Sécurité Sociale rembourse les soins médicaux par virement. L'administration fiscale effectue les remboursements d'impôts par virement. Sans compte bancaire français, ces flux essentiels ne peuvent pas être reçus.

Pour les étudiants étrangers, le compte bancaire est également nécessaire pour mettre en place le prélèvement automatique des frais de logement (loyer), des services essentiels (électricité, internet, téléphone mobile), et des assurances. La domiciliation bancaire — l'utilisation d'un compte bancaire comme adresse financière de référence — est une pratique qui facilite et sécurise toutes ces relations contractuelles. Avoir un compte bien géré, sans incidents de paiement, est un élément positif du dossier locatif.

## Le comparatif des frais : calcul pratique

Pour comparer efficacement les frais réels de différentes banques, un calcul pratique s'impose. Estimez vos opérations mensuelles types : 30 paiements par carte, 2 retraits DAB, 1 virement émis, 5 prélèvements automatiques. Multipliez chaque type d'opération par son tarif dans la grille de chaque banque. Ajoutez les frais fixes (tenue de compte, carte). Comparez les totaux annuels.

Pour une banque en ligne comme Boursorama avec son offre standard : frais de tenue de compte 0€, carte Visa Classic 0€ (sous conditions), opérations de base 0€ = coût annuel estimé 0€. Pour une banque traditionnelle avec une offre standard : 8€ de tenue de compte/mois + 35€ de carte/an + frais opérations = environ 130-200€ par an minimum. Cette différence, même en conditions idéales, représente plusieurs mois de téléphonie mobile ou plusieurs dizaines de repas. Pour les budgets serrés, cet écart de coût est un argument décisif.

## L'accompagnement dans l'ouverture de compte pour les étudiants internationaux

Les universités françaises et les grandes écoles disposent généralement de services d'accueil internationaux qui accompagnent les étudiants dans les démarches d'installation incluant l'ouverture d'un compte bancaire. Des sessions d'information collectives, des conventions avec des banques locales pour faciliter l'ouverture de compte, et des permanences de conseillers bancaires dans les campus sont des services proposés par certains établissements.

Les Campus France (réseau officiel d'accueil des étudiants étrangers) et les services des relations internationales des universités peuvent orienter vers des banques connues pour leur accessibilité aux étudiants étrangers. Les forums d'étudiants en ligne (Reddit r/France, groupes Facebook d'étudiants étrangers en France) regorgent de témoignages et de recommandations pratiques sur les banques les plus accessibles selon les situations. Cette intelligence collective est une ressource précieuse pour les primo-arrivants.

## L'évaluation de la pérennité d'un établissement bancaire

La solidité financière d'un établissement bancaire est un critère de choix important, même si la garantie des dépôts protège les économies jusqu'à 100 000 euros. Choisir une banque dont la pérennité est assurée évite les inconvénients d'un changement de banque imprévu. Les néobanques comme Revolut et N26, bien qu'elles aient connu une croissance rapide, n'ont pas tous les mêmes modèles économiques ni les mêmes niveaux de rentabilité que les banques traditionnelles. Les banques en ligne qui sont des filiales de grands groupes bancaires (Boursorama/Société Générale, Fortuneo/Crédit Mutuel, Hello bank!/BNP Paribas) offrent une solidité institutionnelle supérieure.
`;

const EXT1_L4 = `
## Les applications de gestion multi-comptes

La gestion de plusieurs comptes bancaires simultanément est facilitée par des applications de gestion financière personnelle (PFM — Personal Finance Management). Bankin', Linxo, Budget Insight, et Moneydashboard sont des exemples de telles applications qui permettent de connecter plusieurs comptes bancaires (via le protocole DSP2 / Open Banking) et de les visualiser dans un tableau de bord unique. Ces applications permettent de voir en temps réel le solde consolidé de tous ses comptes, l'historique des transactions agrégé, et des analyses de dépenses par catégorie.

L'Open Banking, rendu obligatoire par la directive européenne DSP2, oblige les banques à permettre aux applications tierces d'accéder aux données bancaires des clients avec leur consentement. Cette ouverture des données bancaires a créé un écosystème d'applications financières innovantes qui enrichissent les fonctionnalités de base des banques. Pour les utilisateurs de plusieurs comptes, ces outils de gestionnaires tiers peuvent offrir une vision financière plus complète que chaque application bancaire individuelle.

## Les virements internationaux et le traitement des devises

Pour les étudiants étrangers qui reçoivent des fonds de leur pays d'origine ou qui envoient des économies chez eux, la gestion des virements internationaux et des conversions de devises est un sujet pratique important. Les banques traditionnelles appliquent généralement des frais conséquents sur les virements internationaux (SWIFT) : des commissions fixes (5 à 30 euros), des taux de change désavantageux (1 à 3% au-dessus du taux interbancaire), et parfois des frais du côté de la banque réceptrice.

Les alternatives spécialisées dans les transferts internationaux peuvent être beaucoup plus économiques. Wise (anciennement TransferWise) propose des conversions au taux interbancaire avec des frais transparents et faibles. Revolut permet des conversions aux taux interbancaires (avec des limites en offre gratuite). Pour les étudiants qui reçoivent régulièrement des fonds de l'étranger, utiliser Wise ou Revolut pour ces transactions et une banque française pour les opérations locales est la stratégie optimale.

## Les assurances et protections incluses avec les cartes bancaires

Les cartes bancaires incluent souvent des assurances et protections qui constituent un avantage indirect significatif. Les cartes Visa et Mastercard de haut de gamme (Gold, Platinum, Infinite) incluent généralement : une assurance voyage (annulation de vols, perte de bagages, assistance médicale à l'étranger), une assurance achats (protection contre le vol ou la casse pendant les 90 premiers jours), et une garantie de paiement en ligne. Ces assurances, si elles doivent être souscrites séparément, représentent plusieurs centaines d'euros par an.

Pour les étudiants qui voyagent régulièrement (voyages Erasmus, visites familiales, vacances), la valeur de ces assurances peut dépasser le coût de la carte premium. Une analyse du ratio coût/bénéfices — prix de la carte premium moins valeur des assurances incluses — peut rendre une carte apparemment chère plus avantageuse qu'une carte gratuite sans couverture assurance.

## La banque en ligne et le RGPD : gestion des données personnelles

Les banques, en ligne comme traditionnelles, traitent des données personnelles et financières très sensibles. Le RGPD (Règlement Général sur la Protection des Données) impose des obligations strictes sur la collecte, le traitement, et la conservation de ces données. Les banques doivent informer clairement leurs clients sur les traitements effectués, obtenir leur consentement pour les utilisations secondaires des données, et permettre l'exercice des droits d'accès, de correction, et d'effacement.

Pour les utilisateurs de néobanques, l'examen de la politique de confidentialité et de partage des données avec des tiers est une précaution utile. Certaines néobanques utilisent les données de transaction de leurs clients pour proposer des offres commerciales partenaires ou pour affiner leurs modèles de score de crédit. Comprendre comment ses données bancaires sont utilisées est une dimension de plus en plus importante de la relation avec sa banque.
`;

const EXT1_L5 = `
## Les documents à préparer avant l'ouverture de compte

Une préparation minutieuse avant de commencer la procédure d'ouverture de compte réduit les délais et évite les allers-retours. Pour une banque en ligne, les documents à numériser à l'avance incluent : la pièce d'identité (passeport ou titre de séjour) en bonne qualité sur les deux faces, le justificatif de domicile récent (quittance de loyer, facture d'eau, facture d'électricité, ou attestation d'hébergement si vous logez chez quelqu'un), et potentiellement une photo récente de bonne qualité pour le selfie de vérification d'identité.

La numérisation de bonne qualité est importante — des photos floues, mal éclairées, ou incomplètes peuvent entraîner un rejet de la vérification et allonger le délai d'activation du compte. Utiliser un fond neutre clair, une lumière naturelle sans reflets, et un smartphone récent avec un bon appareil photo donne les meilleures chances de succès dès le premier essai. Certaines banques proposent également la vérification en visioconférence avec un agent, ce qui est souvent plus fiable que l'envoi de photos.

## Le compte de base versus le compte premium : que choisir

La plupart des banques proposent plusieurs niveaux d'offre avec des services et des tarifs différents. Le compte de base comprend généralement un compte courant, une carte bancaire à débit immédiat, les virements et prélèvements, et l'accès à l'application mobile. Les offres premium ajoutent une carte haut de gamme (Gold ou Platinum), des assurances voyages étendues, des limites de paiement plus élevées, et parfois des services additionnels comme une hotline prioritaire.

Pour un étudiant qui commence sa vie bancaire en France, démarrer avec l'offre de base est souvent suffisant. Les conditions pour les offres premium — revenus mensuels élevés ou versement régulier sur le compte — ne sont généralement pas remplies par les étudiants. Il est possible d'upgrader son offre ultérieurement quand la situation financière le permet. La stratégie est d'ouvrir avec l'offre accessible et d'évoluer progressivement vers les offres premium à mesure que les revenus augmentent.

## Les délais d'activation et la gestion de la période transitoire

L'activation d'un nouveau compte bancaire prend du temps — entre quelques heures et plusieurs semaines selon l'établissement et la complexité du dossier. Pendant cette période transitoire, il est important d'avoir un plan de trésorerie : comment payer les dépenses courantes si le compte n'est pas encore actif ? Les solutions incluent l'utilisation temporaire d'un compte étranger avec les frais qui s'y attachent, les espèces pour les petites dépenses locales, ou le recours à l'aide d'un camarade ou d'un logeur qui avance les frais.

Pour les étudiants qui anticipent leur arrivée en France, ouvrir un compte dans une néobanque (N26 ou Revolut) avant même l'arrivée — depuis le pays d'origine — est possible dans certains cas et réduit le délai avant d'avoir un RIB fonctionnel. Un compte N26 ouvert en Allemagne fonctionne dans toute l'Union Européenne et peut être utilisé en France dès l'activation. Cette option peut être une transition pratique en attendant d'ouvrir un compte bancaire français définitif.

## La domiciliation bancaire et son importance

La domiciliation bancaire — le fait de recevoir ses revenus réguliers (salaire, CAF, bourse) sur un compte — est un critère que de nombreuses banques utilisent pour maintenir ou améliorer les conditions du compte. Certaines offres gratuites de banques en ligne sont conditionnées à la domiciliation des revenus ou à un certain nombre de transactions mensuelles. Vérifier ces conditions avant l'ouverture du compte permet d'éviter de basculer involontairement vers une offre payante si les conditions ne sont pas respectées.

Pour les étudiants dont les revenus sont irréguliers (jobs étudiants, bourses versées selon un calendrier académique), anticiper les mois sans revenus entrants et vérifier si la condition de domiciliation s'applique mensuellement ou en moyenne annuelle est important. Certaines banques sont plus souples que d'autres sur l'application de ces conditions en cas d'absence temporaire de revenus.
`;

const EXT1_L6 = `
## Les critères pour comparer les offres de crédit

Si comparer les comptes courants est relativement direct, la comparaison des offres de crédit (consommation, immobilier) est plus complexe et nécessite une analyse approfondie. Le taux effectif global (TEG) ou le taux annuel effectif global (TAEG) est le taux de référence à comparer — il inclut tous les frais du crédit (intérêts, frais de dossier, assurance obligatoire) et permet une comparaison homogène entre offres. Ce taux doit être clairement affiché dans toutes les offres de crédit.

Pour un étudiant qui envisage un prêt étudiant garanti par l'État, comparer les TAEG des différentes banques qui proposent ce produit peut représenter des économies significatives sur la durée totale du prêt. La différence entre un TAEG de 1% et 2% sur un prêt de 20 000 euros sur 10 ans représente environ 1 000 euros d'intérêts supplémentaires. Cette comparaison mérite quelques heures de préparation.

## Les labels et certifications de qualité bancaire

Certains labels de qualité peuvent aider à distinguer les banques dans leur engagement envers leurs clients. Le label "Relations avec les investisseurs de qualité" (RIQ) concerne plutôt les investisseurs institutionnels. Pour les clients particuliers, les indicateurs de qualité de service publiés par l'ACPR et les banques elles-mêmes (taux de réclamations, délais de traitement, satisfaction client) sont plus pertinents. L'Autorité de Contrôle Prudentiel et de Résolution (ACPR) publie régulièrement des rapports sur les pratiques commerciales des banques et les réclamations reçues, ce qui peut orienter le choix vers les établissements les mieux notés.

## L'éthique et la finance responsable dans le choix bancaire

Un critère de plus en plus pris en compte par les consommateurs conscients est l'éthique et la responsabilité sociale des banques. La finance responsable concerne notamment les politiques d'investissement des banques : financent-elles des projets liés aux énergies fossiles, aux industries d'armement controversées, ou à des régimes autoritaires ? Des outils de comparaison comme l'application Rift (lancée par des ONG) évaluent les banques selon leurs pratiques d'investissement.

Pour les étudiants sensibles à ces questions, le choix bancaire peut être un acte de consumérisme éthique. La Caisse d'Épargne et le Crédit Mutuel, en tant que banques coopératives ou mutualistes, ont des modèles différents des banques commerciales classiques en termes de gouvernance et d'orientation de leurs investissements. Le NEF (Nouvelle Économie Fraternelle) est une coopérative financière entièrement dédiée à la finance éthique — elle ne finance que des projets à impact social et environnemental positif.

## Les frais de découvert : une vigilance indispensable

Les frais de découvert constituent l'une des rubriques les plus importantes à vérifier dans la grille tarifaire d'une banque. Un découvert non autorisé peut donner lieu à des agios (intérêts débiteurs), des commissions d'intervention (facturées par opération réalisée en découvert), et des frais de lettre de notification. Ces frais peuvent rapidement s'accumuler et dépasser le montant du découvert lui-même.

Les banques en ligne sont généralement plus indulgentes sur les petits découverts accidentels — certaines autorisent un découvert de quelques euros sans frais pendant quelques jours. Les banques traditionnelles peuvent en revanche facturer des commissions d'intervention de 8 euros par opération, avec un plafond mensuel mais des montants qui s'accumulent vite en cas de comptes mal provisionnés. La vigilance sur le solde du compte et l'activation des alertes de solde bas sont les meilleures protections contre ces frais inattendus.

## La fidélité bancaire versus le nomadisme bancaire

La tendance au "nomadisme bancaire" — changer de banque régulièrement pour profiter des offres de bienvenue et des meilleures conditions — est une stratégie que certains consommateurs avertis pratiquent. La loi Macron de 2017 a facilité la mobilité bancaire en obligeant les banques à accompagner gratuitement les clients qui changent de banque, en prenant en charge le transfert des prélèvements et virements permanents. Ce service de mobilité bancaire (MBP) permet de changer de banque principale sans avoir à notifier manuellement chaque organisme.

Le nomadisme bancaire a ses avantages (primes d'ouverture répétées, meilleures conditions renégociées) mais aussi ses inconvénients : la gestion administrative du changement même avec le service MBP, la reconstruction d'un historique client dans chaque nouvelle banque, et les inconvénients pratiques des transitions. Pour la plupart des étudiants, une stratégie de multi-bancarisation stable (une banque en ligne + éventuellement une banque traditionnelle) est préférable au nomadisme fréquent.
`;

await appendAndPatch('4c9116f9-7601-44df-b251-025a5ef7e17c', EXT1_L1);
await appendAndPatch('5c36682c-cb31-424c-a796-8c3a1973783a', EXT1_L2);
await appendAndPatch('149737e3-08ca-4f30-88a3-6a4de0e61448', EXT1_L3);
await appendAndPatch('831ceaae-f8f0-4bdc-a84e-f6b80c8c54d5', EXT1_L4);
await appendAndPatch('869dc5a2-45ab-439d-b1e7-436a9b056181', EXT1_L5);
await appendAndPatch('6fd28914-d398-4ff8-9ec8-cf4f7207bbad', EXT1_L6);
