-- ==========================================
-- LOT 13 : Cours 61 à 65
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 61 ---

-- COURS 62 : Alternance et Apprentissage
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '4ccd0266-f9d3-4e48-9058-248a276668c3',
  'Alternance et Apprentissage en France : La voie de l''insertion pro',
  'alternance-apprentissage-france-voie-insertion-pro',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui envisagent une formation en alternance ou un contrat d''apprentissage. Ces dispositifs sont des voies privilégiées pour l''insertion professionnelle, combinant études et expérience en entreprise. Nous vous expliquerons la différence cruciale entre un contrat d''apprentissage et un contrat de professionnalisation, les avantages majeurs de l''alternance (salaire, formation payée), et les défis pour trouver une entreprise. Maîtriser ces informations est absolument crucial pour comprendre ce mode de formation, évaluer si l''alternance est faite pour vous, et maximiser vos chances de trouver un contrat pour votre avenir professionnel en France.',
  'Alternance/Apprentissage France : différence, salaire + école payée, trouver une entreprise. Votre tremplin pro !',
  'insertion_professionnelle',
  'avance',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la distinction entre contrat d''apprentissage et de professionnalisation", "Identifier les avantages majeurs de l''alternance (rémunération, gratuité de la formation)", "Savoir où chercher et comment trouver une entreprise d''accueil", "Maîtriser les conseils pour optimiser sa candidature en alternance"]'::jsonb,
  '["Avoir un titre de séjour étudiant valide en France", "Avoir un niveau de français suffisant pour l''entreprise et la formation"]'::jsonb,
  TRUE,
  4.8,
  500,
  3500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 62
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Différence Apprentissage vs Professionnalisation',
  '# Différence Apprentissage vs Professionnalisation (Alternance)

## Pourquoi c''est important ?

Les contrats d''apprentissage et de professionnalisation sont les deux principaux dispositifs de formation en alternance en France, combinant enseignement théorique en centre de formation et expérience pratique en entreprise. Pour les étudiants internationaux qui envisagent cette voie, il est absolument crucial de comprendre la **différence entre ces deux types de contrats**. Bien qu''ils aient des points communs, leurs objectifs, leur public cible, leurs durées et leurs règles sont différents. Ne pas saisir ces nuances peut vous orienter vers un contrat inadapté à votre profil ou à votre projet professionnel, ou vous faire passer à côté d''opportunités. Maîtriser cette distinction est fondamental pour faire le bon choix de formation en alternance.


-   Définir ce qu''est l''alternance et ses avantages.
-   Comprendre les spécificités du contrat d''apprentissage (public, âge, objectif).


L''alternance est une voie d''excellence qui permet d''acquérir un diplôme et une expérience professionnelle significative en même temps.

