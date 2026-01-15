-- ==========================================
-- LOT 9 : Cours 41 à 45
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 41 ---

-- COURS 42 : La Pharmacie en France
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '6eb0ee7e-0e30-4c53-87d5-14412d77781c',
  'La Pharmacie en France : Ordonnance, Automédication et Génériques',
  'pharmacie-france-ordonnance-automedication-generiques',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre le fonctionnement des pharmacies et l''accès aux médicaments. Les règles concernant la délivrance de médicaments (avec ou sans ordonnance), l''automédication et l''utilisation des génériques peuvent être différentes de celles de votre pays. Nous vous expliquerons la distinction cruciale entre les médicaments sur ordonnance et ceux en libre accès, le concept d''automédication responsable, et l''importance des médicaments génériques (leur équivalence et leur faible coût). Maîtriser ces informations est absolument crucial pour acheter vos médicaments en toute sécurité, comprendre vos ordonnances, et optimiser vos dépenses de santé en pharmacie.',
  'Pharmacie France : ordonnance vs libre accès, automédication, génériques. Achetez vos médicaments en sécurité et économisez !',
  'sante',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  E'["Comprendre la différence entre médicaments sur ordonnance et automédication", "Identifier les règles de l''automédication responsable en France", "Savoir l''intérêt et l''équivalence des médicaments génériques", "Maîtriser les conseils pour acheter ses médicaments en pharmacie en toute sécurité"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  550,
  4200
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 42
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'd8338bad-15c7-4fc6-8758-7851868a107d',
  '6eb0ee7e-0e30-4c53-87d5-14412d77781c',
  'Ordonnance vs Automédication',
  '# Ordonnance vs Automédication

## Pourquoi c''est important ?

Lorsque vous avez besoin de médicaments en France, il est absolument crucial de comprendre la distinction entre les médicaments qui nécessitent une **ordonnance médicale** et ceux que vous pouvez obtenir en **automédication** (sans ordonnance). Confondre les deux, ou pratiquer une automédication irresponsable, peut avoir des conséquences graves pour votre santé, entraîner des gaspillages financiers, ou vous empêcher d''obtenir les médicaments dont vous avez réellement besoin. Pour les étudiants internationaux, cette distinction est fondamentale pour acheter vos médicaments en toute sécurité, respecter les règles de prescription, et protéger votre bien-être.


-   Définir ce qu''est un médicament sur ordonnance et ses implications.
-   Comprendre le principe de l''automédication responsable.






L''avis du médecin est obligatoire.

-   De nombreux médicaments, surtout ceux qui sont puissants, présentent des risques d''effets secondaires, ou nécessitent un diagnostic précis, ne peuvent être délivrés que sur **présentation d''une ordonnance valide** délivrée par un médecin (généraliste ou spécialiste).

-   Les médicaments sur ordonnance sont généralement remboursés par la Sécurité Sociale (et la mutuelle), selon leur "Service Médical Rendu" (SMR).
-   **Important** : Même si un médicament est remboursé, il ne peut être délivré sans ordonnance s''il est soumis à prescription.

#### c) Type d''ordonnance
-   L''ordonnance doit être rédigée par un médecin, datée et signée. Elle précise le nom du médicament, le dosage, la posologie (comment le prendre), et la durée du traitement.

