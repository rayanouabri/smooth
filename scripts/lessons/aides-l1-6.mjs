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

const L1 = `# Arnaques aux aides étudiantes : reconnaître et éviter les pièges

Les aides financières destinées aux étudiants en France représentent des sommes considérables versées chaque année par l'État et ses organismes. Cette manne financière attire malheureusement des individus malveillants qui cherchent à en détourner une partie au détriment des étudiants les plus vulnérables. Les arnaques aux aides étudiantes prennent des formes très variées — des faux organismes qui promettent de débloquer des aides inexistantes aux plateformes de "services administratifs" qui facturent des démarches gratuitement accessibles en ligne.

## Les formes les plus courantes d'arnaques aux aides étudiantes

Les arnaques aux aides étudiantes se déclinent en plusieurs catégories selon le vecteur d'attaque utilisé et le type d'aide prétendue. La première catégorie est celle des "facilitateurs" d'accès aux aides — des sites web, des comptes sur les réseaux sociaux ou des individus qui prétendent pouvoir accélérer les demandes d'aides sociales ou débloquer des aides refusées en échange d'une commission. Ces prétendus facilitateurs n'ont aucun pouvoir sur les systèmes des administrations et prennent de l'argent pour des services qu'ils ne peuvent pas rendre.

La deuxième catégorie est celle des fausses bourses et faux financements. Des emails, des publications sur les réseaux sociaux ou des sites web imitant des organismes officiels proposent des "bourses exceptionnelles" ou des "financement d'études" auxquels il suffirait de postuler en fournissant ses informations personnelles et bancaires. Ces dispositifs n'existent pas — ils servent uniquement à collecter des données d'identité qui peuvent être utilisées pour des fraudes à l'identité ou à ouvrir des crédits au nom de la victime.

La troisième catégorie est celle des "sites de services administratifs" qui facturent des démarches pouvant être effectuées gratuitement sur les sites officiels. Ces sites, souvent bien référencés dans les moteurs de recherche grâce à des achats de publicité, proposent des services comme "constitution de dossier de bourse", "demande d'APL simplifiée" ou "inscription Pôle Emploi Étudiants" pour des frais de quelques dizaines d'euros. Ils imitent parfois l'interface des sites officiels pour tromper les utilisateurs peu familiers avec les démarches administratives françaises.

## Les signaux d'alerte à surveiller

Plusieurs signaux d'alerte permettent d'identifier une arnaque potentielle avant d'y tomber. Le premier signal est toute demande de paiement préalable pour accéder à une aide sociale ou gouvernementale — les aides légitimes (bourses CROUS, APL, aides du FSE) ne nécessitent jamais de paiement de la part du demandeur. Aucune administration française ne demande d'argent pour traiter une demande d'aide, qu'il s'agisse d'un "frais de dossier", d'une "commission de traitement" ou d'une "caution remboursable".

Le deuxième signal est la demande de coordonnées bancaires complètes (IBAN et code BIC) en dehors des formulaires officiels des organismes reconnus. La CAF, le CROUS et les autres organismes d'aide demandent effectivement les coordonnées bancaires pour virer les aides, mais cette demande est intégrée dans des formulaires sécurisés sur leurs sites officiels. Une demande de RIB par email, par message privé ou sur un site tiers est suspecte et ne doit pas être honorée.

Le troisième signal est l'urgence artificielle — "offre valable 24h", "places limitées", "dernier délai" — qui pousse les victimes à décider rapidement, sans prendre le temps de vérifier. Les vraies aides étudiantes ont des délais connus et publiés ; elles ne disparaissent pas en 24 heures. La pression temporelle est une technique classique des arnaqueurs pour empêcher leurs cibles de réfléchir ou de consulter des proches.

## Les arnaques spécifiques visant les étudiants étrangers

Les étudiants étrangers sont des cibles privilégiées de certaines arnaques aux aides en raison de plusieurs facteurs : leur moins bonne connaissance du système administratif français, leur usage souvent limité de la langue française, et leur isolement potentiel des réseaux d'aide et d'information. Les arnaques spécifiquement ciblées sur les étudiants étrangers incluent les faux services d'aide à la régularisation du titre de séjour qui promettent d'accélérer les procédures en échange d'honoraires importants, et les fausses associations d'aide aux étudiants étrangers qui collectent des cotisations ou des dons sans offrir de services réels.

Des arnaques plus sophistiquées ciblent spécifiquement les étudiants africains et asiatiques via des groupes Facebook ou WhatsApp qui prétendent proposer des "packs d'installation" en France incluant des "connexions" pour faciliter l'ouverture de compte bancaire, l'obtention d'APL ou l'accès à une chambre CROUS. Ces "services" facturés plusieurs centaines d'euros ne tiennent jamais leurs promesses — les "connexions" n'existent pas ou ne permettent pas d'obtenir ce qui est promis.

## Comment vérifier la légitimité d'un organisme d'aide

Face à une sollicitation ou une offre d'aide, plusieurs vérifications simples permettent d'établir si l'organisme est légitime. La première est la vérification de l'URL du site web — les sites officiels des administrations françaises utilisent des domaines en .gouv.fr (service-public.fr, crous.fr, caf.fr, pole-emploi.fr). Un site qui propose des services similaires avec un domaine différent (comme caf-aide.com ou crous-bourses.net) est clairement un site non-officiel.

La deuxième vérification est la recherche du numéro SIRET de l'organisme sur le site officiel Annuaire des Entreprises (annuaire-entreprises.data.gouv.fr). Tout organisme légal en France dispose d'un numéro SIRET. L'absence de numéro SIRET ou un numéro difficile à trouver est un signal d'alarme. La troisième vérification est la consultation des avis sur Google ou Trustpilot — les arnaques récurrentes génèrent généralement de nombreux témoignages négatifs de victimes qui alertent les internautes.

## Les recours en cas de fraude

Quand un étudiant réalise qu'il a été victime d'une arnaque liée aux aides étudiantes, plusieurs recours sont disponibles. Le premier est le signalement sur la plateforme Pharos (plateforme de signalement des contenus illicites en ligne) pour les arnaques opérées via des sites web ou des réseaux sociaux — ce signalement contribue à la fermeture des sites frauduleux. Le second est le dépôt de plainte auprès de la police ou de la gendarmerie, ou directement auprès du procureur de la République via la plateforme officielle deposer-plainte.interieur.gouv.fr.

Pour les victimes qui ont versé de l'argent, contacter immédiatement sa banque pour signaler une transaction frauduleuse et demander un chargeback (annulation de la transaction) est la démarche d'urgence. Les délais pour obtenir un chargeback varient selon la méthode de paiement — les paiements par carte bancaire sont généralement remboursables dans les 30 à 70 jours ; les virements bancaires directs sont plus difficiles à annuler. Les paiements par crypto-monnaie ou par Western Union sont pratiquement irrécupérables.
`;

