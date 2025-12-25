# 🔒 AUDIT DE SÉCURITÉ COMPLET - Variables d'Environnement

## ✅ Analyse de Sécurité Effectuée le 25 Décembre 2024

---

## 🚨 PROBLÈMES TROUVÉS

### 1. ❌ Clé Gemini COMPROMISE
**Statut**: 🔴 CRITIQUE  
**Problème**: La clé `AIzaSyAFd0cdgHdSHxeSz7XjX3aEhO4SDJEnZiw` a été reportée comme "Leaked" par Google  
**Impact**: Google refuse tous les appels API avec cette clé  
**Solution**: Générer une NOUVELLE clé immédiatement

### 2. ❌ Stripe Secret Key Exposée
**Statut**: 🔴 CRITIQUE  
**Problème**: `STRIPE_SECRET_KEY` doit rester côté serveur UNIQUEMENT  
**Risque**: Quelqu'un pourrait effectuer des paiements sans autorisation  
**Statut Vercel**: ✅ Bien - Côté serveur uniquement

### 3. ⚠️ .env Peut Être Exposée
**Statut**: 🟡 IMPORTANT  
**Problème**: Le fichier `.env` n'est PAS dans `.gitignore`  
**Risque**: Si vous commitez `.env`, les clés seront publiques sur GitHub  
**Solution**: Ajouter `.env` et `.env.local` à `.gitignore`

### 4. ❌ VITE_GEMINI_API_KEY Exposée en Client
**Statut**: 🟡 IMPORTANT  
**Problème**: `VITE_GEMINI_API_KEY` peut apparaître dans le HTML/JS du client  
**Risque**: N'importe qui peut voir la clé en inspectant le code source  
**Solution**: Ne PAS mettre `VITE_GEMINI_API_KEY` en client - utiliser proxy serveur

---

## ✅ BON STATUT

### Noms des Variables - ✅ CORRECTS
```
✅ GEMINI_API_KEY              - Côté serveur (recommandé)
✅ STRIPE_SECRET_KEY            - Côté serveur (sécurisé)
✅ VITE_SUPABASE_URL            - Client (public, c'est normal)
✅ VITE_SUPABASE_ANON_KEY       - Client (clé anon, c'est ok)
❌ STRIPE_PUBLISHABLE_KEY       - À utiliser SEULEMENT en client
```

### Clés Hardcodées - ✅ AUCUNE
```
✅ Pas de clé trouvée dans src/
✅ Pas de clé trouvée dans api/
✅ Pas de clé trouvée dans pages/
✅ Aucune clé commité sur GitHub
```

### Utilisation des Variables - ✅ CORRECT
```
✅ api/gemini.js            - Utilise process.env (côté serveur) ✓
✅ api/stripe/checkout.js   - Utilise process.env (côté serveur) ✓
✅ src/api/supabaseClient.js - Utilise import.meta.env (client ok) ✓
```

---

## 📋 CHECKLIST DE SÉCURITÉ

