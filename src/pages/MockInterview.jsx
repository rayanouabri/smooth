import React, { useState } from "react";
import { InvokeLLM } from "@/api/integrations";
import { Assessment } from "@/api/entities";
import { User } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Users, Play, Mic, MicOff, Clock, Star, 
  CheckCircle, AlertCircle, Lightbulb, Target
} from "lucide-react";

export default function MockInterview() {
  const [user, setUser] = useState(null);
  const [interviewType, setInterviewType] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

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

  const interviewTypes = [
    { 
      id: "technical", 
      name: "Technical Interview", 
      desc: "Programming and technical questions",
      color: "bg-blue-100 text-blue-800",
      icon: "💻"
    },
    { 
      id: "hr", 
      name: "HR Interview", 
      desc: "Behavioral and situational questions",
      color: "bg-green-100 text-green-800",
      icon: "👥"
    },
    { 
      id: "case_study", 
      name: "Case Study", 
      desc: "Problem-solving and analytical questions",
      color: "bg-purple-100 text-purple-800",
      icon: "📊"
    },
    { 
      id: "group_discussion", 
      name: "Group Discussion", 
      desc: "Communication and leadership skills",
      color: "bg-orange-100 text-orange-800",
      icon: "🗣️"
    }
  ];

  const startInterview = async (type) => {
    setInterviewType(type);
    setIsGenerating(true);
    
    try {
      const userContext = user ? `Student: ${user.stream} at ${user.institute}, interests: ${user.interests?.join(', ')}, career goals: ${user.career_goals}` : "Student in India";
      
      let prompt = `Generate 5 ${type} interview questions for an Indian student. ${userContext}
      
      Make questions relevant to:`;
      
      if (type === "technical") {
        prompt += `
        - Programming concepts
        - Problem-solving abilities
        - Technical knowledge in their field
        - Indian tech industry context`;
      } else if (type === "hr") {
        prompt += `
        - Behavioral scenarios
        - Career motivation
        - Strengths and weaknesses
        - Cultural fit questions`;
      } else if (type === "case_study") {
        prompt += `
        - Analytical thinking
        - Business problem solving
        - Indian market scenarios
        - Strategic thinking`;
      } else if (type === "group_discussion") {
        prompt += `
        - Current affairs (India focus)
        - Social issues
        - Technology impact
        - Leadership scenarios`;
      }
      
      prompt += `
      
      Return as array of questions only, each question should be clear and specific.`;

      const response = await InvokeLLM({
        prompt,
        response_json_schema: {
          type: "object",
          properties: {
            questions: {
              type: "array",
              items: { type: "string" }
            }
          }
        }
      });

      setQuestions(response.questions || []);
      setCurrentQuestion(response.questions?.[0] || "");
      setQuestionIndex(0);
      setAnswers([]);
      setIsActive(true);
    } catch (error) {
      console.error("Error generating questions:", error);
    }
    
    setIsGenerating(false);
  };

  const submitAnswer = async () => {
    if (!userAnswer.trim()) return;
    
    setIsGenerating(true);
    const newAnswers = [...answers, { question: currentQuestion, answer: userAnswer }];
    setAnswers(newAnswers);
    
    try {
      // Generate feedback for this answer
      const feedbackResponse = await InvokeLLM({
        prompt: `Evaluate this interview answer and provide constructive feedback:
        
        Question: "${currentQuestion}"
        Answer: "${userAnswer}"
        Interview Type: ${interviewType}
        
        Provide:
        1. What was good about the answer
        2. Areas for improvement
        3. Suggestions for better response
        4. Score out of 10
        
        Be encouraging and constructive.`,
        response_json_schema: {
          type: "object",
          properties: {
            positive_points: { type: "array", items: { type: "string" } },
            improvement_areas: { type: "array", items: { type: "string" } },
            suggestions: { type: "array", items: { type: "string" } },
            score: { type: "number" },
            overall_feedback: { type: "string" }
          }
        }
      });
      
      setFeedback(feedbackResponse);
    } catch (error) {
      console.error("Error generating feedback:", error);
    }
    
    setUserAnswer("");
    setIsGenerating(false);
  };

  const nextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setCurrentQuestion(questions[questionIndex + 1]);
      setFeedback("");
    } else {
      completeInterview();
    }
  };

  const completeInterview = async () => {
    try {
      const avgScore = answers.length > 0 ? 
        answers.reduce((sum, ans, idx) => sum + (feedback?.score || 7), 0) / answers.length : 0;
      
      await Assessment.create({
        user_email: user.email,
        assessment_type: "mock_interview",
        score: Math.round(avgScore),
        max_score: 10,
        time_taken: 30, // Approximate
        feedback: `Completed ${interviewType} interview with ${answers.length} questions`,
        areas_to_improve: feedback?.improvement_areas || [],
        completed_date: new Date().toISOString()
      });
      
      setIsActive(false);
    } catch (error) {
      console.error("Error saving assessment:", error);
    }
  };

  if (!isActive) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gradient">🎤 Mock Interview Practice</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practice interviews with AI-powered questions and get instant feedback
            </p>
          </div>

          {/* Interview Types */}
          <div className="grid md:grid-cols-2 gap-6">
            {interviewTypes.map((type) => (
              <Card key={type.id} className="border-0 shadow-lg hover-lift glass-effect cursor-pointer">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-6xl mb-4">{type.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                    <p className="text-gray-600 mb-4">{type.desc}</p>
                    <Badge className={type.color}>{type.name}</Badge>
                  </div>
                  <Button
                    onClick={() => startInterview(type.id)}
                    disabled={isGenerating}
                    className="w-full bg-blue-600 hover:bg-blue-700 h-12"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Preparing Questions...
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        Start Interview
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips */}
          <Card className="border-0 shadow-lg glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Interview Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Before the Interview</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Research the company and role</li>
                    <li>• Prepare examples of your achievements</li>
                    <li>• Practice common questions</li>
                    <li>• Have questions ready to ask</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">During the Interview</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Listen carefully to questions</li>
                    <li>• Provide specific examples</li>
                    <li>• Show enthusiasm and interest</li>
                    <li>• Ask clarifying questions if needed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {interviewTypes.find(t => t.id === interviewType)?.name}
            </h1>
            <p className="text-gray-600">Question {questionIndex + 1} of {questions.length}</p>
          </div>
          <Button variant="outline" onClick={() => setIsActive(false)}>
            End Interview
          </Button>
        </div>

        {/* Progress */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((questionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <Card className="border-0 shadow-lg glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              Interview Question
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg text-gray-900 leading-relaxed">
              {currentQuestion}
            </div>
          </CardContent>
        </Card>

        {/* Answer Input */}
        <Card className="border-0 shadow-lg glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Your Answer</span>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={isRecording ? "destructive" : "outline"}
                  onClick={() => setIsRecording(!isRecording)}
                >
                  {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  {isRecording ? "Stop" : "Record"}
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Type your answer here... Take your time to think through your response."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              rows={6}
              className="resize-none"
            />
            <div className="flex justify-between">
              <div className="text-sm text-gray-500">
                {userAnswer.length} characters
              </div>
              <Button
                onClick={submitAnswer}
                disabled={!userAnswer.trim() || isGenerating}
                className="bg-green-600 hover:bg-green-700"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Submit Answer
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feedback */}
        {feedback && (
          <Card className="border-0 shadow-lg glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                Feedback & Score: {feedback.score}/10
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">✅ What went well:</h4>
                <ul className="space-y-1">
                  {feedback.positive_points?.map((point, idx) => (
                    <li key={idx} className="text-gray-700">• {point}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-orange-700 mb-2">🎯 Areas to improve:</h4>
                <ul className="space-y-1">
                  {feedback.improvement_areas?.map((area, idx) => (
                    <li key={idx} className="text-gray-700">• {area}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-blue-700 mb-2">💡 Suggestions:</h4>
                <ul className="space-y-1">
                  {feedback.suggestions?.map((suggestion, idx) => (
                    <li key={idx} className="text-gray-700">• {suggestion}</li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t">
                <Button
                  onClick={nextQuestion}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {questionIndex === questions.length - 1 ? "Complete Interview" : "Next Question"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}