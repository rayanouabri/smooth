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

const EXT5_L1 = `
## Le rôle des experts-comptables et avocats fiscalistes

Pour les situations fiscales complexes, le recours à des professionnels spécialisés est un investissement judicieux. Les experts-comptables, bien que principalement associés à la comptabilité d'entreprise, peuvent également accompagner les particuliers dans leurs déclarations de revenus complexes. Leur expertise couvre les situations avec revenus multiples, les situations d'expatriation, les successions avec implications fiscales importantes, et les optimisations légales soumises à des conditions précises.

Les avocats fiscalistes interviennent davantage en aval, dans les situations de litige avec l'administration fiscale, de contrôle fiscal approfondi, ou de montages fiscaux complexes qui nécessitent une sécurisation juridique. Pour un étudiant ou un jeune actif dont la situation fiscale reste simple, ces professionnels ne sont pas nécessaires au quotidien — mais identifier à l'avance à qui s'adresser en cas de besoin est une prudence utile. Les barreaux régionaux publient des annuaires d'avocats fiscalistes, et les chambres régionales des experts-comptables disposent d'un service d'orientation vers des professionnels locaux.

## Les conséquences fiscales des successions pour les étudiants

La succession est un événement fiscal majeur souvent imprévu qui peut créer des obligations administratives et financières importantes pour les héritiers. En France, les héritages sont soumis à des droits de succession calculés sur la valeur des biens transmis, avec des abattements et des taux variables selon le degré de parenté entre le défunt et l'héritier. Les enfants bénéficient d'un abattement de 100 000 euros par parent, ce qui signifie que les transmissions modestes peuvent ne pas être imposables.

Pour les étudiants qui héritent d'un bien immobilier (appartement, maison), les implications fiscales ne s'arrêtent pas aux droits de succession. Si le bien est mis en location, il génère des revenus fonciers imposables à déclarer. Si le bien est vendu, une plus-value immobilière peut être imposable selon les règles de la fiscalité des plus-values (avec exonération totale pour la résidence principale et exonération progressive après 22 ans de détention pour les autres biens). La gestion d'un bien immobilier hérité nécessite une compréhension des règles fiscales applicables ou l'accompagnement d'un professionnel.

## Les aides à la déclaration pour les personnes handicapées

Les personnes en situation de handicap bénéficient de plusieurs dispositifs fiscaux spécifiques qui apparaissent sur leur avis d'imposition. La carte d'invalidité ou la carte de priorité peut donner droit à une demi-part supplémentaire dans le calcul du quotient familial, ce qui réduit l'impôt. Certaines pensions d'invalidité versées par la Sécurité Sociale bénéficient d'une exonération partielle ou totale d'impôt sur le revenu.

Pour les étudiants en situation de handicap qui perçoivent des allocations spécifiques (AAH - Allocation aux Adultes Handicapés, pension d'invalidité), la déclaration de ces revenus nécessite une vérification précise de leur traitement fiscal. L'AAH est exonérée d'impôt sur le revenu et ne doit pas être déclarée dans la déclaration de revenus. Une déclaration par erreur de l'AAH comme revenu imposable entraînerait une surimposition injustifiée qui justifie une réclamation.

## Les aménagements fiscaux pour la mobilité internationale étudiante

Les programmes d'échanges internationaux comme Erasmus+ créent des situations de mobilité fiscale qui nécessitent des ajustements dans les déclarations de revenus. Un étudiant en France qui passe un semestre à l'étranger dans le cadre d'Erasmus reste en principe résident fiscal français pour l'ensemble de l'année si son domicile principal reste en France. Les bourses Erasmus+ sont exonérées d'impôt en France — elles ne doivent pas être déclarées et ne sont pas intégrées dans le revenu fiscal de référence.

Pour les étudiants étrangers qui effectuent un séjour Erasmus en France depuis leur université d'origine, la situation peut être différente selon leur pays d'origine et la durée du séjour. Un séjour Erasmus de six mois ne crée pas nécessairement une résidence fiscale française si l'étudiant maintient sa résidence principale à l'étranger. La clarification de ce point avant le départ permet d'éviter des déclarations non obligatoires ou, au contraire, des omissions.
`;

