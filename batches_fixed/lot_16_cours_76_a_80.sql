-- ==========================================
-- LOT 16 : Cours 76 à 80
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 76 ---

-- COURS 77 : La Bise
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La Bise en France : À qui, combien, comment ?',
  'bise-france-qui-combien-comment',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre un code social emblématique mais complexe : la "bise" (le fait de s''embrasser sur la joue pour se saluer). Les règles concernant "à qui fait-on la bise ?", "combien de bises selon la région ?", et "comment la faire ?" sont très subtiles et peuvent être une source d''embarras ou de malentendus si vous n''êtes pas familier(ère) avec les coutumes françaises. Nous aborderons les conventions, les variations régionales du nombre de bises, et l''impact de la pandémie sur les habitudes. Maîtriser ce rituel est absolument crucial pour des interactions sociales réussies, une bonne intégration, et pour éviter les situations inconfortables.',
  'La Bise en France : à qui (amis, famille), combien (2, 3, 4 ?), comment faire. Maîtrisez ce rituel social et intégrez-vous !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le rituel de la "bise" en France et ses conventions sociales", "Identifier les personnes à qui l''on fait la bise (amis, famille, collègues proches)", "Savoir le nombre de bises (2, 3, 4) et les variations régionales", "Maîtriser les conseils pour faire la bise correctement et gérer les situations délicates"]'::jsonb,
  '[]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 77
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'À qui fait-on la bise ?',
  '# À qui fait-on la bise ?

## Pourquoi c''est important ?

La "bise" (le fait de s''embrasser sur la joue pour se saluer) est un rituel social emblématique en France, mais ses règles d''application sont complexes et souvent implicites. Savoir **à qui faire la bise et à qui ne pas la faire** est absolument crucial pour les étudiants internationaux afin d''éviter les malentendus, les situations embarrassantes, ou de paraître trop familier(ère) (ou trop distant(e)). Ne pas maîtriser ces codes, c''est risquer de créer un malaise dans vos interactions sociales et de ne pas vous intégrer harmonieusement. C''est une des clés de votre adaptation à la culture française.


-   Identifier les catégories de personnes à qui l''on fait la bise.


La bise est une marque d''affection ou de convivialité, mais elle n''est pas universelle.

