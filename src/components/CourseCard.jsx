import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, BookOpen, Zap } from "lucide-react";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CourseCard({ course }) {
  const { t } = useLanguage();
  
  const categoryLabels = {
    preparation_academique: t('courses.categories.preparation_academique'),
    integration_administrative: t('courses.categories.integration_administrative'),
    culture_codes_sociaux: t('courses.categories.culture_codes_sociaux'),
    insertion_professionnelle: t('courses.categories.insertion_professionnelle'),
    formations_professionnelles: t('courses.categories.formations_professionnelles')
  };

  const levelLabels = {
    debutant: t('courses.levels.debutant'),
    intermediaire: t('courses.levels.intermediaire'),
    avance: t('courses.levels.avance')
  };

  const levelColors = {
    debutant: "bg-green-500 text-white",
    intermediaire: "bg-yellow-500 text-white",
    avance: "bg-red-500 text-white"
  };

  const categoryIcons = {
    preparation_academique: "📚",
    integration_administrative: "📋",
    culture_codes_sociaux: "🎭",
    insertion_professionnelle: "💼",
    formations_professionnelles: "🚀"
  };

  return (
    <Link to={createPageUrl("CourseDetail") + `?id=${course.id}`}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="h-full hover:shadow-2xl transition-all duration-500 cursor-pointer group border-0 overflow-hidden bg-white">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            <img
              src={course.thumbnail_url || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"}
              alt={course.title}
              className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
              <Badge className={`${levelColors[course.level]} shadow-xl text-xs font-bold px-3 py-1`}>
                {levelLabels[course.level]}
              </Badge>
              {course.is_premium ? (
                <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold shadow-xl text-xs px-3 py-1">
                  ⭐ {t('common.premium').toUpperCase()}
                </Badge>
              ) : (
                <Badge className="bg-green-500 text-white font-bold shadow-xl text-xs px-3 py-1">
                  ✓ {t('common.free').toUpperCase()}
                </Badge>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{categoryIcons[course.category]}</span>
                <Badge variant="outline" className="text-xs font-medium border-white/60 text-white bg-white/10 backdrop-blur-md">
                  {categoryLabels[course.category]}
                </Badge>
              </div>
              <h3 className="text-xl font-bold line-clamp-2 leading-tight drop-shadow-2xl">
                {course.title}
              </h3>
            </div>
          </div>

          <CardContent className="p-5 space-y-4">
            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed h-10">
              {course.short_description}
            </p>

            <div className="flex items-center gap-2">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 px-3 py-2 rounded-xl flex-1">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span className="text-sm font-bold text-gray-900">{course.duration_hours}h</span>
              </div>
              <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-2 rounded-xl flex-1">
                <BookOpen className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span className="text-sm font-bold text-gray-900">{course.lessons_count || 0} {t('common.lessons')}</span>
              </div>
            </div>

            {course.rating > 0 && (
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(course.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-900">{course.rating.toFixed(1)}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}