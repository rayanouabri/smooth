import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { signInWithEmail, signUpWithEmail, signInWithGoogle, resetPassword } from "@/api/auth";
import logger from "@/utils/logger";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Mail, Lock, ArrowRight } from "lucide-react";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";

export default function Login() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const redirectUrl = searchParams.get('redirect') || createPageUrl('Dashboard');
  
  const [isLogin, setIsLogin] = useState(true);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      if (isLogin) {
        await signInWithEmail(email, password);
        // Redirection après connexion réussie
        window.location.href = redirectUrl;
      } else {
        // Inscription
        const result = await signUpWithEmail(email, password, { full_name: fullName });
        logger.debug('Signup result:', result);
        
        // Afficher message de confirmation
        setSuccessMessage(
          "Inscription réussie ! Un email de confirmation vous a été envoyé. Veuillez vérifier votre boîte mail pour valider votre compte."
        );
        setEmail("");
        setPassword("");
        setFullName("");
        
        // Réinitialiser le loading immédiatement après succès
        setIsLoading(false);
        
        // Auto-redirection après 5 secondes
        setTimeout(() => {
          setIsLogin(true);
          setSuccessMessage("");
        }, 5000);
      }
    } catch (err) {
      logger.error('Auth error:', err);
      setError(err.message || "Une erreur s'est produite lors de la connexion");
      setIsLoading(false); // S'assurer que le loading est désactivé en cas d'erreur
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      await resetPassword(email);
      setSuccessMessage("Un email pour réinitialiser votre mot de passe vous a été envoyé. Veuillez vérifier votre boîte mail.");
      setEmail("");
      setTimeout(() => {
        setShowResetPassword(false);
        setSuccessMessage("");
      }, 4000);
    } catch (err) {
      setError(err.message || "Une erreur s'est produite");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    setError("");
    try {
      await signInWithGoogle();
      // La redirection se fera automatiquement via OAuth
    } catch (err) {
      setError(err.message || "Une erreur s'est produite lors de la connexion Google");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <Card className="border-2 shadow-2xl">
          <CardHeader className="text-center space-y-4 pb-8">
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-4 rounded-2xl">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {isLogin ? "Connexion" : "Inscription"}
              </CardTitle>
              <CardDescription className="mt-2 text-base">
                {isLogin 
                  ? "Accédez à votre espace FrancePrep Academy"
                  : "Créez votre compte gratuitement"
                }
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Message de succès d'inscription */}
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm"
              >
                {successMessage}
              </motion.div>
            )}

            {/* Formulaire de réinitialisation de mot de passe */}
            {showResetPassword ? (
              <>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Réinitialiser votre mot de passe</h3>
                  <form onSubmit={handlePasswordReset} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          type="email"
                          placeholder="votre@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-12 pl-10"
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold h-12"
                    >
                      {isLoading ? "Chargement..." : "Envoyer le lien de réinitialisation"}
                    </Button>
                  </form>
                </div>
                <button
                  onClick={() => {
                    setShowResetPassword(false);
                    setEmail("");
                    setError("");
                  }}
                  className="w-full text-center text-sm text-cyan-600 hover:text-cyan-700 font-semibold"
                >
                  ← Retour
                </button>
              </>
            ) : (
              <>
                {/* Bouton Google */}
                <Button
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                  className="w-full bg-white text-gray-700 border-2 border-gray-300 hover:bg-gray-50 font-semibold h-12"
                  variant="outline"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continuer avec Google
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-gray-500">Ou</span>
                  </div>
                </div>

                {/* Formulaire Email/Password */}
                <form onSubmit={handleEmailAuth} className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Nom complet</label>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Jean Dupont"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required={!isLogin}
                          className="h-12"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="email"
                        placeholder="votre@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium text-gray-700">Mot de passe</label>
                      {isLogin && (
                        <button
                          type="button"
                          onClick={() => setShowResetPassword(true)}
                          className="text-xs text-cyan-600 hover:text-cyan-700 font-semibold"
                        >
                          Oublié ?
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="h-12 pl-10"
                        minLength={6}
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold h-12"
                  >
                    {isLoading ? (
                      "Chargement..."
                    ) : (
                      <>
                        {isLogin ? "Se connecter" : "Créer mon compte"}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Basculer entre Login/Signup */}
                <div className="text-center text-sm text-gray-600">
                  {isLogin ? (
                    <>
                      Pas encore de compte ?{" "}
                      <button
                        onClick={() => setIsLogin(false)}
                        className="text-cyan-600 hover:text-cyan-700 font-semibold"
                      >
                        S'inscrire gratuitement
                      </button>
                    </>
                  ) : (
                    <>
                      Déjà un compte ?{" "}
                      <button
                        onClick={() => setIsLogin(true)}
                        className="text-cyan-600 hover:text-cyan-700 font-semibold"
                      >
                        Se connecter
                      </button>
                    </>
                  )}
                </div>

                {/* Lien retour */}
                <div className="text-center pt-4 border-t">
                  <Link
                    to={createPageUrl("Home")}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    ← Retour à l'accueil
                  </Link>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

