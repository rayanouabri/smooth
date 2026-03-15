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

// L1: 381 → ~+750 words
const EXT1_L1 = `
## La procédure d'obtention du numéro fiscal pour les nouveaux arrivants

Pour un étudiant étranger qui n'a jamais payé d'impôts en France, l'obtention d'un numéro fiscal est la première démarche à effectuer. Ce numéro unique à 13 chiffres est l'identifiant fiscal personnel du contribuable auprès de l'administration fiscale française. Il est différent du numéro de sécurité sociale (NIR) et du numéro SIRET d'une entreprise.

Pour obtenir un numéro fiscal, l'étudiant doit se rendre au centre des finances publiques de son lieu de résidence avec une pièce d'identité et un justificatif de domicile en France. Il peut également envoyer une demande écrite au service des impôts des particuliers compétent. Le numéro fiscal est généralement attribué rapidement (quelques jours à deux semaines) et permettra ensuite d'accéder à l'espace particulier sur impots.gouv.fr.

Il est important de noter que certaines universités et grandes écoles françaises peuvent aider leurs étudiants internationaux à effectuer cette démarche — renseignez-vous auprès du service des relations internationales ou du service d'aide aux étudiants de votre établissement.

## Les conventions fiscales : exemples concrets

Les conventions fiscales bilatérales sont des traités internationaux qui déterminent comment les revenus d'un individu sont imposés lorsqu'il est résident dans un pays mais perçoit des revenus d'un autre pays. Prenons quelques exemples concrets pour illustrer leur importance pour les étudiants étrangers.

Pour un étudiant américain en France : la convention franco-américaine prévoit généralement que les bourses d'études et les revenus de travail à temps partiel des étudiants peuvent être traités différemment selon leur nature. Les bourses reçues de sources américaines peuvent être exonérées d'impôt en France sous certaines conditions. Pour un étudiant marocain : la convention franco-marocaine contient des dispositions spécifiques sur la résidence fiscale et l'imposition des revenus des étudiants qui permettent souvent d'éviter une double imposition des bourses de l'État marocain.

Pour trouver la convention applicable, le site de l'administration fiscale française (impots.gouv.fr) met à disposition les textes de toutes les conventions fiscales bilatérales signées par la France. La lecture de l'article spécifique aux "étudiants et stagiaires" dans chaque convention est le point de départ pour comprendre son régime fiscal particulier.

## Les ressources d'aide à la déclaration pour les étudiants étrangers

Face à la complexité du système fiscal français, de nombreuses ressources existent pour aider les étudiants étrangers. Les centres d'information des droits des femmes et des familles (CIDFF), les permanences d'aide juridique gratuites, et les associations d'étudiants étrangers proposent souvent des ateliers ou des permanences d'aide à la déclaration fiscale pendant la période de déclaration.

La plateforme "France services" disponible dans de nombreuses villes offre un accompagnement gratuit pour toutes les démarches administratives, y compris fiscales. Pour les étudiants des grandes universités, les services d'aide sociale et les assistantes sociales du CROUS peuvent parfois orienter vers des ressources d'aide fiscale. Le service Impots.gouv propose également une messagerie sécurisée et un numéro de téléphone pour poser des questions à l'administration fiscale directement.

## L'impact du changement de résidence fiscale en cours d'année

Pour les étudiants qui arrivent ou qui quittent la France en cours d'année, la question de la résidence fiscale est proratisée selon la période de séjour. Si une personne est résidente fiscale française pendant une partie de l'année seulement, elle declare ses revenus mondiaux pour la période de résidence et ses revenus de source française uniquement pour la période de non-résidence.

Cette situation peut être complexe à gérer et nécessite souvent l'aide d'un professionnel ou d'un conseiller fiscal. Les étudiants en programme d'échange d'un semestre, par exemple, peuvent avoir une résidence fiscale partagée entre leur pays d'origine et la France selon la durée exacte de leur séjour et leur situation particulière.
`;

