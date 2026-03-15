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

// L5 3445 needs ~600 more
const ADD_L5 = `
## La dissertation dans les concours de la fonction publique et les grandes écoles

La dissertation est également au cœur des concours d'accès à la fonction publique française (concours administratifs de catégorie A, Sciences Po, ENS, agrégation) et de nombreuses sélections professionnelles. Dans ces contextes, les exigences sont encore plus élevées qu'à l'université : la dissertation de concours évalue la capacité à traiter un sujet d'une façon qui démontre non seulement une maîtrise solide des connaissances mais aussi une culture générale étendue, une acuité analytique et une aisance rhétorique qui distinguent les meilleurs candidats des candidats simplement compétents.

Pour les étudiants qui envisagent des concours de la fonction publique ou des admissions dans des grandes écoles après leur licence ou leur master, s'entraîner à la dissertation dès le début du cursus universitaire est un investissement à long terme qui se capitalisera lors des préparations aux concours. Les différences entre la dissertation universitaire et la dissertation de concours concernent principalement le niveau de culture générale attendu, la densité argumentative requise et la maîtrise stylistique nécessaire pour se distinguer dans un concours hautement compétitif — pas la structure formelle ni les principes fondamentaux, qui restent identiques.

## Les ressources d'entraînement à la dissertation disponibles en ligne

L'écosystème numérique offre de nombreuses ressources pour s'entraîner à la dissertation française. Des répertoires d'annales numérisées sont accessibles sur les sites des universités et sur des plateformes dédiées (Annales.net, Les Sherpas, Kartable pour le lycée). Des correction types de dissertations, annotées par des enseignants, circulent sur des forums académiques (Etudiant.fr, Forum des étudiants). Des chaînes YouTube et podcasts académiques proposent des analyses de sujets de dissertation dans diverses disciplines.

Ces ressources en ligne permettent de diversifier les types de sujets sur lesquels on s'exerce, de s'exposer à la pensée de correcteurs différents de son propre enseignant, et d'enrichir son stock d'exemples et de références. Elles ne sauraient cependant remplacer la pratique régulière de rédaction effective ni le retour personnalisé d'un enseignant ou d'un tuteur sur ses propres productions.
`;

// L6 3339 needs ~700 more
const ADD_L6 = `
## Les études en alternance comme alternative à la voie universitaire classique

Pour les étudiants qui ont connu des difficultés dans la voie universitaire classique, l'alternance représente une alternative pédagogique fondamentalement différente qui convient à des profils d'apprenants qui progressent mieux dans des contextes applicatifs et professionnels que dans des environnements académiques abstraits. Les formations en alternance (BTS, BUT, licence professionnelle, master en apprentissage) combinent des périodes de cours en établissement et des périodes de travail en entreprise, donnant tout son sens à l'apprentissage théorique et réduisant la distance entre la salle de cours et la réalité professionnelle.

Le contrat d'apprentissage, support de l'alternance, offre en plus une rémunération mensuelle qui peut contribuer à l'autonomie financière et à la motivation des étudiants. Le fait d'être intégré dans une équipe professionnelle, d'avoir des responsabilités réelles et de contribuer à des projets concrets produit souvent un engagement et une motivation bien supérieurs à ceux que l'environnement exclusivement académique peut générer.

Pour un étudiant qui a échoué en licence classique, explorer une réorientation vers une formation en alternance dans le même domaine ou un domaine connexe n'est pas une concession — c'est souvent une décision stratégique qui mène à une insertion professionnelle plus rapide et plus solide.

## La reconnaissance de l'expérience informelle dans les procédures de validation

La Validation des Acquis de l'Expérience (VAE) n'est pas le seul dispositif qui permet de faire reconnaître des apprentissages réalisés en dehors du cursus académique formel. Les procédures de Validation des Acquis Professionnels (VAP) permettent l'accès à des formations diplômantes à un niveau supérieur à celui normalement accessible selon les diplômes détenus, sur la base d'une expérience professionnelle documentée. La Reconnaissance et la Certification des Compétences (RCC) dans certaines branches professionnelles permet de valider des compétences acquises sur le tas.

Pour un étudiant international qui a travaillé significativement avant ou pendant ses études en France, ces dispositifs représentent des reconnaissances légitimes d'un parcours d'apprentissage non conventionnel. L'important est de documenter ces expériences soigneusement — contrats de travail, attestations d'employeurs, descriptions de responsabilités — afin de pouvoir constituer un dossier solide si une procédure de validation est envisagée.
`;

