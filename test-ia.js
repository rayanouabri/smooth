// Test simple de l'API Gemini
const GEMINI_API_KEY = 'AIzaSyAaGBXX1LHCMeiFSkfmtCJO_p3LQCSYh9o';
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

const requestBody = {
  contents: [{
    parts: [{
      text: 'Dis bonjour en français de manière amicale et courte (maximum 20 mots)'
    }]
  }],
  generationConfig: {
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
    maxOutputTokens: 100,
  }
};

console.log('🤖 Test de l\'API Gemini...\n');

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(requestBody),
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log('✅ Réponse de Gemini:');
  console.log('-'.repeat(50));
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  console.log(text);
  console.log('-'.repeat(50));
  console.log('\n✅ L\'IA fonctionne correctement! 🎉');
})
.catch(error => {
  console.error('❌ Erreur:', error.message);
  if (error.message.includes('403')) {
    console.error('\n⚠️  Clé API invalide ou expirée.');
    console.error('📝 Obtenez une nouvelle clé sur: https://makersuite.google.com/app/apikey');
  }
});
