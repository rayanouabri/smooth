import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ClipboardCheck, Play, RotateCcw, ArrowLeft, ArrowRight, Award, Target
} from "lucide-react";
import ChatBot from "../components/ChatBot";

const questions = [
  {
    id: 1,
    category: "langue",
    question: "Comment évaluez-vous votre niveau de français ?",
    options: [
      { label: "Je comprends et parle couramment", points: 3 },
      { label: "Je me débrouille bien au quotidien", points: 2 },
      { label: "J'ai des bases mais des difficultés à l'oral", points: 1 },
      { label: "Je débute en français", points: 0 }
    ]
  },
  {
    id: 2,
    category: "experience",
    question: "Avez-vous déjà vécu seul(e) à l'étranger ?",
    options: [
      { label: "Oui, plus de 6 mois", points: 3 },
      { label: "Oui, quelques mois", points: 2 },
      { label: "Non, mais j'ai voyagé", points: 1 },
      { label: "Non, jamais", points: 0 }
    ]
  },
  {
    id: 3,
    category: "admin",
    question: "Connaissez-vous les démarches pour obtenir un titre de séjour ?",
    options: [
      { label: "Oui, je connais bien le processus", points: 3 },
      { label: "J'ai une idée générale", points: 2 },
      { label: "Vaguement, j'ai besoin de me renseigner", points: 1 },
      { label: "Pas du tout", points: 0 }
    ]
  },
  {
    id: 4,
    category: "logement",
    question: "Savez-vous comment chercher un logement en France ?",
    options: [
      { label: "Oui, je connais les sites et les démarches", points: 3 },
      { label: "J'ai quelques pistes", points: 2 },
      { label: "Je sais que c'est difficile, mais pas comment faire", points: 1 },
      { label: "Non, aucune idée", points: 0 }
    ]
  },
  {
    id: 5,
    category: "droits",
    question: "Connaissez-vous vos droits en tant qu'étudiant étranger en France ?",
    options: [
      { label: "Oui, droit au travail, APL, sécu sociale, etc.", points: 3 },
      { label: "Je connais certains droits", points: 2 },
      { label: "Très peu", points: 1 },
      { label: "Non, pas du tout", points: 0 }
    ]
  },
  {
    id: 6,
    category: "digital",
    question: "Êtes-vous à l'aise avec les démarches en ligne (impôts, CAF, Ameli) ?",
    options: [
      { label: "Très à l'aise, je gère tout en ligne", points: 3 },
      { label: "Assez à l'aise", points: 2 },
      { label: "J'ai besoin d'aide pour certaines démarches", points: 1 },
      { label: "Je ne suis pas du tout à l'aise", points: 0 }
    ]
  },
  {
    id: 7,
    category: "etudes",
    question: "Connaissez-vous le système universitaire français ?",
    options: [
      { label: "Oui, LMD, ECTS, examens, etc.", points: 3 },
      { label: "En partie", points: 2 },
      { label: "Un peu", points: 1 },
      { label: "Non, pas du tout", points: 0 }
    ]
  },
  {
    id: 8,
    category: "budget",
    question: "Avez-vous établi un budget prévisionnel pour votre vie en France ?",
    options: [
      { label: "Oui, budget détaillé avec marge de sécurité", points: 3 },
      { label: "Oui, un budget approximatif", points: 2 },
      { label: "J'ai une idée des coûts mais pas de budget", points: 1 },
      { label: "Non, pas encore", points: 0 }
    ]
  },
  {
    id: 9,
    category: "reseau",
    question: "Avez-vous un réseau de contacts en France ?",
    options: [
      { label: "Oui, famille, amis et contacts professionnels", points: 3 },
      { label: "Quelques contacts (amis ou communauté)", points: 2 },
      { label: "Un ou deux contacts", points: 1 },
      { label: "Personne", points: 0 }
    ]
  },
  {
    id: 10,
    category: "confiance",
    question: "Globalement, comment vous sentez-vous par rapport à votre projet en France ?",
    options: [
      { label: "Très confiant(e) et bien préparé(e)", points: 3 },
      { label: "Plutôt confiant(e) avec quelques inquiétudes", points: 2 },
      { label: "Inquiet(e) mais motivé(e)", points: 1 },
      { label: "Très anxieux(se), beaucoup d'incertitudes", points: 0 }
    ]
  }
];

