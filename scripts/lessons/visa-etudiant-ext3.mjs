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

// L2 needs ~400 more words
const ADD_L2 = `
## Gérer l'incertitude entre Campus France et la réponse des universités

Un aspect particulièrement stressant de la procédure Campus France est la période d'incertitude entre le dépôt du dossier et la réception de toutes les réponses des universités. Dans de nombreux cas, l'entretien Campus France se déroule avant que tous les établissements aient répondu. Voici comment gérer cette incertitude de manière proactive.

Priorisez vos vœux dans votre dossier Campus France en cochant les établissements dans lesquels vous avez déjà initié des candidatures formelles. Même si vous n'avez pas encore de réponse, le fait d'avoir soumis un dossier de candidature complet est documentable et montre la sérieux de votre démarche.

Prévoyez un plan B clair si votre premier choix d'établissement ne vous accepte pas. Les conseillers Campus France apprécient les candidats qui ont une vision réaliste et des alternatives solides. Avoir un deuxième et troisième choix sérieux renforce la crédibilité de votre dossier et démontre que votre projet d'études ne repose pas sur un seul pari.

Communiquez activement avec les services d'admission des universités ciblées pour suivre l'avancement de vos candidatures. Un accusé de réception de votre candidature ou une confirmation que votre dossier est en cours d'examen est une preuve suffisante de la réalité de votre démarche au moment de l'entretien Campus France.

Après l'entretien Campus France et en attendant la lettre de validation, continuez vos démarches auprès des universités. La validation Campus France et les admissions universitaires sont deux processus parallèles — ne mettez pas l'un en pause pendant l'autre.
`;

// L3 needs ~400 more words
const ADD_L3 = `
## L'importance de la présentation du dossier financier

La manière dont vous présentez votre dossier financier est presque aussi importante que son contenu. Un dossier bien organisé, clairement structuré et facile à comprendre pour le conseiller consulaire qui le lit en quelques minutes fait une meilleure impression qu'un dossier techniquement correct mais difficile à lire.

Organisez vos documents financiers dans un ordre logique : d'abord un résumé d'une page expliquant le plan de financement global (telle source pour tel montant couvrant telle période), puis les pièces justificatives dans le même ordre. Numérotez les documents et référencez-les dans votre résumé.

Si vous avez plusieurs sources de financement (bourse partielle + soutien parental + économies personnelles), faites une synthèse chiffrée montrant comment ces sources s'additionnent pour couvrir les frais estimés sur toute la durée des études. Ce tableau de synthèse montre au conseiller que vous avez une vision claire et maîtrisée de votre financement.

Joignez le calcul de vos dépenses prévisionnelles : loyer estimé, frais d'inscription, charges de vie mensuelle. Ce budget prévisionnel démontre que vous avez réfléchi sérieusement à la réalité financière de vos études en France, et non que vous avez simplement assemblé des relevés sans réflexion. Les conseillers consulaires apprécient les candidats qui montrent une connaissance pratique du coût de la vie étudiant en France.

Enfin, si le montant de vos ressources est juste par rapport aux minimums attendus mais que des circonstances particulières réduisent vos besoins réels (logement gratuit chez un proche, bourse complète couvrant les frais d'inscription, emploi étudiant probable dans un domaine familier), mentionnez ces éléments dans une lettre d'accompagnement explicative jointe au dossier financier.
`;

