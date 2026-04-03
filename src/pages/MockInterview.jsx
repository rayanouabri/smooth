import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Users, CheckCircle, Lightbulb, RotateCcw,
  ChevronRight, Mic, ArrowLeft, Clock, ThumbsUp,
  ThumbsDown, AlertCircle, Star, TrendingUp, MessageSquare, Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "../components/ChatBot";

const interviewTypes = {
  entretien_campus_france: {
    name: "Campus France",
    subtitle: "Entretien d'admission",
    icon: "🏫",
    gradient: "from-blue-600 to-indigo-700",
    diffColor: "bg-amber-100 text-amber-700",
    duration: "15-20 min",
    difficulty: "Moyen",
    questions: [
      { q: "Pourquoi avez-vous choisi la France pour vos études ?", tips: "Mentionnez la qualité de l'enseignement, les programmes spécifiques, les accords universitaires, la culture française.", criteria: ["Motivations claires", "Connaissance du système français", "Projet cohérent"], ideal: "Une réponse idéale mentionne des éléments précis : nom de l'université, programme spécifique, lien avec votre pays d'origine, et ambitions professionnelles claires." },
      { q: "Présentez votre parcours académique et vos résultats.", tips: "Soyez chronologique, mentionnez vos points forts, expliquez les éventuelles difficultés de manière positive.", criteria: ["Clarté chronologique", "Résultats chiffrés", "Cohérence du parcours"], ideal: "Commencez par le bac, mentionnez votre moyenne générale, vos matières fortes, et comment ce parcours vous a amené à choisir cette formation en France." },
      { q: "Quel est votre projet d'études en France ? Pourquoi cette formation ?", tips: "Montrez que vous connaissez bien le programme, reliez-le à votre parcours et vos objectifs professionnels.", criteria: ["Connaissance du programme", "Lien avec le parcours", "Objectif professionnel"], ideal: "Citez des cours spécifiques du programme, des professeurs reconnus, des débouchés concrets. Montrez que vous avez fait des recherches approfondies." },
      { q: "Quel est votre projet professionnel après vos études ?", tips: "Soyez précis et cohérent. Montrez le lien logique entre votre formation en France et votre projet de carrière.", criteria: ["Précision du projet", "Retour au pays ou Europe", "Réalisme"], ideal: "Décrivez un métier précis, le marché de l'emploi dans votre secteur (en France ou dans votre pays), et comment votre diplôme français vous donnera un avantage concurrentiel." },
      { q: "Comment allez-vous financer vos études et votre séjour en France ?", tips: "Soyez concret : bourse, aide familiale, épargne personnelle. Montrez que vous avez bien planifié votre budget.", criteria: ["Source de financement claire", "Budget réaliste", "Plan de secours"], ideal: "Donnez des chiffres précis : coût du logement, frais de vie estimés, montant de la bourse ou aide familiale. Montrez que vous avez un budget de 800-1200€/mois et une solution de secours." },
      { q: "Que connaissez-vous de la ville où vous allez étudier ?", tips: "Montrez que vous vous êtes renseigné : coût de la vie, transports, vie étudiante, logement étudiant.", criteria: ["Coût de la vie", "Transports", "Ressources étudiantes"], ideal: "Mentionnez des éléments concrets : le CROUS, les lignes de transport, des quartiers étudiant, le coût moyen d'un studio. Montrez que vous avez visité des forums ou groupes d'étudiants." },
      { q: "Avez-vous de la famille ou des connaissances en France ?", tips: "Répondez honnêtement. Si oui, mentionnez comment ils peuvent vous aider dans votre intégration.", criteria: ["Honnêteté", "Réseau de soutien", "Autonomie démontrée"], ideal: "Que vous ayez ou non de la famille, montrez que vous pouvez être autonome. Si vous en avez, précisez comment cela facilitera votre installation sans en dépendre entièrement." },
      { q: "Comment comptez-vous vous intégrer à la vie étudiante et sociale en France ?", tips: "Parlez des associations, activités sportives, rencontres avec des étudiants français et internationaux.", criteria: ["Ouverture d'esprit", "Initiatives concrètes", "Adaptabilité culturelle"], ideal: "Mentionnez les BDE, associations culturelles, événements d'intégration, plateformes comme Meetup ou les groupes Facebook d'étudiants. Montrez une vraie envie de vous intégrer." },
      { q: "Quels défis anticipez-vous pour votre adaptation en France ?", tips: "Montrez de la lucidité sur les difficultés (langue, administratif, culture) et votre capacité à y faire face.", criteria: ["Réalisme", "Solutions préparées", "Résilience"], ideal: "Reconnaître les défis (barrière linguistique initiale, démarches administratives, intégration sociale) tout en montrant que vous avez des stratégies concrètes pour les surmonter." },
      { q: "Pourquoi avoir choisi cette université/école plutôt qu'une autre ?", tips: "Montrez une recherche approfondie : classements, spécialités, corps professoral, réseau alumni.", criteria: ["Recherche approfondie", "Critères objectifs", "Fit personnel"], ideal: "Mentionnez des éléments spécifiques à l'établissement : un laboratoire de recherche, un partenariat entreprise, des alumni dans votre secteur cible, ou un professeur dont vous avez lu les travaux." }
    ]
  },
  entretien_embauche: {
    name: "Entretien d'embauche",
    subtitle: "Poste en CDI/CDD",
    icon: "💼",
    gradient: "from-emerald-600 to-teal-700",
    diffColor: "bg-rose-100 text-rose-700",
    duration: "30-45 min",
    difficulty: "Difficile",
    questions: [
      { q: "Parlez-moi de vous.", tips: "Résumez votre parcours en 2 minutes : formation, expériences clés, motivations. Adaptez-le au poste ciblé.", criteria: ["Concision (2 min max)", "Lien avec le poste", "Accroche finale"], ideal: "Structure en 3 parties : parcours académique → expériences pertinentes → pourquoi ce poste maintenant. Finissez par une phrase qui donne envie d'en savoir plus sur vous." },
      { q: "Pourquoi postulez-vous pour ce poste ?", tips: "Montrez votre connaissance de l'entreprise et du poste. Expliquez en quoi c'est cohérent avec votre parcours.", criteria: ["Connaissance entreprise", "Adéquation compétences/poste", "Motivation authentique"], ideal: "Citez 2-3 choses précises sur l'entreprise (un projet récent, une valeur, un produit). Expliquez pourquoi ce poste correspond exactement à votre profil ET ce que vous apportez à l'entreprise." },
      { q: "Quelles sont vos principales qualités et vos points d'amélioration ?", tips: "Choisissez des qualités directement liées au poste. Pour les défauts, montrez que vous travaillez activement dessus.", criteria: ["Qualités liées au poste", "Défaut crédible + progression", "Exemples concrets"], ideal: "Pour les qualités : 2-3 maximum avec un exemple chacune. Pour le défaut : choisissez quelque chose de réel mais pas rédhibitoire (ex: perfectionnisme, difficulté à déléguer) et montrez comment vous le travaillez." },
      { q: "Décrivez une situation où vous avez résolu un problème complexe.", tips: "Utilisez la méthode STAR : Situation, Tâche, Action, Résultat. Soyez précis et quantifiez les résultats.", criteria: ["Méthode STAR", "Résultat chiffré", "Rôle personnel clair"], ideal: "Contexte en 1 phrase → votre rôle spécifique → les 3 actions concrètes que vous avez prises → résultat mesurable (% d'amélioration, gain de temps, économie). Évitez le 'nous avons fait', dites 'j'ai fait'." },
      { q: "Où vous voyez-vous dans 5 ans ?", tips: "Montrez de l'ambition réaliste et cohérente avec l'entreprise. Évitez de dire 'à votre place' trop tôt.", criteria: ["Ambition réaliste", "Cohérence avec l'entreprise", "Vision à long terme"], ideal: "Décrivez un poste de niveau N+1 ou N+2, des compétences à développer, et comment vous contribuerez encore plus à l'entreprise. Montrez que vous vous projetez dans cette entreprise spécifiquement." },
      { q: "Pourquoi devrions-nous vous choisir plutôt qu'un autre candidat ?", tips: "Mettez en avant votre valeur ajoutée unique : compétences rares, expériences internationales, polyvalence.", criteria: ["Différenciation claire", "Valeur ajoutée unique", "Confiance sans arrogance"], ideal: "Résumez en 3 points distincts ce qui vous différencie : une compétence rare, une expérience internationale, une réalisation concrète. Terminez par votre motivation à contribuer spécifiquement à cette équipe." },
      { q: "Avez-vous des questions à nous poser ?", tips: "Préparez toujours 2-3 questions pertinentes sur l'équipe, les projets en cours, les perspectives d'évolution.", criteria: ["Questions pertinentes", "Curiosité sincère", "Pas de questions sur le salaire d'emblée"], ideal: "Préparez 3 questions : 1 sur les projets actuels de l'équipe, 1 sur les critères de succès pour ce poste dans 6 mois, 1 sur la culture d'entreprise. Évitez les questions dont la réponse est sur le site web." },
      { q: "Comment gérez-vous les conflits au sein d'une équipe ?", tips: "Donnez un exemple réel. Montrez votre capacité d'écoute, de médiation et de résolution constructive.", criteria: ["Exemple réel", "Approche constructive", "Résolution positive"], ideal: "Décrivez une situation de désaccord, votre démarche (écoute active, discussion directe, médiation), et comment le conflit s'est résolu positivement. Évitez les exemples où vous 'avez toujours raison'." },
      { q: "Quelles sont vos prétentions salariales ?", tips: "Renseignez-vous sur la fourchette du marché pour ce poste. Donnez une fourchette, pas un chiffre fixe.", criteria: ["Fourchette cohérente", "Justification par le marché", "Flexibilité affichée"], ideal: "Citez une fourchette basée sur vos recherches (job boards, Glassdoor, LinkedIn Salary). Ex : 'Selon mes recherches sur le marché, une fourchette de 35-40K€ me semble cohérente, mais je suis ouvert à en discuter selon l'ensemble du package.'" },
      { q: "Comment vous tenez-vous informé des évolutions de votre secteur ?", tips: "Citez des sources concrètes : newsletters, conférences, réseaux professionnels, formations continues.", criteria: ["Sources précises", "Veille active démontrée", "Application pratique"], ideal: "Mentionnez 2-3 sources précises (noms de newsletters, podcasts, conférences), une récente tendance que vous avez repérée, et comment vous l'avez appliquée ou envisagez de l'appliquer dans votre travail." }
    ]
  },
  entretien_stage: {
    name: "Entretien de stage",
    subtitle: "Stage ou alternance",
    icon: "📋",
    gradient: "from-purple-600 to-violet-700",
    diffColor: "bg-blue-100 text-blue-700",
    duration: "20-30 min",
    difficulty: "Accessible",
    questions: [
      { q: "Qu'est-ce qui vous a motivé à postuler pour ce stage ?", tips: "Parlez de l'entreprise, du secteur, et ce que vous espérez concrètement apprendre.", criteria: ["Connaissance de l'entreprise", "Objectifs d'apprentissage", "Cohérence avec le cursus"], ideal: "Citez un projet ou produit spécifique de l'entreprise qui vous a attiré, reliez-le à votre formation, et décrivez 2-3 compétences précises que vous souhaitez développer pendant ce stage." },
      { q: "Que savez-vous de notre entreprise ?", tips: "Faites des recherches : activités, valeurs, actualités récentes, concurrents. Montrez votre intérêt sincère.", criteria: ["Activités principales", "Actualités récentes", "Position sur le marché"], ideal: "Mentionnez : l'activité principale, une actualité récente (nouveau produit, partenariat, levée de fonds), les 2-3 principaux concurrents, et ce qui différencie cette entreprise selon vous." },
      { q: "Quelles compétences pouvez-vous apporter à notre équipe ?", tips: "Parlez de vos projets académiques, compétences techniques (outils, logiciels), et soft skills.", criteria: ["Compétences techniques", "Soft skills", "Exemples académiques"], ideal: "Listez 2 compétences techniques concrètes (outils, langages, méthodes) et 1 soft skill avec un exemple, puis expliquez comment vous les avez développées via des projets académiques ou personnels." },
      { q: "Comment gérez-vous le stress et les deadlines ?", tips: "Donnez un exemple concret et positif de situation stressante bien gérée.", criteria: ["Exemple concret", "Méthode de gestion", "Résultat positif"], ideal: "Décrivez une situation universitaire avec deadline serrée, votre méthode d'organisation (priorisation, découpage en tâches, communication proactive), et comment vous avez livré dans les temps." },
      { q: "Qu'attendez-vous de ce stage ?", tips: "Montrez que vous voulez apprendre tout en contribuant. Citez des compétences spécifiques à acquérir.", criteria: ["Objectifs d'apprentissage", "Contribution à l'équipe", "Vision après le stage"], ideal: "Structurez en 3 niveaux : ce que vous voulez apprendre (compétences précises), ce que vous pouvez apporter (vos forces actuelles), et ce que vous espérez faire après (poursuite d'études, projet pro)." },
      { q: "Parlez-nous d'un projet académique dont vous êtes fier.", tips: "Décrivez le contexte, votre rôle, les défis et les résultats concrets obtenus.", criteria: ["Contexte clair", "Rôle personnel", "Résultat démontrable"], ideal: "Choisissez un projet en lien direct avec le stage. Décrivez votre rôle précis dans le groupe, un défi technique ou organisationnel surmonté, et un résultat concret (note obtenue, démo réussie, publication)." },
      { q: "Êtes-vous disponible pour travailler en présentiel / êtes-vous mobile ?", tips: "Répondez clairement. Si vous avez des contraintes, soyez transparent mais montrez votre flexibilité.", criteria: ["Disponibilité claire", "Flexibilité", "Anticipation logistique"], ideal: "Confirmez votre disponibilité avec les dates précises. Si vous avez besoin de déménager, montrez que vous avez anticipé la logistique (logement, transport). Demandez les horaires habituels de l'équipe." },
      { q: "Comment travaillez-vous en équipe ? Préférez-vous travailler seul ou en groupe ?", tips: "Montrez votre adaptabilité. Évitez les réponses extrêmes dans un sens ou dans l'autre.", criteria: ["Adaptabilité", "Exemple de travail en équipe", "Conscience de son style"], ideal: "Donnez un exemple de projet en groupe réussi, décrivez votre rôle naturel dans un groupe (leader, facilitateur, expert technique), et montrez que vous vous adaptez selon les besoins du projet." },
      { q: "Avez-vous des questions sur le déroulement du stage ?", tips: "Posez des questions sur les missions précises, l'équipe, le suivi et les possibilités d'apprentissage.", criteria: ["Questions pertinentes", "Intérêt pour les missions", "Vision du suivi"], ideal: "Demandez : quelles seront vos missions principales la première semaine, comment se passera l'onboarding, y a-t-il un tuteur attitré, et quels critères seront utilisés pour évaluer votre travail à mi-stage." }
    ]
  },
  entretien_logement: {
    name: "Visite de logement",
    subtitle: "Propriétaire / Agence",
    icon: "🏠",
    gradient: "from-orange-500 to-amber-600",
    diffColor: "bg-emerald-100 text-emerald-700",
    duration: "10-15 min",
    difficulty: "Facile",
    questions: [
      { q: "Pouvez-vous vous présenter ? Quelle est votre activité ?", tips: "Présentez-vous clairement : étudiant, salarié, situation stable. Montrez sérieux et responsabilité.", criteria: ["Clarté sur la situation", "Stabilité démontrée", "Première impression positive"], ideal: "En 3 phrases : qui vous êtes, votre formation/emploi, depuis combien de temps vous êtes dans cette situation. Terminez par votre projet dans ce logement (durée envisagée)." },
      { q: "Quel est votre budget mensuel pour le loyer ?", tips: "Soyez réaliste. Mentionnez les APL si vous y avez droit. Loyer idéal = max 1/3 de vos revenus.", criteria: ["Budget réaliste", "Mention des aides (APL)", "Transparence"], ideal: "Citez votre budget charges comprises, mentionnez si vous avez fait une simulation APL sur caf.fr (et le montant estimé), et montrez que le loyer demandé rentre dans votre budget avec une marge." },
      { q: "Avez-vous un garant ?", tips: "Si oui, précisez. Si non, parlez de Visale (gratuit) ou garantie bancaire.", criteria: ["Clarté sur le garant", "Alternatives connues", "Dossier solide"], ideal: "Si vous avez un garant : précisez son lien avec vous, sa situation professionnelle et ses revenus approximatifs. Si non : expliquez que vous avez une garantie Visale d'Action Logement déjà obtenue." },
      { q: "Pour combien de temps cherchez-vous ce logement ?", tips: "Soyez précis : durée de la formation, dates d'arrivée et de départ estimées.", criteria: ["Durée précise", "Stabilité locative", "Flexibilité si possible"], ideal: "Donnez des dates précises (début et fin de contrat/études), expliquez que vous cherchez à vous installer durablement, et si possible mentionnez que vous pourriez rester plus longtemps si votre situation évolue." },
      { q: "Vivez-vous seul ou êtes-vous en colocation ?", tips: "Répondez honnêtement. Si colocation, présentez les colocataires si possible.", criteria: ["Honnêteté", "Situation stable", "Compatibilité avec le logement"], ideal: "Si seul : rassurez sur le fait que vous maintiendrez le logement en bon état. Si colocation : décrivez brièvement les colocataires (profil, situation professionnelle) et expliquez que tout le monde sera sur le bail." },
      { q: "Quand seriez-vous disponible pour emménager ?", tips: "Donnez une date précise ou une fourchette courte. Montrez de la flexibilité.", criteria: ["Date précise", "Flexibilité", "Organisation démontrée"], ideal: "Donnez une date précise (ex: 'dès le 1er du mois prochain') et montrez que vous êtes prêt logistiquement. Si vous avez besoin d'un délai, expliquez pourquoi et proposez une compensation (ex: régler le premier mois dès maintenant)." },
      { q: "Avez-vous déjà eu des problèmes avec un propriétaire précédent ?", tips: "Si non, dites-le simplement et apportez une référence si possible. Si oui, expliquez avec tact.", criteria: ["Honnêteté", "Références positives", "Gestion des conflits"], ideal: "Idéalement non et vous pouvez proposer les coordonnées de votre ancien propriétaire. Si vous avez eu un litige, présentez-le de façon neutre en montrant comment il s'est résolu." }
    ]
  }
};

