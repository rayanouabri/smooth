-- ==========================================
-- LOT 8 : Cours 36 à 40
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 36 ---

-- COURS 37 : Déclarer son Médecin Traitant
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '1ba49e93-ed48-4465-8c60-d823a461e5db',
  'Déclarer son Médecin Traitant : Le guide pour être bien remboursé',
  'declarer-medecin-traitant-guide-bien-rembourse',
  'Ce cours est d''une importance capitale pour tous les étudiants internationaux affiliés à la Sécurité Sociale française. Déclarer un "médecin traitant" est un geste simple, mais absolument crucial pour être bien remboursé de vos frais de santé et bénéficier du "parcours de soins coordonnés". Ne pas le faire entraîne une pénalisation systématique de vos remboursements, vous faisant payer plus cher chaque consultation. Nous vous expliquerons pourquoi c''est obligatoire pour un remboursement optimal, comment demander à un médecin de devenir votre traitant, et la procédure de déclaration en ligne lors de la consultation. Maîtriser cette démarche est essentiel pour optimiser votre budget santé et accéder aux soins au meilleur coût en France.',
  'Déclarez votre médecin traitant : obligatoire pour un bon remboursement Sécu ! Comment choisir, demander, déclarer en ligne. Optimisez vos frais de santé.',
  'sante',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la nécessité de déclarer un médecin traitant pour un bon remboursement", "Savoir comment choisir et demander à un médecin de devenir son traitant", "Maîtriser la procédure de déclaration en ligne (ou papier) lors de la consultation", "Identifier les conséquences du non-respect du parcours de soins coordonnés"]'::jsonb,
  '["Avoir votre numéro définitif de Sécurité Sociale (NIR) et votre Carte Vitale"]'::jsonb,
  TRUE,
  4.8,
  600,
  3900
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 37
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Pourquoi c''est obligatoire pour être bien remboursé',
  '# Pourquoi c''est obligatoire pour être bien remboursé

## Pourquoi c''est important ?

Déclarer un "médecin traitant" est une condition fondamentale du "parcours de soins coordonnés" en France. Ce n''est pas une simple recommandation, mais un impératif qui impacte directement le niveau de remboursement de vos consultations par la Sécurité Sociale. Ne pas déclarer de médecin traitant, c''est vous exposer à une pénalisation systématique de vos remboursements, vous forçant à payer une part plus importante de vos frais médicaux. Pour les étudiants internationaux, optimiser vos remboursements est absolument crucial pour gérer votre budget santé. Comprendre cette obligation et les conséquences de son non-respect est essentiel pour accéder aux soins de manière économique et sereine.


-   Comprendre le principe du "parcours de soins coordonnés" et son lien avec le médecin traitant.
-   Identifier la pénalisation financière en cas d''absence de déclaration de médecin traitant.
-   Savoir quels sont les avantages d''avoir un médecin traitant déclaré.







-   Vous choisissez un médecin généraliste (ou parfois un spécialiste, mais c''est plus rare) qui devient votre "médecin traitant".

-   Le principe est simple : pour être remboursé(e) au taux maximal par la Sécurité Sociale, vous devez consulter votre médecin traitant avant d''aller voir un spécialiste (sauf exceptions, comme les gynécologues, ophtalmologues, stomatologues, psychiatres pour les 16-25 ans, et les urgences).
-   C''est votre médecin traitant qui vous oriente vers d''autres professionnels de santé.


### 2. La pénalisation en cas d''absence de déclaration


-   Si vous n''avez pas déclaré de médecin traitant et que vous consultez un médecin généraliste, la Sécurité Sociale ne vous remboursera que **30% de la base de remboursement** au lieu de 70%.
-   **Impact de la mutuelle** : Même si vous avez une mutuelle, elle peut moins bien rembourser la part non prise en charge par la Sécurité Sociale si vous êtes "hors parcours de soins".

-   Si vous consultez un spécialiste sans passer par votre médecin traitant (hors exceptions d''accès direct), le remboursement de la Sécurité Sociale est également réduit à 30%.

-   Le "reste à charge" pour vous est beaucoup plus important si vous ne déclarez pas de médecin traitant. Cela peut peser lourd sur votre budget, surtout si vous avez des consultations fréquentes.

### 3. Les avantages d''avoir un médecin traitant déclaré







-   **Urgence** : En cas d''urgence médicale, vous pouvez bien sûr consulter n''importe quel médecin ou vous rendre aux urgences.


-   Votre **attestation de droits à l''Assurance Maladie** (avec votre NIR).


-   **Dès la première consultation, demandez au médecin de vous déclarer comme son patient traitant**. C''est le moyen le plus simple.
-   **N''attendez pas d''être malade** pour faire cette démarche.






Déclarer un médecin traitant est une obligation cruciale en France pour bénéficier du taux maximal de remboursement de la Sécurité Sociale et respecter le parcours de soins coordonnés. Sans médecin traitant, vos remboursements seront fortement réduits. Choisissez un médecin généraliste près de chez vous, demandez-lui de vous déclarer comme son patient traitant (c''est lui qui fait la démarche), et ayez votre Carte Vitale à jour. Cette simple démarche vous assure un suivi médical optimal et une gestion économique de votre santé en France.
',
  1,
  60,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 37 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Comment demander à un médecin',
  '# Comment demander à un médecin d''être son traitant

## Pourquoi c''est important ?

Le choix et la déclaration d''un médecin traitant sont des étapes clés pour votre accès aux soins en France. Cependant, en tant qu''étudiant international, vous ne savez peut-être pas comment aborder un médecin pour lui demander de devenir votre référent. Ne pas faire cette démarche, ou ne pas la faire correctement, peut entraîner des consultations moins bien remboursées par la Sécurité Sociale. Savoir comment trouver un médecin, comment lui demander poliment de devenir votre traitant, et comment il procède à la déclaration est absolument crucial pour intégrer le parcours de soins coordonnés et optimiser vos dépenses de santé.




Le médecin traitant est un partenaire de confiance pour votre santé. Il est important de bien le choisir et d''établir une relation sur le long terme.





-   **Recherche** : Saisissez "Médecin généraliste" et le nom de votre ville ou code postal.
-   **Filtres utiles** : Utilisez les filtres "Nouveaux patients acceptés" ou "Langues parlées" pour trouver un médecin qui peut vous accueillir et communiquer avec vous.

#### b) Annuaire santé d''Ameli
-   L''annuaire santé sur `ameli.fr` vous permet de trouver des professionnels de santé.

-   Demandez des recommandations à des amis, à d''autres étudiants, ou au service de santé de votre université.





-   **Formule simple** : "Bonjour Docteur, je suis un nouvel(le) étudiant(e) en France et j''aimerais savoir si vous accepteriez d''être mon médecin traitant."

-   Le médecin est libre d''accepter ou non de devenir votre médecin traitant, surtout s''il a déjà beaucoup de patients.


C''est le médecin qui fait la démarche.



-   Si le médecin refuse (parce qu''il a déjà trop de patients), demandez-lui s''il peut vous recommander un confrère.
-   Continuez votre recherche via Doctolib ou l''annuaire Ameli.


-   Votre **Carte Vitale** (ou attestation de droits à l''Assurance Maladie).


-   **N''attendez pas d''être malade pour chercher un médecin traitant**. Faites-le dès que possible après votre affiliation à la Sécurité Sociale.
-   **Si vous parlez mal français**, cherchez un médecin qui parle anglais (ou votre langue) si c''est plus facile pour vous, en utilisant les filtres de Doctolib.


-   **Penser qu''il n''est pas important d''avoir un médecin traitant** : Cela réduit vos remboursements.
-   **Changer de médecin traitant trop souvent** : Cela n''est pas conseillé pour votre suivi médical.


