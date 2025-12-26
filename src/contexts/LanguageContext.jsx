import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getTranslation } from '@/utils/i18n';

const LanguageContext = createContext();
const STORAGE_KEY = 'franceprep_language';
const FALLBACK_LANGUAGE = 'fr';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    // Vite SPA: window est dispo côté client, mais on reste défensif
    if (typeof window === 'undefined') return FALLBACK_LANGUAGE;
    return window.localStorage.getItem(STORAGE_KEY) || FALLBACK_LANGUAGE;
  });

  useEffect(() => {
    // Mettre à jour l'attribut lang du document
    document.documentElement.lang = language || FALLBACK_LANGUAGE;
  }, [language]);

  const setLanguage = useCallback((lang) => {
    const nextLang = lang || FALLBACK_LANGUAGE;
    setLanguageState(nextLang);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLang);
    } catch {
      // Ignore (ex: storage disabled)
    }
  }, []);

  const t = useCallback((key) => getTranslation(language || FALLBACK_LANGUAGE, key), [language]);

  const value = useMemo(() => ({
    language: language || FALLBACK_LANGUAGE,
    setLanguage,
    t,
  }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

