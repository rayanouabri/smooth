const handler = require('./api/gemini.js');

// Simuler une requête Vercel
const mockReq = {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: { prompt: 'Bonjour, qui es-tu?' }
};

const mockRes = {
  statusCode: 500,
  headers: {},
  setHeader: function(key, val) { this.headers[key] = val; },
  status: function(code) {
    this.statusCode = code;
    return this;
  },
  json: function(data) {
    console.log(`[Status: ${this.statusCode}]`);
    console.log('Response:', JSON.stringify(data, null, 2));
    return this;
  },
  end: function() {
    console.log('Response ended');
  }
};

console.log('[Test] Appel local du handler Gemini');
console.log('[Test] Clé disponible:', !!process.env.GEMINI_API_KEY);
handler(mockReq, mockRes).catch(err => console.error('[Test] Error:', err.message));
