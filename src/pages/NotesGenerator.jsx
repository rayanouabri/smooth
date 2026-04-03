import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FileText, Download, Plus, Trash2, Edit3,
  BookOpen, ClipboardList, Mail, Calendar,
  Copy, Check, Search, Sparkles, Clock,
  StickyNote, ChevronRight, FolderOpen, Save
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "../components/ChatBot";

const templates = [
  {
    id: "course-summary",
    name: "Résumé de cours",
    icon: BookOpen,
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    lightText: "text-blue-700",
    emoji: "📘",
    content: `# Résumé de cours : [Nom du cours]

## Points clés
-
-
-

## Concepts importants
### Concept 1
Description...

### Concept 2
Description...

## À retenir
-
-

## Questions de révision
1.
2.
3. `
  },
  {
    id: "cover-letter",
    name: "Lettre de motivation",
    icon: Mail,
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-700",
    emoji: "✉️",
    content: `[Votre Nom]
[Votre Adresse]
[Ville, Code Postal]
[Email] | [Téléphone]

[Date]

[Nom de l'entreprise]
[Adresse de l'entreprise]

Objet : Candidature pour le poste de [Intitulé du poste]

Madame, Monsieur,

Actuellement [votre situation], je me permets de vous adresser ma candidature pour le poste de [intitulé] au sein de votre entreprise.

[Paragraphe 1 : Pourquoi cette entreprise vous intéresse]

[Paragraphe 2 : Vos compétences et expériences pertinentes]

[Paragraphe 3 : Ce que vous pouvez apporter à l'entreprise]

Je me tiens à votre disposition pour un entretien à votre convenance.

Cordialement,
[Votre Nom]`
  },
  {
    id: "study-plan",
    name: "Plan de révision",
    icon: Calendar,
    gradient: "from-purple-500 to-violet-600",
    lightBg: "bg-purple-50",
    lightText: "text-purple-700",
    emoji: "📅",
    content: `# Plan de révision - [Matière/Examen]

## Objectif
Date de l'examen : [Date]
Objectif de note : [Note visée]

## Semaine 1 : [Dates]
### Lundi
- [ ]
- [ ]

### Mardi
- [ ]
- [ ]

### Mercredi
- [ ]
- [ ]

### Jeudi
- [ ]
- [ ]

### Vendredi
- [ ] Révision générale
- [ ] Auto-évaluation

## Ressources
-
-

## Notes importantes
- `
  },
  {
    id: "meeting-notes",
    name: "Notes de réunion",
    icon: ClipboardList,
    gradient: "from-orange-500 to-amber-500",
    lightBg: "bg-orange-50",
    lightText: "text-orange-700",
    emoji: "📋",
    content: `# Notes de réunion - [Date]

## Participants
-
-

## Ordre du jour
1.
2.
3.

## Discussions
### Point 1
-

### Point 2
-

## Décisions prises
-

## Actions à faire
| Action | Responsable | Échéance |
|--------|-------------|----------|
|        |             |          |
|        |             |          |

## Prochaine réunion
Date :
Heure : `
  }
];

