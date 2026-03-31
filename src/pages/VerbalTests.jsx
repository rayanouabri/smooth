import React, { useState, useCallback, useEffect } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen, Clock, CheckCircle, Play, RotateCcw, Trophy, ArrowLeft, ArrowRight
} from "lucide-react";
import ChatBot from "../components/ChatBot";

const allQuestions = [
  {
    question: "Quel est le synonyme de 'perspicace' ?",
    options: { A: "Distrait", B: "Clairvoyant", C: "Paresseux", D: "Timide" },
    correct_answer: "B",
    explanation: "'Perspicace' signifie qui a une intelligence pénétrante, capable de saisir ce qui échappe aux autres. 'Clairvoyant' en est le synonyme le plus proche."
  },
  {
    question: "Quel est l'antonyme de 'éphémère' ?",
    options: { A: "Provisoire", B: "Fugace", C: "Permanent", D: "Bref" },
    correct_answer: "C",
    explanation: "'Éphémère' signifie qui dure très peu de temps. Son contraire est 'permanent', qui dure indéfiniment."
  },
  {
    question: "Que signifie l'expression 'avoir le cafard' ?",
    options: { A: "Avoir peur des insectes", B: "Être très fatigué", C: "Être déprimé, triste", D: "Être en colère" },
    correct_answer: "C",
    explanation: "'Avoir le cafard' est une expression familière qui signifie être mélancolique, avoir des idées noires."
  },
  {
    question: "Quelle est la bonne orthographe ?",
    options: { A: "Acceuil", B: "Accueil", C: "Acueil", D: "Accueille" },
    correct_answer: "B",
    explanation: "La bonne orthographe est 'accueil' (nom masculin). Attention : 'accueille' est la forme conjuguée du verbe accueillir."
  },
  {
    question: "Complétez : 'Il faut que je ___ à l'heure.'",
    options: { A: "sois", B: "suis", C: "serai", D: "étais" },
    correct_answer: "A",
    explanation: "Après 'il faut que', on utilise le subjonctif présent. 'Sois' est la forme correcte du verbe être au subjonctif."
  },
  {
    question: "Quel mot n'appartient pas à la même famille ?",
    options: { A: "Terrestre", B: "Terrain", C: "Terrible", D: "Territoire" },
    correct_answer: "C",
    explanation: "'Terrible' vient du latin 'terrere' (effrayer), tandis que les autres mots viennent de 'terra' (terre)."
  },
  {
    question: "Que signifie 'corroborer' ?",
    options: { A: "Contredire", B: "Confirmer", C: "Compliquer", D: "Corriger" },
    correct_answer: "B",
    explanation: "'Corroborer' signifie renforcer, confirmer une affirmation, un témoignage par de nouvelles preuves."
  },
  {
    question: "Quel est le pluriel de 'un oeil' ?",
    options: { A: "Des oeils", B: "Des oeux", C: "Des yeux", D: "Des yeuxs" },
    correct_answer: "C",
    explanation: "'Un oeil' a un pluriel irrégulier : 'des yeux'. C'est l'un des pluriels les plus irréguliers du français."
  },
  {
    question: "Que signifie l'expression 'mettre la charrue avant les boeufs' ?",
    options: { A: "Travailler dur", B: "Faire les choses dans le désordre", C: "Être très organisé", D: "Abandonner un projet" },
    correct_answer: "B",
    explanation: "Cette expression signifie commencer par la fin, ne pas respecter l'ordre logique des choses."
  },
  {
    question: "Choisissez la phrase correcte :",
    options: {
      A: "Les fleurs que j'ai cueilli sont belles.",
      B: "Les fleurs que j'ai cueillis sont belles.",
      C: "Les fleurs que j'ai cueillies sont belles.",
      D: "Les fleurs que j'ai cueille sont belles."
    },
    correct_answer: "C",
    explanation: "Avec l'auxiliaire 'avoir', le participe passé s'accorde avec le COD placé avant le verbe. 'Fleurs' est féminin pluriel, donc 'cueillies'."
  }
];

