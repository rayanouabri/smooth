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
## Le contrôle fiscal : comprendre ses droits lors d'une vérification

Le contrôle fiscal est une procédure par laquelle l'administration vérifie l'exactitude des déclarations d'un contribuable. Il existe deux formes principales de contrôle : l'examen de situation personnelle d'ensemble (ESFE), qui examine la cohérence globale des revenus déclarés avec le train de vie observé, et la vérification de comptabilité pour les entreprises et professionnels. Pour les particuliers, le contrôle prend généralement la forme d'une demande de renseignements par courrier.

Recevoir une demande de renseignements de l'administration fiscale ne signifie pas nécessairement être soupçonné de fraude — cela peut simplement indiquer qu'une incohérence mineure a été détectée dans la déclaration. La réponse adaptée est de prendre la demande au sérieux, de rassembler les documents justificatifs demandés, et de répondre dans le délai fixé. Une réponse claire et documentée clôt généralement ce type de procédure sans suite.

En cas de contrôle fiscal approfondi, le contribuable bénéficie de garanties importantes. Il peut se faire assister par un conseil (avocat fiscaliste, expert-comptable) lors de ses entretiens avec l'administration. Il peut refuser une proposition de rectification et opposer ses arguments dans un délai de trente jours. En cas de désaccord persistant, il peut saisir la Commission Départementale des Impôts Directs et des Taxes sur le Chiffre d'Affaires (CDIDTCA) dont les avis, bien que consultatifs, ont une influence réelle sur les décisions de l'administration.

## Les limites des droits de reprise de l'administration

Le droit de reprise est la faculté pour l'administration fiscale de rectifier les impôts non payés ou sous-payés en remontant dans le passé. Ce droit est limité dans le temps pour garantir la sécurité juridique des contribuables. En règle générale, l'administration ne peut remettre en cause les déclarations de revenus que dans un délai de trois ans à compter de l'année d'imposition.

Ce délai général de reprise de trois ans s'étend à dix ans en cas de fraude fiscale ou d'activités illicites — il est activé par la découverte d'une omission ou insuffisance ayant le caractère d'une manœuvre frauduleuse. La prudence légale est donc de conserver ses documents fiscaux au minimum dix ans pour se prémunir contre un droit de reprise étendu dans les cas extrêmes. En pratique, pour les contribuables de bonne foi, le délai de trois ans est celui qui couvre la grande majorité des situations.

## L'impact fiscal des événements de vie majeurs

Les événements de vie — mariage, PACS, naissance, séparation, décès d'un conjoint — ont des conséquences fiscales directes qui se reflètent dans l'avis d'imposition de l'année concernée. Le mariage et le PACS entraînent en principe l'imposition commune du foyer à partir de l'année du mariage — ou de l'année suivante si les partenaires en font la demande. La séparation ou le divorce entraîne la fin de l'imposition commune et la déclaration séparée des revenus à partir de l'année de séparation.

La naissance d'un enfant augmente le nombre de parts du foyer fiscal (demi-part par enfant pour les deux premiers), ce qui réduit l'impôt. Cette réduction d'impôt n'est pas automatiquement visible sur l'avis de l'année de naissance si l'enfant est né après le 1er janvier — elle s'applique pleinement à partir de l'avis de l'année suivante. Déclarer la naissance sur sa déclaration de revenus (modification de la situation de famille) est la démarche nécessaire pour que l'administration prenne en compte ce changement.
`;

const EXT3_L2 = `
## La taxe foncière et son articulation avec l'avis d'imposition

L'avis d'imposition sur le revenu est le document fiscal le plus connu, mais ce n'est pas le seul avis émis par l'administration fiscale. La taxe foncière, due par les propriétaires de biens immobiliers, fait l'objet d'un avis distinct émis à l'automne (généralement en octobre). La taxe foncière est calculée sur la base de la valeur locative cadastrale du bien, qui représente le loyer théorique annuel que le bien produirait s'il était loué.