🔗 [Service-Public.fr : Ordonnance médicale](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations sur l''ordonnance.

### 2. L''automédication : Acheter sans ordonnance


-   L''automédication consiste à prendre un médicament sans ordonnance, de sa propre initiative, pour soigner des symptômes bénins.

-   Il s''agit généralement de médicaments pour des affections courantes et bénignes :
    -   Anti-acides pour les maux d''estomac.
-   **Conseil du pharmacien** : Même en automédication, n''hésitez jamais à demander conseil à votre pharmacien. Il est le professionnel de santé habilité à vous orienter.

-   Les médicaments d''automédication ne sont **jamais remboursés** par la Sécurité Sociale ni par la mutuelle.

### 3. Les règles de l''automédication responsable


-   Toujours lire attentivement la notice d''information du médicament avant de le prendre (posologie, contre-indications, effets secondaires).


-   Si les symptômes persistent au-delà de quelques jours d''automédication, consultez un médecin.
-   Ne pas masquer des symptômes graves avec de l''automédication.






-   Expliquez-lui votre situation d''étudiant international.

-   Rapportez les médicaments non utilisés ou périmés à la pharmacie pour qu''ils soient éliminés en toute sécurité (Cyclamed).




-   **N''achetez jamais de médicaments sur internet en dehors des sites agréés** (très peu nombreux en France et seulement pour certains médicaments sans ordonnance).


-   **Tenter d''obtenir un médicament sur ordonnance sans ordonnance** : Le pharmacien refusera.


-   🔗 [ANSM (Agence Nationale de Sécurité du Médicament et des produits de santé)](https://ansm.sante.fr/) - L''autorité de régulation des médicaments en France.
-   🔗 [Conseil National de l''Ordre des Pharmaciens](https://www.ordre.pharmacien.fr/) - Pour comprendre le rôle du pharmacien.


En France, de nombreux médicaments nécessitent une ordonnance médicale pour être délivrés et remboursés. L''automédication est possible pour les symptômes bénins, mais doit être responsable et avec l''avis du pharmacien. Ne prenez jamais de médicament sur ordonnance sans prescription. Lisez les notices, respectez les posologies, et n''hésitez pas à demander conseil au pharmacien, qui est un acteur clé de votre santé. Maîtriser cette distinction est essentiel pour une gestion sécurisée et efficace de vos médicaments.
',
  1,
  60,
  NULL,
  '[]'::jsonb);
-- LEÇONS pour COURS 42 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '07a31be9-8630-4082-ab2b-4295c5db82b6',
  '6eb0ee7e-0e30-4c53-87d5-14412d77781c',
  'Les génériques : "C''est la même chose"',
  '# Les génériques : "C''est la même chose"

## Pourquoi c''est important ?

Lorsque vous allez à la pharmacie en France avec une ordonnance, le pharmacien vous proposera systématiquement des médicaments **génériques** s''ils existent pour le principe actif prescrit. Comprendre ce que sont les génériques et savoir que "c''est la même chose" (en termes d''efficacité et de sécurité) est absolument crucial pour les étudiants internationaux. Ne pas accepter les génériques par méconnaissance, c''est risquer de payer plus cher des médicaments de marque pour le même traitement, ou de ne pas bénéficier du tiers-payant complet. Les génériques sont une opportunité d''économies importantes sur votre budget santé, sans compromettre la qualité des soins.


-   Définir ce qu''est un médicament générique et son équivalence avec le médicament de référence.


Les médicaments génériques sont des copies de médicaments originaux (appelés "médicaments de référence" ou "princeps") dont le brevet est tombé dans le domaine public.

🔗 [Ameli.fr : Médicaments génériques](https://www.ameli.fr/assure/sante/medicaments/medicaments-generiques) - La page officielle de l''Assurance Maladie.


### 1. Qu''est-ce qu''un médicament générique ?


-   Un médicament générique est un médicament qui contient la **même substance active** (ou "principe actif") que le médicament de référence (original), à la même dose et sous la même forme pharmaceutique (comprimé, gélule, sirop, etc.).
-   **Même efficacité, même sécurité** : Il a prouvé sa bioéquivalence avec le médicament original, ce qui signifie qu''il agit de la même manière dans l''organisme et a les mêmes effets thérapeutiques et les mêmes garanties de sécurité.

-   **Pourquoi ?** : Les génériques n''ont pas eu à supporter les coûts de recherche et développement du médicament original, car ils reprennent une formule déjà connue.

-   Les génériques sont soumis aux mêmes exigences d''autorisation de mise sur le marché (AMM) que les médicaments originaux et sont contrôlés par l''ANSM (Agence Nationale de Sécurité du Médicament).

🔗 [ANSM (Agence Nationale de Sécurité du Médicament) : Médicaments génériques](https://ansm.sante.fr/vos-demarches/les-medicaments-generiques) - L''autorité de régulation.



-   Lorsqu''un médecin vous prescrit un médicament de marque (original), si un générique équivalent existe, le pharmacien a l''obligation légale de vous proposer le générique.
-   **"Voulez-vous le générique ?"** : C''est la question que le pharmacien vous posera.

-   Vous avez le droit de refuser le générique et d''exiger le médicament de marque.

#### c) Mention "Non substituable"
-   Si le médecin estime que le médicament générique ne convient pas à votre situation spécifique (raisons médicales précises), il doit le mentionner sur l''ordonnance avec la formule "Non substituable (NS)". Dans ce cas, le pharmacien doit vous délivrer le médicament de marque, et le remboursement Sécu sera normal.




-   Pour un étudiant, chaque économie compte. Les génériques représentent une source d''économies non négligeable.

-   Moins chers, ils facilitent l''accès aux traitements.



-   **Acceptez le générique systématiquement** : Sauf si votre médecin a explicitement mentionné "Non substituable".
-   **N''ayez pas peur** : Le pharmacien vous assure que "c''est la même chose", et c''est la vérité scientifique.
-   **Informez-vous sur les principes actifs** : C''est la substance active qui agit, pas la marque.




-   **Si vous venez d''un pays où les génériques sont moins développés ou ont une mauvaise réputation**, essayez de vous renseigner sur le système français qui est très rigoureux.


-   **Penser que les génériques sont des médicaments de moindre qualité** : C''est faux.


-   🔗 [ANSM (Agence Nationale de Sécurité du Médicament) : Fiche sur les génériques](https://ansm.sante.fr/vos-demarches/les-medicaments-generiques) - Informations de l''autorité de régulation.
-   🔗 [Conseil National de l''Ordre des Pharmaciens](https://www.ordre.pharmacien.fr/) - Pour comprendre le rôle du pharmacien.


Les médicaments génériques sont des copies de médicaments originaux, avec la même substance active, la même efficacité et la même sécurité, mais à un prix inférieur. En pharmacie, le pharmacien vous proposera systématiquement le générique s''il existe. Acceptez-le, car c''est une opportunité d''économies importantes sur votre budget santé, sans compromettre la qualité des soins. Refuser le générique peut entraîner une pénalisation de votre remboursement. Faites confiance à votre pharmacien et aux autorités de santé françaises sur ce point.
',
  2,
  50,
  NULL,
  '[]'::jsonb);
-- LEÇONS pour COURS 42 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f1a2b3c4-d5e6-4789-a0b1-c2d3e4f5a6b7',
  '6eb0ee7e-0e30-4c53-87d5-14412d77781c',
  'La parapharmacie',
  '# La parapharmacie

## Pourquoi c''est important ?

En France, le terme "parapharmacie" désigne un type de produits et de points de vente distinct des médicaments remboursés et des pharmacies. Comprendre cette distinction est absolument crucial pour les étudiants internationaux, car elle a un impact sur ce que vous pouvez acheter sans ordonnance, sur les prix, et sur les remboursements. Ne pas connaître la parapharmacie, c''est risquer de chercher des produits spécifiques (cosmétiques, compléments alimentaires, produits d''hygiène) dans une pharmacie traditionnelle, de ne pas trouver les meilleurs prix, ou de ne pas comprendre pourquoi certains produits ne sont pas remboursés. C''est une information clé pour gérer votre bien-être et votre budget au quotidien.


-   Définir ce qu''est la parapharmacie et sa distinction avec la pharmacie.
-   Comprendre l''impact sur les prix et les remboursements.


En France, les pharmacies vendent des médicaments, mais aussi des produits de parapharmacie. Il existe également des rayons parapharmacie dans les supermarchés, et des parapharmacies "pures" (souvent en ligne ou dans les centres commerciaux).



### 1. Qu''est-ce que la parapharmacie ?


-   La parapharmacie regroupe des produits de santé, d''hygiène, de beauté et de bien-être qui **ne sont pas des médicaments** et ne nécessitent donc pas d''ordonnance médicale.

-   **Pharmacie** : Vente de médicaments (avec ou sans ordonnance), remboursés ou non. Présence obligatoire d''un pharmacien pour le conseil et la délivrance.



#### a) Produits d''hygiène et de beauté
-   Produits d''hygiène corporelle (gels douche, shampoings, dentifrices, déodorants).

-   **Attention** : Ne sont pas des médicaments et n''ont pas les mêmes preuves d''efficacité. Demandez conseil à votre médecin ou pharmacien avant de prendre des compléments.






-   Les prix des produits de parapharmacie sont **libres et non réglementés**. Ils peuvent varier considérablement d''une enseigne à l''autre (pharmacie de quartier, grande parapharmacie en centre commercial, parapharmacie en ligne, supermarché).





-   N''hésitez pas à demander conseil au personnel de la parapharmacie pour le choix des produits adaptés à votre type de peau ou à vos besoins.



-   Votre **liste de courses** pour les produits d''hygiène et de beauté.


-   **Ne cherchez pas un remboursement pour les produits de parapharmacie** : Ils n''y sont pas éligibles.
-   **Soyez vigilant(e) aux allégations marketing** : Un produit "miracle" est souvent trop beau pour être vrai.


-   **Confondre un produit de parapharmacie avec un médicament** : Ils n''ont pas le même statut ni la même efficacité prouvée.
-   **Acheter des compléments alimentaires sans avis médical** si vous avez des problèmes de santé ou prenez d''autres médicaments.


-   🔗 [ANSM (Agence Nationale de Sécurité du Médicament) : Surveillance des produits de parapharmacie](https://ansm.sante.fr/vos-demarches/la-surveillance-des-produits-de-sante/les-produits-de-parapharmacie) - L''autorité de régulation.
-   🔗 [Ordre National des Pharmaciens : Qu''est-ce qu''une pharmacie ?](https://www.ordre.pharmacien.fr/exercice/les-missions-du-pharmacien) - Distinction entre pharmacie et parapharmacie.


La parapharmacie regroupe des produits de santé, d''hygiène et de beauté qui ne sont pas des médicaments. Leurs prix sont libres et ils ne sont jamais remboursés par la Sécurité Sociale ni la mutuelle. Comparez les prix entre les différentes enseignes (pharmacies, parapharmacies, supermarchés, sites en ligne) pour optimiser vos achats. N''hésitez pas à demander conseil au personnel, mais soyez vigilant(e) aux allégations marketing, surtout pour les compléments alimentaires. Comprendre la parapharmacie est essentiel pour gérer votre budget bien-être et vos achats au quotidien en France.
',
  3,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 42 ---

-- COURS 43 : Soutien psychologique
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '99ea5e87-0069-4831-9dc2-5616f1195449',
  'Soutien psychologique : Aides et ressources pour étudiants en France',
  'soutien-psychologique-aides-ressources-etudiants-france',
  'Ce cours est d''une importance capitale pour tous les étudiants internationaux en France. L''éloignement familial, le choc culturel, les difficultés académiques ou financières peuvent générer du stress, de l''anxiété ou de la déprime. Accéder à un soutien psychologique adapté est essentiel pour votre bien-être mental. Nous vous présenterons les Bureaux d''Aide Psychologique Universitaire (BAPU) gratuits, le dispositif "Santé Psy Étudiant" offrant des séances gratuites chez un psychologue, et les lignes d''écoute anonymes et confidentielles. Maîtriser ces ressources est absolument crucial pour prendre soin de votre santé mentale, briser les tabous, et trouver l''aide nécessaire pour traverser les moments difficiles de votre parcours en France.',
  'Soutien psy étudiant : BAPU gratuit, Santé Psy Étudiant (8 séances gratuites), lignes d''écoute anonymes. Prenez soin de votre santé mentale !',
  'sante',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  E'["Comprendre l''importance du soutien psychologique pour les étudiants internationaux", "Identifier les Bureaux d''Aide Psychologique Universitaire (BAPU) et leurs services gratuits", "Savoir comment bénéficier du dispositif Santé Psy Étudiant (8 séances gratuites)", "Maîtriser les ressources d''écoute anonymes et confidentielles"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  600,
  4500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 43
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'd41e0f93-cb7e-48b1-ba3d-d7f1fb9910c0',
  '99ea5e87-0069-4831-9dc2-5616f1195449',
  'Les BAPU (Bureaux d''Aide Psychologique)',
  '# Les BAPU (Bureaux d''Aide Psychologique Universitaire)

## Pourquoi c''est important ?

Les études supérieures sont une période exigeante, et les étudiants internationaux sont particulièrement exposés au stress lié à l''adaptation, à l''éloignement et aux nouvelles contraintes. Les Bureaux d''Aide Psychologique Universitaire (BAPU) sont des structures de santé spécifiques à l''enseignement supérieur en France, qui offrent un soutien psychologique gratuit et confidentiel. Ne pas connaître l''existence et le fonctionnement des BAPU, c''est risquer de rester isolé(e) avec ses difficultés ou de ne pas savoir vers qui se tourner en cas de besoin. Accéder à ces services est absolument crucial pour votre bien-être mental, votre réussite académique, et une bonne intégration dans votre nouvel environnement.




Les BAPU sont des centres d''aide psychologique spécialisés dans l''accompagnement des étudiants. Ils proposent des consultations avec des psychologues, des psychiatres ou des psychothérapeutes.



### 1. Qu''est-ce qu''un BAPU et sa mission ?


-   Les BAPU sont des établissements de santé conventionnés, rattachés aux universités et financés par l''Assurance Maladie et le Ministère de l''Enseignement Supérieur.
-   Ils sont composés d''équipes pluridisciplinaires : psychologues, psychiatres, assistantes sociales.

-   Offrir un soutien psychologique et une aide psychiatrique aux étudiants qui rencontrent des difficultés (stress, anxiété, déprime, troubles du sommeil, difficultés d''adaptation, etc.).




#### a) Consultations gratuites pour l''étudiant
-   **Gratuité** : Les consultations psychologiques ou psychiatriques dans un BAPU sont entièrement **gratuites** pour l''étudiant.
-   **Prise en charge Sécu** : La Sécurité Sociale prend en charge la totalité des frais (100%), sans avance de frais pour l''étudiant.
-   **Pas de médecin traitant** : Il n''est pas nécessaire d''avoir un médecin traitant déclaré pour consulter un BAPU.






-   **Contact téléphonique** : Il faut généralement appeler le BAPU directement pour prendre un premier rendez-vous (souvent un rendez-vous d''évaluation avec une assistante sociale ou un psychologue pour comprendre votre besoin).
-   **Demande d''affiliation Sécu** : Vous devrez avoir votre attestation d''affiliation à la Sécurité Sociale (avec votre NIR provisoire ou définitif).
-   **Délai d''attente** : Il peut y avoir un délai d''attente pour obtenir un rendez-vous, surtout en période de rentrée. Anticipez.


-   Votre **attestation d''affiliation à la Sécurité Sociale** (avec votre numéro).
-   Votre **carte d''étudiant**.


-   **N''hésitez pas à consulter un BAPU dès les premiers signes de stress ou de mal-être**. Il n''y a pas de honte à demander de l''aide.
-   **C''est gratuit et confidentiel**, donc il n''y a pas de barrière financière.
-   **Si vous avez des difficultés en français**, demandez s''ils proposent des consultations dans une autre langue ou si un interprète peut être présent (ce n''est pas systématique).


-   **Ignorer ses difficultés psychologiques** : Elles peuvent s''aggraver.
-   **Attendre que la situation devienne insupportable** pour demander de l''aide.
-   **Penser que c''est payant** : Les BAPU sont gratuits pour les étudiants.
-   **Manquer les rendez-vous** : C''est un service public précieux.


-   🔗 [Ministère de l''Enseignement Supérieur : Santé des étudiants](https://www.enseignementsup-recherche.gouv.fr/fr/sante-des-etudiants-46549) - Politique de santé étudiante.


Les BAPU (Bureaux d''Aide Psychologique Universitaire) offrent un soutien psychologique et psychiatrique gratuit et confidentiel aux étudiants en France. Si vous rencontrez des difficultés (stress, anxiété, déprime), n''hésitez pas à les contacter dès que possible. Trouvez le BAPU le plus proche sur `fn-bapu.fr`, prenez rendez-vous, et ayez votre attestation de Sécurité Sociale. Accéder à ces services est crucial pour votre bien-être mental et votre réussite durant votre parcours étudiant en France.
',
  1,
  55,
  NULL,
  '[]'::jsonb);
-- LEÇONS pour COURS 43 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'b2ebada8-bdea-46a4-9c6f-5a60e558eff2',
  '99ea5e87-0069-4831-9dc2-5616f1195449',
  'Santé Psy Étudiant : 8 séances gratuites',
  '# Santé Psy Étudiant : 8 séances gratuites

## Pourquoi c''est important ?

Le dispositif "Santé Psy Étudiant" est une aide gouvernementale majeure mise en place pour permettre à tous les étudiants de bénéficier de consultations psychologiques gratuites, sans avance de frais. Dans un contexte où la santé mentale est devenue une préoccupation majeure pour les jeunes, cette offre de **8 séances gratuites (renouvelables)** chez un psychologue libéral est absolument cruciale pour les étudiants internationaux. Ne pas connaître l''existence et le fonctionnement de ce dispositif, c''est risquer de rester sans soutien ou de devoir payer des consultations chères. Accéder à Santé Psy Étudiant est essentiel pour prendre soin de votre bien-être mental, obtenir une aide professionnelle rapide, et prévenir l''aggravation de vos difficultés.


-   Définir ce qu''est le dispositif "Santé Psy Étudiant" et son objectif.
-   Identifier le rôle du médecin généraliste dans l''orientation.


Lancé en réponse à l''augmentation des troubles psychologiques chez les étudiants, Santé Psy Étudiant simplifie l''accès à des psychologues libéraux conventionnés.



### 1. Qu''est-ce que le dispositif "Santé Psy Étudiant" ?


-   Offrir un accès gratuit à des séances de soutien psychologique pour tous les étudiants de l''enseignement supérieur en France.
-   Lutter contre l''isolement, le stress, l''anxiété et la déprime chez les jeunes.

-   **Tous les étudiants inscrits dans un établissement d''enseignement supérieur français**, qu''ils soient français ou étrangers.
-   Vous devez être affilié(e) à la Sécurité Sociale (avec un numéro définitif, mais l''attestation provisoire est souvent acceptée pour démarrer).


🔗 [Ameli.fr : Soutien psychologique pour les étudiants](https://www.ameli.fr/assure/sante/troubles-psychologiques/soutien-psychologique-etudiants) - Informations de l''Assurance Maladie.




-   Si le médecin généraliste estime que vous avez besoin d''un soutien psychologique, il vous délivre une **ordonnance ou une lettre d''orientation** pour des séances avec un psychologue.

-   Consultez la liste des psychologues partenaires du dispositif "Santé Psy Étudiant" sur le site `etudiant.gouv.fr` ou sur des plateformes comme Doctolib.
-   Choisissez un psychologue avec qui vous vous sentez à l''aise et qui peut répondre à vos besoins (certains peuvent proposer des consultations en anglais).

-   Lors de la première séance, présentez votre ordonnance/lettre d''orientation et votre carte étudiante.
-   Les séances sont entièrement prises en charge par l''Assurance Maladie, sans avance de frais pour vous.



#### a) Gratuité et absence d''avance de frais
-   C''est un avantage majeur pour un budget étudiant, surtout pour des consultations psychologiques qui peuvent être coûteuses.

-   Le dispositif vise à faciliter l''accès aux soins, avec une liste de psychologues disponibles.


#### d) Soutien à l''intégration
-   Pour gérer le stress du changement de culture, de l''éloignement, des études.


-   Votre **attestation d''affiliation à la Sécurité Sociale** (avec NIR).
-   L''**ordonnance/lettre d''orientation** de votre médecin généraliste.


-   **N''hésitez pas à en parler à votre médecin traitant** si vous avez des difficultés. C''est la première étape.


-   **Ne pas consulter un médecin généraliste d''abord** : Sans ordonnance/orientation, les séances ne seront pas prises en charge.
-   **Dépasser les 8 séances sans renouvellement d''ordonnance** : Les séances suivantes seront à votre charge.
-   **Penser que c''est compliqué** : Le processus est simple.


-   🔗 [Ameli.fr : Soutien psychologique pour les étudiants](https://www.ameli.fr/assure/sante/troubles-psychologiques/soutien-psychologique-etudiants) - Informations de l''Assurance Maladie.


Le dispositif "Santé Psy Étudiant" vous offre 8 séances gratuites (renouvelables) chez un psychologue partenaire. Pour en bénéficier, vous devez d''abord consulter un médecin généraliste qui vous délivrera une ordonnance/lettre d''orientation. Ce soutien est absolument crucial pour les étudiants internationaux confrontés au stress et à l''anxiété. N''hésitez pas à utiliser cette aide précieuse et accessible pour prendre soin de votre santé mentale et garantir une expérience étudiante épanouissante en France.
',
  2,
  55,
  NULL,
  '[]'::jsonb);
-- LEÇONS pour COURS 43 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '87e91be7-9193-426a-98b9-41ae9440fe23',
  '99ea5e87-0069-4831-9dc2-5616f1195449',
  'Lignes d''écoute anonymes',
  '# Lignes d''écoute anonymes

## Pourquoi c''est important ?

Lorsque l''on se sent seul(e), dépassé(e), ou en proie à des difficultés émotionnelles, il est parfois difficile de parler à son entourage ou à un professionnel en face à face. Les lignes d''écoute anonymes et confidentielles sont des ressources absolument cruciales pour les étudiants internationaux en France. Elles offrent un espace sûr pour exprimer ses émotions, ses doutes, ses angoisses, sans jugement et sans révéler son identité. Ne pas connaître ces services, c''est risquer de rester isolé(e) avec ses problèmes et de laisser la situation s''aggraver. Savoir qu''une oreille attentive est disponible, gratuitement et à tout moment, est essentiel pour votre bien-être mental et pour trouver un premier niveau de soutien.


-   Définir ce que sont les lignes d''écoute anonymes et leur rôle.
-   Comprendre le principe de l''anonymat et de la confidentialité.
-   Identifier les principales lignes d''écoute disponibles en France pour les jeunes et le grand public.
-   Maîtriser les conseils pour utiliser ces services de manière efficace et obtenir de l''aide.


Ces lignes sont tenues par des bénévoles formés à l''écoute et au soutien psychologique. Elles sont un premier pas vers l''aide.

🔗 [etudiant.gouv.fr : Services de santé pour étudiants](https://www.etudiant.gouv.fr/fr/vos-services-de-sante-1577) - Mentionne les lignes d''écoute.


### 1. Qu''est-ce qu''une ligne d''écoute anonyme ?



-   **Anonymat** : Vous n''avez pas à décliner votre identité. Le numéro de téléphone n''est généralement pas identifié.
-   **Confidentialité** : Ce que vous dites reste entre vous et l''écoutant(e). C''est un espace de parole libre et sans jugement.


### 2. Les principales lignes d''écoute disponibles en France


-   **SOS Amitié** : Numéro national (09 72 39 40 50) ou par chat. Pour toutes les personnes en détresse, se sentant seules ou suicidaires. Service d''écoute généraliste.

-   **Drogues Info Service** : Numéro national (0 800 23 13 13) ou par chat. Pour les questions liées aux drogues, à l''alcool, au tabac.
-   **Numéro d''écoute contre les violences faites aux femmes** (3919).

#### c) Numéros d''urgence vitale
-   **Attention** : Les lignes d''écoute sont pour le soutien. En cas d''urgence vitale (danger immédiat pour vous ou autrui, passage à l''acte suicidaire imminent), il faut appeler les secours : **15 (SAMU)** ou **112 (numéro européen)**.

🔗 [Liste des numéros d''aide et d''écoute](https://www.info-droits-sante.fr/liste-des-numeros-d-aide-et-d-ecoute/) - Liste de référence.
🔗 [Ministère de la Santé et de la Prévention : Annuaire des numéros d''écoute](https://sante.gouv.fr/sante-et-environnement/les-effets-de-l-environnement-sur-la-sante/sante-mentale/article/annuaire-des-numeros-d-appel-d-urgence-et-d-ecoute) - Liste officielle.



-   Si vous avez des difficultés d''adaptation, du mal à gérer le stress des études ou de l''éloignement.

-   N''ayez pas peur de vous exprimer, même si le français n''est pas parfait. L''écoutant(e) est là pour vous entendre.

#### c) L''écoute active
-   L''écoutant(e) ne vous donnera pas de solutions toutes faites, mais vous aidera à explorer vos émotions et vos ressources.
-   Il peut vous orienter vers d''autres services si nécessaire (BAPU, psychologue, centre de santé).


-   Les **numéros d''urgence et d''écoute** à enregistrer.


-   **N''hésitez pas à appeler** : Ces services sont gratuits et faits pour vous.
-   **Si le français est une barrière**, demandez si le service a des écoutants bilingues (ce n''est pas garanti, mais certains services peuvent avoir des options).
-   **Ces lignes sont un complément**, pas un remplacement d''un suivi psychologique régulier si votre situation le nécessite.


-   **Ignorer les signes de mal-être** et ne pas chercher d''aide.
-   **Avoir peur d''être jugé(e)** : L''anonymat et la confidentialité sont garantis.
-   **Ne pas tenir compte des orientations** que l''écoutant(e) peut vous donner.




Les lignes d''écoute anonymes et confidentielles (SOS Amitié, Fil Santé Jeunes, Suicide Écoute, 3114) sont des ressources précieuses pour les étudiants internationaux en France qui traversent des moments difficiles. Elles offrent un espace sûr pour parler de vos émotions, sans jugement et gratuitement. N''hésitez jamais à les appeler si vous vous sentez seul(e), anxieux(se) ou déprimé(e). Elles constituent un premier pas vers l''aide et peuvent vous orienter vers un soutien plus régulier si nécessaire. Prenez soin de votre santé mentale, elle est aussi importante que votre santé physique.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;
-- --- Cours 43 ---

-- COURS 44 : Santé sexuelle
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '95e008d2-6fb3-40ba-9292-f0c5c2a5c649',
  'Santé sexuelle en France : Contraception, Dépistage et Prévention',
  'sante-sexuelle-france-contraception-depistage-prevention',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre les enjeux et l''accès aux services de santé sexuelle. En France, la prévention et l''accès aux méthodes contraceptives et au dépistage sont des priorités. Nous vous informerons sur la gratuité des préservatifs en pharmacie pour les moins de 26 ans, les différentes options de contraception d''urgence et leur accessibilité, ainsi que le rôle des CeGIDD (Centres Gratuits d''Information, de Dépistage et de Diagnostic) pour le dépistage des IST. Maîtriser ces informations est absolument crucial pour vivre votre sexualité de manière éclairée, protégée et responsable, et pour garantir votre bien-être et votre santé. ',
  'Santé sexuelle France : Préservatifs gratuits (-26 ans), contraception d''urgence, dépistage IST CeGIDD. Vivez votre sexualité protégée !',
  'sante',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  E'["Comprendre l''accès gratuit aux préservatifs pour les jeunes de moins de 26 ans", "Identifier les différentes méthodes de contraception d''urgence et leur accessibilité", "Savoir où se faire dépister gratuitement des IST (CeGIDD)", "Maîtriser les conseils pour une sexualité protégée et responsable en France"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  450,
  3500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 44
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '3bf2154c-a4e1-421c-af7e-a099160bf978',
  '95e008d2-6fb3-40ba-9292-f0c5c2a5c649',
  'Préservatifs gratuits en pharmacie (-26 ans)',
  '# Préservatifs gratuits en pharmacie (-26 ans)

## Pourquoi c''est important ?

La protection contre les infections sexuellement transmissibles (IST) et les grossesses non désirées est une priorité de santé publique en France. Pour faciliter l''accès à cette protection, le gouvernement français a rendu les **préservatifs gratuits en pharmacie pour tous les jeunes de moins de 26 ans**. Pour les étudiants internationaux, cette mesure est absolument cruciale : elle permet d''accéder facilement et sans contrainte financière à un moyen de contraception et de prévention essentiel. Ne pas connaître ce dispositif, c''est risquer de se priver d''une protection efficace et de s''exposer à des risques sanitaires. Maîtriser cette information est fondamental pour vivre sa sexualité de manière éclairée, protégée et responsable.





🔗 [Ameli.fr : Préservatifs gratuits pour les moins de 26 ans](https://www.ameli.fr/assure/actualites/preservatifs-gratuits-pour-les-moins-de-26-ans) - La page officielle de l''Assurance Maladie.




-   Cette mesure s''applique aux citoyens français, aux résidents étrangers (y compris les étudiants internationaux), et même aux personnes non assurées sociales.
-   **Preuve d''âge** : Vous devrez présenter une pièce d''identité (passeport, carte d''identité) pour prouver votre âge.

-   **Exclusivement en pharmacie** : Les préservatifs masculins de la marque "Eden" et "Sortez couverts !" (pris en charge par l''Assurance Maladie) sont disponibles gratuitement dans toutes les pharmacies de France.





-   **Rôle** : Ils protègent à la fois contre les IST (Infections Sexuellement Transmissibles) et contre les grossesses non désirées. C''est le seul moyen de double protection.


-   L''utilisation du préservatif est la seule méthode qui protège contre les IST et la grossesse. La pilule contraceptive, par exemple, ne protège pas contre les IST.



-   Toujours vérifier la date de péremption sur l''emballage.

-   Ouvrir l''emballage délicatement, sans utiliser les dents ou des objets coupants qui pourraient déchirer le préservatif.

-   Mettre en place le préservatif sur le pénis en érection avant tout contact sexuel, en s''assurant qu''il est bien déroulé jusqu''à la base.
-   Retirer le préservatif juste après l''éjaculation, avant le retrait du pénis, en le tenant à la base.

-   Conserver les préservatifs dans un endroit frais et sec, à l''abri de la lumière directe du soleil (pas dans le portefeuille trop longtemps).



-   Utilisez un préservatif à chaque rapport sexuel, avec un nouveau partenaire ou si vous n''êtes pas sûr(e) du statut IST de votre partenaire.





-   Une **pièce d''identité** (passeport, carte d''identité, titre de séjour) pour prouver votre âge.


-   **N''ayez pas honte de demander des préservatifs gratuits à la pharmacie**. C''est un droit et une démarche responsable.
-   **Expliquez si le pharmacien ne comprend pas** : "Je suis étudiant(e) et j''ai moins de 26 ans, je souhaite bénéficier des préservatifs gratuits."




-   🔗 [Sexualités Info Santé (numéro 0800 08 11 11)](https://www.sexualites-info-sante.fr/) - Ligne d''écoute et d''information.
-   🔗 [VIH Info Dépistage (0 800 840 800)](https://www.sida-info-service.org/vih-info-depistage-0-800-840-800/) - Numéro d''information sur le dépistage.


Les préservatifs masculins sont gratuits en pharmacie pour tous les jeunes de moins de 26 ans en France, sur simple présentation d''une pièce d''identité. C''est une mesure cruciale pour la prévention des IST et des grossesses non désirées. Maîtrisez l''utilisation correcte du préservatif et ayez toujours cette protection sur vous. C''est la seule méthode de double protection. N''hésitez jamais à profiter de cette gratuité pour vivre votre sexualité de manière éclairée, protégée et responsable en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb);
-- LEÇONS pour COURS 44 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'ead71772-4c36-4b61-beab-4470d33434e2',
  '95e008d2-6fb3-40ba-9292-f0c5c2a5c649',
  'Contraception d''urgence',
  '# Contraception d''urgence

## Pourquoi c''est important ?

La contraception d''urgence, souvent appelée "pilule du lendemain" ou "pilule du surlendemain", est un moyen essentiel de prévention des grossesses non désirées après un rapport sexuel non ou mal protégé (ou en cas d''échec de la méthode contraceptive habituelle). En France, l''accès à la contraception d''urgence est facilité, notamment pour les mineurs et les étudiants. Connaître son existence, ses modalités d''accès (en pharmacie sans ordonnance, gratuitement pour les jeunes), et son délai d''efficacité est absolument crucial pour les étudiants internationaux. Ne pas avoir cette information, c''est risquer une grossesse non désirée avec toutes les conséquences que cela implique. Maîtriser ce sujet est fondamental pour prendre des décisions rapides et éclairées en cas d''imprévu.


-   Définir ce qu''est la contraception d''urgence et ses différents types.
-   Comprendre les modalités d''accès à la contraception d''urgence en pharmacie.
-   Identifier les délais d''efficacité et les conditions de gratuité pour les jeunes.


La contraception d''urgence n''est pas une méthode contraceptive régulière. C''est une solution de dernier recours, à utiliser le plus tôt possible après un rapport sexuel à risque.

🔗 [Ameli.fr : La contraception d''urgence](https://www.ameli.fr/assure/sante/sexualite-contraception/contraception-d-urgence) - La page officielle sur la contraception d''urgence.


### 1. Qu''est-ce que la contraception d''urgence ?


-   La contraception d''urgence est une méthode qui vise à empêcher une grossesse après un rapport sexuel non protégé ou si la contraception habituelle a échoué (ex: oubli de pilule, préservatif qui a craqué).

-   **Pilule du lendemain (lévonorgestrel)** : Efficace jusqu''à 3 jours (72 heures) après le rapport. Plus elle est prise tôt, plus elle est efficace.
-   **Pilule du surlendemain (ulipristal acétate)** : Efficace jusqu''à 5 jours (120 heures) après le rapport. Plus elle est prise tôt, plus elle est efficace.
-   **Stérilet au cuivre (DIU)** : Peut être posé en urgence par un médecin jusqu''à 5 jours après le rapport. C''est la méthode la plus efficace.

🔗 [Service-Public.fr : Contraception d''urgence](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations générales.

### 2. Modalités d''accès en pharmacie : Gratuité pour les jeunes


-   Les pilules contraceptives d''urgence sont disponibles **sans ordonnance** dans toutes les pharmacies de France.

-   **Mineures** : La contraception d''urgence est gratuite et anonyme pour les mineures.
-   **Majeures de moins de 26 ans** : Depuis janvier 2022, la contraception d''urgence est **gratuite** pour toutes les femmes de moins de 26 ans. Vous devrez présenter une pièce d''identité (passeport, carte d''identité) pour prouver votre âge.
-   **Majeures de 26 ans et plus** : Le coût est d''environ 3 à 20€ et n''est pas remboursé par la Sécurité Sociale (sauf exceptions).

-   Le pharmacien vous posera quelques questions pour s''assurer que la contraception d''urgence est adaptée à votre situation (délai depuis le rapport, prise d''autres médicaments, contraception habituelle).
-   Il vous donnera des conseils sur son utilisation et l''importance de consulter un médecin par la suite.

### 3. Délais d''efficacité et suivi médical


-   L''efficacité de la contraception d''urgence diminue avec le temps. Prenez-la le plus tôt possible après le rapport sexuel à risque.

-   La contraception d''urgence protège uniquement contre la grossesse. **Elle ne protège PAS contre les Infections Sexuellement Transmissibles (IST)**.
-   Si vous avez eu un rapport à risque d''IST, faites-vous dépister rapidement (voir leçon suivante sur les CeGIDD).

-   **Très recommandé** : Il est fortement conseillé de consulter un médecin généraliste ou un gynécologue après avoir pris une contraception d''urgence.
    -   Pour discuter d''une contraception régulière et plus adaptée.
    -   Pour vérifier l''absence de grossesse.


La contraception d''urgence est un filet de sécurité, pas une méthode régulière.





-   Une **pièce d''identité** (passeport, titre de séjour) pour prouver votre âge (si moins de 26 ans).


-   **N''ayez pas peur de demander la contraception d''urgence** à la pharmacie. C''est un droit et un geste de responsabilité.
-   **Ne tardez pas** : Chaque heure compte pour l''efficacité.


-   **Utiliser la contraception d''urgence comme méthode régulière** : Ce n''est pas efficace et cela peut avoir des effets secondaires.
-   **Ne pas tenir compte des délais d''efficacité**.
-   **Ne pas consulter un médecin après la prise** : Vous pourriez avoir besoin d''un suivi ou d''une contraception régulière.
-   **Avoir honte de demander au pharmacien** : C''est un professionnel de santé.


-   🔗 [Ameli.fr : La contraception d''urgence](https://www.ameli.fr/assure/sante/sexualite-contraception/contraception-d-urgence) - La référence officielle.
-   🔗 [Service-Public.fr : Contraception d''urgence](https://www.service-public.fr/particuliers/vosdroits/F3025) - Guide officiel.
-   🔗 [Sexualités Info Santé (numéro 0800 08 11 11)](https://www.sexualites-info-sante.fr/) - Ligne d''écoute et d''information.


La contraception d''urgence est un moyen essentiel de prévention des grossesses non désirées, accessible sans ordonnance en pharmacie, et gratuite pour les moins de 26 ans en France. Prenez-la le plus tôt possible après le rapport à risque pour une efficacité maximale. Elle ne protège PAS des IST. Il est fortement recommandé de consulter un médecin ou un gynécologue par la suite pour un dépistage IST et pour discuter d''une contraception régulière. Maîtrisez ces informations pour vivre votre sexualité de manière éclairée et protégée en France.
',
  2,
  55,
  NULL,
  '[]'::jsonb);
-- LEÇONS pour COURS 44 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '0fbf5ea5-185a-469e-b972-212cc96ff44e',
  '95e008d2-6fb3-40ba-9292-f0c5c2a5c649',
  'Les CeGIDD (Dépistage gratuit)',
  '# Les CeGIDD (Dépistage gratuit)

## Pourquoi c''est important ?

Le dépistage régulier des Infections Sexuellement Transmissibles (IST) est une démarche essentielle pour protéger votre santé sexuelle et celle de vos partenaires. En France, il existe des structures dédiées, les **CeGIDD (Centres Gratuits d''Information, de Dépistage et de Diagnostic)**, qui offrent des services de dépistage et de conseil entièrement gratuits et anonymes. Ne pas connaître les CeGIDD, c''est risquer de ne pas vous faire dépister, de ne pas traiter une IST à temps, ou de payer pour des examens qui pourraient être gratuits. Pour les étudiants internationaux, l''accès à un dépistage facile, gratuit et confidentiel est absolument crucial pour vivre sa sexualité en toute sérénité et responsabilité.


-   Comprendre les services gratuits et anonymes qu''ils proposent (dépistage IST, VIH, hépatites, vaccinations).





### 1. Qu''est-ce qu''un CeGIDD ?

Un centre d''expertise et de gratuité.

-   Les CeGIDD sont des **Centres Gratuits d''Information, de Dépistage et de Diagnostic** des IST (Infections Sexuellement Transmissibles) et du VIH (Virus de l''Immunodéficience Humaine), ainsi que des hépatites virales.
-   Ils ont remplacé les anciens Centres de Dépistage Anonyme et Gratuit (CDAG) et Centres d''Information et de Dépistage (CIDDIST).

-   Accès à la contraception d''urgence ou régulière.

-   **Anonymat** : Les consultations et les dépistages sont anonymes. Vous n''avez pas à décliner votre identité si vous ne le souhaitez pas.
-   **Gratuité** : Tous les services (consultations, dépistages, traitements des IST) sont entièrement gratuits, même si vous n''êtes pas affilié(e) à la Sécurité Sociale ou si vous êtes en attente de droits.





-   Ils peuvent vous orienter vers d''autres services si besoin.


-   Vous pouvez vous faire vacciner contre l''Hépatite B ou le HPV (papillomavirus) gratuitement.




-   Recherchez "CeGIDD + [nom de votre ville]" sur internet.




-   Votre **pièce d''identité** (si vous souhaitez être identifié(e) pour votre dossier médical, mais ce n''est pas obligatoire pour la gratuité/l''anonymat).
-   Votre **Carte Vitale** (non obligatoire, mais utile si vous n''optez pas pour l''anonymat).


-   **N''ayez pas honte** : Le dépistage est un acte de santé responsable.
-   **Communiquez** : N''hésitez pas à poser toutes vos questions aux professionnels.
-   **Profitez de la gratuité et de l''anonymat**.


-   **Se fier uniquement à l''absence de symptômes** : Certaines IST peuvent être asymptomatiques.




Les CeGIDD (Centres Gratuits d''Information, de Dépistage et de Diagnostic) sont des structures essentielles pour la santé sexuelle en France. Ils offrent un dépistage complet des IST (VIH, chlamydia, etc.), des hépatites, et des vaccinations, le tout gratuitement et de manière anonyme. Trouvez le CeGIDD le plus proche de chez vous et faites-vous dépister régulièrement, surtout après un rapport à risque. Cet accès facile et confidentiel est absolument crucial pour vivre votre sexualité de manière responsable et protéger votre santé en France.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;
-- --- Cours 44 ---

-- COURS 45 : Lunettes et Dents (100% Santé)
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'c8c99c55-a98f-455c-9467-a3e376bd544c',
  'Lunettes et Dents (100% Santé) : Zéro reste à charge en France',
  'lunettes-dents-100-sante-zero-reste-charge-france',
  'Ce cours est d''une importance capitale pour tous les étudiants internationaux en France qui ont besoin de lunettes, de lentilles ou de soins dentaires. Le dispositif "100% Santé" (anciennement "Reste à charge zéro") est une réforme majeure qui garantit l''accès à des équipements d''optique, des prothèses dentaires et des aides auditives entièrement remboursés, sans aucun reste à charge pour l''assuré. Ne pas connaître ce dispositif, c''est risquer de payer des centaines, voire des milliers d''euros, pour des soins et équipements qui pourraient être gratuits. Nous vous expliquerons le contenu du panier "100% Santé", comment en faire la demande auprès de votre opticien ou dentiste, et les délais de carence des mutuelles. Maîtriser ces informations est absolument crucial pour protéger votre budget et garantir votre accès à des soins essentiels.',
  '100% Santé : lunettes et dents zéro reste à charge ! Panier "100% Santé", demande, délais de carence mutuelle. Protégez votre budget et votre santé !',
  'sante',
  'intermediaire',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  E'["Comprendre le principe et les avantages du dispositif \\"100% Santé\\"", "Identifier le contenu du panier \\"100% Santé\\" pour l''optique et le dentaire", "Savoir comment demander ces équipements à votre opticien ou dentiste", "Maîtriser les délais de carence des mutuelles et l''accès aux équipements"]'::jsonb,
  '["Avoir un numéro de Sécurité Sociale (NIR) et une mutuelle complémentaire (ou la CSS)"]'::jsonb,
  TRUE,
  4.8,
  500,
  3800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 45
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '1431bbe0-e0cc-4978-8d7d-0b224e2a606e',
  'c8c99c55-a98f-455c-9467-a3e376bd544c',
  'Le panier "100% Santé" : Zéro reste à charge',
  '# Le panier "100% Santé" : Zéro reste à charge

## Pourquoi c''est important ?

Les frais d''optique (lunettes, lentilles) et dentaires (prothèses, couronnes) sont souvent très élevés en France et sont généralement très mal remboursés par la Sécurité Sociale seule. Le dispositif **"100% Santé"** (anciennement appelé "Reste à charge zéro") est une réforme majeure qui garantit l''accès à un panier de soins et d''équipements de qualité entièrement remboursés, sans aucun reste à charge pour l''assuré. Pour les étudiants internationaux, cette aide est absolument cruciale. Ne pas connaître et ne pas utiliser le "100% Santé", c''est risquer de dépenser des centaines, voire des milliers d''euros, pour des soins qui pourraient être gratuits. Maîtriser ce dispositif est fondamental pour protéger votre budget et garantir votre accès à des soins essentiels.


-   Définir ce qu''est le dispositif "100% Santé" et son objectif.
-   Comprendre le principe du "zéro reste à charge".
-   Identifier le contenu du panier "100% Santé" pour l''optique, le dentaire et l''audition.
-   Maîtriser les conditions pour bénéficier du "100% Santé".


Le "100% Santé" est une promesse du gouvernement français d''améliorer l''accès aux soins coûteux qui étaient souvent mal remboursés, comme les lunettes, les prothèses dentaires et les aides auditives.



### 1. Qu''est-ce que le dispositif "100% Santé" ?


-   Le "100% Santé" garantit un remboursement intégral (par la Sécurité Sociale et votre mutuelle complémentaire) pour une sélection d''équipements d''optique, de prothèses dentaires et d''aides auditives.
-   **Vous n''avez rien à payer de votre poche** pour ces équipements s''ils font partie du "panier 100% Santé".

-   Faciliter l''accès aux soins essentiels qui étaient auparavant un frein financier pour de nombreux ménages.

-   Toute personne qui bénéficie d''une **mutuelle complémentaire santé responsable** (c''est-à-dire la plupart des mutuelles en France) ou de la **Complémentaire Santé Solidaire (CSS)**.


### 2. Le contenu du panier "100% Santé"


-   **Lentilles** : Certaines lentilles peuvent être prises en charge, mais le "100% Santé" est principalement pour les lunettes.


-   Des aides auditives (contours d''oreille, intra-auriculaires, mini-contours) avec certaines fonctionnalités de base (plusieurs canaux de réglage, réducteur de bruit, connectivité sans fil) sont intégralement remboursées.

🔗 [Ameli.fr : 100% Santé en optique](https://www.ameli.fr/assure/remboursements/reste-charge-zero-100-sante/optique) - Détails sur l''optique.



-   Vous avez besoin d''une ordonnance médicale valide pour les lunettes (ophtalmologiste) ou pour les prothèses dentaires (dentiste).

#### b) Demander un devis "100% Santé"
-   Lorsque vous allez chez l''opticien ou le dentiste, expliquez que vous souhaitez bénéficier du "100% Santé".
-   Le professionnel de santé a l''obligation de vous proposer un devis qui inclut au moins une offre "100% Santé" (ainsi que d''autres offres "à prix libre" si vous le souhaitez).
-   **Vérifiez le devis** : Assurez-vous que la ligne "Reste à charge = 0€" apparaît bien pour l''offre "100% Santé".




#### a) Qu''est-ce qu''un délai de carence ?
-   Certaines mutuelles imposent un "délai de carence" (ou délai d''attente) avant de prendre en charge certains remboursements, notamment pour l''optique et le dentaire.
-   **Exemple** : Une mutuelle peut avoir un délai de carence de 3 mois pour l''optique et 6 mois pour le dentaire. Si vous souscrivez et que vous faites des lunettes au bout d''un mois, la mutuelle ne remboursera pas.

#### b) Impact sur le "100% Santé"
-   Si vous souscrivez une nouvelle mutuelle, assurez-vous qu''elle ne comporte pas de délai de carence, ou que le délai est passé, avant de faire des dépenses coûteuses.




-   **Demandez toujours un devis "100% Santé"** : C''est votre droit.
-   **N''hésitez pas à demander des explications** à l''opticien ou au dentiste sur le devis.
-   **Utilisez l''outil "Ameli santé"** sur votre espace `ameli.fr` pour trouver les professionnels de santé qui respectent le 100% Santé.


-   **Ne pas demander le "100% Santé"** : Vous risquez de payer pour des équipements qui pourraient être gratuits.
-   **Ne pas avoir de mutuelle complémentaire ou de CSS** : Sans cela, le 100% Santé n''est pas accessible.
-   **Accepter un devis qui n''affiche pas "Reste à charge 0€" pour le panier 100% Santé** si vous souhaitez cette option.


-   🔗 [UFC-Que Choisir : 100% Santé : mode d''emploi](https://www.quechoisir.org/fiche-pratique-sante-100-sante-mode-d-emploi-n100508/) - Guide très pratique.


Le dispositif "100% Santé" vous garantit un remboursement intégral (zéro reste à charge) pour une sélection d''équipements d''optique (lunettes), de prothèses dentaires et d''aides auditives de qualité. Pour en bénéficier, vous devez avoir une mutuelle complémentaire responsable (ou la CSS) et demander un devis "100% Santé" à votre opticien ou dentiste. Anticipez vos besoins, vérifiez les délais de carence de votre mutuelle, et n''hésitez jamais à demander ce panier de soins. C''est une aide précieuse et gratuite qui protège votre budget et garantit votre accès à des soins essentiels en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- PARTIE 4 : Banque & Finances

-- --- Cours 45 ---

-- COURS 46 : Banques en ligne vs Classiques
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'a571fb06-5626-4993-b256-81e1a3622ee4',
  'Banques en ligne vs Classiques : Choisir votre banque en France',
  'banques-en-ligne-vs-classiques-choisir-banque-france',
  'Ce cours est essentiel pour tous les étudiants internationaux qui s''apprêtent à ouvrir un compte bancaire en France. Le choix entre une banque traditionnelle (avec agence physique) et une banque en ligne (ou néo-banque) est une décision importante qui impacte votre gestion financière et votre accès aux services. Nous vous présenterons les avantages et inconvénients des banques avec agence (BNP, LCL), des banques en ligne (Boursorama Banque, Fortuneo) et des néo-banques (Revolut, N26). Vous apprendrez à choisir selon vos besoins spécifiques (dépôt d''espèces, conseiller dédié, frais internationaux). Maîtriser ce comparatif est absolument crucial pour ouvrir le compte bancaire le plus adapté à votre profil et optimiser la gestion de votre argent en France.',
  'Banques France : Classiques (agences) vs en ligne (Revolut, Bourso). Avantages/inconvénients, choix selon vos besoins (espèces, frais). Votre argent bien géré !',
  'budget_finances',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  E'["Comprendre les différences entre banques classiques et en ligne/néo-banques", "Identifier les avantages des banques avec agence (conseiller, dépôts espèces)", "Découvrir les atouts des banques en ligne (frais réduits, rapidité)", "Maîtriser les critères pour choisir la banque la plus adaptée à vos besoins d''étudiant"]'::jsonb,
  '["Avoir un passeport et un titre de séjour valide en France"]'::jsonb,
  TRUE,
  4.8,
  700,
  5500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 46
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '7b008678-2bf0-4003-9afd-0c48c4f253e2',
  'a571fb06-5626-4993-b256-81e1a3622ee4',
  'Banque avec agence (BNP, LCL...) : Avantages',
  '# Banque avec agence (BNP, LCL...) : Avantages

## Pourquoi c''est important ?

Ouvrir un compte bancaire dans une banque traditionnelle "avec agence physique" (comme BNP Paribas, LCL, Société Générale, Crédit Agricole, La Banque Postale) est souvent le premier réflexe pour les étudiants internationaux arrivant en France. Bien que les banques en ligne gagnent du terrain, les banques classiques offrent des avantages significatifs, notamment en termes d''accompagnement et de services. Comprendre ces avantages est absolument crucial pour faire un choix éclairé et ne pas sous-estimer l''importance d''un contact humain, surtout lorsque l''on est un nouvel arrivant dans un pays étranger. Un bon conseil peut faire la différence dans votre gestion financière.


-   Comprendre les avantages d''avoir un conseiller bancaire dédié.
-   Savoir comment effectuer des dépôts d''espèces ou de chèques.


Les banques traditionnelles sont présentes sur tout le territoire français, avec un réseau d''agences physiques. Elles offrent une gamme complète de services bancaires.




Un large choix d''acteurs.

-   **BNP Paribas, LCL (Le Crédit Lyonnais), Société Générale, Crédit Agricole, Banque Populaire, Caisse d''Épargne, La Banque Postale**.
-   Ces banques ont des milliers d''agences et de distributeurs automatiques sur tout le territoire.

-   La plupart de ces banques proposent des offres "forfait étudiant" ou "pack jeune" avec des tarifs réduits (voire gratuits la première année) pour la carte bancaire et les services de base.



-   **Personnalisation** : Le conseiller connaît votre situation et peut vous proposer des solutions adaptées. C''est un atout majeur pour les étudiants internationaux qui peuvent avoir besoin d''aide pour comprendre le système bancaire français.
-   **Langues** : Certains conseillers, surtout dans les villes universitaires, peuvent parler anglais ou d''autres langues.

#### b) Dépôts d''espèces et de chèques facilités
-   **Dépôt d''espèces** : Si vous recevez de l''argent liquide (cadeau, vente), vous pouvez le déposer directement au guichet ou via des automates en agence.
-   **Dépôt de chèques** : Vous pouvez déposer des chèques dans une boîte aux lettres de l''agence ou au guichet.
-   **Importance pour les étudiants** : Si vos parents vous envoient de l''argent en espèces ou si vous recevez des chèques, c''est très pratique.

-   **Retraits / Dépôts** : Accès facile aux distributeurs pour retirer ou déposer de l''argent.

-   Accès à des produits d''épargne, de crédit, d''assurance (habitation, santé, auto), souvent avec des offres spécifiques pour les jeunes.
-   Réception de courriers officiels (relevés bancaires, RIB) à l''agence ou chez vous.



-   Les banques traditionnelles peuvent avoir des frais bancaires (cotisation carte, frais de tenue de compte, frais d''opérations) plus élevés que les banques en ligne.
-   **Attention aux frais internationaux** : Les virements ou paiements à l''étranger peuvent être coûteux.

-   L''ouverture de compte peut être plus longue et nécessiter un rendez-vous en agence.
-   Les démarches peuvent être plus "papier" que les banques en ligne.

-   Les agences ont des horaires d''ouverture fixes, généralement du lundi au vendredi, ce qui peut être contraignant.


-   Un **justificatif de domicile** en France (facture d''énergie, attestation d''hébergement).
-   Votre **certificat de scolarité** ou lettre d''admission.


-   **N''hésitez pas à poser toutes vos questions à votre conseiller** : Il est là pour ça.


-   **Oublier ses identifiants bancaires** (codes d''accès en ligne).
-   **Ne pas informer votre banque** de votre statut d''étudiant pour bénéficier des avantages.


-   🔗 [Autorité de Contrôle Prudentiel et de Résolution (ACPR)](https://acpr.banque-france.fr/) - L''organisme qui régule les banques.


Les banques traditionnelles avec agence (BNP, LCL, Société Générale) offrent des avantages significatifs pour les étudiants internationaux en France, notamment un conseiller dédié (contact humain), la facilité de dépôt d''espèces et de chèques, et la proximité d''agences. Elles proposent souvent des offres spécifiques pour étudiants. Bien que les frais puissent être plus élevés qu''en ligne, la qualité de l''accompagnement est un atout majeur pour les nouveaux arrivants. Comparez les offres étudiantes et préparez vos documents pour ouvrir votre compte sereinement.
',
  1,
  60,
  NULL,
  '[]'::jsonb);
-- LEÇONS pour COURS 46 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '2b305e4b-7516-4d0c-8c08-1533c8c6148c',
  'a571fb06-5626-4993-b256-81e1a3622ee4',
  'Néo-banques (Revolut, Bourso) : Avantages',
  '# Néo-banques (Revolut, Boursorama, N26...) : Avantages

## Pourquoi c''est important ?

En complément ou en alternative aux banques traditionnelles, les "néo-banques" et banques en ligne (comme Boursorama Banque, Fortuneo, Revolut, N26) sont devenues très populaires en France, notamment auprès des jeunes et des profils internationaux. Elles offrent des avantages considérables en termes de rapidité, de simplicité, de frais réduits (voire gratuits), et de services innovants via des applications mobiles. Comprendre ces avantages est absolument crucial pour les étudiants internationaux, car ces solutions peuvent simplifier énormément votre gestion financière, réduire les coûts liés aux opérations internationales, et s''adapter parfaitement à un mode de vie mobile. C''est une option moderne et économique à considérer sérieusement.










-   **Avantages** : Ouverture de compte ultra-rapide, frais souvent nuls (surtout pour les opérations internationales), fonctionnalités innovantes sur l''application.



-   **Cotisation carte bancaire** : Souvent gratuite (sous conditions d''utilisation).
-   **Frais d''opérations courantes** : Virements SEPA gratuits.
-   **Frais internationaux (spécifique aux néo-banques)** : Très faibles, voire nuls, pour les paiements et retraits en devises étrangères (hors zone euro), ce qui est un avantage majeur si vous recevez de l''argent de l''étranger ou si vous voyagez.

#### b) Rapidité et simplicité de l''ouverture de compte
-   **Délai court** : L''ouverture de compte peut prendre quelques minutes (néo-banques) à quelques jours (banques en ligne).

-   **Virements instantanés** : Possibilité de faire des virements entre amis ou vers d''autres comptes très rapidement.
-   **Blocage/déblocage carte** : Possibilité de bloquer/débloquer votre carte directement depuis l''application.

-   Certaines néo-banques sont plus souples pour l''ouverture de compte aux non-résidents ou aux personnes avec des papiers étrangers au début de leur installation.



#### a) Pas d''agence physique ni de conseiller dédié
-   **Absence de contact humain** : Tout se fait à distance. Si vous avez besoin d''un conseil complexe ou d''aide pour une démarche administrative, vous n''avez pas de conseiller attitré.
-   **Dépôt d''espèces et de chèques** : Souvent plus compliqué. Les dépôts d''espèces sont rares ou payants (via buralistes par exemple). Les dépôts de chèques se font par envoi postal.

-   Les néo-banques se concentrent sur le compte courant. Les banques en ligne proposent plus de produits, mais l''accès aux crédits immobiliers ou aux conseils en investissement peut être plus limité qu''en banque traditionnelle.

-   Si votre téléphone est perdu/volé ou si vous n''avez pas de connexion, la gestion de votre compte peut être difficile.




-   **Ouvrez un compte dans une néo-banque comme Revolut ou N26 dès votre arrivée** : C''est très rapide et pratique pour commencer à gérer votre argent, surtout si vous recevez de l''argent de l''étranger.
-   **Vous pouvez avoir un compte dans une banque traditionnelle ET une néo-banque** : Utiliser la néo-banque pour les dépenses quotidiennes et les voyages, et la banque traditionnelle pour les dépôts d''espèces ou les conseils.
-   **Vérifiez les conditions d''éligibilité** : Certaines banques en ligne peuvent demander des conditions de revenus.


-   **Ne pas pouvoir déposer d''espèces ou de chèques** si c''est un besoin fréquent pour vous.
-   **Dépendre uniquement d''une néo-banque pour des services complexes** (prêt immobilier, conseil patrimonial).
-   **Oublier de vérifier l''agrément de la néo-banque** : Assurez-vous qu''elle est bien un établissement financier réglementé.
-   **Confondre les limites des néo-banques** (ex: pas d''agence physique) avec des défauts.


-   🔗 [Autorité de Contrôle Prudentiel et de Résolution (ACPR)](https://acpr.banque-france.fr/) - Pour vérifier l''agrément des établissements.


Les banques en ligne (Boursorama, Fortuneo) et néo-banques (Revolut, N26) offrent des avantages considérables pour les étudiants internationaux : frais bancaires réduits/gratuits, rapidité d''ouverture de compte, application mobile intuitive et frais internationaux souvent très faibles. Elles sont idéales pour une gestion autonome et mobile de votre argent. Cependant, elles n''ont pas d''agence physique ni de conseiller dédié et les dépôts d''espèces/chèques peuvent être plus complexes. Envisagez d''ouvrir un compte dans une néo-banque pour vos dépenses quotidiennes, éventuellement en complément d''une banque traditionnelle si vous avez des besoins spécifiques.
',
  2,
  60,
  NULL,
  '[]'::jsonb);
-- LEÇONS pour COURS 46 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  '08b5ad07-53c7-4408-bbe0-7b1bb7ffbcd3',
  'a571fb06-5626-4993-b256-81e1a3622ee4',
  'Choisir selon ses besoins (Dépôt d''espèces ?)',
  '# Choisir selon ses besoins (Dépôt d''espèces ?)

## Pourquoi c''est important ?

Le choix d''une banque en France (traditionnelle ou en ligne/néo-banque) doit être guidé avant tout par vos besoins spécifiques en tant qu''étudiant international. Des critères comme la nécessité de déposer des espèces, de recevoir un accompagnement personnalisé, ou de gérer des virements internationaux, sont déterminants. Ne pas analyser vos besoins avant d''ouvrir un compte peut vous faire choisir une banque inadaptée, entraînant des frustrations, des coûts supplémentaires, ou une gestion compliquée de votre argent. Maîtriser cette auto-évaluation est absolument crucial pour ouvrir le compte bancaire qui correspondra le mieux à votre mode de vie et à vos attentes financières en France.


-   Comprendre l''impact du besoin de déposer des espèces ou des chèques.
-   Évaluer l''importance d''un conseiller dédié et d''une agence physique.
-   Maîtriser les critères de choix en fonction des frais internationaux et des fonctionnalités de l''application.


Il n''y a pas de "meilleure" banque universelle, mais la meilleure banque pour VOUS, en fonction de votre profil.





#### a) Dépôt d''espèces et de chèques
    -   Les néo-banques et banques en ligne ont des solutions limitées ou payantes pour les dépôts d''espèces/chèques (envoi postal, dépôts chez les buralistes).

-   **Besoin d''aide ?** Si vous êtes un nouvel arrivant, peu familier avec le système bancaire français, ou si vous préférez un contact humain, un **conseiller dédié en agence** peut être un atout précieux.

-   **Budget serré ?** Si minimiser les frais est votre priorité absolue, les **banques en ligne ou néo-banques** sont souvent les plus avantageuses, surtout pour les opérations à l''étranger (virements, paiements en devises).

-   **À l''aise avec le numérique ?** Si vous préférez gérer vos comptes via une application mobile, faire des virements instantanés et n''avez pas besoin de guichet, les **néo-banques** sont parfaites.
    -   Les banques traditionnelles ont des applications, mais le cœur de leur service reste l''agence.

-   **Besoin de crédit immobilier, de placements spécifiques ?** Les **banques traditionnelles** ou les **banques en ligne** (moins les néo-banques) offrent une gamme plus large de produits d''épargne et de crédit. (Moins pertinent pour un étudiant international, mais à anticiper si vous prévoyez de rester longtemps).

### 2. Le profil de l''étudiant international : Quelles sont les préférences ?


-   Beaucoup d''étudiants internationaux optent pour une **banque traditionnelle** pour le contact humain, la facilité de déposer de l''argent liquide (si les parents en envoient), et le sentiment de sécurité.

#### b) Pour l''optimisation
-   De plus en plus combinent une **banque traditionnelle** (pour les gros dépôts ou le conseil) avec une **néo-banque** (pour les dépenses quotidiennes, les paiements internationaux sans frais, et l''application mobile).

-   Si vous êtes à l''aise avec le numérique, n''avez pas besoin de déposer d''espèces et souhaitez minimiser les frais, une **banque en ligne ou une néo-banque** peut suffire.



-   **Offres "Jeunes" / "Étudiants"** : Vérifiez les packages spécifiques.
-   **Frais de retrait** en France et à l''étranger.
-   **Conditions d''ouverture** : Certaines banques en ligne peuvent exiger des conditions de revenus ou d''épargne.




-   **Demandez la "plaquette tarifaire"** : Elle liste tous les frais.
-   **N''hésitez pas à tester une néo-banque en complément** de votre banque principale.


-   **Ignorer les frais bancaires** : Ils peuvent s''accumuler.
-   **Ne pas tenir compte des limitations des néo-banques** (ex: pas de découvert autorisé ou de dépôt d''espèces).
-   **Choisir une banque uniquement par notoriété** sans regarder l''offre.
-   **Penser que l''ouverture de compte est la même partout** : Les banques en ligne sont plus rapides.


-   🔗 [Autorité de Contrôle Prudentiel et de Résolution (ACPR)](https://acpr.banque-france.fr/) - L''organisme qui régule les banques.


Le choix de votre banque en France dépend de vos besoins spécifiques : facilité de dépôt d''espèces/chèques (banque traditionnelle), accompagnement personnalisé (banque traditionnelle), ou frais réduits/gestion mobile (banque en ligne/néo-banque). Évaluez l''importance de chaque critère pour votre mode de vie et votre budget d''étudiant international. N''hésitez pas à comparer les offres "jeunes" des différentes banques et à envisager une combinaison de solutions (banque traditionnelle + néo-banque) pour optimiser votre gestion financière en France.
',
  3,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

