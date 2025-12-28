#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script pour diviser automatiquement un gros fichier SQL en plusieurs petits lots
Usage: python split_sql_file.py input.sql [--batch-size=5] [--output-dir=batches]
"""

import re
import os
import sys
from pathlib import Path

def split_sql_file(input_file, output_dir="batches", courses_per_batch=5):
    """
    Divise un gros fichier SQL en plusieurs petits fichiers
    Chaque fichier contient X cours avec toutes leurs leçons
    """
    
    print(f"📂 Lecture du fichier : {input_file}")
    
    # Lire le fichier
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"❌ Erreur : Fichier '{input_file}' non trouvé")
        return
    except Exception as e:
        print(f"❌ Erreur lors de la lecture : {e}")
        return
    
    print(f"✅ Fichier lu : {len(content)} caractères, {len(content.splitlines())} lignes")
    
    # Créer le dossier de sortie
    output_path = Path(output_dir)
    output_path.mkdir(exist_ok=True)
    print(f"📁 Dossier de sortie : {output_path.absolute()}")
    
    # Trouver tous les cours
    # Pattern 1 : -- COURS X ou -- COURS X :
    course_pattern = r'--\s*COURS\s+\d+.*?(?=--\s*COURS\s+\d+|$)'
    
    # Pattern alternatif : juste INSERT INTO courses suivi des leçons
    # On cherche les blocs : INSERT INTO courses ... jusqu'au prochain INSERT INTO courses
    courses = []
    
    # Méthode 1 : Chercher avec les commentaires
    if re.search(course_pattern, content, re.DOTALL | re.IGNORECASE):
        courses = re.findall(course_pattern, content, re.DOTALL | re.IGNORECASE)
        print(f"📚 Méthode 1 : {len(courses)} cours trouvés avec commentaires '-- COURS'")
    else:
        # Méthode 2 : Diviser par INSERT INTO courses
        # On va chercher chaque INSERT INTO courses et regrouper avec ses leçons
        
        # Trouver toutes les positions de "INSERT INTO courses"
        course_inserts = list(re.finditer(r'INSERT\s+INTO\s+courses\s*\(', content, re.IGNORECASE))
        
        if course_inserts:
            print(f"📚 Méthode 2 : {len(course_inserts)} cours trouvés via INSERT INTO courses")
            
            for i, match in enumerate(course_inserts):
                start_pos = match.start()
                
                # Trouver la fin de ce cours (début du prochain cours ou fin du fichier)
                if i < len(course_inserts) - 1:
                    end_pos = course_inserts[i + 1].start()
                else:
                    end_pos = len(content)
                
                # Extraire le bloc (cours + toutes ses leçons)
                course_block = content[start_pos:end_pos].strip()
                
                # Vérifier qu'on a bien le cours et ses leçons
                if 'INSERT INTO courses' in course_block and 'INSERT INTO lessons' in course_block:
                    courses.append(course_block)
        else:
            print("❌ Aucun cours trouvé dans le fichier")
            print("💡 Vérifiez que le fichier contient bien des INSERT INTO courses")
            return
    
    if not courses:
        print("❌ Aucun cours trouvé dans le fichier")
        return
    
    print(f"\n🔄 Division en lots de {courses_per_batch} cours...")
    
    # Diviser en lots
    total_courses = len(courses)
    batch_num = 1
    
    for i in range(0, total_courses, courses_per_batch):
        batch = courses[i:i+courses_per_batch]
        output_file = output_path / f"lot_{batch_num:02d}_cours_{i+1}_a_{min(i+courses_per_batch, total_courses)}.sql"
        
        # Créer le contenu du lot avec en-tête
        batch_content = f"""-- ==========================================
-- LOT {batch_num} : Cours {i+1} à {min(i+courses_per_batch, total_courses)}
-- ==========================================
-- Total de cours dans ce lot : {len(batch)}
-- Généré automatiquement par split_sql_file.py
-- ==========================================

"""
        
        # Ajouter chaque cours avec une ligne de séparation
        for j, course in enumerate(batch):
            batch_content += f"-- --- Cours {i+j+1} ---\n\n"
            batch_content += course.strip()
            batch_content += "\n\n"
        
        # Écrire le fichier
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(batch_content)
        
        file_size = os.path.getsize(output_file)
        print(f"✅ Créé : {output_file.name} ({file_size:,} octets, {len(batch_content.splitlines())} lignes)")
        batch_num += 1
    
    print(f"\n🎉 {total_courses} cours divisés en {batch_num-1} fichiers")
    print(f"📁 Tous les fichiers sont dans : {output_path.absolute()}")
    print(f"\n💡 Prochaine étape : Exécutez chaque fichier dans Supabase SQL Editor, un par un")
    print(f"   Commencez par : lot_01_cours_1_a_{min(courses_per_batch, total_courses)}.sql")

def main():
    """Point d'entrée principal"""
    
    if len(sys.argv) < 2:
        print("""
📚 Script de division de fichier SQL

Usage:
    python split_sql_file.py <fichier.sql> [options]

Options:
    --batch-size=N    Nombre de cours par lot (défaut: 5)
    --output-dir=DIR  Dossier de sortie (défaut: batches)

Exemples:
    python split_sql_file.py cours_complet.sql
    python split_sql_file.py cours_complet.sql --batch-size=3
    python split_sql_file.py cours_complet.sql --batch-size=10 --output-dir=sql_lots
        """)
        sys.exit(1)
    
    input_file = sys.argv[1]
    batch_size = 5
    output_dir = "batches"
    
    # Parser les arguments
    for arg in sys.argv[2:]:
        if arg.startswith('--batch-size='):
            try:
                batch_size = int(arg.split('=')[1])
            except ValueError:
                print(f"❌ Erreur : --batch-size doit être un nombre")
                sys.exit(1)
        elif arg.startswith('--output-dir='):
            output_dir = arg.split('=')[1]
    
    split_sql_file(input_file, output_dir, batch_size)

if __name__ == "__main__":
    main()

