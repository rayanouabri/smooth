import React, { useState, useEffect, useMemo, Suspense, lazy } from "react";
import Layout from "./Layout.jsx";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

// Pages critiques chargées immédiatement (Home, Login, Layout)
import Home from "./Home";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import AuthCallback from "./AuthCallback";
import NotFound from "./NotFound";

// Lazy loading pour les autres pages (optimisation du bundle)
const Dashboard = lazy(() => import("./Dashboard"));
const Chatbot = lazy(() => import("./Chatbot"));
const Courses = lazy(() => import("./Courses"));
const NotesGenerator = lazy(() => import("./NotesGenerator"));
const ResumeBuilder = lazy(() => import("./ResumeBuilder"));
const MockInterview = lazy(() => import("./MockInterview"));
const AptitudeTests = lazy(() => import("./AptitudeTests"));
const VerbalTests = lazy(() => import("./VerbalTests"));
const ProblemSolving = lazy(() => import("./ProblemSolving"));
const CriticalThinking = lazy(() => import("./CriticalThinking"));
const StudentAssessment = lazy(() => import("./StudentAssessment"));
const ProgressTracker = lazy(() => import("./ProgressTracker"));
const Profile = lazy(() => import("./Profile"));
// const Certificates = lazy(() => import("./Certificates")); // Disabled
const CourseDetail = lazy(() => import("./CourseDetail"));
const Learn = lazy(() => import("./Learn"));
const Teachers = lazy(() => import("./Teachers"));
const Community = lazy(() => import("./Community"));
const Pricing = lazy(() => import("./Pricing"));
const ConciergerieVIP = lazy(() => import("./ConciergerieVIP"));
const ExpertOneShot = lazy(() => import("./ExpertOneShot"));
const CGU = lazy(() => import("./CGU"));
const CGV = lazy(() => import("./CGV"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));
const PaymentSuccess = lazy(() => import("./PaymentSuccess"));
const AdminCourses = lazy(() => import("./AdminCourses"));
const Contact = lazy(() => import("./Contact"));

// Skeleton loader pour les pages en chargement
const PageSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