Pour les étudiants propriétaires (cas rare mais possible notamment via un héritage ou un achat avec l'aide des parents), la taxe foncière est une charge à anticiper dans le budget annuel. Pour les étudiants locataires, la taxe foncière n'est pas à leur charge — c'est le propriétaire du bien loué qui la paie. Cependant, dans les faits économiques, le propriétaire peut l'avoir intégré dans le montant du loyer qu'il demande — ce qui explique en partie que les loyers soient plus élevés dans les zones où la taxe foncière est forte.

## La taxe d'habitation résiduelle et son évolution

La taxe d'habitation sur les résidences principales a été supprimée progressivement entre 2020 et 2023. Depuis janvier 2023, aucun foyer en France ne paie de taxe d'habitation sur sa résidence principale. Cette réforme majeure représente une économie significative pour des millions de foyers, notamment les ménages modestes qui étaient proportionnellement les plus touchés.

La taxe d'habitation subsiste uniquement pour les résidences secondaires (logements que l'on possède sans y habiter à titre principal). Si un étudiant possède et occupe un logement considéré comme résidence secondaire (par exemple, il est officiellement domicilié chez ses parents mais possède un appartement qu'il occupe sans en faire sa résidence principale), la taxe d'habitation sur résidences secondaires peut s'appliquer. Dans les zones tendues (grandes agglomérations avec pénurie de logements), cette taxe a de plus été majorée pour inciter la mise sur le marché des logements vacants.

## Le rôle de la taxe foncière dans le financement des collectivités

Comprendre la finalité fiscale des impôts locaux aide à les percevoir différemment que comme de simples charges. La taxe foncière est l'une des principales ressources fiscales des communes et des départements. Elle finance les services publics locaux : écoles, voirie, équipements culturels et sportifs, services sociaux, eau et assainissement. Le taux de taxe foncière applicable sur un bien donné est la somme des taux votés par la commune, l'EPCI (communauté de communes ou d'agglomération) et le département.

Ces taux peuvent varier considérablement d'une commune à l'autre en fonction des politiques fiscales locales et du niveau de services offerts. Certaines communes touristiques ou à forte activité économique ont des taux bas en raison d'autres ressources importantes ; des communes rurales avec moins de ressources alternatives peuvent avoir des taux plus élevés. Cette variation géographique explique pourquoi le même bien immobilier peut être soumis à des taxes foncières très différentes selon sa localisation.

## Comprendre l'avis d'imposition dans le contexte de l'éducation fiscale citoyenne

L'éducation fiscale est un enjeu civique important souvent négligé dans les cursus scolaires français. Comprendre comment les impôts sont calculés, collectés et utilisés est une compétence citoyenne fondamentale qui permet de participer de manière éclairée aux débats démocratiques sur les politiques fiscales. L'avis d'imposition est l'un des rares documents officiels qui rend visibles, dans un format personnel, les mécanismes fiscaux abstraits.

La progression du barème, par exemple, devient concrète quand on voit sur son propre avis d'imposition comment chaque tranche de revenus est imposée à un taux different. Le mécanisme du quotient familial devient tangible quand on compare son impôt avec celui d'un collègue en situation familiale différente. Ces illustrations personnelles enrichissent la compréhension des enjeux fiscaux collectifs et permettent de former des opinions informées sur des questions comme la progressivité de l'impôt, les niches fiscales ou la redistribution sociale.

## Les ressources officielles pour s'informer sur la fiscalité française

L'administration fiscale française met à disposition un ensemble de ressources documentaires pour accompagner les contribuables dans leur compréhension des règles fiscales. Le site impots.gouv.fr propose une rubrique documentation avec des fiches pratiques sur les principales situations fiscales. La documentation de base (BOFiP — Bulletin Officiel des Finances Publiques) est accessible en ligne et représente la référence officielle des règles fiscales applicables.

Pour les questions complexes ou les situations spécifiques (expatriation, double imposition, revenus atypiques), des consultants fiscaux indépendants ou des avocats fiscalistes peuvent être consultés. Des associations comme l'AFPA (Association Française des Praticiens Assistants) offrent parfois des consultations gratuites pour les particuliers en difficulté. Les chambres de commerce et d'industrie (CCI) organisent régulièrement des ateliers fiscaux gratuits ou peu coûteux pour les travailleurs indépendants et les étudiants-entrepreneurs.
`;

const EXT3_L3 = `
## Le numero fiscal : sa signification et sa protection

Le numéro fiscal (ou numéro d'identification fiscale, NIF) est un identifiant à 13 chiffres attribué à chaque contribuable en France. Il figure sur tous les documents fiscaux officiels — déclarations, avis d'imposition, avis de taxe foncière — et est nécessaire pour accéder à l'espace particulier impots.gouv.fr. Ce numéro est attribué une fois pour toutes et ne change pas, même en cas de déménagement, de changement de nom ou de changement de situation familiale.

Le numéro fiscal est une donnée personnelle sensible. Son utilisation non autorisée peut permettre à un fraudeur de se faire passer pour vous auprès de l'administration fiscale ou d'accéder à des informations fiscales confidentielles. Ne le communiquer qu'à des organismes légitimes qui en ont réellement besoin (administration fiscale, CAF, organismes bancaires en procédure d'ouverture de compte) est une précaution élémentaire de protection de l'identité fiscale.

En cas de perte du numéro fiscal, il peut être retrouvé sur tout document fiscal conservé, sur le courrier d'accueil à l'espace en ligne, ou obtenu en se rendant au centre des finances publiques avec une pièce d'identité. L'administration peut également envoyer le numéro fiscal par courrier à l'adresse du domicile déclaré.

## L'espace particulier d'impots.gouv.fr : navigation pas à pas

Pour un utilisateur qui accède à l'espace particulier pour la première fois, la navigation peut sembler complexe. La page d'accueil affiche les principales actions disponibles : consulter les documents fiscaux, effectuer une déclaration, payer un impôt, ou contacter l'administration. La section « Documents » ou « Consulter mes documents fiscaux » donne accès à tous les avis d'imposition disponibles pour les années précédentes.

Pour télécharger un avis d'imposition, il suffit de cliquer sur l'année souhaitée dans la liste des documents disponibles. Le document s'ouvre au format PDF dans le navigateur ou est téléchargé directement — selon les réglages du navigateur. La vérification de l'authenticité du document (via le QR code ou le numéro de référence) peut être effectuée depuis cette même interface en cliquant sur « Vérifier l'authenticité de ce document ».

La messagerie sécurisée (accessible depuis la section « Nous contacter ») permet d'envoyer des messages à l'administration fiscale et de recevoir des réponses directement dans l'espace particulier. Chaque échange est archivé et daté, créant un historique de correspondance utilisable en cas de litige. L'utilisation systématique de cette messagerie plutôt que du courrier postal ou du téléphone est recommandée pour sa traçabilité.

## Obtenir une attestation fiscale ou un certificat de résidence fiscale

Au-delà de l'avis d'imposition standard, l'administration fiscale peut délivrer d'autres attestations utiles dans certaines démarches spécifiques. L'attestation de résidence fiscale est un document officiel qui certifie que le contribuable est bien résident fiscal en France. Ce document est demandé par certains pays tiers pour appliquer les conventions fiscales bilatérales — il permet au contribuable d'obtenir des exonérations ou des réductions d'impôt dans l'autre pays.

La demande d'attestation de résidence fiscale se fait auprès du service des impôts en remplissant l'imprimé 5000 (pour les personnes physiques). Ce formulaire est disponible en téléchargement sur impots.gouv.fr ou dans les centres des finances publiques. Le délai de traitement est généralement de deux à quatre semaines. Pour les étudiants qui travaillent à distance pour un employeur étranger, cette attestation peut être nécessaire pour que l'employeur ne prévelle pas d'impôts à l'étranger — puisque l'imposition revient à la France en tant que pays de résidence.

## La procédure de première immatriculation fiscale

Pour une personne qui n'a jamais eu de contact avec l'administration fiscale française (primo-arrivant sans numéro fiscal, jeune adulte qui se rattache pour la première fois), la première immatriculation fiscale est la démarche initiale. Elle permet d'obtenir un numéro fiscal personnel, d'ouvrir un espace particulier sur impots.gouv.fr, et de commencer à déclarer ses revenus.

Pour les étrangers récemment arrivés en France, la première immatriculation se fait généralement au Centre des Finances Publiques (CFP) dont dépend le lieu de résidence. Il faut se présenter avec une pièce d'identité valide, un justificatif de résidence en France (contrat de location, facture d'eau ou d'électricité, attestation de l'hébergeur), et si disponible, le titre de séjour. L'agent des impôts crée le compte fiscal et remet sur place ou envoie par courrier le numéro fiscal et les codes d'accès à l'espace en ligne.

## Les avis d'imposition pour les revenus des années passées

Il peut arriver qu'une personne ait besoin d'accéder à des avis d'imposition d'années antérieures — pour une demande de prêt immobilier qui remonte loin, pour une procédure judiciaire, ou pour d'autres démarches officielles. L'espace particulier d'impots.gouv.fr conserve généralement les avis des dix dernières années, permettant de les télécharger à tout moment. Pour des avis encore plus anciens, une demande écrite auprès du Centre des Finances Publiques de référence peut permettre d'obtenir des copies officielles.

La demande de copie d'avis d'imposition anciens est en général satisfaite dans un délai de deux à quatre semaines. Pour les avis très anciens (plus de dix ans), les archives fiscales physiques des centres des finances publiques peuvent être consultées sur demande spéciale. Dans des cas particuliers (procédures successorales, litiges fiscaux anciens), un avocat fiscaliste peut accompagner la démarche pour accéder aux archives fiscales nécessaires.
`;

const EXT3_L4 = `
## L'impact fiscal de la validation des études à l'étranger

Pour les étudiants étrangers qui effectuent une partie de leurs études en France avant de repartir continuer leur formation dans leur pays d'origine ou dans un pays tiers, la période de résidence fiscale française crée des obligations déclaratives qui subsistent parfois après le départ. Si l'étudiant quitte la France au cours d'une année civile, il reste résident fiscal français jusqu'à la date effective de son départ, et ses revenus perçus pendant cette période sont à déclarer en France.

La déclaration de revenus pour une année de départ doit mentionner explicitement la date du départ et distinguer les revenus perçus en France avant le départ des revenus perçus à l'étranger après le départ. L'administration fiscale dispose d'un formulaire spécifique pour les personnes qui ont changé leur résidence fiscale en cours d'année. Ne pas effectuer cette déclaration de sortie est une omission qui peut conduire l'administration à continuer de considérer le contribuable comme résident fiscal français les années suivantes, avec toutes les obligations déclaratives que cela implique.

## Les obligations déclaratives pour les revenus de stages en entreprise

Les stages en entreprise occupent une place croissante dans les cursus des étudiants français et étrangers. Le traitement fiscal des indemnités de stage dépend de leur montant et de la nature du stage. Pour les stages de courte durée (gratification de stage), une exonération s'applique jusqu'à un certain seuil correspondant à 15% du minimum garanti multiplié par le nombre de mois de stage. Au-delà de ce seuil, la partie excédentaire est imposable en tant que revenu du travail.

Pour les stages de longue durée (6 mois) avec des gratifications substantielles, il est possible que la partie imposable soit significative. La déclaration de ces revenus dans la case « traitements et salaires » de la déclaration annuelle est la procédure standard. L'entreprise qui accueille le stagiaire est tenue de lui remettre en début d'année suivante une attestation avec le montant de la gratification versée — ce document sert de base pour la déclaration et évite les erreurs de montant.

## Les implications fiscales du statut d'étudiant entrepreneur

Le statut national d'étudiant-entrepreneur (SNEE), délivré par les PEPITE (Pôles Étudiants Pour l'Innovation, le Transfert et l'Entrepreneuriat), est un statut hybride qui permet à l'étudiant de bénéficier du statut étudiant tout en développant un projet entrepreneurial. Ce statut n'a pas en lui-même d'implications fiscales directes — la fiscalité dépend du régime juridique choisi pour l'activité (micro-entreprise, société, etc.).

Pour l'étudiant-entrepreneur qui crée une micro-entreprise, les revenus générés sont imposables dans la catégorie BIC (bénéfices industriels et commerciaux) ou BNC (bénéfices non commerciaux) selon la nature de l'activité. Ces revenus s'additionnent aux revenus de toutes sources du foyer fiscal pour déterminer l'impôt dû. L'un des avantages du régime micro est la simplicité déclarative — il suffit de reporter le chiffre d'affaires annuel dans la déclaration de revenus, avec un abattement forfaitaire automatique de 50% (BIC) ou 34% (BNC).

## Les aides fiscales pour l'installation en France des talents étrangers

La France dispose de régimes fiscaux favorables pour attirer certaines catégories de talents étrangers. Le régime des impatriés (article 155 B du CGI) offre une exonération partielle d'impôt sur le revenu pendant cinq ans aux personnes qui s'installent en France pour y exercer une activité professionnelle, sous réserve qu'elles n'aient pas été résidentes fiscales françaises au cours des cinq années précédentes.

Ce régime, principalement conçu pour les cadres et professionnels de haut niveau, peut s'appliquer dans certains cas aux chercheurs et doctorants étrangers qui viennent en France dans le cadre d'un contrat de recherche. L'exonération porte sur 30% du revenu net provenant d'une source étrangère et sur les suppléments de rémunération liés à l'expatriation. La complexité de ce régime nécessite généralement l'accompagnement d'un conseiller fiscal pour en optimiser les bénéfices.

## La préparation à la fin du séjour en France : clôture fiscale

Lorsqu'un étudiant étranger termine ses études en France et prévoit de repartir dans son pays d'origine, la gestion de la clôture de sa situation fiscale française est une étape importante. Plusieurs actions concrètes permettent une sortie propre du système fiscal français : déclarer ses revenus de l'année de départ (déclaration partielle de l'année), informer l'administration fiscale de son changement d'adresse et de résidence, clôturer ou mettre en sommeil son compte micro-entrepreneur le cas échéant, et s'assurer que tous les impôts éventuellement dus sont réglés avant le départ.

