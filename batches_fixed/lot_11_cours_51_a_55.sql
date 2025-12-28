-- ==========================================
-- LOT 11 : Cours 51 à 55
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 51 ---

-- COURS 52 : Frais bancaires et Agios
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Frais bancaires et Agios en France : Comprendre et éviter les coûts cachés',
  'frais-bancaires-agios-france-comprendre-eviter-couts-caches',
  'Ce cours est essentiel pour tous les étudiants internationaux qui gèrent un compte bancaire en France. Les frais bancaires et les "agios" peuvent rapidement grever votre budget s''ils ne sont pas compris et maîtrisés. Nous vous expliquerons les différents types de frais (tenue de compte, carte bancaire, virements internationaux), la distinction cruciale entre le "découvert autorisé" et le "découvert non autorisé", et les fameuses "commissions d''intervention" qui surviennent en cas d''incident. Maîtriser ces coûts cachés est absolument crucial pour protéger votre argent, éviter les pénalités, et gérer votre budget de manière autonome et efficace. C''est la clé pour une relation saine avec votre banque.',
  'Frais bancaires et agios : tenue de compte,
  découvert autorisé/non autorisé,
  commissions d''intervention. Évitez les coûts cachés et protégez votre budget !',
  'budget_finances',
  'intermediaire',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Identifier les frais bancaires courants (tenue de compte, carte, virements)",
  "Comprendre la différence entre découvert autorisé et non autorisé",
  "Maîtriser le concept des commissions d''intervention et comment les éviter",
  "Savoir comment comparer les tarifs bancaires et optimiser son budget"]'::jsonb,
  '["Avoir un compte bancaire français"]'::jsonb,
  0,
  TRUE,
  4.5,
  100,
  500,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 52
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Frais de tenue de compte',
  '# Frais de tenue de compte

## Pourquoi c''est important ?

Lorsque vous ouvrez un compte bancaire en France, l''un des premiers frais que vous rencontrerez est le "frais de tenue de compte". Il s''agit d''une somme que la banque prélève pour la simple gestion de votre compte (relevés, opérations courantes, etc.). Comprendre ces frais, leur montant, leur fréquence et s''ils sont négociables (ou gratuits) est absolument crucial pour les étudiants internationaux afin d''éviter des dépenses inutiles et de mieux maîtriser leur budget. Ne pas connaître ces frais, c''est risquer de voir votre solde diminuer progressivement sans comprendre pourquoi. C''est un coût récurrent à intégrer dans votre budget mensuel.


-   Maîtriser les conseils pour comparer ces frais et choisir l''offre la plus avantageuse.


Les frais de tenue de compte sont une rémunération pour la banque. Ils varient considérablement d''un établissement à l''autre.



### 1. Qu''est-ce que les frais de tenue de compte ?


-   Ils sont distincts de la cotisation de la carte bancaire ou des frais d''opérations spécifiques.







-   **Avantage majeur** : C''est un point fort de leur modèle économique.



### 3. Comment comparer ces frais et choisir l''offre la plus avantageuse ?


-   Demandez toujours la brochure tarifaire complète de la banque. C''est un document obligatoire qui liste tous les frais.
-   Cherchez la ligne "Frais de tenue de compte".

#### b) Comparez les offres "Jeunes" ou "Étudiants"

-   Les comparateurs comme `Service-Public.fr`, UFC-Que Choisir, LeLynx.fr peuvent vous aider à avoir une vue d''ensemble des frais des différentes banques.





-   **Posez directement la question à votre conseiller** : "Est-ce que les frais de tenue de compte sont gratuits avec mon offre étudiant ? Quelles sont les conditions ?"
-   **N''hésitez pas à changer de banque** si vous trouvez une offre plus avantageuse et que votre situation le permet. La procédure est simple ("aide à la mobilité bancaire").


-   **Ne pas être informé(e) des frais de tenue de compte** : Ils peuvent s''accumuler.
-   **Payer des frais alors que vous pourriez les avoir gratuitement** (en changeant de banque ou d''offre).
-   **Oublier de lire la brochure tarifaire** (c''est là que tout est écrit).


