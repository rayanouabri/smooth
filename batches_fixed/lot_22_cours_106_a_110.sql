-- ==========================================
-- LOT 22 : Cours 106 à 110
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 106 ---

-- COURS 96 : Alcool et Soirées
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Alcool et Soirées en France : Règles de vente et consommation',
  'alcool-soirees-france-regles-vente-consommation',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre la législation concernant l''alcool et les soirées. Les règles de vente et de consommation d''alcool sont strictes, notamment l''interdiction de vente après une certaine heure et les restrictions de consommation sur la voie publique. Ne pas connaître ces règles, c''est risquer des amendes, des problèmes avec la police, ou de se retrouver sans moyen d''acheter de l''alcool. Nous vous expliquerons les horaires de vente, les interdictions de consommation sur la voie publique dans certaines zones, et les conseils pour des soirées responsables. Maîtriser ces informations est absolument crucial pour respecter la loi, éviter les ennuis, et profiter pleinement de la vie étudiante et sociale en France en toute sécurité.',
  'Alcool et soirées France : vente interdite après 22h (zones),
  consommation voie publique. Ambiance sûre et respect des règles !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''interdiction de vente d''alcool aux mineurs et les horaires de vente", "Identifier les règles de consommation d''alcool sur la voie publique (zones et restrictions)", "Savoir comment organiser des soirées étudiantes dans le respect de la loi", "Maîtriser les conseils pour une consommation responsable et éviter les problèmes avec la police"]'::jsonb,
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

-- LEÇONS pour COURS 96
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Vente interdite après 22h (certaines zones)',
  '# Vente interdite après 22h (certaines zones) - Alcool en France

## Pourquoi c''est important ?

En France, la vente d''alcool est strictement réglementée, notamment par des horaires d''interdiction de vente après une certaine heure, surtout en soirée. Ces règles visent à limiter les nuisances sonores, les troubles à l''ordre public, et la consommation excessive. Ne pas connaître ces restrictions (interdiction de vente après 22h ou 2h du matin dans certaines zones) est absolument crucial pour les étudiants internationaux. C''est risquer de se retrouver sans possibilité d''acheter de l''alcool pour une soirée, de subir des amendes (pour vente illégale), ou de ne pas comprendre les dynamiques des sorties. Maîtriser ces informations est fondamental pour respecter la loi, éviter les ennuis, et organiser vos soirées étudiantes en toute conformité.


-   Comprendre l''âge légal pour l''achat d''alcool en France.
-   Identifier les règles générales d''horaires de vente d''alcool.


La législation sur l''alcool est une question de santé publique et d''ordre public.

