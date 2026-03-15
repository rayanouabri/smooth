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

const EXT4_L1 = `
## L'accessibilité des services bancaires aux personnes en situation d'handicap

Les banques ont des obligations légales envers leurs clients en situation de handicap. Les sites internet et applications mobiles des banques doivent respecter les normes d'accessibilité numérique (RGAA - Référentiel Général d'Amélioration de l'Accessibilité). Les banques en ligne, dont le canal principal est numérique, font l'objet d'une attention particulière sur ce point. Des fonctionnalités comme l'amplification du texte, la compatibilité avec les lecteurs d'écran, et les options de contraste élevé sont progressivement intégrées dans les applications bancaires.

Pour les clients nécessitant un accompagnement particulier, certaines banques traditionnelles proposent des services spécifiques : des agents formés à l'accueil des personnes malentendantes (avec interprètes en langue des signes accessibles par vidéo), des alternatives aux formulaires imprimés pour les personnes dyslexiques, et des procédures simplifiées pour les personnes sous tutelle ou curatelle. La Banque de France publie un guide des droits des personnes vulnérables dans leurs relations avec les établissements bancaires.

## La banque islamique et la finance participative en France

La finance islamique, qui exclut le prêt à intérêt (riba) au profit de mécanismes de partage des risques et des profits, se développe progressivement en France. Quelques établissements proposent des produits financiers conformes aux principes de la sharia (finance halal) : comptes épargne sans intérêt mais avec partage des bénéfices de la banque, produits immobiliers basés sur la murabaha (achat-revente avec marge) plutôt que sur un crédit classique avec intérêts.

Pour les étudiants dont les convictions religieuses excluent les intérêts bancaires, l'existence de ces alternatives mérite d'être connue. Les offres disponibles en France restent encore limitées par rapport à d'autres pays européens (notamment la Grande-Bretagne), mais le secteur se développe. Des associations spécialisées dans la finance islamique en France (comme l'AIDIMM - Association pour l'Investissement Durable, l'Implication, le Partage et la Morale) peuvent orienter vers les établissements de finance islamique actifs en France.

## La banque responsable : critères ESG et choix éthique

L'investissement ESG (Environnemental, Social, Gouvernance) a transformé non seulement les produits d'investissement mais aussi certaines offres bancaires de base. Certaines banques s'engagent à ne pas financer certains secteurs controversés (armement, tabac, énergie fossile) et à diriger leurs ressources vers des projets à impact positif. Green-Got (France) se positionne explicitement comme la "banque pour le climat" qui mesure et publie transparemment l'impact carbone de ses financements.

Pour les étudiants qui souhaitent aligner leurs pratiques financières avec leurs valeurs, le choix d'une banque selon ses engagements ESG est une option concrète. Les outils de comparaison comme Oxfam France qui publie des classements des banques selon leurs pratiques environnementales, ou l'application Rift qui mesure l'impact climatique des banques, permettent une comparaison informée. Ce critère, de plus en plus présent dans les décisions des jeunes consommateurs, contribue à une pression positive sur l'ensemble du secteur bancaire vers plus de responsabilité.

## Les enjeux numériques de la vérification d'identité (KYC)

Le processus KYC (Know Your Customer - connaissance du client) est la procédure par laquelle les banques vérifient l'identité de leurs clients pour prévenir le blanchiment d'argent et le financement du terrorisme. Ce processus, rendu plus rigoureux par la directive européenne anti-blanchiment, est particulièrement visible lors de l'ouverture d'un compte : vérification de l'identité (pièce d'identité), de l'adresse (justificatif de domicile), et parfois de l'origine des fonds (pour les dépôts importants).

Les banques en ligne ont automatisé ce processus via la reconnaissance automatique de documents (OCR) et la vérification biométrique (selfie avec document d'identité). Cette automatisation permet une ouverture de compte en quelques minutes mais peut créer des blocages pour les documents atypiques (passeports de certains pays moins bien reconnus par les algorithmes, justificatifs de domicile non standard). Si le processus automatisé échoue, l'escalade vers une vérification humaine est nécessaire — avec des délais plus longs.
`;

