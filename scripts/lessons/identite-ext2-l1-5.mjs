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

const EXT2_L1 = `
## Le régime de réciprocité dans la reconnaissance des documents d'identité

La reconnaissance des documents d'identité étrangers en France repose sur un principe de réciprocité encadré par les traités internationaux et les conventions bilatérales. Pour les pays avec lesquels la France entretient des relations diplomatiques normales, les documents d'identité officiels (passeports, cartes d'identité nationales) sont en principe reconnus. Pour les cas plus complexes — États dont la reconnaissance internationale est contestée, documents délivrés par des entités non reconnues — l'administration française a des procédures spécifiques.

Les personnes issues de pays dont l'État ne fonctionnait plus normalement lors de leur départ (pays en guerre civile, États défaillants) peuvent avoir des documents dont l'authenticité est difficile à vérifier. L'OFPRA et les tribunaux administratifs ont développé une jurisprudence abondante sur ces cas, reconnaissant parfois la force probante de documents délivrés par des autorités locales même non reconnues internationalement, dès lors que d'autres éléments corroborent leur authenticité.

## Le fichier AGDREF et la traçabilité du séjour

Le fichier AGDREF (Application de Gestion des Dossiers des Ressortissants Étrangers en France) est la base de données centrale de l'État qui enregistre l'ensemble des titres de séjour délivrés en France depuis sa création. Chaque titre de séjour délivré par une préfecture y est enregistré avec ses caractéristiques (type, durée, mentions), les informations d'identité du titulaire, et l'historique des renouvellements. C'est la consultation de cette base qui permet aux agents préfectoraux, lors d'une demande de renouvellement ou d'un changement de statut, de reconstituer l'historique complet du séjour d'une personne en France.

Pour les titulaires dont le parcours administratif comprend plusieurs types de titres successifs (étudiant, puis salarié, puis vie privée et familiale), AGDREF constitue l'archive officielle de la continuité du séjour. En cas de perte de certains documents personnels, les agents préfectoraux peuvent en principe retrouver dans AGDREF les informations sur les anciens titres — ce qui facilite la reconstitution d'un dossier. Les personnes dont le dossier est particulièrement complexe peuvent demander une copie de leurs données personnelles dans AGDREF via une demande d'accès aux données personnelles au titre du RGPD.

## L'identité et la nationalité : deux concepts distincts

Une confusion fréquente dans l'utilisation quotidienne des documents d'identité est la confusion entre identité et nationalité. L'identité d'une personne est l'ensemble des caractéristiques qui permettent de l'identifier de façon unique : nom, prénoms, date et lieu de naissance, filiation. La nationalité est le lien juridique qui rattache une personne à un État — elle détermine les droits civiques, diplomatiques et certains droits économiques.

Un titre de séjour français prouve l'identité de son titulaire (nom, prénom, photo) et indirectement sa nationalité étrangère (via la mention du pays d'origine), mais il ne confère pas la nationalité française. Un passeport étranger prouve à la fois l'identité et la nationalité étrangère de son titulaire. La confusion entre ces deux attestations est source de malentendus dans les démarches administratives — certains organismes qui demandent une « preuve de nationalité » attendent en réalité un passeport et non pas un titre de séjour, qui ne prouve que la résidence régulière et l'identité.

## La protection des données d'identité dans les transactions commerciales

Chaque fois qu'une personne communique une copie de son document d'identité à un organisme commercial — pour louer une voiture, ouvrir un compte en ligne, souscrire un contrat d'énergie — elle transfère des données personnelles sensibles. La copie d'un titre de séjour contient des informations particulièrement précieuses pour des fraudeurs éventuels : l'identité complète, la date de naissance, la nationalité, le numéro du titre. Ces données peuvent servir à usurper l'identité de la personne pour ouvrir des crédits frauduleux ou effectuer des démarches en son nom.

La CNIL recommande de n'envoyer des copies de documents d'identité que lorsque cela est strictement nécessaire, et de mentionner sur la copie la finalité pour laquelle elle est transmise — par exemple, écrire manuellement sur la copie « copie transmise à [organisme] le [date] pour [finalité] » rend cette copie inutilisable pour un autre organisme en cas d'interception frauduleuse. Cette technique de marquage des copies est un réflexe simple de protection des données qui mérite d'être adopté systématiquement.
`;

