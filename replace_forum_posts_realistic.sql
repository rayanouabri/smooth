-- =====================================================
-- REMPLACER LES POSTS DU FORUM PAR DES CONTENUS RÉALISTES
-- =====================================================
-- Ce script supprime tous les anciens posts et commentaires
-- et les remplace par des contenus naturels et pertinents
-- =====================================================

-- Supprimer tous les anciens posts et réponses
DELETE FROM forum_replies;
DELETE FROM forum_posts;

-- =====================================================
-- NOUVEAUX POSTS DU FORUM - CONTENUS RÉALISTES
-- =====================================================

-- POST 1 : Problème réel avec la CAF
INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'a1b2c3d4-e5f6-4789-a012-3456789abcde',
  'Ma CAF tarde à répondre, est-ce normal ?',
  'Salut ! J''ai déposé mon dossier CAF il y a presque 3 mois pour l''APL. J''ai reçu un accusé de réception mais depuis, rien. Mon dossier est marqué "en instruction". Ça vous est déjà arrivé ? Faut-il que je les relance ou c''est normal que ça prenne autant de temps ?',
  'integration_administrative',
  'sarah.chen@gmail.com',
  'Sarah',
  3,
  127,
  FALSE,
  TRUE,
  '["caf", "apl", "delai"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
('11111111-1111-4111-8111-111111111111', 'a1b2c3d4-e5f6-4789-a012-3456789abcde', '3 mois c''est malheureusement dans la norme... J''ai attendu 4 mois perso. Ce qui a fonctionné : j''ai appelé le 0810 25 25 10 (numéro gratuit) tous les 10 jours pour relancer poliment. Au 4ème appel, ils ont traité mon dossier rapidement. Il faut être patient mais persévérant !', 'marco.rossi@hotmail.com', 'Marco', TRUE, 15),
('22222222-2222-4222-8222-222222222222', 'a1b2c3d4-e5f6-4789-a012-3456789abcde', 'Vérifie aussi sur ton espace caf.fr si tous tes documents sont bien validés. Moi j''avais un document qui était marqué "à compléter" mais je ne l''avais pas vu. Une fois corrigé, ça s''est débloqué en 2 semaines.', 'lisa.petersen@outlook.com', 'Lisa', FALSE, 9),
('33333333-3333-4333-8333-333333333333', 'a1b2c3d4-e5f6-4789-a012-3456789abcde', 'Oui c''est normal malheureusement. La CAF a des délais qui varient entre 2 et 4 mois selon les périodes. Si ça dépasse 4 mois, là il faut vraiment les appeler. En attendant, garde bien tous tes justificatifs de loyer au cas où tu aies droit à un remboursement rétroactif.', 'thomas.muller@yahoo.com', 'Thomas', FALSE, 7)
ON CONFLICT (id) DO NOTHING;

-- POST 2 : Problème avec la préfecture
INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'b2c3d4e5-f6a7-4890-b123-456789abcdef',
  'RDV préfecture impossible à avoir, que faire ?',
  'Bonjour ! J''ai besoin de renouveler mon titre de séjour mais impossible de trouver un créneau sur le site de la préfecture depuis 2 semaines. Les créneaux partent en quelques minutes. Vous avez des astuces pour avoir un RDV ?',
  'integration_administrative',
  'amara.diallo@mail.com',
  'Amara',
  4,
  203,
  TRUE,
  FALSE,
  '["prefecture", "titre-sejour", "rdv", "urgence"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
