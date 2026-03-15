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

const L1 = `# Corriger et contester son avis d'imposition en France

L'avis d'imposition est un document officiel émis par la Direction Générale des Finances Publiques (DGFIP) qui récapitule le montant d'impôt sur le revenu dû par un foyer fiscal pour une année donnée. Bien que produit par un système automatisé à partir des déclarations des contribuables, cet avis peut contenir des erreurs — erreurs de saisie, omissions d'informations, mauvaise application des règles fiscales — qui nécessitent d'être corrigées. Connaître les procédures de correction et de contestation est une compétence fiscale pratique pour tout résident en France.

## Les types d'erreurs les plus courantes sur les avis d'imposition

Les erreurs sur les avis d'imposition peuvent avoir deux origines : des erreurs dans la déclaration de revenus initiale (informations incorrectes ou manquantes saisies par le contribuable) et des erreurs de traitement par l'administration fiscale (mauvaise interprétation des données déclarées, application incorrecte d'un abattement ou d'une exonération). Les deux catégories d'erreurs ont des procédures de correction différentes.

Les erreurs d'origine contribuable les plus fréquentes sont l'oubli de déclarer un revenu (salaires d'emplois à temps partiel, revenus de stages, intérêts bancaires), la déclaration d'un montant incorrect (faute de frappe, confusion entre brut et net), et l'omission d'une déduction ou d'une exonération à laquelle on a droit (abattement pour frais professionnels, déduction pour charges familiales). Les erreurs d'origine administrative incluent des erreurs de report d'information entre formulaires et l'application incorrecte de taux ou de tranches.

## La procédure de réclamation contentieuse

Quand on constate une erreur après réception de l'avis d'imposition, la première démarche est de soumettre une réclamation contentieuse auprès du service des impôts dont on dépend. Cette réclamation peut être effectuée en ligne via son espace particulier sur impots.gouv.fr (rubrique "Nous contacter" > "Contester ma décision"), par courrier recommandé, ou directement au guichet de son centre des finances publiques. La réclamation doit exposer clairement l'erreur constatée, les justificatifs à l'appui, et le montant de rectification demandé.

Le délai for déposer une réclamation est en général de deux ans à compter de la mise en recouvrement (date sur l'avis d'imposition). Pour les rectifications concernant une période antérieure, des délais spéciaux peuvent s'appliquer. L'administration fiscale dispose d'un délai de six mois pour répondre à une réclamation. Si la réponse est défavorable ou en l'absence de réponse après six mois, un recours contentieux devant le tribunal administratif est possible.

## La télécorrection de la déclaration en ligne

Pour les erreurs dans la déclaration initiale, impots.gouv.fr propose une fonction de télécorrection qui permet de modifier sa déclaration de revenus même après la date limite de déclaration. Cette fonctionnalité, disponible de mai à décembre de l'année de déclaration, ne nécessite pas de procédure de réclamation formelle — il suffit d'accéder à sa déclaration en ligne et de corriger les montants erronés. L'avis d'imposition rectifié sera émis automatiquement.

Cette voie est la plus simple et la plus rapide pour les erreurs découvertes peu après la déclaration initiale. Elle permet d'éviter la procédure de réclamation plus formelle et ses délais associés.

## Les recours en cas de désaccord persistant avec l'administration

Si la réclamation est rejetée et qu'un désaccord subsiste avec l'administration fiscale, plusieurs niveaux de recours sont disponibles. Le premier recours est le supérieur hiérarchique du service des impôts — une demande de révision de la décision par le responsable du département peut parfois aboutir à une révision de position dans les dossiers où l'argumentation est solide mais n'a pas convaincu le premier interlocuteur.

Le second recours est le Médiateur du ministère de l'Économie et des Finances, accessible sans condition de désaccord préalable, qui peut examiner les dossiers fiscaux complexes et formuler des recommandations. Le troisième recours est le Défenseur des Droits, pour les cas où une discrimination ou un manquement aux droits fondamentaux est en cause. En dernier ressort, le recours contentieux devant le tribunal administratif est la voie juridictionnelle pour les dossiers où le montant en jeu justifie les frais d'une procédure judiciaire.
`;

