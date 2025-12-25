import React, { useState } from "react";
import { Course } from "@/api/entities";
import { useQuery } from "@tanstack/react-query";
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
import ChatBot from "../components/ChatBot";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: async () => {
      try {
        const result = await Course.filter({ is_published: true }, '-created_date');
        // Pour chaque cours, compter les leçons
        const coursesWithLessons = await Promise.all(result.map(async (course) => {
          try {
            const { Lesson } = await import('@/api/entities');
            const lessons = await Lesson.filter({ course_id: course.id });
            return { ...course, lessons_count: lessons.length };
          } catch (err) {
            return { ...course, lessons_count: 0 };
          }
        }));
        return coursesWithLessons || [];
      } catch (error) {
        console.error("Erreur lors du chargement des cours:", error);
        return [];
      }
    },
  });

  const categoryLabels = {
    all: "Toutes les catégories",
    preparation_academique: "📚 Préparation Académique",
    integration_administrative: "📋 Intégration Administrative",
    culture_codes_sociaux: "🎭 Culture & Codes Sociaux",
    insertion_professionnelle: "💼 Insertion Professionnelle",
    formations_professionnelles: "🚀 Formations Professionnelles"
  };

  const levelLabels = {
    all: "Tous les niveaux",
    debutant: "🟢 Débutant",
    intermediaire: "🟡 Intermédiaire",
    avance: "🔴 Avancé"
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.short_description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const freeCourses = filteredCourses.filter(c => c.price === 0);
  const premiumCourses = filteredCourses.filter(c => c.price > 0);

  const coursesByCategory = Object.keys(categoryLabels)
    .filter(cat => cat !== "all")
    .reduce((acc, category) => {
      acc[category] = filteredCourses.filter(c => c.category === category);
      return acc;
    }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
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
              {courses.length}+ Cours Disponibles • 70% Gratuits
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              Catalogue de
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                Formations Expert
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Des cours ultra-complets pour maîtriser chaque aspect de votre vie en France
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                <span className="font-bold">4.8/5</span>
                <span className="text-blue-100">• {courses.reduce((sum, c) => sum + (c.reviews_count || 0), 0)} avis</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-300" />
                <span className="text-blue-100">étudiants</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-lg border-b-2 border-indigo-100 sticky top-16 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500 w-5 h-5" />
              <Input
                placeholder="Rechercher un cours..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 border-2 border-indigo-200 focus:border-indigo-500 rounded-2xl shadow-sm bg-white text-lg"
              />
            </div>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="h-14 border-2 border-indigo-200 focus:border-indigo-500 rounded-2xl shadow-sm bg-white text-base">
                <Filter className="w-5 h-5 mr-2 text-indigo-500" />
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

            <Select value={levelFilter} onValueChange={setLevelFilter}>
              <SelectTrigger className="h-14 border-2 border-indigo-200 focus:border-indigo-500 rounded-2xl shadow-sm bg-white text-base">
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

          <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <p className="text-gray-700 font-bold text-lg">
                <span className="text-3xl text-indigo-600">{filteredCourses.length}</span> cours
              </p>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 px-3 py-1">
                ✓ {freeCourses.length} gratuits
              </Badge>
              <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 px-3 py-1">
                ⭐ {premiumCourses.length} premium
              </Badge>
            </div>
            {(categoryFilter !== "all" || levelFilter !== "all" || searchTerm) && (
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-300 text-indigo-600 hover:bg-indigo-50 rounded-full"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setLevelFilter("all");
                }}
              >
                ✕ Réinitialiser les filtres
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600 mb-4"></div>
            <p className="text-xl font-semibold text-gray-700">Chargement des cours...</p>
            <p className="text-gray-500 mt-2">Préparation de votre catalogue</p>
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