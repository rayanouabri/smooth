import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap, BarChart3, Users, BookOpen, TrendingUp, Award,
  Mail, Phone, Building2, ChevronRight, CheckCircle2,
  ArrowRight, Shield, Clock, Globe, Zap, MessageSquare, Send,
  FileText, Lock, Sparkles, Target, Brain, Star, Eye,
  LayoutDashboard, Settings, ChevronDown, Play
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

// ─── Feature cards ────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: BarChart3,
    title: "Tableau de bord analytics",
    desc: "Suivez en temps réel l'activité de vos étudiants : taux de complétion, matières préférées, progression par semaine.",
    color: "from-violet-500 to-purple-600",
    badge: "Temps réel",
  },
  {
    icon: Users,
    title: "Gestion des étudiants",
    desc: "Accédez à la progression de vos étudiants via un code d'accès partenaire, avec données anonymisées par défaut.",
    color: "from-blue-500 to-indigo-600",
    badge: "RGPD",
  },
  {
    icon: BookOpen,
    title: "Contenu structuré",
    desc: "759+ leçons organisées en cours thématiques : maths, éco, management, culture générale, anglais…",
    color: "from-emerald-500 to-teal-600",
    badge: "759+ leçons",
  },
  {
    icon: Brain,
    title: "Quiz adaptatifs par IA",
    desc: "Chaque leçon génère automatiquement un quiz de 5 questions basé sur le contenu exact du cours.",
    color: "from-orange-500 to-amber-600",
    badge: "IA",
  },
  {
    icon: Target,
    title: "Suivi de progression",
    desc: "Visualisez l'avancement de chaque étudiant : leçons complétées, scores aux quiz, temps d'étude.",
    color: "from-rose-500 to-pink-600",
    badge: "Individuel",
  },
  {
    icon: Shield,
    title: "Accès sécurisé",
    desc: "Authentification par email, données hébergées en Europe, conformité RGPD totale.",
    color: "from-slate-500 to-gray-600",
    badge: "100% sécurisé",
  },
];

const KEY_NUMBERS = [
  { value: "759+", label: "Leçons disponibles", icon: BookOpen },
  { value: "5", label: "Quiz par leçon (IA)", icon: Brain },
  { value: "24/7", label: "Accès illimité", icon: Clock },
  { value: "100%", label: "Conformité RGPD", icon: Shield },
];

