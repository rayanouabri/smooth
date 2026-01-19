# FrancePrep Academy

Plateforme d'apprentissage complète pour faciliter l'intégration des étudiants étrangers en France. Formation linguistique, administrative, sociale et professionnelle avec assistance IA.

## 🚀 Technologies

- **Frontend** : React + Vite
- **Backend** : Supabase (PostgreSQL, Auth, Storage)
- **Déploiement** : Vercel
- **UI** : Tailwind CSS + shadcn/ui

## 📋 Fonctionnalités

- ✅ 200+ cours d'intégration (CAF, sécurité sociale, logement, etc.)
- ✅ Assistant IA disponible 24/7 (Sophie)
- ✅ Forum communautaire
- ✅ Système de progression et certificats
- ✅ Tests d'aptitude et évaluations
- ✅ Génération de CV
- ✅ Cours particuliers avec professeurs
- ✅ Dashboard personnalisé

## 🛠️ Installation

1. Clonez le repository :
```bash
git clone https://github.com/VOTRE_USERNAME/franceprep-academy.git
cd franceprep-academy
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
Créez un fichier `.env.local` :
```env
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-anon-key
```

4. Lancez le serveur de développement :
```bash
npm run dev
```

## 🔒 Sécurité

Le projet utilise :
- Variables d'environnement pour toutes les clés API
- Row Level Security (RLS) activé sur Supabase
- Secrets stockés via Supabase Secrets (Edge Functions)
- HTTPS forcé en production

**⚠️ Important** : Ne commitez jamais de fichiers `.env` ou contenant des clés API.

Consultez `SECURITY_AUDIT_REPORT.md` pour plus de détails sur la sécurité.

## 🚀 Déploiement

Le projet est configuré pour se déployer automatiquement sur Vercel via GitHub.

**Variables d'environnement requises sur Vercel** :
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `GEMINI_API_KEY` (pour l'assistant IA)

## 📝 Scripts SQL Utiles

Les migrations sont gérées automatiquement via Supabase CLI. Les fichiers SQL à la racine servent de référence :
- `create_ai_messages_table.sql` - Table pour limiter les messages IA (5/mois pour gratuit)
- `create_contact_requests_table.sql` - Table pour les demandes de contact
- `fix_premium_courses_business_model.sql` - Correction du modèle premium
- `update_courses_ratings_and_duration.sql` - Mise à jour des évaluations et durées
- `set_30_percent_courses_premium.sql` - Définit 30% des cours en premium

Pour exécuter un script SQL : `node scripts/run-sql-cli.js <fichier.sql>`

## 📞 Support

Pour toute question ou problème, contactez l'équipe de développement.

---

**Note** : Ce projet est en développement actif. Les fonctionnalités peuvent évoluer.
