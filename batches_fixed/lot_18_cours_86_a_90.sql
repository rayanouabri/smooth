-- ==========================================
-- LOT 18 : Cours 86 à 90
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : 5
-- ==========================================

-- --- Cours 86 ---

-- COURS 87 : Animaux de compagnie
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '260ffd90-e492-440f-8cfa-d3d714346d90',
  'Animaux de compagnie en France : Passeport européen et vétérinaire',
  'animaux-compagnie-france-passeport-europeen-veterinaire',
  'Ce cours est essentiel pour tous les étudiants internationaux en France qui voyagent avec un animal de compagnie (chien, chat, furet). L''arrivée en France avec un animal est soumise à des règles sanitaires et administratives strictes (passeport européen, vaccination). Ne pas les respecter, c''est risquer de voir votre animal refoulé à la frontière ou mis en quarantaine, ce qui serait une épreuve coûteuse et douloureuse. Nous vous expliquerons la nécessité du passeport européen et des vaccins (notamment antirabique), et comment trouver un vétérinaire en France. Maîtriser ces informations est absolument crucial pour voyager sereinement avec votre animal, garantir sa santé, et respecter la législation française.',
  'Animaux de compagnie France : passeport européen, vaccins (rage), trouver vétérinaire. Voyagez sereinement avec votre animal !',
  'culture_codes_sociaux',
  'avance',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre la nécessité du passeport européen pour animaux de compagnie", "Identifier les vaccins obligatoires (notamment antirabique) et l''identification", "Savoir comment trouver un vétérinaire en France", "Maîtriser les conseils pour voyager et vivre sereinement avec son animal en France"]'::jsonb,
  '["Avoir un animal de compagnie et vouloir l''emmener en France"]'::jsonb,
  TRUE,
  4.8,
  200,
  1500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 87
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Passeport européen et vaccins',
  '# Passeport européen et vaccins pour animaux de compagnie

## Pourquoi c''est important ?

Si vous prévoyez de venir en France avec votre animal de compagnie (chien, chat, furet), il est absolument crucial de connaître et de respecter les **règles sanitaires et administratives européennes**. La France, en tant que pays membre de l''Union Européenne, applique des réglementations strictes, notamment l''obligation d''un **passeport européen pour animal de compagnie** et de vaccinations spécifiques (notamment la rage). Ne pas se conformer à ces exigences, c''est risquer de voir votre animal refoulé à la frontière, mis en quarantaine (à vos frais), ou même euthanasié dans les cas extrêmes. Pour les étudiants internationaux, cette préparation est fondamentale pour voyager sereinement avec votre compagnon et garantir sa sécurité et sa santé.


-   Définir ce qu''est le passeport européen pour animal de compagnie.
-   Identifier la nécessité de l''identification (puce électronique) et le titrage des anticorps antirabiques.
-   Maîtriser les conseils pour préparer votre animal au voyage et à l''arrivée en France.


Ces règles visent à protéger la santé publique et animale, et à empêcher l''introduction de maladies contagieuses (comme la rage).

