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

const EXT3_L1 = `
## L'identité du demandeur dans les procédures de régularisation administrative

La procédure de régularisation du séjour — pour les personnes en situation irrégulière qui souhaitent obtenir un titre de séjour — repose de façon cruciale sur la capacité à prouver son identité. Sans documents d'identité valides, il est extrêmement difficile d'obtenir un titre de séjour, car l'administration a besoin de certifier l'identité de la personne avant de lui accorder un droit au séjour.

Pour les personnes dont les documents d'identité ont été perdus, détruits, confisqués ou dont elles n'ont jamais disposé, des procédures alternatives existent. L'OFPRA, dans le cadre des demandes d'asile, peut instruire une demande même sans document d'identité — le récit de la personne et d'autres éléments de preuve (témoignages, photos, documents partiels) permettant d'établir une identité prima facie suffisante pour l'instruction. Pour les procédures de régularisation hors asile, les associations spécialisées peuvent aider à identifier les démarches disponibles pour établir ou reconstituer une identité documentée.

## La sécurité des informations d'identité dans les échanges institutionnels

Les informations d'identité échangées entre les administrations françaises dans le cadre de la gestion des titres de séjour font l'objet de protocoles de sécurité informatique stricts. Les fichiers informatiques contenant des données biométriques (archives AGDREF, bases de la CPAM, fichier NIR) sont soumis aux dispositions les plus contraignantes de la loi Informatique et Libertés et du RGPD, avec des obligations de chiffrement, de traçabilité des accès et de sécurisation des échanges inter-organismes.

Malgré ces protections, il est utile de savoir que tout accès abusif à ces fichiers par un agent public est un délit puni par le Code pénal. Chaque accès à un dossier dans ces systèmes est enregistré et traçable — l'agent qui consulterait le dossier d'une personne sans motif légitime serait en faute. Cette traçabilité est une garantie importante pour les personnes concernées, qui peuvent faire valoir leurs droits en cas d'accès non justifié à leurs données.

## Les documents d'identité et les locations de courte durée

Le secteur de la location de courte durée — hôtellerie, locations Airbnb, gîtes — est soumis à des obligations de vérification d'identité des clients dont le cadre juridique a évolué ces dernières années. La réglementation française exige que les établissements hôteliers enregistrent l'identité de leurs clients et conservent ces informations pendant une durée déterminée, notamment à des fins de vérification en cas d'enquête judiciaire.

Pour le secteur des locations entre particuliers (Airbnb et équivalents), les obligations sont différentes mais les plateformes ont développé leurs propres systèmes de vérification d'identité. Certaines plateformes demandent une copie du document d'identité non seulement aux voyageurs mais aussi aux hôtes, dans le cadre de leurs politiques de lutte contre la fraude et de sécurité des transactions. Ces vérifications d'identité par les plateformes privées sont encadrées par le RGPD et leurs politiques de confidentialité doivent expliquer comment ces données sont utilisées et protégées.

## Le titre de séjour et les droits à la retraite en France

La durée de séjour régulier en France, attestée par les titres de séjour successifs, peut avoir une incidence sur les droits à la retraite pour les personnes qui ont travaillé en France pendant une partie de leur vie. En règle générale, les droits à la retraite dans le système français sont conditionnés aux années de cotisation et non pas à la nationalité ou à la durée de résidence en tant que telle. Cependant, pour accéder à certaines retraites minimales ou à des droits dérivés, une durée de résidence légale peut être exigée.

La coordination internationale des droits à la retraite, via les accords bilatéraux de Sécurité sociale et la réglementation européenne, permet de totaliser les années travaillées dans différents pays pour remplir les conditions d'ouverture des droits. Pour un étranger qui a travaillé cinq ans en France avec un titre de séjour valide, puis est retourné dans son pays, les cotisations versées pendant ces cinq ans sont conservées dans son compte retraite français et peuvent générer une pension lors de son départ en retraite depuis son pays d'origine.
`;

