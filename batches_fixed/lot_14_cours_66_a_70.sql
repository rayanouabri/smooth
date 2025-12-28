-- ==========================================
-- LOT 14 : Cours 66 à 70
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 66 ---

-- COURS 67 : Navigo et Transports
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Navigo et Transports en France : Guide des transports en commun',
  'navigo-transports-france-guide-transports-commun',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux qui vont utiliser les transports en commun en France, notamment en Île-de-France (Paris). Le Pass Navigo est le titre de transport incontournable, mais les offres et les règles peuvent être complexes. Nous vous expliquerons le fonctionnement du Pass Navigo (Paris) et des équivalents régionaux, les tarifs spécifiques pour les étudiants (Imagine R), et l''importance cruciale de valider votre titre à chaque passage pour éviter les amendes. Maîtriser le système de transports en commun est absolument crucial pour vous déplacer efficacement, optimiser votre budget transports, et vous intégrer sereinement dans votre ville d''études.',
  'Navigo et Transports en France : Pass Navigo (Paris), tarifs Imagine R étudiants, validez votre titre. Déplacez-vous facilement et sans amende !',
  'transport',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le fonctionnement du Pass Navigo et des équivalents régionaux", "Identifier les tarifs spécifiques pour les étudiants (Imagine R)", "Savoir comment valider son titre de transport à chaque passage", "Maîtriser les conseils pour optimiser ses déplacements et éviter les amendes"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  600,
  4500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 67
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le Pass Navigo (Paris) et équivalents régionaux',
  '# Le Pass Navigo (Paris) et équivalents régionaux

## Pourquoi c''est important ?

Si vous étudiez en Île-de-France (Paris et sa région), le **Pass Navigo** est le titre de transport le plus pratique et le plus économique. Dans les autres régions de France, des systèmes équivalents existent. Comprendre le fonctionnement de ces titres de transport est absolument crucial pour les étudiants internationaux afin de vous déplacer facilement en ville, d''optimiser votre budget transports, et d''éviter les amendes. Ne pas connaître ces systèmes, c''est risquer de payer des tickets à l''unité (plus cher), de perdre du temps avec des options inadaptées, ou de se retrouver en infraction. Maîtriser le Pass Navigo et ses équivalents est fondamental pour votre autonomie et votre intégration dans votre ville d''études.


-   Définir ce qu''est le Pass Navigo et son fonctionnement en Île-de-France.
-   Comprendre les différents types d''abonnements (mensuel, annuel, solidarité).
-   Maîtriser les conseils pour choisir l''abonnement le plus adapté à vos besoins.








#### b) Types d''abonnements
-   **Navigo Mensuel / Annuel** : Le plus courant. Vous rechargez votre Pass Navigo pour un mois ou pour l''année.
-   **Navigo Liberté +** : Pour les déplacements occasionnels (vous ne payez qu''à la consommation, débitée le mois suivant).

-   Depuis 2023, le Pass Navigo est **dézoné** et permet de voyager sur l''ensemble des 5 zones de l''Île-de-France, quel que soit le point de départ ou d''arrivée.

#### d) Où l''obtenir ?
-   **En gare ou station** : Dans les guichets RATP ou SNCF Transilien. Vous devrez fournir une photo d''identité et une pièce d''identité.










-   **Conditions** : Souvent liées à l''âge (moins de 26 ans), au statut étudiant, et à la domiciliation.

-   Si vous avez un job étudiant, votre employeur a l''obligation de prendre en charge 50% du coût de votre abonnement aux transports en commun.




-   Si vous utilisez les transports en commun régulièrement, un abonnement est toujours plus économique que des tickets à l''unité.


-   **Risque d''amende** : Sans validation, vous êtes en infraction.



-   Votre **passeport** ou **carte d''identité**.
-   Une **photo d''identité**.
-   Votre **RIB** (pour le prélèvement de l''abonnement).


-   **Optez pour l''abonnement le plus adapté à votre zone et votre fréquence de déplacement.**


-   **Payer des tickets à l''unité pour des trajets quotidiens** : C''est beaucoup plus cher.
-   **Ne pas valider son titre de transport** : Risque d''amende.
-   **S''engager sur un abonnement annuel sans être sûr de la durée de votre séjour**.




Le Pass Navigo en Île-de-France et ses équivalents régionaux sont des titres de transport essentiels pour les étudiants internationaux. Optez pour un abonnement mensuel ou annuel (comme Imagine R pour les moins de 26 ans en Île-de-France) pour optimiser votre budget. N''oubliez jamais de valider votre titre à chaque passage pour éviter les amendes. Maîtriser le système de transports en commun de votre ville est absolument crucial pour vous déplacer efficacement, économiser de l''argent, et vous intégrer sereinement en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4102-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Tarifs Imagine R (Étudiants)',
  '# Tarifs Imagine R (Étudiants)

## Pourquoi c''est important ?

Si vous êtes étudiant(e) et que vous résidez en Île-de-France (Paris et sa région), le forfait **Imagine R** est l''abonnement aux transports en commun le plus avantageux et le plus adapté à votre statut. Il offre des tarifs considérablement réduits par rapport à un Pass Navigo classique. Ne pas connaître l''existence et les conditions d''éligibilité de l''Imagine R, c''est risquer de payer un abonnement plein tarif, ce qui représente une dépense beaucoup plus importante sur votre budget étudiant. Pour les étudiants internationaux, optimiser vos frais de transport est absolument crucial. Maîtriser les spécificités de l''Imagine R est fondamental pour vous déplacer à moindre coût et profiter pleinement de votre vie étudiante.


-   Définir ce qu''est le forfait Imagine R et ses avantages spécifiques.
-   Comprendre les conditions d''éligibilité pour les étudiants internationaux.
-   Maîtriser les conseils pour optimiser l''utilisation de votre Pass Imagine R.





### 1. Qu''est-ce que le forfait Imagine R ?


-   Imagine R est un **forfait annuel** qui permet de voyager de manière illimitée sur tous les transports en commun (métro, RER, bus, tramway, train) en Île-de-France, sur l''ensemble des zones.
-   **Tarif réduit** : Son principal avantage est son prix, beaucoup plus avantageux qu''un Pass Navigo mensuel ou annuel classique.

-   L''abonnement est géré par Île-de-France Mobilités (IDFM).

-   L''abonnement est valable pendant 12 mois, commençant généralement le 1er septembre de l''année universitaire (ou le mois de votre choix).

### 2. Conditions d''éligibilité pour les étudiants internationaux


-   **Moins de 26 ans** : Vous devez avoir moins de 26 ans au 1er septembre de l''année de souscription (ou au moment de la demande).

-   **Être étudiant(e)** : Vous devez être inscrit(e) dans un établissement d''enseignement supérieur en Île-de-France.
-   **Fournir un certificat de scolarité** pour l''année universitaire en cours.






-   **Portail Imagine R** : Rendez-vous sur le site `iledefrance-mobilites.fr` et cherchez la section "Forfait Imagine R".

-   **Pièce d''identité** : Passeport ou titre de séjour valide.
-   **Justificatif de domicile** en Île-de-France (facture de moins de 3 mois, quittance de loyer, attestation d''hébergement).
-   **Certificat de scolarité** pour l''année universitaire en cours.
-   Une **photo d''identité** récente.
-   Un **RIB** (Relevé d''Identité Bancaire) d''un compte bancaire français pour le prélèvement des mensualités.



