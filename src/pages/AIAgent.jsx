import React, { useState, useRef, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot, Sparkles, Send, Loader2, BookOpen, Target, Map, GraduationCap,
  Brain, MessageCircle, ArrowRight, CheckCircle, ChevronRight, ChevronDown,
  Lightbulb, Compass, Trophy, BarChart3, Clock, Zap, Star, Play, RefreshCw,
  Crown, AlertCircle, ExternalLink, Euro, Calendar, FileCheck, ShieldCheck,
  Home, Briefcase, Globe, CheckSquare, Square, ChevronUp,
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
      { label: "Étudier à l'université", value: "studies", icon: "🎓" },
      { label: "Démarches administratives", value: "admin", icon: "📋" },
      { label: "Apprendre le français", value: "french", icon: "🇫🇷" },
      { label: "Trouver un emploi / stage", value: "work", icon: "💼" },
    ],
  },
  {
    id: "level",
    question: "Quel est ton niveau de français ?",
    icon: BarChart3,
    options: [
      { label: "Débutant (A1-A2)", value: "beginner", icon: "🌱" },
      { label: "Intermédiaire (B1-B2)", value: "intermediate", icon: "📈" },
      { label: "Avancé (C1-C2)", value: "advanced", icon: "🚀" },
      { label: "Je ne parle pas français", value: "none", icon: "🆕" },
    ],
  },
  {
    id: "timeline",
    question: "Quand arrives-tu (ou es-tu arrivé) en France ?",
    icon: Clock,
    options: [
      { label: "Je suis déjà en France", value: "already_here", icon: "🏠" },
      { label: "Dans moins de 3 mois", value: "soon", icon: "⏳" },
      { label: "Dans 3 à 6 mois", value: "medium", icon: "📅" },
      { label: "Dans plus de 6 mois", value: "later", icon: "🔮" },
    ],
  },
  {
    id: "challenge",
    question: "Quelle est ta plus grande difficulté actuellement ?",
    icon: Lightbulb,
    options: [
      { label: "Trouver un logement", value: "housing", icon: "🏠" },
      { label: "Titre de séjour / Préfecture", value: "visa", icon: "📄" },
      { label: "Comprendre le système français", value: "system", icon: "🏛️" },
      { label: "S'intégrer socialement", value: "social", icon: "🤝" },
    ],
  },
  {
    id: "budget",
    question: "Quel est ton budget mensuel approximatif ?",
    icon: Euro,
    options: [
      { label: "Moins de 600€/mois", value: "tight", icon: "💰" },
      { label: "600€ - 1000€/mois", value: "moderate", icon: "💳" },
      { label: "1000€ - 1500€/mois", value: "comfortable", icon: "💵" },
      { label: "Plus de 1500€/mois", value: "high", icon: "💎" },
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
      <div className="flex gap-1.5 mb-8 justify-center">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i <= stepIndex ? 'bg-gradient-to-r from-violet-500 to-purple-500 w-8' : 'bg-gray-200 w-5'}`} />
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
              <span className="text-base font-semibold text-gray-700 group-hover:text-gray-900">{option.label}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

function RoadmapStep({ step, index, courses, isFirst }) {
  const [expanded, setExpanded] = useState(isFirst);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (i) => {
    setCheckedItems(prev => ({ ...prev, [i]: !prev[i] }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalTasks = step.checklist?.length || 0;
  const progress = totalTasks > 0 ? Math.round((checkedCount / totalTasks) * 100) : 0;

  const priorityConfig = {
    high: { label: "Urgent", color: "bg-red-50 text-red-600 border-red-200", dot: "bg-red-500" },
    medium: { label: "Important", color: "bg-amber-50 text-amber-600 border-amber-200", dot: "bg-amber-500" },
    low: { label: "Recommandé", color: "bg-blue-50 text-blue-600 border-blue-200", dot: "bg-blue-500" },
  };
  const prio = priorityConfig[step.priority] || priorityConfig.medium;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className={`border overflow-hidden transition-all ${expanded ? 'shadow-xl border-purple-200' : 'shadow-md hover:shadow-lg border-gray-100'}`}>
        <CardContent className="p-0">
          {/* Header - always visible */}
          <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
            <div className="flex items-stretch">
              <div className={`w-14 sm:w-16 flex-shrink-0 flex flex-col items-center justify-center gap-1 ${
                index === 0 ? 'bg-gradient-to-b from-violet-500 to-purple-600'
                : index < 3 ? 'bg-gradient-to-b from-indigo-400 to-blue-500'
                : 'bg-gradient-to-b from-blue-400 to-cyan-500'
              }`}>
                {step.emoji && <span className="text-xl">{step.emoji}</span>}
                <span className="text-sm font-extrabold text-white/80">{index + 1}</span>
              </div>
              <div className="flex-1 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{step.description}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge className={`${prio.color} border text-[10px] font-bold px-2 py-0.5`}>
                      {prio.label}
                    </Badge>
                    {expanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </div>
                </div>
                {/* Estimated savings highlight */}
                {step.estimatedSavings && (
                  <div className="mt-2 inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                    <Euro className="w-3 h-3" />{step.estimatedSavings}
                  </div>
                )}
                {/* Official deadline warning */}
                {step.officialDeadlineWarning && (
                  <div className="mt-2 flex items-start gap-1.5 bg-red-50 text-red-600 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-red-100">
                    <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />{step.officialDeadlineWarning}
                  </div>
                )}
                {/* Mini info bar */}
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-gray-400">
                  {step.duration && (
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{step.duration}</span>
                  )}
                  {step.budget && (
                    <span className="flex items-center gap-1"><Euro className="w-3 h-3" />{step.budget}</span>
                  )}
                  {step.deadline && (
                    <span className="flex items-center gap-1 text-red-400"><Calendar className="w-3 h-3" />{step.deadline}</span>
                  )}
                  {totalTasks > 0 && (
                    <span className="flex items-center gap-1"><CheckSquare className="w-3 h-3" />{checkedCount}/{totalTasks}</span>
                  )}
                </div>
                {/* Progress bar */}
                {totalTasks > 0 && (
                  <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
                  </div>
                )}
              </div>
            </div>
          </button>

          {/* Expanded content */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 pt-0 border-t border-gray-100">
                  {/* Why this matters */}
                  {step.why && (
                    <div className="mt-4 bg-purple-50 rounded-xl p-4">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-purple-700 mb-1">Pourquoi c'est important</p>
                          <p className="text-sm text-purple-600 leading-relaxed">{step.why}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Checklist */}
                  {step.checklist && step.checklist.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5" /> Actions à faire
                      </p>
                      <div className="space-y-2">
                        {step.checklist.map((item, i) => (
                          <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); toggleCheck(i); }}
                            className={`w-full flex items-start gap-3 p-3 rounded-xl border transition-all text-left ${
                              checkedItems[i]
                                ? 'bg-emerald-50 border-emerald-200'
                                : 'bg-white border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${
                              checkedItems[i] ? 'bg-emerald-500 border-emerald-500' : 'border-gray-300'
                            }`}>
                              {checkedItems[i] && <CheckCircle className="w-3 h-3 text-white" />}
                            </div>
                            <span className={`text-sm leading-relaxed ${checkedItems[i] ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                              {item}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tips */}
                  {step.tips && step.tips.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5" /> Conseils pratiques
                      </p>
                      <div className="space-y-2">
                        {step.tips.map((tip, i) => (
                          <div key={i} className="flex items-start gap-2 bg-amber-50 rounded-xl p-3 border border-amber-100">
                            <Zap className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-amber-800 leading-relaxed">{tip}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Official links */}
                  {step.links && step.links.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5" /> Liens utiles
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.links.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors border border-blue-100">
                            <ExternalLink className="w-3 h-3" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Related courses */}
                  {step.relatedCourses && step.relatedCourses.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" /> Cours recommandés
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.relatedCourses.map((name, ci) => {
                          const match = courses?.find(c =>
                            c.title.toLowerCase().includes(name.toLowerCase()) ||
                            name.toLowerCase().includes(c.title.toLowerCase().substring(0, 15))
                          );
                          return (
                            <Link key={ci} to={match ? createPageUrl("CourseDetail") + `?id=${match.id}` : createPageUrl("Courses")}>
                              <Badge className="bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors cursor-pointer gap-1 px-3 py-1.5">
                                <BookOpen className="w-3 h-3" />
                                <span className="text-xs font-medium">{name}</span>
                                <ArrowRight className="w-3 h-3" />
                              </Badge>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function AIChat({ courses, user }) {
  const [messages, setMessages] = useState([{
    role: "assistant",
    content: "Salut ! Je suis ton coach IA. Je connais tous les cours de la plateforme et les démarches en France. Pose-moi ta question !"
  }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const handleSend = async () => {
    const userMessage = input.trim();
    if (!userMessage || isLoading) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    try {
      const coursesList = courses?.slice(0, 25).map(c => `- "${c.title}" (${c.is_premium ? 'Premium' : 'Gratuit'})`).join('\n') || '';
      const response = await InvokeLLM({
        prompt: `Tu es le Coach IA de FrancePrepAcademy. Reponds en francais, de maniere concise et utile (4-6 phrases). Recommande des cours quand pertinent.\n\nCOURS :\n${coursesList}\n\nQuestion : ${userMessage}`,
        add_context_from_internet: false
      });
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Désolé, une erreur s'est produite. Réessaie." }]);
    } finally { setIsLoading(false); }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col" style={{ height: "min(580px, calc(100vh - 280px))" }}>
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white p-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Brain className="w-5 h-5" /></div>
            <div><h3 className="font-bold">Coach IA</h3><p className="text-xs text-purple-200">Ton guide personnalisé</p></div>
            <div className="ml-auto flex items-center gap-1.5"><div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /><span className="text-xs text-purple-200">En ligne</span></div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5"><Bot className="w-3.5 h-3.5 text-white" /></div>}
              <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-tr-md" : "bg-gray-50 text-gray-800 border border-gray-100 rounded-tl-md"}`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && <div className="flex justify-start"><div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0"><Bot className="w-3.5 h-3.5 text-white" /></div><div className="bg-gray-50 px-4 py-3 rounded-2xl border border-gray-100 rounded-tl-md"><div className="flex gap-1.5"><div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" /><div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} /><div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} /></div></div></div>}
          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {["Comment faire ma demande CAF ?", "Aide-moi pour mon titre de séjour", "Quel cours pour le DELF B2 ?", "Comment trouver un logement étudiant ?"].map((q, i) => (
                <button key={i} onClick={() => setInput(q)} className="text-xs bg-purple-50 text-purple-700 px-3 py-2 rounded-xl hover:bg-purple-100 transition-colors border border-purple-100">{q}</button>
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
          <div className="flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()} placeholder="Écris ta question..." className="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-sm" disabled={isLoading} />
            <button onClick={handleSend} disabled={!input.trim() || isLoading} className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white flex items-center justify-center hover:shadow-lg transition-all disabled:opacity-40 flex-shrink-0"><Send className="w-4 h-4" /></button>
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

  useEffect(() => { loadData(); }, []);

  const loadData = async () => {
    try {
      const authenticated = await isAuthenticated();
      if (authenticated) {
        const userData = await me();
        setUser(userData);
        if (userData?.email) {
          const e = await Enrollment.filter({ user_email: userData.email });
          setEnrollments(e || []);
        }
      }
      const c = await Course.filter({ is_published: true });
      setCourses(c || []);
    } catch (error) { console.error("Error loading data:", error); }
  };

  const handleAnswer = (qId, val) => {
    const a = { ...answers, [qId]: val };
    setAnswers(a);
    if (onboardingStep < ONBOARDING_QUESTIONS.length - 1) setOnboardingStep(prev => prev + 1);
    else generateRoadmap(a);
  };

  const generateRoadmap = async (ua) => {
    setIsGenerating(true);
    try {
      // Limit to 15 most relevant courses to reduce API cost
      const goalKeywords = (ua.goal || "").toLowerCase();
      const priorityCategories = goalKeywords.includes("trava") || goalKeywords.includes("emploi") || goalKeywords.includes("stage")
        ? ["insertion_professionnelle", "administration", "budget_finances"]
        : goalKeywords.includes("étude") || goalKeywords.includes("etude") || goalKeywords.includes("univer")
        ? ["preparation_academique", "administration", "integration_administrative"]
        : goalKeywords.includes("logement") || goalKeywords.includes("appartement")
        ? ["logement", "budget_finances", "integration_administrative"]
        : ["integration_administrative", "administration", "budget_finances"];
      const sortedCourses = [...courses].sort((a, b) => {
        const aPrio = priorityCategories.indexOf(a.category);
        const bPrio = priorityCategories.indexOf(b.category);
        return (aPrio === -1 ? 99 : aPrio) - (bPrio === -1 ? 99 : bPrio);
      });
      const coursesList = sortedCourses.slice(0, 15).map(c => `- "${c.title}" (${c.is_premium ? 'Premium' : 'Gratuit'}, ${c.category || 'General'})`).join('\n');
      const goalLabel = ua.goal === "studies" ? "Etudier à l'université" : ua.goal === "admin" ? "Démarches administratives" : ua.goal === "french" ? "Apprendre le français" : "Trouver un emploi / stage";
      const levelLabel = ua.level === "beginner" ? "Débutant (A1-A2)" : ua.level === "intermediate" ? "Intermédiaire (B1-B2)" : ua.level === "advanced" ? "Avancé (C1-C2)" : "Ne parle pas français";
      const timelineLabel = ua.timeline === "already_here" ? "Déjà en France" : ua.timeline === "soon" ? "Dans moins de 3 mois" : ua.timeline === "medium" ? "Dans 3 à 6 mois" : "Dans plus de 6 mois";
      const challengeLabel = ua.challenge === "housing" ? "Trouver un logement" : ua.challenge === "visa" ? "Titre de séjour / Préfecture" : ua.challenge === "system" ? "Comprendre le système français" : "S'intégrer socialement";
      const budgetLabel = ua.budget === "tight" ? "Moins de 600€/mois" : ua.budget === "moderate" ? "600-1000€/mois" : ua.budget === "comfortable" ? "1000-1500€/mois" : "Plus de 1500€/mois";

      const response = await InvokeLLM({
        prompt: `Tu es un expert senior en integration et accompagnement des etudiants internationaux en France, avec 15 ans d'experience. Tu aides des milliers d'etudiants chaque annee. Tu dois generer une roadmap ULTRA-COMPLETE, PERSONNALISEE et ACTIONNABLE.

PROFIL COMPLET DE L'ETUDIANT :
- Objectif principal : ${goalLabel}
- Niveau de français : ${levelLabel}
- Situation d'arrivee : ${timelineLabel}
- Defi principal : ${challengeLabel}
- Budget mensuel : ${budgetLabel}

COURS DISPONIBLES SUR LA PLATEFORME :
${coursesList}

INSTRUCTIONS CRITIQUES :
Tu dois generer un JSON array de 7 à 9 etapes DETAILLEES. Chaque etape doit etre SPECIFIQUE au profil (pas generique).
La roadmap doit couvrir les 6 premiers mois en France et adapter les priorites au profil.
Pour un etudiant avec un budget serre, priorise les aides gratuites (CAF, CROUS, bourses).
Pour quelqu'un deja en France, commence par ce qui est URGENT maintenant.
Pour l'emploi, inclus CV francais, LinkedIn, stages, pole emploi, etc.

Chaque etape DOIT contenir EXACTEMENT ces champs :
- title: titre court et percutant (max 6 mots)
- emoji: un emoji representatif de l'etape
- description: explication detaillee en 3-4 phrases expliquant COMMENT faire, pas juste QUOI faire
- duration: duree estimee precise (ex: "3-5 jours ouvrables", "2 à 4 semaines")
- priority: "high", "medium" ou "low" (base sur l'urgence reelle)
- budget: cout reel et precis (ex: "Gratuit", "30-80€ de frais de dossier", "Remboursé par la CAF ensuite")
- deadline: delai URGENT si applicable (ex: "Dans les 3 premiers mois apres entree en France", null si flexible)
- why: phrase MOTIVANTE expliquant l'impact concret (chiffres si possible, ex: "Peut te faire economiser jusqu'a 300€/mois")
- checklist: tableau de 5 à 8 actions ULTRA-SPECIFIQUES et ordonnes chronologiquement (avec details comme "Reunir: passeport + visa + 3 derniers releves de compte + attestation de logement")
- tips: tableau de 3 à 5 conseils INSIDER que seuls les experts connaissent (astuces peu connues, erreurs a eviter, hacks)
- links: tableau de 3 à 5 objets {label, url} avec des VRAIS liens officiels francais (caf.fr, ameli.fr, service-public.fr, etudiant.gouv.fr, pole-emploi.fr, campus-france.org, etc.)
- relatedCourses: 1 à 3 noms exacts de cours de la plateforme les plus pertinents pour cette etape
- estimatedSavings: montant potentiel economise ou gain si applicable (ex: "Jusqu'a 300€/mois d'APL", "Reduction impots", null)
- officialDeadlineWarning: avertissement si l'etape a une date limite officielle connue (ex: "La carte de sejour doit etre demandee dans les 3 mois suivant l'arrivee", null si aucune)

IMPORTANT : Reponds UNIQUEMENT avec le JSON array valide, sans markdown, sans texte avant ou apres. Tous les textes en francais.`,
        response_json_schema: { type: "array" },
        add_context_from_internet: false
      });

      let parsed = response;
      if (typeof parsed === "string") {
        // Remove markdown code blocks if present
        let cleaned = parsed.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
        try {
          parsed = JSON.parse(cleaned);
        } catch (_) {
          const m = cleaned.match(/\[[\s\S]*\]/);
          if (m) {
            try { parsed = JSON.parse(m[0]); } catch (_2) {}
          }
        }
      }
      // Handle object with steps/roadmap key wrapping an array
      if (parsed && !Array.isArray(parsed) && typeof parsed === "object") {
        const vals = Object.values(parsed);
        const arr = vals.find(v => Array.isArray(v));
        if (arr) parsed = arr;
      }

      if (Array.isArray(parsed) && parsed.length > 0) setRoadmap(parsed);
      else throw new Error("Invalid format");
    } catch (error) {
      console.error("Error generating roadmap:", error);
      setRoadmap([
        { title: "Ouvrir un compte bancaire", description: "C'est la première chose à faire. Sans compte bancaire, tu ne peux pas recevoir d'aides ni payer ton loyer.", duration: "1 semaine", priority: "high", budget: "Gratuit", deadline: "Dès ton arrivée", why: "Le compte bancaire est la clé de toutes tes démarches administratives.", checklist: ["Comparer les offres (Boursorama, BNP, SG)", "Préparer passeport + justificatif domicile + attestation d'hébergement", "Prendre RDV en agence ou ouvrir en ligne", "Activer la carte bancaire"], tips: ["Les banques en ligne sont souvent gratuites et plus rapides", "Certaines banques offrent des primes d'ouverture de 50à 150€"], links: [{ label: "Boursorama Etudiant", url: "https://www.boursorama.com" }], relatedCourses: [] },
        { title: "Demander la CAF (APL)", description: "L'aide au logement peut couvrir 30 à 50% de ton loyer. C'est une aide essentielle.", duration: "2-3 semaines", priority: "high", budget: "Gratuit (tu reçois de l'argent !)", deadline: "Dans le 1er mois", why: "C'est de l'argent gratuit chaque mois. Ne passe pas à côté !", checklist: ["Créer ton compte sur caf.fr", "Préparer ton bail + RIB + attestation de logement", "Remplir la demande d'APL en ligne", "Fournir la quittance de loyer"], tips: ["Fais ta demande dès la signature du bail, même sans RIB français", "Le 1er versement prend souvent 2 mois, prévois le budget"], links: [{ label: "CAF.fr - Faire une demande", url: "https://www.caf.fr" }, { label: "Simulation APL", url: "https://www.caf.fr/allocataires/mes-services-en-ligne/faire-une-simulation" }], relatedCourses: [] },
        { title: "S'inscrire à la Sécurité Sociale", description: "L'assurance maladie est obligatoire et gratuite. Elle couvre tes frais médicaux.", duration: "2-4 semaines", priority: "high", budget: "Gratuit", deadline: "Dans les 3 premiers mois", why: "Sans sécu, une visite chez le médecin coûte 25€ minimum non remboursés.", checklist: ["S'inscrire sur etudiant-etranger.ameli.fr", "Fournir passeport + visa + certificat de scolarité", "Attendre l'attestation de droits", "Commander ta carte Vitale"], tips: ["En attendant la carte Vitale, tu reçois une attestation provisoire", "Prends une mutuelle étudiante complémentaire (souvent 15-30€/mois)"], links: [{ label: "Ameli Étudiants Étrangers", url: "https://etudiant-etranger.ameli.fr" }], relatedCourses: [] },
        { title: "Améliorer ton français", description: "Le français est la clé de l'intégration. Même un niveau basique change tout.", duration: "En continu", priority: "medium", budget: "Gratuit sur la plateforme", why: "Parler français ouvre toutes les portes : emploi, amitiés, administration.", checklist: ["Faire un test de niveau sur la plateforme", "Suivre les cours gratuits de FrancePrepAcademy", "Pratiquer 15 min/jour minimum", "Rejoindre le forum communautaire pour pratiquer"], tips: ["Regarde des séries françaises avec sous-titres français", "L'appli Tandem permet de trouver des partenaires linguistiques gratuits"], links: [{ label: "Nos cours de français", url: "/courses" }], relatedCourses: [] },
        { title: "Construire ton réseau", description: "L'isolement est le plus grand ennemi. Crée des liens dès la première semaine.", duration: "En continu", priority: "medium", budget: "Gratuit", why: "Ton réseau t'aidera à trouver un logement, un stage et des amis.", checklist: ["Rejoindre le forum FrancePrepAcademy", "S'inscrire aux associations étudiantes de ta ville", "Participer aux événements d'accueil de l'université", "Rejoindre des groupes Facebook/WhatsApp de ta communauté"], tips: ["Les BDE organisent souvent des soirées d'intégration gratuites", "Le bénévolat est un excellent moyen de rencontrer des Français"], links: [{ label: "Forum Communautaire", url: "/community" }], relatedCourses: [] },
      ]);
    } finally { setIsGenerating(false); }
  };

  const resetRoadmap = () => { setAnswers({}); setOnboardingStep(0); setRoadmap(null); };

  const completedCoursesCount = enrollments.filter(e => e.completed).length;
  const totalProgress = enrollments.length > 0 ? Math.round(enrollments.reduce((sum, e) => sum + (e.progress_percentage || 0), 0) / enrollments.length) : 0;

  const tabs = [
    { id: "roadmap", label: "Ma Roadmap", icon: Map },
    { id: "chat", label: "Coach IA", icon: MessageCircle },
    { id: "stats", label: "Mon Profil", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/30">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" /><div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" /></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"><Bot className="w-8 h-8 text-white" /></div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight">Ton Coach IA Personnel</h1>
            <p className="text-base sm:text-lg text-purple-200 max-w-xl mx-auto">Roadmap détaillée, checklist d'actions, budget estimé, délais, liens officiels. Tout ce qu'il te faut pour réussir.</p>
          </motion.div>
          {user && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {[
                { label: "Inscrits", value: enrollments.length, icon: BookOpen },
                { label: "Terminés", value: completedCoursesCount, icon: Trophy },
                { label: "Progression", value: `${totalProgress}%`, icon: BarChart3 },
                { label: "Disponibles", value: courses.length, icon: GraduationCap },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                  <s.icon className="w-4 h-4 text-purple-300 mb-1 mx-auto" />
                  <div className="text-xl font-extrabold text-white">{s.value}</div>
                  <div className="text-[10px] text-purple-300">{s.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-14 sm:top-16 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2 overflow-x-auto scrollbar-none">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}>
                <tab.icon className="w-4 h-4" />{tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <AnimatePresence mode="wait">
          {activeTab === "roadmap" && (
            <motion.div key="roadmap" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {isGenerating ? (
                <div className="text-center py-20">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-purple-100" />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" />
                    <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Génération de ta roadmap...</h3>
                  <p className="text-gray-500 text-sm">L'IA analyse ton profil pour créer un parcours sur-mesure avec actions, budget et délais</p>
                </div>
              ) : roadmap ? (
                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Ta Roadmap</h2>
                      <p className="text-sm text-gray-500 mt-1">Clique sur chaque étape pour voir les détails, la checklist et les conseils</p>
                    </div>
                    <Button variant="outline" onClick={resetRoadmap} className="gap-2 rounded-xl flex-shrink-0">
                      <RefreshCw className="w-4 h-4" />Refaire
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {roadmap.map((step, i) => (
                      <RoadmapStep key={i} step={step} index={i} courses={courses} isFirst={i === 0} />
                    ))}
                  </div>
                  <div className="mt-10 text-center">
                    <Link to={createPageUrl("Courses")}>
                      <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white h-12 px-8 rounded-xl text-base font-bold shadow-lg gap-2">
                        <Play className="w-5 h-5" />Commencer mon parcours
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <OnboardingStep key={onboardingStep} question={ONBOARDING_QUESTIONS[onboardingStep]} onAnswer={handleAnswer} stepIndex={onboardingStep} totalSteps={ONBOARDING_QUESTIONS.length} />
                </AnimatePresence>
              )}
            </motion.div>
          )}

          {activeTab === "chat" && (
            <motion.div key="chat" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <AIChat courses={courses} user={user} />
            </motion.div>
          )}

          {activeTab === "stats" && (
            <motion.div key="stats" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-3xl mx-auto">
              {!user ? (
                <Card className="border-0 shadow-xl"><CardContent className="p-10 text-center">
                  <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Connecte-toi pour voir tes stats</h3>
                  <Link to={createPageUrl("Login")}><Button className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl h-12 px-8 gap-2 mt-4"><GraduationCap className="w-5 h-5" />Se connecter</Button></Link>
                </CardContent></Card>
              ) : (
                <div className="space-y-6">
                  <Card className="border-0 shadow-xl"><CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">{user?.full_name?.[0] || user?.email?.[0] || "U"}</div>
                      <div><h3 className="text-lg font-bold text-gray-900">{user?.full_name || "Étudiant"}</h3><p className="text-sm text-gray-500">{user?.email}</p></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-purple-50 rounded-xl p-3 text-center"><BookOpen className="w-5 h-5 text-purple-600 mx-auto mb-1" /><div className="text-xl font-extrabold text-gray-900">{enrollments.length}</div><div className="text-[10px] text-gray-500">Inscrits</div></div>
                      <div className="bg-emerald-50 rounded-xl p-3 text-center"><Trophy className="w-5 h-5 text-emerald-600 mx-auto mb-1" /><div className="text-xl font-extrabold text-gray-900">{completedCoursesCount}</div><div className="text-[10px] text-gray-500">Terminés</div></div>
                      <div className="bg-blue-50 rounded-xl p-3 text-center"><Zap className="w-5 h-5 text-blue-600 mx-auto mb-1" /><div className="text-xl font-extrabold text-gray-900">{totalProgress}%</div><div className="text-[10px] text-gray-500">Progression</div></div>
                    </div>
                  </CardContent></Card>
                  {enrollments.length > 0 && (
                    <Card className="border-0 shadow-xl"><CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">Mes cours</h3>
                      <div className="space-y-2">
                        {enrollments.map(enr => {
                          const c = courses.find(x => x.id === enr.course_id);
                          if (!c) return null;
                          const p = enr.progress_percentage || 0;
                          return (
                            <Link key={enr.id} to={createPageUrl("CourseDetail") + `?id=${enr.course_id}`}>
                              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${p === 100 ? 'bg-emerald-100' : 'bg-purple-100'}`}>{p === 100 ? <CheckCircle className="w-5 h-5 text-emerald-600" /> : <BookOpen className="w-5 h-5 text-purple-600" />}</div>
                                <div className="flex-1 min-w-0"><p className="text-sm font-semibold text-gray-900 truncate">{c.title}</p><div className="flex items-center gap-2 mt-1"><div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${p === 100 ? 'bg-emerald-500' : 'bg-purple-500'}`} style={{ width: `${p}%` }} /></div><span className="text-xs text-gray-400">{Math.round(p)}%</span></div></div>
                                <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </CardContent></Card>
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
