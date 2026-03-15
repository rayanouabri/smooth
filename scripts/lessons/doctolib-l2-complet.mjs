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

// LEÇON 2 : Prise de rendez-vous médical avec Doctolib
const L2 = `# Prendre un rendez-vous médical avec Doctolib : le guide complet

Prendre un rendez-vous médical en France représente souvent le premier contact réel d'un étudiant étranger avec le système de santé local. Pendant longtemps, cette démarche passait exclusivement par le téléphone : appeler le cabinet, tomber sur un répondeur, rappeler, attendre en ligne plusieurs minutes avant d'obtenir un créneau parfois très éloigné dans le temps. Doctolib a radicalement transformé cette réalité depuis son lancement en 2013. Aujourd'hui, la plateforme permet de réserver un rendez-vous médical en quelques clics, à n'importe quelle heure du jour ou de la nuit, avec confirmation immédiate par e-mail et SMS. Pour les étudiants internationaux qui ne maîtrisent pas encore toutes les subtilités de la langue française, ou qui ne se sentent pas à l'aise au téléphone dans une langue étrangère, Doctolib est une révolution d'accessibilité. Ce guide vous accompagne à travers chaque étape du processus, des premiers clics jusqu'à la préparation optimale de votre consultation.

## Créer et configurer son compte Doctolib

La première utilisation de Doctolib nécessite la création d'un compte personnel. Cette étape, qui ne prend que quelques minutes, vous permettra de retrouver l'historique de vos rendez-vous, de gérer les rappels automatiques, de compléter votre dossier patient en avance et d'accéder à votre espace de téléconsultation le cas échéant. Pour créer votre compte, rendez-vous sur doctolib.fr depuis un navigateur ou téléchargez l'application mobile sur l'App Store ou Google Play.

Sur la page d'accueil, cliquez sur «Se connecter» puis «Créer un compte». Le formulaire d'inscription vous demande votre prénom, nom, date de naissance, adresse e-mail et numéro de téléphone mobile. L'adresse e-mail sera utilisée pour les confirmations et rappels par mail, le numéro de téléphone pour les SMS de rappel. Choisissez une adresse e-mail que vous consultez régulièrement : les notifications Doctolib contiennent des informations importantes sur vos rendez-vous, y compris les liens de téléconsultation si vous choisissez ce mode de consultation.

Une fois le compte créé, complétez votre profil avec votre adresse postale actuelle (utile pour les recherches géographiques), votre numéro de Sécurité sociale (qui facilitera les démarches de remboursement auprès de certains praticiens connectés à la Carte Vitale numérique) et votre médecin traitant si vous en avez déjà un. Doctolib vous permet également d'ajouter des profils de proches pour gérer leurs rendez-vous depuis votre compte, ce qui est pratique si vous êtes arrivé en France avec votre famille ou si vous aidez un colocataire moins à l'aise avec le numérique.

L'application mobile Doctolib mérite une mention particulière : elle intègre des fonctionnalités que l'interface web n'a pas toujours, como les notifications push personnalisables, la possibilité de stocker les ordonnances en photo directement sur l'app, et un accès rapide au dernier rendez-vous pour une reprise rapide. Sur smartphone, la géolocalisation permet également de trouver automatiquement les praticiens les plus proches de votre position au moment de la recherche.

## Rechercher le bon professionnel de santé

La barre de recherche Doctolib est le point d'entrée de toute démarche de prise de rendez-vous. Elle fonctionne sur le modèle «quoi / où» : vous indiquez d'abord le type de professionnel de santé ou la spécialité souhaitée, puis votre localisation. La plateforme propose une liste déroulante de suggestions au fur et à mesure que vous tapez, ce qui facilite la navigation même si vous ne connaissez pas exactement la terminologie médicale française.

Quelques exemples de recherches fréquentes pour les étudiants :
- **«Médecin généraliste»** suivi de votre ville pour le suivi médical courant
- **«Dermatologue»** pour les problèmes de peau, acné, taches, verrues
- **«Gynécologue»** pour le suivi gynécologique, la contraception, le frottis
- **«Ophtalmologue»** pour une consultation de vue, un renouvellement de lunettes
- **«Psychologue»** ou **«Psychiatre»** pour le soutien en santé mentale
- **«Dentiste»** pour les soins dentaires (détartrage, plombages, douleurs)
- **«Kinésithérapeute»** pour la rééducation après une blessure

La saisie de symptômes est également possible : taper «douleur dos» peut orienter vers un généraliste, un rhumatologue ou un ostéopathe selon les praticiens disponibles dans votre secteur. Doctolib dispose d'un moteur de suggestion qui interprète les descriptions symptomatiques et propose les spécialités adaptées.

La localisation peut être saisie comme une ville, un code postal, un arrondissement parisien (ex : «Paris 13») ou même le nom d'un quartier. Vous pouvez ajuster le rayon de recherche dans les filtres avancés. Par défaut, Doctolib affiche les résultats dans un rayon raisonnable autour de votre localisation, mais si vous cherchez un spécialiste rare (pédopsychiatre, endocrinologue spécialisé) vous pouvez élargir considérablement ce rayon.

## Utiliser les filtres avancés pour affiner les résultats

Les filtres avancés de Doctolib sont la clé d'une recherche efficace. Ils permettent d'éliminer rapidement les praticiens qui ne correspondent pas à vos contraintes spécifiques et de concentrer votre attention sur les options réellement accessibles.

Le filtre **«Disponibilité»** est le plus immédiatement utile : vous pouvez sélectionner «Aujourd'hui», «Cette semaine» ou «Dans les 3 prochains jours» pour ne voir que les médecins ayant des créneaux dans ces délais. Cette option est particulièrement précieuse pour les urgences relatives (consultation qu'on ne peut pas différer mais qui ne nécessite pas le 15). Si vous avez davantage de flexibilité, ne filtrez pas sur la disponibilité et laissez Doctolib vous montrer toutes les options.

Le filtre **«Secteur conventionnel»** vous permet de cibler le secteur 1 pour minimiser les dépassements d'honoraires. Comme expliqué dans la leçon sur le médecin traitant, le secteur détermine les tarifs applicables et l'étendue de vos remboursements. Cochier «Secteur 1» dans les filtres est une habitude financièrement sage pour les étudiants avec des ressources limitées.

Le filtre **«Langues parlées»** est souvent sous-utilisé par les étudiants internationaux. Doctolib permet de filtrer les praticiens qui déclarent parler anglais, arabe, espagnol, mandarin, portugais et d'autres langues. Pour une consultation sensible (santé mentale, gynécologie, problèmes chroniques), consulter dans sa langue maternelle ou dans une langue maîtrisée améliore considérablement la qualité de la communication et réduit le risque de malentendus diagnostiques.

Le filtre **«Type de consultation»** distingue les consultations en cabinet, les téléconsultations vidéo et les visites à domicile. Cette dernière option existe dans certaines zones mais n'est disponible que pour quelques praticiens. La téléconsultation, de plus en plus présente sur Doctolib depuis la pandémie, offre une flexibilité horaire supérieure.

Le filtre **«Carte Vitale acceptée»** indique si le professionnel est équipé du terminal de lecture électronique de la Carte Vitale qui transmet automatiquement les données de remboursement à la CPAM. Ce filtre est pertinent si vous voulez simplifier au maximum les démarches administratives post-consultation.

## Comprendre les créneaux disponibles affichés

L'affichage des disponibilités sur Doctolib peut sembler simple à première vue mais cache plusieurs nuances importantes que les nouveaux utilisateurs manquent souvent. Chaque praticien affiche ses créneaux disponibles sous forme d'un calendrier interactif avec des cases horaires colorées. La navigation entre les semaines se fait avec les flèches gauche/droite.

Les couleurs et étiquettes des créneaux varient selon les paramétrements du cabinet. Certains praticiens distinguent les nouveaux patients des patients déjà enregistrés dans leur base. Un bouton «Nouveau patient» peut apparaître sur certains profils : il confirme que vous n'avez jamais consulté ce médecin et que vous souhaitez établir une nouvelle relation thérapeutique. Ne cochez pas ce bouton si vous avez déjà consulté ce médecin, même anciennement, car cela peut créer des doublons dans le système de gestion du cabinet.

Le **motif de consultation** est un champ presque systématiquement demandé lors de la prise de rendez-vous. Ce champ est techniquement libre mais Doctolib propose souvent une liste de motifs préétablis par le praticien : «Consultation de routine», «Renouvellement d'ordonnance», «Première consultation», «Suivi», «Vaccination», «Bilan de santé», «Urgence médicale relative», etc. Le choix du motif n'est pas anodin : il détermine la durée allouée au rendez-vous dans l'agenda du praticien. Une «Première consultation» peut durer 30 minutes là où un «Renouvellement d'ordonnance» en prend 10. Choisir le mauvais motif peut pénaliser la qualité de votre consultation.

Si vous avez plusieurs problèmes à aborder lors d'une même consultation, indiquez-le dans le champ de commentaire libre ou choisissez le motif le plus complexe. Un médecin qui sait à l'avance que la consultation sera chargée s'organisera différemment. Certains cabinets limitent à un problème par rendez-vous et vous demanderont de reprendre rendez-vous pour une deuxième problématique : c'est une pratique légale et courante, notamment chez les spécialistes surchargés.

## Compléter le formulaire de réservation

Une fois le créneau sélectionné, Doctolib affiche un formulaire de réservation en plusieurs étapes. Si vous êtes connecté à votre compte, la plupart des champs sont pré-remplis avec vos informations personnelles. Pour un premier rendez-vous avec un praticien, des informations complémentaires peuvent être demandées.

La question **«Avez-vous une mutuelle ?»** concerne votre couverture complémentaire. Si vous avez une mutuelle étudiante ou une CSS, cochez «Oui». Certains praticiens proposent des conventions tierces payant avec certaines mutuelles, ce qui signifie qu'ils facturent directement la mutuelle sans que vous ayez à avancer les frais. Ce système n'est pas systématique mais, quand il est disponible, représente un avantage financier non négligeable.

Le champ **«Numéro de téléphone»** est utilisé par Doctolib pour les rappels automatiques mais aussi par le cabinet pour vous contacter en cas de modification ou d'annulation du rendez-vous from their side. Un numéro français actif est indispensable. Si vous n'avez pas encore de forfait mobile français, il est vivement recommandé d'en obtenir un rapidement car il est la clef de nombreux services administratifs (authentification à deux facteurs, SMS de confirmation, etc.).

La **déclaration d'assurance maladie** est une étape spécifique à certains praticiens connectés au système de facturation électronique. Vous pouvez y scanner ou photographier votre carte Vitale ou attestation de droits ameli. Cette étape accélère la facturation mais n'est pas bloquante si vous ne disposez pas encore de votre carte Vitale physique.

Un résumé de votre rendez-vous avec toutes les informations (praticien, date, heure, adresse, motif) s'affiche avant la confirmation finale. Lisez-le attentivement pour éviter toute surprise. Cliquez sur «Confirmer le rendez-vous» pour finaliser la réservation.

## La confirmation et les rappels automatiques

Immédiatement après la confirmation, Doctolib envoie une notification par e-mail et par SMS récapitulant les informations du rendez-vous. Conservez cet e-mail de confirmation car il contient généralement le lien pour annuler ou modifier le rendez-vous en autonomie, ainsi que le lien de téléconsultation si le rendez-vous est en format vidéo.

Doctolib génère automatiquement des rappels : un e-mail et un SMS 24 heures avant le rendez-vous, et parfois un deuxième rappel 2 heures avant. Ces rappels sont personnalisables dans les paramètres de votre compte. Vous pouvez choisir de ne recevoir que les SMS, que les e-mails, ou les deux, et modifier le délai de rappel selon vos préférences. Pour les étudiants très sollicités, garder les deux canaux de rappel activés réduit significativement les risques d'oubli.

Dans le rappel automatique, un bouton de confirmation de présence est souvent intégré. Cliquer sur ce bouton indique au cabinet que vous serez bien présent, ce qui leur permet de gérer plus efficacement leur agenda en cas de créneaux libérés tardivement. Certains cabinets peuvent vous contacter si vous ne confirmez pas votre présence dans les 24 heures pour libérer le créneau à d'autres patients.

## Préparer sa consultation pour l'optimiser

La qualité d'une consultation médicale dépend en partie de la préparation du patient. Pour un étudiant qui visite un médecin pour la première fois dans un pays étranger, la préparation prend une dimension supplémentaire : il s'agit non seulement d'organiser ses questions médicales mais aussi de rassembler les documents administratifs et médicaux nécessaires.

**Documents à emporter obligatoirement** : votre carte Vitale (ou à défaut votre attestation de droits Ameli téléchargeable depuis votre espace personnel sur ameli.fr), votre pièce d'identité, votre carte de mutuelle complémentaire. Si vous prenez des médicaments régulièrement, apportez la boîte ou notez le nom exactement (nom de la molécule active et dosage) car les noms commerciaux varient d'un pays à l'autre.

**Préparez vos antécédents médicaux** : si vous avez des antécédents chirurgicaux, des allergies médicamenteuses ou alimentaires connues, des maladies chroniques (diabète, asthme, épilepsie, trouble bipolaire), des traitements en cours ou récents, notez tout cela en français avant la consultation. En cas de difficultés linguistiques, une liste écrite permet au médecin de comprendre rapidement votre situation sans que vous ayez à tout expliquer oralement.

**Préparez vos questions** : une consultation de médecine générale dure en moyenne 15 à 20 minutes en France. Ce temps passe vite. Il est recommandé de noter à l'avance les 2 à 3 problèmes principaux que vous souhaitez aborder, par ordre de priorité. Si vous avez plus de questions, dites-le dès le début de la consultation («J'ai plusieurs points à aborder aujourd'hui, est-ce possible ?»). Le médecin s'organisera en conséquence ou vous proposera un second rendez-vous pour les points non traités.

**Sur l'application Doctolib**, le module «Questions pré-consultation» est disponible chez certains praticiens. Avant votre rendez-vous, Doctolib peut vous envoyer un formulaire à remplir avec vos symptômes actuels, leur durée, leur intensité et vos antécédents. Ce questionnaire, transmis au médecin avant la consultation, lui permet de se préparer et d'optimiser le temps d'échange avec vous.

## Accéder à son dossier patient Doctolib

Doctolib propose un espace «Mon dossier» accessible depuis votre compte. Cet espace centralise vos rendez-vous passés et futurs, les ordonnances uploadées, les comptes-rendus de consultation que le médecin a transmis via la plateforme, et les documents que vous avez vous-même ajoutés (résultats d'analyses, radios numérisées, etc.).

La fonctionnalité de partage de documents avec le praticien est particulièrement utile pour les consultations de suivi. Si votre médecin traitant vous a demandé une analyse de sang et que les résultats vous sont parvenus par e-mail depuis le laboratoire, vous pouvez les téléverser dans votre dossier Doctolib et les rendre accessibles au médecin avant même la consultation. Cela évite d'imprimer et d'apporter des documents physiques.

La **messagerie sécurisée Doctolib** permet d'échanger des messages non urgents avec votre médecin entre deux consultations. Cette fonctionnalité, disponible chez les praticiens qui l'ont activée, est utile pour poser une question simple sur une ordonnance incomprise, signaler un effet secondaire survenu après une prise de médicament, ou demander un renouvellement d'ordonnance si votre médecin propose ce service à distance.

## Gérer plusieurs membres de la famille depuis un seul compte

L'une des fonctionnalités méconnues de Doctolib est la gestion multi-profils. Si vous êtes venu en France avec votre conjoint(e), vos enfants ou si vous gérez les rendez-vous médicaux d'un parent âgé, vous pouvez ajouter jusqu'à plusieurs profils supplémentaires à votre compte. Chaque profil dispose de son propre historique de rendez-vous et de ses propres rappels.

Pour les étudiants qui aident des camarades peu à l'aise avec le numérique, il est possible de prendre un rendez-vous pour quelqu'un d'autre depuis son propre compte, mais il est important de sélectionner le profil de la personne concernée plutôt que le sien. Les informations personnelles (date de naissance, numéro de Sécurité sociale) utilisées lors de la réservation doivent correspondre au patient réel et non à l'utilisateur du compte.

## Cas pratiques d'utilisation fréquents pour les étudiants

**Renouvellement d'ordonnance** : si vous prenez un médicament régulier (contraceptif, traitement pour l'asthme, antidépresseur) et avez besoin d'un renouvellement, cherchez le motif «Renouvellement d'ordonnance» ou «Suivi de traitement» dans la liste de motifs du médecin. Certains médecins proposent le renouvellement par téléconsultation, évitant le déplacement. Apportez votre ancienne ordonnance (ou une photo dans votre téléphone) pour faciliter la consultation.

**Résultats d'analyses** : après des prises de sang ou des examens complémentaires prescrits par votre médecin traitant, les résultats vous parviennent en quelques jours. Si le médecin n'a pas indiqué de «consultation systématique des résultats», vous pouvez prendre un rendez-vous court via Doctolib (motif «Résultats d'analyses») pour discuter des résultats. Certains médecins envoient les interprétations directement via la messagerie Doctolib pour les résultats normaux.

**Certificat médical** : de nombreuses activités universitaires requièrent un certificat médical (sport en club, licence sportive, certificat d'aptitude pour certaines formations). Sur Doctolib, cherchez le motif «Certificat médical» chez votre médecin traitant. Le médecin procède généralement à un examen physique sommaire avant de rédiger le certificat. Ce service est remboursé dans le cadre normal de la consultation.

## Témoignages d'étudiants sur l'utilisation de Doctolib

**Ibrahim Diallo, 23 ans, en licence de physique, arrivé du Sénégal** : «La première fois que j'ai utilisé Doctolib, j'avais peur de me tromper dans le motif de consultation. J'ai finalement choisi 'Première consultation' et écrit dans les commentaires que j'avais aussi des questions sur ma couverture maladie. Le médecin a pris le temps d'expliquer tout le système de remboursement. Maintenant je prends tous mes rendez-vous par Doctolib, c'est tellement plus simple que le téléphone.»

**Priya Sharma, 25 ans, en master d'ingénierie, venue d'Inde** : «Le filtre 'Langues parlées' m'a énormément aidée pour retrouver une gynécologue qui parle anglais. La consultation en anglais m'a donné une confiance que je n'aurais pas eue en français pour ce type de sujet très personnel. Doctolib m'a aussi envoyé un rappel SMS le jour avant, ce qui m'a évité d'oublier un rendez-vous pris trois semaines à l'avance.»

## Questions fréquentes sur la prise de rendez-vous Doctolib

**Q : Peut-on prendre un rendez-vous Doctolib sans avoir de carte Vitale ?**
Absolument. La carte Vitale n'est pas requise pour prendre un rendez-vous sur Doctolib : elle sera demandée physiquement lors de la consultation pour la facturation. Des étudiants qui viennent d'arriver et n'ont pas encore reçu leur numéro de Sécurité sociale peuvent prendre des rendez-vous normalement. Ils devront ensuite obtenir le remboursement en transmettant manuellement la feuille de soins à la CPAM une fois leur numéro obtenu.

**Q : Que se passe t-il si je dois annuler mon rendez-vous au dernier moment ?**
Les annulations via Doctolib sont libres et sans frais. Le lien d'annulation figure dans votre e-mail de confirmation. Prévenez le plus tôt possible par respect pour le médecin et les autres patients qui attendent. En pratique, un rendez-vous annulé moins de 24 heures avant peut être signalé comme «no show» par certains cabinets, ce qui peut à terme affecter votre capacité à prendre rendez-vous chez ce praticien. Les règles varient selon les cabinets.

**Q : Comment trouver un rendez-vous urgent le jour même ?**
Les filtres «Disponible aujourd'hui» ou «Dans les prochaines heures» de Doctolib permettent de visualiser les créneaux du jour. Certains médecins réservent des plages horaires quotidiennes pour les urgences relatives, non affichées à l'avance sur Doctolib mais libérées chaque matin. Si Doctolib n'affiche rien de disponible le jour même, des alternatives existent : SOS Médecins (consultations à domicile ou en cabinet, payantes mais remboursées), maisons médicales de garde, centres de soins sans rendez-vous.

**Q : Doctolib est-il gratuit pour les patients ?**
Oui, l'utilisation de Doctolib est entièrement gratuite pour les patients. La plateforme se finance par les abonnements payés par les professionnels de santé (médecins, cliniques, hôpitaux) qui utilisent son logiciel de gestion d'agenda. Il n'y a aucun frais caché, aucun abonnement premium et aucune commission prélevée sur le montant de la consultation.

**Q : Mes données personnelles et médicales sont-elles protégées sur Doctolib ?**
Doctolib est soumis au Règlement Général sur la Protection des Données (RGPD) européen, l'un des cadres juridiques les plus stricts au monde pour la protection des données personnelles. Les données médicales bénéficient d'une protection renforcée en tant que «données sensibles». Doctolib a obtenu la certification HDS (Hébergeur de Données de Santé) qui impose des normes de sécurité spécifiques pour le stockage et le traitement des données de santé en France.

**Q : Mon médecin peut-il voir toutes mes données renseignées sur Doctolib ?**
Les praticiens voient uniquement les informations directement liées à votre rendez-vous chez eux (nom, prénom, date de naissance, motif de consultation, commentaire libre). Ils n'ont pas accès à vos rendez-vous chez d'autres médecins ou à vos informations de profil complètes. Les documents médicaux ne sont partagés avec un praticien que si vous l'autorisez explicitement dans les paramètres de partage.

**Q : Est-il possible de prendre rendez-vous pour un proche sans être médecin ?**
Oui, Doctolib permet la gestion multi-profils. Vous pouvez prendre rendez-vous pour un parent, un enfant ou un proche en ajoutant son profil à votre compte. Il vous faudra saisir ses informations personnelles exactes (nom, prénom, date de naissance) pour que la fiche soit correcte. Le praticien doit être informé que la consultation concerne un tiers, pas le titulaire du compte.

**Q : Que faire si le médecin annule le rendez-vous ?**
Quand un praticien annule un rendez-vous, Doctolib vous en informe immédiatement par e-mail et SMS, avec souvent une proposition de créneaux alternatifs. Si vous avez une urgence médicale, n'attendez pas la notification Doctolib et contactez le 15 (SAMU) ou rendez-vous aux urgences. Pour une consultation non urgente, utilisez le lien de reprogrammation fourni dans la notification.

## Ressources utiles

- [doctolib.fr](https://www.doctolib.fr) : Plateforme principale pour vos prises de rendez-vous en ligne
- [ameli.fr – Remboursements](https://www.ameli.fr/assure/remboursements) : Comprendre ce qui est remboursé et comment initier la démarche
- [service-public.fr – Consultation médicale](https://www.service-public.fr/particuliers/vosdroits/F170) : Vos droits lors d'une consultation médicale en France
`;

await patch('57f77520-86cd-4f05-acf1-507d9fee5de4', L2);
