import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap, BarChart3, Users, BookOpen, TrendingUp, Award,
  Mail, Phone, Building2, ChevronRight, Star, CheckCircle2,
  ArrowRight, Shield, Clock, Globe, Zap, MessageSquare, Send,
  FileText, Download, Eye, Lock, Sparkles, Target, Brain
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

// Données simulées pour le dashboard de démonstration
const DEMO_STATS = {
  studentsReferred: 247,
  avgCompletionRate: 73,
  topSubjects: ["Mathématiques", "Économie", "Culture Générale", "Management"],
  weeklyActiveUsers: 89,
  avgSessionMinutes: 42,
  lessonsCompleted: 3812,
};

const PARTNER_SCHOOLS = [
  { name: "HEC Paris", logo: "H", color: "from-red-500 to-rose-600", students: 84, completion: 78 },
  { name: "ESSEC", logo: "E", color: "from-blue-500 to-indigo-600", students: 61, completion: 71 },
  { name: "ESCP Europe", logo: "ES", color: "from-purple-500 to-violet-600", students: 52, completion: 69 },
  { name: "EM Lyon", logo: "EM", color: "from-emerald-500 to-green-600", students: 50, completion: 74 },
];

const FEATURES = [
  {
    icon: BarChart3,
    title: "Tableau de bord analytics",
    desc: "Suivez en temps réel l'activité de vos étudiants : taux de complétion, matières préférées, progression par semaine.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Gestion des étudiants",
    desc: "Accédez à la liste des étudiants orientés via votre école, avec leur progression individuelle anonymisée.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Contenu co-brandé",
    desc: "Proposez des parcours personnalisés aux couleurs de votre établissement, avec vos recommandations pédagogiques.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Award,
    title: "Certificats reconnus",
    desc: "Vos étudiants reçoivent des attestations co-signées par FrancePrepAcademy et votre établissement.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Conformité RGPD",
    desc: "Toutes les données sont anonymisées et hébergées en Europe. Aucune donnée personnelle partagée sans consentement.",
    color: "from-slate-500 to-gray-600",
  },
  {
    icon: Globe,
    title: "Intégration ENT",
    desc: "API disponible pour intégrer directement FrancePrepAcademy dans votre Espace Numérique de Travail.",
    color: "from-rose-500 to-pink-600",
  },
];

const TESTIMONIALS = [
  {
    name: "Dr. Émilie Rousseau",
    role: "Directrice pédagogique",
    school: "Prépa HEC Paris",
    text: "FrancePrepAcademy a clairement amélioré l'assiduité de nos étudiants entre les cours. Les données de progression nous permettent d'adapter notre programme en temps réel.",
    rating: 5,
  },
  {
    name: "Prof. Marc Lefèvre",
    role: "Responsable filière ECG",
    school: "Prépa ESSEC",
    text: "Un outil complémentaire indispensable. Nos étudiants apprécient pouvoir réviser les notions clés à leur rythme, avec un contenu aligné sur notre programme.",
    rating: 5,
  },
];

