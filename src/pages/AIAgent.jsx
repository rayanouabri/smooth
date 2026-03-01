import React, { useState, useRef, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Bot,
  Sparkles,
  Send,
  Loader2,
  BookOpen,
  Target,
  Map,
  GraduationCap,
  Brain,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Lightbulb,
  Compass,
  Trophy,
  BarChart3,
  Clock,
  Zap,
  Star,
  Play,
  RefreshCw,
  Crown,
  AlertCircle,
} from "lucide-react";
import { InvokeLLM } from "@/api/integrations";
import { Course, Enrollment } from "@/api/entities";
import { supabase } from "@/api/supabaseClient";
import { me, isAuthenticated } from "@/api/auth";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { isPremium as checkPremium } from "@/utils/premium";

const ONBOARDING_QUESTIONS = [
  {
    id: "goal",
    question: "Quel est ton objectif principal en France ?",
    icon: Target,
    options: [
      { label: "Etudier a l'universite", value: "studies", icon: "🎓" },
      { label: "Demarches administratives", value: "admin", icon: "📋" },
      { label: "Apprendre le francais", value: "french", icon: "🇫🇷" },
      { label: "Trouver un emploi / stage", value: "work", icon: "💼" },
    ],
  },
  {
    id: "level",
    question: "Quel est ton niveau de francais ?",
    icon: BarChart3,
    options: [
      { label: "Debutant (A1-A2)", value: "beginner", icon: "🌱" },
      { label: "Intermediaire (B1-B2)", value: "intermediate", icon: "📈" },
      { label: "Avance (C1-C2)", value: "advanced", icon: "🚀" },
      { label: "Je ne parle pas francais", value: "none", icon: "🆕" },
    ],
  },
  {
    id: "timeline",
    question: "Quand arrives-tu (ou es-tu arrive) en France ?",
    icon: Clock,
    options: [
      { label: "Je suis deja en France", value: "already_here", icon: "🏠" },
      { label: "Dans moins de 3 mois", value: "soon", icon: "⏳" },
      { label: "Dans 3 a 6 mois", value: "medium", icon: "📅" },
      { label: "Dans plus de 6 mois", value: "later", icon: "🔮" },
    ],
  },
  {
    id: "challenge",
    question: "Quelle est ta plus grande difficulte actuellement ?",
    icon: Lightbulb,
    options: [
      { label: "Trouver un logement", value: "housing", icon: "🏠" },
      { label: "Demarches prefecture / titre de sejour", value: "visa", icon: "📄" },
      { label: "Comprendre le systeme francais", value: "system", icon: "🏛️" },
      { label: "S'integrer socialement", value: "social", icon: "🤝" },
    ],
  },
];