const EXT2_L2 = `
## La carte d'identité française pour les Français nés à l'étranger

Les Français nés à l'étranger — qu'ils soient fils ou filles de parents français expatriés, personnes adoptées à l'étranger, ou personnes naturalisées — ont le même droit à la carte nationale d'identité française que les Français nés sur le territoire national. Pour les Français nés à l'étranger dont l'acte de naissance n'est pas établi sur les registres consulaires français, la procédure d'obtention de la carte d'identité peut nécessiter des étapes supplémentaires pour faire établir une copie d'acte de naissance consultable par la mairie.

Le registre de l'état civil consulaire, tenu par les ambassades et consulats de France dans le monde, enregistre les naissances, mariages et décès des Français de l'étranger. Ce registre est administré par le service central d'état civil de Nantes, qui centralise l'ensemble des données d'état civil des Français nés ou ayant accompli des actes civils à l'étranger. Pour un Français né à l'étranger qui demande pour la première fois sa carte d'identité en France, l'obtention d'une copie de son acte de naissance auprès du SCEC de Nantes (par courrier ou en ligne) est souvent la première étape.

## La carte d'identité provisoire et les situations d'urgence

Dans des situations d'urgence documentées (voyage important imminent, deuil familial, obligations médicales), certaines mairies peuvent délivrer une attestation provisoire de perte ou de renouvellement de carte d'identité. Cette attestation, qui n'est pas une carte d'identité mais un document provisoire, prouve que la demande de carte est en cours et peut être utilisée dans certains contextes où la présentation d'une pièce d'identité est demandée.

Ce mécanisme de document provisoire est cependant très limité dans ses applications — il n'est pas reconnu comme document de voyage à l'international et ne peut pas remplacer la carte d'identité dans des démarches formelles importantes. Pour les voyages urgents nécessitant une pièce d'identité, la solution est souvent la demande de passeport en urgence (disponible dans de nombreuses mairies sous 24 à 48 heures) plutôt que d'attendre l'émission d'une carte d'identité standard qui prend plusieurs semaines.

## Les spécificités de la carte d'identité pour les mineurs

La carte nationale d'identité peut être délivrée à un enfant dès sa naissance, même si en pratique elle n'est demandée que lorsque le besoin s'en fait sentir — premier voyage en Europe, inscription dans certaines activités nécessitant une pièce d'identité. Pour les enfants, la demande est effectuée par les parents ou le tuteur légal, qui doit présenter les preuves de sa propre identité et de sa qualité de représentant légal de l'enfant.

La durée de validité de la carte nationale d'identité est de dix ans pour les adultes mais de cinq ans seulement pour les mineurs de moins de quinze ans — une différence justifiée par l'évolution plus rapide de l'apparence physique des enfants. Pour les adultes, la durée de validité a été portée de dix à quinze ans par un décret de 2014, mais seules les cartes délivrées après cette date bénéficient de cette prolongation automatique. Les cartes délivrées avant 2014 restent valides dix ans à partir de leur date d'émission.

## La carte d'identité et les professions réglementées

Pour l'exercice de certaines professions réglementées en France, la possession d'une carte nationale d'identité française (ou d'un autre document attestant la nationalité française ou européenne) est une condition d'accès. C'est notamment le cas pour les emplois dans les forces de l'ordre (police nationale, gendarmerie), dans la magistrature, dans la diplomatie, et pour de nombreuses fonctions dans la fonction publique française. Ces restrictions à l'emploi, fondées sur la nationalité, sont légales et reconnues par le droit européen pour les emplois impliquant l'exercice de l'autorité publique ou la prérogative de puissance publique.

Pour les étrangers de l'Union européenne résidant en France, les conditions d'accès à la fonction publique sont légèrement élargies — ils peuvent accéder aux emplois qui ne mettent pas en jeu la souveraineté nationale ou l'exercice de l'autorité publique. Pour les ressortissants hors UE, l'accès à la fonction publique est réservé à quelques catégories spécifiques (enseignants-chercheurs universitaires par exemple) et nécessite dans les autres cas une nationalité française.
`;

