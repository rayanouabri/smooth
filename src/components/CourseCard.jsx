import React from "react";
import { Link } from "react-router-dom";
import { Clock, BookOpen, ArrowRight, Lock } from "lucide-react";
import { createPageUrl } from "../utils";
import { useLanguage } from "@/contexts/LanguageContext";

// Fallback images par catégorie (Unsplash thématiques)
const categoryFallbacks = {
  logement:                   "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  budget_finances:            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  sante:                      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
  culture_codes_sociaux:      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
  insertion_professionnelle:  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  integration_administrative: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=800&q=80",
  administration:             "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  transport:                  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80",
  travail:                    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  preparation_academique:     "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  formations_professionnelles:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  default:                    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
};

// Couleurs et icônes par catégorie
const categoryConfig = {
  logement:                  { color: "from-orange-500 to-amber-500",   bg: "bg-orange-50",   text: "text-orange-700",   icon: "🏠" },
  budget_finances:           { color: "from-emerald-500 to-teal-500",   bg: "bg-emerald-50",  text: "text-emerald-700",  icon: "💶" },
  sante:                     { color: "from-red-500 to-rose-500",        bg: "bg-red-50",      text: "text-red-700",      icon: "❤️" },
  culture_codes_sociaux:     { color: "from-purple-500 to-violet-500",  bg: "bg-purple-50",   text: "text-purple-700",   icon: "🎭" },
  insertion_professionnelle: { color: "from-blue-500 to-indigo-500",    bg: "bg-blue-50",     text: "text-blue-700",     icon: "💼" },
  integration_administrative:{ color: "from-cyan-500 to-sky-500",       bg: "bg-cyan-50",     text: "text-cyan-700",     icon: "📋" },
  administration:            { color: "from-slate-500 to-gray-600",     bg: "bg-slate-50",    text: "text-slate-700",    icon: "🏛️" },
  transport:                 { color: "from-yellow-500 to-orange-400",  bg: "bg-yellow-50",   text: "text-yellow-700",   icon: "🚇" },
  travail:                   { color: "from-green-500 to-emerald-600",  bg: "bg-green-50",    text: "text-green-700",    icon: "🔧" },
  preparation_academique:    { color: "from-indigo-500 to-blue-600",    bg: "bg-indigo-50",   text: "text-indigo-700",   icon: "🎓" },
  formations_professionnelles:{ color: "from-pink-500 to-rose-600",    bg: "bg-pink-50",     text: "text-pink-700",     icon: "📚" },
};

const levelConfig = {
  debutant:     { label: "Débutant",      dot: "bg-emerald-400", text: "text-emerald-700", bg: "bg-emerald-50" },
  intermediaire:{ label: "Intermédiaire", dot: "bg-amber-400",   text: "text-amber-700",   bg: "bg-amber-50"   },
  avance:       { label: "Avancé",        dot: "bg-rose-400",    text: "text-rose-700",    bg: "bg-rose-50"    },
};

export default function CourseCard({ course }) {
  const { t } = useLanguage();
  const cat = categoryConfig[course.category] || { color: "from-indigo-500 to-purple-500", bg: "bg-indigo-50", text: "text-indigo-700", icon: "📖" };
  const lvl = levelConfig[course.level] || { label: course.level, dot: "bg-gray-400", text: "text-gray-700", bg: "bg-gray-50" };

  const categoryLabels = {
    logement: t('courses.categories.logement'),
    budget_finances: t('courses.categories.budget_finances'),
    sante: t('courses.categories.sante'),
    culture_codes_sociaux: t('courses.categories.culture_codes_sociaux'),
    insertion_professionnelle: t('courses.categories.insertion_professionnelle'),
    integration_administrative: t('courses.categories.integration_administrative'),
    administration: t('courses.categories.administration'),
    transport: t('courses.categories.transport'),
    travail: t('courses.categories.travail'),
    preparation_academique: t('courses.categories.preparation_academique'),
    formations_professionnelles: t('courses.categories.formations_professionnelles'),
  };

  return (
    <Link
      to={createPageUrl("CourseDetail") + `?id=${course.id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="block group h-full"
    >
      <div className="relative h-full flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">

        {/* ── Image zone ── */}
        <div className="relative h-44 overflow-hidden flex-shrink-0">
          <img
            src={course.thumbnail_url || categoryFallbacks[course.category] || categoryFallbacks.default}
            alt={course.title}
            onError={(e) => { e.target.src = categoryFallbacks[course.category] || categoryFallbacks.default; }}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category pill — top left */}
          <div className="absolute top-3 left-3">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gradient-to-r ${cat.color} text-white shadow-md`}>
              <span>{cat.icon}</span>
              {categoryLabels[course.category] || course.category}
            </span>
          </div>

          {/* Premium / Gratuit badge — top right */}
          <div className="absolute top-3 right-3">
            {course.is_premium ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md">
                <Lock className="w-2.5 h-2.5" /> Premium
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md">
                ✓ Gratuit
              </span>
            )}
          </div>

          {/* Title over image */}
          <div className="absolute bottom-0 inset-x-0 px-4 pb-3">
            <h3 className="text-white font-bold text-sm leading-tight line-clamp-2 drop-shadow">
              {course.title}
            </h3>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-col flex-1 p-4 gap-3">

          {/* Level badge */}
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${lvl.bg} ${lvl.text}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${lvl.dot}`}></span>
              {lvl.label}
            </span>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 flex-1">
            {course.short_description || "Découvrez ce cours et améliorez vos compétences pour votre vie en France."}
          </p>

          {/* Divider + Meta */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-3 text-[11px] text-gray-400 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {course.duration_hours}h
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3 h-3" />
                {course.lessons_count || 0} leçons
              </span>
            </div>
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-50 group-hover:bg-indigo-600 transition-colors duration-200">
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white transition-colors duration-200" />
            </div>
          </div>
        </div>

        {/* ── Bottom accent bar ── */}
        <div className={`h-1 w-full bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
    </Link>
  );
}
