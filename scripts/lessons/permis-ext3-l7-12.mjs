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

const EXT3_L7 = `
## La réforme de 2021 et l'accélération de la dématérialisation

La réforme dite « Bienvenue en France » de 2019 et ses suites ont profondément modifié les procédures de titre de séjour pour les étudiants et les professionnels qualifiés, avec l'ambition d'améliorer l'accueil de la France vis-à-vis des talents internationaux et de simplifier des procédures longtemps jugées trop lourdes. Cette réforme a notamment créé le titre de séjour « Passeport Talent » pluriannuel de quatre ans (bien avant 2019, le titre existait mais la réforme l'a étoffé et a étendu les catégories éligibles), renforcé la carte pluriannuelle pour les étudiants, et amélioré les procédures de traitement des dossiers dans les préfectures.

La dématérialisation des procédures, accélérée par la contrainte sanitaire de 2020-2021, a été poursuivie depuis lors. Dans les préfectures pilotes, l'ensemble du flux des demandes de titre de séjour peut désormais être géré en ligne — de la prise de rendez-vous à la délivrance de l'avis de passage pour récupérer le titre physique. Pour les usagers équipés numériquement et maîtrisant le français administratif, ce système en ligne offre une expérience nettement plus confortable que les longues heures d'attente dans les couloirs des préfectures.

La déclaration de l'adresse et les changements d'adresse, en particulier, ont été facilités par la dématérialisation — là où il fallait auparavant se déplacer physiquement pour signaler un changement d'adresse dans certaines préfectures, un simple formulaire en ligne suffit désormais dans les départements qui ont pleinement déployé le système dématérialisé.

## L'impact du récépissé sur les droits du titulaire

Le récépissé de demande de titre de séjour est un document à la valeur juridique souvent mal comprise. Il prouve que la demande de renouvellement a bien été déposée et que le demandeur est en attente d'une décision. Ce document lui permet de rester régulièrement sur le territoire pendant la durée de l'instruction, mais il ne confère pas tous les droits du titre de séjour qu'il attendait.

Sur le plan du droit à travailler, un récépissé portant la mention « autorise son titulaire à travailler » permet d'exercer son activité professionnelle habituellement. En revanche, un récépissé qui ne porte pas cette mention (par exemple, un récépissé de recours gracieux ou de première demande dans certains cas) ne crée pas automatiquement le droit au travail. Vérifier précisément les mentions portées sur son récépissé est une démarche essentielle pour éviter une irrégularité de travail non intentionnelle.

Sur le plan de la mobilité internationale, le récépissé ne permet pas de sortir du territoire et d'y revenir — seul un titre de séjour valide permet les déplacements internationaux. Un étranger qui sort du territoire avec uniquement un récépissé s'expose à ne pas pouvoir rentrer si les autorités frontalières considèrent qu'il ne peut pas justifier d'un titre de séjour valide. En pratique, les agents aux frontières Schengen vérifient les titres de séjour et un récépissé est insuffisant pour les rentrées de voyages hors Schengen.

## Les cas particuliers des familles binationaux et des parcours administratifs complexes

Les familles dans lesquelles un conjoint est français et l'autre étranger présentent des configurations administratives particulières qui méritent d'être traitées avec attention. Le conjoint étranger d'un citoyen français a en principe droit à un titre de séjour « vie privée et familiale » qui conditionne le droit au séjour à la réalité et à la continuité de la vie conjugale commune. Cette dépendance du titre à la vie conjugale crée une vulnérabilité spécifique en cas de difficultés dans le couple.

Si la relation conjugale se détériore et que les conjoints se séparent, le conjoint étranger dont le titre était fondé sur cette relation conjugale peut voir son renouvellement refusé. La loi prévoit cependant des protections dans certaines situations : les victimes de violences conjugales peuvent conserver leur titre même en cas de séparation, et les personnes ayant des enfants communs peuvent parfois accéder à un titre de séjour « parent d'enfant français » qui ne dépend pas de la continuation de la vie conjugale avec le parent français.

Cette situation, douloureuse sur le plan personnel, requiert une attention juridique rapide pour les personnes qui traversent une séparation et dont le titre de séjour est lié à la situation conjugale. Consulter un avocat spécialisé dès les premiers signes de dégradation de la relation conjugale — si le titre de séjour y est lié — est une précaution administrative importante.
`;

