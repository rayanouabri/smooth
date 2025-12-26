import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated as checkAuthStatus, redirectToLogin } from "@/api/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Users, 
  ArrowRight,
  GraduationCap,
  Shield,
  HeartHandshake,
  Target,
  Clock,
  Zap,
  Star,
  MessageCircle,
  FileText,
  Briefcase,
  CreditCard,
  Globe,
  TrendingUp,
  Crown,
  Sparkles,
  Award,
  Building2
} from "lucide-react";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import ChatBot from "../components/ChatBot";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const authenticated = await checkAuthStatus();
    setIsAuthenticated(authenticated);
  };

  const testimonials = [
    {
      name: "Thomas",
      origin: "Étudiant Canadien",
      text: "Grâce à FrancePrepAcademy, j'ai pu m'installer en France en 2 semaines au lieu de 3 mois. Tout était géré pour moi, je n'ai eu qu'à signer les papiers.",
      rating: 5,
      photo: "👨‍🎓"
    },
    {
      name: "Daniela",
      origin: "Travailleuse internationale",
      text: "Le support WhatsApp 24/7 a été un game-changer. À chaque question, j'avais une réponse immédiate. Je recommande à 100%.",
      rating: 5,
      photo: "👩‍💼"
    },
    {
      name: "Ahmed",
      origin: "Entrepreneur",
      text: "L'ouverture de compte bancaire et la recherche de logement ont été gérées parfaitement. J'ai économisé des semaines de démarches.",
      rating: 5,
      photo: "👨‍💻"
    }
  ];

  const plans = [
    {
      name: "Découverte",
      price: "0€",
      description: "Pour explorer la plateforme",
      features: ["Accès limité aux cours", "Forum communautaire", "10 messages IA"],
      icon: "🎓",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Premium",
      price: "24,90€",
      description: "La réussite en autonomie",
      features: ["200+ formations", "IA illimitée", "Support prioritaire"],
      icon: "⚡",
      color: "from-blue-600 to-indigo-600",
      popular: true
    },
    {
      name: "Ultimate VIP",
      price: "89€",
      description: "Accompagnement personnalisé",
      features: ["Tout Premium +", "Conseiller dédié", "Aide administrative"],
      icon: "👑",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base px-6 py-2 border-0 shadow-xl">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Votre partenaire pour réussir en France
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              On vous accompagne dans{" "}
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                votre installation en France
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Que vous soyez en France ou que vous souhaitiez venir, nous simplifions toutes vos démarches administratives et vous guidons pas à pas dans votre intégration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {isAuthenticated ? (
                <Link to={createPageUrl("Dashboard")}>
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-2xl px-8 py-6 text-lg">
                    Accéder à mon espace
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              ) : (
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold shadow-2xl px-8 py-6 text-lg"
                  onClick={() => redirectToLogin(window.location.href)}
                >
                  Commencer gratuitement
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              )}
              <Link to={createPageUrl("Pricing")}>
                <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-indigo-900 font-bold px-8 py-6 text-lg backdrop-blur">
                  Voir nos offres
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Accès immédiat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>15,000+ étudiants accompagnés</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-0 text-base px-6 py-2">
              🎯 Notre mission
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Nous accompagnons les étudiants qui viennent en France
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'obtention du visa à l'ouverture de votre compte bancaire, nous gérons votre intégration de A à Z pour que vous puissiez vous concentrer sur l'essentiel : vos études et votre nouvelle vie en France.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Démarches administratives",
                description: "Visa, titre de séjour, CPAM, CAF... Nous vous guidons dans toutes vos démarches ou nous les faisons pour vous.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: GraduationCap,
                title: "Formation complète",
                description: "200+ cours pour maîtriser la vie étudiante en France : culture, administration, recherche d'emploi...",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: HeartHandshake,
                title: "Accompagnement personnalisé",
                description: "Un conseiller dédié vous suit personnellement et répond à toutes vos questions, 7j/7.",
                color: "from-amber-500 to-orange-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:shadow-xl transition-all text-center">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${item.color} mb-6 shadow-xl`}>
                      <item.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 text-base px-6 py-2">
              💰 Nos offres
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Choisissez la formule qui vous convient
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Du gratuit pour tester à l'accompagnement VIP complet, trouvez la solution parfaite pour votre projet en France.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full border-2 transition-all ${
                  plan.popular ? "border-blue-600 shadow-2xl scale-105" : "hover:shadow-xl"
                }`}>
                  <CardContent className="p-8">
                    {plan.popular && (
                      <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                        Le plus choisi
                      </Badge>
                    )}
                    <div className="text-center">
                      <div className="text-5xl mb-4">{plan.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold text-gray-900 mb-6">
                        {plan.price}
                        {plan.price !== "0€" && <span className="text-lg text-gray-600">/mois</span>}
                      </div>
                      <ul className="space-y-3 mb-6 text-left">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={createPageUrl("Pricing")}>
                        <Button className={`w-full ${
                          plan.popular 
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            : "bg-gray-900 hover:bg-gray-800"
                        } text-white`}>
                          {plan.price === "0€" ? "Commencer gratuitement" : "Découvrir"}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to={createPageUrl("Pricing")}>
              <Button variant="outline" size="lg" className="border-2 border-gray-300">
                Voir tous les détails des offres
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-0 text-base px-6 py-2">
              ⭐ Pourquoi nous faire confiance ?
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Nous définissons l'excellence de l'accompagnement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Notre engagement : vous accompagner avec professionnalisme, réactivité et bienveillance à chaque étape de votre installation en France.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Award, title: "Experts certifiés", desc: "Nos équipes maîtrisent parfaitement les démarches françaises" },
              { icon: Clock, title: "Réactivité garantie", desc: "Réponse sous 24h, traitement rapide de vos dossiers" },
              { icon: Shield, title: "Confidentialité totale", desc: "Vos données sont sécurisées et traitées avec discrétion" },
              { icon: TrendingUp, title: "Taux de réussite 100%", desc: "Tous nos clients ont réussi leur installation en France" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                      <item.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-0 text-base px-6 py-2">
              ⭐ Témoignages
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Ils nous ont fait confiance
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les retours de nos clients satisfaits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <div className="text-3xl mb-2">{testimonial.photo}</div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.origin}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border-0 px-6 py-2 text-base">
            🎯 Dernière étape
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Votre rêve français commence maintenant !
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté qui transforme des vies chaque jour. Commencez gratuitement, sans engagement.
          </p>

          {isAuthenticated ? (
            <Link to={createPageUrl("Dashboard")}>
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-6 text-lg shadow-2xl">
                Accéder à mon espace
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          ) : (
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-6 text-lg shadow-2xl"
              onClick={() => redirectToLogin(window.location.href)}
            >
              Commencer gratuitement
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Gratuit pour commencer</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Accès immédiat</span>
            </div>
          </div>
        </div>
      </section>

      <ChatBot />
    </div>
  );
}