// L2: 375 → ~+750 words
const EXT1_L2 = `
## Le système du prélèvement à la source et son impact sur les étudiants

Depuis 2019, la France a mis en place le prélèvement à la source (PAS) qui collecte l'impôt sur le revenu directement lors du versement des salaires et revenus. Pour les étudiants salariés, cela signifie que l'impôt est automatiquement déduit de leur salaire, sur la base d'un taux calculé par l'administration fiscale d'après la dernière déclaration connue.

Pour un étudiant qui déclare pour la première fois, le taux de prélèvement est initialement le "taux neutre" (taux par défaut) qui correspond à une situation standard sans situation personnelle connue de l'administration. Ce taux neutre peut être supérieur au taux réel applicable compte tenu de l'exonération des revenus étudiants — dans ce cas, un remboursement interviendra lors de la régularisation annuelle après la déclaration. Les étudiants peuvent demander la modification de leur taux de prélèvement si celui-ci leur semble trop élevé, en se connectant à leur espace particulier sur impots.gouv.fr.

## Le rattachement au foyer parental : avantages et inconvénients

La question du rattachement au foyer fiscal des parents est stratégique pour les étudiants. Un étudiant de moins de 21 ans peut être rattaché automatiquement au foyer parental. Entre 21 et 25 ans, le rattachement est optionnel mais nécessite d'être demandé explicitement lors de la déclaration des parents.

Les avantages du rattachement pour les parents incluent une demi-part (ou part complète selon la situation) supplémentaire dans le calcul du quotient familial, ce qui peut réduire leur impôt. En contrepartie, si l'étudiant perçoit des revenus, ceux-ci s'ajoutent aux revenus du foyer fiscal des parents et peuvent augmenter leur imposition totale. Pour les familles où les parents ont déjà des revenus élevés, le rattachement peut paradoxalement être défavorable. Chaque situation est unique et mérite un calcul comparatif.

L'alternative est que l'étudiant constitue son propre foyer fiscal. Dans ce cas, il bénéficie d'une part entière de quotient familial pour lui-même et d'une décote pour les faibles revenus, ce qui se traduit souvent par une imposition nulle si ses revenus restent modestes. En contrepartie, les parents perdent l'avantage du rattachement mais peuvent bénéficier d'une déduction de pension alimentaire s'ils versent une aide financière régulière à l'étudiant.

## L'avis de non-imposition : un document précieux

Même les étudiants dont les revenus sont exonérés ou insuffisants pour générer un impôt ont intérêt à déclarer leurs revenus chaque année. La raison principale est l'obtention de l'avis de non-imposition (ANI), un document officiel attestant que l'individu a rempli ses obligations déclaratives et n'est pas imposable.

L'ANI est demandé dans de très nombreuses situations administratives : demande d'APL auprès de la CAF, dossier de bourse CROUS, demande de logement social, certaines procédures de location privée, demandes d'aides sociales ou universitaires, et même parfois pour des ouvertures de compte bancaire. Ne pas avoir de déclaration à jour peut bloquer ou compliquer ces démarches qui sont essentielles pour les étudiants. Déclarer même avec des revenus nuls ou très faibles est donc une démarche utile et sans conséquence financière négative.

## Les délais et les modalités de paiement de l'impôt

Si malgré les exonérations un étudiant se retrouve avec un impôt à payer, les modalités de paiement sont flexibles. L'impôt peut être payé via l'espace particulier sur impots.gouv.fr par prélèvement bancaire, virement, ou paiement en ligne. Pour les impôts inférieurs à 300 euros, le paiement doit être effectué en une seule fois. Pour les montants supérieurs, des mensualités ou des tiers provisionnels peuvent être mis en place.

En cas de difficultés financières, l'administration fiscale peut accorder des délais de paiement ou des remises sur les pénalités. La démarche consiste à contacter le service des impôts des particuliers compétent et à expliquer la situation. Les étudiants en grande précarité financière peuvent également solliciter des remises gracieuses d'impôt — une procédure méconnue mais existante.
`;