function timeAgo(isoString) {
  const diff = Date.now() - new Date(isoString).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "À l'instant";
  if (mins < 60) return `Il y a ${mins} min`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `Il y a ${hrs}h`;
  return new Date(isoString).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

export default function NotesGenerator() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const createNote = (title = "Nouvelle note", content = "") => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setNotes(prev => [newNote, ...prev]);
    setCurrentNote(newNote);
    setEditTitle(title);
    setEditContent(content);
  };

  const createFromTemplate = (template) => {
    createNote(template.name, template.content);
  };

  const saveNote = () => {
    if (!currentNote) return;
    const updated = {
      ...currentNote,
      title: editTitle,
      content: editContent,
      updatedAt: new Date().toISOString()
    };
    setNotes(prev => prev.map(n => n.id === currentNote.id ? updated : n));
    setCurrentNote(updated);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(n => n.id !== id));
    if (currentNote?.id === id) {
      setCurrentNote(null);
      setEditTitle("");
      setEditContent("");
    }
  };

  const selectNote = (note) => {
    if (currentNote && (editTitle !== currentNote.title || editContent !== currentNote.content)) {
      saveNote();
    }
    setCurrentNote(note);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const downloadNote = () => {
    if (!currentNote) return;
    const blob = new Blob([editContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${editTitle.replace(/[^a-zA-Z0-9àâéèêëïîôùûüç\s-]/g, "")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyNote = () => {
    if (!editContent) return;
    navigator.clipboard.writeText(editContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredNotes = notes.filter(n =>
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const wordCount = editContent.trim() ? editContent.trim().split(/\s+/).length : 0;
  const charCount = editContent.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <SEO
        title="Mes Notes & Documents - FrancePrepAcademy"
        description="Créez et organisez vos notes de cours, lettres de motivation et plans de révision."
        canonical="/notesgenerator"
        noindex={true}
      />

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
        <div className="absolute inset-0 opacity-10">
          {["📝","📘","✉️","📅","📋","✍️","🗒️"].map((emoji, i) => (
            <span key={i} className="absolute text-4xl select-none"
              style={{ top: `${10 + (i * 13) % 75}%`, left: `${5 + (i * 17) % 90}%`, opacity: 0.6 }}>
              {emoji}
            </span>
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs font-semibold mb-3 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                Éditeur de notes intelligent
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Mes Notes & Documents</h1>
              <p className="text-emerald-200 text-base">Créez, organisez et exportez vos notes et documents en toute simplicité.</p>
            </div>
            <div className="flex gap-3 text-center">
              {[
                { value: notes.length, label: "Notes créées" },
                { value: "4", label: "Modèles" },
                { value: "TXT", label: "Export" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 border border-white/20 rounded-2xl px-5 py-3 backdrop-blur-sm">
                  <div className="text-2xl font-extrabold">{stat.value}</div>
                  <div className="text-xs text-emerald-200 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Templates */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Modèles rapides</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {templates.map((template, idx) => (
              <motion.button
                key={template.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => createFromTemplate(template)}
                className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-xl overflow-hidden transition-all duration-300 text-left p-4"
              >
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${template.gradient}`} />
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${template.gradient} flex items-center justify-center text-xl mb-3 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  {template.emoji}
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 block">{template.name}</span>
                <div className={`mt-2 flex items-center gap-1 text-xs font-medium ${template.lightText}`}>
                  <Plus className="w-3 h-3" />
                  Utiliser
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main editor area */}
        <div className="grid lg:grid-cols-3 gap-5" style={{ minHeight: "560px" }}>

          {/* LEFT — Notes list */}
          <div className="lg:col-span-1 flex flex-col">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden">
              {/* List header */}
              <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-bold text-gray-800">Mes notes</span>
                  {notes.length > 0 && (
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full">
                      {notes.length}
                    </span>
                  )}
                </div>
                <Button size="sm" onClick={() => createNote()}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-white rounded-xl h-8 text-xs px-3 shadow-sm">
                  <Plus className="w-3.5 h-3.5 mr-1" />
                  Nouvelle
                </Button>
              </div>

              {/* Search */}
              {notes.length > 2 && (
                <div className="px-3 py-2 border-b border-gray-50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
                    <Input
                      placeholder="Rechercher une note..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="pl-8 h-8 text-xs border-gray-200 bg-gray-50 rounded-xl focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* Notes list */}
              <div className="flex-1 overflow-y-auto p-3 space-y-2" style={{ maxHeight: "480px" }}>
                {filteredNotes.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <StickyNote className="w-7 h-7 text-gray-300" />
                    </div>
                    <p className="text-sm font-semibold text-gray-500">Aucune note</p>
                    <p className="text-xs text-gray-400 mt-1">Utilisez un modèle ou créez une note vide</p>
                  </div>
                ) : (
                  <AnimatePresence>
                    {filteredNotes.map(note => (
                      <motion.div
                        key={note.id}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        onClick={() => selectNote(note)}
                        className={`group p-3 rounded-xl cursor-pointer transition-all border-2 ${
                          currentNote?.id === note.id
                            ? "bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200"
                            : "bg-gray-50 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <h4 className={`text-xs font-bold truncate ${currentNote?.id === note.id ? "text-emerald-800" : "text-gray-800"}`}>
                              {note.title}
                            </h4>
                            <p className="text-xs text-gray-400 mt-0.5 line-clamp-2 leading-relaxed">
                              {note.content.replace(/[#*\-\[\]|]/g, "").substring(0, 70)}...
                            </p>
                            <div className="flex items-center gap-1 mt-1.5">
                              <Clock className="w-2.5 h-2.5 text-gray-300" />
                              <span className="text-[10px] text-gray-400">{timeAgo(note.updatedAt)}</span>
                            </div>
                          </div>
                          <button
                            onClick={e => { e.stopPropagation(); deleteNote(note.id); }}
                            className="opacity-0 group-hover:opacity-100 p-1 text-gray-300 hover:text-red-500 rounded-lg transition-all"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT — Editor */}
          <div className="lg:col-span-2 flex flex-col">
            <AnimatePresence mode="wait">
              {currentNote ? (
                <motion.div key={currentNote.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full overflow-hidden"
                >
                  {/* Editor header */}
                  <div className="px-5 py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3 mb-1">
                      <Edit3 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <Input
                        value={editTitle}
                        onChange={e => setEditTitle(e.target.value)}
                        className="text-base font-bold border-0 p-0 h-auto shadow-none focus-visible:ring-0 text-gray-900 bg-transparent"
                        placeholder="Titre de la note..."
                      />
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <button onClick={copyNote}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-medium transition-colors">
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          {copied ? "Copié" : "Copier"}
                        </button>
                        <button onClick={downloadNote}
                          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-medium transition-colors">
                          <Download className="w-3.5 h-3.5" />
                          Exporter
                        </button>
                        <button onClick={saveNote}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm ${
                            saved
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:opacity-90"
                          }`}>
                          {saved ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
                          {saved ? "Sauvegardé" : "Sauvegarder"}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-gray-400 pl-7">
                      <span>Modifié {timeAgo(currentNote.updatedAt)}</span>
                      <span>·</span>
                      <span>{wordCount} mots</span>
                      <span>·</span>
                      <span>{charCount} caractères</span>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div className="flex-1 p-5">
                    <Textarea
                      value={editContent}
                      onChange={e => setEditContent(e.target.value)}
                      placeholder="Commencez à écrire votre note ici...

Astuce : utilisez # pour les titres, - pour les listes, et ** pour le gras."
                      className="w-full h-full min-h-[420px] resize-none font-mono text-sm leading-relaxed border-0 shadow-none focus-visible:ring-0 p-0 text-gray-800 bg-transparent placeholder:text-gray-300"
                    />
                  </div>

                  {/* Footer hint */}
                  <div className="px-5 py-2 border-t border-gray-50 bg-gray-50/50 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400">Format texte brut · Compatible Markdown</span>
                    <div className="flex gap-1">
                      {["#", "**", "-", "[ ]"].map(tag => (
                        <button key={tag} onClick={() => setEditContent(prev => prev + tag)}
                          className="text-[10px] font-mono bg-white border border-gray-200 text-gray-500 hover:text-gray-700 px-1.5 py-0.5 rounded-md transition-colors">
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center h-full min-h-[480px] text-center p-10"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center mx-auto mb-5">
                    <Edit3 className="w-9 h-9 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-800 mb-2">Sélectionnez ou créez une note</h3>
                  <p className="text-sm text-gray-500 mb-6 max-w-xs leading-relaxed">
                    Choisissez un modèle ci-dessus pour démarrer rapidement, ou créez une note vide.
                  </p>
                  <div className="flex gap-3 flex-wrap justify-center">
                    <Button onClick={() => createNote()}
                      className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-white rounded-xl shadow-md">
                      <Plus className="w-4 h-4 mr-2" />
                      Note vide
                    </Button>
                    <Button variant="outline" onClick={() => createFromTemplate(templates[0])}
                      className="rounded-xl border-2">
                      <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                      Résumé de cours
                    </Button>
                  </div>

                  {/* Quick links to templates */}
                  <div className="mt-8 grid grid-cols-2 gap-2 w-full max-w-sm">
                    {templates.map(t => (
                      <button key={t.id} onClick={() => createFromTemplate(t)}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 text-left transition-colors group">
                        <span className="text-base">{t.emoji}</span>
                        <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 truncate">{t.name}</span>
                        <ChevronRight className="w-3 h-3 text-gray-300 ml-auto flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
}
