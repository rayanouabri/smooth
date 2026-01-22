/**
 * Validation de mot de passe sécurisée
 * Conforme aux standards OWASP (minimum 8 caractères, complexité requise)
 */

/**
 * Valide un mot de passe selon les critères de sécurité
 * @param {string} password - Le mot de passe à valider
 * @returns {{ isValid: boolean, errors: string[] }} - Résultat de la validation
 */
export const validatePassword = (password) => {
  const errors = [];

  // Minimum 8 caractères (recommandation OWASP)
  if (password.length < 8) {
    errors.push("Le mot de passe doit contenir au moins 8 caractères");
  }

  // Maximum 128 caractères (limite raisonnable)
  if (password.length > 128) {
    errors.push("Le mot de passe ne peut pas dépasser 128 caractères");
  }

  // Au moins une majuscule
  if (!/[A-Z]/.test(password)) {
    errors.push("Le mot de passe doit contenir au moins une majuscule");
  }

  // Au moins une minuscule
  if (!/[a-z]/.test(password)) {
    errors.push("Le mot de passe doit contenir au moins une minuscule");
  }

  // Au moins un chiffre
  if (!/[0-9]/.test(password)) {
    errors.push("Le mot de passe doit contenir au moins un chiffre");
  }

  // Au moins un caractère spécial
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push("Le mot de passe doit contenir au moins un caractère spécial (!@#$%^&*...)");
  }

  // Vérifier les mots de passe communs (liste basique)
  const commonPasswords = [
    'password', '12345678', '123456789', 'qwerty', 'abc123',
    'password123', 'admin123', 'letmein', 'welcome', 'monkey'
  ];
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push("Ce mot de passe est trop commun, veuillez en choisir un autre");
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Calcule la force d'un mot de passe (0-4)
 * @param {string} password - Le mot de passe à évaluer
 * @returns {number} - Score de force (0 = très faible, 4 = très fort)
 */
export const getPasswordStrength = (password) => {
  if (!password) return 0;

  let strength = 0;

  // Longueur
  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;

  // Complexité
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) strength++;

  return Math.min(strength, 4);
};

/**
 * Retourne un message descriptif de la force du mot de passe
 * @param {number} strength - Score de force (0-4)
 * @returns {string} - Message descriptif
 */
export const getPasswordStrengthLabel = (strength) => {
  const labels = {
    0: "Très faible",
    1: "Faible",
    2: "Moyen",
    3: "Fort",
    4: "Très fort"
  };
  return labels[strength] || "Très faible";
};

/**
 * Retourne la couleur associée à la force du mot de passe
 * @param {number} strength - Score de force (0-4)
 * @returns {string} - Classe Tailwind CSS
 */
export const getPasswordStrengthColor = (strength) => {
  const colors = {
    0: "bg-red-500",
    1: "bg-orange-500",
    2: "bg-yellow-500",
    3: "bg-blue-500",
    4: "bg-green-500"
  };
  return colors[strength] || "bg-gray-500";
};
