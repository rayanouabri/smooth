import React, { useState, useEffect } from "react";
import { isAuthenticated as checkAuthStatus, me as getCurrentUser, redirectToLogin } from "@/api/auth";
import { ForumPost, ForumReply } from "@/api/entities";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

  const { data: posts = [], isLoading: isLoadingPosts } = useQuery({
    queryKey: ['forum-posts', categoryFilter],
    queryFn: async () => {
      try {
        if (categoryFilter === "all") {
          // Utiliser filter avec un objet vide pour obtenir tous les posts
          return await ForumPost.filter({}, '-created_date');
        }
        return await ForumPost.filter({ category: categoryFilter }, '-created_date');
      } catch (error) {
        console.error("Erreur lors du chargement des posts:", error);
        return [];
      }
    },
    retry: 2,
    retryDelay: 1000,
  });

  const { data: replies = [] } = useQuery({
    queryKey: ['forum-replies', selectedPost?.id],
    queryFn: () => ForumReply.filter({ post_id: selectedPost.id }, 'created_date'),
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
      // Update reply count
      await ForumPost.update(selectedPost.id, {
        replies_count: (selectedPost.replies_count || 0) + 1
      });
      queryClient.invalidateQueries({ queryKey: ['forum-replies'] });
      queryClient.invalidateQueries({ queryKey: ['forum-posts'] });
      setReplyContent("");
    },
  });

  const incrementViewsMutation = useMutation({
    mutationFn: (post) => ForumPost.update(post.id, {
      views_count: (post.views_count || 0) + 1
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['forum-posts'] });
    },
  });

  const handlePostClick = (post) => {
    setSelectedPost(post);
    incrementViewsMutation.mutate(post);
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
                    <span>{posts.length} discussions</span>
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
          <React.Fragment>
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
                          <Badge className={categoryColors[post.category] + " font-medium"}>
                            {categoryLabels[post.category]}
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
          </React.Fragment>
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
                  <Badge className={categoryColors[selectedPost.category]}>
                    {categoryLabels[selectedPost.category]}
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
              {replies.map((reply) => (
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
                          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
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