// L3: 365 → ~+750 words
const EXT1_L3 = `
## La navigation détaillée sur impots.gouv.fr

Le site impots.gouv.fr peut sembler intimidant lors de la première visite. Voici un guide de navigation pratique pour les étudiants qui l'utilisent pour la première fois. La page d'accueil du site présente plusieurs espaces selon le profil de l'utilisateur — "Particuliers", "Professionnels", "Associations". L'espace "Particuliers" est celui à utiliser pour la déclaration de revenus d'un étudiant.

Après la connexion à l'espace particulier, le menu principal donne accès à "Déclarer mes revenus", "Consulter et payer", "Gérer mon profil", et "Gérer mes biens". Pour une déclaration annuelle, le chemin est "Déclarer mes revenus" > "Accéder à la déclaration en ligne". La déclaration est disponible en ligne à partir de la fin avril chaque année et jusqu'à la date limite (variable selon les départements, généralement entre fin mai et début juin).

## L'interface de déclaration pas à pas

L'interface de déclaration en ligne de l'administration fiscale est conçue comme un formulaire guidé. Elle se présente en plusieurs étapes : identification et situation familiale, revenus des salaires et assimilés, revenus de capitaux mobiliers, charges déductibles, réductions et crédits d'impôt, calcul et résumé. Pour un étudiant avec des revenus simples (salaire de job étudiant, éventuellement une bourse), seules les deux ou trois premières étapes nécessitent une saisie active.

La déclaration pré-remplie affiche les montants communiqués par les tiers déclarants (employeurs, banques, CAF) dans les cases correspondantes. Il faut vérifier chaque montant et le corriger si nécessaire. Une attention particulière doit être portée aux revenus de plusieurs employeurs (jobs successifs ou simultanés) qui doivent tous apparaître additionnés dans la case salaires.

## Les cases spécifiques pour les revenus exonérés

Pour bénéficier de l'exonération des revenus d'apprentissage et des jobs étudiants, les montants correspondants doivent être déclarés dans des cases spécifiques distinctes des salaires ordinaires. La déclaration ne se fait pas en omettant ces revenus, mais en les déclarant dans les bonnes cases qui appliquent automatiquement l'exonération. Remplir la mauvaise case (salaire imposable au lieu de salaire exonéré) génère une imposition injustifiée que le contribuable devra corriger ultérieurement.

Pour les apprentis, la case spécifique pour les salaires d'apprentissage exonérés est distincte de la case salaires généraux. Le montant à saisir est le total brut de la rémunération d'apprentissage sur l'année, et le système calcule automatiquement la part exonérée dans les limites légales.

## La signature électronique de la déclaration

La déclaration en ligne est "signée" électroniquement via la validation finale dans l'espace particulier. Cette validation constitue la signature légale du contribuable et engage sa responsabilité sur l'exactitude des informations déclarées. Il est donc important de relire entièrement la déclaration avant validation et de ne pas se précipiter sur le bouton de validation.

Après validation, un avis de dépôt est disponible immédiatement dans l'espace particulier. Cet avis confirme la date de dépôt et les informations principales de la déclaration. L'avis d'imposition ou de non-imposition définitif est généralement disponible dans l'espace particulier quelques semaines après la date limite de déclaration, selon le volume de traitement de l'administration.

## Les corrections et déclarations rectificatives

Si une erreur est découverte après l'envoi de la déclaration, il est possible de soumettre une déclaration rectificative via le même espace particulier, avant la date limite de rectification. La déclaration rectificative remplace entièrement la déclaration initiale pour toutes les données modifiées. Après la date limite de rectification, les corrections se font via une réclamation contentieuse adressée au service des impôts, dans un délai de prescription de deux ans à partir de la mise en recouvrement de l'impôt.
`;

