import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Users, CheckCircle, Lightbulb, RotateCcw,
  ChevronRight, Mic, ArrowLeft, Star, Clock, MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "../components/ChatBot";

const interviewTypes = {
  entretien_campus_france: {
    name: "Campus France",
    subtitle: "Entretien d'admission",
    icon: "🏫",
    gradient: "from-blue-600 to-indigo-700",
    lightBg: "bg-blue-50",
    tag: "bg-blue-100 text-blue-700",
    duration: "15-20 min",
    difficulty: "Moyen",
    questions: [
      { q: "Pourquoi avez-vous choisi la France pour vos études ?", tips: "Mentionnez la qualité de l'enseignement, les programmes spécifiques, les accords universitaires, la culture française." },
      { q: "Présentez votre parcours académique et vos résultats.", tips: "Soyez chronologique, mentionnez vos points forts, expliquez les éventuelles difficultés de manière positive." },
      { q: "Quel est votre projet d'études en France ? Pourquoi cette formation ?", tips: "Montrez que vous connaissez bien le programme, reliez-le à votre parcours et vos objectifs professionnels." },
      { q: "Quel est votre projet professionnel après vos études ?", tips: "Soyez précis et cohérent. Montrez le lien logique entre votre formation en France et votre projet de carrière." },
      { q: "Comment allez-vous financer vos études et votre séjour en France ?", tips: "Soyez concret : bourse, aide familiale, épargne personnelle. Montrez que vous avez bien planifié votre budget." },
      { q: "Que connaissez-vous de la ville où vous allez étudier ?", tips: "Montrez que vous vous êtes renseigné : coût de la vie, transports, vie étudiante, logement étudiant." },
      { q: "Avez-vous de la famille ou des connaissances en France ?", tips: "Répondez honnêtement. Si oui, mentionnez comment ils peuvent vous aider dans votre intégration." }
    ]
  },
  entretien_embauche: {
    name: "Entretien d'embauche",
    subtitle: "Poste en CDI/CDD",
    icon: "💼",
    gradient: "from-emerald-600 to-teal-700",
    lightBg: "bg-emerald-50",
    tag: "bg-emerald-100 text-emerald-700",
    duration: "30-45 min",
    difficulty: "Difficile",
    questions: [
      { q: "Parlez-moi de vous.", tips: "Résumez votre parcours en 2 minutes : formation, expériences clés, motivations. Adaptez-le au poste ciblé." },
      { q: "Pourquoi postulez-vous pour ce poste ?", tips: "Montrez votre connaissance de l'entreprise et du poste. Expliquez en quoi c'est cohérent avec votre parcours." },
      { q: "Quelles sont vos principales qualités et vos défauts ?", tips: "Choisissez des qualités directement liées au poste. Pour les défauts, montrez que vous travaillez activement dessus." },
      { q: "Décrivez une situation où vous avez résolu un problème complexe.", tips: "Utilisez la méthode STAR : Situation, Tâche, Action, Résultat. Soyez précis et quantifiez les résultats." },
      { q: "Où vous voyez-vous dans 5 ans ?", tips: "Montrez de l'ambition réaliste et cohérente avec l'entreprise. Évitez de dire 'à votre place' trop tôt." },
      { q: "Pourquoi devrions-nous vous choisir plutôt qu'un autre candidat ?", tips: "Mettez en avant votre valeur ajoutée unique : compétences rares, expériences internationales, polyvalence." },
      { q: "Avez-vous des questions à nous poser ?", tips: "Préparez toujours 2-3 questions pertinentes sur l'équipe, les projets en cours, les perspectives d'évolution." }
    ]
  },
  entretien_stage: {
    name: "Entretien de stage",
    subtitle: "Stage ou alternance",
    icon: "📋",
    gradient: "from-purple-600 to-violet-700",
    lightBg: "bg-purple-50",
    tag: "bg-purple-100 text-purple-700",
    duration: "20-30 min",
    difficulty: "Accessible",
    questions: [
      { q: "Qu'est-ce qui vous a motivé à postuler pour ce stage ?", tips: "Parlez de l'entreprise, du secteur, et ce que vous espérez concretement apprendre durant ce stage." },
      { q: "Que savez-vous de notre entreprise ?", tips: "Faites des recherches : activités, valeurs, actualités récentes, concurrents. Montrez votre intérêt sincère." },
      { q: "Quelles compétences pouvez-vous apporter à notre équipe ?", tips: "Sans expérience, parlez de vos projets académiques, compétences techniques (outils, logiciels), et soft skills." },
      { q: "Comment gérez-vous le stress et les deadlines ?", tips: "Donnez un exemple concret et positif de situation stressante que vous avez bien gérée à l'université." },
      { q: "Qu'attendez-vous de ce stage ?", tips: "Montrez que vous voulez apprendre tout en contribuant. Citez des compétences spécifiques à acquérir." },
      { q: "Parlez-nous d'un projet académique dont vous êtes fier.", tips: "Décrivez le contexte, votre rôle, les défis rencontrés et les résultats concrets obtenus." }
    ]
  },
  entretien_logement: {
    name: "Visite de logement",
    subtitle: "Propriétaire / Agence",
    icon: "🏠",
    gradient: "from-orange-500 to-amber-600",
    lightBg: "bg-orange-50",
    tag: "bg-orange-100 text-orange-700",
    duration: "10-15 min",
    difficulty: "Facile",
    questions: [
      { q: "Pouvez-vous vous présenter ? Quelle est votre activité ?", tips: "Présentez-vous clairement : étudiant, salarié, situation stable. Montrez que vous êtes sérieux et responsable." },
      { q: "Quel est votre budget mensuel pour le loyer ?", tips: "Soyez réaliste. Mentionnez les APL si vous y avez droit. Le loyer idéal = maximum 1/3 de vos revenus." },
      { q: "Avez-vous un garant ?", tips: "Si oui, précisez (parents, employeur). Si non, parlez des alternatives : Visale (gratuit), garantie bancaire." },
      { q: "Pour combien de temps cherchez-vous ce logement ?", tips: "Soyez précis : durée de votre formation, dates d'arrivée et de départ estimées. Les bailleurs aiment la clarté." },
      { q: "Vivez-vous seul ou envisagez-vous une colocation ?", tips: "Répondez honnêtement. Si colocation, présentez les potentiels colocataires si possible." },
      { q: "Quand seriez-vous disponible pour emménager ?", tips: "Donnez une date précise ou une fourchette courte. Montrez de la flexibilité si possible." }
    ]
  }
};

