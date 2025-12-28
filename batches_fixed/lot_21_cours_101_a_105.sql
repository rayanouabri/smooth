-- ==========================================
-- LOT 21 : Cours 101 à 105
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 101 ---

-- COURS 91 : Coiffeur / Barbier
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Coiffeur / Barbier en France : Vocabulaire, tarifs et pourboires',
  'coiffeur-barbier-france-vocabulaire-tarifs-pourboires',
  'Ce cours est essentiel pour tous les étudiants internationaux en France qui ont besoin de se couper les cheveux ou de se faire tailler la barbe. Se rendre chez le coiffeur ou le barbier dans un pays étranger peut être intimidant, surtout si l''on ne maîtrise pas le vocabulaire spécifique. Ne pas savoir exprimer ses souhaits, ou ne pas comprendre les tarifs et l''usage du pourboire, peut entraîner des déceptions (coupe non désirée) ou des coûts inattendus. Nous vous expliquerons le vocabulaire de base pour une coupe, les tarifs moyens, et les règles concernant le pourboire. Maîtriser ces informations est absolument crucial pour obtenir la coupe que vous souhaitez, gérer votre budget, et vivre une expérience sereine chez le coiffeur ou le barbier en France.',
  'Coiffeur/Barbier France : vocabulaire coupe, tarifs moyens, pourboires. Obtenez la coupe voulue sans mauvaise surprise !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le vocabulaire de base pour une coupe de cheveux ou une taille de barbe", "Identifier les tarifs moyens des coiffeurs/barbiers en France", "Savoir si et comment laisser un pourboire (service compris)", "Maîtriser les conseils pour exprimer clairement ses souhaits et obtenir la coupe désirée"]'::jsonb,
  '[]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 91
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Vocabulaire de la coupe',
  '# Vocabulaire de la coupe (Coiffeur / Barbier)

## Pourquoi c''est important ?

Se faire couper les cheveux ou tailler la barbe dans un pays étranger peut être une expérience anxiogène si vous ne maîtrisez pas le vocabulaire spécifique. Ne pas savoir exprimer clairement ce que vous souhaitez, c''est risquer de ressortir avec une coupe non désirée ou une barbe mal taillée, ce qui peut être très frustrant. Pour les étudiants internationaux, cette barrière linguistique est d''autant plus importante que les styles de coupe peuvent varier d''une culture à l''autre. Maîtriser le vocabulaire de base de la coupe et les phrases clés est absolument crucial pour communiquer efficacement avec votre coiffeur ou barbier en France et obtenir exactement ce que vous voulez.




Une bonne communication avec votre coiffeur est la garantie d''une coupe réussie.





-   **Couper un peu** : Enlever une petite longueur (ex: "deux centimètres").
-   **Dégrader** : Couper les cheveux de manière à ce qu''ils soient plus courts sur le dessus et plus longs sur les côtés ou l''arrière, pour donner du volume ou un effet de "fondu".












-   **Le meilleur moyen** : Montrez une photo sur votre smartphone de la coupe ou de la barbe que vous souhaitez. C''est le moyen le plus sûr d''être compris(e).

-   "Je voudrais me faire couper les cheveux."
-   "Je voudrais que ce soit [court/long] sur les côtés."
-   "Juste les pointes, s''il vous plaît."
-   "Vous pouvez dégrader la nuque ?"
-   "Pour la barbe, je voudrais juste l''entretenir."

#### c) N''hésitez pas à demander des précisions
-   "Vous pouvez me montrer avec les ciseaux/la tondeuse ?"
-   "C''est à quelle longueur ?"
-   "C''est assez court ?"

-   "Je peux vous montrer une photo ?"




-   **N''hésitez pas à demander si le coiffeur parle anglais** au téléphone (surtout dans les grandes villes).


-   **Laisser le coiffeur faire ce qu''il veut** si vous n''êtes pas sûr.


-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils culturels.


Maîtriser le vocabulaire de la coupe est absolument crucial pour communiquer efficacement avec votre coiffeur ou barbier en France. Utilisez des termes précis pour la longueur (pointes, court, long), les côtés (rasé, fondu, dégradé), le dessus, et la barbe. Le meilleur moyen de vous faire comprendre est d''apporter une photo de la coupe souhaitée. N''hésitez pas à poser des questions et à utiliser des gestes. Maîtriser ce vocabulaire est fondamental pour obtenir exactement la coupe que vous voulez et vivre une expérience sereine chez le coiffeur ou le barbier en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4102-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Tarifs moyens et pourboires',
  '# Tarifs moyens et pourboires (Coiffeur / Barbier)

## Pourquoi c''est important ?

Lorsque vous vous rendez chez le coiffeur ou le barbier en France, il est absolument crucial de comprendre les tarifs moyens pratiqués et la culture du pourboire. Ne pas connaître ces informations, c''est risquer des surprises sur le prix final de votre coupe ou de votre taille de barbe, ou de laisser un pourboire inapproprié (trop ou pas assez). Pour les étudiants internationaux, ces dépenses peuvent être importantes dans un budget limité. Maîtriser ces aspects est fondamental pour gérer votre budget beauté, éviter les malentendus, et vivre une expérience sereine chez le coiffeur ou le barbier en France.


-   Comprendre le principe du "pourboire" en France et s''il est obligatoire.










-   Les salons ont l''obligation d''afficher leurs tarifs à l''extérieur et à l''intérieur du salon.