const EXT4_L2 = `
## Les innovations en matière de paiement en France

Le marché du paiement en France est en pleine transformation, avec des innovations qui modifient les usages quotidiens. Les paiements par QR code, popularisés en Asie (WeChat Pay, Alipay), gagnent du terrain en France, particulièrement dans les restaurants et les petits commerces qui cherchent une alternative moins coûteuse aux terminaux de paiement sans contact. Les applications comme Lydia et PayLib (service interbancaire des banques françaises) permettent les paiements entre particuliers via QR code ou numéro de téléphone.

Le paiement via les réseaux sociaux émerge également : certaines plateformes permettent d'intégrer des fonctionnalités de paiement (Instagram Shopping, WhatsApp Pay dans certains pays) qui pourraient se développer en France dans les prochaines années. Ces innovations rendent les frontières entre application de communication et application financière de plus en plus floues.

## Les bénéfices de la régulation bancaire pour les consommateurs

La régulation bancaire, souvent perçue comme contraignante pour les établissements, est en réalité un ensemble de règles qui protègent directement les consommateurs. La garantie des dépôts jusqu'à 100 000 euros (FGDR), les délais de remboursement en cas de fraude, les règles de transparence tarifaire, et les obligations de médiation sont autant de droits concrets pour les déposants. La Banque Centrale Européenne (BCE) et l'Autorité Bancaire Européenne (ABE) supervisent la solidité financière des banques, réduisant le risque systémique.

Pour les étudiants qui confient leurs économies à une banque, comprendre que cette confiance est appuyée par un cadre réglementaire robuste aide à surmonter les réticences naturelles à utiliser des établissements numériques peu connus. La garantie des dépôts signifie concrètement que même si votre banque en ligne fait faillite, vos économies jusqu'à 100 000 euros seront remboursées par le FGDR dans un délai de 7 jours ouvrés — une protection bien plus rapide que la procédure de liquidation judiciaire classique.

## Les services bancaires spéciaux pour les PME et auto-entrepreneurs

Si un étudiant développe une activité entrepreneuriale, la frontière entre ses besoins bancaires personnels et professionnels devient une question pratique. La réglementation fiscale française recommande fortement la séparation des flux financiers personnels et professionnels, même pour les micro-entrepreneurs dont le chiffre d'affaires est faible. Cette séparation facilite la comptabilité, protège en cas de contrôle fiscal, et améliore la crédibilité professionnelle.

Les comptes professionnels pour auto-entrepreneurs proposés par des fintech comme Qonto, Shine, ou Propulse by CA offrent des fonctionnalités spécifiques à la gestion d'entreprise : facturation intégrée, catégorisation des revenus et dépenses professionnels, export comptable pour la déclaration de TVA et les liasses fiscales. Ces outils simplifient considérablement la gestion administrative d'une micro-entreprise et sont souvent proposés à des tarifs très accessibles pour les petites structures.

## La résilience financière : construire un matelas de sécurité

Au-delà de la gestion du compte courant au quotidien, la construction d'une résilience financière est un objectif à long terme que les bonnes habitudes bancaires peuvent soutenir. Un matelas de sécurité — généralement défini comme 3 à 6 mois de dépenses courantes disponibles sur un compte d'épargne liquide — est la fondation de la stabilité financière personnelle. Il protège contre les imprévus (dépense médicale, réparation urgente, perte temporaire de revenus) sans avoir à recourir à un crédit à la consommation coûteux.

Pour un étudiant, constituer ce matelas représente un objectif réaliste à atteindre progressivement. En économisant 10 à 15% de ses revenus mensuels via un virement automatique vers un livret d'épargne, ce matelas peut être constitué en quelques années à partir de revenus modestes. L'automatisation de ce virement — programmé le jour de réception des revenus, avant les dépenses discrétionnaires — est la clé du succès, car elle transforme l'épargne en habitude plutôt qu'en acte volontaire qui peut être reporté.
`;

