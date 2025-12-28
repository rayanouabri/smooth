#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Analyse toutes les incohérences entre courses et lessons dans tous les fichiers SQL
Détecte les course_id dans lessons qui n'ont pas de cours correspondant dans le même fichier
"""

import re
from pathlib import Path
from collections import defaultdict

def extract_course_ids_from_file(file_path):
    """Extrait tous les IDs de cours d'un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern pour trouver INSERT INTO courses avec l'UUID (premier paramètre)
    pattern = r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'"
    
    matches = re.findall(pattern, content, re.MULTILINE | re.DOTALL)
    return set(matches)

def extract_lesson_course_ids_from_file(file_path):
    """Extrait tous les course_id utilisés dans les lessons d'un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern pour trouver course_id dans INSERT INTO lessons
    # Format: (lesson_id, course_id, ...)
    pattern = r"INSERT INTO lessons[^)]*\([^)]*\)\s+VALUES\s*\(\s*'[^']+',\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'"
    
    matches = re.findall(pattern, content, re.MULTILINE | re.DOTALL)
    return matches

def find_course_lesson_mapping(file_path):
    """Trouve le mapping entre les cours et leurs leçons basé sur les commentaires"""
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    course_id_to_lessons = {}
    current_course_id = None
    current_course_num = None
    
    i = 0
    while i < len(lines):
        line = lines[i]
        
        # Chercher "-- COURS X" ou "-- COURSE X"
        course_match = re.search(r'--\s*COURS\s+(\d+)\s*:', line, re.IGNORECASE)
        if course_match:
            current_course_num = int(course_match.group(1))
            # Chercher l'INSERT INTO courses suivant
            for j in range(i, min(i+50, len(lines))):
                course_id_match = re.search(r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F-]{36})'", lines[j], re.IGNORECASE)
                if course_id_match:
                    current_course_id = course_id_match.group(1)
                    if current_course_id not in course_id_to_lessons:
                        course_id_to_lessons[current_course_id] = []
                    break
            i += 1
            continue
        
        # Chercher "-- LEÇONS pour COURS X" ou "-- LEÇONS POUR COURS X"
        lessons_match = re.search(r'--\s*LEÇONS?\s+(?:pour|POUR)\s+COURS\s+(\d+)', line, re.IGNORECASE)
        if lessons_match:
            expected_course_num = int(lessons_match.group(1))
            # Les leçons suivantes appartiennent au cours courant
            i += 1
            continue
        
        # Si on a un cours actif, chercher les leçons
        if current_course_id:
            lesson_match = re.search(r"INSERT INTO lessons[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([^']+)',\s*'([0-9a-fA-F-]{36})'", line)
            if lesson_match:
                lesson_id = lesson_match.group(1)
                course_id_in_lesson = lesson_match.group(2)
                if course_id_in_lesson != current_course_id:
                    course_id_to_lessons[current_course_id].append((lesson_id, course_id_in_lesson))
        
        i += 1
    
    return course_id_to_lessons

batches_dir = Path("batches_fixed")
sql_files = sorted(list(batches_dir.glob("lot_*.sql")))

print("=" * 80)
print("ANALYSE COMPLÈTE DES INCOHÉRENCES COURS/LEÇONS")
print("=" * 80)

all_issues = []

for sql_file in sql_files:
    print(f"\n[FICHIER] {sql_file.name}")
    print("-" * 80)
    
    # Extraire les IDs de cours et de leçons
    course_ids = extract_course_ids_from_file(sql_file)
    lesson_course_ids = extract_lesson_course_ids_from_file(sql_file)
    
    print(f"  Cours trouvés: {len(course_ids)}")
    print(f"  Leçons trouvées: {len(lesson_course_ids)}")
    
    # Trouver les course_id dans les leçons qui n'ont pas de cours correspondant
    orphan_lessons = []
    for lesson_course_id in set(lesson_course_ids):
        if lesson_course_id not in course_ids:
            count = lesson_course_ids.count(lesson_course_id)
            orphan_lessons.append((lesson_course_id, count))
    
    if orphan_lessons:
        print(f"  ⚠️  PROBLÈME: {len(orphan_lessons)} course_id orphelin(s) trouvé(s):")
        for orphan_id, count in orphan_lessons:
            print(f"     - {orphan_id} (utilise dans {count} lecon(s))")
            all_issues.append((sql_file.name, orphan_id, count))
    else:
        print(f"  [OK] Aucun probleme detecte dans ce fichier")

print("\n" + "=" * 80)
print("RÉSUMÉ DES PROBLÈMES")
print("=" * 80)

if all_issues:
    print(f"\nTotal de fichiers avec problemes: {len(set(f for f, _, _ in all_issues))}")
    print(f"Total de course_id orphelins: {len(all_issues)}")
    print("\nDetails:")
    for filename, orphan_id, count in all_issues:
        print(f"  {filename}: {orphan_id} ({count} lecon(s))")
else:
    print("\n[OK] Aucun probleme detecte dans tous les fichiers !")

