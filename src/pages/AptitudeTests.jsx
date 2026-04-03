import React, { useState, useEffect, useCallback } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Clock, Brain, Target, CheckCircle, XCircle,
  Play, RotateCcw, Trophy, BookOpen, Globe, Calculator, ArrowRight,
  Zap, Star, TrendingUp, ChevronRight, Award, AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "../components/ChatBot";

// Banque de questions intégrée
const questionBank = {
  culture_france: {
    name: "Culture & vie en France",
    desc: "Connaissances sur la culture, les institutions et la vie quotidienne",
    icon: Globe,
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    lightText: "text-blue-700",
    accentColor: "bg-blue-500",
    ringColor: "ring-blue-500",
    emoji: "🇫🇷",
    difficulty: "Intermédiaire",
    diffColor: "text-amber-600 bg-amber-50",
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
      { q: "Quel est le numéro d'urgence européen ?", options: { A: "15", B: "17", C: "112", D: "911" }, correct: "C", explanation: "Le 112 est le numéro d'urgence européen. En France, le 15 = SAMU, 17 = Police, 18 = Pompiers." },
      { q: "Quelle est la durée du mandat présidentiel en France ?", options: { A: "4 ans", B: "5 ans", C: "6 ans", D: "7 ans" }, correct: "B", explanation: "Le président de la République française est élu pour un mandat de 5 ans, renouvelable une fois depuis 2000." },
      { q: "Quel est le jour de la fête nationale française ?", options: { A: "1er mai", B: "8 mai", C: "14 juillet", D: "11 novembre" }, correct: "C", explanation: "Le 14 juillet est la Fête Nationale française, commémorant la prise de la Bastille en 1789." },
      { q: "Qu'est-ce que le 'Pass Navigo' ?", options: { A: "Un passeport pour voyager en Europe", B: "Un abonnement de transport en Île-de-France", C: "Un programme d'aide à la navigation", D: "Une carte bancaire de transport" }, correct: "B", explanation: "Le Pass Navigo est le titre de transport mensuel ou hebdomadaire pour les transports en commun d'Île-de-France (métro, RER, bus, etc.)." },
      { q: "Qu'est-ce que Pôle Emploi (France Travail) ?", options: { A: "Une agence de location de logements", B: "L'organisme public de placement et d'indemnisation des chômeurs", C: "Un réseau d'entreprises françaises", D: "Un programme de formation professionnelle" }, correct: "B", explanation: "France Travail (ex-Pôle Emploi) est l'organisme public qui accompagne les demandeurs d'emploi et verse les allocations chômage." },
      { q: "Quelle langue, outre le français, est co-officielle en France ?", options: { A: "L'alsacien", B: "Aucune, le français est la seule langue officielle", C: "Le breton", D: "L'occitan" }, correct: "B", explanation: "La Constitution française stipule que 'la langue de la République est le français'. Il n'y a pas de co-langue officielle, bien que des langues régionales existent." },
      { q: "Que signifie 'état des lieux' dans le contexte de la location ?", options: { A: "Un document fiscal", B: "Un inventaire de l'état du logement à l'entrée et sortie", C: "Un plan d'aménagement", D: "Un contrat de sous-location" }, correct: "B", explanation: "L'état des lieux est un document réalisé lors de l'entrée et sortie du logement qui décrit son état. Il protège le locataire et le bailleur." },
      { q: "Quelle est la durée légale du travail hebdomadaire en France ?", options: { A: "35 heures", B: "38 heures", C: "40 heures", D: "42 heures" }, correct: "A", explanation: "La durée légale du travail en France est de 35 heures par semaine, instaurée par la loi Aubry en 2000." },
      { q: "Qu'est-ce que le 'tiers payant' chez le médecin ?", options: { A: "Payer un tiers du prix de la consultation", B: "Se faire rembourser par un tiers", C: "Ne pas avancer les frais médicaux pris en charge par la Sécu", D: "Un système de paiement en trois fois" }, correct: "C", explanation: "Le tiers payant permet de ne pas avancer les frais médicaux : l'Assurance Maladie et la mutuelle paient directement le médecin." },
      { q: "Quel est le principal avantage du statut étudiant en France ?", options: { A: "Accès gratuit à tous les transports", B: "Accès à des tarifs réduits dans de nombreux domaines", C: "Exemption d'impôts à vie", D: "Logement gratuit au CROUS" }, correct: "B", explanation: "Le statut étudiant permet d'obtenir des réductions dans les transports, la culture, la restauration et de nombreux services grâce à la carte étudiante." }
    ]
  },
  administration: {
    name: "Démarches administratives",
    desc: "Les démarches essentielles pour s'installer et étudier en France",
    icon: BookOpen,
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-700",
    accentColor: "bg-emerald-500",
    ringColor: "ring-emerald-500",
    emoji: "📋",
    difficulty: "Débutant",
    diffColor: "text-emerald-600 bg-emerald-50",
    time: 10,
    questions: [
      { q: "Que signifie VLS-TS ?", options: { A: "Visa Long Séjour - Titre de Séjour", B: "Visa Longue Scolarité - Transport Scolaire", C: "Visa Long Séjour valant Titre de Séjour", D: "Validation Longue Séjour - Travail Salarié" }, correct: "C", explanation: "Le VLS-TS doit être validé auprès de l'OFII dans les 3 mois suivant l'arrivée." },
      { q: "Dans quel délai devez-vous valider votre VLS-TS après votre arrivée en France ?", options: { A: "1 mois", B: "3 mois", C: "6 mois", D: "1 an" }, correct: "B", explanation: "Vous devez valider votre VLS-TS dans les 3 mois suivant votre arrivée en France via la plateforme en ligne de l'OFII." },
      { q: "Qu'est-ce que la carte Vitale ?", options: { A: "Une carte de transport", B: "Une carte bancaire", C: "La carte d'assurance maladie", D: "Une carte étudiante" }, correct: "C", explanation: "La carte Vitale est la carte d'assurance maladie qui permet le remboursement des frais de santé." },
      { q: "Auprès de quel organisme faire sa demande d'APL ?", options: { A: "La mairie", B: "La CAF", C: "La préfecture", D: "La banque" }, correct: "B", explanation: "La demande d'APL se fait auprès de la CAF (Caisse d'Allocations Familiales), en ligne sur caf.fr." },
      { q: "Qu'est-ce que Campus France ?", options: { A: "Un réseau d'universités françaises", B: "L'agence de promotion de l'enseignement supérieur français", C: "Un site de recherche d'emploi", D: "Une agence immobilière étudiante" }, correct: "B", explanation: "Campus France est l'agence nationale chargée de la promotion de l'enseignement supérieur français à l'étranger." },
      { q: "Quel document faut-il pour ouvrir un compte bancaire en France ?", options: { A: "Uniquement le passeport", B: "Un justificatif de domicile et une pièce d'identité", C: "Uniquement le titre de séjour", D: "Le diplôme du bac" }, correct: "B", explanation: "Il faut généralement un justificatif de domicile, une pièce d'identité et un justificatif de statut." },
      { q: "Que signifie CVEC ?", options: { A: "Contribution Vie Étudiante et de Campus", B: "Carte de Validation des Études et Concours", C: "Centre de Vérification des Étudiants en Campus", D: "Certificat de Vie Étudiante Complet" }, correct: "A", explanation: "La CVEC est une contribution obligatoire d'environ 100€ pour les étudiants, à payer avant l'inscription universitaire." },
      { q: "Où se rendre pour renouveler son titre de séjour ?", options: { A: "À la mairie", B: "À la préfecture ou sous-préfecture", C: "À l'ambassade", D: "À la CAF" }, correct: "B", explanation: "Le renouvellement du titre de séjour se fait à la préfecture ou sous-préfecture de votre lieu de résidence." },
      { q: "Qu'est-ce qu'une mutuelle étudiante ?", options: { A: "Un prêt étudiant", B: "Une assurance complémentaire santé", C: "Un logement étudiant", D: "Un repas au CROUS" }, correct: "B", explanation: "La mutuelle étudiante est une complémentaire santé qui rembourse la part non couverte par la Sécurité sociale." },
      { q: "Quel est le rôle du CROUS ?", options: { A: "Gérer les transports", B: "Gérer les résidences et restaurants universitaires", C: "Délivrer les visas", D: "Organiser les examens" }, correct: "B", explanation: "Le CROUS gère les résidences universitaires, les restaurants (RU), les bourses et l'aide sociale étudiante." },
      { q: "Qu'est-ce qu'un 'garant' pour une location ?", options: { A: "Un voisin témoin", B: "L'agent immobilier", C: "Une personne qui s'engage à payer le loyer si le locataire ne peut pas", D: "L'assureur habitation" }, correct: "C", explanation: "Le garant (ou caution) est une personne physique ou morale qui s'engage à payer le loyer et les charges si le locataire est défaillant." },
      { q: "Quel formulaire faut-il remplir pour la première déclaration de revenus ?", options: { A: "Formulaire 2042", B: "Formulaire CERFA 14011", C: "Formulaire S1106", D: "Il n'y a pas de déclaration pour les étudiants" }, correct: "A", explanation: "Le formulaire 2042 est la déclaration de revenus de base. Les étudiants dont les revenus dépassent le plafond doivent déclarer, même pour la première fois." },
      { q: "Que signifie 'SIRET' dans le contexte professionnel ?", options: { A: "Système d'Identification du Répertoire des Établissements", B: "Service International de Renseignement et d'Emploi en Transit", C: "Syndicat Interprofessionnel des Relations d'Entreprises et de Travail", D: "Sous-Inspection Régionale des Étudiants en Transit" }, correct: "A", explanation: "Le SIRET est un identifiant unique à 14 chiffres attribué à chaque établissement (entreprise, association) par l'INSEE." },
      { q: "Comment appelle-t-on les aides de la CAF pour les étudiants sans enfant ?", options: { A: "RSA", B: "APL et ALS", C: "ARE", D: "ASS" }, correct: "B", explanation: "Pour les étudiants, les principales aides au logement de la CAF sont l'APL (logement conventionné) et l'ALS (logement non conventionné)." },
      { q: "Quel document reçoit-on après validation du VLS-TS par l'OFII ?", options: { A: "Une nouvelle carte de séjour", B: "Une vignette autocollante apposée sur le passeport", C: "Un certificat imprimé", D: "Un email de confirmation uniquement" }, correct: "B", explanation: "Après validation en ligne du VLS-TS sur le site de l'OFII, vous recevez une vignette autocollante à coller sur votre passeport." },
      { q: "Que signifie 'CAF en ligne' ?", options: { A: "Un café avec connexion internet", B: "Le portail numérique de la Caisse d'Allocations Familiales", C: "Une formation en ligne de la CAF", D: "Un chatbot de la CAF" }, correct: "B", explanation: "Caf.fr est le portail en ligne où les allocataires gèrent leurs dossiers, déclarent leurs revenus et suivent leurs paiements." },
      { q: "Qu'est-ce qu'une 'assurance responsabilité civile' ?", options: { A: "Une assurance contre le vol", B: "Une couverture pour les dommages causés à autrui", C: "Une assurance vie", D: "Une protection juridique" }, correct: "B", explanation: "La responsabilité civile couvre les dommages matériels ou corporels que vous causez involontairement à des tiers. Elle est souvent incluse dans l'assurance habitation." },
      { q: "Quelle est la durée maximale d'un CDD (contrat à durée déterminée) en France ?", options: { A: "6 mois", B: "12 mois", C: "18 mois (renouvelable jusqu'à 18 mois max)", D: "24 mois" }, correct: "C", explanation: "Un CDD peut durer 18 mois maximum en général (renouvellements inclus), sauf exceptions particulières prévues par la loi." },
      { q: "Que signifie 'domiciliation bancaire' ?", options: { A: "Avoir son domicile près de sa banque", B: "Faire virer son salaire ou ses revenus sur un compte bancaire précis", C: "Changer de banque", D: "Ouvrir un compte dans le pays de domicile" }, correct: "B", explanation: "La domiciliation bancaire consiste à faire virer ses revenus (salaire, bourse, aides) sur un compte désigné. Certains employeurs ou organismes l'exigent." }
    ]
  },
  logique: {
    name: "Logique & raisonnement",
    desc: "Exercez votre capacité de raisonnement et votre esprit d'analyse",
    icon: Brain,
    gradient: "from-purple-500 to-violet-600",
    lightBg: "bg-purple-50",
    lightText: "text-purple-700",
    accentColor: "bg-purple-500",
    ringColor: "ring-purple-500",
    emoji: "🧠",
    difficulty: "Avancé",
    diffColor: "text-rose-600 bg-rose-50",
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
      { q: "Dans une classe de 30 élèves, 18 parlent anglais et 12 parlent espagnol. 5 parlent les deux. Combien ne parlent ni l'un ni l'autre ?", options: { A: "3", B: "5", C: "7", D: "10" }, correct: "B", explanation: "Au moins une langue = 18+12-5 = 25. Aucune langue = 30-25 = 5." },
      { q: "Quel mot ne peut pas remplacer 'rapide' dans cette phrase : 'Il est un coureur ___' ?", options: { A: "Véloce", B: "Lent", C: "Agile", D: "Vif" }, correct: "B", explanation: "Lent est l'antonyme de rapide. Véloce, agile et vif sont tous des synonymes ou termes proches de rapide." },
      { q: "Complétez la série : 3, 9, 27, 81, ...", options: { A: "162", B: "240", C: "243", D: "270" }, correct: "C", explanation: "Chaque terme est multiplié par 3 : 81 × 3 = 243." },
      { q: "Si tous les A sont des B, et tous les B sont des C, alors :", options: { A: "Tous les C sont des A", B: "Certains C sont des A", C: "Tous les A sont des C", D: "Aucun C n'est un A" }, correct: "C", explanation: "Par transitivité : si A→B et B→C, alors A→C. Tous les A sont nécessairement des C." },
      { q: "Lequel de ces mots est un anagramme de FRANCE ?", options: { A: "FARCEN", B: "CERFAN", C: "FARCE + N manque", D: "FRANEC" }, correct: "A", explanation: "FARCEN utilise exactement les mêmes lettres que FRANCE (F,R,A,N,C,E). C'est un anagramme valide." },
      { q: "Un employé travaille 5 jours sur 7. En un mois de 28 jours, combien de jours travaille-t-il ?", options: { A: "18", B: "20", C: "22", D: "24" }, correct: "B", explanation: "28 jours = 4 semaines. 4 × 5 jours/semaine = 20 jours travaillés." },
      { q: "Quelle figure vient ensuite dans la série : ○ △ □ ○ △ □ ○ △ ... ?", options: { A: "○", B: "△", C: "□", D: "◇" }, correct: "C", explanation: "La série se répète en cycle de 3 : cercle, triangle, carré. Après ○ △, vient □." },
      { q: "Si 5 chats attrapent 5 souris en 5 minutes, combien de chats faut-il pour attraper 100 souris en 100 minutes ?", options: { A: "100 chats", B: "20 chats", C: "5 chats", D: "10 chats" }, correct: "C", explanation: "Chaque chat attrape 1 souris en 5 minutes, soit 20 souris en 100 minutes. Pour 100 souris : 100/20 = 5 chats." },
      { q: "Trois amis partagent un appartement. Le loyer total est de 900€. Ahmed paie 2 fois plus que Léa, et Marc paie autant que Léa. Combien paie Léa ?", options: { A: "200€", B: "225€", C: "250€", D: "300€" }, correct: "B", explanation: "Léa = x, Marc = x, Ahmed = 2x. Total : 4x = 900. x = 225€. Léa paie 225€." },
      { q: "Quel nombre manque ? 4, 8, ?, 32, 64", options: { A: "12", B: "16", C: "20", D: "24" }, correct: "B", explanation: "La série double à chaque étape : 4×2=8, 8×2=16, 16×2=32, 32×2=64. Le nombre manquant est 16." }
    ]
  },
  calcul: {
    name: "Calcul & mathématiques",
    desc: "Calcul mental et mathématiques appliquées à la vie en France",
    icon: Calculator,
    gradient: "from-orange-500 to-amber-500",
    lightBg: "bg-orange-50",
    lightText: "text-orange-700",
    accentColor: "bg-orange-500",
    ringColor: "ring-orange-500",
    emoji: "🔢",
    difficulty: "Intermédiaire",
    diffColor: "text-amber-600 bg-amber-50",
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
      { q: "Un produit passe de 25€ à 30€. Quel est le pourcentage d'augmentation ?", options: { A: "15%", B: "20%", C: "25%", D: "30%" }, correct: "B", explanation: "Augmentation = 5€. Pourcentage = (5/25) × 100 = 20%." },
      { q: "Vous recevez une facture de 85€ HT avec une TVA de 20%. Quel est le montant TTC ?", options: { A: "95€", B: "100€", C: "102€", D: "105€" }, correct: "C", explanation: "TTC = HT × (1 + TVA) = 85 × 1.20 = 102€." },
      { q: "Un étudiant a 1200€ de bourse sur 9 mois. Combien reçoit-il par mois ?", options: { A: "120€", B: "133€", C: "150€", D: "200€" }, correct: "B", explanation: "1200 ÷ 9 = 133,33€ par mois (arrondi à 133€)." },
      { q: "Si votre loyer est 550€ et augmente de 3%, quel sera le nouveau loyer ?", options: { A: "565€", B: "566,50€", C: "570€", D: "572€" }, correct: "B", explanation: "550 × 1.03 = 566,50€. Le nouveau loyer sera de 566,50€." },
      { q: "Vous avez 8 billets de 20€ et 5 billets de 10€. Combien avez-vous en tout ?", options: { A: "180€", B: "200€", C: "210€", D: "220€" }, correct: "C", explanation: "8 × 20 = 160€ et 5 × 10 = 50€. Total = 160 + 50 = 210€." },
      { q: "Un contrat de 3 mois commence le 1er février. Quand se termine-t-il ?", options: { A: "30 avril", B: "1er mai", C: "31 mars", D: "30 mai" }, correct: "A", explanation: "Février (1 mois) → fin février, + mars (2e mois), + avril (3e mois) → se termine le 30 avril." },
      { q: "Votre salaire net est 1650€. Les cotisations représentent 25% du brut. Quel est votre salaire brut ?", options: { A: "2000€", B: "2100€", C: "2200€", D: "2400€" }, correct: "C", explanation: "Net = Brut × 0.75. Donc Brut = 1650 / 0.75 = 2200€." },
      { q: "Sur une facture de téléphone de 29,99€/mois, quelle est la dépense annuelle arrondie ?", options: { A: "300€", B: "340€", C: "360€", D: "380€" }, correct: "C", explanation: "29,99 × 12 = 359,88€ ≈ 360€ arrondi." },
      { q: "Vous partagez une addition de 63€ entre 3 personnes, avec un pourboire de 10%. Combien chacun paie-t-il ?", options: { A: "21€", B: "23,10€", C: "24€", D: "25€" }, correct: "B", explanation: "Total avec pourboire = 63 × 1.10 = 69,30€. Par personne = 69,30 / 3 = 23,10€." },
      { q: "Combien de semaines y a-t-il dans une année scolaire de septembre à juin (10 mois) ?", options: { A: "36 semaines", B: "40 semaines", C: "42 semaines", D: "44 semaines" }, correct: "B", explanation: "10 mois × 4 semaines = 40 semaines environ (en pratique entre 36 et 40 selon les vacances scolaires)." }
    ]
  }
};