const EXT3_L2 = `
## La carte d'identité française et l'accès aux services de l'État

La carte nationale d'identité française est le document de référence pour accéder à l'ensemble des services de l'État réservés aux citoyens français. L'accès aux bureaux de vote, la signature d'actes devant notaire, l'inscription à l'université, l'accès à des zones protégées dans les administrations — toutes ces situations peuvent requérir la présentation d'une carte d'identité française. Cette universalité fonctionnelle est l'une des raisons pour lesquelles la naturalisation est si recherchée : elle ouvre l'accès complet à l'appareil d'État.

Depuis la dématérialisation progressive des services publics, la carte d'identité française est également un vecteur d'accès aux services numériques de l'État. Via FranceConnect, le numéro de la carte d'identité française peut être utilisé comme élément d'authentification dans certains fournisseurs d'identité. Les portiques automatiques de sécurité dans les administrations sensibles lisent les données biométriques de la carte d'identité pour vérifier l'identité des visiteurs sans interaction humaine.

## Les citoyens français aux identités multiples et leur gestion documentaire

Certains ressortissants français ont des identités administratives complexes : Français nés à l'étranger avec des prénoms étrangers, personnes dont le nom a été modifié lors de la naturalisation, personnes portant à la fois un nom français et un nom traditionnel de leur culture d'origine. Pour ces personnes, la cohérence entre les différents documents d'identité est un enjeu permanent.

La carte nationale d'identité française est établie à l'état civil français officiel — qui peut différer du nom utilisé dans le pays d'origine si une translittération ou une traduction a été effectuée lors de la transcription de l'état civil étranger. Ces divergences entre le nom dans les documents français et le nom dans les documents étrangers peuvent créer des complications dans les démarches qui requièrent des justificatifs des deux pays. Un document explicatif préparé à l'avance (par exemple, une attestation consulaire expliquant la correspondance entre deux formes d'un même nom) peut prévenir ces complications lors des démarches importantes.

## La procédure de rectification des erreurs sur la carte d'identité

Des erreurs sur une carte d'identité — prénom mal orthographié, date de naissance incorrecte, lieu de naissance erroné — nécessitent une procédure de rectification, distincte du simple renouvellement. La rectification d'une erreur d'état civil sur une carte d'identité n'est pas une simple correction administrative : elle nécessite souvent une correction préalable à l'acte d'état civil lui-même (naissance, mariage) qui fait foi. La mairie peut procéder à des rectifications de simples erreurs matérielles dans les actes d'état civil, mais les corrections substantielles nécessitent une procédure judiciaire devant le tribunal judiciaire.

Cette procédure, bien que légalement possible, peut prendre de plusieurs mois à plusieurs années selon les délais judiciaires. Pour les personnes vivant cette situation, il est souvent utile de disposer d'attestations notariales ou consulaires qui expliquent la divergence entre les différentes versions du nom ou de l'état civil, en attendant la correction définitive des documents officiaux.

## La protection de la carte d'identité contre la falsification

Les techniques de falsification des documents d'identité ont évolué avec les technologies d'impression et de numérisation, créant une course perpétuelle entre les faussaires et les fabricants de documents officiels. La carte nationale d'identité française biométrique présentée depuis 2021 intègre de nombreuses mesures de sécurité de pointe : impression laser, encres à variation optique (OVI), microperforations formant des motifs lisibles à contre-jour, hologramme personnalisé, puce RFID avec certificats cryptographiques.

Ces mesures de sécurité rendent la falsification physique extrêmement difficile et coûteuse, à un niveau que la plupart des faussaires ne peuvent pas atteindre. La falsification la plus courante aujourd'hui est la falsification numérique — modifier une image numérique d'une carte d'identité pour changer le nom, la photo ou la date de naissance. Ces falsifications numériques sont détectables par des professionnels formés à la vérification documentaire, mais elles peuvent tromper des opérateurs non spécialisés. Les systèmes de vérification en ligne, comme ceux utilisés par les banques pour les ouvertures de compte dématérialisées, intègrent des algorithmes de détection des modifications d'images pour contrer ce type de fraude.
`;

