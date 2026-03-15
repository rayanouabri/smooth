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

const DALF2 = `# DALF C2 : atteindre et certifier la maîtrise complète du français

Le niveau C2 du Cadre Européen Commun de Référence pour les Langues représente le sommet de la compétence dans une langue étrangère. Pour le français, ce niveau correspond à ce que les linguistes désignent comme une «maîtrise» : non pas la compétence d'un locuteur natif dans sa langue maternelle, mais la capacité à utiliser la langue avec une précision, une nuance et une aisance équivalentes dans presque toutes les situations de communication, aussi complexes, abstraites ou culturellement chargées soient-elles. Le DALF C2 est le diplôme qui certifie officiellement l'atteinte de ce niveau pour la langue française. Obtenu par une minorité des candidats — ceux qui ont atteint un niveau exceptionnel à la suite d'années d'apprentissage intensif, d'immersion prolongée ou de pratique professionnelle soutenue — il représente une distinction réelle dans un parcours d'apprentissage et ouvre des portes spécifiques dans le monde académique et professionnel francophone.

## Qui sont les candidats au DALF C2 ?

Le DALF C2 ne s'adresse pas à tous les apprenants de français, loin de là. Il cible un public spécifique dont le niveau de compétence est déjà très avancé et qui a des raisons précises de vouloir certifier officiellement cette maîtrise. Connaître le profil type des candidats au DALF C2 vous permet d'évaluer si ce niveau est pertinent pour votre situation ou si le DALF C1 est plus approprié.

Les candidats les plus fréquents au DALF C2 sont des professeurs de français langue étrangère (FLE) qui souhaitent obtenir une certification de référence pour leur pratique professionnelle, des traducteurs ou interprètes professionnels travaillant vers le français, des journalistes ou communicants dont le travail s'effectue principalement en français, des diplômés de grandes universités francophones souhaitant valider formellement leur niveau après des années d'immersion, et des étudiants qui visent les formations d'élite en France (grandes écoles, CPGE, masters de recherche très sélectifs) pour lesquelles le DALF C2 constitue un argument fort dans le dossier.

Pour les étudiants internationaux en France, le DALF C2 est souvent visé après plusieurs années d'études en France, une fois que l'immersion totale a porté ses fruits et que le niveau de maîtrise réel rejoint les exigences de C2. Passer un DALF C2 en fin de licence ou de master, après deux ou trois années d'études entièrement conduites en français, est une démarche qui valorise rétrospectivement le parcours et ouvre des perspectives professionnelles ou académiques futures.

## La structure de l'examen DALF C2

Le DALF C2, comme le DALF C1, est structuré en quatre épreuves correspondant aux quatre compétences communicatives évaluées par le CECRL : la compréhension de l'oral, la compréhension de l'écrit, la production écrite et la production orale. Ces quatre épreuves sont conçues pour tester la maîtrise de la langue à un niveau de complexité très élevé, avec des documents authentiques, des sujets d'une richesse thématique et culturelle importante, et des attentes en termes de précision, de nuance et d'argumentation qui dépassent significativement celles du DALF C1.

La compréhension de l'oral au niveau C2 confronte le candidat à plusieurs documents sonores authentiques de types variés : conférences académiques, débats d'experts, documentaires culturels, émissions radiophoniques sur des sujets complexes. La durée totale des documents est d'environ 30 à 40 minutes, et les questions posées vont au-delà de la simple identification d'informations explicites pour interroger la capacité du candidat à inférer, à identifier les implicites, à comprendre le point de vue des locuteurs et à saisir les nuances stylistiques et rhétoriques des discours. La prise de notes est essentielle à ce niveau et les exercices incluent souvent la synthèse de plusieurs sources orales.

La compréhension de l'écrit au niveau C2 repose sur des textes authentiques de longueur significative, extraits de publications académiques, d'ouvrages de référence, de journaux de qualité nationale ou internationale, ou d'essais. Les textes choisis traitent généralement de sujets à caractère intellectuel, culturel, social ou scientifique qui supposent une culture générale étendue et une capacité à traiter des concepts abstraits et des raisonnements complexes. Les questions correspondent à une lecture active, analytique et critique : identification des arguments, des structures logiques, des présupposés, des implicites idéologiques ou culturels.

La production écrite au niveau C2 demande au candidat de produire des écrits longs, structurés et argumentés à partir d'un dossier documentaire fourni lors de l'examen. Les productions attendues à ce niveau correspondent aux genres académiques les plus exigeants : écriture d'un article de synthèse, rédaction d'une contribution à un débat d'idées, composition d'un essai analytique. La longueur attendue dépasse généralement 600 à 700 mots de production personnelle, avec des critères stricts sur la maîtrise grammaticale, la richesse lexicale, la cohérence et la cohésion discursive, et la pertinence et la profondeur de l'argumentation.

La production orale au niveau C2 est une interaction avec un jury composé de deux examinateurs, au cours de laquelle le candidat est amené à présenter un exposé construit à partir d'un dossier documentaire lu en amont, puis à soutenir ses positions dans une interaction dynamique avec le jury. La durée totale de cette épreuve (préparation comprise) est d'environ 40 minutes. Ce qui distingue l'expression orale au niveau C2 de celle requise en C1 est la capacité à manier l'humour, la nuance, les références culturelles et les constructions rhétoriques complexes avec une aisance et une spontanéité qui ressemblent à celle d'un locuteur cultivé ayant le français pour langue principale.

## Scoring et conditions d'obtention du DALF C2

Le DALF C2 est noté sur un total de 100 points, répartis entre les quatre épreuves. Pour obtenir le diplôme, le candidat doit réunir deux conditions simultanément : atteindre un score global minimum de 50 points sur 100, et obtenir au moins 5 points sur 25 dans chacune des quatre épreuves. Cette double condition garantit qu'aucune compétence n'est totalement lacunaire chez le diplômé. Un candidat qui obtient zéro en production orale mais 60 points dans les trois autres épreuves n'obtient pas le diplôme, même avec une note totale supérieure à 50.

Le taux de réussite au DALF C2 est structurellement inférieur à celui du DALF C1. Les candidats qui se présentent au C2 sans niveaux sufisants dans toutes les épreuves se heurtent souvent à la note plancher dans la compréhension de l'oral ou dans la production écrite, two épreuves qui exigent une précision et une profondeur que même des apprenants très avancés doivent travailler spécifiquement. Il est fortement conseillé de passer le DALF C2 uniquement si vous êtes déjà à un niveau C1 avancé (candidat ayant obtenu le DALF C1 avec une note globale supérieure à 65/100 ou témoignant d'une immersion de plusieurs années dans un contexte francophone intensif).

## Ce que le DALF C2 apporte sur le plan académique et professionnel

L'obtention du DALF C2 est une distinction qui va au-delà de la simple certification pour l'admission universitaire. Elle constitue une preuve de compétence linguistique exceptionnelle qui peut être valorisée dans de nombreux contextes académiques et professionnels tout au long de la vie.

Sur le plan académique, un DALF C2 portant sur votre CV lors d'une candidature à un doctorat, à un post-doctorat ou à un poste de recherche dans une institution francophone envoie un signal fort sur votre intégration linguistique dans l'environnement de recherche français. Dans les domaines où la publication en français est une pratique courante (sciences humaines et sociales, droit, sciences politiques, lettres), un DALF C2 atteste que vous êtes capable de contribuer à la communauté scientifique francophone avec la précision linguistique requise pour la publication révisée.

Sur le plan professionnel, le DALF C2 est valorisé dans les secteurs où la maîtrise exceptionnelle du français est une exigence professionnelle explicite : enseignement du français (FLE et formation continue), traduction et interprétation professionnelles, journalisme et édition en langue française, diplomatie et institutions internationales francophones (Organisation Internationale de la Francophonie, ambassades de pays membres, institutions européennes travaillant en français). Dans ces contextes, présenter un DALF C2 lors d'un recrutement constitue un argument différenciant qui rassure l'employeur sur la qualité de la communication écrite et orale du candidat.

## Préparer le DALF C2 : une approche spécifique et exigeante

La préparation au DALF C2 repose sur une pratique intensive et diversifiée de la langue française dans ses registres les plus exigeants. Contrairement au DALF C1 pour lequel une préparation ciblée sur les exercices spécifiques de l'examen est efficace, le DALF C2 requiert un niveau de compétence globale qui ne peut pas s'acquérir uniquement par le travail des exercices d'examen. Il demande une immersion dans la langue et la culture françaises à un niveau de profondeur et de nuance qui se construit sur des années.

La lecture régulière d'ouvrages académiques, d'essais intellectuels, de grands journaux d'opinion (Le Monde, Libération, Le Point, L'Obs) et de revues de référence (Le Débat, Esprit, Commentaire) constitue le socle d'une préparation efficace au DALF C2. Cette lecture doit être active : analyser la structure argumentative des textes, relever le vocabulaire précis et les tournures idiomatiques, identifier les procédés rhétoriques, et reformuler les thèses centrales avec vos propres mots. L'écoute régulière d'émissions de radio culturelle de qualité (France Culture, RFI en version complète) et de conférences académiques en ligne (podcasts de grandes universités, TED Talks en français, conférences enregistrées des Collège de France) entraîne la compréhension orale dans les registres requis au C2.

## Témoignages de candidats au DALF C2

**Yuki Tanaka, 30 ans, professeure de français au Japon** : «J'enseigne le français depuis six ans et j'avais atteint un niveau très avancé par l'immersion et les études en France. Passer le DALF C2 était une façon de faire reconnaître officiellement ce niveau par mes élèves et mon institution. La préparation a pris quatre mois intensifs et m'a fait redécouvrir des aspects de la langue que je maîtrisais intuitivement mais pas formellement. La réussite a été la concrétisation d'une ambition linguistique longtemps portée.»

**Álvaro Castillo, 28 ans, traducteur professionnel espagnol-français** : «Mon travail exige une maîtrise du français au niveau des textes les plus complexes. Le DALF C2 m'a permis de prouver objectivement à mes clients professionnels que mon niveau dépasse le seuil minimal exigé dans mon domaine. La préparation à l'épreuve de production écrite, notamment, m'a poussé à affiner des aspects stylistiques que j'utilisais de façon intuitive sans les avoir jamais formalisés.»

## Questions fréquentes sur le DALF C2

**Q : Est-il nécessaire d'avoir le DALF C1 avant de passer le DALF C2 ?**
Non. Le DALF C2 peut être passé directement sans avoir préalablement obtenu le DALF C1 ou tout autre diplôme DELF. Les niveaux DELF et DALF sont indépendants dans leur obtention. Un candidat qui estime avoir atteint un niveau C2 peut directement s'inscrire au DALF C2, quelle que soit sa certification antérieure.

**Q : Peut-on repasser le DALF C2 après un échec, et faut-il repasser toutes les épreuves ?**
En cas d'échec au DALF C2, le candidat doit repasser l'intégralité des quatre épreuves lors d'une session ultérieure. Il n'y a pas de système de conservation des notes d'épreuves réussies d'une session à l'autre, contrairement à certains autres examens. Il est donc important de se présenter au DALF C2 uniquement lorsqu'on se sent prêt dans toutes les compétences simultanément.

**Q : Le DALF C2 est-il plus valorisé que le DALF C1 pour les études supérieures en France ?**
Pour la grande majorité des admissions en licence, master ou doctorat, le DALF C1 est entièrement suffisant et le C2 n'apporte pas d'avantage décisif sur le simple plan administratif. Là où le C2 fait une différence, c'est dans l'admission aux formations d'élite très sélectives et dans la valorisation du profil du candidat au-delà des critères formels.

**Q : Les résultats du DALF C2 sont-ils communiqués différemment de ceux du DALF C1 ?**
Non. Les résultats des deux niveaux sont communiqués au travers du même processus : notification via le centre d'examen où vous avez passé l'examen, généralement six à huit semaines après la session, puis envoi du diplôme officiel quelques semaines après la notification de réussite.

**Q : Un DALF C2 peut-il être utile pour une demande d'asile ou de titre de séjour ?**
La maîtrise avancée du français est généralement un atout dans toute procédure administrative en France mais le DALF C2 comme certification spécifique n'est pas formellement exigé dans les procédures d'asile ou de demande de titre de séjour. Pour les procédures d'immigration liées à des motifs professionnels ou académiques, le DALF peut être un élément valorisant du dossier sans être une condition sine qua non.

## Ressources officielles pour le DALF C2

- [France Éducation International – DALF C2](https://www.france-education-international.fr/diplome/dalf) : Documentation officielle sur l'examen, les critères d'évaluation et les exemples de sujets
- [TV5Monde – Apprendre le français niveau C](https://apprendre.tv5monde.com) : Ressources pédagogiques gratuites pour pratiquer le français à niveau C1 et C2
- [France Culture – Podcasts](https://www.radiofrance.fr/franceculture) : Émissions et conférences en français de niveau culturel avancé, idéales pour la compréhension de l'oral C2
`;

await patch('32d3fae1-2380-423c-bd33-6cfc98cc4693', DALF2);
