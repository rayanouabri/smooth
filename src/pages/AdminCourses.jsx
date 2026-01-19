import React, { useState } from "react";
import { me as getCurrentUser } from "@/api/auth";
import { Course } from "@/api/entities";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Edit, Trash2, BookOpen, Lock, Unlock } from "lucide-react";
import { motion } from "framer-motion";
import ChatBot from "../components/ChatBot";

export default function AdminCourses() {
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const queryClient = useQueryClient();

  React.useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const userData = await getCurrentUser();
    setUser(userData);
    if (userData.role !== 'admin') {
      window.location.href = '/Dashboard';
    }
  };

  const { data: courses = [] } = useQuery({
    queryKey: ['all-courses-admin'],
    queryFn: () => Course.all('-created_date'),
  });

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    short_description: "",
    category: "preparation_academique",
    level: "debutant",
    language: "A1",
    duration_hours: 5,
    price: 0,
    thumbnail_url: "",
    objectives: [""],
    prerequisites: [""],
    is_published: false
  });

  const createMutation = useMutation({
    mutationFn: (data) => Course.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-courses-admin'] });
      resetForm();
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => Course.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-courses-admin'] });
      resetForm();
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => Course.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-courses-admin'] });
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanData = {
      ...formData,
      objectives: formData.objectives.filter(o => o.trim()),
      prerequisites: formData.prerequisites.filter(p => p.trim()),
    };

    if (editingCourse) {
      updateMutation.mutate({ id: editingCourse.id, data: cleanData });
    } else {
      createMutation.mutate(cleanData);
    }
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      slug: course.slug,
      description: course.description,
      short_description: course.short_description || "",
      category: course.category,
      level: course.level,
      language: course.language || "A1",
      duration_hours: course.duration_hours || 5,
      price: course.price || 0,
      thumbnail_url: course.thumbnail_url || "",
      objectives: course.objectives?.length > 0 ? course.objectives : [""],
      prerequisites: course.prerequisites?.length > 0 ? course.prerequisites : [""],
      is_published: course.is_published || false
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      slug: "",
      description: "",
      short_description: "",
      category: "preparation_academique",
      level: "debutant",
      language: "A1",
      duration_hours: 5,
      price: 0,
      thumbnail_url: "",
      objectives: [""],
      prerequisites: [""],
      is_published: false
    });
    setEditingCourse(null);
    setShowForm(false);
  };

  const handleAddObjective = () => {
    setFormData({ ...formData, objectives: [...formData.objectives, ""] });
  };

  const handleRemoveObjective = (index) => {
    setFormData({
      ...formData,
      objectives: formData.objectives.filter((_, i) => i !== index)
    });
  };

  const handleObjectiveChange = (index, value) => {
    const newObjectives = [...formData.objectives];
    newObjectives[index] = value;
    setFormData({ ...formData, objectives: newObjectives });
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Accès Réservé</h2>
          <p className="text-gray-600">Cette page est réservée aux administrateurs.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">🎓 Gestion des Cours</h1>
          <p className="text-blue-100 text-lg">Administration des formations</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {courses.length} cours au total
            </h2>
            <p className="text-gray-600">
              {courses.filter(c => c.is_published).length} publiés • {courses.filter(c => !c.is_published).length} brouillons
            </p>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
          >
            <PlusCircle className="w-5 h-5 mr-2" />
            Nouveau cours
          </Button>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="mb-8 border-2">
              <CardHeader>
                <CardTitle>
                  {editingCourse ? "Modifier le cours" : "Créer un nouveau cours"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Titre *
                      </label>
                      <Input
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Slug (URL) *
                      </label>
                      <Input
                        required
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        placeholder="ex: introduction-python"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Description courte *
                    </label>
                    <Input
                      required
                      value={formData.short_description}
                      onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                      placeholder="Une phrase d'accroche"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Description complète *
                    </label>
                    <Textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Catégorie *
                      </label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="preparation_academique">Préparation Académique</SelectItem>
                          <SelectItem value="integration_administrative">Intégration Administrative</SelectItem>
                          <SelectItem value="culture_codes_sociaux">Culture & Codes Sociaux</SelectItem>
                          <SelectItem value="insertion_professionnelle">Insertion Professionnelle</SelectItem>
                          <SelectItem value="formations_professionnelles">Formations Professionnelles</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Niveau *
                      </label>
                      <Select
                        value={formData.level}
                        onValueChange={(value) => setFormData({ ...formData, level: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="debutant">Débutant</SelectItem>
                          <SelectItem value="intermediaire">Intermédiaire</SelectItem>
                          <SelectItem value="avance">Avancé</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Niveau langue
                      </label>
                      <Select
                        value={formData.language}
                        onValueChange={(value) => setFormData({ ...formData, language: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A1">A1</SelectItem>
                          <SelectItem value="A2">A2</SelectItem>
                          <SelectItem value="B1">B1</SelectItem>
                          <SelectItem value="B2">B2</SelectItem>
                          <SelectItem value="C1">C1</SelectItem>
                          <SelectItem value="C2">C2</SelectItem>
                          <SelectItem value="N/A">N/A</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Durée (heures) *
                      </label>
                      <Input
                        type="number"
                        required
                        min="1"
                        value={formData.duration_hours}
                        onChange={(e) => setFormData({ ...formData, duration_hours: parseInt(e.target.value) })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Prix (€)
                      </label>
                      <Input
                        type="number"
                        min="0"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Publié
                      </label>
                      <Select
                        value={formData.is_published ? "true" : "false"}
                        onValueChange={(value) => setFormData({ ...formData, is_published: value === "true" })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="false">Brouillon</SelectItem>
                          <SelectItem value="true">Publié</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      URL de l'image
                    </label>
                    <Input
                      value={formData.thumbnail_url}
                      onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
                      placeholder="https://images.unsplash.com/..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Objectifs pédagogiques
                    </label>
                    {formData.objectives.map((obj, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <Input
                          value={obj}
                          onChange={(e) => handleObjectiveChange(index, e.target.value)}
                          placeholder="Objectif..."
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => handleRemoveObjective(index)}
                          disabled={formData.objectives.length === 1}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                    <Button type="button" variant="outline" onClick={handleAddObjective} size="sm">
                      + Ajouter un objectif
                    </Button>
                  </div>

                  <div className="flex gap-3">
                    <Button type="submit" className="bg-gradient-to-r from-cyan-600 to-blue-600">
                      {editingCourse ? "Mettre à jour" : "Créer le cours"}
                    </Button>
                    <Button type="button" variant="outline" onClick={resetForm}>
                      Annuler
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        <div className="grid gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="border-2 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <img
                      src={course.thumbnail_url || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200"}
                      alt={course.title}
                      className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">
                              {course.title}
                            </h3>
                            {course.is_published ? (
                              <Badge className="bg-green-500">
                                <Unlock className="w-3 h-3 mr-1" />
                                Publié
                              </Badge>
                            ) : (
                              <Badge className="bg-gray-500">
                                <Lock className="w-3 h-3 mr-1" />
                                Brouillon
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm">{course.short_description}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span>📚 {course.category}</span>
                        <span>⏱️ {course.duration_hours}h</span>
                        <span className="font-bold text-indigo-600">
                          {course.is_premium ? "⭐ Premium" : "Gratuit"}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(course)}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Modifier
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => {
                            if (confirm("Supprimer ce cours ?")) {
                              deleteMutation.mutate(course.id);
                            }
                          }}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Supprimer
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <ChatBot />
    </div>
  );
}