// L4: 350 → ~+750 words
const EXT1_L4 = `
## Le quotient familial et son impact sur l'imposition des étudiants

Le quotient familial est un mécanisme central du calcul de l'impôt sur le revenu en France. Il consiste à diviser le revenu imposable par un nombre de "parts" qui reflète la composition du foyer fiscal, calculant l'impôt sur cette fraction, puis en multipliant par le nombre de parts. Plus le foyer a de parts, moins l'impôt par euro de revenu est élevé.

Un célibataire sans enfant dispose d'une part entière. Un couple marié ou pacsé dispose de deux parts. L'ajout d'enfants à charge ou de certaines situations particulières (invalide, veuf avec enfants) ajoute des demi-parts ou des parts supplémentaires. Pour un étudiant qui constitue son propre foyer fiscal, il dispose d'une seule part, avec une décote applicable pour les revenus faibles qui réduit encore davantage ou annule l'impôt.

## La décote : comment elle bénéficie aux étudiants à faibles revenus

La décote est un avantage fiscal qui réduit l'impôt brut pour les contribuables dont le revenu imposable est faible. Elle s'applique automatiquement lors du calcul fiscal et n'a pas besoin d'être demandée. Pour 2024, la décote est de 833 euros pour un célibataire et 1 373 euros pour un couple. Concrètement, la décote fait en sorte que des contribuables dont l'impôt brut est inférieur à ces montants voient leur impôt réduit à zéro ou très près de zéro.

Pour la grande majorité des étudiants qui ont des revenus de jobs étudiants partiellement exonérés, la combinaison de l'exonération spécifique, du barème progressif avec sa tranche à 0%, et de la décote aboutit à un impôt nul. Cette triple protection fiscale rend pratiquement toujours les revenus étudiants nets d'impôt, même lorsqu'ils sont relativement significatifs.

## Les crédits d'impôt accessibles aux étudiants

Au-delà des exonérations et déductions, le système fiscal français offre également des crédits d'impôt — des sommes directement déduites de l'impôt calculé, et parfois remboursables si elles sont supérieures à l'impôt dû. Le crédit d'impôt pour la formation professionnelle des dirigeants (non pertinent pour les étudiants), mais plus utile pour les étudiants, le crédit d'impôt pour l'emploi d'un salarié à domicile peut s'appliquer si l'étudiant emploie un soutien scolaire ou un service à la personne.

Pour les étudiants qui travaillent et font des gardes d'enfants de moins de 6 ans dans un établissement agréé, un crédit d'impôt de 50% des sommes versées est applicable. Ces situations sont moins fréquentes pour les étudiants standards mais peuvent devenir pertinentes pour les étudiants parents.

## L'optimisation de la situation fiscale du foyer familial

La décision de rattachement ou non au foyer fiscal des parents doit être prise en considérant l'ensemble de la situation familiale. Une simulation comparative des deux situations (étudiant rattaché vs foyer séparé) sur impots.gouv.fr permet de déterminer quelle option est la plus avantageuse globalement pour la famille.

En pratique, le rattachement est souvent avantageux quand les parents ont des revenus dans les tranches médianes et que l'étudiant a peu ou pas de revenus. La déclaration séparée devient avantageuse quand l'étudiant a des revenus significatifs (pouvant augmenter l'imposition des parents si rattaché) ou quand il a besoin de son propre avis de non-imposition pour des démarches en son nom propre (demande de bourse, d'APL, de logement social).

## Les avantages fiscaux des dépenses liées aux études

Certaines dépenses liées aux études peuvent générer des avantages fiscaux. Les intérêts des prêts étudiants contractés pour financer les études supérieures peuvent être déduits des revenus dans certaines conditions. Les abonnements à des revues ou bases de données professionnelles directement liés à une activité salariée ou à une formation professionnelle peuvent être déduits comme frais réels.

Pour les étudiants en double formation (études + formation professionnelle certifiante), les frais de la formation professionnelle peuvent, sous conditions, être déduits comme charges déductibles. La frontière entre dépenses personnelles non déductibles et frais professionnels déductibles nécessite souvent d'être vérifiée avec l'administration fiscale ou un conseiller.
`;

