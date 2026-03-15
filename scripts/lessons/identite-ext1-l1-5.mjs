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
## Le titre de séjour et la reconnaissance internationale de l'identité

À l'échelle internationale, le titre de séjour français est reconnu comme un document officiel délivré par un État souverain membre de l'Union européenne. Cette reconnaissance a des implications pratiques dans de nombreuses situations transfrontalières. Lorsqu'un ressortissant étranger se rend dans un pays tiers avec lequel la France a des accords de réciprocité, le titre de séjour peut constituer une preuve de la régularité de sa résidence en France — ce qui peut faciliter l'obtention d'un visa pour ce pays tiers, certains consulats tenant compte de la stabilité administrative d'un demandeur dans son pays de résidence pour évaluer le risque de non-retour.

Au sein de l'espace Schengen, la situation est plus nuancée. Le titre de séjour français ne donne pas automatiquement le droit de prendre résidence dans un autre pays de l'espace Schengen — il autorise uniquement des séjours touristiques ou de courte durée (90 jours sur 180). Pour s'installer durablement en Allemagne, en Espagne ou en Italie depuis la France avec un titre de séjour français, il faudra obtenir un titre dans le pays de destination. Cette distinction entre la libre circulation à court terme et le droit de résidence à long terme est fondamentale dans la compréhension des droits liés au titre de séjour.

## La hiérarchie des documents d'identité dans les démarches quotidiennes

Dans la vie quotidienne en France, les documents d'identité ne se valent pas tous de façon équivalente selon les contextes. La plupart des interactions commerciales courantes — ouvrir un compte bancaire, signer un bail de location, accéder à un service en ligne — permettent l'utilisation d'une gamme variée de documents. La carte nationale d'identité française, disponible uniquement pour les ressortissants français, reste le document le plus universellement reconnu. Le passeport biométrique, qu'il soit français ou étranger, est généralement accepté partout où une pièce d'identité est demandée.

La carte de séjour pluriannuelle ou la carte de résident, en tant que documents officiels plastifiés portant une photographie et des caractéristiques biométriques, sont reconnus dans la grande majorité des établissements et administrations. Le titre de séjour sous format papier ou cartonné, bien que légalement valide, est parfois moins facilement reconnu par des opérateurs privés peu familiers des différents formats de documents officiels — une réalité pratique que les titulaires peuvent contourner en apportant simultanément leur passeport étranger.

## La vérification de l'identité dans les administrations françaises

Les administrations françaises ont des procédures strictes de vérification d'identité qui varient selon la sensibilité de la démarche. Pour les démarches de routine — retrait d'un colis en bureau de poste, consultation d'un médecin généraliste conventionné — la présentation d'une pièce d'identité avec photo suffit généralement, sans vérification approfondie. Pour les démarches à enjeu — ouverture de droits sociaux, demande de titre de séjour, démarches notariales — une vérification plus rigoureuse est effectuée, incluant parfois la consultation de bases de données officielles.

Les agents des préfectures et sous-préfectures qui instruisent les dossiers de titre de séjour ont accès à des systèmes d'information spécialisés qui leur permettent de vérifier l'authenticité des documents présentés (via le Fichier des Personnes Recherchées et les systèmes idoines), de contrôler la régularité du séjour (via les systèmes AGDREF), et de consulter l'historique des titres délivrés à une personne donnée. Cette vérification systématique est une protection pour le titulaire — elle signifie qu'en cas de perte ou de vol du titre, toute tentative d'utilisation frauduleuse du document sera détectée.

## Les droits attachés au titre de séjour selon sa durée de validité

La durée de validité du titre de séjour détermine non seulement la durée autorisée du séjour en France, mais aussi l'horizon de planification administrative auquel le titulaire peut prétendre. Un titre annuel nécessite un renouvellement chaque année — avec les démarches, les délais et les incertitudes que cela implique. Un titre pluriannuel de quatre ans (comme le Passeport Talent) ou la carte de résident de dix ans confèrent une stabilité beaucoup plus grande, avec des implications pratiques directes sur la capacité d'emprunter, de signer des contrats à long terme, et de planifier sa vie professionnelle et familiale en France.