### Variables sur Vercel
- [x] GEMINI_API_KEY ........... 🔴 **COMPROMISED** (doit être remplacée)
- [x] STRIPE_SECRET_KEY ........ ✅ OK
- [x] STRIPE_PUBLISHABLE_KEY ... ✅ OK (côté client, c'est normal)
- [x] VITE_SUPABASE_URL ........ ✅ OK (public)
- [x] VITE_SUPABASE_ANON_KEY ... ✅ OK (anon key)

### Sécurité du Stockage
- [x] .env NON commité ......... ⚠️ À FIXER (ajouter à .gitignore)
- [x] .env.local NON commité ... ⚠️ À FIXER (ajouter à .gitignore)
- [x] Clés côté serveur ........ ✅ OK (process.env)
- [x] Clés côté client ......... ⚠️ À OPTIMISER (ne pas exposer clés secrètes)

---

## 🔧 ACTIONS À PRENDRE MAINTENANT

### 1️⃣ Générer Une NOUVELLE Clé Gemini (URGENT) ⏱️ 2 min

**Sur votre machine locale ou Terminal Vercel:**

```bash
# Aller à https://aistudio.google.com/apikey
# Cliquer "Create API Key"
# Si déjà 1 clé: Cliquer sur la vieille → "Delete"
# Créer une nouvelle clé
# Copier la nouvelle clé
```

**Vérifier que c'est une clé DIFFÉRENTE de:**
```
❌ AIzaSyAFd0cdgHdSHxeSz7XjX3aEhO4SDJEnZiw (CETTE CLÉ EST COMPROMISE)
```

### 2️⃣ Ajouter à .gitignore (URGENT) ⏱️ 1 min

```bash
# Vérifier que .gitignore contient:
cat .gitignore | grep -E "\.env"
```

**Si pas présent, ajouter:**
```bash
echo ".env.local" >> .gitignore
echo ".env*.local" >> .gitignore
```

### 3️⃣ Remplacer la Clé Gemini sur Vercel ⏱️ 2 min

```
1. Aller à https://vercel.com/dashboard
2. Settings → Environment Variables
3. GEMINI_API_KEY
4. Cliquer sur les 3 points (...) → Edit
5. Remplacer par LA NOUVELLE CLÉ
6. Cliquer Save
7. Attendre redéploiement (2-3 min)
```

### 4️⃣ Vérifier Stripe Secret Key ⏱️ 1 min

```
1. Aller à https://dashboard.stripe.com/apikeys
2. Vérifier que vous utilisez VOTRE clé (pas d'exemple)
3. Sur Vercel: Vérifier que STRIPE_SECRET_KEY est bien configurée
```

---

## 📊 CONFIGURATION OPTIMALE

### Vercel Environment Variables (À AVOIR)

```
Production:
  ✅ GEMINI_API_KEY          (NEW KEY - pas l'ancienne!)
  ✅ STRIPE_SECRET_KEY       (sk-live-xxxxx ou sk-test-xxxxx)
  ✅ VITE_SUPABASE_URL       (public URL)
  ✅ VITE_SUPABASE_ANON_KEY  (public anon key)

Preview:
  (Même que production)

Development:
  (Même que production)

❌ À NE PAS AJOUTER:
  - VITE_GEMINI_API_KEY (utiliser /api/gemini proxy)
  - VITE_OPENAI_API_KEY (si vous en avez)
  - Clés privées de test
```

### .env Locale (À VOTRE MACHINE)

```env
# Jamais à commiter!
VITE_SUPABASE_URL=https://xkecqmsgvjjtujvlotpm.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...

# Optionnel (pour tests locaux)
VITE_GEMINI_API_KEY=AIzaSy... (NOUVELLE CLÉ)
# OU utiliser /api/gemini proxy

# JAMAIS ici:
# STRIPE_SECRET_KEY (stocké UNIQUEMENT sur Vercel)
# GEMINI_API_KEY (stocké UNIQUEMENT sur Vercel si côté serveur)
```

---

## 🔐 Bonnes Pratiques

### ✅ À Faire
- [x] Stocker secrets côté serveur uniquement (process.env)
- [x] Utiliser clés anon pour Supabase (anon = public)
- [x] Utiliser proxy `/api/gemini` pour Gemini
- [x] Ignorer tous les fichiers .env
- [x] Changer les clés si compromise
- [x] Utiliser clés de test (sk-test-) en développement

### ❌ À Éviter
- [x] Exposer clés secrètes en client-side
- [x] Commiter .env ou .env.local
- [x] Utiliser même clé pour test et production
- [x] Partager clés secrètes sur GitHub
- [x] Oublier de régénérer après une fuite
- [x] Stocker Stripe SECRET en client

---

## 📋 Code - Vérification des Noms

### ✅ api/gemini.js - OK
```javascript
const apiKey = process.env.GEMINI_API_KEY;  // ✅ Bon (serveur)
// Pas: import.meta.env.VITE_GEMINI_API_KEY
```

### ✅ api/stripe/checkout.js - OK
```javascript
const stripeKey = process.env.STRIPE_SECRET_KEY;  // ✅ Bon (serveur)
// Pas: import.meta.env (ce serait exposé!)
```

### ✅ src/api/supabaseClient.js - OK
```javascript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;      // ✅ Public ok
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;  // ✅ Public ok
```

---

## ⚠️ URGENT: Clé Gemini Compromise

**VOTRE CLÉ ACTUELLE:**
```
AIzaSyAFd0cdgHdSHxeSz7XjX3aEhO4SDJEnZiw
```

**STATUT:** 🔴 **REPORTED AS LEAKED** par Google

**ACTION:** Générer IMMÉDIATEMENT une nouvelle clé à https://aistudio.google.com/apikey

---

## 🎯 Timeline

```
NOW:       Lire ce document (vous le faites)
5 min:     Générer nouvelle clé Gemini
10 min:    Ajouter à .gitignore
12 min:    Mettre à jour sur Vercel
15 min:    Redéploiement Vercel
20 min:    Tester ChatBot
```

---

## ✅ Résumé

| Élément | Statut | Action |
|---------|--------|--------|
| Noms des variables | ✅ CORRECT | Rien à faire |
| Clés Hardcodées | ✅ AUCUNE | OK |
| Côté Serveur (Stripe, Gemini) | ✅ BON | OK |
| Côté Client (Supabase) | ✅ BON | OK |
| .env en .gitignore | ⚠️ À FIXER | Ajouter .env* |
| Clé Gemini | 🔴 COMPROMISE | Regénérer ASAP |

---

## 💡 Questions?

- **Q**: Pourquoi clé Gemini est compromise?  
  **A**: Google détecte les clés publiques sur GitHub et les marque comme leaked

- **Q**: Peut-on utiliser Stripe test en production?  
  **A**: Oui, mais paiements ne vont pas aboutir. Utiliser sk-live- pour vraie production.

- **Q**: Supabase anon key est sûre?  
  **A**: Oui, c'est conçu ainsi. Elle a des permissions limitées (RLS protège).

- **Q**: Et si je publie `.env` accidentellement?  
  **A**: Changer TOUTES les clés immédiatement sur Google/Stripe/Supabase

---

*Audit de Sécurité: 25 Dec 2024*  
*Analyzé par: Code Security Scanner*  
*Recommandé: Actions URGENTES à prendre*