// L7 3018 needs ~1000 more
const ADD_L7 = `
## La transition vers la vie professionnelle : aménagements et RQTH

La Reconnaissance de la Qualité de Travailleur Handicapé (RQTH) est une démarche administrative auprès de la MDPH qui ouvre des droits spécifiques sur le marché du travail : accès aux missions de l'AGEFIPH pour l'insertion professionnelle, obligation d'emploi pour les employeurs du secteur privé et public (quota de 6% de travailleurs handicapés dans les effectifs), priorité de reclassement en cas de licenciement économique, et droit à des aménagements raisonnables du poste de travail au sens du Code du travail.

Pour les étudiants en fin de cursus universitaire qui ont bénéficié d'aménagements d'examens liés à leur situation de handicap, l'obtention de la RQTH avant l'entrée sur le marché du travail est une démarche à anticiper. Elle peut se faire en parallèle des dernières années d'études, la demande étant instruite par la MDPH de son département de résidence. Les étudiants qui hésitent à demander la RQTH par crainte de discrimination à l'embauche doivent savoir que ce statut est strictement confidentiel : ils ne sont pas tenus de le divulguer à leur employeur pendant le processus de recrutement, et la discrimination à l'embauche liée au handicap est un délit pénal.

## Le rôle des référents handicap dans les universités

Chaque université française dispose d'un référent handicap — parfois appelé chargé de mission handicap — dont le rôle est de coordonner la politique d'accessibilité et d'accompagnement des étudiants en situation de handicap au sein de l'établissement. Ce référent est l'interlocuteur central pour toutes les questions liées aux aménagements, à la vie quotidienne sur le campus et à l'orientation professionnelle des étudiants handicapés.

Contrairement aux services administratifs classiques avec lesquels la relation peut être impersonnelle et bureaucratique, les référents handicap sont généralement des professionnels engagés qui ont un Intérêt sincère pour le parcours des étudiants qu'ils accompagnent. Prendre contact avec ce référent dès le début de votre formation — même si vos besoins semblent mineurs — permet de construire une relation de confiance qui facilite toutes les démarches ultérieures et vous assure un interlocuteur connaissant votre dossier en cas de difficulté.

## Les labels et certifications d'égalité dans l'enseignement supérieur

Certaines universités françaises affichent des certifications ou des labels liés à leur politique d'égalité des chances et d'inclusion : le label Égalité Professionnelle (pour l'égalité femmes-hommes), le label Diversité (pour la lutte contre les discriminations), ou le label S3 (Sport, Santé, Sécurité) qui inclut une dimension handicap. Ces labels ne sont pas qu'une vitrine institutionnelle — ils impliquent des engagements précis en matière de politiques, de pratiques et d'indicateurs mesurables.

Si vous cherchez à vous orienter vers une université qui a développé une politique d'inclusion particulièrement avancée, la présence de ces labels est un indicateur utile. De même, si vous estimerez que votre université ne respecte pas ses engagements en matière d'accessibilité et d'inclusion, ces labels constituent un cadre de référence pour formuler des réclamations constructives.
`;

// L8 3465 needs ~560 more
const ADD_L8 = `
## La gestion du temps dans la salle d'examen : stratégies pratiques

La gestion du temps pendant une épreuve est une compétence spécifique qui se développe par la pratique et non pas intuitivement le jour de l'examen. Une stratégie efficace commence par une évaluation rapide de l'intégralité du sujet dans les premières minutes : lire toutes les questions ou lire entièrement le sujet de dissertation avant de commencer à répondre. Cette vue d'ensemble permet d'allouer mentalement du temps à chaque partie selon sa difficulté et son poids dans la notation, avant d'engager le travail de rédaction.

Pour les épreuves avec plusieurs questions ou exercices distincts, une règle pratique est de commencer par les questions auxquelles vous êtes le plus sûr de répondre correctement — cela accumule des points de façon sécurisée et maintient la confiance en soi pour aborder les questions plus difficiles ensuite. Réserver les questions les plus incertaines pour la fin, plutôt que de les bloquer au début, est une stratégie qui optimise le score total.

Pour les dissertations, une gestion raisonnée du temps alloue typiquement 15 à 20 % du temps total à la lecture du sujet et au plan au brouillon, 70 à 75 % à la rédaction effective, et 5 à 10 % à la relecture et la correction finale. Cette répartition varie selon les individus et les formats d'épreuves, mais l'important est d'avoir une stratégie consciente et de la respecter — en regardant régulièrement l'heure pour ajuster le rythme.

## L'impact des examens sur le bien-être à long terme

Au-delà des effets immédiats sur le stress, les examens universitaires ont des effets à plus long terme sur le développement personnel et professionnel des étudiants. La confrontation régulière à des situations de performance évaluée développe progressivement une résistance psychologique et une confiance en soi qui sont des compétences transversales précieuses dans la vie professionnelle. Les étudiants qui traversent plusieurs semestres d'examens universitaires en France et s'en sortent avec des résultats satisfaisants développent une conviction croissante en leur capacité à performer sous pression — une conviction qui les sert dans les entretiens d'embauche, les présentations professionnelles et toutes les situations ultérieures à enjeu élevé.
`;

await appendAndPatch('24c0f17e-d65c-454f-89cd-43757ff78407', ADD_L5);
await appendAndPatch('fc3dae13-7dd7-4761-bca4-00b6508b8cc5', ADD_L6);
await appendAndPatch('4f448018-2528-4570-9038-1abcbe1be9b6', ADD_L7);
await appendAndPatch('201a89fd-1685-4864-b756-6524941dadc8', ADD_L8);
