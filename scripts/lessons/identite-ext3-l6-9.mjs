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

const EXT3_L6 = `
## Les documents d'identité dans le contexte de l'emploi informel

Le travail informel — travail non déclaré, travail dissimulé — est une réalité économique que certains étrangers en France rencontrent, parfois par manque d'alternatives dans leur situation administrative. L'employeur qui embauche une personne sans vérifier son titre de travail s'expose à des sanctions pénales et administratives importantes. L'étranger qui travaille sans autorisation de travail court le risque de voir son dossier de titre de séjour fragilisé par cet antécédent lors d'un renouvellement futur.

La tentation du travail informel pour subsister en attendant une régularisation administrative est compréhensible dans certaines situations de détresse économique, mais les conséquences à long terme sur la régularité du séjour peuvent être sévères. Des associations d'aide aux étrangers et des services sociaux peuvent aider à trouver des solutions légales pour traverser les périodes creuses administratives, notamment l'Aide Sociale à l'Enfance pour les familles avec enfants, les aides d'urgence des CCAS (Centres Communaux d'Action Sociale), et les banques alimentaires.

## Les documents d'identité dans les procédures d'asile

La procédure de demande d'asile est intimement liée à la question de l'identité et des documents d'identité. Lors du dépôt d'une demande d'asile auprès de l'OFPRA, la personne doit décliner son identité et, si elle en dispose, présenter ses documents d'identité. Les documents présentés sont examinés par des agents de l'OFPRA formés à la vérification documentaire, non pas pour l'entrée en France, mais pour établir l'identité du demandeur et vérifier sa nationalité.

Un demandeur d'asile sans documents d'identité n'est pas pour autant dans une situation bloquée — l'OFPRA instruit les demandes d'asile même en l'absence de documents, sur la base du récit et des autres éléments de preuve. Cependant, l'absence de documents peut compliquer la vérification des allégations relatives au pays de nationalité et à la persécution. La représentation par un avocat ou une association spécialisée (France Terre d'Asile, Forum Réfugiés, La Cimade) est fortement recommandée pour les personnes dont la situation documentaire est complexe.

## La carte de résident et l'identité à long terme

La carte de résident représente une étape importante dans la construction de l'identité administrative à long terme en France. Son titulaire est reconnu comme résident durable de la France, avec une stabilité administrative de dix ans qui lui permet de planifier sa vie professionnelle, familiale et sociale sans l'incertitude des renouvellements annuels. Cette stabilité administrative est perçue par les institutions — banques, bailleurs, employeurs — comme un signal positif de durabilité de la présence en France.

La transition vers la carte de résident marque aussi un changement psychologique dans la relation à la France. Après des années de statuts temporaires et de renouvellements stressants, la carte de résident apporte une forme de sécurité qui transforme l'expérience quotidienne de la vie en France. Les titulaires de carte de résident témoignent souvent d'une réduction significative du stress administratif et d'une plus grande sérénité dans leurs projets de vie — un bénéfice difficile à quantifier mais réel et important pour le bien-être.

## Les implications de la perte d'identité officielle et les procédures de reconstruction

Dans des cas extrêmes — personnes ayant été victimes d'usurpation d'identité grave, personnes dont tous les documents ont été détruits dans une catastrophe, ou personnes qui n'ont jamais été déclarées à l'état civil — la reconstruction d'une identité officielle est une procédure longue et complexe qui mobilise plusieurs institutions. Le procureur de la République peut être saisi pour faire établir un acte de notoriété tenant lieu d'acte de naissance, sur la base de témoignages et d'autres éléments de preuve.

Pour les victimes d'usurpation d'identité, le processus de « reprise en main » de son identité administrative implique non seulement le remplacement des documents falsifiés ou utilisés frauduleusement, mais aussi la purge des informations erronées dans les différentes bases de données (fichiers judiciaires si des infractions ont été commises en usurpant son identité, historiques bancaires, dossiers médicaux). Ces situations, heureusement rares, illustrent la profonde intrication entre l'identité administrative et la vie quotidienne en France.
`;