const EXT5_L2 = `
## La gestion du compte fiscal en cas de décès

Le décès d'un membre du foyer fiscal crée des obligations administratives spécifiques pour les survivants. Pour le conjoint survivant d'un foyer marié ou pacsé, l'administration fiscale doit être informée du décès, ce qui entraîne la clôture du foyer fiscal commun et la création d'un foyer fiscal individuel pour le survivant. La déclaration de revenus de l'année du décès doit être effectuée pour les deux périodes : période commune jusqu'au décès et période individuelle ensuite.

Ces démarches s'effectuent via l'espace particulier de l'administration fiscale ou directement au centre des finances publiques. La production de l'extrait d'acte de décès est la première étape. L'administration fiscale coordonne ses traitements avec les autres administrations (CAF, retraites, mutuelles) pour mettre à jour les dossiers. Une gestion rapide de ces démarches fiscales permet d'éviter des complications administratives dans une période déjà difficile.

## Les taxes spécifiques sur certaines propriétés et leur interaction avec l'avis d'imposition

Outre la taxe foncière classique, certaines propriétés sont soumises à des taxes immobilières supplémentaires. La taxe sur les logements vacants (TLV) s'applique dans les zones tendues aux logements qui restent vacants plus d'un an. La taxe annuelle sur les résidences secondaires (TARS) est une majoration de la taxe d'habitation applicable dans les communes touristiques pour les résidences non occupées à titre principal.

Ces taxes supplémentaires n'apparaissent pas sur l'avis d'imposition sur le revenu mais font l'objet d'avis séparés. Pour les propriétaires qui reçoivent ces avis de taxe supplémentaire alors qu'ils estiment que leurs biens ne sont pas dans la situation imposable, une réclamation auprès du service des impôts locaux permet de contester l'imposition. La réclamation doit démontrer que le bien était occupé (pour contester la taxe sur logement vacant) ou que la commune ne justifie pas la surtaxation.

## Les aides fiscales pour les dépenses de formation

La formation professionnelle continue représente une catégorie de dépenses qui peut ouvrir droit à des avantages fiscaux dans certaines circonstances. Pour les travailleurs indépendants, les dépenses de formation directement liées à l'activité professionnelle sont déductibles des bénéfices imposables. Pour les salariés qui financent eux-mêmes leurs formations hors plan de formation de l'entreprise, des possibilités de déduction existent dans certains cas spécifiques.

Pour les étudiants qui financent eux-mêmes leurs études dans des formations non conventionnées, il est important de vérifier si ces dépenses peuvent ouvrir droit à des avantages fiscaux. Certaines formations professionnalisantes (BTS, licences professionnelles privées) peuvent donner droit à des crédits d'impôt ou des déductions sous conditions. Les universités et les établissements d'enseignement supérieur reconnus par l'État fournissent généralement à leurs étudiants des attestations de paiement des frais de scolarité utilisables dans les démarches fiscales.

## La fiscalité comparative France-Europe : points de repère

Pour les étudiants étrangers européens qui comparent leur situation fiscale en France avec celle de leur pays d'origine, quelques points de repère permettent de contextualiser le système français. La France se distingue par un barème progressif relativement élevé pour les dernières tranches (45% pour les revenus supérieurs à 177 106 euros en 2024), compensé par de nombreuses niches fiscales et un quotient familial généreux. La TVA française (20% de taux normal) est dans la moyenne européenne.

La France se distingue également par la suppression de la taxe d'habitation sur les résidences principales (une particularité par rapport à la taxe d'habitation ou "council tax" de nombreux pays voisins), et par des cotisations sociales élevées (environ 22% pour les salariés du secteur privé) qui financent un système de protection sociale étendu. Pour un étudiant européen en comparaison avec son pays d'origine, comprendre ces différences structurelles aide à contextualiser les montants d'impôts et cotisations qui apparaissent sur ses bulletins de salaire français.

## Établir une routine annuelle de gestion fiscale

La mise en place d'une routine annuelle de gestion fiscale est la clé d'une relation sereine avec l'administration fiscale. Cette routine se structure naturellement autour des échéances du calendrier fiscal. En janvier : vérification du taux de prélèvement à la source appliqué par les employeurs, collecte des attestations fiscales annuelles reçues (intérêts de crédit, dons). En avril-mai : déclaration de revenus en ligne, vérification de la prédéclaration, simulation préalable pour comparaison. En juillet-août : réception de l'avis d'imposition, lecture attentive, vérification des montants, et si nécessaire, initiation d'une procédure de correction. En septembre : régularisation éventuelle du PAS, paiement du solde si applicable. En octobre-novembre : réception des avis de taxe foncière le cas échéant.

Cette routine, une fois établie, ne représente que quelques heures par an pour les situations fiscales simples. Elle garantit que rien n'est oublié, que les délais sont respectés, et que les erreurs sont détectées rapidement. La discipline de cette routine est l'une des pratiques administratives les plus rentables en termes de temps investi versus bénéfices obtenus.
`;

