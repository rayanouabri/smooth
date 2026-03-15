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

// ─── LEÇON 1 ─────────────────────────────────────────────────────────────────
const L1 = `# Trouver et déclarer un médecin traitant avec Doctolib

Arriver en France pour ses études, c'est naviguer simultanément dans un appartement inconnu, un campus souvent immense et un système de santé dont les règles ne ressemblent à rien de connu. Parmi les premières démarches administratives qui conditionnent votre accès aux soins et au remboursement de vos frais médicaux, la déclaration d'un médecin traitant occupe une place centrale. Cette obligation légale, instaurée par la réforme du 13 août 2004 portant sur l'assurance maladie, détermine non seulement combien vous rembourse la Sécurité sociale, mais aussi la fluidité de votre accès à des spécialistes et à des examens spécialisés. Doctolib, la plateforme de prise de rendez-vous médicaux la plus utilisée en France avec plus de soixante millions d'utilisateurs actifs, simplifie considérablement cette recherche qui, autrement, peut s'avérer épuisante et décourageante. Cette leçon vous accompagne pas à pas dans la compréhension du système, la recherche du bon médecin, l'analyse des profils disponibles sur Doctolib et la finalisation de la démarche administrative auprès de la CPAM.

## La réforme de 2004 et la naissance du médecin traitant

Pour comprendre pourquoi la déclaration d'un médecin traitant est obligatoire et quelles conséquences concrètes elle a sur vos remboursements, il faut remonter à l'été 2004. La France faisait alors face à un déficit structurel de l'Assurance maladie qui atteignait des niveaux alarmants. Les dépenses de santé augmentaient chaque année bien plus vite que les cotisations, et le système de soins était caractérisé par une grande fragmentation : les patients consultaient directement des spécialistes sans passer par aucun médecin coordinateur, ce qui entraînait des doublons d'examens, des prescriptions contradictoires et une absence totale de suivi longitudinal.

La loi du 13 août 2004 a donc créé le concept de **parcours de soins coordonné**. L'idée centrale est simple : chaque assuré social doit désigner un médecin généraliste comme «médecin traitant», c'est-à-dire son interlocuteur médical de premier recours. Ce médecin connaît le dossier complet du patient, coordonne les consultations spécialisées et assure la continuité des soins dans le temps. En contrepartie, l'Assurance maladie offre des taux de remboursement nettement plus favorables à ceux qui respectent ce parcours. À l'inverse, les patients qui consultent directement des spécialistes sans prescription de leur médecin traitant sont pénalisés financièrement.

Cette réforme a profondément transformé le paysage médical français. En vingt ans, la quasi-totalité des médecins généralistes ont adapté leur pratique à ce rôle de pivot, et le système d'information médicale a évolué avec la généralisation du Dossier Médical Partagé (DMP). Pour les étudiants étrangers qui arrivent en France, cette logique est souvent déroutante : dans de nombreux pays, on va directement chez le spécialiste selon le problème rencontré. En France, sauf urgences et quelques exceptions (gynécologues, ophtalmologistes, psychiatres pour les moins de 26 ans, dentistes, sages-femmes), le passage par le médecin traitant est la norme financièrement avantageuse.

L'impact est considérable sur le budget d'un étudiant. Avec un médecin traitant déclaré en secteur 1, une consultation de 26,50 € sera remboursée à 70 % par l'Assurance maladie, soit 18,55 €, et la part complémentaire sera prise en charge par votre mutuelle étudiante si vous en avez une. Sans médecin traitant, une consultation auprès d'un spécialiste consulté directement sera remboursée à un taux inférieur avec application d'une majoration du ticket modérateur, coûtant potentiellement deux à trois fois plus cher de votre poche.

## Les enjeux financiers concrets pour les étudiants

Les chiffres parlent d'eux-mêmes quand on compare deux scénarios pour une année universitaire classique. Imaginons un étudiant qui consulte son médecin traitant quatre fois, est envoyé deux fois chez un spécialiste, passe une prise de sang et effectue une radio. Dans le parcours de soins coordonné, chaque consultation de généraliste à 26,50 € est remboursée à 70 %, la participation forfaitaire d'un euro reste à la charge du patient, et les consultations spécialisées avec ordonnance bénéficient d'un taux majoré. Le reste à charge annuel total pour cet étudiant couvert par une mutuelle complémentaire sera de quelques euros symboliques.

Pour ce même étudiant qui n'aurait pas de médecin traitant et consulterait directement des spécialistes, les règles changent radicalement. Le taux de remboursement de base reste applicable mais sans les majorations liées au respect du parcours coordonné. Sur certaines spécialités, le dépassement d'honoraires en secteur 2 ou 3 s'ajoute sans aucune limitation. Une consultation de dermatologue à 80 € avec un dépassement de 30 € sera remboursée sur la base tarifaire de 30 €, soit 21 € remboursés et 59 € à votre charge. Cette différence, multipliée sur l'année, peut représenter plusieurs centaines d'euros de dépenses supplémentaires pour un étudiant dont le budget est déjà serré.

La Complémentaire Santé Solidaire (CSS), dont peuvent bénéficier les étudiants boursiers sous conditions de ressources, renforce encore les avantages du parcours coordonné en prenant en charge l'intégralité du ticket modérateur chez un médecin traitant. Pour les étudiants couverts par la CSS, ne pas avoir de médecin traitant signifie se priver d'une couverture potentiellement totale des frais de soins courants. La démarche de déclaration prend quelques minutes mais ses effets financiers s'étalent sur toute l'année scolaire et au-delà.

Il existe également un impact indirect sur l'accès aux soins. Un médecin qui vous connaît comme patient déclaré priorisera vos demandes d'urgence relative, adaptera ses ordonnances à votre situation personnelle, et vous guidera efficacement vers les bons spécialistes en tenant compte de votre dossier médical complet. Cette dimension de continuité et de confiance est précieuse pour des étudiants qui font face à des périodes de stress intense (examens, changement de pays, solitude) où les problèmes de santé mentale et physique peuvent surgir rapidement.

## Pourquoi cette démarche est souvent négligée par les étudiants étrangers

Les enquêtes menées auprès des étudiants internationaux révèlent systématiquement que beaucoup ignorent l'existence de l'obligation de déclarer un médecin traitant pendant les premières semaines, voire les premiers mois de leur séjour. Plusieurs facteurs expliquent ce retard. D'abord, la complexité perçue du système de santé français : les sigles (CPAM, AME, CVEC, CSS, DMP) forment un alphabet bureaucratique opaque pour quelqu'un qui arrive d'un système de santé aux structures totalement différentes. Les universités et grandes écoles transmettent parfois ces informations lors des journées d'intégration, mais dans le flot des démarches administratives simultanées (inscription pédagogique, ouverture de compte bancaire, recherche de logement, obtention du titre de séjour), cet aspect est facilement oublié ou déprioritisé.

Ensuite, de nombreux étudiants étrangers arrivent en bonne santé et pensent ne pas avoir besoin de consulter un médecin dans l'immédiat. Cette logique est compréhensible mais contre-productive : le moment où on recherche un médecin traitant en urgence (après une fièvre persistante, un accident, une chute de moral intense) est le pire moment pour commencer la démarche, car les agendas des médecins qui acceptent de nouveaux patients peuvent être complets plusieurs semaines à l'avance. Trouver un médecin traitant dès les premières semaines, même si on est en bonne santé, c'est investir dans une sécurité future.

La barrière de la langue joue aussi un rôle. Même des étudiants anglophones qui parlent correctement français en contexte académique peuvent ressentir une appréhension face à une consultation médicale dans une autre langue que leur langue maternelle. Doctolib facilite partiellement ce problème en permettant de filtrer les médecins par langues parlées, et certains praticiens annoncent clairement leur capacité à consulter en anglais, espagnol, arabe ou d'autres langues dans leur profil.

## Utiliser Doctolib pour trouver un médecin acceptant de nouveaux patients

La plateforme Doctolib, accessible depuis doctolib.fr ou l'application mobile disponible sur iOS et Android, centralise les agendas de plus de 300 000 praticiens en France. Pour trouver un médecin généraliste proche de votre lieu de résidence ou d'études, la procédure est directe mais nécessite quelques précisions pour maximiser l'efficacité de votre recherche.

Commencez par taper "médecin généraliste" dans la barre de recherche principale, puis indiquez votre ville ou code postal dans le champ de localisation. Doctolib affiche immédiatement les médecins disponibles autour de vous avec leur distance, leurs horaires et les créneaux disponibles. La carte interactive vous permet de visualiser la concentration des praticiens dans votre quartier et d'affiner la recherche selon vos contraintes géographiques (proximité de l'université, du RER, du métro).

Le filtre le plus important pour votre démarche est celui intitulé **"Médecin traitant"** ou **"Accepte de nouveaux patients"**. Activez-le systématiquement : il élimine d'emblée les médecins dont l'agenda est fermé aux nouveaux patients, ce qui vous évite de perdre du temps à explorer des profils qui ne correspondent pas à votre situation. Dans les grandes villes universitaires (Paris, Lyon, Bordeaux, Toulouse, Lille, Strasbourg), cette option peut considérablement réduire le nombre de résultats, mais elle vous garantit des opportunités réelles.

Le filtre de secteur conventionnel est également précieux. Le secteur 1 est le plus favorable financièrement car les tarifs sont encadrés et le remboursement est maximal. Le secteur 2 permet des dépassements d'honoraires mais reste partiellement remboursable. Le secteur 3 (non conventionné) offre peu de garanties de remboursement. Pour un étudiant avec un budget limité, cibler les médecins en secteur 1 est la stratégie la plus raisonnable.

Le filtre de langues parlées est souvent sous-utilisé par les étudiants internationaux. De nombreux médecins généralistes urbains sont capables de consulter en anglais, et certains pratiquent l'arabe, le portugais, le mandarin ou d'autres langues. Renseigner ce filtre peut transformer une consultation médicale d'une expérience stressante en une interaction fluide et rassurante.

## Analyser un profil de médecin sur Doctolib

Une fois que Doctolib vous a proposé une liste de médecins disponibles, la qualité de votre choix dépend largement de votre capacité à lire et interpréter les informations du profil de manière critique. Chaque profil Doctolib contient une série d'informations standardisées mais la profondeur varie selon le soin apporté par le médecin à la rédaction de sa fiche.

La photo de cabinet et du praticien, bien que superficielle en apparence, donne des informations concrètes sur l'environnement de soins. Un cabinet moderne avec une salle d'attente visible indique une structure bien organisée. La biography professionnelle précise le diplôme, le lieu d'obtention, les formations complémentaires et parfois des domaines d'intérêt particulier (médecine sportive, diabétologie, pédiatrie adulte, médecine des voyages). Pour un étudiant sportif, un médecin déclarant un intérêt pour la médecine sportive sera un meilleur choix qu'un généraliste sans spécificité.

Les avis des patients sont affichés sur Doctolib. Contrairement à d'autres plateformes, seuls les patients ayant effectivement consulté via Doctolib peuvent laisser un avis, ce qui réduit les faux témoignages. Lisez les commentaires en portant attention aux aspects pratiques : la ponctualité, le temps consacré à chaque consultation, la qualité de l'écoute, la facilité à obtenir un rendez-vous en urgence. Une note moyenne élevée avec de nombreux avis est plus fiable qu'une note parfaite basée sur peu de retours.

L'indicateur "Médecin traitant : Oui/Non" est fondamental et doit absolument figurer dans vos critères. Certains médecins sont disponibles pour des consultations ponctuelles mais ne prennent plus de nouveaux patients comme médecin traitant. Cette distinction n'est pas toujours clairement visible sur la page de résultats mais apparaît dans le détail du profil. Prenez toujours le temps de vérifier cet indicateur avant de prendre rendez-vous.

Les horaires d'ouverture méritent aussi votre attention. Un médecin qui consulte uniquement en semaine de 8h à 17h est difficilement compatible avec un emploi du temps universitaire chargé. Cherchez des praticiens ayant des créneaux en soirée après 18h ou le samedi matin, qui correspondent mieux aux contraintes des étudiants.

## Comprendre les secteurs conventionnels en détail

Le secteur conventionnel d'un médecin est l'un des critères les plus importants que les patients ignorent souvent, et son incompréhension mène à de mauvaises surprises à la sortie du cabinet médical. En France, les médecins sont regroupés en trois secteurs définis par leur adhésion aux conventions médicales négociées entre les syndicats médicaux et l'Assurance maladie.

Le **secteur 1** (dit «médecins conventionnés sans dépassement») regroupe les médecins qui ont accepté de pratiquer les tarifs officiellement fixés par l'Assurance maladie. Pour une consultation de généraliste, le tarif de secteur 1 est actuellement de 26,50 €. L'Assurance maladie rembourse 70 % de ce montant, soit 18,55 €, et le ticket modérateur de 30 % (7,95 €) est à la charge du patient ou de sa mutuelle. La participation forfaitaire de 1 € par consultation reste systématiquement à la charge du patient et n'est jamais remboursée. En pratique, un étudiant avec la CSS ou une mutuelle complémentaire standard n'aura pratiquement rien à débourser chez un médecin secteur 1.

Le **secteur 2** (dit «médecins à honoraires différents») regroupe les médecins qui peuvent pratiquer des dépassements d'honoraires au-delà du tarif conventionnel, dans la limite d'une «pratique tarifaire maîtrisée» (OPTAM). Ces médecins ont généralement une spécialisation reconnue, une formation complémentaire ou exercent dans des zones où la demande est forte. Une consultation de généraliste secteur 2 peut varier entre 30 et 60 € selon les cas. L'Assurance maladie rembourse toujours sur la base du tarif conventionnel (26,50 €), ce qui signifie que le dépassement est intégralement à votre charge, sauf si votre mutuelle prend en charge les dépassements (ce que font la plupart des contrats avec une bonne garantie «honoraires»).

Le **secteur 3** (médecins non conventionnés) représente une minorité de praticiens qui ont choisi de ne pas adhérer aux conventions. Leurs honoraires sont totalement libres et le remboursement par l'Assurance maladie est extrêmement faible (symbole d'un tarif d'autorité fixé à 0,61 € pour une consultation). Ces médecins sont quasi inexistants en médecine générale et ne concernent pratiquement pas les étudiants pour le choix d'un médecin traitant.

Pour comparer budgétairement l'impact annuel d'un médecin secteur 1 versus secteur 2 avec dépassements : en supposant 6 consultations de généraliste par an, un étudiant avec une mutuelle couvrant les dépassements ne verra guère de différence. Mais pour un étudiant sans mutuelle complémentaire ou avec une couverture basique, la différence peut atteindre 100 à 200 € supplémentaires par an en secteur 2.

## La procédure officielle de déclaration auprès de la CPAM

Avoir trouvé le bon médecin sur Doctolib n'est que la première moitié du travail. La déclaration officielle d'un médecin traitant nécessite une démarche administrative distincte qui valide votre choix auprès de la CPAM et active le taux de remboursement majoré.

La méthode la plus courante est de signer le formulaire Cerfa n°12485*04 lors de votre première consultation. Ce formulaire, intitulé «Déclaration de choix du médecin traitant», est disponible dans tous les cabinets médicaux et peut également être téléchargé sur ameli.fr. Le médecin signe une partie du formulaire (sa section professionnelle avec son numéro RPPS et son cachet), et vous complétez votre partie (numéro de Sécurité sociale, coordonnées, signature). Vous conservez un exemplaire et le médecin envoie la déclaration à la CPAM, ou vous l'envoyez vous-même.

La méthode numérique via ameli.fr est plus rapide et recommandée pour les étudiants à l'aise avec les démarches en ligne. Connectez-vous à votre espace Ameli (si vous n'avez pas encore créé votre compte, c'est le moment), cliquez sur «Mes démarches», puis «Déclarer un médecin traitant». Entrez le nom et le numéro RPPS du médecin (disponible sur son profil Doctolib ou sur les pages profil des médecins référencés sur ameli.fr) et validez. La déclaration est prise en compte sous 24 à 48 heures.

Une troisième option consiste à envoyer le formulaire Cerfa par courrier postal à votre CPAM de rattachement. Bien que moins pratique, cette option reste valide pour les personnes qui n'ont pas encore d'espace numérique Ameli actif. L'adresse de votre CPAM figure sur votre attestation de droits ou sur le site ameli.fr en sélectionnant votre département.

Une fois la déclaration enregistrée, vous pouvez vérifier son effectivité dans votre espace Ameli sous «Mes infos / Mon médecin traitant». La validation est généralement rapide mais peut prendre jusqu'à une semaine dans les périodes de forte affluence administrative (rentrée universitaire en septembre-octobre). Si vous avez une consultation urgente avant la confirmation, le médecin peut tout de même vous rembourser au taux normal en attendant que la déclaration soit effective.

## Stratégies pour trouver un médecin quand les agendas sont saturés

Dans les grandes métropoles universitaires, la pénurie de médecins généralistes est une réalité documentée. Paris, Lyon, Bordeaux et d'autres grandes villes font face à une densité insuffisante de généralistes par rapport à leur population, aggravée par les départs en retraite de nombreux praticiens qui ne sont pas remplacés. Cette situation peut rendre la recherche d'un médecin traitant décourageante, surtout pour un étudiant qui arrive sans connaissance des pratiques locales.

La première stratégie est d'élargir le périmètre géographique de recherche au-delà du strict quartier de votre logement. Un médecin accessible en 20-30 minutes en transports en commun reste pratique pour des rendez-vous programmés, même si ce n'est pas l'idéal pour une visite d'urgence. Utilisez le filtre de distance sur Doctolib en l'augmentant progressivement (5 km, 10 km, 15 km) jusqu'à trouver des disponibilités.

Les structures de soins alternatives peuvent pallier l'absence de médecin traitant individuel. Les **maisons de santé pluriprofessionnelles (MSP)** regroupent plusieurs médecins et paramédicaux dans un même lieu, avec une organisation de l'agenda différente qui peut permettre des prises en charge plus rapides. Les **centres de santé** municipaux, souvent en secteur 1, ont des politiques d'accueil actives pour les étudiants dans certaines villes.

Les **Services de Santé des Étudiants de Paris (SSE)** et les **Services Universitaires de Médecine Préventive et de Promotion de la Santé (SUMPPS/SIUMPPS)** présents dans la plupart des campus universitaires français offrent des consultations médicales gratuites ou très peu coûteuses pour les étudiants. Ces services ne remplacent pas un médecin traitant officiel mais peuvent assurer les soins courants et orienter vers un praticien en ville. Dans certaines universités, il est possible de déclarer le médecin du SUMPPS comme médecin traitant pour la durée des études.

La **Communauté Professionnelle Territoriale de Santé (CPTS)** de votre secteur peut être contactée directement pour signaler votre situation et demander à être orienté vers un médecin acceptant de nouveaux patients. Ces organisations n'ont pas encore de visibilité grand public mais existent dans la plupart des zones urbaines depuis la loi de 2019.

Si les alternatives ont été épuisées, une **consultation sans rendez-vous** dans une maison médicale de garde le weekend ou le soir, ou une consultation dans une **SOS Médecins** permet d'obtenir des soins urgents sans médecin traitant déclaré, au tarif habituel remboursé. Ces consultations ne comptent pas comme parcours de soins coordonné mais permettent de traverser une période d'attente sans rester sans accès aux soins.

## Changer de médecin traitant : quand et comment

La déclaration d'un médecin traitant n'est pas définitive. Vous pouvez la modifier à tout moment et pour n'importe quelle raison : déménagement dans un autre quartier ou une autre ville, insatisfaction de la qualité de la prise en charge, disponibilité insuffisante de votre médecin actuel, ou simplement envie d'un suivi plus adapté à l'évolution de vos besoins de santé.

La procédure de changement est identique à la déclaration initiale : formulaire Cerfa signé avec le nouveau médecin, ou modification dans votre espace Ameli. Il n'y a pas de délai minimum à respecter entre deux déclarations et pas de justification à fournir. Votre ancien médecin est automatiquement informé du changement par la CPAM et n'a aucun droit de s'y opposer.

Pour les étudiants qui retournent chez leurs parents pendant l'été ou les vacances longues, il peut être pratique d'effectuer une déclaration temporaire chez le médecin familial. La déclaration d'un médecin traitant à l'étranger est également possible pour les étudiants en programme d'échange (Erasmus), bien que les modalités dépendent des conventions bilatérales entre les systèmes de santé concernés.

## Témoignages d'étudiants internationaux

**Ana Lima, 22 ans, étudiante en master de biochimie, arrivée du Brésil** : «J'ai mis trois mois à comprendre ce qu'était un médecin traitant. En rentrant malade d'une angine, j'ai cherché directement un ORL sur Doctolib. L'infirmière m'a refusé le remboursement majoré. Quand j'ai finalement compris le système et déclaré un généraliste, j'ai réalisé que j'aurais économisé environ 60 euros sur l'année. Maintenant mon médecin me connaît, il sait que je suis stressée en période d'examens et il me fait des arrêts de travail rapidement quand c'est nécessaire.»

**Karim Ouedraogo, 26 ans, en doctorat de droit comparé, venu du Burkina Faso** : «La difficulté principale pour moi était la langue lors des consultations. Sur Doctolib j'ai filtré par médecins parlant anglais et j'ai trouvé un praticien dans le 13e à Paris qui consulte aussi en anglais pour les patients non-francophones. Il a accepté d'être mon médecin traitant dès la première consultation. La déclaration sur ameli.fr a pris moins de cinq minutes.»

**Meiying Zhang, 24 ans, en BTS commerce international, originaire de Chine** : «Ce qui m'a le plus aidée, c'est la note de bas de page dans mon contrat de mutuelle étudiante qui expliquait l'obligation du médecin traitant. Sans ça, je n'aurais pas su. Doctolib est vraiment pratique car on voit immédiatement qui accepte de nouveaux patients.»

## Questions fréquentes sur le médecin traitant

**Q : Est-il obligatoire d'avoir un médecin traitant en France ?**
Non, ce n'est pas une obligation légale au sens strict : vous ne serez pas sanctionné si vous n'en avez pas. Mais l'impact financier est significatif. Sans médecin traitant, vous consultez «hors parcours de soins» et les taux de remboursement sont moins favorables, voire nuls pour certaines consultations spécialisées directes. Pour un étudiant avec un budget serré, cette pénalité financière peut représenter plusieurs centaines d'euros sur une année universitaire.

**Q : Peut-on déclarer un médecin traitant qui ne consulte pas sur Doctolib ?**
Oui, absolument. Doctolib est un outil de prise de rendez-vous et d'information, mais la déclaration officielle se fait auprès de la CPAM indépendamment de Doctolib. Un médecin qui n'utilise pas Doctolib peut tout à fait devenir votre médecin traitant : il vous remet alors le formulaire Cerfa lors de votre première visite, ou vous pouvez le déclarer via votre espace Ameli en utilisant son numéro RPPS (numéro d'identification des professionnels de santé).

**Q : Que se passe-t-il si mon médecin traitant prend sa retraite ou arrête d'exercer ?**
Votre couverture maladie n'est pas interrompue. Vous continuez à bénéficier des remboursements normaux pendant une période de transition. La CPAM vous en informe généralement par courrier. La démarche est alors de trouver un nouveau médecin traitant selon la même procédure et de réaliser une nouvelle déclaration. Cette situation est de plus en plus fréquente en France avec les nombreux départs en retraite de médecins.

**Q : Puis-je avoir plusieurs médecins traitants ?**
Non, la loi prévoit un seul médecin traitant à la fois. Certaines exceptions existent pour les mineurs (pédiatre ou généraliste) et pour certaines situations médicales complexes où un spécialiste peut être co-désigné comme médecin traitant. Pour les adultes en bonne santé, un seul généraliste doit être désigné.

**Q : Mon médecin traitant peut-il refuser de me recevoir en urgence ?**
Un médecin traitant a un devoir de disponibilité renforcé envers ses patients déclarés, mais les modalités pratiques dépendent de son organisation. En pratique, la plupart des médecins traitants réservent des créneaux pour les urgences du jour. Si votre médecin est indisponible, il peut vous orienter vers un confrère ou vers la permanence de soins ambulatoires (PDSA). Doctolib propose souvent un filtre «disponible aujourd'hui» qui facilite cette recherche en temps réel.

**Q : Quelle différence entre la mutuelle étudiante et la CPAM pour les remboursements ?**
Ce sont deux niveaux de couverture complémentaires. La CPAM (Sécurité sociale) prend en charge la base obligatoire (70 % du tarif conventionnel pour les consultations). La mutuelle complémentaire (anciennement LMDE, Heyme, AXA, etc.) prend en charge le ticket modérateur (30 % restant) et peut couvrir les dépassements d'honoraires selon votre contrat. Depuis 2019, tous les étudiants sont rattachés à la CPAM de droit commun et non plus à une mutuelle étudiante spécifique pour la protection de base.

**Q : Combien de temps après ma déclaration est-ce que je bénéficie des remboursements majorés ?**
La prise en compte est généralement très rapide : moins de 48 heures pour une déclaration en ligne sur Ameli, une semaine maximum pour un formulaire papier envoyé par courrier. Vous pouvez consulter votre espace Ameli pour vérifier que la déclaration est bien enregistrée avant votre prochain rendez-vous. En cas de consultation avant la validation, vous pouvez parfois demander un remboursement complémentaire a posteriori si le délai administratif est en cause.

**Q : Un étudiant en Erasmus ou en mobilité courte peut-il déclarer un médecin traitant en France ?**
Oui, pour peu que vous soyez affilié à la Sécurité sociale française (via la CVEC et l'inscription universitaire pour les étudiants UE/EEE, ou via l'AME ou une prise en charge spécifique pour d'autres nationalités). La durée minimale de séjour n'est pas précisée réglementairement pour la déclaration. Même pour un séjour de six mois, déclarer un médecin traitant est financièrement avantageux si vous prévoyez d'avoir des soins réguliers.

## Ressources officielles

- [ameli.fr – Ma santé au quotidien : le médecin traitant](https://www.ameli.fr/assure/remboursements/etre-bien-rembourse/medecin-traitant-et-parcours-de-soins) : La source officielle pour comprendre le système, les tarifs de remboursement et initier votre déclaration en ligne.
- [doctolib.fr](https://www.doctolib.fr) : La plateforme de référence pour votre recherche de médecin traitant avec les filtres «Médecin traitant» et «Langues parlées».
- [service-public.fr – Médecin traitant](https://www.service-public.fr/particuliers/vosdroits/F163) : La fiche pratique du service public français detaillant vos droits et obligations.
`;

await patch('8dd257a1-a864-4012-9a70-bb22fac68489', L1);
