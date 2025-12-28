#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Vérifie que les course_id dans les leçons correspondent bien aux IDs des cours
"""

import re
from pathlib import Path

file_path = Path("batches_fixed/lot_05_cours_21_a_25.sql")

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extraire tous les cours et leurs IDs
course_ids = {}
course_num = None

for line in content.split('\n'):
    course_match = re.search(r'--\s*COURS\s+(\d+)', line)
    if course_match:
        course_num = int(course_match.group(1))
        continue
    
    if course_num:
        uuid_match = re.search(
            r"INSERT INTO courses.*?\(\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'",
            line
        )
        if uuid_match:
            course_ids[course_num] = uuid_match.group(1)
            course_num = None

print("IDs des cours trouvés:")
for num, cid in sorted(course_ids.items()):
    print(f"  COURS {num}: {cid}")

# Extraire toutes les leçons et leurs course_id
lessons_info = []
lessons_course_num = None

for line in content.split('\n'):
    lessons_match = re.search(r'--\s*LEÇONS?\s+(?:pour|POUR)\s+COURS\s+(\d+)', line, re.IGNORECASE)
    if lessons_match:
        lessons_course_num = int(lessons_match.group(1))
        continue
    
    if lessons_course_num:
        # Chercher les lignes avec lesson_id, course_id
        lesson_match = re.search(
            r"'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'\s*,\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'",
            line
        )
        if lesson_match:
            lesson_id = lesson_match.group(1)
            course_id = lesson_match.group(2)
            lessons_info.append((lessons_course_num, lesson_id, course_id))

print("\nVérification des course_id dans les leçons:")
issues = []
for course_num, lesson_id, course_id in lessons_info:
    expected_course_id = course_ids.get(course_num)
    if expected_course_id and course_id != expected_course_id:
        issues.append((course_num, lesson_id, course_id, expected_course_id))
        print(f"  PROBLÈME: Leçon pour COURS {course_num} utilise course_id={course_id} au lieu de {expected_course_id}")
    else:
        print(f"  OK: Leçon pour COURS {course_num} utilise course_id={course_id}")

if not issues:
    print("\n✓ Aucun problème détecté!")
else:
    print(f"\n✗ {len(issues)} problème(s) détecté(s)")

