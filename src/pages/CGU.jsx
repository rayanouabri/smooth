import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChatBot from "../components/ChatBot";

export default function CGU() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Conditions Générales d'Utilisation</h1>
          <p className="text-blue-100">Dernière mise à jour : 23 décembre 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Objet</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de la plateforme 
              FrancePrepAcademy, accessible à l'adresse [URL du site]. En accédant et en utilisant notre plateforme, 
              vous acceptez sans réserve les présentes CGU.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Inscription et compte utilisateur</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              <strong>2.1 Création de compte :</strong> Pour accéder à certaines fonctionnalités de la plateforme, 
              vous devez créer un compte en fournissant des informations exactes et à jour.
            </p>
            <p>
              <strong>2.2 Confidentialité :</strong> Vous êtes responsable de la confidentialité de vos identifiants 
              de connexion et de toutes les activités effectuées sur votre compte.
            </p>
            <p>
              <strong>2.3 Âge minimum :</strong> Vous devez avoir au moins 16 ans pour créer un compte sur FrancePrepAcademy.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Services proposés</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              FrancePrepAcademy propose :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Des cours en ligne sur l'intégration en France</li>
              <li>Des ressources pédagogiques (vidéos, documents, quiz)</li>
              <li>Un assistant IA pour répondre à vos questions</li>
              <li>Un forum communautaire</li>
              <li>Des certificats de complétion</li>
              <li>Des services premium payants</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. Propriété intellectuelle</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Tous les contenus présents sur FrancePrepAcademy (textes, images, vidéos, logos, graphismes, etc.) 
              sont protégés par le droit d'auteur et appartiennent à FrancePrepAcademy ou à ses partenaires.
            </p>
            <p>
              Toute reproduction, distribution, modification ou utilisation non autorisée de ces contenus est strictement interdite.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>5. Utilisation de la plateforme</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Vous vous engagez à utiliser la plateforme de manière responsable et à ne pas :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Publier des contenus illégaux, diffamatoires, offensants ou inappropriés</li>
              <li>Usurper l'identité d'une autre personne</li>
              <li>Tenter de contourner les mesures de sécurité</li>
              <li>Utiliser des robots ou scripts automatisés</li>
              <li>Perturber le fonctionnement de la plateforme</li>
              <li>Partager votre compte avec d'autres utilisateurs</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>6. Abonnements et paiements</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              <strong>6.1 Abonnement gratuit :</strong> L'accès aux cours gratuits est sans engagement et peut être 
              résilié à tout moment.
            </p>
            <p>
              <strong>6.2 Abonnement Premium :</strong> L'abonnement Premium donne accès à l'ensemble des contenus 
              de la plateforme. Le paiement s'effectue mensuellement ou annuellement selon l'option choisie.
            </p>
            <p>
              <strong>6.3 Renouvellement :</strong> L'abonnement se renouvelle automatiquement sauf résiliation 
              avant la date de renouvellement.
            </p>
            <p>
              <strong>6.4 Remboursement :</strong> Conformément à notre politique de satisfaction, vous disposez 
              pour demander un remboursement complet.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>7. Protection des données personnelles</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Vos données personnelles sont traitées conformément à notre Politique de Confidentialité et au 
              Règlement Général sur la Protection des Données (RGPD).
            </p>
            <p>
              Vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>8. Responsabilité</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              <strong>8.1 Contenu :</strong> FrancePrepAcademy s'efforce de fournir des informations exactes et à jour, 
              mais ne peut garantir l'exactitude, l'exhaustivité ou la pertinence de tous les contenus.
            </p>
            <p>
              <strong>8.2 Disponibilité :</strong> Nous nous efforçons d'assurer une disponibilité continue de la plateforme, 
              mais ne pouvons garantir l'absence d'interruptions.
            </p>
            <p>
              <strong>8.3 Limitation :</strong> FrancePrepAcademy ne peut être tenu responsable des dommages directs ou 
              indirects résultant de l'utilisation ou de l'impossibilité d'utiliser la plateforme.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>9. Résiliation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              FrancePrepAcademy se réserve le droit de suspendre ou de résilier votre compte en cas de violation 
              des présentes CGU, sans préavis ni remboursement.
            </p>
            <p>
              Vous pouvez résilier votre compte à tout moment depuis les paramètres de votre profil.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>10. Modifications des CGU</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              FrancePrepAcademy se réserve le droit de modifier les présentes CGU à tout moment. 
              Les modifications entrent en vigueur dès leur publication sur la plateforme.
            </p>
            <p>
              L'utilisation continue de la plateforme après modification vaut acceptation des nouvelles CGU.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>11. Droit applicable et juridiction</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Les présentes CGU sont régies par le droit français. En cas de litige, les tribunaux français 
              seront seuls compétents.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>12. Contact</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Pour toute question concernant les présentes CGU, vous pouvez nous contacter à :
            </p>
            <p>
              <strong>Email :</strong> legal@franceprepacademy.com<br />
              <strong>Adresse :</strong> FrancePrepAcademy, [Adresse complète]
            </p>
          </CardContent>
        </Card>
      </div>

      <ChatBot />
    </div>
  );
}