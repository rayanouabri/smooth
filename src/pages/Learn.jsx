import React, { useState, useEffect, useRef, useMemo } from "react";
import { me } from "@/api/auth";
import { supabase } from "@/api/supabaseClient";
import { UserProfile, Enrollment, Course, Lesson } from "@/api/entities";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import {
  ChevronLeft, ChevronRight, CheckCircle, Play, FileText, BookOpen,
  Award, Clock, ArrowLeft, Download, Send, X, Sparkles, Bot,
  Loader2, Lightbulb, PanelLeftClose, PanelLeftOpen, GraduationCap,
  Target, MessageSquare, ListChecks, HelpCircle, Zap, Brain,
  ChevronDown, ChevronUp, AlignLeft, Eye, Video, ExternalLink,
  RotateCcw, Trophy, Check
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "../utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { isPremium } from "@/utils/premium";
import { InvokeLLM } from "@/api/integrations";
import { motion, AnimatePresence } from "framer-motion";

// ---- Convert YouTube watch URLs to embed URLs ----
function toYouTubeEmbed(url) {
  if (!url) return url;
  try {
    const u = new URL(url);
    // Already an embed URL
    if (u.pathname.startsWith('/embed/')) return url;
    // youtube.com/watch?v=XXX
    if (u.hostname.includes('youtube.com') && u.searchParams.has('v')) {
      const videoId = u.searchParams.get('v');
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
    // youtu.be/XXX
    if (u.hostname === 'youtu.be') {
      const videoId = u.pathname.slice(1);
      return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
  } catch (e) {}
  return url;
}

// ---- Extract links from an HTML string (href + text) ----
function extractLinks(html) {
  const links = [];
  const re = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = m[2].replace(/<[^>]+>/g, '').trim();
    if (text) links.push({ href: m[1], text });
  }
  return links;
}

// ---- Tous les blocs HTML de liens de la DB sont supprimés du rendu ----
function ResourcesCard({ html }) { return null; }
function FurtherReadingCard({ html }) { return null; }
function UsefulLinksCard({ html }) { return null; }

// ---- Banque de liens précis par cours — mappée sur le titre exact du cours ----
// Chaque entrée : { match: [...mots du titre], links: [...] }
// pickLinks() choisit le cours avec le meilleur score de correspondance de titre
const COURSE_LINKS_DB = [
  // Copropriété / syndic / charges / assemblée — PRIORITÉ HAUTE
  { keys: ['copropriété','syndic','charges','assemblée générale','règlement','parties communes','lot','tantièmes','conseil syndical','gestionnaire'], links: [
    { text: 'Copropriété — Service-Public', href: 'https://www.service-public.fr/particuliers/vosdroits/N31338', desc: 'Fonctionnement, règlement et droits dans une copropriété.' },
    { text: 'ANIL — Copropriété : droits et obligations', href: 'https://www.anil.org/votre-projet/vous-etes-proprietaire/vivre-en-copropriete/', desc: 'Conseils pratiques sur la vie en copropriété, charges et assemblée générale.' },
    { text: 'Loi du 10 juillet 1965 — Légifrance', href: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000508247/', desc: 'Loi fixant le statut de la copropriété des immeubles bâtis.' },
    { text: 'FNAIM — Gestion de copropriété', href: 'https://www.fnaim.fr/guide/actualite-immobiliere/copropriete', desc: 'Guides pratiques sur le syndic, les charges et l\'assemblée générale.' },
    { text: 'ARC — Association des responsables de copropriété', href: 'https://www.unarc.asso.fr', desc: 'Association qui défend les copropriétaires face aux syndics professionnels.' },
    { text: 'Charges récupérables — Légifrance', href: 'https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000697603/', desc: 'Décret listant les charges récupérables sur le locataire (gardiennage, entretien).' },
  ]},
  // Logement / location / bail
  { keys: ['logement','loyer','bail','location','locataire','appartement','chambre','colocation','résidence','cité u','propriétaire','dépôt de garantie'], links: [
    { text: 'Vos droits — Location (Service-Public)', href: 'https://www.service-public.fr/particuliers/vosdroits/N319', desc: 'Toutes les règles sur la location privée : dépôt de garantie, bail, charges.' },
    { text: 'ANIL — Agence Nationale pour l\'Habitat', href: 'https://www.anil.org', desc: 'Conseils gratuits sur le logement, vos droits de locataire, les aides.' },
    { text: 'DossierFacile — Dossier de location certifié', href: 'https://www.dossierfacile.logement.gouv.fr', desc: 'Préparez votre dossier locatif certifié par l\'État pour rassurer les propriétaires.' },
    { text: 'CAF — Aide au logement (APL, ALS, ALF)', href: 'https://www.caf.fr/aides-et-services/s-informer-sur-les-aides/logement/les-aides-au-logement', desc: 'Simulez vos droits aux aides au logement de la CAF.' },
    { text: 'Visale — Caution gratuite de l\'État', href: 'https://www.visale.fr', desc: 'Garantie locative gratuite pour les moins de 30 ans et les salariés précaires.' },
    { text: 'CROUS — Logements étudiants', href: 'https://www.messervices.etudiant.gouv.fr/envoi/sso/login.aspx', desc: 'Demandez un logement en résidence universitaire via le portail national.' },
  ]},
  // Sécurité / digicode / interphone / accès immeuble
  { keys: ['sécurité','digicode','interphone','code d\'accès','badge','vigik','hall','gardien','concierge','alarme','incendie'], links: [
    { text: 'ADIL — Conseils juridiques gratuits', href: 'https://www.anil.org/lanil-et-les-adil/votre-adil/', desc: 'Trouvez votre ADIL locale pour des conseils gratuits sur votre immeuble.' },
    { text: 'Wikipedia — Digicode / serrure à combinaison', href: 'https://fr.wikipedia.org/wiki/Serrure_%C3%A0_combinaison', desc: 'Explication du fonctionnement des serrures à combinaison et digicodes.' },
    { text: 'Sécurité incendie — Service-Public', href: 'https://www.service-public.fr/particuliers/vosdroits/F31040', desc: 'Obligations de sécurité incendie dans les immeubles d\'habitation.' },
    { text: 'VIGIK — Système d\'accès sécurisé', href: 'https://fr.wikipedia.org/wiki/Vigik', desc: 'Fonctionnement du système Vigik pour l\'accès aux immeubles en France.' },
    { text: 'Règlement de copropriété — Légifrance', href: 'https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074096/LEGISCTA000006159308/', desc: 'Texte de loi sur les règles de la copropriété et l\'accès aux parties communes.' },
    { text: 'Service-Public — Troubles de voisinage', href: 'https://www.service-public.fr/particuliers/vosdroits/F612', desc: 'Vos droits en cas de nuisances ou troubles dans votre immeuble.' },
  ]},
  // Santé / CPAM / sécu
  { keys: ['santé','cpam','sécu','sécurité sociale','assurance maladie','médecin','mutuelle','carte vitale','remboursement','ameli'], links: [
    { text: 'Ameli — Site officiel de l\'Assurance Maladie', href: 'https://www.ameli.fr', desc: 'Vos droits, remboursements, médecins et démarches de santé.' },
    { text: 'Ameli — Étudiants étrangers en France', href: 'https://www.ameli.fr/assure/droits-demarches/etudes-emploi-retraite/etudiant', desc: 'Comment s\'immatriculer à la Sécurité sociale en tant qu\'étudiant.' },
    { text: 'Mon espace santé', href: 'https://www.monespacesante.fr', desc: 'Votre dossier médical partagé numérique, accessible en ligne.' },
    { text: 'Carte Vitale — demande et renouvellement', href: 'https://www.ameli.fr/assure/droits-demarches/situations-particulieres/carte-vitale', desc: 'Démarches pour obtenir ou renouveler votre carte Vitale.' },
    { text: 'Wikipedia — Sécurité Sociale française', href: 'https://fr.wikipedia.org/wiki/S%C3%A9curit%C3%A9_sociale_en_France', desc: 'Histoire et fonctionnement du système de protection sociale français.' },
    { text: 'Mutuelles étudiantes — comparatif', href: 'https://www.etudiant.gouv.fr/fr/votre-sante-539', desc: 'Les aides santé et complémentaires disponibles pour les étudiants.' },
  ]},
  // Aides sociales / CAF / APL / allocations / protection sociale
  { keys: ['caf','apl','allocation','aide sociale','rsa','cmu','css','revenu','prestation','solidarité','protection sociale','assurance chômage','pole emploi','france travail','bourse','aide financière'], links: [
    { text: 'CAF — Toutes les aides', href: 'https://www.caf.fr/aides-et-services/s-informer-sur-les-aides', desc: 'Toutes les prestations de la CAF : APL, allocations familiales, RSA, etc.' },
    { text: 'APL — Simulation en ligne', href: 'https://www.caf.fr/aides-et-services/s-informer-sur-les-aides/logement/les-aides-au-logement', desc: 'Simulez votre droit à l\'Aide Personnalisée au Logement (APL).' },
    { text: 'Service-Public — Aides sociales', href: 'https://www.service-public.fr/particuliers/vosdroits/N238', desc: 'Toutes les aides et prestations sociales disponibles en France.' },
    { text: 'Mes droits sociaux — gouv.fr', href: 'https://www.mesdroitssociaux.gouv.fr', desc: 'Simulateur officiel de droits sociaux (RSA, APL, allocations chômage…).' },
    { text: 'France Travail (Pôle Emploi)', href: 'https://www.francetravail.fr', desc: 'Recherche d\'emploi, allocations chômage et accompagnement professionnel.' },
    { text: 'Vie-Publique — Protection sociale', href: 'https://www.vie-publique.fr/eclairage/19591-quest-ce-que-la-protection-sociale', desc: 'Fonctionnement du système de protection sociale français.' },
  ]},
  // Budget / finances / banque
  { keys: ['budget','finance','banque','compte','épargne','argent','crédit','emprunt','dette','dépense','virement','chèque','fiscalité','impôt'], links: [
    { text: 'Mes questions d\'argent — Banque de France', href: 'https://www.mesquestionsdargent.fr', desc: 'Guides pratiques sur le budget, l\'épargne et la gestion financière.' },
    { text: 'Simulateur budget étudiant — LMDE', href: 'https://www.lmde.com', desc: 'Estimez votre budget mensuel en tant qu\'étudiant en France.' },
    { text: 'Bourses sur critères sociaux — Etudiant.gouv', href: 'https://www.etudiant.gouv.fr/fr/les-aides-financieres-1#bcs', desc: 'Comment demander une bourse d\'État selon vos revenus familiaux.' },
    { text: 'Compte bancaire — Service-Public', href: 'https://www.service-public.fr/particuliers/vosdroits/N91', desc: 'Droits et démarches pour ouvrir un compte bancaire en France.' },
    { text: 'Aide d\'urgence FNAU — CROUS', href: 'https://www.etudiant.gouv.fr/fr/aide-d-urgence-1088', desc: 'Dispositif d\'aide financière d\'urgence pour étudiants en difficulté.' },
    { text: 'Comparateur livrets d\'épargne — BPCE', href: 'https://www.lafinancepourtous.com/pratique/placements-et-epargne/', desc: 'Comprendre les différents placements et produits d\'épargne.' },
  ]},
  // Transports
  { keys: ['transport','sncf','ratp','bus','métro','train','tgv','carte','navigo','vélo','covoiturage','permis'], links: [
    { text: 'RATP — Tarifs étudiants et Navigo', href: 'https://www.ratp.fr/titres-et-tarifs/la-carte-navigo', desc: 'Abonnements et tarifs réduits pour les transports en commun parisiens.' },
    { text: 'SNCF — Carte Avantage jeune', href: 'https://www.sncf-connect.com/train/carte-avantage', desc: 'Carte de réduction train pour les 12-27 ans avec jusqu\'à 60% de remise.' },
    { text: 'BlaBlaCar — Covoiturage longue distance', href: 'https://www.blablacar.fr', desc: 'Plateforme de covoiturage pour voyager moins cher entre villes.' },
    { text: 'Ouibus / FlixBus — Bus longue distance', href: 'https://global.flixbus.com/bus-france', desc: 'Liaisons en bus pas chers entre les grandes villes françaises.' },
    { text: 'Véligo / Vélo\'v — Vélos en libre-service', href: 'https://www.veligo-location.fr', desc: 'Location de vélos longue durée à tarif étudiant en Île-de-France.' },
    { text: 'Permis à 1€/jour — ANTS', href: 'https://www.securite-routiere.gouv.fr/les-medias/nos-publications/le-permis-1-euro-par-jour', desc: 'Dispositif de financement du permis de conduire pour les jeunes.' },
  ]},
  // Emploi / travail / stage
  { keys: ['emploi','travail','stage','alternance','apprentissage','cdi','cdd','contrat','salaire','cv','entretien','recrutement','linkedin'], links: [
    { text: 'Pôle Emploi — Mon espace', href: 'https://www.francetravail.fr', desc: 'Recherche d\'emploi, offres et droits au chômage.' },
    { text: 'LinkedIn — Conseils et offres', href: 'https://fr.linkedin.com', desc: 'Réseau professionnel, offres d\'emploi et conseils de carrière.' },
    { text: 'APEC — Cadres et jeunes diplômés', href: 'https://www.apec.fr', desc: 'Ressources emploi pour les cadres et les nouveaux diplômés.' },
    { text: 'Alternance — Service-Public', href: 'https://www.service-public.fr/particuliers/vosdroits/N19871', desc: 'Tout sur les contrats d\'apprentissage et de professionnalisation.' },
    { text: 'Mon Master — Admissions', href: 'https://www.monmaster.gouv.fr', desc: 'Plateforme nationale d\'admission en master après la licence.' },
    { text: 'CV et lettre de motivation — CIDJ', href: 'https://www.cidj.com/ressources/emploi-formation', desc: 'Guides pratiques pour rédiger un CV et une lettre de motivation efficaces.' },
  ]},
  // Administration / visa / titre de séjour
  { keys: ['visa','titre de séjour','administration','préfecture','mairie','passeport','carte nationale','identité','naturalisation','immigration','étranger'], links: [
    { text: 'ANEF — Portail de l\'immigration', href: 'https://administration-etrangers-en-france.interieur.gouv.fr', desc: 'Demandez votre titre de séjour ou visa directement en ligne.' },
    { text: 'Campus France — Visas étudiants', href: 'https://www.campusfrance.org/fr/visa', desc: 'Procédure visa étudiant, DAP et démarches d\'entrée en France.' },
    { text: 'Service-Public — Carte Nationale d\'Identité', href: 'https://www.service-public.fr/particuliers/vosdroits/N358', desc: 'Démarches pour obtenir ou renouveler votre CNI.' },
    { text: 'France Visas — Demande en ligne', href: 'https://france-visas.gouv.fr', desc: 'Portail officiel de demande de visa pour entrer en France.' },
    { text: 'Légifrance — CESEDA (droit des étrangers)', href: 'https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/', desc: 'Code de l\'entrée et du séjour des étrangers et du droit d\'asile.' },
    { text: 'DIAIR — Accueil des étrangers', href: 'https://www.immigration.interieur.gouv.fr', desc: 'Informations officielles sur l\'immigration et l\'intégration en France.' },
  ]},
  // Culture générale / société / histoire
  { keys: ['culture','histoire','société','politique','philosophie','art','littérature','civilisation','france','europe','monde'], links: [
    { text: 'Vie-Publique.fr — Dossiers thématiques', href: 'https://www.vie-publique.fr', desc: 'Analyses claires sur les grandes questions politiques et sociales françaises.' },
    { text: 'Wikipedia — Portail France', href: 'https://fr.wikipedia.org/wiki/France', desc: 'Encyclopédie collaborative sur l\'histoire et la culture française.' },
    { text: 'INA — Archives audiovisuelles', href: 'https://www.ina.fr', desc: 'Archives historiques de la télévision et radio françaises.' },
    { text: 'France Culture — Podcasts', href: 'https://www.radiofrance.fr/franceculture', desc: 'Émissions et documentaires sur la culture, la société et l\'histoire.' },
    { text: 'Lumni — Ressources pédagogiques', href: 'https://www.lumni.fr', desc: 'Vidéos et contenus éducatifs validés par l\'Éducation nationale.' },
    { text: 'Gallica — BnF numérique', href: 'https://gallica.bnf.fr', desc: 'Bibliothèque numérique gratuite de la Bibliothèque nationale de France.' },
  ]},
  // Mathématiques
  { keys: ['mathématiques','maths','algèbre','analyse','géométrie','probabilité','statistique','fonction','équation','matrice','intégrale','dérivée'], links: [
    { text: 'Khan Academy — Mathématiques', href: 'https://fr.khanacademy.org/math', desc: 'Cours vidéo et exercices interactifs gratuits en maths, de la base aux prépas.' },
    { text: 'Les-Mathematiques.net', href: 'https://www.les-mathematiques.net', desc: 'Forum et cours de mathématiques pour lycée, prépa et université.' },
    { text: 'Exo7 — Cours de maths prépa', href: 'http://exo7.emath.fr', desc: 'Cours et exercices de mathématiques niveau prépa et licence en libre accès.' },
    { text: 'GeoGebra — Visualisation interactive', href: 'https://www.geogebra.org', desc: 'Outil de visualisation et d\'exploration mathématique en ligne gratuit.' },
    { text: 'Wikipedia — Portail Mathématiques', href: 'https://fr.wikipedia.org/wiki/Portail:Math%C3%A9matiques', desc: 'Portail mathématiques de Wikipédia avec accès à tous les concepts.' },
    { text: 'Bibm@th — Encyclopédie des maths', href: 'https://www.bibmath.net', desc: 'Définitions, théorèmes, exercices corrigés pour prépa et licence.' },
  ]},
  // Économie / management
  { keys: ['économie','microéconomie','macroéconomie','management','entreprise','marché','concurrence','offre','demande','pib','inflation','croissance'], links: [
    { text: 'INSEE — Statistiques économiques', href: 'https://www.insee.fr', desc: 'Données officielles sur l\'économie française : PIB, emploi, inflation.' },
    { text: 'Vie-Publique — Dossier Économie', href: 'https://www.vie-publique.fr/rubrique/economie', desc: 'Analyses accessibles des grands enjeux économiques actuels.' },
    { text: 'Banque de France — Éducation financière', href: 'https://www.banque-france.fr/statistiques', desc: 'Données économiques et ressources pédagogiques de la Banque de France.' },
    { text: 'OCDE — Perspectives économiques', href: 'https://www.oecd.org/fr/economy/', desc: 'Rapports et analyses économiques de l\'OCDE sur les pays développés.' },
    { text: 'Les Echos — Économie', href: 'https://www.lesechos.fr/economie-france', desc: 'Actualité et analyses économiques du quotidien de référence.' },
    { text: 'Alternatives Économiques', href: 'https://www.alternatives-economiques.fr', desc: 'Décryptages économiques accessibles et pédagogiques.' },
  ]},
  // Environnement / développement durable
  { keys: ['environnement','climat','écologie','développement durable','énergie','recyclage','biodiversité','carbone','transition'], links: [
    { text: 'ADEME — Agence de l\'environnement', href: 'https://www.ademe.fr', desc: 'Ressources officielles sur la transition écologique et l\'énergie.' },
    { text: 'IPCC / GIEC — Rapports climatiques', href: 'https://www.ipcc.ch', desc: 'Rapports scientifiques de référence sur le changement climatique mondial.' },
    { text: 'Notre-Affaire-À-Tous', href: 'https://notreaffaireatous.org', desc: 'Ressources juridiques et associatives sur la justice climatique en France.' },
    { text: 'Wikipedia — Développement durable', href: 'https://fr.wikipedia.org/wiki/D%C3%A9veloppement_durable', desc: 'Définition, enjeux et perspectives du développement durable.' },
    { text: 'Climat en questions — CNRS', href: 'https://www.cnrs.fr/fr/le-cnrs-sengage/le-cnrs-et-le-climat/le-climat-en-questions', desc: 'Réponses scientifiques du CNRS aux questions sur le climat.' },
    { text: 'Reporterre — Actualités écologie', href: 'https://reporterre.net', desc: 'Média indépendant spécialisé dans les actualités écologiques.' },
  ]},
  // Langues / anglais
  { keys: ['anglais','english','langue','vocabulaire','grammaire','toeic','ielts','toefl','traduction','linguistique','expression'], links: [
    { text: 'BBC Learning English', href: 'https://www.bbc.co.uk/learningenglish', desc: 'Cours, podcasts et exercices d\'anglais gratuits par la BBC.' },
    { text: 'Cambridge Dictionary en ligne', href: 'https://dictionary.cambridge.org', desc: 'Dictionnaire anglais de référence avec exemples de phrases et prononciations.' },
    { text: 'TED Talks — Conférences en anglais', href: 'https://www.ted.com', desc: 'Présentations en anglais sur tous les sujets, avec sous-titres.' },
    { text: 'British Council — English Online', href: 'https://learnenglish.britishcouncil.org', desc: 'Ressources gratuites pour tous les niveaux d\'anglais.' },
    { text: 'Linguee — Traducteur en contexte', href: 'https://www.linguee.fr', desc: 'Traducteur contextuel qui montre des exemples de phrases bilingues.' },
    { text: 'Grammarly Blog — Conseils écriture', href: 'https://www.grammarly.com/blog/category/handbook', desc: 'Guides sur la grammaire et le style d\'écriture en anglais.' },
  ]},
  // Numérique / informatique
  { keys: ['numérique','informatique','algorithme','code','programmation','données','cybersécurité','intelligence artificielle','internet','réseau'], links: [
    { text: 'France Num — Transition numérique', href: 'https://www.francenum.gouv.fr', desc: 'Ressources officielles sur la transition et les usages numériques.' },
    { text: 'CNIL — Données personnelles et RGPD', href: 'https://www.cnil.fr', desc: 'Comprendre le RGPD, la protection de vos données et vos droits numériques.' },
    { text: 'OpenClassrooms — Informatique', href: 'https://openclassrooms.com/fr/courses', desc: 'Cours gratuits en ligne sur le code, la data et le numérique.' },
    { text: 'Wikipedia — Intelligence Artificielle', href: 'https://fr.wikipedia.org/wiki/Intelligence_artificielle', desc: 'Vue d\'ensemble des concepts fondamentaux de l\'IA.' },
    { text: 'MIT OpenCourseWare — CS', href: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/', desc: 'Cours gratuits du MIT en informatique et ingénierie.' },
    { text: 'Inria — Recherche numérique française', href: 'https://www.inria.fr', desc: 'Institut national de recherche en sciences du numérique.' },
  ]},
];

// Liens de fallback toujours pertinents pour les étudiants en prépa
const FALLBACK_LINKS = [
  { text: 'Vie-Publique.fr — Dossiers thématiques', href: 'https://www.vie-publique.fr', desc: 'Analyses claires sur les grandes questions politiques et sociales.' },
  { text: 'Khan Academy France', href: 'https://fr.khanacademy.org', desc: 'Cours et exercices gratuits dans toutes les matières.' },
  { text: 'Wikipedia Portail France', href: 'https://fr.wikipedia.org/wiki/Portail:France', desc: 'Point d\'entrée encyclopédique sur la France.' },
  { text: 'Lumni — Vidéos éducatives', href: 'https://www.lumni.fr', desc: 'Contenus pédagogiques validés par l\'Éducation nationale.' },
  { text: 'France Culture Podcasts', href: 'https://www.radiofrance.fr/franceculture', desc: 'Émissions et documentaires culturels en replay.' },
  { text: 'Gallica — BnF numérique', href: 'https://gallica.bnf.fr', desc: 'Bibliothèque numérique gratuite de la Bibliothèque nationale.' },
];

function pickLinks(lesson, courseTitle) {
  // Le titre et le cours pèsent 3x plus que le contenu
  const titleText = [lesson?.title || '', courseTitle || ''].join(' ').toLowerCase();
  const contentText = (lesson?.content || '').replace(/<[^>]*>/g, ' ').substring(0, 800).toLowerCase();

  // Score chaque thème : 3 points par mot clé dans le titre, 1 point dans le contenu
  const scored = LINK_DB.map(theme => {
    const titleScore = theme.keys.reduce((acc, k) => acc + (titleText.includes(k) ? 3 : 0), 0);
    const contentScore = theme.keys.reduce((acc, k) => acc + (contentText.includes(k) ? 1 : 0), 0);
    return { score: titleScore + contentScore, links: theme.links };
  }).filter(t => t.score > 0).sort((a, b) => b.score - a.score);

  let selected = [];
  for (const t of scored) {
    for (const l of t.links) {
      if (!selected.find(s => s.href === l.href)) selected.push(l);
      if (selected.length >= 6) break;
    }
    if (selected.length >= 6) break;
  }

  // Fallback si pas assez de liens trouvés
  if (selected.length < 4) {
    for (const l of FALLBACK_LINKS) {
      if (!selected.find(s => s.href === l.href)) selected.push(l);
      if (selected.length >= 6) break;
    }
  }

  return selected.slice(0, 6);
}

const linksCache = new Map();

// Normalise les ressources BDD {title, url} → {text, href, desc}
function normalizeDbResources(raw) {
  if (!raw) return null;
  try {
    const arr = typeof raw === 'string' ? JSON.parse(raw) : raw;
    if (!Array.isArray(arr) || arr.length === 0) return null;
    return arr.map(r => ({
      text: r.title || r.text || '',
      href: r.url || r.href || '#',
      desc: r.description || r.desc || '',
    })).filter(r => r.text && r.href !== '#');
  } catch { return null; }
}

function SmartLinksCard({ lesson, courseTitle }) {
  const cacheKey = lesson?.id || lesson?.title;

  const links = useMemo(() => {
    if (!lesson?.title) return null;
    if (linksCache.has(cacheKey)) return linksCache.get(cacheKey);
    // Priorité absolue : ressources stockées en BDD pour cette leçon précise
    const dbLinks = normalizeDbResources(lesson?.resources);
    const result = dbLinks && dbLinks.length >= 3 ? dbLinks : pickLinks(lesson, courseTitle);
    linksCache.set(cacheKey, result);
    return result;
  }, [cacheKey, lesson?.resources]);

  if (!links?.length) return null;

  // Sépare en 2 groupes : 3 liens essentiels + 3 liens pour aller plus loin
  const essential = links.slice(0, 3);
  const further = links.slice(3);

  return (
    <div className="space-y-4">
      {/* Liens essentiels */}
      <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50/40 overflow-hidden">
        <div className="px-5 py-3.5 border-b border-violet-100 flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
            <Zap className="w-3.5 h-3.5 text-violet-600" />
          </div>
          <div>
            <p className="font-bold text-violet-900 text-sm">📌 Ressources clés pour cette leçon</p>
            <p className="text-[11px] text-violet-400 mt-0.5">Sélectionnées selon le contenu exact</p>
          </div>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {essential.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
              className="flex flex-col gap-1.5 px-3.5 py-3 rounded-xl bg-white border border-violet-100 hover:border-violet-400 hover:shadow-md transition-all group">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                  <ExternalLink className="w-2.5 h-2.5 text-white" />
                </span>
                <span className="text-[12px] font-bold text-violet-800 group-hover:text-violet-900 leading-tight line-clamp-2">{l.text}</span>
              </div>
              {l.desc && <p className="text-[11px] text-gray-400 leading-snug line-clamp-2">{l.desc}</p>}
            </a>
          ))}
        </div>
      </div>

      {/* Pour aller plus loin */}
      {further.length > 0 && (
        <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/60 to-blue-50/30 overflow-hidden">
          <div className="px-5 py-3.5 border-b border-indigo-100 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
            </div>
            <p className="font-bold text-indigo-800 text-sm">📚 Pour approfondir</p>
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {further.map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
                className="flex flex-col gap-1.5 px-3.5 py-3 rounded-xl bg-white border border-indigo-100 hover:border-indigo-400 hover:shadow-md transition-all group">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-indigo-100 group-hover:bg-indigo-500 flex items-center justify-center flex-shrink-0 transition-colors">
                    <ChevronRight className="w-3 h-3 text-indigo-500 group-hover:text-white transition-colors" />
                  </span>
                  <span className="text-[12px] font-bold text-indigo-700 group-hover:text-indigo-900 leading-tight line-clamp-2">{l.text}</span>
                </div>
                {l.desc && <p className="text-[11px] text-gray-400 leading-snug line-clamp-2">{l.desc}</p>}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ---- Quiz généré par InvokeLLM avec prompt ultra-court (< 1500 chars total) ----
const quizCache = new Map();

async function fetchQuizFromAI(lesson, courseName) {
  // Extrait 600 chars de texte brut max pour rester sous la limite
  const snippet = (lesson.content || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 600);

  const prompt = `Leçon: "${lesson.title}" (cours: "${courseName}")
Contenu résumé: ${snippet}

Génère 5 questions QCM en français sur cette leçon. 4 options par question, 1 seule bonne réponse.
JSON uniquement:
{"questions":[{"q":"Question?","options":["A","B","C","D"],"correct":0,"explanation":"Explication courte."}]}`;

  const response = await InvokeLLM({ prompt, add_context_from_internet: false });
  const m = response.match(/\{[\s\S]*\}/);
  if (!m) return null;
  const parsed = JSON.parse(m[0]);
  return parsed.questions?.length >= 3 ? parsed.questions : null;
}

// Extrait des phrases clés du contenu HTML
function extractSentences(html) {
  const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  // Découpe sur . ! ? avec au moins 40 caractères par phrase
  return text.split(/(?<=[.!?])\s+/).filter(s => s.length >= 40 && s.length <= 300);
}

// Génère une question à partir d'une phrase en supprimant un mot clé (nom, chiffre, terme)
function makeFillInQuestion(sentence) {
  // Cible : nombres, acronymes, mots importants (>5 lettres, pas articles/prépositions)
  const STOPWORDS = new Set(['cette','pour','dans','avec','plus','mais','aussi','bien','tout','très','lors','dont','dont','leur','leurs','chez','sans','sous','vers','être','avoir','faire','ainsi','entre','comme','après','avant','selon','toute','ces','des','une','les','par','sur','que','qui','est','son','ses','une','les','pas','même','soit','peut','doit','sont','dans']);
  const words = sentence.split(/\s+/);
  // Cherche d'abord un nombre ou acronyme
  let targetIdx = words.findIndex(w => /^\d+/.test(w) || /^[A-Z]{2,}$/.test(w));
  if (targetIdx === -1) {
    // Sinon un mot de plus de 6 lettres pas dans les stopwords
    targetIdx = words.findIndex((w, i) => {
      const clean = w.replace(/[^a-zàâäéèêëïîôùûüœç]/gi, '').toLowerCase();
      return clean.length > 6 && !STOPWORDS.has(clean) && i > 2;
    });
  }
  if (targetIdx === -1) return null;

  const answer = words[targetIdx].replace(/[.,;:!?]$/, '');
  const question = words.map((w, i) => i === targetIdx ? '___' : w).join(' ').replace(/\s+([.,;:!?])/g, '$1');
  return { question: `Complétez : "${question}"`, answer };
}

// Génère des distracteurs plausibles
function makeDistractors(answer, allSentences) {
  const distractors = new Set();
  // Cherche d'autres mots similaires dans le texte (même longueur approximative)
  const text = allSentences.join(' ');
  const words = text.split(/\s+/).map(w => w.replace(/[^a-zàâäéèêëïîôùûüœç0-9]/gi, '')).filter(w => w.length >= answer.length - 2 && w.length <= answer.length + 4 && w.toLowerCase() !== answer.toLowerCase() && w.length > 3);
  // Shuffle et prend 3 distracteurs
  const shuffled = words.sort(() => Math.random() - 0.5);
  for (const w of shuffled) {
    if (distractors.size >= 3) break;
    // Capitalise si l'answer est capitalisé
    const d = /^[A-Z]/.test(answer) ? w.charAt(0).toUpperCase() + w.slice(1) : w;
    if (d.toLowerCase() !== answer.toLowerCase()) distractors.add(d);
  }
  // Si pas assez, ajoute des variations numériques ou génériques
  const fallbacks = ['Aucune de ces réponses', 'Non précisé', 'Différent', 'Variable'];
  for (const f of fallbacks) {
    if (distractors.size >= 3) break;
    distractors.add(f);
  }
  return [...distractors].slice(0, 3);
}

// Génère un quiz de 5 questions depuis le contenu HTML
function generateLocalQuiz(lesson) {
  const sentences = extractSentences(lesson.content || '');
  if (sentences.length < 5) return null;

  const questions = [];
  const usedIndices = new Set();

  // Essaie de créer des questions sur des phrases variées du contenu
  const step = Math.max(1, Math.floor(sentences.length / 7));
  for (let i = 0; i < sentences.length && questions.length < 5; i += step) {
    if (usedIndices.has(i)) continue;
    const result = makeFillInQuestion(sentences[i]);
    if (!result) continue;
    const distractors = makeDistractors(result.answer, sentences);
    if (distractors.length < 3) continue;

    // Mélange les options
    const allOptions = [result.answer, ...distractors].sort(() => Math.random() - 0.5);
    const correctIdx = allOptions.indexOf(result.answer);

    questions.push({
      q: result.question,
      options: allOptions,
      correct: correctIdx,
      explanation: `La bonne réponse est "${result.answer}". Cette information est présente dans le contenu de la leçon.`,
    });
    usedIndices.add(i);
  }

  return questions.length >= 3 ? questions : null;
}

function LessonQuiz({ lesson, courseName }) {
  const cacheKey = lesson?.id || lesson?.title;

  const [quiz, setQuiz] = useState(() => {
    if (quizCache.has(cacheKey)) return quizCache.get(cacheKey);
    return null;
  });
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [open, setOpen] = useState(false);

  // Génère le quiz via IA au montage
  useEffect(() => {
    if (!lesson?.content || lesson.content.trim().length < 200) return;
    if (quizCache.has(cacheKey)) {
      setQuiz(quizCache.get(cacheKey));
      return;
    }
    setLoading(true);
    fetchQuizFromAI(lesson, courseName)
      .then(questions => {
        if (questions) { quizCache.set(cacheKey, questions); setQuiz(questions); }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [cacheKey]);

  // Reset quand la leçon change
  useEffect(() => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setCurrentQ(0);
    setOpen(false);
    setLoading(false);
    if (quizCache.has(cacheKey)) { setQuiz(quizCache.get(cacheKey)); }
    else { setQuiz(null); }
  }, [cacheKey]);

  const handleAnswer = (oi) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [currentQ]: oi }));
  };

  const handleNext = () => {
    if (currentQ < (quiz?.length || 0) - 1) setCurrentQ(q => q + 1);
  };

  const handlePrev = () => {
    if (currentQ > 0) setCurrentQ(q => q - 1);
  };

  const handleSubmit = () => {
    if (!quiz) return;
    let s = 0;
    quiz.forEach((q, i) => { if (answers[i] === q.correct) s++; });
    setScore(s);
    setSubmitted(true);
    setCurrentQ(0);
  };

  const handleReset = () => {
    quizCache.delete(cacheKey);
    setQuiz(null);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setCurrentQ(0);
    setLoading(true);
    fetchQuizFromAI(lesson, courseName)
      .then(questions => {
        if (questions) { quizCache.set(cacheKey, questions); setQuiz(questions); }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const answeredCount = Object.keys(answers).length;
  const total = quiz?.length || 5;
  const allAnswered = quiz && quiz.every((_, i) => answers[i] !== undefined);

  // Si pas de quiz générable, on n'affiche rien
  if (!quiz && !lesson?.content) return null;

  return (
    <div className="rounded-2xl overflow-hidden border border-violet-200 shadow-lg">
      {/* ── En-tête cliquable ── */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 px-6 py-5 text-left"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <ListChecks className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-extrabold text-base">🎯 Testez vos connaissances</p>
              <p className="text-purple-200 text-xs mt-0.5">
                {loading ? 'Génération des questions en cours…' :
                 submitted ? `Score : ${score}/${total}` :
                 quiz && open ? `${answeredCount}/${total} réponses données` :
                 quiz ? `${total} questions sur le contenu de la leçon` :
                 'Cliquez pour tester vos connaissances'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {submitted && (
              <span className={`px-3 py-1.5 rounded-xl font-extrabold text-sm ${
                score === total ? 'bg-emerald-400/30 text-emerald-100' :
                score >= total / 2 ? 'bg-amber-400/30 text-amber-100' :
                'bg-red-400/30 text-red-100'
              }`}>
                {score}/{total} {score === total ? '🏆' : score >= total / 2 ? '👍' : '📖'}
              </span>
            )}
            <ChevronDown className={`w-5 h-5 text-white/70 transition-transform ${open ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {/* Barre de progression — visible dans le header quand ouvert */}
        {quiz && open && !submitted && (
          <div className="mt-4">
            <div className="flex gap-1.5">
              {quiz.map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 rounded-full transition-all ${
                    i === currentQ ? 'bg-white' :
                    answers[i] !== undefined ? 'bg-emerald-400' :
                    'bg-white/25'
                  }`}
                />
              ))}
            </div>
            <p className="text-[10px] text-purple-200 mt-1.5">Question {currentQ + 1} sur {total}</p>
          </div>
        )}
      </button>

      {/* ── Corps (conditionnel) ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-white"
          >
            {/* Chargement */}
            {loading && !quiz && (
              <div className="px-6 py-10 flex flex-col items-center gap-3 text-center">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Loader2 className="w-5 h-5 text-violet-500 animate-spin" />
                </div>
                <p className="font-semibold text-gray-700 text-sm">Génération des questions…</p>
                <p className="text-xs text-gray-400">Quelques secondes</p>
              </div>
            )}

            {/* Quiz question par question */}
            {quiz && !submitted && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQ}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 py-6"
                >
                  {/* Question */}
                  <div className="flex items-start gap-3 mb-6">
                    <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white text-sm font-extrabold flex items-center justify-center flex-shrink-0 shadow-md">
                      {currentQ + 1}
                    </span>
                    <p className="text-gray-900 font-bold text-base leading-relaxed pt-0.5">{quiz[currentQ].q}</p>
                  </div>

                  {/* Options */}
                  <div className="space-y-3">
                    {quiz[currentQ].options.map((opt, oi) => {
                      const isSelected = answers[currentQ] === oi;
                      return (
                        <button
                          key={oi}
                          onClick={() => handleAnswer(oi)}
                          className={`w-full text-left px-5 py-3.5 rounded-2xl border-2 text-sm font-medium transition-all flex items-center gap-4 ${
                            isSelected
                              ? 'border-violet-500 bg-violet-50 text-violet-900 shadow-md shadow-violet-100'
                              : 'border-gray-200 bg-gray-50 hover:border-violet-300 hover:bg-violet-50/50 text-gray-700'
                          }`}
                        >
                          <span className={`w-7 h-7 rounded-xl border-2 flex items-center justify-center flex-shrink-0 text-xs font-extrabold transition-all ${
                            isSelected
                              ? 'border-violet-500 bg-violet-500 text-white'
                              : 'border-gray-300 text-gray-400'
                          }`}>
                            {['A','B','C','D'][oi]}
                          </span>
                          <span className="flex-1">{opt}</span>
                          {isSelected && <Check className="w-4 h-4 text-violet-500 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={handlePrev}
                      disabled={currentQ === 0}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" /> Précédent
                    </button>

                    <div className="flex gap-1.5">
                      {quiz.map((_, i) => (
                        <button key={i} onClick={() => setCurrentQ(i)}
                          className={`h-2 rounded-full transition-all ${
                            i === currentQ ? 'bg-violet-600 w-5' :
                            answers[i] !== undefined ? 'bg-violet-300 w-2' : 'bg-gray-200 w-2'
                          }`}
                        />
                      ))}
                    </div>

                    {currentQ < quiz.length - 1 ? (
                      <button
                        onClick={handleNext}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition-all"
                      >
                        Suivant <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={!allAnswered}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-bold hover:from-violet-700 hover:to-purple-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-violet-500/20"
                      >
                        <Trophy className="w-4 h-4" /> Voir mes résultats
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

            {/* Résultats */}
            {quiz && submitted && (
              <div className="px-6 py-6">
                <div className={`rounded-2xl p-5 mb-6 flex items-center gap-4 ${
                  score === total ? 'bg-emerald-50 border border-emerald-200' :
                  score >= total / 2 ? 'bg-amber-50 border border-amber-200' :
                  'bg-red-50 border border-red-200'
                }`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                    score === total ? 'bg-emerald-100' : score >= total / 2 ? 'bg-amber-100' : 'bg-red-100'
                  }`}>
                    {score === total ? '🏆' : score >= total / 2 ? '🎯' : '📚'}
                  </div>
                  <div>
                    <p className={`font-extrabold text-xl ${
                      score === total ? 'text-emerald-700' : score >= total / 2 ? 'text-amber-700' : 'text-red-700'
                    }`}>
                      {score}/{total} — {score === total ? 'Score parfait !' : score >= total / 2 ? 'Bonne maîtrise !' : 'À retravailler'}
                    </p>
                    <p className={`text-sm mt-0.5 ${
                      score === total ? 'text-emerald-600' : score >= total / 2 ? 'text-amber-600' : 'text-red-600'
                    }`}>
                      {score === total ? 'Tu as parfaitement assimilé cette leçon.' :
                       score >= total / 2 ? 'Tu maîtrises l\'essentiel. Révise les points manqués.' :
                       'Relis la leçon en te concentrant sur les explications ci-dessous.'}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {quiz.map((q, qi) => {
                    const userAnswer = answers[qi];
                    const isRight = userAnswer === q.correct;
                    return (
                      <div key={qi} className={`rounded-2xl border p-4 ${isRight ? 'border-emerald-200 bg-emerald-50/50' : 'border-red-200 bg-red-50/50'}`}>
                        <div className="flex items-start gap-2.5 mb-3">
                          <span className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5 ${
                            isRight ? 'bg-emerald-500 text-white' : 'bg-red-400 text-white'
                          }`}>{isRight ? '✓' : '✗'}</span>
                          <p className="text-sm font-bold text-gray-800 leading-snug">{q.q}</p>
                        </div>
                        <div className="space-y-1.5 mb-3">
                          {q.options.map((opt, oi) => {
                            const isCorrect = q.correct === oi;
                            const isSelected = userAnswer === oi;
                            return (
                              <div key={oi} className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-[13px] ${
                                isCorrect ? 'bg-emerald-100 text-emerald-800 font-semibold' :
                                isSelected && !isCorrect ? 'bg-red-100 text-red-700 line-through' :
                                'text-gray-400'
                              }`}>
                                <span className={`w-5 h-5 rounded-lg border flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                                  isCorrect ? 'border-emerald-500 bg-emerald-500 text-white' :
                                  isSelected ? 'border-red-400 bg-red-400 text-white' :
                                  'border-gray-200'
                                }`}>{['A','B','C','D'][oi]}</span>
                                {opt}
                              </div>
                            );
                          })}
                        </div>
                        {q.explanation && (
                          <div className="flex items-start gap-2 px-3 py-2.5 bg-blue-50 rounded-xl border border-blue-100">
                            <Lightbulb className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                            <p className="text-[12px] text-blue-700 leading-relaxed">{q.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all shadow-lg shadow-violet-500/20"
                  >
                    <RotateCcw className="w-4 h-4" /> Nouveau quiz
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---- Detect which type of block an HTML div is ----
function classifyHtmlBlock(html) {
  if (/linear-gradient.*667eea/.test(html) || /Ressources essentielles/i.test(html)) return 'resources';
  if (/Pour aller plus loin/i.test(html) || /f8f5ff/.test(html)) return 'further';
  if (/Liens utiles/i.test(html) || /f0f4ff/.test(html) || /border-left.*4px/.test(html)) return 'links';
  return 'raw';
}

// ---- Find matching closing </div> index, accounting for nesting ----
function findClosingDiv(content, startIdx) {
  let depth = 0;
  let i = startIdx;
  const lower = content.toLowerCase();
  while (i < content.length) {
    if (lower[i] === '<') {
      if (lower.slice(i, i + 4) === '<div') {
        depth++;
        i += 4;
      } else if (lower.slice(i, i + 5) === '</div') {
        depth--;
        // advance past the closing >
        let k = i + 5;
        while (k < content.length && content[k] !== '>') k++;
        k++; // include the >
        if (depth === 0) return k;
        i = k;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
  return content.length;
}

// ---- Split content into segments: html blocks, iframes, and markdown text ----
function segmentContent(content) {
  const segments = [];
  let cursor = 0;
  const lower = content.toLowerCase();

  let i = 0;
  while (i < content.length) {
    // Check for <iframe
    if (lower.slice(i, i + 7) === '<iframe') {
      const end = lower.indexOf('</iframe>', i);
      if (end !== -1) {
        if (i > cursor) segments.push({ type: 'markdown', value: content.slice(cursor, i) });
        const block = content.slice(i, end + 9);
        const srcMatch = block.match(/src=["']([^"']+)["']/);
        const titleMatch = block.match(/title=["']([^"']+)["']/);
        if (srcMatch) segments.push({ type: 'video', src: toYouTubeEmbed(srcMatch[1]), title: titleMatch?.[1] || 'Vidéo' });
        cursor = end + 9;
        i = cursor;
        continue;
      }
    }
    // Check for <div (only at position where it actually starts)
    if (lower.slice(i, i + 4) === '<div') {
      const end = findClosingDiv(content, i);
      if (i > cursor) segments.push({ type: 'markdown', value: content.slice(cursor, i) });
      const block = content.slice(i, end);
      const kind = classifyHtmlBlock(block);
      segments.push({ type: kind === 'raw' ? 'html' : kind, value: block });
      cursor = end;
      i = end;
      continue;
    }
    i++;
  }
  if (cursor < content.length) segments.push({ type: 'markdown', value: content.slice(cursor) });
  return segments;
}

// ---- Markdown article component ----
function MarkdownArticle({ text }) {
  const trimmed = text.trim();
  if (!trimmed) return null;
  return (
    <article className="prose prose-gray prose-lg max-w-none
      prose-headings:text-gray-900 prose-headings:font-extrabold
      prose-h1:text-3xl prose-h1:mb-6 prose-h1:pb-4 prose-h1:border-b prose-h1:border-gray-100
      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
      prose-p:text-gray-600 prose-p:leading-[1.85] prose-p:text-[15.5px] prose-p:mb-5
      prose-li:text-gray-600 prose-li:leading-relaxed
      prose-strong:text-gray-900
      prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
      prose-blockquote:border-l-purple-400 prose-blockquote:bg-purple-50/50 prose-blockquote:rounded-r-xl prose-blockquote:py-1
      prose-code:text-purple-700 prose-code:bg-purple-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
      prose-img:rounded-xl prose-img:shadow-md
      prose-table:border-collapse
      prose-th:bg-purple-50 prose-th:text-purple-900 prose-th:font-bold prose-th:text-sm prose-th:px-4 prose-th:py-3 prose-th:border prose-th:border-purple-200
      prose-td:text-sm prose-td:px-4 prose-td:py-2.5 prose-td:border prose-td:border-gray-200
    ">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({node, children, ...props}) => (
            <h1 {...props} className="text-3xl font-extrabold text-gray-900 mb-6 pb-4 border-b border-gray-100">{children}</h1>
          ),
          h2: ({node, children, ...props}) => (
            <h2 {...props} className="flex items-center gap-3 text-2xl mt-10 mb-4 font-extrabold text-gray-900">
              <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-100 to-violet-100 inline-flex items-center justify-center flex-shrink-0 shadow-sm">
                <BookOpen className="w-4 h-4 text-purple-600" />
              </span>
              {children}
            </h2>
          ),
          h3: ({node, children, ...props}) => (
            <h3 {...props} className="text-xl mt-8 mb-3 font-extrabold text-gray-800 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-purple-400 to-violet-500 flex-shrink-0" />
              {children}
            </h3>
          ),
          h4: ({node, children, ...props}) => (
            <h4 {...props} className="text-base mt-6 mb-2 font-bold text-gray-800">{children}</h4>
          ),
          ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2.5 marker:text-purple-500 marker:font-bold" {...props} />,
          ul: ({node, ...props}) => <ul className="list-none pl-0 mb-6 space-y-2" {...props} />,
          li: ({node, children, ordered, ...props}) => {
            if (!ordered) {
              return (
                <li className="flex items-start gap-3 text-gray-600 leading-relaxed" {...props}>
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-violet-500 mt-[0.55rem] flex-shrink-0" />
                  <span className="flex-1">{children}</span>
                </li>
              );
            }
            return <li className="text-gray-600 leading-relaxed pl-1" {...props}>{children}</li>;
          },
          a: ({node, children, href, ...props}) => (
            <a href={href} target="_blank" rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 hover:underline font-medium inline-flex items-center gap-0.5" {...props}>
              {children}
            </a>
          ),
          blockquote: ({node, children, ...props}) => (
            <blockquote {...props} className="border-l-4 border-purple-400 bg-gradient-to-r from-purple-50/70 to-transparent rounded-r-2xl py-4 px-5 my-6 not-italic">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-700 text-[15px] leading-relaxed">{children}</div>
              </div>
            </blockquote>
          ),
          table: ({node, children, ...props}) => (
            <div className="overflow-x-auto my-6 rounded-2xl border border-purple-100 shadow-sm">
              <table className="w-full" {...props}>{children}</table>
            </div>
          ),
          thead: ({node, children, ...props}) => (
            <thead className="bg-gradient-to-r from-purple-50 to-violet-50" {...props}>{children}</thead>
          ),
          th: ({node, children, ...props}) => (
            <th className="text-purple-900 font-bold text-sm px-4 py-3 border-b border-purple-200 text-left" {...props}>{children}</th>
          ),
          td: ({node, children, ...props}) => (
            <td className="text-gray-600 text-sm px-4 py-3 border-b border-gray-100" {...props}>{children}</td>
          ),
          tr: ({node, children, ...props}) => (
            <tr className="hover:bg-purple-50/30 transition-colors" {...props}>{children}</tr>
          ),
          strong: ({node, children, ...props}) => (
            <strong className="font-bold text-gray-900" {...props}>{children}</strong>
          ),
          em: ({node, children, ...props}) => (
            <em className="text-purple-700 not-italic font-medium" {...props}>{children}</em>
          ),
          hr: ({node, ...props}) => (
            <hr className="border-0 border-t border-gray-100 my-8" {...props} />
          ),
          code: ({node, inline, children, ...props}) => inline
            ? <code className="bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded-md text-[0.88em] font-mono" {...props}>{children}</code>
            : <pre className="bg-gray-900 rounded-2xl p-5 overflow-x-auto my-6 text-sm"><code className="text-green-300 font-mono" {...props}>{children}</code></pre>,
        }}
      >
        {trimmed}
      </ReactMarkdown>
    </article>
  );
}

// ---- Content renderer: segments content and renders each block with proper design ----
function LessonContentRenderer({ content }) {
  const segments = segmentContent(content);

  return (
    <div className="space-y-6">
      {segments.map((seg, i) => {
        if (seg.type === 'video') {
          return (
            <div key={i} className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-black">
              <div className="aspect-video relative">
                <iframe
                  src={seg.src}
                  title={seg.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              {seg.title && seg.title !== 'Vidéo' && (
                <p className="text-center text-xs text-gray-400 py-2 flex items-center justify-center gap-1.5 bg-black">
                  <Play className="w-3 h-3" /> {seg.title}
                </p>
              )}
            </div>
          );
        }
        if (seg.type === 'resources') return <ResourcesCard key={i} html={seg.value} />;
        if (seg.type === 'further')   return <FurtherReadingCard key={i} html={seg.value} />;
        if (seg.type === 'links')     return <UsefulLinksCard key={i} html={seg.value} />;
        if (seg.type === 'markdown')  return <MarkdownArticle key={i} text={seg.value} />;
        // Fallback: raw HTML rendered via dangerouslySetInnerHTML (safe, it's our own content)
        return <div key={i} className="rounded-2xl bg-gray-50 border border-gray-100 p-4 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: seg.value }} />;
      })}
    </div>
  );
}

// ---- Markdown renderer for bot messages ----
function BotMessageContent({ content }) {
  return (
    <div className="bot-msg-md text-[13px] leading-relaxed">
      <ReactMarkdown
        components={{
          p: ({children}) => <p className="mb-1.5 last:mb-0">{children}</p>,
          strong: ({children}) => <strong className="font-bold text-gray-900">{children}</strong>,
          em: ({children}) => <em className="italic">{children}</em>,
          ul: ({children}) => <ul className="list-none space-y-1 my-1.5">{children}</ul>,
          ol: ({children}) => <ol className="list-decimal pl-4 space-y-1 my-1.5">{children}</ol>,
          li: ({children}) => <li className="flex items-start gap-1.5"><span className="text-purple-400 mt-0.5 flex-shrink-0">&#8226;</span><span>{children}</span></li>,
          h1: ({children}) => <p className="font-bold text-gray-900 text-sm mt-2 mb-1">{children}</p>,
          h2: ({children}) => <p className="font-bold text-gray-900 text-sm mt-2 mb-1">{children}</p>,
          h3: ({children}) => <p className="font-semibold text-gray-800 mt-1.5 mb-1">{children}</p>,
          code: ({inline, children}) => inline
            ? <code className="bg-purple-50 text-purple-700 px-1 py-0.5 rounded text-xs">{children}</code>
            : <pre className="bg-gray-50 rounded-lg p-2 text-xs overflow-x-auto my-1.5"><code>{children}</code></pre>,
          blockquote: ({children}) => <div className="border-l-2 border-purple-300 pl-2 my-1.5 text-gray-600 text-xs">{children}</div>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

// ---- Lesson AI Assistant ----
function LessonAssistant({ currentLesson, courseName, allLessons, lessonIndex }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenOpened, setHasBeenOpened] = useState(false);
  const [showBubble, setShowBubble] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeAction, setActiveAction] = useState(null);
  const messagesEndRef = useRef(null);

  const lessonContent = currentLesson?.content || '';

  useEffect(() => {
    setMessages([]);
    setActiveAction(null);
  }, [currentLesson?.id]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setHasBeenOpened(true);
      setMessages([{
        role: "assistant",
        content: `Je suis ton assistant pour cette leçon ! Pose-moi une question ou utilise les raccourcis ci-dessous.`
      }]);
    }
  }, [isOpen, currentLesson?.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Hide welcome bubble after 8 seconds
  useEffect(() => {
    if (!hasBeenOpened && showBubble) {
      const timer = setTimeout(() => setShowBubble(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [hasBeenOpened, showBubble]);

  const quickActions = [
    { id: "summary", label: "Résumer la leçon", icon: AlignLeft, prompt: `Resume cette lecon en 5 points cles maximum, de maniere claire et concise. Contenu : ${lessonContent.substring(0, 4000)}` },
    { id: "quiz", label: "Tester mes connaissances", icon: HelpCircle, prompt: `A partir du contenu de cette lecon, genere 3 questions QCM (avec 4 choix et la bonne reponse indiquee) pour tester la comprehension de l'etudiant. Contenu : ${lessonContent.substring(0, 4000)}` },
    { id: "explain", label: "Expliquer simplement", icon: Lightbulb, prompt: `Explique le contenu de cette lecon comme si tu parlais a quelqu'un qui decouvre completement le sujet. Utilise des analogies simples et des exemples concrets du quotidien. Contenu : ${lessonContent.substring(0, 4000)}` },
    { id: "next", label: "Points essentiels", icon: ListChecks, prompt: `A partir de cette lecon, donne les 3-5 choses essentielles a retenir absolument, et un conseil pratique pour appliquer ces connaissances dans la vie reelle en France. Contenu : ${lessonContent.substring(0, 4000)}` },
  ];

  const handleAction = async (action) => {
    setActiveAction(action.id);
    setMessages(prev => [...prev, { role: "user", content: action.label }]);
    setIsLoading(true);
    try {
      const response = await InvokeLLM({
        prompt: `Tu es un assistant pedagogique bienveillant de FrancePrepAcademy. L'etudiant suit le cours "${courseName}", lecon "${currentLesson?.title || ''}".
REGLES STRICTES :
- Reponds en francais
- N'utilise JAMAIS de markdown (pas de **, pas de ##, pas de *)
- Utilise des tirets (-) pour les listes
- Utilise des emojis pertinents pour structurer
- Sois clair, concis et utile
${action.prompt}`,
        add_context_from_internet: false
      });
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: "Désolé, je n'ai pas pu répondre. Réessaie." }]);
    } finally { setIsLoading(false); setActiveAction(null); }
  };

  const handleSend = async () => {
    const msg = input.trim();
    if (!msg || isLoading) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: msg }]);
    setIsLoading(true);
    try {
      const response = await InvokeLLM({
        prompt: `Tu es un assistant pedagogique de FrancePrepAcademy. Cours : "${courseName}", lecon : "${currentLesson?.title}".
CONTENU DE LA LECON : ${lessonContent.substring(0, 3000)}
REGLES STRICTES :
- Reponds en francais
- N'utilise JAMAIS de markdown (pas de **, pas de ##, pas de *)
- Utilise des tirets (-) pour les listes
- Utilise des emojis pertinents pour structurer
- Sois pedagogique et concis (3-5 phrases), donne des exemples concrets
Question : ${msg}`,
        add_context_from_internet: false
      });
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "assistant", content: "Désolé, réessaie." }]);
    } finally { setIsLoading(false); }
  };

  return (
    <>
      {/* Floating button + welcome bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-5 right-5 z-40 flex items-end gap-3"
          >
            {/* Welcome bubble - shown before first open */}
            {!hasBeenOpened && showBubble && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-white rounded-2xl shadow-xl border border-purple-100 p-3.5 max-w-[220px] mb-1"
              >
                <button onClick={() => setShowBubble(false)} className="absolute top-1.5 right-2 text-gray-300 hover:text-gray-500 text-xs">✕</button>
                <p className="text-xs font-semibold text-gray-800 mb-2">Besoin d'aide ? 🎓</p>
                <div className="space-y-1.5">
                  <button
                    onClick={() => { setIsOpen(true); setTimeout(() => handleAction(quickActions[0]), 300); }}
                    className="w-full text-left text-[11px] text-purple-700 bg-purple-50 hover:bg-purple-100 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <AlignLeft className="w-3 h-3 flex-shrink-0" />Résumer cette leçon
                  </button>
                  <button
                    onClick={() => { setIsOpen(true); setTimeout(() => handleAction(quickActions[1]), 300); }}
                    className="w-full text-left text-[11px] text-purple-700 bg-purple-50 hover:bg-purple-100 px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <HelpCircle className="w-3 h-3 flex-shrink-0" />Tester mes connaissances
                  </button>
                </div>
                <div className="absolute -right-2 bottom-5 w-3 h-3 bg-white border-r border-b border-purple-100 transform rotate-[-45deg]" />
              </motion.div>
            )}
            <button onClick={() => setIsOpen(true)} className="group relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 shadow-lg shadow-purple-500/25 flex items-center justify-center transition-all group-hover:shadow-xl group-hover:scale-105">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed bottom-4 right-4 z-50 w-[380px] max-w-[calc(100vw-2rem)]"
            style={{ height: "min(550px, calc(100vh - 2rem))" }}
          >
            <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-2xl border border-purple-200/50 bg-white">
              <div className="bg-gradient-to-r from-violet-600 to-purple-700 text-white px-4 py-3 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><Brain className="w-4 h-4" /></div>
                    <div>
                      <p className="text-sm font-bold leading-tight">Assistant IA</p>
                      <p className="text-[10px] text-purple-200 truncate max-w-[200px]">{currentLesson?.title}</p>
                    </div>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-lg hover:bg-white/20 flex items-center justify-center"><X className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="px-3 py-2.5 border-b border-gray-100 flex gap-1.5 overflow-x-auto scrollbar-none flex-shrink-0">
                {quickActions.map(a => (
                  <button
                    key={a.id}
                    onClick={() => handleAction(a)}
                    disabled={isLoading}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all border flex-shrink-0 ${
                      activeAction === a.id
                        ? 'bg-purple-100 text-purple-700 border-purple-200'
                        : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200'
                    }`}
                  >
                    <a.icon className="w-3 h-3" />{a.label}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-0 bg-gradient-to-b from-purple-50/30 to-white">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.role === "assistant" && (
                      <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                        <Brain className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <div className={`max-w-[85%] px-3 py-2 rounded-xl text-[13px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-tr-sm"
                        : "bg-white text-gray-700 border border-gray-100 shadow-sm rounded-tl-sm"
                    }`}>
                      {msg.role === "assistant"
                        ? <BotMessageContent content={msg.content} />
                        : <p className="whitespace-pre-wrap">{msg.content}</p>
                      }
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mr-2 flex-shrink-0"><Brain className="w-3 h-3 text-white" /></div>
                    <div className="bg-white px-3 py-2.5 rounded-xl border border-gray-100 shadow-sm rounded-tl-sm">
                      <div className="flex gap-1"><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" /><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} /><div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} /></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                    placeholder="Pose ta question..."
                    className="flex-1 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-purple-400 focus:ring-1 focus:ring-purple-100 outline-none text-sm"
                    disabled={isLoading}
                  />
                  <button onClick={handleSend} disabled={!input.trim() || isLoading} className="w-9 h-9 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white flex items-center justify-center disabled:opacity-40 flex-shrink-0"><Send className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Learn() {
  const { t } = useLanguage();
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [enrollment, setEnrollment] = useState(null);
  const [canAccess, setCanAccess] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('courseId');
  const lessonId = urlParams.get('lessonId');
  const queryClient = useQueryClient();

  useEffect(() => { loadUserAndEnrollment(); }, [courseId]);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadUserAndEnrollment = async () => {
    try {
      const userData = await me();
      setUser(userData);
      if (userData?.id) {
        const { data: profile } = await supabase.from('user_profiles').select('*').eq('id', userData.id).single();
        setUserProfile(profile || userData);
      }
      const enrollments = await Enrollment.filter({ user_email: userData.email, course_id: courseId });
      if (enrollments.length > 0) setEnrollment(enrollments[0]);
    } catch (error) { console.error("Error loading user:", error); }
  };

  const { data: course, isLoading: courseLoading, isError: courseError } = useQuery({
    queryKey: ['course', courseId],
    queryFn: async () => {
      if (!courseId) return null;
      const courses = await Course.filter({ id: courseId });
      return courses?.[0] || null;
    },
    enabled: !!courseId, retry: 2,
  });

  useEffect(() => {
    if (course && userProfile !== null) {
      if (!course.is_premium) { setCanAccess(true); return; }
      setCanAccess(isPremium(userProfile));
    } else if (course && !userProfile) {
      setCanAccess(!course.is_premium);
    }
  }, [course, userProfile]);

  const { data: lessons = [], isLoading: lessonsLoading } = useQuery({
    queryKey: ['lessons', courseId],
    queryFn: async () => {
      const l = await Lesson.filter({ course_id: courseId }, 'order');
      return l.sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    enabled: !!courseId,
  });

  const { data: currentLesson, isLoading: lessonLoading } = useQuery({
    queryKey: ['lesson', lessonId],
    queryFn: async () => { const d = await Lesson.filter({ id: lessonId }); return d[0]; },
    enabled: !!lessonId,
  });

  const markCompleteMutation = useMutation({
    mutationFn: async () => {
      const cl = [...(enrollment.completed_lessons || [])];
      if (!cl.includes(lessonId)) cl.push(lessonId);
      const pct = (cl.length / lessons.length) * 100;
      return Enrollment.update(enrollment.id, { completed_lessons: cl, progress_percentage: pct, last_accessed: new Date().toISOString(), completed: pct === 100 });
    },
    onSuccess: (u) => { setEnrollment(u); queryClient.invalidateQueries({ queryKey: ['enrollments'] }); },
  });

  const currentIndex = lessons.findIndex(l => l.id === lessonId);
  const nextLesson = lessons[currentIndex + 1];
  const prevLesson = lessons[currentIndex - 1];
  const isCompleted = enrollment?.completed_lessons?.includes(lessonId);
  const progressPercentage = enrollment?.progress_percentage || 0;
  const completedCount = enrollment?.completed_lessons?.length || 0;

  const lessonsByModule = lessons.reduce((acc, lesson) => {
    const m = lesson.module_number || 1;
    if (!acc[m]) acc[m] = [];
    acc[m].push(lesson);
    return acc;
  }, {});

  const handleNav = (lid) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    navigate(createPageUrl("Learn") + `?courseId=${courseId}&lessonId=${lid}`);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  // Content & video from correct DB fields
  const lessonContent = currentLesson?.content || '';
  const videoUrl = currentLesson?.video_url;
  const embedUrl = toYouTubeEmbed(videoUrl);
  const wordCount = lessonContent.split(/\s+/).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Reset video error state and scroll to top when lesson changes
  useEffect(() => {
    setVideoError(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Double-ensure scroll after paint (some browsers need a frame to settle)
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }, [lessonId]);

  // -- Guard states --
  if (courseLoading || lessonsLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <div className="text-center"><div className="relative w-16 h-16 mx-auto mb-4"><div className="absolute inset-0 rounded-full border-4 border-purple-100" /><div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" /><BookOpen className="absolute inset-0 m-auto w-7 h-7 text-purple-600" /></div><p className="text-gray-700 font-semibold">{t('learn.loadingCourse')}</p></div>
    </div>
  );

  if ((courseError && !courseLoading) || (!course && !courseLoading)) return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-red-50"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" /><h2 className="text-xl font-bold text-gray-900 mb-2">{t('learn.courseNotFound')}</h2><Link to={createPageUrl("Courses")} onClick={() => window.scrollTo(0, 0)}><Button className="mt-4 bg-purple-600 hover:bg-purple-700 rounded-xl">{t('learn.backToCourses')}</Button></Link></CardContent></Card></div>
  );

  if (course && !enrollment) return (
    <div className="min-h-screen flex items-center justify-center p-4"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><GraduationCap className="w-12 h-12 text-purple-300 mx-auto mb-4" /><h2 className="text-xl font-bold mb-2">Inscription requise</h2><Link to={createPageUrl("CourseDetail") + `?id=${courseId}`} onClick={() => window.scrollTo(0, 0)}><Button className="mt-4 bg-purple-600 hover:bg-purple-700 rounded-xl">Voir le cours</Button></Link></CardContent></Card></div>
  );

  if (lessons.length === 0) return (
    <div className="min-h-screen flex items-center justify-center p-4"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" /><h2 className="text-xl font-bold mb-2">{t('learn.noLessons')}</h2><Link to={createPageUrl("Courses")} onClick={() => window.scrollTo(0, 0)}><Button className="mt-4 bg-purple-600 hover:bg-purple-700 rounded-xl">{t('learn.backToCourses')}</Button></Link></CardContent></Card></div>
  );

  if (lessonLoading || !currentLesson) return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50"><div className="text-center"><div className="relative w-12 h-12 mx-auto mb-3"><div className="absolute inset-0 rounded-full border-4 border-purple-100" /><div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-600 animate-spin" /></div><p className="text-gray-600">{t('learn.loadingLesson')}</p></div></div>
  );

  if (!canAccess) return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-amber-50"><Card className="max-w-md w-full border-0 shadow-2xl"><CardContent className="p-10 text-center"><Award className="w-12 h-12 text-amber-500 mx-auto mb-4" /><h2 className="text-xl font-bold mb-2">{t('learn.accessRestricted')}</h2><p className="text-gray-500 mb-6">{t('learn.accessRestrictedDesc')}</p><Link to={createPageUrl("Pricing")} onClick={() => window.scrollTo(0, 0)}><Button className="w-full bg-amber-500 hover:bg-amber-600 rounded-xl h-11">{t('learn.discoverSubscriptions')}</Button></Link></CardContent></Card></div>
  );

  const hasContent = lessonContent.trim().length > 0;
  const hasVideo = !!embedUrl;

  return (
    <div className="min-h-screen bg-gray-50/80 flex flex-col lg:flex-row overflow-x-hidden">
      {/* Mobile sidebar toggle */}
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden fixed top-[72px] left-3 z-30 w-10 h-10 rounded-xl bg-white shadow-lg border border-gray-200 flex items-center justify-center">
        {sidebarOpen ? <PanelLeftClose className="w-5 h-5 text-gray-600" /> : <PanelLeftOpen className="w-5 h-5 text-gray-600" />}
      </button>

      {sidebarOpen && <div className="lg:hidden fixed inset-0 bg-black/30 z-20 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />}

      {/* ===== SIDEBAR ===== */}
      <aside className={`fixed lg:sticky top-0 left-0 z-20 h-screen bg-white border-r border-gray-100 overflow-y-auto transition-all duration-300 shadow-lg lg:shadow-none ${sidebarOpen ? 'w-[300px] lg:w-72 translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-0 lg:min-w-0 lg:overflow-hidden lg:border-0 lg:p-0'}`}>
        {/* Sidebar header with course info */}
        <div className="sticky top-0 z-10 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white">
          <div className="p-4 pb-3">
            <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`} className="block group" onClick={() => window.scrollTo(0, 0)}>
              <div className="flex items-center gap-2 text-purple-200 text-[10px] font-medium mb-1 group-hover:text-white transition-colors">
                <ArrowLeft className="w-3 h-3" />
                Retour au cours
              </div>
              <h2 className="text-sm font-bold group-hover:underline line-clamp-2 leading-snug">{course.title}</h2>
            </Link>
          </div>
          {/* Course progress */}
          <div className="mx-4 mb-4 bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-purple-200 font-medium">Progression du cours</span>
              <span className="text-lg font-extrabold tabular-nums">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #34d399, #10b981, #059669)' }}
                initial={false}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-purple-200">{completedCount} / {lessons.length} leçons</span>
              {progressPercentage === 100 && <Badge className="bg-emerald-500/30 text-emerald-200 border-0 text-[9px] px-1.5 py-0">Terminé !</Badge>}
            </div>
          </div>
        </div>

        {/* Lesson list */}
        <div className="p-2 pb-8">
          {Object.entries(lessonsByModule).sort(([a], [b]) => Number(a) - Number(b)).map(([moduleNum, mLessons]) => (
            <div key={moduleNum} className="mb-2">
              <div className="flex items-center gap-1.5 px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <div className="w-5 h-5 rounded-md bg-purple-100 flex items-center justify-center">
                  <BookOpen className="w-3 h-3 text-purple-500" />
                </div>
                <span>Module {moduleNum}</span>
              </div>
              <div className="space-y-0.5">
                {mLessons.map((lesson, idx) => {
                  const isCurrent = lesson.id === lessonId;
                  const done = enrollment?.completed_lessons?.includes(lesson.id);
                  return (
                    <button key={lesson.id} onClick={() => handleNav(lesson.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all text-sm group ${
                        isCurrent ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-md shadow-purple-500/20'
                        : done ? 'bg-emerald-50/80 hover:bg-emerald-100/80'
                        : 'hover:bg-gray-50'
                      }`}>
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isCurrent ? 'bg-white/20'
                          : done ? 'bg-emerald-100'
                          : 'bg-gray-100 group-hover:bg-purple-100'
                        }`}>
                          {done && !isCurrent ? <CheckCircle className="w-4 h-4 text-emerald-600" /> :
                            lesson.video_url ? <Play className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-gray-400 group-hover:text-purple-500'}`} /> :
                            <FileText className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-gray-400 group-hover:text-purple-500'}`} />
                          }
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`text-[13px] font-medium truncate block leading-snug ${
                            isCurrent ? 'text-white' : done ? 'text-gray-700' : 'text-gray-600'
                          }`}>
                            {lesson.title || `Leçon ${idx + 1}`}
                          </span>
                          {lesson.duration_minutes && (
                            <span className={`text-[10px] flex items-center gap-0.5 mt-0.5 ${isCurrent ? 'text-purple-200' : 'text-gray-400'}`}>
                              <Clock className="w-2.5 h-2.5" />{lesson.duration_minutes} min
                            </span>
                          )}
                        </div>
                        {isCurrent && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 min-w-0" ref={contentRef}>
        {/* Lesson hero header */}
        <div className="bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/20 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl" />
          </div>

          <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-6 sm:py-8 relative">
            <div className="flex items-center justify-between mb-4">
              <Link to={createPageUrl("CourseDetail") + `?id=${courseId}`} onClick={() => window.scrollTo(0, 0)}>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10 -ml-2 gap-1.5">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Retour</span>
                </Button>
              </Link>
              <div className="flex items-center gap-3 text-xs text-purple-200">
                {lessonContent.trim() && (
                  <>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />~{readingTime} min</span>
                    {hasVideo && (
                      <>
                        <span className="text-purple-400">·</span>
                        <span className="flex items-center gap-1"><Video className="w-3.5 h-3.5" />Vidéo</span>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-2 mb-3">
              <Badge className="bg-white/15 text-white border-0 text-xs font-semibold px-2.5 py-0.5 backdrop-blur-sm">
                Module {currentLesson.module_number || 1}
              </Badge>
              <Badge className="bg-white/10 text-white/80 border-0 text-xs px-2.5 py-0.5">
                Leçon {currentIndex + 1}/{lessons.length}
              </Badge>
              {currentLesson.duration_minutes && (
                <Badge className="bg-white/10 text-white/80 border-0 text-xs gap-1 px-2.5 py-0.5">
                  <Clock className="w-3 h-3" />{currentLesson.duration_minutes} min
                </Badge>
              )}
              {isCompleted && (
                <Badge className="bg-emerald-500/20 text-emerald-200 border-0 text-xs gap-1 px-2.5 py-0.5">
                  <CheckCircle className="w-3 h-3" />Terminée
                </Badge>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight">
              {currentLesson.title || t('learn.lessonWithoutTitle')}
            </h1>
            {currentLesson.description && (
              <p className="text-base text-purple-200 mt-2 leading-relaxed max-w-2xl">{currentLesson.description}</p>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 py-6 lg:py-10">
          {/* ===== VIDEO PLAYER ===== */}
          {hasVideo && (
            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 bg-black">
                {videoError ? (
                  <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-purple-950 text-white">
                    <Video className="w-12 h-12 text-purple-400 mb-3 opacity-60" />
                    <p className="text-lg font-semibold text-purple-200">Vidéo à venir</p>
                    <p className="text-sm text-slate-400 mt-1">Cette vidéo sera disponible prochainement</p>
                  </div>
                ) : (
                  <div className="aspect-video relative">
                    <iframe
                      src={embedUrl}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                      loading="lazy"
                      title={currentLesson.title}
                      onError={() => setVideoError(true)}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ===== RESSOURCES EN HAUT ===== */}
          {(hasContent || hasVideo) && currentLesson && (
            <div className="mb-6">
              <SmartLinksCard lesson={currentLesson} courseTitle={course?.title} />
            </div>
          )}

          {/* ===== LESSON CONTENT ===== */}
          {hasContent && (
            <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden mb-6">
              <CardContent className="p-0">
                <div className="px-6 sm:px-10 lg:px-14 py-8 sm:py-10">
                  <LessonContentRenderer content={lessonContent} />
                </div>
              </CardContent>
            </Card>
          )}

          {/* ===== QCM INTÉGRÉ ===== */}
          {hasContent && lessonContent.trim().length > 200 && (
            <div className="mb-8">
              <LessonQuiz lesson={currentLesson} courseName={course?.title || ''} />
            </div>
          )}

          {/* No content at all */}
          {!hasContent && !hasVideo && (
            <Card className="border-0 shadow-xl bg-white rounded-2xl overflow-hidden mb-8">
              <CardContent className="p-16 text-center">
                <BookOpen className="w-12 h-12 text-gray-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-400">{t('learn.contentInPreparation')}</h3>
              </CardContent>
            </Card>
          )}

          {/* ===== LESSON NAVIGATION ===== */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-8">
            <Button
              variant="outline"
              onClick={() => prevLesson && handleNav(prevLesson.id)}
              disabled={!prevLesson}
              className="h-12 rounded-xl gap-2 text-gray-600 border-gray-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="truncate max-w-[150px]">{prevLesson ? prevLesson.title : t('learn.previousLesson')}</span>
            </Button>

            <div className="flex gap-3 justify-center">
              {!isCompleted ? (
                <Button
                  onClick={() => markCompleteMutation.mutate()}
                  className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold h-12 rounded-xl px-6 gap-2 shadow-lg shadow-emerald-500/20 transition-all hover:shadow-xl"
                  disabled={markCompleteMutation.isPending}
                >
                  {markCompleteMutation.isPending
                    ? <><Loader2 className="w-4 h-4 animate-spin" />{t('learn.saving')}</>
                    : <><CheckCircle className="w-5 h-5" />{t('learn.markAsCompleted')}</>
                  }
                </Button>
              ) : (
                <div className="flex items-center gap-2 px-5 h-12 rounded-xl bg-emerald-50 text-emerald-700 font-semibold text-sm border border-emerald-200">
                  <CheckCircle className="w-5 h-5" />
                  Leçon terminée
                </div>
              )}
            </div>

            <Button
              onClick={() => nextLesson && handleNav(nextLesson.id)}
              disabled={!nextLesson}
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold h-12 rounded-xl gap-2 shadow-lg shadow-purple-500/20 transition-all hover:shadow-xl"
            >
              <span className="truncate max-w-[150px]">{nextLesson ? nextLesson.title : t('learn.nextLesson')}</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* ===== COURSE COMPLETION CARD ===== */}
          {progressPercentage === 100 && !enrollment.certificate_issued && (
            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 rounded-2xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{t('learn.congratulations')}</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">{t('learn.downloadCertificate')}</p>
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold h-13 px-8 rounded-xl gap-2 shadow-lg">
                  <Award className="w-5 h-5" />{t('learn.downloadMyCertificate')}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* AI Assistant */}
      <LessonAssistant
        currentLesson={currentLesson}
        courseName={course?.title || ''}
        allLessons={lessons}
        lessonIndex={currentIndex}
      />
    </div>
  );
}
