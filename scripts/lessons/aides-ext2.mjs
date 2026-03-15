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

const E2_L1 = `
## L'ingénierie sociale appliquée aux arnaques étudiantes

L'ingénierie sociale — l'art de manipuler psychologiquement les individus pour obtenir d'eux des informations ou des actions — est au cœur de la plupart des arnaques ciblant les étudiants. Les arnaqueurs exploitent des biais psychologiques bien documentés : l'autorité prétendue (se faire passer pour un agent de la CAF ou du CROUS), la réciprocité (offrir une information gratuite en échange d'informations personnelles), la rareté (insister sur le nombre limité de places dans un programme), et la peur de manquer une opportunité.

Reconnaître ces mécanismes de manipulation est la meilleure protection contre eux. Quand une communication génère un sentiment d'urgence, de peur ou d'excitation inhabituelle, c'est précisément le moment de ralentir et de vérifier les faits de façon calme et méthodique. Contacter directement l'organisme prétendument à l'origine de la communication — par ses canaux officiels, pas ceux fournis dans le message suspect — est la démarche de vérification la plus sûre.

## Les pratiques de sécurité numérique pour la protection des données d'aide

La demande d'aides en ligne nécessite la transmission de données personnelles sensibles. Quelques pratiques de sécurité numérique simples réduisent significativement le risque de vol ou de détournement de ces données. L'utilisation d'un mot de passe fort et unique pour son compte CAF, son espace étudiant CROUS et chaque plateforme administrative est la première précaution. Un gestionnaire de mots de passe (Bitwarden, 1Password) permet de gérer des mots de passe complexes sans avoir à les mémoriser.

La vérification que la connexion HTTPS est active (cadenas visible dans la barre d'adresse) avant de saisir des données personnelles est un réflexe à développer. Ne jamais saisir ses identifiants CAF ou CROUS depuis un réseau WiFi public non sécurisé est une mesure de prudence basique — les cafés, gares et bibliothèques offrent souvent des réseaux WiFi gratuits dont la sécurité est insuffisante pour les connexions aux services administratifs. Préférer sa connexion mobile (4G/5G) ou un réseau WiFi sécurisé privé pour ces démarches.

## La sensibilisation des proches aux risques d'arnaques

La prévention des arnaques ne concerne pas seulement l'étudiant lui-même — ses proches, et notamment ses parents qui perçoivent peut-être encore des allocations familiales ou qui participent au financement de ses études, peuvent également être ciblés. Des arnaques ont exploité l'inquiétude parentale pour obtenir des informations bancaires ou des virements d'urgence — en contactant les parents en se faisant passer pour une administration française et en prétendant que leur enfant est en difficulté et a besoin d'un virement urgent.

Sensibiliser ses proches à ces risques, convenir avec eux d'un protocole de vérification en cas d'appel ou d'email urgent (rappeler l'étudiant directement en cas de doute), et les renseigner sur le fait que les administrations françaises ne demandent jamais de virement d'urgence par téléphone ou email sont des précautions familiales importantes. Cette communication préalable peut prévenir des situations de panique et des pertes financières évitables.
`;