('44444444-4444-4444-8444-444444444444', 'b2c3d4e5-f6a7-4890-b123-456789abcdef', 'Le truc qui marche : connecte-toi entre 6h et 7h du matin. C''est là qu''ils mettent les nouveaux créneaux. Moi j''ai eu le mien comme ça en 2 jours après avoir essayé pendant 3 semaines sans succès. Et utilise plusieurs onglets en parallèle, ça peut aider !', 'julia.santos@gmail.com', 'Julia', TRUE, 23),
('55555555-5555-4555-8555-555555555555', 'b2c3d4e5-f6a7-4890-b123-456789abcdef', 'Si vraiment tu n''y arrives pas, essaie de les appeler directement ou d''envoyer un mail avec justificatif de ta situation urgente (expiration proche, etc.). Parfois ils te donnent un créneau exceptionnel. Ça m''est arrivé quand mon titre expirait dans moins d''un mois.', 'kevin.nguyen@hotmail.com', 'Kevin', FALSE, 18),
('66666666-6666-4666-8666-666666666666', 'b2c3d4e5-f6a7-4890-b123-456789abcdef', 'Perso j''ai utilisé une extension Chrome qui me notifie quand des créneaux se libèrent. Il y en a plusieurs gratuites. Mais attention à ne pas trop les utiliser sinon tu risques de te faire bannir. Le mieux reste de se lever tôt et de checker manuellement.', 'sophie.belgium@outlook.com', 'Sophie', FALSE, 12),
('77777777-7777-4777-8777-777777777777', 'b2c3d4e5-f6a7-4890-b123-456789abcdef', 'Si ton titre expire bientôt, tu peux aussi essayer d''aller directement à l''accueil de la préfecture avec tous tes documents. Parfois ils acceptent de te prendre même sans RDV si c''est vraiment urgent. Ça dépend de la préfecture par contre.', 'yuki.tanaka@gmail.com', 'Yuki', FALSE, 8)
ON CONFLICT (id) DO NOTHING;

-- POST 3 : Question sur la mutuelle
INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'c3d4e5f6-a7b8-4901-c234-56789abcdef0',
  'Mutuelle étudiante : LMDE ou SMEREP ? Laquelle choisir ?',
  'Je dois m''inscrire à une mutuelle étudiante mais je ne sais pas laquelle prendre entre LMDE et SMEREP. J''ai vu que les tarifs sont similaires mais est-ce qu''il y a des différences importantes ? Des retours d''expérience ?',
  'integration_administrative',
  'pedro.martinez@mail.com',
  'Pedro',
  5,
  156,
  FALSE,
  TRUE,
  '["mutuelle", "etudiant", "sante"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
('88888888-8888-4888-8888-888888888888', 'c3d4e5f6-a7b8-4901-c234-56789abcdef0', 'J''ai testé les deux (j''ai changé d''université). Honnêtement niveau remboursements c''est pareil, les deux couvrent bien. La vraie différence c''est la région : LMDE couvre mieux en Île-de-France, SMEREP dans certaines autres régions. Regarde laquelle est partenaire de ton université, souvent c''est plus simple pour les démarches.', 'clara.dubois@gmail.com', 'Clara', TRUE, 19),
('99999999-9999-4999-8999-999999999999', 'c3d4e5f6-a7b8-4901-c234-56789abcdef0', 'Moi j''ai pris LMDE parce que leur app est mieux faite et que j''ai moins de problèmes pour me faire rembourser rapidement. Les deux sont équivalentes niveau prix (environ 20€/mois). Le plus important c''est de ne pas oublier de t''inscrire, sinon tu vas galérer pour te faire rembourser tes frais médicaux !', 'ahmed.benali@outlook.com', 'Ahmed', FALSE, 14),
('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa', 'c3d4e5f6-a7b8-4901-c234-56789abcdef0', 'Attention, si tu as déjà une mutuelle dans ton pays d''origine, vérifie si elle couvre aussi la France. Ça peut éviter de payer deux fois. Moi j''avais pris LMDE et après j''ai découvert que ma mutuelle belge couvrait déjà tout, j''ai pu me faire rembourser.', 'lucas.schmidt@hotmail.com', 'Lucas', FALSE, 11),
('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb', 'c3d4e5f6-a7b8-4901-c234-56789abcdef0', 'Perso j''ai pris SMEREP parce qu''ils ont des réductions avec certains partenaires (opticiens, pharmacies) et que leur service client répond rapidement. Les deux sont bien, prends celle qui te fait le plus de sens. L''important c''est d''en avoir une !', 'maria.fernandez@gmail.com', 'Maria', FALSE, 9),
('cccccccc-cccc-4ccc-8ccc-cccccccccccc', 'c3d4e5f6-a7b8-4901-c234-56789abcdef0', 'N''oublie pas que la mutuelle c''est en plus de la Sécurité Sociale, pas à la place. Donc d''abord tu t''affilies à la CPAM, et ensuite tu prends une mutuelle pour compléter les remboursements. C''est obligatoire de toute façon si tu es étudiant.', 'alex.kim@mail.com', 'Alex', FALSE, 6)
ON CONFLICT (id) DO NOTHING;

