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

const ADD_L1 = `
## Les différents types d'équivalences et leurs implications pratiques

Le réseau ENIC-NARIC distingue plusieurs types de reconnaissance qui répondent à des objectifs différents et ouvrent des droits distincts. La reconnaissance académique permet à un diplômé étranger d'accéder à des études supérieures françaises à un niveau équivalent à celui qu'il a atteint dans son pays d'origine. Elle ne confère pas automatiquement le droit de titrer un diplôme français, mais elle établit que le niveau d'études est suffisant pour postuler à telle ou telle formation. La reconnaissance professionnelle, quant à elle, concerne l'accès aux professions réglementées — médecin, avocat, architecte, enseignant — et relève de procédures distinctes gérées par les ordres professionnels et les ministères compétents plutôt que par les universités.

L'attestation de comparabilité délivrée par ENIC-NARIC France (hébergée au CIEP, maintenant rebaptisé France Éducation International) est le document officiel qui établit, à partir d'une analyse détaillée de votre dossier académique, le niveau français comparable à votre diplôme étranger. Cette attestation n'est pas obligatoire pour toute candidature universitaire — les universités peuvent évaluer elles-mêmes les diplômes étrangers — mais elle constitue un document de référence reconnu par l'ensemble des établissements et facilite les démarches, notamment en cas d'hésitation de la commission d'admission sur le niveau d'un diplôme d'un pays dont le système n'est pas bien connu des examinateurs.

## Les accords bilatéraux et multilatéraux de reconnaissance

La France a signé des accords bilatéraux de reconnaissance de diplômes avec plusieurs pays ou groupes de pays, qui simplifient et accélèrent les procédures d'équivalence pour les ressortissants de ces pays. Au niveau européen, le processus de Bologne établit un cadre de reconnaissance mutuelle automatique pour les diplômes des pays signataires — ce qui signifie qu'un étudiant allemand, espagnol ou polonais diplômé d'une licence de trois ans dans son pays est automatiquement reconnu comme titulaire d'un équivalent de la licence française, sans procédure d'équivalence spécifique.

En dehors de l'espace européen, des accords existent notamment avec des pays du Maghreb (Maroc, Tunisie, Algérie) qui partagent historiquement des systèmes universitaires proches du modèle français, et avec certains pays d'Amérique latine. Dans ces cas, les procédures d'équivalence sont simplifiées et plus rapides. Pour les pays avec lesquels aucun accord spécifique n'existe, la procédure standard de comparaison dossier par dossier s'applique et peut prendre plusieurs mois.

## La procédure d'équivalence pour les formations de santé

Les diplômes de santé — médecine, pharmacie, dentisterie, sage-femme, infirmier — sont soumis à des procédures d'équivalence spécifiques, distinctes de la procédure ENIC-NARIC générale, car ces professions sont d'exercice réglementé en France. Pour les médecins diplômés hors Union européenne, la procédure de reconnaissance passe par le Conseil national de l'Ordre des médecins et le ministère de la Santé, qui évaluent la formation reçue pour déterminer si elle est suffisante pour l'exercice en France ou si une formation complémentaire est nécessaire. Cette procédure peut prendre plusieurs années et aboutir à des autorisations d'exercice provisoires (AEP) permettant de travailler sous supervision dans des établissements hospitaliers.

Pour les infirmiers et les aides-soignants, les équivalences relèvent des agences régionales de santé (ARS) et du conseil de l'ordre infirmier. Les procédures sont distinctes pour les ressortissants de l'Union européenne (directive européenne sur la reconnaissance des qualifications professionnelles) et pour ceux des pays tiers, les premières étant nettement plus simples et plus rapides.

## Les délais et la planification de la démarche d'équivalence

La principale erreur des étudiants étrangers en matière d'équivalence de diplômes est de sous-estimer les délais des procédures. La procédure ENIC-NARIC standard prend entre deux et six mois selon la complexité du dossier et la charge de travail du service. Les procédures pour les professions réglementées peuvent prendre plusieurs années. Il est donc impératif d'anticiper ces démarches en les initiant bien avant la date d'inscription souhaitée.

Pour un étudiant souhaitant s'inscrire en master à la rentrée de septembre, la demande d'attestation ENIC-NARIC doit être initiée au plus tard en mars — et idéalement en décembre ou janvier de l'année précédente. Pour les professions réglementées, les démarches doivent commencer dès que la décision d'étudier ou travailler en France est prise, indépendamment des délais d'inscription.

## Préparer un dossier ENIC-NARIC solide

La qualité du dossier soumis à ENIC-NARIC conditionne directement la fluidité et la rapidité de la procédure. Un dossier complet et bien constitué sera traité plus rapidement qu'un dossier incomplet qui fera l'objet de demandes de compléments d'information retardant l'ensemble de la procédure.

Le dossier standard ENIC-NARIC comprend les diplômes originaux avec traductions assermentées, les relevés de notes complets de toutes les années d'études, un curriculum vitae académique détaillant chronologiquement le parcours d'études, et une lettre d'explication précisant l'objet de la demande et l'utilisation envisagée de l'attestation. Des documents complémentaires peuvent être demandés : descriptifs des cours suivis (syllabus), attestations de l'établissement d'origine sur la durée et le contenu de la formation, etc.
`;

