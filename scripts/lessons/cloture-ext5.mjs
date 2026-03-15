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

// L1: 3119 → ~+900 words
const EXT5_L1 = `
## Les aspects numériques de la clôture

La dématérialisation progressive des services bancaires a transformé la façon dont on clôture un compte. Là où il fallait se déplacer en agence il y a dix ans, la grande majorité des banques permettent maintenant de télécharger tous les relevés, d'envoyer la demande de clôture, et de recevoir la confirmation — tout cela sans quitter son domicile. Cette évolution bénéficie particulièrement aux étudiants à mobilité réduite, aux personnes éloignées géographiquement de leur agence, et aux étudiants internationaux qui ont ouvert leur compte dans une ville différente de leur lieu de résidence actuel.

La transition numérique a aussi apporté de nouveaux risques : des emails frauduleux imitant les communications bancaires peuvent profiter du contexte d'un changement de banque pour tenter de récupérer des données confidentielles. Ne jamais cliquer sur des liens dans des emails qui sollicitent des informations bancaires, y compris dans le contexte d'une clôture en cours, est une règle de sécurité fondamentale à respecter scrupuleusement. Toujours accéder à son espace bancaire en tapant directement l'adresse dans le navigateur ou via l'application officielle.

## La préservation des photos de tickets et reçus liés au compte

Dans une gestion financière documentée, les photos de tickets de caisse, de reçus, et de factures correspondant aux transactions du compte offrent une couche de justification complémentaire aux relevés bancaires. Avant la clôture, vérifier que ces justificatifs sont archivés et liés aux transactions correspondantes dans une application de gestion est une bonne pratique. Certaines applications de gestion de notes de frais (N2F, Tricount, Expensify) permettent d'attacher des photos de justificatifs à chaque transaction bancaire synchronisée.

L'archivage de ces justificatifs a une valeur particulière pour les étudiants en alternance ou en stage qui avancent des frais remboursés par leur entreprise — les relevés bancaires associés à ces remboursements, conservés avec les justificatifs correspondants, constituent le dossier de preuve complet en cas de litige avec l'employeur sur les remboursements dus.

## Les formalités d'information aux parents ou garants

Pour les étudiants dont les parents sont garants de leur logement ou de certains engagements financiers, les informer du changement de coordonnées bancaires est une étape importante souvent oubliée. Si une caution solidaire a été fournie par les parents avec mention des coordonnées bancaires de l'étudiant, les parents doivent être informés du changement pour pouvoir eux-mêmes notifier le propriétaire ou le créancier si nécessaire.

Cette communication familiale autour des démarches financières est une bonne pratique générale de transparence qui facilite la gestion collective des engagements financiers partagés. Les parents qui ne sont pas au courant du changement de banque de leur enfant pourraient se retrouver dans une situation embarrassante si une urgence financière requérait leur intervention sur le compte de l'étudiant.
`;

