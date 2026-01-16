import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <Card className="border-2 shadow-2xl">
          <CardContent className="p-12 text-center">
            {/* Illustration 404 */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mb-8"
            >
              <div className="text-9xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                404
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Page introuvable
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={() => navigate(-1)}
                variant="outline"
                size="lg"
                className="border-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
              <Link to={createPageUrl("Home")}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Accueil
                </Button>
              </Link>
            </motion.div>

            {/* Suggestions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-4">Pages populaires :</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {[
                  { label: "Cours", page: "Courses" },
                  { label: "Tableau de bord", page: "Dashboard" },
                  { label: "Tarifs", page: "Pricing" },
                  { label: "Communauté", page: "Community" },
                ].map((item) => (
                  <Link key={item.page} to={createPageUrl(item.page)}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 hover:text-indigo-600"
                    >
                      <Search className="w-3 h-3 mr-1" />
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