#### a) "Service compris"
-   En France, le "service" (rémunération du personnel) est **inclus dans le prix** des prestations (restaurants, coiffeurs, taxis).
-   **Le pourboire n''est donc pas obligatoire.**

-   Le pourboire est un geste de remerciement et d''appréciation de la qualité du service.





-   **Taxi** : Quelques euros si le chauffeur a été agréable et que le trajet s''est bien passé.

-   Certains terminaux de paiement par carte proposent d''ajouter un pourboire.



-   Consultez les sites internet des salons, les avis clients, et vérifiez l''affichage des tarifs.

-   Demandez toujours s''il y a un tarif étudiant (sur présentation de votre carte étudiante).

#### c) Les salons de coiffure "low cost"





-   **Demandez le prix AVANT la prestation** si ce n''est pas clairement affiché ou si vous avez des doutes.
-   **N''hésitez pas à demander le tarif étudiant**.
-   **Si vous n''êtes pas satisfait(e) de la prestation**, vous n''êtes pas obligé(e) de laisser un pourboire.


-   **Laisser un pourboire par obligation** si vous n''êtes pas satisfait(e).
-   **Penser que le pourboire est inclus** dans le prix (il l''est).
-   **Se sentir mal à l''aise de ne pas laisser de pourboire**.
-   **Ne pas vérifier l''affichage des tarifs** avant de s''asseoir.


