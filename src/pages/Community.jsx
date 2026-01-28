import React, { useState, useEffect } from "react";
import { isAuthenticated as checkAuthStatus, me as getCurrentUser, redirectToLogin } from "@/api/auth";
import { ForumPost, ForumReply } from "@/api/entities";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { logger } from "@/utils/logger";
import { isMockId } from "@/utils/validate-uuid";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  MessageSquare, 
  Plus, 
  Pin, 
  CheckCircle, 
  Eye, 
  MessageCircle,
  Send 
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import ChatBot from "../components/ChatBot";

export default function Community() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showNewPostDialog, setShowNewPostDialog] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newPost, setNewPost] = useState({ title: "", content: "", category: "autre" });
  const [replyContent, setReplyContent] = useState("");
  const queryClient = useQueryClient();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const authenticated = await checkAuthStatus();
    setIsAuthenticated(authenticated);
    if (authenticated) {
      const userData = await getCurrentUser();
      setUser(userData);
    }
  };

  // Mapping des catégories de la base vers les catégories affichées
  const categoryMapping = {
    'culture_codes_sociaux': 'vie_quotidienne',
    'insertion_professionnelle': 'emploi',
    'integration_administrative': 'administratif',
    'vie_quotidienne': 'vie_quotidienne',
    'etudes': 'etudes',
    'logement': 'logement',
    'emploi': 'emploi',
    'administratif': 'administratif',
    'autre': 'autre'
  };

  // Fonction pour obtenir la catégorie normalisée
  const getNormalizedCategory = (category) => {
    return categoryMapping[category] || 'autre';
  };

  const { data: posts = [], isLoading: isLoadingPosts, refetch } = useQuery({
    queryKey: ['forum-posts', categoryFilter],
    queryFn: async () => {
      try {
        let postsList = [];
        
        if (categoryFilter === "all") {
          postsList = await ForumPost.filter({}, '-created_date', 1000);
        } else {
          postsList = await ForumPost.filter({ category: categoryFilter }, '-created_date', 1000);
        }
        
        // Filtrer les posts invalides et normaliser les catégories
        const validPosts = (postsList || [])
          .filter(post => post?.id && !isMockId(post.id))
          .map(post => ({
            ...post,
            normalizedCategory: getNormalizedCategory(post.category || 'autre')
          }));
        
        // Filtrer par catégorie si nécessaire
        if (categoryFilter !== "all") {
          return validPosts.filter(post => post.normalizedCategory === categoryFilter);
        }
        
        console.log(`[Forum] ✅ Retour de ${validPosts.length} posts (toutes catégories)`);
        if (validPosts.length !== 11 && categoryFilter === "all") {
          console.error(`[Forum] ⚠️ ATTENTION: ${validPosts.length} posts au lieu de 11 attendus !`);
          console.error(`[Forum] Posts manquants ? Vérifiez les logs ci-dessus.`);
        }
        console.log(`[Forum] 📋 Liste finale des posts:`, validPosts.map(p => ({ id: p.id, title: p.title, category: p.category })));
        return validPosts;
      } catch (error) {
        logger.error("Erreur lors du chargement des posts:", error);
        return [];
      }
    },
    retry: 2,
    retryDelay: 1000,
  });

  const { data: replies = [] } = useQuery({
    queryKey: ['forum-replies', selectedPost?.id],
    queryFn: async () => {
      if (!selectedPost?.id) return [];
      const repliesList = await ForumReply.filter({ post_id: selectedPost.id }, 'created_date');
      
      // Filtrer les réponses avec des IDs invalides (IDs mock/test)
      const validReplies = (repliesList || []).filter(reply => {
        if (!reply || !reply.id) return false;
        // Exclure les IDs mock/test
        if (isMockId(reply.id)) {
          logger.warn('Réponse avec ID mock détectée et filtrée:', reply.id);
          return false;
        }
        return true;
      });
      
      // Mettre à jour le compteur de réponses avec le nombre réel si nécessaire
      const actualCount = validReplies.length;
      if (actualCount !== (selectedPost.replies_count || 0)) {
        // Ne mettre à jour que si l'ID du post est valide
        if (selectedPost.id && !isMockId(selectedPost.id)) {
          try {
            await ForumPost.update(selectedPost.id, {
              replies_count: actualCount
            });
            // Mettre à jour selectedPost localement
            setSelectedPost(prev => prev ? {
              ...prev,
              replies_count: actualCount
            } : null);
            queryClient.invalidateQueries({ queryKey: ['forum-posts'] });
          } catch (error) {
            // Ne logger que si ce n'est pas un ID mock
            if (!isMockId(selectedPost.id)) {
              logger.error('Erreur lors de la mise à jour du compteur de réponses:', error);
            }
          }
        } else {
          // Si l'ID est mock, juste mettre à jour localement sans appeler la DB
          setSelectedPost(prev => prev ? {
            ...prev,
            replies_count: actualCount
          } : null);
        }
      }
      
      return validReplies;
    },
    enabled: !!selectedPost,
  });

  const createPostMutation = useMutation({
    mutationFn: (postData) => ForumPost.create({
      ...postData,
      author_email: user.email,
      author_name: user.full_name || user.email,
      replies_count: 0,
      views_count: 0,
      is_pinned: false,
      is_solved: false,
      tags: []
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['forum-posts'] });
      setShowNewPostDialog(false);
      setNewPost({ title: "", content: "", category: "autre" });
    },
  });

  const createReplyMutation = useMutation({
    mutationFn: (content) => ForumReply.create({
      post_id: selectedPost.id,
      content,
      author_email: user.email,
      author_name: user.full_name || user.email,
      is_solution: false,
      likes_count: 0
    }),
    onSuccess: async () => {
      // Calculer le nombre réel de réponses depuis la base de données
      const allReplies = await ForumReply.filter({ post_id: selectedPost.id });
      const validReplies = (allReplies || []).filter(reply => reply && reply.id && !isMockId(reply.id));
      const actualRepliesCount = validReplies.length;
      
      // Mettre à jour le compteur avec le nombre réel seulement si l'ID est valide
      if (selectedPost.id && !isMockId(selectedPost.id)) {
        try {
          await ForumPost.update(selectedPost.id, {
            replies_count: actualRepliesCount
          });
        } catch (error) {
          // Ne logger que si ce n'est pas un ID mock
          if (!isMockId(selectedPost.id)) {
            logger.error('Erreur lors de la mise à jour du compteur de réponses:', error);
          }
        }
      }
      
      // Mettre à jour selectedPost pour refléter le nouveau compteur
      setSelectedPost(prev => ({
        ...prev,
        replies_count: actualRepliesCount
      }));
      
      queryClient.invalidateQueries({ queryKey: ['forum-replies'] });
      queryClient.invalidateQueries({ queryKey: ['forum-posts'] });
      setReplyContent("");
    },
  });

  const incrementViewsMutation = useMutation({
    mutationFn: async (post) => {
      // Valider l'ID
      if (!post || !post.id) {
        logger.error('Post invalide:', post);
        throw new Error('Post invalide');
      }
      
      // Si c'est un ID mock, retourner silencieusement sans mettre à jour la DB
      if (isMockId(post.id)) {
        logger.debug('ID mock détecté, mise à jour locale uniquement:', post.id);
        const newViewsCount = (post.views_count || 0) + 1;
        return { newViewsCount, postId: post.id, isMock: true };
      }
      
      // Incrémenter le compteur de vues
      const newViewsCount = (post.views_count || 0) + 1;
      
      try {
        const updatedData = await ForumPost.update(post.id, {
          views_count: newViewsCount
        });
        
        // Si la mise à jour retourne null (ID mock ou inexistant), continuer avec l'UI optimiste
        if (!updatedData) {
          logger.debug(`Aucune ligne mise à jour pour le post ${post.id}, mise à jour locale uniquement`);
          return { newViewsCount, postId: post.id };
        }
        
        return { newViewsCount, postId: post.id };
      } catch (error) {
        // Si l'erreur est due à un ID mock, ne pas la propager
        if (isMockId(post.id)) {
          logger.debug('Erreur ignorée pour ID mock:', post.id);
          return { newViewsCount, postId: post.id };
        }
        logger.error('Erreur dans incrementViewsMutation:', error);
        throw error;
      }
    },
    onSuccess: ({ newViewsCount, postId }) => {
      // Mettre à jour selectedPost pour refléter le nouveau compteur
      setSelectedPost(prev => prev && prev.id === postId ? {
        ...prev,
        views_count: newViewsCount
      } : prev);
      // Mettre à jour la liste des posts
      queryClient.setQueryData(['forum-posts', categoryFilter], (oldData) => {
        if (!oldData) return oldData;
        return oldData.map(post => 
          post.id === postId 
            ? { ...post, views_count: newViewsCount }
            : post
        );
      });
      queryClient.invalidateQueries({ queryKey: ['forum-posts'] });
    },
  });

  const incrementLikesMutation = useMutation({
    mutationFn: async (reply) => {
      // Valider que l'ID existe et est valide
      if (!reply || !reply.id) {
        logger.error('Réponse invalide:', reply);
        throw new Error('Réponse invalide');
      }
      
      // Si c'est un ID mock, retourner silencieusement sans mettre à jour la DB
      if (isMockId(reply.id)) {
        logger.debug('ID mock détecté, mise à jour locale uniquement:', reply.id);
        const newLikesCount = (reply.likes_count || 0) + 1;
        return { newLikesCount, replyId: reply.id, isMock: true };
      }
      
      // Incrémenter le compteur de likes
      const newLikesCount = (reply.likes_count || 0) + 1;
      
      try {
        const updatedData = await ForumReply.update(reply.id, {
          likes_count: newLikesCount
        });
        
        // Si la mise à jour retourne null (ID mock ou inexistant), continuer avec l'UI optimiste
        if (!updatedData) {
          logger.debug(`Aucune ligne mise à jour pour la réponse ${reply.id}, mise à jour locale uniquement`);
          return { newLikesCount, replyId: reply.id };
        }
        
        return { newLikesCount, replyId: reply.id, data: updatedData };
      } catch (error) {
        // Si l'erreur est due à un ID mock, ne pas la propager
        if (isMockId(reply.id)) {
          logger.debug('Erreur ignorée pour ID mock:', reply.id);
          return { newLikesCount, replyId: reply.id };
        }
        logger.error('Erreur dans incrementLikesMutation:', error);
        throw error;
      }
    },
    onSuccess: ({ newLikesCount, replyId }) => {
      // Mettre à jour la liste des réponses de manière optimiste
      queryClient.setQueryData(['forum-replies', selectedPost?.id], (oldData) => {
        if (!oldData) return oldData;
        return oldData.map(reply => 
          reply.id === replyId 
            ? { ...reply, likes_count: newLikesCount }
            : reply
        );
      });
      queryClient.invalidateQueries({ queryKey: ['forum-replies', selectedPost?.id] });
    },
    onError: (error) => {
      logger.error('Erreur lors de l\'incrémentation des likes:', error);
    },
  });

  const handlePostClick = (post) => {
    // Incrémenter les vues seulement si ce n'est pas déjà le post sélectionné
    // Cela évite d'incrémenter plusieurs fois si on clique plusieurs fois sur le même post
    if (!selectedPost || selectedPost.id !== post.id) {
      incrementViewsMutation.mutate(post);
      setSelectedPost(post);
    }
  };

  const handleLikeReply = (reply, e) => {
    e.stopPropagation(); // Empêcher la propagation de l'événement
    incrementLikesMutation.mutate(reply);
  };

  const categoryLabels = {
    all: "Toutes les catégories",
    etudes: "Études",
    logement: "Logement",
    emploi: "Emploi",
    vie_quotidienne: "Vie quotidienne",
    administratif: "Administratif",
    autre: "Autre"
  };

  const categoryColors = {
    etudes: "bg-blue-100 text-blue-800",
    logement: "bg-green-100 text-green-800",
    emploi: "bg-purple-100 text-purple-800",
    vie_quotidienne: "bg-orange-100 text-orange-800",
    administratif: "bg-red-100 text-red-800",
    autre: "bg-gray-100 text-gray-800"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-0 text-sm px-4 py-2">
                💬 Forum d'entraide
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Communauté FrancePrep
              </h1>
              <p className="text-xl text-blue-100 mb-4">
                Posez vos questions, partagez vos expériences et aidez les autres
              </p>
              <div className="flex items-center gap-6 text-lg">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                  <MessageSquare className="w-5 h-5" />
                  {isLoadingPosts ? (
                    <span className="flex items-center gap-2">
                      <div className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      Chargement...
                    </span>
                  ) : (
                    <>
                      <span>{posts.length} discussions</span>
                      <button
                        onClick={() => {
                          queryClient.invalidateQueries({ queryKey: ['forum-posts'] });
                          refetch();
                        }}
                        className="ml-2 text-xs underline opacity-75 hover:opacity-100"
                        title="Rafraîchir"
                      >
                        🔄
                      </button>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
                  <Eye className="w-5 h-5" />
                  <span>Actif 24/7</span>
                </div>
              </div>
            </div>
            {isAuthenticated && (
              <Dialog open={showNewPostDialog} onOpenChange={setShowNewPostDialog}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                    <Plus className="w-5 h-5 mr-2" />
                    Nouveau sujet
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Créer un nouveau sujet</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Titre
                      </label>
                      <Input
                        value={newPost.title}
                        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                        placeholder="Décrivez votre question ou sujet..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Catégorie
                      </label>
                      <Select 
                        value={newPost.category} 
                        onValueChange={(value) => setNewPost({ ...newPost, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(categoryLabels)
                            .filter(([key]) => key !== "all")
                            .map(([key, label]) => (
                              <SelectItem key={key} value={key}>{label}</SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <Textarea
                        value={newPost.content}
                        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                        placeholder="Expliquez votre situation en détail..."
                        rows={6}
                      />
                    </div>
                    <Button
                      className="w-full bg-blue-900 hover:bg-blue-800"
                      onClick={() => createPostMutation.mutate(newPost)}
                      disabled={!newPost.title || !newPost.content || createPostMutation.isPending}
                    >
                      {createPostMutation.isPending ? "Publication..." : "Publier le sujet"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!selectedPost ? (
          <div>
            {/* Filter */}
            <div className="mb-6">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-64">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <SelectItem key={key} value={key}>{label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Posts List */}
            {isLoadingPosts ? (
              <div className="space-y-6">
                <div className="text-center py-12">
                  <div className="inline-flex items-center gap-3 text-indigo-600 mb-4">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-indigo-200 border-t-indigo-600"></div>
                    <p className="text-lg font-medium">Chargement des discussions...</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    Veuillez patienter pendant le chargement des sujets du forum
                  </p>
                </div>
                {/* Skeleton loaders */}
                {[...Array(3)].map((_, index) => (
                  <Card key={index} className="animate-pulse">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-gray-200 rounded-2xl"></div>
                        <div className="flex-1 space-y-3">
                          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {posts.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-2xl hover:border-blue-300 transition-all duration-300 cursor-pointer border-2 group"
                  onClick={() => handlePostClick(post)}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                          {post.author_name[0]}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-3 mb-3 flex-wrap">
                          {post.is_pinned && (
                            <Badge className="bg-orange-500 text-white">
                              <Pin className="w-3 h-3 mr-1" />
                              Épinglé
                            </Badge>
                          )}
                          <Badge className={categoryColors[post.normalizedCategory || 'autre'] + " font-medium"}>
                            {categoryLabels[post.normalizedCategory || 'autre']}
                          </Badge>
                          {post.is_solved && (
                            <Badge className="bg-green-500 text-white">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Résolu
                            </Badge>
                          )}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-base">
                          {post.content}
                        </p>

                        <div className="flex items-center flex-wrap gap-4 text-sm">
                          <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
                            <MessageCircle className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-blue-600">{post.replies_count || 0}</span>
                            <span className="text-gray-600">réponses</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg">
                            <Eye className="w-4 h-4 text-gray-600" />
                            <span className="font-semibold">{post.views_count || 0}</span>
                            <span className="text-gray-600">vues</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <span>Par</span>
                            <span className="font-semibold text-gray-900">{post.author_name}</span>
                          </div>
                          <div className="text-gray-500">
                            {new Date(post.created_date).toLocaleDateString('fr-FR')}
                          </div>
                        </div>

                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary" className="text-xs bg-purple-100 text-purple-700 hover:bg-purple-200">
                                #{tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {posts.length === 0 && (
                <div className="text-center py-20">
                  <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Aucun sujet pour le moment
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Soyez le premier à poser une question !
                  </p>
                  {isAuthenticated && (
                    <Button onClick={() => setShowNewPostDialog(true)}>
                      <Plus className="w-4 h-4 mr-2" />
                      Créer un sujet
                    </Button>
                  )}
                </div>
              )}
            </div>
            )}
          </div>
        ) : (
          <div>
            {/* Thread View */}
            <Button
              variant="outline"
              className="mb-6"
              onClick={() => setSelectedPost(null)}
            >
              ← Retour aux sujets
            </Button>

            {/* Original Post */}
            <Card className="mb-8">
              <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                  <Badge className={categoryColors[getNormalizedCategory(selectedPost.category || 'autre')]}>
                    {categoryLabels[getNormalizedCategory(selectedPost.category || 'autre')]}
                  </Badge>
                  {selectedPost.is_solved && (
                    <Badge className="bg-green-500">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Résolu
                    </Badge>
                  )}
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {selectedPost.title}
                </h1>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 whitespace-pre-line mb-6">
                  {selectedPost.content}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="font-semibold text-blue-900">
                        {selectedPost.author_name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {selectedPost.author_name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {new Date(selectedPost.created_date).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Replies */}
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                {replies.length} réponse{replies.length > 1 ? 's' : ''}
              </h2>
              {replies.filter(reply => reply && reply.id && !isMockId(reply.id)).map((reply) => (
                <Card key={reply.id} className={`border-2 ${reply.is_solution ? 'border-green-200 bg-green-50/30' : 'hover:border-blue-200'} transition-all`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="font-bold text-white text-lg">
                          {reply.author_name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3 flex-wrap">
                          <span className="font-bold text-gray-900 text-lg">
                            {reply.author_name}
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(reply.created_date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </span>
                          {reply.is_solution && (
                            <Badge className="bg-green-500 text-white">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              ✓ Solution acceptée
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed text-base">
                          {reply.content}
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <button 
                            onClick={(e) => handleLikeReply(reply, e)}
                            disabled={incrementLikesMutation.isPending}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                          >
                            <span>👍</span>
                            <span className="font-medium">{reply.likes_count || 0}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Reply Form */}
            {isAuthenticated ? (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Votre réponse
                  </h3>
                  <Textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Partagez votre expérience ou vos conseils..."
                    rows={4}
                    className="mb-4"
                  />
                  <Button
                    className="bg-blue-900 hover:bg-blue-800"
                    onClick={() => createReplyMutation.mutate(replyContent)}
                    disabled={!replyContent.trim() || createReplyMutation.isPending}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {createReplyMutation.isPending ? "Envoi..." : "Envoyer ma réponse"}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-6 text-center">
                  <p className="text-gray-600 mb-4">
                    Connectez-vous pour participer à la discussion
                  </p>
                  <Button onClick={() => redirectToLogin(window.location.href)}>
                    Se connecter
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>

      <ChatBot />
    </div>
  );
}