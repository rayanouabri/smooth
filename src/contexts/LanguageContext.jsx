import React, { createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/config'; // Initialiser i18next

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // Mettre à jour l'attribut lang du document
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const setLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      language: i18n.language, 
      setLanguage, 
      t,
      i18n 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