const EXT4_L3 = `
## L'analyse des besoins bancaires selon les phases de vie

Les besoins bancaires évoluent significativement au fil des phases de vie — les besoins d'un étudiant de première année sont très différents de ceux d'un étudiant en master ou d'un jeune cadre en début de carrière. Cette évolution des besoins justifie une révision périodique de sa stratégie bancaire plutôt qu'une décision initiale définitive.

Pendant les études, les priorités sont l'accès immédiat (ouverture rapide), les frais faibles (budget serré), et la mobilité internationale (Erasmus, voyages). En début de carrière, les priorités évoluent vers la crédibilité (RIB d'une banque reconnue pour le nouveau dlogeur), les produits d'épargne (constitution d'un matelas et d'une épargne) et les crédits (vehicule puis immobilier). En milieu de carrière, la gestion patrimoniale, les investissements, et la préparation de la retraite deviennent centraux. Cette évolution naturelle justify d'avoir une vision à long terme de sa relation bancaire dès le début.

## Le service de courtage en bourse des banques en ligne

Plusieurs banques en ligne françaises se sont forgé une réputation sur le courtage boursier avant de développer leurs offres de banque du quotidien. Boursorama et Fortuneo proposent des plateformes de courtage intégrées avec des frais de transaction parmi les plus compétitifs du marché français. Pour les étudiants qui souhaitent commencer à investir en bourse avec de petits montants, ces plateformes offrent un accès à un large éventail de produits financiers (actions, ETF, obligations, produits dérivés) à des conditions tarifaires avantageuses.

Un PEA (Plan d'Épargne en Actions) ouvert dès les études, même alimenté de petits montants, bénéficiera d'une ancienneté fiscale précieuse dans les années à venir. Les gains sur un PEA ouvert depuis plus de 5 ans bénéficient d'une exonération d'impôt sur le revenu. L'ouverture d'un PEA pendant les études, avec les premières économies des jobs étudiants, est une stratégie d'investissement à long terme que les conseillers patrimoniaux recommandent souvent.

## Les comparatifs annuels des banques et leur interprétation

Des comparatifs indépendants des banques sont publiés annuellement par des associations de consommateurs (UFC-Que Choisir, CLCV) et des médias spécialisés. Ces comparatifs évaluent les banques selon différents critères : tarifs, qualité du service client, fonctionnalités de l'application, satisfaction globale, nombre de réclamations. Interpréter ces comparatifs nécessite de comprendre les méthodologies utilisées — une banque excellente sur les tarifs peut être moins bonne sur le service client.

Les enquêtes de satisfaction client (comme celles publiées par JD Power ou BVA Group pour la France) mesurent la satisfaction des clients existants, ce qui est différent de la comparaison objective des offres. Un client satisfait d'une banque chère peut l'être parce qu'il n'a jamais comparé ses tarifs réels avec les alternatives. Ces nuances méthodologiques doivent être gardées à l'esprit lors de l'interprétation des comparatifs.

## Les tendances à suivre pour les années à venir

Plusieurs tendances structurelles vont continuer à transformer le secteur bancaire dans les prochaines années. La consolidation des néobanques est attendue — plusieurs acteurs qui ont brûlé des fonds sans atteindre la rentabilité seront absorbés ou fermeront. Les partenariats entre banques et plateformes technologiques (Apple Card, Amazon Banking, Google Pay) vont s'approfondir. La banque centrale numérique (euro numérique développé par la BCE) pourrait à terme modifier le paysage des paiements.

L'intelligence artificielle transforme le conseil bancaire — les chatbots bancaires deviennent de plus en plus performants pour répondre aux questions courantes, et les services de conseil patrimonial algorithmique (robo-advisors) se démocratisent. Pour les étudiants qui choisissent leur banque aujourd'hui, choisir un établissement qui investit dans l'innovation et la technologie est un gage de pertinence dans un futur proche.

## Récapitulatif pratique pour faire son choix bancaire

En conclusion, le choix bancaire optimal en France pour un étudiant ou un arrivant en France repose sur une démarche structurée : identifier ses priorités (coût, accessibilité, fonctionnalités, services spécifiques), comparer les offres adaptées à ces priorités, ouvrir le compte ou les comptes choisis avec les bons documents préparés à l'avance, et surveiller que les conditions de l'offre choisie sont remplies dans le temps. Cette démarche, appliquée avec la même rigueur qu'un autre choix de consommation important (logement, téléphone), produit toujours de meilleurs résultats que le choix impulsif de la première banque venue.
`;

