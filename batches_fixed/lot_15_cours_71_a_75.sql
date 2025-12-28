-- ==========================================
-- LOT 15 : Cours 71 à 75
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 71 ---

-- COURS 72 : La Poste
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '378a3239-7926-4866-8618-0f46b0407d39',
  'La Poste en France : Envoyer une lettre, un colis et le recommandé',
  'poste-france-envoyer-lettre-colis-recommande',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui auront besoin d''utiliser les services postaux. La Poste est un acteur central pour l''envoi de courrier, de colis, et surtout pour les démarches administratives importantes (lettre recommandée avec accusé de réception). Nous vous expliquerons comment envoyer une lettre simple, les différentes options pour l''envoi de colis, l''importance cruciale de la lettre recommandée avec accusé de réception (LRAR) comme preuve juridique, et comment récupérer un colis en point relais. Maîtriser ces services est absolument crucial pour communiquer, gérer vos démarches administratives, et recevoir/envoyer des biens en toute sécurité en France.',
  'La Poste France : envoyer lettre/colis, lettre recommandée (LRAR) pour preuve juridique, récupérer colis en point relais. Maîtrisez vos envois !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre les services d''envoi de lettres et de colis de La Poste", "Identifier l''importance de la lettre recommandée avec accusé de réception (LRAR)", "Savoir comment envoyer un courrier ou un colis depuis un bureau de poste", "Maîtriser les conseils pour récupérer un colis en point relais et suivre ses envois"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  500,
  3800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 72
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Envoyer une lettre',
  '# Envoyer une lettre en France

## Pourquoi c''est important ?

Même à l''ère du numérique, l''envoi de lettres reste une réalité en France, notamment pour des correspondances officielles ou personnelles. Comprendre comment envoyer une lettre simple (choix du timbre, adresse, boîte aux lettres) est absolument crucial pour les étudiants internationaux afin de communiquer avec les administrations (bien que le recommandé soit souvent préféré), d''envoyer des documents à des proches, ou de gérer des formalités. Ne pas savoir affranchir correctement une lettre, ou ne pas connaître le fonctionnement du système postal, peut entraîner des retards, des retours à l''envoyeur, ou des pertes de courrier. Maîtriser cette démarche est fondamental pour une communication écrite efficace en France.




La Poste est l''opérateur postal public en France. Elle gère l''envoi et la distribution du courrier.





-   Rédigez votre lettre clairement, en français (si pour l''administration).

#### b) L''enveloppe



#### a) L''adresse du destinataire
-   **En bas à droite de l''enveloppe** :
    -   Nom et prénom(s) ou Nom de l''entreprise / Administration.
    -   Numéro et nom de la rue (ex: "10, Rue de la Paix").
    -   Code postal et ville (ex: "75002 PARIS").
-   **Soyez précis** : Une erreur dans l''adresse peut entraîner un retard ou une perte.

#### b) L''adresse de l''expéditeur (vous)
-   **En haut à gauche de l''enveloppe** :

#### c) Ne pas mettre d''éléments superflus


Le coût de l''envoi.

-   Le timbre est la preuve que vous avez payé pour l''envoi de votre lettre.
-   Son coût dépend du poids de la lettre et de la rapidité d''acheminement souhaitée.

-   **Bureaux de poste** : Le plus simple, l''agent vous conseillera sur le bon timbre.

-   **Lettre Prioritaire** (ou "Lettre Rouge") : Plus rapide, délai indicatif J+1. Pour les envois un peu plus urgents.

-   Collez le timbre en **haut à droite de l''enveloppe**.



-   Les lettres sont déposées dans les boîtes aux lettres jaunes de La Poste, que vous trouverez dans la rue, devant les bureaux de poste, ou dans les halls d''immeubles.


-   Vous pouvez également déposer votre lettre au guichet d''un bureau de poste.


-   L''**adresse du destinataire**.


-   **Vérifiez l''adresse du destinataire deux fois** avant d''affranchir.


-   **Ne pas mettre l''adresse de l''expéditeur**.