const EXT3_L3 = `
## La correspondance entre le NIR et les systèmes de retraite internationaux

Pour les personnes ayant travaillé dans plusieurs pays, la coordination entre le NIR français et les numéros d'identité des systèmes de retraite étrangers est essentielle pour que les droits acquis dans chaque pays soient correctement comptabilisés. La plupart des conventions bilatérales de Sécurité sociale signées par la France incluent des mécanismes de liaison entre les registres des deux pays, permettant aux caisses de retraite de se verifier mutuellement que les périodes d'assurance déclarées n'ont pas déjà été comptabilisées dans l'autre pays.

Pour les ressortissants des pays membres de l'UE, le règlement européen sur la coordination des systèmes de sécurité sociale (règlement (CE) n°883/2004) crée un cadre précis pour ces échanges d'informations entre caisses de retraite nationales. Un Français ayant travaillé en Italie puis en France peut voir ses années italiennes comptabilisées para le système français via le formulaire de liaison inter-caisses E205, qui résume les périodes d'assurance dans chaque pays.

## La gestion du NIR dans les situations de changement de régime d'Assurance Maladie

Le système français d'Assurance Maladie comprend plusieurs régimes distincts : le régime général (pour les salariés du privé), le régime agricole (MSA), les régimes spéciaux (fonctionnaires, militaires, élus), et le régime des indépendants (CIPAV, SSI). Lorsqu'une personne change de régime — par exemple, un salarié du privé qui se lance en tant qu'indépendant — son NIR reste inchangé mais son affiliation bascule vers le nouveau régime.

Ces changements de régime peuvent temporairement perturber la continuité des droits à l'Assurance Maladie et à la retraite. Pendant la période de transition entre deux régimes, le NIR permet de relier les périodes d'affiliation et d'assurer que les droits acquis dans l'ancien régime sont préservés, même si l'accès aux nouvelles prestations prend quelques semaines. La carte Vitale continue de fonctionner pendant cette transition, mais peut afficher des informations de couverture légèrement décalées — une mise à jour en borne de pharmacie l'actualise généralement.

## Les fraudes au NIR et leur détection

La fraude au numéro de Sécurité sociale est une infraction pénale sérieuse qui prend plusieurs formes. L'usurpation d'un NIR existant — utiliser le numéro d'une autre personne pour accéder à des remboursements de soins — est la fraude la plus directement préjudiciable pour la victime, dont le dossier santé peut se retrouver contaminé par des informations médicales qui ne lui appartiennent pas. La création de NIR fictifs pour bénéficier de remboursements ou de prestations est également documentée.

Les organismes de protection sociale ont développé des systèmes de détection des fraudes basés sur l'analyse des patterns de remboursements : un NIR qui génère une quantité inhabituelle de consultations dans plusieurs villes simultanément, ou qui présente des profils de remboursement statistiquement aberrants, déclenche des alertes. La collaboration entre la CPAM, les services fiscaux et les forces de l'ordre dans la lutte contre ces fraudes s'est renforcée ces dernières années avec le partage de données inter-adminissions encadré par la loi.

## Le NIR pour les travailleurs frontaliers

Les travailleurs frontaliers — ceux qui résident dans un pays et travaillent dans un pays voisin — ont une situation d'Assurance Maladie particulière qui dépend des accords bilatéraux entre les deux pays concernés. Pour les travailleurs qui résident en France et travaillent en Suisse, en Belgique, en Allemagne ou au Luxembourg, par exemple, les cotisations sociales sont prélevées dans le pays de travail mais les soins peuvent être accordés dans le pays de résidence.

Le NIR français de ces travailleurs est utilisé dans leur pays de résidence (France) pour accéder aux soins dans le système de santé français, même si leurs cotisations alimentent un système étranger. Des formulaires de liaison (E-forms européens ou formulaires bilatéraux pour la Suisse) permettent aux caisses des deux pays de se coordonner sur les remboursements. Cette coordination, qui implique le NIR comme identifiant du côté français, est généralement transparente pour le travailleur — mais en cas de problème de remboursement, connaître ce mécanisme permet de mieux comprendre avec quel organisme engager les démarches.
`;

