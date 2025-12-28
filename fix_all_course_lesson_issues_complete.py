#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige tous les problèmes de course_id et d'UUIDs dupliqués dans tous les fichiers SQL
1. Mappe correctement les numéros de cours aux IDs de cours
2. Corrige les course_id dans les leçons pour qu'ils correspondent au bon cours
3. Détecte et corrige les UUIDs dupliqués entre cours dans le même fichier
"""

import re
import uuid
from pathlib import Path
from collections import OrderedDict

def fix_file_complete(file_path):
    """Corrige tous les problèmes dans un fichier SQL"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    fixed_lines = []
    
    # Mapping: numéro de cours -> course_id
    course_num_to_id = OrderedDict()
    # IDs de cours déjà utilisés (pour détecter les doublons)
    used_course_ids = set()
    # Mapping des IDs dupliqués vers nouveaux IDs
    duplicate_replacements = {}
    
    current_course_num = None
    current_course_id = None
    current_lessons_course_num = None
    in_lessons_section = False
    
    changes = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Trouver "-- COURS X"
        course_header = re.search(r'--\s*COURS\s+(\d+)\s*:', line, re.IGNORECASE)
        if course_header:
            current_course_num = int(course_header.group(1))
            in_lessons_section = False
            fixed_lines.append(line)
            i += 1
            continue
        
        # Trouver l'INSERT INTO courses et son ID
        if current_course_num:
            course_insert_match = re.search(
                r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'",
                line,
                re.IGNORECASE
            )
            if course_insert_match:
                found_course_id = course_insert_match.group(1)
                
                # Vérifier si cet ID est déjà utilisé (doublon)
                if found_course_id in used_course_ids:
                    # Générer un nouvel UUID unique
                    new_course_id = str(uuid.uuid4())
                    duplicate_replacements[found_course_id] = new_course_id
                    # Remplacer dans la ligne
                    line = line.replace(f"'{found_course_id}'", f"'{new_course_id}'", 1)
                    changes.append(('duplicate_course_id', current_course_num, found_course_id, new_course_id))
                    found_course_id = new_course_id
                
                used_course_ids.add(found_course_id)
                course_num_to_id[current_course_num] = found_course_id
                current_course_id = found_course_id
                fixed_lines.append(line)
                i += 1
                continue
        
        # Trouver "-- LEÇONS pour COURS X"
        lessons_header = re.search(r'--\s*LEÇONS?\s+(?:pour|POUR)\s+COURS\s+(\d+)', line, re.IGNORECASE)
        if lessons_header:
            current_lessons_course_num = int(lessons_header.group(1))
            in_lessons_section = True
            # Trouver le course_id correspondant
            if current_lessons_course_num in course_num_to_id:
                current_course_id = course_num_to_id[current_lessons_course_num]
            fixed_lines.append(line)
            i += 1
            continue
        
        # Dans une section de leçons, corriger les course_id
        if in_lessons_section and current_course_id:
            # Pattern: 'lesson_id', 'course_id', ...
            lesson_match = re.search(
                r"(\s+)'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'\s*,\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'",
                line
            )
            if lesson_match:
                lesson_id = lesson_match.group(2)
                old_course_id = lesson_match.group(3)
                
                # Appliquer les remplacements de doublons si nécessaire
                corrected_course_id = duplicate_replacements.get(old_course_id, old_course_id)
                if corrected_course_id != old_course_id:
                    line = line.replace(f"'{old_course_id}'", f"'{corrected_course_id}'", 1)
                    old_course_id = corrected_course_id
                    changes.append(('duplicate_in_lesson', current_lessons_course_num, old_course_id, corrected_course_id))
                
                # Corriger si le course_id ne correspond pas au cours actuel
                if old_course_id != current_course_id:
                    line = line.replace(f"'{old_course_id}'", f"'{current_course_id}'", 1)
                    changes.append(('wrong_course_id', current_lessons_course_num, lesson_id, old_course_id, current_course_id))
        
        fixed_lines.append(line)
        i += 1
    
    return '\n'.join(fixed_lines), changes

# Traiter tous les fichiers
batches_dir = Path("batches_fixed")
sql_files = sorted(list(batches_dir.glob("lot_*.sql")))

print("=" * 80)
print("CORRECTION COMPLETE DES COURS ET LESSONS")
print("=" * 80)

total_changes = 0
files_with_changes = 0

for sql_file in sql_files:
    print(f"\n[FICHIER] {sql_file.name}")
    print("-" * 80)
    
    fixed_content, changes = fix_file_complete(sql_file)
    
    if changes:
        with open(sql_file, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"  Corrections: {len(changes)}")
        for change in changes[:10]:  # Afficher max 10
            if change[0] == 'duplicate_course_id':
                _, course_num, old_id, new_id = change
                print(f"    Cours {course_num}: UUID duplique remplace {old_id[:20]}... -> {new_id[:20]}...")
            elif change[0] == 'wrong_course_id':
                _, course_num, lesson_id, old_id, new_id = change
                print(f"    Cours {course_num}: course_id corrige {old_id[:20]}... -> {new_id[:20]}...")
        if len(changes) > 10:
            print(f"    ... et {len(changes) - 10} autre(s)")
        total_changes += len(changes)
        files_with_changes += 1
    else:
        print(f"  [OK] Aucune correction necessaire")

print("\n" + "=" * 80)
print(f"TOTAL: {total_changes} correction(s) dans {files_with_changes} fichier(s)")
print("=" * 80)