### 4. Conseils pour optimiser l''utilisation de votre Pass Imagine R


-   **Risque d''amende** : En cas de contrôle, si vous n''avez pas validé, vous risquez une amende, même si vous avez un abonnement valide.

-   **Avantage** : Le duplicata est un Pass vierge sur lequel vos droits sont rechargés. Votre forfait n''est pas perdu.



-   Votre **pièce d''identité** et **titre de séjour**.
-   Une **photo d''identité**.


-   **Faites la demande d''Imagine R dès que vous avez votre certificat de scolarité et votre justificatif de domicile**.
-   **N''attendez pas le 1er septembre** : Les délais de traitement peuvent être longs.
-   **Ne payez pas un Pass Navigo plein tarif** si vous êtes éligible à l''Imagine R.


-   **Ne pas faire la demande d''Imagine R** par méconnaissance.
-   **Manquer la date limite de souscription** (souvent fin octobre pour l''année universitaire en cours).
-   **Ne pas valider son Pass à chaque passage** : Risque d''amende.




Le forfait Imagine R est l''abonnement aux transports en commun le plus avantageux pour les étudiants de moins de 26 ans résidant en Île-de-France. Il offre des tarifs réduits pour des déplacements illimités sur toutes les zones. Faites la demande en ligne avec votre pièce d''identité, justificatif de domicile et certificat de scolarité, et payez par prélèvements mensuels. N''oubliez jamais de valider votre Pass à chaque passage pour éviter les amendes. Maîtriser l''Imagine R est absolument crucial pour optimiser votre budget transports et profiter sereinement de votre vie étudiante à Paris et en Île-de-France.
',
  2,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Valider son titre : Attention aux contrôleurs',
  '# Valider son titre : Attention aux contrôleurs

## Pourquoi c''est important ?

Lorsque vous utilisez les transports en commun en France, la **validation systématique de votre titre de transport à chaque passage** est une obligation légale, même si vous avez un abonnement illimité (Pass Navigo, Imagine R, ou équivalent régional). Ne pas valider votre titre, c''est vous exposer à une amende salée en cas de contrôle, même si votre abonnement est valide et payé. Pour les étudiants internationaux, souvent peu familiers avec cette règle stricte, cette négligence peut coûter cher et créer un stress inutile. Maîtriser l''importance de la validation et les conséquences du non-respect est absolument crucial pour voyager en toute légalité, éviter les amendes, et circuler sereinement dans les transports français.


-   Comprendre l''obligation légale de validation de son titre de transport.





### 1. L''obligation légale de validation


-   **Comptage des voyageurs** : Cela permet aux opérateurs de compter le nombre de passagers et d''adapter l''offre de transport.

-   Même si les portiques sont ouverts ou si d''autres personnes passent sans valider, vous devez le faire.




-   **Portiques d''accès** : Vous devez passer votre carte Navigo (ou titre équivalent) sur le lecteur des portiques à l''entrée et à la sortie (pour certains RER/trains).

-   **Valideurs à bord** : Vous devez valider votre titre sur le valideur situé à l''entrée (ou près des portes) du bus ou du tramway.


L''amende est immédiate.


#### b) L''amende
-   Si vous êtes contrôlé(e) et que vous n''avez pas validé votre titre (même si votre abonnement est valide), vous risquez une **amende**.
-   **Montant de l''amende** : L''amende pour "absence de validation" est d''environ **35 €** (chiffre indicatif, peut varier).
-   Elle peut être payée sur place (par carte ou espèces) ou dans un délai de quelques jours. Si elle n''est pas payée, elle peut être majorée.

#### c) Preuve de l''abonnement




-   **À chaque passage** : Habituez-vous à toujours valider votre titre, même si la porte est ouverte, même si vous êtes pressé(e), même si d''autres ne le font pas.

-   Assurez-vous que votre abonnement mensuel ou annuel est bien à jour et n''a pas expiré.


-   Présentez votre titre de transport et, le cas échéant, expliquez la situation (si vous avez validé mais que cela n''a pas fonctionné).
-   Si vous recevez une amende, payez-la rapidement pour éviter les majorations. Vous pouvez la contester par écrit si vous estimez qu''elle est injustifiée.




-   **Activez les notifications de validité de votre abonnement** sur l''application Île-de-France Mobilités ou RATP.
-   **Si votre Pass est périmé ou ne fonctionne plus**, ne voyagez pas sans l''avoir mis à jour ou remplacé.
-   **Ne voyagez pas sans titre de transport** : C''est une faute grave qui entraîne une amende plus lourde.


-   **Penser que l''abonnement payé suffit** : La validation est une obligation distincte.
-   **Prendre le risque de ne pas valider** : L''amende est systématique en cas de contrôle.
-   **Faire des faux titres de transport** : C''est un délit.




',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 67 ---

-- COURS 68 : Prendre le train (SNCF)
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Prendre le train (SNCF) en France : TGV, Ouigo et cartes de réduction',
  'prendre-train-sncf-france-tgv-ouigo-cartes-reduction',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui souhaitent voyager en train à travers le pays. Le réseau ferroviaire français, opéré principalement par la SNCF, offre différentes options (TGV Inoui, Ouigo, TER), mais les tarifs et les réductions peuvent être complexes. Nous vous expliquerons la distinction entre TGV Inoui (confort, flexibilité) et Ouigo (low cost, restrictions), l''intérêt de la Carte Avantage Jeune (est-elle rentable pour vous ?), et l''application indispensable "Connect SNCF". Maîtriser ces informations est absolument crucial pour planifier vos voyages, trouver les meilleurs prix, et profiter pleinement de la découverte de la France en train.',
  'Prendre le train SNCF : TGV Inoui vs Ouigo, Carte Avantage Jeune, appli Connect SNCF. Voyagez malin et explorez la France !',
  'transport',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Distinguer les offres TGV Inoui (standard) et Ouigo (low cost)", "Comprendre l''intérêt et la rentabilité de la Carte Avantage Jeune", "Savoir utiliser l''application Connect SNCF pour la réservation et les infos trafic", "Maîtriser les conseils pour planifier ses voyages en train et acheter ses billets au meilleur prix"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  500,
  3800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 68
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'TGV Inoui vs Ouigo (Low cost)',
  '# TGV Inoui vs Ouigo (Low cost) : Choisir son train en France

## Pourquoi c''est important ?

Pour voyager en train en France, la SNCF propose deux grandes gammes de TGV (Trains à Grande Vitesse) : **TGV Inoui** et **Ouigo**. Ces deux offres ont des logiques de prix, de confort, de flexibilité et de services très différentes. Comprendre la distinction entre TGV Inoui (le service "premium") et Ouigo (l''offre "low cost") est absolument crucial pour les étudiants internationaux afin de choisir l''option la plus adaptée à votre budget, à vos besoins de voyage (rapidité, confort, flexibilité), et à votre tolérance aux contraintes. Une mauvaise décision peut entraîner un surcoût inattendu ou une expérience de voyage frustrante. Maîtriser ce comparatif est fondamental pour voyager malin et profiter de vos explorations en France.