const EXT2_L3 = `
## L'évolution vers l'Identifiant National de Santé dématérialisé

La réforme eSanté, engagée en France dans le cadre du programme Ma Santé 2022, a initié une transformation profonde du système d'information de santé qui repose en grande partie sur la généralisation de l'INS comme identifiant unique du patient dans toutes les bases de données de santé. Cette réforme vise à supprimer les silos d'information qui empêchaient jusqu'ici les différents acteurs de santé d'accéder à un historique cohérent et complet des soins d'un patient.

Le Dossier Médical Partagé (DMP), désormais integré à l'application Mon Espace Santé disponible depuis 2022, est le récepteur de l'ensemble des données de soins construites autour de l'INS. Ce dossier numérique, auquel le patient peut accéder via son compte ameli.fr, regroupe les comptes rendus d'hospitalisation, les résultats d'analyses, les ordonnances, et les données de vaccination. Sa bonne utilisation nécessite que l'INS soit certifié et non plus simplement en format provisoire — raison supplémentaire pour les étrangers de s'assurer rapidement de la certification de leur INS lorsqu'ils s'installent en France.

## Le numéro NIR et l'accès aux services publics en ligne

Au-delà de l'Assurance Maladie, le NIR est utilisé dans plusieurs autres systèmes d'information publics pour identifier les personnes physiques. CHORUS Pro, le système de facture électronique des marchés publics, utilise le NIR pour identifier les auto-entrepreneurs et professions libérales qui facturent des organismes publics. Le système Net-Particuliers, qui gère les impôts des particuliers, peut utiliser le NIR en complément du numéro fiscal SPI pour certaines vérifications d'identité.

L'accès croissant des services publics à une identification unique basée sur le NIR est une évolution vers un « guichet unique numérique » qui facilite les démarches des citoyens — moins de re-saisie d'informations d'un service à l'autre, moins de risques d'erreurs sur l'identité. Cette évolution bénéficie particulièrement aux étrangers vivant en France qui, une fois leur NIR définitif certifié, n'ont plus à re-justifier leur identité de façon répétée auprès de multiples administrations.

## La retraite et le NIR : comment les années de cotisation sont comptabilisées

Le NIR est l'instrument central du compte retraite personnel de chaque assuré. Chaque employeur qui paie des cotisations de retraite pour son salarié transmet ces informations via la Déclaration Sociale Nominative, liée au NIR du salarié. Ces informations alimentent le compte retraite personnel, accessible sur le site lassuranceretraite.fr (pour le régime général) ou info-retraite.fr (pour la consultation multi-régimes).

Pour les étrangers qui ont travaillé en France pendant une partie de leur carrière et souhaitent savoir à quels droits retraite ils peuvent prétendre, la consultation du compte retraite via leur NIR est la première étape. La France a signé des conventions bilatérales de Sécurité sociale avec de nombreux pays — qui permettent de totaliser les périodes d'assurance dans les deux pays pour remplir les conditions d'ouverture des droits à la retraite, même si elles ne permettent pas d'exporter des droits non encore acquis. La vérification de ces droits via le NIR doit être effectuée plusieurs années avant le départ en retraite pour detecter et corriger d'éventuelles anomalies dans les relevés de carrière.

## NIR et allocations familiales : l'identification pour les prestations CAF

La Caisse d'Allocations Familiales (CAF) identifie les allocataires principalement via leur numéro d'allocataire, mais ce numéro est lui-même lié au NIR dans les systèmes back-office de la CAF. Les vérifications de droits effectuées par la CAF auprès de l'administration fiscale, de la CPAM et de Pôle Emploi utilisent le NIR comme clé d'identification commune. Pour les étrangers qui demandent des prestations à la CAF (RSA, allocations familiales, aide au logement), disposer d'un NIR définitif certifié est souvent une condition préalable à l'instruction de la demande.

Les situations dans lesquelles un allocataire CAF change de NIR — par exemple, lors de la correction d'un NIR erroné — peuvent créer des complications dans le suivi des prestations. La CAF doit être informée du changement de NIR pour mettre à jour ses dossiers, et des vérifications supplémentaires peuvent être demandées pour s'assurer que les droits sont correctement reportés sur le nouveau NIR. Prévenir la CAF de tout changement dans la situation d'identité est une formalité qui évite des interruptions de paiement des prestations.
`;

