import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Sparkles, ArrowRight, Trophy, Zap, BookOpen } from "lucide-react";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { me as getCurrentUser } from "@/api/auth";

export default function PaymentSuccess() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const userData = await getCurrentUser();
    setUser(userData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <Card className="border-0 shadow-2xl overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
            </div>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-extrabold mb-4"
            >
              Bienvenue dans Premium ! 🎉
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-green-50"
            >
              Votre paiement a été confirmé avec succès
            </motion.p>
          </div>

          <CardContent className="p-8 md:p-12">
            {/* Benefits */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Vous avez maintenant accès à :
              </h2>
              <div className="space-y-4">
                {[
                  { icon: "🎓", title: "60+ Cours Premium débloqués", desc: "Formations professionnelles et académiques complètes" },
                  { icon: "🤖", title: "IA illimitée avec historique", desc: "Assistant intelligent sans restriction" },
                  { icon: "🏆", title: "Certificats professionnels", desc: "Reconnus et valorisables sur votre CV" },
                  { icon: "⚡", title: "Support prioritaire 24/7", desc: "Réponses garanties en moins de 2h" },
                  { icon: "💰", title: "Réduction cours particuliers", desc: "-20% sur tous les professeurs" }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100"
                  >
                    <div className="text-4xl">{benefit.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl mb-8">
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                Prochaines étapes recommandées :
              </h3>
              <ol className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-600">1.</span>
                  <span>Explorez le catalogue complet de 60+ cours Premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-600">2.</span>
                  <span>Testez l'assistant IA sans limite pour vos questions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-purple-600">3.</span>
                  <span>Rejoignez la communauté Premium dans le forum</span>
                </li>
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to={createPageUrl("Courses")}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 text-lg shadow-xl">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Voir tous les cours
                </Button>
              </Link>
              <Link to={createPageUrl("Dashboard")}>
                <Button variant="outline" className="w-full border-2 border-purple-300 text-purple-600 hover:bg-purple-50 font-bold py-6 text-lg">
                  <Trophy className="w-5 h-5 mr-2" />
                  Mon tableau de bord
                </Button>
              </Link>
            </div>

            {/* Trust Message */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Un email de confirmation a été envoyé à <strong>{user?.email}</strong>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Vous pouvez annuler à tout moment depuis vos paramètres
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Confetti Effect */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{ 
                y: -100, 
                x: Math.random() * window.innerWidth,
                rotate: 0,
                opacity: 1
              }}
              animate={{ 
                y: window.innerHeight + 100,
                rotate: 360,
                opacity: 0
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                repeat: Infinity
              }}
            >
              {['🎉', '⭐', '✨', '🎊', '💫'][i % 5]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}