import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translations from '../utils/i18n';

// Convertir notre structure de traductions en format i18next
const resources = {};
Object.keys(translations).forEach(lang => {
  resources[lang] = {
    translation: translations[lang]
  };
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // React échappe déjà les valeurs
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'franceprep_language',
    },
  });

export default i18n;

