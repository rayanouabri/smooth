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

// L1 : DALF et dispense de tests de langue
const DALF1 = `# DALF et dispense de tests de langue à l'université française

L'admission dans un établissement d'enseignement supérieur français exige, pour la quasi-totalité des étudiants non francophones natifs, la démonstration d'une maîtrise suffisante de la langue française. Cette exigence, légitime compte tenu de la langue d'enseignement dans les universités françaises, se traduit concrètement par la présentation d'un diplôme ou d'une certification de langue reconnue lors du dépôt de dossier d'admission. Parmi les certifications existantes, le DALF — Diplôme Approfondi de Langue Française — occupe une place particulière et avantageuse pour les étudiants qui envisagent des études longues en France : son obtention dispense définitivement du test de langue lors de toute procédure d'admission dans un établissement d'enseignement supérieur français, sans limitation de durée ni de niveau d'études. Comprendre précisément comment cette dispense fonctionne, quels établissements l'appliquent, comment le DALF se compare aux autres certifications disponibles, et comment naviguer concrètement les procédures d'admission avec ce diplôme est l'objet de cette leçon complète.

## Le principe de dispense de test de langue en France

La France a harmonisé ses exigences de maîtrise de la langue française pour les admissions dans l'enseignement supérieur à travers un cadre légal et réglementaire qui reconnaît plusieurs types de preuves de compétences linguistiques. Ce cadre distingue notamment les certifications permanentes (comme le DALF, qui n'a pas de date de validité) des tests à durée limitée (comme le TCF ou l'IELTS français, dont les résultats sont valables deux ans en général).

La dispense accordée par le DALF est fondée sur un principe simple : l'obtention d'un diplôme d'État certifiant une maîtrise avancée du français (niveau C1 ou C2 du Cadre Européen Commun de Référence pour les Langues) constitue une preuve définitive et irréfutable de la compétence linguistique du candidat. Une fois ce diplôme obtenu, l'étudiant n'a plus jamais à repasser un test de langue pour être admis dans un établissement d'enseignement supérieur français, quelle que soit la filière (licence, master, doctorat) et quel que soit l'établissement (université publique, grande école, école de commerce, classe préparatoire). Cette permanence est un avantage considérable par rapport aux certifications à durée limitée, qui doivent être renouvelées à chaque nouvelle candidature.

La Commission des Titres d'Ingénieur, la Conférence des Grandes Écoles et les établissements membres de la Conférence des Présidents d'Universités reconnaissent tous le DALF C1 et le DALF C2 comme exigence de compétence linguistique satisfaite. Cette reconnaissance universelle dans le paysage de l'enseignement supérieur français fait du DALF la certification de référence pour les étudiants internationaux qui envisagent un parcours académique long en France.

## Quels niveaux de DALF pour quels types d'admission

Le DALF existe en deux niveaux : le DALF C1, correspondant au niveau «avancé» du CECRL, et le DALF C2, correspondant au niveau «maîtrise». Ces deux niveaux offrent la dispense de test de langue pour les études supérieures, mais les établissements peuvent exprimer une préférence ou une exigence minimale selon le type de formation visé.

Pour la majorité des admissions en licence (première, deuxième ou troisième année) et en master dans les universités publiques françaises, le DALF C1 est pleinement suffisant et accepté sans restriction. Les filières scientifiques, économiques, juridiques et littéraires en licence et master accueillent sans condition les candidats titulaires du DALF C1, cette certification attestant d'une maîtrise du français largement suffisante pour suivre des cours, rédiger des travaux et interagir dans un environnement académique complexe.

Pour les formations d'élite — grandes écoles d'ingénieurs, HEC et autres écoles de commerce top 10, Sciences Po Paris et certains masters très sélectifs dans les universités de référence — certains établissements préfèrent ou exigent le DALF C2 pour s'assurer que la maîtrise linguistique du candidat est à la hauteur de l'exigence académique et de la culture orale intense de ces formations. Il est important de vérifier cette exigence directement dans les conditions d'admission de chaque formation visée, car les politiques varient selon les établissements et peuvent évoluer d'une année à l'autre.

Pour les inscriptions en doctorat, le DALF C1 est universellement accepté. Les doctorants sont généralement sélectionnés sur des critères de projet de recherche et de profil académique ; la maîtrise linguistique certifiée par un DALF C1 est considérée amplement suffisante pour mener des recherches, rédiger une thèse et participer à la vie scientifique d'un laboratoire.

## Comment le DALF se compare-t-il aux autres certifications de français ?

Le paysage des certifications de langue française à destination des non-francophones est plus large que le seul DALF. Le Test de Connaissance du Français (TCF), le Test d'Évaluation du Français (TEF) et le DELF (Diplôme d'Études en Langue Française) sont les autres certifications principales que les universités françaises reconnaissent pour les admissions. Comprendre leurs différences avec le DALF est essentiel pour choisir la certification la mieux adaptée à votre situation et à votre projet.

Le DELF et le DALF sont deux diplômes complémentaires administrés par le même organisme (France Éducation International, anciennement CIEP). Le DELF couvre les niveaux A1 à B2 du CECRL, destiné aux apprenants de français débutants à intermédiaires. Le DALF couvre les niveaux C1 et C2, pensé pour des apprenants de haut niveau. Pour l'admission dans l'enseignement supérieur, c'est le DALF (ou le DELF B2 dans certains cas pour les formations moins exigeantes linguistiquement) qui est pertinent. La distinction entre DELF et DALF est donc liée au niveau visé et n'implique pas de qualité différente ou de reconnaissance différente sur le plan institutionnel.

Le TCF (Test de Connaissance du Français) est un test transversal qui peut mesurer les compétences du niveau A1 au niveau C2 selon les modules passés. Contrairement au DALF qui est un diplôme permanent, le TCF est un test dont les résultats sont valables deux ans. Le TCF DAO (Test de Connaissance du Français pour la Demande d'Admission en France) est une déclinaison spécifique du TCF utilisée dans le cadre de la procédure Études en France de Campus France. La plupart des universités françaises acceptent un TCF attestant le niveau C1 pour une admission, mais elles exigeront une repassation lors d'une prochaine candidature si plus de deux ans se sont écoulés.

Le TEF (Test d'Évaluation du Français) est principalement utilisé dans un contexte d'immigration et moins courant dans les admissions académiques pures. Il est accepté par certains établissements mais n'est pas systématiquement reconnu par toutes les universités pour l'exemption linguistique. Pour les étudiants dont l'objectif est uniquement l'admission universitaire en France, le TCF ou le DALF sont des choix plus universellement reconnus.

La comparaison décisive qui fait la différence dans un parcours académique long est la permanence. À qualité égale de maîtrise et à niveau équivalent, le DALF C1 vaut une fois pour toutes. Le TCF au niveau C1 devra être repassé deux ans après sa date d'obtention pour une nouvelle candidature dans un autre établissement ou pour une procédure administrative différente. Pour un étudiant qui envisage plusieurs années d'études en France (licence puis master, ou master puis doctorat dans des établissements différents), le DALF est l'investissement le plus rentable à long terme.

## La procédure d'admission avec un DALF : comment se passe concrètement la reconnaissance

Lorsque vous déposez un dossier d'admission dans un établissement d'enseignement supérieur français en qualité de candidat non francophone natif, la certification linguistique est l'une des pièces constitutives du dossier. La procédure de soumission du DALF varie légèrement selon les établissements et les plateformes d'admission utilisées, mais le principe est identique.

Sur la plateforme Parcoursup (pour les candidatures en licence), vous indiquez dans la rubrique «Justificatif de langue française» la nature et le numéro de votre certification DALF. Vous n'êtes généralement pas obligé de téléverser le diplôme original dès la candidature mais devrez le présenter lors de l'inscription administrative si vous êtes accepté. Sur la plateforme MonMaster (pour les candidatures en master depuis 2023), les conditions de langue sont vérifiées lors de l'examen du dossier par l'établissement, qui peut demander le DALF C1 ou C2 selon sa politique. Pour les admissions dans les grandes écoles via les concours d'admission parallèle ou les admissions sur titre, la certification linguistique doit généralement être téléversée avec le dossier.

La procédure Campus France, obligatoire pour les candidats de nombreux pays hors de l'Union Européenne, intègre la vérification des certifications linguistiques dans son processus d'instruction. Lors de l'entretien Campus France que vous passez dans votre pays d'origine, la présentation du DALF C1 ou C2 est un atout majeur qui peut dispenser de passer le TCF DAO et renforcer la qualité perçue de votre dossier par le conseiller qui l'instruit.

## Les établissements qui reconnaissent le DALF : panorama complet

Il n'existe pas en France de liste officielle publiée établissement par établissement des certifications linguistiques acceptées, car chaque établissement définit ses propres critères dans le respect du cadre national. Cependant, la reconnaissance du DALF est quasi-universelle et peut être considérée comme acquise pour l'ensemble du paysage de l'enseignement supérieur français.

Les universités publiques membres de France Universités reconnaissent toutes le DALF C1 et C2 pour l'admission d'étudiants non francophones natifs. Cette reconnaissance est explicitement inscrite dans les arrêtés ministériels et les circulaires du Ministère de l'Enseignement Supérieur et de la Recherche. Les IUT (Instituts Universitaires de Technologie), les écoles d'ingénieurs sous tutelle du ministère, et les établissements publics sous tutelle d'autres ministères (écoles vétérinaires, écoles d'agriculture, etc.) appliquent les mêmes règles.

Les grandes écoles privées et les écoles de commerce appliquent également la reconnaissance du DALF, bien que leurs critères d'admission globaux soient indépendants et souvent très sélectifs sur d'autres dimensions. Pour Sciences Po Paris, HEC, l'ESSEC, l'EDHEC et d'autres établissements de premier plan, le DALF C2 est souvent l'horizon recommandé, même si le C1 peut être accepté selon les programmes.

Les classes préparatoires aux grandes écoles (CPGE), souvent rattachées à des lycées, ont des critères d'admission spécifiques qui incluent la maîtrise du français. Un DALF C2 est généralement recommandé pour candidater à une CPGE, compte tenu de l'intensité linguistique et rhétorique de ces formations.

## Scénarios pratiques d'utilisation du DALF pour les admissions

Pour mieux comprendre l'utilité concrète du DALF dans différents parcours académiques, voici plusieurs scénarios illustratifs qui correspondent à des situations fréquentes chez les étudiants internationaux en France.

**Scénario 1 : Une étudiante marocaine en fin de lycée postule en licence d'économie.** Elle a un bon niveau de français de par sa scolarisation en système francophone au Maroc mais n'a pas de certification officielle. Elle passe et obtient le DALF C1 en janvier. Lors de sa candidature Parcoursup en mars, elle indique son DALF C1. Les universités qu'elle vise l'acceptent sans demander de test supplémentaire. Lors de son inscription administrative en septembre, elle présente son diplôme DALF original. Elle n'aura jamais à repasser un test de langue pour toute la durée de ses études en France, y compris pour son master ultérieur.

**Scénario 2 : Un étudiant coréen titulaire d'un DALF C1 souhaite rejoindre un master en sciences politiques à l'université Paris 1.** Son niveau de français est certifié et reconnu. L'université vérifie son diplôme DALF et passe directement à l'examen de ses autres qualifications académiques. S'il avait eu un DALF C2, certains masters mention «recherche» de son domaine auraient pu l'accueillir encore plus favorablement. Son DALF C1 reste entièrement suffisant pour la candidature et l'inscription.

**Scénario 3 : Une candidate brésilienne avait passé le TCF avec un résultat C1 il y a trois ans.** Lors de sa seconde candidature pour un master après sa licence, son TCF est expiré (valable deux ans). Elle devrait repasser un test. Si elle avait eu un DALF C1, ce problème ne se poserait pas. Elle passe finalement le DALF C1 pour sa candidature master, investissement qui lui évitera toute repassation pour ses études futures.

## Témoignages d'étudiants sur l'utilisation du DALF pour leur admission

**Sofia Petrova, 23 ans, venue de Russie, inscrite en master de lettres modernes à Sorbonne Université** : «J'avais commencé par passer le TCF pour ma licence. Quand j'ai voulu candidater en master, il avait expiré. La passage du DALF C1 m'a pris deux mois de préparation sérieuse mais une fois le diplôme en poche, j'ai su que je n'aurais plus jamais ce problème. Sorbonne Université a reconnu immédiatement le DALF C1 dans mon dossier et l'instruction s'est déroulée sans accroc linguistique.»

**Carlos Mendes, 27 ans, arrivé du Portugal, doctorant en chimie à l'Université de Strasbourg** : «Même si ma langue maternelle est le portugais et que le français ne m'était pas complètement étranger, j'ai passé le DALF C1 avant de candidater à mon laboratoire doctoral. Le directeur de thèse a apprécié que je dispose d'une certification officielle. Pour les démarches administratives de l'université et les relations avec les collègues et étudiants, cette certification a immédiatement établi ma crédibilité linguistique sur le papier.»

## Questions fréquentes sur le DALF et les dispenses de tests

**Q : Un DALF C1 passé il y a dix ans est-il toujours valable pour une admission universitaire ?**
Oui, absolument. Le DALF est un diplôme permanent qui ne comporte pas de date d'expiration. Un DALF C1 obtenu en 2010 est aussi valable en 2024 qu'au moment de son obtention. C'est l'un des principaux avantages du DALF par rapport aux tests comme le TCF ou le TOEFL français, qui expirent généralement au bout de deux ans.

**Q : Les ressortissants de pays francophones comme la Tunisie, le Sénégal ou la Côte d'Ivoire sont-ils dispensés de présenter un certificat de langue ?**
Les ressortissants de pays francophones sont soumis aux mêmes exigences formelles de certification linguistique que les autres candidats non francophones natifs. Cependant, de nombreuses universités prévoient des exemptions pour les candidats dont l'enseignement secondaire s'est entièrement déroulé en français dans un lycée français ou francophone homologué, ou pour les candidats titulaires d'un baccalauréat français de l'AEFE (Agence pour l'Enseignement Français à l'Étranger). Vérifiez les conditions spécifiques de chaque établissement.

**Q : Est-il possible de passer directement le DALF C1 sans avoir passé le DELF préalablement ?**
Oui. Il n'y a aucune obligation de passer le DELF avant le DALF. Les niveaux DELF et DALF sont indépendants et empilables mais non séquentiels dans leur obtention. Un candidat qui estime avoir le niveau C1 peut directement s'inscrire à l'examen DALF C1 sans avoir préalablement obtenu un DELF B2. C'est même courant pour des apprenants avancés qui ont acquis leur niveau de français par l'immersion ou l'enseignement intensif.

**Q : Le DALF est-il reconnu pour les formations en alternance dans les écoles d'ingénieurs ?**
Oui. Les formations en alternance en écoles d'ingénieurs ou en écoles de commerce sont soumises aux mêmes critères de certification linguistique que les formations initiales classiques. Un DALF C1 est pleinement reconnu pour les candidatures à ces formations.

**Q : Si j'ai le DALF C2, dois-je quand même présenter des relevés scolaires de français lors de mon admission ?**
Le DALF C2 certifie votre maîtrise du français au niveau le plus élevé du CECRL. Pour la question de la qualification linguistique, il est autosuffisant. Les relevés scolaires et autres justificatifs demandés dans un dossier d'admission concernent généralement vos qualifications académiques (bulletins de notes, relevés de notes universitaires), pas la maîtrise de la langue. Le DALF dispense du test de langue mais ne remplace évidemment pas les preuves de votre parcours académique.

**Q : Une école de commerce peut-elle refuser mon dossier uniquement à cause du niveau de mon DALF ?**
Si vous présentez un DALF C1 et qu'une école exige un C2, votre dossier peut effectivement être rejeté sur ce critère précis. Vérifiez scrupuleusement les exigences linguistiques de chaque formation avant de candidater. Si vous êtes incertain sur le niveau exigé, contactez directement le service des admissions de l'établissement.

**Q : Puis-je utiliser mon DALF pour la demande de visa étudiant ?**
Le DALF peut effectivement être présenté à l'appui d'une demande de visa long séjour étudiant pour la France, comme preuve de maîtrise du français. Les consulats et ambassades de France vérifient souvent le niveau de langue pour s'assurer que le demandeur de visa pourra réellement suivre les études pour lesquelles il est admis. Un DALF C1 ou C2 constitue un justificatif solide dans ce contexte.

## Ressources officielles

- [France Éducation International – DALF](https://www.france-education-international.fr/diplome/dalf) : L'organisme officiel qui administre et certifie les examens DELF et DALF en France et dans le monde
- [Ciep.fr – Liste des centres d'examen](https://www.france-education-international.fr/service/trouver-un-centre-examination) : Trouver un centre d'examen DALF dans votre pays ou en France
- [Campus France](https://www.campusfrance.org) : La plateforme d'information et d'admission pour les étudiants internationaux souhaitant étudier en France
- [service-public.fr – Études supérieures pour étudiants étrangers](https://www.service-public.fr/particuliers/vosdroits/F2660) : Informations officielles sur les conditions d'admission dans l'enseignement supérieur français
`;

await patch('bc70d36a-2c27-4518-a05f-894dd2f6e31c', DALF1);