const E2_L2 = `
## Le prêt interétudiant et les formes alternatives de financement solidaire

Parallèlement aux prêts bancaires formels, des formes de financement solidaire entre étudiants se développent, portées par des associations et des plateformes de prêt entre particuliers. Ces dispositifs, encore marginaux en France, permettent à des étudiants diplômés ou en emploi de prêter à des étudiants juniors dans des conditions plus souples que les banques traditionnelles.

La plateforme Prêt de Main, active dans certaines écoles de commerce, met en relation des anciens élèves qui souhaitent soutenir les étudiants actuels avec des prêts à taux réduit ou à taux zéro. Ces dispositifs d'entraide intra-communautaire, basés sur la solidarité entre membres d'une même institution, offrent une alternative humaniste au crédit bancaire impersonnel. Les conditions de remboursement sont souvent plus flexibles et les intérêts nuls ou très bas, car le motif est la solidarité davantage que le profit.

## Les critères de choix d'une banque pour son prêt étudiant

Choisir la bonne banque pour son prêt étudiant est une décision qui mérite une comparaison sérieuse au-delà des seuls taux d'intérêt. Plusieurs critères complémentaires doivent influencer le choix. La première est la flexibilité du différé de remboursement — peut-on choisir librement la durée du différé et la modifier ultérieurement si la situation professionnelle post-diplôme tarde à se stabiliser ? La deuxième est la politique en cas de difficulté de remboursement — la banque propose-t-elle des solutions de réaménagement si l'emprunteur traverse une période difficile après les études ?

La troisième est la relation bancaire globale — ouvrir son prêt dans une banque peut encourager à y domicilier l'ensemble ses finances, avec des avantages potentiels (offre groupée, avantages clients) mais aussi des contraintes (fidélité à une banque dont l'offre n'est pas forcément la meilleure pour tous les services). La quatrième est la qualité du service client — lors d'une difficulté, avoir un interlocuteur réactif et compétent est plus important que quelques dizièmes de point de pourcentage d'intérêt.

## Le financement des études par l'employeur via la formation professionnelle

Pour les étudiants qui préparent une formation diplômante en alternance ou en formation continue, les dispositifs de financement par l'employeur offrent une voie de financement qui supprime le dilemme « études ou revenus ». L'apprentissage (contrat d'apprentissage) permet de préparer un diplôme du CAP au Master en statut salarié, avec un salaire allant de 27% à 100% du SMIC selon l'âge, la convention collective et le niveau du diplôme. Ces revenus suffisent souvent à financer les frais de vie sans emprunt.

Le CPF (Compte Personnel de Formation) financé par les cotisations des années de travail passées peut également financer certaines formations diplômantes ou certifiantes pour les étrangers qui ont déjà travaillé en France. Pour un étudiant qui reprend des études après une première expérience professionnelle en France, le CPF peut couvrir tout ou partie des frais de formation, selon les droits accumulés.

## Les gardes-fous contre le surendettement étudiant

Le surendettement des jeunes, en partie alimenté par des crédits mal calibrés contractés pendant les études, est un phénomène documenté en France avec des conséquences durables. La Banque de France propose un dispositif de traitement du surendettement (dossier de surendettement) pour les personnes qui ne peuvent plus faire face à leurs dettes, mais la procédure est longue et lourde de conséquences. Prévenir le surendettement est toujours préférable.

Les signaux précoces de difficultés de remboursement — retards réguliers, utilisation excessive du découvert autorisé, recours à un nouveau crédit pour rembourser un ancien — doivent déclencher une réaction immédiate : contact avec la banque pour renégocier, contact avec une association d'aide aux débiteurs (Crésus, Points Conseil Budget du gouvernement), et si nécessaire, dossier de surendettement si la situation dépasse les capacités de régulation individuelle.
`;

const E2_L3 = `
## Le rôle des assistantes sociales universitaires CROUS

Les assistantes sociales des CROUS jouent un rôle central dans l'accès aux aides sociales étudiantes. Ces professionnelles du travail social, employées par les CROUS, ont pour mission d'accompagner les étudiants en difficulté financière, sociale ou psychologique dans les démarches administratives et l'accès aux dispositifs d'aide. Un rendez-vous avec une assistante sociale CROUS est le point d'entrée recommandé pour tout étudiant qui traverse une période difficile.

L'assistante sociale CROUS peut instruire directement les demandes d'aides d'urgence du CROUS, orienter vers d'autres ressources locales (assistantes sociales de la CAF, des mutuelles étudiantes, des structures locales), et accompagner dans la constitution de dossiers complexes (demande d'APL, demande de bourse, recours sur des décisions d'aide refusées). Elle connaît l'ensemble des ressources disponibles dans son secteur géographique et peut identifier des aides que l'étudiant ne connaissait pas.

## L'accompagnement psychologique et son lien avec les difficultés financières

Les difficultés financières ont souvent un impact significatif sur la santé mentale — anxiété, dépression, baisse de concentration qui affecte les résultats académiques, et dans les cas graves, abandon des études. Reconnaître ce lien et ne pas laisser les difficultés financières s'aggraver sans traitement est important pour la santé globale de l'étudiant.

Les services de santé universitaires (SUMPPS dans les universités) et les Maisons des Étudiants proposent souvent des consultations psychologiques gratuites ou à tarif réduit pour les étudiants. Ces services permettent de traiter l'impact psychologique des difficultés financières sans alourdir le budget. Un étudiant qui se retrouve dans une spirale d'anxiété financière qui affecte ses études doit considérer ces ressources comme complémentaires aux aides financières — traiter les deux dimensions simultanément est la clé d'une sortie durable de la crise.

## Les aides d'urgence liées aux catastrophes naturelles ou personnelles

Des aides d'urgence spécifiques sont disponibles pour les étudiants confrontés à des catastrophes naturelles (inondation, incendie du logement) ou à des événements personnels dramatiques (hospitalisation prolongée, catastrophe familiale) qui perturbent brutalement leurs conditions d'études. Les fonds sociaux universitaires — gérés soit par les CROUS, soit directement par les universités — peuvent intervenir rapidement pour couvrir les besoins urgents (relogement temporaire, remplacement de matériel académique détruit, frais médicaux imprévus).

Ces aides exceptionnelles, par nature réservées aux situations véritablement exceptionnelles, peuvent être décisives pour permettre à un étudiant de poursuivre ses études malgré une catastrophe. La démarche d'accès est similaire aux aides d'urgence classiques — contact rapide avec l'assistante sociale du CROUS, constitution d'un dossier avec les documents attestant de la situation (rapport police ou pompiers pour un incendie, certificat médical pour une hospitalisation), et demande express.

## L'orientation vers des ressources locales méconnues

Au-delà des structures nationales, chaque ville dispose de ressources locales d'aide sociale aux étudiants qui ne sont pas toujours répertoriées dans les guides nationaux. Les Centres Communaux d'Action Sociale (CCAS) des villes où se trouvent les universités proposent souvent des aides alimentaires d'urgence, des fonds de solidarité pour les factures d'eau et d'électricité, et parfois des prêts à taux zéro pour les besoins urgents. Ces ressources municipales sont accessibles à tous les résidents, y compris les étudiants.

Les associations locales de solidarité — banques alimentaires, structures d'accueil de jour — peuvent également intervenir dans des situations extrêmes de précarité. Ces structures fonctionnent sur inscription et évaluation de la situation sociale. L'assistante sociale du CROUS ou la mairie de résidence est l'interlocuteur idéal pour identifier ces ressources locales et préparer les démarches d'accès.
`;

