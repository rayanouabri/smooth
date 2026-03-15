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

// L1: 2195 → ~+950 words
const EXT4_L1 = `
## Les spécificités fiscales des étudiants en double nationalité

Les étudiants qui ont la double nationalité (franco-étrangère) se trouvent parfois dans une situation fiscale particulière où plusieurs pays peuvent revendiquer leur résidence fiscale. La règle générale est que la résidence fiscale dépend de critères objectifs (lieu de séjour principal, centre des intérêts économiques, lieu d'activité professionnelle principale) et non pas de la nationalité. Avoir la nationalité française ne signifie pas automatiquement être résident fiscal français si l'on vit principalement à l'étranger.

Pour un étudiant franco-étranger qui revient en France pour ses études après avoir vécu à l'étranger, l'établissement de la résidence fiscale française intervient généralement dès la première année d'études si le séjour dépasse 183 jours. La convention fiscale entre la France et le pays d'origine (ou de résidence précédente) régit les règles de tiebreaker en cas de double résidence fiscale potentielle.

La consultation d'un spécialiste de la fiscalité internationale peut être justifiée pour les étudiants bi-nationaux avec des patrimoines ou des revenus répartis entre plusieurs pays — une situation de plus en plus fréquente pour les familles mobiles.

## La fiscalité des revenus perçus lors d'échanges internationaux

Pour les étudiants qui effectuent des activités rémunérées lors d'un séjour dans un autre pays (stage, job étudiant à l'étranger pendant les vacances), les règles fiscales applicables sont celles du pays de réalisation de l'activité selon la plupart des conventions fiscales, même si la personne reste résident fiscal français.

En pratique, cela signifie que les revenus d'un stage en Allemagne, en Espagne, ou aux États-Unis peuvent être imposés dans ce pays même si l'étudiant demeure résident fiscal français. La France accorde alors généralement un crédit d'impôt ou une exonération pour ces revenus étrangers afin d'éviter la double imposition. La déclaration de ces revenus sur le formulaire 2047 est obligatoire même si aucun impôt n'est finalement dû en France.

## La gestion des remboursements d'impôts

Lorsque le prélèvement à la source opéré sur les salaires de l'année est supérieur à l'impôt effectivement dû (après prise en compte des exonérations, de la décote, et des crédits d'impôt), l'administration effectue un remboursement automatique. Ce remboursement intervient généralement dans les semaines suivant la réception de l'avis d'imposition.

Pour les étudiants dont le prélèvement à la source a été calculé sur un taux neutre initialement trop élevé (situation courante pour les primo-déclarants), le remboursement peut représenter plusieurs centaines d'euros. Il est donc dans l'intérêt de l'étudiant de s'assurer que ses coordonnées bancaires sont à jour dans l'espace particulier pour recevoir ce remboursement efficacement.

La demande de remboursement est automatique et ne nécessite pas de démarche particulière du contribuable. Cependant, vérifier que l'IBAN enregistré dans l'espace particulier correspond bien au compte bancaire actif est une précaution utile qui évite que le remboursement soit envoyé sur un compte clôturé ou inexact.

## L'interaction entre fiscalité et protection sociale pour les étudiants

En France, la protection sociale des étudiants est partiellement financée par des cotisations prélevées sur leurs revenus professionnels. Les cotisations sociales sur les salaires des étudiants (assurance maladie, retraite, chômage) sont distinctes de l'impôt sur le revenu mais contribuent à construire des droits sociaux. Ces cotisations n'apparaissent pas dans la déclaration de revenus mais sont visibles sur les bulletins de salaire.

Pour les étudiants qui cotisent pendant leurs études (alternants, jobs étudiants significatifs), ces années de cotisation ouvrent des droits à l'assurance maladie en propre, à l'assurance chômage en cas de rupture de contrat ou de fin de mission, et au calcul de la retraite. La conscience de ces droits sociaux qui se construisent à travers le travail étudiant ajoute une dimension supplémentaire à la valeur de ces expériences professionnelles.

## Perspectives d'évolution du système fiscal pour les jeunes

Le système fiscal français évolue régulièrement et certaines tendances sont particulièrement pertinentes pour les jeunes contribuables. La simplification progressive de la déclaration (avec la déclaration pré-remplie et le prélèvement à la source) réduit la charge administrative pour les situations simples. Les efforts de numérisation de l'administration facilitent l'accès aux services et aux informations.

Des débats politiques sur l'universalisation de certains crédits d'impôt, sur la réforme du quotient familial, et sur le traitement fiscal des nouvelles formes de travail (économie des plateformes, télétravail transfrontalier) peuvent modifier les règles applicables aux étudiants dans les prochaines années. Rester informé de ces évolutions, notamment lors des lois de finances annuelles qui sont votées chaque automne, est une bonne pratique pour les contribuables qui souhaitent être proactifs dans la gestion de leur situation fiscale.
`;