const EXT4_L4 = `
## Les outils de simulation pour calculer la rentabilité des offres de bienvenue

Les offres de bienvenue des banques en ligne (primes à l'ouverture, mois de carte gratuits, cashback sur les premières transactions) peuvent être calculées avec précision pour déterminer leur valeur réelle. Plusieurs sites spécialisés dans le suivi des offres bancaires proposent des simulateurs qui calculent la valeur nette d'une offre de bienvenue en tenant compte des conditions à remplir (domiciliation, nombre de transactions, délai), des frais de base de l'offre, et de la durée d'engagement éventuelle.

Ces simulateurs permettent de comparer la valeur réelle de différentes offres simultanément et d'identifier la plus avantageuse pour son profil. Une prime d'ouverture de 80 euros avec une obligation de 3 transactions par mois et une domiciliation sur 6 mois peut être moins avantageuse qu'une prime de 50 euros sans conditions pour un étudiant avec des revenus irréguliers.

## L'impact de la banque sur son score de crédit futur

Le concept de "credit score" (score de crédit) est moins développé en France qu'aux États-Unis ou au Royaume-Uni, mais il existe des mécanismes analogues. Le FICP (Fichier National des Incidents de Remboursement des Crédits aux Particuliers) et le FCC (Fichier Central des Chèques) centralisent les incidents bancaires. Les banques consultent ces fichiers lors des demandes de crédit.

Plus subtlement, les banques évaluent la qualité de la relation bancaire avec leurs propres clients lorsqu'elles examinent une demande de crédit. Un client qui gère son compte sans incidents depuis plusieurs années, qui épargne régulièrement, et qui utilise activement les services de la banque est évalué positivement. Ce "scoring interne" invisible influence les décisions de crédit — d'où l'importance d'une gestion bancaire irréprochable dès les premières années comme étudiant.

## Les transferts d'argent vers les pays en développement

Pour les étudiants étrangers qui envoient des remises à leur famille dans des pays en développement (un flux mondial de plus de 700 milliards de dollars annuels), le choix du service de transfert a un impact économique direct sur les sommes effectivement reçues. Les transferts via les banques traditionnelles sont souvent les plus coûteux (frais de virement SWIFT + marge sur le taux de change). Les services spécialisés (Wise, Western Union, MoneyGram, Wave) proposent des alternatives avec des frais plus transparents et des taux de change plus avantageux.

Wise (anciennement TransferWise) est généralement reconnu comme l'option la plus économique pour les transferts vers les pays liés par SEPA et vers de nombreux pays hors zone euro. La comparaison du coût total (frais de service + écart au taux de change officiel) est l'indicateur à utiliser pour choisir le service le plus avantageux pour un corridor spécifique (par exemple, France vers Maroc, ou France vers Sénégal). Le site Monito.com propose une comparaison en temps réel des meilleurs services de transfert pour chaque corridor.

## Les comptes bancaires pour les mineurs et leur transition vers l'autonomie

Pour les étudiants qui ont des frères et sœurs mineurs dans le foyer familial, ou pour les jeunes adultes qui se souviennent de leurs premières expériences bancaires, comprendre l'évolution des offres bancaires pour les jeunes est instructif. Les offres pour les mineurs (cartes Pixpay, Kard, Green-Got jeunes) proposent une expérience bancaire supervisée avec un contrôle parental intégré.

La transition progressive vers l'autonomie bancaire — d'abord une carte prépayée rechargeable, puis un compte courant avec limites parentales, puis un compte entièrement autonome — est un processus d'éducation financière qui peut durer plusieurs années. Les banques en ligne ont facilité cette transition en proposant des interfaces très intuitives qui rendent la gestion bancaire accessible aux plus jeunes.

## Les garanties légales et les recours disponibles en cas de litige

Le cadre légal de protection des consommateurs bancaires en France est un des plus développés en Europe. La jurisprudence des tribunaux français est riche en décisions qui ont renforcé les droits des clients face aux pratiques abusives des banques. Les principales protections incluent : la transparence tarifaire obligatoire (liste des tarifs publiée et accessible), le délai de rétractation de 14 jours pour les contrats à distance, l'obligation de mise en garde pour les crédits, et la protection contre les conditions contractuelles abusives.

En cas de litige non résolu par le service de médiation de la banque, le Tribunal de Proximité (pour les litiges inférieurs à 10 000 euros) ou le Tribunal Judiciaire est compétent. Des associations de consommateurs comme UFC-Que Choisir ou la CLCV proposent un accompagnement gratuit ou peu coûteux pour les clients qui souhaitent contester une pratique bancaire abusive. Cette protection institutionnelle est un filet de sécurité solide pour tous les clients bancaires.
`;

