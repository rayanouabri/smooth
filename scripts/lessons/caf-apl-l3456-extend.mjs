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

// EXTENSION L3 : Suspensions, remboursements et fraude
const EXT_L3 = `
## Procédures de vérification interne de la CAF : comment la CAF détecte les anomalies

La Caisse d'Allocations Familiales ne se contente pas d'attendre que les allocataires déclarent spontanément leurs changements de situation. Elle dispose d'un arsenal de moyens de vérification interne et externe qui lui permettent de détecter proactivement les incohérences entre les informations déclarées et la réalité administrative d'un dossier. Comprendre ces mécanismes de contrôle est utile pour tout bénéficiaire qui souhaite maintenir son dossier en parfaite conformité et éviter les mauvaises surprises.

Le croisement de données automatisé entre organismes sociaux est la méthode la plus systématique. La CAF partage des flux d'informations avec l'URSSAF (données de salaires en temps quasi-réel), Pôle Emploi (données d'indemnisation chômage), la CNAF (structures familiales), la DGFIP (Direction Générale des Finances Publiques, pour les revenus déclarés aux impôts) et même certains fichiers des préfectures pour les titres de séjour. Ces croisements s'opèrent de façon automatisée et routinière, plusieurs fois par an pour certaines données. Quand un décalage significatif est identifié entre les données issues de ces croisements et les informations que vous avez déclarées dans votre dossier CAF, un signal d'alerte est généré et un agent de la CAF examine le dossier manuellement.

Les contrôles sur place sont une autre modalité de vérification, moins fréquente mais plus approfondie. La CAF peut déléguer des agents de contrôle pour vérifier la réalité de votre situation de logement, notamment en cas de suspicion de domiciliation fictive ou de logement déclaré non conforme. Ces contrôles, encadrés par la loi, sont annoncés à l'avance. Ils peuvent inclure une visite du logement pour vérifier son occupation effective, une vérification des conditions d'habitabilité, et des entretiens avec les voisins ou le propriétaire si la situation le justifie. Dans les cas de fraude avérée, les agents de contrôle transmettent leurs constats au service contentieux de la CAF qui peut initier des poursuites.

La déclaration sur l'honneur, systématiquement demandée lors des renouvellements et mises à jour, engage votre responsabilité pénale. En signant une déclaration affirmant résider à une adresse ou percevoir un certain loyer, vous faites une déclaration dont l'inexactitude délibérée peut constituer une fausse déclaration auprès d'un organisme de protection sociale, infraction punie par le Code pénal. La CAF prend très au sérieux ces déclarations et les conserve dans votre dossier. Si une vérification ultérieure révèle qu'une déclaration était inexacte, la CAF peut remonter à la date de la fausse déclaration pour calculer le trop-perçu.

## Gérer un trop-perçu en situation de précarité étudiante

La découverte d'un trop-perçu d'APL est une mauvaise nouvelle à n'importe quel moment, mais elle est particulièrement difficile à absorber pour un étudiant dont le budget est serré. Connaître précisément les options disponibles pour négocier le remboursement et les recours possibles si vous êtes dans l'incapacité de rembourser permet de traverser cette épreuve sans aggraver votre situation financière.

La demande de délai de paiement est le premier outil à activer. Dès réception de la notification d'indu, et bien avant que le délai de contestation expire, contactez votre CAF par téléphone ou via la messagerie sécurisée de votre espace Mon Compte pour signaler votre situation financière difficile et demander un plan de remboursement étalé. Les conseillers CAF sont formés pour recevoir ce type de demande avec empathie. La CAF est un service public dont la mission inclut la protection des personnes en difficulté, et elle dispose d'une marge de manœuvre pour adapter les délais de remboursement. Pour un trop-perçu de 500 euros, un étalement sur 10 mois à 50 euros mensuels est tout à fait standard.

La Commission de Recours Amiable (CRA) est le deuxième outil, plus formel, qui permet de demander une remise de dette totale ou partielle. Cette commission, composée de représentants de la CAF et d'allocataires élus, examine les demandes de remise gracieuse pour les personnes en situation de grande précarité. Pour introduire une demande de remise gracieuse, rédigez une lettre formelle adressée à la CRA de votre CAF, en expliquant votre situation financière (revenus, charges, endettement), en joignant les justificatifs pertinents (relevés bancaires, quittances de loyer, attestation de bourse) et en invoquant les circonstances ayant conduit au trop-perçu. Si l'erreur n'était pas intentionnelle et que votre situation financière rend le remboursement vraiment difficile, la CRA peut décider de réduire significativement le montant à rembourser voire de l'annuler totalement dans des cas exceptionnels.

## Le rôle des associations étudiantes et des services sociaux des CROUS

Face aux difficultés liées à la CAF, aussi bien pour les trop-perçus que pour les suspensions injustifiées ou les dossiers bloqués, de nombreuses ressources d'accompagnement existent dans l'environnement universitaire. Les services sociaux des CROUS (Centres Régionaux des Œuvres Universitaires et Scolaires) disposent d'assistants sociaux spécialement formés pour accompagner les étudiants dans leurs démarches administratives auprès de la CAF.

Un assistant social du CROUS peut vous aider à comprendre une notification CAF, à rédiger une lettre de contestation ou une demande de remise gracieuse, à rassembler les pièces justificatives nécessaires et à préparer un entretien avec un conseiller CAF. Cette aide est gratuite et confidentielle, et accessible à tous les étudiants inscrits dans un établissement partenaire du CROUS, quelle que soit leur nationalité ou leur situation administrative. Pour prendre rendez-vous avec un assistant social CROUS, contactez directement le CROUS de votre académie via son site internet ou son standard téléphonique.

Les associations étudiantes, notamment les associations d'étudiants étrangers présentes dans la plupart des grandes universités françaises, constituent également un réseau informel d'entraide précieux. Des étudiants qui ont traversé les mêmes difficultés administratives peuvent partager leur expérience, vous orienter vers les bonnes ressources et vous éviter des erreurs courantes. Ne sous-estimez pas la valeur de ce type de soutien par les pairs dans la navigation du système administratif français, qui peut paraître complexe et opaque pour les nouveaux arrivants.

## Questions fréquentes complémentaires sur les suspensions et la fraude

**Q : Combien de temps la CAF peut-elle remonter pour réclamer un trop-perçu ?**
La prescription des créances sociales est encadrée par la loi. En règle générale, la CAF peut remonter jusqu'à deux ans pour les trop-perçus non frauduleux. Pour les fraudes avérées, ce délai est porté à cinq ans. Passé ces délais, la créance est prescrite et la CAF ne peut plus en réclamer le remboursement. Si vous recevez une notification d'indu portant sur une période ancienne, vérifiez la date de prescription applicable à votre situation et, si nécessaire, faites-vous conseiller.

**Q : Mon APL peut-elle être suspendue à cause d'une dette envers un autre organisme social ?**
La CAF ne suspend pas l'APL directement à cause d'une dette envers d'autres organismes comme Pôle Emploi ou la CPAM. Cependant, si la CAF vous verse d'autres prestations et que vous avez une dette envers elle (indu d'une autre prestation), elle peut opérer une compensation en réduisant les versements de toutes vos prestations, y compris l'APL. Chaque situation est traitée individuellement.

**Q : Puis-je demander un relevé détaillé de tous les paiements d'APL que j'ai reçus depuis le début ?**
Oui. Depuis votre espace Mon Compte sur caf.fr, la rubrique «Mes paiements» liste l'historique complet de tous les versements effectués par la CAF sur votre compte bancaire, mois par mois, avec le détail de chaque prestation versée. Vous pouvez également demander une attestation de paiement ou un historique certifié en contactant votre CAF.

**Q : La fraude à l'APL peut-elle affecter mes chances d'obtenir la nationalité française à long terme ?**
Toute condamnation pénale, y compris pour fraude aux prestations sociales, est prise en compte lors d'une demande de naturalisation. La nationalité française requiert une intégration à la société française, qui inclut le respect des lois. Une condamnation récente pour fraude peut conduire au rejet d'une demande de naturalisation. Si vous visez la naturalisation à terme, maintenir votre dossier CAF en parfaite conformité est donc dans votre intérêt à long terme.

**Q : Est-il possible de contester un accusation de fraude de la CAF ?**
Absolument. Si la CAF vous accuse de fraude intentionnelle et que vous estimez qu'il s'agit d'une erreur ou d'un malentendu, vous pouvez contester cette qualification devant la Commission de Recours Amiable, puis devant le tribunal judiciaire si la CRA confirme la décision. Un avocat spécialisé en droit social peut vous assister dans cette démarche. Dans de nombreux cas, ce qui est initialement qualifié de fraude se révèle être une erreur administrative ou une omission involontaire, et la qualification est revue à la baisse après examen du dossier.
`;

