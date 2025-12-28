#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Corrige les UUID de cours en double dans le lot 3
Remplace l'UUID dupliqué par un nouvel UUID unique et met à jour toutes les références
"""

import re
import uuid
from pathlib import Path

def fix_duplicate_in_lot3():
    """Corrige l'UUID dupliqué dans lot_03_cours_11_a_15.sql"""
    file_path = Path("batches_fixed/lot_03_cours_11_a_15.sql")
    
    if not file_path.exists():
        print(f"ERREUR: Fichier '{file_path}' n'existe pas")
        return
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # UUID dupliqué à remplacer
    old_uuid = 'f0e1a2b3-c4d5-4012-e6f7-a8b9c0d1e2f3'
    
    # Générer un nouvel UUID unique
    new_uuid = str(uuid.uuid4())
    
    print(f"Remplacement de l'UUID duplique:")
    print(f"  Ancien: {old_uuid}")
    print(f"  Nouveau: {new_uuid}")
    
    # Compter les occurrences
    count_old = content.count(f"'{old_uuid}'")
    print(f"\nOccurrences trouvees: {count_old}")
    
    # Remplacer toutes les occurrences
    content = content.replace(f"'{old_uuid}'", f"'{new_uuid}'")
    
    # Sauvegarder
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fichier corrige avec succes!")

if __name__ == "__main__":
    fix_duplicate_in_lot3()

