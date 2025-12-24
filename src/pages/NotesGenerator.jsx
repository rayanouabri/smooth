import React, { useState } from "react";
import { InvokeLLM } from "@/api/integrations";
import { User } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  FileText, Download, Copy, BookOpen, Brain, 
  GraduationCap, Calculator, Globe, Users, Zap
} from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function NotesGenerator() {
  const [topic, setTopic] = useState("");
  const [subject, setSubject] = useState("");
  const [notesType, setNotesType] = useState("comprehensive");
  const [generatedNotes, setGeneratedNotes] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const userData = await User.me();
      setUser(userData);
    } catch (error) {
      console.log("User not authenticated");
    }
  };

  const noteTypes = [
    { id: "comprehensive", name: "Comprehensive Notes", desc: "Detailed explanation with examples" },
    { id: "summary", name: "Quick Summary", desc: "Key points and highlights" },
    { id: "exam", name: "Exam Notes", desc: "Focused on exam preparation" },
    { id: "practical", name: "Practical Guide", desc: "Step-by-step implementation" }
  ];

  const subjectCategories = [
    { name: "Commerce", subjects: ["Accounting", "Business Studies", "Economics", "Statistics", "Banking", "Taxation"] },
    { name: "Science", subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Environmental Science"] },
    { name: "Arts", subjects: ["History", "Geography", "Political Science", "Psychology", "Sociology", "Philosophy"] },
    { name: "Engineering", subjects: ["Programming", "Data Structures", "Database Systems", "Software Engineering", "Networking"] },
    { name: "General", subjects: ["English", "Hindi", "Tamil", "Current Affairs", "General Knowledge", "Aptitude"] }
  ];

  const generateNotes = async () => {
    if (!topic.trim() || !subject.trim()) return;

    setIsGenerating(true);
    try {
      const userContext = user ? `Student profile: ${user.stream} student at ${user.institute}, location: ${user.location}` : "Indian student";
      
      let prompt = `Generate ${notesType} study notes on "${topic}" for ${subject}. 
      Context: ${userContext}
      
      Requirements:
      - Suitable for Indian curriculum and context
      - Include relevant examples from Indian context
      - Use clear, structured format with headings
      - Add practical applications and real-world examples
      - Include key formulas, definitions, or important points
      `;

      if (notesType === "comprehensive") {
        prompt += `
        - Provide detailed explanations
        - Include sub-topics and related concepts
        - Add diagrams descriptions where helpful
        - Include practice questions at the end`;
      } else if (notesType === "summary") {
        prompt += `
        - Focus on key points and bullet points
        - Highlight most important concepts
        - Keep it concise but comprehensive`;
      } else if (notesType === "exam") {
        prompt += `
        - Focus on exam-relevant content
        - Include likely exam questions
        - Highlight important formulas and definitions
        - Add memory techniques and mnemonics`;
      } else if (notesType === "practical") {
        prompt += `
        - Provide step-by-step instructions
        - Include practical examples and case studies
        - Focus on application and implementation`;
      }

      const response = await InvokeLLM({
        prompt: prompt,
        add_context_from_internet: true
      });

      setGeneratedNotes(response);
    } catch (error) {
      setGeneratedNotes("Sorry, there was an error generating your notes. Please try again.");
    }
    setIsGenerating(false);
  };

  const copyNotes = () => {
    navigator.clipboard.writeText(generatedNotes);
  };

  const downloadNotes = () => {
    const element = document.createElement('a');
    const file = new Blob([generatedNotes], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${topic}_${subject}_notes.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">🤖 AI Notes Generator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Generate comprehensive study notes for any subject, tailored for Indian curriculum
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-0 shadow-lg glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-600" />
                  Generate Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Topic</label>
                  <Input
                    placeholder="Enter topic (e.g., Photosynthesis, Accounting Principles)"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Subject</label>
                  <Input
                    placeholder="Enter subject (e.g., Biology, Accounting)"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Note Type</label>
                  <div className="space-y-2">
                    {noteTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`p-3 rounded-lg cursor-pointer transition-all ${
                          notesType === type.id 
                            ? 'bg-blue-100 border-blue-500 border-2' 
                            : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                        }`}
                        onClick={() => setNotesType(type.id)}
                      >
                        <div className="font-medium text-sm">{type.name}</div>
                        <div className="text-xs text-gray-600">{type.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={generateNotes}
                  disabled={!topic.trim() || !subject.trim() || isGenerating}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Generate Notes
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Subject Categories */}
            <Card className="border-0 shadow-lg glass-effect">
              <CardHeader>
                <CardTitle className="text-sm">Popular Subjects</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="Commerce" className="space-y-4">
                  <TabsList className="grid grid-cols-2 lg:grid-cols-1 gap-1">
                    {subjectCategories.map((category) => (
                      <TabsTrigger key={category.name} value={category.name} className="text-xs">
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {subjectCategories.map((category) => (
                    <TabsContent key={category.name} value={category.name} className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {category.subjects.map((subj) => (
                          <Badge
                            key={subj}
                            variant="outline"
                            className="cursor-pointer hover:bg-blue-50 text-xs"
                            onClick={() => setSubject(subj)}
                          >
                            {subj}
                          </Badge>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Notes Display */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg glass-effect h-full">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    Generated Notes
                  </CardTitle>
                  {generatedNotes && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={copyNotes}>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm" onClick={downloadNotes}>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {generatedNotes ? (
                  <div className="prose max-w-none">
                    <ReactMarkdown className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                      {generatedNotes}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg mb-2">No notes generated yet</p>
                    <p className="text-sm">Enter a topic and subject to generate comprehensive study notes</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}