const E2_L4 = `
## Le Fonds National d'Aide d'Urgence : au-delà des aides CROUS

Le Fonds National d'Aide d'Urgence (FNAU) est un mécanisme complémentaire aux aides directes du CROUS qui permet de répondre à des situations ne rentrant pas dans les catégories standard des aides habituelles. Ce fonds est alimenté par des crédits spécifiques de l'État destinés aux situations les plus difficiles — étudiants en situation de rupture familiale, étudiants victimes de violences conjugales, étudiants sans domicile fixe ou à la limite de la rue.

L'accès au FNAU se fait via l'assistante sociale du CROUS après évaluation approfondie de la situation. Les montants peuvent être plus importants que les aides d'urgence habituelles, et les critères sont appréciés avec une grande souplesse pour répondre à des situations véritablement exceptionnelles. Ce dispositif est le filet de sécurité de dernier recours du système d'aide aux étudiants — il intervient quand tous les autres dispositifs ont atteint leurs limites.

## Les bourses de mérite des grandes écoles et universités

Les établissements d'enseignement supérieur disposent souvent de leurs propres bourses et prix de mérite, financées par leurs fondations ou par des mécènes privés. Ces bourses récompensent l'excellence académique et peuvent être attribuées indépendamment des ressources financières — elles ciblent les meilleurs étudiants plutôt que les plus pauvres. Pour les étudiants qui combinent excellence académique et précarité financière, ces bourses de mérite constituent une ressource supplémentaire qui s'ajoute aux aides sociales.

La recherche de ces bourses de mérite nécessite de s'informer directement auprès du service des bourses de son établissement et de surveiller les appels à candidatures publiés dans les communications internes. Les délais de candidature sont souvent courts (quelques semaines) et peu de candidats se présentent par méconnaissance du dispositif — ce qui signifie que les chances d'obtention sont relativement élevées pour les candidats bien préparés.

## La santé financière comme indicateur du bien-être étudiant

La recherche académique sur le bien-être étudiant montre régulièrement que les difficultés financières sont l'un des principaux facteurs de décrochage universitaire en France. Un étudiant qui consacre une énergie mentale excessive à la gestion de ses difficultés financières — anxiété permanente sur la capacité à payer le prochain loyer, jobs à temps partiel excessifs qui empiètent sur le temps d'études — a des performances académiques significativement moins bonnes qu'un étudiant dans une situation financière stable.

Prendre soin de sa santé financière est donc logiquement lié à la réussite académique. Investir du temps et de l'énergie dans l'optimisation de ses ressources — en connaissant les aides disponibles, en évitant les pièges (arnaques, endettement excessif), et en maintenant un budget équilibré — est un investissement direct dans sa réussite académique et professionnelle.

## Les visites des services étudiants et la proactivité administrative

Un constat récurrent dans les études sur l'accès aux aides étudiantes est que les aides ne vont pas automatiquement vers ceux qui en ont le plus besoin — il faut les demander activement, en navigant dans un système administratif parfois complexe. Les étudiants qui connaissent les dispositifs existants et qui effectuent les démarches en temps utile obtiennent les ressources auxquelles ils ont droit ; ceux qui ne connaissent pas ou qui n'osent pas demander passent à côté d'aides significatives.

La proactivité administrative — aller chercher l'information sur les aides existantes plutôt que d'attendre qu'on vous les propose — est une compétence pratique qui se développe. La première visite au service de la vie étudiante de son université ou à l'assistante sociale du CROUS, même en dehors de toute situation de crise, permet de connaître le panorama des ressources disponibles et de savoir à qui s'adresser si une difficulté survient. Cette préparation calme et préventive est infiniment plus confortable que la découverte en urgence d'un système inconnu alors qu'on est dans la détresse.
`;

