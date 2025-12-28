#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Vérifie que tous les course_id dans les leçons correspondent aux IDs des cours dans lot_05
"""

import re
from pathlib import Path

file_path = Path("batches_fixed/lot_05_cours_21_a_25.sql")

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extraire tous les IDs de cours
course_ids = {}
for match in re.finditer(r'--\s*COURS\s+(\d+).*?INSERT INTO courses.*?\(\s*\'([0-9a-fA-F-]{36})\'', content, re.DOTALL):
    course_num = int(match.group(1))
    course_id = match.group(2)
    course_ids[course_num] = course_id
    print(f"COURS {course_num}: {course_id}")

print(f"\n{len(course_ids)} cours trouves\n")

# Extraire tous les course_id dans les leçons
errors = []
for match in re.finditer(r'--\s*LEÇONS?\s+(?:pour|POUR)\s+COURS\s+(\d+).*?INSERT INTO lessons.*?course_id.*?\'([0-9a-fA-F-]{36})\'', content, re.DOTALL):
    lessons_course_num = int(match.group(1))
    lesson_course_id = match.group(2)
    
    if lessons_course_num not in course_ids:
        errors.append(f"COURS {lessons_course_num}: Lecon reference cours inexistant")
    elif course_ids[lessons_course_num] != lesson_course_id:
        errors.append(f"COURS {lessons_course_num}: Lecon utilise course_id {lesson_course_id} mais le cours a l'ID {course_ids[lessons_course_num]}")

if errors:
    print("ERREURS TROUVEES:")
    for error in errors:
        print(f"  - {error}")
else:
    print("OK: Tous les course_id correspondent aux bons cours!")

