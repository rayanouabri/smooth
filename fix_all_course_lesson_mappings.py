#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige TOUS les course_id dans les leçons pour qu'ils correspondent aux bons cours
"""

import re
import uuid
from pathlib import Path
from collections import OrderedDict

def fix_file_mappings(file_path):
    """Corrige les course_id dans les leçons"""
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    fixed_lines = []
    
    # Mapping: numéro de cours -> course_id
    course_num_to_id = OrderedDict()
    
    current_course_num = None
    current_lessons_course_num = None
    in_lessons_section = False
    
    changes = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        original_line = line
        
        # Trouver "-- COURS X"
        course_header = re.search(r'--\s*COURS\s+(\d+)', line, re.IGNORECASE)
        if course_header:
            current_course_num = int(course_header.group(1))
            in_lessons_section = False
            fixed_lines.append(line)
            i += 1
            continue
        
        # Trouver l'INSERT INTO courses et extraire l'ID
        if current_course_num is not None:
            # Chercher dans les prochaines lignes jusqu'à trouver l'UUID
            if re.search(r'INSERT INTO courses', line, re.IGNORECASE):
                # L'UUID est dans les lignes suivantes (ligne suivante ou après)
                for j in range(i, min(i+10, len(lines))):
                    uuid_match = re.search(
                        r"'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'",
                        lines[j]
                    )
                    if uuid_match:
                        found_course_id = uuid_match.group(1)
                        course_num_to_id[current_course_num] = found_course_id
                        break
                fixed_lines.append(line)
                i += 1
                continue
        
        # Trouver "-- LEÇONS pour COURS X"
        lessons_header = re.search(r'--\s*LEÇONS?\s+(?:pour|POUR)\s+COURS\s+(\d+)', line, re.IGNORECASE)
        if lessons_header:
            current_lessons_course_num = int(lessons_header.group(1))
            in_lessons_section = True
            fixed_lines.append(line)
            i += 1
            continue
        
        # Dans une section de leçons, corriger les course_id
        if in_lessons_section and current_lessons_course_num in course_num_to_id:
            correct_course_id = course_num_to_id[current_lessons_course_num]
            
            # Chercher les lignes avec pattern: 'lesson_id', 'course_id',
            lesson_match = re.match(
                r"^(\s+)'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'\s*,\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'",
                line
            )
            if lesson_match:
                lesson_id = lesson_match.group(2)
                old_course_id = lesson_match.group(3)
                
                # Si le course_id ne correspond pas au cours actuel, le corriger
                if old_course_id != correct_course_id:
                    # Remplacer le course_id (seulement la 2ème occurrence d'UUID dans la ligne)
                    parts = line.split("'")
                    # parts[0] = espaces, parts[1] = lesson_id, parts[2] = , , parts[3] = course_id
                    if len(parts) >= 4:
                        parts[3] = correct_course_id
                        line = "'".join(parts)
                        changes.append((current_lessons_course_num, lesson_id, old_course_id, correct_course_id))
        
        fixed_lines.append(line)
        i += 1
    
    return ''.join(fixed_lines), changes

# Traiter tous les fichiers
batches_dir = Path("batches_fixed")
sql_files = sorted(list(batches_dir.glob("lot_*.sql")))

print("=" * 80)
print("CORRECTION DES COURSE_ID DANS LES LESSONS")
print("=" * 80)

total_changes = 0
files_with_changes = 0

for sql_file in sql_files:
    print(f"\n[FICHIER] {sql_file.name}")
    print("-" * 80)
    
    fixed_content, changes = fix_file_mappings(sql_file)
    
    if changes:
        with open(sql_file, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        
        print(f"  Corrections: {len(changes)}")
        for course_num, lesson_id, old_id, new_id in changes[:5]:
            print(f"    Cours {course_num}: course_id corrige {old_id[:20]}... -> {new_id[:20]}...")
        if len(changes) > 5:
            print(f"    ... et {len(changes) - 5} autre(s)")
        total_changes += len(changes)
        files_with_changes += 1
    else:
        print(f"  [OK] Aucune correction necessaire")

print("\n" + "=" * 80)
print(f"TOTAL: {total_changes} correction(s) dans {files_with_changes} fichier(s)")
print("=" * 80)