const difficultyColor = {
  "Facile": "bg-emerald-100 text-emerald-700",
  "Accessible": "bg-blue-100 text-blue-700",
  "Moyen": "bg-amber-100 text-amber-700",
  "Difficile": "bg-rose-100 text-rose-700",
};

export default function MockInterview() {
  const [selectedType, setSelectedType] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [showTips, setShowTips] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const interview = selectedType ? interviewTypes[selectedType] : null;

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

  const reset = () => {
    setSelectedType(null);
    setCurrentIdx(0);
    setUserAnswer("");
    setAnswers([]);
    setShowTips(false);
    setIsFinished(false);
  };

  // ── Results Screen ──
  if (isFinished && interview) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        <SEO title="Résultats entretien - FrancePrepAcademy" noindex={true} />
        <div className={`bg-gradient-to-r ${interview.gradient} text-white py-14`}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold mb-2">Entretien terminé !</h1>
            <p className="text-white/80 text-lg">Vous avez répondu à {answers.length} questions. Lisez les conseils pour vous améliorer.</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-4 py-10 space-y-5">
          {answers.map((a, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-gradient-to-r ${interview.gradient} text-white`}>
                    {idx + 1}
                  </span>
                  <p className="font-semibold text-gray-900 text-sm leading-snug">{a.question}</p>
                </div>
                <div className="ml-10 mb-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <p className="text-sm text-gray-600 leading-relaxed">{a.answer}</p>
                </div>
                <div className="ml-10 bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <p className="text-xs font-semibold text-amber-700 flex items-center gap-1.5 mb-1">
                    <Lightbulb className="w-3.5 h-3.5" /> Conseil du coach
                  </p>
                  <p className="text-xs text-amber-700 leading-relaxed">{a.tips}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="text-center pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={reset} size="lg" className={`bg-gradient-to-r ${interview.gradient} text-white rounded-xl px-8`}>
              <RotateCcw className="w-4 h-4 mr-2" /> Recommencer
            </Button>
            <Button onClick={() => setSelectedType(null)} variant="outline" size="lg" className="rounded-xl px-8">
              <ArrowLeft className="w-4 h-4 mr-2" /> Choisir un autre entretien
            </Button>
          </div>
        </div>
        <ChatBot />
      </div>
    );
  }

  // ── Active Interview ──
  if (selectedType && interview) {
    const currentQ = interview.questions[currentIdx];
    const progress = (currentIdx / interview.questions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        <SEO title={`${interview.name} - FrancePrepAcademy`} noindex={true} />

        {/* Header */}
        <div className={`bg-gradient-to-r ${interview.gradient} text-white`}>
          <div className="max-w-3xl mx-auto px-4 py-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <button onClick={reset} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <div>
                  <h1 className="font-bold text-lg">{interview.name}</h1>
                  <p className="text-white/70 text-xs">Question {currentIdx + 1} / {interview.questions.length}</p>
                </div>
              </div>
              <span className="text-2xl">{interview.icon}</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-white/20 rounded-full h-1.5">
              <div
                className="bg-white h-1.5 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-8 space-y-5">
          {/* Question card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${interview.gradient}`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Le recruteur vous demande…</p>
                  <p className="text-gray-900 font-semibold text-lg leading-relaxed">{currentQ.q}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tip toggle */}
          <button
            onClick={() => setShowTips(!showTips)}
            className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${showTips ? 'bg-amber-50 border-amber-300 text-amber-700' : 'bg-white border-gray-200 text-gray-500 hover:border-amber-200 hover:text-amber-600'}`}
          >
            <Lightbulb className="w-4 h-4 flex-shrink-0" />
            {showTips ? "Masquer les conseils du coach" : "Voir les conseils du coach"}
          </button>

          <AnimatePresence>
            {showTips && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-amber-50 border border-amber-200 rounded-xl p-4"
              >
                <p className="text-sm text-amber-800 leading-relaxed">{currentQ.tips}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Answer box */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <Mic className="w-4 h-4 text-indigo-600" />
              </div>
              <p className="text-sm font-semibold text-gray-700">Votre réponse</p>
            </div>
            <Textarea
              placeholder="Rédigez votre réponse ici. Prenez le temps de structurer votre pensée avant d'écrire."
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              rows={6}
              className="resize-none text-sm border-gray-200 focus:border-indigo-400 rounded-xl"
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-gray-400">{userAnswer.length} caractères</span>
              <Button
                onClick={submitAnswer}
                disabled={!userAnswer.trim()}
                className={`bg-gradient-to-r ${interview.gradient} text-white rounded-xl px-6`}
              >
                {currentIdx < interview.questions.length - 1 ? (
                  <>Question suivante <ChevronRight className="w-4 h-4 ml-1" /></>
                ) : (
                  <>Terminer <CheckCircle className="w-4 h-4 ml-1" /></>
                )}
              </Button>
            </div>
          </div>
        </div>
        <ChatBot />
      </div>
    );
  }

  // ── Selection Screen ──
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <SEO
        title="Simulation d'entretien - FrancePrepAcademy"
        description="Préparez vos entretiens Campus France, d'embauche, de stage et de logement avec notre simulateur interactif."
        canonical="/mockinterview"
      />

      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-sm mb-5 border border-white/20">
            <Mic className="w-4 h-4" />
            Simulateur d'entretien interactif
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Entraînez-vous aux entretiens</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Préparez-vous aux situations réelles : Campus France, recrutement, stage et visite de logement.
          </p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Choisissez votre entretien</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {Object.entries(interviewTypes).map(([id, type]) => (
            <motion.div
              key={id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group cursor-pointer"
              onClick={() => startInterview(id)}
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                {/* Top gradient strip */}
                <div className={`h-1.5 bg-gradient-to-r ${type.gradient}`} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${type.gradient} flex items-center justify-center text-2xl shadow-md`}>
                      {type.icon}
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${difficultyColor[type.difficulty]}`}>
                      {type.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{type.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{type.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" />
                        {type.questions.length} questions
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {type.duration}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r ${type.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tips section */}
        <div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500" />
            Conseils pour réussir vos entretiens
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "📝", title: "Préparez vos réponses", text: "Entraînez-vous à l'oral et à l'écrit. Plus vous pratiquez, plus vous serez à l'aise le jour J." },
              { icon: "🔍", title: "Renseignez-vous", text: "Avant chaque entretien, documentez-vous sur l'entreprise, le programme ou le quartier concerné." },
              { icon: "💡", title: "Utilisez les conseils", text: "Activez les conseils du coach pendant les exercices pour améliorer vos réponses en temps réel." },
            ].map((tip, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-4">
                <div className="text-2xl mb-2">{tip.icon}</div>
                <h4 className="font-semibold text-sm text-gray-900 mb-1">{tip.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
