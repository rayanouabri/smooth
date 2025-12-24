import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChatBot from "../components/ChatBot";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Politique de Confidentialité</h1>
          <p className="text-blue-100">Dernière mise à jour : 23 décembre 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Introduction</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              FrancePrepAcademy accorde une grande importance à la protection de vos données personnelles. 
              Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et 
              protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Données collectées</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>Nous collectons les données suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Données d'identification :</strong> nom, prénom, email, date de naissance</li>
              <li><strong>Données de connexion :</strong> adresse IP, cookies, historique de navigation</li>
              <li><strong>Données d'utilisation :</strong> cours suivis, progression, résultats aux quiz</li>
              <li><strong>Données de paiement :</strong> traitées de manière sécurisée par Stripe (non stockées par nous)</li>
              <li><strong>Données de profil :</strong> pays d'origine, niveau de français, objectifs d'étude</li>
              <li><strong>Contenus générés :</strong> messages sur le forum, interactions avec l'IA</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Finalités du traitement</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Créer et gérer votre compte utilisateur</li>
              <li>Fournir l'accès aux cours et services</li>
              <li>Personnaliser votre expérience d'apprentissage</li>
              <li>Traiter vos paiements et gérer votre abonnement</li>
              <li>Vous envoyer des communications importantes (confirmation, rappels)</li>
              <li>Améliorer nos services et développer de nouvelles fonctionnalités</li>
              <li>Assurer la sécurité de la plateforme</li>
              <li>Respecter nos obligations légales</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. Base légale du traitement</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>Le traitement de vos données repose sur :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Exécution du contrat :</strong> fourniture des services demandés</li>
              <li><strong>Consentement :</strong> newsletters, cookies non essentiels</li>
              <li><strong>Intérêt légitime :</strong> amélioration des services, sécurité</li>
              <li><strong>Obligation légale :</strong> conservation des données de facturation</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>5. Partage des données</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>Vos données peuvent être partagées avec :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Stripe :</strong> traitement sécurisé des paiements</li>
              <li><strong>Services d'hébergement :</strong> stockage des données (serveurs sécurisés UE)</li>
              <li><strong>Outils d'analyse :</strong> statistiques anonymisées d'utilisation</li>
              <li><strong>Prestataires de services :</strong> uniquement pour les besoins de nos services</li>
            </ul>
            <p>
              Nous ne vendons jamais vos données à des tiers. Tous nos partenaires sont soumis à des obligations 
              contractuelles strictes de confidentialité et de sécurité.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>6. Durée de conservation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Données de compte actif :</strong> pendant toute la durée d'utilisation + 3 ans</li>
              <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
              <li><strong>Cookies :</strong> 13 mois maximum</li>
              <li><strong>Logs de connexion :</strong> 12 mois</li>
            </ul>
            <p>
              Passé ces délais, vos données sont supprimées ou anonymisées de manière irréversible.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>7. Vos droits</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> supprimer vos données (droit à l'oubli)</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> refuser certains traitements</li>
              <li><strong>Droit à la limitation :</strong> limiter l'utilisation de vos données</li>
              <li><strong>Retrait du consentement :</strong> à tout moment pour les traitements basés sur le consentement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous à : privacy@franceprepacademy.com<br />
              Nous répondrons dans un délai maximum d'un mois.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>8. Sécurité des données</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>Nous mettons en œuvre les mesures de sécurité suivantes :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chiffrement SSL/TLS pour toutes les communications</li>
              <li>Hachage sécurisé des mots de passe (bcrypt)</li>
              <li>Serveurs sécurisés situés dans l'Union Européenne</li>
              <li>Sauvegardes quotidiennes chiffrées</li>
              <li>Authentification à deux facteurs disponible</li>
              <li>Audits de sécurité réguliers</li>
              <li>Formation du personnel à la protection des données</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>9. Cookies</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>Nous utilisons les types de cookies suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (connexion, panier)</li>
              <li><strong>Cookies de performance :</strong> statistiques d'utilisation anonymisées</li>
              <li><strong>Cookies fonctionnels :</strong> mémorisation de vos préférences</li>
            </ul>
            <p>
              Vous pouvez gérer vos préférences de cookies depuis les paramètres de votre navigateur.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>10. Transferts internationaux</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Vos données sont stockées et traitées au sein de l'Union Européenne. Si un transfert hors UE 
              s'avérait nécessaire, nous nous assurerions qu'il respecte les garanties appropriées prévues 
              par le RGPD (clauses contractuelles types, Privacy Shield).
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>11. Modifications de la politique</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Nous pouvons modifier cette politique de confidentialité pour refléter les évolutions de nos 
              pratiques ou de la législation. Toute modification importante sera notifiée par email et/ou 
              par un avis visible sur la plateforme.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>12. Contact et réclamations</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              <strong>Délégué à la Protection des Données (DPO) :</strong><br />
              Email : dpo@franceprepacademy.com<br />
              Adresse : FrancePrepAcademy, [Adresse complète]
            </p>
            <p>
              <strong>Autorité de contrôle :</strong><br />
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation 
              auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :<br />
              Website : www.cnil.fr<br />
              Adresse : 3 Place de Fontenoy, 75007 Paris
            </p>
          </CardContent>
        </Card>
      </div>

      <ChatBot />
    </div>
  );
}