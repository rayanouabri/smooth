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
  HeartHandshake,
  Target,
  Clock,
  Star,
  MessageCircle,
  FileText,
  Briefcase,
  Globe,
  Award,
  Building2,
  Plane,
  MapPin,
  BookOpen,
  Video,
  PlayCircle,
  Award as AwardIcon,
  Shield,
  TrendingUp,
  Smile,
  HandHeart,
  Coffee,
  Home as HomeIcon,
  Bot,
  Languages
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
      text: "Grâce à FrancePrepAcademy, j'ai pu m'installer en France en 2 semaines au lieu de 3 mois. Les tutoriels sont clairs et pratiques, et l'accompagnement est incroyable.",
      rating: 5,
      photo: "👨‍🎓"
    },
    {
      name: "Daniela",
      origin: "Travailleuse internationale",
      text: "Les tutoriels sont excellents et très pratiques. J'ai appris énormément sur la culture française et les démarches administratives. Je recommande vivement !",
      rating: 5,
      photo: "👩‍💼"
    },
    {
      name: "Ahmed",
      origin: "Entrepreneur",
      text: "L'ouverture de compte bancaire et la recherche de logement ont été expliquées parfaitement. J'ai économisé des semaines de démarches grâce aux tutoriels.",
      rating: 5,
      photo: "👨‍💻"
    }
  ];

  const plans = [
    {
      name: "Découverte",
      price: "0€",
      description: "Pour explorer la plateforme",
      features: ["5 messages IA / mois", "Tutoriels de base", "Accès Forum"],
      icon: "🎓",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Premium",
      price: "24,90€",
      description: "Choix de la communauté",
      features: ["IA ILLIMITÉE", "Accès à tous les tutoriels (200+)", "Forum VIP", "Centre d'aide complet"],
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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Design moderne et élégant */}
      <section className="relative min-h-screen flex items-start justify-center pt-12 pb-4 bg-gradient-to-b from-white via-indigo-50/30 to-white overflow-hidden">
        {/* Décoration moderne */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-2 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-0 text-sm font-medium px-5 py-2.5 shadow-lg">
                <HeartHandshake className="w-4 h-4" />
                Votre partenaire de confiance pour réussir en France
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-2 leading-tight tracking-tight"
            >
              Bienvenue en France,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                on vous accompagne
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed max-w-4xl mx-auto font-light"
            >
              De vos papiers administratifs à la maîtrise de la culture française. Profitez d'un accompagnement sur mesure : tutoriels administratifs et culturels, profs particuliers, IA d'assistance 24/7, experts dédiés à vos démarches administratives, et une communauté soudée pour une intégration réussie.
            </motion.p>

            {/* 4 Piliers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-5 text-sm"
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                <span className="text-lg">🏛️</span>
                <span className="font-medium text-gray-700">Admin & Logement</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                <span className="text-lg">🗣️</span>
                <span className="font-medium text-gray-700">Langue & Culture</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                <span className="text-lg">🤖</span>
                <span className="font-medium text-gray-700">IA Intégrée</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm">
                <span className="text-lg">🤝</span>
                <span className="font-medium text-gray-700">Communauté</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-7 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
                onClick={() => {
                  if (!isAuthenticated) {
                    redirectToLogin(window.location.href);
                  } else {
                    window.location.href = createPageUrl("Dashboard");
                  }
                }}
              >
                Lancer mon intégration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link to={createPageUrl("ExpertOneShot")}>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-indigo-400 px-10 py-7 text-lg font-semibold hover:bg-gray-50 transition-all">
                  Besoin d'un expert ? (Conciergerie)
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Une communauté d'étudiants motivés</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">Sans engagement</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="font-medium">200+ tutoriels disponibles</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-sm font-medium px-5 py-2.5 shadow-lg">
              <HeartHandshake className="w-4 h-4" />
              Accompagnement personnalisé
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Une personne dédiée selon votre abonnement
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Avec nos formules Premium et Ultimate VIP, profitez d'un accompagnement personnalisé et de la réalisation de vos démarches administratives par nos experts.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-purple-200 bg-white shadow-xl hover:shadow-2xl transition-all overflow-hidden relative">
                <div className="relative h-64 bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-50 flex items-end justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300 rounded-full blur-2xl"></div>
                  </div>
                  <div className="relative z-10 w-full h-full flex items-end justify-center pb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop&crop=faces" 
                      alt="Étudiant et assistant en conversation"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Un assistant à votre écoute</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Selon votre abonnement, vous bénéficiez d'une personne dédiée qui vous accompagne dans toutes vos démarches : CAF, CPAM, Visa, Titre de séjour, recherche d'emploi...
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Réponses rapides à vos questions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Vérification de vos documents</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Aide au remplissage des formulaires</span>
                    </li>
                  </ul>
                  <Link to={createPageUrl("Pricing")}>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                      Voir les formules
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-2 border-indigo-200 bg-white shadow-xl hover:shadow-2xl transition-all overflow-hidden relative">
                <div className="relative h-64 bg-gradient-to-br from-indigo-100 via-blue-50 to-cyan-50 flex items-end justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-indigo-300 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 left-10 w-40 h-40 bg-cyan-300 rounded-full blur-2xl"></div>
                  </div>
                  <div className="relative z-10 w-full h-full flex items-end justify-center pb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop&crop=faces" 
                      alt="Expert travaillant sur des documents administratifs"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl shadow-lg">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">On fait vos démarches pour vous</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    Avec Ultimate VIP et le Pack Expert, nos experts réalisent vos démarches administratives de A à Z. Vous n'avez qu'à signer, on s'occupe du reste.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Gestion complète de vos dossiers</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Dépôt et suivi des demandes</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Intervention rapide en cas de problème</span>
                    </li>
                  </ul>
                  <Link to={createPageUrl("ExpertOneShot")}>
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                      Découvrir les services
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" 
                alt="Marie, étudiante mexicaine"
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
              />
              <div>
                <p className="text-lg font-semibold text-gray-900">Marie, étudiante mexicaine</p>
                <p className="text-sm text-gray-600">Ultimate VIP</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg italic leading-relaxed">
              "Mon assistante a rempli ma demande CAF pour moi, vérifié tous mes documents et m'a guidée pour trouver un logement. 
              Je n'ai eu qu'à signer, tout était fait ! C'est un gain de temps énorme."
            </p>
            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section : Deux parcours - Design moderne */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <Badge className="mb-4 inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0 text-sm font-medium px-5 py-2">
              <Target className="w-4 h-4" />
              Commencez ici
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Par où commencer ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Choisissez votre situation et découvrez comment nous pouvons vous aider
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-indigo-50/30">
                <CardContent className="p-10">
                  <div className="inline-flex p-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Plane className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Je prépare mon départ</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Vous êtes encore dans votre pays et vous préparez votre arrivée en France.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {["Demande de visa étudiant", "Recherche de logement", "Inscription Campus France", "Préparation administrative"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    onClick={() => {
                      if (!isAuthenticated) {
                        redirectToLogin(window.location.href);
                      } else {
                        window.location.href = createPageUrl("Dashboard");
                      }
                    }}
                  >
                    Commencer ma préparation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-rose-300 hover:shadow-2xl transition-all duration-300 group bg-gradient-to-br from-white to-rose-50/30">
                <CardContent className="p-10">
                  <div className="inline-flex p-5 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Je suis déjà en France</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Vous êtes arrivé en France et vous avez besoin d'aide pour vos démarches.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {["Demande CAF (APL)", "Titre de séjour / Préfecture", "Recherche d'emploi", "Comprendre les codes sociaux"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold py-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                    onClick={() => {
                      if (!isAuthenticated) {
                        redirectToLogin(window.location.href);
                      } else {
                        window.location.href = createPageUrl("Dashboard");
                      }
                    }}
                  >
                    Accéder aux tutoriels
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section IA - Design moderne */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-indigo-50 via-purple-50/50 to-pink-50 relative overflow-hidden">
        {/* Décoration subtile */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-sm font-medium px-5 py-2.5 shadow-lg">
                <MessageCircle className="w-4 h-4" />
                Assistant Intelligent
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                Votre assistante Sophie disponible
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> 24h/24</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light">
                Besoin d'aide immédiate ? Notre assistante IA Sophie répond à toutes vos questions sur les démarches administratives, les tutoriels et la culture française, à tout moment et partout.
              </p>
              
              <div className="space-y-3 mb-6">
                {[
                  { icon: FileText, text: "Décryptage de documents administratifs en temps réel" },
                  { icon: MessageCircle, text: "Réponses instantanées à toutes vos questions" },
                  { icon: Clock, text: "Disponible 24h/24, 7j/7, partout dans le monde" },
                  { icon: Shield, text: "Informations fiables et vérifiées par nos experts" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium pt-2">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
                onClick={() => {
                  const chatButton = document.querySelector('[class*="fixed bottom-6 right-6"]');
                  if (chatButton) {
                    chatButton.click();
                  }
                }}
              >
                Parler avec Sophie
                <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Demo visuelle du chat - Design moderne */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
                {/* Effet glow subtil */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-3xl blur-xl opacity-30"></div>
                
                <div className="relative">
                  {/* Header du chat */}
                  <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-200">
                    <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl">👩‍💼</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-lg">Sophie</p>
                      <p className="text-sm text-green-600 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        En ligne • Répond instantanément
                      </p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="space-y-3 mb-5">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                      <p className="text-sm text-gray-800">
                        💡 Bonjour ! Je suis Sophie, votre assistante. Comment puis-je vous aider aujourd'hui ?
                      </p>
                    </div>
                    <div className="bg-gray-100 rounded-2xl rounded-tr-sm p-4 ml-8 shadow-sm">
                      <p className="text-sm text-gray-800">
                        Comment remplir ma demande CAF ?
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl rounded-tl-sm p-4 shadow-sm">
                      <p className="text-sm text-gray-800 mb-2">
                        📋 Pour la CAF, vous aurez besoin de :
                      </p>
                      <ul className="text-xs text-gray-700 space-y-1 ml-4">
                        <li>• Titre de séjour valide</li>
                        <li>• Justificatif de domicile</li>
                        <li>• RIB d'une banque française</li>
                        <li>• Attestation de scolarité ou contrat de travail</li>
                      </ul>
                    </div>
                  </div>

                  {/* Quick replies */}
                  <div className="flex gap-2 flex-wrap">
                    {["💼 Trouver un job", "🏠 Chercher un logement", "📝 Rédiger un CV"].map((btn, i) => (
                      <button key={i} className="text-xs bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 px-4 py-2 rounded-full transition-all border border-purple-100">
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

      {/* Section : Nos tutoriels par catégorie */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-0 text-base px-6 py-2">
              <GraduationCap className="w-4 h-4 mr-2 inline" />
              Tutoriels complets
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plus de 200 tutoriels pour maîtriser la vie en France
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des tutoriels pratiques et complets, conçus par des experts, pour chaque étape de votre intégration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: FileText,
                title: "Administration",
                description: "CAF, CPAM, Visa, Titre de séjour... Gérer toutes vos démarches avec confiance.",
                count: "50+ tutoriels",
                color: "bg-blue-100 text-blue-700",
                iconColor: "text-blue-600"
              },
              {
                icon: Users,
                title: "Professeurs particuliers",
                description: "Apprenez le français avec des profs natifs. Cours particuliers personnalisés pour parler comme un local.",
                count: "Professeurs natifs",
                color: "bg-purple-100 text-purple-700",
                iconColor: "text-purple-600",
                linkTo: "Teachers"
              },
              {
                icon: Briefcase,
                title: "Carrière",
                description: "CV, entretiens, réseautage. Développez votre carrière professionnelle en France.",
                count: "30+ tutoriels",
                color: "bg-amber-100 text-amber-700",
                iconColor: "text-amber-600"
              },
              {
                icon: Globe,
                title: "Culture & Codes",
                description: "Comprenez les codes implicites français et intégrez-vous facilement.",
                count: "35+ tutoriels",
                color: "bg-green-100 text-green-700",
                iconColor: "text-green-600"
              },
              {
                icon: Building2,
                title: "Logement",
                description: "Trouver un logement, comprendre les contrats, ouvrir un compte bancaire.",
                count: "25+ tutoriels",
                color: "bg-rose-100 text-rose-700",
                iconColor: "text-rose-600"
              },
              {
                icon: Shield,
                title: "Santé",
                description: "CPAM, mutuelle, remboursements. Maîtrisez le système de santé français.",
                count: "20+ tutoriels",
                color: "bg-indigo-100 text-indigo-700",
                iconColor: "text-indigo-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full border border-gray-200 hover:shadow-lg transition-all bg-white">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-xl ${item.color} mb-4`}>
                      <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <Badge variant="outline" className="mb-3 text-xs">{item.count}</Badge>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                    <Link to={createPageUrl(item.linkTo || "Courses")} className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                      {item.linkTo ? "Voir les professeurs" : "Voir les tutoriels"}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to={createPageUrl("Courses")}>
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6">
                Explorer tous les tutoriels (200+)
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section : Pourquoi nous choisir */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir FrancePrepAcademy ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une approche complète et humaine pour votre réussite en France
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Tutoriels pratiques",
                description: "Des tutoriels concrets avec des exemples réels, des modèles de documents et des guides pas-à-pas.",
                color: "bg-blue-50"
              },
              {
                icon: HeartHandshake,
                title: "Accompagnement humain",
                description: "Un vrai suivi personnalisé pour les démarches complexes. On ne vous laisse pas seul.",
                color: "bg-rose-50"
              },
              {
                icon: Users,
                title: "Communauté active",
                description: "Rejoignez une communauté d'étudiants motivés. Partagez vos expériences et trouvez des réponses ensemble.",
                color: "bg-indigo-50"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`${item.color} rounded-2xl p-8 h-full`}>
                  <div className="inline-flex p-4 bg-white rounded-xl mb-6 shadow-sm">
                    <item.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Comment ça marche */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-0 text-base px-6 py-2">
              <Target className="w-4 h-4 mr-2 inline" />
              Simple et efficace
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Inscrivez-vous", desc: "Créer votre compte gratuitement", icon: Smile },
              { step: "2", title: "Choisissez", desc: "Sélectionnez les tutoriels qui vous intéressent", icon: BookOpen },
              { step: "3", title: "Apprenez", desc: "Suivez les tutoriels à votre rythme", icon: PlayCircle },
              { step: "4", title: "Réussissez", desc: "Maîtrisez vos démarches et intégrez-vous", icon: Award }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Témoignages */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-amber-100 text-amber-700 border-0 text-base px-6 py-2">
              <Star className="w-4 h-4 mr-2 inline" />
              Ils nous font confiance
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Les témoignages de nos étudiants
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
                <Card className="h-full border border-gray-200 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                    <div className="border-t pt-4 flex items-center gap-3">
                      <div className="text-3xl">{testimonial.photo}</div>
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.origin}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Social Proof */}
      <section className="py-12 md:py-14 bg-gradient-to-br from-indigo-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "200+", label: "tutoriels disponibles", icon: BookOpen },
              { number: "95%", label: "de réussite aux visas", icon: Award },
              { number: "120", label: "pays représentés", icon: Globe }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="inline-flex p-4 bg-white rounded-full mb-4 shadow-sm">
                  <stat.icon className="w-8 h-8 text-indigo-600" />
                </div>
                {stat.number && <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>}
                <div className="text-lg text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Offres */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-0 text-base px-6 py-2">
              <Coffee className="w-4 h-4 mr-2 inline" />
              Choisissez votre formule
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Des offres adaptées à vos besoins
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Du gratuit pour tester à l'accompagnement VIP, trouvez la solution parfaite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full border-2 transition-all ${
                  plan.popular ? "border-indigo-600 shadow-xl" : plan.isExpert ? "border-purple-400" : "border-gray-200 hover:shadow-lg"
                }`}>
                  <CardContent className="p-6">
                    {plan.popular && (
                      <Badge className="mb-4 bg-indigo-600 text-white w-full justify-center">
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
                            ? "bg-indigo-600 hover:bg-indigo-700"
                            : plan.isExpert
                            ? "bg-purple-600 hover:bg-purple-700"
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
                Comparer toutes les offres
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <HandHeart className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à commencer votre aventure en France ?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Rejoignez notre communauté et bénéficiez de tous les outils pour réussir votre intégration
            </p>
            {isAuthenticated ? (
              <Link to={createPageUrl("Dashboard")}>
                <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl">
                  Accéder à mon espace
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            ) : (
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl"
                onClick={() => redirectToLogin(window.location.href)}
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            )}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-indigo-100">
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
          </motion.div>
        </div>
      </section>

      <ChatBot />
    </div>
  );
}