const EXT5_L3 = `
## La compréhension de l'avis d'imposition dans le contexte familial

Pour les étudiants qui sont encore rattachés au foyer fiscal de leurs parents, comprendre non seulement son propre avis mais aussi la logique de l'avis général du foyer parental est une connaissance utile. Le rattachement d'un enfant majeur étudiant au foyer parental génère une demi-part supplémentaire qui réduit l'impôt des parents. Cette réduction peut représenter plusieurs centaines d'euros d'économie d'impôt annuelle pour les parents.

La décision de se rattacher ou non au foyer parental est une décision familiale annuelle qui doit être revisitée chaque année. Elle dépend des revenus des parents, du nombre d'enfants déjà dans le foyer, des revenus éventuels de l'étudiant lui-même, et des déductions ou crédits d'impôts auxquels l'étudiant pourrait prétendre dans une déclaration indépendante. Un simulateur fiscal qui compare les deux options — rattachement vs déclaration indépendante — est l'outil approprié pour prendre cette décision de façon optimale.

## Les implications de la déclaration des revenus de plateformes numériques

L'économie des plateformes numériques a considérablement élargi les possibilités d'activités rémunérées pour les étudiants. Les revenus générés via des plateformes de vente (Etsy, Vinted pour les vendeurs professionnels), de services (Upwork, Malt, Fiverr), ou de location (Airbnb) sont imposables en France pour les résidents fiscaux français. Ces plateformes sont désormais tenues par la loi de déclarer automatiquement les revenus de leurs utilisateurs à l'administration fiscale française à partir de certains seuils.

Cette déclaration automatique signifie que l'administration fiscale dispose déjà des données sur les revenus des plateformes lors du traitement de la déclaration. La cohérence entre les revenus déclarés par le contribuable et ceux transmis par les plateformes est vérifiée automatiquement. En cas de discordance, l'administration peut envoyer une demande d'explication. La bonne pratique est de déclarer systématiquement ces revenus de plateformes pour éviter toute incohérence, même si les montants sont modestes et que l'impôt résultant est nul.

## Les formulaires annexes à la déclaration principale

La déclaration de revenus principale (formulaire 2042) est souvent accompagnée de formulaires annexes pour les revenus spécifiques ou les situations particulières. Le formulaire 2042-C est destiné aux revenus complémentaires (revenus de placements financiers non soumis à prélèvement libératoire, revenus de locations meublées non professionnelles). Le formulaire 2044 est dédié aux revenus fonciers en régime réel. Le formulaire 2047 est utilisé pour les revenus encaissés à l'étranger.

La maîtrise de ces formulaires annexes n'est nécessaire que lorsque la situation fiscale est suffisamment complexe pour les requérir. Pour la majorité des étudiants qui ont uniquement des salaires ou des bourses, la déclaration principale 2042 suffit. L'administration fiscale préremplie déjà une grande partie des informations dans ces formulaires lorsqu'elle dispose des données nécessaires — il faut vérifier et compléter plutôt que tout saisir de zéro.

## Lecture comparée de deux avis d'imposition consécutifs

Pour les contribuables qui souhaitent approfondir leur compréhension de la fiscalité personnelle, la comparaison de deux avis d'imposition consécutifs est un exercice pédagogique efficace. En comparant ligne par ligne un avis avec celui de l'année précédente, on peut identifier précisément les évolutions : changement de tranche d'imposition suite à une hausse de revenus, apparition ou disparition d'un crédit d'impôt, modification du quotient familial suite à un événement de vie.

Cette lecture comparative révèle les mécanismes du système fiscal de façon très concrète. La progression du revenu fiscal de référence d'une année sur l'autre reflète l'évolution de la situation financière du foyer et peut anticiper des changements dans les droits aux aides sociales conditionnées au RFR. La variation du prélèvement à la source d'une année sur l'autre témoigne de l'ajustement automatique du taux en fonction des revenus déclarés. Cet exercice annuel transforme la lecture de l'avis d'imposition en une véritable autoformation à la fiscalité personnelle.
`;