const L2 = `# Les prêts étudiants garantis par l'État : conditions et fonctionnement

Le prêt étudiant garanti par l'État (PGE Étudiant) est un dispositif français qui permet aux étudiants d'emprunter auprès des banques avec la garantie de l'État, sans avoir besoin de caution parentale ou de revenus personnels. Ce dispositif, créé pour permettre à tous les étudiants d'accéder au crédit indépendamment de la situation financière de leurs parents, est l'une des solutions de financement les plus utilisées par les étudiants qui souhaitent compléter leurs ressources pendant leurs études.

## Le fonctionnement du prêt étudiant garanti par l'État

Le prêt étudiant garanti par l'État fonctionne sur un principe simple : l'État se porte caution pour l'étudiant auprès de la banque. Si l'étudiant ne peut pas rembourser son prêt, l'État rembourse la banque à sa place — ce qui permet aux banques de prêter sans exiger de garantie personnelle de l'étudiant. Cette garantie est gérée par Bpifrance pour le compte de l'État français.

Ce dispositif présente plusieurs caractéristiques financières avantageuses par rapport à un prêt personnel classique. Le taux d'intérêt est fixe et généralement inférieur à ceux des prêts à la consommation, bien qu'il varie selon les banques et les conditions du marché. La période de différé de remboursement — pendant laquelle l'étudiant ne rembourse pas le capital emprunté — peut s'étendre sur toute la durée des études plus une période de franchise après l'obtention du diplôme, permettant à l'emprunteur de trouver un emploi avant de commencer à rembourser.

## Les conditions d'éligibilité

Pour bénéficier d'un prêt étudiant garanti par l'État, plusieurs conditions doivent être remplies. Le demandeur doit être étudiant dans un établissement d'enseignement supérieur français (université, école, BTS, etc.) et avoir moins de 28 ans à la date de la demande. La nationalité française ou le statut de résident légal en France avec une durée de séjour régulier est généralement requise.

Les étudiants étrangers non membres de l'Union Européenne peuvent dans certains cas bénéficier de ce dispositif, mais les conditions varient selon les banques et les conventions bilatérales entre la France et les pays d'origine. Il est recommandé de contacter directement les banques participantes pour vérifier les conditions spécifiques applicables à sa situation.

## Les banques qui proposent ce dispositif

Toutes les banques françaises ne participent pas au dispositif de prêt étudiant garanti par l'État. Les principales banques participantes incluent BNP Paribas, Société Générale, Crédit Agricole, Crédit Mutuel, LCL, et la Banque Postale. Les néo-banques comme Revolut ou N26 ne proposent généralement pas ce type de crédit, car elles n'ont pas les mêmes structures de risque que les banques traditionnelles.

Les conditions spécifiques — taux d'intérêt, durée du différé, plafond du prêt — varient significativement d'une banque à l'autre. Comparer les offres de plusieurs banques avant de s'engager est donc indispensable. Le site officiel de Bpifrance liste les banques partenaires et fournit des informations générales sur le dispositif.

## Le montant maximum et la durée de remboursement

Le montant maximum du prêt étudiant garanti par l'État est en général plafonné à 20 000 euros, bien que certaines banques proposent des plafonds légèrement différents. Ce plafond est destiné à couvrir les frais de vie et les frais d'études pendant la durée du cursus, pas à financer des projets personnels non liés aux études. La durée de remboursement après la fin du différé s'étend typiquement sur deux à neuf ans selon le montant emprunté et les conditions négociées.

Le coût total du crédit — soit le montant total des intérêts payés pendant toute la durée du prêt — doit être calculé avant de contracter. Un prêt de 15 000 euros contracté à un taux d'intérêt annuel de 2% et remboursé sur sept ans générera des intérêts totaux d'environ 1 100 euros — un coût relativement modeste comparé à la somme empruntée. Il est utile de simuler différents scénarios de remboursement pour trouver celui qui correspond à la situation financière prévue après les études.

## Les alternatives au prêt garanti par l'État

Le prêt garanti par l'État n'est pas la seule forme de crédit disponible pour les étudiants en France. Certaines régions françaises proposent des prêts d'honneur étudiants — sans intérêt et sans caution — pour des montants plus modestes (typiquement 3 000 à 8 000 euros) destinés à financer des projets d'études spécifiques ou à couvrir des situations d'urgence financière. Ces prêts sont accordés sur des critères sociaux et d'excellence académique par des commissions régionales.

Des associations comme la Fondation des Étudiants de France ou des fondations d'entreprises proposent également des aides non remboursables (bourses privées) ou des prêts sans intérêt à des étudiants méritants dans des situations de précarité. La recherche de ces aides privées complémentaires peut significativement réduire le besoin de crédit et donc les remboursements futurs.

## Les précautions avant de contracter un prêt étudiant

L'endettement étudiant est une décision financière sérieuse qui engage l'avenir du rembourseur. Avant de contracter un prêt étudiant, une réflexion sérieuse sur les perspectives d'emploi et de revenus après les études est indispensable. Un diplôme qui ouvre des perspectives professionnelles claires avec des niveaux de rémunération connus justifie mieux un endettement qu'un cursus dont les débouchés sont incertains.

La règle générale des planificateurs financiers est de ne jamais emprunter plus que l'équivalent du salaire annuel net attendu en première année de travail. Si les perspectives de salaire à l'issue des études sont de 30 000 euros brut annuel (soit environ 23 000 euros net), emprunter plus de 20 000 euros pour ses études est déjà à la limite. Cette règle protège contre les situations de surendettement étudiant qui peuvent fragiliser durablement la situation financière des jeunes diplômés.
`;

