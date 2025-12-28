#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige spécifiquement le lot_03 :
1. Les leçons du COURS 14 doivent référencer f8e2d276-b66b-4554-b5d6-a6e3ea08a501
2. Le COURS 16 doit avoir un UUID différent de ece6527d-c212-45cf-b808-db155003bf18
"""

import re
import uuid
from pathlib import Path

file_path = Path("batches_fixed/lot_03_cours_11_a_15.sql")

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Les leçons du COURS 14 (qui sont entre COURS 14 et COURS 15) doivent référencer f8e2d276-b66b-4554-b5d6-a6e3ea08a501
# Trouver la position du commentaire "-- LEÇONS pour COURS 14"
course_14_lessons_start = content.find("-- LEÇONS pour COURS 14")
course_15_start = content.find("-- COURS 15 : Service-Public.fr")

if course_14_lessons_start != -1 and course_15_start != -1:
    # Remplacer les course_id dans les leçons du COURS 14
    section_14 = content[course_14_lessons_start:course_15_start]
    old_uuid_14 = "ece6527d-c212-45cf-b808-db155003bf18"
    new_uuid_14 = "f8e2d276-b66b-4554-b5d6-a6e3ea08a501"
    section_14_fixed = section_14.replace(f"'{old_uuid_14}'", f"'{new_uuid_14}'")
    content = content[:course_14_lessons_start] + section_14_fixed + content[course_15_start:]

# 2. Le COURS 16 doit avoir un UUID différent
course_16_start = content.find("-- COURS 16 : Décoder les annonces immobilières")
if course_16_start != -1:
    # Trouver l'UUID du COURS 16
    course_16_section = content[course_16_start:course_16_start+500]
    uuid_match = re.search(r"INSERT INTO courses[^)]*\([^)]*\)\s+VALUES\s*\(\s*'([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})'", course_16_section, re.MULTILINE | re.DOTALL)
    
    if uuid_match:
        current_uuid_16 = uuid_match.group(1)
        if current_uuid_16 == "ece6527d-c212-45cf-b808-db155003bf18":
            # Générer un nouvel UUID pour le COURS 16
            new_uuid_16 = str(uuid.uuid4())
            while f"'{new_uuid_16}'" in content:
                new_uuid_16 = str(uuid.uuid4())
            
            # Remplacer toutes les occurrences du COURS 16 (cours + leçons)
            # Trouver où commence le COURS 16 et où finit
            course_16_end = content.find("-- --- Cours 16 ---", course_16_start)
            if course_16_end == -1:
                # Si pas de commentaire de fin, trouver le prochain "-- COURS" ou la fin du fichier
                next_course = content.find("-- COURS", course_16_start + 500)
                if next_course != -1:
                    course_16_end = next_course
                else:
                    course_16_end = len(content)
            
            course_16_section_full = content[course_16_start:course_16_end]
            course_16_section_fixed = course_16_section_full.replace(f"'{current_uuid_16}'", f"'{new_uuid_16}'")
            content = content[:course_16_start] + course_16_section_fixed + content[course_16_end:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Correction du lot_03 terminee !")