// L2: 2414 → ~+850 words
const EXT4_L2 = `
## La déclaration dans les situations de changement important de revenus

L'administration fiscale française dispose de mécanismes pour gérer les situations où les revenus changent significativement d'une année à l'autre. Pour les étudiants en alternance qui passent d'une rémunération significative à une période sans revenus (retour en études à temps plein), la modulation du prélèvement à la source permet d'ajuster immédiatement le taux de prélèvement à la nouvelle situation de revenus.

Cette modulation peut être effectuée à tout moment de l'année via l'espace particulier. Elle prend effet généralement dans les deux mois suivant la demande. Pour un étudiant qui perd son emploi ou qui voit ses revenus chuter fortement, la modulation immédiate du taux de PAS évite une retenue trop importante sur les revenus qui continuent à être perçus (salaire de fin de préavis, indemnités).

## Les obligations fiscales lors d'un départ définitif de France

Pour les étudiants étrangers qui quittent la France définitivement après leurs études, certaines démarches fiscales de fin de résidence sont nécessaires. Une déclaration de revenus dite "de départ" doit être effectuée pour l'année du départ, couvrant les revenus perçus jusqu'à la date de cessation de résidence fiscale en France. Cette déclaration peut entraîner un remboursement d'impôt (si trop de prélèvements ont été effectués) ou un solde à payer (si les prélèvements ont été insuffisants).

La notification du changement d'adresse et du départ à l'administration fiscale est importante pour mettre fin proprement à la relation fiscale en France. En l'absence de notification, l'administration peut continuer à adresser des communications fiscales à l'ancienne adresse française, ce qui peut créer des complications administratives.

## Les droits de succession et les donations : aspects à connaître pour les étudiants

Bien que les droits de succession et les donations soient des sujets qui semblent éloignés des préoccupations immédiates des étudiants, ils peuvent devenir pertinents si les parents ou grands-parents souhaitent transmettre des actifs (sommes d'argent, biens immobiliers, titres financiers) pendant les études.

En France, les donations entre parents et enfants bénéficient d'un abattement de 100 000 euros tous les 15 ans. Pour les donations de "présents d'usage" (cadeaux d'anniversaire, cadeau de fin d'études, aide pour un premier logement), l'exonération est encore plus large : ces présents ne sont pas soumis aux droits de donation s'ils sont proportionnés à la situation financière du donateur et liés à un événement particulier.

## L'importance de l'adresse fiscale pour les notifications

L'espace particulier sur impots.gouv.fr est le canal principal de communication entre l'administration fiscale et les contribuables qui y sont inscrits. Les notifications importantes (avis d'imposition, demandes de renseignement, mises en demeure) sont transmises via cet espace en plus des courriers postaux. Activer les alertes email de l'espace particulier garantit de ne pas manquer ces notifications même en cas d'absence prolongée du domicile.

Pour les étudiants qui n'consultent pas régulièrement leur messagerie postale (logement étudiant avec boîtes aux lettres peu sécurisées, fréquents déménagements), l'espace numérique est une alternative fiable pour s'assurer de recevoir toutes les communications importantes de l'administration fiscale. Vérifier régulièrement son espace particulier, au minimum une fois par trimestre, est une bonne pratique administrative.

## La solidarité dans le paiement de l'impôt pour les foyers avec revenus mixtes

Pour les étudiants mariés ou pacsés dont le/la partenaire travaille, la déclaration commune implique que les revenus des deux membres du foyer sont combinés pour calculer l'impôt total. Dans ce cas, la solidarité fiscale signifie que si l'un des membres n'est pas en mesure de payer sa part, l'autre est redevable de la totalité.

Cette solidarité peut avoir des implications importantes si les revenus du couple sont très disparates. L'optimisation fiscale d'un foyer avec revenus mixtes (un étudiant peu ou pas imposé et un actif avec des revenus significatifs) peut inclure des stratégies légales comme l'optimisation des versements sur les dispositifs d'épargne défiscalisée (PEL, PER, plan d'épargne salarial) à la charge du membre le plus imposé.

## La préparation fiscale de la vie professionnelle future

Les habitudes fiscales formées pendant les études ont tendance à perdurer. Un étudiant qui apprend à déclarer correctement ses revenus, à conserver ses justificatifs, et à vérifier son espace particulier régulièrement sera mieux préparé pour gérer sa fiscalité lors du passage à la vie professionnelle active. La complexité fiscale augmente généralement avec les revenus et les responsabilités (propriété immobilière, placements, famille) mais les fondamentaux restent les mêmes.

Investir dans la compréhension de sa situation fiscale pendant les études est un capital dont la valeur croît avec le temps. La maîtrise de la fiscalité personnelle est une compétence transversale qui bénéficie à la fois à la sécurité financière immédiate et à la construction patrimoniale de long terme.
`;