-   Comprendre le principe du "low cost" de Ouigo et ses spécificités.


La SNCF est l''opérateur ferroviaire national. Elle a diversifié son offre pour répondre aux différents besoins des voyageurs.





-   **Service "premium"** : TGV Inoui est l''offre classique de la SNCF pour les TGV.
-   **Confort** : Sièges plus confortables, prises électriques à toutes les places, Wi-Fi inclus, voiture-bar (snack/restauration), plus d''espace pour les bagages.



### 2. Ouigo : L''offre "low cost" et ses spécificités


-   **Service "low cost"** : Ouigo est l''offre TGV à bas prix de la SNCF.
-   **Prix bas** : Billets très abordables, surtout si vous réservez longtemps à l''avance.
-   **Confort réduit** : Sièges moins confortables, pas toujours de prises électriques, pas de voiture-bar (mais possibilité d''acheter un snack à bord).
-   **Bagages limités** : Le prix de base n''inclut qu''un bagage cabine et un bagage à main. Tout bagage supplémentaire (ou grand bagage) est payant.
-   **Flexibilité limitée** : Billets non modifiables et non remboursables (sauf achat d''une option Flex ou service Ouigo Plus).








#### a) Réservez à l''avance
-   Pour TGV Inoui et surtout Ouigo, les prix sont beaucoup plus bas si vous réservez vos billets plusieurs semaines (voire mois) à l''avance.



-   Le coût d''un RER ou d''un bus pour rejoindre le centre-ville peut annuler l''économie du billet Ouigo.


-   Votre **carte d''identité** ou **passeport**.


-   **Consultez les sites respectifs** ou l''application SNCF Connect.
-   **Prévoyez d''arriver en avance à la gare**, surtout pour Ouigo (contrôles des billets à l''entrée du quai).


-   **Oublier la non-flexibilité des billets Ouigo** : Pas de remboursement en cas d''imprévu.


