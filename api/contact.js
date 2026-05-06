/**
 * POST /api/contact
 * Recibe { name, email, message } y los envía al email de destino
 * usando nodemailer + Gmail con contraseña de aplicación.
 *
 * Variables de entorno necesarias en Vercel:
 *   EMAIL_TO       → tu correo destino (p.ej. julenhidalgo2005@gmail.com)
 *   EMAIL_FROM     → cuenta Gmail que envía (p.ej. noreply.tuportfolio@gmail.com)
 *   EMAIL_PASS     → contraseña de aplicación de Gmail (16 caracteres)
 */
import nodemailer from 'nodemailer';

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? 'https://portafolio-julen-hidalgo.vercel.app';

export default async function handler(req, res) {
  // CORS estricto
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, message } = req.body ?? {};

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Faltan campos obligatorios.' });
  }

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return res.status(400).json({ error: 'Datos inválidos.' });
  }

  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email del remitente no válido.' });
  }

  // Limitar longitudes
  if (name.length > 100 || email.length > 200 || message.length > 2000) {
    return res.status(400).json({ error: 'Campos demasiado largos.' });
  }

  const { EMAIL_TO, EMAIL_FROM, EMAIL_PASS } = process.env;

  if (!EMAIL_TO || !EMAIL_FROM || !EMAIL_PASS) {
    console.error('Faltan variables de entorno de email');
    return res.status(500).json({ error: 'Error de configuración del servidor.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: EMAIL_FROM, pass: EMAIL_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_FROM}>`,
      to: EMAIL_TO,
      replyTo: email,
      subject: `[Portfolio] Mensaje de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px">
          <h2 style="color:#f0a030">Nuevo mensaje desde tu portfolio</h2>
          <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <hr style="border:1px solid #eee"/>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Error enviando email:', err);
    return res.status(500).json({ error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.' });
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}