🔗 [Ministère de l''Agriculture et de la Souveraineté Alimentaire : Voyager avec son animal](https://agriculture.gouv.fr/voyager-avec-son-animal-de-compagnie) - La référence.




-   Le passeport européen est un document officiel et uniformisé pour les chiens, chats et furets qui voyagent entre les pays de l''Union Européenne.
-   Il est délivré par un vétérinaire habilité dans votre pays d''origine.
-   **Indispensable** : Vous devez l''avoir pour entrer en France avec votre animal, s''il vient d''un pays hors UE.

-   **Identification de l''animal** : Numéro d''identification (puce électronique), description de l''animal (race, sexe, couleur).




    1.  L''animal doit être **identifié par une puce électronique** AVANT la vaccination.
    3.  L''animal doit avoir au moins 12 semaines (3 mois) au moment de la première vaccination.
    4.  La vaccination est valide 21 jours après la première injection (délai d''immunisation).

-   Bien que non obligatoires pour l''entrée en France, ils sont fortement recommandés pour la santé de votre animal.




-   **Pour les pays "tiers" (hors UE) à risque de rage** : Un examen de laboratoire appelé "titrage sérique des anticorps antirabiques" est obligatoire. Il s''agit d''une prise de sang effectuée au moins 30 jours après la vaccination antirabique et au moins 3 mois avant la date de voyage.
-   La liste des pays à risque est publiée par le Ministère de l''Agriculture.

🔗 [Ministère de l''Agriculture : Liste des pays à risque de rage](https://agriculture.gouv.fr/voyager-avec-son-animal-de-compagnie) - Vérifiez si votre pays est concerné.




#### b) Transport de l''animal

-   Assurez-vous d''avoir tous les documents (passeport européen, carnet de vaccination) à portée de main lors du passage de la frontière.

-   C''est la première chose à faire pour le suivi sanitaire.




-   **Contactez votre vétérinaire dans votre pays d''origine** : Il est le mieux placé pour vous guider sur toutes les démarches.
-   **Contactez l''ambassade de France dans votre pays** : Ils peuvent avoir des informations spécifiques.
-   **Vérifiez la réglementation sur le site du Ministère de l''Agriculture français**.
-   **Soyez attentif à l''état de santé de votre animal** pendant le voyage.




-   🔗 [Ministère de l''Agriculture et de la Souveraineté Alimentaire : Voyager avec son animal de compagnie](https://agriculture.gouv.fr/voyager-avec-son-animal-de-compagnie) - La référence officielle.
-   🔗 [Société Centrale Canine (SCC) / LOOF (chats)](https://www.scc.asso.fr/) - Pour l''identification des animaux.
-   🔗 [Légifrance : Réglementation relative aux déplacements d''animaux de compagnie](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000028741381/) - Textes de loi.


Si vous venez en France avec votre animal de compagnie, il est absolument crucial d''obtenir un passeport européen pour animal de compagnie, d''assurer son identification par puce électronique, et de le vacciner obligatoirement contre la rage (avec un protocole strict de 21 jours). Un titrage des anticorps antirabiques peut être nécessaire si votre pays est à risque. Anticipez ces démarches plusieurs mois avant votre départ. Maîtriser cette législation est fondamental pour voyager sereinement avec votre animal, garantir sa santé, et respecter les règles européennes en France.
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
  'Trouver un vétérinaire',
  '# Trouver un vétérinaire en France

## Pourquoi c''est important ?

Une fois que vous êtes installé(e) en France avec votre animal de compagnie, trouver un vétérinaire est une étape absolument cruciale pour garantir la santé et le bien-être de votre compagnon. Votre animal aura besoin de suivis réguliers (vaccins, vermifugation), de consultations en cas de maladie ou d''accident, et d''une alimentation adaptée. Ne pas avoir un vétérinaire identifié, c''est risquer de se retrouver sans solution en cas d''urgence, ou de ne pas pouvoir assurer un suivi sanitaire approprié. Pour les étudiants internationaux, cette démarche est fondamentale pour prendre soin de son animal, comprendre le système de soins vétérinaires français, et éviter des frais imprévus.


-   Comprendre le déroulement d''une consultation et les coûts associés.



🔗 [Ordre National des Vétérinaires : Trouver un vétérinaire](https://www.veterinaire.fr/annuaire) - L''annuaire officiel.





-   **Nutrition** : Conseils sur l''alimentation.




#### a) Annuaire de l''Ordre National des Vétérinaires

-   Tapez "vétérinaire + [nom de votre ville]" sur Google Maps ou les Pages Jaunes.

-   Demandez des recommandations à vos voisins, à des amis qui ont des animaux, ou à d''autres étudiants internationaux.


### 3. Déroulement d''une consultation et coûts associés



-   Le **carnet de santé/vaccination** de votre animal (avec l''historique de ses vaccins et traitements).
-   Votre **pièce d''identité**.

-   **Tarifs libres** : Les tarifs des vétérinaires sont libres en France. Ils peuvent varier d''une clinique à l''autre.





-   Demandez conseil au vétérinaire pour l''alimentation adaptée à votre animal.

-   **Numéro d''urgence** : La plupart des cliniques ont un numéro d''urgence 24h/24 ou vous orienteront vers un service de garde.
-   **Cliniques de garde** : En dehors des horaires d''ouverture, des cliniques assurent des gardes.
-   **Anticipez** : Ayez le numéro d''urgence de votre vétérinaire ou d''un service de garde.




-   **Prenez rendez-vous avec un vétérinaire peu après votre arrivée** pour un premier bilan et pour qu''il prenne connaissance de votre animal.
-   **Expliquez votre situation d''étudiant international** (budget, durée du séjour).
-   **N''hésitez pas à demander un devis** pour les opérations ou traitements importants.


-   **Ne pas avoir de vétérinaire identifié** en cas d''urgence.


-   🔗 [Ministère de l''Agriculture et de la Souveraineté Alimentaire : Santé animale](https://agriculture.gouv.fr/sante-animale) - Informations générales.
-   🔗 [Santévet / Assur O''Poil](https://www.santevet.com/) - Exemples d''assurances santé animale.


Trouver un vétérinaire en France est absolument crucial pour la santé de votre animal de compagnie. Utilisez l''annuaire de l''Ordre National des Vétérinaires pour localiser une clinique près de chez vous. Préparez le passeport européen et le carnet de santé de votre animal, et sachez que les consultations et soins sont payants (non remboursés par la Sécurité Sociale humaine). Respectez le suivi sanitaire (vaccins, vermifugation) et anticipez les urgences. Maîtriser cette démarche est fondamental pour prendre soin de son animal, garantir sa santé, et gérer son budget en toute sérénité en France.
',
  2,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 87 ---

-- COURS 88 : Voyager en Europe
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '92eade32-fe77-4334-a586-8f00989b2b5f',
  'Voyager en Europe : Espace Schengen, low-cost et Flixbus',
  'voyager-europe-espace-schengen-low-cost-flixbus',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui souhaitent voyager à travers l''Europe. L''Europe offre une grande liberté de circulation grâce à l''Espace Schengen, mais il est crucial de connaître les règles d''entrée et de séjour, ainsi que les options de transport économiques. Nous vous expliquerons le concept de l''Espace Schengen et ses implications pour votre titre de séjour, les avantages des compagnies aériennes "low-cost" et des bus (Flixbus) pour des voyages à petit prix. Maîtriser ces informations est absolument crucial pour planifier vos voyages, respecter la législation, et profiter pleinement de l''opportunité unique de découvrir l''Europe pendant votre séjour en France.',
  'Voyager en Europe : Espace Schengen (titre de séjour), compagnies low-cost, bus (Flixbus). Explorez l''Europe à petit prix et en toute légalité !',
  'transport',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le concept et les règles de l''Espace Schengen pour les non-européens", "Identifier les compagnies aériennes low-cost et les compagnies de bus (Flixbus) pour des voyages économiques", "Savoir planifier un voyage en Europe en respectant les règles", "Maîtriser les conseils pour voyager en sécurité et optimiser son budget"]'::jsonb,
  '["Avoir un titre de séjour valide en France (ou VLS-TS validé)"]'::jsonb,
  TRUE,
  4.8,
  600,
  4500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 88
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Espace Schengen : Pas de frontières',
  '# Espace Schengen : Pas de frontières (Voyager en Europe)

## Pourquoi c''est important ?

Si vous êtes un étudiant international en France, vous avez une opportunité unique de voyager à travers l''Europe. L''**Espace Schengen** est une zone de libre circulation qui regroupe 29 pays européens, où les contrôles aux frontières intérieures ont été abolis. Comprendre ce qu''est l''Espace Schengen et son fonctionnement est absolument crucial pour les étudiants non-européens titulaires d''un titre de séjour français. Ne pas connaître les règles de circulation (validité de votre titre, limite de séjour hors France) peut entraîner des problèmes lors de vos voyages, des refus d''entrée dans d''autres pays, ou des complications à votre retour en France. Maîtriser ces informations est fondamental pour explorer l''Europe en toute légalité et sérénité.


-   Définir ce qu''est l''Espace Schengen et les pays qui en font partie.
-   Comprendre le principe de la libre circulation et l''absence de contrôle aux frontières intérieures.
-   Identifier la validité de votre titre de séjour français pour voyager dans l''Espace Schengen.


L''Espace Schengen est l''une des réalisations les plus concrètes de l''intégration européenne. Il facilite les déplacements pour des millions de personnes.

🔗 [Union Européenne : L''espace Schengen](https://europa.eu/youreurope/citizens/travel/passports/schengen-area/index_fr.htm) - La référence officielle.


### 1. Qu''est-ce que l''Espace Schengen ?


-   L''Espace Schengen regroupe la plupart des pays de l''Union Européenne (sauf l''Irlande et Chypre qui n''y participent pas pleinement) et certains pays non membres de l''UE (Islande, Liechtenstein, Norvège, Suisse).
-   **Liste complète** : Vérifiez toujours la liste exacte des pays sur le site de l''Union Européenne.

-   Une fois que vous êtes entré(e) légalement dans un pays de l''Espace Schengen (ici, la France avec votre visa et titre de séjour), vous pouvez voyager vers d''autres pays de l''Espace Schengen sans passer de contrôle aux frontières intérieures.
-   **Pas de tampon** : Vous ne recevrez pas de tampon d''entrée/sortie pour chaque pays Schengen visité.

### 2. Validité de votre titre de séjour français pour voyager dans l''Espace Schengen

Votre clé d''accès à l''Europe.

-   Si vous êtes titulaire d''un **titre de séjour français en cours de validité** (carte de séjour, attestation de validation VLS-TS), ce titre vous autorise à circuler librement dans tous les pays de l''Espace Schengen.
-   **Le VLS-TS (Visa Long Séjour valant Titre de Séjour)** : Une fois validé par l''OFII/ANEF, il vous permet de voyager.


-   Lorsque vous voyagez dans l''Espace Schengen, ayez toujours sur vous :
    -   Votre **billet de retour** vers la France ou votre pays d''origine.

🔗 [Service-Public.fr : Séjour dans l''espace Schengen](https://www.service-public.fr/particuliers/vosdroits/F3025) - Informations spécifiques.



-   Même si les frontières sont ouvertes, des **contrôles d''identité ponctuels** peuvent être effectués par la police ou la gendarmerie (dans les trains, les gares, les aéroports) pour lutter contre l''immigration irrégulière ou le terrorisme.

-   Si vous voyagez vers un pays qui ne fait pas partie de l''Espace Schengen (ex: Royaume-Uni, Irlande, Bulgarie, Roumanie, Chypre - qui n''en font pas encore partie complètement, ou d''autres pays du monde), vous devrez vérifier les conditions d''entrée spécifiques de ce pays (visa requis, durée de séjour autorisée).

#### c) Cas particulier du "récépissé"
-   Si vous avez un simple récépissé de demande de titre de séjour (première demande ou renouvellement), il ne vous permet PAS de voyager hors de France (y compris dans l''espace Schengen). La seule exception est un récépissé de renouvellement accompagné de votre ancien titre de séjour périmé (qui peut permettre un aller-retour unique, mais c''est risqué et non garanti).

🔗 [Ministère de l''Intérieur : Voyager dans l''espace Schengen](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Voyager-dans-l-espace-Schengen) - Informations officielles.



-   La composition de l''Espace Schengen peut évoluer (ex: adhésion de la Bulgarie et de la Roumanie en 2024 pour les voies aériennes et maritimes, pas terrestres).



-   Passeport, titre de séjour, justificatifs de ressources, billets d''avion.





-   **Profitez de cette opportunité unique** de découvrir l''Europe à faible coût.
-   **Voyagez en train ou en bus** pour les trajets courts, c''est plus simple et écologique.


-   **Dépasser la limite des 90 jours dans l''Espace Schengen**.
-   **Ne pas vérifier les conditions d''entrée des pays hors Schengen**.


-   🔗 [Union Européenne : L''espace Schengen](https://europa.eu/youreurope/citizens/travel/passports/schengen-area/index_fr.htm) - La référence officielle.
-   🔗 [Service-Public.fr : Voyager dans l''espace Schengen](https://www.service-public.fr/particuliers/vosdroits/F3025) - Guide officiel.
-   🔗 [Ministère de l''Intérieur : Voyager dans l''espace Schengen](https://www.interieur.gouv.fr/Le-ministere/immigration/Sejourner-en-France/Voyager-dans-l-espace-Schengen) - Informations officielles.
-   🔗 [Légifrance : Code de l''entrée et du séjour des étrangers et du droit d''asile (CESEDA)](https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006071408/) - Articles sur la circulation.


L''Espace Schengen permet aux étudiants internationaux titulaires d''un titre de séjour français valide de voyager sans contrôle aux frontières intérieures dans 29 pays européens. Cependant, vous devez respecter la limite de 90 jours de séjour sur 180 jours dans l''ensemble de l''espace Schengen. Ayez toujours votre passeport et titre de séjour sur vous lors de vos voyages. Ne voyagez jamais avec un titre expiré ou un simple récépissé. Maîtriser ces règles est absolument crucial pour explorer l''Europe en toute légalité, profiter pleinement de cette opportunité, et éviter les problèmes lors de vos déplacements.
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
  'Compagnies low-cost et bus (Flixbus)',
  '# Compagnies low-cost et bus (Flixbus) pour voyager en Europe

## Pourquoi c''est important ?

Pour les étudiants internationaux en France qui rêvent d''explorer l''Europe, le budget est souvent une contrainte majeure. Heureusement, il existe des solutions de transport très économiques : les **compagnies aériennes "low-cost"** (Ryanair, EasyJet, Vueling) et les **compagnies de bus longue distance** (Flixbus, BlaBlaCar Bus). Ne pas connaître ces options, c''est se priver d''une opportunité fantastique de voyager à travers le continent à petit prix. Maîtriser l''utilisation de ces services, leurs avantages (prix, destinations) et leurs inconvénients (bagages limités, temps de trajet), est absolument crucial pour planifier vos voyages, optimiser votre budget, et profiter pleinement de votre séjour en France pour découvrir l''Europe.







### 1. Les compagnies aériennes "low-cost" : Voyager vite et pas cher


-   Les compagnies low-cost proposent des billets d''avion à des prix très attractifs, souvent inférieurs à ceux des compagnies régulières.
-   **Modèle économique** : Elles réduisent leurs coûts en facturant la plupart des services supplémentaires (bagages en soute, choix du siège, repas à bord, enregistrement à l''aéroport).

-   **Transavia** (filiale d''Air France-KLM).


-   **Frais supplémentaires** : Attention aux bagages en soute, aux frais de choix de siège, aux frais d''enregistrement à l''aéroport. Le prix final peut vite augmenter.
-   **Aéroports secondaires** : Partent souvent d''aéroports plus éloignés du centre-ville (ex: Beauvais pour Paris, au lieu de Roissy CDG), ce qui ajoute du temps et des frais de transport.


### 2. Les compagnies de bus longue distance : L''option la plus économique




-   **Prix imbattables** : Souvent les billets les moins chers, surtout si réservé à l''avance.

-   **Temps de trajet long** : C''est le principal inconvénient. Les trajets peuvent être très longs.
-   **Moins de confort** : Par rapport au train ou à l''avion.





-   **Bus** : Très compétitif et souvent plus simple (pas de contraintes d''aéroport).




#### a) Réservez à l''avance
-   Pour les avions low-cost et les bus, les prix augmentent à l''approche de la date de départ. Réservez plusieurs semaines, voire mois, à l''avance.


-   Attention aux frais de bagages, aux frais d''enregistrement, aux conditions de modification/annulation.

-   Votre passeport, titre de séjour français (valide) pour l''Espace Schengen.





-   **Prévoyez des snacks et de l''eau** pour les longs trajets en bus.


-   **Oublier ses papiers d''identité** ou son titre de séjour valide.
-   **Se faire arnaquer en ligne** : N''utilisez que les sites officiels.




Pour voyager à travers l''Europe à petit prix depuis la France, privilégiez les compagnies aériennes low-cost (Ryanair, EasyJet) pour les longues distances (attention aux frais de bagages et aéroports périphériques) et les compagnies de bus (Flixbus, BlaBlaCar Bus) pour les trajets plus courts ou si le budget est la priorité (attention aux temps de trajet longs). Réservez à l''avance, comparez les offres, et lisez attentivement les conditions. Maîtriser ces options est absolument crucial pour planifier vos voyages, optimiser votre budget, et profiter pleinement de la découverte de l''Europe pendant votre séjour en France.
',
  2,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 88 ---

-- COURS 89 : Jours fériés et Ponts
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '0d291f92-9399-4ffb-bbac-49306ddb6437',
  'Jours fériés et Ponts en France : Planifiez vos congés !',
  'jours-feries-ponts-france-planifiez-conges',
  'Ce cours est essentiel pour tous les étudiants internationaux en France, afin de comprendre le calendrier des jours fériés et la tradition des "ponts". Les jours fériés sont des jours de repos légaux, et un "pont" est un jour de congé supplémentaire pour relier un jour férié au week-end. Ne pas connaître ces dates, c''est risquer de se retrouver face à des administrations ou des magasins fermés, de ne pas pouvoir planifier ses voyages, ou de manquer des opportunités de repos. Nous vous présenterons le calendrier des jours fériés, et l''art de "faire le pont" en posant ses congés intelligemment. Maîtriser ces informations est absolument crucial pour planifier votre emploi du temps, vos voyages, et profiter pleinement des fêtes nationales et des jours de repos en France.',
  'Jours fériés et Ponts en France : calendrier, "faire le pont" (poser congés). Planifiez vos week-ends prolongés et vos voyages !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre le calendrier des jours fériés légaux en France", "Identifier le concept de "pont" et comment il permet de prolonger les week-ends", "Savoir quand les administrations, magasins et services sont fermés", "Maîtriser les conseils pour planifier ses congés, ses voyages, et ses moments de repos"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  450,
  3500
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 89
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Calendrier des jours fériés',
  '# Calendrier des jours fériés en France

## Pourquoi c''est important ?

En France, les **jours fériés** sont des jours de fête légaux où la plupart des travailleurs ne travaillent pas et où de nombreux services (administrations, banques, certains magasins) sont fermés. Connaître le calendrier de ces jours fériés est absolument crucial pour les étudiants internationaux afin de planifier votre emploi du temps (cours, examens), vos démarches administratives, vos voyages, et vos moments de détente. Ne pas connaître ces dates, c''est risquer de se retrouver devant une porte close, de manquer un rendez-vous, ou de ne pas pouvoir faire ses courses. Maîtriser ce calendrier est fondamental pour une organisation efficace et pour profiter pleinement de votre séjour en France.




Les jours fériés sont des moments de repos, de célébration et de commémoration. Ils rythment l''année civile.





-   **Jour de l''An** : 1er janvier.
-   **Jeudi de l''Ascension** : Date variable (mai).






-   Jour de l''An (commémoration civile).

-   **8 mai (Victoire 1945)** : Célébration de la victoire des Alliés sur l''Allemagne nazie.
-   **14 juillet (Fête Nationale)** : Commémoration de la prise de la Bastille (1789) et de la fin de la monarchie absolue. Jour de défilés militaires, feux d''artifice, bals populaires.



-   **Généralement fermés**. Prévoyez vos démarches à l''avance.

#### b) Établissements d''enseignement



-   Certains peuvent être ouverts, d''autres fermés. Vérifiez les sites internet.










-   **Les jours fériés qui tombent un jeudi ou un mardi** sont souvent l''occasion de "faire le pont" (prendre un jour de congé pour avoir un long week-end). (Voir leçon suivante).
-   **Soyez conscient(e) que la France "s''arrête" souvent** pendant ces jours.


-   **Manquer un cours ou un examen** à cause d''une mauvaise connaissance du calendrier.
-   **Prendre le métro ou le bus sans valider** même un jour férié (risque d''amende).
-   **Penser que tout est ouvert comme d''habitude**.




Le calendrier des 11 jours fériés légaux en France doit être maîtrisé par les étudiants internationaux. Ces jours de repos (Jour de l''An, Pâques, 1er mai, 8 mai, Ascension, Pentecôte, 14 juillet, Assomption, Toussaint, 11 novembre, Noël) entraînent la fermeture des administrations, des banques, des universités, et souvent des magasins. Anticipez vos démarches et vos courses, et profitez de ces jours pour vous reposer ou voyager. Maîtriser ce calendrier est absolument crucial pour une organisation efficace et une intégration réussie dans la vie française.
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
  'Le "Faire le pont" : Poser ses congés intelligemment',
  '# Le "Faire le pont" : Poser ses congés intelligemment

## Pourquoi c''est important ?

En France, le phénomène des **"ponts"** est une tradition très appréciée qui permet de prolonger les week-ends grâce aux jours fériés. Lorsque le jour férié tombe un mardi ou un jeudi, de nombreux Français "font le pont" en posant un jour de congé (le lundi ou le vendredi) pour avoir un week-end de 4 jours. Comprendre cette pratique est absolument crucial pour les étudiants internationaux afin de planifier vos voyages en Europe, vos moments de détente, ou vos visites en France, sans être pris(e) au dépourvu. Maîtriser l''art de "faire le pont" et de poser ses congés intelligemment est fondamental pour optimiser votre temps libre, réduire le stress, et profiter pleinement de votre séjour en France.


-   Définir ce qu''est un "pont" dans le calendrier français.
-   Comprendre les situations idéales pour "faire le pont".


Le pont est un "jour de repos" facultatif qui relie un jour férié à un week-end, offrant ainsi une période de repos prolongée.



### 1. Qu''est-ce qu''un "pont" ? Un week-end prolongé

L''art de maximiser son temps libre.

-   Un "pont" est un jour de congé pris pour relier un jour férié à un week-end, créant ainsi un week-end de 3 ou 4 jours.


-   Le "faire le pont" est une tradition bien ancrée dans les entreprises et les administrations françaises.

### 2. Situations idéales pour "faire le pont"


-   Le mois de mai est souvent le "mois des ponts" en France, avec plusieurs jours fériés (1er mai, 8 mai, Ascension, Pentecôte) qui tombent souvent en semaine.
-   C''est une période propice aux week-ends prolongés.

-   Pour les salariés, le fait de "faire le pont" est souvent décidé collectivement en entreprise.


La bonne gestion pour ne pas perdre de l''argent.

-   **Congés sans solde** : Si vous n''avez pas assez de congés payés, vous pouvez demander un congé sans solde à votre employeur. Il n''est pas obligé d''accepter.

-   **Pas d''obligation de cours** : Les jours fériés et les ponts (si l''université ferme) sont des jours sans cours.



-   Consultez un calendrier pour l''année scolaire/universitaire en cours.

#### b) Planifiez vos voyages à l''avance

-   Les administrations, les banques, et de nombreux commerces seront fermés pendant les ponts. Prévoyez vos démarches et vos courses à l''avance.





-   **Ne manquez pas les ponts de mai** : C''est une période clé pour voyager.
-   **Si vous êtes en colocation**, planifiez les ponts avec vos colocataires pour d''éventuelles sorties communes.
-   **La période des ponts est aussi l''occasion de faire des économies** sur les courses si les magasins sont ouverts un jour où les transports sont réduits.


-   **Sous-estimer l''impact des ponts sur la vie urbaine** (moins de monde en ville, plus de monde sur les routes).




Le "faire le pont" est une tradition française qui permet de prolonger les week-ends grâce aux jours fériés tombant un mardi ou un jeudi. Maîtriser le calendrier des jours fériés et des ponts potentiels est absolument crucial pour les étudiants internationaux afin de planifier vos congés, vos voyages (en réservant à l''avance) et vos moments de détente. Anticipez les fermetures des services et des commerces. Optimiser ces périodes de repos est fondamental pour profiter pleinement de votre séjour en France et explorer l''Europe à moindre coût.
',
  2,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

-- --- Cours 89 ---

-- COURS 90 : Manger Spécifique
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '8cccfedb-fa28-4b47-b115-328aa262003f',
  'Manger Spécifique en France : Halal, Casher, Végé, Vegan',
  'manger-specifique-france-halal-casher-vege-vegan',
  'Ce cours est essentiel pour tous les étudiants internationaux en France qui ont des régimes alimentaires spécifiques (religieux, éthiques, de santé). Le marché alimentaire français offre de plus en plus d''options, mais il est crucial de savoir où trouver des produits **Halal, Casher, Végétariens ou Végans**, et comment identifier les restaurants adaptés. Ne pas connaître ces ressources, c''est risquer des difficultés pour vous alimenter selon vos convictions ou vos besoins, et de ne pas profiter pleinement de l''offre culinaire. Nous vous expliquerons comment trouver ces produits en supermarché et en magasins spécialisés, et les astuces pour repérer les restaurants proposant ces options. Maîtriser ces informations est absolument crucial pour une alimentation conforme et un mode de vie respectueux de vos choix en France.',
  'Manger spécifique France : trouver Halal/Casher, options Végé/Vegan (supermarchés, restos). Respectez vos choix alimentaires sereinement !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  3,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Comprendre l''offre de produits Halal et Casher en France", "Identifier les options végétariennes et véganes en supermarchés et restaurants", "Savoir où trouver des magasins spécialisés et des restaurants adaptés", "Maîtriser les conseils pour une alimentation conforme à ses choix et besoins en France"]'::jsonb,
  '[]'::jsonb,
  TRUE,
  4.8,
  400,
  3000
) ON CONFLICT (slug) DO UPDATE SET title = EXCLUDED.title;

-- LEÇONS pour COURS 90
INSERT INTO lessons (id, course_id, title, content, "order", duration_minutes, video_url, resources) VALUES
(
  'f0e1a2b3-c4d5-4102-e6f7-a8b9c0d1e2f3',
  'e0f1d2c3-b4a5-4102-e6f7-a8b9c0d1e2f3',
  'Trouver du Halal / Casher',
  '# Trouver du Halal / Casher en France

## Pourquoi c''est important ?

Si vous suivez un régime alimentaire Halal (musulman) ou Casher (juif), il est absolument crucial de savoir où trouver des produits et des restaurants adaptés en France. Ne pas connaître ces ressources, c''est risquer des difficultés pour vous alimenter selon vos convictions religieuses, de ne pas profiter de l''offre alimentaire, ou de ne pas vous sentir pleinement intégré(e). Le marché français propose de plus en plus d''options Halal et Casher, mais il faut savoir où chercher. Maîtriser ces informations est fondamental pour une alimentation conforme à vos choix religieux, pour votre bien-être, et pour vivre sereinement votre séjour en France.


-   Définir ce qu''est la nourriture Halal et Casher.


La France, pays laïc, respecte les pratiques religieuses de chacun, y compris en matière d''alimentation.

🔗 [Ministère de l''Agriculture et de la Souveraineté Alimentaire : Les signes de qualité](https://agriculture.gouv.fr/les-signes-de-qualite-et-dorigine) - Informations générales.


### 1. Qu''est-ce que la nourriture Halal / Casher ?


-   **Principe** : Respecte les règles alimentaires de l''Islam. Concerne principalement la viande (abattage rituel, absence de porc), mais aussi l''alcool et certains additifs.






-   **Vérifiez le label** : Assurez-vous que le restaurant indique clairement "Halal" et qu''il est certifié.

🔗 [Avis halal](https://www.avis-halal.com/) - Application et site d''avis.




-   Certains grands supermarchés peuvent avoir un petit rayon "produits du monde" ou "Casher", mais le choix est plus limité qu''en Halal.

-   **Vérifiez la certification** : Assurez-vous que le restaurant est sous le contrôle d''un rabbinat.





-   N''hésitez pas à demander au boucher, au vendeur, ou au restaurateur si les produits sont Halal ou Casher.





-   **Le ramadan ou les fêtes religieuses** peuvent impacter les horaires d''ouverture de certains commerces spécialisés.


-   **Acheter des produits non certifiés** en pensant qu''ils sont Halal/Casher.


-   🔗 [Ministère de l''Agriculture et de la Souveraineté Alimentaire : La certification Halal](https://agriculture.gouv.fr/sites/default/files/certif_halal.pdf) - Guide sur la certification.
-   🔗 [Gouvernement.fr : Vivre ensemble](https://www.gouvernement.fr/actualite/vivre-en-france) - Informations générales sur l''intégration.


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
  'Options Végé/Vegan aux restaurants',
  '# Options Végé/Vegan aux restaurants en France

## Pourquoi c''est important ?

Si vous suivez un régime alimentaire végétarien ou végan, il est absolument crucial de savoir comment trouver des options adaptées aux restaurants en France. Le marché français est de plus en plus ouvert à ces régimes, mais les restaurants n''affichent pas toujours clairement leurs options. Ne pas connaître les astuces pour repérer les établissements adaptés, comprendre le vocabulaire, ou savoir comment interagir avec les restaurateurs, c''est risquer de ne pas pouvoir manger en dehors de chez vous, de vous sentir frustré(e), ou de ne pas profiter de l''offre culinaire française.



Trinquer en se regardant dans les yeux est un rituel social absolument crucial en France, marquant le respect et la convivialité. Au moment d''entrechoquer votre verre, regardez chaque personne dans les yeux et prononcez une formule comme "Tchin-tchin !" ou "À la vôtre !". Évitez de ne pas regarder, car cela peut être perçu comme un manque de respect. Maîtriser ce geste est fondamental pour des interactions sociales réussies, une bonne intégration, et pour partager pleinement les moments de détente et de fête avec les Français.

-- --- Cours 90 ---

-- COURS 80 : Améliorer son français
INSERT INTO courses (id, title, slug, description, short_description, category, level, language, duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, rating, reviews_count, enrolled_count) VALUES
(
  '8d860487-8a77-41d4-a4e2-3a360690824e',
  'Améliorer son français en France : Ressources et astuces pour progresser',
  'ameliorer-francais-france-ressources-astuces-progresser',
  'Ce cours est un guide essentiel pour tous les étudiants internationaux en France qui souhaitent perfectionner leur maîtrise de la langue française. Une bonne connaissance du français est la clé d''une intégration réussie, d''une meilleure réussite académique, et d''une insertion professionnelle facilitée. Nous vous présenterons des applications gratuites pour l''apprentissage (Duolingo, Babbel), les avantages des "cafés des langues" et des "tandems linguistiques" pour la pratique orale, et l''intérêt des médias français (Radio France, Arte) pour l''écoute et la compréhension. Maîtriser ces ressources et ces astuces est absolument crucial pour progresser rapidement, gagner en confiance, et vous immerger pleinement dans la vie française.',
  'Améliorer votre français : applications gratuites, cafés des langues, tandems, Radio France, Arte. Progressez vite et intégrez-vous !',
  'culture_codes_sociaux',
  'debutant',
  'fr',
  4,
  0,
  'https://images.unsplash.com/photo-1549419137-b93892019409?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZpc2FzfGVufDB8fDB8fHww',
  '["Découvrir et utiliser des applications gratuites pour apprendre le français", "Comprendre l''intérêt des cafés des langues et tandems linguistiques pour la pratique orale", "Savoir utiliser les médias français (radio, TV) pour l''écoute et la compréhension", "Maîtriser les conseils pour une progression rapide et une immersion réussie"]'::jsonb,
  '["Avoir un niveau de français de base (A1 minimum)"]'::jsonb,
  TRUE,
  4.8,
  800,
  6000
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
  1,
  55,
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
  2,
  55,
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
  3,
  55,
  NULL,
  '[]'::jsonb
) ON CONFLICT (id) DO NOTHING;