function getLevel(score, max) {
  const pct = (score / max) * 100;
  if (pct >= 80) return { label: "Bien préparé(e)", color: "text-green-600", bg: "bg-green-50 border-green-200", badge: "bg-green-600" };
  if (pct >= 60) return { label: "En bonne voie", color: "text-blue-600", bg: "bg-blue-50 border-blue-200", badge: "bg-blue-600" };
  if (pct >= 35) return { label: "À renforcer", color: "text-orange-600", bg: "bg-orange-50 border-orange-200", badge: "bg-orange-600" };
  return { label: "Débutant(e)", color: "text-red-600", bg: "bg-red-50 border-red-200", badge: "bg-red-600" };
}

const categoryLabels = {
  langue: "Langue française",
  experience: "Expérience internationale",
  admin: "Démarches administratives",
  logement: "Logement",
  droits: "Droits étudiants",
  digital: "Compétences numériques",
  etudes: "Système universitaire",
  budget: "Gestion du budget",
  reseau: "Réseau social",
  confiance: "Confiance & préparation"
};

const advice = {
  langue: "Inscrivez-vous à des cours de FLE, pratiquez avec des podcasts français (France Culture, RFI), et rejoignez un tandem linguistique.",
  experience: "Participez à des événements interculturels, rejoignez des groupes d'étudiants internationaux et n'hésitez pas à sortir de votre zone de confort.",
  admin: "Consultez le site Campus France et les guides du CROUS. Préparez vos documents à l'avance et créez un dossier organisé.",
  logement: "Explorez les résidences CROUS, Studapart, LeBonCoin. Constituez un dossier locatif solide (garant, fiches de paie, attestation).",
  droits: "Renseignez-vous sur vos droits : APL, sécurité sociale, droit au travail (964h/an), réductions étudiantes.",
  digital: "Familiarisez-vous avec les sites gouvernementaux : ameli.fr, caf.fr, impots.gouv.fr. Créez vos comptes en avance.",
  etudes: "Documentez-vous sur le système LMD, les ECTS, le fonctionnement des examens et le calendrier universitaire français.",
  budget: "Établissez un budget mensuel détaillé incluant loyer, alimentation, transport, assurance, téléphone et une marge pour les imprévus.",
  reseau: "Rejoignez des associations étudiantes, des groupes Facebook de votre ville, et participez aux événements d'accueil de votre université.",
  confiance: "La préparation est la clé de la confiance. Suivez les cours de FrancePrepAcademy et n'hésitez pas à poser des questions !"
};