const L2 = `# L'avis d'imposition en France : comprendre ce document clé

L'avis d'imposition sur le revenu est l'un des documents officiels les plus importants produits par l'administration fiscale française. Émis chaque été (entre juillet et septembre selon les foyers), il récapitule les revenus déclarés, les déductions appliquées, et l'impôt sur le revenu dû ou à recevoir pour l'année fiscale précédente. Ce document est beaucoup plus qu'un simple relevé fiscal — il est utilisé comme justificatif de revenus dans de nombreuses démarches administratives et financières.

## La structure de l'avis d'imposition : que lire et où

L'avis d'imposition se présente comme un document de plusieurs pages organisé en sections clairement identifiées. La première page est la page de synthèse la plus importante — elle mentionne le numéro fiscal (identifiant unique du foyer fiscal), le revenu fiscal de référence (RFR), le montant brut de l'impôt calculé, les crédits et réductions d'impôt appliqués, et le montant net de l'impôt après prélèvement à la source éventuellement déjà versé.

La deuxième section détaille le calcul de l'impôt — les revenus par catégorie (traitements et salaires, revenus de capitaux mobiliers, revenus fonciers, bénéfices non commerciaux), les abattements applicables, et l'application du barème progressif par tranches. Comprendre cette section permet de vérifier que chaque revenu a été correctement pris en compte et que les déductions auxquelles on avait droit ont bien été appliquées.

## L'utilisation de l'avis d'imposition comme justificatif

L'avis d'imposition est le justificatif de revenus par excellence dans de nombreuses démarches en France. Les banques le demandent pour les demandes de crédit. Les propriétaires le demandent souvent lors des candidatures à la location d'un logement. La CAF l'utilise pour calculer les aides au logement. Les mutuelles l'utilisent pour accéder à la Complémentaire Santé Solidaire. Les administrations (préfectures, mairies) le demandent dans diverses procédures.

Pour les étudiants, l'avis d'imposition le plus souvent demandé est celui des parents (pour les demandes de bourse critères sociaux du CROUS), ou leur propre avis si ils ont déjà leurs propres revenus à déclarer. Les non-imposables reçoivent aussi un avis d'imposition qui mentionne explicitement leur non-imposition — ce document est tout aussi valable comme justificatif que celui d'un contribuable imposable.

## L'avis de non-imposition et son usage

L'avis de non-imposition est l'avis émis par la DGFIP pour les foyers dont les revenus sont inférieurs au seuil d'imposition. Ce document, qui indique clairement que le foyer fiscal n'est pas imposable, est accepté dans toutes les démarches qui demandent un avis d'imposition. Sa valeur juridique est identique à celle d'un avis d'imposition pour un foyer imposable.

Pour les étudiants qui n'ont pas ou peu de revenus propres, l'avis de non-imposition personnel et/ou l'avis d'imposition des parents (si l'étudiant est rattaché au foyer fiscal parental) sont les documents fiscaux principaux à gérer. Le téléchargement et l'archivage numérique de ces documents dès leur disponibilité sur l'espace personnel impots.gouv.fr est une bonne pratique qui évite des recherches en urgence lors des démarches administratives.

## L'impact du revenu fiscal de référence sur les droits sociaux

Le revenu fiscal de référence (RFR) est une notion centrale dans la détermination des droits sociaux et fiscaux. Il correspond à un revenu net global après application de certains abattements, mais avant d'autres. Le RFR est utilisé par de nombreux organismes pour calculer l'éligibilité et le montant de diverses aides et avantages.

Pour les étudiants, le RFR des parents détermine le montant de la bourse sur critères sociaux. Un RFR faible donne droit à une bourse de niveau élevé ; un RFR élevé réduit ou annule le droit à la bourse. Pour les aides au logement de la CAF, le RFR du foyer de l'allocataire est utilisé depuis la réforme de 2021 des APL. Connaître son RFR — et si possible l'anticiper avant de soumettre des demandes d'aide — permet de mieux planifier ses ressources.
`;

