-- ==========================================
-- LOT 17 : Cours 81 à 85
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 81 ---

-- COURS 82 : Associations étudiantes
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'd6d8515a-bd9c-4e67-bb81-ce8d5e87e68a',
  'Associations étudiantes en France : BDE, sport, culture et bénévolat',
  'associations-etudiantes-france-bde-sport-culture-benevolat',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui souhaitent s''impliquer dans la vie universitaire et sociale. Les associations étudiantes sont un formidable levier d''intégration, de rencontres, et de développement de compétences. Nous vous expliquerons ce qu''est un BDE (Bureau des Élèves) et son rôle d''animation, les avantages des associations sportives ou culturelles pour faire des amis, et la valeur du bénévolat pour votre CV. Maîtriser l''implication associative est absolument crucial pour briser l''isolement, développer votre réseau, enrichir votre expérience étudiante, et valoriser votre engagement sur le marché du travail français.',
  'Associations étudiantes France : BDE (animation), sport/culture, bénévolat (CV). Intégrez-vous, développez votre réseau et enrichissez votre expérience !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le rôle des associations étudiantes (BDE, sport, culture, humanitaire)", "Identifier les avantages de l''engagement associatif (rencontres, compétences, réseau)", "Savoir comment trouver et rejoindre une association étudiante", "Maîtriser les conseils pour valoriser son engagement sur le CV et dans sa recherche d''emploi"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  600,
  4500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 82
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'BDE (Bureau des Élèves) : C''est quoi ?',
  '# BDE (Bureau des Élèves) : C''est quoi ?

## Pourquoi c''est important ?

Le **Bureau des Élèves (BDE)** est l''association étudiante la plus emblématique et la plus active dans la plupart des universités et grandes écoles françaises. C''est le cœur de la vie étudiante, organisant des événements, des soirées, des activités sportives et culturelles. Ne pas connaître le rôle d''un BDE, ou ne pas s''y intéresser, c''est risquer de rester en marge de la vie universitaire, de passer à côté d''opportunités de socialisation, et de ne pas profiter pleinement de votre expérience étudiante en France. Pour les étudiants internationaux, s''impliquer dans un BDE (ou simplement participer à ses événements) est absolument crucial pour faciliter l''intégration, se faire des amis, et découvrir la culture étudiante française.


-   Définir ce qu''est un BDE et son rôle au sein d''un établissement.
-   Identifier les avantages de s''impliquer dans un BDE (rencontres, compétences, réseau).





### 1. Qu''est-ce qu''un BDE (Bureau des Élèves) ?


-   Le BDE est une association loi 1901, gérée et animée par des étudiants, au sein d''une formation (Licence, Master) ou d''un établissement (université, école).

-   **Organisation d''événements** : Soirées étudiantes, week-ends d''intégration (WEI), galas, concerts, festivals, voyages.
-   **Services aux étudiants** : Vente de sweats et goodies à l''effigie de la promotion, parrainage des nouveaux étudiants, organisation de tutorats.
-   **Représentation** : Le BDE représente les étudiants auprès de l''administration de l''établissement.

-   Les BDE sont financés par les cotisations des étudiants, la vente de services, et parfois par des subventions de l''université ou des entreprises partenaires.


### 2. Les avantages de s''impliquer dans un BDE (ou de participer à ses événements)

Plus qu''une simple distraction.

-   **Rencontrer du monde** : C''est le moyen le plus rapide de rencontrer d''autres étudiants (français et internationaux), de se faire des amis et de créer son cercle social.

-   **Compétences organisationnelles** : Gestion de projet, événementiel, communication, budget, gestion d''équipe.
-   **Valorisation sur le CV** : L''engagement associatif est très apprécié par les recruteurs. (Voir point 4).

-   Vous rencontrez d''autres étudiants, des alumni, et parfois des professionnels partenaires du BDE.



#### a) Journée d''intégration / de rentrée
-   Le BDE est souvent très présent lors des journées d''intégration ou des événements de rentrée. C''est le moment idéal pour les rencontrer.


#### c) Réseaux sociaux et site de l''université

#### d) Pour s''impliquer
-   Si vous souhaitez vous impliquer davantage, contactez-les pour rejoindre l''équipe (souvent des "pôles" : événementiel, communication, partenariats, trésorerie).




-   **N''ayez pas peur de vous approcher des stands des BDE** à la rentrée.
-   **Même si votre français n''est pas parfait**, l''engagement associatif est une excellente occasion de le pratiquer et de le perfectionner.
-   **Participez aux week-ends d''intégration (WEI)** : C''est un moment fort de la vie étudiante.


-   **Sous-estimer l''importance de la vie associative** pour l''intégration.
-   **Penser que c''est uniquement pour les fêtards** : Les BDE organisent aussi des activités culturelles, sportives, de prévention.
-   **Ne pas tenir compte de l''engagement en temps** si vous vous impliquez beaucoup.
-   **Ne pas comprendre le rôle des "listes" et des élections de BDE**.