const PAGES = {
    
    Dashboard: Dashboard,
    
    Chatbot: Chatbot,
    
    Courses: Courses,
    
    NotesGenerator: NotesGenerator,
    
    ResumeBuilder: ResumeBuilder,
    
    MockInterview: MockInterview,
    
    AptitudeTests: AptitudeTests,
    
    VerbalTests: VerbalTests,
    
    ProblemSolving: ProblemSolving,
    
    CriticalThinking: CriticalThinking,
    
    StudentAssessment: StudentAssessment,
    
    ProgressTracker: ProgressTracker,
    
    Profile: Profile,
    
    // Certificates: Certificates, // Disabled
    
    Home: Home,
    
    CourseDetail: CourseDetail,
    
    Learn: Learn,
    
    Teachers: Teachers,
    
    Community: Community,
    
    Pricing: Pricing,

    ConciergerieVIP: ConciergerieVIP,

    ExpertOneShot: ExpertOneShot,

    CGU: CGU,
    
    CGV: CGV,
    
    PrivacyPolicy: PrivacyPolicy,
    
    PaymentSuccess: PaymentSuccess,
    
    AdminCourses: AdminCourses,
    
    Login: Login,
    
    ResetPassword: ResetPassword,
    
    NotFound: NotFound,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    // Si l'URL est vide ou "/", retourner "Home" par défaut
    if (!urlLastPart || urlLastPart === '' || urlLastPart === '/') {
        return 'Home';
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    // Si la page n'existe pas, retourner "NotFound" pour que le Layout l'affiche correctement
    // (mais React Router gérera toujours la route 404)
    return pageName || 'NotFound';
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const [isReady, setIsReady] = useState(false);
    const [hasError, setHasError] = useState(false);
    
    useEffect(() => {
        // S'assurer que le composant est prêt avant de rendre
        // Utiliser setTimeout pour éviter les problèmes de compatibilité avec Opera
        const timer = setTimeout(() => {
            try {
                setIsReady(true);
            } catch (err) {
                console.error('Error initializing PagesContent:', err);
                setHasError(true);
            }
        }, 0);
        
        return () => clearTimeout(timer);
    }, []);
    
    // Mettre à jour currentPage quand location change
    const currentPage = useMemo(() => {
        return _getCurrentPage(location.pathname);
    }, [location.pathname]);
    
    // Afficher un loader pendant le chargement initial pour éviter les pages blanches
    if (!isReady || hasError) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                    <p className="text-gray-600">Chargement...</p>
                    {hasError && (
                        <button 
                            onClick={() => window.location.reload()} 
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Recharger
                        </button>
                    )}
                </div>
            </div>
        );
    }
    
    return (
        <Layout currentPageName={currentPage}>
            <Suspense fallback={<PageSkeleton />}>
                <Routes>            
                    
                        <Route path="/" element={<Home />} />

                    {/* Canonical (lowercase) routes - matches createPageUrl() */}
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/chatbot" element={<Chatbot />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/notesgenerator" element={<NotesGenerator />} />
                    <Route path="/resumebuilder" element={<ResumeBuilder />} />
                    <Route path="/mockinterview" element={<MockInterview />} />
                    <Route path="/aptitudetests" element={<AptitudeTests />} />
                    <Route path="/verbaltests" element={<VerbalTests />} />
                    <Route path="/problemsolving" element={<ProblemSolving />} />
                    <Route path="/criticalthinking" element={<CriticalThinking />} />
                    <Route path="/studentassessment" element={<StudentAssessment />} />
                    <Route path="/progresstracker" element={<ProgressTracker />} />
                    <Route path="/profile" element={<Profile />} />
                    {/* <Route path="/certificates" element={<Certificates />} /> */}
                    <Route path="/home" element={<Home />} />
                    <Route path="/coursedetail" element={<CourseDetail />} />
                    <Route path="/learn" element={<Learn />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/expertoneshot" element={<ExpertOneShot />} />
                    <Route path="/cgu" element={<CGU />} />
                    <Route path="/cgv" element={<CGV />} />
                    <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                    <Route path="/paymentsuccess" element={<PaymentSuccess />} />
                    <Route path="/admincourses" element={<AdminCourses />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/auth/callback" element={<AuthCallback />} />

                {/* Backward-compat redirects (old uppercase routes) */}
                <Route path="/Dashboard" element={<Navigate to="/dashboard" replace />} />
                <Route path="/Chatbot" element={<Navigate to="/chatbot" replace />} />
                <Route path="/Courses" element={<Navigate to="/courses" replace />} />
                <Route path="/NotesGenerator" element={<Navigate to="/notesgenerator" replace />} />
                <Route path="/ResumeBuilder" element={<Navigate to="/resumebuilder" replace />} />
                <Route path="/MockInterview" element={<Navigate to="/mockinterview" replace />} />
                <Route path="/AptitudeTests" element={<Navigate to="/aptitudetests" replace />} />
                <Route path="/VerbalTests" element={<Navigate to="/verbaltests" replace />} />
                <Route path="/ProblemSolving" element={<Navigate to="/problemsolving" replace />} />
                <Route path="/CriticalThinking" element={<Navigate to="/criticalthinking" replace />} />
                <Route path="/StudentAssessment" element={<Navigate to="/studentassessment" replace />} />
                <Route path="/ProgressTracker" element={<Navigate to="/progresstracker" replace />} />
                <Route path="/Profile" element={<Navigate to="/profile" replace />} />
                {/* <Route path="/Certificates" element={<Navigate to="/certificates" replace />} /> */}
                <Route path="/Home" element={<Navigate to="/home" replace />} />
                <Route path="/CourseDetail" element={<Navigate to="/coursedetail" replace />} />
                <Route path="/Learn" element={<Navigate to="/learn" replace />} />
                <Route path="/Teachers" element={<Navigate to="/teachers" replace />} />
                <Route path="/Community" element={<Navigate to="/community" replace />} />
                <Route path="/Pricing" element={<Navigate to="/pricing" replace />} />
                <Route path="/ExpertOneShot" element={<Navigate to="/expertoneshot" replace />} />
                <Route path="/CGU" element={<Navigate to="/cgu" replace />} />
                <Route path="/CGV" element={<Navigate to="/cgv" replace />} />
                <Route path="/PrivacyPolicy" element={<Navigate to="/privacypolicy" replace />} />
                <Route path="/PaymentSuccess" element={<Navigate to="/paymentsuccess" replace />} />
                <Route path="/AdminCourses" element={<Navigate to="/admincourses" replace />} />
                
                    {/* Catch-all route for 404 */}
                    <Route path="*" element={<NotFound />} />
                    
                </Routes>
            </Suspense>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}