// EXTENSION L4 : Conditions étrangers
const EXT_L4 = `
## Les démarches pratiques pour constituer un dossier CAF en tant qu'étudiant étranger

La constitution d'un dossier CAF complet et bien présenté est une étape décisive pour un étudiant étranger qui souhaite obtenir l'APL ou l'ALS dans de bonnes conditions. Contrairement aux étudiants français pour lesquels certaines vérifications sont automatisées via des systèmes de données partagées, les étudiants non-européens doivent souvent apporter des justificatifs supplémentaires pour attester de leur régularité de séjour et de leur situation en France.

La liste des pièces à fournir pour un étudiant hors-UE inclut généralement : un justificatif de séjour régulier (titre de séjour valide, VLS-TS validé via l'OFII ou récépissé de demande en cours), un justificatif de domicile correspondant au logement pour lequel vous demandez l'aide (bail de location signé, quittances récentes), un relevé d'identité bancaire (RIB) d'un compte bancaire en France ouvert à votre nom, un justificatif d'identité (passeport en cours de validité), et selon les situations, une attestation d'inscription dans votre établissement d'enseignement supérieur. La CAF peut également demander des justificatifs de revenus ou d'absence de revenus pour les étudiants dont la situation est particulière.

La saisie du dossier en ligne sur caf.fr via la rubrique «Faire une demande de prestation» est la méthode standard. La procédure est guidée et vous demande de saisir vos informations personnelles, celles de votre logement, et de téléverser les pièces justificatives en format numérique (PDF, JPEG ou PNG). La qualité des scans est importante : des documents illisibles ou tronqués peuvent retarder considérablement l'instruction de votre dossier. Prenez le temps de préparer des copies claires et complètes de chaque document.

## Les délais d'instruction et la gestion des périodes d'attente

L'instruction d'un dossier CAF, notamment pour un primo-demandeur étranger, peut prendre de 4 à 12 semaines selon la période de l'année et la charge de travail de votre CAF locale. Les périodes de rentrée universitaire (septembre-octobre) sont particulièrement chargées, car des dizaines de milliers d'étudiants déposent leurs dossiers simultanément. Il n'est pas rare que le premier versement d'APL n'intervienne que 2 ou 3 mois après le dépôt du dossier, bien que les droits soient recalculés rétroactivement à partir du premier jour du mois suivant le dépôt.

Pendant ces semaines d'attente, votre loyer doit être payé intégralement sans aide. Prévoyez une trésorerie suffisante pour couvrir 2 à 3 mois de loyer sans l'APL, particulièrement lors de votre arrivée en France. Certains établissements proposent des prêts ou avances sur bourse aux étudiants en attente de leurs premières aides : renseignez-vous auprès du CROUS ou du service des affaires étudiantes de votre université. Le fonds d'urgence du CROUS peut également intervenir pour des situations de détresse financière aiguë pendant la période d'attente.

Suivre l'avancement de votre dossier depuis votre espace Mon Compte sur caf.fr est fortement recommandé. La section «Mes démarches» vous indique le statut de votre dossier en cours d'instruction. Si votre dossier est bloqué en attente de pièces ou si un contact téléphonique est demandé par la CAF, vous en serez informé via une notification sur votre espace ou par courrier. Répondez rapidement à toutes les demandes complémentaires de la CAF : chaque jour de retard dans la transmission de pièces manquantes est un jour de plus avant le premier versement.

## Les spécificités pour les étudiants en cotutelle et les doctorants étrangers

Les doctorants étrangers et les étudiants en cotutelle internationale représentent une catégorie particulière dont la situation administrative peut être complexe. Un doctorant étranger titulaire d'un contrat doctoral est salarié de son établissement pendant la durée de sa thèse, ce qui lui confère des droits sociaux différents des étudiants non salariés tout en maintenant son statut d'étudiant. Pour l'APL, ce qui compte est la régularité du séjour (titre de séjour valide) et l'occupation d'un logement éligible à titre de résidence principale. Le statut de doctorant salarié n'exclut pas le droit à l'APL, mais les revenus du contrat doctoral (généralement autour de 2 100 euros nets par mois) peuvent réduire significativement le montant de l'aide voire la rendre nulle selon les seuils.

Pour les étudiants en cotutelle qui partagent leur séjour entre la France et leur pays d'origine, la notion de résidence principale est clé. Pour être éligible à l'APL, votre logement en France doit constituer votre résidence principale, c'est-à-dire le lieu où vous résidez de façon habituelle et durable. Si vous passez 6 mois par an en France et 6 mois dans votre pays d'origine, mais que vous êtes titulaire d'un bail annuel pour un appartement en France, votre logement français peut raisonnablement être considéré comme votre résidence principale pendant vos périodes de présence. Cependant, si vous sous-louez votre appartement pendant votre absence, ou s'il reste vide et non occupé pendant des périodes prolongées, la situation peut être plus complexe. Consultez votre CAF dans ce cas pour éviter tout trop-perçu.

## Témoignages complémentaires d'étudiants sur les démarches CAF

**Rafael Costa, 28 ans, doctorant en économie, arrivé du Brésil** : «J'ai attendu 11 semaines avant de recevoir mon premier versement d'APL. J'avais soumis tous les documents dès le premier jour mais la CAF a demandé une traduction assermentée de mon bulletin de naissance brésilien, ce que je n'avais pas anticipé. Une fois ce document fourni, tout s'est débloqué rapidement. Mon conseil : demandez à votre université ou au CROUS quels documents spécifiques votre nationalité peut nécessiter avant de déposer votre dossier.»

**Yuna Park, 24 ans, en échange Erasmus Mundus, venue de Corée du Sud** : «En tant qu'étudiante en échange, j'avais un visa long séjour valable pour toute la durée de mon master. Mais la CAF a d'abord refusé mon dossier car mon visa était de type «visiteur» et non «étudiant». J'ai dû retourner à la préfecture faire modifier la mention. C'est un détail qui a coûté 8 semaines supplémentaires. Vérifiez la mention exacte de votre titre de séjour avant de déposer votre dossier CAF.»

## Questions fréquentes complémentaires sur l'éligibilité des étrangers

**Q : Mon colocataire français peut-il m'aider à constituer mon dossier CAF si je ne parle pas encore bien français ?**
Oui. Il n'y a pas d'obligation que le demandeur constitue lui-même son dossier CAF. Vous pouvez vous faire aider par un colocataire, un ami ou un service d'accompagnement. Cependant, les informations saisies dans le dossier et les déclarations faites doivent être exactes et correspondre à votre situation réelle. La responsabilité de l'exactitude des déclarations vous incombe, même si quelqu'un d'autre a saisi les informations pour vous.

**Q : Le statut de protégé subsidiaire ouvre-t-il droit à l'APL au même titre que le statut de réfugié ?**
Les bénéficiaires de la protection subsidiaire (protection accordée par l'OFPRA à des personnes qui ne remplissent pas les conditions du statut de réfugié mais qui courent un risque sérieux en cas de retour dans leur pays) bénéficient de droits aux prestations sociales similaires au statut de réfugié pour la plupart des aides, y compris l'APL. Cependant, les conditions exactes peuvent évoluer avec la législation. Vérifiez votre éligibilité directement auprès de votre CAF ou d'une association spécialisée dans l'accompagnement des réfugiés.

**Q : En cas de refus de ma demande d'APL, quels sont mes recours ?**
Si la CAF refuse votre demande d'APL, vous recevez une notification de refus expliquant le motif. Vous disposez de deux mois pour contester cette décision auprès de la Commission de Recours Amiable (CRA) de la CAF, en fournissant les éléments justifiant votre droit. Si la CRA confirme le refus, vous pouvez saisir le tribunal judiciaire. Le médiateur de la CAF peut également être contacté pour des refus liés à des difficultés administratives ou à des interprétations des règles.

**Q : Mon numéro de Sécurité sociale provisoire (commençant par 7 ou 8) est-il suffisant pour déposer un dossier CAF ?**
Oui, un numéro de Sécurité sociale provisoire (numéro attribué en attente de l'immatriculation définitive à la CPAM) est suffisant pour ouvrir un dossier CAF et recevoir des prestations. La CAF utilisera ce numéro provisoire pendant la période d'immatriculation. Dès que vous recevez votre numéro définitif, signalez le changement à votre CAF pour mettre votre dossier à jour.

**Q : Un étudiant en situation irrégulière peut-il recevoir des aides d'urgence en dehors de l'APL ?**
L'APL et l'ALS sont réservées aux personnes en situation régulière de séjour. Cependant, certaines aides d'urgence humanitaires peuvent être accessibles indépendamment du statut de séjour, notamment via certaines associations caritatives ou les centres communaux d'action sociale (CCAS) des communes. En cas de détresse aiguë, le Samu Social (115) peut orienter vers des ressources d'aide d'urgence.
`;

