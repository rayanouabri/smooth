import React, { useState, useRef, useEffect } from "react";
import { Certificate } from "@/api/entities";
import { User } from "@/api/entities";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Award, Calendar, Shield, Share2, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function CertificateGenerator({ 
  certificateType = "achievement", 
  existingCertificate = null,
  onGenerated = () => {},
  showPreview = false
}) {
  const [user, setUser] = useState(null);
  const [certificate, setCertificate] = useState(existingCertificate);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [title, setTitle] = useState(existingCertificate?.title || "Certificate of Excellence");
  const [description, setDescription] = useState(existingCertificate?.description || "This certifies exceptional performance in skill development.");
  const certificateRef = useRef(null);

  useEffect(() => {
    loadUser();
    if (existingCertificate) {
      setCertificate(existingCertificate);
    }
  }, [existingCertificate]);

  const loadUser = async () => {
    try {
      const userData = await User.me();
      setUser(userData);
    } catch (error) {
      console.log("User not authenticated");
    }
  };

  const generateCertificate = async () => {
    if (!user || !title.trim() || !description.trim()) return;
    
    setIsGenerating(true);
    try {
      const certificateId = `EPS-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const verificationCode = Math.random().toString(36).substr(2, 12).toUpperCase();
      
      const certificateData = {
        user_email: user.email,
        certificate_type: certificateType,
        title: title,
        description: description,
        issue_date: new Date().toISOString(),
        certificate_id: certificateId,
        verification_code: verificationCode
      };

      const createdCertificate = await Certificate.create(certificateData);
      setCertificate(createdCertificate);
      onGenerated(createdCertificate);
    } catch (error) {
      console.error("Error generating certificate:", error);
    }
    setIsGenerating(false);
  };

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;
    setIsDownloading(true);

    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3, // Higher scale for better quality
        useCORS: true,
        backgroundColor: null
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${certificate.certificate_id}.pdf`);
    } catch (error) {
      console.error("Error downloading certificate:", error);
    }
    setIsDownloading(false);
  };

  const CertificatePreview = ({ certData, userData }) => {
    if (!certData || !userData) return null;

    const currentDate = new Date(certData.issue_date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return (
      <div 
        ref={certificateRef}
        className="w-full bg-white relative font-serif"
        style={{ aspectRatio: '297/210', border: '10px solid #1e3a8a' }}
      >
        <div className="absolute inset-0 bg-blue-50/50 opacity-20" style={{backgroundImage: 'url(/logo_bg.svg)', backgroundSize: 'cover'}}></div>
        <div className="p-8 h-full flex flex-col justify-between relative">
            <div className="text-center">
                <div className="flex justify-center items-center gap-4 mb-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center text-white">
                        <GraduationCap size={32} />
                    </div>
                    <div className="text-left">
                        <p className="text-4xl font-bold text-blue-900 tracking-wider">EduPro AI</p>
                        <p className="text-sm text-gray-600 -mt-1">Professional Education Platform</p>
                    </div>
                </div>
                <h1 className="text-5xl font-bold text-amber-600" style={{fontFamily: "'Playfair Display', serif"}}>
                    Certificate of {certData.certificate_type === 'registration' ? 'Registration' : 'Achievement'}
                </h1>
                <p className="mt-4 text-gray-600 text-lg">This certificate is proudly presented to</p>
            </div>

            <div className="text-center">
                <p className="text-6xl text-blue-800 font-extrabold" style={{fontFamily: "'Great Vibes', cursive"}}>
                    {userData.full_name}
                </p>
                <div className="w-1/2 h-px bg-gray-300 mx-auto my-4"></div>
                <p className="text-md text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    {certData.description}
                </p>
            </div>
            
            <div className="flex justify-between items-end">
                <div className="text-center">
                    <p className="text-lg font-semibold italic" style={{fontFamily: "'Great Vibes', cursive"}}>M.MD Faizal</p>
                    <div className="w-full h-px bg-gray-400 my-1"></div>
                    <p className="text-xs text-gray-600">Founder & Developer, EduPro AI</p>
                </div>
                <div className="text-center">
                    <Badge className="bg-green-100 text-green-800 border-green-300">✓ Verified Member</Badge>
                </div>
                <div className="text-center">
                    <p className="text-md font-semibold">{currentDate}</p>
                    <div className="w-full h-px bg-gray-400 my-1"></div>
                    <p className="text-xs text-gray-600">Date of Issue</p>
                </div>
            </div>
            <p className="text-center text-xs text-gray-500 absolute bottom-2 left-0 right-0">
                Certificate ID: {certData.certificate_id} • Verification Code: {certData.verification_code}
            </p>
        </div>
      </div>
    );
  };
  
  if (!user) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading user information...</p>
      </div>
    );
  }

  // If a certificate exists (either passed in or generated)
  if (certificate) {
      return (
        <div className="space-y-6">
            <div className="bg-gray-100 p-4 sm:p-8 rounded-lg">
                <CertificatePreview certData={certificate} userData={user} />
            </div>
          
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                    onClick={downloadCertificate}
                    disabled={isDownloading}
                    className="bg-green-600 hover:bg-green-700"
                >
                    {isDownloading ? (
                        <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Processing...
                        </>
                    ) : (
                        <>
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                        </>
                    )}
                </Button>
            
                <Button
                    variant="outline"
                    onClick={() => {
                        navigator.clipboard.writeText(`Check out my certificate from EduPro AI! Verification Code: ${certificate.verification_code}`);
                    }}
                >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                </Button>
            </div>
        </div>
      );
  }

  // Form to generate a new certificate
  return (
    <div className="space-y-6">
        <div className="space-y-4">
            <div>
                <label className="text-sm font-medium">Certificate Title</label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g., Certificate of Excellence" />
            </div>
            <div>
                <label className="text-sm font-medium">Certificate Description</label>
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="e.g., For successfully completing the advanced data science course." />
            </div>
        </div>
        
        <Button
            onClick={generateCertificate}
            disabled={isGenerating || !title.trim() || !description.trim()}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
            {isGenerating ? (
                <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Generating...
                </>
            ) : (
                <>
                    <Award className="w-4 h-4 mr-2" />
                    Generate & View Certificate
                </>
            )}
        </Button>
    </div>
  );
}