🔗 [Service-Public.fr : Vente d''alcool](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations officielles.


### 1. L''âge légal et les règles générales de vente


-   La vente d''alcool est strictement **interdite aux moins de 18 ans**.
-   Les commerçants peuvent vous demander une pièce d''identité (passeport, titre de séjour) pour vérifier votre âge.

-   **Magasins de proximité (épiceries, supermarchés, grandes surfaces)** : La vente est généralement autorisée jusqu''à 22h ou 22h30.
-   **Bars et restaurants (consommation sur place)** : Peuvent servir de l''alcool jusqu''à la fermeture (souvent 2h du matin, voire plus pour les boîtes de nuit).

🔗 [Ministère de la Santé et de la Prévention : Prévention de l''alcool](https://sante.gouv.fr/sante-et-environnement/les-addictions/alcool) - Informations officielles.

### 2. L''interdiction de vente après 22h (ou 2h du matin) dans certaines zones


-   Les préfets et les maires ont le pouvoir de prendre des **arrêtés** pour restreindre les horaires de vente d''alcool (à emporter) dans certaines zones.
-   **Exemple** : Dans certaines villes, la vente d''alcool à emporter est interdite après 22h ou 23h. Dans d''autres, la vente peut être interdite après 2h du matin.

-   **Mairie** : Consultez le site internet de la mairie de votre ville. Cherchez les rubriques "Arrêtés municipaux", "Réglementation alcool", "Nuisances sonores".




-   Si vous organisez une soirée chez vous, ou si vous prévoyez un "apéro" entre amis, vous devez acheter votre alcool **avant l''heure limite de vente** dans les magasins.
-   Ne comptez pas sur l''achat de dernière minute après 22h.

-   Les bars et discothèques (qui vendent de l''alcool pour consommation sur place) ont des horaires d''ouverture plus étendus.

-   La consommation d''alcool sur la voie publique est également réglementée (voir leçon suivante).



#### a) Respectez l''âge légal (18 ans)
-   Ne tentez pas d''acheter de l''alcool si vous êtes mineur(e).

-   Ne demandez pas aux commerçants de vous vendre de l''alcool après l''heure légale.

-   L''alcool réduit la vigilance et peut entraîner des comportements à risque.
-   Ne mélangez pas l''alcool avec des médicaments.

-   Alternez les boissons alcoolisées avec de l''eau.

#### e) Ne conduisez jamais après avoir bu de l''alcool.


-   Votre **pièce d''identité** (pour prouver votre âge).
-   Un **sens de l''organisation** pour vos achats.


-   **Faites vos courses d''alcool avant 22h** si vous prévoyez une soirée.
-   **La France est un pays qui valorise une consommation conviviale et modérée** de l''alcool.


-   **Tenter d''acheter de l''alcool après l''heure limite** : Refus et parfois problèmes.
-   **Acheter de l''alcool pour des mineurs** : C''est illégal et dangereux.
-   **Boire trop d''alcool** et se mettre en danger (ou mettre les autres en danger).


-   🔗 [Service-Public.fr : Vente d''alcool](https://www.service-public.fr/particuliers/vosdroits/F3025) - La référence officielle.
-   🔗 [Ministère de la Santé et de la Prévention : Prévention de l''alcool](https://sante.gouv.fr/sante-et-environnement/les-addictions/alcool) - Informations officielles.
-   🔗 [Légifrance : Code de la Santé Publique (Articles sur l''alcool)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006073189/) - Textes de loi (Articles L3322-1 et suivants).
-   🔗 [Alcool Info Service (0 980 980 980)](https://www.alcool-info-service.fr/) - Ligne d''écoute et d''information.


En France, la vente d''alcool est interdite aux moins de 18 ans et souvent restreinte après 22h (ou 2h du matin) dans certaines zones par des arrêtés municipaux. Anticipez vos achats pour vos soirées et respectez toujours les horaires de vente dans les magasins. La consommation d''alcool sur la voie publique est également réglementée. Maîtriser ces informations est absolument crucial pour respecter la loi (éviter les amendes), profiter des soirées étudiantes en toute sécurité, et faire preuve de responsabilité dans votre consommation d''alcool en France.
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
  'Consommation sur la voie publique',
  '# Consommation d''alcool sur la voie publique

## Pourquoi c''est important ?

En France, la consommation d''alcool sur la voie publique est un sujet réglementé qui peut varier d''une ville à l''autre, et même d''un quartier à l''autre. Ne pas connaître les règles spécifiques à votre lieu de résidence, c''est risquer des amendes, des problèmes avec la police, ou de ne pas comprendre pourquoi la consommation est autorisée ou interdite dans certaines zones. Pour les étudiants internationaux, souvent habitués à des législations différentes, maîtriser ces informations est absolument crucial pour respecter la loi, éviter les ennuis, et profiter des moments conviviaux en extérieur sans risque. C''est un aspect essentiel de la vie sociale et de l''ordre public.


-   Comprendre le principe général de la consommation d''alcool sur la voie publique en France.
-   Maîtriser les conseils pour une consommation responsable et respectueuse de l''ordre public.


La législation vise à prévenir les nuisances et les troubles liés à l''alcoolisation sur l''espace public.

🔗 [Service-Public.fr : Consommation d''alcool sur la voie publique](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations officielles.



Pas de consommation "sauvage".

#### a) Pas d''interdiction générale
-   En France, il n''y a pas d''interdiction générale de consommer de l''alcool sur la voie publique. Vous pouvez, en principe, boire une bière ou une bouteille de vin dans un parc ou sur un quai, tant que cela reste discret et sans nuisance.

-   La tolérance est conditionnée par le fait de ne pas provoquer de troubles à l''ordre public (bruit, dégradations, bagarres), de ne pas gêner les passants, et de ne pas être en état d''ivresse manifeste.

-   La consommation d''alcool est interdite aux mineurs de moins de 18 ans. La police peut contrôler l''âge.



-   Les maires et les préfets ont le pouvoir de prendre des **arrêtés** pour interdire la consommation d''alcool sur la voie publique dans certaines zones ou à certaines heures.
-   **Horaires** : L''interdiction peut être permanente ou à des horaires spécifiques (ex: après 22h ou 23h).

-   Quel que soit le lieu, être en état d''**ivresse publique et manifeste (IPM)** est une infraction. La police peut vous interpeller, vous placer en cellule de dégrisement, et vous infliger une amende.

-   La consommation d''alcool peut être interdite lors de manifestations, de concerts, de grands rassemblements.

-   Il est interdit de consommer de l''alcool dans les transports en commun.

🔗 [Ministère de l''Intérieur : Ivresse publique](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Prevention-des-risques/Cybercriminalite) - (Note: lien général, il n''y a pas de page spécifique sur l''IPM sur ce site).



-   Lutte contre l''alcoolisation excessive et les troubles à l''ordre public.





-   L''alcool réduit votre vigilance.

#### c) Respectez l''environnement et les autres

#### d) N''oubliez pas votre pièce d''identité.
#### e) Ne conduisez jamais après avoir bu de l''alcool.


-   Votre **pièce d''identité**.


-   **Si vous êtes en groupe, la consommation d''alcool attire plus l''attention.**
-   **Les "apéros" en extérieur sont agréables**, mais prévoyez des options sans alcool et soyez discret(e).
-   **Le fait d''être étranger(ère) ne vous exempte pas de respecter la loi**.


-   **Ne pas connaître les arrêtés municipaux ou préfectoraux** qui interdisent la consommation d''alcool dans certaines zones.
-   **Se retrouver en état d''ivresse publique et manifeste** : Amende et potentiellement cellule de dégrisement.
-   **Acheter de l''alcool pour des mineurs**.


-   🔗 [Service-Public.fr : Consommation d''alcool sur la voie publique](https://www.service-public.fr/particuliers/vosdroits/F3025) - La référence officielle.
-   🔗 [Ministère de la Santé et de la Prévention : Prévention de l''alcool](https://sante.gouv.fr/sante-et-environnement/les-addictions/alcool) - Informations officielles.
-   🔗 [Légifrance : Code de la Santé Publique (Articles sur l''alcool)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006073189/) - Textes de loi (Articles L3322-1 et suivants).
-   🔗 [Alcool Info Service (0 980 980 980)](https://www.alcool-info-service.fr/) - Ligne d''écoute et d''information.


La consommation d''alcool sur la voie publique en France est généralement tolérée si elle ne trouble pas l''ordre public, mais elle est souvent interdite dans certaines zones (centres-villes, parcs) ou à certaines heures par des arrêtés municipaux. Renseignez-vous sur la réglementation spécifique de votre ville (sur le site de la mairie). Consommez avec modération, respectez l''environnement, ne faites pas de bruit, et ne soyez jamais en état d''ivresse manifeste. Maîtriser ces informations est absolument crucial pour respecter la loi, éviter les ennuis avec la police, et profiter des moments conviviaux en extérieur en toute sécurité.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 107 ---

-- COURS 97 : Le Pourboire
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le Pourboire en France : Service compris,
  un geste apprécié',
  'pourboire-france-service-compris-geste-apprecie',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre la culture du "pourboire" dans les restaurants, cafés, taxis et autres services. Contrairement à de nombreux pays où le pourboire est obligatoire, en France, le "service est compris" dans le prix. Ne pas connaître cette règle, c''est risquer de payer deux fois ou de laisser un pourboire inapproprié. Nous vous expliquerons que le service est inclus dans le prix final, et quand (et comment) il est apprécié de laisser quelques pièces en signe de satisfaction. Maîtriser cette nuance est absolument crucial pour gérer votre budget, faire preuve de savoir-vivre, et vivre des interactions fluides et agréables avec le personnel de service en France.',
  'Pourboire France : service compris,
  non obligatoire,
  quand laisser quelques pièces. Comprenez la culture du pourboire et faites preuve de savoir-vivre !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre que le "service est compris" en France (pas de pourboire obligatoire)", "Identifier les situations où le pourboire est apprécié (qualité du service)", "Savoir quel montant laisser (quelques euros, petite monnaie) et comment", "Maîtriser les conseils pour faire preuve de savoir-vivre et gérer son budget"]'::jsonb,
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

-- LEÇONS pour COURS 97
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Service compris : Pas d''obligation',
  '# Service compris : Pas d''obligation de pourboire en France

## Pourquoi c''est important ?

Dans de nombreux pays, le pourboire (ou "tip") est une part essentielle de la rémunération du personnel de service (serveurs, coiffeurs, chauffeurs de taxi) et est souvent obligatoire ou très fortement attendu. En France, la règle est différente et fondamentale à comprendre : le **"service est compris"** dans le prix que vous payez. Cela signifie que le personnel est déjà rémunéré par l''établissement, et le pourboire n''est donc **pas obligatoire**. Ne pas connaître cette spécificité, c''est risquer de laisser un pourboire alors que ce n''est pas attendu, de surpayer, ou au contraire, de ne pas comprendre pourquoi le personnel ne vous remercie pas avec l''insistance que vous connaissez. Maîtriser cette nuance est absolument crucial pour gérer votre budget, faire preuve de savoir-vivre, et avoir des interactions fluides.


-   Définir ce que signifie "service compris" en France.
-   Comprendre pourquoi le pourboire n''est pas une obligation légale.
-   Identifier la différence culturelle par rapport à d''autres pays.





### 1. Qu''est-ce que "Service compris" en France ?


-   Le prix affiché sur la carte d''un restaurant, le tarif d''une coupe chez le coiffeur, ou le prix d''une course de taxi inclut déjà le coût du service (la rémunération du personnel).

-   Puisque le service est déjà compris, vous n''avez aucune obligation légale ou sociale de laisser un pourboire.
-   C''est une différence majeure par rapport aux États-Unis ou à d''autres pays.

-   Cette règle s''applique à la plupart des services : restaurants, cafés, bars, coiffeurs, taxis, hôtels, livraisons.

### 2. Pourquoi le pourboire n''est pas une obligation ?




-   Dans la culture française, le pourboire est un "plus", un geste de reconnaissance exceptionnelle, pas une compensation pour un salaire bas.

🔗 [Ministère de l''Économie et des Finances : Pourboires](https://www.economie.gouv.fr/particuliers/pourboires) - Informations générales.



-   Vous n''avez pas besoin de prévoir systématiquement un pourboire dans votre budget lorsque vous consommez.

#### b) Éviter le "trop-payé"

-   Le personnel de service ne s''attendra pas à un pourboire systématique et ne vous remerciera pas avec insistance si vous n''en laissez pas.



-   Ce n''est pas une obligation.

-   Si le service a été exceptionnel, si le personnel a été particulièrement agréable ou serviable, un petit pourboire est une marque d''appréciation.

-   **En espèces** : C''est souvent préféré, car cela va directement au personnel (surtout dans les petits commerces).
-   **Sur le terminal de paiement** : Certains terminaux de paiement proposent désormais d''ajouter un pourboire.

-   Si le service n''a pas été bon, ou si votre budget est très serré, vous n''avez pas à laisser de pourboire.




-   **La politesse (Bonjour, Merci, S''il vous plaît)** est plus importante que le pourboire pour une bonne interaction.
-   **N''hésitez pas à demander "Le service est compris ?"** si vous avez un doute (mais la réponse est toujours oui en France).


-   **Laisser un pourboire par obligation ou par habitude** si le service n''était pas exceptionnel.
-   **Se sentir mal à l''aise de ne pas laisser de pourboire**.
-   **Confondre les attentes françaises avec celles de votre pays d''origine**.


-   🔗 [Ministère de l''Économie et des Finances : Pourboires](https://www.economie.gouv.fr/particuliers/pourboires) - Informations générales.
-   🔗 [UMIH (Union des Métiers et des Industries de l''Hôtellerie)](https://www.umih.fr/) - Organisation professionnelle.


En France, le "service est compris" dans le prix des prestations (restaurants, cafés, coiffeurs, taxis), ce qui signifie que le pourboire n''est pas obligatoire. Le personnel est déjà rémunéré. Le pourboire est un geste facultatif d''appréciation pour un service exceptionnel (quelques euros ou 5-10% du prix). Maîtriser cette nuance est absolument crucial pour gérer votre budget, faire preuve de savoir-vivre, et avoir des interactions fluides et agréables avec le personnel de service en France. Ne vous sentez jamais obligé(e) de laisser un pourboire.
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
  'Quand laisser quelques pièces ?',
  '# Quand laisser quelques pièces ? (Le Pourboire en France)

## Pourquoi c''est important ?

Bien que le pourboire ne soit pas obligatoire en France (le "service est compris"), il reste une pratique courante et appréciée pour remercier un personnel de service dont la prestation a été particulièrement bonne. Savoir quand et comment laisser quelques pièces (ou un petit billet) est une nuance subtile du savoir-vivre français. Ne pas connaître ces situations, c''est risquer de manquer une occasion de montrer votre gratitude, ou de se sentir mal à l''aise en ne sachant pas comment faire. Pour les étudiants internationaux, maîtriser ce "timing" et ce geste est absolument crucial pour des interactions sociales réussies, une bonne intégration, et pour laisser une bonne impression.











-   Si le chauffeur a été ponctuel, courtois, et si le trajet s''est bien passé.





-   Si la note est élevée et que le service a été excellent, vous pouvez laisser un petit pourcentage (5% à 10% de la note), mais ce n''est pas obligatoire.

-   Souvent, on laisse simplement la monnaie ou on arrondit à l''euro supérieur si le service a été bon.




-   De plus en plus de terminaux de paiement par carte proposent désormais d''ajouter un pourboire.




#### a) N''ayez pas peur de ne rien laisser
-   Si le service était moyen ou si votre budget est très serré, vous n''avez aucune obligation.

#### b) Un sourire et un "Merci" sont essentiels




-   Votre **sens de l''observation**.


-   **Ne vous sentez pas mal à l''aise de ne pas en laisser** si vous n''êtes pas satisfait(e) ou si vous n''avez pas les moyens.
-   **Le pourboire n''est pas une obligation pour les étudiants**.


-   **Laisser un pourboire par obligation** si ce n''est pas justifié.


-   🔗 [Ministère de l''Économie et des Finances : Pourboires](https://www.economie.gouv.fr/particuliers/pourboires) - Informations générales.
-   🔗 [UMIH (Union des Métiers et des Industries de l''Hôtellerie)](https://www.umih.fr/) - Organisation professionnelle.


Bien que le "service soit compris" en France et que le pourboire ne soit pas obligatoire, laisser quelques pièces (quelques euros ou 5-10%) est un geste apprécié pour un service de qualité exceptionnelle (restaurants, cafés, coiffeurs, taxis). Laissez-le discrètement en espèces ou via le terminal de paiement. Maîtriser quand laisser un pourboire (et dans quel montant) est absolument crucial pour les étudiants internationaux afin de faire preuve de savoir-vivre, de remercier le personnel, et d''avoir des interactions fluides et agréables en France. Ne vous sentez jamais obligé(e).
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 108 ---

-- COURS 98 : LGBTQ+ en France
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'LGBTQ+ en France : Droits,
  mariage pour tous et associations',
  'lgbtq-france-droits-mariage-tous-associations',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre la situation des personnes LGBTQ+ (Lesbiennes, Gays, Bisexuels, Transgenres, Queers et autres). La France est un pays qui reconnaît de nombreux droits aux personnes LGBTQ+, notamment le mariage et l''adoption pour tous. Cependant, il est crucial de connaître ces droits, de comprendre le cadre légal et social, et de savoir où trouver du soutien si nécessaire. Nous vous expliquerons les principaux droits des personnes LGBTQ+, la loi sur le "mariage pour tous", et le rôle des centres et associations LGBTQ+. Maîtriser ces informations est absolument crucial pour vivre votre identité en toute sécurité, vous intégrer dans la société française, et savoir comment réagir en cas de discrimination ou de problème.',
  'LGBTQ+ France : droits (mariage pour tous),
  centres LGBT,
  Marche des Fiertés. Vivez votre identité en sécurité et intégrez-vous !',
  'culture_codes_sociaux',
  'avance',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre les droits des personnes LGBTQ+ en France (orientation sexuelle, identité de genre)", "Identifier les lois sur le mariage et l''adoption pour tous", "Savoir où trouver des centres et associations LGBTQ+ pour le soutien", "Maîtriser les conseils pour vivre son identité en sécurité et réagir en cas de discrimination"]'::jsonb,
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

-- LEÇONS pour COURS 98
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Droits et Mariage pour tous',
  '# Droits et Mariage pour tous (LGBTQ+ en France)

## Pourquoi c''est important ?

La France est un pays qui a légalisé de nombreux droits pour les personnes LGBTQ+ (Lesbiennes, Gays, Bisexuels, Transgenres, Queers et autres), notamment le mariage et l''adoption pour tous. Comprendre ces droits et le cadre légal qui protège les personnes LGBTQ+ est absolument crucial pour les étudiants internationaux. Ne pas connaître ces lois, c''est risquer de se sentir en insécurité, de ne pas savoir comment faire valoir ses droits en cas de discrimination, ou de ne pas comprendre la situation sociale en France. Maîtriser ces informations est fondamental pour vivre son identité en toute sécurité et sérénité, et pour s''intégrer dans une société qui valorise l''égalité et la non-discrimination.


-   Comprendre la loi sur le "mariage pour tous" (mariage et adoption homosexuelle).
-   Identifier la protection contre la discrimination fondée sur l''orientation sexuelle et l''identité de genre.






L''égalité est la règle.

-   La loi française interdit toute discrimination fondée sur l''**orientation sexuelle** et l''**identité de genre** dans de nombreux domaines : emploi, logement, accès aux biens et services, éducation, santé.

#### b) Reconnaissance légale de l''identité de genre
-   Les personnes transgenres peuvent changer leur mention de sexe à l''état civil sans obligation de chirurgie ni de traitement médical.



### 2. Le "Mariage pour tous" et l''adoption homosexuelle

L''égalité devant la loi.


-   La loi a également ouvert l''**adoption aux couples de personnes de même sexe**, mariés ou non.






-   Présents dans les grandes villes. Ce sont des lieux d''accueil, d''écoute, d''information et de soutien pour les personnes LGBTQ+.


#### c) Lignes d''écoute
-   **SOS Homophobie** (01 48 06 42 41) : Ligne d''écoute et d''aide aux victimes d''homophobie et de transphobie.

-   Un événement annuel (juin-juillet) qui célèbre la diversité et les droits LGBTQ+ dans de nombreuses villes françaises. C''est un moment de fête et de revendication.




-   Le fait d''être étranger(ère) ne vous prive pas de ces droits.

-   Bien que la France soit ouverte, des actes de discrimination ou d''agression peuvent toujours survenir.

#### c) Si vous êtes victime de discrimination ou d''agression
-   **Contactez le Défenseur des Droits** : C''est l''institution indépendante qui lutte contre les discriminations.

-   Fréquentez les centres LGBT+, les bars ou clubs "friendly", les associations étudiantes.




-   **Participez à la Marche des Fiertés** : C''est un moment de célébration et de visibilité.


-   **Penser que l''homophobie ou la transphobie n''existent pas en France** : Elles existent, mais sont réprimées par la loi.
-   **Ignorer les ressources d''aide et de soutien**.


-   🔗 [Le Refuge](https://www.le-refuge.org/) - Association d''aide aux jeunes LGBT+.


La France reconnaît de nombreux droits aux personnes LGBTQ+ (non-discrimination, mariage et adoption pour tous, reconnaissance de l''identité de genre) et protège contre la haine et les violences. Il est absolument crucial de connaître ces droits pour vivre votre identité en toute sécurité et sérénité. N''hésitez pas à contacter les centres et associations LGBTQ+ (Fédération LGBTI+) pour du soutien, et le Défenseur des Droits en cas de discrimination. Maîtriser ces informations est fondamental pour une intégration réussie dans la société française et pour faire valoir vos droits.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 109 ---

-- COURS 99 : Checklist Départ
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Checklist Départ de France : Résilier contrats,
  Sécu et banque',
  'checklist-depart-france-resilier-contrats-secu-banque',
  'Ce cours est un guide absolument essentiel pour tous les étudiants internationaux qui s''apprêtent à quitter la France. Un départ réussi ne se limite pas à faire ses valises : il implique une série de démarches administratives et financières cruciales pour résilier tous vos contrats et éviter les frais inattendus ou les dettes. Nous vous fournirons une checklist complète pour résilier tous vos contrats (logement, énergie, internet, téléphone), pour clôturer votre affiliation à la Sécurité Sociale, et pour fermer votre compte bancaire français. Maîtriser cette checklist est fondamental pour un départ serein, en toute conformité, et sans mauvaises surprises qui pourraient impacter votre avenir. Ne laissez rien au hasard !',
  'Checklist Départ France : résilier logement,
  énergie,
  internet,
  tel,
  Sécu,
  banque. Partez sereinement et sans dettes !',
  'integration_administrative',
  'intermediaire',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''importance d''une checklist complète pour son départ de France", "Savoir comment résilier tous ses contrats (logement, énergie, tel, internet)", "Identifier les démarches pour clôturer son affiliation à la Sécurité Sociale", "Maîtriser les étapes pour fermer son compte bancaire français et transférer son solde"]'::jsonb,
  '["Avoir un logement et des contrats en France",
  "Préparer son départ définitif"]'::jsonb,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 99
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Résilier tous les contrats (2 mois avant)',
  '# Résilier tous les contrats (2 mois avant)

## Pourquoi c''est important ?

Lorsque vous préparez votre départ définitif de la France, la résiliation de tous vos contrats (logement, énergie, internet, téléphone, assurances) est une étape administrative absolument cruciale et qui demande de l''anticipation. Ne pas le faire correctement, ou ne pas respecter les délais de préavis, c''est risquer de continuer à payer des abonnements pour des services que vous n''utilisez plus, de vous retrouver avec des dettes, ou de faire face à des frais de résiliation inattendus. Pour les étudiants internationaux, souvent pressés par le temps, une checklist de résiliation est fondamentale pour un départ serein, sans dettes, et en toute conformité avec la loi.


-   Comprendre l''importance de la résiliation anticipée de tous vos contrats.


Un départ bien préparé évite les mauvaises surprises financières. L''anticipation est la clé.





-   Lorsque vous signez un contrat (bail de location, abonnement téléphonique, contrat d''énergie), vous vous engagez pour une certaine durée et/ou avec un préavis de résiliation.

-   **Règle d''or** : Commencez à lister tous vos contrats et à préparer les résiliations au minimum **2 mois avant votre date de départ effective**.



    -   **1 mois** pour les locations meublées, et les locations non-meublées situées en zone tendue (ou pour motifs légitimes : perte d''emploi, premier emploi). (Voir cours 31.1).


    -   **Frais** : Frais de résiliation fixes (environ 49€) + pénalités si vous résiliez avant la fin de l''engagement (voir cours 25.4).
-   **Formalités** : Lettre de résiliation par LRAR ou via l''espace client.

    -   **Préavis** : Résiliation possible à tout moment après 1 an de contrat (loi Hamon). Pour un déménagement à l''étranger, la résiliation est possible.




-   Pour les contrats importants (bail, internet, assurances), utilisez toujours la LRAR. C''est la seule preuve légale. (Voir cours 72.2).
-   **Gardez toujours une copie de la lettre et les preuves d''envoi/réception.**

-   Motif (déménagement à l''étranger si applicable, avec justificatif).







-   **Créez un tableau de suivi** de toutes vos résiliations (contrat, date d''envoi, préavis, date de fin, frais).
-   **Ne laissez aucun contrat "dormir"**.


-   **Ne pas faire l''état des lieux de sortie** : Problèmes de caution.
-   **Clôturer son compte bancaire avant d''avoir reçu tous les remboursements** ou payé les dernières factures.


-   🔗 [ANIL (Agence Nationale pour l''Information sur le Logement) : Le congé donné par le locataire](https://www.anil.org/votre-projet/vous-etes-locataire/le-logement-loue/le-conge-donne-par-le-locataire/) - Résiliation du bail.
-   🔗 [La Poste : Lettre recommandée avec accusé de réception](https://www.laposte.fr/particulier/produits/envoyer-une-lettre-recommandee) - Pour l''envoi.


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
  'Résilier la sécu et la banque',
  '# Résilier la Sécu et la Banque (Checklist Départ de France)

## Pourquoi c''est important ?

Lorsque vous quittez définitivement la France, la clôture de votre affiliation à la Sécurité Sociale et de votre compte bancaire français sont des démarches administratives et financières absolument cruciales. Ne pas les effectuer correctement, c''est risquer de laisser un compte bancaire ouvert avec des frais qui continuent de s''appliquer, ou de ne pas pouvoir récupérer vos derniers remboursements de santé. Pour les étudiants internationaux, ces démarches sont fondamentales pour un départ serein, sans dettes, et en toute conformité. Maîtriser ces résiliations est crucial pour éviter les mauvaises surprises et garantir que tous vos liens financiers et sociaux avec la France sont proprement coupés.


-   Identifier les documents à fournir pour la CPAM (Caisse Primaire d''Assurance Maladie).






S''assurer que vous n''êtes plus affilié(e).

-   Vous devez informer votre Caisse Primaire d''Assurance Maladie (CPAM) de votre départ définitif de France.

    -   Votre nouvelle adresse à l''étranger.
    -   La raison de votre départ (fin d''études, retour au pays).
-   **Remboursement en attente** : Si vous attendez des remboursements de soins, assurez-vous que votre RIB est toujours valide ou fournissez un nouveau RIB si vous en avez un dans un pays de l''UE/EEE.


-   Vous n''avez pas besoin de rendre votre Carte Vitale. Elle sera désactivée.




#### a) Vérifier l''absence de prélèvements et virements automatiques
-   **Impératif** : C''est la première chose à faire ! (Voir cours 55.1).
-   Assurez-vous d''avoir payé toutes les dernières factures.

-   **Transfert du solde** : Précisez l''IBAN et le BIC/SWIFT du compte de destination (votre compte étranger). Attention aux frais de virement international (voir cours 51.1 et 55.3).


-   Demandez à la banque une **attestation de clôture de compte**. C''est une preuve importante.





-   **Déclaration de revenus** : Si vous avez travaillé en France ou eu des revenus, vous devrez faire votre dernière déclaration de revenus l''année de votre départ (même si vous partez avant la campagne de déclaration).


-   Assurez-vous que votre dépôt de garantie vous a été restitué (ou qu''il le sera sur votre nouveau compte). (Voir cours 32.2).


-   Si vous quittez le logement, vous pouvez demander à La Poste un service de réexpédition de votre courrier vers votre nouvelle adresse à l''étranger (service payant).


-   Vos **courriers de résiliation** (avec preuves d''envoi).


-   **Créez un dossier "Départ de France"** avec toutes les preuves de résiliation et les attestations.
-   **Laissez une adresse e-mail et une adresse postale à l''étranger** où vous pourrez être contacté(e).
-   **Prenez des photos de votre logement** après l''état des lieux de sortie.
-   **N''hésitez pas à demander conseil** aux services internationaux de votre université.


-   **Ne pas clôturer son compte bancaire** : Frais qui s''accumulent, argent bloqué.
-   **Clôturer le compte bancaire avant d''avoir tous les remboursements** (caution, mutuelle, APL).




',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 110 ---

-- COURS 100 : Réseau Alumni
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Réseau Alumni : Garder un lien professionnel avec la France',
  'reseau-alumni-garder-lien-professionnel-france',
  'Ce cours est essentiel pour tous les étudiants internationaux qui ont étudié en France et s''apprêtent à repartir dans leur pays d''origine (ou ailleurs). Votre expérience en France est un atout précieux, et le **réseau Alumni** est le moyen le plus efficace de garder un lien professionnel avec la France et de valoriser votre parcours à l''international. Ne pas le connaître, c''est se priver d''opportunités de carrière, d''échanges, et de soutien. Nous vous expliquerons le rôle de "France Alumni" (le réseau mondial des anciens élèves de l''enseignement supérieur français), comment rester connecté(e) avec votre établissement, et les avantages de maintenir un lien professionnel. Maîtriser ces outils est absolument crucial pour développer votre carrière à l''international et faire rayonner votre expérience française.',
  'Réseau Alumni : France Alumni (mondial),
  garder le lien avec votre école,
  opportunités pro. Valorisez votre expérience française à l''international !',
  'insertion_professionnelle',
  'avance',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''importance du réseau Alumni pour les diplômés internationaux",
  "Découvrir la plateforme "France Alumni" et ses avantages",
  "Savoir comment rester connecté(e) avec son établissement d''origine",
  "Maîtriser les conseils pour développer son réseau professionnel à l''international grâce à son expérience française"]'::jsonb,
  '["Avoir étudié dans un établissement d''enseignement supérieur français"]'::jsonb,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 100
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'France Alumni : Le réseau mondial',
  '# France Alumni : Le réseau mondial des diplômés de France

## Pourquoi c''est important ?

Après avoir terminé vos études en France et que vous retournez dans votre pays d''origine (ou partez ailleurs), il est absolument crucial de garder un lien avec la France et avec le réseau des anciens élèves. **"France Alumni"** est la plateforme officielle et mondiale des étudiants étrangers diplômés de l''enseignement supérieur français. Ne pas connaître ce réseau, c''est se priver d''une formidable opportunité de carrière, d''échanges professionnels, de veille sur les opportunités en France, et de soutien dans votre pays. Maîtriser l''inscription et l''utilisation de France Alumni est fondamental pour valoriser votre expérience française à l''international et développer votre carrière.


-   Définir ce qu''est France Alumni et son objectif.
-   Savoir comment s''inscrire sur France Alumni et créer son profil.


France Alumni est une initiative du Ministère de l''Europe et des Affaires Étrangères et de Campus France.



### 1. Qu''est-ce que France Alumni et son objectif ?


-   France Alumni est une plateforme qui met en réseau les étudiants internationaux (et les professionnels) qui ont étudié dans l''enseignement supérieur français.
-   C''est un outil pour rester connecté(e) avec la France après votre départ.

-   **Valoriser l''expérience française** : Mettre en avant la qualité des études et de l''expérience en France.
-   **Accompagner la carrière** : Aider à l''insertion professionnelle des diplômés.
-   **Promouvoir la France** à l''international.



-   **Mettre en relation** : Vous pouvez trouver d''autres diplômés de France dans votre pays, dans votre secteur, ou dans votre ville.

#### b) Offres d''emploi et de stages
-   La plateforme diffuse des offres d''emploi et de stages à l''international, souvent proposées par des entreprises françaises implantées à l''étranger, ou par des entreprises qui recherchent des profils francophones.

-   Informations sur l''actualité économique, culturelle, scientifique de la France.

-   Vous pouvez rejoindre des groupes par pays, par ville, par domaine d''études, ou par centre d''intérêt.



### 3. Comment s''inscrire sur France Alumni et créer son profil ?


#### a) Conditions d''éligibilité
-   Avoir étudié dans un établissement d''enseignement supérieur français (même pour une courte période).

-   Cliquez sur "Je m''inscris".

-   Remplissez toutes les sections : expériences professionnelles, compétences (y compris linguistiques), centres d''intérêt.
-   **Mettez en avant votre expérience française** et ce qu''elle vous a apporté.




#### b) Cherchez des contacts dans votre pays d''origine
-   Trouvez d''autres diplômés de France qui vivent dans votre pays. Ils peuvent vous donner des conseils pour l''insertion locale.

#### c) Veillez aux offres d''emploi

-   Si des événements sont organisés dans votre ville ou pays par France Alumni, allez-y ! C''est l''occasion de rencontrer des professionnels et de développer votre réseau.





-   **Les ambassades de France à l''étranger** peuvent également être une porte d''entrée.
-   **Le réseau est un échange** : N''hésitez pas à aider d''autres membres.


-   **Ne pas s''inscrire sur France Alumni** : Vous perdez une opportunité.
-   **Penser que le réseau est "automatique"** : Il faut l''activer.
-   **Faire des fautes d''orthographe** sur son profil.


-   🔗 [Ministère de l''Europe et des Affaires Étrangères : Diplomatie économique](https://www.diplomatie.gouv.fr/fr/politique-etrangere-de-la-france/diplomatie-economique/) - Le cadre politique de France Alumni.
-   🔗 [APEC (Association Pour l''Emploi des Cadres) : Carrière internationale](https://www.apec.fr/candidat/evoluer/carriere-internationale.html) - Conseils.
-   🔗 [Ambassades et Consulats de France à l''étranger](https://www.diplomatie.gouv.fr/fr/le-ministere-et-son-reseau/annuaires-et-adresses-du-reseau/ambassades-et-consulats-francais-a-l-etranger/) - Pour le réseau local.


France Alumni est le réseau mondial officiel des diplômés de l''enseignement supérieur français. S''y inscrire et activer votre profil est absolument crucial pour les étudiants internationaux afin de garder un lien professionnel avec la France, accéder à des offres d''emploi à l''international, et développer votre réseau. Restez connecté(e) avec votre établissement, participez aux événements, et valorisez votre expérience française sur tous vos supports. Maîtriser ce réseau est fondamental pour développer votre carrière et faire rayonner votre parcours à l''échelle internationale.
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
  'Garder un lien professionnel avec la France',
  '# Garder un lien professionnel avec la France

## Pourquoi c''est important ?

Votre séjour d''études en France vous a apporté un diplôme, des compétences, une expérience culturelle unique, et un réseau. Conserver et entretenir ce **lien professionnel avec la France** après votre départ est absolument crucial pour les étudiants internationaux. Ne pas le faire, c''est risquer de perdre les avantages de votre formation française, de ne pas être informé(e) des opportunités de carrière, ou de ne pas pouvoir vous appuyer sur votre réseau à l''avenir. Maîtriser les stratégies pour maintenir ce lien est fondamental pour valoriser votre parcours international, ouvrir des portes dans votre pays d''origine (si des entreprises françaises y sont implantées), et construire une carrière à la dimension européenne ou mondiale.


-   Savoir comment valoriser votre "marque personnelle" française à l''étranger.


L''expérience française est un atout sur le marché du travail international. Il faut savoir l''entretenir.





-   Les diplômes français sont reconnus et appréciés dans le monde entier, surtout dans l''Union Européenne.
-   Votre formation en France est un gage de qualité académique et d''ouverture internationale.

-   Votre maîtrise du français (et de l''anglais), ainsi que votre capacité à vous adapter à un nouvel environnement, sont des atouts majeurs.

-   Vous avez construit un réseau de contacts (professeurs, camarades, tuteurs de stage) en France et à l''international.



-   **Impératif** : C''est le canal officiel pour les diplômés étrangers (voir leçon précédente).
-   Mettez votre profil à jour, cherchez des contacts, consultez les offres d''emploi.

#### b) Votre établissement d''enseignement
-   **Association des anciens élèves (Alumni)** : Rejoignez l''association des alumni de votre université ou école. Elles organisent souvent des événements, des conférences, et un annuaire des anciens.

-   **Indispensable** : Maintenez votre profil LinkedIn à jour, avec une section "Formation" détaillée sur votre diplôme français.

#### d) Veille d''information
-   Continuez à lire la presse française, à écouter la radio, à regarder Arte (voir cours 80.3). Cela vous permet de rester informé(e) sur l''actualité économique, politique et culturelle.

-   Dans votre pays d''origine, il peut exister des chambres de commerce et d''industrie françaises, ou des clubs d''anciens élèves de France.

🔗 [APEC (Association Pour l''Emploi des Cadres) : Carrière internationale](https://www.apec.fr/candidat/evoluer/carriere-internationale.html) - Conseils professionnels.

### 3. Valoriser votre "marque personnelle" française à l''étranger


-   **Section "Formation"** : Indiquez clairement votre diplôme français et l''établissement.
-   **Section "Compétences"** : Mettez en avant vos compétences linguistiques (français, anglais) et interculturelles.

#### b) En entretien d''embauche
-   Expliquez ce que votre expérience française vous a apporté (nouvelles méthodes de travail, ouverture d''esprit, rigueur académique).
-   Faites le lien avec le poste et l''entreprise (ex: "J''ai développé une expertise en [domaine] en France, ce qui me permettra de...").

-   Continuez à pratiquer et à améliorer votre français. C''est un atout différenciant sur le marché du travail.


L''effort est la clé.

-   Ne contactez pas les gens uniquement quand vous avez besoin d''un service.









-   **Laisser ses compétences linguistiques en français s''étioler**.
-   **Ne pas entretenir son réseau** : Il s''affaiblit avec le temps.
-   **Penser que l''expérience française est universellement comprise** sans explication.


-   🔗 [Campus France : S''insérer professionnellement](https://www.campusfrance.org/fr/etudiant-etranger-apres-le-diplome) - Conseils spécifiques.
-   🔗 [APEC (Association Pour l''Emploi des Cadres) : Carrière internationale](https://www.apec.fr/candidat/evoluer/carriere-internationale.html) - Conseils professionnels.
-   🔗 [Ministère de l''Europe et des Affaires Étrangères : Diplomatie économique](https://www.diplomatie.gouv.fr/fr/politique-etrangere-de-la-france/diplomatie-economique/) - Le cadre politique.


Garder un lien professionnel avec la France est absolument crucial pour les étudiants internationaux. Votre diplôme et votre expérience française sont des atouts précieux (compétences linguistiques, interculturelles). Restez connecté(e) via France Alumni, l''association des anciens élèves de votre établissement, et LinkedIn. Valorisez votre "marque personnelle" française sur tous vos supports et entretenez votre réseau. Maîtriser ces stratégies est fondamental pour développer votre carrière à l''international, ouvrir de nouvelles portes, et continuer à faire rayonner votre parcours après votre départ de France.
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
  'Garder un lien professionnel avec la France',
  '# Garder un lien professionnel avec la France

## Pourquoi c''est important ?

Votre séjour d''études en France vous a apporté un diplôme, des compétences, une expérience culturelle unique, et un réseau. Conserver et entretenir ce **lien professionnel avec la France** après votre départ est absolument crucial pour les étudiants internationaux. Ne pas le faire, c''est risquer de perdre les avantages de votre formation française, de ne pas être informé(e) des opportunités de carrière, ou de ne pas pouvoir vous appuyer sur votre réseau à l''avenir. Maîtriser les stratégies pour maintenir ce lien est fondamental pour valoriser votre parcours international, ouvrir des portes dans votre pays d''origine (si des entreprises françaises y sont implantées), et construire une carrière à la dimension européenne ou mondiale.


-   Savoir comment valoriser votre "marque personnelle" française à l''étranger.


L''expérience française est un atout sur le marché du travail international. Il faut savoir l''entretenir.





-   Les diplômes français sont reconnus et appréciés dans le monde entier, surtout dans l''Union Européenne.
-   Votre formation en France est un gage de qualité académique et d''ouverture internationale.

-   Votre maîtrise du français (et de l''anglais), ainsi que votre capacité à vous adapter à un nouvel environnement, sont des atouts majeurs.

-   Vous avez construit un réseau de contacts (professeurs, camarades, tuteurs de stage) en France et à l''international.



-   **Impératif** : C''est le canal officiel pour les diplômés étrangers (voir leçon précédente).
-   Mettez votre profil à jour, cherchez des contacts, consultez les offres d''emploi.

#### b) Votre établissement d''enseignement
-   **Association des anciens élèves (Alumni)** : Rejoignez l''association des alumni de votre université ou école. Elles organisent souvent des événements, des conférences, et un annuaire des anciens.

-   **Indispensable** : Maintenez votre profil LinkedIn à jour, avec une section "Formation" détaillée sur votre diplôme français.

#### d) Veille d''information
-   Continuez à lire la presse française, à écouter la radio, à regarder Arte (voir cours 80.3). Cela vous permet de rester informé(e) sur l''actualité économique, politique et culturelle.

-   Dans votre pays d''origine, il peut exister des chambres de commerce et d''industrie françaises, ou des clubs d''anciens élèves de France.

🔗 [APEC (Association Pour l''Emploi des Cadres) : Carrière internationale](https://www.apec.fr/candidat/evoluer/carriere-internationale.html) - Conseils professionnels.

### 3. Valoriser votre "marque personnelle" française à l''étranger


-   **Section "Formation"** : Indiquez clairement votre diplôme français et l''établissement.
-   **Section "Compétences"** : Mettez en avant vos compétences linguistiques (français, anglais) et interculturelles.

#### b) En entretien d''embauche
-   Expliquez ce que votre expérience française vous a apporté (nouvelles méthodes de travail, ouverture d''esprit, rigueur académique).
-   Faites le lien avec le poste et l''entreprise (ex: "J''ai développé une expertise en [domaine] en France, ce qui me permettra de...").

-   Continuez à pratiquer et à améliorer votre français. C''est un atout différenciant sur le marché du travail.


L''effort est la clé.

-   Ne contactez pas les gens uniquement quand vous avez besoin d''un service.









-   **Laisser ses compétences linguistiques en français s''étioler**.
-   **Ne pas entretenir son réseau** : Il s''affaiblit avec le temps.
-   **Penser que l''expérience française est universellement comprise** sans explication.


-   🔗 [Campus France : S''insérer professionnellement](https://www.campusfrance.org/fr/etudiant-etranger-apres-le-diplome) - Conseils spécifiques.
-   🔗 [APEC (Association Pour l''Emploi des Cadres) : Carrière internationale](https://www.apec.fr/candidat/evoluer/carriere-internationale.html) - Conseils professionnels.
-   🔗 [Ministère de l''Europe et des Affaires Étrangères : Diplomatie économique](https://www.diplomatie.gouv.fr/fr/politique-etrangere-de-la-france/diplomatie-economique/) - Le cadre politique.


Garder un lien professionnel avec la France est absolument crucial pour les étudiants internationaux. Votre diplôme et votre expérience française sont des atouts précieux (compétences linguistiques, interculturelles). Restez connecté(e) via France Alumni, l''association des anciens élèves de votre établissement, et LinkedIn. Valorisez votre "marque personnelle" française sur tous vos supports et entretenez votre réseau. Maîtriser ces stratégies est fondamental pour développer votre carrière à l''international, ouvrir de nouvelles portes, et continuer à faire rayonner votre parcours après votre départ de France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

