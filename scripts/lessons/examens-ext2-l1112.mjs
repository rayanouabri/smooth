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

// L11: 2162 -> need ~1900 more
const ADD_L11 = `
## Les crédits ECTS et le marché du travail

La valeur des crédits ECTS sur le marché du travail est parfois surestimée ou mal comprise. Si les crédits ECTS constituent un langage commun pour la reconnaissance académique dans l'espace européen d'enseignement supérieur, les employeurs — notamment dans le secteur privé — s'intéressent moins au nombre de crédits ECTS qu'au niveau du diplôme (licence, master) et à sa spécialisation. Un recruteur ne demande pas «combien de crédits ECTS avez-vous en comptabilité ?» mais «avez-vous une licence en gestion avec spécialisation comptabilité ?».

Ce qui intéresse les employeurs dans le relevé de notes, c'est le niveau global de performance (mentions), les matières dans lesquelles l'étudiant a excellé (qui révèlent les domaines de compétence et de passion), et parfois les projets ou mémoires réalisés (qui démontrent une capacité à produire un travail autonome de qualité). La connaissance précise des crédits ECTS est plus utile dans le contexte des mobilités et des candidatures à des formations du supérieur que dans celui du premier emploi.

## La reconnaissance des qualifications dans les professions réglementées

Dans les professions réglementées (médecine, droit, pharmacie, architecture, enseignement), la reconnaissance des diplômes étrangers fait l'objet de procédures spécifiques qui vont au-delà de la simple équivalence de crédits ECTS. Chaque profession dispose de ses propres procédures de reconnaissance, administrées par des ordres professionnels (Ordre des Médecins, Ordre des Avocats, Ordre des Architectes) ou par des ministères (Éducation nationale pour l'enseignement).

Pour un étudiant étranger qui a suivi une partie de ses études dans son pays d'origine et souhaite obtenir une qualification professionnelle réglementée en France, la reconnaissance de ses acquis antérieurs via une procédure de validation ou de complément de formation est souvent nécessaire. Ces procédures peuvent être longues et complexes ; il est fortement recommandé de s'informer sur les démarches requises dès le début de son projet d'installation professionnelle en France.

## L'articulation licence-master-doctorat : une continuité de crédits

L'architecture LMD (Licence-Master-Doctorat) française organise la progression académique en trois niveaux hiérarchiques, chacun sanctionné par un diplôme national. La licence représente 180 crédits ECTS (bac+3), le master 120 crédits ECTS supplémentaires (bac+5), et le doctorat est distinct — il n'est pas comptabilisé en crédits ECTS mais sanctionné par la soutenance d'une thèse originale.

Cette architecture est conçue pour permettre des entrées et des sorties à différents niveaux selon les projets professionnels. Certains étudiants s'arrêtent après la licence (bac+3) pour entrer dans des formations professionalisantes (licences professionnelles, BUT en un an) ou directement dans le marché du travail. D'autres poursuivent jusqu'au master (bac+5) pour accéder à des postes de cadre ou de chargé d'études. Les plus investis dans la recherche poursuivent jusqu'au doctorat (bac+8 en moyenne), qui ouvre les portes de la carrière académique et de la recherche publique ou privée de haut niveau.

Chaque niveau apporte des crédits ECTS définitivement acquis, qui peuvent être valorisés pour des accès en formation continue, des candidatures à des diplômes similaires dans d'autres établissements, ou des procédures de VAE ultérieures.

## Les équivalences internationales du système de notation français

Pour les étudiants qui reviendront dans leur pays d'origine avec un diplôme français, la traduction du parcours académique français dans les conventions de notation locales est une question pratique importante. Les équivalences les plus demandées sont les suivantes.

En Amérique du Nord (États-Unis, Canada), le GPA sur 4.0 est le standard. La conversion généralement acceptée est : Très Bien (16-20/20) = 4.0, Bien (14-15,99/20) = 3.5-3.9, Assez Bien (12-13,99/20) = 3.0-3.4, Passable (10-11,99/20) = 2.0-2.9. Ces conversions ne sont pas officielles et varient selon les établissements récepteurs.

Au Royaume-Uni, le système de classification est : First Class Honours (≥70/100 ou équivalent), Upper Second / 2:1 (60-69), Lower Second / 2:2 (50-59), Third Class (40-49). La correspondance française approximative : Très Bien ↔ First, Bien ↔ Upper Second, Assez Bien ↔ Lower Second, Passable ↔ Third.

En Allemagne, la notation est inversée par rapport à la France : 1 est la meilleure note et 4 est la note de passage. Les conversions : 18-20/20 ≈ 1,0 (sehr gut) ; 15-17/20 ≈ 1,7-2,3 (gut) ; 12-14/20 ≈ 2,7-3,3 (befriedigend) ; 10-11/20 ≈ 3,7-4,0 (ausreichend).

## Les attestations et certifications complémentaires valorisables

Au-delà du diplôme principal, plusieurs certifications complémentaires peuvent enrichir le portfolio académique et professionnel d'un étudiant universitaire français.

Le diplôme universitaire (DU) est une certification créée et délivrée par une université pour des formations spécifiques non régies par les diplômes nationaux. Il offre des compétences ciblées dans des domaines comme les langues, la médiation, le coaching, ou des spécialisations professionnelles pointues. Contrairement aux diplômes nationaux, les DU ne sont pas reconnus systématiquement par les employeurs nationaux, mais ils démontrent une spécialisation et une initiative de formation continue.

Le certificat de compétences professionnelles inscrit au RNCP (Répertoire National des Certifications Professionnelles) est une certification reconnue par le marché du travail français. Son obtention peut se faire via une formation dédiée ou via une VAE pour les personnes justifiant d'une expérience professionnelle pertinente.

Les certifications de langues internationales (TOEFL, TOEIC, Cambridge pour l'anglais ; DELE pour l'espagnol ; Goethe-Zertifikat pour l'allemand ; HSK pour le mandarin) sont des atouts directs sur le marché de l'emploi et dans les candidatures à des formations internationales. Pour un étudiant qui a suivi ses études en France et maîtrise maintenant le français académique, disposer d'une double certification linguistique (sa langue maternelle + français + anglais ou autre langue) constitue un profil multilingue particulièrement valorisé.
`;