// L4 needs ~800 more words
const ADD_L4 = `
## Les droits postérieurs à la validation OFII : utiliser efficacement son titre validé

Une fois la validation OFII obtenue et la vignette collée dans votre passeport, vous entrez dans une période où votre statut administratif est pleinement établi et où vous pouvez exercer tous vos droits avec sérénité. Voici comment exploiter au mieux ce statut pour faciliter l'ensemble de votre installation en France.

La validation OFII est le signal que votre dossier CPAM et sécurité sociale peut être finalisé. Dès que vous avez la confirmation électronique (même avant la vignette physique), complétez l'inscription sur ameli.fr pour obtenir votre numéro de sécurité sociale définitif et demander une carte vitale. La carte vitale prend 2 à 4 mois à arriver — anticipez en utilisant votre attestation de droits numérique de l'Assurance Maladie pour les consultations médicales en attendant.

Sur le plan bancaire, si vous n'avez pas encore ouvert de compte bancaire français classique (certains étudiants se contentent des néo-banques dans un premier temps), la vignette OFII ou la confirmation électronique vous permet d'être reçu dans n'importe quelle agence bancaire physique française avec un dossier solide. Les banques classiques offrent souvent des services plus complets pour les démarches administratives longues qui nécessitent des relevés bancaires certifiés ou des virements SEPA.

L'activation de vos droits à la prime d'activité (si vous travaillez) et à d'autres prestations CAF est également facilitée par un titre de séjour valide bien documenté. Faites une simulation sur caf.fr avec votre situation réelle (revenus, logement, situation familiale) pour vérifier l'ensemble des aides auxquelles vous pourriez prétendre.

## La validation OFII comme jalon dans le processus d'intégration

Au-delà de sa dimension purement administrative, la validation OFII peut être vécue comme un jalon positif dans votre processus d'intégration en France. C'est le moment où votre présence sur le territoire est administrativement confirmée et où vous pouvez commencer à construire les bases pratiques de votre vie en France avec une sécurité totale.

De nombreux étudiants étrangers témoignent que les premières semaines en France sont particulièrement intenses sur le plan administratif — et que la validation OFII marque la fin de la phase la plus urgente de ces démarches. Après elle, vous pouvez vous concentrer davantage sur vos études, votre intégration sociale et culturelle, et votre découverte du pays.

N'oubliez pas que l'OFII propose également, dans le cadre de la Politique d'Accueil des Étrangers, des Cours de Français offerts à certaines catégories d'immigrants — si vous êtes intéressé par des cours de français gratuits pour renforcer votre niveau, renseignez-vous auprès de votre délégation OFII locale sur les programmes disponibles.
`;

// L5 needs ~700 more words
const ADD_L5 = `
## La protection contre les discriminations : droits et recours

Les étudiants étrangers en France sont protégés contre les discriminations par les mêmes lois que les ressortissants français. La loi française interdit toute discrimination fondée sur la nationalité, l'origine ethnique ou nationale, la religion, la couleur de peau, ou d'autres caractéristiques protégées dans les domaines de l'emploi, de l'accès au logement, de l'accès aux services publics et de la vie associative.

Si vous êtes victime d'une discrimination dans l'accès à un logement (refus de location explicitement lié à votre nationalité ou votre origine), dans l'emploi (refus d'embauche discriminatoire), ou dans l'exercice de vos droits, vous avez plusieurs recours.

Le Défenseur des Droits est l'autorité indépendante en France compétente pour connaître les cas de discrimination et de violation des droits fondamentaux. Vous pouvez saisir le Défenseur des Droits gratuitement en ligne, par courrier ou en personne dans ses délégués présents dans de nombreuses structures locales. La procédure est confidentielle et accessible à tous sans condition de nationalité.

Des associations spécialisées (SOS Racisme, LICRA, GISTI, etc.) offrent une assistance aux victimes de discrimination, notamment celles liées à l'origine et à la nationalité. Des permanences juridiques gratuites permettent d'évaluer les cas et d'orienter vers les voies de recours adaptées.

## La liberté académique et ses limites dans le contexte français

La liberté académique est un principe fondamental de l'enseignement supérieur français. Elle protège les enseignants-chercheurs dans leur liberté de recherche et d'enseignement. Pour les étudiants, elle se traduit par le droit de poursuivre des recherches intellectuelles libre de toute pression politique ou idéologique dans les établissements publics.

En tant qu'étudiant étranger, vous bénéficiez de cette liberté académique — vous pouvez choisir librement vos sujets de recherche (dans le cadre des thèmes de votre formation), exprimer des opinions contraires à celles de vos enseignants dans vos travaux académiques (de manière rigoureuse et argumentée), et participer au débat intellectuel de votre discipline sans censurant votre pensée.

Les limites de cette liberté sont celles du droit commun et de l'éthique académique : vous ne pouvez pas plagier, vous ne pouvez pas inventer des données de recherche, et votre expression doit respecter les règles légales sur les propos discriminatoires ou haineux.

## La santé mentale : parler ouvertement d'un enjeu réel

L'expérience de l'expatriation étudiante, quelle que soit sa richesse et sa valeur, est aussi une expérience potentiellement éprouvante. L'éloignement de la famille, le choc culturel, la barrière de la langue, la pression académique, les difficultés administratives et les périodes de solitude sont des réalités que de nombreux étudiants étrangers traversent. Ce n'est pas une faiblesse — c'est une réponse humaine normale à un changement important.

La France dispose d'un système de soutien à la santé mentale des étudiants qui s'est considérablement développé depuis 2020. Le dispositif MonSoutienPsy, les services psychologiques des SSU universitaires, et les associations d'écoute et de soutien (notamment Nightline France, une ligne d'écoute gérée par des étudiants) sont des ressources que vous devriez connaître avant d'en avoir besoin.

Ne tardez pas à demander de l'aide si vous en ressentez le besoin. Les services de soutien psychologique sont confidentiels et n'ont aucune incidence sur votre titre de séjour ou votre statut académique. Chercher de l'aide quand on en a besoin est un signe de sagesse et de connaissance de soi, pas de faiblesse.
`;