const EXT3_L7 = `
## Le système d'alerte en cas de découverte de documents volés

Lorsque des documents d'identité volés sont trouvés — dans une poubelle, vendus dans le cadre d'un trafic documentaire, ou découverts lors de contrôles de police — les autorités ont des procédures pour informer les titulaires légitimes et neutraliser les documents dans les systèmes. Le FNTS (Fichier National des Tuiles Sécurisées) enregistre les documents déclarés perdus ou volés et déclenche une alerte lors de toute tentative d'utilisation de ces documents aux frontières ou dans des systèmes de contrôle d'identité.

Pour les titulaires dont les documents ont été déclarés volés mais qui soupçonnent qu'ils ont été retrouvés et utilisés frauduleusement, les indices sont généralement l'apparition de dettes ou de crédits à leur nom qu'ils n'ont pas contractés, la réception de correspondances pour des contrats non signés, ou le refus de crédit lié à des informations défavorables inexpliquées dans leur dossier de crédit. Ces signaux d'alerte doivent conduire à une signalisation immédiate auprès de la CNIL (pour le volet protection des données), des organismes de crédit, et des forces de l'ordre.

## Les frais de remplacement des documents et les aides disponibles

Le remplacement des documents d'identité après une perte ou un vol peut représenter un coût non négligeable, surtout lorsque plusieurs documents doivent être remplacés simultanément. En France, la carte nationale d'identité est gratuite lors du premier établissement et lors du renouvellement d'une carte expirée. En revanche, le remplacement anticipé d'une carte valide (avant son expiration), notamment en cas de perte, peut être payant dans certains cas. Le passeport français est payant (environ 86 euros pour un adulte).

Pour les titres de séjour, des frais de timbre fiscal sont perçus lors des demandes de renouvellement ou de remplacement — ces frais varient selon le type de titre et la durée. Des aides financières existent pour les personnes en situation précaire : les associations d'aide aux étrangers peuvent parfois prendre en charge les timbres fiscaux pour les personnes sans ressources, et l'aide juridictionnelle peut couvrir les honoraires d'avocat dans les recours administratifs. Ces aides sont méconnues et ne sont mobilisées que si la personne en fait la démarche de les demander.

## La prévention des vols de documents dans les lieux touristiques

Les zones touristiques et les transports en commun des grandes villes sont les lieux où les vols de documents d'identité sont les plus fréquents. Les techniques des pickpockets sont de plus en plus sophistiquées — distraction, bousculade, ouverture discrète de sacs. Pour les personnes qui transportent leurs documents originaux dans ces zones, des précautions pratiques peuvent réduire significativement le risque de vol.

La première précaution est de ne transporter que les documents strictement nécessaires lors de chaque déplacement — si un jour sans voyages internationaux ni démarches administratives importantes est prévu, laisser le passeport en lieu sûr à domicile et ne transporter que la carte d'identité ou une copie certifiée du titre de séjour. La deuxième précaution est d'utiliser des pochettes anti-pickpocket, portées sur la poitrine, pour les documents et les objets de valeur. La troisième précaution est de mémoriser les numéros de ses documents importants — numéro de titre de séjour, numéro de passeport — pour faciliter les déclarations de vol si nécessaire.

## Les outils numériques de stockage sécurisé des copies de documents

Les smartphones modernes offrent plusieurs options pour stocker des copies numérisées de documents d'identité de façon sécurisée. Les gestionnaires de mots de passe (1Password, Bitwarden, Dashlane) proposent des fonctions de stockage sécurisé de documents sensibles, chiffrés avec un mot de passe fort et accessibles uniquement par l'utilisateur. Les services de stockage cloud sécurisé (notamment ceux proposant un chiffrement de bout en bout) peuvent également servir de coffre numérique pour les copies de documents.

Pour les personnes qui préfèrent ne pas stocker leurs données dans le cloud en raison de préoccupations sur la vie privée, une clé USB chiffrée (avec un logiciel comme VeraCrypt) stockée dans un endroit différent du domicile (chez un ami de confiance, dans un coffre bancaire) est une alternative locale sécurisée. L'essentiel est que les copies numérisées soient accessibles depuis n'importe quel endroit en cas d'urgence — ce qui exclut les solutions qui nécessitent d'être physiquement présent à son domicile pour y accéder.
`;

