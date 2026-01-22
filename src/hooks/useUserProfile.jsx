import { useState, useEffect } from 'react';
import { me } from '@/api/auth';
import { supabase } from '@/api/supabaseClient';
import logger from '@/utils/logger';

/**
 * Hook personnalisé pour charger le profil utilisateur
 * Évite la duplication de code dans Dashboard, Profile, DashboardSidebar, etc.
 * 
 * @returns {{
 *   user: Object|null,
 *   profile: Object|null,
 *   isLoading: boolean,
 *   error: Error|null,
 *   refetch: Function
 * }}
 */
export const useUserProfile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProfile = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Utiliser me() pour obtenir le profil complet avec is_premium
      const userData = await me();
      
      if (!userData) {
        setUser(null);
        setProfile(null);
        setIsLoading(false);
        return;
      }
      
      setUser(userData);
      
      // Récupérer le profil depuis user_profiles pour être sûr
      if (userData.id) {
        const { data: profileData, error: profileError } = await supabase
          .from('user_profiles')
          .select('*')
          .eq('id', userData.id)
          .maybeSingle();
        
        if (profileError && profileError.code !== 'PGRST116') {
          // PGRST116 = not found, ce n'est pas une erreur critique
          logger.warn('Error loading profile:', profileError);
        }
        
        if (profileData) {
          setProfile(profileData);
        } else {
          // Fallback: utiliser les données de me()
          setProfile(userData);
        }
      }
    } catch (err) {
      logger.error('Error loading user profile:', err);
      setError(err);
      setUser(null);
      setProfile(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return {
    user,
    profile,
    isLoading,
    error,
    refetch: loadProfile
  };
};
