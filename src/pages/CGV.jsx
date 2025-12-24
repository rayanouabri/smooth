import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChatBot from "../components/ChatBot";

export default function CGV() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Conditions Générales de Vente</h1>
          <p className="text-blue-100">Dernière mise à jour : 23 décembre 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Préambule</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre 
              FrancePrepAcademy et ses clients pour l'achat d'abonnements Premium et de services payants.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Offres et prix</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              <strong>2.1 Tarifs :</strong> Les prix des abonnements et services sont indiqués en euros TTC. 
              FrancePrepAcademy se réserve le droit de modifier ses tarifs à tout moment, sans rétroactivité 
              pour les abonnements en cours.
            </p>
            <p>
              <strong>2.2 Abonnement Premium :</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Abonnement mensuel : 29€/mois</li>
              <li>Abonnement annuel : 24€/mois (288€/an) - Économie de 17%</li>
            </ul>
            <p>
              <strong>2.3 Promotions :</strong> Les offres promotionnelles sont valables dans la limite des stocks 
              disponibles et selon les conditions spécifiques à chaque promotion.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Commande et paiement</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              <strong>3.1 Processus de commande :</strong> La commande est finalisée lorsque le client valide 
              son panier et effectue le paiement. Un email de confirmation est envoyé à l'adresse renseignée.
            </p>
            <p>
              <strong>3.2 Moyens de paiement :</strong> Les paiements sont sécurisés via Stripe et peuvent être 
              effectués par carte bancaire (Visa, Mastercard, American Express) ou virement bancaire.
            </p>
            <p>
              <strong>3.3 Facturation :</strong> Une facture est automatiquement générée et envoyée par email 
              après chaque paiement.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. Droit de rétractation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Conformément à la législation européenne, vous disposez d'un délai de 14 jours pour exercer 
              votre droit de rétractation sans avoir à justifier de motifs.
            </p>
            <p>
              <strong>Garantie satisfaction 30 jours :</strong> Au-delà du délai légal de rétractation, 
              FrancePrepAcademy offre une garantie "Satisfait ou remboursé" de 30 jours à compter de la 
              souscription à l'abonnement Premium.
            </p>
            <p>
              Pour exercer ce droit, contactez-nous à : refund@franceprepacademy.com
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>5. Livraison et accès aux services</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              <strong>5.1 Accès immédiat :</strong> Dès validation du paiement, l'accès aux contenus Premium 
              est activé instantanément sur votre compte.
            </p>
            <p>
              <strong>5.2 Durée d'accès :</strong> L'accès aux contenus est maintenu pendant toute la durée 
              de validité de l'abonnement.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>6. Renouvellement et résiliation</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              <strong>6.1 Renouvellement automatique :</strong> L'abonnement Premium se renouvelle automatiquement 
              à la fin de chaque période (mensuelle ou annuelle) sauf résiliation.
            </p>
            <p>
              <strong>6.2 Résiliation :</strong> Vous pouvez résilier votre abonnement à tout moment depuis 
              les paramètres de votre compte ou en contactant le support. La résiliation prendra effet à la 
              fin de la période en cours.
            </p>
            <p>
              <strong>6.3 Suspension de paiement :</strong> En cas d'échec de paiement lors du renouvellement, 
              FrancePrepAcademy se réserve le droit de suspendre l'accès aux services Premium.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>7. Garanties et responsabilités</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              <strong>7.1 Qualité des contenus :</strong> FrancePrepAcademy s'engage à fournir des contenus 
              de qualité, régulièrement mis à jour et vérifiés par des experts.
            </p>
            <p>
              <strong>7.2 Disponibilité :</strong> Nous garantissons une disponibilité de la plateforme à 99.5% 
              hors maintenance programmée.
            </p>
            <p>
              <strong>7.3 Support client :</strong> Un support client est disponible par email 7j/7 pour 
              répondre à vos questions (délai de réponse : 24-48h).
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>8. Protection des données</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Les données de paiement sont traitées de manière sécurisée par notre prestataire Stripe, 
              certifié PCI-DSS niveau 1. FrancePrepAcademy ne stocke aucune donnée bancaire.
            </p>
            <p>
              Pour plus d'informations, consultez notre Politique de Confidentialité.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>9. Propriété intellectuelle</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              L'achat d'un abonnement vous donne un droit d'usage personnel et non exclusif des contenus. 
              Il est strictement interdit de :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproduire ou diffuser les contenus</li>
              <li>Partager votre compte avec des tiers</li>
              <li>Télécharger les vidéos en dehors de la plateforme</li>
              <li>Utiliser les contenus à des fins commerciales</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>10. Litiges et réclamations</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Pour toute réclamation, contactez notre service client : support@franceprepacademy.com
            </p>
            <p>
              En cas de litige persistant, vous pouvez recourir à la médiation de la consommation en 
              contactant : [Médiateur de la consommation agréé]
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>11. Mentions légales</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              <strong>Raison sociale :</strong> FrancePrepAcademy<br />
              <strong>Forme juridique :</strong> [SAS / SARL / Auto-entrepreneur]<br />
              <strong>Capital social :</strong> [Montant]<br />
              <strong>Siège social :</strong> [Adresse complète]<br />
              <strong>SIRET :</strong> [Numéro SIRET]<br />
              <strong>TVA intracommunautaire :</strong> [Numéro TVA]<br />
              <strong>Email :</strong> contact@franceprepacademy.com<br />
              <strong>Hébergeur :</strong> [Nom et adresse de l'hébergeur]
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>12. Droit applicable</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-blue max-w-none">
            <p>
              Les présentes CGV sont soumises au droit français. Tout litige relatif à leur interprétation 
              ou leur exécution relève de la compétence exclusive des tribunaux français.
            </p>
          </CardContent>
        </Card>
      </div>

      <ChatBot />
    </div>
  );
}