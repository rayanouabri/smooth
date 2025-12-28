#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige manuellement le lot 5 avec les bons mappings
"""

import re
import uuid
from pathlib import Path

file_path = Path("batches_fixed/lot_05_cours_21_a_25.sql")

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Mappings corrects:
# COURS 22: 'f656f10e-25f0-4c3a-afa2-5d2dd6b8ec7f' (déjà bon)
# COURS 23: 'a1b2c3d4-e5f6-4789-a0b1-c2d3e4f5a6b7' (déjà changé)
# COURS 24: 'b2c3d4e5-f6a7-4890-b1c2-d3e4f5a6b7c8' (déjà changé)
# COURS 25: 'c3d4e5f6-a7b8-4901-c2d3-e4f5a6b7c8d9' (déjà changé)
# COURS 26: '4a5b6c7d-8e9f-4102-a3b4-c5d6e7f8a9b0' (déjà bon)

course_mappings = {
    22: 'f656f10e-25f0-4c3a-afa2-5d2dd6b8ec7f',
    23: 'a1b2c3d4-e5f6-4789-a0b1-c2d3e4f5a6b7',
    24: 'b2c3d4e5-f6a7-4890-b1c2-d3e4f5a6b7c8',
    25: 'c3d4e5f6-a7b8-4901-c2d3-e4f5a6b7c8d9',
    26: '4a5b6c7d-8e9f-4102-a3b4-c5d6e7f8a9b0',
}

lines = content.split('\n')
fixed_lines = []
current_lessons_course_num = None
changes = []

i = 0
while i < len(lines):
    line = lines[i]
    
    # Trouver "-- LEÇONS pour COURS X"
    lessons_match = re.search(r'--\s*LEÇONS?\s+(?:pour|POUR)\s+COURS\s+(\d+)', line, re.IGNORECASE)
    if lessons_match:
        current_lessons_course_num = int(lessons_match.group(1))
        fixed_lines.append(line)
        i += 1
        continue
    
    # Si on est dans une section de leçons, corriger les course_id
    if current_lessons_course_num and current_lessons_course_num in course_mappings:
        correct_course_id = course_mappings[current_lessons_course_num]
        
        # Chercher les lignes avec 'lesson_id', 'course_id',
        lesson_line_match = re.match(
            r"^(\s+)'([0-9a-fA-F-]{36})'\s*,\s*'([0-9a-fA-F-]{36})'",
            line
        )
        if lesson_line_match:
            lesson_id = lesson_line_match.group(2)
            old_course_id = lesson_line_match.group(3)
            
            if old_course_id != correct_course_id:
                # Remplacer le course_id
                new_line = line.replace(f"'{old_course_id}'", f"'{correct_course_id}'", 1)
                fixed_lines.append(new_line)
                changes.append((current_lessons_course_num, lesson_id, old_course_id, correct_course_id))
                i += 1
                continue
    
    fixed_lines.append(line)
    i += 1

if changes:
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(fixed_lines))
    
    print(f"Corrections effectuees: {len(changes)}")
    for course_num, lesson_id, old_id, new_id in changes:
        print(f"  Cours {course_num}: {old_id[:20]}... -> {new_id[:20]}...")
else:
    print("Aucune correction necessaire")

