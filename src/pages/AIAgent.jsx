import React, { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot, Sparkles, Send, Loader2, BookOpen, Target, Map, GraduationCap,
  Brain, MessageCircle, ArrowRight, CheckCircle, ChevronRight, ChevronDown,
  Lightbulb, Compass, Trophy, BarChart3, Clock, Zap, Star, Play, RefreshCw,
  Crown, AlertCircle, ExternalLink, Euro, Calendar, FileCheck, ShieldCheck,
  Home, Briefcase, Globe, CheckSquare, Square, ChevronUp, User, Flame,
  TrendingUp, Search, X, ChevronLeft, Lock, Info, Heart, ThumbsUp,
  MessageSquare, Mic, Image, Paperclip, MoreHorizontal,
} from "lucide-react";
import { Course, Enrollment } from "@/api/entities";
import { supabase } from "@/api/supabaseClient";
import { me, isAuthenticated } from "@/api/auth";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { isPremium as checkPremium } from "@/utils/premium";

// ─── ONBOARDING QUESTIONS ────────────────────────────────────────────────────
const ONBOARDING_QUESTIONS = [
  {
    id: "goal",
    question: "Quel est ton objectif principal en France ?",
    subtitle: "Pour personnaliser ta roadmap, dis-moi ce qui t'amène ici",
    icon: Target,
    color: "from-violet-500 to-purple-600",
    options: [
      { label: "Étudier à l'université", value: "studies", icon: "🎓", desc: "Inscription, CROUS, vie campus" },
      { label: "Démarches administratives", value: "admin", icon: "📋", desc: "Titre de séjour, CAF, sécu" },
      { label: "Apprendre le français", value: "french", icon: "🇫🇷", desc: "DELF, DALF, cours, pratique" },
      { label: "Trouver un emploi / stage", value: "work", icon: "💼", desc: "CV, alternance, LinkedIn" },
    ],
  },
  {
    id: "level",
    question: "Quel est ton niveau de français ?",
    subtitle: "Sois honnête, c'est pour mieux t'aider !",
    icon: BarChart3,
    color: "from-blue-500 to-indigo-600",
    options: [
      { label: "Débutant (A1-A2)", value: "beginner", icon: "🌱", desc: "Je comprends peu de choses" },
      { label: "Intermédiaire (B1-B2)", value: "intermediate", icon: "📈", desc: "Je me débrouille" },
      { label: "Avancé (C1-C2)", value: "advanced", icon: "🚀", desc: "Je maîtrise bien le français" },
      { label: "Je ne parle pas français", value: "none", icon: "🆕", desc: "Tout est en anglais pour moi" },
    ],
  },
  {
    id: "timeline",
    question: "Quand arrives-tu (ou es-tu arrivé) en France ?",
    subtitle: "Pour savoir quelles démarches sont urgentes",
    icon: Clock,
    color: "from-emerald-500 to-teal-600",
    options: [
      { label: "Je suis déjà en France", value: "already_here", icon: "🏠", desc: "J'ai besoin d'aide maintenant" },
      { label: "Dans moins de 3 mois", value: "soon", icon: "⏳", desc: "Bientôt, urgence modérée" },
      { label: "Dans 3 à 6 mois", value: "medium", icon: "📅", desc: "J'ai le temps de préparer" },
      { label: "Dans plus de 6 mois", value: "later", icon: "🔮", desc: "Je commence à planifier" },
    ],
  },
  {
    id: "challenge",
    question: "Quelle est ta plus grande difficulté ?",
    subtitle: "Je vais prioriser les solutions à ton problème principal",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-600",
    options: [
      { label: "Trouver un logement", value: "housing", icon: "🏠", desc: "Dossier, VISALE, CROUS..." },
      { label: "Titre de séjour / Préfecture", value: "visa", icon: "📄", desc: "ANEF, préfecture, délais..." },
      { label: "Comprendre le système français", value: "system", icon: "🏛️", desc: "CAF, sécu, impôts..." },
      { label: "S'intégrer socialement", value: "social", icon: "🤝", desc: "Amis, réseau, culture..." },
    ],
  },
  {
    id: "budget",
    question: "Quel est ton budget mensuel approximatif ?",
    subtitle: "Pour adapter les aides et solutions à tes ressources",
    icon: Euro,
    color: "from-rose-500 to-pink-600",
    options: [
      { label: "Moins de 600€/mois", value: "tight", icon: "💰", desc: "J'ai besoin des aides max" },
      { label: "600€ - 1000€/mois", value: "moderate", icon: "💳", desc: "Budget serré mais gérable" },
      { label: "1000€ - 1500€/mois", value: "comfortable", icon: "💵", desc: "Confortable pour étudiant" },
      { label: "Plus de 1500€/mois", value: "high", icon: "💎", desc: "Budget large" },
    ],
  },
];

// ─── SUGGESTED QUESTIONS FOR CHAT ───────────────────────────────────────────
const SUGGESTED_QUESTIONS = [
  { text: "Comment faire ma demande CAF ?", icon: "🏠", category: "Logement" },
  { text: "Comment obtenir mon titre de séjour ?", icon: "📄", category: "Admin" },
  { text: "Je veux préparer le DELF B2", icon: "🎓", category: "Français" },
  { text: "Comment trouver un logement étudiant ?", icon: "🔑", category: "Logement" },
  { text: "Je cherche un stage en France", icon: "💼", category: "Emploi" },
  { text: "Comment ouvrir un compte bancaire ?", icon: "🏦", category: "Banque" },
  { text: "Que faire dès mon arrivée en France ?", icon: "✈️", category: "Arrivée" },
  { text: "Comment fonctionne la sécu étudiante ?", icon: "❤️", category: "Santé" },
];