const EXT3_L8 = `
## Les accords de cotutelle et leur impact sur le titre de séjour

Les cotutelles de thèse — des doctorats effectués conjointement entre une université française et une université étrangère, avec des périodes de présence dans les deux pays — sont un mode de formation doctorale de plus en plus courant dans les coopérations académiques bilatérales. Ces cotutelles créent des situations administratives spécifiques pour les doctorants étrangers en termes de titre de séjour.

Un doctorant en cotutelle qui passe une partie de son doctorat en France et une autre dans son pays d'origine doit gérer son titre de séjour français de façon souple : maintenir sa régularité en France pendant les périodes de présence, ne pas être considéré comme ayant abandonné sa résidence lors des périodes passées à l'étranger. La préfecture doit être informée de la nature particulière de la formation en cotutelle, et les attestations de l'université française sont des pièces essentielles pour justifier des absences longues tout en conservant le titre de séjour.

Pour les cotutelles avec des pays hors Union européenne, les doctorants doivent également gérer leurs titres de séjour dans les deux pays simultanément — une complexité administrative qui s'ajoute à la charge intellectuelle d'un doctorat mené dans deux contextes académiques différents. Les services des Relations Internationales des deux universités partenaires sont les premiers interlocuteurs pour anticiper et organiser ces questions administratives.

## Le mentorat inversé et la transmission interculturelle

Un aspect peu visible mais culturellement riche de la présence d'étudiants étrangers dans les universités françaises est la transmission interculturelle inversée — les étudiants étrangers apportent à leurs camarades et à leurs enseignants français des perspectives, des connaissances et des pratiques culturelles qu'ils n'auraient pas acquises autrement. Cette transmission bidirectionnelle enrichit l'ensemble de la communauté académique.

Des étudiants africains en master d'entrepreneuriat peuvent apporter aux discussions de classe une perspective sur l'économie informelle, les pratiques commerciales communautaires ou les innovations technologiques adaptées aux contraintes locales qui n'est pas enseignée dans les manuels français. Des étudiants asiatiques en études d'ingénierie peuvent apporter leur connaissance des processus industriels de leurs pays d'origine. Ces apports, valorisés par les enseignants qui savent les faire émerger, enrichissent les cours et la formation de l'ensemble de la promotion.

Pour les étudiants étrangers eux-mêmes, reconnaître que leur expérience et leurs connaissances ont une valeur dans le contexte académique français — et ne pas les minimiser par modestie ou sentiment d'infériorité face au système académique du pays d'accueil — est une posture intellectuelle saine et productive.

## La préparation aux entretiens de stage et d'emploi en France

Les entretiens de recrutement en France ont des codes culturels spécifiques que les étudiants étrangers doivent maîtriser pour se présenter de façon compétitive. La France valorise dans les entretiens un certain type de raisonnement structuré — présentation claire du parcours, articulation logique des motivations, capacité à problématiser et à analyser des situations complexes — qui peut différer des attentes dans les cultures anglo-saxonnes (moins formelles, plus centrées sur les accomplissements quantifiés) ou asiatiques (plus deferentes à la hiérarchie).

La préparation des entretiens en France inclut généralement : la maîtrise de sa présentation personnelle en français (l'elevator pitch professionnel), la préparation de réponses aux questions classiques (points forts et points faibles, motivations pour le poste, projets professionnels à cinq ans), et la connaissance approfondie de l'entreprise ou de l'organisme pour laquelle on candidate. Le centre de carrière de l'université propose souvent des ateliers de préparation aux entretiens, des simulations avec des professionnels, et des ressources pour préparer son CV et sa lettre de motivation aux normes françaises.

## Les initiatives gouvernementales pour simplifier le séjour des étudiants étrangers

La France a progressivement mis en place des initiatives spécifiques pour améliorer l'accueil et le séjour des étudiants étrangers, dans le cadre de sa politique d'attractivité internationale de l'enseignement supérieur. Le programme « Bienvenue en France » a créé un label pour les établissements qui offrent des conditions d'accueil exemplaires — traitement rapide des dossiers administratifs, services d'accueil bien développés, logement facilité pour les étudiants internationaux.

Ce label est visible sur les sites web des établissements et peut être un critère de choix pour les candidats qui cherchent à minimiser les frictions administratives dans leur expérience française. Les établissements labellisés « Bienvenue en France » ont pris des engagements concrets sur plusieurs indicateurs — délais de réponse aux candidatures, qualité de l'accueil à l'arrivée, informations disponibles en anglais, qualité des logements proposés aux étudiants internationaux. Vérifier le niveau (Bronze, Argent, Or) de labellisation d'un établissement peut donner une indication sur la qualité de son accueil administratif.
`;