const L3 = `# Les aides d'urgence du CROUS : accéder au soutien financier immédiat

Le CROUS (Centre Régional des Œuvres Universitaires et Scolaires) est l'organisme public français chargé de gérer les conditions de vie des étudiants dans l'enseignement supérieur. Au-delà de la gestion des bourses sur critères sociaux et des résidences universitaires, le CROUS dispose d'un dispositif d'aides d'urgence destiné aux étudiants confrontés à des difficultés financières imprévues et aiguës. Ces aides, moins connues que les bourses classiques, peuvent être cruciales pour les étudiants qui traversent une crise financière temporaire.

## Les deux types d'aides d'urgence du CROUS

Le CROUS propose deux types d'aides d'urgence avec des modalités et des montants différents. La première est l'aide d'urgence ponctuelle (AUP), destinée à faire face à une situation de détresse financière soudaine et passagère — décès d'un parent qui finançait les études, perte d'emploi, report d'un virement familial, dépenses médicales imprévues. Cette aide est versée en une seule fois et ne nécessite pas de conditions de revenus préalables stricts, mais elle doit être justifiée par une situation de crise documentée.

La seconde est l'aide d'urgence annuelle (AUA), destinée aux étudiants dont la situation financière précaire s'étend sur une période plus longue. L'AUA est versée mensuellement ou en plusieurs fois sur l'année académique, avec des montants plus importants que l'AUP. Pour y accéder, l'étudiant doit démontrer une situation de ressources insuffisantes qui ne lui permettent pas de financer raisonnablement ses études, et qui n'est pas couverte par les bourses classiques.

## Les conditions d'éligibilité aux aides d'urgence

Les aides d'urgence du CROUS sont accessibles à tous les étudiants régulièrement inscrits dans un établissement d'enseignement supérieur, quelle que soit leur nationalité ou leur situation au regard des bourses classiques. Contrairement aux bourses sur critères sociaux, il n'est pas nécessaire d'avoir déposé un dossier de bourse pour demander une aide d'urgence. Il n'y a pas de condition d'âge spécifique au-delà des conditions générales d'inscription dans l'enseignement supérieur.

La condition principale est de documenter la situation de détresse financière. Pour une AUP, un événement précis déclencheur doit être identifié et documenté. Pour une AUA, la situation globale de revenus et de charges doit montrer que l'étudiant ne peut pas subvenir normalement à ses besoins. Le CROUS statue sur chaque dossier individuellement — il n'y a pas de barème automatique et la commission d'aide d'urgence dispose d'une marge d'appréciation.

## La procédure de demande : étapes et délais

La demande d'aide d'urgence se fait auprès du service social du CROUS régional dont dépend l'université ou l'école où l'étudiant est inscrit. La première étape est généralement la prise de contact avec une assistante sociale du CROUS — soit par email, soit par téléphone, selon les pratiques du CROUS régional. De nombreux CROUS proposent désormais des formulaires de demande en ligne sur leur site (en.crous.fr pour la version anglaise nationale, ou directement sur le site du CROUS régional).

Le dossier de demande doit inclure une description détaillée de la situation financière difficile, les justificatifs des ressources (relevés bancaires, attestations de versement d'aides, etc.), les justificatifs des charges (quittances de loyer, factures, etc.), et les documents attestant de la situation exceptionnelle déclencher (certificat de décès si décès d'un parent, attestation Pôle Emploi si perte d'emploi, etc.). Les délais de traitement varient selon les CROUS et le niveau d'urgence de la situation — en cas d'urgence absolue (étudiant sans argent pour manger), certains CROUS peuvent débloquer une aide en quelques jours.

## Les montants accordés et leurs limites

Les montants des aides d'urgence varient selon la situation et les ressources du CROUS régional, mais il est possible de donner des ordres de grandeur habituels. L'aide d'urgence ponctuelle se situe généralement entre 200 et 800 euros. L'aide d'urgence annuelle peut atteindre plusieurs milliers d'euros répartis sur l'année. Ces montants sont indicatifs — certains étudiants dans des situations particulièrement difficiles ont pu obtenir des aides plus importantes.

Les aides d'urgence du CROUS ne sont pas cumulables sans limite avec d'autres aides — la commission vérifiera l'ensemble des ressources et des aides déjà perçues pour éviter des doubles aides et s'assurer que le besoin n'est pas déjà satisfait par d'autres dispositifs. Cependant, elles sont compatibles avec les bourses sur critères sociaux, l'APL et d'autres aides complémentaires.

## Les aides alimentaires du CROUS : épiceries solidaires et repas à prix réduit

En plus des aides financières directes, le CROUS propose des dispositifs d'aide matérielle qui peuvent soulager significativement le budget alimentaire des étudiants en difficulté. Le dispositif "repas à 1 euro" (officiellement le "tarif social de la restauration universitaire") est accessible aux étudiants boursiers et aux étudiants non-boursiers en situation de précarité attestée, sur présentation d'un justificatif. Ce repas complet pour 1 euro (contre environ 3,30 euros pour les étudiants non-boursiers) peut représenter une économie significative sur le budget alimentaire mensuel.

Les épiceries solidaires universitaires, présentes dans un nombre croissant d'établissements d'enseignement supérieur, proposent des produits alimentaires et d'hygiène à prix très réduits (souvent 10 à 30% du prix normal) aux étudiants dont les revenus sont inférieurs à un certain seuil. Ces épiceries, gérées par des associations étudiantes avec le soutien des CROUS et des universités, couvrent les besoins alimentaires essentiels sans les stigmates parfois associés aux banques alimentaires traditionnelles.
`;

