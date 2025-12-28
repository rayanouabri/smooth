-- ==========================================
-- LOT 3 : Cours 11 à 15
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 11 ---

-- COURS 12 : Échanger son permis de conduire
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'c5d6e7f8-a9b0-4012-e1f2-a3b4c5d6e7f8',
  'Échanger son permis de conduire étranger en France : Le guide',
  'echanger-permis-conduire-etranger-france',
  'Ce cours est un guide essentiel pour les étrangers en France qui souhaitent échanger leur permis de conduire obtenu à l''étranger contre un permis français. La procédure est soumise à des conditions strictes, notamment l''existence d''un accord de réciprocité entre la France et votre pays d''origine, et un délai impératif d''un an après votre installation. Nous détaillerons la liste des pays avec accords, l''importance cruciale du délai d''un an, la procédure de demande entièrement dématérialisée sur l''ANTS, et les règles pour conduire avec votre permis étranger en attendant l''échange. Une bonne compréhension de ces règles est indispensable pour circuler légalement sur les routes françaises.',
  'Échange de permis étranger en France : réciprocité, délai d''un an, procédure ANTS. Conduisez légalement !',
  'transport',
  'intermediaire',
  'fr',
  5,
  0,
  'https://images.unsplash.com/photo-1594967399343-982d1c68615c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhc3Nwb3J0JTIwdHJhdmVsfGVufDB8fDB8fHww',
  '["Connaître les pays ayant un accord de réciprocité avec la France", "Comprendre l''importance du délai d''un an pour l''échange", "Maîtriser la procédure de demande sur la plateforme ANTS", "Identifier les règles pour conduire avec son permis étranger en France"]'::jsonb,
  '["Avoir un permis de conduire valide délivré par un pays étranger"]'::jsonb,
  TRUE,
  4.8,
  300,
  2000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 12
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '6d7e8f9a-0b1c-4012-e3f4-a5b6c7d8e9f0',
  'c5d6e7f8-a9b0-4012-e1f2-a3b4c5d6e7f8',
  'Pays avec accord de réciprocité : La liste',
  '# Pays avec accord de réciprocité : La liste

## Pourquoi c''est important ?

Pour échanger votre permis de conduire étranger contre un permis français, la condition la plus fondamentale est l''existence d''un accord de réciprocité en matière de permis de conduire entre la France et le pays qui a délivré votre permis. Sans un tel accord, l''échange est impossible, et vous devrez repasser l''intégralité de l''examen du permis de conduire français (code et conduite). Identifier dès le départ si votre pays figure sur cette liste est donc crucial pour planifier vos démarches et éviter des frais et des efforts inutiles. Ce cours vous fournira la liste des pays concernés et vous expliquera comment vérifier les conditions spécifiques.


-   Comprendre le concept d''accord de réciprocité en matière de permis de conduire.
-   Maîtriser les actions à entreprendre si votre pays n''est pas sur la liste.


La France a signé des accords de réciprocité avec de nombreux pays étrangers. Ces accords permettent aux ressortissants de ces pays, sous certaines conditions, de faire reconnaître leur permis de conduire et de l''échanger contre un permis français. C''est une mesure de simplification administrative pour faciliter l''intégration des personnes qui s''installent durablement en France.

