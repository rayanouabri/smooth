// Edge Function pour envoyer des notifications email via Resend
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
// Avec le domaine de test, on ne peut envoyer qu'à l'adresse email du compte Resend
// Changez ADMIN_EMAIL dans les secrets pour utiliser votre adresse email Resend
const ADMIN_EMAIL = Deno.env.get("ADMIN_EMAIL") || "rayan.ouabri1@gmail.com";
// Utiliser le domaine de test de Resend (toujours fonctionnel, même sans domaine vérifié)
// Si vous avez configuré FROM_EMAIL dans les secrets avec un domaine non vérifié, 
// supprimez cette variable pour utiliser le domaine de test par défaut
let FROM_EMAIL = Deno.env.get("FROM_EMAIL");
// Si FROM_EMAIL contient franceprepacademy.fr et que le domaine n'est pas vérifié, utiliser le domaine de test
if (!FROM_EMAIL || FROM_EMAIL.includes("franceprepacademy.fr")) {
  FROM_EMAIL = "onboarding@resend.dev";
}

interface ContactRequest {
  id: string;
  request_type: string;
  name: string;
  email: string;
  phone?: string;
  form_data: any;
  status: string;
  created_at: string;
}

serve(async (req) => {
  try {
    // Vérifier la méthode
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        { status: 405, headers: { "Content-Type": "application/json" } }
      );
    }

    // La clé API Resend n'est plus nécessaire pour l'instant
    // On enregistre juste les notifications dans la base de données

    // Récupérer les données de la requête
    const { contactRequest } = await req.json();

    if (!contactRequest) {
      return new Response(
        JSON.stringify({ error: "Missing contactRequest data" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const request: ContactRequest = contactRequest;

    // Construire le sujet de l'email
    let subject = "";
    let emailType = "";

    switch (request.request_type) {
      case "private_course":
        subject = `🎓 Nouvelle demande de cours particulier - ${request.form_data?.subject || "Sans matière"}`;
        emailType = "Cours Particulier";
        break;
      case "expert_service":
        subject = `⚡ Nouvelle demande de service expert - ${request.form_data?.serviceType || "Service"}`;
        emailType = "Service Expert";
        break;
      default:
        subject = `📧 Nouvelle demande de contact`;
        emailType = "Contact Général";
    }

    // Enregistrer directement la notification dans la base de données
    // L'envoi d'email via Resend est optionnel (peut être activé plus tard si nécessaire)

    // Enregistrer la notification dans la base de données
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    await supabaseClient
      .from("contact_notifications")
      .insert({
        contact_request_id: request.id,
        notification_type: "email_sent",
        sent_at: new Date().toISOString(),
      })
      .select()
      .single();

    return new Response(
      JSON.stringify({
        success: true,
        message: "Notification enregistrée avec succès",
        contactRequestId: request.id,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Erreur dans send-email-notification:", error);
    return new Response(
      JSON.stringify({
        error: error.message || "Erreur lors de l'envoi de l'email",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
});

function buildEmailHTML(request: ContactRequest, emailType: string): string {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("fr-FR", {
      dateStyle: "long",
      timeStyle: "short",
    });
  };

  let detailsHTML = "";

  if (request.request_type === "private_course") {
    detailsHTML = `
      <h3 style="color: #06b6d4; margin-top: 20px;">📚 Détails du cours</h3>
      <ul style="list-style: none; padding: 0;">
        <li><strong>Matière:</strong> ${request.form_data?.subject || "Non renseigné"}</li>
        <li><strong>Niveau:</strong> ${request.form_data?.level || "Non renseigné"}</li>
        <li><strong>Fréquence:</strong> ${request.form_data?.frequency || "Non renseigné"}</li>
        <li><strong>Durée:</strong> ${request.form_data?.duration || "Non renseigné"}</li>
        <li><strong>Budget:</strong> ${request.form_data?.budget ? request.form_data.budget + "€" : "Non renseigné"}</li>
        <li><strong>Ville:</strong> ${request.form_data?.city || "Non renseigné"}</li>
        <li><strong>Disponibilités:</strong> ${request.form_data?.availability || "Non renseigné"}</li>
      </ul>
      ${request.form_data?.needs ? `<p><strong>Besoins spécifiques:</strong><br>${request.form_data.needs}</p>` : ""}
    `;
  } else if (request.request_type === "expert_service") {
    detailsHTML = `
      <h3 style="color: #7c3aed; margin-top: 20px;">⚡ Détails du service</h3>
      <ul style="list-style: none; padding: 0;">
        <li><strong>Type de service:</strong> ${request.form_data?.serviceType || "Non renseigné"}</li>
        <li><strong>Urgence:</strong> ${request.form_data?.urgency || "Non renseigné"}</li>
        <li><strong>Budget estimé:</strong> ${request.form_data?.budget ? request.form_data.budget + "€" : "Non renseigné"}</li>
      </ul>
      ${request.form_data?.description ? `<p><strong>Description:</strong><br>${request.form_data.description}</p>` : ""}
      ${request.form_data?.requirements ? `<p><strong>Exigences:</strong><br>${request.form_data.requirements}</p>` : ""}
    `;
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
        .info-box { background: white; padding: 15px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #667eea; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        ul { padding-left: 20px; }
        li { margin: 8px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0;">${emailType}</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Nouvelle demande reçue</p>
        </div>
        <div class="content">
          <div class="info-box">
            <h3 style="color: #1f2937; margin-top: 0;">👤 Informations du client</h3>
            <ul style="list-style: none; padding: 0;">
              <li><strong>Nom:</strong> ${request.name}</li>
              <li><strong>Email:</strong> <a href="mailto:${request.email}">${request.email}</a></li>
              ${request.phone ? `<li><strong>Téléphone:</strong> <a href="tel:${request.phone}">${request.phone}</a></li>` : ""}
              <li><strong>Date de la demande:</strong> ${formatDate(request.created_at)}</li>
            </ul>
          </div>
          ${detailsHTML}
          <div class="info-box" style="border-left-color: #10b981;">
            <p style="margin: 0;"><strong>ID de la demande:</strong> ${request.id}</p>
            <p style="margin: 5px 0 0 0;"><strong>Statut:</strong> ${request.status}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 5px;">
            <p style="margin: 0; color: #92400e;"><strong>💡 Action requise:</strong> Contactez le client dans les 24 heures.</p>
          </div>
        </div>
        <div class="footer">
          <p>Cet email a été envoyé automatiquement depuis FrancePrep Academy</p>
          <p>Vous pouvez répondre directement à cet email pour contacter le client.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function buildEmailText(request: ContactRequest, emailType: string): string {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("fr-FR", {
      dateStyle: "long",
      timeStyle: "short",
    });
  };

  let detailsText = "";

  if (request.request_type === "private_course") {
    detailsText = `
Détails du cours:
- Matière: ${request.form_data?.subject || "Non renseigné"}
- Niveau: ${request.form_data?.level || "Non renseigné"}
- Fréquence: ${request.form_data?.frequency || "Non renseigné"}
- Durée: ${request.form_data?.duration || "Non renseigné"}
- Budget: ${request.form_data?.budget ? request.form_data.budget + "€" : "Non renseigné"}
- Ville: ${request.form_data?.city || "Non renseigné"}
- Disponibilités: ${request.form_data?.availability || "Non renseigné"}
${request.form_data?.needs ? `- Besoins spécifiques: ${request.form_data.needs}` : ""}
    `;
  } else if (request.request_type === "expert_service") {
    detailsText = `
Détails du service:
- Type de service: ${request.form_data?.serviceType || "Non renseigné"}
- Urgence: ${request.form_data?.urgency || "Non renseigné"}
- Budget estimé: ${request.form_data?.budget ? request.form_data.budget + "€" : "Non renseigné"}
${request.form_data?.description ? `- Description: ${request.form_data.description}` : ""}
${request.form_data?.requirements ? `- Exigences: ${request.form_data.requirements}` : ""}
    `;
  }

  return `
${emailType} - Nouvelle demande reçue

Informations du client:
- Nom: ${request.name}
- Email: ${request.email}
${request.phone ? `- Téléphone: ${request.phone}` : ""}
- Date de la demande: ${formatDate(request.created_at)}

${detailsText}

ID de la demande: ${request.id}
Statut: ${request.status}

Action requise: Contactez le client dans les 24 heures.

---
Cet email a été envoyé automatiquement depuis FrancePrep Academy
Vous pouvez répondre directement à cet email pour contacter le client.
  `;
}
