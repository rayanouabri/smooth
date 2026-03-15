const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

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

const extL5 = `

## Prévenir les conflits entre agenda universitaire et rendez-vous médicaux

La gestion proactive des rendez-vous médicaux est une compétence que les étudiants développent progressivement. Au fil des semestres, vous apprendrez à anticiper les périodes de votre calendrier universitaire où planifier des consultations serait contre-productif, et à identifier les fenêtres temporelles compatibles avec vos obligations académiques.

Les périodes de partiels et d'examens (généralement janvier et mai-juin dans la plupart des universités françaises) sont à éviter pour les rendez-vous médicaux non urgents. Si vous avez pris un rendez-vous avant de connaître votre planning d'examens et qu'un conflit apparaît, annulez ou modifiez dès que vous en avez connaissance plutôt qu'à la veille.

Les périodes de cours intensifs ou de stage imposent des contraintes horaires qui limitent votre disponibilité. Utilisez les filtres Doctolib pour trouver des créneaux en soirée après 18h ou le samedi matin, moins perturbants qu'un rendez-vous en pleine journée de cours. Certains médecins généralistes et spécialistes proposent des plages horaires décalées pour accommoder les actifs et les étudiants.

La planification trimestrielle est une stratégie adoptée par les étudiants les plus organisés : dès le début de chaque semestre, identifiez les consultations médicales prévisibles (renouvellement de contraception tous les 3 mois, suivi psychiatrique mensuel, consultation semestrielle chez le médecin traitant) et réservez ces créneaux avant même que les cours ne débutent. Cette approche proactive réduit considérablement la probabilité d'annulations de dernière minute.

Si vous participez à un programme Erasmus ou à un stage à l'étranger d'une durée supérieure à un mois, reportez les rendez-vous non urgents plutôt que de laisser des créneaux bloqués qui se transformeront en no-shows. Vérifiez votre agenda Doctolib avant tout départ de plus de deux semaines.

## L'impact psychologique des annulations répétées sur la continuité des soins

Au-delà des aspects logistiques et éthiques, les annulations fréquentes ont un impact réel sur la qualité du suivi médical. Pour les étudiants qui consultent en santé mentale (psychiatrie, psychologie), les annulations répétées perturbent la progression thérapeutique et créent une discontinuité nuisible aux résultats.

La relation thérapeutique en psychiatrie ou psychologie se construit dans la durée, sur la régularité des rendez-vous et la confiance progressive qui s'établit entre patient et thérapeute. Une annulation occasionnelle est acceptable. Mais un schéma répété peut signaler une résistance inconsciente à la thérapie. Certains thérapeutes abordent directement ce sujet avec leurs patients, le transformant en matière thérapeutique.

Pour les traitements somatiques chroniques (diabète, épilepsie, maladies auto-immunes), la régularité des consultations de suivi est médicalement importante. Des consultations retardées peuvent entraîner un retard dans l'ajustement des traitements ou une progression non détectée des symptômes. Si vous avez tendance à reporter vos consultations de suivi, parlez-en à votre médecin : des téléconsultations pour les bilans intermédiaires peuvent vous convenir mieux.

## Gérer ses rendez-vous depuis une période de maladie aiguë

Quand vous êtes malade de manière aiguë, la gestion de vos rendez-vous existants prend une dimension supplémentaire. Non seulement vous pouvez devoir annuler des consultations planifiées, mais simultanément vous devez en obtenir un nouveau rapidement pour vos soins urgents.

Utilisez le filtre «Disponible aujourd'hui» avec «Médecin généraliste» pour votre zone géographique. Si votre médecin traitant est complet, vous verrez d'autres généralistes disponibles le jour même. Certains cabinets réservent des créneaux d'urgence visibles le matin même dans Doctolib.

La téléconsultation est particulièrement indiquée quand vous êtes trop fatigué ou contagieux pour vous déplacer physiquement. Pour une rhinopharyngite, une angine probable ou une infection urinaire simple, une téléconsultation permettra d'obtenir une ordonnance sans quitter votre chambre. La livraison de médicaments à domicile depuis les pharmacies partenaires peut compléter ce parcours entièrement digital.

## Éthique avancée de la prise et gestion des rendez-vous médicaux

L'usage responsable de la plateforme Doctolib s'inscrit dans une éthique plus large du soin. Il serait considéré comme irresponsable de réserver plusieurs créneaux simultanément chez différents médecins pour «garder une option» avant de décider lequel vous garderez. Cette pratique, parfois tentée par des patients peu familiers avec le fonctionnement du système, bloque des ressources médicales précieuses pendant que d'autres patients attendent.

De même, annuler systématiquement au dernier moment sans aucune justification, même si c'est techniquement possible sans conséquence immédiate, nuit à la disponibilité globale des soins. Chaque créneau libéré trop tard pour être attribué à un autre patient représente du temps médical perdu dans un système déjà sous-dimensionné par rapport aux besoins de la population.

La culture française de la relation médicale valorise la fiabilité et la ponctualité. Un étudiant qui prend ses rendez-vous au sérieux, qui arrive à l'heure, qui annule correctement quand il ne peut pas venir, et qui vient préparé est un patient qui construit une relation de qualité avec ses praticiens. Cette réputation, informelle mais réelle, facilite l'accès aux soins à long terme.

**Q : Doctolib envoie-t-il des rappels avant un rendez-vous de téléconsultation ?**
Oui, avec un élément supplémentaire : l'e-mail de rappel pour une téléconsultation contient directement le lien de connexion à la session vidéo, éliminant la recherche de ce lien au dernier moment. Effectuez le test technique (caméra, micro, connexion) proposé dans l'e-mail au moins 30 minutes avant la consultation.

**Q : Peut-on annuler une série de rendez-vous (kinésithérapie) en une seule opération ?**
Doctolib gère les rendez-vous individuellement : une annulation s'applique à un seul créneau à la fois. Si vous devez annuler cinq séances d'une série, vous devrez les annuler une par une. Il peut être plus rapide d'appeler directement le cabinet pour une annulation groupée de plusieurs séances consécutives.

**Q : Que faire si j'avais oublié un rendez-vous et réalise l'avoir manqué ?**
Contactez le cabinet dès que vous le réalisez, même si c'est après coup. Expliquez la situation, présentez vos excuses et demandez à reprendre rendez-vous. La plupart des cabinets comprennent les oublis isolés, surtout chez les étudiants dont la vie est souvent bousculée. Activer les rappels SMS sur Doctolib pour vos prochains rendez-vous est la mesure préventive la plus simple pour éviter que cela ne se reproduise.
`;

