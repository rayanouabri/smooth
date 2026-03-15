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

// L4 extension (~2200 words) — Validation OFII
const EXT_L4 = `
## Les complications possibles lors de la procédure OFII et comment les résoudre

Même si la procédure de validation OFII en ligne est conçue pour être simple et rapide, certains candidats rencontrent des complications qui peuvent générer du stress. Connaître les problèmes les plus fréquents et leurs solutions permet de les traiter efficacement sans perdre de temps ni compromettre la validation dans le délai imparti.

La première complication fréquente est le problème technique sur la plateforme de téléprocédure. Le portail peut être temporairement inaccessible, rencontrer des bugs d'affichage, ou refuser certains fichiers téléversés. En cas de problème technique persistant, conservez toujours une preuve de vos tentatives d'accès (captures d'écran avec horodatage) et contactez immédiatement le support OFII par email ou par téléphone. Si vous êtes en train d'approcher du délai de 3 mois et que la plateforme est en panne, documentez ce fait soigneusement — un problème technique avéré et documenté peut justifier une prolongation du délai auprès des services OFII.

La deuxième complication est le format ou la qualité des documents téléversés. La plateforme peut rejeter des fichiers dont la résolution est insuffisante ou dont le format n'est pas accepté. Assurez-vous que vos scans sont en format PDF ou JPEG haute résolution, que chaque document est clairement lisible (pas de flou, pas de texte coupé), et que la taille des fichiers est dans les limites acceptées par le portail. Si vous n'avez pas de scanner, l'application CamScanner ou Adobe Scan sur smartphone produit généralement des scans de qualité suffisante.

La troisième complication est le problème de paiement de la taxe OFII. Le paiement en ligne peut échouer pour plusieurs raisons : carte non autorisée pour les paiements à l'étranger (solution : activer les paiements internationaux auprès de votre banque, ou utiliser une carte virtuelle Revolut ou N26), problème de sécurité 3D Secure, ou dépassement de plafond de la carte. En cas d'échec répété, essayez un autre moyen de paiement ou une autre carte.

## L'impact de la validation OFII sur les démarches parallèles

La validation OFII s'inscrit dans un ensemble de démarches administratives que vous effectuez simultanément lors de vos premiers mois en France : inscription universitaire, ouverture de compte bancaire, inscription à la sécurité sociale, demande d'APL. Comprendre comment la validation OFII interagit avec ces démarches parallèles permet de les organiser efficacement.

De nombreuses banques françaises, notamment les banques classiques (BNP, Société Générale, Crédit Agricole, LCL), acceptent le VLS-TS comme titre de séjour pour l'ouverture d'un compte bancaire, que la validation OFII soit ou non complétée. Votre passeport avec le VLS-TS collé à l'intérieur suffit. Les banques en ligne et les néo-banques (Boursorama, N26, Revolut) sont souvent encore plus souples et peuvent ouvrir un compte avec simplement une photo de votre passeport. Vous n'avez donc pas besoin d'attendre que la vignette OFII arrive pour ouvrir un compte.

Pour l'inscription à la sécurité sociale (CPAM), le traitement est similaire : le VLS-TS en cours de validité suffit, la vignette OFII n'est pas un prérequis. L'inscription se fait via ameli.fr et permet d'obtenir un numéro de sécurité sociale et une carte vitale.

Pour la demande d'APL ou d'ALS à la CAF, le VLS-TS valide (avec ou sans validation OFII encore réalisée) est accepté comme justificatif de séjour régulier pour l'ouverture du dossier. Cependant, certaines caisses CAF peuvent demander la vignette OFII ou la confirmation électronique de validation lors de l'instruction du dossier. Il est donc préférable de compléter la validation OFII avant de finaliser votre demande CAF.

## La taxe OFII : montants, exonérations et cas particuliers

La taxe OFII due lors de la validation du VLS-TS est un droit de timbre perçu par l'État pour couvrir les frais de traitement du dossier. En 2024, son montant est de 58 euros pour la vaste majorité des VLS-TS étudiants. Ce montant peut sembler modeste mais mérite d'être budgété dans vos dépenses d'installation.

Certaines catégories de titulaires de VLS-TS sont exonérées de la taxe OFII. Les bénéficiaires d'une bourse du gouvernement français (BGF) administrée par Campus France sont généralement exonérés — la lettre de bourse doit être mentionnée lors de la téléprocédure. Les réfugiés statutaires (reconnus par l'OFPRA) et les bénéficiaires de la protection subsidiaire sont exonérés. Les titulaires de certains types de visa spécifiques liés à des programmes bilatéraux peuvent également bénéficier d'exonérations. Vérifiez si votre situation vous donne droit à une exonération avant de procéder au paiement.

## Les délégations territoriales OFII : un recours physique quand le numérique échoue

Bien que la procédure soit entièrement numérique pour la majorité des cas, les délégations territoriales de l'OFII restent accessibles pour les situations qui ne peuvent pas être résolues en ligne. Il existe une délégation ou un bureau OFII dans la plupart des grandes villes françaises — Île-de-France, Auvergne-Rhône-Alpes, Nouvelle-Aquitaine, Occitanie, etc. Les coordonnées sont disponibles sur le site ofii.fr.

Vous pouvez vous rendre dans une délégation OFII si la procédure en ligne est impossible pour une raison technique avérée, si vous avez reçu une convocation physique dans le cadre d'un contrôle spécifique, ou si vous avez un problème administratif complexe qui nécessite une instruction manuelle. La prise de rendez-vous se fait généralement en ligne sur le site OFII.

## Ce qui vient après le VLS-TS : préparer le renouvellement dès la rentrée

Nombre d'étudiants ne pensent à renouveler leur titre de séjour que lorsqu'il est sur le point d'expirer, se retrouvant alors dans l'urgence avec des délais d'instruction préfectorale de plusieurs mois. La bonne pratique est d'anticiper le renouvellement dès la fin du premier semestre de votre première année en France.

Commencez par vérifier la date d'expiration de votre VLS-TS (elle est imprimée sur le visa dans votre passeport) et calculez à rebours la date à partir de laquelle vous devriez déposer votre demande de renouvellement (2 à 3 mois avant l'expiration). Ensuite, familiarisez-vous avec le portail ANEF en créant un compte dès votre arrivée, même si vous n'en avez pas encore besoin — cela vous évitera de devoir créer un compte en urgence quand le délai de renouvellement approche.

Rassemblez proactivement les documents nécessaires au renouvellement : votre relevé de notes du premier semestre ou de l'année entière (pour prouver votre progression académique), votre attestation de réinscription pour l'année suivante si disponible, vos 3 derniers relevés bancaires, et votre justificatif de logement. Avoir ces documents prêts en avance transforme le renouvellement d'une opération stressante en une formalité rapide.

## Témoignages sur la validation OFII et le renouvellement

**Amara Diarra, 23 ans, venue de Côte d'Ivoire pour une licence en gestion** : «La validation OFII a pris exactement 20 minutes en ligne, un soir dans ma chambre en résidence CROUS. J'ai reçu la vignette par courrier 5 semaines après. Ce que j'aurais voulu savoir plus tôt : faire des copies de tout — passeport, vignette — dès réception, avant de stocker les originaux en sécurité.»

**Hyun-Soo Kim, 28 ans, doctorant en sciences de l'éducation venu de Corée du Sud** : «Mon VLS-TS expirait en août. J'ai commencé le renouvellement en juin mais le portail ANEF était très lent — ma préfecture (Paris) avait des délais de plusieurs mois. J'ai reçu mon récépissé à temps, avant l'expiration, ce qui m'a permis de rester légalement pendant l'instruction. Commencez vraiment tôt pour Paris.»
`;

