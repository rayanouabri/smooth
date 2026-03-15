const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

async function patch(id, content) {
  const r = await fetch(`${BASE}/rest/v1/lessons?id=eq.${id}`, {
    method: 'PATCH', headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content })
  });
  const w = content.split(/\s+/).filter(Boolean).length;
  console.log(r.ok ? '✅' : '❌ '+r.status, id.slice(0,8), w+' mots');
}

const L1 = `# Le Titre de Séjour comme Pièce d'Identité : Ce qu'il Prouve et ses Limites

Le titre de séjour est le document administratif central de la vie d'un étranger en France. Délivré par la préfecture du département de résidence, il atteste que son titulaire est autorisé à séjourner légalement sur le territoire français pour une durée et selon des conditions précises. Mais le titre de séjour n'est pas seulement un laissez-passer — il est aussi un document d'identité à part entière, utilisé dans de nombreuses situations de la vie quotidienne pour prouver qui l'on est et quel est son statut juridique en France.

## Ce que prouve concrètement le titre de séjour

Le titre de séjour moderne — sous la forme de la carte de séjour pluriannuelle ou de la carte de résident — est un document sécurisé de format carte bancaire, avec photo d'identité, numéro unique, et plusieurs éléments de sécurité visibles et invisibles. Ce format, harmonisé au niveau européen, est reconnu comme document d'identité dans l'ensemble des pays de l'Union européenne et dans de nombreux pays partenaires.

Concrètement, le titre de séjour prouve trois choses simultanément. Premièrement, il prouve l'identité civile du titulaire : son nom, son prénom, sa date et son lieu de naissance, tels qu'ils figurent dans les documents d'état civil présentés lors de la demande. Deuxièmement, il prouve la nationalité du titulaire : la nationalité étrangère est en général indiquée sur le titre. Troisièmement, il prouve le statut juridique du titulaire en France : la catégorie de séjour (étudiant, salarié, vie privée et familiale, résident, passeport talent), la date de validité, et les droits qui y sont attachés (notamment les droits au travail, indiqués sur la carte par la mention appropriée).

## Les situations où le titre de séjour est accepté comme preuve d'identité

Dans la vie administrative française, le titre de séjour est généralement accepté comme preuve d'identité valide dans toutes les situations où la loi n'exige pas spécifiquement un document réservé aux nationaux. Ouvrir un compte bancaire, signer un bail de location, s'inscrire à la Sécurité sociale, contracter une assurance, retirer un colis recommandé à la poste, prendre un billet de train ou d'avion : dans toutes ces situations, le titre de séjour valide est un justificatif d'identité reconnu.

La préférence de certains acteurs privés pour la carte nationale d'identité ou le passeport est parfois exprimée, mais elle ne peut pas devenir une exigence discriminatoire. La loi française interdit aux professionnels de refuser de traiter avec une personne au seul motif qu'elle ne possède pas de carte nationale d'identité. L'Office National contre les Discriminations (ONCD) et le Défenseur des droits sont compétents pour traiter les plaintes relatives à ces situations.

## Les limites du titre de séjour comme pièce d'identité

Malgré son utilité générale comme document d'identité, le titre de séjour présente des limites spécifiques dans certaines situations. Pour accéder à certaines prestations ou à certains emplois réservés aux citoyens français ou aux ressortissants de l'Union européenne, le titre de séjour ne suffit pas — la preuve de la nationalité concernée est requise. Ces emplois réservés aux nationaux ou aux citoyens européens incluent les postes régaliens (magistrature, armée, police nationale, diplomatie) et certaines professions réglementées.

Pour certains actes notariaux ou juridiques — la signature d'actes immobiliers, la constitution de certaines sociétés — le notaire peut exiger des documents d'identité spécifiques permettant de vérifier l'identité civile indépendamment du titre de séjour. Le passeport étranger du pays d'origine, accompagné du titre de séjour, est généralement la combinaison acceptée dans ces contextes.

Pour les voyages à l'international, enfin, le titre de séjour seul ne suffit pas à franchir les frontières — il doit être accompagné du passeport du pays d'origine valide. Le titre de séjour atteste de la régularité du séjour en France mais n'est pas un document de voyage. Il permet de prouver qu'on a le droit de revenir en France après un voyage à l'étranger, mais le document de voyage est le passeport national.

## La conservation et le renouvellement du titre de séjour

La conservation du titre de séjour en bon état est une obligation pratique qui découle de son importance légale. Un titre abîmé, déchiré, ou dont le film plastique est décollé peut être refusé comme preuve d'identité. En cas de détérioration, une demande de duplicata doit être faite à la préfecture.

La perte ou le vol du titre de séjour doit être déclaré à la police ou la gendarmerie dans les plus brefs délais et un récépissé de déclaration de perte ou vol doit être obtenu — ce récépissé sert de preuve temporaire pendant le délai de remplacement du titre. La demande de remplacement se fait ensuite à la préfecture, avec les documents habituels et le récépissé de déclaration.
`;

