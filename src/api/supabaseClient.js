import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Vérifier si localStorage est disponible (peut être désactivé en navigation privée sur certains navigateurs)
function isLocalStorageAvailable() {
  try {
    const testKey = '__supabase_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: isLocalStorageAvailable(),
    autoRefreshToken: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
    storage: isLocalStorageAvailable() ? undefined : {
      // Fallback en mémoire si localStorage n'est pas disponible (mode privé Safari, etc.)
      _data: {},
      getItem(key) { return this._data[key] || null; },
      setItem(key, value) { this._data[key] = value; },
      removeItem(key) { delete this._data[key]; },
    },
  },
});