-- POST 4 : Logement sans garant
INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'd4e5f6a7-b8c9-4012-d345-6789abcdef01',
  'Studio à Lyon : propriétaire veut un garant français, je n''en ai pas',
  'Salut ! Je cherche un studio à Lyon pour septembre et tous les propriétaires me demandent un garant français. Je viens de Belgique donc je n''ai personne ici. Est-ce que Visale fonctionne vraiment ou il faut trouver autre chose ?',
  'integration_administrative',
  'tom.vandamme@hotmail.com',
  'Tom',
  6,
  189,
  FALSE,
  TRUE,
  '["logement", "garant", "visale", "lyon"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
('dddddddd-dddd-4ddd-8ddd-dddddddddddd', 'd4e5f6a7-b8c9-4012-d345-6789abcdef01', 'Visale ça marche vraiment ! J''étais dans la même situation et j''ai obtenu mon studio grâce à ça. C''est gratuit et ça prend 2-3 jours pour obtenir l''attestation sur actionlogement.fr. Certains propriétaires ne connaissent pas mais tu peux leur expliquer, c''est une garantie de l''État donc c''est fiable. J''ai même imprimé le flyer explicatif pour le montrer.', 'nina.johansson@gmail.com', 'Nina', TRUE, 24),
('eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee', 'd4e5f6a7-b8c9-4012-d345-6789abcdef01', 'Si le propriétaire refuse Visale (ça arrive parfois), tu peux proposer de payer plusieurs mois d''avance. J''ai fait ça : j''ai proposé 3 mois de caution + 2 mois d''avance et le propriétaire a accepté. Ça fait un gros montant au début mais ça rassure les propriétaires.', 'diego.rodriguez@outlook.com', 'Diego', FALSE, 16),
('ffffffff-ffff-4fff-8fff-ffffffffffff', 'd4e5f6a7-b8c9-4012-d345-6789abcdef01', 'Certaines banques proposent aussi des garanties locatives (Garantme, Unkle, etc.) mais c''est payant (environ 3-5% du loyer mensuel). Visale reste le mieux si tu y as droit (moins de 30 ans, loyer < 1500€). Sinon regarde du côté des résidences étudiantes CROUS ou privées, elles acceptent souvent sans garant.', 'emma.brown@mail.com', 'Emma', FALSE, 13),
('10101010-1010-4010-8010-101010101010', 'd4e5f6a7-b8c9-4012-d345-6789abcdef01', 'Je confirme pour Visale ! C''est ce qui m''a sauvé aussi. Attention par contre, il faut que tu fasses la demande AVANT de signer le bail (mais après avoir trouvé le logement). L''attestation est valable 2 mois. Et tu dois avoir ton numéro étudiant et un RIB français.', 'samuel.lee@gmail.com', 'Samuel', FALSE, 10),
('20202020-2020-4020-8020-202020202020', 'd4e5f6a7-b8c9-4012-d345-6789abcdef01', 'Si tu es en colocation, parfois les autres colocataires peuvent te servir de garant (si leur garant accepte de couvrir toute la colocation). J''étais dans une coloc à 3 et on a tous utilisé le même garant qui était celui d''un des coloc. Ça dépend vraiment du propriétaire par contre.', 'isabella.moretti@hotmail.com', 'Isabella', FALSE, 7),
('30303030-3030-4030-8030-303030303030', 'd4e5f6a7-b8c9-4012-d345-6789abcdef01', 'Sur Leboncoin ou PAP, tu peux filtrer les annonces qui acceptent les étudiants ou les garanties type Visale. Ça te fera gagner du temps au lieu de contacter des propriétaires qui refuseront. Bon courage pour ta recherche !', 'ryan.oconnor@outlook.com', 'Ryan', FALSE, 5)
ON CONFLICT (id) DO NOTHING;

