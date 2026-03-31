import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Lightbulb, Puzzle, Play, RotateCcw, ArrowLeft, ArrowRight, Eye, EyeOff, Home
} from "lucide-react";
import ChatBot from "../components/ChatBot";

const scenarios = [
  {
    id: 1,
    title: "Problème de logement",
    category: "Logement",
    color: "bg-blue-100 text-blue-700",
    situation: "Vous êtes étudiant international et votre propriétaire vous demande de quitter votre logement sous 15 jours pour 'travaux urgents'. Vous avez un bail de 12 mois signé il y a 3 mois. Il refuse de discuter et menace de changer les serrures. Votre garant est dans votre pays d'origine.",
    questions: [
      "Quels sont vos droits dans cette situation ?",
      "Quelles démarches devez-vous entreprendre en priorité ?",
      "À quels organismes pouvez-vous faire appel ?"
    ],
    recommended_approach: "En France, un propriétaire ne peut pas expulser un locataire sans procédure légale, même pour travaux. Avec un bail en cours, vous êtes protégé par la loi. Les étapes recommandées : 1) Ne pas quitter le logement. 2) Envoyer une lettre recommandée avec AR rappelant vos droits. 3) Contacter l'ADIL (Agence Départementale d'Information sur le Logement) pour un conseil juridique gratuit. 4) Contacter le service logement de votre université. 5) Si la menace persiste, saisir la commission de conciliation ou contacter un avocat via l'aide juridictionnelle. Le changement de serrures est un délit (violation de domicile)."
  },
  {
    id: 2,
    title: "Démarches administratives",
    category: "Administratif",
    color: "bg-green-100 text-green-700",
    situation: "Votre titre de séjour expire dans 3 semaines. La préfecture vous donne un rendez-vous dans 2 mois. Votre employeur a besoin d'un document de séjour valide pour renouveler votre contrat de travail le mois prochain. Sans ce document, vous risquez de perdre votre emploi.",
    questions: [
      "Comment gérer l'urgence du titre de séjour ?",
      "Que pouvez-vous fournir à votre employeur en attendant ?",
      "Quels recours avez-vous pour accélérer la procédure ?"
    ],
    recommended_approach: "1) Déposer immédiatement votre demande de renouvellement en ligne sur le site de l'ANEF. Cela génère une attestation de dépôt. 2) Avec la convocation de la préfecture + l'attestation de dépôt, vous avez le droit de rester et de travailler. 3) Demander un récépissé par email à la préfecture en expliquant l'urgence professionnelle. 4) Informer votre employeur par écrit que votre demande est en cours (fournir les preuves). 5) En dernier recours, contacter un médiateur du Défenseur des droits ou une association d'aide aux étrangers (CIMADE, Gisti). L'employeur ne peut pas vous licencier pour ce motif si vous prouvez que la démarche est en cours."
  },
  {
    id: 3,
    title: "Gestion de budget",
    category: "Budget",
    color: "bg-purple-100 text-purple-700",
    situation: "Vous recevez 800 euros par mois (bourse + aide familiale). Votre loyer est de 450 euros, et après les charges fixes (téléphone, transport, assurance), il vous reste 200 euros pour le mois. Une dépense imprévue de 300 euros survient (réparation d'ordinateur indispensable pour vos études). Vous n'avez pas d'économies.",
    questions: [
      "Comment financer cette dépense urgente ?",
      "Quelles aides d'urgence existent pour les étudiants ?",
      "Comment éviter cette situation à l'avenir ?"
    ],
    recommended_approach: "Solutions immédiates : 1) Contacter le CROUS pour une aide d'urgence (FNAU - Fonds National d'Aide d'Urgence). 2) Demander une aide ponctuelle au service social de l'université. 3) Vérifier si votre assurance habitation couvre le matériel informatique. 4) Chercher un ordinateur de prêt à la bibliothèque universitaire. À moyen terme : 5) Demander l'APL si ce n'est pas fait (aide au logement de la CAF). 6) Chercher un emploi étudiant compatible avec les études (max 964h/an avec titre de séjour étudiant). 7) Explorer les bourses complémentaires (Erasmus, fondations). Prévention : mettre de côté même 20-30 euros/mois pour les imprévus."
  },
  {
    id: 4,
    title: "Problème de santé",
    category: "Santé",
    color: "bg-red-100 text-red-700",
    situation: "Vous avez des maux de tête violents et persistants depuis une semaine. Vous n'avez pas encore de carte Vitale (votre dossier est en cours de traitement à la CPAM). Vous n'avez pas de médecin traitant. Les urgences de l'hôpital vous ont dit que ce n'était pas une urgence vitale et de consulter un médecin.",
    questions: [
      "Comment consulter un médecin sans carte Vitale ?",
      "Comment serez-vous remboursé ?",
      "Quelles structures de santé sont accessibles aux étudiants ?"
    ],
    recommended_approach: "1) Consulter le service de santé universitaire (SSU/SUMPPS) : consultations gratuites pour les étudiants inscrits, pas besoin de carte Vitale. 2) Aller dans un centre de santé municipal ou une maison de santé : ils pratiquent le tiers payant. 3) Avec votre attestation de droits CPAM (téléchargeable sur ameli.fr même sans la carte physique), vous pouvez consulter tout médecin. 4) Si vous avez une mutuelle étudiante complémentaire, elle peut avancer les frais. 5) En cas de difficulté financière, contacter le PASS (Permanence d'Accès aux Soins de Santé) de l'hôpital. 6) Garder toutes les feuilles de soins pour un remboursement rétroactif quand vous recevrez votre carte Vitale."
  }
];

