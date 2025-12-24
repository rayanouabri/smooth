# 🔧 Configuration Supabase - Guide Complet

## ✅ Ce qui a été fait automatiquement

1. ✅ Fonction `signInWithGoogle()` ajoutée dans `src/api/auth.js`
2. ✅ Page de login créée (`src/pages/Login.jsx`)
3. ✅ Page de callback OAuth créée (`src/pages/AuthCallback.jsx`)
4. ✅ Routes ajoutées dans le router
5. ✅ Toutes les références base44 corrigées

## 📋 Configuration nécessaire dans Supabase

### 1. Configuration OAuth Google

1. **Allez dans Supabase Dashboard** → Votre projet → **Authentication** → **Providers**

2. **Activez Google** :
   - Trouvez "Google" dans la liste des providers
   - Cliquez sur l'interrupteur pour l'activer
   - Remplissez les champs requis :
     - **Client ID (for OAuth)** : Votre Client ID Google
     - **Client Secret (for OAuth)** : Votre Client Secret Google

3. **Obtenir les credentials Google** :
   - Allez sur [Google Cloud Console](https://console.cloud.google.com/)
   - Créez un projet ou sélectionnez un existant
   - Allez dans **APIs & Services** → **Credentials**
   - Cliquez sur **Create Credentials** → **OAuth client ID**
   - Type d'application : **Web application**
   - **Authorized redirect URIs** : Ajoutez cette URL :
     ```
     https://votre-projet.supabase.co/auth/v1/callback
     ```
   - Copiez le **Client ID** et **Client Secret**

4. **URLs de redirection dans Supabase** :
   - Dans Supabase, allez dans **Authentication** → **URL Configuration**
   - **Site URL** : L'URL de votre site Vercel (ex: `https://votre-site.vercel.app`)
   - **Redirect URLs** : Ajoutez :
     ```
     https://votre-site.vercel.app/auth/callback
     http://localhost:5173/auth/callback (pour développement local)
     ```

### 2. Configuration de la base de données

#### Créer la table `user_profiles` (si pas déjà fait)

Exécutez ce SQL dans l'éditeur SQL de Supabase :

```sql
-- Table user_profiles
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  user_email TEXT NOT NULL,
  full_name TEXT,
  photo_url TEXT,
  country_origin TEXT,
  city_destination TEXT,
  arrival_date DATE,
  study_field TEXT,
  french_level TEXT DEFAULT 'A1',
  goals JSONB DEFAULT '[]',
  bio TEXT,
  phone TEXT,
  subscription_plan TEXT DEFAULT 'gratuit',
  created_date TIMESTAMPTZ DEFAULT NOW(),
  updated_date TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id),
  UNIQUE(user_email)
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_profiles_user_email ON user_profiles(user_email);
```

#### Trigger pour créer automatiquement un profil lors de l'inscription

```sql
-- Fonction pour créer un profil utilisateur automatiquement
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (user_id, user_email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.email)
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger qui s'exécute après l'insertion d'un nouvel utilisateur
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

#### Row Level Security (RLS) - Sécurité

```sql
-- Activer RLS sur user_profiles
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Politique : Les utilisateurs peuvent lire leur propre profil
CREATE POLICY "Users can read own profile"
  ON user_profiles
  FOR SELECT
  USING (auth.uid() = user_id);

-- Politique : Les utilisateurs peuvent mettre à jour leur propre profil
CREATE POLICY "Users can update own profile"
  ON user_profiles
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Politique : Les utilisateurs peuvent insérer leur propre profil
CREATE POLICY "Users can insert own profile"
  ON user_profiles
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

### 3. Variables d'environnement dans Vercel

Dans votre projet Vercel, ajoutez ces variables d'environnement :

```
VITE_SUPABASE_URL=https://votre-projet.supabase.co
VITE_SUPABASE_ANON_KEY=votre-anon-key
```

Pour les trouver :
- Dans Supabase Dashboard → **Settings** → **API**
- Copiez **Project URL** → `VITE_SUPABASE_URL`
- Copiez **anon public** key → `VITE_SUPABASE_ANON_KEY`

## 🧪 Tester l'authentification

1. **Lancez l'application localement** :
   ```bash
   npm run dev
   ```

2. **Testez la connexion Google** :
   - Allez sur `/login`
   - Cliquez sur "Continuer avec Google"
   - Connectez-vous avec votre compte Google
   - Vous devriez être redirigé vers le Dashboard

3. **Vérifiez dans Supabase** :
   - Allez dans **Authentication** → **Users**
   - Vous devriez voir votre utilisateur créé
   - Vérifiez que le profil a été créé dans `user_profiles`

## 🔍 Dépannage

### Problème : "Redirect URL mismatch"

**Solution** : Vérifiez que l'URL de redirection dans Supabase correspond exactement à celle de votre application.

### Problème : "No profile found"

**Solution** : Vérifiez que le trigger `on_auth_user_created` est bien créé et fonctionne.

### Problème : Erreur lors de la connexion Google

**Solution** :
1. Vérifiez que Google OAuth est bien activé dans Supabase
2. Vérifiez que les Client ID et Secret sont corrects
3. Vérifiez que l'URL de callback dans Google Cloud Console correspond à celle de Supabase

## ✅ Checklist finale

- [ ] Google OAuth activé dans Supabase
- [ ] Client ID et Secret Google configurés
- [ ] URLs de redirection configurées (Site URL + Redirect URLs)
- [ ] Table `user_profiles` créée
- [ ] Trigger `on_auth_user_created` créé
- [ ] RLS activé et politiques créées (optionnel mais recommandé)
- [ ] Variables d'environnement configurées dans Vercel
- [ ] Test de connexion Google réussi

Une fois tout cela fait, votre authentification Google devrait fonctionner parfaitement ! 🎉

