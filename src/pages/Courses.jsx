import React, { useState, useMemo } from "react";
import { Course } from "@/api/entities";
import { useQuery } from "@tanstack/react-query";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Search, SlidersHorizontal, X, GraduationCap, BookOpen, TrendingUp, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "../components/CourseCard";
import CourseCardSkeleton from "../components/CourseCardSkeleton";
import ChatBot from "../components/ChatBot";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const { t } = useLanguage();

  const { data: courses = [], isLoading, error: coursesError } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      try {
        const result = await Course.filter({ is_published: true }, '-created_date');
        if (!result || result.length === 0) return [];
        return result.map(course => ({
          ...course,
          searchable_text: [
            course.title,
            course.short_description,
            course.description,
            Array.isArray(course.objectives) ? course.objectives.join(' ') : '',
            Array.isArray(course.prerequisites) ? course.prerequisites.join(' ') : ''
          ].filter(Boolean).join(' ').toLowerCase()
        }));
      } catch (error) {
        console.error("Erreur lors du chargement des cours:", error);
        return [];
      }
    },
    staleTime: 10 * 60 * 1000,
    retry: 2,
    retryDelay: 1000,
  });

  const categoryLabels = {
    all: t('courses.categories.all'),
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
    formations_professionnelles: t('courses.categories.formations_professionnelles')
  };

  const levelLabels = {
    all: t('courses.levels.all'),
    debutant: t('courses.levels.debutant'),
    intermediaire: t('courses.levels.intermediaire'),
    avance: t('courses.levels.avance')
  };

  const semanticMatches = {
    'logement': ['visale', 'visa', 'caution', 'garantie', 'apartement', 'appartement', 'location', 'loyer', 'bail', 'logement', 'hébergement', 'colocation'],
    'loger': ['logement', 'visale', 'caution', 'garantie', 'location', 'loyer', 'bail'],
    'habitation': ['logement', 'visale', 'caution', 'garantie', 'location', 'loyer', 'bail', 'appartement'],
    'santé': ['cpam', 'sécu', 'sécurité sociale', 'mutuelle', 'carte vitale', 'médecin', 'remboursement'],
    'sante': ['cpam', 'sécu', 'sécurité sociale', 'mutuelle', 'carte vitale', 'médecin', 'remboursement'],
    'argent': ['caf', 'aide', 'allocation', 'bourse', 'budget', 'banque', 'compte', 'prélèvement'],
    'travail': ['emploi', 'job', 'cdi', 'cdd', 'alternance', 'stage', 'cv', 'entretien', 'salaire'],
    'université': ['campus france', 'études', 'inscription', 'université', 'formation', 'diplôme'],
    'universite': ['campus france', 'études', 'inscription', 'université', 'formation', 'diplôme'],
    'études': ['campus france', 'université', 'formation', 'diplôme', 'inscription'],
    'etudes': ['campus france', 'université', 'formation', 'diplôme', 'inscription']
  };

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      let matchesSearch = true;
      if (searchTerm.trim()) {
        const searchLower = searchTerm.toLowerCase().trim();
        const searchableText = course.searchable_text || '';
        const directMatch = searchableText.includes(searchLower);
        let semanticMatch = false;
        for (const [keyword, relatedTerms] of Object.entries(semanticMatches)) {
          if (searchLower.includes(keyword)) {
            semanticMatch = relatedTerms.some(term => searchableText.includes(term));
            if (semanticMatch) break;
          }
        }
        matchesSearch = directMatch || semanticMatch;
      }
      const normalizedCategory = (course.category || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const matchesCategory = categoryFilter === "all" || normalizedCategory === categoryFilter;
      const matchesLevel = levelFilter === "all" || course.level === levelFilter;
      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [courses, searchTerm, categoryFilter, levelFilter]);

  const freeCourses = filteredCourses.filter(c => !c.is_premium);
  const premiumCourses = filteredCourses.filter(c => c.is_premium);
  const hasActiveFilters = categoryFilter !== "all" || levelFilter !== "all" || searchTerm;

  const categoryOrder = [
    'logement', 'budget_finances', 'sante', 'culture_codes_sociaux',
    'insertion_professionnelle', 'integration_administrative', 'administration',
    'transport', 'travail', 'preparation_academique', 'formations_professionnelles'
  ];

  const coursesByCategory = useMemo(() => {
    return categoryOrder.reduce((acc, category) => {
      acc[category] = filteredCourses.filter(c =>
        (c.category || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === category
      );
      return acc;
    }, {});
  }, [filteredCourses]);

  const resetFilters = () => {
    setSearchTerm("");
    setCategoryFilter("all");
    setLevelFilter("all");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Cours en ligne pour étudiants internationaux"
        description="Découvrez tous nos cours en ligne pour réussir votre intégration en France : français, culture française, administration, emploi, logement et bien plus encore."
        canonical="/courses"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Cours FrancePrepAcademy",
          "description": "Catalogue de cours en ligne pour étudiants internationaux en France",
          "url": "https://franceprepacademy.fr/courses"
        }}
      />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
              {t('courses.title')}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
              {t('courses.subtitle')}
            </p>

            {!isLoading && (
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{courses.length}</div>
                    <div className="text-xs text-slate-400">Cours</div>
                  </div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{freeCourses.length}</div>
                    <div className="text-xs text-slate-400">Gratuits</div>
                  </div>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{premiumCourses.length}</div>
                    <div className="text-xs text-slate-400">Premium</div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={t('courses.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-10 border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg bg-gray-50 text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className={`h-10 px-3 gap-2 rounded-lg border-gray-200 ${showFilters ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : ''}`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:inline">Filtres</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              )}
            </Button>

            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={resetFilters} className="h-10 px-3 text-gray-500 hover:text-gray-700">
                <X className="w-4 h-4 mr-1" /> Effacer
              </Button>
            )}
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="h-10 border-gray-200 rounded-lg bg-gray-50 text-sm">
                      <SelectValue placeholder="Catégorie" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(categoryLabels).map(([value, label]) => (
                        <SelectItem key={value} value={value}>{label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={levelFilter} onValueChange={setLevelFilter}>
                    <SelectTrigger className="h-10 border-gray-200 rounded-lg bg-gray-50 text-sm">
                      <SelectValue placeholder="Niveau" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(levelLabels).map(([value, label]) => (
                        <SelectItem key={value} value={value}>{label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results count */}
          {!isLoading && (
            <div className="flex items-center gap-2 pt-2">
              <span className="text-xs text-gray-500">
                <span className="font-semibold text-gray-900">{filteredCourses.length}</span> cours trouvés
              </span>
              {hasActiveFilters && (
                <>
                  {categoryFilter !== "all" && (
                    <Badge variant="secondary" className="text-xs h-5 px-2 bg-indigo-50 text-indigo-700 border-0">
                      {categoryLabels[categoryFilter]}
                    </Badge>
                  )}
                  {levelFilter !== "all" && (
                    <Badge variant="secondary" className="text-xs h-5 px-2 bg-purple-50 text-purple-700 border-0">
                      {levelLabels[levelFilter]}
                    </Badge>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {coursesError ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Erreur de chargement</h3>
            <p className="text-sm text-gray-500 mb-4">Impossible de charger les cours</p>
            <Button size="sm" onClick={() => window.location.reload()} className="bg-indigo-600 hover:bg-indigo-700">
              Réessayer
            </Button>
          </div>
        ) : isLoading ? (
          <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {[...Array(8)].map((_, i) => (
                <CourseCardSkeleton key={i} />
              ))}
            </div>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">Aucun cours trouvé</h3>
            <p className="text-sm text-gray-500 mb-4">Essayez d'autres critères de recherche</p>
            <Button size="sm" variant="outline" onClick={resetFilters}>
              Réinitialiser les filtres
            </Button>
          </div>
        ) : categoryFilter === "all" && !searchTerm ? (
          <div className="space-y-12">
            {categoryOrder.map((category) => {
              const categoryCourses = coursesByCategory[category];
              if (!categoryCourses || categoryCourses.length === 0) return null;
              return (
                <motion.section
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-6 bg-indigo-600 rounded-full"></div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {categoryLabels[category]}
                      </h2>
                      <span className="text-xs font-medium text-gray-400 bg-gray-100 rounded-full px-2.5 py-0.5">
                        {categoryCourses.length}
                      </span>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {categoryCourses.map((course, index) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.04, duration: 0.3 }}
                      >
                        <CourseCard course={course} />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-5">
              Résultats {searchTerm && <span className="text-gray-400 font-normal">pour "{searchTerm}"</span>}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.3 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      <ChatBot />
    </div>
  );
}