const EXT3_L8 = `
## Les passeports et les listes de surveillance internationale

Les passeports des voyageurs internationaux sont vérifiés contre plusieurs bases de données lors des passages aux frontières. La base de données SIS (Système d'Information Schengen) recense les personnes signalées pour des raisons de sécurité publique ou de contrôle migratoire dans l'ensemble de l'espace Schengen. La base INTERPOL sur les documents de voyage suspect est consultée pour détecter les passeports signalés volés ou perdus. Des bases nationales complètent ces vérifications.

Pour un ressortissant étranger résidant légalement en France dont le nom apparaîtrait par erreur dans l'une de ces bases — suite à une homonymie avec une personne sous surveillance, ou suite à une erreur administrative — les conséquences peuvent être très déstabilisantes lors des contrôles aux frontières. En cas de blocage aux frontières pour une telle raison, contacter immédiatement l'ambassade ou le consulat de son pays dans le pays de blocage, et avoir les coordonnées de la préfecture française de son lieu de résidence pour justifier sa régularité en France, sont les premières démarches à effectuer.

## Les passeports numériques et l'avenir du voyage international

L'augmentation des comptes d'identité numérique et des passeports biométriques évolue vers une intégration complète entre les documents physiques et les systèmes d'information aux frontières. Des projets pilotes dans plusieurs aéroports testent des passeports entièrement numériques — où les données d'identité et biométriques sont stockées dans une application mobile sécurisée avec une cryptographie avancée, sans document physique. Ces systèmes, encore à l'état de projets pilotes, visent à créer une expérience de voyage sans friction tout en maintenant le niveau de sécurité des documents physiques.

Pour les voyageurs fréquents, ces évolutions technologiques représentent une simplification bienvenue des contrôles aux frontières. Pour les autorités, elles représentent une opportunité d'améliorer la détection des fraudes documentaires et d'accélérer les processus de contrôle dans les aéroports engorgés. Pour les défenseurs des libertés civiles, elles soulèvent des questions importantes sur le niveau de surveillance et la protection des données de déplacement des personnes — des questions qui font l'objet de débats actifs dans les instances européennes.

## Les passeports de pays tiers dans les ambassades étrangères

Pour un ressortissant étranger vivant en France dont le passeport expire, l'ambassade ou le consulat de son pays est l'unique interlocuteur pour le renouvellement — la France ne peut pas délivrer de passeports pour des pays tiers. Cette règle évidente mérite néanmoins d'être rappelée car certaines personnes, dans la confusion de leurs premières années en France, ne savent pas exactement quels documents relèvent de quelles autorités.

La démarche d'identification de l'ambassade ou du consulat du pays d'origine en France est la première étape lors de toute question relative au passeport. Les ambassades ont généralement des sites web qui décrivent les procédures de renouvellement pour les ressortissants à l'étranger, les documents requis, les délais et les frais. Certaines ambassades de pays à forte diaspora en France ont des centres consulaires délocalisés dans plusieurs grandes villes françaises pour réduire les distances et les délais — vérifier la présence d'un consulat proche de son lieu de résidence peut éviter des déplacements à Paris pour des ambassades centralisées.

## La synchronisation entre le passeport étranger et les systèmes français

Lors de chaque renouvellement du titre de séjour en France, la préfecture vérifie que le nouveau numéro de passeport correspond aux informations enregistrées dans AGDREF. Si le passeport a changé depuis le dernier titre de séjour, le nouveau numéro de passeport doit être communiqué à la préfecture pour mise à jour du dossier. Cette mise à jour peut être effectuée soit lors du prochain renouvellement du titre de séjour, soit par une notification à la préfecture entre deux renouvellements si le changement de passeport intervient en milieu de validité du titre.

La cohérence entre le numéro de passeport dans AGDREF et le passeport physiquement présenté lors d'un contrôle d'identité est un point technique mais important — une incohérence peut déclencher des vérifications supplémentaires et des delais dans les situations où la régularité du séjour doit être vérifiée rapidement. Maintenir AGDREF à jour avec le numéro du passeport en cours de validité est une formalité simple — une lettre ou un email à la préfecture avec le nouveau numéro de passeport — qui évite des complications potentielles.
`;

