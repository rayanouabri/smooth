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

const EXT_L3 = `
## Le cadre juridique des aménagements : textes et jurisprudence

Les droits des étudiants en matière d'examens s'appuient sur un socle juridique solide qu'il est utile de connaître, même sans être juriste. La loi du 11 février 2005 pour l'égalité des droits et des chances des personnes handicapées constitue le texte de référence pour les aménagements liés au handicap dans l'enseignement supérieur. L'article L. 613-2 du Code de l'éducation pose le principe de la liberté pédagogique des enseignants dans le cadre des modalités de contrôle des connaissances, tout en encadrant l'obligation d'information des étudiants. L'arrêté Licence de 2011 et ses révisions successives organisent le cadre général de la licence (compensations, ECTS, règles de validation) au niveau national, mais laissent aux universités une marge d'autonomie dans leurs règlements internes.

La jurisprudence administrative a, à plusieurs reprises, précisé et renforcé ces droits. Le Conseil d'État a notamment affirmé que le droit à l'information sur les modalités d'évaluation constitue une obligation de service public dont la méconnaissance peut entacher la légalité d'une session d'examens. Des décisions ont également conduit des universités à organiser des sessions de remplacement à la suite d'irrégularités documentées dans l'organisation des épreuves.

Cette architecture juridique confère aux étudiants un ensemble de recours réels face aux dysfonctionnements institutionnels. Connaître succinctement ces fondamentaux permet d'agir de façon éclairée en cas de litige, sans nécessairement recourir immédiatement aux procédures formelles les plus lourdes.

## Les procédures de réclamation : ordre et efficacité

En cas de litige sur une note ou sur les conditions d'un examen, une hiérarchie de recours doit être respectée pour maximiser les chances d'aboutir à une solution satisfaisante.

La première étape est toujours la consultation directe et informelle avec l'enseignant concerné. Dans la grande majorité des cas, les litiges naissent d'incompréhensions mutuelles — l'étudiant ne comprend pas pourquoi certains éléments de sa réponse ont été pénalisés, l'enseignant n'a pas perçu l'intérêt d'une approche originale mais mal présentée. Un entretien courtois et constructif pendant la permanence de l'enseignant résout souvent ces situations.

Si la consultation directe n'aboutit pas ou si le litige concerne une irrégularité procédurale (sujet différent de ce qui était annoncé, durée modifiée sans information préalable, conditions de passation non conformes au règlement), la réclamation doit être portée par écrit auprès du directeur de formation. Le courrier ou le message électronique doit être factuel, précis et référencé (date, matière, nature de l'irrégularité alléguée, références réglementaires).

Si cette voie ne produit pas de réponse satisfaisante dans un délai de deux semaines, le recours au doyen ou au président de composante est l'étape suivante. En dernier ressort, le médiateur de l'université — figure indépendante dont la fonction est d'intervenir dans les conflits entre étudiants et administration — peut être saisi sans procédure formelle et de façon confidentielle.

## La protection contre la discrimination dans l'évaluation

La discrimination dans l'évaluation académique — traitement différentiel injustifié basé sur l'origine nationale, ethnique, la religion, le sexe, l'orientation sexuelle ou tout autre critère protégé par la loi — constitue un délit pénal en France. Le Défenseur des Droits est l'autorité administrative indépendante chargée de recevoir les signalements de discrimination. Des associations étudiantes comme SOS Racisme et la LICRA (Ligue Internationale Contre le Racisme et l'Antisémitisme) offrent des permanences de conseil juridique aux étudiants qui estiment avoir subi des discriminations dans le cadre académique.

Dans la pratique, établir la preuve d'une discrimination dans la notation est difficile en raison de l'anonymat des copies en examens terminaux. Les risques de discrimination sont statistiquement plus élevés dans les formats non anonymes : oraux, dossiers identifiés, exposés en groupe. Les étudiants qui ont le sentiment d'avoir subi un traitement discriminatoire lors d'une évaluation non anonyme doivent documenter les faits (témoignages de camarades présents, notes comparatives avec d'autres étudiants sur un contenu équivalent) avant d'engager quelque procédure que ce soit.

## Les droits liés à la propriété intellectuelle des productions académiques

Un point souvent méconnu concerne la propriété intellectuelle des productions académiques. Un mémoire, une dissertation ou un dossier de recherche produit par un étudiant reste la propriété intellectuelle de son auteur. L'université peut conserver une copie à des fins d'archivage et d'anti-plagiat, mais ne peut pas diffuser, publier ou exploiter cette production sans l'accord exprès de l'auteur. Si votre travail est d'une qualité suffisante pour être publié ou présenté dans un colloque par un enseignant, vous avez le droit d'être crédité comme auteur et de négocier les modalités de cette valorisation.

Cette protection s'applique également aux travaux de groupe : chaque membre d'un groupe qui a contribué de façon substantielle à un dossier collectif est co-auteur du document et peut s'opposer à une utilisation de ce dossier sans son accord.

## Les droits en matière de diplômes et certifications

À la validation de son diplôme, tout diplômé d'une université française a le droit de recevoir gratuitement son diplôme officiel, son relevé de notes final et une attestation de réussite. Ces documents sont produits et délivrés par les services de scolarité de l'université selon un calendrier annoncé en début d'année. Ils sont authentifiés par le cachet officiel de l'université et la signature du président ou du responsable habilité.

Des duplicatas peuvent être demandés en cas de perte ou de destruction du document original, contre paiement d'une modeste redevance administrative. Les diplômes étrangers ont parfois besoin d'une apostille (certification officielle du document pour une validité internationale), délivrée par le rectorat académique de la région où se trouve l'université. Renseignez-vous sur cette procédure si vous prévoyez d'utiliser votre diplôme français dans un pays étranger hors Union Européenne.
`;