// ─── FeatureCard ──────────────────────────────────────────────────────────────
function FeatureCard({ icon: Icon, title, desc, color, badge }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
            {badge && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 bg-violet-50 text-violet-600 rounded-full border border-violet-100 whitespace-nowrap">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Dashboard Demo ───────────────────────────────────────────────────────────
const DEMO_VIEWS = [
  { id: "overview", label: "Vue d'ensemble", icon: LayoutDashboard },
  { id: "progression", label: "Progression", icon: TrendingUp },
  { id: "contenu", label: "Contenu", icon: BookOpen },
];

const DEMO_STUDENTS = [
  { initials: "ML", name: "Marie L.", progress: 78, lessons: 61, quizAvg: 82, active: true },
  { initials: "TM", name: "Thomas M.", progress: 54, lessons: 43, quizAvg: 71, active: true },
  { initials: "CA", name: "Camille A.", progress: 91, lessons: 72, quizAvg: 88, active: false },
  { initials: "JD", name: "Julien D.", progress: 33, lessons: 26, quizAvg: 64, active: false },
  { initials: "SB", name: "Sofia B.", progress: 67, lessons: 53, quizAvg: 76, active: true },
];

const DEMO_COURSES = [
  { name: "Mathématiques — Algèbre", progress: 72, lessons: 28, color: "bg-violet-500" },
  { name: "Économie générale", progress: 58, lessons: 21, color: "bg-blue-500" },
  { name: "Culture Générale", progress: 84, lessons: 19, color: "bg-emerald-500" },
  { name: "Management", progress: 41, lessons: 14, color: "bg-orange-500" },
  { name: "Anglais", progress: 63, lessons: 16, color: "bg-rose-500" },
];

function ProgressBar({ value, color = "bg-violet-500" }) {
  return (
    <div className="w-full bg-gray-100 rounded-full h-1.5">
      <div className={`h-1.5 rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  );
}

function DashboardDemo() {
  const [activeView, setActiveView] = useState("overview");

  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-inner">
      {/* Demo label */}
      <div className="bg-amber-50 border-b border-amber-100 px-4 py-2 flex items-center gap-2">
        <Eye className="w-3.5 h-3.5 text-amber-500" />
        <p className="text-xs text-amber-700 font-medium">Aperçu illustratif — données fictives à des fins de démonstration</p>
      </div>

      {/* Fake browser bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-gray-100 rounded-md px-3 py-1 text-[11px] text-gray-400">
          franceprepacademy.fr/portail/dashboard
        </div>
      </div>

      {/* App layout */}
      <div className="flex h-80">
        {/* Sidebar */}
        <div className="w-44 bg-white border-r border-gray-200 flex flex-col p-3 gap-1">
          <div className="flex items-center gap-2 px-2 py-1.5 mb-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <GraduationCap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-xs font-bold text-gray-800">Portail École</span>
          </div>
          {DEMO_VIEWS.map(view => (
            <button
              key={view.id}
              onClick={() => setActiveView(view.id)}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                activeView === view.id
                  ? "bg-violet-100 text-violet-700 font-medium"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <view.icon className="w-3.5 h-3.5" />
              {view.label}
            </button>
          ))}
          <div className="mt-auto pt-2 border-t border-gray-100">
            <div className="px-2 py-1.5 text-[10px] text-gray-400">Connecté en tant que</div>
            <div className="px-2 py-1 flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center text-[9px] font-bold text-violet-700">A</div>
              <span className="text-[11px] text-gray-600 font-medium">Accès Pilote</span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-auto">
          <AnimatePresence mode="wait">
            {activeView === "overview" && (
              <motion.div key="overview" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.15 }}>
                <p className="text-xs font-semibold text-gray-700 mb-3">Vue d'ensemble — promotion fictive</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { label: "Étudiants actifs", value: "5", sub: "dans cette démo", icon: Users, color: "text-violet-600 bg-violet-50" },
                    { label: "Leçons complétées", value: "255", sub: "total simulation", icon: BookOpen, color: "text-blue-600 bg-blue-50" },
                    { label: "Score quiz moyen", value: "76%", sub: "simulation", icon: Award, color: "text-emerald-600 bg-emerald-50" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 p-3">
                      <div className={`w-7 h-7 rounded-lg ${stat.color} flex items-center justify-center mb-2`}>
                        <stat.icon className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-lg font-bold text-gray-800">{stat.value}</p>
                      <p className="text-[10px] text-gray-500">{stat.label}</p>
                      <p className="text-[9px] text-gray-400 italic">{stat.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl border border-gray-100 p-3">
                  <p className="text-[11px] font-semibold text-gray-700 mb-2">Activité récente (simulation)</p>
                  <div className="space-y-1.5">
                    {["Marie L. a complété Économie — Chapitre 4", "Thomas M. a obtenu 80% au quiz Maths", "Camille A. a démarré Culture Générale"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] text-gray-500">
                        <div className="w-1 h-1 rounded-full bg-violet-400 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeView === "progression" && (
              <motion.div key="progression" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.15 }}>
                <p className="text-xs font-semibold text-gray-700 mb-3">Progression des étudiants — données fictives</p>
                <div className="space-y-2">
                  {DEMO_STUDENTS.map((s, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 p-2.5 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">
                        {s.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] font-medium text-gray-700">{s.name}</span>
                          <span className="text-[10px] text-gray-500">{s.progress}%</span>
                        </div>
                        <ProgressBar value={s.progress} color="bg-violet-500" />
                      </div>
                      <div className="text-[10px] text-gray-400 text-right flex-shrink-0">
                        <div>{s.lessons} leçons</div>
                        <div>Quiz: {s.quizAvg}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeView === "contenu" && (
              <motion.div key="contenu" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.15 }}>
                <p className="text-xs font-semibold text-gray-700 mb-3">Cours les plus utilisés — simulation</p>
                <div className="space-y-2.5">
                  {DEMO_COURSES.map((c, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 p-3">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-medium text-gray-700">{c.name}</span>
                        <span className="text-[10px] text-gray-500">{c.lessons} leçons</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ProgressBar value={c.progress} color={c.color} />
                        <span className="text-[10px] text-gray-500 flex-shrink-0">{c.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [formData, setFormData] = useState({
    school: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    students: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.name || !formData.school) return;
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestType: "conciergerie",
          formData: {
            ...formData,
            type: "Demande partenariat établissement",
          },
        }),
      });
    } catch (e) { /* silently ignore */ }
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Demande envoyée !</h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          Nous reviendrons vers vous dans les 24–48h pour vous présenter la plateforme et discuter d'un accès pilote gratuit.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Établissement *</label>
          <input
            type="text"
            name="school"
            required
            value={formData.school}
            onChange={handleChange}
            placeholder="Nom de votre école / université"
            className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Votre nom *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Prénom Nom"
            className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fonction</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Directeur, Professeur, Responsable pédagogique…"
            className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email professionnel *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="vous@votre-ecole.fr"
            className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+33 6 …"
            className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre d'étudiants estimé</label>
          <select
            name="students"
            value={formData.students}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white"
          >
            <option value="">Sélectionner…</option>
            <option value="< 50">Moins de 50</option>
            <option value="50-200">50 à 200</option>
            <option value="200-500">200 à 500</option>
            <option value="> 500">Plus de 500</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message (optionnel)</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          placeholder="Décrivez votre besoin, vos attentes, ou posez vos questions…"
          className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={loading || !formData.email || !formData.name || !formData.school}
        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all"
      >
        {loading ? (
          <span className="flex items-center gap-2 justify-center"><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Envoi en cours…</span>
        ) : (
          <span className="flex items-center gap-2 justify-center"><Send className="w-4 h-4" /> Demander un accès pilote gratuit</span>
        )}
      </Button>
      <p className="text-[11px] text-gray-400 text-center">Aucun engagement. Réponse sous 24–48h. Données conformes RGPD.</p>
    </form>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
const TABS = [
  { id: "platform", label: "La plateforme", icon: Globe },
  { id: "features", label: "Fonctionnalités", icon: Zap },
  { id: "demo", label: "Aperçu dashboard", icon: Eye },
  { id: "contact", label: "Nous contacter", icon: MessageSquare },
];

export default function SchoolPortal() {
  const [activeTab, setActiveTab] = useState("platform");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/20">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-400 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-violet-200 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accès pilote gratuit disponible</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            La plateforme de prépa<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-pink-300">
              conçue pour réussir
            </span>
          </h1>
          <p className="text-lg text-violet-200 max-w-2xl mx-auto mb-8">
            Offrez à vos étudiants un accès structuré à 759+ leçons, des quiz adaptatifs par IA
            et un suivi de progression — testable dès aujourd'hui, sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setActiveTab("contact")}
              className="inline-flex items-center gap-2 bg-white text-violet-700 font-semibold px-6 py-3 rounded-xl hover:bg-violet-50 transition-colors"
            >
              <Play className="w-4 h-4" />
              Tester gratuitement
            </button>
            <button
              onClick={() => setActiveTab("demo")}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Eye className="w-4 h-4" />
              Voir l'aperçu
            </button>
          </div>
        </div>
      </div>

      {/* ── Chiffres clés ── */}
      <div className="max-w-5xl mx-auto px-4 -mt-6 mb-10 grid grid-cols-2 md:grid-cols-4 gap-3">
        {KEY_NUMBERS.map(({ value, label, icon: Icon }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 text-center"
          >
            <div className="w-9 h-9 rounded-xl bg-violet-100 flex items-center justify-center mx-auto mb-2">
              <Icon className="w-4.5 h-4.5 text-violet-600" />
            </div>
            <p className="text-2xl font-extrabold text-gray-900">{value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{label}</p>
          </motion.div>
        ))}
      </div>

      {/* ── Tabs ── */}
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <div className="flex gap-1 bg-white border border-gray-100 rounded-2xl p-1 shadow-sm overflow-x-auto">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex-1 justify-center ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <AnimatePresence mode="wait">

          {/* Platform tab */}
          {activeTab === "platform" && (
            <motion.div key="platform" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Pourquoi FrancePrepAcademy ?</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    FrancePrepAcademy est une plateforme d'entraînement pour les étudiants qui préparent les concours des grandes écoles. Elle propose un catalogue structuré de cours, des leçons illustrées, et un système de quiz généré par intelligence artificielle pour ancrer les connaissances.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nous proposons aux établissements un <strong>accès pilote gratuit</strong> pour permettre à leurs équipes pédagogiques d'évaluer la plateforme avec un groupe d'étudiants, avant toute décision de partenariat.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-100 p-6">
                  <h2 className="text-xl font-bold text-violet-900 mb-4">Ce que vous obtenez</h2>
                  <ul className="space-y-3">
                    {[
                      "Accès à l'intégralité du catalogue (759+ leçons)",
                      "Tableau de bord de suivi de votre groupe pilote",
                      "Quiz IA générés automatiquement sur chaque leçon",
                      "Support dédié pendant la période pilote",
                      "Rapport d'utilisation à l'issue du pilote",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-violet-800">
                        <CheckCircle2 className="w-4 h-4 text-violet-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Comparison table */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">Comparaison des accès</h2>
                  <p className="text-sm text-gray-500">L'accès Pilote est entièrement gratuit et sans engagement</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-6 py-3 text-left font-semibold text-gray-700">Fonctionnalité</th>
                        <th className="px-6 py-3 text-center font-semibold text-gray-500">Étudiant seul</th>
                        <th className="px-6 py-3 text-center font-semibold text-violet-700 bg-violet-50">Pilote (gratuit)</th>
                        <th className="px-6 py-3 text-center font-semibold text-gray-700">Partenariat</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {[
                        ["Accès aux leçons", "✓", "✓", "✓"],
                        ["Quiz IA par leçon", "✓", "✓", "✓"],
                        ["Dashboard établissement", "—", "✓ limité", "✓ complet"],
                        ["Suivi de groupe", "—", "✓", "✓"],
                        ["Support dédié", "—", "✓", "✓ prioritaire"],
                        ["Contenu co-brandé", "—", "—", "✓"],
                        ["Rapport d'usage mensuel", "—", "—", "✓"],
                      ].map(([feature, student, pilot, partner], i) => (
                        <tr key={i} className="hover:bg-gray-50/50">
                          <td className="px-6 py-3 text-gray-700 font-medium">{feature}</td>
                          <td className="px-6 py-3 text-center text-gray-400">{student}</td>
                          <td className="px-6 py-3 text-center text-violet-700 font-medium bg-violet-50/50">{pilot}</td>
                          <td className="px-6 py-3 text-center text-gray-700">{partner}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Features tab */}
          {activeTab === "features" && (
            <motion.div key="features" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Fonctionnalités clés</h2>
                <p className="text-gray-500">Tout ce dont vos étudiants ont besoin pour réussir leur prépa.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FEATURES.map((feat, i) => (
                  <FeatureCard key={i} {...feat} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Demo tab */}
          {activeTab === "demo" && (
            <motion.div key="demo" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Aperçu du tableau de bord</h2>
                <p className="text-gray-500">Simulation interactive du portail établissement — toutes les données sont fictives.</p>
              </div>
              <DashboardDemo />
              <div className="mt-6 bg-blue-50 rounded-2xl border border-blue-100 p-5 flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-blue-800 mb-1">Cet aperçu est purement illustratif</p>
                  <p className="text-sm text-blue-600">
                    Les noms, statistiques et données affichées ici sont entièrement fictifs et ont pour seul but de vous donner une idée de l'interface réelle. Le vrai dashboard, accessible après votre accès pilote, affichera les données réelles de vos étudiants.
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button
                  onClick={() => setActiveTab("contact")}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg shadow-violet-200"
                >
                  <ArrowRight className="w-4 h-4" />
                  Demander un accès pilote
                </button>
              </div>
            </motion.div>
          )}

          {/* Contact tab */}
          {activeTab === "contact" && (
            <motion.div key="contact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">Démarrer un pilote</h2>
                    <p className="text-gray-500 text-sm">Remplissez ce formulaire et nous reviendrons vers vous dans les 48h pour organiser un échange.</p>
                  </div>
                  <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-100 p-4 space-y-3">
                    {[
                      { icon: CheckCircle2, text: "Accès pilote 100% gratuit" },
                      { icon: Clock, text: "Mise en place en moins de 48h" },
                      { icon: Shield, text: "Sans engagement, sans contrat" },
                      { icon: Users, text: "Accompagnement personnalisé" },
                    ].map(({ icon: Icon, text }, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-violet-800">
                        <Icon className="w-4 h-4 text-violet-500 flex-shrink-0" />
                        {text}
                      </div>
                    ))}
                  </div>
                  <div className="bg-white rounded-2xl border border-gray-100 p-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Contact direct</p>
                    <div className="space-y-2">
                      <a href="mailto:contact@franceprepacademy.fr" className="flex items-center gap-2 text-sm text-gray-600 hover:text-violet-600 transition-colors">
                        <Mail className="w-4 h-4 text-gray-400" />
                        contact@franceprepacademy.fr
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