// Analyse basique de la réponse de l'utilisateur
function analyzeAnswer(answer, question) {
  const words = answer.trim().split(/\s+/).length;
  const hasExample = /exemple|expérience|lors|quand|j'ai|j'avais|dans mon|pendant|durant/i.test(answer);
  const hasNumbers = /\d+/.test(answer);
  const hasTooShort = words < 30;
  const hasTooLong = words > 250;

  const scores = [];
  const feedback = [];
  const strengths = [];
  const improvements = [];

  // Longueur
  if (hasTooShort) {
    improvements.push("Réponse trop courte — développez davantage avec des exemples concrets.");
    scores.push(1);
  } else if (hasTooLong) {
    improvements.push("Réponse trop longue — soyez plus concis et allez droit au but.");
    scores.push(2);
  } else {
    strengths.push("Longueur de réponse appropriée.");
    scores.push(3);
  }

  // Exemples concrets
  if (hasExample) {
    strengths.push("Vous utilisez des exemples concrets — c'est excellent pour convaincre.");
    scores.push(3);
  } else {
    improvements.push("Ajoutez un exemple concret ou une expérience personnelle pour illustrer votre propos.");
    scores.push(1);
  }

  // Chiffres / données
  if (hasNumbers) {
    strengths.push("Vous utilisez des chiffres ou données précises — très professionnel.");
    scores.push(3);
  } else {
    improvements.push("Essayez d'ajouter des données chiffrées (montants, durées, pourcentages) pour crédibiliser votre réponse.");
    scores.push(2);
  }

  const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  const globalScore = Math.min(5, Math.max(1, avgScore + (words >= 50 && words <= 180 ? 1 : 0)));

  return { globalScore, strengths, improvements, wordCount: words };
}