const L2 = `# La Carte d'Identité Française : Qui Peut l'Obtenir et Comment

La carte nationale d'identité française est le document d'identité par excellence pour les citoyens français — léger, durable, universellement reconnu, elle accompagne son titulaire dans tous les actes de la vie civile et dans ses déplacements au sein de l'espace européen. Sa délivrance est gratuite et sa durée de validité est de dix ans pour les adultes et de cinq ans pour les mineurs. Outil d'identification central, elle est également un document de voyage valable dans la plupart des pays de l'Union européenne sans nécessité de passeport.

## Qui peut obtenir une carte nationale d'identité française

La carte nationale d'identité française est réservée aux personnes de nationalité française, qu'elles soient nées françaises, françaises par mariage, ou naturalisées. Les étrangers résidant en France, même de longue date et titulaires d'une carte de résident, ne peuvent pas obtenir de carte nationale d'identité française — ce document est un attribut de la nationalité.

Les Français nés à l'étranger, les Français de souche établis dans des territoires d'outre-mer, les Français naturalisés et les binationaux ont tous droit à la carte nationale d'identité, sous réserve de justifier de leur nationalité française et de respecter les formalités de demande.

## La procédure de demande en France

La demande de carte nationale d'identité se fait en mairie, dans une mairie équipée du dispositif de recueil biométrique — toutes les mairies ne disposent pas de ce dispositif. La consultation du site de la mairie de son lieu de résidence ou le service Passeport en ligne permet d'identifier les mairies compétentes et de prendre rendez-vous.

Le dossier de demande comprend les pièces justificatives d'identité et de nationalité française, un justificatif de domicile récent, et deux photographies d'identité conformes aux normes officielles. Pour les demandeurs qui font leur première demande ou qui renouvellent une carte périmée depuis plus de cinq ans, des documents d'état civil (acte de naissance) peuvent être requis. Le dossier est remis en main propre en mairie, les données biométriques (photographie et empreintes digitales) sont enregistrées sur place.

## La carte d'identité pour les Français établis hors de France

Les ressortissants français résidant à l'étranger peuvent obtenir leur carte nationale d'identité auprès du consulat français de leur lieu de résidence. La procédure est similaire à celle pratiquée en France, avec les adaptations liées au contexte consulaire : prendre rendez-vous au consulat, se présenter avec les mêmes documents justificatifs, et attendre un délai qui peut être plus long que la procédure en France selon la charge de travail du consulat.

Pour les Français inscrits au registre des Français établis hors de France, la carte nationale d'identité peut être demandée directement au consulat sans avoir à se déplacer en France — un avantage pratique considérable pour les expatriés dont les documents arrivent à expiration.

## L'utilisation de la carte d'identité en Europe

La carte nationale d'identité française est un document de voyage valable dans l'ensemble des États membres de l'Union européenne, dans les États membres de l'Espace Économique Européen (Islande, Liechtenstein, Norvège) et en Suisse. Pour les voyages entre ces pays, la carte d'identité française dispense son titulaire de la nécessité de se munir d'un passeport — un avantage pratique et symbolique qui rappelle la citoyenneté européenne commune des ressortissants des États membres.

En dehors de cet espace européen, la carte nationale d'identité française n'est pas un document de voyage universellement reconnu — certains pays peuvent l'accepter sur la base d'accords bilatéraux, mais d'autres reqièrent un passeport. Le site du ministère français des Affaires étrangères (France Diplomatique) fournit pour chaque pays les informations à jour sur les documents requis pour les ressortissants français.

## La carte d'identité perdue ou volée : que faire ?

En cas de perte ou de vol de sa carte nationale d'identité, plusieurs démarches s'imposent rapidement. La première est de déclarer la perte ou le vol auprès de la police ou de la gendarmerie et d'obtenir un récépissé de déclaration. Ce récépissé est nécessaire pour la demande de nouvelle carte si le document avait moins de deux ans au moment de la perte ou du vol. La demande de nouvelle carte se fait ensuite en mairie, avec le récépissé de déclaration et les pièces justificatives habituelles.

La seconde démarche est de signaler le document perdu ou volé dans le système national de déclaration des documents volés — ce qui prevent son utilisation frauduleuse par un tiers. L'agent de police ou de gendarmerie qui reçoit la déclaration effectue généralement cette signalisation d'office.
`;