// L3: 2318 → ~+900 words
const EXT4_L3 = `
## La sécurité de l'espace particulier et la protection des données fiscales

Les données fiscales contenues dans l'espace particulier sont parmi les informations personnelles les plus sensibles. L'accès à cet espace nécessite un identifiant (numéro fiscal) et un mot de passe personnel. Des niveaux supplémentaires de sécurité (double authentification via SMS ou application d'authentification) ont été progressivement introduits par l'administration française pour renforcer la protection des comptes.

Il est fortement recommandé d'utiliser un mot de passe robuste et unique pour l'espace particulier (différent de celui utilisé pour d'autres comptes en ligne) et d'activer la double authentification quand elle est disponible. En cas de suspicion de compromission du compte (connexion suspecte signalée, mot de passe révélé dans une fuite de données), contacter immédiatement le service des impôts pour bloquer le compte et le sécuriser est la démarche d'urgence à effectuer.

## La procédure de réclamation contentieuse

Si un contribuable est en désaccord avec le montant de son impôt après réception de l'avis d'imposition, il dispose du droit de réclamation contentieuse. Cette réclamation doit être adressée par écrit au service des impôts compétent dans le délai légal (généralement 2 ans à partir de la mise en recouvrement de l'imposition). La réclamation doit préciser les éléments de la cotisation contestés et les motifs du désaccord.

Pour les étudiants, les motifs de réclamation les plus fréquents sont : un revenu exonéré déclaré dans la mauvaise case (exonération non appliquée), un crédit d'impôt non pris en compte, ou une erreur dans le calcul du quotient familial. L'administration dispose de 6 mois pour répondre à une réclamation. En cas de rejet ou de réponse insatisfaisante, la saisine du tribunal administratif est possible.

## L'accès à l'historique fiscal pour les démarches administratives

Un aspect pratique important de l'espace particulier est la disponibilité des avis d'imposition des 3 à 5 dernières années. Ces documents historiques sont souvent demandés lors de démarches administratives : demande de logement social, accès à certaines aides locales, vérification du droit à certaines réductions (abonnements de transport réduits, tarifs sociaux des services publics).

L'accès à ces documents depuis n'importe quel appareil connecté à internet est un avantage considérable par rapport à la conservation de documents papier qui peuvent se perdre lors de déménagements fréquents. La numérisation de l'administration fiscale française, bien qu'imparfaite, offre une accessibilité documentaire qui était impossible à l'ère des archives uniquement papier.

## Le dépôt de la déclaration lors d'une hospitalisation ou d'une incapacité

Des situations extraordinaires — hospitalisation prolongée, accident empêchant temporairement toute démarche administrative — peuvent rendre difficile ou impossible le dépôt de la déclaration dans les délais. L'administration fiscale est sensible aux situations de force majeure et peut accorder des délais supplémentaires sur justificatif médical.

En cas d'incapacité temporaire, un proche peut être habilité à déposer la déclaration au nom du contribuable, sous réserve d'une procuration. La procuration pour effectuer des démarches fiscales peut être donnée à tout adulte de confiance. Pour les personnes sous tutelle ou curatelle, le représentant légal effectue les démarches fiscales au nom de la personne protégée.

## Les avantages de la déclaration précoce

Bien que la déclaration puisse être soumise jusqu'à la date limite (généralement fin mai ou début juin selon le département), la soumettre dès l'ouverture de la campagne de déclaration (généralement mi-avril) présente plusieurs avantages. L'avis d'imposition ou de non-imposition est disponible plus tôt, ce qui accélère les démarches administratives qui en dépendent (APL, bourses, formulaires divers). En cas d'erreur ou d'omission, il y a plus de temps pour soumettre une correction avant la date limite.

Psychologiquement, clôturer cette démarche obligatoire tôt dans la saison libère l'espace mental pour d'autres priorités. Pour les étudiants dont l'agenda est chargé par les examens et les stages de fin d'études au même période que la déclaration fiscale, préparer sa déclaration en avance (dès que les documents de l'année précédente sont disponibles, soit fin janvier - début février) et la soumettre dès l'ouverture est une stratégie efficace.

## La continuité de la déclaration et la constitution d'un historique fiscal

Chaque déclaration de revenus contribue à constituer un historique fiscal. Cet historique devient de plus en plus précieux avec le temps : il permet à la banque de vérifier l'évolution des revenus lors d'une demande de crédit, à l'administration de calculer les droits à la retraite correctement, et au contribuable de suivre sa propre trajectoire financière au fil des années.

La constance dans les déclarations (même les années sans revenus ou avec des revenus très faibles) et la précision des informations déclarées construisent progressivement un profil fiscal fiable et positif. Un contribuable dont le dossier fiscal est complet, cohérent, et sans lacunes présente un meilleur profil administratif et financier que celui dont le dossier comporte des années manquantes ou des incohérences.
`;

