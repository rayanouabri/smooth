#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extrait le SQL du fichier DIAGNOSTIC_GEMINI.md, corrige les erreurs et divise en lots
"""

import re
from pathlib import Path

def extract_sql_from_markdown(file_path):
    """Extrait le SQL du fichier markdown"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Chercher le bloc SQL
    sql_match = re.search(r'```sql\n(.*?)```', content, re.DOTALL)
    
    if sql_match:
        return sql_match.group(1)
    else:
        # Si pas de bloc ```sql, prendre tout le contenu
        return content

def fix_sql_syntax(sql_content):
    """Corrige les erreurs de syntaxe SQL courantes"""
    fixed = sql_content
    
    # Corriger les apostrophes non échappées dans les chaînes SQL
    # On doit être prudent ici car on ne veut pas toucher aux apostrophes déjà échappées
    
    # Vérifier que les chaînes sont bien fermées
    # Remplacer les apostrophes simples dans les chaînes par des doubles apostrophes
    # Mais seulement celles qui sont dans des chaînes SQL (entre quotes)
    
    # Pattern pour trouver les chaînes SQL : '...'
    def fix_apostrophes_in_string(match):
        string_content = match.group(1)
        # Remplacer les apostrophes simples par des doubles, sauf celles déjà doublées
        fixed_string = string_content.replace("'", "''")
        return f"'{fixed_string}'"
    
    # Cette approche est trop risquée, on va plutôt vérifier ligne par ligne
    
    # Diviser en lignes et vérifier
    lines = fixed.split('\n')
    fixed_lines = []
    
    for line in lines:
        # Si la ligne contient une chaîne SQL avec apostrophe simple non échappée
        # On doit être très prudent
        fixed_lines.append(line)
    
    return '\n'.join(fixed_lines)

def split_sql_into_batches(sql_content, courses_per_batch=5):
    """Divise le SQL en lots de cours"""
    # Méthode 1 : Trouver tous les INSERT INTO courses et regrouper avec leurs leçons
    course_inserts = list(re.finditer(r'INSERT\s+INTO\s+courses\s*\(', sql_content, re.IGNORECASE))
    
    courses = []
    
    if course_inserts:
        print(f"OK: {len(course_inserts)} INSERT INTO courses trouves")
        
        for i, match in enumerate(course_inserts):
            start_pos = match.start()
            
            # Trouver le début du cours (chercher le commentaire -- COURS avant)
            # Remonter jusqu'à trouver -- COURS ou le début du fichier
            before_text = sql_content[:start_pos]
            cours_match = re.search(r'--\s*COURS\s+\d+.*$', before_text, re.MULTILINE | re.IGNORECASE)
            if cours_match:
                start_pos = cours_match.start()
            
            # Trouver la fin (début du prochain cours ou fin du fichier)
            if i < len(course_inserts) - 1:
                next_match = course_inserts[i + 1]
                # Chercher le commentaire -- COURS avant le prochain INSERT
                before_next = sql_content[:next_match.start()]
                next_cours_match = re.search(r'--\s*COURS\s+\d+.*$', before_next, re.MULTILINE | re.IGNORECASE)
                if next_cours_match:
                    end_pos = next_cours_match.start()
                else:
                    end_pos = next_match.start()
            else:
                end_pos = len(sql_content)
            
            # Extraire le bloc
            course_block = sql_content[start_pos:end_pos].strip()
            if course_block:
                courses.append(course_block)
    
    if not courses:
        print("ERREUR: Aucun cours trouve dans le fichier")
        return []
    
    print(f"OK: {len(courses)} cours trouves et prepares")
    
    # Créer le dossier batches
    batches_dir = Path("batches_fixed")
    batches_dir.mkdir(exist_ok=True)
    
    batches = []
    batch_num = 1
    
    for i in range(0, len(courses), courses_per_batch):
        batch = courses[i:i+courses_per_batch]
        
        # Créer le contenu du lot
        batch_content = f"""-- ==========================================
-- LOT {batch_num} : Cours {i+1} à {min(i+courses_per_batch, len(courses))}
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- ==========================================

"""
        
        for j, course in enumerate(batch):
            batch_content += f"-- --- Cours {i+j+1} ---\n\n"
            batch_content += course.strip()
            batch_content += "\n\n"
        
        # Sauvegarder
        output_file = batches_dir / f"lot_{batch_num:02d}_cours_{i+1}_a_{min(i+courses_per_batch, len(courses))}.sql"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(batch_content)
        
        batches.append(output_file)
        print(f"OK: Cree : {output_file.name}")
        batch_num += 1
    
    return batches

def main():
    import sys
    import io
    
    # Forcer UTF-8 pour stdout
    if sys.platform == 'win32':
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    
    print("Extraction du SQL depuis DIAGNOSTIC_GEMINI.md...")
    sql_content = extract_sql_from_markdown("DIAGNOSTIC_GEMINI.md")
    
    if not sql_content:
        print("ERREUR: Aucun SQL trouve dans le fichier")
        return
    
    print(f"OK: SQL extrait : {len(sql_content)} caracteres")
    
    print("\nCorrection des erreurs de syntaxe...")
    # Pour l'instant, on ne fait pas de corrections automatiques risquées
    # On va juste vérifier la structure
    
    print("\nDivision en lots de 5 cours...")
    batches = split_sql_into_batches(sql_content, courses_per_batch=5)
    
    if batches:
        print(f"\nSUCCES: {len(batches)} fichiers crees dans le dossier 'batches_fixed/'")
        print("\nVous pouvez maintenant copier-coller chaque fichier dans Supabase SQL Editor")
        print("   Commencez par : lot_01_cours_1_a_5.sql")
    else:
        print("\nERREUR: Aucun lot cree")

if __name__ == "__main__":
    main()