export default function StudentAssessment() {
  const [phase, setPhase] = useState("home");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const startAssessment = () => {
    setPhase("assessment");
    setCurrentQ(0);
    setAnswers({});
    setResults(null);
  };

  const selectOption = (points) => {
    const updated = { ...answers, [currentQ]: points };
    setAnswers(updated);
  };

  const goNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      finishAssessment();
    }
  };

  const goPrev = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const finishAssessment = () => {
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 3;
    const categoryScores = {};
    questions.forEach((q, i) => {
      categoryScores[q.category] = answers[i] !== undefined ? answers[i] : 0;
    });
    setResults({ totalScore, maxScore, categoryScores });
    setPhase("results");
  };

  if (phase === "results" && results) {
    const level = getLevel(results.totalScore, results.maxScore);
    const pct = Math.round((results.totalScore / results.maxScore) * 100);
    const weakCategories = Object.entries(results.categoryScores)
      .filter(([, score]) => score <= 1)
      .map(([cat]) => cat);

    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title="Résultats - Auto-évaluation" noindex={true} />
        <div className="bg-gradient-to-r from-indigo-900 to-violet-800 text-white py-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Award className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
            <h1 className="text-3xl font-bold mb-1">Votre profil de préparation</h1>
            <p className="text-indigo-200">Basé sur vos réponses à l'auto-évaluation</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          <Card className={`border ${level.bg}`}>
            <CardContent className="p-6 text-center">
              <div className={`text-4xl font-bold ${level.color} mb-2`}>{pct}%</div>
              <Badge className={`${level.badge} text-white text-sm px-4 py-1`}>{level.label}</Badge>
              <Progress value={pct} className="h-3 mt-4" />
              <p className="text-sm text-gray-600 mt-3">
                {results.totalScore} points sur {results.maxScore}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>Détail par catégorie</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {questions.map((q, i) => {
                const score = results.categoryScores[q.category];
                const catLevel = getLevel(score, 3);
                return (
                  <div key={q.id} className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{categoryLabels[q.category]}</span>
                        <Badge className={`${catLevel.badge} text-white text-xs`}>{score}/3</Badge>
                      </div>
                      <Progress value={(score / 3) * 100} className="h-2" />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {weakCategories.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-500" /> Points à améliorer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {weakCategories.map(cat => (
                  <div key={cat} className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-1">{categoryLabels[cat]}</h4>
                    <p className="text-sm text-orange-900">{advice[cat]}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          <div className="text-center">
            <Button onClick={startAssessment} className="bg-indigo-600 hover:bg-indigo-700">
              <RotateCcw className="w-4 h-4 mr-2" /> Refaire l'évaluation
            </Button>
          </div>
        </div>
        <ChatBot />
      </div>
    );
  }

  if (phase === "assessment") {
    const q = questions[currentQ];
    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title={`Question ${currentQ + 1} - Auto-évaluation`} noindex={true} />
        <div className="bg-gradient-to-r from-indigo-900 to-violet-800 text-white py-6">
          <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">Auto-évaluation</h1>
              <p className="text-indigo-200 text-sm">Question {currentQ + 1} sur {questions.length}</p>
            </div>
            <Badge className="bg-white/20 text-white">{categoryLabels[q.category]}</Badge>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Progress value={((currentQ + 1) / questions.length) * 100} className="h-2 mb-6" />

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-6">{q.question}</h3>
              <div className="space-y-3">
                {q.options.map((opt, idx) => (
                  <div
                    key={idx}
                    onClick={() => selectOption(opt.points)}
                    className={`p-4 border rounded-lg cursor-pointer transition-all ${
                      answers[currentQ] === opt.points
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-gray-800">{opt.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-6">
            <Button variant="outline" onClick={goPrev} disabled={currentQ === 0}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Précédent
            </Button>
            <Button onClick={goNext} disabled={answers[currentQ] === undefined} className="bg-indigo-600 hover:bg-indigo-700">
              {currentQ === questions.length - 1 ? "Voir mes résultats" : "Suivant"} <ArrowRight className="w-4 h-4 ml-1" />
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
        title="Auto-évaluation - FrancePrepAcademy"
        description="Évaluez votre niveau de préparation pour la vie en France."
        canonical="/studentassessment"
        noindex={true}
      />
      <div className="bg-gradient-to-r from-indigo-900 to-violet-800 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-1">Auto-évaluation</h1>
          <p className="text-indigo-200">Évaluez votre niveau de préparation pour votre projet en France</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Card>
          <CardContent className="p-8 text-center space-y-4">
            <ClipboardCheck className="w-14 h-14 text-indigo-600 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-900">Bilan de préparation</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              10 questions pour évaluer votre préparation dans les domaines essentiels :
              langue, administratif, logement, budget, droits et bien plus.
            </p>
            <Button onClick={startAssessment} size="lg" className="bg-indigo-600 hover:bg-indigo-700 mt-4">
              <Play className="w-5 h-5 mr-2" /> Commencer l'évaluation
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <Card key={key}>
              <CardContent className="p-3 text-center">
                <p className="text-xs font-medium text-gray-700">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