-- POST 5 : Culture - La bise
INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'e5f6a7b8-c9d0-4123-e456-789abcdef012',
  'La bise : combien de bises et avec qui ?',
  'Bonjour ! Je suis étudiante italienne et je ne comprends pas bien les règles de la bise en France. Des fois c''est 2, des fois 3, parfois on ne fait pas la bise du tout. Comment savoir ? C''est vraiment gênant quand je me trompe !',
  'culture_codes_sociaux',
  'francesca.romano@gmail.com',
  'Francesca',
  7,
  234,
  FALSE,
  TRUE,
  '["culture", "bise", "politesse"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
('40404040-4040-4040-8040-404040404040', 'e5f6a7b8-c9d0-4123-e456-789abcdef012', 'Ah je comprends ta confusion ! En général : avec les amis et la famille c''est 2 bises (sauf dans certaines régions où c''est 3 ou 4). Au boulot ou avec des gens que tu connais peu, tu ne fais pas la bise, juste une poignée de main ou un simple "bonjour". Le truc : regarde ce que font les autres, et si tu hésites, tends juste la main. Personne ne te jugera !', 'paul.martin@gmail.com', 'Paul', TRUE, 28),
('50505050-5050-4050-8050-505050505050', 'e5f6a7b8-c9d0-4123-e456-789abcdef012', 'Je suis en Alsace et ici c''est 3 bises ! Ça dépend vraiment de la région. En Provence c''est 4 parfois. En région parisienne généralement 2. Mon conseil : si c''est la première fois avec quelqu''un, attends de voir ce qu''il/elle fait. Ou demande gentiment "on fait la bise ?" si tu es pas sûre.', 'marie.dubois@hotmail.com', 'Marie', FALSE, 19),
('60606060-6060-4060-8060-606060606060', 'e5f6a7b8-c9d0-4123-e456-789abcdef012', 'Pendant le COVID beaucoup de gens ont arrêté la bise même avec les amis. Maintenant c''est revenu mais il y a encore des gens qui préfèrent ne pas faire la bise. Donc si tu ne veux pas faire la bise, tu peux juste dire "je préfère pas en ce moment" et personne ne le prendra mal.', 'lucas.belgium@outlook.com', 'Lucas', FALSE, 15),
('70707070-7070-4070-8070-707070707070', 'e5f6a7b8-c9d0-4123-e456-789abcdef012', 'Avec les hommes, c''est souvent une poignée de main entre hommes (sauf s''ils sont très proches = famille/amis depuis longtemps). Entre femmes c''est souvent la bise. Entre homme et femme, ça dépend, mais souvent la bise. En situation professionnelle : poignée de main pour tout le monde.', 'sophie.paris@gmail.com', 'Sophie', FALSE, 12),
('80808080-8080-4080-8080-808080808080', 'e5f6a7b8-c9d0-4123-e456-789abcdef012', 'Pour ne pas te tromper, tu peux aussi faire un petit geste vers la joue et dire "bonjour" avec un sourire. L''autre personne comprendra et te guidera. Les Français sont habitués aux étrangers qui ne connaissent pas les codes, ils sont généralement compréhensifs. Ne stresse pas trop !', 'julie.toulouse@mail.com', 'Julie', FALSE, 10),
('90909090-9090-4090-8090-909090909090', 'e5f6a7b8-c9d0-4123-e456-789abcdef012', 'Fun fact : on commence toujours par la joue droite ! C''est important parce que sinon tu peux te retrouver à faire une bise directe sur la bouche (embarrassant !). Droite puis gauche (pour 2 bises).', 'antoine.marseille@hotmail.com', 'Antoine', FALSE, 8),
('a0a0a0a0-a0a0-40a0-80a0-a0a0a0a0a0a0', 'e5f6a7b8-c9d0-4123-e456-789abcdef012', 'Merci pour tous ces conseils ! Ça m''aide vraiment. Je vais observer ce que font mes collègues français et suivre leur exemple. Je me sens moins stressée maintenant !', 'francesca.romano@gmail.com', 'Francesca', FALSE, 3)
ON CONFLICT (id) DO NOTHING;

