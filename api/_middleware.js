// Middleware pour parser automatiquement le JSON
export default function middleware(handler) {
  return async (req, res) => {
    if (req.method === 'POST' && req.headers['content-type']?.includes('application/json')) {
      if (!req.body) {
        let body = '';
        await new Promise((resolve, reject) => {
          req.on('data', chunk => body += chunk);
          req.on('end', resolve);
          req.on('error', reject);
        });
        try {
          req.body = JSON.parse(body);
        } catch (e) {
          console.error('[Middleware] JSON parse error:', e);
          req.body = {};
        }
      }
    }
    return handler(req, res);
  };
}
