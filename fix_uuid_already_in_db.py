#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Remplace un UUID qui existe déjà dans la base de données
"""

import re
import uuid
from pathlib import Path

def replace_uuid_in_file(file_path, old_uuid, new_uuid=None):
    """Remplace toutes les occurrences d'un UUID dans un fichier"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if new_uuid is None:
        new_uuid = str(uuid.uuid4())
    
    count = content.count(f"'{old_uuid}'")
    
    if count > 0:
        content = content.replace(f"'{old_uuid}'", f"'{new_uuid}'")
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return True, count, new_uuid
    
    return False, 0, None

# UUID qui existe déjà dans la base de données
PROBLEMATIC_UUID = "d0067a6e-6fa3-44e6-ad83-2db54ca02994"

file_path = Path("batches_fixed/lot_03_cours_11_a_15.sql")

print(f"Remplacement de l'UUID '{PROBLEMATIC_UUID}' dans {file_path.name}...")

modified, count, new_uuid = replace_uuid_in_file(file_path, PROBLEMATIC_UUID)

if modified:
    print(f"  [OK] UUID remplace:")
    print(f"    Ancien: {PROBLEMATIC_UUID}")
    print(f"    Nouveau: {new_uuid}")
    print(f"    {count} occurrences remplacees")
else:
    print(f"  - UUID non trouve dans le fichier")

