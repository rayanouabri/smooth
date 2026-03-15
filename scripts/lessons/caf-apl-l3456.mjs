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

// L3 : Suspensions, remboursements et fraude
const APL3 = `# Suspensions, remboursements et fraude à l'APL : tout ce qu'il faut savoir

Recevoir l'APL ou l'ALS chaque mois de la CAF représente une aide précieuse, souvent indispensable à l'équilibre du budget étudiant. Mais ce versement mensuel n'est pas garanti indéfiniment et peut être suspendu, révisé à la baisse ou transformé en dette si certaines conditions ne sont plus remplies ou si des informations ont été transmises incorrectement à la CAF. Comprendre les mécanismes de suspension de l'aide, les situations qui génèrent des trop-perçus à rembourser, et les frontières légales qui séparent une erreur administrative d'une fraude aux prestations sociales est une connaissance fondamentale pour tout bénéficiaire de l'APL. Cette leçon détaille chacune de ces situations avec précision, pour que vous puissiez gérer votre dossier CAF de manière rigoureuse et éviter les difficultés financières liées à des remboursements imprévus.

## Les principales causes de suspension de l'APL

La CAF peut suspendre le versement de l'APL pour plusieurs raisons, certaines liées à votre situation personnelle, d'autres liées à votre logement ou à votre comportement administratif. Connaître ces causes de suspension permet d'anticiper et d'éviter les interruptions de versement.

La non-déclaration d'un changement de situation est la première cause de suspension. Vous êtes légalement obligé de signaler à la CAF tout changement affectant votre droit ou le montant de l'aide dans un délai de deux mois suivant ce changement. Un déménagement, une modification du loyer, une mise en couple, un changement de revenus significatif, la fin de vos études, un emploi salarié qui débute : tous ces événements doivent être déclarés via votre espace Mon Compte sur caf.fr. La CAF vérifie régulièrement la cohérence des informations qu'elle détient sur vous, et si elle détecte une incohérence (un loyer qui ne correspond plus à celui déclaré, un logement que vous avez quitté mais continuez à déclarer comme résidence principale), elle peut suspendre les versements et demander des justificatifs.

La non-transmission de vos pièces justificatives lors d'une demande de renouvellement ou d'une mise à jour est une autre cause fréquente de suspension. La CAF envoie des demandes de documents par e-mail ou par courrier à intervalles réguliers pour vérifier que votre situation n'a pas évolué. Si vous ne répondez pas à ces demandes dans les délais indiqués, la CAF suspend les versements jusqu'à réception des documents demandés. Les versements suspendus sont généralement rattrapés rétroactivement une fois les documents reçus et validés.

La non-transmission de la déclaration de ressources annuelle est une cause particulièrement fréquente. Chaque année, la CAF envoie un e-mail ou un courrier pour vous demander de compléter votre déclaration annuelle de ressources sur votre espace Mon Compte. Cette déclaration, qui consiste à confirmer ou mettre à jour vos revenus, est obligatoire même si vos revenus sont nuls. Si vous ne la complétez pas dans le délai indiqué (généralement entre mars et juillet), la CAF cesse les versements jusqu'à régularisation. Pour les étudiants qui oublient parfois de surveiller leur espace CAF, activer les notifications e-mail depuis votre compte caf.fr est fortement recommandé.

## Qu'est-ce qu'un trop-perçu d'APL et comment ça arrive ?

Un trop-perçu est une somme d'argent que vous avez reçue de la CAF sous forme d'APL mais à laquelle vous n'aviez pas droit, ou qui dépassait le montant réel auquel vous étiez éligible pendant la même période. La CAF est légalement tenue de récupérer ces sommes, et vous avez l'obligation de les rembourser.

Les situations les plus courantes générant un trop-perçu sont les suivantes. Vous ne signalez pas rapidement une augmentation de revenus (un job étudiant qui repasse un seuil significatif, un stage rémunéré de plusieurs mois, une bourse supplémentaire). Vos revenus augmentent, mais votre APL continue à être versée sur la base des anciens revenus inférieurs. Quelques mois plus tard, lors de la réévaluation périodique, la CAF s'aperçoit de la différence et calcule le montant versé en trop.

Vous ne signalez pas un déménagement immédiatement. Vous quittez votre logement le 15 mai mais continuez à recevoir l'APL pour mai et juin car vous avez oublié de déclarer votre départ. Les deux mois d'APL versés après votre départ constituent un trop-perçu intégral.

Vous vous mettez en couple et ne le déclarez pas. La mise en couple avec une personne ayant des revenus plus élevés peut réduire significativement votre APL. Si vous ne la déclarez pas, vous continuez à recevoir le montant individuel alors que le montant pour un couple aux revenus combinés serait moindre.

La CAF possède des outils de croisement de données avec d'autres administrations (URSSAF, Pôle emploi, impôts) qui lui permettent de détecter des incohérences avec les informations que vous avez déclarées. Ces croisements sont de plus en plus fréquents et automatisés, ce qui rend les trop-perçus non déclarés de plus en plus difficiles à maintenir indétectés sur le long terme.

## Comment le remboursement d'un trop-perçu fonctionne-t-il ?

Quand la CAF détecte un trop-perçu, elle vous en informe par courrier recommandé ou par notification sur votre espace Mon Compte, avec le détail des sommes concernées, la période couverte et le motif. Ce document, appelé «notification d'indus» (indu = somme indûment versée), précise le montant total à rembourser.

Vous disposez d'un délai pour contester cette notification si vous pensez qu'elle est erronée. Si vous estimez que le trop-perçu est justifié, vous pouvez demander un plan de remboursement étalé dans le temps. La CAF est généralement ouverte à des plans de remboursement adaptés à votre situation financière, pouvant s'étaler sur plusieurs mois ou années pour des montants importants. Pour les étudiants en grande difficulté financière, une demande de remise gracieuse totale ou partielle peut être adressée à la Commission de Recours Amiable (CRA) de la CAF.

La méthode la plus courante de remboursement est la compensation : si vous avez toujours droit à l'APL au moment où le trop-perçu est constaté, la CAF prélève automatiquement une partie du trop-perçu sur vos versements futurs jusqu'à remboursement total. Vous continuez à recevoir l'APL mais à un montant réduit. Cette compensation automatique est signalée dans votre notification et sur votre espace Mon Compte.

Si vous n'avez plus droit à l'APL (parce que vous avez déménagé ou que vos revenus ne permettent plus l'aide), la CAF vous demandera un remboursement direct, soit en un seul versement soit selon un échéancier négocié. En cas de non-paiement, la CAF peut solliciter d'autres organismes avec lesquels vous avez des relations (par exemple Pôle emploi si vous êtes demandeur d'emploi) pour récupérer les sommes dues.

## Les fraudes à l'APL : définition, conséquences et prévention

Les fraudes aux prestations sociales, et en particulier aux aides au logement, font l'objet d'une surveillance croissante par la CAF. La fraude se distingue de l'erreur ou de l'oubli par un élément intentionnel : vous savez que l'information que vous déclarez est inexacte et vous la déclarez quand même dans le but de percevoir une aide à laquelle vous n'avez pas droit ou un montant supérieur au droit réel.

Les fraudes les plus courantes à l'APL incluent la déclaration d'un logement fictif (vous déclarez un logement comme résidence principale alors que vous n'y habitez pas vraiment, parfois avec complicité d'un propriétaire qui perçoit le tiers payant), la déclaration d'un loyer surévalué (vous déclarez un loyer de 700 euros alors que votre bail réel est à 550 euros, ce qui augmente artificiellement votre APL), la déclaration d'une fausse composition de foyer (vous vous faites passer pour seul alors que vous vivez en couple pour bénéficier d'une aide calculée sur les revenus d'une seule personne), et la non-déclaration intentionnelle de revenus significatifs.

Les conséquences d'une fraude avérée à l'APL sont sévères et vont bien au-delà du simple remboursement des sommes perçues. La CAF peut appliquer un abattement ou une pénalité financière de 20 à 100 % du montant fraudé en sus du remboursement. Dans les cas les plus graves, la fraude peut faire l'objet d'un dépôt de plainte pénale pour escroquerie ou faux en écriture publique, passible jusqu'à 5 ans d'emprisonnement et 375 000 euros d'amende selon les dispositions du Code pénal. Une condamnation pour fraude aux prestations sociales entraîne généralement une exclusion du bénéfice de toutes les prestations CAF pour une durée déterminée.

Pour les étudiants internationaux, une condamnation pour fraude aux prestations sociales peut également avoir des conséquences sur leur droit au séjour en France, car les préfectures prennent en compte le respect des lois lors du renouvellement des titres de séjour.

## Témoignages sur des situations de régularisation

**Pauline Joubert, 21 ans, en licence d'économie** : «J'ai trouvé un job d'été bien rémunéré et j'ai oublié de le déclarer à la CAF. Trois mois plus tard, j'ai reçu une notification d'indu pour 312 euros. La CAF a prélevé automatiquement 50 euros par mois sur mes versements d'APL suivants pendant 6 mois. C'était pénible mais c'était ma faute. Depuis, je déclare tout changement dès la première semaine.»

**Romain Dubois, 23 ans, en master d'informatique** : «Je me suis mis en couple et on a emménagé ensemble. J'ai déclaré le changement à la CAF mais avec 6 semaines de retard. La CAF a recalculé mes droits rétroactivement et créé un indu de 210 euros sur les 6 semaines de retard. L'indu a été remboursé via compensation sur mes versements suivants.»

## Questions fréquentes sur les suspensions et remboursements

**Q : Que faire si je reçois une notification d'indu d'APL que je pense injustifiée ?**
Vous avez le droit de contester la notification dans un délai de 2 mois à compter de sa date d'envoi. Envoyez un courrier à la Commission de Recours Amiable de votre CAF, en expliquant pourquoi vous contestez le montant et en fournissant tous les documents justificatifs à l'appui. La CRA dispose de plusieurs semaines pour réexaminer votre dossier et vous communiquer sa décision. Si la CRA confirme l'indu et que vous maintenez votre contestation, vous pouvez saisir le tribunal judiciaire compétent.

**Q : Mon APL a été suspendue. Comment la faire reprendre ?**
Connectez-vous à votre espace Mon Compte sur caf.fr. La plupart du temps, un message ou une notification vous explique la raison de la suspension et les documents à fournir. Téléversez les documents demandés depuis la rubrique «Envoyer des documents» de votre espace. La CAF traitera votre dossier dans les prochains jours à semaines et reprendra les versements rétroactivement si la suspension était liée à un manque de documents.

**Q : Si je méconnais une règle et perçois un trop-perçu sans intention frauduleuse, risqué-je des poursuites pénales ?**
Non, l'erreur non intentionnelle n'est pas constitutive d'une fraude. La CAF distingue les situations d'erreur, d'omission, de négligence et de fraude intentionnelle. Pour les erreurs et omissions, la réponse est le remboursement du trop-perçu sans pénalité supplémentaire dans la plupart des cas. Les poursuites pénales sont réservées aux fraudes avérées avec intention délibérée et montant significatif.

**Q : Mon APL peut-elle être suspendue si mon propriétaire ne paie pas ses charges ?**
Si votre APL est versée en tiers payant directement à votre propriétaire, et que la CAF découvre que votre propriétaire n'a pas rempli ses obligations (par exemple, en cas d'insalubrité avérée refusant d'entreprendre les travaux), la CAF peut suspendre le versement de l'aide au propriétaire et vous verser directement l'aide, vous permettant de la retenir sur votre loyer prochains. Cette situation est gérée cas par cas.

## Ressources officielles

- [caf.fr – Mon Compte](https://www.caf.fr) : Espace personnel pour déclarer un changement et gérer votre dossier
- [service-public.fr – Trop-perçu CAF](https://www.service-public.fr/particuliers/vosdroits/F2999) : Vos droits et obligations en cas de trop-perçu de prestations sociales
`;

