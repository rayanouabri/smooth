import React, { useState, useEffect } from "react";
import { InvokeLLM } from "@/api/integrations";
import { User } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  ClipboardCheck, User as UserIcon, Target, Brain, 
  BookOpen, TrendingUp, Save, Sparkles, Award
} from "lucide-react";

export default function StudentAssessment() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("assessment");
  const [formData, setFormData] = useState({
    academic_subjects: [],
    favorite_subjects: [],
    challenging_subjects: [],
    career_interests: [],
    skills_to_develop: [],
    learning_preferences: [],
    study_habits: "",
    time_availability: "",
    future_goals: "",
    current_challenges: ""
  });
  const [feedback, setFeedback] = useState(null);
  const [roadmap, setRoadmap] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const userData = await User.me();
      setUser(userData);
      
      // Pre-fill form with existing user data
      if (userData) {
        setFormData(prev => ({
          ...prev,
          career_interests: userData.interests || [],
          future_goals: userData.career_goals || "",
          skills_to_develop: userData.skills_to_improve || []
        }));
      }
    } catch (error) {
      console.log("Error loading data");
    }
    setIsLoading(false);
  };

  const subjects = {
    commerce: ["Accounting", "Business Studies", "Economics", "Statistics", "Marketing", "Finance"],
    science: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Environmental Science"],
    arts: ["History", "Geography", "Political Science", "Psychology", "Sociology", "Philosophy"],
    engineering: ["Programming", "Data Structures", "Database Systems", "Networking", "Software Engineering"],
    general: ["English", "Hindi", "Tamil", "Current Affairs", "General Knowledge"]
  };

  const careerFields = [
    "Technology & IT", "Business & Finance", "Healthcare", "Education", "Engineering",
    "Design & Creative", "Law & Legal", "Government & Public Service", "Research & Academia",
    "Entrepreneurship", "Media & Communication", "Social Work", "Arts & Entertainment"
  ];

  const learningStyles = [
    "Visual (diagrams, charts)", "Auditory (lectures, discussions)", 
    "Reading/Writing (notes, books)", "Kinesthetic (hands-on, practical)",
    "Group Learning", "Individual Study", "Online Learning", "Traditional Classroom"
  ];

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const generateFeedback = async () => {
    setIsGenerating(true);
    try {
      const response = await InvokeLLM({
        prompt: `Provide comprehensive educational feedback and guidance for this Indian student:
        
        Student Profile:
        - Name: ${user.full_name}
        - Stream: ${user.stream}
        - Institute: ${user.institute}
        - Location: ${user.location}
        
        Assessment Data:
        - Favorite subjects: ${formData.favorite_subjects.join(', ')}
        - Challenging subjects: ${formData.challenging_subjects.join(', ')}
        - Career interests: ${formData.career_interests.join(', ')}
        - Skills to develop: ${formData.skills_to_develop.join(', ')}
        - Learning preferences: ${formData.learning_preferences.join(', ')}
        - Study habits: ${formData.study_habits}
        - Time availability: ${formData.time_availability}
        - Future goals: ${formData.future_goals}
        - Current challenges: ${formData.current_challenges}
        
        Provide:
        1. Strengths analysis
        2. Areas for improvement
        3. Specific recommendations
        4. Career pathway suggestions
        5. Skills development plan
        6. Study strategy recommendations
        
        Make recommendations specific to Indian education system and job market.`,
        response_json_schema: {
          type: "object",
          properties: {
            strengths: { type: "array", items: { type: "string" } },
            improvement_areas: { type: "array", items: { type: "string" } },
            recommendations: { type: "array", items: { type: "string" } },
            career_suggestions: { type: "array", items: { type: "string" } },
            skill_development: { type: "array", items: { type: "string" } },
            study_strategies: { type: "array", items: { type: "string" } },
            overall_feedback: { type: "string" },
            motivation_message: { type: "string" }
          }
        }
      });

      setFeedback(response);
    } catch (error) {
      console.error("Error generating feedback:", error);
    }
    setIsGenerating(false);
  };

  const generateRoadmap = async () => {
    if (!feedback) return;
    
    setIsGenerating(true);
    try {
      const response = await InvokeLLM({
        prompt: `Create a detailed 12-month career roadmap for this student based on their assessment:
        
        Student: ${user.full_name} - ${user.stream} student
        Career Goals: ${formData.future_goals}
        Career Interests: ${formData.career_interests.join(', ')}
        Skills to Develop: ${formData.skills_to_develop.join(', ')}
        
        Create a month-by-month roadmap with:
        - Specific learning objectives
        - Skills to focus on
        - Projects or activities
        - Milestones and goals
        - Resources and platforms
        
        Make it practical and achievable for an Indian student.`,
        response_json_schema: {
          type: "object",
          properties: {
            roadmap: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  month: { type: "string" },
                  objectives: { type: "array", items: { type: "string" } },
                  skills_focus: { type: "array", items: { type: "string" } },
                  activities: { type: "array", items: { type: "string" } },
                  milestones: { type: "array", items: { type: "string" } },
                  resources: { type: "array", items: { type: "string" } }
                }
              }
            },
            success_metrics: { type: "array", items: { type: "string" } },
            key_advice: { type: "string" }
          }
        }
      });

      setRoadmap(response);
    } catch (error) {
      console.error("Error generating roadmap:", error);
    }
    setIsGenerating(false);
  };

  const saveAssessment = async () => {
    try {
      await User.updateMyUserData({
        interests: formData.career_interests,
        career_goals: formData.future_goals,
        skills_to_improve: formData.skills_to_develop,
        preferred_learning_style: formData.learning_preferences[0] || "visual"
      });
      console.log("Assessment saved successfully");
    } catch (error) {
      console.error("Error saving assessment:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">📋 Student Assessment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized feedback and career roadmap based on your interests and goals
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="assessment">Assessment Form</TabsTrigger>
            <TabsTrigger value="feedback" disabled={!feedback}>AI Feedback</TabsTrigger>
            <TabsTrigger value="roadmap" disabled={!roadmap}>Career Roadmap</TabsTrigger>
          </TabsList>

          <TabsContent value="assessment" className="space-y-6">
            <Card className="border-0 shadow-lg glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserIcon className="w-6 h-6 text-blue-600" />
                  Student Assessment Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Academic Subjects */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    📚 Select your favorite subjects:
                  </label>
                  <div className="space-y-4">
                    {Object.entries(subjects).map(([category, subjectList]) => (
                      <div key={category}>
                        <h4 className="font-medium text-gray-900 mb-2 capitalize">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {subjectList.map((subject) => (
                            <Badge
                              key={subject}
                              variant={formData.favorite_subjects.includes(subject) ? "default" : "outline"}
                              className="cursor-pointer hover:bg-blue-50"
                              onClick={() => handleMultiSelect("favorite_subjects", subject)}
                            >
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenging Subjects */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    ⚠️ Subjects you find challenging:
                  </label>
                  <div className="space-y-4">
                    {Object.entries(subjects).map(([category, subjectList]) => (
                      <div key={category}>
                        <h4 className="font-medium text-gray-900 mb-2 capitalize">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {subjectList.map((subject) => (
                            <Badge
                              key={subject}
                              variant={formData.challenging_subjects.includes(subject) ? "destructive" : "outline"}
                              className="cursor-pointer hover:bg-red-50"
                              onClick={() => handleMultiSelect("challenging_subjects", subject)}
                            >
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Interests */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    🎯 Career fields that interest you:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {careerFields.map((field) => (
                      <Badge
                        key={field}
                        variant={formData.career_interests.includes(field) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-blue-50"
                        onClick={() => handleMultiSelect("career_interests", field)}
                      >
                        {field}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Learning Preferences */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-3 block">
                    🧠 Your learning preferences:
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {learningStyles.map((style) => (
                      <Badge
                        key={style}
                        variant={formData.learning_preferences.includes(style) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-blue-50"
                        onClick={() => handleMultiSelect("learning_preferences", style)}
                      >
                        {style}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Text Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      📅 Daily study time availability:
                    </label>
                    <Input
                      placeholder="e.g., 2-3 hours after college"
                      value={formData.time_availability}
                      onChange={(e) => setFormData({...formData, time_availability: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                      📖 Describe your current study habits:
                    </label>
                    <Input
                      placeholder="e.g., Visual learner, prefer group study"
                      value={formData.study_habits}
                      onChange={(e) => setFormData({...formData, study_habits: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    🎓 What are your future career goals?
                  </label>
                  <Textarea
                    placeholder="Describe your career aspirations, dream job, or long-term professional goals..."
                    value={formData.future_goals}
                    onChange={(e) => setFormData({...formData, future_goals: e.target.value})}
                    rows={4}
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-2 block">
                    😰 What are your current academic or career challenges?
                  </label>
                  <Textarea
                    placeholder="Share any difficulties you're facing in studies, career confusion, or areas where you need help..."
                    value={formData.current_challenges}
                    onChange={(e) => setFormData({...formData, current_challenges: e.target.value})}
                    rows={4}
                  />
                </div>

                <div className="flex justify-between pt-6">
                  <Button variant="outline" onClick={saveAssessment}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Assessment
                  </Button>
                  <Button
                    onClick={generateFeedback}
                    disabled={isGenerating || !formData.future_goals.trim()}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Generate AI Feedback
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            {feedback && (
              <div className="grid lg:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <Award className="w-6 h-6" />
                      Your Strengths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feedback.strengths?.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">✅</span>
                          <span className="text-gray-700">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg glass-effect">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700">
                      <Target className="w-6 h-6" />
                      Areas for Improvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feedback.improvement_areas?.map((area, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1">🎯</span>
                          <span className="text-gray-700">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg glass-effect lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                      <Brain className="w-6 h-6" />
                      Personalized Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">📝 Study Strategies:</h4>
                      <ul className="space-y-1">
                        {feedback.study_strategies?.map((strategy, index) => (
                          <li key={index} className="text-gray-700">• {strategy}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">🚀 Career Suggestions:</h4>
                      <ul className="space-y-1">
                        {feedback.career_suggestions?.map((suggestion, index) => (
                          <li key={index} className="text-gray-700">• {suggestion}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">💪 Skills to Develop:</h4>
                      <ul className="space-y-1">
                        {feedback.skill_development?.map((skill, index) => (
                          <li key={index} className="text-gray-700">• {skill}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg glass-effect lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-purple-700">💜 Motivational Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic leading-relaxed">{feedback.motivation_message}</p>
                  </CardContent>
                </Card>

                <div className="lg:col-span-2 text-center">
                  <Button
                    onClick={generateRoadmap}
                    disabled={isGenerating}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Creating Roadmap...
                      </>
                    ) : (
                      <>
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Generate 12-Month Career Roadmap
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="roadmap" className="space-y-6">
            {roadmap && (
              <div className="space-y-6">
                <Card className="border-0 shadow-lg glass-effect">
                  <CardHeader>
                    <CardTitle className="text-center">🗺️ Your 12-Month Career Development Roadmap</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-center mb-6">{roadmap.key_advice}</p>
                    
                    <div className="grid gap-6">
                      {roadmap.roadmap?.map((month, index) => (
                        <Card key={index} className="border border-blue-200">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                                {index + 1}
                              </div>
                              <CardTitle className="text-lg">{month.month}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-blue-700 mb-2">🎯 Objectives:</h4>
                              <ul className="text-sm space-y-1">
                                {month.objectives?.map((obj, idx) => (
                                  <li key={idx} className="text-gray-700">• {obj}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-green-700 mb-2">💪 Skills Focus:</h4>
                              <ul className="text-sm space-y-1">
                                {month.skills_focus?.map((skill, idx) => (
                                  <li key={idx} className="text-gray-700">• {skill}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-purple-700 mb-2">📋 Activities:</h4>
                              <ul className="text-sm space-y-1">
                                {month.activities?.map((activity, idx) => (
                                  <li key={idx} className="text-gray-700">• {activity}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-orange-700 mb-2">🏆 Milestones:</h4>
                              <ul className="text-sm space-y-1">
                                {month.milestones?.map((milestone, idx) => (
                                  <li key={idx} className="text-gray-700">• {milestone}</li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Card className="border-0 bg-green-50 mt-6">
                      <CardHeader>
                        <CardTitle className="text-green-800">📊 Success Metrics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {roadmap.success_metrics?.map((metric, index) => (
                            <li key={index} className="text-green-700">• {metric}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}