const EXT3_L4 = `
## Les actes de notoriété et la preuve de l'état civil en cas d'absence de documents

Dans les situations où une personne est dans l'impossibilité de produire un acte d'état civil officiel — parce que les registres de son pays d'origine ont été détruits, parce que les autorités locales ne fonctionnent plus, ou parce que l'accès aux archives est impossible — le droit français prévoit des mécanismes alternatifs pour établir l'état civil. L'acte de notoriété est l'un de ces mécanismes : établi par un notaire ou un tribunal, il consigne les témoignages de personnes ayant connaissance de l'état civil de la personne concernée.

L'acte de notoriété n'a pas la même force probante qu'un acte d'état civil officiel, mais il peut être accepté dans certaines démarches administratives en France pour établir une identité prima facie suffisante pour instruire un dossier. Pour les personnes réfugiées ou apatrides dont l'état civil original est inaccessible ou n'existe pas, l'OFPRA peut également établir des documents d'état civil (actes de naissance, actes de mariage) qui ont les mêmes effets en France que les actes d'état civil français ordinaires.

## Les actes d'état civil pour les personnes intersexes et les couples de même sexe

La France a progressivement élargi ses règles d'état civil pour reconnaître des réalités sociales plus diversifiées. Le mariage entre personnes de même sexe a été légalisé par la loi du 17 mai 2013, et les actes d'état civil qui en découlent ont exactement la même valeur et les mêmes effets que ceux des mariages hétérosexuels. La reconnaissance des actes de mariage entre personnes du même sexe célébrés à l'étranger et leur transcription sur les registres consulaires français constituent un domaine de droit international privé encore en évolution.

Pour les personnes intersexes, la réforme de l'état civil de 2022 a ouvert la possibilité de modifier la mention du sexe à l'état civil via une procédure simplifiée de déclaration, sans nécessité de justifications médicales. Cette évolution du droit de l'état civil a des répercussions sur tous les documents d'identité liés à l'état civil — carte nationale d'identité, passeport, titre de séjour pour les étrangers — qui doivent être mis à jour pour refléter le nouvel état civil déclaré.

## Le droit de l'état civil face aux nouvelles technologies de procréation

Les nouvelles techniques de procréation médicalement assistée (PMA), légalisées en France pour les couples composés de deux femmes et les femmes seules par la loi bioéthique de 2021, soulèvent de nouvelles questions d'état civil. Lorsque deux femmes ont recours à la PMA, le lien de filiation entre l'enfant et la mère qui n'a pas accouché doit être établi par une reconnaissance conjointe anticipée. Cette innovation juridique crée de nouveaux types d'actes d'état civil qui n'existaient pas auparavant.

Pour les couples étrangers de même sexe résidant en France qui ont eu recours à des techniques de PMA non autorisées en France (GPA — gestation pour autrui en particulier), la reconnaissance en France de la filiation établie à l'étranger est un sujet de droit international privé complexe et évolutif. La Cour de cassation et le Conseil d'État ont progressivement établi des positions jurisprudentielles sur ces questions, mais elles restent sujettes à évolution en fonction des décisions de la Cour européenne des droits de l'homme.

## L'état civil et la protection de l'enfance

L'état civil des enfants est un instrument de la protection de l'enfance à plusieurs niveaux. La déclaration de naissance crée le statut juridique de la personne humaine et la rattache à une famille légale — créant les obligations parentales d'entretien et d'éducation qui font l'objet de contrôles par les services sociaux. L'absence de déclaration de naissance prive l'enfant de son identité civile, l'excluant de fait du système protecteur de la filiation légale.

Pour les enfants nés de parents en situation irrégulière, la déclaration de naissance à la mairie ne doit pas être omise par crainte des conséquences administratives pour les parents — la déclaration de naissance est un acte d'état civil qui ne préjuge pas de la situation administrative des parents et qui ne peut pas être utilisé contre eux dans une procédure d'éloignement isolément. Le droit à une identité pour chaque enfant est un principe reconnu par la Convention internationale des droits de l'enfant, ratifiée par la France, qui prime sur les considérations liées au statut migratoire des parents.
`;