export default function VerbalTests() {
  const [phase, setPhase] = useState("home");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(600);
  const [results, setResults] = useState(null);

  const completeTest = useCallback(() => {
    const finalAnswers = { ...answers };
    if (selectedAnswer) {
      finalAnswers[currentQuestion] = selectedAnswer;
    }
    let correct = 0;
    allQuestions.forEach((q, i) => {
      if (finalAnswers[i] === q.correct_answer) correct++;
    });
    setResults({
      correct,
      total: allQuestions.length,
      score: Math.round((correct / allQuestions.length) * 100),
      answers: finalAnswers
    });
    setPhase("results");
  }, [answers, selectedAnswer, currentQuestion]);

  useEffect(() => {
    if (phase !== "test") return;
    if (timeLeft <= 0) { completeTest(); return; }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [phase, timeLeft, completeTest]);

  const startTest = () => {
    setPhase("test");
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedAnswer(null);
    setTimeLeft(600);
    setResults(null);
  };

  const selectOption = (key) => {
    setSelectedAnswer(key);
    setAnswers(prev => ({ ...prev, [currentQuestion]: key }));
  };

  const goNext = () => {
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1] || null);
    } else {
      completeTest();
    }
  };

  const goPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  if (phase === "results" && results) {
    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title="Résultats - Tests verbaux" noindex={true} />
        <div className="bg-gradient-to-r from-green-900 to-emerald-800 text-white py-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Trophy className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
            <h1 className="text-3xl font-bold mb-1">Résultats du test</h1>
            <p className="text-green-200">Vocabulaire & Grammaire française</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <Card><CardContent className="p-5 text-center">
              <div className="text-3xl font-bold text-indigo-600">{results.score}%</div>
              <p className="text-xs text-gray-600">Score</p>
            </CardContent></Card>
            <Card><CardContent className="p-5 text-center">
              <div className="text-3xl font-bold text-green-600">{results.correct}</div>
              <p className="text-xs text-gray-600">Bonnes réponses</p>
            </CardContent></Card>
            <Card><CardContent className="p-5 text-center">
              <div className="text-3xl font-bold text-red-500">{results.total - results.correct}</div>
              <p className="text-xs text-gray-600">Mauvaises réponses</p>
            </CardContent></Card>
          </div>

          <Card>
            <CardHeader><CardTitle>Correction détaillée</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {allQuestions.map((q, i) => {
                const isCorrect = results.answers[i] === q.correct_answer;
                return (
                  <div key={i} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-sm">Q{i + 1}. {q.question}</span>
                      <Badge className={isCorrect ? "bg-green-600 text-white" : "bg-red-600 text-white"}>
                        {isCorrect ? "Correct" : "Incorrect"}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600 mb-1">
                      Votre réponse : <strong>{results.answers[i] ? `${results.answers[i]}. ${q.options[results.answers[i]]}` : "Pas de réponse"}</strong>
                    </p>
                    {!isCorrect && (
                      <p className="text-xs text-green-700">
                        Bonne réponse : <strong>{q.correct_answer}. {q.options[q.correct_answer]}</strong>
                      </p>
                    )}
                    <p className="text-xs text-blue-700 mt-2">{q.explanation}</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <div className="text-center">
            <Button onClick={startTest} className="bg-indigo-600 hover:bg-indigo-700">
              <RotateCcw className="w-4 h-4 mr-2" /> Refaire le test
            </Button>
          </div>
        </div>
        <ChatBot />
      </div>
    );
  }

  if (phase === "test") {
    const q = allQuestions[currentQuestion];
    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title="Test verbal en cours" noindex={true} />
        <div className="bg-gradient-to-r from-green-900 to-emerald-800 text-white py-6">
          <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">Vocabulaire & Grammaire</h1>
              <p className="text-green-200 text-sm">Question {currentQuestion + 1} sur {allQuestions.length}</p>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${timeLeft < 120 ? 'bg-red-500/30' : 'bg-white/10'}`}>
              <Clock className="w-4 h-4" />
              <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Progress value={((currentQuestion + 1) / allQuestions.length) * 100} className="h-2 mb-6" />

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">{q.question}</h3>
              <div className="space-y-3">
                {Object.entries(q.options).map(([key, value]) => (
                  <div
                    key={key}
                    onClick={() => selectOption(key)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      selectedAnswer === key
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                        selectedAnswer === key
                          ? 'border-indigo-500 bg-indigo-500 text-white'
                          : 'border-gray-300 text-gray-500'
                      }`}>
                        {key}
                      </div>
                      <span className="text-gray-800">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={goPrev} disabled={currentQuestion === 0}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Précédent
            </Button>
            <Button onClick={goNext} disabled={!selectedAnswer} className="bg-indigo-600 hover:bg-indigo-700">
              {currentQuestion === allQuestions.length - 1 ? "Terminer" : "Suivant"} <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
        <ChatBot />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Tests verbaux - FrancePrepAcademy"
        description="Testez vos compétences en vocabulaire et grammaire française."
        canonical="/verbaltests"
        noindex={true}
      />
      <div className="bg-gradient-to-r from-green-900 to-emerald-800 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-1">Tests verbaux</h1>
          <p className="text-green-200">Vocabulaire, grammaire et expressions françaises</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Card>
          <CardContent className="p-8 text-center space-y-4">
            <BookOpen className="w-14 h-14 text-green-600 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-900">Vocabulaire & Grammaire française</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              10 questions sur les synonymes, antonymes, expressions idiomatiques, orthographe et grammaire.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 minutes</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 10 questions</span>
            </div>
            <Button onClick={startTest} size="lg" className="bg-green-600 hover:bg-green-700 mt-4">
              <Play className="w-5 h-5 mr-2" /> Commencer le test
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Conseils pour progresser</CardTitle></CardHeader>
          <CardContent className="text-sm text-gray-700 space-y-2">
            <p>- Lisez régulièrement des articles et livres en français pour enrichir votre vocabulaire.</p>
            <p>- Apprenez les racines latines et grecques des mots pour mieux comprendre leur sens.</p>
            <p>- Pratiquez les expressions idiomatiques dans leur contexte pour les mémoriser.</p>
            <p>- Révisez les règles d'accord du participe passé et du subjonctif.</p>
          </CardContent>
        </Card>
      </div>
      <ChatBot />
    </div>
  );
}