// L4: 2384 → ~+900 words
const EXT4_L4 = `
## Les avantages fiscaux liés aux investissements dans les jeunes entreprises

Pour les étudiants-entrepreneurs ou les étudiants qui investissent leurs premières économies dans des startups ou des jeunes entreprises innovantes (JEI), des avantages fiscaux significatifs existent pour encourager ces investissements. La réduction d'impôt sur le revenu pour souscription au capital de PME (dispositif IR-PME ou "Madelin") permet de déduire 18% à 25% des investissements réalisés, dans certaines limites.

Ces dispositifs sont plus pertinents pour les contribuables avec un impôt significatif à réduire. Pour la plupart des étudiants avec peu ou pas d'impôt, ces réductions d'impôt ont peu d'impact immédiat mais peuvent devenir intéressantes dans les premières années de vie professionnelle. Prendre conscience de ces dispositifs dès les études permet de les utiliser efficacement dès que la situation fiscale le justifie.

## La transparence fiscale et la confiance citoyenne

Au-delà des aspects techniques, la déclaration de revenus est un acte civique. Les impôts financent les services publics dont les étudiants sont parmi les principaux bénéficiaires — enseignement supérieur subventionné, bourses CROUS, services de santé, infrastructures de transport. La transparence dans sa déclaration fiscale est une contribution à la collectivité et au fonctionnement des institutions.

Cette perspective citoyenne dépasse les calculs d'optimisation fiscale individuelle et positionne la fiscalité comme un contrat social. Comprendre pourquoi les impôts sont perçus et comment ils sont utilisés enrichit la compréhension du système social français et l'engagement civique. Pour les étudiants étrangers, cette compréhension facilite également l'intégration dans la société française et la compréhension de ses valeurs.

## L'impact des évolutions technologiques sur la fiscalité future

La technologie transforme progressivement le paysage fiscal. Le développement de l'intelligence artificielle dans les outils de l'administration fiscale améliore la capacité de détection des anomalies et des incohérences dans les déclarations. La généralisation de la facturation électronique (déjà obligatoire pour les grandes entreprises, progressivement étendue aux PME et micro-entreprises) permettra à terme une quasi-automatisation complète des déclarations de TVA et une meilleure synchronisation des données entre l'administration et les contribuables.

Pour les étudiants-micro-entrepreneurs, l'obligation de facturation électronique deviendra progressive, avec une adaptation nécessaire des outils de facturation. Les obligations administratives futures seront probablement à la fois plus contraignantes techniquement et plus simples dans leur exécution — à condition de s'être équipé des bons outils numériques dès le départ.

## La prévoyance fiscale : anticiper les changements de situation

La prévoyance fiscale consiste à anticiper les changements de situation personnelle ou professionnelle qui auront des implications fiscales et à prendre des décisions en connaissance de cette dimension fiscale. Pour les étudiants qui approchent de la fin de leurs études, anticiper le passage à l'emploi salarié, à l'entrepreneuriat, ou à d'autres activités permet de prendre les décisions appropriées quant au choix du statut, à l'organisation de ses revenus, et à l'utilisation des dispositifs d'épargne disponibles.

Par exemple, la décision d'ouvrir un PER (Plan d'Épargne Retraite) avant la première année de revenus significatifs permet de maximiser les déductions fiscales dès la première déclaration avec une imposition significative. La décision de créer une société (SARL, SAS) plutôt que de rester micro-entrepreneur quand les revenus professionnels dépassent les seuils de la micro-entreprise doit intégrer les implications fiscales des deux régimes.

## La documentation des dépenses professionnelles pour les frais réels

Pour les étudiants qui font le choix de déduire les frais réels plutôt que la déduction forfaitaire de 10%, la documentation méticuleuse des dépenses professionnelles est indispensable. Les frais admissibles comprennent les frais de transport entre le domicile et le lieu de travail (selon des règles spécifiques et des limites kilométriques), les frais de repas pris à l'extérieur (dans les limites réglementaires), les frais de documentation professionnelle, et les outils ou équipements nécessaires à l'exercice de l'activité.

Un tableur dédié aux dépenses professionnelles, mis à jour au fur et à mesure au cours de l'année, est l'outil de base pour préparer une déclaration aux frais réels. Chaque dépense doit être documentée par un justificatif (facture, ticket, relevé bancaire). La tenue de ce journal de dépenses tout au long de l'année est beaucoup moins contraignante que de tenter de reconstituer les dépenses à posteriori lors de la déclaration.

## Synthèse : les piliers d'une bonne gestion fiscale étudiante

Pour conclure cette leçon sur les exonérations et avantages fiscaux pour les étudiants, retenons les piliers fondamentaux d'une bonne gestion fiscale pendant les études. Premièrement, déclarer systématiquement même quand les revenus sont nuls ou très faibles — l'avis de non-imposition est un document précieux. Deuxièmement, utiliser les bonnes cases pour les revenus exonérés (apprentissage, jobs étudiants) pour bénéficier automatiquement des exonérations. Troisièmement, simuler les différentes options (rattachement vs foyer séparé, barème vs PFU pour les capitaux) avant de finaliser la déclaration. Quatrièmement, conserver tous les justificatifs pendant au moins 4 ans. Cinquièmement, utiliser la messagerie sécurisée pour toute question sur sa situation spécifique. Ces cinq pratiques simples constituent une fondation solide pour une vie fiscale sereine et maîtrisée.
`;

