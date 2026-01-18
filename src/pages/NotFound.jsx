import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  // Debug: vérifier que le composant est bien rendu
  React.useEffect(() => {
    console.log('404 Page - NotFound component rendered');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* 404 Illustration */}
            <div className="relative">
              <div className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                404
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <AlertCircle className="w-24 h-24 text-red-500 opacity-20" />
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Page non trouvée
              </h1>
              <p className="text-xl text-gray-600 max-w-md mx-auto">
                Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="relative py-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
              </div>
              <div className="relative">
                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg border border-gray-200">
                  <Search className="w-6 h-6 text-indigo-600" />
                  <span className="text-gray-700 font-medium">
                    Vérifiez l'URL ou utilisez les liens ci-dessous
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/Home">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg shadow-xl"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 rounded-full px-8 py-6 text-lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Page précédente
              </Button>
            </div>

            {/* Quick Links */}
            <div className="pt-12 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Ou visitez une de ces pages :</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/Courses"
                  className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
                >
                  Cours
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  to="/Community"
                  className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
                >
                  Communauté
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  to="/Dashboard"
                  className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
                >
                  Dashboard
                </Link>
                <span className="text-gray-300">•</span>
                <Link
                  to="/Pricing"
                  className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium"
                >
                  Tarifs
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  );
}