const extL6 = `

## L'intégration Doctolib avec les pharmacies partenaires

L'une des évolutions les plus récentes de l'écosystème Doctolib concerne son intégration progressive avec le réseau des pharmacies françaises. Cette intégration vise à fluidifier le parcours entre la consultation médicale et la dispensation des médicaments.

La e-ordonnance connectée à la pharmacie constitue le premier volet. Lors d'une téléconsultation via Doctolib, le médecin peut envoyer numériquement l'ordonnance dans votre dossier Doctolib et, si vous avez inscrit votre pharmacie préférée, directement à cette officine. Quand vous vous présentez au comptoir, le pharmacien a déjà reçu la prescription et peut préparer vos médicaments immédiatement. Ce service fonctionne avec les principales chaînes de pharmacies françaises et un nombre croissant de pharmacies indépendantes adhérentes.

La livraison de médicaments à domicile via les pharmacies partenaires est déclenchable depuis Doctolib après une téléconsultation. Cette option, principalement disponible dans les grandes métropoles, permet à un patient immobilisé ou contagieux de recevoir ses médicaments sans sortir. La prescription transmise numériquement garantit l'authenticité de l'ordonnance.

Le rappel de renouvellement médicamenteux est une fonctionnalité en développement : il enverra automatiquement un rappel quand votre traitement chronique approche de la fin du stock estimé, calculé sur la base de la durée de l'ordonnance et de la posologie. Ce rappel sera l'occasion de prendre un rendez-vous ou d'utiliser la messagerie sécurisée pour un renouvellement à distance.

## Doctolib pour les étudiants en formation de santé

Les étudiants en médecine, pharmacie, soins infirmiers, kinésithérapie ou sage-femme ont un rapport particulier à Doctolib qui mêle usage patient et compréhension professionnelle. Vous avez la double perspective du patient qui utilise la plateforme pour ses propres rendez-vous et du futur professionnel qui pourra ou non l'intégrer à sa pratique.

Dans vos stages hospitaliers et en cabinet, observez comment les praticiens seniors gèrent leur agenda Doctolib : certains délèguent entièrement au secrétariat, d'autres gèrent personnellement depuis l'application mobile entre deux consultations. Certains médecins utilisent la messagerie Doctolib comme outil de suivi privilégié de leurs patients chroniques, d'autres préfèrent le téléphone. Ces différences reflètent autant des préférences individuelles que des spécificités de chaque spécialité.

Pour vos travaux universitaires sur la transformation numérique de la santé, Doctolib constitue un objet d'étude riche : startup qui a su convaincre un secteur conservateur, infrastructure centralisant un accès à un service essentiel entre les mains d'une entreprise privée, outil qui améliore l'accessibilité tout en creusant certaines inégalités. Ces tensions font l'objet de nombreux mémoires en santé publique, management de la santé et éthique médicale.

## Le futur de Doctolib : IA et santé prédictive

Doctolib investit massivement dans des fonctionnalités basées sur l'intelligence artificielle qui transformeront son utilisation dans les prochaines années.

L'optimisation automatique des agendas médicaux par IA est déjà en test. L'algorithme analyse les historiques de consultation pour proposer des optimisations de planning qui réduisent les temps morts et améliorent l'adéquation entre durée allouée et durée réelle des consultations.

L'assistance à la rédaction des comptes-rendus médicaux par IA transposera automatiquement les notes vocales d'un médecin pendant la consultation en texte structuré. Le médecin valide et amende le compte-rendu généré, mais la charge de saisie initiale est considérablement réduite. Ces gains de productivité sont attendus comme un levier pour permettre aux médecins de consacrer plus de temps à la relation patient.

L'orientation intelligente des patients est une autre application : en saisissant ses symptômes dans Doctolib, un patient recevrait une suggestion de spécialité à consulter en priorité, basée sur une analyse des symptômes et des recommandations médicales standardisées. Cette orientation ne remplace pas un diagnostic mais réduit les rendez-vous d'orientation chez le généraliste.

Pour les étudiants intéressés par l'éthique de ces développements, les questions centrales incluent : qui est responsable quand un algorithme IA envoie un patient vers le mauvais spécialiste ? Comment garantir l'absence de biais dans ces systèmes quand les données d'entraînement reflètent les inégalités existantes du système de santé ? Comment préserver la confidentialité des données utilisées pour entraîner ces modèles ? Ces débats sont au coeur de l'éthique de la santé numérique contemporaine.

**Q : Doctolib propose-t-il des outils pour les aidants familiaux ?**
Oui, la gestion multi-profils est adaptée aux aidants qui accompagnent des proches. Vous pouvez gérer les rendez-vous de plusieurs personnes depuis un seul compte, recevoir leurs rappels sur votre smartphone et consulter leur historique. Des étudiants l'utilisent pour aider leurs parents lors de leur première arrivée en France, ne parlant pas encore français couramment.

**Q : Doctolib permet-il de chercher des médecins spécialisés dans les soins aux personnes migrantes ?**
Doctolib ne propose pas de filtre spécifique à cette situation. Cependant, de nombreuses structures spécialisées (COMEDE, Permanences d'Accès aux Soins de Santé – PASS) travaillent avec cette population et certaines utilisent Doctolib ou des systèmes similaires pour leurs prises de rendez-vous. Des médecins humanistes indiquent parfois dans leur biographie leur engagement associatif avec des populations vulnérables.

**Q : Comment accéder aux Centres Médico-Psychologiques (CMP) via Doctolib ?**
Certains CMP ont ouvert leurs prises de rendez-vous via Doctolib, réduisant la barrière administrative à l'accès aux soins psychiatriques de secteur. Cherchez «Centre Médico-Psychologique» ou «CMP» sur Doctolib avec votre code postal. Si ces structures n'apparaissent pas, contactez directement le CMP de votre secteur géographique via les coordonnées disponibles sur le site de votre ARS (Agence Régionale de Santé).
`;

await appendAndPatch('e5f8ba04-ba3e-45ff-82bd-60d5b0580f3e', extL5);
await appendAndPatch('255220ab-cd87-4c1c-99d0-b7e92b245b89', extL6);