-   🔗 [Ministère de l''Économie et des Finances : Consommation](https://www.economie.gouv.fr/particuliers/consommation) - Informations générales.


Les tarifs moyens des coiffeurs/barbiers en France varient de 15€ à 30€ pour une coupe homme, et 25€ à 60€ pour une coupe femme. Le pourboire n''est pas obligatoire (le service est compris), mais il est apprécié si vous êtes satisfait(e) (quelques euros ou 5-10% du prix). Demandez le prix avant la prestation, vérifiez les affichages, et n''hésitez pas à demander un tarif étudiant. Maîtriser ces informations est absolument crucial pour gérer votre budget beauté, éviter les surprises, et vivre une expérience sereine chez le coiffeur ou le barbier en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 102 ---

-- COURS 92 : Acheter d'occasion
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Acheter d''occasion en France : Leboncoin, Vinted et bons plans',
  'acheter-occasion-france-leboncoin-vinted-bons-plans',
  'Ce cours est essentiel pour tous les étudiants internationaux en France qui souhaitent faire des économies en achetant des biens d''occasion. Le marché de l''occasion est très développé et offre de nombreuses opportunités (meubles, vêtements, livres, électronique). Ne pas connaître les plateformes fiables et les réflexes de prudence, c''est risquer des arnaques ou des déceptions. Nous vous expliquerons le fonctionnement de Leboncoin (le site de référence), les spécificités de Vinted pour les vêtements, et les bons plans pour trouver des meubles ou de l''électronique à petit prix. Maîtriser l''achat d''occasion est absolument crucial pour optimiser votre budget, équiper votre logement, et adopter un mode de consommation plus durable en France.',
  'Acheter occasion France : Leboncoin (le top), Vinted (vêtements), bons plans meubles/électronique. Économisez et consommez durable !',
  'budget_finances',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le fonctionnement de Leboncoin pour les annonces généralistes", "Identifier les spécificités de Vinted pour l''achat/vente de vêtements", "Savoir où trouver des bons plans pour les meubles et l''électronique", "Maîtriser les conseils de prudence pour éviter les arnaques à l''achat d''occasion"]'::jsonb,
  '[]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 92
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Leboncoin : Bonnes affaires et pièges',
  '# Leboncoin : Bonnes affaires et pièges (Achat d''occasion)

## Pourquoi c''est important ?

**Leboncoin** est le site de petites annonces le plus populaire en France. C''est une mine d''or pour trouver des bonnes affaires en occasion (meubles, électroménager, livres, vêtements, vélos, etc.), ce qui est absolument crucial pour les étudiants internationaux avec un budget serré. Cependant, comme toute plateforme d''annonces entre particuliers, Leboncoin présente aussi des risques d''arnaques si l''on n''est pas vigilant(e). Ne pas connaître son fonctionnement, ses avantages, et surtout ses pièges, c''est risquer de perdre de l''argent ou de se faire escroquer. Maîtriser Leboncoin est fondamental pour équiper votre logement, faire des économies, et acheter en toute sécurité en France.


-   Définir ce qu''est Leboncoin et son principe de fonctionnement.
-   Comprendre les avantages d''acheter sur Leboncoin pour les étudiants.


Leboncoin est le réflexe de millions de Français pour vendre et acheter d''occasion.



### 1. Qu''est-ce que Leboncoin et son fonctionnement ?

Le site de référence de l''occasion en France.

-   Leboncoin est une plateforme d''annonces gratuites (entre particuliers et professionnels) pour la vente et l''achat d''objets, de véhicules, d''immobilier, de services.
-   La transaction se fait généralement en direct entre l''acheteur et le vendeur.

-   **Écologique** : Contribue à l''économie circulaire.

### 2. Bonnes affaires : Ce que l''on peut trouver


-   **Conseil** : Vérifiez l''état, la propreté, et la présence de punaises de lit (un problème qui peut exister pour les meubles d''occasion).

-   **Conseil** : Testez toujours l''appareil avant d''acheter.


-   Vélos d''occasion, mais soyez vigilant(e) sur l''état et la preuve d''achat (pour éviter les vélos volés).




-   Un produit cher vendu à un prix dérisoire : **Signal d''alerte ROUGE !**

-   Le vendeur vous demande d''envoyer l''argent par Mandat Cash, Western Union, PayPal entre proches, ou virement bancaire sur un compte étranger **avant de voir le produit**. **Fuyez !**
-   **Règle d''or** : **Ne payez JAMAIS avant d''avoir vu le produit et rencontré le vendeur en personne.**

-   Des fraudeurs se font passer pour des acheteurs intéressés pour obtenir vos coordonnées bancaires, ou pour des vendeurs pour vous demander des frais d''envoi bidon.


#### e) "Livraison" ou "transporteur"
-   Le vendeur vous propose une "livraison" via un faux transporteur qui vous demandera des frais supplémentaires.

-   Lors d''un rendez-vous, le vendeur peut tenter de vous voler votre argent ou de vous menacer.





-   **Testez l''appareil électrique** : Branchez-le, allumez-le.
-   **Vérifiez l''état du meuble, du vélo**.
-   **Examinez attentivement l''article**.

#### c) Ne payez jamais à l''avance
-   Payez uniquement au moment de la remise du produit, en espèces (montant exact) ou par virement instantané (si le vendeur l''accepte et que vous le faites en direct).

-   Pour les gros montants, demandez un "chèque de banque" (émis par la banque du vendeur, qui garantit la provision).

-   Conservez l''annonce, les échanges avec le vendeur.




-   **Lisez les avis sur le vendeur** si c''est un professionnel.
-   **Si l''annonce est mal rédigée** (fautes, phrases étranges), méfiez-vous.


-   **Ne pas vérifier l''état du produit**.


-   🔗 [Service-Public.fr : Achat-vente d''objets d''occasion](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations générales.
-   🔗 [UFC-Que Choisir : Achat d''occasion](https://www.quechoisir.org/fiche-pratique-achats-d-occasion-n100508/) - Conseils aux consommateurs.


Leboncoin est une excellente plateforme pour acheter d''occasion en France (meubles, électroménager, vélos), mais la vigilance est de mise. Méfiez-vous des prix anormalement bas et des demandes de paiement à distance. **La règle d''or est de ne jamais payer avant d''avoir vu le produit et rencontré le vendeur en personne, dans un lieu public et fréquenté.** Testez toujours l''article. Maîtriser ces conseils de prudence est absolument crucial pour faire de bonnes affaires en toute sécurité, équiper votre logement à moindre coût, et éviter les arnaques.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Vinted pour les vêtements',
  '# Vinted pour les vêtements (Achat / Vente d''occasion)

## Pourquoi c''est important ?

Pour les étudiants internationaux en France, **Vinted** est devenu la plateforme incontournable pour acheter et vendre des **vêtements, accessoires, et chaussures d''occasion**. C''est un excellent moyen de renouveler sa garde-robe à petit prix, de trouver des pièces uniques, ou de gagner un peu d''argent en vendant des affaires dont vous n''avez plus besoin. Ne pas connaître Vinted, c''est se priver d''une opportunité majeure de faire des économies sur l''habillement, un poste de dépense important. Maîtriser le fonctionnement de Vinted (recherche, achat, vente, sécurité de paiement) est absolument crucial pour optimiser votre budget mode et adopter une consommation plus durable en France.


-   Définir ce qu''est Vinted et son principe de fonctionnement.
-   Comprendre les avantages d''acheter et de vendre des vêtements d''occasion sur Vinted.


Vinted a révolutionné le marché de la seconde main pour la mode. C''est une plateforme simple et très utilisée par les jeunes.



### 1. Qu''est-ce que Vinted et son principe de fonctionnement ?


-   Vinted est une application mobile et un site web qui permet aux particuliers d''acheter et de vendre des vêtements, chaussures, accessoires de mode (et aussi des livres, jeux, articles de maison) d''occasion.
-   Le principe est simple : le vendeur met en ligne des photos et une description, l''acheteur achète, et l''argent passe par Vinted.

-   **Gagner de l''argent** : Vous pouvez vendre les vêtements que vous n''utilisez plus.
-   **Écologique** : Contribue à l''économie circulaire et réduit le gaspillage.
-   **Facilité d''utilisation** : L''application est intuitive pour l''achat et la vente.



-   Utilisez les filtres de recherche : Taille, marque, couleur, type d''article, prix.

#### b) Évaluer le vendeur et l''article
-   **Lisez la description attentivement** : État de l''article (neuf avec étiquette, très bon état, bon état, satisfaisant).

-   Vous pouvez faire une offre au vendeur (bouton "Faire une offre").

-   **Paiement via la plateforme Vinted** : C''est le seul moyen sécurisé. L''argent est bloqué par Vinted et n''est versé au vendeur qu''une fois que vous avez reçu et confirmé la conformité de l''article.
-   **Protection des acheteurs** : Vinted propose une "protection acheteur" (payante, quelques euros) qui vous garantit un remboursement en cas de non-réception, de produit non conforme, ou de contrefaçon.


### 3. Vendre sur Vinted : Gagner de l''argent facilement


-   **Photos de qualité** : Prenez des photos claires de l''article sous différents angles, en montrant les défauts éventuels.
-   **Description précise** : Mentionnez la marque, la taille, l''état exact, la matière, les défauts.
-   **Prix juste** : Regardez les prix d''articles similaires pour fixer un prix compétitif.

-   Une fois l''article vendu, Vinted vous envoie un bordereau d''envoi prépayé.
-   Emballez soigneusement l''article et déposez-le en point relais dans le délai indiqué.

#### c) Réception de l''argent
-   L''argent est crédité sur votre "porte-monnaie Vinted" une fois que l''acheteur a reçu l''article et confirmé la conformité.
-   Vous pouvez ensuite utiliser cet argent pour faire d''autres achats sur Vinted, ou le transférer sur votre compte bancaire (virement SEPA).




-   Que ce soit en tant qu''acheteur ou vendeur, soyez honnête sur l''état de l''article ou sur vos attentes.



-   Votre **smartphone** (pour l''application Vinted).
-   Votre **RIB** (pour recevoir l''argent des ventes).


-   **Pour les grosses pièces**, privilégiez la remise en main propre si le vendeur l''accepte (mais attention aux risques de sécurité, voir Leboncoin).
-   **La mode est un bon moyen de s''exprimer**, et Vinted vous offre une grande liberté.


-   **Paiement hors plateforme Vinted** : C''est l''arnaque la plus courante.


-   🔗 [Vinted : Centre d''aide](https://www.vinted.fr/help) - FAQ et conseils de sécurité.


Vinted est une plateforme incontournable pour acheter et vendre des vêtements d''occasion en France. Utilisez-la pour faire des économies sur vos achats et gagner un peu d''argent en vendant vos propres affaires. Pour acheter, vérifiez la réputation du vendeur et l''état de l''article. Pour vendre, prenez de bonnes photos et décrivez précisément votre article. **Toutes les transactions doivent passer par la plateforme Vinted pour être sécurisées.** Maîtriser Vinted est absolument crucial pour optimiser votre budget mode, adopter une consommation durable, et éviter les arnaques.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 103 ---

-- COURS 93 : La Boulangerie
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La Boulangerie en France : Types de pain et politesse',
  'boulangerie-france-types-pain-politesse',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre un lieu emblématique de la vie quotidienne : la boulangerie. Le pain est un pilier de la gastronomie française, et le choix est vaste. Ne pas connaître les différents "types de pain" (tradition, baguette classique) ou les codes de politesse en boutique, c''est risquer des malentendus ou de ne pas se sentir à l''aise. Nous vous expliquerons la distinction entre la baguette "tradition" (qualité supérieure) et la baguette "classique", les autres pains, et les règles de politesse (bonjour, s''il vous plaît, merci) à utiliser. Maîtriser ces informations est absolument crucial pour faire vos achats sereinement, profiter du bon pain français, et vous intégrer aux habitudes locales.',
  'Boulangerie France : Baguette Tradition vs Classique, types de pain, politesse en boutique. Achetez votre pain avec aisance !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la distinction entre baguette "tradition" et "classique"", "Identifier les autres types de pains et de viennoiseries courantes", "Savoir comment interagir poliment avec le boulanger/la boulangère", "Maîtriser les conseils pour faire ses achats en boulangerie et profiter du pain français"]'::jsonb,
  '[]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 93
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Types de pain (Tradition vs Classique)',
  '# Types de pain (Tradition vs Classique) en Boulangerie

## Pourquoi c''est important ?

La boulangerie est un lieu emblématique de la vie française, et le pain est au cœur de la gastronomie nationale. Lorsque vous entrez dans une boulangerie en France, vous serez confronté(e) à un large choix de pains, avec des appellations spécifiques. La distinction entre la baguette "tradition" et la baguette "classique" est absolument cruciale. Ne pas connaître ces différences, c''est risquer de ne pas acheter le pain que vous désirez, de ne pas apprécier pleinement sa qualité, ou de ne pas comprendre les attentes des Français. Pour les étudiants internationaux, maîtriser ces types de pain est fondamental pour faire vos achats sereinement, profiter de la diversité du pain français, et vous intégrer aux habitudes culinaires locales.


-   Définir ce qu''est la baguette "tradition" et ses spécificités.
-   Comprendre les caractéristiques de la baguette "classique".





### 1. La baguette "Tradition" : L''excellence réglementée


-   La baguette de "Tradition Française" est une appellation protégée par un décret.

-   **Avantage** : C''est le pain de référence pour les connaisseurs.

🔗 [Légifrance : Décret n° 93-1074 du 13 septembre 1993 relatif à l''appellation de "pain de tradition française"](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000532297/) - Le texte de loi.

### 2. La baguette "Classique" (ou "Courante") : L''option du quotidien


-   La baguette classique n''est pas soumise aux mêmes règles que la tradition.

-   **Avantage** : C''est l''option la plus économique et la plus répandue.





-   **Pain au chocolat** (ou "chocolatine" dans le Sud-Ouest) : Pâte feuilletée avec du chocolat.





-   Essayez la "tradition" et la "classique" pour voir votre préférence. Beaucoup de Français ont leur préférée !

-   N''hésitez pas à demander "Quel pain me conseillez-vous pour accompagner le fromage ?" ou "Quel pain est le plus croustillant ?" (Voir leçon suivante sur la politesse).



-   Conservez le pain dans un torchon propre pour qu''il reste frais. Ne le mettez pas au réfrigérateur, il durcit plus vite.




-   **La boulangerie est un lieu de vie** : Profitez de l''odeur du bon pain !
-   **Les prix sont affichés** : N''hésitez pas à les consulter.
-   **Demandez "une baguette" ou "une tradition"** pour commander.


-   **Confondre "pain" et "viennoiserie"**.


-   🔗 [Ministère de l''Agriculture et de la Souveraineté Alimentaire : La gastronomie française](https://agriculture.gouv.fr/la-gastronomie-francaise) - Informations générales.


En boulangerie en France, la distinction entre la baguette "tradition" (ingrédients nobles, pétrissage sur place, qualité supérieure) et la baguette "classique" (plus simple, moins chère) est cruciale. Goûtez les deux pour choisir votre préférée. N''hésitez pas à explorer les autres types de pains (campagne, céréales) et les viennoiseries (croissants, pains au chocolat). Maîtriser ces informations est fondamental pour faire vos achats sereinement, profiter de la richesse du pain français, et vous intégrer aux habitudes culinaires locales.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La politesse en boutique',
  '# La politesse en boutique (Boulangerie)

## Pourquoi c''est important ?

Lorsque vous entrez dans une boulangerie ou tout autre commerce en France, il existe des codes de politesse non écrits mais très respectés. Ne pas les connaître, c''est risquer de paraître impoli(e), mal élevé(e), ou de créer un malaise avec le personnel. Un simple "Bonjour" ou "Merci" peut faire toute la différence dans la qualité de l''accueil et du service que vous recevez. Pour les étudiants internationaux, souvent peu familiers avec ces usages, maîtriser la politesse en boutique est absolument crucial pour des interactions agréables, une bonne intégration, et pour être servi(e) avec le sourire. C''est un aspect essentiel du savoir-vivre au quotidien.


-   Comprendre l''importance des formules de politesse en commerce.


La politesse est une marque de respect universelle, mais ses formes varient d''une culture à l''autre.



### 1. L''importance des formules de politesse en commerce

Le respect des "bonnes manières".


#### b) Qualité de l''accueil
-   Un "Bonjour" et un "Merci" vous assureront généralement un accueil plus chaleureux et un service plus agréable.


-   Respecter ces codes est un signe d''intégration et d''adaptation à la culture française.


Les bases de l''interaction.

-   **"Bonjour Madame" ou "Bonjour Monsieur"** : Dites-le en entrant dans la boulangerie, en regardant le personnel.
-   Même si vous êtes le seul client, dites "Bonjour".

-   **"Merci, au revoir"** : Dites-le en partant, après avoir été servi(e) et payé(e).
-   "Bonne journée" ou "Bonne fin de journée" si c''est le cas.



-   **"Je voudrais..."** ou **"Je souhaiterais..."** : C''est la formule la plus courante.
    -   "Je voudrais une baguette tradition, s''il vous plaît."
    -   "Je souhaiterais un croissant, s''il vous plaît."
-   **"Vous avez... ?"** : "Vous avez des pains aux céréales, s''il vous plaît ?"
-   **"Est-ce que je peux avoir... ?"** : Un peu plus direct, mais acceptable.

-   **"Une" ou "Un"** : "Une baguette", "un croissant".
-   **"Deux" ou "Trois"** : "Deux pains au chocolat".

-   "C''est chaud ?" (pour une viennoiserie).
-   "C''est frais ?" (pour un pain).
-   "Quel pain vous conseillez ?"

-   "C''est combien, s''il vous plaît ?" ou "Combien je vous dois ?"
-   "Je peux payer par carte ?"
-   "Voilà, merci." (en tendant l''argent ou la carte).


Soyez à l''aise.




#### d) N''hésitez pas à demander des précisions
-   Si le boulanger vous propose quelque chose que vous ne comprenez pas, demandez "Qu''est-ce que c''est ?" ou "C''est quoi comme pain ?".

#### e) La "Queue" (file d''attente)




-   **Même si vous êtes pressé(e), prenez le temps de dire "Bonjour" et "Merci".**
-   **N''ayez pas peur de pratiquer votre français** : C''est un bon entraînement.


-   **Ne pas dire "Bonjour" en entrant** : Très impoli.
-   **Commander sans "s''il vous plaît" ou "je voudrais"** : Trop direct et impoli.
-   **Ne pas dire "Merci, au revoir" en partant**.
-   **Se sentir mal à l''aise de poser des questions** sur les produits.


-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils culturels.
-   🔗 [TV5 Monde : Le "tu" ou le "vous"](https://apprendre.tv5monde.com/fr/exercices/b1-intermediaire/tu-ou-vous) - Pour les codes de politesse.


La politesse en boulangerie (et en commerce) est essentielle en France. Dites toujours "Bonjour Madame/Monsieur" en entrant, utilisez "Je voudrais..." ou "Je souhaiterais..." avec "s''il vous plaît" pour commander, et "Merci, au revoir" en partant. Faites la queue et soyez patient(e). Maîtriser ces codes est absolument crucial pour des interactions agréables, un bon accueil, et une intégration réussie dans la vie quotidienne française. C''est un petit effort qui fait une grande différence.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 104 ---

-- COURS 94 : Le Café en terrasse
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le Café en terrasse en France : Prix, savoir-vivre et culture',
  'cafe-terrasse-france-prix-savoir-vivre-culture',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre un rituel social emblématique : prendre un café en terrasse. Ce moment de détente est une institution, mais il a ses propres codes, notamment en matière de prix (différents si "au comptoir" ou "en salle"). Ne pas connaître ces nuances, c''est risquer de payer plus cher, de ne pas se sentir à l''aise, ou de ne pas profiter pleinement de l''expérience. Nous vous expliquerons la distinction entre les prix "au comptoir" et "en salle", et la tolérance à "rester deux heures avec un seul café". Maîtriser ces informations est absolument crucial pour faire vos choix de consommation intelligemment, gérer votre budget, et vous intégrer à une pratique culturelle française. ',
  'Café en terrasse France : prix au comptoir vs en salle, rester 2h avec 1 café, savoir-vivre. Profitez de l''expérience sans vous ruiner !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la différence de prix entre un café "au comptoir" et "en salle/terrasse"", "Savoir commander son café et s''adapter aux codes du service", "Identifier la tolérance à rester longtemps avec une seule consommation", "Maîtriser les conseils pour profiter de l''expérience café en terrasse et gérer son budget"]'::jsonb,
  '[]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 94
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Prix au comptoir vs en salle',
  '# Prix au comptoir vs en salle (Le Café en terrasse)

## Pourquoi c''est important ?

Lorsque vous commandez un café (ou toute autre boisson) dans un café ou un bar en France, le prix peut varier considérablement selon que vous le consommez **"au comptoir"** (debout, au bar) ou **"en salle" / "en terrasse"** (assis à une table). Ne pas connaître cette distinction est absolument crucial pour les étudiants internationaux, car cela peut vous faire payer votre café jusqu''à deux fois plus cher ! Une mauvaise information peut impacter directement votre budget quotidien et votre expérience. Maîtriser cette nuance est fondamental pour faire des économies, commander intelligemment, et profiter pleinement de la culture des cafés français sans mauvaise surprise.


-   Définir ce qu''est le service "au comptoir" et ses avantages.
-   Comprendre le principe du service "en salle" ou "en terrasse" et son coût.





### 1. Le prix "au comptoir" : L''option économique


-   "Au comptoir" signifie que vous commandez votre boisson directement au bar et la consommez **debout, au bar**.
-   **Prix réduit** : Le prix d''un café (ou d''autres boissons) est significativement moins cher "au comptoir" qu''en salle ou en terrasse.

-   **Économie** : C''est l''option la plus économique pour un café rapide.
-   **Convivialité informelle** : C''est un lieu d''échanges rapides avec le barman ou d''autres clients.

-   Ceux qui aiment l''ambiance du bar.

### 2. Le prix "en salle" ou "en terrasse" : Le confort du service


-   "En salle" signifie que vous vous asseyez à une table à l''intérieur du café.
-   "En terrasse" signifie que vous vous asseyez à une table à l''extérieur.
-   **Prix plus élevé** : Le prix de la consommation est plus élevé qu''au comptoir.






-   Les terrasses occupent l''espace public et sont soumises à une taxe payée à la mairie. Ce coût est répercuté sur le consommateur.

-   Il est de coutume de payer pour le service et le confort d''être assis.



-   **Privilégiez le comptoir.** C''est l''option la plus économique et rapide pour un café rapide.

-   **Choisissez la salle ou la terrasse.** Prévoyez un budget plus élevé, mais profitez du confort et de l''ambiance.

-   Les prix "au comptoir" et "en salle/terrasse" doivent être clairement affichés sur la carte ou sur un panneau à l''intérieur du café.

-   "Un café, s''il vous plaît, **au comptoir**." ou "Un café, s''il vous plaît, **en terrasse**."
-   "Je voudrais un expresso, s''il vous plaît, **pour emporter**." (option à emporter souvent au prix du comptoir).




-   **N''hésitez pas à demander "Le café est à combien au comptoir ?"** si les prix ne sont pas clairs.
-   **Les cafés sont des lieux de vie** : Profitez de l''ambiance.


-   **S''asseoir en terrasse sans connaître les prix** et être surpris(e) par la facture.
-   **Payer un prix "en salle" pour une consommation "au comptoir"**.
-   **Commander un café et s''asseoir en terrasse** si vous avez commandé au prix comptoir.
-   **Ne pas tenir compte de l''impact sur son budget**.


-   🔗 [Légifrance : Code de la Consommation (Affichage des prix)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006069565/) - Obligation d''affichage des prix.
-   🔗 [Union des Métiers et des Industries de l''Hôtellerie (UMIH)](https://www.umih.fr/) - Organisation professionnelle des cafés/restaurants.


Lorsque vous prenez un café en France, le prix varie selon que vous le consommez "au comptoir" (debout au bar, moins cher) ou "en salle/terrasse" (assis à une table, plus cher). Cette différence est due au coût du service et de l''occupation de l''espace. Choisissez l''option adaptée à votre budget et à votre besoin (rapidité ou détente). Lisez toujours la carte et commandez clairement "au comptoir" ou "en terrasse". Maîtriser cette nuance est absolument crucial pour faire des économies et profiter pleinement de la culture des cafés français sans mauvaise surprise.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Rester 2h avec un seul café : C''est possible',
  '# Rester 2h avec un seul café : C''est possible (Café en terrasse)

## Pourquoi c''est important ?

Dans de nombreux pays, consommer une seule boisson et rester longtemps à une table en terrasse peut être mal vu ou implicitement découragé. En France, particulièrement dans les cafés et brasseries, il est tout à fait **possible et acceptable de rester longtemps (une ou deux heures, voire plus) avec une seule consommation**, surtout si vous êtes en terrasse. Ne pas connaître cette tolérance, c''est risquer de se sentir mal à l''aise, de commander d''autres boissons inutilement, ou de ne pas profiter pleinement de l''ambiance des cafés français. Pour les étudiants internationaux, c''est absolument crucial pour se détendre, travailler, lire, ou discuter avec des amis sans pression, et sans grever son budget.


-   Maîtriser les conseils pour profiter de l''ambiance des cafés sans pression de consommation.


Les cafés et les terrasses sont des lieux de vie sociale importants en France. On n''y vient pas seulement pour consommer.





#### a) Le concept de "café" comme espace social
-   En France, le café est plus qu''un simple lieu de consommation. C''est un espace social où l''on vient lire le journal, travailler, discuter, ou simplement observer la vie urbaine.
-   **Liberté de rester** : Il est tout à fait courant et acceptable de commander une seule boisson (un café, une boisson fraîche) et de rester une ou deux heures, voire plus, surtout si la terrasse n''est pas bondée.

-   Contrairement à certains pays où l''on vous demandera de commander régulièrement, en France, les serveurs ne viendront pas vous presser de consommer.


Soyez attentif à l''affluence.

-   C''est l''endroit idéal pour rester longtemps avec une seule consommation, surtout si le temps est beau.

-   Si le café n''est pas bondé, vous pouvez également rester longtemps en salle.
-   **Attention aux heures de pointe** : Pendant le déjeuner (12h-14h) ou l''heure de l''apéro (18h-20h), les tables sont très demandées. Il est alors moins bien vu de monopoliser une table avec une seule boisson. Adaptez-vous.



Profitez de l''ambiance.

-   Avec votre ordinateur portable et un casque, c''est un environnement stimulant pour travailler ou étudier.


-   Les terrasses sont un formidable lieu d''observation de la vie française. Écoutez les conversations, regardez les passants. C''est une immersion culturelle.

-   C''est un lieu idéal pour discuter avec des amis sans pression de consommation.

### 4. Conseils pour profiter de l''ambiance des cafés sans pression



-   Si vous comptez rester longtemps, choisissez une table qui n''est pas en plein milieu du passage ou qui ne sera pas la première à être réclamée en cas d''affluence.



-   Si vous avez occupé une table longtemps avec une seule consommation, il est de bon ton de laisser un petit pourboire au serveur pour le remercier du service et de l''espace. (Voir cours 91.2).




-   **N''ayez pas peur de demander au serveur si le Wi-Fi est disponible**.
-   **La culture du café est très française**, c''est une belle opportunité.


-   **Se sentir mal à l''aise de rester longtemps** : C''est une habitude française.
-   **Ne pas tenir compte de l''affluence** : Monopoliser une table à l''heure de pointe est mal vu.
-   **Ne pas commander du tout** et s''asseoir.


-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils culturels.
-   🔗 [UMIH (Union des Métiers et des Industries de l''Hôtellerie)](https://www.umih.fr/) - Organisation professionnelle.


En France, il est tout à fait possible et acceptable de rester longtemps (une ou deux heures) avec une seule consommation dans un café, surtout en terrasse. C''est un espace social où l''on vient se détendre, travailler, lire ou discuter, sans pression de consommation. Adaptez-vous à l''affluence (évitez les heures de pointe pour monopoliser une table), commandez dès le début, et soyez discret(e). Laisser un petit pourboire est un geste apprécié. Maîtriser cette tolérance est absolument crucial pour les étudiants internationaux afin de profiter pleinement de l''ambiance des cafés français sans stress, et d''optimiser votre temps libre.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 105 ---

-- COURS 95 : Tabac
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Tabac en France : Où acheter et interdictions de fumer',
  'tabac-france-acheter-interdictions-fumer',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre les règles et les lieux d''achat du tabac. La législation française concernant le tabac est stricte (interdiction de fumer dans les lieux publics, vente limitée) et les prix sont élevés. Ne pas connaître ces règles, c''est risquer des amendes, des problèmes de santé, ou de ne pas savoir où se procurer ses cigarettes. Nous vous expliquerons que la vente est réservée aux "bureaux de tabac", et l''interdiction de fumer dans les lieux publics (y compris les terrasses couvertes). Maîtriser ces informations est absolument crucial pour respecter la loi, protéger votre santé et celle des autres, et éviter les désagréments. ',
  'Tabac France : Bureaux de tabac uniquement, interdiction de fumer lieux publics. Respectez la loi et protégez votre santé !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre que la vente de tabac est limitée aux bureaux de tabac", "Identifier les règles d''interdiction de fumer dans les lieux publics (y compris certaines terrasses)", "Savoir le prix élevé du tabac en France et son impact sur le budget", "Maîtriser les conseils pour respecter la législation et protéger sa santé"]'::jsonb,
  '[]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 95
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Bureaux de tabac uniquement',
  '# Bureaux de tabac uniquement (Achat de tabac en France)

## Pourquoi c''est important ?

Si vous êtes fumeur(se) et que vous arrivez en France, il est absolument crucial de connaître les règles strictes concernant la vente de tabac. En France, la vente de cigarettes, de tabac à rouler, ou de cigares est un **monopole d''État** et est réservée exclusivement aux **bureaux de tabac**. Ne pas connaître cette spécificité, c''est risquer de chercher vos cigarettes dans les supermarchés, les pharmacies, ou les épiceries (où elles ne sont pas vendues), de perdre du temps, ou de ne pas savoir où vous approvisionner. Maîtriser ce point est fondamental pour vos habitudes de consommation et pour respecter la législation française.


-   Définir ce qu''est un bureau de tabac en France.
-   Comprendre le monopole d''État sur la vente de tabac.







#### a) Le monopole d''État
-   En France, la vente au détail de tabacs manufacturés (cigarettes, tabac à rouler, cigares, etc.) est un monopole d''État. Seuls les **buralistes** (qui sont des commerçants privés, mais mandatés par l''État) sont autorisés à vendre du tabac.

-   Vous reconnaîtrez facilement un bureau de tabac à son enseigne distinctive : un **losange rouge** (le "carotte").









-   La vente de tabac est **interdite aux moins de 18 ans**. Le buraliste peut vous demander une pièce d''identité pour vérifier votre âge.

-   **Pourquoi ?** : C''est une politique de santé publique qui vise à décourager la consommation.




#### b) Respectez l''âge légal


-   Si vous achetez du tabac à l''étranger et que vous le ramenez en France, attention aux limites de quantités imposées par la douane. Au-delà, vous risquez une amende et la saisie de votre tabac.


-   Votre **pièce d''identité** (passeport, titre de séjour) pour prouver votre âge.


-   **Si vous essayez d''arrêter de fumer**, les prix élevés en France peuvent être un encouragement.
-   **N''hésitez pas à demander conseil au buraliste** si vous cherchez un produit spécifique.


-   **Chercher du tabac ailleurs qu''en bureau de tabac**.
-   **Tenter d''acheter du tabac si vous avez moins de 18 ans**.
-   **Ramener trop de tabac de l''étranger** : Risque d''amende douanière.


-   🔗 [Tabac Info Service (39 89)](https://www.tabac-info-service.fr/) - Pour l''aide au sevrage tabagique.


En France, la vente de tabac est un monopole d''État, réservée exclusivement aux bureaux de tabac (identifiables par un losange rouge). La vente est interdite aux moins de 18 ans et les prix sont très élevés. Ne cherchez pas de cigarettes ailleurs et respectez les limites douanières si vous ramenez du tabac de l''étranger. Maîtriser ces informations est absolument crucial pour acheter votre tabac en toute conformité, respecter la législation, et protéger votre santé et votre budget en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Interdiction de fumer dans les lieux publics',
  '# Interdiction de fumer dans les lieux publics

## Pourquoi c''est important ?

En France, la législation concernant le tabagisme est très stricte. Il est **interdit de fumer (et de vapoter) dans tous les lieux publics fermés et couverts**, et dans certains lieux ouverts. Ne pas connaître ces règles, c''est risquer des amendes salées, des rappels à l''ordre, et de ne pas respecter la santé des autres. Pour les étudiants internationaux, souvent habitués à des législations différentes, comprendre ces interdictions est absolument crucial pour respecter la loi, protéger votre santé et celle de votre entourage, et éviter les désagréments. Maîtriser ces informations est fondamental pour une vie quotidienne sereine et conforme aux normes françaises.


-   Comprendre le principe général de l''interdiction de fumer dans les lieux publics.


La loi Évin de 1991 et ses décrets d''application ont fortement restreint la consommation de tabac dans les espaces publics en France.





-   **Sanctions** : Amende forfaitaire pour le fumeur (68€) et pour l''exploitant du lieu (jusqu''à 750€) si l''interdiction n''est pas respectée.

-   L''interdiction s''applique également à tous les lieux de travail.



### 2. Lieux où l''interdiction est étendue


-   L''interdiction de fumer s''applique dans les enceintes des établissements d''enseignement (écoles, collèges, lycées, universités), y compris dans les **cours de récréation, les espaces extérieurs des campus**, et les lieux où se déroulent les activités sportives.


-   **Terrasses ouvertes** : Si la terrasse est ouverte (au moins un côté non fermé par une paroi fixe), il est possible de fumer. Vérifiez l''affichage.





-   Chez vous, dans un logement privé (sauf si le propriétaire l''interdit dans le bail).



-   Soyez attentif aux panneaux "Interdiction de fumer" ou "Espace non-fumeur".

-   Si vous êtes dans un café ou un restaurant, sortez à l''extérieur (sur la terrasse ouverte ou sur le trottoir) pour fumer.

-   Ne jetez jamais vos mégots par terre. C''est une infraction et une pollution.








-   **Ne pas tenir compte des terrasses "closes et couvertes"** (qui sont interdites).
-   **Penser que les règles sont les mêmes que dans votre pays d''origine**.


-   🔗 [Légifrance : Code de la Santé Publique (Articles sur l''interdiction de fumer)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006073189/) - Textes de loi (Article L3512-1 et suivants).
-   🔗 [Tabac Info Service (39 89)](https://www.tabac-info-service.fr/) - Pour l''aide au sevrage tabagique.


En France, il est strictement interdit de fumer et de vapoter dans tous les lieux publics fermés et couverts, y compris les transports en commun et les enceintes universitaires. L''interdiction s''étend aux terrasses de cafés/restaurants qui sont closes et couvertes. Vous pouvez fumer dans la rue ou sur les terrasses ouvertes, en utilisant un cendrier. Maîtriser ces règles est absolument crucial pour respecter la loi (éviter les amendes), protéger votre santé et celle des autres, et vous intégrer aux normes de vie françaises. Soyez vigilant(e) et respectueux(se).
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