const EXT5_L4 = `
## La fiscalité des bourses de thèse et des post-doctorats

Les doctorants et post-doctorants constituent une catégorie particulière d'étudiants dont le traitement fiscal est spécifique. Les allocations de thèse versées dans le cadre d'un contrat doctoral (créé par la loi de 2009) sont soumises à l'impôt sur le revenu en tant que traitements et salaires, puisque ce contrat est un contrat de travail de droit public ou privé selon l'établissement. Les cotisations sociales afférentes sont également prélevées sur ces allocations.

En revanche, les bourses de thèse versées par des fondations privées ou des organismes de recherche dans un cadre non contractuel peuvent bénéficier de l'exonération fiscale des bourses d'études, sous réserve que les conditions de l'article 81 du CGI soient remplies. La distinction entre "contrat doctoral" et "bourse de thèse" est donc fiscalement significative. Les doctorants doivent vérifier dans quel cadre ils perçoivent leur financement pour déterminer le régime fiscal applicable.

## Les spécificités fiscales des étudiants salariés en portage salarial

Le portage salarial est une forme d'emploi qui permet à des travailleurs indépendants d'exercer leur activité tout en bénéficiant du statut de salarié — via une société de portage qui sert d'intermédiaire entre le prestataire et ses clients. Pour un étudiant qui développe une activité de consulting ou de prestation de services, le portage salarial peut être une alternative à la création d'une micro-entreprise.

Fiscalement, les revenus perçus en portage salarial sont des salaires — ils sont soumis au PAS exactement comme un salaire classique, sont déclarés dans la case traitements et salaires, et bénéficient de la déduction forfaitaire de 10% pour frais professionnels. La comparaison avec le régime micro-entreprise en termes de charges totales (impôts + cotisations sociales) peut favoriser l'une ou l'autre option selon les revenus. Le portage salarial a des charges sociales patronales plus élevées que la micro-entreprise, mais offre une protection sociale plus complète incluant l'accès à l'assurance chômage.

## L'imposition des gains de jeux et de loterie

Une catégorie de revenus souvent méconnue est le traitement fiscal des gains de jeux de hasard. En France, les gains réalisés lors de jeux de hasard légaux (Française des Jeux, Paris Sportifs, casinos légaux) sont exonérés d'impôt sur le revenu. Cette exonération s'applique quelle que soit la somme gagnée — un gain de plusieurs millions d'euros reste exonéré d'impôt sur le revenu en France, bien que des droits de mutation à titre gratuit puissent s'appliquer en cas de transmission à un tiers.

Pour les gains réalisés sur des plateformes étrangères de jeux en ligne — en particulier les sites de poker ou de paris sportifs opérant depuis l'étranger — la situation est plus complexe. Si la plateforme n'est pas agréée par l'ARJEL (autorité de régulation des jeux en ligne en France), ses gains peuvent être considérés comme des revenus d'activités illicites et donc imposables. L'évolution rapide de la régulation des jeux en ligne rend cette question évolutive — une vérification de la situation réglementaire actuelle s'impose avant toute déclaration.

## La fiscalité des crypto-actifs : un domaine en évolution rapide

Le traitement fiscal des crypto-actifs (Bitcoin, Ethereum et autres) a été précisé progressivement par l'administration fiscale française. Depuis 2019, les plus-values réalisées sur la cession de crypto-actifs par des particuliers sont imposables en tant que plus-values sur actifs numériques (au taux forfaitaire de 30%, soit le même taux que le prélèvement forfaitaire unique sur les capitaux mobiliers classiques).

Pour les étudiants qui ont investi dans des crypto-actifs, la gestion fiscale peut s'avérer complexe en raison du nombre potentiellement élevé de transactions (chaque échange entre crypto-actifs est une cession taxable, pas seulement les conversions en euros). Des outils logiciels spécialisés permettent de calculer automatiquement les plus-values réalisées sur l'ensemble des transactions de l'année à partir des historiques d'échanges exportés des plateformes. L'administration fiscale a publié des instructions précises sur le calcul de ces plus-values, disponibles dans le BOFiP. La déclaration correcte de ces revenus est obligatoire et leur omission constitue une irrégularité fiscale.
`;

