
import React, { useState, useEffect } from "react";
import { InvokeLLM } from "@/api/integrations";
import { Assessment } from "@/api/entities";
import { User } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Target, Clock, Brain, Eye, CheckCircle, 
  Play, RotateCcw, Trophy, Search, Filter
} from "lucide-react";

export default function CriticalThinking() {
  const [user, setUser] = useState(null);
  const [testType, setTestType] = useState("");
  const [scenarios, setScenarios] = useState([]);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [responses, setResponses] = useState([]);
  const [currentResponse, setCurrentResponse] = useState("");
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
        assessment_type: "critical_thinking"
      });
      setPastResults(assessments);
    } catch (error) {
      console.log("Error loading data");
    }
  };

  const testTypes = [
    { 
      id: "argument_analysis", 
      name: "Argument Analysis", 
      desc: "Evaluate reasoning and identify fallacies",
      time: 35,
      color: "bg-blue-100 text-blue-800",
      icon: Search
    },
    { 
      id: "ethical_dilemmas", 
      name: "Ethical Reasoning", 
      desc: "Navigate moral and ethical scenarios",
      time: 40,
      color: "bg-green-100 text-green-800",
      icon: Target
    },
    { 
      id: "assumption_testing", 
      name: "Assumption Analysis", 
      desc: "Question assumptions and biases",
      time: 30,
      color: "bg-purple-100 text-purple-800",
      icon: Filter
    }
  ];

  const startTest = async (type) => {
    setTestType(type);
    setIsGenerating(true);
    
    try {
      let prompt = `Generate 6 ${type} critical thinking scenarios for Indian students and professionals.`;
      
      if (type === "argument_analysis") {
        prompt += `
        Include scenarios that test:
        - Identifying logical fallacies
        - Evaluating evidence quality
        - Recognizing bias and assumptions
        - Assessing argument strength
        - Distinguishing facts from opinions
        Use real-world Indian contexts (politics, business, social issues).`;
      } else if (type === "ethical_dilemmas") {
        prompt += `
        Include ethical scenarios involving:
        - Professional ethics and integrity
        - Social responsibility decisions
        - Resource allocation dilemmas
        - Cultural sensitivity issues
        - Technology and privacy concerns
        Make scenarios relevant to Indian professional and social contexts.`;
      } else if (type === "assumption_testing") {
        prompt += `
        Include scenarios that require:
        - Identifying hidden assumptions
        - Questioning conventional thinking
        - Challenging stereotypes and biases
        - Testing hypotheses
        - Alternative perspective analysis
        Use Indian cultural and business contexts.`;
      }
      
      prompt += `
      Each scenario should have:
      - Detailed scenario description (250-300 words)
      - Key stakeholders and context
      - Questions for critical analysis
      - Evaluation criteria hints
      
      Make scenarios thought-provoking and realistic.`;

      const response = await InvokeLLM({
        prompt,
        response_json_schema: {
          type: "object",
          properties: {
            scenarios: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  description: { type: "string" },
                  context: { type: "string" },
                  stakeholders: { type: "array", items: { type: "string" } },
                  key_questions: { type: "array", items: { type: "string" } },
                  evaluation_criteria: { type: "array", items: { type: "string" } },
                  sample_response: { type: "string" }
                }
              }
            }
          }
        }
      });

      setScenarios(response.scenarios || []);
      setCurrentScenario(0);
      setResponses([]);
      setCurrentResponse("");
      setTimeLeft(testTypes.find(t => t.id === type)?.time * 60 || 2100);
      setIsActive(true);
      setResults(null);
    } catch (error) {
      console.error("Error generating test:", error);
    }
    
    setIsGenerating(false);
  };

  const nextScenario = () => {
    const newResponses = [...responses];
    newResponses[currentScenario] = currentResponse;
    setResponses(newResponses);
    setCurrentResponse("");

    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
    } else {
      completeTest();
    }
  };

  const completeTest = async () => {
    const finalResponses = [...responses];
    if (currentResponse) {
      finalResponses[currentScenario] = currentResponse;
    }

    setIsGenerating(true);

    try {
      // Evaluate responses using AI
      const evaluationPromises = scenarios.map(async (scenario, index) => {
        if (!finalResponses[index]) return { score: 0, feedback: "No response provided" };

        const response = await InvokeLLM({
          prompt: `Evaluate this critical thinking response:
          
          Scenario: ${scenario.description}
          Key Questions: ${scenario.key_questions?.join(', ')}
          Student Response: ${finalResponses[index]}
          
          Rate the response on:
          1. Analysis depth and thoroughness (0-25 points)
          2. Evidence evaluation and reasoning (0-25 points)
          3. Multiple perspective consideration (0-25 points)
          4. Conclusion quality and justification (0-25 points)
          
          Provide constructive feedback and total score out of 100.`,
          response_json_schema: {
            type: "object",
            properties: {
              analysis_score: { type: "number" },
              reasoning_score: { type: "number" },
              perspective_score: { type: "number" },
              conclusion_score: { type: "number" },
              total_score: { type: "number" },
              feedback: { type: "string" },
              strengths: { type: "array", items: { type: "string" } },
              improvements: { type: "array", items: { type: "string" } }
            }
          }
        });

        return response;
      });

      const evaluations = await Promise.all(evaluationPromises);
      const avgScore = Math.round(
        evaluations.reduce((sum, evaluation) => sum + (evaluation.total_score || 0), 0) / evaluations.length
      );
      
      const timeTaken = Math.round((testTypes.find(t => t.id === testType)?.time * 60 - timeLeft) / 60);

      await Assessment.create({
        user_email: user.email,
        assessment_type: "critical_thinking",
        score: avgScore,
        max_score: 100,
        time_taken: timeTaken,
        feedback: `Completed ${testType} critical thinking assessment`,
        areas_to_improve: avgScore < 60 ? ["Deeper analysis", "Evidence evaluation"] : [],
        completed_date: new Date().toISOString()
      });

      const assessments = await Assessment.filter({ 
        user_email: user.email,
        assessment_type: "critical_thinking"
      });
      setPastResults(assessments);

      setResults({
        evaluations,
        avgScore,
        timeTaken,
        responses: finalResponses
      });
    } catch (error) {
      console.error("Error evaluating responses:", error);
    }
    
    setIsGenerating(false);
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
    setScenarios([]);
    setCurrentScenario(0);
    setResponses([]);
    setCurrentResponse("");
  };

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {results.avgScore >= 80 ? "🎯" : results.avgScore >= 60 ? "🧠" : "💭"}
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Critical Thinking Assessment Complete!</h1>
          </div>

          <Card className="border-0 shadow-lg glass-effect">
            <CardHeader>
              <CardTitle className="text-center">Your Critical Thinking Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{results.avgScore}%</div>
                  <p className="text-gray-600">Overall Score</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{scenarios.length}</div>
                  <p className="text-gray-600">Scenarios Analyzed</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{results.timeTaken}m</div>
                  <p className="text-gray-600">Time Taken</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">
                    {Math.round(results.evaluations.reduce((sum, evaluation) => sum + (evaluation.analysis_score || 0), 0) / results.evaluations.length)}
                  </div>
                  <p className="text-gray-600">Avg Analysis</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Detailed Scenario Analysis:</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {scenarios.map((scenario, index) => {
                    const evaluation = results.evaluations[index];
                    return (
                      <div key={index} className="p-6 border rounded-lg">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-semibold text-lg">{scenario.title}</h4>
                          <Badge className={
                            evaluation?.total_score >= 80 ? "bg-green-100 text-green-800" :
                            evaluation?.total_score >= 60 ? "bg-yellow-100 text-yellow-800" :
                            "bg-red-100 text-red-800"
                          }>
                            {evaluation?.total_score || 0}/100
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-4 mb-4 text-sm">
                          <div className="text-center">
                            <div className="font-semibold text-blue-600">{evaluation?.analysis_score || 0}/25</div>
                            <p className="text-gray-600">Analysis Depth</p>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-green-600">{evaluation?.reasoning_score || 0}/25</div>
                            <p className="text-gray-600">Reasoning</p>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-purple-600">{evaluation?.perspective_score || 0}/25</div>
                            <p className="text-gray-600">Perspectives</p>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-orange-600">{evaluation?.conclusion_score || 0}/25</div>
                            <p className="text-gray-600">Conclusion</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <h5 className="font-medium text-green-700">✅ Strengths:</h5>
                            <ul className="text-sm text-gray-700">
                              {evaluation?.strengths?.map((strength, idx) => (
                                <li key={idx}>• {strength}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-orange-700">🎯 Areas for Improvement:</h5>
                            <ul className="text-sm text-gray-700">
                              {evaluation?.improvements?.map((improvement, idx) => (
                                <li key={idx}>• {improvement}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-blue-700">💬 Detailed Feedback:</h5>
                            <p className="text-sm text-gray-700">{evaluation?.feedback}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button onClick={restartTest} className="bg-blue-600 hover:bg-blue-700">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Take Another Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isActive && scenarios.length > 0) {
    const scenario = scenarios[currentScenario];
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {testTypes.find(t => t.id === testType)?.name}
              </h1>
              <p className="text-gray-600">Scenario {currentScenario + 1} of {scenarios.length}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${timeLeft < 600 ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
              </div>
              <Button variant="outline" onClick={completeTest}>
                Submit Assessment
              </Button>
            </div>
          </div>

          {/* Progress */}
          <Progress value={((currentScenario + 1) / scenarios.length) * 100} className="h-2" />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Scenario Description */}
            <Card className="border-0 shadow-lg glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-6 h-6 text-blue-600" />
                  {scenario.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Scenario:</h4>
                  <p className="text-gray-700 leading-relaxed">{scenario.description}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Context:</h4>
                  <p className="text-gray-700">{scenario.context}</p>
                </div>

                {scenario.stakeholders && scenario.stakeholders.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Stakeholders:</h4>
                    <ul className="space-y-1">
                      {scenario.stakeholders.map((stakeholder, idx) => (
                        <li key={idx} className="text-gray-700">• {stakeholder}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">🤔 Consider These Questions:</h4>
                  <ul className="space-y-1">
                    {scenario.key_questions?.map((question, idx) => (
                      <li key={idx} className="text-blue-800 text-sm">• {question}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">📋 Evaluation Criteria:</h4>
                  <ul className="space-y-1">
                    {scenario.evaluation_criteria?.map((criteria, idx) => (
                      <li key={idx} className="text-green-800 text-sm">• {criteria}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Response Area */}
            <Card className="border-0 shadow-lg glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-purple-600" />
                  Your Critical Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Provide your critical analysis of this scenario. Consider:

🔍 Analysis & Evidence:
• What are the key issues and facts?
• What evidence supports different viewpoints?
• What assumptions are being made?

💭 Multiple Perspectives:
• How do different stakeholders view this situation?
• What are the potential biases involved?
• What alternative interpretations exist?

⚖️ Evaluation & Reasoning:
• What are the strengths and weaknesses of each argument?
• How reliable are the information sources?
• What logical fallacies might be present?

🎯 Conclusion & Recommendations:
• What is your reasoned conclusion?
• What recommendations would you make?
• How would you justify your position?

Be thorough, balanced, and provide specific reasoning for your analysis."
                  value={currentResponse}
                  onChange={(e) => setCurrentResponse(e.target.value)}
                  rows={25}
                  className="resize-none"
                />
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {currentResponse.length} characters
                  </div>
                  <div className="text-sm text-gray-500">
                    Recommended: 400-600 words
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Controls */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentScenario(Math.max(0, currentScenario - 1))}
              disabled={currentScenario === 0}
            >
              Previous Scenario
            </Button>
            <Button
              onClick={nextScenario}
              disabled={!currentResponse.trim()}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {currentScenario === scenarios.length - 1 ? "Complete Assessment" : "Next Scenario"}
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
          <h1 className="text-4xl font-bold text-gradient">🎯 Critical Thinking Tests</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Develop your analytical skills with complex scenarios and ethical dilemmas
          </p>
        </div>

        {/* Test Types */}
        <div className="grid md:grid-cols-3 gap-6">
          {testTypes.map((type) => (
            <Card key={type.id} className="border-0 shadow-lg hover-lift glass-effect">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.desc}</p>
                  <Badge className={type.color}>{type.time} minutes}</Badge>
                </div>
                <Button
                  onClick={() => startTest(type.id)}
                  disabled={isGenerating}
                  className="w-full bg-blue-600 hover:bg-blue-700 h-12"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating Scenarios...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Start Assessment
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Critical Thinking Skills */}
        <Card className="border-0 shadow-lg glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-blue-500" />
              Critical Thinking Skills Framework
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Analysis</h4>
                <p className="text-gray-600 text-sm">Break down complex information and identify patterns</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Evaluation</h4>
                <p className="text-gray-600 text-sm">Assess credibility of sources and strength of arguments</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Filter className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Inference</h4>
                <p className="text-gray-600 text-sm">Draw logical conclusions from available evidence</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Reflection</h4>
                <p className="text-gray-600 text-sm">Question assumptions and consider alternative viewpoints</p>
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
                Critical Thinking Assessment History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pastResults.slice(0, 6).map((result, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">Critical Thinking</span>
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