Une situation fiscale non réglée au moment du départ (impôts impayés, déclarations non déposées) peut créer des complications en cas de retour en France dans le futur — par exemple, pour un emploi salarié ou dans le cadre d'une nouvelle période d'études. L'administration fiscale française mémorise ces irrégularités et peut les opposer lors d'une nouvelle demande de titre de séjour ou d'un premier emploi. Clôturer sa situation fiscale proprement avant le départ est donc un investissement dans la réputation administrative pour d'éventuelles interactions futures avec la France.
`;

const EXT3_L5 = `
## Les procédures de réclamation collectives et les associations de contribuables

Les contribuables qui estiment avoir subi un traitement fiscal injuste ou irrégulier ne sont pas nécessairement seuls dans leurs démarches. Des associations de contribuables existent en France pour défendre les intérêts de leurs membres face à l'administration fiscale. Ces associations — comme Contribuables Associés, la Fédération des Conseils des Parents d'Élèves, ou des associations locales de défense des contribuables — peuvent apporter un soutien moral, une expertise juridique mutualisée, et parfois un accompagnement dans des procédures de réclamation.

La force collective peut s'exprimer notamment dans les cas où une décision administrative affecte de nombreux contribuables de la même façon — par exemple, une modification de l'interprétation d'une règle fiscale par une Direction Régionale qui désavantage systématiquement une catégorie de contribuables. Dans ces cas, une réclamation collective organisée par une association peut obtenir une révision de position de l'administration plus facilement qu'une multitude de réclamations individuelles isolées.