const OPTION_KEYS = ["A", "B", "C", "D"];

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
        if (prev <= 1) { completeTest(); return 0; }
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
      let correct = 0;
      test.questions.forEach((q, i) => {
        if (newAnswers[i] === q.correct) correct++;
      });
      const score = Math.round((correct / test.questions.length) * 100);
      setResults({ correct, total: test.questions.length, score, answers: newAnswers });
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

  // ─── RESULTS SCREEN ───────────────────────────────────────────────────────────
  if (results && selectedTest) {
    const test = questionBank[selectedTest];
    const isExcellent = results.score >= 80;
    const isGood = results.score >= 60;
    const scoreEmoji = isExcellent ? "🏆" : isGood ? "👏" : "💪";
    const scoreLabel = isExcellent ? "Excellent !" : isGood ? "Bon résultat !" : "Continuez à vous entraîner !";
    const scoreGradient = isExcellent ? "from-amber-400 to-orange-500" : isGood ? "from-blue-400 to-indigo-500" : "from-rose-400 to-red-500";

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <SEO title="Résultats du test - FrancePrepAcademy" noindex={true} />

        {/* Hero result */}
        <div className={`bg-gradient-to-br ${test.gradient} text-white`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
              className="text-6xl mb-4">{scoreEmoji}</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-extrabold mb-2">{scoreLabel}</motion.h1>
            <p className="text-white/80 text-lg">{test.name}</p>

            {/* Score ring */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
              className="mt-8 inline-flex items-center justify-center w-28 h-28 rounded-full bg-white/20 border-4 border-white/40 backdrop-blur">
              <span className="text-4xl font-black">{results.score}<span className="text-xl font-bold">%</span></span>
            </motion.div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Score global", value: `${results.score}%`, color: isExcellent ? "text-amber-600" : isGood ? "text-blue-600" : "text-rose-600", bg: isExcellent ? "bg-amber-50 border-amber-200" : isGood ? "bg-blue-50 border-blue-200" : "bg-rose-50 border-rose-200" },
              { label: "Bonnes réponses", value: `${results.correct}/${results.total}`, color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200" },
              { label: "Erreurs", value: `${results.total - results.correct}`, color: "text-rose-600", bg: "bg-rose-50 border-rose-200" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i + 0.4 }}
                className={`rounded-2xl border-2 p-5 text-center ${s.bg}`}>
                <div className={`text-3xl font-extrabold ${s.color}`}>{s.value}</div>
                <p className="text-xs text-gray-500 mt-1 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Correction détaillée */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              <h2 className="text-base font-bold text-gray-900">Correction détaillée</h2>
            </div>
            <div className="divide-y divide-gray-50 max-h-[600px] overflow-y-auto">
              {test.questions.map((question, idx) => {
                const isCorrect = results.answers[idx] === question.correct;
                return (
                  <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.03 }}
                    className={`px-6 py-5 ${isCorrect ? "bg-emerald-50/50" : "bg-rose-50/50"}`}>
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${isCorrect ? "bg-emerald-500" : "bg-rose-500"}`}>
                        {isCorrect ? <CheckCircle className="w-4 h-4 text-white" /> : <XCircle className="w-4 h-4 text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 mb-2">Q{idx + 1}. {question.q}</p>
                        <div className="space-y-1 text-xs">
                          <p className={`font-medium ${isCorrect ? "text-emerald-700" : "text-rose-700"}`}>
                            Votre réponse : {results.answers[idx] ? `${results.answers[idx]}. ${question.options[results.answers[idx]]}` : "Pas de réponse"}
                          </p>
                          {!isCorrect && (
                            <p className="font-medium text-emerald-700">
                              ✓ Bonne réponse : {question.correct}. {question.options[question.correct]}
                            </p>
                          )}
                          <p className="text-gray-500 italic pt-1 border-t border-gray-100 mt-1">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center gap-3 pb-8">
            <Button size="lg" onClick={resetTest}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-lg px-8">
              <RotateCcw className="w-4 h-4 mr-2" />
              Choisir un autre test
            </Button>
            <Button size="lg" variant="outline" onClick={() => startTest(selectedTest)}
              className="rounded-xl border-2 px-8">
              <Play className="w-4 h-4 mr-2" />
              Réessayer ce test
            </Button>
          </div>
        </div>
        <ChatBot />
      </div>
    );
  }

  // ─── ACTIVE TEST SCREEN ───────────────────────────────────────────────────────
  if (isActive && selectedTest) {
    const test = questionBank[selectedTest];
    const question = test.questions[currentQ];
    const progress = (currentQ / test.questions.length) * 100;
    const isLowTime = timeLeft < 120;
    const answeredCount = answers.filter(Boolean).length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <SEO title={`${test.name} - FrancePrepAcademy`} noindex={true} />

        {/* Sticky header */}
        <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40 shadow-sm">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${test.gradient} flex items-center justify-center text-white text-sm`}>
                  {test.emoji}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{test.name}</p>
                  <p className="text-sm font-bold text-gray-900">Question {currentQ + 1} <span className="text-gray-400 font-normal">/ {test.questions.length}</span></p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-bold transition-colors ${
                  isLowTime ? "bg-red-100 text-red-700 animate-pulse" : "bg-gray-100 text-gray-700"
                }`}>
                  <Clock className="w-3.5 h-3.5" />
                  {formatTime(timeLeft)}
                </div>
                <Button size="sm" variant="outline" onClick={completeTest} className="rounded-xl text-xs">
                  Terminer
                </Button>
              </div>
            </div>
            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${test.gradient} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </div>

        {/* Question area */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AnimatePresence mode="wait">
            <motion.div key={currentQ}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              {/* Question card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold mb-4 bg-gradient-to-r ${test.gradient} text-white`}>
                  <Zap className="w-3 h-3" />
                  Question {currentQ + 1}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-relaxed">{question.q}</h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {OPTION_KEYS.map((key) => {
                  const isSelected = selectedAnswer === key;
                  return (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => setSelectedAnswer(key)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4 ${
                        isSelected
                          ? `border-transparent bg-gradient-to-r ${test.gradient} text-white shadow-lg`
                          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm text-gray-800"
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold flex-shrink-0 transition-all ${
                        isSelected ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                      }`}>
                        {key}
                      </div>
                      <span className="font-medium">{question.options[key]}</span>
                      {isSelected && <ChevronRight className="w-5 h-5 ml-auto opacity-70" />}
                    </motion.button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-2">
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
                  className="rounded-xl border-2"
                >
                  ← Précédente
                </Button>

                {/* Dots indicator */}
                <div className="flex gap-1.5">
                  {test.questions.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full transition-all ${
                      i === currentQ ? `bg-gradient-to-r ${test.gradient} w-4` :
                      answers[i] ? "bg-emerald-400" : "bg-gray-200"
                    }`} />
                  ))}
                </div>

                <Button
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                  className={`rounded-xl px-6 bg-gradient-to-r ${test.gradient} hover:opacity-90 text-white border-0 shadow-md disabled:opacity-40`}
                >
                  {currentQ === test.questions.length - 1 ? "Terminer" : "Suivante"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <ChatBot />
      </div>
    );
  }

  // ─── HOME SCREEN ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <SEO
        title="Tests d'aptitude - FrancePrepAcademy"
        description="Testez vos connaissances sur la France, les démarches administratives et le raisonnement logique."
        canonical="/aptitudetests"
        noindex={true}
      />

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white">
        <div className="absolute inset-0 opacity-10">
          {["🏆","🧠","📋","🔢","🎯","⚡","🌟"].map((emoji, i) => (
            <span key={i} className="absolute text-4xl select-none"
              style={{ top: `${10 + (i * 13) % 75}%`, left: `${5 + (i * 17) % 90}%`, opacity: 0.6 }}>
              {emoji}
            </span>
          ))}
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>4 catégories · 40 questions · Corrections détaillées</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Tests d'aptitude
          </h1>
          <p className="text-indigo-200 text-lg md:text-xl max-w-2xl mx-auto">
            Évaluez vos connaissances et préparez-vous pour votre vie en France avec des exercices ciblés.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Test cards grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {Object.entries(questionBank).map(([id, test], idx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => startTest(id)}
              className="group relative bg-white rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl cursor-pointer transition-all duration-300 overflow-hidden"
            >
              {/* Gradient top strip */}
              <div className={`h-2 w-full bg-gradient-to-r ${test.gradient}`} />

              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${test.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    {test.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-extrabold text-gray-900 group-hover:text-indigo-700 transition-colors">
                        {test.name}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed">{test.desc}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${test.diffColor}`}>
                        <Star className="w-2.5 h-2.5" />
                        {test.difficulty}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-600">
                        <BookOpen className="w-2.5 h-2.5" />
                        {test.questions.length} questions
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-600">
                        <Clock className="w-2.5 h-2.5" />
                        {test.time} min
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className={`mt-5 flex items-center justify-between pt-4 border-t border-gray-100`}>
                  <span className="text-xs text-gray-400">Correction incluse à la fin</span>
                  <div className={`flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r ${test.gradient} text-white text-xs font-bold shadow-sm group-hover:shadow-md transition-shadow`}>
                    <Play className="w-3 h-3" />
                    Commencer
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 bg-indigo-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
            </div>
            <h2 className="text-base font-bold text-gray-900">Comment ça marche ?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { step: "1", icon: <Target className="w-5 h-5 text-indigo-600" />, title: "Choisissez un test", desc: "Sélectionnez la catégorie qui correspond à vos besoins. Chaque test contient 10 questions." },
              { step: "2", icon: <Zap className="w-5 h-5 text-amber-600" />, title: "Répondez aux questions", desc: "Répondez à votre rythme ou contre la montre. Naviguez librement entre les questions." },
              { step: "3", icon: <Award className="w-5 h-5 text-emerald-600" />, title: "Analysez vos résultats", desc: "Obtenez votre score et une correction détaillée pour chaque question avec explications." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
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