// L2: 2427 → ~+1600 words
const EXT5_L2 = `
## La gestion des virements récurrents entrants lors de la clôture

Les virements entrants récurrents — salaire, bourse CROUS, aides CAF, virements familiaux réguliers — doivent être redirigés vers le nouveau compte avant la clôture de l'ancien. La procédure varie selon la source du virement. Pour le salaire, une notification écrite au service des ressources humaines ou à la comptabilité de l'employeur est suffisante — nombreux employeurs ont un formulaire de mise à jour de RIB dans leur intranet RH. Pour la bourse CROUS, la mise à jour se fait via le portail étudiants du CROUS ou de l'université concernée.

Le délai de prise en compte de ces mises à jour varie selon les organisations. Les employeurs professionnels traitent généralement les changements de RIB en quelques jours. Les organismes publics (CROUS, CAF, CPAM) prennent 2 à 6 semaines. Il faut donc anticiper ces délais et effectuer les notifications le plus tôt possible — idéalement dès l'ouverture du nouveau compte, plusieurs semaines avant la clôture prévue.

## La gestion des obligations de déclaration lors de résidence à l'étranger

Pour les étudiants qui ont été résidents en France mais qui repartent à l'étranger, la fermeture du compte bancaire français s'accompagne d'obligations déclaratives. Si des revenus ont été perçus en France pendant l'année (salaires, bourses imposables), une déclaration de revenus finale en tant que résident doit être effectuée avant le départ définitif. La clôture du compte n'efface pas cette obligation fiscale.

La déclaration "de départ" auprès de la Direction Générale des Finances Publiques indique la date de fin de résidence fiscale en France et permet une régularisation propre de la situation fiscale. Certains contribuables en départ peuvent être éligibles à un remboursement d'impôt sur les retenues à la source effectuées sur les revenus de la dernière année — cette vérification vaut donc la peine d'être effectuée.

## La séquence optimale des actions lors d'un changement de banque

Pour ceux qui préparent leur premier changement de banque, voici la séquence optimale des actions dans l'ordre chronologique. Semaine 1 : Comparer les offres bancaires et choisir la nouvelle banque ; initier l'ouverture du nouveau compte en ligne avec les documents requis. Semaine 2 : Recevoir et activer la carte du nouveau compte ; effectuer un premier virement test depuis l'ancien compte. Semaine 3 : Initier le service Agir via la nouvelle banque ; télécharger tous les relevés de l'ancien compte. Semaine 4 : Notifier manuellement les organismes non couverts par Agir ; mettre à jour les wallets numériques. Semaines 5 à 8 : Chevauchement des deux comptes ; vérification que les domiciliations migrent correctement. Semaine 9 : Envoyer la lettre de clôture en recommandé avec AR si la migration est complète. Semaines 10 à 12 : Maintien de l'ancien compte jusqu'à la confirmation écrite de clôture. Mois 3 : Vérification finale de l'absence de toute activité sur l'ancien compte ; archivage des documents de clôture.

## La comparaison des frais réels après le changement de banque

Une fois le changement de banque effectué et quelques mois de recul disponibles, une comparaison objective des frais entre l'ancienne et la nouvelle banque permet de vérifier que le changement a bien été bénéfique financièrement. Le calcul doit inclure tous les frais : frais de carte, frais de tenue de compte, coût des services utilisés (frais de virement international, commissions de change), et valeur des assurances incluses effectivement utilisées. Cette comparaison chiffrée constitue une confirmation objective que la décision de changer était fondée, et elle affine les critères pour évaluer la prochaine opportunité de changement.

## L'utilisation du RIB de l'ancien compte après la clôture

Une fois le compte clôturé, l'ancien IBAN ne doit plus être utilisé. Toute tentative de paiement ou de prélèvement sur cet IBAN sera rejetée. Il est important de retirer tous les appareils de paiement qui auraient pu enregistrer l'ancien numéro de carte associé au compte clôturé — les applications de commerce en ligne, les plateformes de streaming, et les sites e-commerce qui ont enregistré les données pour des paiements futurs doivent être mis à jour.

Pour les paiements qui référencent encore l'ancien IBAN après la clôture, les émetteurs seront notifiés du rejet et devront contacter le titulaire pour obtenir les nouvelles coordonnées. Cette procédure de rejet avec notification est gérée automatiquement par les systèmes bancaires, mais elle crée un délai dans les paiements concernés — raison supplémentaire de prévoir une période de chevauchement suffisante.
`;

