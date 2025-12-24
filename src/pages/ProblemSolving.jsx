import React, { useState, useEffect } from "react";
import { me as getCurrentUser } from "@/api/auth";
import { Assessment } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Lightbulb, Clock, Puzzle, Target, CheckCircle,
  Play, RotateCcw, Trophy, Zap, Cog
} from "lucide-react";

export default function ProblemSolving() {
  const [user, setUser] = useState(null);
  const [testType, setTestType] = useState("");
  const [problems, setProblems] = useState([]);
  const [currentProblem, setCurrentProblem] = useState(0);
  const [solutions, setSolutions] = useState([]);
  const [currentSolution, setCurrentSolution] = useState("");
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
      const userData = await getCurrentUser();
      setUser(userData);

      const assessments = await Assessment.filter({
        user_email: userData.email,
        assessment_type: "problem_solving"
      });
      setPastResults(assessments);
    } catch (error) {
      console.log("Error loading data");
    }
  };

  const testTypes = [
    {
      id: "analytical",
      name: "Analytical Reasoning",
      desc: "Logic puzzles and pattern analysis",
      time: 40,
      color: "bg-purple-100 text-purple-800",
      icon: Puzzle
    },
    {
      id: "case_study",
      name: "Case Study Analysis",
      desc: "Business scenarios and solutions",
      time: 45,
      color: "bg-blue-100 text-blue-800",
      icon: Lightbulb
    },
    {
      id: "creative",
      name: "Creative Problem Solving",
      desc: "Innovation and out-of-box thinking",
      time: 35,
      color: "bg-green-100 text-green-800",
      icon: Zap
    }
  ];

  const startTest = async (type) => {
    setTestType(type);
    setIsGenerating(true);

    try {
      let prompt = `Generate 8 ${type} problem-solving scenarios suitable for Indian students and professionals.`;

      if (type === "analytical") {
        prompt += `
        Include problems on:
        - Logic puzzles and sequences
        - Pattern recognition challenges
        - Deductive reasoning scenarios
        - Mathematical logic problems
        - Systematic problem-solving cases
        Each problem should require step-by-step logical thinking.`;
      } else if (type === "case_study") {
        prompt += `
        Include business scenarios on:
        - Market analysis and strategy
        - Resource allocation problems
        - Process optimization
        - Customer service challenges
        - Indian business context (startups, traditional industries)
        Each case should require analytical thinking and practical solutions.`;
      } else if (type === "creative") {
        prompt += `
        Include creative challenges on:
        - Innovation and design thinking
        - Alternative solution generation
        - Resource constraint problems
        - Social impact solutions
        - Technology application scenarios
        Each problem should encourage out-of-the-box thinking.`;
      }

      prompt += `
      Each problem should have:
      - Clear problem statement (200-300 words)
      - Context and constraints
      - What needs to be solved
      - Expected approach hints

      Make problems realistic and relevant to Indian context.`;

      const response = await base44.integrations.Core.InvokeLLM({
        prompt,
        response_json_schema: {
          type: "object",
          properties: {
            problems: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  problem_statement: { type: "string" },
                  context: { type: "string" },
                  constraints: { type: "array", items: { type: "string" } },
                  expected_approach: { type: "string" },
                  sample_solution: { type: "string" }
                }
              }
            }
          }
        }
      });

      setProblems(response.problems || []);
      setCurrentProblem(0);
      setSolutions([]);
      setCurrentSolution("");
      setTimeLeft(testTypes.find(t => t.id === type)?.time * 60 || 2400);
      setIsActive(true);
      setResults(null);
    } catch (error) {
      console.error("Error generating test:", error);
    }

    setIsGenerating(false);
  };

  const nextProblem = () => {
    const newSolutions = [...solutions];
    newSolutions[currentProblem] = currentSolution;
    setSolutions(newSolutions);
    setCurrentSolution("");

    if (currentProblem < problems.length - 1) {
      setCurrentProblem(currentProblem + 1);
    } else {
      completeTest();
    }
  };

  const completeTest = async () => {
    const finalSolutions = [...solutions];
    if (currentSolution) {
      finalSolutions[currentProblem] = currentSolution;
    }

    setIsGenerating(true);

    try {
      // Evaluate solutions using AI
      const evaluationPromises = problems.map(async (problem, index) => {
        if (!finalSolutions[index]) return { score: 0, feedback: "No solution provided" };

        const response = await base44.integrations.Core.InvokeLLM({
          prompt: `Evaluate this problem-solving response:

          Problem: ${problem.problem_statement}
          Expected Approach: ${problem.expected_approach}
          Student Solution: ${finalSolutions[index]}

          Rate the solution on:
          1. Problem understanding (0-25 points)
          2. Approach and methodology (0-25 points)
          3. Creativity and innovation (0-25 points)
          4. Practicality and feasibility (0-25 points)

          Provide constructive feedback and total score out of 100.`,
          response_json_schema: {
            type: "object",
            properties: {
              understanding_score: { type: "number" },
              approach_score: { type: "number" },
              creativity_score: { type: "number" },
              practicality_score: { type: "number" },
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

      await base44.entities.Assessment.create({
        user_email: user.email,
        assessment_type: "problem_solving",
        score: avgScore,
        max_score: 100,
        time_taken: timeTaken,
        feedback: `Completed ${testType} problem-solving test`,
        areas_to_improve: avgScore < 60 ? ["Analytical thinking", "Solution structuring"] : [],
        completed_date: new Date().toISOString()
      });

      const assessments = await base44.entities.Assessment.filter({
        user_email: user.email,
        assessment_type: "problem_solving"
      });
      setPastResults(assessments);

      setResults({
        evaluations,
        avgScore,
        timeTaken,
        solutions: finalSolutions
      });
    } catch (error) {
      console.error("Error evaluating solutions:", error);
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
    setProblems([]);
    setCurrentProblem(0);
    setSolutions([]);
    setCurrentSolution("");
  };

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center">
            <div className="text-6xl mb-4">
              {results.avgScore >= 80 ? "🎯" : results.avgScore >= 60 ? "💡" : "🧩"}
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Problem-Solving Assessment Complete!</h1>
          </div>

          <Card className="border-0 shadow-lg glass-effect">
            <CardHeader>
              <CardTitle className="text-center">Your Problem-Solving Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{results.avgScore}%</div>
                  <p className="text-gray-600">Overall Score</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{problems.length}</div>
                  <p className="text-gray-600">Problems Solved</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">{results.timeTaken}m</div>
                  <p className="text-gray-600">Time Taken</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">
                    {Math.round(results.evaluations.reduce((sum, evaluation) => sum + (evaluation.creativity_score || 0), 0) / results.evaluations.length)}
                  </div>
                  <p className="text-gray-600">Avg Creativity</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Detailed Problem Analysis:</h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {problems.map((problem, index) => {
                    const evaluation = results.evaluations[index];
                    return (
                      <div key={index} className="p-6 border rounded-lg">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-semibold text-lg">{problem.title}</h4>
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
                            <div className="font-semibold text-blue-600">{evaluation?.understanding_score || 0}/25</div>
                            <p className="text-gray-600">Understanding</p>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-green-600">{evaluation?.approach_score || 0}/25</div>
                            <p className="text-gray-600">Approach</p>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-purple-600">{evaluation?.creativity_score || 0}/25</div>
                            <p className="text-gray-600">Creativity</p>
                          </div>
                          <div className="text-center">
                            <div className="font-semibold text-orange-600">{evaluation?.practicality_score || 0}/25</div>
                            <p className="text-gray-600">Practicality</p>
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
                            <h5 className="font-medium text-blue-700">💬 Feedback:</h5>
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
                  Take Another Test
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (isActive && problems.length > 0) {
    const problem = problems[currentProblem];
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {testTypes.find(t => t.id === testType)?.name}
              </h1>
              <p className="text-gray-600">Problem {currentProblem + 1} of {problems.length}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${timeLeft < 600 ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
              </div>
              <Button variant="outline" onClick={completeTest}>
                Submit All Solutions
              </Button>
            </div>
          </div>

          {/* Progress */}
          <Progress value={((currentProblem + 1) / problems.length) * 100} className="h-2" />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Problem Statement */}
            <Card className="border-0 shadow-lg glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Puzzle className="w-6 h-6 text-purple-600" />
                  {problem.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Problem Statement:</h4>
                  <p className="text-gray-700 leading-relaxed">{problem.problem_statement}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Context:</h4>
                  <p className="text-gray-700">{problem.context}</p>
                </div>

                {problem.constraints && problem.constraints.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Constraints:</h4>
                    <ul className="space-y-1">
                      {problem.constraints.map((constraint, idx) => (
                        <li key={idx} className="text-gray-700">• {constraint}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">💡 Approach Hint:</h4>
                  <p className="text-blue-800 text-sm">{problem.expected_approach}</p>
                </div>
              </CardContent>
            </Card>

            {/* Solution Area */}
            <Card className="border-0 shadow-lg glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                  Your Solution
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Describe your approach and solution in detail. Include:
• Problem analysis and understanding
• Step-by-step solution approach
• Reasoning behind your choices
• Implementation or action plan
• Expected outcomes or results

Be specific and thorough in your explanation."
                  value={currentSolution}
                  onChange={(e) => setCurrentSolution(e.target.value)}
                  rows={20}
                  className="resize-none"
                />

                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {currentSolution.length} characters
                  </div>
                  <div className="text-sm text-gray-500">
                    Recommended: 300-500 words
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Controls */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentProblem(Math.max(0, currentProblem - 1))}
              disabled={currentProblem === 0}
            >
              Previous Problem
            </Button>
            <Button
              onClick={nextProblem}
              disabled={!currentSolution.trim()}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {currentProblem === problems.length - 1 ? "Complete Assessment" : "Next Problem"}
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
          <h1 className="text-4xl font-bold text-gradient">🧩 Problem Solving Tests</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Challenge your analytical and creative thinking with real-world problem scenarios
          </p>
        </div>

        {/* Test Types */}
        <div className="grid md:grid-cols-3 gap-6">
          {testTypes.map((type) => (
            <Card key={type.id} className="border-0 shadow-lg hover-lift glass-effect">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
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
                  className="w-full bg-purple-600 hover:bg-purple-700 h-12"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating Problems...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Start Challenge
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Problem-Solving Framework */}
        <Card className="border-0 shadow-lg glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cog className="w-6 h-6 text-blue-500" />
              Problem-Solving Framework
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Understand</h4>
                <p className="text-gray-600 text-sm">Define the problem clearly and identify key constraints</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Analyze</h4>
                <p className="text-gray-600 text-sm">Break down the problem into smaller components</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Ideate</h4>
                <p className="text-gray-600 text-sm">Generate multiple solution approaches</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Execute</h4>
                <p className="text-gray-600 text-sm">Select the best solution and plan implementation</p>
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
                Problem-Solving History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pastResults.slice(0, 6).map((result, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">Problem-Solving Test</span>
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