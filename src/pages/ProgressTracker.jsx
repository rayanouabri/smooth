import React, { useState, useEffect } from "react";
import { Progress } from "@/api/entities";
import { Assessment } from "@/api/entities";
import { Course } from "@/api/entities";
import { User } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  TrendingUp, BookOpen, Clock, Target, Award, Calendar, 
  BarChart3, PieChart, Activity, Zap, Trophy, Star
} from "lucide-react";

export default function ProgressTracker() {
  const [user, setUser] = useState(null);
  const [courseProgress, setCourseProgress] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [stats, setStats] = useState({
    totalCourses: 0,
    completedCourses: 0,
    totalStudyTime: 0,
    averageScore: 0,
    assessmentsTaken: 0,
    skillsLearned: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const userData = await User.me();
      setUser(userData);

      if (userData?.email) {
        // Load progress data
        const progressData = await Progress.filter({ user_email: userData.email });
        setCourseProgress(progressData);

        // Load assessments
        const assessmentData = await Assessment.filter({ user_email: userData.email });
        setAssessments(assessmentData);

        // Load courses
        const courseData = await Course.list();
        setCourses(courseData);

        // Calculate statistics
        const totalStudyTime = progressData.reduce((sum, p) => sum + (p.time_spent || 0), 0);
        const completedCourses = progressData.filter(p => p.status === "completed").length;
        const averageScore = assessmentData.length > 0 
          ? Math.round(assessmentData.reduce((sum, a) => sum + a.score, 0) / assessmentData.length)
          : 0;

        setStats({
          totalCourses: progressData.length,
          completedCourses,
          totalStudyTime: Math.round(totalStudyTime / 60), // Convert to hours
          averageScore,
          assessmentsTaken: assessmentData.length,
          skillsLearned: new Set(progressData.map(p => p.course_id)).size
        });
      }
    } catch (error) {
      console.log("Error loading progress data");
    }
    setIsLoading(false);
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "bg-green-100 text-green-800";
    if (score >= 60) return "bg-blue-100 text-blue-800";
    if (score >= 40) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const getAssessmentIcon = (type) => {
    switch (type) {
      case "aptitude": return "🧮";
      case "verbal": return "📝";
      case "problem_solving": return "🧩";
      case "critical_thinking": return "🎯";
      case "mock_interview": return "🎤";
      default: return "📊";
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">📈 Progress Tracker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your learning journey and celebrate your achievements
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card className="border-0 shadow-lg glass-effect">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.totalCourses}</div>
              <p className="text-gray-600 text-sm">Courses Started</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg glass-effect">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.completedCourses}</div>
              <p className="text-gray-600 text-sm">Completed</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg glass-effect">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.totalStudyTime}h</div>
              <p className="text-gray-600 text-sm">Study Time</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg glass-effect">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.averageScore}%</div>
              <p className="text-gray-600 text-sm">Avg Score</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg glass-effect">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.assessmentsTaken}</div>
              <p className="text-gray-600 text-sm">Tests Taken</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg glass-effect">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stats.skillsLearned}</div>
              <p className="text-gray-600 text-sm">Skills Learned</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Course Progress</TabsTrigger>
            <TabsTrigger value="assessments">Assessment History</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            {courseProgress.length > 0 ? (
              <div className="grid gap-6">
                {courseProgress.map((progress) => {
                  const course = courses.find(c => c.id === progress.course_id);
                  return (
                    <Card key={progress.id} className="border-0 shadow-lg glass-effect">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-gray-900 mb-2">
                              {course?.title || "Course"}
                            </h3>
                            <p className="text-gray-600 text-sm mb-3">
                              {course?.description || "Course description"}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {formatTime(progress.time_spent || 0)}
                              </div>
                              {progress.last_accessed && (
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Last: {new Date(progress.last_accessed).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className={getScoreColor(progress.completion_percentage)}>
                              {progress.status}
                            </Badge>
                            <div className="text-right">
                              <div className={`text-2xl font-bold ${getProgressColor(progress.completion_percentage)}`}>
                                {progress.completion_percentage}%
                              </div>
                            </div>
                          </div>
                        </div>
                        <ProgressBar value={progress.completion_percentage} className="h-3" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No courses started yet</h3>
                <p className="text-gray-600">Start your first course to see progress here</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="assessments" className="space-y-6">
            {assessments.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {assessments.map((assessment, index) => (
                  <Card key={index} className="border-0 shadow-lg glass-effect">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-2xl">
                            {getAssessmentIcon(assessment.assessment_type)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 capitalize">
                              {assessment.assessment_type.replace('_', ' ')}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {new Date(assessment.completed_date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Badge className={getScoreColor(assessment.score)}>
                          {assessment.score}/{assessment.max_score}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Score</span>
                          <span className="font-semibold">{assessment.score}%</span>
                        </div>
                        <ProgressBar value={assessment.score} className="h-2" />
                        
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Time taken: {assessment.time_taken}min</span>
                          {assessment.score >= 80 && <Star className="w-4 h-4 text-yellow-500" />}
                        </div>
                        
                        {assessment.feedback && (
                          <p className="text-sm text-gray-700 mt-2 italic">
                            "{assessment.feedback}"
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No assessments taken yet</h3>
                <p className="text-gray-600">Take your first test to see results here</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Achievement Cards */}
              <Card className={`border-0 shadow-lg glass-effect ${stats.totalCourses >= 1 ? 'bg-green-50 border-green-200' : 'opacity-50'}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-semibold text-gray-900 mb-2">First Steps</h3>
                  <p className="text-sm text-gray-600">Started your first course</p>
                  {stats.totalCourses >= 1 && <Badge className="mt-2 bg-green-100 text-green-800">Unlocked!</Badge>}
                </CardContent>
              </Card>

              <Card className={`border-0 shadow-lg glass-effect ${stats.completedCourses >= 1 ? 'bg-blue-50 border-blue-200' : 'opacity-50'}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Course Complete</h3>
                  <p className="text-sm text-gray-600">Completed your first course</p>
                  {stats.completedCourses >= 1 && <Badge className="mt-2 bg-blue-100 text-blue-800">Unlocked!</Badge>}
                </CardContent>
              </Card>

              <Card className={`border-0 shadow-lg glass-effect ${stats.totalStudyTime >= 10 ? 'bg-purple-50 border-purple-200' : 'opacity-50'}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">⏰</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Study Master</h3>
                  <p className="text-sm text-gray-600">Studied for 10+ hours</p>
                  {stats.totalStudyTime >= 10 && <Badge className="mt-2 bg-purple-100 text-purple-800">Unlocked!</Badge>}
                </CardContent>
              </Card>

              <Card className={`border-0 shadow-lg glass-effect ${stats.assessmentsTaken >= 5 ? 'bg-orange-50 border-orange-200' : 'opacity-50'}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">📊</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Test Taker</h3>
                  <p className="text-sm text-gray-600">Completed 5+ assessments</p>
                  {stats.assessmentsTaken >= 5 && <Badge className="mt-2 bg-orange-100 text-orange-800">Unlocked!</Badge>}
                </CardContent>
              </Card>

              <Card className={`border-0 shadow-lg glass-effect ${stats.averageScore >= 80 ? 'bg-yellow-50 border-yellow-200' : 'opacity-50'}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">⭐</div>
                  <h3 className="font-semibold text-gray-900 mb-2">High Achiever</h3>
                  <p className="text-sm text-gray-600">Average score above 80%</p>
                  {stats.averageScore >= 80 && <Badge className="mt-2 bg-yellow-100 text-yellow-800">Unlocked!</Badge>}
                </CardContent>
              </Card>

              <Card className={`border-0 shadow-lg glass-effect ${stats.completedCourses >= 5 ? 'bg-red-50 border-red-200' : 'opacity-50'}`}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Course Champion</h3>
                  <p className="text-sm text-gray-600">Completed 5+ courses</p>
                  {stats.completedCourses >= 5 && <Badge className="mt-2 bg-red-100 text-red-800">Unlocked!</Badge>}
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  Achievement Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Courses Completed</span>
                      <span className="text-sm">{stats.completedCourses}/10</span>
                    </div>
                    <ProgressBar value={Math.min((stats.completedCourses / 10) * 100, 100)} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Study Hours</span>
                      <span className="text-sm">{stats.totalStudyTime}/100h</span>
                    </div>
                    <ProgressBar value={Math.min((stats.totalStudyTime / 100) * 100, 100)} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Assessments Taken</span>
                      <span className="text-sm">{stats.assessmentsTaken}/20</span>
                    </div>
                    <ProgressBar value={Math.min((stats.assessmentsTaken / 20) * 100, 100)} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}