// L3: 2553 → ~+1460 words
const EXT5_L3 = `
## La clôture de compte et les obligations de signalement

Dans certaines situations, la banque a l'obligation légale de signaler la clôture d'un compte à des autorités. Si la demande de clôture intervient dans un contexte de soupçon de fraude ou de blanchiment d'argent en cours d'investigation, la banque peut être tenue de conserver le compte ouvert et de signaler la situation à TRACFIN (la cellule française de traitement du renseignement financier). Cette situation est exceptionnelle et ne concerne pas les clôtures bancaires ordinaires, mais elle explique pourquoi la banque peut dans de rares cas demander des justificatifs supplémentaires avant de traiter une demande de clôture.

Pour les clients qui n'ont rien à se reprocher, cette procédure ne change rien à leurs droits — la clôture aboutira normalement, même si elle peut prendre un peu plus de temps le cas échéant. La transparence du client dans ses interactions avec la banque est toujours la meilleure posture.

## Les plateformes de comparaison pour choisir la banque de destination

Plusieurs plateformes de comparaison en ligne permettent de choisir la banque de destination en fonction de critères objectifs. Des sites comme LesFurets, Panorabanques, et Hello Comparateur proposent des outils de comparaison qui permettent de paramétrer des critères personnalisés : montant des frais annuels, services inclus, qualité du service client, notation des utilisateurs. Ces outils fournissent un premier filtre mais ne remplacent pas la lecture des conditions générales et des grilles tarifaires détaillées.

Pour les étudiants internationaux qui cherchent une banque acceptant facilement les ressortissants étrangers, les forums spécialisés (expat.com, groupes Facebook d'étudiants étrangers en France) offrent des retours d'expérience récents et contextualisés que les comparatifs généralistes ne peuvent pas fournir. La combinaison de ces deux sources — comparatifs objectifs et témoignages subjectifs — donne la base la plus solide pour un choix bancaire éclairé.

## La gestion des erreurs dans le processus de clôture

Même avec une préparation soigneuse, des erreurs peuvent survenir dans le processus de clôture. Un IBAN mal saisi pour le virement du solde résiduel, une lettre de clôture envoyée à la mauvaise adresse de la banque, ou une notification de migration SEPA qui ne parvient pas à certains créanciers — ces erreurs se corrigent mais requièrent des actions supplémentaires.

La rapidité d'identification et de signalement d'une erreur est le facteur clé de sa correction. Une erreur d'IBAN pour le virement du solde résiduel, signalée immédiatement après l'envoi de la lettre de clôture, peut être corrigée avant que le virement ne soit effectué. Une erreur qui n'est pas signalée jusqu'à la constatation du problème (virement retourné, solde non reçu) est plus longue à corriger. La vigilance active pendant les semaines qui suivent l'envoi de la demande de clôture est donc importante pour détecter et corriger rapidement les erreurs éventuelles.

## Les bonnes habitudes bancaires qui facilitent les clôtures futures

La facilité de clôture d'un compte dépend en grande partie des habitudes de gestion bancaire du titulaire. Un client qui maintient une liste à jour de ses domiciliations, qui archive régulièrement ses relevés, et qui documente les principales décisions bancaires (ouvertures de comptes, souscriptions de produits, modifications d'abonnements) a une transition bancaire beaucoup plus fluide qu'un client qui redécouvre son usage bancaire entier lors de la clôture.

Ces bonnes habitudes de documentation bancaire sont l'investissement dans la fluidité de toutes les transitions futures — pas seulement la clôture du compte actuel, mais aussi les ouvertures de nouveaux produits, les changements tarifaires, et les éventuelles contestations futures. Un dossier bancaire bien tenu est un outil de vie quotidienne dont la valeur se révèle dans les moments de changement ou de litige.

## Les erreurs de compréhension fréquentes sur la procédure de clôture

Plusieurs idées fausses circulent sur la procédure de clôture de compte en France. L'idée que la clôture prend effet immédiatement à l'envoi de la demande est fausse — la clôture prend effet à la date confirmée par la banque, après traitement du dossier. L'idée que retirer tout l'argent du compte équivaut à le clôturer est fausse — un compte vide reste actif et peut générer des frais. L'idée que le compte peut être clôturé avec des prélèvements en attente est fausse — tous les prélèvements programmésdoivent être soldés ou transférés d'abord. Corriger ces idées fausses avant d'initier la démarche évite les complications classiques de la clôture improvisée.
`;