## L'utilisation de l'avis d'imposition dans les procédures judiciaires

L'avis d'imposition peut être produit comme pièce probatoire dans diverses procédures judiciaires. Dans les procédures de divorce ou de séparation, il sert à évaluer les revenus respectifs des époux pour déterminer les pensions alimentaires et les contributions aux charges du foyer. Dans les procédures de succession, les avis d'imposition des années précédant le décès peuvent être utilisés pour reconstituer le patrimoine du défunt.

Dans les litiges sociaux (prud'hommes, litiges avec des organismes sociaux), l'avis d'imposition peut confirmer les revenus déclarés et les charges sociales effectivement payées. Pour les litiges avec la CAF concernant le montant des prestations, l'avis d'imposition est la pièce centrale qui permet de vérifier que les revenus pris en compte pour le calcul des allocations étaient bien exacts.

Les avocats utilisent régulièrement les avis d'imposition comme pièces dans leurs dossiers. Pour les justiciables qui anticipent un litige dans lequel leurs revenus seront en question, conserver soigneusement l'ensemble de ses avis d'imposition des années concernées est une précaution pratique fondamentale.

## La digitalisation et l'avenir de la relation fiscale

La transformation numérique de l'administration fiscale française a déjà profondément changé la relation entre les contribuables et le fisc. Les évolutions en cours pointent vers une déclaration encore plus automatisée : la pré-déclaration déjà remplie avec les données connues de l'administration va vers une déclaration entièrement automatique pour les foyers avec des situations simples. Certains pays (Suède, Danemark, notamment) ont déjà implementé cette déclaration automatique pour la majorité des contribuables.

Si cette évolution se concrétise en France, l'avis d'imposition restera mais la procédure pour l'obtenir sera encore plus fluide. La relation du contribuable avec ce document pourrait évoluer : moins de complexité dans la production de l'avis, mais une vigilance accrue nécessaire pour vérifier que les données préremplies sont correctes. La culture de la vérification fiscale personnelle — lire son avis et comprendre ce qu'il contient — restera une compétence précieuse même dans un monde de déclarations automatisées.

## Les erreurs les plus fréquentes dans les déclarations d'étudiants

Une analyse des erreurs les plus fréquentes dans les déclarations de revenus des étudiants permet d'identifier les points de vigilance les plus importants. L'oubli de déclarer les revenus de stage (gratification excédant le seuil exonéré) est une erreur courante, souvent par méconnaissance du seuil ou de la nécessité de déclaration. Les revenus de jobs étudiants via des plateformes numériques (Deliveroo, Uber Eats, services de livraison) sont de plus en plus fréquents et doivent être déclarés en tant que revenus d'activité.

L'oubli de demander le rattachement au foyer parental ou au contraire l'oubli de demander un détachement au moment optimal constituent d'autres erreurs fréquentes. Ces choix ont des conséquences importantes sur l'impôt total du foyer familial et doivent être évalués chaque année en fonction des revenus respectifs. Un simulateur fiscal en ligne permet d'estimer l'impact de chaque option avant de finaliser la déclaration.
`;

const EXT3_L6 = `
## Le prélèvement à la source pour les bénéficiaires de pensions et allocations

Au-delà des salaires, le prélèvement à la source s'applique également à d'autres catégories de revenus. Les pensions de retraite sont soumises au PAS, prélevé par les caisses de retraite. Les allocations chômage versées par France Travail sont soumises au PAS depuis 2020, ce qui a modifié la dynamique de trésorerie pour les demandeurs d'emploi. Les rentes viagères à titre onéreux et certaines prestations compensatoires sont également incluses dans le champ du PAS.

Pour les étudiants qui percevront ces types de revenus dans leur vie professionnelle, comprendre dès maintenant que le PAS s'applique à une gamme large de revenus et non seulement aux salaires classiques est une connaissance anticipatoire utile. La gestion financière personnelle à travers différentes situations de vie — emploi, chômage, reconversion, retraite — sera facilitée par cette connaissance de base du système de collecte de l'impôt.

## Les dispositifs d'épargne salariale et leur traitement par le PAS

L'épargne salariale — participation aux bénéfices de l'entreprise, intéressement, plans d'épargne entreprise (PEE) — bénéficie de régimes fiscaux additionnels, notamment l'exonération d'impôt sur le revenu lors du versement (dans certaines limites). Le PAS ne s'applique donc pas sur ces sommes au moment de leur versement. En revanche, les revenus tirés des placements dans les plans d'épargne salariale (intérêts, plus-values) peuvent être soumis au PAS ou à un prélèvement forfaitaire selon les conditions de sortie du plan.

Pour les étudiants en alternance ou en contrat professionnalisant dans des entreprises qui proposent des dispositifs d'épargne salariale, il est utile de comprendre ces mécanismes dès leur mise en place. L'abondement de l'employeur (contribution supplémentaire au plan d'épargne de l'employeur) est exonéré d'impôt dans certaines limites — une opportunité d'épargne à saisir dans les premières années de vie professionnelle.

## La modulation du prélèvement à la source en pratique

La modulation du taux de PAS peut être demandée à tout moment de l'année, avec une prise d'effet dans les deux mois suivant la demande. Cette modulation peut être à la hausse (si les revenus ont augmenté) ou à la baisse (si les revenus ont diminué). La demande se fait entièrement en ligne via l'espace particulier d'impots.gouv.fr dans la section « Gérer mon prélèvement à la source ».

Pour moduler à la baisse et réduire les prélèvements mensuels, l'administration impose une condition de prudence : la modulation n'est possible que si la différence entre les prélèvements sans modulation et ceux avec modulation dépasse 10% du montant total prévu. Cette condition évite les modulations excessives qui conduiraient à une régularisation significative en fin d'année. Un outil de simulation disponible dans la section dédiée du site permet de calculer si la modulation est possible et de quel montant elle peut être.

## La communication avec l'administration fiscale : bonnes pratiques

La communication avec l'administration fiscale, qu'il s'agisse de demandes d'informations simples ou de réclamations formelles, gagne à respecter certaines pratiques qui facilitent le traitement. La concision et la précision sont appréciées — un message qui indique clairement ce qui est demandé, les références du dossier (numéro fiscal, année d'imposition, numéro de l'avis concerné) et les actions souhaitées sera traité plus rapidement qu'un long texte sans structure.

La patience est également nécessaire — les délais de réponse de l'administration fiscale peuvent varier de quelques jours à plusieurs semaines selon la nature de la demande et la période (les mois de mai à septembre, correspondant à la campagne déclarative, sont les plus chargés). La messagerie sécurisée de l'espace particulier donne une preuve de la date d'envoi du message, ce qui est important pour le respect des délais en cas de réclamation formelle.

En cas d'erreur manifeste que le contribuable a lui-même commise, reconnaître l'erreur et demander une régularisation volontaire est généralement accueilli favorablement par l'administration. Les pénalités pour les contribuables de bonne foi qui régularisent spontanément leur situation sont moins sévères que celles appliquées à la suite d'un contrôle fiscal qui découvre l'irrégularité. La transparence et la proactivité dans la relation avec l'administration fiscale sont les meilleurs atouts d'un contribuable qui souhaite gérer sereinement sa situation fiscale.
`;

await appendAndPatch('9e2a16ea-0c1b-4df3-a8f6-fb3dac6f425b', EXT3_L1);
await appendAndPatch('19527171-0a94-4ba5-b58e-a15de77a8adc', EXT3_L2);
await appendAndPatch('a2da7151-913a-4f41-8285-7ee916b68cb9', EXT3_L3);
await appendAndPatch('646d10ae-5597-4b58-928c-f22fc29ce5fb', EXT3_L4);
await appendAndPatch('838acbd1-bcda-4d75-81e0-b822158a6439', EXT3_L5);
await appendAndPatch('a7eb44c9-883f-4305-9041-97be5222b583', EXT3_L6);
