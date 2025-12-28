-- ==========================================
-- LOT 12 : Cours 56 à 60
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 56 ---

-- COURS 57 : La notation sur 20
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La notation sur 20 en France : Comprendre les examens et mentions',
  'notation-sur-20-france-comprendre-examens-mentions',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre le système d''évaluation académique. La notation sur 20 est la norme, et la signification d''un "10/20 validé" peut être très différente de ce que vous connaissez dans votre pays. Nous vous expliquerons l''échelle de notation française, l''importance du 10/20 pour la validation des matières, la signification des mentions (Assez Bien, Bien, Très Bien) et la différence entre les examens "partiels" et le "contrôle continu". Maîtriser ce système est absolument crucial pour évaluer vos résultats, comprendre les attentes de vos professeurs, et planifier votre progression académique avec succès en France.',
  'Notation sur 20 : 10/20 = validé ! Mentions (AB, B, TB), partiels vs contrôle continu. Comprenez tout pour réussir vos examens !',
  'preparation_academique',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''échelle de notation française sur 20 et la signification du 10/20", "Identifier les différentes mentions (Assez Bien, Bien, Très Bien) et leurs critères", "Distinguer les examens "partiels" du "contrôle continu" et leur impact", "Maîtriser les conseils pour optimiser sa réussite aux examens"]'::jsonb,
  '["Être admis(e) dans un établissement d''enseignement supérieur français"]'::jsonb,
  NULL,
  NULL,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 57
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Échelle de notation : 10/20 c''est validé !',
  '# Échelle de notation : 10/20 c''est validé !

## Pourquoi c''est important ?

Le système de notation dans l''enseignement supérieur français est basé sur une échelle de 0 à 20. Cependant, la signification de cette échelle, et notamment du seuil de validation, peut être très différente de ce que vous connaissez dans votre pays d''origine. Pour les étudiants internationaux, comprendre que **10/20 est la note minimale pour valider une matière ou un examen** est absolument crucial. Ne pas saisir cette nuance, c''est risquer de se décourager avec des notes qui vous sembleraient "basses" dans votre système, ou de ne pas comprendre les critères de réussite. Maîtriser l''échelle de notation française est essentiel pour évaluer vos performances, comprendre les attentes de vos professeurs, et planifier votre progression académique.


-   Définir l''échelle de notation française (0 à 20) dans l''enseignement supérieur.
-   Comprendre la signification du 10/20 pour la validation d''une matière.
-   Identifier les différences culturelles de notation par rapport à d''autres pays.


Le système de notation français a ses propres codes. Il est important de ne pas le comparer directement à d''autres systèmes.

