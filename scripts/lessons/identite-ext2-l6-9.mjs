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

const EXT2_L6 = `
## Le droit à l'image dans les documents d'identité

La photographie figurant sur un document d'identité est une donnée biométrique particulièrement sensible au sens du RGPD. Cette photo, qui permet une identification visuelle de la personne, ne peut être utilisée par les organismes qui l'ont collectée qu'aux fins pour lesquelles la collecte a été effectuée. Un bailleur qui photocopie la carte d'identité d'un candidat locataire ne peut légalement utiliser cette photo qu'à des fins de vérification d'identité dans le cadre de la relation locative — il ne peut pas la transmettre à des tiers, la publier ou l'utiliser à d'autres fins.

La protection de sa propre photographie d'identité est un aspect souvent méconnu de la protection des données personnelles. Lorsqu'une demande de copie de document d'identité avec photo est effectuée, il est possible de noircir partiellement la zone de la photo sur la copie (en conservant les données textuelles qui suffisent à l'identification) pour limiter le risque d'utilisation abusive de la photo. Certains experts en protection des données recommandent cette pratique, bien qu'elle ne soit pas légalement obligatoire.

## Les documents d'identité et le domaine bancaire

L'ouverture d'un compte bancaire en France est l'une des démarches qui exige la vérification la plus rigoureuse de l'identité du client, dans le cadre de la réglementation anti-blanchiment (AML — Anti-Money Laundering) et de la lutte contre le financement du terrorisme. Les banques sont obligées de vérifier l'identité de leurs clients lors de l'entrée en relation (procédure KYC — Know Your Customer) et de conserver les copies des documents d'identité présentés pendant une durée minimale fixée par la réglementation (cinq ans après la fin de la relation commerciale).

Pour les étrangers qui souhaitent ouvrir un compte bancaire en France, les exigences documentaires peuvent être plus importantes que pour les ressortissants français. Certaines banques exigent non seulement le titre de séjour valide, mais aussi le passeport, un justificatif de domicile récent, et parfois des informations sur la source des fonds. Le compte de dépôt (ou compte courant) est un droit garanti par la loi française — toute personne physique résidant en France peut demander l'ouverture d'un compte dans n'importe quelle banque, et si la banque refuse, elle peut solliciter la Banque de France pour exercer son droit au compte dans une banque désignée.

## La gestion des documents d'identité en cas de changement de statut juridique

Certains changements de statut juridique — naturalisation française, mariage modifiant le nom, divorce revenant au nom de jeune fille, changement légal de prénom — ont des répercussions sur tous les documents d'identité du détenteur. Après une naturalisation, par exemple, il faut mettre à jour successivement le titre de séjour (qui n'est plus nécessaire mais qui peut être conservé comme preuve de l'ancien statut), obtenir une carte nationale d'identité française, obtenir un passeport français, mettre à jour les informations auprès de l'Assurance Maladie, du Pôle Emploi, de la CAF, des banques, des assurances, et de tous les autre organismes ayant enregistré l'ancienne identité.

Cette cascade de mises à jour peut prendre plusieurs semaines à plusieurs mois, et il est conseillé de les planifier méthodiquement — en commençant par les documents qui servent de pièce de base pour obtenir les autres (la carte d'identité française est souvent nécessaire pour obtenir le passeport, et le passeport French est souvent demandé pour voyager pendant la période de transition). Une liste des organismes à informer, organisée par priorité, est un outil de planification utile pour éviter d'oublier une mise à jour qui pourrait créer des incohérences administratives.

## Le droit à l'information sur les données d'identité détenues

En application du RGPD, toute personne a le droit d'accéder aux données personnelles la concernant détenues par un organisme public ou privé, et d'en demander la rectification ou l'effacement sous certaines conditions. Pour les données d'identité, ce droit d'accès s'applique aux fichiers gérés par les préfectures (dossiers de titre de séjour dans AGDREF), par l'Assurance Maladie (dossier santé et NIR), par la CNIL elle-même pour les plaintes éventuelles, et par les organismes de crédit.

L'exercice de ce droit d'accès est gratuit et doit recevoir une réponse dans les délais prévus par la réglementation (un mois en principe, deux mois pour les demandes particulièrement complexes). En cas de refus ou de non-réponse, la CNIL peut être saisie. Ce droit est particulièrement utile pour vérifier que les données d'identité enregistrées dans les systèmes officiels sont exactes — notamment pour détecter d'éventuelles erreurs de transcription dans le NIR ou dans AGDREF qui pourraient créer des complications lors de démarches futures.
`;