La durée de validité a également des implications sur la mobilité internationale. Un titre de séjour valide un an doit être vérifié avant chaque voyage international — un voyage de deux semaines prévu en décembre en ayant un titre à renouveler en novembre crée une inquiétude administrative que n'ont pas les titulaires de titres pluriannuels. Cette dimension temporelle du titre de séjour est souvent sous-estimée dans les discussions sur le droit au séjour, mais elle affecte profondément la qualité de vie et la sérénité administrative des personnes concernées.
`;

const EXT1_L2 = `
## L'historique de la carte nationale d'identité française

La carte nationale d'identité française a une histoire institutionnelle qui remonte à la Révolution française, bien que sa forme actuelle soit beaucoup plus récente. Les premières cartes d'identité modernes en France ont été instituées sous le régime de Vichy pendant la Seconde Guerre mondiale, une origine qui a longtemps pesé sur la perception de ce document dans la culture politique française — certains citoyens voyant encore dans l'obligation potentielle de porter une carte d'identité une intrusion de l'État dans la vie privée.

La carte nationale d'identité actuelle, dans son format plastifié biométrique, résulte de réformes progressives qui ont culminé avec l'introduction de la carte biométrique en 2021. Cette nouvelle carte, au format carte bancaire, intègre une puce électronique contenant les empreintes digitales de son titulaire en plus des données d'état civil habituelles. Elle respecte les normes ICAO (Organisation de l'Aviation Civile Internationale) pour les documents de voyage sécurisés, ce qui lui confère une reconnaissance internationale plus large que les anciennes versions.

## La procédure détaillée de demande de carte d'identité

La demande d'une carte nationale d'identité française suit un processus en plusieurs étapes qui a été progressivement dématérialisé. La première étape est la pré-demande en ligne sur le site de l'Agence Nationale des Titres Sécurisés, qui permet de renseigner les informations d'état civil et de générer un numéro de pré-demande. Cette pré-demande ne constitue pas la demande finale — elle doivent être finalisée en se présentant physiquement dans une mairie équipée d'une station de recueil des données biométriques.

Lors de la présentation en mairie, l'agent recueille les empreintes digitales du demandeur et vérifie les pièces justificatives originales : acte de naissance de moins de trois mois, justificatif de domicile, éventuellement le livret de famille pour les données relatives aux enfants, et la précédente carte d'identité ou son numéro en cas de renouvellement. La photo d'identité doit répondre à des normes précises — fond blanc ou gris clair, visage dégagé, expression neutre, dimensions standardisées — et ne peut être refusée par les services des mairies que si elle ne répond pas à ces normes techniques.

## Les usages spécifiques de la carte d'identité dans l'Union européenne

L'un des atouts majeurs de la carte nationale d'identité française est son usage comme document de voyage au sein de l'Union européenne et dans plusieurs pays tiers avec lesquels l'Union européenne a conclu des accords. Pour les citoyens français, voyager en Europe avec la carte d'identité seule est généralement suffisant pour passer les frontières sans passeport. Cette facilité de voyage, qui peut sembler banale pour ses bénéficiaires, est une commodité pratique significative — perdre son passeport lors d'un voyage est une situation stressante, mais disposer de la carte d'identité commme document de repli permet de continuer à voyager en Europe.

La liste des pays accessibles avec la seule carte nationale d'identité française évolue régulièrement et comprend les 27 États membres de l'Union européenne, les pays de l'espace Schengen qui ne sont pas membres de l'UE (Islande, Liechtenstein, Norvège, Suisse), et un certain nombre de pays tiers qui ont accordé des facilités aux ressortissants européens. Cette liste peut être consultée sur le site du ministère français des Affaires étrangères, qui la met à jour régulièrement pour tenir compte des accords en vigueur.

