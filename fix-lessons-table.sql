-- Script pour corriger/ajouter la colonne "order" si elle n'existe pas
-- Exécutez ceci AVANT seed-complete-data.sql

-- Vérifier si la colonne existe, sinon l'ajouter
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'lessons' 
        AND column_name = 'order'
    ) THEN
        ALTER TABLE lessons ADD COLUMN "order" INTEGER DEFAULT 0;
        RAISE NOTICE 'Colonne "order" ajoutee a la table lessons';
    ELSE
        RAISE NOTICE 'Colonne "order" existe deja';
    END IF;
END $$;

-- Vérifier la structure finale
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'lessons' 
ORDER BY ordinal_position;