const EXT3_L5 = `
## FranceConnect et la protection des données de santé

La médiation par FranceConnect pour l'accès aux services de santé numériques soulève des questions particulières liées à la sensibilité des données de santé. L'accès à ameli.fr via FranceConnect permet de consulter des informations très personnelles sur les soins reçus — ce qui nécessite un niveau de sécurité particulièrement élevé dans l'authentification. La CNIL a veillé à ce que les fournisseurs d'identité FranceConnect ne puissent pas accéder aux données des services consultés via FranceConnect — le fournisseur d'identité sait simplement que l'utilisateur s'est connecté à un service, mais pas à quel service ni quelles données il a consultées.

Cette séparation entre l'authentification et les données du service consulté est fondamentale pour la protection de la vie privée dans le contexte de l'identité numérique. Elle signifie que l'utilisation de FranceConnect pour accéder à ameli.fr ne révèle pas à La Poste (lorsqu'elle est le fournisseur d'identité) que l'utilisateur a des problèmes de santé ou des soins en cours — une garantie importante pour les personnes qui craignent que leurs données de santé soient utilisées à d'autres fins que médicales.

## Les empreintes digitales dans les documents d'identité : droits et restrictions

Le recueil des empreintes digitales pour les documents d'identité biométriques soulève des questions éthiques et juridiques sur la constitution de bases de données biométriques par l'État. En France, les empreintes digitales recueillies lors de la demande de passeport ou de carte d'identité biométrique sont stockées uniquement dans la puce du document lui-même — elles ne sont pas conservées dans une base de données centrale d'empreintes digitales par l'État.

Cette garantie, qui distingue le système français de systèmes moins protecteurs de la vie privée, répond aux préoccupations légitimes sur la constitution d'un fichier d'empreintes généralisé. La CNIL a été vigilante sur ce point et a rendu des avis qui ont encadré les dispositions du décret créant les documents biométriques pour s'assurer que les données ne soient pas conservées au-delà de ce qui est strictement nécessaire à la vérification d'identité lors des contrôles.

## Les tiers de confiance dans les démarches d'identité numérique

La délégation de démarches administratives à un tiers de confiance — un avocat, un notaire, un expert-comptable, ou même un proche de confiance — est prévue par le droit français dans de nombreux contextes. Dans le domaine de l'identité numérique, la délégation est encadrée par der règles spécifiques qui visent à éviter les abus.

FranceConnect ne dispose pas d'un mécanisme de délégation native — chaque personne doit se connecter avec son propre identifiant. Pour les personnes qui ne peuvent pas utiliser FranceConnect elles-mêmes (personnes âgées, personnes en situation de handicap, personnes sans compétences numériques), des solutions existent : l'accompagnement physique dans un service public par un aidant, la procuration à un professionnel du droit habilité pour certaines démarches, ou l'utilisation des services d'accueil des maisons France Services qui peuvent réaliser certaines démarches au nom et pour le compte de personnes accompagnées.

## L'évolution vers le portefeuille d'identité numérique européen

Le règlement eIDAS 2.0, adopté en 2024, prévoit la création d'un portefeuille d'identité numérique européen (EUID Wallet) que chaque État membre devra mettre à disposition de ses citoyens et résidents. Ce portefeuille numérique, accessible via une application mobile, permettra de stocker non seulement l'identité de base (nom, prénom, date de naissance, nationalité) mais aussi des attributs certifiés : diplômes universitaires, permis de conduire, titres de séjour, qualifications professionnelles.

Ce portefeuille numérique européen représente une transformation fondamentale de la gestion de l'identité et des attributs personnels — plutôt que de présenter des documents physiques ou de créer un compte sur chaque service, les citoyens pourront présenter des attributs certifiés de façon sélective (révéler seulement la date de naissance sans révéler l'adresse, par exemple) à des services publics et privés. Pour les etrangers résidant en France, l'accès à ce portefeuille européen dépendra de la décision politique sur son accessibilité aux résidents non-citoyens — un débat encore ouvert dans les négociations sur l'implémentation nationale de ce règlement.
`;

await appendAndPatch('36cfc7d1-8d6f-4675-b3eb-a9869510c3fb', EXT3_L1);
await appendAndPatch('c45ead0e-59bd-4111-ae65-a67f5876e64a', EXT3_L2);
await appendAndPatch('85b81635-2ed7-4f34-9a6f-7a9983c3938f', EXT3_L3);
await appendAndPatch('88815b07-7563-421e-b88a-97f4bcb999c2', EXT3_L4);
await appendAndPatch('99c1c557-b868-495b-9614-cf90a7dd7919', EXT3_L5);
