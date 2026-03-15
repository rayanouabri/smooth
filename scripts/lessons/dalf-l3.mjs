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

const DALF3 = `# Le DALF : qu'est-ce que c'est et pourquoi le passer ?

La question de la certification de la maîtrise du français comme langue étrangère se pose inéluctablement pour tout étudiant ou professionnel non francophone natif souhaitant s'installer, étudier ou travailler dans un pays francophone. Entre les différentes certifications disponibles sur le marché — DELF, DALF, TCF, TEF, pour les tests francophones, mais aussi IELTS, TOEFL et Cambridge pour l'anglais qui servent de référence par comparaison — le DALF (Diplôme Approfondi de Langue Française) occupe une position à la fois distinctive et centrale. Il n'est ni un test de positionnement ni une certification à durée limitée, mais un diplôme officiel de l'État français, permanent et reconnu internationalement, qui atteste d'une maîtrise avancée ou d'une maîtrise complète du français selon le niveau choisi (C1 ou C2). Cette leçon vous explique ce que le DALF est précisément, comment il s'inscrit dans l'architecture des certifications de langue française, pourquoi le passer représente un investissement pertinent, et comment il se compare aux autres options disponibles.

## Origines et histoire du DALF

Le DALF a été créé en 1985 par le Ministère de l'Éducation Nationale français, dans le contexte d'une réflexion nationale sur la promotion et la certification du français comme langue internationale. Cette création répondait à un double constat : d'une part, la montée en puissance de l'anglais comme langue internationale de communication créait une concurrence forte pour le français dans les échanges académiques et économiques mondiaux ; d'autre part, les certifications existantes n'offraient pas une preuve suffisamment rigoureuse et standardisée de la maîtrise du français pour les niveaux avancés.

Le DALF a d'abord coexisté avec le DELF (Diplôme d'Études en Langue Française) dans un système à six niveaux. La rénovation majeure de l'architecture des certifications, opérée en 2005 avec l'adoption généralisée du Cadre Européen Commun de Référence pour les Langues (CECRL) publié par le Conseil de l'Europe, a simplifié et harmonisé la structure. Depuis cette réforme, le DELF couvre les niveaux A1, A2, B1 et B2 du CECRL, tandis que le DALF couvre les niveaux C1 et C2. Cette architecture bipartite est la même que celle adoptée par les certifications d'autres langues européennes, ce qui facilite la reconnaissance internationale.

L'organisme qui administre les certifications DELF et DALF a évolué dans le temps. Initialement géré par le CIEP (Centre International d'Études Pédagogiques), l'administration des examens a été confiée à France Éducation International (FEI), établissement public placé sous la tutelle du Ministère de l'Éducation Nationale et du Ministère de l'Europe et des Affaires Étrangères. France Éducation International est responsable du développement des épreuves, de la formation des examinateurs et correcteurs, de la gestion du réseau mondial de centres agréés, et de l'émission des diplômes officiels.

## Le DALF dans l'architecture des certifications de langue française

Pour comprendre le DALF dans sa singularité, il est utile de cartographier l'ensemble des certifications de langue française existantes et de comprendre à qui chacune s'adresse et dans quel contexte elle est utilisée.

Le DELF et le DALF forment une famille de diplômes d'État français cohérente et progressive, allant du niveau A1 (débutant) pour le DELF au niveau C2 (maîtrise) pour le DALF. Ces diplômes sont des certifications permanentes (sans date d'expiration), officiellement délivrées par l'État français, reconnues dans plus de 175 pays, et dont les épreuves et les niveaux sont harmonisés avec le CECRL. Ils sont conçus pour tous les apprenants de français, quel que soit leur âge, leur nationalité ou leur niveau d'études, sous réserve des versions spécifiques (DELF Junior pour les moins de 18 ans, DELF Prim pour les enfants du primaire, DELF Pro pour les contextes professionnels).

Le TCF (Test de Connaissance du Français) est un test administré par France Éducation International qui mesure le niveau de compétence en français sur l'ensemble de l'échelle CECRL (A1 à C2) en une seule session. Contrairement au DELF/DALF qui certifie un niveau précis, le TCF est un test de positionnement dont les résultats sont valables deux ans. Il est proposé en plusieurs versions selon les usages : TCF général, TCF DAO (pour la demande d'admission en France via Campus France), TCF Canada (pour les candidatures à l'immigration au Canada), TCF ANF (pour les demandes de nationalité française). Le TCF est souvent choisi par des candidats qui ont besoin rapidement d'une certification de langue pour une démarche administrative spécifique et ne visent pas la permanence d'un diplôme d'État.

Le TEF (Test d'Évaluation du Français) est administré par la Chambre de Commerce et d'Industrie de Paris Île-de-France (CCIP-IDF). Comme le TCF, c'est un test dont les résultats sont valables deux ans. Il est principalement utilisé dans les procédures d'immigration vers le Canada (notamment Québec) et la Belgique, et est moins systématiquement accepté dans les procédures d'admission universitaire française que le TCF ou le DALF/DELF.

## Pourquoi le DALF se distingue de toutes les autres certifications

Quand vous choisissez de préparer et de passer le DALF C1 ou C2 plutôt qu'un TCF ou un TEF, vous choisissez une logique différente de la simple évaluation : vous visez un diplôme d'État qui certifie votre niveau pour toujours. Cette permanence est la caractéristique la plus fondamentale du DALF et la raison principale pour laquelle il est préférable pour toute personne dont les projets en France ou dans l'espace francophone s'inscrivent dans la durée.

La permanence du DALF signifie concrètement que vous n'aurez jamais à repasser un test de langue pour une deuxième candidature universitaire, une troisième, une quatrième. Chaque fois qu'un établissement d'enseignement supérieur vous demande une preuve de compétence en français, votre DALF C1 ou C2 répond à cette demande, sans expiration, sans renouvellement, sans coût supplémentaire. Sur une trajectoire académique longue — licence, master, doctorat dans différents établissements — cette permanence représente une économie de temps, d'argent et d'énergie significative.

La cohérence avec le CECRL est une deuxième raison de choisir le DALF. Le Cadre Européen Commun de Référence pour les Langues est le standard international de description des compétences langagières reconnu dans toute l'Europe et dans la majorité des pays développés. Un «DALF C1» est immédiatement compréhensible par toute personne (directeur d'école, responsable des ressources humaines, conseiller consulaire) familiarisée avec ce standard. Cette lisibilité internationale facilite la reconnaissance de votre niveau en dehors des contextes strictement administratifs français.

La rigueur du processus d'évaluation est une troisième raison. Le DALF est corrigé par des correcteurs certifiés et formés par France Éducation International selon des grilles d'évaluation précises et harmonisées. La standardisation des conditions d'examen (sujets identiques dans le monde entier lors d'une session, grilles d'évaluation centralisées, formation obligatoire des examinateurs) garantit que votre DALF C1 obtenu en Inde vaut exactement la même chose qu'un DALF C1 obtenu en France ou au Mexique.

## La dimension culturelle du DALF : comprendre pour maîtriser

Le DALF n'est pas qu'un test de grammaire et de vocabulaire. Il évalue une compétence communicative globale qui inclut une dimension interculturelle importante. Les sujets proposés dans les épreuves de compréhension et de production sont authentiques — extraits de la presse française, d'émissions radiophoniques, de textes académiques — et reflètent les préoccupations culturelles, intellectuelles et sociales de la société française contemporaine. Travailler pour le DALF, c'est donc aussi se cultiver sur la société française, comprendre ses débats, ses références et ses valeurs.

Cette dimension culturelle du DALF est un avantage souvent sous-estimé par les candidats qui se préparent exclusivement sur des exercices techniques. Les candidats qui obtiennent les meilleures notes au DALF, et en particulier à l'épreuve de production orale, sont souvent ceux qui ont développé une connaissance et une sensibilité réelles à la culture française, pas seulement ceux qui ont maîtrisé les techniques de l'argumentation formelle. La curiosité intellectuelle pour les affaires françaises et francophones, cultivée régulièrement à travers la lecture de la presse, l'écoute de la radio et le visionnage de films et de documentaires, est une ressource préparatoire du DALF qui n'est pas contenue dans les manuels.

## Les contextes où le DALF est exigé ou fortement recommandé

Au-delà de l'admission dans l'enseignement supérieur français, le DALF est utile ou exigé dans plusieurs autres contextes de vie en France ou dans l'espace francophone.

Pour les candidatures à des postes dans la fonction publique française (en tant qu'agent contractuel ou fonctionnaire), la maîtrise du français est une exigence légale. Un DALF C1 peut servir de preuve de cette maîtrise dans le cadre d'une candidature. Pour les professions réglementées en France (médecin, avocat, architecte, etc.) dont l'exercice est soumis à une reconnaissance professionnelle par l'ordre correspondant, la maîtrise du français peut être vérifiée et un DALF C1 ou C2 peut constituer la preuve requise.

Pour les candidatures à la nationalité française, la loi française exige que le candidat à la nationalisation démontre une maîtrise suffisante du français. Jusqu'à récemment, un niveau B1 était le minimum requis. Des évolutions législatives ont progressivement relevé cette exigence vers un niveau B2 pour certaines voies de naturalisation. Un DALF C1 ou C2 dépasse largement cette exigence et constitue une preuve incontestable de l'intégration linguistique du candidat.

## Les alternatives au DALF et comment choisir

Face au DALF, vous pouvez être tenté de choisir une alternative comme le TCF ou le DELF B2 si votre objectif immédiat est simplement de satisfaire à une exigence d'admission avec le minimum d'investissement. Cette stratégie est rationnelle dans un contexte de candidature unique et immédiate. Elle devient moins efficace si vos projets en France s'étendent sur plusieurs années.

La règle de décision pratique est simple : si vous envisagez plusieurs années d'études en France (passage en master après la licence, potentiellement un doctorat) ou si vous pensez que vous voudrez peut-être retravailler ou réétudier en France dans le futur, investissez dans un DALF C1 dès maintenant. Le retour sur investissement est positif dès votre deuxième candidature dans un établissement différent. Si vous faites une seule candidature pour une formation courte et ne prévoyez pas de rester en France au-delà, un TCF ou un DELF B2 peut suffire et demander moins de préparation.

## Témoignages sur la valeur du DALF

**Nadia Oumarou, 26 ans, venue du Niger, aujourd'hui doctorante à Paris** : «Le DALF C1 que j'ai passé avant ma licence m'a servi depuis sans interruption. J'en suis à ma troisième admissions dans des établissements parisiens différents — une licence, un master 1, puis un master 2 dans une autre université — et à chaque fois, le DALF C1 a suffi pour la certification linguistique. Jamais à repasser un test. Le coût et l'effort de la préparation initiale ont été amortis bien au-delà de mes attentes.»

**Felix Müller, 31 ans, journaliste allemand basé à Paris** : «Travailler comme correspondant en France nécessitait que je démontre un niveau de français qui dépasse le seuil fonctionnel. Mon employeur a été rassuré par le DALF C2 que j'avais obtenu deux ans après mon arrivée en France. Ce diplôme m'a aidé à me positionner dans un marché professionnel très exigeant sur la langue.»

## Questions fréquentes sur le DALF en général

**Q : Quelle est la différence entre le DALF et la certification de français des Alliances Françaises ?**
Les Alliances Françaises proposent leurs propres tests internationaux d'évaluation du français, comme le DELF et le DALF qu'elles sont parfois agréées à organiser, ainsi que parfois des tests maison (CEFR tests institutionnels). La distinction essentielle est que le DALF est un diplôme d'État français à valeur juridique formelle, tandis qu'un certificat interne d'une Alliance Française n'a pas la même portée légale pour des procédures d'admission ou administratives.

**Q : Le DALF est-il reconnu pour travailler comme enseignant de FLE à l'étranger ?**
Le DALF C2 est souvent la certification recommandée pour les enseignants de FLE à l'étranger, comme preuve de leur maîtrise de la langue qu'ils enseignent. Dans certains pays, les employeurs (instituts français, alliances françaises, lycées bilingues) exigent formellement un DALF C1 ou C2 chez leurs recrutements. Ce certificat valorise indéniablement un dossier de candidature à un poste d'enseignement.

**Q : Peut-on passer le DALF en candidat libre, sans être inscrit dans un cours de préparation ?**
Oui. L'inscription à l'examen DALF ne requiert pas d'être inscrit dans un cours de préparation ou dans un établissement scolaire. Tout candidat qui satisfait aux conditions d'inscription du centre d'examen (notamment l'âge minimum, généralement 16 ans pour le DALF) peut s'inscrire en candidat libre. La préparation personnelle, via des manuels, des ressources en ligne et la pratique autonome, est une option entièrement viable.

**Q : Le DALF dispense-t-il du test de français lors d'une candidature à l'immigration au Canada ?**
Pour l'immigration au Québec, le test de référence est le TCF Canada ou le TEF Canada. Le DALF C1 ou C2 est reconnu par les autorités québécoises d'immigration comme preuve de compétence en français et peut servir de substitut aux tests spécifiques d'immigration. Pour l'immigration vers d'autres provinces canadiennes, les critères varient selon le programme d'immigration. Vérifiez les exigences spécifiques du programme auquel vous candidatez.

## Ressources officielles

- [France Éducation International](https://www.france-education-international.fr) : L'organisme officiel du Ministère de l'Éducation Nationale qui administre DELF et DALF
- [Cecrl.eu](https://www.coe.int/fr/web/common-european-framework-reference-languages) : Le Cadre Européen Commun de Référence pour les Langues du Conseil de l'Europe
- [DelfdaLF.fr](https://www.france-education-international.fr/diplome/dalf) : Toute l'information officielle sur le DALF, les sessions, les centres agréés et les ressources de préparation
`;

await patch('2ba85f3d-a957-4d2d-a409-9d476b648272', DALF3);