const L3 = `# Le Numéro de Sécurité Sociale : Obtenir et Gérer son NIR

Le Numéro d'Identifiant au Répertoire (NIR), plus souvent appelé numéro de Sécurité sociale, est l'un des identifiants administratifs les plus fondamentaux en France. Attribué à chaque personne affiliée à la Sécurité sociale française, il est utilisé pour l'identification dans l'ensemble du système de protection sociale français — assurance maladie, assurance retraite, assurance chômage. Ce numéro à treize chiffres est une clé d'accès au système de protection sociale qui détermine la capacité de chacun à faire valoir ses droits sociaux.

## La structure du numéro de Sécurité sociale

Le numéro de Sécurité sociale suit une structure précise de treize chiffres, complétés par deux chiffres de clé de contrôle — soit quinze chiffres au total. Chaque groupe de chiffres encode une information spécifique sur la personne : le premier chiffre indique le sexe (1 pour masculin, 2 pour féminin), les deux chiffres suivants indiquent l'année de naissance, les deux suivants le mois de naissance, et ainsi de suite avec le département ou le pays de naissance et l'ordre d'inscription dans le registre.

Cette structure informative du numéro présente un avantage pratique — en lisant un numéro de Sécurité sociale, un professionnel de santé ou un agent administratif peut immédiatement identifier certaines caractéristiques du titulaire. Elle présente aussi un inconvénient en termes de protection de la vie privée — le numéro révèle des informations personnelles comme le genre, l'année de naissance et le pays de naissance. C'est pourquoi ce numéro doit être traité avec la même discrétion que d'autres données personnelles sensibles.

## Comment obtenir son numéro de Sécurité sociale quand on arrive en France

Pour les personnes qui n'ont pas de numéro de Sécurité sociale à leur arrivée en France — notamment les étrangers extra-européens qui n'ont pas encore de numéro dans leur pays d'origine reconnu par la France —, l'obtention du numéro passe par une demande auprès de la CPAM (Caisse Primaire d'Assurance Maladie) du lieu de résidence. Cette demande nécessite de justifier de son identité, de sa résidence en France et de sa situation administrative (titulaire d'un titre de séjour, ou ressortissant européen).

Les documents à fournir comprennent généralement : un justificatif d'identité et de nationalité (passeport), le titre de séjour ou, pour les Européens, une pièce d'identité nationale, un justificatif de domicile récent, et un acte d'état civil (acte de naissance) avec traduction officielle si nécessaire. Le délai de traitement varie entre quelques semaines et plusieurs mois selon les CPAM.

## Le numéro provisoire : une étape intermédiaire importante

Pendant le délai de traitement de la demande de numéro définitif, la CPAM peut attribuer un numéro provisoire (appelé parfois « numéro d'attente » ou numéro commençant par 7 ou 8 selon les cas). Ce numéro provisoire permet d'ouvrir les droits à l'assurance maladie et d'accéder aux soins pendant le délai d'attribution du numéro définitif. Il est associé au dossier du demandeur dans les systèmes informatiques de la CPAM et doit être mentionné dans toutes les correspondances avec la caisse pendant cette période.

Le passage du numéro provisoire au numéro définitif se fait automatiquement lorsque le dossier est traité, mais le demandeur doit souvent faire une démarche active pour s'enquérir du statut de sa demande si aucune notification n'a été reçue dans les délais habituels.

## La carte Vitale et son lien avec le numéro de Sécurité sociale

Le numéro de Sécurité sociale est l'identifiant de la carte Vitale — la carte plastifiée avec puce électronique qui est le sésame pour l'accès aux soins remboursés dans les médecins, les pharmacies, les laboratoires et les hôpitaux. La carte Vitale encode les droits à l'assurance maladie du titulaire et permet la télétransmission automatique des feuilles de soins aux organismes de remboursement.

La demande de carte Vitale suit généralement de quelques mois l'attribution du numéro définitif. Elle se fait via un formulaire disponible sur le site de l'Assurance Maladie (ameli.fr) ou auprès des agences CPAM. La carte est envoyée par courrier à l'adresse déclarée. En attendant sa réception, une attestation papier de droits peut être utilisée pour prouver son affiliation à la Sécurité sociale auprès des professionnels de santé.

## Les usages du numéro de Sécurité sociale au-delà de la santé

Le NIR est utilisé bien au-delà du système de santé. C'est l'identifiant principal dans le système de retraite français — toutes les cotisations retraite versées au cours de la vie active sont enregistrées sous ce numéro. C'est l'identifiant utilisé par Pôle Emploi pour le suivi des droits à l'assurance chômage. C'est l'identifiant utilisé par les caisses d'allocations familiales (CAF) pour les prestations familiales et les aides au logement. C'est également l'identifiant utilisé dans certains fichiers fiscaux.

Cette centralité du NIR dans l'ensemble du système de protection sociale français fait de son obtention une priorité pour toute personne qui s'installe durablement en France. Sans numéro de Sécurité sociale, l'accès à l'ensemble du système de protection sociale est soit impossible soit extrêmement complexe. Obtenir ce numéro le plus tôt possible après l'établissement en France est donc une démarche administrative fondamentale.
`;