🔗 [Vie-publique.fr : La bise](https://www.vie-publique.fr/fiches/271708-la-laicite) - (Note : lien générique, il n''y a pas de fiche spécifique sur la bise mais c''est un phénomène culturel).




-   La bise est une salutation physique qui consiste à poser sa joue contre celle de l''autre personne et à faire un petit bruit de baiser avec les lèvres (on ne fait pas un "vrai" baiser, c''est un contact de joue).
-   Elle est souvent accompagnée d''un "Bonjour", "Salut", "Comment ça va ?".

-   La bise est un geste qui marque la proximité, l''amitié, la familiarité, ou les liens familiaux.
-   **Elle n''est jamais un signe de respect hiérarchique ou de formalité.**

### 2. Les personnes à qui l''on fait la bise



#### b) Les collègues (selon l''environnement)
-   **Environnement informel** : Dans certaines entreprises ou associations, et si l''ambiance est décontractée, les collègues (hommes et femmes) peuvent se faire la bise.


-   Des personnes que vous croisez régulièrement (voisins proches, parents d''amis) peuvent aussi se faire la bise, après un premier contact par poignée de main.




-   **Poignée de main ou simple bonjour** : Un simple "Bonjour" ou une poignée de main est suffisant si la situation l''exige.

-   **Commerçants, vendeurs, serveurs, personnel administratif** : On ne leur fait jamais la bise. La poignée de main est très rare. Un simple "Bonjour" et "Au revoir" est la norme.

#### c) Les figures d''autorité ou de hiérarchie
-   **Professeurs, administrateurs, policiers** : Toujours une poignée de main (si la situation s''y prête) ou un simple "Bonjour". Jamais la bise.

-   Entretiens d''embauche, réunions professionnelles, cérémonies officielles : La poignée de main est de rigueur.


L''observation est la clé.

-   C''est la meilleure façon d''apprendre. Regardez comment les Français interagissent entre eux dans différentes situations.

#### b) Laissez l''autre personne initier
-   Si vous n''êtes pas sûr(e), attendez que l''autre personne fasse le geste de tendre la joue pour la bise. Si elle tend la main, c''est une poignée de main. Si elle ne fait rien, un simple "Bonjour" suffit.

#### c) Si vous hésitez, optez pour la poignée de main ou un "Bonjour"

#### d) Le "Salut" et le "Tu"
-   Le "Salut" est une salutation informelle qui accompagne souvent la bise ou le tutoiement. Si l''on vous dit "Salut", c''est un signe de familiarité.


-   Votre **sens de l''observation**.


-   **N''ayez pas peur de faire une erreur au début** : Les Français sont généralement compréhensifs avec les étrangers qui apprennent.
-   **Pensez à l''odeur et à l''hygiène** : C''est un contact physique.


-   **Ne pas faire la bise à un ami proche** qui s''y attend : Peut être perçu comme de la froideur.
-   **Se sentir mal à l''aise et ne rien faire du tout** : Un geste d''accueil est souvent attendu.
-   **Forcer le contact physique** si l''autre personne ne le souhaite pas.


-   🔗 [Académie Française : Question de l''usage du "tu" et du "vous"](https://www.academie-francaise.fr/questions-de-langue/usage-du-tu-et-du-vous) - La référence sur la politesse.
-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils culturels.


La bise est un rituel de salutation qui marque la proximité en France. On la fait généralement à la famille proche, aux amis, et aux camarades de promotion, mais **jamais** aux inconnus, aux professionnels de services, ou aux figures d''autorité. En cas de doute, laissez l''autre personne initier le geste ou optez pour une poignée de main ou un simple "Bonjour". L''observation des coutumes locales est essentielle. Maîtriser à qui faire la bise est absolument crucial pour des interactions sociales réussies, éviter les malentendus, et faciliter votre intégration dans la culture française.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Combien de bises selon la région',
  '# Combien de bises selon la région

## Pourquoi c''est important ?

Le rituel de la "bise" en France est déjà complexe, mais il y a une subtilité supplémentaire : le **nombre de bises** varie d''une région à l''autre ! Dans certaines régions, on en fait deux, dans d''autres trois, voire quatre. Ne pas connaître ces variations régionales, c''est risquer de créer un moment de gêne, de malaise, ou de paraître non initié aux coutumes locales. Pour les étudiants internationaux qui voyagent et découvrent différentes villes françaises, maîtriser cette spécificité est absolument crucial pour des interactions sociales fluides, une bonne intégration, et pour éviter les situations embarrassantes. C''est un détail culturel qui compte.


-   Identifier les régions où l''on fait 2, 3 ou 4 bises.
-   Savoir comment réagir en cas d''incertitude ou de décalage.
-   Maîtriser les conseils pour s''adapter aux pratiques locales.







-   On commence généralement par la joue droite (en présentant sa joue droite pour que l''autre pose sa joue gauche), puis la joue gauche.

-   **Île-de-France (Paris et sa région)** : C''est la norme la plus répandue.
-   **Bretagne, Normandie, Pays de la Loire, Centre-Val de Loire, Nouvelle-Aquitaine, Occitanie (Ouest), PACA (Côte d''Azur)**.
-   C''est le réflexe à avoir si vous êtes en voyage et que vous ne connaissez pas les coutumes locales.





-   **Certaines parties de l''Occitanie** (Est, comme Toulouse).
-   **Certaines parties de la PACA** (Provence-Alpes-Côte d''Azur).


Principalement dans l''Est de la France.


-   C''est la pratique la moins répandue.

### 4. L''impact de la COVID-19 et le retour du "check"



-   Le "check" (salutation de la main type "poing à poing" ou "poignée de main rapide") est devenu plus courant, surtout entre jeunes.


### 5. Conseils pour s''adapter et éviter les situations délicates

L''observation et le mimétisme.

-   C''est la meilleure façon de savoir le nombre de bises dans une région donnée, ou avec un groupe de personnes.

#### b) Laissez l''autre initier le mouvement
-   Si vous n''êtes pas sûr(e) du nombre, tendez la joue (ou la main) et laissez l''autre personne initier le nombre de bises. Suivez le mouvement.

-   Vous avez le droit de refuser la bise si vous n''êtes pas à l''aise avec le contact physique. Tendez la main pour une poignée de main, ou mettez la main sur la poitrine en saluant verbalement.
-   Expliquez poliment : "Je préfère ne pas faire la bise, si ça ne vous dérange pas." Les Français le comprendront, surtout après la pandémie.

#### d) Un petit sourire et un "Salut" ou "Bonjour"
-   Accompagnez toujours le geste d''une salutation verbale.


-   Votre **sens de l''observation**.


-   **Renseignez-vous sur la pratique de la bise dans votre ville d''études.**


-   **Forcer la bise** si l''autre personne se retire.
-   **Se sentir mal à l''aise** et ne rien faire du tout.


-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils culturels.


Le nombre de bises pour se saluer varie en France : 2 bises sont la norme la plus courante (Île-de-France), 3 bises sont faites dans certaines zones, et 4 bises sont plus rares (Est). En cas d''incertitude, observez ce que font les autres ou laissez l''autre personne initier le mouvement. Le respect et le tact sont essentiels. Maîtriser ces variations régionales est absolument crucial pour des interactions sociales fluides, une bonne intégration, et pour éviter les situations embarrassantes lors de vos rencontres en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Covid/Grippe : Le retour du check',
  '# Covid/Grippe : Le retour du check (Salutations)

## Pourquoi c''est important ?

La pandémie de COVID-19 et les épidémies saisonnières (grippe, gastro-entérite) ont profondément modifié les habitudes de salutation en France. Le rituel traditionnel de la "bise" a été fortement impacté, et de nouvelles formes de salutation (le "check" du poing, le salut de la main, le salut verbal) sont devenues plus courantes. Pour les étudiants internationaux, comprendre ces évolutions est absolument crucial. Ne pas être conscient(e) des nouvelles pratiques, c''est risquer de mettre l''autre personne mal à l''aise en proposant la bise si elle préfère la distance, ou de ne pas savoir comment saluer. Maîtriser ces adaptations est fondamental pour des interactions sociales respectueuses, fluides, et conformes aux sensibilités actuelles en France.


-   Comprendre l''impact de la COVID-19 sur les rituels de salutation en France.
-   Identifier les nouvelles formes de salutation (le "check", le salut verbal) devenues courantes.





### 1. L''impact de la COVID-19 sur les rituels de salutation


-   Pendant les périodes de forte épidémie (COVID-19, grippe), les autorités sanitaires ont recommandé d''éviter les contacts physiques, y compris la bise.
-   Beaucoup de Français ont adopté un salut verbal ("Bonjour", "Salut") ou un signe de la main.

#### b) Sensibilisation à l''hygiène

### 2. Le retour du "check" et d''autres salutations

De nouvelles habitudes s''installent.

#### a) Le "check" (poing à poing, coude à coude)
-   **Popularité** : Le "check" (taper le poing, ou le coude) est devenu une forme de salutation courante, surtout entre jeunes, ou dans des contextes informels.

-   Un simple signe de la main, accompagné d''un "Bonjour" ou "Salut", est également très répandu et parfaitement acceptable, surtout si l''on ne connaît pas bien la personne ou si l''on ne souhaite pas de contact physique.




L''observation et le respect de l''autre.

#### a) Observez le mouvement de l''autre
-   **La règle d''or** : Si vous n''êtes pas sûr(e), attendez que l''autre personne initie le mouvement.
    -   Si elle tend la main : faites une poignée de main (ou un check si c''est une personne jeune dans un contexte informel).
    -   Si elle ne fait rien (juste un salut verbal) : contentez-vous d''un salut verbal.


#### c) L''âge de la personne




#### a) Soyez respectueux(se) de la préférence de l''autre
-   Si l''autre personne se retire, ne forcez jamais le contact physique.

-   Si vous préférez ne pas faire la bise : "Bonjour, je préfère ne pas faire la bise, si ça ne vous dérange pas." ou "Bonjour, une poignée de main me convient mieux."

-   Respectez une certaine distance physique, surtout au début d''une interaction.

#### d) L''hygiène des mains


-   Votre **sens de l''observation**.


-   **N''ayez pas peur d''adapter vos habitudes.**
-   **Un sourire et un "Bonjour" ou "Salut" sont toujours appropriés.**
-   **En cas de doute, imitez le geste de l''autre.**


-   **Forcer la bise** si l''autre personne ne le souhaite pas.
-   **Penser qu''un refus de bise est un rejet personnel** (il peut être lié à des raisons sanitaires ou de préférence).
-   **Ne pas respecter l''espace personnel de l''autre**.
-   **Être trop familier** d''emblée.


-   🔗 [France Inter : Comment se saluer aujourd''hui ?](https://www.franceinter.fr/emissions/le-grand-format/le-grand-format-du-29-janvier-2016) - Peut aborder l''évolution des salutations.
-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils culturels.


La pandémie de COVID-19 a fait évoluer les rituels de salutation en France, avec un retour du "check" et une plus grande acceptation du salut verbal ou de la poignée de main, en complément de la bise. En cas de doute, observez l''autre personne et laissez-la initier le geste. Respectez toujours la préférence de votre interlocuteur pour le contact physique. Maîtriser ces adaptations est absolument crucial pour des interactions sociales respectueuses, fluides, et conformes aux sensibilités actuelles en France, garantissant ainsi une bonne intégration.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 77 ---

-- COURS 78 : Repas et Resto U
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Repas et Resto U en France : Manger étudiant et économique',
  'repas-resto-u-france-manger-etudiant-economique',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin d''optimiser leur budget alimentaire. Les restaurants universitaires (Resto U) sont une solution économique et pratique pour se restaurer au quotidien. Nous vous expliquerons le "tarif social" (1€ ou 3,30€) dont vous pouvez bénéficier en tant qu''étudiant, et comment payer vos repas avec la carte **Izly**, le système de paiement des CROUS. Nous aborderons également les horaires des repas en France, souvent plus tôt qu''ailleurs. Maîtriser ces informations est absolument crucial pour manger équilibré à moindre coût, gérer votre budget alimentation efficacement, et vous intégrer aux habitudes culinaires françaises.',
  'Repas et Resto U France : tarif social (1€/3,30€), payer avec Izly. Mangez économique et adaptez-vous aux horaires français !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le fonctionnement des Restaurants Universitaires (Resto U) et leur accessibilité", "Identifier le "tarif social" (1€ ou 3,30€) pour les étudiants", "Savoir comment payer ses repas avec la carte Izly (création de compte, rechargement)", "Maîtriser les horaires des repas en France et les astuces pour s''adapter"]'::jsonb,
  '[]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 78
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le tarif social (1€ ou 3,30€)',
  '# Le tarif social (1€ ou 3,30€) en Restaurant Universitaire

## Pourquoi c''est important ?

Pour les étudiants internationaux en France, l''alimentation représente un poste de dépense majeur. Les Restaurants Universitaires (Resto U), gérés par le CROUS, proposent des repas équilibrés et abordables. Cependant, il est absolument crucial de connaître le **"tarif social"** qui vous permet de bénéficier d''un repas complet pour seulement **1€ ou 3,30€**. Ne pas connaître ce dispositif, c''est risquer de payer plus cher vos repas, de ne pas optimiser votre budget, ou de ne pas savoir comment accéder à cette aide précieuse. Maîtriser le tarif social est fondamental pour manger sainement à moindre coût et gérer efficacement votre budget alimentation.


-   Définir ce qu''est un Restaurant Universitaire (Resto U).
-   Identifier les conditions d''éligibilité au repas à 1€.





### 1. Qu''est-ce qu''un Restaurant Universitaire (Resto U) ?





Une aide à l''alimentation.

    -   Tous les étudiants non boursiers qui ont un statut de "précarité avérée" (évalué par le CROUS via une assistante sociale, notamment les étudiants internationaux qui rencontrent des difficultés).

-   **Qui est éligible ?** : Tous les autres étudiants inscrits dans l''enseignement supérieur en France, qu''ils soient français ou étrangers.



### 3. Conditions d''éligibilité au repas à 1€ pour les étudiants internationaux

Le rôle de l''assistante sociale.

-   Si vous êtes boursier(ère) du gouvernement français ou d''un gouvernement étranger (dont la bourse est gérée par Campus France), votre carte Izly sera automatiquement configurée.

-   Si vous n''êtes pas boursier(ère), mais que vous rencontrez des difficultés financières importantes (perte de revenus, problèmes familiaux, etc.), vous pouvez demander le repas à 1€ en contactant une **assistante sociale du CROUS**.
-   L''assistante sociale évaluera votre situation et, si elle est jugée précaire, elle fera la demande pour que votre carte Izly soit configurée au tarif 1€. (Voir cours 54.3 sur les assistantes sociales).



-   C''est le moyen de paiement des Resto U et la carte qui contient votre statut tarifaire.


-   Les Resto U ont des horaires d''ouverture fixes, souvent de 11h30 à 14h pour le déjeuner et de 18h30 à 20h pour le dîner. Adaptez-vous à ces horaires. (Voir leçon 78.3 sur les horaires).





-   **Renseignez-vous sur l''emplacement des Resto U** près de votre campus ou logement.
-   **N''hésitez pas à demander le repas à 1€** si vous êtes dans une situation de précarité.


-   **Ne pas faire la démarche auprès de l''assistante sociale** si vous êtes non boursier mais précaire.
-   **Arriver en dehors des horaires d''ouverture des Resto U**.
-   **Gaspiller de la nourriture** : C''est un service subventionné.


-   🔗 [CROUS : Les aides spécifiques (dont aides financières d''urgence)](https://www.crous.fr/les-aides-specifiques-du-crous/) - Pour le repas à 1€.
-   🔗 [Ministère de l''Enseignement Supérieur : Vie étudiante](https://www.enseignementsup-recherche.gouv.fr/fr/la-vie-etudiante-46549) - Politique.


Les Restaurants Universitaires (Resto U) proposent un tarif social très avantageux : 1€ pour les étudiants boursiers ou précaires (y compris internationaux sur avis d''assistante sociale du CROUS), et 3,30€ pour tous les autres étudiants. Ce dispositif est crucial pour manger équilibré et économique en France. Utilisez votre carte Izly pour payer et renseignez-vous auprès de votre CROUS pour l''éligibilité au repas à 1€. Maîtriser ces informations est fondamental pour optimiser votre budget alimentation et profiter pleinement des services de restauration étudiante.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4102-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Payer avec Izly',
  '# Payer avec Izly (Restaurants Universitaires)

## Pourquoi c''est important ?

Pour payer vos repas dans les Restaurants Universitaires (Resto U) et cafétérias du CROUS en France, le système de paiement officiel est la carte ou l''application **Izly**. Ne pas connaître Izly, ou ne pas savoir comment l''utiliser, c''est risquer de ne pas pouvoir bénéficier des tarifs sociaux (1€ ou 3,30€) et de se retrouver sans moyen de paiement aux Resto U. Pour les étudiants internationaux, cette information est absolument cruciale pour manger à moindre coût, gérer votre budget alimentation efficacement, et éviter toute frustration au moment de passer en caisse. Maîtriser Izly est fondamental pour votre vie quotidienne étudiante.


-   Définir ce qu''est Izly et son rôle dans la restauration universitaire.
-   Maîtriser les conseils pour utiliser la carte ou l''application Izly pour le paiement.





### 1. Qu''est-ce qu''Izly ?


-   Izly est le système de paiement dématérialisé pour la restauration (Resto U, cafétérias) et d''autres services du CROUS (laveries universitaires par exemple).
-   C''est une solution sécurisée.

#### b) La carte Izly (carte étudiante) ou l''application
-   Vous pouvez également utiliser l''application mobile Izly sur votre smartphone.




#### a) E-mail d''activation (généralement)
-   Après votre inscription administrative à l''université, le CROUS vous envoie un e-mail d''activation de votre compte Izly.
-   **Vérifiez votre boîte de réception et vos spams** : L''e-mail peut s''y trouver.

#### b) Activation sur `izly.fr` ou l''application
-   Cliquez sur le lien d''activation dans l''e-mail.
-   Suivez les instructions pour créer votre mot de passe et finaliser l''activation de votre compte sur le site `izly.fr` ou via l''application mobile.

#### c) Si vous ne recevez pas l''e-mail d''activation



-   **Le plus simple** : Sur le site `izly.fr` ou via l''application mobile.



### 4. Utiliser la carte ou l''application Izly pour le paiement


-   **Application mobile** : Ouvrez l''application Izly sur votre smartphone. Un QR code de paiement sera généré. Le caissier scannera ce QR code.

-   Vous pouvez consulter votre solde Izly à tout moment sur l''application ou le site web.


-   Votre **smartphone** (pour l''application).


-   **Rechargez votre compte en ligne** pour éviter l''attente aux caisses.
-   **Si vous perdez votre carte étudiante**, vous pouvez la bloquer via l''application Izly et demander un duplicata.
-   **Utilisez l''application** : Elle est souvent plus pratique que la carte physique.


-   **Penser que l''on peut payer en espèces ou par carte bancaire directement en Resto U** : Le paiement se fait via Izly.


-   🔗 [Ministère de l''Enseignement Supérieur : Vie étudiante](https://www.enseignementsup-recherche.gouv.fr/fr/la-vie-etudiante-46549) - Politique.


Payer vos repas dans les Restaurants Universitaires (Resto U) en France se fait avec la carte ou l''application Izly. Activez votre compte Izly après votre inscription universitaire (via l''e-mail d''activation du CROUS), et rechargez-le en ligne ou en caisse. Votre carte étudiante est votre carte Izly, ou utilisez l''application mobile pour un QR code de paiement. Maîtriser Izly est absolument crucial pour bénéficier du tarif social (1€ ou 3,30€), gérer votre budget alimentation efficacement, et faciliter votre vie quotidienne étudiante en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Horaires des repas en France (Midi pile !)',
  '# Horaires des repas en France (Midi pile !)

## Pourquoi c''est important ?

Les horaires des repas en France, et notamment le déjeuner, sont souvent plus tôt et plus fixes que dans de nombreux autres pays. Le déjeuner a lieu "midi pile" ou entre 12h et 13h, et le dîner autour de 19h-20h. Ne pas connaître et ne pas s''adapter à ces habitudes culturelles, c''est risquer de se retrouver sans option de restauration (restaurants fermés), de manger à des heures décalées, ou de ne pas pouvoir partager les repas avec des amis français. Pour les étudiants internationaux, cette adaptation est absolument cruciale pour votre intégration sociale, pour profiter des services de restauration universitaire, et pour comprendre un aspect important de la vie quotidienne en France.


-   Identifier les heures d''ouverture des Restaurants Universitaires (Resto U).
-   Savoir comment s''adapter à ces horaires et trouver des options en dehors des heures.







-   C''est un repas léger : café/thé, tartines, viennoiseries.

#### b) Le déjeuner : "Midi pile !"
-   C''est le repas principal de la journée en France.
-   Il est généralement pris entre **12h00 et 13h30, avec un pic à 12h30 ("midi pile")**.


-   Entre le déjeuner et le dîner, les enfants prennent un goûter vers 16h-17h. Les adultes ont rarement un "goûter".



-   Les Resto U (gérés par le CROUS) ont des horaires d''ouverture stricts :

-   Les cafétérias proposent des formules plus légères (sandwichs, salades, soupes) avec des horaires d''ouverture plus étendus, souvent jusqu''à 16h-17h.


### 3. S''adapter à ces horaires et trouver des options en dehors des heures


-   **Déjeuner** : Si vous avez cours à midi, prévoyez d''aller manger au Resto U dès la fin du cours, ou préparez un pique-nique ou un sandwich.
-   **Dîner** : N''attendez pas 22h pour dîner.

-   **Restaurants "service continu"** : Certains restaurants (surtout dans les grandes villes ou les zones touristiques) proposent un service continu entre midi et le soir, mais c''est plus cher.

-   Cuisiner chez vous est l''option la plus économique et la plus flexible pour vos horaires.



-   Essayez d''adapter votre rythme de repas aux horaires français pour ne pas vous sentir décalé(e) et pour faciliter les interactions sociales.


-   Le déjeuner et le dîner sont des moments importants de convivialité en France. Partager un repas est un bon moyen de s''intégrer.

-   Renseignez-vous à l''avance. Certains Resto U proposent des options végétariennes. Les supermarchés ont des rayons adaptés.


-   Les **horaires d''ouverture des Resto U** et des commerces de proximité.


-   **Faites des "courses de dépannage"** pour les soirs où vous rentrez tard.
-   **N''hésitez pas à demander à vos amis français** des conseils sur les lieux de restauration.


-   **Ne pas s''adapter aux horaires de repas** et se sentir décalé(e).
-   **Penser que l''on mange aux mêmes heures qu''en Espagne ou dans d''autres pays**.


-   🔗 [Ministère de l''Agriculture et de la Souveraineté Alimentaire : La gastronomie](https://agriculture.gouv.fr/la-gastronomie-francaise) - Informations sur la culture culinaire.


Les horaires des repas en France sont plus tôt qu''ailleurs, avec un déjeuner vers 12h-13h ("midi pile") et un dîner vers 19h30-21h. Les Restaurants Universitaires (Resto U) respectent ces horaires (11h30-14h et 18h30-20h). Adaptez votre rythme, profitez des tarifs sociaux du Resto U (1€/3,30€), et ayez des options de dépannage (snacks, supermarchés) pour les repas en dehors des heures. Maîtriser ces habitudes est absolument crucial pour une intégration sociale réussie, une gestion efficace de votre budget alimentation, et une vie quotidienne sereine en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 78 ---

-- COURS 79 : L'Apéro
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'L''Apéro en France : Concept social, convivialité et bonnes manières',
  'apero-france-concept-social-convivialite-bonnes-manieres',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre un rituel social profondément ancré dans la culture française : l''"apéro" (apéritif). L''apéro n''est pas un simple "verre" ; c''est un moment de convivialité qui précède le dîner, avec ses propres codes et attentes. Ne pas comprendre son concept social (ni dîner, ni goûter), savoir quoi apporter si vous êtes invité(e), et les règles pour "trinquer" en se regardant dans les yeux, c''est risquer de commettre des impairs, de ne pas participer pleinement, ou de se sentir exclu(e). Maîtriser le rituel de l''apéro est absolument crucial pour une intégration sociale réussie et pour nouer des liens avec les Français.',
  'L''Apéro en France : concept social, quoi apporter si invité, trinquer en se regardant dans les yeux. Intégrez-vous à la convivialité française !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le concept social de l''apéro (moment de convivialité avant le dîner)", "Identifier ce qu''il faut apporter si vous êtes invité(e) à un apéro", "Savoir comment "trinquer" correctement en France (regard, "tchin-tchin")", "Maîtriser les codes de l''apéro pour une intégration sociale réussie"]'::jsonb,
  '[]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 79
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Concept social : Ni dîner, ni goûter',
  '# Concept social : Ni dîner, ni goûter (L''Apéro en France)

## Pourquoi c''est important ?

L''**"apéro" (apéritif)** est un rituel social profondément ancré dans la culture française, bien plus qu''un simple "verre" ou un "goûter". C''est un moment de convivialité spécifique qui précède le dîner, avec ses propres codes et attentes. Ne pas comprendre son concept social (qu''il n''est ni un repas complet, ni une simple pause-café), c''est risquer de faire des impairs, de ne pas participer pleinement à l''ambiance, ou de ne pas savoir comment se comporter si vous êtes invité(e) chez des amis français. Pour les étudiants internationaux, maîtriser cette distinction est absolument crucial pour une intégration sociale réussie et pour partager un moment clé de la vie française.


-   Définir ce qu''est l''apéro en France et sa place dans le déroulement de la soirée.
-   Comprendre pourquoi l''apéro n''est ni un dîner ni un goûter.
-   Identifier les boissons et les accompagnements typiques de l''apéro.


L''apéro est un moment de détente, d''échange et de partage avant le repas.

🔗 [France.fr : La culture de l''apéritif en France](https://www.france.fr/fr/actualite/article/la-culture-de-l-aperitif-en-france) - Article culturel.


### 1. Qu''est-ce que l''apéro ? Un moment de convivialité avant le dîner


-   L''apéro (abréviation d''apéritif) est un moment convivial qui a lieu en fin de journée, généralement **entre 18h et 20h/21h**, juste avant le dîner.


-   L''apéro est une transition entre l''après-midi et le dîner. Ce n''est pas le repas principal.

### 2. Pourquoi l''apéro n''est ni un dîner, ni un goûter ?


-   **Quantité de nourriture** : On y consomme des "amuse-bouches" ou des "grignotages" (chips, olives, cacahuètes, mini-saucissons, légumes à croquer, toasts). L''objectif n''est pas de se remplir l''estomac pour ne plus avoir faim au dîner.
-   **Pas un repas principal** : Après l''apéro, il y a généralement un dîner (plus consistant).
-   **Attention à l''"apéro dînatoire"** : C''est une variante où l''apéro remplace le dîner. Dans ce cas, les quantités de nourriture sont beaucoup plus importantes. Le terme est souvent précisé dans l''invitation.

-   **Horaire** : Le goûter est pris l''après-midi (vers 16h-17h), souvent par les enfants, et consiste en quelque chose de sucré.
-   **Boissons** : L''apéro implique souvent des boissons alcoolisées (vin, bière, cocktails) ou des boissons non alcoolisées (jus de fruits, soda, eau pétillante).

### 3. Boissons et accompagnements typiques de l''apéro

Ce que l''on trouve sur la table.

-   **La modération est de mise** : L''objectif n''est pas de s''enivrer avant le dîner.

#### b) Accompagnements (les "amuse-gueules" ou "grignotages")




-   L''apéro est un excellent moyen de socialiser et de nouer des liens avec des amis français ou d''autres étudiants.

#### b) Arrivez à l''heure (ou un peu après)
-   N''arrivez pas trop tôt, l''hôte pourrait ne pas être prêt.


#### d) Modérez votre consommation d''alcool
-   Ne refusez pas d''alcool si on vous propose, mais vous pouvez demander un soft ou de l''eau.

-   N''hésitez pas à parler, à poser des questions, à échanger.




-   **Si l''invitation précise "apéro dînatoire", prévoyez de manger plus** (et moins pour le dîner).
-   **C''est un moment de partage**, soyez ouvert(e) à la discussion.


-   **Boire trop d''alcool** et perdre le contrôle.
-   **Arriver avec l''estomac vide** et s''attendre à un repas complet.
-   **Ne pas comprendre que l''apéro est un moment social important**.


-   🔗 [France.fr : La culture de l''apéritif en France](https://www.france.fr/fr/actualite/article/la-culture-de-l-aperitif-en-france) - Article culturel.
-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils culturels.


L''apéro est un rituel social français de convivialité qui précède le dîner, généralement entre 18h et 21h. Il n''est ni un dîner (on y grignote des amuse-bouches) ni un goûter (boissons souvent alcoolisées). Apportez quelque chose si vous êtes invité(e), modérez votre consommation d''alcool, et participez à la conversation. Maîtriser ce concept social est absolument crucial pour une intégration réussie, pour nouer des liens avec les Français, et pour partager un moment clé de la vie quotidienne en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Quoi apporter si on est invité ?',
  '# Quoi apporter si on est invité à un apéro en France ?

## Pourquoi c''est important ?

Lorsque vous êtes invité(e) à un apéro chez des amis français, il est d''usage d''apporter quelque chose pour partager. Ne pas connaître cette coutume, ou apporter quelque chose d''inapproprié, peut être perçu comme un manque de savoir-vivre, même si l''intention est bonne. Pour les étudiants internationaux, cette question peut être source d''embarras et d''incertitude. Savoir quoi apporter à un apéro est absolument crucial pour faire bonne impression, participer pleinement à la convivialité, et montrer votre respect des codes sociaux français. C''est un geste simple qui facilite grandement votre intégration.


-   Comprendre la coutume d''apporter quelque chose chez l''hôte.


L''idée est de contribuer au moment de convivialité. Ce n''est pas une obligation stricte, mais c''est très apprécié.

🔗 [France.fr : La culture de l''apéritif en France](https://www.france.fr/fr/actualite/article/la-culture-de-l-aperitif-en-france) - Article culturel.


### 1. La coutume d''apporter quelque chose chez l''hôte


-   En France, si vous êtes invité(e) chez quelqu''un pour un apéro (ou un dîner), il est très courant d''apporter quelque chose pour l''hôte ou pour partager.
-   Cela montre que vous appréciez l''invitation et que vous participez à la convivialité.

#### b) Ce n''est pas une obligation stricte, mais une marque de politesse.



-   **Apéritifs légers** : Un Picon bière, un Kir royal (si l''apéro est plus sophistiqué).


#### c) L''idée est la diversité
-   Apportez quelque chose qui peut compléter ce que l''hôte va déjà proposer.

### 3. Idées d''accompagnements alimentaires appréciés







Adaptez-vous à l''ambiance.

#### a) Demandez à l''hôte (discrètement)
-   Si vous n''êtes vraiment pas sûr(e), vous pouvez demander discrètement à votre hôte : "Est-ce qu''il faut que j''apporte quelque chose ? Y a-t-il quelque chose qui te ferait plaisir ?" (Si vous êtes proche).
-   **Réponse type** : L''hôte vous dira souvent "Non, ne te dérange pas !" ou "Viens comme tu es !". Mais il appréciera le geste.


-   L''intention compte plus que le prix. Choisissez quelque chose de simple mais de bon goût.

-   N''ayez pas honte. Offrez votre aide pour la préparation, le service, ou le rangement. C''est aussi une forme de contribution.




-   **Un petit cadeau pour l''hôte** (fleurs, chocolat) est toujours une bonne idée.
-   **N''oubliez pas de prendre en compte les régimes alimentaires** (végétarien, halal) si vous connaissez les préférences de vos amis.


-   **Apporter des produits non adaptés** (ex: un gros plat principal si ce n''est pas un apéro dînatoire).
-   **Se sentir obligé(e) d''apporter quelque chose de très cher**.
-   **Apporter de l''alcool si l''hôte ne boit pas** (vérifiez les préférences).


-   🔗 [France.fr : La culture de l''apéritif en France](https://www.france.fr/fr/actualite/article/la-culture-de-l-aperitif-en-france) - Article culturel.
-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils culturels.


Lorsque vous êtes invité(e) à un apéro en France, il est d''usage d''apporter quelque chose pour partager : une bouteille de vin, des bières spéciales, des jus de fruits originaux, ou des accompagnements salés (chips, olives, légumes à croquer, mini-saucissons). Demandez discrètement à l''hôte si vous n''êtes pas sûr(e), et adaptez votre choix au contexte et à l''ambiance. L''intention de participer à la convivialité compte plus que le prix. Maîtriser cette coutume est absolument crucial pour faire bonne impression, s''intégrer, et partager un moment social clé de la vie française.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Trinquer en se regardant dans les yeux',
  '# Trinquer en se regardant dans les yeux

## Pourquoi c''est important ?

Lorsque vous partagez un verre avec des amis ou des connaissances en France, le rituel de "trinquer" est un moment de convivialité et de partage. Une règle non écrite mais très respectée est de **regarder la personne dans les yeux** au moment de trinquer. Ne pas connaître cette coutume, c''est risquer de commettre un impair culturel, d''être perçu(e) comme distant(e) ou même malpoli(e) (certaines superstitions y sont associées). Pour les étudiants internationaux, maîtriser ce petit détail du savoir-vivre français est absolument crucial pour des interactions sociales réussies, une bonne intégration, et pour ne pas créer de malaise dans des moments de détente.


-   Définir ce qu''est le rituel de "trinquer" en France.
-   Comprendre l''importance du contact visuel au moment de trinquer.
-   Identifier les formules verbales typiques pour trinquer ("Tchin-tchin", "À la vôtre").


Trinquer est un geste de rassemblement et de célébration. C''est un moment de connexion.

🔗 [France.fr : La culture de l''apéritif en France](https://www.france.fr/fr/actualite/article/la-culture-de-l-aperitif-en-france) - Article culturel.


### 1. Le rituel de "trinquer" en France


-   C''est un geste qui marque la convivialité, la célébration, et le partage.

-   L''hôte ou la personne qui initie le toast peut prononcer une formule.

-   Au début de l''apéro ou du repas.
-   Quand quelqu''un propose un toast.

### 2. L''importance du contact visuel : La règle d''or


-   **C''est la règle la plus importante** : Au moment d''entrechoquer votre verre, vous devez **regarder chaque personne dans les yeux**.

#### b) Superstition (le "7 ans de malheur")
-   Il existe une superstition populaire en France selon laquelle ne pas regarder la personne dans les yeux en trinquant porterait malheur (souvent "7 ans de malheur au lit !").
-   Même si c''est une superstition, elle renforce l''importance de cette règle sociale.



Ce que l''on dit en trinquant.

#### a) "Tchin-tchin !"
-   C''est la formule la plus courante et la plus informelle, souvent d''origine chinoise (qui signifie "petit à petit").

#### b) "À la vôtre !" / "À la tienne !"
-   **"À la vôtre !"** : Formule polie et respectueuse (si vous vouvoyez).
-   **"À la tienne !"** : Formule familière (si vous tutoyez).
-   Ces formules signifient "À votre santé !", "À votre bonheur !".

#### c) "Santé !" / "À votre santé !"

#### d) "À [nom de la personne] !" / "À [l''événement] !"



-   Vous n''êtes pas obligé(e) de boire de l''alcool. Vous pouvez trinquer avec de l''eau, un jus de fruits, un soda. L''important est le geste.



-   Dites "Tchin-tchin !", "À la vôtre !", ou "Santé !".

-   Si quelqu''un prend la parole pour un toast, écoutez attentivement et ne buvez qu''à la fin du toast.




-   **N''ayez pas peur de demander "On trinque ?"** si le moment s''y prête et que personne n''initie.
-   **Soyez conscient de l''importance de ce rituel**.
-   **Ce n''est pas une obligation de finir votre verre** après avoir trinqué.


-   **Ne pas regarder dans les yeux** : C''est l''erreur la plus fréquente et la plus mal perçue.
-   **Boire avant d''avoir trinqué avec tout le monde**.


-   🔗 [France.fr : La culture de l''apéritif en France](https://www.france.fr/fr/actualite/article/la-culture-de-l-aperitif-en-france) - Article culturel.
-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils culturels.


Trinquer en se regardant dans les yeux est un rituel social absolument crucial en France, marquant le respect et la convivialité. Au moment d''entrechoquer votre verre, regardez chaque personne dans les yeux et prononcez une formule comme "Tchin-tchin !" ou "À la vôtre !". Évitez de ne pas regarder, car cela peut être perçu comme un manque de respect. Maîtriser ce geste est fondamental pour des interactions sociales réussies, une bonne intégration, et pour partager pleinement les moments de détente et de fête avec les Français.

-- --- Cours 79 ---

-- COURS 80 : Améliorer son français
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Améliorer son français en France : Ressources et astuces pour progresser',
  'ameliorer-francais-france-ressources-astuces-progresser',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui souhaitent perfectionner leur maîtrise de la langue française. Une bonne connaissance du français est la clé d''une intégration réussie, d''une meilleure réussite académique, et d''une insertion professionnelle facilitée. Nous vous présenterons des applications gratuites pour l''apprentissage (Duolingo, Babbel), les avantages des "cafés des langues" et des "tandems linguistiques" pour la pratique orale, et l''intérêt des médias français (Radio France, Arte) pour l''écoute et la compréhension. Maîtriser ces ressources et ces astuces est absolument crucial pour progresser rapidement, gagner en confiance, et vous immerger pleinement dans la vie française.',
  'Améliorer votre français : applications gratuites, cafés des langues, tandems, Radio France, Arte. Progressez vite et intégrez-vous !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Découvrir et utiliser des applications gratuites pour apprendre le français", "Comprendre l''intérêt des cafés des langues et tandems linguistiques pour la pratique orale", "Savoir utiliser les médias français (radio, TV) pour l''écoute et la compréhension", "Maîtriser les conseils pour une progression rapide et une immersion réussie"]'::jsonb,
  '["Avoir un niveau de français de base (A1 minimum)"]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 80
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Applications gratuites',
  '# Applications gratuites pour améliorer son français

## Pourquoi c''est important ?

Apprendre le français en classe est essentiel, mais la pratique quotidienne est la clé d''une progression rapide et efficace. Les **applications mobiles gratuites** pour l''apprentissage des langues sont des outils absolument cruciaux pour les étudiants internationaux en France. Elles vous permettent de réviser le vocabulaire et la grammaire, de pratiquer l''écoute et la prononciation, et de compléter vos cours, le tout de manière ludique et flexible, depuis votre smartphone. Ne pas utiliser ces ressources gratuites, c''est se priver d''une opportunité majeure d''améliorer votre niveau de français. Maîtriser ces applications est fondamental pour une immersion linguistique réussie et pour gagner en confiance au quotidien.


-   Définir les avantages des applications mobiles pour l''apprentissage du français.


Les applications mobiles transforment l''apprentissage des langues en une activité accessible et motivante.



### 1. Les avantages des applications mobiles pour l''apprentissage




-   Elles utilisent des jeux, des défis, des points, des niveaux pour rendre l''apprentissage ludique et maintenir votre motivation.





-   **Inconvénients** : La version complète est payante, mais la version d''essai gratuite est intéressante.



-   "La Conjugaison" (Le Figaro) ou "Conjugaison française" : Pour maîtriser les verbes.




-   Listes de mots, exercices d''association, répétitions.










#### d) N''ayez pas peur de faire des erreurs





-   **Téléchargez les applications sur le Google Play Store ou l''App Store** (versions officielles).
-   **Intégrez l''apprentissage à votre emploi du temps quotidien**.


-   **Se sentir dépassé(e) par le nombre d''applications** : Choisissez-en 2 ou 3.
-   **Ne pas adapter l''application à votre niveau** (commencer trop difficile ou trop facile).
-   **Penser que les applications remplacent les cours de langue ou l''immersion**.


-   🔗 [Wikipédia : Applications pour l''apprentissage des langues](https://fr.wikipedia.org/wiki/Applications_pour_l%27apprentissage_des_langues) - Vue d''ensemble.


Les applications mobiles gratuites (Duolingo, Babbel, Memrise, Anki) sont des outils absolument cruciaux pour les étudiants internationaux souhaitant améliorer leur français en France. Elles vous permettent de travailler le vocabulaire, la grammaire, l''écoute et la prononciation de manière ludique et flexible. Fixez-vous des objectifs quotidiens, variez les applications, et complétez vos cours. Maîtriser ces ressources est fondamental pour une progression rapide, une immersion linguistique réussie, et une plus grande confiance au quotidien en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Cafés des langues et Tandems',
  '# Cafés des langues et Tandems (Pratique orale du français)

## Pourquoi c''est important ?

L''apprentissage d''une langue ne se limite pas à la grammaire et au vocabulaire. La **pratique orale** est absolument cruciale pour gagner en fluidité, en confiance, et pour s''intégrer réellement dans un nouveau pays. Les **cafés des langues** et les **tandems linguistiques** sont des dispositifs excellents et souvent gratuits pour les étudiants internationaux en France. Ne pas utiliser ces opportunités, c''est se priver de contacts humains précieux, de situations d''échange authentiques, et de la chance de progresser rapidement en français (et potentiellement d''aider d''autres personnes). Maîtriser ces concepts est fondamental pour surmonter la peur de parler, améliorer votre expression orale, et vous faire de nouveaux amis.


-   Définir ce qu''est un café des langues et son fonctionnement.
-   Comprendre le principe d''un tandem linguistique et ses avantages.


Ces initiatives reposent sur l''échange et la bienveillance. Elles sont un excellent complément aux cours formels.

🔗 [Campus France : Le français, mode d''emploi](https://www.campusfrance.org/fr/le-francais-mode-demploi) - Conseils pour apprendre le français.


### 1. Les Cafés des Langues : Un lieu de rencontre et d''échange


-   Des tables sont dédiées à différentes langues. Vous vous asseyez à la table du français pour pratiquer avec des locuteurs natifs ou d''autres apprenants.

-   **Ambiance décontractée** : Moins formel et moins intimidant qu''un cours de langue.
-   **Pratique orale** : Vous avez l''occasion de parler le français dans des situations réelles.
-   **Rencontres** : Vous rencontrez des Français et d''autres étudiants internationaux, ce qui élargit votre réseau social.
-   **Gratuit (souvent)** : L''entrée est généralement gratuite, seule votre consommation au café est à payer.



### 2. Le Tandem Linguistique : L''échange de compétences


-   Un tandem linguistique est un partenariat entre deux personnes de langues maternelles différentes qui souhaitent apprendre la langue de l''autre.

-   **Immersion culturelle** : Vous apprenez aussi des choses sur la culture de l''autre.

-   **Plateformes en ligne** : Des sites comme "My Language Exchange" ou "Tandem.net" vous mettent en relation avec des partenaires.
-   **Annonces sur les campus** : Cherchez les affichages sur les tableaux d''information.




-   N''ayez pas peur de faire des erreurs. C''est en parlant que l''on progresse.
-   Forcez-vous à parler français dès que possible, même si vous n''êtes pas sûr(e).








-   **Faites des efforts pour la prononciation** : Les Français apprécient l''effort.


-   **S''isoler dans une communauté d''expatriés** et ne pas parler français.


-   🔗 [Campus France : Le français, mode d''emploi](https://www.campusfrance.org/fr/le-francais-mode-demploi) - Conseils pour l''apprentissage.


Les cafés des langues et les tandems linguistiques sont des outils absolument cruciaux pour les étudiants internationaux en France afin d''améliorer leur français oral, de gagner en confiance, et de s''intégrer socialement. Les cafés des langues offrent une pratique décontractée en groupe, tandis que les tandems proposent un échange personnalisé. Trouvez ces opportunités via votre université, des associations ou des plateformes en ligne. Osez parler, n''ayez pas peur des erreurs, et utilisez chaque occasion de pratiquer. Maîtriser ces méthodes est fondamental pour progresser rapidement en français et vivre une immersion linguistique réussie en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Médias (Radio France, Arte)',
  '# Médias (Radio France, Arte) pour améliorer son français

## Pourquoi c''est important ?

L''apprentissage d''une langue ne se limite pas à la salle de classe ou aux échanges directs. L''**immersion passive** via les médias (radio, télévision, presse) est absolument cruciale pour les étudiants internationaux en France. Écouter la radio, regarder la télévision, lire des journaux en français vous permet d''améliorer votre compréhension orale et écrite, d''enrichir votre vocabulaire, de vous familiariser avec l''accent et le rythme de la langue, et de comprendre l''actualité et la culture française. Ne pas utiliser ces ressources gratuites, c''est se priver d''une opportunité majeure de progresser et de vous immerger pleinement dans la vie locale. Maîtriser ces outils est fondamental pour une progression continue de votre français.


-   Comprendre l''intérêt de l''écoute de la radio et de la télévision en français.
-   Identifier les chaînes de radio (Radio France) et de télévision (Arte) adaptées à l''apprentissage.


Les médias français sont une ressource inestimable pour l''apprentissage de la langue et la découverte de la culture.



### 1. L''intérêt de l''immersion passive via les médias

Apprendre sans s''en rendre compte.



#### c) Familiarisation avec la culture et l''actualité

-   Même en arrière-plan, l''écoute du français aide votre cerveau à s''habituer à la langue.

### 2. Les médias français adaptés à l''apprentissage


-   **France Inter** : Chaîne généraliste, avec des émissions de débat, d''humour, de culture, d''actualité. Niveau intermédiaire à avancé.
-   **France Info** : Chaîne d''information en continu. Permet de suivre l''actualité avec un vocabulaire répétitif, ce qui est utile pour la compréhension.
-   **Avantages** : Audio seulement, ce qui force à se concentrer sur l''écoute. Podcasts disponibles pour réécouter.


-   **Avantages** : Permet de combiner l''écoute et la lecture des sous-titres, ce qui est très efficace.


-   **TV5 Monde** : Chaîne internationale francophone avec des programmes d''actualité et des émissions pour apprendre le français.




#### b) N''essayez pas de tout comprendre
-   Au début, concentrez-vous sur le sens général, les mots-clés, le contexte. Le cerveau s''habituera progressivement.

-   Intégrez l''écoute du français à votre routine quotidienne (dans les transports, en cuisinant, en faisant du sport).

-   Regardez avec les sous-titres en français : cela aide à faire le lien entre l''oral et l''écrit. Une fois plus à l''aise, essayez sans sous-titres.






-   **Regardez les journaux télévisés** pour suivre l''actualité.


-   **Écouter sans faire d''effort de compréhension active**.
-   **Regarder uniquement des programmes d''information trop complexes** au début.


-   🔗 [Campus France : Le français, mode d''emploi](https://www.campusfrance.org/fr/le-francais-mode-demploi) - Conseils.


L''immersion passive via les médias français (Radio France pour l''écoute, Arte pour la télévision avec sous-titres) est absolument cruciale pour les étudiants internationaux souhaitant améliorer leur français. Écoutez la radio régulièrement, regardez Arte avec les sous-titres en français, et lisez la presse. Concentrez-vous sur le sens général, enrichissez votre vocabulaire, et familiarisez-vous avec la culture française. Maîtriser ces ressources est fondamental pour une progression continue de votre compréhension orale et écrite, et pour une immersion réussie dans la vie française.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 80 ---

-- COURS 81 : Se faire des amis
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Se faire des amis en France : Brisez la bulle et intégrez-vous !',
  'se-faire-amis-france-brisez-bulle-integrez',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de faciliter leur intégration sociale et de nouer des liens d''amitié. L''éloignement familial et le choc culturel peuvent rendre difficile la création de nouvelles relations. Nous vous expliquerons pourquoi il est important de "sortir de la bulle des expatriés" pour rencontrer des Français, les avantages des activités sportives universitaires (SUAPS) pour faire des rencontres, et comment proposer des sorties et des activités. Maîtriser ces stratégies est absolument crucial pour briser l''isolement, développer un cercle social riche, et vivre une expérience étudiante épanouissante et mémorable en France.',
  'Se faire des amis France : sortez de la bulle expatriée, activités sportives (SUAPS), proposez des sorties. Brisez l''isolement, intégrez-vous !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''importance de la rencontre de Français pour l''intégration", "Identifier les lieux et activités propices aux rencontres (SUAPS, associations)", "Savoir comment initier des sorties et proposer des activités", "Maîtriser les conseils pour développer un cercle social et lutter contre l''isolement"]'::jsonb,
  '[]'::jsonb,
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 81
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Sortir de la bulle des expatriés',
  '# Sortir de la bulle des expatriés

## Pourquoi c''est important ?

Lorsque l''on arrive dans un nouveau pays, il est naturel de chercher à se rapprocher de personnes qui parlent la même langue et partagent la même culture. Cela crée un sentiment de sécurité et de confort. Cependant, pour les étudiants internationaux en France, se cantonner uniquement à la **"bulle des expatriés"** (amis de même nationalité ou d''autres pays non français) peut devenir un obstacle majeur à une réelle intégration sociale et linguistique. Ne pas sortir de cette bulle, c''est risquer de limiter votre pratique du français, de ne pas comprendre la culture locale, et de passer à côté d''expériences authentiques avec les Français. Maîtriser ce défi est absolument crucial pour développer un cercle social diversifié et vivre une immersion complète.


-   Comprendre le phénomène de la "bulle des expatriés".
-   Identifier les raisons pour lesquelles il est important d''en sortir.


Le confort de la "bulle" est agréable, mais il peut freiner votre progression.

🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils.


### 1. Le phénomène de la "bulle des expatriés"


-   À l''arrivée dans un nouveau pays, il est très fréquent de se rapprocher de personnes de sa propre nationalité ou d''autres expatriés.

-   **Manque d''intégration culturelle** : Vous restez en marge de la culture locale, vous ne comprenez pas les codes, les habitudes.
-   **Sentiment d''isolement** : À terme, la bulle peut devenir un confinement.

### 2. Pourquoi il est important d''en sortir


-   Le contact régulier avec des francophones est le meilleur moyen de pratiquer et d''améliorer votre français (vocabulaire, fluidité, prononciation).

-   Vivre avec des Français vous permet de comprendre les codes sociaux, l''humour, les références culturelles, les habitudes quotidiennes.

-   C''est un atout pour votre future insertion professionnelle.

#### d) S''épanouir et lutter contre l''isolement
-   Une intégration sociale diversifiée est essentielle pour votre bien-être mental et pour vous sentir vraiment "chez vous" en France.



-   **Programmes de parrainage** : Certaines universités proposent des programmes où des étudiants français "parrainent" des étudiants internationaux.

#### b) En dehors de l''université
-   **Jobs étudiants** : C''est un excellent moyen de rencontrer des Français (collègues, clients).

-   N''attendez pas toujours qu''on vous invite. Osez proposer vous-même des sorties : "On va prendre un café ?", "On va visiter [lieu] ce week-end ?", "On va faire du sport ensemble ?".


-   Votre **volonté d''échanger**.


-   **Acceptez les invitations** : Même si vous n''êtes pas sûr(e) de tout comprendre ou de bien parler français.
-   **Parlez français le plus possible** : Même avec des amis internationaux, essayez d''utiliser le français.
-   **Soyez curieux(se) et ouvert(e) d''esprit** : Posez des questions sur la culture française.
-   **N''ayez pas peur de faire des erreurs en français**.


-   **Se sentir mal à l''aise de parler français** par peur de faire des erreurs.
-   **Ne pas faire l''effort de sortir de sa zone de confort**.
-   **Ne pas s''intéresser à la culture française**.


-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - La référence principale.
-   🔗 [Meetup.com / On Va Sortir](https://www.meetup.com/fr-FR/) - Plateformes pour trouver des groupes d''activités.


Sortir de la "bulle des expatriés" est absolument crucial pour les étudiants internationaux en France afin de développer un cercle social diversifié et de s''intégrer pleinement. Prenez des initiatives pour initier des contacts avec des Français : dans votre université (cours, associations), en dehors (clubs sportifs, activités culturelles), et en proposant des sorties. Parlez français le plus possible, soyez curieux(se) et ouvert(e) d''esprit. Maîtriser ces stratégies est fondamental pour briser l''isolement, pratiquer la langue, comprendre la culture locale, et vivre une expérience étudiante épanouissante et mémorable en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Activités sportives (SUAPS)',
  '# Activités sportives (SUAPS) pour se faire des amis

## Pourquoi c''est important ?

Faire du sport est un excellent moyen de maintenir votre bien-être physique et mental, mais c''est aussi une opportunité fantastique de rencontrer des gens et de vous faire des amis en France. Le **Service Universitaire des Activités Physiques et Sportives (SUAPS)**, présent dans toutes les universités, propose une multitude de sports à des tarifs très abordables pour les étudiants. Ne pas connaître le SUAPS, c''est se priver d''un canal privilégié de socialisation et d''intégration. Pour les étudiants internationaux, participer à des activités sportives universitaires est absolument crucial pour briser l''isolement, pratiquer le français dans un contexte détendu, et développer un cercle social varié et sain.


-   Définir ce qu''est le SUAPS et son offre d''activités sportives.
-   Comprendre les avantages des activités sportives pour les rencontres et l''intégration.
-   Savoir comment s''inscrire au SUAPS et choisir ses activités.





### 1. Qu''est-ce que le SUAPS ? Votre passeport sportif universitaire



#### b) Offre d'activités

-   L''accès au SUAPS est très économique pour les étudiants, souvent via un forfait annuel unique qui donne accès à toutes les activités.

🔗 [Le site du SUAPS de votre université](https://sport-u.com/) - Cherchez "SUAPS [nom de votre université]" sur Google.

### 2. Les avantages des activités sportives pour les rencontres et l''intégration


-   Moins de pression que dans d''autres contextes sociaux.

-   Vous interagissez avec d''autres étudiants (français et internationaux) dans une ambiance informelle.
-   C''est un excellent moyen de surmonter la peur de parler français.

-   Vous rencontrez des gens avec des intérêts communs, ce qui est une bonne base pour l''amitié.

-   Le sport réduit le stress, améliore l''humeur, et vous aide à rester en forme.

### 3. Comment s''inscrire au SUAPS et choisir ses activités ?

Une démarche simple en début d''année.

-   Le SUAPS organise souvent des journées portes ouvertes ou des stands d''information en début d''année universitaire.
-   Consultez le site internet du SUAPS de votre université pour connaître l''offre d''activités et le calendrier des inscriptions.

#### b) Procédure d''inscription
-   L''inscription se fait généralement en ligne ou au bureau du SUAPS.
    -   Un **RIB** (pour le paiement de l''abonnement).
    -   Une **photo d''identité**.

-   Choisissez les sports qui vous plaisent, mais n''hésitez pas à essayer de nouvelles choses.


-   Une **photo d''identité**.


-   **N''attendez pas la fin du semestre** pour vous inscrire. Les places sont limitées.


-   **Ne pas s''inscrire au SUAPS** et rater une opportunité majeure.
-   **Ne pas se sentir à l''aise** à cause de la barrière linguistique (le sport aide à la dépasser).
-   **S''isoler** et ne pas profiter de ces activités.
-   **Manquer les dates d''inscription** (souvent en septembre/octobre).


-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils.
-   🔗 [Ministère de l''Enseignement Supérieur : Vie étudiante](https://www.enseignementsup-recherche.gouv.fr/fr/la-vie-etudiante-46549) - Politique sportive.


Le Service Universitaire des Activités Physiques et Sportives (SUAPS) offre aux étudiants une multitude de sports à des tarifs très abordables. Participer à ces activités est absolument crucial pour les étudiants internationaux afin de briser l''isolement, rencontrer des Français, pratiquer la langue dans un contexte détendu, et développer un cercle social sain et diversifié. Inscrivez-vous dès la rentrée avec votre carte étudiante et un certificat médical. Maîtriser le SUAPS est fondamental pour votre bien-être, votre intégration, et pour une vie étudiante épanouissante en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Proposer des sorties',
  '# Proposer des sorties pour se faire des amis

## Pourquoi c''est important ?

Lorsque l''on arrive dans un nouveau pays, il est facile d''attendre que les invitations viennent des autres. Cependant, pour se faire de nouveaux amis en France, et surtout avec des Français, il est absolument crucial d''être proactif et d''**oser proposer des sorties et des activités**. Ne pas le faire, c''est risquer de rester isolé(e), de manquer des opportunités de socialisation, et de ne pas développer un cercle social riche. Pour les étudiants internationaux, cette initiative est d''autant plus importante qu''elle montre votre désir d''intégration et votre curiosité. Maîtriser l''art de proposer des sorties est fondamental pour briser la glace, créer des liens, et vivre une expérience étudiante épanouissante et mémorable en France.


-   Comprendre l''importance de la proactivité pour nouer des amitiés.
-   Identifier des idées de sorties et d''activités adaptées aux étudiants.


Les relations sociales se construisent par des échanges et des activités partagées. Oser prendre l''initiative est une force.

🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - Conseils.


### 1. L''importance de la proactivité pour nouer des amitiés


-   Les Français peuvent parfois sembler réservés au premier abord. N''attendez pas qu''ils fassent toujours le premier pas.
-   Prendre l''initiative montre votre motivation à créer des liens.

-   Proposer une sortie, c''est créer une opportunité de rencontre et d''échange.


### 2. Idées de sorties et d''activités adaptées aux étudiants




-   **Cuisiner un plat de votre pays d''origine** pour des amis.




-   **Formule simple** : "Salut ! Ça te dirait d''aller prendre un café après les cours ?" ou "On irait visiter le musée X ce week-end ?".
-   **N''attendez pas la perfection linguistique** : L''intention compte plus que la grammaire parfaite.

#### b) Le "peut-être"
-   "Si tu as le temps / si tu es libre, ça me ferait plaisir de..."
-   "Je me demandais si tu serais intéressé(e) par..."

-   "Pas de problème si tu n''es pas disponible !" ou "Si ça ne te dit pas, tant pis !"




#### a) Le refus n''est pas personnel
-   Une personne peut refuser pour de nombreuses raisons (emploi du temps chargé, fatigue, autres engagements). Cela ne signifie pas qu''elle ne vous apprécie pas.

-   Si quelqu''un refuse une fois, ne forcez pas. Mais vous pouvez proposer une autre sortie une autre fois.
-   Ne harcelez pas les gens. Si les refus sont systématiques, orientez-vous vers d''autres personnes.


-   Si on vous propose une sortie, acceptez si vous le pouvez. C''est un signe positif.




-   **Si vous n''êtes pas à l''aise en français**, proposez une activité qui ne demande pas trop de conversation (cinéma, exposition) ou invitez une personne qui parle anglais.


-   **Proposer des activités qui ne correspondent pas aux intérêts** de l''autre personne.
-   **Mettre la pression** pour qu''une personne accepte.


-   🔗 [Campus France : S''intégrer en France](https://www.campusfrance.org/fr/sintegrer-en-france) - La référence principale.
-   🔗 [Meetup.com / On Va Sortir](https://www.meetup.com/fr-FR/) - Plateformes pour trouver des groupes d''activités.


Proposer des sorties et des activités est absolument crucial pour les étudiants internationaux souhaitant se faire des amis en France. N''attendez pas les invitations, soyez proactif en suggérant des activités culturelles (musées, cinéma), sportives (SUAPS), ou gourmandes (café, restaurant). Soyez clair(e) et direct(e) dans vos propositions, et ne vous découragez pas en cas de refus. Maîtriser cette initiative est fondamental pour briser la glace, développer un cercle social riche et diversifié, et vivre une expérience étudiante épanouissante et mémorable en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