const L4 = `# Les aides financières essentielles pour étudiants en France : guide complet

Le système français d'aides financières aux étudiants est l'un des plus développés d'Europe, mais sa complexité peut rendre difficile l'identification de toutes les aides auxquelles on a droit. Ce guide présente les principales aides accessibles aux étudiants, qu'ils soient français, européens, ou étrangers hors-UE, avec les conditions d'éligibilité et les démarches d'accès pour chacune.

## Les bourses sur critères sociaux du CROUS

Les bourses sur critères sociaux (BCS) du CROUS sont les aides financières les plus connues et les plus importantes pour les étudiants en France. Ces bourses sont calculées en fonction des revenus fiscaux du foyer fiscal de rattachement de l'étudiant (généralement les parents), du nombre d'enfants à charge, et de l'éloignement géographique entre le domicile familial et l'établissement d'études. Elles sont attribuées selon sept échelons (de 0bis à 7) qui correspondent à des montants croissants d'aide mensuelle.

Pour l'année académique 2024-2025, les montants mensuels des bourses vont de 110 euros (échelon 0bis, le plus faible) à environ 617 euros (échelon 7, le plus élevé). Ces bourses sont versées mensuellement sur dix mois (septembre à juin), hors période de congés universitaires. Pour les étudiants de l'échelon 6 et 7, des aides supplémentaires pour l'équipement pédagogique (ordinateur, matériel professionnel) peuvent être accordées en début d'année.

## Les conditions d'éligibilité pour les étudiants étrangers

L'accès aux bourses sur critères sociaux du CROUS pour les étudiants étrangers est soumis à des conditions spécifiques. Les étudiants ressortissants de l'Union Européenne peuvent en principe accéder aux mêmes aides que les étudiants français, sous réserve de satisfaire toutes les autres conditions d'éligibilité. Pour les étudiants hors-UE, l'accès aux bourses du CROUS est en général conditionné à une présence en France depuis plusieurs années, et les critères varient selon les conventions bilatérales entre la France et le pays d'origine.

Des bourses spécifiques existent pour certains pays avec lesquels la France a des accords de coopération — bourses d'excellence Eiffel, bourses des gouvernements étrangers gérées par Campus France, bourses des collectivités locales françaises pour les ressortissants de pays partenaires. Ces bourses sont souvent plus avantageuses que les BCS standard mais plus sélectives et limitées en nombre.

## La Prime d'Activité pour les étudiants qui travaillent

La Prime d'Activité est une aide mensuelle versée par la CAF aux personnes qui travaillent avec des revenus modestes. Les étudiants qui exercent une activité salariée en parallèle de leurs études peuvent y être éligibles si leurs revenus d'activité dépassent un certain seuil et restent inférieurs à un plafond. Pour un étudiant qui gagne entre 800 et 1 500 euros nets par mois grâce à un emploi à temps partiel, la Prime d'Activité peut représenter un complément de revenu de 50 à 150 euros par mois.

La demande de Prime d'Activité se fait sur le site de la CAF (caf.fr) ou via l'application CAF Mon Compte. La simulation en ligne sur le site de la CAF permet d'estimer le montant potentiel avant de faire la demande formelle, ce qui évite les démarches inutiles si l'éligibilité est incertaine.

## Les aides au logement de la CAF

Les Aides Personnalisées au Logement (APL) et les Allocations de Logement Sociales ou Familiales (ALS, ALF) sont des aides au logement versées par la CAF pour alléger le coût du loyer. Ces aides sont accessibles aux étudiants qui louent un logement indépendant (hors résidence familiale) et dont les revenus et le loyer se situent dans les tranches éligibles. Les montants varient fortement selon la ville (les aides sont plus élevées dans les zones à loyers élevés), le type de logement (les résidences universitaires CROUS donnent droit à des montants spécifiques), et la situation personnelle.

Pour les étudiants en résidence universitaire CROUS, les APL sont directement déduits du loyer par le CROUS — l'étudiant paie un loyer réduit sans avoir à faire de démarche spécifique. Pour les étudiants en location privée, la demande d'APL se fait sur le site de la CAF et nécessite la transmission du bail, du montant du loyer, et des revenus.

## Les aides des collectivités locales : régions et départements

Au-delà des aides nationales, les régions et les départements français proposent leurs propres programmes d'aide aux étudiants. Les aides régionales varient considérablement d'une région à l'autre — certaines régions proposent des prêts d'honneur, des bourses de mérite, des aides à la mobilité internationale, ou des transports gratuits ou très réduits pour les étudiants boursiers. La région Île-de-France, par exemple, propose le Pass Navigo avec une réduction de 50% pour les étudiants boursiers.

Pour connaître les aides spécifiques de sa région, la consultation du site web du conseil régional et du CROUS régional est le point de départ. Certaines villes universitaires — notamment les grandes métropoles — proposent également des aides municipales complémentaires : accès gratuit aux bibliothèques et musées, tarifs réduits dans les piscines et équipements sportifs, aides aux jeunes en insertion.

## Les aides de la FNAU et des fondations privées

Les fondations privées, fondations d'entreprises et associations caritatives constituent un écosystème d'aide complémentaire souvent méconnu des étudiants en difficulté. La Fondation de France coordonne l'attribution de plusieurs centaines de bourses privées chaque année pour des étudiants dans des situations de précarité ou poursuivant des cursus spécifiques. Les grandes entreprises françaises (Total, LVMH, Dassault, etc.) ont leurs propres fondations qui attribuent des bourses à des étudiants méritants ou en situation difficile.

La recherche de ces bourses privées peut se faire via des plateformes dédiées comme CentreDeDocumentation.fondationdefrance.org ou des sites agrégateurs comme Viadys. Il est important de ne rechercher que les bourses accessibles dans sa situation spécifique (filière, nationalité, région) pour optimiser le temps investi dans les candidatures.
`;