function OnboardingStep({ question, onAnswer, stepIndex, totalSteps }) {
  const Icon = question.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
          <Icon className="w-8 h-8 text-purple-600" />
        </div>
        <p className="text-xs font-medium text-purple-500 mb-2 uppercase tracking-wider">
          Question {stepIndex + 1} / {totalSteps}
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
          {question.question}
        </h2>
      </div>

      {/* Progress indicator */}
      <div className="flex gap-1.5 mb-8 justify-center">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i <= stepIndex
                ? 'bg-gradient-to-r from-violet-500 to-purple-500 w-10'
                : 'bg-gray-200 w-6'
            }`}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {question.options.map((option) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onAnswer(question.id, option.value)}
            className="bg-white border-2 border-gray-100 hover:border-purple-300 rounded-2xl p-5 text-left transition-all group hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{option.icon}</span>
              <span className="text-base font-semibold text-gray-700 group-hover:text-gray-900">
                {option.label}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

function RoadmapDisplay({ roadmap, courses }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 15, delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-xl shadow-purple-500/30"
        >
          <Map className="w-10 h-10 text-white" />
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
          Ta Roadmap Personnalisee
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Voici ton parcours d'apprentissage adapte a ton profil et tes objectifs.
        </p>
      </div>

      {/* Roadmap Steps */}
      <div className="space-y-4">
        {roadmap.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <Card className={`border-0 shadow-lg overflow-hidden transition-all hover:shadow-xl ${
              index === 0 ? 'ring-2 ring-purple-500/20' : ''
            }`}>
              <CardContent className="p-0">
                <div className="flex items-stretch">
                  {/* Step number */}
                  <div className={`w-16 sm:w-20 flex-shrink-0 flex flex-col items-center justify-center ${
                    index === 0
                      ? 'bg-gradient-to-b from-violet-500 to-purple-600'
                      : index < 3
                      ? 'bg-gradient-to-b from-indigo-400 to-blue-500'
                      : 'bg-gradient-to-b from-blue-400 to-cyan-500'
                  }`}>
                    <span className="text-2xl font-extrabold text-white">{index + 1}</span>
                    {index === 0 && (
                      <span className="text-[9px] text-white/80 font-medium mt-0.5">START</span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                        {step.duration && (
                          <div className="flex items-center gap-1.5 mt-2">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            <span className="text-xs text-gray-400 font-medium">{step.duration}</span>
                          </div>
                        )}
                      </div>
                      {step.priority === "high" && (
                        <Badge className="bg-red-50 text-red-600 border-0 flex-shrink-0 text-xs font-bold px-2 py-1">
                          Prioritaire
                        </Badge>
                      )}
                      {step.priority === "medium" && (
                        <Badge className="bg-amber-50 text-amber-600 border-0 flex-shrink-0 text-xs font-bold px-2 py-1">
                          Important
                        </Badge>
                      )}
                    </div>

                    {/* Matched courses */}
                    {step.relatedCourses && step.relatedCourses.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {step.relatedCourses.map((courseName, ci) => {
                          const matchedCourse = courses?.find(c =>
                            c.title.toLowerCase().includes(courseName.toLowerCase()) ||
                            courseName.toLowerCase().includes(c.title.toLowerCase().substring(0, 20))
                          );
                          return (
                            <Link
                              key={ci}
                              to={matchedCourse
                                ? createPageUrl("CourseDetail") + `?id=${matchedCourse.id}`
                                : createPageUrl("Courses")
                              }
                            >
                              <Badge className="bg-purple-50 text-purple-700 border border-purple-100 hover:bg-purple-100 transition-colors cursor-pointer gap-1 px-2.5 py-1">
                                <BookOpen className="w-3 h-3" />
                                <span className="text-xs">{courseName}</span>
                              </Badge>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: roadmap.length * 0.15 + 0.3 }}
        className="mt-10 text-center"
      >
        <Link to={createPageUrl("Courses")}>
          <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white h-14 px-10 rounded-2xl text-lg font-bold shadow-xl shadow-purple-500/25 gap-2">
            <Play className="w-5 h-5" />
            Commencer mon parcours
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}

function AIChat({ courses, user }) {
  const [messages, setMessages] = useState([{
    role: "assistant",
    content: "Salut ! Je suis ton coach IA FrancePrep. Je peux t'aider a planifier ton parcours, te recommander des cours, repondre a tes questions sur les demarches en France, ou simplement discuter. Qu'est-ce que je peux faire pour toi ?"
  }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const userMessage = input.trim();
    if (!userMessage || isLoading) return;

    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const coursesList = courses?.slice(0, 25).map(c => `- "${c.title}" (${c.is_premium ? 'Premium' : 'Gratuit'}) - ${c.short_description || ''}`).join('\n') || '';

      const response = await InvokeLLM({
        prompt: `Tu es le Coach IA de FrancePrepAcademy, un assistant intelligent pour les etudiants internationaux en France.

COURS DISPONIBLES :
${coursesList}

ROLE :
- Aide les etudiants a planifier leur parcours d'apprentissage
- Recommande des cours pertinents
- Reponds aux questions sur les demarches administratives en France
- Donne des conseils pratiques sur la vie en France
- Sois motivant et bienveillant

REGLES :
- Reponds en francais, de maniere concise (3-6 phrases)
- Utilise un ton amical et encourageant
- Quand pertinent, recommande des cours specifiques de la plateforme
- Si pertinent, mentionne les avantages Premium

