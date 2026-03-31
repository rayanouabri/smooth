import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  FileText, Download, Plus, Trash2, Edit3,
  BookOpen, ClipboardList, Mail, Calendar,
  Copy, Check, Search
} from "lucide-react";
import ChatBot from "../components/ChatBot";

const templates = [
  {
    id: "course-summary",
    name: "Résumé de cours",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-700",
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
    color: "bg-green-100 text-green-700",
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
    color: "bg-purple-100 text-purple-700",
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
    color: "bg-orange-100 text-orange-700",
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

export default function NotesGenerator() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [copied, setCopied] = useState(false);

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
    // Auto-save current before switching
    if (currentNote && (editTitle !== currentNote.title || editContent !== currentNote.content)) {
      saveNote();
    }
    setCurrentNote(note);
    setEditTitle(note.title);
    setEditContent(note.content);
  };

  const downloadNote = () => {
    if (!currentNote) return;
    const blob = new Blob([editContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${editTitle.replace(/[^a-zA-Z0-9àâéèêëïîôùûüç\s-]/g, '')}.txt`;
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

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Générateur de notes - FrancePrepAcademy"
        description="Créez et organisez vos notes de cours, lettres de motivation et plans de révision."
        canonical="/notesgenerator"
        noindex={true}
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-1">Mes Notes & Documents</h1>
          <p className="text-emerald-200">Créez, organisez et exportez vos notes et documents</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Templates */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Modèles rapides</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {templates.map(template => (
              <button
                key={template.id}
                onClick={() => createFromTemplate(template)}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all text-left group"
              >
                <div className={`p-2 rounded-lg ${template.color}`}>
                  <template.icon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{template.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6" style={{ minHeight: '500px' }}>
          {/* LEFT - Notes List */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Mes notes ({notes.length})</CardTitle>
                  <Button size="sm" onClick={() => createNote()}>
                    <Plus className="w-4 h-4 mr-1" /> Créer
                  </Button>
                </div>
                {notes.length > 2 && (
                  <div className="relative mt-3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Rechercher..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="pl-9 h-9 text-sm"
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-2 overflow-y-auto" style={{ maxHeight: '500px' }}>
                {filteredNotes.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="w-10 h-10 mx-auto mb-3 opacity-40" />
                    <p className="text-sm">Aucune note pour le moment</p>
                    <p className="text-xs mt-1">Utilisez un modèle ou créez une note vide</p>
                  </div>
                )}
                {filteredNotes.map(note => (
                  <div
                    key={note.id}
                    onClick={() => selectNote(note)}
                    className={`p-3 rounded-lg cursor-pointer transition-all border ${
                      currentNote?.id === note.id
                        ? "bg-indigo-50 border-indigo-200"
                        : "bg-white border-gray-100 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{note.title}</h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                          {note.content.substring(0, 80)}...
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(note.updatedAt).toLocaleDateString('fr-FR', {
                            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit'
                          })}
                        </p>
                      </div>
                      <button
                        onClick={e => { e.stopPropagation(); deleteNote(note.id); }}
                        className="ml-2 p-1 text-gray-400 hover:text-red-500 rounded"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* RIGHT - Editor */}
          <div className="lg:col-span-2">
            {currentNote ? (
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-4">
                    <Input
                      value={editTitle}
                      onChange={e => setEditTitle(e.target.value)}
                      className="text-lg font-semibold border-0 p-0 h-auto shadow-none focus-visible:ring-0"
                      placeholder="Titre de la note..."
                    />
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <Button size="sm" variant="outline" onClick={copyNote}>
                        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                      </Button>
                      <Button size="sm" variant="outline" onClick={downloadNote}>
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button size="sm" onClick={saveNote} className="bg-indigo-600 hover:bg-indigo-700">
                        Sauvegarder
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Dernière modification : {new Date(currentNote.updatedAt).toLocaleString('fr-FR')}
                  </p>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={editContent}
                    onChange={e => setEditContent(e.target.value)}
                    placeholder="Commencez à écrire..."
                    className="min-h-[450px] resize-y font-mono text-sm leading-relaxed border-0 shadow-none focus-visible:ring-0 p-0"
                  />
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center py-16">
                  <Edit3 className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Sélectionnez ou créez une note</h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Choisissez un modèle ci-dessus ou créez une note vide pour commencer
                  </p>
                  <Button onClick={() => createNote()} variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Nouvelle note vide
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
}
