-- =====================================================
-- IMPORT DES DONNÉES DEPUIS BASE44
-- Exécutez ce fichier après avoir exécuté supabase-schema.sql
-- =====================================================

-- IMPORT COURSES
-- Note: Vous devrez ajuster les types de données selon votre schéma Supabase
INSERT INTO courses (
  id, title, slug, description, short_description, category, level, language, 
  duration_hours, price, thumbnail_url, objectives, prerequisites, is_published, 
  rating, reviews_count, enrolled_count, created_date, updated_date
) VALUES
-- Les données seront importées via l'interface Supabase ou via un script Python/Node.js
-- Pour l'instant, placez ici vos données formatées
-- Exemple de format (à adapter selon vos CSV):
('694bce0295a35204e800d664', 'Rédaction de Contenu Web SEO', 'redaction-contenu-web-seo', 
 'Rédaction optimisée moteurs : recherche mots-clés, intention recherche, structure articles (H1-H6), densité mots-clés, longue traîne, méta description, snippets, liens internes, fraicheur contenu, E-A-T (Expertise Autorité Trust), featured snippets, position zéro, outils (SEMrush, Ahrefs).',
 'Rédigez des contenus qui rankent sur Google', 'formations_professionnelles', 'intermediaire', 'B2', 10, 39,
 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=800',
 '["Maîtriser SEO writing","Rechercher mots-clés","Structurer articles","Ranker Google","Générer trafic"]'::jsonb,
 '[]'::jsonb, true, 4.7, 1543, 5876,
 '2025-12-24T11:26:58.176000'::timestamptz, '2025-12-24T11:26:58.176000'::timestamptz)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  slug = EXCLUDED.slug,
  description = EXCLUDED.description,
  updated_date = EXCLUDED.updated_date;

-- IMPORT TESTIMONIALS
INSERT INTO testimonials (id, student_name, student_photo, country_origin, content, rating, is_featured, created_date)
VALUES
('6949dd8abc12a9f0f09778ad', 'Amira Hassan', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200', 
 'Égypte', 'FrancePrepAcademy a complètement transformé mon expérience en France. Grâce aux cours sur la CAF et le logement, j''ai pu m''installer en 2 semaines. Les cours de français m''ont permis d''obtenir mon DELF B2 du premier coup. Je recommande à 100% !',
 5, true, '2025-12-23T00:08:42.660000'::timestamptz),
('6949dd8abc12a9f0f09778ae', 'Carlos Rodriguez', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
 'Colombie', 'Les cours sur l''insertion professionnelle et les codes culturels m''ont été indispensables. J''ai décroché mon premier emploi en France 3 mois après mon arrivée. La communauté est exceptionnelle, toujours prête à aider.',
 5, true, '2025-12-23T00:08:42.660000'::timestamptz),
('6949dd8abc12a9f0f09778af', 'Mei Chen', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
 'Chine', 'Le chatbot IA m''a sauvée plusieurs fois quand j''avais des questions urgentes sur mes démarches administratives. Les professeurs sont compétents et patients. Une plateforme complète qui mérite son succès.',
 5, true, '2025-12-23T00:08:42.660000'::timestamptz)
ON CONFLICT (id) DO NOTHING;

-- IMPORT FORUM POSTS
INSERT INTO forum_posts (id, title, content, category, author_email, author_name, replies_count, views_count, is_pinned, is_solved, tags, created_date, updated_date)
VALUES
('694aebd405f4f0df404b3aac', 'Ma demande CAF est bloquée depuis 2 mois, que faire ?',
 'Bonjour à tous,

Je suis vraiment découragée... J''ai fait ma demande CAF début octobre et je n''ai toujours aucune nouvelle. Sur mon espace en ligne, ça indique "dossier en cours de traitement" mais rien ne bouge.

J''ai déjà envoyé 2 emails à la CAF mais pas de réponse. J''ai essayé d''appeler mais impossible de tomber sur quelqu''un après 45 minutes d''attente...

Mon propriétaire commence à s''impatienter pour le loyer. Est-ce que quelqu''un a déjà eu ce problème ? Comment avez-vous fait pour débloquer la situation ?

Merci d''avance pour votre aide 🙏',
 'administratif', 'marie.dubois@example.com', 'Marie D.', 8, 345, true, false,
 '["CAF","délai","aide"]'::jsonb,
 '2025-12-23T19:21:56.717000'::timestamptz, '2025-12-24T14:10:58.993000'::timestamptz)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  content = EXCLUDED.content,
  updated_date = EXCLUDED.updated_date;

-- Note: Pour importer toutes les données CSV, vous devriez utiliser un script Python ou Node.js
-- car il y a trop de données à formater manuellement en SQL