🔗 [Ministère du Travail : L''alternance](https://travail-emploi.gouv.fr/formation-professionnelle/alternance) - La page officielle sur l''alternance.


### 1. L''alternance : Un principe commun


-   L''alternance combine des périodes de formation théorique (en centre de formation ou université) et des périodes de travail pratique en entreprise.
-   Vous êtes salarié(e) de l''entreprise pendant la durée du contrat.

-   **Expérience professionnelle** : Acquisition d''une expérience concrète et valorisante.
-   **Diplôme** : Préparation d''un diplôme ou d''une qualification.
-   **Rémunération** : Vous êtes rémunéré(e) par l''entreprise.
-   **Formation payée** : Les frais de formation sont pris en charge par l''entreprise ou son OPCO (Opérateur de Compétences).

🔗 [Service-Public.fr : L''alternance](https://www.service-public.fr/particuliers/vosdroits/F2954) - Informations générales.

### 2. Le contrat d''apprentissage : Pour l''obtention d''un diplôme


-   **Jeunes de 16 à 29 ans révolus** : C''est la cible principale.
-   **Dérogations** : Des dérogations existent pour les personnes en situation de handicap, les créateurs ou repreneurs d''entreprise, ou les sportifs de haut niveau.
-   **Étudiants étrangers** : Les étudiants étrangers hors UE sont éligibles au contrat d''apprentissage s''ils ont un titre de séjour étudiant et s''ils respectent les conditions d''âge et de diplôme préparé (souvent à partir de la Licence pour le Master). Une autorisation de travail est délivrée spécifiquement pour le contrat d''apprentissage.

-   Obtention d''un **diplôme d''État** (CAP, Bac Pro, BTS, Licence, Master, Diplôme d''ingénieur, etc.) ou d''un titre professionnel enregistré au RNCP (Répertoire National des Certifications Professionnelles).


-   La rémunération est un pourcentage du SMIC, qui varie en fonction de votre âge et de l''année d''exécution du contrat. Elle est exonérée de certaines cotisations sociales.

🔗 [Service-Public.fr : Contrat d''apprentissage](https://www.service-public.fr/particuliers/vosdroits/F2954) - Informations détaillées.



-   **Jeunes de 16 à 25 ans révolus** (comme pour l''apprentissage).
-   **Demandeurs d''emploi de 26 ans et plus** (sans limite d''âge).
-   **Étudiants étrangers** : Également éligibles, avec les mêmes conditions de titre de séjour et d''autorisation de travail.

-   Acquisition d''une **qualification professionnelle** (diplôme, titre professionnel, CQP - Certificat de Qualification Professionnelle) pour favoriser l''insertion ou la réinsertion professionnelle.

-   La durée du contrat est de **6 mois à 12 mois** (peut aller jusqu''à 24 mois dans certains cas précis).

-   La rémunération est un pourcentage du SMIC ou du SMC (Salaire Minimum Conventionnel), qui varie en fonction de votre âge et de votre niveau de formation. Elle est généralement inférieure à celle de l''apprentissage pour les jeunes.




| Caractéristique       | Contrat d''apprentissage                                | Contrat de professionnalisation                         |
| **Public cible**      | Jeunes 16-29 ans (dérogations)                         | Jeunes 16-25 ans, demandeurs d''emploi 26+, minima sociaux |
| **Objectif**          | Obtention d''un **diplôme d''État ou titre RNCP**        | Acquisition d''une **qualification professionnelle**     |

#### a) Quand choisir l''apprentissage ?
-   Si votre objectif principal est d''obtenir un diplôme reconnu par l''État (Licence, Master, diplôme d''ingénieur, etc.).

-   Si votre objectif est d''acquérir une qualification professionnelle ou de vous insérer rapidement sur le marché du travail.
-   Si vous avez plus de 26 ans et êtes demandeur d''emploi.




-   **Renseignez-vous auprès des établissements de formation** qui proposent l''alternance. Ils vous guideront vers le bon contrat.
-   **Les "Centres de Formation d''Apprentis (CFA)"** sont les structures qui préparent aux diplômes en apprentissage.
-   **Pensez à votre statut après l''alternance** : Les contrats en alternance sont des CDD. Vous devrez chercher un emploi ou renouveler votre titre de séjour.
-   **Valorisez votre parcours international** : C''est un atout pour les entreprises.


-   **Ne pas avoir de titre de séjour adapté** : L''autorisation de travail est spécifique.
-   **Ne pas trouver d''entreprise d''accueil** : C''est le défi principal.


-   🔗 [Ministère du Travail : L''alternance](https://travail-emploi.gouv.fr/formation-professionnelle/alternance) - La référence officielle.
-   🔗 [Service-Public.fr : Contrat d''apprentissage](https://www.service-public.fr/particuliers/vosdroits/F2954) - Informations détaillées.
-   🔗 [Onisep.fr : Choisir l''alternance](https://www.onisep.fr/Choisir-mes-etudes/Apres-le-bac/L-alternance) - Guide pour les jeunes.
-   🔗 [Campus France : Le travail en France après les études](https://www.campusfrance.org/fr/etudiant-etranger-apres-le-diplome) - Peut aborder l''alternance.
-   🔗 [Légifrance : Code du Travail (Articles sur l''apprentissage et la professionnalisation)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006072050/) - Textes de loi.


Le contrat d''apprentissage et le contrat de professionnalisation sont les deux formes d''alternance en France. L''apprentissage vise l''obtention d''un diplôme d''État (16-29 ans, 6 mois à 3 ans), tandis que la professionnalisation cible l''acquisition d''une qualification (jeunes, demandeurs d''emploi, 6 à 12 mois). Les deux offrent expérience, diplôme et rémunération, avec les frais de formation pris en charge. Comprendre ces différences est absolument crucial pour choisir la voie la plus adaptée à votre projet professionnel et maximiser vos chances de réussite en alternance en France.
',
  1,
  60,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 62 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Avantages : Salaire + École payée',
  '# Avantages : Salaire + École payée (Alternance)

## Pourquoi c''est important ?

L''alternance (contrat d''apprentissage ou de professionnalisation) est une voie d''études extrêmement attractive en France, et ce, pour deux raisons majeures : vous êtes **rémunéré(e) en tant que salarié(e)** et vos **frais de formation sont pris en charge** par l''entreprise ou un organisme. Pour les étudiants internationaux, ces avantages sont absolument cruciaux. Ne pas les connaître, c''est risquer de s''endetter pour des études qui pourraient être gratuites, ou de ne pas pouvoir financer votre séjour sans un job étudiant contraignant. Maîtriser ces bénéfices est fondamental pour choisir une voie de formation qui allège considérablement votre budget, vous offre une expérience professionnelle concrète, et facilite votre insertion durable en France.


-   Savoir quels autres avantages sociaux et professionnels l''alternance offre.


L''alternance est une solution "gagnant-gagnant" pour l''étudiant et l''entreprise.

🔗 [Ministère du Travail : L''alternance, vos avantages](https://travail-emploi.gouv.fr/formation-professionnelle/alternance/vos-avantages-alternance) - La page officielle des avantages.



Vous êtes salarié(e) de l''entreprise.

-   En tant qu''alternant(e), vous avez le statut de **salarié(e)** de l''entreprise qui vous accueille.

    -   **L''année d''exécution du contrat** : Le pourcentage augmente avec les années d''alternance.
-   **Rémunération nette** : La rémunération des alternants est exonérée de cotisations sociales jusqu''à un certain plafond, ce qui signifie que le salaire net est très proche du brut, rendant la rémunération très attractive.

-   **SMIC net** : Rappelez-vous que le SMIC net est d''environ 9,20€/heure (voir cours 60.3). Votre rémunération sera donc un pourcentage de ce montant.


### 2. L''école payée : La gratuité de la formation


-   **Principe** : Les frais de scolarité de votre centre de formation (université, école, CFA) sont intégralement pris en charge par l''entreprise qui vous emploie ou par son OPCO (Opérateur de Compétences).
-   **Coût zéro pour vous** : Vous n''avez donc pas à payer les droits d''inscription ni les frais de formation (qui peuvent être très élevés dans certaines écoles privées).
-   **Avantage majeur** : Pour les étudiants internationaux, c''est un avantage financier colossal qui réduit drastiquement le coût de vos études en France.

-   Certains OPCO peuvent également prendre en charge une partie des frais de restauration, de transport ou d''hébergement liés à votre formation.

🔗 [Onisep.fr : Coût de l''alternance](https://www.onisep.fr/Choisir-mes-etudes/Financer-mes-etudes/Le-cout-de-l-alternance) - Informations sur le financement.


Plus qu''un simple salaire.



-   L''alternance est une voie royale vers l''emploi. De nombreux alternants sont embauchés par leur entreprise d''accueil à la fin de leur contrat.

-   Vous pouvez bénéficier de l''aide Mobili-Jeune d''Action Logement pour alléger votre loyer (sous certaines conditions).
-   Vous avez accès aux titres de transport professionnels (si l''entreprise les prend en charge).


-   Votre **contrat d''alternance** (apprentissage ou professionnalisation).
-   Votre **attestation d''inscription** en formation.


-   **Vérifiez que les frais de scolarité sont bien pris en charge** par l''entreprise ou l''OPCO.
-   **Exploitez l''expérience** : C''est votre chance d''apprendre.


-   **Payer des frais de scolarité** alors qu''ils devraient être pris en charge.
-   **Sous-estimer l''importance de l''expérience professionnelle** acquise en alternance.
-   **Ne pas chercher à transformer votre alternance en CDI** si c''est votre projet.


-   🔗 [Onisep.fr : Coût de l''alternance](https://www.onisep.fr/Choisir-mes-etudes/Financer-mes-etudes/Le-cout-de-l-alternance) - Informations sur le financement.


L''alternance offre des avantages financiers considérables : vous êtes rémunéré(e) en tant que salarié(e) (pourcentage du SMIC, souvent net de cotisations) et vos frais de formation sont entièrement pris en charge. En plus de cette aide financière cruciale, vous acquérez une expérience professionnelle valorisante, bénéficiez d''une protection sociale complète, et facilitez votre insertion professionnelle. Maîtriser ces bénéfices est fondamental pour alléger votre budget, financer vos études sans endettement, et bâtir une carrière solide en France. C''est une voie d''excellence à considérer sérieusement.
',
  2,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4102-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Trouver une entreprise : Le défi',
  '# Trouver une entreprise : Le défi de l''alternance

## Pourquoi c''est important ?

Si la formation en alternance est une voie très attractive en France (salaire + école payée), le principal défi pour les étudiants, et particulièrement pour les étudiants internationaux, est de **trouver une entreprise d''accueil**. Le processus de recherche est exigeant et demande de l''anticipation. Ne pas comprendre les attentes des entreprises, ne pas savoir où chercher efficacement, ou ne pas préparer une candidature adaptée, c''est risquer de ne pas trouver de contrat d''alternance et de devoir se réorienter. Maîtriser les techniques de recherche, les canaux pertinents, et les spécificités de la candidature en alternance est absolument crucial pour décrocher ce précieux contrat qui ouvrira les portes de votre insertion professionnelle en France.


-   Identifier les canaux de recherche d''entreprise (sites, salons, réseaux).
-   Savoir comment adapter son CV et sa lettre de motivation pour l''alternance.


La recherche d''alternance est une recherche d''emploi à part entière. Elle demande de la méthode et de la persévérance.

🔗 [Pôle Emploi : Recherche d''alternance](https://www.pole-emploi.fr/candidat/vos-demarches/preparer-sa-candidature/rechercher-une-alternance.html) - Conseils de Pôle Emploi.




-   L''entreprise cherche un(e) candidat(e) réellement motivé(e) par la formation ET par l''entreprise.
-   Elle veut s''assurer de votre engagement sur la durée du contrat.

-   Des compétences techniques liées au poste, mais aussi des qualités comme l''autonomie, l''adaptabilité, le sens de l''initiative, le travail en équipe.
-   **Pour les internationaux** : La maîtrise de l''anglais (ou d''autres langues) et l''ouverture interculturelle sont des atouts majeurs.

#### c) Potentiel et capacité d''apprentissage
-   L''entreprise sait que vous êtes en formation. Elle cherche un potentiel d''évolution et une capacité à apprendre rapidement.

#### d) Compatibilité avec l''équipe et la culture d''entreprise
-   Un bon "fit" (adéquation) avec l''équipe est essentiel.

### 2. Les canaux de recherche d''entreprise (sites, salons, réseaux)


-   **Universités, écoles, CFA** : La plupart des établissements qui proposent des formations en alternance ont des services "relations entreprises" ou des plateformes dédiées où les offres sont publiées. C''est le premier réflexe.

#### b) Les sites d''offres d''emploi généralistes et spécialisés
-   **Pôle Emploi, LinkedIn, Indeed, APEC** (pour les cadres/jeunes diplômés) : Utilisez les filtres "alternance", "apprentissage", "contrat de professionnalisation".
-   **Sites spécialisés dans l''alternance** : Alternance.emploi.gouv.fr, Contratd''alternance.fr, La Bonne Alternance (Pôle Emploi).
-   **Sites des grandes entreprises** : Les grands groupes ont des sections "alternance" ou "recrutement jeunes" sur leurs sites carrière.

-   De nombreux salons sont organisés spécifiquement pour l''alternance (souvent en ligne ou en physique). C''est l''occasion de rencontrer directement des recruteurs et d''échanger.

-   Si une entreprise vous intéresse, n''hésitez pas à envoyer un CV et une lettre de motivation spontanée, même s''il n''y a pas d''offre publiée.


🔗 [La Bonne Alternance (Pôle Emploi) : Site officiel](https://labonnealternance.pole-emploi.fr/) - Moteur de recherche d''offres.

### 3. Adapter son CV et sa lettre de motivation pour l''alternance


-   **Section "Formation recherchée"** : Indiquez clairement la formation en alternance que vous allez suivre (ex: "Master en alternance [Domaine] à l''Université X").

-   (Voir cours 59) : Utilisez la structure "Vous, Moi, Nous".
-   **Dans le "Vous"** : Montrez que vous connaissez l''entreprise et les missions du poste.
-   **Dans le "Moi"** : Expliquez pourquoi l''alternance est faite pour vous, et comment votre parcours vous a préparé.
-   **Dans le "Nous"** : Expliquez comment vous comptez vous investir dans l''entreprise et ce que vous en attendez (développement de compétences).



#### a) Préparez-vous aux questions spécifiques à l''alternance
-   "Pourquoi l''alternance ?"
-   "Pourquoi cette formation ?"
-   "Pourquoi notre entreprise ?"
-   "Comment allez-vous concilier études et travail ?"

-   La maîtrise de langues étrangères, votre ouverture d''esprit, votre adaptabilité sont des atouts précieux pour les entreprises à l''export ou qui ont des équipes internationales.


-   Sur l''équipe, les missions, la culture d''entreprise, l''accompagnement de l''alternant.


-   Vos **recherches sur l''entreprise**.


-   **Commencez votre recherche d''entreprise 6 à 8 mois avant la rentrée de votre formation**.
-   **N''attendez pas d''être admis(e) en formation** pour chercher une entreprise.
-   **Utilisez les services d''aide de votre établissement** (coachs carrière, ateliers CV/LM).


-   **Ne pas faire le lien entre la formation et l''entreprise**.
-   **Ne pas comprendre que c''est un emploi à part entière** avec des attentes.


-   🔗 [Ministère du Travail : L''alternance](https://travail-emploi.gouv.fr/formation-professionnelle/alternance) - La référence officielle.
-   🔗 [APEC (Association Pour l''Emploi des Cadres) : L''alternance](https://www.apec.fr/candidat/preparer-sa-candidature/l-alternance.html) - Conseils pour les cadres et jeunes diplômés.
-   🔗 [LinkedIn (fr) : Recherche d''alternance](https://www.linkedin.com/jobs/alternance-emplois/) - Pour les offres.


Trouver une entreprise d''accueil est le principal défi de l''alternance en France. Comprenez les attentes des recruteurs (motivation, compétences, potentiel), utilisez les sites des établissements de formation, les plateformes spécialisées (La Bonne Alternance) et les réseaux professionnels. Adaptez votre CV et votre lettre de motivation pour mettre en avant votre double projet (études et entreprise) et votre profil international. Commencez votre recherche 6 à 8 mois avant la rentrée. Maîtriser ces techniques est absolument crucial pour décrocher un contrat d''alternance et sécuriser votre insertion professionnelle en France.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 62 ---

-- COURS 63 : Les stages en France
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '536d583b-52d1-4925-9f3c-c3368b5b10ee',
  'Les stages en France : Convention obligatoire et gratification',
  'stages-france-convention-obligatoire-gratification',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui envisagent d''effectuer un stage. Le stage est une étape cruciale pour acquérir une première expérience professionnelle et faciliter l''insertion, mais il est strictement encadré par la loi (loi de 2014 et de 2021). Ne pas connaître les règles de la "convention de stage obligatoire", les conditions de "gratification minimale" (si le stage dure plus de 2 mois), et la distinction entre stage et job étudiant (pour éviter l''exploitation), c''est risquer de travailler illégalement ou de ne pas être payé(e) correctement. Maîtriser cette législation est absolument crucial pour faire un stage en toute légalité, protéger vos droits, et valoriser cette expérience.',
  'Stages France : convention obligatoire, gratification minimale (>2 mois), stage vs job. Protégez vos droits et évitez l''exploitation !',
  'insertion_professionnelle',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la nécessité et le contenu de la convention de stage obligatoire", "Identifier les conditions de gratification minimale pour les stages de plus de 2 mois", "Distinguer clairement un stage d''un job étudiant pour éviter l''exploitation", "Maîtriser les conseils pour trouver un stage de qualité et protéger ses droits"]'::jsonb,
  '["Être inscrit(e) dans un établissement d''enseignement supérieur français"]':: κάποιο 
  TRUE,
  4.8,
  600,
  4500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 63
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'La convention de stage obligatoire',
  '# La convention de stage obligatoire

## Pourquoi c''est important ?

En France, pour qu''un stage soit légal, il doit impérativement faire l''objet d''une **convention de stage**. Ce document tripartite (signé par l''étudiant, l''établissement d''enseignement et l''organisme d''accueil) n''est pas une simple formalité, c''est un contrat indispensable qui définit le cadre juridique du stage, vos droits et vos obligations. Ne pas avoir de convention de stage, c''est risquer de travailler illégalement, de ne pas être couvert(e) par la protection sociale, ou de ne pas pouvoir faire valoir vos droits en cas de problème. Pour les étudiants internationaux, cette convention est d''autant plus cruciale qu''elle est souvent exigée pour votre titre de séjour. Maîtriser son contenu et son importance est fondamental pour un stage légal et sécurisé.


-   Définir ce qu''est une convention de stage et son caractère obligatoire.





### 1. Qu''est-ce qu''une convention de stage et son caractère obligatoire ?


-   En France, tout stage intégré à un cursus pédagogique doit obligatoirement faire l''objet d''une convention de stage.
-   **Pas de stage sans convention !** Si une entreprise vous propose un stage sans convention, c''est illégal et à éviter.

    1.  **L''étudiant(e)** : Vous, le/la stagiaire.
    2.  **L''établissement d''enseignement** : Votre université ou école.
    3.  **L''organisme d''accueil** : L''entreprise, l''association ou l''administration où vous effectuez votre stage.





-   **L''étudiant(e)** : Nom, prénom, date de naissance, adresse, numéro de Sécurité Sociale (NIR), assurance responsabilité civile.
-   **L''établissement d''enseignement** : Nom, adresse, nom du responsable pédagogique du stage.
-   **L''organisme d''accueil** : Nom, adresse, numéro SIRET, nom du tuteur de stage et du responsable légal.

-   **Durée hebdomadaire de présence** : Nombre d''heures par semaine (ne doit pas dépasser la durée légale du travail, 35h).
-   **Modalités d''encadrement** : Nom du tuteur de stage (en entreprise) et du responsable pédagogique (à l''école).

-   Signatures des trois parties (étudiant, établissement, organisme d''accueil).

🔗 [Légifrance : Articles L124-1 à L124-20 du Code de l''éducation](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Les textes de loi sur les stages.



-   Pour les étudiants étrangers titulaires d''un VLS-TS "étudiant" ou d''une carte de séjour "étudiant", la convention de stage est une **pièce justificative cruciale**.


-   Les stages sont souvent obligatoires pour la validation de vos crédits ECTS et l''obtention de votre diplôme.



-   Lisez l''intégralité de la convention avant de la signer. Ne vous précipitez pas.

-   Assurez-vous que les missions décrites correspondent à ce qui vous a été promis et qu''elles sont bien pédagogiques, pas celles d''un salarié à temps plein.



#### e) N''hésitez pas à demander conseil




-   **N''acceptez jamais de commencer un stage sans convention signée par les 3 parties.**
-   **Conservez précieusement l''original de la convention de stage signée**.


-   **Commencer un stage sans convention** : C''est illégal et sans protection.
-   **Accepter des missions qui n''ont aucun lien avec votre formation** ou qui sont purement exécutives.
-   **Ne pas informer votre établissement** d''un stage.


-   🔗 [Légifrance : Articles L124-1 à L124-20 du Code de l''éducation](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Les textes de loi sur les stages.


La convention de stage est un document tripartite obligatoire qui encadre tout stage étudiant en France. Elle définit les missions (en lien avec votre formation), les dates, la gratification, et assure votre protection sociale. Lisez-la attentivement avant de signer, vérifiez toutes les informations, la conformité des missions et le montant de la gratification minimale (si > 2 mois). N''acceptez jamais un stage sans convention signée par les 3 parties. Maîtriser cette législation est absolument crucial pour un stage légal, sécurisé, et valorisant en France.
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
  'Gratification minimale (>2 mois)',
  '# Gratification minimale (>2 mois) pour les stages

## Pourquoi c''est important ?

En France, les stages ne sont pas toujours synonymes de travail non rémunéré. La loi encadre strictement la gratification (rémunération) des stagiaires, notamment lorsque la durée du stage dépasse 2 mois. Ne pas connaître cette obligation de gratification minimale, c''est risquer de travailler gratuitement pour une entreprise qui devrait vous payer, ou de ne pas pouvoir faire valoir vos droits. Pour les étudiants internationaux, souvent avec un budget serré, cette gratification est absolument cruciale pour financer votre séjour et valoriser votre travail. Maîtriser cette législation est fondamental pour un stage équitable, conforme à la loi, et qui contribue positivement à votre budget.


-   Identifier la durée de stage qui déclenche l''obligation de gratification.


La loi a renforcé les droits des stagiaires pour lutter contre les stages non gratifiés et l''abus de stages comme substitut à l''emploi.

🔗 [Service-Public.fr : Gratification d''un stage](https://www.service-public.fr/particuliers/vosdroits/F3025) - La page officielle.




-   Toute période de stage qui dépasse **deux mois consécutifs** (ou, non consécutifs, à partir de 44 jours ou 308 heures de présence effective au sein du même organisme d''accueil) au cours de la même année scolaire ou universitaire doit obligatoirement faire l''objet d''une **gratification minimale**.
-   **En dessous de 2 mois** : Le stage n''est pas obligatoirement gratifié, mais l''organisme d''accueil peut le faire volontairement.


🔗 [Ministère du Travail : La gratification d''un stagiaire](https://travail-emploi.gouv.fr/droit-du-travail/le-contrat-de-travail/le-stage-en-entreprise/la-gratification-du-stagiaire) - Informations officielles.



-   Il est d''environ **4,35 € par heure de présence effective** (chiffre indicatif pour 2025, à vérifier chaque année).
-   Ce montant est un minimum. L''organisme d''accueil peut vous verser une gratification supérieure.

-   Gratification mensuelle = (Nombre d''heures de présence effective par mois) x (Gratification horaire minimale)






-   L''organisme d''accueil doit vous remettre un document (souvent un bulletin de paie simplifié ou une attestation de gratification) chaque mois, détaillant le montant versé.

### 4. Que faire si la gratification n''est pas respectée ?


#### a) Contactez l''organisme d''accueil
-   Parlez-en d''abord à votre tuteur de stage ou au service RH. Il peut s''agir d''une erreur.

#### b) Informez votre établissement d''enseignement
-   Le service des stages de votre université/école est votre allié. Ils peuvent intervenir auprès de l''organisme d''accueil.

#### c) Contactez l''Inspection du Travail
-   Si le problème persiste, l''Inspection du Travail peut être saisie. Elle a le pouvoir de contrôler les entreprises et d''exiger le respect de la loi.

#### d) Saisir les Prud''hommes
-   En dernier recours, vous pouvez saisir le Conseil de Prud''hommes pour réclamer votre dû.




-   **N''hésitez pas à demander conseil au service des stages de votre établissement**.


-   **Accepter un stage non gratifié** s''il dépasse 2 mois.
-   **Travailler plus d''heures** que prévu dans la convention sans accord ni paiement.
-   **Confondre gratification de stage et salaire** : La gratification n''est pas un salaire à proprement parler, elle est exonérée de certaines charges.


-   🔗 [Service-Public.fr : Gratification d''un stage](https://www.service-public.fr/particuliers/vosdroits/F3025) - La référence officielle.
-   🔗 [Légifrance : Articles L124-6 à L124-18 du Code de l''éducation](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Les textes de loi sur la gratification.


La gratification minimale est obligatoire pour tout stage de plus de 2 mois en France, à raison d''environ 4,35€ par heure de présence effective (chiffre indicatif 2025). Ce montant doit figurer sur votre convention de stage et être versé mensuellement. Vérifiez la conformité de votre gratification et n''hésitez pas à la réclamer si elle n''est pas respectée. Maîtriser cette législation est absolument crucial pour un stage équitable, qui contribue positivement à votre budget, et pour protéger vos droits de stagiaire en France.
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
  'Stage vs Job : Ne pas se faire exploiter',
  '# Stage vs Job : Ne pas se faire exploiter

## Pourquoi c''est important ?

La distinction entre un "stage" et un "job étudiant" (emploi salarié) est absolument fondamentale en France. Malheureusement, certains employeurs peu scrupuleux peuvent tenter de déguiser un emploi en stage pour bénéficier d''avantages fiscaux ou pour s''affranchir des obligations du Code du travail. Ne pas comprendre cette différence, c''est risquer de se faire exploiter : travailler sans contrat, sans protection sociale, sans respect des horaires, et avec une gratification inférieure au SMIC (voire pas de rémunération du tout). Pour les étudiants internationaux, souvent désireux d''acquérir de l''expérience, cette vulnérabilité est accrue. Maîtriser cette distinction est absolument crucial pour protéger vos droits, éviter l''exploitation, et garantir que votre expérience professionnelle en France est légale et valorisante.


-   Définir les critères légaux qui distinguent un stage d''un emploi salarié.
-   Identifier les signes d''un "faux stage" (travail déguisé).
-   Maîtriser les conseils pour refuser l''exploitation et faire valoir vos droits.






L''objectif est d''apprendre et de développer des compétences.


-   (Voir leçon 63.1) : Un stage est toujours encadré par une convention de stage signée par 3 parties (étudiant, établissement, organisme d''accueil).

-   Les missions du stagiaire doivent être en lien direct avec le programme de formation et ne doivent pas correspondre à un poste de travail permanent (remplacement d''un salarié absent, exécution de tâches régulières et productives).

-   (Voir leçon 63.2) : La gratification est obligatoire pour les stages de plus de 2 mois et est un montant minimal (environ 4,35€/heure). Elle n''est pas un salaire.

-   Le stagiaire doit avoir un tuteur dans l''entreprise et un responsable pédagogique dans son établissement.

🔗 [Légifrance : Articles L124-1 à L124-20 du Code de l''éducation](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Les textes de loi sur les stages.


L''objectif est de produire et d''être rémunéré.

-   Il y a un lien de subordination entre l''employeur et le salarié.

-   Les missions du salarié sont productives, régulières, et s''inscrivent dans l''organisation normale de l''entreprise.

-   Il y a des cotisations sociales et des droits (congés payés, mutuelle d''entreprise).


### 3. Identifier les signes d''un "faux stage" (travail déguisé)


-   **Signal d''alerte majeur** : Si l''entreprise vous propose un "stage" sans convention de stage, c''est probablement un emploi déguisé et illégal.


#### c) Absence d''encadrement ou de tuteur

-   Un "stage" très long et faiblement gratifié (ou pas du tout) pour des missions de salarié.

-   Les stagiaires ont des limites d''heures et de jours de présence.

🔗 [Inspection du Travail : Le stage et l''emploi](https://travail-emploi.gouv.fr/droit-du-travail/le-contrat-de-travail/le-stage-en-entreprise/le-stage-ou-lemploi-distinguer-les-deux) - Comment faire la différence.

### 4. Comment refuser l''exploitation et faire valoir vos droits ?


-   C''est la règle d''or. N''acceptez jamais de commencer une activité présentée comme un stage sans convention signée par les 3 parties.



#### d) Contactez l''Inspection du Travail
-   Si vous estimez être victime d''un "faux stage" ou d''exploitation (travail non déclaré, sous-paiement, horaires abusifs), contactez l''Inspection du Travail. C''est confidentiel.

-   E-mails, annonces, conventions, relevés d''heures.


-   Les **annonces d''emploi/stage**.
-   Vos **relevés d''heures**.


-   **N''ayez pas peur de refuser une offre illégale** : Il y a d''autres opportunités.
-   **Demandez des feedbacks à vos amis** ou aux services d''aide.


-   **Accepter de travailler "au noir"** (sans contrat ni convention) : C''est illégal et sans protection.
-   **Ne pas réagir** face à une situation d''exploitation.
-   **Sous-estimer l''importance de l''établissement de formation** dans le cadre du stage.


-   🔗 [Légifrance : Articles L124-1 à L124-20 du Code de l''éducation](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Les textes de loi sur les stages.


La distinction entre un stage (période de formation pédagogique avec convention obligatoire et gratification minimale au-delà de 2 mois) et un job étudiant (contrat de travail salarié avec salaire au moins au SMIC) est absolument cruciale. Méfiez-vous des "faux stages" qui déguisent un emploi non conforme à la législation. N''acceptez jamais de commencer une activité sans convention ou contrat écrit. Informez votre établissement et contactez l''Inspection du Travail en cas d''exploitation. Maîtriser ces différences est fondamental pour protéger vos droits, éviter l''exploitation, et garantir une expérience professionnelle légale et valorisante en France.
',
  3,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 63 ---

-- COURS 64 : Statut Auto-entrepreneur
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '05da0c51-d1af-414c-964c-2f192e22095c',
  'Statut Auto-entrepreneur en France : Créer son activité étudiante',
  'statut-auto-entrepreneur-france-creer-activite-etudiante',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui envisagent de créer leur propre activité indépendante sous le régime de la micro-entreprise (anciennement auto-entrepreneur). Cette option offre flexibilité et simplicité administrative, mais elle est soumise à des conditions spécifiques, notamment la compatibilité avec votre visa étudiant. Nous vous expliquerons si le statut est cumulable avec votre titre de séjour, la procédure de création sur le site de l''URSSAF, et les obligations de déclaration de chiffre d''affaires mensuelle ou trimestrielle. Maîtriser le statut d''auto-entrepreneur est absolument crucial pour lancer votre activité en toute légalité, comprendre vos obligations fiscales et sociales, et financer vos études de manière autonome.',
  'Auto-entrepreneur étudiant : cumulable avec visa ? Création URSSAF, déclaration CA mensuelle. Lancez votre activité légalement !',
  'insertion_professionnelle',
  'avance',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la compatibilité du statut auto-entrepreneur avec le visa étudiant", "Savoir comment créer son statut sur le site de l''URSSAF", "Maîtriser les obligations de déclaration de chiffre d''affaires (mensuelle/trimestrielle)", "Identifier les avantages et inconvénients de l''auto-entreprise pour les étudiants internationaux"]'::jsonb,
  '["Être titulaire d''un titre de séjour étudiant valide en France", "Avoir une idée d''activité indépendante"]'::jsonb,
  TRUE,
  4.8,
  350,
  2500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 64
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Cumulable avec visa étudiant ?',
  '# Statut Auto-entrepreneur : Cumulable avec visa étudiant ?

## Pourquoi c''est important ?

Le régime de la micro-entreprise (anciennement auto-entrepreneur) offre une grande flexibilité pour lancer une activité indépendante en France. Pour les étudiants internationaux, cette option peut être très attractive pour financer leurs études, développer des compétences, ou tester un projet entrepreneurial. Cependant, il est absolument crucial de comprendre si le statut d''auto-entrepreneur est **cumulable avec votre visa étudiant** et quelles sont les conditions à respecter. Ne pas connaître ces règles, c''est risquer de se retrouver en situation irrégulière, de compromettre le renouvellement de votre titre de séjour, ou de subir des sanctions. Maîtriser cette compatibilité est fondamental pour lancer votre activité en toute légalité et sérénité.


-   Savoir comment l''administration évalue la compatibilité entre études et activité indépendante.


La loi française permet aux étudiants étrangers de cumuler études et activité professionnelle indépendante, mais l''activité indépendante ne doit pas remettre en cause le caractère principal des études.

🔗 [Service-Public.fr : L''auto-entrepreneur étranger](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations générales.



C''est possible, mais encadré.

#### a) Pour les ressortissants de l''UE/EEE/Suisse
-   Ils peuvent exercer une activité d''auto-entrepreneur sans restriction particulière, car ils n''ont pas besoin de titre de séjour pour travailler en France.

-   **C''est autorisé, mais sous conditions** : Votre titre de séjour "étudiant" (ou VLS-TS validé) vous autorise à exercer une activité salariée dans la limite des 964 heures par an (60% d''un temps plein). L''activité non salariée (auto-entrepreneur) est également possible, mais elle doit rester **accessoire** à vos études.
-   **Le caractère principal des études** : L''administration (préfecture) doit pouvoir constater que vos études restent votre activité principale.




#### a) Le temps consacré à l''activité
-   L''activité d''auto-entrepreneur ne doit pas vous prendre un temps excessif qui remettrait en cause votre assiduité et votre réussite aux études.
-   Il n''y a pas de limite horaire fixe pour l''auto-entrepreneur comme pour le salarié, mais l''administration peut évaluer si l''activité est "accessoire".

-   Les revenus tirés de votre activité d''auto-entrepreneur ne doivent pas être si importants qu''ils deviennent votre source principale de subsistance, dépassant vos ressources déclarées pour vos études.
-   Le chiffre d''affaires (CA) annuel de l''auto-entreprise est plafonné (ex: environ 77 700€ pour les services, 188 700€ pour la vente de marchandises). Vous devrez rester largement en dessous de ces plafonds pour ne pas remettre en cause votre statut étudiant.

-   Lors du renouvellement de votre titre de séjour étudiant, la préfecture examinera votre activité d''auto-entrepreneur.
-   Vous devrez prouver que vous êtes toujours étudiant(e) assidu(e), que votre activité est accessoire, et que vous avez des ressources suffisantes pour vivre (en dehors de l''auto-entreprise, ou en complément si cela ne dépasse pas les seuils).

🔗 [Service-Public.fr : Le titre de séjour "étudiant"](https://www.service-public.fr/particuliers/vosdroits/F22312) - Conditions de renouvellement.

### 3. Comment l''administration évalue la compatibilité ?


    -   Vos relevés de notes et certificats de scolarité (preuves d''assiduité et de résultats).
    -   Vos déclarations de chiffre d''affaires d''auto-entrepreneur.
    -   Vos avis d''imposition.
-   **Cohérence** : L''administration cherchera la cohérence entre votre activité d''auto-entrepreneur et vos études. Une activité qui complète votre formation peut être un atout.



#### a) Déclarez votre activité d''auto-entrepreneur
-   C''est obligatoire. (Voir leçon suivante sur la création).

-   Ne laissez pas votre activité d''auto-entrepreneur empiéter sur vos cours, vos TD, et vos révisions. Vos études sont prioritaires.

#### c) Ne dépassez pas les plafonds de chiffre d''affaires
-   Restez bien en dessous des plafonds annuels pour ne pas être requalifié(e) ou attirer l''attention.


-   Lors du renouvellement de votre titre de séjour, mentionnez votre activité d''auto-entrepreneur et expliquez comment elle s''articule avec vos études.


-   Vos **déclarations de chiffre d''affaires auto-entrepreneur**.


-   **Si votre projet prend de l''ampleur**, envisagez un changement de statut vers "Passeport Talent" ou "Entrepreneur/Profession libérale" (si vous avez un Master et un projet solide) avant la fin de vos études.
-   **Demandez conseil** : Au service carrière de votre université, à des associations d''aide à la création d''entreprise.


-   **Ne pas déclarer votre activité d''auto-entrepreneur** : Illégal.
-   **Laisser l''activité empiéter sur vos études** et compromettre votre assiduité/résultats.


-   🔗 [Service-Public.fr : L''auto-entrepreneur étranger](https://www.service-public.fr/particuliers/vosdroits/F3025) - La référence officielle.
-   🔗 [CCI France (Chambres de Commerce et d''Industrie)](https://www.cci.fr/) - Peuvent vous conseiller sur la création d''entreprise.
-   🔗 [BPI France Création (ex-APCE)](https://bpifrance-creation.fr/) - Plateforme d''aide à la création.
-   🔗 [Légifrance : Code de l''entrée et du séjour des étrangers et du droit d''asile (CESEDA) - Articles sur le travail des étudiants](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041280362/) - Textes de loi.
-   🔗 [Campus France : Le travail en France après les études](https://www.campusfrance.org/fr/etudiant-etranger-apres-le-diplome) - Peut aborder la création d''entreprise.


Le statut d''auto-entrepreneur est cumulable avec votre visa étudiant en France, à condition que votre activité reste accessoire à vos études. Vous devrez la déclarer (URSSAF), maintenir votre assiduité académique, et ne pas générer des revenus excessifs. Votre préfecture examinera la compatibilité lors du renouvellement de votre titre de séjour. Maîtriser ces conditions est absolument crucial pour lancer votre activité en toute légalité, comprendre vos obligations (fiscales et sociales), et financer vos études de manière autonome et sereine en France.
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
  'Création du statut sur l''URSSAF',
  '# Création du statut Auto-entrepreneur sur l''URSSAF

## Pourquoi c''est important ?

Si vous avez décidé de devenir auto-entrepreneur en France (micro-entreprise), la première démarche administrative obligatoire est de déclarer la création de votre activité auprès de l''URSSAF (Union de recouvrement des cotisations de Sécurité sociale et d''allocations familiales). Ne pas faire cette déclaration, c''est exercer une activité illégale ("travail au noir"), sans protection sociale, et s''exposer à des sanctions graves. Pour les étudiants internationaux, cette étape est absolument cruciale pour légaliser votre activité, obtenir un numéro SIRET (votre identifiant professionnel), et comprendre vos obligations fiscales et sociales dès le début. Maîtriser cette procédure est fondamental pour lancer votre entreprise en toute conformité et sérénité.


-   Comprendre le rôle de l''URSSAF dans la déclaration de la micro-entreprise.
-   Identifier les informations clés à renseigner (nature de l''activité, date de début).


La création d''une micro-entreprise est une démarche simplifiée qui se fait entièrement en ligne sur le site de l''URSSAF ou via le guichet unique de l''INPI (Institut National de la Propriété Industrielle).



### 1. Le rôle de l''URSSAF dans la déclaration de la micro-entreprise


-   L''URSSAF est l''organisme chargé de collecter les cotisations et contributions sociales des entreprises (y compris les micro-entrepreneurs).
-   C''est auprès d''elle que vous déclarez la création de votre micro-entreprise.

#### b) Guichet unique de l''INPI
-   Depuis 2023, toutes les démarches de création, modification ou cessation d''activité pour les entreprises (y compris les micro-entreprises) se font via le guichet unique électronique de l''INPI (`formalites.entreprises.gouv.fr`).
-   Ce guichet unique transmet ensuite vos informations à l''URSSAF et aux autres administrations (Impôts, INSEE).

🔗 [INPI : Guichet unique pour les formalités d''entreprise](https://formalites.entreprises.gouv.fr/) - Le portail pour la création.



#### a) Accéder au guichet unique de l''INPI

-   Cliquez sur "Déclarer une entreprise" ou "Commencer la formalité".
-   Sélectionnez "Création d''entreprise" et le type d''activité "Micro-entrepreneur" (ou "Entrepreneur individuel").

#### c) Renseigner les informations d''identité et de situation
-   **Votre statut de séjour** : Précisez que vous êtes étudiant(e) international(e) et titulaire d''un titre de séjour "étudiant".
    -   **Nature de l''activité** : Décrivez précisément ce que vous allez faire (ex: "cours de langue", "développement web", "graphisme", "vente de bijoux artisanaux").
    -   **Date de début d''activité** : La date à laquelle vous commencez réellement votre activité.
    -   **Lieu d''exercice** : Votre domicile, ou une adresse spécifique.
    -   **Versement libératoire de l''impôt sur le revenu** : C''est une option qui permet de payer l''impôt sur le revenu en même temps que les cotisations sociales, en pourcentage de votre chiffre d''affaires. Cela simplifie la gestion. Vérifiez les conditions d''éligibilité.
    -   **Franchise en base de TVA** : Si votre chiffre d''affaires est en dessous de certains seuils, vous n''avez pas à facturer la TVA. C''est un avantage.

-   Copie de votre pièce d''identité (passeport, titre de séjour).
-   Une photo d''identité.


### 3. Obtention du numéro SIRET et des informations de l''URSSAF


-   Après quelques jours ou semaines, l''INSEE (Institut National de la Statistique et des Études Économiques) vous enverra par courrier postal votre **numéro SIRET** (Système d''Identification du Répertoire des Établissements) et votre numéro SIREN (Système d''Identification du Répertoire des Entreprises).

#### b) Attestation d''affiliation
-   L''URSSAF vous enverra également une attestation d''affiliation au régime micro-entrepreneur.

-   Une fois votre SIRET reçu, créez votre espace personnel sur le site de l''URSSAF dédié aux auto-entrepreneurs. C''est via cet espace que vous ferez vos déclarations de chiffre d''affaires.


-   Une **photo d''identité**.


-   **Conservez précieusement tous les courriers** reçus de l''URSSAF, de l''INSEE et des impôts.
-   **Ne démarrez pas votre activité avant d''avoir votre numéro SIRET**.


-   **Dépasser les plafonds de chiffre d''affaires** : Vous sortirez du régime micro-entreprise.


-   🔗 [INPI : Guichet unique pour les formalités d''entreprise](https://formalites.entreprises.gouv.fr/) - Le portail de création.
-   🔗 [Service-Public.fr : L''auto-entrepreneur](https://www.service-public.fr/particuliers/vosdroits/F3025) - Guide officiel.
-   🔗 [BPI France Création : L''auto-entrepreneur](https://bpifrance-creation.fr/encyclopedie/micro-entreprise) - Conseils et guides.
-   🔗 [CCI France (Chambres de Commerce et d''Industrie)](https://www.cci.fr/) - Peuvent vous accompagner.


La création du statut d''auto-entrepreneur se fait en ligne via le guichet unique de l''INPI, qui transmet ensuite l''information à l''URSSAF. Vous devrez renseigner vos informations d''identité, de statut étudiant, et la nature de votre activité. Vous obtiendrez votre numéro SIRET et une attestation d''affiliation. Maîtriser cette procédure est absolument crucial pour lancer votre activité en toute légalité, obtenir votre identifiant professionnel, et comprendre vos obligations fiscales et sociales en France. Ne démarrez jamais votre activité avant d''avoir effectué cette déclaration.
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
  'Déclaration de chiffre d''affaires mensuelle',
  # Déclaration de chiffre d''affaires mensuelle ou trimestrielle (Auto-entrepreneur)

## Pourquoi c''est important ?

En tant qu''auto-entrepreneur en France (micro-entreprise), l''une de vos obligations les plus importantes est la **déclaration régulière de votre chiffre d''affaires (CA)**. Cette déclaration doit être faite mensuellement ou trimestriellement, même si votre CA est nul. Ne pas la faire, ou la faire de manière incorrecte ou en retard, peut entraîner des pénalités financières, des majorations, ou la perte de votre statut de micro-entrepreneur. Pour les étudiants internationaux, cette déclaration est absolument cruciale pour rester en conformité avec l''URSSAF, calculer vos cotisations sociales et votre impôt sur le revenu, et protéger votre statut. Maîtriser cette procédure est fondamental pour une gestion saine et légale de votre activité indépendante.


-   Comprendre l''obligation de déclaration de chiffre d''affaires (CA) pour l''auto-entrepreneur.
-   Savoir comment effectuer sa déclaration en ligne sur le site de l''URSSAF.


La déclaration de chiffre d''affaires est la base du régime micro-social et micro-fiscal. C''est le document qui permet de calculer vos charges sociales et votre impôt.

🔗 [URSSAF : Déclarer mon chiffre d''affaires](https://www.urssaf.fr/portail/home/autoentrepreneur/mes-cotisations/declarer-et-payer/declarer-mon-chiffre-daffaires.html) - Le portail de déclaration.


### 1. L''obligation de déclaration de chiffre d''affaires (CA)


-   Que vous ayez réalisé du chiffre d''affaires ou non, vous avez l''obligation de déclarer votre CA à l''URSSAF (ou à la SSI - Sécurité Sociale des Indépendants) selon la périodicité choisie.



### 2. Comment effectuer sa déclaration en ligne sur le site de l''URSSAF ?


-   Si c''est votre première connexion, vous devrez peut-être activer votre compte avec un code envoyé par courrier.

#### b) Accéder à la rubrique "Déclarer et Payer"
-   Dans votre tableau de bord, cherchez la section dédiée à la déclaration de chiffre d''affaires.

#### c) Sélectionner la période et le type d''activité
-   Choisissez la période concernée par votre déclaration (ex: "Janvier 2025" si déclaration mensuelle).
-   Indiquez le type de CA : "Prestations de services" (pour les services), "Ventes de marchandises" (pour la vente), "Professions libérales".

#### d) Saisir votre chiffre d''affaires
-   **Montant net** : Saisissez le chiffre d''affaires **net** (sans TVA si vous êtes en franchise en base) réalisé pendant la période.
-   **CA nul** : Si vous n''avez pas réalisé de chiffre d''affaires pendant la période, vous devez obligatoirement déclarer "0". Ne pas faire de déclaration, même nulle, entraîne des pénalités.


-   Le paiement des cotisations et de l''impôt se fait en ligne, généralement par prélèvement bancaire automatique après la validation de la déclaration.

### 3. Les conséquences d''une non-déclaration ou d''une déclaration en retard


-   Si vous ne déclarez pas votre chiffre d''affaires, même s''il est nul, vous risquez une pénalité de **52€ par déclaration manquante** (chiffre indicatif, à vérifier).

-   Des majorations peuvent s''appliquer sur vos cotisations et impôts si la déclaration est faite en retard.

-   En cas de manquements répétés, l''URSSAF peut vous radier du régime micro-entrepreneur, ce qui peut vous faire basculer vers un régime plus contraignant.







-   C''est une obligation légale.


-   **Contactez l''URSSAF** (via la messagerie de votre espace) si vous avez des questions ou si vous rencontrez des difficultés techniques.
-   **Contactez votre CCI ou CMA** (Chambre de Commerce et d''Industrie ou Chambre de Métiers et de l''Artisanat) pour un accompagnement.




-   **Vérifiez le montant du versement libératoire** (si vous avez opté pour cette option fiscale) pour l''impôt sur le revenu.
-   **L''URSSAF propose des tutoriels vidéo** pour aider à la déclaration.


-   **Ne pas déclarer son CA** : C''est la faute la plus grave.
-   **Oublier de déclarer "0"** si pas de CA.
-   **Ignorer les courriers de l''URSSAF**.


-   🔗 [URSSAF : Déclarer mon chiffre d''affaires](https://www.urssaf.fr/portail/home/autoentrepreneur/mes-cotisations/declarer-et-payer/declarer-mon-chiffre-daffaires.html) - La référence officielle.


La déclaration de votre chiffre d''affaires (CA) mensuelle ou trimestrielle est une obligation essentielle en tant qu''auto-entrepreneur en France. Elle se fait en ligne sur votre espace URSSAF, même si votre CA est nul. Une déclaration précise et dans les délais est cruciale pour calculer vos cotisations sociales et votre impôt, éviter les pénalités, et maintenir votre statut. Tenez une comptabilité simple et anticipez les dates limites. Maîtriser cette procédure est fondamental pour une gestion légale et sereine de votre activité indépendante et pour protéger votre statut étudiant en France.
',
  3,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 64 ---

-- COURS 65 : Networking et LinkedIn
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '18498137-3cce-417c-9e91-5da72e71d0d4',
  'Networking et LinkedIn en France : Développez votre réseau pro',
  'networking-linkedin-france-developpez-reseau-pro',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui souhaitent développer leur réseau professionnel et faciliter leur insertion sur le marché de l''emploi. Le "réseau" est une notion très importante en France, et LinkedIn est un outil incontournable pour le développer. Nous vous expliquerons l''importance du networking (rencontres professionnelles), comment optimiser votre profil LinkedIn pour attirer les recruteurs, et les conseils pour participer efficacement à des événements professionnels (salons, conférences). Maîtriser ces stratégies est absolument crucial pour créer des opportunités d''emploi, trouver des stages, et réussir votre carrière en France.',
  'Networking & LinkedIn France : importance du réseau, optimiser profil LinkedIn, événements pro. Créez vos opportunités d''emploi !',
  'insertion_professionnelle',
  'avance',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''importance du "réseau" et du networking en France", "Savoir comment optimiser son profil LinkedIn pour les recruteurs", "Maîtriser les techniques pour participer efficacement aux événements professionnels", "Identifier les stratégies pour développer son réseau et créer des opportunités"]'::jsonb,
  '["Avoir un CV aux normes françaises", "Avoir un compte LinkedIn"]'::jsonb,
  TRUE,
  4.8,
  400,
  2900
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 65
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'L''importance du "Réseau" en France',
  '# L''importance du "Réseau" en France

## Pourquoi c''est important ?

En France, la notion de "**réseau**" est un pilier fondamental de la recherche d''emploi et de l''évolution professionnelle. Beaucoup d''opportunités (stages, emplois, conseils) ne sont pas publiées publiquement et sont obtenues grâce aux contacts personnels et professionnels. Pour les étudiants internationaux, souvent arrivés sans réseau local, comprendre et développer son réseau est absolument crucial. Ne pas le faire, c''est se priver d''un levier puissant pour accéder au marché du travail français et s''insérer professionnellement. Maîtriser l''importance du networking est fondamental pour créer des opportunités, obtenir des informations clés, et faciliter votre insertion durable en France.


-   Définir ce qu''est le "réseau" dans le contexte professionnel français.
-   Comprendre pourquoi le networking est un facteur clé de succès en recherche d''emploi.


Le réseau, c''est l''ensemble des personnes que vous connaissez et qui peuvent vous aider (ou que vous pouvez aider) dans votre carrière.

🔗 [APEC (Association Pour l''Emploi des Cadres) : L''importance du réseau](https://www.apec.fr/candidat/preparer-sa-candidature/reseau/l-importance-du-reseau.html) - Conseils professionnels.


### 1. Qu''est-ce que le "Réseau" dans le contexte professionnel français ?

Plus qu''une simple liste de contacts.

#### a) L''ensemble de vos relations

#### b) Le "marché caché" de l''emploi
-   De nombreuses offres d''emploi ne sont jamais publiées. Elles sont pourvues via le réseau, par cooptation ou par recommandation.
-   Le réseau est donc une porte d''accès à ces opportunités invisibles.

#### c) L''échange et la réciprocité
-   Le networking n''est pas seulement prendre. C''est aussi donner : partager des informations, rendre service, recommander.

### 2. Pourquoi le networking est un facteur clé de succès en recherche d''emploi ?


-   **Conseils** : Des professionnels peuvent vous conseiller sur votre CV, votre lettre, votre stratégie de recherche, ou vous donner des "codes" du marché français.

-   Une recommandation d''une personne connue de l''entreprise a beaucoup plus de poids qu''une candidature anonyme.
-   C''est un gage de confiance.

#### c) Création d''opportunités
-   Même si un contact n''a pas de poste direct à vous proposer, il peut vous ouvrir d''autres portes, vous présenter à d''autres personnes, ou vous donner des pistes inattendues.

-   Parler avec des professionnels vous permet de mieux comprendre les attentes du marché et d''adapter votre profil (CV, compétences).



-   Commencez par vos connaissances proches qui vivent en France (même s''ils ne sont pas dans votre secteur). Ils peuvent connaître d''autres personnes.

-   **Anciens élèves (Alumni)** : Rejoignez les associations d''anciens élèves de votre université ou école. Ils sont souvent très actifs et prêts à aider les jeunes diplômés.

-   **Maîtres de stage / tuteurs d''alternance** : Les contacts de vos expériences passées.




-   C''est votre CV en ligne et votre principal outil de networking.

-   Salons de recrutement, conférences, workshops. Préparez vos questions et votre "pitch".

#### c) Sollicitez des "rendez-vous informationnels"
-   Contactez des professionnels de votre secteur (via LinkedIn ou votre réseau) pour leur demander un café ou un échange de 15-20 minutes. L''objectif n''est pas de demander un job, mais des conseils et des informations sur leur métier et leur secteur.

-   Ne contactez pas les gens uniquement quand vous avez besoin d''un job. Maintenez le contact, envoyez des nouvelles, partagez des informations intéressantes.





-   **N''ayez pas peur de solliciter les gens** : Beaucoup sont prêts à aider.
-   **Préparez votre "pitch"** : Qui êtes-vous ? Que cherchez-vous ? Qu''apportez-vous ?


-   **Ne pas développer son réseau** : C''est se priver d''opportunités.
-   **Être trop direct** : Ne demandez pas un job dès le premier contact. L''objectif est de s''informer.
-   **Se sentir intimidé par le networking** : C''est une compétence qui s''apprend.


-   🔗 [APEC (Association Pour l''Emploi des Cadres) : Le réseau](https://www.apec.fr/candidat/preparer-sa-candidature/reseau/l-importance-du-reseau.html) - La référence professionnelle.
-   🔗 [LinkedIn (fr) : Centre d''aide](https://www.linkedin.com/help/linkedin/answer/45805/conseils-pour-developper-votre-reseau-professionnel?lang=fr) - Conseils pour le networking sur LinkedIn.
-   🔗 [Campus France : S''insérer professionnellement](https://www.campusfrance.org/fr/etudiant-etranger-apres-le-diplome) - Conseils spécifiques.


Le "réseau" est un facteur clé de succès pour la recherche d''emploi en France. Développez activement votre réseau professionnel et personnel en optimisant votre profil LinkedIn, en participant à des événements, et en sollicitant des rendez-vous informationnels. Soyez authentique, proactif et respectueux du temps des autres. Maîtriser l''importance du networking est absolument crucial pour accéder au "marché caché" de l''emploi, obtenir des conseils précieux, et faciliter votre insertion professionnelle durable en France.
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
  'Optimiser son profil LinkedIn',

## Pourquoi c''est important ?

LinkedIn est le réseau social professionnel incontournable en France et dans le monde. Pour les étudiants internationaux en recherche de stage, d''alternance, ou d''emploi, un profil LinkedIn optimisé est absolument crucial. Il agit comme votre CV en ligne, votre vitrine professionnelle, et votre principal outil de networking. Ne pas avoir un profil à jour, complet et professionnel, c''est risquer de passer inaperçu auprès des recruteurs, de manquer des opportunités, et de ne pas pouvoir développer efficacement votre réseau. Maîtriser l''optimisation de votre profil LinkedIn est fondamental pour attirer les employeurs, valoriser votre parcours international, et maximiser vos chances de réussite sur le marché de l''emploi français.


-   Comprendre le rôle de LinkedIn dans la recherche d''emploi en France.


LinkedIn est bien plus qu''un simple CV en ligne. C''est un outil de veille, de prospection et d''échange.

🔗 [LinkedIn (fr) : Centre d''aide](https://www.linkedin.com/help/linkedin) - La référence pour l''utilisation de LinkedIn.




-   **Indispensable** : Contrairement au CV papier où c''est optionnel, la photo est essentielle sur LinkedIn.
-   **Qualité** : Photo professionnelle, souriante, fond neutre, visage clair. (Similaire aux normes d''une e-photo pour le CV, mais avec un sourire plus franc).

-   Utilisez une image pertinente pour votre domaine d''activité (ex: un visuel lié à la technologie, au marketing, à l''éducation). Évitez les photos génériques.

-   **Impactant** : Indiquez clairement votre statut actuel et votre objectif (ex: "Étudiant Master 2 Marketing Digital | Recherche Stage Marketing | Spécialiste SEO & SEA").

#### d) Résumé / Section "Infos" (About)
-   **Votre "pitch"** : Un paragraphe de 3-5 lignes résumant qui vous êtes, ce que vous avez fait, ce que vous cherchez, et ce que vous apportez.
-   Terminez par un "appel à l''action" (ex: "Ouvert aux opportunités de stage en marketing à partir de [date]").



-   **Mots-clés** : Ajoutez au moins 5 à 10 compétences techniques (logiciels, langages, outils) et transversales (soft skills : adaptabilité, communication interculturelle, travail d''équipe, résolution de problèmes).
-   **Recommandations** : Demandez à vos professeurs, collègues de stage, ou amis de "valider" vos compétences.

-   Demandez des recommandations écrites (de professeurs, tuteurs de stage, managers) sur votre profil. C''est très valorisant.




#### a) Section "Expériences"
-   Expliquez le contexte de vos expériences à l''étranger.

#### b) Section "Formation"
-   Précisez l''équivalence de vos diplômes étrangers.
-   Décrivez brièvement la reconnaissance de votre université d''origine si elle est prestigieuse.

#### c) Section "Langues"

#### d) Section "Bénévolat" / "Projets"




-   **Publiez du contenu** : Articles, réflexions, retours d''expérience (sur vos études, votre stage, votre adaptation en France). Cela montre votre expertise et votre personnalité.

-   Suivez les entreprises qui vous intéressent pour être informé(e) de leurs actualités et de leurs offres d''emploi.

-   Groupes d''anciens élèves, groupes de professionnels de votre secteur, groupes d''étudiants internationaux.







-   **Oublier d''indiquer son statut de séjour** (ex: "Titre de séjour étudiant, cherche stage/emploi en France").
-   **Faire des fautes d''orthographe** (même si c''est moins grave qu''un CV papier, cela nuit au professionnalisme).


-   🔗 [LinkedIn (fr) : Centre d''aide](https://www.linkedin.com/help/linkedin) - La référence pour l''utilisation de LinkedIn.
-   🔗 [APEC (Association Pour l''Emploi des Cadres) : Optimiser son profil LinkedIn](https://www.apec.fr/candidat/preparer-sa-candidature/profil-linkedin/creer-et-optimiser-son-profil-linkedin.html) - Guide détaillé.
-   🔗 [Pôle Emploi : Utiliser LinkedIn dans sa recherche d''emploi](https://www.pole-emploi.fr/candidat/vos-demarches/preparer-sa-candidature/utiliser-linkedin-dans-sa-recherche-demplois.html) - Conseils de Pôle Emploi.
-   🔗 [Campus France : S''insérer professionnellement](https://www.campusfrance.org/fr/etudiant-etranger-apres-le-diplome) - Conseils spécifiques.


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
  'Participer à des événements pro',
  '# Participer à des événements pro

## Pourquoi c''est important ?

Le "networking" (développement de réseau) ne se fait pas seulement en ligne. Participer à des **événements professionnels** (salons, forums, conférences, afterworks) est absolument crucial pour les étudiants internationaux en France. C''est une opportunité unique de rencontrer directement des recruteurs, des professionnels de votre secteur, des alumni, et de découvrir des entreprises. Ne pas s''y rendre, c''est risquer de passer à côté d''opportunités de stage ou d''emploi, de ne pas comprendre les dynamiques du marché français, ou de rester isolé(e). Maîtriser les codes de ces événements, savoir comment les préparer et comment interagir, est fondamental pour élargir votre réseau, obtenir des informations clés, et vous positionner activement sur le marché du travail français.


-   Comprendre l''utilité des événements professionnels pour le networking et la recherche d''emploi.
-   Identifier les différents types d''événements (salons, forums, conférences).


Les événements professionnels sont des lieux d''échanges et de rencontres. Ils demandent une certaine préparation pour être efficaces.

🔗 [APEC (Association Pour l''Emploi des Cadres) : Participer à un salon de recrutement](https://www.apec.fr/candidat/preparer-sa-candidature/salons-et-forums/participer-a-un-salon-de-recrutement.html) - Conseils professionnels.


### 1. L''utilité des événements professionnels


-   C''est l''occasion de rencontrer des recruteurs en personne, de poser des questions et de laisser votre CV. Le contact humain fait souvent la différence.

-   Vous pouvez explorer différentes entreprises, comprendre leur culture, leurs métiers, et les opportunités qu''elles proposent.


-   Sur les attentes du marché, les compétences recherchées, les salaires, les spécificités de la culture d''entreprise française.

### 2. Les différents types d''événements


-   **Format** : Stands d''entreprises, conférences, ateliers CV.
-   **Où chercher ?** : Sites des salons (ex: Salon de l''Étudiant, forums universitaires), sites spécialisés (APEC, Pôle Emploi).

-   **Où chercher ?** : Sites d''associations professionnelles, LinkedIn, sites événementiels.

-   **Format** : Souvent autour d''un verre.
-   **Où chercher ?** : Plateformes comme Meetup.com, groupes LinkedIn, associations d''anciens élèves.




L''improvisation n''est pas une option.

-   Avant l''événement, faites une liste des entreprises que vous souhaitez rencontrer.

#### b) Préparer votre "pitch" (présentation rapide)

-   **Version numérique** : Ayez votre CV en PDF sur votre smartphone pour l''envoyer par e-mail si demandé.

-   Posez des questions sur les métiers, les opportunités, la culture d''entreprise, les projets.

-   Adaptez votre tenue. Généralement, une tenue professionnelle ou "business casual" est attendue.



-   **Utilisez vos atouts** : Si vous parlez d''autres langues, mentionnez-le si pertinent pour l''entreprise.


#### c) Relance après l''événement
-   Dans les 24-48h après l''événement, envoyez un e-mail de remerciement personnalisé à chaque personne rencontrée.


-   Votre **"pitch"** préparé.


-   **N''ayez pas peur de vous lancer** : Même si c''est intimidant au début.
-   **Soyez proactif** : N''attendez pas qu''on vienne vous parler.
-   **Restez vous-même** : L''authenticité est appréciée.


-   **Oublier de faire la relance** après l''événement.
-   **Ne pas avoir de copie de son titre de séjour** si l''employeur le demande.


-   🔗 [Campus France : S''insérer professionnellement](https://www.campusfrance.org/fr/etudiant-etranger-apres-le-diplome) - Conseils spécifiques.
-   🔗 [Salons étudiants (ex: Salon de l''Étudiant)](https://www.letudiant.fr/etudes/salons.html) - Pour trouver les événements.


Participer à des événements professionnels (salons, forums, conférences) est absolument crucial pour les étudiants internationaux en France. Préparez-vous minutieusement : identifiez vos entreprises cibles, préparez votre "pitch" (présentation rapide), ayez votre CV (papier et numérique) et des questions pertinentes. Interagissez activement, soyez professionnel(le) et faites une relance personnalisée après l''événement. Maîtriser ces stratégies est fondamental pour élargir votre réseau, obtenir des informations clés, et créer des opportunités de stage ou d''emploi pour votre carrière en France.
',
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- PARTIE 6 : Vie Quotidienne, Culture & Intégration

-- --- Cours 65 ---

-- COURS 66 : Forfaits mobiles
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '1391d6c7-64b4-4093-b9ae-7fbdb0f6a4d0',
  'Forfaits mobiles en France : Choisir et gérer sa SIM',
  'forfaits-mobiles-france-choisir-gerer-sim',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui ont besoin de choisir et de gérer leur forfait mobile. Le marché français est riche en offres, avec des opérateurs historiques et des "low cost" sans engagement. Nous vous expliquerons la flexibilité des forfaits sans engagement (Sosh, RED by SFR, Free Mobile), comment conserver votre numéro de téléphone si vous changez d''opérateur (le code RIO), et la solution pratique des cartes SIM prépayées pour une arrivée rapide. Maîtriser ce choix est absolument crucial pour rester connecté(e), communiquer avec vos proches en France et à l''étranger, et optimiser votre budget télécoms sans frais cachés ni engagement contraignant.',
  'Forfait mobile France : sans engagement (Sosh, RED, Free), conserver son numéro (RIO), carte SIM prépayée. Restez connecté sans vous ruiner !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la flexibilité des forfaits mobiles sans engagement", "Savoir comment conserver son numéro de téléphone (code RIO)", "Identifier l''utilité et l''accès aux cartes SIM prépayées", "Maîtriser les conseils pour choisir le forfait le plus adapté à ses besoins et budget"]'::jsonb,
  '["Avoir un smartphone compatible avec les réseaux français"]'::jsonb,
  TRUE,
  4.8,
  600,
  4500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 66
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Forfaits sans engagement (Sosh, RED, Free)',
  '# Forfaits sans engagement (Sosh, RED, Free Mobile)

## Pourquoi c''est important ?

Lorsque vous arrivez en France, l''un des premiers besoins est d''avoir un forfait mobile pour communiquer. Le marché français est très dynamique, et les offres de **forfaits mobiles sans engagement** sont particulièrement attractives pour les étudiants internationaux. Des opérateurs comme Sosh (Orange), RED by SFR, et Free Mobile proposent des offres flexibles, souvent moins chères, et sans contrainte de durée. Ne pas connaître ces options, c''est risquer de s''engager sur 12 ou 24 mois avec des frais de résiliation, alors que votre séjour en France peut être de durée incertaine. Maîtriser ces forfaits est absolument crucial pour rester connecté(e), communiquer avec vos proches et optimiser votre budget télécoms sans frais cachés.


-   Définir ce qu''est un forfait mobile sans engagement et ses avantages.
-   Comprendre les critères de comparaison d''un forfait (data, appels, SMS, international).





### 1. Qu''est-ce qu''un forfait mobile sans engagement ?


-   **Avantage majeur** : Idéal si vous êtes étudiant(e) et que votre séjour en France est de durée incertaine, ou si vous souhaitez changer d''opérateur si une meilleure offre apparaît.


-   Les opérateurs "low cost" proposent souvent des offres très agressives en termes de prix, avec des forfaits riches en data pour des tarifs très abordables.




#### a) Les marques "low cost" des opérateurs historiques
-   **Sosh (Orange)** : Utilise le réseau d''Orange, réputé pour sa qualité. Offres en ligne uniquement.




### 3. Les critères de comparaison d''un forfait mobile

Adaptez l''offre à votre usage.

-   **Giga-octets (Go)** : C''est le critère le plus important aujourd''hui.
-   **Besoin** : Estimez votre consommation (navigation web, réseaux sociaux, streaming vidéo, appels visio). Les forfaits avec 100 Go, 200 Go, ou "illimité" sont courants.
-   **Hors France** : Vérifiez la quantité de data utilisable depuis l''Europe (UE/DOM) et l''étranger.

-   **Illimités en France métropolitaine** : C''est la norme aujourd''hui pour la plupart des forfaits.
-   **Appels vers l''étranger** : Vérifiez si les appels vers certains pays (votre pays d''origine, l''UE) sont inclus ou en option.

-   Les cartes de couverture sont disponibles sur les sites des opérateurs et de l''Arcep.

-   Les opérateurs proposent souvent des promotions "la première année" qui peuvent ensuite augmenter. Lisez les conditions.
-   Vérifiez les frais cachés (frais d''activation SIM, frais de dépassement).




-   Combien de data utilisez-vous par mois ? Combien d''appels vers l''étranger ?

-   Utilisez les comparateurs (LesFurets.com, LeLynx.fr, Meilleurtaux.com) pour avoir une vue d''ensemble.

-   Pour la flexibilité, c''est l''option la plus sûre pour un étudiant international.

-   C''est un point crucial pour les étudiants étrangers (appels vers votre pays, data en Europe).



-   Votre **RIB** d''un compte bancaire français.


-   **Si vous venez d''un pays de l''UE**, vous pouvez utiliser votre forfait d''origine sans surcoût pendant une durée limitée (roaming).
-   **Gardez votre numéro de téléphone si vous changez d''opérateur** (procédure RIO, voir leçon suivante).
-   **N''hésitez pas à changer d''opérateur si vous trouvez une meilleure offre** : C''est la liberté du sans engagement.


-   **S''engager sur 12 ou 24 mois** si votre séjour est incertain : Frais de résiliation élevés.


-   🔗 [LesFurets.com / LeLynx.fr](https://www.lelynx.fr/) - Comparateurs d''offres.
-   🔗 [European Commission : Roaming charges](https://ec.europa.eu/digital-single-market/en/roaming-charges) - Pour les citoyens de l''UE.


Les forfaits mobiles sans engagement (Sosh, RED by SFR, B&You, Free Mobile) sont l''option la plus flexible et avantageuse pour les étudiants internationaux en France. Comparez les offres selon le volume de data, les appels internationaux, la qualité du réseau, et les promotions. Privilégiez le sans engagement pour ne pas être contraint(e) par la durée de votre séjour. Une bonne comparaison et un choix éclairé sont absolument cruciaux pour rester connecté(e) et optimiser votre budget télécoms sans frais cachés.
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
  'Conserver son numéro (RIO)',
  '# Conserver son numéro (code RIO)

## Pourquoi c''est important ?

Lorsque vous changez d''opérateur mobile en France (par exemple, vous passez de Free à Sosh, ou d''un forfait avec engagement à un forfait sans engagement), il est absolument crucial de pouvoir conserver votre numéro de téléphone actuel. Ne pas le faire, c''est risquer de perdre un numéro que tous vos contacts (amis, famille, employeurs, administrations) connaissent, et de devoir tout mettre à jour, ce qui est une source de stress et de démarches. Heureusement, la procédure de "portabilité" du numéro est simple et gratuite grâce au **code RIO (Relevé d''Identité Opérateur)**. Maîtriser cette démarche est fondamental pour garantir la continuité de votre communication et éviter toute interruption ou complication lors d''un changement de forfait mobile.


-   Définir ce qu''est le code RIO et sa finalité.
-   Maîtriser les étapes pour changer d''opérateur tout en conservant son numéro.


La portabilité du numéro est un droit pour le consommateur. Elle est garantie par la loi et permet de changer d''opérateur sans changer de numéro.

🔗 [Service-Public.fr : Changer d''opérateur téléphonique et conserver son numéro](https://www.service-public.fr/particuliers/vosdroits/F3025) - La page officielle.


### 1. Qu''est-ce que le code RIO ?


#### a) Relevé d''Identité Opérateur

-   Le RIO est indispensable pour que votre nouvel opérateur puisse demander la portabilité de votre numéro, c''est-à-dire le transférer de votre ancien opérateur vers le nouveau.




-   La portabilité vous permet de changer d''opérateur mobile tout en gardant le même numéro de téléphone.
-   C''est le nouvel opérateur qui s''occupe de toutes les démarches de résiliation auprès de l''ancien et du transfert du numéro. Vous n''avez rien à faire auprès de votre ancien opérateur.



🔗 [Arcep (Autorité de régulation des communications électroniques) : La portabilité du numéro](https://www.arcep.fr/demarches-et-services/les-offres-et-les-prix/telephonie-fixe-et-mobile/la-portabilite-des-numeros.html) - Informations de l''autorité de régulation.



-   C''est un numéro gratuit, accessible 24h/24, 7j/7.
-   Vous recevrez un SMS avec votre code RIO et la date de fin d''engagement de votre forfait (si vous en avez un).

#### b) Par l''espace client ou l''application mobile



-   Votre **téléphone portable** (avec la carte SIM de l''opérateur actuel).


-   **Demandez votre RIO uniquement au moment où vous êtes prêt(e) à changer d''opérateur**, car il a une durée de validité.
-   **Si vous êtes encore engagé(e) avec votre ancien opérateur**, le SMS du 3179 vous indiquera la date de fin d''engagement et les frais de résiliation éventuels.


-   **Faire la démarche de résiliation vous-même auprès de l''ancien opérateur** : Surtout pas ! C''est le nouvel opérateur qui doit s''en charger.
-   **Oublier que la portabilité peut prendre 3 jours ouvrables** : Ne vous inquiétez pas si ce n''est pas instantané.


-   🔗 [UFC-Que Choisir : Changer d''opérateur](https://www.quechoisir.org/fiche-pratique-telecom-changer-d-operateur-telephone-mobile-n100508/) - Conseils aux consommateurs.


Le code RIO (Relevé d''Identité Opérateur) est un identifiant unique à 12 caractères indispensable pour conserver votre numéro de téléphone mobile lorsque vous changez d''opérateur en France. Composez le 3179 (gratuit) depuis votre mobile pour l''obtenir par SMS. Le nouvel opérateur se chargera alors de toutes les démarches de portabilité en 3 jours ouvrables. Maîtriser cette procédure est absolument crucial pour garantir la continuité de votre communication, éviter de perdre votre numéro, et simplifier votre changement de forfait mobile sans tracas.
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
  'Acheter une carte SIM prépayée',

## Pourquoi c''est important ?

Lorsque vous arrivez en France en tant qu''étudiant international, la première chose dont vous aurez besoin est d''une connexion mobile pour communiquer avec vos proches, chercher un logement, ou effectuer vos premières démarches administratives. Acheter une **carte SIM prépayée** est une solution temporaire absolument cruciale pour avoir du réseau immédiatement, sans engagement, et sans avoir à fournir de nombreux justificatifs bancaires. Ne pas connaître cette option, c''est risquer de se retrouver sans moyen de communication dès votre arrivée, ce qui peut être très stressant. Maîtriser l''achat et l''utilisation d''une carte SIM prépayée est fondamental pour une installation sereine et une connectivité instantanée.


-   Définir ce qu''est une carte SIM prépayée et ses avantages pour les nouveaux arrivants.
-   Maîtriser les conseils pour l''activer et l''utiliser efficacement dès votre arrivée.





### 1. Qu''est-ce qu''une carte SIM prépayée ?


-   Une carte SIM prépayée contient un numéro de téléphone français et un crédit de communication (appels, SMS, internet) que vous payez à l''avance.
-   Vous "rechargez" cette carte au fur et à mesure de vos besoins.

-   **Pas d''engagement** : Vous n''êtes lié(e) à aucun contrat de longue durée.
-   **Pas de justificatifs bancaires** : Vous n''avez pas besoin d''avoir un compte bancaire français pour l''acheter ou l''utiliser (le paiement se fait en espèces ou par carte).
-   **Activation immédiate** : Vous avez du réseau et un numéro français dès l''achat.

-   Le coût par minute/SMS/Go est souvent plus élevé qu''un forfait mensuel.
-   Moins de data pour le même prix qu''un forfait.







🔗 [La Poste Mobile : Recharges](https://www.lapostemobile.fr/recharge) - Exemple d''un autre acteur.



-   **Immédiate** : Le plus souvent, la carte est activée dès l''achat ou après un court délai en insérant la SIM dans votre téléphone.
-   **Identification** : Pour activer la carte, il peut vous être demandé de fournir une pièce d''identité (passeport) et une adresse postale en France (même provisoire).

-   Lorsque votre crédit est épuisé, vous pouvez acheter des "recharges" (appels, SMS, data) dans les mêmes points de vente.


### 4. Conseils pour l''utiliser efficacement dès votre arrivée


#### a) Achetez-la dès l''aéroport ou en ville
-   Dès votre arrivée, votre priorité est d''avoir un moyen de communication. Achetez une carte SIM prépayée rapidement.





-   Votre **passeport** ou **pièce d''identité**.
-   Des **espèces** ou une **carte bancaire** pour l''achat.


-   **Assurez-vous que votre téléphone est "désimlocké"** (débloqué) pour accepter une carte SIM de n''importe quel opérateur.
-   **Renseignez-vous sur les options "international"** pour les appels vers votre pays d''origine (certaines recharges peuvent inclure des minutes vers l''étranger).
-   **Activez les données mobiles** pour l''accès à internet.
-   **Gardez l''emballage et le code PUK** de votre carte SIM.


-   **Ne pas avoir de moyen de communication à l''arrivée**.
-   **Utiliser une carte SIM non identifiée** : C''est illégal.


-   🔗 [Ministère de l''Intérieur : Vérifier l''identité](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Cartes-prepayees) - Obligation d''identification.


Acheter une carte SIM prépayée est une solution absolument cruciale pour les étudiants internationaux arrivant en France, car elle offre une connectivité immédiate sans engagement ni justificatifs bancaires. Vous pouvez l''acheter dans les boutiques d''opérateurs, les supermarchés, ou les bureaux de tabac. Activez-la avec votre passeport, rechargez-la selon vos besoins, et utilisez-la comme solution temporaire avant de choisir un forfait sans engagement plus économique. Maîtriser cette étape est fondamental pour communiquer dès votre arrivée et faciliter votre installation en France.
',
  3,
  50,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