-- POST 6 : Banque - Compte étudiant
INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'f6a7b8c9-d0e1-4234-f567-89abcdef0123',
  'Compte bancaire étudiant : quelle banque choisir ?',
  'Je dois ouvrir un compte bancaire pour mes études. J''ai vu qu''il y a des offres étudiantes mais je ne sais pas laquelle choisir. Certaines sont gratuites, d''autres ont des avantages... Vous avez des retours ?',
  'integration_administrative',
  'hassan.ali@gmail.com',
  'Hassan',
  5,
  167,
  FALSE,
  TRUE,
  '["banque", "etudiant", "compte"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
('b0b0b0b0-b0b0-40b0-80b0-b0b0b0b0b0b0', 'f6a7b8c9-d0e1-4234-f567-89abcdef0123', 'Les banques en ligne (Boursorama, Hello Bank, Fortuneo) sont généralement les meilleures pour les étudiants : gratuites, faciles à ouvrir en ligne, et pas de frais cachés. Perso j''ai Boursorama depuis 2 ans et j''en suis content. Si tu veux une agence physique, la Société Générale a une offre étudiante pas mal mais c''est payant après 25 ans.', 'camille.leroy@outlook.com', 'Camille', TRUE, 22),
('c0c0c0c0-c0c0-40c0-80c0-c0c0c0c0c0c0', 'f6a7b8c9-d0e1-4234-f567-89abcdef0123', 'Attention aux banques traditionnelles : beaucoup promettent la gratuité mais après 1 ou 2 ans elles commencent à te facturer des frais. Moi j''étais à la BNP et après 24 mois ils m''ont mis des frais de 7€/mois. J''ai changé pour Boursorama et c''est toujours gratuit.', 'nicolas.bordeaux@gmail.com', 'Nicolas', FALSE, 17),
('d0d0d0d0-d0d0-40d0-80d0-d0d0d0d0d0d0', 'f6a7b8c9-d0e1-4234-f567-89abcdef0123', 'Si tu viens d''arriver sans justificatif de domicile français, les banques en ligne sont plus flexibles. J''ai ouvert mon compte Boursorama avec juste une attestation d''hébergement. Les banques physiques m''avaient toutes refusé.', 'lena.weber@hotmail.com', 'Lena', FALSE, 14),
('e0e0e0e0-e0e0-40e0-80e0-e0e0e0e0e0e0', 'f6a7b8c9-d0e1-4234-f567-89abcdef0123', 'N26 c''est bien aussi pour les étudiants internationaux, surtout si tu veux un compte dans plusieurs devises. Mais attention, c''est une banque allemande, donc pour certaines démarches administratives (CAF, etc.) ça peut poser problème car ils demandent parfois un IBAN français (ce qui commence par FR).', 'robert.hungary@mail.com', 'Robert', FALSE, 11),
('f0f0f0f0-f0f0-40f0-80f0-f0f0f0f0f0f0', 'f6a7b8c9-d0e1-4234-f567-89abcdef0123', 'Mon conseil : prends une banque en ligne gratuite maintenant, et garde-la même après tes études. Pas besoin de changer après. Boursorama reste gratuit à vie si tu fais au moins une opération par mois. C''est vraiment pratique.', 'emilie.nantes@outlook.com', 'Emilie', FALSE, 9)
ON CONFLICT (id) DO NOTHING;

