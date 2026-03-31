import React, { useState, useRef } from "react";
import { useUserProfile } from "@/hooks/useUserProfile";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  FileText, Download, Plus, Trash2, Save,
  User as UserIcon, Briefcase, GraduationCap, Languages,
  Wrench, ChevronRight, Eye, Printer
} from "lucide-react";
import ChatBot from "../components/ChatBot";

const emptyResume = {
  personal: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: ""
  },
  objective: "",
  education: [],
  experience: [],
  skills: [],
  languages: []
};

export default function ResumeBuilder() {
  const { user } = useUserProfile();
  const previewRef = useRef(null);

  const [resume, setResume] = useState(() => ({
    ...emptyResume,
    personal: {
      ...emptyResume.personal,
      fullName: user?.full_name || user?.user_metadata?.full_name || "",
      email: user?.email || ""
    }
  }));

  const [skillInput, setSkillInput] = useState("");
  const [activeSection, setActiveSection] = useState("personal");

  // Update personal info
  const updatePersonal = (field, value) => {
    setResume(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  // Education CRUD
  const addEducation = () => {
    setResume(prev => ({
      ...prev,
      education: [...prev.education, { institution: "", degree: "", startYear: "", endYear: "" }]
    }));
  };
  const updateEducation = (index, field, value) => {
    setResume(prev => ({
      ...prev,
      education: prev.education.map((e, i) => i === index ? { ...e, [field]: value } : e)
    }));
  };
  const removeEducation = (index) => {
    setResume(prev => ({ ...prev, education: prev.education.filter((_, i) => i !== index) }));
  };

  // Experience CRUD
  const addExperience = () => {
    setResume(prev => ({
      ...prev,
      experience: [...prev.experience, { company: "", position: "", duration: "", description: "" }]
    }));
  };
  const updateExperience = (index, field, value) => {
    setResume(prev => ({
      ...prev,
      experience: prev.experience.map((e, i) => i === index ? { ...e, [field]: value } : e)
    }));
  };
  const removeExperience = (index) => {
    setResume(prev => ({ ...prev, experience: prev.experience.filter((_, i) => i !== index) }));
  };

  // Skills
  const addSkill = () => {
    if (skillInput.trim() && !resume.skills.includes(skillInput.trim())) {
      setResume(prev => ({ ...prev, skills: [...prev.skills, skillInput.trim()] }));
      setSkillInput("");
    }
  };
  const removeSkill = (index) => {
    setResume(prev => ({ ...prev, skills: prev.skills.filter((_, i) => i !== index) }));
  };

  // Languages CRUD
  const addLanguage = () => {
    setResume(prev => ({
      ...prev,
      languages: [...prev.languages, { name: "", level: "B1" }]
    }));
  };
  const updateLanguage = (index, field, value) => {
    setResume(prev => ({
      ...prev,
      languages: prev.languages.map((l, i) => i === index ? { ...l, [field]: value } : l)
    }));
  };
  const removeLanguage = (index) => {
    setResume(prev => ({ ...prev, languages: prev.languages.filter((_, i) => i !== index) }));
  };

  // Print PDF
  const handlePrint = () => {
    const printContent = previewRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>CV - ${resume.personal.fullName || 'Mon CV'}</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1a1a1a; line-height: 1.5; padding: 40px; max-width: 800px; margin: 0 auto; }
            h1 { font-size: 28px; font-weight: 700; color: #1e3a5f; margin-bottom: 4px; }
            h2 { font-size: 16px; font-weight: 700; color: #1e3a5f; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #1e3a5f; padding-bottom: 4px; margin-top: 20px; margin-bottom: 10px; }
            .contact { color: #555; font-size: 13px; margin-bottom: 16px; }
            .contact span { margin-right: 12px; }
            .objective { font-size: 14px; color: #333; margin-bottom: 8px; font-style: italic; }
            .entry { margin-bottom: 12px; }
            .entry-header { display: flex; justify-content: space-between; align-items: baseline; }
            .entry-title { font-weight: 600; font-size: 14px; }
            .entry-subtitle { font-size: 13px; color: #555; }
            .entry-date { font-size: 12px; color: #777; white-space: nowrap; }
            .entry-desc { font-size: 13px; color: #444; margin-top: 4px; }
            .skills { display: flex; flex-wrap: wrap; gap: 6px; }
            .skill-tag { background: #e8eef5; color: #1e3a5f; padding: 3px 10px; border-radius: 4px; font-size: 12px; }
            .languages { display: flex; flex-wrap: wrap; gap: 12px; }
            .lang { font-size: 13px; }
            .lang-level { font-weight: 600; color: #1e3a5f; }
            @media print { body { padding: 20px; } }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
          <script>window.onload = function() { window.print(); window.close(); }<\/script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const sections = [
    { id: "personal", label: "Informations", icon: UserIcon },
    { id: "objective", label: "Objectif", icon: FileText },
    { id: "education", label: "Formation", icon: GraduationCap },
    { id: "experience", label: "Expérience", icon: Briefcase },
    { id: "skills", label: "Compétences", icon: Wrench },
    { id: "languages", label: "Langues", icon: Languages }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Créer un CV - FrancePrepAcademy"
        description="Créez votre CV professionnel gratuitement avec notre outil en ligne."
        canonical="/resumebuilder"
        noindex={true}
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-1">Créer un CV</h1>
              <p className="text-blue-200">Remplissez vos informations et téléchargez votre CV en PDF</p>
            </div>
            <Button
              onClick={handlePrint}
              className="bg-white text-indigo-900 hover:bg-gray-100 font-semibold"
            >
              <Printer className="w-4 h-4 mr-2" />
              Télécharger PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT - Editor */}
          <div>
            {/* Section Nav */}
            <div className="flex flex-wrap gap-2 mb-6">
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeSection === s.id
                      ? "bg-indigo-600 text-white shadow"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </button>
              ))}
            </div>

            {/* Personal Info */}
            {activeSection === "personal" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <UserIcon className="w-5 h-5" />
                    Informations personnelles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                      <Input value={resume.personal.fullName} onChange={e => updatePersonal("fullName", e.target.value)} placeholder="Jean Dupont" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input value={resume.personal.email} onChange={e => updatePersonal("email", e.target.value)} placeholder="jean@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                      <Input value={resume.personal.phone} onChange={e => updatePersonal("phone", e.target.value)} placeholder="+33 6 12 34 56 78" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn (optionnel)</label>
                      <Input value={resume.personal.linkedin} onChange={e => updatePersonal("linkedin", e.target.value)} placeholder="linkedin.com/in/jean" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                    <Input value={resume.personal.address} onChange={e => updatePersonal("address", e.target.value)} placeholder="Paris, France" />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Objective */}
            {activeSection === "objective" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FileText className="w-5 h-5" />
                    Objectif professionnel
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={resume.objective}
                    onChange={e => setResume(prev => ({ ...prev, objective: e.target.value }))}
                    placeholder="Décrivez brièvement votre objectif de carrière, ce que vous recherchez..."
                    rows={5}
                  />
                  <p className="text-xs text-gray-500 mt-2">2 à 3 phrases qui résument votre profil et vos ambitions.</p>
                </CardContent>
              </Card>
            )}

            {/* Education */}
            {activeSection === "education" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-lg">
                      <GraduationCap className="w-5 h-5" />
                      Formation
                    </div>
                    <Button size="sm" onClick={addEducation} variant="outline">
                      <Plus className="w-4 h-4 mr-1" /> Ajouter
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resume.education.length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-6">Aucune formation ajoutée. Cliquez sur "Ajouter" pour commencer.</p>
                  )}
                  {resume.education.map((edu, idx) => (
                    <div key={idx} className="p-4 border rounded-lg space-y-3 bg-gray-50">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Formation {idx + 1}</span>
                        <Button size="sm" variant="ghost" onClick={() => removeEducation(idx)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Input placeholder="Établissement" value={edu.institution} onChange={e => updateEducation(idx, "institution", e.target.value)} />
                        <Input placeholder="Diplôme" value={edu.degree} onChange={e => updateEducation(idx, "degree", e.target.value)} />
                        <Input placeholder="Année début" value={edu.startYear} onChange={e => updateEducation(idx, "startYear", e.target.value)} />
                        <Input placeholder="Année fin" value={edu.endYear} onChange={e => updateEducation(idx, "endYear", e.target.value)} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Experience */}
            {activeSection === "experience" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-lg">
                      <Briefcase className="w-5 h-5" />
                      Expérience professionnelle
                    </div>
                    <Button size="sm" onClick={addExperience} variant="outline">
                      <Plus className="w-4 h-4 mr-1" /> Ajouter
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resume.experience.length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-6">Aucune expérience ajoutée. Cliquez sur "Ajouter" pour commencer.</p>
                  )}
                  {resume.experience.map((exp, idx) => (
                    <div key={idx} className="p-4 border rounded-lg space-y-3 bg-gray-50">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Expérience {idx + 1}</span>
                        <Button size="sm" variant="ghost" onClick={() => removeExperience(idx)} className="text-red-500 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <Input placeholder="Entreprise" value={exp.company} onChange={e => updateExperience(idx, "company", e.target.value)} />
                        <Input placeholder="Poste" value={exp.position} onChange={e => updateExperience(idx, "position", e.target.value)} />
                      </div>
                      <Input placeholder="Durée (ex: Jan 2023 - Déc 2024)" value={exp.duration} onChange={e => updateExperience(idx, "duration", e.target.value)} />
                      <Textarea placeholder="Description des missions et réalisations" value={exp.description} onChange={e => updateExperience(idx, "description", e.target.value)} rows={3} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Skills */}
            {activeSection === "skills" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Wrench className="w-5 h-5" />
                    Compétences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={skillInput}
                      onChange={e => setSkillInput(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                      placeholder="Ajouter une compétence..."
                    />
                    <Button onClick={addSkill} disabled={!skillInput.trim()}>
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {resume.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm pl-3 pr-2 py-1.5">
                        {skill}
                        <button onClick={() => removeSkill(idx)} className="ml-2 hover:text-red-600">
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  {resume.skills.length === 0 && (
                    <p className="text-sm text-gray-500">Ajoutez vos compétences techniques et humaines.</p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Languages */}
            {activeSection === "languages" && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-lg">
                      <Languages className="w-5 h-5" />
                      Langues
                    </div>
                    <Button size="sm" onClick={addLanguage} variant="outline">
                      <Plus className="w-4 h-4 mr-1" /> Ajouter
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resume.languages.length === 0 && (
                    <p className="text-sm text-gray-500 text-center py-6">Aucune langue ajoutée.</p>
                  )}
                  {resume.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Input
                        className="flex-1"
                        placeholder="Langue (ex: Français)"
                        value={lang.name}
                        onChange={e => updateLanguage(idx, "name", e.target.value)}
                      />
                      <select
                        className="h-10 px-3 rounded-md border border-gray-300 text-sm bg-white"
                        value={lang.level}
                        onChange={e => updateLanguage(idx, "level", e.target.value)}
                      >
                        <option value="A1">A1 - Débutant</option>
                        <option value="A2">A2 - Élémentaire</option>
                        <option value="B1">B1 - Intermédiaire</option>
                        <option value="B2">B2 - Avancé</option>
                        <option value="C1">C1 - Courant</option>
                        <option value="C2">C2 - Bilingue</option>
                        <option value="native">Langue maternelle</option>
                      </select>
                      <Button size="sm" variant="ghost" onClick={() => removeLanguage(idx)} className="text-red-500 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          {/* RIGHT - Live Preview */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Aperçu du CV
              </h2>
              <Button size="sm" variant="outline" onClick={handlePrint}>
                <Download className="w-4 h-4 mr-1" />
                PDF
              </Button>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div ref={previewRef} className="p-8" style={{ minHeight: '600px' }}>
                {/* Name */}
                <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#1e3a5f', marginBottom: '4px' }}>
                  {resume.personal.fullName || "Votre Nom"}
                </h1>

                {/* Contact */}
                <div style={{ color: '#555', fontSize: '13px', marginBottom: '16px' }}>
                  {resume.personal.email && <span>{resume.personal.email}</span>}
                  {resume.personal.phone && <span> | {resume.personal.phone}</span>}
                  {resume.personal.address && <span> | {resume.personal.address}</span>}
                  {resume.personal.linkedin && <span> | {resume.personal.linkedin}</span>}
                </div>

                {/* Objective */}
                {resume.objective && (
                  <>
                    <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '2px solid #1e3a5f', paddingBottom: '4px', marginTop: '16px', marginBottom: '8px' }}>
                      Objectif professionnel
                    </h2>
                    <p style={{ fontSize: '13px', color: '#333', fontStyle: 'italic' }}>{resume.objective}</p>
                  </>
                )}

                {/* Education */}
                {resume.education.length > 0 && (
                  <>
                    <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '2px solid #1e3a5f', paddingBottom: '4px', marginTop: '20px', marginBottom: '10px' }}>
                      Formation
                    </h2>
                    {resume.education.map((edu, idx) => (
                      <div key={idx} style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                          <span style={{ fontWeight: 600, fontSize: '14px' }}>{edu.degree || "Diplôme"}</span>
                          <span style={{ fontSize: '12px', color: '#777' }}>
                            {edu.startYear}{edu.endYear ? ` - ${edu.endYear}` : ''}
                          </span>
                        </div>
                        <div style={{ fontSize: '13px', color: '#555' }}>{edu.institution}</div>
                      </div>
                    ))}
                  </>
                )}

                {/* Experience */}
                {resume.experience.length > 0 && (
                  <>
                    <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '2px solid #1e3a5f', paddingBottom: '4px', marginTop: '20px', marginBottom: '10px' }}>
                      Expérience professionnelle
                    </h2>
                    {resume.experience.map((exp, idx) => (
                      <div key={idx} style={{ marginBottom: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                          <span style={{ fontWeight: 600, fontSize: '14px' }}>{exp.position || "Poste"}</span>
                          <span style={{ fontSize: '12px', color: '#777' }}>{exp.duration}</span>
                        </div>
                        <div style={{ fontSize: '13px', color: '#555' }}>{exp.company}</div>
                        {exp.description && (
                          <div style={{ fontSize: '13px', color: '#444', marginTop: '4px' }}>{exp.description}</div>
                        )}
                      </div>
                    ))}
                  </>
                )}

                {/* Skills */}
                {resume.skills.length > 0 && (
                  <>
                    <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '2px solid #1e3a5f', paddingBottom: '4px', marginTop: '20px', marginBottom: '10px' }}>
                      Compétences
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {resume.skills.map((skill, idx) => (
                        <span key={idx} style={{ background: '#e8eef5', color: '#1e3a5f', padding: '3px 10px', borderRadius: '4px', fontSize: '12px' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {/* Languages */}
                {resume.languages.length > 0 && (
                  <>
                    <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1px', borderBottom: '2px solid #1e3a5f', paddingBottom: '4px', marginTop: '20px', marginBottom: '10px' }}>
                      Langues
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                      {resume.languages.map((lang, idx) => (
                        <span key={idx} style={{ fontSize: '13px' }}>
                          {lang.name} — <strong style={{ color: '#1e3a5f' }}>{lang.level === 'native' ? 'Langue maternelle' : lang.level}</strong>
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {/* Empty state */}
                {!resume.objective && resume.education.length === 0 && resume.experience.length === 0 && resume.skills.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '40px 0', color: '#999' }}>
                    <p style={{ fontSize: '14px' }}>Commencez à remplir vos informations pour voir l'aperçu de votre CV ici.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChatBot />
    </div>
  );
}
