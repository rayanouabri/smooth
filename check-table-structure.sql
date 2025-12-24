-- Script pour vérifier la structure de la table lessons
-- Exécutez ceci dans Supabase SQL Editor pour voir les colonnes

SELECT 
    column_name, 
    data_type, 
    is_nullable,
    column_default
FROM information_schema.columns
WHERE table_name = 'lessons'
ORDER BY ordinal_position;

