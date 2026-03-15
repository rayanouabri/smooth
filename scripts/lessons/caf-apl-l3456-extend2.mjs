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

// EXTENSION 2 – L3 : Suspensions / remboursements
const EXT2_L3 = `
## Anticiper et prévenir les suspensions grâce à une gestion proactive du dossier

La meilleure façon d'éviter une suspension de l'APL est d'adopter une posture proactive dans la gestion de votre dossier CAF plutôt que d'attendre qu'un problème survienne pour réagir. Cette approche implique d'abord de s'assurer que vos coordonnées (adresse postale et adresse e-mail) enregistrées dans votre espace Mon Compte sont toujours à jour, car la CAF utilise ces coordonnées pour vous adresser toutes ses demandes de documents et de mise à jour. Un étudiant qui déménage et oublie de mettre à jour son adresse postale peut ne pas recevoir les courriers de la CAF, rater les délais de transmission des documents et se retrouver avec une suspension alors même qu'il remplit toutes les conditions d'éligibilité.

Se connecter à son espace Mon Compte sur caf.fr au moins une fois par mois est une habitude très simplement intégrable dans une routine numérique étudiante. En quelques secondes, vous pouvez vérifier si une notification est en attente, si un document est réclamé, si votre prochain versement est confirmé ou si votre déclaration de ressources annuelle doit être complétée. Cette connexion régulière prévient l'accumulation de situations bloquantes qui ne se débloquent que lorsqu'elles atteignent un point critique nécessitant une intervention téléphonique longue avec un conseiller CAF.

Conserver soigneusement toutes vos pièces justificatives de logement — baux, quittances de loyer, attestations d'hébergement, courriers du propriétaire — dans un dossier numérique organisé vous permettra de répondre rapidement à toute demande de la CAF sans devoir solliciter votre propriétaire dans l'urgence. La CAF peut demander ces documents lors de vérifications périodiques ou lors d'un renouvellement de droits, et une réponse rapide et complète accélère le traitement de votre dossier.

## Comprendre la médiation et les voies de recours CAF

Le cadre juridique français offre plusieurs niveaux de recours pour les allocataires de la CAF qui estiment que leurs droits n'ont pas été correctement appliqués ou qui contestent une décision. Connaître ces voies de recours est important, car elles constituent un filet de sécurité réel contre les erreurs administratives qui peuvent survenir dans tout système de grande envergure.

Le médiateur de la CAF est un interlocuteur informel mais efficace pour les situations de blocage administratif qui ne relèvent pas d'un litige sur le fond. Il peut intervenir pour débloquer un dossier suspendu en attente de pièces, faciliter la communication entre un allocataire et les services de la CAF, ou proposer une solution amiable à une situation litigieuse. La requête auprès du médiateur se fait généralement par écrit, en exposant clairement la chronologie du problème et les démarches déjà effectuées. Le médiateur dispose d'une capacité d'influence auprès des services internes de la CAF qui peut accélérer la résolution d'un blocage.

Le Défenseur des Droits est une institution républicaine indépendante compétente pour examiner les réclamations contre les organismes de service public, y compris les CAF. Si vous avez épuisé les voies de recours internes de la CAF (CRA) sans aboutir à une solution satisfaisante et que vous estimez que vos droits ont été méconnus, vous pouvez saisir le Défenseur des Droits gratuitement via son site internet ou l'un de ses délégués territoriaux présents dans chaque département. Cette institution a le pouvoir d'instruire les dossiers, de formuler des recommandations aux organismes concernés et de rédiger des rapports sur les dysfonctionnements systémiques.
`;