-- POST 7 : Professionnel - Stage
INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'a7b8c9d0-e1f2-4345-a678-9abcdef01234',
  'Convention de stage : comment la trouver et la remplir ?',
  'Bonjour ! Je dois faire un stage obligatoire pour ma licence mais je ne comprends pas comment obtenir la convention de stage. C''est l''université qui la donne ? L''entreprise ? J''ai besoin d''aide !',
  'insertion_professionnelle',
  'jing.li@gmail.com',
  'Jing',
  4,
  145,
  FALSE,
  TRUE,
  '["stage", "convention", "universite"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
('11111111-1111-4111-8111-111111111112', 'a7b8c9d0-e1f2-4345-a678-9abcdef01234', 'C''est ton université qui fournit la convention ! Va voir le service des stages ou le secrétariat de ta filière. Ils ont un modèle de convention standard. Tu remplis tes infos et celles de l''entreprise, l''entreprise signe, tu signes, et tu la ramènes à l''université pour la signature finale. Attention, ça peut prendre 1-2 semaines donc fais-le en avance !', 'maxime.lyon@gmail.com', 'Maxime', TRUE, 20),
('22222222-2222-4222-8222-222222222223', 'a7b8c9d0-e1f2-4345-a678-9abcdef01234', 'Attention : la convention est OBLIGATOIRE en France. Sans convention, ton stage n''est pas légal. Et tu as droit à une gratification si ton stage dure plus de 2 mois (environ 600€/mois minimum). N''accepte jamais un stage non rémunéré de plus de 2 mois, c''est illégal.', 'chloe.rennes@hotmail.com', 'Chloé', FALSE, 18),
('33333333-3333-4333-8333-333333333334', 'a7b8c9d0-e1f2-4345-a678-9abcdef01234', 'Certaines universités ont un portail en ligne pour générer la convention automatiquement. Connecte-toi sur l''ENT (Espace Numérique de Travail) de ton université et cherche "convention de stage" ou "service stages". Ça évite d''aller physiquement au secrétariat.', 'thibaut.strasbourg@outlook.com', 'Thibaut', FALSE, 13),
('44444444-4444-4444-8444-444444444445', 'a7b8c9d0-e1f2-4345-a678-9abcdef01234', 'Un détail important : la convention doit être signée AVANT le début du stage. Si tu commences ton stage sans convention, tu risques des problèmes. Si c''est urgent, certaines universités peuvent accélérer le processus si tu expliques la situation.', 'laurie.bordeaux@gmail.com', 'Laurie', FALSE, 10)
ON CONFLICT (id) DO NOTHING;

-- POST 8 : Transport - Navigo
INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'b8c9d0e1-f2a3-4456-b789-abcdef012345',
  'Carte Navigo étudiante : comment l''obtenir ?',
  'Je viens d''arriver à Paris et je dois prendre les transports tous les jours. On m''a parlé de la carte Navigo étudiante qui est moins chère mais je ne sais pas comment l''obtenir. Aide-moi !',
  'culture_codes_sociaux',
  'anastasia.petrova@mail.com',
  'Anastasia',
  5,
  198,
  FALSE,
  TRUE,
  '["transport", "navigo", "paris", "etudiant"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