const L5 = `# La CAF et les allocations logement pour étudiants : tout savoir

La Caisse d'Allocations Familiales (CAF) est l'un des organismes les plus importants pour les étudiants qui vivent en France de façon semi-indépendante. Ses aides — principalement les allocations logement et la Prime d'Activité — peuvent représenter une aide mensuelle significative qui allège considérablement le budget de vie. Comprendre comment la CAF fonctionne, quelles aides elle propose, et comment les demander est une compétence administrative fondamentale pour tout étudiant en France.

## Les différentes prestations logement de la CAF

La CAF propose trois types d'aides au logement dont les conditions d'éligibilité sont légèrement différentes. L'Aide Personnalisée au Logement (APL) est destinée aux logements conventionnés — résidences sociales, logements HLM, résidences étudiantes conventionnées. L'Allocation de Logement Sociale (ALS) couvre les logements non conventionnés pour les ménages sans enfants. L'Allocation de Logement Familiale (ALF) est destinée aux ménages avec enfants ou certaines situations familiales spécifiques. Pour la plupart des étudiants en location classique, c'est l'ALS ou l'APL qui sera applicable selon la nature du logement.

Les montants des aides au logement de la CAF ont été réformés en 2021 avec la mise en place des "APL en temps réel" : les aides sont désormais recalculées automatiquement chaque trimestre en fonction des revenus déclarés lors des trimestres précédents, sans nécessité de déclaration spécifique. Ce mécanisme de recalcul automatique est à la fois pratique et potentiellement piégeant — un étudiant dont les revenus augmentent temporairement (job étudiant l'été) peut voir son aide réduite voire suspendue si ces revenus dépassent les seuils.

## Comment calculer son aide potentielle avant de déménager

Avant de signer un bail, calculer l'aide au logement potentielle via le simulateur CAF (simulateurcaf.cnaf.fr) permet de connaître le montant de l'aide mensuelle attendue et donc de calculer le reste à charge réel. Ce simulateur est relativement précis — il prend en compte le lieu de résidence, le montant du loyer, la situation familiale et les revenus pour donner une estimation. Les données du simulateur sont basées sur les mêmes algorithmes que ceux utilisés pour le calcul réel de l'aide.

Cette simulation préalable est particulièrement utile pour comparer différents logements — un appartement à 700 euros avec APL attendue de 200 euros coûte effectivement moins cher (500 euros de reste à charge) qu'un logement à 600 euros sans éligibilité à l'APL. La prise en compte de l'aide attendue dans le calcul du budget logement réel est donc indispensable pour une comparaison équitable entre différentes options de logement.

## Les démarches pour ouvrir ses droits à la CAF

La demande d'aide au logement à la CAF se fait en créant un compte sur caf.fr et en complétant le formulaire de demande d'APL ou d'ALS selon le type de logement. Les documents nécessaires incluent le contrat de bail (ou attestation de loyer), le dernier avis d'imposition (ou déclaration sur l'honneur d'absence de revenus), les coordonnées bancaires (IBAN) pour le virement des aides, et un justificatif d'identité. Les étudiants étrangers doivent également fournir leur titre de séjour valide.

La CAF dispose généralement d'un délai de traitement de deux à quatre semaines pour les nouvelles demandes. Les aides sont versées rétroactivement au mois de la demande — une demande effectuée en septembre permettra de percevoir l'aide de septembre même si le premier virement n'intervient qu'en octobre ou novembre. Utiliser dès que possible après l'emménagement est donc important pour optimiser les droits.

## Les pièges liés aux aides CAF et comment les éviter

Plusieurs situations courantes créent des complications dans le traitement des aides CAF et peuvent conduire à des trop-perçus qui doivent être remboursés. Le premier piège est l'oubli de déclarer un changement de situation — déménagement, changement de loyer, modification des revenus, entrée en colocation. Tout changement de situation doit être déclaré à la CAF dans les deux mois suivant le changement, sous peine de trop-perçu.

Le deuxième piège est la colocation sans déclaration individuelle. En colocation, chaque colocataire doit déclarer sa propre situation et son propre loyer (sa quote-part du loyer total) à la CAF. Si plusieurs colocataires déclarent l'intégralité du loyer par erreur, cela crée une anomalie qui peut bloquer le traitement des dossiers ou générer des alertes de contrôle. La bonne pratique est de déclarer uniquement sa quote-part du loyer, calculée proportionnellement au nombre de personnes dans le logement.

## Les retenues sur aides et les dettes CAF

Les indus CAF — sommes versées en trop qui doivent être remboursées — sont une réalité courante qui peut créer des difficultés financières importantes pour les étudiants. Quand la CAF découvre qu'une aide a été versée à tort ou en excès (suite à un changement de situation non déclaré, une erreur de calcul, ou une fraude), elle envoie une notification de remboursement et peut retenir les aides futures jusqu'à remboursement intégral de l'indu. Pour les étudiants avec des ressources très limitées, devoir rembourser plusieurs centaines ou milliers d'euros à la CAF tout en ne percevant plus les aides peut créer une spirale financière difficile.

Si vous recevez une notification d'indu que vous estimez injustifiée ou que vous ne pouvez pas rembourser immédiatement, contacter la CAF pour demander un plan de remboursement échelonné est la démarche recommandée. La CAF accepte généralement des plans de remboursement adaptés à la situation financière du demandeur, avec des mensualités réduites pour les personnes aux revenus très modestes.
`;