// EXTENSION 2 – L4 : Conditions étrangers
const EXT2_L4 = `
## Les erreurs les plus fréquentes des étudiants étrangers dans leur dossier CAF

L'expérience accumulée par les services sociaux des CROUS et les associations d'aide aux étudiants étrangers permet d'identifier les erreurs les plus fréquentes qui retardent ou bloquent les dossiers CAF. Les connaître à l'avance vous permettra de les éviter et de préparer un dossier irréprochable dès la première soumission.

La première erreur est de soumettre une photo de titre de séjour illisible ou incomplète. La CAF doit pouvoir lire clairement votre prénom, nom, date de naissance, le type de titre et sa date de validité. Une photo prise en biais, dans de mauvaises conditions de luminosité ou avec un doigt qui recouvre une partie du document sera systématiquement rejetée, générant une semaine de retard supplémentaire. Photographiez votre titre de séjour à plat sur une surface blanche, avec un bon éclairage, en vous assurant que les quatre coins du document sont visibles.

La deuxième erreur fréquente est de confondre la date de début du bail et la date d'entrée effective dans le logement. Pour le calcul rétroactif de l'APL, la CAF utilise la date de prise d'effet du bail (généralement le premier jour du mois de début du contrat), pas la date à laquelle vous avez physiquement emménagé. Indiquez toujours la date inscrite sur votre bail comme date d'entrée dans le logement dans votre déclaration CAF.

La troisième erreur est d'oublier de déclarer le logement comme résidence principale dans le formulaire. La case «résidence principale» doit être explicitée, car un logement déclaré comme résidence secondaire ou logement temporaire ne donne pas droit à l'APL. Si vous êtes en France pour toute l'année universitaire, votre logement étudiant est votre résidence principale, même si vous retournez dans votre pays d'origine pendant les vacances.

## Ressources d'accompagnement spécifiques pour les étudiants étrangers face à la CAF

La navigation du système administratif français peut être déconcertante, notamment pour les étudiants qui découvrent simultanément un nouveau pays, une nouvelle langue et un nouveau système de protection sociale. De nombreuses structures d'accompagnement existent spécifiquement pour faciliter ces démarches et ne pas laisser les étudiants étrangers seuls face à des formulaires et des procédures parfois opaques.

Le Bureau de l'Accueil des Étudiants Internationaux (BAEI) ou le Service des Relations Internationales de votre université propose généralement des sessions d'information ou des permanences dédiées aux démarches administratives à l'arrivée, incluant les démarches CAF. Ces sessions collectives permettent de poser des questions dans un cadre informel et de bénéficier de l'expérience d'étudiants plus anciens qui ont déjà traversé les mêmes étapes. Consultez le calendrier des événements d'accueil de votre établissement dès votre arrivée.

La CIMADE (Comité Inter-Mouvement Auprès des Évacués) et d'autres associations spécialisées dans les droits des étrangers en France proposent un accompagnement juridique qui peut s'étendre aux droits sociaux comme l'APL. Si votre dossier CAF est bloqué pour des raisons liées à votre statut de séjour et que les voies standard n'aboutissent pas, ces associations peuvent vous aider à identifier des solutions et à vous défendre face à l'administration.
`;

// EXTENSION 2 – L5 : Revenus
const EXT2_L5 = `
## Le cas des étudiants en service civique et de leurs revenus d'indemnisation

Le service civique est une forme d'engagement volontaire rémunérée par une indemnité mensuelle de l'État, distincte d'un salaire salarié classique. Pour les étudiants qui réalisent un service civique en parallèle de leurs études ou pendant une année de césure, les questions sur l'impact de cette indemnité sur l'APL méritent une réponse claire.

L'indemnité de service civique, versée par l'État via l'Agence du Service Civique, est exclue du calcul de l'APL au même titre que certaines allocations publiques de soutien. Cette exclusion est explicite dans la liste des ressources non prises en compte pour les aides au logement. Un étudiant qui réalise un service civique et perçoit l'indemnité mensuelle de base (environ 600 euros nets par mois) verra son APL maintenue à son niveau habituel, sans réduction liée à cette indemnité. C'est un avantage notable pour les étudiants qui choisissent cette voie d'engagement, qui leur permet de bénéficier d'une ressource supplémentaire sans affecter leurs aides au logement.

Il est important de distinguer l'indemnité de base du service civique de l'éventuelle indemnité complémentaire versée par certains organismes d'accueil. Cette indemnité complémentaire, qui dépasse l'indemnité réglementaire de base, pourrait être considérée différemment selon sa qualification fiscale et sociale. Vérifiez avec votre CAF si vous percevez une indemnité complémentaire significative dans le cadre de votre service civique.

## L'impact de la rupture d'un stage ou d'un emploi en cours d'année

La perte d'un emploi ou l'interruption d'un stage en cours d'année universitaire crée une situation particulière pour le calcul de l'APL en contemporisation. Si vous étiez salarié pendant plusieurs mois et que votre APL avait été réduite en conséquence, l'arrêt de vos revenus doit se refléter dans votre aide au logement mais avec un décalage lié au fonctionnement de la contemporisation sur 12 mois glissants.

Quand vos revenus professionnels cessent, la contemporisation intègre ce changement lors de la prochaine mise à jour trimestrielle des données URSSAF. Progressivement, les mois sans revenu remplacent les mois auparavant chargés dans la fenêtre glissante de 12 mois, et votre APL augmente mécaniquement. Ce rattrapage est automatique et n'exige pas de déclaration de votre part pour la contemporisation. Cependant, si votre situation change radicalement (perte d'emploi entraînant une grande difficulté financière), signaler ce changement à la CAF peut accélérer la réévaluation de votre dossier en dehors du cycle trimestriel standard.

Pour les stages interrompus avant leur terme, notamment si la convention de stage est rompue avant la date prévue, les données URSSAF se mettent à jour automatiquement dès que la fin de stage est enregistrée par l'employeur. Si vous faites face à une situation financière d'urgence liée à l'interruption d'un stage, le fonds d'urgence du CROUS reste accessible indépendamment de votre situation APL pour apporter un soutien ponctuel.
`;

