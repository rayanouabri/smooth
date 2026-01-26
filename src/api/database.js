import { supabase } from './supabaseClient';
import { isMockId } from '../utils/validate-uuid';

// Récupérer les variables d'environnement depuis supabaseClient pour éviter la duplication
const getSupabaseConfig = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  return { supabaseUrl, supabaseAnonKey };
};

/**
 * Service de base de données générique
 * Remplace base44.entities.EntityName avec une interface similaire
 */

/**
 * Crée un service d'entité pour une table Supabase
 * @param {string} tableName - Nom de la table Supabase
 * @returns {Object} Service avec méthodes filter, get, create, update, delete
 */
export const createEntityService = (tableName) => {
  /**
   * Filtrer les entités (remplace base44.entities.EntityName.filter)
   * @param {Object} filters - Filtres à appliquer { field: value }
   * @param {string} orderBy - Champ de tri (préfixé par '-' pour ordre décroissant)
   * @param {number} limit - Nombre maximum de résultats
   * @returns {Promise<Array>} Liste des entités
   */
  const filter = async (filters = {}, orderBy = null, limit = null) => {
    // LOGS DE DÉBOGAGE - TOUJOURS ACTIFS
    console.log(`[Database] 🔍 filter() appelé - tableName: "${tableName}", filters:`, filters, `orderBy:`, orderBy, `limit:`, limit);
    
    // CRITIQUE: Pour forum_posts, utiliser TOUJOURS l'API REST directe
    // car le client Supabase ne semble pas appliquer correctement la limite
    // Les logs Supabase montrent que les requêtes n'ont PAS de paramètre limit dans l'URL
    // CRITIQUE: Pour forum_posts, utiliser TOUJOURS l'API REST directe EN PREMIER
    // car le client Supabase ne semble pas appliquer correctement la limite
    if (tableName === 'forum_posts') {
      console.log(`[Database] ✅ tableName === 'forum_posts' - Utilisation de l'API REST directe`);
      const { supabaseUrl, supabaseAnonKey } = getSupabaseConfig();
      
      // Vérifier que les variables d'environnement sont disponibles
      if (!supabaseUrl || !supabaseAnonKey) {
        console.error(`[Database] ❌ Variables d'environnement manquantes pour forum_posts REST direct`);
        console.error(`[Database] supabaseUrl: ${supabaseUrl ? 'OK' : 'MANQUANT'}, supabaseAnonKey: ${supabaseAnonKey ? 'OK' : 'MANQUANT'}`);
        console.error(`[Database] ⚠️ Fallback vers client Supabase (sans limite garantie)`);
      } else {
        const defaultLimit = 1000;
        const finalLimit = limit !== null ? limit : defaultLimit;
        const actualLimit = Math.max(finalLimit, 1000);
        
        // Construire l'URL avec tous les paramètres
        let url = `${supabaseUrl}/rest/v1/${tableName}?select=*&limit=${actualLimit}`;
        
        // Ajouter les filtres
        Object.entries(filters).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            if (Array.isArray(value)) {
              if (value.length > 0) {
                url += `&${key}=in.(${value.join(',')})`;
              }
            } else {
              url += `&${key}=eq.${encodeURIComponent(value)}`;
            }
          }
        });
        
        // Ajouter le tri
        if (orderBy) {
          const isDescending = orderBy.startsWith('-');
          const field = isDescending ? orderBy.slice(1) : orderBy;
          url += `&order=${field}.${isDescending ? 'desc' : 'asc'}`;
        }
        
        console.log(`[Database] 🔍 Requête REST directe pour forum_posts: ${url}`);
        console.log(`[Database] 🔍 Variables: supabaseUrl=${supabaseUrl ? 'OK' : 'MANQUANT'}, supabaseAnonKey=${supabaseAnonKey ? 'OK (' + supabaseAnonKey.substring(0, 20) + '...)' : 'MANQUANT'}`);
        
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'apikey': supabaseAnonKey,
              'Authorization': `Bearer ${supabaseAnonKey}`,
              'Content-Type': 'application/json',
              'Prefer': 'count=exact'
            }
          });
          
          console.log(`[Database] 🔍 Réponse REST: status=${response.status}, ok=${response.ok}, headers=`, Object.fromEntries(response.headers.entries()));
          
          if (!response.ok) {
            const errorText = await response.text();
            console.error(`[Database] ❌ Erreur HTTP ${response.status}:`, errorText);
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
          }
          
          const data = await response.json();
          const countHeader = response.headers.get('content-range');
          const count = countHeader ? parseInt(countHeader.split('/')[1]) : data.length;
          
          console.log(`[Database] ✅ forum_posts (REST direct) - Récupéré ${data?.length || 0} lignes (count: ${count || 'N/A'})`);
          if (data && data.length > 0) {
            console.log(`[Database] 📋 IDs récupérés (${data.length}):`, data.map(p => p.id));
            console.log(`[Database] 📋 Titres récupérés:`, data.map(p => p.title));
          } else {
            console.warn(`[Database] ⚠️ Aucun post récupéré avec la requête REST directe !`);
          }
          
          // RETOURNER DIRECTEMENT - ne pas continuer avec Supabase client
          return data || [];
        } catch (restError) {
          console.error(`[Database] ❌ Erreur avec requête REST directe:`, restError);
          console.error(`[Database] ❌ Détails:`, {
            message: restError.message,
            stack: restError.stack,
            name: restError.name
          });
          // Fallback vers le client Supabase si la requête REST échoue
        }
      }
    }
    
    // Code normal pour les autres tables ou si REST direct échoue
    console.log(`[Database] ⚠️ tableName !== 'forum_posts' ou REST direct échoué - Utilisation du client Supabase (tableName: "${tableName}")`);
    const defaultLimit = tableName === 'forum_posts' ? 1000 : 1000;
    const finalLimit = limit !== null ? limit : defaultLimit;
    const actualLimit = tableName === 'forum_posts' ? Math.max(finalLimit, 1000) : finalLimit;
    
    // Utiliser select avec une limite explicite dans les options
    let query = supabase.from(tableName).select('*', { count: 'exact', head: false });

    // Appliquer les filtres
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        if (Array.isArray(value)) {
          if (value.length > 0) {
            query = query.in(key, value);
          }
        } else {
          query = query.eq(key, value);
        }
      }
    });

    // Appliquer le tri
    if (orderBy) {
      const isDescending = orderBy.startsWith('-');
      const field = isDescending ? orderBy.slice(1) : orderBy;
      query = query.order(field, { ascending: !isDescending });
    }

    // Appliquer la limite - TOUJOURS explicite pour éviter les problèmes
    query = query.limit(actualLimit);
    
    // Pour forum_posts, logger AVANT l'exécution pour vérifier
    if (tableName === 'forum_posts') {
      console.log(`[Database] 🔍 AVANT requête Supabase (fallback) - Limit: ${actualLimit}, Filtres:`, JSON.stringify(filters), `OrderBy:`, orderBy);
    }
    
    const { data, error, count } = await query;
    if (error) {
      console.error(`Error filtering ${tableName}:`, error);
      console.error(`Table: ${tableName}`, `Filters:`, filters, `Error details:`, error);
      throw error;
    }
    
    // Logger pour déboguer le forum
    if (tableName === 'forum_posts') {
      console.log(`[Database] ✅ ${tableName} - Récupéré ${data?.length || 0} lignes (count: ${count || 'N/A'}) avec filtres:`, filters);
      if (data && data.length > 0) {
        console.log(`[Database] 📋 IDs des posts récupérés (${data.length}):`, data.map(p => p.id));
        console.log(`[Database] 📋 Titres des posts récupérés:`, data.map(p => p.title));
      } else {
        console.warn(`[Database] ⚠️ Aucun post récupéré !`);
      }
    }
    
    return data || [];
  };

  return {
    /**
     * Lister toutes les entités (remplace base44.entities.EntityName.list)
     * @param {string} orderBy - Champ de tri (préfixé par '-' pour ordre décroissant)
     * @param {number} limit - Nombre maximum de résultats
     * @returns {Promise<Array>} Liste des entités
     */
    all: async (orderBy = null, limit = null) => {
      return filter({}, orderBy, limit);
    },

    /**
     * Alias pour all() (compatibilité avec base44)
     */
    list: async (orderBy = null, limit = null) => {
      return filter({}, orderBy, limit);
    },

    /**
     * Filtrer les entités
     */
    filter,

    /**
     * Obtenir une entité par ID
     */
    get: async (id) => {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        console.error(`Error getting ${tableName} by id ${id}:`, error);
        throw error;
      }
      return data;
    },

    /**
     * Créer une nouvelle entité
     */
    create: async (entity) => {
      const { data, error } = await supabase
        .from(tableName)
        .insert(entity)
        .select()
        .single();
      if (error) {
        console.error(`Error creating ${tableName}:`, error);
        throw error;
      }
      return data;
    },

    /**
     * Mettre à jour une entité
     */
    update: async (id, updates) => {
      // Valider l'ID
      if (!id || typeof id !== 'string') {
        console.warn(`Invalid ID for ${tableName}: ${id}`);
        return null; // Retourner null au lieu de lancer une erreur
      }
      
      // Si c'est un ID mock, retourner null silencieusement
      if (isMockId(id)) {
        // Ne pas logger pour éviter le spam, juste retourner null
        return null;
      }
      
      const { data, error } = await supabase
        .from(tableName)
        .update(updates)
        .eq('id', id)
        .select();
      
      if (error) {
        console.error(`Error updating ${tableName} ${id}:`, error);
        throw error;
      }
      
      // Si aucune ligne n'a été mise à jour, retourner null au lieu de lancer une erreur
      if (!data || data.length === 0) {
        // Ne logger que si ce n'est pas un ID mock (pour éviter le spam)
        if (!isMockId(id)) {
          console.warn(`No rows updated for ${tableName} with id ${id}`);
        }
        return null;
      }
      
      // Retourner la première ligne (ou toutes les lignes si plusieurs)
      return data.length === 1 ? data[0] : data;
    },

    /**
     * Supprimer une entité
     */
    delete: async (id) => {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);
      if (error) {
        console.error(`Error deleting ${tableName} ${id}:`, error);
        throw error;
      }
    },
  };
};

// Créer les services pour chaque entité
export const Course = createEntityService('courses');
export const Progress = createEntityService('progress');
export const Assessment = createEntityService('assessments');
export const Resume = createEntityService('resumes');
export const Certificate = createEntityService('certificates');
export const Lesson = createEntityService('lessons');
export const Enrollment = createEntityService('enrollments');
export const ForumPost = createEntityService('forum_posts');
export const ForumReply = createEntityService('forum_replies');
export const TeacherProfile = createEntityService('teacher_profiles');
export const Testimonial = createEntityService('testimonials');
export const UserProfile = createEntityService('user_profiles');