// EXTENSION L5 : Impact des revenus
const EXT_L5 = `
## Optimiser sa situation fiscale pour maximiser l'APL : ce qu'il faut savoir

La fiscalité personnelle et la déclaration de revenus aux impôts interagissent de façon complexe avec le calcul de l'APL. Si la CAF utilise désormais principalement les données URSSAF en temps réel pour la contemporisation, la déclaration fiscale annuelle reste un élément clé du dossier CAF pour certaines catégories de revenus et pour l'ajustement annuel de fin de droits.

La question de l'indépendance fiscale vis-à-vis de vos parents est fondamentale pour les étudiants dont les parents perçoivent encore les allocations familiales. Si vous êtes déclaré comme enfant à charge dans la déclaration de revenus de vos parents, cela ne crée pas directement un revenu pris en compte dans votre calcul d'APL. Votre APL est calculée sur vos revenus personnels, pas ceux de vos parents. En revanche, si vos parents vous versent une pension alimentaire formalisée (dans le cadre des règles fiscales), ce montant peut être déclaré et potentiellement pris en compte dans vos ressources pour l'APL.

La déduction des frais réels professionnels dans votre déclaration de revenus peut aussi, indirectement, influencer le revenu net fiscal pris en compte pour certains calculs. Cependant, avec la contemporisation URSSAF, c'est le revenu brut versé par votre employeur qui est directement utilisé, sans retraitement fiscal. Pour les auto-entrepreneurs étudiants, les revenus déclarés à l'URSSAF dans le cadre du régime micro-entrepreneur sont directement captés par la contemporisation, ce qui peut réduire rapidement l'APL si le chiffre d'affaires augmente significativement.

## Planifier son parcours étudiant en tenant compte de l'APL

Comprendre l'impact des revenus sur l'APL permet de prendre des décisions éclairées concernant l'emploi étudiant, les stages et les autres sources de revenus sans perdre sans raison une aide dont le maintien est important pour votre budget. Cette planification n'est pas de l'optimisation fiscale illégale mais une connaissance légitime des règles qui vous permettent de prendre les meilleures décisions.

Si vous envisagez de prendre un emploi étudiant à temps partiel, évaluez l'impact potentiel sur votre APL avant de décider du nombre d'heures souhaité. Pour un salaire de 400 euros nets par mois (environ 10 heures par semaine au SMIC), l'impact sur votre APL sera modéré : une réduction de 20 à 40 euros mensuels est typique. Pour un salaire de 800 euros nets par mois (20 heures par semaine), la réduction peut atteindre 80 à 120 euros selon votre zone géographique et votre loyer. Le gain net (salaire moins réduction d'APL) reste structurellement positif, ce qui signifie que travailler augmente toujours votre revenu global même si votre APL baisse. Mais quantifier cet impact vous permet de ne pas être surpris.

Pour les stages, la règle des deux mois est importante. Un stage de moins de 2 mois, même s'il est rémunéré à un niveau significatif, n'est pas soumis aux cotisations sociales et n'apparaît donc pas dans les données URSSAF utilisées pour la contemporisation. Cela signifie qu'un stage court et bien rémunéré (un stage de 6 semaines à 1 500 euros par mois, par exemple) ne réduira pas votre APL. Un stage de 3 mois ou plus, en revanche, génère des cotisations sociales et sera pris en compte dans la contemporisation, avec un impact différé de quelques mois.

## L'impact du déménagement inter-villes sur le calcul de l'APL

Les étudiants qui changent de ville au cours de leurs études (passage du lycée à l'université, changement d'établissement en master, etc.) doivent gérer la transition de leur dossier CAF avec soin. L'APL étant calculée par rapport au logement occupé et à son loyer, un déménagement dans une autre ville implique souvent un changement de montant d'aide significatif.

Les zones géographiques (Zone I, Zone II, Zone III) déterminent les plafonds de loyer pris en compte dans le calcul de l'APL. Paris et la petite couronne sont classées en Zone I, avec les loyers plafonds les plus élevés reconnus par la CAF. Les grandes métropoles régionales (Lyon, Marseille, Bordeaux, Lille, etc.) sont en Zone II. Les autres villes sont en Zone III avec des plafonds plus bas. Un étudiant qui passe d'une ville de Zone III à Paris verra généralement son APL augmenter si son nouveau loyer est plus élevé, car le plafond de remboursement reconnu par la CAF est également plus élevé en Zone I.

Lors d'un déménagement, vous devez impérativement déclarer le changement à votre CAF dans les deux mois. La déclaration se fait via la rubrique «Signaler un changement de situation» de votre espace Mon Compte. Vous devrez fournir votre nouvelle adresse, le montant du nouveau loyer et les coordonnées du nouveau propriétaire. L'APL est recalculée à partir du premier jour du mois suivant votre déclaration sur la base du nouveau logement. Pendant la transition (si vous avez deux baux simultanément lors du chevauchement entre l'ancien et le nouveau logement), l'APL est versée pour le logement que vous déclarez comme résidence principale.

## Simulation et outils de calcul disponibles

La transparence sur le calcul de l'APL a été renforcée ces dernières années avec la mise à disposition d'outils de simulation en ligne qui permettent de tester différentes configurations avant de prendre des décisions. Ces outils sont utiles non seulement pour estimer le montant de l'aide auquel vous avez droit, mais aussi pour comprendre comment des changements de votre situation (nouveaux revenus, déménagement, mise en couple) affecteront votre aide dans le futur.

Le simulateur officiel de la CAF, accessible sur wwwd.caf.fr via la rubrique «Faire une simulation», prend en compte votre zone géographique, le montant de votre loyer, votre situation familiale et l'estimation de vos revenus des 12 derniers mois. Il calcule une estimation du montant de l'APL ou de l'ALS auquel vous pourriez prétendre. Ce simulateur est régulièrement mis à jour pour refléter les barèmes en vigueur et les dernières évolutions réglementaires. Il ne remplace pas l'instruction officielle de votre dossier (les droits réels peuvent différer légèrement de la simulation) mais donne une approximation suffisamment précise pour la planification budgétaire.

## Questions fréquentes complémentaires sur les revenus et l'APL

**Q : Comment sont traités les revenus de Twitch, YouTube ou d'autres plateformes numériques dans le calcul de l'APL ?**
Les revenus issus de créations sur les plateformes numériques (streaming, YouTube, création de contenu) sont des revenus professionnels soumis à déclaration fiscale et, selon leur nature juridique, à cotisations sociales. S'ils sont perçus dans le cadre d'une auto-entreprise, ils sont capturés par la contemporisation URSSAF. S'ils constituent des revenus non déclarés, leur non-déclaration à la CAF constituerait une anomalie dans votre dossier. Comme pour tout revenu, déclarez ces sources à la CAF lors de votre déclaration annuelle de ressources.

**Q : Puis-je recevoir des dons via des plateformes comme Leetchi pour financer mes études et continuer à recevoir l'APL ?**
Les dons ponctuels ne constituent pas des revenus réguliers et ne sont généralement pas pris en compte dans le calcul de l'APL. Cependant, des montants importants et réguliers pouvant s'assimiler à des revenus doivent être déclarés à titre de prudence dans votre déclaration annuelle. La CAF évalue la situation au cas par cas. Pour des dons occasionnels de faible montant, aucun impact n'est attendu sur votre APL.

**Q : Mon APL sera-t-elle affectée si je reçois un héritage pendant mes études ?**
Un héritage peut constituer un revenu exceptionnel ou un capital selon sa nature. Si l'héritage prend la forme d'une somme d'argent, il peut influencer votre déclaration fiscale annuelle selon le droit fiscal de succession. Les revenus du capital (intérêts, dividendes générés par un patrimoine hérité) sont pris en compte dans les ressources pour le calcul de l'APL. Un héritage purement en capital (immobilier ou somme d'argent non productive d'intérêts) n'est généralement pas pris en compte directement dans le calcul APL. En cas de réception d'un héritage significatif, mentionnez-le dans votre déclaration annuelle et consultez votre CAF.

**Q : Les aides d'un fonds d'urgence universitaire sont-elles des revenus à déclarer pour l'APL ?**
Non. Les aides d'urgence ponctuelles versées par les services sociaux des universités, des CROUS ou des associations ne constituent pas des revenus réguliers à déclarer à la CAF pour le calcul de l'APL. Ces aides sont des soutiens exceptionnels qui ne modifient pas votre situation de droit aux aides au logement.
`;

