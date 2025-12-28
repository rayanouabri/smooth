-- ==========================================
-- LOT 2 : Cours 6 à 10
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 6 ---

-- COURS 7 : Changer de statut : Étudiant vers Salarié
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'c3d4e5f6-a7b8-4901-d9e0-f1a2b3c4d5e6',
  'Changer de statut : D''étudiant à Salarié en France',
  'changer-statut-etudiant-salarie-france',
  'Ce cours est conçu pour les étudiants internationaux souhaitant passer du statut étudiant à celui de salarié en France, une étape clé mais complexe. Nous vous guiderons à travers le moment idéal pour initier la démarche (dès la promesse d''embauche), la procédure détaillée de changement de statut, la cruciale notion d''"opposabilité de l''emploi" et les critères à remplir, ainsi que les délais de traitement et le maintien de vos droits. C''est un parcours semé d''embûches administratives, mais avec une bonne préparation, la transition est tout à fait réalisable. Maîtrisez ces informations pour sécuriser votre avenir professionnel en France.',
  'Passez d''étudiant à salarié en France : promesse d''embauche, procédure, opposabilité de l''emploi, délais. Guide essentiel !',
  'insertion_professionnelle',
  'avance',
  'fr',
  5,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Identifier le moment opportun pour initier le changement de statut", "Comprendre la procédure de demande de titre de séjour salarié", "Maîtriser la notion d''opposabilité de l''emploi et ses critères", "Connaître les délais de traitement et le maintien des droits"]'::jsonb,
  '["Être titulaire d''un titre de séjour étudiant", "Avoir obtenu un diplôme de l''enseignement supérieur français (Master ou équivalent)"]'::jsonb,
  TRUE,
  4.8,
  380,
  2800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 7
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'd4e5f6a7-b8c9-4012-e0f1-a2b3c4d5e6f7',
  'c3d4e5f6-a7b8-4901-d9e0-f1a2b3c4d5e6',
  'Le moment clé : Promesse d''embauche',
  '# Le moment clé : Promesse d''embauche

## Pourquoi c''est important ?

Pour changer de statut d''étudiant à salarié en France, l''existence d''une proposition d''emploi concrète est la pierre angulaire de votre dossier. La "promesse d''embauche" (ou l''offre de contrat de travail) n''est pas un simple engagement verbal : c''est un document officiel qui marque le début des démarches administratives de changement de statut. Sans cette preuve formelle, ni vous ni votre futur employeur ne pourrez initier la procédure auprès de l''administration. Comprendre la nature de ce document, son contenu essentiel, et son importance juridique est donc crucial pour déclencher efficacement votre transition professionnelle en France.


-   Définir ce qu''est une promesse d''embauche dans le contexte d''un changement de statut.
-   Comprendre le caractère contraignant de la promesse d''embauche pour l''employeur.


Vous avez terminé vos études, ou êtes sur le point de les terminer, et avez trouvé un emploi en France. Félicitations ! Cependant, pour passer de votre statut d''étudiant à celui de salarié, la procédure est spécifique et nécessite l''implication de votre futur employeur. La première étape formelle est l''obtention d''une promesse d''embauche ou d''un contrat de travail déjà rédigé.

