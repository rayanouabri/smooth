#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Analyse les relations entre courses et lessons dans tous les fichiers
Détecte les course_id dans lessons qui n'ont pas de cours correspondant
"""

import re
import uuid
from pathlib import Path
from collections import defaultdict

def extract_course_ids(file_path):
    """Extrait tous les IDs de cours d'un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern pour trouver INSERT INTO courses avec l'UUID
    pattern = r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'"
    
    matches = re.findall(pattern, content, re.MULTILINE | re.DOTALL)
    return set(matches)

def extract_lesson_course_ids(file_path):
    """Extrait tous les course_id utilisés dans les lessons"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern pour trouver INSERT INTO lessons avec course_id
    # Chercher course_id suivi de l'UUID
    pattern = r"course_id[,\s]+'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'"
    
    matches = re.findall(pattern, content, re.MULTILINE)
    return set(matches)

def analyze_all_files():
    """Analyse tous les fichiers et détecte les incohérences"""
    batches_dir = Path("batches_fixed")
    all_issues = []
    
    for file_path in sorted(batches_dir.glob("lot_*.sql")):
        print(f"\nAnalyse de {file_path.name}...")
        
        course_ids = extract_course_ids(file_path)
        lesson_course_ids = extract_lesson_course_ids(file_path)
        
        # Trouver les course_id orphelins (dans lessons mais pas dans courses)
        orphan_ids = lesson_course_ids - course_ids
        
        if orphan_ids:
            print(f"  [ERREUR] {len(orphan_ids)} course_id orphelin(s):")
            for orphan_id in orphan_ids:
                print(f"    - {orphan_id}")
                all_issues.append((file_path, orphan_id, 'orphan'))
        
        # Trouver les cours sans leçons
        courses_without_lessons = course_ids - lesson_course_ids
        if courses_without_lessons:
            print(f"  [ATTENTION] {len(courses_without_lessons)} cours sans leçons référencées")
        
        if not orphan_ids:
            print(f"  [OK] Toutes les relations sont valides")
    
    return all_issues

if __name__ == "__main__":
    print("Analyse des relations courses/lessons...")
    issues = analyze_all_files()
    
    if issues:
        print(f"\n\n[RESUME] {len(issues)} probleme(s) detecte(s) au total")
    else:
        print(f"\n\n[OK] Aucun probleme detecte !")

