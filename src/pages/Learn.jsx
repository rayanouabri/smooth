import React, { useState, useEffect, useRef, useMemo } from "react";
import { me } from "@/api/auth";
import { supabase } from "@/api/supabaseClient";
import { UserProfile, Enrollment, Course, Lesson } from "@/api/entities";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import {
  ChevronLeft, ChevronRight, CheckCircle, Play, FileText, BookOpen,
  Award, Clock, ArrowLeft, Download, Send, X, Sparkles, Bot,
  Loader2, Lightbulb, PanelLeftClose, PanelLeftOpen, GraduationCap,
  Target, MessageSquare, ListChecks, HelpCircle, Zap, Brain,
  ChevronDown, ChevronUp, AlignLeft, Eye, Video, ExternalLink,
  RotateCcw, Trophy, Check
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "../utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { isPremium } from "@/utils/premium";
import { InvokeLLM } from "@/api/integrations";
import { motion, AnimatePresence } from "framer-motion";

// ---- Convert YouTube watch URLs to embed URLs ----
function toYouTubeEmbed(url) {
  if (!url) return url;
  try {
    const u = new URL(url);
    // Already an embed URL
    if (u.pathname.startsWith('/embed/')) return url;
    // youtube.com/watch?v=XXX
    if (u.hostname.includes('youtube.com') && u.searchParams.has('v')) {
      const videoId = u.searchParams.get('v');
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
    // youtu.be/XXX
    if (u.hostname === 'youtu.be') {
      const videoId = u.pathname.slice(1);
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
  } catch (e) {}
  return url;
}

// ---- Extract links from an HTML string (href + text) ----
function extractLinks(html) {
  const links = [];
  const re = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    if (text) links.push({ href: m[1], text });
  }
  return links;
}

// ---- Ressources essentielles card (replaces the purple gradient HTML div) ----
function ResourcesCard({ html }) {
  const titleMatch = html.match(/Ressources essentielles[^<]*/);
  const title = titleMatch ? titleMatch[0].replace(/^🔗\s*/, '').trim() : 'Ressources essentielles';
  const links = extractLinks(html);
  if (!links.length) return null;
  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-purple-100 mb-2">
      <div className="bg-gradient-to-r from-violet-600 to-purple-700 px-5 py-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
          <Zap className="w-4 h-4 text-yellow-300" />
        </div>
        <div>
          <p className="text-[10px] text-purple-200 font-semibold uppercase tracking-widest">Ressources</p>
          <p className="text-white font-bold text-sm leading-snug line-clamp-1">{title.replace('Ressources essentielles - ', '')}</p>
        </div>
      </div>
      <div className="bg-white px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map((l, i) => (
          <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-purple-50/70 hover:bg-purple-100 border border-purple-100 transition-all group">
            <span className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Target className="w-3 h-3 text-white" />
            </span>
            <span className="text-[13px] font-medium text-purple-800 group-hover:text-purple-900 truncate">{l.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ---- "Pour aller plus loin" card (replaces the light purple HTML div) ----
function FurtherReadingCard({ html }) {
  const links = extractLinks(html);
  if (!links.length) return null;
  // Extract description spans
  const descRe = /<span[^>]*font-size[^>]*>([\s\S]*?)<\/span>/gi;
  const descs = [];
  let dm;
  while ((dm = descRe.exec(html)) !== null) descs.push(dm[1].trim());

  return (
    <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/60 to-purple-50/40 overflow-hidden mb-2">
      <div className="px-5 py-3.5 border-b border-indigo-100 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
          <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
        </div>
        <p className="font-bold text-indigo-800 text-sm">📚 Pour aller plus loin</p>
      </div>
      <div className="px-5 py-4 space-y-2.5">
        {links.map((l, i) => (
          <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
            className="flex items-start gap-3 group">
            <span className="w-5 h-5 rounded-full bg-indigo-200 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-indigo-300 transition-colors">
              <ChevronRight className="w-3 h-3 text-indigo-700" />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-semibold text-indigo-700 group-hover:text-indigo-900 group-hover:underline truncate">{l.text}</p>
              {descs[i] && <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{descs[i]}</p>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ---- "Liens utiles" card — supprimée (remplacée par SmartLinksCard contextuel) ----
// Les liens génériques du HTML de la DB sont ignorés : on affiche SmartLinksCard à la place
function UsefulLinksCard({ html }) {
  // Volontairement vide : les liens génériques du contenu sont remplacés par SmartLinksCard
  return null;
}

// ---- Moteur de liens contextuels : génère des vrais liens pertinents selon le sujet ----
const SUBJECT_LINKS = {
  // ── MATHÉMATIQUES ──
  analyse: [
    { text: "Khan Academy — Limites et continuité", href: "https://fr.khanacademy.org/math/calculus-1" },
    { text: "Exo7 — Cours d'analyse (PDF)", href: "http://exo7.emath.fr/cours.html" },
    { text: "Bibmath — Suites numériques", href: "https://www.bibmath.net/dico/index.php?action=affiche&quoi=./s/suite.html" },
    { text: "BetterExplained — Intuition du calcul", href: "https://betterexplained.com/articles/calculus/" },
  ],
  suites: [
    { text: "Exo7 — Suites numériques (PDF)", href: "http://exo7.emath.fr/cours/ch_suites.pdf" },
    { text: "Bibmath — Suites : définition et convergence", href: "https://www.bibmath.net/dico/index.php?action=affiche&quoi=./s/suite.html" },
    { text: "Khan Academy — Suites et séries", href: "https://fr.khanacademy.org/math/ap-calculus-bc/bc-series-new" },
    { text: "Mathweb — Exercices sur les suites", href: "https://www.mathweb.fr/euclide/cours/terminale_s/les_suites.pdf" },
  ],
  intégrale: [
    { text: "Exo7 — Intégration (PDF)", href: "http://exo7.emath.fr/cours/ch_integration.pdf" },
    { text: "Khan Academy — Intégrales", href: "https://fr.khanacademy.org/math/integral-calculus" },
    { text: "Bibmath — Intégrales de Riemann", href: "https://www.bibmath.net/dico/index.php?action=affiche&quoi=./i/intriemann.html" },
    { text: "Mathway — Calculateur d'intégrales", href: "https://www.mathway.com/Calculus" },
  ],
  probabilité: [
    { text: "Exo7 — Probabilités (PDF)", href: "http://exo7.emath.fr/cours/ch_probas.pdf" },
    { text: "Khan Academy — Probabilités", href: "https://fr.khanacademy.org/math/statistics-probability/probability-library" },
    { text: "Bibmath — Dénombrement et probabilités", href: "https://www.bibmath.net/dico/index.php?action=affiche&quoi=./p/proba.html" },
    { text: "Seeing Theory — Visualiser les probas", href: "https://seeing-theory.brown.edu/fr.html" },
  ],
  statistique: [
    { text: "Khan Academy — Statistiques et probabilités", href: "https://fr.khanacademy.org/math/statistics-probability" },
    { text: "Seeing Theory — Statistiques visuelles", href: "https://seeing-theory.brown.edu/fr.html" },
    { text: "StatQuest (YouTube) — Statistiques expliquées", href: "https://www.youtube.com/@statquest" },
    { text: "Exo7 — Statistiques descriptives", href: "http://exo7.emath.fr/cours/ch_stat.pdf" },
  ],
  algèbre: [
    { text: "Exo7 — Algèbre linéaire (PDF)", href: "http://exo7.emath.fr/cours/ch_algebrelineaire.pdf" },
    { text: "3Blue1Brown — Essence of Linear Algebra", href: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
    { text: "Bibmath — Espaces vectoriels", href: "https://www.bibmath.net/dico/index.php?action=affiche&quoi=./e/espacevectoriel.html" },
    { text: "Khan Academy — Algèbre linéaire", href: "https://fr.khanacademy.org/math/linear-algebra" },
  ],
  matrice: [
    { text: "Exo7 — Matrices et systèmes (PDF)", href: "http://exo7.emath.fr/cours/ch_matrices.pdf" },
    { text: "3Blue1Brown — Matrices comme transformations", href: "https://youtu.be/kYB8IZa5AuE" },
    { text: "Bibmath — Calcul matriciel", href: "https://www.bibmath.net/dico/index.php?action=affiche&quoi=./m/matricielle.html" },
    { text: "WolframAlpha — Calculateur de matrices", href: "https://www.wolframalpha.com/input?i=matrix+calculator" },
  ],
  // ── ÉCONOMIE ──
  économie: [
    { text: "France Stratégie — Rapports économiques", href: "https://www.strategie.gouv.fr/publications" },
    { text: "INSEE — Indicateurs clés de l'économie française", href: "https://www.insee.fr/fr/statistiques" },
    { text: "Alternatives Économiques — Fiches thématiques", href: "https://www.alternatives-economiques.fr" },
    { text: "Khan Academy — Microéconomie", href: "https://fr.khanacademy.org/economics-finance-domain/microeconomics" },
  ],
  macroéconomie: [
    { text: "Khan Academy — Macroéconomie", href: "https://fr.khanacademy.org/economics-finance-domain/macroeconomics" },
    { text: "OCDE — Perspectives économiques mondiales", href: "https://www.oecd.org/fr/economie/perspectives-economiques-de-locde.htm" },
    { text: "Banque de France — Données et analyses", href: "https://www.banque-france.fr/fr/publications-et-statistiques" },
    { text: "FMI — World Economic Outlook", href: "https://www.imf.org/en/Publications/WEO" },
  ],
  microéconomie: [
    { text: "Khan Academy — Microéconomie", href: "https://fr.khanacademy.org/economics-finance-domain/microeconomics" },
    { text: "Cours-Gratuit — Microéconomie terminale", href: "https://www.cours-gratuit.com/cours-microeconomie" },
    { text: "MIT OpenCourseWare — Principles of Microeconomics", href: "https://ocw.mit.edu/courses/14-01-principles-of-microeconomics-fall-2018/" },
    { text: "Economie pour tous — Fiches micro", href: "https://www.economie.gouv.fr/facileco" },
  ],
  monnaie: [
    { text: "Banque de France — Comprendre la monnaie", href: "https://www.banque-france.fr/fr/education-economique-et-financiere" },
    { text: "BCE — Qu'est-ce que l'euro ?", href: "https://www.ecb.europa.eu/euro/html/index.fr.html" },
    { text: "Khan Academy — Monnaie et banques", href: "https://fr.khanacademy.org/economics-finance-domain/core-finance/money-and-banking" },
    { text: "Alternatives Éco — Le rôle des banques centrales", href: "https://www.alternatives-economiques.fr/banques-centrales" },
  ],
  commerce: [
    { text: "OMC — Commerce international : données", href: "https://www.wto.org/french/res_f/statis_f/statis_f.htm" },
    { text: "CEPII — Analyses du commerce mondial", href: "http://www.cepii.fr" },
    { text: "Douanes françaises — Statistiques export/import", href: "https://www.douane.gouv.fr/service-en-ligne/statistiques-du-commerce-exterieur" },
    { text: "Khan Academy — Commerce international", href: "https://fr.khanacademy.org/economics-finance-domain/macroeconomics/international-trade-topic" },
  ],
  // ── CULTURE GÉNÉRALE / PHILOSOPHIE ──
  philosophie: [
    { text: "PhiloSophie — Cours et fiches bac", href: "https://www.philosophie.ac-versailles.fr" },
    { text: "Encyclopédie de la philosophie (Stanford)", href: "https://plato.stanford.edu" },
    { text: "France Culture — Podcasts philo", href: "https://www.radiofrance.fr/franceculture/podcasts/series-philosophiques" },
    { text: "PhiloFacile — Fiches et dissertations", href: "https://www.philofacile.com" },
  ],
  histoire: [
    { text: "Gallica (BnF) — Documents historiques", href: "https://gallica.bnf.fr" },
    { text: "Herodote.net — Chronologie et fiches", href: "https://www.herodote.net" },
    { text: "France Culture — Histoire et civilisations", href: "https://www.radiofrance.fr/franceculture/histoire" },
    { text: "Lumni — Histoire de France en vidéo", href: "https://www.lumni.fr/primaire/histoire" },
  ],
  géopolitique: [
    { text: "IRIS — Institut de relations internationales", href: "https://www.iris-france.org/publications" },
    { text: "Le Monde Diplomatique — Archives thématiques", href: "https://www.monde-diplomatique.fr" },
    { text: "Diploweb — Géopolitique et cartes", href: "https://www.diploweb.com" },
    { text: "Courrier International — Géopolitique mondiale", href: "https://www.courrierinternational.com" },
  ],
  politique: [
    { text: "Vie Publique — Institutions françaises", href: "https://www.vie-publique.fr" },
    { text: "Conseil Constitutionnel — Droit et Constitution", href: "https://www.conseil-constitutionnel.fr" },
    { text: "SciencesPo — Ressources politiques", href: "https://www.sciencespo.fr/ressources" },
    { text: "IFOP — Sondages et opinion publique", href: "https://www.ifop.com/publications" },
  ],
  sociologie: [
    { text: "Cairn.info — Articles de sociologie", href: "https://www.cairn.info/sociologie.htm" },
    { text: "INSEE — Données sociales", href: "https://www.insee.fr/fr/statistiques/5763750" },
    { text: "La Découverte — Repères sociologie", href: "https://www.editionsladecouverte.fr/sociologie" },
    { text: "France Culture — Podcasts sociologie", href: "https://www.radiofrance.fr/franceculture/sciences-sociales" },
  ],
  culture: [
    { text: "Gallica (BnF) — Patrimoine culturel numérisé", href: "https://gallica.bnf.fr" },
    { text: "France Culture — Podcasts culturels", href: "https://www.radiofrance.fr/franceculture" },
    { text: "Universalis — Encyclopédie en ligne", href: "https://www.universalis.fr" },
    { text: "Le Monde — Dossiers culture", href: "https://www.lemonde.fr/culture" },
  ],
  // ── MANAGEMENT / GESTION ──
  management: [
    { text: "HBR France — Articles de management", href: "https://www.hbrfrance.fr" },
    { text: "Pearltrees — Cours de management HEC", href: "https://www.pearltrees.com/t/management" },
    { text: "Coursera — Management spécialisations", href: "https://www.coursera.org/browse/business/leadership-and-management" },
    { text: "Harvard Business School — Case Studies", href: "https://www.hbs.edu/faculty/Pages/default.aspx" },
  ],
  stratégie: [
    { text: "HBR — Strategic Management", href: "https://hbr.org/topic/subject/strategy" },
    { text: "McKinsey Insights — Stratégie d'entreprise", href: "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights" },
    { text: "Stratégique.fr — Analyses sectorielles", href: "https://www.strategique.fr" },
    { text: "Porter's Five Forces — Guide complet", href: "https://www.investopedia.com/terms/p/porter.asp" },
  ],
  marketing: [
    { text: "HubSpot Academy — Marketing gratuit", href: "https://academy.hubspot.com/fr" },
    { text: "Think with Google — Marketing insights", href: "https://www.thinkwithgoogle.com/intl/fr-fr" },
    { text: "Journal du Net — Marketing digital", href: "https://www.journaldunet.com/ebusiness/le-net/marketing" },
    { text: "Marketing Management (Kotler) — Résumé", href: "https://www.marketing-schools.org/types-of-marketing/kotler-s-five-product-levels.html" },
  ],
  comptabilité: [
    { text: "Compta-Facile — Cours et fiches", href: "https://www.compta-facile.com" },
    { text: "Fiches-auto-entrepreneur.fr — Comptabilité", href: "https://www.fiches-auto-entrepreneur.fr/comptabilite" },
    { text: "Khan Academy — Finances personnelles", href: "https://fr.khanacademy.org/college-careers-more/personal-finance" },
    { text: "Legalstart — Guide comptabilité d'entreprise", href: "https://www.legalstart.fr/fiches-pratiques/comptabilite" },
  ],
  finance: [
    { text: "Investopedia — Finance glossary (EN)", href: "https://www.investopedia.com" },
    { text: "AMF — Autorité des marchés financiers", href: "https://www.amf-france.org/fr/espace-epargnants" },
    { text: "Banque de France — Éducation financière", href: "https://www.banque-france.fr/fr/education-economique-et-financiere" },
    { text: "Vernimmen.net — Finance d'entreprise", href: "https://www.vernimmen.net" },
  ],
  // ── LANGUES ──
  anglais: [
    { text: "BBC Learning English — Cours gratuits", href: "https://www.bbc.co.uk/learningenglish" },
    { text: "British Council — Ressources English", href: "https://learnenglish.britishcouncil.org" },
    { text: "Cambridge Dictionary — En ligne", href: "https://dictionary.cambridge.org/fr" },
    { text: "TED Talks — Écoute active en anglais", href: "https://www.ted.com/talks" },
  ],
  espagnol: [
    { text: "BBC Languages — Espagnol", href: "https://www.bbc.co.uk/languages/spanish" },
    { text: "Real Academia Española — Dictionnaire", href: "https://www.rae.es" },
    { text: "Cervantes — Ressources espagnol", href: "https://www.cervantes.es/lengua_y_ensenanza/lengua_espanola.htm" },
    { text: "WordReference — Espagnol-Français", href: "https://www.wordreference.com/esfr" },
  ],
  // ── LOGIQUE / RAISONNEMENT ──
  logique: [
    { text: "Brilliant.org — Logic puzzles", href: "https://brilliant.org/courses/logic" },
    { text: "Stanford Encyclopedia — Logic", href: "https://plato.stanford.edu/entries/logic-classical" },
    { text: "Annales ECS — Raisonnement logique", href: "https://www.annabac.com/annales-bac" },
    { text: "GMAT Club — Raisonnement critique", href: "https://gmatclub.com/forum/verbal-section-critical-reasoning" },
  ],
  dissertation: [
    { text: "Étudiant.fr — Méthodologie dissertation", href: "https://www.letudiant.fr/etudes/methodologie-de-la-dissertation.html" },
    { text: "France Culture — Comprendre pour disserter", href: "https://www.radiofrance.fr/franceculture" },
    { text: "Scribbr — Plan de dissertation (exemples)", href: "https://www.scribbr.fr/methodologie/plan-dissertation" },
    { text: "Annales HEC — Dissertations type", href: "https://www.hec.fr/concours" },
  ],
};

// Moteur de recherche contextuel : trouve les 3-4 liens les plus pertinents au titre de la leçon
function getSmartLinks(lessonTitle, courseTitle) {
  if (!lessonTitle) return [];
  const text = `${lessonTitle} ${courseTitle || ''}`.toLowerCase()
    // Normalise les accents pour matching
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // Score chaque entrée de SUBJECT_LINKS selon les mots présents dans le titre
  const scored = Object.entries(SUBJECT_LINKS).map(([key, links]) => {
    const normalizedKey = key.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    // Score = nombre de mots du titre qui matchent la clé
    let score = 0;
    if (text.includes(normalizedKey)) score += 3;
    // Mots partiels
    normalizedKey.split(/\s+/).forEach(w => { if (w.length > 3 && text.includes(w)) score += 1; });
    return { key, links, score };
  }).filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (!scored.length) return [];
  // Prend le meilleur match et 3-4 liens de ce sujet
  return scored[0].links.slice(0, 4);
}

// ---- Card de liens contextuels (remplace UsefulLinksCard) ----
function SmartLinksCard({ lessonTitle, courseTitle }) {
  const links = getSmartLinks(lessonTitle, courseTitle);
  if (!links.length) return null;
  return (
    <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 overflow-hidden">
      <div className="px-5 py-3.5 border-b border-blue-100/70 flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
          <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
        </div>
        <p className="font-bold text-blue-800 text-sm">📌 Liens utiles pour cette leçon</p>
      </div>
      <div className="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {links.map((l, i) => (
          <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all group">
            <span className="w-6 h-6 rounded-md bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center flex-shrink-0 transition-colors">
              <ExternalLink className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors" />
            </span>
            <span className="text-[13px] font-medium text-blue-800 group-hover:text-blue-900 leading-snug">{l.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ---- QCM généré par IA intégré dans la leçon ----
function LessonQuiz({ lesson, courseName }) {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const generateQuiz = async () => {
    if (quiz) { setExpanded(true); return; }
    setLoading(true);
    setExpanded(true);
    try {
      const content = (lesson.content || '').substring(0, 4000);
      const response = await InvokeLLM({
        prompt: `Tu es un professeur qui crée des QCM pour des étudiants en prépa grandes écoles.
Cours : "${courseName}", Leçon : "${lesson.title}".
Contenu : ${content}

Génère exactement 4 questions QCM portant PRÉCISÉMENT sur le contenu de cette leçon.
Chaque question doit avoir 4 options (A, B, C, D) dont UNE SEULE correcte.
Les mauvaises réponses doivent être plausibles mais clairement incorrectes pour quelqu'un qui a bien compris.

Réponds UNIQUEMENT avec un JSON valide dans ce format exact (aucun texte avant ou après) :
{
  "questions": [
    {
      "q": "Question ici ?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correct": 0,
      "explanation": "Explication courte de la bonne réponse."
    }
  ]
}`,
        add_context_from_internet: false
      });
      // Parse JSON — cherche le bloc JSON dans la réponse
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        if (parsed.questions && parsed.questions.length) {
          setQuiz(parsed.questions);
          setAnswers({});
          setSubmitted(false);
          setScore(0);
        }
      }
    } catch (e) {
      console.error('Quiz generation error:', e);
    } finally { setLoading(false); }
  };

  const handleSubmit = () => {
    if (!quiz) return;
    let s = 0;
    quiz.forEach((q, i) => { if (answers[i] === q.correct) s++; });
    setScore(s);
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const allAnswered = quiz && quiz.every((_, i) => answers[i] !== undefined);

  return (
    <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/80 to-purple-50/40 overflow-hidden">
      {/* Header — cliquable pour ouvrir */}
      <button
        className="w-full px-5 py-4 flex items-center justify-between gap-3 group"
        onClick={quiz ? () => setExpanded(!expanded) : generateQuiz}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-violet-100 group-hover:bg-violet-200 flex items-center justify-center flex-shrink-0 transition-colors">
            <HelpCircle className="w-4 h-4 text-violet-600" />
          </div>
          <div className="text-left">
            <p className="font-bold text-violet-900 text-sm">🎯 Tester mes connaissances</p>
            <p className="text-[11px] text-violet-500 mt-0.5">
              {quiz ? `${quiz.length} questions sur cette leçon` : 'QCM généré par IA — basé sur le contenu de la leçon'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {submitted && (
            <span className={`text-[12px] font-bold px-2.5 py-1 rounded-full ${
              score === quiz.length ? 'bg-emerald-100 text-emerald-700' :
              score >= quiz.length / 2 ? 'bg-amber-100 text-amber-700' :
              'bg-red-100 text-red-600'
            }`}>
              {score}/{quiz.length}
            </span>
          )}
          {loading
            ? <Loader2 className="w-4 h-4 text-violet-500 animate-spin" />
            : <ChevronDown className={`w-4 h-4 text-violet-400 transition-transform ${expanded ? 'rotate-180' : ''}`} />
          }
        </div>
      </button>

      {/* Body */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            {loading && (
              <div className="px-5 pb-6 flex items-center justify-center gap-3 text-violet-500">
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="text-sm">Génération des questions en cours…</span>
              </div>
            )}

            {quiz && !loading && (
              <div className="px-5 pb-6 space-y-5 border-t border-violet-100">
                {quiz.map((q, qi) => (
                  <div key={qi} className="pt-4">
                    <p className="text-sm font-bold text-gray-800 mb-3">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-violet-100 text-violet-700 text-[11px] font-extrabold mr-2 flex-shrink-0">{qi + 1}</span>
                      {q.q}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, oi) => {
                        const isSelected = answers[qi] === oi;
                        const isCorrect = q.correct === oi;
                        let style = 'bg-white border-gray-200 text-gray-700 hover:border-violet-300 hover:bg-violet-50/50';
                        if (submitted) {
                          if (isCorrect) style = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-semibold';
                          else if (isSelected && !isCorrect) style = 'bg-red-50 border-red-300 text-red-700';
                          else style = 'bg-white border-gray-100 text-gray-400';
                        } else if (isSelected) {
                          style = 'bg-violet-100 border-violet-400 text-violet-800 font-semibold';
                        }
                        return (
                          <button
                            key={oi}
                            onClick={() => !submitted && setAnswers(prev => ({ ...prev, [qi]: oi }))}
                            disabled={submitted}
                            className={`w-full text-left px-4 py-2.5 rounded-xl border text-[13px] transition-all flex items-center gap-3 ${style}`}
                          >
                            <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${
                              submitted && isCorrect ? 'border-emerald-500 bg-emerald-500 text-white' :
                              submitted && isSelected && !isCorrect ? 'border-red-400 bg-red-400 text-white' :
                              isSelected ? 'border-violet-500 bg-violet-500 text-white' :
                              'border-gray-300'
                            }`}>
                              {submitted && isCorrect ? '✓' : submitted && isSelected && !isCorrect ? '✗' : ['A','B','C','D'][oi]}
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {submitted && q.explanation && (
                      <div className="mt-2.5 flex items-start gap-2 px-3 py-2.5 bg-blue-50 rounded-xl border border-blue-100">
                        <Lightbulb className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <p className="text-[12px] text-blue-700 leading-relaxed">{q.explanation}</p>
                      </div>
                    )}
                  </div>
                ))}

                {/* Actions */}
                <div className="pt-2 flex items-center gap-3">
                  {!submitted ? (
                    <button
                      onClick={handleSubmit}
                      disabled={!allAnswered}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-bold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed hover:from-violet-700 hover:to-purple-700 transition-all shadow-md shadow-violet-500/20"
                    >
                      <Check className="w-4 h-4" /> Valider mes réponses
                    </button>
                  ) : (
                    <>
                      <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold ${
                        score === quiz.length ? 'bg-emerald-100 text-emerald-700' :
                        score >= quiz.length / 2 ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        <Trophy className="w-4 h-4" />
                        {score === quiz.length ? 'Parfait !' : score >= quiz.length / 2 ? 'Bien joué !' : 'À revoir'} — {score}/{quiz.length}
                      </div>
                      <button
                        onClick={handleReset}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-all"
                      >
                        <RotateCcw className="w-3.5 h-3.5" /> Recommencer
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---- Detect which type of block an HTML div is ----
function classifyHtmlBlock(html) {
  if (/linear-gradient.*667eea/.test(html) || /Ressources essentielles/i.test(html)) return 'resources';
  if (/Pour aller plus loin/i.test(html) || /f8f5ff/.test(html)) return 'further';
  if (/Liens utiles/i.test(html) || /f0f4ff/.test(html) || /border-left.*4px/.test(html)) return 'links';
  return 'raw';
}

// ---- Find matching closing </div> index, accounting for nesting ----
function findClosingDiv(content, startIdx) {
  let depth = 0;
  let i = startIdx;
  const lower = content.toLowerCase();
  while (i < content.length) {
    if (lower[i] === '<') {
      if (lower.slice(i, i + 4) === '<div') {
        depth++;
        i += 4;
      } else if (lower.slice(i, i + 5) === '</div') {
        depth--;
        // advance past the closing >
        let k = i + 5;
        while (k < content.length && content[k] !== '>') k++;
        k++; // include the >
        if (depth === 0) return k;
        i = k;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
  return content.length;
}

// ---- Split content into segments: html blocks, iframes, and markdown text ----
function segmentContent(content) {
  const segments = [];
  let cursor = 0;
  const lower = content.toLowerCase();

  let i = 0;
  while (i < content.length) {
    // Check for <iframe
    if (lower.slice(i, i + 7) === '<iframe') {
      const end = lower.indexOf('</iframe>', i);
      if (end !== -1) {
        if (i > cursor) segments.push({ type: 'markdown', value: content.slice(cursor, i) });
        const block = content.slice(i, end + 9);
        const srcMatch = block.match(/src=["']([^"']+)["']/);
        const titleMatch = block.match(/title=["']([^"']+)["']/);
        if (srcMatch) segments.push({ type: 'video', src: toYouTubeEmbed(srcMatch[1]), title: titleMatch?.[1] || 'Vidéo' });
        cursor = end + 9;
        i = cursor;
        continue;
      }
    }
    // Check for <div (only at position where it actually starts)
    if (lower.slice(i, i + 4) === '<div') {
      const end = findClosingDiv(content, i);
      if (i > cursor) segments.push({ type: 'markdown', value: content.slice(cursor, i) });
      const block = content.slice(i, end);
      const kind = classifyHtmlBlock(block);
      segments.push({ type: kind === 'raw' ? 'html' : kind, value: block });
      cursor = end;
      i = end;
      continue;
    }
    i++;
  }
  if (cursor < content.length) segments.push({ type: 'markdown', value: content.slice(cursor) });
  return segments;
}

// ---- Markdown article component ----
function MarkdownArticle({ text }) {
  const trimmed = text.trim();
  if (!trimmed) return null;
  return (
    <article className="prose prose-gray prose-lg max-w-none
      prose-headings:text-gray-900 prose-headings:font-extrabold
      prose-h1:text-3xl prose-h1:mb-6 prose-h1:pb-4 prose-h1:border-b prose-h1:border-gray-100
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-gray-600 prose-p:leading-[1.85] prose-p:text-[15.5px] prose-p:mb-5
      prose-li:text-gray-600 prose-li:leading-relaxed
      prose-strong:text-gray-900
      prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
      prose-blockquote:border-l-purple-400 prose-blockquote:bg-purple-50/50 prose-blockquote:rounded-r-xl prose-blockquote:py-1
      prose-code:text-purple-700 prose-code:bg-purple-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
      prose-img:rounded-xl prose-img:shadow-md
      prose-table:border-collapse
      prose-th:bg-purple-50 prose-th:text-purple-900 prose-th:font-bold prose-th:text-sm prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-purple-200
      prose-td:text-sm prose-td:px-4 prose-td:py-2.5 prose-td:border prose-td:border-gray-200
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({node, children, ...props}) => (
            <h1 {...props} className="text-3xl font-extrabold text-gray-900 mb-6 pb-4 border-b border-gray-100">{children}</h1>
          ),
          h2: ({node, children, ...props}) => (
            <h2 {...props} className="flex items-center gap-3 text-2xl mt-10 mb-4 font-extrabold text-gray-900">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 inline-flex items-center justify-center flex-shrink-0 shadow-sm">
                <BookOpen className="w-4 h-4 text-purple-600" />
              </span>
              {children}
            </h2>
          ),
          h3: ({node, children, ...props}) => (
            <h3 {...props} className="text-xl mt-8 mb-3 font-extrabold text-gray-800 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-purple-400 to-violet-500 flex-shrink-0" />
              {children}
            </h3>
          ),
          h4: ({node, children, ...props}) => (
            <h4 {...props} className="text-base mt-6 mb-2 font-bold text-gray-800">{children}</h4>
          ),
          ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2.5 marker:text-purple-500 marker:font-bold" {...props} />,
          ul: ({node, ...props}) => <ul className="list-none pl-0 mb-6 space-y-2" {...props} />,
          li: ({node, children, ordered, ...props}) => {
            if (!ordered) {
              return (
                <li className="flex items-start gap-3 text-gray-600 leading-relaxed" {...props}>
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 mt-[0.55rem] flex-shrink-0" />
                  <span className="flex-1">{children}</span>
                </li>
              );
            }
            return <li className="text-gray-600 leading-relaxed pl-1" {...props}>{children}</li>;
          },
          a: ({node, children, href, ...props}) => (
            <a href={href} target="_blank" rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 hover:underline font-medium inline-flex items-center gap-0.5" {...props}>
              {children}
            </a>
          ),
          blockquote: ({node, children, ...props}) => (
            <blockquote {...props} className="border-l-4 border-purple-400 bg-gradient-to-r from-purple-50/70 to-transparent rounded-r-2xl py-4 px-5 my-6 not-italic">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-700 text-[15px] leading-relaxed">{children}</div>
              </div>
            </blockquote>
          ),
          table: ({node, children, ...props}) => (
            <div className="overflow-x-auto my-6 rounded-2xl border border-purple-100 shadow-sm">
              <table className="w-full" {...props}>{children}</table>
            </div>
          ),
          thead: ({node, children, ...props}) => (
            <thead className="bg-gradient-to-r from-purple-50 to-violet-50" {...props}>{children}</thead>
          ),
          th: ({node, children, ...props}) => (
            <th className="text-purple-900 font-bold text-sm px-4 py-3 border-b border-purple-200 text-left" {...props}>{children}</th>
          ),
          td: ({node, children, ...props}) => (
            <td className="text-gray-600 text-sm px-4 py-3 border-b border-gray-100" {...props}>{children}</td>
          ),
          tr: ({node, children, ...props}) => (
            <tr className="hover:bg-purple-50/30 transition-colors" {...props}>{children}</tr>
          ),
          strong: ({node, children, ...props}) => (
            <strong className="font-bold text-gray-900" {...props}>{children}</strong>
          ),
          em: ({node, children, ...props}) => (
            <em className="text-purple-700 not-italic font-medium" {...props}>{children}</em>
          ),
          hr: ({node, ...props}) => (
            <hr className="border-0 border-t border-gray-100 my-8" {...props} />
          ),
          code: ({node, inline, children, ...props}) => inline
            ? <code className="bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded-md text-[0.88em] font-mono" {...props}>{children}</code>
            : <pre className="bg-gray-900 rounded-2xl p-5 overflow-x-auto my-6 text-sm"><code className="text-green-300 font-mono" {...props}>{children}</code></pre>,
        }}
      >
        {trimmed}
      </ReactMarkdown>
    </article>
  );
}

// ---- Content renderer: segments content and renders each block with proper design ----
function LessonContentRenderer({ content }) {
  const segments = segmentContent(content);

  return (
    <div className="space-y-6">
      {segments.map((seg, i) => {
        if (seg.type === 'video') {
          return (
            <div key={i} className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-black">
              <div className="aspect-video relative">
                <iframe
                  src={seg.src}
                  title={seg.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {seg.title && seg.title !== 'Vidéo' && (
                <p className="text-center text-xs text-gray-400 py-2 flex items-center justify-center gap-1.5 bg-black">
                  <Play className="w-3 h-3" /> {seg.title}
                </p>
              )}
            </div>
          );
        }
        if (seg.type === 'resources') return <ResourcesCard key={i} html={seg.value} />;
        if (seg.type === 'further')   return <FurtherReadingCard key={i} html={seg.value} />;
        if (seg.type === 'links')     return <UsefulLinksCard key={i} html={seg.value} />;
        if (seg.type === 'markdown')  return <MarkdownArticle key={i} text={seg.value} />;
        // Fallback: raw HTML rendered via dangerouslySetInnerHTML (safe, it's our own content)
        return <div key={i} className="rounded-2xl bg-gray-50 border border-gray-100 p-4 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: seg.value }} />;
      })}
    </div>
  );
}

// ---- Markdown renderer for bot messages ----
function BotMessageContent({ content }) {
  return (
    <div className="bot-msg-md text-[13px] leading-relaxed">
      <ReactMarkdown
        components={{
          p: ({children}) => <p className="mb-1.5 last:mb-0">{children}</p>,
          strong: ({children}) => <strong className="font-bold text-gray-900">{children}</strong>,
          em: ({children}) => <em className="italic">{children}</em>,
          ul: ({children}) => <ul className="list-none space-y-1 my-1.5">{children}</ul>,
          ol: ({children}) => <ol className="list-decimal pl-4 space-y-1 my-1.5">{children}</ol>,
          li: ({children}) => <li className="flex items-start gap-1.5"><span className="text-purple-400 mt-0.5 flex-shrink-0">&#8226;</span><span>{children}</span></li>,
          h1: ({children}) => <p className="font-bold text-gray-900 text-sm mt-2 mb-1">{children}</p>,
          h2: ({children}) => <p className="font-bold text-gray-900 text-sm mt-2 mb-1">{children}</p>,
          h3: ({children}) => <p className="font-semibold text-gray-800 mt-1.5 mb-1">{children}</p>,
          code: ({inline, children}) => inline
            ? <code className="bg-purple-50 text-purple-700 px-1 py-0.5 rounded text-xs">{children}</code>
            : <pre className="bg-gray-50 rounded-lg p-2 text-xs overflow-x-auto my-1.5"><code>{children}</code></pre>,
          blockquote: ({children}) => <div className="border-l-2 border-purple-300 pl-2 my-1.5 text-gray-600 text-xs">{children}</div>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

// ---- Lesson AI Assistant ----
function LessonAssistant({ currentLesson, courseName, allLessons, lessonIndex }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeAction, setActiveAction] = useState(null);
  const messagesEndRef = useRef(null);

  const lessonContent = currentLesson?.content || '';

  useEffect(() => {
    setMessages([]);
    setActiveAction(null);
  }, [currentLesson?.id]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setHasBeenOpened(true);
      setMessages([{
        role: "assistant",
        content: `Je suis ton assistant pour cette leçon ! Pose-moi une question ou utilise les raccourcis ci-dessous.`
      }]);
    }
  }, [isOpen, currentLesson?.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Hide welcome bubble after 8 seconds
  useEffect(() => {
    if (!hasBeenOpened && showBubble) {
      const timer = setTimeout(() => setShowBubble(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [hasBeenOpened, showBubble]);

  const quickActions = [
    { id: "summary", label: "Résumer la leçon", icon: AlignLeft, prompt: `Resume cette lecon en 5 points cles maximum, de maniere claire et concise. Contenu : ${lessonContent.substring(0, 4000)}` },
    { id: "quiz", label: "Tester mes connaissances", icon: HelpCircle, prompt: `A partir du contenu de cette lecon, genere 3 questions QCM (avec 4 choix et la bonne reponse indiquee) pour tester la comprehension de l'etudiant. Contenu : ${lessonContent.substring(0, 4000)}` },
    { id: "explain", label: "Expliquer simplement", icon: Lightbulb, prompt: `Explique le contenu de cette lecon comme si tu parlais a quelqu'un qui decouvre completement le sujet. Utilise des analogies simples et des exemples concrets du quotidien. Contenu : ${lessonContent.substring(0, 4000)}` },
    { id: "next", label: "Points essentiels", icon: ListChecks, prompt: `A partir de cette lecon, donne les 3-5 choses essentielles a retenir absolument, et un conseil pratique pour appliquer ces connaissances dans la vie reelle en France. Contenu : ${lessonContent.substring(0, 4000)}` },
  ];

  const handleAction = async (action) => {
    setActiveAction(action.id);
    setMessages(prev => [...prev, { role: "user", content: action.label }]);
    setIsLoading(true);
    try {
      const response = await InvokeLLM({
        prompt: `Tu es un assistant pedagogique bienveillant de FrancePrepAcademy. L'etudiant suit le cours "${courseName}", lecon "${currentLesson?.title || ''}".
REGLES STRICTES :
- Reponds en francais
- N'utilise JAMAIS de markdown (pas de **, pas de ##, pas de *)
- Utilise des tirets (-) pour les listes
- Utilise des emojis pertinents pour structurer
- Sois clair, concis et utile
${action.prompt}`,
        add_context_from_internet: false
      });
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: "Désolé, je n'ai pas pu répondre. Réessaie." }]);
    } finally { setIsLoading(false); setActiveAction(null); }
  };

  const handleSend = async () => {
    const msg = input.trim();
    if (!msg || isLoading) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: msg }]);
    setIsLoading(true);
    try {
      const response = await InvokeLLM({
        prompt: `Tu es un assistant pedagogique de FrancePrepAcademy. Cours : "${courseName}", lecon : "${currentLesson?.title}".
CONTENU DE LA LECON : ${lessonContent.substring(0, 3000)}
REGLES STRICTES :
- Reponds en francais
- N'utilise JAMAIS de markdown (pas de **, pas de ##, pas de *)
- Utilise des tirets (-) pour les listes
- Utilise des emojis pertinents pour structurer
- Sois pedagogique et concis (3-5 phrases), donne des exemples concrets
Question : ${msg}`,
        add_context_from_internet: false
      });
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: "Désolé, réessaie." }]);
    } finally { setIsLoading(false); }
  };

  return (
    <>
      {/* Floating button + welcome bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-5 right-5 z-40 flex items-end gap-3"
          >
            {/* Welcome bubble - shown before first open */}
            {!hasBeenOpened && showBubble && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-white rounded-2xl shadow-xl border border-purple-100 p-3.5 max-w-[220px] mb-1"
              >
                <button onClick={() => setShowBubble(false)} className="absolute top-1.5 right-2 text-gray-300 hover:text-gray-500 text-xs">✕</button>
                <p className="text-xs font-semibold text-gray-800 mb-2">Besoin d'aide ? 🎓</p>
                <div className="space-y-1.5">
                  <button
                    onClick={() => { setIsOpen(true); setTimeout(() => handleAction(quickActions[0]), 300); }}
                    className="w-full text-left text-[11px] text-purple-700 bg-purple-50 hover:bg-purple-100 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <AlignLeft className="w-3 h-3 flex-shrink-0" />Résumer cette leçon
                  </button>
                  <button
                    onClick={() => { setIsOpen(true); setTimeout(() => handleAction(quickActions[1]), 300); }}
                    className="w-full text-left text-[11px] text-purple-700 bg-purple-50 hover:bg-purple-100 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <HelpCircle className="w-3 h-3 flex-shrink-0" />Tester mes connaissances
                  </button>
                </div>
                <div className="absolute -right-2 bottom-5 w-3 h-3 bg-white border-r border-b border-purple-100 transform rotate-[-45deg]" />
              </motion.div>
            )}
            <button onClick={() => setIsOpen(true)} className="group relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 shadow-lg shadow-purple-500/25 flex items-center justify-center transition-all group-hover:shadow-xl group-hover:scale-105">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-4 right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)]"
            style={{ height: "min(550px, calc(100vh - 2rem))" }}
          >
            <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl border border-purple-200/50 bg-white">
              <div className="bg-gradient-to-r from-violet-600 to-purple-700 text-white px-4 py-3 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><Brain className="w-4 h-4" /></div>
                    <div>
                      <p className="text-sm font-bold leading-tight">Assistant IA</p>
                      <p className="text-[10px] text-purple-200 truncate max-w-[200px]">{currentLesson?.title}</p>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-lg hover:bg-white/20 flex items-center justify-center"><X className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="px-3 py-2.5 border-b border-gray-100 flex gap-1.5 overflow-x-auto scrollbar-none flex-shrink-0">
                {quickActions.map(a => (
                  <button
                    key={a.id}
                    onClick={() => handleAction(a)}
                    disabled={isLoading}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all border flex-shrink-0 ${
                      activeAction === a.id
                        ? 'bg-purple-100 text-purple-700 border-purple-200'
                        : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200'
                    }`}
                  >
                    <a.icon className="w-3 h-3" />{a.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0 bg-gradient-to-b from-purple-50/30 to-white">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <Brain className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className={`max-w-[85%] px-3 py-2 rounded-xl text-[13px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-tr-sm"
                        : "bg-white text-gray-700 border border-gray-100 shadow-sm rounded-tl-sm"
                    }`}>
                      {msg.role === "assistant"
                        ? <BotMessageContent content={msg.content} />
                        : <p className="whitespace-pre-wrap">{msg.content}</p>
                      }
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0"><Brain className="w-3 h-3 text-white" /></div>
                    <div className="bg-white px-3 py-2.5 rounded-xl border border-gray-100 shadow-sm rounded-tl-sm">
                      <div className="flex gap-1"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" /><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} /><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} /></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                    placeholder="Pose ta question..."
                    className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-400 focus:ring-1 focus:ring-purple-100 outline-none text-sm"
                    disabled={isLoading}
                  />
                  <button onClick={handleSend} disabled={!input.trim() || isLoading} className="w-9 h-9 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white flex items-center justify-center disabled:opacity-40 flex-shrink-0"><Send className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Learn() {
  const { t } = useLanguage();
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [enrollment, setEnrollment] = useState(null);
  const [canAccess, setCanAccess] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('courseId');
  const lessonId = urlParams.get('lessonId');
  const queryClient = useQueryClient();

  useEffect(() => { loadUserAndEnrollment(); }, [courseId]);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadUserAndEnrollment = async () => {
    try {
      const userData = await me();
      setUser(userData);
      if (userData?.id) {
        const { data: profile } = await supabase.from('user_profiles').select('*').eq('id', userData.id).single();
        setUserProfile(profile || userData);
      }
      const enrollments = await Enrollment.filter({ user_email: userData.email, course_id: courseId });
      if (enrollments.length > 0) setEnrollment(enrollments[0]);
    } catch (error) { console.error("Error loading user:", error); }
  };

  const { data: course, isLoading: courseLoading, isError: courseError } = useQuery({
    queryKey: ['course', courseId],
    queryFn: async () => {
      if (!courseId) return null;
      const courses = await Course.filter({ id: courseId });
      return courses?.[0] || null;
    },
    enabled: !!courseId, retry: 2,
  });

  useEffect(() => {
    if (course && userProfile !== null) {
      if (!course.is_premium) { setCanAccess(true); return; }
      setCanAccess(isPremium(userProfile));
    } else if (course && !userProfile) {
      setCanAccess(!course.is_premium);
    }
  }, [course, userProfile]);

  const { data: lessons = [], isLoading: lessonsLoading } = useQuery({
    queryKey: ['lessons', courseId],
    queryFn: async () => {
      const l = await Lesson.filter({ course_id: courseId }, 'order');
      return l.sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    enabled: !!courseId,
  });

  const { data: currentLesson, isLoading: lessonLoading } = useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: async () => { const d = await Lesson.filter({ id: lessonId }); return d[0]; },
    enabled: !!lessonId,
  });

  const markCompleteMutation = useMutation({
    mutationFn: async () => {
      const cl = [...(enrollment.completed_lessons || [])];
      if (!cl.includes(lessonId)) cl.push(lessonId);
      const pct = (cl.length / lessons.length) * 100;
      return Enrollment.update(enrollment.id, { completed_lessons: cl, progress_percentage: pct, last_accessed: new Date().toISOString(), completed: pct === 100 });
    },
    onSuccess: (u) => { setEnrollment(u); queryClient.invalidateQueries({ queryKey: ['enrollments'] }); },
  });

  const currentIndex = lessons.findIndex(l => l.id === lessonId);
  const nextLesson = lessons[currentIndex + 1];
  const prevLesson = lessons[currentIndex - 1];
  const isCompleted = enrollment?.completed_lessons?.includes(lessonId);
  const progressPercentage = enrollment?.progress_percentage || 0;
  const completedCount = enrollment?.completed_lessons?.length || 0;

  const lessonsByModule = lessons.reduce((acc, lesson) => {
    const m = lesson.module_number || 1;
    if (!acc[m]) acc[m] = [];
    acc[m].push(lesson);
    return acc;
  }, {});

  const handleNav = (lid) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${lid}`);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  // Content & video from correct DB fields
  const lessonContent = currentLesson?.content || '';
  const videoUrl = currentLesson?.video_url;
  const embedUrl = toYouTubeEmbed(videoUrl);
  const wordCount = lessonContent.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Reset video error state and scroll to top when lesson changes
  useEffect(() => {
    setVideoError(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Double-ensure scroll after paint (some browsers need a frame to settle)
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, [lessonId]);

  // -- Guard states --
  if (courseLoading || lessonsLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="text-center"><div className="relative w-16 h-16 mx-auto mb-4"><div className="absolute inset-0 rounded-full border-4 border-purple-100" /><div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" /><BookOpen className="absolute inset-0 m-auto w-7 h-7 text-purple-600" /></div><p className="text-gray-700 font-semibold">{t('learn.loadingCourse')}</p></div>
    </div>
  );

  if ((courseError && !courseLoading) || (!course && !courseLoading)) return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-red-50"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" /><h2 className="text-xl font-bold text-gray-900 mb-2">{t('learn.courseNotFound')}</h2><Link to={createPageUrl("Courses")} onClick={() => window.scrollTo(0, 0)}><Button className="mt-4 bg-purple-600 hover:bg-purple-700 rounded-xl">{t('learn.backToCourses')}</Button></Link></CardContent></Card></div>
  );

  if (course && !enrollment) return (
    <div className="min-h-screen flex items-center justify-center p-4"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><GraduationCap className="w-12 h-12 text-purple-300 mx-auto mb-4" /><h2 className="text-xl font-bold mb-2">Inscription requise</h2><Link to={createPageUrl("CourseDetail") + `?id=${courseId}`} onClick={() => window.scrollTo(0, 0)}><Button className="mt-4 bg-purple-600 hover:bg-purple-700 rounded-xl">Voir le cours</Button></Link></CardContent></Card></div>
  );

  if (lessons.length === 0) return (
    <div className="min-h-screen flex items-center justify-center p-4"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" /><h2 className="text-xl font-bold mb-2">{t('learn.noLessons')}</h2><Link to={createPageUrl("Courses")} onClick={() => window.scrollTo(0, 0)}><Button className="mt-4 bg-purple-600 hover:bg-purple-700 rounded-xl">{t('learn.backToCourses')}</Button></Link></CardContent></Card></div>
  );

  if (lessonLoading || !currentLesson) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50"><div className="text-center"><div className="relative w-12 h-12 mx-auto mb-3"><div className="absolute inset-0 rounded-full border-4 border-purple-100" /><div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" /></div><p className="text-gray-600">{t('learn.loadingLesson')}</p></div></div>
  );

  if (!canAccess) return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-amber-50"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><Award className="w-12 h-12 text-amber-500 mx-auto mb-4" /><h2 className="text-xl font-bold mb-2">{t('learn.accessRestricted')}</h2><p className="text-gray-500 mb-6">{t('learn.accessRestrictedDesc')}</p><Link to={createPageUrl("Pricing")} onClick={() => window.scrollTo(0, 0)}><Button className="w-full bg-amber-500 hover:bg-amber-600 rounded-xl h-11">{t('learn.discoverSubscriptions')}</Button></Link></CardContent></Card></div>
  );

  const hasContent = lessonContent.trim().length > 0;
  const hasVideo = !!embedUrl;

  return (
    <div className="min-h-screen bg-gray-50/80 flex flex-col lg:flex-row overflow-x-hidden">
      {/* Mobile sidebar toggle */}
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden fixed top-[72px] left-3 z-30 w-10 h-10 rounded-xl bg-white shadow-lg border border-gray-200 flex items-center justify-center">
        {sidebarOpen ? <PanelLeftClose className="w-5 h-5 text-gray-600" /> : <PanelLeftOpen className="w-5 h-5 text-gray-600" />}
      </button>

      {sidebarOpen && <div className="lg:hidden fixed inset-0 bg-black/30 z-20 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />}

      {/* ===== SIDEBAR ===== */}
      <aside className={`fixed lg:sticky top-0 left-0 z-20 h-screen bg-white border-r border-gray-100 overflow-y-auto transition-all duration-300 shadow-lg lg:shadow-none ${sidebarOpen ? 'w-[300px] lg:w-72 translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0 lg:min-w-0 lg:overflow-hidden lg:border-0 lg:p-0'}`}>
        {/* Sidebar header with course info */}
        <div className="sticky top-0 z-10 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white">
          <div className="p-4 pb-3">
            <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`} className="block group" onClick={() => window.scrollTo(0, 0)}>
              <div className="flex items-center gap-2 text-purple-200 text-[10px] font-medium mb-1 group-hover:text-white transition-colors">
                <ArrowLeft className="w-3 h-3" />
                Retour au cours
              </div>
              <h2 className="text-sm font-bold group-hover:underline line-clamp-2 leading-snug">{course.title}</h2>
            </Link>
          </div>
          {/* Course progress */}
          <div className="mx-4 mb-4 bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-purple-200 font-medium">Progression du cours</span>
              <span className="text-lg font-extrabold tabular-nums">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #34d399, #10b981, #059669)' }}
                initial={false}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-purple-200">{completedCount} / {lessons.length} leçons</span>
              {progressPercentage === 100 && <Badge className="bg-emerald-500/30 text-emerald-200 border-0 text-[9px] px-1.5 py-0">Terminé !</Badge>}
            </div>
          </div>
        </div>

        {/* Lesson list */}
        <div className="p-2 pb-8">
          {Object.entries(lessonsByModule).sort(([a], [b]) => Number(a) - Number(b)).map(([moduleNum, mLessons]) => (
            <div key={moduleNum} className="mb-2">
              <div className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <div className="w-5 h-5 rounded-md bg-purple-100 flex items-center justify-center">
                  <BookOpen className="w-3 h-3 text-purple-500" />
                </div>
                <span>Module {moduleNum}</span>
              </div>
              <div className="space-y-0.5">
                {mLessons.map((lesson, idx) => {
                  const isCurrent = lesson.id === lessonId;
                  const done = enrollment?.completed_lessons?.includes(lesson.id);
                  return (
                    <button key={lesson.id} onClick={() => handleNav(lesson.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all text-sm group ${
                        isCurrent ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-purple-500/20'
                        : done ? 'bg-emerald-50/80 hover:bg-emerald-100/80'
                        : 'hover:bg-gray-50'
                      }`}>
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isCurrent ? 'bg-white/20'
                          : done ? 'bg-emerald-100'
                          : 'bg-gray-100 group-hover:bg-purple-100'
                        }`}>
                          {done && !isCurrent ? <CheckCircle className="w-4 h-4 text-emerald-600" /> :
                            lesson.video_url ? <Play className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-gray-400 group-hover:text-purple-500'}`} /> :
                            <FileText className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-gray-400 group-hover:text-purple-500'}`} />
                          }
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`text-[13px] font-medium truncate block leading-snug ${
                            isCurrent ? 'text-white' : done ? 'text-gray-700' : 'text-gray-600'
                          }`}>
                            {lesson.title || `Leçon ${idx + 1}`}
                          </span>
                          {lesson.duration_minutes && (
                            <span className={`text-[10px] flex items-center gap-0.5 mt-0.5 ${isCurrent ? 'text-purple-200' : 'text-gray-400'}`}>
                              <Clock className="w-2.5 h-2.5" />{lesson.duration_minutes} min
                            </span>
                          )}
                        </div>
                        {isCurrent && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 min-w-0" ref={contentRef}>
        {/* Lesson hero header */}
        <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
          </div>

          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-8 relative">
            <div className="flex items-center justify-between mb-4">
              <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`} onClick={() => window.scrollTo(0, 0)}>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10 -ml-2 gap-1.5">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Retour</span>
                </Button>
              </Link>
              <div className="flex items-center gap-3 text-xs text-purple-200">
                {lessonContent.trim() && (
                  <>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />~{readingTime} min</span>
                    {hasVideo && (
                      <>
                        <span className="text-purple-400">·</span>
                        <span className="flex items-center gap-1"><Video className="w-3.5 h-3.5" />Vidéo</span>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <Badge className="bg-white/15 text-white border-0 text-xs font-semibold px-2.5 py-0.5 backdrop-blur-sm">
                Module {currentLesson.module_number || 1}
              </Badge>
              <Badge className="bg-white/10 text-white/80 border-0 text-xs px-2.5 py-0.5">
                Leçon {currentIndex + 1}/{lessons.length}
              </Badge>
              {currentLesson.duration_minutes && (
                <Badge className="bg-white/10 text-white/80 border-0 text-xs gap-1 px-2.5 py-0.5">
                  <Clock className="w-3 h-3" />{currentLesson.duration_minutes} min
                </Badge>
              )}
              {isCompleted && (
                <Badge className="bg-emerald-500/20 text-emerald-200 border-0 text-xs gap-1 px-2.5 py-0.5">
                  <CheckCircle className="w-3 h-3" />Terminée
                </Badge>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
              {currentLesson.title || t('learn.lessonWithoutTitle')}
            </h1>
            {currentLesson.description && (
              <p className="text-base text-purple-200 mt-2 leading-relaxed max-w-2xl">{currentLesson.description}</p>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-6 lg:py-10">
          {/* ===== VIDEO PLAYER ===== */}
          {hasVideo && (
            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-black">
                {videoError ? (
                  <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-purple-950 text-white">
                    <Video className="w-12 h-12 text-purple-400 mb-3 opacity-60" />
                    <p className="text-lg font-semibold text-purple-200">Vidéo à venir</p>
                    <p className="text-sm text-slate-400 mt-1">Cette vidéo sera disponible prochainement</p>
                  </div>
                ) : (
                  <div className="aspect-video relative">
                    <iframe
                      src={embedUrl}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      loading="lazy"
                      title={currentLesson.title}
                      onError={() => setVideoError(true)}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ===== LESSON CONTENT ===== */}
          {hasContent && (
            <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden mb-6">
              <CardContent className="p-0">
                <div className="px-6 sm:px-10 lg:px-14 py-8 sm:py-10">
                  <LessonContentRenderer content={lessonContent} />
                </div>
              </CardContent>
            </Card>
          )}

          {/* ===== LIENS UTILES CONTEXTUELS ===== */}
          {(hasContent || hasVideo) && (
            <div className="mb-6">
              <SmartLinksCard
                lessonTitle={currentLesson?.title}
                courseTitle={course?.title}
              />
            </div>
          )}

          {/* ===== QCM INTÉGRÉ ===== */}
          {hasContent && lessonContent.trim().length > 200 && (
            <div className="mb-8">
              <LessonQuiz lesson={currentLesson} courseName={course?.title || ''} />
            </div>
          )}

          {/* No content at all */}
          {!hasContent && !hasVideo && (
            <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden mb-8">
              <CardContent className="p-16 text-center">
                <BookOpen className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400">{t('learn.contentInPreparation')}</h3>
              </CardContent>
            </Card>
          )}

          {/* ===== LESSON NAVIGATION ===== */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8">
            <Button
              variant="outline"
              onClick={() => prevLesson && handleNav(prevLesson.id)}
              disabled={!prevLesson}
              className="h-12 rounded-xl gap-2 text-gray-600 border-gray-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="truncate max-w-[150px]">{prevLesson ? prevLesson.title : t('learn.previousLesson')}</span>
            </Button>

            <div className="flex gap-3 justify-center">
              {!isCompleted ? (
                <Button
                  onClick={() => markCompleteMutation.mutate()}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold h-12 rounded-xl px-6 gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:shadow-xl"
                  disabled={markCompleteMutation.isPending}
                >
                  {markCompleteMutation.isPending
                    ? <><Loader2 className="w-4 h-4 animate-spin" />{t('learn.saving')}</>
                    : <><CheckCircle className="w-5 h-5" />{t('learn.markAsCompleted')}</>
                  }
                </Button>
              ) : (
                <div className="flex items-center gap-2 px-5 h-12 rounded-xl bg-emerald-50 text-emerald-700 font-semibold text-sm border border-emerald-200">
                  <CheckCircle className="w-5 h-5" />
                  Leçon terminée
                </div>
              )}
            </div>

            <Button
              onClick={() => nextLesson && handleNav(nextLesson.id)}
              disabled={!nextLesson}
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold h-12 rounded-xl gap-2 shadow-lg shadow-purple-500/20 transition-all hover:shadow-xl"
            >
              <span className="truncate max-w-[150px]">{nextLesson ? nextLesson.title : t('learn.nextLesson')}</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* ===== COURSE COMPLETION CARD ===== */}
          {progressPercentage === 100 && !enrollment.certificate_issued && (
            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{t('learn.congratulations')}</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">{t('learn.downloadCertificate')}</p>
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold h-13 px-8 rounded-xl gap-2 shadow-lg">
                  <Award className="w-5 h-5" />{t('learn.downloadMyCertificate')}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* AI Assistant */}
      <LessonAssistant
        currentLesson={currentLesson}
        courseName={course?.title || ''}
        allLessons={lessons}
        lessonIndex={currentIndex}
      />
    </div>
  );
}