const EXT3_L9 = `
## L'éco-système d'innovation et le Passeport Talent pour les ingénieurs

Les grandes entreprises françaises des secteurs de la technologie, de l'énergie, de l'automobile, de l'aéronautique et des biotechnologies recrutent régulièrement des ingénieurs et des chercheurs étrangers aux niveaux de compétences très spécialisées. Pour ces recrutements, le Passeport Talent catégorie « salarié qualifié » ou, dans les cas les plus exceptionnels, la catégorie « créateur d'entreprise » sont les voies appropriées.

Les grandes entreprises françaises qui recrutent fréquemment des profils international ont généralement des services RH équipés pour gérer les procédures de titre de séjour pour leurs recrues étrangères — elles connaissent les documents requis, les délais à anticiper, et ont parfois des relations avec les services préfectoraux qui facilitent le traitement des dossiers. Pour un ingénieur étranger recruté par une grande entreprise française, l'entreprise est souvent un partenaire administratif actif dans l'obtention du titre de séjour.

En revanche, les PME et startups françaises qui recrutent pour la première fois un profil étranger peuvent être moins préparées à ces formalités. Dans ce cas, l'ingénieur recruté peut avoir à guider son employeur dans les démarches, voire à prendre en charge une partie des démarches lui-même. Disposer de connaissances sur le processus d'obtention du Passeport Talent et être capable d'expliquer les étapes à un employeur novice est donc une compétence pratique utile pour les professionnels étrangers qui cherchent à s'établir en France via des entreprises moins expérimentées en recrutement international.

## Les droits culturels et linguistiques des minorités en France

Les nationaux français et les étrangers résidant légalement en France ont des droits culturels et linguistiques garantis par la Constitution et les conventions internationales ratifiées par la France. La France reconnaît la diversité culturelle et linguistique de sa population tout en valorisant le français comme la langue de la République. Cette tension entre unité linguistique et diversité culturelle se manifeste dans les débats publics sur la place des langues régionales, des langues d'immigration, et de l'anglais dans les universités.

Pour les étrangers qui maintiennent leur langue maternelle en parallèle de leur apprentissage du français, ce bilinguisme ou multilinguisme est légalement protégé dans la sphère privée mais n'a pas de reconnaissance officielle dans les actes de la vie quotidienne avec les administrations — toutes les interactions avec les administrations françaises se font en français. Les associations culturelles d'étrangers, les écoles du week-end qui enseignent les langues d'origine aux enfants de la diaspora, et les médiathèques municipales qui proposent des fonds en langues étrangères sont les lieux où cette dimension linguistique et culturelle plurielle peut être maintenue et valorisée.

## La contribution des chercheurs étrangers à la recherche française

Les statistiques françaises de publication scientifique et d'innovations brevetées reflètent la contribution significative des chercheurs étrangers ou formés à l'étranger à la recherche publiée sous pavillon français. Des domaines comme les mathématiques, la physique, les sciences biomédicales ou l'intelligence artificielle comptent une proportion élevée de chercheurs d'origine étrangère — une réalité qui témoigne de l'attrait international de la recherche française mais aussi de la dépendance croissante de l'excellence scientifique française à la mobilité internationale des talents.

Cette réalité a des implications directes pour la politique de titre de séjour : les chercheurs étrangers qui contribuent à la recherche française sont un public prioritaire que la politique d'immigration doit chercher à attirer et à retenir. Les réformes successives du Passeport Talent Chercheur vont dans ce sens — en offrant des conditions de séjour plus favorables que celles des titres ordinaires, la France signale qu'elle valorise et cherche à retenir ces contributions. Pour les chercheurs eux-mêmes, cett valorisation est un argument supplémentaire pour considérer la France comme une destination de recherche compétitive.

## Les perspectives d'évolution du droit des étrangers dans les prochaines années

Le droit des étrangers est un domaine en évolution permanente, soumis aux oscillations politiques, aux pressions migratoires, aux obligations européennes et aux réalités économiques. Les tendances structurelles qui dessinent les évolutions probables incluent l'approfondissement de la dématérialisation des procédures, la pression pour une harmonisation européenne accrue de certains aspects du droit des étrangers, et la tension permanente entre les politiques d'attractivité pour les talents qualifiés et les politiques plus restrictives pour les flux migratoires non qualifiés.

Pour les personnes dont la situation administrative s'inscrit sur le long terme en France — qui ont vocation à y rester cinq, dix ans ou définitivement — l'incertitude sur les évolutions législatives est un facteur de stress supplémentaire. La meilleure protection contre cette incertitude est de construire sa trajectoire administrative de façon à atteindre le plus rapidement possible les niveaux les plus protecteurs du droit au séjour — la carte de résident ou la naturalisation — qui offrent une stabilité bien moins dépendante des évolutions legislatives du moment que les titres temporaires ou pluriannuels.
`;