// EXTENSION 2 – L6 : Cumuler aides
const EXT2_L6 = `
## Les nouvelles aides étudiantes de 2024-2025 : repas à 1 euro et autres dispositifs

Le paysage des aides étudiantes évolue régulièrement, avec l'introduction de nouveaux dispositifs qui s'ajoutent aux aides existantes. L'année 2024-2025 a notamment vu la consolidation de plusieurs mesures introduites pour répondre à la précarité étudiante révélée par la crise du COVID-19 et ses suites économiques.

Le repas à 1 euro dans les restaurants universitaires CROUS est l'une des mesures les plus significatives pour réduire les dépenses alimentaires des étudiants précaires. Ce dispositif, initialement mis en place pour les boursiers sur critères sociaux, a été étendu à l'ensemble des étudiants non boursiers depuis 2023. En pratique, tous les étudiants peuvent accéder à un repas complet (entrée, plat, dessert) dans les restaurants universitaires CROUS pour 3,30 euros maximum, avec un tarif réduit à 1 euro pour les boursiers. Cette aide en nature réduit significativement le budget alimentaire mensuel et peut libérer des ressources pour d'autres postes de dépenses. Elle est entièrement cumulable avec l'APL et toutes les aides au logement.

La complémentaire santé solidaire (CSS) est une aide moins connue mais extrêmement précieuse pour les étudiants aux revenus modestes. Elle prend en charge tout ou partie des dépenses de santé non remboursées par l'Assurance Maladie, supprimant le besoin de souscrire une mutuelle complémentaire à ses propres frais. Pour les étudiants éligibles (revenus inférieurs à environ 900 euros par mois en 2024), la CSS gratuite couvre les consultations médicales, les médicaments, l'optique, le dentaire et les hospitalisations au-delà du remboursement de base. Elle est entièrement cumulable avec l'APL. La demande se fait sur ameli.fr, dans la section dédiée à la complémentaire santé solidaire.

## Construire un budget étudiant optimisé avec toutes les aides disponibles

La maîtrise de l'ensemble des aides disponibles — APL, bourse CROUS, prime d'activité, garantie Visale, aides locales, CSS, repas CROUS à tarif réduit — permet de construire un budget étudiant beaucoup plus solide que ne le suggèrent les clichés sur la précarité étudiante. Un étudiant boursier qui active tous ses droits peut se retrouver dans une situation financière réellement viable, même dans une ville à loyers élevés.

Un exemple de budget mensuel optimisé pour un étudiant boursier de l'échelon 5 à Lyon, dans un appartement de 25 m² à 600 euros de loyer : bourse CROUS 488 euros, APL 192 euros (loyer résiduel 408 euros), prime d'activité pour un emploi de 10h/semaine environ 100 euros, salaire emploi étudiant environ 470 euros nets. Total ressources mensuelles : environ 1 250 euros. Total dépenses estimées (loyer résiduel 408, alimentation avec CROUS 180, transport 75, téléphone 25, divers 100) : environ 788 euros. Solde positif mensuel : environ 462 euros. Ce budget est serré mais réaliste, et illustre que l'activation de toutes les aides disponibles change fondamentalement l'équation financière de la vie étudiante.

La clé de ce budget est l'activation systématique de chaque aide à laquelle vous avez droit, sans en omettre aucune par méconnaissance ou par procrastination. La prime d'activité négligée représente 100 euros perdus par mois. La CSS non demandée représente 30 à 60 euros de mutuelle payés inutilement chaque mois. Ces sommes, mises bout à bout sur une année universitaire, représentent des centaines d'euros que vous pouvez investir dans vos études, vos loisirs ou votre épargne de précaution.
`;

await appendAndPatch('486ce28a-10ab-4c88-80c8-e4e44122713f', EXT2_L3);
await appendAndPatch('da7e82e3-0993-4675-9aaa-e0ea3ba7138a', EXT2_L4);
await appendAndPatch('1393b8f5-c0bc-4218-aa6d-248325c219d1', EXT2_L5);
await appendAndPatch('3d1ec51d-e234-40b3-9678-15c8385e866a', EXT2_L6);