// L4: 2347 → ~+1660 words
const EXT5_L4 = `
## Les impacts du service Agir sur les créanciers

Le service Agir, bien que géré entre banques, a des implications directes pour les créanciers des prélèvements migrés. Ces créanciers reçoivent une notification automatique de changement de RIB et doivent mettre à jour leurs systèmes pour présenter les prochains prélèvements sur le nouvel IBAN. La plupart des grands créanciers (opérateurs téléphoniques, compagnies d'assurance, organismes de crédit) disposent de systèmes informatiques capables de traiter ces notifications automatiques rapidement.

Cependant, des artisans, des particuliers, ou de petites structures peuvent ne pas disposer de systèmes capables de traiter ces notifications automatiques. Dans ces cas, une notification directe par email ou courrier de la part du client, avec le nouveau RIB en pièce jointe, est plus efficace que de s'appuyer uniquement sur le service Agir. La liste des créanciers nécessitant une notification directe doit être identifiée lors de la préparation de la clôture.

## Les droits du consommateur face aux frais post-clôture

Les frais prélevés après la date effective de clôture d'un compte constituent une facturation indue. Si de tels frais apparaissent sur un relevé final ou sont réclamés ultérieurement, le client est en droit de les contester formellement. La contestation doit être précise : mentionner la date de clôture officiellement confirmée par la banque, la nature des frais contestés, et la demande de remboursement chiffrée.

La banque dispose d'un délai raisonnable pour répondre à la contestation — généralement 10 jours ouvrés pour un accusé de réception et 30 jours pour une réponse de fond selon les conditions générales. Si la réponse est insatisfaisante, le médiateur bancaire est compétent pour trancher ce litige. Ces contestations sont souvent résolues favorablement pour le client car les frais post-clôture sont difficiles à justifier pour la banque.

## La propriété des données lors du changement de banque

Les données personnelles et d'utilisation accumulées chez l'ancienne banque restent légalement la propriété personnelle du client — la banque en est simplement gardienne temporaire pour la durée de conservation légale. Dans le cadre du droit à la portabilité des données (Article 20 du RGPD), le client peut demander à la banque de lui fournir ses données dans un format structuré et lisible par machine. Cette portabilité des données bancaires est plus limitée dans la pratique que la portabilité téléphonique, mais elle permet au moins de récupérer un historique de transactions exportable.

Pour les budgetiseurs avancés qui ont analysé leurs dépenses sur plusieurs années avec leur ancienne banque, cette portabilité des données permet de continuer l'analyse sur les années futures dans la nouvelle banque, avec une continuité de l'historique personnel.

## Les implications du changement de banque pour les futurs emprunts

Un changement de banque bien géré n'a aucun impact négatif sur la capacité d'emprunt future. Cependant, la nouvelle relation bancaire part de zéro en termes d'historique client. Pour reconstituer rapidement un profil de bon client dans la nouvelle banque, quelques actions proactives aident : domicilier immédiatement ses revenus principaux, maintenir un solde moyen créditeur, utiliser régulièrement les services de la banque (carte, virements, épargne), et éviter les incidents pendant les premières années.

Les banques accordent une valeur croissante à l'ancienneté de la relation dans leur évaluation du risque crédit. Un client qui a 5 ans d'utilisation sans incident dans sa banque présente un profil moins risqué qu'un nouveau client d'un an. Cet aspect temporel donne une valeur réelle à la durée de la relation bancaire et peut influencer les conditions d'emprunt futures — un argument parfois en faveur de rester avec sa banque actuelle si un crédit immobilier est envisagé dans les 2 ou 3 années suivantes.

## Les enseignements de la clôture pour la prochaine relation bancaire

Chaque expérience de clôture de compte est une source d'enseignements pour la prochaine relation bancaire. Les frictions rencontrées (domiciliations oubliées, délais inattendus, frais imprévus) révèlent des points de vigilance à intégrer lors de l'ouverture et de la gestion du prochain compte. Les aspects qui se sont bien passés (notifications rapides, migration fluide, documentation complète) méritent d'être reproduits et affinés.

Cette capitalisation sur l'expérience est la base de la compétence financière qui se construit progresivement. Un étudiant qui gère son premier changement de banque avec les difficultés normales d'une première fois, en tirant les leçons appropriées, sera beaucoup plus fluide lors du prochain changement. La relation bancaire, comme toute relation dans la vie, apporte des apprentissages dont la valeur augmente avec l'expérience.
`;

