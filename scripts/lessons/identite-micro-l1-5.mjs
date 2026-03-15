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

// L1: 3343 → need +657
const ADD_L1 = `
## Le titre de séjour face aux évolutions de la loi sur l'immigration

La législation relative aux titres de séjour en France évolue régulièrement à travers les lois successives sur l'immigration et l'intégration. Ces évolutions peuvent créer de nouvelles catégories de titres, modifier les conditions d'accès à certains titres existants, ou changer les durées de validité. Pour les titulaires d'un titre de séjour, rester informé des évolutions législatives est important pour comprendre si leur situation est affectée et comment adapter leurs démarches en conséquence.

Les associations spécialisées en droit des étrangers — GISTI, Cimade, ADDE (Association des Avocats pour le respect du Droit des Étrangers) — publient des analyses de chaque nouvelle loi ou circulaire qui modifie le droit au séjour. Ces publications, accessibles gratuitement sur leurs sites, sont une ressource précieuse pour comprendre les impacts pratiques des évolutions législatives sur les titulaires de différents types de titres. Les forums communautaires en ligne, tout en étant moins fiables que les sources juridiques officielles, peuvent également alerter rapidement sur des changements qui affectent des catégories spécifiques de titulaires.

Le site service-public.fr est la source officielle de référence pour les fiches pratiques sur les titres de séjour — ces fiches sont régulièrement mises à jour pour refléter les évolutions réglementaires et sont rédigées dans un langage accessible au grand public. En cas de doute sur les règles applicables à une situation spécifique, la consultation du site service-public.fr est le premier réflexe à avoir avant de demander un rendez-vous en préfecture ou de contacter une association.

## Les recours possibles en cas de rejet d'un titre de séjour

La notification d'un refus de titre de séjour est une situation difficile mais qui n'est pas nécessairement définitive. Le droit administratif français prévoit plusieurs voies de recours contre les décisions préfectorales défavorables, avec des délais stricts qui doivent être impérativement respectés sous peine d'irrecevabilité. Le recours gracieux adressé au préfet, le recours hiérarchique adressé au ministère de l'Intérieur, et le recours contentieux devant le tribunal administratif constituent les trois voies disponibles, à utiliser selon la nature du litige et les chances de succès estimées.
`;

// L2: 3281 → need +719
const ADD_L2 = `
## La carte d'identité française comme accès aux services numériques de l'État

La nouvelle carte nationale d'identité biométrique française, déployée depuis août 2021, est conçue pour une intégration native avec les services numériques de l'État. Sa puce NFC, lisible par les smartphones récents équipés de la technologie NFC, ouvre des perspectives d'authentification forte pour les services en ligne. L'application France Identité exploite directement cette puce pour créer une identité numérique certifiée sur smartphone, permettant de prouver son identité en ligne sans avoir à envoyer une copie physique du document.

Ce modèle d'identité numérique ancrée dans un document physique sécurisé représente une avancée significative par rapport aux systèmes d'authentification par login et mot de passe. La puce de la carte d'identité contient un certificat cryptographique qui prouve que les données d'identité n'ont pas été altérées depuis leur enregistrement lors de la délivrance de la carte — une garantie d'authenticité bien supérieure à celle d'une simple copie numérique d'un document.

## L'identité et le vote à l'étranger pour les Français de l'étranger

Les Français résidant à l'étranger peuvent exercer leur droit de vote aux élections françaises de plusieurs façons. Ils peuvent voter à l'étranger dans les bureaux de vote des consulats et ambassades de France pour les élections présidentielles, législatives et le référendum. La carte nationale d'identité française ou le passeport français est le document requis pour exercer ce droit de vote à l'étranger — ces documents prouvent à la fois l'identité et la nationalité française du votant.

L'inscription sur les listes électorales consulaires est une démarche distincte de l'inscription sur les listes électorales communales en France, et elle doit être effectuée avant les délais d'inscription fixés avant chaque scrutin. Pour les Français qui résident entre la France et l'étranger, la mise à jour de son inscription électorale pour choisir où exercer son droit de vote (en France ou à l'étranger) est une démarche qui peut être effectuée en ligne via le portail Mon Service Public, en ayant sa carte d'identité à portée pour justifier de son identité.

## La durée de validité des anciens formats de carte d'identité

Un point souvent mal compris concerne la durée de validité des cartes d'identité françaises délivrées entre 2004 et 2013. Par décision réglementaire de 2014, ces cartes ont vu leur durée de validité prorogée de cinq ans au-delà de la date d'expiration imprimée — portant leur validité effective à quinze ans depuis leur date de délivrance. Or, de nombreux pays et opérateurs privés à l'étranger n'ont pas intégré cette extension et continuent de considérer ces cartes comme expirées selon la date imprimée. Cette situation peut créer des difficultés lors des voyages ou des démarches internationales avec une carte d'identité dont la date imprimée est dépassée mais dont la validité légale est encore en cours.
`;

