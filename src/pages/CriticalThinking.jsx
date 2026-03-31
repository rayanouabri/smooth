import React, { useState } from "react";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Brain, Eye, Play, RotateCcw, ArrowLeft, ArrowRight, EyeOff, AlertTriangle
} from "lucide-react";
import ChatBot from "../components/ChatBot";

const exercises = [
  {
    id: 1,
    title: "Offre d'emploi suspecte",
    category: "Emploi",
    color: "bg-red-100 text-red-700",
    document: `OFFRE D'EMPLOI - URGENT
"Entreprise internationale cherche étudiants motivés pour travail à domicile. Revenus de 2000 à 5000 euros/mois pour seulement 2h de travail par jour. Aucune expérience requise. Démarrage immédiat.
Vous devez simplement recevoir des colis chez vous et les réexpédier à l'étranger. Frais d'inscription : 50 euros (remboursés dès le premier mois).
Contactez-nous par WhatsApp uniquement : +33 6 XX XX XX XX"`,
    analysis_questions: [
      "Quels éléments vous semblent suspects dans cette offre ?",
      "Quels risques prenez-vous si vous acceptez ?",
      "Comment vérifier la légitimité d'une offre d'emploi ?"
    ],
    reference_analysis: "Signaux d'alerte majeurs : 1) Revenus disproportionnés pour peu de travail (2000-5000 euros pour 2h/jour). 2) Frais d'inscription demandés - un vrai employeur ne fait jamais payer. 3) Contact uniquement par WhatsApp, pas de site web ni d'adresse. 4) Aucun nom d'entreprise vérifié. 5) La réexpédition de colis est souvent du recel de marchandises volées ou du blanchiment d'argent. Risques : poursuites pénales pour complicité de recel/blanchiment, perte des 50 euros, vol d'identité. Vérification : chercher l'entreprise sur societe.com, consulter les avis en ligne, passer par des sites d'emploi officiels (Pôle emploi, Indeed, LinkedIn)."
  },
  {
    id: 2,
    title: "Annonce de logement trop belle",
    category: "Logement",
    color: "bg-blue-100 text-blue-700",
    document: `LOCATION STUDIO PARIS 5e - 400 euros/mois
Magnifique studio meublé de 35m2, refait à neuf, au calme, proche RER et métro.
Cuisine équipée, parquet, double vitrage. Charges comprises.
Le propriétaire est actuellement à l'étranger pour raisons professionnelles.
Il vous demande d'envoyer 800 euros (caution + premier mois) par virement Western Union pour réserver l'appartement.
"Je vous enverrai les clés par courrier recommandé dès réception du paiement."
Photos très professionnelles jointes à l'annonce.`,
    analysis_questions: [
      "Pourquoi ce prix est-il suspect pour Paris 5e ?",
      "Quels éléments indiquent une arnaque ?",
      "Quelles précautions prendre pour une location ?"
    ],
    reference_analysis: "Analyse critique : 1) Le prix est irréaliste : un studio de 35m2 dans le 5e arrondissement coûte au minimum 900-1200 euros/mois. 2) Propriétaire à l'étranger qui ne peut pas faire visiter = arnaque classique. 3) Paiement par Western Union = transfert non traçable et non remboursable. 4) Envoi de clés par courrier = les clés ne correspondront à rien. 5) Photos professionnelles souvent volées sur d'autres sites. Règles d'or : toujours visiter en personne avant de payer, ne jamais payer par virement international, vérifier l'identité du propriétaire (titre de propriété), passer par des agences ou sites reconnus, un propriétaire ne peut pas demander plus d'un mois de caution pour un meublé."
  },
  {
    id: 3,
    title: "Publicité d'école privée",
    category: "Formation",
    color: "bg-green-100 text-green-700",
    document: `ÉCOLE SUPÉRIEURE DE COMMERCE INTERNATIONAL (ESCI)
"Diplôme reconnu internationalement - 100% de placement après la formation"
Formation en 1 an - Master en Management International
Frais de scolarité : 8 500 euros
"Notre diplôme vous ouvre les portes des plus grandes entreprises françaises et internationales"
Pas de sélection à l'entrée - Inscription ouverte toute l'année
Établissement enregistré au rectorat - Numéro SIRET disponible
Témoignages de 3 anciens étudiants avec photos.`,
    analysis_questions: [
      "Quelles vérifications faire avant de s'inscrire ?",
      "Quels éléments sont trompeurs dans cette publicité ?",
      "Quelle est la différence entre 'enregistré' et 'reconnu par l'État' ?"
    ],
    reference_analysis: "Points critiques : 1) 'Reconnu internationalement' ne veut rien dire juridiquement. Il faut vérifier si le diplôme est inscrit au RNCP (Répertoire National des Certifications Professionnelles). 2) '100% de placement' est une affirmation invérifiable et très probablement fausse. 3) 'Pas de sélection à l'entrée' pour un Master est un signal d'alerte : les vrais Masters sont sélectifs. 4) 'Enregistré au rectorat' signifie simplement que l'école existe administrativement, PAS que son diplôme est reconnu par l'État. Un numéro SIRET prouve juste l'existence de l'entreprise. 5) Les témoignages sont facilement inventés. Vérifications essentielles : chercher l'école sur le site du Ministère de l'Enseignement Supérieur, vérifier le RNCP, consulter les classements officiels, demander les statistiques d'insertion vérifiables."
  },
  {
    id: 4,
    title: "Offre de forfait téléphone",
    category: "Consommation",
    color: "bg-orange-100 text-orange-700",
    document: `SMS reçu : "FÉLICITATIONS ! Vous avez été sélectionné pour un forfait EXCEPTIONNEL :
Appels illimités + 100Go + International = 2 euros/mois pendant 12 mois !
Offre réservée aux 50 premiers inscrits. Expire dans 2 heures.
Pour souscrire immédiatement, cliquez sur ce lien : http://bit.ly/offre-tel-exclu
Munissez-vous de votre RIB et pièce d'identité."`,
    analysis_questions: [
      "Quels mécanismes de manipulation sont utilisés ?",
      "Quels risques si vous cliquez et fournissez vos informations ?",
      "Comment vérifier la légitimité d'une offre commerciale ?"
    ],
    reference_analysis: "Techniques de manipulation identifiées : 1) Urgence artificielle ('expire dans 2 heures') pour empêcher la réflexion. 2) Rareté ('50 premiers inscrits') pour créer la peur de rater. 3) Prix irréaliste (2 euros pour un tel forfait) pour attirer. 4) 'Félicitations, vous avez été sélectionné' = flatterie. Risques : le lien raccourci (bit.ly) masque la vraie destination. Fournir RIB + pièce d'identité = risque d'usurpation d'identité et de prélèvements frauduleux. Le site peut aussi installer un malware. Bons réflexes : ne jamais cliquer sur des liens dans des SMS non sollicités, vérifier les offres directement sur les sites officiels des opérateurs, signaler le SMS au 33700 (plateforme anti-spam), ne jamais donner son RIB à un inconnu."
  }
];