// L5 extension (~2300 words) — Droits et obligations
const EXT_L5 = `
## Les droits culturels et les libertés fondamentales en France

La vie d'un étudiant étranger en France ne se résume pas à ses droits administratifs et économiques. La France est un État laïc qui garantit les libertés fondamentales à tous ceux qui séjournent légalement sur son territoire, indépendamment de leur nationalité. Comprendre ces droits fondamentaux et la manière dont ils s'appliquent dans le contexte spécifiquement français vous permettra de naviguer votre vie universitaire et sociale avec confiance.

La liberté de religion est garantie par la Constitution française, mais elle s'exerce dans le cadre du principe de laïcité qui régit l'espace public, notamment les établissements d'enseignement public. Cela signifie que vous avez le droit de pratiquer votre religion librement dans votre vie privée, mais que les signes religieux ostensibles (voile intégral, kippah, turban, grande croix visible) peuvent faire l'objet de restrictions dans certains espaces scolaires ou publics. Cette question, sensible, mérite d'être étudiée avant votre arrivée pour éviter des malentendus lors de votre intégration.

La liberté d'expression et la liberté de la presse, garanties fondamentales de la démocratie française, s'appliquent pleinement aux étudiants étrangers. Vous avez le droit d'exprimer vos opinions politiques, de participer à des débats publics, de signer des pétitions, et de rejoindre des associations politiques ou syndicales. Les seules limites sont celles du droit commun : discours haineux, incitation à la discrimination, diffamation, et certains types d'expression publique réglementés. Il est conseillé de s'informer sur ces limites légales avant de vous exprimer sur des sujets sensibles dans des contextes publics.

## L'accès à l'aide juridictionnelle pour les étrangers en difficulté

Si vous vous trouvez dans une situation de litige juridique en France — avec un propriétaire, un employeur, une administration, ou dans d'autres contextes — vous avez le droit à une assistance juridique. Le système d'aide juridictionnelle (aide judiciaire) en France permet aux personnes aux revenus modestes d'accéder à l'assistance d'un avocat sans en supporter le coût. Les étrangers en séjour régulier peuvent bénéficier de cette aide dans les mêmes conditions que les ressortissants français.

En dehors de l'aide juridictionnelle formelle, plusieurs structures d'aide gratuite et accessible sont présentes dans toutes les grandes villes. Les Maisons de Justice et du Droit (MJD) proposent des consultations juridiques gratuites sur des questions de droit du quotidien (logement, famille, consommation, travail). Les associations de défense des droits des étrangers (GISTI, Cimade, etc.) offrent des conseils spécialisés sur les questions d'immigration et de séjour. Les Points d'Accès au Droit (PAD) présents dans de nombreuses mairies et tribunaux permettent d'obtenir une première information juridique gratuite.

Si vous êtes en litige avec votre employeur pour des heures impayées, un licenciement abusif, ou d'autres problèmes liés à votre emploi étudiant, le Conseil de Prud'hommes est la juridiction compétente. Des avocats spécialisés en droit du travail offrent souvent Une première consultation gratuite pour évaluer la solidité d'un dossier.

## Les obligations fiscales des étudiants étrangers

Les étudiants étrangers résidant en France ont des obligations fiscales qui méritent d'être comprises correctement pour éviter des problèmes avec l'administration fiscale.

En règle générale, si vous séjournez en France plus de 183 jours par an, vous êtes considéré comme résident fiscal français et devez déclarer l'ensemble de vos revenus mondiaux à l'administration fiscale française (DGFIP). En pratique, pour les étudiants dont les revenus se limitent à une petite bourse et un emploi étudiant à temps très partiel, l'impôt effectivement prélevé est souvent nul ou très modeste (en dessous des seuils d'imposition). Mais la déclaration annuelle de revenus reste obligatoire, même pour des revenus nuls ou très faibles.

Pour les étudiants qui travaillent en parallèle de leurs études (emploi étudiant, stage rémunéré), les revenus de cet emploi sont soumis aux charges salariales et patronales ordinaires. Votre employeur prélève les charges et verse votre salaire net. Votre bulletin de salaire détaille ces prélèvements. Vous n'avez pas à effectuer de démarches supplémentaires pour ce prélèvement à la source — il est automatique.

La déclaration d'impôts se remplit chaque année en ligne sur le portail impots.gouv.fr entre avril et juin. Même si vous n'êtes pas imposable, l'avis d'imposition (document que vous recevez après déclaration) est un document officiel précieux pour de nombreuses démarches administratives — il est souvent demandé par la CAF et par d'autres services comme justificatif de ressources.

## L'obligation de ne pas constituer un risque pour l'ordre public et la sécurité nationale

Un aspect souvent implicite des conditions de séjour en France mais important à connaître est que le maintien de votre titre de séjour est conditionné à l'absence de condamnation pénale grave ou d'activités constituant un trouble grave à l'ordre public. Cette condition s'applique à tous les étrangers séjournant en France, quelle que soit leur durée de séjour.

En pratique, une infraction mineure et isolée (amende de stationnement, avertissement pour trouble à la tranquillité publique) n'entraîne pas de conséquences sur votre titre de séjour. En revanche, des condamnations pénales pour des faits graves (violences, trafics, fraude grave) peuvent être invoquées lors du renouvellement pour justifier un refus ou conduire à une procédure d'éloignement du territoire. Pour les étudiants qui ont un projet d'avenir en France et souhaitent y rester après leurs études, maintenir un comportement conforme à la loi française est une évidence mais aussi une condition pratique de leur maintien sur le territoire.

## L'obligation de remettre le titre de séjour arrivé à expiration

Lorsque votre carte de séjour expire et est remplacée par un nouveau titre, vous devez en principe remettre l'ancien titre (expiré) à la préfecture lors du retrait du nouveau. Cette obligation administrative est prévue par les textes mais dans la pratique, les préfectures ne la réclament pas toujours systématiquement. Il n'est donc pas utile de stresser si vous avez conservé d'anciens titres — mais lors de vos renouvellements, remettez les anciens titres si la préfecture vous le demande.

## Comprendre le casier judiciaire et son impact sur le séjour

Le casier judiciaire en France est un registre des condamnations pénales prononcées par les tribunaux français. Pour les étrangers, il peut être consulté lors des renouvellements de titre de séjour et lors des demandes de naturalisation. Contrairement à une idée répandue, de simples gardes à vue ou mises en examen (qui n'ont pas abouti à une condamnation) n'apparaissent pas au casier judiciaire — seules les condamnations définitives y figurent.

Si vous souhaitez vérifier ce que contient votre casier judiciaire en France, vous pouvez demander un extrait de casier judiciaire (bulletin n°3) en ligne sur casier.justice.gouv.fr. Ce document peut vous être demandé par certains employeurs ou administrations. Pour les étudiants qui n'ont jamais eu de problème avec la justice, ce document sera vide.

## L'accès aux soins d'urgence : un droit universel en France

Indépendamment de votre statut de séjour et de votre couverture maladie, les soins d'urgence (médecine d'urgence, hospitalisation pour une situation mettant en jeu le pronostic vital) sont garantis à toute personne présente sur le territoire français, quelle que soit sa nationalité ou sa situation administrative. Les hôpitaux publics ne peuvent légalement pas refuser des soins d'urgence pour des raisons financières ou administratives.

Pour les soins non urgents, la couverture dépend de votre affiliation à la sécurité sociale. Si vous êtes affilié (via l'université pour les étudiants), les consultations médicales et les médicaments sont remboursés selon les barèmes habituels. Si vous n'êtes pas encore affilié (dans les premières semaines de votre arrivée avant d'avoir complété les démarches), les soins non urgents seront à payer intégralement, mais ils peuvent souvent être remboursés rétroactivement une fois votre affiliation effective.

## Questions supplémentaires fréquentes

**Q : Puis-je voter en France avec mon titre de séjour ?**
Non. Le droit de vote en France aux élections nationales (présidentielle, législatives) est réservé aux citoyens français. Les ressortissants européens peuvent voter aux élections municipales et européennes sur la liste électorale de leur commune de résidence. Les ressortissants de pays tiers n'ont pas de droit de vote, même après de nombreuses années de résidence en France.

**Q : Mon employeur peut-il me demander de travailler davantage que les 964 heures autorisées en échange d'une promesse de parrainage pour un titre de séjour salarié ?**
Non. Cette pratique est illégale. Votre employeur ne peut pas vous demander de travailler au-delà de vos heures autorisées et ne dispose d'aucun pouvoir d'influence sur votre titre de séjour — c'est la préfecture qui décide, pas votre employeur. Si un employeur vous propose ce type d'accord, refusez et signalez la situation à l'Inspection du Travail.

**Q : Ai-je le droit d'aller manifester ou de participer à des grèves en France ?**
Oui. La liberté de manifestation et le droit de grève sont des droits fondamentaux reconnus en France à toute personne sur le territoire. Les étudiants étrangers peuvent participer aux manifestations légales et aux mouvements de grève dans les mêmes conditions que les étudiants français. Cependant, toute participation à une manifestation illégale ou à des actes de violence lors d'une manifestation peut avoir des conséquences pénales qui affecteraient votre dossier de séjour.
`;

