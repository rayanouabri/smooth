import { supabase } from './supabaseClient';

/**
 * Service d'authentification utilisant Supabase
 * Remplace base44.auth
 */

// Vérifier si l'utilisateur est authentifié
export const isAuthenticated = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return !!session;
};

// Obtenir l'utilisateur actuel
export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) throw error;
  return user;
};

// Obtenir les informations complètes de l'utilisateur (compatibilité avec base44.auth.me())
export const me = async () => {
  const user = await getCurrentUser();
  // Récupérer le profil utilisateur depuis la table user_profiles (par user_id ou user_email)
  const { data: profile, error } = await supabase
    .from('user_profiles')
    .select('*')
    .or(`user_id.eq.${user.id},user_email.eq.${user.email}`)
    .maybeSingle();
  
  // Si le profil n'existe pas, créer un profil par défaut (pour compatibilité)
  if (!profile && !error) {
    // Ne pas créer automatiquement ici, laisser le trigger Supabase s'en charger
    // ou créer le profil dans AuthCallback
  }
  
  return {
    id: user.id,
    email: user.email,
    full_name: profile?.full_name || user.user_metadata?.full_name || user.email?.split('@')[0],
    ...profile,
    ...user,
  };
};

// Déconnexion
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  window.location.reload();
};

// Rediriger vers la page de connexion
export const redirectToLogin = (redirectUrl = window.location.href) => {
  // Utiliser window.location pour forcer un rechargement complet
  const url = new URL('/login', window.location.origin);
  url.searchParams.set('redirect', redirectUrl);
  window.location.href = url.toString();
};

// Connexion avec email/password
export const signInWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
};

// Inscription avec email/password
export const signUpWithEmail = async (email, password, metadata = {}) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: metadata,
    },
  });
  if (error) throw error;
  return data;
};

// Connexion avec OAuth (Google, GitHub, etc.)
export const signInWithOAuth = async (provider, redirectUrl = window.location.origin) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${redirectUrl}/auth/callback`,
    },
  });
  if (error) throw error;
  return data;
};

// Fonction pour la connexion Google (spécifique)
export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback` // Redirige vers le callback après connexion
    }
  });
  if (error) throw error;
  return data;
};

// Réinitialiser le mot de passe
export const resetPassword = async (email) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });
  if (error) throw error;
};

export default {
  isAuthenticated,
  me,
  logout,
  redirectToLogin,
  signInWithEmail,
  signUpWithEmail,
  signInWithOAuth,
  signInWithGoogle,
  resetPassword,
  getCurrentUser,
};

