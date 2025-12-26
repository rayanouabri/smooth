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
  Home as HomeIcon
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
      text: "Grâce à FrancePrepAcademy, j'ai pu m'installer en France en 2 semaines au lieu de 3 mois. Les formations sont claires et pratiques, et l'accompagnement est incroyable.",
      rating: 5,
      photo: "👨‍🎓"
    },
    {
      name: "Daniela",
      origin: "Travailleuse internationale",
      text: "Les cours sont excellents et très pratiques. J'ai appris énormément sur la culture française et les démarches administratives. Je recommande vivement !",
      rating: 5,
      photo: "👩‍💼"
    },
    {
      name: "Ahmed",
      origin: "Entrepreneur",
      text: "L'ouverture de compte bancaire et la recherche de logement ont été expliquées parfaitement. J'ai économisé des semaines de démarches grâce aux formations.",
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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Style chaleureux et humain */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-indigo-50 via-white to-rose-50 overflow-hidden">
        {/* Décoration douce */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-indigo-100 text-indigo-700 border-0 text-base px-6 py-2 hover:bg-indigo-200 transition-colors">
              <HeartHandshake className="w-4 h-4 mr-2 inline" />
              Votre partenaire de confiance pour réussir en France
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bienvenue en France,
              <br />
              <span className="text-indigo-600">on vous accompagne à chaque étape</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              Formations pratiques, accompagnement humain et communauté solidaire pour maîtriser vos démarches administratives, comprendre la culture française et réussir votre intégration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              {isAuthenticated ? (
                <Link to={createPageUrl("Dashboard")}>
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg">
                    Accéder à mes cours
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              ) : (
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg"
                  onClick={() => redirectToLogin(window.location.href)}
                >
                  Commencer gratuitement
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              )}
              <Link to={createPageUrl("Courses")}>
                <Button size="lg" variant="outline" className="border-2 border-gray-300 px-8 py-6 text-lg hover:bg-gray-50">
                  Découvrir les formations
                  <BookOpen className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>15,000+ étudiants accompagnés</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Sans engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Accès immédiat</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section : Deux parcours */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Par où commencer ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez votre situation et découvrez comment nous pouvons vous aider
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 bg-indigo-100 rounded-2xl mb-6">
                    <Plane className="w-10 h-10 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Je prépare mon départ</h3>
                  <p className="text-gray-600 mb-6">
                    Vous êtes encore dans votre pays et vous préparez votre arrivée en France.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {["Demande de visa étudiant", "Recherche de logement", "Inscription Campus France", "Préparation administrative"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                    onClick={() => {
                      if (!isAuthenticated) {
                        redirectToLogin(window.location.href);
                      } else {
                        window.location.href = createPageUrl("Dashboard");
                      }
                    }}
                  >
                    Commencer ma préparation
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-rose-300 hover:shadow-xl transition-all">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 bg-rose-100 rounded-2xl mb-6">
                    <MapPin className="w-10 h-10 text-rose-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Je suis déjà en France</h3>
                  <p className="text-gray-600 mb-6">
                    Vous êtes arrivé en France et vous avez besoin d'aide pour vos démarches.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {["Demande CAF (APL)", "Titre de séjour / Préfecture", "Recherche d'emploi", "Comprendre les codes sociaux"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                    onClick={() => {
                      if (!isAuthenticated) {
                        redirectToLogin(window.location.href);
                      } else {
                        window.location.href = createPageUrl("Dashboard");
                      }
                    }}
                  >
                    Accéder aux formations
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section : Nos formations par catégorie */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-0 text-base px-6 py-2">
              <GraduationCap className="w-4 h-4 mr-2 inline" />
              Formations complètes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plus de 200 formations pour maîtriser la vie en France
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des cours pratiques et complets, conçus par des experts, pour chaque étape de votre intégration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: FileText,
                title: "Administration",
                description: "CAF, CPAM, Visa, Titre de séjour... Gérer toutes vos démarches avec confiance.",
                count: "50+ cours",
                color: "bg-blue-100 text-blue-700",
                iconColor: "text-blue-600"
              },
              {
                icon: GraduationCap,
                title: "Français",
                description: "DELF, DALF, français professionnel. Progressez rapidement selon votre niveau.",
                count: "40+ cours",
                color: "bg-purple-100 text-purple-700",
                iconColor: "text-purple-600"
              },
              {
                icon: Briefcase,
                title: "Carrière",
                description: "CV, entretiens, réseautage. Développez votre carrière professionnelle en France.",
                count: "30+ cours",
                color: "bg-amber-100 text-amber-700",
                iconColor: "text-amber-600"
              },
              {
                icon: Globe,
                title: "Culture & Codes",
                description: "Comprenez les codes implicites français et intégrez-vous facilement.",
                count: "35+ cours",
                color: "bg-green-100 text-green-700",
                iconColor: "text-green-600"
              },
              {
                icon: Building2,
                title: "Logement",
                description: "Trouver un logement, comprendre les contrats, ouvrir un compte bancaire.",
                count: "25+ cours",
                color: "bg-rose-100 text-rose-700",
                iconColor: "text-rose-600"
              },
              {
                icon: Shield,
                title: "Santé",
                description: "CPAM, mutuelle, remboursements. Maîtrisez le système de santé français.",
                count: "20+ cours",
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
                    <Link to={createPageUrl("Courses")} className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                      Voir les cours
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
                Explorer toutes les formations (200+)
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section : Pourquoi nous choisir */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
                title: "Formations pratiques",
                description: "Des cours concrets avec des exemples réels, des modèles de documents et des guides pas-à-pas.",
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
                description: "Rejoignez 15,000+ étudiants. Partagez vos expériences et trouvez des réponses ensemble.",
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
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
              { step: "2", title: "Choisissez", desc: "Sélectionnez les formations qui vous intéressent", icon: BookOpen },
              { step: "3", title: "Apprenez", desc: "Suivez les cours à votre rythme", icon: PlayCircle },
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-rose-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "15,000+", label: "étudiants accompagnés", icon: Users },
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
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Offres */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
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