const EXT5_L5 = `
## L'avis d'imposition pour les étudiants en mobilité européenne

Les étudiants qui effectuent des études dans plusieurs pays de l'Union Européenne au cours d'une même année académique peuvent se retrouver dans des situations fiscales complexes où plusieurs pays revendiquent une partie de la résidence fiscale. L'Union Européenne ne dispose pas d'un code fiscal unifié — chaque État membre conserve sa propre législation fiscale, et les conventions bilatérales entre États membres régissent la répartition du droit d'imposer.

Pour un étudiant qui passe six mois en France et six mois dans un autre pays de l'UE dans le cadre d'Erasmus ou d'un programme d'échange, la résidence fiscale principale est généralement dans le pays où l'étudiant avait son domicile avant la mobilité. La mobilité temporaire ne crée pas en général de résidence fiscale dans le pays d'accueil si l'étudiant y est présent moins de 183 jours et maintient son domicile principal chez lui. Cette règle des 183 jours est cependant un critère parmi d'autres et doit être vérifiée à la lumière des conventions bilatérales spécifiques.

## Le rôle de l'avis d'imposition dans les demandes d'allocation de rentrée scolaire

L'allocation de rentrée scolaire (ARS) est une aide versée par la CAF aux familles ayant des enfants scolarisés entre 6 et 18 ans. Bien que directement destinée aux familles avec enfants scolarisés plutôt qu'aux étudiants eux-mêmes, cette allocation est fortement liée à l'avis d'imposition puisque son montant dépend du revenu fiscal de référence du foyer. Un étudiant qui vit dans un foyer fiscal avec des enfants scolarisés plus jeunes pourrait contribuer indirectement à la perception de cette aide par ses parents.

Pour les étudiants qui ont eux-mêmes des enfants (étudiant-parent), l'ARS peut leur être versée directement s'ils constituent un foyer fiscal autonome avec des enfants scolarisés. Dans ce cas, l'avis d'imposition du foyer de l'étudiant-parent est le document de référence pour l'éligibilité et le calcul de l'ARS. Cette aide, relativement méconnue des étudiants-parents, peut représenter plusieurs centaines d'euros par an et par enfant scolarisé.

## Les aides fiscales pour les propriétaires qui louent à des étudiants

Certains propriétaires qui louent leur logement à des étudiants peuvent bénéficier d'avantages fiscaux spécifiques. La location en meublé non professionnelle (LMNP) avec le régime micro-BIC offre un abattement de 50% sur les loyers perçus, ce qui peut réduire significativement la fiscalité de la location. Pour les propriétaires qui louent dans le cadre du dispositif Loc'Avantages (anciennement Louer Abordable), une réduction d'impôt est accordée en échange d'un loyer inférieur au prix du marché.

Ces dispositifs sont pertinents pour les étudiants qui envisagent d'aider leurs parents à optimiser fiscalement la mise en location d'un logement dédié à leur usage pendant les études. La connaissance de ces mécanismes permet d'avoir une conversation informée avec les parents propriétaires sur les options fiscales disponibles et leurs implications pratiques.

## La dimension psychologique de la gestion fiscale

Il est intéressant d'observer que beaucoup de personnes ont une relation émotionnellement chargée avec leurs déclarations fiscales et leurs avis d'imposition. Pour certains, la réception de l'avis génère une anxiété liée à la peur d'une erreur ou d'une dette imprévisible. Pour d'autres, une procrastination conduit à ignorer le document plutôt que de l'affronter. Ces réactions émotionnelles peuvent conduire à des conséquences pratiques négatives : délais de réclamation manqués, erreurs non détectées, obligations non respectées.

Développer une relation plus neutre et méthodique avec ses documents fiscaux — les traiter comme des documents administratifs parmi d'autres plutôt que comme des sources potentielles de mauvaises nouvelles — est une compétence émotionnelle utile. Cette neutralité s'acquiert par la familiarisation progressive : lire son avis chaque année, même rapidement, réduit l'anxiété associée à ce document et renforce la confiance dans sa capacité à le gérer. La maîtrise progressive des démarches fiscales transforme une source d'anxiété en une routine gérée sereinement.
`;