🔗 [Service-Public.fr : Échanger son permis étranger](https://www.service-public.fr/particuliers/vosdroits/F1460) - Le portail officiel des informations sur l''échange de permis.


### 1. Qu''est-ce qu''un accord de réciprocité ?

C''est un arrangement bilatéral entre deux États.

-   **Reconnaissance mutuelle** : L''accord stipule que chaque pays reconnaît la validité des permis de conduire délivrés par l''autre pays, sous réserve de certaines conditions.
-   **Conditions de l''échange** : L''accord définit les conditions sous lesquelles un permis étranger peut être échangé (âge, durée de validité, catégories, etc.). Ces conditions sont spécifiques à chaque pays signataire.



#### a) Les pays de l''Espace Économique Européen (EEE)
-   **Permis de l''EEE** : Les permis de conduire délivrés par un pays de l''Espace Économique Européen (pays de l''Union Européenne + Islande, Liechtenstein, Norvège) sont reconnus en France sans limitation de durée. L''échange n''est obligatoire que dans certains cas précis (perte, vol, suspension, ou si vous passez une nouvelle catégorie).

-   Voici une liste non exhaustive des pays ayant un accord de réciprocité avec la France pour l''échange de permis (cette liste peut évoluer, il faut toujours vérifier la source officielle) :

🔗 [Service-Public.fr : Liste des pays qui procèdent à l''échange de permis de conduire](https://www.service-public.fr/particuliers/vosdroits/F1460) - La liste officielle et la plus à jour (cliquez sur "Vérifier si votre pays a un accord").




-   Il ne doit pas avoir été obtenu en échange d''un autre permis délivré dans un pays où l''accord de réciprocité n''existe pas.

-   Si votre permis n''est pas rédigé en français, il doit être accompagné d''une traduction officielle ou d''un permis de conduire international.

### 4. Que faire si votre pays n''est pas sur la liste ?


-   **Repasser l''examen français** : Si votre pays n''a pas d''accord avec la France, vous devrez repasser l''examen du permis de conduire français (code de la route et épreuve pratique de conduite).
-   **Permis international (limité)** : Un permis de conduire international vous permet de conduire en France pendant un an au maximum à partir de la date de début de votre résidence normale en France, mais il ne remplace pas l''échange ou l''obtention d''un permis français.




-   **Anticipez** : Si vous savez que votre pays n''a pas d''accord, commencez à vous renseigner sur les auto-écoles françaises.
-   **Ne reportez pas la démarche** : Le délai d''un an est crucial (voir prochaine leçon).


-   **Croire qu''un permis international suffit pour toujours** : Non, il a une validité limitée pour les résidents en France.
-   **Ne pas vérifier la liste** : Sans accord, l''échange est impossible.
-   **Penser que l''échange est automatique** : Il s''agit d''une démarche administrative.


-   🔗 [Ministère de l''Intérieur : Permis de conduire étranger en France](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Permis-de-conduire-etranger) - Informations générales du ministère.
-   🔗 [Légifrance : Arrêté du 12 janvier 2012 fixant les conditions de reconnaissance et d''échange des permis de conduire délivrés par des États n''appartenant ni à l''Union européenne ni à l''Espace économique européen](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000025178619/) - Le texte juridique de référence.


L''échange de votre permis de conduire étranger en France dépend de l''existence d''un accord de réciprocité entre la France et le pays qui a délivré votre permis. Consultez la liste officielle sur `service-public.fr` pour vérifier votre éligibilité et les conditions spécifiques. Si votre pays n''est pas sur la liste, vous devrez repasser l''examen français. Cette vérification est une étape primordiale pour garantir votre droit de conduire légalement en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '7a6a6290-61f8-4ca1-aa8c-5a02c7d28c0c',
  'c5d6e7f8-a9b0-4012-e1f2-a3b4c5d6e7f8',
  'Le délai fatal d''un an pour faire la demande',
  '# Le délai fatal d''un an pour faire la demande

## Pourquoi c''est important ?

Le délai d''un an est la condition la plus stricte et la plus fréquemment méconnue ou ignorée par les étrangers souhaitant échanger leur permis de conduire en France. Vous disposez d''un délai impératif d''un an, à compter de la date d''acquisition de votre résidence normale en France (généralement la date de validation de votre VLS-TS ou de votre premier titre de séjour), pour déposer votre demande d''échange. Si vous dépassez ce délai, même d''un seul jour, votre permis étranger ne sera plus reconnu en France et vous perdrez définitivement la possibilité de l''échanger. Vous devrez alors obligatoirement repasser l''intégralité de l''examen du permis de conduire français. Comprendre et respecter ce délai est absolument crucial pour conserver votre droit de conduire en France.


-   Comprendre le point de départ et la durée exacte du délai d''un an.


Le délai d''un an est une mesure visant à inciter les nouveaux résidents à régulariser leur situation de conduite rapidement. L''administration ne fera aucune exception en cas de dépassement, la règle est appliquée avec rigueur.

🔗 [Service-Public.fr : Le délai d''un an pour échanger son permis](https://www.service-public.fr/particuliers/vosdroits/F1460) - Le portail officiel rappelle ce délai crucial.


### 1. Le point de départ du délai d''un an

La date d''acquisition de la "résidence normale" est la clé.

-   **Définition de la résidence normale** : Pour les titulaires d''un VLS-TS ou d''un titre de séjour, la date de début de votre résidence normale en France est généralement :
    -   Pour les VLS-TS (étudiant, salarié, visiteur) : La date de validation de votre visa par l''OFII ou via l''ANEF.
-   **Date clé** : C''est la date du tampon d''entrée sur votre passeport ou la date figurant sur votre attestation de validation VLS-TS ou sur votre carte de séjour qui est prise en compte.


C''est une période non prolongeable.

-   **Demande d''échange** : Vous devez déposer votre dossier complet de demande d''échange sur le site de l''ANTS (Agence Nationale des Titres Sécurisés) dans les 12 mois suivant la date d''acquisition de votre résidence normale.
-   **Non-renouvelable** : Ce délai n''est pas renouvelable. Il n''y a pas de "rattrapage" possible.



#### a) Perte du droit d''échanger son permis
-   Si vous dépassez le délai d''un an, votre permis étranger, même s''il est valide dans votre pays, ne sera **plus reconnaissable** en France et vous ne pourrez plus l''échanger.

#### b) Obligation de repasser l''examen du permis français
-   La seule solution sera de vous inscrire dans une auto-école française et de repasser l''intégralité de l''examen du permis de conduire (épreuve théorique du Code de la route et épreuve pratique de conduite). Cela représente un coût financier et un investissement en temps considérables.

-   Si vous continuez à conduire avec votre permis étranger après le délai d''un an sans avoir déposé de demande d''échange, vous serez considéré(e) comme conduisant **sans permis valide** en France. Cela peut entraîner :
    -   Une amende salée (jusqu''à 15 000€).



-   Cherchez la date sur votre attestation de validation VLS-TS ou sur votre premier titre de séjour. C''est votre "jour J".

-   Notez la date exacte (jour/mois/année) d''un an après votre date de résidence normale. C''est votre date limite absolue.
-   Exemple : Résidence normale acquise le 15 septembre 2024 -> Date limite pour l''échange : 14 septembre 2025.

-   La demande se fait en ligne sur l''ANTS, mais la constitution des pièces (traductions, justificatifs) peut prendre du temps.




-   **Mettez un rappel à 6 mois et à 3 mois** avant l''expiration du délai pour vous assurer de ne pas l''oublier.
-   **Préparez toutes les pièces justificatives à l''avance** : Votre permis étranger, une traduction assermentée, justificatif de domicile, photos, etc.
-   **Si vous n''avez pas d''autre choix que de repasser le permis** : Ne vous stressez pas, mais commencez les démarches dès que possible.


-   **Ignorer le délai d''un an** : C''est la cause principale des problèmes.
-   **Penser que l''on peut obtenir une dérogation** : Les exceptions sont extrêmement rares et pour des cas de force majeure prouvés.
-   **Compter sur votre permis international au-delà d''un an de résidence** : Il n''est plus valable pour les résidents.
-   **Commencer la démarche d''échange trop tard** : Le traitement de la demande prend du temps, et c''est la date de dépôt du dossier qui fait foi.
-   **Perdre son permis étranger ou ne pas l''avoir fait traduire** : Ces démarches prennent du temps.


-   🔗 [ANTS : Échanger son permis de conduire étranger](https://ants.gouv.fr/monespace/s-inscrire/echanger-son-permis-de-conduire) - Le portail officiel de l''ANTS pour la démarche.
-   🔗 [Service-Public.fr : Le délai d''un an](https://www.service-public.fr/particuliers/vosdroits/F1460) - Le guide complet avec les conditions et les délais.
-   🔗 [Ministère de l''Intérieur : Les permis étrangers en France](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Permis-de-conduire-etranger) - Informations officielles sur la reconnaissance des permis.
-   🔗 [Légifrance : Article R. 222-2 du Code de la Route](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006842247/) - Texte de loi sur l''échange de permis de conduire.
-   🔗 [Liste des traducteurs assermentés](https://www.annuaire-traducteur-assermente.fr/) - Si vous avez besoin d''une traduction.


Le délai d''un an pour déposer votre demande d''échange de permis de conduire étranger est un point crucial et non négociable. Il court à partir de la date d''acquisition de votre résidence normale en France. Dépasser ce délai signifie la perte définitive de la possibilité d''échange et l''obligation de repasser le permis français. Anticipez cette démarche, calculez précisément votre date limite, et rassemblez toutes les pièces bien avant. C''est votre seule garantie pour continuer à conduire légalement en France.
',
  2,
  75,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '2c541963-b0c6-4fee-a922-8222c17c2688',
  'c5d6e7f8-a9b0-4012-e1f2-a3b4c5d6e7f8',
  'La procédure sur l''ANTS',
  '# La procédure sur l''ANTS

## Pourquoi c''est important ?

La procédure d''échange de permis de conduire étranger en France est désormais entièrement dématérialisée et se déroule exclusivement sur le site de l''ANTS (Agence Nationale des Titres Sécurisés). Tenter de la faire en préfecture ou par un autre moyen est inutile et vous fera perdre du temps. Maîtriser cette plateforme en ligne, comprendre chaque étape de la demande, savoir téléverser les documents correctement, et suivre l''avancement de son dossier est absolument essentiel. Une erreur dans le processus en ligne peut entraîner des retards considérables, voire le rejet de votre demande, compromettant votre droit de conduire en France.


-   Définir le rôle de l''ANTS dans la gestion des titres sécurisés (permis de conduire).
-   Suivre un guide pas à pas pour déposer votre demande d''échange en ligne.
-   Savoir comment suivre l''avancement de votre dossier et réagir aux demandes de compléments.


L''ANTS est l''organisme public chargé de la production et de la gestion de titres sécurisés comme les cartes d''identité, passeports, cartes grises et permis de conduire. Toutes les démarches relatives au permis de conduire, y compris l''échange de permis étranger, sont centralisées sur sa plateforme numérique.

🔗 [ANTS : Site officiel](https://ants.gouv.fr/) - Le portail de l''ANTS.




#### a) Création d''un compte ANTS
-   Si vous n''avez pas de compte, cliquez sur "Créer un compte".

-   Si vous avez déjà un compte FranceConnect (Impots.gouv.fr, Ameli.fr, etc.), utilisez cette option. C''est souvent plus rapide et plus simple.

🔗 [FranceConnect : Comprendre ce service](https://franceconnect.gouv.fr/partenaires) - Pour savoir si vous pouvez l''utiliser.

### 2. Démarrer la démarche "Échange de permis de conduire étranger"


-   Dans votre espace personnel, cherchez la rubrique "Permis de conduire".
-   Cliquez sur "Demander l''échange de mon permis de conduire étranger".



C''est l''étape la plus importante et la plus délicate.

-   **Traduction assermentée du permis** : Si le permis n''est pas rédigé en français. La traduction doit être faite par un traducteur agréé par la cour d''appel française.
-   **Justificatif d''identité** : Passeport ou carte d''identité (recto-verso), en cours de validité.
-   **Justificatif de domicile** : De moins de 6 mois (facture d''énergie, quittance de loyer, attestation d''hébergement + pièce d''identité de l''hébergeant).
-   **Photos d''identité numériques avec signature (e-photo)** : Photos aux normes ANTS, avec le code numérique.
-   **Justificatif de résidence normale** : Prouvant que vous résidiez légalement dans le pays de délivrance de votre permis avant d''arriver en France.


🔗 [ANTS : Faire une e-photo](https://ants.gouv.fr/les-services-en-ligne/faire-une-e-photo) - Pour les photos d''identité.




-   L''administration peut vous demander des documents supplémentaires ou des précisions.

#### c) Remise de l''attestation de dépôt
-   Une fois votre dossier complet et validé, l''ANTS vous enverra une **attestation de dépôt sécurisée** par e-mail ou sur votre espace. Ce document provisoire vous permet de conduire en attendant la fabrication de votre permis français.

-   À un certain stade de l''instruction, l''ANTS vous demandera d''envoyer par courrier postal votre permis de conduire étranger original. Ne l''envoyez JAMAIS avant d''avoir cette instruction explicite !


-   Vos **justificatifs d''identité et de domicile**.


-   **Préparez tous les documents numériquement à l''avance** : Créez un dossier sur votre ordinateur avec tous les PDF bien nommés.
-   **Commencez la démarche dès votre arrivée** : Pour respecter le délai d''un an.
-   **Vérifiez votre boîte e-mail régulièrement** : Y compris les spams, pour ne pas manquer les communications de l''ANTS.
-   **Gardez toujours une photocopie de votre permis étranger** : Avant de l''envoyer à l''ANTS.


-   **Dépasser le délai d''un an** : La demande sera refusée.
-   **Ne pas prendre en compte la durée de validité de l''attestation de dépôt** : Elle est temporaire.
-   **Utiliser un site autre que l''ANTS** : Des sites frauduleux existent.


-   🔗 [Ministère de l''Intérieur : Les permis étrangers](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Permis-de-conduire-etranger) - Informations officielles.
-   🔗 [Légifrance : Arrêté du 12 janvier 2012](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000025178619/) - Texte de loi sur les conditions d''échange.


La procédure d''échange de votre permis de conduire étranger se fait entièrement en ligne sur la plateforme ANTS. Créez votre compte, déposez votre demande, numérisez et téléversez tous les documents requis avec rigueur et en respectant les normes. Suivez attentivement l''avancement de votre dossier et soyez réactif(ve) aux demandes de compléments. Cette démarche est cruciale pour obtenir votre permis français et garantir votre droit de conduire légalement en France.
',
  3,
  80,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '2fa9f53f-e9ab-42cb-a3b6-49205b8a0c37',
  'c5d6e7f8-a9b0-4012-e1f2-a3b4c5d6e7f8',
  'Conduire avec son permis étranger : Les règles',
  '# Conduire avec son permis étranger : Les règles

## Pourquoi c''est important ?

Lorsque vous arrivez en France avec un permis de conduire étranger, vous avez le droit de conduire pendant une période limitée. Cependant, cette tolérance est soumise à des règles strictes qui, si elles ne sont pas respectées, peuvent vous placer en situation d''infraction (conduite sans permis valide). Comprendre précisément les conditions sous lesquelles vous pouvez utiliser votre permis étranger en France, notamment la durée autorisée et les documents à avoir sur vous, est absolument crucial. Une méconnaissance de ces règles peut entraîner des amendes, l''immobilisation du véhicule, des problèmes avec votre assurance, et même des poursuites judiciaires.




La France autorise les nouveaux résidents à utiliser leur permis de conduire étranger pendant une période transitoire. Cette période est destinée à vous laisser le temps d''effectuer les démarches d''échange si votre pays a un accord de réciprocité.




C''est le point le plus important.

-   **Un an maximum** : Vous pouvez conduire en France avec votre permis de conduire étranger pendant **un an à partir de la date d''acquisition de votre résidence normale** en France.
    -   Pour rappel, la date d''acquisition de la résidence normale est généralement la date de validation de votre VLS-TS ou de début de validité de votre premier titre de séjour.
-   **Après un an** : Au-delà de ce délai d''un an, si vous n''avez pas déposé de demande d''échange (et si votre pays a un accord), ou si vous n''avez pas obtenu un permis français, votre permis étranger n''est plus valable pour conduire en France.



-   **Votre permis de conduire étranger original et valide** : Il ne doit pas être suspendu, annulé, ou faire l''objet d''une restriction dans votre pays d''origine.
    -   Si votre permis n''est pas rédigé en français, vous devez impérativement l''accompagner d''une traduction officielle (faite par un traducteur agréé) ou d''un permis de conduire international.
-   **Votre passeport ou pièce d''identité**.
-   **Attestation d''assurance automobile** : Obligatoire pour conduire tout véhicule en France.




-   **Pas de suspension/annulation** : Il ne doit pas avoir été suspendu, retiré ou annulé dans le pays d''origine ou en France.
-   **Âge** : Vous devez avoir l''âge minimum requis en France pour la catégorie de véhicule que vous conduisez.

### 4. Que se passe-t-il après le délai d''un an ?

C''est la transition cruciale.

#### a) Si vous avez déposé une demande d''échange à temps
-   Si vous avez déposé votre demande d''échange sur l''ANTS avant la fin du délai d''un an, et que votre dossier est complet, vous recevrez une **attestation de dépôt sécurisée**. Ce document vous permet de continuer à conduire en France en attendant la délivrance de votre permis français.
-   Vous devez toujours avoir l''attestation de dépôt, votre permis étranger (qui sera conservé par l''ANTS une fois votre dossier avancé) et votre pièce d''identité.

#### b) Si vous n''avez pas déposé à temps (ou si votre pays n''a pas d''accord)
-   Votre permis étranger n''est plus valable en France.


-   Votre **attestation d''assurance**.


-   **Calculez précisément votre date limite d''un an** et marquez-la.


-   **Continuer à conduire avec le permis étranger après le délai d''un an sans avoir déposé de demande d''échange** : C''est une infraction grave.
-   **Ne pas avoir d''assurance automobile** : C''est une obligation légale et l''absence d''assurance est très lourdement sanctionnée.


-   🔗 [Sécurité Routière : Conduire avec un permis étranger en France](https://www.securite-routiere.gouv.fr/permis-de-conduire/permis-etranger-et-international/conduire-avec-un-permis-etranger-en-france) - La source principale d''information.
-   🔗 [Service-Public.fr : Validité d''un permis étranger](https://www.service-public.fr/particuliers/vosdroits/F1460) - Détails sur la durée et les conditions.
-   🔗 [ANTS : L''attestation de dépôt sécurisée](https://ants.gouv.fr/monespace/s-inscrire/echanger-son-permis-de-conduire/suivre-sa-demande-en-ligne) - Pour comprendre ce document provisoire.
-   🔗 [Fédération Française des Sociétés d''Assurance (France Assureurs)](https://www.franceassureurs.fr/) - Pour trouver des informations sur l''assurance auto.
-   🔗 [Ministère de la Justice : Que faire en cas d''infraction routière ?](https://www.justice.gouv.fr/justice-au-quotidien/vie-pratique-et-conflits/infractions-routiere) - Conséquences des infractions.


Vous pouvez conduire en France avec votre permis étranger pendant un an à partir de la date d''acquisition de votre résidence normale. Au-delà, si votre pays a un accord, vous devez avoir déposé une demande d''échange sur l''ANTS. Ayez toujours sur vous votre permis étranger (valide), sa traduction officielle ou un permis international, votre pièce d''identité, votre titre de séjour et votre attestation d''assurance. Le non-respect de ces règles peut avoir de graves conséquences. Anticipez et soyez toujours en règle pour conduire en toute légalité et sécurité en France.
',
  4,
  65,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 12 ---

-- COURS 13 : Légalisation et traduction
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'e1f2a3b4-c5d6-4012-e7f8-a9b0c1d2e3f4',
  'Légalisation et traduction : Vos documents pour l''administration française',
  'legalisation-traduction-documents-administration-francaise',
  'Ce cours est essentiel pour tout étranger s''installant en France et devant présenter des documents officiels de son pays d''origine à l''administration française. Les exigences en matière de traduction et de légalisation (ou apostille) sont strictes et peuvent varier. Nous détaillerons ce qu''est une traduction assermentée, comment trouver un traducteur agréé en France, la différence cruciale entre l''apostille et la légalisation, et les informations sur la durée de validité des traductions. Une bonne compréhension de ces procédures est indispensable pour éviter les rejets de dossier et assurer la validité de vos documents officiels.',
  'Traductions assermentées, apostille, légalisation : assurez la validité de vos documents étrangers en France.',
  'integration_administrative',
  'intermediaire',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1554902409-9b9a6b1e6e9b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcGVyJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D',
  '["Comprendre la définition et la nécessité d''une traduction assermentée", "Savoir trouver un traducteur agréé en France", "Distinguer l''apostille de la légalisation et leur utilité", "Maîtriser les règles de validité des traductions pour l''administration"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  250,
  1900
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 13
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f2a3b4c5-d6e7-4012-f8a9-b0c1d2e3f4a5',
  'e1f2a3b4-c5d6-4012-e7f8-a9b0c1d2e3f4',
  'Traduction assermentée : C''est quoi ?',
  '# Traduction assermentée : C''est quoi ?

## Pourquoi c''est important ?

Lorsque vous présentez un document officiel (acte de naissance, diplôme, permis de conduire, casier judiciaire) rédigé dans une langue étrangère à l''administration française, une simple traduction par vos soins ou par un ami ne suffit pas. La plupart du temps, une **traduction assermentée** est exigée. Ce type de traduction a une valeur légale et garantit la conformité et la fidélité du document traduit à l''original. Sans cette traduction spécifique, votre document sera considéré comme non valide, et votre dossier (titre de séjour, mariage, etc.) sera rejeté. Comprendre ce qu''est une traduction assermentée et pourquoi elle est indispensable est la première étape pour préparer vos documents correctement.


-   Définir précisément ce qu''est une traduction assermentée et sa valeur juridique.
-   Identifier les caractéristiques d''une traduction assermentée valide.


Une traduction assermentée est une traduction réalisée par un traducteur "expert près la Cour d''appel" ou "traducteur juré". Ce traducteur est habilité par les autorités judiciaires françaises à certifier la conformité de sa traduction au document original. Sa signature et son sceau apposés sur la traduction lui confèrent un caractère officiel.




C''est un professionnel reconnu par la justice.

-   **Traducteur Expert Judiciaire** : Le traducteur assermenté est un expert inscrit sur la liste des experts judiciaires d''une Cour d''appel française (ou de la Cour de cassation). Il a prêté serment d''exercer sa mission avec probité et impartialité.
-   **Garantie de conformité** : Sa mission est de s''assurer que la traduction est une retranscription fidèle et exacte du document original. Il ne modifie pas le contenu, même si l''original contient des erreurs.
-   **Valeur légale** : Grâce à son sceau, sa signature et sa mention "Traduction certifiée conforme à l''original", la traduction assermentée a une valeur légale et est acceptée par les administrations françaises et étrangères.

### 2. Caractéristiques d''une traduction assermentée valide


-   **Sceau ou cachet du traducteur** : Sur lequel figurent son nom, ses coordonnées, la mention "Traducteur expert près la Cour d''appel de [nom de la cour]" et les langues pour lesquelles il est assermenté.
-   **Mention de certification** : Une formule type "Traduction certifiée conforme à l''original" ou "Vu pour la traduction certifiée conforme" doit être apposée.
-   **Numéro d''enregistrement de la traduction** (parfois).



-   **Documents d''état civil** : Acte de naissance, acte de mariage, acte de divorce, livret de famille.
-   **Diplômes et relevés de notes** : Pour l''inscription dans l''enseignement supérieur, la validation de diplômes, ou certaines demandes de titre de séjour.
-   **Permis de conduire étranger** : Si votre pays a un accord de réciprocité et que votre permis n''est pas rédigé en français.


### 4. Importance de l''original et de la qualité

Le traducteur travaille à partir de l''original ou d''une copie certifiée.

-   **Fournir un original de bonne qualité** : Le traducteur a besoin d''un document lisible et complet pour faire une traduction exacte.
-   **Ne pas traduire une copie illisible** : Une traduction d''un document de mauvaise qualité risque d''être rejetée par l''administration.
-   **Ne pas modifier l''original** : Le traducteur certifie la conformité à l''original tel quel.


-   Une **copie de votre passeport ou pièce d''identité** (parfois demandé par le traducteur).


-   **Anticipez** : La recherche d''un traducteur et le délai de traduction peuvent prendre du temps, surtout en période de forte demande.
-   **Précisez l''objectif de la traduction** : Pour quelle administration la traduction est-elle destinée ? (cela peut parfois avoir une influence sur les mentions).
-   **Conservez l''original et la traduction** : Rangez-les ensemble dans votre classeur administratif.
-   **Vérifiez l''orthographe de votre nom** : Assurez-vous que votre nom et prénom sont écrits de manière identique sur tous vos documents (original, traduction, passeport).


-   **Utiliser une traduction non assermentée** : Elle sera systématiquement refusée par l''administration.
-   **Faire appel à un traducteur non agréé en France** : Seuls les traducteurs inscrits sur les listes des Cours d''appel françaises sont habilités.
-   **Ne pas fournir l''original au traducteur** : Le traducteur doit vérifier l''original pour certifier sa conformité.
-   **Perdre la traduction assermentée** : C''est un document officiel qui peut être difficile à remplacer rapidement.


-   🔗 [Ministère de la Justice : Annuaire des experts de justice](https://www.justice.gouv.fr/annuaire-experts-de-justice) - L''annuaire officiel du Ministère.
-   🔗 [Cour d''appel de votre région](https://www.justice.gouv.fr/organisation-de-la-justice/les-juridictions-de-l-ordre-judiciaire/les-cours-dappel) - Les sites des Cours d''appel publient également les listes de leurs experts.


Une traduction assermentée est une traduction à valeur légale, réalisée par un traducteur expert agréé par une Cour d''appel française. Elle est indispensable pour la plupart de vos documents officiels étrangers présentés à l''administration. Assurez-vous de faire appel à un traducteur certifié, de lui fournir un document original de qualité, et de conserver précieusement la traduction avec tous les éléments de certification. Cette démarche est un pilier de la validité de vos documents en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '82361fa8-1298-498d-b32c-f9be3360e64f',
  'e1f2a3b4-c5d6-4012-e7f8-a9b0c1d2e3f4',
  'Trouver un traducteur agréé près de chez soi',
  '# Trouver un traducteur agréé près de chez soi

## Pourquoi c''est important ?

Pour obtenir une traduction assermentée, il est impératif de faire appel à un traducteur agréé par les autorités judiciaires françaises. Ne pas utiliser un tel professionnel entraînera le rejet de vos documents par l''administration. De plus, trouver un traducteur fiable, compétent et dont les tarifs sont raisonnables, surtout dans votre région, peut s''avérer être un défi si vous ne savez pas où chercher. Ce cours vous guidera pour localiser efficacement un traducteur assermenté près de chez vous, vérifier ses accréditations, et interagir avec lui pour obtenir des traductions conformes et dans les délais.


-   Savoir comment vérifier l''agrément d''un traducteur.


Les traducteurs assermentés sont des auxiliaires de justice, inscrits sur les listes des Cours d''appel. Ils sont les seuls habilités à produire des traductions officielles valides pour l''administration française.





#### a) L''annuaire des traducteurs experts judiciaires
-   C''est la ressource la plus complète et la plus fiable.
    -   **Nom de la Cour d''appel** à laquelle il est rattaché.

#### b) Les listes des Cours d''appel
-   Chaque Cour d''appel (il y en a 36 en France métropolitaine et outre-mer) publie la liste des experts de justice inscrits dans son ressort, y compris les traducteurs.
-   Vous pouvez consulter le site de la Cour d''appel de votre département.


🔗 [Ministère de la Justice : Annuaire des experts de justice](https://www.justice.gouv.fr/annuaire-experts-de-justice) - L''annuaire officiel du Ministère.

### 2. Vérifier l''agrément du traducteur

C''est une étape essentielle pour éviter les mauvaises surprises.

-   **Inscription sur les listes officielles** : Le traducteur doit être inscrit sur la liste des experts de justice d''une Cour d''appel française.
-   **Demandez des références** : N''hésitez pas à demander au traducteur son numéro d''agrément ou de Cour d''appel. Vous pouvez ensuite vérifier son inscription.
-   **Méfiez-vous des tarifs trop bas** : Une traduction assermentée a un coût. Des prix anormalement bas peuvent être le signe d''un service non conforme.



-   **Indiquez l''objectif de la traduction** (ex: "traduction pour demande de titre de séjour", "pour mariage en mairie").
-   **Demandez un devis détaillé** incluant le prix, le délai de livraison et les frais d''envoi (si applicable).

-   Le traducteur aura besoin de l''**original du document** à traduire, ou d''une copie certifiée conforme (s''il ne peut pas voir l''original). C''est important car il doit mentionner sur sa traduction qu''il certifie la conformité à l''original qu''il a eu en main.
-   **Nom et prénom exacts** : Communiquez au traducteur l''orthographe exacte de votre nom et prénom telle qu''elle figure sur votre passeport et vos autres documents français.



-   Votre **passeport** (pour l''orthographe de votre nom).


-   **Anticipez les délais** : Un délai de quelques jours à quelques semaines est courant. Certains traducteurs peuvent proposer un service "express" mais à un coût plus élevé.
-   **Vérifiez le travail** : Une fois la traduction reçue, relisez-la attentivement (si vous maîtrisez la langue) ou faites-la relire par un ami fiable pour détecter d''éventuelles erreurs (bien que rares avec des professionnels assermentés).


-   **Ne pas vérifier l''agrément du traducteur** : C''est votre responsabilité de vous assurer de sa certification.
-   **Ne pas préciser l''orthographe de votre nom** : Une faute d''orthographe peut entraîner le rejet du document par l''administration.


-   🔗 [Les ambassades et consulats de France à l''étranger](https://www.diplomatie.gouv.fr/fr/le-ministere-et-son-reseau/annuaires-et-adresses-du-reseau/ambassades-et-consulats-francais-a-l-etranger/) - Peuvent parfois orienter vers des traducteurs dans votre pays d''origine.


Trouver un traducteur agréé par une Cour d''appel française est une étape cruciale pour l''obtention de traductions assermentées valides. Utilisez les annuaires officiels pour localiser un professionnel près de chez vous, vérifiez son agrément, demandez des devis clairs, et fournissez-lui des documents originaux de qualité. Anticipez les délais et assurez-vous que toutes les informations sont correctement retranscrites. Cette démarche est essentielle pour la reconnaissance de vos documents étrangers par l''administration française.
',
  2,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'e3556f3e-5cdc-44f5-8e67-a37300a23cb7',
  'e1f2a3b4-c5d6-4012-e7f8-a9b0c1d2e3f4',
  'Apostille et Légalisation : La différence',
  '# Apostille et Légalisation : La différence

## Pourquoi c''est important ?

Lorsque vous présentez des documents officiels étrangers en France, en plus d''une traduction assermentée, l''administration peut exiger une formalité supplémentaire : l''**apostille** ou la **légalisation**. Ces procédures certifient l''origine et la conformité d''un document public étranger pour qu''il puisse produire ses effets juridiques en France. Confondre l''une avec l''autre, ou ne pas savoir si votre document en a besoin, peut entraîner un refus pur et simple de votre dossier (demande de titre de séjour, mariage, reconnaissance de diplôme, etc.). Comprendre la différence entre l''apostille et la légalisation, et savoir laquelle s''applique à votre pays, est absolument essentiel pour la validité de vos documents internationaux.


-   Définir ce qu''est l''apostille et dans quel contexte elle s''applique.
-   Maîtriser les étapes pour obtenir l''apostille ou la légalisation.


L''apostille et la légalisation sont des procédures de "sur-certification" ou "super-légalisation" qui attestent de l''authenticité de la signature de l''autorité qui a délivré le document original, de la qualité en laquelle cette autorité a agi, et de l''identité du sceau ou timbre apposé sur le document. Elles sont nécessaires pour qu''un document public étranger soit recevable en France.

🔗 [Service-Public.fr : Légalisation ou apostille d''un document étranger](https://www.service-public.fr/particuliers/vosdroits/F34237) - La page officielle qui clarifie les deux concepts.


### 1. L''Apostille : Une procédure simplifiée

L''apostille est la solution pour les pays signataires de la Convention de La Haye.

#### a) Qu''est-ce que l''apostille ?
-   **Définition** : C''est un cachet (ou une vignette) délivré par l''autorité compétente de l''État d''origine du document (généralement le ministère des Affaires étrangères, le ministère de la Justice, ou une autorité locale désignée).
-   **Objectif** : L''apostille certifie l''origine du document public (l''authenticité de la signature et la qualité du signataire) pour qu''il soit reconnu dans tous les pays signataires de la Convention de La Haye.
-   **Pays concernés** : L''apostille s''applique uniquement aux documents émis par un pays signataire de la **Convention de La Haye du 5 octobre 1961** (Convention Apostille).

#### b) Procédure pour obtenir l''apostille
-   **Lieu** : L''apostille doit être demandée **dans le pays qui a délivré le document original**. Par exemple, si votre acte de naissance vient du Maroc (pays signataire), vous devez faire apostiller cet acte au Maroc.
-   **Autorité compétente** : Vous devrez vous adresser à l''autorité désignée dans votre pays (souvent le ministère des Affaires étrangères ou de la Justice).




#### a) Qu''est-ce que la légalisation ?
-   **Définition** : C''est une formalité par laquelle la signature, la qualité du signataire et, le cas échéant, l''identité du sceau ou timbre apposé sur un acte sont attestées par l''autorité compétente d''un État.
    1.  La certification par le ministère des Affaires étrangères du pays d''origine du document.
    2.  Puis, une sur-légalisation par le consulat ou l''ambassade de France dans ce même pays.
-   **Pays concernés** : La légalisation s''applique aux documents émis par un pays qui **n''est pas signataire de la Convention de La Haye**.

    1.  Adressez-vous au ministère des Affaires étrangères du pays d''origine pour une première légalisation.
    2.  Puis, contactez le consulat ou l''ambassade de France dans ce pays pour la sur-légalisation.


### 3. Comment savoir si mon document a besoin d''une apostille ou d''une légalisation ?


#### a) Vérifiez le pays d''origine du document
-   **Si le document vient d''un pays signataire de la Convention de La Haye** : Il a besoin d''une **apostille**.
-   **Si le document vient d''un pays non signataire de la Convention de La Haye** : Il a besoin d''une **légalisation**.
-   **Exceptions** : Il existe des conventions bilatérales spécifiques qui dispensent d''apostille ou de légalisation entre certains pays (ex: la Convention de Rome de 1987 pour certains pays européens). Vérifiez toujours la liste des dispenses.

-   **Ordre** : Il est souvent recommandé de faire l''apostille/légalisation **avant** la traduction assermentée, car la traduction porte sur le document original **avec l''apostille ou les timbres de légalisation**. Cependant, certains traducteurs peuvent traduire le document puis vous demander d''apostiller/légaliser la traduction (c''est plus rare). Vérifiez auprès du traducteur et de l''administration destinataire. L''idéal est que la traduction soit faite après l''apostille/légalisation, pour que le traducteur puisse inclure les mentions officielles dans sa certification.




-   **Anticipez énormément** : Ces démarches sont souvent longues et complexes, et peuvent nécessiter de vous rendre dans votre pays d''origine ou de passer par des intermédiaires.
-   **Contactez les services consulaires français** : L''ambassade ou le consulat de France dans votre pays d''origine peut vous guider.


-   **Confondre apostille et légalisation** : Ce n''est pas la même procédure et ne s''applique pas aux mêmes pays.
-   **Ne pas faire la démarche** : Le document sera refusé par l''administration française.
-   **Essayer de faire l''apostille/légalisation en France** : Cela doit se faire dans le pays d''origine du document.


-   🔗 [Service-Public.fr : Légalisation ou apostille d''un document étranger](https://www.service-public.fr/particuliers/vosdroits/F34237) - Le guide de référence.
-   🔗 [Conférence de La Haye (HCCH) : États parties à la Convention Apostille](https://www.hcch.net/fr/instruments/conventions/fulltext/?cid=41) - La liste officielle des pays concernés par l''apostille.
-   🔗 [Les ambassades et consulats de France à l''étranger](https://www.diplomatie.gouv.fr/fr/le-ministere-et-son-reseau/annuaires-et-adresses-du-reseau/ambassades-et-consulats-francais-a-l-etranger/) - Pour les démarches dans votre pays.


L''apostille et la légalisation sont des certifications d''authenticité de documents publics étrangers. L''apostille est une procédure simplifiée pour les pays signataires de la Convention de La Haye (un simple cachet), tandis que la légalisation est une procédure plus lourde pour les pays non signataires (double certification par les ministères et le consulat de France). Vous devez faire cette démarche dans le pays qui a délivré le document original, et il est souvent recommandé de l''effectuer avant la traduction assermentée. Anticipez ces démarches qui sont cruciales pour la validité de vos documents en France.
',
  3,
  70,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '3ecd4e4b-6cb0-4b3d-b051-02aa83e5c5be',
  'e1f2a3b4-c5d6-4012-e7f8-a9b0c1d2e3f4',
  'Durée de validité des traductions',
  '# Durée de validité des traductions

## Pourquoi c''est important ?

Une fois que vous avez obtenu une traduction assermentée, ou fait apostiller/légaliser vos documents, il est naturel de penser que ces documents sont valables pour toujours. Cependant, l''administration française est très vigilante quant à la "récence" et la "validité" des documents qu''on lui présente. Il n''y a pas de règle unique et universelle concernant la durée de validité d''une traduction assermentée, mais dans la pratique, certains documents originaux ayant une durée de vie limitée (comme les extraits de casier judiciaire) rendent la traduction obsolète avec le temps. Comprendre ces nuances est essentiel pour éviter de devoir refaire des traductions coûteuses ou de voir votre dossier rejeté parce que vos pièces sont jugées trop anciennes.


-   Comprendre le principe général de la validité "indéfinie" des traductions assermentées.
-   Identifier les documents dont la validité est limitée par l''original.
-   Maîtriser les conseils pour optimiser l''utilisation et la conservation de vos traductions.


En principe, une traduction assermentée n''a pas de date de péremption en tant que telle. Le traducteur certifie la conformité de sa traduction à l''original à la date de la traduction. Cependant, c''est le document original qui a pu être traduit qui peut, lui, avoir une durée de validité limitée.



### 1. Le principe : Une traduction assermentée n''a pas de date d''expiration en elle-même


-   **Conformité à l''original** : Le traducteur assermenté certifie que sa traduction est conforme à l''original au moment où il l''a réalisée. Cette certification, en principe, ne se périme pas.

### 2. La validité de la traduction est liée à la validité de l''original

C''est le facteur déterminant.

-   **Extraits de casier judiciaire / certificats de bonne conduite** : Ces documents ont généralement une durée de validité très courte (souvent 3 ou 6 mois). Si l''original est périmé, la traduction (même si elle est impeccable) ne servira à rien car le document qu''elle traduit n''est plus recevable.
-   **Actes de naissance (pour certaines démarches)** : Bien qu''un acte de naissance soit un document permanent, pour certaines démarches très spécifiques (ex: mariage en France, naturalisation), un acte de naissance de moins de 3 mois (ou 6 mois pour certains pays) peut être exigé. Dans ce cas, il faudra un nouvel original et donc une nouvelle traduction.

-   **Diplômes, livrets de famille, permis de conduire (si accordé à vie)** : Ces documents n''ont pas de date de péremption intrinsèque. Leur traduction assermentée conserve donc sa validité tant que le document original est valable.




#### b) Exigence de "récence" par l''administration
-   Même pour des documents comme l''acte de naissance, certaines administrations peuvent demander un document "récent" (moins de 3 ou 6 mois). Cela ne remet pas en cause la traduction assermentée précédente, mais exige un nouvel original et donc une nouvelle traduction.
-   **Vérifiez toujours la liste des pièces requises** pour la démarche que vous entreprenez : c''est elle qui précisera les exigences de récence.




-   **Vérifiez la récence de l''original** : Avant de déposer un dossier, assurez-vous que tous les documents originaux (et donc leurs traductions) sont dans la période de validité exigée par l''administration.
-   **Communiquez avec le traducteur** : Si vous avez besoin d''une traduction "urgente" ou pour une démarche avec des délais très courts pour l''original, informez-en le traducteur.


-   La **liste des pièces requises** par l''administration pour votre démarche.


-   **Ne faites pas traduire des documents trop tôt** si vous savez qu''ils ont une durée de validité limitée et que vous ne les utiliserez pas immédiatement (ex: casier judiciaire).
-   **En cas de doute sur une exigence de récence** : Contactez directement l''administration qui demande le document.


-   **Refaire systématiquement toutes les traductions** : Ce n''est pas toujours nécessaire et c''est coûteux.
-   **Ne pas tenir compte des délais de récence** : Pour les documents d''état civil demandés par la mairie (mariage) ou la préfecture (naturalisation).
-   **Penser que l''apostille/légalisation est aussi "illimitée"** : C''est la certification de l''original, et si l''original a des limites, la certification en a de facto.


-   🔗 [Annuaire des traducteurs assermentés](https://www.annuaire-traducteur-assermente.fr/) - Pour contacter votre traducteur si vous avez besoin d''un duplicata ou de conseils.
-   🔗 [CNIL : Durée de conservation des documents](https://www.cnil.fr/fr/quest-ce-que-le-droit-a-leffacement-ou-droit-a-loubli) - Bien que sur l''effacement, cela rappelle l''importance de la durée de vie des données.


Une traduction assermentée n''a pas de date de péremption en soi, mais sa validité est directement liée à celle du document original qu''elle traduit. Pour les documents à durée de vie limitée (casier judiciaire, certains actes de naissance), la traduction devient obsolète si l''original est périmé. Vérifiez toujours les exigences de récence de l''administration pour chaque démarche. Conservez précieusement vos traductions avec leurs originaux, et anticipez le renouvellement des documents à durée limitée pour éviter les blocages administratifs et les frais inutiles.
',
  4,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 13 ---

-- COURS 14 : La "Laïcité" et droits civiques
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f8e2d276-b66b-4554-b5d6-a6e3ea08a501',
  'La "Laïcité" et les droits civiques en France : Guide d''intégration',
  'laicite-droits-civiques-france-guide-integration',
  'Ce cours est conçu pour aider les étudiants internationaux à comprendre les concepts fondamentaux de la "Laïcité" et des droits civiques en France, des piliers essentiels de la République française. Nous expliquerons ce qu''est la Laïcité et comment elle s''applique dans l''espace public, notamment dans les institutions scolaires et administratives. Nous aborderons également les droits à la manifestation et à la grève, ainsi que la liberté d''expression et ses limites légales. Maîtriser ces principes est crucial pour une intégration réussie, le respect des lois et des valeurs de la société française, et pour naviguer en toute connaissance de cause dans votre vie quotidienne et citoyenne.',
  'Laïcité, droits de manifester, liberté d''expression : comprenez les piliers de la République française pour une intégration réussie.',
  'culture_codes_sociaux',
  'intermediaire',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le principe de la Laïcité et ses applications", "Identifier les droits fondamentaux de manifestation et de grève", "Maîtriser les limites légales de la liberté d''expression", "Favoriser une intégration respectueuse des valeurs républicaines françaises"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  180,
  1000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 14
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'c5d6e7f8-a9b0-4012-e3f4-a5b6c7d8e9f0',
  'ece6527d-c212-45cf-b808-db155003bf18',
  'La Laïcité expliquée aux étrangers',
  '# La Laïcité expliquée aux étrangers

## Pourquoi c''est important ?

La Laïcité est un principe fondamental de la République française, inscrit dans sa Constitution. Souvent mal comprise, ou interprétée différemment selon les cultures, la Laïcité est pourtant au cœur du vivre-ensemble en France. En tant qu''étudiant international, comprendre ce principe est absolument crucial pour naviguer dans la société française, respecter ses lois, ses institutions (notamment scolaires et administratives) et interagir sereinement avec les autres. Une méconnaissance de la Laïcité peut entraîner des malentendus, des situations délicates, voire des conflits avec les règles et les valeurs républicaines. C''est une clé essentielle de votre intégration réussie.


-   Comprendre l''application de la Laïcité dans différents espaces (public, scolaire, privé).
-   Identifier les droits et les devoirs qu''elle implique pour chacun.


La Laïcité n''est pas l''athéisme. Elle est un principe qui assure la neutralité de l''État vis-à-vis des religions et la liberté de conscience de chacun. Elle garantit à la fois la liberté de croire ou de ne pas croire, et l''égalité de tous devant la loi, sans distinction de religion.




C''est un pilier de la République.

#### a) Séparation des Églises et de l''État
-   La loi de 1905 sur la séparation des Églises et de l''État est le texte fondateur de la Laïcité en France.
-   L''État ne reconnaît, ne salarie, ni ne subventionne aucun culte. Il est neutre face aux convictions religieuses ou philosophiques.

-   Personne ne peut être contraint(e) de manifester ses convictions ou d''en être empêché(e).

-   La Laïcité assure l''égalité de tous les citoyens, quelles que soient leurs croyances ou convictions, devant la loi. Il n''y a pas de discrimination fondée sur la religion.

🔗 [Légifrance : Loi du 9 décembre 1905 concernant la séparation des Églises et de l''État](https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006070624/) - Le texte fondateur.


La Laïcité n''a pas la même traduction partout.

#### a) Dans l''espace public
-   **Liberté d''expression des convictions** : Dans l''espace public (rue, parc), la liberté d''exprimer ses convictions religieuses est large, tant qu''elle ne trouble pas l''ordre public.
-   **Limite du prosélytisme agressif** : Le prosélytisme (tenter de convertir autrui) est toléré s''il ne prend pas une forme agressive ou coercitive.

#### b) Dans les services publics et institutions de l''État
-   **Neutralité des agents du service public** : Les fonctionnaires et agents des services publics (enseignants, policiers, agents de mairie, médecins hospitaliers) doivent faire preuve de neutralité religieuse dans l''exercice de leurs fonctions. Ils ne doivent pas porter de signes religieux ostentatoires.
    -   **À l''école publique** : Les élèves des écoles, collèges et lycées publics ne peuvent pas porter de signes ou tenues par lesquels ils manifestent ostensiblement une appartenance religieuse (loi de 2004).
    -   **Dans l''enseignement supérieur** : Cette loi ne s''applique pas aux universités. Les étudiants y sont libres de manifester leurs convictions (y compris vestimentaires), tant que cela ne trouble pas l''ordre public ou le bon fonctionnement de l''établissement.
    -   **Dans les autres services publics** : Les usagers peuvent généralement exprimer leurs convictions, tant qu''ils respectent les règles de service (ex: pas de voile intégral pour des raisons d''identification).

#### c) Dans l''espace privé
-   **Liberté totale (sauf exception)** : Dans l''espace privé (chez soi, dans une entreprise privée, dans une association), la Laïcité ne s''applique pas de la même manière. La liberté d''expression religieuse est beaucoup plus large.
-   **Limite** : Un employeur privé peut instaurer des règles spécifiques pour des raisons de sécurité, d''hygiène ou de neutralité (si contact avec la clientèle ou si clause spécifique au contrat).

🔗 [Ministère de l''Éducation Nationale : La laïcité à l''école](https://www.education.gouv.fr/la-laicite-a-l-ecole-10257) - Explications pour le milieu scolaire.



-   **Votre devoir** : De respecter la neutralité de l''État et de ses agents, de ne pas imposer vos convictions à autrui, et de respecter la liberté de conscience des autres.


-   Aucun document spécifique, mais une ouverture d''esprit est essentielle.


-   **Informez-vous** : Les institutions françaises (universités, préfectures) proposent souvent des modules d''information sur la Laïcité.
-   **Comprenez la distinction public/privé** : C''est une nuance importante pour l''application de la Laïcité.


-   **Penser que la Laïcité interdit toute expression religieuse** : Elle l''encadre dans certains lieux, mais ne l''interdit pas dans l''espace public ou privé.
-   **Ne pas respecter les règles de neutralité dans les services publics** : Surtout à l''école publique, cela peut entraîner des sanctions.


-   🔗 [Ministère de l''Intérieur : La laïcité](https://www.interieur.gouv.fr/Le-ministere/La-laicite) - Informations du ministère.
-   🔗 [Légifrance : Principes de la République](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041280362/) - Voir le Code de l''Éducation.
-   🔗 [Maison des Citoyens du Monde](https://www.reseau-interculturel.fr/annuaire/detail/297241/maison-des-citoyens-du-monde) - Associations locales peuvent proposer des ateliers d''intégration et d''explication de la Laïcité.


La Laïcité est un principe fondamental français qui garantit la neutralité de l''État, la liberté de conscience et l''égalité de tous. Elle s''applique différemment selon les espaces : elle est stricte dans les services publics (notamment à l''école) et plus souple dans l''espace privé. Comprendre ces nuances est essentiel pour une intégration réussie, le respect des lois françaises et une cohabitation harmonieuse. Respectez les règles, informez-vous et privilégiez le dialogue.
',
  1,
  70,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'bc7f24bd-51b3-4b7b-a450-33fb0d027f06',
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Droits à la manifestation et à la grève',
  '# Droits à la manifestation et à la grève

## Pourquoi c''est important ?

En France, la manifestation et la grève sont des droits fondamentaux reconnus par la Constitution, ancrés dans l''histoire sociale et politique du pays. En tant qu''étranger, comprendre l''existence et l''étendue de ces droits est crucial, non seulement pour votre propre information, mais aussi pour décrypter la vie sociale française. Vous pourriez être confronté(e) à des mouvements sociaux (grèves des transports, manifestations étudiantes ou syndicales) qui impactent votre quotidien. Savoir que ces actions sont légales, mais encadrées, vous permettra de mieux vous situer, d''exercer vos propres droits (si vous en avez), et d''éviter les situations délicates. C''est un aspect essentiel de la culture civique française.




La France est un pays où la liberté d''expression et d''action collective est forte. La manifestation est une tradition républicaine, et la grève est un droit reconnu aux travailleurs. Ces droits sont des outils de contestation et de revendication qui peuvent jouer un rôle important dans la vie sociale et politique.





-   Le droit de manifester est une composante de la liberté d''expression, un principe à valeur constitutionnelle.
-   Il permet aux citoyens d''exprimer collectivement leurs opinions, revendications ou mécontentements sur la voie publique.

#### b) L''encadrement légal (déclaration préalable)
-   **Déclaration préalable obligatoire** : Toute manifestation sur la voie publique doit faire l''objet d''une déclaration préalable en mairie (ou préfecture) au moins 3 jours francs avant la date prévue. Cette déclaration précise l''itinéraire, l''heure et l''objet de la manifestation.
-   **Rôle de l''autorité** : L''autorité administrative peut interdire une manifestation si elle estime qu''il y a un risque sérieux de trouble à l''ordre public. Elle peut aussi imposer des modifications d''itinéraire ou d''horaire.

-   **Respect de l''ordre public** : Les manifestants doivent respecter l''ordre public, les biens publics et privés, et ne pas commettre d''actes de violence ou de dégradation.
-   **Désobéissance civile** : La "désobéissance civile" (actions non violentes mais illégales pour protester) n''est pas un droit.

🔗 [Légifrance : Loi n° 2019-290 du 10 avril 2019 visant à renforcer et garantir le maintien de l''ordre public lors des manifestations](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000038379412) - Texte de loi sur les manifestations.




-   **Secteur public** : Dans certains services publics (transports, éducation, hôpitaux), un préavis de grève de 5 jours francs est obligatoire. Un "service minimum" peut être imposé.



### 3. Votre situation en tant qu''étudiant international


-   En tant qu''étranger en situation régulière, vous avez le droit de manifester en France, sous les mêmes conditions que les citoyens français (déclaration préalable, respect de l''ordre public).





-   **Restez à l''écart des débordements** : Si une manifestation devient violente, éloignez-vous pour votre sécurité.
-   **Soyez informé(e) des perturbations** : Si une grève est annoncée (transports, universités), vérifiez l''impact sur vos cours ou vos déplacements.


-   **Ne pas respecter les consignes des forces de l''ordre** : En cas de dispersion d''une manifestation.
-   **Cacher son visage** : C''est illégal dans une manifestation.


-   🔗 [Ministère de l''Intérieur : Maintien de l''ordre public](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Maintien-de-l-ordre-public) - Informations sur le rôle des forces de l''ordre.


Le droit de manifester et de faire grève sont des droits fondamentaux en France, mais ils sont encadrés par la loi. En tant qu''étranger, vous avez le droit de manifester (si déclarée et pacifique) et de faire grève (si salarié), mais il est crucial de connaître et de respecter les règles pour éviter les problèmes avec la justice et l''administration. Renseignez-vous toujours, restez à l''écart des violences, et soyez informé(e) des mouvements sociaux qui peuvent impacter votre vie quotidienne.
',
  2,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'ff6cee77-7a13-450d-a69a-8fa1bc5bf091',
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Liberté d''expression et ses limites légales',
  '# Liberté d''expression et ses limites légales

## Pourquoi c''est important ?

La liberté d''expression est un pilier fondamental des démocraties, et la France y attache une importance particulière, comme l''atteste sa devise "Liberté, Égalité, Fraternité". En tant qu''étranger s''installant en France, il est essentiel de comprendre cette liberté, qui vous concerne aussi, mais surtout ses limites légales. Ce qui est permis ou non en matière d''expression peut varier considérablement d''un pays à l''autre. Une parole ou un écrit jugé inoffensif dans votre culture d''origine pourrait être considéré comme une infraction grave en France. Maîtriser ces limites est crucial pour vous exprimer en toute sécurité juridique, éviter des poursuites, et respecter les valeurs de la République française.


-   Définir la liberté d''expression en France et sa reconnaissance constitutionnelle.
-   Identifier les principales limites légales à la liberté d''expression.
-   Comprendre les infractions liées à l''expression (diffamation, injure, incitation à la haine, apologie du terrorisme).
-   Maîtriser les conseils pour s''exprimer librement mais de manière responsable.


La Déclaration des Droits de l''Homme et du Citoyen de 1789, qui fait partie du bloc de constitutionnalité français, stipule que "La libre communication des pensées et des opinions est un des droits les plus précieux de l''Homme ; tout Citoyen peut donc parler, écrire, imprimer librement, sauf à répondre de l''abus de cette liberté dans les cas déterminés par la Loi." Cela signifie que la liberté est la règle, mais l''abus est l''exception définie par la loi.

🔗 [Vie-publique.fr : La liberté d''expression](https://www.vie-publique.fr/fiches/271243-la-liberte-dexpression-en-france) - Fiche détaillée sur la liberté d''expression.


### 1. La liberté d''expression : Un droit fondamental

C''est un pilier de la démocratie.

-   La liberté d''expression est garantie par l''article 11 de la Déclaration des Droits de l''Homme et du Citoyen de 1789 et par la jurisprudence du Conseil constitutionnel.
-   Elle couvre tous les modes d''expression : paroles, écrits, images, dessins, caricatures, vidéos, etc., sur tous les supports (presse, réseaux sociaux, art, conversation privée, etc.).

-   Chacun est libre de s''exprimer sur tous les sujets : politique, religion, société, etc.

🔗 [Légifrance : Déclaration des Droits de l''Homme et du Citoyen de 1789](https://www.legifrance.gouv.fr/eli/declaration/1789/8/26/jo/texte) - Article 11.

### 2. Les limites légales à la liberté d''expression

La liberté n''est pas absolue, elle est encadrée par la loi.

-   **Diffamation** : Imputation d''un fait précis qui porte atteinte à l''honneur ou à la considération d''une personne. La preuve de la vérité du fait peut être admise.
-   **Injure** : Expression outrageante, termes de mépris ou invective qui ne renferme l''imputation d''aucun fait précis.
-   **Sanctions** : La diffamation et l''injure sont punies par la loi (amendes, dommages et intérêts).

-   **Incitation à la haine raciale, religieuse, sexiste, homophobe** : Toute provocation directe à la discrimination, à la haine ou à la violence à l''égard d''une personne ou d''un groupe de personnes en raison de leur origine, de leur religion, de leur sexe, de leur orientation sexuelle, de leur handicap, etc., est un délit.
-   **Négationnisme** : La contestation de l''existence de crimes contre l''humanité (ex: Shoah) est un délit.

-   Faire l''apologie d''actes de terrorisme (c''est-à-dire les justifier, les glorifier, les défendre) est un délit puni par la loi.

#### d) Atteinte à la vie privée et droit à l''image
-   La liberté d''expression ne permet pas de porter atteinte à la vie privée des personnes (divulgation d''informations intimes) ou à leur droit à l''image sans leur autorisation.

-   Dans des cas extrêmes, l''expression peut être limitée si elle menace directement l''ordre public ou la sécurité nationale.

🔗 [Légifrance : Loi du 29 juillet 1881 sur la liberté de la presse](https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006070643/) - Le texte fondateur de la liberté de la presse, qui définit aussi les délits d''expression.
🔗 [Ministère de la Justice : Ce que dit la loi sur la diffamation et l''injure](https://www.justice.gouv.fr/justice-au-quotidien/vie-pratique-et-conflits/atteinte-l-honneur-et-reputation/diffamation-et-injure) - Explications claires.

### 3. Votre situation en tant qu''étranger

Les mêmes règles s''appliquent à vous.

-   **Même protection, mêmes limites** : En France, la liberté d''expression s''applique à toute personne, y compris les étrangers. Mais les limites légales s''appliquent aussi à vous.
-   **Conséquences sur le séjour** : Commettre une infraction liée à la liberté d''expression (notamment l''incitation à la haine ou l''apologie du terrorisme) peut avoir des conséquences très graves sur votre titre de séjour, pouvant aller jusqu''au retrait de votre titre et à l''expulsion.
-   **Réseaux sociaux** : Soyez particulièrement vigilant(e) avec ce que vous publiez ou partagez sur les réseaux sociaux. La justice française s''applique aux contenus diffusés depuis la France ou qui y sont accessibles.




-   **Privilégiez le dialogue et l''argumentation** : En cas de désaccord, exprimez votre opinion de manière respectueuse et constructive.
-   **Utilisez les services de l''université** : De nombreuses universités proposent des modules sur la Laïcité et la liberté d''expression.


-   **Sous-estimer les limites de la liberté d''expression** : Elles sont réelles et punies par la loi.
-   **Penser que l''anonymat sur internet protège** : La justice peut retrouver l''auteur de propos illégaux.
-   **Relayer des contenus haineux ou terroristes** : Même un simple "partage" peut être considéré comme une infraction.
-   **Ignorer la spécificité française** : La France a une interprétation de la liberté d''expression distincte de certains autres pays (ex: les lois sur l''incitation à la haine sont très strictes).


-   🔗 [Vie-publique.fr : Liberté d''expression](https://www.vie-publique.fr/fiches/271243-la-liberte-dexpression-en-france) - La référence gouvernementale.
-   🔗 [Conseil constitutionnel : La liberté d''expression](https://www.conseil-constitutionnel.fr/les-grands-principes/la-liberte-d-expression) - L''interprétation juridique.
-   🔗 [Légifrance : Loi du 29 juillet 1881 sur la liberté de la presse](https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006070643/) - Le texte de loi qui encadre la liberté d''expression.
-   🔗 [DILCRAH (Délégation Interministérielle à la Lutte Contre le Racisme, l''Antisémitisme et la Haine anti-LGBT)](https://www.dilcrah.gouv.fr/) - Pour comprendre la lutte contre la haine.


La liberté d''expression est un droit fondamental en France, mais elle est strictement encadrée par la loi pour protéger l''honneur des personnes, lutter contre la haine et prévenir le terrorisme. Les infractions comme la diffamation, l''injure, l''incitation à la haine ou l''apologie du terrorisme sont lourdement sanctionnées et peuvent avoir des conséquences graves sur votre séjour. Exprimez-vous librement mais toujours de manière responsable, respectueuse et en connaissance des lois françaises.
',
  3,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 14 ---

-- COURS 15 : Service-Public.fr : Le portail
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Service-Public.fr : Votre portail pour l''administration française',
  'service-public-fr-portail-administration-francaise',
  'Ce cours est un guide essentiel pour les étudiants internationaux souhaitant naviguer efficacement dans le labyrinthe de l''administration française. `Service-Public.fr` est le portail officiel de l''administration, centralisant une quantité inestimable d''informations et de démarches. Nous vous expliquerons comment créer votre compte FranceConnect pour simplifier vos accès, comment utiliser les fiches pratiques pour comprendre vos droits et obligations, comment utiliser les simulateurs de droits pour estimer vos aides (CAF, logement), et comment contacter l''administration via le site. Maîtriser ce portail est une compétence clé pour gérer toutes vos démarches administratives en France avec autonomie et sérénité.',
  'Maîtrisez Service-Public.fr : FranceConnect, fiches pratiques, simulateurs, contact administration. Votre clé pour l''autonomie !',
  'integration_administrative',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''utilité et la richesse du portail Service-Public.fr", "Savoir créer et utiliser son compte FranceConnect", "Maîtriser la recherche et l''utilisation des fiches pratiques", "Utiliser les simulateurs de droits et contacter l''administration efficacement"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  800,
  6000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 15
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'c5d6e7f8-a9b0-4012-e3f4-a5b6c7d8e9f0',
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Créer son compte France Connect',
  '# Créer son compte FranceConnect

## Pourquoi c''est important ?

FranceConnect est un dispositif mis en place par le gouvernement français pour simplifier et sécuriser l''accès à des centaines de services publics en ligne (impôts, assurance maladie, CAF, retraite, etc.). Au lieu d''avoir un identifiant et un mot de passe différents pour chaque administration, FranceConnect vous permet de vous connecter à tous ces services avec un seul et même jeu d''identifiants (ceux de votre compte impots.gouv.fr, ameli.fr, ou autre). Créer et utiliser votre compte FranceConnect est absolument crucial pour gagner un temps précieux, éviter la multiplication des mots de passe, et sécuriser vos démarches administratives en ligne en France. C''est la porte d''entrée vers une administration numérique simplifiée.


-   Définir ce qu''est FranceConnect et son rôle dans l''administration numérique.
-   Identifier les fournisseurs d''identité que vous pouvez utiliser pour créer votre compte.
-   Maîtriser les conseils pour sécuriser votre compte et l''utiliser efficacement.


FranceConnect n''est pas un portail d''administration en soi, mais un "pont" entre vous et les administrations. C''est un système d''identification unique et sécurisé.



### 1. Qu''est-ce que FranceConnect ?

C''est la simplification de l''accès aux services publics.

-   **Un identifiant unique** : FranceConnect est un dispositif d''authentification qui vous permet d''accéder à divers services en ligne avec un seul compte (celui des impôts, de la Sécurité Sociale, etc.).
-   **Partenaires multiples** : Des centaines d''administrations sont connectées à FranceConnect.

### 2. Les fournisseurs d''identité (comptes de référence)

Pour créer votre compte FranceConnect, vous devez déjà avoir un compte chez l''un de ces "fournisseurs d''identité".

-   C''est l''un des plus courants. Si vous avez déjà effectué une première déclaration de revenus papier et que vous avez votre numéro fiscal et votre revenu fiscal de référence (RFR), vous pouvez créer votre espace personnel sur `impots.gouv.fr` et utiliser ces identifiants pour FranceConnect.
-   **Très recommandé pour les étrangers** : Une fois que vous avez un numéro fiscal, c''est la porte d''entrée la plus directe.


#### c) L''Identité Numérique La Poste

-   D''autres fournisseurs existent, mais sont moins pertinents pour la majorité des étudiants internationaux.

🔗 [FranceConnect : Les fournisseurs d''identité](https://franceconnect.gouv.fr/partenaires) - Liste des partenaires.


La démarche est simple si vous avez déjà un compte "source".

-   Cherchez le bouton "Se connecter avec FranceConnect".

#### b) Choisir votre fournisseur d''identité


-   Après avoir validé vos identifiants, FranceConnect vous demandera si vous autorisez la transmission de certaines données (nom, prénom) au service public que vous essayez d''accéder. Acceptez.


-   Vos **identifiants** d''un des fournisseurs d''identité (ex: numéro fiscal et mot de passe `impots.gouv.fr`).


-   **Commencez par obtenir un numéro fiscal** : Pour les étrangers, c''est souvent la première étape pour avoir un fournisseur d''identité valide (via `impots.gouv.fr`).
-   **Ne créez qu''un seul compte FranceConnect** : Inutile d''avoir plusieurs identités numériques.
-   **Sécurisez vos identifiants** : Le mot de passe de votre compte `impots.gouv.fr` ou `ameli.fr` devient d''autant plus important qu''il ouvre l''accès à de nombreux services.


-   **Ne pas avoir de compte chez un fournisseur d''identité** : Vous ne pourrez pas utiliser FranceConnect.
-   **Oublier ses identifiants** : Cela bloquera l''accès à de nombreux services.
-   **Se connecter via des sites frauduleux** : N''utilisez que les sites officiels. Le logo FranceConnect doit être présent et vous rediriger vers les sites officiels des fournisseurs.
-   **Ne pas valider un compte fournisseur** : Si votre compte `ameli.fr` n''est pas activé, il ne fonctionnera pas avec FranceConnect.


-   🔗 [Ameli.fr : Créer mon compte](https://assure.ameli.fr/login/app/demarche/creation-compte-assure) - Si vous êtes affilié à l''Assurance Maladie.
-   🔗 [La Poste : L''Identité Numérique](https://www.lidentitenumerique.laposte.fr/) - Si vous choisissez cette option.


FranceConnect est un dispositif gouvernemental qui simplifie et sécurise l''accès à des centaines de services publics en ligne en utilisant un identifiant unique (celui de `impots.gouv.fr`, `ameli.fr`, etc.). Créer et utiliser votre compte FranceConnect est essentiel pour gagner du temps et gérer vos démarches administratives en toute sécurité. Assurez-vous d''avoir un compte actif chez un fournisseur d''identité et protégez vos identifiants. C''est la clé pour une expérience administrative simplifiée en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'eb33c6f5-b7f8-451f-b7dd-52ac8f7ccc34',
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Naviguer dans les fiches pratiques',
  '# Naviguer dans les fiches pratiques

## Pourquoi c''est important ?

Le site Service-Public.fr est une mine d''or d''informations pour toutes vos démarches administratives en France. Il propose des "fiches pratiques" claires, détaillées et régulièrement mises à jour, qui expliquent pas à pas les droits, les obligations et les procédures pour des centaines de sujets (titre de séjour, logement, santé, emploi, impôts, etc.). Savoir comment naviguer efficacement dans ces fiches, rechercher l''information pertinente et la comprendre, est une compétence absolument cruciale pour tout étranger en France. Cela vous permet d''être autonome, de vérifier les informations, d''éviter les erreurs et de comprendre le fonctionnement de l''administration sans avoir à dépendre de sources tierces parfois moins fiables.


-   Maîtriser les techniques de recherche pour trouver l''information rapidement.


Service-Public.fr est le site officiel de l''administration française. Son contenu est validé par les ministères et les services concernés, ce qui en fait une source d''information extrêmement fiable. C''est le réflexe à avoir pour toute question administrative.

🔗 [Service-Public.fr : Page d''accueil](https://www.service-public.fr/) - Le portail de l''administration française.


### 1. La structure d''une fiche pratique


-   Le titre indique précisément le sujet (ex: "Échanger son permis étranger en France", "Demander un numéro de sécurité sociale").

-   Un court paragraphe présente l''essentiel de la démarche.

    -   "Qui est concerné ?"
    -   "Quelles sont les conditions ?"
    -   "Quels documents fournir ?"
    -   "Quelle est la démarche ?" (souvent avec un lien vers la démarche en ligne, si elle existe).
    -   "Quels sont les délais ?"
    -   "Coût"
    -   "Contact"
    -   "Textes de loi et références"

#### d) Boîte "À savoir" / "Attention"
-   Des encadrés mettent en lumière des points d''attention particuliers ou des rappels importants.




Trouver rapidement l''information dont vous avez besoin.

-   Utilisez des mots-clés précis (ex: "titre séjour étudiant", "APL CAF", "permis conduire échange").

-   Si vous ne savez pas quels mots-clés utiliser, naviguez par thèmes : "Étrangers en France", "Logement", "Santé", "Travail", "Famille", "Justice".

#### c) "Ma situation" ou "Je suis..."
-   Certaines sections du site permettent de filtrer les informations en fonction de votre profil (ex: "Je suis étranger").



-   Faites attention aux "délais légaux", "délais indicatifs", ou "délais de rigueur". Ils sont cruciaux.

-   La liste est souvent exhaustive. C''est votre feuille de route. Notez bien si les originaux et/ou photocopies sont demandés.
-   Faites attention aux mentions "moins de 3 mois", "moins de 6 mois" pour les justificatifs.


-   Les références aux codes (Code de l''entrée et du séjour des étrangers et du droit d''asile - CESEDA, Code du travail, Code civil) vous permettent, si besoin, de consulter la source légale exacte.




-   **Ne vous contentez pas d''une seule source** : Si vous avez un doute, recoupez l''information avec d''autres sources officielles (site de la préfecture, de la CAF, de l''ANTS).
-   **Les fiches sont générales** : Elles donnent la règle générale. Pour des situations très spécifiques, il peut être nécessaire de contacter directement l''administration concernée.


-   **Se fier à des informations obsolètes** : Service-Public.fr est mis à jour, mais des informations très anciennes sur d''autres sites peuvent être fausses.
-   **Ignorer les "Attention" ou "À savoir"** : Ce sont souvent les points clés.
-   **Ne pas tenir compte des délais** : C''est une cause majeure de rejet de dossier.
-   **Se sentir dépassé(e) par la quantité d''informations** : Prenez le temps, lisez attentivement, et notez les points importants.


-   🔗 [Service-Public.fr : Comment utiliser le site ?](https://www.service-public.fr/particuliers/vosdroits/F34300) - Guide d''utilisation du portail.
-   🔗 [Gouvernement.fr : Démarches en ligne](https://www.gouvernement.fr/demarches-en-ligne) - Vue d''ensemble des services dématérialisés.
-   🔗 [Ministère de l''Intérieur : Foire aux questions sur les étrangers en France](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Questions-frequentes-sur-la-plateforme-des-etrangers-en-France) - Peut compléter les fiches de Service-Public.fr.


Naviguer dans les fiches pratiques de Service-Public.fr est une compétence indispensable pour tout étranger en France. Ce portail officiel vous offre des informations fiables, structurées et à jour sur toutes vos démarches administratives. Apprenez à utiliser la barre de recherche et l''arborescence thématique, à interpréter les délais et les documents requis, et à exploiter les liens vers les démarches en ligne. Ce réflexe vous permettra d''être autonome, de gagner du temps et d''assurer la réussite de vos interactions avec l''administration française.
',
  2,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'e3f4a5b6-c7d8-4012-f9a0-b1c2d3e4f5a6',
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Utiliser les simulateurs de droits',
  '# Utiliser les simulateurs de droits

## Pourquoi c''est important ?

Les aides sociales en France (logement, santé, famille, etc.) sont nombreuses et souvent soumises à des conditions de ressources complexes. Il est difficile de savoir à quelles aides vous avez droit et quel pourrait être leur montant. C''est là qu''interviennent les simulateurs de droits, des outils en ligne mis à disposition par les administrations (CAF, Service-Public.fr, Ameli.fr). Utiliser ces simulateurs est absolument crucial pour les étudiants internationaux, car ils vous permettent d''estimer vos droits de manière rapide et confidentielle, d''anticiper votre budget, et de ne pas passer à côté d''aides précieuses auxquelles vous pourriez être éligible. C''est un outil d''autonomie financière indispensable.


-   Comprendre l''utilité et la finalité des simulateurs de droits.
-   Maîtriser les conseils pour interpréter les résultats et ne pas commettre d''erreurs.





### 1. L''utilité des simulateurs de droits

Ce sont des outils d''estimation précieux.




#### a) Simulateur d''aides au logement (CAF)
-   **Objectif** : Estimer le montant des APL (Aides Personnalisées au Logement) ou d''autres aides au logement (ALS, ALF).
-   **Très important pour les étudiants** : L''APL est l''aide la plus courante pour les étudiants.


-   **Objectif** : Un simulateur global qui peut estimer vos droits à plusieurs aides (APL, RSA, Complémentaire Santé Solidaire, prime d''activité, etc.).
-   **Utile pour une vision d''ensemble**.


#### c) Simulateur d''assurance maladie (Ameli.fr ou Service-Public.fr)


#### d) Simulateur d''impôt sur le revenu (Impots.gouv.fr)

🔗 [Impots.gouv.fr : Calculer votre impôt](https://www.impots.gouv.fr/portail/particulier/calculer-votre-impot) - Le simulateur d''impôt.




-   Ne tentez pas de "truquer" les résultats en saisissant de fausses informations. L''objectif est d''avoir une estimation réaliste.


-   Les simulateurs précisent toujours que le résultat est une estimation et n''a pas de valeur contractuelle. Seule la demande officielle fera foi.




-   **Ne vous fiez pas uniquement aux simulateurs** : C''est un bon point de départ, mais déposez toujours une demande officielle pour confirmer vos droits.


-   **Ne pas utiliser les simulateurs** : Vous risquez de passer à côté d''aides importantes.
-   **Ne pas comprendre que c''est une ESTIMATION** : Le résultat n''est pas garanti.
-   **Ne pas tenir compte des dates** : Les revenus pris en compte par la CAF sont souvent ceux de N-2 (deux ans avant l''année de demande).


-   🔗 [CAF : Simuler mes droits](https://www.caf.fr/allocataires/simuler-mes-droits) - Le simulateur d''aides au logement et autres prestations.
-   🔗 [Ameli.fr : Simuler vos droits à la Complémentaire Santé Solidaire](https://www.ameli.fr/simulateur/complementaire-sante-solidaire) - Simulateur pour l''aide à la santé.
-   🔗 [Impots.gouv.fr : Calculer votre impôt](https://www.impots.gouv.fr/portail/particulier/calculer-votre-impot) - Simulateur d''impôt.


Les simulateurs de droits en ligne sont des outils indispensables pour les étudiants internationaux en France. Ils vous permettent d''estimer rapidement et confidentiellement vos droits aux différentes aides sociales (APL, CSS, etc.) et même votre impôt sur le revenu. Utilisez-les avant de vous engager, saisissez des informations précises, et interprétez les résultats comme des estimations. Ces simulateurs sont une clé pour une meilleure gestion de votre budget et pour ne pas passer à côté des aides auxquelles vous avez droit.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '8bb5ea54-53cb-4319-ad93-c943c2bfd55f',
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Contacter l''administration via le site',
  '# Contacter l''administration via le site

## Pourquoi c''est important ?

Interagir avec l''administration française peut parfois être intimidant, surtout si le français n''est pas votre langue maternelle ou si vous ne maîtrisez pas les codes administratifs. Heureusement, la plupart des services publics (CAF, Assurance Maladie, Impôts, Préfecture via l''ANEF) offrent désormais des moyens de contact dématérialisés via leurs sites internet. Savoir comment utiliser ces messageries sécurisées, les formulaires de contact, ou les FAQ est absolument crucial pour poser vos questions, demander des compléments d''information, suivre l''avancement de votre dossier, et résoudre des problèmes sans avoir à vous déplacer ou à passer des heures au téléphone. C''est un moyen efficace, traçable et souvent plus rapide de communiquer avec l''administration.


-   Maîtriser l''utilisation des messageries sécurisées et des formulaires de contact.
-   Maîtriser les conseils pour une communication efficace et tracée avec l''administration.


Les sites internet des administrations françaises sont de plus en plus interactifs. Ils offrent des options de contact direct, permettant d''obtenir des réponses personnalisées et de garder une trace écrite de vos échanges.

🔗 [Service-Public.fr : Contacter l''administration](https://www.service-public.fr/particuliers/vosdroits/R3010) - Guide général pour contacter l''administration.




-   **Principe** : La plupart des administrations (CAF, Ameli.fr, Impots.gouv.fr, ANEF) proposent une "messagerie sécurisée" accessible depuis votre espace personnel en ligne.
-   **Avantages** : C''est le moyen le plus sûr et le plus efficace pour échanger des informations confidentielles ou des documents. Vous avez une trace écrite de toutes vos conversations.
-   **Comment y accéder** : Connectez-vous à votre espace personnel, cherchez une rubrique "Ma messagerie", "Nous contacter" ou "Échanger avec mon gestionnaire".

-   **Avantages** : Facile d''accès.

#### c) FAQ (Foire Aux Questions) et Centres d''aide
-   **Principe** : Avant de contacter directement, consultez toujours la FAQ ou le centre d''aide. De nombreuses questions y trouvent déjà leur réponse.





-   **Objet clair** : Utilisez un objet explicite (ex: "Question sur mon APL - Numéro allocataire X", "Demande de précision - Titre de séjour X").
-   **Numéro de dossier/allocataire/fiscal** : Indiquez toujours tous vos numéros d''identification. C''est la première chose que l''administration cherchera.
-   **Évitez les fautes d''orthographe et de grammaire** : Utilisez un langage clair et correct.




-   Lorsque vous utilisez une messagerie sécurisée, vous pouvez consulter l''historique de vos échanges et les réponses reçues.


-   Les délais de réponse peuvent varier d''une administration à l''autre et selon la période de l''année. Soyez patient(e). Si le délai est trop long, vous pouvez faire une relance polie en citant votre numéro de dossier.


-   Votre **numéro d''identification** (allocataire CAF, numéro fiscal, numéro étranger...).


-   **Privilégiez la messagerie sécurisée** : C''est le moyen le plus fiable et le plus sûr.
-   **Faites des copies d''écran** : En cas de problème technique ou si vous ne recevez pas de confirmation.
-   **N''attendez pas le dernier moment** : Pour poser des questions importantes.


-   **Ne pas inclure vos numéros d''identification** : La réponse sera retardée.
-   **Poser des questions déjà répondues dans la FAQ** : L''administration s''attend à ce que vous ayez déjà consulté les ressources disponibles.
-   **Harceler l''administration** : Soyez patient(e).
-   **Ne pas garder de trace de vos échanges** : C''est crucial en cas de litige.


-   🔗 [Service-Public.fr : Contacter l''administration](https://www.service-public.fr/particuliers/vosdroits/R3010) - Guide général.
-   🔗 [Ameli.fr : Contacter l''Assurance Maladie](https://assure.ameli.fr/login/app/contact) - Pour contacter la Sécurité Sociale.
-   🔗 [Défenseur des Droits : Saisir le Défenseur des Droits](https://www.defenseurdesdroits.fr/fr/saisir-le-defenseur-des-droits) - En cas de difficultés persistantes avec l''administration.


Contacter l''administration française via leurs sites internet est un moyen efficace et sécurisé de gérer vos démarches. Privilégiez les messageries sécurisées accessibles depuis votre espace personnel. Préparez vos questions avec précision, incluez vos numéros d''identification, et joignez les documents pertinents. Gardez une trace de tous vos échanges et soyez patient(e). Maîtriser ces outils de communication est essentiel pour une interaction fluide et autonome avec les services publics en France.
',
  3,
  45,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 15 ---

-- COURS 16 : Décoder les annonces immobilières
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Décoder les annonces immobilières en France : Votre guide logement',
  'decoder-annonces-immobilieres-france',
  'Ce cours est un guide indispensable pour les étudiants internationaux en recherche de logement en France. Les annonces immobilières françaises regorgent d''abréviations et de termes spécifiques qui peuvent être difficiles à comprendre. Nous vous aiderons à décoder le lexique (CC, HC, F1, T2, Bis), à comprendre les différences cruciales entre logement meublé et non-meublé et leur impact sur le bail, à repérer les éventuels frais d''agence cachés, et à analyser l''importance de la performance énergétique (DPE). Maîtriser ce langage est crucial pour identifier rapidement les logements qui correspondent à vos critères, éviter les arnaques et comprendre ce que vous louez réellement.',
  'Décodez les annonces immobilières françaises : lexique (CC, HC, F1), meublé/non-meublé, frais d''agence, DPE. Trouvez votre logement !',
  'logement',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid  


#M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhcGVyJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D',
  '["Décoder les abréviations courantes (CC, HC, F1, T2, Bis)", "Comprendre les différences entre logement meublé et non-meublé", "Repérer et évaluer les frais d''agence immobilière", "Interpréter le Diagnostic de Performance Énergétique (DPE)"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  380,
  2800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 16
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '2d3e4f5a-6b7c-4012-f8a9-b0c1d2e3f4a5',
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Lexique : CC, HC, F1, T2, Bis',
  '# Lexique : CC, HC, F1, T2, Bis

## Pourquoi c''est important ?

Lorsque vous recherchez un logement en France, les annonces immobilières sont la première source d''information. Cependant, elles utilisent un langage très spécifique, rempli d''abréviations et de termes techniques qui peuvent être totalement incompréhensibles pour un étranger. Comprendre ce lexique est absolument crucial pour déchiffrer rapidement les caractéristiques d''un logement, savoir si une annonce correspond à vos critères, et éviter de perdre du temps en visitant des biens inadaptés. Maîtriser ces abréviations vous permettra de cibler efficacement votre recherche et de dialoguer avec les agences ou les propriétaires en toute confiance.









-   **Définition** : Cela signifie que le loyer indiqué inclut déjà les charges locatives (eau, chauffage collectif, entretien des parties communes, taxe d''enlèvement des ordures ménagères, etc.).
-   **Avantage** : Vous avez une idée plus précise du coût total mensuel. C''est souvent le cas pour les résidences étudiantes ou les petits appartements.
-   **Attention** : Les charges sont souvent une estimation et peuvent être régularisées une fois par an (vous pourriez devoir payer un supplément si votre consommation dépasse l''estimation).

-   **Exemple** : "Loyer 500€ HC, charges 50€" signifie un coût total de 550€ par mois.
-   **Attention** : Vous devrez peut-être ouvrir vous-même des contrats pour l''électricité, le gaz, l''eau (si compte individuel) en plus des charges communes.

🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les charges locatives](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/les-charges-locatives/) - Informations détaillées sur les charges.



-   **Idéal pour** : Une personne seule qui souhaite une cuisine distincte de l''espace de vie.

-   **Avantage** : Plus spacieux qu''un simple T1, offre une petite séparation.

-   **Idéal pour** : Un couple ou une personne seule désirant plus d''espace et une chambre distincte.


-   **Idéal pour** : Étudiants ou personnes seules avec un budget limité, souvent en ville. C''est le plus petit type de logement.





-   **Etage Élevé** : Souvent "Étage supérieur" ou "Dernier étage".
-   **Asc.** : Ascenseur (important si l''étage est élevé).




-   **Lisez l''intégralité de l''annonce** : Même les petites lignes.
-   **En cas de doute, demandez** : Si une abréviation n''est pas claire, n''hésitez pas à poser la question à l''agence ou au propriétaire.


-   **Confondre le nombre de pièces** : Un T1 n''est pas un T2.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Lexique du logement](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-vocabulaire-du-logement/) - La référence pour le lexique.
-   🔗 [Ministère de la Transition Écologique : DPE (pour les mentions DPE)](https://www.ecologie.gouv.fr/diagnostic-performance-energetique-dpe) - Comprendre l''importance du DPE.
-   🔗 [La Fnaim (Fédération Nationale de l''Immobilier)](https://www.fnaim.fr/) - Pour comprendre le rôle des agents immobiliers.


Le lexique des annonces immobilières françaises est spécifique. Maîtrisez les abréviations comme CC (charges comprises) et HC (hors charges) pour le prix total. Comprenez les classifications T1/F1, T2/F2 pour le nombre de pièces. Une lecture attentive et une bonne connaissance de ce vocabulaire vous permettront de cibler efficacement votre recherche, d''éviter les mauvaises surprises et de trouver plus rapidement le logement idéal pour votre séjour en France. Gardez cette leçon à portée de main lors de vos recherches !
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '3e4f5a6b-7c8d-4012-e9f0-a1b2c3d4e5f6',
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Meublé vs Non-meublé : Impact sur le bail',
  '# Meublé vs Non-meublé : Impact sur le bail

## Pourquoi c''est important ?

Le choix entre un logement meublé et un logement non-meublé est l''une des décisions les plus importantes à prendre lors de votre recherche d''hébergement en France. Cette distinction a des conséquences majeures sur de nombreux aspects : la durée du bail, le préavis de départ, les assurances, les impôts, et bien sûr, votre budget initial. En tant qu''étudiant international, opter pour un meublé peut sembler plus simple au départ, mais il est crucial de comprendre les implications de chaque type de location pour éviter les mauvaises surprises et choisir l''option la plus adaptée à votre situation et à la durée de votre séjour.


-   Définir ce qu''est légalement un logement meublé en France.
-   Comprendre les caractéristiques d''un logement non-meublé.







-   **Contenu obligatoire** : Un logement est considéré comme meublé s''il contient tous les meubles indispensables à une occupation normale par le locataire, permettant d''y dormir, manger et vivre convenablement au regard des exigences de la vie courante. La loi Alur (2014) a précisé la liste des équipements obligatoires :
    -   Dispositif d''occultation des fenêtres (rideaux, volets).
    -   Matériel d''entretien ménager adapté aux caractéristiques du logement.
-   **Avantage pour les internationaux** : Vous n''avez pas besoin d''acheter de meubles, ce qui est pratique pour une première installation.

🔗 [Légifrance : Décret n°2015-981 du 31 juillet 2015 fixant la liste des éléments de mobilier d''un logement meublé](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000030997126/) - La liste officielle des meubles obligatoires.

-   **Bail étudiant meublé** : Pour les étudiants, il existe un bail spécifique de **9 mois non reconductible**. C''est une excellente option si vous savez que votre séjour est de courte durée (année universitaire).

### 2. Le logement non-meublé : Liberté d''aménagement, mais engagement plus long

Nécessite plus d''investissement initial.

-   **Avantage** : Vous avez la liberté d''aménager le logement à votre goût.

-   **Délai de préavis du locataire** : **Trois mois** (peut être réduit à un mois dans certaines zones dites "tendues" où l''offre de logement est faible, ou pour des motifs légitimes : perte d''emploi, premier emploi, mutation, état de santé, obtention d''un logement social).



Au-delà du bail, d''autres aspects sont différents.

-   **Obligatoire pour les deux types** : L''assurance habitation est obligatoire en France pour le locataire.
-   **Garanties différentes** : Pour un meublé, l''assurance doit souvent couvrir une partie des meubles du propriétaire contre certains risques (incendie, dégât des eaux).

#### b) Taxe d''habitation
-   Depuis 2023, la taxe d''habitation est supprimée pour les résidences principales, qu''elles soient meublées ou non-meublées.

-   **Dépôt de garantie** : Remis au propriétaire à l''entrée dans le logement pour couvrir d''éventuelles dégradations. Sa restitution est encadrée.
-   **Caution (garant)** : Personne physique ou morale qui s''engage à payer le loyer à votre place en cas de défaillance. C''est un élément très important du dossier de location.




-   **Si vous restez moins d''un an** (ex: 9 mois pour une année universitaire) : Un bail étudiant meublé est l''option la plus flexible.
-   **Si vous restez plus d''un an et avez un budget pour les meubles** : Un non-meublé vous donne plus de liberté et peut être un peu moins cher au loyer de base.
-   **Faites un inventaire détaillé** : Pour un meublé, l''état des lieux d''entrée doit être accompagné d''un inventaire précis des meubles et de leur état.


-   **Louer un "non-meublé" qui est en fait vide sans rien** : Et se retrouver à devoir acheter tous les meubles.
-   **Penser qu''un bail meublé de 1 an est un "bail étudiant"** : Le bail étudiant est spécifiquement de 9 mois.
-   **Oublier d''assurer son logement** : C''est une obligation légale et non-respectée peut avoir de lourdes conséquences.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Location meublée ou non meublée](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/la-duree-et-la-forme-du-bail/) - Des fiches très complètes.


Le choix entre un logement meublé et non-meublé a des répercussions majeures sur votre bail (durée, préavis), votre budget et vos obligations. Un meublé est idéal pour des séjours courts (bail étudiant 9 mois) et une installation rapide, tandis qu''un non-meublé offre plus de liberté mais un engagement plus long (bail 3 ans). Lisez attentivement le bail, assurez-vous que les meubles obligatoires sont présents dans un meublé, et comprenez bien les conditions de préavis. Votre choix doit correspondre à la durée et à la nature de votre séjour en France.
',
  2,
  65,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '3644e0c7-4447-4e85-9a9c-b028ff9e9fdc',
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Repérer les frais d''agence cachés',
  '# Repérer les frais d''agence cachés

## Pourquoi c''est important ?

Lorsque vous recherchez un logement en France via une agence immobilière, il est essentiel de comprendre et d''identifier clairement tous les frais qui vous seront demandés. Les "frais d''agence" sont encadrés par la loi, mais il peut exister des pratiques abusives ou des frais "cachés" qui augmentent considérablement le coût initial de votre emménagement. En tant qu''étudiant international, la méconnaissance de ces règles peut vous rendre vulnérable à des demandes illégales ou à des dépenses inattendues. Savoir repérer ces frais, distinguer ce qui est légal de ce qui ne l''est pas, et connaître vos droits est absolument crucial pour protéger votre budget et éviter les mauvaises surprises.


-   Identifier les frais d''agence légaux et ceux qui sont interdits.
-   Repérer les frais "masqués" dans une annonce ou lors de la visite.



🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Les honoraires de l''agence immobilière](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/les-honoraires-de-lagence-immobiliere/) - Fiche très détaillée sur les frais.


### 1. Les frais d''agence légaux pour le locataire (et leur plafonnement)


-   **Frais d''état des lieux d''entrée** : Ce sont les frais liés à la réalisation du document qui décrit l''état du logement au moment de votre emménagement. Ils sont également plafonnés.

    -   **12€/m² de surface habitable** en zone "très tendue" (ex: Paris et 28 communes de la petite couronne).
    -   **10€/m² de surface habitable** en zone "tendue".
    -   **8€/m² de surface habitable** en zone "non tendue".
-   Les frais d''état des lieux d''entrée sont également plafonnés à **3€/m² de surface habitable**, quelle que soit la zone.
    -   Frais d''état des lieux : 20m² * 3€ = 60€ maximum.
    -   Total maximum des frais d''agence pour le locataire = 260€.

🔗 [Décret n° 2014-890 du 1er août 2014 relatif au plafonnement des honoraires imputables aux locataires et aux modalités de transmission de certaines informations par les professionnels de l''immobilier](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000029344420/) - Le texte de loi sur le plafonnement.
🔗 [Service-Public.fr : Frais d''agence immobilière à la charge du locataire](https://www.service-public.fr/particuliers/vosdroits/F2954) - Tableau récapitulatif des plafonds.

### 2. Les frais interdits au locataire (ce qu''on ne peut pas vous demander)


-   **Frais pour les services "gratuits"** : (ex: photocopies de documents, envoi de courriers, conseils).
-   **Frais pour une visite de l''appartement** une fois le bail signé (hors état des lieux de sortie).
-   **"Frais de dossier" abusifs** : Tous les frais non mentionnés dans la liste légale et non plafonnés.


### 3. Repérer les frais "masqués" ou abusifs


#### a) Dans l''annonce immobilière
-   Les frais d''agence doivent être clairement mentionnés dans l''annonce, avec les plafonds applicables.
-   Si le terme "Frais d''agence" est flou, ou si un montant semble trop élevé, posez la question.

#### b) Lors de la signature du bail ou de l''état des lieux

#### c) Les "services additionnels" non obligatoires



-   Si vous suspectez des frais abusifs, demandez à l''agence de vous fournir un détail écrit et la base légale de chaque frais.

-   Si l''agence insiste pour des frais manifestement illégaux, refusez de les payer.

#### c) Contactez l''ANIL ou une association de consommateurs
-   L''ANIL (Agence Nationale pour l''Information sur le Logement) est un organisme public qui peut vous informer gratuitement sur vos droits et vous aider à constituer un dossier de contestation.



-   L''**annonce immobilière**.
-   Les **factures** ou **reçus** de paiement de l''agence.


-   **N''hésitez pas à poser des questions** : Une agence transparente devrait répondre clairement.


-   **Les annonces qui ne mentionnent pas les frais d''agence** : C''est un mauvais signe.
-   **Confondre les frais de dossier de l''agence avec le dépôt de garantie** : Ce sont deux choses distinctes.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Honoraires d''agence](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/les-honoraires-de-lagence-immobiliere/) - La référence principale.
-   🔗 [Service-Public.fr : Frais d''agence immobilière à la charge du locataire](https://www.service-public.fr/particuliers/vosdroits/F2954) - Informations claires et les plafonds.
-   🔗 [ADIL (Agences Départementales d''Information sur le Logement)](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/les-honoraires-de-lagence-immobiliere/#c10444) - Les ADIL sont des antennes locales de l''ANIL.


Les frais d''agence immobilière pour le locataire sont strictement encadrés et plafonnés par la loi en France (loi ALUR). Vous ne devez payer que les frais de visite, de constitution de dossier, de rédaction de bail et d''état des lieux d''entrée, dans la limite des plafonds par m². De nombreux autres frais sont illégaux. Renseignez-vous sur les plafonds de votre zone, lisez attentivement les annonces et les contrats, et n''hésitez pas à contester les frais abusifs en contactant l''ANIL ou les associations de consommateurs. Protégez votre budget et assurez-vous de payer uniquement ce qui est légalement dû.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '06d56fea-ead9-4c38-a5de-2aae8df11a04',
  'ece6527d-c212-45cf-b808-db155003bf18',
  'Analyser la performance énergétique (DPE)',
  '# Analyser la performance énergétique (DPE)

## Pourquoi c''est important ?

Le Diagnostic de Performance Énergétique (DPE) est un document obligatoire en France pour toute vente ou location de logement. Il renseigne sur la consommation d''énergie du logement et son impact en termes d''émissions de gaz à effet de serre. En tant qu''étudiant international en recherche de logement, analyser le DPE est absolument crucial, car il a des conséquences directes sur vos futures factures d''énergie (électricité, gaz, chauffage) et donc sur votre budget mensuel. Ignorer le DPE, c''est risquer de louer un logement "passoire thermique" qui vous coûtera très cher en chauffage l''hiver ou en climatisation l''été. C''est un indicateur essentiel pour faire un choix éclairé et éviter les mauvaises surprises.


-   Définir ce qu''est le DPE et sa finalité.
-   Identifier l''impact du DPE sur vos factures et votre confort.


Le DPE est un outil d''information pour les futurs occupants d''un logement. Il a été réformé en 2021 pour le rendre plus fiable et plus lisible. Son objectif est de sensibiliser à la performance énergétique des bâtiments et d''inciter à la rénovation.



### 1. Qu''est-ce que le DPE ?

C''est un bilan énergétique du logement.

-   **Définition** : Le DPE est un document qui évalue la consommation d''énergie d''un logement (chauffage, eau chaude sanitaire, climatisation) et ses émissions de gaz à effet de serre.
-   **Obligatoire** : Il doit obligatoirement figurer dans l''annonce immobilière (avec au minimum les deux étiquettes énergie et climat) et être annexé au contrat de location.




#### a) L''étiquette "énergie" (consommation)
-   Elle représente la consommation d''énergie primaire du logement en kWh/m²/an (kilowattheure par mètre carré par an).
-   **Classe G** : Extrêmement peu performant ("passoire thermique", très forte consommation, > 420 kWh/m²/an).

#### b) L''étiquette "climat" (émissions de gaz à effet de serre)


🔗 [ADEME (Agence de la transition écologique) : Comprendre le DPE](https://www.ademe.fr/particuliers-eco-citoyens/habitation/diagnostic-performance-energetique-dpe) - Explications claires de l''ADEME.

### 3. L''impact du DPE sur vos factures et votre confort


#### a) Coût des factures d''énergie
-   Un logement classé F ou G (passoire thermique) aura des factures de chauffage et d''électricité beaucoup plus élevées qu''un logement classé A ou B.

-   Les logements mal isolés (classes F, G) sont souvent inconfortables : froid en hiver, difficile à chauffer, courants d''air, parfois humidité, et chaud en été.

-   **Importance pour l''étudiant** : Vous ne pourrez plus louer les pires "passoires thermiques" à l''avenir.

🔗 [ANIL : Les conséquences d''un mauvais DPE](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-diagnostic-de-performance-energetique-dpe/) - Détails sur les interdictions de louer.



-   **Regardez le DPE dans l''annonce** : C''est une information obligatoire.


-   Le **DPE du logement** (disponible dans l''annonce et annexé au bail).


-   **Estimez vos futures factures** : Le DPE contient souvent une estimation des coûts annuels d''énergie.


-   **Ignorer le DPE** : C''est une erreur coûteuse.
-   **Ne pas tenir compte des interdictions de louer futures** : Si vous louez un logement classé G aujourd''hui, vous pourriez avoir des difficultés à le renouveler après 2025 si la consommation est trop élevée, ou à en trouver un autre.
-   **Faire confiance à un DPE "trop beau" sans vérifier le rapport complet** : Les chiffres peuvent parfois être mal interprétés.
-   **Les logements sans DPE** : C''est illégal et suspect.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le DPE](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-diagnostic-de-performance-energetique-dpe/) - Explications pour les locataires.
-   🔗 [Légifrance : Articles L134-1 à L134-5 du Code de la construction et de l''habitation](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074096/LEGISCTA000028741381/) - Le cadre légal du DPE.
-   🔗 [Observatoire National de la Rénovation Énergétique (ONRE)](https://www.ecologie.gouv.fr/observatoire-national-renovation-energetique-onre) - Pour des données sur l''efficacité des logements.


Le Diagnostic de Performance Énergétique (DPE) est un document clé pour tout logement en location. Il évalue sa consommation d''énergie (étiquette A à G) et son impact carbone. Analyser le DPE est crucial pour anticiper vos factures d''énergie et choisir un logement confortable et abordable sur le long terme. Ne négligez pas cet indicateur et demandez toujours le rapport complet. Un mauvais DPE peut signifier des coûts cachés importants et, à terme, des restrictions de location.
',
  4,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

