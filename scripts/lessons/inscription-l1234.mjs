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

const L1 = `# L'Équivalence de Diplômes Étrangers : ENIC-NARIC et Procédures

Faire reconnaître un diplôme obtenu à l'étranger en France est une démarche qui concerne des milliers d'étudiants et de professionnels chaque année. Qu'il s'agisse de poursuivre des études dans une université française après un baccalauréat ou une licence obtenus à l'étranger, ou d'exercer une profession réglementée en France avec un diplôme non français, les procédures de reconnaissance sont précises, organisées et accessibles — à condition de les connaître et de les aborder avec méthode. Cette leçon vous guide à travers les mécanismes de reconnaissance des diplômes étrangers en France, en détaillant le rôle du réseau ENIC-NARIC, les types de reconnaissance disponibles, les procédures à suivre et les ressources à mobiliser.

## Le réseau ENIC-NARIC : architecture internationale de la reconnaissance

Le réseau ENIC-NARIC est l'architecture internationale de la reconnaissance académique et professionnelle des qualifications. ENIC (European Network of Information Centres in the European Region) est coordonné par le Conseil de l'Europe et l'UNESCO pour les pays de la grande région européenne. NARIC (National Academic Recognition Information Centres) est le réseau parallèle opérant au sein de l'Union Européenne, coordonné par la Commission Européenne. En pratique, les deux réseaux se confondent dans la plupart des pays membres de l'espace européen d'enseignement supérieur, et le terme «ENIC-NARIC» désigne le point national de contact pour la reconnaissance des qualifications étrangères.

En France, le centre ENIC-NARIC est géré par le CIEP (Centre International d'Études Pédagogiques), désormais intégré à France Éducation International, rattaché au ministère de l'Éducation nationale, de l'Enseignement supérieur et de la Recherche. Il constitue la référence nationale pour toutes les questions de reconnaissance académique des diplômes étrangers. Son rôle n'est pas d'imposer une décision de reconnaissance mais de fournir une expertise et une attestation comparative qui servent de base aux décisions des établissements et des employeurs.

## Les deux types de reconnaissance : académique et professionnelle

La reconnaissance d'un diplôme étranger peut viser deux objectifs distincts, qui correspondent à deux types de procédures différentes.

La reconnaissance académique vise à vous permettre de poursuivre des études en France à un niveau équivalent à celui atteint dans votre pays d'origine. Si vous avez obtenu un baccalauréat ou un diplôme équivalent à l'étranger et souhaitez entrer en licence en France, ou si vous avez obtenu une licence étrangère et souhaitez entrer en master, la reconnaissance académique confirme que votre niveau d'études est bien équivalent au niveau d'entrée requis. En France, cette reconnaissance académique pour l'accès aux études du supérieur n'est pas centralisée : chaque université et chaque établissement d'enseignement supérieur est souverain dans sa décision d'admettre ou non un candidat sur la base de son diplôme étranger. Le centre ENIC-NARIC fournit des attestations comparatives qui éclairent la décision des établissements sans la contraindre.

La reconnaissance professionnelle vise à vous permettre d'exercer une profession en France avec un diplôme étranger. Pour les professions non réglementées, les employeurs apprécient librement la valeur du diplôme étranger — aucune procédure officielle n'est requise, mais une attestation ENIC-NARIC peut faciliter la compréhension de votre qualification par les recruteurs français. Pour les professions réglementées (médecin, avocat, architecte, infirmier, enseignant), une procédure spécifique de reconnaissance est obligatoire, gérée par les ministères et les ordres professionnels concernés.

## Les attestations de comparabilité délivrées par ENIC-NARIC France

Le centre ENIC-NARIC France délivre, sur demande, des attestations de comparabilité qui situent un diplôme étranger dans le référentiel français. Ces attestations indiquent le niveau d'études atteint dans la hiérarchie française (niveau baccalauréat, niveau licence, niveau master, niveau doctorat), le domaine d'études et éventuellement des observations sur les spécificités du système éducatif d'origine.

La demande d'attestation se fait en ligne via le portail du centre ENIC-NARIC France, en fournissant les diplômes originaux (ou leurs copies certifiées), les relevés de notes, une copie de la pièce d'identité et le paiement des frais de dossier (qui varient selon le type d'attestation demandée et la rapidité de traitement souhaitée). Le délai de traitement est typiquement de six à douze semaines pour une demande standard, et peut être raccourci à deux ou trois semaines pour une demande urgente avec surcoût.

Il est important de comprendre ce que l'attestation ENIC-NARIC délivrée en France n'est pas. Elle n'est pas une décision administrative contraignante pour les établissements d'enseignement supérieur. Elle n'est pas une garantie d'admission dans un programme universitaire — les universités françaises peuvent accepter ou refuser des candidats dont le diplôme étranger est pourtant «comparable» à une licence française, pour des raisons de niveau académique, de places disponibles ou de critères de sélection propres au programme. Elle n'est pas non plus un permis d'exercer une profession réglementée — pour cela, des procédures distinctes s'appliquent.

## La procédure d'accès aux études supérieures avec un diplôme étranger

Pour les étudiants étrangers souhaitant s'inscrire en première année de licence en France avec un diplôme secondaire étranger, le principal canal est la procédure Parcoursup (pour les étudiants arrivant de l'UE et de certains pays partenaires) ou la procédure «Études en France» via Campus France (pour les ressortissants de pays tiers soumis à cette procédure).

La procédure Campus France, pour les ressortissants d'une cinquantaine de pays principalement africains et asiatiques, est le dispositif de pré-inscription qui précède la demande de visa étudiant. Elle comprend une phase de vérification de l'authenticité des diplômes et des relevés de notes présentés, dans le cadre de laquelle le diplôme secondaire étranger est évalué dans sa comparabilité avec le baccalauréat français. Les lycées français à l'étranger et les établissements accrédités par le réseau AEFE (Agence pour l'Enseignement Français à l'Étranger) occupent une place à part dans ce dispositif : leurs diplômes sont souvent directement reconnus sans procédure complémentaire.

Pour les étudiants souhaitant s'inscrire en master avec une licence étrangère, la procédure passe par Mon Master (la plateforme nationale d'admission en master en France depuis 2023) pour les masters sélectifs, ou directement auprès de l'université pour les masters non sélectifs. Les universités évaluent le dossier académique étranger de façon autonome, avec parfois l'appui d'une attestation ENIC-NARIC pour les diplômes moins connus.

## Les cas spécifiques : systèmes non correspondants au modèle français

Certains systèmes éducatifs étrangers ne correspondent pas directement au modèle français Bac+3/+5, ce qui complique la comparaison directe. Le système américain (bachelor's degree en 4 ans, master's degree en 2 ans), le système anglais (bachelor's degree en 3 ans avec spécialisation dès le début), le système russe (5 ans de licence-master intégré), ou les systèmes d'Asie du Sud-Est ont des architectures différentes que le centre ENIC-NARIC analyse au cas par cas.

Dans ces situations, l'attestation ENIC-NARIC doit préciser non seulement le niveau atteint mais aussi les modalités de comparaison — un bachelor's degree américain de 4 ans peut être comparé à une licence+1 française dans certaines disciplines, ou à une licence seulement dans d'autres, selon la profondeur académique du programme suivi. Ces nuances ont des implications directes sur le niveau d'entrée accessible en France.

## Conseils pratiques pour maximiser les chances de reconnaissance

Pour maximiser vos chances d'obtenir une reconnaissance favorable de votre diplôme étranger, plusieurs pratiques sont recommandées. Rassemblez tous vos documents académiques originaux (diplômes, relevés de notes, attestations de stages) et faites-en faire des traductions assermentées en français par un traducteur certifié si les documents ne sont pas déjà en français ou en anglais. Vérifiez si votre université d'origine est répertoriée dans les bases de données internationales des établissements reconnus (le World Higher Education Database de l'IAU est une ressource utile à cet effet).

Si votre diplôme a été délivré par un établissement peu connu ou d'un pays avec un système éducatif peu documenté en France, une lettre de recommandation d'un professeur français ou d'un chercheur reconnu dans votre domaine peut significativement appuyer votre dossier. De même, si vous avez publié des travaux académiques ou participé à des conférences, joindre ces éléments à votre dossier de reconnaissance renforcera la perception de votre niveau académique.

## Les délais et leur impact sur les candidatures

Les délais de traitement des dossiers ENIC-NARIC et des procédures de reconnaissance peuvent avoir des impacts significatifs sur les candidatures universitaires, dont les calendriers sont souvent stricts. Une attestation demandée en décembre pour une candidature Parcoursup en mars est dans les temps. Une attestation demandée en mars pour une candidature de septembre peut arriver trop tard si le délai de traitement dépasse six semaines.

L'anticipation maximale de ces démarches est la stratégie la plus sûre. Si vous envisagez de vous inscrire dans une université française, commencez les démarches de reconnaissance dès le début de l'année universitaire précédant votre rentrée en France — idéalement entre septembre et décembre pour une rentrée en septembre de l'année suivante. Cette avance est particulièrement importante pour les professions réglementées, dont les procédures de reconnaissance peuvent prendre six à dix-huit mois.
`;

