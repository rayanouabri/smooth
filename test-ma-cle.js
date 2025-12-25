const key = 'AIzaSyAFd0cdgHdSHxeSz7XjX3aEhO4SDJEnZiw';
console.log('🔍 Test de votre clé API Gemini...\n');

const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;

fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: 'Dis bonjour en français (5 mots max)' }] }],
    generationConfig: { temperature: 0.7, maxOutputTokens: 50 }
  })
})
.then(r => r.json())
.then(d => {
  if (d.error) {
    console.log('❌ ERREUR:', d.error.message);
    console.log('📝 Code:', d.error.code);
    console.log('\n⚠️  La clé ne fonctionne pas!');
  } else {
    console.log('✅ CLÉ VALIDE! Réponse de Gemini:');
    console.log('━'.repeat(60));
    console.log(d.candidates[0].content.parts[0].text);
    console.log('━'.repeat(60));
    console.log('\n🎉 Votre IA fonctionne! Mettez cette clé dans .env.local');
  }
})
.catch(e => console.log('❌ Erreur réseau:', e.message));