// L5: 2436 → ~+850 words
const EXT4_L5 = `
## Les signaux d'alerte d'une déclaration potentiellement contestée

Certaines situations dans une déclaration de revenus attirent davantage l'attention de l'administration fiscale et peuvent déclencher une demande de renseignement supplémentaire. Parmi ces signaux d'alerte pour les étudiants : des revenus de sources multiples avec des montants disparates, des frais réels qui représentent plus de 20% du salaire brut (ce qui est peu fréquent pour les étudiants), des revenus étrangers non déclarés dans le formulaire 2047, ou des variations importantes d'une année à l'autre sans explication évidente.

Ces situations ne signifient pas automatiquement qu'une erreur a été commise — elles peuvent parfaitement être justifiées par la réalité de la situation. La différence entre une situation qui génère une demande de renseignement et une situation identique qui passe sans problème est souvent la qualité de la documentation. Avoir ses justificatifs prêts et organisés permet de répondre rapidement à toute demande de l'administration avec confiance et précision.

## La distinction entre omission volontaire et involontaire

L'administration fiscale distingue clairement entre l'omission involontaire (erreur, oubli de bonne foi) et la dissimulation volontaire (fraude délibérée). Cette distinction est cruciale pour le niveau des sanctions applicables. Pour les primo-déclarants et les jeunes contribuables qui découvrent leurs obligations fiscales pour la première fois, les erreurs de bonne foi sont traitées avec plus d'indulgence que les manœuvres dissimulées.

Si l'administration contacte un étudiant pour signaler une incohérence dans sa déclaration, la posture recommandée est la coopération transparente : reconnaître l'erreur si elle est avérée, fournir les justificatifs demandés rapidement, et proposer une correction. Cette approche coopérative facilite la résolution rapide du différend et limite les pénalités applicables.

## Les ressources d'aide pour les étudiants en difficulté fiscale

Si un étudiant se retrouve dans une situation fiscale difficile — det te fiscale imprévue, pénalités accumulées, situation bloquante — plusieurs ressources d'aide sont disponibles. Le conciliateur fiscal départemental est un médiateur indépendant qui peut intervenir pour trouver une solution amiable entre le contribuable et l'administration. La saisine est gratuite et sans formalisme particulier.

Pour les situations de grande précarité où l'impôt dû représente une charge réellement insurmontable, une demande de remise gracieuse peut être adressée au directeur des services fiscaux. Ces remises gracieuses sont accordées au cas par cas selon la situation financière du demandeur et ne sont pas de droit, mais elles représentent une possibilité réelle pour les contribuables en grande difficulté.

## Les bonnes pratiques de communication avec l'administration fiscale

La communication avec l'administration fiscale, qu'elle soit initiée par le contribuable ou par l'administration, doit toujours être traitée sérieusement et rapidement. Ne jamais ignorer une lettre ou un message de l'administration fiscale est la règle d'or. Les délais indiqués dans les correspondances sont généralement stricts et les dépasser entraîne des conséquences automatiques (majorations, taxation d'office).

Pour les communications complexes ou importantes, la forme écrite est toujours préférable à la forme orale. Même si une conversation téléphonique avec un agent a été satisfaisante, confirmer par écrit les points importants discutés et les engagements pris crée une trace documentaire utile. La messagerie sécurisée de l'espace particulier est le canal approprié pour ces confirmations écrites formelles.

## L'utilisation pédagogique des erreurs fiscales

Chaque erreur fiscale, si elle est correctement comprise et corrigée, est une opportunité d'apprentissage. Un étudiant qui fait une erreur dans sa première déclaration, reçoit une demande de renseignement, corrige l'erreur et paie une faible pénalité a acquis une expérience concrète qui rendra toutes ses déclarations futures plus précises. Cette expérience directe est souvent plus formatrice que la théorie.

Partager ces expériences avec d'autres étudiants dans la même situation — via les associations étudiantes, les groupes de discussion en ligne, ou les réseaux informels de partage d'expériences — contribue à diffuser une culture de la conformité fiscale et du soutien mutuel dans la gestion administrative. Les associations d'étudiants qui proposent des ateliers de déclaration fiscale jouent un rôle précieux dans cet écosystème d'apprentissage collectif.

## La déclaration fiscale comme marqueur d'intégration et d'autonomie

Pour les étudiants étrangers en France, compléter correctement sa première déclaration de revenus est un marqueur symbolique d'intégration dans la société française. Cela signifie maîtriser un des systèmes administratifs les plus complexes de la vie quotidienne, comprendre les règles qui s'appliquent à sa situation particulière, et exercer ses obligations et ses droits en tant que résident.

Cette maîtrise administrative est une compétence transversale qui facilite toutes les autres démarches administratives — logement, santé, emploi, retraite. Les étudiants qui développent cette compétence pendant leurs études arrivent dans la vie professionnelle avec un avantage significatif sur ceux qui ont toujours délégué ces démarches ou qui les ont évitées par méconnaissance.
`;