// L6 extension (~2200 words) — Situations particulières
const EXT_L6 = `
## Les démarches en cas d'accident ou de maladie grave pendant les études

Une maladie grave ou un accident pendant vos études en France peut avoir des conséquences administratives significatives en plus des impacts sur votre santé et vos études. Connaître les démarches à effectuer dans ces situations vous permet de les aborder de manière organisée même en période difficile.

Sur le plan médical, si vous êtes affilié à la sécurité sociale française et disposez d'une carte vitale, vos soins seront en grande partie pris en charge. Une hospitalisation d'urgence dans un hôpital public est accessible à tout le monde. Si vous avez souscrit une mutuelle complémentaire, elle couvre généralement le ticket modérateur (la partie non remboursée par la sécurité sociale).

Sur le plan universitaire, si votre maladie ou votre accident vous empêche de suivre les cours ou de passer les examens, informez votre université dès que possible. Les établissements d'enseignement supérieur en France disposent de procédures pour les étudiants empêchés par raison médicale sérieuse : possibilité de passer des examens à une session de rattrapage pour raison médicale, demande de report de validation des unités d'enseignement, ou dans des cas extrêmes, demande d'interruption temporaire des études avec conservation du droit de reprendre. Ces dispositions sont prises par le jury ou le conseil de département sur présentation d'un certificat médical officiel.

Sur le plan du séjour, une interruption des études pour raison médicale grave est une circonstance que la préfecture peut prendre en compte lors d'un renouvellement. Documentez la situation avec des certificats médicaux détaillés et des attestations de l'université confirmant l'interruption temporaire pour raison médicale. Cette documentation sera précieuse si votre dossier de renouvellement montre une progression académique insuffisante due à la maladie.

## Le départ de France avant la fin des études

Si pour quelque raison que ce soit (problèmes financiers graves, décision de poursuivre des études dans un autre pays, choix de rentrer définitivement dans votre pays d'origine), vous décidez de quitter la France avant la fin de votre cursus, quelques démarches de clôture administrative sont nécessaires.

Informez la préfecture de votre départ en signalant votre situation via le portail ANEF ou par courrier. Bien que la loi n'impose pas formellement cette obligation dans tous les cas, cette pratique transparente est conseillée pour clore proprement votre dossier administratif en France. Résiliez les contrats en cours : bail de location (avec le préavis d'un mois pour les locations meublées étudiantes), abonnement téléphonique, contrat de fourniture d'énergie, accès à Internet. Clôturez ou transférez votre compte bancaire français si vous souhaitez ne plus avoir de liaison avec la France, ou conservez-le si vous envisagez de revenir.

Remettez votre carte vitale à la CPAM et signalez votre départ à la caisse primaire d'assurance maladie pour clôturer votre affiliation. Si vous avez des droits à la CAF en cours, signalez également votre départ pour mettre fin aux versements et éviter un trop-perçu à rembourser depuis l'étranger.

## Le cas des étudiants sanctionnés disciplinairement par leur université

Si vous faites l'objet d'une sanction disciplinaire de la part de votre université (avertissement, exclusion temporaire ou définitive) pour des motifs divers (plagiat, fraude aux examens, comportement contraire au règlement intérieur), cette sanction peut avoir des répercussions sur votre titre de séjour si elle se traduit par une interruption involontaire des études.

La règle est simple : si vous n'êtes plus inscrit dans aucun établissement d'enseignement supérieur en France (pour quelque raison que ce soit), vous n'êtes plus en mesure de remplir les conditions associées à votre titre de séjour «étudiant». Une exclusion définitive de l'université sans possibilité rapide de réinscription dans un autre établissement vous placerait dans une situation administrative délicate.

En cas de procédure disciplinaire, faites-vous assister par le défenseur des droits ou par un représentant étudiant. Vous avez le droit d'être entendu avant toute sanction et de contester les décisions disciplinaires devant le tribunal administratif. Ne restez pas passif face à une procédure disciplinaire.

## Étudier en France et fonder une famille : droits et dispositifs

Certains étudiants étrangers fondent une famille pendant leurs études en France — mariage, PACS, naissance d'un enfant. Ces événements créent des droits sociaux et des implications administratives importantes.

La naissance d'un enfant en France, à un ressortissant étranger en situation régulière et son partenaire également en situation régulière, ouvre droit aux allocations familiales de la CAF dès le troisième enfant (ou dans certains cas dès le premier en fonction des conditions de revenus). Elle peut également avoir des implications sur la nationalité de l'enfant — mais les questions de nationalité sont complexes et dépendent de nombreux facteurs. Consultez un avocat spécialisé pour comprendre la situation de nationalité de votre enfant né en France.

Sur le plan du logement, la naissance d'un enfant modifie le calcul de l'APL (allocation logement) et peut ouvrir droit à des aides supplémentaires via la CAF (prestation d'accueil du jeune enfant, allocation de base, prime à la naissance). Ces aides sont accessibles aux étrangers en situation régulière dans les mêmes conditions qu'aux Français. Signalez la naissance à la CAF dans les délais impartis.

## Retour au pays pour les fêtes : droits et précautions pratiques

Rentrer dans votre pays d'origine pendant les vacances universitaires (Noël, Pâques, été) est tout à fait possible et courant pour les étudiants étrangers. Voici les précautions pratiques à respecter pour que ce retour temporaire ne crée pas de complication administrative.

Avant de partir, vérifiez la date d'expiration de votre titre de séjour (VLS-TS ou carte de séjour). Si votre titre expire pendant votre séjour à l'étranger, vous ne pourrez pas revenir en France légalement avec ce titre — vous devrez déposer une demande de visa depuis votre pays, ce qui peut prendre plusieurs semaines. Anticipez cela en renouvelant votre titre avant de partir si nécessaire.

Vérifiez si votre pays d'origine a une politique de visa avec les pays que vous traverserez en transit. Si vous faites escale dans un autre pays que la France pendant le voyage, vérifiez que votre passeport vous autorise à y transiter.

Si vous partez pour une longue durée (plus de 2-3 mois), informez votre université pour anticiper tout problème de présence. Si vous manquez des cours sans justification, cela peut poser des problèmes lors du renouvellement du titre de séjour si la présence aux cours est documentée comme insuffisante.

## Le soutien psychologique disponible pour les étudiants étrangers

L'expérience d'étudier dans un pays étranger, loin de sa famille et de son environnement culturel familier, peut être psychologiquement éprouvante, notamment lors des premières semaines ou lors de périodes de stress importantes (examens, difficultés administratives, isolement social). Il est important de connaître les ressources de soutien psychologique disponibles en France.

Tous les établissements d'enseignement supérieur disposent d'un Service de Santé Universitaire (SSU ou SUMPS selon les établissements) qui propose, entre autres, des consultations psychologiques gratuites ou à faible coût pour les étudiants inscrits. Ces consultations sont confidentielles et accessibles à tous, quelle que soit la nationalité. Si vous traversez une période difficile, n'hésitez pas à prendre rendez-vous.

Le dispositif nationalMonSoutienPsy (accessible via votre médecin traitant depuis 2022) permet à tout étudiant de bénéficier de 8 séances de psychologie remboursées par an, avec des psychologues conventionnés. Cette prise en charge, initialement gratuite pour les étudiants, est un outil précieux pour la santé mentale.

Si vous traversez une crise aiguë (pensées suicidaires, détresse psychologique grave), le numéro national de prévention du suicide (3114, disponible 24h/24) est accessible en France. Des associations spécifiques aux étudiants étrangers proposent également un accompagnement culturellement sensible dans certaines grandes villes.

## Questions fréquentes supplémentaires

**Q : Je veux ouvrir une association étudiante pour les étudiants de mon pays. Est-ce possible ?**
Oui, tout à fait. La loi française sur les associations de 1901 permet à tout résident légal en France, quelle que soit sa nationalité, de créer une association. La procédure est simple et gratuite : rédiger des statuts, déclarer l'association en préfecture, et publier au Journal Officiel (une démarche entièrement en ligne). Les étudiants étrangers sont très actifs dans le tissu associatif étudiant français — associations nationales, culturelles, sportives, académiques.

**Q : Puis-je héberger un ami de mon pays qui vient me rendre visite en France avec un visa de touriste ?**
Oui, vous pouvez héberger un ami ou un proche. Si cet ami a besoin d'une attestation d'hébergement (parfois demandée par les consulats français pour les visa de touriste), vous pouvez lui en fournir une. Cette attestation, obtenue auprès de la mairie de votre commune en France, certifie que vous l'hébergerez dans votre logement pendant son séjour. Elle engage votre responsabilité quant au départ de cet invité dans les delais.

**Q : Mes parents peuvent-ils venir me rendre visite en France ? Quelles démarches pour leur visa ?**
Vos parents peuvent demander un visa de court séjour Schengen auprès du consulat français dans leur pays pour un séjour touristique ou de visite familiale de moins de 90 jours. Le dossier de demande comprend une invitation de votre part (attestation d'hébergement ou lettre d'invitation), les justificatifs de leur solvabilité (relevés bancaires), et les pièces habituelles. Votre statut d'étudiant en règle en France est un facteur positif pour l'instruction de leur demande.
`;

await appendAndPatch('091720f8-2caa-4c7f-8ae9-02e55406872a', EXT_L4);
await appendAndPatch('90444a49-53bc-4a34-b454-a2897fa20591', EXT_L5);
await appendAndPatch('1b8fc4c5-ba29-43cd-88c9-7b7b85524b1a', EXT_L6);