const L3 = `# Obtenir et lire son avis d'imposition en France

L'obtention de son avis d'imposition en France est une procédure simple depuis la dématérialisation complète des services fiscaux, mais elle peut dérouter les personnes qui n'ont jamais navigué dans l'espace personnel impots.gouv.fr. Ce guide pratique explique comment accéder à son avis d'imposition, le télécharger, et l'interpréter pour les usages courants.

## Créer et activer son espace personnel sur impots.gouv.fr

La première étape pour accéder à ses documents fiscaux en ligne est de créer un espace personnel sur impots.gouv.fr. La création d'un compte nécessite le numéro fiscal (présent sur tout courrier de l'administration fiscale ou demandable auprès du service des impôts), le numéro d'accès en ligne (présent sur la déclaration de revenus ou l'avis d'imposition papier), et une adresse email valide.

Pour les personnes qui n'ont jamais déclaré leurs revenus en France ou qui n'ont pas encore reçu de courrier fiscal, la première prise de contact avec l'administration fiscale peut se faire directement en agence (centre des finances publiques) avec une pièce d'identité. L'agent des impôts peut créer un numéro fiscal et un premier accès à l'espace en ligne.

## Télécharger son avis d'imposition

Une fois l'espace en ligne activé, l'avis d'imposition est accessible dans la rubrique "Documents" ou "Consulter mes documents fiscaux" de l'espace particulier. Les avis des dernières années sont généralement disponibles, permettant de télécharger un avis même plusieurs années après son émission. Le format de téléchargement est le PDF, avec une signature électronique intégrée qui garantit l'authenticité du document.

Pour les démarches qui requièrent un avis d'imposition original, le document PDF téléchargé depuis impots.gouv.fr est considéré comme l'original officiel — il n'est pas nécessaire de demander une impression physique à l'administration. La majorité des organismes acceptent les PDF issus de l'espace personnel impots.gouv.fr sans demander de timbre ou de cachet supplémentaire.

## Lire les lignes clés de l'avis d'imposition

Pour la plupart des démarches, seules quelques informations clés de l'avis d'imposition sont nécessaires. Le numéro fiscal (identifiant unique du foyer, à 13 chiffres), le revenu fiscal de référence (RFR, utilisé par la CAF et le CROUS), et le montant de l'impôt net (ce qui a été payé ou remboursé) sont les trois informations les plus fréquemment demandées.

Pour les demandes de bourse CROUS, l'avis d'imposition des parents (ou tuteurs) est le document principal, et c'est leur RFR qui est pris en compte dans le calcul de l'échelon de bourse. Le CROUS utilise automatiquement les données fiscales via l'échange dématérialisé avec l'administration fiscale — dans la plupart des cas, l'étudiant n'a pas besoin de fournir physiquement l'avis d'imposition pour sa demande de bourse, car les données sont récupérées directement.

## Les pièges de l'interprétation de l'avis d'imposition

Plusieurs éléments de l'avis d'imposition peuvent prêter à confusion pour les non-initiés. La différence entre "impôt brut" et "impôt net" est fondamentale — l'impôt brut est le montant calculé avant application des crédits et réductions d'impôt, tandis que l'impôt net est ce qui est réellement dû. Des crédits d'impôt significatifs (garde d'enfant, dons, etc.) peuvent réduire fortement l'impôt brut.

La différence entre "revenu imposable" et "revenu fiscal de référence" est également source de confusion. Ces deux montants peuvent être différents car le revenu fiscal de référence prend en compte des revenus exonérés qui n'entrent pas dans la base imposable ordinaire. Pour les demandes d'aide basées sur le RFR, c'est bien le RFR et non le revenu imposable qui doit être communiqué.
`;

