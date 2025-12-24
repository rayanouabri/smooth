import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated as checkAuthStatus, redirectToLogin } from "@/api/auth";
import { Course, Testimonial } from "@/api/entities";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  BookOpen, 
  Users, 
  Globe, 
  ArrowRight,
  FileText,
  Briefcase,
  Star,
  MessageCircle,
  Send,
  Sparkles,
  GraduationCap,
  ShieldCheck,
  HeartHandshake,
  Target
} from "lucide-react";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import CourseCard from "../components/CourseCard";
import StatsSection from "../components/StatsSection";
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

  const { data: featuredCourses = [] } = useQuery({
    queryKey: ['featured-courses'],
    queryFn: () => Course.filter({ is_published: true }, '-rating', 6),
  });

  const { data: testimonials = [] } = useQuery({
    queryKey: ['testimonials'],
    queryFn: () => Testimonial.filter({ is_featured: true }, '-created_date', 3),
  });

  const heroFeatures = [
    {
      icon: GraduationCap,
      title: "200+ Cours d'intégration",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CheckCircle,
      title: "Guides CAF & Administration",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Briefcase,
      title: "CV & Emploi",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: HeartHandshake,
      title: "Support 24/7",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const challenges = [
    {
      icon: FileText,
      title: "Démarches administratives complexes",
      description: "CAF, sécurité sociale, logement, banque... Des procédures souvent incompréhensibles."
    },
    {
      icon: Globe,
      title: "Barrière linguistique",
      description: "Maîtriser le français académique et professionnel est essentiel pour réussir."
    },
    {
      icon: Users,
      title: "Codes culturels différents",
      description: "Comprendre les attentes et le savoir-vivre français pour s'intégrer."
    },
    {
      icon: Briefcase,
      title: "Insertion professionnelle",
      description: "Adapter son CV, préparer les entretiens et comprendre le marché du travail français."
    }
  ];

  const solutions = [
    {
      icon: BookOpen,
      title: "200+ Cours Complets",
      description: "Des formations expertes sur tous les aspects de la vie étudiante en France",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "IA disponible 24/7",
      description: "Assistant intelligent qui répond instantanément à vos questions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Communauté Active",
      description: "Forum d'entraide avec des milliers d'étudiants internationaux",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with AI Chat */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-pink-400 text-white text-base px-6 py-2 border-0 shadow-xl">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                15,000+ étudiants nous font confiance
              </Badge>

              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Réussissez votre{" "}
                <span className="bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
                  vie en France
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                De l'arrivée à l'emploi : formations complètes, IA 24/7 et communauté active pour vous accompagner à chaque étape.
              </p>

              {/* 4 features cards */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {heroFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${feature.color} mb-2`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold">{feature.title}</h3>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {isAuthenticated ? (
                  <Link to={createPageUrl("Dashboard")}>
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold shadow-2xl px-8 py-6 text-lg">
                      🎓 Mon Espace
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold shadow-2xl px-8 py-6 text-lg"
                    onClick={() => redirectToLogin(window.location.href)}
                  >
                    🚀 Commencer gratuitement
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                )}
                <Link to={createPageUrl("Courses")}>
                  <Button size="lg" variant="outline" className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-indigo-900 font-bold px-8 py-6 text-lg backdrop-blur">
                    Découvrir les cours
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4 text-sm text-blue-200">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Gratuit</span>
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Sans engagement</span>
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Accès immédiat</span>
              </div>
            </motion.div>

            {/* Right: AI Chat Interface */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/20">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                      <MessageCircle className="w-7 h-7 text-white" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Sophie • IA FrancePrep</h3>
                    <p className="text-sm text-green-300 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      En ligne • Répond en 2s
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-4 border border-cyan-300/30"
                  >
                    <p className="text-sm font-medium">
                      👋 <strong>Bonjour !</strong> Je suis Sophie, votre assistante IA. Posez-moi n'importe quelle question sur la France !
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white/20 backdrop-blur-md rounded-2xl rounded-tr-none p-4 ml-8 border border-white/30 text-right"
                  >
                    <p className="text-sm font-medium">
                      Comment faire ma demande de CAF ? 🏠
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-4 border border-cyan-300/30"
                  >
                    <p className="text-sm font-medium mb-3">
                      📋 Excellente question ! Pour votre demande CAF :
                    </p>
                    <ul className="text-xs space-y-1 text-blue-100 pl-4">
                      <li>✓ Titre de séjour valide</li>
                      <li>✓ Justificatif de domicile</li>
                      <li>✓ RIB français</li>
                      <li>✓ Attestation d'inscription</li>
                    </ul>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 flex items-center gap-2"
                >
                  <input 
                    type="text" 
                    placeholder="Tapez votre question..."
                    className="bg-transparent flex-1 outline-none text-sm placeholder:text-white/50"
                    disabled
                  />
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Send className="w-5 h-5" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-700 border-0 text-base px-6 py-2">
              ❌ Les obstacles courants
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Vous n'êtes pas seul face à ces défis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des milliers d'étudiants rencontrent les mêmes difficultés. Nous sommes là pour vous aider à les surmonter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-orange-100 to-red-100 p-4 rounded-2xl flex-shrink-0">
                        <challenge.icon className="w-7 h-7 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {challenge.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-2xl font-bold text-gray-900 mb-2">
              💡 <span className="text-orange-600">Bonne nouvelle :</span>
            </p>
            <p className="text-xl text-gray-700">
              Nous avons la solution pour chaque défi 👇
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
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
                Votre assistant IA personnel disponible 24/7
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Notre IA spécialisée vous accompagne à chaque étape : démarches administratives, questions CAF, recherche de logement, conseils d'intégration et bien plus.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Sparkles, title: "Réponses instantanées", desc: "Posez vos questions en français, obtenez des réponses précises immédiatement" },
                  { icon: FileText, title: "Aide aux démarches", desc: "Guide pas à pas pour CAF, sécurité sociale, titre de séjour..." },
                  { icon: Target, title: "Conseils personnalisés", desc: "Recommandations adaptées à votre situation et vos objectifs" },
                  { icon: CheckCircle, title: "Disponible 24/7", desc: "Toujours là quand vous avez besoin, jour et nuit" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-gradient-to-br from-cyan-400 to-blue-400 p-2 rounded-lg flex-shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-blue-100">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 border-2 border-white/20 shadow-2xl">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/20">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Assistant FrancePrep</p>
                    <p className="text-xs text-green-300 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      En ligne
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-xl p-3 text-sm">
                    💡 Bonjour ! Comment puis-je vous aider aujourd'hui ?
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-xl rounded-tr-none p-3 ml-6 text-sm text-right">
                    Comment faire ma demande CAF ?
                  </div>
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-xl p-3 text-sm">
                    📋 Je vais vous guider ! Pour la CAF, vous aurez besoin de :
                    <ul className="mt-2 text-xs space-y-1 text-blue-100">
                      <li>• Titre de séjour</li>
                      <li>• Justificatif de domicile</li>
                      <li>• RIB français</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <button className="text-xs bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition-colors">
                    💼 Trouver un emploi
                  </button>
                  <button className="text-xs bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition-colors">
                    🏠 Chercher un logement
                  </button>
                  <button className="text-xs bg-white/10 px-3 py-2 rounded-full hover:bg-white/20 transition-colors">
                    🎓 S'inscrire à l'université
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-base px-6 py-2">
              ✨ Notre Solution
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Tout en une plateforme
            </h2>
            <p className="text-xl text-gray-600">
              Gagnez du temps, évitez les erreurs, réduisez le stress
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full text-center hover:shadow-2xl transition-all border-2">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${solution.color} mb-6 shadow-xl`}>
                      <solution.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-base px-6 py-2">
              🔥 Cours populaires
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Nos formations les plus suivies
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les cours plébiscités par notre communauté
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to={createPageUrl("Courses")}>
              <Button size="lg" className="bg-blue-900 hover:bg-blue-800 font-bold px-8">
                Voir tous les cours
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-700 border-0 text-base px-6 py-2">
                ⭐ Témoignages
              </Badge>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Ils ont réussi avec nous
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.student_photo || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"}
                          alt={testimonial.student_name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-bold text-gray-900">
                            {testimonial.student_name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.country_origin}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="relative py-16 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-700 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-4 bg-white/20 backdrop-blur-md text-white border-0 px-4 py-1">
            🎯 Dernière étape
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Votre rêve français commence maintenant !
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Rejoignez <span className="font-bold underline decoration-wavy">15,000+ étudiants</span> qui ont déjà transformé leur vie
          </p>

          {isAuthenticated ? (
            <Link to={createPageUrl("Courses")}>
              <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-2xl">
                🚀 Explorer les cours
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          ) : (
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg shadow-2xl"
              onClick={() => base44.auth.redirectToLogin(window.location.href)}
            >
              🚀 Explorer les cours
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
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
              <span>Garantie 30 jours</span>
            </div>
          </div>

          <p className="mt-4 text-xs text-white/70">
            ⚡ Inscrivez-vous en 30 secondes et commencez dès maintenant !
          </p>
        </div>
      </section>

      <ChatBot />
    </div>
  );
}