const EXT2_L4 = `
## Le mariage en France entre personnes de nationalités différentes

Le mariage en France peut avoir lieu entre deux personnes de nationalités différentes, et il soulève des questions complexes de droit international privé. La question principale est : quel droit régit le mariage ? En France, les conditions de fond du mariage (capacité à se marier, absence d'empêchements dirimants) sont régies par la loi nationale de chaque futur époux — ce qui peut créer des situations où deux droits différents s'appliquent simultanément. La loi française régit les conditions de fond pour l'époux français, et la loi étrangère régit les conditions de fond pour l'époux étranger.

Cela signifie que si la loi du pays d'origine de l'époux étranger exige certaines conditions supplémentaires pour le mariage — un certificat de célibat délivré par les autorités étrangères, un délai d'attente spécifique, l'absence d'un mariage antérieur non dissous — ces conditions doivent être remplies même si elles ne sont pas exigées par le droit français. L'officier d'état civil français qui célèbre le mariage a la responsabilité de vérifier que les conditions de fond applicables aux deux époux sont remplies, ce qui peut l'amener à demander des documents supplémentaires pour l'époux étranger.

## La transcription du mariage religieux en mariage civil

En France, seul le mariage civil célébré devant un officier d'état civil a des effets civils reconnus par le droit français — il n'y a pas de mariage civil automatiquement découlant d'un mariage religieux. Un couple qui se marie à l'église, à la mosquée ou à la synagogue sans avoir préalablement ou simultanément contracté un mariage civil à la mairie n'est pas marié du point de vue de l'état civil français.

Cette règle, issue de la séparation des Églises et de l'État opérée par la loi de 1905, a des implications importantes pour les couples dont l'un des membres est étranger. Si le mariage religieux a été célébré dans un pays étranger où il a également des effets civils selon le droit local (comme dans de nombreux pays de tradition islamique ou orthodoxe), ce mariage peut être reconnu en France via la procédure de transcription sur les registres consulaires français. La transcription confère au mariage étranger les effets civils du mariage français.

## La déclaration des naissances et le livret de famille

En France, toute naissance survenant sur le territoire national doit être déclarée à la mairie dans les cinq jours suivants. Cette déclaration est effectuée soit par le père, soit par les témoins de l'accouchement, soit par le médecin ou la sage-femme. Elle donne lieu à l'établissement d'un acte de naissance sur les registres d'état civil de la mairie, qui est la source originelle de l'identité civile de l'enfant en France.

Pour les parents étrangers, la naissance d'un enfant en France soulève la question de la nationalité de l'enfant. Si aucun des parents n'est français, l'enfant naît étranger en France — de la nationalité de ses parents selon les règles de droit international privé. La déclaration de naissance est obligatoire et ne peut pas être omise même si les parents sont en situation irrégulière — l'acte de naissance est un document d'état civil qui ne préjuge pas de la situation administrative des parents.

## La reconnaissance de paternité et ses implications administratives

La reconnaissance de paternité est un acte juridique par lequel un homme reconnaît officiellement un enfant comme le sien, établissant ainsi un lien de filiation légal. En droit français, la présomption de paternité s'applique au mari dans le cadre du mariage — l'enfant né pendant le mariage est présumé être le fils ou la fille du mari. En dehors du mariage, la filiation paternelle doit être établie par une reconnaissance volontaire ou par décision judiciaire.

Pour les pères étrangers vivant en France, la reconnaissance de paternité a des implications multiples. Sur le plan de l'état civil, elle modifie le nom de l'enfant si le père souhaite lui transmettre son nom. Sur le plan du droit au séjour, être parent d'un enfant résidant habituellement en France dont on assume effectivement la charge peut ouvrir des droits à certains types de titre de séjour. Sur le plan de l'obligation alimentaire, la reconnaissance de paternité crée une obligation légale de contribuer à l'entretien de l'enfant, indépendamment de la résidence du père.
`;

