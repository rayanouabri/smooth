import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/api/supabaseClient";
import { signUp, me as getCurrentUser } from "@/api/auth";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  const [status, setStatus] = useState('verifying'); // verifying, success, error, signup
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setStatus('error');
      setError('No session ID found');
      return;
    }
    verifyPayment();
  }, [sessionId]);

  const verifyPayment = async () => {
    try {
      setStatus('verifying');
      
      // Vérifier la session Stripe
      const stripeKey = import.meta.env.VITE_STRIPE_SECRET_KEY;
      if (!stripeKey) {
        throw new Error('Stripe key not configured');
      }

      const response = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sessionId}`, {
        headers: {
          Authorization: `Bearer ${stripeKey}`,
        },
      });

      const session = await response.json();

      if (!response.ok || !session.payment_status === 'paid') {
        throw new Error('Payment not verified');
      }

      // Récupérer l'utilisateur actuellement connecté
      const currentUser = await getCurrentUser();
      
      if (currentUser) {
        // Utilisateur déjà connecté - mettre à jour son profil comme premium
        await updateUserToPremium(currentUser.id, session.customer_email);
        setUser(currentUser);
        setStatus('success');
      } else {
        // Utilisateur non connecté - lui demander de s'inscrire
        setFormData({ ...formData, email: session.customer_email || '' });
        setStatus('signup');
      }
    } catch (err) {
      console.error('Error verifying payment:', err);
      setStatus('error');
      setError(err.message || 'Failed to verify payment');
    }
  };

  const updateUserToPremium = async (userId, email) => {
    try {
      const { error } = await supabase
        .from('user_profiles')
        .update({
          is_premium: true,
          subscription_status: 'active',
          premium_since: new Date().toISOString(),
        })
        .eq('id', userId);

      if (error) throw error;
    } catch (err) {
      console.error('Error updating user to premium:', err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!formData.email || !formData.password || !formData.name) {
        throw new Error('All fields are required');
      }

      if (formData.password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      // Créer le compte
      const { data, error: signupError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (signupError) throw signupError;

      if (data.user) {
        // Créer le profil utilisateur
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert([
            {
              id: data.user.id,
              email: formData.email,
              full_name: formData.name,
              is_premium: true,
              subscription_status: 'active',
              premium_since: new Date().toISOString(),
            },
          ]);

        if (profileError && profileError.code !== 'PGRST116') {
          throw profileError;
        }

        setUser(data.user);
        setStatus('success');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  const handleSkipSignup = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        {status === 'verifying' && (
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <Loader className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-2">Vérification du paiement...</h2>
              <p className="text-gray-600">Veuillez patienter</p>
            </CardContent>
          </Card>
        )}

        {status === 'success' && (
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6"
              >
                <CheckCircle className="w-12 h-12 text-green-500" />
              </motion.div>
              
              <h1 className="text-4xl font-bold mb-2">Paiement confirmé !</h1>
              <p className="text-green-100">Bienvenue dans FrancePrep Premium</p>
            </div>

            <CardContent className="p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-3">Accès Premium activé ✨</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✅ Tous les cours Premium débloqués</li>
                    <li>✅ IA Sophie illimitée</li>
                    <li>✅ Support prioritaire</li>
                    <li>✅ Certificats professionnels</li>
                  </ul>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-gray-600 mb-6">
                    {user?.email || formData.email}
                  </p>
                  
                  <Button
                    onClick={() => navigate('/dashboard')}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-6 text-lg font-semibold"
                  >
                    Accéder au Dashboard
                  </Button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        )}

        {status === 'signup' && (
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <CardTitle>Créer votre compte Premium</CardTitle>
              <p className="text-blue-100 mt-2">Votre paiement a été confirmé</p>
            </CardHeader>

            <CardContent className="p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                  <AlertCircle className="w-5 h-5 inline mr-2" />
                  {error}
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Votre nom</label>
                  <Input
                    type="text"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="vous@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mot de passe</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    minLength={6}
                  />
                  <p className="text-xs text-gray-500 mt-1">Minimum 6 caractères</p>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-6 font-semibold"
                  >
                    {loading ? 'Création en cours...' : 'Créer mon compte Premium'}
                  </Button>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleSkipSignup}
                  disabled={loading}
                >
                  Déjà un compte ? Se connecter
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {status === 'error' && (
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-12 text-center">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-2 text-red-600">Erreur de vérification</h2>
              <p className="text-gray-600 mb-6">{error}</p>
              
              <div className="space-y-3">
                <Button
                  onClick={() => navigate('/pricing')}
                  className="w-full bg-blue-500 text-white"
                >
                  Retour à la tarification
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => navigate('/dashboard')}
                >
                  Aller au Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
}