// L3: 3439 → need +561
const ADD_L3 = `
## Les délais d'obtention du NIR définitif et comment les suivre

L'attribution du numéro de Sécurité sociale définitif (NIR) aux étrangers nouvellement affiliés peut prendre de trois à douze mois selon les volumes de dossiers traités par l'INSEE et la CPAM. Ce délai, difficile à raccourcir par des démarches individuelles, résulte du processus de vérification des données d'état civil étranger qui nécessite parfois des échanges avec les autorités du pays d'origine pour confirmer les informations.

Pendant cette période d'attente, le numéro provisoire attribué par la CPAM permet d'accéder aux soins et aux remboursements de façon fonctionnelle, même si certains organismes (notamment certains employeurs peu familiers de ce processus) peuvent s'y montrer moins à l'aise. La proactivité dans le suivi du dossier — relancer régulièrement la CPAM pour vérifier l'état d'avancement de l'attribution du NIR définitif — est souvent la meilleure façon d'accélérer le processus dans les limites de ce qui est possible.

## Le NIR dans les situations de décès et de succession

Lors du décès d'une personne affiliée à l'Assurance Maladie française, le NIR du défunt reste enregistré dans les systèmes pendant une durée légale pour permettre le traitement des dernières feuilles de soins et le paiement des remboursements aux ayants droit ou à la succession. Les héritiers qui prennent en charge les démarches administratives post-décès doivent informer la CPAM du décès pour que le compte soit soldé et clôturé correctement, en produisant généralement une copie de l'acte de décès.

Pour les personnes qui héritent de documents d'identité d'un proche décédé (carte Vitale, titre de séjour, passeport), ces documents doivent être retournés aux autorités émettrices respectives — la CPAM pour la carte Vitale, la préfecture pour le titre de séjour, et les autorités consulaires pour le passeport étranger. Conserver ces documents sans les retourner n'est pas conforme aux réglementations, même si les risques pratiques en cas de non-retour sont limités.
`;

// L4: 3483 → need +517
const ADD_L4 = `
## L'état civil et les démarches lors d'un divorce international

Le divorce d'un couple binational ou d'un couple résidant en France mais dont l'un des époux est de nationalité étrangère soulève des questions de droit international privé importantes. Le droit applicable au divorce dépend de la résidence habituelle des époux et/ou de leur nationalité commune, selon les règles du règlement européen Rome III pour les couples ayant un lien avec l'UE. Un divorce prononcé en France entre un Français et une ressortissante d'un pays tiers peut nécessiter des démarches de reconnaissance et de transcription dans le pays d'origine de l'époux étranger.

La transcription de l'acte de divorce ou du jugement de divorce sur les registres d'état civil du pays d'origine de l'époux étranger est une démarche que celui-ci doit effectuer lui-même auprès des autorités de son pays — la France ne peut pas s'en charger à sa place. Sans cette transcription, l'époux étranger peut se retrouver dans une situation paradoxale où il est divorcé selon le droit français mais toujours marié selon le droit de son pays d'origine, ce qui peut créer des complications pour toute nouvelle union dans ce pays.

## Les actes d'état civil et l'assurance vie

Les actes d'état civil jouent un rôle crucial dans la gestion des contrats d'assurance vie, notamment lors du dénouement du contrat au décès de l'assuré. L'assureur demande systématiquement un acte de décès et des documents d'identité des bénéficiaires pour vérifier leur identité et leur lien avec l'assuré. Pour les bénéficiaires étrangers d'un contrat d'assurance vie souscrit en France, des documents d'état civil étrangers légalisés et traduits peuvent être nécessaires, allongeant les délais de versement du capital.

La désignation des bénéficiaires dans un contrat d'assurance vie doit être rédigée avec la précision suffisante pour permettre leur identification sans ambiguïté — le nom seul étant insuffisant en cas d'homonymie. L'utilisation du nom complet, de la date de naissance, et éventuellement du NIR des bénéficiaires dans la clause bénéficiaire est une bonne pratique qui facilite les démarches administratives lors du dénouement.
`;

