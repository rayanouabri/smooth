import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Settings, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "fpa_cookie_consent";
const COOKIE_CONSENT_VERSION = "1"; // Bump this to re-ask consent

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, can't be disabled
    analytics: false,
    functional: false,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.version === COOKIE_CONSENT_VERSION) {
          setPreferences(parsed.preferences);
          return; // Don't show banner
        }
      }
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } catch {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (prefs) => {
    try {
      localStorage.setItem(
        COOKIE_CONSENT_KEY,
        JSON.stringify({
          version: COOKIE_CONSENT_VERSION,
          preferences: prefs,
          timestamp: new Date().toISOString(),
        })
      );
    } catch {
      // localStorage not available
    }
    setIsVisible(false);
  };

  const acceptAll = () => {
    const allAccepted = { essential: true, analytics: true, functional: true };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const acceptEssentialOnly = () => {
    const essentialOnly = { essential: true, analytics: false, functional: false };
    setPreferences(essentialOnly);
    saveConsent(essentialOnly);
  };

  const saveCustom = () => {
    saveConsent(preferences);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[9999] p-4"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Main banner */}
          <div className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-xl flex-shrink-0 hidden sm:flex">
                <Cookie className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Nous respectons votre vie privée
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ce site utilise des cookies essentiels pour fonctionner. Nous pouvons aussi utiliser
                  des cookies d'analyse pour améliorer votre expérience.{" "}
                  <Link to="/privacypolicy" className="text-blue-600 hover:underline font-medium">
                    En savoir plus
                  </Link>
                </p>
              </div>
            </div>

            {/* Detail section */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-4 space-y-3 overflow-hidden"
                >
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Cookies essentiels</p>
                      <p className="text-xs text-gray-500">
                        Authentification, session, sécurité
                      </p>
                    </div>
                    <div className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                      Toujours actif
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Cookies d'analyse</p>
                      <p className="text-xs text-gray-500">
                        Statistiques anonymes d'utilisation
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences((p) => ({ ...p, analytics: e.target.checked }))
                        }
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Cookies fonctionnels</p>
                      <p className="text-xs text-gray-500">
                        Préférences de langue, thème
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={(e) =>
                          setPreferences((p) => ({ ...p, functional: e.target.checked }))
                        }
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <Button
                onClick={acceptAll}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium h-10"
              >
                <Check className="w-4 h-4 mr-1.5" />
                Tout accepter
              </Button>
              <Button
                onClick={acceptEssentialOnly}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium h-10"
              >
                Essentiels uniquement
              </Button>
              {showDetails ? (
                <Button
                  onClick={saveCustom}
                  variant="outline"
                  className="flex-1 border-blue-300 text-blue-700 hover:bg-blue-50 font-medium h-10"
                >
                  Enregistrer mes choix
                </Button>
              ) : (
                <Button
                  onClick={() => setShowDetails(true)}
                  variant="ghost"
                  className="flex-1 text-gray-500 hover:text-gray-700 font-medium h-10"
                >
                  <Settings className="w-4 h-4 mr-1.5" />
                  Personnaliser
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