const EXT2_L7 = `
## Les systèmes d'information partagés entre administrations pour la vérification d'identité

Dans le cadre de la lutte contre la fraude documentaire et l'usurpation d'identité, les administrations françaises disposent de systèmes d'information partagés qui permettent des vérifications croisées. Le Fichier National des Titres Électroniques Sécurisés (FNTÉS) enregistre les titres de séjour délivrés et permet aux agents préfectoraux pour s'assurer qu'un titre présenté correspond bien à un document légitimement émis. Ce fichier facilite également la signalisation des documents déclarés perdus ou volés pour prévenir leur utilisation frauduleuse.

Pour les titulaires de passeports étrangers, le système de vérification des documents de voyage dans les aéroports et les gares frontalières utilise la base de données INTERPOL sur les documents de voyage volés et perdus (base SLTD — Stolen and Lost Travel Documents). Un passeport déclaré volé et signalé dans cette base sera détecté lors de tout contrôle aux frontières dans les pays qui consultent cette base, ce qui constitue à la fois une protection pour le titulaire légitime et une dissuasion pour les fraudeurs.

## La gestion de l'identité lors d'un déménagement international

Le déménagement d'un pays à un autre implique une gestion complexe des documents d'identité et du statut administratif dans deux pays simultanément. Lorsqu'une personne quitte la France pour s'installer définitivement dans un autre pays, la question de la validité de son titre de séjour français se pose. En principe, le titre de séjour expire ou peut être retourné à la préfecture — il ne donne plus le droit de résider en France une fois que la résidence principale est effectivement établie à l'étranger.

Pour les Français qui déménagent à l'étranger, l'inscription au registre des Français établis hors de France auprès du consulat ou de l'ambassade de France dans le pays de destination est une démarche recommandée. Cette inscription facilite l'accès aux services consulaires (renouvellement de documents français depuis l'étranger, vote aux élections françaises par procuration, accès à l'aide consulaire en cas de difficultés). Elle crée également un dossier administratif qui peut faciliter le retour en France si des circonstances imprévues nécessitent un rapatriement.

## L'identité et les successions internationales

La gestion des successions impliquant des personnes de nationalités différentes ou des biens situés dans plusieurs pays soulève des questions d'identité juridique complexes. Un étranger décédé en France laissant des héritiers dans son pays d'origine devra faire constater son décès à la fois en France (acte de décès de l'état civil français) et dans son pays d'origine (transcription ou reconnaissance de l'acte de décès étranger). Les documents d'identité de la personne décédée — passeport, titre de séjour, actes d'état civil — sont des pièces essentielles dans la gestion de cette succession.

Pour les familles confrontées à ce type de situation, la consultation d'un notaire spécialisé en droit international privé des successions est indispensable. Les règles européennes en matière de successions (Règlement (UE) n°650/2012 dit « Rome IV ») facilitent la gestion des successions transfrontalières en unifiant les règles de compétence et de droit applicable pour les successions à dimension européenne — mais les successions impliquant des ressortissants de pays non membres de l'UE restent soumises à des règles plus complexes qui varient selon les pays concernés.

## Les erreurs à éviter dans la gestion de ses documents d'identité

Les erreurs les plus fréquentes dans la gestion des documents d'identité sont prévisibles et évitables avec une organisation minimale. La première erreur est de laisser expirer ses documents sans avoir entamé les démarches de renouvellement — un passeport expiré lors d'un voyage prévu, un titre de séjour dont la date d'expiration n'avait pas été vérifiée avant le départ. La règle de base est de vérifier la date d'expiration de tous ses documents deux fois par an, par exemple lors des solstices d'été et d'hiver.

La deuxième erreur est de ne pas conserver les récépissés et les accusés de réception des démarches administratives effectuées. Ces documents prouvent que la démarche a bien été réalisée dans les délais et constituent une protection en cas de litige sur la continuité du séjour régulier. La troisième erreur est de ne pas signaler les changements d'adresse à tous les organismes détenant des données d'identité — une adresse incorrecte dans les systèmes peut entraîner la non-réception de convocations, de décisions ou de documents importants. Mettre à jour son adresse auprès de la préfecture, de la CPAM, de la CAF et des banques dès tout déménagement est une obligation pratique fondamentale.
`;

