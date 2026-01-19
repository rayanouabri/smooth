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

// Créer automatiquement un profil utilisateur s'il n'existe pas
const ensureUserProfile = async (user) => {
  if (!user || !user.id) return null;
  
  try {
    // Vérifier si le profil existe
    let profile = null;
    
    // Essayer par ID
    const { data: byId } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();
    
    if (byId) {
      profile = byId;
    } else {
      // Essayer par email
      const { data: byEmail } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_email', user.email)
        .maybeSingle();
      
      if (byEmail) {
        profile = byEmail;
      }
    }
    
    // Si le profil n'existe pas, le créer
    if (!profile) {
      console.log('me() - Creating user profile for:', user.id, user.email);
      
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
        // Si l'insertion échoue à cause d'une contrainte (profil existe déjà), essayer de le récupérer
        if (insertError.code === '23505' || insertError.message?.includes('duplicate key')) {
          console.log('me() - Profile already exists, fetching it');
          // Le profil existe déjà, le récupérer
          const { data: existingProfile } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', user.id)
            .maybeSingle();
          
          if (existingProfile) {
            profile = existingProfile;
          } else {
            // Essayer par email
            const { data: byEmail } = await supabase
              .from('user_profiles')
              .select('*')
              .eq('user_email', user.email)
              .maybeSingle();
            
            if (byEmail) {
              profile = byEmail;
            } else {
              console.error('me() - Profile should exist but not found:', insertError);
              return null;
            }
          }
        } else {
          // Autre erreur (RLS, etc.)
          console.error('me() - Insert failed:', insertError);
          // Essayer upsert comme dernier recours
          const { data: upsertedProfile, error: upsertError } = await supabase
            .from('user_profiles')
            .upsert(profileData, { onConflict: 'id' })
            .select()
            .single();
          
          if (upsertError) {
            console.error('me() - Upsert also failed:', upsertError);
            return null;
          }
          
          profile = upsertedProfile;
        }
      } else {
        profile = newProfile;
      }
      
      console.log('me() - User profile created successfully');
    }
    
    return profile;
  } catch (err) {
    console.error('me() - Error ensuring user profile:', err);
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
  // Le profil devrait être créé automatiquement par le trigger SQL on_auth_user_created
  // Si le profil n'existe pas, utiliser ensureUserProfile comme backup (pour anciens utilisateurs)
  let profile = null;
  try {
    // Essayer d'abord par ID
    const { data: byId } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();
    
    if (byId) {
      profile = byId;
    } else {
      // Essayer par email (pour compatibilité avec anciens profils)
      const { data: byEmail } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_email', user.email)
        .maybeSingle();
      
      if (byEmail) {
        profile = byEmail;
      } else {
        // Si aucun profil trouvé, créer un profil (pour les anciens utilisateurs)
        // Le trigger devrait normalement le créer, mais on le fait comme backup
        profile = await ensureUserProfile(user);
      }
    }
  } catch (err) {
    console.error('me() profile fetch error:', err);
    // Si erreur, essayer de créer le profil comme backup
    profile = await ensureUserProfile(user);
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
  
  // Note: Le profil devrait déjà exister grâce au trigger SQL on_auth_user_created
  // On vérifie seulement pour les anciens utilisateurs qui n'ont peut-être pas de profil
  if (data.user) {
    try {
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('id')
        .eq('id', data.user.id)
        .maybeSingle();
      
      // Si le profil n'existe pas (ancien utilisateur), le créer
      if (!profile) {
        await ensureUserProfile(data.user);
      }
    } catch (err) {
      console.warn('Could not verify user profile on login:', err);
      // Ne pas bloquer la connexion
    }
  }
  
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
  
  // Note: Le profil user_profiles est créé automatiquement par le trigger SQL
  // on_auth_user_created dans Supabase. On n'a pas besoin de le créer manuellement.
  // Mais on peut quand même vérifier/créer pour les anciens utilisateurs.
  if (data.user) {
    // Vérifier que le profil existe (backup pour les anciens utilisateurs)
    try {
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('id')
        .eq('id', data.user.id)
        .maybeSingle();
      
      if (!profile) {
        // Si le trigger n'a pas fonctionné (ancien système), créer manuellement
        await supabase
          .from('user_profiles')
          .insert({
            id: data.user.id,
            user_email: data.user.email,
            full_name: metadata.full_name || data.user.email?.split('@')[0],
            is_premium: false,
            subscription_status: 'inactive',
          });
      }
    } catch (err) {
      console.warn('Could not verify/create user profile:', err);
      // Ne pas bloquer l'inscription si le profil n'est pas créé
    }
  }
  
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