const L2 = `# Les Frais d'Inscription et les Exonérations pour Étudiants Étrangers

La question des frais d'inscription à l'université française a connu une transformation majeure en 2019, avec la mise en place du programme «Bienvenue en France» qui a introduit des frais différenciés selon la nationalité des étudiants. Comprendre la structure des frais d'inscription, les exonérations disponibles et les aides compensatoires est indispensable pour planifier le budget de ses études supérieures en France de façon réaliste et anticiper les démarches administratives à accomplir.

## L'historique des frais d'inscription : de la quasi-gratuité à la différenciation

Pendant plusieurs décennies, l'enseignement supérieur public français était quasi-gratuit pour tous les étudiants, qu'ils soient français, européens ou extracommunautaires. Des droits d'inscription symboliques (quelques centaines d'euros par an en licence) couvraient une infime partie du coût réel de la formation, largement subsidisée par l'État. Ce modèle, fondé sur le principe d'égalité d'accès et de service public universel, était une singularité française dans le paysage mondial de l'enseignement supérieur, où la plupart des pays développés font payer des frais d'inscription significatifs.

La réforme de 2019, introduite sous le gouvernement Édouard Philippe, a modifié ce modèle pour les étudiants extra-européens en créant des frais différenciés: les étudiants de l'Union Européenne et de l'Espace Économique Européen continuent de payer les droits nationaux (170 euros pour la licence, 243 euros pour le master, 380 euros pour le doctorat en 2024-2025), tandis que les étudiants extra-européens sont soumis à des frais majorés (2 770 euros pour la licence, 3 770 euros pour le master). Ces montants restent très inférieurs aux frais pratiqués dans les pays anglophones (8 000 à 45 000 euros par an en moyenne au Royaume-Uni et aux États-Unis), mais représentent une augmentation significative par rapport à la situation antérieure.

## Les exonérations : qui peut en bénéficier ?

L'un des aspects les plus importants de cette réforme est l'ampleur du dispositif d'exonérations qui accompagne les nouveaux frais majorés. En pratique, une grande majorité des étudiants extra-européens ne paient pas les frais majorés grâce à ces exonérations. Les catégories d'étudiants potentiellement exemptés sont nombreuses.

Les boursiers du gouvernement français — bénéficiaires d'une bourse d'excellence attribuée par le ministère de l'Europe et des Affaires Étrangères, par Campus France ou par un ambassade française — sont exonérés des frais majorés. Ces bourses couvrent souvent non seulement les frais d'inscription mais aussi les frais de vie.

Les boursiers de leur gouvernement d'origine, dans le cadre d'accords bilatéraux entre la France et leur pays — bénéficiaires d'une bourse d'état ou d'une bourse gouvernementale accordée par leur pays pour étudier en France — peuvent être exonérés selon les accords en vigueur entre la France et le pays concerné.

Les réfugiés reconnus, les bénéficiaires de la protection subsidiaire et les demandeurs d'asile en cours de procédure ont droit à l'exonération des frais majorés, payant uniquement les droits nationaux. Cette disposition reflète les engagements de la France en matière d'accueil et de protection des personnes fuyant des situations de danger.

Les bénéficiaires de l'aide sociale étudiante — qui se qualifient pour une bourse CROUS sur critères sociaux (ce qui nécessite désormais une voie d'accès spécifique pour les étudiants extra-européens) — peuvent également bénéficier d'exonérations partielles ou totales des frais d'inscription.

## Les décisions autonomes des universités : une hétérogénéité importante

La réforme de 2019 a laissé aux universités une large autonomie pour définir leurs propres politiques d'exonération. En pratique, cela a produit une très grande disparité entre établissements : certaines universités ont choisi d'exonérer une proportion très élevée de leurs étudiants extra-européens (parfois 90 % ou plus), d'autres ont appliqué les frais majorés de façon plus systématique.

Cette hétérogénéité signifie que les frais réellement payés par un étudiant extra-européen en France dépendent largement de l'université choisie et de sa politique autonome d'exonération. Avant de choisir une université, il est donc crucial de vérifier sa politique spécifique en matière de frais et d'exonérations pour les étudiants internationaux — une information disponible sur le site web de la direction des relations internationales de chaque établissement.

## Les frais annexes : cotisation CVEC et assurance

Au-delà des droits d'inscription proprement dits, plusieurs frais annexes s'ajoutent au premier semestre.

La Contribution Vie Étudiante et de Campus (CVEC) est une cotisation annuelle obligatoire, fixée à 103 euros pour l'année 2024-2025, que tout étudiant doit acquitter en ligne sur le site MESSERVICES.ETUDIANT.GOUV.FR avant de finaliser son inscription administrative. L'attestation de paiement ou d'exonération de la CVEC est un document indispensable pour l'inscription. Les étudiants boursiers sur critères sociaux sont exonérés de la CVEC.

L'assurance responsabilité civile étudiante est recommandée, voire obligatoire dans certains établissements. Elle couvre les dommages que l'étudiant pourrait causer à des tiers dans le cadre de ses activités universitaires. Elle est souvent incluse dans les abonnements d'assurance habitation ou proposée à bas coût par des mutuelles étudiantes comme la SMENO, la MGEL ou la MEP.

La mutuelle santé complémentaire n'est pas obligatoire mais très recommandée pour les soins non couverts à 100 % par la Sécurité sociale. Les étudiants nouvellement affiliés à la Sécurité sociale bénéficient d'une complémentaire santé solidaire (CSS) sous conditions de ressources, qui peut prendre la relève si les revenus sont très limités.

## Stratégies pour réduire les frais d'inscription

Pour un étudiant extra-européen en dehors des catégories d'exonération automatique, plusieurs stratégies permettent de réduire ou d'éliminer le surcoût des frais majorés.

La candidature à une bourse d'excellence du gouvernement français (bourse Eiffel, bourses de l'Ambassade de France, Programme Major) est la voie royale : ces bourses couvrent les frais d'inscription, allouent une allocation mensuelle substantielle et confèrent un statut qui facilite l'obtention du visa. La sélection est compétitive, mais les candidats dossieristes solides ont des chances réelles.

La candidature via un programme de double diplôme ou de partenariat entre une université étrangère et une université française ouvre parfois des droits à des frais réduits ou exonérés. De nombreuses universités françaises ont des accords spécifiques avec des établissements étrangers qui incluent des dispositions sur les frais d'inscription.

La candidature directement à un programme de master en apprentissage (alternance) peut inclure une prise en charge totale ou partielle des frais de formation par l'employeur dans le cadre du contrat d'apprentissage — les frais pédagogiques de la formation sont financés par l'OPCO (Organisme de Compétences) associé à la branche professionnelle de l'entreprise, sans que l'étudiant n'ait à les débourser directement.

## Les frais de formation dans les filières sélectives et les grandes écoles

Il est important de noter que les frais détaillés ci-dessus concernent les universités publiques. Les grandes écoles (Sciences Po Paris, HEC, Polytechnique, ESCP, ESSEC et autres) pratiquent des frais d'inscription nettement plus élevés, souvent entre 10 000 et 20 000 euros par an pour les programmes de master, avec des dispositifs de bourses et d'aide financière spécifiques. Si votre projet académique vous oriente vers ces établissements, une recherche spécifique sur leurs politiques tarifaires et leurs aides financières est indispensable.

Les IUT (Instituts Universitaires de Technologie) proposant des BUT (Bachelor Universitaire de Technologie) et les BTS (Brevet de Technicien Supérieur) dans les lycées publics appliquent des droits d'inscription proches des droits nationaux des universités, souvent sans la différenciation extra-européenne — un point à vérifier selon l'établissement visé.
`;

