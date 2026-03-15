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

const L2 = `# Prendre un rendez-vous médical avec Doctolib : le guide complet

Prendre un rendez-vous médical en France représente souvent le premier contact réel d'un étudiant étranger avec le système de santé local. Pendant longtemps, cette démarche passait exclusivement par le téléphone : appeler le cabinet, tomber sur un répondeur, rappeler plusieurs fois, attendre en ligne plusieurs minutes avant d'obtenir un créneau parfois très éloigné dans le temps. Certains patients rapportaient devoir appeler jusqu'à quinze fois avant d'obtenir un rendez-vous en période de forte demande comme l'automne ou l'hiver. Cette réalité décourageait une partie de la population, notamment les personnes peu à l'aise avec les appels téléphoniques, les personnes malentendantes, et bien sûr les étrangers qui ne maîtrisent pas encore toutes les subtilités de la langue française. Doctolib a radicalement transformé cette réalité depuis son lancement en 2013. Aujourd'hui, la plateforme permet de réserver un rendez-vous médical en quelques clics, à n'importe quelle heure du jour ou de la nuit, sept jours sur sept, avec confirmation immédiate par e-mail et SMS. Pour les étudiants internationaux, Doctolib est une révolution d'accessibilité qui supprime l'obstacle linguistique au téléphone et rend le système de santé bien plus transparent. Ce guide vous accompagne à travers chaque étape du processus, des premiers clics jusqu'à la préparation optimale de votre consultation, en passant par la gestion de votre dossier patient et les situations particulières auxquelles vous pouvez être confrontés.

## Créer et configurer son compte Doctolib

La première utilisation de Doctolib nécessite la création d'un compte personnel. Cette étape, qui ne prend que quelques minutes, vous permettra de retrouver l'historique de vos rendez-vous, de gérer les rappels automatiques, de compléter votre dossier patient en avance et d'accéder à votre espace de téléconsultation. Pour créer votre compte, rendez-vous sur doctolib.fr depuis un navigateur ou téléchargez l'application mobile gratuite sur l'App Store (iPhone) ou Google Play (Android).

Sur la page d'accueil, cliquez sur «Se connecter» puis «Créer un compte». Le formulaire d'inscription vous demande votre prénom, nom, date de naissance, adresse e-mail et numéro de téléphone mobile. L'adresse e-mail sera utilisée pour les confirmations et rappels, le numéro de téléphone pour les SMS d'alerte. Choisissez une adresse e-mail que vous consultez régulièrement : les notifications Doctolib contiennent des informations critiques sur vos rendez-vous.

Une fois le compte créé, complétez votre profil avec votre adresse postale actuelle, votre numéro de Sécurité sociale (18 chiffres, visible sur votre attestation de droits Ameli) et votre médecin traitant si vous en avez déjà un. Le profil complet facilite les démarches lors des consultations qui utilisent la facturation électronique.

L'application mobile Doctolib mérite d'être installée dès le début de votre séjour. Elle intègre des fonctionnalités absentes de l'interface web : les notifications push personnalisables, la possibilité de stocker des ordonnances en photo, un accès rapide à vos prochains rendez-vous et la géolocalisation automatique pour trouver les praticiens les plus proches. Sur smartphone, l'expérience globale est plus fluide que sur navigateur web, en particulier pour la téléconsultation vidéo.

La configuration du profil inclut également la possibilité d'ajouter des profils de proches. Si vous êtes venu en France avec votre partenaire, vos enfants ou si vous aidez un colocataire peu à l'aise avec le numérique, vous pouvez gérer leurs rendez-vous depuis votre compte. Chaque profil est distinct avec son propre historique et ses propres rappels. La gestion multi-profils est une fonctionnalité très utilisée par les familles mais également précieuse pour les réseaux d'entraide entre étudiants.

## Rechercher le bon professionnel de santé sur la plateforme

La barre de recherche Doctolib fonctionne sur le modèle «quoi / où» : vous indiquez le type de professionnel ou la spécialité souhaitée, puis votre localisation. La plateforme propose une liste déroulante de suggestions au fur et à mesure de votre saisie, ce qui facilite la navigation même si vous ne connaissez pas exactement la terminologie médicale française.

Pour un étudiant en bonne santé cherchant son premier médecin traitant, la recherche «médecin généraliste» suivie de votre ville est le point de départ naturel. Mais Doctolib couvre l'ensemble des spécialités médicales et para-médicales. Voici les recherches les plus fréquentes pour les étudiants étrangers :

**En médecine courante** : médecin généraliste pour la santé générale et le suivi courant, dermatologue pour l'acné, les allergies cutanées ou les problèmes de peau liés au changement climatique, gynécologue pour le suivi contraceptif et gynécologique, ophtalmologue pour une consultation de vue et renouvellement de lunettes ou lentilles, ORL pour les problèmes d'oreilles ou de gorge persistants.

**En santé mentale** : psychiatre (médecin spécialiste remboursé par la CPAM) pour les troubles anxieux, dépressifs ou les diagnostics complexes, psychologue clinicien pour un accompagnement thérapeutique (partiellement remboursé via le dispositif Mon Soutien Psy depuis 2022), psychomotricien pour certains troubles fonctionnels.

**En paramédical** : kinésithérapeute après une blessure sportive ou pour des douleurs musculaires et articulaires, orthophoniste pour des troubles du langage, infirmier pour des soins à domicile prescrits (injections, pansements, bilans sanguins en déplacement).

La localisation peut être saisie comme une ville, un code postal, un arrondissement parisien ou le nom d'un quartier. Le rayon de recherche est ajustable dans les filtres avancés. Pour des spécialités rares (pédopsychiatre, endocrinologue spécialisé en diabétologie, chirurgien particulier), il peut être nécessaire d'élargir considérablement le rayon de recherche ou de chercher dans les grandes villes proches.

## Utiliser finement les filtres de recherche

Les filtres avancés de Doctolib sont la clé d'une recherche efficace et adaptée à vos besoins spécifiques. Ils permettent d'éliminer rapidement les praticiens qui ne correspondent pas à vos contraintes et de concentrer votre analyse sur les options réellement pertinentes.

Le filtre **«Disponibilité»** est le plus immédiatement utile selon votre urgence : «Aujourd'hui», «Cette semaine» ou «Dans les 3 prochains jours» pour les situations semi-urgentes. Si vous avez de la flexibilité, ne filtrez pas sur la disponibilité et laissez Doctolib vous montrer toutes les options, parfois avec des créneaux libérés très rapidement suite à des annulations de dernière minute.

Le filtre **«Secteur conventionnel»** détermine les tarifs et vos remboursements. Le secteur 1 applique les tarifs encadrés (26,50 € pour une consultation de généraliste) avec remboursement maximal par la CPAM. Le secteur 2 permet des dépassements d'honoraires partiellement remboursables selon votre mutuelle. Pour un étudiant avec un budget contraint, cocher «Secteur 1» est une précaution budgétaire sage.

Le filtre **«Langues parlées»** est souvent sous-utilisé malgré son intérêt majeur pour les étudiants internationaux. Renseigner votre langue principale (anglais, arabe, espagnol, mandarin, portugais, russe, et bientôt d'autres) peut faire la différence entre une consultation stressante où vous devez chercher vos mots et une consultation fluide dans une langue maîtrisée. Pour des consultations sensibles comme la santé mentale ou la gynécologie, consulter dans sa langue maternelle améliore la qualité de la communication médicale et réduit l'incompréhension potentielle.

Le filtre **«Médecin traitant accepté»** est essentiel pour trouver un médecin prêt à vous prendre comme patient déclaré. Sans ce filtre, vous pouvez être vous retrouver à explorer des profils de médecins complets qui ne prennent plus de nouveaux patients traitants, perdant un temps précieux.

Le filtre **«Type de consultation»** vous permet de distinguer les consultations en cabinet (consultation physique standard), les téléconsultations vidéo (à partir de chez vous) et les visites à domicile (disponibles chez certains généralistes et infirmiers). La téléconsultation est une option particulièrement appréciée pendant les périodes d'examens ou lorsqu'une simple question ou un renouvellement d'ordonnance ne nécessite pas un déplacement.

## Comprendre l'affichage des créneaux et choisir son horaire

L'affichage des disponibilités sur Doctolib utilise un calendrier interactif avec des cases horaires sur fond coloré. Chaque case représente un créneau disponible. La navigation entre les semaines se fait avec les flèches directionnelles. Cliquer sur une case la sélectionne et ouvre le formulaire de réservation.

Les distinctions entre créneaux «Nouveau patient», «Patient existant» ou «Urgence» sont importantes à respecter. Le créneau «Nouveau patient» est alloué à une durée de consultation plus longue (souvent 20 à 30 minutes) pour permettre au médecin de prendre connaissance de votre situation globale. Si vous sélectionnez ce créneau alors que vous avez déjà consulté ce médecin, vous «volez» une plage longue qui réduira le temps disponible pour les vrais nouveaux patients. À l'inverse, si vous êtes bien un nouveau patient et sélectionnez un créneau «Patient existant» de 10 minutes, votre consultation pourrait être interrompue prématurément.

Les créneaux affichés très tôt (parfois 6 heures ou 7 heures du matin) chez certains praticiens sont des créneaux dits «de convenance» permettant à des patients qui travaillent ou étudient d'éviter les heures de cours ou de travail. Pour les étudiants dont l'emploi du temps varie d'une semaine à l'autre, les options de fin de journée (après 17h) ou du samedi matin méritent une recherche spécifique avec des filtres temporels dans les options avancées.

Le **motif de consultation** est demandé lors de la réservation sur la quasi-totalité des profils. Ce champ, parfois présenté comme une liste déroulante prédéfinie par le médecin, sometimes comme un champ libre, conditionne la durée allouée au rendez-vous. Les intitulés courants sont «Première consultation», «Consultation de suivi», «Renouvellement d'ordonnance», «Certificat médical», «Vaccination», «Bilan de santé annuel», «Résultats d'examens» ou «Urgence relative». Choisir le bon motif respecte l'organisation du cabinet et garantit que le médecin accordera suffisamment de temps à votre consultation.

## Le formulaire de réservation et la confirmation

Une fois le créneau sélectionné, le formulaire de réservation s'affiche en plusieurs étapes. Si vous êtes connecté à votre compte Doctolib, la plupart des champs sont pré-remplis avec vos informations d'identité. Certains praticiens demandent des informations supplémentaires pour un premier rendez-vous.

La question relative à votre **couverture maladie** (CPAM, mutuelle) permet au cabinet d'anticiper les modalités de facturation. Si vous bénéficiez du tiers payant (dispense d'avance de frais), cochez l'option correspondante. Le tiers payant est disponible pour les bénéficiaires de la CSS (Complémentaire Santé Solidaire), pour certaines mutuelles qui ont signé des conventions avec les praticiens, et pour les titulaires de la carte AME.

La possibilité d'ajouter un **commentaire libre** au rendez-vous est à utiliser sans hésitation. Notez vos inquiétudes principales, les symptômes qui durent depuis longtemps, les médicaments que vous prenez. Le médecin ne lira pas nécessairement ce commentaire avant la consultation, mais certains praticiens organisés le consul tand avant de vous recevoir, ce qui améliore la qualité de l'échange.

Un **récapitulatif complet** s'affiche avant la confirmation finale : praticien, spécialité, adresse exacte du cabinet, date, heure, motif, type de consultation. Vérifiez systématiquement l'adresse : certains médecins ont plusieurs cabinets ou ont changé d'adresse sans mettre à jour leur profil immédiatement. En cas de doute sur l'adresse, confirmez directement avec le cabinet par téléphone.

## Rappels automatiques et gestion du rendez-vous confirmé

Immédiatement après la confirmation, Doctolib envoie un e-mail et un SMS récapitulatifs avec un lien unique pour modifier ou annuler le rendez-vous. Conservez cet e-mail dans un dossier accessible : si vous devez annuler ou reprogrammer, ce lien est la solution la plus rapide.

Les rappels automatiques de Doctolib incluent généralement un rappel 24 heures avant et un deuxième rappel 2 à 4 heures avant. Vous pouvez personnaliser ces rappels dans les paramètres de notification de votre compte : activez les deux canaux (e-mail et SMS) si votre emploi du temps est chargé. Pour les rendez-vous pris plusieurs semaines à l'avance (notamment chez les spécialistes), la notification à 48 heures avant peut être configurée dans les paramètres avancés.

Certains praticiens envoient un lien de confirmation de présence intégré dans le rappel. En cliquant dessus, vous signalez au cabinet que vous serez bien présent, ce qui leur permet de libérer le créneau pour un autre patient si vous annulez au dernier moment. Un cabinet qui note que vous ne confirmez jamais votre présence peut éventuellement vous contacter directement pour s'assurer que vous serez là.

L'intégration avec **Google Calendar ou Apple Calendar** via le bouton «Ajouter à mon agenda» dans l'e-mail de confirmation est une fonctionnalité simple mais efficace pour éviter les oublis. Le rendez-vous est ajouté avec l'adresse du cabinet, ce qui ouvre directement Google Maps depuis l'événement calendrier le jour J.

## Préparer sa consultation pour en tirer le meilleur parti

La durée moyenne d'une consultation de médecine générale en France est de 15 à 20 minutes. Ce temps passe très vite, et un étudiant qui arrive sans préparation risque de repartir avec la moitié de ses questions non traitées. Une préparation rigoureuse transforme une consultation ordinaire en un échange médical de qualité.

**Rassemblez vos documents médicaux** avant la consultation. Si vous avez des antécédents importants (chirurgie, hospitalisation, maladies chroniques diagnostiquées dans votre pays d'origine), ayez des documents ou des photos de vos dossiers médicaux. Si vous prenez des médicaments régulièrement, apportez la boîte ou notez le nom de la molécule active avec son dosage précis, car les noms commerciaux varient d'un pays à l'autre. Un médicament courant en Chine, au Brésil ou au Maroc peut avoir un nom complètement différent en France ou ne pas être commercialisé.

**Préparez votre liste de questions** en les priorisant. Les consultations avec un médecin traitant généraliste permettent théoriquement d'aborder plusieurs points si le médecin dispose du temps. Mais structurez votre consultation en commençant par le problème le plus urgent ou le plus préoccupant. Dites clairement au médecin dès le début combien de points vous souhaitez aborder : «J'ai trois choses à vous demander aujourd'hui, si vous avez le temps.»

**Préparez vos documents administratifs** : carte Vitale (ou attestation de droits Ameli téléchargeable en PDF depuis votre espace ameli.fr), pièce d'identité, carte de mutuelle complémentaire. Sans carte Vitale, vous devrez payer la consultation en avance et demander le remboursement manuellement à la CPAM via une feuille de soins. Certains médecins refusent de traiter les feuilles de soins papier et vous redirigeront directement vers la CPAM.

**La barrière linguistique** : si vous ne parlez pas encore couramment le français, n'hésitez pas à préparer une fiche écrite avec vos symptômes en français (vous pouvez utiliser un traducteur automatique en vérifiant la traduction). Avoir ce document écrit permet au médecin de comprendre rapidement sans que vous ayez à articuler des termes médicaux dans une langue étrangère. Certains médecins utilisent eux-mêmes des traducteurs automatiques ou des gestes pour faciliter la communication, mais une fiche préparée représente toujours un avantage.

## Le module de questionnaire pré-consultation

Chez des praticiens qui activent cette fonctionnalité, Doctolib envoie automatiquement un questionnaire quelques jours avant votre rendez-vous. Ce questionnaire, adapté à la spécialité du praticien, pose des questions sur vos symptômes actuels, leur durée, leur intensité, votre historique médical pertinent et vos consommations de médicaments. Le praticien reçoit vos réponses avant la consultation.

Pour les étudiants, ce questionnaire est à remplir avec précision et honnêteté. Il n'est pas une formalité administrative mais un outil diagnostic. Mentionner un symptôme dans ce formulaire qui vous semblerait mineur peut attirer l'attention du médecin sur un point qu'il n'aurait pas valorisé autrement. Les questions sur la consommation d'alcool, de tabac, de drogues récréatives ou sur l'activité sexuelle peuvent être posées dans ce formulaire : répondez honnêtement, vos réponses sont confidentielles et couverte par le secret médical.

Les spécialités comme la psychiatrie, la gynécologie ou la dermatologie proposent des questionnaires particulièrement détaillés. Un questionnaire psychiatrique peut inclure des échelles standardisées (PHQ-9 pour la dépression, GAD-7 pour l'anxiété) qui permettent au médecin d'avoir un score objectif avant même de vous rencontrer. Répondre sérieusement à ces outils accélère le diagnostic et améliore la qualité de la prise en charge.

## Gérer ses rendez-vous passés et le dossier patient Doctolib

Votre compte Doctolib conserve l'historique de tous vos rendez-vous, passés et futurs. Cet espace, accessible via «Mon espace» ou «Mes rendez-vous», inclut les informations de chaque consultation : praticien, date, motif, type de consultation. Vous pouvez également accéder au profil du praticien consulté depuis cet historique pour reprendre rendez-vous facilement.

Le **dossier médical partagé Doctolib** centralise les documents que vous avez téléversés : ordonnances photographiées, résultats d'analyses, comptes-rendus de consultation transmis par les praticiens via la plateforme. Ce dossier numérique ne remplace pas le Dossier Médical Partagé (DMP) géré par la CPAM mais le complémente efficacement pour les professionnels qui utilisent Doctolib.

La fonctionnalité **«Mes documents»** vous permet de stocker et d'organiser vos documents médicaux. En photographiant chaque ordonnance, résultat de laboratoire ou compte-rendu médical, vous constituez progressivement un dossier numérique personnel qui vous accompagnera tout au long de votre séjour en France. Si vous perdez une ordonnance papier, la photo dans votre Doctolib peut servir de référence pour une reconstitution.

La **messagerie sécurisée Doctolib** est disponible chez les praticiens qui l'ont activée. Elle permet d'envoyer des messages courts non urgents entre deux consultations : demander une clarification sur une ordonnance, signaler un effet secondaire apparu après une prise de médicament, obtenir une confirmation que vos résultats sont normaux. Les médecins ne sont pas obligés de répondre rapidement à la messagerie, et certains ne l'utilisent jamais. Ne l'utilisez jamais pour des urgences.

## Situations spéciales et cas fréquents pour les étudiants

**Renouvellement de contraception** : si vous prenez une contraception hormonale (pilule, patch, anneau) et avez besoin d'un renouvellement, votre médecin traitant peut le faire via une consultation courte. Certains proposent le renouvellement par téléconsultation pour éviter le déplacement. Apportez votre ancienne ordonnance ou notez précisément le nom de la pilule et son dosage. En cas de premier accès à la contraception en France, le médecin peut prescrire uniquement après un examen gynécologique ; dans ce cas, optez pour un créneau de première consultation.

**Certificat médical pour le sport universitaire** : si vous souhaitez rejoindre une association sportive ou passer un BPJEPS, un DU sport-santé ou simplement avoir accès à une salle de sport universitaire sans certificat antérieur, votre médecin traitant réalise une consultation rapide comprenant un examen cardiovasculaire de base et vous remet le certificat. Ce service entre dans le cadre d'une consultation normale remboursée.

**Vaccination ou mise à jour vaccinale** : en arrivant en France pour des études dans le domaine de la santé (médecine infirmière, pharmacie, etc.), certaines vaccinations sont obligatoires (hépatite B, grippe). Même hors de ces filières, des mises à jour vaccinales peuvent être recommandées. Sur Doctolib, filtrez les cabinets médicaux et certains centres de santé qui proposent des consultations dédiées à la vaccination avec le motif «Vaccination».

**Soins après accident** : si vous avez subi un accident bénin (entorse, chute, blessure superficielle), votre médecin traitant est le premier interlocuteur. Il peut prescrire des radios, des examens complémentaires et un arrêt de travail ou arrêt maladie si vous travaillez en parallèle de vos études. Si le cabinet est complet, les urgences de l'hôpital le plus proche (service des urgences) traitent tous les blessés sans rendez-vous et sans frais supplémentaires au-delà du ticket modérateur.

## Témoignages d'étudiants

**Sara Benmoussa, 24 ans, en master d'économie, arrivée du Maroc** : «La première fois, j'ai eu peur de me tromper de motif de consultation. J'ai finalement choisi «Première consultation» et écrit dans les commentaires que j'avais une douleur à la gorge persistante et des questions sur ma protection maladie. Le médecin a tout pris en charge en 20 minutes. Je comprends maintenant pourquoi les Français utilisent tous Doctolib.»

**Lucas Pereira, 22 ans, en licence de chimie, arrivé du Brésil** : «Ce qui m'a le plus aidé, c'est le filtre 'Langues parlées'. J'ai trouvé un ophtalmologue qui parle portugais dans ma ville. La consultation s'est faite à moitié en portugais, à moitié en français. C'était tellement plus rassurant pour parler de quelque chose d'aussi important que ma vue.»

**Meiying Zhang, 25 ans, en doctorat de linguistique, originaire de Chine** : «Le questionnaire pré-consultation que m'a envoyé mon psychiatre m'a permis de préparer la consultation de manière très structurée. J'ai répondu à toutes les questions en prenant le temps de chercher les bons termes médicaux en français. Le médecin connaissait déjà ma situation quand je suis arrivée dans son cabinet.»

## Questions fréquentes sur la prise de rendez-vous

**Q : Peut-on prendre rendez-vous pour plusieurs consultations différentes le même jour ?**
Oui, à condition que les cabinets soient accessibles géographiquement et que les horaires ne se chevauchent pas. Pour les rendez-vous avec des examens (prise de sang le matin, consultation de résultats l'après-midi), cela est courant et pratique. Veillez à prévoir des marges de temps suffisantes entre les rendez-vous en tenant compte des délais de transport.

**Q : Que faire si Doctolib ne trouve aucun créneau disponible ?**
Il existe plusieurs solutions complémentaires. Élargissez le rayon de recherche géographique. Désactivez les filtres trop restrictifs (secteur, langue). Inscrivez-vous sur la liste d'attente du praticien si cette fonctionnalité est disponible sur son profil. Consultez le site propre du cabinet qui peut afficher des créneaux non synchronisés avec Doctolib. Si c'est urgent, appelez directement le cabinet : certains médecins gardent des créneaux d'urgence non publiés sur Doctolib.

**Q : Peut-on prendre rendez-vous sans numéro de Sécurité sociale ?**
Oui. Le numéro de Sécurité sociale n'est pas exigé pour réserver sur Doctolib. Il sera demandé lors de la consultation physique pour la facturation. Si vous n'avez pas encore reçu votre numéro définitif (le délai peut être de plusieurs mois pour les étudiants étrangers nouvellement arrivés), vous pouvez consulter et payer en avance, puis demander le remboursement à la CPAM ultérieurement avec votre feuille de soins.

**Q : Combien de temps à l'avance peut-on prendre rendez-vous sur Doctolib ?**
Les créneaux sont généralement disponibles de 1 à 3 mois à l'avance selon les praticiens. Certains spécialistes très demandés ouvrent leur agenda 3 à 6 mois à l'avance. Doctolib vous permet de naviguer dans les semaines disponibles pour trouver la première date correspondant à vos préférences.

**Q : Que faire si le médecin tente de me facturer plus que le tarif affiché sur Doctolib ?**
Un médecin en secteur 1 qui pratique un dépassement d'honoraires non justifié est en infraction avec sa convention. Vous pouvez refuser de payer le dépassement ou le payer sous réserve d'un litige, puis signaler la situation à votre CPAM. La CPAM dispose de procédures de médiation avec les praticiens. Doctolib permet aussi de signaler les cas de surfacturation via son service client.

**Q : Un médecin peut-il annuler un rendez-vous sans prévenir ?**
Les cabinets médicaux peuvent annuler des rendez-vous en cas d'urgence, de maladie du praticien ou d'imprévu. Doctolib envoie automatiquement une notification de l'annulation dès que le cabinet la saisit dans le système. Dans ce cas, Doctolib propose généralement des créneaux alternatifs disponibles chez le même praticien ou chez des praticiens proches.

**Q : Comment récupérer une ordonnance si je n'ai pas pu l'imprimer lors de la consultation ?**
De plus en plus de médecins utilisent les ordonnances numériques (e-ordonnances) transmises directement dans votre dossier Doctolib ou par e-mail. Si vous avez perdu votre ordonnance papier, contactez le cabinet : ils peuvent en générer un duplicata sous quelques jours. En cas d'urgence (médicament en cours et stock épuisé), la pharmacie peut parfois vous délivrer une petite quantité d'un médicament de traitement chronique en attendant une nouvelle ordonnance.

**Q : La prise de rendez-vous sur Doctolib garantit-elle la qualité du praticien ?**
Doctolib est une plateforme de prise de rendez-vous, pas un organisme de certification de la qualité médicale. Tous les praticiens référencés sont légalement inscrits à leur Ordre professionnel, ce qui constitue une garantie de base. Pour évaluer la qualité d'un praticien, consultez les avis sur Doctolib (uniquement de patients ayant réellement consulté), les recommandations de votre réseau, et vérifiez si le médecin est rattaché à un établissement hospitalier universitaire ou à une maison de santé reconnue.

## Ressources utiles

- [doctolib.fr](https://www.doctolib.fr) : Plateforme de prise de rendez-vous médicaux
- [ameli.fr – Remboursements et droits](https://www.ameli.fr/assure/remboursements) : Comprendre les taux de remboursement selon votre situation
- [service-public.fr – Accès aux soins](https://www.service-public.fr/particuliers/vosdroits/N430) : Informations officielles sur vos droits d'accès aux soins en France
- [Mon Soutien Psy](https://www.monpsy.sante.gouv.fr) : Dispositif public de remboursement des séances de psychologue clinicien
`;

await patch('57f77520-86cd-4f05-acf1-507d9fee5de4', L2);
