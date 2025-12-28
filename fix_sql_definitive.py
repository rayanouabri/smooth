#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Correction définitive : réécrit complètement les INSERT depuis le fichier source
"""

import re
from pathlib import Path

def extract_all_sql(file_path):
    """Extrait TOUT le SQL du fichier source"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Trouver le premier INSERT INTO courses
    first_insert = re.search(r'INSERT\s+INTO\s+courses', content, re.IGNORECASE)
    if not first_insert:
        return None
    
    sql_start = first_insert.start()
    
    # Trouver la fin du SQL (chercher le dernier ON CONFLICT ou la dernière instruction complète)
    # Chercher toutes les occurrences de INSERT INTO courses pour trouver la fin
    all_inserts = list(re.finditer(r'INSERT\s+INTO\s+(courses|lessons)', content, re.IGNORECASE))
    if not all_inserts:
        return None
    
    # Prendre jusqu'à 1000 caractères après le dernier INSERT pour capturer toute la dernière instruction
    last_insert = all_inserts[-1]
    search_end = min(last_insert.end() + 50000, len(content))
    remaining = content[last_insert.end():search_end]
    
    # Trouver la fin de la dernière instruction SQL
    last_statement = re.search(r'\)\s*ON\s+CONFLICT.*?\)\s*;', remaining, re.DOTALL)
    if last_statement:
        sql_end = last_insert.end() + last_statement.end()
    else:
        # Sinon, chercher le dernier ");" qui termine une instruction
        last_semicolon = remaining.rfind(');')
        if last_semicolon > 0:
            sql_end = last_insert.end() + last_semicolon + 2
        else:
            sql_end = len(content)
    
    sql_content = content[sql_start:sql_end].strip()
    
    # Nettoyer les lignes non-SQL
    lines = sql_content.split('\n')
    cleaned_lines = []
    for line in lines:
        line_stripped = line.strip()
        # Garder les lignes SQL valides
        if (line_stripped.startswith('--') or 
            'INSERT INTO' in line_stripped.upper() or
            line_stripped.startswith('(') or
            line_stripped.startswith(')') or
            'ON CONFLICT' in line_stripped.upper() or
            line_stripped == '' or
            any(char in line for char in ["'", '"', '::jsonb', 'VALUES', 'NULL', 'TRUE', 'FALSE']) or
            re.match(r'^\s*\d+\.?\d*\s*$', line_stripped) or  # nombres
            re.match(r'^\s*\d+\s*,\s*$', line_stripped)):     # nombres suivis de virgule
            cleaned_lines.append(line)
    
    return '\n'.join(cleaned_lines)

def split_sql_into_batches(sql_content, courses_per_batch=5):
    """Divise le SQL en lots"""
    # Trouver tous les cours avec -- COURS
    cours_positions = []
    for match in re.finditer(r'--\s*COURS\s+\d+', sql_content, re.IGNORECASE):
        cours_positions.append(match.start())
    
    if not cours_positions:
        return []
    
    courses = []
    for i, cours_pos in enumerate(cours_positions):
        start_pos = cours_pos
        if i < len(cours_positions) - 1:
            end_pos = cours_positions[i + 1]
        else:
            end_pos = len(sql_content)
        course_block = sql_content[start_pos:end_pos].strip()
        if course_block:
            courses.append(course_block)
    
    print(f"OK: {len(courses)} cours trouves")
    
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
        print("ERREUR: Aucun SQL trouve")
        return
    
    print(f"OK: SQL extrait : {len(sql_content):,} caracteres, {len(sql_content.splitlines()):,} lignes")
    
    print("\nDivision en lots de 5 cours...")
    batches = split_sql_into_batches(sql_content, courses_per_batch=5)
    
    if batches:
        print(f"\nSUCCES: {len(batches)} fichiers crees")

if __name__ == "__main__":
    main()