## La carte d'identité et la vie civique française

La carte nationale d'identité française est bien plus qu'un simple document d'identité — elle est le symbole tangible de la citoyenneté française. Son numéro à douze chiffres, unique pour chaque citoyen, est l'identifiant qui relie un individu à l'ensemble de son parcours civique en France : inscription sur les listes électorales, participation aux élections, actions en justice, et exercice des droits civiques. Lors de chaque scrutin, les assesseurs des bureaux de vote vérifient l'identité des votants à l'aide de leur carte d'identité ou de leur passeport — c'est le moment le plus symbolique de l'utilisation de ce document.

Pour les personnes naturalisées françaises, la remise de la carte nationale d'identité après la cérémonie de naturalisation marque la concrétisation symbolique de leur nouvelle appartenance à la communauté nationale française. Ce document matérialise une transformation juridique et identitaire qui a souvent nécessité des années de démarches, d'intégration et de construction de liens avec la société française. La carte d'identité n'est pas seulement un document administratif — elle est une attestation de la reconnaissance par la République française du parcours d'une personne.
`;

const EXT1_L3 = `
## La structure détaillée du numéro INS (Identifiant National de Santé)

Depuis la réforme du système d'information de santé français, le numéro de Sécurité sociale (NIR) est désormais également désigné comme Identifiant National de Santé (INS) dans le contexte des soins. Ce changement terminologique reflète une évolution de la politique de santé numérique en France, qui vise à créer un identifiant unique permettant de relier l'ensemble du parcours de soins d'une personne — consultations, hospitalisations, analyses, médicaments — à travers tous les établissements et professionnels de santé qui l'ont pris en charge.

L'INS est composé du NIR (les 13 chiffres du numéro de Sécurité sociale) complétés de façon à identifier de manière non ambiguë une personne physique dans les systèmes de santé. Pour les personnes nées en France, ce numéro est certifié à partir des données de l'état civil — ce qui signifie que toute correction ou modification déclarée auprès de l'état civil se propage automatiquement à l'INS. Pour les étrangers nés à l'étranger, la certification de l'INS à partir des actes d'état civil est une démarche qui peut nécessiter la production d'une apostille ou d'une légalisation des documents de naissance.

## Les erreurs courantes dans la gestion du NIR et comment les corriger

Les erreurs dans le numéro de Sécurité sociale sont plus courantes qu'on ne le croit, et leur correction est une démarche administrative qui peut prendre plusieurs mois. Les erreurs les plus fréquentes sont les suivantes. La transcription incorrecte du prénom ou du nom à l'état civil lors de l'attribution du numéro provisoire — une erreur souvent due à des difficultés de translittération depuis des alphabets non latins (cyrillique, arabe, chinois) et qui se propage à l'INS si elle n'est pas corrigée rapidement. Une date de naissance erronée ou un code de commune de naissance incorrect, qui faussent les deux premiers segments du NIR.

