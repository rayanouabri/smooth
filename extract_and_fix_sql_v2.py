#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extrait TOUT le SQL du fichier DIAGNOSTIC_GEMINI.md, corrige les erreurs et divise en lots
Version améliorée qui détecte mieux tous les cours
"""

import re
from pathlib import Path

def extract_all_sql(file_path):
    """Extrait TOUT le SQL du fichier : blocs ```sql``` + SQL après les blocs"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Méthode 1 : Trouver le premier INSERT INTO courses
    first_insert = re.search(r'INSERT\s+INTO\s+courses', content, re.IGNORECASE)
    if not first_insert:
        return None
    
    # Prendre tout depuis le premier INSERT jusqu'à la fin du fichier
    # Mais on doit s'arrêter avant les lignes qui ne sont plus du SQL
    sql_start = first_insert.start()
    
    # Chercher où se termine vraiment le SQL
    # On va chercher la dernière ligne qui contient "ON CONFLICT" ou "INSERT INTO"
    sql_end = len(content)
    
    # Chercher toutes les occurrences de INSERT INTO pour trouver la fin
    all_inserts = list(re.finditer(r'INSERT\s+INTO\s+(courses|lessons)', content, re.IGNORECASE))
    if all_inserts:
        # Prendre jusqu'à 1000 caractères après le dernier INSERT
        last_insert = all_inserts[-1]
        # Chercher la fin de cette dernière instruction (chercher le prochain "```" ou fin de ligne vide significative)
        search_end = min(last_insert.end() + 50000, len(content))  # Chercher jusqu'à 50000 chars après
        remaining = content[last_insert.end():search_end]
        
        # Trouver la fin de la dernière instruction SQL (chercher le dernier "ON CONFLICT" ou ");")
        last_statement = re.search(r'ON\s+CONFLICT.*?\)\s*;', remaining, re.DOTALL)
        if last_statement:
            sql_end = last_insert.end() + last_statement.end()
        else:
            # Sinon, chercher le dernier ");" qui termine une instruction
            last_semicolon = remaining.rfind(');')
            if last_semicolon > 0:
                sql_end = last_insert.end() + last_semicolon + 2
    
    sql_content = content[sql_start:sql_end].strip()
    
    # Nettoyer : enlever les lignes qui ne sont pas du SQL (comme "liaison" à la ligne 45166)
    lines = sql_content.split('\n')
    cleaned_lines = []
    for line in lines:
        # Garder les lignes qui sont du SQL valide
        if (line.strip().startswith('--') or 
            'INSERT INTO' in line.upper() or 
            line.strip().startswith('(') or
            line.strip().startswith(')') or
            'ON CONFLICT' in line.upper() or
            line.strip() == '' or
            any(char in line for char in ["'", '"', '::jsonb', 'VALUES', 'NULL'])):
            cleaned_lines.append(line)
    
    sql_content = '\n'.join(cleaned_lines)
    
    print(f"OK: SQL extrait depuis la position {sql_start} jusqu'a {sql_end}")
    return sql_content

def split_sql_into_batches(sql_content, courses_per_batch=5):
    """Divise le SQL en lots de cours en détectant mieux les cours"""
    
    # Méthode : Trouver tous les INSERT INTO courses et regrouper avec leurs leçons
    # On cherche le pattern : -- COURS X suivi de INSERT INTO courses et toutes les leçons jusqu'au prochain -- COURS
    
    # Trouver toutes les positions de -- COURS
    cours_positions = []
    for match in re.finditer(r'--\s*COURS\s+\d+', sql_content, re.IGNORECASE):
        cours_positions.append(match.start())
    
    # Si pas de -- COURS, utiliser INSERT INTO courses
    if not cours_positions:
        course_inserts = list(re.finditer(r'INSERT\s+INTO\s+courses\s*\(', sql_content, re.IGNORECASE))
        if not course_inserts:
            print("ERREUR: Aucun cours trouve")
            return []
        
        courses = []
        for i, match in enumerate(course_inserts):
            start_pos = match.start()
            if i < len(course_inserts) - 1:
                end_pos = course_inserts[i + 1].start()
            else:
                end_pos = len(sql_content)
            course_block = sql_content[start_pos:end_pos].strip()
            if course_block:
                courses.append(course_block)
        
        print(f"OK: {len(courses)} cours trouves (methode INSERT INTO)")
        return create_batch_files(courses, courses_per_batch)
    
    # Méthode avec -- COURS
    courses = []
    for i, cours_pos in enumerate(cours_positions):
        # Début : position du -- COURS
        start_pos = cours_pos
        
        # Fin : position du prochain -- COURS ou fin du fichier
        if i < len(cours_positions) - 1:
            end_pos = cours_positions[i + 1]
        else:
            end_pos = len(sql_content)
        
        # Extraire le bloc
        course_block = sql_content[start_pos:end_pos].strip()
        if course_block:
            courses.append(course_block)
    
    print(f"OK: {len(courses)} cours trouves (methode -- COURS)")
    return create_batch_files(courses, courses_per_batch)

def create_batch_files(courses, courses_per_batch):
    """Crée les fichiers de lots"""
    batches_dir = Path("batches_fixed")
    batches_dir.mkdir(exist_ok=True)
    
    batches = []
    batch_num = 1
    
    for i in range(0, len(courses), courses_per_batch):
        batch = courses[i:i+courses_per_batch]
        
        batch_content = f"""-- ==========================================
-- LOT {batch_num} : Cours {i+1} à {min(i+courses_per_batch, len(courses))}
-- ==========================================
-- Fichier corrigé et prêt pour Supabase SQL Editor
-- Total de cours dans ce lot : {len(batch)}
-- ==========================================

"""
        
        for j, course in enumerate(batch):
            batch_content += f"-- --- Cours {i+j+1} ---\n\n"
            batch_content += course.strip()
            batch_content += "\n\n"
        
        output_file = batches_dir / f"lot_{batch_num:02d}_cours_{i+1}_a_{min(i+courses_per_batch, len(courses))}.sql"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(batch_content)
        
        batches.append(output_file)
        file_size = len(batch_content.encode('utf-8'))
        print(f"OK: Cree {output_file.name} ({file_size:,} octets, {len(batch_content.splitlines())} lignes)")
        batch_num += 1
    
    return batches

def main():
    import sys
    import io
    
    if sys.platform == 'win32':
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    
    print("Extraction du SQL depuis DIAGNOSTIC_GEMINI.md...")
    sql_content = extract_all_sql("DIAGNOSTIC_GEMINI.md")
    
    if not sql_content:
        print("ERREUR: Aucun SQL trouve dans le fichier")
        return
    
    print(f"OK: SQL extrait : {len(sql_content):,} caracteres, {len(sql_content.splitlines()):,} lignes")
    
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