Question : ${userMessage}`,
        add_context_from_internet: false
      });

      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Desole, je n'ai pas pu traiter ta demande. Reessaie dans quelques instants."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickSuggestions = [
    "Quels cours recommandes-tu pour un debutant ?",
    "Comment faire mes demarches CAF ?",
    "Comment trouver un logement etudiant ?",
    "Aide-moi a preparer le DELF B2",
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden" style={{ height: "min(600px, calc(100vh - 250px))" }}>
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white p-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Coach IA FrancePrep</h3>
              <p className="text-sm text-purple-200">Ton guide personnalise</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs text-purple-200">En ligne</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4" style={{ height: "calc(100% - 160px)" }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-tr-md"
                  : "bg-gray-50 text-gray-800 border border-gray-100 rounded-tl-md"
              }`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-50 px-4 py-3 rounded-2xl border border-gray-100 rounded-tl-md">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                </div>
              </div>
            </div>
          )}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {quickSuggestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setInput(q)}
                  className="text-xs bg-purple-50 text-purple-700 px-3 py-2 rounded-xl hover:bg-purple-100 transition-colors border border-purple-100"
                >
                  {q}
                </button>
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
              placeholder="Ecris ta question ici..."
              className="flex-1 px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-sm transition-all"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-40 flex-shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AIAgent() {
  const { t } = useLanguage();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("roadmap");
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [roadmap, setRoadmap] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const authenticated = await isAuthenticated();
      if (authenticated) {
        const userData = await me();
        setUser(userData);

        if (userData?.email) {
          const userEnrollments = await Enrollment.filter({ user_email: userData.email });
          setEnrollments(userEnrollments || []);
        }
      }

      const allCourses = await Course.filter({ is_published: true });
      setCourses(allCourses || []);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (onboardingStep < ONBOARDING_QUESTIONS.length - 1) {
      setOnboardingStep(prev => prev + 1);
    } else {
      generateRoadmap(newAnswers);
    }
  };

  const generateRoadmap = async (userAnswers) => {
    setIsGenerating(true);
    try {
      const coursesList = courses.map(c => `- "${c.title}" (${c.is_premium ? 'Premium' : 'Gratuit'}, Categorie: ${c.category || 'General'})`).join('\n');

      const response = await InvokeLLM({
        prompt: `Tu es un expert en parcours d'apprentissage pour les etudiants internationaux en France.

PROFIL DE L'ETUDIANT :
- Objectif principal : ${userAnswers.goal}
- Niveau de francais : ${userAnswers.level}
- Chronologie : ${userAnswers.timeline}
- Difficulte principale : ${userAnswers.challenge}

COURS DISPONIBLES SUR LA PLATEFORME :
${coursesList}

MISSION :
Genere une roadmap personnalisee de 5 a 7 etapes pour cet etudiant.

IMPORTANT : Reponds UNIQUEMENT avec un tableau JSON valide, sans texte avant ou apres. Le format doit etre exactement :
[
  {
    "title": "Titre de l'etape",
    "description": "Description courte et motivante (2 phrases max)",
    "duration": "Duree estimee (ex: 1-2 semaines)",
    "priority": "high" ou "medium" ou "low",
    "relatedCourses": ["Nom exact du cours recommande"]
  }
]

Adapte la roadmap au profil de l'etudiant. Les premieres etapes doivent etre les plus urgentes. Utilise les noms exacts des cours disponibles dans relatedCourses quand possible.`,
        response_json_schema: { type: "array" },
        add_context_from_internet: false
      });

      let parsed = response;
      if (typeof response === "string") {
        const jsonMatch = response.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          parsed = JSON.parse(jsonMatch[0]);
        }
      }

      if (Array.isArray(parsed)) {
        setRoadmap(parsed);
      } else {
        throw new Error("Invalid roadmap format");
      }
    } catch (error) {
      console.error("Error generating roadmap:", error);
      // Fallback roadmap
      setRoadmap([
        { title: "Decouvrir les bases", description: "Commence par explorer les cours gratuits pour comprendre le fonctionnement de la plateforme.", duration: "1 semaine", priority: "high", relatedCourses: [] },
        { title: "Demarches administratives essentielles", description: "Apprends les demarches prioritaires pour t'installer en France.", duration: "2 semaines", priority: "high", relatedCourses: [] },
        { title: "Ameliorer ton francais", description: "Renforce tes competences linguistiques pour mieux t'integrer.", duration: "En continu", priority: "medium", relatedCourses: [] },
        { title: "S'integrer dans la vie quotidienne", description: "Decouvre la culture francaise et les codes sociaux.", duration: "2-3 semaines", priority: "medium", relatedCourses: [] },
        { title: "Preparation professionnelle", description: "Prepare ton CV et ta recherche de stage ou d'emploi en France.", duration: "2 semaines", priority: "low", relatedCourses: [] },
      ]);
    } finally {
      setIsGenerating(false);
    }
  };

  const resetRoadmap = () => {
    setAnswers({});
    setOnboardingStep(0);
    setRoadmap(null);
  };

  const completedCoursesCount = enrollments.filter(e => e.completed).length;
  const totalProgress = enrollments.length > 0
    ? Math.round(enrollments.reduce((sum, e) => sum + (e.progress_percentage || 0), 0) / enrollments.length)
    : 0;

  const tabs = [
    { id: "roadmap", label: "Ma Roadmap", icon: Map },
    { id: "chat", label: "Coach IA", icon: MessageCircle },
    { id: "stats", label: "Mon Profil", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/30">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
              Ton Assistant IA
            </h1>
            <p className="text-lg sm:text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Un coach personnel qui cree ta roadmap d'apprentissage, repond a tes questions, et t'accompagne dans ton aventure en France.
            </p>
          </motion.div>

          {/* Stats Cards */}
          {user && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
            >
              {[
                { label: "Cours inscrits", value: enrollments.length, icon: BookOpen },
                { label: "Cours termines", value: completedCoursesCount, icon: Trophy },
                { label: "Progression moy.", value: `${totalProgress}%`, icon: BarChart3 },
                { label: "Cours disponibles", value: courses.length, icon: GraduationCap },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <stat.icon className="w-5 h-5 text-purple-300 mb-2 mx-auto" />
                  <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-purple-300 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-14 sm:top-16 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-purple-500/20'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <AnimatePresence mode="wait">
          {/* Roadmap Tab */}
          {activeTab === "roadmap" && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {isGenerating ? (
                <div className="text-center py-20">
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 rounded-full border-4 border-purple-100" />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" />
                    <Sparkles className="absolute inset-0 m-auto w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Generation de ta roadmap...</h3>
                  <p className="text-gray-500">L'IA analyse ton profil pour creer un parcours personnalise</p>
                </div>
              ) : roadmap ? (
                <div>
                  <div className="flex justify-end mb-6">
                    <Button
                      variant="outline"
                      onClick={resetRoadmap}
                      className="gap-2 rounded-xl"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Refaire le questionnaire
                    </Button>
                  </div>
                  <RoadmapDisplay roadmap={roadmap} courses={courses} />
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <OnboardingStep
                    key={onboardingStep}
                    question={ONBOARDING_QUESTIONS[onboardingStep]}
                    onAnswer={handleAnswer}
                    stepIndex={onboardingStep}
                    totalSteps={ONBOARDING_QUESTIONS.length}
                  />
                </AnimatePresence>
              )}
            </motion.div>
          )}

          {/* Chat Tab */}
          {activeTab === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <AIChat courses={courses} user={user} />
            </motion.div>
          )}

          {/* Stats Tab */}
          {activeTab === "stats" && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Mon Profil d'Apprentissage</h2>
                <p className="text-gray-500">Suis ta progression et tes accomplissements</p>
              </div>

              {!user ? (
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-10 text-center">
                    <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Connecte-toi pour voir tes stats</h3>
                    <p className="text-gray-500 mb-6">Inscris-toi pour suivre ta progression et debloquer toutes les fonctionnalites.</p>
                    <Link to={createPageUrl("Login")}>
                      <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl h-12 px-8 gap-2">
                        <GraduationCap className="w-5 h-5" />
                        Se connecter
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {/* Progress overview */}
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                          {user?.full_name?.[0] || user?.email?.[0] || "U"}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{user?.full_name || "Etudiant"}</h3>
                          <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-purple-50 rounded-2xl p-4 text-center">
                          <BookOpen className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                          <div className="text-2xl font-extrabold text-gray-900">{enrollments.length}</div>
                          <div className="text-xs text-gray-500 mt-1">Cours inscrits</div>
                        </div>
                        <div className="bg-emerald-50 rounded-2xl p-4 text-center">
                          <Trophy className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                          <div className="text-2xl font-extrabold text-gray-900">{completedCoursesCount}</div>
                          <div className="text-xs text-gray-500 mt-1">Termines</div>
                        </div>
                        <div className="bg-blue-50 rounded-2xl p-4 text-center">
                          <Zap className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl font-extrabold text-gray-900">{totalProgress}%</div>
                          <div className="text-xs text-gray-500 mt-1">Progression</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Active enrollments */}
                  {enrollments.length > 0 && (
                    <Card className="border-0 shadow-xl">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Mes cours en cours</h3>
                        <div className="space-y-3">
                          {enrollments.map((enrollment) => {
                            const enrolledCourse = courses.find(c => c.id === enrollment.course_id);
                            if (!enrolledCourse) return null;
                            const progress = enrollment.progress_percentage || 0;

                            return (
                              <Link key={enrollment.id} to={createPageUrl("CourseDetail") + `?id=${enrollment.course_id}`}>
                                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                    progress === 100
                                      ? 'bg-emerald-100'
                                      : 'bg-purple-100'
                                  }`}>
                                    {progress === 100 ? (
                                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                                    ) : (
                                      <BookOpen className="w-6 h-6 text-purple-600" />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-purple-600 transition-colors">
                                      {enrolledCourse.title}
                                    </p>
                                    <div className="flex items-center gap-3 mt-1.5">
                                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                          className={`h-full rounded-full transition-all ${
                                            progress === 100
                                              ? 'bg-emerald-500'
                                              : 'bg-gradient-to-r from-violet-500 to-purple-500'
                                          }`}
                                          style={{ width: `${progress}%` }}
                                        />
                                      </div>
                                      <span className="text-xs font-medium text-gray-400 tabular-nums">{Math.round(progress)}%</span>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {enrollments.length === 0 && (
                    <Card className="border-0 shadow-xl">
                      <CardContent className="p-10 text-center">
                        <Compass className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-gray-700 mb-2">Aucun cours en cours</h3>
                        <p className="text-gray-500 mb-6">Commence ta roadmap pour decouvrir les cours recommandes pour toi !</p>
                        <Button
                          onClick={() => setActiveTab("roadmap")}
                          className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 rounded-xl h-12 px-8 gap-2"
                        >
                          <Map className="w-5 h-5" />
                          Creer ma roadmap
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