-   🔗 [FAGE (Fédération des Associations Générales Étudiantes)](https://fage.org/) - La plus grande fédération d''associations étudiantes.
-   🔗 [Ministère de l''Enseignement Supérieur : Vie étudiante](https://www.enseignementsup-recherche.gouv.fr/fr/la-vie-etudiante-46549) - Politique de soutien.


Le BDE (Bureau des Élèves) est l''association étudiante la plus active en France, organisant événements, soirées, activités sportives et culturelles. S''impliquer dans un BDE, ou simplement participer à ses événements, est absolument crucial pour les étudiants internationaux afin de faciliter l''intégration, se faire des amis, développer des compétences (organisation, communication), et enrichir votre expérience étudiante. Trouvez le BDE de votre formation dès la rentrée et n''hésitez pas à vous lancer. C''est un formidable levier pour une vie étudiante épanouissante en France.
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
  'Associations humanitaires ou sportives',
  '# Associations humanitaires ou sportives (Vie étudiante)

## Pourquoi c''est important ?

Au-delà des Bureaux des Élèves (BDE), les universités et les villes françaises regorgent d''**associations étudiantes et locales humanitaires, sportives, culturelles, ou environnementales**. S''impliquer dans ces associations est une opportunité absolument cruciale pour les étudiants internationaux. C''est un moyen fantastique de rencontrer des gens partageant les mêmes centres d''intérêt, de pratiquer le français dans un contexte concret, de vous intégrer socialement et culturellement, et de développer des compétences valorisables sur votre CV. Ne pas explorer ces options, c''est risquer de se limiter à la sphère académique et de passer à côté d''une richesse d''expériences humaines et citoyennes.


-   Définir les différents types d''associations étudiantes (humanitaires, sportives, culturelles).
-   Comprendre les avantages de s''engager dans une association.


Le tissu associatif est très développé en France. C''est un excellent moyen de s''investir et de rencontrer des gens.



### 1. Les différents types d''associations étudiantes


-   **Objectif** : Aider les plus démunis, s''engager pour une cause.
-   **Avantage** : Sens du partage, développement de l''empathie, travail d''équipe.

-   **Avantage** : Bien-être physique, esprit d''équipe, dépassement de soi.

-   **Exemples** : Clubs de théâtre, de musique, de photographie, de cinéma, de littérature, de danse, associations de promotion d''une culture étrangère.




### 2. Les avantages de s''engager dans une association

Plus qu''un simple loisir.

-   **Découvrir la culture locale** : Vous vous immergez dans la vie de la ville et de l''université.

-   **Gestion de projet, organisation, communication, travail en équipe, leadership, autonomie, prise d''initiative, résolution de problèmes.**

-   **Expérience valorisante** : L''engagement associatif est un atout majeur sur votre CV français. Il montre votre dynamisme, votre sens des responsabilités, et votre capacité à vous investir.

-   Vous rencontrez d''autres étudiants, des bénévoles, des professionnels, des partenaires.



-   En début d''année universitaire, votre établissement organise souvent un forum où toutes les associations présentent leurs activités. C''est le moment idéal pour les rencontrer.

#### b) Sites internet de l''université / du CROUS



-   N''hésitez pas à les contacter par e-mail ou à vous rendre à leurs permanences.


-   Vos **centres d''intérêt**.


-   **Si vous êtes timide, le bénévolat est un excellent moyen de rencontrer du monde** sans la pression sociale d''une soirée.


-   **Rester isolé(e)** et ne pas s''impliquer.
-   **Ne pas faire d''effort pour pratiquer le français**.
-   **S''engager trop sans pouvoir tenir ses engagements** (impact sur les études).
-   **Penser que l''on ne peut pas trouver d''association qui correspond à ses centres d''intérêt**.
-   **Ne pas se renseigner** sur les missions de l''association.




Les associations étudiantes (humanitaires, sportives, culturelles) sont un formidable levier d''intégration pour les étudiants internationaux en France. S''y impliquer vous permet de rencontrer des Français, de pratiquer la langue, de développer des compétences (gestion de projet, travail en équipe) et d''enrichir votre CV. Trouvez les associations qui correspondent à vos passions via les forums universitaires ou les réseaux sociaux. Maîtriser l''engagement associatif est absolument crucial pour briser l''isolement, construire un réseau, et valoriser votre expérience étudiante pour votre future carrière en France.
',
  2,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4102-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Valoriser son engagement sur le CV',
  '# Valoriser son engagement sur le CV

## Pourquoi c''est important ?

Votre expérience en France ne se limite pas à vos études et à vos notes. L''**engagement associatif** (BDE, associations humanitaires, sportives, culturelles), le **bénévolat**, ou la **participation à des projets étudiants** sont des atouts très valorisés par les recruteurs français. Cependant, il est absolument crucial de savoir comment présenter et valoriser efficacement ces expériences sur votre CV et dans vos entretiens d''embauche. Ne pas le faire, c''est risquer de sous-estimer la richesse de votre parcours, de ne pas mettre en avant des compétences clés, et de passer à côté d''opportunités professionnelles. Pour les étudiants internationaux, cet engagement est un signe fort d''intégration et de dynamisme. Maîtriser cette valorisation est fondamental pour vous démarquer et réussir votre insertion professionnelle en France.


-   Comprendre pourquoi l''engagement associatif est valorisé en France.


L''engagement associatif témoigne de votre personnalité, de vos valeurs, et de compétences que l''on n''acquiert pas toujours en classe.

🔗 [APEC (Association Pour l''Emploi des Cadres) : Valoriser son bénévolat sur son CV](https://www.apec.fr/candidat/preparer-sa-candidature/cv/valoriser-son-benevolat-sur-son-cv.html) - Conseils professionnels.


### 1. Pourquoi l''engagement associatif est valorisé en France ?


-   L''engagement associatif permet de développer des compétences très recherchées :
    -   **Autonomie, prise d''initiative, créativité, adaptabilité, gestion du stress**.
    -   **Sens des responsabilités, sens de l''engagement citoyen**.

#### b) Preuve de dynamisme et d''intégration
-   Pour les étudiants internationaux, s''engager dans une association montre votre dynamisme, votre volonté de vous intégrer, votre ouverture d''esprit, et votre capacité à vous investir au-delà des études.


-   Un engagement peut être en lien avec votre projet professionnel (ex: association d''aide humanitaire si vous voulez travailler dans l''humanitaire).



#### a) Section "Engagements Associatifs" ou "Activités Extra-académiques"
-   Créez une section spécifique, souvent placée après la formation et les expériences professionnelles, ou après les centres d''intérêt.
-   **Titre clair** : "Engagements Associatifs", "Bénévolat", "Activités Associatives".

-   Listez vos expériences d''engagement par ordre anti-chronologique (la plus récente en premier).



#### a) Nom de l''association et dates
-   Nom complet de l''association, ville, dates de début et de fin de votre engagement.
-   Votre rôle ou votre fonction (ex: "Membre actif", "Responsable communication", "Trésorier").

-   Utilisez des **verbes d''action forts** : "Organisé", "Géré", "Coordonné", "Développé", "Contribué à", "Collecté".
-   **Quantifiez vos résultats** si possible : "Organisation de X événements pour Y personnes", "Collecte de Z euros de dons", "Gestion d''une équipe de W bénévoles", "Création de X contenus pour les réseaux sociaux".
-   **Mettez en avant les compétences acquises** : Reliez vos actions à des soft skills (ex: "Gestion de projet événementiel, développant mes compétences en organisation et leadership").



Ce que l''engagement vous a apporté.

-   **Autonomie et sens de l''initiative**
-   **Maîtrise des outils numériques** (si utilisés pour l''association).

-   Dans la description de vos missions ("j''ai géré X, ce qui m''a permis de développer Y en Z").
-   Dans la section "Compétences" de votre CV.




-   **Si vous n''avez pas beaucoup d''expérience professionnelle**, l''engagement associatif est un excellent moyen de valoriser vos compétences.


-   **Ne pas mentionner son engagement associatif** : Perte d''opportunités.
-   **Décrire l''engagement de manière trop vague** ("membre de l''association X").
-   **Faire des fautes d''orthographe**.
-   **Mélanger l''engagement avec les centres d''intérêt** si l''engagement est important.


-   🔗 [APEC (Association Pour l''Emploi des Cadres) : Valoriser son bénévolat sur son CV](https://www.apec.fr/candidat/preparer-sa-candidature/cv/valoriser-son-benevolat-sur-son-cv.html) - La référence professionnelle.
-   🔗 [LinkedIn : Optimiser son profil](https://www.linkedin.com/help/linkedin/answer/100080/conseils-pour-rediger-un-cv-efficace?lang=fr) - Peut inclure l''engagement.
-   🔗 [France Bénévolat](https://www.francebenevolat.org/) - Pour l''aide au bénévolat.


Valoriser votre engagement associatif (BDE, humanitaire, sportif, culturel) sur votre CV est absolument crucial pour les étudiants internationaux en France. Créez une section dédiée, décrivez vos missions et responsabilités avec des verbes d''action et des chiffres, et mettez en avant les compétences transversales (organisation, travail en équipe, leadership, communication) que vous avez acquises. Cet engagement témoigne de votre dynamisme, de votre intégration, et de votre sens des responsabilités, des atouts très recherchés par les recruteurs. Maîtriser cette valorisation est fondamental pour vous démarquer et réussir votre insertion professionnelle en France.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 82 ---

-- COURS 83 : Culture Pass
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'd6d8515a-bd9c-4e67-bb81-ce8d5e87e68a',
  'Culture Pass : Musées gratuits, 300€ offerts aux jeunes',
  'culture-pass-musees-gratuits-300-offerts-jeunes',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui souhaitent accéder à la culture à moindre coût. La France offre des dispositifs avantageux, notamment le **"Culture Pass"** (300€ offerts aux jeunes de 18 ans) et la gratuité des musées nationaux pour les moins de 26 ans. Ne pas connaître ces aides, c''est se priver d''une opportunité fantastique de découvrir le riche patrimoine culturel français sans grever son budget. Nous vous expliquerons comment bénéficier du Culture Pass, la gratuité des musées, et les tarifs réduits pour l''opéra et le théâtre. Maîtriser ces informations est absolument crucial pour vous immerger dans la culture française, faire des découvertes, et enrichir votre expérience étudiante.',
  'Culture Pass : 300€ offerts à 18 ans ! Musées nationaux gratuits -26 ans, tarifs jeunes opéra/théâtre. Découvrez la culture à petit prix !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le fonctionnement et les avantages du Culture Pass (300€ offerts)", "Identifier la gratuité des musées nationaux pour les moins de 26 ans", "Savoir comment accéder aux tarifs réduits pour l''opéra et le théâtre", "Maîtriser les conseils pour profiter pleinement de l''offre culturelle française"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  600,
  4500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 83
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  '300€ offerts à 18 ans : Comment l''avoir',
  '# Culture Pass : 300€ offerts à 18 ans - Comment l''avoir

## Pourquoi c''est important ?

Le **"Culture Pass"** est un dispositif gouvernemental français qui offre un budget de **300€** aux jeunes de 18 ans pour des activités et biens culturels. Pour les étudiants internationaux qui atteignent l''âge de 18 ans pendant leur séjour en France, cette aide est absolument cruciale. Ne pas connaître l''existence de cette offre, c''est se priver d''une somme considérable pour découvrir le riche patrimoine culturel français (musées, concerts, livres, cinéma, théâtre). Maîtriser comment l''obtenir et l''utiliser est fondamental pour vous immerger dans la culture, enrichir votre expérience étudiante, et alléger votre budget loisirs.


-   Définir ce qu''est le Culture Pass et son objectif.
-   Comprendre les conditions d''éligibilité pour les étudiants internationaux (âge, résidence).
-   Savoir comment télécharger l''application et activer son compte Culture Pass.


Le Culture Pass vise à favoriser l''accès des jeunes à la culture. C''est un véritable cadeau de l''État français.



### 1. Qu''est-ce que le Culture Pass et son objectif ?


-   Le Culture Pass est une application mobile qui vous donne accès à un crédit d''argent (non transférable) à dépenser pour des activités et des biens culturels.
-   **Objet** : Soutenir l''accès des jeunes à la culture et la consommation culturelle.

-   **Citoyenneté/Résidence** : Il est ouvert aux jeunes de nationalité française, mais aussi aux jeunes résidant en France depuis plus d''un an et titulaires d''un titre de séjour valide.


### 2. Conditions d''éligibilité pour les étudiants internationaux


-   Vous devez avoir **18 ans révolus** (être dans l''année de votre 18ème anniversaire).

-   **Preuve** : Votre titre de séjour ou VLS-TS validé, accompagné d''un justificatif de domicile et d''une attestation d''arrivée sur le territoire.

#### c) Pièces d''identité
-   Une pièce d''identité valide (passeport, titre de séjour).

### 3. Comment télécharger l''application et activer son compte ?


#### a) Télécharger l''application
-   Recherchez "Pass Culture" sur le Google Play Store (Android) ou l''App Store (iOS) et téléchargez l''application officielle.

-   Ouvrez l''application et cliquez sur "Créer mon compte".
    -   Téléchargez les justificatifs demandés (pièce d''identité, justificatif de domicile, titre de séjour si applicable).



-   **Musées, monuments, expositions** : Achetez des billets d''entrée.

-   **Matériel d''art créatif**.

-   L''application vous propose des offres culturelles autour de vous.

#### d) Pas d''argent liquide
-   Le crédit est à utiliser sur l''application, il ne peut pas être converti en espèces.




-   **Explorez les offres de votre ville** : L''application est une mine d''or.
-   **N''hésitez pas à tester de nouvelles activités culturelles** que vous ne connaissez pas.
-   **Utilisez-le pour des sorties entre amis** : C''est aussi un moyen de socialiser.


-   **Ne pas remplir les conditions d''éligibilité** (âge, résidence).
-   **Ne pas utiliser le crédit** avant sa date d''expiration.
-   **Tenter de revendre son crédit** ou d''acheter des biens non culturels : C''est interdit.
-   **Ne pas vérifier la validité d''une offre** avant d''utiliser son Pass.


-   🔗 [Google Play Store / Apple App Store](https://play.google.com/store/apps/details?id=fr.culture.pass) - Pour télécharger l''application officielle.


Le Culture Pass offre 300€ aux jeunes de 18 ans résidant en France (y compris les étudiants internationaux). C''est un budget précieux pour découvrir des activités et biens culturels (cinéma, théâtre, musées, livres). Téléchargez l''application "Pass Culture", activez votre compte avec vos justificatifs, et explorez les offres géolocalisées. Maîtriser comment l''obtenir et l''utiliser est absolument crucial pour vous immerger dans la culture française, enrichir votre expérience étudiante, et alléger votre budget loisirs. Ne passez pas à côté de cette opportunité !
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
  'Musées nationaux gratuits -26 ans',
  '# Musées nationaux gratuits (-26 ans)

## Pourquoi c''est important ?

La France regorge de musées et de monuments d''une richesse culturelle inestimable. Pour tous les jeunes de moins de 26 ans, l''accès aux **musées et monuments nationaux est gratuit**. Cette mesure est absolument cruciale pour les étudiants internationaux, car elle vous offre une opportunité fantastique de découvrir gratuitement le patrimoine historique et artistique français, sans grever votre budget. Ne pas connaître cette gratuité, c''est se priver d''expériences culturelles inoubliables. Maîtriser cette information est fondamental pour explorer la culture française, enrichir vos connaissances, et profiter pleinement de votre séjour en France à moindre coût.


-   Définir ce qu''est la gratuité des musées nationaux pour les jeunes.


C''est une politique culturelle française qui vise à favoriser l''accès des jeunes à la culture.





-   **Nationalité** : Cette gratuité s''applique à tous les jeunes, quelle que soit leur nationalité, du moment qu''ils ont moins de 26 ans.
-   **Preuve d''âge** : Vous devrez présenter une pièce d''identité (passeport, carte d''identité, titre de séjour) pour prouver votre âge.

-   **Les musées et monuments nationaux** : Ceux qui dépendent de l''État français.
    -   **Exemples à Paris** : Musée du Louvre (pour les collections permanentes, parfois des expos payantes), Musée d''Orsay, Centre Pompidou, Musée du Quai Branly - Jacques Chirac, Château de Versailles, Panthéon, Arc de Triomphe.
    -   **En région** : Le Château de Chambord, les musées des Beaux-Arts qui sont "nationaux" (attention, tous ne le sont pas).
-   **Attention aux musées municipaux ou privés** : La gratuité ne s''applique pas systématiquement à eux. Certains peuvent proposer des tarifs réduits pour les étudiants, mais pas la gratuité totale. Renseignez-vous au cas par cas.




#### a) Présentez votre pièce d''identité
-   À l''entrée du musée ou du monument, présentez votre passeport, votre carte d''identité, ou votre titre de séjour.

-   Dans certains musées, vous devrez quand même passer par la billetterie pour retirer un billet "gratuit" (qui servira de contrôle d''accès).
-   Dans d''autres, la présentation de votre pièce d''identité à l''entrée suffit.



-   Une opportunité unique d''approfondir vos connaissances en art, histoire, science.

-   Le prix d''entrée d''un grand musée peut être de 10€ à 20€. La gratuité vous permet de faire des économies substantielles.

#### c) Outil d''intégration
-   Vous apprenez sur l''histoire et la culture du pays qui vous accueille.

### 4. Conseils pour profiter pleinement de l''offre culturelle


-   Vérifiez les jours et horaires d''ouverture, les jours de forte affluence.


-   Si vous avez le Culture Pass (pour vos 18 ans), vous pouvez l''utiliser pour les expositions payantes, des concerts, des spectacles qui ne sont pas couverts par la gratuité -26 ans.





-   **Ayez toujours une pièce d''identité sur vous** pour prouver votre âge.
-   **N''hésitez pas à demander des informations** au personnel d''accueil du musée.


-   **Ne pas avoir de pièce d''identité** pour prouver votre âge.
-   **Ne pas tenir compte des heures d''affluence** (visites plus agréables en semaine, hors vacances scolaires).




L''accès aux musées et monuments nationaux est gratuit en France pour tous les jeunes de moins de 26 ans, quelle que soit leur nationalité. Présentez votre pièce d''identité à l''entrée. Cette gratuité est absolument cruciale pour les étudiants internationaux afin de découvrir gratuitement le riche patrimoine culturel français (Louvre, Orsay, Versailles). Planifiez vos visites, utilisez les audioguides, et profitez de cette opportunité unique pour vous immerger dans la culture française et enrichir votre expérience étudiante à moindre coût.
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
  'Opéra et Théâtre : Tarifs jeunes',
  '# Opéra et Théâtre : Tarifs jeunes

## Pourquoi c''est important ?

L''opéra et le théâtre sont des arts vivants prestigieux en France, mais ils peuvent être perçus comme coûteux et inaccessibles, surtout pour les étudiants. Cependant, de nombreuses institutions culturelles françaises proposent des **tarifs spécifiques et très avantageux pour les jeunes et les étudiants**, allant de la réduction significative à des offres de dernière minute quasi gratuites. Ne pas connaître ces dispositifs, c''est se priver d''une opportunité fantastique de découvrir la richesse de la scène culturelle française à moindre coût. Pour les étudiants internationaux, maîtriser ces informations est absolument crucial pour accéder à ces spectacles, enrichir votre expérience, et vous immerger dans la culture vivante sans grever votre budget.


-   Définir les tarifs jeunes et étudiants pour l''opéra et le théâtre.
-   Comprendre les différents types d''offres (places à prix réduits, dernière minute).


La politique culturelle française encourage l''accès du plus grand nombre aux arts vivants.





-   **Preuve du statut** : Vous devrez présenter votre **carte étudiante valide** et parfois une pièce d''identité pour prouver votre âge.





-   **Offres pour les jeunes** : Propose des places à tarifs réduits (-28 ans) et des offres "dernière minute" à des prix très attractifs.
-   **Carte "Jeunes à l''Opéra"** : Un abonnement dédié.
-   **Renseignez-vous** sur leur site pour les "avant-premières jeunes" et les "places debout" à prix très faibles.


-   **Exemples** : Théâtre National de Chaillot, Odéon-Théâtre de l''Europe, Théâtre de la Ville à Paris.






-   Cherchez les rubriques "Jeunes", "Étudiants", "Tarifs réduits", "Offres de dernière minute".


#### c) Le "Culture Pass" (si vous avez 18 ans)

-   Le CROUS peut aussi avoir des "bons plans".




-   L''opéra et le théâtre sont accessibles à tous. Il n''y a pas besoin d''être un expert.

-   Renseignez-vous sur l''œuvre (intrigue, compositeur, mise en scène).

-   Il n''y a pas de code vestimentaire strict. Une tenue soignée est appréciée (casual chic).


-   Votre **pièce d''identité** (pour l''âge).


-   **N''hésitez pas à aller voir des spectacles** : C''est une partie enrichissante de l''expérience française.
-   **Commencez par des œuvres classiques ou connues** si vous n''êtes pas familier(ère) avec l''opéra/théâtre.
-   **Invitez des amis** : C''est plus agréable de partager ces moments.
-   **Les placements "dernière minute" sont une bonne option** si vous êtes flexible.


-   **Penser que l''opéra et le théâtre sont trop chers** : Il existe de nombreuses réductions.
-   **Arriver en retard** (souvent, l''accès à la salle est refusé après le début du spectacle).
-   **Manquer les offres de dernière minute** si vous êtes à l''affût.


-   🔗 [Culture Pass : Site officiel](https://pass.culture.fr/) - Pour d''autres activités.


L''opéra et le théâtre en France sont accessibles aux étudiants internationaux grâce à de nombreux tarifs jeunes et réductions. L''Opéra National de Paris et la Comédie-Française proposent des offres spécifiques pour les moins de 28 ans, ainsi que des places de dernière minute. Consultez les sites des institutions culturelles, inscrivez-vous à leurs newsletters, et ayez toujours votre carte étudiante valide. Maîtriser ces informations est absolument crucial pour découvrir ces arts vivants prestigieux à moindre coût, enrichir votre expérience, et vous immerger pleinement dans la culture française.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 83 ---

-- COURS 84 : Le Cinéma
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'd6d8515a-bd9c-4e67-bb81-ce8d5e87e68a',
  'Le Cinéma en France : UGC Illimité, VOSTFR vs VF et bons plans',
  'cinema-france-ugc-illimite-vostfr-vf-bons-plans',
  'Ce cours est essentiel pour tous les étudiants internationaux en France qui aiment le cinéma. La France est un pays de cinéphiles, avec une offre riche et variée, et de nombreuses salles de cinéma. Nous vous expliquerons les avantages des cartes d''abonnement illimité (UGC Illimité, CinéPass), la distinction cruciale entre les versions VOSTFR (Version Originale Sous-Titrée en Français) et VF (Version Française), et les bons plans (tarifs étudiants, Fête du Cinéma) pour aller au cinéma à moindre coût. Maîtriser ces informations est absolument crucial pour profiter pleinement du cinéma français et international, gérer votre budget loisirs, et vous immerger dans la culture cinématographique. ',
  'Cinéma France : UGC Illimité/CinéPass, VOSTFR vs VF, tarifs étudiants, Fête du Cinéma. Profitez du cinéma à petit prix !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le fonctionnement et la rentabilité des cartes d''abonnement illimité (UGC/CinéPass)", "Distinguer les versions VOSTFR (VO sous-titrée français) et VF (version française)", "Identifier les bons plans (tarifs étudiants, Fête du Cinéma) pour réduire le coût", "Maîtriser les conseils pour profiter du cinéma en France et gérer son budget"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  500,
  3800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 84
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'UGC Illimité / CinéPass',
  '# UGC Illimité / CinéPass (Abonnements cinéma)

## Pourquoi c''est important ?

Si vous êtes un(e) cinéphile et que vous prévoyez d''aller souvent au cinéma en France, les cartes d''abonnement illimité comme **UGC Illimité** ou **CinéPass** (Pathé Gaumont) sont des offres absolument cruciales. Elles vous permettent de regarder autant de films que vous le souhaitez, pour un prix fixe mensuel. Ne pas connaître ces abonnements, c''est risquer de dépenser beaucoup plus cher en achetant des billets à l''unité, et de se priver d''une opportunité de découvrir un grand nombre de films. Pour les étudiants internationaux, ces cartes sont fondamentales pour gérer votre budget loisirs, vous immerger dans la culture cinématographique française, et profiter pleinement de votre passion sans contrainte de prix.


-   Définir ce que sont les cartes d''abonnement illimité cinéma en France.
-   Comprendre le fonctionnement et les avantages d''UGC Illimité et CinéPass.


La France est l''un des pays où le cinéma est le plus subventionné et où l''offre de salles et de films est très riche. Les abonnements illimités sont une particularité française.

🔗 [UGC Illimité : Site officiel](https://www.ugc.fr/cartes-abonnement/ugc-illimite.html) - Le portail d''UGC Illimité.


### 1. Qu''est-ce qu''UGC Illimité / CinéPass ?


-   Ce sont des cartes d''abonnement nominatives et individuelles (ou parfois duo) qui vous donnent un accès illimité aux séances de cinéma dans les salles du réseau concerné (UGC ou Pathé Gaumont).






-   Si vous allez voir **au moins 2 à 3 films par mois**, la carte est rentable. Au-delà, c''est de l''économie pure.

-   Vous êtes plus enclin(e) à découvrir de nouveaux films, des films d''art et essai, ou des films étrangers, sans la contrainte du prix du billet.


### 3. Calculer la rentabilité de l''abonnement


-   Si vous allez au cinéma moins d''une fois par mois, la carte ne sera pas rentable.
-   Si vous allez 2 fois par mois, le coût sera équivalent à l''achat de billets à l''unité.

-   Si votre séjour en France est de courte durée (moins d''un an), l''engagement peut être une contrainte. Vérifiez les conditions de résiliation anticipée.



-   Votre **passeport** ou **titre de séjour** (pour l''identité).


-   **Utilisez l''application mobile de votre réseau** : Pour consulter les horaires, réserver vos places, et présenter votre carte.


-   **Souscrire un abonnement illimité sans aller assez souvent au cinéma** : Perte d''argent.
-   **S''engager sur 12 mois si votre séjour est plus court** : Frais de résiliation.
-   **Ne pas tenir compte de l''engagement minimum**.
-   **Oublier de résilier l''abonnement** avant de quitter la France.




Les cartes d''abonnement illimité cinéma (UGC Illimité, CinéPass) sont des offres très avantageuses pour les étudiants internationaux cinéphiles en France. Pour environ 22€/mois, vous pouvez regarder autant de films que vous le souhaitez, à condition d''aller au cinéma au moins 2 à 3 fois par mois. Tenez compte de l''engagement minimum (souvent 12 mois) et de la proximité des salles des réseaux. Maîtriser ces abonnements est absolument crucial pour optimiser votre budget loisirs, découvrir le cinéma français et international, et profiter pleinement de votre passion sans contrainte de prix.
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
  'VOSTFR vs VF : Bien choisir sa séance',
  '# VOSTFR vs VF : Bien choisir sa séance au cinéma

## Pourquoi c''est important ?

Lorsque vous allez au cinéma en France, vous verrez souvent deux abréviations cruciales pour choisir votre séance : **VOSTFR** (Version Originale Sous-Titrée en Français) et **VF** (Version Française). Comprendre la distinction entre ces deux formats est absolument crucial pour les étudiants internationaux. Ne pas connaître cette différence, c''est risquer de se retrouver devant un film que l''on ne comprend pas (si c''est une VF alors que vous vouliez la VOSTFR pour apprendre le français), ou de ne pas profiter pleinement de l''œuvre. Maîtriser ces options est fondamental pour votre immersion linguistique, votre plaisir cinématographique, et pour choisir la séance qui correspond le mieux à vos objectifs et à votre niveau de français.


-   Définir ce qu''est la VOSTFR et ses avantages pour l''apprentissage du français.






L''option préférée des apprenants et cinéphiles.

-   Des **sous-titres en français** sont affichés en bas de l''écran.

-   **Apprentissage du français** : C''est un excellent moyen d''améliorer votre compréhension orale et votre vocabulaire en français. Vous entendez le français tout en le lisant.


### 2. La VF (Version Française) : Pour le confort d''écoute


-   Il n''y a pas de sous-titres (ou très rarement des sous-titres pour sourds et malentendants, mais ce n''est pas systématique).

-   **Confort d''écoute** : Vous n''avez pas besoin de lire les sous-titres, ce qui est plus reposant et permet de se concentrer sur l''image.
-   **Si votre niveau de français est faible** : Si le film est en VF, vous n''avez pas besoin de lire en français.
-   **Pour les films d''action** : Moins de distraction visuelle.

-   Moins adapté pour l''apprentissage du français (sauf si vous regardez pour l''écoute).

-   Ceux qui veulent faire une pause dans l''apprentissage des langues.



    -   Les séances sont clairement indiquées avec la mention **"VOSTFR"** ou **"VF"**.
    -   Parfois, vous verrez "VO" (Version Originale) si les sous-titres sont dans une autre langue, ou "VOSF" (Version Originale Sous-Titrée en Français).
    -   Des séances peuvent être en "VOSTA" (Version Originale Sous-Titrée en Anglais) pour les films anglophones.

-   Les affiches et les écrans d''affichage indiquent la version.



-   **Privilégiez systématiquement la VOSTFR.** C''est la meilleure option pour progresser.


-   Commencez par des films que vous avez déjà vus (ou dont vous connaissez l''histoire) en VOSTFR.
-   Ou regardez des films en VF pour vous habituer à l''écoute du français (sans l''effort de lecture).

#### d) Les cinémas d''art et essai


-   Votre **volonté d''apprendre le français**.


-   **Utilisez AlloCiné** ou l''application de votre cinéma pour vérifier les versions.
-   **N''ayez pas peur de la VOSTFR** : C''est un excellent exercice.
-   **Si vous regardez un film français**, regardez-le en VF pour l''écoute, mais les sous-titres pour sourds et malentendants (ST-SME) peuvent aider.
-   **Écoutez l''accent des acteurs** : Cela aide à améliorer votre prononciation.


-   **Penser que toutes les séances d''un film sont dans la même version**.


-   🔗 [Campus France : Le français, mode d''emploi](https://www.campusfrance.org/fr/le-francais-mode-demploi) - Conseils pour l''apprentissage.


Le choix entre VOSTFR (Version Originale Sous-Titrée en Français) et VF (Version Française) est crucial lorsque vous allez au cinéma en France. La VOSTFR est l''option idéale pour améliorer votre compréhension orale et votre vocabulaire en français, et pour profiter de l''authenticité du film. La VF offre un confort d''écoute. Vérifiez toujours la version de la séance sur AlloCiné ou le site du cinéma. Maîtriser ce choix est absolument crucial pour votre immersion linguistique, votre plaisir cinématographique, et pour optimiser votre apprentissage du français en France.
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
  'La Fête du Cinéma',
  '# La Fête du Cinéma

## Pourquoi c''est important ?

Chaque année en France, un événement majeur du calendrier culturel, la **"Fête du Cinéma"**, propose des places de cinéma à un tarif exceptionnel de seulement quelques euros (généralement 5€) pour toutes les séances, dans tous les cinémas, pendant plusieurs jours. Ne pas connaître cet événement, c''est se priver d''une opportunité fantastique de voir un grand nombre de films à un prix défiant toute concurrence. Pour les étudiants internationaux, souvent avec un budget serré, la Fête du Cinéma est absolument cruciale pour profiter pleinement du cinéma français et international à moindre coût, enrichir votre expérience culturelle, et vous intégrer à un événement populaire. Maîtriser cette information est fondamental pour planifier vos sorties et faire des économies substantielles.


-   Définir ce qu''est la Fête du Cinéma et son objectif.



🔗 [Fête du Cinéma : Site officiel](https://www.feteducinema.com/) - Le portail de l''événement.


### 1. Qu''est-ce que la Fête du Cinéma ?



-   Pendant toute la durée de l''événement, le prix d''entrée pour **toutes les séances, dans tous les cinémas participants**, est réduit à un tarif unique et très avantageux (généralement **5 €** par personne).




-   La plupart des cinémas en France participent à la Fête du Cinéma : grands réseaux (UGC, Pathé Gaumont, CGR, Kinepolis), cinémas indépendants, cinémas d''art et essai.

-   Tous les films à l''affiche sont concernés par le tarif spécial, y compris les nouveautés.

-   Vous n''avez pas besoin d''une carte d''abonnement (UGC Illimité, CinéPass) pour bénéficier du tarif réduit. Tout le monde peut en profiter.




-   Le prix d''un billet étant habituellement de 8€ à 15€, une place à 5€ représente une économie significative, surtout si vous souhaitez voir plusieurs films.

-   C''est l''occasion de découvrir des films français, des films d''art et essai, ou des films du monde entier que vous n''auriez pas vus autrement.

-   Participer à la Fête du Cinéma est un excellent moyen de vous intégrer à un événement populaire et de partager un moment de convivialité avec des amis français ou d''autres étudiants.




-   Regardez les films à l''affiche et les nouveautés qui vous intéressent.

#### c) Réservez vos places à l''avance (si forte affluence)
-   Pour les films très populaires ou les séances très demandées, il est conseillé de réserver vos places en ligne à l''avance.

-   C''est une excellente occasion de partager un moment de culture avec vos proches.




-   **Ne manquez pas cet événement !** C''est une occasion unique.
-   **Prévoyez d''arriver un peu en avance** aux séances pour éviter la cohue.


-   **Ne pas connaître l''événement** et payer le plein tarif.
-   **Ne pas réserver ses places à l''avance** pour les films très demandés.
-   **Penser que l''on peut obtenir des réductions supplémentaires** sur le tarif Fête du Cinéma (non, le prix est fixe).
-   **Laisser passer l''opportunité de découvrir des films** ou des genres différents.


-   🔗 [Centre National du Cinéma et de l''image animée (CNC)](https://www.cnc.fr/) - L''autorité de régulation du cinéma en France.


La Fête du Cinéma est un événement annuel crucial en France, proposant des places de cinéma à un tarif exceptionnel (environ 5€) pendant plusieurs jours fin juin/début juillet. C''est une opportunité fantastique pour les étudiants internationaux de voir un grand nombre de films (français et internationaux, en VOSTFR pour pratiquer votre français) à moindre coût. Informez-vous sur les dates, planifiez votre programme, et réservez vos places à l''avance. Maîtriser cette information est absolument crucial pour profiter pleinement du cinéma, gérer votre budget loisirs, et vous immerger dans la culture cinématographique française.
',
  3,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 84 ---

-- COURS 85 : Grèves et Manifs
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'd6d8515a-bd9c-4e67-bb81-ce8d5e87e68a',
  'Grèves et Manifs en France : Comprendre l''impact sur votre quotidien',
  'greves-manifs-france-comprendre-impact-quotidien',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre un aspect important de la vie sociale française : les grèves et les manifestations. Ces mouvements sociaux peuvent avoir un impact direct et significatif sur votre quotidien (transports, universités, services publics). Ne pas connaître les raisons des grèves, ne pas savoir comment vérifier le trafic ou les perturbations, et ne pas comprendre comment se comporter en manifestation, c''est risquer des retards importants, des problèmes d''accès, ou des situations délicates. Nous vous expliquerons comment vérifier le trafic les jours de grève, les revendications, et les règles de sécurité. Maîtriser ces informations est absolument crucial pour anticiper les perturbations, vous adapter, et naviguer sereinement dans la vie sociale française.',
  'Grèves et Manifs France : vérifiez trafic, comprenez revendications, sécurité en manifestation. Anticipez les perturbations et adaptez-vous !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''impact des grèves sur les transports et services publics", "Savoir comment vérifier le trafic et les perturbations en temps réel", "Identifier les raisons et les revendications des grèves et manifestations", "Maîtriser les conseils de sécurité en manifestation et les réflexes à adopter"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  550,
  4000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 85
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Vérifier le trafic les jours de grève',
  '# Vérifier le trafic les jours de grève

## Pourquoi c''est important ?

Les grèves, particulièrement dans les transports en commun (RATP, SNCF), sont une réalité fréquente en France et peuvent avoir un impact majeur sur votre quotidien d''étudiant international. Ne pas savoir comment vérifier le trafic et les perturbations les jours de grève, c''est risquer des retards importants pour vos cours ou votre job, de manquer des rendez-vous, ou de vous retrouver bloqué(e). Maîtriser les outils et les réflexes pour s''informer en temps réel est absolument crucial pour anticiper les perturbations, planifier vos déplacements, et vous adapter efficacement aux mouvements sociaux. C''est la clé pour maintenir votre emploi du temps et votre sérénité.


-   Comprendre l''impact des grèves sur les transports en commun.
-   Identifier les différentes sources d''information fiables pour le trafic.


Les grèves sont un droit en France, mais elles peuvent perturber le quotidien. S''informer est la clé pour minimiser les désagréments.



### 1. L''impact des grèves sur les transports en commun




-   Dans le secteur des transports publics, les grèves sont soumises à un préavis de 5 jours. Les opérateurs sont donc informés à l''avance et peuvent communiquer des prévisions.

### 2. Les sources d''information fiables pour le trafic

Où chercher l''info.




-   Les stations de radio (France Info, France Bleu) ou les chaînes d''information en continu informent sur les grèves.






-   Les opérateurs publient des "plans de transport" spécifiques pour les jours de grève, indiquant les lignes qui fonctionnent, la fréquence des trains/bus, et les stations fermées.




-   **VTC (Uber, Bolt)** : Une option plus chère, mais possible en cas d''urgence.






-   **Les grèves sont une réalité** en France, il faut s''y adapter.


-   **Ne pas s''informer du trafic** et se retrouver bloqué(e).
-   **Ne pas avoir d''itinéraire alternatif**.
-   **Ne pas avoir de batterie sur son téléphone** pour s''informer.




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
  'Comprendre les revendications',
  '# Comprendre les revendications (Grèves et Manifestations)

## Pourquoi c''est important ?

Les grèves et les manifestations sont des expressions démocratiques et syndicales très ancrées dans la culture française. Elles ne sont pas de simples "blocages", mais des actions qui visent à faire entendre des revendications sociales, économiques, ou politiques. Comprendre les raisons et les objectifs de ces mouvements est absolument crucial pour les étudiants internationaux. Ne pas connaître les enjeux derrière une grève ou une manifestation, c''est risquer de ne pas saisir une part importante de la vie sociale française, de se sentir déconnecté(e), ou de mal interpréter les événements. Maîtriser cette compréhension est fondamental pour une intégration culturelle réussie et pour développer une vision éclairée de la société française.


-   Définir ce qu''est une revendication sociale et son rôle dans la démocratie.
-   Maîtriser les conseils pour s''informer sur les motifs des mouvements sociaux.





### 1. Qu''est-ce qu''une revendication sociale ?

L''expression d''un besoin ou d''une protestation.

-   Une revendication est une demande formulée par un groupe (salariés, syndicats, citoyens, étudiants) auprès d''une autorité (employeur, gouvernement) pour obtenir un changement ou la satisfaction d''un droit.
-   C''est l''expression d''un désaccord ou d''un mécontentement.

-   Les grèves et manifestations sont des moyens légaux d''exprimer ces revendications et de peser sur les décisions politiques ou économiques.
-   C''est un pilier de la démocratie sociale française.



#### a) Salaires et pouvoir d''achat
-   C''est le motif le plus fréquent. Les salariés réclament des augmentations de salaire face à l''inflation ou des salaires jugés insuffisants.



-   Défense de l''emploi, lutte contre les licenciements, création d''emplois.







-   Lutte contre le racisme, le sexisme, l''homophobie.

-   Amélioration des conditions d''études, des bourses, des logements.
-   Protestation contre des réformes de l''enseignement supérieur.

### 4. Comment s''informer sur les motifs des mouvements sociaux ?


#### a) Les médias d''information
-   **Journaux télévisés, radios (France Info, France Inter, RFI), presse écrite (Le Monde, Le Figaro, Libération), sites d''information en ligne.**

-   **Panneaux d''affichage** dans les universités ou les lieux de travail.


-   Le service de la vie étudiante peut vous informer sur les mouvements qui concernent l''université.






-   **Ne pas s''informer du tout** : Vous risquez d''être déconnecté(e).
-   **Ne pas faire la distinction entre une grève "nationale" et une grève "locale"**.
-   **Penser que les grèves sont toujours "contre" les étudiants** : Elles peuvent aussi les concerner directement.


-   🔗 [France Info / France Inter / Arte (médias)](https://www.radiofrance.fr/) - Pour l''actualité.


Comprendre les revendications des grèves et manifestations est absolument crucial pour les étudiants internationaux en France. Ces mouvements sociaux, basés sur des revendications salariales, sur les retraites, les conditions de travail, ou des sujets sociétaux, sont une expression démocratique. Informez-vous via les médias fiables (radio, TV, presse) et les sites des syndicats pour saisir les enjeux. Maîtriser cette compréhension est fondamental pour une intégration culturelle réussie, une vision éclairée de la société française, et pour anticiper l''impact de ces mouvements sur votre quotidien.
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
  'Sécurité en manifestation',
  '# Sécurité en manifestation

## Pourquoi c''est important ?

En France, les manifestations sont des expressions démocratiques légales, mais elles peuvent parfois être le théâtre de débordements ou de tensions. Participer à une manifestation, même pacifique, nécessite de connaître les règles de sécurité et les réflexes à adopter pour garantir votre intégrité physique et éviter tout problème avec les forces de l''ordre. Ne pas savoir comment se comporter, où se positionner, ou comment réagir en cas de tension, c''est risquer de se retrouver dans une situation dangereuse, d''être blessé(e), ou d''être interpellé(e). Pour les étudiants internationaux, souvent peu familiers avec ces dynamiques, maîtriser ces consignes de sécurité est absolument crucial pour vous protéger.


-   Savoir comment réagir en cas de tension, de gaz lacrymogène ou d''interpellation.
-   Maîtriser les conseils pour participer en toute sécurité ou s''éloigner si nécessaire.


Votre sécurité est la priorité absolue. Une manifestation, même si elle est un droit, n''est pas sans risques.






-   **Petit sac à dos** : Avec de l''eau, des encas, votre téléphone chargé, une pièce d''identité (copie) et un peu d''argent liquide.



🔗 [La Ligue des Droits de l''Homme (LDH) : Guide du manifestant](https://www.ldh-france.org/publications/le-guide-du-manifestant/) - Conseils détaillés.



-   **Respectez les consignes des organisateurs et des forces de l''ordre** (si elles sont claires et raisonnables).

-   **Ne pas dissimuler son visage** : C''est interdit et peut entraîner une interpellation.
-   **Ne pas porter d''armes ou d''objets dangereux**.
-   **Ne pas se mêler aux groupes violents** ("black blocs", casseurs).
-   **Ne pas insulter ou provoquer les forces de l''ordre**.
-   **Ne pas boire trop d''alcool**.

### 3. Réagir en cas de tension, de gaz lacrymogène ou d''interpellation

Savoir quoi faire dans le vif de l''action.


-   **Quittez la zone** le plus rapidement possible, en montant vers les hauteurs si possible (le gaz est plus lourd que l''air).

#### c) En cas d''interpellation par la police
-   **Demandez la raison de l''interpellation**.
-   **Présentez votre pièce d''identité** (passeport, titre de séjour).
-   **Vous avez le droit de garder le silence**. Ne dites rien sans l''avis d''un avocat.

🔗 [Ministère de l''Intérieur : Maintien de l''ordre public](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Maintien-de-l-ordre-public) - Rôle des forces de l''ordre.

### 4. Participer en toute sécurité ou s''éloigner si nécessaire


-   Vous avez le droit de participer à une manifestation légale et pacifique. C''est une expression démocratique.


-   Si vous êtes témoin de violences (policières ou de manifestants), documentez avec votre téléphone (photos, vidéos) si c''est possible sans vous mettre en danger. C''est utile pour des plaintes ultérieures.


-   Votre **pièce d''identité** (toujours sur soi).
-   Les **numéros d''urgence** (17, 112).


-   **Soyez attentif aux annonces des organisateurs et des forces de l''ordre** (haut-parleurs).
-   **Le réseau d''amis peut vous aider à vous informer** et à rester en sécurité.


-   **Ne pas s''informer des risques**.
-   **S''isoler dans la foule**.
-   **Ne pas savoir comment réagir en cas d''interpellation**.


-   🔗 [La Ligue des Droits de l''Homme (LDH) : Guide du manifestant](https://www.ldh-france.org/publications/le-guide-du-manifestant/) - Guide très détaillé.
-   🔗 [Ministère de l''Intérieur : Maintien de l''ordre public](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Maintien-de-l-ordre-public) - Informations sur le rôle de la police.
-   🔗 [Numéros d''urgence (17 Police, 112 Europe)](https://www.service-public.fr/particuliers/vosdroits/F3025) - Les contacts.


Participer à une manifestation en France exige de connaître et de respecter les règles de sécurité : informez-vous sur l''itinéraire, venez en groupe, protégez vos affaires et évitez les zones de tension. En cas de débordements ou de gaz lacrymogène, éloignez-vous calmement. En cas d''interpellation, restez calme, présentez votre pièce d''identité, et demandez à prévenir un proche ou votre consulat. Votre sécurité est la priorité. Maîtriser ces conseils est absolument crucial pour vous protéger et naviguer sereinement dans les mouvements sociaux français, sans vous mettre en danger ni risquer des problèmes administratifs.
',
  3,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- PARTIE 7 : Vie Spécifique & Départ

-- --- Cours 85 ---

-- COURS 86 : Venir en famille
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'd6d8515a-bd9c-4e67-bb81-ce8d5e87e68a',
  'Venir en famille en France : Scolarisation et aides CAF',
  'venir-famille-france-scolarisation-aides-caf',
  'Ce cours est essentiel pour tous les étudiants internationaux ou les professionnels qui s''installent en France avec leur famille (conjoint, enfants). Venir en famille implique des démarches administratives spécifiques, notamment pour la scolarisation des enfants et l''accès aux aides sociales. Ne pas connaître ces procédures, c''est risquer des difficultés pour l''intégration de vos enfants, ou de ne pas bénéficier des prestations de la CAF (allocations familiales, aides au logement). Nous vous expliquerons comment inscrire vos enfants à l''école ou à la crèche, et les conditions pour demander les allocations familiales de la CAF. Maîtriser ces informations est absolument crucial pour une installation familiale sereine et une bonne intégration de tous les membres de votre foyer en France.',
  'Venir en famille France : inscription scolaire/crèche, allocations familiales CAF. Facilitez l''intégration de vos enfants et optimisez vos aides !',
  'integration_administrative',
  'avance',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la procédure d''inscription scolaire/crèche pour les enfants d''étrangers", "Identifier les documents requis pour la scolarisation des enfants", "Savoir comment demander les allocations familiales et autres aides de la CAF", "Maîtriser les conseils pour une installation familiale réussie et l''intégration de vos enfants"]'::jsonb,
  '["Avoir un titre de séjour valide en France", "Avoir des enfants à charge et/ou un conjoint"]'::jsonb,
  TRUE,
  4.8,
  300,
  2000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 86
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Inscription scolaire/crèche',
  '# Inscription scolaire/crèche pour les enfants d''étrangers en France

## Pourquoi c''est important ?

Si vous venez en France avec vos enfants, l''une de vos premières préoccupations sera leur **scolarisation** (pour les enfants en âge d''aller à l''école) ou leur accueil en **crèche** (pour les tout-petits). L''accès à l''éducation est un droit en France, mais les démarches d''inscription peuvent être complexes, surtout si vous n''êtes pas familier(ère) avec le système éducatif français. Ne pas connaître la procédure, les documents requis, ou les délais, c''est risquer des difficultés pour l''intégration de vos enfants, leur apprentissage du français, ou de ne pas pouvoir les faire garder. Maîtriser ces informations est absolument crucial pour une installation familiale sereine et une bonne intégration de vos enfants dans la vie française.


-   Savoir comment inscrire vos enfants à l''école publique (maternelle et primaire).
-   Identifier la procédure et les documents pour l''inscription en crèche.
-   Maîtriser les conseils pour l''intégration scolaire et linguistique de vos enfants.


L''école est obligatoire en France à partir de 3 ans. Les enfants étrangers ont les mêmes droits que les enfants français.

🔗 [Ministère de l''Éducation Nationale : La scolarisation des élèves allophones nouvellement arrivés](https://www.education.gouv.fr/la-scolarisation-des-eleves-allophones-nouvellement-arrives-en-france-10118) - Informations spécifiques.


### 1. Inscription à l''école publique (maternelle et primaire)

L''accès à l''école est gratuit.


#### b) La procédure d''inscription (en mairie, puis à l''école)
    -   Le service éducation de la mairie vous demandera des documents et vous délivrera un "certificat d''inscription" qui indique l''école où votre enfant sera affecté(e).
        -   Pièce d''identité du parent demandeur (votre passeport, titre de séjour).
        -   Livret de famille ou extrait d''acte de naissance de l''enfant (original et traduction assermentée en français).
        -   Carnet de santé de l''enfant (vérification des vaccins obligatoires : Diphtérie, Tétanos, Poliomyélite, Coqueluche, Rougeole, Oreillons, Rubéole, Hépatite B, Haemophilus influenzae B, Pneumocoque, Méningocoque C).
-   **Étape 2 : Inscription pédagogique à l''école** :
    -   Une fois le certificat d''inscription de la mairie obtenu, vous prendrez rendez-vous avec le directeur ou la directrice de l''école pour finaliser l''inscription.


-   L''affectation au collège ou lycée se fait généralement via l''Inspection Académique (ou Direction des Services Départementaux de l''Éducation Nationale - DSDEN) de votre département.

### 2. L''inscription en crèche (pour les tout-petits)



-   **Inscrivez-vous dès que possible** : Les places en crèche sont très limitées en France. Inscrivez votre enfant dès que vous connaissez votre date d''arrivée et votre adresse.
    -   Pièce d''identité des parents, titre de séjour.
    -   Livret de famille ou acte de naissance de l''enfant (traduit).
    -   Carnet de santé de l''enfant (vaccins obligatoires).
    -   Justificatifs de revenus des parents (avis d''imposition, bulletins de salaire) pour le calcul du tarif (qui est basé sur les revenus).

-   **Assistante maternelle** : Professionnelle agréée qui garde des enfants à son domicile. Moins chère qu''une crèche privée.

🔗 [Service-Public.fr : Modes de garde d''enfant](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations sur les crèches et assistantes maternelles.

### 3. L''intégration scolaire et linguistique de vos enfants


-   Les enfants étrangers qui ne parlent pas français peuvent bénéficier d''un accompagnement spécifique (classes d''intégration, soutien FLS) pour faciliter leur apprentissage de la langue et leur intégration scolaire.
-   Renseignez-vous auprès de l''école ou de l''Inspection Académique.

-   Si vos enfants ont des difficultés d''apprentissage, des associations ou des dispositifs de soutien scolaire existent.

-   Encouragez vos enfants à participer aux activités scolaires et périscolaires (clubs, sport, sorties) pour qu''ils se fassent des amis.


-   Le **livret de famille** ou **acte de naissance de l''enfant** (original et traduction assermentée).
-   Le **carnet de santé** de l''enfant (avec vaccins à jour).


-   **Contactez la mairie dès votre arrivée** (ou même avant) pour l''inscription scolaire/crèche.
-   **Parlez avec les enseignants** pour suivre l''intégration de vos enfants.
-   **Soyez patient(e) pour l''apprentissage du français** : Cela prend du temps.


-   **Ne pas inscrire ses enfants à l''école** (obligatoire à partir de 6 ans).
-   **Ne pas avoir les vaccins obligatoires** à jour : L''inscription sera refusée.
-   **Manquer les délais d''inscription en crèche** : Les places sont rares.
-   **Ne pas faire traduire les documents d''état civil**.
-   **Sous-estimer l''impact de la barrière linguistique** sur l''intégration des enfants.
-   **Ne pas demander d''aides** pour la scolarisation ou la garde (CAF, mairie).


-   🔗 [Ministère de l''Éducation Nationale : La scolarisation des élèves allophones](https://www.education.gouv.fr/la-scolarisation-des-eleves-allophones-nouvellement-arrives-en-france-10118) - Informations spécifiques.
-   🔗 [CAF : Aides à la garde d''enfants](https://www.caf.fr/allocataires/droits-et-prestations/vie-quotidienne/garde-d-enfants) - Pour les aides financières.


L''inscription scolaire (à partir de 3 ans en maternelle, 6 ans en primaire) ou en crèche (moins de 3 ans) est une démarche cruciale pour les enfants d''étrangers en France. Contactez la mairie de votre lieu de résidence avec vos documents (titre de séjour, livret de famille traduit, carnet de santé avec vaccins à jour). Les places en crèche sont limitées, anticipez. Vos enfants pourront bénéficier d''un soutien linguistique (FLS) pour leur intégration. Maîtriser ces informations est absolument crucial pour une installation familiale sereine et une bonne intégration éducative et sociale de vos enfants en France.
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
  'Allocations familiales (CAF)',
  '# Allocations familiales (CAF) pour les familles étrangères

## Pourquoi c''est important ?

Si vous venez vous installer en France avec votre famille et vos enfants, la Caisse d''Allocations Familiales (CAF) propose différentes prestations sociales pour soutenir les familles, dont les **allocations familiales**. Ces aides sont absolument cruciales pour les étudiants internationaux ou les professionnels accompagnés de leur famille, car elles peuvent considérablement alléger votre budget et vous aider à faire face au coût de la vie en France. Ne pas connaître les conditions d''éligibilité, les démarches pour les demander, ou les documents requis, c''est risquer de passer à côté d''un soutien financier précieux. Maîtriser ces informations est fondamental pour optimiser votre budget familial et garantir une installation sereine pour tous.


-   Comprendre les conditions d''éligibilité spécifiques aux familles étrangères.


La CAF est un organisme public qui a pour mission de soutenir financièrement les familles. Les allocations familiales sont l''une de ses prestations phares.



### 1. Qu''est-ce que les allocations familiales ?


-   Elles visent à compenser une partie des dépenses liées à l''entretien et à l''éducation des enfants.

-   Le montant des allocations familiales dépend du nombre d''enfants à charge et de vos revenus (Ressources N-2). Il est forfaitaire et fixé par la loi.

-   En plus des allocations familiales, la CAF peut verser d''autres prestations sous conditions :
    -   **Prestation d''Accueil du Jeune Enfant (PAJE)** : Pour les jeunes enfants (prime de naissance, allocation de base, complément de libre choix du mode de garde).

🔗 [CAF : Les prestations familiales](https://www.caf.fr/allocataires/droits-et-prestations/les-prestations-familiales) - Vue d''ensemble.

### 2. Conditions d''éligibilité spécifiques aux familles étrangères


-   **Obligation** : Vous (et votre conjoint si applicable) devez être titulaire d''un titre de séjour valide vous autorisant à résider en France.
-   **Validité** : Le titre de séjour doit être d''un type qui ouvre droit aux prestations familiales (la plupart des titres longs le permettent, vérifiez auprès de la CAF si votre titre est un cas particulier).


-   Vos revenus (ceux du foyer) de l''année N-2 (deux ans avant l''année de demande) sont pris en compte.
-   Vous devez avoir fait votre déclaration de revenus annuelle (même si non imposable) pour obtenir votre avis d''imposition (ASDIR), indispensable pour la CAF.





#### a) Pièces d''identité et de séjour
-   **Certificat de scolarité des enfants** (à partir d''un certain âge).


-   Vos **avis d''imposition (ASDIR) N-2** (même de non-imposition).

#### d) RIB (Relevé d''Identité Bancaire)
-   D''un compte bancaire français à votre nom. C''est sur ce compte que les allocations seront versées.




-   (Voir cours 27.1) : C''est la première étape.



-   L''instruction des dossiers peut prendre plusieurs semaines ou mois. Faites la demande dès que possible après votre arrivée et la régularisation de votre situation.

-   Changement d''adresse, de situation familiale, de ressources, de nombre d''enfants.




-   **N''attendez pas d''être en difficulté** pour demander les aides.
-   **L''assistante sociale du CROUS** peut vous aider à monter votre dossier (voir cours 54.3).


-   **Oublier de transmettre l''avis d''imposition N-2**.
-   **Manquer les délais d''envoi de justificatifs**.




Si vous venez en France avec au moins deux enfants à charge, vous pouvez bénéficier des allocations familiales de la CAF. Les conditions d''éligibilité incluent un titre de séjour valide pour vous et vos enfants, et des conditions de ressources (revenus N-2). Créez votre compte allocataire `caf.fr`, remplissez la demande en ligne avec précision, et téléchargez tous les justificatifs (titres de séjour, actes de naissance traduits, avis d''imposition, RIB français). Maîtriser ces informations est absolument crucial pour optimiser votre budget familial, garantir une installation sereine, et bénéficier de toutes les aides financières disponibles en France.
',
  2,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