// L6 needs ~600 more words
const ADD_L6 = `
## Renouvellements complexes : situations où la préfecture demande des justificatifs supplémentaires

Si votre dossier de renouvellement est plus complexe que la norme — plusieurs changements de formation, des résultats académiques insuffisants, une interruption de séjour prolongée, une activité professionnelle importante — la préfecture peut demander des justificatifs supplémentaires ou vous convoquer pour un entretien. Voici comment aborder ces situations.

Répondez à chaque demande de la préfecture de manière complète et dans les délais indiqués. Une demande de pièce complémentaire n'est pas un refus — c'est une demande d'information. Fournissez ce qui est demandé, et si vous ne pouvez pas fournir exactement ce qui est demandé, expliquez clairement pourquoi et proposez une alternative documentée équivalente.

Si vous êtes convoqué pour un entretien en préfecture, préparez-vous à expliquer votre parcours académique (pourquoi les résultats sont insuffisants, pourquoi vous avez changé de formation, quel est votre projet à terme) de manière honnête, cohérente et positive. Les agents préfectoraux ne cherchent pas à vous piéger — ils veillent à ce que les conditions du titre de séjour soient bien remplies. Une explication honnête vaut mieux qu'une tentative de minimiser des faits vérifiables.

## La co-tutelle de thèse et ses spécificités administratives

Les doctorants inscrits dans un programme de co-tutelle internationale de thèse — partagée entre une université française et une université étrangère — vivent alternativement en France et dans le pays partenaire, ce qui crée des situations administratives particulières.

Du côté français, vous pouvez avoir un VLS-TS ou une carte de séjour étudiant-chercheur (passeport talent). Lors des périodes passées hors de France pour la partie «étrangère» de la co-tutelle, votre titre de séjour reste valide mais vous n'accumulez pas de jours de présence en France. Les délais de renouvellement continuent à s'écouler, et vous devez renouveler votre titre avant son expiration même si vous êtes temporairement à l'étranger (ce qui peut nécessiter un retour en France à temps pour déposer le dossier de renouvellement).

Si votre co-tutelle implique des séjours longs et réguliers dans un autre pays membre de l'espace Schengen (comme l'Allemagne, l'Espagne ou l'Italie), vérifiez si votre titre de séjour français y est également valable pour des séjours de transit ou de travail temporaire, ou s'il faut des démarches supplémentaires dans l'autre pays.

## Préparer la transition vers la vie active

Pour les étudiants en fin de master ou en fin de doctorat qui souhaitent rester en France pour travailler après l'obtention de leur diplôme, la transition administrative est un processus à planifier à l'avance. Voici une feuille de route synthétique.

Dans les 4 mois après l'obtention du diplôme (relevé de notes final ou attestation de diplôme), déposez une demande d'APS (Autorisation Provisoire de Séjour) auprès de votre préfecture. Ce titre de 12 mois vous permet de chercher un emploi ou de créer une entreprise en France librement. Pendant cette année, cherchez activement un emploi correspondant à votre niveau de formation. Les plateformes d'emploi françaises (LinkedIn, Indeed, Welcome to the Jungle, Apec pour les cadres) sont les principaux canaux de recrutement. Les services carrière de votre université peuvent vous aider à préparer votre CV français et vos entretiens.

Lorsque vous trouvez un emploi, votre employeur initie avec vous la procédure pour vous faire délivrer un titre de séjour salarié ou un passeport talent. Cette procédure implique que l'employeur démontre que votre recrutement est légitime et répond à un besoin réel. Pour les emplois hautement qualifiés correspondant à votre niveau de master ou doctorat, la procédure est généralement plus simple et plus rapide que pour des emplois peu qualifiés.
`;

await appendAndPatch('383d067a-e559-4c49-a8f0-043999c4feb4', ADD_L2);
await appendAndPatch('f9d81291-5c86-4364-8ed7-b3dab5a311e4', ADD_L3);
await appendAndPatch('091720f8-2caa-4c7f-8ae9-02e55406872a', ADD_L4);
await appendAndPatch('90444a49-53bc-4a34-b454-a2897fa20591', ADD_L5);
await appendAndPatch('1b8fc4c5-ba29-43cd-88c9-7b7b85524b1a', ADD_L6);