const EXT2_L8 = `
## Le passeport comme preuve de nationalité dans les démarches notariales

Dans les démarches notariales en France — signature d'un acte authentique d'achat immobilier, donation, testament — l'identité des parties doit être vérifiée avec la plus grande rigueur par le notaire. Pour les ressortissants étrangers, le notaire demande systématiquement le passeport étranger, qui est le document qui certifie avec le plus de fiabilité la nationalité de la personne — une information essentielle pour déterminer le droit applicable à certains aspects de l'acte notarié.

La raison de cette insistance sur le passeport dans les démarches notariales est que la nationalité détermine le droit applicable à plusieurs questions juridiques importantes : le régime matrimonial applicable en cas de mariage avec un(e) ressortissant(e) d'un autre pays, les règles de succession applicables aux biens, ou encore la capacité juridique d'une personne — qui peut varier selon la loi nationale du pays de nationalité. Un notaire qui ignore la nationalité d'un client peut établir un acte avec des erreurs sur le droit applicable, ce qui peut le rendre inopposable ou contestable par la suite.

## La vérification d'identité dans les procédures judiciaires

Dans les procédures judiciaires en France — qu'il s'agisse de procédures civiles, pénales ou administratives — l'identité des parties, des témoins et des experts est vérifiée scrupuleusement par les greffiers et les juges. Les parties étrangères à une procédure judiciaire en France doivent présenter des documents d'identité valides lors de chaque audience ou démarche de greffe.

Pour les étrangers en situation irrégulière qui se trouvent impliqués dans une procédure judiciaire en France (par exemple, en tant que victime d'une infraction pénale), la participation à la procédure judiciaire ne peut pas être utilisée comme base pour une arrestation ou une expulsion — les autorités judiciaires sont distinctes des autorités chargées de l'application des lois sur l'immigration, et la protection des victimes et des témoins ne peut pas être compromise par leur statut administratif. Cependant, les pièces d'identité présentées dans le cadre judiciaire peuvent, dans certains cas, alimenter les fichiers de police.

## Le passeport et les obligations fiscales internationales

Pour les ressortissants américains résidant en France, le passeport américain joue un rôle particulier dans les obligations fiscales internationales liées à la loi FATCA (Foreign Account Tax Compliance Act). Les banques françaises sont tenues de déclarer aux autorités fiscales américaines les comptes détenus par leurs clients ressortissants américains, identifiés notamment via leur passeport américain. Cette exigence a conduit certaines banques françaises à refuser d'ouvrir des comptes pour les clients américains, en raison de la complexité et du coût de conformité que FATCA implique.

Cette situation illustre comment le passeport comme document d'identité internationale peut générer des obligations ou des contraintes dans des pays tiers — y compris dans un pays de résidence comme la France. Les ressortissants d'autres pays ayant des obligations de déclaration fiscale similaires (OCDE AEIO pour les résidents à hauts revenus, par exemple) peuvent se trouver dans des situations analogues. La consultation d'un conseiller fiscal international est recommandée pour les personnes ayant des obligations fiscales dans plusieurs pays.

## Le renouvellement du passeport et la continuité du titre de séjour français

Le calendrier de renouvellement du passeport étranger doit être coordonné avec le calendrier de renouvellement du titre de séjour français pour éviter des situations où l'un des deux documents expire pendant la démarche de renouvellement de l'autre. La situation idéale est que le passeport et le titre de séjour aient des dates d'expiration suffisamment décalées pour qu'un seul renouvellement soit à gérer à la fois et qu'il reste toujours au moins un document valide pour chaque démarche.

Si les deux documents arrivent à expiration simultanément — ce qui peut survenir si le titre de séjour a été calé sur la durée de validité du passeport lors de la dernière demande — il faut renouveler le passeport en priorité (car la préfecture ne renouvelle pas le titre de séjour sans passeport valide), puis renouveler le titre de séjour en présentant le nouveau passeport. Pendant la période intermédiaire entre l'expiration du titre de séjour et son renouvellement, le récépissé de demande de renouvellement sert de titre provisoire — à condition que le dossier ait bien été déposé à la préfecture avant l'expiration du titre.
`;

