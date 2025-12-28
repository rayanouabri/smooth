#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige les triple apostrophes avant des astérisques dans tous les fichiers SQL
Le problème: L'''**adresse devrait être L''**adresse
"""

import re
from pathlib import Path

batches_dir = Path("batches_fixed")

def fix_triple_apostrophe_before_asterisks(content):
    """Corrige les triple apostrophes avant des astérisques"""
    # Pattern: L'''** ou d'''** ou l'''** etc.
    pattern = r"([a-zA-Z])'''(\*\*)"
    
    def replace_triple(match):
        letter = match.group(1)
        return f"{letter}''{match.group(2)}"
    
    content = re.sub(pattern, replace_triple, content)
    return content

# Traiter tous les fichiers SQL
sql_files = list(batches_dir.glob("*.sql"))

print(f"Traitement de {len(sql_files)} fichiers...")

for sql_file in sql_files:
    with open(sql_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_count = len(re.findall(r"[a-zA-Z]'''(\*\*)", content))
    content_fixed = fix_triple_apostrophe_before_asterisks(content)
    fixed_count = len(re.findall(r"[a-zA-Z]'''(\*\*)", content_fixed))
    
    if original_count > fixed_count:
        with open(sql_file, 'w', encoding='utf-8') as f:
            f.write(content_fixed)
        print(f"{sql_file.name}: Corrige {original_count - fixed_count} occurrence(s)")

print("\nCorrection terminee !")