const scoreColors = ["", "text-rose-600 bg-rose-50", "text-orange-600 bg-orange-50", "text-amber-600 bg-amber-50", "text-blue-600 bg-blue-50", "text-emerald-600 bg-emerald-50"];
const scoreLabels = ["", "À retravailler", "Insuffisant", "Passable", "Bien", "Excellent"];
const scoreIcons = [null, ThumbsDown, ThumbsDown, AlertCircle, ThumbsUp, Star];

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
    const analysis = analyzeAnswer(userAnswer, interview.questions[currentIdx]);
    const newAnswers = [...answers, {
      question: interview.questions[currentIdx].q,
      answer: userAnswer,
      tips: interview.questions[currentIdx].tips,
      ideal: interview.questions[currentIdx].ideal,
      criteria: interview.questions[currentIdx].criteria,
      analysis
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
    const avgScore = Math.round(answers.reduce((sum, a) => sum + a.analysis.globalScore, 0) / answers.length);
    const ScoreIcon = scoreIcons[avgScore] || Star;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        <SEO title="Résultats entretien - FrancePrepAcademy" noindex={true} />

        {/* Hero résultats */}
        <div className={`bg-gradient-to-r ${interview.gradient} text-white py-14`}>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold mb-2">Entretien terminé !</h1>
            <p className="text-white/80 mb-6">Voici l'analyse détaillée de vos {answers.length} réponses.</p>

            {/* Score global */}
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-5xl font-black">{avgScore}<span className="text-2xl">/5</span></div>
              <div className="text-left">
                <div className="font-bold text-lg">{scoreLabels[avgScore]}</div>
                <div className="text-white/70 text-sm">Score global de l'entretien</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
          {/* Vue d'ensemble scores */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" /> Vue d'ensemble
            </h2>
            <div className="space-y-2">
              {answers.map((a, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-6 text-right">{idx + 1}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${interview.gradient}`}
                      style={{ width: `${(a.analysis.globalScore / 5) * 100}%` }}
                    />
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${scoreColors[a.analysis.globalScore]}`}>
                    {a.analysis.globalScore}/5
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Analyse question par question */}
          {answers.map((a, idx) => {
            const SIcon = scoreIcons[a.analysis.globalScore] || Star;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Header question */}
                <div className={`bg-gradient-to-r ${interview.gradient} px-5 py-3 flex items-center justify-between`}>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold text-white">{idx + 1}</span>
                    <p className="font-semibold text-white text-sm leading-snug">{a.question}</p>
                  </div>
                  <span className={`flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full bg-white/20 text-white`}>
                    {a.analysis.globalScore}/5
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  {/* Votre réponse */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 flex items-center gap-1">
                      <Mic className="w-3 h-3" /> Votre réponse <span className="text-gray-300">({a.analysis.wordCount} mots)</span>
                    </p>
                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                      <p className="text-sm text-gray-700 leading-relaxed">{a.answer}</p>
                    </div>
                  </div>

                  {/* Points forts / à améliorer */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {a.analysis.strengths.length > 0 && (
                      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                        <p className="text-xs font-bold text-emerald-700 mb-2 flex items-center gap-1">
                          <ThumbsUp className="w-3.5 h-3.5" /> Points forts
                        </p>
                        <ul className="space-y-1">
                          {a.analysis.strengths.map((s, i) => (
                            <li key={i} className="text-xs text-emerald-700 flex items-start gap-1.5">
                              <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" /> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {a.analysis.improvements.length > 0 && (
                      <div className="bg-orange-50 border border-orange-200 rounded-xl p-3">
                        <p className="text-xs font-bold text-orange-700 mb-2 flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" /> À améliorer
                        </p>
                        <ul className="space-y-1">
                          {a.analysis.improvements.map((s, i) => (
                            <li key={i} className="text-xs text-orange-700 flex items-start gap-1.5">
                              <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" /> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Critères */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Critères évalués</p>
                    <div className="flex flex-wrap gap-1.5">
                      {a.criteria.map((c, i) => (
                        <span key={i} className="text-xs px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100 font-medium">{c}</span>
                      ))}
                    </div>
                  </div>

                  {/* Réponse idéale */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                    <p className="text-xs font-bold text-amber-800 flex items-center gap-1.5 mb-1.5">
                      <Lightbulb className="w-3.5 h-3.5" /> Réponse idéale selon notre coach
                    </p>
                    <p className="text-xs text-amber-800 leading-relaxed">{a.ideal}</p>
                  </div>

                  {/* Conseil coach */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                    <p className="text-xs font-bold text-blue-700 flex items-center gap-1.5 mb-1">
                      <MessageSquare className="w-3.5 h-3.5" /> Conseil pratique
                    </p>
                    <p className="text-xs text-blue-700 leading-relaxed">{a.tips}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <div className="text-center pt-4 flex flex-col sm:flex-row gap-3 justify-center pb-8">
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
            <div className="w-full bg-white/20 rounded-full h-1.5">
              <motion.div
                className="bg-white h-1.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-8 space-y-5">
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
              {/* Critères */}
              <div className="mt-4 flex flex-wrap gap-1.5 pl-16">
                {currentQ.criteria.map((c, i) => (
                  <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">{c}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

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

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <Mic className="w-4 h-4 text-indigo-600" />
              </div>
              <p className="text-sm font-semibold text-gray-700">Votre réponse</p>
              <span className="ml-auto text-xs text-gray-400">
                {userAnswer.split(/\s+/).filter(Boolean).length} mots
                {userAnswer.split(/\s+/).filter(Boolean).length < 30 && userAnswer.length > 0 && (
                  <span className="text-orange-500 ml-1">(trop court)</span>
                )}
              </span>
            </div>
            <Textarea
              placeholder="Rédigez votre réponse ici. Prenez le temps de structurer votre pensée. Visez 50-180 mots pour une réponse complète et concise."
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
              rows={7}
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
                  <>Voir mon analyse <Zap className="w-4 h-4 ml-1" /></>
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
        description="Préparez vos entretiens Campus France, d'embauche, de stage et de logement avec notre simulateur interactif avec analyse de vos réponses."
        canonical="/mockinterview"
      />

      <div className="bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-sm mb-5 border border-white/20">
            <Zap className="w-4 h-4 text-amber-300" />
            Analyse détaillée de chaque réponse
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Simulation d'entretien</h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            Entraînez-vous sur de vraies questions, recevez un feedback personnalisé et la réponse idéale pour chaque question.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {Object.entries(interviewTypes).map(([id, type], idx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => startInterview(id)}
              className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl cursor-pointer transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${type.gradient}`} />
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${type.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors">{type.name}</h3>
                    <p className="text-xs text-gray-500 mb-3">{type.subtitle}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${difficultyColor[type.difficulty]}`}>{type.difficulty}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {type.duration}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                        {type.questions.length} questions
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <TrendingUp className="w-3.5 h-3.5" /> Analyse + réponse idéale incluse
                  </div>
                  <div className={`flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r ${type.gradient} text-white text-xs font-bold shadow-sm`}>
                    Commencer →
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comment ça marche */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-indigo-600" /> Comment ça marche ?
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { n: "1", icon: <Users className="w-5 h-5 text-indigo-600" />, title: "Choisissez", desc: "Sélectionnez le type d'entretien adapté à votre situation." },
              { n: "2", icon: <Mic className="w-5 h-5 text-purple-600" />, title: "Répondez", desc: "Rédigez votre réponse à chaque question. Visez 50-180 mots." },
              { n: "3", icon: <TrendingUp className="w-5 h-5 text-emerald-600" />, title: "Analysez", desc: "Recevez un feedback sur vos points forts et axes d'amélioration." },
              { n: "4", icon: <Lightbulb className="w-5 h-5 text-amber-600" />, title: "Progressez", desc: "Comparez votre réponse à la réponse idéale et recommencez." },
            ].map((s, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-7 h-7 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">{s.n}</div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-0.5">{s.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