const EXT2_L5 = `
## L'interopérabilité de FranceConnect avec les services européens

Au-delà du territoire français, FranceConnect s'inscrit dans un cadre européen plus large d'interopérabilité des identités numériques. Le règlement européen eIDAS (Electronic Identification and Authentication and Trust Services), adopté en 2014 et révisé avec eIDAS 2.0 en 2024, oblige les États membres à reconnaître mutuellement leurs systèmes d'identification électronique pour les services publics. La France a notifié son système d'identité électronique auprès de la Commission européenne pour permettre cette reconnaissance transfrontalière.

Dans la pratique, un citoyen français équipé d'une identité numérique FranceConnect de niveau substantiel ou élevé pourra progressivement accéder à des services publics d'autres États membres européens, et réciproquement — les ressortissants européens ayant une identité numérique certifiée dans leur pays pourront accéder à certains services publics français avec ces mêmes identités. Cette interopérabilité est encore en construction, mais elle représente une évolution de fond vers un espace numérique européen unifié pour les services publics.

## L'identité numérique via l'application mobile France Identité

Le gouvernement français a lancé l'application France Identité pour permettre aux citoyens de stocker une version numérique certifiée de leur carte d'identité directement sur leur smartphone. Cette application, progressivement déployée depuis 2022, permet de prouver son identité numériquement sans avoir à présenter le document physique — une avancée particulièrement utile pour les démarches administratives en ligne qui demandent une pièce d'identité.

L'application France Identité utilise les données contenues dans la puce NFC de la nouvelle carte d'identité biométrique — les cartes délivrées à partir d'août 2021 qui contiennent une puce RFID. L'utilisateur « importe » ses données d'identité depuis sa carte physique vers l'application lors de l'installation, et peut ensuite utiliser l'application comme preuve d'identité numérique dans les contextes qui l'acceptent. La sécurité de ce système repose sur la cryptographie asymétrique — les données ne peuvent pas être altérées sans que l'altération ne soit détectable, et la preuve peut être vérifiée par un lecteur sans que les données originales ne soient exposées.

## Les cas où FranceConnect ne suffit pas et les alternatives

FranceConnect a une limitation importante : il est conçu principalement pour les personnes disposant déjà d'une relation établie avec l'un des fournisseurs d'identité participants. Pour une personne nouvellement arrivée en France qui n'a pas encore de compte impôts.gouv.fr, pas de compte ameli.fr, pas de contrat mobile, et pas de compte La Poste, accéder à FranceConnect peut être difficile voire impossible initialement.

Dans cette situation transitoire, les alternatives sont les suivantes. La création directe d'un compte sur le service administratif visé, en passant par une vérification d'identité par courrier (l'administration envoie un code par courrier à l'adresse déclarée pour confirmer que la personne y réside). La présentation physique dans un service public pour créer un compte en présentiant des documents d'identité physiques. L'utilisation d'un proche de confiance déjà référencé dans les systèmes administratifs pour certaines démarches qui l'autorisent. Ces alternatives sont moins pratiques mais parfaitement légales et sont prévues dans les systèmes.

## L'archivage légal des actes signés électroniquement

Un aspect souvent négligé de la signature électronique est la question de la conservation et de l'archivage des actes signés numériquement. Contrairement à un document papier qui peut être conservé physiquement pendant des décennies, un fichier numérique signé électroniquement peut poser des problèmes d'accessibilité à long terme : les formats de fichiers changent, les algorithmes cryptographiques utilisés à une époque peuvent devenir obsolètes, et les certificats qui permettaient de vérifier la signature peuvent expirer.

Les tiers archiveurs légaux (TAL), qui fournissent des services d'archivage à valeur probante selon la norme NF Z 42-013, sont des acteurs spécialisés qui garantissent la conservation à long terme des documents électroniques signés et leur accessibilité future avec des preuves de leur intégrité. Pour les particuliers, ces services sont rarement nécessaires dans la vie quotidienne. Pour les entreprises qui signent électroniquement de nombreux contrats ou actes importants, le recours à un TAL ou à un système d'archivage certifié est une précaution juridique importante.
`;

await appendAndPatch('36cfc7d1-8d6f-4675-b3eb-a9869510c3fb', EXT2_L1);
await appendAndPatch('c45ead0e-59bd-4111-ae65-a67f5876e64a', EXT2_L2);
await appendAndPatch('85b81635-2ed7-4f34-9a6f-7a9983c3938f', EXT2_L3);
await appendAndPatch('88815b07-7563-421e-b88a-97f4bcb999c2', EXT2_L4);
await appendAndPatch('99c1c557-b868-495b-9614-cf90a7dd7919', EXT2_L5);