const ADD_L2 = `
## L'histoire des droits d'inscription en France : d'une quasi-gratuité à une différenciation accrue

La France a longtemps été considérée comme l'un des pays du monde où les études supérieures publiques étaient les moins chères. Jusqu'en 2019, les frais d'inscription nationaux étaient fixés à un niveau symbolique — 170 euros pour une licence — qui reposait sur une philosophie d'accès quasi-universel à l'enseignement supérieur public, financé principalement par les impôts. Ce modèle de financement reflétait une conception républicaine de l'éducation comme bien public, accessible indépendamment des ressources financières des familles.

La réforme de 2019, mise en place sous la direction du Premier ministre Édouard Philippe, a introduit une différenciation tarifaire entre les étudiants européens et les étudiants extra-européens, en portant les frais d'inscription pour ces derniers à 2 770 euros pour une licence et 3 770 euros pour un master. Cette mesure, justifiée par la nécessité d'augmenter les ressources des universités dans un contexte de contrainte budgétaire, a suscité une vive controverse dans le milieu académique et associatif. Les tenants de la réforme arguaient qu'elle permettrait de financer une meilleure qualité d'accueil des étudiants internationaux et de rendre le système plus viable financièrement. Ses opposants y voyaient une atteinte à l'idéal d'universalisme républicain et un obstacle à l'attractivité internationale de la France pour les étudiants des pays en développement.

## Les catégories d'exonération : qui bénéficie de quelles réductions ?

Le système d'exonération des frais majorés est plus complexe qu'il n'y paraît au premier abord. Les exonérations totales — qui ramènent les frais au niveau national (170 euros pour une licence) — sont accordées à plusieurs catégories d'étudiants bien définies. Les boursiers du gouvernement français, qu'ils soient financés par Campus France via le programme de bourses d'excellence ou par des accords bilatéraux inter-étatiques, bénéficient d'une exonération totale. Les réfugiés statutaires reconnus par l'OFPRA (Office Français de Protection des Réfugiés et Apatrides) et les bénéficiaires de la protection subsidiaire sont également exonérés. Les étudiant bénéficiaires de l'aide sociale à l'enfance ou ayant fait l'objet d'une mesure de tutelle ou curatelle sont aussi exonérés.

Au-delà des exonérations totales automatiques, chaque université dispose d'une enveloppe discrétionnaire d'exonérations partielles ou totales qu'elle peut attribuer selon ses propres critères — généralement des critères sociaux complémentaires (ressources familiales, situation personnelle difficile) ou méritocratiques (excellence du dossier académique pour attirer des étudiants internationaux brillants dans des programmes compétitifs). Ces exonérations discrétionnaires varient considérablement d'un établissement à l'autre et ne sont pas systématiquement publiées — il faut souvent les demander explicitement au service des inscriptions ou au bureau des relations internationales.

## Le coût total de l'inscription : au-delà des droits universitaires

Les droits d'inscription proprement dits ne représentent qu'une partie du coût total de l'inscription administrative. La CVEC (103 euros en 2024-2025) s'y ajoute obligatoirement. La mutuelle santé étudiante, non obligatoire depuis la réforme de la sécurité sociale étudiante en 2019 (les étudiants sont désormais rattachés à la sécurité sociale droit commun), reste fortement recommandée pour couvrir les frais médicaux non remboursés par l'assurance maladie de base — son coût varie de 150 à 400 euros par an selon le niveau de couverture.

Les frais annexes liés à l'inscription comprennent également : les frais de démarches administratives pour la légalisation et la traduction des documents (variables selon le pays d'origine et le nombre de documents), les éventuels frais de la procédure ENIC-NARIC, et les frais de constitution du dossier de visa étudiant. Au total, le coût administratif d'une première inscription en France pour un étudiant extra-européen varie entre 3 000 et 5 000 euros hors coût de la vie, selon qu'il bénéficie ou non d'exonérations.

## Les stratégies pour réduire le coût des droits d'inscription

Plusieurs stratégies permettent à un étudiant extra-européen déterminé de réduire significativement ses frais d'inscription. La première est de rechercher activement les bourses d'études francaises disponibles dans son pays : Campus France, organisme public gérant les bourses du gouvernement français, opère des bureaux dans plus de 30 pays et gère des programmes de bourses permettant d'étudier en France avec des droits d'inscription aux tarifs nationaux.

La seconde stratégie est de cibler des universités ou des programmes qui ont des politiques d'exonération généreuses pour les étudiants internationaux. Certaines universités régionales, dans leur volonté d'attirer des étudiants internationaux pour enrichir leur diversité et leur rayonnement, pratiquent des exonérations plus larges que les établissements parisiens très demandés. Une recherche ciblée sur les politiques tarifaires des différents établissements peut révéler des différences significatives.
`;