const EXT3_L10 = `
## La carte de résident et le droit à l'unité familiale

La possession d'une carte de résident facilite considérablement les démarches pour faire venir sa famille en France ou pour maintenir l'unité familiale face aux aléas administratifs. Le titulaire d'une carte de résident qui souhaite que son conjoint et ses enfants mineurs le rejoignent en France peut déposer une demande de regroupement familial dans des conditions généralement favorables — les ressources et le logement requis sont appréciés dans le contexte d'une stabilité administrative démontrée par la carte de résident.

Pour les couples binationaux où l'un des conjoints est titulaire d'une carte de résident, le conjoint étranger peut accéder plus facilement à un titre de séjour « vie privée et familiale » de longue durée — quatre ans dans certains cas — qui offre une stabilité comparable à celle de la carte de résident mais acquise par la voie familiale plutôt que par la voie de la résidence personnelle.

La carte de résident est également un argument de poids dans les procédures judiciaires liées à la garde d'enfants franco-étrangers. Un juge aux affaires familiales qui doit décider de la garde d'un enfant dont l'un des parents est étranger sera généralement moins préoccupé par la situation administrative du parent titulaire d'une carte de résident que par celle d'un parent en titre temporaire — la stabilité administrative peut contribuer à rassurer le tribunal sur la stabilité générale de la situation du parent.

## Les assurances privées complémentaires pour les étrangers

La protection sociale française, bien que généreuse dans son principe, présente des lacunes que les étrangers titulaires de titre de séjour peuvent avoir intérêt à couvrir par des assurances privées complémentaires. La principale lacune est la couverture santé partielle : la Sécurité sociale rembourse une partie des soins selon des barèmes officiels qui peuvent laisser un reste à charge significatif pour certains soins (prothèses dentaires, lunettes, soins spécialisés non pris en charge à 100%).

Pour les profils étrangers dont les revenus sont modestes — notamment les étudiants, les doctorants et les débuts de carrière — la Complémentaire Santé Solidaire (CSS) offre une couverture complémentaire sans reste à charge sous conditions de ressources. Pour les profils à revenus plus élevés, le marché des mutuelles privées offre une gamme de produits dont les niveaux de couverture et les primes varient considérablement, permettant à chacun de calibrer sa couverture en fonction de ses besoins.

Les assurances responsabilité civile privée, les assurances habitation et les assurances liées à des activités spécifiques (sport, voyage) sont également des protections complémentaires que les étrangers résidant en France doivent souscrire au même titre que les nationaux, sans particularité liée à leur statut d'étranger — sauf exception dans les conditions générales de certains assureurs qui vérifieront la régularité du séjour.

## L'intégration professionnelle et la mobilité socio-profession nelle

La carte de résident, en facilitant l'accès aux emplois de la fonction publique et en éliminant l'incertitude sur la pérennité du séjour, permet aux étrangers de s'engager dans des trajectoires professionnelles longues dans des secteurs qui avaient été inaccessibles avec des titres temporaires. Des concours de la fonction publique — enseignant, fonctionnaire territorial, professionnel de santé dans le service public — sont accessibles aux titulaires de la carte de résident de l'UE. Seuls les emplois impliquant l'exercice de la souveraineté nationale (magistrat, officier militaire, diplomate, policier national) restent réservés aux nationaux français.

Cette ouverture du marché du travail — qui est complète à l'exception des emplois régaliens — est l'un des facteurs qui font de la carte de résident une étape aussi significative dans le parcours d'un étranger en France. Elle transforme le rapport à l'emploi : plus besoin de rechercher exclusivement des postes dans le secteur privé international où la nationalité étrangère n'est pas discriminante, plus besoin de décliner des opportunités dans le secteur public ou associatif qui requéraient la nationalité française.
`;

