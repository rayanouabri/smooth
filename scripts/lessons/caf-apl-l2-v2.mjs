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

const APL2 = `# Logements éligibles et non éligibles à l'APL : tout ce que vous devez savoir avant de signer

Trouver un logement en France est déjà une aventure en soi pour un étudiant étranger. Entre les dossiers de candidature à constituer, les visites à organiser, les délais serrés et les arnaques à éviter, le processus entier mobilise beaucoup d'énergie. Dans ce contexte, beaucoup d'étudiants supposent que tous les logements locatifs sont automatiquement éligibles à l'Aide Personnalisée au Logement (APL) ou à une aide équivalente de la CAF. Cette supposition, bien que compréhensible, est incorrecte et peut mener à de mauvaises surprises. Certains logements n'ouvrent droit à aucune aide CAF, et d'autres imposent des démarches spécifiques pour valider l'éligibilité. Comprendre les critères qui déterminent si un logement est éligible à l'APL ou à l'ALS, savoir vérifier ce point avant de signer un bail, et connaître les recours disponibles si votre logement présente des problèmes de conformité est une compétence fondamentale pour tout étudiant en France. Cette leçon vous guide à travers tous les aspects de cette question avec la précision nécessaire pour prendre des décisions informées lors de votre recherche de logement.

## La notion de logement conventionné : une clé centrale pour comprendre l'APL

Pour comprendre pourquoi tous les logements ne donnent pas droit à l'APL, il faut commencer par maîtriser le concept de logement conventionné. Un logement conventionné est un logement dont le propriétaire ou le gestionnaire a signé une convention avec l'État ou avec un organisme agréé par l'État. Cette convention est un contrat bilatéral : d'un côté, l'État s'engage à permettre l'accès aux aides au logement pour les locataires de ce bien, de l'autre, le propriétaire s'engage à respecter certaines obligations, notamment des plafonds de loyer et des normes minimales de qualité et d'entretien du logement.

Cette logique contractuelle remonte à la loi fondatrice de 1977 qui a créé l'APL. À l'époque, le gouvernement cherchait à inciter les bailleurs à maintenir des loyers abordables en échange d'une garantie de solvabilité de leurs locataires (via l'aide de l'État). Ce système a bien fonctionné dans les premières décennies pour les grands bailleurs sociaux, mais a montré ses limites lorsque le parc locatif privé ordinaire est devenu la principale solution de logement pour les étudiants dans les grandes villes universitaires.

Concrètement, un logement conventionné est presque systématiquement un logement géré par un Office Public de l'Habitat (OPH), une Entreprise Sociale pour l'Habitat (ESH), une coopérative d'HLM ou un autre organisme de logement social. La quasi-totalité du parc HLM français est conventionné APL. Les résidences universitaires gérées par les CROUS entrent également dans cette catégorie. Certains bailleurs privés peuvent aussi conventionner leurs logements dans le cadre de programmes d'aide à la rénovation ou à l'investissement, mais cela reste minoritaire dans le parc locatif global.

## Ce que l'absence de conventionnement APL implique concrètement

Si votre logement n'est pas conventionné APL, vous ne pouvez pas percevoir l'APL. Cela ne signifie pas nécessairement l'absence totale d'aide au logement : dans la très grande majorité des cas, un logement non conventionné APL ouvre droit à l'Allocation de Logement à Caractère Social (ALS), dont le mode de calcul et les montants sont très proches de ceux de l'APL.

L'ALS a été créée précisément pour couvrir les locataires de logements non conventionnés. Du point de vue pratique d'un étudiant, la distinction entre APL et ALS est largement administrative : la démarche de demande est identique (via caf.fr), les délais de traitement sont similaires, les montants obtenus sont comparables, et dans les deux cas, l'aide est versée mensuellement par la CAF sur votre compte bancaire ou en tiers payant selon les arrangements. La CAF détermine automatiquement, pendant l'instruction de votre dossier, si vous avez droit à l'APL ou à l'ALS selon le statut de votre logement.

Il existe cependant des cas où un logement n'ouvre droit ni à l'APL ni à l'ALS. Ces situations sont moins fréquentes mais réelles et méritent d'être connues. Un logement qui ne respecte pas les critères légaux de décence (surface insuffisante, insalubrité avérée, absence de chauffage fonctionnel, présence de nuisibles) peut être refusé par la CAF pour le calcul d'une aide au logement. Un hébergement informel sans contrat de location légal est également inéligible. Enfin, certaines catégories spécifiques de logement (meublés de tourisme mis en pseudo-résidence principale, sous-locations non déclarées) peuvent poser problème lors de l'instruction du dossier.

## Les résidences CROUS : la garantie d'une aide APL maximale et simplifiée

Dans le contexte spécifique des étudiants, les résidences universitaires gérées par les CROUS constituent la forme la plus directe et la plus garantie d'accès à l'APL. Toutes les résidences CROUS sont conventionnées APL, sans exception. Cette garantie institutionnelle élimine toute question sur l'éligibilité : si vous résidez en CROUS, vous avez automatiquement droit à l'APL, pourvu que vous remplissiez les conditions personnelles de revenus et de résidence principale.

Le mécanisme pratique du versement APL en résidence CROUS est particulièrement simple. Le CROUS verse directement à la CAF les informations nécessaires à l'instruction de votre dossier. Une fois vos droits reconnus, la CAF verse l'APL en tiers payant directement à la résidence universitaire. Sur votre relevé de loyer mensuel, vous verrez le loyer brut (par exemple 380 euros) et la déduction de l'APL (par exemple 120 euros), et vous n'aurez à régler que la différence (260 euros dans cet exemple). Cette déduction automatique vous évite d'avoir à gérer les flux financiers et d'avancer des fonds en attente du versement CAF.

Les loyers CROUS sont encadrés par les pouvoirs publics. En 2024, les fourchettes vont de 200 euros par mois pour les chambres les plus basiques de 9 m² en province à 850 euros par mois pour les T2 dans les résidences parisiennes les mieux situées. La majorité des chambres standard se situent entre 230 et 420 euros selon la ville, la taille et les prestations. Ces loyers, déjà subventionnés, combinés à une APL de 80 à 130 euros, permettent des restes à charge parmi les plus bas du marché étudiant.

L'accès aux résidences CROUS passe par le système de demande de logement sociale estudiantine (DSE), intégré au Dossier Social Étudiant sur le portail Messervices.etudiant.gouv.fr. La demande est à effectuer entre janvier et mai pour une rentrée en septembre. Les attributions sont faites selon des critères de priorité sociale et de disponibilité dans les résidences demandées. Les listes d'attente peuvent être longues dans les grandes villes comme Paris ou Lyon, mais les résidences de province ont souvent plus de disponibilité.

## Les résidences étudiantes privées : une offre variée avec des éligibilités à vérifier

En dehors des CROUS, un marché important de résidences étudiantes privées s'est développé en France depuis les années 2000. Ces résidences, gérées par des entreprises spécialisées comme Nexity-Studéa, Cardinal Campus, Kley, Fac-Habitat, Arpège, Résidences étudiantes Unîtes et de nombreux autres acteurs, proposent des studios meublés avec des services collectifs inclus dans le loyer : connexion Internet haut débit, laverie en commun, salle commune équipée, espace de travail partagé, parfois une salle de sport, une piscine ou une cafétéria selon le standing de la résidence.

Ces résidences privées peuvent être conventionnées APL ou non, selon leur mode de financement et les conventions signées par leurs promoteurs avec l'État lors de leur construction. Une part significative de ces résidences a été construite avec des aides à l'investissement locatif Malraux, Robien ou Censi-Bouvard, qui impliquaient parfois des conventions d'aide au logement. D'autres sont entièrement privées et non conventionnées, mais ouvrent tout de même droit à l'ALS.

Pour connaître l'éligibilité d'une résidence privée spécifique à l'APL ou à l'ALS, le moyen le plus direct est d'interroger directement le gestionnaire ou le service administratif de la résidence. Toutes les grandes résidences étudiantes privées sont habituées à cette question et peuvent vous répondre immédiatement. Leur documentation commerciale (brochures, site internet) mentionne généralement «Éligible aide au logement» ou «APL/ALS sous conditions». Si aucune mention n'est faite des aides CAF dans les supports de la résidence, c'est un signal d'attention qui justifie une question directe avant de signer quoi que ce soit.

Les loyers dans les résidences privées sont significativement plus élevés qu'au CROUS. Pour un studio de 18 à 22 m² entièrement équipé dans une grande ville, les loyers varient typiquement de 600 à 900 euros à Paris, de 450 à 650 euros à Lyon ou Bordeaux, et de 380 à 520 euros dans des villes moyennes. Après déduction d'une ALS de 150 à 200 euros selon la localisation, le reste à charge reste substantiel et peut représenter 60 à 70 % du budget logement d'un étudiant.

## Le parc locatif privé ordinaire et l'ALS pour les baux non conventionnés

La solution la plus courante pour les étudiants qui ne trouvent pas de place en CROUS et souhaitent plus d'autonomie que dans une résidence étudiante est de louer un appartement ou un studio du marché locatif privé ordinaire via une agence immobilière, une plateforme comme SeLoger, PAP.fr ou Leboncoin, ou encore directement auprès de propriétaires. Ce segment du marché immobilier représente la majorité des logements disponibles à la location dans les grandes villes.

Dans le marché locatif privé ordinaire, les propriétaires individuels n'ont généralement pas signé de convention avec l'État. Leurs logements ne sont donc pas conventionnés APL. Cela ne veut pas dire que vous ne pouvez percevoir aucune aide au logement si vous louez dans ce type de logement : l'ALS (Allocation de Logement à Caractère Social) prend le relais et est calculée selon une formule quasi identique à l'APL. La CAF détermine automatiquement lors du traitement de votre dossier que c'est l'ALS qui s'applique à votre situation.

Pour bénéficier de l'ALS dans un logement privé, votre contrat de location doit impérativement être un bail écrit en bonne et due forme, conforme à la loi du 6 juillet 1989 sur les locations vides ou à la loi ALUR de 2014 pour les locations meublées. Un bail verbal ou une convention informelle d'hébergement ne suffit pas. La signature d'un contrat de location standardisé protège à la fois le locataire (contre les clauses abusives et les hausses de loyer illégales) et ouvre les droits aux aides CAF.

Le montant de l'ALS dans le parc privé peut être simulé à l'avance sur le simulateur en ligne de la CAF (caf.fr) avant même de signer le bail. Pour un studio de 25 m² à 600 euros de loyer à Bordeaux, par exemple, l'ALS potentielle pour un étudiant sans revenus sera d'environ 190 à 220 euros selon les paramètres exacts. Pour le même profil étudiant à Paris avec un loyer de 900 euros, l'ALS sera plafonnée à environ 250 euros car le loyer dépasse le loyer plafond de référence (le calcul se fait sur ce plafond et non sur le loyer réel). Ce plafonnement est important à intégrer dans vos calculs budgétaires.

## Les critères légaux de décence du logement

Pour qu'un logement soit éligible aux aides CAF, il doit respecter les critères légaux de décence définis par le décret n°2002-120 du 30 janvier 2002, modifié depuis pour intégrer de nouvelles exigences liées à la performance énergétique. Ces critères constituent le minimum légal en dessous duquel un logement ne peut pas être loué à titre de résidence principale.

La surface minimale est fixée à 9 m² pour une personne seule, avec une hauteur sous plafond d'au moins 2,20 m, ce qui doit représenter un volume habitable d'au minimum 20 m³. Un logement sous ces seuils est qualifié de «indécent» et ne peut légalement pas être loué. Si votre logement est manifestement en dessous de cette surface, vous ne pourrez probablement pas percevoir d'aide CAF pour ce logement, et votre propriétaire s'expose à des sanctions légales.

Le logement doit être équipé d'une installation permettant de chauffer le logement de manière suffisante. L'absence totale de chauffage ou un système de chauffage manifestement insuffisant pour un logement de la taille annoncée constitue un critère de non-décence. Dans les contextes climatiques français, particulièrement dans les régions où les hivers sont froids (Alsace, Alpes, Massif Central, Nord), un chauffage fonctionnel est une exigence absolue.

Les installations sanitaires comprennent obligatoirement des toilettes en bon état de fonctionnement, un dispositif de douche ou de baignoire, et un accès à de l'eau courante chaude et froide. L'absence de l'un de ces éléments constitue un critère de non-décence. Un logement qui présente des infiltrations d'eau importantes, une infestation de nuisibles (rats, souris, cafards, punaises de lit) ou des moisissures étendues dues à un problème structurel (pas simplement à un manque d'aération du locataire) est également considéré comme non décent.

Depuis 2023, une nouvelle exigence de performance énergétique minimale a été progressivement intégrée dans les critères de décence. Les logements classés G+ (les plus énergivores de la classe G) ont été interdits à la location dans les nouvelles signatures de bail depuis janvier 2023, et l'interdiction est étendue progressivement aux autres tranches de la classe G puis à la classe F dans les prochaines années. Cette réforme vise à éliminer du marché locatif les «passoires thermiques» qui rendent les logements inconfortables en hiver et génèrent des charges d'énergie prohibitives pour les locataires les plus modestes.

## La colocation : droits spécifiques et partage des aides CAF

La colocation est une pratique très répandue parmi les étudiants. Elle permet de réduire le coût individuel du logement en partageant un appartement plus grand entre deux, trois ou quatre personnes. Sur le plan des aides au logement, la colocation obéit à des règles spécifiques qu'il est important de comprendre avant de s'engager.

Dans le cas le plus fréquent où tous les colocataires figurent sur un bail unique (un seul contrat de location avec plusieurs co-preneurs), chaque colocataire peut faire une demande d'aide au logement distincte et individuelle auprès de la CAF. Chaque demandeur déclare sa part effective du loyer total : si quatre colocataires partagent un appartement loué 1 200 euros par mois, chacun déclare 300 euros de loyer. La CAF calcule alors l'aide de chacun sur la base de cette part individuelle. En pratique, une aide de 100 à 130 euros par colocataire est fréquente dans ce type de configuration en zone II, ce qui représente une contribution individuelle de 33 à 43 % du loyer individuel payé.

Il existe également des colocations avec des baux individuels, où chaque colocataire signe son propre contrat séparé avec le propriétaire pour sa chambre ou son espace attitré, avec des parties communes partagées. Dans ce cas, chaque colocataire fait sa demande d'aide au logement sur la base de son propre loyer individuel stipulé dans son bail. La CAF traite chaque dossier indépendamment comme s'il s'agissait d'une location standard.

Attention aux colocations informelles où un seul locataire principal sous-loue des chambres à des colocataires sans en informer le propriétaire et sans baux écrits. Dans cette configuration, les «sous-locataires» de facto ne peuvent pas faire de demande d'aide au logement à la CAF car ils ne disposent pas d'un contrat de location régulier. De plus, cette situation de sous-location non autorisée est souvent un motif de résiliation du bail par le propriétaire, si elle est découverte.

## Situations atypiques et logements particuliers

Au-delà des catégories classiques (CROUS, résidences privées, location individuelle, colocation), les étudiants peuvent se trouver dans des situations de logement atypiques qu'il est utile de connaître du point de vue des aides CAF.

L'hébergement chez les parents ou chez un proche à titre gratuit n'ouvre droit à aucune aide CAF car il ne constitue pas une relation locative. C'est la situation la plus fréquente dans laquelle un étudiant croit naïvement pouvoir faire une demande d'APL : parce qu'il «vit» dans un logement, il pense être éligible. Mais sans loyer payé et sans bail écrit, il n'y a pas de base légale pour une aide au logement.

Le logement chez une famille d'accueil dans le cadre d'une convention de hébergement familial peut, dans certains cas, créer une situation assimilable à une location si une contrepartie financière formelle est prévue. Des organismes spécialisés dans les familles d'accueil étudiantes (comme les associations de logement intergénérationnel) formalisent ces arrangements avec de vrais contrats et des loyers modiques, ce qui ouvre droit à l'ALS selon les conditions habituelles.

Les logements foyers (comme les foyers de jeunes travailleurs ou certains internats) ont un statut particulier. Certains ouvrent droit à l'APL ou à l'ALS, d'autres non. Les conditions varient selon le type de structure et les conventions signées avec les pouvoirs publics. Si vous résidez dans ce type de structure, renseignez-vous directement auprès du gestionnaire et de votre CAF.

## Témoignages de situations réelles

**Léa Fontaine, 20 ans, en DUT informatique, venue du Canada** : «Avant de signer mon bail pour un T1 de 25 m² à Grenoble à 620 euros, j'avais simulé mon ALS sur caf.fr : 192 euros par mois estimés. En réalité j'ai touché 185 euros, légèrement différent. Mais j'avais bien anticipé mon budget. La CAF a récupéré les informations directement avec mon propriétaire pour l'attestation de loyer, je n'ai eu qu'à fournir mon titre de séjour et mon RIB.»

**Seun Adeyemi, 22 ans, en master d'économie, venu du Nigeria** : «J'ai failli louer une chambre de 8 m² à Paris — en dessous du minimum légal. Le propriétaire ne le savait pas ou faisait semblant de ne pas le savoir. Quand j'ai demandé l'aide CAF, elle a été refusée car le logement ne respectait pas les critères de décence. J'ai dû déménager rapidement. Depuis, je vérifie systématiquement la surface réelle avant de visiter.»

## Questions fréquentes sur l'éligibilité des logements

**Q : Comment savoir si un logement que je visite est conventionné APL avant de le louer ?**
La manière la plus simple est de demander directement au propriétaire ou à l'agence si le logement est éligible aux aides CAF. La grande majorité des propriétaires le savent. Si le propriétaire ne le sait pas ou n'est pas sûr, vous pouvez utiliser le simulateur en ligne de la CAF (caf.fr) avec les informations du logement pour une estimation, bien que cela ne soit pas une confirmation officielle d'éligibilité. La confirmation officielle ne vient qu'après l'instruction de votre dossier une fois le bail signé.

**Q : Puis-je toucher une aide au logement si je loue en meublé chez un particulier, sans agence ?**
Oui, à condition que vous ayez un contrat de location meublée écrit en bonne et due forme, conforme à la législation de la loi ALUR 2014 pour les locations meublées. Ce contrat doit indiquer la durée (un an renouvelable, ou 9 mois non renouvelable pour les étudiants), le montant du loyer, les charges incluses, la surface, et doit être signé par les deux parties. Un simple échange de messages ou un accord verbal ne suffit pas pour la CAF.

**Q : Mon propriétaire peut-il s'opposer à ma demande d'aide au logement ?**
Non, votre propriétaire ne peut pas s'opposer légalement à votre demande d'aide au logement si vous respectez les conditions légales. Il peut refuser le tiers payant (que la CAF verse directement à lui), mais cela ne vous prive pas de l'aide — cel le sera versée sur votre propre compte bancaire et vous la reverrez à votre propriétaire avec le loyer. Un propriétaire qui impose «pas d'aide CAF» comme condition d'accès au logement pratique une discrimination illégale, que vous êtes en droit de signaler à l'ADIL de votre département.

**Q : L'aide au logement couvre-t-elle les charges locatives en plus du loyer ?**
Non. L'APL et l'ALS sont calculées sur la base du loyer nu uniquement (ou du loyer avec charges si le bail est à loyer charges comprises, dans ce cas le loyer retenu pour le calcul est artificiellement plafonné). Les charges locatives (eau, chauffage collectif, entretien des parties communes, ordures ménagères) payées séparément en sus du loyer nu ne sont pas prises en compte dans le calcul de l'aide.

**Q : Mon logement est une chambre dans une maison avec un propriétaire qui y habite aussi (chambre chez l'habitant). Ai-je droit à l'ALS ?**
Oui, potentiellement, si vous avez un contrat de location en bonne et due forme, même si vous partagez la maison avec votre propriétaire. La clé est l'existence d'un contrat légal et d'un loyer formalisé. Certaines organisations comme le réseau Cohabilis (logement intergénérationnel) ou Hébergement Étudiant proposent des modèles de contrats adaptés à cette situation. Avec ce contrat en main, vous pouvez faire une demande d'ALS à la CAF dans les conditions habituelles.

**Q : Que faire si j'emménage dans un logement qui s'avère être indécent après mon emménagement ?**
Vous avez plusieurs recours. D'abord, signalez les problèmes à votre propriétaire par lettre recommandée avec accusé de réception, en lui demandant de réaliser les travaux de mise aux normes dans un délai raisonnable. Si le propriétaire ne réagit pas, vous pouvez signaler la situation à la CAF (qui peut suspendre le versement de l'APL/ALS au propriétaire), à la mairie (qui dispose d'un pouvoir d'injonction pour les logements insalubres), ou à l'ADIL pour un conseil juridique gratuit. En cas d'insalubrité grave et urgente, vous pouvez saisir le préfet de département pour déclencher une procédure d'urgence.

**Q : Est-il possible de cumuler aide au logement et garantie Visale ?**
Oui, tout à fait. La garantie Visale d'Action Logement est une caution locative gratuite qui garantit le paiement des loyers au propriétaire en cas de défaillance du locataire. Elle s'adresse aux étudiants de moins de 30 ans et aux jeunes salariés. Elle ne génère aucun revenu pour vous mais facilite l'accès au logement en vous évitant d'avoir à trouver un garant. Elle est parfaitement compatible et cumulable avec l'APL ou l'ALS de la CAF.

## Ressources officielles

- [caf.fr – Simulateur d'aide au logement](https://wwwd.caf.fr/wps/portal/caffr/simulateuralgapl) : Testez l'éligibilité et estimez le montant avant de signer votre bail
- [service-public.fr – Logement décent](https://www.service-public.fr/particuliers/vosdroits/F10798) : Les critères légaux de décence d'un logement et vos recours
- [visale.fr](https://www.visale.fr) : La garantie locative gratuite d'Action Logement pour les étudiants et jeunes actifs
- [anil.org – Trouver son ADIL](https://www.anil.org/lanil-et-les-adil/votre-adil) : Conseil juridique et financier gratuit sur le logement dans chaque département
`;

await patch('3c19d39d-1a36-498f-9d8a-1c4ae1a5d9d1', APL2);
