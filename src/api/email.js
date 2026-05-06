/**
 * GET /api/email
 * Devuelve el email de contacto desde variable de entorno.
 * El email nunca aparece en el código fuente del cliente.
 */
export default function handler(req, res) {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const email = process.env.EMAIL_TO;
  
    if (!email) {
      return res.status(500).json({ error: 'Email not configured' });
    }
  
    // Cabecera anti-caché para que no quede en proxies
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ email });
  }