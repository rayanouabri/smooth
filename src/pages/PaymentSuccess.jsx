import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/api/supabaseClient";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  
  const [step, setStep] = useState('verify');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Vérification en cours...');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    verifySession();
  }, []);

  const verifySession = async () => {
    try {
      if (!sessionId) {
        setStep('error');
        setMessage('Pas de session trouvée');
        return;
      }

      const { data: { user: authUser } } = await supabase.auth.getUser();
      
      if (authUser) {
        await markAsPremium(authUser.id);
        setUser(authUser);
        setStep('success');
      } else {
        setStep('signup');
      }
    } catch (error) {
      console.error('Error:', error);
      setStep('error');
      setMessage(error.message || 'Erreur lors de la vérification');
    }
  };

  const markAsPremium = async (userId) => {
    try {
      await supabase
        .from('user_profiles')
        .update({
          is_premium: true,
          subscription_status: 'active',
          premium_since: new Date().toISOString(),
        })
        .eq('id', userId);
    } catch (err) {
      console.error('Error marking as premium:', err);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError('');

    try {
      if (!formData.name || !formData.email || !formData.password) {
        throw new Error('Tous les champs sont obligatoires');
      }
      if (formData.password.length < 6) {
        throw new Error('Le mot de passe doit contenir au moins 6 caractères');
      }

      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: { full_name: formData.name },
        },
      });

      if (error) throw error;

      if (data.user) {
        await supabase.from('user_profiles').insert({
          id: data.user.id,
          email: formData.email,
          full_name: formData.name,
          is_premium: true,
          subscription_status: 'active',
          premium_since: new Date().toISOString(),
        });

        setUser(data.user);
        setStep('success');
      }
    } catch (error) {
      setFormError(error.message || 'Erreur lors de l\'inscription');
    } finally {
      setLoading(false);
    }
  };

  if (step === 'verify') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Vérification du paiement</h2>
            <p className="text-gray-600">{message}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-md">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-center text-white">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }} className="inline-block p-3 bg-white rounded-full mb-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </motion.div>
              <h1 className="text-2xl font-bold">Bienvenue Premium !</h1>
            </div>

            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-900 mb-2">✨ Accès activé</p>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>✓ Tous les cours Premium</li>
                    <li>✓ IA Sophie illimitée</li>
                    <li>✓ Support prioritaire</li>
                    <li>✓ Certificats professionnels</li>
                  </ul>
                </div>

                <p className="text-center text-gray-600 py-4">{user?.email || formData.email}</p>

                <Button onClick={() => navigate('/dashboard')} className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-6 font-semibold">
                  Accéder à mon Dashboard →
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  if (step === 'signup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
              <h1 className="text-2xl font-bold">Créer mon compte Premium</h1>
              <p className="text-blue-100 mt-1">Paiement confirmé ✓</p>
            </div>

            <CardContent className="p-8">
              {formError && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                  <p className="text-sm text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {formError}
                  </p>
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Votre nom complet</label>
                  <Input type="text" placeholder="Jean Dupont" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} disabled={loading} required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                  <Input type="email" placeholder="vous@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled={loading} required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Mot de passe</label>
                  <Input type="password" placeholder="••••••••" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} disabled={loading} required minLength={6} />
                  <p className="text-xs text-gray-500 mt-1">Min. 6 caractères</p>
                </div>

                <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-6 font-semibold">
                  {loading ? 'Création...' : 'Créer mon compte'}
                </Button>

                <Button type="button" variant="outline" className="w-full" onClick={() => navigate('/login')} disabled={loading}>
                  J'ai déjà un compte
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-0 shadow-lg">
        <CardContent className="p-12 text-center">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-red-900">Erreur</h2>
          <p className="text-red-700 mb-6">{message}</p>
          
          <div className="space-y-2">
            <Button onClick={() => navigate('/pricing')} className="w-full bg-red-500 text-white">
              Retour à la tarification
            </Button>
            <Button variant="outline" className="w-full" onClick={() => navigate('/')}>
              Accueil
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
