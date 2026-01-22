import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/api/supabaseClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Lock, ArrowRight } from "lucide-react";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { validatePassword, getPasswordStrength, getPasswordStrengthLabel, getPasswordStrengthColor } from "@/utils/password-validation";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    // Validation sécurisée du mot de passe
    const validation = validatePassword(password);
    if (!validation.isValid) {
      setError(validation.errors[0]); // Afficher la première erreur
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;

      setSuccessMessage("Votre mot de passe a été réinitialisé avec succès !");
      setPassword("");
      setConfirmPassword("");

      // Redirection vers la page de connexion après 2 secondes
      setTimeout(() => {
        navigate(createPageUrl("Login"));
      }, 2000);
    } catch (err) {
      setError(err.message || "Une erreur s'est produite lors de la réinitialisation du mot de passe");
    } finally {
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
                Réinitialiser le mot de passe
              </CardTitle>
              <CardDescription className="mt-2 text-base">
                Créez un nouveau mot de passe sécurisé
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm"
              >
                {successMessage}
              </motion.div>
            )}

            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordStrength(getPasswordStrength(e.target.value));
                    }}
                    required
                    className="h-12 pl-10"
                    minLength={8}
                    disabled={isLoading}
                  />
                  {password && (
                    <div className="mt-2">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${getPasswordStrengthColor(passwordStrength)}`}
                            style={{ width: `${(passwordStrength / 4) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-600">
                          {getPasswordStrengthLabel(passwordStrength)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Minimum 8 caractères avec majuscule, minuscule, chiffre et caractère spécial
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Confirmer le mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="h-12 pl-10"
                    minLength={8}
                    disabled={isLoading}
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
                    Réinitialiser le mot de passe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            <div className="text-center pt-4 border-t">
              <button
                onClick={() => navigate(createPageUrl("Login"))}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                ← Retour à la connexion
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