// L12: 2231 -> need ~1900 more
const ADD_L12 = `
## Les effets de la notation sur la confiance en soi

L'impact psychologique des notes sur la confiance en soi et l'auto-efficacité est un sujet bien documenté en psychologie de l'éducation. Le sentiment d'auto-efficacité — la croyance en sa propre capacité à accomplir une tâche spécifique — est l'un des prédicteurs les plus robustes de la performance académique. Or, ce sentiment est directement influencé par les retours évaluatifs reçus : des notes régulièrement mauvaises réduisent l'auto-efficacité et créent un cercle vicieux (mauvaises notes → sentiment d'incompétence → moins d'effort → mauvaises notes), tandis que des notes progressivement meilleures alimentent un cercle vertueux.

Pour les étudiants internationaux, dont les premières notes en France sont souvent inférieures à leurs performances habituelles, le risque de ce cercle vicieux est réel. La construction délibérée de succès académiques intermédiaires — un bon exposé noté, un devoir maison bien reçu, une récitation dont on est satisfait — peut être une stratégie proactive de maintien de la confiance en soi pendant la phase d'adaptation initiale.

Des chercheurs comme Albert Bandura (théorie de l'auto-efficacité) et Carol Dweck (théorie de l'état d'esprit) fournissent des cadres théoriques utiles pour comprendre comment transformer les signaux évaluatifs négatifs en information de progression plutôt qu'en jugements d'identité. Selon Dweck, les individus à «état d'esprit de croissance» (growth mindset) considèrent leurs capacités comme développables par l'effort et la pratique, ce qui les rend plus résilients face aux échecs et plus persistants face aux obstacles. Cette orientation psychologique est une compétence développable, pas un trait de caractère immuable.

## Le relevé de notes comme outil de narration professionnelle

Au moment de candidater à un premier emploi ou à une formation postérieure, le relevé de notes devient un outil de narration de votre parcours. Bien présenté et commenté, il ne dit pas seulement «voilà mes résultats» — il raconte une histoire de progression, de spécialisation et de posture académique.

Les points à mettre en valeur dans un dossier de candidature qui inclut un relevé de notes : les UE dans lesquelles vous avez excellé et qui correspondent directement au poste ou à la formation visée (votre expertise centrale), les traces de progression visible d'un semestre à l'autre (votre capacité d'adaptation et de croissance), les projets et mémoires mentionnés dans les relevés (votre capacité à produire un travail autonome de qualité), et les expériences de mobilité internationale qui enrichissent le parcours.

Les points potentiellement délicats — notes insuffisantes, redoublement, réorientation — peuvent être abordés proactivement dans la lettre de motivation, avec une explication contextualisée et orientée vers la leçon apprise et la compétence développée. Une difficulté surmontée, bien racontée, peut devenir un point de force dans un dossier de candidature plutôt qu'un point faible à dissimuler.

## La mobilité géographique et son impact sur les résultats académiques

Les étudiants internationaux qui ont bougé pour venir étudier en France ont souvent traversé des ajustements géographiques et personnels importants qui ont pu influencer leurs résultats académiques, particulièrement dans les premières semaines et les premiers mois. Ces ajustements incluent la découverte d'un nouveau logement, la création d'un réseau social de zéro, la gestion de la logistique quotidienne dans une langue étrangère, l'adaptation au climat, à la nourriture, aux rythmes de vie.

Ce contexte de migration académique est un facteur atténuant légitime que les commissions de sélection et les jurys de délibération peuvent prendre en compte. Certaines universités ont développé des dispositifs spécifiques pour les primo-arrivants (semaines d'intégration, tutorat de première année, accompagnement interculturel) précisément parce qu'elles reconnaissent que l'adaptation géographique et culturelle mobilise des ressources cognitives et émotionnelles qui entrent temporairement en compétition avec les ressources académiques.

La résilience académique — la capacité à poursuivre ses études malgré les défis de l'adaptation — est une compétence que les étudiants internationaux développent nécessairement dans leur parcours en France. Cette résilience, une fois développée, devient un atout professionnel durable : les employeurs qui recrutent des profils internationaux valorisent explicitement la capacité à s'adapter à des environnements nouveaux et à produire dans des conditions changeantes.

## Conclusion : maîtriser la notation pour mieux s'en libérer

La compréhension approfondie du système de notation français — ses conventions culturelles, ses mécanismes de calcul, ses implications pour les études et la carrière — est un investissement intellectuel qui produit un retour pratique important. Savoir lire et interpréter ses notes correctement évite les sur-réactions (panique inutile face à un 11/20 honnête) et les sous-réactions (complaisance face à une trajectoire stagnante qui nécessite un ajustement).

Mais cette maîtrise technique du système de notation n'est qu'un moyen — le but de la formation universitaire est tellement plus large et plus riche que des chiffres sur un relevé. Acquérir des connaissances solides et durables dans un champ disciplinaire, développer la capacité à penser de façon rigoureuse et créative, rencontrer des enseignants et des camarades qui enrichissent son horizon intellectuel, et sortir de l'université avec une expertise et une confiance en soi qui ouvrent des portes professionnelles et personnelles — voilà les vraies richesses d'un parcours universitaire réussi.

Les étudiants internationaux qui traversent les défis de l'adaptation au système universitaire français et les surmontent avec persévérance sortent de cette expérience avec non seulement un diplôme reconnu internationalement, mais aussi une maturité interculturelle, une résilience personnelle et une ouverture intellectuelle que les systèmes purement locaux ne peuvent pas offrir. Ces compétences transversales sont les plus précieuses à long terme, bien au-delà des notes et des mentions qui ornent les relevés de diplôme.
`;

await appendAndPatch('e26cf05b-0668-4734-9b08-4ebb4b4742fa', ADD_L11);
await appendAndPatch('0bd01774-41f3-49c8-8d69-d325de793f99', ADD_L12);