('55555555-5555-4555-8555-555555555556', 'b8c9d0e1-f2a3-4456-b789-abcdef012345', 'Pour la carte Navigo avec tarif réduit étudiant, il faut d''abord faire ta demande sur le site Île-de-France Mobilités (ile-de-france-mobilites.fr). Tu uploades une photo, ton justificatif étudiant, et tu paies 5€ pour la carte. Ensuite tu peux charger un abonnement mensuel (environ 38€ au lieu de 84€). Ça prend 1-2 semaines à arriver par la poste.', 'pierre.paris@gmail.com', 'Pierre', TRUE, 26),
('66666666-6666-4666-8666-666666666667', 'b8c9d0e1-f2a3-4456-b789-abcdef012345', 'Pendant que tu attends ta carte, tu peux utiliser l''app Navigo Easy sur ton téléphone. Tu achètes des tickets à l''unité ou un carnet, et tu charges sur ta carte via NFC. C''est pratique en attendant.', 'lucie.creteil@hotmail.com', 'Lucie', FALSE, 16),
('77777777-7777-4777-8777-777777777778', 'b8c9d0e1-f2a3-4456-b789-abcdef012345', 'Attention, le tarif réduit étudiant c''est seulement pour les moins de 26 ans ! Si tu as plus de 26 ans, tu paies le plein tarif même si tu es étudiant. C''est vraiment pas juste mais c''est comme ça. Certaines universités proposent des remboursements partiels, renseigne-toi.', 'antoine.idf@outlook.com', 'Antoine', FALSE, 12),
('88888888-8888-4888-8888-888888888889', 'b8c9d0e1-f2a3-4456-b789-abcdef012345', 'Si tu habites en banlieue, fais attention aux zones ! L''abonnement étudiant couvre généralement les zones 1-5 mais vérifie selon ton trajet. Si tu sors souvent de la zone 5, il faut payer un supplément.', 'marion.versailles@gmail.com', 'Marion', FALSE, 9),
('99999999-9999-4999-8999-99999999999a', 'b8c9d0e1-f2a3-4456-b789-abcdef012345', 'N''oublie pas de renouveler ton justificatif étudiant chaque année sur le site Île-de-France Mobilités. Si tu oublies, ton abonnement repasse au plein tarif automatiquement. Moi j''ai eu une mauvaise surprise une fois !', 'clement.nanterre@mail.com', 'Clément', FALSE, 7)
ON CONFLICT (id) DO NOTHING;

-- POST 9 : Culture - Les codes sociaux
INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'c9d0e1f2-a3b4-4567-c890-def012345678',
  'Les profs disent "tu" ou "vous" ?',
  'Bonjour ! Je suis en L1 et je ne sais pas si je dois vouvoyer ou tutoyer mes professeurs. Dans mon pays on vouvoie toujours, mais j''ai entendu qu''en France c''est différent selon les universités. Comment savoir ?',
  'culture_codes_sociaux',
  'viktor.kovacs@hotmail.com',
  'Viktor',
  6,
  176,
  FALSE,
  TRUE,
  '["culture", "politesse", "universite", "tu-vous"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
('aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaab', 'c9d0e1f2-a3b4-4567-c890-def012345678', 'En général, à l''université on vouvoie les professeurs (vous). Mais certains profs te disent "tu" dès le début, dans ce cas tu peux les tutoyer aussi. Mon conseil : commence toujours par "vous" et attends que le prof te dise "tu". Comme ça tu ne risques pas de paraître irrespectueux.', 'jeanne.lille@gmail.com', 'Jeanne', TRUE, 21),
('bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbc', 'c9d0e1f2-a3b4-4567-c890-def012345678', 'Ça dépend vraiment de l''université et du prof. Dans les grandes écoles c''est souvent "tu" même avec les profs. À la fac c''est plutôt "vous". Les chargés de TD (Travaux Dirigés) sont souvent plus détendus, tu peux souvent les tutoyer. Les professeurs titulaires : vouvoyer.', 'romain.grenoble@outlook.com', 'Romain', FALSE, 15),
('cccccccc-cccc-4ccc-8ccc-cccccccccccd', 'c9d0e1f2-a3b4-4567-c890-def012345678', 'Par email, toujours vouvoyer au début. Si le prof te répond en te tutoyant, tu peux suivre. Mais jamais de "tu" dans le premier email, même si le prof semble cool. C''est une question de respect professionnel.', 'elodie.montpellier@gmail.com', 'Elodie', FALSE, 13),
('dddddddd-dddd-4ddd-8ddd-ddddddddddde', 'c9d0e1f2-a3b4-4567-c890-def012345678', 'Avec les doctorants qui font des TD, tu peux souvent les tutoyer. Ce sont des étudiants avancés, pas vraiment des profs. Mais si tu hésites, "vous" reste toujours la solution de sécurité !', 'bastien.nice@hotmail.com', 'Bastien', FALSE, 10),
('eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeef', 'c9d0e1f2-a3b4-4567-c890-def012345678', 'Si un prof te corrige et te dit "tu peux me tutoyer", alors tu peux. Sinon reste sur "vous". C''est mieux de paraître un peu trop formel au début que pas assez. Les profs comprennent que tu es étranger et ne le prendront pas mal.', 'mathilde.angers@mail.com', 'Mathilde', FALSE, 8),
('ffffffff-ffff-4fff-8fff-fffffffffff0', 'c9d0e1f2-a3b4-4567-c890-def012345678', 'Entre étudiants, c''est toujours "tu" ! Même avec des étudiants plus âgés ou en master. On se tutoie tous entre étudiants, c''est la norme.', 'quentin.rouen@gmail.com', 'Quentin', FALSE, 6)
ON CONFLICT (id) DO NOTHING;

