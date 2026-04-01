import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, ArrowRight } from "lucide-react";
import { createPageUrl } from "../utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CourseCard({ course }) {
  const { t } = useLanguage();

  const categoryLabels = {
    preparation_academique: t('courses.categories.preparation_academique'),
    integration_administrative: t('courses.categories.integration_administrative'),
    culture_codes_sociaux: t('courses.categories.culture_codes_sociaux'),
    insertion_professionnelle: t('courses.categories.insertion_professionnelle'),
    formations_professionnelles: t('courses.categories.formations_professionnelles'),
    logement: t('courses.categories.logement'),
    budget_finances: t('courses.categories.budget_finances'),
    sante: t('courses.categories.sante'),
    administration: t('courses.categories.administration'),
    transport: t('courses.categories.transport'),
    travail: t('courses.categories.travail')
  };

  const levelLabels = {
    debutant: t('courses.levels.debutant'),
    intermediaire: t('courses.levels.intermediaire'),
    avance: t('courses.levels.avance')
  };

  const levelStyles = {
    debutant: "bg-emerald-50 text-emerald-700 border-emerald-200",
    intermediaire: "bg-amber-50 text-amber-700 border-amber-200",
    avance: "bg-rose-50 text-rose-700 border-rose-200"
  };

  return (
    <Link to={createPageUrl("CourseDetail") + `?id=${course.id}`} onClick={() => window.scrollTo(0, 0)} className="block group">
      <Card className="h-full overflow-hidden border border-gray-200 bg-white rounded-xl transition-all duration-200 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={course.thumbnail_url || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"}
            alt={course.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

          {/* Premium/Free badge */}
          <div className="absolute top-3 right-3">
            {course.is_premium ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
                Premium
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-white shadow-sm">
                Gratuit
              </span>
            )}
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 drop-shadow-md">
              {course.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Category + Level */}
          <div className="flex items-center gap-2 flex-wrap">
            {categoryLabels[course.category] && (
              <span className="text-[11px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                {categoryLabels[course.category]}
              </span>
            )}
            <Badge variant="outline" className={`text-[10px] font-medium border px-1.5 py-0 h-5 ${levelStyles[course.level] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
              {levelLabels[course.level]}
            </Badge>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed min-h-[2rem]">
            {course.short_description}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {course.duration_hours}h
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                {course.lessons_count || 0} {t('common.lessons')}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