export default function ProblemSolving() {
  const [phase, setPhase] = useState("home");
  const [currentScenario, setCurrentScenario] = useState(0);
  const [responses, setResponses] = useState({});
  const [currentText, setCurrentText] = useState("");
  const [showSolution, setShowSolution] = useState({});

  const startExercise = () => {
    setPhase("exercise");
    setCurrentScenario(0);
    setResponses({});
    setCurrentText("");
    setShowSolution({});
  };

  const saveAndNext = () => {
    const updated = { ...responses, [currentScenario]: currentText };
    setResponses(updated);
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setCurrentText(updated[currentScenario + 1] || "");
    } else {
      setPhase("review");
    }
  };

  const goPrev = () => {
    const updated = { ...responses, [currentScenario]: currentText };
    setResponses(updated);
    setCurrentScenario(currentScenario - 1);
    setCurrentText(updated[currentScenario - 1] || "");
  };

  const toggleSolution = (idx) => {
    setShowSolution(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (phase === "review") {
    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title="Résultats - Résolution de problèmes" noindex={true} />
        <div className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Lightbulb className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
            <h1 className="text-3xl font-bold mb-1">Vos réponses & solutions</h1>
            <p className="text-purple-200">Comparez vos réponses avec les approches recommandées</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          {scenarios.map((sc, i) => (
            <Card key={sc.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{sc.title}</CardTitle>
                  <Badge className={sc.color}>{sc.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Votre réponse :</h4>
                  <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg whitespace-pre-wrap">
                    {responses[i] || "Pas de réponse"}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleSolution(i)}
                >
                  {showSolution[i] ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                  {showSolution[i] ? "Masquer" : "Voir"} l'approche recommandée
                </Button>
                {showSolution[i] && (
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-800 mb-2">Approche recommandée :</h4>
                    <p className="text-sm text-green-900 whitespace-pre-wrap">{sc.recommended_approach}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
          <div className="text-center">
            <Button onClick={startExercise} className="bg-indigo-600 hover:bg-indigo-700">
              <RotateCcw className="w-4 h-4 mr-2" /> Recommencer
            </Button>
          </div>
        </div>
        <ChatBot />
      </div>
    );
  }

  if (phase === "exercise") {
    const sc = scenarios[currentScenario];
    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title={`Problème ${currentScenario + 1} - Résolution`} noindex={true} />
        <div className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-6">
          <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">Résolution de problèmes</h1>
              <p className="text-purple-200 text-sm">Situation {currentScenario + 1} sur {scenarios.length}</p>
            </div>
            <Badge className={sc.color}>{sc.category}</Badge>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Puzzle className="w-5 h-5 text-purple-600" /> {sc.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">{sc.situation}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Questions à considérer :</h4>
                {sc.questions.map((q, idx) => (
                  <p key={idx} className="text-sm text-blue-800 mb-1">- {q}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Votre solution</CardTitle></CardHeader>
            <CardContent>
              <Textarea
                value={currentText}
                onChange={e => setCurrentText(e.target.value)}
                placeholder="Décrivez votre approche pour résoudre ce problème. Quelles démarches feriez-vous ? À qui vous adresseriez-vous ?"
                rows={8}
                className="resize-y"
              />
              <p className="text-xs text-gray-400 mt-2">{currentText.length} caractères</p>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={goPrev} disabled={currentScenario === 0}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Précédent
            </Button>
            <Button onClick={saveAndNext} disabled={!currentText.trim()} className="bg-indigo-600 hover:bg-indigo-700">
              {currentScenario === scenarios.length - 1 ? "Voir les résultats" : "Suivant"} <ArrowRight className="w-4 h-4 ml-1" />
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
        title="Résolution de problèmes - FrancePrepAcademy"
        description="Entraînez-vous à résoudre des problèmes de la vie quotidienne en France."
        canonical="/problemsolving"
        noindex={true}
      />
      <div className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-1">Résolution de problèmes</h1>
          <p className="text-purple-200">Entraînez-vous avec des situations concrètes de la vie en France</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Card>
          <CardContent className="p-8 text-center space-y-4">
            <Puzzle className="w-14 h-14 text-purple-600 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-900">Situations réelles</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              4 mises en situation couvrant le logement, l'administratif, le budget et la santé.
              Proposez votre solution puis comparez avec l'approche recommandée.
            </p>
            <Button onClick={startExercise} size="lg" className="bg-purple-600 hover:bg-purple-700 mt-4">
              <Play className="w-5 h-5 mr-2" /> Commencer l'exercice
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          {scenarios.map(sc => (
            <Card key={sc.id}>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className={sc.color}>{sc.category}</Badge>
                  <h3 className="font-medium text-gray-900 text-sm">{sc.title}</h3>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">{sc.situation}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
