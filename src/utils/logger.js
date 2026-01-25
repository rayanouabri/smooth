/**
 * Logger personnalisé qui désactive automatiquement les logs en production
 * Remplace console.log pour éviter l'exposition de données sensibles et améliorer les performances
 */

const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

/**
 * Logger pour les messages de debug (uniquement en développement)
 */
export const log = (...args) => {
  if (isDevelopment) {
    console.log(...args);
  }
};

/**
 * Logger pour les warnings (toujours actif mais peut être filtré en production)
 */
export const warn = (...args) => {
  if (isDevelopment) {
    console.warn(...args);
  }
  // En production, on peut logger vers un service externe (Sentry, etc.)
  if (isProduction) {
    // TODO: Envoyer vers service de logging externe
    // sendToLoggingService('warn', args);
  }
};

/**
 * Logger pour les erreurs (toujours actif, critique)
 */
export const error = (...args) => {
  // Les erreurs sont toujours loggées, même en production
  console.error(...args);
  
  // En production, envoyer vers un service de monitoring
  if (isProduction) {
    // TODO: Envoyer vers service de monitoring (Sentry, LogRocket, etc.)
    // sendToMonitoringService('error', args);
  }
};

/**
 * Logger pour les informations (uniquement en développement)
 */
export const info = (...args) => {
  if (isDevelopment) {
    console.info(...args);
  }
};

/**
 * Logger pour les traces de debug (uniquement en développement)
 */
export const debug = (...args) => {
  if (isDevelopment) {
    console.debug(...args);
  }
};

// Export par défaut avec toutes les méthodes
const logger = {
  log,
  warn,
  error,
  info,
  debug
};

export default logger;
// Export nommé pour compatibilité
export { logger };