-   🔗 [Autorité de Contrôle Prudentiel et de Résolution (ACPR)](https://acpr.banque-france.fr/) - L''organisme qui régule les banques.


Les frais de tenue de compte sont un coût récurrent pour la gestion de votre compte bancaire en France. Ils varient fortement : les banques traditionnelles les facturent généralement (sauf offres étudiants), tandis que les banques en ligne et néo-banques les proposent souvent gratuitement (sous conditions). Lisez attentivement la brochure tarifaire, comparez les offres (notamment les packages étudiants), et utilisez les comparateurs en ligne. Optimiser ces frais est crucial pour maîtriser votre budget. N''hésitez pas à changer de banque si vous trouvez une offre plus avantageuse pour vos besoins.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 52 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le découvert autorisé vs non-autorisé',
  '# Le découvert autorisé vs non-autorisé

## Pourquoi c''est important ?

Lorsque votre solde bancaire devient négatif, on parle de "découvert". En France, il est absolument crucial de faire la distinction entre un "découvert autorisé" et un "découvert non autorisé". Cette différence a un impact majeur sur les frais bancaires qui vous seront facturés et sur votre relation avec la banque. Un découvert non autorisé peut entraîner des coûts très élevés (agios, commissions d''intervention) et nuire à votre historique bancaire. Pour les étudiants internationaux, souvent avec des revenus limités ou des flux financiers parfois irréguliers, comprendre ces notions est fondamental pour éviter les pénalités et maintenir un équilibre budgétaire.


-   Définir ce qu''est un découvert bancaire.
-   Identifier les frais associés à chaque type de découvert (agios, commissions d''intervention).





### 1. Qu''est-ce qu''un découvert bancaire ?


-   Votre compte est en découvert lorsque le solde disponible est inférieur à zéro. Vous avez alors dépensé plus d''argent que vous n''en aviez sur votre compte.




-   C''est une facilité de caisse que la banque vous accorde pour vous permettre d''avoir un solde négatif temporairement, jusqu''à un certain montant et pour une certaine durée (souvent 15 jours consécutifs par mois).
-   **Ce n''est pas un droit, c''est un service que la banque peut accorder ou non.**

-   Le taux d''intérêt (TAEG - Taux Annuel Effectif Global) est indiqué dans votre convention de compte. Il est souvent autour de 8% à 15% par an.





    -   Vous n''avez pas de découvert autorisé.

#### b) Coût (agios et commissions d''intervention)
-   **Agios majorés** : Le taux d''intérêt sur un découvert non autorisé est beaucoup plus élevé que pour un découvert autorisé (jusqu''à 20% par an).
-   **Commissions d''intervention** : Ce sont des frais fixes que la banque prélève pour chaque opération qui vous place en découvert non autorisé ou qui aggrave ce découvert. Le montant est plafonné par la loi (environ 8€ par opération, avec un plafond mensuel). Ces commissions sont très coûteuses. (Voir leçon suivante sur les commissions d''intervention).




-   Utilisez l''application mobile de votre banque pour consulter votre solde et l''historique de vos opérations.

-   Si vous pensez avoir des besoins ponctuels, discutez avec votre conseiller pour obtenir un petit découvert autorisé. Il est toujours moins cher qu''un découvert non autorisé.
-   **N''en faites pas une habitude** : Le découvert autorisé est une facilité, pas un revenu.

#### c) Anticipez vos dépenses et vos rentrées d''argent
-   Planifiez vos paiements (loyer, factures) en fonction de l''arrivée de votre salaire ou de vos bourses.
-   Ne dépensez pas l''argent que vous n''avez pas encore reçu.





-   **Comprenez les frais avant d''utiliser le découvert.**


-   **Ne pas connaître le montant de son découvert autorisé** (ou s''il existe).


-   🔗 [ACPR (Autorité de Contrôle Prudentiel et de Résolution)](https://acpr.banque-france.fr/) - L''organisme qui régule les banques.


La distinction entre découvert autorisé (prévu par contrat, moins cher en agios) et non autorisé (pénalisant, commissions d''intervention) est cruciale. Le découvert non autorisé entraîne des frais très élevés et peut nuire à votre historique bancaire. Suivez votre solde en temps réel, anticipez vos dépenses, et contactez votre banque en cas de difficulté. Éviter le découvert non autorisé est fondamental pour protéger votre budget et maintenir une relation saine avec votre banque en France.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 52 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Commissions d''intervention : Comment les éviter',
  '# Commissions d''intervention : Comment les éviter

## Pourquoi c''est important ?

Les "commissions d''intervention" sont parmi les frais bancaires les plus coûteux et les plus frustrants en France. Elles sont prélevées par votre banque à chaque fois qu''une opération (paiement par carte, retrait, prélèvement) vous place en découvert non autorisé ou aggrave ce découvert. Ne pas comprendre ce qu''elles sont, comment elles fonctionnent, et comment les éviter, peut entraîner une accumulation rapide de frais exorbitants qui peuvent sérieusement impacter votre budget. Pour les étudiants internationaux, souvent avec des budgets serrés, maîtriser ce sujet est absolument crucial pour protéger votre argent et éviter ces dépenses imprévues qui peuvent vous mettre en difficulté financière.


-   Définir ce qu''est une commission d''intervention.
-   Identifier les plafonds légaux des commissions d''intervention.
-   Maîtriser les conseils pratiques pour éviter les commissions d''intervention.


Les commissions d''intervention sont une rémunération de la banque pour le traitement manuel d''une opération qui aurait dû être rejetée faute de provision suffisante.



### 1. Qu''est-ce qu''une commission d''intervention ?

Le coût d''un incident bancaire.

-   Une commission d''intervention est un frais prélevé par votre banque lorsque, faute de provision suffisante sur votre compte, elle accepte d''honorer une opération (un paiement par carte, un chèque, un retrait, un prélèvement) qui aurait dû être refusée.
-   C''est la rémunération de la banque pour "l''examen d''une opération irrégulière" et la décision de la laisser passer.


-   Le montant unitaire d''une commission d''intervention est généralement de **8€ par opération**.

🔗 [Service-Public.fr : Commissions d''intervention](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations officielles.



-   Lorsque vous tentez d''effectuer une opération alors que votre compte n''a pas les fonds nécessaires (et que vous n''avez pas de découvert autorisé, ou que vous le dépassez), le système bancaire détecte une "irrégularité".
-   Au lieu de rejeter automatiquement l''opération, la banque l''examine (manuellement ou via des algorithmes) et décide si elle l''accepte ou la refuse.
-   Si elle l''accepte, elle vous facture une commission d''intervention pour ce "service".

#### b) Exemples d''opérations concernées
-   Retrait d''espèces.
-   Chèque présenté à l''encaissement.

### 3. Les conséquences financières : Des frais qui s''accumulent


-   Ces frais sont souvent plus élevés que l''opération elle-même.


#### c) Signal d''alarme
-   L''accumulation de commissions d''intervention est un signal d''alarme pour la banque, qui peut alors vous contacter, vous proposer des solutions, ou à terme, décider de restreindre vos services ou de clôturer votre compte.

### 4. Comment éviter les commissions d''intervention ?


-   **Application mobile** : Consultez votre solde et l''historique de vos opérations régulièrement (plusieurs fois par jour si besoin) via l''application mobile de votre banque.

#### b) N''ayez pas de découvert non autorisé
-   **Demandez un découvert autorisé** : Si vous avez des besoins ponctuels, négociez un petit découvert autorisé avec votre conseiller. Même s''il est payant (agios), il est moins cher que le découvert non autorisé + les commissions.

#### c) Anticipez vos dépenses et vos rentrées d''argent
-   **Provisions** : Assurez-vous d''avoir toujours une provision suffisante sur votre compte pour couvrir toutes vos dépenses.

#### d) En cas de difficulté : Réagissez avant l''incident
-   **Versement rapide** : Si vous savez que votre compte va être à découvert, faites un versement rapide (virement instantané, dépôt d''espèces) pour le créditer avant qu''une opération ne se présente.
-   **Contactez votre banque** : Si vous anticipez une difficulté, contactez votre conseiller pour voir s''il peut vous aider (découvert exceptionnel, report de paiement).
-   **Modifiez vos plafonds** : Réduisez temporairement vos plafonds de paiement et de retrait pour éviter d''aggraver le découvert.




-   **La meilleure façon d''éviter les commissions d''intervention est de ne jamais être en découvert non autorisé.**
-   **Même pour des petites sommes, une commission d''intervention peut s''appliquer**.
-   **Vérifiez le plafond des commissions** qui s''applique à votre situation (48€ ou 80€ par mois).
-   **Demandez une offre bancaire qui inclut une vigilance accrue ou des services d''alertes**.


-   **Ignorer la notion de commission d''intervention** : C''est une source de frais majeure.


-   🔗 [Service-Public.fr : Commissions d''intervention](https://www.service-public.fr/particuliers/vosdroits/F3025) - Guide officiel.
-   🔗 [ACPR (Autorité de Contrôle Prudentiel et de Résolution)](https://acpr.banque-france.fr/) - L''organisme qui régule les banques.


Les commissions d''intervention sont des frais coûteux (8€ par opération, plafonnés à 48€ ou 80€ par mois) prélevés par votre banque lorsque vous effectuez des opérations en découvert non autorisé. Pour les éviter, suivez votre solde en temps réel, activez les alertes, et n''ayez jamais de découvert non autorisé (demandez un petit découvert autorisé si besoin). Anticipez vos dépenses et vos rentrées d''argent, et réagissez rapidement en cas de difficulté. Maîtriser ces conseils est absolument crucial pour protéger votre budget et éviter les frais imprévus en France.
',
  NULL,
  '[]'::sql

-- --- Cours 52 ---

-- COURS 53 : Gérer son budget étudiant
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Gérer son budget étudiant en France : Maîtriser ses dépenses',
  'gerer-budget-etudiant-france-maitriser-depenses',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France. Gérer son budget est absolument crucial pour réussir vos études sans stress financier. Le coût de la vie en France peut être élevé, surtout dans les grandes villes, et il est facile de se laisser déborder. Nous vous présenterons des estimations du coût de la vie moyen par ville, des méthodes de gestion budgétaire adaptées aux étudiants (comme la règle 50/30/20), et des applications mobiles pour suivre vos dépenses. Maîtriser ces outils et techniques est fondamental pour équilibrer vos revenus et vos dépenses, éviter les découverts, et profiter pleinement de votre expérience en France sans soucis d''argent.',
  'Budget étudiant France : coût de la vie (par ville),
  méthode 50/30/20,
  applications de gestion. Maîtrisez vos dépenses et vivez sereinement !',
  'budget_finances',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Estimer le coût de la vie moyen dans différentes villes françaises", "Appliquer des méthodes de gestion budgétaire (règle 50/30/20) à votre situation", "Découvrir et utiliser des applications mobiles pour le suivi de dépenses", "Maîtriser les conseils pour équilibrer ses revenus et dépenses et éviter les difficultés"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5,
  100,
  500,
  4,
  0
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 53
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Coût de la vie moyen par ville',
  '# Coût de la vie moyen par ville en France

## Pourquoi c''est important ?

Le coût de la vie en France est loin d''être uniforme. Il varie considérablement d''une ville à l''autre, et notamment entre Paris et les autres villes universitaires. Comprendre ces disparités est absolument crucial pour les étudiants internationaux afin de planifier votre budget avant même votre arrivée, choisir une ville d''études adaptée à vos moyens, et ne pas être surpris(e) par des dépenses plus élevées que prévu. Une mauvaise estimation du coût de la vie peut entraîner des difficultés financières, du stress, et compromettre votre expérience en France. Maîtriser ces informations est fondamental pour une installation réaliste et une gestion budgétaire efficace.




Le logement est de loin le poste de dépense le plus important. C''est lui qui fait la plus grande différence entre les villes.



### 1. Les principaux postes de dépenses d''un étudiant


-   **Taxe d''habitation** : Supprimée pour les résidences principales depuis 2023.




-   Droits d''inscription universitaires.




-   **Alimentation et loisirs** : Généralement plus chers qu''en province.

-   **Logement** : Les loyers sont significativement plus abordables qu''à Paris. Un studio coûte entre 350€ et 600€.






**Budget mensuel total (hors droits d''inscription)** :


🔗 [Campus France : Estimer votre budget](https://www.campusfrance.org/fr/estimer-votre-budget) - Outil d''estimation.



-   **Vérifiez le DPE** pour éviter les "passoires thermiques" coûteuses en énergie.

-   **Faites vos courses dans les supermarchés "hard discount"** (Lidl, Aldi) ou les marchés de quartier.



-   Achetez des livres d''occasion, utilisez la bibliothèque universitaire.





-   **N''ayez pas peur de demander des réductions étudiants** (cartes, abonnements).






Le coût de la vie en France varie fortement d''une ville à l''autre, Paris étant la plus chère. Pour gérer votre budget étudiant, identifiez vos postes de dépenses (logement, alimentation, transports, santé, études, loisirs) et utilisez des méthodes de gestion (comme la règle 50/30/20). Optimisez chaque dépense en privilégiant les logements abordables, les restaurants universitaires, les transports en commun, et les aides sociales (APL, CSS). Maîtriser ces informations est fondamental pour une gestion financière sereine et pour profiter pleinement de votre expérience en France sans stress d''argent.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 53 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4102-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Méthode 50/30/20 adaptée étudiant',
  '# Méthode 50/30/20 adaptée étudiant

## Pourquoi c''est important ?

Gérer un budget étudiant en France, surtout en tant qu''international(e), peut être un défi. La méthode des "50/30/20" est une technique de gestion budgétaire simple et efficace qui vous aide à allouer vos revenus de manière structurée entre vos besoins, vos envies et votre épargne. Adapter cette méthode à votre profil d''étudiant est absolument crucial pour éviter les découverts, anticiper vos dépenses, et vous assurer une stabilité financière. Ne pas avoir de méthode de gestion budgétaire, c''est risquer de dépenser sans compter, de se retrouver à découvert, et de manquer d''argent pour les besoins essentiels. Maîtriser cette approche est fondamental pour une vie étudiante sereine et autonome.









    -   **50% pour les "besoins"** (Needs).
    -   **30% pour les "envies"** (Wants).
    -   **20% pour l''"épargne et le remboursement de dettes"** (Savings/Debts).

-   Développer une habitude d''épargne.



    -   **Frais d''études obligatoires** (droits d''inscription, matériel scolaire indispensable).
    -   **Hygiène et santé** (médicaments sur ordonnance, produits d''hygiène de base).

-   **Flexibilité** : C''est la catégorie où vous pouvez réduire les dépenses en cas de budget serré.

#### c) 20% pour l''ÉPARGNE et les DETTES (Savings/Debts)
-   **Définition** : Argent mis de côté pour l''avenir ou pour rembourser des dettes.
    -   **Épargne pour projets futurs** : Voyages, achat d''un ordinateur, financement d''une formation.







-   Votre budget initial peut nécessiter des ajustements. N''ayez pas peur de le modifier si les catégories ne correspondent pas à votre réalité.






-   **N''hésitez pas à utiliser des outils numériques** pour vous aider.


-   **Se décourager en cas de dépassement** : C''est normal au début, ajustez !
-   **Ne pas prévoir d''épargne pour les imprévus**.


-   🔗 [Campus France : Estimer votre budget](https://www.campusfrance.org/fr/estimer-votre-budget) - Outil d''estimation.


La méthode 50/30/20 est un excellent cadre pour gérer votre budget d''étudiant international en France. Allouez 50% de vos revenus aux besoins essentiels (loyer, alimentation, transports), 30% aux envies (loisirs, sorties), et 20% à l''épargne ou au remboursement de dettes. Calculez vos pourcentages, suivez vos dépenses régulièrement (via une application ou un tableau), et ajustez votre budget si nécessaire. Adopter cette méthode est fondamental pour éviter les découverts, anticiper vos dépenses et vivre une vie étudiante sereine et autonome.
',
  NULL,
  '[]'::sql
-- LEÇONS pour COURS 53 (suite)
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Applications de gestion de budget',
  '# Applications de gestion de budget

## Pourquoi c''est important ?

Pour suivre efficacement vos dépenses et respecter votre budget (comme la méthode 50/30/20), les applications mobiles de gestion de budget sont des outils absolument indispensables. Elles vous permettent de catégoriser vos dépenses en temps réel, de visualiser votre solde, de créer des alertes, et d''avoir une vue d''ensemble de votre situation financière directement sur votre smartphone. Pour les étudiants internationaux, souvent mobiles et à l''aise avec le numérique, ces applications sont cruciales pour garder le contrôle sur votre argent, éviter les découverts, et prendre des décisions éclairées sur vos dépenses. C''est la solution la plus moderne pour une gestion budgétaire autonome et efficace.


-   Comprendre l''utilité des applications de gestion de budget.
-   Maîtriser les conseils pour choisir et utiliser l''application la plus adaptée à vos besoins.


Ces applications transforment la gestion de votre budget d''une tâche fastidieuse en une habitude simple et visuelle.

🔗 [Banque de France : Gérer votre budget](https://www.banque-france.fr/fr/vos-services/particuliers/comprendre-votre-banque/gerer-votre-budget) - Mentionne l''utilisation d''outils.



### 1. L''utilité des applications de gestion de budget




-   Recevez des notifications en cas de solde faible, de dépassement d''un budget par catégorie, ou de dépenses inhabituelles.

-   Définissez des objectifs d''épargne ou des budgets mensuels par catégorie, et l''application vous aide à les respecter.


Un large choix d''outils.


-   **Exemples** : Bankin'', Linxo, BudgetBakers Wallet, You Need A Budget (YNAB).
-   **Inconvénients** : Certaines versions avancées peuvent être payantes. Il faut donner l''accès à vos données bancaires (sécurisé via PSD2).

-   **Pour qui ?** : Ceux qui préfèrent une gestion très active et manuelle, ou qui ont des besoins très spécifiques non couverts par les applications existantes. Cela demande plus de discipline et de temps. Des modèles de budget étudiant sont disponibles en ligne pour vous aider à démencer, comme ceux proposés par les banques ou les associations étudiantes. Vous pouvez créer des onglets pour chaque catégorie de dépenses (logement, alimentation, transport, études, loisirs, etc.) et y reporter vos dépenses au fur et à mesure. L''avantage est la totale flexibilité et la possibilité d''intégrer des graphiques personnalisés.

🔗 [UFC-Que Choisir : Applications de gestion de budget](https://www.quechoisir.org/guide-d-achat-applications-de-gestion-de-budget-n21674/) - Test et comparatif d''applications tierces.

### 3. Comment choisir et utiliser l''application la plus adaptée ?


#### a) Déterminez votre niveau d''autonomie
-   Si vous êtes à l''aise avec la saisie manuelle, un tableur ou une application simple peut suffire.
-   Si vous préférez l''automatisation et le suivi en temps réel, une application bancaire ou tierce est plus pertinente.


-   **Sécurité** : Assurez-vous que l''application est agréée et respecte les normes de sécurité. La connexion est généralement protégée par une authentification forte.


-   Fixez des budgets mensuels pour chaque catégorie de dépenses (selon la méthode 50/30/20) et des objectifs d''épargne.




-   **N''ayez pas peur des chiffres** : Ces outils sont là pour simplifier, pas pour compliquer.


-   **Ne pas utiliser d''outil de gestion** : Le budget devient vite incontrôlable.
-   **Oublier de déconnecter vos comptes** si vous changez d''application.
-   **Ne pas tenir compte des frais bancaires** (commissions d''intervention, agios) dans votre budget.


-   🔗 [Bankin'' : Site officiel](https://bankin.com/fr/)
-   🔗 [ACPR (Autorité de Contrôle Prudentiel et de Résolution)](https://acpr.banque-france.fr/) - Pour vérifier l''agrément des applications qui accèdent à vos comptes.


Les applications de gestion de budget sont des outils indispensables pour les étudiants internationaux en France. Elles vous permettent de suivre, catégoriser et visualiser vos dépenses en temps réel (via les applications bancaires ou agrégatrices comme Bankin''/Linxo) ou manuellement (avec un tableur). Choisissez l''application adaptée à votre niveau d''autonomie, connectez vos comptes bancaires de manière sécurisée, et définissez des objectifs budgétaires. Intégrez cette gestion à votre routine pour maintenir un équilibre financier, éviter les découverts, et vivre une vie étudiante sereine et autonome en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 53 ---

-- COURS 54 : Aides financières d'urgence
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Aides financières d''urgence pour étudiants en France : Où trouver de l''aide',
  'aides-financieres-urgence-etudiants-france',
  'Ce cours est d''une importance capitale pour tous les étudiants internationaux en France qui pourraient faire face à des difficultés financières imprévues. L''isolement, les retards de bourses, ou des événements inattendus peuvent rapidement mettre en péril votre équilibre budgétaire. Connaître les dispositifs d''aides financières d''urgence est absolument crucial pour ne pas rester seul(e) face à ces problèmes. Nous vous présenterons l''aide ponctuelle du CROUS, les bourses au mérite ou régionales, et l''importance de contacter les assistantes sociales. Maîtriser ces ressources est fondamental pour trouver un soutien rapide, éviter les situations de précarité, et poursuivre vos études en France avec plus de sérénité.',
  'Aides financières urgentes : CROUS (ponctuel),
  bourses régionales,
  assistante sociale. Ne restez pas seul face aux difficultés !',
  'budget_finances',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''existence et l''accès aux aides financières d''urgence", "Identifier l''aide ponctuelle du CROUS et ses conditions", "Découvrir les bourses au mérite et les aides des collectivités locales", "Maîtriser la démarche pour contacter une assistante sociale et obtenir de l''aide"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.5,
  100,
  500,
  4,
  0
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 54
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'L''aide ponctuelle du CROUS',
  '# L''aide ponctuelle du CROUS

## Pourquoi c''est important ?

Même avec un budget bien géré, des imprévus peuvent survenir et vous placer dans une situation de difficulté financière aigüe. La vie étudiante est souvent précaire, et un problème de santé, un retard de virement de l''étranger, ou un accident peuvent rapidement vous mettre en péril. L''**aide ponctuelle du CROUS** (Fonds National d''Aide d''Urgence - FNAU) est un dispositif précieux, spécifiquement conçu pour apporter un soutien rapide aux étudiants qui traversent une difficulté passagère. Ne pas connaître l''existence et les modalités d''accès à cette aide, c''est risquer de rester sans solution face à une urgence financière. Maîtriser cette ressource est absolument crucial pour les étudiants internationaux afin de trouver un filet de sécurité.


-   Définir ce qu''est l''aide ponctuelle du CROUS (FNAU).
-   Comprendre les conditions d''éligibilité et les situations concernées.
-   Maîtriser les conseils pour optimiser vos chances d''obtenir cette aide.


Le Fonds National d''Aide d''Urgence (FNAU) géré par le CROUS est un dispositif de solidarité qui aide les étudiants en situation de précarité ou de difficultés passagères.

🔗 [CROUS : Les aides spécifiques](https://www.crous.fr/les-aides-specifiques-du-crous/) - La page officielle sur les aides d''urgence.


### 1. Qu''est-ce que l''aide ponctuelle du CROUS (FNAU) ?


-   L''aide ponctuelle est une aide financière d''urgence, versée en une seule fois (ou en plusieurs fois si la situation l''exige) pour faire face à une difficulté grave et imprévue.
-   Elle n''est pas une bourse annuelle, mais un soutien exceptionnel.
-   **Non remboursable** : Ce n''est pas un prêt, vous n''avez pas à la rembourser.

-   **Tous les étudiants inscrits dans un établissement d''enseignement supérieur français**, qu''ils soient français ou étrangers.
-   Vous devez être âgé(e) de moins de 35 ans au 1er septembre de l''année universitaire concernée.
-   Vous devez être en situation de précarité avérée ou rencontrer une difficulté financière grave et imprévue (rupture familiale, problème de santé, décès d''un proche, perte d''emploi imprévue).

-   L''aide ponctuelle est cumulable avec d''autres aides (bourses sur critères sociaux, APL).

🔗 [etudiant.gouv.fr : Aides financières pour étudiants](https://www.etudiant.gouv.fr/fr/aides-financieres-pour-etudiants-1786) - Mentionne l''aide ponctuelle.

### 2. Conditions d''éligibilité pour les étudiants internationaux


-   **Période d''étude** : Vous devez avoir commencé vos études en France depuis au moins 6 mois pour que votre demande soit prise en compte, sauf si la difficulté est survenue après votre arrivée.
    -   Perte d''un job étudiant imprévu.
    -   Arrêt des virements parentaux suite à un événement imprévu dans votre pays d''origine.
    -   Décès ou maladie grave d''un parent qui vous aidait financièrement.

-   Votre demande sera instruite par une **assistante sociale du CROUS**. C''est elle qui évalue votre situation sociale et financière.

### 3. Comment faire la demande d''aide ponctuelle ?

Contactez le CROUS via l''assistante sociale.

#### a) Premier contact : L''assistante sociale du CROUS
-   **Impératif** : La demande d''aide ponctuelle se fait toujours via une **assistante sociale du CROUS**. C''est elle qui monte le dossier et le présente à la commission.
-   **Où la trouver ?** : Contactez le service social de votre CROUS (recherchez "Service social CROUS [votre ville]" sur internet). Vous pouvez prendre rendez-vous en ligne ou par téléphone.

#### b) Préparer le rendez-vous avec l''assistante sociale
    -   Votre pièce d''identité et titre de séjour.
    -   Votre RIB d''un compte bancaire français.
    -   Tout document justifiant votre difficulté (certificat médical, attestation de perte d''emploi, courrier des parents, etc.).

-   L''aide est versée directement sur votre compte bancaire français.


-   Vos **justificatifs d''identité et de séjour**.


-   **N''attendez pas que la situation soit critique** pour contacter l''assistante sociale. Dès que les difficultés apparaissent, prenez rendez-vous.
-   **Soyez transparent(e) et honnête** : L''assistante sociale est là pour vous aider, pas pour vous juger.


-   **Ne pas demander l''aide par méconnaissance ou honte** : C''est un droit.
-   **Penser que l''aide est illimitée ou automatique**.
-   **Ne pas avoir de compte bancaire français** pour recevoir l''aide.
-   **Manquer le rendez-vous avec l''assistante sociale**.


-   🔗 [Service-Public.fr : Aide d''urgence pour étudiant](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations générales.
-   🔗 [Ministère de l''Enseignement Supérieur : Aides financières](https://www.enseignementsup-recherche.gouv.fr/fr/aides-financieres-et-bourses) - Vue d''ensemble.


L''aide ponctuelle du CROUS (Fonds National d''Aide d''Urgence) est un dispositif précieux pour les étudiants internationaux confrontés à des difficultés financières graves et imprévues. Pour en bénéficier, vous devez contacter une assistante sociale du CROUS, être honnête sur votre situation, et fournir tous les justificatifs (identité, scolarité, ressources, preuves de difficulté). N''attendez pas que la situation devienne critique. Cette aide gratuite est un filet de sécurité crucial pour vous permettre de poursuivre vos études en France avec plus de sérénité.
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
  'L''aide au mérite et bourses régionales',
  '# L''aide au mérite et bourses régionales

## Pourquoi c''est important ?

En complément des bourses sur critères sociaux du CROUS et des aides ponctuelles, il existe d''autres dispositifs d''aides financières qui peuvent alléger votre budget étudiant en France : l''aide au mérite (nationale) et les bourses régionales ou locales. Ces aides, souvent basées sur l''excellence académique ou des critères spécifiques, sont une opportunité précieuse pour les étudiants internationaux. Ne pas connaître l''existence et les conditions d''éligibilité de ces bourses, c''est risquer de passer à côté d''un financement non négligeable. Maîtriser ces informations est absolument crucial pour explorer toutes les pistes de financement possibles et optimiser votre budget pour vos études en France.


-   Définir ce qu''est l''aide au mérite nationale et ses conditions.
-   Comprendre l''existence des bourses proposées par les collectivités territoriales (régions, villes).
-   Identifier les critères d''éligibilité spécifiques pour ces bourses.


Au-delà des aides classiques, la France soutient aussi les étudiants par des dispositifs qui valorisent l''excellence et l''engagement sur le territoire.



### 1. L''aide au mérite nationale


-   L''aide au mérite est un complément de bourse versé aux étudiants qui ont obtenu d''excellents résultats au baccalauréat (mention "Très Bien") ou qui ont un parcours universitaire jugé remarquable.
-   Elle s''ajoute à la bourse sur critères sociaux.

#### b) Conditions d''éligibilité
-   **Être boursier sur critères sociaux** : C''est la condition principale. L''aide au mérite n''est pas autonome.
-   **Mention "Très Bien" au baccalauréat** : Pour la première année d''études supérieures.
-   **Assiduité** : L''étudiant doit être assidu à ses études pour conserver l''aide.


🔗 [CROUS : L''aide au mérite](https://www.crous.fr/les-aides-specifiques-du-crous/l-aide-au-merite/) - Informations officielles.



-   Ces bourses peuvent être basées sur des critères sociaux, d''excellence académique, ou pour des filières spécifiques (ex: santé, formation professionnelle).

#### b) Conditions d''éligibilité
-   **Critères spécifiques** : Les conditions varient énormément d''une collectivité à l''autre. Il faut consulter le site de chaque Région ou Ville.
    -   Aides à la mobilité internationale (si vous partez étudier à l''étranger).
    -   Bourses pour l''accès à certaines formations (apprentissage, formations sanitaires et sociales).
    -   Aides à l''installation.
    -   Prêts d''honneur.

-   Vous devez faire une recherche proactive sur les sites des conseils régionaux, départementaux, ou des mairies de votre lieu d''études.




-   Le gouvernement français via Campus France propose des bourses spécifiques pour certains pays ou programmes (ex: Bourses d''Excellence Eiffel).

-   Certaines fondations ou associations privées peuvent proposer des bourses pour des critères spécifiques (domaine d''études, origine sociale, mérite).



-   Votre **avis d''imposition des parents** (traduit si nécessaire).


-   **Contactez les services des relations internationales de votre université** : Ils ont souvent des listes d''aides.
-   **Recherchez sur internet** : "Bourses étudiants [nom de votre ville]", "Aides étudiants [nom de votre région]".


-   **Ne pas déposer votre DSE** : C''est un prérequis pour l''aide au mérite.


-   🔗 [CROUS : L''aide au mérite](https://www.crous.fr/les-aides-specifiques-du-crous/l-aide-au-merite/) - Informations sur l''aide au mérite.
-   🔗 [etudiant.gouv.fr : Aides financières pour étudiants](https://www.etudiant.gouv.fr/fr/aides-financieres-pour-etudiants-1786) - Vue d''ensemble.
-   🔗 [Les sites des Conseils Régionaux](https://www.regions-france.org/les-regions-en-bref/les-sites-des-regions/) - Pour les bourses régionales (ex: "Bourse Région Île-de-France").


En plus de l''aide ponctuelle du CROUS, vous pouvez rechercher l''aide au mérite nationale (si vous êtes boursier et excellent) et les bourses proposées par les Régions ou les Villes. Il existe également des bourses spécifiques (ambassades, fondations). Renseignez-vous très tôt sur les sites des collectivités et de Campus France, et préparez des dossiers de candidature solides. Explorer toutes ces pistes de financement est absolument crucial pour optimiser votre budget et sécuriser la poursuite de vos études en France.
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
  'Contacter l''assistante sociale',
  '# Contacter l''assistante sociale

## Pourquoi c''est important ?

En tant qu''étudiant international en France, vous pourriez rencontrer des difficultés qui dépassent le simple cadre académique ou financier : problèmes de santé, isolement, démarches administratives complexes, difficultés relationnelles, précarité. L''**assistante sociale** est une professionnelle clé dans l''accompagnement des étudiants. Elle est là pour écouter, conseiller, orienter et aider à monter des dossiers d''aide (financière, logement, santé). Ne pas connaître son rôle, ou ne pas oser la contacter, c''est risquer de rester isolé(e) avec ses problèmes et de ne pas trouver les solutions adaptées. Faire appel à une assistante sociale est absolument crucial pour obtenir un soutien humain, une aide concrète, et trouver des solutions personnalisées à vos difficultés.


-   Définir le rôle de l''assistante sociale étudiante et ses missions.


L''assistante sociale est une interlocutrice neutre et bienveillante, soumise au secret professionnel. Elle est là pour vous accompagner.



### 1. Le rôle de l''assistante sociale étudiante et ses missions


-   L''assistante sociale a pour mission d''informer, de conseiller et d''accompagner les étudiants qui rencontrent des difficultés de toute nature.

-   Elle vous oriente vers les dispositifs d''aides adaptés (aides financières d''urgence, bourses, aides au logement, aides alimentaires, soutien psychologique, services de santé).



### 2. Situations où il est pertinent de contacter l''assistante sociale

N''hésitez pas, quel que soit le problème.

-   Besoin d''une aide ponctuelle du CROUS (FNAU).


-   Difficultés d''accès aux soins, besoin d''une mutuelle, soutien psychologique.

-   Comprendre les démarches liées au titre de séjour, à la CAF, à la Sécurité Sociale, à l''emploi.





-   **Le canal principal** : Les assistantes sociales des CROUS sont dédiées aux étudiants. C''est le premier contact à privilégier.
-   **Où trouver ?** : Recherchez "Service social CROUS [votre ville]" sur internet.



#### d) Mairies ou Centres Communaux d''Action Sociale (CCAS)


-   Votre **pièce d''identité** et **titre de séjour**.


-   **N''ayez aucune honte à contacter une assistante sociale**. C''est son travail d''aider et de soutenir les étudiants.
-   **Soyez honnête et transparent(e)** sur votre situation pour qu''elle puisse vous aider au mieux.
-   **N''attendez pas que la situation soit critique**. Dès que vous sentez le besoin, prenez rendez-vous.


-   **Rester seul(e) face à ses difficultés** : C''est le plus grand risque.
-   **Ne pas savoir qui contacter** : L''assistante sociale est là pour ça.
-   **Penser que l''assistante sociale va tout régler à votre place** : Elle vous accompagne et vous donne les outils pour agir.
-   **Se sentir mal à l''aise de parler de ses problèmes personnels ou financiers**.


-   🔗 [Service-Public.fr : L''assistante sociale](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations générales sur la profession.
-   🔗 [Légifrance : Code de l''Action Sociale et des Familles](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006074069/) - Cadre légal de l''action sociale.


Contacter l''assistante sociale étudiante (via le CROUS ou votre université) est une démarche essentielle et confidentielle pour les étudiants internationaux confrontés à des difficultés financières, de logement, de santé, administratives ou personnelles. N''ayez aucune honte à demander de l''aide. Préparez votre entretien et vos justificatifs. L''assistante sociale est là pour vous écouter, vous conseiller, vous orienter vers les aides adaptées (y compris l''aide ponctuelle du CROUS) et vous apporter un soutien précieux pour une intégration réussie et sereine en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 54 ---

-- COURS 55 : Clôturer son compte
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Clôturer son compte bancaire en France : Démarches et précautions',
  'cloturer-compte-bancaire-france-demarches-precautions',
  'Ce cours est essentiel pour tous les étudiants internationaux qui s''apprêtent à quitter la France ou à changer de banque. La clôture d''un compte bancaire est une démarche administrative qui demande de l''anticipation et de la rigueur. Ne pas la faire correctement peut entraîner des frais de découvert inattendus, des prélèvements non autorisés sur un compte "oublié", ou des difficultés à récupérer vos fonds restants. Nous vous expliquerons comment vérifier qu''il n''y a plus de prélèvements ou de virements à venir, les étapes pour rédiger et envoyer la lettre de clôture, et comment transférer le solde restant. Maîtriser cette procédure est absolument crucial pour un départ serein, en toute conformité et sans mauvaises surprises financières.',
  'Clôturer votre compte bancaire France : plus de prélèvements,
  lettre de clôture,
  transfert du solde. Partez sereinement !',
  'budget_finances',
  'intermediaire',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la nécessité de clôturer son compte bancaire avant de quitter la France", "Savoir comment vérifier et arrêter tous les prélèvements et virements automatiques", "Maîtriser la rédaction et l''envoi de la lettre de clôture à la banque", "Identifier les étapes pour transférer le solde restant et récupérer son argent"]'::jsonb,
  '["Avoir un compte bancaire en France et envisager de le clôturer"]'::jsonb,
  4,
  0,
  TRUE,
  4.5,
  100,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 55
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Vérifier qu''il n''y a plus de prélèvements',
  '# Vérifier qu''il n''y a plus de prélèvements

## Pourquoi c''est important ?

Avant de clôturer votre compte bancaire en France, l''étape la plus cruciale est de vous assurer qu''il n''y a plus aucun prélèvement automatique ni virement automatique à venir. Ne pas le faire, c''est risquer de vous retrouver avec des frais de découvert (si votre compte est clôturé ou vidé et qu''un prélèvement se présente), des impayés (qui peuvent avoir des conséquences avec votre propriétaire ou vos fournisseurs), ou des difficultés administratives. Pour les étudiants internationaux, souvent avec des abonnements multiples (internet, téléphone, streaming) et des prélèvements de loyer, cette vérification est absolument fondamentale pour un départ serein, sans dettes inattendues ni problèmes financiers.




Un compte doit être "propre" avant d''être clôturé. Cela signifie qu''il ne doit plus y avoir d''opérations entrantes ou sortantes automatiques.





-   Listez tous les organismes qui ont effectué des prélèvements (fournisseurs d''énergie, internet, téléphone, loyer, abonnements salle de sport, streaming, assurances, mutuelle).

-   Connectez-vous à votre espace client sur le site ou l''application de votre banque.
-   Cherchez la section "Prélèvements", "Mandats SEPA", "Virements permanents". Vous y trouverez la liste de toutes les autorisations.

-   Vérifiez tous vos contrats (bail de location, contrat d''électricité, gaz, internet, téléphone, assurance habitation, mutuelle) pour voir si des prélèvements automatiques sont liés.



-   **Priorité** : Contactez chaque organisme concerné (propriétaire, fournisseur d''énergie, d''internet, de téléphone, assurance, mutuelle, CAF) pour leur signaler votre départ, votre intention de clôturer votre compte, et leur fournir votre nouveau RIB (si vous ouvrez un compte dans un autre pays ou une autre banque).
-   **Demandez l''arrêt des prélèvements** : Demandez-leur de ne plus présenter de prélèvements sur votre ancien compte à partir d''une date donnée.

-   **Mandat de prélèvement** : C''est l''autorisation que vous avez donnée à un organisme de vous prélever.
-   **Révocation** : Vous pouvez révoquer un mandat de prélèvement auprès de votre banque. Cela signifie que la banque n''honorera plus les futurs prélèvements de cet organisme.
-   **Comment faire ?** : Sur votre espace client en ligne, dans la section "Prélèvements" ou "Mandats SEPA". Vous pouvez aussi le faire par courrier ou en agence.




-   Assurez-vous d''avoir payé toutes vos dernières factures (eau, électricité, gaz, internet, loyer) avant de clôturer le compte. Il peut y avoir des factures de "solde de tout compte" après votre départ.

-   Si vous attendez des remboursements (dépôt de garantie, remboursement Sécurité Sociale, trop-perçu de charges, remboursement d''abonnement), assurez-vous de donner un nouveau RIB (français ou étranger) à l''organisme concerné.






-   **Clôturer son compte sans avoir arrêté tous les prélèvements** : Risque de frais d'incidents.
-   **Oublier d''annuler un virement permanent**.


-   🔗 [ACPR (Autorité de Contrôle Prudentiel et de Résolution)](https://acpr.banque-france.fr/) - L''organisme qui régule les banques.


Avant de clôturer votre compte bancaire en France, vérifiez impérativement qu''il n''y a plus aucun prélèvement automatique ou virement automatique à venir. Contactez tous les organismes concernés pour les informer de votre départ et annuler les prélèvements, et révoquez les mandats via votre banque. Laissez un petit solde pour les dernières dépenses et transférez le solde restant vers un nouveau compte (français ou étranger) en fournissant votre nouveau RIB. Une préparation rigoureuse de cette étape est cruciale pour un départ serein, sans dettes inattendues ni problèmes financiers.
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
  'La lettre de clôture',
  '# La lettre de clôture d''un compte bancaire

## Pourquoi c''est important ?

Une fois que vous avez vérifié l''absence de prélèvements et de virements automatiques, l''étape suivante pour clôturer votre compte bancaire en France est d''envoyer une **lettre de clôture** formelle à votre banque. Cette lettre est un document juridique qui formalise votre demande de fermeture de compte et demande le transfert du solde restant. Ne pas envoyer cette lettre, ou l''envoyer de manière incorrecte, peut entraîner des retards dans la clôture, des frais de tenue de compte qui continuent de s''appliquer, ou des difficultés à récupérer votre argent. Pour les étudiants internationaux, cette formalité est absolument cruciale pour un départ clair et sans ambiguïté avec votre banque.


-   Maîtriser les conseils pour l''envoi par lettre recommandée avec accusé de réception.


La clôture d''un compte bancaire est un droit pour le client. La banque ne peut s''y opposer que dans des cas très spécifiques (ex: compte bloqué par la justice).







-   L''envoi par lettre recommandée avec accusé de réception (LRAR) est essentiel pour avoir une preuve de votre démarche et de la date de réception par la banque.



-   Votre adresse actuelle (en France) et, si vous quittez la France, votre nouvelle adresse à l''étranger (pour les derniers courriers).

-   L''adresse de votre agence (celle où votre compte est géré, ou le siège si c''est une banque en ligne).

-   "Demande de clôture de compte bancaire n°[votre numéro de compte]".


-   "Par la présente, je vous demande de bien vouloir procéder à la clôture de mon compte bancaire n°[votre numéro de compte / IBAN]."
-   "Je vous prie de bien vouloir transférer le solde créditeur de ce compte sur le compte bancaire suivant :
    -   Nom de la banque : [Nom de la banque de destination]"
-   **Important** : Fournissez un RIB du compte de destination (même s''il est étranger, mais la banque française peut appliquer des frais).

-   "Je vous restitue ci-joint l''intégralité de mes moyens de paiement attachés à ce compte, à savoir ma carte bancaire (découpée en deux) et mon chéquier (tous les chèques non utilisés annulés et les chèques restants barrés)."
-   Ou : "Je vous confirme avoir détruit ma carte bancaire et annulé les chèques non utilisés."



[Votre nouvelle adresse (si départ à l'étranger)]







Vous trouverez ci-joint l'intégralité de mes moyens de paiement associés à ce compte :
(OU : Je vous confirme avoir détruit ma carte bancaire et annulé les chèques non utilisés.)

Je vous remercie de bien vouloir me confirmer la date de clôture effective de mon compte et de m'adresser un relevé de clôture.

Dans l'attente de votre confirmation, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.


### 4. L''envoi et les étapes suivantes


-   **Indispensable** : Envoyez cette lettre par Lettre Recommandée avec Accusé de Réception (LRAR). Conservez précieusement le récépissé de dépôt et l''accusé de réception.


-   Surveillez l''arrivée des fonds sur votre compte de destination.

-   Demandez à la banque de vous envoyer une **attestation de clôture de compte**. C''est une preuve importante pour vos archives.




-   **Anticipez la rédaction et l''envoi de la lettre** : Faites-le quelques semaines avant votre départ.
-   **Laissez un petit solde sur le compte** pendant quelques jours après l''envoi de la lettre, au cas où un dernier prélèvement se présenterait.
-   **Barrez tous les chèques inutilisés** et mentionnez "Annulé" dessus.


-   **Ne pas envoyer de lettre de clôture** : Votre compte restera ouvert, et des frais pourront continuer à s''appliquer.
-   **Oublier d''indiquer le compte de destination** : Votre argent restera bloqué.
-   **Ne pas demander d''attestation de clôture**.


-   🔗 [La Poste : Envoi d''une lettre recommandée avec accusé de réception](https://www.laposte.fr/particulier/produits/envoyer-une-lettre-recommandee) - Pour la preuve d''envoi.


L''envoi d''une lettre de clôture par lettre recommandée avec accusé de réception est une étape cruciale pour fermer votre compte bancaire en France. Elle doit inclure les références de votre compte, la demande de transfert du solde restant vers un autre RIB, et la restitution/destruction de vos moyens de paiement. Conservez précieusement toutes les preuves d'envoi et demandez une attestation de clôture. Une bonne gestion de cette démarche est essentielle pour un départ serein, sans frais cachés ni complications financières, et pour récupérer votre argent.
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
  'Transférer le solde restant',
  '# Transférer le solde restant

## Pourquoi c''est important ?

Lorsque vous clôturez votre compte bancaire en France, la dernière étape est le transfert du solde créditeur (l''argent restant sur votre compte) vers un autre compte. Cette opération est absolument cruciale pour récupérer votre argent et ne pas le laisser bloqué sur un compte que vous ne pourrez plus gérer. Ne pas anticiper ce transfert, ou fournir des informations bancaires incorrectes, peut entraîner des retards importants, des frais inattendus, voire la perte de vos fonds. Pour les étudiants internationaux, souvent pressés de quitter la France, la récupération rapide et sécurisée de votre argent est essentielle pour votre budget et votre tranquillité d''esprit.










-   **Si vous quittez la France** et que vous transférez l''argent vers votre compte dans votre pays d''origine (ou un autre pays).


#### d) Retrait d''espèces (pour un petit solde)





-   Votre banque française peut prélever des **frais d''émission** pour un virement international.
-   La banque du bénéficiaire (à l''étranger) peut également prélever des **frais de réception**.
-   **Conseil** : Renseignez-vous auprès de votre banque sur les frais avant d''effectuer le virement.




-   **Services spécialisés** : Pour un virement international (surtout hors SEPA), il est souvent plus avantageux d''utiliser un service spécialisé comme Wise ou Remitly (voir cours 51) plutôt que votre banque traditionnelle pour transférer les fonds. Vous pouvez transférer le solde de votre compte français vers un compte Wise, puis de Wise vers votre compte étranger.

-   **Planifiez** : Demandez le transfert du solde quelques jours ou semaines avant votre départ pour être sûr(e) de recevoir l''argent.

### 4. Gérer le "zéro solde" et les imprévus



#### b) En cas d''imprévu
-   Si après la clôture, un remboursement (ex: trop-perçu de charges, remboursement d''un abonnement) devait vous parvenir, l''argent sera généralement retourné à l''émetteur.
-   **Laissez une adresse postale valide** (même à l''étranger) à votre banque pour qu''elle puisse vous contacter en cas de problème.






-   **Erreur de saisie de l''IBAN ou du BIC** : L''argent peut être perdu ou très difficile à récupérer.
-   **Oublier de vider entièrement le compte** : L''argent restera bloqué.
-   **Ne pas tenir compte des délais** : L''argent n''arrivera pas à temps.


-   🔗 [Remitly : Centre d''aide](https://help.remitly.com/fr/s/) - Pour les virements internationaux.


',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- PARTIE 5 : Vie Étudiante & Travail

-- --- Cours 55 ---

-- COURS 56 : Le système universitaire
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  'f0e1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Le système universitaire français : CM,
  TD,
  ECTS et examens',
  'systeme-universitaire-francais-cm-td-ects-examens',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux qui s''apprêtent à intégrer l''enseignement supérieur en France. Le système universitaire français, avec ses Cours Magistraux (CM), ses Travaux Dirigés (TD), et son système de crédits ECTS, peut être très différent de ce que vous connaissez. Ne pas comprendre cette organisation, les attentes académiques, et les modalités d''évaluation peut impacter votre réussite et votre adaptation. Nous vous expliquerons la distinction entre CM et TD, le fonctionnement des crédits ECTS pour la validation de vos études, l''importance de la présence et les différentes formes d''examens. Maîtriser ces informations est absolument crucial pour bien démarrer vos études, comprendre vos obligations, et maximiser vos chances de succès académique en France.',
  'Système universitaire français : CM vs TD,
  crédits ECTS,
  présence,
  examens. Comprenez tout pour réussir vos études !',
  'preparation_academique',
  'debutant',
  'fr',
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Distinguer les Cours Magistraux (CM) des Travaux Dirigés (TD)", "Comprendre le système des crédits ECTS et la validation des études", "Identifier l''importance de la présence aux cours et des règles d''assiduité", "Maîtriser les différentes formes d''examens (partiels, contrôle continu) et leur évaluation"]'::jsonb,
  '["Être admis(e) dans un établissement d''enseignement supérieur français"]'::jsonb,
  0,
  TRUE,
  4.5,
  100,
  500,
  500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 56
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'CM (Cours Magistral) vs TD (Travaux Dirigés)',
  '# CM (Cours Magistral) vs TD (Travaux Dirigés)

## Pourquoi c''est important ?

Le système pédagogique universitaire français repose sur une distinction fondamentale entre les **Cours Magistraux (CM)** et les **Travaux Dirigés (TD)**. Comprendre la différence entre ces deux modes d''enseignement est absolument crucial pour les étudiants internationaux afin d''adapter votre méthode de travail, de suivre efficacement vos cours, et de ne pas être désorienté(e) par l''organisation universitaire. Ne pas saisir cette nuance peut impacter votre compréhension des matières, votre assiduité, et votre réussite aux examens. Maîtriser cette distinction est essentiel pour bien vous adapter au système académique français.


-   Définir ce qu''est un Cours Magistral (CM) et ses caractéristiques.
-   Identifier les attentes spécifiques de chaque format d''enseignement.



🔗 [Ministère de l''Enseignement Supérieur : Organisation des études](https://www.enseignementsup-recherche.gouv.fr/fr/organisation-des-etudes-superieures-en-france-60074) - Informations générales.


### 1. Le Cours Magistral (CM) : L''acquisition des connaissances fondamentales


-   Les CM sont des cours dispensés en amphithéâtre (une grande salle de conférence) à un grand nombre d''étudiants (parfois plusieurs centaines).
-   **Interactivité limitée** : L''interaction est souvent limitée (peu de questions posées par les étudiants en direct).


-   La présence aux CM n''est pas toujours obligatoire ou contrôlée. Cependant, il est fortement recommandé d''y assister pour ne pas rater des informations cruciales.

🔗 [etudiant.gouv.fr : L''organisation de la fac](https://www.etudiant.gouv.fr/fr/l-organisation-de-la-fac-1748) - Explications sur CM/TD.

### 2. Les Travaux Dirigés (TD) : L''application et l''approfondissement

L''apprentissage actif et interactif.

-   L''objectif est d''appliquer les connaissances acquises en CM : résolution d''exercices, études de cas, analyses de documents, débats, exposés oraux.

-   **Préparation obligatoire** : Il est impératif de préparer les TD à l''avance. L''enseignant donne des exercices ou des lectures à faire. Ne pas préparer un TD peut vous mettre en difficulté.
-   **Compréhension** : C''est le lieu pour poser des questions sur les CM et consolider vos connaissances.

-   **La présence aux TD est généralement obligatoire et contrôlée.** Les absences non justifiées peuvent entraîner des pénalités (perte de points au contrôle continu, exclusion de l''examen final).


### 3. Autres formats d''enseignement



-   De nombreuses universités proposent des séances de tutorat (par des étudiants plus avancés) ou du soutien spécifique. N''hésitez pas à les utiliser si vous avez des difficultés.




-   **Préparez systématiquement vos TD** : C''est là que l''on apprend le plus.
-   **N''ayez pas peur de poser des questions en TD** : C''est le rôle de l''enseignant de vous aider.
-   **Si vous avez des difficultés en français**, demandez au professeur s''il peut recommander des lectures en anglais, ou utilisez un dictionnaire.


-   **Ne pas respecter l''assiduité aux TD/TP** : Cela peut entraîner des pénalités graves.


-   🔗 [etudiant.gouv.fr : L''organisation de la fac](https://www.etudiant.gouv.fr/fr/l-organisation-de-la-fac-1748) - Guide pour les étudiants.
-   🔗 [Ministère de l''Enseignement Supérieur : Organisation des études](https://www.enseignementsup-recherche.gouv.fr/fr/organisation-des-etudes-superieures-en-france-60074) - Informations générales.
-   🔗 [La Vie Étudiante (gouvernement)](https://www.vie-etudiante.gouv.fr/) - Portail d''informations.


Le système universitaire français distingue les Cours Magistraux (CM) pour l''acquisition des connaissances (prise de notes) et les Travaux Dirigés (TD) pour l''application et l''approfondissement (participation active). La présence aux TD/TP est obligatoire et contrôlée. Préparez vos TD à l''avance, prenez des notes structurées en CM, et n''hésitez pas à poser des questions. Comprendre cette organisation pédagogique est absolument crucial pour adapter votre méthode de travail, réussir vos études, et bien vous intégrer dans le système académique français.
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
  'Les crédits ECTS',
  '# Les crédits ECTS

## Pourquoi c''est important ?

Le système européen de transfert et d''accumulation de crédits (ECTS) est la norme dans l''enseignement supérieur français et européen. C''est le système qui permet de mesurer le volume de travail que représente une matière, de valider vos années d''études, et de faciliter la reconnaissance de vos diplômes et de vos périodes d''études à l''étranger. Comprendre ce qu''est un crédit ECTS, comment il est attribué, et son importance pour la validation de vos semestres et de votre diplôme est absolument crucial pour les étudiants internationaux. Ne pas saisir son fonctionnement peut impacter votre progression académique, la reconnaissance de vos études, et même vos démarches de renouvellement de titre de séjour.


-   Définir ce qu''est un crédit ECTS et sa valeur.
-   Maîtriser les conseils pour suivre votre acquisition de crédits et comprendre l''importance de la validation.


Le système ECTS (European Credit Transfer and Accumulation System) a été mis en place pour rendre les systèmes d''enseignement supérieur plus transparents et faciliter la mobilité des étudiants en Europe.

🔗 [Ministère de l''Enseignement Supérieur : Le système LMD](https://www.enseignementsup-recherche.gouv.fr/fr/le-systeme-lmd-60074) - Explications sur les ECTS dans le cadre LMD.


### 1. Qu''est-ce qu''un crédit ECTS ?

L''unité de mesure du travail étudiant.

-   Un crédit ECTS est une unité qui mesure la **charge de travail** d''un étudiant pour une matière ou une unité d''enseignement.

#### b) Valeur d''un crédit ECTS



### 2. Validation des semestres et des années d''études


#### a) Validation d''un semestre
-   Pour valider un semestre, vous devez obtenir une moyenne générale suffisante sur l''ensemble des unités d''enseignement de ce semestre (généralement 10/20 ou plus).

#### b) Validation d''une année
-   **Compensation** : Dans le système LMD, il existe souvent des mécanismes de compensation. Si vous avez une mauvaise note dans une matière, elle peut être compensée par une bonne note dans une autre matière de la même unité d''enseignement, ou même entre unités d''enseignement.
-   **Rattrapages** : Si vous ne validez pas un semestre ou une année, vous pouvez avoir des "rattrapages" (deuxième session d''examen) pour tenter de valider les matières manquantes.




-   Les crédits ECTS facilitent la reconnaissance de votre parcours académique en France et dans d''autres pays européens, notamment si vous changez d''établissement ou de pays.

-   Pour le renouvellement de votre titre de séjour étudiant, la préfecture exigera des preuves du "sérieux de vos études". La validation de vos crédits ECTS (votre assiduité et vos résultats) est la preuve principale de ce sérieux.

-   Si vous participez à un programme d''échange (ex: Erasmus+), les crédits ECTS obtenus dans l''université d''accueil seront reconnus par votre université d''origine.


-   Votre **livret d''étudiant** ou **guide pédagogique** de votre formation.


-   **Suivez vos résultats attentivement** : Ne laissez pas les mauvaises notes s''accumuler.


-   **Penser que l''obtention d''un diplôme est automatique** : La validation des crédits est obligatoire.


-   🔗 [Ministère de l''Enseignement Supérieur : Le système LMD](https://www.enseignementsup-recherche.gouv.fr/fr/le-systeme-lmd-60074) - La référence.
-   🔗 [Légifrance : Code de l''Éducation (Articles sur les diplômes)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Textes de loi.


Les crédits ECTS mesurent la charge de travail de vos études et sont la clé de la validation de vos semestres (30 ECTS) et de vos années (60 ECTS). La validation de vos crédits est cruciale pour votre progression académique et pour le renouvellement de votre titre de séjour étudiant. Suivez attentivement vos résultats, comprenez les mécanismes de compensation et de rattrapage, et n''hésitez pas à demander de l''aide si vous avez des difficultés. Maîtriser le système ECTS est essentiel pour réussir vos études en France et assurer la reconnaissance de votre parcours.
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
  'Présence obligatoire et absences',
  '# Présence obligatoire et absences (Université)

## Pourquoi c''est important ?

En France, la question de la présence aux cours, et la gestion des absences, est un sujet crucial qui peut avoir un impact direct sur votre réussite académique et votre statut d''étudiant international. Si la présence aux Cours Magistraux (CM) est souvent moins stricte, l''assiduité aux Travaux Dirigés (TD) et aux Travaux Pratiques (TP) est généralement obligatoire et contrôlée. Ne pas comprendre les règles de présence, accumuler des absences non justifiées, ou ne pas savoir comment justifier une absence légitime, peut entraîner des pénalités (perte de points, exclusion d''examen), voire compromettre le renouvellement de votre titre de séjour. Maîtriser ces règles est absolument essentiel pour respecter vos obligations, éviter les problèmes administratifs, et garantir votre sérieux académique.


-   Savoir comment justifier une absence légitime auprès de l''administration.


Votre statut d''étudiant est lié à votre assiduité et à votre progression dans votre cursus. La présence aux cours est un indicateur de votre engagement.

🔗 [etudiant.gouv.fr : L''organisation de la fac](https://www.etudiant.gouv.fr/fr/l-organisation-de-la-fac-1748) - Mentionne l''assiduité.




-   **Généralement non obligatoire** : La présence aux CM n''est souvent pas contrôlée de manière systématique. Il n''y a pas de feuille d''émargement.
-   **Fortement recommandée** : Cependant, il est très vivement conseillé d''y assister pour suivre le cours, prendre des notes, et ne pas prendre de retard sur le programme. Vous êtes responsable de votre propre apprentissage.

-   **Généralement obligatoire et contrôlée** : La présence aux TD et TP est quasi systématiquement obligatoire. Des feuilles d''émargement (listes de présence à signer) sont distribuées à chaque séance.
-   **Pourquoi ?** : Les TD et TP sont des moments d''apprentissage actif, d''interaction, et d''application des connaissances. Votre participation et votre présence sont essentielles à votre apprentissage et à celui du groupe.




-   **Exclusion d''examen** : Si vous avez un trop grand nombre d''absences non justifiées à un TD/TP, le responsable de la formation peut vous interdire de passer l''examen final de la matière (vous serez alors "défaillant").
-   **Non-validation des crédits ECTS** : Cela peut vous empêcher de valider l''unité d''enseignement et donc les crédits ECTS associés, ce qui retarde votre progression.

-   **Renouvellement refusé** : Pour le renouvellement de votre titre de séjour étudiant, la préfecture examine le "sérieux de vos études". Un nombre trop important d''absences non justifiées peut être interprété comme un manque d''assiduité et un motif de refus de renouvellement de votre titre.
-   **Demandes de compléments** : La préfecture peut demander des attestations d''assiduité ou des relevés d''absence à votre établissement.

🔗 [Service-Public.fr : Titre de séjour étudiant - Conditions de renouvellement](https://www.service-public.fr/particuliers/vosdroits/F22312) - Mentionne le "sérieux des études".



#### a) Motifs d''absence légitimes
-   **Décès d''un proche, événement familial grave** : Avec justificatifs (acte de décès, attestation).
-   **Convocations officielles** : À la préfecture, à la justice, à un examen d''une autre formation.





-   **Consultez le règlement pédagogique de votre formation** dès la rentrée. Il précise les règles d''assiduité et les pénalités.
-   **N''attendez pas la dernière minute** pour justifier une absence.


-   **Ne pas signer les feuilles d''émargement** : Votre absence sera enregistrée même si vous étiez là.
-   **Faux justificatifs** : C''est une fraude.
-   **Ignorer les rappels à l''ordre** de l''administration scolaire.
-   **Penser que l''on peut faire "ce qu''on veut"** une fois inscrit(e).
-   **Ne pas tenir compte de l''impact sur le renouvellement du titre de séjour**.


-   🔗 [etudiant.gouv.fr : L''organisation de la fac](https://www.etudiant.gouv.fr/fr/l-organisation-de-la-fac-1748) - Informations générales.
-   🔗 [Ministère de l''Enseignement Supérieur : La scolarité](https://www.enseignementsup-recherche.gouv.fr/fr/la-scolarite-46549) - Infos sur l''assiduité.
-   🔗 [Légifrance : Code de l''Éducation (Articles sur l''assiduité)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Textes de loi.


La présence aux TD et TP est généralement obligatoire et contrôlée à l''université en France. Des absences non justifiées peuvent entraîner des pénalités académiques (perte de points, exclusion d''examen) et des problèmes pour le renouvellement de votre titre de séjour étudiant. En cas d''absence légitime (maladie, événement grave), informez rapidement votre secrétariat pédagogique et fournissez un justificatif. Comprendre et respecter ces règles d''assiduité est absolument crucial pour garantir votre sérieux académique et la régularité de votre séjour en France.
',
  1,
  60,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