// L5: 2227 → ~+1780 words
const EXT5_L5 = `
## L'analyse coût-bénéfice d'une résiliation d'assurance lors du changement de banque

Lors d'un changement de banque, la question de la résiliation ou du maintien des assurances souscrites via la banque se pose. L'assurance habitation bancaire est-elle aussi compétitive que les offres disponibles chez des assureurs indépendants ou spécialisés ? Les assurances de prêt sont-elles aux meilleures conditions du marché ? La loi Hamon et la loi Lemoine ont considérablement facilité la réponse à ces questions en permettant la résiliation en cours de contrat.

Une comparaison des primes et des couvertures entre les assurances bancaires et celles disponibles sur le marché indépendant révèle souvent des économies potentielles significatives. Les comparateurs en ligne (LeLynx, Panorarisk, Direct Assurance) permettent d'obtenir des devis en quelques minutes. Si l'économie annuelle est supérieure aux éventuels frais de résiliation, le changement d'assureur est financièrement justifié. Cette opportunité d'optimisation, déclenchée par le changement de banque, peut générer des économies récurrentes pour plusieurs années.

## La procédure de réclamation en cas de litige sur le solde résiduel

Si le solde versé lors de la clôture est insuffisant par rapport à ce qu'il devrait être — en raison de frais injustifiés prélevés avant la clôture ou de transactions non autorisées — le client dispose de recours. La réclamation doit être chiffrée (montant attendu versus montant reçu, avec justificatifs) et adressée par courrier recommandé au service réclamations de la banque. La réponse doit intervenir dans les délais prévus au contrat.

Pour les montants contestés significatifs, la saisine du médiateur bancaire est la voie principale. Le médiateur analyse les transactions contestées, les frais en question, et les conditions contractuelles applicables pour rendre un avis. Si le médiateur donne tort à la banque, la banque doit rembourser les montants indûment prélevés. Si le médiateur donne tort au client, celui-ci conserve le droit de saisir le tribunal judiciaire mais le rapport de force est moins favorable.

## Les applications bancaires et leur accessibilité après la clôture

Après la clôture du compte, l'accès à l'application bancaire est généralement désactivé. Certaines banques maintiennent un accès en lecture seule pendant une période de transition (quelques semaines) pour permettre au client de vérifier les derniers mouvements et de confirmer la clôture. D'autres désactivent l'accès au moment de la confirmation de clôture. Cette différence de politique a des implications pratiques : l'archivage des documents doit être effectué avant la clôture si l'accès post-clôture n'est pas garanti.

Les applications de gestion financière connectées via Open Banking cessent de recevoir des nouvelles données du compte dès sa clôture. Les données historiques synchronisées avant la clôture restent généralement accessibles dans ces applications, ce qui préserve l'historique d'analyse. Cette continuité des données historiques dans un outil tiers est un avantage de l'Open Banking pour les utilisateurs analytiques.

## La clôture de compte et le remboursement de TVA

Pour les micro-entrepreneurs et auto-entrepreneurs étudiants qui ont un compte professionnel, la clôture de ce compte peut avoir des implications en matière de remboursement de TVA. Si la micro-entreprise a des créances de TVA en cours de remboursement par l'administration fiscale, le RIB enregistré auprès des Finances Publiques pour ces remboursements doit être mis à jour avant la clôture. Un remboursement de TVA envoyé sur un compte clôturé sera retourné à l'administration et pourra prendre plusieurs semaines supplémentaires pour être re-émis sur le bon compte.

Cette précaution est particulièrement importante pour les micro-entrepreneurs qui ont une activité e-commerce avec des remboursements de TVA fréquents, ou pour ceux qui ont récemment déclaré une période de TVA avec un solde créditeur. La vérification de l'IBAN enregistré dans l'espace professionnel des impôts fait partie de la checklist de clôture pour les étudiants-entrepreneurs.

## La clôture comme opportunité de révision complète de ses engagements financiers

La clôture d'un compte est l'occasion naturelle d'effectuer un bilan complet de tous ses engagements financiers. L'exercice de dresser la liste complète des prélèvements pour la migration des domiciliations révèle souvent des obligations financières oubliées ou négligées. Certains abonnements dont l'utilité n'est plus évidente, des assurances qui se chevauchent, ou des prélèvements de montants inexpliqués peuvent être découverts lors de cette analyse exhaustive.

Ce bilan financier complet, effectué dans le cadre de la clôture, permet d'optimiser l'ensemble de ses dépenses récurrentes : résilier les abonnements non utilisés, remplacer des assurances trop chères par des équivalents moins onéreux, et renégocier certains contrats. Les économies potentielles issues de cette optimisation peuvent être significatives et dépasser largement la valeur des économies réalisées sur les frais bancaires grâce au changement de banque lui-même.

## La gestion des trop-perçus en fin de relation bancaire

Si le titulaire a payé des frais pour une période au-delà de la date de clôture (frais annuels de carte payés pour l'année complète alors que la carte est résiliée en milieu d'année), il peut prétendre à un remboursement au prorata de la période non utilisée. Ce prorata s'applique aux frais calculables sur une base temporelle (carte, tenue de compte) mais pas aux frais transactionnels déjà réalisés.

La demande de remboursement de trop-perçu doit être effectuée rapidement après la réception de la confirmation de clôture, pendant la fenêtre de réclamation prévue au contrat. De nombreux clients ne réclament pas ces prorata — une négligence qui représente un gain net pour les banques. Un calcul rapide du montant potentiel à réclamer (frais annuels / 12 x nombre de mois restants après clôture) permet de savoir si la démarche vaut la peine d'être entreprise.
`;