const EXT3_L9 = `
## La gestion de la carte Vitale lors d'un retour temporaire dans le pays d'origine

Les étrangers résidant en France qui retournent dans leur pays d'origine pour des séjours multiples — pour des raisons familiales, médicales ou professionnelles — doivent gérer la continuité de leurs droits à l'Assurance Maladie pendant et après ces séjours. Les droits ouverts auprès de la CPAM française restent valides pendant les absences temporaires, à condition que la résidence principale reste en France et que les cotisations continuent d'être versées (par l'employeur si salarié, par le travailleur lui-même si indépendant).

Lors d'un retour en France après une absence prolongée, il peut être utile de vérifier sur ameli.fr que les droits sont toujours ouverts et que la carte Vitale est à jour. Si une mise à jour n'a pas été effectuée pendant l'absence (par exemple, un changement de mutuelle ou un changement de situation familiale), les bornes de mise à jour dans les pharmacies françaises permettent de mettre la carte Vitale à jour dès le retour en France. La présentation de la carte Vitale à jour lors de la première consultation médicale après un long séjour à l'étranger garantit que les remboursements seront effectués dans les délais habituels.

## Les remboursements de soins effectués à l'étranger

Une question fréquente concerne les possibilités de remboursement par l'Assurance Maladie française des soins effectués pendant un séjour à l'étranger. La réponse varie selon que les soins ont été effectués dans un pays de l'UE ou hors UE, et selon qu'ils étaient programmés ou urgents.

Pour les soins d'urgence survenant dans un pays de l'UE, la Carte Européenne d'Assurance Maladie (CEAM) — obtenue gratuitement auprès de la CPAM et valable deux ans — permet de bénéficier des soins aux conditions du système de santé du pays visité, avec remboursement par l'Assurance Maladie française selon les règles locales. Pour les soins programmés dans un autre pays de l'UE (dispositif du patient cross-border prévu par la directive 2011/24/UE), une autorisation préalable de la CPAM peut être nécessaire pour les soins les plus coûteux, mais les soins courants peuvent être effectués sans autorisation et remboursés sur présentation des justificatifs.

## Les pharmacies et la carte Vitale : processus de remboursement accéléré

La pharmacie est l'environnement où la carte Vitale est utilisée le plus fréquemment pour une grande majorité des Français et des résidents en France. Lors de chaque achat de médicaments sur ordonnance, l'insertion de la carte Vitale dans le lecteur du pharmacien déclenche la télétransmission immédiate de la feuille de soins à la CPAM. Si le tiers payant est appliqué (ce qui est quasi-systématique en pharmacie pour la part Assurance Maladie), le patient ne paie que le ticket modérateur et la partie non remboursable.

L'ordonnance électronique, progressivement déployée en France, simplifie encore davantage cette interaction. Les prescriptions électroniques signées par les médecins via leur logiciel médical sont accessibles directement par les pharmaciens via un identifiant ou un QR-code, sans document papier à présenter. La carte Vitale, dans ce système entièrement dématérialisé, continue de servir d'authentification de l'assuré auprès du pharmacien et de déclencheur de la télétransmission à la CPAM.

## Les questions pratiques sur les délais de remboursement

Le délai de remboursement de l'Assurance Maladie après une consultation médicale avec télétransmission est généralement de trois à cinq jours ouvrés pour la plupart des actes courants. Ce délai court est l'un des arguments en faveur de la modernisation du système de santé français — dans de nombreux autres pays, les délais de remboursement sont de plusieurs semaines. Le remboursement est effectué par virement sur le compte bancaire déclaré auprès de la CPAM, dont le numéro IBAN doit être correctement renseigné sur ameli.fr.

Des délais plus longs peuvent survenir dans certaines situations : soins effectués avec une feuille de soins papier (traitement manuel plus lent), consultations chez des médecins pratiquant des dépassements d'honoraires élevés (qui peuvent nécessiter une vérification supplémentaire), ou soins effectués dans des établissements privés qui n'ont pas encore migré vers la facturation entièrement électronique. Dans ces cas, le suivi sur ameli.fr permet de vérifier à quel stade du traitement se trouve la feuille de soins et d'identifier si un complément d'information est demandé par la CPAM.
`;

await appendAndPatch('a7a6e229-2b37-48a5-80d2-ab3914db026d', EXT3_L6);
await appendAndPatch('1cb6c47a-d05f-4860-b778-79cf5cb7719a', EXT3_L7);
await appendAndPatch('edd463f6-1f57-4bda-b174-96754d0a67c6', EXT3_L8);
await appendAndPatch('0a9a5b53-ae1f-442b-bd5f-a6538622e740', EXT3_L9);