-   🔗 [La Poste : Les tarifs d''affranchissement](https://www.laposte.fr/tarifs-postaux) - Pour connaître les prix des timbres.
-   🔗 [Ministère de l''Économie et des Finances : La poste](https://www.economie.gouv.fr/particuliers/la-poste) - Informations générales.


Envoyer une lettre simple en France implique de bien la préparer (contenu, enveloppe), de l''adresser correctement (destinataire en bas à droite, expéditeur en haut à gauche), de l''affranchir avec le bon timbre (Lettre Verte ou Prioritaire), et de la déposer dans une boîte aux lettres jaune de La Poste. Vérifiez toujours les adresses et le poids pour un affranchissement correct. Maîtriser cette démarche est fondamental pour vos communications écrites courantes et pour comprendre le fonctionnement du service postal en France.
',
  1,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le Recommandé (LRAR) : Preuve juridique',
  '# Le Recommandé (LRAR) : Preuve juridique

## Pourquoi c''est important ?

Lorsque vous envoyez des documents importants à l''administration (préfecture, CAF, impôts), à votre propriétaire (lettre de congé), ou à d''autres organismes, la **lettre recommandée avec accusé de réception (LRAR)** est le seul moyen d''avoir une preuve juridique et incontestable de votre envoi et de sa réception. Ne pas utiliser la LRAR pour des correspondances cruciales, c''est prendre le risque que votre interlocuteur conteste avoir reçu votre courrier, vous plaçant dans une position délicate en cas de litige. Pour les étudiants internationaux, cette formalité est absolument cruciale pour protéger vos droits, sécuriser vos démarches administratives, et éviter des problèmes financiers ou juridiques.


-   Définir ce qu''est une lettre recommandée avec accusé de réception (LRAR).
-   Comprendre sa valeur juridique comme preuve d''envoi et de réception.
-   Identifier les situations où l''envoi en LRAR est indispensable.


La LRAR est un service proposé par La Poste qui garantit la traçabilité et la preuve d''un envoi.



### 1. Qu''est-ce qu''une Lettre Recommandée avec Accusé de Réception (LRAR) ?


-   La LRAR est un service d''envoi de courrier qui garantit :
-   **Valeur juridique** : La date de dépôt et la date de réception sont opposables aux tiers (c''est-à-dire qu''elles ont une valeur légale et ne peuvent pas être contestées).

#### b) Le contenu n''est pas certifié
-   La LRAR certifie l''envoi et la réception de l''enveloppe, mais pas son contenu.

### 2. Les situations où l''envoi en LRAR est indispensable


-   **Lettre de congé du locataire** : Pour quitter votre logement, votre lettre de congé doit impérativement être envoyée en LRAR. C''est la date de réception qui déclenche votre préavis. (Voir cours 31.2).
-   **Mise en demeure au propriétaire** : Si votre dépôt de garantie n''est pas restitué. (Voir cours 32.4).

-   **Contestation d''opérations bancaires** : Si vous contestez des frais ou des prélèvements.

-   **Résiliation de contrat d''assurance** (habitation, mutuelle).

-   **Préfecture** : Pour certaines demandes (recours, contestations), ou pour signaler un problème si l''ANEF est bloquée.





#### a) Préparer votre lettre et l''enveloppe

-   Demandez un "bordereau de lettre recommandée avec accusé de réception".
-   Remplissez les informations de l''expéditeur (vous) et du destinataire.
-   L''agent de La Poste pèsera votre lettre, collera le timbre, et vous remettra le **récépissé de dépôt**. C''est votre première preuve.

#### c) L''accusé de réception
-   Le destinataire signera l''avis de réception. Ce petit carton vous sera renvoyé par La Poste.
-   **Conservez précieusement ce carton** : C''est votre preuve de la date de réception.

-   Vous pouvez suivre l''acheminement de votre LRAR sur le site de La Poste (`laposte.fr`) grâce au numéro de suivi figurant sur votre récépissé de dépôt.

-   La Poste propose un service de LRE sur son site. Elle a la même valeur juridique qu''une LRAR papier, mais nécessite que le destinataire ait une identité numérique ou accepte la réception électronique.




-   **N''attendez pas le dernier moment pour envoyer votre LRAR** : Laissez un délai pour l''acheminement.
-   **Vérifiez toujours l''adresse du destinataire** sur le contrat ou le site officiel.
-   **Gardez précieusement le récépissé de dépôt et l''accusé de réception** : C''est votre protection.
-   **Faites une copie de la lettre** avant de l''envoyer.
-   **Si l''accusé de réception ne vous revient pas** : Suivez votre courrier sur le site de La Poste. Si le destinataire n''a pas réclamé le courrier, la loi considère que vous avez rempli votre obligation.


-   **Perdre le récépissé de dépôt ou l''accusé de réception** : Vous perdez votre preuve.
-   **Se tromper sur l''adresse du destinataire** : Votre courrier ne parviendra pas.
-   **Jeter sa copie de la lettre** après l''envoi.




L''envoi de documents importants par lettre recommandée avec accusé de réception (LRAR) est une formalité administrative absolument cruciale en France. C''est le seul moyen d''avoir une preuve juridique et incontestable de votre envoi et de sa date de réception. Utilisez la LRAR pour votre lettre de congé de location, la clôture de votre compte bancaire, ou toute autre correspondance essentielle. Conservez précieusement le récépissé de dépôt et l''avis de réception. Maîtriser ce service postal est fondamental pour protéger vos droits, sécuriser vos démarches administratives, et éviter les litiges.
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
  'Récupérer un colis en point relais',
  '# Récupérer un colis en point relais

## Pourquoi c''est important ?

Lorsque vous commandez des articles en ligne en France ou que des proches vous envoient un colis, il est très fréquent que la livraison se fasse en **point relais** (ou "point de retrait") plutôt qu''à domicile. Comprendre comment récupérer un colis en point relais est absolument crucial pour les étudiants internationaux, car c''est un mode de livraison économique, pratique, et très répandu. Ne pas connaître ce fonctionnement, c''est risquer de voir votre colis renvoyé à l''expéditeur faute de l''avoir récupéré à temps, ou de ne pas savoir quels documents présenter. Maîtriser la récupération en point relais est fondamental pour recevoir vos achats et vos envois en toute sérénité.


-   Définir ce qu''est un point relais et son rôle dans la livraison.





### 1. Qu''est-ce qu''un point relais ?


-   C''est une alternative à la livraison à domicile, souvent plus flexible car les commerces ont des horaires plus larges.

-   **Proximité** : Les points relais sont nombreux et souvent faciles d''accès.
-   **Sécurité** : Votre colis est en sécurité, il n''est pas laissé devant votre porte.




-   Cette notification contient des informations cruciales : le nom et l''adresse du point relais, les horaires d''ouverture, et le **code de retrait** (souvent un code PIN ou un QR code).

-   **Attention** : Au-delà de ce délai, le colis est renvoyé à l''expéditeur, et des frais de réexpédition peuvent s''appliquer.



#### a) Pièce d''identité
-   Vous devez impérativement présenter une **pièce d''identité officielle en cours de validité** :
    -   Votre carte nationale d''identité (si UE/EEE/Suisse).
-   Le nom sur votre pièce d''identité doit correspondre au nom du destinataire du colis.

-   Vous pouvez le montrer sur votre smartphone ou l''avoir noté sur un papier.

    -   Sa propre pièce d''identité.
    -   Votre pièce d''identité (une photocopie signée de vous "J''autorise Mme/M. X à retirer mon colis").


-   Votre **pièce d''identité** (passeport ou titre de séjour).


-   **Ayez toujours votre pièce d''identité sur vous** quand vous allez chercher un colis.
-   **N''hésitez pas à demander au commerçant** si vous avez un doute.
-   **Si vous savez que vous ne pourrez pas récupérer votre colis**, contactez le transporteur pour voir s''il peut prolonger le délai ou rediriger le colis.


-   **Se présenter sans pièce d''identité valide** : Le colis vous sera refusé.
-   **Ne pas vérifier le contenu du colis** (si c''est possible) ou son état avant de signer.




Récupérer un colis en point relais est un mode de livraison très courant et pratique en France. Vous recevrez une notification (e-mail/SMS) avec l''adresse du point relais et un code de retrait. Présentez impérativement une pièce d''identité valide (passeport, titre de séjour) et le code de retrait dans le délai imparti (7 à 10 jours). Ne pas le faire, c''est risquer de voir votre colis renvoyé. Maîtriser cette procédure est absolument crucial pour recevoir vos achats en ligne et vos envois personnels en toute sécurité et sans encombre en France.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 72 ---

-- COURS 73 : Laver son linge
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '378a3239-7926-4866-8618-0f46b0407d39',
  'Laver son linge en France : Laveries automatiques et étiquettes',
  'laver-linge-france-laveries-automatiques-etiquettes',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui doivent gérer leur linge. Si vous n''avez pas de machine à laver dans votre logement, les laveries automatiques sont une solution pratique et économique, mais leur fonctionnement peut être nouveau pour vous. Nous vous expliquerons le fonctionnement des laveries automatiques (prix, lessive), les types de lessives et adoucissants à acheter, et comment lire les étiquettes des vêtements pour ne pas abîmer votre linge. Maîtriser ces informations est absolument crucial pour gérer votre linge efficacement, faire des économies, et prendre soin de vos vêtements sans mauvaise surprise.',
  'Laver son linge France : laveries automatiques, lessive/adoucissant, lire étiquettes vêtements. Prenez soin de votre linge et de votre budget !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le fonctionnement et les coûts des laveries automatiques", "Identifier les différents types de lessives et adoucissants en France", "Savoir lire et interpréter les étiquettes d''entretien des vêtements", "Maîtriser les conseils pour un lavage efficace, économique et respectueux du linge"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  400,
  3000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 73
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Fonctionnement des laveries automatiques',
  '# Fonctionnement des laveries automatiques

## Pourquoi c''est important ?

Si votre logement étudiant en France n''est pas équipé d''une machine à laver, la **laverie automatique** est la solution la plus courante et la plus pratique pour faire votre lessive. Cependant, son fonctionnement (choix de la machine, paiement, programme, séchage) peut être différent de ce que vous connaissez, et une mauvaise utilisation peut entraîner des déceptions (linge mal lavé, abîmé) ou des coûts supplémentaires. Pour les étudiants internationaux, maîtriser le fonctionnement des laveries automatiques est absolument crucial pour gérer votre linge efficacement, faire des économies, et éviter les désagréments. C''est une étape essentielle de votre autonomie au quotidien.


-   Définir ce qu''est une laverie automatique et ses avantages.





### 1. Qu''est-ce qu''une laverie automatique ?



-   **Rapidité** : Les machines sont puissantes, le cycle de lavage est souvent plus rapide qu''à la maison.
-   **Coût** : Généralement plus économique que d''acheter et d''entretenir sa propre machine.






-   **Apportez votre propre lessive et adoucissant.** Les laveries ne les fournissent pas systématiquement (parfois des distributeurs automatiques sont disponibles, mais c''est plus cher).
-   Versez la lessive et l''adoucissant dans les compartiments prévus à cet effet (généralement sur le dessus de la machine). (Voir leçon suivante sur les types de lessive).








#### a) Triez votre linge avant d''arriver







-   **Regardez d''abord comment les autres utilisent les machines** si vous n''êtes pas sûr.
-   **Si la machine ne fonctionne pas**, signalez-le au numéro d''urgence affiché dans la laverie.
-   **N''oubliez pas votre linge dans la machine ou le sèche-linge** : Les gens attendent derrière.


-   **Choisir un programme inadapté** : Risque d''abîmer votre linge.


-   🔗 [Ministère de l''Économie et des Finances : La consommation](https://www.economie.gouv.fr/particuliers/consommation) - Informations générales.
-   🔗 [ADEME (Agence de la transition écologique) : Lave-linge](https://www.ademe.fr/particuliers-eco-citoyens/economiser-lenergie/les-appareils-electromenagers/lave-linge) - Conseils d''économie d''énergie.


',
  1,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Lessive et adoucissant : Quoi acheter ?',
  '# Lessive et adoucissant : Quoi acheter ?

## Pourquoi c''est important ?

Lorsque vous faites votre lessive en France, choisir la bonne lessive et l''adoucissant adapté peut sembler anodin, mais cela a un impact sur l''état de votre linge, la propreté, les allergies, et votre budget. Le marché français des produits d''entretien est très vaste, avec de nombreuses marques et types de produits. Ne pas savoir quoi acheter, c''est risquer d''abîmer vos vêtements (mauvais dosage, produit inadapté), de dépenser trop cher, ou de ne pas obtenir le résultat souhaité. Pour les étudiants internationaux, souvent peu familiers avec les marques locales, maîtriser ce choix est absolument crucial pour prendre soin de son linge efficacement et économiquement.


-   Comprendre le rôle de l''adoucissant et son utilité.
-   Maîtriser les conseils pour optimiser l''achat et l''utilisation de vos produits.


Une bonne lessive, c''est la garantie d''un linge propre et bien entretenu.







-   **Inconvénients** : Plus chères à l''unité, ne permettent pas d''adapter le dosage pour une petite quantité de linge. Risque d''ingestion par les enfants.


🔗 [ADEME (Agence de la transition écologique) : Bien utiliser son lave-linge](https://www.ademe.fr/particuliers-eco-citoyens/habitation/economiser-lenergie/lave-linge) - Conseils sur l''utilisation de la lessive.

### 2. Le rôle de l''adoucissant (assouplissant)


-   L''adoucissant est un produit qui rend le linge plus doux, plus souple, et lui donne une odeur agréable. Il facilite aussi le repassage.

-   **Anti-statique** : Réduit l''électricité statique, surtout pour les fibres synthétiques.

-   **Coût supplémentaire** : Ce n''est pas indispensable.






-   Choisissez des lessives et adoucissants "hypoallergéniques", "peaux sensibles", "testés dermatologiquement", sans parfum ni colorant.

-   Si vous êtes sensible à l''environnement, privilégiez les lessives avec des labels écologiques (Ecolabel européen, Ecocert).

### 4. Conseils pour optimiser l''achat et l''utilisation



-   Suivez les instructions de dosage sur l''emballage de la lessive, en fonction de la saleté du linge et de la dureté de l''eau. Un surdosage n''est pas plus efficace et pollue plus.




-   Une **liste de courses** pour les produits d''entretien.


-   **N''achetez pas le plus cher** : Les lessives de marque distributeur sont souvent très efficaces.




-   🔗 [ADEME (Agence de la transition écologique) : Bien utiliser son lave-linge](https://www.ademe.fr/particuliers-eco-citoyens/habitation/economiser-lenergie/lave-linge) - Conseils d''économie d''énergie et d''utilisation des produits.
-   🔗 [Ministère de la Transition Écologique : Les produits d''entretien](https://www.ecologie.gouv.fr/produits-dentretien) - Informations générales.
-   🔗 [Eco-Score / Yuka](https://ecoscore.beta.gouv.fr/) - Applications pour évaluer l''impact environnemental et la composition des produits.


Le choix de votre lessive (liquide pour couleurs/froid, poudre pour blanc/chaud, capsules pour simplicité) et l''utilisation d''adoucissant (pour douceur et parfum) impactent la propreté et l''entretien de votre linge en France. Choisissez une lessive adaptée au type de linge et à votre sensibilité (hypoallergénique si besoin). Achetez en promotion, ne surdosez pas, et lisez les étiquettes de vos vêtements. Maîtriser ces choix est absolument crucial pour un lavage efficace, économique, et respectueux de votre linge, surtout si vous utilisez les laveries automatiques.
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
  'Lire les étiquettes des vêtements',
  '# Lire les étiquettes des vêtements

## Pourquoi c''est important ?

Pour prendre soin de vos vêtements en France, il est absolument crucial de savoir lire et interpréter les **étiquettes d''entretien**. Ces petits symboles internationaux vous donnent toutes les instructions nécessaires pour laver, sécher, repasser, et nettoyer à sec votre linge sans l''abîmer. Ne pas connaître la signification de ces symboles, c''est risquer de décolorer, rétrécir, ou endommager irréversiblement vos vêtements, ce qui peut vous coûter cher en remplacement. Pour les étudiants internationaux, souvent avec des vêtements venant de cultures différentes, maîtriser cette lecture est fondamental pour entretenir votre garde-robe efficacement et économiquement.


-   Définir l''utilité des étiquettes d''entretien des vêtements.


Les symboles d''entretien sont standardisés au niveau international. Ils sont votre guide pour un linge bien entretenu.

🔗 [CTTN-IREN (Institut de Recherche et d''Étude des Symboles d''Entretien des Textiles) : Les symboles](https://www.cttn-iren.com/symboles-dentretien-des-textiles) - La référence officielle.



Le bac d''eau, votre premier indice.

#### a) Le bac d''eau (lavage en machine)

    -   Triangle avec "CL" : Blanchiment au chlore autorisé.



L''impact de la chaleur sur les fibres.





Les finitions et l''entretien professionnel.







-   Si un vêtement n''est pas sale, aérez-le ou lavez-le à la main.


-   La laine, la soie, et de nombreuses fibres délicates rétrécissent ou s''abîment au sèche-linge.


-   Une **liste des symboles d''entretien** (gardez-la à portée de main).


-   **Si une étiquette est illisible ou manquante**, utilisez les symboles d''un vêtement similaire ou optez pour le lavage le plus doux et à froid.


-   **Ignorer les étiquettes** : Vous risquez d''abîmer vos vêtements.


-   🔗 [CTTN-IREN (Institut de Recherche et d''Étude des Symboles d''Entretien des Textiles) : Les symboles](https://www.cttn-iren.com/symboles-dentretien-des-textiles) - La référence officielle.
-   🔗 [Les sites des marques de lave-linge et sèche-linge](https://www.bosch-home.fr/nos-produits/lave-linge) - Peuvent inclure des guides d''entretien.
-   🔗 [Wikipédia : Symboles d''entretien des textiles](https://fr.wikipedia.org/wiki/Symboles_d%27entretien_des_textiles) - Pour une vue d''ensemble.


Savoir lire les étiquettes d''entretien des vêtements est absolument crucial pour prendre soin de votre linge en France. Comprenez les symboles de lavage (bac d''eau avec température et traits), de séchage (cercle dans le carré avec points), de repassage (fer à repasser avec points), et de nettoyage à sec (cercle). Triez votre linge, respectez les températures, et évitez de mettre au sèche-linge les matières fragiles. Maîtriser cette lecture vous permettra d''entretenir votre garde-robe efficacement, d''éviter les mauvaises surprises, et de faire des économies sur le long terme.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 73 ---

-- COURS 74 : Sécurité urbaine
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '378a3239-7926-4866-8618-0f46b0407d39',
  'Sécurité urbaine en France : Pickpockets, agressions et numéros d''urgence',
  'securite-urbaine-france-pickpockets-agressions-numeros-urgence',
  'Ce cours est d''une importance capitale pour tous les étudiants internationaux en France, afin de garantir leur sécurité en ville. Les grandes villes peuvent présenter des risques (pickpockets, petites agressions), et il est crucial de connaître les réflexes de prudence et les numéros d''urgence. Nous vous expliquerons les techniques courantes des pickpockets et comment vous en prémunir, les conseils pour rentrer seul(e) le soir en toute sécurité, et les numéros d''urgence spécifiques (114 par SMS pour les personnes malentendantes ou ne pouvant pas parler). Maîtriser ces informations est absolument crucial pour prévenir les dangers, réagir efficacement en cas de problème, et vivre votre séjour en France en toute sérénité. Votre sécurité est notre priorité absolue.',
  'Sécurité urbaine France : pickpockets, agressions, rentrer seul(e) le soir, 114 par SMS. Protégez-vous et soyez vigilant(e) en ville !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre les risques liés aux pickpockets et leurs techniques", "Identifier les bonnes pratiques pour rentrer seul(e) le soir en sécurité", "Savoir utiliser les numéros d''urgence (17 Police/Gendarmerie, 114 SMS)", "Maîtriser les conseils pour prévenir les agressions et réagir en cas de danger"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  600,
  4500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 74
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Pickpockets : Techniques courantes',
  '# Pickpockets : Techniques courantes

## Pourquoi c''est important ?

Les pickpockets sont une réalité, surtout dans les grandes villes touristiques de France (Paris, Marseille, Nice, etc.) et dans les transports en commun. Leurs techniques sont souvent discrètes et exploitent votre inattention. Être victime d''un pickpocket, c''est perdre ses papiers d''identité (passeport, titre de séjour), son argent, sa carte bancaire, son téléphone, ce qui peut entraîner des problèmes financiers, des démarches administratives longues, et un sentiment de vulnérabilité. Pour les étudiants internationaux, cette perte est d''autant plus grave que les papiers sont difficiles à refaire. Connaître les techniques courantes des pickpockets et savoir comment vous en prémunir est absolument crucial pour protéger vos biens et votre tranquillité d''esprit.


-   Maîtriser les conseils pour réagir si vous êtes victime d''un pickpocket.



🔗 [Ministère de l''Intérieur : Prévention du vol](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Prevention-des-risques/Prevention-vol) - Conseils de prévention.







-   Soyez vigilant(e) quand vous retirez de l''argent.



#### a) La technique de la "fouille"

#### b) La technique de la "poussette"

#### c) La technique de la "diversion"
-   Un complice va vous distraire (en vous posant une question, en faisant tomber quelque chose, en créant une bousculade, en vous demandant l''heure) pendant qu''un autre complice vous fait les poches.
-   **Attention aux "faux touristes"** : Des personnes qui vous demandent de signer une pétition, de l''aide, ou qui vous montrent une carte.

#### d) La technique du "journal" ou "vêtement"

#### e) Le vol à l''arraché





-   N''emportez que l''argent et les cartes dont vous avez besoin.

-   Évitez de l''utiliser de manière prolongée dans la foule.





-   **N''étalez pas votre argent liquide** en public.


-   **Oublier d''avoir des copies de ses papiers d''identité**.


-   🔗 [Ministère de l''Intérieur : Prévention du vol](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Prevention-des-risques/Prevention-vol) - La référence officielle.
-   🔗 [Service-Public.fr : Vol de papiers ou d''objets](https://www.service-public.fr/particuliers/vosdroits/F3025) - Que faire en cas de vol.


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
  'Rentrer seul(e) le soir',
  '# Rentrer seul(e) le soir

## Pourquoi c''est important ?

Rentrer seul(e) le soir, surtout en tant que femme, ou dans une ville que l''on ne connaît pas bien, peut être une source d''anxiété. Bien que la France soit un pays sûr, il est absolument crucial d''adopter des réflexes de prudence pour prévenir les situations à risque et garantir votre sécurité personnelle. Ne pas prendre de précautions, c''est s''exposer inutilement à des dangers potentiels. Pour les étudiants internationaux, la méconnaissance des zones sûres/moins sûres et l''isolement peuvent augmenter le sentiment de vulnérabilité. Maîtriser les conseils pour rentrer seul(e) le soir est fondamental pour se sentir en sécurité, prévenir les agressions, et profiter sereinement de votre vie nocturne en France.


-   Comprendre l''importance de la prévention pour la sécurité personnelle.


La prévention est la meilleure protection. Adaptez votre comportement à l''environnement.

🔗 [Ministère de l''Intérieur : Conseils de prévention](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Prevention-des-risques/Cybercriminalite) - (Note: bien que sur cybercriminalité, le site offre des conseils généraux de prévention).




-   **Connaître l''itinéraire** : Avant de sortir, sachez comment vous allez rentrer (itinéraire, transports en commun, horaires).
-   **Évitez les raccourcis** : Privilégiez les rues bien éclairées et fréquentées, même si c''est un peu plus long. Évitez les rues désertes ou les parcs la nuit.


-   **Modérez votre consommation d''alcool** : L''alcool réduit votre vigilance et votre capacité de réaction.

-   Marchez d''un pas décidé, tête haute. Évitez de regarder votre téléphone tout le temps.




-   **Privilégiez les transports en commun** : C''est souvent l''option la plus sûre.

-   **Solution de dernier recours (si budget le permet)** : Si vous êtes dans un quartier isolé ou si vous avez le moindre doute, n''hésitez pas à prendre un taxi ou un VTC.
-   **Commandez via l''application** : Ne montez jamais dans un taxi "à la volée" qui ne serait pas officiel.
-   **Vérifiez le chauffeur** : Assurez-vous que la plaque d''immatriculation correspond à celle de l''application. Partagez les informations de votre course avec un proche.

-   Moins recommandé la nuit, sauf si c''est avec des personnes de confiance.




#### b) En cas d''agression verbale
-   Si cela persiste, ne craignez pas de demander de l''aide ou d''appeler la police.

#### c) En cas d''agression physique
-   **Criez fort à l''aide** : Attirez l''attention.
-   **Lâchez votre sac si l''agresseur ne veut que ça** : Votre vie et votre intégrité physique sont plus importantes que vos biens.
-   **Après l''agression** : Alertez les secours (17, 112), portez plainte au commissariat, et parlez-en à un proche.

#### d) Numéros d''urgence spécifiques (si vous ne pouvez pas parler)
-   **Le 114 (par SMS)** : C''est le numéro d''urgence pour les personnes sourdes ou malentendantes, mais il peut être utilisé par toute personne qui ne peut pas parler (situation de danger, agression). Vous pouvez envoyer un SMS décrivant la situation et votre localisation.

🔗 [Gouvernement.fr : Violence et agression](https://www.gouvernement.fr/violences-agressions-faire-face) - Que faire en cas d''agression.


-   Les **numéros d''urgence** enregistrés.


-   **Ne montrez pas d''argent ou d''objets de valeur ostensiblement**.
-   **Informez-vous sur les quartiers de votre ville** : Certains sont plus sûrs que d''autres la nuit.


-   **Ignorer les réflexes de prudence** en pensant que "ça n''arrive qu''aux autres".
-   **S''isoler la nuit** dans des lieux déserts.
-   **Consommer trop d''alcool** et réduire sa vigilance.
-   **Ne pas connaître les numéros d''urgence**.


-   🔗 [Ministère de l''Intérieur : Prévention des risques](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Prevention-des-risques) - Conseils généraux.
-   🔗 [Service-Public.fr : Numéros d''urgence](https://www.service-public.fr/particuliers/vosdroits/F3025) - La référence pour les numéros.
-   🔗 [114.fr : Le numéro d''urgence pour les personnes sourdes et malentendantes](https://www.114.fr/) - Aussi utile pour les personnes ne pouvant pas parler.
-   🔗 [Stop aux violences faites aux femmes (3919)](https://www.stop-violences-femmes.gouv.fr/article/le-3919) - Numéro d''écoute spécifique.


Rentrer seul(e) le soir en France exige des réflexes de prudence : planifiez votre trajet (rues éclairées et fréquentées), restez vigilant(e) (téléphone chargé, sans écouteurs), et modérez votre consommation d''alcool. Privilégiez les transports en commun la nuit ou les VTC officiels. En cas de danger, changez d''itinéraire, entrez dans un commerce, criez à l''aide, et appelez les services d''urgence (17 Police/Gendarmerie, 112 Europe, ou 114 par SMS si vous ne pouvez pas parler). Maîtriser ces conseils est absolument crucial pour prévenir les agressions, réagir efficacement, et garantir votre sécurité personnelle en ville.
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
  'Numéros d''urgence via SMS (114)',
  '# Numéros d''urgence via SMS (114)

## Pourquoi c''est important ?

En cas de situation d''urgence, pouvoir alerter les secours est primordial. Cependant, il peut arriver que vous soyez dans l''impossibilité de parler (agression, malaise, handicap auditif, ou simplement barrière linguistique). Le numéro **114**, accessible par SMS ou fax, est un numéro d''urgence absolument crucial en France, spécifiquement conçu pour les personnes sourdes, malentendantes, aphasiques ou celles qui ne peuvent pas parler, mais aussi utile pour toute personne en situation de danger où il est impossible de communiquer vocalement. Ne pas connaître ce service, c''est risquer de rester sans solution en cas d''urgence où la parole est impossible. Maîtriser le 114 par SMS est fondamental pour garantir votre sécurité dans toutes les circonstances.


-   Définir le rôle et la fonction du numéro d''urgence 114.
-   Comprendre le public prioritaire et l''extension de son usage.
-   Savoir comment envoyer un SMS d''alerte au 114.



🔗 [114.fr : Site officiel](https://www.114.fr/) - Le portail du numéro d''urgence pour sourds et malentendants.


### 1. Le numéro d''urgence 114 : Pour communiquer par SMS

Une alternative à l''appel vocal.

-   **Public prioritaire** : Ce numéro est destiné en priorité aux personnes sourdes, malentendantes, aphasiques (difficulté à s''exprimer par la parole), ou dysphasiques.
-   **Toute personne ne pouvant pas parler** : Il est également utile pour toute personne qui se trouve dans une situation d''urgence et qui ne peut pas communiquer vocalement (ex: victime d''une agression discrète, personne blessée avec des difficultés respiratoires).


-   L''envoi de SMS au 114 est gratuit depuis n''importe quel téléphone portable en France.


### 2. Comment envoyer un SMS d''alerte au 114 ?


-   **La nature de l''urgence** : Le plus brièvement possible (ex: "AGRESSION", "MALAISE", "INCENDIE").
-   **Votre localisation exacte** : Adresse (numéro, rue, code postal, ville, étage, numéro d''appartement, éléments distinctifs).
-   **Votre capacité à parler** : Indiquez si vous ne pouvez pas parler ("Je ne peux pas parler").

-   "AGRESSION en cours, 15 rue de la Paix, 75002 Paris, 3ème étage. Je ne peux pas parler. Dupont Marie."
-   "MALAISE grave, 22 boulevard Jean Jaurès, 69007 Lyon, près de la gare. Je ne peux pas parler. Martin Pierre."

#### c) Dialoguer avec l''opérateur
-   Après votre premier SMS, l''opérateur vous posera des questions par SMS pour obtenir plus de précisions.
-   N''envoyez pas d''autres SMS non sollicités avant la réponse de l''opérateur.




-   En cas d''agression ou de danger où parler pourrait vous mettre en danger, l''envoi d''un SMS est plus discret qu''un appel vocal.




-   **Ne l''utilisez pas pour des questions administratives, des rendez-vous médicaux non urgents, ou des renseignements.**

#### b) Les autres numéros d''urgence (vocaux)
-   **112 (Numéro européen)** : Toutes les urgences, avec possibilité d''opérateurs multilingues.




-   **Familiarisez-vous avec le type d''informations** à envoyer (localisation, nature de l''urgence).
-   **Si vous êtes témoin d''une situation dangereuse**, vous pouvez également utiliser le 114 pour alerter discrètement.


-   **Ne pas connaître le 114** et être démuni(e) en cas d''impossibilité de parler.


-   🔗 [Service-Public.fr : Numéros d''urgence](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations sur le 114.
-   🔗 [Ministère de l''Intérieur : Les services d''urgence](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Les-services-d-urgence) - Présentation du 114.
-   🔗 [Gouvernement.fr : Accessibilité des numéros d''urgence](https://www.gouvernement.fr/actualite/le-114-numero-d-urgence-pour-les-personnes-sourdes-et-malentendantes) - Article de presse.
-   🔗 [Police Nationale : Que faire en cas d''agression](https://www.police-nationale.interieur.gouv.fr/Actualites/Conseils-de-prevention) - Conseils.


Le numéro 114, accessible par SMS ou fax, est un numéro d''urgence absolument crucial en France, surtout si vous êtes dans l''impossibilité de parler (agression, malaise, handicap). Il est destiné en priorité aux personnes sourdes/malentendantes, mais peut être utilisé par tous. Envoyez un SMS concis avec la nature de l''urgence, votre localisation exacte, et votre nom. Maîtriser le 114 est fondamental pour garantir votre sécurité dans toutes les circonstances, obtenir l''aide des services de secours, et communiquer efficacement en situation critique.
',
  3,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 74 ---

-- COURS 75 : Objets trouvés / Papiers volés
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '378a3239-7926-4866-8618-0f46b0407d39',
  'Objets trouvés / Papiers volés en France : Démarches et réflexes',
  'objets-trouves-papiers-voles-france-demarches-reflexes',
  'Ce cours est d''une importance capitale pour tous les étudiants internationaux en France. Perdre ses papiers (passeport, titre de séjour, carte bancaire) ou se les faire voler est une situation très stressante qui nécessite des démarches administratives urgentes. Ne pas savoir comment réagir, où faire la déclaration, et qui contacter peut entraîner des problèmes majeurs (financiers, juridiques, de séjour). Nous vous expliquerons la distinction entre "main courante" et "plainte", comment contacter votre consulat pour refaire votre passeport, et le rôle du service des objets trouvés. Maîtriser ces réflexes est absolument crucial pour minimiser les conséquences d''une perte ou d''un vol, protéger votre identité et vos biens, et régulariser votre situation au plus vite.',
  'Objets trouvés / Papiers volés : main courante vs plainte, refaire passeport (consulat), service objets trouvés. Agissez vite et protégez-vous !',
  'culture_codes_sociaux',
  'intermediaire',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la différence entre déposer une main courante et porter plainte", "Savoir comment contacter son consulat pour refaire son passeport/titre d''identité", "Identifier le rôle du service des objets trouvés et comment le contacter", "Maîtriser les conseils pour réagir rapidement en cas de perte ou de vol et minimiser les risques"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  550,
  4000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 75
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Faire une main courante vs porter plainte',
  '# Faire une main courante vs porter plainte

## Pourquoi c''est important ?

En France, si vous êtes victime d''un vol, d''une perte de papiers, ou d''un incident sans gravité mais que vous souhaitez en laisser une trace officielle, vous devrez vous rendre au commissariat de police ou à la gendarmerie. Il est absolument crucial de comprendre la distinction entre **faire une "main courante"** et **"porter plainte"**. Cette différence a des implications majeures sur les suites de votre démarche (enquête judiciaire, possibilité d''indemnisation) et sur la valeur de votre déclaration. Pour les étudiants internationaux, faire le bon choix est fondamental pour enclencher les procédures administratives nécessaires (refaire ses papiers, déclarer à l''assurance) et pour faire reconnaître officiellement l''incident.


-   Définir ce qu''est une main courante et son utilité.



🔗 [Service-Public.fr : Vol de papiers ou d''objets](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations sur la plainte.




-   Une main courante est une déclaration consignée dans un registre par la police ou la gendarmerie. Elle atteste de votre passage et des faits que vous signalez (ex: disparition inquiétante, perte d''objets, différend de voisinage, trouble à l''ordre public).
-   **Pas d''enquête systématique** : La main courante n''entraîne pas systématiquement l''ouverture d''une enquête judiciaire.

    -   Déclarer la perte de papiers (carte d''identité, permis, titre de séjour) pour les refaire.
    -   Laisser une trace d''un incident qui pourrait se reproduire (ex: harcèlement verbal, nuisance sonore de voisinage).
-   **Avantage** : Plus rapide et moins formalisée qu''une plainte.

#### c) Quand l''utiliser ?
-   Dégradation légère sans identification de l''auteur.



-   La plainte est un acte par lequel une personne qui s''estime victime d''une infraction (vol avec violence, agression, cambriolage, escroquerie) informe les autorités judiciaires pour qu''elles engagent des poursuites contre l''auteur.
-   **Déclenchement d''une enquête** : La plainte déclenche systématiquement l''ouverture d''une enquête par la police/gendarmerie et du parquet.

-   **Poursuivre les auteurs** : Vise à identifier et sanctionner les auteurs de l''infraction.
-   **Preuve juridique forte** : Pour les assurances, les demandes d''indemnisation.

#### c) Quand l''utiliser ?




-   **Commissariat de police** (en ville) ou **Gendarmerie** (en zone rurale) le plus proche du lieu de l''incident.

-   Votre **pièce d''identité** (passeport ou titre de séjour).
-   Tout document lié à l''incident (copie de la carte volée, numéro IMEI du téléphone volé, photos, e-mails d''arnaque).

-   **Gardez un double** : L''agent doit vous remettre une copie de votre main courante ou un récépissé de dépôt de plainte. C''est votre preuve.



-   Les **informations sur l''incident** (date, lieu, nature).
-   Les **numéros d''urgence** (17 Police/Gendarmerie).


-   **Si vous êtes victime d''un vol avec violence ou d''une agression, portez plainte.**
-   **Parlez-en à un proche ou à un service d''aide** (service social, associations d''aide aux victimes).


-   **Faire une fausse déclaration** : C''est un délit.
-   **Attendre trop longtemps** pour déclarer, surtout en cas de vol (pour l''assurance).


-   🔗 [France Victimes (116 006)](https://www.france-victimes.fr/) - Association d''aide aux victimes.


Comprendre la différence entre faire une "main courante" (trace officielle sans enquête systématique, pour perte de papiers ou vols simples) et "porter plainte" (déclenche une enquête judiciaire, pour vols avec violence ou agressions) est absolument crucial en France. Rendez-vous au commissariat ou à la gendarmerie, apportez votre pièce d''identité, et relisez attentivement votre déclaration avant de signer. Gardez toujours un récépissé. Maîtriser cette distinction est fondamental pour enclencher les démarches (refaire ses papiers, déclarer à l''assurance) et protéger vos droits après une perte ou un vol.
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
  'Contacter le consulat pour refaire le passeport',
  '# Contacter le consulat pour refaire le passeport

## Pourquoi c''est important ?

Si vous êtes un étudiant international en France et que votre passeport est perdu ou volé, c''est une situation très grave qui nécessite une réaction rapide. Votre passeport est votre principal document d''identité et de voyage. Sans lui, vous ne pouvez pas prouver votre identité, voyager, ni même justifier de votre nationalité. Contacter votre consulat ou ambassade en France est absolument crucial pour refaire votre passeport et obtenir un document de voyage d''urgence. Ne pas connaître cette démarche, c''est risquer de rester sans papiers, de compromettre votre séjour en France, et de ne pas pouvoir rentrer dans votre pays. Maîtriser cette procédure est fondamental pour régulariser votre situation d''identité au plus vite.


-   Comprendre l''urgence de refaire son passeport en cas de perte ou de vol.
-   Maîtriser les conseils pour obtenir un document de voyage d''urgence et régulariser sa situation.


Votre consulat ou ambassade est votre unique interlocuteur pour les démarches liées à votre nationalité et à vos documents d''identité.



### 1. L''urgence de refaire son passeport



-   **Usurpation d''identité** : Un passeport volé peut être utilisé par des fraudeurs.
-   **Problèmes de séjour** : Sans passeport, votre titre de séjour est moins "fort", et vous ne pourrez pas le renouveler.




-   **Recherche en ligne** : "Ambassade de [votre pays] en France" ou "Consulat de [votre pays] à [ville]".





#### b) Pièces d''identité et de nationalité
-   **Ancien passeport** (si vous l''avez encore, même périmé).
-   **Carte d''identité nationale** de votre pays (si vous l''avez).
-   **Preuve de nationalité** (si le consulat l''exige, ex: certificat de nationalité).

#### c) Photos d''identité
-   **Photos d''identité récentes** aux normes internationales (et parfois aux normes spécifiques de votre pays). Vérifiez les exigences du consulat.

-   En France (facture de moins de 3 mois, quittance de loyer, attestation d''hébergement).



🔗 [Exemple (consulat fictif) : Demande de passeport](https://consulat-de-mon-pays-en-france.fr/passeport) - Les informations varient beaucoup d''un consulat à l''autre.

### 4. Obtenir un document de voyage d''urgence



-   La fabrication d''un nouveau passeport peut prendre plusieurs semaines ou mois. Anticipez.


-   Les **documents d''identité et de nationalité** (selon les exigences du consulat).


-   **Ne voyagez pas avec votre passeport si vous n''en avez pas besoin** (gardez-le en sécurité dans votre logement). Utilisez votre titre de séjour pour prouver votre identité en France.


-   **Oublier d''avoir son acte de naissance (traduit)** : C''est souvent une pièce maîtresse.
-   **Voyager sans document d''identité valide** après la perte de son passeport.


-   🔗 [Annuaire des traducteurs assermentés](https://www.annuaire-traducteur-assermente.fr/) - Pour la traduction d''acte de naissance.
-   🔗 [Ministère de l''Intérieur : Titre de séjour](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Titre-de-sejour-pour-les-etrangers-en-France) - Informations sur le titre de séjour.


Si votre passeport est perdu ou volé en France, vous devez d''abord le déclarer à la police française, puis contacter d''urgence votre consulat ou ambassade. Préparez un dossier complet (récépissé de déclaration, titre de séjour, acte de naissance traduit, photos) pour demander un nouveau passeport. Le consulat peut vous délivrer un titre de voyage d''urgence en attendant. Maîtriser cette procédure est absolument crucial pour refaire votre document d''identité, éviter les problèmes administratifs et juridiques, et garantir la régularité de votre séjour en France.
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
  'Service des objets trouvés',
  '# Service des objets trouvés

## Pourquoi c''est important ?

Si vous perdez un objet (téléphone, portefeuille, clés, sac) en France, il existe un service public dédié aux **objets trouvés**. Connaître son existence et savoir comment le contacter est absolument crucial pour les étudiants internationaux, car cela représente une chance significative de retrouver vos biens perdus, surtout s''ils contiennent des documents importants (titre de séjour, carte bancaire). Ne pas connaître ce service, c''est risquer de renoncer à retrouver votre objet. Maîtriser la démarche auprès des objets trouvés est fondamental pour maximiser vos chances de récupérer vos biens et minimiser les conséquences d''une perte.


-   Définir ce qu''est le service des objets trouvés et son fonctionnement.





### 1. Qu''est-ce que le service des objets trouvés ?




-   Il existe des services d''objets trouvés spécifiques pour :




-   **Lieu de la perte** : Le service à contacter dépend du lieu où vous avez perdu l''objet.
    -   Dans le métro/bus/tram : Contactez l''opérateur de transport concerné (RATP, SNCF, réseau local).
    -   Dans la rue, un parc, un commerce : Contactez la mairie de la ville où vous l''avez perdu, ou le commissariat de police, ou le service des objets trouvés de la ville.
    -   À l''aéroport : Contactez le service des objets trouvés de l''aéroport.


-   **Description précise de l''objet** : Marque, modèle, couleur, taille, contenu (pour un portefeuille ou sac), signes distinctifs.
-   **Votre pièce d''identité**.



-   **Faire opposition immédiatement** : Si vous perdez votre carte bancaire, faites opposition immédiatement auprès de votre banque (par téléphone ou via l''application mobile). C''est la première chose à faire pour éviter les fraudes.

#### b) Passeport, titre de séjour, carte d''identité
-   **Contactez votre consulat/ambassade** : Pour refaire votre passeport ou autre pièce d''identité nationale (voir leçon 75.2).

-   **Permis de conduire** : Déclarez la perte sur le site de l''ANTS et demandez un duplicata.


-   Votre **mémoire** sur l''objet perdu.
-   Vos **pièces d''identité** restantes.


-   **Si vous trouvez un objet**, rapportez-le au service des objets trouvés le plus proche. C''est un geste citoyen.


-   **Ne pas déclarer la perte de papiers d''identité** : Vous ne pourrez pas les refaire.
-   **Ne pas fournir une description précise** de l''objet.




Si vous perdez un objet ou vos papiers en France, contactez rapidement le service des objets trouvés compétent (police/mairie pour la rue, opérateur pour les transports). Pour les papiers importants (passeport, titre de séjour, carte bancaire), faites d''abord opposition à votre carte bancaire et déclarez la perte/vol à la police. Ayez des copies de vos documents. Maîtriser ces réflexes est absolument crucial pour maximiser vos chances de retrouver vos biens, protéger votre identité, et minimiser les conséquences d''une perte ou d''un vol, en régularisant votre situation au plus vite.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- PARTIE 6 : Vie Quotidienne, Culture & Intégration

-- --- Cours 75 ---

-- COURS 76 : Tu ou Vous ?
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '378a3239-7926-4866-8618-0f46b0407d39',
  'Tu ou Vous ? Le guide des règles de politesse en français',
  'tu-vous-guide-regles-politesse-francais',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de maîtriser les codes sociaux fondamentaux de la langue française : la distinction entre l''utilisation du "Tu" et du "Vous". Cette règle de politesse est cruciale dans toutes vos interactions (administrations, professeurs, commerçants, amis). Ne pas la comprendre, c''est risquer de paraître irrespectueux(se) ou trop familier(ère), ce qui peut impacter vos relations. Nous vous expliquerons la "règle de l''âge et de la hiérarchie", quand passer au "Tu" (et avec qui), et les spécificités du vouvoiement commercial. Maîtriser ces nuances est absolument crucial pour une communication fluide, respectueuse, et une intégration réussie dans la société française.',
  'Tu ou Vous ? Règle âge/hiérarchie, quand passer au "Tu", vouvoiement commercial. Maîtrisez les codes de politesse en français !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la distinction fondamentale entre "Tu" et "Vous" en français", "Identifier la "règle de l''âge et de la hiérarchie" pour le choix du pronom", "Savoir quand et comment passer du "Vous" au "Tu" (proposer, accepter)", "Maîtriser les spécificités du vouvoiement commercial et professionnel"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  700,
  5000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 76
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La règle de l''âge et de la hiérarchie',
  '# La règle de l''âge et de la hiérarchie (Tu ou Vous)

## Pourquoi c''est important ?

En français, l''utilisation du pronom personnel "Tu" ou "Vous" pour s''adresser à quelqu''un n''est pas un choix aléatoire, c''est une règle de politesse fondamentale qui témoigne du respect, de la distance sociale, et de la nature de la relation. La **"règle de l''âge et de la hiérarchie"** est le principe de base pour décider de la forme à employer. Ne pas la comprendre, c''est risquer de paraître irrespectueux(se) envers un professeur ou une personne âgée, ou trop familier(ère) avec un inconnu, ce qui peut créer un malaise ou même impacter vos relations. Pour les étudiants internationaux, maîtriser cette règle est absolument crucial pour une communication appropriée et une intégration réussie dans la société française.


-   Définir la fonction du "Tu" et du "Vous" en français.
-   Comprendre l''application de la "règle de l''âge et de la hiérarchie".
-   Identifier les situations où le "Vous" est impératif et celles où le "Tu" est approprié.


Le "Tu" et le "Vous" sont des marqueurs sociaux puissants. Le "Vous" est la marque du respect et de la distance. Le "Tu" est la marque de la proximité.

🔗 [Académie Française : Question de l''usage du "tu" et du "vous"](https://www.academie-francaise.fr/questions-de-langue/usage-du-tu-et-du-vous) - La référence.


### 1. La fonction du "Tu" et du "Vous"


#### a) Le "Vous" (vouvoyer)
    -   Avec les personnes ayant une position d''autorité ou de hiérarchie (professeurs, administrateurs, employeurs).
-   **C''est la règle par défaut** : En cas de doute, commencez toujours par "Vous".

#### b) Le "Tu" (tutoyer)
-   **Fonction** : Exprime la proximité, la familiarité, l''égalité, l''intimité.
-   **Ce n''est jamais le choix par défaut, sauf si c''est un enfant.**


### 2. La règle de l''âge et de la hiérarchie : Votre boussole


-   **Professeurs, enseignants, personnel administratif de l''université** : Toujours vouvoyer.
-   **Commerçants, vendeurs, serveurs** : Toujours vouvoyer (sauf s''ils vous tutoient d''abord ou si c''est un jeune et que l''échange est rapide).
-   **Personnes âgées** : Toujours vouvoyer (sauf si elles vous proposent le "tu").

-   **Amis proches** : Une fois la relation établie, on passe au "tu".
-   **Camarades de promotion** : Généralement, les étudiants entre eux se tutoient (sauf si c''est un nouveau contact, alors le "vous" est de rigueur au début).
-   **Personnes qui vous proposent le "tu"** : C''est la clé du passage au "tu". (Voir leçon suivante).

### 3. Impact d''une mauvaise utilisation







-   C''est la règle d''or. Mieux vaut être trop formel que pas assez.

#### b) Attendez que l''on vous propose le "tu"
-   N''initiez jamais le "tu" avec une personne que vous devez vouvoyer. Attendez que la personne vous dise : "On peut se tutoyer".
-   C''est à la personne qui a le plus d''autorité, d''âge, ou qui est la plus "installée" dans la relation de proposer le "tu".


-   Excusez-vous simplement : "Pardon, je me suis trompé(e), je devrais vous vouvoyer." La plupart des Français comprendront que vous êtes étranger(ère).


-   Votre **volonté d''apprendre les codes sociaux**.


-   **Un petit "Excusez-moi, je suis étranger(ère), j''apprends le français"** peut aider en cas de doute.


-   **Ne pas tenir compte de l''âge ou de la position de l''interlocuteur**.
-   **Se sentir mal à l''aise de vouvoyer** des personnes de son âge si la relation ne le permet pas encore.


-   🔗 [Académie Française : Question de l''usage du "tu" et du "vous"](https://www.academie-francaise.fr/questions-de-langue/usage-du-tu-et-du-vous) - La référence absolue.
-   🔗 [TV5 Monde : Le "tu" ou le "vous"](https://apprendre.tv5monde.com/fr/exercices/b1-intermediaire/tu-ou-vous) - Exercices.
-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils.


La "règle de l''âge et de la hiérarchie" est fondamentale pour choisir entre "Tu" et "Vous" en français. Vouvoyez systématiquement les personnes que vous ne connaissez pas, les personnes âgées, et les figures d''autorité (professeurs, administrateurs). En cas de doute, vouvoyez. N''utilisez le "Tu" que si la personne vous le propose ou si c''est un ami proche ou un enfant. Maîtriser cette règle est absolument crucial pour une communication respectueuse, éviter les malentendus, et faciliter votre intégration réussie dans la société française.
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
  'Quand passer au "Tu" ?',
  '# Quand passer au "Tu" ?

## Pourquoi c''est important ?

Le passage du "Vous" au "Tu" (le "tutoiement") est un moment délicat mais significatif dans les relations sociales en France. Il marque un rapprochement, une familiarité, et une intimité croissante entre deux personnes. Ne pas savoir quand et comment proposer ou accepter le tutoiement, c''est risquer de rester bloqué(e) dans une relation formelle alors qu''elle pourrait être plus chaleureuse, ou au contraire, de passer au "Tu" trop tôt et de paraître familier(ère). Pour les étudiants internationaux, souvent désireux de nouer des liens, maîtriser cette transition est absolument crucial pour une intégration sociale réussie et pour développer des relations plus profondes avec les Français.


-   Comprendre le moment où le passage au "Tu" est généralement envisagé.
-   Savoir qui doit proposer le tutoiement (la "règle de la dissymétrie").


Le passage au "Tu" est une étape de la construction de la relation. Il n''y a pas de règle stricte, mais des conventions sociales.



### 1. Le moment du passage au "Tu" : Quand la relation évolue


-   Avec des personnes de son âge, dans un contexte informel (soirée, sport, association étudiante), le passage au "Tu" est souvent rapide.

-   C''est beaucoup plus rare et plus lent.
-   Avec un professeur ou un supérieur hiérarchique, le vouvoiement est la norme. Le passage au "Tu" n''intervient que si la personne le propose.

#### c) La "règle du croisement"
-   Historiquement, il existe la "règle du croisement" : si la relation évolue, c''est à la personne la plus âgée, ou la plus haute dans la hiérarchie, ou celle qui a une position sociale plus établie, de proposer le "Tu".
-   **Exemple** : Votre professeur vous proposera de le tutoyer, pas l''inverse. Un manager proposera à son subordonné.


### 2. Qui doit proposer le tutoiement ? La "règle de la dissymétrie"


#### a) La personne "supérieure" propose
-   C''est à la personne la plus âgée, la plus gradée, ou qui a une position d''autorité (professeur, manager, personne âgée) de proposer le "Tu".




#### a) Pour proposer le "Tu" (par la personne "supérieure")
-   "On peut se tutoyer, si tu veux."
-   "N''hésitez pas à me tutoyer."
-   "Si vous êtes d''accord, on peut se tutoyer."
-   "Tu peux me tutoyer."

#### b) Pour accepter le "Tu" (par la personne "inférieure")
-   "Oui, avec plaisir !"
-   "D''accord, merci !"
-   "Si ça ne vous dérange pas, oui."
-   **Attention** : Dès que vous acceptez, passez immédiatement au "Tu" dans vos phrases suivantes.

#### c) Refuser poliment (si vous n''êtes pas à l''aise)
-   C''est rare, mais vous avez le droit de refuser : "Je préfère continuer à vous vouvoyer pour l''instant, si cela ne vous dérange pas." (Attention, cela peut être mal interprété).



-   C''est la règle d''or absolue. Mieux vaut être trop formel que pas assez.



-   En soirée étudiante, le "Tu" est plus courant. Dans un entretien d''embauche, le "Vous" est de rigueur.

-   Excusez-vous simplement : "Pardon, je me suis trompé(e), je devrais vous vouvoyer." La plupart des Français sont compréhensifs avec les étrangers qui apprennent.


-   Votre **sens de l''observation**.


-   **Pratiquez le "Vous" systématiquement** au début de vos interactions avec de nouvelles personnes.
-   **Les réseaux sociaux ou les applications de messagerie** peuvent être plus propices au "Tu" (entre pairs).
-   **Ne vous vexez pas si l''on ne vous propose pas le "Tu"** : C''est une marque de respect.
-   **Le passage au "Tu" est un privilège** qui se gagne.


-   **Vouvoyer trop longtemps** une personne qui vous a proposé le "Tu" : Peut être perçu comme de la froideur.
-   **Se sentir mal à l''aise de vouvoyer** une personne de son âge dans un contexte formel.
-   **Faire le "Tu" avec un interlocuteur et le "Vous" avec un autre** dans la même conversation (sauf cas spécifique de hiérarchie).
-   **Ne pas comprendre que le "Tu" n''est pas systématique** en France.
-   **Faire une erreur de tutoiement/vouvoiement en entretien d''embauche**.


-   🔗 [TV5 Monde : Le "tu" ou le "vous"](https://apprendre.tv5monde.com/fr/exercices/b1-intermediaire/tu-ou-vous) - Exercices pratiques.
-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils.


Le passage du "Vous" au "Tu" marque un rapprochement dans les relations en France. La règle de la "dissymétrie" s''applique : c''est à la personne la plus âgée ou la plus gradée de proposer le tutoiement. En cas de doute, vouvoyez toujours. Attendez que l''on vous propose le "Tu" avant de l''utiliser. Maîtriser cette transition est absolument crucial pour une communication tactique et respectueuse, pour développer des relations plus profondes, et pour une intégration sociale réussie dans la culture française.
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
  'Le vouvoiement de politesse commerciale',
  '# Le vouvoiement de politesse commerciale

## Pourquoi c''est important ?

Dans le cadre des échanges avec les commerçants, les vendeurs, ou le personnel de service en France, le **vouvoiement de politesse commerciale** est la règle par défaut, même si l''interlocuteur est jeune ou d''âge équivalent. Ne pas l''utiliser, c''est risquer de paraître familier(ère), irrespectueux(se), voire impoli(e), ce qui peut impacter la qualité du service que vous recevez ou générer un malaise. Pour les étudiants internationaux, souvent désireux de bien se faire comprendre et de respecter les codes locaux, maîtriser ce vouvoiement est absolument crucial pour des interactions fluides, agréables, et une bonne intégration dans la vie quotidienne française. C''est un aspect essentiel du savoir-vivre.


-   Définir ce qu''est le vouvoiement de politesse commerciale.


Le vouvoiement est une marque de respect dans l''espace public et professionnel.

🔗 [Académie Française : Question de l''usage du "tu" et du "vous"](https://www.academie-francaise.fr/questions-de-langue/usage-du-tu-et-du-vous) - La référence.


### 1. Qu''est-ce que le vouvoiement de politesse commerciale ?

Le respect dans l''échange de services.

#### a) Le "Vous" par défaut
-   Même si la personne est plus jeune que vous, ou semble décontractée, commencez toujours par "Vous".

-   C''est une marque de respect envers la personne qui vous rend service et envers la fonction qu''elle occupe.

-   Très rarement, un professionnel peut vous tutoyer d''emblée (surtout s''il est très jeune et dans un contexte très informel). Dans ce cas, vous pouvez le tutoyer en retour, mais il est plus sûr de continuer à le vouvoyer ou de lui demander "On peut se tutoyer ?".




-   **Demande d''information, paiement, réclamation** : Utilisez des formules polies avec le "Vous".

-   "Bonjour, je voudrais une table pour deux personnes, s''il vous plaît."
-   "Excusez-moi, s''il vous plaît."

-   "Excusez-moi, quelle est la direction pour [destination], s''il vous plaît ?"

-   **Employés de La Poste, de la banque, de la préfecture, de la CAF, d''EDF/Engie** : Toujours vouvoyer (voir cours 76.1 sur la hiérarchie).

-   **Personnel d''accueil, de service** : Toujours vouvoyer.

### 3. Les conséquences d''un tutoiement inapproprié


-   Tutoyer un commerçant peut être perçu comme un manque d''éducation ou une tentative d''établir une intimité non désirée.

-   Le professionnel peut se sentir mal à l''aise et ne pas savoir comment réagir.
-   Cela peut rendre l''échange moins agréable.




#### a) Commencez toujours par "Bonjour" et "Vous"
-   "Bonjour Madame, je voudrais un café, s''il vous plaît."
-   "Excusez-moi Monsieur, je cherche [produit], pourriez-vous m''aider, s''il vous plaît ?"

-   "S''il vous plaît" / "S''il te plaît" (si tutoiement)
-   "Merci"
-   "Je vous en prie"
-   "Au revoir" / "Bonne journée"



-   Vous avez le choix de le tutoyer en retour ou de continuer à le vouvoyer (ce qui est toujours acceptable). Si vous continuez à vouvoyer, il est de bon ton de lui dire "Je préfère que vous me vouvoyiez".


-   Votre **volonté d''apprendre et de vous adapter**.


-   **Même si le tutoiement est généralisé dans votre pays d''origine**, sachez qu''en France, il a une signification différente.
-   **Les commerçants apprécient la politesse**. Un simple "Bonjour" et "Merci" fait la différence.
-   **Si vous êtes étudiant et que le commerçant vous tutoie**, c''est souvent pour vous mettre à l''aise. Vous pouvez le tutoyer en retour.
-   **Ne vous sentez pas mal à l''aise de vouvoyer** : C''est la norme.


-   **Ne pas dire "Bonjour" et "Merci"**.
-   **Penser que l''on peut exiger un service** sans politesse.
-   **Se sentir mal à l''aise de se faire vouvoyer** : C''est une marque de respect.


-   🔗 [Académie Française : Question de l''usage du "tu" et du "vous"](https://www.academie-francaise.fr/questions-de-langue/usage-du-tu-et-du-vous) - La référence.
-   🔗 [TV5 Monde : Le "tu" ou le "vous"](https://apprendre.tv5monde.com/fr/exercices/b1-intermediaire/tu-ou-vous) - Exercices pratiques.
-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils.


Le vouvoiement de politesse commerciale est la règle par défaut en France lorsque vous interagissez avec des commerçants, des vendeurs ou du personnel de service. Commencez toujours par "Bonjour" et utilisez le "Vous" pour marquer le respect et maintenir une distance professionnelle. N''utilisez le "Tu" que si le professionnel vous le propose. Maîtriser ce vouvoiement est absolument crucial pour des interactions fluides, agréables, et une bonne intégration dans la vie quotidienne française. C''est un aspect essentiel du savoir-vivre qui facilite vos échanges et votre séjour.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