// L6: 2223 → ~+1780 words
const EXT5_L6 = `
## Le rôle de la Banque de France dans le droit au compte

La Banque de France joue un rôle central dans l'inclusion bancaire française via sa mission de mise en oeuvre du droit au compte. Quand une personne se voit refuser l'ouverture d'un compte par une banque, elle peut saisir la Banque de France pour être désignée d'office dans un établissement. Cette procédure garantit que nul ne reste sans compte bancaire en France, même les personnes en situation précaire ou avec un historique bancaire difficile.

Pour les étudiants qui auraient rencontré des difficultés à ouvrir un compte après une clôture problématique — notamment si cette clôture a laissé des traces dans les fichiers de la Banque de France — la procédure du droit au compte est la protection de dernier recours. Elle garantit l'accès au moins à un compte de base avec les services essentiels.

## Le traitement des mandats de prélèvement en cours lors de la clôture

Les mandats de prélèvement SEPA sont des autorisations permanentes données à un créancier de prélever des sommes sur le compte. Ces mandats survivent techniquement à la clôture du compte dans les registres du créancier — il continue d'envoyer des ordres de prélèvement sur l'ancien IBAN jusqu'à ce qu'il reçoive une notification de changement ou un rejet. Depuis la clôture du compte, ces prélèvements seront tous rejetés.

Pour éviter cette situation, chaque mandat de prélèvement doit être géré explicitement lors de la clôture : soit transféré vers le nouveau compte (via le service Agir ou directement), soit révoqué si la relation contractuelle cesse en même temps. Un mandat de prélèvement révoqué signifie que la relation commerciale sous-jacente est aussi terminée — à ne pas confondre avec un simple changement de RIB, qui maintient la relation commerciale mais adresse les prélèvements vers le nouveau compte.

## Les comptes étrangers déclarés et leur clôture

Pour les personnes qui ont déclaré des comptes étrangers dans leur déclaration de revenus française (formulaire 3916), la clôture d'un de ces comptes étrangers doit être signalée dans la prochaine déclaration de revenus. Une case spécifique dans le formulaire 3916 permet d'indiquer la date de clôture d'un compte déclaré dans une année précédente. Cette notification évite une demande de renseignements de la part de l'administration fiscale sur un compte qui n'apparaît plus dans la déclaration sans explication.

Cette obligation déclarative est méconnue mais importante. L'omettre n'est pas une fraude délibérée mais peut créer des frictions lors d'un contrôle. La gestion rigoureuse de ses obligations déclaratives est la meilleure protection contre les complications avec l'administration fiscale.

## Les points d'attention pour les titulaires de PEA lors d'un changement de banque

Le Plan d'Épargne en Actions (PEA) est un produit d'épargne investi qui ne se "clôture" pas simplement comme un livret. Il s'investit dans des actions ou fonds et peut être transféré d'un établissement à un autre sans déclencher d'imposition, sous réserve que le transfert soit effectué selon les procédures prévues. Le transfert d'un PEA entre établissements prend généralement 15 à 30 jours et des frais de transfert peuvent s'appliquer.

Si le PEA est actif et investi dans des actifs dont la valeur évolue, le délai de transfert crée une période de risque de marché pendant laquelle les actifs sont en transit entre les deux établissements. Certains clients préfèrent clôturer le PEA (avec les implications fiscales correspondantes) plutôt que de le transférer, particulièrement si la valeur est modeste ou si des plus-values importantes rendent la clôture fiscalement coûteuse. La consultation d'un conseiller fiscal avant de décider est recommandée pour les PEA d'une valeur significative.

## Les mécanismes de protection spécifiques aux comptes d'épargne des étudiants

Les étudiants bénéficient de protections spécifiques dans certains produits d'épargne. Le Livret Jeune (ouvert entre 12 et 25 ans) est automatiquement transformé en Livret A ou clôturé lors du 25ème anniversaire, selon les termes du contrat. Les PEL ouverts pendant les études bénéficient des mêmes protections et avantages que tous les PEL. Les LEP (Livrets d'Épargne Populaire) sont accessibles aux étudiants dont le revenu fiscal est en dessous d'un certain seuil, et leur éligibilité est réévaluée chaque année.

Lors d'un changement de banque, vérifier l'éligibilité aux différents produits d'épargne de la nouvelle banque — notamment le LEP si les revenus sont modestes — est une démarche qui peut générer un rendement d'épargne supérieur. Le LEP offre le meilleur taux de rendement parmi les livrets réglementés, parfois jusqu'à deux fois supérieur au taux du Livret A, ce qui en fait un produit particulièrement adapté aux étudiants avec des revenus modestes.

## Bilan : la clôture comme marqueur de maturité financière

Maîtriser la procédure de clôture d'un compte bancaire est un marqueur de maturité financière. C'est la preuve que l'on considère sa relation bancaire non comme un état permanent et subi, mais comme une relation contractuelle que l'on choisit activement et que l'on peut modifier lorsque c'est dans son intérêt. Les étudiants et les jeunes adultes qui développent cette mentalité — consommateur actif de services financiers, pas simplement utilisateur passif — prennent le contrôle d'une dimension importante de leur vie quotidienne et patrimoniale. La connaissance des procédures, des droits, et des recours disponibles est le fondement de ce contrôle.
`;

await appendAndPatch('993f2c6f-3af0-472b-b7eb-e828b1aa09e9', EXT5_L1);
await appendAndPatch('2c258539-3073-41f6-b0b7-d30fc935fff8', EXT5_L2);
await appendAndPatch('bae3513f-1fe0-40ef-a639-9e54c053bf60', EXT5_L3);
await appendAndPatch('e9fa9b23-5d88-4067-a94f-7f988db9839f', EXT5_L4);
await appendAndPatch('9bf50448-7156-4821-872c-66d32e62a84f', EXT5_L5);
await appendAndPatch('2b027cc3-557e-4ef3-914b-2356ad93c539', EXT5_L6);