const EXT5_L6 = `
## Le PAS pour les non-résidents ayant des revenus français

Les non-résidents fiscaux qui perçoivent des revenus de source française (salaires d'un travail effectué en France, revenus fonciers d'un bien immobilier en France, dividendes d'une entreprise française) sont soumis à l'impôt en France sur ces revenus. Pour les salaires, l'employeur français prélève une retenue à la source selon un barème spécifique aux non-résidents (qui diffère du barème du PAS applicable aux résidents). Pour les revenus fonciers et les dividendes, des prélèvements sont opérés par des agents payeurs selon des taux spécifiques.

Ces mécanismes de retenue à la source pour non-résidents existent depuis longtemps — ils ne doivent pas être confondus avec le PAS introduit en 2019 pour les résidents. Pour les étudiants étrangers qui retournent dans leur pays d'origine en cours d'année tout en continuant à percevoir des revenus de source française, la transition du statut de résident à non-résident entraîne un changement du régime de prélèvement applicable.

## La gestion des comptes conjoints et du PAS en cas de PACS ou mariage

Le mariage ou le PACS crée une imposition commune du foyer fiscal, avec un taux de PAS calculé sur la base des revenus combinés des deux conjoints. Le choix entre taux individualisé et taux commun (personnalisé du foyer) a des implications pratiques sur la confidentialité et sur l'ajustement mensuel des prélèvements.

Le taux commun du foyer appliqué séparément à chaque conjoint peut conduire à des situations où le conjoint avec des revenus plus faibles voit son taux de PAS augmenter par rapport à ce qu'il serait si calculé sur ses seuls revenus. L'option du taux individualisé permet d'appliquer à chaque conjoint un taux calculé sur ses propres revenus, réduisant ainsi les transferts de charge fiscale entre conjoints pendant l'année. Cette option est accessible depuis l'espace particulier et peut être activée ou désactivée à tout moment.

## Le calcul du montant net social sur le bulletin de salaire

Depuis 2023, une nouvelle ligne est apparue sur les bulletins de salaire français : le "montant net social". Ce montant, calculé selon des règles spécifiques, est utilisé par les organismes de protection sociale (CAF, France Travail) pour calculer la base des prestations sociales. Il diffère du salaire net habituel et du revenu fiscal de référence.

Le montant net social est transmis automatiquement par les employeurs à la CAF et à France Travail, ce qui simplifie les démarches des bénéficiaires de prestations : il n'est plus nécessaire de fournir des bulletins de salaire pour certaines demandes d'aides, puisque les organismes disposent directement de l'information. Ce mécanisme de transmission automatique s'inscrit dans la tendance plus large de la "déclaration sociale nominative" (DSN), qui centralise les informations sociales des salariés pour toutes les administrations compétentes.

## Ressources pour approfondir sa culture fiscale

Pour les étudiants qui souhaitent approfondir leur connaissance du système fiscal français au-delà des éléments couverts dans ce cours, plusieurs ressources de qualité sont disponibles. Le site impots.gouv.fr propose une documentation complète incluant des guides pratiques pour les principales situations fiscales. Le BOFiP (Bulletin Officiel des Finances Publiques) est la source de droit fiscal officielle, accessible en ligne, qui contient l'ensemble des instructions fiscales. Sa lecture peut être ardue pour les non-spécialistes, mais la possibilité de vérifier directement les textes officiels en cas de doute est précieuse.

Des livres accessibles sur la fiscalité personnelle sont publiés chaque année par des éditeurs spécialisés (Francis Lefebvre, Revue Fiduciaire, Les Éditions du Particulier) — ces guides annuels, mis à jour pour refléter les changements de l'année fiscale en cours, constituent des références pratiques complètes. Des podcasts et vidéos sur YouTube traitent également de fiscalité personnelle avec un angle pratique et pédagogique — une façon accessible d'explorer des sujets spécifiques sans avoir à lire des documents officiels dense. La diversité des formats disponibles signifie que chacun peut trouver le mode d'apprentissage qui lui convient le mieux pour approfondir ses connaissances fiscales à son rythme.
`;

await appendAndPatch('9e2a16ea-0c1b-4df3-a8f6-fb3dac6f425b', EXT5_L1);
await appendAndPatch('19527171-0a94-4ba5-b58e-a15de77a8adc', EXT5_L2);
await appendAndPatch('a2da7151-913a-4f41-8285-7ee916b68cb9', EXT5_L3);
await appendAndPatch('646d10ae-5597-4b58-928c-f22fc29ce5fb', EXT5_L4);
await appendAndPatch('838acbd1-bcda-4d75-81e0-b822158a6439', EXT5_L5);
await appendAndPatch('a7eb44c9-883f-4305-9041-97be5222b583', EXT5_L6);