const E2_L5 = `
## La vie en colocation et ses implications pour les aides CAF

La colocation est une forme de logement très répandue parmi les étudiants français, mais ses implications pour les aides au logement sont complexes. En théorie, chaque colocataire doit déposer une demande d'aide au logement séparée auprès de la CAF, en indiquant sa quote-part du loyer total. En pratique, les situations de colocation créent souvent des confusions sur la déclaration à la CAF, notamment quand le bail est au nom d'un seul colocataire ou quand les parts de loyer ne sont pas équitablement reparties.

Une colocation avec un bail individuel pour chaque colocataire est la situation la plus simple administrativement — chaque locataire déclare son propre loyer et sa propre situation à la CAF. Quand un seul bail couvre l'ensemble du logement (bail collectif), la CAF calcule l'aide pour chaque colocataire sur la base d'une quote-part du loyer selon le nombre de colocataires (loyer total divisé par le nombre de personnes). Il est important de déclarer correctement cette situation à la CAF lors de la demande pour éviter les erreurs de calcul qui créeraient des indus ultérieurs.

## Les résidences alternatives aux logements CROUS : foyers, internats

En dehors des résidences universitaires CROUS, d'autres formes de logement à coût maîtrisé existent pour les étudiants. Les foyers jeunes travailleurs (FJT), gérés par des associations sous l'égide du Mouvement Habitat des Jeunes (MHJ), proposent des logements meublés pour les 16-30 ans (jeunes actifs et étudiants) à des tarifs généralement inférieurs aux prix du marché privé. Les charges et parfois les repas sont inclus dans le loyer, simplifiant la gestion budgétaire.

Les résidences sociales étudiantes gérées par des associations comme ADEF ou Adoma proposent également des logements meublés à tarifs modérés pour les étudiants en difficulté. L'accès à ces structures est conditionné à une situation sociale difficile et à une vérification de ressources. Les listes d'attente peuvent être longues, mais s'inscrire dès le début des études augmente les chances d'obtenir un logement dans des délais raisonnables.

## L'aide au logement pour les colocations intergénérationnelles

Les colocations intergénérationnelles — où un étudiant partage le logement d'une personne âgée en échange d'une présence rassurante et parfois de petits services — sont une forme de logement peu coûteuse qui bénéficie d'aides spécifiques. Ce dispositif, encouragé par le gouvernement via des agences comme Ensemble2Générations, permet aux étudiants de se loger gratuitement ou pour un loyer symbolique en échange d'une présence de nuit et parfois d'une aide aux tâches quotidiennes.

L'aide au logement de la CAF peut être perçue même dans ce cadre si une convention de colocation intergénérationnelle formelle est signée et que le logement répond aux critères d'éligibilité. La convention fixe les droits et obligations des deux parties — les services attendus, les horaires de présence, les règles de vie commune — et constitue le document de base à présenter à la CAF pour la demande d'aide.

## Les difficultés spécifiques des étudiants sans logement fixe

Une situation particulièrement difficile concerne les étudiants sans domicile fixe (SDF étudiants) — ceux qui vivent dans leur voiture, temporairement hébergés par des amis, ou dans des logements insalubres. Cette réalité, plus fréquente qu'on ne le pense, crée des obstacles pratiques à la poursuite des études et à l'accès aux aides : sans adresse fixe, il est difficile d'ouvrir un compte bancaire, de s'inscrire à la CAF, ou de recevoir un courrier officiel.

Des solutions existent pour contourner ces obstacles. La domiciliation administrative auprès d'une mairie (CCAS) permet à une personne sans domicile fixe d'avoir une adresse officielle pour les courriers administratifs. Les CROUS disposent d'un contingent de logements d'urgence pour les étudiants dans ces situations extrêmes. Les associations d'aide aux personnes sans domicile (Nuit de la Solidarité, Samusocial) peuvent orienter vers des ressources d'hébergement temporaire adaptées aux profils étudiants.
`;

