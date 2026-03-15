const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H    = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

async function appendAndPatch(id, addition) {
  const r = await fetch(BASE+'/rest/v1/lessons?id=eq.'+id+'&select=content', { headers: H });
  const [row] = await r.json();
  const newContent = row.content + addition;
  const w = newContent.split(/\s+/).filter(Boolean).length;
  const p = await fetch(BASE+'/rest/v1/lessons?id=eq.'+id, {
    method: 'PATCH', headers: { ...H, 'Prefer': 'return=minimal' },
    body: JSON.stringify({ content: newContent })
  });
  console.log(p.ok ? '✅' : '❌ '+p.status, id.slice(0,8), w+' mots');
}

// L1: 3687 → need +313
await appendAndPatch('54543fac-19ea-4f70-aa33-3db6ab648f5f', `
## Développer l'œil expert de l'acheteur d'occasion

Avec l'expérience, les acheteurs réguliers d'occasion développent un « œil expert » — la capacité à évaluer rapidement la qualité et la valeur d'un article lors d'une première inspection. Cette compétence, qui prend des mois à développer, se forge en examinant de nombreux articles, en comparant les descriptions des vendeurs avec la réalité observée lors des rencontres, et en faisant parfois des erreurs instructives. Chaque achat — réussi ou décevant — enrichit la base de connaissance qui permet d'évaluer les articles suivants avec plus de précision.

Les signaux physiques de qualité varient selon les catégories. Pour l'électronique, la propreté des ports de connexion, l'absence de jeu dans les boutons physiques, et la réactivité de l'écran tactile sont des indicateurs rapides. Pour les vêtements, l'état des coutures, la solidité des fermetures éclairs et boutons, et l'absence de boulochage sur les zones de frottement révèlent la qualité réelle du tissu et de la confection. Pour les meubles, la solidité des assemblages et l'absence de gondolement ou d'humidité sont les premiers points de contrôle. Ces compétences d'évaluation rapide permettent de prendre de meilleures décisions d'achat et de mieux négocier les prix en fonction des défauts identifiés.
`);

// L2: 3747 → need +253
await appendAndPatch('87ee9dc9-5623-4cae-b27a-50eebf71c785', `
## L'élargissement de son réseau d'achat via les recommandations

Dans l'économie de l'occasion, les recommandations personnelles entre acheteurs sont une source de planification difficile à copier. Un acheteur satisfait qui recommande un vendeur fiable à un ami, ou qui signale une ressourcerie cachée dans son quartier à ses contacts, crée une valeur d'information qui profite à tout son réseau. Cultiver ce réseau d'information — en partageant activement ses bonnes découvertes et en étant attentif aux recommandations reçues en retour — est une stratégie gagnante à long terme dans l'économie de l'occasion.

Les systèmes de recommandation formelle existent sur certaines plateformes (Vinted propose un système de "suivi" des vendeurs préférés), mais les recommandations informelles entre amis et collègues restent souvent les plus fiables. Un vendeur recommandé personnellement par un proche de confiance bénéficie d'un niveau de confiance immédiate qu'aucune évaluation de plateforme ne peut tout à fait remplacer. Nourrir activement ces échanges d'informations dans son réseau est donc un investissement social à faible coût et à fort retour pratique.
`);

// L3: 3917 → need +83
await appendAndPatch('08df7fd6-e4ff-42a9-9944-dc3aa944f4ee', `

La maîtrise de ces aspects juridiques et pratiques de la négociation et de la finalisation des achats d'occasion constitue une protection durable pour tout acheteur régulier sur les marchés français. Ces connaissances s'accumulent et se perfectionnent avec chaque transaction, construisant une expertise personnelle qui rend chaque achat suivant plus sûr et plus efficace.
`);

// L4: 3835 → need +165
await appendAndPatch('f7eecf9c-2dac-4100-8215-dfb0483766d7', `
## L'automatisation et l'efficacité dans la gestion des ventes multiples

Pour les vendeurs qui maintiennent plusieurs dizaines d'annonces actives simultanément, des outils d'automatisation peuvent améliorer l'efficacité de gestion. Certaines applications tierces permettent de synchroniser des annonces entre plusieurs plateformes depuis une interface unique, d'automatiser les réponses aux questions standard (« Est-ce disponible ? » / « Quelle est la taille exacte ? »), et de suivre les indicateurs de performance des annonces. Ces outils sont plus utiles pour les vendeurs réguliers qui traitent de nombreuses transactions que pour les vendeurs occasionnels.

L'automatisation partielle de la réponse aux questions standard peut s'accomplir simplement avec des fragments de texte pré-rédigés — une bibliothèque de réponses standard stockées dans l'application de notes du téléphone que l'on copie-colle selon la question reçue. Cette micro-efficacité, qui prend quelques minutes à mettre en place, peut économiser beaucoup de temps sur le long terme pour les vendeurs actifs.
`);

// L5: 3752 → need +248
await appendAndPatch('779e325f-9b54-4647-a25d-3e5e3f1f9303', `
## La planification des achats en fonction des contraintes logistiques

Une stratégie d'achat d'occasion efficace intègre d'emblée les contraintes logistiques de transport dans les critères de sélection des articles. Pour quelqu'un sans voiture, limiter sa recherche d'articles volumineux à un rayon de quelques kilomètres autour de son domicile, avec accès aux transports en commun, simplifie considérablement la logistique de récupération. Préciser dans les messages aux vendeurs « Je suis disponible pour récupérer ce week-end en transport en commun — êtes-vous accessible en métro/bus ? » filtre les vendeurs accessibles de ceux qui ne le sont pas, évitant des échanges sans suite.

Pour les articles qui nécessitent absolument un véhicule, planifier la récupération en coordination avec des ami(e)s ou des services de location permet de regrouper plusieurs récupérations le même jour et de partager les coûts logistiques. L'organisation préalable de « journées logistique » — consacrées à récupérer plusieurs articles d'occasion en un seul déplacement en véhicule loué — est une approche efficace qui optimise le coût de transport par article récupéré.
`);

// L6: 3722 → need +278
await appendAndPatch('ce39fca3-8b41-4daa-aaec-457a8683d2ab', `
## L'importance de la flexibilité dans les critères de sélection

Un budget équipement intelligent repose sur une flexibilité dans les critères de sélection — être prêt à accepter le bon article au bon prix, même si la couleur, la marque ou le modèle exact n'est pas celui initialement envisagé. Trop de rigidité dans les critères de sélection (« Je veux exactement un bureau IKEA Micke blanc en parfait état à 30 euros maximum ») réduit drastiquement les opportunités disponibles et force à attendre longtemps ou à payer plus. Au contraire, définir les critères fonctionnels essentiels (taille, fonctionnalité, état minimal acceptable) et rester flexible sur les caractéristiques esthétiques ou de marque multiplie les opportunités.

Cette flexibilité s'applique également aux délais — être prêt à attendre l'article idéal plutôt que d'acheter le premier disponible par impatience est fondamental. La patience n'est jamais vaine dans l'économie de l'occasion française. Le bon article au bon prix finit toujours par apparaître pour qui a configuré ses alertes et maintenu sa vigilance avec constance. C'est cette combinaison de flexibilité dans les critères et de patience dans le timing qui définit l'acheteur d'occasion expert.
`);
