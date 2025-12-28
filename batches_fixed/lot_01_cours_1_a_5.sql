-- ==========================================
-- LOT 1 : Cours 1 à 5
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 1 ---

-- COURS 2 : La procédure "Études en France"
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'e2d1c0b9-a8f7-4654-b3c2-d1e0f9a8b7c6',
  'La procédure "Études en France" : Votre guide Campus France',
  'procedure-etudes-en-france-campus-france',
  'Ce cours est un guide exhaustif pour les étudiants internationaux qui doivent passer par la procédure "Études en France" de Campus France. Nous vous accompagnerons pas à pas, de la création de votre compte à la préparation de l''entretien pédagogique, en passant par la sélection de vos formations et la soumission de votre dossier. Comprendre cette plateforme et ses exigences est vital, car elle est le point de passage obligé pour l''obtention de votre visa étudiant dans de nombreux pays. Maîtrisez chaque étape pour maximiser vos chances de succès et réaliser votre rêve d''étudier en France.',
  'Guide complet Campus France : création de compte,
  panier de formations,
  dossier,
  entretien. Réussissez votre visa !',
  'integration_administrative',
  'intermediaire',
  'fr',
  'https://images.unsplash.com/photo-1523050854805-4c6e94e50871?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D',
  '["Maîtriser la création et la gestion de son compte Campus France", "Savoir constituer un panier de formations pertinent", "Préparer un dossier de candidature complet et attrayant", "Réussir l''entretien pédagogique Campus France"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5,
  100,
  500,
  4,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 2
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1d2c3-b4a5-4789-a0b1-c2d3e4f5a6b7',
  'e2d1c0b9-a8f7-4654-b3c2-d1e0f9a8b7c6',
  'Créer son compte Campus France',
  '# Créer son compte Campus France

## Pourquoi c''est important ?

La création de votre compte sur la plateforme "Études en France" de Campus France est la première pierre angulaire de votre projet d''études en France. Pour les ressortissants de nombreux pays, c''est une étape obligatoire et incontournable pour obtenir un visa étudiant de long séjour. Ce compte est votre tableau de bord personnel, le lieu où vous allez construire votre parcours universitaire, échanger avec les universités, et finalement, initier votre demande de visa. Toute erreur ou manque de rigueur à ce stade initial peut entraîner des retards significatifs, voire le rejet de votre dossier. C''est pourquoi maîtriser cette étape est absolument fondamental.


-   Comprendre le rôle de Campus France dans la procédure "Études en France".
-   Identifier les informations essentielles nécessaires à l''inscription.


Campus France est l''agence nationale française pour la promotion de l''enseignement supérieur, l''accueil et la mobilité internationale. La procédure "Études en France" est une démarche dématérialisée qui centralise toutes les candidatures pour de nombreux pays. C''est un guichet unique qui facilite les échanges entre les candidats, les établissements d''enseignement supérieur et les services consulaires. C''est la porte d''entrée administrative de votre aventure française.





-   **Adresse e-mail valide et professionnelle** : C''est votre principal moyen de communication. Vérifiez-la régulièrement.
-   **Pièce d''identité** : Passeport ou carte d''identité nationale, avec les informations personnelles exactes.
-   **Parcours scolaire et universitaire** : Dates d''obtention des diplômes, noms des établissements, relevés de notes, attestations de réussite.
-   **Connexion internet stable** : Pour éviter les coupures pendant l''enregistrement.

### 2. Accéder à la plateforme "Études en France"

Rendez-vous sur le site de Campus France dédié à la procédure "Études en France".

-   **Localisation de votre espace Campus France** : Chaque pays ayant la procédure "Études en France" possède un portail spécifique (ex: Campus France Algérie, Campus France Maroc, etc.). Assurez-vous d''accéder au portail correspondant à votre pays de résidence.
-   **Lien direct** : Le plus souvent, il s''agit de `https://pastel.diplomatie.gouv.fr/etudesenfrance/` suivi de l''identifiant de votre pays, ou accessible via le site général de Campus France de votre pays.



#### a) Cliquer sur "Je crée mon dossier" ou "Je m''inscris"
Cherchez le bouton ou le lien correspondant à la création d''un nouveau compte.

#### b) Remplir le formulaire d''identification
-   **Validation du captcha** : Pour prouver que vous n''êtes pas un robot.

#### c) Recevoir l''e-mail de confirmation
Après avoir rempli le formulaire, un e-mail de confirmation avec un lien d''activation vous sera envoyé.
-   **Vérifiez votre boîte de réception et vos spams** : L''e-mail peut parfois s''y trouver.
-   **Cliquez sur le lien d''activation** : Ceci validera votre inscription et vous permettra d''accéder à votre espace personnel.

-   **Complétez votre profil** : Remplissez toutes les sections (informations personnelles, parcours scolaire, compétences linguistiques, expériences professionnelles). Plus votre profil est complet et précis, mieux c''est.


-   **Passeport ou pièce d''identité nationale** (scan couleur, bonne qualité).
-   **Tous vos diplômes** (du baccalauréat/équivalent jusqu''au dernier obtenu) et leurs relevés de notes.
-   **Photos d''identité** récentes.


-   **Vérifiez l''orthographe et la cohérence** : Toutes les informations doivent correspondre exactement à vos documents officiels.
-   **Ne mentez jamais** : Toute fausse déclaration peut entraîner l''annulation de votre candidature et des conséquences graves.
-   **Sauvegardez vos identifiants** : Gardez votre nom d''utilisateur et mot de passe dans un endroit sûr.