const L6 = `# Budgets réalistes et simulateurs pour étudiants en France

Établir un budget réaliste est la première étape pour gérer efficacement ses finances en tant qu'étudiant en France. Un budget bien construit — qui intègre toutes les dépenses réelles et toutes les sources de revenus — permet d'identifier les marges de manœuvre, d'anticiper les tensions financières, et de prendre des décisions éclairées sur ses modes de vie et de consommation.

## Les composantes d'un budget étudiant réaliste en France

Un budget étudiant complet se décompose en plusieurs catégories de dépenses. Le logement est généralement la dépense la plus importante, représentant 40 à 60% du budget total selon la ville et le type de logement. Pour un étudiant qui vit dans un studio à Paris, le loyer peut représenter à lui seul 700 à 1 000 euros par mois. Pour un étudiant en résidence CROUS en province, le loyer peut se situer entre 200 et 400 euros, laissant une plus grande marge pour les autres dépenses.

L'alimentation représente la deuxième dépense principale — un étudiant qui mange exclusivement à domicile peut s'en tirer avec 150 à 250 euros par mois pour une alimentation raisonnée, en utilisant les marchés et les promotions des supermarchés. Les transports varient selon la situation géographique — dans les villes avec un bon réseau de transports en commun, un abonnement mensuel de 30 à 90 euros peut suffire. Les dépenses de santé, les frais de scolarité, les fournitures académiques (livres, matériel), les loisirs et les communications (téléphone, internet) complètent le tableau des dépenses.

## Les simulateurs budgétaires officiels

Plusieurs simulateurs officiels permettent d'estimer ses droits et de mieux planifier son budget. Le simulateur mésalliances (mesalliances.fr) de l'Observatoire Étudiant permet de calculer l'ensemble des aides financières auxquelles on a droit en fonction de sa situation. Le simulateur de la CAF (simulateurcaf.cnaf.fr) calcule l'aide au logement potentielle. Le simulateur de bourses du CROUS (messervices.etudiant.gouv.fr) permet d'estimer l'échelon de bourse auquel on peut prétendre.

Pour les impôts, le simulateur impots.gouv.fr permet de calculer son impôt sur le revenu potentiel si on a perçu des revenus pendant l'année. Ce simulateur est utile non seulement pour anticiper une éventuelle imposition, mais aussi pour obtenir l'estimation de revenus fiscaux nécessaire à plusieurs demandes d'aide.

## Construire son budget mensuel étape par étape

La construction d'un budget mensuel équilibré commence par le recensement exhaustif de toutes les sources de revenus fixes et variables. Les sources fixes incluent les bourses du CROUS (versées mensuellement sur 10 mois), les aides au logement de la CAF, les virements familiaux réguliers si applicable, et les revenus d'un emploi à temps partiel régulier. Les sources variables incluent les revenus d'emplois occasionnels, les bourses ponctuelles, les cadeaux familiaux.

La seconde étape est le recensement des dépenses fixes mensuelles — loyer avec les charges locatives (eau, électricité, internet si non inclus), abonnement téléphonique, abonnement transport, mutuelle santé. Ces dépenses sont incompressibles et doivent être couvertes en priorité par les revenus fixes. La troisième étape est l'évaluation des dépenses variables — alimentation, loisirs, vêtements, frais médicaux imprévus. Un budget hebdomadaire pour les dépenses variables, avec un suivi au quotidien via une application (Linxo, Bankin', ou même un simple tableau), permet de rester dans les clous.

## Les applications de budget gratuites recommandées

La gestion budgétaire quotidienne est facilitée par des applications mobiles qui s'interfacent directement avec les comptes bancaires pour catégoriser automatiquement les dépenses. Bankin' est l'une des applications les plus populaires en France — elle se connecte à plus de 300 banques françaises, catégorise les transactions automatiquement, affiche l'historique des dépenses par catégorie, et envoie des alertes quand les dépenses dépassent les budgets définis. L'offre de base est gratuite.

Linxo, également très utilisé en France, propose des fonctionnalités similaires avec une interface utilisateur appréciée pour sa clarté. Pour les personnes réticentes à connecter leur banque à une application tierce, un tableau Google Sheets simple — avec les colonnes Date, Description, Catégorie, Montant — permet de suivre les finances manuellement avec une efficacité satisfaisante. L'important est de choisir la méthode qu'on utilisera réellement, pas celle qui semble la plus sophistiquée.

## Les stratégies pour équilibrer son budget en situation tendue

Quand le budget est tendu — ce qui est fréquent en période d'études — plusieurs stratégies permettent de réduire les dépenses sans compromettre la qualité de vie. La première est l'audit des abonnements — identifier les abonnements mensuels actifs (streaming, presse, apps) et supprimer ceux qui ne sont pas utilisés régulièrement. Un étudiant peut facilement avoir cinq à dix euros d'abonnements mensuels oubliés qui représentent 60 à 120 euros d'économies annuelles facilement réalisables.

La seconde stratégie est la mutualisation des dépenses avec d'autres étudiants — partage d'abonnements streaming autorisé (Netflix profil famille, Spotify duo), groupes d'achats alimentaires en commun, covoiturage pour les déplacements. La troisième stratégie est l'optimisation des achats alimentaires — cuisiner en plus grande quantité et congeler, choisir les marques distributeurs en supermarchés, privilégier les légumes de saison moins chers, utiliser les applications anti-gaspillage comme Too Good To Go pour se nourrir à prix réduit avec les invendus des restaurants et boulangeries.

## Les ressources d'urgence en cas de crise budgétaire sévère

Malgré une bonne gestion budgétaire, des crises financières imprévues peuvent survenir. Pour ces situations, connaître les ressources d'urgence disponibles est indispensable. Les assistantes sociales du CROUS sont le premier point de contact en cas de détresse financière — elles peuvent orienter vers les aides d'urgence du CROUS, les épiceries solidaires, et d'autres ressources locales. Les associations étudiantes locales ont souvent des fonds de solidarité pour les situations d'urgence.

Les banques alimentaires locales (Banques Alimentaires, Restos du Cœur, Épiceries Solidaires) ne sont pas réservées aux personnes sans emploi — les étudiants en situation de précarité financière peuvent y accéder, sur présentation d'un justificatif de situation étudiant et d'une évaluation de ressources. Dépasser les résistances psychologiques à demander de l'aide est souvent la principale difficulté dans ces situations — pourtant, ces ressources existent précisément pour soutenir les personnes traversant des moments difficiles.
`;

await patch('d96c9d24-2b32-4fa0-9625-2217d74a7650', L1);
await patch('01449051-1879-46c9-96a5-ce20931ac76d', L2);
await patch('3c2044b9-79ea-470a-994a-94117071a70e', L3);
await patch('0f811457-418d-4a18-b647-d5882e0b1a80', L4);
await patch('d2d94fad-5d4d-45c8-a73b-4420bdb2a31d', L5);
await patch('2fab22b0-0b45-47b9-9322-fe943a74380e', L6);