// L6: 2395 → ~+900 words
const EXT4_L6 = `
## Les obligations déclaratives des plateformes numériques

Depuis 2020, les plateformes numériques (Airbnb, Uber Eats, Vinted, Leboncoin, eBay) ont l'obligation légale de transmettre à l'administration fiscale française un récapitulatif annuel des transactions effectuées par leurs utilisateurs. Cette obligation, issue de la directive européenne DAC7, vise à améliorer la conformité fiscale des revenus générés via ces plateformes.

Pour les étudiants qui utilisent ces plateformes, cela signifie que leurs activités sont visibles de l'administration même si elles ne les déclarent pas spontanément. La transparence des plateformes rend le défaut de déclaration beaucoup plus risqué qu'il ne pouvait l'être avant ces obligations. La bonne pratique est donc de déclarer ces revenus correctement dans les cases appropriées de la déclaration, en bénéficiant des exonérations et abattements applicables selon la nature de l'activité.

## La fiscalité des activités de location de courte durée

Les étudiants qui sous-louent une chambre de leur logement via Airbnb ou des plateformes similaires doivent comprendre leur régime fiscal. Pour la location meublée d'une partie de sa résidence principale, une exonération spécifique s'applique si les revenus ne dépassent pas un certain plafond fixé annuellement. En 2024, cette exonération s'applique si les loyers annuels perçus ne dépassent pas un seuil variable selon la situation géographique du logement (par exemple 760 euros dans les zones rurales, ou plus élevé dans certaines zones tendues).

Au-delà des seuils d'exonération, les revenus de location meublée sont imposés selon le régime micro-BIC (avec un abattement de 50% sur les recettes brutes pour les frais) ou selon le régime réel (déduction des charges réelles). Pour les étudiants avec des locations ponctuelles de faible montant, le régime micro-BIC avec son abattement forfaitaire est généralement le plus simple et le plus avantageux.

## La planification fiscale de la transmission patrimoniale entre générations

La transmission de patrimoine des parents ou grands-parents vers les étudiants peut prendre plusieurs formes avec des implications fiscales différentes. Les virements familiaux réguliers pour les frais d'études et de vie sont des aides non imposables s'ils ont bien la nature d'une aide familiale et non d'un revenu pour service rendu. Les donations formelles (avec acte notarié ou déclaration aux impôts) bénéficient des abattements de 100 000 euros tous les 15 ans entre parents et enfants.

Pour les transmissions de biens immobiliers ou de portefeuilles financiers importants, une planification avec un notaire ou un conseiller patrimonial est recommandée. Ces professionnels connaissent les dispositifs de transmission progressifs qui permettent de transmettre un patrimoine de façon fiscalement optimisée sur plusieurs années.

## La protection des données fiscales dans un monde connecté

À l'ère numérique, les données fiscales sont exposées à des risques nouveaux. Les informations contenues dans l'espace particulier des impôts (revenus, situation familiale, coordonnées bancaires) sont des cibles de valeur pour les cybercriminels. Des tentatives de phishing (emails frauduleux imitant les communications officielles) sont régulièrement signalées pendant la période de déclaration fiscale.

Pour se protéger, il faut systématiquement vérifier l'adresse expéditrice des emails prétendument fiscaux (l'administration fiscale envoie uniquement depuis des domaines en @impots.gouv.fr ou @finances.gouv.fr), ne jamais cliquer sur un lien dans un email fiscal sans vérifier sa légitimité, et accéder à l'espace particulier uniquement en tapant directement l'adresse impots.gouv.fr dans le navigateur. En cas de doute sur un email fiscal reçu, contacter le service des impôts par téléphone pour vérification.

## La valeur de la connaissance fiscale dans la vie professionnelle future

Les connaissances fiscales acquises pendant les études forment un capital intellectuel durable. Lors des premières expériences professionnelles, la compréhension de la fiche de paye (cotisations sociales, prélèvement à la source, avantages en nature), la maîtrise des déclarations annuelles, et la connaissance des dispositifs d'optimisation légaux constituent des avantages concrets par rapport aux jeunes actifs qui doivent tout apprendre en situation réelle.

Dans les postes à responsabilité, cette culture fiscale personnelle se traduit souvent en une meilleure compréhension des enjeux fiscaux de l'entreprise, des discussions plus éclairées avec les experts-comptables et les conseillers fiscaux, et des décisions d'affaires plus nuancées lorsqu'elles ont des implications fiscales. Investir dans la formation fiscale personnelle, même au niveau élémentaire des études, est un investissement dont les retours s'étendent sur toute la durée de la vie professionnelle.

## Synthèse : la fiscalité du travail étudiant, un premier terrain d'apprentissage

Le travail étudiant — qu'il prenne la forme de l'apprentissage, du stage, du job à temps partiel, ou de l'activité entrepreneuriale — constitue le premier terrain d'apprentissage de la fiscalité personnelle. C'est dans ces premières expériences de revenus et de déclarations que se forment les réflexes et les connaissances qui seront utiles tout au long de la vie professionnelle.

Traiter ces premières responsabilités fiscales avec sérieux — comprendre les règles applicables, déclarer correctement, conserver les justificatifs, et poser des questions quand la situation n'est pas claire — est l'approche qui minimise les risques et maximise les bénéfices des dispositifs fiscaux disponibles pour les étudiants. La transparence et la diligence sont toujours les meilleures stratégies dans la relation avec l'administration fiscale.
`;

await appendAndPatch('55c0efdd-5e48-46e0-bdd1-f6223e3ba8e2', EXT4_L1);
await appendAndPatch('449fb117-48e3-45da-89af-7a75c6212c80', EXT4_L2);
await appendAndPatch('0242d07b-a407-4d13-9a58-3abfb2aa6728', EXT4_L3);
await appendAndPatch('a824e932-2924-4061-9a58-af1834373a0f', EXT4_L4);
await appendAndPatch('22b05575-9363-4fd1-bdef-96e12749c592', EXT4_L5);
await appendAndPatch('3defd352-b13a-4f5d-97cc-2d4f35e289f6', EXT4_L6);
