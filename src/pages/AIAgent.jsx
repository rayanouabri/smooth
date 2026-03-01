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
      { label: "\u00c9tudier \u00e0 l'universit\u00e9", value: "studies", icon: "\uD83C\uDF93" },
      { label: "D\u00e9marches administratives", value: "admin", icon: "\uD83D\uDCCB" },
      { label: "Apprendre le fran\u00e7ais", value: "french", icon: "\uD83C\uDDEB\uD83C\uDDF7" },
      { label: "Trouver un emploi / stage", value: "work", icon: "\uD83D\uDCBC" },
    ],
  },
  {
    id: "level",
    question: "Quel est ton niveau de fran\u00e7ais ?",
    icon: BarChart3,
    options: [
      { label: "D\u00e9butant (A1-A2)", value: "beginner", icon: "\uD83C\uDF31" },
      { label: "Interm\u00e9diaire (B1-B2)", value: "intermediate", icon: "\uD83D\uDCC8" },
      { label: "Avanc\u00e9 (C1-C2)", value: "advanced", icon: "\uD83D\uDE80" },
      { label: "Je ne parle pas fran\u00e7ais", value: "none", icon: "\uD83C\uDD95" },
    ],
  },
  {
    id: "timeline",
    question: "Quand arrives-tu (ou es-tu arriv\u00e9) en France ?",
    icon: Clock,
    options: [
      { label: "Je suis d\u00e9j\u00e0 en France", value: "already_here", icon: "\uD83C\uDFE0" },
      { label: "Dans moins de 3 mois", value: "soon", icon: "\u23F3" },
      { label: "Dans 3 \u00e0 6 mois", value: "medium", icon: "\uD83D\uDCC5" },
      { label: "Dans plus de 6 mois", value: "later", icon: "\uD83D\uDD2E" },
    ],
  },
  {
    id: "challenge",
    question: "Quelle est ta plus grande difficult\u00e9 actuellement ?",
    icon: Lightbulb,
    options: [
      { label: "Trouver un logement", value: "housing", icon: "\uD83C\uDFE0" },
      { label: "Titre de s\u00e9jour / Pr\u00e9fecture", value: "visa", icon: "\uD83D\uDCC4" },
      { label: "Comprendre le syst\u00e8me fran\u00e7ais", value: "system", icon: "\uD83C\uDFDB\uFE0F" },
      { label: "S'int\u00e9grer socialement", value: "social", icon: "\uD83E\uDD1D" },
    ],
  },
  {
    id: "budget",
    question: "Quel est ton budget mensuel approximatif ?",
    icon: Euro,
    options: [
      { label: "Moins de 600\u20ac/mois", value: "tight", icon: "\uD83D\uDCB0" },
      { label: "600\u20ac - 1000\u20ac/mois", value: "moderate", icon: "\uD83D\uDCB3" },
      { label: "1000\u20ac - 1500\u20ac/mois", value: "comfortable", icon: "\uD83D\uDCB5" },
      { label: "Plus de 1500\u20ac/mois", value: "high", icon: "\uD83D\uDC8E" },
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
    low: { label: "Recommand\u00e9", color: "bg-blue-50 text-blue-600 border-blue-200", dot: "bg-blue-500" },
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
              <div className={`w-14 sm:w-16 flex-shrink-0 flex flex-col items-center justify-center ${
                index === 0 ? 'bg-gradient-to-b from-violet-500 to-purple-600'
                : index < 3 ? 'bg-gradient-to-b from-indigo-400 to-blue-500'
                : 'bg-gradient-to-b from-blue-400 to-cyan-500'
              }`}>
                <span className="text-xl font-extrabold text-white">{index + 1}</span>
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
                        <FileCheck className="w-3.5 h-3.5" /> Actions \u00e0 faire
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
                        <BookOpen className="w-3.5 h-3.5" /> Cours recommand\u00e9s
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
    content: "Salut ! Je suis ton coach IA. Je connais tous les cours de la plateforme et les d\u00e9marches en France. Pose-moi ta question !"
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
      setMessages(prev => [...prev, { role: "assistant", content: "D\u00e9sol\u00e9, une erreur s'est produite. R\u00e9essaie." }]);
    } finally { setIsLoading(false); }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col" style={{ height: "min(580px, calc(100vh - 280px))" }}>
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 text-white p-4 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><Brain className="w-5 h-5" /></div>
            <div><h3 className="font-bold">Coach IA</h3><p className="text-xs text-purple-200">Ton guide personnalis\u00e9</p></div>
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
              {["Comment faire ma demande CAF ?", "Aide-moi pour mon titre de s\u00e9jour", "Quel cours pour le DELF B2 ?", "Comment trouver un logement \u00e9tudiant ?"].map((q, i) => (
                <button key={i} onClick={() => setInput(q)} className="text-xs bg-purple-50 text-purple-700 px-3 py-2 rounded-xl hover:bg-purple-100 transition-colors border border-purple-100">{q}</button>
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
          <div className="flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()} placeholder="\u00c9cris ta question..." className="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none text-sm" disabled={isLoading} />
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
      const coursesList = courses.map(c => `- "${c.title}" (${c.is_premium ? 'Premium' : 'Gratuit'}, ${c.category || 'General'})`).join('\n');
      const response = await InvokeLLM({
        prompt: `Tu es un expert en integration des etudiants internationaux en France. Tu dois generer une roadmap TRES detaillee et actionnable.

PROFIL :
- Objectif : ${ua.goal}
- Niveau francais : ${ua.level}
- Chronologie : ${ua.timeline}
- Difficulte : ${ua.challenge}
- Budget : ${ua.budget}

COURS DISPONIBLES :
${coursesList}

GENERE un JSON array de 5-7 etapes. Chaque etape DOIT contenir :
- title: titre court
- description: explication en 2 phrases
- duration: duree estimee
- priority: "high", "medium" ou "low"
- budget: cout estime si applicable (ex: "Gratuit", "50-200 euros", etc.)
- deadline: delai a respecter si urgent (ex: "Dans les 2 premieres semaines", null si pas urgent)
- why: pourquoi cette etape est importante (1 phrase motivante)
- checklist: tableau de 3-5 actions concretes a faire
- tips: tableau de 1-3 conseils pratiques insider
- links: tableau d'objets {label, url} avec liens officiels utiles (ex: caf.fr, service-public.fr, etc.)
- relatedCourses: noms des cours recommandes de la plateforme

IMPORTANT : Reponds UNIQUEMENT avec le JSON array valide, rien d'autre. Les liens doivent etre de vrais sites officiels francais.`,
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
        { title: "Ouvrir un compte bancaire", description: "C'est la premi\u00e8re chose \u00e0 faire. Sans compte bancaire, tu ne peux pas recevoir d'aides ni payer ton loyer.", duration: "1 semaine", priority: "high", budget: "Gratuit", deadline: "D\u00e8s ton arriv\u00e9e", why: "Le compte bancaire est la cl\u00e9 de toutes tes d\u00e9marches administratives.", checklist: ["Comparer les offres (Boursorama, BNP, SG)", "Pr\u00e9parer passeport + justificatif domicile + attestation d'h\u00e9bergement", "Prendre RDV en agence ou ouvrir en ligne", "Activer la carte bancaire"], tips: ["Les banques en ligne sont souvent gratuites et plus rapides", "Certaines banques offrent des primes d'ouverture de 50\u00e0 150\u20ac"], links: [{ label: "Boursorama Etudiant", url: "https://www.boursorama.com" }], relatedCourses: [] },
        { title: "Demander la CAF (APL)", description: "L'aide au logement peut couvrir 30 \u00e0 50% de ton loyer. C'est une aide essentielle.", duration: "2-3 semaines", priority: "high", budget: "Gratuit (tu re\u00e7ois de l'argent !)", deadline: "Dans le 1er mois", why: "C'est de l'argent gratuit chaque mois. Ne passe pas \u00e0 c\u00f4t\u00e9 !", checklist: ["Cr\u00e9er ton compte sur caf.fr", "Pr\u00e9parer ton bail + RIB + attestation de logement", "Remplir la demande d'APL en ligne", "Fournir la quittance de loyer"], tips: ["Fais ta demande d\u00e8s la signature du bail, m\u00eame sans RIB fran\u00e7ais", "Le 1er versement prend souvent 2 mois, pr\u00e9vois le budget"], links: [{ label: "CAF.fr - Faire une demande", url: "https://www.caf.fr" }, { label: "Simulation APL", url: "https://www.caf.fr/allocataires/mes-services-en-ligne/faire-une-simulation" }], relatedCourses: [] },
        { title: "S'inscrire \u00e0 la S\u00e9curit\u00e9 Sociale", description: "L'assurance maladie est obligatoire et gratuite. Elle couvre tes frais m\u00e9dicaux.", duration: "2-4 semaines", priority: "high", budget: "Gratuit", deadline: "Dans les 3 premiers mois", why: "Sans s\u00e9cu, une visite chez le m\u00e9decin co\u00fbte 25\u20ac minimum non rembours\u00e9s.", checklist: ["S'inscrire sur etudiant-etranger.ameli.fr", "Fournir passeport + visa + certificat de scolarit\u00e9", "Attendre l'attestation de droits", "Commander ta carte Vitale"], tips: ["En attendant la carte Vitale, tu re\u00e7ois une attestation provisoire", "Prends une mutuelle \u00e9tudiante compl\u00e9mentaire (souvent 15-30\u20ac/mois)"], links: [{ label: "Ameli \u00c9tudiants \u00c9trangers", url: "https://etudiant-etranger.ameli.fr" }], relatedCourses: [] },
        { title: "Am\u00e9liorer ton fran\u00e7ais", description: "Le fran\u00e7ais est la cl\u00e9 de l'int\u00e9gration. M\u00eame un niveau basique change tout.", duration: "En continu", priority: "medium", budget: "Gratuit sur la plateforme", why: "Parler fran\u00e7ais ouvre toutes les portes : emploi, amiti\u00e9s, administration.", checklist: ["Faire un test de niveau sur la plateforme", "Suivre les cours gratuits de FrancePrepAcademy", "Pratiquer 15 min/jour minimum", "Rejoindre le forum communautaire pour pratiquer"], tips: ["Regarde des s\u00e9ries fran\u00e7aises avec sous-titres fran\u00e7ais", "L'appli Tandem permet de trouver des partenaires linguistiques gratuits"], links: [{ label: "Nos cours de fran\u00e7ais", url: "/courses" }], relatedCourses: [] },
        { title: "Construire ton r\u00e9seau", description: "L'isolement est le plus grand ennemi. Cr\u00e9e des liens d\u00e8s la premi\u00e8re semaine.", duration: "En continu", priority: "medium", budget: "Gratuit", why: "Ton r\u00e9seau t'aidera \u00e0 trouver un logement, un stage et des amis.", checklist: ["Rejoindre le forum FrancePrepAcademy", "S'inscrire aux associations \u00e9tudiantes de ta ville", "Participer aux \u00e9v\u00e9nements d'accueil de l'universit\u00e9", "Rejoindre des groupes Facebook/WhatsApp de ta communaut\u00e9"], tips: ["Les BDE organisent souvent des soir\u00e9es d'int\u00e9gration gratuites", "Le b\u00e9n\u00e9volat est un excellent moyen de rencontrer des Fran\u00e7ais"], links: [{ label: "Forum Communautaire", url: "/community" }], relatedCourses: [] },
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
            <p className="text-base sm:text-lg text-purple-200 max-w-xl mx-auto">Roadmap d\u00e9taill\u00e9e, checklist d'actions, budget estim\u00e9, d\u00e9lais, liens officiels. Tout ce qu'il te faut pour r\u00e9ussir.</p>
          </motion.div>
          {user && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {[
                { label: "Inscrits", value: enrollments.length, icon: BookOpen },
                { label: "Termin\u00e9s", value: completedCoursesCount, icon: Trophy },
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2">G\u00e9n\u00e9ration de ta roadmap...</h3>
                  <p className="text-gray-500 text-sm">L'IA analyse ton profil pour cr\u00e9er un parcours sur-mesure avec actions, budget et d\u00e9lais</p>
                </div>
              ) : roadmap ? (
                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Ta Roadmap</h2>
                      <p className="text-sm text-gray-500 mt-1">Clique sur chaque \u00e9tape pour voir les d\u00e9tails, la checklist et les conseils</p>
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
                      <div><h3 className="text-lg font-bold text-gray-900">{user?.full_name || "\u00c9tudiant"}</h3><p className="text-sm text-gray-500">{user?.email}</p></div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-purple-50 rounded-xl p-3 text-center"><BookOpen className="w-5 h-5 text-purple-600 mx-auto mb-1" /><div className="text-xl font-extrabold text-gray-900">{enrollments.length}</div><div className="text-[10px] text-gray-500">Inscrits</div></div>
                      <div className="bg-emerald-50 rounded-xl p-3 text-center"><Trophy className="w-5 h-5 text-emerald-600 mx-auto mb-1" /><div className="text-xl font-extrabold text-gray-900">{completedCoursesCount}</div><div className="text-[10px] text-gray-500">Termin\u00e9s</div></div>
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