// L5: 3231 → need +769
const ADD_L5 = `
## Les services accessibles via FranceConnect : liste exhaustive en 2024

Le nombre de services accessibles via FranceConnect a considérablement augmenté depuis sa création, et continue de croître avec l'intégration progressive de nouveaux services publics. En 2024, les services les plus utilisés accessibles via FranceConnect incluent : impots.gouv.fr pour les déclarations fiscales et la consultation des avis d'imposition ; ameli.fr pour la gestion de la carte Vitale et le suivi des remboursements de santé ; info-retraite.fr pour la consultation des droits à la retraite ; caf.fr pour les allocations familiales et autres aides sociales ; pole-emploi.fr pour les demandes et suivis d'allocations chômage ; service-retraite.fr pour les demandes de liquidation de pension de retraite.

À ces services nationaux s'ajoutent de nombreux services locaux (portails des collectivités territoriales) et des services privés partenaires qui ont intégré FranceConnect comme méthode d'authentification. La cartographie complète des services connectés est disponible sur le site officiel de FranceConnect, qui propose également un moteur de recherche pour trouver si un service spécifique est compatible avec FranceConnect ou non.

## La protection contre les courriels frauduleux usurpant l'identité des services de l'État

Les courriels frauduleux qui usurpent l'identité des services de l'État (faux emails de la DGFIP annonçant un remboursement fiscal, faux SMS de la CAF demandant de mettre à jour ses informations, fausses notifications d'ameli.fr) représentent une menace permanente pour les utilisateurs des services numériques publics. Ces attaques de phishing visent à récupérer les identifiants FranceConnect ou les informations d'identité des victimes.

Les signes caractéristiques d'un courriel frauduleux usurpant un service de l'État sont les suivants : l'adresse de l'expéditeur ne se termine pas par le domaine officiel du service (par exemple, se méfier d'une adresse qui n'est pas @impots.gouv.fr, @ameli.fr, @caf.fr) ; le message crée une urgence artificielle pour inciter à réagir rapidement sans réfléchir ; le lien dans le message pointe vers une URL qui n'est pas l'URL officielle du service. La règle de base est de ne jamais cliquer sur les liens dans les courriels administratifs mais d'accéder toujours directement aux sites officiels en saisissant l'URL dans le navigateur.

## L'identité numérique et le consentement éclairé

L'utilisation de FranceConnect et des identités numériques implique de donner son consentement à l'utilisation de ses données d'identité par les services auxquels on se connecte. Ce consentement, bien que souvent présenté de façon automatique sans que l'utilisateur le remarque, est juridiquement valide et constitue la base légale du traitement des données d'identité par ces services.

Il est important de comprendre que chaque connexion via FranceConnect transmit au service auquel on se connecte les données d'identité minimum nécessaires à la connexion — nom, prénom, date de naissance, et selon les services, adresse ou numéro fiscal. Cette transmission est encadrée par la politique de confidentialité de FranceConnect et par le RGPD. En cas de doute sur la légitimité d'un service qui demande à utiliser FranceConnect comme mode de connexion, vérifier que le service figure bien dans la liste officielle des partenaires FranceConnect est la précaution appropriée.
`;

await appendAndPatch('36cfc7d1-8d6f-4675-b3eb-a9869510c3fb', ADD_L1);
await appendAndPatch('c45ead0e-59bd-4111-ae65-a67f5876e64a', ADD_L2);
await appendAndPatch('85b81635-2ed7-4f34-9a6f-7a9983c3938f', ADD_L3);
await appendAndPatch('88815b07-7563-421e-b88a-97f4bcb999c2', ADD_L4);
await appendAndPatch('99c1c557-b868-495b-9614-cf90a7dd7919', ADD_L5);