🔗 [Service-Public.fr : La promesse d''embauche](https://www.service-public.fr/particuliers/vosdroits/F10403) - Informations générales sur la promesse d''embauche.


### 1. La nature et la valeur juridique de la promesse d''embauche

Une promesse d''embauche est un engagement ferme.

-   **Un contrat avant le contrat** : Juridiquement, une promesse d''embauche vaut contrat de travail si elle contient les éléments essentiels (emploi, rémunération, date d''embauche).
-   **Engagement réciproque** : Elle engage l''employeur à vous embaucher et vous, le salarié, à accepter le poste. Le non-respect de cet engagement par l''une ou l''autre partie peut entraîner des conséquences juridiques (indemnités).
-   **Document clé pour l''administration** : Pour la préfecture et la DREETS (Direction Régionale de l''Économie, de l''Emploi, du Travail et des Solidarités), c''est la preuve concrète d''une proposition d''emploi.

### 2. Contenu obligatoire de la promesse d''embauche pour la préfecture

Pour être recevable par l''administration, la promesse d''embauche doit être complète et précise.

-   **Date d''embauche prévue** : Une date précise est nécessaire.
-   **Lieu de travail** : L''adresse où vous allez travailler.
-   **Identification de l''employeur** : Nom, adresse, numéro SIRET de l''entreprise.
-   **Signature de l''employeur ou de son représentant légal**.

🔗 [Code du Travail : Articles sur la promesse d''embauche](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006072050/2023-01-01/#LEGIARTI000024443831) - Références juridiques.

### 3. Le rôle de la promesse d''embauche dans la procédure

C''est le point de départ de la demande d''autorisation de travail.

-   **Base de la demande d''autorisation de travail** : Votre employeur utilisera cette promesse d''embauche pour déposer une demande d''autorisation de travail auprès de la DREETS. C''est à ce moment-là que la notion d''"opposabilité de l''emploi" sera examinée.
-   **Preuve de ressources futures** : Pour la préfecture, elle constitue une preuve de vos futures ressources stables en France, élément essentiel pour l''obtention de votre titre de séjour salarié.

### 4. Quand et comment l''obtenir ?

La promesse d''embauche doit être sollicitée dès que l''accord est donné.

-   **Dès l''accord oral** : Dès que votre futur employeur vous confirme verbalement l''embauche, demandez-lui d''officialiser sa proposition par écrit via une promesse d''embauche.
-   **Modèle** : Votre employeur peut utiliser un modèle de promesse d''embauche ou un "contrat de travail visé pour étranger".
-   **Pièce maîtresse** : C''est le document le plus important de votre dossier de changement de statut. Sans elle, aucune démarche n''est possible.


-   La **promesse d''embauche** (ou contrat de travail) originale.


-   **Vérifiez le contenu de la promesse** : Avant de la transmettre, assurez-vous qu''elle contient toutes les informations requises par l''administration. Une promesse incomplète vous fera perdre du temps.
-   **Soyez transparent avec votre employeur** : Expliquez-lui que cette promesse est essentielle pour vos démarches de visa et qu''elle doit être détaillée. Il est possible qu''il ne soit pas familier avec cette procédure.
-   **Demandez une date d''embauche réaliste** : Prenez en compte les délais administratifs potentiels pour le changement de statut (plusieurs mois).


-   **Promesse d''embauche informelle** : Un simple e-mail non détaillé ou un accord verbal ne sera pas accepté par l''administration.
-   **Date d''embauche irréaliste** : Si la date d''embauche est trop proche et ne permet pas d''achever la procédure de changement de statut, cela peut poser problème.


-   🔗 [Ministère du Travail : L''emploi d''un salarié étranger](https://travail-emploi.gouv.fr/droit-du-travail/remuneration/article/l-emploi-d-un-salarie-etranger-en-france) - Guide pour les employeurs.
-   🔗 [DREETS (ex-DIRECCTE) : Demande d''autorisation de travail](https://www.service-public.fr/particuliers/vosdroits/F2728) - C''est à cet organisme que votre employeur enverra la promesse d''embauche.
-   🔗 [Service-Public.fr : Droit au travail des étrangers](https://www.service-public.fr/particuliers/vosdroits/N102) - Vue d''ensemble.
-   🔗 [Légifrance : Code du Travail - Promesse d''embauche](https://www.legifrance.gouv.fr/codes/id/LEGIARTI000024443831/) - Les textes de loi.
-   🔗 [Avocats spécialisés en droit du travail ou droit des étrangers](https://www.conseil-national-des-barreaux.fr/les-avocats/annuaire-des-avocats/) - Si vous ou votre employeur avez besoin d''un conseil juridique.


La promesse d''embauche est le document fondateur de votre changement de statut d''étudiant à salarié. Elle doit être formelle, complète et émaner de votre futur employeur. Ses informations précises (poste, rémunération, durée, date d''embauche) sont scrutées par l''administration. Soyez proactif dans son obtention et transparent avec votre employeur sur son importance. Ce document est votre passeport pour votre carrière professionnelle en France.
',
  1,
  70,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'e5f6a7b8-c9d0-4012-q3r4-s5t6u7v8w9x0',
  'c3d4e5f6-a7b8-4901-d9e0-f1a2b3c4d5e6',
  'La procédure de changement de statut',
  '# La procédure de changement de statut

## Pourquoi c''est important ?

Changer de statut d''étudiant à salarié en France est une démarche administrative complexe qui nécessite une compréhension précise des étapes et des interlocuteurs. Contrairement à un renouvellement classique, il s''agit de passer d''un régime juridique (celui de l''étudiant) à un autre (celui du salarié). Cette procédure est d''autant plus délicate qu''elle implique non seulement le demandeur, mais aussi son futur employeur, et fait intervenir plusieurs administrations (la DREETS pour l''autorisation de travail, et la préfecture pour le titre de séjour). Une erreur dans la procédure, un dossier incomplet ou mal préparé peut entraîner un refus, mettant en péril votre projet professionnel en France.


-   Comprendre le rôle de l''employeur dans la demande d''autorisation de travail.


La procédure de changement de statut est encadrée par le Code de l''entrée et du séjour des étrangers et du droit d''asile (CESEDA). Elle vise à vérifier que l''emploi proposé correspond à votre formation et que le marché du travail français ne compte pas de candidat disponible pour ce poste. C''est une double validation, celle de l''emploi et celle du titre de séjour.



### 1. Le rôle clé de l''employeur : La demande d''autorisation de travail

C''est la première étape, et elle relève de votre futur employeur.

#### a) Dépôt de la demande par l''employeur
-   Votre employeur doit déposer une demande d''autorisation de travail auprès de la **DREETS** (Direction Régionale de l''Économie, de l''Emploi, du Travail et des Solidarités) du lieu de l''emploi.
-   **Documents requis pour l''employeur** :
    -   La promesse d''embauche ou le projet de contrat de travail (CDI recommandé).
    -   Justificatifs de l''entreprise (extrait Kbis, etc.).
    -   Preuves des démarches de recherche d''un candidat sur le marché français/européen (diffusion de l''offre à Pôle Emploi, etc.).
-   **Examen de l''opposabilité de l''emploi** : La DREETS examine si l''emploi proposé est compatible avec votre formation et si un candidat français ou européen ne pouvait pas occuper ce poste (voir leçon suivante sur l''opposabilité).

-   La DREETS rend une décision. Si elle est favorable, l''autorisation de travail est délivrée.

🔗 [Ministère du Travail : Autorisation de travail pour l''emploi d''un étranger](https://travail-emploi.gouv.fr/droit-du-travail/remuneration/article/l-emploi-d-un-salarie-etranger-en-france) - Guide pour les employeurs.

### 2. Votre rôle : La demande de titre de séjour "salarié" auprès de la préfecture

Une fois l''autorisation de travail obtenue, vous pouvez déposer votre dossier.

-   **ANEF** : De plus en plus de préfectures dématérialisent cette démarche. Rendez-vous sur `https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/` et cherchez la section "Demander un titre de séjour" ou "Changer de statut".
-   **Préfecture physique** : Si la démarche n''est pas dématérialisée dans votre département, vous devrez prendre rendez-vous en préfecture pour déposer votre dossier.

-   **Photos d''identité** aux normes "e-photo".
-   **Justificatifs de "sérieux des études"** (relevés de notes, attestations de réussite).
-   **L''autorisation de travail** délivrée par la DREETS.






-   **Favorable** : Votre titre de séjour "salarié" est fabriqué et vous serez convoqué pour le retirer.


-   La **promesse d''embauche/contrat de travail**.
-   L''**autorisation de travail** de la DREETS.


-   **Anticipez au maximum** : Commencez les démarches avec l''employeur plusieurs mois avant l''expiration de votre titre étudiant.
-   **Communiquez avec votre employeur** : Assurez-vous qu''il comprend la procédure et l''importance de chaque étape.
-   **Constituez un dossier impeccable** : L''exhaustivité et la clarté sont vos meilleurs atouts.
-   **Pensez à votre couverture sociale** : Une fois salarié, votre situation vis-à-vis de l''assurance maladie change légèrement.


-   **Ne pas avoir l''autorisation de travail avant de déposer en préfecture** : C''est un prérequis.
-   **Déposer le dossier trop tard** : Une interruption de droits peut survenir si votre titre étudiant expire avant l''obtention du récépissé.
-   **Changer de poste ou d''employeur pendant la procédure** : Cela peut annuler votre demande.
-   **Ne pas justifier du sérieux de vos études** : La préfecture peut refuser si elle estime que vous n''avez pas suivi vos études assidûment.
-   **Sous-estimer la complexité** : N''hésitez pas à demander conseil à des associations ou des avocats spécialisés.


-   🔗 [Ministère de l''Intérieur : Changer de statut](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Titre-de-sejour-pour-les-etrangers-en-France) - Informations générales sur les titres de séjour.
-   🔗 [DREETS : Autorisations de travail](https://dreets.gouv.fr/autorisations-de-travail) - Le site de la DREETS pour les demandes d''autorisation.
-   🔗 [Associations d''aide aux étrangers (GISTI, CIMADE)](https://www.gisti.org/spip.php?rubrique24) - Pour un accompagnement juridique et des conseils.


Le changement de statut d''étudiant à salarié est une procédure en deux temps : d''abord l''employeur dépose une demande d''autorisation de travail à la DREETS, puis vous déposez votre demande de titre de séjour salarié à la préfecture (souvent via l''ANEF). La promesse d''embauche, un diplôme français et la preuve du sérieux de vos études sont des éléments clés. Anticipez, préparez un dossier impeccable et communiquez étroitement avec votre employeur pour maximiser vos chances de réussite et sécuriser votre transition professionnelle en France.
',
  2,
  85,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-r6s7-t8u9v0w1x2y3',
  'c3d4e5f6-a7b8-4901-d9e0-f1a2b3c4d5e6',
  'Opposabilité de l''emploi : Comprendre le concept',
  '# Opposabilité de l''emploi : Comprendre le concept

## Pourquoi c''est important ?

Le concept d''"opposabilité de l''emploi" est l''un des obstacles majeurs pour les étrangers souhaitant changer de statut vers un titre de séjour salarié en France. Il signifie que l''administration vérifie que l''emploi proposé ne peut pas être pourvu par un candidat déjà présent sur le marché du travail français ou européen. Si votre futur employeur ne parvient pas à démontrer qu''il a cherché activement et infructueusement un candidat en France ou dans l''Union Européenne, votre autorisation de travail sera refusée, et par conséquent votre changement de statut. Comprendre ce principe est donc crucial pour orienter vos recherches d''emploi vers des secteurs "en tension" ou des postes spécifiques, et pour que votre employeur puisse justifier sa démarche auprès de la DREETS.


-   Définir précisément le principe d''opposabilité de l''emploi.
-   Savoir comment votre employeur peut justifier l''absence de candidat.


Dans le but de protéger l''emploi national et européen, la loi française prévoit que l''embauche d''un salarié étranger est soumise à une vérification préalable : existe-t-il déjà un candidat ayant les compétences requises sur le marché du travail français ou européen ? C''est la DREETS (Direction Régionale de l''Économie, de l''Emploi, du Travail et des Solidarités) qui est chargée de cette évaluation.

🔗 [Service-Public.fr : Autorisation de travail pour l''emploi d''un étranger](https://www.service-public.fr/particuliers/vosdroits/F2728) - La page officielle sur l''autorisation de travail, qui inclut le concept d''opposabilité.


### 1. Le principe de l''opposabilité de l''emploi

C''est une règle de protection du marché du travail.

-   **Définition** : L''opposabilité de l''emploi est le fait de vérifier qu''il n''existe pas de travailleur disponible sur le marché de l''emploi en France (ou dans l''espace économique européen) pour occuper le poste proposé à l''étranger.
-   **Rôle de la DREETS** : C''est la DREETS qui réalise cette vérification, après dépôt de la demande par l''employeur.
-   **Processus** : La DREETS consulte Pôle Emploi et d''autres bases de données pour voir si des profils similaires au vôtre, mais avec un statut français/européen, sont disponibles pour le poste.

### 2. Comment la DREETS évalue l''opposabilité ?


#### a) L''offre d''emploi

#### b) Les démarches de recherche de l''employeur
-   L''employeur doit prouver qu''il a diffusé l''offre d''emploi pendant un certain temps (souvent 3 semaines) auprès d''organismes comme Pôle Emploi et d''autres canaux de recrutement.
-   Il doit démontrer qu''il a sérieusement cherché un candidat en France ou dans l''UE, mais sans succès.

-   **Métiers en tension** : Pour certains métiers, la demande est supérieure à l''offre de main-d''œuvre. Ces "métiers en tension" sont recensés et pour eux, le principe d''opposabilité est moins strict, voire levé. (Voir point suivant).
-   **Zones géographiques** : La tension d''un métier peut aussi varier selon les régions.

🔗 [Ministère du Travail : L''opposabilité de l''emploi](https://travail-emploi.gouv.fr/droit-du-travail/remuneration/article/l-emploi-d-un-salarie-etranger-en-france) - Détails sur les critères d''évaluation.


Heureusement, il existe des situations qui facilitent l''autorisation de travail.

-   **Qu''est-ce que c''est ?** : C''est une liste de métiers pour lesquels Pôle Emploi rencontre des difficultés à trouver des candidats.
-   **Avantage** : Si le poste que vous occupez fait partie de cette liste, l''opposabilité de l''emploi est assouplie, voire levée. L''autorisation de travail est alors plus facile à obtenir.


-   Si vous avez obtenu un Master 2 (ou un diplôme de niveau équivalent) en France, les conditions d''opposabilité sont également assouplies. C''est un avantage considérable pour les étudiants étrangers ayant fait tout leur cursus en France.
-   L''emploi doit être en adéquation avec votre diplôme.

-   Les titulaires d''un titre "Passeport Talent" (chercheur, salarié hautement qualifié, etc.) sont par définition dispensés d''autorisation de travail ou de l''examen de l''opposabilité de l''emploi, car leur statut est déjà reconnu comme apportant une compétence particulière.



-   **Diffusion de l''offre** : L''employeur doit prouver qu''il a diffusé l''offre d''emploi sur des plateformes pertinentes (Pôle Emploi, APEC, sites spécialisés) pendant un délai suffisant.
-   **Compte-rendu des candidatures** : Il doit conserver les candidatures reçues et justifier pourquoi elles n''ont pas abouti (manque de qualification, d''expérience, etc.).
-   **Adéquation du profil** : Mettre en avant le fait que votre profil (votre formation spécifique, vos compétences, vos langues étrangères) est unique et correspond parfaitement au besoin, et qu''il n''y a pas eu de profil équivalent parmi les candidats français/européens.


-   La **promesse d''embauche** ou le **contrat de travail**.
-   La **preuve des démarches de recherche de l''employeur**.


-   **Ciblez les métiers en tension** : Si possible, orientez vos recherches d''emploi vers des secteurs ou des postes pour lesquels il y a une pénurie de main-d''œuvre.


-   **Ne pas prendre l''opposabilité au sérieux** : C''est une cause majeure de refus.
-   **Promesse d''embauche pour un poste non qualifié** : Si le poste n''est pas en adéquation avec votre diplôme, cela peut être un motif de refus.
-   **Employeur ne justifiant pas ses recherches** : Si l''employeur ne peut pas prouver qu''il a cherché activement.
-   **Ne pas faire la demande d''autorisation de travail à temps** : Elle doit être validée avant la demande de titre de séjour.


-   🔗 [DREETS : La demande d''autorisation de travail](https://dreets.gouv.fr/autorisations-de-travail) - Le site de référence pour toutes les informations.
-   🔗 [Légifrance : Articles R.5221-1 et suivants du Code du Travail](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072050/LEGISCTA000006198642/#LEGIARTI000006198751) - Textes de loi sur l''autorisation de travail et l''opposabilité.
-   🔗 [GISTI (Groupe d''information et de soutien des immigrés) : Fiches pratiques](https://www.gisti.org/spip.php?rubrique24) - Très bonnes ressources juridiques sur ces questions.


L''opposabilité de l''emploi est un principe fondamental pour le changement de statut d''étudiant à salarié en France. Il exige que l''employeur démontre qu''il n''a pas trouvé de candidat sur le marché du travail français/européen. Les métiers en tension et l''obtention d''un Master français sont des atouts majeurs. En comprenant ce concept et en guidant votre employeur dans la justification de sa démarche, vous augmenterez considérablement vos chances d''obtenir l''autorisation de travail et de concrétiser votre projet professionnel en France.
',
  3,
  80,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '0g1h2i3j-4k5l-4012-s9t0-u1v2w3x4y5z6',
  'c3d4e5f6-a7b8-4901-d9e0-f1a2b3c4d5e6',
  'Les délais de traitement et le maintien des droits',
  '# Les délais de traitement et le maintien des droits

## Pourquoi c''est important ?

Les démarches de changement de statut d''étudiant à salarié en France peuvent être longues, et les délais de traitement par l''administration peuvent générer de l''incertitude. Comprendre ces délais, savoir comment les anticiper et surtout connaître vos droits pendant cette période transitoire est absolument essentiel. Une mauvaise information sur le maintien de vos droits (travail, sécurité sociale, aides sociales) peut entraîner des interruptions fâcheuses, vous plaçant dans des situations précaires et illégales. Maîtriser ce volet de la procédure vous permettra de naviguer sereinement entre l''expiration de votre titre étudiant et l''obtention de votre nouveau titre salarié.


-   Connaître les droits spécifiques qui sont maintenus ou non pendant la période d''attente.
-   Maîtriser les conseils pour gérer l''incertitude et anticiper les renouvellements de récépissé.


Le temps que prend l''administration pour instruire un dossier de changement de statut est souvent une source d''angoisse. Entre le dépôt de la demande d''autorisation de travail par l''employeur, l''instruction de la DREETS, le dépôt de votre dossier à la préfecture et la fabrication du titre, plusieurs mois peuvent s''écouler. C''est pourquoi le "récépissé de demande de titre de séjour" joue un rôle clé dans le maintien de vos droits.





-   **Délai d''instruction** : La DREETS dispose généralement d''un délai pour instruire la demande d''autorisation de travail de votre employeur. Ce délai est souvent de 2 mois, mais peut être plus court ou plus long selon la complexité du dossier et la charge de travail de la DREETS locale.
-   **Réponse implicite** : L''absence de réponse de la DREETS après un certain délai peut valoir acceptation (décision implicite), mais il est toujours préférable d''avoir une réponse explicite.

-   **Dépôt du dossier** : Après l''obtention de l''autorisation de travail, vous déposez votre dossier de titre de séjour salarié.
-   **Délai d''instruction** : La préfecture dispose également de plusieurs mois pour instruire votre dossier et fabriquer votre titre. Ce délai varie fortement d''une préfecture à l''autre (de 2 à 6 mois, voire plus).

-   Au total, le processus complet (de la promesse d''embauche au retrait du titre) peut prendre entre **3 et 8 mois, voire plus**. C''est pourquoi l''anticipation est primordiale.



#### a) Qu''est-ce que le récépissé ?
-   C''est l''attestation que la préfecture vous remet après le dépôt de votre dossier de changement de statut. Il atteste de la régularité de votre séjour en France pendant l''instruction de votre demande.
-   **Validité** : Il est généralement valable 6 mois, renouvelable si le traitement de votre dossier n''est pas terminé.

-   **Droit de travailler** : Le récépissé de demande de changement de statut vers un titre "salarié" vous autorise à travailler dès sa délivrance, dans la limite de l''emploi et des conditions figurant sur la promesse d''embauche/contrat de travail validé par la DREETS.
-   **Accès à la Sécurité Sociale** : Vous continuez à bénéficier de votre couverture maladie. Informez l''Assurance Maladie de votre changement de statut et présentez votre récépissé.


### 3. Gestion de l''expiration du récépissé

Si la procédure s''éternise, vous devrez faire renouveler votre récépissé.

-   **Anticipez le renouvellement** : Si vous n''avez pas de nouvelles de votre titre 2 à 3 semaines avant l''expiration de votre récépissé, contactez la préfecture (via votre espace ANEF ou par e-mail/téléphone si possible) pour demander son renouvellement.
-   **Pas d''interruption** : Il est crucial de ne pas laisser votre récépissé expirer sans en avoir un nouveau.




-   **Anticipez au maximum** : Commencez la procédure de changement de statut bien avant l''expiration de votre titre étudiant.
-   **Suivez l''état de votre dossier** : Sur l''ANEF si dématérialisé, ou en contactant la préfecture si la procédure est physique.
-   **Soyez patient mais vigilant** : Ne harcelez pas l''administration, mais ne laissez pas le dossier s''enliser sans relance justifiée.


-   **Ne pas déposer la demande d''autorisation de travail à temps** : Cela retardera tout le processus.
-   **Voyager hors de l''espace Schengen avec un simple récépissé** : Risque très élevé de se voir refuser le retour en France.


-   🔗 [ANEF : Suivi de ma demande](https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/suivi) - Pour suivre l''état d''avancement de votre dossier en ligne.
-   🔗 [Ministère du Travail : L''emploi d''un étranger en France](https://travail-emploi.gouv.fr/droit-du-travail/remuneration/article/l-emploi-d-un-salarie-etranger-en-france) - Informations pour l''employeur.
-   🔗 [Ameli.fr : Droit à l''assurance maladie](https://www.ameli.fr/assure/droits-demarches/etudes-superieures-sante/comprendre-systeme-sante-francais) - Maintien des droits avec le récépissé.


Les délais de traitement pour un changement de statut peuvent être longs. Le récépissé de demande de titre de séjour est le document qui vous garantit le maintien de vos droits au séjour, au travail et aux aides sociales pendant cette période. Il est crucial de déposer votre demande à temps, de veiller à son renouvellement si nécessaire, et de ne jamais laisser votre situation devenir irrégulière. Une gestion rigoureuse de ce processus vous permettra d''assurer une transition professionnelle et administrative réussie en France.
',
  4,
  70,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 7 ---

-- COURS 8 : L'APS / Carte Recherche d'Emploi
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'd5e6f7a8-b9c0-4012-e1f2-a3b4c5d6e7f8',
  'L''APS / Carte Recherche d''Emploi : Après vos études en France',
  'aps-carte-recherche-emploi-apres-etudes-france',
  'Ce cours est dédié aux étudiants internationaux diplômés en France qui souhaitent rester sur le territoire pour chercher un emploi ou créer leur entreprise. Nous explorerons l''éligibilité à l''Autorisation Provisoire de Séjour (APS) ou la "carte recherche d''emploi/création d''entreprise", les délais impératifs pour effectuer la demande avant l''expiration de votre titre étudiant, les droits ouverts par ce statut transitoire (recherche d''emploi, création d''entreprise, travail sous certaines conditions), et les possibilités de renouvellement. L''APS est un tremplin crucial pour votre insertion professionnelle post-études en France. Maîtrisez cette démarche pour transformer votre expérience étudiante en carrière.',
  'APS / Carte recherche d''emploi : guide post-diplôme. Éligibilité, délais, droits, renouvellement. Sécurisez votre avenir pro !',
  'insertion_professionnelle',
  'avance',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1557804506-6691459a933f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGpvYiUyMHNlYXJjaHxlbnwwfHwwfHx8MA%3D%3D',
  '["Comprendre l''éligibilité à l''APS après l''obtention de votre diplôme", "Savoir quand et comment faire la demande avant l''expiration de votre titre étudiant", "Connaître les droits spécifiques liés à l''APS (travail, création d''entreprise)", "Identifier les conditions de renouvellement de ce statut temporaire"]'::jsonb,
  '["Être titulaire d''un titre de séjour étudiant", "Être diplômé(e) d''un Master ou d''un diplôme équivalent en France"]'::jsonb,
  TRUE,
  4.8,
  410,
  3100
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 8
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'e6f7a8b9-c0d1-4012-e3f4-a5b6c7d8e9f0',
  'd5e6f7a8-b9c0-4012-e1f2-a3b4c5d6e7f8',
  'Éligibilité : Diplômes concernés',
  '# Éligibilité : Diplômes concernés

## Pourquoi c''est important ?

L''Autorisation Provisoire de Séjour (APS) ou la "carte recherche d''emploi/création d''entreprise" est un tremplin précieux pour les étudiants étrangers diplômés en France. Cependant, cette possibilité n''est pas ouverte à tous les niveaux de diplôme. Comprendre précisément quels diplômes sont éligibles est la première étape cruciale pour savoir si vous pouvez prétendre à ce statut transitoire. Une erreur d''appréciation à ce stade peut vous faire perdre un temps précieux et vous orienter vers des démarches inappropriées, voire compromettre votre chance de rester et travailler en France après vos études.


-   Identifier les niveaux de diplômes français qui ouvrent droit à l''APS "recherche d''emploi / création d''entreprise".
-   Savoir où vérifier la reconnaissance de votre diplôme par l''État français.
-   Maîtriser les conseils pour attester de l''obtention de votre diplôme.


L''APS pour la recherche d''emploi ou la création d''entreprise (anciennement connue sous le nom d''"autorisation provisoire de séjour") est un droit accordé à certains diplômés étrangers pour leur permettre de rester en France après la fin de leurs études, afin de chercher un emploi ou de monter leur entreprise. Ce dispositif est essentiel pour favoriser l''insertion professionnelle des talents formés en France.

🔗 [Service-Public.fr : Carte de séjour "recherche d''emploi ou création d''entreprise"](https://www.service-public.fr/particuliers/vosdroits/F17319) - La page officielle sur la carte APS.


### 1. Les diplômes éligibles à l''APS

La liste des diplômes ouvrant droit à l''APS est restrictive.

-   **Master** : C''est le diplôme le plus courant qui ouvre droit à l''APS. Vous devez avoir obtenu un diplôme national de master (M2) ou un diplôme conférant le grade de master.
-   **MBA** (Master of Business Administration) : S''il est accrédité et confère le grade de master.

-   **Diplôme d''ingénieur** : Délivré par une école accréditée par la CTI (Commission des Titres d''Ingénieur).
-   **Diplôme d''une école de commerce** : Conférant le grade de master et accrédité par la CEFDG (Commission d''Évaluation des Formations et Diplômes de Gestion).
-   **Diplôme du 3e cycle des grandes écoles** (par exemple, des grandes écoles de commerce ou d''ingénieurs).
-   **Diplôme de recherche** : Attestant de l''obtention d''un grade universitaire de troisième cycle (ex : Habilitation à Diriger des Recherches).


### 2. Ce qui n''est PAS éligible (généralement)


-   **Licence (Bac+3)** : Un diplôme de licence simple n''ouvre généralement pas droit à l''APS.
-   **Diplômes non nationaux** : Les diplômes d''université (DU) ou les certificats qui ne confèrent pas un grade de master reconnu par l''État français ne sont pas éligibles, même s''ils sont de niveau Bac+5.

### 3. Comment prouver l''obtention de votre diplôme


#### a) L''attestation de réussite provisoire
-   C''est le document le plus important au moment de la demande d''APS. Votre diplôme définitif prendra du temps à être édité. L''attestation de réussite est délivrée par votre établissement et certifie que vous avez validé toutes les conditions pour l''obtention de votre diplôme.
-   Elle doit être datée et signée par l''administration de l''établissement.


-   Si vous l''avez déjà (rare car les délais sont longs), c''est le justificatif idéal.




-   **Demandez votre attestation de réussite dès que possible** : Dès l''obtention de vos résultats finaux, sollicitez ce document auprès de votre secrétariat pédagogique ou de votre service des diplômes.
-   **Vérifiez la reconnaissance de votre diplôme** : Si vous avez un doute, contactez le service des diplômes de votre université ou consultez les listes officielles des diplômes reconnus par le Ministère de l''Enseignement Supérieur.


-   **Penser qu''une simple "attestation de fin de formation" suffit** : Il faut une attestation de réussite AU DIPLÔME.
-   **Attendre la remise de votre diplôme définitif** : Les délais sont trop longs. L''attestation de réussite est la pièce maîtresse.
-   **Confondre un "Master" avec un "Diplôme Universitaire" (DU)** : Le DU est un diplôme propre à une université et ne confère pas toujours le grade de master national, ce qui peut rendre inéligible à l''APS.


-   🔗 [Service-Public.fr : La carte "recherche d''emploi ou création d''entreprise" (APS)](https://www.service-public.fr/particuliers/vosdroits/F17319) - Les conditions d''éligibilité, y compris les diplômes.
-   🔗 [Légifrance : Le Code de l''entrée et du séjour des étrangers et du droit d''asile (CESEDA)](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041280362/) - Références légales.
-   🔗 [Ministère de l''Enseignement Supérieur et de la Recherche : Les grades universitaires](https://www.enseignementsup-recherche.gouv.fr/fr/les-grades-universitaires-60074) - Pour comprendre les équivalences de diplômes.
-   🔗 [France Education International : Reconnaissance des diplômes](https://www.france-education-international.fr/venir-etudier-en-france/reconnaissance-des-diplomes) - Service d''information pour l''évaluation des diplômes.


L''éligibilité à l''APS "recherche d''emploi/création d''entreprise" est strictement conditionnée à l''obtention d''un diplôme de niveau Master ou équivalent, reconnu par l''État français (ingénieur, école de commerce accréditée, doctorat). La Licence et les DU ne sont généralement pas éligibles. Votre attestation de réussite provisoire est le document clé à fournir. Anticipez la demande de ce document auprès de votre établissement dès la fin de vos études pour initier votre démarche d''APS sans tarder.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f8a9b0c1-d2e3-4012-s4t5-u6v7w8x9y0z1',
  'd5e6f7a8-b9c0-4012-e1f2-a3b4c5d6e7f8',
  'Faire la demande avant l''expiration du titre étudiant',
  '# Faire la demande avant l''expiration du titre étudiant

## Pourquoi c''est important ?

Le délai de dépôt de votre demande d''Autorisation Provisoire de Séjour (APS) ou de "carte recherche d''emploi/création d''entreprise" est un élément critique et non négociable. Vous devez impérativement déposer votre dossier **avant l''expiration de votre titre de séjour étudiant actuel**. Ne pas respecter ce délai, même d''un seul jour, vous placera en situation irrégulière, rendra votre demande d''APS irrecevable et compromettra votre possibilité de rester en France. C''est la règle d''or à retenir : anticipez et déposez votre demande dans les temps impartis pour assurer la continuité de votre séjour légal sur le territoire français.


-   Comprendre l''impératif de déposer la demande d''APS avant l''expiration du titre étudiant.


L''APS n''est pas un droit acquis si votre titre étudiant est déjà expiré. Il s''agit d''un dispositif de transition qui prolonge votre droit au séjour *juste après* la fin de votre statut étudiant. C''est pourquoi la continuité de votre régularité est une condition sine qua non.

🔗 [Service-Public.fr : La carte "recherche d''emploi ou création d''entreprise"](https://www.service-public.fr/particuliers/vosdroits/F17319) - Conditions de dépôt.


### 1. La règle impérative : Avant l''expiration de votre titre étudiant

C''est la condition la plus stricte.

-   **Date limite absolue** : La demande d''APS doit être déposée AVANT la date d''expiration de votre titre de séjour étudiant actuel (visa VLS-TS validé ou carte de séjour étudiant).
-   **Conséquences d''un dépôt tardif** : Si votre demande est déposée après cette date, elle sera considérée comme irrecevable par la préfecture, et vous ne pourrez pas obtenir l''APS. Votre séjour deviendra irrégulier.



-   Si vous êtes en première année, la date d''expiration est indiquée sur votre attestation de validation du VLS-TS ou sur votre visa collé dans votre passeport.

-   La date d''expiration est clairement imprimée sur votre carte de séjour physique.

-   **Diplôme obtenu fin juin / juillet** : Si vous obtenez votre diplôme à la fin de l''année universitaire (juin/juillet) et que votre titre étudiant expire en septembre/octobre, vous avez un laps de temps pour faire votre demande.

### 3. Modalités de dépôt de la demande d''APS


-   De plus en plus de préfectures permettent le dépôt de la demande d''APS en ligne via l''ANEF (`https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/` section "Je demande un titre de séjour", puis choisissez "Recherche d''emploi/création d''entreprise").

-   **Difficulté** : Les rendez-vous sont souvent rares. Commencez à chercher des créneaux plusieurs semaines, voire mois, avant la date d''expiration de votre titre.
-   **Preuve du dépôt** : Assurez-vous d''avoir une preuve de dépôt (confirmation de rendez-vous et/ou récépissé le jour J).

🔗 [ANEF : Dépôt de demande d''APS](https://administration-etrangers-en-france.interieur.gouv.fr/particuliers/#/titres-de-sejour/jeunes-diplomes) - Le portail de dépôt en ligne.



-   **Photos d''identité** aux normes e-photo.
-   **Justificatifs de ressources** (le montant minimum est le SMIC net mensuel, environ 1300€/mois pour l''APS, mais cela peut varier).
-   **Un timbre fiscal** (environ 75€ pour l''APS, à vérifier sur le site `timbres.impots.gouv.fr`).


-   Un **ordinateur** avec connexion internet pour l''ANEF ou la prise de rendez-vous.


-   **Ne perdez pas de temps après l''obtention de votre diplôme** : Le laps de temps entre la fin des études et l''expiration du titre est souvent court.


-   **Déposer le dossier après la date d''expiration** : C''est le piège le plus grave et le plus fréquent.
-   **Ne pas avoir l''attestation de réussite** : Sans preuve de diplôme, pas d''APS.
-   **Penser que l''APS est automatique** : C''est une demande soumise à conditions.
-   **Oublier de vérifier les ressources exigées** : Le montant pour l''APS est généralement plus élevé que pour un titre étudiant classique.
-   **Voyager hors de France tant que vous n''avez pas l''APS** : Surtout si votre titre étudiant expire.


-   🔗 [Préfectures de France : Sites web](https://www.interieur.gouv.fr/Le-ministere/Nos-reseaux/Prefectures) - Site de votre préfecture pour les modalités locales de dépôt de l''APS.
-   🔗 [Service-Public.fr : La carte "recherche d''emploi ou création d''entreprise"](https://www.service-public.fr/particuliers/vosdroits/F17319) - La référence pour l''APS.
-   🔗 [Légifrance : Article R. 433-1 du CESEDA](https://www.legifrance.gouv.fr/codes/id/LEGIARTI000041280362/) - Base légale de l''APS.
-   🔗 [Impots.gouv.fr : Timbre fiscal électronique](https://www.timbres.impots.gouv.fr/) - Pour l''achat du timbre fiscal.
-   🔗 [GISTI (Groupe d''information et de soutien des immigrés)](https://www.gisti.org/spip.php?rubrique24) - Informations juridiques et aide.


Le dépôt de votre demande d''APS doit être effectué impérativement avant la date d''expiration de votre titre de séjour étudiant. C''est une condition non négociable pour maintenir la légalité de votre séjour en France après vos études. Dès l''obtention de votre attestation de réussite provisoire, anticipez et rassemblez tous les documents requis. Utilisez la plateforme ANEF si possible, ou prenez rendez-vous en préfecture avec une grande vigilance. Cette diligence est cruciale pour ouvrir les portes de votre avenir professionnel en France.
',
  2,
  70,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '0g1h2i3j-4k5l-4012-v6w7-x8y9z0a1b2c3',
  'd5e6f7a8-b9c0-4012-e1f2-a3b4c5d6e7f8',
  'Droits ouverts par l''APS (Création d''entreprise, travail)',
  '# Droits ouverts par l''APS (Création d''entreprise, travail)

## Pourquoi c''est important ?

L''Autorisation Provisoire de Séjour (APS) "recherche d''emploi / création d''entreprise" est bien plus qu''une simple prolongation de votre séjour. Elle vous confère des droits spécifiques et essentiels pour votre insertion professionnelle en France, qu''il s''agisse de trouver un emploi stable ou de lancer votre propre activité. Ne pas connaître ces droits, c''est risquer de passer à côté d''opportunités, de travailler illégalement, ou de ne pas exploiter pleinement le potentiel de ce statut transitoire. Comprendre ce que l''APS vous autorise à faire est donc fondamental pour sécuriser votre parcours professionnel et éviter toute situation d''irrégularité.


-   Identifier les droits spécifiques conférés par l''APS en matière de recherche d''emploi.
-   Comprendre les conditions de travail autorisées avec l''APS.
-   Savoir comment l''APS facilite la création d''entreprise.
-   Maîtriser les conseils pour optimiser l''utilisation de votre APS.


L''APS pour jeune diplômé, délivrée pour une durée d''un an, vise à vous donner le temps et le cadre légal nécessaires pour concrétiser votre projet professionnel après vos études en France. Elle est une passerelle entre le statut étudiant et un statut professionnel pérenne.

🔗 [Service-Public.fr : Carte de séjour "recherche d''emploi ou création d''entreprise"](https://www.service-public.fr/particuliers/vosdroits/F17319) - La page officielle sur l''APS.


### 1. Droit à la recherche d''emploi

C''est l''objectif principal de l''APS.

-   **Temps accordé** : L''APS vous offre une année complète pour chercher un emploi correspondant à votre niveau de qualification (Master ou équivalent).
-   **Accès au marché du travail** : Vous pouvez postuler à des offres, passer des entretiens, et mener toutes les démarches de recherche d''emploi sans restriction particulière (au-delà de la nécessité de trouver un emploi correspondant à votre diplôme).

### 2. Droit de travailler avec l''APS : Les conditions

L''APS vous autorise à travailler, mais sous certaines réserves.

-   **Pendant la recherche d''emploi** : Vous êtes autorisé(e) à travailler, mais votre activité principale reste la recherche d''emploi. Il est généralement admis que vous pouvez occuper un emploi à temps partiel ou un CDD pour subvenir à vos besoins pendant cette période.
-   **Jusqu''à 964 heures par an** : Similaire au statut étudiant, l''APS vous autorise à travailler dans la limite de 964 heures par an (soit environ 20 heures par semaine en moyenne).
-   **Au-delà de 964 heures** : Si vous trouvez un emploi à temps plein (plus de 964 heures/an), vous devez demander un changement de statut vers un titre "salarié" ou "Passeport Talent". L''APS n''est pas un titre de travail à temps plein.

🔗 [Légifrance : Article R. 433-1 du CESEDA](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041280362/) - Texte de loi concernant l''APS.

-   **Si CDI ou CDD de plus de 3 mois et salaire suffisant** : Si vous trouvez un emploi en CDI (ou CDD de plus de 3 mois) avec une rémunération au moins égale à 1,5 fois le SMIC (ou aux seuils du Passeport Talent, environ 2 600 € bruts mensuels), vous pouvez demander un changement de statut directement depuis la France. L''opposabilité de l''emploi est assouplie pour les titulaires d''un diplôme français de Master (voir cours précédent).
-   **Dépôt du dossier** : La demande de changement de statut doit être déposée en préfecture (ou en ligne via l''ANEF) avant l''expiration de votre APS.

### 3. Droit à la création d''entreprise

L''APS vous offre une opportunité pour l''entrepreneuriat.

-   **Création d''entreprise** : L''APS vous autorise explicitement à créer votre propre entreprise en France. Vous pouvez vous inscrire comme auto-entrepreneur, créer une société, etc.
-   **Business plan** : Si vous optez pour la création d''entreprise, vous devrez avoir un projet sérieux et un business plan crédible.
-   **Changement de statut vers "Entrepreneur/Profession Libérale"** : Si votre entreprise est viable et génère des revenus, vous pourrez demander un changement de statut vers un titre "Entrepreneur/Profession Libérale" ou "Passeport Talent Créateur d''entreprise" (si les critères sont remplis) avant l''expiration de votre APS.

🔗 [Service-Public.fr : Créer son entreprise en France](https://www.service-public.fr/particuliers/vosdroits/F23272) - Guide pour la création d''entreprise.


L''APS assure la continuité de certains droits.



-   Vos **contrats de travail** ou **justificatifs d''activité professionnelle**.


-   **Utilisez pleinement cette année** : L''APS est une période précieuse. Ne la gaspillez pas.
-   **Développez votre réseau** : Participez à des événements professionnels, des salons de l''emploi, utilisez LinkedIn.
-   **Renseignez-vous sur les métiers qui recrutent** : Adaptez votre recherche d''emploi aux besoins du marché français.
-   **Si vous créez votre entreprise** : Faites-vous accompagner par des structures d''aide à la création d''entreprise (incubateurs, chambres de commerce).
-   **Commencez les démarches de changement de statut avant l''expiration de l''APS** : Ne faites pas l''erreur de laisser l''APS arriver à son terme.


-   **Travailler à temps plein sans changer de statut** : L''APS n''est pas un titre de travail à temps plein permanent.
-   **Ne pas déposer de demande de changement de statut avant l''expiration de l''APS** : Vous vous retrouverez en situation irrégulière.
-   **Voyager hors de l''espace Schengen** : Avec l''APS, le retour peut être problématique si le titre est presque expiré ou s''il y a une mauvaise interprétation des règles aux frontières.


-   🔗 [Service-Public.fr : Changement de statut de "recherche d''emploi" à "salarié"](https://www.service-public.fr/particuliers/vosdroits/F22312) - Détails sur le changement de statut.
-   🔗 [APEC (Association Pour l''Emploi des Cadres)](https://www.apec.fr/) - Pour la recherche d''emploi de cadres diplômés.
-   🔗 [Chambres de Commerce et d''Industrie (CCI)](https://www.cci.fr/) - Pour l''aide à la création d''entreprise.


L''APS "recherche d''emploi / création d''entreprise" est un droit précieux d''une durée d''un an pour les jeunes diplômés étrangers en France. Elle vous autorise à chercher un emploi, à créer votre entreprise, et à travailler sous certaines conditions (964h/an). Dès que vous trouvez un emploi stable ou que votre entreprise est lancée, vous devez impérativement demander un changement de statut avant l''expiration de votre APS. Connaître ces droits et anticiper les démarches est la clé pour transformer votre expérience étudiante en une carrière professionnelle réussie en France.
',
  3,
  70,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '1m2n3o4p-5q6r-4012-z7a8-b9c0d1e2f3g4',
  'd5e6f7a8-b9c0-4012-e1f2-a3b4c5d6e7f8',
  'Renouvellement de l''APS : Possible ou non ?',
  '# Renouvellement de l''APS : Possible ou non ?

## Pourquoi c''est important ?

Après avoir bénéficié de l''Autorisation Provisoire de Séjour (APS) "recherche d''emploi / création d''entreprise" pendant un an, de nombreux étudiants diplômés se posent la question cruciale : est-il possible de renouveler ce statut ? La réponse est nuancée et il est impératif de comprendre les conditions exactes. Une mauvaise interprétation des règles peut vous faire perdre un temps précieux et vous placer dans une situation d''irrégularité. Savoir si votre APS est renouvelable, et sous quelles conditions, est fondamental pour planifier votre avenir professionnel en France et anticiper les démarches nécessaires pour obtenir un titre de séjour plus pérenne.


-   Comprendre le principe général de non-renouvellement de l''APS.
-   Connaître les démarches à entreprendre pour passer de l''APS à un autre titre de séjour.
-   Maîtriser les conseils pour optimiser votre situation après l''APS.


L''APS est par nature un titre de séjour temporaire, conçu comme une période de transition pour faciliter l''insertion professionnelle des jeunes diplômés. Sa finalité est de vous permettre de trouver un emploi stable ou de lancer votre entreprise afin de basculer vers un autre titre de séjour.

🔗 [Service-Public.fr : La carte "recherche d''emploi ou création d''entreprise"](https://www.service-public.fr/particuliers/vosdroits/F17319) - Informations officielles sur le non-renouvellement.


### 1. Le principe : L''APS n''est généralement pas renouvelable

C''est la règle générale, avec de rares exceptions.

-   **Un an, puis un autre statut** : L''APS est délivrée pour une durée d''un an non renouvelable. L''objectif est de vous permettre, durant cette année, de trouver un emploi correspondant à votre diplôme (Master ou équivalent) ou de créer votre entreprise pour ensuite demander un changement de statut vers un titre "salarié", "Passeport Talent" ou "Entrepreneur/Profession Libérale".
-   **Durée limitée** : C''est une "fenêtre" unique qui vous est offerte pour concrétiser votre projet professionnel.



-   Dans des cas très rares et exceptionnels de force majeure liée à des raisons médicales graves vous empêchant de déposer votre demande de changement de statut, une prolongation de l''APS pourrait être envisagée. Mais ce n''est pas un droit et est soumis à l''appréciation de la préfecture.

-   Si, à l''expiration de votre APS, vous avez déjà déposé une demande de changement de statut vers un titre de séjour pluriannuel (ex: Passeport Talent) et que cette demande est toujours en cours d''instruction, un récépissé de cette nouvelle demande vous sera délivré, ce qui prolonge de facto votre droit au séjour.
-   Cependant, il ne s''agit pas d''un "renouvellement" de l''APS, mais d''un nouveau récépissé lié à une nouvelle demande de titre de séjour.

### 3. Les démarches après l''expiration de l''APS

L''objectif est de basculer vers un statut pérenne.

#### a) Changer de statut vers "Salarié"
-   Si vous avez trouvé un emploi en CDI ou CDD long (plus de 3 mois), avec un salaire correspondant aux seuils requis (au moins 1,5 fois le SMIC ou les seuils Passeport Talent), vous devez déposer une demande de changement de statut vers "salarié" ou "Passeport Talent".
-   **Quand ?** : Cette demande doit être faite avant l''expiration de votre APS.

#### b) Changer de statut vers "Passeport Talent"
-   Si votre profil et le poste trouvé correspondent aux critères d''un Passeport Talent (chercheur, salarié hautement qualifié, créateur d''entreprise, etc.), c''est le titre le plus avantageux à demander.
-   **Avantages** : Titre pluriannuel (jusqu''à 4 ans), procédure simplifiée pour la famille.

#### c) Changer de statut vers "Entrepreneur / Profession Libérale"


-   Si vous avez trouvé un emploi : **Promesse d''embauche/contrat de travail**, **autorisation de travail DREETS**.
-   Si vous avez créé votre entreprise : **Business plan**, **justificatifs d''immatriculation**.


-   **Faites des simulations** : Estimez si votre futur salaire correspond aux exigences des titres "salarié" ou "Passeport Talent".
-   **Soyez en contact avec les services d''aide** : Les associations, les chambres de commerce et d''industrie (pour les créateurs d''entreprise), ou les pôles emploi peuvent vous aider à préparer votre dossier de changement de statut.
-   **Ne voyagez pas trop à l''étranger en fin d''APS** : Les contrôles aux frontières peuvent être stricts si votre titre est sur le point d''expirer sans qu''une nouvelle demande ait été déposée.


-   **Penser que l''APS est automatiquement renouvelable** : C''est une erreur majeure.
-   **Attendre la dernière minute pour le changement de statut** : Les délais de traitement sont longs, et le risque d''interruption de droits est grand.
-   **Vouloir renouveler l''APS sans projet concret** : La préfecture n''acceptera pas une demande de renouvellement sans motif légitime (qui n''est pas juste "je n''ai pas trouvé d''emploi").
-   **Ne pas correspondre aux critères du nouveau titre** : Assurez-vous que l''emploi ou l''entreprise que vous proposez répond aux exigences du titre "salarié" ou "Passeport Talent".


-   🔗 [Campus France : Que faire après l''APS ?](https://www.campusfrance.org/fr/apres-l-aps) - Guide post-APS.
-   🔗 [Légifrance : Le Code de l''entrée et du séjour des étrangers et du droit d''asile (CESEDA)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Références légales.
-   🔗 [GISTI (Groupe d''information et de soutien des immigrés)](https://www.gisti.org/spip.php?rubrique24) - Informations juridiques et aide en cas de situation complexe.


L''APS "recherche d''emploi / création d''entreprise" est un tremplin précieux d''un an, mais il n''est généralement pas renouvelable. Son objectif est de vous permettre de basculer vers un titre de séjour plus pérenne (salarié, Passeport Talent, Entrepreneur/Profession Libérale) avant son expiration. Anticipez cette transition, utilisez l''année d''APS à bon escient pour trouver un emploi ou développer votre entreprise, et déposez votre demande de changement de statut dans les délais. Cette planification est la clé de votre réussite professionnelle et de la continuité de votre séjour légal en France.
',
  4,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 8 ---

-- COURS 9 : CVEC : Comprendre et payer
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'e7f8a9b0-c1d2-4012-e3f4-a5b6c7d8e9f0',
  'CVEC : Comprendre et payer la Contribution Vie Étudiante et de Campus',
  'cvec-comprendre-payer-contribution-vie-etudiante-campus',
  'Ce cours est un guide essentiel pour tous les étudiants inscrits dans l''enseignement supérieur en France, qu''ils soient français ou internationaux. La Contribution Vie Étudiante et de Campus (CVEC) est une taxe obligatoire, mais elle finance des services cruciaux pour votre vie étudiante. Nous vous expliquerons à quoi sert la CVEC, les cas d''exonération pour lesquels vous pourriez être exempté de paiement, un tutoriel pas à pas pour la payer en ligne sur messervices.etudiant.gouv.fr, et comment obtenir et transmettre votre attestation de paiement. Une bonne compréhension de la CVEC est indispensable pour finaliser votre inscription administrative et profiter pleinement de vos services étudiants.',
  'CVEC : Obligatoire, mais pour quoi faire ? Exonération, paiement en ligne, attestation. Tout savoir pour votre inscription !',
  'preparation_academique',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la finalité et l''utilité de la CVEC", "Identifier les cas d''exonération pour ne pas payer inutilement", "Maîtriser la procédure de paiement en ligne sur messervices.etudiant.gouv.fr", "Savoir obtenir et transmettre l''attestation CVEC à votre établissement"]'::jsonb,
  '["Être admis(e) dans un établissement d''enseignement supérieur en France"]'::jsonb,
  TRUE,
  4.8,
  680,
  5200
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 9
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '2d3e4f5a-6b7c-4012-f8a9-b0c1d2e3f4a5',
  'e7f8a9b0-c1d2-4012-e3f4-a5b6c7d8e9f0',
  'À quoi sert la CVEC ?',
  '# À quoi sert la CVEC ?

## Pourquoi c''est important ?

La Contribution Vie Étudiante et de Campus (CVEC) est une taxe annuelle et obligatoire pour la majorité des étudiants inscrits dans l''enseignement supérieur en France. Bien qu''elle représente un coût supplémentaire, il est essentiel de comprendre que cette contribution n''est pas une simple formalité administrative. Elle finance directement des services et initiatives qui améliorent concrètement votre vie étudiante et votre bien-être sur les campus. Connaître la finalité de la CVEC vous permettra de mieux appréhender son importance et de savoir quels services vous êtes en droit d''attendre et d''utiliser.


-   Définir ce qu''est la CVEC et son caractère obligatoire.
-   Identifier les principaux domaines d''actions financés par la CVEC.
-   Comprendre l''impact concret de la CVEC sur votre vie étudiante.


La CVEC a été mise en place à la rentrée universitaire 2018. Son objectif est de développer l''accompagnement social, sanitaire, culturel et sportif des étudiants, et de renforcer les actions de prévention et d''éducation à la santé. C''est un financement mutualisé qui contribue au dynamisme de la vie étudiante.




C''est une taxe spécifique aux étudiants.

-   **Qu''est-ce que la CVEC ?** : C''est une contribution destinée à financer des actions visant à améliorer les conditions de vie et d''études des étudiants. Elle est collectée par le CROUS (Centre Régional des Œuvres Universitaires et Scolaires).
-   **Qui doit la payer ?** : Tous les étudiants inscrits en formation initiale dans un établissement d''enseignement supérieur français, qu''ils soient français ou étrangers, sont soumis à la CVEC, sauf cas d''exonération (voir leçon suivante).
-   **Quand la payer ?** : Avant de vous inscrire administrativement dans votre établissement. L''attestation de paiement (ou d''exonération) est obligatoire pour finaliser votre inscription.
-   **Montant** : Le montant est fixé par arrêté ministériel chaque année (environ 100€ pour l''année universitaire 2024-2025, à vérifier).


### 2. Les domaines d''actions financés par la CVEC


#### a) Amélioration de l''accueil et de l''accompagnement social
-   Développement de l''accès aux bourses et aides sociales.

#### b) Développement de la prévention et de l''éducation à la santé

-   Aide à l''organisation d''événements sur les campus.

#### d) Amélioration de l''accès au sport et à la culture
-   Mise à disposition d''équipements sportifs et culturels.

-   Amélioration de l''accès au numérique.




-   **Un meilleur environnement de vie et d''études** : Des campus plus dynamiques, des services de meilleure qualité.
-   **Des opportunités d''épanouissement** : Possibilité de pratiquer des sports, d''accéder à la culture, de participer à la vie associative.
-   **Une meilleure insertion** : Des actions pour faciliter votre intégration dans l''université et la vie locale.


-   Rien de spécifique pour comprendre, juste l''envie de s''informer.


-   **N''hésitez pas à utiliser les services de santé étudiante** : Ils sont là pour vous.
-   **Impliquez-vous dans la vie associative** : C''est un excellent moyen de s''intégrer, de rencontrer du monde et de développer des compétences.
-   **Gardez votre attestation de paiement CVEC** : Elle sera demandée lors de votre inscription administrative et pourra être utile pour d''autres démarches.


-   **Confondre la CVEC avec les frais de scolarité** : Ce sont deux choses distinctes. La CVEC est une contribution, les frais de scolarité sont les droits d''inscription à votre formation.
-   **Payer la CVEC alors que vous êtes exonéré(e)** : Vérifiez toujours votre éligibilité à l''exonération.


-   🔗 [Ministère de l''Enseignement Supérieur : La CVEC](https://www.enseignementsup-recherche.gouv.fr/fr/la-contribution-de-vie-etudiante-et-de-campus-cvec-58611) - Page officielle du Ministère.
-   🔗 [Légifrance : Article L841-5 du Code de l''Éducation](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037304523/) - Le texte de loi créant la CVEC.


La CVEC est une contribution obligatoire qui finance des services essentiels pour améliorer votre vie étudiante et votre bien-être sur le campus. Elle couvre des domaines comme la santé, le social, le sport, la culture et l''aide aux associations. Payer la CVEC est une étape indispensable pour finaliser votre inscription administrative. En comprenant son utilité, vous pourrez profiter pleinement des services qu''elle finance et qui sont mis à votre disposition pour vous accompagner tout au long de votre parcours universitaire en France.
',
  1,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '3e4f5a6b-7c8d-4012-g9h0-i1j2k3l4m5n6',
  'e7f8a9b0-c1d2-4012-e3f4-a5b6c7d8e9f0',
  'Cas d''exonération (Boursiers, Réfugiés)',
  '# Cas d''exonération (Boursiers, Réfugiés)

## Pourquoi c''est important ?

Bien que la Contribution Vie Étudiante et de Campus (CVEC) soit obligatoire pour la majorité des étudiants, il existe des cas d''exonération qui vous permettent de ne pas la payer. Si vous êtes éligible à une exonération, il est crucial de le savoir pour ne pas débourser inutilement une somme qui peut être significative dans un budget étudiant. De plus, même exonéré(e), vous devez obligatoirement obtenir une "attestation d''exonération" pour pouvoir finaliser votre inscription administrative dans votre établissement. Comprendre ces cas d''exonération et la démarche associée est donc essentiel pour gérer vos finances et vos formalités administratives sans encombre.


-   Identifier les principales catégories d''étudiants exonérés de la CVEC.
-   Comprendre les justificatifs à fournir pour prouver votre éligibilité à l''exonération.
-   Savoir comment obtenir l''attestation d''exonération sur messervices.etudiant.gouv.fr.
-   Maîtriser les conseils pour éviter les erreurs lors de la demande d''exonération.


Le législateur a prévu des situations spécifiques où les étudiants n''ont pas à s''acquitter de la CVEC. Ces exemptions visent à soutenir les étudiants dont la situation financière ou administrative justifie une aide. Il est de votre responsabilité de vérifier si vous entrez dans l''une de ces catégories.

🔗 [MesServices.etudiant.gouv.fr : Cas d''exonération CVEC](https://www.messervices.etudiant.gouv.fr/envole/aide/cvec) - La section sur l''exonération de la CVEC.


### 1. Les principales catégories d''étudiants exonérés

Plusieurs profils d''étudiants peuvent bénéficier de l''exonération.

-   **Boursiers sur critères sociaux** : Les étudiants bénéficiaires d''une bourse d''enseignement supérieur sur critères sociaux gérée par le CROUS.
-   **Boursiers du gouvernement français** : Les boursiers du gouvernement français, qu''ils soient de nationalité française ou étrangère.

-   Les étudiants ayant le statut de réfugié, bénéficiaires de la protection subsidiaire, ou demandeurs d''asile (qui ont reçu l''autorisation de rester sur le territoire français et attendent une décision sur leur demande).

#### c) Les autres cas d''exonération (moins fréquents pour les internationaux)
-   Les étudiants inscrits dans les établissements d''enseignement supérieur qui ne relèvent pas du Ministère de l''Enseignement Supérieur (ex: formations de santé spécifiques, formations militaires).
-   Les étudiants effectuant un échange international en France dans le cadre d''un accord entre leur établissement d''origine et un établissement français (ex: Erasmus+).

🔗 [Service-Public.fr : Qui est exonéré de la CVEC ?](https://www.service-public.fr/particuliers/vosdroits/F33890) - Liste exhaustive des cas d''exonération.

### 2. Les justificatifs à fournir pour l''exonération

Chaque cas d''exonération nécessite une preuve spécifique.

-   **Notification d''attribution de bourse** : Le document officiel prouvant que vous avez obtenu une bourse sur critères sociaux, une bourse du gouvernement français ou une bourse gérée par Campus France.

-   **Attestation de votre statut de réfugié** ou de bénéficiaire de la protection subsidiaire délivrée par l''OFPRA (Office français de protection des réfugiés et apatrides).
-   **Attestation de demande d''asile** pour les demandeurs.

-   **Attestation d''échange** de votre établissement, convention de partenariat, etc.


-   Votre **notification d''attribution de bourse** (si boursier).


-   **Vérifiez votre éligibilité AVANT de payer** : Ne payez pas la CVEC si vous êtes éligible à l''exonération. Il est très difficile d''obtenir un remboursement.
-   **Préparez vos justificatifs** : Ayez la preuve de votre statut d''exonération (numérisée et imprimée) avant de commencer la démarche en ligne.
-   **Faites la démarche de demande d''attestation d''exonération tôt** : Elle est obligatoire pour votre inscription.


-   **Ne pas faire la démarche d''exonération et de récupération de l''attestation** : Même si vous êtes exonéré(e), vous avez besoin du document qui le prouve.
-   **Confondre "être éligible à une bourse" avec "être boursier"** : Seule l''attribution effective de la bourse permet l''exonération.


-   🔗 [MesServices.etudiant.gouv.fr : La CVEC - Qui est concerné ?](https://www.messervices.etudiant.gouv.fr/envole/aide/cvec) - Le site officiel pour comprendre l''exonération et l''obtenir.
-   🔗 [Ministère de l''Enseignement Supérieur : La CVEC](https://www.enseignementsup-recherche.gouv.fr/fr/la-contribution-de-vie-etudiante-et-de-campus-cvec-58611) - Page officielle.
-   🔗 [Légifrance : Arrêté relatif aux exonérations de CVEC](https://www.legifrance.gouv.fr/eli/arrete/2018/3/26/ESRS1806654A/jo/texte) - Pour les textes juridiques précis sur les cas d''exonération.


De nombreux étudiants, notamment les boursiers du gouvernement français, les boursiers sur critères sociaux, et les réfugiés, sont exonérés de la CVEC. Il est crucial de vérifier votre éligibilité et d''obtenir votre attestation d''exonération sur `messervices.etudiant.gouv.fr` avant votre inscription administrative. Ne payez pas la CVEC si vous êtes éligible à une exemption, mais assurez-vous d''avoir le justificatif nécessaire. Cette vigilance vous permettra d''économiser de l''argent et de faciliter vos démarches administratives.
',
  2,
  45,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '4e5f6a7b-8c9d-4012-h0i1-j2k3l4m5n6o7',
  'e7f8a9b0-c1d2-4012-e3f4-a5b6c7d8e9f0',
  'Tuto : Payer sur messervices.etudiant.gouv.fr',
  '# Tuto : Payer sur messervices.etudiant.gouv.fr

## Pourquoi c''est important ?

Le paiement ou l''obtention de l''attestation d''exonération de la Contribution Vie Étudiante et de Campus (CVEC) est une étape incontournable pour finaliser votre inscription administrative dans un établissement d''enseignement supérieur français. Sans cette attestation, votre inscription sera bloquée et vous ne pourrez pas obtenir votre carte étudiante. La démarche se fait exclusivement en ligne sur la plateforme `messervices.etudiant.gouv.fr`. Maîtriser ce tutoriel pas à pas est essentiel pour réaliser cette formalité rapidement et correctement, vous assurant une rentrée universitaire sans accroc.




`messervices.etudiant.gouv.fr` est le portail unique pour toutes les démarches CVEC. C''est une plateforme simple d''utilisation mais qui demande de la rigueur dans la saisie des informations. Préparez-vous à y passer quelques minutes avec les documents nécessaires à portée de main.





-   Ouvrez votre navigateur internet et tapez l''adresse exacte.

-   **Si vous avez déjà un compte FranceConnect** (Impots.gouv.fr, Ameli.fr, l''Identité Numérique La Poste, etc.), vous pouvez l''utiliser pour vous connecter. Cela est souvent plus rapide.
-   **Si vous n''avez pas de compte FranceConnect** (ce qui est le cas pour la plupart des primo-arrivants étrangers), vous devrez créer un compte sur `messervices.etudiant.gouv.fr`.
    -   Cliquez sur "Je crée mon compte".
    -   Vous aurez besoin de votre **INE** (Identifiant National Étudiant) si vous en avez déjà un (par exemple, si vous avez déjà été inscrit(e) dans le supérieur en France). Si c''est votre première inscription, vous pourrez le renseigner plus tard.
    -   Validez la création de compte via l''e-mail de confirmation.

🔗 [FranceConnect : Comprendre ce service](https://franceconnect.gouv.fr/partenaires) - Pour savoir si vous pouvez l''utiliser.

### 2. Déclarer sa situation et obtenir l''attestation

C''est l''étape où vous indiquez si vous êtes redevable ou exonéré.

#### a) Cliquer sur "Je paie ma CVEC" ou "Je m''acquitte de la CVEC"

-   **Année universitaire** : Sélectionnez l''année universitaire pour laquelle vous vous inscrivez.
    -   **"Je dois m''acquitter de la CVEC"** : Si vous n''êtes pas dans un cas d''exonération.
    -   **"Je suis exonéré(e) de la CVEC"** : Si vous êtes boursier, réfugié, etc. (voir leçon précédente).

-   Cliquez sur "Obtenir mon attestation" après confirmation.

-   Le montant de la CVEC s''affichera.
-   Cliquez sur "Payer" et suivez la procédure de paiement sécurisé par carte bancaire.
-   Une fois le paiement validé, vous pourrez cliquer sur "Obtenir mon attestation".

### 3. Obtenir et sauvegarder l''attestation


-   L''attestation CVEC est un fichier PDF. Téléchargez-le immédiatement.
-   **Vérifiez le document** : Assurez-vous que toutes les informations sont correctes (votre nom, l''année universitaire, le statut "acquitté" ou "exonéré").

-   **Imprimez plusieurs exemplaires** : Vous devrez en fournir une copie à votre établissement pour l''inscription administrative. Gardez-en d''autres copies.


-   Votre **numéro INE** (si vous l''avez).
-   Vos **justificatifs d''exonération** (si applicable).


-   **Faites cette démarche AVANT votre inscription administrative** : C''est un prérequis essentiel.
-   **Vérifiez bien l''année universitaire** : Assurez-vous de payer pour la bonne année.
-   **En cas de problème technique** : N''hésitez pas à contacter l''assistance de `messervices.etudiant.gouv.fr` (voir ressources).


-   **Ne pas obtenir l''attestation** : Même si vous êtes exonéré(e), le document est obligatoire.
-   **Faire une erreur sur l''année universitaire** : Votre attestation ne sera pas valide pour votre inscription.
-   **Perdre l''attestation** : Il faut la sauvegarder précieusement.


-   🔗 [MesServices.etudiant.gouv.fr : Accueil CVEC](https://www.messervices.etudiant.gouv.fr/envole/aide/cvec) - Le point d''entrée pour votre démarche.
-   🔗 [CROUS : FAQ CVEC](https://www.crous.fr/faq/cvec/) - Réponses aux questions fréquentes sur le paiement et l''exonération.
-   🔗 [Ministère de l''Enseignement Supérieur : La CVEC](https://www.enseignementsup-recherche.gouv.fr/fr/la-contribution-de-vie-etudiante-et-de-campus-cvec-58611) - Page officielle.


Le paiement ou l''attestation d''exonération de la CVEC est une formalité administrative obligatoire à réaliser sur `messervices.etudiant.gouv.fr`. Que vous soyez redevable ou exonéré(e), vous devez impérativement obtenir votre attestation PDF et la conserver précieusement. Ce tutoriel vous a guidé pas à pas pour cette démarche essentielle qui conditionne votre inscription administrative et l''accès aux services de la vie étudiante en France.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '5f6a7b8c-9d0e-4012-p1q2-r3s4t5u6v7w8',
  'e7f8a9b0-c1d2-4012-e3f4-a5b6c7d8e9f0',
  'Obtenir et transmettre son attestation',
  '# Obtenir et transmettre son attestation

## Pourquoi c''est important ?

Une fois que vous avez payé la Contribution Vie Étudiante et de Campus (CVEC) ou déclaré votre exonération sur `messervices.etudiant.gouv.fr`, l''étape finale est d''obtenir et de transmettre votre attestation CVEC à votre établissement d''enseignement supérieur. Sans ce document, votre inscription administrative ne pourra pas être finalisée, même si vous avez payé vos frais de scolarité. L''attestation CVEC est un prérequis obligatoire qui valide votre statut vis-à-vis des services de la vie étudiante. Une bonne gestion de ce document est essentielle pour une rentrée universitaire sereine et pour pouvoir accéder à tous les services et droits liés à votre statut étudiant.


-   Comprendre la nécessité de l''attestation CVEC pour l''inscription administrative.
-   Identifier les différentes manières de transmettre l''attestation à votre établissement.


L''attestation CVEC est la preuve officielle que vous avez bien accompli votre devoir vis-à-vis de la Contribution Vie Étudiante et de Campus. Elle est un maillon indispensable de la chaîne d''inscription administrative.

🔗 [MesServices.etudiant.gouv.fr : La CVEC](https://www.messervices.etudiant.gouv.fr/envole/aide/cvec) - Le portail où vous obtenez l''attestation.


### 1. Téléchargement de l''attestation CVEC


-   Dans la section CVEC, vous trouverez un lien ou un bouton "Télécharger mon attestation CVEC".

-   L''attestation est générée au format PDF.
-   Enregistrez-la sur votre ordinateur dans un dossier dédié aux documents administratifs (voir cours sur l''organisation du classeur).
-   **Renommez le fichier** : Par exemple, "Attestation_CVEC_NOM_Prenom_2024-2025.pdf".


### 2. Transmission de l''attestation à votre établissement


#### a) Plateforme d''inscription en ligne
-   De nombreux établissements ont une plateforme d''inscription en ligne où vous devrez téléverser l''attestation CVEC dans une section dédiée ("Pièces justificatives", "Documents à joindre").

-   Certains établissements peuvent demander un envoi par e-mail au service scolarité ou au service d''inscription.
-   Précisez bien l''objet de l''e-mail (ex: "Attestation CVEC - NOM Prénom - Numéro Étudiant").

-   Plus rare de nos jours, mais dans certains cas, il peut être demandé de déposer une copie papier de l''attestation lors d''un rendez-vous physique pour l''inscription administrative.

-   Dans certains cas, si votre établissement est bien connecté aux services du CROUS, l''information de votre paiement ou exonération peut être transmise automatiquement. Cependant, il est TOUJOURS recommandé de conserver votre attestation et de la transmettre si on vous la demande, car l''intégration automatique n''est pas toujours parfaite ou immédiate.


-   Vos **identifiants de la plateforme d''inscription** de votre établissement.
-   L''**adresse e-mail du service scolarité** (si envoi par e-mail).


-   **Ne tardez pas** : Dès que vous avez l''attestation, transmettez-la à votre établissement.
-   **Vérifiez les modalités de transmission** : Consultez le site web de votre établissement ou le guide d''inscription qu''il vous a fourni.
-   **Confirmez la bonne réception** : Si possible, assurez-vous que votre établissement a bien reçu et enregistré votre attestation. Un e-mail de confirmation ou un changement de statut sur votre espace d''inscription peut en témoigner.


-   **Ne pas télécharger le document** : L''attestation est votre preuve.
-   **Ne pas transmettre l''attestation** : Votre inscription administrative sera bloquée.
-   **Transmettre une attestation pour la mauvaise année universitaire** : Assurez-vous que l''attestation correspond bien à l''année en cours.
-   **Attendre le dernier moment pour la transmission** : Les services d''inscription peuvent être débordés en période de rentrée.


-   🔗 [MesServices.etudiant.gouv.fr : Téléchargement de l''attestation](https://www.messervices.etudiant.gouv.fr/envole/aide/cvec) - Le lien direct pour votre attestation.
-   🔗 [Vie-etudiante.gouv.fr : Démarches d''inscription](https://www.vie-etudiante.gouv.fr/faire-ses-demarches-pour-la-rentree-1785) - Informations sur les démarches de rentrée.
-   🔗 [CROUS : La CVEC et l''inscription](https://www.crous.fr/faq/cvec/) - Réponses aux questions fréquentes.
-   🔗 [Sites web des universités et écoles](https://www.enseignementsup-recherche.gouv.fr/fr/annuaire-des-etablissements-d-enseignement-superieur-francais-60074) - Recherchez la section "Inscription administrative" de votre établissement.
-   🔗 [Service-Public.fr : Inscription à l''université](https://www.service-public.fr/particuliers/vosdroits/F16480) - Vue d''ensemble des démarches d''inscription.
-   🔗 [Ministère de l''Enseignement Supérieur : La CVEC](https://www.enseignementsup-recherche.gouv.fr/fr/la-contribution-de-vie-etudiante-et-de-campus-cvec-58611) - Rappel du rôle du document.


L''obtention et la transmission de votre attestation CVEC à votre établissement sont les dernières étapes pour finaliser votre inscription administrative. Téléchargez le fichier PDF depuis `messervices.etudiant.gouv.fr`, sauvegardez-le précieusement, et transmettez-le selon les modalités indiquées par votre établissement. Une gestion rapide et rigoureuse de ce document vous garantit un accès fluide à votre formation et à tous les services offerts aux étudiants en France.
',
  4,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 9 ---

-- COURS 10 : Déclarer ses impôts (Important)
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f9a0b1c2-d3e4-4012-g5h6-i7j8k9l0m1n2',
  'Déclarer ses impôts en France : Un guide pour les étrangers',
  'declarer-ses-impots-france-guide-etrangers',
  'Ce cours brise le mythe courant que "je ne gagne rien, je ne déclare rien" pour les étudiants ou les nouveaux arrivants en France. Il est crucial de comprendre que même avec de faibles revenus, ou si vous recevez des aides (logement, CAF), la déclaration de revenus est souvent obligatoire. Nous vous guiderons sur pourquoi déclarer vos revenus est important, comment effectuer votre première déclaration papier, et comment gérer les déclarations suivantes entièrement en ligne. Vous apprendrez également les bases du prélèvement à la source. Une bonne gestion fiscale est essentielle pour votre intégration et pour éviter des problèmes avec l''administration française.',
  'Déclarez vos impôts en France : même sans gros revenus ou avec des aides. Première déclaration, en ligne, prélèvement à la source.',
  'budget_finances',
  'intermediaire',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1554902409-9b9a6b1e6e9b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcGVyJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D',
  '["Comprendre l''obligation de la déclaration de revenus, même avec de faibles revenus", "Savoir pourquoi déclarer est important pour les aides sociales", "Maîtriser la procédure de la première déclaration papier", "Déclarer en ligne les années suivantes et comprendre le prélèvement à la source"]'::jsonb,
  '["Résider fiscalement en France", "Avoir un numéro fiscal (obtenu après une première démarche)"]'::jsonb,
  TRUE,
  4.8,
  300,
  2500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 10
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '6h7i8j9k-0l1m-4012-n2o3-p4q5r6s7t8u9',
  'f9a0b1c2-d3e4-4012-g5h6-i7j8k9l0m1n2',
  'Le mythe : "Je ne gagne rien, je ne déclare rien"',
  '# Le mythe : "Je ne gagne rien, je ne déclare rien"

## Pourquoi c''est important ?

Le mythe selon lequel "si je ne gagne rien (ou très peu), je n''ai pas besoin de déclarer mes impôts" est l''une des idées reçues les plus répandues et les plus dangereuses pour les étudiants internationaux en France. Il est absolument faux et peut entraîner de graves problèmes administratifs et financiers. La déclaration de revenus est une obligation citoyenne et administrative cruciale, même si vous ne payez pas d''impôts. Ne pas déclarer peut bloquer l''accès à des aides sociales, créer des incohérences dans votre dossier et même générer des amendes. Comprendre pourquoi et comment déclarer est donc fondamental pour éviter des soucis avec l''administration fiscale française.


-   Déconstruire l''idée fausse qu''une absence de revenus implique une absence de déclaration.
-   Comprendre le statut de "résident fiscal" en France.


En France, la déclaration de revenus n''est pas seulement un moyen pour l''État de collecter l''impôt. C''est aussi un outil de recensement fiscal qui permet de déterminer votre situation familiale, de calculer vos droits à certaines aides sociales, et de suivre votre parcours administratif. Même si votre niveau de revenus est si bas que vous ne paierez pas d''impôts, la déclaration reste souvent obligatoire.



### 1. Qui est concerné par l''obligation de déclarer ?


-   **Importance pour les étudiants étrangers** : Si vous êtes étudiant(e) et que vous vivez en France depuis plus de 6 mois de l''année (du 1er janvier au 31 décembre), vous êtes généralement considéré(e) comme résident fiscal en France pour cette année-là, et donc soumis(e) à l''obligation de déclaration.


#### b) L''obligation de déclarer, même sans revenus imposables
-   **Même si vous avez de très faibles revenus ou aucun revenu** (vous êtes à la charge de vos parents, vous avez une bourse non imposable, etc.), si vous êtes résident fiscal en France, vous avez généralement l''obligation de déposer une déclaration de revenus.
-   **Les étudiants sont souvent concernés** : Dès l''année de leurs 18 ans, ou dès leur arrivée en France si elle est durable.
-   **Pourquoi ?** : La déclaration permet d''obtenir un numéro fiscal, de justifier de votre situation auprès d''autres administrations (CAF, préfecture), et de prouver que vous n''êtes pas imposable.



-   L''administration fiscale peut vous infliger des amendes pour défaut ou retard de déclaration.
-   **Redressement fiscal** : Si vous aviez des revenus imposables et que vous n''avez pas déclaré, vous risquez un redressement fiscal avec des majorations importantes.

-   **CAF et APL** : La CAF utilise votre avis d''imposition (ou de non-imposition) pour calculer vos droits aux Aides Personnalisées au Logement (APL) et à d''autres prestations. Si vous ne déclarez pas, la CAF peut suspendre vos aides.
-   **Autres aides** : D''autres organismes peuvent demander cet avis pour l''accès à des tarifs sociaux (transports, cantine, etc.).


-   Pour le renouvellement de votre titre de séjour, la préfecture peut demander vos avis d''imposition ou de non-imposition comme justificatif de ressources ou de votre situation. L''absence de déclaration peut créer une incohérence dans votre dossier.


Même les "petits" revenus sont à renseigner.

-   **Salaires d''un job étudiant** : Tous les salaires perçus, même d''un job à temps partiel.
-   **Revenus de stage** : Les gratifications de stage sont imposables au-delà d''un certain seuil (environ le SMIC annuel).
-   **Revenus étrangers** : Si vous êtes résident fiscal en France, vous devez déclarer l''ensemble de vos revenus mondiaux (avec des règles spécifiques pour éviter la double imposition).




-   **Ne présumez pas que vous n''êtes pas concerné** : Vérifiez toujours les règles de la résidence fiscale.
-   **Faites votre première déclaration papier** : C''est la clé pour obtenir votre numéro fiscal.


-   **Ne pas déclarer du tout** : C''est le risque le plus grand.
-   **Attendre une "invitation" à déclarer** : La première année, vous n''en recevrez pas, c''est à vous d''aller chercher le formulaire.
-   **Confondre "être non imposable" et "ne pas avoir à déclarer"** : Ce n''est pas la même chose.


-   🔗 [Ministère de l''Économie et des Finances : Comprendre l''impôt](https://www.economie.gouv.fr/particuliers/comprendre-l-impot-sur-le-revenu) - Guide pour les contribuables.
-   🔗 [Légifrance : Le Code Général des Impôts (CGI)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006069577/) - Pour les textes de loi (Article 170 sur l''obligation de déclaration).
-   🔗 [France Diplomatie : Conventions fiscales internationales](https://www.diplomatie.gouv.fr/fr/politique-etrangere-de-la-france/diplomatie-economique/relations-economiques-et-commerciales/conventions-fiscales/) - Pour éviter la double imposition avec votre pays d''origine.


Le mythe "je ne gagne rien, je ne déclare rien" est à proscrire absolument. Si vous êtes résident fiscal en France, la déclaration de revenus est une obligation, même avec de faibles revenus. Ne pas déclarer peut entraîner des amendes, le blocage de vos aides sociales (CAF, APL) et des problèmes pour le renouvellement de votre titre de séjour. Soyez proactif, faites votre première déclaration papier pour obtenir votre numéro fiscal, et gardez toutes vos preuves de revenus. C''est une étape essentielle de votre intégration administrative en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '7i8j9k0l-1m2n-4012-o3p4-q5r6s7t8u9v0',
  'f9a0b1c2-d3e4-4012-g5h6-i7j8k9l0m1n2',
  'Pourquoi déclarer aide pour le logement et la CAF',
  '# Pourquoi déclarer aide pour le logement et la CAF

## Pourquoi c''est important ?

Déclarer vos revenus en France, même s''ils sont faibles ou inexistants, est une démarche administrative cruciale qui va bien au-delà du simple paiement d''impôts. Pour les étudiants internationaux, cette déclaration est un sésame indispensable pour bénéficier des aides sociales, notamment les Aides Personnalisées au Logement (APL) versées par la Caisse d''Allocations Familiales (CAF). La CAF utilise votre avis d''imposition (ou de non-imposition) pour calculer précisément vos droits. Sans une déclaration en bonne et due forme, vos aides peuvent être suspendues, ou pire, vous pourriez devoir rembourser des sommes perçues indûment. Comprendre ce lien entre déclaration fiscale et aides sociales est fondamental pour optimiser votre budget et éviter les problèmes avec l''administration.


-   Savoir pourquoi un "avis de non-imposition" est tout aussi important qu''un avis d''imposition.


La CAF et l''administration fiscale (DGFiP - Direction Générale des Finances Publiques) sont deux entités distinctes mais qui échangent des informations. Votre déclaration de revenus est la source principale d''information pour la CAF pour estimer votre "quotient familial" et vos droits aux prestations.

🔗 [CAF : Déclaration de ressources](https://www.caf.fr/allocataires/droits-et-prestations/declaration-de-ressources-et-quotient-familial) - La page de la CAF sur l''importance de la déclaration de ressources.


### 1. La CAF et l''avis d''imposition : Un lien direct


#### a) L''avis d''imposition ou de non-imposition
-   Après votre déclaration de revenus, l''administration fiscale vous envoie un "avis d''imposition" (si vous devez payer des impôts) ou un "avis de situation déclarative à l''impôt sur le revenu" (ASDIR) qui remplace l''ancien "avis de non-imposition" si vous n''êtes pas imposable.

#### b) La CAF l''utilise pour calculer vos droits
-   La CAF a accès aux informations contenues dans votre avis d''imposition (ou ASDIR).
-   Elle se base sur votre "revenu fiscal de référence" (RFR) et d''autres éléments (situation familiale, charges, etc.) pour déterminer votre éligibilité et le montant de vos aides (APL, etc.).
-   **Sans cet avis, la CAF ne peut pas calculer vos droits**. Elle considérera que vous n''avez pas déclaré de revenus, ce qui peut bloquer ou suspendre vos prestations.

🔗 [Service-Public.fr : L''avis d''imposition](https://www.service-public.fr/particuliers/vosdroits/F32559) - Comprendre l''avis d''imposition.

### 2. Pourquoi un "avis de non-imposition" est crucial

Même sans payer d''impôts, le document est vital.

-   **Preuve officielle de faibles revenus** : L''avis de non-imposition (ou ASDIR) est la preuve officielle que vos revenus sont en dessous du seuil d''imposition. Pour la CAF, c''est la confirmation que vous avez besoin d''aides.
-   **Condition pour les APL** : Pour bénéficier des APL, vous devez prouver vos ressources. Même si vous n''avez pas de revenus, l''avis de non-imposition est la preuve de cette absence de revenus imposables.
-   **Justificatif pour d''autres organismes** : Ce document peut être demandé par d''autres organismes pour l''accès à des tarifs sociaux (transports, cantine, activités culturelles).

### 3. Les conséquences d''une non-déclaration ou d''une déclaration tardive


-   Si la CAF n''a pas vos informations fiscales (parce que vous n''avez pas déclaré), elle peut suspendre le versement de vos APL.

-   Si vous avez perçu des APL sans avoir déclaré vos revenus, la CAF peut estimer qu''elle n''avait pas toutes les informations pour calculer vos droits.
-   Elle peut alors vous demander de rembourser les sommes perçues à tort, avec d''éventuelles pénalités.

-   Vos droits aux aides sont souvent calculés sur les revenus N-2 (revenus de l''année N-2 pour les aides de l''année N). Si vous déclarez en retard, cela peut décaler le calcul de vos droits.


-   Votre **avis d''imposition** ou **ASDIR** (une fois obtenu).


-   **Faites votre déclaration de revenus chaque année** : C''est la règle d''or.
-   **Conservez vos avis d''imposition/ASDIR** : Ce sont des documents précieux.
-   **Si vous êtes primo-déclarant et que vous n''avez pas encore de numéro fiscal** : Contactez le service des impôts des particuliers (SIP) pour faire votre première déclaration papier et obtenir votre numéro fiscal. C''est la base de tout.


-   **Penser que la CAF est directement informée de vos revenus sans déclaration** : Ce n''est pas le cas, vous devez déclarer pour que les informations remontent.
-   **Ne pas faire la déclaration parce que vous ne payez pas d''impôts** : C''est une erreur commune avec des conséquences.
-   **Perdre son avis d''imposition** : Il est nécessaire pour de nombreuses démarches.


-   🔗 [Service-Public.fr : Aides au logement](https://www.service-public.fr/particuliers/vosdroits/F12006) - Conditions d''attribution des APL.
-   🔗 [Ministère de l''Économie et des Finances : Impôt sur le revenu](https://www.economie.gouv.fr/particuliers/impot-sur-le-revenu) - Informations générales sur l''impôt.
-   🔗 [Légifrance : Code de la Sécurité Sociale (CSS)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006073189/) - Articles sur les conditions d''attribution des prestations (Section sur les ressources).


Déclarer vos revenus en France est essentiel, même avec de faibles revenus, car c''est la base du calcul de vos droits aux aides sociales, notamment les APL de la CAF. Votre avis d''imposition (ou de non-imposition) est le document clé. Ne pas déclarer peut entraîner la suspension de vos aides ou l''obligation de rembourser. Faites votre déclaration chaque année, même si vous ne payez pas d''impôts, pour garantir la continuité de vos droits et éviter tout problème administratif.
',
  2,
  65,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '8j9k0l1m-2n3o-4012-p4q5-r6s7t8u9v0w1',
  'f9a0b1c2-d3e4-4012-g5h6-i7j8k9l0m1n2',
  'Première déclaration : Le formulaire papier',
  '# Première déclaration : Le formulaire papier

## Pourquoi c''est important ?

Votre première déclaration de revenus en France est une étape administrative fondamentale, car elle vous permet d''obtenir votre numéro fiscal, votre identifiant unique auprès de l''administration fiscale. Sans ce numéro, vous ne pourrez pas effectuer vos démarches en ligne les années suivantes, ni accéder à votre espace personnel sur `impots.gouv.fr`. Pour les étudiants internationaux, cette première déclaration se fait généralement via un formulaire papier, qui peut paraître complexe. Une bonne compréhension de cette procédure est essentielle pour initier correctement votre parcours fiscal en France, éviter les erreurs et garantir la régularité de votre situation vis-à-vis du fisc.


-   Connaître la procédure de dépôt du formulaire et l''attente du numéro fiscal.


Si vous n''avez jamais déclaré de revenus en France, vous ne possédez pas encore de numéro fiscal. C''est pourquoi l''administration fiscale exige une première déclaration sur papier. Ce formulaire, appelé "déclaration 2042", est la base pour établir votre identité fiscale.





-   Dans la barre de recherche, tapez "Formulaire 2042".
-   Téléchargez la version la plus récente pour l''année fiscale concernée (ex: "Déclaration de revenus 2024 (pour les revenus de 2023)").
-   Téléchargez également la notice explicative ("Notice 2042") qui accompagne le formulaire, elle est très utile.





-   **Identification** : Renseignez vos nom, prénom, date et lieu de naissance, nationalité. Assurez-vous que c''est conforme à votre passeport.


-   **Revenus d''activités salariées (case 1AJ / 1BJ)** : Si vous avez eu un job étudiant, déclarez les salaires perçus. Vous trouverez ce montant sur votre bulletin de salaire ou une attestation de l''employeur.
-   **Autres revenus** : Si vous avez perçu d''autres types de revenus (revenus fonciers, etc.), reportez-les dans les cases correspondantes.
-   **Bourses** : La plupart des bourses étudiantes sont non imposables et n''ont pas à être déclarées. Si vous avez un doute, vérifiez la nature de votre bourse.


#### e) N''oubliez pas de dater et signer le formulaire !



-   **Adresse du SIP** : L''adresse est généralement indiquée sur le site `impots.gouv.fr` ou dans la notice du formulaire.

-   **Pour une première déclaration papier** : Il est recommandé de la faire dès le début de la campagne, ou même de contacter le SIP avant la campagne si vous êtes arrivé(e) l''année précédente et n''avez jamais déclaré.

### 4. L''attente du numéro fiscal et de l''avis d''imposition

C''est la finalité de cette première démarche.

-   Après l''instruction de votre déclaration papier, l''administration fiscale vous enverra par courrier votre **avis d''imposition** (ou de non-imposition/ASDIR).
-   Ce document contiendra votre **numéro fiscal à 13 chiffres**. C''est un numéro personnel qui vous identifiera auprès du fisc et vous permettra de créer votre espace personnel en ligne pour les déclarations futures.




-   **N''hésitez pas à demander de l''aide** : Les agents du SIP peuvent vous accompagner, ou les associations d''aide aux étudiants.
-   **Faites une copie du formulaire rempli** : Avant de l''envoyer ou de le déposer.


-   **Attendre que l''administration vous contacte** : Pour la première déclaration, l''initiative vient de vous.


-   🔗 [Service des Impôts des Particuliers (SIP) : Localiser votre centre](https://www.impots.gouv.fr/portail/contacts) - Trouvez l''adresse et les horaires de votre SIP.
-   🔗 [Ministère de l''Économie et des Finances : La déclaration des revenus](https://www.economie.gouv.fr/particuliers/declaration-impot-sur-le-revenu) - Informations complètes.


Votre première déclaration de revenus en France se fait obligatoirement via le formulaire papier 2042. C''est une étape cruciale pour obtenir votre numéro fiscal, indispensable pour toutes vos futures démarches fiscales en ligne et pour le calcul de vos aides sociales. Remplissez-la avec précision, déclarez tous vos revenus (même faibles), signez-la, et déposez-la au SIP de votre domicile dans les délais. Ce document est la fondation de votre régularité fiscale en France.
',
  3,
  70,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '9k0l1m2n-3o4p-4012-q5r6-s7t8u9v0w1x2',
  'f9a0b1c2-d3e4-4012-g5h6-i7j8k9l0m1n2',
  'Déclarations suivantes : Tout en ligne',
  '# Déclarations suivantes : Tout en ligne

## Pourquoi c''est important ?

Une fois que vous avez effectué votre première déclaration de revenus papier et obtenu votre numéro fiscal, toutes les déclarations suivantes se feront majoritairement en ligne via votre espace personnel sur `impots.gouv.fr`. C''est une procédure simplifiée, sécurisée et obligatoire pour la plupart des contribuables. Maîtriser la déclaration en ligne est essentiel pour gagner du temps, éviter les erreurs de saisie et garantir une interaction fluide avec l''administration fiscale. Cela vous permettra également d''accéder à tout moment à vos documents fiscaux (avis d''imposition, etc.) et de gérer votre situation fiscale de manière autonome et efficace.








C''est votre interface avec l''administration fiscale.

#### a) Création du compte (si ce n''est pas déjà fait)
-   Cliquez sur "Votre espace particulier" puis sur "Créer votre espace".
    -   Votre **numéro d''accès en ligne** (figurant sur votre dernier avis d''imposition).
    -   Votre **revenu fiscal de référence** (RFR, également sur votre avis d''imposition).

-   Vous accéderez à votre "tableau de bord" fiscal.



#### a) L''accès à la déclaration
-   Pendant la campagne de déclaration (généralement d''avril à juin), un bouton "Accéder à la déclaration en ligne" sera disponible sur votre espace.

-   **Déclaration pré-remplie** : L''administration fiscale pré-remplit une partie de votre déclaration avec les informations dont elle dispose (salaires, etc.).
-   **Vérifiez toutes les informations** : C''est votre responsabilité de vous assurer que tout est exact.
        -   Vérifiez les salaires pré-remplis (case 1AJ/1BJ). Si vous avez d''autres revenus (stage, etc.), ajoutez-les.
        -   Si vous avez changé d''employeur ou eu plusieurs employeurs, assurez-vous que tous les salaires sont bien pris en compte.

-   Si vous avez des situations particulières (revenus fonciers, comptes à l''étranger, etc.), le système vous guidera vers les annexes ou cases correspondantes.
-   **Déclaration des comptes à l''étranger (case 3DN ou annexe 3916)** : Si vous détenez un compte bancaire à l''étranger (dans votre pays d''origine, par exemple), vous avez l''obligation de le déclarer, même si vous ne l''utilisez pas pour vos revenus en France. C''est une obligation déclarative, même si le compte est vide.



C''est un système très pratique.

-   **Accès permanent à vos documents** : Vous pouvez consulter et télécharger vos avis d''imposition (ASDIR) et déclarations antérieures à tout moment sur votre espace personnel.
-   **Sécurité** : Moins de risque de perte ou d''erreur de saisie que sur papier.


-   Vos **bulletins de salaire** de l''année concernée.
-   Votre **dernier avis d''imposition** (pour le numéro d''accès et le RFR si vous créez le compte).
-   Les **identifiants** de vos comptes bancaires à l''étranger (pour la déclaration si nécessaire).


-   **Commencez la déclaration à l''avance** : Ne laissez pas cela à la dernière minute.
-   **Vérifiez TOUT** : Même si c''est pré-rempli, l''erreur est humaine.
-   **Déclarez vos comptes étrangers** : C''est une obligation importante.


-   **Ne pas déclarer en ligne après la première année** : Si vous êtes résident fiscal en France, c''est obligatoire (sauf exceptions très rares).
-   **Ne pas déclarer les comptes bancaires détenus à l''étranger** : C''est une infraction qui peut entraîner une amende de 1 500€ par compte non déclaré et par an.
-   **Ignorer les messages de l''administration fiscale** : Répondez toujours aux courriers.
-   **Faire sa déclaration sur un site non officiel** : N''utilisez QUE `impots.gouv.fr`.


-   🔗 [Impots.gouv.fr : Déclarer un compte à l''étranger](https://www.impots.gouv.fr/portail/particulier/questions/faut-il-declarer-les-comptes-bancaires-a-l-etranger-detenus-par-un-resident) - Informations sur cette obligation.
-   🔗 [Ministère de l''Économie et des Finances : Déclaration d''impôts](https://www.economie.gouv.fr/particuliers/declaration-impot-sur-le-revenu) - Guide pratique.
-   🔗 [Légifrance : Article 1649 A du CGI](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006067746/) - Texte de loi sur l''obligation de déclaration des comptes à l''étranger.


Après votre première déclaration papier et l''obtention de votre numéro fiscal, toutes les déclarations de revenus suivantes se feront en ligne sur `impots.gouv.fr`. Créez votre espace personnel, vérifiez attentivement la déclaration pré-remplie, ajoutez tous vos revenus (même faibles) et déclarez impérativement tous vos comptes bancaires détenus à l''étranger. La déclaration en ligne est simple, rapide et obligatoire. Maîtrisez-la pour une gestion fiscale autonome et sereine en France.
',
  4,
  75,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'a0b1c2d3-e4f5-4012-z7a8-b9c0d1e2f3g4',
  'f9a0b1c2-d3e4-4012-g5h6-i7j8k9l0m1n2',
  'Comprendre le Prélèvement à la Source',
  '# Comprendre le Prélèvement à la Source

## Pourquoi c''est important ?

Depuis 2019, le système de prélèvement à la source (PAS) a révolutionné la manière de payer l''impôt sur le revenu en France. Plutôt que de payer vos impôts avec un an de décalage, ils sont désormais directement prélevés sur vos revenus (salaires, pensions, etc.) chaque mois ou chaque trimestre. Comprendre ce mécanisme est absolument crucial, surtout si vous êtes un étudiant international commençant à travailler ou recevant des revenus en France. Cela impacte directement le montant net que vous percevez et la gestion de votre budget. Une mauvaise compréhension peut entraîner des surprises lors de votre déclaration annuelle ou des difficultés financières si le taux de prélèvement n''est pas adapté à votre situation.


-   Définir ce qu''est le prélèvement à la source et son fonctionnement général.
-   Identifier l''impact du PAS sur vos revenus et votre déclaration annuelle.


Le prélèvement à la source a pour objectif d''adapter au plus juste le paiement de l''impôt aux revenus perçus, évitant ainsi un décalage d''un an. C''est un système qui rapproche le paiement de l''impôt du moment où le revenu est perçu.



### 1. Qu''est-ce que le Prélèvement à la Source (PAS) ?

C''est une nouvelle façon de collecter l''impôt.

-   **Principe** : L''impôt sur le revenu est directement déduit de vos revenus par le "tiers collecteur" (votre employeur pour un salaire, la CAF pour certaines allocations, votre banque pour certains revenus de capitaux) avant que vous ne perceviez votre revenu net.
-   **Impôt sur l''année en cours** : Vous payez l''impôt sur les revenus de l''année en cours, et non ceux de l''année précédente.
    1.  **Le taux de prélèvement** : C''est le pourcentage qui est appliqué à votre revenu brut.
    2.  **L''assiette du prélèvement** : C''est la base de calcul, généralement votre salaire net imposable avant prélèvement.

🔗 [Service-Public.fr : Le prélèvement à la source de l''impôt sur le revenu](https://www.service-public.fr/particuliers/vosdroits/F34300) - Explications claires et détaillées.



-   **Calcul par l''administration fiscale** : Après votre déclaration annuelle de revenus, l''administration calcule un taux de prélèvement personnalisé en fonction de votre situation fiscale (revenus, charges, quotient familial). Ce taux est ensuite transmis à votre employeur.
-   **Actualisation** : Le taux est actualisé chaque année après votre déclaration, et parfois en cours d''année si vous signalez un changement de situation (mariage, naissance, forte baisse de revenus).

#### b) Le taux neutre (ou "taux non personnalisé")
-   **Pour les primo-déclarants ou ceux qui ne veulent pas communiquer leur taux** : Si vous commencez à travailler et n''avez pas encore eu d''avis d''imposition pour calculer un taux personnalisé, ou si vous ne souhaitez pas que votre employeur connaisse votre situation fiscale, un taux non personnalisé (ou "taux neutre") est appliqué.
-   **Régularisation** : Si le taux neutre est appliqué, un complément d''impôt peut être à payer ou un remboursement à recevoir lors de la déclaration annuelle.

-   **En cas de changement important de revenus** : Si vous anticipez une forte baisse ou une forte hausse de vos revenus, vous pouvez demander à l''administration fiscale de moduler votre taux de prélèvement via votre espace `impots.gouv.fr`.
-   **Avantage** : Cela permet d''ajuster l''impôt prélevé chaque mois à votre situation réelle.

### 3. L''impact sur votre salaire et votre déclaration annuelle


-   Votre bulletin de salaire indique clairement le "net imposable avant impôt" et le "montant de l''impôt sur le revenu prélevé à la source".
-   Le "net à payer" est votre salaire après toutes les cotisations sociales ET le prélèvement à la source.

-   **Régularisation** : La déclaration annuelle de revenus (en ligne, comme vu précédemment) reste obligatoire. Elle permet à l''administration de faire le bilan de l''année et de calculer l''impôt définitif.
    -   Si vous avez trop payé via le PAS : vous serez remboursé(e) par l''administration fiscale.
    -   Si vous n''avez pas assez payé : vous devrez payer un complément d''impôt.
    -   Ce solde tient compte de l''ensemble de vos revenus et de votre situation familiale.



-   **Choisir le taux neutre pour la confidentialité** : Si vous préférez que votre employeur ne connaisse pas votre situation fiscale réelle, vous pouvez opter pour l''application du taux neutre. Attention, cela implique de gérer un éventuel solde à payer ou à rembourser en fin d''année.




-   **Vérifiez votre taux de prélèvement** : Sur votre avis d''imposition et vos bulletins de salaire.
-   **Comprenez l''impact sur votre budget** : Le PAS réduit votre salaire net. Tenez-en compte dans votre budget mensuel.
-   **Ne confondez pas "non imposable" et "pas de prélèvement"** : Vous pouvez être non imposable (0€ d''impôt), mais avoir quand même un petit prélèvement à la source si le taux est élevé, et vous serez remboursé en fin d''année.
-   **Utilisez l''espace `impots.gouv.fr`** : Pour simuler, moduler votre taux, et accéder à vos documents.


-   **Ignorer le PAS** : C''est une réalité incontournable.
-   **Ne pas moduler son taux en cas de forte baisse de revenus** : Vous pourriez payer trop d''impôts chaque mois.
-   **Croire que le montant prélevé est le montant définitif de l''impôt** : C''est une avance qui sera régularisée par la déclaration annuelle.
-   **Penser que le PAS est une taxe supplémentaire** : C''est juste un mode de collecte.


-   🔗 [Ministère de l''Économie et des Finances : Prélèvement à la source](https://www.economie.gouv.fr/particuliers/prelevement-la-source) - FAQ et explications.
-   🔗 [Organisations syndicales (CFDT, CGT)](https://www.cfdt.fr/) - Peuvent informer sur l''impact du PAS sur les salaires.


Le prélèvement à la source est le mode de collecte de l''impôt sur le revenu en France. Il est directement déduit de vos revenus par votre employeur. Votre taux est personnalisé après votre déclaration annuelle, mais vous pouvez le moduler en cas de changement de situation. La déclaration annuelle reste obligatoire pour la régularisation. Comprendre le PAS est essentiel pour gérer votre budget et votre situation fiscale sans surprise en France.
',
  4,
  65,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 10 ---

-- COURS 11 : Avis d'imposition et Taxe d'habitation
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'b1c2d3e4-f5a6-4012-g7h8-i9j0k1l2m3n4',
  'Avis d''imposition et Taxe d''habitation : Tout comprendre',
  'avis-imposition-taxe-habitation-comprendre',
  'Ce cours vous aidera à décrypter deux documents fiscaux fondamentaux en France : l''avis d''imposition (ou ASDIR) et la taxe d''habitation. Vous apprendrez à lire et à comprendre votre Avis de Situation Déclarative à l''Impôt sur le Revenu (ASDIR), un document essentiel pour de nombreuses démarches. Nous explorerons également la Taxe d''Habitation, son fonctionnement, qui la paie encore (car elle a été supprimée pour beaucoup), et la Contri bution à l''Audiovisuel Public (la "redevance télé"). Une bonne compréhension de ces aspects fiscaux est cruciale pour votre intégration et la bonne gestion de votre budget en France.',
  'Décryptez votre avis d''imposition et la taxe d''habitation. Comprendre l''ASDIR, qui paie la taxe, et la redevance télé.',
  'budget_finances',
  'intermediaire',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1554902409-9b9a6b1e6e9b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcGVyJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D',
  '["Apprendre à lire et comprendre votre Avis de Situation Déclarative (ASDIR)", "Comprendre les principes de la Taxe d''Habitation et qui la paie encore", "Identifier les règles de la Contribution à l''Audiovisuel Public", "Gérer et archiver correctement ces documents fiscaux"]'::jsonb,
  '["Avoir effectué au moins une déclaration de revenus en France"]'::jsonb,
  TRUE,
  4.8,
  220,
  1800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 11
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '2m3n4o5p-6q7r-4012-s8t9-u0v1w2x3y4z5',
  'b1c2d3e4-f5a6-4012-g7h8-i9j0k1l2m3n4',
  'Lire son Avis de Situation Déclarative (ASDIR)',
  '# Lire son Avis de Situation Déclarative (ASDIR)

## Pourquoi c''est important ?

L''Avis de Situation Déclarative à l''Impôt sur le Revenu (ASDIR) est un document fiscal crucial que vous recevez chaque année après avoir effectué votre déclaration de revenus. Même si vous n''êtes pas imposable, l''ASDIR est la preuve officielle de votre situation fiscale. Il est indispensable pour de nombreuses démarches administratives en France : demande d''aides sociales (CAF, APL), obtention de prêts, justification de ressources auprès de la préfecture pour le renouvellement de votre titre de séjour, etc. Comprendre comment lire et interpréter votre ASDIR est donc fondamental pour votre intégration administrative et pour pouvoir justifier de votre situation fiscale à tout moment.


-   Définir ce qu''est l''ASDIR et sa valeur légale.
-   Identifier les sections clés de l''ASDIR et les informations qu''elles contiennent.
-   Comprendre les notions de "Revenu Fiscal de Référence" (RFR) et de "nombre de parts".


L''ASDIR a remplacé l''ancien "avis de non-imposition" et est délivré à tous les contribuables, qu''ils soient imposables ou non. C''est le document qui synthétise votre déclaration de revenus et la décision de l''administration fiscale.

🔗 [Impots.gouv.fr : L''avis de situation déclarative à l''impôt sur le revenu (ASDIR)](https://www.impots.gouv.fr/portail/particulier/avis-de-situation-declarative-limpot-sur-le-revenu-asdir) - Le site officiel pour comprendre l''ASDIR.


### 1. Qu''est-ce que l''ASDIR et à quoi sert-il ?

L''ASDIR est votre carte d''identité fiscale.

-   **Justificatif de ressources** : C''est le document principal pour prouver vos revenus (ou leur absence) auprès de nombreux organismes (CAF, banques, propriétaires, préfectures).
-   **Calcul des aides sociales** : La CAF utilise le Revenu Fiscal de Référence (RFR) qui figure sur l''ASDIR pour calculer vos droits aux APL et autres prestations.
-   **Obtention du numéro fiscal** : Pour les primo-déclarants, c''est sur l''ASDIR que figurera pour la première fois votre numéro fiscal à 13 chiffres.

### 2. Les sections clés de l''ASDIR à comprendre


-   **Votre numéro d''accès en ligne** : Pour la création de votre espace en ligne ou pour la déclaration suivante.

-   **Année des revenus** : L''année pour laquelle la déclaration a été faite (ex: "revenus 2023").
-   **Nombre de parts** : En France, le calcul de l''impôt est basé sur le quotient familial. Un célibataire sans enfant a 1 part.

-   **Définition** : C''est un indicateur fiscal qui prend en compte l''ensemble de vos revenus (salaires, pensions, revenus fonciers, etc.), après déduction de certaines charges et abattements.
-   **Importance** : Le RFR est crucial pour l''accès à de nombreuses aides sociales (CAF) et dispositifs (par exemple, exonération de taxe d''habitation ou de redevance télé).

#### d) L''impôt dû
-   **Impôt sur le revenu net avant crédits d''impôt** : Le montant de l''impôt calculé.
-   **Crédits/réductions d''impôt** : Si vous avez droit à des réductions ou crédits d''impôt (rare pour les étudiants).
-   **Montant de l''impôt dû** : Le montant final. S''il est de 0€, vous êtes non imposable.

-   **Solde à payer ou à rembourser** : La différence entre l''impôt dû et le PAS déjà versé.



C''est un document à ne jamais perdre.

-   C''est le moyen le plus simple et le plus rapide. Après chaque déclaration en ligne, votre ASDIR est disponible dans votre espace personnel, rubrique "Documents". Vous pouvez le télécharger et l''imprimer à tout moment.

-   Si vous avez fait une déclaration papier ou si vous avez opté pour ne pas recevoir de documents numériques, l''ASDIR vous sera envoyé par courrier.

-   **Physique** : Imprimez-le et rangez-le dans votre classeur administratif (voir cours sur l''organisation).
-   **Durée de conservation** : L''ASDIR doit être conservé pendant au moins 3 ans, mais il est conseillé de le garder plus longtemps (jusqu''à 10 ans) pour toutes vos démarches.




-   **Téléchargez-le dès qu''il est disponible** : Sur votre espace en ligne.
-   **Ne donnez pas l''original à n''importe qui** : Fournissez des copies lorsque cela est demandé.


-   **Confondre l''ASDIR avec la feuille d''impôt locale (taxe d''habitation, taxe foncière)** : Ce sont des documents distincts.


-   🔗 [Impots.gouv.fr : Comprendre mon avis d''impôt](https://www.impots.gouv.fr/portail/particulier/comprendre-mon-avis-dimpot) - Guide pour l''interprétation de votre avis.
-   🔗 [CAF : L''avis d''imposition et les aides](https://www.caf.fr/allocataires/droits-et-prestations/declaration-de-ressources-et-quotient-familial) - Comment la CAF utilise votre ASDIR.
-   🔗 [Ministère de l''Économie et des Finances : La fiscalité des particuliers](https://www.economie.gouv.fr/particuliers/fiscalite-des-particuliers) - Informations générales.


L''Avis de Situation Déclarative à l''Impôt sur le Revenu (ASDIR) est un document fiscal essentiel que vous recevez après votre déclaration. Il est la preuve officielle de votre situation fiscale, notamment de votre Revenu Fiscal de Référence (RFR), et est indispensable pour de nombreuses démarches administratives et pour le calcul de vos aides sociales. Apprenez à le lire, à le télécharger depuis votre espace `impots.gouv.fr`, et à le conserver précieusement. C''est un document clé pour votre vie en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '3n4o5p6q-7r8s-4012-t9u0-v1w2x3y4z5a6',
  'b1c2d3e4-f5a6-4012-g7h8-i9j0k1l2m3n4',
  'La Taxe d''Habitation : Qui paie encore ?',
  '# La Taxe d''Habitation : Qui paie encore ?

## Pourquoi c''est important ?

La Taxe d''Habitation est un impôt local français qui a connu des réformes majeures ces dernières années, entraînant sa suppression pour la grande majorité des ménages. Cependant, elle existe toujours pour certains foyers et, plus particulièrement, pour les résidences secondaires et les logements vacants. Comprendre qui est encore concerné par cette taxe, et si vous en êtes redevable en tant qu''étudiant international, est essentiel pour éviter des paiements indus ou, au contraire, des pénalités pour non-paiement. Ce cours vous aidera à démystifier la Taxe d''Habitation et à identifier si elle concerne votre situation de logement en France.


-   Comprendre la nature de la Taxe d''Habitation et son évolution.
-   Identifier les profils qui sont encore redevables de la Taxe d''Habitation.


Historiquement, la Taxe d''Habitation était due par toute personne occupant un logement au 1er janvier de l''année d''imposition. Elle a été progressivement supprimée entre 2018 et 2023 pour les résidences principales.

🔗 [Impots.gouv.fr : La taxe d''habitation sur la résidence principale est supprimée](https://www.impots.gouv.fr/portail/particulier/taxes-locales/taxe-habitation-1) - Le site officiel qui annonce la suppression.


### 1. Qu''est-ce que la Taxe d''Habitation ?

C''est un impôt local qui a presque disparu.

-   **Nature** : C''est un impôt local dû annuellement à la collectivité territoriale (commune, intercommunalité) où se situe votre logement.
-   **Qui est concerné ?** : La taxe est due par la personne qui occupe un logement au 1er janvier de l''année d''imposition, qu''elle soit propriétaire, locataire ou occupante à titre gratuit.

-   Depuis le 1er janvier 2023, la taxe d''habitation sur la résidence principale est **supprimée pour tous les foyers fiscaux**. Cela signifie que si le logement que vous occupez est votre résidence principale, vous n''avez plus à payer cette taxe.

#### b) Qui paie encore la Taxe d''Habitation ?
-   **Résidences secondaires** : Les propriétaires ou locataires de résidences secondaires (logements non occupés à titre principal) sont toujours redevables de la taxe d''habitation.
-   **Logements meublés non affectés à l''habitation principale** : Cela peut concerner certains types de locations saisonnières ou d''appartements mis à disposition.

🔗 [Service-Public.fr : Taxe d''habitation sur la résidence principale](https://www.service-public.fr/particuliers/vosdroits/F42) - Explications sur la suppression.
🔗 [Ministère de l''Économie et des Finances : Réforme de la taxe d''habitation](https://www.economie.gouv.fr/particuliers/taxe-habitation) - Informations détaillées sur la réforme.

### 2. Le fonctionnement de la taxe d''habitation pour les cas restants

Si vous êtes dans une situation où la taxe est encore due, voici ce qu''il faut savoir.

#### a) L''avis de taxe d''habitation
-   Si vous êtes redevable, vous recevrez un avis de taxe d''habitation par courrier ou dans votre espace `impots.gouv.fr` à l''automne (généralement en septembre-octobre).

-   Le calcul de la taxe d''habitation est basé sur la "valeur locative cadastrale" du logement (un loyer théorique) et les taux d''imposition votés par les collectivités locales.
-   Des abattements peuvent s''appliquer en fonction de la situation familiale et des revenus.

-   Si vous êtes un étudiant et que vous louez un logement qui est votre résidence principale, vous ne devriez plus recevoir d''avis de taxe d''habitation.
-   Si vous en recevez un, il est probable qu''il s''agisse d''une erreur de l''administration.

### 3. La Contribution à l''Audiovisuel Public (CAP ou "redevance télé")

Cette contribution est distincte de la taxe d''habitation et a également évolué.

#### a) Qu''est-ce que la CAP ?
-   C''est une taxe qui finançait les chaînes et radios publiques (France Télévisions, Radio France, Arte, etc.).
-   Elle était due si vous possédiez un téléviseur ou un dispositif assimilé (vidéoprojecteur, etc.) au 1er janvier de l''année d''imposition.
-   Elle était historiquement collectée avec la taxe d''habitation.

-   Depuis 2022, la Contribution à l''Audiovisuel Public a été **supprimée pour tous les foyers**.
-   Cela signifie que vous n''avez plus à payer la "redevance télé", que vous possédiez un téléviseur ou non.

🔗 [Service-Public.fr : Contribution à l''audiovisuel public (redevance TV)](https://www.service-public.fr/particuliers/vosdroits/F87) - Informations sur la suppression de la CAP.

### 4. Que faire en cas d''erreur ou de contestation ?


-   Si vous recevez un avis de taxe d''habitation ou de CAP alors que vous êtes une personne exonérée (ex: étudiant en résidence principale), contactez votre Service des Impôts des Particuliers (SIP) ou le Centre des Finances Publiques.

-   Respectez les délais de réclamation (généralement jusqu''au 31 décembre de l''année suivant celle de la mise en recouvrement de l''impôt).


-   Votre **avis de taxe d''habitation** (si vous en recevez un).


-   **Ne payez pas si vous êtes certain(e) d''être exonéré(e)** : Mais vérifiez bien avant de contester.
-   **Gardez une trace de toutes vos démarches** : Courriers, dates d''appels, noms des interlocuteurs.
-   **Surveillez votre boîte aux lettres et votre espace `impots.gouv.fr`** à l''automne pour les avis d''imposition locaux.
-   **En cas de colocation** : La taxe d''habitation est généralement établie au nom des occupants au 1er janvier. Si plusieurs noms figurent sur le bail, elle peut être au nom de tous.


-   **Ignorer un avis d''imposition** : Ne pas y répondre peut entraîner des majorations.
-   **Ne pas contester dans les délais** : Une fois le délai passé, il est très difficile d''obtenir un remboursement.
-   **Confondre résidence principale et résidence secondaire** : C''est la clé de l''exonération.


-   🔗 [Impots.gouv.fr : Taxe d''habitation](https://www.impots.gouv.fr/portail/particulier/taxes-locales/taxe-habitation-1) - Toutes les informations officielles sur la taxe d''habitation.
-   🔗 [Service-Public.fr : Faire une réclamation sur un impôt](https://www.service-public.fr/particuliers/vosdroits/F2445) - Guide pour contester un avis d''impôt.
-   🔗 [Ministère de l''Économie et des Finances : Guide des impôts locaux](https://www.economie.gouv.fr/particuliers/impots-locaux) - Informations générales sur les impôts locaux.
-   🔗 [Légifrance : Article 1407 du Code Général des Impôts (CGI)](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006071060/) - Texte de loi sur la taxe d''habitation.
-   🔗 [Associations de consommateurs (UFC-Que Choisir, CLCV)](https://www.quechoisir.org/) - Peuvent vous aider à contester des avis d''imposition.


La Taxe d''Habitation sur la résidence principale a été supprimée pour tous les contribuables depuis 2023. Si vous êtes étudiant et que votre logement est votre résidence principale, vous ne devriez plus la payer. La Contribution à l''Audiovisuel Public a également été supprimée. Si vous recevez malgré tout un avis de taxe d''habitation, vérifiez votre situation et n''hésitez pas à contacter le Service des Impôts des Particuliers (SIP) pour contester. Une bonne compréhension de ces réformes est essentielle pour gérer votre budget et éviter les erreurs fiscales.
',
  2,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '4o5p6q7r-8s9t-4012-u0v1-w2x3y4z5a6b7',
  'b1c2d3e4-f5a6-4012-g7h8-i9j0k1l2m3n4',
  'La Contribution à l''Audiovisuel Public (Télé)',
  '# La Contribution à l''Audiovisuel Public (Télé)

## Pourquoi c''est important ?

La Contribution à l''Audiovisuel Public (CAP), plus communément appelée "redevance télé", était un impôt bien connu en France, qui finançait le service public de l''audiovisuel (France Télévisions, Radio France, Arte, etc.). Cependant, cette contribution a été supprimée en 2022. Comprendre cette suppression et savoir que vous n''avez plus à la payer est crucial pour éviter de tomber dans des pièges (fraudes, demandes de paiement obsolètes) et pour bien gérer votre budget. Ce cours vise à clarifier définitivement le statut de cette taxe et son impact sur votre situation d''étranger en France.


-   Comprendre ce qu''était la Contribution à l''Audiovisuel Public.
-   Savoir comment vérifier que vous n''êtes plus concerné(e).
-   Maîtriser les conseils pour ne pas être victime d''éventuelles fraudes.


La CAP était due par les foyers fiscaux qui possédaient un téléviseur ou un dispositif assimilé au 1er janvier de l''année d''imposition. Elle était collectée en même temps que la taxe d''habitation. La réforme qui a conduit à sa suppression a simplifié la vie de millions de contribuables.

🔗 [Service-Public.fr : Contribution à l''audiovisuel public (redevance TV)](https://www.service-public.fr/particuliers/vosdroits/F87) - La page officielle sur la suppression de la CAP.


### 1. Qu''était la Contribution à l''Audiovisuel Public ?


-   **Nature** : C''était une taxe annuelle due par tout foyer fiscal disposant d''un téléviseur (ou dispositif de réception) au 1er janvier de l''année.

🔗 [Ministère de la Culture : Le financement de l''audiovisuel public](https://www.culture.gouv.fr/Thematiques/Audiovisuel/Financement-de-l-audiovisuel-public) - Informations sur les sources de financement.


Une mesure fiscale d''envergure.

-   La Contribution à l''Audiovisuel Public a été **supprimée à partir de 2022**.
-   Cela signifie que pour les années d''imposition 2022 et suivantes, vous n''avez plus à la payer, que vous ayez une télévision ou non.

-   **Tous les foyers fiscaux** : La suppression est universelle et s''applique à l''ensemble des contribuables, qu''ils soient imposables ou non, et quelle que soit leur situation.

-   La suppression de la CAP visait à augmenter le pouvoir d''achat des Français et à simplifier le paysage fiscal. Le financement de l''audiovisuel public est désormais assuré par d''autres sources budgétaires de l''État.

### 3. Comment vérifier que vous n''êtes plus concerné(e) ?


#### a) Votre avis d''imposition (ASDIR)
-   Sur votre avis d''imposition (ASDIR) des revenus de 2022 (reçu en 2023) et des années suivantes, vous ne verrez plus aucune ligne relative à la Contribution à l''Audiovisuel Public.
-   Si par erreur vous receviez un avis incluant la CAP, il s''agirait d''une erreur de l''administration (voir section sur la contestation).

-   Sur vos avis d''imposition des années antérieures à 2022, vous pouviez trouver une ligne "Contribution à l''Audiovisuel Public" si vous étiez redevable.


-   Votre **avis d''imposition (ASDIR)** de l''année en cours.


-   **Vérifiez toujours vos avis d''imposition** : Lisez chaque ligne pour comprendre ce qui vous est demandé.
-   **Si vous êtes démarché(e) pour payer la redevance télé** : C''est une fraude ! Ne donnez jamais vos informations personnelles ou bancaires. L''administration fiscale ne vous demandera jamais de payer par téléphone ou par des moyens non sécurisés.


-   **Confondre les impôts** : La suppression de la CAP est distincte de celle de la Taxe d''Habitation.
-   **Se sentir obligé(e) de posséder un téléviseur** : Il n''y a plus de lien fiscal entre la possession d''un appareil et une taxe.


-   🔗 [Impots.gouv.fr : La suppression de la contribution à l''audiovisuel public](https://www.impots.gouv.fr/portail/particulier/taxes-locales/contribution-laudiovisuel-public) - La page officielle.
-   🔗 [Service-Public.fr : Qu''est-ce que la CAP et sa suppression ?](https://www.service-public.fr/particuliers/vosdroits/F87) - Explications complètes.
-   🔗 [Ministère de l''Économie et des Finances : Les mesures phares](https://www.economie.gouv.fr/particuliers/suppression-redevance-audiovisuelle) - Article de presse gouvernemental sur la suppression.
-   🔗 [Cybermalveillance.gouv.fr : Arnaques aux faux avis d''impôts](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/les-arnaques-aux-faux-avis-dimpots-ou-de-remboursement-dimpots) - Soyez vigilant(e) aux tentatives de fraude.
-   🔗 [Conseil supérieur de l''audiovisuel (CSA) devenu Arcom](https://www.arcom.fr/) - L''autorité de régulation de l''audiovisuel, pour comprendre le secteur.


La Contribution à l''Audiovisuel Public (redevance télé) a été entièrement supprimée pour tous les foyers fiscaux depuis 2022. Vous n''avez donc plus à la payer. Vérifiez vos avis d''imposition pour vous en assurer et soyez vigilant(e) face à d''éventuelles tentatives de fraude. Cette suppression est une simplification fiscale qui allège votre budget et votre charge administrative.
',
  3,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

