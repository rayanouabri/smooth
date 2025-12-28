#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige spécifiquement le lot 5 où les leçons utilisent leur propre ID comme course_id
"""

import re
from pathlib import Path

file_path = Path("batches_fixed/lot_05_cours_21_a_25.sql")

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

lines = content.split('\n')
fixed_lines = []
course_id_map = {}  # mapping: lesson_id -> course_id
current_course_id = None
current_lesson_section_course_num = None
current_course_num = None

i = 0
changes = []

while i < len(lines):
    line = lines[i]
    
    # Trouver "-- COURS X"
    course_header = re.search(r'--\s*COURS\s+(\d+)\s*:', line, re.IGNORECASE)
    if course_header:
        current_course_num = int(course_header.group(1))
        # Chercher l'INSERT INTO courses suivant
        for j in range(i, min(i+100, len(lines))):
            course_insert = re.search(
                r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F-]{36})'",
                lines[j],
                re.IGNORECASE
            )
            if course_insert:
                current_course_id = course_insert.group(1)
                print(f"  Cours {current_course_num}: ID = {current_course_id}")
                break
        fixed_lines.append(line)
        i += 1
        continue
    
    # Trouver "-- LEÇONS pour COURS X"
    lessons_header = re.search(r'--\s*LEÇONS?\s+(?:pour|POUR)\s+COURS\s+(\d+)', line, re.IGNORECASE)
    if lessons_header:
        current_lesson_section_course_num = int(lessons_header.group(1))
        # Trouver le course_id correspondant
        for course_num, course_id in course_id_map.items():
            if course_num == current_lesson_section_course_num:
                current_course_id = course_id
                break
        fixed_lines.append(line)
        i += 1
        continue
    
    # Si on a un cours actif, enregistrer son ID
    if current_course_num and current_course_id:
        if current_course_num not in course_id_map:
            course_id_map[current_course_num] = current_course_id
    
    # Corriger les INSERT INTO lessons
    if current_course_id and current_lesson_section_course_num:
        # Pattern pour INSERT INTO lessons: (lesson_id, course_id, ...)
        lesson_match = re.match(
            r"(\s+)'([0-9a-fA-F-]{36})',\s*'([0-9a-fA-F-]{36})',",
            line
        )
        if lesson_match:
            indent = lesson_match.group(1)
            lesson_id = lesson_match.group(2)
            old_course_id = lesson_match.group(3)
            
            if old_course_id != current_course_id:
                # Remplacer le course_id
                new_line = re.sub(
                    r"('\s*)([0-9a-fA-F-]{36})(',\s*')([0-9a-fA-F-]{36})(',)",
                    rf"\1{lesson_id}\3{current_course_id}\5",
                    line,
                    count=1
                )
                fixed_lines.append(new_line)
                changes.append((current_lesson_section_course_num, lesson_id, old_course_id, current_course_id))
                i += 1
                continue
    
    fixed_lines.append(line)
    i += 1

if changes:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(fixed_lines))
    
    print(f"\nCorrections effectuees: {len(changes)}")
    for course_num, lesson_id, old_id, new_id in changes:
        print(f"  Cours {course_num}: {old_id[:20]}... -> {new_id[:20]}...")
else:
    print("Aucune correction necessaire")