const EXT4_L5 = `
## La gestion de compte pendant les périodes de difficultés financières

Tous les étudiants peuvent traverser des périodes de difficultés financières — dépenses imprévues, retard de versement d'une aide, panne d'équipement importante. Dans ces moments, la relation avec sa banque devient cruciale. La plupart des banques disposent de procédures pour accompagner leurs clients en difficulté temporaire : autorisation de découvert exceptionnelle, report d'une échéance de crédit, restructuration d'une dette.

La clé dans ces situations est la proactivité : contacter sa banque avant que la situation dégénère, informer le conseiller des difficultés à venir, et demander des solutions de façon formelle. Une banque qui est informée d'une situation difficile en amont pourra proposer des solutions ; une banque qui découvre le problème après des incidents de paiement sera moins accommodante. Cette proactivité dans la communication est un comportement bancaire exemplaire qui protège la relation à long terme.

## Les conventions de compte et les modifications unilatérales

Les banques peuvent modifier les conditions de leur convention de compte, y compris les tarifs, avec un préavis de deux mois. Cette modification unilatérale, autorisée par la loi, peut affecter les clients qui ont choisi une banque pour ses conditions tarifaires avantageuses. L'historique récent montre que certaines néobanques ont augmenté leurs tarifs après avoir acquis une base clients importante — ce qui a provoqué des migrations vers des concurrents.

La vigilance face aux notifications de modification des conditions est donc importante. Lire les emails de la banque qui annoncent des changements de conditions, évaluer l'impact réel sur ses frais, et comparer avec les alternatives disponibles au moment de la modification est la démarche recommandée. Le préavis de deux mois laisse suffisamment de temps pour agir si les nouvelles conditions ne conviennent pas.

## La compréhension des données bancaires par les tiers

Un développement récent dans le secteur bancaire est l'utilisation des données de transactions bancaires par des tiers avec le consentement du client. Des services de credit scoring alternatifs (comme Scoring, une startup française) analysent les données de comptes bancaires pour estimer la solvabilité des emprunteurs, offrant une alternative aux critères classiques (salaire fixe, CDI). Cette approche peut bénéficier aux travailleurs indépendants et aux étudiants qui ont des revenus atypiques mais une gestion financière saine.

Ces services de scoring alternatif s'appuient sur le cadre Open Banking (DSP2) pour accéder aux données bancaires avec le consentement explicite du client. Comprendre que ses données de transactions peuvent avoir une valeur dans des démarches de crédit futures incite à une gestion bancaire exemplaire dès les premières années — un historique de transactions cohérent et sans incidents est un actif immatériel dans la relation avec les institutions financières.

## La gestion des frais bancaires professionnels

Pour les étudiants qui alternent entre le statut étudiant et une activité professionnelle (stage long, alternance, création d'entreprise), la question de la déductibilité fiscale des frais bancaires professionnels peut se poser. Pour les travailleurs indépendants et les micro-entrepreneurs, les frais du compte professionnel (frais de tenue de compte, frais de carte associée, frais de virements émis dans le cadre professionnel) sont déductibles du chiffre d'affaires en régime réel.

Cette déductibilité justifie d'avoir un compte professionnel séparé du compte personnel, même pour une micro-entreprise avec un faible chiffre d'affaires. Elle permet également de comptabiliser exactement les frais bancaires professionnels dans la déclaration d'activité. Cette pratique, recommandée par les experts-comptables et les services des impôts, est aussi une bonne habitude de gestion qui prépare à une organisation professionnelle plus rigoureuse.
`;