const L4 = `# L'imposition des étudiants étrangers en France

La fiscalité applicable aux étudiants étrangers en France dépend de plusieurs facteurs : leur résidence fiscale, la nature de leurs revenus, et les conventions fiscales bilatérales entre la France et leur pays d'origine. Ce sujet, technique en apparence, a des implications pratiques importantes sur les sommes à déclarer, l'impôt éventuellement dû, et les droits à certaines aides conditionnées à la déclaration de revenus.

## La notion de résidence fiscale pour les étudiants étrangers

La résidence fiscale est le concept central qui détermine quelle législation fiscale s'applique à un individu. Un étudiant est considéré comme résident fiscal en France s'il y a son domicile principal (logement principal), s'il y exerce son activité principale (études ou travail), ou s'il y séjourne plus de 183 jours dans l'année fiscale. La résidence fiscale en France implique que l'ensemble des revenus mondiaux doit être déclaré en France.

Pour un étudiant international qui s'installe en France pour ses études, la résidence fiscale française est généralement établie dès la première année académique s'il n'a plus de domicile principal dans son pays d'origine. Il peut théoriquement y avoir une double résidence fiscale — être résident fiscal à la fois en France et dans son pays d'origine — ce qui peut créer des risques de double imposition résolus par les conventions bilatérales.

## Les conventions fiscales bilatérales et leur rôle

La France a signé des conventions fiscales bilatérales avec plus de 130 pays pour éviter la double imposition de ses résidents et des résidents de ces pays qui ont des activités de part et d'autre des frontières. Ces conventions prévoient en général que les revenus perçus dans un seul pays ne soient imposés que dans ce pays (sous réserve d'un certain seuil), et que les impôts payés dans l'autre pays soient créditables pour éviter la double contribution.

Pour les étudiants, de nombreuses conventions prévoient des dispositions spécifiques qui exonèrent les bourses et les revenus d'emploi en dessous d'un certain seuil. La convention Franco-Camerounaise, par exemple, prévoit que les bourses d'études versées par gouvernements sont exonérées d'impôt dans le pays d'études. La vérification des dispositions spécifiques à la convention entre la France et le pays d'origine est donc une étape utile avant de déclarer ses revenus.

## La déclaration de revenus pour les étudiants étrangers

Les étudiants étrangers qui perçoivent des revenus en France doivent en principe déclarer ces revenus auprès de l'administration fiscale française. Cette déclaration couvre les revenus d'emplois salariés effectués en France (jobs étudiants, stages rémunérés), les bourses françaises (CROUS, régions, fondations), et les revenus d'autres sources françaises (intérêts bancaires, dividendes, revenus locatifs).

Les revenus perçus exclusivement dans le pays d'origine (virements familiaux, bourses du gouvernement du pays d'origine) ne sont en principe pas imposables en France, bien qu'ils doivent être pris en compte dans la déclaration si l'étudiant est résident fiscal français. La distinction entre revenus de source française et revenus de source étrangère est matérialisée dans le formulaire de déclaration de revenus.

## L'exonération des bourses d'études de la taxation en France

En France, les bourses d'études accordées pour financer des études ou des recherches sont généralement exonérées d'impôt sur le revenu, que le bénéficiaire soit français ou étranger. Cette exonération s'applique aux bourses du CROUS, aux bourses Erasmus+, aux bourses des collectivités territoriales pour les études, et aux bourses accordées par des organismes de recherche pour des travaux académiques. Les conditions précises d'exonération sont définies à l'article 81 du Code Général des Impôts.

Cette exonération est importante à connaître pour éviter de déclarer à tort des sommes exonérées, ce qui pourrait artificiellement augmenter le revenu imposable et réduire les droits aux aides sociales conditionnées au revenu. Si des sommes exonérées ont été déclarées par erreur lors d'une déclaration précédente, la procédure de réclamation contentieuse permet d'obtenir leur correction et un remboursement de l'impôt indûment payé.
`;