-   🔗 [Ministère de l''Europe et des Affaires Étrangères : Guide pour les étudiants étrangers](https://www.diplomatie.gouv.fr/fr/venir-en-france/etudier-en-france/article/etudiants-etrangers-toutes-les-informations-utiles-pour-vos-demarches-en-ligne) - Informations générales pour les étudiants étrangers.
-   🔗 [Service-Public.fr : L''entrée en France des étudiants étrangers](https://www.service-public.fr/particuliers/vosdroits/F2753) - Aperçu légal de l''entrée en France.
-   🔗 [ANEF : Guide pour les étudiants étrangers](https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/etudiants) - Bien que pour après l''arrivée, utile pour comprendre le parcours global.


La création de votre compte Campus France est une étape primordiale et obligatoire pour de nombreux étudiants internationaux. Elle exige rigueur et attention aux détails. En préparant vos documents, en remplissant précisément votre profil et en respectant les consignes, vous poserez les bases solides de votre candidature. Ne sous-estimez jamais l''importance de cette première étape pour garantir un parcours fluide vers vos études en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '0e1d2c3b-4a5f-4890-a1b2-c3d4e5f6a7b8',
  'e2d1c0b9-a8f7-4654-b3c2-d1e0f9a8b7c6',
  'Remplir son panier de formations',
  '# Remplir son panier de formations

## Pourquoi c''est important ?

Le "panier de formations" est le cœur de votre candidature sur la plateforme Campus France. C''est ici que vous allez sélectionner les programmes d''études qui correspondent à vos ambitions et à votre parcours. Ce choix est stratégique : il doit être pertinent, réaliste et bien argumenté pour convaincre les établissements français. Un panier mal construit, avec des formations incohérentes ou inadaptées, peut non seulement entraîner des refus, mais aussi donner une image négative de votre projet. C''est une étape cruciale qui détermine quelles portes universitaires s''ouvriront à vous en France.


-   Comprendre la logique derrière la construction d''un panier de formations.


Une fois votre profil créé et validé sur Campus France, l''étape suivante consiste à explorer et sélectionner les formations auxquelles vous souhaitez postuler. La plateforme "Études en France" offre un catalogue étendu d''établissements et de programmes. L''objectif est de construire un panier de candidatures qui reflète la cohérence de votre projet d''études et de votre parcours académique antérieur.

🔗 [Campus France : Choisir ses études](https://www.campusfrance.org/fr/choisir-ses-etudes) - Guide pour l''orientation des études en France.



Le panier de formations n''est pas une simple liste. C''est un ensemble de choix qui doit raconter une histoire : la vôtre.

-   **Coherence** : Les formations choisies doivent s''inscrire dans une logique par rapport à vos études précédentes et votre projet professionnel futur. Évitez de postuler à des domaines trop variés sans explication solide.
-   **Nombre de vœux** : La plateforme Campus France limite généralement le nombre de vœux (souvent entre 3 et 7 selon le niveau d''études et le type de procédure). Utilisez-les judicieusement.



-   **Mots-clés pertinents** : Entrez des mots-clés liés à votre domaine d''études.
    -   **Coordonnées de l''établissement** (pour d''éventuelles questions spécifiques).


#### b) Identifier les formations "Connectées" et "Non Connectées"
-   **Formations "Connectées" (Parcours Études en France)** : Ce sont les formations directement intégrées à la procédure Campus France. La candidature se fait entièrement via la plateforme.
-   **Formations "Non Connectées"** : Certains établissements ou programmes (ex: grandes écoles d''ingénieurs ou de commerce) peuvent avoir leur propre système de candidature. Vous devrez postuler directement sur leur site et ensuite ajouter une "demande d''admission préalable" à votre dossier Campus France pour le visa.



-   **Ajout au panier** : Cliquez sur le bouton "Ajouter à mon panier" sur la fiche de formation.
-   **Priorisation** : Sur certains niveaux d''études (ex: Licence 1), vous pourriez avoir à classer vos vœux par ordre de préférence. Réfléchissez bien à cette priorité, car elle peut impacter l''étude de votre dossier.
-   **Personnalisation des lettres de motivation** : Chaque vœu nécessite une lettre de motivation spécifique et adaptée à la formation et à l''établissement. Ce n''est pas le moment de faire du copier-coller ! Mettez en avant ce qui vous attire dans CE programme, pourquoi vous êtes le candidat idéal, et comment il s''inscrit dans votre projet.


-   **Relevés de notes** de toutes vos années d''études supérieures.


-   **Faites des recherches approfondies** : Ne vous contentez pas du titre. Lisez attentivement le programme, les débouchés, l''esprit de l''établissement.
-   **Demandez l''avis de professionnels** : Si possible, parlez à des anciens élèves, des professeurs ou des conseillers d''orientation.
-   **N''attendez pas le dernier moment** : La constitution du panier de formations est un processus qui demande réflexion et temps.


-   **Sous-estimer l''importance du niveau de français/anglais** : Si une formation est enseignée en français, un bon niveau est essentiel, et vice-versa.


-   🔗 [Campus France : Mon espace "Études en France"](https://pastel.diplomatie.gouv.fr/etudesenfrance/) - Votre portail personnel pour gérer vos candidatures.
-   🔗 [Ministère de l''Enseignement Supérieur : Offre de formation](https://www.enseignementsup-recherche.gouv.fr/fr/l-offre-de-formation-de-l-enseignement-superieur-francais-60074) - Pour une vision globale de l''offre de formation en France.
-   🔗 [ONISEP : Les études après le Bac](https://www.onisep.fr/Choisir-mes-etudes/Apres-le-bac) - Ressource utile pour comprendre le système éducatif français et l''orientation.
-   🔗 [Charte pour la qualité de l''accueil des étudiants étrangers](https://www.enseignementsup-recherche.gouv.fr/sites/default/files/media/2021/07/06/2021-07-06-charte-accueil-etudiants-etrangers.pdf) - Pour comprendre l''engagement des établissements.


La constitution de votre panier de formations sur Campus France est une étape stratégique. Elle requiert une recherche approfondie, une cohérence de projet et une personnalisation de chaque candidature. En suivant ces conseils, vous augmenterez significativement vos chances d''être accepté dans les formations de votre choix et de concrétiser votre projet d''études en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '1f2e3d4c-5b6a-4901-b2c3-d4e5f6a7b8c9',
  'e2d1c0b9-a8f7-4654-b3c2-d1e0f9a8b7c6',
  'Soumettre le dossier de candidature',
  '# Soumettre le dossier de candidature

## Pourquoi c''est important ?

La soumission de votre dossier de candidature sur Campus France est l''acte final de la première phase de votre processus d''admission. C''est le moment où vous officialisez votre intérêt pour les formations choisies et où vous transmettez l''ensemble des éléments qui permettront aux commissions pédagogiques d''évaluer votre profil. Un dossier incomplet, mal organisé ou soumis en dehors des délais peut entraîner un refus pur et simple, indépendamment de la qualité de votre parcours. Cette étape exige une vérification minutieuse et un respect strict des consignes pour garantir que votre candidature soit étudiée dans les meilleures conditions.


-   Identifier tous les éléments constitutifs d''un dossier de candidature complet.
-   Maîtriser les actions post-soumission et l''importance du suivi.


Une fois votre profil entièrement renseigné, vos formations choisies et vos lettres de motivation rédigées, il est temps de finaliser votre dossier. La procédure "Études en France" est conçue pour être claire, mais la quantité d''informations et de documents peut être impressionnante. Une approche méthodique est essentielle pour éviter les erreurs de dernière minute.




Avant de cliquer sur "Soumettre", prenez le temps de passer en revue chaque section de votre dossier.

-   Vérifiez l''historique de votre parcours scolaire et universitaire : dates, noms des établissements, diplômes, moyennes.

-   **Nommage des fichiers** : Donnez des noms clairs à vos fichiers (ex: "Passeport-NOM-Prénom.pdf", "Releve-Notes-Licence3-NOM-Prénom.pdf").
-   **Traductions assermentées** : Si vos documents ne sont pas en français ou en anglais, assurez-vous d''avoir des traductions assermentées par un traducteur agréé. Téléversez l''original et la traduction.

-   **Personnalisation** : Chaque lettre doit être spécifiquement adaptée à la formation et à l''établissement visé.
-   **Cohérence du projet** : Assurez-vous que vos lettres de motivation présentent un projet d''études et professionnel cohérent et convaincant.



-   **Preuve de paiement** : Conservez précieusement l''attestation ou le reçu de paiement, il sera demandé.




-   **Bouton "Je soumets"** : Cherchez le bouton ou le lien qui vous permet de soumettre définitivement votre dossier.




-   **Faites relire vos lettres** : Un regard extérieur peut détecter des erreurs que vous n''auriez pas vues.
-   **Soyez patient après la soumission** : Le traitement de votre dossier et l''envoi aux établissements prend du temps.


-   **Soumettre un dossier incomplet** : C''est la cause la plus fréquente de refus ou de retard.
-   **Ne pas vérifier le statut de son dossier** : Suivez régulièrement l''évolution de votre candidature sur votre espace Campus France.
-   **Téléverser des documents inappropriés** : Chaque section a une finalité précise. Par exemple, ne téléversez pas votre CV dans la section "Passeport".


-   🔗 [Agence Nationale de la Recherche (ANR) : Guide sur l''assermentation](https://anr.fr/fr/guide-des-traductions-assermentees/) - Informations sur les traductions certifiées.
-   🔗 [Service-Public.fr : Le rôle de Campus France](https://www.service-public.fr/particuliers/vosdroits/F31590) - Comprendre l''articulation entre Campus France et le processus de visa.
-   🔗 [Ministère de l''Éducation Nationale : Les diplômes français](https://www.education.gouv.fr/les-diplomes-francais-6435) - Informations sur la reconnaissance des diplômes.


La soumission de votre dossier de candidature sur Campus France est une étape décisive. Elle requiert une relecture minutieuse de toutes les informations et documents, un respect strict des formats et des délais, ainsi que le paiement des frais de dossier. Une fois soumis, surveillez attentivement l''évolution de votre candidature. Un dossier complet et bien présenté augmentera considérablement vos chances de succès et de recevoir des propositions d''admission.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '2a3b4c5d-6e7f-4890-c1d2-e3f4a5b6c7d8',
  'e2d1c0b9-a8f7-4654-b3c2-d1e0f9a8b7c6',
  'Préparer l''entretien pédagogique',
  '# Préparer l''entretien pédagogique

## Pourquoi c''est important ?

L''entretien pédagogique est une étape obligatoire et déterminante de la procédure "Études en France" pour la plupart des pays concernés. C''est votre chance de présenter votre projet d''études et professionnel, de prouver votre motivation, et de démontrer votre niveau de français (ou d''anglais si votre formation est en anglais). Cet entretien est bien plus qu''une formalité : il est l''occasion de convaincre un représentant de Campus France de la sincérité et de la solidité de votre démarche. Un entretien mal préparé peut réduire à néant des mois de travail sur votre dossier, menant à un avis défavorable et, in fine, à un refus de visa.


-   Comprendre les objectifs de l''entretien pédagogique Campus France.


L''entretien pédagogique est conduit par un conseiller Campus France dans votre pays de résidence. Il vise à évaluer la cohérence de votre projet d''études, votre motivation, votre niveau de langue et votre connaissance du système universitaire français. Il s''agit d''un échange formel qui requiert une préparation sérieuse, au même titre qu''un entretien d''embauche.

🔗 [Campus France : L''entretien de Campus France](https://www.campusfrance.org/fr/l-entretien-de-campus-france) - Informations officielles sur l''entretien.


### 1. Comprendre les objectifs de l''entretien


-   **Cohérence de votre projet** : Comment vos études passées s''articulent avec les formations choisies et votre projet professionnel futur.
-   **Connaissance du système** : Comprenez-vous l''organisation des études en France, les diplômes, les modes d''enseignement (CM, TD, TP) ?
-   **Capacité d''adaptation** : Êtes-vous prêt(e) à vivre et étudier dans un nouvel environnement culturel et linguistique ?



-   "Présentez-vous." (Qui êtes-vous, votre parcours, vos aspirations)
-   "Parlez-moi de votre parcours académique et professionnel."

#### b) Projet d''études
-   "Pourquoi souhaitez-vous étudier en France ?" (Attractivité du système, qualité des diplômes, culture)
-   "Pourquoi avez-vous choisi ces formations en particulier ?" (Lien avec votre projet, spécificités des programmes, professeurs)
-   "Que savez-vous de l''université X ou de l''école Y ?" (Démontrez votre recherche)
-   "Quel est votre projet professionnel après l''obtention de votre diplôme ?" (Soyez réaliste et ambitieux)

-   "Comment fonctionne le système LMD (Licence, Master, Doctorat) en France ?"
-   "Qu''est-ce qu''un CM, un TD, un TP ?"
-   "Comment financez-vous vos études et votre séjour en France ?" (Justificatifs de ressources)

-   "Où comptez-vous loger en France ?"
-   "Avez-vous de la famille ou des amis en France ?"
-   "Que ferez-vous si vous n''êtes pas accepté(e) dans ces formations ?" (Ayez un plan B réaliste)


-   **Mots-clés** : Utilisez des termes spécifiques au domaine d''études et au système français.
-   **Maîtrise du français/anglais** : Révisez votre vocabulaire technique, entraînez-vous à parler. Si l''entretien est en français, montrez que vous êtes à l''aise.


-   **Votre pièce d''identité/passeport**.


-   **Simulez l''entretien** : Demandez à un ami ou un professeur de vous faire passer un entretien blanc.
-   **Tenez-vous informé(e) des actualités** : Sur la France, sur l''éducation, sur votre domaine d''études.


-   **Manque de motivation ou d''intérêt** : Un discours plat ou générique sera mal perçu.
-   **Ne pas poser de questions** : À la fin, si l''occasion vous est donnée, poser une ou deux questions pertinentes montre votre intérêt.


-   🔗 [Campus France : FAQ sur l''entretien](https://www.campusfrance.org/fr/faq-l-entretien-de-campus-france) - Réponses aux questions fréquentes.
-   🔗 [Service-Public.fr : Le système éducatif français](https://www.service-public.fr/particuliers/vosdroits/F18235) - Pour mieux comprendre l''organisation des études.
-   🔗 [Cadremploi : Réussir son entretien d''embauche](https://www.cadremploi.fr/actualites/dossier/reussir-son-entretien-d-embauche) - Bien que pour l''emploi, de nombreux conseils sont applicables à l''entretien Campus France.


L''entretien pédagogique est une étape cruciale qui met en lumière votre motivation, la cohérence de votre projet et votre niveau de langue. Une préparation minutieuse, la maîtrise de votre dossier et une communication claire sont les clés du succès. Prenez cet entretien au sérieux, entraînez-vous, et présentez votre meilleur profil pour obtenir un avis favorable et vous rapprocher de votre objectif d''études en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '3b4c5d6e-7f8a-4901-d2e3-f4a5b6c7d8e9',
  'e2d1c0b9-a8f7-4654-b3c2-d1e0f9a8b7c6',
  'Payer les frais de dossier',
  '# Payer les frais de dossier Campus France

## Pourquoi c''est important ?

Le paiement des frais de dossier Campus France est une étape administrative obligatoire qui finalise la soumission de votre candidature. Sans ce paiement, votre dossier ne sera pas examiné par les établissements, ni validé par Campus France, et vous ne pourrez pas obtenir l''attestation nécessaire pour votre demande de visa. C''est un prérequis non négociable qui, s''il n''est pas respecté dans les délais et selon les modalités précises, peut bloquer l''intégralité de votre projet d''études en France. Comprendre comment et quand payer est donc essentiel pour éviter tout désagrément.


-   Comprendre l''importance du justificatif de paiement.


Les frais de dossier correspondent aux coûts de gestion et d''examen de votre candidature par Campus France, et incluent souvent l''organisation de l''entretien pédagogique. Il est important de noter que ces frais ne sont généralement pas remboursables, même en cas de refus d''admission ou de visa. Il est donc crucial de s''assurer de votre éligibilité et de la complétude de votre dossier avant de procéder au paiement.

🔗 [Campus France : Les frais de dossier et exonérations](https://www.campusfrance.org/fr/les-frais-de-dossier-campus-france) - Page officielle sur les frais et cas d''exonération.


### 1. Connaître le montant et les cas d''exonération

Le montant des frais de dossier varie d''un pays à l''autre.


#### b) Identifier les cas d''exonération
Certains candidats peuvent être exemptés de ces frais. C''est le cas, par exemple, des boursiers du gouvernement français, des boursiers de gouvernements étrangers dont les bourses sont gérées par Campus France, ou de certains cas spécifiques (réfugiés, etc.).

🔗 [Campus France : Suis-je exonéré(e) ?](https://www.campusfrance.org/fr/faq-suis-je-exonere-des-frais-campus-france) - Guide pour les cas d''exonération.



-   C''est souvent la méthode la plus rapide et la plus simple.

-   Campus France fournira un RIB (Relevé d''Identité Bancaire) avec les coordonnées du compte à créditer.
-   **Référence** : Indiquez toujours votre numéro de dossier Campus France en référence du virement pour qu''il puisse être identifié.

-   Certains centres Campus France peuvent accepter les paiements en espèces ou par chèque, mais c''est de plus en plus rare.



-   **Validation du paiement** : Le statut de votre dossier Campus France ne passera en "Payé" que lorsque le paiement aura été enregistré et validé par leurs services. Cela peut prendre quelques jours.


-   Les justificatifs d''exonération (si vous êtes boursier).


-   **Contactez Campus France en cas de doute** : Si vous rencontrez des difficultés ou si votre paiement n''est pas validé rapidement, contactez le centre Campus France de votre pays.


-   **Faire un paiement sans référence** : Sans votre numéro de dossier, Campus France ne pourra pas l''associer à votre candidature.
-   **Ne pas conserver la preuve de paiement** : En cas de litige, c''est votre seule preuve.


-   🔗 [Ministère de l''Europe et des Affaires Étrangères : Aides financières pour études](https://www.diplomatie.gouv.fr/fr/venir-en-france/etudier-en-france/article/aides-financieres-pour-les-etudiants-etrangers) - Pour savoir si vous pouvez bénéficier d''une bourse.


Le paiement des frais de dossier Campus France est une étape administrative cruciale. Il est impératif de vérifier le montant exact pour votre pays, d''utiliser une méthode de paiement sécurisée et de conserver toutes les preuves. Anticipez les délais, surtout pour les virements bancaires, et n''hésitez pas à contacter Campus France en cas de problème. Ce paiement est la dernière étape pour que votre dossier puisse être transmis aux établissements et étudié.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 2 ---

-- COURS 3 : Valider son visa VLS-TS à l'arrivée
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4789-b0c1-d2e3f4a5b6c7',
  'Valider son visa VLS-TS à l''arrivée en France : Guide ANEF',
  'valider-visa-vls-ts-anef',
  'Ce cours est un guide essentiel pour tous les étudiants et professionnels arrivant en France avec un Visa Long Séjour valant Titre de Séjour (VLS-TS). La validation de ce visa en ligne sur la plateforme de l''ANEF est une démarche obligatoire et urgente (à faire dans les 3 mois suivant votre arrivée) pour légaliser votre séjour. Nous vous détaillerons chaque étape : de la création de votre compte ANEF à l''obtention de l''attestation de validation, en passant par l''achat du timbre fiscal. Maîtrisez cette procédure pour éviter les complications et profiter pleinement de votre installation en France.',
  'Validez votre VLS-TS sur l''ANEF en 3 mois ! Guide pas à pas : compte,
  timbre fiscal,
  attestation. Sécurisez votre séjour.',
  'integration_administrative',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1543699564-88404f2f4c39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmNpYWwlMjBwYXBlcnN8ZW58MHx8MHx8fDA%3D',
  '["Comprendre l''urgence de la validation du VLS-TS", "Maîtriser la création de compte sur la plateforme ANEF", "Savoir acheter et utiliser le timbre fiscal électronique", "Obtenir l''attestation de validation de votre visa"]'::jsonb,
  '["Avoir un VLS-TS (Visa Long Séjour valant Titre de Séjour) valide"]'::jsonb,
  4,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 3
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '4a5b6c7d-8e9f-4012-a3b4-c5d6e7f8a9b0',
  'f0e1d2c3-b4a5-4789-b0c1-d2e3f4a5b6c7',
  'Pourquoi la validation est urgente (3 mois)',
  '# Pourquoi la validation est urgente (3 mois)

## Pourquoi c''est important ?

La validation de votre Visa Long Séjour valant Titre de Séjour (VLS-TS) est la première démarche administrative impérative après votre arrivée en France. Si vous ne la réalisez pas dans les trois mois suivant votre entrée sur le territoire français, votre séjour deviendra ILLÉGAL. Cela peut entraîner de graves conséquences : impossibilité de travailler, de bénéficier de la sécurité sociale, des aides au logement, des restrictions pour voyager dans l''espace Schengen, et même des difficultés lors de futures demandes de titre de séjour ou un éloignement du territoire. Comprendre cette urgence est la clé pour démarrer votre vie en France en toute légalité et sérénité.




Le VLS-TS est un visa de long séjour (plus de 3 mois) qui a une particularité : il vaut titre de séjour pendant votre première année en France. Cependant, pour qu''il prenne cette pleine valeur juridique et vous confère tous vos droits, il doit être "validé" en ligne. Ce n''est pas une simple formalité, c''est une étape administrative indispensable qui confirme votre statut de résident légal en France pour une durée prolongée.

🔗 [OFII : Qu''est-ce que le VLS-TS ?](https://www.ofii.fr/demarches/votre-visa-long-sejour-valant-titre-de-sejour-vls-ts/) - Présentation du VLS-TS par l''Office Français de l''Immigration et de l''Intégration.




-   **Un seul document pour deux fonctions** : Le visa que vous avez obtenu dans votre pays d''origine fait office de visa d''entrée et, après validation, de titre de séjour pour votre première année.
-   **Durée limitée du visa seul** : Sans validation, votre visa n''est qu''un permis d''entrée sur le territoire français. Sa validité en tant que "titre de séjour" est conditionnée par l''accomplissement de la démarche de validation.
-   **Délai de 3 mois** : Vous disposez d''un délai impératif de trois mois à compter de votre date d''entrée en France pour réaliser cette validation en ligne. Cette date d''entrée est celle apposée sur votre passeport par la police des frontières (tampon d''entrée).


### 2. Les risques d''une non-validation ou d''un retard

Les conséquences de l''absence de validation sont lourdes et doivent être prises très au sérieux.

-   Si vous ne validez pas votre VLS-TS dans les 3 mois, votre présence en France devient irrégulière. Vous êtes alors considéré comme "sans papiers".
-   Conséquences : Risque de mesure d''éloignement du territoire, interdiction de revenir dans l''espace Schengen pour une durée déterminée.

-   **Non-affiliation à la Sécurité Sociale** : Vous ne pourrez pas vous inscrire à l''Assurance Maladie, ce qui signifie que tous vos frais de santé seront à votre charge.
-   **Difficultés pour voyager** : Voyager dans l''espace Schengen ou revenir en France depuis un autre pays peut être problématique sans un titre de séjour valide.
-   **Blocage des démarches de renouvellement** : Si vous ne validez pas votre premier VLS-TS, vous ne pourrez pas demander le renouvellement de votre titre de séjour pour l''année suivante.

🔗 [Ministère de l''Intérieur : Les conséquences d''un séjour irrégulier](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Sanctions-en-cas-de-sejour-irregulier) - Informations sur les risques.



-   **Accès à la couverture santé** : Possibilité de s''affilier à la Sécurité Sociale et de bénéficier du remboursement des frais médicaux.
-   **Libre circulation Schengen** : Vous pouvez entrer et sortir de l''espace Schengen sans difficulté.


-   Une **carte bancaire** pour l''achat du timbre fiscal (si applicable à votre situation).
-   Votre **date d''entrée** en France (le tampon sur votre passeport).


-   **Notez votre date d''entrée** : C''est le point de départ du délai de 3 mois.


-   **Confondre 3 mois calendaires et 90 jours** : Le délai est bien de 3 mois, mais il est toujours bon d''agir le plus vite possible.
-   **Ignorer les messages de rappel** : L''administration peut envoyer des rappels, mais il est de votre responsabilité de faire la démarche.
-   **Ne pas avoir d''adresse en France** : Vous devez fournir une adresse stable pour la validation.
-   **Problèmes techniques** : En cas de bug sur le site, prenez des captures d''écran et contactez l''assistance technique de l''ANEF.


-   🔗 [OFII : Questions/Réponses sur la validation](https://www.ofii.fr/demarches/votre-visa-long-sejour-valant-titre-de-sejour-vls-ts/faq/) - FAQ officielle de l''OFII.
-   🔗 [Service-Public.fr : Formalités à l''arrivée en France](https://www.service-public.fr/particuliers/vosdroits/F3024) - Liste des démarches à faire après l''arrivée.
-   🔗 [Ministère de l''Intérieur : Espace personnel sur l''ANEF](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Etrangers-en-France-deposez-votre-demande-sur-internet) - Informations sur la plateforme ANEF.
-   🔗 [Timbre Fiscal Électronique](https://www.timbres.impots.gouv.fr/) - Pour l''achat du timbre fiscal nécessaire à la validation.
-   🔗 [Conseils aux voyageurs du Ministère de l''Europe et des Affaires Étrangères](https://www.diplomatie.gouv.fr/fr/venir-en-france/tout-savoir-sur-le-visa/) - Informations sur les visas avant le départ.


La validation de votre VLS-TS en ligne dans les 3 mois suivant votre arrivée en France est une démarche administrative non seulement obligatoire, mais également urgente. C''est elle qui légalise pleinement votre séjour et vous ouvre l''accès à tous les droits (travail, santé, logement). Ne la négligez pas, anticipez et suivez scrupuleusement les étapes sur la plateforme ANEF pour une installation réussie et conforme à la loi.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '5b6c7d8e-9f0a-4012-b3c4-d5e6f7a8b9c0',
  'f0e1d2c3-b4a5-4789-b0c1-d2e3f4a5b6c7',
  'Le site ANEF : Création de compte',
  '# Le site ANEF : Création de compte

## Pourquoi c''est important ?

Le site de l''ANEF (Administration Numérique des Étrangers en France) est la plateforme officielle et unique pour la validation de votre VLS-TS. C''est une interface entièrement dématérialisée qui remplace les anciennes démarches papier. Créer votre compte ANEF est donc la première étape technique pour légaliser votre séjour après votre arrivée. Sans un compte fonctionnel, vous ne pourrez pas procéder à la validation, ce qui pourrait rendre votre séjour illégal. Maîtriser cette création de compte est fondamental pour initier toutes vos démarches administratives post-arrivée.


-   Comprendre le rôle et l''importance de la plateforme ANEF.
-   Identifier les informations et documents nécessaires pour l''inscription.


La plateforme ANEF, gérée par le Ministère de l''Intérieur, est le portail centralisé pour de nombreuses démarches concernant les étrangers en France, notamment la validation des VLS-TS. Elle est conçue pour simplifier et accélérer les procédures. La création de votre compte est une formalité simple, mais elle doit être réalisée avec précision pour éviter tout blocage futur.

🔗 [ANEF : Accueil de la plateforme](https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/) - Le point d''entrée pour toutes vos démarches en ligne.



-   **Section VLS-TS** : Sur la page d''accueil, vous verrez différentes rubriques. Cherchez celle intitulée "Je valide mon visa long séjour" ou "Validation d''un VLS-TS".
-   **Démarrer la démarche** : Cliquez sur le bouton "Je commence".


L''ANEF offre deux options pour vous connecter.

-   **Cliquez sur "Je n''ai pas de compte" ou "Créer un compte"**.
    -   Une **adresse e-mail valide** (très important, c''est votre identifiant).
-   **Validation par e-mail** : Un e-mail de confirmation avec un lien d''activation vous sera envoyé. Vous devez cliquer sur ce lien pour activer votre compte. Vérifiez bien vos spams.

-   **Qu''est-ce que FranceConnect ?** : C''est un dispositif qui vous permet de vous identifier auprès de nombreux services publics en ligne en utilisant les identifiants d''un compte existant (impots.gouv.fr, ameli.fr, l''Identité Numérique La Poste, etc.).
-   **Avantages** : Si vous avez déjà un compte sur l''un de ces services (par exemple, si vous avez déjà un numéro fiscal en France ou un compte Ameli), cela peut simplifier votre connexion.
-   **Inconvénient pour les primo-arrivants** : La plupart des étudiants internationaux n''auront pas encore accès à FranceConnect au moment de valider leur VLS-TS, car ils n''ont pas encore de numéro fiscal ou de sécurité sociale. La création d''un compte classique est donc l''option la plus courante.

🔗 [FranceConnect : Qu''est-ce que c''est ?](https://franceconnect.gouv.fr/partenaires) - Pour comprendre le fonctionnement de FranceConnect.



-   **Nom d''utilisateur et mot de passe** : Utilisez l''adresse e-mail et le mot de passe que vous avez définis.


-   Votre **passeport** pour les informations d''identité.


-   **Utilisez une adresse e-mail que vous consultez régulièrement** : Toutes les communications de l''ANEF passeront par là.
-   **Vérifiez votre boîte de réception et le dossier spam** après avoir cliqué sur "Créer un compte" pour l''e-mail d''activation.
-   **Si vous rencontrez des problèmes techniques** lors de la création du compte (page qui ne charge pas, e-mail de confirmation non reçu), essayez avec un autre navigateur ou contactez l''assistance technique (voir section ressources).


-   **Utiliser une adresse e-mail temporaire ou erronée** : Vous perdrez l''accès à votre compte.
-   **Créer plusieurs comptes** : Ne créez qu''un seul compte par personne. La multiplication des comptes peut créer des confusions et des blocages.
-   **Ne pas comprendre FranceConnect** : Si vous n''avez pas de compte existant, ne perdez pas de temps à essayer de vous connecter via FranceConnect. Créez un compte ANEF directement.


-   🔗 [ANEF : FAQ sur la création de compte](https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/aide-contact/questions-frequentes) - Section FAQ de l''ANEF, recherchez "compte".
-   🔗 [Ministère de l''Intérieur : Guide de la plateforme ANEF](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Etrangers-en-France-deposez-votre-demande-sur-internet) - Informations sur le fonctionnement de la plateforme.
-   🔗 [Gouvernement.fr : Démarches en ligne](https://www.gouvernement.fr/demarches-en-ligne) - Vue d''ensemble des démarches dématérialisées en France.


La création de votre compte sur le site ANEF est l''étape préalable indispensable pour valider votre VLS-TS. Elle est simple mais demande attention et rigueur. Utilisez une adresse e-mail fiable, un mot de passe sécurisé et suivez les instructions d''activation. Une fois votre compte opérationnel, vous pourrez entamer la procédure de validation et sécuriser votre séjour en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '6c7d8e9f-0a1b-4234-c5d6-e7f8a9b0c1d2',
  'f0e1d2c3-b4a5-4789-b0c1-d2e3f4a5b6c7',
  'Acheter le timbre fiscal en ligne',
  '# Acheter le timbre fiscal en ligne

## Pourquoi c''est important ?

L''achat du timbre fiscal électronique est une étape obligatoire et payante de la procédure de validation de votre VLS-TS. Ce timbre, dont le coût varie selon votre statut (étudiant, salarié, visiteur, etc.), est la preuve que vous vous êtes acquitté(e) des taxes dues pour l''émission de votre titre de séjour. Sans ce timbre, votre demande de validation sera bloquée et votre séjour restera irrégulier. Comprendre comment l''acheter correctement et en toute sécurité est donc essentiel pour finaliser votre démarche administrative et éviter des retards inutiles.


-   Suivre les étapes d''achat du timbre sur le site officiel.


Le timbre fiscal est une taxe due à l''État français. Auparavant vendu sous forme papier dans les bureaux de tabac, il est désormais entièrement dématérialisé et s''achète en ligne. Il est associé à votre dossier de validation et permet de prouver que vous avez réglé les droits de timbre nécessaires pour la délivrance de votre document de séjour.

🔗 [Impots.gouv.fr : Acheter un timbre fiscal électronique](https://www.timbres.impots.gouv.fr/) - Le site officiel et unique pour l''achat du timbre.



Le coût du timbre fiscal n''est pas le même pour toutes les catégories de VLS-TS.


-   **Vérifiez bien votre catégorie** sur le site de l''ANEF ou sur la page de votre VLS-TS pour connaître le montant exact à payer.


### 2. Procédure d''achat du timbre fiscal en ligne

L''achat se fait exclusivement sur le site sécurisé des impôts.

#### a) Accéder au site de l''État
-   Choisissez "Acheter un timbre électronique".

-   Cliquez sur l''option correspondant à "Titre de séjour" ou "Visa long séjour valant titre de séjour".
-   Choisissez votre situation : "Étudiant", "Salarié", "Visiteur", etc.

-   Le site affichera le montant correspondant à votre choix. Assurez-vous qu''il s''agit du bon montant.

-   Vous devrez entrer vos coordonnées (nom, prénom, adresse e-mail). Assurez-vous que l''adresse e-mail est correcte car c''est là que le timbre sera envoyé.

-   Assurez-vous d''avoir des fonds suffisants et que votre carte est activée pour les paiements en ligne.


Une fois l''achat effectué, le timbre vous sera envoyé.

-   **Utilisation** : Lors de la procédure de validation de votre VLS-TS sur le site de l''ANEF, il vous sera demandé d''entrer ce numéro de timbre fiscal. C''est à ce moment que vous l''utiliserez.




-   **Achetez le timbre juste avant la validation** : Il est mieux de l''acheter au moment où vous êtes prêt à valider votre visa sur l''ANEF pour éviter de le perdre ou de l''oublier.


-   **Acheter sur un site non officiel** : N''utilisez QUE le site `timbres.impots.gouv.fr`. Il existe des sites frauduleux qui vendent des timbres à un prix exorbitant.
-   **Ne pas recevoir l''e-mail de confirmation** : Vérifiez vos spams. Si après quelques heures vous n''avez toujours rien, contactez le support technique (voir ressources).
-   **Problème de paiement** : Assurez-vous que votre carte est autorisée pour les transactions internationales et que votre plafond n''est pas atteint.


-   🔗 [Ministère de l''Intérieur : Questions fréquentes sur l''ANEF](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Questions-frequentes-sur-la-plateforme-des-etrangers-en-France) - Peut contenir des informations sur le timbre fiscal.
-   🔗 [DGFiP (Direction Générale des Finances Publiques) : Contact](https://www.impots.gouv.fr/portail/contacts) - Si vous avez un problème avec l''achat du timbre.


L''achat du timbre fiscal électronique est une étape indispensable et payante pour la validation de votre VLS-TS. Il doit être fait sur le site officiel `timbres.impots.gouv.fr` et au montant exact correspondant à votre statut. Conservez précieusement le numéro de timbre que vous recevrez par e-mail, car il sera nécessaire pour finaliser votre démarche sur l''ANEF. Une fois ce timbre en main, vous serez prêt à passer à l''étape suivante.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '7d8e9f0a-1b2c-4345-d6e7-f8a9b0c1d2e3',
  'f0e1d2c3-b4a5-4789-b0c1-d2e3f4a5b6c7',
  'Télécharger l''attestation de validation',
  '# Télécharger l''attestation de validation

## Pourquoi c''est important ?

L''attestation de validation de votre VLS-TS est le document final qui prouve que votre séjour en France est pleinement légal. Elle confirme que votre visa long séjour vaut désormais titre de séjour. Sans cette attestation, vous ne pourrez pas justifier de votre statut auprès des administrations (CAF, Sécurité Sociale, banques, employeurs), ce qui pourrait entraîner des blocages dans toutes vos démarches d''intégration. Conserver et pouvoir présenter ce document est donc d''une importance capitale pour votre vie quotidienne et administrative en France. C''est la preuve officielle que vous avez rempli vos obligations et que vous êtes un résident en règle.


-   Comprendre la valeur juridique de l''attestation de validation.
-   Identifier les informations clés présentes sur l''attestation.


Une fois que vous avez rempli toutes les informations nécessaires sur la plateforme ANEF et que le paiement du timbre fiscal a été validé, l''administration traitera votre demande. Si tout est conforme, vous recevrez une notification vous informant que votre attestation de validation est disponible. C''est le document que vous attendiez pour officialiser votre statut.




Après avoir soumis votre demande de validation et entré le numéro du timbre fiscal, votre dossier passe en statut "En cours d''examen" ou similaire.

-   **Vérifiez votre boîte e-mail** : L''ANEF vous enverra un e-mail une fois que votre demande aura été traitée et que l''attestation sera disponible. Vérifiez également vos spams.

### 2. Téléchargement de l''attestation



-   Un bouton "Télécharger mon attestation" ou "Accéder à mes documents" sera visible.
-   L''attestation sera généralement un fichier PDF.

#### c) Vérifier les informations sur l''attestation
-   Assurez-vous que toutes les informations sont correctes : votre nom, prénom, date de naissance, nationalité, numéro de visa, date de validation, et surtout, la date de fin de validité de votre titre de séjour (qui sera la même que la fin de validité de votre VLS-TS, généralement un an après votre date d''entrée en France).
-   L''attestation comportera également un numéro d''identifiant unique et, souvent, un QR code pour la vérification.

### 3. Conservation et utilisation de l''attestation




-   **Valeur juridique** : L''attestation et votre visa collé dans votre passeport constituent votre titre de séjour pour la première année.




-   **Comprenez sa date d''expiration** : Notez la date de fin de validité et anticipez le renouvellement de votre titre de séjour à la préfecture (généralement 2 mois avant cette date).


-   **Ne pas télécharger l''attestation** : La notification par e-mail est juste une alerte. Vous devez vous connecter et la télécharger.
-   **Ne pas vérifier les informations** : Une erreur sur l''attestation (nom, date) doit être signalée immédiatement au support ANEF.
-   **Confondre l''attestation avec une carte de séjour physique** : Pour la première année, votre visa + attestation font office de titre de séjour. Une carte physique ne sera délivrée qu''au moment du renouvellement.
-   **Ne pas anticiper le renouvellement** : La date de fin de validité est inscrite dessus, c''est le point de départ pour le compte à rebours de votre prochaine démarche.


-   🔗 [ANEF : Où retrouver mon attestation ?](https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/aide-contact/questions-frequentes/validation-vls-ts-1) - Section FAQ de l''ANEF pour retrouver votre attestation.
-   🔗 [OFII : Les démarches après validation](https://www.ofii.fr/demarches/votre-visa-long-sejour-valant-titre-de-sejour-vls-ts/) - Pour comprendre ce que l''attestation vous permet de faire.
-   🔗 [Ministère de l''Intérieur : Contacter le support ANEF](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Contact-et-assistance-en-ligne-pour-les-etrangers-en-France) - En cas de problème de téléchargement ou d''erreur sur l''attestation.
-   🔗 [Ameli.fr : S''inscrire à la Sécurité Sociale](https://www.ameli.fr/assure/droits-demarches/etudes-superieures-sante/etudiant-etranger) - Vous aurez besoin de l''attestation pour cette démarche.


L''attestation de validation est la preuve de la légalité de votre séjour en France après votre VLS-TS. Elle doit être téléchargée depuis votre espace ANEF, vérifiée, et précieusement conservée sous format numérique et papier. Ce document est votre passeport pour toutes vos démarches administratives et votre intégration. Assurez-vous de l''avoir toujours à portée de main et de bien comprendre sa date de validité pour anticiper les prochaines étapes de votre vie en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '8e9f0a1b-2c3d-4456-e7f8-a9b0c1d2e3f4',
  'f0e1d2c3-b4a5-4789-b0c1-d2e3f4a5b6c7',
  'Que faire en cas de bug technique ?',
  '# Que faire en cas de bug technique ?

## Pourquoi c''est important ?

Les démarches administratives en ligne sont généralement efficaces, mais les bugs techniques peuvent survenir et causer du stress, surtout lorsque vous êtes soumis à des délais stricts comme les 3 mois pour la validation de votre VLS-TS. Un site inaccessible, un document qui ne se télécharge pas, un e-mail de confirmation qui n''arrive jamais... Ces problèmes, s''ils ne sont pas gérés correctement, peuvent compromettre la légalité de votre séjour. Savoir comment réagir face à un bug technique est donc crucial pour ne pas se laisser submerger et pour garantir que votre démarche aboutisse malgré les imprévus informatiques.


-   Savoir comment contacter l''assistance technique de l''ANEF.


La dématérialisation des démarches est une avancée, mais elle n''est pas exempte d''incidents techniques. La plateforme ANEF est une interface importante et peut, comme tout service en ligne, rencontrer des dysfonctionnements. Il est primordial d''adopter une attitude proactive et méthodique pour résoudre ces problèmes sans que cela n''impacte la régularité de votre séjour.

🔗 [ANEF : Centre d''aide et contact](https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/aide-contact) - Le point de départ pour toute aide technique.




-   **Page inaccessible ou erreur 404** : Le site ne s''affiche pas ou une page spécifique est introuvable.
-   **Echec de téléchargement/téléversement** : Un document ne charge pas ou ne s''enregistre pas.
-   **Absence d''e-mail de confirmation/validation** : Malgré une action, aucune notification n''est reçue.
-   **Blocage à une étape** : Le bouton "Suivant" ne fonctionne pas, un champ est bloqué.

-   **Videz le cache et les cookies de votre navigateur** : Cela peut résoudre des problèmes d''affichage.
-   **Changez d''heure ou de jour** : Le problème peut être temporaire (maintenance, forte affluence). Évitez les heures de pointe.



-   **Captures d''écran** : Prenez des captures d''écran claires du bug (message d''erreur, page bloquée, heure et date visibles).
-   **Notes détaillées** : Notez la date et l''heure exacte de chaque tentative, le message d''erreur précis, le navigateur utilisé, les actions que vous avez effectuées.
-   **Enregistrement vidéo** : Si le bug est complexe, une courte vidéo de l''écran peut être très utile.

### 3. Contacter l''assistance technique de l''ANEF

Si le problème persiste après vos vérifications, il est temps de solliciter de l''aide.

-   Le centre d''aide de l''ANEF (lien ci-dessous) propose une Foire Aux Questions qui peut déjà contenir la solution à votre problème.

-   L''ANEF met à disposition un formulaire de contact en ligne.
-   **Soyez précis** : Décrivez le problème en détail, les étapes que vous avez suivies, les messages d''erreur.
-   **Joignez vos preuves** : La plupart des formulaires permettent d''ajouter des pièces jointes (captures d''écran).
-   **Numéro de dossier** : N''oubliez pas d''indiquer votre numéro de dossier (identifiant de l''étranger) si vous en avez un.

#### c) Les points d''accueil numériques en préfecture
-   Si vous n''avez pas d''accès à un ordinateur ou si le problème est majeur et bloque toute votre démarche, certaines préfectures disposent de "points d''accueil numériques" avec du personnel pour vous aider. C''est une solution de dernier recours si l''assistance en ligne ne répond pas ou ne résout pas le problème.



-   Vos **preuves** (captures d''écran, notes).
-   Votre **numéro de visa** et **date d''entrée** en France.


-   **Soyez poli et patient** : L''assistance technique peut prendre du temps à répondre. Relancez si nécessaire, mais toujours de manière respectueuse.
-   **Demandez un accusé de réception** : Si vous contactez par e-mail, assurez-vous d''avoir une trace de votre démarche.
-   **Renseignez-vous auprès d''autres étudiants** : Parfois, un problème est généralisé et d''autres personnes ont déjà trouvé une solution ou ont des informations.


-   **Jeter l''éponge trop vite** : Persévérez dans vos tentatives et vos contacts avec le support.
-   **Ne pas constituer de preuves** : Sans preuve, il est difficile de prouver votre bonne foi en cas de problème devant l''administration.
-   **Créer un nouveau compte** : Évitez de créer un nouveau compte ANEF si vous avez déjà un problème sur l''ancien. C''est souvent une source de complication supplémentaire.


-   🔗 [ANEF : Guide d''utilisation (si disponible)](https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/aide-contact) - Peut contenir des instructions pour l''utilisation.
-   🔗 [Service-Public.fr : Les points d''accueil numériques](https://www.service-public.fr/particuliers/vosdroits/F34522) - Pour localiser les points d''aide dans les préfectures.
-   🔗 [Ministère de l''Intérieur : Informations sur l''ANEF](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Etrangers-en-France-deposez-votre-demande-sur-internet) - Détails sur la plateforme.
-   🔗 [CNIL : La preuve numérique](https://www.cnil.fr/fr/la-preuve-numerique-mode-d-emploi) - Pour comprendre la valeur légale des captures d''écran et autres preuves numériques.
-   🔗 [Conseils pour l''utilisation des services numériques publics](https://www.modernisation.gouv.fr/numerique/accompagner-les-usagers) - Portail du gouvernement pour l''accompagnement numérique.


Les bugs techniques sur la plateforme ANEF peuvent être frustrants, mais ils ne doivent pas compromettre la légalité de votre séjour. Face à un problème, commencez par des vérifications de base, documentez scrupuleusement le dysfonctionnement avec des preuves, puis contactez l''assistance technique de l''ANEF avec des informations claires et précises. Votre persévérance et votre méthode seront vos meilleurs atouts pour surmonter ces obstacles et valider votre VLS-TS dans les temps impartis.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 3 ---

-- COURS 4 : La visite médicale OFII
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '9f0e1d2c-3b4a-4567-c8d9-e0f1a2b3c4d5',
  'La visite médicale OFII : Ce qu''il faut savoir',
  'visite-medicale-ofii',
  'Ce cours vous guidera à travers la procédure de la visite médicale auprès de l''OFII (Office Français de l''Immigration et de l''Intégration), une étape obligatoire pour certains titulaires de VLS-TS. Nous aborderons qui est concerné, comment et quand recevoir votre convocation, les examens à prévoir le jour J, les documents à apporter, et l''importance de l''attestation médicale délivrée. Cette visite est cruciale pour la validation définitive de votre séjour. Une bonne préparation est indispensable pour éviter tout stress inutile et assurer la conformité de votre dossier.',
  'Visite médicale OFII : qui est concerné, convocation, examens, documents. Tout savoir pour votre VLS-TS !',
  'integration_administrative',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1576091160550-2173167b2d56?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGljYWwlMjBjaGVja3VwfGVufDB8fDB8fHww',
  '["Identifier si vous êtes concerné(e) par la visite médicale OFII", "Comprendre le processus de convocation et ses délais", "Préparer les documents et examens pour la visite", "Savoir l''importance de l''attestation médicale finale"]'::jsonb,
  '["Avoir validé ou être en cours de validation de votre VLS-TS"]'::jsonb,
  4,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 4
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '0a1b2c3d-4e5f-4678-d9e0-f1a2b3c4d5e6',
  '9f0e1d2c-3b4a-4567-c8d9-e0f1a2b3c4d5',
  'Qui est concerné par la visite médicale OFII ?',
  '# Qui est concerné par la visite médicale OFII ?

## Pourquoi c''est important ?

La visite médicale organisée par l''Office Français de l''Immigration et de l''Intégration (OFII) est une étape obligatoire pour certains titulaires d''un Visa Long Séjour valant Titre de Séjour (VLS-TS). Ne pas se présenter ou ne pas savoir si l''on est concerné peut entraîner des complications majeures dans la validation de votre titre de séjour et potentiellement affecter votre droit de rester en France. Il est donc essentiel de savoir si cette démarche s''applique à votre situation spécifique, afin de vous y préparer au mieux et d''éviter tout stress inutile ou erreur administrative.


-   Connaître les conséquences d''une non-participation à la visite si vous êtes concerné.


La visite médicale OFII fait partie des formalités à accomplir pour certains étrangers s''installant en France avec un VLS-TS. Son objectif principal est de s''assurer que la personne ne présente pas de problème de santé publique et de vérifier son état de santé général. Cependant, cette obligation ne s''applique pas à tous les types de VLS-TS ni à toutes les nationalités. Une bonne information est la clé pour déterminer si vous êtes concerné.

🔗 [OFII : La visite médicale](https://www.ofii.fr/demarches/la-visite-medicale/) - La page officielle de l''OFII sur la visite médicale.




#### a) VLS-TS "Visiteur"
-   Les personnes qui viennent en France en tant que "visiteur" (sans activité professionnelle, avec des ressources suffisantes et une assurance maladie) sont presque systématiquement concernées.

#### b) VLS-TS "Salarié" ou "Travailleur Temporaire"
-   La plupart des titulaires d''un VLS-TS pour motif professionnel (salarié, travailleur temporaire) doivent passer par la visite médicale. L''objectif est de s''assurer de l''aptitude à l''emploi.

#### c) VLS-TS "Vie privée et familiale"




Il est tout aussi important de savoir si vous n''êtes PAS concerné pour éviter des démarches inutiles et du stress.

#### a) VLS-TS "Étudiant"
-   **Bonne nouvelle pour les étudiants !** Les titulaires d''un VLS-TS "étudiant" sont généralement **dispensés** de la visite médicale de l''OFII. Cette simplification est en place depuis plusieurs années pour faciliter l''arrivée des étudiants.
-   Cependant, l''OFII peut exceptionnellement vous convoquer si elle juge qu''une visite est nécessaire (cas très rares).

#### b) VLS-TS "Passeport Talent"
-   Les titulaires d''un VLS-TS "Passeport Talent" (chercheur, salarié qualifié, créateur d''entreprise, etc.) sont également **dispensés** de la visite médicale. Ce statut est considéré comme un accueil de "talents" et les démarches sont allégées.

#### c) Autres cas d''exemption


La source d''information la plus fiable est la notification que vous recevrez de l''OFII.

-   **Après la validation en ligne** : Une fois que vous avez validé votre VLS-TS sur le site de l''ANEF, l''OFII sera informé de votre arrivée.
-   **Convocation par courrier** : Si vous êtes concerné par la visite médicale, l''OFII vous enverra une convocation par courrier postal à l''adresse que vous avez indiquée lors de votre validation en ligne.
-   **Pas de convocation = pas de visite (sauf erreur)** : Si vous êtes étudiant ou titulaire d''un Passeport Talent et que vous ne recevez pas de convocation, c''est que vous n''êtes pas concerné. N''appelez pas l''OFII pour demander une convocation si vous êtes dispensé.


-   Votre **VLS-TS validé** (l''attestation de validation téléchargeable sur ANEF).


-   **Mettez à jour votre adresse** : Si vous changez d''adresse après avoir validé votre visa, informez-en l''OFII et l''ANEF pour ne pas manquer votre convocation.
-   **Consultez régulièrement votre boîte aux lettres** : Ne laissez pas le courrier s''accumuler.
-   **Ne pas s''inquiéter si vous êtes étudiant ou Passeport Talent et ne recevez rien** : C''est normal !


-   **Se rendre à l''OFII sans convocation** : Ils ne vous recevront pas et ne pourront pas vous faire passer la visite.
-   **Manquer sa convocation** : Sans motif légitime, cela peut entraîner des retards et des complications pour la validation de votre titre de séjour. Contactez l''OFII immédiatement si vous avez un empêchement justifié.


-   🔗 [OFII : Contact des directions territoriales](https://www.ofii.fr/les-directions-territoriales/) - Pour contacter l''OFII de votre région si vous avez des questions spécifiques après avoir vérifié les informations officielles.
-   🔗 [Ministère de l''Intérieur : La vie en France pour les étrangers](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France) - Informations globales sur l''installation.
-   🔗 [Ameli.fr : S''inscrire à l''assurance maladie](https://www.ameli.fr/assure/droits-demarches/etudes-superieures-sante/etudiant-etranger) - La visite médicale n''est pas une condition d''accès à la Sécurité Sociale, mais la validation du VLS-TS l''est.
-   🔗 [Préfectures de France : Informations locales](https://www.interieur.gouv.fr/Le-ministere/Nos-reseaux/Prefectures) - Certaines préfectures peuvent avoir des informations complémentaires sur le site de l''OFII local.


La visite médicale OFII est une étape administrative obligatoire pour certains titulaires de VLS-TS (Visiteur, Salarié, Vie privée et familiale), mais les étudiants et les titulaires d''un Passeport Talent en sont généralement dispensés. C''est l''OFII qui vous convoquera par courrier si vous êtes concerné. Soyez attentif à votre boîte aux lettres et, si vous êtes dispensé, ne vous inquiétez pas de ne rien recevoir. Cette connaissance vous évitera des démarches superflues et vous permettra de vous concentrer sur les étapes réellement nécessaires à votre intégration.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '1b2c3d4e-5f6a-4678-e9f0-a1b2c3d4e5f6',
  '9f0e1d2c-3b4a-4567-c8d9-e0f1a2b3c4d5',
  'La convocation : Délais et réception',
  '# La convocation : Délais et réception

## Pourquoi c''est important ?

Recevoir et réagir à la convocation de l''OFII pour la visite médicale est une étape cruciale pour les personnes concernées. Cette convocation est le document officiel qui vous informe de la date, de l''heure et du lieu de votre rendez-vous. Ne pas la recevoir, la rater, ou ne pas y répondre peut entraîner des retards importants dans la validation de votre titre de séjour, voire des complications administratives graves. Comprendre les délais post-validation VLS-TS, savoir comment la convocation est envoyée, et que faire en cas de non-réception est fondamental pour ne pas compromettre la régularité de votre séjour en France.


-   Comprendre le délai d''envoi de la convocation après la validation du VLS-TS.


Une fois que vous avez validé votre VLS-TS en ligne sur la plateforme ANEF, l''OFII est informé de votre présence en France. C''est à partir de cette information que l''OFII, s''il estime que votre statut le nécessite (Visiteur, Salarié, Vie privée et familiale), déclenche le processus de convocation pour la visite médicale. Cette étape peut prendre un certain temps, d''où l''importance de la patience et de la vigilance.



### 1. Délais d''envoi de la convocation

Soyez conscient que la convocation n''est pas envoyée immédiatement après votre validation VLS-TS.

-   **Après la validation ANEF** : Le processus de validation en ligne déclenche la transmission de vos informations à l''OFII.
-   **Délai variable** : L''OFII dispose de plusieurs semaines, voire quelques mois, pour vous envoyer la convocation. Ce délai peut varier en fonction de la charge de travail des directions territoriales de l''OFII et de la période de l''année.
-   **Patience requise** : Il est normal de ne pas recevoir la convocation tout de suite. Ne vous inquiétez pas si vous ne l''avez pas au bout de 2 ou 3 semaines.



-   **Courrier recommandé avec accusé de réception (parfois)** : Pour certains dossiers, l''OFII peut envoyer la convocation par lettre recommandée, ce qui nécessite votre signature pour la réception et apporte une preuve légale. Dans d''autres cas, ce sera un simple courrier.
-   **À l''adresse déclarée sur l''ANEF** : La convocation sera envoyée à l''adresse de votre résidence principale que vous avez renseignée lors de la validation de votre VLS-TS sur la plateforme ANEF.
-   **Boîte aux lettres** : Assurez-vous d''avoir une boîte aux lettres accessible et identifiée à votre nom. Si vous êtes en colocation, assurez-vous que votre nom figure clairement sur la boîte aux lettres pour que le courrier vous soit distribué.




-   **Date, heure et lieu du rendez-vous** : Indique la date, l''heure exacte et l''adresse du centre OFII où vous devez vous présenter.
-   **Liste des documents à apporter** : Très important, car elle liste précisément toutes les pièces justificatives, les examens et les photos d''identité que vous devrez présenter le jour J.
-   **Instructions spécifiques** : Peut contenir des informations sur le jeûne avant un examen, ou d''autres préparatifs.


C''est une situation à gérer rapidement.

-   **Vérifiez votre statut** : Êtes-vous certain(e) d''être concerné(e) par la visite médicale (c''est-à-dire non étudiant ou Passeport Talent) ?
-   **Vérifiez votre adresse** : Votre adresse postale est-elle correcte sur votre dossier ANEF ? Avez-vous changé d''adresse sans informer l''OFII ?
-   **Contactez la direction territoriale de l''OFII** : Si le délai vous semble excessivement long (plus de 3-4 mois après la validation VLS-TS), contactez la direction territoriale de l''OFII dont dépend votre lieu de résidence. Expliquez votre situation, donnez votre numéro d''identifiant étranger (le numéro de dossier figurant sur votre attestation de validation VLS-TS).

-   **Contactez l''OFII sans tarder** : Expliquez la situation et demandez un duplicata ou les informations du rendez-vous.


-   Votre **numéro d''identifiant étranger** (sur votre attestation de validation VLS-TS).
-   Les **coordonnées de la direction territoriale de l''OFII** de votre région.


-   **Informez l''OFII de tout changement d''adresse** : C''est crucial pour ne pas manquer la convocation.
-   **Notez la date de votre rendez-vous** : Dès que vous recevez la convocation, notez la date et l''heure dans votre agenda et mettez un rappel.
-   **Préparez les documents demandés à l''avance** : N''attendez pas la veille du rendez-vous.


-   **Ne pas réagir en cas de non-réception** : Si vous êtes concerné et que vous n''avez rien après un délai raisonnable, il est de votre responsabilité de contacter l''OFII.
-   **Attendre le dernier moment** : Le jour du rendez-vous peut être proche de la date de réception, ne laissez pas passer l''occasion de vous préparer.


-   🔗 [OFII : Contacter une direction territoriale](https://www.ofii.fr/les-directions-territoriales/) - Trouvez l''OFII de votre région.
-   🔗 [ANEF : Guide de validation VLS-TS](https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/vls-ts/demarches/etape-1) - Rappel que c''est ici que l''adresse est déclarée initialement.
-   🔗 [Ministère de l''Intérieur : Foire aux questions sur le séjour](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Questions-frequentes-sur-la-plateforme-des-etrangers-en-France) - Peut contenir des précisions sur les délais.
-   🔗 [Légifrance : Le Code de l''entrée et du séjour des étrangers (CESEDA)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000025791771/) - Pour les références légales sur les obligations.


La réception de la convocation OFII est une étape clé pour les personnes soumises à la visite médicale. Elle est envoyée par courrier postal à l''adresse déclarée sur l''ANEF, généralement quelques semaines ou mois après la validation de votre VLS-TS. Soyez vigilant(e) sur votre boîte aux lettres et, en cas de non-réception prolongée ou de perte, contactez rapidement la direction territoriale de l''OFII compétente. Une bonne gestion de cette convocation garantira la fluidité de votre démarche administrative.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '2c3d4e5f-6a7b-4678-f90a-1b2c3d4e5f6a',
  '9f0e1d2c-3b4a-4567-c8d9-e0f1a2b3c4d5',
  'Le jour J : Examens et documents à apporter',
  '# Le jour J : Examens et documents à apporter

## Pourquoi c''est important ?

Le jour de votre visite médicale à l''OFII est un moment important qui peut déterminer la validation définitive de votre titre de séjour. Une préparation minutieuse des documents et une compréhension claire des examens à subir sont absolument essentielles. Oublier un document crucial, se présenter sans les résultats demandés, ou ne pas comprendre le déroulement de la visite peut entraîner un report de rendez-vous, des allers-retours inutiles, et un stress supplémentaire. Une bonne préparation garantit une visite fluide et la délivrance de votre attestation médicale sans encombre.


-   Comprendre les types d''examens médicaux généralement effectués.


Le centre de l''OFII est organisé pour accueillir un grand nombre de personnes. Le processus de la visite médicale est standardisé, mais il est de votre responsabilité d''arriver préparé. La convocation que vous avez reçue de l''OFII est votre guide principal car elle contient la liste exacte de ce que vous devez apporter. Lisez-la très attentivement !

🔗 [OFII : Ce qu''il faut savoir sur la visite médicale](https://www.ofii.fr/demarches/la-visite-medicale/) - Section détaillée de l''OFII.



La liste est stricte et l''absence d''un document peut bloquer votre visite.

#### a) Documents d''identité et de séjour
-   **Votre passeport** : Original et photocopie (page d''identité et page avec votre VLS-TS).
-   **Votre attestation de validation VLS-TS** (téléchargée sur l''ANEF) : Original et photocopie.
-   **Justificatif de domicile** récent (moins de 3 mois) : quittance de loyer, facture d''électricité, attestation d''hébergement.

#### b) Photos d''identité
-   **Photos d''identité récentes** : Généralement 3 photos, aux normes françaises (fond clair et uni, visage dégagé, format 3,5 x 4,5 cm). Respectez scrupuleusement ces normes. Des machines Photomaton agréées "e-photo" sont idéales.

-   **Radio des poumons (radio thoracique)** : Très souvent demandée pour les primo-arrivants, surtout si votre nationalité est concernée par des risques de tuberculose. La convocation précisera si vous devez l''apporter ou si elle sera faite sur place. Si vous devez l''apporter, elle doit dater de moins de 3 mois et être accompagnée du compte-rendu.

🔗 [Service-Public.fr : Normes des photos d''identité](https://www.service-public.fr/particuliers/vosdroits/F10616) - Les règles à suivre pour vos photos.



-   À votre arrivée, vos documents seront vérifiés. Assurez-vous d''avoir les originaux et les photocopies demandées.

-   **Médecin généraliste** : Un médecin de l''OFII réalisera un examen clinique de base (prise de tension, poids, taille, écoute du cœur et des poumons).

-   Si la radio des poumons est demandée et que vous ne l''avez pas apportée, elle sera réalisée sur place par un technicien en radiologie.
-   C''est un examen rapide et indolore.

-   C''est l''occasion de poser des questions si vous en avez concernant votre santé en France.

### 3. L''attestation médicale

C''est le document que vous obtiendrez à la fin de la visite.

-   **Délivrance immédiate** : Si tout est en ordre, l''attestation médicale est généralement délivrée à la fin de la visite.
-   **"Avis médical favorable"** : C''est le plus souvent ce qui est indiqué, attestant que votre état de santé ne fait pas obstacle à la délivrance du titre de séjour.


-   Des **photos d''identité conformes**.


-   **Communiquez** : Si vous ne comprenez pas une question du médecin, n''hésitez pas à demander de reformuler.


-   **Oublier des documents** : L''absence d''une seule pièce peut entraîner un report de votre rendez-vous.
-   **Ne pas comprendre le français** : Si vous avez des difficultés, essayez de venir avec une personne bilingue de confiance pour vous aider (demandez à l''OFII si cela est autorisé).
-   **Stress inutile** : C''est une visite de contrôle, pas un examen piège.
-   **Ne pas avoir de justificatif de domicile** : C''est essentiel pour prouver votre résidence.


-   🔗 [OFII : Préparer sa visite médicale](https://www.ofii.fr/demarches/la-visite-medicale/) - La page de référence de l''OFII.
-   🔗 [Centre Anti Poison et de Toxicovigilance](https://www.centres-antipoison.net/) - Numéros d''urgence en cas de besoin médical (hors urgence OFII).


Le jour de votre visite médicale OFII, la clé est une préparation minutieuse. Rassemblez tous les documents demandés sur votre convocation (passeport, VLS-TS validé, justificatif de domicile, photos conformes, éventuelle radio des poumons). Les examens sont simples et rapides. Votre diligence vous permettra d''obtenir sans délai l''attestation médicale, dernière pièce nécessaire à la finalisation de votre statut de résident en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '3d4e5f6a-7b8c-4678-f90a-1b2c3d4e5f6a',
  '9f0e1d2c-3b4a-4567-c8d9-e0f1a2b3c4d5',
  'L''attestation médicale : À conserver précieusement',
  '# L''attestation médicale : À conserver précieusement

## Pourquoi c''est important ?

L''attestation médicale que vous obtenez à la fin de votre visite à l''OFII est un document officiel crucial. Elle certifie que vous avez rempli l''obligation de la visite médicale et que votre état de santé ne constitue pas un obstacle à la délivrance de votre titre de séjour. Bien qu''elle puisse sembler n''être qu''un simple papier, elle est une pièce maîtresse de votre dossier administratif. Sans elle, le processus de validation de votre titre de séjour ne peut être finalisé. Il est impératif de la conserver avec le plus grand soin et de pouvoir la présenter sur demande.


-   Comprendre la valeur juridique de l''attestation médicale OFII.
-   Savoir où et comment l''attestation est délivrée.


Une fois que le médecin de l''OFII a effectué les examens nécessaires et que votre dossier est complet, il vous remettra cette attestation. Ce document est la conclusion positive de votre passage à l''OFII. Il ne s''agit pas d''un titre de séjour en soi, mais d''un élément constitutif de votre dossier prouvant que vous êtes en règle d''un point de vue sanitaire.

🔗 [OFII : La délivrance de l''attestation](https://www.ofii.fr/demarches/la-visite-medicale/) - Page officielle de l''OFII.


### 1. Délivrance de l''attestation

L''attestation est généralement remise immédiatement après la visite.

-   **Après la consultation** : Une fois que le médecin a vérifié votre état de santé et examiné vos documents (y compris la radio si elle a été faite sur place ou apportée), il remplira et signera l''attestation.

### 2. Contenu de l''attestation médicale

L''attestation est un document standardisé.

-   **Avis du médecin** : Généralement "Avis médical favorable" ou "Avis favorable". C''est cette mention qui est essentielle.
-   **Cachet et signature du médecin** de l''OFII.

### 3. La valeur juridique et l''importance du document


-   **Validation du VLS-TS** : L''attestation médicale est l''une des dernières pièces qui permet à l''OFII de finaliser la validation administrative de votre VLS-TS. C''est elle qui prouve que vous avez rempli cette obligation sanitaire.
-   **Justification de la régularité du séjour** : Vous pourriez être amené à la présenter à d''autres administrations ou lors de démarches ultérieures pour prouver la régularité de votre séjour. Par exemple, lors d''un renouvellement de titre de séjour, la préfecture pourrait demander cette attestation de la première année.
-   **Absence de l''attestation = dossier incomplet** : Sans cette attestation, votre dossier de validation de VLS-TS restera incomplet et ne sera pas considéré comme finalisé. Votre séjour resterait alors potentiellement irrégulier.



-   **Scannez l''attestation** en haute qualité et enregistrez le fichier PDF sur votre ordinateur, un disque dur externe, et un service de cloud sécurisé (Google Drive, Dropbox, etc.).
-   **Envoyez-vous une copie par e-mail** pour un accès facile depuis n''importe où.

-   **Une copie dans votre portefeuille** : Avoir une photocopie sur soi peut être utile, mais ne jamais avoir l''original partout.


-   L''**attestation médicale OFII** elle-même.


-   **Ne la confondez pas avec votre titre de séjour** : C''est un document annexe essentiel.
-   **Anticipez les demandes** : Si une administration vous demande "la preuve de votre visite médicale OFII", vous saurez quoi fournir.
-   **Tenez un classeur "administratif"** : Un bon système d''organisation vous fera gagner un temps précieux et évitera le stress.


-   **Perdre l''attestation** : C''est une perte majeure. Un duplicata est parfois possible mais prend du temps et des démarches supplémentaires.
-   **Ne pas la numériser** : En cas de perte de l''original, un scan de qualité pourrait aider (bien que l''original soit toujours préférable).
-   **La jeter une fois la validation VLS-TS "terminée"** : L''attestation reste une preuve et peut être demandée ultérieurement.
-   **Ignorer les informations qui y figurent** : La date de fin de validité de votre visa (qu''elle confirme) est la date clé pour anticiper votre renouvellement.


-   🔗 [Service-Public.fr : Visite médicale OFII](https://www.service-public.fr/particuliers/vosdroits/F1826) - Rappel de la procédure et de l''importance du document.
-   🔗 [Ministère de l''Intérieur : Gérer ses documents administratifs](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Gerer-ses-documents) - Conseils pour les documents des étrangers.
-   🔗 [CNIL : Protection des documents d''identité](https://www.cnil.fr/fr/proteger-ses-donnees-personnelles) - Conseils pour la sécurisation de vos documents.


L''attestation médicale de l''OFII est le document qui finalise votre obligation de visite médicale et confirme la validité de votre VLS-TS. Conservez-la précieusement, à la fois numériquement et physiquement, et assurez-vous de connaître les informations qu''elle contient. C''est une preuve essentielle de la régularité de votre séjour en France et elle vous sera utile pour de nombreuses démarches administratives futures.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 4 ---

-- COURS 5 : Renouvellement de titre de séjour
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'a3b4c5d6-e7f8-4901-b2c3-d4e5f6a7b8c9',
  'Renouvellement de titre de séjour : Guide complet',
  'renouvellement-titre-sejour-guide-complet',
  'Ce cours est un guide indispensable pour les étudiants internationaux et autres résidents temporaires en France devant renouveler leur titre de séjour. La procédure de renouvellement est aussi cruciale que la première demande et doit être anticipée pour éviter les interruptions de droits. Nous vous détaillerons le calendrier, les démarches pour prendre rendez-vous en préfecture, les preuves de "sérieux des études" ou d''activité professionnelle à fournir, le rôle et les droits conférés par le récépissé, et les étapes pour récupérer votre nouveau titre. Une préparation minutieuse est la clé d''un renouvellement réussi et d''un séjour ininterrompu en France.',
  'Renouveler votre titre de séjour en France : délais,
  documents,
  rendez-vous préfecture,
  récépissé. Guide essentiel !',
  'integration_administrative',
  'intermediaire',
  'fr',
  'https://images.unsplash.com/photo-1554902409-9b9a6b1e6e9b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcGVyJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D',
  '["Comprendre les délais impératifs pour le renouvellement", "Savoir prendre rendez-vous en préfecture (ou en ligne)", "Rassembler toutes les preuves requises pour votre dossier", "Comprendre les droits offerts par le récépissé et récupérer son nouveau titre"]'::jsonb,
  '["Avoir un titre de séjour temporaire en France",
  "Avoir validé votre VLS-TS"]'::jsonb,
  4,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 5
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '4e5f6a7b-8c9d-4012-e3f4-a5b6c7d8e9f0',
  'a3b4c5d6-e7f8-4901-b2c3-d4e5f6a7b8c9',
  'Quand s''y prendre (La règle des 2 mois)',
  '# Quand s''y prendre (La règle des 2 mois)

## Pourquoi c''est important ?

Le renouvellement de votre titre de séjour est une démarche administrative cruciale qui doit être anticipée avec la plus grande rigueur. La "règle des 2 mois" est un principe fondamental à maîtriser : vous devez déposer votre demande de renouvellement au plus tôt 4 mois et au plus tard 2 mois avant la date d''expiration de votre titre de séjour actuel. Ne pas respecter ce délai peut entraîner de graves conséquences, telles que des amendes pour dépôt tardif, une interruption de vos droits (travail, sécurité sociale), voire une situation d''irrégularité de séjour. Une bonne gestion de ce calendrier est la clé pour maintenir votre statut légal en France sans interruption.


-   Comprendre le délai légal pour le dépôt d''une demande de renouvellement.


Votre titre de séjour a une date de validité. Il ne se renouvelle pas automatiquement. C''est à vous, en tant qu''étranger, d''initier la démarche de renouvellement auprès de la préfecture de votre lieu de résidence. Cette démarche demande du temps et une préparation anticipée, car les dossiers sont souvent complexes et les délais de traitement peuvent être longs.




Le Code de l''entrée et du séjour des étrangers et du droit d''asile (CESEDA) fixe des règles claires concernant les délais de dépôt.

    -   **Au plus tôt : 4 mois avant la date d''expiration** de votre titre de séjour.
    -   **Au plus tard : 2 mois avant la date d''expiration** de votre titre de séjour.



### 2. Les conséquences d''un dépôt tardif


-   En cas de dépôt tardif (après la date limite de 2 mois avant l''expiration), la préfecture peut vous infliger une **taxe de régularisation** dont le montant peut être élevé (autour de 180€ pour les étudiants, mais varie selon les statuts et peut être cumulée à d''autres amendes). Cette taxe est en plus du prix normal du titre de séjour.

    -   **Voyager** dans l''espace Schengen ou en dehors de la France.

#### c) Risque d''irrégularité de séjour
-   Si vous dépassez la date d''expiration de votre titre de séjour sans avoir déposé de demande de renouvellement (ou sans avoir de récépissé valide), votre séjour devient irrégulier. Cela peut entraîner une obligation de quitter le territoire français (OQTF) et une interdiction de retour en France.



#### a) Notez la date d''expiration
-   Mettez en évidence la date d''expiration de votre titre de séjour.

#### b) Créez une "alerte renouvellement"
-   4 mois avant l''expiration : C''est le signal de départ pour commencer à rassembler tous les documents nécessaires.
-   3 mois avant l''expiration : Prenez rendez-vous en préfecture (si la démarche n''est pas dématérialisée).

-   La constitution du dossier de renouvellement demande du temps. N''attendez pas le dernier moment pour rassembler les pièces (justificatifs de ressources, de scolarité, de domicile, etc.).




-   **Faites des copies de votre titre de séjour** : Avant qu''il n''expire, ayez des copies numériques et physiques.
-   **Ne comptez pas sur un e-mail de rappel de l''administration** : C''est votre responsabilité de suivre votre propre calendrier.


-   **Reporter la démarche** : Ne vous dites pas "je ferai ça plus tard", le temps passe vite.
-   **Penser que le statut étudiant vous exempte de la rigueur des délais** : C''est faux, les étudiants sont soumis aux mêmes règles.


-   🔗 [OFII : Les démarches de renouvellement](https://www.ofii.fr/demarches/les-etrangers-en-france-qui-doivent-passer-par-le-ofii-pour-valider-leur-titre-de-sejour-renouvellement/) - Si votre titre de séjour initial était lié à l''OFII.
-   🔗 [Ministère de l''Intérieur : Questions fréquentes sur le séjour](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Questions-frequentes-sur-la-plateforme-des-etrangers-en-France) - Peut éclaircir des doutes.


Anticiper la demande de renouvellement de votre titre de séjour est fondamental. La "règle des 2 mois" (dépôt entre 4 et 2 mois avant l''expiration) est un délai légal impératif. Un dépôt tardif peut entraîner des pénalités financières, une interruption de vos droits et un risque d''irrégularité de séjour. Marquez cette date sur votre calendrier et commencez à préparer votre dossier bien en amont pour garantir un renouvellement serein et une continuité de votre statut en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '5f6a7b8c-9d0e-4012-f3a4-b5c6d7e8f9a0',
  'a3b4c5d6-e7f8-4901-b2c3-d4e5f6a7b8c9',
  'Prendre rendez-vous en préfecture (ou en ligne)',
  '# Prendre rendez-vous en préfecture (ou en ligne)

## Pourquoi c''est important ?

La prise de rendez-vous pour le dépôt de votre dossier de renouvellement de titre de séjour est une étape administrative souvent stressante et complexe, surtout dans les grandes villes où les créneaux sont rares. Dans de nombreuses préfectures, les démarches sont désormais dématérialisées via la plateforme ANEF, mais pour d''autres, le rendez-vous physique reste la norme. Ne pas réussir à obtenir un rendez-vous dans les délais impartis peut vous placer en situation d''irrégularité de séjour, avec toutes les conséquences négatives que cela implique (impossibilité de travailler, rupture de droits sociaux, etc.). Maîtriser les procédures de prise de rendez-vous, qu''elles soient en ligne ou en présentiel, est donc essentiel pour assurer la continuité de votre séjour légal en France.


-   Savoir comment réagir si aucun rendez-vous n''est disponible.







-   **Dématérialisation croissante** : De plus en plus de démarches de titres de séjour sont entièrement dématérialisées via l''ANEF. C''est le cas pour les titres étudiants, passeports talents, et d''autres.
-   **Comment savoir ?** : Rendez-vous sur le site de votre préfecture ou directement sur l''ANEF (`https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/titres-de-sejour`). Si votre catégorie de titre de séjour est disponible en ligne, suivez la procédure ANEF.


-   **Pour les démarches non dématérialisées** : Si votre catégorie de titre de séjour n''est pas encore sur l''ANEF, vous devrez prendre un rendez-vous pour déposer physiquement votre dossier.
-   **Sites des préfectures** : Chaque préfecture a sa propre section "Rendez-vous" sur son site internet. Cherchez la rubrique "Étrangers" ou "Titres de séjour".



-   Sur le site de votre préfecture, trouvez le lien pour "Prendre un rendez-vous titre de séjour" ou "Demande de titre de séjour".
-   Choisissez la catégorie de votre titre de séjour (ex: "étudiant", "salarié", "vie privée et familiale").

-   **Attention aux robots !** : Les systèmes de prise de rendez-vous sont souvent la cible de "robots" qui bloquent les créneaux. Il peut y avoir des "captchas" complexes ou des questions supplémentaires pour vérifier que vous êtes une vraie personne.

-   C''est l''étape la plus difficile. Les créneaux sont souvent rares et disparaissent très vite, surtout dans les préfectures des grandes agglomérations.

-   Une fois le créneau choisi, vous recevrez une confirmation par e-mail avec la date, l''heure, le lieu et souvent la liste des documents à apporter.
-   **Imprimez cette confirmation** : C''est votre sésame pour entrer en préfecture le jour J.

### 3. Que faire si aucun rendez-vous n''est disponible ?

C''est une situation frustrante, mais des solutions existent.

-   **Contactez les associations d''aide aux étrangers** : Elles peuvent avoir des conseils spécifiques ou être informées des "heures creuses" où les créneaux sont libérés.
-   **Rédigez un courrier recommandé** : Si le délai des 2 mois approche et qu''il vous est impossible d''obtenir un rendez-vous, vous pouvez adresser un courrier recommandé avec accusé de réception à la préfecture pour signaler l''impossibilité de prendre rendez-vous et votre volonté de déposer votre dossier. Joignez une copie de votre titre de séjour et une liste des pièces que vous avez préparées. Cela constitue une preuve de votre diligence.


-   Votre **titre de séjour actuel** (pour le numéro d''étranger).


-   **Commencez la prise de rendez-vous très tôt** (dès 4 mois avant l''expiration de votre titre) si votre démarche n''est pas dématérialisée.
-   **Préparez toutes vos pièces** : Même si vous n''avez pas encore de rendez-vous, avoir votre dossier complet vous rendra plus efficace quand un créneau se présentera.


-   **Se rendre à la préfecture sans rendez-vous** : Vous ne serez pas reçu et ce n''est pas une solution.
-   **Payer pour un rendez-vous** : C''est illégal et souvent frauduleux. Les rendez-vous officiels sont toujours gratuits.


-   🔗 [Ministère de l''Intérieur : Foire aux questions sur l''ANEF](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Questions-frequentes-sur-la-plateforme-des-etrangers-en-France) - Peut aider pour les démarches en ligne.
-   🔗 [La Poste : Envoi d''une lettre recommandée avec accusé de réception](https://www.laposte.fr/particulier/produits/envoyer-une-lettre-recommandee) - Si vous devez envoyer un courrier pour signaler l''impossibilité de rendez-vous.
-   🔗 [Défenseur des Droits : Demander de l''aide](https://www.defenseurdesdroits.fr/fr/saisir-le-defenseur-des-droits) - En cas de difficultés majeures et de non-réponse de l''administration.


La prise de rendez-vous en préfecture ou le dépôt de dossier en ligne via l''ANEF est une étape charnière pour le renouvellement de votre titre de séjour. Vérifiez d''abord si votre démarche est dématérialisée. Si un rendez-vous physique est requis, armez-vous de patience et de persévérance pour obtenir un créneau sur le site de votre préfecture, en commençant très tôt. En cas de blocage, documentez vos tentatives et n''hésitez pas à chercher des solutions alternatives, y compris l''envoi d''un courrier recommandé. Une gestion proactive de cette étape est la clé pour maintenir votre statut régulier en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '6d7e8f9a-0b1c-4012-g3h4-i5j6k7l8m9n0',
  'a3b4c5d6-e7f8-4901-b2c3-d4e5f6a7b8c9',
  'Rassemblez les preuves de "sérieux des études"',
  '# Rassemblez les preuves de "sérieux des études"

## Pourquoi c''est important ?

Pour les étudiants internationaux, le renouvellement du titre de séjour est conditionné par la preuve du "sérieux des études". Il ne suffit pas d''être inscrit : vous devez démontrer que vous suivez assidûment et avec succès votre formation. L''administration française (préfecture) vérifie que votre séjour a bien pour objectif principal les études et non une autre finalité déguisée. Sans preuves solides de votre engagement et de vos résultats, votre demande de renouvellement peut être refusée, mettant fin à votre projet en France. Préparer ces justificatifs est donc une étape essentielle pour prouver votre bonne foi et la légitimité de votre présence sur le territoire.


-   Comprendre la notion de "sérieux des études" et ce qu''elle implique.


Le titre de séjour "étudiant" est un statut privilégié qui permet aux jeunes étrangers de venir se former en France. En contrepartie, l''État attend de vous que vous respectiez l''objet de votre venue : étudier sérieusement. La préfecture examinera attentivement votre parcours depuis votre dernière demande (ou votre arrivée avec le VLS-TS) pour s''assurer de votre diligence.



### 1. Comprendre la notion de "sérieux des études"


#### a) L''assiduité
-   **Participation aux examens** : Vous devez vous présenter à toutes les épreuves et sessions d''examen (première et deuxième session).

-   **Validation des années d''études** : Vous devez prouver que vous avez validé vos années précédentes (ou au moins une majorité de vos crédits ECTS).
-   **Progression** : Une progression dans votre cursus est attendue. Un redoublement n''est pas un motif automatique de refus, mais il doit être justifié (maladie, difficultés d''adaptation sérieuses, changement d''orientation motivé).

-   Votre poursuite d''études doit être logique et s''inscrire dans un projet professionnel ou personnel. Des changements d''orientation fréquents et non justifiés peuvent être perçus négativement.



#### a) Certificats d''inscription
-   **Certificat d''inscription pour l''année en cours** : Prouvant que vous êtes bien inscrit(e) dans un établissement d''enseignement supérieur français.
-   **Attestation de pré-inscription pour l''année suivante** : Si vous n''avez pas encore le certificat définitif, la preuve de votre acceptation dans un programme pour l''année à venir.

-   **Relevés de notes détaillés** : Pour toutes les années d''études effectuées en France (depuis votre arrivée). Ils doivent montrer vos résultats et les crédits ECTS obtenus.

#### c) Attestations d''assiduité (si demandées ou pertinentes)

-   Bien que non systématiquement exigée, une lettre explicative peut être très utile si votre parcours présente des particularités (redoublement, changement d''orientation, semestre à l''étranger). Expliquez clairement la situation et réaffirmez votre projet.

-   Si vous êtes en stage ou en alternance, la convention de stage ou le contrat d''alternance sont des preuves solides de votre activité.


-   **Certificats d''inscription**.
-   Eventuellement : **Lettre explicative**, **justificatifs d''absences**.


-   **Suivez vos cours assidûment** : C''est la base. Votre présence et votre participation comptent.
-   **Faites de votre mieux aux examens** : Les résultats sont la preuve la plus concrète de votre "sérieux".
-   **Communiquez avec votre établissement** : Si vous rencontrez des difficultés académiques ou personnelles, parlez-en à vos professeurs, à la scolarité ou aux services d''aide. Ils pourront vous soutenir et, le cas échéant, attester de vos efforts.
-   **Conservez TOUS vos documents académiques** : Ne jetez jamais un certificat d''inscription ou un relevé de notes.
-   **Organisez votre dossier** : Un classeur clair et bien rangé facilitera l''examen par la préfecture.


-   **Ne pas avoir de justificatifs** : "J''ai tout perdu" n''est pas une excuse acceptable.
-   **Un changement d''orientation radical sans justification solide** : Ex: passer d''un Master de physique à une Licence de langues.


-   🔗 [Ministère de l''Enseignement Supérieur : La scolarité](https://www.enseignementsup-recherche.gouv.fr/fr/la-scolarite-46549) - Informations sur le déroulement des études.
-   🔗 [Légifrance : Article L432-6 du CESEDA](https://www.legifrance.gouv.fr/codes/id/LEGIARTI000041280362/) - Conditions de renouvellement pour les étudiants (art. L. 432-6 : doit justifier de la poursuite d''études et de ressources suffisantes).
-   🔗 [Association locale d''aide aux étrangers](https://www.gisti.org/spip.php?rubrique24) - Liste des associations pouvant vous conseiller sur la constitution de votre dossier.


Prouver le "sérieux de vos études" est une condition sine qua non pour le renouvellement de votre titre de séjour étudiant. Cela implique de démontrer votre assiduité aux cours, votre participation aux examens et une progression cohérente dans votre cursus. Rassemblez tous vos certificats d''inscription, relevés de notes et diplômes. En cas de situation particulière (redoublement, changement d''orientation), préparez une explication claire et motivée. Une préparation rigoureuse de ce dossier est essentielle pour garantir la continuité de votre statut légal en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '7e8f9a0b-1c2d-4012-h3i4-j5k6l7m8n9o0',
  'a3b4c5d6-e7f8-4901-b2c3-d4e5f6a7b8c9',
  'Le récépissé : Vos droits en attendant',
  '# Le récépissé : Vos droits en attendant

## Pourquoi c''est important ?

Une fois que vous avez déposé votre demande de renouvellement de titre de séjour, la préfecture vous délivre un document provisoire appelé "récépissé de demande de titre de séjour". Ce petit papier est d''une importance capitale : il atteste de la régularité de votre situation administrative en attendant la fabrication de votre nouveau titre. Sans ce récépissé, vous seriez en situation irrégulière une fois votre ancien titre expiré. Il vous permet de maintenir vos droits essentiels (travailler, bénéficier de la sécurité sociale, voyager) et d''éviter les interruptions. Comprendre sa valeur juridique, ses limites et comment l''utiliser est donc fondamental pour une transition sereine entre deux titres de séjour.


-   Définir ce qu''est un récépissé et sa fonction principale.
-   Connaître les droits qu''il confère (travail, santé, voyages).
-   Comprendre sa durée de validité et ce qu''il faut faire en cas d''expiration.
-   Savoir comment l''utiliser et le présenter aux différentes administrations.


Le récépissé est une attestation officielle de dépôt de demande de titre de séjour. Il prouve que vous avez bien effectué votre démarche et que votre dossier est en cours d''instruction. Ce document est votre preuve de résidence légale en France pendant la période de traitement de votre demande, qui peut parfois être longue.



### 1. Qu''est-ce que le récépissé ?


-   **Nature du document** : C''est un papier, souvent de couleur rose ou orange, qui vous est remis par la préfecture ou par l''ANEF (si la démarche est dématérialisée) après l''enregistrement de votre demande de titre de séjour ou de son renouvellement.
-   **Fonction** : Il atteste de la régularité de votre séjour en France et du fait que votre dossier est en cours d''instruction.
-   **Numéro d''étranger** : Il porte votre numéro d''étranger (qui est le même que celui de votre ancien titre) et la date de dépôt de votre demande.







-   **Dans l''espace Schengen** : Un récépissé de première demande ne permet pas de voyager hors de France. Un récépissé de renouvellement, s''il est accompagné de votre ancien titre de séjour expiré, peut vous permettre de voyager dans l''espace Schengen et de revenir en France. Cependant, cela est à la discrétion des autorités de chaque pays de l''espace Schengen. **Attention, ce n''est pas garanti.**
-   **Hors espace Schengen** : Il est fortement déconseillé de voyager hors de l''espace Schengen avec un simple récépissé, car le retour en France pourrait vous être refusé. En cas d''urgence absolue, contactez la préfecture avant de voyager.




-   **Durée** : Généralement valable 6 mois, renouvelable si la préfecture n''a pas encore statué sur votre demande.
-   **Renouvellement du récépissé** : Si votre récépissé expire et que vous n''avez pas encore reçu de décision, vous devez contacter la préfecture pour demander un nouveau récépissé. Cette démarche est aussi importante que la demande initiale.




-   **Ayez-le toujours sur vous** : Avec votre pièce d''identité et votre titre de séjour expiré.
-   **N''attendez pas son expiration pour demander un renouvellement** si vous n''avez toujours pas de décision.


-   **Penser que le récépissé a la même valeur qu''un titre de séjour** : Il est provisoire et a des limites, notamment pour les voyages hors Schengen.


-   🔗 [OFII : Les délais de traitement des dossiers](https://www.ofii.fr/demarches/les-delais-de-traitement-des-dossiers/) - Pour avoir une idée des délais d''instruction.
-   🔗 [Caisse Nationale des Allocations Familiales (CNAF) : Justificatifs de séjour](https://www.caf.fr/allocataires/droits-et-prestations/logement/les-justificatifs-de-sejour-pour-les-etrangers) - Pour les demandes d''APL.


Le récépissé est un document provisoire essentiel qui atteste de la régularité de votre séjour en France après le dépôt de votre demande de renouvellement de titre de séjour. Il vous permet de maintenir vos droits fondamentaux (travail, sécurité sociale, aides sociales) et, avec des précautions, de voyager dans l''espace Schengen. Conservez-le précieusement, ayez-le toujours sur vous et anticipez son renouvellement si la décision sur votre titre de séjour tarde. C''est votre preuve de régularité en attendant votre nouveau titre.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '8f9a0b1c-2d3e-4012-p5q6-r7s8t9u0v1w2',
  'a3b4c5d6-e7f8-4901-b2c3-d4e5f6a7b8c9',
  'Retirer son nouveau titre de séjour',
  '# Retirer son nouveau titre de séjour

## Pourquoi c''est important ?

Le retrait de votre nouveau titre de séjour est l''aboutissement de toutes vos démarches administratives de renouvellement. C''est le document officiel qui légalise votre présence en France pour la période à venir et vous confère tous les droits attachés à votre statut. Ne pas retirer votre titre, le perdre avant de l''avoir sécurisé, ou ne pas comprendre les étapes de sa récupération, peut annuler des mois d''efforts et vous replacer dans une situation administrative complexe. Ce cours vous guidera pour finaliser cette étape essentielle et vous assurer de disposer de votre précieux document en toute sérénité.




Après des semaines, voire des mois d''attente et d''instruction, la préfecture prend une décision sur votre demande de renouvellement. Si elle est favorable, votre nouveau titre de séjour est fabriqué et mis à disposition. Il est important de comprendre que c''est à vous d''aller le chercher. Ce n''est pas un envoi postal.





-   **Courrier postal** : Dans d''autres cas, vous recevrez un courrier vous invitant à venir retirer votre titre, précisant les horaires et les documents à apporter.
-   **E-mail / Espace ANEF** : Si votre démarche a été dématérialisée via l''ANEF, la notification peut apparaître directement sur votre espace personnel ou par e-mail.

-   Sur certains sites de préfecture ou sur votre espace ANEF, vous pouvez suivre l''état d''avancement de votre demande et savoir quand votre titre est "prêt à être remis".


Les modalités de retrait peuvent varier légèrement d''une préfecture à l''autre.

-   D''autres préfectures proposent des guichets de retrait sans rendez-vous, avec des horaires spécifiques.

-   **Votre ancien titre de séjour** (original, même s''il est expiré). Il vous sera demandé et annulé.


-   L''agent vérifiera votre identité et vos documents.


Une fois votre titre en main, un dernier contrôle s''impose.

    -   Type de titre (ex: "étudiant", "salarié", "Passeport Talent").
    -   Numéro d''étranger.
-   **Signalez toute erreur** : En cas d''erreur, signalez-la immédiatement à l''agent. Une correction est plus facile à faire sur place.

-   **Comme votre passeport** : Traitez votre nouveau titre de séjour avec le même soin que votre passeport. C''est le document le plus important prouvant votre droit de résider en France.
-   **Gardez-le en lieu sûr** : Dans un portefeuille sécurisé, à l''abri de l''humidité, de la perte ou du vol.




-   **Préparez le timbre fiscal à l''avance** : Achetez-le en ligne quelques jours avant votre rendez-vous de retrait.
-   **Faites des copies de tout** : Avant de laisser l''agent annuler votre ancien titre, assurez-vous d''avoir des copies si vous en avez besoin pour d''autres démarches.
-   **Prenez note de la nouvelle date d''expiration** : C''est le point de départ pour le prochain cycle de renouvellement !


-   **Penser que le titre vous sera envoyé** : Ce n''est jamais le cas.


-   🔗 [ANEF : Suivi de ma demande](https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/suivi) - Pour suivre l''état d''avancement de votre dossier en ligne.
-   🔗 [Impots.gouv.fr : Timbre fiscal](https://www.timbres.impots.gouv.fr/) - Pour l''achat du timbre.
-   🔗 [Ministère de l''Intérieur : Gérer ses documents administratifs](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Gerer-ses-documents) - Conseils de sécurisation.
-   🔗 [CNIL : Protection de vos données d''identité](https://www.cnil.fr/fr/proteger-ses-donnees-personnelles) - Précautions à prendre.


Le retrait de votre nouveau titre de séjour est l''étape finale de votre renouvellement. Soyez attentif aux notifications de la préfecture, préparez tous les documents requis (convocation, passeport, ancien titre, récépissé, timbre fiscal) et vérifiez minutieusement toutes les informations inscrites sur votre carte. Une fois en votre possession, protégez-le comme un document précieux : il est la preuve de la légalité de votre séjour en France et la garantie de la continuité de tous vos droits.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 5 ---

-- COURS 6 : Dossier Préfecture : La liste ultime
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'b2c3d4e5-f6a7-4901-c8d9-e0f1a2b3c4d5',
  'Dossier Préfecture : La liste ultime des documents à fournir',
  'dossier-prefecture-liste-ultime-documents',
  'Ce cours compile la liste exhaustive et cruciale des documents à préparer pour toutes vos démarches en préfecture, que ce soit pour une première demande de titre de séjour, un renouvellement ou un changement de statut. Un dossier incomplet est la cause numéro un des retards et des refus. Nous détaillerons les justificatifs de domicile acceptés, les preuves de ressources (le fameux seuil des 615€/mois), les normes spécifiques pour les photos d''identité, et l''organisation optimale de votre classeur physique et numérique. Maîtriser cette préparation est essentiel pour garantir la réussite de votre dossier administratif.',
  'Liste ultime des documents pour la préfecture : domicile,
  ressources,
  photos. Évitez le refus,
  soyez prêt !',
  'integration_administrative',
  'intermediaire',
  'fr',
  'https://images.unsplash.com/photo-1518655282711-d9774656ee43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFkbWluaXN0cmF0aW9uJTIwcGFwZXJzJTIwfGVufDB8fDB8fHww',
  '["Connaître la liste exhaustive des documents pour la préfecture", "Identifier les justificatifs de domicile valides", "Comprendre les exigences en matière de ressources financières", "Préparer des photos d''identité aux normes et organiser son dossier"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5,
  100,
  500,
  4,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 6
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '9a0b1c2d-3e4f-4012-j5k6-l7m8n9o0p1q2',
  'b2c3d4e5-f6a7-4901-c8d9-e0f1a2b3c4d5',
  'Justificatifs de domicile : Lesquels sont acceptés ?',
  '# Justificatifs de domicile : Lesquels sont acceptés ?

## Pourquoi c''est important ?

Le justificatif de domicile est une pièce maîtresse de tout dossier administratif en France, et particulièrement pour les demandes de titre de séjour ou de son renouvellement. Il prouve que vous résidez légalement et de manière stable sur le territoire français. Sans un justificatif de domicile valide et à votre nom, votre dossier sera considéré comme incomplet et sera rejeté, entraînant un retard ou un refus de votre demande. Comprendre quels documents sont acceptés, leurs critères de validité (notamment la date), et comment en obtenir un si vous n''en avez pas directement à votre nom, est absolument fondamental pour la réussite de vos démarches administratives.




Le justificatif de domicile est une preuve de votre lieu de résidence habituelle. L''administration française est très stricte sur ce point : le document doit être récent (généralement moins de 6 ou 3 mois), à votre nom, et correspondre à votre adresse actuelle. Il est essentiel de ne pas prendre cette pièce à la légère.





-   **Facture d''électricité, de gaz, d''eau ou de téléphone fixe/internet** : Ce sont les justificatifs les plus couramment acceptés. La facture doit être de moins de 6 mois.
-   **Quittance de loyer** : Un reçu de paiement de loyer d''un organisme (agence immobilière, bailleur social) ou d''un propriétaire, de moins de 6 mois. Attention, un reçu manuscrit de particulier peut être accepté mais doit être accompagné d''un justificatif du propriétaire (voir point suivant).
-   **Titre de propriété** : Si vous êtes propriétaire de votre logement (moins de 6 mois pour l''acte notarié ou relevé de taxe foncière récente).
-   **Avis d''imposition ou de non-imposition** : L''avis le plus récent.
-   **Attestation d''assurance logement** : De moins de 6 mois.


Si vous n''avez pas de facture à votre nom, vous devrez fournir des documents supplémentaires.

-   **Attestation d''hébergement** : Une lettre manuscrite ou tapuscrite de la personne qui vous héberge, datée et signée, certifiant que vous vivez chez elle depuis plus de 3 mois (ou depuis une date précise).
-   **Justificatif de domicile de l''hébergeant** : Une facture (électricité, gaz, eau, internet) ou une quittance de loyer à son nom, de moins de 6 mois.
-   **Copie de la pièce d''identité de l''hébergeant** : Passeport ou carte d''identité (recto-verso).
-   **Pour les résidences étudiantes (CROUS, privées)** : Une attestation de résidence émise par l''administration de la résidence, datée de moins de 3 mois.


Pour qu''un justificatif soit accepté, il doit répondre à des critères stricts.

-   **Moins de 6 mois (généralement)** : C''est le critère le plus courant. Certaines préfectures peuvent être plus exigeantes (moins de 3 mois). Vérifiez le site de votre préfecture.
-   **Date d''émission** : C''est la date d''émission de la facture ou de l''attestation qui compte, pas la date de consommation.

-   Le document doit clairement indiquer **votre nom (ou celui de l''hébergeant)** et votre **adresse complète** en France.
-   L''adresse doit correspondre à celle que vous déclarez dans votre dossier.

-   Il doit s''agir d''un document émanant d''un organisme officiel ou d''un professionnel (fournisseur d''énergie, bailleur, banque, administration).


-   Ou : **Attestation d''hébergement**, **justificatif de domicile de l''hébergeant**, **copie pièce d''identité de l''hébergeant**.


-   **Anticipez !** Si vous venez d''emménager, il peut falloir plusieurs semaines pour recevoir une facture à votre nom.
-   **Faites attention aux "premières factures"** : Si vous venez d''ouvrir un contrat, la première facture peut tarder. Si vous êtes dans ce cas, contactez votre fournisseur pour demander une "attestation de contrat" ou un "justificatif d''ouverture de ligne" qui peut parfois être accepté.
-   **Vérifiez votre boîte aux lettres** : Ne ratez pas l''arrivée de vos factures.
-   **Si vous déménagez**, informez rapidement votre fournisseur d''énergie pour obtenir une facture à votre nouvelle adresse.


-   **Présenter un document non recevable** : Par exemple, une facture de téléphone portable n''est généralement pas acceptée car elle ne prouve pas une résidence fixe.
-   **Oublier la pièce d''identité de l''hébergeant** : En cas d''hébergement, c''est un oubli fréquent et bloquant.
-   **L''attestation d''hébergement non manuscrite** : Si elle est tapée, l''hébergeant doit la signer et joindre sa pièce d''identité. Certaines préfectures peuvent demander une attestation manuscrite.
-   **Erreur sur l''adresse** : Toute incohérence entre le document et votre déclaration d''adresse.


-   🔗 [Préfectures de France : Sites web](https://www.interieur.gouv.fr/Le-ministere/Nos-reseaux/Prefectures) - Chaque préfecture détaille sur son site la liste exacte des pièces. C''est la source la plus fiable.
-   🔗 [Ministère de l''Intérieur : Gérer ses documents administratifs](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Gerer-ses-documents) - Conseils pour les documents.


Le justificatif de domicile est une pièce indispensable pour votre dossier de préfecture. Il doit être récent (moins de 6 mois), à votre nom (ou au nom de votre hébergeant avec attestation et copie de sa pièce d''identité) et provenir d''un organisme officiel. Anticipez sa préparation, vérifiez sa validité et conservez-le précieusement. Une attention rigoureuse à cette pièce vous évitera de nombreux désagréments administratifs.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'a0b1c2d3-e4f5-4012-k6l7-m8n9o0p1q2r3',
  'b2c3d4e5-f6a7-4901-c8d9-e0f1a2b3c4d5',
  'Justificatifs de ressources (615€/mois)',
  '# Justificatifs de ressources (615€/mois)

## Pourquoi c''est important ?

Prouver que vous disposez de ressources financières suffisantes est une condition absolument non négociable pour l''obtention ou le renouvellement de votre titre de séjour en France, en particulier pour les étudiants. Le seuil de 615€ par mois (montant indicatif qui peut évoluer) est un minimum légal fixé par l''État. L''administration veut s''assurer que vous pouvez subvenir à vos besoins sans devenir une charge pour les services sociaux. Sans preuves irréfutables de ces ressources, votre dossier sera rejeté, peu importe la qualité de votre parcours académique ou professionnel. C''est une garantie financière de votre autonomie.




Que vous soyez étudiant, visiteur, ou même dans certains cas de vie privée et familiale, la préfecture exigera des preuves que vous avez les moyens de vivre en France. Le montant requis est calculé sur la base de 70% du montant de l''allocation de subsistance accordée aux boursiers du gouvernement français. Ce seuil est révisé annuellement, il est donc essentiel de vérifier le montant exact au moment de votre démarche.




Ce montant est un minimum. Il est recommandé d''avoir plus.

-   **Exception boursiers** : Si vous êtes boursier du gouvernement français ou d''un gouvernement étranger avec une bourse gérée par Campus France, la bourse elle-même est considérée comme un justificatif suffisant si son montant couvre le seuil.
-   **Attention aux évolutions** : Ce montant est susceptible d''être mis à jour par décret. Vérifiez toujours la dernière information sur le site de votre préfecture ou de Service-Public.fr.



-   **Attestation de virement irrévocable** : D''une banque étrangère vers une banque française, attestant du virement d''une somme suffisante.
-   **Certificat de virement bancaire** : Prouvant que les fonds sont disponibles sur un compte à l''étranger, avec une attestation de la banque spécifiant que vous pouvez disposer de ces fonds en France.

-   **Attestation de bourse officielle** : Délivrée par l''organisme qui vous accorde la bourse (gouvernement français, Campus France, gouvernement étranger). Elle doit spécifier le montant et la durée de la bourse.

-   **Attestation de prise en charge d''un garant** : Si un membre de votre famille ou un proche (souvent en France) s''engage à subvenir à vos besoins.
    -   Elle doit être accompagnée des justificatifs de ressources du garant (avis d''imposition, bulletins de salaire, relevés bancaires, attestation de propriété) et d''une copie de sa pièce d''identité. Le garant doit prouver qu''il dispose lui-même de revenus suffisants après s''être engagé à vous prendre en charge.



-   Si hébergé/garanti : **Attestation de prise en charge**, **justificatifs financiers du garant**, **pièce d''identité du garant**.


-   **Anticipez le transfert de fonds** : Si vos fonds proviennent de l''étranger, assurez-vous qu''ils soient transférés en France sur votre compte bancaire bien avant votre demande.
-   **Demandez des attestations officielles** : Les captures d''écran ou les relevés non officiels ne sont généralement pas acceptés.
-   **Ayez une marge de sécurité** : Il est toujours préférable d''avoir un montant supérieur au minimum requis.
-   **Préparez des traductions assermentées** : Si vos documents sont dans une langue autre que le français ou l''anglais.


-   **Ne pas atteindre le seuil des 615€/mois** : C''est un motif de refus quasi systématique.


-   🔗 [Campus France : Le budget de l''étudiant](https://www.campusfrance.org/fr/le-budget-de-l-etudiant-en-france) - Informations utiles sur le coût de la vie.
-   🔗 [Ministère de l''Intérieur : Justificatifs à fournir](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Les-justificatifs-a-fournir) - Généralités sur les pièces.
-   🔗 [Banque de France : Services bancaires pour les particuliers](https://www.banque-france.fr/vos-services/particuliers) - Pour comprendre l''ouverture de compte.


La preuve de ressources suffisantes (environ 615€/mois) est un pilier de votre dossier de titre de séjour. Qu''il s''agisse d''une attestation bancaire, d''une bourse ou d''une prise en charge par un garant, assurez-vous que vos justificatifs sont clairs, récents, et qu''ils couvrent le montant minimum requis. Une préparation rigoureuse de cette partie de votre dossier est essentielle pour prouver votre autonomie financière et garantir la réussite de votre demande.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'b1c2d3e4-f5a6-4012-l7m8-n9o0p1q2r3s4',
  'b2c3d4e5-f6a7-4901-c8d9-e0f1a2b3c4d5',
  'Photos d''identité aux normes e-photo',
  '# Photos d''identité aux normes e-photo

## Pourquoi c''est important ?

Les photos d''identité sont une pièce minuscule mais d''une importance capitale dans tout dossier administratif français, et particulièrement pour votre titre de séjour. Les normes sont extrêmement strictes et précises. Une photo non conforme (mauvaise taille, mauvaise qualité, expression du visage non neutre, etc.) entraînera systématiquement le rejet de votre dossier et un retard considérable, voire un refus. L''introduction du système "e-photo" a simplifié la démarche mais exige toujours le respect de règles précises. Maîtriser ces normes et savoir où faire des photos conformes est essentiel pour éviter un blocage inutile de votre demande.


-   Connaître les normes officielles françaises pour les photos d''identité.
-   Comprendre le fonctionnement du système "e-photo" et ses avantages.


Les photos d''identité sont utilisées pour des documents officiels comme votre titre de séjour, votre passeport, ou votre permis de conduire. Elles doivent permettre une identification facile et sans ambiguïté. C''est pourquoi des règles précises ont été établies au niveau international (OACI) et adaptées en France.

🔗 [Service-Public.fr : Normes pour les photos d''identité](https://www.service-public.fr/particuliers/vosdroits/F10616) - La page officielle qui détaille toutes les normes.


### 1. Les normes officielles pour les photos d''identité



#### b) Le visage et l''expression
-   **Expression neutre** : Bouche fermée, ne pas sourire, fixer l''objectif.


🔗 [Ministère de l''Intérieur : Exemples de photos conformes et non conformes](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Photos-d-identite-pour-un-titre-de-sejour) - Très utile pour visualiser les règles.

### 2. Le système "e-photo" et ses avantages


-   **Qu''est-ce que l''e-photo ?** : C''est une photo d''identité numérique accompagnée d''une signature électronique. Vous obtenez une planche de 4 photos papier et un numéro unique. Ce numéro est à indiquer lors de vos démarches en ligne.
    -   **Garantie de conformité** : Les cabines ou photographes agréés "e-photo" s''assurent que la photo respecte toutes les normes.



-   Recherchez des photographes professionnels qui proposent des "photos d''identité aux normes ANTS" ou "e-photo". Ils connaissent parfaitement les exigences.

#### b) Cabines Photomaton agréées "e-photo"
-   Recherchez le logo "e-photo" ou "Service agréé ANTS" sur la cabine.
-   Le coût est d''environ 5 à 8€.





-   **N''essayez pas de faire vos photos vous-même** : Les chances de conformité sont minimes.
-   **Faites les photos au moment de votre démarche** : Ne les faites pas six mois avant, elles doivent être "récentes".
-   **Demandez toujours une "e-photo"** : Même si la procédure n''est pas encore entièrement dématérialisée pour votre cas, cela garantit la conformité et vous donne un support physique.


-   **Photos scannées** : Ne jamais scanner une photo d''identité existante, cela altère la qualité.
-   **Penser que n''importe quelle photo de passeport suffit** : Vérifiez toujours qu''elle respecte les normes françaises spécifiques.


-   🔗 [ANTS (Agence Nationale des Titres Sécurisés) : E-photo](https://ants.gouv.fr/les-services-en-ligne/faire-une-e-photo) - Le site de l''ANTS pour l''e-photo.
-   🔗 [Service-Public.fr : Photos d''identité - La FAQ](https://www.service-public.fr/particuliers/vosdroits/F10616/FAQ) - Réponses aux questions fréquentes.
-   🔗 [Ministère de l''Intérieur : Les exigences en matière de photos](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Photos-d-identite-pour-un-titre-de-sejour) - Un guide visuel très clair.


Des photos d''identité conformes aux normes sont un élément non négociable de votre dossier de préfecture. Privilégiez les cabines "e-photo" ou les photographes agréés pour garantir leur validité. Respectez scrupuleusement les exigences de format, de fond, d''expression du visage et de qualité. Une attention méticuleuse à cette étape vous évitera un rejet de dossier et des retards inutiles.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'c2d3e4f5-a6b7-4012-m8n9-o0p1q2r3s4t5',
  'b2c3d4e5-f6a7-4901-c8d9-e0f1a2b3c4d5',
  'Organiser son classeur physique et numérique',
  '# Organiser son classeur physique et numérique

## Pourquoi c''est important ?

Un dossier administratif, surtout pour des démarches comme le titre de séjour, peut rapidement devenir un amas de documents si vous n''êtes pas organisé. Un classeur bien structuré, qu''il soit physique ou numérique, n''est pas un simple "plus" : c''est une nécessité absolue pour éviter le stress, les pertes de temps et les erreurs qui pourraient compromettre votre demande. Imaginez devoir chercher pendant des heures un document crucial à la dernière minute, ou pire, ne pas le trouver du tout ! Une bonne organisation vous permet d''être réactif, de présenter un dossier clair et complet à l''administration, et de garder une trace de toutes vos démarches, ce qui est d''autant plus important en cas de litige ou de contrôle.




La vie en France implique de nombreuses démarches administratives. Que ce soit pour la préfecture, la CAF, la Sécurité Sociale, la banque ou les impôts, vous serez amené(e) à produire et conserver de nombreux documents. Un système d''organisation simple et efficace est votre meilleur allié.






    -   Photos d''identité (quelques-unes de rechange).
    -   Attestation d''hébergement (si applicable).
    -   Avis d''imposition.
    -   Certificats de scolarité / d''inscription.
    -   Conventions de stage, contrats d''alternance.




-   Créez un dossier principal nommé "Administratif France" (ou similaire).
-   À l''intérieur, reproduisez la structure de votre classeur physique (sous-dossiers "Identité", "Domicile", "Ressources", etc.).

-   Utilisez un service de stockage en ligne sécurisé (Google Drive, Dropbox, OneDrive) pour sauvegarder l''intégralité de votre dossier numérique.

-   **Soyez précis** : "Passeport-NOM-Prenom.pdf", "Titre-Sejour-2024-NOM-Prenom.pdf", "Facture-EDF-Janv2025.pdf", "Releve-Notes-Master1-2024.pdf".

-   Utilisez des applications de scanner sur smartphone si vous n''avez pas de scanner physique (ex: CamScanner, Adobe Scan).




-   **Dès réception d''un nouveau document** :
    4.  Rangez l''original dans le classeur physique.
-   **Faites des copies des originaux** : Pour les documents les plus importants (passeport, titre de séjour), ayez des photocopies qui ne circuleront pas avec l''original.
-   **Lisez les listes de pièces** : Avant chaque démarche, lisez la liste des documents requis par l''administration et préparez le dossier spécifiquement pour cette demande (copies, originaux).


-   **Mettre des documents sensibles sur un cloud non sécurisé** : Choisissez un service fiable et utilisez l''authentification à deux facteurs.
-   **Ne pas comprendre la différence entre original et copie** : Pour certaines démarches, l''original est exigé.


-   🔗 [Service-Public.fr : L''organisation de ses papiers](https://www.service-public.fr/particuliers/vosdroits/F17822) - Conseils sur l''organisation et la durée de conservation.
-   🔗 [Ministère de l''Intérieur : Documents à fournir pour étrangers](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Gerer-ses-documents) - Conseils sur les pièces spécifiques aux étrangers.


Une organisation rigoureuse de vos documents administratifs, tant physique que numérique, est essentielle pour la réussite de vos démarches en France. Créez un classeur par catégorie et des dossiers numériques structurés avec des noms de fichiers clairs. Scannez tous vos documents importants et sauvegardez-les dans un service cloud sécurisé. Cette méthode vous fera gagner un temps précieux, réduira votre stress et garantira que vous serez toujours prêt(e) à fournir les pièces nécessaires à l''administration.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