const L3 = `# Les Frais d'Inscription : Budget Complet pour vos Études en France

Planifier financièrement ses études en France nécessite une vue d'ensemble précise et détaillée de l'ensemble des postes de dépenses, et pas seulement des droits d'inscription universitaires. Les frais liés directement à l'inscription administrative représentent en réalité une fraction des dépenses totales d'une année d'études — le logement, la nourriture, les transports, les livres et les frais divers constituent la partie principale du budget étudiant. Cette leçon vous aide à construire un budget réaliste et exhaustif pour vos études en France, en couvrant tous les postes de dépenses avec des estimations actualisées et des conseils pour optimiser chaque poste.

## La structure globale du budget étudiant en France

Le budget moyen d'un étudiant en France varie significativement selon plusieurs paramètres : la ville d'études (Paris étant la plus chère, les villes moyennes de province nettement moins), le type de logement (résidence universitaire CROUS, colocation, logement indépendant), le niveau de formation (les masters professionnels incluent parfois des frais supplémentaires de formations, de certifications ou de voyages d'études), et le mode de vie personnel.

L'Observatoire de la Vie Étudiante (OVE) publie régulièrement des enquêtes sur les conditions de vie des étudiants en France. Ses données les plus récentes situent la dépense mensuelle moyenne d'un étudiant non boursier entre 1 100 et 1 600 euros par mois selon la ville, tous postes confondus. Un étudiant boursier disposant d'une chambre en résidence CROUS peut vivre avec environ 700 à 900 euros par mois, grâce aux tarifs subventionnés du logement et de la restauration collective.

## Le logement : le poste le plus lourd

Le logement représente généralement entre 40 et 55 % du budget mensuel d'un étudiant, et constitue donc le poste de dépenses le plus déterminant pour l'équilibre budgétaire global.

La chambre en résidence universitaire gérée par le CROUS est l'option la moins chère et la plus demandée. Les loyers CROUS varient entre 160 et 450 euros par mois selon la région, la taille de la chambre (studio, chambre individuelle, appartement F1 ou F2) et les équipements inclus. La concurrence pour obtenir une chambre CROUS est très forte, notamment à Paris, Lyon et Marseille, et la demande dépasse souvent très largement l'offre disponible. Les priorités d'attribution sont définies par des critères sociaux (quotient familial) et géographiques (éloignement de la ville d'études). Soumettez votre demande de logement CROUS le plus tôt possible — idéalement dès mars pour une rentrée en septembre.

La colocation (partager un appartement avec d'autres étudiants) est la solution alternative la plus répandue. Elle permet de partager le loyer et les charges, réduisant le coût individuel du logement. Un loyer mensuel dans une colocation se situe typiquement entre 350 et 600 euros à Paris et entre 250 et 450 euros dans les grandes villes de province (Lyon, Bordeaux, Toulouse, Nantes, Strasbourg), charges comprises.

Le studio individuel est l'option la plus chère et la plus confortable. À Paris, un studio de 20-25 m² se loue entre 800 et 1 200 euros par mois. En province, les prix sont nettement plus bas (350 à 600 euros pour un studio équivalent dans des villes comme Clermont-Ferrand, Limoges, Besançon ou Grenoble).

## L'aide au logement CAF (APL) : réduire le loyer effectif

Les aides personnalisées au logement (APL) versées par la Caisse d'Allocations Familiales (CAF) peuvent considérablement réduire le coût effectif du logement pour les étudiants éligibles. Les APL sont attribuées sans condition de nationalité mais sous conditions de ressources — les revenus personnels et ceux de la famille sont pris en compte dans le calcul. Pour un étudiant étranger résidant en France dont les ressources sont limitées, les APL peuvent représenter entre 100 et 300 euros par mois selon la zone géographique et le niveau du loyer.

Pour bénéficier des APL, il faut déposer une demande en ligne sur le site de la CAF (caf.fr) dès l'emménagement dans le logement. Les APL ne sont pas rétroactives au-delà du mois de demande, et certaines conditions liées au type de logement s'appliquent. Les chambres en résidence CROUS sont directement éligibles. Les logements en colocation avec un bail individualisé sont également éligibles. Les foyers de jeunes travailleurs et certaines résidences privées étudiantes l'sont aussi. Vérifiez l'éligibilité de votre logement avant de vous engager dans un bail.

## La restauration et l'alimentation

Les restaurants universitaires (RU) du CROUS proposent des repas complets à tarifs subventionnés : un repas complet (entrée + plat + dessert + boisson) est facturé entre 3,30 euros (tarif étudiant boursier) et 4,50 euros (tarif étudiant non boursier) dans les RU CROUS. Ces tarifs sont extrêmement compétitifs par rapport au coût réel d'un repas et constituent une option de restauration à privilégier pour optimiser le budget alimentaire.

Pour les étudiants qui cuisinent dans leur logement, le budget alimentaire mensuel varie entre 150 euros (cuisine maison systématique, achats en supermarché discount) et 300 euros (alimentation mixte, produits bio ou de qualité). Les marchés hebdomadaires de quartier, proposant souvent des prix inférieurs à ceux des supermarchés pour les fruits et légumes frais, sont une option économique et conviviale.

## Les transports

Les transports constituent un poste variable selon la configuration géographique de la vie étudiante. À Paris et dans la grande ceinture parisienne, le pass Navigo Mois toutes zones coûtait 86 euros par mois en 2024 (tarif révisé annuellement). Une réduction de 50 % est appliquée pour les personnes en situation de précarité sous certaines conditions, et une tarification réduite pour les moins de 26 ans est disponible. À Lyon, Bordeaux, Toulouse et d'autres grandes villes, des abonnements étudiants à tarif réduit existent généralement pour les transports en commun — renseignez-vous auprès de la régie de transport locale.

Le vélo est une option de mobilité de plus en plus développée et subventionnée dans les villes françaises. Des aides à l'achat de vélo ou de vélo électrique sont proposées par certaines villes et certaines régions, parfois cumulables avec une aide de l'État. Pour les trajets courts (moins de 5 km), le vélo est souvent l'option la plus rapide, la moins chère et la plus saine.

## Le budget livres et ressources pédagogiques

Le budget livres et ressources varie significativement selon les disciplines. En droit, médecine, pharmacie et certaines sciences, les manuels de référence (codes annotés, atlas d'anatomie, ouvrages de référence disciplinaire) représentent une dépense initiale significative : compter entre 200 et 500 euros pour les achats de première année dans ces disciplines. En sciences humaines et sociales, les lectures recommandées sont souvent accessibles en bibliothèque universitaire, réduisant les achats indispensables.

Les ressources pour réduire ce budget incluent : la bibliothèque universitaire (BU), qui met à disposition les manuels en plusieurs exemplaires et en versions numériques via son portail de ressources électroniques ; les marchés d'occasion entre étudiants (Vinted, groupes Facebook d'étudiants, stands d'occasion organisés par les associations étudiantes) ; et les versions numériques légales des ouvrages, parfois moins chères que les éditions papier.

## Le budget total estimé par ville

Pour vous donner des repères concrets, voici des estimations du budget mensuel total (logement + nourriture + transport + loisirs + frais divers) pour un étudiant étranger dans différentes villes françaises qui ne bénéficie pas d'aides exceptionnelles. À Paris, comptez entre 1 300 et 1 800 euros par mois pour un niveau de vie confortable. À Lyon ou Bordeaux, entre 1 000 et 1 400 euros par mois. À Toulouse, Nantes, Strasbourg ou Rennes, entre 900 et 1 300 euros par mois. Dans les villes moyennes (Clermont-Ferrand, Limoges, Besançon, Pau), entre 750 et 1 100 euros par mois.

Ces estimations correspondent à un niveau de vie décent incluant les loisirs essentiels et quelques sorties. Avec des APL, un logement CROUS et un usage régulier des restaurants universitaires, les coûts peuvent être réduits de 200 à 400 euros par mois par rapport à ces estimations.
`;

