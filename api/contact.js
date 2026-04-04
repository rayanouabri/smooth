// Vercel serverless function — sends email notifications via Resend
// Called by SendEmail() in src/api/integrations.js

// Simple in-memory rate limiting (resets on cold start)
const RATE_LIMITS = {};
const RATE_WINDOW = 3600000; // 1 hour
const RATE_MAX = 10; // 10 emails per IP per hour

function checkRateLimit(ip) {
  const now = Date.now();
  if (!RATE_LIMITS[ip] || now > RATE_LIMITS[ip].reset) {
    RATE_LIMITS[ip] = { count: 1, reset: now + RATE_WINDOW };
    return true;
  }
  RATE_LIMITS[ip].count++;
  return RATE_LIMITS[ip].count <= RATE_MAX;
}

// HTML entity encoding to prevent XSS in emails
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const ALLOWED_TYPES = ['contact', 'private_course', 'expert_service', 'conciergerie', 'teacher_application'];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
  if (!checkRateLimit(ip)) {
    return res.status(429).json({ error: 'Trop de requêtes. Réessayez dans une heure.' });
  }

  // Domain franceprepacademy.fr is verified in Resend (eu-west-1)
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY env var not set');
    return res.status(200).json({ success: true, message: 'Demande enregistrée (email non configuré)' });
  }
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'contact@franceprepacademy.fr';
  const FROM_EMAIL = process.env.FROM_EMAIL || 'FrancePrepAcademy <contact@franceprepacademy.fr>';

  try {
    const { requestType, formData, subject, html, text } = req.body || {};

    // Input validation
    if (!requestType || !ALLOWED_TYPES.includes(requestType)) {
      return res.status(400).json({ error: 'Type de requête invalide' });
    }
    if (!formData || typeof formData !== 'object') {
      return res.status(400).json({ error: 'Données du formulaire manquantes' });
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return res.status(400).json({ error: 'Adresse email invalide' });
    }

    const typeLabels = {
      contact: 'Nouveau message de contact',
      private_course: 'Nouvelle demande de cours particulier',
      expert_service: 'Nouvelle demande de service expert',
      conciergerie: 'Nouvelle demande Conciergerie VIP',
      teacher_application: 'Nouvelle candidature professeur',
    };
    const emailSubject = subject || typeLabels[requestType] || 'Nouvelle demande FrancePrepAcademy';

    const emailHtml = html || buildEmailHTML({ requestType, formData });
    const emailText = text || buildEmailText({ requestType, formData });

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [ADMIN_EMAIL],
        reply_to: formData?.email || undefined,
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: `HTTP ${response.status}` }));
      console.error('[contact] Resend error:', response.status);
      return res.status(200).json({ success: true, message: 'Demande enregistrée (email non envoyé)', warning: errorData });
    }

    const data = await response.json();
    return res.status(200).json({ success: true, emailId: data.id });

  } catch (error) {
    console.error('[contact] Error:', error.message);
    return res.status(200).json({ success: true, message: 'Demande enregistrée (email non envoyé)' });
  }
}

function buildEmailHTML({ requestType, formData }) {
  const typeLabels = {
    contact: 'Contact',
    private_course: 'Cours Particulier',
    expert_service: 'Service Expert',
    conciergerie: 'Conciergerie VIP',
    teacher_application: 'Candidature Professeur',
  };
  const label = escapeHtml(typeLabels[requestType] || 'Demande');

  const rows = Object.entries(formData || {})
    .filter(([k]) => !['email_subject', 'email_html', 'email_text'].includes(k))
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:bold;color:#374151;white-space:nowrap">${escapeHtml(k)}</td><td style="padding:6px 12px;color:#6b7280">${escapeHtml(v)}</td></tr>`)
    .join('');

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;background:#f3f4f6;padding:24px">
  <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
    <div style="background:linear-gradient(135deg,#6d28d9,#4f46e5);color:#fff;padding:24px">
      <h1 style="margin:0;font-size:22px">FrancePrepAcademy</h1>
      <p style="margin:6px 0 0;opacity:.85">${label} — Nouvelle demande</p>
    </div>
    <div style="padding:24px">
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
        <thead>
          <tr style="background:#f9fafb">
            <th style="padding:8px 12px;text-align:left;color:#6b7280;font-size:12px;text-transform:uppercase">Champ</th>
            <th style="padding:8px 12px;text-align:left;color:#6b7280;font-size:12px;text-transform:uppercase">Valeur</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <div style="margin-top:20px;padding:16px;background:#fef3c7;border-radius:8px;border-left:4px solid #f59e0b">
        <p style="margin:0;color:#92400e"><strong>Action requise :</strong> Contactez le client dans les 24 heures.</p>
      </div>
    </div>
    <div style="padding:16px 24px;border-top:1px solid #e5e7eb;text-align:center;color:#9ca3af;font-size:12px">
      FrancePrepAcademy &bull; <a href="https://franceprepacademy.fr" style="color:#6d28d9">franceprepacademy.fr</a>
    </div>
  </div>
</body>
</html>`;
}

function buildEmailText({ requestType, formData }) {
  const rows = Object.entries(formData || {})
    .filter(([k]) => !['email_subject', 'email_html', 'email_text'].includes(k))
    .map(([k, v]) => `${k}: ${v ?? ''}`)
    .join('\n');
  return `Nouvelle demande FrancePrepAcademy\nType: ${requestType}\n\n${rows}\n\nAction requise: Contactez le client dans les 24 heures.`;
}