-   🔗 [TGV Inoui : Site officiel](https://www.sncf-connect.com/train/tgv-inoui) - Présentation de l''offre.
-   🔗 [Ouigo : Site officiel](https://www.ouigo.com/) - Présentation de l''offre et réservation.


Pour voyager en train en France, la SNCF propose TGV Inoui (confort, flexibilité, gares centrales) et Ouigo (low cost, prix bas si réservation anticipée, gares périphériques, bagages limités). Anticipez vos réservations pour des prix avantageux et évaluez vos besoins (budget, confort, bagages, flexibilité) pour choisir l''offre la plus adaptée. Maîtriser la distinction entre Inoui et Ouigo est absolument crucial pour planifier vos voyages de manière intelligente et profiter pleinement de la découverte de la France en train.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La Carte Avantage Jeune : Rentable ?',
  '# La Carte Avantage Jeune : Est-elle rentable pour vous ?

## Pourquoi c''est important ?

Si vous êtes un étudiant international en France et que vous prévoyez de voyager régulièrement en train (avec la SNCF), la **Carte Avantage Jeune** est une carte de réduction qui peut vous faire économiser considérablement sur le prix de vos billets TGV Inoui et Intercités. Cependant, son achat représente un coût annuel, et il est absolument crucial de calculer sa rentabilité pour savoir si elle est réellement avantageuse pour votre profil et vos habitudes de voyage. Ne pas faire ce calcul, c''est risquer de dépenser de l''argent inutilement pour la carte, ou au contraire, de passer à côté de réductions importantes. Maîtriser cette analyse est fondamental pour optimiser votre budget transports et profiter de la découverte de la France à moindre coût.


-   Définir ce qu''est la Carte Avantage Jeune et ses avantages.
-   Comprendre les conditions d''éligibilité et le coût de la carte.
-   Maîtriser les conseils pour optimiser l''utilisation de la Carte Avantage Jeune.





### 1. Qu''est-ce que la Carte Avantage Jeune ?


-   Elle est valable un an à partir de sa date d''activation.

-   **Pour les 12-27 ans** : Vous devez avoir entre 12 et 27 ans inclus au moment de l''achat ou du renouvellement de la carte.
-   **Statut étudiant** : Non obligatoire. Vous n''avez pas besoin d''être étudiant pour l''obtenir, l''âge est le seul critère.

-   Le prix d''achat de la Carte Avantage Jeune est de **49 €** pour un an (chiffre indicatif, peut être mis à jour).




-   **Minimum 30% de réduction** : Vous bénéficiez d''au moins 30% de réduction sur vos billets TGV Inoui et Intercités (en 1ère et 2nde classe).
-   **Jusqu''à 60% pour les accompagnants** : Si vous voyagez avec un ou deux enfants de moins de 12 ans, ils bénéficient de 60% de réduction.






-   La carte est rentable si les économies réalisées sur vos billets dépassent le prix d''achat de la carte (49€).
-   **Exemple** : Si un aller-retour Paris-Lyon coûte 80€ (plein tarif), avec la carte, vous payerez 80€ - 30% = 56€. Vous économisez 24€. Il vous faudra donc 4 allers-retours par an pour rentabiliser la carte (4 * 24€ = 96€ d''économies).

-   **Voyages rares ?** Si vous ne prenez le train qu''une ou deux fois par an, elle ne sera peut-être pas rentable.



-   Votre **date de naissance** (pour l''âge).


-   **Simulez l''achat de vos billets** : Faites une simulation sur SNCF Connect avec et sans la carte pour voir la différence.
-   **Prenez la carte si vous êtes entre 18 et 25 ans** : C''est la période où elle est la plus utile pour les étudiants.


-   **Penser que la carte fonctionne sur Ouigo** : Non, elle n''est pas valable pour les trains Ouigo.
-   **Ne pas l''avoir sur soi lors d''un contrôle** : Votre réduction ne sera pas appliquée, et vous pourriez payer le plein tarif.
-   **Faire de fausses déclarations sur l''âge** (si vous avez plus de 27 ans).


-   🔗 [SNCF : Conditions générales d''utilisation Carte Avantage Jeune](https://www.sncf.com/fr/conditions-generales-de-vente/cartes-abonnements-voyageurs) - Pour les détails juridiques.
-   🔗 [La Poste : Envoi d''une carte d''identité](https://www.laposte.fr/produits/presentation/courrier/lettres-types/envoyer-une-carte-didentite) - Pour les justificatifs.


',
  2,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Connect SNCF : L''appli indispensable',
  '# SNCF Connect : L''appli indispensable

## Pourquoi c''est important ?

Pour tous vos déplacements en train en France (TGV Inoui, Ouigo, TER, Transilien), l''application **SNCF Connect** est l''outil absolument indispensable. Elle vous permet de rechercher des trajets, d''acheter vos billets, de gérer vos réservations, et de consulter les informations trafic en temps réel, le tout depuis votre smartphone. Ne pas l''utiliser, c''est risquer de perdre du temps à chercher des informations sur différents sites, de manquer des promotions, ou de ne pas être informé(e) des perturbations. Pour les étudiants internationaux, SNCF Connect est crucial pour planifier vos voyages en toute autonomie, trouver les meilleurs prix, et naviguer sereinement dans le réseau ferroviaire français.


-   Définir ce qu''est l''application SNCF Connect et ses fonctionnalités clés.
-   Maîtriser les conseils pour utiliser l''application au quotidien et consulter les informations trafic.


SNCF Connect est l''application officielle de la SNCF, qui a regroupé les services d''OUI.sncf et de l''Assistant SNCF. C''est votre compagnon de voyage.



### 1. Qu''est-ce que l''application SNCF Connect ?


-   SNCF Connect est l''application officielle qui vous permet de :

-   L''application est gratuite et disponible sur iOS (App Store) et Android (Google Play Store).

-   Conçue pour être facile d''utilisation.



-   Sur l''écran d''accueil, saisissez votre gare de départ, votre gare d''arrivée, la date et l''heure souhaitées.

-   L''application vous proposera différentes options : TGV Inoui, Ouigo, Intercités, TER, avec les prix, les durées de trajet, et les conditions (flexibilité, bagages).

-   Vos billets sont dématérialisés et stockés directement dans l''application. Vous recevez également une confirmation par e-mail.



-   Dans l''onglet "Mes Billets", vous accédez à tous vos billets achetés.

-   Si votre billet est modifiable ou remboursable (conditions variables selon le tarif Inoui), vous pouvez effectuer ces opérations directement depuis l''application.

-   Vous pouvez enregistrer votre Carte Avantage Jeune ou votre abonnement Navigo dans l''application. Les réductions seront appliquées automatiquement lors de vos recherches.



-   En cas de perturbation (grève, incident technique, retard), l''application affiche les informations trafic en temps réel pour votre trajet.

-   Activez les notifications pour recevoir des alertes en cas de retard, de suppression de train, ou d''information importante sur votre ligne.




-   **Téléchargez l''application SNCF Connect dès votre arrivée en France.**
-   **Utilisez l''application pour toutes vos recherches et achats de billets.**


-   **Ne pas utiliser l''application et acheter des billets au guichet** : Moins pratique, risque de rater des promotions.
-   **Oublier d''activer le GPS de votre téléphone** si l''application en a besoin pour la géolocalisation.


-   🔗 [Google Play Store / Apple App Store](https://play.google.com/store/apps/details?id=com.sncf&hl=fr_FR&gl=US) - Pour télécharger l''application (SNCF Connect).


L''application SNCF Connect est l''outil indispensable pour tous les étudiants internationaux qui voyagent en train en France. Elle vous permet de rechercher, acheter et gérer vos billets (TGV Inoui, Ouigo, TER), d''enregistrer vos cartes de réduction (Carte Avantage Jeune), et de consulter les informations trafic en temps réel. Téléchargez-la, créez votre compte, et utilisez-la pour planifier vos voyages efficacement et au meilleur prix. Maîtriser SNCF Connect est absolument crucial pour une autonomie totale et une expérience de voyage sereine dans le réseau ferroviaire français.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 68 ---

-- COURS 69 : Vélib' et vélos
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Vélib'' et vélos en France : Mobilité douce et sécurité routière',
  'velib-velos-france-mobilite-douce-securite-routiere',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui souhaitent adopter la "mobilité douce" et se déplacer à vélo. Le vélo est un moyen de transport écologique, économique et agréable, mais il est crucial de connaître les options disponibles (services de vélos en libre-service comme Vélib'' à Paris) et le Code de la route spécifique aux cyclistes. Nous vous expliquerons comment vous abonner aux services de vélos en libre-service, les règles de circulation pour les cyclistes, et les conseils pour sécuriser votre vélo personnel (antivol, stationnement). Maîtriser ces informations est absolument crucial pour vous déplacer en toute sécurité, éviter les amendes, et profiter pleinement de la ville à vélo.',
  'Vélib'' et vélos en France : abonnements libre-service, Code de la route cycliste, sécurité antivol. Déplacez-vous à vélo en sécurité !',
  'transport',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le fonctionnement des services de vélos en libre-service (Vélib'') et leurs abonnements", "Identifier les règles du Code de la route spécifiques aux cyclistes", "Savoir comment sécuriser son vélo personnel contre le vol", "Maîtriser les conseils pour une mobilité douce sûre et agréable en ville"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  400,
  3000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 69
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'S''abonner aux vélos en libre-service',
  '# S''abonner aux vélos en libre-service (Vélib'', etc.)

## Pourquoi c''est important ?

Les systèmes de vélos en libre-service (comme Vélib'' Métropole à Paris, Velo''v à Lyon, ou Vélopop'' à Avignon) sont un moyen de transport écologique, économique et très pratique pour se déplacer en ville, surtout sur de courtes distances. Pour les étudiants internationaux, s''abonner à ces services est absolument crucial pour explorer votre ville d''études, faire des trajets quotidiens (université, courses), et profiter d''une mobilité flexible sans les contraintes d''acheter un vélo personnel ou de se soucier des transports en commun. Ne pas connaître ces systèmes, c''est se priver d''une solution de déplacement agréable et souvent moins chère que d''autres. Maîtriser l''abonnement est fondamental pour votre autonomie et votre budget.


-   Identifier les principaux systèmes en France (Vélib'' à Paris, et équivalents régionaux).
-   Comprendre les différents types d''abonnements (ponctuel, annuel, étudiant).
-   Maîtriser les conseils pour s''abonner et utiliser le service efficacement.


Les vélos en libre-service sont un élément clé de la "mobilité douce" en ville. Ils sont disponibles dans de nombreuses stations et sont accessibles 24h/24.

🔗 [Vélib'' Métropole : Site officiel](https://www.velib-metropole.fr/) - Le portail de Vélib'' à Paris.


### 1. Qu''est-ce que les vélos en libre-service ?



-   **Flexibilité** : Vous avez toujours un vélo à disposition (en théorie) sans les contraintes d''entretien, de stationnement ou de sécurité d''un vélo personnel.

-   De plus en plus de systèmes proposent des vélos à assistance électrique (VAE), plus chers à l''abonnement, mais facilitant les trajets.



#### a) Vélib'' Métropole (Paris et sa banlieue)

-   **Velo''v** (Lyon).
-   **V''Lille** (Lille).
-   **Vélopop''** (Avignon).
-   Etc. : Renseignez-vous sur le système de votre ville d''études.

🔗 [Ville de Paris : Vélib''](https://www.paris.fr/pages/deplacement/se-deplacer-a-velo/velib-38) - Informations sur Vélib''.

### 3. Les différents types d''abonnements


-   Paiement à l''heure ou à la journée. Souvent plus cher pour une utilisation régulière.

-   **Prix réduit pour les jeunes/étudiants** : Vélib'' Métropole propose par exemple des tarifs réduits pour les moins de 27 ans.
-   **Gratuité de la première demi-heure** : Souvent, les 30 premières minutes de chaque trajet sont gratuites. Au-delà, un coût supplémentaire s''applique.


#### d) Comment s''abonner ?
-   **En ligne** : Sur le site internet du service (ex: `velib-metropole.fr`) ou via l''application mobile.
-   **Documents** : Vous devrez fournir une pièce d''identité, une adresse postale, et un RIB (pour le prélèvement de l''abonnement et la caution).


-   Votre **pièce d''identité**.
-   Votre **smartphone** (pour l''application).


-   **Si vous êtes à Paris, l''abonnement Imagine R peut être combiné avec une offre Vélib'' à tarif réduit.**
-   **Utilisez l''application mobile du service** : Elle vous permet de trouver les stations, de connaître la disponibilité des vélos, et de déverrouiller un vélo.
-   **Si une station est pleine**, l''application peut vous indiquer les stations à proximité ou vous donner un bonus de temps si vous déposez le vélo à une station plus éloignée.


-   **Ne pas s''abonner et payer à l''unité** : C''est beaucoup plus cher pour un usage régulier.
-   **Ne pas déposer le vélo dans une station** : Le vélo est considéré comme volé et la caution sera débitée, avec d''éventuelles poursuites.
-   **Ne pas vérifier l''état du vélo** avant de le prendre (pneus, freins, selle).


-   🔗 [Vélib'' Métropole : Site officiel](https://www.velib-metropole.fr/) - La référence pour Paris.
-   🔗 [Velo''v (Lyon) / Vélopop'' (Avignon) / V''Lille (Lille)](https://www.velov.grandlyon.com/) - Sites des services locaux.


S''abonner aux services de vélos en libre-service (comme Vélib'' Métropole à Paris) est une excellente solution de mobilité douce, économique et flexible pour les étudiants internationaux. Choisissez l''abonnement adapté à votre usage (mensuel/annuel pour les réguliers, avec tarifs réduits étudiants). Utilisez l''application mobile pour localiser les vélos et stations, et respectez la durée des trajets gratuits. Maîtriser ces systèmes est absolument crucial pour vous déplacer facilement, réduire vos dépenses de transport, et profiter d''une expérience urbaine agréable et écologique en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Code de la route pour cyclistes',
  '# Code de la route pour cyclistes

## Pourquoi c''est important ?

Si vous choisissez de vous déplacer à vélo en France (que ce soit avec un vélo personnel ou un vélo en libre-service), il est absolument crucial de connaître et de respecter le **Code de la route spécifique aux cyclistes**. Ne pas le faire, c''est risquer des amendes, des accidents, et de mettre en danger votre sécurité et celle des autres usagers de la route. Pour les étudiants internationaux, souvent peu familiers avec les règles de circulation françaises, comprendre ces spécificités est fondamental pour rouler en toute légalité, éviter les infractions, et circuler sereinement en ville. Votre sécurité est notre priorité.









-   **Catadioptres** : Des réflecteurs rouges à l''arrière, blancs à l''avant, orange sur les côtés (roues) et sur les pédales.
-   **Avertisseur sonore** : Une sonnette (interdite d''utiliser un klaxon).





-   **Pistes et bandes cyclables** : Si elles existent, elles sont obligatoires pour les cyclistes. Vous ne pouvez pas circuler sur la route à côté d''une piste cyclable.

-   **Respectez les feux rouges** : Un cycliste doit s''arrêter au feu rouge comme les autres véhicules.
-   **Panneau "cédez le passage cycliste au feu"** : Certains feux sont équipés d''un panneau spécifique (un vélo et une flèche). Il autorise les cyclistes à franchir le feu rouge pour tourner à droite ou aller tout droit, après avoir cédé le passage aux piétons et aux autres véhicules.
-   **Respectez les panneaux "STOP" et "Cédez le passage"**.

-   Dans certaines rues à sens unique (limitées à 30 km/h), un panneau "sens interdit" avec un petit panneau additionnel "sauf vélo" autorise les cyclistes à circuler à contresens. Soyez vigilant(e) et cédez le passage.

-   **Interdit de rouler sur les trottoirs**, sauf pour les enfants de moins de 8 ans, et si un panneau l''autorise. Vous devez marcher à côté de votre vélo.





-   Vous avez le droit d''occuper la chaussée. Si une piste cyclable n''existe pas, roulez à 1 mètre du bord droit de la chaussée (ou plus si la chaussée est étroite ou s''il y a un danger).
-   **Visibilité** : Ne roulez pas trop près des voitures en stationnement (risque d''ouverture de portière).





Votre sécurité d''abord.



-   Ne grillez pas les feux rouges (sauf panneau "cédez le passage cycliste").





-   **Si vous venez d''un pays où les règles sont très différentes**, prenez le temps de vous familiariser avec la conduite à vélo en France.
-   **Ne buvez pas d''alcool si vous faites du vélo**.


-   **Griller les feux rouges ou les stops** : Amende et risque d''accident.




Si vous circulez à vélo en France, il est absolument crucial de connaître et de respecter le Code de la route cycliste. Ayez les équipements obligatoires (feux, sonnette, gilet), roulez sur les pistes cyclables, respectez les feux et les priorités, et ne roulez jamais sur les trottoirs. Soyez visible, attentif(ve) et signalez vos changements de direction. Maîtriser ces règles est fondamental pour votre sécurité, pour éviter les amendes, et pour profiter pleinement d''une mobilité douce sereine et légale en ville.
',
  2,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Sécuriser son vélo personnel',
  '# Sécuriser son vélo personnel

## Pourquoi c''est important ?

Si vous possédez un vélo personnel en France, il est absolument crucial de le sécuriser correctement contre le vol. Le vol de vélos est malheureusement très fréquent dans les villes françaises, et perdre votre vélo peut être une source de stress, de coût financier, et de perte de votre moyen de transport quotidien. Ne pas prendre les précautions nécessaires, c''est s''exposer à un risque élevé de vol. Pour les étudiants internationaux, souvent avec un budget limité, la perte d''un vélo est un coup dur. Maîtriser les techniques d''antivol efficaces, savoir où stationner son vélo, et connaître les assurances possibles est fondamental pour protéger votre bien, vous déplacer sereinement, et éviter les désagréments financiers.


-   Comprendre l''importance de sécuriser son vélo personnel contre le vol.
-   Identifier les différents types d''antivols efficaces et leurs usages.





### 1. Comprendre le risque de vol et l''importance de l''antivol



#### b) L''importance de l''antivol
-   Un bon antivol ne rend pas le vélo "invola ble", mais il dissuade les voleurs occasionnels et ralentit les plus expérimentés.
-   Plus l''antivol est résistant, plus le voleur aura besoin de temps et de matériel, et plus le risque pour lui est élevé.

### 2. Les différents types d''antivols efficaces


-   **Le plus efficace** : Les antivols en U sont considérés comme les plus résistants, surtout s''ils sont certifiés (ex: FUB 2 roues, ou marque SRA).


-   **Résistance variable** : La résistance dépend de l''épaisseur des maillons. Choisissez une chaîne épaisse et une serrure solide.

-   **Faible protection** : Les câbles sont très faciles à couper et ne doivent être utilisés qu''en complément d''un antivol plus robuste, ou pour des arrêts très courts dans des zones sûres.






-   **Résidences** : Si votre résidence (étudiante, immeuble) dispose d''un local à vélos sécurisé, utilisez-le.
-   **Chez vous** : Si possible, rentrez votre vélo chez vous (même si c''est petit).

#### c) Technique d''attache

-   **Avantage** : En cas de vol, la police peut vous restituer le vélo si elle le retrouve. C''est aussi une preuve de propriété.
-   Où le faire ? : Chez les vélocistes agréés ou lors d''événements organisés.




-   Certains contrats d''assurance habitation (Multirisque Habitation - MRH) peuvent inclure une garantie "vol de vélo" (souvent avec une option supplémentaire).
-   **Vérifiez votre contrat** : Lisez les conditions de cette garantie (vol à domicile, vol à l''extérieur, type d''antivol exigé, franchise, plafond d''indemnisation).

-   Des assureurs proposent des contrats spécifiques pour les vélos (neufs ou électriques) qui couvrent le vol, les dommages, et la responsabilité civile en cas d''accident.


-   Une **facture d''achat** de votre vélo (avec numéro de cadre).
-   Votre **contrat d''assurance habitation**.


-   **Investissez dans un bon antivol** (un antivol de qualité coûte cher, mais il vaut le prix d''un vélo).
-   **Marquez votre vélo** dès l''achat.
-   **Photographiez votre vélo et ses antivols** (cela peut servir de preuve pour l''assurance).


-   **Ne pas attacher son vélo** ou l''attacher avec un antivol de mauvaise qualité (câble).
-   **Ne pas assurer son vélo** si c''est un bien de valeur.


-   🔗 [Ministère de l''Intérieur : Prévention du vol de vélo](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Prevention-des-risques/Prevention-vol-velo) - Conseils.


',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 69 ---

-- COURS 70 : Faire ses courses
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Faire ses courses en France : Hypermarchés, Hard-Discount et astuces',
  'faire-courses-france-hypermarches-hard-discount-astuces',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France, afin d''optimiser leur budget alimentaire. Faire ses courses est une dépense récurrente, et le choix du magasin peut avoir un impact majeur sur vos dépenses. Nous vous expliquerons la typologie des supermarchés (hypermarché, supermarché, supérette), les avantages des enseignes "hard-discount" (Lidl, Aldi) pour des prix bas, et l''intérêt des cartes de fidélité pour des réductions supplémentaires. Maîtriser ces informations est absolument crucial pour gérer votre budget alimentation efficacement, faire des économies, et découvrir les habitudes de consommation françaises sans vous ruiner.',
  'Courses en France : hypermarchés, supermarchés, hard-discount (Lidl, Aldi), cartes de fidélité. Économisez sur votre budget alimentation !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la typologie des magasins (hypermarché, supermarché, supérette)", "Identifier les avantages des enseignes hard-discount (Lidl, Aldi) pour les petits budgets", "Savoir comment utiliser les cartes de fidélité pour des réductions", "Maîtriser les conseils pour faire ses courses intelligemment et économiser"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  500,
  3800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 70
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Typologie : Hypermarché, Super, Supérette',
  '# Typologie : Hypermarché, Supermarché, Supérette (Faire ses courses)

## Pourquoi c''est important ?

En France, il existe différentes tailles et types de magasins pour faire vos courses alimentaires et non alimentaires. Le choix de votre lieu d''achat peut avoir un impact direct et significatif sur votre budget, la variété des produits, et la praticité de vos courses. Comprendre la distinction entre un hypermarché, un supermarché, et une supérette est absolument crucial pour les étudiants internationaux afin d''optimiser vos dépenses, de trouver les produits dont vous avez besoin, et d''adapter vos habitudes de consommation à l''offre locale. Une mauvaise connaissance de ces typologies peut vous faire dépenser plus cher ou perdre du temps à chercher.


-   Définir les caractéristiques d''un hypermarché.
-   Comprendre le positionnement d''un supermarché classique.
-   Identifier les avantages et inconvénients d''une supérette.





### 1. L''Hypermarché : Le grand choix et les prix bas (pour les gros achats)


-   **Prix** : Généralement les prix les plus bas pour une grande partie des produits, grâce à l''effet de volume.


-   **Tentation** : Risque d''acheter plus que prévu (achats impulsifs).

🔗 [Carrefour / Auchan / Leclerc](https://www.carrefour.fr/) - Exemples d''hypermarchés.

### 2. Le Supermarché : L''équilibre entre choix et proximité



-   **Proximité** : Facile d''accès.

-   Moins de choix que l''hypermarché, prix légèrement plus élevés.





-   **Proximité extrême** : Très facile d''accès.


🔗 [Carrefour Express / Franprix / Monop''](https://www.franprix.fr/) - Exemples de supérettes.






-   **Se laisser tenter par les promotions** de l''hypermarché si vous n''avez pas besoin des produits.
-   **Ne pas tenir compte du temps de trajet et du coût du transport** pour se rendre à l''hypermarché.


-   🔗 [Observatoire des prix et des marges](https://www.economie.gouv.fr/dgccrf/observatoires-des-prix-et-des-marges) - Peut donner des informations sur l''évolution des prix.


',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4102-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Les enseignes Hard-Discount (Lidl, Aldi)',
  '# Les enseignes Hard-Discount (Lidl, Aldi)

## Pourquoi c''est important ?

Pour les étudiants internationaux en France avec un budget serré, les enseignes de "hard-discount" comme **Lidl** et **Aldi** sont des alliées précieuses. Elles proposent des produits de qualité à des prix significativement inférieurs à ceux des supermarchés classiques. Ne pas connaître ces enseignes, c''est risquer de dépenser beaucoup plus que nécessaire pour vos courses alimentaires et de ne pas pouvoir optimiser votre budget. Maîtriser les spécificités des hard-discounters, leurs avantages (prix, produits frais) et leurs inconvénients (choix limité, marques propres) est absolument crucial pour réaliser des économies importantes sur votre alimentation et garantir une gestion budgétaire efficace en France.


-   Définir ce qu''est une enseigne hard-discount et sa philosophie.


Le hard-discount s''est imposé en France en proposant un modèle économique qui réduit les coûts pour offrir des prix très bas.

🔗 [Aldi France : Site officiel](https://www.aldi.fr/) - Le portail d''Aldi.


### 1. Qu''est-ce que le Hard-Discount ?






-   C''est le principal avantage. Les prix des produits de base (produits laitiers, pâtes, riz, légumes, conserves) sont significativement plus bas qu''en supermarché classique.

-   **Lidl et Aldi ont fait de gros efforts** sur la qualité de leurs produits frais (fruits, légumes, viande, poisson) et de leurs produits biologiques. Ils sont souvent d''excellente qualité pour des prix très abordables.








#### d) Expérience d''achat différente
-   Magasins moins "luxueux", produits en vrac ou en cartons.






-   **Ne pas tenir compte de l''assortiment limité** : Vous risquez de ne pas trouver tous vos produits.
-   **Ne pas comparer les prix pour les produits non alimentaires** : Le hard-discount n''est pas toujours le moins cher pour tout.
-   **Oublier que les produits "spéciaux"** (ex: semaines thématiques) sont temporaires.
-   **Ne pas anticiper les files d''attente** : Elles peuvent être longues.




',
  2,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Les cartes de fidélité',
  '# Les cartes de fidélité (Supermarchés)

## Pourquoi c''est important ?

En France, la plupart des supermarchés et hypermarchés proposent des **cartes de fidélité** à leurs clients. Ces cartes, souvent gratuites, vous permettent de bénéficier de réductions, d''offres personnalisées, de cagnotter de l''argent, ou d''accéder à des promotions exclusives. Pour les étudiants internationaux, utiliser ces cartes est absolument crucial pour réaliser des économies sur vos courses alimentaires, optimiser votre budget, et ne pas passer à côté de bons plans. Ne pas en avoir, c''est payer plus cher que les autres clients et manquer des opportunités de réduction. Maîtriser leur utilisation est fondamental pour une gestion intelligente de votre budget et pour réduire le coût de votre alimentation.


-   Définir ce qu''est une carte de fidélité de supermarché et son principe.
-   Identifier les différents types d''avantages offerts par les cartes (réductions, cagnottage).
-   Savoir comment obtenir une carte de fidélité et l''utiliser.





### 1. Qu''est-ce qu''une carte de fidélité de supermarché ?


-   Elle est souvent gratuite et s''obtient facilement.

-   **Cagnottage** : Vous cumulez de l''argent sur votre carte (une "cagnotte") que vous pouvez ensuite utiliser pour payer vos courses.
-   **Offres personnalisées** : Selon vos habitudes d''achat, vous recevez des coupons de réduction ou des offres ciblées.

### 2. Les différents types d''avantages (cagnottage, réductions)


-   **Mécanisme** : Pour certains produits (signalés par des étiquettes en magasin), un pourcentage du prix d''achat est crédité sur votre compte fidélité (votre cagnotte).
-   **Utilisation** : Lorsque vous avez cumulé une somme suffisante, vous pouvez choisir de l''utiliser pour payer une partie ou la totalité de vos prochaines courses.
-   **Avantage** : L''argent cagnotte est de l''argent que vous récupérez directement.




### 3. Comment obtenir une carte de fidélité et l''utiliser ?


#### a) Où l''obtenir ?
-   **En magasin** : Directement à l''accueil du supermarché ou en caisse. Vous remplirez un formulaire simple.
-   **En ligne** : Sur le site internet de l''enseigne. Vous recevrez une carte numérique ou physique par courrier.

-   Généralement, une pièce d''identité (passeport) et une adresse postale en France suffisent.

#### c) Comment l''utiliser ?
-   **À chaque passage en caisse** : Présentez votre carte de fidélité (physique ou numérique via l''application mobile du magasin) au moment de payer.
-   Le caissier la scannera, et les réductions s''appliqueront ou votre cagnotte se remplira.


Soyez un "chasseur" de bonnes affaires.

-   Inutile d''avoir toutes les cartes. Concentrez-vous sur 2 ou 3 enseignes que vous fréquentez le plus.



-   N''oubliez pas d''utiliser votre cagnotte quand elle est suffisante.

-   Téléchargez les applications des supermarchés. Elles permettent souvent d''accéder à votre carte de fidélité numérique, aux promotions, et à votre cagnotte.


-   Votre **pièce d''identité**.


-   **Ne donnez pas d''informations bancaires sensibles** pour obtenir une carte de fidélité (un RIB n''est pas nécessaire).
-   **N''hésitez pas à demander au caissier si vous avez des points ou une cagnotte** à utiliser.


-   **Laisser expirer sa cagnotte** si elle a une date limite d''utilisation.




Les cartes de fidélité des supermarchés en France sont un excellent moyen d''économiser sur vos courses alimentaires. Elles vous offrent des réductions immédiates, du cagnottage à utiliser, et des offres personnalisées. Obtenez les cartes des magasins que vous fréquentez régulièrement, consultez leurs catalogues de promotions, et présentez toujours votre carte en caisse. Maîtriser l''utilisation de ces cartes est absolument crucial pour optimiser votre budget alimentation, faire des économies, et gérer vos dépenses intelligemment en France.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 70 ---

-- COURS 71 : Tri sélectif
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Tri sélectif en France : Le guide des poubelles (Jaune, Verte, Marron)',
  'tri-selectif-france-guide-poubelles-jaune-verte-marron',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre les règles du tri sélectif des déchets ménagers. Le tri est une pratique quotidienne obligatoire et un geste citoyen important pour l''environnement. Ne pas connaître les consignes de tri, c''est risquer de mal jeter ses déchets, de polluer les filières de recyclage, de recevoir des rappels à l''ordre, ou de générer des nuisances dans votre immeuble. Nous vous expliquerons la distinction entre la poubelle jaune (emballages), la poubelle verte (verre), la poubelle marron/noire (déchets non recyclables), et les points de collecte spécifiques. Maîtriser ces nouvelles règles est absolument crucial pour une intégration respectueuse de l''environnement et du cadre de vie en France.',
  'Tri sélectif en France : Jaune (emballages), Verte (verre), Marron (non-recyclable). Les nouvelles règles et points de collecte. Un geste éco-citoyen !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre les principes du tri sélectif en France", "Identifier les catégories de déchets pour chaque couleur de poubelle (jaune, verte, marron)", "Savoir où déposer le verre et les autres déchets spécifiques", "Maîtriser les nouvelles règles de tri et les conseils pour une bonne gestion des déchets"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  500,
  3800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 71
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Poubelle Jaune, Verte, Marron : Le guide',
  '# Poubelle Jaune, Verte, Marron : Le guide du tri sélectif

## Pourquoi c''est important ?

Le tri sélectif des déchets est une pratique environnementale et citoyenne incontournable en France. Chaque commune a ses propres consignes, mais un code couleur général vous guide : la poubelle jaune, la poubelle verte, et la poubelle marron/noire. Ne pas connaître ces distinctions, c''est risquer de mal trier vos déchets, de polluer les filières de recyclage, de ne pas respecter le règlement de votre immeuble, et de contribuer négativement à l''environnement. Pour les étudiants internationaux, souvent habitués à des systèmes de tri différents, maîtriser ce guide est absolument crucial pour une intégration respectueuse des normes françaises et pour un mode de vie plus écologique.









#### a) Ce qu''on y met
-   **Tous les emballages en carton** : Briques alimentaires (lait, jus), cartons d''emballage (céréales, gâteaux), petits cartons.





#### a) Ce qu''on y met

-   **Pas de vaisselle, de faïence, de porcelaine, de céramique, de miroirs, de verres à boire, de vitres** : Ces matériaux ne se recyclent pas avec le verre d''emballage et polluent la filière. Jetez-les dans la poubelle des déchets ménagers.




#### a) Ce qu''on y met
-   Les déchets d''hygiène (cotons-tiges, lingettes).

-   Ces déchets sont incinérés ou enfouis. L''objectif est de réduire au maximum le volume de cette poubelle.



-   Les règles de tri peuvent varier légèrement d''une commune à l''autre (jours de collecte, type de poubelles).





-   **Renseignez-vous auprès de vos voisins** ou de votre gardien sur les jours de collecte et l''emplacement des poubelles.
-   **N''ayez pas peur de poser des questions** : Les Français sont souvent attachés au tri.


-   **Laisser ses sacs poubelles à côté des conteneurs** : C''est illégal et peut entraîner des amendes.
-   **Transposer les règles de tri de son pays d''origine** sans vérifier les règles françaises.


-   🔗 [Légifrance : Code de l''Environnement (Articles sur les déchets)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006074228/) - Textes de loi.


Le tri sélectif en France est un geste citoyen essentiel. Comprenez la distinction entre la poubelle jaune (tous les emballages et papiers), les conteneurs à verre (bouteilles, pots, bocaux) et la poubelle marron/noire (déchets non recyclables). Vérifiez toujours les consignes spécifiques de votre commune (jours de collecte, types de conteneurs). Un tri efficace et conforme est absolument crucial pour respecter l''environnement, le règlement de votre immeuble, et contribuer à une meilleure gestion des déchets en France. Adoptez ce réflexe au quotidien !
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le verre : Points de collecte',
  '# Le verre : Points de collecte

## Pourquoi c''est important ?

Le tri du verre est une partie essentielle du tri sélectif en France, mais il ne se fait pas dans la poubelle jaune classique. Le verre doit être déposé dans des **points de collecte spécifiques** (colonnes à verre ou conteneurs dédiés). Ne pas connaître ces lieux de dépôt, c''est risquer de mal trier votre verre (le jeter avec les déchets ménagers ou pire, avec les emballages plastiques), ce qui pollue la filière de recyclage et ne contribue pas à l''effort environnemental. Pour les étudiants internationaux, souvent peu familiers avec ces points de collecte spécifiques, maîtriser cette information est absolument crucial pour un tri efficace et respectueux de l''environnement en France.




Le verre est un matériau 100% recyclable et à l''infini. Il est donc très important de bien le trier pour qu''il puisse être transformé en nouvelles bouteilles ou pots.





-   La poubelle jaune est une filière pour les matériaux "secs" qui sont triés par des machines. Le verre est lourd, coupant, et sale, il endommagerait les machines.

-   Ces conteneurs sont souvent de couleur **verte ou blanche**, de forme cylindrique ou rectangulaire, et disposent d''une ouverture pour y glisser les bouteilles et les pots.

-   **Oui, le verre d''emballage** : Bouteilles, pots, bocaux en verre.
-   **Non** : La vaisselle (assiettes, tasses), la faïence, la porcelaine, les miroirs, les vitres, les verres à boire (verre à pied, gobelets), les ampoules, les pare-brise de voiture. Ces matériaux ont une composition chimique différente et ne peuvent pas être recyclés avec le verre d''emballage. Jetez-les dans la poubelle des déchets ménagers non recyclables.




#### a) Carte interactive des points d''apport volontaire (PAV)
-   La plupart des communes ont une carte interactive sur leur site internet qui indique l''emplacement de tous les points de collecte (verre, papier, textiles).
-   Recherchez "Point d''apport volontaire verre [nom de votre ville]" ou "où jeter le verre [nom de votre ville]".








-   Glissez les bouteilles et les pots dans l''ouverture du conteneur.
-   **Ne laissez pas le verre à côté du conteneur.** C''est illégal, sale, et dangereux.










-   **Ne jetez rien d''autre que du verre d''emballage** dans les conteneurs à verre.




-   🔗 [Légifrance : Code de l''Environnement (Articles sur les déchets)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006074228/) - Textes de loi.


Le tri du verre en France se fait spécifiquement dans des conteneurs dédiés (souvent verts ou blancs) et non dans la poubelle jaune. Videz vos bouteilles, pots et bocaux, retirez les bouchons, et déposez-les dans le point de collecte le plus proche de chez vous. Vérifiez les consignes de votre commune (sur le site de la mairie) pour localiser ces points. Ne jetez pas de vaisselle ou de miroirs avec le verre d''emballage. Maîtriser cette spécificité est absolument crucial pour un tri efficace, respectueux de l''environnement, et conforme aux règles locales en France.
',
  2,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Compostage : Nouvelles règles',
  '# Compostage : Nouvelles règles

## Pourquoi c''est important ?

Le compostage des biodéchets (restes alimentaires, déchets verts) est devenu un enjeu majeur de la transition écologique en France. Depuis le 1er janvier 2024, il est obligatoire pour les collectivités territoriales de proposer une solution de tri à la source des biodéchets à tous les habitants. Pour les étudiants internationaux, cette nouvelle règle est absolument cruciale : elle impacte directement la manière dont vous allez gérer vos déchets alimentaires et contribue à réduire l''incinération et l''enfouissement. Ne pas connaître ces nouvelles règles, c''est risquer de mal trier, de polluer, ou de ne pas profiter des solutions mises en place par votre commune. Maîtriser le compostage est fondamental pour un mode de vie plus écologique et respectueux de l''environnement en France.


-   Comprendre l''obligation de tri à la source des biodéchets depuis 2024.
-   Savoir les solutions de compostage proposées par les collectivités (composteurs individuels, collectifs, points d''apport).





### 1. L''obligation de tri à la source des biodéchets (depuis 2024)


-   Depuis le **1er janvier 2024**, toutes les collectivités territoriales (communes, intercommunalités) ont l''obligation de proposer à leurs habitants une solution pour trier leurs biodéchets à la source.

-   **Restes alimentaires** : Épluchures de fruits et légumes, restes de repas (viande, poisson, pain), coquilles d''œufs, marc de café, sachets de thé.





-   Si vous vivez en maison avec un jardin, votre commune peut vous proposer l''achat d''un composteur à un tarif réduit, ou des formations pour apprendre à composter.

-   De plus en plus d''immeubles disposent de composteurs partagés, souvent gérés par les résidents ou le syndic.
-   **Renseignez-vous** : Demandez à votre propriétaire, à votre agence, à votre syndic de copropriété, ou à vos voisins s''il y a un composteur collectif dans votre immeuble ou quartier.

#### c) Points d''apport volontaire (PAV) pour biodéchets
-   Dans certaines villes, des bacs spécifiques sont installés dans l''espace public (sur les trottoirs) pour collecter les biodéchets.
-   **Localisation** : Votre mairie ou intercommunalité vous fournira une carte de ces points d''apport volontaire.






-   Un bon compost nécessite un équilibre entre matières "vertes" (humides : épluchures, restes) et matières "brunes" (sèches : feuilles mortes, petits branchages, carton brun).

-   Généralement, on évite de mettre de la viande, du poisson, ou des restes laitiers cuits dans un composteur "maison" ou collectif, car cela peut attirer les nuisibles et dégager des mauvaises odeurs. Les restes de repas doivent être très limités.

-   Les biodéchets doivent être déposés en vrac ou dans des sacs compostables (en amidon de maïs, par exemple) si la collectivité l''autorise. Pas de sacs plastiques classiques.





-   **Si vous êtes en appartement**, demandez à votre syndic ou à vos voisins s''il y a un composteur collectif.
-   **Le compostage réduit significativement le volume de votre poubelle** d''ordures ménagères.
-   **N''ayez pas peur des odeurs** : Un compost bien géré ne sent pas mauvais.
-   **C''est un geste écologique simple** qui fait une réelle différence.


-   **Ne pas tenir compte des règles spécifiques** d''un composteur collectif.


-   🔗 [Légifrance : Code de l''Environnement (Articles sur les déchets)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006074228/) - Textes de loi.


Depuis le 1er janvier 2024, le tri à la source des biodéchets (restes alimentaires, petits déchets verts) est obligatoire en France. Votre commune propose des solutions : composteurs individuels, collectifs d''immeuble, ou points d''apport volontaire. Renseignez-vous auprès de votre mairie pour connaître les dispositifs près de chez vous. Utilisez un seau à biodéchets, respectez l''équilibre des matières (pas de viande, poisson, produits laitiers cuits dans la plupart des composteurs), et ne jetez pas de sacs plastiques. Maîtriser ces nouvelles règles est absolument crucial pour un mode de vie plus écologique et respectueux de l''environnement en France.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

