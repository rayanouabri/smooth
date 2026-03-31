import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Users, Play, Clock, CheckCircle, Lightbulb, Target,
  ArrowRight, RotateCcw, ChevronRight
} from "lucide-react";
import ChatBot from "../components/ChatBot";

const interviewData = {
  entretien_campus_france: {
    name: "Entretien Campus France",
    icon: "🏫",
    color: "bg-blue-100 text-blue-700",
    desc: "Préparez votre entretien Campus France",
    questions: [
      { q: "Pourquoi avez-vous choisi la France pour vos études ?", tips: "Mentionnez la qualité de l'enseignement, les programmes spécifiques, les accords universitaires, la culture." },
      { q: "Présentez votre parcours académique et vos résultats.", tips: "Soyez chronologique, mentionnez vos points forts, expliquez les éventuelles faiblesses." },
      { q: "Quel est votre projet d'études en France ? Pourquoi cette formation ?", tips: "Montrez que vous connaissez le programme, reliez-le à votre parcours et vos objectifs." },
      { q: "Quel est votre projet professionnel après vos études ?", tips: "Soyez précis, montrez le lien logique entre votre formation et votre projet de carrière." },
      { q: "Comment allez-vous financer vos études et votre séjour en France ?", tips: "Soyez concret : bourse, aide familiale, épargne. Montrez que vous avez planifié votre budget." },
      { q: "Avez-vous de la famille ou des connaissances en France ?", tips: "Répondez honnêtement. Si oui, mentionnez comment ils peuvent vous aider dans votre intégration." },
      { q: "Que connaissez-vous de la ville où vous allez étudier ?", tips: "Montrez que vous vous êtes renseigné : climat, coût de la vie, transport, vie étudiante." }
    ]
  },
  entretien_embauche: {
    name: "Entretien d'embauche",
    icon: "💼",
    color: "bg-green-100 text-green-700",
    desc: "Préparez-vous pour un entretien professionnel",
    questions: [
      { q: "Parlez-moi de vous.", tips: "Résumez votre parcours en 2 minutes : formation, expériences clés, ce qui vous motive pour ce poste." },
      { q: "Pourquoi postulez-vous pour ce poste ?", tips: "Montrez votre connaissance de l'entreprise et du poste, et comment cela s'inscrit dans votre parcours." },
      { q: "Quelles sont vos principales qualités et vos défauts ?", tips: "Choisissez des qualités en lien avec le poste. Pour les défauts, montrez que vous travaillez dessus." },
      { q: "Décrivez une situation où vous avez dû résoudre un problème complexe.", tips: "Utilisez la méthode STAR : Situation, Tâche, Action, Résultat." },
      { q: "Où vous voyez-vous dans 5 ans ?", tips: "Montrez de l'ambition réaliste, en lien avec l'entreprise et le secteur." },
      { q: "Pourquoi devrions-nous vous choisir plutôt qu'un autre candidat ?", tips: "Mettez en avant votre valeur ajoutée unique : compétences, expériences, qualités personnelles." },
      { q: "Avez-vous des questions à nous poser ?", tips: "Préparez toujours 2-3 questions sur l'équipe, les projets, les perspectives d'évolution." }
    ]
  },
  entretien_stage: {
    name: "Entretien de stage",
    icon: "📋",
    color: "bg-purple-100 text-purple-700",
    desc: "Préparez votre entretien de stage",
    questions: [
      { q: "Qu'est-ce qui vous a motivé à postuler pour ce stage ?", tips: "Parlez de l'entreprise, du secteur, et de ce que vous espérez apprendre." },
      { q: "Que savez-vous de notre entreprise ?", tips: "Faites des recherches préalables : activités, valeurs, actualités récentes de l'entreprise." },
      { q: "Quelles compétences pouvez-vous apporter à notre équipe ?", tips: "Même sans expérience, parlez de vos projets académiques, compétences techniques, soft skills." },
      { q: "Comment gérez-vous le stress et les deadlines ?", tips: "Donnez un exemple concret de situation stressante que vous avez bien gérée." },
      { q: "Qu'attendez-vous de ce stage ?", tips: "Montrez que vous voulez apprendre tout en contribuant. Mentionnez des compétences spécifiques à acquérir." },
      { q: "Parlez-nous d'un projet académique dont vous êtes fier.", tips: "Décrivez le contexte, votre rôle, les défis rencontrés et les résultats obtenus." }
    ]
  },
  entretien_logement: {
    name: "Visite de logement",
    icon: "🏠",
    color: "bg-orange-100 text-orange-700",
    desc: "Préparez votre visite d'appartement",
    questions: [
      { q: "Pouvez-vous vous présenter ? Que faites-vous comme activité ?", tips: "Présentez-vous brièvement : étudiant, salarié. Montrez que vous êtes sérieux et stable." },
      { q: "Quel est votre budget mensuel pour le loyer ?", tips: "Soyez réaliste. Mentionnez les APL si vous y avez droit. Ne dépassez pas 1/3 de vos revenus." },
      { q: "Avez-vous un garant ?", tips: "Si oui, précisez qui. Sinon, mentionnez des alternatives comme Visale ou les garanties bancaires." },
      { q: "Pour combien de temps cherchez-vous un logement ?", tips: "Soyez précis : durée de votre formation, date d'arrivée et de départ prévues." },
      { q: "Vivez-vous seul ou en colocation ?", tips: "Répondez honnêtement. Si en colocation, présentez vos colocataires." },
      { q: "Avez-vous des animaux ?", tips: "Répondez honnêtement. Certains bailleurs les refusent." }
    ]
  }
};

