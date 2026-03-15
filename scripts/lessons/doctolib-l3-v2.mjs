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

const L3 = `# Comprendre Doctolib : histoire, architecture et fonctionnement complet

Doctolib est bien plus qu'un simple outil de réservation de rendez-vous médicaux. C'est une infrastructure numérique de santé, un acteur économique majeur valorisé à plusieurs milliards d'euros, un sujet de débat politique et éthique sur la numérisation du système de soins, et pour des dizaines de millions de Français, le premier point de contact quotidien avec l'accès aux soins. Pour les étudiants internationaux qui découvrent cette plateforme en même temps qu'ils découvrent la France, comprendre Doctolib dans toute sa complexité permet non seulement de l'utiliser avec plus d'efficacité, mais aussi d'exercer le regard critique indispensable face à tout outil qui occupe une place aussi centrale dans un domaine aussi sensible que la santé. Cette leçon vous propose une exploration en profondeur : l'histoire de la plateforme depuis ses origines, son architecture technique, les types de professionnels référencés, les fonctionnalités avancées méconnues, le cadre juridique de la protection des données, les critiques légitimes qui lui sont adressées, les alternatives existantes et les perspectives d'évolution de la numérisation des soins en France.

## Naissance et ascension fulgurante de Doctolib

Doctolib est né en 2013 dans les bureaux d'un incubateur parisien, fondé par Stanislas Niox-Chateau et Ivan Schneider. Ces deux anciens consultants en stratégie avaient tous deux observé dans leur entourage la laborieuse réalité de la prise de rendez-vous médicaux en France : composer le numéro du cabinet, tomber sur un répondeur, rappeler à l'heure d'ouverture, patienter dans une file d'attente téléphonique, puis se voir proposer un créneau avec plusieurs semaines de délai. Ce problème paraissait universel, chronophage et aisément résolvable par la technologie.

L'idée fondatrice était simple dans sa conception mais robuste dans son exécution : proposer aux médecins un logiciel de gestion d'agenda en ligne intégrant une interface patient pour la réservation autonome. Le modèle économique repose intégralement sur l'abonnement payé par les professionnels de santé, rendant la plateforme gratuite pour les patients. Cette stratégie freemium «inverted» où les prestataires paient pour accéder à une base de patients, plutôt que l'inverse, s'est révélée particulièrement efficace pour une adoption rapide dans le secteur médical.

Les premières années ont été celles de la conviction : convaincre les médecins, souvent peu enclins à adopter de nouveaux outils numériques, qu'une plateforme de prise de rendez-vous en ligne réduirait leurs taux d'«absentéisme» (patients ne se présentant pas), libérerait du temps de secrétariat médical, et améliorerait leur visibilité. Les premiers cabinets convaincus ont rapidement constaté une réduction des taux de no-show de 30% à moins de 10%, grâce aux rappels automatiques. Le bouche-à-oreille entre médecins a accéléré la croissance.

En 2016, Doctolib a réussi une opération décisive en signant un partenariat avec l'Assistance Publique – Hôpitaux de Paris (AP-HP), plaçant pour la première fois la plateforme au cœur de l'hôpital public. Cette validation institutionnelle a ouvert les portes d'autres hôpitaux, cliniques et centres de santé publics et privés à travers tout le territoire. En 2017, Doctolib s'est lancé en Allemagne, puis en Italie en 2020, devenant une entreprise européenne à dimension internationale. Fin 2019, la plateforme comptait 60 000 professionnels de santé et plus de 30 millions de rendez-vous pris par mois.

La pandémie de COVID-19 a constitué le tournant le plus significatif de l'histoire de Doctolib. En quelques semaines, la plateforme a développé un module spécifique de prise de rendez-vous pour les campagnes de vaccination, gérant les agendas de milliers de centres de vaccination à travers la France et l'Allemagne. Des millions de Français qui n'avaient jamais entendu parler de Doctolib se sont créé un compte pour obtenir leur rendez-vous de vaccination. En 2021, Doctolib revendiquait 50 millions d'utilisateurs. En 2023, ce chiffre dépassait les 70 millions. L'entreprise est aujourd'hui l'une des startups françaises les plus valorisées, avec une capitalisation qui dépasse les 5,8 milliards d'euros, en faisant la deuxième «licorne» de la French Tech dans le secteur de la santé.

## Architecture technique de la plateforme

Doctolib est construit sur une architecture cloud (informatique en nuage) distribuée qui synchronise en temps réel les agendas de centaines de milliers de praticiens avec les interfaces patients de millions d'utilisateurs simultanés. La complexité technique de cet système est considérable : quand un créneau est réservé par un patient à Paris, il doit disparaître instantanément pour tous les autres patients qui consultent le même profil au même moment, sans qu'aucun doublon de réservation ne soit possible.

Cette synchronisation repose sur une base de données distribuée avec une architecture à haute disponibilité, incluant de nombreux mécanismes de redondance pour éviter les interruptions de service. Doctolib affiche un engagement d'uptime supérieur à 99,9 %, ce qui se traduit concrètement par moins de 9 heures de indisponibilité par an. Pour un service de santé sur lequel des millions de personnes comptent quotidiennement, cette fiabilité est un prérequis absolu.

Du côté du praticien, le logiciel de gestion d'agenda (le backoffice) permet de paramétrer finement chaque type de rendez-vous : durée, motifs autorisés, distinction nouveau/ancien patient, jours et horaires de consultation, types de consultations disponibles (cabinet, vidéo, domicile), langues parlées, et bien d'autres attributs. Ces paramètres se reflètent instantanément dans ce que voient les patients sur la plateforme.

Le moteur de recherche utilise des algorithmes de matching qui prennent en compte la localisation géographique, la spécialité ou le mot-clé saisi, les disponibilités, et progressivement des signaux de qualité comme les évaluations des patients. L'algorithme de classement exact n'est pas public, et cette opacité soulève des questions légitimes sur les critères de visibilité : un médecin payant un abonnement premium est-il mieux mis en avant ? Les médecins avec plus d'évaluations positives apparaissent-ils en tête ? Doctolib affirme que le classement est basé sur la pertinence géographique et la disponibilité, mais l'absence de documentation détaillée laisse cette question partiellement ouverte.

L'infrastructure serveur de Doctolib a fait l'objet d'une controverse en 2021 quand il a été révélé que certaines données étaient hébergées sur des serveurs d'Amazon Web Services (AWS) localisés en Europe mais soumis au Cloud Act américain. Sous la pression d'acteurs de la santé publique et de parlementaires sensibles à la souveraineté numérique, Doctolib s'est engagé dans un processus de migration progressive vers une infrastructure européenne souveraine, travaillant notamment avec des hébergeurs certifiés HDS (Hébergeurs de Données de Santé) de droit français ou européen.

## Les professionnels de santé présents sur Doctolib

La plateforme ne se limite pas aux médecins généralistes. Elle accueille l'ensemble des professions de santé réglementées par le Code de la santé publique français, ce qui en fait un véritable annuaire interactif de l'offre de soins sur l'ensemble du territoire.

**La médecine générale et spécialisée** constitue historiquement le cœur de Doctolib. On y trouve des généralistes, mais aussi des cardiologues, dermatologues, endocrinologues, gastro-entérologues, gynécologues, neurologues, ophtalmologues, ORL, pédiatres, pneumologues, psychiatres, rhumatologues, urologues et toutes les autres spécialités médicales reconnues. Pour les étudiants, les spécialités les plus utiles à connaître sont : la gynécologie pour le suivi contraceptif, la psychiatrie et la psychologie pour le soutien en santé mentale, la dermatologie pour les problèmes cutanés fréquents chez les jeunes adultes, et l'ophtalmologie pour les renouvellements de lunettes ou de lentilles de contact.

**La chirurgie** est également représentée sur Doctolib pour les consultations. Les chirurgiens (orthopédistes, digestifs, plasticiens, vasculaires) utilisent Doctolib pour leurs consultations externes préopératoires et postopératoires. Les opérations proprement dites se déroulent évidemment en bloc chirurgical et ne passent pas par Doctolib.

**La dentisterie** est l'une des spécialités les plus recherchées sur Doctolib après la médecine générale. Les dentistes, chirurgiens-dentistes et orthodontistes utilisent largement la plateforme. Les délais pour un nouveau patient chez un dentiste peuvent être très longs dans les grandes villes (parfois plusieurs mois), ce qui rend les filtres de disponibilité particulièrement précieux dans cette spécialité.

**Les professions paramédicales** représentent un segment en forte croissance sur Doctolib : kinésithérapeutes, infirmiers, orthophonistes, ergothérapeutes, podologues, diététiciens-nutritionnistes, psychomotriciens, audioprothésistes. Ces professionnels ne requièrent pas tous une prescription médicale pour une première consultation, mais les actes remboursés par la Sécurité sociale nécessitent généralement une ordonnance préalable.

**La santé mentale** a connu une expansion considérable sur Doctolib depuis la pandémie. Psychiatres (médecins spécialistes, donc remboursés par la CPAM), psychologues cliniciens (remboursés dans le cadre du dispositif «Mon Soutien Psy» depuis 2022 pour 8 séances par an max), neuropsychologues et psychothérapeutes habilitatés y sont référencés. La demande dans ce secteur dépasse très largement l'offre dans la plupart des grandes villes : les délais pour un premier rendez-vous psychiatrique peuvent dépasser 3 mois. La fonctionnalité de liste d'attente de Doctolib est particulièrement précieuse dans ce contexte.

**Les hôpitaux et établissements de santé** : de plus en plus d'hôpitaux publics et cliniques privées utilisent Doctolib pour leurs consultations externes. L'AP-HP (Assistance Publique – Hôpitaux de Paris) était l'un des pionniers de cette intégration. Pour les étudiants qui ont besoin d'accéder à des spécialistes universitaires ou à des consultations dans des services de référence, chercher sur Doctolib les consultations externes de l'hôpital universitaire de votre ville peut ouvrir des portes vers des médecins experts difficiles d'accès autrement.

## Les fonctionnalités avancées souvent méconnues

Au-delà de la réservation basique, Doctolib propose un ensemble de fonctionnalités avancées que la majorité des utilisateurs n'explorent jamais. Ces fonctionnalités peuvent transformer significativement votre expérience de la relation médicale.

**La liste d'attente** est la fonctionnalité la plus précieuse pour les spécialités à délais très longs. Quand un praticien a activé cette option sur son profil, un bouton «Me prévenir si une disponibilité se libère» apparaît, même si ses créneaux sont complets pour plusieurs mois. Quand un patient annule son rendez-vous, Doctolib envoie automatiquement une notification aux personnes inscrites sur la liste d'attente, dans l'ordre d'inscription. Les annulations de dernière minute se produisent régulièrement, y compris chez les spécialistes les plus demandés. S'inscrire sur plusieurs listes d'attente simultanément et être prêt à accepter un créneau rapidement peut permettre d'obtenir un rendez-vous bien plus tôt qu'initialement anticipé.

**Le questionnaire pré-consultation** est disponible chez les praticiens qui l'ont paramétré. Avant votre rendez-vous, Doctolib envoie automatiquement un formulaire à compléter. Ce questionnaire, personnalisé selon la spécialité (formulaire de dépistage dépressif pour un psychiatre, questionnaire de symptômes dermatologiques pour un dermatologue, etc.), est transmis au praticien avant la consultation et lui permet de se préparer. Remplir ce formulaire avec soin améliore significativement la qualité de la consultation et réduit le temps passé à recueillir des informations de base.

**La téléconsultation intégrée** permet une consultation vidéo directement depuis l'interface Doctolib, sans téléchargement d'un logiciel externe. La connexion est chiffrée de bout en bout, conforme aux exigences HDS et RGPD. La qualité technique est généralement bonne avec une connexion Internet stable. L'avantage principal est l'accessibilité temporelle : certains médecins proposent des créneaux de téléconsultation en soirée ou le weekend qu'ils ne dédicaceraient pas à des consultations en cabinet.

**La messagerie sécurisée** entre patients et praticiens facilite les échanges non urgents. Elle est disponible chez les praticiens qui l'ont activée. Pour les questions administratives simples (renouvellement d'ordonnance pour un traitement stable, demande de précision sur une recommandation, signalement d'un effet secondaire bénin), la messagerie peut éviter un déplacement ou une consultation facturée. Attention : la messagerie n'est pas appropriée pour les urgences et certains médecins la consultent rarement.

**Le dossier médical Doctolib** centralise les documents que vous téléversez (ordonnances, analyses, comptes-rendus) et ceux que les praticiens ont partagés avec vous. Vous contrôlez entièrement les accès : vous pouvez rendre un document visible uniquement à certains praticiens, ou le garder privé. Ce dossier numérique vous appartient et peut être exporté en intégralité sur demande selon votre droit RGPD à la portabilité des données.

**L'intégration calendrier** (Google Calendar, Apple Calendar) permet d'ajouter automatiquement chaque rendez-vous à votre agenda numérique avec l'adresse complète du cabinet. Le jour du rendez-vous, un clic sur l'événement calendrier ouvre directement Google Maps pour la navigation. Cette fonctionnalité simple mais efficace réduit significativement le risque d'oubli de rendez-vous ou de confusion sur l'adresse.

## Cadre juridique et protection des données de santé

La protection des données de santé est régie par un cadre légal particulièrement strict en France et en Europe, compte tenu de la sensibilité intrinsèque de ces informations. Comprendre ce cadre vous permet d'exercer vos droits de manière informée.

Le **RGPD (Règlement Général sur la Protection des Données)**, en vigueur depuis mai 2018, classe les données de santé dans la catégorie des données sensibles bénéficiant d'une protection renforcée. Leur traitement est en principe interdit sauf exceptions spécifiques, dont la prise en charge médicale. Doctolib possède un fondement légal pour traiter ces données car le traitement est nécessaire à la gestion des rendez-vous médicaux.

La certification **HDS (Hébergeurs de Données de Santé)** est obligatoire pour toute entité stockant des données de santé à caractère personnel. Cette certification, délivrée par des organismes accrédités par le Cofrac, impose des normes strictes : chiffrement des données au repos et en transit, journalisation de tous les accès aux données, gestion rigoureuse des droits d'accès selon le principe du moindre privilège, plan de continuité d'activité testé régulièrement, et obligations de transparence envers les patients sur le traitement de leurs données.

**Vos droits sur vos données** selon le RGPD sont très étendus : droit d'accès (obtenir une copie complète de toutes les données que Doctolib détient sur vous, gratuitement et sous 30 jours), droit de rectification, droit à l'effacement (suppression complète de votre compte et données après cessation de la relation), droit à la portabilité (recevoir vos données dans un format réutilisable par d'autres services), droit d'opposition à certains traitements. Ces droits s'exercent depuis les paramètres de confidentialité de votre compte Doctolib ou en contactant directement le Délégué à la Protection des Données (DPO) de Doctolib.

La **CNIL (Commission Nationale de l'Informatique et des Libertés)** est l'autorité de contrôle française chargée de vérifier le respect du RGPD. En cas de traitement illicite de vos données par Doctolib, vous pouvez porter une réclamation auprès de la CNIL via son site cnil.fr. La CNIL a déjà sanctionné plusieurs acteurs du numérique de santé pour des manquements au RGPD, ce qui constitue un garde-fou réel même s'il n'est pas parfait.

## Limites et critiques légitimes de Doctolib

Adopter un regard éclairé sur Doctolib signifie reconnaître ses apports considérables tout en restant conscient de ses limites et des tensions qu'il génère dans le système de santé.

**La concentration du pouvoir sur l'accès aux soins** est la critique la plus fondamentale. En devenant l'infrastructure dominante de la prise de rendez-vous médicaux en France, Doctolib concentre un pouvoir considérable sur l'accessibilité aux soins pour des millions de personnes. Si Doctolib décidait demain de modifier ses tarifs, ses règles d'utilisation ou ses algorithmes de classement, les conséquences sur le système de santé français seraient immédiates et massives. Cette dépendance d'une infrastructure publique critique envers une entreprise privée non contrôlée démocratiquement est structurellement problématique, même si Doctolib n'a jusqu'à présent pas abusé de cette position.

**La fracture numérique accentuée** : la numérisation de la prise de rendez-vous via Doctolib aggrave les inégalités d'accès aux soins pour les personnes non-familières avec les outils numériques : personnes âgées de plus de 75 ans, personnes en situation de grande précarité, personnes souffrant de handicaps cognitifs ou sensoriels incompatibles avec les écrans. Des études récentes montrent que les délais d'accès aux soins ont augmenté pour ces populations précisément à mesure que Doctolib se généralisait, créant un avantage comparatif pour les utilisateurs numériques au détriment des autres.

**Le coût pour les praticiens et la segmentation du marché** : l'abonnement mensuel à Doctolib, qui peut varier de 150 à plus de 1 000 euros selon les options et le type d'établissement, représente une charge non négligeable pour les petits cabinets, les médecins débutants ou les professionnels exerçant en zones défavorisées. Les praticiens qui ne souscrivent pas à Doctolib disparaissent statistiquement du radar des patients utilisant uniquement cette plateforme, créant une sorte de «prime au numérique» qui avantage les cabinets bien capitalisés.

**Les effets de concentration de la demande** : la forte visibilité de Doctolib peut créer des déséquilibres locaux. Un médecin avec un excellent profil et une note élevée peut se retrouver submergé de demandes, devant fermer son agenda aux nouveaux patients rapidement, tandis que des collègues tout aussi compétents mais avec un profil moins visible restent sous-sollicités. Cet effet de résonance peut exacerber les inégalités de charge de travail entre praticiens.

## Les alternatives à Doctolib en France

La domination de Doctolib ne signifie pas l'absence d'alternatives. Plusieurs plateformes ou solutions coexistent avec des modèles différents.

**Maiia** est la principale alternative en termes de part de marché, développée par une coopérative française qui privilégie un modèle de gouvernance plus participatif. Maiia est bien présente en zones rurales et semi-rurales, chez des praticiens qui préfèrent une solution française avec un modèle économique différent. L'interface patient est similaire à Doctolib.

**Keldoc** est une plateforme régionale qui existe depuis 2012. Elle couvre certaines régions françaises, notamment le Sud-Ouest, et propose une expérience similaire à Doctolib avec quelques différences d'interface.

**Le site propre du cabinet** : de nombreux médecins gèrent leurs rendez-vous via leur propre site internet, soit avec un système développé spécifiquement, soit avec des outils génériques. Si un médecin n'apparaît pas sur Doctolib, son site personnel ou une recherche Google du type «Docteur [nom] rendez-vous en ligne» peut révéler une solution alternative.

**Les agendas de groupes hospitaliers locaux** : de nombreux groupes hospitaliers de taille régionale (CHU, cliniques privées, GHT) disposent de leurs propres systèmes de prise de rendez-vous en ligne pour les consultations externes, distincts de Doctolib. Ces systèmes offrent parfois un accès plus direct aux spécialistes universitaires.

**L'espace Ameli** : la CPAM développe progressivement des fonctionnalités de mise en relation dans l'espace Ameli (votre compte Sécurité sociale en ligne). Bien que beaucoup moins développées que Doctolib à ce jour, ces fonctionnalités pourraient à terme offrir une alternative publique et non commerciale aux plateformes privées.

## Doctolib face à l'avenir de la santé numérique

Doctolib ne se contente plus d'être une plateforme de prise de rendez-vous. L'entreprise investit massivement dans des fonctionnalités de saisie automatisée des comptes-rendus médicaux par intelligence artificielle, dans l'intégration avec les systèmes d'information hospitaliers pour un dossier patient unifié, et dans le développement d'outils de prévention et de suivi à distance.

La direction de Doctolib a annoncé des ambitions dans le domaine de l'intelligence artificielle médicale : analyse automatique de symptômes pour orienter vers la bonne spécialité, suggestions de diagnostics différentiels, aide à la rédaction des comptes-rendus. Ces développements, porteurs de promesses d'efficacité médicale, soulèvent aussi des questions majeures sur la responsabilité médicale, la déshumanisation potentielle de la relation thérapeutique et les biais algorithmiques dans des décisions médicales.

Pour les étudiants en études de santé ou dans les filières numériques et données, Doctolib représente un cas d'étude fascinant sur la transformation numérique d'un secteur réglementé, les défis de la gouvernance des données sensibles, et les tensions entre innovation privée et intérêt public dans les infrastructures critiques.

## Témoignages d'étudiants sur leur usage avancé de Doctolib

**Fatou Coulibaly, 23 ans, en master de santé publique, venue de Côte d'Ivoire** : «En cours, on a étudié Doctolib comme exemple de transformation numérique en santé. C'est intéressant parce que d'un côté ça facilite tellement l'accès aux soins pour ceux qui savent l'utiliser, et d'un autre côté ça crée des inégalités pour les personnes âgées ou non-numériques. Je l'utilise pour moi de manière très intensive — j'ai même utilisé la liste d'attente pour obtenir un rendez-vous psychiatrique en 3 semaines alors que le délai normal était 4 mois.»

**Viktor Kovacs, 27 ans, en doctorat d'informatique, venu de Hongrie** : «Ce qui m'intéresse techniquement dans Doctolib, c'est la gestion temps réel de la disponibilité. J'ai étudié leur architecture pour mon projet de recherche sur les systèmes distribués. La migration vers une infrastructure cloud souveraine européenne, c'est un exercice technique complexe avec des enjeux de réplication de données et de latence vraiment intéressants à analyser.»

## Questions fréquentes sur Doctolib comme plateforme

**Q : Doctolib est-il accessible à des personnes ne parlant pas français ?**
L'interface est principalement en français. Une version partielle en anglais existe via les paramètres de langue du compte. Les profils des praticiens restent en français (rédigés par les médecins eux-mêmes). Des navigateurs avec traduction automatique (Chrome, Firefox avec extension) peuvent faciliter la navigation. Pour trouver un médecin parlant votre langue, utilisez le filtre «Langues parlées».

**Q : Puis-je accéder à Doctolib depuis un autre pays de l'UE ?**
Doctolib est accessible depuis n'importe quel pays avec une connexion Internet. Pour prendre rendez-vous, vous aurez besoin d'un numéro de téléphone valide pour les SMS de confirmation. Un numéro étranger fonctionnera techniquement, mais un numéro français est préférable pour éviter tout problème de réception des SMS.

**Q : Doctolib est-il connecté au Dossier Médical Partagé (DMP) de la CPAM ?**
Pas directement et intégralement. Il existe des passerelles partielles et en cours de développement entre les deux systèmes, mais à ce jour, votre dossier Doctolib et votre DMP ameli sont deux espaces distincts. Le DMP est l'espace officiel de la CPAM qui interagit avec les professionnels de santé via le logiciel Pro Santé Connect.

**Q : Un médecin peut-il voir mon historique de consultations chez d'autres praticiens via Doctolib ?**
Non. Chaque praticien ne voit que vos rendez-vous passés chez lui via Doctolib, ainsi que les documents que vous avez explicitement partagés avec lui. Il n'y a pas de vision transversale de votre parcours médical pour les praticiens uniquement via Doctolib.

**Q : Peut-on noter négativement un praticien sur Doctolib ?**
Oui. Les avis Doctolib permettent de donner une note et de rédiger un commentaire, y compris négatif si votre expérience l'a été. Seuls les patients ayant réellement consulté ce praticien via Doctolib peuvent laisser un avis, ce qui limite les faux témoignages. Les médecins peuvent répondre aux avis. Une politique de modération est en place pour retirer les avis diffamatoires ou injurieux, mais les critiques légitimes et constructives sont conservées.

**Q : Doctolib peut-il être utilisé pour des consultations de deuxième avis médical ?**
Oui. Si vous souhaitez obtenir l'avis d'un deuxième médecin sur un diagnostic ou une orientation thérapeutique proposée par votre médecin traitant, vous pouvez parfaitement prendre rendez-vous via Doctolib chez un autre praticien de la même spécialité. Le deuxième avis médical est un droit légal en France (reconnu par la loi Leonetti de 2005) que vous pouvez exercer librement.

**Q : Y a-t-il une application Doctolib pour les professionnels de santé ?**
Oui, l'application Doctolib Pro est distincte de l'application patient. Elle est réservée aux praticiens abonnés et leur permet de gérer leur agenda depuis leur smartphone : consulter les rendez-vous du jour, bloquer des créneaux, communiquer avec les patients. Elle permet aussi aux médecins en déplacement (visite à domicile) d'accéder rapidement aux informations de leurs patients.

## Ressources officielles et complémentaires

- [doctolib.fr – Centre d'aide](https://www.doctolib.fr/aide) : Documentation officielle et support technique de Doctolib pour les patients
- [cnil.fr – Vos droits sur internet](https://www.cnil.fr/fr/les-droits-pour-maitriser-vos-donnees-personnelles) : Comprendre et exercer vos droits RGPD en France
- [esante.gouv.fr – Le numérique en santé](https://esante.gouv.fr) : La stratégie nationale de numérisation du système de santé et les outils officiels
- [service-public.fr – Données personnelles de santé](https://www.service-public.fr/particuliers/vosdroits/F31418) : Vos droits sur vos données de santé selon la législation française
`;

await patch('5c3357b9-52d9-4ad3-85a2-2d7f4565089e', L3);