await patch('486ce28a-10ab-4c88-80c8-e4e44122713f', APL3);

// L4 : Conditions pour les étudiants étrangers
const APL4 = `# Conditions d'éligibilité à l'APL pour les étudiants étrangers en France

Parmi les questions les plus fréquemment posées par les étudiants internationaux à propos des aides au logement en France, les conditions d'accès spécifiques aux ressortissants étrangers occupent une place importante. La France applique des règles d'égalité de traitement pour les ressortissants de l'Union européenne, de l'Espace Économique Européen et de la Suisse, mais des exigences supplémentaires pour les ressortissants d'autres pays. Cette complexité, parfois source de confusion et d'inquiétude pour les nouveaux arrivants, mérite une explication précise et structurée. Cette leçon couvre en détail tous les aspects de l'éligibilité à l'APL et à l'ALS selon votre nationalité, votre statut de séjour et votre situation familiale en France.

## Les ressortissants de l'Union européenne et de l'EEE : mêmes droits qu'un étudiant français

Pour les étudiants qui possèdent la nationalité d'un État membre de l'Union européenne (Allemagne, Belgique, Espagne, Italie, Portugal, Hongrie, Pologne, Roumanie, et tous les autres membres), ou d'un pays de l'Espace Économique Européen (Islande, Liechtenstein, Norvège) ou de la Suisse, les conditions d'éligibilité à l'APL et à l'ALS sont strictement identiques à celles applicables aux étudiants français. Il n'existe aucune discrimination légale entre ces ressortissants et les citoyens français en matière d'accès aux prestations sociales liées au logement.

Ces étudiants n'ont pas besoin de titre de séjour spécifique pour séjourner en France dans le cadre de leurs études, du fait de la libre circulation des personnes dans l'espace européen. Ils peuvent entrer, résider et étudier en France avec leur seule carte nationale d'identité ou passeport. Pour faire une demande d'APL, ils suivent la procédure standard sur caf.fr, en produisant leur pièce d'identité nationale comme justificatif de situation régulière sur le territoire. La CAF instruit leur dossier dans les mêmes délais et conditions que pour un étudiant français.

En pratique, les étudiants européens forment une part importante du public étudiant international en France, notamment via les programmes d'échange Erasmus. Pour les étudiants Erasmus en séjour de 6 à 12 mois, la question de l'APL se pose dans les mêmes termes que pour tout locataire de longue durée, à condition que le logement loué pour la durée de l'échange soit bien la résidence principale (et non un logement d'accueil informel).

## Les ressortissants hors Union européenne : la condition de régularité du séjour

Pour les étudiants ressortissants d'États hors UE/EEE/Suisse — ce qui couvre la majorité des étudiants internationaux, notamment ceux originaires d'Afrique (Maghreb, Afrique subsaharienne), d'Asie (Chine, Inde, Vietnam, Corée), d'Amérique latine (Brésil, Colombie, Mexique) et d'autres régions — une condition supplémentaire s'ajoute pour l'accès à l'APL et à l'ALS : la **régularité du séjour**.

La régularité du séjour signifie que vous devez séjourner légalement sur le territoire français en vertu d'un titre de séjour valide ou d'un document équivalent. Pour les étudiants non-européens, ce document est généralement le visa de long séjour valant titre de séjour (VLS-TS), délivré par les consulats français dans le pays d'origine avant l'arrivée en France, ou la carte de séjour temporaire portant la mention «étudiant», délivrée par la préfecture pour les séjours de plus d'un an.

La CAF exige la présentation de ce document lors de l'instruction de votre dossier. Si vous avez un VLS-TS validé en ligne sur le site etudes-en-france.fr ou via le portail de l'OFII (Office Français de l'Immigration et de l'Intégration), ce document suffit. Si votre titre de séjour est en cours de renouvellement et que vous avez un récépissé (un document provisoire délivré par la préfecture attestant que votre demande de renouvellement est en cours), la CAF accepte généralement ce récépissé comme justificatif de régularité pendant la durée de validité du récépissé.

## Le cas particulier des étudiants en attente de régularisation

Certains étudiants se trouvent dans une situation administrative délicate : leur premier titre de séjour est en cours d'obtention, leur dossier de renouvellement a pris du retard, ou leur situation administrative est incertaine pour d'autres raisons. Ces situations génèrent de l'anxiété compréhensible, notamment face à des besoins financiers immédiats comme le paiement du loyer.

La CAF ne peut pas accorder l'APL ou l'ALS à un étranger dont la situation de séjour n'est pas régularisée ou dont la régularité ne peut pas être justifiée par un document valide. Cependant, plusieurs nuances importantes méritent d'être connues. Si vous êtes en attente de renouvellement du titre de séjour et que vous disposez d'un récépissé de demande en cours, ce récépissé prouve votre présence légale sur le territoire pendant sa durée de validité. Soumettez ce document à la CAF avec une note expliquant votre situation : la CAF peut instruire votre dossier sur cette base et établir vos droits dès que le nouveau titre de séjour sera délivré.

Si votre situation administrative est plus complexe (demande d'asile en cours, changement de statut, procédure contentieuse avec la préfecture), l'accès à l'APL dépendra de votre statut exact. Les demandeurs d'asile ont un régime spécifique qui n'ouvre pas droit à l'APL standard, mais à l'Allocation pour Demandeurs d'Asile (ADA). Des associations spécialisées dans l'accueil et les droits des étrangers (CIMADE, France Terre d'Asile, Forum Réfugiés) peuvent vous orienter vers les aides auxquelles vous avez réellement droit selon votre statut précis.

## La durée de résidence en France : mythes et réalités

Une confusion fréquente circule parmi les étudiants étrangers : l'idée qu'il faudrait résider en France depuis plusieurs mois, voire plusieurs années, avant de bénéficier de l'APL. Cette confusion probablement vient d'un amalgame avec d'autres prestations sociales françaises qui imposent effectivement des durées minimales de résidence (le RSA, par exemple, exige 5 ans de résidence légale en France pour les ressortissants hors UE). Pour l'APL et l'ALS, il n'existe pas de condition de durée minimale de résidence en France. Un étudiant qui arrive en France en septembre et s'installe dans un logement éligible peut faire sa demande d'APL immédiatement, dès son emménagement.

La seule condition temporelle qui s'applique est que le logement doit constituer votre résidence principale, ce qui implique que vous l'occupez effectivement et de manière stable. Une occupation de quelques jours ou semaines ne suffit pas. Mais un contrat de location signé pour toute l'année universitaire qualifie clairement le logement de résidence principale dès le premier jour du bail.

## Nationalités avec des conventions bilatérales particulières

La France a signé des conventions bilatérales de sécurité sociale avec un grand nombre de pays, notamment avec la plupart des pays du Maghreb (Algérie, Maroc, Tunisie), plusieurs pays d'Afrique subsaharienne, le Canada, les États-Unis et d'autres nations. Ces conventions peuvent avoir un impact sur l'accès à certaines prestations sociales, mais pour les aides au logement de la CAF (APL et ALS), les conditions d'éligibilité ne sont généralement pas modifiées par ces conventions bilatérales. La condition principale reste la régularité du séjour.

Pour les ressortissants de pays ayant des accords spécifiques avec la France, notamment dans le cadre de programmes bilatéraux d'échanges universitaires, certains services spécifiques peuvent exister. Renseignez-vous auprès de votre service des relations internationales universitaire ou de l'ambassade de votre pays en France pour connaître les éventuels dispositifs spécifiques à votre nationalité.

## L'AFSIE et d'autres statuts particuliers

L'Aide à la Formation et à la Recherche en France pour les Étudiants Étrangers (AFSIE) n'est pas à proprement parler une aide au logement mais mérite d'être mentionnée dans ce contexte. Il s'agit d'une aide à la mobilité internationale qui peut exister dans certains programmes bilatéraux ou dans des accords entre universités. Cette aide, quand elle existe, est cumulable avec les aides CAF au logement.

Les étudiants bénéficiaires de bourses du gouvernement français (BGF), de bourses de Campus France, ou de bourses dans le cadre d'accords bilatéraux ont accès aux mêmes droits à l'APL/ALS que les autres étudiants étrangers régulièrement en séjour, dès lors qu'ils occupent un logement éligible en résidence principale.

## Témoignages d'étudiants étrangers sur leur parcours APL

**Aminata Diallo, 22 ans, en licence de droit, venue du Sénégal** : «Quand je suis arrivée en France en septembre, j'avais mon VLS-TS validé sur le site de l'OFII. J'ai fait ma demande APL le deuxième semaine de mon arrivée, avec mon VLS-TS comme justificatif de séjour régulier. La CAF a mis 6 semaines à instruire mon dossier mais j'ai bien reçu mes droits rétroactivement à partir du premier jour de mon bail.»

**Wei Chen, 25 ans, en master d'intelligence artificielle, venu de Chine** : «Mon premier titre de séjour a pris du retard à la préfecture et mon récépissé avait expiré quand j'ai fait ma demande APL. La CAF a suspendu l'instruction de mon dossier jusqu'à ce que j'aie mon nouveau titre de séjour en main. J'ai finalement tout reçu rétroactivement sur trois mois, mais la période d'attente était financièrement stressante.»

## Questions fréquentes sur l'éligibilité des étrangers

**Q : Un étudiant étranger en France depuis moins de 3 mois peut-il demander l'APL ?**
Oui, il n'y a pas de durée minimale de séjour pour demander l'APL ou l'ALS. La seule condition est de séjourner légalement en France (titre de séjour valide pour les non-UE) et d'occuper un logement éligible à titre de résidence principale. Un étudiant arrivé en septembre peut faire sa demande APL en septembre.

**Q : Mon visa étudiant court séjour (moins de 90 jours) donne-t-il droit à l'APL ?**
Non. Un visa de court séjour (type C, inférieur à 90 jours) ne constitue pas un titre de séjour long et n'ouvre pas droit aux aides sociales françaises. Pour avoir droit à l'APL, vous devez disposer d'un visa de long séjour ou d'une carte de séjour (titre de séjour) valide.

**Q : Mon titre de séjour expire dans 2 mois. Puis-je quand même faire une demande APL ?**
Oui, vous pouvez faire la demande. Votre titre de séjour actuel doit être valide au moment de la demande. Si votre titre de séjour expire avant la fin de l'instruction du dossier ou avant la fin de votre bail, la CAF vous demandera de fournir le renouvellement dès qu'il sera disponible. Les droits s'arrêtent à la date d'expiration du titre si un renouvellement n'est pas présenté.

**Q : Une étudiante enceinte ou ayant un enfant né en France a-t-elle des droits spéciaux à l'APL ?**
La présence d'un enfant à charge influence le calcul de l'APL (loyer plafond plus élevé pour une famille, calcul sur la composition du foyer). En cas de naissance pendant vos études, déclarez cette nouvelle situation à la CAF rapidement : vous bénéficierez probablement d'une aide revalorisée. Des allocations supplémentaires (allocations familiales, prime de naissance) peuvent également s'ouvrir selon votre situation.

**Q : Je suis en France avec un statut de réfugié reconnu. Ai-je droit à l'APL ?**
Les réfugiés statutaires reconnus par l'OFPRA (l'Office Français de Protection des Réfugiés et Apatrides) ont les mêmes droits aux prestations sociales que les ressortissants français, y compris pour l'APL et l'ALS. La convention de Genève sur le statut des réfugiés impose ce principe d'assimilation aux nationaux en matière de protection sociale.

## Ressources officielles

- [caf.fr – Prestations pour étrangers](https://www.caf.fr/allocataires/droits-et-prestations/s-informer-sur-les-aides/logement-et-habitat) : Les conditions d'éligibilité et la liste des documents à fournir
- [service-public.fr – Conditions d'accès étrangers](https://www.service-public.fr/particuliers/vosdroits/F12006) : Les conditions juridiques d'accès aux aides au logement selon la nationalité
- [ofii.fr](https://www.ofii.fr) : L'Office Français de l'Immigration et de l'Intégration, pour les questions sur l'entrée et le séjour régulier en France
`;

