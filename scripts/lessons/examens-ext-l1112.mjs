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

const EXT_L11 = `
## Les limites et les critiques du système ECTS

Si le système ECTS constitue une avancée indéniable dans la mobilité académique européenne, il fait l'objet de critiques légitimes qui méritent d'être connues pour en comprendre les limites pratiques. Le premier reproche concerne l'équivalence réelle des contenus : deux UE valorisées à 6 crédits ECTS dans deux universités différentes peuvent couvrir des contenus, des niveaux d'exigence et des compétences très différents. Le nombre de crédits attribué à une UE reflète son volume de travail estimé, pas la qualité ou la comparabilité des contenus avec des UE équivalentes dans d'autres établissements.

Cette limitation signifie que la reconnaissance automatique des crédits ECTS d'une université à une autre n'est jamais garantie même dans l'espace européen. En pratique, les jurys de validation des acquis dans les universités réceptrices (lors de transferts ou de mobilités entrantes) examinent chaque UE individuellement pour déterminer si elle est équivalente à une UE de leur propre formation. Des crédits peuvent être reconnus, partiellement reconnus ou non reconnus selon le jugement de ces jurys. Il est donc important d'anticiper cette procédure de validation si vous planifiez une mobilité internationale en cours d'études.

Le second reproche concerne la pression à la «course aux crédits» : dans un système où chaque UE vaut un nombre défini de crédits, des étudiants peuvent être tentés de choisir leurs UE optionnelles en maximisant le nombre de crédits facilement acquérables plutôt qu'en optimisant leur formation intellectuelle et professionnelle. Cette logique utilitaire, qui substitue une logique de maximisation des crédits à une logique d'apprentissage authentique, est une dérive contre laquelle les équipes pédagogiques doivent activement lutter.

## L'impact du système ECTS sur la mobilité internationale

La valeur principale du système ECTS s'exprime dans le contexte des programmes de mobilité internationale, notamment Erasmus+. Ce programme européen finance des séjours d'études de 3 à 12 mois dans une université partenaire étrangère, avec reconnaissance des crédits ECTS obtenus à l'étranger dans la formation d'origine. Ce mécanisme de reconnaissance est au cœur du dispositif : sans la portabilité des crédits ECTS, une mobilité Erasmus constituerait une interruption des études et non leur continuation dans un autre pays.

Pour bénéficier de la reconnaissance des crédits Erasmus, l'étudiant doit établir avant son départ un contrat pédagogique (Learning Agreement) signé avec les deux universités (d'origine et d'accueil), qui détaille précisément les UE qu'il suivra à l'étranger et les UE de son cursus d'origine auxquelles elles seront reconnues équivalentes. Ce document contractuel protège l'étudiant : si les UE prévues sont suivies et validées à l'étranger, leur reconnaissance dans la formation d'origine est engagée.

La préparation soigneuse du Learning Agreement, avec le soutien du coordinateur Erasmus de votre composante et du bureau des relations internationales, est une étape cruciale qui détermine la fluidité de la reconnaissance académique au retour. Des approximations ou des oublis dans ce document peuvent entraîner des discussions difficiles sur la reconnaissance à votre retour.

## Les certifications complémentaires qui valorisent le parcours

Au-delà du diplôme universitaire principal, plusieurs certifications complémentaires enrichissent le dossier académique et professionnel et sont directement liés à des compétences valorisées sur le marché du travail.

Le C2i (Certificat Informatique et Internet) était une certification universitaire française des compétences numériques, désormais en cours de transformation vers le cadre européen DigComp. Des formations continues aux compétences numériques certifiantes sont désormais proposées par de nombreuses universités dans le cadre de la formation tout au long de la vie.

Le CLES (Certificat de Compétences en Langues de l'Enseignement Supérieur) est une certification nationale des compétences en langues étrangères pouvant être intégré dans certains diplômes universitaires. Équivalent du TOEIC dans un cadre académique non commercial, il atteste d'un niveau CECRL (A2 à C1) reconnu par les employeurs et les établissements d'enseignement supérieur.

Le PIX est la nouvelle certification officielle française des compétences numériques, remplaçant progressivement le C2i dans les cursus universitaires. Il couvre des compétences allant de la navigation web à la protection des données en passant par la programmation de base, et peut être valorisé dans les dossiers de candidature professionnels.

## Les implications fiscales et sociales de la progression académique

Un aspect peu abordé dans les guides académiques mais important pour les étudiants qui travaillent en parallèle de leurs études concerne les implications de la validation d'un diplôme sur le statut fiscal et social. En France, un étudiant qui obtient un diplôme de niveau bac+2 (BTS, BUT, DEUG) peut continuer à être considéré comme étudiant à charge dans le foyer fiscal de ses parents jusqu'à un certain âge, avec des implications sur les allocations familiales, la couverture maladie et les droits à la mutuelle étudiante.

Pour les étudiants étrangers, l'obtention d'un diplôme peut également avoir des implications sur leur titre de séjour : un étudiant qui obtient sa licence peut solliciter l'Autorisation Provisoire de Séjour (APS) — valable un an, non renouvelable — qui lui permet de chercher un emploi qualifié en France sans avoir à repasser par une demande de visa de travail. Voir à ce sujet la leçon dédiée à l'APS dans le cours sur le VISA étudiant.

## Construire un dossier académique cohérent pour les candidatures de master

La candidature à un master sélectif est une étape importante du parcours universitaire où la lecture croisée du relevé de notes, des lettres de recommandation et du projet de recherche ou professionnel joue un rôle déterminant. Le relevé de notes n'est pas lu seul mais contextualisé dans un dossier qui doit raconter une histoire cohérente.

Quelques principes pour construire un dossier solide : la cohérence entre les UE dans lesquelles vous avez les meilleures notes et votre projet (si vous candidatez à un master de sociologie quantitative, vos bonnes notes en méthodes quantitatives et en statistiques doivent ressortir clairement) ; la progression visible d'un semestre à l'autre (une trajectoire ascendante est valorisée même si le niveau absolu initial était modeste) ; et l'authenticité du projet de recherche ou professionnel, qui doit refléter une réflexion réelle sur vos motivations et vos perspectives, pas une formule standard copié-collée.
`;

