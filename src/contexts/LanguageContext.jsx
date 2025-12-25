import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTranslation } from '../utils/i18n';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Récupérer la langue sauvegardée ou détecter depuis le navigateur
    const saved = localStorage.getItem('franceprep_language');
    if (saved) return saved;
    
    const browserLang = navigator.language.split('-')[0];
    const supported = ['fr', 'en', 'es', 'ar', 'zh', 'pt', 'ru', 'de', 'it', 'ja', 'ko', 'hi', 'tr', 'vi', 'pl'];
    return supported.includes(browserLang) ? browserLang : 'fr';
  });

  useEffect(() => {
    localStorage.setItem('franceprep_language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => getTranslation(language, key);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

