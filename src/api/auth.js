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
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
      // Si l'utilisateur n'est pas authentifié, retourner null au lieu de throw
      if (error.message.includes('not authenticated') || error.message.includes('session')) {
        return null;
      }
      throw error;
    }
    return user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
};

// Obtenir les informations complètes de l'utilisateur (compatibilité avec base44.auth.me())
export const me = async () => {
  const user = await getCurrentUser();
  
  // Si pas d'utilisateur, retourner null
  if (!user) {
    return null;
  }
  
  // Récupérer le profil utilisateur depuis la table user_profiles
  // 1) recherche par id exact
  // 2) fallback par user_email si pas trouvé (robustesse)
  let profile = null;
  try {
    // Essayer d'abord par ID
    const { data: byId, error: errorById } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();
    
    if (errorById) {
      console.error('me() error by ID:', errorById);
    } else {
      profile = byId;
    }

    // Si pas trouvé par ID, essayer par email
    if (!profile) {
      const { data: byEmail, error: errorByEmail } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_email', user.email)
        .maybeSingle();
      
      if (errorByEmail) {
        console.error('me() error by email:', errorByEmail);
      } else {
        profile = byEmail;
      }
    }
  } catch (err) {
    console.error('me() profile fetch error:', err);
  }
  
  // Forcer is_premium à être un boolean
  const isPremium = profile?.is_premium === true || profile?.is_premium === 'true' || profile?.subscription_status === 'active';
  
  console.log('me() - User:', user.id, 'Email:', user.email);
  console.log('me() - Profile found:', !!profile, 'Profile ID:', profile?.id);
  console.log('me() - is_premium (raw):', profile?.is_premium, 'is_premium (computed):', isPremium);
  console.log('me() - subscription_status:', profile?.subscription_status);
  
  // Construire l'objet utilisateur avec le profil
  const userData = {
    ...user,
    id: user.id,
    email: user.email,
    full_name: profile?.full_name || user.user_metadata?.full_name || user.email?.split('@')[0],
    is_premium: isPremium,
    subscription_status: profile?.subscription_status || 'inactive',
    // Inclure toutes les données du profil
    ...(profile || {}),
  };
  
  return userData;
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