const EXT2_L9 = `
## La téléconsultation et la carte Vitale

La téléconsultation médicale, développée rapidement depuis la crise sanitaire de 2020, a transformé certains aspects de l'utilisation de la carte Vitale. La téléconsultation remboursée par l'Assurance Maladie nécessite que le patient soit bien identifié dans les systèmes du médecin — ce qui passe généralement par le numéro de Sécurité sociale plutôt que par la présentation physique de la carte Vitale. Les plateformes de téléconsultation agréées transmettent les feuilles de soins électroniques à la CPAM de la même façon qu'un cabinet médical physique.

Pour les personnes dont la carte Vitale n'est pas encore reçue ou a été perdue, la téléconsultation peut être effectuée en fournissant son numéro de Sécurité sociale — le médecin peut créer manuellement la feuille de soins avec ce numéro si la carte n'est pas disponible. Les plateformes de téléconsultation comme Doctolib, Medadom, ou Qare proposent des interfaces qui permettent d'entrer le numéro de Sécurité sociale directement dans le dossier patient, contournant le besoin de la carte physique pour ces consultations dématérialisées.

## Les exonérations et les cas de tiers payant

Le tiers payant est un dispositif qui permet au patient de ne pas avancer les frais de santé — le professionnel de santé est directement remboursé par l'Assurance Maladie et par la mutuelle, sans que le patient n'ait à débourser puis attendre les remboursements. La carte Vitale est l'outil central du tiers payant, qui nécessite que le professionnel de santé puisse télétransmettre la feuille de soins immédiatement après la consultation.

Le tiers payant est de droit pour certaines catégories de patients : les bénéficiaires de la Complémentaire Santé Solidaire (CSS), les femmes enceintes pour les soins liés à la grossesse, les victimes d'accidents du travail pour les soins liés à l'accident. Pour les autres patients, le tiers payant est proposé de façon optionnelle par les médecins qui souhaitent l'appliquer — il n'est pas obligatoire sauf pour les situations citées. Les pharmacies, en revanche, appliquent le tiers payant de façon quasi-systématique pour la part Assurance Maladie.

## Les droits à l'Assurance Maladie pendant les périodes de transition administrative

Les titulaires d'un titre de séjour qui font face à des périodes de transition administrative — renouvellement de titre en cours, changement de statut, déménagement entre départements — peuvent se trouver dans des situations où leurs droits à l'Assurance Maladie sont temporairement incertains. L'Assurance Maladie est en principe continue pour les personnes qui ont déjà des droits ouverts, même en cas de changement de CPAM ou de légère interruption administrative — la PUMa (Protection Universelle Maladie) garantit la continuité des droits sans interruption due aux changes de situation.

Cependant, lors d'un déménagement dans un autre département, il est nécessaire d'informer la nouvelle CPAM et d'y transférer le dossier. Ce transfert peut prendre quelques semaines pendant lesquelles des complications peuvent survenir lors de consultes médicales qui nécessitent une vérification des droits en temps réel. Anticiper ce transfert dès que le déménagement est planifié — idéalement un mois avant — permet d'éviter des refus de tiers payant ou des difficultés de remboursement pendant la période de transition.

## La mise à jour des ayants droit et ses enjeux

La gestion des ayants droit dans le système de l'Assurance Maladie est un aspect administratif que les assurés principaux sous-estiment souvent. Un ayant droit est une personne dont les droits à l'Assurance Maladie sont ouverts via l'assuré principal — dans le régime général, il s'agit principalement des enfants mineurs non assurés en propre et, dans certains cas, du conjoint sans activité professionnelle propre.

La déclaration et la mise à jour des ayants droit se fait via ameli.fr ou auprès de la CPAM. Certains changements de situation doivent être déclarés rapidement pour maintenir à jour les droits : la naissance d'un enfant (ouverture des droits dès la déclaration de naissance), le mariage (déclaration du conjoint comme ayant droit si applicable), la séparation ou le divorce (détachement de l'ex-conjoint des ayants droit), ou l'entrée dans la vie active d'un jeune adulte précédemment rattaché (il obtient alors ses propres droits dès sa première embauche). Ces mises à jour garantissent que les remboursements sont correctement effectués pour chaque membre de la famille.
`;

await appendAndPatch('a7a6e229-2b37-48a5-80d2-ab3914db026d', EXT2_L6);
await appendAndPatch('1cb6c47a-d05f-4860-b778-79cf5cb7719a', EXT2_L7);
await appendAndPatch('edd463f6-1f57-4bda-b174-96754d0a67c6', EXT2_L8);
await appendAndPatch('0a9a5b53-ae1f-442b-bd5f-a6538622e740', EXT2_L9);