const EXT3_L11 = `
## Les statistiques et les réalités de l'immigration en France

Comprendre les réalités statistiques de l'immigration en France permet de contextualiser les trajectoires individuelles et de dépasser certaines représentations biaisées qui circulent dans le débat public. La France accueille chaque année environ 250 000 à 300 000 premiers titres de séjour, dont une large majorité dans les catégories familiales et étudiantes. Les motifs économiques (travail, Passeport Talent) représentent une proportion significative mais pas majoritaire des titres délivrés.

La durée moyenne de séjour des étrangers en France est beaucoup plus longue que l'imaginaire populaire ne le suggère : une grande majorité des étrangers résidant en France sont installés depuis plus de dix ans, ont une couverture sociale complète, paient des impôts et des cotisations, font leurs enfants à l'école française. La représentation de l'immigration comme un flux permanent de nouveaux arrivants masque la réalité d'une population immigrée largement installée et intégrée.

Ces données statistiques sont importantes pour les personnes étrangères elles-mêmes, car elles révèlent qu'elles font partie d'une communauté bien plus large et bien plus stable que les représentations médiatiques du « problème de l'immigration » ne le laissent entendre. La solidarité entre étrangers de générations différentes et de nationalités diverses est une ressource collective précieuse que les associations et les réseaux communautaires véhiculent.

## La discrimination administrative et les voies de recours spécifiques

La discrimination dans les services administratifs — notamment dans le traitement des demandes de titre de séjour — est un phénomène documenté par des études et des organisations de défense des droits, même si sa preuve concrète dans une situation donnée est difficile à établir. Un traitement différencié non justifié, une exigence de documents supplémentaires non prévus par les textes, ou un refus verbal sans motivation officielle peuvent constituer des formes de discrimination administrative.

Le Défenseur des droits, institution indépendante créée par la Constitution française, est compétent pour recevoir des réclamations relatives à des discriminations dans les services publics, y compris les services préfectoraux. Les réclamations peuvent être déposées en ligne sur le site du Défenseur des droits, qui instruit la réclamation, contacte l'administration mise en cause et peut formuler des recommandations. Ce recours est gratuit, non contentieux, et ne préjuge pas des recours juridictionnels qui peuvent être exercés parallèlement.

## L'orientation vers les bonnes ressources pour les situations spécifiques

Les situations administratives complexes requièrent des ressources spécialisées plutôt que des conseils généraux. Pour les personnes en procédure d'asile, les associations spécialisées dans l'accueil des demandeurs d'asile (France Terre d'Asile, Coallia, Forum Réfugiés) offrent un accompagnement bien plus adapté que les associations d'aide aux étrangers généralistes. Pour les situations relevant du droit du travail — notamment les problèmes de titre de séjour liés à un contrat de travail —, la combinaison d'une consultation en droit du travail et d'une consultation en droit des étrangers est souvent nécessaire.

Pour les ressortissants de pays spécifiques dont le droit des étrangers en France présente des particularités — ressortissants algériens (accord bilatéral de 1968), ressortissants tunisiens ou marocains (accords bilatéraux), ressortissants des pays ACP avec des dispositions particulières —, le recours à un professionnel ou une association connaissant spécifiquement ces régimes particuliers est essentiel pour éviter d'appliquer à tort le droit commun à une situation régie par un accord particulier.

## L'histoire de l'immigration en France : un contexte pour comprendre le présent

Le système actuel des titres de séjour en France ne s'est pas construit d'un seul tenant mais est le résultat d'une sédimentation législative de plus d'un siècle d'histoire migratoire. Les premières lois organisant le séjour des étrangers en France remontent à la fin du XIXème siècle. L'entre-deux-guerres a vu une immigration de masse liée aux besoins de main-d'œuvre de la reconstruction. Les Trente Glorieuses d'après-guerre ont vu l'immigration s'accélérer, non par le jeu automatique du marché mais par des politiques actives de recrutement de main-d'œuvre étrangère.

Cette histoire longue explique pourquoi le droit des étrangers en France est à la fois sophistiqué (de nombreuses catégories et situations prises en compte) et complexe (des strates législatives successives parfois contradictoires). Elle explique aussi pourquoi la France entretient des relations bilatérales particulières avec certains pays d'immigration ancienne — Algérie, Maroc, Tunisie, Portugal, Italie, Espagne — qui se reflètent dans des accords bilatéraux et des dispositions spécifiques. Comprendre ce contexte historique aide à appréhender les logiques profondes du système administratif actuel et à le naviguer avec une meilleure compréhension de ses cohérences et de ses incohérences.
`;