-- POST 10 : Santé - Doctolib
INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags) VALUES
(
  'd0e1f2a3-b4c5-4678-d901-ef0123456789',
  'Doctolib : comment trouver un médecin qui parle anglais ?',
  'Salut ! Je dois voir un médecin mais mon français médical n''est pas encore au point. Est-ce qu''il y a un moyen de trouver un médecin qui parle anglais sur Doctolib ? Je ne vois pas l''option dans les filtres.',
  'integration_administrative',
  'david.miller@outlook.com',
  'David',
  4,
  132,
  FALSE,
  TRUE,
  '["sante", "doctolib", "medecin", "anglais"]'::jsonb
) ON CONFLICT (id) DO NOTHING;

INSERT INTO forum_replies (id, post_id, content, author_email, author_name, is_solution, likes_count) VALUES
('00000000-0000-4000-8000-000000000001', 'd0e1f2a3-b4c5-4678-d901-ef0123456789', 'Sur Doctolib, tu peux chercher "médecin anglophone" dans la barre de recherche ou regarder dans la description du médecin. Beaucoup indiquent les langues qu''ils parlent. Sinon, dans les grandes villes il y a souvent des cabinets médicaux spécialisés pour expatriés/étudiants internationaux. À Paris par exemple, il y a l''American Hospital ou des cabinets dans le 16ème arrondissement.', 'sarah.london@gmail.com', 'Sarah', TRUE, 18),
('00000000-0000-4000-8000-000000000002', 'd0e1f2a3-b4c5-4678-d901-ef0123456789', 'Tu peux aussi appeler directement le cabinet avant de prendre RDV et demander "est-ce qu''un médecin parle anglais ?". Beaucoup de médecins en France parlent anglais mais ne l''indiquent pas forcément sur Doctolib. Et ne t''inquiète pas, même si ton français médical n''est pas parfait, les médecins sont habitués et se débrouillent !', 'lucas.berlin@hotmail.com', 'Lucas', FALSE, 14),
('00000000-0000-4000-8000-000000000003', 'd0e1f2a3-b4c5-4678-d901-ef0123456789', 'Si tu es étudiant, va voir le SUMPPS (Service Universitaire de Médecine Préventive) de ton université. Les médecins là-bas sont habitués aux étudiants internationaux et beaucoup parlent anglais. C''est gratuit en plus !', 'anna.prague@gmail.com', 'Anna', FALSE, 12),
('00000000-0000-4000-8000-000000000004', 'd0e1f2a3-b4c5-4678-d901-ef0123456789', 'Petit conseil : prépare une petite liste de vocabulaire médical de base (mal de tête, fièvre, douleur, etc.) sur ton téléphone. Ça t''aidera même si le médecin ne parle pas anglais. Et n''hésite pas à demander au médecin d''écrire le diagnostic sur une ordonnance, comme ça tu peux le traduire après.', 'maya.amsterdam@outlook.com', 'Maya', FALSE, 9)
ON CONFLICT (id) DO NOTHING;

-- Mettre à jour le compteur de réponses
UPDATE forum_posts 
SET replies_count = (
  SELECT COUNT(*) FROM forum_replies WHERE forum_replies.post_id = forum_posts.id
);