const ADD_L3 = `
## Le budget logement en détail : le poste le plus variable

Le logement représente généralement entre 40 et 60% du budget mensuel d'un étudiant en France, et c'est le poste le plus variable selon la ville, le type de logement et les aides perçues. Comprendre les différentes options et leurs coûts réels est une priorité absolue dans la planification budgétaire.

Les résidences universitaires du CROUS (Centre Régional des Œuvres Universitaires et Scolaires) constituent l'option la moins chère pour les étudiants qui y sont admis. Les loyers varient selon le type de chambre (chambre simple rénovée, studio, T1) et la localisation, de 160 euros mensuels pour une chambre simple non rénovée à 450 euros pour un studio rénové en région parisienne. Ces loyers incluent les charges (eau, électricité, chauffage) et les frais d'entretien, ce qui représente un avantage économique significatif. L'accès aux résidences CROUS est soumis à critères sociaux et à l'attribution d'une bourse sur critères sociaux (BCS) pour les prioritaires — les non-boursiers peuvent également postuler mais avec des chances d'attribution plus faibles dans les villes très demandées.

La colocation est une alternative très populaire parmi les étudiants, combinant réduction du coût et partage de la vie quotidienne. Une colocation en appartement de 3 à 5 personnes revient généralement entre 250 et 600 euros par mois tout compris selon la ville — un rapport coût-qualité souvent supérieur aux résidences privées. Les plateformes spécialisées (La Carte des Colocs, Appartager, Facebook Marketplace) permettent de trouver des colocataires et des logements, avec possibilité de cibler des configurations « étudiants internationaux » qui facilitent l'intégration entre pairs de même situation.

Les studios et appartements individuels représentent l'option la plus chère, avec des loyers qui s'échelonnent de 400 euros pour un studio en province à 1 200 euros et plus pour un studio à Paris. À ces loyers s'ajoutent les charges locatives (100 à 200 euros supplémentaires) et le dépôt de garantie (généralement un mois de loyer hors charges). L'aide personnalisée au logement (APL) de la CAF vient partiellement compenser ce coût en réduisant le loyer effectif de 80 à 400 euros selon les ressources du demandeur et le montant du loyer.

## Les aides financières spécifiques aux étudiants

Le système d'aides aux étudiants en France est complexe mais relativement généreux pour ceux qui remplissent les conditions. Les bourses sur critères sociaux (BCS), attribuées par les CROUS sur dossier, représentent de 1 000 à 5 700 euros par an selon l'échelon (de 0bis à 7) et sont exonérées d'impôts. Elles sont accompagnées d'une exonération des droits d'inscription et de la CVEC. Pour y avoir droit, il faut être ressortissant français, d'un pays de l'Union européenne, ou être réfugié statutaire. Les étudiants internationaux extra-européens sans statut particulier n'y sont généralement pas éligibles.

L'APL (Aide Personnalisée au Logement) de la CAF est accessible à une gamme beaucoup plus large d'étudiants, incluant les étrangers en situation régulière titulaires d'un titre de séjour valide. Son montant dépend du loyer, des ressources du demandeur (revenus des 12 derniers mois) et de la localisation du logement. La démarche de demande se fait en ligne sur caf.fr et nécessite de fournir les justificatifs de loyer, de ressources et d'identité. Le traitement de la demande prend généralement 4 à 8 semaines.

## Les restaurants universitaires et le budget alimentaire

L'alimentation est le deuxième poste budgétaire après le logement pour la plupart des étudiants. Les restaurants universitaires du CROUS proposent des repas complets à 3,30 euros pour les étudiants boursiers et à environ 4,50 euros pour les non-boursiers — un tarif fortement subventionné qui correspond à moins d'un quart du coût réel du repas. L'accès aux restaurants universitaires est conditionné à la présentation de la carte étudiant, et certains établissements limitent l'accès aux étudiants inscrits dans les universités partenaires.

Pour les étudiants qui cuisinent eux-mêmes — ce qui est l'option la plus économique — un budget alimentaire mensuel de 150 à 250 euros est réaliste pour se nourrir correctement avec une cuisine à dominante faite maison. Les supermarchés discount (Aldi, Lidl, Action) et les marchés locaux permettent d'optimiser ce budget.
`;