const EXT4_L6 = `
## La bancarisation comme vecteur d'inclusion sociale et économique

Au-delà de la dimension pratique individuelle, la bancarisation est un enjeu d'inclusion sociale important. Les personnes non bancarisées ou sous-bancarisées (qui n'ont accès qu'au compte de base minimum) sont exclues de nombreux mécanismes économiques : difficulté à trouver un logement sans RIB, impossibilité de constituer un dossier de crédit, accès limité aux plateformes de commerce en ligne et de services. Cette exclusion financière crée un cercle vicieux qui perpétue les difficultés économiques.

Les politiques publiques de bancarisation (droit au compte, offre spécifique de clientèle à tarifs plafonnés, partenariats avec les associations d'aide à l'insertion) visent à réduire cette exclusion. Pour les étudiants qui travaillent dans des secteurs à vocation sociale ou qui s'intéressent aux politiques publiques, comprendre la dimension sociale de la bancarisation est un éclairage important sur un enjeu de société contemporain.

## Le bilan carbone des services bancaires

La banque verte est une préoccupation croissante. Les services bancaires numériques ont un impact environnemental non nul — les centres de données qui hébergent les systèmes d'information bancaires consomment d'importantes quantités d'énergie. Le passage aux applications mobiles et aux relevés numériques a réduit la consommation de papier mais augmenté la consommation numérique. Les fintechs qui se réclament de l'éco-responsabilité (Green-Got, Tomorrow Bank en Allemagne) mesurent et compensent leur empreinte carbone numérique.

Pour les étudiants qui prennent en compte l'impact environnemental dans leurs choix de consommation, le choix bancaire peut être cohérent avec cette démarche. Outre le bilan carbone opérationnel de la banque, l'impact climatique de ses investissements est le critère le plus important — une banque qui finance des projets d'énergies renouvelables a un impact climatique positif qui dépasse largement les économies d'énergie opérationnelle.

## Les communautés en ligne pour les conseils bancaires

Les communautés en ligne constituent une ressource précieuse pour les décisions bancaires. Des forums comme Reddit (r/france, r/personalfinance_france), des groupes Facebook thématiques, et des chaînes YouTube spécialisées dans la finance personnelle française (Cashlab, Heu!reka, Finary) regorge de témoignages d'utilisateurs sur les banques qu'ils utilisent, les problèmes rencontrés, et les astuces pour optimiser sa stratégie bancaire.

Ces communautés sont particulièrement utiles pour les situations atypiques — comment ouvrir un compte avec un titre de séjour temporaire, quelle banque accepte les virements depuis certains pays, comment gérer un compte français depuis l'étranger. Les experiences partagées par d'autres utilisateurs dans des situations similaires constituent une intelligence collective irremplaçable pour naviguer dans les subtilités pratiques du système bancaire français.

## L'avenir proche : l'euro numérique et son impact

L'euro numérique, en cours de développement par la Banque Centrale Européenne (BCE), est une monnaie numérique de banque centrale (CBDC) qui pourrait être disponible d'ici à la fin des années 2020. Contrairement aux crypto-actifs, l'euro numérique sera émis et garanti par la BCE, avec la même valeur et la même statut légal que les billets en euros. Il offrira la possibilité de paiements programmables, de transactions décentralisées, et potentiellement de rémunérations directes de certains montants.

L'impact de l'euro numérique sur les banques commerciales reste à préciser — des plafonds de détention sont envisagés pour éviter une désintermédiation bancaire massive. Pour les utilisateurs, l'euro numérique représentera une option supplémentaire de paiement et de stockage de valeur, sans se substituer aux comptes bancaires classiques. Suivre l'avancement de ce projet, régulièrement mis à jour sur le site de la BCE, est une façon de rester informé sur les évolutions à venir du paysage financier européen.
`;

await appendAndPatch('4c9116f9-7601-44df-b251-025a5ef7e17c', EXT4_L1);
await appendAndPatch('5c36682c-cb31-424c-a796-8c3a1973783a', EXT4_L2);
await appendAndPatch('149737e3-08ca-4f30-88a3-6a4de0e61448', EXT4_L3);
await appendAndPatch('831ceaae-f8f0-4bdc-a84e-f6b80c8c54d5', EXT4_L4);
await appendAndPatch('869dc5a2-45ab-439d-b1e7-436a9b056181', EXT4_L5);
await appendAndPatch('6fd28914-d398-4ff8-9ec8-cf4f7207bbad', EXT4_L6);