export default function MockInterview() {
  const [selectedType, setSelectedType] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showTips, setShowTips] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const startInterview = (typeId) => {
    setSelectedType(typeId);
    setCurrentIdx(0);
    setUserAnswer("");
    setAnswers([]);
    setShowTips(false);
    setIsFinished(false);
  };

  const submitAnswer = () => {
    if (!userAnswer.trim()) return;
    const interview = interviewData[selectedType];
    const newAnswers = [...answers, {
      question: interview.questions[currentIdx].q,
      answer: userAnswer,
      tips: interview.questions[currentIdx].tips
    }];
    setAnswers(newAnswers);
    setUserAnswer("");
    setShowTips(false);

    if (currentIdx < interview.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const resetInterview = () => {
    setSelectedType(null);
    setCurrentIdx(0);
    setUserAnswer("");
    setAnswers([]);
    setShowTips(false);
    setIsFinished(false);
  };

  // Finished screen
  if (isFinished && selectedType) {
    const interview = interviewData[selectedType];
    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title="Entretien terminé - FrancePrepAcademy" noindex={true} />
        <div className="bg-gradient-to-r from-green-800 to-emerald-700 text-white py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold mb-2">Entretien terminé !</h1>
            <p className="text-green-200">Vous avez répondu à {answers.length} questions. Voici le récapitulatif.</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {answers.map((a, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Badge className="bg-indigo-100 text-indigo-700">Q{idx + 1}</Badge>
                  <h3 className="font-semibold text-gray-900">{a.question}</h3>
                </div>
                <div className="ml-10 mb-3">
                  <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">{a.answer}</p>
                </div>
                <div className="ml-10 bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-sm font-medium text-amber-800 flex items-center gap-1 mb-1">
                    <Lightbulb className="w-4 h-4" /> Conseils
                  </p>
                  <p className="text-sm text-amber-700">{a.tips}</p>
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="text-center pt-4">
            <Button onClick={resetInterview} size="lg">
              <RotateCcw className="w-4 h-4 mr-2" />
              Recommencer un entretien
            </Button>
          </div>
        </div>
        <ChatBot />
      </div>
    );
  }

  // Active interview
  if (selectedType) {
    const interview = interviewData[selectedType];
    const currentQ = interview.questions[currentIdx];
    const progress = ((currentIdx) / interview.questions.length) * 100;

    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title={`${interview.name} - FrancePrepAcademy`} noindex={true} />
        <div className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">{interview.name}</h1>
                <p className="text-blue-200">Question {currentIdx + 1} sur {interview.questions.length}</p>
              </div>
              <Button variant="outline" onClick={resetInterview} className="border-white/40 text-white hover:bg-white/10">
                Quitter
              </Button>
            </div>
            <div className="mt-4 w-full bg-white/20 rounded-full h-2">
              <div className="bg-white h-2 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Question */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Recruteur</p>
                  <p className="text-lg text-gray-900 leading-relaxed">{currentQ.q}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tip toggle */}
          <button
            onClick={() => setShowTips(!showTips)}
            className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <Lightbulb className="w-4 h-4" />
            {showTips ? "Masquer les conseils" : "Afficher les conseils"}
          </button>

          {showTips && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800">{currentQ.tips}</p>
            </div>
          )}

          {/* Answer input */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <Textarea
                placeholder="Tapez votre réponse ici... Prenez le temps de bien structurer votre pensée."
                value={userAnswer}
                onChange={e => setUserAnswer(e.target.value)}
                rows={6}
                className="resize-none"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{userAnswer.length} caractères</span>
                <Button
                  onClick={submitAnswer}
                  disabled={!userAnswer.trim()}
                  className="bg-indigo-600 hover:bg-indigo-700"
                >
                  {currentIdx < interview.questions.length - 1 ? (
                    <>Soumettre et suivante <ChevronRight className="w-4 h-4 ml-1" /></>
                  ) : (
                    <>Terminer l'entretien <CheckCircle className="w-4 h-4 ml-1" /></>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <ChatBot />
      </div>
    );
  }

  // Selection screen
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Entretien simulé - FrancePrepAcademy"
        description="Préparez vos entretiens Campus France, d'embauche et de stage avec notre simulateur."
        canonical="/mockinterview"
        noindex={true}
      />

      <div className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Entretien simulé</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Entraînez-vous avec des questions réelles et obtenez des conseils pour réussir vos entretiens
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {Object.entries(interviewData).map(([id, interview]) => (
            <Card key={id} className="hover:shadow-md transition-shadow cursor-pointer group" onClick={() => startInterview(id)}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{interview.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {interview.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 mb-3">{interview.desc}</p>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        {interview.questions.length} questions
                      </Badge>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        ~{interview.questions.length * 3} min
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              Conseils pour réussir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Avant l'entretien</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Renseignez-vous sur l'organisme/entreprise</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Préparez des exemples concrets</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Entraînez-vous à répondre à voix haute</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> Préparez des questions à poser</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Pendant l'entretien</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> Écoutez bien la question avant de répondre</li>
                  <li className="flex items-start gap-2"><Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> Structurez vos réponses (méthode STAR)</li>
                  <li className="flex items-start gap-2"><Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> Montrez votre motivation et votre enthousiasme</li>
                  <li className="flex items-start gap-2"><Target className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> Soyez honnête et authentique</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <ChatBot />
    </div>
  );
}