const ADD_L4 = `
## L'architecture institutionnelle de la reconnaissance en France

La reconnaissance des diplômes étrangers en France s'appuie sur une architecture institutionnelle à plusieurs niveaux qu'il est utile de connaître pour identifier les bons interlocuteurs selon sa situation. Au niveau national, ENIC-NARIC France (hébergée à France Éducation International, anciennement CIEP) est le centre officiel de référence pour la comparaison des diplômes étrangers. Elle traite les demandes d'attestations de comparabilité et répond aux questions générales sur les systèmes éducatifs étrangers. Sa compétence est consultative : elle donne un avis sur le niveau comparable d'un diplôme étranger, mais n'a pas de pouvoir décisionnel sur l'admission dans un établissement spécifique.

Au niveau des établissements universitaires, chaque université dispose d'un service des admissions qui est compétent pour évaluer les dossiers des candidats étrangers et décider de leur admission. Ce service peut s'appuyer sur l'avis ENIC-NARIC ou sur sa propre expertise — les grandes universités avec des services Relations Internationales développés ont souvent une expertise interne sur les principaux pays d'origine de leurs étudiants étrangers. C'est ultimement le service des admissions et non ENIC-NARIC qui décide si un candidat est admissible.

## Les cas particuliers dans la reconnaissance des diplômes

Certaines situations méritent une attention particulière dans les démarches de reconnaissance. Les diplômes obtenus dans des pays dont le système universitaire a subi des bouleversements politiques ou institutionnels récents peuvent être plus difficiles à évaluer — c'est le cas de certains pays africains dont les universités ont subi des crises institutionnelles ou de pays dont l'architecture universitaire a été réformée en profondeur. Dans ces situations, ENIC-NARIC peut demander des documents complémentaires ou consulter des experts spécialisés, ce qui allonge les délais.

Les doubles diplômes obtenus dans des programmes partenaires franco-étrangers sont généralement reconnus sans problème, la dimension française de la formation servant de référence. Les diplômes obtenus via des formations à distance ou des universités entièrement en ligne sont soumis à un examen plus scrutateur, car la qualité et la reconnaissance de ces formations varient considérablement selon les pays et les établissements.

## La Validation des Acquis de l'Expérience (VAE) comme alternative

Pour les professionnels qui ont accumulé une expérience significative sans avoir nécessairement les diplômes formels correspondants, ou pour ceux dont les diplômes étrangers ne correspondent pas clairement au niveau requis pour une formation souhaitée, la Validation des Acquis de l'Expérience (VAE) constitue une voie alternative méconnue mais précieuse. La VAE permet d'obtenir tout ou partie d'un diplôme français sur la base de la démonstration des compétences acquises dans l'exercice d'une activité professionnelle, sans passer par le cursus académique normal.

La procédure de VAE est longue et exigeante : elle implique la constitution d'un livret de présentation détaillé des compétences, un entretien avec un jury d'experts, et potentiellement des modules de formation complémentaires si les compétences démontrées ne couvrent pas l'ensemble des attendus du diplôme. Mais pour un professionnel déjà expérimenté dans son domaine dont les diplômes étrangers ne sont pas reconnus au niveau souhaité, elle peut représenter le chemin le plus direct vers la qualification française.

## Les ressources humaines et l'accompagnement personnel

Au-delà des procédures administratives formelles, les démarches de reconnaissance de diplômes gagnent souvent à être accompagnées par des conseillers spécialisés. Le réseau des Centres d'Information et d'Orientation (CIO) du ministère de l'Éducation nationale, les Points d'Accueil Étudiants des universités, les associations d'assistance aux étudiants étrangers et les services de conseil de Campus France proposent des accompagnements personnalisés pour ces démarches complexes.

Ces conseillers peuvent vous aider à identifier les documents manquants dans votre dossier, à rédiger des lettres d'accompagnement efficaces, à comprendre les étapes de la procédure et à prioriser vos démarches selon votre calendrier d'inscription. Pour les étudiants dont le français administratif est encore limité, cet accompagnement humain est particulièrement précieux pour éviter les erreurs et les oublis qui retardent les procédures.
`;

await appendAndPatch('8b527cad-23d4-4e1c-8f92-3f7bcf297de0', ADD_L1);
await appendAndPatch('c0029686-e225-452b-982f-a1cd524ed753', ADD_L2);
await appendAndPatch('ee522c1c-cd2c-4de5-b984-fc77338212a7', ADD_L3);
await appendAndPatch('92a088d5-fe7d-4026-b228-a6fc57ce5d2d', ADD_L4);
