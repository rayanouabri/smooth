#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige automatiquement tous les course_id incorrects dans les lessons
en se basant sur les commentaires "-- COURS X" et "-- LEÇONS pour COURS X"
"""

import re
from pathlib import Path
from collections import OrderedDict

def fix_course_lesson_ids_in_file(file_path):
    """Corrige les course_id dans un fichier SQL"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    fixed_lines = []
    
    # Mapping: numéro de cours -> course_id
    course_num_to_id = {}
    # Mapping: numéro de cours actuel dans les leçons
    current_lessons_course_num = None
    current_course_id = None
    
    changes = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Chercher "-- COURS X" ou "-- COURSE X"
        course_match = re.search(r'--\s*COURS\s+(\d+)\s*:', line, re.IGNORECASE)
        if course_match:
            course_num = int(course_match.group(1))
            # Chercher l'INSERT INTO courses suivant dans les prochaines lignes
            for j in range(i, min(i+50, len(lines))):
                course_id_match = re.search(
                    r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'",
                    lines[j],
                    re.IGNORECASE
                )
                if course_id_match:
                    course_id = course_id_match.group(1)
                    course_num_to_id[course_num] = course_id
                    current_course_id = course_id
                    break
            fixed_lines.append(line)
            i += 1
            continue
        
        # Chercher "-- LEÇONS pour COURS X" ou "-- LEÇONS POUR COURS X"
        lessons_match = re.search(r'--\s*LEÇONS?\s+(?:pour|POUR)\s+COURS\s+(\d+)', line, re.IGNORECASE)
        if lessons_match:
            course_num = int(lessons_match.group(1))
            current_lessons_course_num = course_num
            if course_num in course_num_to_id:
                current_course_id = course_num_to_id[course_num]
            fixed_lines.append(line)
            i += 1
            continue
        
        # Si on est dans une section de leçons, corriger les course_id
        if current_lessons_course_num and current_course_id:
            # Chercher INSERT INTO lessons avec un course_id
            lesson_match = re.search(
                r"(INSERT INTO lessons[^)]*\([^)]*\)\s+VALUES\s*\(\s*')([^']+)('\s*,\s*')([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})(')",
                line
            )
            if lesson_match:
                lesson_id = lesson_match.group(2)
                old_course_id = lesson_match.group(4)
                # Si le course_id est incorrect, le remplacer
                if old_course_id != current_course_id:
                    new_line = (
                        lesson_match.group(1) + lesson_match.group(2) + 
                        lesson_match.group(3) + current_course_id + 
                        lesson_match.group(5)
                    )
                    # Remplacer aussi le reste de la ligne si nécessaire
                    rest_of_line = line[lesson_match.end():]
                    fixed_lines.append(new_line + rest_of_line)
                    changes.append((current_lessons_course_num, lesson_id, old_course_id, current_course_id))
                    i += 1
                    continue
        
        fixed_lines.append(line)
        i += 1
    
    return '\n'.join(fixed_lines), changes

# Traiter tous les fichiers
batches_dir = Path("batches_fixed")
sql_files = sorted(list(batches_dir.glob("lot_*.sql")))

print("=" * 80)
print("CORRECTION DES COURSE_ID DANS LES LESSONS")
print("=" * 80)

total_changes = 0

for sql_file in sql_files:
    print(f"\n[FICHIER] {sql_file.name}")
    print("-" * 80)
    
    fixed_content, changes = fix_course_lesson_ids_in_file(sql_file)
    
    if changes:
        with open(sql_file, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"  Corrige: {len(changes)} lecon(s)")
        for course_num, lesson_id, old_id, new_id in changes[:5]:  # Afficher max 5
            print(f"    Cours {course_num}: {old_id[:8]}... -> {new_id[:8]}...")
        if len(changes) > 5:
            print(f"    ... et {len(changes) - 5} autre(s)")
        total_changes += len(changes)
    else:
        print(f"  [OK] Aucune correction necessaire")

print("\n" + "=" * 80)
print(f"TOTAL: {total_changes} correction(s) dans {len(sql_files)} fichier(s)")
print("=" * 80)