🔗 [Ministère de l''Enseignement Supérieur : Le système LMD](https://www.enseignementsup-recherche.gouv.fr/fr/le-systeme-lmd-60074) - Informations générales sur l''évaluation.


### 1. L''échelle de notation française (0 à 20)



-   **C''est la règle d''or** : La note minimale pour valider une matière (ou une unité d''enseignement, un semestre, une année) est de **10 sur 20 (10/20)**.
-   **Pas un "échec"** : Contrairement à d''autres systèmes où 50% serait une note faible, en France, 10/20 est une note de réussite honorable.


🔗 [Onisep.fr : Le vocabulaire de l''enseignement supérieur](https://www.onisep.fr/Choisir-mes-etudes/En-terminale-et-bientot-au-lycee-general-et-technologique/Le-vocabulaire-de-l-enseignement-superieur/CM-TD-TP-LMD-ECTS) - Définition de la notation.



#### a) Comparaison avec d''autres systèmes
-   Dans certains pays, une note de 50% ou 60% peut être considérée comme une "moyenne" ou "passable".
-   En France, une note de 10/20 n''est pas une "mauvaise" note, c''est la note qui prouve la maîtrise des fondamentaux.
-   Il est rare d''obtenir des notes très élevées (18, 19, 20) en France, car l''excellence est très valorisée et rarement atteinte.

-   Le système français valorise la rigueur, la méthode, la capacité d''analyse et de synthèse, la clarté de l''expression, et l''originalité de la pensée.
-   Il ne s''agit pas seulement de "réciter" des connaissances.




#### b) Validation par unité d''enseignement (UE)
-   Les matières sont regroupées en Unités d''Enseignement (UE). Pour valider une UE, il faut généralement avoir une moyenne de 10/20 sur l''ensemble des matières qui la composent. Il y a des compensations entre les matières d''une même UE.

-   Pour valider un semestre, il faut obtenir une moyenne générale de 10/20 sur l''ensemble des UE du semestre. Il peut y avoir des compensations entre les UE.
-   La validation d''un semestre permet d''obtenir les 30 crédits ECTS associés (voir cours sur les ECTS).

-   Si vous n''obtenez pas la moyenne de 10/20 à une matière, une UE ou un semestre, vous pouvez souvent vous présenter à une **deuxième session d''examen** (rattrapages) pour tenter de valider.




-   Ne vous contentez pas d''apprendre par cœur. Cherchez à comprendre les raisonnements, les méthodes.

-   N''hésitez pas à demander des précisions sur les attentes, les critères d''évaluation, et les raisons de vos notes.





-   **L''assiduité et la participation comptent** (surtout en TD/TP).


-   **Penser qu''une note en dessous de 10/20 est un échec définitif** (il y a les compensations et les rattrapages).
-   **Sous-estimer l''importance de la clarté de l''expression** écrite et orale.


-   🔗 [Ministère de l''Enseignement Supérieur : Le système LMD](https://www.enseignementsup-recherche.gouv.fr/fr/le-systeme-lmd-60074) - La référence.
-   🔗 [Onisep.fr : Le vocabulaire de l''enseignement supérieur](https://www.onisep.fr/Choisir-mes-etudes/En-terminale-et-bientot-au-lycee-general-et-technologique/Le-vocabulaire-de-l-enseignement-superieur/CM-TD-TP-LMD-ECTS) - Pour le lexique.
-   🔗 [Légifrance : Code de l''Éducation (Articles sur l''évaluation)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Textes de loi.


L''échelle de notation française est sur 20, avec 10/20 comme seuil de validation pour une matière, une UE ou un semestre. Ne vous découragez pas si vos notes sont différentes de ce que vous connaissez ; 10/20 est une note de réussite. Concentrez-vous sur la compréhension, travaillez régulièrement (surtout les TD), et n''hésitez pas à demander des explications à vos professeurs. Comprendre cette échelle est absolument crucial pour évaluer vos performances, maximiser vos chances de validation des crédits ECTS, et progresser sereinement dans vos études en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Mention Assez Bien, Bien, Très Bien',
  '# Mention Assez Bien, Bien, Très Bien

## Pourquoi c''est important ?

Lorsque vous obtenez votre diplôme universitaire en France, vous pouvez recevoir une "mention" (Assez Bien, Bien, Très Bien) en fonction de votre moyenne générale. Ces mentions sont des indicateurs d''excellence académique qui peuvent valoriser votre parcours, notamment pour la poursuite d''études (Master, Doctorat), la recherche de bourses, ou l''insertion professionnelle. Comprendre la signification de ces mentions, les moyennes requises pour les obtenir, et leur impact sur votre avenir est absolument crucial pour les étudiants internationaux. Ne pas connaître ce système peut vous faire sous-estimer l''importance de vos résultats ou ne pas viser l''excellence. Maîtriser ces informations est essentiel pour évaluer votre réussite et optimiser votre future carrière.


-   Identifier l''impact des mentions sur la poursuite d''études et l''insertion professionnelle.
-   Maîtriser les conseils pour viser l''excellence et valoriser votre parcours.


Les mentions sont des distinctions honorifiques qui récompensent la qualité de vos résultats sur l''ensemble de votre cursus (Licence, Master).

🔗 [Ministère de l''Enseignement Supérieur : Le système LMD](https://www.enseignementsup-recherche.gouv.fr/fr/le-systeme-lmd-60074) - Informations générales sur l''évaluation.


### 1. L''échelle des mentions universitaires

Des distinctions pour récompenser l''excellence.

-   Si votre moyenne générale est **entre 10/20 et 11,99/20**, vous obtenez votre diplôme sans mention. C''est une réussite honorable et valide.

-   Si votre moyenne générale est **entre 12/20 et 13,99/20**, vous obtenez la mention "Assez Bien".
-   C''est une très bonne reconnaissance de vos efforts et de vos résultats.

-   Si votre moyenne générale est **entre 14/20 et 15,99/20**, vous obtenez la mention "Bien".
-   C''est une excellente reconnaissance, qui témoigne d''une maîtrise approfondie des matières.

-   Si votre moyenne générale est **égale ou supérieure à 16/20**, vous obtenez la mention "Très Bien".
-   C''est une distinction exceptionnelle, qui marque une excellence académique rare et remarquable.

🔗 [Onisep.fr : Le vocabulaire de l''enseignement supérieur](https://www.onisep.fr/Choisir-mes-etudes/En-terminale-et-bientot-au-lycee-general-et-technologique/Le-vocabulaire-de-l-enseignement-superieur/CM-TD-TP-LMD-ECTS) - Définition des termes.

### 2. L''impact des mentions sur votre avenir


#### a) Poursuite d''études
-   **Bourses d''excellence** : Certaines bourses peuvent être attribuées sur critères d''excellence, notamment si vous avez une mention.

-   **CV et lettres de motivation** : La mention peut être un atout sur votre CV et votre lettre de motivation. Elle attire l''attention des recruteurs et témoigne de votre sérieux, de vos capacités d''apprentissage et de votre rigueur.
-   **Premier emploi** : Pour un premier emploi, où l''expérience est souvent limitée, la mention peut faire la différence.

-   La mention renforce la crédibilité de votre parcours universitaire français à l''international.



-   La mention est attribuée sur la base de la moyenne générale obtenue sur l''ensemble des notes de votre cursus (Licence ou Master).
-   Les notes des deux sessions d''examen (première session, puis rattrapages si nécessaire) sont prises en compte.

-   C''est un jury de professeurs qui valide les résultats et attribue les mentions.
-   Il peut y avoir des cas de "compensation" ou de "rattrapage" qui peuvent influencer l''obtention d''une mention.





-   **Visez la meilleure moyenne possible** : Chaque point compte pour l''obtention d''une mention.
-   **Si vous êtes à la limite d''une mention**, discutez-en avec votre secrétariat pédagogique ou le responsable de la formation.


-   **Sous-estimer l''importance des mentions** : Elles sont un réel atout.
-   **Penser qu''une mention est facile à obtenir** : Le système français est exigeant.
-   **Ne pas tenir compte des rattrapages** : Ils peuvent vous aider à valider, mais souvent avec des notes qui ne permettent pas d''atteindre les mentions les plus élevées.
-   **Faire des efforts seulement en fin d''année** : La régularité du travail est plus efficace.


-   🔗 [Ministère de l''Enseignement Supérieur : L''évaluation des étudiants](https://www.enseignementsup-recherche.gouv.fr/fr/l-evaluation-des-etudiants-60074) - Informations générales.
-   🔗 [Onisep.fr : Le vocabulaire de l''enseignement supérieur](https://www.onisep.fr/Choisir-mes-etudes/En-terminale-et-bientot-au-lycee-general-et-technologique/Le-vocabulaire-de-l-enseignement-superieur/CM-TD-TP-LMD-ECTS) - Définition des mentions.
-   🔗 [Légifrance : Code de l''Éducation (Articles sur les diplômes)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Textes de loi.


Les mentions (Assez Bien, Bien, Très Bien) sont des distinctions d''excellence académique attribuées sur la base de votre moyenne générale (12/20, 14/20, 16/20). Elles sont un atout majeur pour la poursuite d''études (Masters sélectifs, Doctorats) et l''insertion professionnelle. Visez la meilleure moyenne possible en travaillant régulièrement et en ne négligeant aucune matière. Comprendre ce système est absolument crucial pour évaluer votre réussite, valoriser votre parcours universitaire français, et optimiser votre future carrière.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Les partiels et le contrôle continu',
  '# Les partiels et le contrôle continu (Examens universitaires)

## Pourquoi c''est important ?

Le système d''évaluation dans l''enseignement supérieur français repose sur deux modalités principales : les "partiels" (examens finaux) et le "contrôle continu". Comprendre la distinction entre ces deux formes d''évaluation, leur pondération dans votre note finale, et les attentes spécifiques de chaque format est absolument crucial pour les étudiants internationaux. Une mauvaise stratégie d''étude, une négligence du contrôle continu, ou une méconnaissance des règles d''examen peut impacter directement votre réussite académique. Maîtriser ces modalités est essentiel pour bien vous préparer, optimiser vos notes, et valider vos matières avec succès.


-   Définir ce qu''est le contrôle continu et ses avantages.
-   Maîtriser les conseils pour bien préparer chaque type d''évaluation.



🔗 [Ministère de l''Enseignement Supérieur : L''évaluation des étudiants](https://www.enseignementsup-recherche.gouv.fr/fr/l-evaluation-des-etudiants-60074) - Informations générales sur les modalités d''examen.



L''évaluation tout au long du semestre.

-   Le contrôle continu est un mode d''évaluation qui se déroule tout au long du semestre ou de l''année universitaire.

-   **Valorise le travail régulier** : Vous êtes incité(e) à travailler et à réviser constamment, plutôt qu''à tout faire à la dernière minute.
-   **Moins de stress** : La note finale ne dépend pas d''un seul examen.
-   **Compense les faiblesses** : Une mauvaise note à une évaluation peut être rattrapée par d''autres.




L''évaluation de fin de semestre/année.

-   Ils évaluent l''ensemble des connaissances acquises dans une matière sur toute la période.

-   **Vision d''ensemble** : Ils vous forcent à synthétiser et à avoir une compréhension globale de la matière.

-   **Peut pénaliser les moins performants à l''écrit** ou sous pression.



-   La pondération (le poids) du contrôle continu et des partiels dans la note finale d''une matière varie d''une université à l''autre, et d''une formation à l''autre.

#### b) Importance pour la stratégie d''étude



-   Dès la rentrée, comprenez les modalités d''évaluation de chaque matière (CC, partiel, pondération).


-   Ne commencez pas à réviser la veille de l''examen. Étalez vos révisions sur plusieurs semaines.
-   Faites des fiches de synthèse, des annales (anciens sujets d''examen).

-   N''hésitez pas à parler à votre médecin traitant ou aux services de soutien psychologique si le stress est trop intense.

#### e) En cas d''échec




-   **Formez des groupes de travail** avec d''autres étudiants.


-   **Ne pas comprendre les modalités d''évaluation** : Stratégie d''étude inadaptée.
-   **Sous-estimer les rattrapages** : C''est une vraie opportunité.


-   🔗 [Ministère de l''Enseignement Supérieur : L''évaluation des étudiants](https://www.enseignementsup-recherche.gouv.fr/fr/l-evaluation-des-etudiants-60074) - La référence.
-   🔗 [Onisep.fr : Le vocabulaire de l''enseignement supérieur](https://www.onisep.fr/Choisir-mes-etudes/En-terminale-et-bientot-au-lycee-general-et-technologique/Le-vocabulaire-de-l-enseignement-superieur/CM-TD-TP-LMD-ECTS) - Définition.
-   🔗 [Légifrance : Code de l''Éducation (Articles sur l''évaluation)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Textes de loi.


Le système d''évaluation universitaire français combine les "partiels" (examens finaux) et le "contrôle continu" (évaluations régulières). La pondération entre les deux varie selon les matières et les formations. Le contrôle continu valorise le travail régulier et l''assiduité, tandis que les partiels évaluent la capacité de synthèse. Lisez le règlement des études, travaillez régulièrement, et anticipez les révisions. Comprendre ces modalités est absolument crucial pour bien vous préparer, optimiser vos notes, et réussir vos examens avec succès en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 57 ---

-- COURS 58 : Rédiger un CV français
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Rédiger un CV français : Le guide pour l''emploi étudiant',
  'rediger-cv-francais-guide-emploi-etudiant',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui recherchent un job étudiant, un stage ou un premier emploi. Le Curriculum Vitae (CV) français a des codes et des attentes spécifiques qui peuvent être très différents de ceux de votre pays d''origine. Ne pas adapter votre CV, c''est risquer de ne pas être remarqué(e) par les recruteurs français. Nous vous expliquerons la structure et le design attendus (sobriété), la question de la photo (oui ou non ?), et comment valoriser efficacement vos expériences étrangères pour les rendre pertinentes sur le marché français. Maîtriser la rédaction d''un CV aux normes françaises est absolument crucial pour décrocher des entretiens et réussir votre insertion professionnelle en France.',
  'CV français : structure sobre, photo (oui/non ?), valorisation expériences étrangères. Votre passeport pour l''emploi étudiant en France !',
  'insertion_professionnelle',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la structure et le design attendus d''un CV français", "Savoir si inclure une photo est recommandé ou non", "Maîtriser la valorisation de ses expériences et diplômes étrangers", "Identifier les erreurs courantes à éviter pour un CV impactant"]'::jsonb,
  '[]'::jsonb,
  NULL,
  NULL,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 58
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Structure et Design (Sobriété)',
  '# Structure et Design (Sobriété) pour un CV français

## Pourquoi c''est important ?

Le Curriculum Vitae (CV) est votre carte de visite professionnelle en France. C''est le document qui vous ouvre les portes des entretiens d''embauche. La **structure** et le **design** d''un CV français répondent à des codes spécifiques, souvent axés sur la clarté et la sobriété, qui peuvent être très différents de ce que vous connaissez dans votre pays d''origine. Un CV mal structuré, trop fantaisiste ou illisible risque d''être écarté en quelques secondes par un recruteur. Pour les étudiants internationaux, maîtriser ces codes est absolument crucial pour faire bonne impression, mettre en valeur votre parcours, et maximiser vos chances de décrocher un job étudiant, un stage ou un premier emploi en France.


-   Comprendre les principes de la présentation attendue d''un CV français.


Un CV français est un document qui doit être facile à lire et à scanner par le recruteur. La clarté prime sur l''originalité excessive.



### 1. La structure classique d''un CV français


-   **Numéro de téléphone portable** : Avec l''indicatif français (+33).
-   **Nationalité** : Indiquez-la pour les recruteurs français (ex: "Nationalité : [Votre nationalité], Titre de séjour étudiant").

-   **Titre** : Indiquez clairement le poste recherché ou votre objectif professionnel (ex: "Étudiant en Master 2 Marketing", "Recherche Stage Développement Commercial").

#### c) Expériences professionnelles (ou "Expériences")
-   **Ordre anti-chronologique** : Commencez par l''expérience la plus récente.
-   **Détail** : Intitulé du poste, nom de l''entreprise, ville, dates (mois/année).
-   **Missions et réalisations** : Utilisez des verbes d''action et des chiffres (quantifiez vos résultats si possible).
-   **Mots-clés** : Adaptez les missions aux mots-clés de l''offre d''emploi.

-   **Détail** : Intitulé du diplôme, nom de l''établissement, ville, dates (année de début, année d''obtention/prévue).

#### e) Compétences (ou "Compétences techniques et linguistiques")

#### f) Centres d''intérêt (facultatif)
-   Sport, associations, voyages, lecture. Soyez concis et mettez en avant ce qui peut révéler une qualité (esprit d''équipe, persévérance).

🔗 [APEC (Association Pour l''Emploi des Cadres) : Modèles de CV](https://www.apec.fr/candidat/preparer-sa-candidature/cv/modeles-de-cv.html) - Des modèles professionnels.


L''efficacité prime sur l''esthétique.







-   **Tradition française** : En France, il est **courant d''inclure une photo** sur le CV, même si ce n''est pas obligatoire. Cela humanise le dossier.
-   **Recommandation** : Si vous choisissez d''en mettre une, elle doit être :
-   **Risque de discrimination** : Bien que la loi française interdise la discrimination, la photo peut parfois être source de biais inconscients. Si vous avez des doutes, ou si vous venez d''une culture où la photo sur le CV est inhabituelle, vous pouvez choisir de ne pas en mettre.





-   **Adaptez votre CV à chaque offre d''emploi** : Ne faites pas un CV générique. Mettez en avant les compétences et expériences pertinentes pour le poste visé.
-   **Faites relire votre CV** par un ami francophone ou un professionnel de l''aide à l''emploi.
-   **Créez une section "Soft Skills"** : Mettez en avant vos qualités (esprit d''équipe, autonomie, adaptabilité).
-   **Vérifiez l''orthographe et la grammaire** : Une faute peut être rédhibitoire.


-   **CV trop long** : Plus d''une page pour un jeune profil.
-   **Fautes d''orthographe et de grammaire**.
-   **Oublier d''indiquer votre statut de séjour** (ex: Titre de séjour étudiant valide jusqu''au...).


-   🔗 [APEC (Association Pour l''Emploi des Cadres) : Rédiger un CV](https://www.apec.fr/candidat/preparer-sa-candidature/cv/rediger-un-cv.html) - Conseils et modèles.


La rédaction d''un CV français exige une structure claire, un design sobre et concis (idéalement une page), et des informations précises. Inclure une photo professionnelle est courant. Adaptez votre CV à chaque offre d''emploi, mettez en valeur vos compétences et vos diplômes (traduits et expliqués pour le contexte français), et n''oubliez pas d''indiquer votre statut de séjour. Faites-le relire pour corriger les fautes. Maîtriser ces codes est absolument crucial pour faire bonne impression auprès des recruteurs et maximiser vos chances de trouver un emploi en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4102-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La photo : Oui ou Non ?',
  '# La photo sur un CV français : Oui ou Non ?

## Pourquoi c''est important ?

La question de la photo sur un Curriculum Vitae (CV) est un sujet qui varie considérablement d''une culture à l''autre. Ce qui est obligatoire dans votre pays d''origine peut être déconseillé ailleurs, et vice-versa. En France, bien qu''il n''y ait pas d''obligation légale, la présence d''une photo sur le CV est une pratique courante, mais elle est soumise à des règles non écrites de professionnalisme. Ne pas comprendre les attentes françaises concernant la photo, ou en inclure une non conforme, peut desservir votre candidature et donner une mauvaise image aux recruteurs. Pour les étudiants internationaux, maîtriser cette nuance est absolument crucial pour faire bonne impression et éviter les erreurs qui pourraient impacter vos chances de décrocher un job étudiant, un stage ou un premier emploi.


-   Identifier les avantages et les inconvénients d''inclure une photo.
-   Maîtriser les conseils pour faire un choix éclairé sur l''inclusion de votre photo.


La photo sur un CV est une question qui touche à la fois l''esthétique et l''éthique, en particulier la lutte contre la discrimination.





-   Contrairement à certains pays où elle est impérative, en France, la photo sur le CV n''est **pas obligatoire**. Vous avez le droit de ne pas en mettre.
-   Cependant, elle reste une **pratique très courante** et même attendue par de nombreux recruteurs, car elle "humanise" le CV.

-   La loi française interdit la discrimination à l''embauche sur la base de l''origine, du sexe, de l''apparence physique, etc.

### 2. Avantages et inconvénients d''inclure une photo


-   **Humanisation du CV** : La photo rend le CV plus personnel et aide le recruteur à vous identifier lors de l''entretien.
-   **Mémorisation** : Une photo professionnelle aide le recruteur à se souvenir de votre candidature, surtout s''il en examine beaucoup.
-   **Image professionnelle** : Si la photo est de qualité, elle renforce l''image de sérieux et de rigueur.

-   **Risque de discrimination** : Même si c''est illégal, certains recruteurs peuvent inconsciemment se baser sur l''apparence physique ou l''origine pour faire un tri.
-   **Non pertinence** : La photo n''apporte aucune information sur vos compétences.




    -   **Tenue soignée** : Chemise, veste, ou tenue vestimentaire adaptée à l''entreprise (pas de débardeur, de t-shirt à slogan).
    -   **Regard direct** vers l''objectif.


-   Évitez les selfies ou les photos découpées d''un événement.

🔗 [APEC (Association Pour l''Emploi des Cadres) : La photo sur le CV](https://www.apec.fr/candidat/preparer-sa-candidature/cv/la-photo-sur-le-cv.html) - Conseils professionnels.



-   Si vous n''avez pas de photo professionnelle, ou si vous avez le moindre doute, il est préférable de **ne pas en mettre**. Une mauvaise photo est pire que pas de photo du tout.

-   Si vous n''êtes pas sûr(e) des codes professionnels français, la prudence est de ne pas en mettre.




-   **Si vous êtes boursier(e) ou bénéficiez d''aides spécifiques**, cela peut être mentionné si pertinent, mais la photo n''est pas le lieu.


-   **Mettre une photo si vous n''êtes pas à l''aise avec l''idée**.


-   🔗 [Service-Public.fr : Normes pour les photos d''identité](https://www.service-public.fr/particuliers/vosdroits/F10616) - Pour la conformité technique des photos.
-   🔗 [Défenseur des Droits : Discrimination à l''embauche](https://www.defenseurdesdroits.fr/fr/vos-droits/discriminations/emploi) - Informations sur la discrimination.
-   🔗 [La Grande École du Numérique (GEN)](https://www.grandeecolenumerique.fr/) - Peut aussi donner des conseils pour la recherche d''emploi.


En France, la photo sur le CV est une pratique courante mais non obligatoire. Si vous choisissez d''en mettre une, elle doit être de qualité professionnelle (fond neutre, tenue soignée, sourire léger, regard direct) et aux normes d''une photo d''identité. Une mauvaise photo est pire que pas de photo du tout. Pesez les avantages (humanisation, mémorisation) et les inconvénients (risque de discrimination, mauvaise impression). Faire un choix éclairé et utiliser une photo conforme est absolument crucial pour faire bonne impression et maximiser vos chances de succès sur le marché de l''emploi français.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Adapter ses expériences étrangères',
  '# Adapter ses expériences étrangères sur un CV français

## Pourquoi c''est important ?

En tant qu''étudiant international, votre parcours académique et professionnel a souvent débuté dans votre pays d''origine. Il est absolument crucial d''adapter et de valoriser ces expériences étrangères sur votre CV français pour qu''elles soient comprises et appréciées par les recruteurs locaux. Une simple traduction littérale ne suffit pas : vous devez expliquer le contexte, les équivalences, et mettre en avant les compétences transférables. Ne pas faire cet effort d''adaptation, c''est risquer que vos expériences ne soient pas comprises, sous-estimées, ou même ignorées. Maîtriser cette valorisation est fondamental pour rendre votre profil attrayant et maximiser vos chances de décrocher un job, un stage ou un emploi en France.


-   Maîtriser les techniques pour valoriser vos expériences professionnelles (stages, jobs) à l''étranger.


Votre parcours international est une richesse, mais il faut savoir le présenter pour qu''il soit compris.

🔗 [APEC (Association Pour l''Emploi des Cadres) : Valoriser son expérience internationale](https://www.apec.fr/candidat/preparer-sa-candidature/cv/valoriser-son-experience-internationale.html) - Conseils professionnels.




#### a) Préciser le niveau d''études
-   **Exemple** : Si vous avez un Bachelor de 4 ans dans votre pays, vous pouvez le présenter comme "Licence [Domaine] (équivalent Bac+4 français)". Si c''est un Master, précisez "Master [Domaine] (équivalent Bac+5 français)".

-   Nom de l''université ou de l''école.
-   Si c''est un établissement très réputé dans votre pays, vous pouvez ajouter une courte description de sa reconnaissance (ex: "Université X, classée parmi les 3 meilleures en [domaine] dans mon pays").


-   Si vous avez fait reconnaître officiellement votre diplôme via France Éducation International (ENIC-NARIC), mentionnez l''attestation de comparabilité.

🔗 [France Éducation International : Reconnaissance des diplômes](https://www.france-education-international.fr/venir-etudier-en-france/reconnaissance-des-diplomes) - Pour l''attestation de comparabilité.

### 2. Valoriser ses expériences professionnelles (stages, jobs) à l''étranger


-   Traduisiez l''intitulé du poste si possible, mais surtout, mettez un équivalent français ou une description courte si le poste n''existe pas exactement en France (ex: "Assistant Marketing" plutôt que "Marketing Associate" si ce n''est pas clair).

-   **Contexte** : Si l''entreprise ou le secteur est peu connu en France, ajoutez une courte phrase pour présenter l''entreprise et son activité.
-   **Verbes d''action** : Utilisez des verbes d''action forts (développé, géré, analysé, mis en place, contribué, etc.).
-   **Chiffres et résultats** : Quantifiez vos réalisations si possible. (ex: "Augmentation des ventes de X%", "Gestion d''un portefeuille de Y clients", "Réduction des coûts de Z%").

-   Si vous avez travaillé dans une autre langue, mentionnez-le (ex: "Missions réalisées en anglais"). Cela valorise vos compétences linguistiques.



#### a) Les soft skills liées à l''international
-   **Ouverture d''esprit / interculturel** : Votre capacité à travailler avec des personnes de différentes cultures.

-   Créez une section spécifique "Compétences transversales" ou "Soft Skills".
-   Intégrez-les dans la description de vos expériences (ex: "Développé un projet en équipe, preuve de mon esprit collaboratif").

### 4. Conseils généraux pour l''adaptation du CV




-   Adaptez le vocabulaire de vos expériences aux mots-clés utilisés dans l''offre d''emploi française.

-   Par un ami francophone ou un professionnel de l''aide à l''emploi pour corriger les fautes et vérifier la clarté.




-   **Expliquez le contexte de votre pays** si nécessaire (ex: "équivalent du Baccalauréat français").
-   **Si vous n''avez pas d''expérience professionnelle**, mettez en avant les projets académiques, les expériences associatives, les bénévolats.


-   **Sous-estimer la valeur de vos expériences étrangères** par manque d''adaptation.
-   **Fautes d''orthographe et de grammaire** : Cela donne une mauvaise impression.
-   **Ne pas mentionner votre statut de séjour** : C''est une information importante pour l''employeur.


-   🔗 [APEC (Association Pour l''Emploi des Cadres) : Valoriser son expérience internationale](https://www.apec.fr/candidat/preparer-sa-candidature/cv/valoriser-son-experience-internationale.html) - La référence pour les cadres.
-   🔗 [France Éducation International : Reconnaissance des diplômes](https://www.france-education-international.fr/venir-etudier-en-france/reconnaissance-des-diplomes) - Utile pour l''équivalence.


Adapter vos expériences étrangères sur un CV français est absolument crucial. Traduisez et expliquez vos diplômes et universités selon le système LMD français. Valorisez vos expériences professionnelles en décrivant le contexte, les missions (avec des verbes d''action et des chiffres), et en mettant en avant les compétences transférables et interculturelles (adaptabilité, autonomie). Soyez concis, clair, et faites relire votre CV. Cette adaptation est fondamentale pour rendre votre profil attrayant et maximiser vos chances de réussite sur le marché de l''emploi français.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 58 ---

-- COURS 59 : La Lettre de Motivation
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La Lettre de Motivation : L''art de convaincre en France',
  'lettre-motivation-art-convaincre-france',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui recherchent un job, un stage ou un emploi. La lettre de motivation (LM) française a des codes très spécifiques, souvent différents de ceux de votre pays d''origine, et elle est un complément indispensable à votre CV. Ne pas maîtriser sa structure ("Vous, Moi, Nous"), les formules de politesse incontournables, et les erreurs classiques à éviter, c''est risquer de voir votre candidature écartée. Nous vous expliquerons comment personnaliser votre lettre pour chaque offre, valoriser votre parcours international, et convaincre le recruteur de votre motivation. Maîtriser la rédaction d''une LM impactante est absolument crucial pour décrocher des entretiens et réussir votre insertion professionnelle en France.',
  'Lettre de motivation France : structure "Vous, Moi, Nous", formules de politesse, erreurs à éviter. Convainquez le recruteur !',
  'insertion_professionnelle',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la structure "Vous, Moi, Nous" d''une lettre de motivation française", "Identifier les formules de politesse adéquates (début et fin de lettre)", "Savoir comment personnaliser sa lettre pour chaque offre d''emploi", "Maîtriser les erreurs classiques à éviter pour une LM percutante"]'::jsonb,
  '["Avoir un CV aux normes françaises"]'::jsonb,
  NULL,
  NULL,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 59
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Structure "Vous, Moi, Nous"',
  '# Structure "Vous, Moi, Nous" (Lettre de Motivation)

## Pourquoi c''est important ?

La lettre de motivation (LM) française est un exercice de style codifié, très différent d''une simple énumération de compétences. La structure **"Vous, Moi, Nous"** est la méthode la plus reconnue et efficace pour organiser vos idées et convaincre un recruteur. Ne pas maîtriser cette structure, c''est risquer d''envoyer une lettre générique, mal organisée, qui ne répond pas aux attentes françaises et ne met pas en valeur votre candidature. Pour les étudiants internationaux, comprendre et appliquer cette approche est absolument crucial pour montrer votre capacité à vous adapter aux codes professionnels français et pour maximiser vos chances de décrocher un stage, un job ou un premier emploi.


-   Définir la structure "Vous, Moi, Nous" d''une lettre de motivation.
-   Comprendre l''objectif de chaque partie : ce que vous avez compris de l''entreprise, ce que vous apportez, ce que vous ferez ensemble.


La LM est votre opportunité de montrer votre motivation et d''expliquer pourquoi vous êtes le bon candidat pour l''entreprise et le poste.



### 1. Le "Vous" : Ce que vous avez compris de l''entreprise et du poste


-   C''est le premier paragraphe de votre lettre.
-   Vous devez montrer que vous avez fait des recherches sur l''entreprise et le poste.

-   **Intérêt pour l''entreprise** : Expliquez ce qui vous attire dans l''entreprise (ses valeurs, ses produits, son secteur d''activité, son innovation, son actualité).
-   **Compréhension du poste** : Montrez que vous avez bien compris les missions du poste et les enjeux (à partir de l''annonce).
-   **Lien avec l''offre** : Si vous répondez à une annonce, mentionnez la référence de l''offre et où vous l''avez vue.

-   Flatter l''entreprise, montrer votre proactivité et votre intérêt sincère.
-   Prouver que votre candidature n''est pas générique.

🔗 [APEC (Association Pour l''Emploi des Cadres) : Les 3 règles de la lettre de motivation](https://www.apec.fr/candidat/preparer-sa-candidature/lettre-de-motivation/les-3-regles-d-or-pour-une-lettre-de-motivation.html) - Conseils sur "Vous, Moi, Nous".

### 2. Le "Moi" : Ce que vous avez à apporter à l''entreprise


-   C''est le deuxième paragraphe.
-   Vous devez faire le lien entre vos expériences/compétences et les attentes de l''entreprise/poste.

-   **Valorisation du profil international** : Expliquez comment votre parcours international (maîtrise des langues, adaptabilité, ouverture d''esprit, capacité à travailler dans un environnement multiculturel) est un atout pour l''entreprise.


### 3. Le "Nous" : Ce que vous ferez ensemble et votre projet commun


-   C''est le troisième paragraphe.
-   Vous devez montrer votre projection dans l''entreprise et votre désir de collaborer.

-   **Projet commun** : Expliquez ce que vous souhaitez faire avec l''entreprise, comment vous comptez contribuer à ses objectifs.
-   **Motivation pour la collaboration** : Montrez votre enthousiasme à intégrer l''équipe et à vous investir.
-   **Perspective d''avenir** : Si pertinent, évoquez votre projet professionnel à plus long terme et comment ce poste s''y inscrit.

-   Provoquer l''envie de vous rencontrer.



-   Coordonnées de l''entreprise (Nom du contact si vous le connaissez, Nom de l''entreprise, Adresse).
-   Objet (précis et concis, avec la référence de l''offre).

-   Début : "Madame, Monsieur," ou "Madame/Monsieur [Nom du recruteur, si connu],"
-   Fin : "Dans l''attente de votre réponse, je me tiens à votre entière disposition pour un entretien. Je vous prie d''agréer, Madame, Monsieur, l''expression de mes salutations distinguées." (Voir leçon suivante sur les formules).




-   L''**annonce d''emploi** (si vous répondez à une offre).
-   Vos **recherches sur l''entreprise**.


-   **Faites relire votre lettre** par un ami francophone ou un professionnel de l''aide à l''emploi.
-   **Laissez une "accroche"** à la fin de chaque paragraphe pour donner envie de lire le suivant.


-   **Fautes d''orthographe et de grammaire** : Rédhibitoires.
-   **Lettre trop longue** (plus d''une page).
-   **Ne pas expliquer son intérêt pour l''entreprise et le poste**.


-   🔗 [APEC (Association Pour l''Emploi des Cadres) : Les 3 règles d''or pour une lettre de motivation](https://www.apec.fr/candidat/preparer-sa-candidature/lettre-de-motivation/les-3-regles-d-or-pour-une-lettre-de-motivation.html) - Conseils professionnels.


La structure "Vous, Moi, Nous" est la méthode la plus efficace pour rédiger une lettre de motivation française impactante. Dans le "Vous", montrez votre intérêt pour l''entreprise et le poste. Dans le "Moi", mettez en valeur vos compétences et expériences, en expliquant comment votre profil international est un atout. Dans le "Nous", projetez-vous dans la collaboration. Personnalisez chaque lettre, utilisez un langage professionnel, et faites-la relire. Maîtriser cette structure est absolument crucial pour convaincre les recruteurs et réussir votre recherche d''emploi en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Formules de politesse incontournables',
  '# Formules de politesse incontournables (Lettre de Motivation)

## Pourquoi c''est important ?

La lettre de motivation (LM) en France est un document formel qui suit des codes de rédaction précis, y compris en matière de politesse. L''utilisation des bonnes **formules de politesse** au début et à la fin de votre lettre est absolument cruciale. Des formules inappropriées, trop familières, ou traduites littéralement de votre langue maternelle peuvent donner une image non professionnelle, voire irrespectueuse, et desservir votre candidature. Pour les étudiants internationaux, maîtriser ces conventions est essentiel pour montrer votre sérieux, votre respect des codes français, et faire une impression impeccable auprès des recruteurs. C''est un détail qui compte et qui peut faire la différence.


-   Comprendre l''importance des formules de politesse dans une lettre professionnelle française.







-   **Privilégiez cette option** : Faites l''effort de trouver le nom et le titre du recruteur (sur LinkedIn, le site de l''entreprise, ou en appelant le standard). Cela montre votre motivation.
-   **Formule** : "Madame [Nom du recruteur]," ou "Monsieur [Nom du recruteur],"
    -   Exemple : "Madame Dupont,"
-   **Attention** : N''utilisez pas le prénom, toujours le nom de famille.

-   **Formule générale** : "Madame, Monsieur,"
    -   C''est la formule standard et la plus sûre si vous n''avez pas d''information.
-   **Évitez** : "Cher Monsieur/Madame," (trop familier), "Bonjour," (trop informel pour une lettre).

#### c) Le cas d''une direction spécifique
-   Si vous connaissez le service mais pas la personne : "À l''attention du Responsable des Ressources Humaines," ou "À l''attention du Responsable Marketing,"
-   Vous pouvez alors commencer par "Madame, Monsieur," juste après.




#### a) La phrase d''invitation à l''entretien
-   **Standard** : "Je me tiens à votre entière disposition pour un entretien afin de vous exposer plus en détail ma motivation."
-   **Variantes** : "Je serais ravi(e) de vous rencontrer afin de vous présenter de vive voix mon parcours et mes motivations."
-   **Évitez** : "J''attends de vos nouvelles" (trop passif).

-   **La plus courante et professionnelle** : "Je vous prie d''agréer, Madame, Monsieur, l''expression de mes salutations distinguées."
    -   "Je vous prie d''agréer, Madame, Monsieur, l''expression de mes sentiments les meilleurs." (Un peu plus formel).
    -   "Dans l''attente de vous lire, je vous prie d''agréer, Madame, Monsieur, mes respectueuses salutations." (Plus classique).
    -   N''utilisez jamais "cordialement" ou "bien à vous" : C''est pour les e-mails courts, pas pour une lettre formelle.
    -   N''utilisez jamais "Dans l''attente de votre réponse, veuillez agréer, Madame, Monsieur, l''expression de mes sentiments les plus distingués" (double verbe de politesse, c''est une erreur courante).




[Nom et Prénom du Recruteur, ou Dénomination de l'Entreprise / Service]
[Adresse complète de l'Entreprise]



(OU : Madame Dupont, OU : Monsieur Martin,)

[Premier paragraphe : Le "Vous"]
Je suis particulièrement intéressé(e) par votre entreprise [Nom de l'entreprise] et le poste de [Intitulé du poste] que vous proposez, comme j'ai pu le découvrir sur [Source de l'annonce, ex: LinkedIn, votre site carrière]. Votre engagement envers [mentionner une valeur de l'entreprise ou une actualité] a particulièrement retenu mon attention.

[Deuxième paragraphe : Le "Moi"]
Mon parcours en [Votre formation, ex: Master 2 Marketing] à [Nom de l'université] m'a permis de développer [Compétence 1] et [Compétence 2]. Lors de mon stage chez [Nom de l'entreprise de stage], j'ai [décrire une réalisation concrète], ce qui correspond aux compétences que vous recherchez. Ma capacité à [mentionner une soft skill, ex: m'adapter à de nouveaux environnements] est un atout pour votre équipe.

[Troisième paragraphe : Le "Nous"]
Je suis convaincu(e) que mes compétences et ma motivation me permettront de contribuer activement au développement de [Nom de l'entreprise] et d'apporter une valeur ajoutée à votre équipe. Je serais ravi(e) de mettre mes qualités au service de vos projets.

Dans l'attente de votre réponse, je me tiens à votre entière disposition pour un entretien.
Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.





-   **Révisez toujours les formules de politesse** avant d''envoyer votre lettre.
-   **Faites relire votre lettre** par un francophone pour s''assurer que le ton est approprié.
-   **Utilisez des formules classiques** : C''est ce qui est attendu. Évitez l''originalité sur ce point.


-   **Formules trop familières** ("Bonjour", "Cordialement").
-   **Fautes d''orthographe dans les formules de politesse**.
-   **Oublier la virgule après "Madame, Monsieur"**.
-   **Utiliser un double verbe de politesse** à la fin ("Veuillez agréer... et je vous prie d''agréer...").
-   **Ne pas savoir le nom du recruteur** alors qu''il est facile à trouver.
-   **Signer "amicalement"** une lettre de motivation.


-   🔗 [APEC (Association Pour l''Emploi des Cadres) : Les 3 règles d''or pour une lettre de motivation](https://www.apec.fr/candidat/preparer-sa-candidature/lettre-de-motivation/les-3-regles-d-or-pour-une-lettre-de-motivation.html) - La référence professionnelle.


L''utilisation des formules de politesse correctes est indispensable dans une lettre de motivation française. Commencez par "Madame, Monsieur," (ou le nom du recruteur si connu) et terminez par "Dans l''attente de votre réponse, je me tiens à votre entière disposition pour un entretien. Je vous prie d''agréer, Madame, Monsieur, l''expression de mes salutations distinguées." Évitez les formules trop familières et les fautes. Maîtriser ces codes est absolument crucial pour faire preuve de professionnalisme, de respect, et maximiser vos chances de faire une impression impeccable auprès des recruteurs en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Erreurs classiques à éviter',
  '# Erreurs classiques à éviter (Lettre de Motivation)

## Pourquoi c''est important ?

La lettre de motivation (LM) est votre opportunité de vous démarquer et de convaincre un recruteur de votre intérêt pour un poste ou un stage en France. Cependant, certaines erreurs classiques peuvent rapidement desservir votre candidature, même si votre profil est excellent. Ces erreurs, qu''elles soient de forme, de fond, ou de syntaxe, peuvent donner une image de négligence, de manque de sérieux, ou d''inadaptation aux codes français. Pour les étudiants internationaux, ces pièges sont d''autant plus faciles à commettre par méconnaissance des attentes locales. Maîtriser les erreurs classiques à éviter est absolument crucial pour présenter une lettre de motivation impeccable, professionnelle, et maximiser vos chances de décrocher des entretiens en France.


-   Comprendre les erreurs de fond (générique, pas de lien avec l''entreprise, répétition du CV).



🔗 [APEC (Association Pour l''Emploi des Cadres) : Les erreurs à éviter sur une lettre de motivation](https://www.apec.fr/candidat/preparer-sa-candidature/lettre-de-motivation/les-erreurs-a-eviter-sur-une-lettre-de-motivation.html) - Conseils professionnels.





#### b) Fautes d''orthographe et de grammaire
-   **Rédhibitoire** : C''est l''erreur la plus fréquente et la plus grave. Les fautes donnent une image de négligence et d''un manque de rigueur.

-   **Erreur** : Police illisible, trop de couleurs, design fantaisiste, blocs de texte trop denses, pas d''espaces.





-   **Erreur** : Envoyer la même lettre à toutes les entreprises sans l''adapter au poste et à l''entreprise.
-   **Conseil** : Personnalisez chaque lettre. Mentionnez le nom de l''entreprise, le poste précis, et expliquez pourquoi cette entreprise VOUS intéresse. (Voir leçon sur "Vous, Moi, Nous").

-   **Conseil** : La lettre complète le CV. Elle doit apporter des éléments nouveaux : votre motivation, votre personnalité, votre projet, la manière dont vos expériences s''articulent avec le poste. Illustrez vos compétences par des exemples concrets, mais n''énumérez pas.

#### c) Ne pas faire le lien avec le poste / l''entreprise
-   **Erreur** : Parler de soi sans montrer en quoi on est utile à l''entreprise et au poste.
-   **Conseil** : Expliquez comment vos compétences et votre parcours répondent aux besoins de l''entreprise et comment vous pouvez y contribuer.


-   **Erreur** : Se concentrer sur ce que l''entreprise peut vous apporter, sans montrer ce que vous pouvez lui apporter.



-   **Erreur** : Utiliser "Bonjour," ou "Cordialement" en début ou fin de lettre formelle. Ou des formules trop longues et incorrectes.
-   **Conseil** : Utilisez les formules standards : "Madame, Monsieur," ou "Madame/Monsieur [Nom]," et "Je vous prie d''agréer, Madame, Monsieur, l''expression de mes salutations distinguées." (Voir leçon précédente).


-   **Erreur** : Oublier la notion de "Vous, Moi, Nous", ou être trop direct si ce n''est pas la norme dans votre culture.




-   **N''hésitez pas à demander l''avis de plusieurs personnes**.


-   **L''excès de confiance** : Penser que votre français est parfait.
-   **Les généralités** : Manque de concret et d''exemples.
-   **Ne pas mentionner votre statut de séjour** : L''employeur doit savoir que vous êtes légalement en France.
-   **Oublier d''adapter le CV à la lettre de motivation** (et inversement).


-   🔗 [Défenseur des Droits : Discrimination à l''embauche](https://www.defenseurdesdroits.fr/fr/vos-droits/discriminations/emploi) - Informations importantes sur le contexte.


De nombreuses erreurs peuvent desservir votre lettre de motivation en France : une longueur excessive (plus d''une page), des fautes d''orthographe, une absence de personnalisation (lettre générique), la répétition du CV, ou des formules de politesse inappropriées. Adaptez la structure "Vous, Moi, Nous", utilisez un langage professionnel, et faites relire votre lettre par plusieurs personnes. Maîtriser ces pièges est absolument crucial pour présenter une lettre de motivation impeccable, percutante, et maximiser vos chances de décrocher un entretien en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 59 ---

-- COURS 60 : Législation travail étudiant
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Législation travail étudiant en France : Droits et limites',
  'legislation-travail-etudiant-france-droits-limites',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui souhaitent travailler pendant leurs études. La législation française encadre strictement le travail étudiant, avec des limites d''heures spécifiques pour les étudiants non-européens et des obligations de déclaration. Ne pas connaître ces règles, c''est risquer des problèmes avec votre titre de séjour, des amendes, ou même de travailler illégalement. Nous vous expliquerons la limite des 964 heures par an (60% d''un temps plein), la nécessité de déclarer ses heures si vous êtes hors UE, et le montant du SMIC horaire. Maîtriser cette législation est absolument crucial pour travailler en toute légalité, protéger vos droits de salarié, et ne pas compromettre votre statut étudiant en France.',
  'Travail étudiant France : limite 964h/an (60% temps plein), déclaration hors UE, SMIC horaire. Travaillez légalement et protégez votre statut !',
  'insertion_professionnelle',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la limite légale des 964 heures de travail par an pour étudiants non-européens", "Savoir comment déclarer ses heures de travail si l''on est hors UE", "Identifier le montant du SMIC horaire en France et ses implications", "Maîtriser les conseils pour travailler légalement et protéger son statut étudiant"]'::jsonb,
  '["Être titulaire d''un titre de séjour étudiant valide en France"]'::jsonb,
  NULL,
  NULL,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 60
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La limite des 964 heures par an (60%)',
  '# La limite des 964 heures par an (60%) pour les étudiants étrangers

## Pourquoi c''est important ?

En France, le travail étudiant est autorisé pour les étudiants étrangers, mais il est strictement encadré par la loi. La règle la plus importante à connaître est la **limite des 964 heures de travail par an**, ce qui représente l''équivalent de 60% d''un temps plein annuel. Ne pas respecter cette limite, c''est risquer de compromettre la validité de votre titre de séjour étudiant, de vous voir refuser son renouvellement, et même de travailler illégalement, avec toutes les sanctions que cela implique. Pour les étudiants internationaux, cette limite est absolument cruciale pour concilier études et travail, protéger votre statut, et éviter des problèmes majeurs avec l''administration.


-   Comprendre ce que représente cette limite en termes de pourcentage d''un temps plein.


Le droit de travailler est un avantage pour les étudiants étrangers, mais il est conditionné au fait que les études restent l''activité principale.

🔗 [Service-Public.fr : Le travail d''un étudiant étranger](https://www.service-public.fr/particuliers/vosdroits/F2713) - La page officielle sur le travail étudiant.




-   Cette limite concerne les **étudiants étrangers titulaires d''un titre de séjour "étudiant" ou d''un Visa Long Séjour valant Titre de Séjour (VLS-TS) "étudiant"**, qu''ils soient ressortissants d''un pays hors Espace Économique Européen (EEE) ou non.
-   **Citoyens de l''UE/EEE/Suisse** : Sont exemptés de cette limite et peuvent travailler à temps plein.

-   **Ce qui représente l''équivalent de 60% d''un temps plein annuel** (qui est de 1607 heures par an).

-   Cette limite est calculée sur une période de 12 mois consécutifs à partir de votre date d''arrivée en France (pour le VLS-TS), ou sur l''année universitaire (pour les renouvellements).
-   **Attention** : La limite de 964 heures est un plafond annuel. Vous ne pouvez pas faire 964 heures en 3 mois, puis ne plus travailler. L''administration surveille la régularité du travail.




-   L''administration considère que si vous travaillez plus de 60% d''un temps plein, vos études ne sont plus votre activité principale.


-   Un travail excessif pourrait impacter votre statut vis-à-vis de l''Assurance Maladie.




#### b) Activité d''Assistant de langue
-   Les étudiants étrangers recrutés comme assistants de langue bénéficient d''un régime spécifique qui leur permet de travailler au-delà de cette limite.

-   Après l''obtention d''un Master, si vous avez une APS "recherche d''emploi", vous pouvez travailler à temps partiel (toujours dans la limite de 964h/an) mais avec une souplesse pour un CDD ou CDI à temps plein. (Voir cours 8 sur l''APS).



-   Calculez le cumul de vos heures sur l''année pour ne pas dépasser la limite.

-   Informez votre employeur de votre statut d''étudiant et de la limite des 964 heures. Il doit également respecter cette législation.

-   Le travail au noir est illégal et vous expose à de nombreux risques (absence de protection sociale, pas de preuve d''activité, sanctions).




-   **Si vous approchez de la limite**, arrêtez de travailler quelques semaines ou mois avant la fin de l''année universitaire.


-   **Ne pas comprendre la différence entre 964 heures et "temps partiel"** (un temps partiel peut être supérieur à 60%).


-   🔗 [Service-Public.fr : Le travail d''un étudiant étranger](https://www.service-public.fr/particuliers/vosdroits/F2713) - La référence officielle.
-   🔗 [Ministère du Travail : L''emploi d''un étranger en France](https://travail-emploi.gouv.fr/droit-du-travail/remuneration/article/l-emploi-d-un-salarie-etranger-en-france) - Informations générales sur le droit du travail.
-   🔗 [Pôle Emploi : Recherche d''emploi pour étudiants](https://www.pole-emploi.fr/candidat/espace-etudiant.html) - Conseils pour la recherche de job étudiant.


La limite des 964 heures de travail par an (60% d''un temps plein) est une règle stricte pour les étudiants étrangers non-européens en France. Le non-respect de cette limite peut entraîner le refus de renouvellement de votre titre de séjour. Tenez un registre précis de vos heures, communiquez avec votre employeur, et privilégiez les emplois déclarés. Maîtriser cette législation est absolument crucial pour travailler en toute légalité, protéger votre statut étudiant, et concilier efficacement vos études et votre activité professionnelle en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Déclarer ses heures si on est hors UE',
  '# Déclarer ses heures si on est hors UE

## Pourquoi c''est important ?

Pour les étudiants internationaux ressortissants d''un pays **hors de l''Union Européenne (UE)**, en plus de respecter la limite des 964 heures par an, il est parfois nécessaire de déclarer son activité salariée et ses heures de travail auprès de l''administration française. Bien que cette exigence ait évolué et soit moins systématique qu''avant (grâce à la simplification du VLS-TS), certains employeurs ou certaines situations spécifiques peuvent encore la requérir, et l''administration peut à tout moment contrôler votre activité. Ne pas connaître cette obligation, c''est risquer des problèmes avec votre titre de séjour, des sanctions pour travail illégal, ou des incohérences dans votre dossier. Maîtriser cette procédure est absolument crucial pour travailler en toute légalité et protéger votre statut en France.


-   Comprendre l''obligation de déclaration de l''activité salariée pour les étudiants hors UE.
-   Savoir comment l''employeur déclare l''embauche d''un étudiant étranger.
-   Maîtriser les conseils pour s''assurer que votre travail est déclaré correctement.


La législation a évolué, notamment avec la simplification apportée par le Visa Long Séjour valant Titre de Séjour (VLS-TS) "étudiant", qui vaut autorisation de travail pour 964h/an. Cependant, l''administration peut toujours vérifier.

🔗 [Service-Public.fr : Le travail d''un étudiant étranger](https://www.service-public.fr/particuliers/vosdroits/F2713) - La page officielle sur le travail étudiant.


### 1. Le principe de l''autorisation de travail intégrée au VLS-TS étudiant


#### a) VLS-TS "étudiant" = autorisation de travail implicite
-   Votre Visa Long Séjour valant Titre de Séjour (VLS-TS) "étudiant" (validé par l''ANEF) ou votre carte de séjour "étudiant" vous dispense d''obtenir une autorisation de travail distincte pour travailler dans la limite des 964 heures par an (60% d''un temps plein).
-   Cela signifie que vous n''avez pas à faire de démarche spécifique auprès de la DREETS (Direction Régionale de l''Économie, de l''Emploi, du Travail et des Solidarités) pour être autorisé(e) à travailler dans cette limite.

#### b) L''employeur a des obligations de déclaration
-   Même si vous n''avez pas besoin d''une autorisation de travail spécifique, votre employeur a l''obligation de déclarer votre embauche auprès des organismes sociaux (URSSAF) et de l''administration.
-   C''est l''employeur qui doit vérifier que vous avez un titre de séjour valide et que vous respectez la limite des heures.




-   Si vous souhaitez travailler au-delà des 964 heures par an, votre employeur doit demander une autorisation de travail spécifique auprès de la DREETS. Cette demande est très difficile à obtenir pour un étudiant, car elle implique une vérification de l''"opposabilité de l''emploi" (prouver qu''aucun candidat français ou européen n''est disponible).

-   Certains contrats spécifiques (contrats d''apprentissage ou de professionnalisation, certains stages professionnels) peuvent nécessiter une autorisation de travail spécifique, même dans le cadre étudiant. Vérifiez toujours auprès du service des relations internationales de votre établissement.

#### c) Premier titre de séjour "vie privée et familiale" (si vous étiez étudiant avant)
-   Si vous changez de statut (ex: de "étudiant" à "vie privée et familiale"), les règles de l''autorisation de travail peuvent changer.

### 3. Comment l''employeur déclare l''embauche d''un étudiant étranger

Le rôle de l''employeur est primordial.

#### a) Déclaration Préalable à l''Embauche (DPAE)
-   Lorsqu''un employeur vous embauche, il doit obligatoirement effectuer une **Déclaration Préalable à l''Embauche (DPAE)** auprès de l''URSSAF. Cela formalise votre emploi et vous ouvre des droits sociaux (protection sociale, retraite).
-   **Importance** : C''est la preuve que votre emploi est déclaré et légal.

-   L''employeur a l''obligation de vérifier que votre titre de séjour vous autorise à travailler et que vous respectez la limite des heures.
-   Il doit conserver une copie de votre titre de séjour et vous déclarer comme "étudiant étranger" auprès de l''URSSAF.

-   Chaque mois, votre employeur vous remettra un bulletin de salaire sur lequel figurera le nombre d''heures travaillées et les cotisations sociales. Conservez-les précieusement.

### 4. Conseils pour s''assurer que votre travail est déclaré correctement


-   Lisez attentivement le contrat pour vérifier le nombre d''heures.

-   Exigez un bulletin de salaire chaque mois. C''est la preuve de votre activité déclarée.
-   Vérifiez que le nombre d''heures indiqué correspond à vos heures réelles.

-   Calculez le cumul sur l''année pour ne pas dépasser la limite des 964 heures.

-   Après quelques mois ou années de travail, vous pourrez créer un compte sur `info-retraite.fr` et vérifier que vos périodes d''emploi sont bien enregistrées par l''administration. C''est la preuve ultime que votre travail a été déclaré.




-   **Soyez transparent(e) avec votre employeur** sur votre statut et vos limites d''heures.
-   **N''ayez pas peur de poser des questions** à votre employeur ou au service RH.
-   **En cas de doute sur la légalité d''un emploi**, contactez l''Inspection du Travail.


-   **Travailler au noir (sans contrat ni déclaration)** : Illégal, dangereux, et peut entraîner l''expulsion.
-   **Ne pas vérifier que l''employeur vous a bien déclaré(e)**.


-   🔗 [Service-Public.fr : Le travail d''un étudiant étranger](https://www.service-public.fr/particuliers/vosdroits/F2713) - La référence officielle.
-   🔗 [Ministère du Travail : L''emploi d''un étranger en France](https://travail-emploi.gouv.fr/droit-du-travail/remuneration/article/l-emploi-d-un-salarie-etranger-en-france) - Informations générales pour les employeurs.
-   🔗 [URSSAF (Union de recouvrement des cotisations de Sécurité sociale et d''allocations familiales)](https://www.urssaf.fr/portail/home/employeur.html) - L''organisme de déclaration des embauches.


Si vous êtes étudiant(e) international(e) hors UE, votre VLS-TS ou titre de séjour "étudiant" vaut autorisation de travail dans la limite des 964 heures par an (60% d''un temps plein). Vous n''avez pas de démarche spécifique à faire, mais votre employeur a l''obligation de déclarer votre embauche (DPAE) et de respecter cette limite. Exigez un contrat de travail écrit et des bulletins de salaire chaque mois, et suivez attentivement vos heures pour ne pas dépasser la limite. Maîtriser ces règles est absolument crucial pour travailler en toute légalité et protéger votre statut étudiant en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le SMIC horaire : Combien allez-vous gagner ?',
  '# Le SMIC horaire : Combien allez-vous gagner ?

## Pourquoi c''est important ?

Si vous envisagez de travailler en France pendant vos études, il est absolument crucial de connaître le **SMIC (Salaire Minimum Interprofessionnel de Croissance) horaire**. C''est le salaire minimum légal en dessous duquel aucun employeur ne peut vous payer, quel que soit le type de contrat (CDD, CDI, temps partiel, job étudiant). Ne pas connaître le SMIC, c''est risquer de se faire sous-payer par un employeur malhonnête ou de ne pas pouvoir estimer correctement vos revenus potentiels. Pour les étudiants internationaux, comprendre le SMIC est fondamental pour calculer votre budget, connaître vos droits de salarié, et vous assurer un revenu juste et légal.


-   Définir ce qu''est le SMIC et son objectif.
-   Comprendre l''impact du SMIC sur votre salaire de job étudiant.





### 1. Qu''est-ce que le SMIC ?


-   **Objectif** : Garantir un pouvoir d''achat minimal aux travailleurs et lutter contre la pauvreté.

-   Le SMIC est réévalué chaque année, généralement au 1er janvier, et parfois en cours d''année en cas de forte inflation.

-   **Salaire brut** : C''est le salaire avant déduction des cotisations sociales et de l''impôt sur le revenu.
-   **Salaire net** : C''est le salaire que vous recevez réellement sur votre compte bancaire, après toutes les déductions.




-   Pour l''année 2025, le SMIC horaire brut est d''environ **11,80 €** (ce chiffre est indicatif et susceptible d''être mis à jour au 1er janvier 2025).
-   **C''est la base sur laquelle l''employeur calcule votre salaire.**

-   Après déduction des cotisations sociales (environ 22% du salaire brut), le SMIC horaire net est d''environ **9,20 €** (chiffre indicatif).
-   **C''est ce que vous allez effectivement percevoir sur votre compte bancaire**, avant prélèvement de l''impôt à la source (qui peut être nul si vos revenus sont faibles).

-   Pour un temps plein (35 heures par semaine, soit 151,67 heures par mois), le SMIC mensuel brut est d''environ 1789€, et le SMIC mensuel net d''environ 1400€ (chiffres indicatifs).
-   **Job étudiant** : Vous ne travaillerez pas à temps plein, donc votre salaire mensuel sera proportionnel au nombre d''heures travaillées.

🔗 [URSSAF : Montant du SMIC](https://www.urssaf.fr/portail/home/actualites/toute-lactualite-employeur/smic-au-1er-janvier-2024.html) - Les montants officiels publiés par l''URSSAF.



-   Votre salaire mensuel net = (Nombre d''heures travaillées par mois) x (SMIC horaire net)






-   Vérifiez le nombre d''heures travaillées et les déductions.

-   Votre employeur a l''obligation de vous déclarer.

-   Si vous suspectez que vous êtes payé(e) en dessous du SMIC, parlez-en d''abord à votre employeur.
-   Si la situation persiste, contactez l''Inspection du Travail ou un syndicat.




-   **N''acceptez jamais un emploi rémunéré en dessous du SMIC**.






',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 60 ---

-- COURS 61 : Trouver un Job Étudiant
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Trouver un Job Étudiant en France : Secteurs, sites et contrats',
  'trouver-job-etudiant-france-secteurs-sites-contrats',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui recherchent un job étudiant pour compléter leur budget. Le marché de l''emploi étudiant est dynamique, mais il est crucial de savoir où chercher, quels secteurs recrutent le plus, et quels types de contrats sont adaptés à votre statut. Ne pas avoir les bonnes informations, c''est risquer de perdre du temps avec des candidatures inadaptées ou de ne pas trouver d''emploi du tout. Nous vous expliquerons comment utiliser Jobaviz et d''autres sites spécialisés, identifier les secteurs qui recrutent (restauration, garde d''enfants), et comprendre les spécificités du contrat de travail étudiant. Maîtriser cette recherche est absolument crucial pour trouver un emploi légal, protéger vos droits, et concilier efficacement études et travail.',
  'Job étudiant France : Jobaviz, secteurs (restauration, garde), contrat de travail étudiant. Trouvez un job légal et protégez vos droits !',
  'insertion_professionnelle',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Utiliser les plateformes dédiées à l''emploi étudiant (Jobaviz)", "Identifier les secteurs qui recrutent le plus d''étudiants", "Comprendre les spécificités du contrat de travail étudiant", "Maîtriser les conseils pour optimiser sa recherche de job et concilier études/travail"]'::jsonb,
  '["Être titulaire d''un titre de séjour étudiant valide en France", "Avoir un CV et une lettre de motivation aux normes françaises"]'::jsonb,
  NULL,
  NULL,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 61
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Jobaviz et sites spécialisés',
  '# Jobaviz et sites spécialisés pour trouver un Job Étudiant

## Pourquoi c''est important ?

Pour trouver un job étudiant en France, il ne suffit pas de postuler partout. Il est absolument crucial de cibler les bonnes plateformes et les sites spécialisés qui regroupent des offres spécifiquement adaptées aux contraintes des étudiants (horaires aménagés, temps partiel). **Jobaviz**, le portail officiel du CROUS, est l''une de ces ressources incontournables. Ne pas utiliser ces outils, c''est risquer de perdre un temps précieux avec des annonces non pertinentes ou de passer à côté d''opportunités. Pour les étudiants internationaux, ces sites sont une mine d''or pour trouver un emploi légal, adapté à votre statut et à votre emploi du temps académique.


-   Définir ce qu''est Jobaviz et son rôle dans l''emploi étudiant.
-   Identifier d''autres sites spécialisés dans les jobs étudiants.
-   Maîtriser les conseils pour optimiser votre recherche d''emploi en ligne.






La référence pour l''emploi étudiant.

#### a) Qu''est-ce que Jobaviz ?
-   **Offres vérifiées** : Les offres d''emploi publiées sur Jobaviz sont vérifiées par le CROUS, ce qui garantit leur légalité et leur adaptation au statut étudiant.

-   **Fiabilité** : Les offres sont fiables et les employeurs sont généralement conscients des contraintes liées au statut étudiant (horaires, limite d''heures).
-   **Diversité des offres** : Vous y trouverez des jobs dans des secteurs variés (garde d''enfants, soutien scolaire, restauration, services, secrétariat).




#### a) Sites d''offres d''emploi généralistes avec filtre "étudiant"
-   **Indeed, LinkedIn, Pôle Emploi, APEC** (pour les stages et premiers emplois) : Ces plateformes ont souvent des filtres de recherche qui vous permettent de cibler les "jobs étudiants", les "temps partiels" ou les "stages".

-   **Baby-sitting** : Yoopies, Nounou-Top, Garde d''enfants.fr
-   **Restauration/Hôtellerie** : Jobrestauration.fr, L''Hôtellerie Restauration
-   **Événementiel** : Agences d''intérim spécialisées (Adecco, Manpower, Randstad)


### 3. Comment optimiser votre recherche d''emploi en ligne ?





-   N''hésitez pas à postuler directement auprès des entreprises (boutiques, restaurants, supermarchés, hôtels) qui vous intéressent, même s''ils n''ont pas d''annonce. Laissez un CV et une lettre de motivation.




-   **Commencez votre recherche d''emploi AVANT d''avoir besoin d''argent en urgence.**
-   **Mettez en avant votre statut d''étudiant** et vos contraintes horaires.
-   **N''oubliez pas la limite des 964 heures par an** si vous êtes étudiant(e) hors UE.


-   **Ne pas utiliser Jobaviz** : Vous manquez une source fiable d''offres.
-   **Ne pas vérifier la légalité de l''offre**.
-   **Dépasser la limite d''heures de travail** : Risque pour votre titre de séjour.
-   **Ne pas tenir compte de l''impact sur vos études** : Le job doit rester accessoire.


-   🔗 [CROUS : Trouver un job](https://www.crous.fr/trouver-un-job/) - Informations sur les services d''aide.
-   🔗 [Service-Public.fr : Le travail d''un étudiant étranger](https://www.service-public.fr/particuliers/vosdroits/F2713) - Rappel de la législation.
-   🔗 [LinkedIn (fr) : Recherche d''emploi](https://www.linkedin.com/jobs/search/) - Pour les offres professionnelles.


Pour trouver un job étudiant en France, utilisez des plateformes spécialisées comme Jobaviz (du CROUS) qui proposent des offres vérifiées et adaptées aux étudiants. Complétez votre recherche sur des sites généralistes avec filtres spécifiques et n''hésitez pas à faire du démarchage direct. Adaptez votre CV et votre lettre de motivation aux normes françaises, activez les alertes emploi, et soyez transparent(e) sur vos contraintes horaires. Maîtriser ces outils et secteurs (restauration, garde d''enfants, soutien scolaire) est absolument crucial pour trouver un emploi légal, protéger vos droits, et concilier efficacement études et travail en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Les secteurs qui recrutent (Restauration, Garde)',
  '# Les secteurs qui recrutent (Restauration, Garde d''enfants) pour les étudiants

## Pourquoi c''est important ?

Lorsque vous recherchez un job étudiant en France, il est absolument crucial de cibler les secteurs d''activité qui ont l''habitude de recruter des étudiants et qui proposent des horaires compatibles avec vos études. Ne pas connaître ces secteurs, c''est risquer de postuler à des offres inadaptées ou de perdre du temps avec des candidatures qui n''aboutiront pas. Pour les étudiants internationaux, des domaines comme la restauration, la garde d''enfants, le soutien scolaire, ou la vente sont souvent les plus accessibles et les plus flexibles. Maîtriser cette information est fondamental pour orienter efficacement votre recherche, maximiser vos chances de trouver un job, et concilier votre activité professionnelle avec vos contraintes académiques.




Certains secteurs d''activité ont un besoin constant de main-d''œuvre ponctuelle ou à temps partiel, ce qui est parfait pour les étudiants.



### 1. Le secteur de la restauration et de l''hôtellerie


-   **Agent(e) d''entretien** : Dans les hôtels, restaurants.



-   Sites d''emploi généralistes (Indeed, LinkedIn), sites spécialisés (Jobrestauration.fr), ou démarchage direct (déposer un CV dans les restaurants).

🔗 [L''Hôtellerie Restauration : Offres d''emploi](https://www.lhotellerie-restauration.fr/emplois) - Site spécialisé.

### 2. Le secteur de la garde d''enfants et du soutien scolaire


-   **Baby-sitter / Garde d''enfants à domicile** : Récupérer les enfants à l''école, les accompagner aux activités, les aider aux devoirs, jouer avec eux.

-   Souvent en fin d''après-midi après l''école, le soir, le mercredi, le week-end, ou pendant les vacances. Très compatible avec un emploi du temps étudiant.

-   La maîtrise d''une autre langue peut être un atout pour la garde d''enfants (familles expatriées).


🔗 [Yoopies.fr](https://www.yoopies.fr/) - Plateforme de garde d''enfants et soutien scolaire.



-   **Où chercher ?** : Sites d''emploi, candidatures spontanées en magasin, agences d''intérim.

-   **Types de postes** : Opérateur(trice) de centre d''appels, support client en ligne (parfois avec des horaires flexibles ou le soir).
-   **Où chercher ?** : Sites d''emploi, agences d''intérim.

-   **Où chercher ?** : Agences d''intérim.

#### d) Événementiel et Hôtes(ses) d''accueil
-   **Types de postes** : Hôte(sse) d''accueil pour des salons, concerts, événements sportifs (missions ponctuelles).
-   **Où chercher ?** : Agences d''intérim spécialisées, sites événementiels.

🔗 [Indeed.fr](https://fr.indeed.com/jobs?q=job+%C3%A9tudiant) - Pour la recherche d''emploi généraliste avec filtres.




-   Dans votre CV et LM, précisez vos disponibilités (ex: "Disponible les soirs en semaine à partir de 18h et le week-end").

-   N''oubliez pas la limite des 964 heures par an si vous êtes étudiant(e) hors UE.







-   **Dépasser la limite d''heures autorisées** : Risque pour votre titre de séjour.
-   **Ne pas tenir compte de l''impact sur vos études** : Le job doit rester accessoire.


-   🔗 [CROUS : Trouver un job](https://www.crous.fr/trouver-un-job/) - Informations sur les services d''aide.
-   🔗 [Service-Public.fr : Le travail d''un étudiant étranger](https://www.service-public.fr/particuliers/vosdroits/F2713) - Rappel de la législation.


Pour trouver un job étudiant en France, ciblez les secteurs qui recrutent (restauration, hôtellerie, garde d''enfants, soutien scolaire, vente, service client) et utilisez des plateformes spécialisées comme Jobaviz. Ces secteurs offrent souvent des horaires flexibles compatibles avec vos études. Adaptez votre candidature (CV, LM) pour mettre en avant votre disponibilité et vos compétences. Exigez un contrat de travail et des bulletins de salaire, et respectez la limite des 964 heures par an. Maîtriser cette recherche est absolument crucial pour trouver un emploi légal, protéger vos droits, et équilibrer efficacement études et vie professionnelle en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le contrat de travail étudiant',
  '# Le contrat de travail étudiant

## Pourquoi c''est important ?

Lorsque vous décrochez un job étudiant en France, la signature d''un contrat de travail est une étape absolument cruciale. Ce document juridique formalise votre emploi et définit vos droits et obligations en tant que salarié. Ne pas avoir de contrat de travail écrit, ou ne pas le lire attentivement, c''est risquer de travailler illégalement, de ne pas bénéficier de la protection sociale, de ne pas connaître vos horaires ou votre rémunération, et de ne pas pouvoir faire valoir vos droits en cas de litige. Pour les étudiants internationaux, souvent moins familiers avec le droit du travail français, maîtriser les spécificités du contrat de travail étudiant est fondamental pour garantir un emploi légal, protéger vos intérêts, et éviter les abus.


-   Définir ce qu''est un contrat de travail étudiant et ses types.


Le contrat de travail étudiant n''est pas un type de contrat spécifique, mais un aménagement des contrats classiques (CDD, CDI) pour tenir compte des contraintes académiques.

🔗 [Service-Public.fr : Le travail d''un étudiant étranger](https://www.service-public.fr/particuliers/vosdroits/F2713) - Informations sur les contrats.


### 1. Qu''est-ce qu''un contrat de travail étudiant ?


-   Il n''existe pas de "contrat étudiant" à proprement parler. Le job étudiant est généralement formalisé par un **Contrat à Durée Déterminée (CDD)** ou un **Contrat à Durée Indéterminée (CDI) à temps partiel**.

-   Il doit être rédigé en français. Si vous le demandez, l''employeur peut le traduire, mais seule la version française fera foi.



-   Nom de l''employeur, adresse de l''entreprise, numéro SIRET.



-   **Durée hebdomadaire/mensuelle** : Nombre d''heures travaillées par semaine ou par mois.

#### e) Période d''essai
-   Durée de la période d''essai (renouvelable ou non) : C''est une période où le contrat peut être rompu facilement par l''une ou l''autre partie.

-   Mention de la convention collective applicable (elle définit les droits spécifiques de votre secteur d''activité).





#### a) Déclaration à l''URSSAF
-   Votre employeur a l''obligation de vous déclarer à l''URSSAF (Déclaration Préalable à l''Embauche - DPAE). C''est ce qui rend votre emploi légal.


#### c) Respect des horaires d''études
-   Le contrat de travail doit tenir compte de vos contraintes académiques. L''employeur doit aménager vos horaires pour vous permettre de suivre vos cours et examens.

-   Chaque mois, l''employeur doit vous remettre un bulletin de salaire détaillé.



-   Si le français n''est pas votre langue maternelle, faites-vous relire par un ami francophone ou un professionnel (service carrière de l''université).

-   N''hésitez pas à demander des clarifications à l''employeur sur les horaires, la rémunération, les congés, ou toute clause que vous ne comprenez pas.

-   Le nombre d''heures (ne pas dépasser la limite si hors UE).
-   La durée du contrat et la période d''essai.

-   Une fois signé par les deux parties, l''employeur doit vous remettre un exemplaire du contrat. Conservez-le précieusement avec vos bulletins de salaire.




-   **N''acceptez pas un salaire inférieur au SMIC**.
-   **Soyez transparent(e) avec votre employeur** sur vos contraintes d''études.


-   **Signer un contrat sans l''avoir lu et compris**.


-   🔗 [Service-Public.fr : Le travail d''un étudiant étranger](https://www.service-public.fr/particuliers/vosdroits/F2713) - La référence officielle.


Le contrat de travail étudiant est généralement un CDD ou un CDI à temps partiel adapté à vos études. Il doit inclure toutes les informations obligatoires (poste, rémunération au moins au SMIC, heures, durée, etc.). Lisez-le attentivement, vérifiez que le nombre d''heures respecte la limite des 964 heures par an (si hors UE), et posez toutes vos questions avant de signer. Exigez un exemplaire signé et vos bulletins de salaire. Maîtriser son contrat est absolument crucial pour travailler en toute légalité, protéger vos droits de salarié, et concilier efficacement études et emploi en France.
',
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