const EXT_L12 = `
## La réalité des distributions de notes par discipline et par université

Des différences marquées existent dans les distributions des notes selon les disciplines et selon les universités, qui reflètent des cultures évaluatives distinctes. Dans les universités parisiennes de prestige (Paris 1 Panthéon-Sorbonne, Sciences Po Paris, École Normale Supérieure), les distributions de notes tendent à être plus resserrées et plus basses que dans les universités de province ou dans les universités professionnalisantes. Un 12/20 obtenu en droit à Paris 1 représente objectivement une performance différente d'un 12/20 obtenu dans une formation equivalent dans un autre établissement.

Cette réalité pose un problème d'équité lors des procédures de sélection nationales (concours, masters) qui agrègent des candidatures provenant d'établissements avec des cultures notionnelles différentes. Les jurys de sélection expérimentés en sont conscients et essaient de contextualiser les notes dans le profil global du candidat — établissement d'origine, réputation de la filière, cohérence du parcours — plutôt que de les lire comme des grandeurs absolument comparables.

Pour les étudiants qui candidatent à des masters ou à des concours, connaître la réputation de leur établissement et de leur filière dans leur domaine est une information utile pour calibrer leurs ambitions d'accès à des formations très sélectives et pour préparer leurs dossiers de candidature avec la bonne dosage de modestie et de confiance.

## L'adaptation du regard sur les notes avec l'expérience

La façon dont les étudiants perçoivent leurs notes évolue généralement de façon positive avec l'expérience. Les premières notes d'un étudiant international — souvent en dessous de ses attentes et en dessous de ce qu'il obtenait dans son système d'origine — peuvent générer un choc émotionnel et une remise en question de ses capacités. Avec le temps, à mesure que la maîtrise méthodologique s'améliore et que les résultats progressent, le regard sur les notes devient plus nuancé et moins chargé émotionnellement.

Cette évolution est une forme de maturité académique en soi. L'étudiant qui a appris à lire ses notes comme un feedback informatif sur sa progression plutôt que comme un jugement définitif sur sa valeur personnelle a développé une relation saine à l'évaluation qui lui permettra de s'améliorer de façon continue tout au long de son parcours universitaire et professionnel.

## Les biais dans l'évaluation : recherche et enjeux contemporains

La question des biais dans la notation académique fait l'objet d'une littérature de recherche en pédagogie et en psychologie sociale de plus en plus fournie. Des études ont documenté l'existence de biais liés au genre (les filles obtenant en moyenne de meilleures notes que des garçons à compétences égales dans certaines disciplines et certains contextes), au statut socio-économique (les étudiants de milieux favorisés obtenant de meilleures notes en production orale, possiblement en raison d'un capital culturel différent) et à l'origine (des études sur des corrections à identité variable montrent une légère tendance à noter moins bien des copies dont le nom suggère une origine étrangère dans des épreuves nominatives).

Ces biais ne remettent pas en cause la valeur globale du système d'évaluation universitaire français, mais ils invitent à la vigilance et à l'amélioration continue des pratiques évaluatives. L'anonymat des copies, les grilles d'évaluation critériées, la double correction et les délibérations collégiales sont des garde-fous institutionnels qui réduisent (sans éliminer) ces biais. La sensibilisation des enseignants à ces travaux de recherche est un enjeu pédagogique que les universités commencent à intégrer dans leurs formations à l'enseignement.

Pour les étudiants, connaître l'existence de ces biais n'est pas une invitation au défaitisme ou au victimisme. C'est une information contextuelle qui explique pourquoi certaines trajectoires sont plus difficiles que d'autres dans certains contextes, et qui renforce la légitimité des politiques d'égalité des chances dans l'enseignement supérieur.

## Les évolutions récentes du système d'évaluation universitaire

Le système d'évaluation universitaire français est en évolution constante sous l'influence de plusieurs forces : les réformes pédagogiques nationales successives (réforme Licence 2018, loi ORE, programme «Bienvenue en France»), l'influence des modèles étrangers (en particulier anglosaxons) dans les universités de rang mondial, et les retours d'expérience des praticiens de l'enseignement qui cherchent à améliorer la pertinence et l'équité des évaluations.

Des tendances émergentes incluent la montée du portefeuille de compétences (qui vise à évaluer les compétences mobilisées plutôt que les seules connaissances disciplinaires), le développement de l'évaluation par les pairs dans certains cours (les étudiants évaluent mutuellement leurs productions selon une grille critériée co-construite), et l'expérimentation de l'évaluation formative sans note (feedback fréquent sur les productions sans attribuer de note chiffrée, pour réduire l'anxiété liée à la notation et favoriser l'apprentissage intrinsèque).

Ces évolutions ne transforment pas radicalement le système dans l'immédiat, mais signalent une réflexion pédagogique vivante sur les meilleures façons d'évaluer les apprentissages universitaires dans un monde académique en mutation. Les étudiants qui suivent aujourd'hui leurs formations à l'université française participent, sans nécessairement le réaliser, à un moment charnière de l'histoire de l'enseignement supérieur français.

## Conclusion : la note comme moyen, le savoir comme fin

La note est un indicateur, pas une finalité. L'objectif de la formation universitaire est le développement d'une expertise disciplinaire, d'une capacité à penser de façon rigoureuse et nuancée, et d'une aptitude à produire des analyses et des solutions de valeur dans un champ professionnel donné. La note est un signal approximatif qui permet de mesurer la progression vers cette finalité, mais elle ne capture qu'imparfaitement la richesse et la complexité des apprentissages réels.

Les étudiants les plus accomplis intellectuellement ne sont pas toujours ceux qui ont les meilleures notes — et les meilleures notes ne garantissent pas une excellence professionnelle ou intellectuelle future. Ce paradoxe invite à maintenir une relation à l'évaluation à la fois sérieuse (travailler pour progresser, utiliser les notes comme feedback) et perspectivée (ne pas réduire l'expérience universitaire à la maximisation des points).

Construire une formation solide et cohérente, développer des compétences réelles, nouer des relations académiques et professionnelles durables, et cultiver une curiosité intellectuelle authentique pour sa discipline : tels sont les investissements qui déterminent la valeur à long terme d'un parcours universitaire, bien au-delà des chiffres qui apparaissent sur un relevé de notes.
`;

await appendAndPatch('e26cf05b-0668-4734-9b08-4ebb4b4742fa', EXT_L11);
await appendAndPatch('0bd01774-41f3-49c8-8d69-d325de793f99', EXT_L12);
