import React, { useState, useEffect, useCallback } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Clock, Brain, Target, CheckCircle,
  Play, RotateCcw, Trophy, BookOpen, Globe, Calculator, ArrowRight
} from "lucide-react";
import ChatBot from "../components/ChatBot";

// Banque de questions intégrée
const questionBank = {
  culture_france: {
    name: "Culture & vie en France",
    desc: "Testez vos connaissances sur la culture, les institutions et la vie quotidienne en France",
    icon: Globe,
    color: "bg-blue-100 text-blue-700",
    time: 10,
    questions: [
      { q: "Quelle est la devise de la République française ?", options: { A: "Unité, Force, Progrès", B: "Liberté, Égalité, Fraternité", C: "Paix, Justice, Travail", D: "Honneur, Patrie, Devoir" }, correct: "B", explanation: "La devise de la France est 'Liberté, Égalité, Fraternité', adoptée pendant la Révolution française." },
      { q: "Quel organisme gère l'assurance maladie en France ?", options: { A: "La CAF", B: "Pôle Emploi", C: "La CPAM (Sécurité sociale)", D: "La Banque de France" }, correct: "C", explanation: "La CPAM (Caisse Primaire d'Assurance Maladie) gère l'assurance maladie dans le cadre de la Sécurité sociale." },
      { q: "Qu'est-ce que la CAF ?", options: { A: "Un service de transport", B: "La Caisse d'Allocations Familiales", C: "Un réseau de cafés", D: "Un centre de formation" }, correct: "B", explanation: "La CAF (Caisse d'Allocations Familiales) verse des aides sociales comme les APL, les allocations familiales, etc." },
      { q: "Que signifie APL ?", options: { A: "Aide Personnalisée au Logement", B: "Allocation Pour le Loyer", C: "Assurance Pour le Logement", D: "Aide Première Location" }, correct: "A", explanation: "L'APL (Aide Personnalisée au Logement) est une aide financière pour réduire le montant du loyer." },
      { q: "Quel document est indispensable pour travailler en France en tant qu'étudiant étranger ?", options: { A: "Le permis de conduire", B: "Le titre de séjour étudiant", C: "La carte de bibliothèque", D: "Le diplôme du bac" }, correct: "B", explanation: "Le titre de séjour étudiant (ou visa long séjour valant titre de séjour) est obligatoire pour travailler légalement." },
      { q: "Combien d'heures un étudiant étranger peut-il travailler par an en France ?", options: { A: "500 heures", B: "964 heures", C: "1200 heures", D: "Illimité" }, correct: "B", explanation: "Un étudiant étranger peut travailler 964 heures par an (60% de la durée légale du travail)." },
      { q: "Qu'est-ce que Visale ?", options: { A: "Un visa étudiant", B: "Une garantie locative gratuite", C: "Une assurance santé", D: "Un titre de transport" }, correct: "B", explanation: "Visale est une caution locative gratuite proposée par Action Logement pour les jeunes et étudiants." },
      { q: "Quel est le salaire minimum (SMIC) horaire brut approximatif en France en 2024 ?", options: { A: "8,50€", B: "11,65€", C: "15,00€", D: "9,20€" }, correct: "B", explanation: "Le SMIC horaire brut est d'environ 11,65€ en 2024 (montant qui évolue chaque année)." },
      { q: "Que signifie OFII ?", options: { A: "Office Français de l'Immigration et de l'Intégration", B: "Organisation Française des Institutions Internationales", C: "Office des Formations et Initiatives Internationales", D: "Organisme de Financement des Investissements Internationaux" }, correct: "A", explanation: "L'OFII gère l'accueil et l'intégration des étrangers en France, notamment la validation du VLS-TS." },
      { q: "Quel est le numéro d'urgence européen ?", options: { A: "15", B: "17", C: "112", D: "911" }, correct: "C", explanation: "Le 112 est le numéro d'urgence européen, accessible dans tous les pays de l'UE. En France, le 15 = SAMU, 17 = Police, 18 = Pompiers." }
    ]
  },
  administration: {
    name: "Démarches administratives",
    desc: "Testez vos connaissances sur les démarches administratives essentielles en France",
    icon: BookOpen,
    color: "bg-green-100 text-green-700",
    time: 10,
    questions: [
      { q: "Que signifie VLS-TS ?", options: { A: "Visa Long Séjour - Titre de Séjour", B: "Visa Longue Scolarité - Transport Scolaire", C: "Visa Long Séjour valant Titre de Séjour", D: "Validation Longue Séjour - Travail Salarié" }, correct: "C", explanation: "Le VLS-TS (Visa Long Séjour valant Titre de Séjour) doit être validé auprès de l'OFII dans les 3 mois suivant l'arrivée." },
      { q: "Dans quel délai devez-vous valider votre VLS-TS après votre arrivée en France ?", options: { A: "1 mois", B: "3 mois", C: "6 mois", D: "1 an" }, correct: "B", explanation: "Vous devez valider votre VLS-TS dans les 3 mois suivant votre arrivée en France via la plateforme en ligne de l'OFII." },
      { q: "Qu'est-ce que la carte Vitale ?", options: { A: "Une carte de transport", B: "Une carte bancaire", C: "La carte d'assurance maladie", D: "Une carte étudiante" }, correct: "C", explanation: "La carte Vitale est la carte d'assurance maladie qui permet le remboursement des frais de santé." },
      { q: "Auprès de quel organisme faire sa demande d'APL ?", options: { A: "La mairie", B: "La CAF", C: "La préfecture", D: "La banque" }, correct: "B", explanation: "La demande d'APL se fait auprès de la CAF (Caisse d'Allocations Familiales), en ligne sur caf.fr." },
      { q: "Qu'est-ce que Campus France ?", options: { A: "Un réseau d'universités françaises", B: "L'agence de promotion de l'enseignement supérieur français", C: "Un site de recherche d'emploi", D: "Une agence immobilière étudiante" }, correct: "B", explanation: "Campus France est l'agence nationale chargée de la promotion de l'enseignement supérieur français à l'étranger." },
      { q: "Quel document faut-il pour ouvrir un compte bancaire en France ?", options: { A: "Uniquement le passeport", B: "Un justificatif de domicile et une pièce d'identité", C: "Uniquement le titre de séjour", D: "Le diplôme du bac" }, correct: "B", explanation: "Il faut généralement un justificatif de domicile, une pièce d'identité et un justificatif de statut (certificat de scolarité, etc.)." },
      { q: "Que signifie CVEC ?", options: { A: "Contribution Vie Étudiante et de Campus", B: "Carte de Validation des Études et Concours", C: "Centre de Vérification des Étudiants en Campus", D: "Certificat de Vie Étudiante Complet" }, correct: "A", explanation: "La CVEC est une contribution obligatoire de 100€ environ pour les étudiants, à payer avant l'inscription universitaire." },
      { q: "Où se rendre pour renouveler son titre de séjour ?", options: { A: "À la mairie", B: "À la préfecture ou sous-préfecture", C: "À l'ambassade", D: "À la CAF" }, correct: "B", explanation: "Le renouvellement du titre de séjour se fait à la préfecture ou sous-préfecture de votre lieu de résidence." },
      { q: "Qu'est-ce qu'une mutuelle étudiante ?", options: { A: "Un prêt étudiant", B: "Une assurance complémentaire santé", C: "Un logement étudiant", D: "Un repas au CROUS" }, correct: "B", explanation: "La mutuelle étudiante est une complémentaire santé qui rembourse la part non couverte par la Sécurité sociale." },
      { q: "Quel est le rôle du CROUS ?", options: { A: "Gérer les transports", B: "Gérer les résidences et restaurants universitaires", C: "Délivrer les visas", D: "Organiser les examens" }, correct: "B", explanation: "Le CROUS gère les résidences universitaires, les restaurants (RU), les bourses et l'aide sociale étudiante." }
    ]
  },
  logique: {
    name: "Logique & raisonnement",
    desc: "Testez votre capacité de raisonnement logique avec des exercices variés",
    icon: Brain,
    color: "bg-purple-100 text-purple-700",
    time: 15,
    questions: [
      { q: "Complétez la suite : 2, 6, 18, 54, ...", options: { A: "108", B: "162", C: "148", D: "216" }, correct: "B", explanation: "Chaque nombre est multiplié par 3 : 2×3=6, 6×3=18, 18×3=54, 54×3=162." },
      { q: "Si CHAT = 4, CHIEN = 5, alors MOUTON = ?", options: { A: "5", B: "6", C: "7", D: "8" }, correct: "B", explanation: "Le chiffre correspond au nombre de lettres du mot : MOUTON = 6 lettres." },
      { q: "Marie est plus grande que Julie. Julie est plus grande que Sophie. Qui est la plus petite ?", options: { A: "Marie", B: "Julie", C: "Sophie", D: "On ne peut pas savoir" }, correct: "C", explanation: "Marie > Julie > Sophie, donc Sophie est la plus petite." },
      { q: "Un train parcourt 120 km en 2 heures. Quelle est sa vitesse moyenne ?", options: { A: "50 km/h", B: "60 km/h", C: "80 km/h", D: "120 km/h" }, correct: "B", explanation: "Vitesse = Distance / Temps = 120 / 2 = 60 km/h." },
      { q: "Quel est l'intrus ? Pomme, Poire, Carotte, Fraise", options: { A: "Pomme", B: "Poire", C: "Carotte", D: "Fraise" }, correct: "C", explanation: "Carotte est un légume, les autres sont des fruits." },
      { q: "Si on est mercredi, quel jour sera-t-on dans 100 jours ?", options: { A: "Lundi", B: "Mardi", C: "Jeudi", D: "Vendredi" }, correct: "D", explanation: "100 ÷ 7 = 14 semaines et 2 jours. Mercredi + 2 jours = vendredi." },
      { q: "Complétez : 1, 1, 2, 3, 5, 8, ...", options: { A: "11", B: "12", C: "13", D: "14" }, correct: "C", explanation: "C'est la suite de Fibonacci : chaque nombre est la somme des deux précédents. 5+8=13." },
      { q: "Un article coûte 80€ après une réduction de 20%. Quel était son prix initial ?", options: { A: "96€", B: "100€", C: "104€", D: "120€" }, correct: "B", explanation: "80€ = 80% du prix initial. Prix initial = 80 / 0.8 = 100€." },
      { q: "Si A=1, B=2, C=3... que vaut F+R+A+N+C+E ?", options: { A: "42", B: "47", C: "52", D: "57" }, correct: "B", explanation: "F=6, R=18, A=1, N=14, C=3, E=5. Total = 6+18+1+14+3+5 = 47." },
      { q: "Dans une classe de 30 élèves, 18 parlent anglais et 12 parlent espagnol. 5 parlent les deux. Combien ne parlent ni l'un ni l'autre ?", options: { A: "3", B: "5", C: "7", D: "10" }, correct: "B", explanation: "Au moins une langue = 18+12-5 = 25. Aucune langue = 30-25 = 5." }
    ]
  },
  calcul: {
    name: "Calcul & mathématiques",
    desc: "Exercices de calcul mental et mathématiques appliquées",
    icon: Calculator,
    color: "bg-orange-100 text-orange-700",
    time: 12,
    questions: [
      { q: "Combien font 15% de 240 ?", options: { A: "32", B: "36", C: "38", D: "42" }, correct: "B", explanation: "15% de 240 = 0.15 × 240 = 36." },
      { q: "Si un loyer est de 650€/mois et les charges sont de 80€, combien payez-vous par an ?", options: { A: "7800€", B: "8400€", C: "8760€", D: "9360€" }, correct: "C", explanation: "(650 + 80) × 12 = 730 × 12 = 8760€ par an." },
      { q: "Vous gagnez 1400€ net/mois. Quelle est la part maximale recommandée pour le loyer (1/3) ?", options: { A: "400€", B: "466€", C: "500€", D: "533€" }, correct: "B", explanation: "1400 ÷ 3 = 466,67€, arrondi à 466€." },
      { q: "Un aller simple en métro coûte 2,15€. Combien économisez-vous avec un carnet de 10 tickets à 17,35€ ?", options: { A: "3,15€", B: "4,15€", C: "5,15€", D: "2,50€" }, correct: "B", explanation: "10 × 2,15 = 21,50€. Économie = 21,50 - 17,35 = 4,15€." },
      { q: "Votre bourse est de 615€/mois. Votre loyer est 450€ et vous recevez 200€ d'APL. Combien vous reste-t-il ?", options: { A: "265€", B: "365€", C: "415€", D: "165€" }, correct: "B", explanation: "Loyer réel = 450 - 200 = 250€. Reste = 615 - 250 = 365€." },
      { q: "Combien font 3/4 + 2/3 ?", options: { A: "5/7", B: "17/12", C: "5/12", D: "1" }, correct: "B", explanation: "3/4 + 2/3 = 9/12 + 8/12 = 17/12." },
      { q: "Si 1€ = 655 FCFA, combien de FCFA pour 350€ ?", options: { A: "229 250 FCFA", B: "196 500 FCFA", C: "215 000 FCFA", D: "245 750 FCFA" }, correct: "A", explanation: "350 × 655 = 229 250 FCFA." },
      { q: "Un forfait téléphone coûte 19,99€/mois. Combien coûte-t-il sur 2 ans ?", options: { A: "399,80€", B: "439,78€", C: "479,76€", D: "519,74€" }, correct: "C", explanation: "19,99 × 24 mois = 479,76€." },
      { q: "Vous parcourez 45 minutes en bus puis 15 minutes à pied. Si vous devez être à 9h, à quelle heure partez-vous ?", options: { A: "7h45", B: "8h00", C: "8h15", D: "7h30" }, correct: "B", explanation: "Temps total = 45 + 15 = 60 minutes = 1h. Départ = 9h - 1h = 8h00." },
      { q: "Un produit passe de 25€ à 30€. Quel est le pourcentage d'augmentation ?", options: { A: "15%", B: "20%", C: "25%", D: "30%" }, correct: "B", explanation: "Augmentation = 5€. Pourcentage = (5/25) × 100 = 20%." }
    ]
  }
};