// L5: 329 → ~+750 words
const EXT1_L5 = `
## Les erreurs de saisie dans la déclaration en ligne

Les erreurs de saisie sont parmi les plus fréquentes dans les déclarations en ligne. Inverser deux chiffres dans un montant (saisir 1520 au lieu de 1250, par exemple), oublier de valider un montant corrigé, ou saisir un montant en centimes au lieu d'euros sont des erreurs classiques qui peuvent entraîner des variations importantes dans le calcul de l'impôt. La solution préventive est la relecture systématique de chaque montant saisi en le comparant avec le document source (bulletin de salaire, attestation employeur) avant la validation finale.

Une autre erreur de saisie fréquente concerne les revenus à l'étranger déclarés en devise étrangère sans conversion en euros. Tous les montants de la déclaration française doivent être en euros, avec conversion au taux de change officiel de la Banque de France pour la date de perception du revenu ou au taux moyen annuel.

## Les erreurs sur la situation familiale

La situation familiale (célibataire, marié, pacsé, avec enfants) détermine le nombre de parts fiscales et donc l'impôt. Un changement de situation au cours de l'année (mariage, PACS, séparation) modifie la déclaration et peut nécessiter une déclaration distincte pour chaque période. Déclarer une situation familiale incorrecte — notamment en oubliant de mettre fin à un rattachement au foyer parental lors d'un mariage ou d'une mise en ménage — génère un calcul d'impôt incorrect.

Pour les étudiants en couple non marié ni pacsé, chacun déclare ses revenus séparément dans son propre foyer fiscal. La vie en couple ne crée pas automatiquement un foyer fiscal commun — seul le mariage ou le PACS crée une obligation de déclaration commune (avec la possibilité d'opter pour une imposition séparée pendant l'année du mariage ou du PACS).

## Les erreurs sur les charges déductibles

Les charges déductibles qui peuvent être mentionnées dans la déclaration (pensions alimentaires versées, frais de garde d'enfants, charges de copropriété pour les propriétaires) doivent être justifiables et correspondre à des paiements réels. Surestimer ces charges, inclure des charges non déductibles, ou inclure deux fois la même charge (une fois en frais réels sur les salaires et une fois en charges déductibles) sont des erreurs qui peuvent entraîner un redressement fiscal.

Pour les frais réels (alternative à la déduction forfaitaire de 10%), la déduction nécessite de renoncer à la déduction automatique de 10% et de justifier l'intégralité des frais déclarés avec des justificatifs conservés (factures, tickets de transport, etc.). Cette option n'est avantageuse que si les frais réels réels dépassent 10% du salaire brut — ce qui est rarement le cas pour les étudiants dont les frais professionnels sont limités.

## La gestion d'un contrôle fiscal

La plupart des étudiants n'auront jamais de contrôle fiscal, mais c'est utile de savoir comment cela se passe si cela arrive. Un contrôle fiscal peut prendre la forme d'une simple demande de renseignement (lettre demandant des justificatifs pour un poste spécifique de la déclaration) ou d'un examen plus approfondi. La réponse à une demande de renseignement doit être faite dans le délai indiqué dans la lettre de l'administration.

En cas de contrôle, conserver tous les justificatifs des revenus et charges déclarés est indispensable. Les justificatifs doivent être conservés pendant le délai de prescription fiscale (3 ans après l'année d'imposition pour les erreurs ordinaires, 10 ans en cas de fraude). Pour les étudiants, les bulletins de salaire, les attestations d'employeur, et les relevés annuels de revenus de l'assurance chômage constituent les principaux justificatifs à conserver.

## La solidarité fiscale dans un foyer commun

Pour les étudiants mariés ou pacsés, la solidarité fiscale signifie que chaque membre du couple est responsable solidairement de l'impôt du foyer fiscal. Si l'un des conjoints ne paie pas sa part d'impôt, l'administration peut réclamer la totalité à l'autre. Cette solidarité ne s'applique pas aux concubins qui ont des foyers fiscaux distincts.

En cas de séparation en cours d'année, il est possible de demander une imposition séparée pour l'année de la séparation, ce qui peut générer deux avis d'imposition distincts. Cette démarche est importante pour que chacun puisse gérer sa situation fiscale de façon indépendante après la séparation.
`;

