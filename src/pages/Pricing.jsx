import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Zap, Shield, Sparkles } from "lucide-react";
import { isAuthenticated as checkAuthStatus, redirectToLogin, me } from "@/api/auth";
import { createCheckout } from "@/api/functions";
import { createPageUrl } from "../utils";
import { Link } from "react-router-dom";
import ChatBot from "../components/ChatBot";
import { motion } from "framer-motion";

export default function Pricing() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    checkAuth();
    // Recharger le statut utilisateur quand on revient sur la page (après paiement)
    const handleFocus = () => {
      if (isAuthenticated) {
        checkAuth();
      }
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const checkAuth = async () => {
    const authenticated = await checkAuthStatus();
    setIsAuthenticated(authenticated);
    
    if (authenticated) {
      // Utiliser me() qui récupère automatiquement le profil avec is_premium
      const fullUserData = await me();
      console.log('Pricing - User data:', fullUserData);
      console.log('Pricing - is_premium:', fullUserData?.is_premium);
      console.log('Pricing - subscription_status:', fullUserData?.subscription_status);
      
      if (fullUserData) {
        setUser(fullUserData);
      }
    }
  };

  // Price IDs Stripe - Remplacez par vos vrais Price IDs
  const STRIPE_PRICES = {
    monthly: 'price_1ShgKyEKmsqeO7fH3eOB1TV5', // Exemple: price_12345...
    annual: 'price_1SiEWLEKmsqeO7fH2UqWhy0L',   // Exemple: price_67890...
  };

  const plans = [
    {
      name: "Gratuit",
      price: 0,
      priceAnnual: 0,
      tagline: "Pour découvrir",
      description: "Idéal pour tester la plateforme",
      features: [
        { text: "Guides d'intégration gratuits", included: true },
        { text: "Aperçu des services Premium", included: true },
        { text: "Forum communautaire en lecture", included: true },
        { text: "Chatbot IA (10 questions/jour)", included: true },
        { text: "Accès complet aux services Premium", included: false },
        { text: "IA illimitée avec historique", included: false },
        { text: "Support prioritaire 24/7", included: false },
        { text: "Conciergerie VIP", included: false },
      ],
      cta: "Commencer gratuitement",
      highlighted: false,
      popular: false,
      icon: "🎓",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Premium",
      price: 29,
      priceAnnual: 24,
      tagline: "Le plus populaire",
      description: "Accès complet à tous les services",
      features: [
        { text: "Tous les guides Premium débloqués", included: true },
        { text: "IA illimitée avec historique", included: true },
        { text: "Participation active au forum", included: true },
        { text: "Support prioritaire par email", included: true },
        { text: "Nouveaux guides en avant-première", included: true },
        { text: "Téléchargement des supports PDF", included: true },
        { text: "Conciergerie VIP", included: false },
        { text: "Gestion RDV préfecture", included: false },
      ],
      cta: "Passer à Premium",
      ctaPremium: "Gérer mon abonnement",
      highlighted: true,
      popular: true,
      icon: "⚡",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Conciergerie VIP",
      price: 599,
      priceAnnual: 599,
      tagline: "Service sur mesure",
      description: "On gère votre intégration de A à Z",
      features: [
        { text: "Accès total Premium inclus", included: true },
        { text: "On gère vos RDV en préfecture", included: true },
        { text: "Recherche de logement personnalisée", included: true },
        { text: "Ouverture de compte bancaire", included: true },
        { text: "Support WhatsApp 24/7", included: true },
        { text: "Conseiller dédié", included: true },
        { text: "Suivi personnalisé de votre dossier", included: true },
        { text: "Assistance complète administrative", included: true },
      ],
      cta: "Découvrir la Conciergerie VIP",
      ctaPremium: "Gérer mon abonnement",
      highlighted: false,
      popular: false,
      icon: "👑",
      color: "from-amber-500 to-yellow-500",
      isVip: true
    }
  ];

  // Vérifier si l'utilisateur est déjà Premium
  const isPremium = user?.is_premium === true || user?.subscription_status === 'active';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-orange-500 text-white border-0 text-sm px-4 py-2">
              💰 Tarifs transparents
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choisissez votre{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                formule idéale
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Des prix simples et justes. Sans engagement, annulation à tout moment.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full p-1 border border-white/20">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white text-blue-900 shadow-lg"
                    : "text-white hover:text-blue-100"
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  billingCycle === "annual"
                    ? "bg-white text-blue-900 shadow-lg"
                    : "text-white hover:text-blue-100"
                }`}
              >
                Annuel
                <Badge className="bg-green-500 text-white text-xs">-17%</Badge>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Plans Grid - 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
                <Card
                className={`relative h-full ${
                  plan.highlighted
                    ? "border-4 border-blue-600 shadow-2xl shadow-blue-200"
                    : plan.isVip
                    ? "border-4 border-amber-400 shadow-2xl shadow-amber-200"
                    : "border-2 border-gray-200 hover:shadow-xl transition-shadow"
                }`}
              >
                {plan.popular && !isPremium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 shadow-lg">
                      <Star className="w-3 h-3 mr-1 inline" />
                      Le plus choisi
                    </Badge>
                  </div>
                )}
                
                {plan.price > 0 && isPremium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 shadow-lg">
                      <Check className="w-3 h-3 mr-1 inline" />
                      Plan Actif
                    </Badge>
                  </div>
                )}

                <CardHeader className={
                  plan.highlighted 
                    ? "bg-gradient-to-br from-blue-50 to-indigo-50" 
                    : plan.isVip
                    ? "bg-gradient-to-br from-amber-50 to-yellow-50"
                    : "bg-gray-50"
                }>
                  <div className="text-center">
                    <div className="text-5xl mb-4">{plan.icon}</div>
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-end justify-center gap-2">
                        <span className="text-5xl font-bold text-gray-900">
                          {plan.isVip ? plan.price : (billingCycle === "annual" ? plan.priceAnnual : plan.price)}€
                        </span>
                        {plan.price > 0 && !plan.isVip && (
                          <span className="text-gray-600 text-lg mb-2">/mois</span>
                        )}
                        {plan.isVip && (
                          <span className="text-gray-600 text-lg mb-2">/service</span>
                        )}
                      </div>
                      {plan.price > 0 && !plan.isVip && billingCycle === "annual" && (
                        <p className="text-sm text-green-600 font-medium mt-2">
                          Économisez {(plan.price - plan.priceAnnual) * 12}€/an
                        </p>
                      )}
                      {plan.price === 0 && (
                        <p className="text-sm text-gray-600 mt-2">Toujours gratuit</p>
                      )}
                      {plan.isVip && (
                        <p className="text-sm text-amber-600 font-medium mt-2">À partir de</p>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-8 pb-8">
                  {plan.highlighted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                      <Shield className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-green-900 text-sm">Satisfait ou remboursé</div>
                        <div className="text-xs text-green-700">Garantie qualité</div>
                      </div>
                    </div>
                  )}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="bg-green-100 rounded-full p-1 mt-0.5">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                        ) : (
                          <div className="bg-gray-100 rounded-full p-1 mt-0.5">
                            <X className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? "text-gray-700 font-medium" : "text-gray-400"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.isVip ? (
                    <Link to={createPageUrl("ConciergerieVIP")}>
                      <Button
                        className="w-full text-lg py-6 font-bold bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-xl"
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className={`w-full text-lg py-6 font-bold ${
                        plan.highlighted
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}
                      disabled={isProcessing}
                      onClick={async () => {
                        // Si plan Premium et utilisateur déjà Premium
                        if (plan.price > 0 && isPremium) {
                          window.location.href = '/profile?tab=subscription';
                          return;
                        }

                        if (!isAuthenticated) {
                          redirectToLogin(window.location.href);
                        } else if (plan.price > 0) {
                          setIsProcessing(true);
                          try {
                            const priceId = billingCycle === 'monthly' ? STRIPE_PRICES.monthly : STRIPE_PRICES.annual;

                            // Validation locale du Price ID
                            if (!priceId || !String(priceId).startsWith('price_')) {
                              throw new Error('Price ID non configuré. Allez sur Stripe → Products → Pricing, copiez le "Price ID" (price_...) et mettez-le dans STRIPE_PRICES.');
                            }
                            
                            const response = await createCheckout({
                              priceId: priceId,
                              userId: user?.id,
                              userEmail: user?.email,
                              successUrl: window.location.origin + '/PaymentSuccess',
                              cancelUrl: window.location.origin + '/pricing',
                            });

                            // Redirection vers Stripe Checkout
                            if (response?.url) {
                              window.location.href = response.url;
                            }
                          } catch (error) {
                            console.error('Erreur paiement:', error);
                            alert('❌ ' + (error.message || 'Erreur inconnue. Consultez CONFIGURATION_STRIPE.md'));
                          } finally {
                            setIsProcessing(false);
                          }
                        }
                      }}
                    >
                      {isProcessing ? '⏳ Chargement...' : (plan.price > 0 && isPremium ? plan.ctaPremium : plan.cta)}
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Shield, title: "Satisfait ou remboursé", desc: "Garantie qualité" },
            { icon: Zap, title: "Accès immédiat", desc: "Commencez en 30 secondes" },
            { icon: Sparkles, title: "Sans engagement", desc: "Annulez à tout moment" }
          ].map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                    <badge.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
                  <p className="text-sm text-gray-600">{badge.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Questions fréquentes 💬
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Puis-je changer de formule à tout moment ?",
                a: "Oui ! Vous pouvez passer de Gratuit à Premium instantanément, ou annuler votre abonnement Premium à tout moment. Aucun engagement."
              },
              {
                q: "Y a-t-il une garantie satisfait ou remboursé ?",
                a: "Absolument. Si Premium ne vous convient pas, nous vous remboursons intégralement, sans poser de questions."
              },
              {
                q: "Que se passe-t-il si j'annule Premium ?",
                a: "Vous gardez l'accès Premium jusqu'à la fin de votre période payée. Ensuite, vous repassez automatiquement au plan Gratuit et conservez tout votre historique."
              },
              {
                q: "Le paiement est-il sécurisé ?",
                a: "100%. Nous utilisons Stripe, le leader mondial des paiements en ligne, pour garantir la sécurité de vos transactions. Vos données bancaires ne sont jamais stockées sur nos serveurs."
              },
              {
                q: "Y a-t-il des réductions pour les étudiants ?",
                a: "Oui ! Contactez-nous avec votre carte étudiante pour bénéficier de 20% de réduction sur l'abonnement Premium."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à transformer votre vie en France ? 🇫🇷
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez 15,000+ étudiants qui ont déjà réussi leur installation
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-6 text-lg shadow-2xl"
              onClick={() => {
                if (!isAuthenticated) {
                  redirectToLogin(window.location.href);
                }
              }}
            >
              Commencer gratuitement maintenant
            </Button>
            <p className="mt-4 text-blue-200 text-sm">
              ✓ Sans carte bancaire • ✓ Accès instantané • ✓ Support francophone
            </p>
          </div>
        </motion.div>
      </div>

      <ChatBot />
    </div>
  );
}