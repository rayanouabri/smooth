#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script final pour corriger TOUS les course_id dans TOUS les fichiers SQL
Analyse le fichier ligne par ligne et mappe correctement chaque leçon à son cours
"""

import re
import uuid
from pathlib import Path
from collections import OrderedDict

def fix_all_files():
    """Corrige tous les fichiers SQL dans batches_fixed"""
    batches_dir = Path("batches_fixed")
    sql_files = sorted(batches_dir.glob("lot_*.sql"))
    
    total_fixes = 0
    
    for sql_file in sql_files:
        print(f"\n{'='*80}")
        print(f"TRAITEMENT: {sql_file.name}")
        print(f"{'='*80}")
        
        with open(sql_file, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        
        fixed_lines = []
        changes = []
        
        # État de l'analyse
        course_mapping = OrderedDict()  # numéro de cours -> (course_id, start_line)
        current_course_num = None
        current_course_id = None
        in_course_insert = False
        current_lessons_course_num = None
        
        i = 0
        while i < len(lines):
            line = lines[i]
            original_line = line
            
            # Détecter "-- COURS X"
            course_header_match = re.search(r'--\s*COURS\s+(\d+)', line, re.IGNORECASE)
            if course_header_match:
                current_course_num = int(course_header_match.group(1))
                in_course_insert = False
                current_course_id = None
                fixed_lines.append(line)
                i += 1
                continue
            
            # Détecter "INSERT INTO courses" pour extraire l'ID du cours
            if current_course_num and 'INSERT INTO courses' in line and not in_course_insert:
                in_course_insert = True
                fixed_lines.append(line)
                i += 1
                # Lire les lignes suivantes pour trouver l'UUID du cours
                course_id_pattern = re.compile(r"'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'")
                while i < len(lines):
                    next_line = lines[i]
                    # Chercher l'UUID dans cette ligne
                    match = course_id_pattern.search(next_line)
                    if match:
                        current_course_id = match.group(1)
                        course_mapping[current_course_num] = current_course_id
                        print(f"  [COURS {current_course_num}] ID: {current_course_id[:20]}...")
                        in_course_insert = False
                        fixed_lines.append(next_line)
                        i += 1
                        break
                    fixed_lines.append(next_line)
                    i += 1
                continue
            
            # Détecter "-- LEÇONS pour COURS X"
            lessons_header_match = re.search(r'--\s*LEÇONS?\s+(?:pour|POUR)\s+COURS\s+(\d+)', line, re.IGNORECASE)
            if lessons_header_match:
                current_lessons_course_num = int(lessons_header_match.group(1))
                fixed_lines.append(line)
                i += 1
                continue
            
            # Si on est dans une section de leçons, corriger les course_id
            if current_lessons_course_num and current_lessons_course_num in course_mapping:
                correct_course_id = course_mapping[current_lessons_course_num]
                
                # Chercher les lignes avec deux UUIDs: (id, course_id, ...)
                # Pattern pour une ligne: 'uuid1', 'uuid2',
                lesson_line_match = re.match(
                    r"^(\s+)'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'\s*,\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'",
                    line
                )
                if lesson_line_match:
                    indent = lesson_line_match.group(1)
                    lesson_id = lesson_line_match.group(2)
                    old_course_id = lesson_line_match.group(3)
                    
                    if old_course_id != correct_course_id:
                        # Remplacer le course_id
                        new_line = f"{indent}'{lesson_id}', '{correct_course_id}',"
                        fixed_lines.append(new_line)
                        changes.append((current_lessons_course_num, lesson_id[:20], old_course_id[:20], correct_course_id[:20]))
                        i += 1
                        continue
            
            # Réinitialiser current_lessons_course_num si on sort de la section de leçons
            if current_lessons_course_num and ('-- COURS' in line or '-- ---' in line):
                current_lessons_course_num = None
            
            fixed_lines.append(line)
            i += 1
        
        # Sauvegarder si des changements ont été faits
        if changes:
            with open(sql_file, 'w', encoding='utf-8') as f:
                f.writelines(fixed_lines)
            
            print(f"\n  ✅ {len(changes)} correction(s) effectuée(s):")
            for course_num, lesson_id, old_id, new_id in changes[:5]:  # Afficher max 5
                print(f"     Cours {course_num}: Leçon {lesson_id}... course_id {old_id}... -> {new_id}...")
            if len(changes) > 5:
                print(f"     ... et {len(changes) - 5} autre(s) correction(s)")
            
            total_fixes += len(changes)
        else:
            print(f"  ✓ Aucune correction nécessaire")
    
    print(f"\n{'='*80}")
    print(f"TOTAL: {total_fixes} correction(s) dans {len(sql_files)} fichier(s)")
    print(f"{'='*80}")

if __name__ == "__main__":
    fix_all_files()