const L5 = `# L'avis d'imposition comme preuve de ressources en France

L'avis d'imposition est souvent décrit comme le "sésame administratif" en France — le document qui ouvre des portes dans les démarches les plus diverses. Cette réputation est méritée : dans un pays où la traçabilité des revenus fiscaux est centrale dans les systèmes d'information administratifs, l'avis d'imposition est la source de vérité acceptée par pratiquement tous les organismes.

## Les démarches qui requièrent l'avis d'imposition

La liste des démarches qui demandent la présentation d'un avis d'imposition est longue. Dans le domaine financier : demande de crédit, ouverture de compte bancaire (pour certains profils), demande d'assurance-vie. Dans le domaine du logement : candidature locative (les propriétaires et agences immobilières demandent en général les trois derniers avis d'imposition), demande d'APL auprès de la CAF, accès à un logement social HLM.

Dans le domaine des aides sociales : demande de bourse CROUS, demande d'aide au CCAS, accès à la Complémentaire Santé Solidaire. Dans le domaine de la vie courante : tarif réduit dans les musées nationaux ou les transports en commun pour les foyers modestes, inscription dans les crèches municipales pour les parents. Cette omniprésence de l'avis d'imposition dans les démarches françaises explique pourquoi le télécharger et l'archiver dès sa disponibilité annuelle est une priorité pratique.

## L'avis d'imposition dans les candidatures locatives

La location d'un logement en France nécessite de fournir un dossier de candidature qui prouve la capacité financière à honorer le loyer. L'avis d'imposition — généralement les deux ou trois derniers disponibles — est l'un des documents standard de ce dossier. Les propriétaires et agences immobilières utilisent le revenu fiscal de référence pour vérifier que les revenus du candidat sont suffisants (généralement, le loyer ne doit pas dépasser 30 à 33% des revenus nets).

Pour les étudiants dont les revenus propres sont insuffisants pour qualifier seuls, l'avis d'imposition des parents est souvent utilisé conjointement avec une garantie parentale (caution solidaire). Dans ce cas, c'est le RFR des parents qui est examiné pour évaluer la solvabilité du dossier. La constitution d'un dossier de location complet avec l'avis d'imposition des parents, une lettre de caution signée, et les justificatifs d'identité et de revenus augmente significativement les chances d'acceptation.

## Comment l'avis d'imposition facilite l'accès au crédit

Pour les demandes de crédit, notamment le prêt étudiant garanti par l'État, les banques demandent plusieurs indicateurs de la situation financière actuelle et future. L'avis d'imposition est utilisé comme indicateur des revenus passés — il ne prédit pas les revenus futurs, mais donne un point de référence stable. Pour un étudiant sans revenus propres ou avec des revenus modestes, l'avis d'imposition confirme cette situation, et c'est la garantie d'État qui compense l'absence de revenus suffisants.

Pour les étudiants qui ont travaillé et ont donc des revenus à déclarer, un avis d'imposition montrant des revenus réguliers — même modestes — est un argument positif dans les dossiers de crédit, car il constitue la preuve documentée d'une capacité à générer des revenus. Les banques font confiance aux données fiscales car leur falsification constitue une infraction pénale.

## La confidentialité de l'avis d'imposition et la protection des données

L'avis d'imposition contient des informations personnelles très sensibles — revenus, composition du foyer, adresse. Il est donc important de ne le transmettre qu'aux organismes qui en ont légitimement besoin dans le cadre d'une démarche spécifique. Ne pas conserver de copies dans des espaces cloud non sécurisés, ne pas l'envoyer par email non chiffré à des interlocuteurs inconnus, et ne pas le laisser visible dans des environnements de travail partagés sont des précautions de protection des données pratiques.

Les organismes qui demandent l'avis d'imposition sont soumis au RGPD (Règlement Général sur la Protection des Données) pour les entreprises et à la loi Informatique et Libertés pour les administrations. Ces réglementations leur imposent de ne traiter les données fiscales que dans le cadre du service demandé et de les supprimer ou anonymiser après la durée de conservation légale. En cas d'utilisation non autorisée de votre avis d'imposition par un organisme, la CNIL (Commission Nationale de l'Informatique et des Libertés) peut être saisie.
`;

