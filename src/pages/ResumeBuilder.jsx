import React, { useState, useRef } from "react";
import { useUserProfile } from "@/hooks/useUserProfile";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  FileText, Download, Plus, Trash2,
  User as UserIcon, Briefcase, GraduationCap, Languages,
  Wrench, Eye, Printer, ChevronRight, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "../components/ChatBot";

const emptyResume = {
  personal: { fullName: "", email: "", phone: "", address: "", linkedin: "" },
  objective: "",
  education: [],
  experience: [],
  skills: [],
  languages: []
};

const sections = [
  { id: "personal",    label: "Infos",       icon: UserIcon,       color: "from-blue-500 to-indigo-600" },
  { id: "objective",   label: "Objectif",    icon: FileText,       color: "from-purple-500 to-violet-600" },
  { id: "education",   label: "Formation",   icon: GraduationCap,  color: "from-emerald-500 to-teal-600" },
  { id: "experience",  label: "Expérience",  icon: Briefcase,      color: "from-orange-500 to-amber-600" },
  { id: "skills",      label: "Compétences", icon: Wrench,         color: "from-rose-500 to-pink-600" },
  { id: "languages",   label: "Langues",     icon: Languages,      color: "from-cyan-500 to-sky-600" },
];

export default function ResumeBuilder() {
  const { user } = useUserProfile();
  const previewRef = useRef(null);
  const [activeSection, setActiveSection] = useState("personal");
  const [skillInput, setSkillInput] = useState("");
  const [resume, setResume] = useState(() => ({
    ...emptyResume,
    personal: { ...emptyResume.personal, fullName: user?.full_name || "", email: user?.email || "" }
  }));

  const updatePersonal = (f, v) => setResume(p => ({ ...p, personal: { ...p.personal, [f]: v } }));
  const addEducation = () => setResume(p => ({ ...p, education: [...p.education, { institution: "", degree: "", startYear: "", endYear: "" }] }));
  const updateEducation = (i, f, v) => setResume(p => ({ ...p, education: p.education.map((e, idx) => idx === i ? { ...e, [f]: v } : e) }));
  const removeEducation = (i) => setResume(p => ({ ...p, education: p.education.filter((_, idx) => idx !== i) }));
  const addExperience = () => setResume(p => ({ ...p, experience: [...p.experience, { company: "", position: "", duration: "", description: "" }] }));
  const updateExperience = (i, f, v) => setResume(p => ({ ...p, experience: p.experience.map((e, idx) => idx === i ? { ...e, [f]: v } : e) }));
  const removeExperience = (i) => setResume(p => ({ ...p, experience: p.experience.filter((_, idx) => idx !== i) }));
  const addSkill = () => { if (skillInput.trim() && !resume.skills.includes(skillInput.trim())) { setResume(p => ({ ...p, skills: [...p.skills, skillInput.trim()] })); setSkillInput(""); } };
  const removeSkill = (i) => setResume(p => ({ ...p, skills: p.skills.filter((_, idx) => idx !== i) }));
  const addLanguage = () => setResume(p => ({ ...p, languages: [...p.languages, { name: "", level: "B1" }] }));
  const updateLanguage = (i, f, v) => setResume(p => ({ ...p, languages: p.languages.map((l, idx) => idx === i ? { ...l, [f]: v } : l) }));
  const removeLanguage = (i) => setResume(p => ({ ...p, languages: p.languages.filter((_, idx) => idx !== i) }));

  const handlePrint = () => {
    const el = previewRef.current;
    if (!el) return;
    const win = window.open('', '_blank');
    win.document.write(`<html><head><title>CV - ${resume.personal.fullName || 'Mon CV'}</title>
    <style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:'Segoe UI',sans-serif;color:#1a1a1a;line-height:1.5;padding:40px;max-width:800px;margin:0 auto}
    h1{font-size:26px;font-weight:700;color:#1e3a5f;margin-bottom:4px}h2{font-size:13px;font-weight:700;color:#1e3a5f;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #1e3a5f;padding-bottom:4px;margin-top:18px;margin-bottom:8px}
    .contact{color:#555;font-size:12px;margin-bottom:14px}.entry{margin-bottom:10px}.entry-header{display:flex;justify-content:space-between;align-items:baseline}
    .entry-title{font-weight:600;font-size:14px}.entry-sub{font-size:12px;color:#555}.entry-date{font-size:11px;color:#777}.entry-desc{font-size:12px;color:#444;margin-top:3px}
    .skills{display:flex;flex-wrap:wrap;gap:5px}.skill{background:#e8eef5;color:#1e3a5f;padding:2px 9px;border-radius:3px;font-size:11px}.langs{display:flex;flex-wrap:wrap;gap:12px}.lang{font-size:12px}
    @media print{body{padding:20px}}</style></head><body>${el.innerHTML}<script>window.onload=function(){window.print();window.close()}<\/script></body></html>`);
    win.document.close();
  };

  const currentSection = sections.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <SEO title="Créer un CV - FrancePrepAcademy" description="Créez votre CV professionnel gratuitement." canonical="/resumebuilder" noindex={true} />

      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-xs mb-3 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" /> Créateur de CV professionnel
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Mon CV en français</h1>
            <p className="text-blue-100">Remplissez vos infos et téléchargez votre CV au format PDF</p>
          </div>
          <Button onClick={handlePrint} className="hidden sm:flex bg-white text-indigo-900 hover:bg-gray-50 font-bold rounded-xl shadow-lg px-6">
            <Printer className="w-4 h-4 mr-2" /> Télécharger PDF
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* ── LEFT: Editor ── */}
          <div>
            {/* Section tabs */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
              {sections.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveSection(s.id)}
                  className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl text-xs font-semibold transition-all border-2 ${
                    activeSection === s.id
                      ? `bg-gradient-to-br ${s.color} text-white border-transparent shadow-md`
                      : "bg-white text-gray-500 border-gray-100 hover:border-indigo-200 hover:text-indigo-600"
                  }`}
                >
                  <s.icon className="w-4 h-4" />
                  {s.label}
                </button>
              ))}
            </div>

            {/* Section header */}
            <div className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${currentSection?.color} text-white mb-4`}>
              {currentSection && <currentSection.icon className="w-5 h-5" />}
              <h2 className="font-bold">
                {activeSection === "personal" && "Informations personnelles"}
                {activeSection === "objective" && "Objectif professionnel"}
                {activeSection === "education" && "Formation académique"}
                {activeSection === "experience" && "Expérience professionnelle"}
                {activeSection === "skills" && "Compétences"}
                {activeSection === "languages" && "Langues"}
              </h2>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4"
              >

                {/* Personal */}
                {activeSection === "personal" && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      {[["Nom complet", "fullName", "Jean Dupont"], ["Email", "email", "jean@email.com"], ["Téléphone", "phone", "+33 6 12 34 56 78"], ["LinkedIn (optionnel)", "linkedin", "linkedin.com/in/jean"]].map(([label, field, placeholder]) => (
                        <div key={field}>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">{label}</label>
                          <Input value={resume.personal[field]} onChange={e => updatePersonal(field, e.target.value)} placeholder={placeholder} className="rounded-xl border-gray-200 focus:border-indigo-400" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Adresse</label>
                      <Input value={resume.personal.address} onChange={e => updatePersonal("address", e.target.value)} placeholder="Paris, France" className="rounded-xl border-gray-200 focus:border-indigo-400" />
                    </div>
                  </>
                )}

                {/* Objective */}
                {activeSection === "objective" && (
                  <>
                    <Textarea value={resume.objective} onChange={e => setResume(p => ({ ...p, objective: e.target.value }))} placeholder="Décrivez brièvement votre objectif de carrière, vos motivations et ce que vous recherchez comme poste..." rows={5} className="rounded-xl border-gray-200 focus:border-purple-400 resize-none" />
                    <p className="text-xs text-gray-400">💡 2 à 3 phrases courtes qui résument votre profil et vos ambitions professionnelles.</p>
                  </>
                )}

                {/* Education */}
                {activeSection === "education" && (
                  <>
                    {resume.education.length === 0 && (
                      <div className="text-center py-8 text-gray-400">
                        <GraduationCap className="w-10 h-10 mx-auto mb-2 opacity-30" />
                        <p className="text-sm">Aucune formation. Cliquez sur "Ajouter" pour commencer.</p>
                      </div>
                    )}
                    {resume.education.map((edu, idx) => (
                      <div key={idx} className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-emerald-700">Formation {idx + 1}</span>
                          <button onClick={() => removeEducation(idx)} className="text-red-400 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Input placeholder="Établissement" value={edu.institution} onChange={e => updateEducation(idx, "institution", e.target.value)} className="rounded-lg text-sm" />
                          <Input placeholder="Diplôme / Titre" value={edu.degree} onChange={e => updateEducation(idx, "degree", e.target.value)} className="rounded-lg text-sm" />
                          <Input placeholder="Année début" value={edu.startYear} onChange={e => updateEducation(idx, "startYear", e.target.value)} className="rounded-lg text-sm" />
                          <Input placeholder="Année fin" value={edu.endYear} onChange={e => updateEducation(idx, "endYear", e.target.value)} className="rounded-lg text-sm" />
                        </div>
                      </div>
                    ))}
                    <Button onClick={addEducation} variant="outline" className="w-full rounded-xl border-dashed border-emerald-300 text-emerald-600 hover:bg-emerald-50">
                      <Plus className="w-4 h-4 mr-2" /> Ajouter une formation
                    </Button>
                  </>
                )}

                {/* Experience */}
                {activeSection === "experience" && (
                  <>
                    {resume.experience.length === 0 && (
                      <div className="text-center py-8 text-gray-400">
                        <Briefcase className="w-10 h-10 mx-auto mb-2 opacity-30" />
                        <p className="text-sm">Aucune expérience. Cliquez sur "Ajouter" pour commencer.</p>
                      </div>
                    )}
                    {resume.experience.map((exp, idx) => (
                      <div key={idx} className="p-4 bg-orange-50 border border-orange-100 rounded-xl space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-orange-700">Expérience {idx + 1}</span>
                          <button onClick={() => removeExperience(idx)} className="text-red-400 hover:text-red-600 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Input placeholder="Entreprise" value={exp.company} onChange={e => updateExperience(idx, "company", e.target.value)} className="rounded-lg text-sm" />
                          <Input placeholder="Poste / Titre" value={exp.position} onChange={e => updateExperience(idx, "position", e.target.value)} className="rounded-lg text-sm" />
                        </div>
                        <Input placeholder="Durée (ex : Jan 2023 — Déc 2024)" value={exp.duration} onChange={e => updateExperience(idx, "duration", e.target.value)} className="rounded-lg text-sm" />
                        <Textarea placeholder="Décrivez vos missions et réalisations principales..." value={exp.description} onChange={e => updateExperience(idx, "description", e.target.value)} rows={3} className="rounded-lg text-sm resize-none" />
                      </div>
                    ))}
                    <Button onClick={addExperience} variant="outline" className="w-full rounded-xl border-dashed border-orange-300 text-orange-600 hover:bg-orange-50">
                      <Plus className="w-4 h-4 mr-2" /> Ajouter une expérience
                    </Button>
                  </>
                )}

                {/* Skills */}
                {activeSection === "skills" && (
                  <>
                    <div className="flex gap-2">
                      <Input value={skillInput} onChange={e => setSkillInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addSkill())} placeholder="Ex: Excel, Photoshop, Python, Communication..." className="rounded-xl border-gray-200 flex-1" />
                      <Button onClick={addSkill} disabled={!skillInput.trim()} className="rounded-xl bg-rose-600 hover:bg-rose-700 px-4">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    {resume.skills.length === 0 ? (
                      <p className="text-xs text-gray-400 text-center py-4">Tapez une compétence et appuyez Entrée ou cliquez +</p>
                    ) : (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {resume.skills.map((skill, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 border border-rose-200 px-3 py-1 rounded-full text-sm font-medium">
                            {skill}
                            <button onClick={() => removeSkill(idx)} className="hover:text-red-600 transition-colors">
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </>
                )}

                {/* Languages */}
                {activeSection === "languages" && (
                  <>
                    {resume.languages.length === 0 && (
                      <div className="text-center py-8 text-gray-400">
                        <Languages className="w-10 h-10 mx-auto mb-2 opacity-30" />
                        <p className="text-sm">Aucune langue ajoutée.</p>
                      </div>
                    )}
                    {resume.languages.map((lang, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-cyan-50 border border-cyan-100 rounded-xl">
                        <Input className="flex-1 rounded-lg text-sm" placeholder="Langue (ex: Français)" value={lang.name} onChange={e => updateLanguage(idx, "name", e.target.value)} />
                        <select className="h-10 px-3 rounded-lg border border-gray-200 text-sm bg-white" value={lang.level} onChange={e => updateLanguage(idx, "level", e.target.value)}>
                          <option value="A1">A1 - Débutant</option>
                          <option value="A2">A2 - Élémentaire</option>
                          <option value="B1">B1 - Intermédiaire</option>
                          <option value="B2">B2 - Avancé</option>
                          <option value="C1">C1 - Courant</option>
                          <option value="C2">C2 - Bilingue</option>
                          <option value="native">Langue maternelle</option>
                        </select>
                        <button onClick={() => removeLanguage(idx)} className="text-red-400 hover:text-red-600 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <Button onClick={addLanguage} variant="outline" className="w-full rounded-xl border-dashed border-cyan-300 text-cyan-600 hover:bg-cyan-50">
                      <Plus className="w-4 h-4 mr-2" /> Ajouter une langue
                    </Button>
                  </>
                )}

              </motion.div>
            </AnimatePresence>

            {/* Nav buttons */}
            <div className="flex justify-between mt-4">
              {sections.findIndex(s => s.id === activeSection) > 0 && (
                <Button variant="outline" onClick={() => setActiveSection(sections[sections.findIndex(s => s.id === activeSection) - 1].id)} className="rounded-xl">
                  ← Précédent
                </Button>
              )}
              {sections.findIndex(s => s.id === activeSection) < sections.length - 1 && (
                <Button onClick={() => setActiveSection(sections[sections.findIndex(s => s.id === activeSection) + 1].id)} className="rounded-xl bg-indigo-600 hover:bg-indigo-700 ml-auto">
                  Suivant <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          </div>

          {/* ── RIGHT: Live Preview ── */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900 flex items-center gap-2">
                <Eye className="w-5 h-5 text-indigo-500" />
                Aperçu en direct
              </h2>
              <div className="flex gap-2">
                <Button size="sm" onClick={handlePrint} className="rounded-xl bg-indigo-600 hover:bg-indigo-700">
                  <Download className="w-4 h-4 mr-1.5" /> PDF
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-2xl border-2 border-gray-100 shadow-lg overflow-hidden">
              <div ref={previewRef} className="p-8" style={{ minHeight: 600, fontFamily: "'Segoe UI', sans-serif" }}>
                <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#1e3a5f', marginBottom: '4px' }}>
                  {resume.personal.fullName || <span style={{ color: '#ccc' }}>Votre Nom</span>}
                </h1>
                <div style={{ color: '#666', fontSize: '12px', marginBottom: '14px', lineHeight: '1.6' }}>
                  {[resume.personal.email, resume.personal.phone, resume.personal.address, resume.personal.linkedin].filter(Boolean).join(' · ')}
                </div>
                {resume.objective && (<>
                  <h2 style={{ fontSize: '11px', fontWeight: 700, color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #1e3a5f', paddingBottom: '3px', marginTop: '14px', marginBottom: '7px' }}>Objectif professionnel</h2>
                  <p style={{ fontSize: '12px', color: '#444', fontStyle: 'italic', lineHeight: '1.6' }}>{resume.objective}</p>
                </>)}
                {resume.education.length > 0 && (<>
                  <h2 style={{ fontSize: '11px', fontWeight: 700, color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #1e3a5f', paddingBottom: '3px', marginTop: '16px', marginBottom: '8px' }}>Formation</h2>
                  {resume.education.map((edu, i) => (
                    <div key={i} style={{ marginBottom: '9px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 600, fontSize: '13px' }}>{edu.degree || "—"}</span>
                        <span style={{ fontSize: '11px', color: '#888' }}>{edu.startYear}{edu.endYear ? ` — ${edu.endYear}` : ''}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#666' }}>{edu.institution}</div>
                    </div>
                  ))}
                </>)}
                {resume.experience.length > 0 && (<>
                  <h2 style={{ fontSize: '11px', fontWeight: 700, color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #1e3a5f', paddingBottom: '3px', marginTop: '16px', marginBottom: '8px' }}>Expérience professionnelle</h2>
                  {resume.experience.map((exp, i) => (
                    <div key={i} style={{ marginBottom: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontWeight: 600, fontSize: '13px' }}>{exp.position || "—"}</span>
                        <span style={{ fontSize: '11px', color: '#888' }}>{exp.duration}</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#666' }}>{exp.company}</div>
                      {exp.description && <div style={{ fontSize: '12px', color: '#555', marginTop: '3px', lineHeight: '1.5' }}>{exp.description}</div>}
                    </div>
                  ))}
                </>)}
                {resume.skills.length > 0 && (<>
                  <h2 style={{ fontSize: '11px', fontWeight: 700, color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #1e3a5f', paddingBottom: '3px', marginTop: '16px', marginBottom: '8px' }}>Compétences</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {resume.skills.map((s, i) => <span key={i} style={{ background: '#e8eef5', color: '#1e3a5f', padding: '2px 9px', borderRadius: '3px', fontSize: '11px' }}>{s}</span>)}
                  </div>
                </>)}
                {resume.languages.length > 0 && (<>
                  <h2 style={{ fontSize: '11px', fontWeight: 700, color: '#1e3a5f', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #1e3a5f', paddingBottom: '3px', marginTop: '16px', marginBottom: '8px' }}>Langues</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {resume.languages.map((l, i) => <span key={i} style={{ fontSize: '12px' }}>{l.name} — <strong style={{ color: '#1e3a5f' }}>{l.level === 'native' ? 'Langue maternelle' : l.level}</strong></span>)}
                  </div>
                </>)}
                {!resume.personal.fullName && !resume.objective && resume.education.length === 0 && (
                  <div style={{ textAlign: 'center', color: '#ccc', marginTop: '80px' }}>
                    <div style={{ fontSize: '40px', marginBottom: '8px' }}>📄</div>
                    <p style={{ fontSize: '14px' }}>Remplissez vos informations pour voir l'aperçu</p>
                  </div>
                )}
              </div>
            </div>
            <p className="text-xs text-center text-gray-400 mt-3">L'aperçu est mis à jour en temps réel</p>
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