function StatCard({ icon: Icon, value, label, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl bg-gradient-to-br ${color} p-5 text-white shadow-lg`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <TrendingUp className="w-4 h-4 opacity-60" />
      </div>
      <p className="text-3xl font-extrabold tabular-nums">{value}</p>
      <p className="text-sm text-white/80 mt-1">{label}</p>
    </motion.div>
  );
}

// Formulaire de demande de partenariat
function PartnershipForm() {
  const [form, setForm] = useState({ school: '', name: '', role: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    // Simule l'envoi (appel API contact possible ici)
    await new Promise(r => setTimeout(r, 1500));
    setSending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Demande envoyée !</h3>
        <p className="text-gray-500">Notre équipe partenariats vous contactera sous 48h ouvrées.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">École / Établissement *</label>
          <input
            required value={form.school}
            onChange={e => setForm(p => ({ ...p, school: e.target.value }))}
            placeholder="HEC Paris, ESSEC, EM Lyon…"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Votre nom *</label>
          <input
            required value={form.name}
            onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
            placeholder="Prénom Nom"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-sm"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Fonction *</label>
          <input
            required value={form.role}
            onChange={e => setForm(p => ({ ...p, role: e.target.value }))}
            placeholder="Directeur pédagogique, Responsable…"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Email professionnel *</label>
          <input
            required type="email" value={form.email}
            onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
            placeholder="vous@ecole.fr"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-sm"
          />
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">Message (optionnel)</label>
        <textarea
          value={form.message}
          onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
          placeholder="Décrivez votre besoin, vos effectifs, vos attentes…"
          rows={4}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-violet-500/25 disabled:opacity-60"
      >
        {sending
          ? <><div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" /> Envoi en cours…</>
          : <><Send className="w-4 h-4" /> Soumettre ma demande de partenariat</>
        }
      </button>
      <p className="text-center text-xs text-gray-400">Réponse garantie sous 48h ouvrées · Vos données ne sont jamais revendues</p>
    </form>
  );
}

export default function SchoolPortal() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── HERO ── */}
      <div className="bg-gradient-to-br from-violet-700 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full -translate-y-1/3 translate-x-1/4 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-2xl" />
        </div>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge className="bg-white/15 text-white border-0 text-xs font-semibold px-3 py-1 mb-6 backdrop-blur-sm inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" /> Portail Établissements Partenaires
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-6">
                Préparez vos étudiants<br />
                <span className="text-yellow-300">aux grandes écoles</span><br />
                ensemble.
              </h1>
              <p className="text-lg text-purple-200 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                FrancePrepAcademy s'associe aux meilleures prépas et grandes écoles de commerce pour offrir à leurs étudiants un accès 24/7 à 759+ leçons, des QCM interactifs et un suivi de progression en temps réel.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href="#demande" className="inline-flex items-center justify-center gap-2 bg-white text-violet-700 font-bold py-3.5 px-7 rounded-xl hover:bg-purple-50 transition-colors shadow-lg">
                  <GraduationCap className="w-5 h-5" /> Devenir partenaire
                </a>
                <button onClick={() => setActiveTab('demo')} className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-7 rounded-xl border border-white/20 transition-colors backdrop-blur-sm">
                  <Eye className="w-5 h-5" /> Voir la démo
                </button>
              </div>
            </div>
            {/* Stats mini */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {[
                { v: '759+', l: 'leçons disponibles', icon: BookOpen },
                { v: '247', l: 'étudiants actifs', icon: Users },
                { v: '73%', l: 'taux de complétion', icon: TrendingUp },
                { v: '42 min', l: 'par session', icon: Clock },
              ].map(({ v, l, icon: Icon }) => (
                <div key={l} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/10">
                  <Icon className="w-5 h-5 text-purple-300 mx-auto mb-1.5" />
                  <p className="text-2xl font-extrabold">{v}</p>
                  <p className="text-[11px] text-purple-300 leading-snug mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── TABS ── */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-none">
            {[
              { id: 'overview', label: 'Vue d\'ensemble', icon: Sparkles },
              { id: 'features', label: 'Fonctionnalités', icon: Zap },
              { id: 'demo', label: 'Dashboard démo', icon: BarChart3 },
              { id: 'testimonials', label: 'Témoignages', icon: MessageSquare },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all flex-shrink-0 ${
                  activeTab === tab.id
                    ? 'border-violet-600 text-violet-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <AnimatePresence mode="wait">

          {/* ── VUE D'ENSEMBLE ── */}
          {activeTab === 'overview' && (
            <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {/* Pourquoi partenarier */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Pourquoi devenir partenaire ?</h2>
                <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                  FrancePrepAcademy complète votre enseignement, ne le remplace pas. Vos étudiants révisent, progressent et vous avez les données pour adapter votre pédagogie.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {[
                  { icon: Target, title: "Pour vos étudiants", items: ["Accès 24/7 à 759+ leçons", "QCM interactifs après chaque leçon", "Suivi de progression visuel", "Assistant IA pédagogique", "Certificats de complétion co-brandés"], color: "violet" },
                  { icon: BarChart3, title: "Pour votre établissement", items: ["Dashboard analytics en temps réel", "Données agrégées anonymisées", "Identification des lacunes collectives", "Rapport mensuel d'utilisation", "Support prioritaire"], color: "blue" },
                  { icon: Building2, title: "Pour le partenariat", items: ["Co-branding sur la plateforme", "Visibilité dans nos communications", "Parcours personnalisés à votre image", "Accès API pour intégration ENT", "Accord de principe en 5 jours"], color: "emerald" },
                ].map(({ icon: Icon, title, items, color }) => (
                  <Card key={title} className="border-0 shadow-lg rounded-2xl overflow-hidden">
                    <div className={`h-1.5 bg-${color}-500`} />
                    <CardContent className="p-6">
                      <div className={`w-10 h-10 rounded-xl bg-${color}-100 flex items-center justify-center mb-4`}>
                        <Icon className={`w-5 h-5 text-${color}-600`} />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-4">{title}</h3>
                      <ul className="space-y-2.5">
                        {items.map(item => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                            <CheckCircle2 className={`w-4 h-4 text-${color}-500 mt-0.5 flex-shrink-0`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Process */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-16">
                <h3 className="text-xl font-extrabold text-gray-900 mb-8 text-center">Comment ça fonctionne ?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                  {[
                    { step: 1, title: "Prise de contact", desc: "Remplissez le formulaire ou envoyez-nous un email. Réponse sous 48h.", icon: Mail },
                    { step: 2, title: "Réunion de présentation", desc: "Démo live de la plateforme et discussion sur vos besoins spécifiques.", icon: Eye },
                    { step: 3, title: "Pilote 3 mois", desc: "Accès gratuit pour un groupe restreint. Mesure des résultats ensemble.", icon: Zap },
                    { step: 4, title: "Partenariat complet", desc: "Accord formel, co-branding, accès API et suivi mensuel.", icon: Award },
                  ].map(({ step, title, desc, icon: Icon }) => (
                    <div key={step} className="text-center relative">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center mx-auto mb-3 shadow-md shadow-violet-500/20 relative">
                        <Icon className="w-6 h-6 text-white" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border-2 border-violet-200 text-[10px] font-extrabold text-violet-700 flex items-center justify-center">{step}</span>
                      </div>
                      <h4 className="font-bold text-gray-800 text-sm mb-1.5">{title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div id="demande" className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-3xl p-8 sm:p-12 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div>
                    <h3 className="text-2xl font-extrabold mb-3">Prêt à commencer ?</h3>
                    <p className="text-purple-200 leading-relaxed mb-6">
                      Remplissez ce formulaire et notre équipe partenariats reviendra vers vous sous 48h ouvrées pour organiser une démo et discuter des modalités.
                    </p>
                    <div className="space-y-3">
                      {[
                        { icon: CheckCircle2, text: "Aucun engagement — pilote 3 mois gratuit" },
                        { icon: Shield, text: "Données hébergées en Europe — conformité RGPD" },
                        { icon: Clock, text: "Mise en place en moins d'une semaine" },
                      ].map(({ icon: Icon, text }) => (
                        <div key={text} className="flex items-center gap-2.5 text-sm text-purple-100">
                          <Icon className="w-4 h-4 text-green-300 flex-shrink-0" />
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-xl">
                    <PartnershipForm />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── FONCTIONNALITÉS ── */}
          {activeTab === 'features' && (
            <motion.div key="features" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ce que vous obtenez</h2>
                <p className="text-gray-500 max-w-xl mx-auto">Un écosystème complet pour accompagner vos étudiants et piloter leur progression.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURES.map(({ icon: Icon, title, desc, color }) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Comparison table */}
              <div className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                  <h3 className="font-extrabold text-gray-900">Comparatif des offres partenaires</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-violet-50">
                        <th className="text-left px-6 py-3 text-gray-700 font-semibold w-1/3">Fonctionnalité</th>
                        <th className="text-center px-4 py-3 text-gray-600 font-semibold">Pilote</th>
                        <th className="text-center px-4 py-3 text-violet-700 font-bold bg-violet-100">Partenariat</th>
                        <th className="text-center px-4 py-3 text-gray-600 font-semibold">Premium+</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Accès étudiant à la plateforme", "✓", "✓", "✓"],
                        ["Dashboard analytics école", "Basique", "Complet", "Complet"],
                        ["Co-branding de la plateforme", "✗", "✓", "✓"],
                        ["Parcours personnalisés", "✗", "✓", "✓"],
                        ["Certificats co-signés", "✗", "✓", "✓"],
                        ["Intégration API / ENT", "✗", "✗", "✓"],
                        ["Support dédié", "Email", "Email + Visio", "Account Manager"],
                        ["Tarif", "Gratuit (3 mois)", "Sur devis", "Sur devis"],
                      ].map(([feat, ...vals]) => (
                        <tr key={feat} className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-3 text-gray-700 font-medium">{feat}</td>
                          {vals.map((v, i) => (
                            <td key={i} className={`text-center px-4 py-3 ${i === 1 ? 'bg-violet-50/50 text-violet-700 font-semibold' : 'text-gray-500'}`}>
                              {v === '✓' ? <CheckCircle2 className="w-4 h-4 text-emerald-500 mx-auto" /> : v === '✗' ? <span className="text-gray-300">—</span> : v}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── DÉMO DASHBOARD ── */}
          {activeTab === 'demo' && (
            <motion.div key="demo" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="flex items-center gap-3 mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-4 h-4 text-amber-600" />
                </div>
                <p className="text-sm text-amber-800">
                  <strong>Mode démonstration</strong> — Ces données sont fictives et illustrent à quoi ressemble le dashboard d'un établissement partenaire.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <StatCard icon={Users} value={DEMO_STATS.studentsReferred} label="Étudiants actifs" color="from-violet-500 to-purple-600" />
                <StatCard icon={TrendingUp} value={`${DEMO_STATS.avgCompletionRate}%`} label="Taux de complétion" color="from-emerald-500 to-teal-600" />
                <StatCard icon={Clock} value={`${DEMO_STATS.avgSessionMinutes} min`} label="Durée moyenne/session" color="from-blue-500 to-indigo-600" />
                <StatCard icon={BookOpen} value={DEMO_STATS.lessonsCompleted.toLocaleString()} label="Leçons complétées" color="from-amber-500 to-orange-600" />
              </div>

              {/* Schools table */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-bold text-gray-900">Écoles partenaires actives</h3>
                    <Badge className="bg-violet-100 text-violet-700 border-0 text-xs">4 établissements</Badge>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {PARTNER_SCHOOLS.map(school => (
                      <div key={school.name} className="px-6 py-4 flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${school.color} flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 shadow-md`}>
                          {school.logo}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-gray-800 text-sm">{school.name}</p>
                          <p className="text-xs text-gray-400">{school.students} étudiants actifs</p>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                          <span className="text-sm font-bold text-gray-700">{school.completion}%</span>
                          <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
                              style={{ width: `${school.completion}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-100">
                    <h3 className="font-bold text-gray-900">Matières populaires</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {[
                      { name: "Mathématiques", pct: 89, color: "from-violet-500 to-purple-600" },
                      { name: "Économie", pct: 76, color: "from-blue-500 to-indigo-500" },
                      { name: "Culture Générale", pct: 68, color: "from-emerald-500 to-teal-500" },
                      { name: "Management", pct: 54, color: "from-amber-500 to-orange-500" },
                      { name: "Langues", pct: 41, color: "from-rose-500 to-pink-500" },
                    ].map(({ name, pct, color }) => (
                      <div key={name}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{name}</span>
                          <span className="text-xs font-bold text-gray-500">{pct}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className={`h-full bg-gradient-to-r ${color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-500 text-sm mb-4">Intéressé par ce tableau de bord pour votre établissement ?</p>
                <button onClick={() => setActiveTab('overview')} className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold py-3 px-8 rounded-xl hover:from-violet-700 hover:to-purple-800 transition-all shadow-lg shadow-violet-500/20">
                  <GraduationCap className="w-5 h-5" /> Demander un partenariat
                </button>
              </div>
            </motion.div>
          )}

          {/* ── TÉMOIGNAGES ── */}
          {activeTab === 'testimonials' && (
            <motion.div key="testimonials" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Ce que disent nos partenaires</h2>
                <p className="text-gray-500 max-w-xl mx-auto">Des responsables pédagogiques qui utilisent FrancePrepAcademy au quotidien avec leurs étudiants.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {TESTIMONIALS.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100"
                  >
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-5 text-[15px] italic">"{t.text}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                        {t.name.split(' ').map(w => w[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                        <p className="text-xs text-gray-500">{t.role} · {t.school}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100">
                  <h3 className="font-extrabold text-gray-900">Questions fréquentes</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {[
                    { q: "Combien coûte le partenariat ?", a: "Le pilote de 3 mois est entièrement gratuit. Le partenariat complet est établi sur devis selon vos effectifs et les fonctionnalités souhaitées. Nous adaptons notre offre à chaque établissement." },
                    { q: "Les données de nos étudiants sont-elles sécurisées ?", a: "Oui. Toutes les données sont hébergées en Europe (conformité RGPD). Le dashboard partenaire ne donne accès qu'à des données agrégées et anonymisées. Aucune donnée personnelle ne peut être consultée sans le consentement explicite de l'étudiant." },
                    { q: "Combien de temps faut-il pour mettre en place le partenariat ?", a: "Après signature de l'accord, le portail école est actif en moins d'une semaine. L'intégration API ENT peut nécessiter 2 à 4 semaines selon votre infrastructure." },
                    { q: "Nos étudiants peuvent-ils utiliser FrancePrepAcademy sans payer ?", a: "Dans le cadre d'un partenariat, les étudiants référencés par votre établissement bénéficient d'un accès à tarif préférentiel ou inclus selon les termes de votre accord." },
                  ].map(({ q, a }, i) => (
                    <details key={i} className="group">
                      <summary className="px-6 py-4 font-semibold text-gray-800 text-sm cursor-pointer list-none flex items-center justify-between hover:bg-gray-50 transition-colors">
                        {q}
                        <ChevronRight className="w-4 h-4 text-gray-400 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">{a}</div>
                    </details>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <button onClick={() => setActiveTab('overview')} className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-700 text-white font-bold py-3 px-8 rounded-xl hover:from-violet-700 hover:to-purple-800 transition-all shadow-lg shadow-violet-500/20">
                  Rejoindre nos partenaires <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
