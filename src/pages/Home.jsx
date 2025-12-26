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
  Building2,
  Plane,
  MapPin,
  Brain,
  Network,
  AlertCircle
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
      features: ["10 messages IA", "Cours de base", "Accès Forum"],
      icon: "🎓",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Premium",
      price: "24,90€",
      description: "Choix de la communauté",
      features: ["IA ILLIMITÉE", "Accès à tous les cours (200+)", "Forum VIP", "Centre d'aide complet"],
      icon: "⚡",
      color: "from-blue-600 to-indigo-600",
      popular: true
    },
    {
      name: "Ultimate VIP",
      price: "89€",
      description: "Accompagnement personnalisé",
      features: ["Accompagnement individuel humain", "Aide au remplissage des dossiers", "Mentorat carrière"],
      icon: "👑",
      color: "from-amber-500 to-yellow-500"
    },
    {
      name: "Pack Expert",
      price: "Sur devis",
      description: "On le fait pour vous",
      features: ["Résolution d'un problème critique", "Intervention par un expert", "Service sur mesure"],
      icon: "🔧",
      color: "from-purple-500 to-indigo-500",
      isExpert: true
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
            className="text-center max-w-5xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Soyez accompagné en France.
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Réussissez-y.
              </span>
              </h1>
              
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto">
              La seule plateforme qui combine IA experte, formations culturelle et administrative et accompagnement humain et communauté solidaire pour maîtriser vos papiers, votre carrière et les codes français.
              </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {/* Carte GAUCHE */}
                  <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="h-full border-2 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 bg-white/20 rounded-full mb-4">
                      <Plane className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Je prépare mon départ</h3>
                    <p className="text-blue-200 mb-4">Visa, Logement, Campus France</p>
                    <Button 
                      className="bg-white text-indigo-900 hover:bg-blue-100 font-bold"
                      onClick={() => {
                        if (!isAuthenticated) {
                          redirectToLogin(window.location.href);
                        } else {
                          window.location.href = createPageUrl("Dashboard");
                        }
                      }}
                    >
                      Commencer
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
            </motion.div>

              {/* Carte DROITE */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full border-2 border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all cursor-pointer hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 bg-white/20 rounded-full mb-4">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Je suis déjà en France</h3>
                    <p className="text-blue-200 mb-4">CAF, Titre de séjour, Jobs, Codes Sociaux</p>
                    <Button 
                      className="bg-white text-indigo-900 hover:bg-blue-100 font-bold"
                      onClick={() => {
                        if (!isAuthenticated) {
                          redirectToLogin(window.location.href);
                        } else {
                          window.location.href = createPageUrl("Dashboard");
                        }
                      }}
                    >
                      Accéder maintenant
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
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

      {/* IA Section - Spectaculaire */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-base px-6 py-2 border-0">
                🤖 Intelligence Artificielle
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Votre Assistant IA 24/7 : L'Expert dans votre poche
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Un document à décrypter ? Une lettre de motivation à rédiger ? Une question sur la CAF à 2h du matin ? Notre IA spécialisée analyse vos besoins et vous répond instantanément.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: FileText, text: "Décryptage de documents administratifs en temps réel" },
                  { icon: MessageCircle, text: "Réponses instantanées à toutes vos questions" },
                  { icon: Zap, text: "Rédaction assistée de lettres et CV personnalisés" },
                  { icon: Clock, text: "Disponible 24h/24, 7j/7, partout dans le monde" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                  >
                    <div className="bg-gradient-to-br from-cyan-400 to-blue-400 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-blue-100">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Demo visuelle du chat */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-6 border-2 border-white/20 shadow-2xl">
                {/* Effet glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                      <p className="font-bold">Assistant FrancePrep</p>
                    <p className="text-xs text-green-300 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      En ligne
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                    <div className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-md rounded-xl rounded-tr-none p-3 text-sm">
                    💡 Bonjour ! Comment puis-je vous aider aujourd'hui ?
                  </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-xl rounded-tl-none p-3 ml-6 text-sm text-right">
                      Comment remplir ma demande CAF ?
                  </div>
                    <div className="bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-md rounded-xl p-3 text-sm">
                      📋 Pour la CAF, vous aurez besoin de :
                      <ul className="mt-2 text-xs space-y-1 text-blue-100 ml-4">
                      <li>• Titre de séjour</li>
                      <li>• Justificatif de domicile</li>
                      <li>• RIB français</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                    {["💼 Trouver un job", "🏠 Chercher un logement", "📝 Rédiger un CV"].map((btn, i) => (
                      <button key={i} className="text-xs bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition-colors">
                        {btn}
                  </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 Piliers de l'Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 text-base px-6 py-2">
              ⭐ Les 3 Piliers de l'Excellence
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              La Valeur que nous apportons
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "L'Administration",
                subtitle: "La Sérénité",
                description: "Ne faites plus d'erreurs coûteuses. Nous gérons vos dossiers (Visa, CAF, CPAM) pour vous garantir la paix d'esprit.",
                color: "from-blue-500 to-cyan-500",
                features: ["Gestion complète des dossiers", "Vérification avant envoi", "Suivi personnalisé"]
              },
              {
                icon: GraduationCap,
                title: "La Culture",
                subtitle: "Les Codes",
                description: "Maîtrisez l'implicite français. Nos cours vous apprennent à réseauter, à vous comporter en entreprise et à vous faire des amis.",
                color: "from-purple-500 to-pink-500",
                features: ["Codes sociaux français", "Réseautage efficace", "Comportement professionnel"]
              },
              {
                icon: Network,
                title: "La Communauté",
                subtitle: "Le Réseau",
                description: "Rejoignez 15 000+ étudiants. Ne restez plus seul, partagez les bons plans et trouvez vos futurs colocataires.",
                color: "from-amber-500 to-orange-500",
                features: ["Forum actif", "Partage d'expériences", "Réseau solidaire"]
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:shadow-xl transition-all text-center">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${pillar.color} mb-6 shadow-xl`}>
                      <pillar.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pillar.title}</h3>
                    <Badge className="mb-4 bg-gray-100 text-gray-700">{pillar.subtitle}</Badge>
                    <p className="text-gray-600 leading-relaxed mb-6">{pillar.description}</p>
                    <ul className="space-y-2 text-left">
                      {pillar.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grille Tarifaire */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 text-base px-6 py-2">
              💰 Nos Offres
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Choisissez la formule qui vous convient
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Du gratuit pour tester à l'accompagnement VIP complet, trouvez la solution parfaite pour votre projet en France.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full border-2 transition-all ${
                  plan.popular ? "border-blue-600 shadow-2xl scale-105" : plan.isExpert ? "border-purple-400" : "hover:shadow-xl"
                }`}>
                  <CardContent className="p-6">
                    {plan.popular && (
                      <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white w-full justify-center">
                        Choix de la communauté
                      </Badge>
                    )}
                    <div className="text-center">
                      <div className="text-4xl mb-3">{plan.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
                      <div className="text-3xl font-bold text-gray-900 mb-4">
                        {plan.price}
                        {plan.price !== "0€" && plan.price !== "Sur devis" && <span className="text-base text-gray-600">/mois</span>}
                      </div>
                      <ul className="space-y-2 mb-6 text-left text-sm">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to={plan.isExpert ? createPageUrl("ExpertOneShot") : createPageUrl("Pricing")}>
                        <Button className={`w-full ${
                          plan.popular 
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            : plan.isExpert
                            ? "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
                            : "bg-gray-900 hover:bg-gray-800"
                        } text-white`}>
                          {plan.price === "0€" ? "Commencer gratuitement" : plan.isExpert ? "Demander un devis" : "Découvrir"}
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

      {/* Section Urgence */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <AlertCircle className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Un refus de visa ? Un dossier bloqué ? Ne perdez pas de temps.
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Nos experts interviennent rapidement pour résoudre vos problèmes critiques
            </p>
            <Link to={createPageUrl("ExpertOneShot")}>
              <Button size="lg" className="bg-white text-red-600 hover:bg-orange-50 font-bold px-8 py-6 text-lg shadow-2xl">
                Demander une intervention urgente
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "15,000+", label: "étudiants accompagnés", icon: Users },
              { number: "95%", label: "de réussite aux visas", icon: Award },
              { number: "120", label: "pays représentés", icon: Globe }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-10 h-10 text-blue-600" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
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