-   🔗 [Adresses des CPAM (Caisses Primaires d''Assurance Maladie)](https://www.ameli.fr/assure/adresses-et-contacts/points-accueil-et-agences-cpam) - Pour contacter votre CPAM en cas de question.


Demander à un médecin généraliste de devenir votre médecin traitant est une démarche cruciale pour être bien remboursé de vos frais de santé en France. Cherchez un médecin sur Doctolib.fr ou l''annuaire Ameli, abordez le sujet lors de la première consultation, et le médecin effectuera la déclaration directement auprès de la CPAM (souvent avec votre Carte Vitale). N''attendez pas d''être malade pour faire cette démarche et vérifiez que votre déclaration est bien enregistrée sur `ameli.fr`. C''est un pilier de votre parcours de soins coordonnés.
',
  2,
  55,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 37 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'La déclaration en ligne lors de la consultation',
  '# La déclaration en ligne lors de la consultation

## Pourquoi c''est important ?

Une fois que vous avez trouvé un médecin généraliste et qu''il a accepté d''être votre médecin traitant, la déclaration officielle auprès de l''Assurance Maladie est la dernière étape pour finaliser cette démarche. Heureusement, grâce à la Carte Vitale et aux outils numériques, cette déclaration se fait le plus souvent **directement en ligne lors de la consultation**. Comprendre comment le médecin procède à cette déclaration et s''assurer qu''elle est bien effectuée est absolument crucial pour les étudiants internationaux afin de bénéficier immédiatement du taux de remboursement optimal de la Sécurité Sociale. Une déclaration non effectuée vous pénalisera financièrement à chaque consultation future.










-   Lorsque le médecin insère votre Carte Vitale dans son lecteur, il peut accéder à vos droits et transmettre des informations à l''Assurance Maladie (CPAM) de manière sécurisée et instantanée.


C''est le médecin qui gère la partie technique.

-   Une fois que vous avez demandé au médecin d''être votre traitant et qu''il a accepté, il va :
    2.  Sur son logiciel médical, sélectionner l''option "Déclaration de médecin traitant".
-   La déclaration est alors envoyée électroniquement à votre Caisse Primaire d''Assurance Maladie (CPAM).

-   Si vous n''avez pas encore reçu votre Carte Vitale (mais seulement votre attestation de droits avec NIR définitif), ou si le système informatique du médecin est en panne, la déclaration peut être faite sur un **formulaire papier** (Cerfa n°12485*03).
-   Le médecin remplira ce formulaire, le signera, et vous le remettra (ou l''enverra directement). Vous devrez alors l''envoyer vous-même à votre CPAM si le médecin vous le donne.



-   Dans la rubrique "Mes démarches" ou "Mes informations", vous devriez voir que votre médecin traitant a bien été déclaré, avec son nom et prénom.

-   Lors de votre prochaine mise à jour de Carte Vitale sur une borne multiservices (en pharmacie par exemple), vous devriez voir l''information de votre médecin traitant sur l''écran ou sur l''attestation délivrée.




#### a) Si l''information n''apparaît pas sur `ameli.fr`
-   **Contactez votre médecin** : Demandez-lui s''il a bien envoyé la déclaration.
-   **Renvoyez le formulaire papier** : Si le médecin vous l''a remis et que vous ne l''avez pas envoyé, faites-le par courrier recommandé avec accusé de réception à votre CPAM.




-   **Posez la question au médecin** : "Est-ce que la déclaration de médecin traitant a bien été effectuée ?"
-   **Si vous n''avez pas encore de Carte Vitale physique**, assurez-vous que le médecin remplit le formulaire papier pour vous, ou vous le donne pour que vous l''envoyiez.


-   **Ne pas vérifier que la déclaration a été faite** : Vous risquez d''être pénalisé(e) pour vos remboursements.
-   **Ne pas réagir** si la déclaration n''apparaît pas sur `ameli.fr`.
-   **Ne pas savoir si le médecin a transmis le formulaire papier ou vous l''a donné**.


-   🔗 [Adresses des CPAM (Caisses Primaires d''Assurance Maladie)](https://www.ameli.fr/assure/adresses-et-contacts/points-accueil-et-agences-cpam) - Pour contacter votre CPAM en cas de problème.


La déclaration de votre médecin traitant se fait généralement en ligne par le médecin lui-même lors de votre consultation, en utilisant votre Carte Vitale à jour. C''est un geste simple et rapide qui garantit votre meilleur remboursement par la Sécurité Sociale. Assurez-vous de demander au médecin d''effectuer cette déclaration et vérifiez qu''elle est bien enregistrée sur votre espace `ameli.fr` dans les jours qui suivent. Cette diligence vous assure un accès fluide et économique à votre parcours de soins en France.
',
  3,
  50,
  NULL,
  '[]'::sql

-- --- Cours 37 ---

-- COURS 38 : Comprendre les remboursements
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Comprendre les remboursements de santé : Base, Ticket Modérateur, Ameli',
  'comprendre-remboursements-sante-base-ticket-moderateur-ameli',
  'Ce cours est essentiel pour tous les étudiants internationaux affiliés à la Sécurité Sociale française. Comprendre comment vos frais de santé sont remboursés, quelles sont les parts prises en charge par l''Assurance Maladie et la mutuelle, et comment suivre ces remboursements est absolument crucial. Nous vous expliquerons les notions de "Base de Remboursement de la Sécu" (BRSS), de "Ticket Modérateur" (la partie qui reste à votre charge), et comment utiliser votre espace `ameli.fr` pour suivre vos paiements. Une bonne compréhension de ce processus est fondamentale pour gérer votre budget santé, éviter les surprises et vous assurer que vous bénéficiez pleinement de vos droits. ',
  'Remboursements santé : BRSS, Ticket Modérateur, Ameli.fr. Suivez vos remboursements et maîtrisez votre budget santé !',
  'sante',
  'intermediaire',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la Base de Remboursement de la Sécurité Sociale (BRSS)", "Identifier ce qu''est le Ticket Modérateur et la part qui reste à charge", "Savoir comment utiliser son espace personnel ameli.fr pour suivre ses remboursements", "Maîtriser les conseils pour optimiser la réception de ses remboursements"]'::jsonb,
  '["Avoir votre numéro définitif de Sécurité Sociale (NIR) et une Carte Vitale"]'::jsonb,
  TRUE,
  4.8,
  650,
  4800
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 38
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Base de Remboursement de la Sécu (BRSS)',
  '# Base de Remboursement de la Sécu (BRSS)

## Pourquoi c''est important ?

Lorsque vous consultez un médecin ou achetez des médicaments en France, le montant que la Sécurité Sociale (Assurance Maladie) va vous rembourser n''est pas calculé sur le prix réel que vous payez, mais sur une référence appelée la **Base de Remboursement de la Sécurité Sociale (BRSS)**. Comprendre ce qu''est la BRSS et comment elle est utilisée est absolument crucial pour les étudiants internationaux afin d''anticiper vos frais de santé et de ne pas être surpris(e) par le "reste à charge". Ne pas connaître cette notion peut vous laisser avec l''impression que vous êtes mal remboursé(e), alors que c''est le fonctionnement normal du système. C''est la clé pour décrypter vos décomptes de remboursement.


-   Définir ce qu''est la Base de Remboursement de la Sécurité Sociale (BRSS).
-   Comprendre comment la BRSS est fixée par l''Assurance Maladie.


La BRSS est le point de départ de tout calcul de remboursement. C''est un tarif de référence officiel.



### 1. Qu''est-ce que la Base de Remboursement de la Sécurité Sociale (BRSS) ?

C''est le prix de référence de l''Assurance Maladie.

-   La BRSS est un tarif conventionnel fixé par l''Assurance Maladie pour chaque acte médical, consultation, médicament ou prestation de santé.
-   **Ce n''est pas forcément le prix réel** : Le professionnel de santé peut facturer plus que la BRSS (on parle alors de "dépassements d''honoraires").


-   Elle est fixée par convention entre l''Assurance Maladie et les syndicats de professionnels de santé, et par arrêté pour les médicaments.


### 2. Le lien avec les dépassements d''honoraires



-   Ils sont autorisés à pratiquer des "dépassements d''honoraires" (facturer plus que la BRSS) avec "tact et mesure".


🔗 [Ameli.fr : Dépassements d''honoraires](https://www.ameli.fr/assure/remboursements/comment-etre-rembourse/depassements-honoraires) - Informations sur les dépassements.


La BRSS s''applique partout.

-   Le remboursement des médicaments par la Sécurité Sociale est calculé sur la base du "prix de référence" (qui est la BRSS du médicament) et d''un taux de remboursement (100%, 65%, 30%, 15% selon le Service Médical Rendu - SMR).


-   Pour les hospitalisations, la Sécurité Sociale prend en charge 80% des frais (la BRSS de l''hospitalisation), le reste étant le ticket modérateur et le forfait journalier.



-   **Ayez une mutuelle complémentaire** : Elle est essentielle pour couvrir le ticket modérateur et tout ou partie des dépassements d''honoraires.
-   **Demandez toujours le prix** : Avant une consultation chez un spécialiste, n''hésitez pas à demander les honoraires et si le médecin est secteur 1 ou 2.
-   **Vérifiez le "Tiers-payant"** : Pour ne pas avancer les frais (voir cours 33.3).


-   Vos **décomptes de remboursement** de l''Assurance Maladie.


-   **Comparez les mutuelles** : Les contrats de mutuelle ont des niveaux de remboursement différents pour les dépassements d''honoraires.
-   **Ne vous sentez pas mal à l''aise de poser des questions sur les tarifs** : C''est votre droit.


-   **Ignorer la BRSS** : Vous ne comprendrez pas pourquoi le remboursement de la Sécu n''est pas de 100%.
-   **Ne pas tenir compte des dépassements d''honoraires** : Ils peuvent représenter une somme importante à votre charge.


-   🔗 [Ameli.fr : Dépassements d''honoraires](https://www.ameli.fr/assure/remboursements/comment-etre-rembourse/depassements-honoraires) - Explications.


La Base de Remboursement de la Sécurité Sociale (BRSS) est le tarif de référence sur lequel la Sécurité Sociale française calcule vos remboursements, pas sur le prix réel payé. Comprenez que les médecins du secteur 2 peuvent pratiquer des dépassements d''honoraires (non remboursés par la Sécu au-delà de la BRSS). Pour optimiser vos remboursements, privilégiez les médecins secteur 1, déclarez un médecin traitant, et ayez une mutuelle complémentaire. Maîtriser cette notion est la clé pour comprendre vos décomptes et gérer efficacement votre budget santé en France.
',
  1,
  60,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 38 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Le ticket modérateur (ce qu''il reste à payer)',
  '# Le ticket modérateur (ce qu''il reste à payer)

## Pourquoi c''est important ?

Après le remboursement de l''Assurance Maladie (Sécurité Sociale), une partie de vos frais de santé reste généralement à votre charge. C''est ce que l''on appelle le "ticket modérateur". Comprendre ce qu''est le ticket modérateur et son montant est absolument crucial pour les étudiants internationaux, car c''est cette somme que vous devrez soit payer de votre poche, soit faire prendre en charge par votre mutuelle complémentaire. Ne pas connaître cette notion peut entraîner des surprises financières lors de vos consultations ou achats de médicaments. C''est la clé pour anticiper votre reste à charge et pour évaluer l''utilité d''une mutuelle.


-   Définir ce qu''est le ticket modérateur et sa finalité.


Le ticket modérateur est la part des dépenses de santé qui n''est pas remboursée par l''Assurance Maladie. Il existe pour responsabiliser le patient et maîtriser les dépenses de santé.



### 1. Qu''est-ce que le ticket modérateur ?


-   C''est la partie des dépenses de santé qui reste à votre charge après le remboursement de la Sécurité Sociale (Assurance Maladie).

-   Permettre une meilleure maîtrise des dépenses de l''Assurance Maladie.



### 2. Les différents éléments qui composent votre "reste à charge"

Plusieurs frais peuvent s''ajouter.

-   C''est la somme principale qui reste à votre charge après le remboursement de la Sécurité Sociale.

-   **1€ chez le médecin** : Une somme forfaitaire de 1€ est déduite du remboursement de l''Assurance Maladie pour chaque consultation médicale (médecin, spécialiste, radiologie, analyses). Elle n''est pas remboursée par la mutuelle.

#### c) Les dépassements d''honoraires
-   Si vous consultez un médecin conventionné secteur 2, il peut facturer un prix supérieur à la BRSS (voir leçon précédente). La partie qui dépasse la BRSS est un "dépassement d''honoraires".




-   Elle peut également prendre en charge tout ou partie des dépassements d''honoraires, selon le niveau de garantie du contrat.

-   Avec une mutuelle et votre Carte Vitale, vous pouvez bénéficier du tiers-payant intégral, ce qui signifie que vous n''avancez ni la part Sécu, ni la part mutuelle (sauf la participation forfaitaire de 1€ chez le médecin et les franchises médicales).




-   Ils respectent les tarifs de la Sécurité Sociale et ne pratiquent pas de dépassements d''honoraires.






-   **N''hésitez pas à demander au professionnel de santé** le montant de la consultation et s''il applique le tiers-payant.


-   **Ne pas savoir ce qu''est le ticket modérateur** : Vous ne comprendrez pas pourquoi vous payez une partie des frais.
-   **Oublier la participation forfaitaire de 1€ / 0,50€** : Elle n''est jamais remboursée.
-   **Ignorer les dépassements d''honoraires** : Ils peuvent représenter une somme importante non couverte par la Sécu.




Le ticket modérateur est la part de vos frais de santé qui reste à votre charge après le remboursement de la Sécurité Sociale. Il est complété par la participation forfaitaire (1€ chez le médecin) et les franchises médicales, et peut s''ajouter aux dépassements d''honoraires des médecins secteur 2. Pour réduire votre reste à charge, déclarez un médecin traitant, privilégiez les médecins secteur 1, et souscrivez une mutuelle complémentaire. Comprendre ces notions est essentiel pour gérer efficacement votre budget santé et optimiser vos remboursements en France.
',
  2,
  55,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 38 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Suivre ses remboursements sur Ameli',
  '# Suivre ses remboursements sur Ameli

## Pourquoi c''est important ?

Une fois que vous avez consulté un professionnel de santé et que vous avez présenté votre Carte Vitale (ou envoyé une feuille de soins), il est absolument crucial de suivre attentivement vos remboursements. Le site `ameli.fr`, via votre espace personnel sécurisé, est l''outil officiel et indispensable pour cela. Ne pas suivre vos remboursements, c''est risquer de ne pas détecter des erreurs (montant, absence de remboursement), de ne pas savoir où en est votre dossier, ou de ne pas réclamer votre dû. Pour les étudiants internationaux, cette autonomie dans le suivi est essentielle pour gérer votre budget santé, vous assurer que la Sécurité Sociale fonctionne bien pour vous, et réagir rapidement en cas de problème.


-   Comprendre l''utilité de l''espace personnel `ameli.fr` pour le suivi des remboursements.
-   Maîtriser les conseils pour réagir en cas d''absence ou d''erreur de remboursement.







-   Cliquez sur "Mon compte" et connectez-vous avec votre numéro de Sécurité Sociale (NIR) et votre mot de passe.
-   Si vous n''avez pas encore de compte, créez-le avec votre NIR et le code qui vous a été envoyé par la CPAM.

#### b) Rubrique "Mes paiements" ou "Mes remboursements"




-   **Date de la consultation/acte** : Assurez-vous que c''est la bonne date.
-   **Nom du professionnel de santé ou du médicament** : Vérifiez qu''il correspond.

-   Vous pouvez souvent filtrer vos remboursements par date, par type d''acte, ou par professionnel de santé.


### 3. Que faire en cas d''absence ou d''erreur de remboursement ?


-   **Vérifiez d''abord votre espace `ameli.fr`** : La cause du retard peut y être indiquée (document manquant, dossier en cours de traitement).
-   **Renvoyez la feuille de soins** : Si vous aviez envoyé une feuille de soins papier et qu''elle est perdue, vous pouvez demander un duplicata au médecin et la renvoyer.


    -   Contactez d''abord votre mutuelle.
    -   La Sécurité Sociale transmet parfois automatiquement l''information à la mutuelle, mais pas toujours.




-   **Consultez régulièrement votre espace `ameli.fr`** : C''est un bon réflexe.
-   **N''hésitez pas à utiliser la messagerie sécurisée** pour toute question, c''est traçable.


-   **Ne pas suivre ses remboursements** : Vous risquez de perdre de l''argent.


-   🔗 [Adresses des CPAM (Caisses Primaires d''Assurance Maladie)](https://www.ameli.fr/assure/adresses-et-contacts/points-accueil-et-agences-cpam) - Pour un contact direct.


Suivre vos remboursements sur votre espace personnel `ameli.fr` est une démarche essentielle pour les étudiants internationaux. Vous y accéderez à tous vos décomptes, détaillant la date de l''acte, le montant payé, la BRSS, le taux et le montant remboursé par la Sécurité Sociale. Vérifiez attentivement chaque ligne. En cas d''absence ou d''erreur de remboursement, réagissez rapidement en contactant votre CPAM via la messagerie sécurisée. Cette vigilance vous assure une gestion autonome et efficace de votre budget santé en France.
',
  3,
  55,
  NULL,
  '[]'::sql

-- --- Cours 38 ---

-- COURS 39 : La Mutuelle (Complémentaire)
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'La Mutuelle (Complémentaire Santé) en France : Votre protection renforcée',
  'mutuelle-complementaire-sante-france-protection-renforcee',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, après leur affiliation à la Sécurité Sociale. La "mutuelle" (ou complémentaire santé) est le deuxième pilier de votre couverture santé, elle complète les remboursements de l''Assurance Maladie et peut réduire considérablement votre "reste à charge". Nous vous aiderons à déterminer si vous avez besoin d''une mutuelle (la réponse est presque toujours oui !), à comprendre le fonctionnement de la Complémentaire Santé Solidaire (CSS) gratuite pour les faibles revenus, et à comparer les offres spécifiques pour étudiants (LMDE, HEYME...) ou les mutuelles classiques. Maîtriser le choix et la souscription d''une mutuelle est absolument crucial pour optimiser vos remboursements, accéder à tous les soins, et protéger votre budget contre les dépenses imprévues.',
  'Mutuelle complémentaire santé : indispensable ! Besoin ? CSS gratuite ? Comparez offres étudiants (LMDE, HEYME) et classiques. Protégez votre santé !',
  'sante',
  'intermediaire',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''importance d''une mutuelle complémentaire santé", "Déterminer si une mutuelle est nécessaire pour votre situation", "Identifier l''éligibilité à la Complémentaire Santé Solidaire (CSS) gratuite", "Savoir comparer les offres de mutuelles étudiantes et classiques"]'::jsonb,
  '["Avoir un numéro de Sécurité Sociale (NIR) en France"]'::jsonb,
  TRUE,
  4.8,
  600,
  4500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 39
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Avez-vous besoin d''une mutuelle ?',
  '# Avez-vous besoin d''une mutuelle ?

## Pourquoi c''est important ?

Après votre affiliation à la Sécurité Sociale française, vous bénéficiez d''un remboursement partiel de vos frais de santé. Cependant, la Sécurité Sociale ne couvre jamais 100% des dépenses (sauf exceptions rares et maladies graves). Une partie, appelée "ticket modérateur", reste toujours à votre charge. La question "avez-vous besoin d''une mutuelle ?" est absolument cruciale pour les étudiants internationaux, et la réponse est presque toujours OUI. Ne pas souscrire à une mutuelle complémentaire, c''est risquer de payer de votre poche des sommes importantes (consultations, médicaments, optique, dentaire) et de vous retrouver dans une situation financière précaire en cas de problèmes de santé majeurs. Votre mutuelle est votre protection essentielle.


-   Identifier la notion de "reste à charge" et son impact financier.
-   Définir le rôle d''une mutuelle complémentaire santé.


Le système de santé français est un "duo gagnant" (Sécu + Mutuelle). La Sécurité Sociale est le pilier, mais la mutuelle est le complément indispensable pour une couverture optimale.





-   **Exemple** : Pour une consultation à 26,50€, la Sécurité Sociale rembourse 18,55€. Il vous reste 7,95€ à payer (le "ticket modérateur"), plus la participation forfaitaire de 1€.

#### b) Le "reste à charge"
-   Le "reste à charge" est la somme que vous devez payer après le remboursement de la Sécurité Sociale. Il se compose principalement du :
    -   **Dépassements d''honoraires** (si le médecin est secteur 2 et facture plus que la BRSS).
-   Ces frais peuvent rapidement s''accumuler et représenter une somme importante, surtout pour des soins dentaires, d''optique, ou des consultations répétées.


### 2. Le rôle indispensable d''une mutuelle complémentaire santé


-   Elle peut également, selon le contrat, rembourser tout ou partie des **dépassements d''honoraires** et des frais non couverts par la Sécurité Sociale (ex: certaines prestations d''optique, dentaire, audition).


#### c) Le "tiers-payant"
-   Avec votre mutuelle, vous pouvez bénéficier du tiers-payant intégral chez de nombreux professionnels (pharmaciens, médecins), ce qui vous dispense d''avancer la quasi-totalité des frais.



-   Les frais d''optique (lunettes, lentilles) et dentaires (caries, couronnes) sont très mal remboursés par la Sécurité Sociale seule, et peuvent atteindre des centaines, voire des milliers d''euros.

#### b) Frein à l''accès aux soins








-   Votre **attestation d''affiliation à la Sécurité Sociale**.


-   **La réponse est oui : vous avez besoin d''une mutuelle.** Considérez-la comme un investissement essentiel pour votre tranquillité.
-   **Ne pas confondre assurance voyage et mutuelle** : L''assurance voyage est pour les courts séjours ou les débuts d''arrivée avant l''affiliation Sécu. Une fois étudiant en France, vous avez besoin de la Sécurité Sociale et d''une mutuelle.


-   **Ne pas souscrire de mutuelle** : C''est le plus grand risque financier pour votre santé.
-   **Payer une mutuelle chère sans vérifier les garanties** qu''elle offre.


-   🔗 [Ameli.fr : La complémentaire santé](https://www.ameli.fr/assure/droits-demarches/etudes-superieures-sante/mutuelle-complementaire-sante) - La page officielle sur l''utilité de la mutuelle.
-   🔗 [Ministère de la Santé et de la Prévention : L''Assurance Maladie](https://sante.gouv.fr/systeme-de-sante/assurance-maladie) - Vue d''ensemble.


Oui, vous avez besoin d''une mutuelle complémentaire santé en France, même si vous êtes jeune et en bonne santé. La Sécurité Sociale ne rembourse qu''une partie de vos frais, et le "ticket modérateur" peut vite peser sur votre budget. Une mutuelle couvre ce reste à charge, les dépassements d''honoraires, et des postes de dépenses importants comme l''optique ou le dentaire. C''est un investissement essentiel pour protéger vos finances, accéder aux soins sans contrainte, et garantir votre tranquillité d''esprit durant votre séjour étudiant.
',
  1,
  60,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 39 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'La Complémentaire Santé Solidaire (CSS) gratuite',
  '# La Complémentaire Santé Solidaire (CSS) gratuite

## Pourquoi c''est important ?

Pour de nombreux étudiants internationaux ayant des ressources financières limitées, la Complémentaire Santé Solidaire (CSS) est une aide précieuse et souvent méconnue. La CSS (qui a remplacé la CMU-C et l''ACS) est une mutuelle complémentaire santé gratuite (ou à participation financière très faible) qui prend en charge la partie de vos frais de santé non remboursée par la Sécurité Sociale. Ne pas vérifier votre éligibilité à la CSS, c''est risquer de payer une mutuelle privée alors que vous pourriez en avoir une gratuitement, ou de ne pas avoir de mutuelle du tout et de supporter un reste à charge important. Maîtriser cette information est absolument crucial pour optimiser votre budget santé et garantir un accès total aux soins en France.


-   Définir ce qu''est la Complémentaire Santé Solidaire (CSS) et son rôle.
-   Comprendre les conditions d''éligibilité pour les étudiants internationaux (notamment les conditions de ressources).



🔗 [Ameli.fr : La Complémentaire Santé Solidaire](https://www.ameli.fr/assure/droits-demarches/difficultes-acces-aux-soins/complementaire-sante-solidaire) - La page officielle de l''Assurance Maladie.


### 1. Qu''est-ce que la Complémentaire Santé Solidaire (CSS) ?


-   La CSS est une aide qui permet de ne pas avancer la plupart des frais médicaux et d''être remboursé(e) de la part complémentaire (le "ticket modérateur") et de certains dépassements d''honoraires.
-   Elle remplace la Couverture Maladie Universelle Complémentaire (CMU-C) et l''Aide au paiement d''une Complémentaire Santé (ACS).

-   **Gratuite** : Pour les personnes dont les revenus sont très faibles (sous un certain plafond). C''est le cas de nombreux étudiants.

-   Vous pouvez choisir que la CSS soit gérée par votre Caisse Primaire d''Assurance Maladie (CPAM) ou par une mutuelle complémentaire de votre choix.


### 2. Conditions d''éligibilité pour les étudiants internationaux


-   Vous devez avoir un numéro de Sécurité Sociale (même provisoire, mais il faut le NIR définitif pour l''attribution) et un titre de séjour valide (ou VLS-TS validé).
-   Vous devez résider en France depuis au moins 3 mois consécutifs (cette condition de 3 mois ne s''applique pas aux étudiants et titulaires d''un titre de séjour depuis plus d''un an).

-   **Plafonds de ressources** : Votre revenu fiscal de référence (RFR) de l''année N-2 (l''année d''il y a deux ans) doit être inférieur à un certain plafond. Ces plafonds sont révisés chaque année.
-   **Pour les étudiants sans revenus ou faibles revenus** : Si vous étiez sans revenus ou avez eu de très faibles revenus en France l''année N-2 (ce qui est courant pour les primo-arrivants), vous avez de fortes chances d''être éligible à la CSS gratuite.
-   **Ressources prises en compte** : Salaires, gratifications de stage imposables, bourses imposables, revenus de placement. La CAF communique votre RFR à l''Assurance Maladie.
-   **Attention aux ressources de l''étranger** : Si vous avez des revenus importants de l''étranger (versés par vos parents par exemple), ils peuvent être pris en compte dans le calcul de vos ressources, même s''ils ne sont pas déclarés aux impôts en France.




-   Dans la rubrique "Mes démarches" ou "Mes demandes", cherchez la section "Complémentaire Santé Solidaire".

-   Téléchargez le formulaire Cerfa n°12504*07 "Demande de Complémentaire Santé Solidaire" sur `ameli.fr`.
-   Remplissez-le, joignez les pièces justificatives (avis d''imposition, titre de séjour, RIB) et envoyez-le à votre CPAM.

-   Votre **attestation d''affiliation à la Sécurité Sociale** (avec votre NIR).
-   Votre **avis d''imposition (ASDIR) N-2** (même de non-imposition).
-   Votre **RIB** d''un compte bancaire français.
-   Justificatifs de vos **ressources de l''étranger** (relevés bancaires, attestations).



-   **Tiers-payant intégral** : Vous ne payez rien (ou presque) chez le médecin, le pharmacien, le dentiste, l''hôpital. Le tiers-payant est appliqué sur la part Sécurité Sociale et la part complémentaire.
-   **Pas de dépassements d''honoraires** : Les médecins et professionnels de santé ne peuvent pas vous facturer de dépassements d''honoraires (sauf si vous choisissez volontairement un service spécifique, ex: chambre individuelle).

-   La CSS vous ouvre l''accès à des équipements (lunettes, prothèses dentaires, aides auditives) 100% remboursés, sans reste à charge, dans le cadre du dispositif "100% Santé".



-   Votre **avis d''imposition N-2** (ASDIR).


-   **Soyez transparent(e) sur vos ressources**, y compris celles venant de l''étranger.
-   **Si vous êtes éligible, c''est la meilleure mutuelle possible** : Ne prenez pas de mutuelle payante inutilement.


-   **Ne pas faire la demande de CSS par méconnaissance** : Vous payeriez une mutuelle alors que vous pourriez l''avoir gratuitement.


-   🔗 [Adresses des CPAM (Caisses Primaires d''Assurance Maladie)](https://www.ameli.fr/assure/adresses-et-contacts/points-accueil-et-agences-cpam) - Pour contacter votre CPAM.


La Complémentaire Santé Solidaire (CSS) est une mutuelle gratuite (ou à faible coût) accessible sous conditions de ressources, idéale pour de nombreux étudiants internationaux. Elle offre un tiers-payant intégral et des remboursements optimaux, y compris le "100% Santé" pour lunettes et dentaire. Vérifiez votre éligibilité sur `ameli.fr` avec vos ressources N-2 et votre numéro de Sécurité Sociale définitif. Faire cette demande est absolument crucial pour accéder à des soins de qualité sans contrainte financière et optimiser votre budget santé en France.
',
  2,
  60,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 39 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Comparer les offres étudiantes (LMDE, HEYME...)',
  '# Comparer les offres étudiantes (LMDE, HEYME...)

## Pourquoi c''est important ?

Si vous n''êtes pas éligible à la Complémentaire Santé Solidaire (CSS), ou si vous souhaitez une couverture plus spécifique, vous devrez souscrire une mutuelle complémentaire santé payante. Le marché offre de nombreuses options, y compris des mutuelles spécifiquement destinées aux étudiants (LMDE, HEYME, etc.). Comparer ces offres est absolument crucial pour les étudiants internationaux afin de trouver la meilleure couverture pour vos besoins (optique, dentaire, dépassements d''honoraires) au meilleur prix. Une mauvaise comparaison peut vous faire payer trop cher pour des garanties inutiles, ou au contraire, vous laisser sous-assuré(e) pour des risques importants. C''est un investissement essentiel pour votre santé et votre budget.


-   Comprendre les critères de comparaison d''une offre de mutuelle (garanties, franchises, exclusions, prix).


Le choix d''une mutuelle est une décision importante. Prenez le temps de comparer les offres, car toutes ne se valent pas.





-   **HEYME (ex-SMERRA, SMENO, etc.)** : Regroupe d''anciennes mutuelles régionales. Propose des offres spécifiquement conçues pour les étudiants, y compris internationaux, avec des services dédiés (assistance, prévention).

-   De nombreuses mutuelles "grand public" acceptent également les étudiants.
-   **Avantages** : Gamme de garanties plus large, parfois des tarifs compétitifs, surtout si vous bénéficiez d''une mutuelle familiale.

-   **Avantages** : Simplicité si vous êtes déjà client, parfois des offres "packagées" (compte + assurance).
-   **Inconvénients** : Moins d''expertise spécifique en santé.




-   C''est un critère important, mais il doit être mis en perspective avec les garanties offertes. Un prix très bas peut signifier une faible couverture.

-   **Lisez attentivement le tableau de garanties** : C''est le document le plus important. Il indique les niveaux de remboursement pour chaque poste de dépenses, souvent exprimés en pourcentage de la BRSS (Base de Remboursement de la Sécurité Sociale) ou en forfaits.
-   **Exemple de lecture** : "Consultation Généraliste : 100% BRSS" signifie que la mutuelle rembourse le ticket modérateur. "Dépassements d''honoraires : 150% BRSS" signifie qu''elle rembourse jusqu''à 1,5 fois la BRSS.
    -   **Hospitalisation** : Forfait journalier hospitalier, chambre individuelle, dépassements d''honoraires.

-   Certaines mutuelles imposent des "délais de carence" pour certaines garanties (ex: 3 mois pour l''optique, 6 mois pour le dentaire). Pendant cette période, vous ne serez pas remboursé(e) même si vous payez vos cotisations.


-   Vérifiez que la mutuelle propose le tiers-payant, c''est un gros avantage pour ne pas avancer les frais.




-   **BRSS** : Rappelez-vous que les pourcentages s''appliquent à la BRSS, pas toujours au prix réel.
-   **Forfaits** : Pour l''optique et le dentaire, les mutuelles proposent souvent des forfaits annuels en euros.




-   **Utilisez les comparateurs en ligne** (UFC-Que Choisir, LeLynx.fr, LesFurets.com) pour avoir une vue d''ensemble des offres.
-   **Précisez votre statut d''étudiant international** : Certaines offres sont spécifiques.
-   **N''hésitez pas à contacter les mutuelles** pour poser des questions sur les garanties ou les délais de carence.


-   **Oublier d''inclure le tiers-payant** dans vos critères de choix.
-   **Souscrire à une mutuelle si vous êtes éligible à la CSS gratuite** : Vérifiez d''abord votre éligibilité à la CSS.


-   🔗 [LeLynx.fr / LesFurets.com](https://www.lelynx.fr/) - Comparateurs d''assurances.
-   🔗 [France Assureurs : L''assurance santé](https://www.franceassureurs.fr/les-assurances/lassurance-sante) - Informations générales des assureurs.


Comparer les offres de mutuelles étudiantes (LMDE, HEYME) et classiques est une démarche cruciale après votre affiliation à la Sécurité Sociale. Ne vous limitez pas au prix, mais analysez attentivement les garanties (optique, dentaire, dépassements d''honoraires, hospitalisation) dans le tableau de garanties. Tenez compte des délais de carence et des exclusions. Utilisez les comparateurs en ligne et demandez des devis personnalisés. Choisir la mutuelle la plus adaptée à vos besoins et à votre budget est essentiel pour une protection santé optimale en France.
',
  3,
  60,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 39 ---

-- COURS 40 : Doctolib et prise de RDV
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Doctolib et prise de RDV : Facilitez votre accès aux soins en France',
  'doctolib-prise-rdv-facilitez-acces-soins-france',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui ont besoin de consulter un médecin ou un spécialiste. Doctolib est la plateforme de prise de rendez-vous médicaux en ligne la plus utilisée, simplifiant considérablement l''accès aux soins. Nous vous expliquerons comment créer votre compte Doctolib, utiliser les filtres de recherche (par langue parlée, spécialité), et comment fonctionne la téléconsultation, une option pratique et de plus en plus courante. Maîtriser Doctolib est absolument crucial pour trouver un professionnel de santé rapidement, prendre rendez-vous efficacement, et gérer votre suivi médical en toute autonomie et sérénité.',
  'Doctolib : Créez votre compte, filtrez par langue, téléconsultation. Prenez RDV médecin et simplifiez votre accès aux soins en France !',
  'sante',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''utilité et le fonctionnement de Doctolib", "Savoir créer et gérer son compte personnel Doctolib", "Maîtriser les filtres de recherche (spécialité, langues parlées, nouveaux patients)", "Découvrir et utiliser la téléconsultation pour un accès rapide aux soins"]'::jsonb,
  '["Avoir un numéro de Sécurité Sociale (NIR) et une adresse en France"]'::jsonb,
  TRUE,
  4.8,
  800,
  6200
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 40
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Créer son compte Doctolib',
  '# Créer son compte Doctolib

## Pourquoi c''est important ?

Doctolib est la plateforme de prise de rendez-vous médicaux en ligne la plus utilisée en France. Elle vous permet de trouver un médecin (généraliste ou spécialiste), de consulter ses disponibilités et de prendre rendez-vous 24h/24, 7j/7, depuis votre ordinateur ou votre smartphone. Créer votre compte Doctolib est absolument crucial pour les étudiants internationaux afin de faciliter votre accès aux soins, même si vous n''êtes pas encore très à l''aise avec le français. Un compte vous permet de gérer tous vos rendez-vous, de recevoir des rappels, et d''accéder à des fonctionnalités pratiques comme la téléconsultation. C''est la porte d''entrée vers une gestion autonome et simplifiée de votre parcours de santé en France.


-   Identifier les informations nécessaires pour l''inscription.





### 1. Accéder au site Doctolib et démarrer l''inscription


-   Ouvrez votre navigateur internet et tapez l''adresse exacte.
-   Vous pouvez également télécharger l''application mobile Doctolib (disponible sur Google Play Store et App Store).

#### b) Cliquer sur "S''inscrire" ou "Créer mon compte"
-   En haut à droite de la page, cliquez sur "S''inscrire" ou "Connexion" puis "Créer mon compte".



-   **Création d''un mot de passe sécurisé** : Combinez lettres majuscules, minuscules, chiffres et symboles. Notez-le dans un endroit sûr.

-   Vous pouvez, si vous le souhaitez, renseigner votre numéro de Sécurité Sociale (NIR), votre mutuelle, ou d''autres informations de santé. Cela peut faciliter les consultations.
-   Vous n''êtes pas obligé(e) de le faire dès la création du compte.


C''est une étape de sécurité.

-   Après avoir rempli le formulaire, un e-mail de confirmation avec un lien d''activation vous sera envoyé.
-   **Vérifiez votre boîte de réception et vos spams** : L''e-mail peut parfois s''y trouver.
-   **Cliquez sur le lien d''activation** pour valider votre adresse e-mail et activer votre compte.




    -   Voir l''historique de vos rendez-vous passés et à venir.
    -   Accéder à vos documents partagés par les professionnels de santé (ordonnances, comptes rendus d''examen).


-   Votre **passeport** (pour les informations d''identité).


-   **Créez votre compte Doctolib dès votre arrivée en France** : N''attendez pas d''être malade.
-   **Explorez les fonctionnalités de l''application** : Elle est très intuitive.


-   **Utiliser un site non officiel** : Téléchargez UNIQUEMENT l''application officielle Doctolib.


-   🔗 [Doctolib.fr : Créer un compte patient](https://www.doctolib.fr/patient/inscription) - Guide d''inscription.
-   🔗 [Ordre des Médecins](https://www.conseil-national.medecin.fr/) - Pour vérifier l''inscription d''un professionnel de santé.


',
  1,
  50,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 40 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Filtrer par langues parlées',
  '# Filtrer par langues parlées sur Doctolib

## Pourquoi c''est important ?

Lorsque vous avez un problème de santé en France, il est absolument crucial de pouvoir communiquer efficacement avec votre médecin pour bien décrire vos symptômes, comprendre le diagnostic, et suivre les prescriptions. Si le français n''est pas encore votre langue forte, trouver un professionnel de santé qui parle votre langue (ou l''anglais) est un avantage considérable. Le filtre "Langues parlées" sur Doctolib est un outil indispensable pour les étudiants internationaux. Ne pas l''utiliser, c''est risquer des malentendus, une mauvaise prise en charge, ou un sentiment d''isolement. Maîtriser ce filtre vous permet de trouver un médecin avec qui vous pourrez échanger en toute confiance et sérénité.


-   Comprendre l''importance de la communication linguistique avec son médecin.
-   Savoir comment utiliser le filtre "Langues parlées" sur Doctolib.


La barrière de la langue peut être un frein majeur pour l''accès aux soins. Doctolib a intégré des fonctionnalités pour faciliter cette recherche.



### 1. L''importance de la communication avec son médecin




-   La communication est la base d''une bonne relation patient-médecin. Si vous ne comprenez pas, la confiance sera difficile à établir.

### 2. Utiliser le filtre "Langues parlées" sur Doctolib


-   Rendez-vous sur `Doctolib.fr` ou ouvrez l''application.
-   Dans la barre de recherche principale, saisissez la spécialité souhaitée (ex: "Médecin généraliste", "Dermatologue", "Dentiste") et le nom de votre ville ou code postal.

#### b) Appliquer le filtre "Langues parlées"
-   Une fois les résultats affichés, cherchez la section "Filtres" ou "Plus de filtres".
-   Cliquez sur le filtre "Langues parlées".
-   Une liste de langues s''affichera (Anglais, Espagnol, Arabe, Chinois, Allemand, Italien, etc.).
-   Sélectionnez la ou les langues avec lesquelles vous êtes le plus à l''aise (souvent l''anglais est un bon compromis si votre langue n''est pas disponible).

-   Les résultats de la recherche seront mis à jour pour n''afficher que les professionnels de santé ayant déclaré parler la langue sélectionnée.
-   Vous pouvez combiner ce filtre avec d''autres (ex: "Nouveaux patients acceptés", "Conventionné secteur 1").




#### a) L''anglais
-   C''est la langue la plus couramment proposée par les professionnels de santé après le français. De nombreux médecins en France, surtout dans les grandes villes et auprès des jeunes générations, parlent anglais.

#### b) L''espagnol, l''allemand, l''italien

-   Des médecins parlant d''autres langues (arabe, mandarin, portugais, russe) peuvent être trouvés, mais la recherche sera plus spécifique.



#### a) Préparez vos symptômes à l''avance

-   Si vous n''êtes pas sûr de pouvoir communiquer, vous pouvez demander à un ami (si le médecin est d''accord) de vous accompagner pour vous aider à traduire.

#### c) N''hésitez pas à demander des précisions
-   Si vous ne comprenez pas un terme ou une explication, demandez au médecin de reformuler ou d''expliquer plus simplement.

-   Assurez-vous de bien comprendre l''ordonnance (nom du médicament, posologie) et de conserver tous les documents (compte rendu, arrêt de travail).




-   **N''ayez pas peur d''utiliser le filtre des langues** : C''est un service fait pour ça.
-   **Si vous trouvez un médecin qui parle votre langue**, c''est un atout précieux, n''hésitez pas à le déclarer comme médecin traitant.
-   **En cas d''urgence vitale**, la langue n''est pas le facteur clé, et les équipes médicales des urgences sont habituées à gérer les barrières linguistiques.


-   **Sous-estimer l''importance de la communication** en matière de santé.


-   🔗 [Doctolib.fr : Aide - Filtres de recherche](https://www.doctolib.fr/help/articles/193) - Guide sur l''utilisation des filtres.
-   🔗 [Conseil National de l''Ordre des Médecins](https://www.conseil-national.medecin.fr/) - Pour vérifier l''inscription d''un médecin.
-   🔗 [Annuaire des interprètes et traducteurs](https://www.annuaire-traducteur-assermente.fr/) - Si vous avez besoin d''un interprète officiel pour une consultation importante.


Le filtre "Langues parlées" sur Doctolib est un outil indispensable pour les étudiants internationaux afin de trouver un professionnel de santé avec qui vous pourrez communiquer efficacement. Utilisez-le pour rechercher des médecins parlant l''anglais ou votre langue maternelle. Préparez vos symptômes et vos questions à l''avance, et n''hésitez pas à demander des précisions. Une bonne communication avec votre médecin est cruciale pour une prise en charge adaptée et une gestion sereine de votre santé en France.
',
  2,
  55,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 40 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Téléconsultation : Comment ça marche ?',
  '# Téléconsultation : Comment ça marche ?

## Pourquoi c''est important ?

La téléconsultation (consultation médicale à distance par vidéo) est devenue une pratique courante en France, accélérée par la pandémie de COVID-19. Pour les étudiants internationaux, c''est un mode d''accès aux soins absolument crucial qui offre flexibilité, rapidité, et confort, surtout si vous avez des difficultés à vous déplacer, des horaires chargés, ou une barrière linguistique (si le médecin propose de la téléconsultation dans une autre langue). Ne pas connaître ou ne pas savoir utiliser la téléconsultation, c''est se priver d''une solution pratique pour obtenir un avis médical, une ordonnance, ou un renouvellement, sans avoir à vous déplacer. Maîtriser cette option est essentiel pour une gestion moderne et efficace de votre santé.


-   Définir ce qu''est la téléconsultation et son cadre légal.
-   Comprendre le fonctionnement d''une téléconsultation (matériel requis, déroulement).


La téléconsultation fait partie du parcours de soins coordonnés et est remboursée par l''Assurance Maladie comme une consultation classique, si certaines conditions sont respectées.



### 1. Qu''est-ce que la téléconsultation et son cadre légal ?


-   Elle permet au médecin d''évaluer l''état de santé du patient, de poser un diagnostic, de prescrire des examens ou des traitements, et de délivrer des ordonnances.

-   La téléconsultation est **intégrée au parcours de soins coordonnés** : Pour être bien remboursé(e), vous devez avoir un médecin traitant déclaré et le consulter en priorité. Si vous téléconsultez votre médecin traitant, c''est remboursé au même taux qu''une consultation physique (70% par la Sécu, complété par la mutuelle).
-   **Conditions de remboursement** : Pour être remboursée, la téléconsultation doit être réalisée par un médecin que vous avez déjà consulté physiquement au cours des 12 derniers mois (c''est la règle générale, mais il existe des exceptions pour les nouveaux patients, notamment si vous n''avez pas de médecin traitant déclaré).


### 2. Le fonctionnement d''une téléconsultation



-   Sur Doctolib, cherchez la spécialité et la ville, puis filtrez par "Motif : Téléconsultation".

-   **Avant le rendez-vous** : Vous recevez un lien de connexion par e-mail ou SMS. Assurez-vous d''être dans un endroit calme et discret.
-   **Consultation** : Le médecin vous posera des questions, vous demandera de décrire vos symptômes. Il ne peut pas faire d''examen physique, mais peut vous demander de montrer certaines choses (ex: une éruption cutanée).




-   **Renouvellement d''ordonnance** : Pour des traitements de longue durée.
-   **Difficulté à se déplacer** : Si vous êtes loin d''un médecin, ou si vous avez un handicap.

-   **Pas d''examen physique** : Le médecin ne peut pas vous examiner physiquement.
-   **Ne remplace pas l''urgence** : En cas d''urgence vitale, il faut appeler les secours (15, 18, 112) ou se rendre aux urgences.
-   **Peut nécessiter une consultation physique** : Le médecin peut estimer qu''un examen physique est nécessaire et vous orienter vers une consultation en cabinet.




-   **Assurez-vous d''avoir une bonne connexion internet** avant de commencer.
-   **Préparez vos questions et symptômes à l''avance**.


-   **Utiliser la téléconsultation pour une urgence vitale** : C''est dangereux.
-   **Ne pas avoir de médecin traitant déclaré** (si vous n''êtes pas dans une exception) : Le remboursement sera réduit.
-   **Penser que la téléconsultation est toujours gratuite** : Non, elle est remboursée selon les mêmes règles qu''une consultation physique.




La téléconsultation est un mode d''accès aux soins flexible et rapide en France, particulièrement utile pour les étudiants internationaux. Elle est remboursée par la Sécurité Sociale (si parcours de soins respecté) et permet d''obtenir des avis médicaux et des ordonnances à distance. Utilisez des plateformes sécurisées comme Doctolib, assurez-vous d''avoir le matériel requis (smartphone, webcam, micro), et préparez vos questions. La téléconsultation est un excellent complément aux consultations physiques, mais ne remplace pas les urgences vitales ni les examens physiques nécessaires. Maîtrisez-la pour une gestion optimisée de votre santé.
',
  3,
  55,
  NULL,
  '[]'::sql

-- --- Cours 40 ---

-- COURS 41 : Urgences et Numéros utiles
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'Urgences et Numéros utiles en France : Votre guide de sécurité',
  'urgences-numeros-utiles-france-guide-securite',
  'Ce cours est d''une importance capitale pour tous les étudiants internationaux en France. Connaître les numéros d''urgence et savoir comment réagir en cas d''urgence médicale, d''accident, de détresse ou de danger est absolument crucial pour votre sécurité et celle de votre entourage. Nous vous détaillerons les numéros essentiels (15 SAMU, 18 Pompiers, 112 Europe), les alternatives aux urgences (SOS Médecins pour les consultations à domicile), et l''importance de connaître la pharmacie de garde. Maîtriser ces informations est fondamental pour réagir efficacement en cas de situation critique et garantir votre sécurité et votre bien-être sur le territoire français.',
  'Urgences France : 15 SAMU, 18 Pompiers, 112 Europe. SOS Médecins, pharmacie de garde. Votre guide pour agir vite et en sécurité !',
  'sante',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Connaître les numéros d''urgence essentiels (SAMU, Pompiers, Europe)", "Savoir quand appeler les urgences et comment communiquer", "Identifier les alternatives aux urgences hospitalières (SOS Médecins)", "Maîtriser les conseils pour trouver une pharmacie de garde"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  700,
  5000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 41
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  '15 (SAMU), 18 (Pompiers), 112 (Europe)',
  '# 15 (SAMU), 18 (Pompiers), 112 (Europe)

## Pourquoi c''est important ?

En cas d''urgence vitale, d''accident grave, d''incendie, de détresse ou de danger immédiat, chaque seconde compte. Connaître les numéros d''urgence à appeler en France est absolument crucial pour votre sécurité et celle des personnes autour de vous. Ne pas savoir qui appeler, ou hésiter au moment critique, peut avoir des conséquences dramatiques. Pour les étudiants internationaux, ces numéros sont la première ligne de défense en cas de problème grave. Maîtriser ces numéros (15 SAMU, 18 Pompiers, 112 numéro européen) et savoir comment communiquer efficacement avec les services de secours est essentiel pour réagir de manière rapide et appropriée.


-   Savoir quand appeler chaque numéro en fonction de la situation d''urgence.


Les numéros d''urgence sont gratuits et accessibles 24h/24, 7j/7 depuis n''importe quel téléphone (fixe ou mobile), même sans crédit ou carte SIM.

🔗 [Service-Public.fr : Numéros d''urgence](https://www.service-public.fr/particuliers/vosdroits/F3025) - La page officielle des numéros d''urgence.




-   **Nécessité d''une ambulance avec équipe médicale**.

#### b) Rôle du SAMU (Service d''Aide Médicale Urgente)
-   Le SAMU est un centre de régulation médicale. Des médecins régulateurs évaluent la situation et décident du moyen d''intervention le plus adapté (conseil médical, envoi d''un médecin généraliste, d''une ambulance, d''un SMUR - Service Mobile d''Urgence et de Réanimation).

🔗 [SAMU : Qu''est-ce que le SAMU ?](https://www.samu-de-france.fr/le-samu/) - Plus d''informations sur le SAMU.



-   **Accident de la route** : Surtout s''il y a des blessés, des personnes coincées, ou un risque d''incendie.
-   **Dangers domestiques** : Fuite de gaz, risque d''explosion, effondrement.

-   Ils interviennent pour porter secours aux personnes, lutter contre les incendies et gérer les situations de danger. Ils peuvent aussi avoir des compétences médicales d''urgence.


### 3. Le 112 (Numéro d''urgence européen) : Pour toutes les urgences


-   **Toutes les urgences** : Le 112 est le numéro d''urgence unique qui fonctionne partout en Europe. Si vous ne savez pas quel numéro appeler, ou si vous êtes en situation de stress, composez le 112.
-   **Interlocuteurs multilingues** : Dans de nombreux pays, les opérateurs du 112 peuvent répondre en plusieurs langues (souvent l''anglais), ce qui est un atout majeur pour les étrangers.

-   L''opérateur du 112 évaluera la situation et vous redirigera vers le service d''urgence compétent (SAMU, Police, Pompiers) de la France.


### 4. Comment communiquer avec les services d''urgence ?


2.  **Où êtes-vous ?** : Adresse précise (numéro, rue, code postal, ville, étage, numéro d''appartement, éléments distinctifs pour faciliter l''accès - ex: "en face de la boulangerie").
3.  **Pourquoi vous appelez ?** : Nature de l''urgence (accident, incendie, malaise, agression).
4.  **Ce qu''il se passe ?** : Décrivez la situation (nombre de victimes, gravité des blessures, danger immédiat).

-   L''opérateur vous posera des questions pour évaluer la situation. Répondez calmement et précisément.
-   N''raccrochez pas avant que l''opérateur ne vous le dise.


-   Une **liste des numéros d''urgence** à garder sur soi (même si vous la connaissez).


-   **Enregistrez les numéros d''urgence dans votre téléphone**.
-   **Ne faites pas de "faux appels"** : Cela met en danger des vies.
-   **Si vous êtes témoin d''un accident, sécurisez les lieux** (si possible sans vous mettre en danger) et alertez les secours.


-   **Appeler le mauvais numéro** (ex: 15 pour un chat dans un arbre - c''est pour les pompiers).
-   **Ne pas donner d''adresse précise** : Les secours perdront un temps précieux.
-   **Raccrocher trop tôt** : L''opérateur peut avoir besoin de plus d''informations ou de vous donner des instructions.
-   **Faire des blagues ou des canulars** : C''est puni par la loi.


-   🔗 [Service-Public.fr : Numéros d''urgence](https://www.service-public.fr/particuliers/vosdroits/F3025) - La référence pour tous les numéros.
-   🔗 [Ministère de l''Intérieur : Les services d''urgence](https://www.interieur.gouv.fr/Le-ministere/Securite-civile/Les-services-d-urgence) - Présentation des services.
-   🔗 [Ameli.fr : Urgences médicales](https://www.ameli.fr/assure/sante/urgences-et-permanence-de-soins) - Que faire en cas d''urgence.
-   🔗 [Fédération Nationale des Sapeurs-Pompiers de France (FNSPF)](https://www.pompiers.fr/grand-public/les-numeros-d-urgence) - Pour plus d''informations sur les missions.


Connaître les numéros d''urgence (15 SAMU pour urgences médicales graves, 18 Pompiers pour incendies et accidents, 112 numéro européen pour toutes les urgences) est absolument crucial pour votre sécurité en France. En cas d''appel, restez calme, donnez votre adresse précise, la nature de l''urgence, et écoutez attentivement les instructions de l''opérateur. Ces numéros gratuits sont votre première ligne de défense en situation critique. Enregistrez-les dans votre téléphone et sachez comment réagir efficacement.
',
  1,
  60,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 41 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'SOS Médecins : Alternative aux urgences',
  '# SOS Médecins : Alternative aux urgences

## Pourquoi c''est important ?

En cas de problème de santé qui nécessite une consultation rapide mais qui n''est pas une urgence vitale (et que votre médecin traitant n''est pas disponible), il est essentiel de connaître des alternatives aux urgences hospitalières. Les services **SOS Médecins** sont une option précieuse en France, offrant des consultations à domicile ou en cabinet, y compris la nuit et le week-end. Ne pas connaître SOS Médecins, c''est risquer de se rendre aux urgences pour un cas non urgent, de surcharger le système, et d''attendre des heures inutilement. Pour les étudiants internationaux, c''est une solution pratique et efficace pour accéder à des soins rapides et adaptés en dehors des horaires classiques.


-   Définir ce qu''est SOS Médecins et son rôle dans la permanence des soins.


SOS Médecins est une association de médecins libéraux qui assure des visites à domicile et des consultations en cabinet en dehors des heures d''ouverture habituelles des cabinets médicaux.

🔗 [SOS Médecins France : Site officiel](https://www.sosmedecins-france.fr/) - Le portail de l''association.


### 1. Qu''est-ce que SOS Médecins ?




-   Les consultations SOS Médecins sont remboursées par l''Assurance Maladie et la mutuelle comme une consultation classique, avec application du tiers-payant si vous avez votre Carte Vitale à jour.
-   Des majorations peuvent s''appliquer pour les consultations de nuit, le week-end ou les jours fériés.




-   Votre médecin traitant n''est pas disponible et votre état nécessite une consultation rapide.





-   Si vous avez besoin d''un avis médical, d''une ordonnance ou d''un traitement rapide.
-   Pour éviter d''encombrer les services d''urgences hospitaliers et de subir de longues attentes.

-   En cas d''urgence vitale (difficultés respiratoires, douleurs thoraciques intenses, perte de connaissance, traumatisme grave, AVC, hémorragie).
-   Si vous avez un doute sur la gravité de la situation, il est toujours préférable d''appeler le 15.



-   Votre adresse exacte et des indications pour le médecin si c''est une visite à domicile.

-   Votre Carte Vitale à jour, votre carte de mutuelle, votre attestation de droits à l''Assurance Maladie.

-   Même si SOS Médecins est rapide, il peut y avoir un délai d''attente pour le médecin, surtout la nuit.




-   **Si vous n''avez pas encore de médecin traitant déclaré**, SOS Médecins peut être une solution temporaire, mais rappelez-vous que la consultation sans médecin traitant est moins bien remboursée.


-   **Penser que SOS Médecins est gratuit** : C''est remboursé, mais il y a des frais à avancer (ou le tiers-payant si activé).
-   **Sous-estimer la gravité d''une situation et ne pas appeler le 15**.


-   🔗 [SOS Médecins France : Site officiel](https://www.sosmedecins-france.fr/) - Le portail de l''association.


SOS Médecins est une excellente alternative aux urgences hospitalières pour les problèmes de santé qui nécessitent une intervention rapide mais qui ne sont pas vitaux. Ils proposent des consultations à domicile ou en cabinet, y compris la nuit et le week-end, et sont remboursés par l''Assurance Maladie. Contactez-les par téléphone (36 24 ou numéro local) et ayez votre Carte Vitale et vos informations médicales à portée de main. Connaître SOS Médecins est crucial pour accéder à des soins adaptés et efficaces en dehors des horaires habituels de consultation.
',
  2,
  55,
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 41 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'c4d5c2aa-6b48-4814-af8a-d60dc4372ba4',
  'La pharmacie de garde',
  '# La pharmacie de garde

## Pourquoi c''est important ?

En dehors des horaires d''ouverture habituels des pharmacies (le soir, la nuit, le dimanche, les jours fériés), vous pourriez avoir besoin d''acheter un médicament d''urgence (avec ou sans ordonnance). Savoir comment trouver la "pharmacie de garde" la plus proche de chez vous est absolument crucial pour les étudiants internationaux, car c''est le seul moyen d''accéder à des médicaments en dehors des heures normales. Ne pas connaître ce service peut vous laisser sans solution en cas de besoin urgent, vous obligeant potentiellement à vous rendre aux urgences hospitalières pour un problème qui aurait pu être réglé plus simplement. Maîtriser cette information est essentielle pour garantir votre accès aux soins et médicaments à tout moment.


-   Définir ce qu''est une pharmacie de garde et son rôle.
-   Maîtriser les conseils pour accéder aux médicaments en dehors des heures d''ouverture.


Les pharmacies de garde assurent la continuité de la délivrance de médicaments en dehors des heures d''ouverture habituelles. Ce service est organisé par les autorités de santé pour couvrir tout le territoire.



### 1. Qu''est-ce qu''une pharmacie de garde ?

Le service d''urgence des médicaments.

-   Ce service est organisé par les Syndicats des Pharmaciens d''Officine et les Agences Régionales de Santé (ARS).

-   Les pharmacies se relaient pour assurer ce service. Il s''agit souvent d''un roulement entre les pharmacies d''une même zone géographique.
-   La pharmacie de garde n''est pas toujours la plus proche de chez vous.



-   **Le 32 37** : C''est le numéro national (service payant : 0,35 €/min + prix appel).
-   **Le 116 117** : C''est le numéro national pour contacter un médecin de garde (la régulation médicale pourra aussi vous orienter vers une pharmacie de garde).

-   **Google Maps / Sites d''annuaires** : En cherchant "pharmacie de garde" sur Google Maps, vous pouvez trouver des informations.
-   **MonPharmacien.fr** : C''est un site qui permet de trouver une pharmacie de garde par géolocalisation ou adresse.






-   Si vous avez besoin d''un médicament sur ordonnance, vous devez impérativement présenter une ordonnance valide.

-   Si votre Carte Vitale n''est pas à jour ou si vous n''avez pas encore le NIR définitif, le pharmacien vous remettra une feuille de soins papier.

#### c) Pièce d''identité


### 4. Conseils pour accéder aux médicaments en dehors des heures d''ouverture


-   Si vous avez une maladie chronique, assurez-vous d''avoir toujours une réserve de vos médicaments.

-   **Pharmacie de garde** : C''est la solution.
-   **Ne vous rendez pas aux urgences hospitalières pour un simple renouvellement d''ordonnance** ou un petit bobo, sauf si vous n''avez vraiment aucune autre solution ou si la situation est grave.





-   **Si vous êtes dans une nouvelle ville**, la première chose à faire si vous avez un besoin urgent est de chercher "pharmacie de garde + [nom de la ville]" sur internet.
-   **N''hésitez pas à demander conseil au pharmacien** : C''est un professionnel de santé.


-   **Ne pas avoir d''ordonnance pour un médicament soumis à prescription**.


-   🔗 [Conseil National de l''Ordre des Pharmaciens](https://www.ordre.pharmacien.fr/) - L''autorité des pharmaciens.


La pharmacie de garde est un service essentiel en France pour accéder à des médicaments en dehors des horaires d''ouverture habituels. Vous pouvez la trouver via le 32 37 (payant), les sites internet (MonPharmacien.fr) ou l''affichage en pharmacie. Ayez toujours sur vous votre ordonnance (si nécessaire), votre Carte Vitale et votre carte de mutuelle pour le tiers-payant. Connaître ce service est crucial pour obtenir des médicaments d''urgence et éviter de vous rendre inutilement aux urgences hospitalières, assurant ainsi votre accès aux soins à tout moment.
',
  3,
  50,
  NULL,
  '[]'::sql

