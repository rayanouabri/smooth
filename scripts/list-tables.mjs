const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFueHlqc2dyaXR0ZHdyaXpxY2dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMjkzOTksImV4cCI6MjA4MTkwNTM5OX0.pJrRWaaSpEVPKcHZUpayvKS-y6MlvzVUSiAHBHPh1AE';
const base = 'https://anxyjsgrittdwrizqcgi.supabase.co';

fetch(base+'/rest/v1/', {headers:{'apikey':key,'Authorization':'Bearer '+key}})
  .then(r => r.json())
  .then(j => {
    const paths = Object.keys(j.paths || {}).filter(p => p !== '/');
    console.log('Tables disponibles:', paths.join(', '));

    // Show definitions
    const defs = Object.keys(j.definitions || {});
    console.log('Definitions:', defs.join(', '));
  })
  .catch(console.error);