await patch('da7e82e3-0993-4675-9aaa-e0ea3ba7138a', APL4);

// L5 : Impact des revenus et déclaration annuelle
const APL5 = `# Impact des revenus sur l'APL et déclaration annuelle des ressources

L'APL et l'ALS ne sont pas des aides à montant fixe insensibles à votre situation financière. Elles sont conçues comme des aides différentielles, modulées en fonction de vos ressources afin que l'aide soit plus forte pour les personnes aux revenus les plus faibles et s'amenuise au fur et à mesure que les revenus augmentent. Cette logique de modulation est au cœur du fonctionnement des aides personnelles au logement : pour des ressources nulles ou très faibles, l'aide couvre une fraction importante du loyer ; pour des ressources élevées, l'aide devient nulle. Comprendre avec précision comment vos revenus influencent le montant de votre APL, quels seuils de revenus entraînent des baisses significatives, comment fonctionne la déclaration annuelle des ressources que vous devez obligatoirement compléter, et quelles sont les spécificités du système de contemporisation introduit depuis 2021 est indispensable pour prévoir votre budget avec précision et remplir vos obligations vis-à-vis de la CAF.

## Le principe de la modulation par les ressources

La formule de calcul de l'APL intègre un paramètre de ressources qui réduit progressivement le montant de l'aide au fur et à mesure que les revenus augmentent. Cette modulation est conçue pour que l'aide soit maximale quand vous n'avez aucun revenu, et qu'elle descende progressivement à zéro quand vos revenus atteignent un seuil suffisant pour que votre participation au loyer ne requière plus de soutien.

Pour un étudiant sans emploi dont les seules ressources sont une bourse CROUS et éventuellement un soutien familial, la modulation est minimale : la bourse CROUS n'est pas prise en compte dans le calcul de l'APL (voir la section dédiée), et les revenus familiaux ne font pas partie du calcul si vous êtes considéré comme fiscalement autonome. L'aide est dans ce cas maximale pour votre configuration de logement.

Pour un étudiant qui travaille à temps partiel (emploi étudiant, CDD de vacances, stage rémunéré), les revenus de ces activités sont progressivement intégrés dans le calcul. Chaque mois, la CAF met à jour les données de revenus en consultant les informations transmises par l'URSSAF (pour les salaires) et d'autres organismes. Quand vos revenus cumulés sur les 12 derniers mois dépassent certains seuils, votre APL est réduite en conséquence.

## La contemporisation : comprendre le nouveau système en temps réel

La réforme de la contemporisation, mise en place progressivement depuis 2021, constitue le changement le plus significatif dans le fonctionnement des aides personnelles au logement depuis des décennies. Ce système remplace l'ancien mécanisme basé sur les revenus de l'année N-2 par un mécanisme basé sur les revenus des 12 derniers mois glissants, mis à jour tous les 3 mois.

Concrètement, voici comment cela fonctionne. La CAF met à jour automatiquement vos données de revenus tous les 3 mois en consultant vos relevés URSSAF (salaires versés), vos allocations chômage (Pôle Emploi) et d'autres sources de revenus salariaux ou de remplacement. Elle recalcule votre APL sur la base des revenus des 12 mois précédents. Si vos revenus ont augmenté au cours de cette période, votre APL peut baisser. Si vos revenus ont baissé ou sont restés nuls, votre APL reste stable ou peut augmenter.

Ce système signifie que vos revenus de l'été précédent (job saisonnier, stage bien rémunéré, CDD d'été) affectent encore votre APL pendant les 12 mois suivants, mais de manière progressive et lissée. Contrairement à l'ancien système où un changement de revenus n'affectait l'aide qu'avec deux ans de retard, la contemporisation réagit beaucoup plus vite, mieux alignée sur votre situation réelle.

## Quels revenus sont pris en compte et lesquels sont exclus ?

La définition exacte des revenus pris en compte pour le calcul de l'APL est une question complexe qui génère beaucoup de confusion. Voici les principales catégories et leur traitement.

Les salaires et revenus d'activité professionnelle (salaires d'emplois étudiants, rémunérations de stages de plus de 2 mois, revenus de missions en auto-entreprise) sont intégralement pris en compte dans le calcul de l'APL, via la contemporisation automatique des données URSSAF. Un emploi à mi-temps au SMIC (environ 750 euros nets par mois) peut réduire votre APL de 50 à 100 euros par mois selon votre situation.

Les bourses sur critères sociaux du CROUS ne sont pas prise en compte dans le calcul de l'APL. C'est une règle explicite et stable depuis la création de l'APL : les bourses étudiantes sur critères sociaux sont exemptées du calcul. Vous n'avez pas à les déclarer à la CAF pour le calcul de l'APL. Elles ne réduisent donc pas votre aide au logement, ce qui représente un avantage considérable pour les boursiers des échelons les plus élevés.

Les allocations familiales versées par la CAF ne sont pas prises en compte dans le calcul de l'APL. Si vous êtes étudiant avec un enfant à charge et percevez des allocations familiales de la CAF, ces sommes n'affectent pas votre droit à l'aide au logement.

L'argent de poche ou le soutien financier reçu de vos parents n'est pas, en principe, déclarable à la CAF pour le calcul de l'APL à moins qu'il prenne la forme d'un revenu formalisé (salaire versé par un parent employeur, etc.). La CAF ne demande pas de déclaration des transferts familiaux informels.

Les pensions alimentaires reçues d'un parent, dans le cadre d'une séparation ou d'un divorce, sont prises en compte dans les ressources.

## La déclaration annuelle des ressources : une obligation que vous ne pouvez pas ignorer

Chaque année, la CAF envoie à tous les bénéficiaires d'une aide au logement une demande de déclaration de ressources annuelle. Cette déclaration, qui doit être complétée via votre espace Mon Compte sur caf.fr, permet à la CAF de vérifier vos revenus de l'année précédente et d'ajuster votre aide en conséquence pour l'année suivante.

La campagne de déclaration annuelle de ressources se déroule généralement entre mars et juillet. La CAF vous envoie un e-mail de relance (et parfois un courrier papier) avec les instructions et le délai limite. Dans votre espace Mon Compte, un bouton ou une notification vous indique que cette déclaration est en attente. Le formulaire en ligne vous demande de confirmer ou de corriger vos revenus de l'année écoulée, en indiquant les différentes sources (salaires, allocations chômage, pensions, revenus de stage, etc.).

La déclaration doit être complétée même si vos revenus sont zéros. Si vous ne recevez aucun formulaire ou notification de déclaration, c'est peut-être parce que la CAF n'a pas votre adresse e-mail correcte ou que vos notifications sont filtrées comme spam. Vérifiez votre espace Mon Compte de manière proactive entre mars et juillet pour vous assurer qu'aucune déclaration n'est en attente.

Ne pas compléter la déclaration annuelle dans le délai imparti entraîne la suspension automatique du versement de l'APL jusqu'à régularisation. De plus, si votre aide a été calculée sur des revenus inexacts pendant l'année, la déclaration permet de régulariser les trop-perçus ou les sous-paiements rétroactivement. Remplir cette déclaration avec précision est dans votre intérêt.

## Le seuil d'élimination de l'APL : quand l'aide devient nulle

Il existe un niveau de revenus au-dessus duquel l'APL ou l'ALS calculée descend à zéro. Ce seuil dépend de votre situation (seul ou en couple, zone géographique, loyer) et évolue avec les paramètres de la formule de calcul. Pour donner des ordres de grandeur approximatifs en 2024 pour un étudiant seul en zone II (grandes villes de province) avec un loyer de 500 euros :

Pour des revenus annuels inférieurs à environ 3 500 euros (soit moins de 300 euros par mois), l'APL est à son niveau maximal de l'ordre de 150 à 200 euros par mois. Pour des revenus annuels entre 3 500 et 8 000 euros (300 à 660 euros par mois, correspondant à un emploi étudiant à temps très partiel), l'APL est réduite progressivement. Pour des revenus annuels dépassant 10 000 à 12 000 euros (833 à 1 000 euros par mois), l'APL est généralement nulle pour ce profil. Ces seuils sont indicatifs et varient selon les paramètres. Utilisez le simulateur caf.fr avec vos données réelles pour une estimation précise.

## Témoignages d'étudiants sur la gestion de leurs revenus et APL

**Nathan Girard, 22 ans, en alternance en master management** : «En alternance, je touche 1 100 euros nets par mois. Mon APL a été recalculée à la baisse quand la contemporisation a pris en compte mes premiers salaires. Je suis passé de 180 euros d'APL à 45 euros. Ce n'est pas nul mais ça m'a surpris. Depuis, j'anticipe la baisse dans mon budget dès que je commence un emploi ou un stage rémunéré.»

**Chloé Martinez, 21 ans, en licence biologie** : «J'avais un job étudiant l'été à 600 euros par mois pendant 3 mois. Mon APL a baissé d'environ 60 euros pour les 3 mois suivants avant de reprendre son niveau normal. C'est exactement le système de contemporisation qui fonctionne - avec un délai de quelques mois. C'est gérable si on le sait à l'avance.»

## Questions fréquentes sur les revenus et l'APL

**Q : Mon job étudiant dépasse le seuil exonéré de cotisation. Dois-je le déclarer à la CAF ?**
Vous n'avez pas à déclarer manuellement votre emploi à la CAF pour la contemporisation de l'APL : les données de salaire sont transmises automatiquement à la CAF par l'URSSAF dans le cadre du partage de données entre organismes sociaux. En revanche, vous devez compléter la déclaration annuelle de ressources en indiquant vos revenus de l'année écoulée, ce qui inclut les salaires de votre emploi étudiant.

**Q : Mon aide APL va-t-elle baisser si je commence un stage rémunéré pendant l'année ?**
Un stage rémunéré de moins de 2 mois est exonéré de charges sociales et généralement non pris en compte dans le calcul de l'APL. Un stage de 3 mois ou plus avec une gratification (au moins égale au minimum légal de stage) génère des droits sociaux et est pris en compte dans les revenus pour l'APL. La durée et le montant de la gratification déterminent l'impact sur votre APL.

**Q : La bourse de mon gouvernement étranger est-elle prise en compte dans les ressources pour l'APL ?**
Théoriquement, toute bourse autre que la bourse sur critères sociaux du CROUS pourrait être considérée comme une ressource. Cependant, les bourses versées par des gouvernements étrangers à leurs ressortissants étudiant en France ne sont pas systématiquement référencées dans les systèmes de la CAF. Dans la déclaration annuelle, il est important d'être transparent sur l'ensemble de vos ressources, y compris les bourses étrangères. Consultez votre CAF pour savoir comment déclarer ce type de ressource si vous avez des doutes.

**Q : Dois-je déclarer la pension de mes parents comme revenu pour l'APL ?**
Non, les transferts d'argent informels de vos parents (virement bancaire mensuel, espèces) ne constituent pas un revenu déclarable à la CAF pour le calcul de l'APL dans la mesure où ils ne sont pas formalisés comme une rémunération ou une allocation légale. La CAF se base sur les revenus traçables : salaires, allocations chômage, pensions alimentaires légalement fixées, revenus de capital déclarés aux impôts. Un soutien familial informel ne rentre pas dans ce calcul.

## Ressources officielles

- [caf.fr – Simulateur APL](https://wwwd.caf.fr/wps/portal/caffr/simulateuralgapl) : Simulez l'impact de vos revenus sur votre APL avec vos données réelles
- [service-public.fr – Ressources prises en compte](https://www.service-public.fr/particuliers/vosdroits/F12006) : La liste officielle des revenus pris en compte dans le calcul des aides au logement
`;