const L4 = `# Reconnaissance des Diplômes Étrangers : Guide Complet ENIC-NARIC

La reconnaissance d'un diplôme étranger en France est une démarche qui touche à la fois au droit académique, au droit des professions réglementées et à la politique d'internationalisation de l'enseignement supérieur. Pour les étudiants qui arrivent en France avec un parcours académique réalisé dans un autre pays, ou pour les professionnels étrangers souhaitant exercer en France, comprendre le système de reconnaissance des qualifications est une étape préalable indispensable à toute démarche d'inscription ou d'exercice professionnel. Ce guide complet vous détaille les mécanismes, les procédures et les ressources disponibles pour naviguer efficacement dans ce système.

## L'architecture de la reconnaissance en France

La France ne dispose pas d'un organisme unique centralisé qui reconnaîtrait tous les diplômes étrangers de façon uniforme. La reconnaissance est distribuée entre plusieurs acteurs selon la finalité poursuivie.

Pour les études supérieures, chaque établissement d'enseignement supérieur décide de façon autonome d'admettre ou non un candidat avec un diplôme étranger. Cette décision est informée, mais non contrainte, par les préconisations du centre ENIC-NARIC France qui fournit des attestations comparatives. Dans la pratique, les admissions en licence avec un diplôme secondaire étranger passent par Parcoursup pour les candidats résidant déjà en France ou par Campus France pour les candidats résidant à l'étranger — ces deux plateformes comportent des procédures spécifiques de vérification des qualifications.

Pour l'exercice des professions réglementées, la compétence de reconnaissance est répartie entre le ministère de la Santé (pour les professions médicales et paramédicales), le ministère de la Justice (pour les avocats et les notaires), le ministère de la Culture (pour les architectes), le ministère de l'Éducation nationale (pour les enseignants), et les ordres professionnels correspondants. Chaque ministère a ses procédures spécifiques, et les délais de traitement varient considérablement.

## Les accords bilatéraux et multilatéraux de reconnaissance

La France a conclu des accords bilatéraux de reconnaissance de diplômes avec de nombreux pays, qui facilitent les procédures pour les ressortissants des pays signataires. La Convention de Lisbonne sur la reconnaissance des qualifications relatives à l'enseignement supérieur dans la région européenne (1997), ratifiée par la France et appliquée dans l'espace ENIC-NARIC, constitue le cadre de référence pour la reconnaissance des qualifications dans l'espace européen élargi.

Des accords bilatéraux spécifiques existent entre la France et de nombreux pays francophones d'Afrique, le Maroc, la Tunisie, l'Algérie, le Liban, et d'autres pays avec lesquels la France entretient des relations académiques privilégiées. Ces accords peuvent faciliter ou accélérer la reconnaissance dans certains contextes, mais ne garantissent pas une reconnaissance automatique.

## Le cas des diplômes frauduleux et les dispositifs de vérification

La fraude aux diplômes — présentation de faux diplômes ou de diplômes d'établissements fictifs — est un phénomène mondial contre lequel les universités et les employeurs français sont de plus en plus vigilants. Des outils de vérification existent pour faciliter l'authentification des diplômes étrangers.

Le service DataDiplôme de France Compétences authentifie les diplômes délivrés par les établissements français enregistrés. Pour les diplômes étrangers, l'authentification passe par le contact direct avec l'établissement délivrant le diplôme, par des services de vérification tiers (Digitary, Hyland Credentials, Unicheck) ou par les services consulaires français dans le pays d'origine.

Les «moulins à diplômes» (diploma mills) — établissements fictifs qui délivrent des diplômes sans formation réelle contre paiement — sont recensés dans des bases de données internationales consultables en ligne. Si votre établissement d'origine n'est pas répertorié dans les bases de données reconnues (International Association of Universities, Ministère de l'Éducation de votre pays), préparez-vous à devoir prouver de façon renforcée sa légitimité.

## Les professions médicales : une procédure particulièrement complexe

La reconnaissance des diplômes dans les professions médicales — médecins, chirurgiens-dentistes, sages-femmes, infirmiers, pharmaciens — est particulièrement encadrée en raison des enjeux de santé publique associés à l'exercice de ces professions. En France, l'exercice de ces professions est subordonné à la possession d'un diplôme reconnu par le ministère de la Santé ou les ordres professionnels correspondants.

Pour les médecins titulaires d'un diplôme extra-européen, la procédure de reconnaissance (PAE : Praticien à Diplôme Étranger hors UE) est longue et sélective. Elle comprend une inscription dans une liste annuelle limitée, le passage d'une épreuve de vérification des connaissances (EVC), une période de remplacement ou de collaboration sous supervision, puis dans certains cas une procédure d'autorisation individuelle délivrée par les Agences Régionales de Santé.

Pour les médecins titulaires d'un diplôme européen, le principe de reconnaissance mutuelle automatique entre pays de l'UE s'applique, mais des vérifications spécifiques peuvent être demandées selon le pays d'origine et le type de spécialité. Le Conseil National de l'Ordre des Médecins est l'interlocuteur principal pour toutes ces démarches.

## La validation des acquis professionnels (VAP) comme alternative

Pour les professionnels dont le diplôme étranger n'est pas directement reconnu à hauteur du niveau souhaité, la Validation des Acquis Professionnels (VAP) permet d'accéder à certaines formations ou examens sur la base de l'expérience professionnelle plutôt que du seul diplôme.

La VAP 85 (procédure issue d'un décret de 1985) permet d'accéder en cours d'études à des diplômes universitaires ou technologiques sur la base d'une expérience professionnelle de 5 ans minimum dans le domaine concerné. Elle est gérée par les universités et les établissements concernés, qui évaluent le dossier du candidat et décident d'accorder ou non la dispense. La VAP est distincte de la VAE (Validation des Acquis de l'Expérience) qui permet, elle, d'obtenir directement un diplôme complet.

## L'accompagnement humain dans les démarches de reconnaissance

Les démarches de reconnaissance des diplômes étrangers peuvent être déstabilisantes, particulièrement pour les personnes peu familières avec les systèmes administratifs français. Des ressources d'accompagnement humain existent pour faciliter ces démarches.

Les Points d'Accueil et d'Information (PAI) dans les universités et les centres CROUS orientent les étudiants vers les bons interlocuteurs. Les associations d'aide aux migrants et aux primo-arrivants (Association France Horizon, ADATE, France Terre d'Asile) accompagnent les réfugiés et les migrants dans leurs démarches de reconnaissance des qualifications. Les services consulaires des ambassades de France à l'étranger peuvent fournir des informations préliminaires sur les procédures à anticiper avant l'arrivée en France. Mobiliser ces ressources dès le début du processus réduit les risques d'erreur et accélère les démarches.
`;

await patch('8b527cad-23d4-4e1c-8f92-3f7bcf297de0', L1);
await patch('c0029686-e225-452b-982f-a1cd524ed753', L2);
await patch('ee522c1c-cd2c-4de5-b984-fc77338212a7', L3);
await patch('92a088d5-fe7d-4026-b228-a6fc57ce5d2d', L4);
