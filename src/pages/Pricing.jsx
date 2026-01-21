import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Star, Zap, Shield, Sparkles, Crown, Users, ArrowRight, Lock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { isAuthenticated as checkAuthStatus, redirectToLogin, me } from "@/api/auth";
import { createCheckout } from "@/api/functions";
import { createPageUrl } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import ChatBot from "../components/ChatBot";
import { motion } from "framer-motion";

export default function Pricing() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
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
      const fullUserData = await me();
      if (fullUserData) {
        setUser(fullUserData);
      }
    }
  };

  // Price IDs Stripe - Remplacez par vos vrais Price IDs
  const STRIPE_PRICES = {
    premium: {
      monthly: 'price_1ShgKyEKmsqeO7fH3eOB1TV5',
      annual: 'price_1SiEWLEKmsqeO7fH2UqWhy0L',
    },
    ultimate: {
      monthly: 'price_1SieSjEKmsqeO7fHFiHhd2g6',
      annual: 'price_1SieV1EKmsqeO7fHo3wLXwo7',
    }
  };

  const plans = [
    {
      name: "DÃ©couverte",
      price: 0,
      priceAnnual: 0,
      tagline: "Pour explorer la plateforme",
      description: "IdÃ©al pour tester nos services",
      features: [
        { text: "AccÃ¨s limitÃ© Ã  une sÃ©lection de cours", included: true },
        { text: "AccÃ¨s au Forum communautaire", included: true },
        { text: "Max 10 messages avec l'IA Assistant", included: true },
        { text: "AccÃ¨s illimitÃ© aux 200+ formations", included: false },
        { text: "IA Assistante illimitÃ©e 24h/24", included: false },
        { text: "AccÃ¨s prioritaire au Forum & Centre d'aide", included: false },
        { text: "Outils de suivi de dossier", included: false },
        { text: "Accompagnement individuel personnalisÃ©", included: false },
      ],
      cta: "S'inscrire gratuitement",
      highlighted: false,
      popular: false,
      icon: "ðŸŽ“",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Premium",
      price: 24.90,
      priceAnnual: 21.20,
      tagline: "La rÃ©ussite en toute autonomie",
      description: "Le choix des Ã©tudiants",
      features: [
        { text: "AccÃ¨s illimitÃ© aux 200+ formations", included: true },
        { text: "IA Assistante illimitÃ©e 24h/24", included: true },
        { text: "AccÃ¨s prioritaire au Forum & Centre d'aide", included: true },
        { text: "Outils de suivi de dossier", included: true },
        { text: "TÃ©lÃ©chargement des supports PDF", included: true },
        { text: "Nouveaux guides en avant-premiÃ¨re", included: true },
        { text: "Accompagnement individuel personnalisÃ©", included: false },
        { text: "Aide pas-Ã -pas pour remplir vos dossiers", included: false },
      ],
      cta: "Devenir Premium",
      ctaPremium: "GÃ©rer mon abonnement",
      highlighted: true,
      popular: true,
      icon: "âš¡",
      color: "from-blue-600 to-indigo-600"
    },
    {
      name: "Ultimate VIP",
      price: 89.00,
      priceAnnual: 75.65,
      tagline: "On ne vous lÃ¢che pas la main",
      description: "Accompagnement personnalisÃ© complet",
      features: [
        { text: "Accompagnement individuel personnalisÃ©", included: true },
        { text: "Aide pas-Ã -pas pour remplir vos dossiers : Visa, SÃ©curitÃ© Sociale (CPAM), CAF (APL)", included: true },
        { text: "VÃ©rification humaine de vos documents avant envoi", included: true },
        { text: "Support rÃ©actif pour vos questions administratives complexes", included: true },
        { text: "StratÃ©gie personnalisÃ©e de recherche de Job / Alternance", included: true },
        { text: "Tous les avantages Premium inclus", included: true },
        { text: "Support WhatsApp prioritaire", included: true },
        { text: "Conseiller dÃ©diÃ©", included: true },
      ],
      cta: "RÃ©server mon accompagnement",
      ctaPremium: "GÃ©rer mon abonnement",
      highlighted: true,
      popular: false,
      icon: "ðŸ‘‘",
      color: "from-amber-500 via-yellow-500 to-amber-600",
      isVip: true,
      glow: true
    },
    {
      name: "Service Expert 'ClÃ© en main'",
      price: 180,
      priceAnnual: 180,
      tagline: "On le fait Ã  votre place",
      description: "Intervention ponctuelle sur mesure",
      features: [
        { text: "Un blocage sur un dossier ? Une urgence ?", included: true },
        { text: "Nos experts prennent le relais de A Ã  Z", included: true },
        { text: "Sur une dÃ©marche prÃ©cise", included: true },
        { text: "Visa, Litige Logement, Dossier CAF complexe...", included: true },
        { text: "Intervention rapide et efficace", included: true },
        { text: "Devis personnalisÃ© selon votre besoin", included: true },
      ],
      cta: "Demander une intervention",
      highlighted: false,
      popular: false,
      icon: "ðŸ”§",
      color: "from-purple-500 to-indigo-500",
      isOneShot: true
    }
  ];

  const userIsUltimateVIP = isUltimateVIP(user);

  const handlePlanClick = async (plan) => {
    if (plan.isOneShot) {
      // Rediriger vers la page dédiée Expert One-Shot
      navigate(createPageUrl("ExpertOneShot"));
      return;
    }

    if (plan.price === 0) {
      // Plan gratuit - rediriger vers l'inscription
      if (!isAuthenticated) {
        redirectToLogin(window.location.href);
      } else {
        navigate(createPageUrl("Dashboard"));
      }
      return;
    }

    // Si utilisateur a dÃ©jÃ  Ultimate VIP et clique sur Ultimate VIP
    if (plan.name === "Ultimate VIP" && userIsUltimateVIP) {
      navigate('/profile?tab=subscription');
      return;
    }

    // Si utilisateur a Premium et clique sur Premium
    if (plan.name === "Premium" && userIsPremium && !userIsUltimateVIP) {
      navigate('/profile?tab=subscription');
      return;
    }

    // Permettre Ã  un Premium de passer Ã  Ultimate VIP
    if (plan.name === "Ultimate VIP" && userIsPremium && !userIsUltimateVIP) {
      // Continuera avec le checkout pour passer Ã  Ultimate VIP
    }

    if (!isAuthenticated) {
      redirectToLogin(window.location.href);
      return;
    }

    setIsProcessing(true);
    try {
      // DÃ©terminer le Price ID selon le plan
      let priceId;
      if (plan.name === "Ultimate VIP") {
        priceId = billingCycle === 'monthly' ? STRIPE_PRICES.ultimate.monthly : STRIPE_PRICES.ultimate.annual;
      } else {
        priceId = billingCycle === 'monthly' ? STRIPE_PRICES.premium.monthly : STRIPE_PRICES.premium.annual;
      }

      if (!priceId || !String(priceId).startsWith('price_')) {
        throw new Error('Price ID non configurÃ©. Allez sur Stripe â†’ Products â†’ Pricing, copiez le "Price ID" (price_...) et mettez-le dans STRIPE_PRICES.');
      }
      
      const response = await createCheckout({
        priceId: priceId,
        userId: user?.id,
        userEmail: user?.email,
        successUrl: window.location.origin + '/PaymentSuccess',
        cancelUrl: window.location.origin + '/pricing',
      });

      if (response?.url) {
        window.location.href = response.url;
      }
    } catch (error) {
      console.error('Erreur paiement:', error);
      alert('âŒ ' + (error.message || 'Erreur inconnue. Consultez CONFIGURATION_STRIPE.md'));
    } finally {
      setIsProcessing(false);
    }
  };

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
              ðŸ’° Tarifs transparents
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choisissez votre{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                formule idÃ©ale
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Des prix simples et justes. Sans engagement, annulation Ã  tout moment. RÃ©siliation en 1 clic.
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
                <Badge className="bg-green-500 text-white text-xs">-15%</Badge>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Plans Grid - 4 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full transition-all ${
                  plan.highlighted && plan.popular
                    ? "border-4 border-blue-600 shadow-2xl shadow-blue-200 scale-105"
                    : plan.isVip && plan.glow
                    ? "border-4 border-amber-400 shadow-2xl shadow-amber-200/50 ring-4 ring-amber-400/20"
                    : plan.isOneShot
                    ? "border-2 border-purple-300 hover:shadow-xl transition-shadow"
                    : "border-2 border-gray-200 hover:shadow-xl transition-shadow"
                }`}
              >
                {plan.popular && !userIsPremium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1 shadow-lg">
                      <Star className="w-3 h-3 mr-1 inline" />
                      Choix des Ã©tudiants
                    </Badge>
                  </div>
                )}

                {plan.isVip && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-amber-400 to-yellow-400 text-gray-900 px-4 py-1 shadow-lg font-bold">
                      <Crown className="w-3 h-3 mr-1 inline" />
                      VIP
                    </Badge>
                  </div>
                )}
                
                {plan.price > 0 && !plan.isOneShot && userIsPremium && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 shadow-lg">
                      <Check className="w-3 h-3 mr-1 inline" />
                      Plan Actif
                    </Badge>
                  </div>
                )}

                <CardHeader className={
                  plan.highlighted && plan.popular
                    ? "bg-gradient-to-br from-blue-50 to-indigo-50" 
                    : plan.isVip
                    ? "bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-50"
                    : plan.isOneShot
                    ? "bg-gradient-to-br from-purple-50 to-indigo-50"
                    : "bg-gray-50"
                }>
                  <div className="text-center">
                    <div className="text-5xl mb-4">{plan.icon}</div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600 mb-1 font-medium">{plan.tagline}</p>
                    <p className="text-xs text-gray-500 mb-4">{plan.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex items-end justify-center gap-2">
                        <span className="text-4xl md:text-5xl font-bold text-gray-900">
                          {plan.isOneShot ? plan.price : (billingCycle === "annual" ? plan.priceAnnual : plan.price)}â‚¬
                        </span>
                        {plan.price > 0 && !plan.isOneShot && (
                          <span className="text-gray-600 text-lg mb-2">/mois</span>
                        )}
                        {plan.isOneShot && (
                          <span className="text-gray-600 text-lg mb-2">/service</span>
                        )}
                      </div>
                      {plan.price > 0 && !plan.isOneShot && billingCycle === "annual" && (
                        <p className="text-sm text-green-600 font-medium mt-2">
                          Ã‰conomisez {((plan.price - plan.priceAnnual) * 12).toFixed(0)}â‚¬/an
                        </p>
                      )}
                      {plan.price === 0 && (
                        <p className="text-sm text-gray-600 mt-2">Toujours gratuit</p>
                      )}
                      {plan.isOneShot && (
                        <p className="text-sm text-purple-600 font-medium mt-2">Ã€ partir de</p>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-8 pb-8">

                  {plan.isVip && (
                    <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-3">
                      <Crown className="w-6 h-6 text-amber-600 flex-shrink-0" />
                      <div>
                        <div className="font-bold text-amber-900 text-sm">Accompagnement Premium</div>
                        <div className="text-xs text-amber-700">Support humain dÃ©diÃ©</div>
                      </div>
                    </div>
                  )}

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                        ) : (
                          <div className="bg-gray-100 rounded-full p-1 mt-0.5 flex-shrink-0">
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

                  <Button
                    className={`w-full ${
                      plan.isVip || plan.isOneShot 
                        ? "text-xs sm:text-sm md:text-base py-6 sm:py-7 md:py-8 min-h-[60px] sm:min-h-[70px]" 
                        : "text-base md:text-lg py-6"
                    } font-bold whitespace-normal break-words ${
                      plan.highlighted && plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl"
                        : plan.isVip
                        ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white shadow-xl"
                        : plan.isOneShot
                        ? "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white shadow-xl"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                    disabled={isProcessing && !plan.isOneShot}
                    onClick={() => handlePlanClick(plan)}
                  >
                    {isProcessing && !plan.isOneShot ? (
                      'â³ Chargement...'
                    ) : (
                      <>
                        <span className="block">
                          {plan.name === "Ultimate VIP" && userIsPremium && !userIsUltimateVIP 
                            ? "Passer Ã  Ultimate VIP" 
                            : plan.name === "Premium" && userIsPremium && !userIsUltimateVIP 
                            ? plan.ctaPremium 
                            : plan.name === "Ultimate VIP" && userIsUltimateVIP
                            ? plan.ctaPremium
                            : plan.price > 0 && !plan.isOneShot && userIsPremium 
                            ? plan.ctaPremium 
                            : plan.cta}
                        </span>
                        {plan.isOneShot && <ArrowRight className="w-4 h-4 ml-2 inline" />}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Section d'explication des offres */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Comprendre nos offres
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* DÃ©couverte */}
              <div className="border-l-4 border-gray-400 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">ðŸŽ“</span>
                  <h3 className="text-xl font-bold text-gray-900">Offre DÃ©couverte</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Parfait pour dÃ©couvrir la plateforme sans engagement. AccÃ©dez Ã  une sÃ©lection de cours gratuits, 
                  participez au forum communautaire et testez notre IA Assistant avec 10 messages gratuits.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>IdÃ©al pour :</strong> Les nouveaux arrivants qui souhaitent explorer nos services avant de s'engager.
                </p>
              </div>

              {/* Premium */}
              <div className="border-l-4 border-blue-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">âš¡</span>
                  <h3 className="text-xl font-bold text-gray-900">Offre Premium</h3>
                  <Badge className="bg-blue-600 text-white">Le plus choisi</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  AccÃ¨s illimitÃ© Ã  toutes nos formations (200+), IA Assistant disponible 24h/24, accÃ¨s prioritaire 
                  au forum et outils de suivi de dossier. La formule parfaite pour rÃ©ussir en toute autonomie.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>IdÃ©al pour :</strong> Les Ã©tudiants autonomes qui veulent accÃ©der Ã  tous nos contenus et ressources.
                </p>
              </div>

              {/* Ultimate VIP */}
              <div className="border-l-4 border-amber-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">ðŸ‘‘</span>
                  <h3 className="text-xl font-bold text-gray-900">Ultimate VIP</h3>
                  <Badge className="bg-amber-500 text-white">Premium</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Accompagnement personnalisÃ© complet avec un expert dÃ©diÃ©. Aide pour remplir vos dossiers (Visa, CPAM, CAF), 
                  vÃ©rification de documents, support rÃ©actif et stratÃ©gie personnalisÃ©e pour trouver un job ou une alternance. 
                  <strong> On ne vous lÃ¢che pas la main.</strong>
                </p>
                <p className="text-sm text-gray-500">
                  <strong>IdÃ©al pour :</strong> Ceux qui veulent un accompagnement humain personnalisÃ© Ã  chaque Ã©tape.
                </p>
              </div>

              {/* Expert One-Shot */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">ðŸ”§</span>
                  <h3 className="text-xl font-bold text-gray-900">Service Expert 'ClÃ© en main'</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Vous avez un blocage spÃ©cifique ou une urgence ? Nos experts prennent le relais de A Ã  Z sur une dÃ©marche 
                  prÃ©cise. On le fait Ã  votre place : Visa, Litige Logement, Dossier CAF complexe, etc.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>IdÃ©al pour :</strong> Une intervention ponctuelle et rapide sur un dossier prÃ©cis.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            { icon: Shield, title: "Paiement Stripe sÃ©curisÃ©", desc: "Vos donnÃ©es bancaires sont protÃ©gÃ©es" },
            { icon: Zap, title: "RÃ©siliation en 1 clic", desc: "Annulez votre abonnement Ã  tout moment" },
            { icon: Sparkles, title: "Sans engagement", desc: "Aucun engagement de durÃ©e" }
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
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Questions frÃ©quentes ðŸ’¬
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Est-ce sans engagement ?",
                a: "Oui, absolument ! Tous nos abonnements (Premium et Ultimate VIP) sont sans engagement. Vous pouvez rÃ©silier en 1 clic Ã  tout moment depuis votre profil, sans frais de rÃ©siliation. Aucun engagement de durÃ©e, vous Ãªtes libre de partir quand vous voulez."
              },
              {
                q: "Comment se passe l'accompagnement individuel avec Ultimate VIP ?",
                a: "Avec l'offre Ultimate VIP, vous avez accÃ¨s Ã  un conseiller dÃ©diÃ© qui vous accompagne pas Ã  pas. Il vous aide Ã  remplir vos dossiers (Visa, CPAM, CAF), vÃ©rifie vos documents avant envoi, rÃ©pond Ã  vos questions administratives complexes et vous aide Ã  trouver un job ou une alternance avec une stratÃ©gie personnalisÃ©e. Vous pouvez le contacter par email ou WhatsApp et il vous rÃ©pond dans les plus brefs dÃ©lais."
              },
              {
                q: "Puis-je passer de Premium Ã  Ultimate VIP ?",
                a: "Oui, absolument ! Si vous avez dÃ©jÃ  un abonnement Premium, vous pouvez passer Ã  Ultimate VIP Ã  tout moment. Le changement se fait instantanÃ©ment et vous bÃ©nÃ©ficiez immÃ©diatement de tous les avantages de l'accompagnement personnalisÃ©. Le prix de votre abonnement sera ajustÃ© au prorata."
              },
              {
                q: "Puis-je changer de formule Ã  tout moment ?",
                a: "Oui ! Vous pouvez passer de Gratuit Ã  Premium ou Ultimate VIP instantanÃ©ment, ou passer d'une formule Ã  l'autre selon vos besoins. Vous pouvez aussi annuler votre abonnement Ã  tout moment depuis votre profil."
              },
              {
                q: "Que se passe-t-il si j'annule mon abonnement ?",
                a: "Vous gardez l'accÃ¨s Premium/Ultimate VIP jusqu'Ã  la fin de votre pÃ©riode payÃ©e. Ensuite, vous repassez automatiquement au plan DÃ©couverte (gratuit) et conservez tout votre historique, vos cours suivis et vos donnÃ©es. Rien n'est perdu !"
              },
              {
                q: "Le paiement est-il sÃ©curisÃ© ?",
                a: "100%. Nous utilisons Stripe, le leader mondial des paiements en ligne, pour garantir la sÃ©curitÃ© de vos transactions. Vos donnÃ©es bancaires ne sont jamais stockÃ©es sur nos serveurs et sont cryptÃ©es selon les normes les plus strictes de l'industrie."
              },
              {
                q: "Y a-t-il des rÃ©ductions pour les Ã©tudiants ?",
                a: "Oui ! Contactez-nous Ã  contact@franceprepacademy.fr avec votre carte Ã©tudiante pour bÃ©nÃ©ficier de 20% de rÃ©duction sur l'abonnement Premium. Cette rÃ©duction s'applique aussi Ã  Ultimate VIP."
              },
              {
                q: "Quelle est la diffÃ©rence entre Premium et Ultimate VIP ?",
                a: "Premium vous donne accÃ¨s Ã  tous nos contenus (200+ formations) et Ã  l'IA illimitÃ©e. Ultimate VIP inclut tout cela PLUS un accompagnement humain personnalisÃ© avec un conseiller dÃ©diÃ© qui vous aide Ã  remplir vos dossiers, vÃ©rifie vos documents et vous guide dans toutes vos dÃ©marches administratives."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-gray-200 rounded-lg px-4 mb-4">
                <AccordionTrigger className="text-left font-bold text-gray-900 hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              PrÃªt Ã  transformer votre vie en France ? ðŸ‡«ðŸ‡·
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communautÃ© d'Ã©tudiants qui rÃ©ussissent leur installation en France
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-6 text-lg shadow-2xl"
              onClick={() => {
                if (!isAuthenticated) {
                  redirectToLogin(window.location.href);
                } else {
                  navigate(createPageUrl("Dashboard"));
                }
              }}
            >
              Commencer gratuitement maintenant
            </Button>
            <p className="mt-4 text-blue-200 text-sm">
              âœ“ Sans carte bancaire â€¢ âœ“ AccÃ¨s instantanÃ© â€¢ âœ“ Support francophone â€¢ âœ“ Sans engagement
            </p>
          </div>
        </motion.div>
      </div>

      <ChatBot />
    </div>
  );
}