export default function CriticalThinking() {
  const [phase, setPhase] = useState("home");
  const [currentExercise, setCurrentExercise] = useState(0);
  const [responses, setResponses] = useState({});
  const [currentText, setCurrentText] = useState("");
  const [showAnalysis, setShowAnalysis] = useState({});

  const startExercise = () => {
    setPhase("exercise");
    setCurrentExercise(0);
    setResponses({});
    setCurrentText("");
    setShowAnalysis({});
  };

  const saveAndNext = () => {
    const updated = { ...responses, [currentExercise]: currentText };
    setResponses(updated);
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setCurrentText(updated[currentExercise + 1] || "");
    } else {
      setPhase("review");
    }
  };

  const goPrev = () => {
    const updated = { ...responses, [currentExercise]: currentText };
    setResponses(updated);
    setCurrentExercise(currentExercise - 1);
    setCurrentText(updated[currentExercise - 1] || "");
  };

  const toggleAnalysis = (idx) => {
    setShowAnalysis(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (phase === "review") {
    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title="Résultats - Pensée critique" noindex={true} />
        <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-10">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Brain className="w-12 h-12 mx-auto mb-3 text-cyan-300" />
            <h1 className="text-3xl font-bold mb-1">Analyses comparées</h1>
            <p className="text-blue-200">Comparez votre analyse avec l'analyse de référence</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          {exercises.map((ex, i) => (
            <Card key={ex.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{ex.title}</CardTitle>
                  <Badge className={ex.color}>{ex.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                  <p className="text-xs text-gray-700 whitespace-pre-wrap">{ex.document}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Votre analyse :</h4>
                  <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg whitespace-pre-wrap">
                    {responses[i] || "Pas de réponse"}
                  </p>
                </div>
                <Button variant="outline" size="sm" onClick={() => toggleAnalysis(i)}>
                  {showAnalysis[i] ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                  {showAnalysis[i] ? "Masquer" : "Voir"} l'analyse de référence
                </Button>
                {showAnalysis[i] && (
                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-800 mb-2">Analyse de référence :</h4>
                    <p className="text-sm text-green-900 whitespace-pre-wrap">{ex.reference_analysis}</p>
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
    const ex = exercises[currentExercise];
    return (
      <div className="min-h-screen bg-gray-50">
        <SEO title={`Exercice ${currentExercise + 1} - Pensée critique`} noindex={true} />
        <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-6">
          <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">Pensée critique</h1>
              <p className="text-blue-200 text-sm">Exercice {currentExercise + 1} sur {exercises.length}</p>
            </div>
            <Badge className={ex.color}>{ex.category}</Badge>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-500" /> {ex.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Document à analyser :</h4>
                <p className="text-sm text-yellow-900 whitespace-pre-wrap font-mono">{ex.document}</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Questions d'analyse :</h4>
                {ex.analysis_questions.map((q, idx) => (
                  <p key={idx} className="text-sm text-blue-800 mb-1">- {q}</p>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Votre analyse critique</CardTitle></CardHeader>
            <CardContent>
              <Textarea
                value={currentText}
                onChange={e => setCurrentText(e.target.value)}
                placeholder="Analysez ce document de manière critique. Identifiez les points suspects, les risques, et expliquez votre raisonnement..."
                rows={8}
                className="resize-y"
              />
              <p className="text-xs text-gray-400 mt-2">{currentText.length} caractères</p>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={goPrev} disabled={currentExercise === 0}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Précédent
            </Button>
            <Button onClick={saveAndNext} disabled={!currentText.trim()} className="bg-indigo-600 hover:bg-indigo-700">
              {currentExercise === exercises.length - 1 ? "Voir les résultats" : "Suivant"} <ArrowRight className="w-4 h-4 ml-1" />
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
        title="Pensée critique - FrancePrepAcademy"
        description="Développez votre esprit critique avec des exercices d'analyse de documents."
        canonical="/criticalthinking"
        noindex={true}
      />
      <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-1">Pensée critique</h1>
          <p className="text-blue-200">Analysez des documents et développez votre esprit critique</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Card>
          <CardContent className="p-8 text-center space-y-4">
            <Brain className="w-14 h-14 text-blue-600 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-900">Analyse critique de documents</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              4 documents à analyser : offre d'emploi, annonce de logement, publicité d'école et offre commerciale.
              Identifiez les pièges et comparez avec l'analyse de référence.
            </p>
            <Button onClick={startExercise} size="lg" className="bg-blue-600 hover:bg-blue-700 mt-4">
              <Play className="w-5 h-5 mr-2" /> Commencer les exercices
            </Button>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          {exercises.map(ex => (
            <Card key={ex.id}>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className={ex.color}>{ex.category}</Badge>
                  <h3 className="font-medium text-gray-900 text-sm">{ex.title}</h3>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">{ex.document.substring(0, 100)}...</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