// ─── CATEGORY COLORS ─────────────────────────────────────────────────────────
const CATEGORY_COLORS = {
  "Logement": "bg-blue-50 text-blue-700 border-blue-200",
  "Admin": "bg-red-50 text-red-700 border-red-200",
  "Français": "bg-purple-50 text-purple-700 border-purple-200",
  "Emploi": "bg-amber-50 text-amber-700 border-amber-200",
  "Banque": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Arrivée": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "Santé": "bg-rose-50 text-rose-700 border-rose-200",
};

// ─── CALL GEMINI API ──────────────────────────────────────────────────────────
async function callGemini(prompt) {
  const response = await fetch("/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  const data = await response.json();
  return data.content || data.text || "";
}

// ─── ONBOARDING STEP COMPONENT ───────────────────────────────────────────────
function OnboardingStep({ question, onAnswer, stepIndex, totalSteps, onBack }) {
  const Icon = question.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Progress */}
      <div className="flex items-center gap-3 mb-8">
        {stepIndex > 0 && (
          <button onClick={onBack} className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-400">
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        <div className="flex-1 flex gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
              i < stepIndex ? 'bg-gradient-to-r from-violet-500 to-purple-500'
              : i === stepIndex ? 'bg-gradient-to-r from-violet-400 to-purple-400'
              : 'bg-gray-100'
            }`} />
          ))}
        </div>
        <span className="text-xs font-bold text-gray-400 whitespace-nowrap">{stepIndex + 1} / {totalSteps}</span>
      </div>

      {/* Icon + Question */}
      <div className="text-center mb-8">
        <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${question.color} flex items-center justify-center shadow-xl shadow-purple-500/20`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight mb-2">
          {question.question}
        </h2>
        <p className="text-gray-500 text-sm">{question.subtitle}</p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {question.options.map((option) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onAnswer(question.id, option.value)}
            className="bg-white border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 rounded-2xl p-5 text-left transition-all group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-purple-50/0 group-hover:from-purple-50/40 group-hover:to-transparent transition-all duration-300" />
            <div className="relative flex items-start gap-4">
              <span className="text-3xl leading-none mt-0.5">{option.icon}</span>
              <div>
                <p className="text-base font-bold text-gray-800 group-hover:text-purple-800 transition-colors">{option.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{option.desc}</p>
              </div>
            </div>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-200 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

// ─── ROADMAP STEP COMPONENT ──────────────────────────────────────────────────
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
    high: { label: "Urgent", color: "bg-red-50 text-red-600 border-red-200", barColor: "bg-red-500", glow: "shadow-red-500/10" },
    medium: { label: "Important", color: "bg-amber-50 text-amber-600 border-amber-200", barColor: "bg-amber-500", glow: "shadow-amber-500/10" },
    low: { label: "Recommandé", color: "bg-blue-50 text-blue-600 border-blue-200", barColor: "bg-blue-500", glow: "shadow-blue-500/10" },
  };
  const prio = priorityConfig[step.priority] || priorityConfig.medium;

  const stepColors = [
    "from-violet-500 to-purple-600",
    "from-indigo-500 to-blue-600",
    "from-blue-500 to-cyan-600",
    "from-cyan-500 to-teal-600",
    "from-teal-500 to-emerald-600",
    "from-emerald-500 to-green-600",
    "from-green-500 to-lime-600",
    "from-amber-500 to-orange-600",
    "from-orange-500 to-red-600",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
    >
      <Card className={`border overflow-hidden transition-all duration-300 ${expanded ? `shadow-xl ${prio.glow} border-purple-200/60` : 'shadow-md hover:shadow-lg border-gray-100'}`}>
        <CardContent className="p-0">
          <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
            <div className="flex items-stretch">
              {/* Step number */}
              <div className={`w-14 sm:w-16 flex-shrink-0 flex flex-col items-center justify-center gap-1.5 bg-gradient-to-b ${stepColors[index] || stepColors[0]} py-4`}>
                <span className="text-xl leading-none">{step.emoji || "📌"}</span>
                <span className="text-xs font-extrabold text-white/80">{index + 1}</span>
              </div>

              <div className="flex-1 p-4 sm:p-5 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">{step.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                    <Badge className={`${prio.color} border text-[10px] font-bold px-2 py-0.5 hidden sm:flex`}>
                      {prio.label}
                    </Badge>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 ${expanded ? 'bg-purple-100 rotate-180' : 'bg-gray-100'}`}>
                      <ChevronDown className={`w-4 h-4 ${expanded ? 'text-purple-600' : 'text-gray-400'}`} />
                    </div>
                  </div>
                </div>

                {/* Savings + deadline badges */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {step.estimatedSavings && (
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-200">
                      <Euro className="w-3 h-3" />{step.estimatedSavings}
                    </span>
                  )}
                  {step.officialDeadlineWarning && (
                    <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-100">
                      <AlertCircle className="w-3 h-3" />{step.officialDeadlineWarning}
                    </span>
                  )}
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2.5 text-xs text-gray-400">
                  {step.duration && <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{step.duration}</span>}
                  {step.budget && <span className="flex items-center gap-1"><Euro className="w-3 h-3" />{step.budget}</span>}
                  {step.deadline && <span className="flex items-center gap-1 text-red-400 font-medium"><Calendar className="w-3 h-3" />{step.deadline}</span>}
                  {totalTasks > 0 && (
                    <span className="flex items-center gap-1">
                      <CheckSquare className="w-3 h-3" />
                      <span className={checkedCount === totalTasks ? "text-emerald-500 font-bold" : ""}>{checkedCount}/{totalTasks}</span>
                    </span>
                  )}
                </div>

                {/* Mini progress bar */}
                {totalTasks > 0 && (
                  <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
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
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-6 pt-1 border-t border-gray-100">
                  {/* Why section */}
                  {step.why && (
                    <div className="mt-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-100">
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <Lightbulb className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-purple-700 mb-1 uppercase tracking-wide">Pourquoi c'est important</p>
                          <p className="text-sm text-purple-700 leading-relaxed">{step.why}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Checklist */}
                  {step.checklist && step.checklist.length > 0 && (
                    <div className="mt-4">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5" /> Actions à faire ({checkedCount}/{totalTasks})
                      </p>
                      <div className="space-y-2">
                        {step.checklist.map((item, i) => (
                          <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); toggleCheck(i); }}
                            className={`w-full flex items-start gap-3 p-3 rounded-xl border-2 transition-all text-left group ${
                              checkedItems[i]
                                ? 'bg-emerald-50 border-emerald-200'
                                : 'bg-white border-gray-100 hover:border-purple-200 hover:bg-purple-50/30'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                              checkedItems[i] ? 'bg-emerald-500 border-emerald-500 scale-110' : 'border-gray-300 group-hover:border-purple-400'
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
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Star className="w-3.5 h-3.5 text-amber-500" /> Astuces d'expert
                      </p>
                      <div className="space-y-2">
                        {step.tips.map((tip, i) => (
                          <div key={i} className="flex items-start gap-2.5 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-3.5 border border-amber-100">
                            <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Zap className="w-3.5 h-3.5 text-amber-600" />
                            </div>
                            <p className="text-sm text-amber-900 leading-relaxed">{tip}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links + Courses in a 2-column layout */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Official links */}
                    {step.links && step.links.length > 0 && (
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5" /> Liens officiels
                        </p>
                        <div className="space-y-1.5">
                          {step.links.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors border border-blue-100 group">
                              <ExternalLink className="w-3 h-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="truncate">{link.label}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Related courses */}
                    {step.relatedCourses && step.relatedCourses.length > 0 && (
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-purple-500" /> Cours recommandés
                        </p>
                        <div className="space-y-1.5">
                          {step.relatedCourses.map((name, ci) => {
                            const match = courses?.find(c =>
                              c.title.toLowerCase().includes(name.toLowerCase()) ||
                              name.toLowerCase().includes(c.title.toLowerCase().substring(0, 15))
                            );
                            return (
                              <Link key={ci} to={match ? createPageUrl("CourseDetail") + `?id=${match.id}` : createPageUrl("Courses")}>
                                <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 text-purple-700 rounded-lg text-xs font-medium hover:bg-purple-100 transition-colors border border-purple-100 group">
                                  <BookOpen className="w-3 h-3 flex-shrink-0" />
                                  <span className="truncate flex-1">{name}</span>
                                  <ArrowRight className="w-3 h-3 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── AI CHAT COMPONENT ───────────────────────────────────────────────────────
function AIChat({ courses, user }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Parse assistant response to find course mentions
  const parseCourseLinks = useCallback((text, courseList) => {
    if (!courseList || courseList.length === 0) return [{ type: "text", content: text }];
    let result = [{ type: "text", content: text }];
    const courseMatches = [];
    courseList.forEach(course => {
      const title = course.title;
      if (title.length > 8 && text.toLowerCase().includes(title.toLowerCase().substring(0, 20))) {
        courseMatches.push(course);
      }
    });
    return { text, courses: courseMatches.slice(0, 3) };
  }, []);

  const handleSend = async (questionText) => {
    const userMessage = (questionText || input).trim();
    if (!userMessage || isLoading) return;
    setInput("");
    setShowSuggestions(false);
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const coursesList = courses?.slice(0, 30).map(c =>
        `- "${c.title}" (${c.is_premium ? 'Premium' : 'Gratuit'}, catégorie: ${c.category || 'Général'})`
      ).join('\n') || '';

      const prompt = `Tu es le Coach IA de FrancePrepAcademy, une plateforme pour les étudiants internationaux en France. Tu es expert, chaleureux et précis.

COURS DISPONIBLES SUR LA PLATEFORME :
${coursesList}

INSTRUCTIONS IMPORTANTES :
- Réponds en français, de manière concise et très utile (5-8 phrases maximum)
- Sois TRÈS concret et pratique : donne des étapes, des chiffres, des délais réels
- Si tu mentionnes un cours de la plateforme, cite son TITRE EXACT entre guillemets
- Si la question concerne une démarche administrative, donne les étapes précises
- Ajoute 1-2 liens officiels pertinents (caf.fr, ameli.fr, service-public.fr, etc.)
- Si pertinent, suggère des cours de la plateforme en disant "Je te recommande le cours : [TITRE EXACT]"

Question de l'étudiant : ${userMessage}`;

      const response = await callGemini(prompt);

      // Find mentioned courses in response
      const mentionedCourses = [];
      if (courses) {
        courses.forEach(course => {
          if (course.title.length > 8 && response.toLowerCase().includes(course.title.toLowerCase().substring(0, 15))) {
            mentionedCourses.push(course);
          }
        });
      }

      setMessages(prev => [...prev, {
        role: "assistant",
        content: response,
        mentionedCourses: mentionedCourses.slice(0, 3)
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Désolé, une erreur s'est produite. Réessaie dans un instant.",
        isError: true
      }]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Chat header */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 rounded-t-2xl text-white p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center border border-white/30">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-indigo-700" />
          </div>
          <div>
            <h3 className="font-bold text-base">Coach IA FrancePrepAcademy</h3>
            <p className="text-xs text-purple-200">Expert en intégration des étudiants internationaux</p>
          </div>
          <div className="ml-auto flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1.5">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs text-white/80 font-medium">En ligne</span>
          </div>
        </div>

        {/* Capabilities bar */}
        <div className="flex gap-2 mt-3 flex-wrap">
          {["Logement & CAF", "Titre de séjour", "Emploi & Stages", "Vie étudiante", "Santé"].map(tag => (
            <span key={tag} className="text-[10px] font-semibold bg-white/10 text-white/80 px-2.5 py-1 rounded-full border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Messages area */}
      <div className="bg-white border-x border-gray-100 flex flex-col" style={{ height: "min(500px, calc(100vh - 380px))" }}>
        <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 scroll-smooth">

          {/* Welcome state */}
          {messages.length === 0 && !isLoading && (
            <div className="flex flex-col items-center justify-center h-full text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Bonjour ! Je suis ton Coach IA 👋</h3>
              <p className="text-sm text-gray-500 max-w-sm mb-6 leading-relaxed">
                Je connais tous les cours de la plateforme et je suis expert des démarches administratives en France. Pose-moi n'importe quelle question !
              </p>

              {/* Suggested questions */}
              {showSuggestions && (
                <div className="w-full max-w-lg">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Questions populaires</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(q.text)}
                        className="flex items-center gap-2.5 text-left px-3.5 py-3 bg-gray-50 hover:bg-purple-50 border border-gray-100 hover:border-purple-200 rounded-xl transition-all group text-sm"
                      >
                        <span className="text-lg leading-none">{q.icon}</span>
                        <span className="flex-1 font-medium text-gray-700 group-hover:text-purple-800 text-xs leading-relaxed">{q.text}</span>
                        <ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-purple-400 flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Messages */}
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 mb-1">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div className={`max-w-[82%] ${msg.role === "user" ? "" : ""}`}>
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-gradient-to-br from-violet-600 to-purple-700 text-white rounded-tr-md shadow-lg shadow-purple-500/20"
                    : msg.isError
                    ? "bg-red-50 text-red-700 border border-red-100 rounded-tl-md"
                    : "bg-gray-50 text-gray-800 border border-gray-100 rounded-tl-md shadow-sm"
                }`}>
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>

                {/* Mentioned courses chips */}
                {msg.role === "assistant" && msg.mentionedCourses && msg.mentionedCourses.length > 0 && (
                  <div className="mt-2 space-y-1.5">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider ml-1">Cours recommandés</p>
                    {msg.mentionedCourses.map((course, ci) => (
                      <Link key={ci} to={createPageUrl("CourseDetail") + `?id=${course.id}`}>
                        <div className="flex items-center gap-2 px-3 py-2.5 bg-purple-50 border border-purple-100 hover:border-purple-300 rounded-xl transition-all group cursor-pointer">
                          <BookOpen className="w-4 h-4 text-purple-600 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-purple-800 truncate">{course.title}</p>
                            <p className="text-[10px] text-purple-500">{course.is_premium ? "Premium ✨" : "Gratuit 🆓"}</p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Quick follow-up suggestions for assistant messages */}
                {msg.role === "assistant" && i === messages.length - 1 && !isLoading && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["Explique-moi en détail", "Quels cours recommandes-tu ?", "Donne-moi les délais précis"].map((suggestion, si) => (
                      <button
                        key={si}
                        onClick={() => handleSend(suggestion)}
                        className="text-[11px] font-medium bg-white border border-gray-200 hover:border-purple-300 hover:bg-purple-50 text-gray-600 hover:text-purple-700 px-3 py-1.5 rounded-lg transition-all"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mb-1">
                  <User className="w-4 h-4 text-gray-500" />
                </div>
              )}
            </motion.div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-end gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-gray-50 px-4 py-3 rounded-2xl rounded-tl-md border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => (
                      <div key={i} className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400">En train de réfléchir...</span>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="bg-white border border-gray-200 rounded-b-2xl p-3 shadow-xl">
        <div className="flex gap-2 items-end">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = "auto";
                e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Pose ta question sur la France, les démarches, les cours..."
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-sm resize-none overflow-hidden leading-relaxed"
              rows={1}
              disabled={isLoading}
              style={{ minHeight: "44px", maxHeight: "120px" }}
            />
          </div>
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-purple-700 text-white flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-40 flex-shrink-0 active:scale-95"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-[10px] text-gray-400 mt-2 px-1">
          Appuie sur <kbd className="bg-gray-100 px-1 py-0.5 rounded text-gray-500 font-mono">Entrée</kbd> pour envoyer • <kbd className="bg-gray-100 px-1 py-0.5 rounded text-gray-500 font-mono">Maj+Entrée</kbd> pour un saut de ligne
        </p>
      </div>
    </div>
  );
}

// ─── PROFILE / STATS COMPONENT ───────────────────────────────────────────────
function ProfileTab({ user, enrollments, courses, totalProgress, completedCoursesCount }) {
  if (!user) {
    return (
      <Card className="border-0 shadow-xl max-w-md mx-auto">
        <CardContent className="p-10 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mx-auto mb-5">
            <User className="w-10 h-10 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Connecte-toi pour voir ton profil</h3>
          <p className="text-sm text-gray-500 mb-6">Accède à tes statistiques, ta progression et tes cours en un clin d'œil.</p>
          <Link to={createPageUrl("Login")}>
            <Button className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl h-12 px-8 gap-2 shadow-lg shadow-purple-500/30">
              <GraduationCap className="w-5 h-5" /> Se connecter
            </Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  const inProgress = enrollments.filter(e => !e.completed && (e.progress_percentage || 0) > 0);
  const completed = enrollments.filter(e => e.completed);
  const notStarted = enrollments.filter(e => (e.progress_percentage || 0) === 0);

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      {/* Profile card */}
      <Card className="border-0 shadow-xl overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700" />
        <CardContent className="px-6 pb-6 -mt-10">
          <div className="flex items-end justify-between mb-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white text-3xl font-extrabold border-4 border-white shadow-xl">
              {user?.full_name?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || "U"}
            </div>
            <Link to={createPageUrl("Courses")}>
              <Button className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl h-10 px-4 text-sm gap-1.5 shadow-md shadow-purple-500/20">
                <Play className="w-4 h-4" /> Mes cours
              </Button>
            </Link>
          </div>
          <h3 className="text-xl font-bold text-gray-900">{user?.full_name || "Étudiant"}</h3>
          <p className="text-sm text-gray-400">{user?.email}</p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
            {[
              { label: "Cours inscrits", value: enrollments.length, icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
              { label: "Terminés", value: completedCoursesCount, icon: Trophy, color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: "En cours", value: inProgress.length, icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
              { label: "Progression", value: `${totalProgress}%`, icon: BarChart3, color: "text-amber-600", bg: "bg-amber-50" },
            ].map((s, i) => (
              <div key={i} className={`${s.bg} rounded-xl p-4 text-center`}>
                <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-1.5`} />
                <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
                <div className="text-[11px] font-medium text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Overall progress bar */}
          {enrollments.length > 0 && (
            <div className="mt-5">
              <div className="flex justify-between text-xs font-medium text-gray-500 mb-1.5">
                <span>Progression globale</span>
                <span className="text-purple-600 font-bold">{totalProgress}%</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-700"
                  style={{ width: `${totalProgress}%` }}
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* In progress courses */}
      {inProgress.length > 0 && (
        <Card className="border-0 shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" /> En cours ({inProgress.length})
            </h3>
            <div className="space-y-3">
              {inProgress.slice(0, 5).map(enr => {
                const c = courses.find(x => x.id === enr.course_id);
                if (!c) return null;
                const p = enr.progress_percentage || 0;
                return (
                  <Link key={enr.id} to={createPageUrl("CourseDetail") + `?id=${enr.course_id}`}>
                    <div className="flex items-center gap-3 p-3.5 rounded-xl hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all group cursor-pointer">
                      <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">{c.title}</p>
                        <div className="flex items-center gap-2 mt-1.5">
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full" style={{ width: `${p}%` }} />
                          </div>
                          <span className="text-xs font-bold text-blue-600 whitespace-nowrap">{Math.round(p)}%</span>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-400 flex-shrink-0" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Completed courses */}
      {completed.length > 0 && (
        <Card className="border-0 shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-emerald-500" /> Terminés ({completed.length})
            </h3>
            <div className="space-y-2">
              {completed.slice(0, 5).map(enr => {
                const c = courses.find(x => x.id === enr.course_id);
                if (!c) return null;
                return (
                  <Link key={enr.id} to={createPageUrl("CourseDetail") + `?id=${enr.course_id}`}>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-all group">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      </div>
                      <p className="text-sm font-semibold text-gray-700 flex-1 truncate group-hover:text-emerald-800">{c.title}</p>
                      <Badge className="bg-emerald-100 text-emerald-700 border-0 text-[10px] font-bold flex-shrink-0">✓ Fini</Badge>
                    </div>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* CTA to explore more courses */}
      <div className="text-center py-4">
        <Link to={createPageUrl("Courses")}>
          <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white h-12 px-8 rounded-xl font-bold shadow-xl shadow-purple-500/20 gap-2">
            <Search className="w-5 h-5" /> Explorer tous les cours
          </Button>
        </Link>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
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
    if (onboardingStep < ONBOARDING_QUESTIONS.length - 1) {
      setOnboardingStep(prev => prev + 1);
    } else {
      generateRoadmap(a);
    }
  };

  const handleBack = () => {
    if (onboardingStep > 0) setOnboardingStep(prev => prev - 1);
  };

  const generateRoadmap = async (ua) => {
    setIsGenerating(true);
    try {
      const goalKeywords = (ua.goal || "").toLowerCase();
      const priorityCategories = goalKeywords.includes("trava") || goalKeywords.includes("emploi") || goalKeywords.includes("stage")
        ? ["insertion_professionnelle", "administration", "budget_finances"]
        : goalKeywords.includes("étude") || goalKeywords.includes("univer")
        ? ["preparation_academique", "administration", "integration_administrative"]
        : goalKeywords.includes("logement")
        ? ["logement", "budget_finances", "integration_administrative"]
        : ["integration_administrative", "administration", "budget_finances"];

      const sortedCourses = [...courses].sort((a, b) => {
        const aPrio = priorityCategories.indexOf(a.category);
        const bPrio = priorityCategories.indexOf(b.category);
        return (aPrio === -1 ? 99 : aPrio) - (bPrio === -1 ? 99 : bPrio);
      });

      const coursesList = sortedCourses.slice(0, 15).map(c =>
        `- "${c.title}" (${c.is_premium ? 'Premium' : 'Gratuit'}, ${c.category || 'Général'})`
      ).join('\n');

      const goalLabel = { studies: "Étudier à l'université", admin: "Démarches administratives", french: "Apprendre le français", work: "Trouver un emploi / stage" }[ua.goal] || ua.goal;
      const levelLabel = { beginner: "Débutant (A1-A2)", intermediate: "Intermédiaire (B1-B2)", advanced: "Avancé (C1-C2)", none: "Ne parle pas français" }[ua.level] || ua.level;
      const timelineLabel = { already_here: "Déjà en France", soon: "Dans moins de 3 mois", medium: "Dans 3 à 6 mois", later: "Dans plus de 6 mois" }[ua.timeline] || ua.timeline;
      const challengeLabel = { housing: "Trouver un logement", visa: "Titre de séjour / Préfecture", system: "Comprendre le système français", social: "S'intégrer socialement" }[ua.challenge] || ua.challenge;
      const budgetLabel = { tight: "Moins de 600€/mois", moderate: "600-1000€/mois", comfortable: "1000-1500€/mois", high: "Plus de 1500€/mois" }[ua.budget] || ua.budget;

      const prompt = `Tu es un expert senior en integration des etudiants internationaux en France, avec 15 ans d'experience. Genere une roadmap ULTRA-PERSONNALISEE pour cet etudiant.

PROFIL :
- Objectif : ${goalLabel}
- Français : ${levelLabel}
- Arrivee : ${timelineLabel}
- Defi : ${challengeLabel}
- Budget : ${budgetLabel}

COURS DISPONIBLES :
${coursesList}

INSTRUCTIONS CRITIQUES :
- Genere un JSON array de 7 à 9 etapes DETAILLEES et SPECIFIQUES au profil
- Si deja en France, commence par l'URGENT (carte vitale, CAF, titre de sejour)
- Si budget serre, priorise les aides (APL jusqu'a 400€/mois, bourses CROUS, etc.)
- Pour emploi/stage : LinkedIn, CV francais, offres de stage, reseautage
- Sois ULTRA-CONCRET : chiffres reels, delais precis, montants exacts

Chaque etape DOIT avoir EXACTEMENT :
- title: string (max 6 mots, percutant)
- emoji: string (1 emoji)
- description: string (3-4 phrases, COMMENT faire, pas juste QUOI faire)
- duration: string (ex: "3-5 jours ouvrables")
- priority: "high" | "medium" | "low"
- budget: string (montant precis, ex: "Gratuit" ou "25-40€" ou "Rembourse par CAF ensuite")
- deadline: string | null (delai officiel si existe)
- why: string (impact concret avec chiffres si possible)
- checklist: string[] (5-8 actions SPECIFIQUES et chronologiques)
- tips: string[] (3-5 astuces INSIDER peu connues)
- links: [{label: string, url: string}] (3-5 vrais liens officiels: caf.fr, ameli.fr, service-public.fr, etc.)
- relatedCourses: string[] (1-3 TITRES EXACTS de cours de la plateforme ci-dessus, ou [] si aucun pertinent)
- estimatedSavings: string | null (ex: "Jusqu'a 400€/mois avec APL")
- officialDeadlineWarning: string | null (alerte si deadline officielle critique)

REPONDS UNIQUEMENT avec le JSON array valide, sans markdown ni texte supplementaire. Tout en francais.`;

      const response = await callGemini(prompt);

      let parsed = response;
      if (typeof parsed === "string") {
        let cleaned = parsed.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
        try { parsed = JSON.parse(cleaned); } catch (_) {
          const m = cleaned.match(/\[[\s\S]*\]/);
          if (m) { try { parsed = JSON.parse(m[0]); } catch (_2) {} }
        }
      }
      if (parsed && !Array.isArray(parsed) && typeof parsed === "object") {
        const arr = Object.values(parsed).find(v => Array.isArray(v));
        if (arr) parsed = arr;
      }
      if (Array.isArray(parsed) && parsed.length > 0) setRoadmap(parsed);
      else throw new Error("Invalid format");
    } catch (error) {
      console.error("Error generating roadmap:", error);
      // Fallback roadmap
      setRoadmap([
        { title: "Ouvrir un compte bancaire", emoji: "🏦", description: "C'est la première démarche prioritaire. Choisissez entre banques en ligne (Boursorama, Hello Bank – souvent gratuites) et banques classiques. En ligne, l'ouverture prend 5-10 jours ; en agence, c'est plus rapide avec un RDV. Apportez : passeport, visa, justificatif de domicile ou attestation d'hébergement.", duration: "3-7 jours", priority: "high", budget: "Gratuit (banques en ligne) à 2€/mois", deadline: "Dès l'arrivée", why: "Sans compte bancaire français, vous ne pouvez recevoir ni CAF, ni bourse, ni salaire. C'est le point de départ absolu.", checklist: ["Comparer Boursorama, Hello Bank, Fortuneo (sans frais)", "Préparer : passeport + visa + justificatif domicile", "Ouvrir en ligne ou prendre RDV en agence", "Activer la carte bancaire et noter le code PIN", "Demander votre RIB (nécessaire pour toutes démarches)"], tips: ["Hello Bank offre souvent 80€ de bienvenue pour les nouveaux comptes", "La Banque Postale accepte facilement les étudiants étrangers", "Gardez l'attestation provisoire de compte pour vos démarches CAF en attendant le RIB"], links: [{ label: "Boursorama Banque", url: "https://www.boursorama.com" }, { label: "Hello Bank Étudiant", url: "https://www.hellobank.fr" }, { label: "Comparer les banques", url: "https://www.service-public.fr/particuliers/vosdroits/F2428" }], relatedCourses: [], estimatedSavings: null, officialDeadlineWarning: null },
        { title: "Demander l'APL (CAF)", emoji: "🏠", description: "L'aide personnalisée au logement peut couvrir 30 à 60% de votre loyer selon votre situation. Faites la demande dès la signature du bail, même sans RIB français – la CAF accepte les paiements en différé. Le 1er versement intervient 2 mois après la signature. Connectez-vous sur caf.fr et suivez le formulaire 'Mes aides logement'.", duration: "2-3 semaines pour constitution + 2 mois d'attente", priority: "high", budget: "Gratuit (vous recevez de l'argent !)", deadline: "Dès signature du bail", why: "L'APL peut vous faire économiser jusqu'à 400€/mois selon la ville. À Paris, c'est souvent 200-300€/mois pour un studio.", checklist: ["Créer votre compte sur caf.fr avec votre email", "Scanner votre bail de location signé", "Préparer : RIB + bail + attestation de logement + justificatifs ressources", "Remplir la demande APL en ligne", "Télécharger l'attestation de dépôt comme preuve", "Déclarer vos ressources annuellement (important !)"], tips: ["Faites la demande le jour même de la signature du bail pour ne pas perdre de droits", "Si votre loyer est supérieur à un certain plafond, vous recevrez quand même une aide partielle", "L'APL étudiant est souvent plus simple à obtenir qu'on ne le croit – tentez votre chance même si incertain"], links: [{ label: "CAF.fr - Faire une demande", url: "https://www.caf.fr" }, { label: "Simulateur APL", url: "https://wwwd.caf.fr/wps/portal/caffr/aidesetservices/lesservicesenligne/estimervosdroits/lesinformationsutiles" }, { label: "Guide APL étudiants étrangers", url: "https://www.service-public.fr/particuliers/vosdroits/F1280" }], relatedCourses: [], estimatedSavings: "Jusqu'à 400€/mois", officialDeadlineWarning: null },
        { title: "S'inscrire à la Sécurité Sociale", emoji: "❤️", description: "En tant qu'étudiant étranger, vous devez vous inscrire à l'Assurance Maladie (CPAM). Rendez-vous sur etudiant-etranger.ameli.fr et créez votre compte. Vous recevrez d'abord un numéro provisoire, puis votre numéro définitif et votre Carte Vitale sous 2-6 mois. En attendant, l'attestation de droits suffit.", duration: "2-4 semaines pour l'inscription", priority: "high", budget: "Gratuit", deadline: "Dans les 3 premiers mois suivant l'arrivée", why: "Une consultation chez le médecin coûte 25€ sans être affilié. Avec la sécu, vous êtes remboursé à 70%. Une mutuelle complémentaire (15-30€/mois) couvre le reste.", checklist: ["Aller sur etudiant-etranger.ameli.fr", "Créer votre compte avec email + passeport", "Uploader : certificat de scolarité + passeport + visa + justificatif domicile", "Attendre l'attestation de droits provisoire (1-2 semaines)", "Déclarer un médecin traitant pour être remboursé normalement", "Commander votre Carte Vitale dès réception du numéro définitif"], tips: ["Prenez une mutuelle complémentaire – les étudiants peuvent bénéficier de la complémentaire santé solidaire (CSS) si revenus faibles", "Déclarez un médecin traitant immédiatement sur ameli.fr pour éviter les malus de remboursement", "Les urgences sont toujours gratuites peu importe votre situation"], links: [{ label: "Ameli Étudiants Étrangers", url: "https://etudiant-etranger.ameli.fr" }, { label: "Complémentaire santé solidaire", url: "https://www.ameli.fr/assure/droits-demarches/difficultes-acces-droits-soins/complementaire-sante" }, { label: "Trouver un médecin traitant", url: "https://www.ameli.fr/assure/sante/medecin-traitant/choisir-declarer-medecin-traitant" }], relatedCourses: [], estimatedSavings: "200-400€/an en frais médicaux couverts", officialDeadlineWarning: "Doit être fait dans les 3 premiers mois pour une couverture optimale" },
        { title: "Renouveler son titre de séjour", emoji: "📄", description: "Si vous êtes déjà en France avec un visa, vous devez valider votre VLS-TS dans les 3 mois sur le portail ANEF (administration-etrangers-en-france.interieur.gouv.fr). Pour le renouvellement annuel, déposez le dossier au moins 2 mois avant expiration pour éviter les ruptures de droits.", duration: "2-4 mois (délais préfecture)", priority: "high", budget: "269€ (timbre fiscal)", deadline: "2 mois avant expiration du titre", why: "Un titre de séjour expiré entraîne la perte de tous vos droits (travail, banque, CAF). Ne laissez jamais expirer sans avoir déposé la demande.", checklist: ["Créer votre compte sur l'ANEF", "Rassembler : certificat de scolarité + passeport + titre actuel + justificatif domicile + photos biométriques", "Acheter le timbre fiscal sur timbres.impots.gouv.fr", "Déposer le dossier en ligne sur l'ANEF", "Garder le récépissé de dépôt (vos droits continuent pendant l'attente)", "Répondre à toute demande de pièce complémentaire"], tips: ["L'ANEF enregistre tout en ligne – n'allez pas en préfecture sauf convocation", "Si votre titre expire bientôt, le récépissé a la même valeur légale pendant l'instruction", "Scannez tous vos documents en avance et conservez les originaux"], links: [{ label: "Portail ANEF", url: "https://administration-etrangers-en-france.interieur.gouv.fr" }, { label: "Acheter timbre fiscal", url: "https://timbres.impots.gouv.fr" }, { label: "Service-Public Titre de séjour", url: "https://www.service-public.fr/particuliers/vosdroits/N19805" }], relatedCourses: [], estimatedSavings: null, officialDeadlineWarning: "Doit être déposé au moins 2 mois avant expiration du titre actuel" },
        { title: "Améliorer son français", emoji: "🇫🇷", description: "Le français est votre meilleur atout en France. Même un niveau B1-B2 change radicalement votre expérience. Sur FrancePrepAcademy, vous avez accès à des cours spécialisés pour les démarches administratives, les entretiens d'embauche et la vie quotidienne. Pratiquez 20 minutes par jour minimum.", duration: "En continu", priority: "medium", budget: "Gratuit sur la plateforme", deadline: null, why: "Parler français ouvre toutes les portes : meilleures offres d'emploi, intégration sociale plus rapide, accès à toutes les démarches sans intermédiaire.", checklist: ["Faire un test de niveau sur la plateforme", "Suivre les cours adaptés à votre niveau (A1 → C2)", "Pratiquer avec des Français via des échanges linguistiques (Tandem, HelloTalk)", "Regarder 30 min de séries françaises par jour (sous-titres français)", "S'inscrire à un groupe de conversation en bibliothèque ou université"], tips: ["L'application Tandem est gratuite et permet de pratiquer avec des locuteurs natifs", "Les bibliothèques municipales proposent souvent des ateliers de français gratuits", "Regardez les JT de France 2 ou Arte pour un français soutenu"], links: [{ label: "Nos cours de français", url: "/courses" }, { label: "Tandem - Échanges linguistiques", url: "https://www.tandem.net" }, { label: "TV5Monde - Apprendre le français", url: "https://apprendre.tv5monde.com" }], relatedCourses: [], estimatedSavings: null, officialDeadlineWarning: null },
      ]);
    } finally { setIsGenerating(false); }
  };

  const resetRoadmap = () => { setAnswers({}); setOnboardingStep(0); setRoadmap(null); };

  const completedCoursesCount = enrollments.filter(e => e.completed).length;
  const totalProgress = enrollments.length > 0
    ? Math.round(enrollments.reduce((sum, e) => sum + (e.progress_percentage || 0), 0) / enrollments.length)
    : 0;

  const tabs = [
    { id: "roadmap", label: "Ma Roadmap", icon: Map },
    { id: "chat", label: "Coach IA", icon: Brain },
    { id: "stats", label: "Mon Profil", icon: User },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/20 to-indigo-50/20">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-violet-700 via-purple-600 to-indigo-700 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl" />
          <div className="absolute top-10 right-10 w-60 h-60 bg-indigo-400/20 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-1/2 w-96 h-48 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-bold px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Propulsé par l'Intelligence Artificielle
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              Ton Coach IA Personnel
            </h1>
            <p className="text-base sm:text-lg text-purple-200 max-w-2xl mx-auto leading-relaxed">
              Roadmap sur-mesure, checklist d'actions, budget estimé, délais officiels et liens directs.
              Tout ce qu'il te faut pour réussir ton intégration en France.
            </p>
          </motion.div>

          {/* Stats bar (if authenticated) */}
          {user && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto"
            >
              {[
                { label: "Cours inscrits", value: enrollments.length, icon: BookOpen },
                { label: "Terminés", value: completedCoursesCount, icon: Trophy },
                { label: "Progression", value: `${totalProgress}%`, icon: TrendingUp },
                { label: "Cours dispo", value: courses.length, icon: GraduationCap },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 text-center">
                  <s.icon className="w-5 h-5 text-purple-300 mb-1.5 mx-auto" />
                  <div className="text-2xl font-extrabold text-white">{s.value}</div>
                  <div className="text-[11px] font-medium text-purple-300 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Quick action chips */}
          {!user && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap justify-center gap-2">
              {["🏠 Logement & CAF", "📄 Titre de séjour", "💼 Emploi & Stage", "❤️ Santé & Sécu", "🎓 Études"].map((chip, i) => (
                <span key={i} className="text-sm font-medium bg-white/10 text-white/80 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                  {chip}
                </span>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Sticky tabs */}
      <div className="sticky top-14 sm:top-16 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-200/80 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2.5 overflow-x-auto scrollbar-none">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {tab.id === "chat" && (
                  <span className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <AnimatePresence mode="wait">

          {/* ROADMAP TAB */}
          {activeTab === "roadmap" && (
            <motion.div key="roadmap" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {isGenerating ? (
                <div className="text-center py-24 max-w-md mx-auto">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-purple-100" />
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" />
                    <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">Génération de ta roadmap...</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">L'IA analyse ton profil pour créer un parcours 100% personnalisé avec actions concrètes, budgets réels et délais officiels.</p>
                  <div className="mt-6 flex justify-center gap-2">
                    {["Analyse du profil", "Priorisation", "Personnalisation"].map((step, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              ) : roadmap ? (
                <div className="max-w-3xl mx-auto">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Ta Roadmap Personnalisée 🗺️</h2>
                      <p className="text-sm text-gray-500 mt-1">Clique sur chaque étape pour voir la checklist, les astuces et les liens officiels</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" onClick={resetRoadmap} className="gap-2 rounded-xl h-10 text-sm font-bold border-2">
                        <RefreshCw className="w-4 h-4" /> Refaire
                      </Button>
                      <Link to={createPageUrl("Courses")}>
                        <Button className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl h-10 text-sm font-bold gap-1.5 shadow-lg shadow-purple-500/20">
                          <Play className="w-4 h-4" /> Mes cours
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="space-y-3">
                    {roadmap.map((step, i) => (
                      <RoadmapStep key={i} step={step} index={i} courses={courses} isFirst={i === 0} />
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-10 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl p-6 text-white text-center shadow-xl shadow-purple-500/20">
                    <Trophy className="w-10 h-10 mx-auto mb-3 text-amber-300" />
                    <h3 className="text-lg font-extrabold mb-1">Prêt(e) à passer à l'action ?</h3>
                    <p className="text-purple-200 text-sm mb-4">Accède à tous les cours et ressources pour réussir ton intégration</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-3">
                      <Link to={createPageUrl("Courses")}>
                        <Button className="bg-white text-purple-700 hover:bg-purple-50 h-11 px-6 rounded-xl font-bold gap-2 w-full sm:w-auto">
                          <BookOpen className="w-4 h-4" /> Explorer les cours
                        </Button>
                      </Link>
                      <button onClick={() => setActiveTab("chat")} className="bg-white/20 hover:bg-white/30 h-11 px-6 rounded-xl font-bold gap-2 text-white border border-white/20 flex items-center justify-center transition-all">
                        <Brain className="w-4 h-4" /> Poser une question au Coach
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <OnboardingStep
                    key={onboardingStep}
                    question={ONBOARDING_QUESTIONS[onboardingStep]}
                    onAnswer={handleAnswer}
                    stepIndex={onboardingStep}
                    totalSteps={ONBOARDING_QUESTIONS.length}
                    onBack={handleBack}
                  />
                </AnimatePresence>
              )}
            </motion.div>
          )}

          {/* CHAT TAB */}
          {activeTab === "chat" && (
            <motion.div key="chat" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <AIChat courses={courses} user={user} />

              {/* Bottom tips */}
              <div className="mt-6 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: "⚡", title: "Réponses instantanées", desc: "Le Coach IA répond en quelques secondes à toutes tes questions" },
                  { icon: "🎯", title: "Recommandations de cours", desc: "Il te suggère les cours les plus adaptés à ta situation" },
                  { icon: "🔗", title: "Liens officiels inclus", desc: "Chaque réponse inclut les vrais liens des administrations françaises" },
                ].map((tip, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="text-2xl mb-2">{tip.icon}</div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">{tip.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PROFILE TAB */}
          {activeTab === "stats" && (
            <motion.div key="stats" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <ProfileTab
                user={user}
                enrollments={enrollments}
                courses={courses}
                totalProgress={totalProgress}
                completedCoursesCount={completedCoursesCount}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
