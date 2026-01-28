import { supabase } from './supabaseClient';
import { isPremium } from '../utils/premium';

/**
 * Service d'authentification Supabase
 */

/** Vérifier si l'utilisateur est authentifié */
export const isAuthenticated = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return !!session;
};

/** Obtenir l'utilisateur actuel */
export const getCurrentUser = async () => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
      if (error.message.includes('not authenticated') || error.message.includes('session')) {
        return null;
      }
      throw error;
    }
    return user;
  } catch (error) {
    console.error("Auth error:", error.message);
    return null;
  }
};

/** Créer automatiquement un profil utilisateur s'il n'existe pas */
const ensureUserProfile = async (user) => {
  if (!user?.id) return null;
  
  try {
    // Vérifier si le profil existe par ID
    const { data: byId } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();
    
    if (byId) return byId;

    // Vérifier par email
    const { data: byEmail } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_email', user.email)
      .maybeSingle();
    
    if (byEmail) return byEmail;

    // Créer le profil
    const profileData = {
      id: user.id,
      user_email: user.email,
      full_name: user.user_metadata?.full_name || user.email?.split('@')[0],
      is_premium: false,
      subscription_status: 'inactive',
    };
    
    const { data: newProfile, error: insertError } = await supabase
      .from('user_profiles')
      .insert(profileData)
      .select()
      .single();
    
    if (insertError) {
      // Si duplicate key, récupérer le profil existant
      if (insertError.code === '23505') {
        const { data: existing } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle();
        return existing;
      }
      
      // Essayer upsert comme fallback
      const { data: upserted } = await supabase
        .from('user_profiles')
        .upsert(profileData, { onConflict: 'id' })
        .select()
        .single();
      return upserted;
    }
    
    return newProfile;
  } catch (err) {
    console.error('Profile error:', err.message);
    return null;
  }
};

/** Obtenir les informations complètes de l'utilisateur */
export const me = async () => {
  const user = await getCurrentUser();
  if (!user) return null;
  
  let profile = null;
  
  try {
    // Chercher par ID
    const { data: byId } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();
    
    if (byId) {
      profile = byId;
    } else {
      // Chercher par email
      const { data: byEmail } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_email', user.email)
        .maybeSingle();
      
      profile = byEmail || await ensureUserProfile(user);
    }
  } catch (err) {
    profile = await ensureUserProfile(user);
  }
  
  const computedIsPremium = isPremium(profile);
  
  return {
    ...user,
    id: user.id,
    email: user.email,
    full_name: profile?.full_name || user.user_metadata?.full_name || user.email?.split('@')[0],
    is_premium: computedIsPremium,
    subscription_status: profile?.subscription_status || 'inactive',
    ...(profile || {}),
  };
};

/** Déconnexion */
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
  window.location.reload();
};

/** Rediriger vers la page de connexion */
export const redirectToLogin = (redirectUrl = window.location.href) => {
  const url = new URL('/login', window.location.origin);
  url.searchParams.set('redirect', redirectUrl);
  window.location.href = url.toString();
};

/** Connexion avec email/password */
export const signInWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  
  if (data.user) {
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('id')
      .eq('id', data.user.id)
      .maybeSingle();
    
    if (!profile) {
      await ensureUserProfile(data.user);
    }
  }
  
  return data;
};

/** Inscription avec email/password */
export const signUpWithEmail = async (email, password, metadata = {}) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: metadata },
  });
  if (error) throw error;
  
  if (data.user) {
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('id')
      .eq('id', data.user.id)
      .maybeSingle();
    
    if (!profile) {
      await supabase.from('user_profiles').insert({
        id: data.user.id,
        user_email: data.user.email,
        full_name: metadata.full_name || data.user.email?.split('@')[0],
        is_premium: false,
        subscription_status: 'inactive',
      });
    }
  }
  
  return data;
};

/** Connexion OAuth */
export const signInWithOAuth = async (provider, redirectUrl = window.location.origin) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: `${redirectUrl}/auth/callback` },
  });
  if (error) throw error;
  return data;
};

/** Connexion Google */
export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: `${window.location.origin}/auth/callback` }
  });
  if (error) throw error;
  return data;
};

/** Réinitialiser le mot de passe */
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