const L6 = `# Le prélèvement à la source : comment ça marche en France

Le prélèvement à la source (PAS) est le mécanisme introduit en France en janvier 2019 qui permet de collecter l'impôt sur le revenu directement lors du paiement des revenus, plutôt qu'un an après via une déclaration annuelle classique. Ce système, qui a profondément modifié la façon dont les Français vivent leur relation avec l'impôt, a un impact direct sur les salaires perçus, les aides au logement, et la gestion de la trésorerie mensuelle.

## Le principe du prélèvement à la source

Avant le PAS, les Français payaient l'impôt sur les revenus de l'année N au cours de l'année N+1, sur la base de la déclaration d'impôts déposée au printemps. Ce décalage d'un an entre la perception des revenus et le paiement de l'impôt correspondant créait une gestion de trésorerie complexe. Le PAS a aligné le paiement de l'impôt avec la perception des revenus — le contribuable paie l'impôt en même temps qu'il perçoit son salaire, sous forme d'une déduction opérée directement par l'employeur.

Le taux de prélèvement applicable correspond au taux d'imposition calculé sur les revenus de l'année N-2 (ou N-1 pour les nouveaux foyers fiscaux). Ce taux, calculé automatiquement par l'administration fiscale à partir de la déclaration de revenus annuelle, est transmis à l'employeur qui l'applique sur chaque salaire. Ce taux peut être modifié en cours d'année si la situation fiscale change significativement.

## L'impact du PAS sur le salaire net

Pour les étudiants qui travaillent à temps partiel ou en alternance, le prélèvement à la source signifie que le salaire net perçu inclut déjà le prélèvement d'impôt. Le bulletin de salaire mentionne le montant du PAS prélevé et le salaire net après PAS. Pour les étudiants non imposables (revenus inférieurs au seuil d'imposition), le taux de PAS est zéro et le salaire net avant et après PAS est identique — aucune déduction pour impôt n'apparaît sur la fiche de paie.

Pour les étudiants qui deviennent imposables parce que leurs revenus d'emploi dépassent le seuil d'imposition, le PAS crée un prélèvement automatique qui réduit le salaire net perçu. Cette réduction peut surprendre si elle n'est pas anticipée dans la construction du budget mensuel. La simulation du taux de PAS applicable via le calculateur de l'administration fiscale permet d'anticiper ce prélèvement avant de recevoir le premier salaire soumis à l'impôt.

## La déclaration de revenus annuelle subsiste malgré le PAS

Le PAS n'a pas supprimé la déclaration de revenus annuelle — elle est toujours obligatoire pour tous les foyers fiscaux. La déclaration, effectuée entre avril et juin de chaque année pour les revenus de l'année précédente, permet de régulariser l'impôt payé via le PAS. Si les prélèvements à la source ont été insuffisants (parce que les revenus ont augmenté en cours d'année), un solde impayé sera calculé et exigé. Si les prélèvements ont été excessifs (revenus inférieurs aux prévisions, crédits d'impôt), un remboursement sera effectué.

La déclaration de revenus permet également d'intégrer des crédits et réductions d'impôt qui ne peuvent pas être pris en compte dans le PAS — dons aux associations, frais de garde d'enfants, emploi d'un salarié à domicile. Ces éléments génèrent souvent un remboursement en juillet-août, après le traitement de la déclaration.

## Le taux personnalisé vs le taux neutre

Chaque contribuable peut choisir entre deux options pour son prélèvement à la source. Le taux personnalisé est calculé à partir de l'ensemble des éléments du foyer fiscal — il reflète fidèlement la situation fiscale réelle et assure que le prélèvement mensuel correspond précisément à l'impôt dû. Le taux neutre (ou taux non-personnalisé) est un taux standard appliqué uniquement sur les revenus de l'emploi actuel, sans tenir compte du reste du foyer.

Pour les étudiants en couple dont les revenus sont très différents, le taux neutre peut être préférable pour l'un des partenaires — notamment celui qui a des revenus plus faibles et ne veut pas que son employeur connaisse le taux d'imposition du foyer (qui peut être élevé si le partenaire a des revenus importants). Cette option préserve la confidentialité de la situation fiscale du foyer vis-à-vis de l'employeur, au prix d'une régularisation éventuelle en fin d'année.

## La régularisation de fin d'année et les remboursements d'impôt

La régularisation de fin d'année est le moment où l'administration fiscale compare l'impôt réellement dû (calculé lors de la déclaration annuelle) avec les prélèvements à la source déjà effectués pendant l'année. Si les prélèvements dépassent l'impôt dû — ce qui arrive fréquemment pour les foyers dont les revenus ont diminué en cours d'année, ou qui ont des crédits d'impôt importants — un remboursement est effectué en juillet-août suivant la déclaration.

Ce remboursement peut représenter une somme significative pour certains foyers — parfois plusieurs centaines d'euros pour les foyers qui bénéficient de nombreux crédits d'impôt. Anticiper ce remboursement dans la gestion budgétaire — en le planifiant pour financer des achats importants ou en l'affectant à l'épargne — est une pratique de gestion financière personnelle avisée.
`;

await patch('9e2a16ea-0c1b-4df3-a8f6-fb3dac6f425b', L1);
await patch('19527171-0a94-4ba5-b58e-a15de77a8adc', L2);
await patch('a2da7151-913a-4f41-8285-7ee916b68cb9', L3);
await patch('646d10ae-5597-4b58-928c-f22fc29ce5fb', L4);
await patch('838acbd1-bcda-4d75-81e0-b822158a6439', L5);
await patch('a7eb44c9-883f-4305-9041-97be5222b583', L6);
