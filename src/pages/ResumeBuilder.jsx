import React, { useState, useEffect } from "react";
import { Resume } from "@/api/entities";
import { User } from "@/api/entities";
import { InvokeLLM } from "@/api/integrations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  FileText, Download, Eye, Plus, Trash2, Save, 
  User as UserIcon, Briefcase, GraduationCap, Award, Zap
} from "lucide-react";

export default function ResumeBuilder() {
  const [user, setUser] = useState(null);
  const [resumes, setResumes] = useState([]);
  const [currentResume, setCurrentResume] = useState(null);
  const [activeTab, setActiveTab] = useState("templates");
  const [isGeneratingContent, setIsGeneratingContent] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const userData = await User.me();
      setUser(userData);

      const resumeData = await Resume.filter({ user_email: userData.email });
      setResumes(resumeData);
    } catch (error) {
      console.log("Error loading data");
    }
  };

  const templates = [
    { 
      id: "professional", 
      name: "Professional", 
      desc: "Clean and corporate design",
      color: "bg-blue-100 text-blue-800",
      preview: "Modern layout with clear sections"
    },
    { 
      id: "creative", 
      name: "Creative", 
      desc: "Modern and eye-catching",
      color: "bg-purple-100 text-purple-800",
      preview: "Artistic design with visual elements"
    },
    { 
      id: "minimal", 
      name: "Minimal", 
      desc: "Simple and elegant",
      color: "bg-green-100 text-green-800",
      preview: "Clean lines with focus on content"
    },
    { 
      id: "academic", 
      name: "Academic", 
      desc: "Perfect for research positions",
      color: "bg-orange-100 text-orange-800",
      preview: "Detailed format for academic careers"
    }
  ];

  const createNewResume = async (templateId) => {
    const newResume = {
      user_email: user.email,
      template_id: templateId,
      personal_info: {
        full_name: user.full_name || "",
        email: user.email || "",
        phone: "",
        address: user.location || "",
        linkedin: "",
        portfolio: ""
      },
      objective: "",
      education: [],
      experience: [],
      skills: [],
      projects: [],
      certifications: []
    };

    try {
      const created = await Resume.create(newResume);
      setCurrentResume(created);
      setActiveTab("editor");
      setResumes(prev => [created, ...prev]);
    } catch (error) {
      console.error("Error creating resume:", error);
    }
  };

  const generateContent = async (section) => {
    if (!user) return;
    
    setIsGeneratingContent(true);
    try {
      let prompt = "";
      
      switch (section) {
        case "objective":
          prompt = `Generate a professional career objective for a ${user.stream} student at ${user.institute}. 
          Student interests: ${user.interests?.join(', ')}
          Career goals: ${user.career_goals}
          Make it compelling and tailored for Indian job market.`;
          break;
        case "skills":
          prompt = `Suggest relevant skills for a ${user.stream} student interested in: ${user.interests?.join(', ')}. 
          Include both technical and soft skills relevant to Indian job market. 
          Return as comma-separated list.`;
          break;
        default:
          return;
      }

      const response = await InvokeLLM({ prompt });
      
      if (section === "objective") {
        setCurrentResume(prev => ({ ...prev, objective: response }));
      } else if (section === "skills") {
        const skillsArray = response.split(',').map(skill => skill.trim());
        setCurrentResume(prev => ({ ...prev, skills: skillsArray }));
      }
    } catch (error) {
      console.error("Error generating content:", error);
    }
    setIsGeneratingContent(false);
  };

  const saveResume = async () => {
    if (!currentResume) return;
    
    try {
      await Resume.update(currentResume.id, currentResume);
      console.log("Resume saved successfully");
    } catch (error) {
      console.error("Error saving resume:", error);
    }
  };

  const addEducation = () => {
    setCurrentResume(prev => ({
      ...prev,
      education: [...prev.education, { institution: "", degree: "", year: "", gpa: "" }]
    }));
  };

  const addExperience = () => {
    setCurrentResume(prev => ({
      ...prev,
      experience: [...prev.experience, { company: "", position: "", duration: "", description: "" }]
    }));
  };

  const addProject = () => {
    setCurrentResume(prev => ({
      ...prev,
      projects: [...prev.projects, { name: "", description: "", technologies: [], link: "" }]
    }));
  };

  const removeItem = (section, index) => {
    setCurrentResume(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  const updatePersonalInfo = (field, value) => {
    setCurrentResume(prev => ({
      ...prev,
      personal_info: { ...prev.personal_info, [field]: value }
    }));
  };

  const updateEducation = (index, field, value) => {
    setCurrentResume(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const updateExperience = (index, field, value) => {
    setCurrentResume(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) => 
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const updateProject = (index, field, value) => {
    setCurrentResume(prev => ({
      ...prev,
      projects: prev.projects.map((proj, i) => 
        i === index ? { ...proj, [field]: value } : proj
      )
    }));
  };

  if (activeTab === "editor" && currentResume) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <Button variant="outline" onClick={() => setActiveTab("templates")}>
                ← Back to Templates
              </Button>
              <h1 className="text-2xl font-bold text-gray-900 mt-2">Resume Editor</h1>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={saveResume}>
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Editor Panel */}
            <div className="space-y-6">
              {/* Personal Information */}
              <Card className="border-0 shadow-lg glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserIcon className="w-5 h-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name"
                      value={currentResume.personal_info?.full_name || ""}
                      onChange={(e) => updatePersonalInfo("full_name", e.target.value)}
                    />
                    <Input
                      placeholder="Email"
                      value={currentResume.personal_info?.email || ""}
                      onChange={(e) => updatePersonalInfo("email", e.target.value)}
                    />
                    <Input
                      placeholder="Phone"
                      value={currentResume.personal_info?.phone || ""}
                      onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                    />
                    <Input
                      placeholder="LinkedIn"
                      value={currentResume.personal_info?.linkedin || ""}
                      onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
                    />
                  </div>
                  <Textarea
                    placeholder="Address"
                    value={currentResume.personal_info?.address || ""}
                    onChange={(e) => updatePersonalInfo("address", e.target.value)}
                  />
                </CardContent>
              </Card>

              {/* Objective */}
              <Card className="border-0 shadow-lg glass-effect">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Career Objective</CardTitle>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => generateContent("objective")}
                      disabled={isGeneratingContent}
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      AI Generate
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Write your career objective..."
                    value={currentResume.objective || ""}
                    onChange={(e) => setCurrentResume(prev => ({ ...prev, objective: e.target.value }))}
                    rows={4}
                  />
                </CardContent>
              </Card>

              {/* Education */}
              <Card className="border-0 shadow-lg glass-effect">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5" />
                      Education
                    </CardTitle>
                    <Button size="sm" onClick={addEducation}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentResume.education?.map((edu, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Education {index + 1}</h4>
                        <Button size="sm" variant="ghost" onClick={() => removeItem("education", index)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          placeholder="Institution"
                          value={edu.institution}
                          onChange={(e) => updateEducation(index, "institution", e.target.value)}
                        />
                        <Input
                          placeholder="Degree"
                          value={edu.degree}
                          onChange={(e) => updateEducation(index, "degree", e.target.value)}
                        />
                        <Input
                          placeholder="Year"
                          value={edu.year}
                          onChange={(e) => updateEducation(index, "year", e.target.value)}
                        />
                        <Input
                          placeholder="GPA/Percentage"
                          value={edu.gpa}
                          onChange={(e) => updateEducation(index, "gpa", e.target.value)}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="border-0 shadow-lg glass-effect">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Experience
                    </CardTitle>
                    <Button size="sm" onClick={addExperience}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {currentResume.experience?.map((exp, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Experience {index + 1}</h4>
                        <Button size="sm" variant="ghost" onClick={() => removeItem("experience", index)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          placeholder="Company"
                          value={exp.company}
                          onChange={(e) => updateExperience(index, "company", e.target.value)}
                        />
                        <Input
                          placeholder="Position"
                          value={exp.position}
                          onChange={(e) => updateExperience(index, "position", e.target.value)}
                        />
                      </div>
                      <Input
                        placeholder="Duration (e.g., Jan 2023 - Present)"
                        value={exp.duration}
                        onChange={(e) => updateExperience(index, "duration", e.target.value)}
                      />
                      <Textarea
                        placeholder="Job description and achievements"
                        value={exp.description}
                        onChange={(e) => updateExperience(index, "description", e.target.value)}
                        rows={3}
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Preview Panel */}
            <div>
              <Card className="border-0 shadow-lg glass-effect h-full">
                <CardHeader>
                  <CardTitle>Resume Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white p-6 shadow-sm border rounded-lg h-full">
                    <div className="space-y-6">
                      {/* Personal Info Preview */}
                      <div className="text-center border-b pb-4">
                        <h1 className="text-2xl font-bold text-gray-900">
                          {currentResume.personal_info?.full_name || "Your Name"}
                        </h1>
                        <p className="text-gray-600">
                          {currentResume.personal_info?.email} | {currentResume.personal_info?.phone}
                        </p>
                        <p className="text-gray-600">{currentResume.personal_info?.address}</p>
                      </div>

                      {/* Objective Preview */}
                      {currentResume.objective && (
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Career Objective</h3>
                          <p className="text-gray-700 text-sm">{currentResume.objective}</p>
                        </div>
                      )}

                      {/* Education Preview */}
                      {currentResume.education?.length > 0 && (
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
                          {currentResume.education.map((edu, index) => (
                            <div key={index} className="mb-2">
                              <div className="flex justify-between">
                                <span className="font-medium">{edu.degree}</span>
                                <span className="text-sm text-gray-600">{edu.year}</span>
                              </div>
                              <p className="text-sm text-gray-600">{edu.institution}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">📄 AI Resume Builder</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create professional resumes with AI-powered content generation
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="templates">Choose Template</TabsTrigger>
            <TabsTrigger value="my-resumes">My Resumes</TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {templates.map((template) => (
                <Card key={template.id} className="border-0 shadow-lg hover-lift glass-effect">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-12 h-12 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{template.name}</h3>
                      <p className="text-sm text-gray-600">{template.desc}</p>
                      <Badge className={`mt-2 ${template.color}`}>{template.preview}</Badge>
                    </div>
                    <Button 
                      onClick={() => createNewResume(template.id)}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Use Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-resumes" className="space-y-6">
            {resumes.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resumes.map((resume) => (
                  <Card key={resume.id} className="border-0 shadow-lg hover-lift glass-effect">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {resume.personal_info?.full_name || "Untitled Resume"}
                          </h3>
                          <Badge className="mt-1">{resume.template_id}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Created {new Date(resume.created_date).toLocaleDateString()}
                      </p>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          onClick={() => {
                            setCurrentResume(resume);
                            setActiveTab("editor");
                          }}
                          className="flex-1"
                        >
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No resumes yet</h3>
                <p className="text-gray-600">Create your first resume using our templates</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}