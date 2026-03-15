import React, { useState } from "react";
import { Course, Lesson } from "@/api/entities";
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
import { Search, Filter, TrendingUp, Star, Sparkles } from "lucide-react";
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

  const { data: courses = [], isLoading, error: coursesError } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      try {
        console.log('Chargement des cours...');
        const result = await Course.filter({ is_published: true }, '-created_date');
        console.log(`Cours chargés: ${result.length} cours trouvés`);
        
        if (!result || result.length === 0) {
          console.warn('Aucun cours publié trouvé dans la base de données');
          return [];
        }

        // Pour chaque cours, compter les leçons et charger le contenu pour la recherche
        const coursesWithLessons = await Promise.all(result.map(async (course) => {
          try {
            
            const lessons = await Lesson.filter({ course_id: course.id });
            // Récupérer les titres et contenus des leçons pour la recherche améliorée
            const lessonTexts = lessons.map(lesson => 
              `${lesson.title || ''} ${lesson.content || ''}`.toLowerCase()
            ).join(' ');
            return { 
              ...course, 
              lessons_count: lessons.length,
              // Créer un index de recherche combinant tous les champs pertinents
              searchable_text: [
                course.title,
                course.short_description,
                course.description,
                Array.isArray(course.objectives) ? course.objectives.join(' ') : '',
                Array.isArray(course.prerequisites) ? course.prerequisites.join(' ') : '',
                lessonTexts
              ].filter(Boolean).join(' ').toLowerCase()
            };
          } catch (err) {
            console.warn(`Erreur lors du chargement des leçons pour le cours ${course.id}:`, err);
            return { 
              ...course, 
              lessons_count: 0,
              searchable_text: [
                course.title,
                course.short_description,
                course.description,
                Array.isArray(course.objectives) ? course.objectives.join(' ') : '',
                Array.isArray(course.prerequisites) ? course.prerequisites.join(' ') : ''
              ].filter(Boolean).join(' ').toLowerCase()
            };
          }
        }));
        return coursesWithLessons || [];
      } catch (error) {
        console.error("Erreur lors du chargement des cours:", error);
        console.error("Détails de l'erreur:", {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
          status: error.status
        });
        // Afficher une alerte pour l'utilisateur
        if (error.code === 'PGRST116' || error.status === 404) {
          console.error('Erreur 404: La table courses n\'existe pas ou n\'est pas accessible. Vérifiez la configuration Supabase.');
        }
        return [];
      }
    },
    retry: 2,
    retryDelay: 1000,
  });

  const categoryLabels = {
    all: t('courses.categories.all'),
    preparation_academique: t('courses.categories.preparation_academique'),
    integration_administrative: t('courses.categories.integration_administrative'),
    culture_codes_sociaux: t('courses.categories.culture_codes_sociaux'),
    insertion_professionnelle: t('courses.categories.insertion_professionnelle'),
    formations_professionnelles: t('courses.categories.formations_professionnelles')
  };

  const levelLabels = {
    all: t('courses.levels.all'),
    debutant: t('courses.levels.debutant'),
    intermediaire: t('courses.levels.intermediaire'),
    avance: t('courses.levels.avance')
  };

  const filteredCourses = courses.filter(course => {
    // Exclure les cours de français académique (Bac, FLE, Philosophie, Histoire-Géo)
    const excludedKeywords = ['français', 'french', 'fle', 'delf', 'dalf', 'bac', 'baccalauréat', 
                              'philosophie', 'philo', 'histoire', 'géographie', 'histoire-géo',
                              'littérature', 'grammaire', 'conjugaison', 'orthographe'];
    const titleLower = course.title?.toLowerCase() || '';
    const descLower = course.short_description?.toLowerCase() || '';
    const isExcluded = excludedKeywords.some(keyword => 
      titleLower.includes(keyword) || descLower.includes(keyword)
    );
    
    if (isExcluded) return false;
    
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
    
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const freeCourses = filteredCourses.filter(c => !c.is_premium);
  const premiumCourses = filteredCourses.filter(c => c.is_premium);

  // Ordre personnalisé des catégories : Préparation Académique en avant-dernière
  const categoryOrder = [
    'integration_administrative',
    'culture_codes_sociaux',
    'insertion_professionnelle',
    'formations_professionnelles',
    'preparation_academique' // Avant-dernière
  ];

  const coursesByCategory = categoryOrder.reduce((acc, category) => {
    acc[category] = filteredCourses.filter(c => c.category === category);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
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
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-orange-400 to-pink-400 text-white border-0 text-base px-6 py-2 shadow-2xl animate-bounce">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <div className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Chargement...
                </span>
              ) : (
                <>{courses.length}+ {t('courses.availableCourses')} • 70% {t('courses.freeCourses')}</>
              )}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              {t('courses.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('courses.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                <span className="font-bold">4.8/5</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters - Mobile Optimized */}
      <div className="bg-white/80 backdrop-blur-lg border-b-2 border-indigo-100 sticky top-16 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4 lg:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            <div className="relative col-span-1 sm:col-span-3 lg:col-span-1">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-indigo-500 w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                placeholder={t('courses.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 sm:pl-12 h-10 sm:h-12 lg:h-14 border-2 border-indigo-200 focus:border-indigo-500 rounded-xl sm:rounded-2xl shadow-sm bg-white text-sm sm:text-base lg:text-lg"
              />
            </div>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="h-10 sm:h-12 lg:h-14 border-2 border-indigo-200 focus:border-indigo-500 rounded-xl sm:rounded-2xl shadow-sm bg-white text-sm sm:text-base">
                <Filter className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-indigo-500" />
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(categoryLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value} className="text-sm sm:text-base">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="h-10 sm:h-12 lg:h-14 border-2 border-indigo-200 focus:border-indigo-500 rounded-xl sm:rounded-2xl shadow-sm bg-white text-sm sm:text-base">
                <SelectValue placeholder="Niveau" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(levelLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value} className="text-sm sm:text-base">
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-3 sm:mt-4 lg:mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 lg:gap-4">
            {isLoading ? (
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="h-6 sm:h-7 lg:h-8 w-24 sm:w-32 bg-gray-200 animate-pulse rounded-lg"></div>
                  <div className="h-4 w-32 sm:w-40 bg-gray-200 animate-pulse rounded"></div>
                </div>
                <div className="h-6 sm:h-7 w-28 sm:w-32 bg-gray-200 animate-pulse rounded-full"></div>
                <div className="h-6 sm:h-7 w-32 sm:w-36 bg-gray-200 animate-pulse rounded-full"></div>
              </div>
            ) : (
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <p className="text-gray-700 font-bold text-sm sm:text-base lg:text-lg">
                  <span className="text-xl sm:text-2xl lg:text-3xl text-indigo-600">{filteredCourses.length}</span> {t('courses.coursesFound')}
                </p>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm">
                  ✓ {freeCourses.length} {t('courses.freeCourses')}
                </Badge>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm">
                  ⭐ {premiumCourses.length} {t('courses.premiumCourses')}
                </Badge>
              </div>
            )}
            {(categoryFilter !== "all" || levelFilter !== "all" || searchTerm) && (
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-300 text-indigo-600 hover:bg-indigo-50 rounded-full text-xs sm:text-sm"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setLevelFilter("all");
                }}
              >
                ✕ {t('courses.resetFilters')}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {coursesError ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">⚠️</div>
            <h3 className="text-3xl font-bold text-red-600 mb-4">Erreur de chargement</h3>
            <p className="text-xl text-gray-600 mb-2">
              Impossible de charger les cours depuis la base de données.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              {coursesError.message || 'Erreur inconnue'}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full px-8"
              onClick={() => window.location.reload()}
            >
              Recharger la page
            </Button>
          </div>
        ) : isLoading ? (
          <div>
            {/* Skeleton Loader - Afficher des cartes de chargement */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-2 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-10 w-64 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                  <CourseCardSkeleton key={index} />
                ))}
              </div>
            </div>
            {/* Message de chargement */}
            <div className="text-center py-8">
              <div className="inline-flex items-center gap-3 text-indigo-600">
                <div className="inline-block animate-spin rounded-full h-5 w-5 border-2 border-indigo-200 border-t-indigo-600"></div>
                <p className="text-base font-medium">Chargement des cours...</p>
              </div>
            </div>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Aucun cours trouvé</h3>
            <p className="text-xl text-gray-600 mb-6">
              Essayez de modifier vos critères de recherche
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full px-8"
              onClick={() => {
                window.scrollTo(0, 0);
                setSearchTerm("");
                setCategoryFilter("all");
                setLevelFilter("all");
              }}
            >
              Réinitialiser les filtres
            </Button>
          </div>
        ) : categoryFilter === "all" && !searchTerm ? (
          // Afficher par catégorie
          Object.entries(coursesByCategory).map(([category, categoryCourses], catIndex) => (
            categoryCourses.length > 0 && (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="mb-20"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-2 w-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full"></div>
                  <h2 className="text-4xl font-extrabold text-gray-900 flex items-center gap-3">
                    {categoryLabels[category]}
                    <Badge variant="outline" className="text-base font-normal">
                      {categoryCourses.length} cours
                    </Badge>
                  </h2>
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
          // Afficher tous les résultats filtrés
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
        )}
      </div>

      <ChatBot />
    </div>
  );
}