// L6: 367 → ~+750 words
const EXT1_L6 = `
## Le régime fiscal de l'apprentissage : détails et exemples

L'apprentissage est un contrat de formation en alternance qui combine des périodes de formation en centre de formation d'apprentis (CFA) et des périodes de travail en entreprise. La rémunération de l'apprenti est fixée selon un pourcentage du SMIC qui varie selon l'âge et l'année du contrat.

Pour illustrer l'exonération fiscale : un apprenti en 1ère année de BTS à 20 ans reçoit environ 53% du SMIC, soit environ 894 euros bruts mensuels en 2024, soit 10 728 euros annuels. Ce montant est bien inférieur au plafond d'exonération (environ 20 815 euros correspondant au SMIC annuel 2024), donc l'intégralité de sa rémunération d'apprentissage est exonérée d'impôt. Même un apprenti de Master 2 avec une rémunération plus élevée (parfois 80-90% du SMIC selon l'accord de branche) reste généralement sous le plafond d'exonération.

## Les règles spécifiques aux stagiaires en convention de stage

La gratification de stage en France est obligatoire pour les stages d'une durée supérieure à 2 mois consécutifs dans une même entreprise durant l'année scolaire ou universitaire. Son montant minimal est de 15% du plafond horaire de la sécurité sociale, soit environ 4,05 euros de l'heure en 2024.

Pour la fiscalité : une gratification de stage de 4,05 euros/heure pour 35 heures hebdomadaires correspond à environ 141 euros par semaine ou 612 euros par mois. Sur 6 mois de stage, cela représente environ 3 672 euros de gratification totale. Ce montant est généralement entièrement exonéré d'impôt car il reste bien en dessous du seuil d'exonération. Pour les stages dans de grandes entreprises qui offrent des gratifications supérieures au minimum légal (certains cabinets de conseil ou banques d'investissement peuvent offrir des gratifications de 2 000 à 3 000 euros par mois pour des stages de fin d'études), le calcul de la part imposable doit être effectué soigneusement.

## Les jobs étudiants déclarés et non déclarés : risques et réalité

Il est important de comprendre que tout travail rémunéré doit être déclaré à l'administration fiscale, même s'il est exonéré d'impôt. Les travaux non déclarés (travail au noir) présentent des risques importants pour l'étudiant : pas de protection sociale en cas d'accident du travail, pas de validation de droits à la retraite, risques de redressement fiscal et social si découverts.

Le régime des particuliers employeurs simplifie la déclaration pour les petits jobs de services à la personne (baby-sitting, aide aux personnes âgées, soutien scolaire). Via le service Cesu (Chèque emploi service universel), l'employeur particulier peut déclarer facilement la rémunération et les cotisations sociales. Pour l'étudiant employé, un bulletin de salaire officiel est généré qui facilite la déclaration fiscale.

## La cumulation des statuts : étudiant-entrepreneur ou auto-entrepreneur

De nombreux étudiants combinent leurs études avec une activité entrepreneuriale en tant qu'auto-entrepreneur ou micro-entrepreneur. Ce statut simplifié permet d'exercer une activité commerciale ou de prestation de services avec des obligations comptables et fiscales allégées. Les revenus de l'auto-entreprise sont soumis à l'impôt sur le revenu selon le régime des bénéfices industriels et commerciaux (BIC) ou des bénéfices non commerciaux (BNC), après un abattement forfaitaire.

Pour un auto-entrepreneur étudiant, la gestion fiscale est plus complexe car elle combine la déclaration des revenus salariaux éventuels, la déclaration des revenus d'auto-entreprise, et la vérification des seuils d'exonération spécifiques à chaque catégorie. Une consultation auprès d'un conseiller CCI ou d'une association de soutien aux auto-entrepreneurs est recommandée pour la première déclaration cumulative.

## L'accès au crédit d'impôt pour frais de garde et autres avantages pour les étudiants-parents

Les étudiants qui sont aussi parents d'enfants en bas âge peuvent bénéficier de crédits d'impôt qui réduisent directement leur impôt calculé. Le crédit d'impôt pour frais de garde d'enfants de moins de 6 ans dans un établissement agréé (crèche, assistante maternelle agréée) est de 50% des frais effectivement supportés dans la limite de 3 500 euros par enfant — soit un crédit maximum de 1 750 euros par enfant par an. Ce crédit est remboursable, ce qui signifie que même si l'impôt calculé est nul, le crédit est versé sous forme de remboursement par l'administration fiscale. Pour les étudiants-parents avec des revenus très faibles, ce mécanisme peut représenter une aide financière directe et significative.
`;

await appendAndPatch('55c0efdd-5e48-46e0-bdd1-f6223e3ba8e2', EXT1_L1);
await appendAndPatch('449fb117-48e3-45da-89af-7a75c6212c80', EXT1_L2);
await appendAndPatch('0242d07b-a407-4d13-9a58-3abfb2aa6728', EXT1_L3);
await appendAndPatch('a824e932-2924-4061-9a58-af1834373a0f', EXT1_L4);
await appendAndPatch('22b05575-9363-4fd1-bdef-96e12749c592', EXT1_L5);
await appendAndPatch('3defd352-b13a-4f5d-97cc-2d4f35e289f6', EXT1_L6);