export default function AptitudeTests() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [results, setResults] = useState(null);

  const completeTest = useCallback(() => {
    const finalAnswers = [...answers];
    if (selectedAnswer) {
      finalAnswers[currentQ] = selectedAnswer;
    }

    const test = questionBank[selectedTest];
    let correct = 0;
    test.questions.forEach((q, i) => {
      if (finalAnswers[i] === q.correct) correct++;
    });

    const score = Math.round((correct / test.questions.length) * 100);
    setResults({ correct, total: test.questions.length, score, answers: finalAnswers });
    setIsActive(false);
  }, [answers, selectedAnswer, currentQ, selectedTest]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          completeTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isActive, timeLeft, completeTest]);

  const startTest = (testId) => {
    setSelectedTest(testId);
    setCurrentQ(0);
    setAnswers([]);
    setSelectedAnswer("");
    setTimeLeft(questionBank[testId].time * 60);
    setIsActive(true);
    setResults(null);
  };

  const nextQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = selectedAnswer;
    setAnswers(newAnswers);
    setSelectedAnswer("");

    const test = questionBank[selectedTest];
    if (currentQ < test.questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Complete with this last answer
      const finalAnswers = [...newAnswers];
      let correct = 0;
      test.questions.forEach((q, i) => {
        if (finalAnswers[i] === q.correct) correct++;
      });
      const score = Math.round((correct / test.questions.length) * 100);
      setResults({ correct, total: test.questions.length, score, answers: finalAnswers });
      setIsActive(false);
    }
  };

  const resetTest = () => {
    setSelectedTest(null);
    setIsActive(false);
    setResults(null);
    setCurrentQ(0);
    setAnswers([]);
    setSelectedAnswer("");
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // RESULTS SCREEN
  if (results && selectedTest) {
    const test = questionBank[selectedTest];
    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title="Résultats du test - FrancePrepAcademy" noindex={true} />
        <div className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-5xl mb-3">
              {results.score >= 80 ? "🏆" : results.score >= 60 ? "👏" : "💪"}
            </div>
            <h1 className="text-3xl font-bold mb-2">Test terminé !</h1>
            <p className="text-blue-200">
              {results.score >= 80 ? "Excellent travail !" : results.score >= 60 ? "Bon résultat, continuez !" : "Continuez à vous entraîner !"}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Score overview */}
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6 text-center">
                <div className={`text-3xl font-bold ${results.score >= 80 ? 'text-green-600' : results.score >= 60 ? 'text-orange-600' : 'text-red-600'}`}>
                  {results.score}%
                </div>
                <p className="text-sm text-gray-600 mt-1">Score</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600">{results.correct}</div>
                <p className="text-sm text-gray-600 mt-1">Bonnes réponses</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-red-500">{results.total - results.correct}</div>
                <p className="text-sm text-gray-600 mt-1">Erreurs</p>
              </CardContent>
            </Card>
          </div>

          {/* Question review */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Correction détaillée</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[500px] overflow-y-auto">
              {test.questions.map((question, idx) => {
                const isCorrect = results.answers[idx] === question.correct;
                return (
                  <div key={idx} className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-900">Q{idx + 1}. {question.q}</span>
                      <Badge className={isCorrect ? "bg-green-600 text-white" : "bg-red-600 text-white"}>
                        {isCorrect ? "Correct" : "Incorrect"}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-700 space-y-1 ml-2">
                      <p>Votre réponse : <strong>{results.answers[idx] ? `${results.answers[idx]}. ${question.options[results.answers[idx]]}` : "Pas de réponse"}</strong></p>
                      {!isCorrect && (
                        <p className="text-green-700">Bonne réponse : <strong>{question.correct}. {question.options[question.correct]}</strong></p>
                      )}
                      <p className="text-gray-600 italic mt-1">{question.explanation}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <div className="text-center">
            <Button onClick={resetTest} size="lg">
              <RotateCcw className="w-4 h-4 mr-2" />
              Refaire un test
            </Button>
          </div>
        </div>
        <ChatBot />
      </div>
    );
  }

  // ACTIVE TEST SCREEN
  if (isActive && selectedTest) {
    const test = questionBank[selectedTest];
    const question = test.questions[currentQ];
    const progress = ((currentQ) / test.questions.length) * 100;

    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title={`${test.name} - FrancePrepAcademy`} noindex={true} />
        <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="font-semibold text-gray-900">{test.name}</h2>
                <p className="text-sm text-gray-500">Question {currentQ + 1} sur {test.questions.length}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium ${timeLeft < 120 ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>
                  <Clock className="w-4 h-4" />
                  {formatTime(timeLeft)}
                </div>
                <Button variant="outline" size="sm" onClick={completeTest}>
                  Terminer
                </Button>
              </div>
            </div>
            <Progress value={progress} className="h-1.5" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">{question.q}</h3>
              <div className="space-y-3">
                {Object.entries(question.options).map(([key, value]) => (
                  <button
                    key={key}
                    className={`w-full text-left p-4 border rounded-lg transition-all ${
                      selectedAnswer === key
                        ? 'border-indigo-500 bg-indigo-50 ring-1 ring-indigo-500'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedAnswer(key)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                        selectedAnswer === key
                          ? 'border-indigo-500 bg-indigo-500 text-white'
                          : 'border-gray-300 text-gray-500'
                      }`}>
                        {key}
                      </div>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                if (currentQ > 0) {
                  const newAnswers = [...answers];
                  newAnswers[currentQ] = selectedAnswer;
                  setAnswers(newAnswers);
                  setCurrentQ(currentQ - 1);
                  setSelectedAnswer(answers[currentQ - 1] || "");
                }
              }}
              disabled={currentQ === 0}
            >
              Précédente
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={!selectedAnswer}
              className="bg-indigo-600 hover:bg-indigo-700"
            >
              {currentQ === test.questions.length - 1 ? "Terminer le test" : "Suivante"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
        <ChatBot />
      </div>
    );
  }

  // HOME SCREEN
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Tests d'aptitude - FrancePrepAcademy"
        description="Testez vos connaissances sur la France, les démarches administratives et le raisonnement logique."
        canonical="/aptitudetests"
        noindex={true}
      />

      <div className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Tests d'aptitude</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Évaluez vos connaissances et préparez-vous pour votre vie en France
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(questionBank).map(([id, test]) => (
            <Card key={id} className="hover:shadow-md transition-shadow cursor-pointer group" onClick={() => startTest(id)}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${test.color}`}>
                    <test.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {test.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 mb-3">{test.desc}</p>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        {test.questions.length} questions
                      </Badge>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {test.time} min
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors mt-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-indigo-600" />
              Comment ça marche ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm flex-shrink-0">1</div>
                <p>Choisissez un test parmi les catégories disponibles. Chaque test contient 10 questions.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm flex-shrink-0">2</div>
                <p>Répondez aux questions dans le temps imparti. Vous pouvez naviguer entre les questions.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-sm flex-shrink-0">3</div>
                <p>Consultez vos résultats avec la correction détaillée pour apprendre de vos erreurs.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <ChatBot />
    </div>
  );
}