La correction d'un NIR erroné suit une procédure longue qui implique la production de documents d'état civil certifiés — acte de naissance avec apostille ou légalisation, parfois traduit par un traducteur assermenté — soumis à la CPAM qui les transmet à l'INSEE pour intégration dans le Répertoire National d'Identification des Personnes Physiques. Pendant la période de correction, le titulaire peut se trouver avec deux numéros distincts dans les systèmes (l'erroné et le corrigé), ce qui peut créer des complications dans le suivi des remboursements ou des droits ouverts. Signaler toute erreur dès que possible, dès la réception des premiers documents portant le NIR, est la meilleure pratique préventive.

## Le NIR dans les systèmes d'information des ressources humaines

Du côté de l'emploi, le NIR occupe une place centrale dans les systèmes de paie et de gestion des ressources humaines. Tout employeur qui embauche un salarié doit transmettre son NIR à l'URSSAF (Union de Recouvrement des cotisations de Sécurité Sociale et d'Allocations Familiales) via la Déclaration Sociale Nominative (DSN). Cette déclaration sert de support à l'affiliation aux différentes branches de la Sécurité sociale — maladie, retraite, chômage — et au calcul des cotisations dues. Le NIR identifie sans ambiguïté le salarié dans l'ensemble des régimes de protection sociale.

Pour les étrangers nouvellement embauchés qui ne disposent pas encore de leur NIR définitif, l'employeur doit néanmoins effectuer les déclarations sociales — en utilisant un numéro provisoire si le définitif n'est pas encore disponible. Cette situation transitoire, bien gérée entre le salarié et son employeur, ne crée pas de problème pour le salarié — les cotisations seront bien enregistrées à son compte, même si le rapprochement avec le NIR définitif peut prendre quelques mois. En revanche, si cette situation est mal gérée et que des mois de cotisations s'accumulent sans être rattachés à un NIR, des droits peuvent être perdus ou difficiles à reconstituer — d'où l'importance de suivre activement l'obtention de son NIR définitif.

## NIR et protection des données personnelles

Le numéro de Sécurité sociale, en tant qu'identifiant unique permettant de relier de nombreuses bases de données relatives à une même personne, est classé par la CNIL (Commission Nationale de l'Informatique et des Libertés) parmi les données à caractère particulièrement sensible. Son utilisation est strictement encadrée par la loi : seul un nombre limité d'organismes officiellement habilités — Sécurité sociale, employeurs pour leur gestion sociale, administrations fiscales, certains établissements de santé — peuvent collecter et traiter le NIR.

Tout prestataire privé qui demanderait le NIR d'un client dans un contexte commercial non lié à la gestion sociale ou à la santé commet une infraction à la loi Informatique et Libertés et s'expose à des sanctions de la CNIL. Par conséquent, lorsqu'une personne inconnue ou une entreprise commerciale vous demande votre numéro de Sécurité sociale, il est légitime de refuser et de demander la justification légale de cette demande. La vigilance sur ce point est un réflexe de protection des données personnelles que tout titulaire d'un NIR devrait adopter systématiquement.
`;

const EXT1_L4 = `
## Les actes d'état civil et la dématérialisation des démarches

La dématérialisation des actes d'état civil est un chantier progressif en France. La plateforme service-public.fr permet depuis plusieurs années de commander en ligne des extraits d'actes de naissance, de mariage ou de décès auprès des mairies françaises, sans se déplacer physiquement. Ces actes sont envoyés par courrier postal en quelques jours et ont exactement la même valeur juridique que les actes remis physiquement au guichet de la mairie.

Pour les personnes nées à l'étranger dont les actes sont conservés dans un pays étranger, la dématérialisation n'est pas encore une réalité généralisée. La demande d'acte d'état civil à un pays étranger implique souvent soit de contacter l'ambassade ou le consulat de ce pays en France, soit de mandater un proche dans le pays d'origine pour effectuer la demande auprès des services locaux d'état civil. Les délais peuvent varier de quelques jours à plusieurs mois selon les pays et la qualité de leur système d'état civil.

## Les conventions bilatérales d'état civil entre la France et ses partenaires

La France a signé des conventions bilatérales d'état civil avec de nombreux pays, notamment les pays francophones et les pays d'Afrique du Nord et du Moyen-Orient. Ces conventions simplifient la reconnaissance mutuelle des actes d'état civil et éliminent parfois l'obligation d'apostille — remplacée par une simple authentification consulaire moins contraignante. Pour les ressortissants des pays liés à la France par une telle convention, la procédure d'obtention et de légalisation des actes d'état civil est plus simple et moins coûteuse.

Pour les ressortissants de pays avec lesquels la France n'a pas de convention bilatérale d'état civil, les formalités d'apostille sont généralement obligatoires pour que les actes d'état civil étrangers produisent leurs effets en France. L'apostille, créée par la Convention de La Haye de 1961, est une certification qui atteste l'authenticité de la signature et du sceau de l'autorité qui a émis l'acte — elle est délivrée par l'autorité compétente du pays d'origine (souvent le ministère des Affaires étrangères ou le ministère de la Justice selon les pays). Pour les ressortissants des nombreux pays qui ne sont pas parties à la Convention de La Haye, la légalisation consulaire classique reste la seule voie.

## Le changement de nom légal en France : procédures et implications

Le changement de nom légal en France est une démarche possible mais encadrée, qui a été rendue plus accessible par la loi du 2 mars 2022. Cette loi permet désormais à toute personne majeure de demander, une fois dans sa vie, une modification administrative de son nom de famille par voie de simple déclaration à la mairie de son domicile — en prenant le nom de l'un de ses parents, ou en accolant les deux noms parentaux. Cette réforme a été particulièrement saluée par les personnes qui souhaitaient changer d'un nom à consonance étrangère pour un nom plus français, ou inversement, pour des raisons d'identité culturelle ou professionnelle.

Pour les étrangers résidant en France, le changement de nom légal en France est encore plus complexe, car il implique une question de droit international privé : quel droit s'applique au nom d'un étranger résidant en France ? En principe, le droit applicable au nom d'une personne est celui de sa nationalité — un Marocain résidant en France est en principe soumis au droit marocain pour les questions relatives à son nom. Les changements de nom opérés dans un cadre juridique étranger peuvent produire des effets en France après les procédures de reconnaissance appropriées.

## L'état civil des personnes adoptées et ses spécificités

Les personnes adoptées, qu'il s'agisse d'adoptions simples ou plénières, ont une situation d'état civil particulière qui peut créer des complications dans certaines démarches administratives. Lors d'une adoption plénière, un nouveau livret de famille est créé pour l'enfant adopté, qui acquiert le nom et la filiation des parents adoptifs — l'acte de naissance d'origine est confidentiel et remplacé par un acte de naissance reformé. Cette rupture de filiation peut créer des difficultés pour certaines démarches qui requièrent des informations sur les parents biologiques (certaines démarches médicales, certaines investigations d'antécédents).

Pour les adoptions internationales, la situation est encore plus complexe. L'acte de naissance étranger, délivré dans le pays d'origine de l'enfant sous le droit de ce pays, doit être transcrit sur les registres d'état civil français après certification de la conformité de l'adoption aux dispositions françaises du droit international privé. Cette transcription est effectuée par le service central d'état civil de Nantes pour les adoptions internationales impliquant des ressortissants français. Les délais de cette procédure peuvent être de plusieurs mois, pendant lesquels l'enfant adopté est dans une situation administrative transitoire qui mérite une attention particulière.
`;

const EXT1_L5 = `
## L'architecture technique de FranceConnect et ses fournisseurs d'identité

FranceConnect fonctionne sur le protocole OpenID Connect, une extension du protocole OAuth 2.0 standardisé à l'échelle internationale. Ce protocole permet une authentification fédérée dans laquelle les fournisseurs d'identité certifient l'identité d'un utilisateur auprès des services partenaires sans que ces services ne stockent eux-mêmes les données d'identité. Cette architecture décentralisée est à la fois plus sécurisée et plus respectueuse de la vie privée que les systèmes centralisés — les services administratifs n'accumulent pas de bases de données d'identifiants que des pirates pourraient cibler.

Les fournisseurs d'identité FranceConnect sont des organismes qui ont une mission de gestion de données d'identité vérifiées dans le cadre de leurs activités officielles. La DGFIP (Direction Générale des Finances Publiques) connaît l'identité de ses contribuables à travers les déclarations fiscales. L'Assurance Maladie connaît l'identité des assurés sociaux à travers le système Sécurité sociale. La Poste connaît l'identité de ses clients à travers les procédures d'ouverture de compte courrier et bancaire. Mobile Connect, opéré par les opérateurs téléphoniques français, utilise les données d'identité des contrats mobiles. Chacun de ces opérateurs peut agir comme fournisseur d'identité FranceConnect pour les usagers qui ont déjà une relation établie avec eux.

## Les niveaux d'assurance d'identité dans FranceConnect

Tous les fournisseurs d'identité FranceConnect ne confèrent pas le même niveau d'assurance sur l'identité de l'utilisateur. Le niveau d'assurance « substantiel » (eIDAS niveau 2) correspond à une identité vérifiée par des moyens substantiels — par exemple, la présentation physique d'un document d'identité lors d'une démarche en agence ou à domicile. Le niveau d'assurance « élevé » (eIDAS niveau 3) correspond à une identité vérifiée avec des moyens plus rigoureux, comme la vérification biométrique.

Cette gradation est importante pour l'accès à des services administratifs de haute sensibilité. Demander une attestation fiscale ou consulter ses droits à l'assurance maladie ne requiert pas le même niveau de confiance qu'effectuer une mutation de propriété immobilière ou accéder à des services judiciaires sensibles. La politique de FranceConnect+ étend le périmètre à des actes administratifs plus sensibles en requérant un niveau d'assurance plus élevé pour ces démarches.

## La signature électronique dans le droit français et ses effets juridiques

La signature électronique qualifiée au sens du règlement eIDAS a les mêmes effets juridiques qu'une signature manuscrite en droit français depuis la loi n°2000-230 du 13 mars 2000 sur la signature électronique. Cette équivalence est fondamentale pour comprendre la portée des actes signés numériquement — un contrat signé électroniquement avec une signature qualifiée est aussi contraignant qu'un contrat signé à la main sur papier.

En pratique, la signature électronique qualifiée est utilisée dans de nombreuses situations contractuelles et administratives : signature des actes notariés dématérialisés, signature des marchés publics, signature des actes d'état civil dans les mairies équipées, signature des conventions collectives. Les professionnels du droit et du chiffre (notaires, avocats, experts-comptables) sont les utilisateurs les plus intensifs de la signature électronique qualifiée, qui leur permet de traiter des volumétries de documents signés sans imposer de déplacements physiques à leurs clients.

## L'identité numérique et la protection contre le vol d'identité en ligne

Le développement de l'identité numérique en France s'accompagne de risques nouveaux liés au vol d'identité en ligne. Un fraudeur qui accède aux identifiants FranceConnect d'une personne — en la piégeant via un hameçonnage (phishing) ou en exploitant une fuite de données d'un fournisseur d'identité — peut potentiellement accéder à ses services administratifs et effectuer des démarches en son nom. La vigilance sur les pratiques de sécurité numérique est donc indissociable de l'utilisation des services d'identité numérique.

Les bonnes pratiques de sécurité pour l'utilisation de FranceConnect et des services administratifs en ligne comprennent l'utilisation de mots de passe forts et uniques pour chaque fournisseur d'identité, l'activation systématique de l'authentification à deux facteurs quand elle est proposée, la vérification de l'URL du site avant de saisir ses identifiants, et la méfiance envers les courriels ou SMS demandant de confirmer d'urgence des identifiants administratifs — aucun organisme public français légitime n'envoie de telles demandes. En cas de soupçon de compromission d'un compte, contacter immédiatement le fournisseur d'identité concerné pour changer les identifiants est la première action à entreprendre.
`;

await appendAndPatch('36cfc7d1-8d6f-4675-b3eb-a9869510c3fb', EXT1_L1);
await appendAndPatch('c45ead0e-59bd-4111-ae65-a67f5876e64a', EXT1_L2);
await appendAndPatch('85b81635-2ed7-4f34-9a6f-7a9983c3938f', EXT1_L3);
await appendAndPatch('88815b07-7563-421e-b88a-97f4bcb999c2', EXT1_L4);
await appendAndPatch('99c1c557-b868-495b-9614-cf90a7dd7919', EXT1_L5);
