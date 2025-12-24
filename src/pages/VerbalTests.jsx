import React, { useState, useEffect } from "react";
import { InvokeLLM } from "@/api/integrations";
import { Assessment } from "@/api/entities";
import { User } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, Clock, MessageCircle, Target, CheckCircle, 
  Play, RotateCcw, Trophy, PenTool, Volume2
} from "lucide-react";

export default function VerbalTests() {
  const [user, setUser] = useState(null);
  const [testType, setTestType] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState(null);
  const [pastResults, setPastResults] = useState([]);

  useEffect(() => {
    loadData();
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            completeTest();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft]);

  const loadData = async () => {
    try {
      const userData = await User.me();
      setUser(userData);

      const assessments = await Assessment.filter({ 
        user_email: userData.email,
        assessment_type: "verbal"
      });
      setPastResults(assessments);
    } catch (error) {
      console.log("Error loading data");
    }
  };

  const testTypes = [
    { 
      id: "vocabulary", 
      name: "Vocabulary", 
      desc: "Synonyms, antonyms, word meanings",
      time: 20,
      color: "bg-green-100 text-green-800",
      icon: BookOpen
    },
    { 
      id: "reading_comprehension", 
      name: "Reading Comprehension", 
      desc: "Passage-based questions",
      time: 30,
      color: "bg-blue-100 text-blue-800",
      icon: PenTool
    },
    { 
      id: "grammar", 
      name: "Grammar & Usage", 
      desc: "Sentence correction, error spotting",
      time: 25,
      color: "bg-purple-100 text-purple-800",
      icon: MessageCircle
    }
  ];

  const startTest = async (type) => {
    setTestType(type);
    setIsGenerating(true);
    
    try {
      let prompt = `Generate 15 ${type} questions suitable for Indian English proficiency tests and competitive exams.`;
      
      if (type === "vocabulary") {
        prompt += `
        Include questions on:
        - Synonyms and Antonyms
        - Word meanings in context
        - Analogies
        - Idioms and phrases
        - One-word substitutions
        Use words commonly found in Indian competitive exams.`;
      } else if (type === "reading_comprehension") {
        prompt += `
        Include:
        - 2-3 short passages (150-200 words each)
        - Questions on main idea, inference, tone
        - Detail-based questions
        - Vocabulary in context
        Topics relevant to Indian context (social issues, technology, environment, etc.)`;
      } else if (type === "grammar") {
        prompt += `
        Include questions on:
        - Subject-verb agreement
        - Tenses and verb forms
        - Prepositions
        - Articles usage
        - Sentence structure
        - Error identification and correction`;
      }
      
      prompt += `
      Each question should have:
      - Clear question statement
      - 4 options (A, B, C, D)
      - Correct answer (A, B, C, or D)
      - Brief explanation
      
      Make questions suitable for Indian English learners.`;

      const response = await InvokeLLM({
        prompt,
        response_json_schema: {
          type: "object",
          properties: {
            questions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  question: { type: "string" },
                  passage: { type: "string" },
                  options: {
                    type: "object",
                    properties: {
                      A: { type: "string" },
                      B: { type: "string" },
                      C: { type: "string" },
                      D: { type: "string" }
                    }
                  },
                  correct_answer: { type: "string" },
                  explanation: { type: "string" }
                }
              }
            }
          }
        }
      });

      setQuestions(response.questions || []);
      setCurrentQuestion(0);
      setAnswers([]);
      setSelectedAnswer("");
      setTimeLeft(testTypes.find(t => t.id === type)?.time * 60 || 1200);
      setIsActive(true);
      setResults(null);
    } catch (error) {
      console.error("Error generating test:", error);
    }
    
    setIsGenerating(false);
  };

  const nextQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setSelectedAnswer("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      completeTest();
    }
  };

  const completeTest = async () => {
    const finalAnswers = [...answers];
    if (selectedAnswer) {
      finalAnswers[currentQuestion] = selectedAnswer;
    }

    // Calculate score
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (finalAnswers[index] === question.correct_answer) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / questions.length) * 100);
    const timeTaken = Math.round((testTypes.find(t => t.id === testType)?.time * 60 - timeLeft) / 60);

    try {
      await Assessment.create({
        user_email: user.email,
        assessment_type: "verbal",
        score: score,
        max_score: 100,
        time_taken: timeTaken,
        feedback: `Completed ${testType} test with ${correctCount}/${questions.length} correct answers`,
        areas_to_improve: score < 60 ? ["Improve vocabulary", "Practice reading comprehension"] : [],
        completed_date: new Date().toISOString()
      });

      const assessments = await Assessment.filter({ 
        user_email: user.email,
        assessment_type: "verbal"
      });
      setPastResults(assessments);
    } catch (error) {
      console.error("Error saving results:", error);
    }

    setResults({
      correct: correctCount,
      total: questions.length,
      score: score,
      timeTaken: timeTaken,
      answers: finalAnswers
    });
    setIsActive(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const restartTest = () => {
    setIsActive(false);
    setResults(null);
    setQuestions([]);
    setCurrentQuestion(0);
    setAnswers([]);
    setSelectedAnswer("");
  };

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {results.score >= 80 ? "🌟" : results.score >= 60 ? "📚" : "📖"}
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Test Completed!</h1>
          </div>

          <Card className="border-0 shadow-lg glass-effect">
            <CardHeader>
              <CardTitle className="text-center">Your Verbal Ability Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{results.score}%</div>
                  <p className="text-gray-600">Score</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{results.correct}</div>
                  <p className="text-gray-600">Correct</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">{results.total - results.correct}</div>
                  <p className="text-gray-600">Incorrect</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{results.timeTaken}m</div>
                  <p className="text-gray-600">Time Taken</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Question Review:</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {questions.map((question, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium">Q{index + 1}</span>
                        <Badge className={
                          results.answers[index] === question.correct_answer 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }>
                          {results.answers[index] === question.correct_answer ? "Correct" : "Incorrect"}
                        </Badge>
                      </div>
                      {question.passage && (
                        <div className="bg-gray-50 p-3 rounded mb-2">
                          <p className="text-sm text-gray-700">{question.passage}</p>
                        </div>
                      )}
                      <p className="text-sm text-gray-700 mb-2">{question.question}</p>
                      <div className="text-xs text-gray-600">
                        <p>Your answer: <span className="font-medium">{results.answers[index] || "Not answered"}</span></p>
                        <p>Correct answer: <span className="font-medium text-green-600">{question.correct_answer}</span></p>
                        <p className="mt-1 text-blue-600">{question.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button onClick={restartTest} className="bg-blue-600 hover:bg-blue-700">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Take Another Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isActive && questions.length > 0) {
    const question = questions[currentQuestion];
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {testTypes.find(t => t.id === testType)?.name} Test
              </h1>
              <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${timeLeft < 300 ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
              </div>
              <Button variant="outline" onClick={completeTest}>
                Submit Test
              </Button>
            </div>
          </div>

          {/* Progress */}
          <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />

          {/* Question */}
          <Card className="border-0 shadow-lg glass-effect">
            <CardContent className="p-8">
              {question.passage && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">Passage:</h4>
                  <p className="text-gray-700 leading-relaxed">{question.passage}</p>
                </div>
              )}
              
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                {question.question}
              </h3>
              
              <div className="space-y-3">
                {Object.entries(question.options).map(([key, value]) => (
                  <div
                    key={key}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedAnswer === key 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedAnswer(key)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswer === key 
                          ? 'border-blue-500 bg-blue-500' 
                          : 'border-gray-300'
                      }`}>
                        {selectedAnswer === key && <CheckCircle className="w-4 h-4 text-white" />}
                      </div>
                      <span className="font-medium">{key}.</span>
                      <span>{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={!selectedAnswer}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentQuestion === questions.length - 1 ? "Submit Test" : "Next Question"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">📝 Verbal Ability Tests</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your English language skills with comprehensive verbal ability assessments
          </p>
        </div>

        {/* Test Types */}
        <div className="grid md:grid-cols-3 gap-6">
          {testTypes.map((type) => (
            <Card key={type.id} className="border-0 shadow-lg hover-lift glass-effect">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.desc}</p>
                  <Badge className={type.color}>{type.time} minutes</Badge>
                </div>
                <Button
                  onClick={() => startTest(type.id)}
                  disabled={isGenerating}
                  className="w-full bg-green-600 hover:bg-green-700 h-12"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Generating Test...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Start Test
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Study Tips */}
        <Card className="border-0 shadow-lg glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Volume2 className="w-6 h-6 text-blue-500" />
              Verbal Ability Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📚 Vocabulary Building</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Read newspapers daily</li>
                  <li>• Learn word roots and etymology</li>
                  <li>• Use flashcards for new words</li>
                  <li>• Practice synonyms and antonyms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📖 Reading Comprehension</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Read passages carefully</li>
                  <li>• Identify main ideas first</li>
                  <li>• Look for context clues</li>
                  <li>• Practice different passage types</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">✏️ Grammar & Usage</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Review basic grammar rules</li>
                  <li>• Practice error detection</li>
                  <li>• Learn common usage patterns</li>
                  <li>• Focus on sentence structure</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Past Results */}
        {pastResults.length > 0 && (
          <Card className="border-0 shadow-lg glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                Your Verbal Test History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pastResults.slice(0, 6).map((result, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">Verbal Test</span>
                      <Badge className={
                        result.score >= 80 ? "bg-green-100 text-green-800" :
                        result.score >= 60 ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }>
                        {result.score}%
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">
                      {new Date(result.completed_date).toLocaleDateString()} • {result.time_taken}min
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}