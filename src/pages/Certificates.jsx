import React, { useState } from "react";
import { Certificate } from "@/api/entities";
import { useUserProfile } from "@/hooks/useUserProfile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Award, Download, Calendar, Shield, Trophy, Star, Medal } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import CertificateGenerator from "../components/certificates/CertificateGenerator";

export default function Certificates() {
  const { user, isLoading: isLoadingUser } = useUserProfile();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const { data: certificates = [], isLoading: isLoadingCerts, refetch } = useQuery({
    queryKey: ['certificates', user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      try {
        return await Certificate.filter({ user_email: user.email }, '-created_date');
      } catch (error) {
        console.error("Error loading certificates:", error);
        return [];
      }
    },
    enabled: !!user?.email,
  });

  const isLoading = isLoadingUser || isLoadingCerts;

  const handleCertificateGenerated = (newCertificate) => {
    refetch();
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

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Award className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Connexion requise</h3>
          <p className="text-gray-600">Connectez-vous pour voir vos certificats.</p>
        </div>
      </div>
    );
  }

  if (selectedCertificate) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
        <div className="max-w-6xl mx-auto space-y-8">
            <Button onClick={() => setSelectedCertificate(null)} variant="outline">
                ← Retour aux certificats
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
          <h1 className="text-4xl font-bold text-gradient">Certificats & Réussites</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez et téléchargez vos certificats FrancePrepAcademy
          </p>
        </div>

        <Tabs defaultValue="my-certificates" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="my-certificates">Mes certificats</TabsTrigger>
            <TabsTrigger value="generate">Générer un nouveau</TabsTrigger>
          </TabsList>

          <TabsContent value="my-certificates" className="space-y-6">
            {certificates.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((certificate) => (
                  <Card key={certificate.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          {getCertificateIcon(certificate.certificate_type)}
                          <div>
                            <h3 className="font-semibold text-gray-900">{certificate.title}</h3>
                            <Badge className={getCertificateColor(certificate.certificate_type)}>
                              {certificate.certificate_type?.replace(/_/g, ' ') || 'certificat'}
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
                          Délivré le : {new Date(certificate.issue_date).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="flex items-center gap-2">
                          <Shield className="w-3 h-3" />
                          Code : {certificate.verification_code}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2 border-t">
                        <Button
                            size="sm"
                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                            onClick={() => setSelectedCertificate(certificate)}
                        >
                          <Download className="w-3 h-3 mr-2" />
                          Voir & Télécharger
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Award className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun certificat pour le moment</h3>
                <p className="text-gray-600 mb-4">Votre premier certificat d'inscription est généré automatiquement !</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="generate" className="space-y-6">
            <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Medal className="w-5 h-5 text-purple-600" />
                    Certificat de réussite
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
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>À propos de vos certificats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Vérifiés</h4>
                    <p className="text-sm text-gray-600">Tous les certificats sont vérifiés numériquement</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Download className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">PDF téléchargeable</h4>
                    <p className="text-sm text-gray-600">Téléchargez en PDF haute qualité</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Partageable</h4>
                    <p className="text-sm text-gray-600">Partagez sur LinkedIn et portfolios</p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Accès gratuit à vie</h4>
                  <p className="text-yellow-700 text-sm">
                    Tous les certificats sur FrancePrepAcademy sont entièrement GRATUITS à vie ! Aucun frais caché, aucun abonnement requis.
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