const EXT3_L12 = `
## Le parcours émotionnel de la naturalisation

La naturalisation est une démarche administrative mais elle est aussi, pour beaucoup de personnes qui y accèdent, un moment de forte charge émotionnelle et identitaire. Après des années — parfois des décennies — à vivre en France comme étranger, à naviguer dans un système administratif qui rappelle régulièrement son statut de « résident temporaire », la naturalisation représente une transformation profonde de la relation à la France et à soi-même.

Le sentiment de reconnaissance est souvent central dans les témoignages de personnes naturalisées : la reconnaissance que les années de travail, d'intégration, d'adaptation et de contribution ont été vues et valorisées par la société française. Ce sentiment est d'autant plus fort que le parcours d'intégration a été long et difficile. Pour certaines personnes, la naturalisation est aussi le moment de réconciliation avec leur propre désir de rester en France — un désir qu'ils avaient peut-être maintenu ambigu pour des raisons sentimentales ou familiales liées au pays d'origine.

La dimension symbolique de la cérémonie de naturalisation — organisée dans certaines villes et départements pour les nouvelles recrues de la citoyenneté française — contribue à marquer ce moment de son importance historique personnelle. Ces cérémonies, déléguées à la discrétion des préfets et des maires, ne sont pas systématiques mais, lorsqu'elles ont lieu, elles créent un espace collectif pour célébrer l'intégration et le choix de la France.

## La naturalisation des personnes âgées

La naturalisation de personnes âgées — qui ont passé toute leur vie active en France mais n'ont jamais demandé la naturalisation — soulève des questions spécifiques. Ces personnes ont souvent une intégration factuelle totale dans la société française mais peuvent être handicapées dans leur démarche de naturalisation par un niveau de français à l'oral insuffisant pour satisfaire l'entretien d'assimilation, ou par des difficultés à rassembler les documents d'état civil nécessaires pour un dossier complet.

La loi prévoit des aménagements pour les personnes âgées de plus de soixante-dix ans dont l'état de santé empêche d'assurer une maîtrise suffisante du français : l'appréciation de la condition linguistique peut être allégée pour ces profils. Les services préfectoraux peuvent également faire preuve de souplesse dans l'appréciation de l'intégration d'une personne qui a manifestement construit toute sa vie en France, même si son niveau de français oral ne satisfait pas formellement les critères habituels.

Pour les personnes âgées qui envisagent de demander la naturalisation, l'accompagnement par des associations spécialisées ou des proches maîtrisant le français administratif est particulièrement précieux. La constitution du dossier — notamment la reconstitution des preuves de résidence sur plusieurs décennies — est un travail de mémoire documentaire qui peut être complexe mais qui est généralement possible avec de la patience et de l'organisation.

## Les perspectives pour les étudiants naturalisés dans la vie publique française

La France a vu, au fil des décennies de naturalisation, l'émergence d'une génération de citoyens issus de l'immigration qui ont accédé à des postes de responsabilité dans diverses sphères de la vie publique française — politique, économique, culturelle, scientifique. Ces trajectoires illustrent concrètement les possibilités ouvertes par la naturalisation et dessinent une image de la société française en mouvement, progressivement plus diverse dans ses élites.

Des ministres, des maires, des patrons de grandes entreprises, des académiciens, des artistes et des chercheurs qui ont été naturalisés français témoignent de la perméabilité des institutions françaises aux personnes d'origine étrangère qui attaining les compétences et les conditions requises. Ces exemples sont à la fois une source d'inspiration pour les personnes qui traversent leur propre parcours de naturalisation et une illustration des attentes élevées que la société française formule à l'égard des naturalisés : présence, engagement, participation active.

## Questions fréquentes sur les délais et les documents

Quelques questions pratiques sur la naturalisation méritent une réponse directe. Sur la question du délai minimal avant de pouvoir déposer une demande de naturalisation après l'obtention d'un titre de séjour : le délai de cinq ans de résidence régulière est calculé à partir du premier titre de séjour régulier, et non à partir d'un titre particulier comme la carte de résident. Une personne qui a cinq ans de résidence régulière peut demander la naturalisation directement, sans passer obligatoirement par la carte de résident au préalable.

Sur la question des documents d'état civil étrangers impossibles à obtenir : des pays connaissent des situations de guerre, de désorganisation administrative ou d'hostilité politique qui font que les documents d'état civil ne peuvent pas être obtenus. Dans ces situations, ENIC-NARIC ou les associations spécialisées peuvent aider à identifier des alternatives — actes de notoriété, déclarations sur l'honneur solennelles, attestations consulaires. Ces alternatives sont acceptées par les services de naturalisation lorsqu'elles sont justifiées et documentées.

Sur la question de la participation à des élections étrangères pendant la procédure de naturalisation : aucune loi française n'interdit à un étranger de voter dans son pays d'origine pendant qu'il est en France avec un titre de séjour ou en cours de naturalisation. La naturalisation française ne requiert pas la renonciation préalable à toute participation à la vie politique du pays d'origine — elle requiert l'adhésion aux valeurs de la République française et la loyauté à la France en tant que citoyen.
`;

await appendAndPatch('aac8c4c1-7ab2-45b3-a5b5-4e2748f16939', EXT3_L7);
await appendAndPatch('2db95ef5-7de7-4bac-a68f-0ef96dddf981', EXT3_L8);
await appendAndPatch('c22002fe-75ce-41af-bd63-5ed570312d28', EXT3_L9);
await appendAndPatch('9419e826-62cc-4a80-96e5-638ba995184e', EXT3_L10);
await appendAndPatch('9a533bac-7df9-412e-922e-0dcdf500fd0b', EXT3_L11);
await appendAndPatch('42981160-abc6-46a3-a324-505dfc7ea75e', EXT3_L12);