const EXT_L4 = `
## Les subtilités de la compensation inter-semestrielle

Dans certaines universités françaises, la compensation ne se limite pas au périmètre d'un seul semestre : elle peut s'étendre à l'ensemble d'une année universitaire (compensation annuelle) ou même, dans des cas plus rares, à l'ensemble d'une année de master. La compensation annuelle fonctionne ainsi : si votre semestre 1 est insuffisant (moyenne en dessous de 10/20) mais que votre semestre 2 est très bon, la moyenne des deux semestres peut être au-dessus de 10/20 et valider votre année. Les règles exactes varient fortement selon les établissements et les filières — certaines admettent la compensation annuelle librement, d'autres l'encadrent par des seuils planchers.

L'existence ou l'absence de compensation annuelle peut avoir des conséquences très importantes sur la stratégie de l'étudiant. Dans un système avec compensation annuelle, un semestre 1 difficile peut être rattrapé par un excellent semestre 2 — ce qui donne à l'étudiant un droit à l'erreur initial et un filet de sécurité structurel. Dans un système sans compensation annuelle, chaque semestre est un enjeu autonome dont l'insuffisance entraîne automatiquement un passage en session de rattrapage ou un redoublement.

La méta-connaissance de ces règles — savoir ce qui s'applique précisément dans votre établissement et votre filière — est un avantage compétitif que peu d'étudiants exploitent. Lisez le règlement des études de votre composante, ou posez la question directement au secrétariat pédagogique dès les premières semaines de l'année.

## Le rôle des ECTS dans les décisions de jury

Dans la délibération de jury, la validation des crédits ECTS joue un rôle central. Le jury ne valide pas simplement des «matières» : il valide des blocs de compétences représentés par des unités d'enseignement auxquelles sont associés des crédits ECTS. La validation d'une UE, qu'elle soit obtenue directement ou par compensation, entraîne le transfert définitif des crédits ECTS correspondants à l'étudiant.

En pratique, le jury peut décider de valider des UE que l'étudiant n'a pas formellement réussies au sens strict (note supérieure à 10/20) lorsque la règle de compensation le permet. Ces décisions sont collégiales et reposent sur une application rigoureuse du règlement des études, mais aussi sur une appréciation qualitative d'ensemble que les enseignants exercent avec une certaine discrétion.

Préparer un dossier de jury — documenter ses circonstances particulières du semestre (problème de santé, deuil, difficultés d'adaptation documentées) pour les porter à la connaissance du jury lors de la délibération — peut influencer favorablement ces décisions à la marge. Ce dossier n'est pas un acte de plaidoirie mais une information contextuelle légitime que le jury a le droit de prendre en compte dans l'exercice de son pouvoir d'appréciation.

## Cas pratiques : exemples de situations de jury

Pour rendre concrets les mécanismes de compensation et de rattrapage, quelques cas pratiques illustrent des situations courantes.

Cas 1 : Lina, étudiante en L1 de droit, obtient les résultats suivants au semestre 1 : UE1 (droit constitutionnel, coeff. 3) : 12/20 ; UE2 (introduction au droit, coeff. 4) : 8/20 ; UE3 (économie, coeff. 2) : 14/20 ; UE4 (histoire du droit, coeff. 3) : 11/20. Sa moyenne pondérée est (12×3 + 8×4 + 14×2 + 11×3) / (3+4+2+3) = (36+32+28+33)/12 = 129/12 = 10,75/20. Le jury applique la compensation : Lina valide son semestre 1 avec une moyenne de 10,75, malgré le 8/20 en introduction au droit. Elle obtient 30 crédits ECTS et passe au semestre 2.

Cas 2 : Mathieu, étudiant en L2 de sociologie, obtient une moyenne de 9,8/20 en session 1 avec un 4/20 dans une UE (note inférieure au plancher de 7/20 appliqué par son université). Malgré une moyenne proche de 10, il ne peut pas compenser en raison de la note plancher. Il est convoqué en session 2 pour l'UE qu'il n'a pas validée. Il obtient 11/20 en session 2, ce qui lui permet de valider l'UE et de compenser le reste avec ses autres notes.

Ces exemples illustrent l'importance de connaître avec précision les règles de son établissement pour anticiper les scénarios possibles et planifier ses révisions de session 2 de façon ciblée.

## La gestion administrative de la session 2

Du point de vue pratique et administratif, la session 2 implique des démarches spécifiques. Dans la plupart des universités, l'inscription à la session 2 n'est pas automatique : l'étudiant doit confirmer sa participation auprès du secrétariat pédagogique dans un délai précis après la publication des résultats de session 1. Ce délai est généralement court (une à deux semaines) et son non-respect peut entraîner la perte du droit de se présenter.

Il est aussi nécessaire d'organiser pratiquement la présence en session 2. Pour les étudiants qui sont repartis dans leur pays d'origine entre les deux sessions, la session 2 de septembre implique de revenir en France ou de vérifier si des dispositions exceptionnelles (examen à distance, commission de dérogation) sont possibles dans leur établissement. Cette question doit être posée au secrétariat pédagogique le plus tôt possible, bien avant de prendre des billets d'avion.

## Impact du rattrapage sur le titre de séjour

Pour les étudiants étrangers titulaires d'un titre de séjour «étudiant», le renouvellement annuel de ce titre suppose notamment de justifier d'une progression satisfaisante dans ses études. Un semestre raté suivi d'un semestre 2 validé, ou d'une session de rattrapage réussie, constitue une progression qu'il est possible de documenter pour le renouvellement du titre.

En revanche, une année entière sans aucune progression — aucune UE validée, aucun crédit ECTS obtenu — peut fragiliser le dossier de renouvellement du titre de séjour. La préfecture appréciera in concreto la situation : un étudiant qui peut documenter des circonstances exceptionnelles (problème de santé avec certificats médicaux, deuil familial, difficultés administratives) et un projet académique crédible pour l'année suivante a des arguments solides pour obtenir le renouvellement malgré un parcours difficile.

La communication proactive avec la préfecture — ne pas attendre la date limite de renouvellement pour déposer le dossier, préparer des justificatifs clairs — est toujours préférable à une approche passive qui laisse la situation se dégrader sans anticipation.
`;

await appendAndPatch('483aa914-73d9-4253-8f78-96569a49b8d9', EXT_L3);
await appendAndPatch('f3af208d-e414-4e9f-a538-19279d6ca4c3', EXT_L4);