const E2_L6 = `
## L'éducation financière comme investissement sur le long terme

L'éducation financière — la connaissance des mécanismes économiques, des droits et obligations dans les relations financières, et des outils de gestion budgétaire — est une compétence rarement enseignée à l'école mais fondamentale dans la vie adulte. Les étudiants qui développent cette compétence pendant leurs études sont mieux équipés pour faire des choix financiers éclairés tout au long de leur vie : contrat de travail, crédit immobilier, épargne pour la retraite, assurances.

Des MOOCs gratuits sur FUN MOOC (fun-mooc.fr) couvrent les bases de l'éducation financière personnelle en français. Des livres accessibles comme "L'Investisseur Intelligent" de Benjamin Graham (pour les plus avancés) ou "La Semaine de 4 Heures" de Tim Ferriss (pour la productivité et la gestion des revenus) sont disponibles en bibliothèque universitaire. L'Autorité des Marchés Financiers (AMF) propose également des ressources pédagogiques gratuites sur son site pour le grand public.

## L'optimisation fiscale légale pour les étudiants qui travaillent

Un étudiant qui travaille à temps partiel pendant ses études peut optimiser sa situation fiscale de façon légale et significative. La principale optimisation est le rattachement fiscal au foyer des parents jusqu'à l'âge de 25 ans — si ce rattachement est plus avantageux à la fois pour les parents (majoration du quotient familial) et pour l'étudiant (pas d'imposition personnelle). La simulation sur le site impots.gouv.fr permet de comparer les deux options avant de faire son choix en début d'année fiscale.

Pour les étudiants qui sont fiscalement indépendants, l'exonération des revenus de stage inférieure à un seuil (la rémunération des stages conventionnés est exonérée d'impôt jusqu'à 20 815 euros en 2024), l'exonération des revenus d'emploi des moins de 26 ans jusqu'à un plafond, et la déductibilité de certaines dépenses d'études dans certaines conditions sont des dispositions fiscales favorables à connaître.

## Les indicateurs de bonne santé financière à long terme

Définir ce que signifie une bonne santé financière pour un étudiant — et comment l'évaluer au fil du temps — permet de savoir si on est sur la bonne trajectoire. Quelques indicateurs simples : le solde bancaire ne descend jamais sous zéro (pas de découvert autorisé utilisé régulièrement) ; les dépenses mensuelles sont systématiquement inférieures aux revenus mensuels ; une épargne de précaution d'au moins un mois de dépenses existe en permanence ; le niveau d'endettement reste raisonnable par rapport aux revenus futurs prévus.

Ces indicateurs ne sont pas des objectifs parfois inaccessibles pour un étudiant aux ressources limitées, mais des directions de travail progressives. Un étudiant qui commence ses études avec des finances tendues et qui, au fil des mois, améliore chacun de ces indicateurs est en bonne trajectoire financière, même si la situation n'est pas encore parfaite. L'important est la tendance — une amélioration régulière, aussi lente soit-elle, vaut mieux qu'une stagnation ou une détérioration de la situation financière.

## Faire appel au médiateur de la CAF ou du CROUS en cas de désaccord

Quand une décision de la CAF ou du CROUS sur les aides attribuées semble injuste ou erronée, des voies de recours formelles existent qui permettent de contester cette décision. Pour la CAF, la première voie est la demande de révision du dossier auprès du service concerné, en fournissant les pièces justificatives complémentaires qui n'auraient pas été prises en compte. Si cette révision n'aboutit pas, la saisine de la Commission de Recours Amiable (CRA) de la CAF est l'étape suivante.

Pour les bourses du CROUS, les recours passent par la commission d'appel du CROUS régional. Pour les étudiants qui s'estiment victimes d'une décision discriminatoire ou injuste, le Défenseur des Droits peut être saisi gratuitement, par courrier ou en ligne. Ces recours, bien que longs, sont parfois couronnés de succès et permettent d'obtenir les aides auxquelles on avait droit.
`;

await appendAndPatch('d96c9d24-2b32-4fa0-9625-2217d74a7650', E2_L1);
await appendAndPatch('01449051-1879-46c9-96a5-ce20931ac76d', E2_L2);
await appendAndPatch('3c2044b9-79ea-470a-994a-94117071a70e', E2_L3);
await appendAndPatch('0f811457-418d-4a18-b647-d5882e0b1a80', E2_L4);
await appendAndPatch('d2d94fad-5d4d-45c8-a73b-4420bdb2a31d', E2_L5);
await appendAndPatch('2fab22b0-0b45-47b9-9322-fe943a74380e', E2_L6);
