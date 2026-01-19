import React from "react";
import { Users, BookOpen, GraduationCap, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "Communauté",
      label: "Étudiants accompagnés",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      value: "200+",
      label: "Cours disponibles",
      color: "text-green-600"
    },
    {
      icon: GraduationCap,
      value: "95%",
      label: "Taux de réussite",
      color: "text-purple-600"
    },
    {
      icon: Globe,
      value: "120+",
      label: "Pays disponibles",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-white/10 p-4 rounded-full">
                  <stat.icon className={`w-8 h-8 ${stat.color} text-white`} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}