const L4 = `# État Civil en France : Actes de Naissance, Mariage, PACS et Légalisation

L'état civil est le système par lequel l'État français enregistre, conserve et certifie les événements fondamentaux de la vie civile des personnes : la naissance, le mariage, le divorce, le décès, et leurs modifications. En France, les actes d'état civil sont des documents officiels délivrés par les officiers d'état civil des mairies — ou, pour les événements survenus à l'étranger, par les ambassades et consulats français ou dans les registres des pays concernés. Comprendre comment fonctionne l'état civil en France et comment obtenir les documents d'état civil qui vous concernent est une compétence administrative essentielle.

## L'acte de naissance : le document fondamental de l'identité civile

L'acte de naissance est le premier document d'état civil d'une personne : il enregistre officiellement sa venue au monde, établit son identité civile (nom, prénom, date et lieu de naissance, filiation), et constitue la base de tous les documents d'identité qui seront établis par la suite. En France, toute naissance doit être déclarée à la mairie du lieu de naissance dans les cinq jours suivant l'accouchement.

Plusieurs formes d'actes de naissance sont délivrées selon les besoins. La copie intégrale de l'acte de naissance reproduit l'ensemble des informations contenues dans l'acte, y compris les mentions marginales ajoutées postérieurement (mariage, divorce, décès). L'extrait avec filiation reproduit les informations principales de l'acte avec les références aux parents. L'extrait sans filiation est une version allégée qui ne mentionne pas les parents — plus respectueuse de la vie privée dans certains contextes.

Pour les étrangers résidant en France dont les actes de naissance ont été établis dans leur pays d'origine, les actes originaux doivent généralement être traduits en français par un traducteur assermenté et, selon les pays, légalisés ou apostillés pour être reconnus par les administrations françaises.

## Le mariage civil et ses incidences administratives

Le mariage civil en France crée une situation légale nouvelle avec des conséquences administratives importantes pour les étrangers. L'acte de mariage, délivré par la mairie qui a célébré le mariage, est un document d'état civil officiel qui prouve la situation matrimoniale et peut ouvrir des droits spécifiques en termes de titre de séjour (conjoint de Français) et, à terme, de nationalité (acquisition de la nationalité française par mariage après quatre ans).

Pour se marier en France, les étrangers doivent présenter certains documents spécifiques qui varient selon leur nationalité et leur situation : acte de naissance récent avec traduction officielle, certificat de coutume et de célibat délivré par les autorités de leur pays d'origine, titre de séjour valide. La vérification de la législation du pays d'origine est indispensable car certains pays ont des règles spécifiques sur la reconnaissance des mariages célébrés à l'étranger.

## Le PACS : une alternative au mariage avec des effets limités

Le Pacte Civil de Solidarité (PACS) est une forme d'union civile créée par la loi française en 1999, ouverte aux couples de même sexe ou de sexe différent. Le PACS crée certains droits et obligations entre les partenaires — régime fiscal commun possible, droits successoraux améliorés, solidarité dans les dettes — mais il ne confère pas les mêmes droits que le mariage sur plusieurs points importants pour les étrangers.

En termes de titre de séjour, le PACS avec un ressortissant français peut ouvrir droit à un titre de séjour « vie privée et familiale » mais dans des conditions différentes du mariage — les délais pour demander la naturalisation par le biais d'un PACS sont notamment différents de ceux du mariage. La consultation d'un conseiller juridique ou d'une association est recommandée pour les personnes qui envisagent un PACS dans un contexte où les implications pour le titre de séjour sont importantes.

## La légalisation et l'apostille des documents étrangers

Les actes d'état civil étrangers — comme les actes de naissance, de mariage ou les extraits de casier judiciaire — ne sont pas automatiquement reconnus par les administrations françaises dans leur forme originale. Selon leur pays d'origine, ils doivent être soumis à l'une de deux procédures de validation : la légalisation diplomatique ou l'apostille.

La légalisation est la procédure qui s'applique aux documents issus de pays qui ne sont pas parties à la Convention de La Haye de 1961 sur l'apostille. Elle implique une chaîne de validations successives : validation par les autorités locales du pays d'émission, validation par le ministère des Affaires étrangères du pays d'émission, puis validation par l'ambassade ou le consulat français dans ce pays. Cette procédure est longue (plusieurs semaines à plusieurs mois) et coûteuse.

L'apostille est une procédure simplifiée applicable entre les pays signataires de la Convention de La Haye. Elle consiste en l'apposition d'un certificat standardisé sur le document par les autorités désignées du pays d'émission, sans validation consulaire supplémentaire. Cette procédure est plus rapide et moins onéreuse que la légalisation.

La France a conclu avec plusieurs pays (notamment les pays du Maghreb et certains pays africains) des accords bilatéraux qui dispensent leurs ressortissants légalement résidents en France de la légalisation ou de l'apostille pour certains documents — une simplification précieuse pour les personnes concernées. Vérifier les accords bilatéraux existants avant d'entreprendre une procédure de légalisation ou d'apostille peut permettre de l'économiser entièrement.
`;

