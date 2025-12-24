import Layout from "./Layout.jsx";

import Dashboard from "./Dashboard";

import Chatbot from "./Chatbot";

import Courses from "./Courses";

import NotesGenerator from "./NotesGenerator";

import ResumeBuilder from "./ResumeBuilder";

import MockInterview from "./MockInterview";

import AptitudeTests from "./AptitudeTests";

import VerbalTests from "./VerbalTests";

import ProblemSolving from "./ProblemSolving";

import CriticalThinking from "./CriticalThinking";

import StudentAssessment from "./StudentAssessment";

import ProgressTracker from "./ProgressTracker";

import Profile from "./Profile";

import Certificates from "./Certificates";

import Home from "./Home";

import CourseDetail from "./CourseDetail";

import Learn from "./Learn";

import Teachers from "./Teachers";

import Community from "./Community";

import Pricing from "./Pricing";

import CGU from "./CGU";

import CGV from "./CGV";

import PrivacyPolicy from "./PrivacyPolicy";

import PaymentSuccess from "./PaymentSuccess";

import AdminCourses from "./AdminCourses";

import Login from "./Login";
import AuthCallback from "./AuthCallback";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

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
    
    Certificates: Certificates,
    
    Home: Home,
    
    CourseDetail: CourseDetail,
    
    Learn: Learn,
    
    Teachers: Teachers,
    
    Community: Community,
    
    Pricing: Pricing,
    
    CGU: CGU,
    
    CGV: CGV,
    
    PrivacyPolicy: PrivacyPolicy,
    
    PaymentSuccess: PaymentSuccess,
    
    AdminCourses: AdminCourses,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Dashboard />} />
                
                
                <Route path="/Dashboard" element={<Dashboard />} />
                
                <Route path="/Chatbot" element={<Chatbot />} />
                
                <Route path="/Courses" element={<Courses />} />
                
                <Route path="/NotesGenerator" element={<NotesGenerator />} />
                
                <Route path="/ResumeBuilder" element={<ResumeBuilder />} />
                
                <Route path="/MockInterview" element={<MockInterview />} />
                
                <Route path="/AptitudeTests" element={<AptitudeTests />} />
                
                <Route path="/VerbalTests" element={<VerbalTests />} />
                
                <Route path="/ProblemSolving" element={<ProblemSolving />} />
                
                <Route path="/CriticalThinking" element={<CriticalThinking />} />
                
                <Route path="/StudentAssessment" element={<StudentAssessment />} />
                
                <Route path="/ProgressTracker" element={<ProgressTracker />} />
                
                <Route path="/Profile" element={<Profile />} />
                
                <Route path="/Certificates" element={<Certificates />} />
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/CourseDetail" element={<CourseDetail />} />
                
                <Route path="/Learn" element={<Learn />} />
                
                <Route path="/Teachers" element={<Teachers />} />
                
                <Route path="/Community" element={<Community />} />
                
                <Route path="/Pricing" element={<Pricing />} />
                
                <Route path="/CGU" element={<CGU />} />
                
                <Route path="/CGV" element={<CGV />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
                
                <Route path="/AdminCourses" element={<AdminCourses />} />
                
                <Route path="/login" element={<Login />} />
                
                <Route path="/auth/callback" element={<AuthCallback />} />
                
            </Routes>
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