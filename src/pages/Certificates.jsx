import React, { useState, useEffect } from "react";
import { Certificate } from "@/api/entities";
import { User } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Award, Download, Calendar, Shield, Trophy, Star, Medal } from "lucide-react";
import CertificateGenerator from "../components/certificates/CertificateGenerator";

export default function Certificates() {
  const [user, setUser] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const userData = await User.me();
      setUser(userData);

      if (userData?.email) {
        const userCertificates = await Certificate.filter({ user_email: userData.email }, '-created_date');
        setCertificates(userCertificates);
      }
    } catch (error) {
      console.log("Error loading data");
    }
    setIsLoading(false);
  };

  const handleCertificateGenerated = (newCertificate) => {
    setCertificates(prev => [newCertificate, ...prev]);
  };

  const getCertificateIcon = (type) => {
    switch (type) {
      case "registration":
        return <Star className="w-6 h-6 text-blue-600" />;
      case "course_completion":
        return <Trophy className="w-6 h-6 text-green-600" />;
      case "achievement":
        return <Medal className="w-6 h-6 text-purple-600" />;
      default:
        return <Award className="w-6 h-6 text-gray-600" />;
    }
  };

  const getCertificateColor = (type) => {
    switch (type) {
      case "registration":
        return "bg-blue-100 text-blue-800";
      case "course_completion":
        return "bg-green-100 text-green-800";
      case "achievement":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (selectedCertificate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-6xl mx-auto space-y-8">
            <Button onClick={() => setSelectedCertificate(null)} variant="outline">
                ← Back to Certificates
            </Button>
            <CertificateGenerator
                existingCertificate={selectedCertificate}
                showPreview={true}
            />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">🏆 Certificates & Achievements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase your learning journey with verified certificates from EduPro AI
          </p>
        </div>

        <Tabs defaultValue="my-certificates" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="my-certificates">My Certificates</TabsTrigger>
            <TabsTrigger value="generate">Generate New</TabsTrigger>
          </TabsList>

          <TabsContent value="my-certificates" className="space-y-6">
            {certificates.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((certificate) => (
                  <Card key={certificate.id} className="border-0 shadow-lg hover-lift glass-effect">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          {getCertificateIcon(certificate.certificate_type)}
                          <div>
                            <h3 className="font-semibold text-gray-900">{certificate.title}</h3>
                            <Badge className={getCertificateColor(certificate.certificate_type)}>
                              {certificate.certificate_type.replace(/_/g, ' ')}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 line-clamp-3">
                        {certificate.description}
                      </p>

                      <div className="space-y-2 text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          Issued: {new Date(certificate.issue_date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-3 h-3" />
                          Code: {certificate.verification_code}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2 border-t">
                        <Button 
                            size="sm" 
                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                            onClick={() => setSelectedCertificate(certificate)}
                        >
                          <Download className="w-3 h-3 mr-2" />
                          View & Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Award className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No certificates yet</h3>
                <p className="text-gray-600 mb-4">Your first certificate of registration is generated automatically!</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="generate" className="space-y-6">
            <Card className="border-0 shadow-lg glass-effect">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Medal className="w-5 h-5 text-purple-600" />
                    Achievement Certificate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CertificateGenerator
                    certificateType="achievement"
                    onGenerated={handleCertificateGenerated}
                    showPreview={false}
                  />
                </CardContent>
              </Card>

            {/* Information Card */}
            <Card className="border-0 shadow-lg glass-effect">
              <CardHeader>
                <CardTitle>About Your Certificates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Verified</h4>
                    <p className="text-sm text-gray-600">All certificates are digitally verified</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Download className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Downloadable PDF</h4>
                    <p className="text-sm text-gray-600">Download as high-quality PDF</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Showcase Ready</h4>
                    <p className="text-sm text-gray-600">Share on LinkedIn and portfolios</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">🎉 Lifetime Free Access</h4>
                  <p className="text-yellow-700 text-sm">
                    All certificates on EduPro AI are completely FREE for life! No hidden charges, no subscriptions required.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}