await patch('1393b8f5-c0bc-4218-aa6d-248325c219d1', APL5);

// L6 : Cumuler APL et autres aides
const APL6 = `# Cumuler APL et autres aides : bourse, RSA, APE et aides complémentaires

Vivre en France avec un budget étudiant limité requiert souvent de combiner plusieurs sources d'aide sociale et d'identifier toutes les aides auxquelles vous avez légalement droit. L'aide au logement de la CAF (APL ou ALS) est souvent la première aide dont les étudiants entendent parler, mais elle n'est pas la seule. La bourse sur critères sociaux du CROUS, la garantie Visale pour accéder au logement, les aides d'urgence du CROUS, les aides des collectivités locales, ou encore le dispositif Mon Soutien Psy pour la santé mentale constituent autant de ressources potentielles pour améliorer significativement votre situation financière. Cette leçon cartographie les principales aides cumulables avec l'APL, les conditions de chacune, les montants indicatifs et les démarches pour y accéder.

## La règle fondamentale : l'APL ne peut pas se cumuler avec l'ALS ou l'ALF

Avant de parler de cumul, il est essentiel de clarifier une règle absolue : les trois aides personnelles au logement de la CAF ne peuvent pas se cumuler entre elles. L'APL (Aide Personnalisée au Logement), l'ALS (Allocation de Logement à Caractère Social) et l'ALF (Allocation de Logement Familiale) répondent à des situations différentes mais ne peuvent être perçues qu'une seule à la fois. Pour un étudiant donné, dans un logement donné, seule une aide au logement est applicable : la CAF détermine laquelle selon le statut de votre logement (conventionné ou non) et votre situation familiale.

Cette règle ne signifie pas que vous ne pouvez recevoir qu'une seule aide de la CAF : si vous avez des enfants à charge, vous pouvez percevoir simultanément l'APL (pour le logement) et les allocations familiales (pour les enfants). Ce sont deux prestations distinctes avec des fondements et des calculs différents, cumulables sans restriction.

## L'APL et la bourse sur critères sociaux du CROUS : cumul total et stratégique

La bourse sur critères sociaux du CROUS est la première aide complémentaire à combiner avec l'APL. La bonne nouvelle, mentionnée dans les leçons précédentes, est que ces deux aides sont intégralement cumulables et que la bourse CROUS n'entre pas dans le calcul de l'APL. Vous pouvez donc percevoir la bourse dans son intégralité tout en recevant votre APL au montant maximal pour votre profil.

Pour les étudiants éligibles aux deux aides, le cumul représente une aide sociale totale significative. Un étudiant boursier de l'échelon 7 (le plus élevé) peut recevoir jusqu'à 6 300 euros de bourse par an (soit 630 euros par mois sur 10 mois d'année scolaire) plus une APL de 200 euros par mois sur 12 mois (2 400 euros par an). Le total de ces deux aides peut atteindre 8 700 euros par an, soit 725 euros par mois en moyenne. Ce montant constitue une base de revenus significative, même si elle peut rester insuffisante dans des villes à loyer très élevé comme Paris.

La demande de bourse CROUS se fait via le Dossier Social Étudiant (DSE) sur le portail Messervices.etudiant.gouv.fr, entre janvier et mai pour une rentrée en septembre. La demande d'APL se fait séparément sur caf.fr une fois votre logement trouvé et votre bail signé. Ces deux démarches sont entièrement indépendantes l'une de l'autre mais les informations de votre dossier social (revenus des parents) sont utilisées par les deux organismes (CROUS et CAF) selon leurs propres modalités.

## La garantie Visale : une caution locative pour accéder aux aides

La garantie Visale d'Action Logement n'est pas à proprement parler une aide financière mensuelle mais un dispositif de garantie qui vous permet d'accéder à un logement sans avoir besoin d'un garant personnel (parent, proche). Elle est gratuite pour le locataire et garantit à votre propriétaire le paiement des loyers impayés et des éventuelles dégradations locatives pendant toute la durée du bail. En échange, elle vous permet de louer sans garant, ce qui est souvent une condition bloquante pour les étudiants étrangers qui n'ont pas de proches en France pouvant se porter garants.

La garantie Visale est disponible pour les étudiants de moins de 30 ans (sans condition d'âge pour certains profils spécifiques) et pour les jeunes salariés. Elle est accordée via le site visale.fr ou l'application Action Logement, en quelques minutes. La garantie est valable pour une durée de délivrance de 3 mois, pendant laquelle vous devez trouver et signer un bail. Une fois le bail signé, la garantie couvre toute la durée du contrat.

La garantie Visale est parfaitement compatible et cumulable avec l'APL et l'ALS. Nombreux sont les étudiants qui utilisent la garantie Visale pour décrocher un logement en novembre, puis font leur demande d'APL une fois le bail signé. Ces deux dispositifs se complètent efficacement: l'un facilite l'accès au logement (garantie), l'autre réduit son coût (aide mensuelle).

## Les aides d'urgence du CROUS : le fonds de solidarité

En dehors de la bourse régulière, le CROUS dispose d'un Fonds National d'Aide d'Urgence (FNAU) qui peut apporter une aide ponctuelle aux étudiants en grande difficulté financière. Ce fonds est accessible à tous les étudiants inscrits dans un établissement d'enseignement supérieur, qu'ils soient boursiers ou non, français ou étrangers.

Les situations pouvant justifier une aide d'urgence incluent une rupture avec la famille et la perte du soutien financier familial, un décès ou une maladie grave dans la famille qui affectent les ressources disponibles pour les études, une perte d'emploi étudiant qui déséquilibre brutalement le budget, ou d'autres événements imprévus créant une situation de détresse financière aiguë.

La demande s'effectue via le service social du CROUS de votre académie. Un assistant social examine votre situation et peut attribuer une aide ponctuelle (entre 200 et 2 000 euros selon les cas) ou vous orienter vers des dispositifs d'aide pérenne supplémentaires. Cette aide d'urgence est cumulable avec toutes les aides régulières, y compris l'APL.

## Les aides des collectivités locales et des fondations

Au-delà des aides nationales, de nombreuses collectivités locales (régions, départements, communes) proposent des aides spécifiques aux étudiants, notamment pour le logement. Ces aides varient considérablement d'une région à l'autre et sont moins bien connues que les dispositifs nationaux.

Certaines régions proposent des compléments de bourse régionale pour les étudiants boursiers d'État. D'autres ont mis en place des dispositifs d'aide à l'installation (aide unique au premier mois de loyer pour les nouveaux arrivants dans la région). La ville de Paris, par exemple, dispose d'aides spécifiques à l'accès au logement pour les jeunes et étudiants précaires. Renseignez-vous auprès du service social de votre université et de la mairie de votre commune pour identifier les aides locales disponibles dans votre situation.

Des fondations et associations privées peuvent également apporter un soutien financier aux étudiants en difficulté dans des domaines spécifiques. La Fondation de France, différentes fondations d'entreprises, et des associations culturelles liées à certaines communautés nationales distribuent des bourses et des aides aux étudiants méritants ou en difficulté. Consultez votre service des relations internationales universitaire pour connaître les fondations susceptibles de vous concerner selon votre nationalité et votre domaine d'études.

## Le RSA et les étudiants : une compatibilité limitée

Le Revenu de Solidarité Active (RSA) est une aide sociale de base destinée aux personnes sans ressources suffisantes. Il est souvent compatible avec l'APL dans le sens où les deux aides ne s'excluent pas formellement. Cependant, les étudiants ont généralement un accès très limité au RSA. La loi prévoit que les étudiants de moins de 25 ans ne peuvent pas percevoir le RSA, sauf exceptions très spécifiques : avoir un enfant à charge, avoir travaillé plus de 2 ans dans les 3 dernières années, ou être en situation de rupture familiale avérée et documentée.

Pour les étudiants de plus de 25 ans, l'accès au RSA est théoriquement possible si les revenus sont inférieurs au seuil RSA. Mais l'inscription à des études à temps plein peut être considérée comme une formation et exclure du RSA selon les départements. La situation est complexe et mérite une consultation individuelle avec un assistant social du CROUS ou de la CAF pour évaluer votre éligibilité exacte.

## La prime d'activité pour les étudiants qui travaillent

La prime d'activité de la CAF est une aide destinée aux travailleurs ayant des revenus modestes, pour compléter leurs ressources et encourager l'activité professionnelle. Depuis sa création en 2016, elle remplace l'ancien RSA Activité. Elle est accessible aux étudiants salariés ou auto-entrepreneurs à condition de travailler de manière régulière et de percevoir des revenus d'activité supérieurs à environ 55 % du SMIC net mensuel (soit environ 900 euros nets par mois en 2024).

Si vous êtes étudiant et travaillez à mi-temps (environ 20h par semaine au SMIC), vous pouvez être éligible à la prime d'activité. Cette aide est calculée sur l'ensemble de vos revenus et ressources, et peut représenter 100 à 200 euros par mois supplémentaires selon votre situation familiale et vos revenus exacts. La prime d'activité est cumulable avec l'APL : un étudiant salarié à mi-temps peut percevoir simultanément l'APL (réduite par ses revenus) et la prime d'activité.

La demande de prime d'activité se fait via votre espace Mon Compte sur caf.fr, dans la ru brique «Faire une demande de prestation». Le simulateur de la CAF permet d'estimer votre éligibilité avant de faire la demande formelle.

## Témoignages de cumul réussi d'aides

**Jessica Morin, 23 ans, en master de droit, travaille à 15h/semaine en cabinet** : «Je combine une APL de 140 euros, une bourse CROUS de 410 euros par mois, et une prime d'activité de 85 euros. En tout, les aides sociales couvrent environ 635 euros de mes dépenses mensuelles. C'est ce qui me permet de rester à Paris avec un loyer de 850 euros et des dépenses alimentaires raisonnables.»

**Mouhamad Lamine Sy, 25 ans, en doctorat de physique, avec un financement doctoral** : «Mon contrat doctoral me verse 2 100 euros nets par mois. Mon APL est de 0 euro. La prime d'activité n'est pas pertinente dans ma situation car mes revenus sont au-dessus du seuil. Mais j'ai pu bénéficier d'une aide d'urgence CROUS de 400 euros quand mon contrat doctoral a pris du retard à se mettre en place.»

## Questions fréquentes sur le cumul d'aides

**Q : L'APL réduit-elle ma bourse CROUS ?**
Non. La bourse CROUS et l'APL sont deux aides indépendantes qui ne s'impactent pas mutuellement. La bourse ne réduit pas votre APL (elle est exclue du calcul des ressources), et l'APL n'affecte pas non plus le montant de votre bourse.

**Q : Puis-je cumuler garantie Visale et APL ?**
Oui, ces deux dispositifs sont parfaitement compatibles. La garantie Visale vous aide à obtenir un logement, l'APL vous aide ensuite à le financer mensuellement. Ce sont des services d'Action Logement et de la CAF respectivement, qui fonctionnent de manière totalement indépendante.

**Q : La prime d'activité est-elle calculée en tenant compte de l'APL ?**
L'APL que vous percevez n'est généralement pas intégrée dans le calcul de la prime d'activité comme un revenu. La prime d'activité est calculée principalement sur vos revenus d'activité professionnelle. Les prestations CAF (y compris l'APL) ne sont pas considérées comme des revenus d'activité pour ce calcul.

**Q : Comment trouver les aides locales de ma ville ou région ?**
Le portail mesdroitssociaux.gouv.fr permet de faire une simulation de l'ensemble des droits sociaux auxquels vous pourriez être éligible en France, en renseignant votre situation. Le service social de votre CROUS est aussi une excellente ressource : les assistants sociaux connaissent les aides locales disponibles dans leur académie et peuvent vous orienter vers les organismes compétents.

**Q : Puis-je percevoir l'APL et une bourse d'une fondation privée simultanément ?**
Oui. Les bourses de fondations privées ne sont pas prises en compte dans le calcul de l'APL sauf si elles prennent la forme d'une rémunération salariale formelle. Une bourse de fondation versée comme aide non salariale n'affecte généralement pas votre APL. Mentionnez-la quand même dans votre déclaration annuelle de ressources pour être en conformité avec vos obligations déclaratives.

## Ressources officielles

- [caf.fr – Toutes vos aides](https://www.caf.fr/allocataires/droits-et-prestations) : Toutes les prestations CAF et les conditions d'éligibilité
- [visale.fr](https://www.visale.fr) : La garantie locative gratuite d'Action Logement
- [messervices.etudiant.gouv.fr](https://www.messervices.etudiant.gouv.fr) : Le portail des services étudiants pour la bourse sur critères sociaux
- [mesdroitssociaux.gouv.fr](https://www.mesdroitssociaux.gouv.fr) : Simulateur national pour découvrir toutes les aides sociales auxquelles vous pouvez prétendre
`;

await patch('3d1ec51d-e234-40b3-9678-15c8385e866a', APL6);