// EXTENSION L6 : Cumuler aides
const EXT_L6 = `
## Les aides spécifiques aux étudiants en situation de handicap : un cumul avantageux

Les étudiants en situation de handicap bénéficient d'un régime particulièrement favorable en matière d'aides sociales, avec plusieurs dispositifs cumulables avec l'APL qui peuvent transformer significativement leur capacité financière. Connaître l'ensemble de ces dispositifs est essentiel pour les étudiants concernés, qui représentent une part croissante de la population étudiante en France.

L'Allocation aux Adultes Handicapés (AAH) est la première aide à mentionner dans ce contexte. Elle est versée par la CAF aux personnes ayant un taux d'incapacité permanente reconnu par la MDPH (Maison Départementale des Personnes Handicapées) supérieur à 80 %. Pour les étudiants en situation de handicap, l'AAH peut se cumuler avec l'APL sous certaines conditions. Le montant de l'AAH influe cependant sur le calcul de l'APL, car il constitue une ressource. La CAF détermine le montant exact de l'APL en tenant compte de l'AAH dans les revenus de référence. Même avec cette réduction partielle de l'APL, le cumul AAH + APL représente généralement une aide totale bien plus élevée que l'APL seule.

L'Aide Ponctuelle au Handicap du CROUS (APHE) est une aide spécifique aux frais supplémentaires générés par le handicap dans le contexte des études : appareillage médical, frais d'accompagnement, matériel adapté. Cette aide est distincte de la bourse sur critères sociaux et cumulable avec l'APL. La demande est à adresser au service handicap du CROUS de votre académie, avec justificatifs médicaux à l'appui.

Les aides des collectivités locales prennent parfois des formes spécifiques pour les étudiants en situation de handicap : tarifs préférentiels sur les transports (navigo réduit en Île-de-France pour les détenteurs de cartes d'invalidité), aides à l'accessibilité du logement financées par l'ANAH (Agence Nationale de l'Habitat) en partenariat avec votre propriétaire, et parfois des aides directes de la région pour l'équipement adapté. Ces aides ne se cumulent pas négativement avec l'APL : elles constituent des ressources en nature plutôt qu'en espèces dans la plupart des cas.

## Le Plan Épargne Logement et les prêts étudiants : compléments à l'APL

Bien que l'APL soit une aide mensuelle en espèces, elle peut s'inscrire dans une stratégie plus large d'accès au logement qui inclut des outils d'épargne et de crédit. Pour les étudiants qui envisagent à terme d'acquérir un logement en France après leurs études, quelques dispositifs méritent d'être connus dès maintenant.

Les prêts étudiants garantis par l'État, proposés par plusieurs banques en partenariat avec Bpifrance, permettent de financer des projets étudiants dont le logement fait partie. Le prêt étudiant garanti n'est pas cumulable directement avec l'APL (il n'augmente pas votre aide mensuelle) mais il peut financer le dépôt de garantie ou les premiers mois de loyer avant le premier versement d'APL. Les remboursements du prêt ne débutent qu'après la fin des études, ce qui en fait un instrument de lissage financier intéressant pendant la période d'études.

Le prêt Action Logement (anciennement 1% logement) est accessible aux étudiants dont un parent est salarié d'une entreprise assujettie à la participation des employeurs à l'effort de construction (PEEC). Ce prêt à taux préférentiel peut financer l'accès au logement et compléter ou précéder la mise en place de l'APL. Renseignez-vous auprès d'Action Logement ou via votre service des affaires étudiantes.

## Maximiser l'efficacité de votre stratégie d'aides sociales

L'optimisation de l'ensemble de vos aides sociales ne consiste pas à «tricher» avec le système mais à identifier l'intégralité des droits légaux auxquels vous êtes éligible et à les activer. De nombreux étudiants laissent des centaines d'euros d'aides non réclamées chaque année par méconnaissance ou par procrastination dans les démarches.

Le portail mesdroitssociaux.gouv.fr est votre point d'entrée pour une cartographie complète de vos droits. En renseignant votre situation (âge, situation familiale, revenus, logement, emploi), le simulateur identifie l'ensemble des prestations nationales auxquelles vous pourriez prétendre et vous indique les étapes pour les demander. Ce simulateur est mis à jour régulièrement pour refléter les nouvelles mesures legislatives et réglementaires. Consultez-le au moins une fois par an et systématiquement après chaque changement de situation (début d'emploi, naissance, déménagement, changement de statut).

La résiliation anticipée de certaines aides que vous n'utilisez plus est aussi importante que leur activation. Si votre situation s'est améliorée (emploi à temps plein, revenus significativement augmentés) et que vous n'êtes techniquement plus éligible à l'APL, mettre fin proactivement à la demande d'aide évite de créer un trop-perçu qui sera réclamé plus tard avec des complications. Déclarez les changements favorables de votre situation avec la même diligence que les changements défavorables.

## Témoignages de cumul de différentes aides sociales

**Inès Almeida, 22 ans, en licence de psychologie, reconnue travailleuse handicapée** : «Je cumule l'AAH, une bourse CROUS de l'échelon 6, une APL de 115 euros (réduite à cause de l'AAH dans mes ressources) et une aide de ma mission locale pour mes frais de transport adapté. Au total, ça représente plus de 1 000 euros par mois d'aides diverses. Sans connaître l'existence de tous ces dispositifs, j'aurais laissé l'APL et l'aide mobilité de côté. L'assistante sociale du CROUS a tout cadré pour moi en une seule rencontre.»

**Théo Nguyen, 25 ans, en master d'ingénierie, alternant** : «En alternance, mon salaire est trop élevé pour l'APL mais j'ai la prime d'activité. Je ne savais pas que c'était cumulable avec mon contrat d'alternance. En faisant la simulation sur caf.fr, j'ai découvert que j'avais droit à 95 euros de prime d'activité par mois. Sur un an, c'est plus de 1 000 euros que j'aurais laissés sur la table.»

## Questions fréquentes complémentaires sur le cumul d'aides

**Q : L'APL peut-elle se cumuler avec une aide au logement d'une fondation d'entreprise ?**
Pour la plupart des aides versées sous forme de subvention directe par des fondations d'entreprise ou des comités d'entreprise, il n'existe pas d'incompatibilité légale avec l'APL. Ces aides privées ne sont généralement pas déclarables à la CAF pour le calcul de l'APL. Vérifiez les conditions de votre aide spécifique et signalez tout doute à votre CAF.

**Q : En tant qu'étudiant étranger, puis-je bénéficier du dispositif Action Logement (Visale, prêts) ?**
La garantie Visale est accessible aux étudiants étrangers de moins de 30 ans, à condition d'avoir un titre de séjour valide en France. Le statut de nationalité ne conditionne pas l'accès à la garantie Visale. En revanche, certains prêts Action Logement peuvent nécessiter de justifier d'un lien avec une entreprise employeur (parent salarié d'une entreprise éligible), ce qui peut exclure certains étudiants dont les parents travaillent à l'étranger. Vérifiez votre éligibilité en ligne sur visale.fr.

**Q : La bourse régionale se cumule-t-elle avec l'APL et la bourse CROUS ?**
Oui, dans la grande majorité des cas. Les bourses régionales sont des compléments aux aides nationales et ne se substituent pas à elles. L'APL, la bourse CROUS et la bourse régionale constituent trois sources d'aide distinctes cumulables. La bourse régionale, comme la bourse CROUS, n'est pas prise en compte comme ressource pour le calcul de l'APL.

**Q : Peut-on recevoir l'APL et un logement CROUS simultanément ?**
Non. Les résidences universitaires CROUS (résidences étudiantes gérées par les CROUS) ne sont pas des logements conventionnés APL au sens de la loi. Les loyers des logements CROUS sont subventionnés directement par l'État via le CROUS, ce qui représente une forme d'aide au logement distincte. En résidence CROUS, vous ne pouvez pas percevoir l'APL sur ce logement précisément parce que votre loyer est déjà subventionné.
`;

await appendAndPatch('486ce28a-10ab-4c88-80c8-e4e44122713f', EXT_L3);
await appendAndPatch('da7e82e3-0993-4675-9aaa-e0ea3ba7138a', EXT_L4);
await appendAndPatch('1393b8f5-c0bc-4218-aa6d-248325c219d1', EXT_L5);
await appendAndPatch('3d1ec51d-e234-40b3-9678-15c8385e866a', EXT_L6);
