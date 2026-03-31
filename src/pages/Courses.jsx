import React, { useState } from "react";
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
import { Search, Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import CourseCard from "../components/CourseCard";
import CourseCardSkeleton from "../components/CourseCardSkeleton";
import ChatBot from "../components/ChatBot";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const { t } = useLanguage();

  // Fetch courses only (no N+1 lesson queries - major perf improvement)
  const { data: courses = [], isLoading, error: coursesError } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      try {
        const result = await Course.filter({ is_published: true }, '-created_date');

        if (!result || result.length === 0) {
          return [];
        }

        // Build search index from course metadata only (NOT lesson content)
        // This avoids N+1 queries (was fetching all lessons for each course)
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
    staleTime: 10 * 60 * 1000, // Cache 10 minutes (courses rarely change)
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

  const filteredCourses = courses.filter(course => {
    // Recherche améliorée : chercher dans tous les champs pertinents
    let matchesSearch = true;
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      // Mots-clés de correspondance (pour liens sémantiques comme "logement" -> "Visale")
      const semanticMatches = {
        'logement': ['visale', 'visa', 'caution', 'garantie', 'apartement', 'appartement', 'location', 'loyer', 'bail', 'logement', 'hébergement', 'colocation'],
        'loger': ['logement', 'visale', 'caution', 'garantie', 'location', 'loyer', 'bail'],
        'habitation': ['logement', 'visale', 'caution', 'garantie', 'location', 'loyer', 'bail', 'appartement'],
        'maison': ['logement', 'visale', 'caution', 'garantie', 'location', 'loyer', 'bail'],
        'santé': ['cpam', 'sécu', 'sécurité sociale', 'mutuelle', 'carte vitale', 'médecin', 'remboursement'],
        'sante': ['cpam', 'sécu', 'sécurité sociale', 'mutuelle', 'carte vitale', 'médecin', 'remboursement'],
        'argent': ['caf', 'aide', 'allocation', 'bourse', 'budget', 'banque', 'compte', 'prélèvement'],
        'travail': ['emploi', 'job', 'cdi', 'cdd', 'alternance', 'stage', 'cv', 'entretien', 'salaire'],
        'université': ['campus france', 'études', 'inscription', 'université', 'formation', 'diplôme'],
        'universite': ['campus france', 'études', 'inscription', 'université', 'formation', 'diplôme'],
        'études': ['campus france', 'université', 'formation', 'diplôme', 'inscription'],
        'etudes': ['campus france', 'université', 'formation', 'diplôme', 'inscription']
      };

      // Recherche directe dans le texte indexé
      const searchableText = course.searchable_text || [
        course.title,
        course.short_description,
        course.description,
        Array.isArray(course.objectives) ? course.objectives.join(' ') : '',
        Array.isArray(course.prerequisites) ? course.prerequisites.join(' ') : ''
      ].filter(Boolean).join(' ').toLowerCase();

      const directMatch = searchableText.includes(searchLower);

      // Recherche sémantique : si le terme de recherche correspond à un mot-clé, chercher aussi les termes liés
      let semanticMatch = false;
      for (const [keyword, relatedTerms] of Object.entries(semanticMatches)) {
        if (searchLower.includes(keyword)) {
          semanticMatch = relatedTerms.some(term => searchableText.includes(term));
          if (semanticMatch) break;
        }
      }

      matchesSearch = directMatch || semanticMatch;
    }

    const normalizedCategory = (course.category || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const matchesCategory = categoryFilter === "all" || normalizedCategory === categoryFilter;
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const freeCourses = filteredCourses.filter(c => !c.is_premium);
  const premiumCourses = filteredCourses.filter(c => c.is_premium);

  // Ordre des catégories : toutes les 11 catégories incluses
  const categoryOrder = [
    'logement',
    'budget_finances',
    'sante',
    'culture_codes_sociaux',
    'insertion_professionnelle',
    'integration_administrative',
    'administration',
    'transport',
    'travail',
    'preparation_academique',
    'formations_professionnelles'
  ];

  const coursesByCategory = categoryOrder.reduce((acc, category) => {
    acc[category] = filteredCourses.filter(c =>
      (c.category || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '') === category
    );
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section - Clean & Modern */}
      <div className="relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-indigo-600 bg-indigo-50">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                {isLoading ? "Chargement..." : `${courses.length}+ cours disponibles`}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {t('courses.title')}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t('courses.subtitle')}
            </p>

            {!isLoading && (
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-bold text-gray-900">{courses.length}</div>
                  <div className="text-sm text-gray-600">Cours<br />au total</div>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-bold text-green-600">{freeCourses.length}</div>
                  <div className="text-sm text-gray-600">Cours<br />gratuits</div>
                </div>
                <div className="w-px bg-gray-200"></div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl font-bold text-indigo-600">{premiumCourses.length}</div>
                  <div className="text-sm text-gray-600">Premium<br />inclus</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Filters - Clean Card Style */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Filter Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {/* Search Input */}
              <div className="relative sm:col-span-3 lg:col-span-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder={t('courses.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11 border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg bg-white text-base transition-colors"
                />
              </div>

              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="h-11 border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg bg-white text-base transition-colors">
                  <Filter className="w-4 h-4 mr-2 text-gray-500" />
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(categoryLabels).map(([value, label]) => (
                    <SelectItem key={value} value={value} className="text-base">
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Level Filter */}
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="h-11 border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-lg bg-white text-base transition-colors">
                  <SelectValue placeholder="Niveau" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(levelLabels).map(([value, label]) => (
                    <SelectItem key={value} value={value} className="text-base">
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Filter Info & Reset */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {isLoading ? (
                <div className="flex items-center gap-3">
                  <div className="h-5 w-32 bg-gray-200 animate-pulse rounded"></div>
                </div>
              ) : (
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm text-gray-600">
                    <span className="font-bold text-gray-900">{filteredCourses.length}</span> cours trouvés
                  </span>
                  {freeCourses.length > 0 && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                      {freeCourses.length} gratuit{freeCourses.length > 1 ? 's' : ''}
                    </Badge>
                  )}
                  {premiumCourses.length > 0 && (
                    <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200 text-xs">
                      {premiumCourses.length} premium
                    </Badge>
                  )}
                </div>
              )}

              {(categoryFilter !== "all" || levelFilter !== "all" || searchTerm) && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg text-sm h-9 px-3 gap-2"
                  onClick={() => {
                    setSearchTerm("");
                    setCategoryFilter("all");
                    setLevelFilter("all");
                  }}
                >
                  <X className="w-4 h-4" />
                  Réinitialiser
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {coursesError ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Erreur de chargement</h3>
            <p className="text-gray-600 mb-6">
              {coursesError.message || 'Une erreur est survenue lors du chargement des cours.'}
            </p>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6"
              onClick={() => window.location.reload()}
            >
              Recharger la page
            </Button>
          </div>
        ) : isLoading ? (
          <div>
            {/* Skeleton Loader */}
            <div className="mb-12">
              <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse mb-8"></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <CourseCardSkeleton key={index} />
                ))}
              </div>
            </div>
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-2 text-indigo-600">
                <div className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-gray-200 border-t-indigo-600"></div>
                <p className="text-sm font-medium">Chargement des cours...</p>
              </div>
            </div>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Aucun cours trouvé</h3>
            <p className="text-gray-600 mb-8">
              Essayez de modifier vos critères de recherche
            </p>
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6"
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
                setLevelFilter("all");
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        ) : categoryFilter === "all" && !searchTerm ? (
          // Display by category
          Object.entries(coursesByCategory).map(([category, categoryCourses], catIndex) => (
            categoryCourses.length > 0 && (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="mb-16"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 w-1 bg-indigo-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {categoryLabels[category]}
                  </h2>
                  <Badge variant="secondary" className="ml-auto text-gray-600 bg-gray-100 text-sm font-normal">
                    {categoryCourses.length} cours
                  </Badge>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryCourses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <CourseCard course={course} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          ))
        ) : (
          // Display filtered results
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Résultats de recherche
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
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