const L5 = `# FranceConnect et Signature Électronique : Accès aux Services Publics Numériques

FranceConnect est le système d'authentification unifié mis en place par l'État français pour permettre aux citoyens et résidents d'accéder à l'ensemble des services publics en ligne avec un seul identifiant. Plutôt que de créer un compte spécifique pour chaque service public numérique — impôts, CAF, Pôle Emploi, Ameli — FranceConnect permet de s'authentifier auprès de tous ces services en utilisant les identifiants d'un compte existant préalablement validé. C'est un outil de simplification administrative majeur qui transforme l'accès aux droits et services pour les personnes qui savent l'utiliser.

## Le principe de FranceConnect et ses fournisseurs d'identité

FranceConnect fonctionne sur un modèle de délégation d'authentification. Au lieu de créer une identité numérique propre, FranceConnect s'appuie sur des « fournisseurs d'identité » préexistants qui ont déjà vérifié votre identité lors de l'ouverture de votre compte chez eux. Ces fournisseurs d'identité incluent notamment La Poste (via le compte La Poste), les impôts (via le compte impots.gouv.fr), et l'Assurance Maladie (via le compte ameli.fr).

Pour utiliser FranceConnect, vous devez disposer d'un compte valide auprès de l'un de ces fournisseurs d'identité. Lorsque vous souhaitez accéder à un service partenaire de FranceConnect — déclaration de revenus, demande de CAF, demande de titre de séjour en ligne — vous cliquez sur le bouton FranceConnect, choisissez votre fournisseur d'identité, vous connectez avec les identifiants de ce fournisseur, et vous êtes automatiquement redirigé vers le service partenaire avec votre identité vérifiée.

## L'accès des étrangers à FranceConnect

Les étrangers résidant régulièrement en France peuvent utiliser FranceConnect, mais avec certaines limitations initiales. Pour créer un compte FranceConnect, il faut disposer d'un compte auprès d'un fournisseur d'identité qui a vérifié son identité. Pour les personnes qui n'ont pas encore de compte impôts.gouv.fr parce qu'elles sont récemment arrivées en France, la création de compte avec La Poste est souvent la voie la plus accessible.

La Poste propose un service d'identité numérique qui permet aux étrangers titulaires d'un titre de séjour valide de créer un compte La Poste vérifié, utilisable ensuite comme fournisseur d'identité FranceConnect. La vérification de l'identité se fait en agence postale ou par un facteur qui confirme l'identité à domicile — un processus qui nécessite la présentation du titre de séjour et parfois d'autres documents.

## Les services accessibles via FranceConnect

L'éco-système des services publics accessibles via FranceConnect est en expansion permanente. Parmi les services les plus utilisés figurent : les déclarations fiscales sur impots.gouv.fr, les demandes de prestations et les actualisations de dossiers sur caf.fr, les démarches liées à l'assurance maladie sur ameli.fr, les demandes liées à l'assurance chômage sur pole-emploi.fr, les services liés à l'éducation nationale (Educonnect) et les demandes de renouvellement de titre de séjour sur les plateformes préfectorales qui l'acceptent.

La valeur de FranceConnect dans la vie quotidienne est directement proportionnelle au nombre de services qu'on utilise : une personne qui déclare ses impôts, gère ses allocations CAF, suit ses remboursements ameli et gère son titre de séjour en ligne bénéficiera d'une simplification administrative significative par rapport à la gestion de comptes séparés pour chacun de ces services.

## La signature électronique : valeur légale et utilisation

La signature électronique est un mécanisme qui permet de signer des documents numériques avec une valeur juridique déterminée par la loi. En France, la réglementation sur la signature électronique est alignée sur le règlement européen eIDAS (Electronic IDentification, Authentication and trust Services), qui définit trois niveaux de signature électronique : la signature électronique simple, la signature électronique avancée, et la signature électronique qualifiée.

La signature électronique simple est acceptable pour les actes courants de faible enjeu juridique — elle peut être créée facilement avec des outils numériques classiques. La signature électronique avancée offre une garantie plus forte de l'identité du signataire et est requise pour des actes à enjeu juridique moyen. La signature électronique qualifiée, équivalente en droit à la signature manuscrite, est requise pour les actes les plus engageants — contrats immobiliers, actes notariés.

## La protection de l'identité numérique

La sécurité de son identité numérique — notamment de ses comptes FranceConnect et des services publics associés — est une responsabilité personnelle qui mérite une attention régulière. Les mots de passe must être forts et uniques pour chaque service, et ne jamais être partagés. L'activation de la double authentification (2FA), quand elle est disponible, est une mesure de sécurité supplémentaire fortement recommandée.

Les tentatives de phishing — emails ou SMS frauduleux qui imitent des communications officielles de services publics pour soutirer identifiants et mots de passe — sont fréquentes. Les services publics français ne demandent jamais de communiquer des mots de passe par email ou par téléphone. En cas de doute sur un email ou un SMS, il vaut mieux accéder directement au service par l'adresse officielle du site plutôt que de cliquer sur un lien dans le message suspect.
`;

await patch('36cfc7d1-8d6f-4675-b3eb-a9869510c3fb', L1);
await patch('c45ead0e-59bd-4111-ae65-a67f5876e64a', L2);
await patch('85b81635-2ed7-4f34-9a6f-7a9983c3938f', L3);
await patch('88815b07-7563-421e-b88a-97f4bcb999c2', L4);
await patch('99c1c557-b868-495b-9614-cf90a7dd7919', L5);
