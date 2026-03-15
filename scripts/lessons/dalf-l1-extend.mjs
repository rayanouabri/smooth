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

const EXT_L1 = `
## Les spécificités du DALF dans le contexte de la procédure Campus France

Pour les étudiants originaires de pays soumis à la procédure Campus France obligatoire — ce qui concerne une quarantaine de pays dont le Maroc, la Tunisie, l'Algérie, le Sénégal, le Cameroun, la Côte d'Ivoire, le Vietnam, la Chine, le Brésil, le Mexique, la Colombie et de nombreux autres — la certification linguistique joue un rôle spécifique dans le processus d'admission. Campus France est l'agence française chargée de promouvoir l'enseignement supérieur français à l'étranger et de faciliter les démarches des étudiants étrangers souhaitant étudier en France. Elle dispose d'espaces dans les instituts français et alliances françaises de nombreux pays du monde.

Dans le cadre de la procédure Campus France, les candidats passent un entretien avec un conseiller qui évalue leur profil académique, leur motivation et, dans certains cas, leur maîtrise du français. Pour les candidats qui ne disposent pas d'une certification DALF ou DELF, l'entretien peut inclure une évaluation orale du français. Les titulaires d'un DALF C1 ou C2, en revanche, se présentent à l'entretien avec une preuve formelle et irréfutable de leur maîtrise de la langue, ce qui simplifie considérablement cette partie de l'évaluation et renforce la qualité perçue globale de leur dossier.

Par ailleurs, certains pays exigent un TCF DAO (Test de Connaissance du Français pour la Demande d'Admission en France) spécifique dans le cadre de la procédure Campus France. Les titulaires d'un DALF C1 ou C2 sont généralement exemptés du TCF DAO, ce qui représente un gain de temps, d'argent (le TCF DAO est payant) et d'énergie précieux dans le processus d'admission. Cette exemption est à vérifier selon les pays et les politiques en vigueur, mais elle est appliquée dans la grande majorité des espaces Campus France.

## Le DALF comme signal de sérieux pour les dossiers d'admission compétitifs

Au-delà de son rôle fonctionnel de justificatif linguistique, le DALF C1 ou C2 envoie un signal qualitatif fort aux comités d'admission des établissements très sélectifs. Dans un dossier de candidature en master ou en grande école, la plupart des candidats internationaux présentent soit un TCF soit un DELF B2 comme justificatif linguistique minimal. Le candidat qui présente un DALF C2 se distingue : il signale une maîtrise du français bien au-delà du seuil requis, une capacité à produire des analyses complexes à l'écrit et des interventions argumentées à l'oral, et une volonté de s'intégrer pleinement dans une communauté académique francophone.

Cette dimension signalétique du DALF est particulièrement importante pour les filières à fort contenu rhétorique et littéraire : droit, sciences politiques, lettres, philosophie, histoire, CPGE littéraires. Dans ces domaines, la maîtrise de la langue française n'est pas un simple prérequis fonctionnel mais un vecteur de la pensée et de l'argumentation complexe. Les examinateurs et membres de jury savent reconnaître dans un dossier la différence entre un candidat qui satisfait formellement aux exigences linguistiques et un candidat dont la langue est un outil de pensée maîtrisé à un niveau élevé.

Pour les étudiants qui visent les classes préparatoires littéraires (hypokhâgne et khâgne), la présentation d'un DALF C2 peut constituer un appel fort en faveur de leur candidature, même si ces formations n'acceptent généralement que des candidats ayant terminé le lycée en France ou dans un lycée français à l'étranger. Pour ceux qui ont le profil académique et le niveau linguistique requis, le DALF C2 est la certification qui correspond à l'ambition portée par ces formations.

## Anticiper la préparation du DALF selon son profil et son calendrier d'admission

La préparation du DALF doit être intégrée dans un calendrier réaliste qui tient compte à la fois de votre niveau actuel de français, de la date des sessions d'examen disponibles dans votre pays ou votre ville, et des délais de réception des résultats et du diplôme officiel. Commencer à planifier sa préparation au DALF au moins six mois avant la date souhaitée d'admission dans un établissement français est une règle prudente.

Si votre niveau de français est déjà avancé (vous avez étudié en milieu francophone, vous lisez et écrivez régulièrement en français, vous êtes capable de suivre et de comprendre des contenus académiques français sans difficulté), une préparation intensive de quatre à six semaines peut être suffisante pour vous familiariser avec le format du DALF C1 et les attentes de l'examen. Si votre niveau est solide mais que vous n'avez jamais travaillé spécifiquement les compétences évaluées au DALF (compréhension fine de documents authentiques, production d'écrits argumentés longs, interaction orale sur des sujets complexes), un travail de deux à trois mois sur des supports de préparation spécifiques est recommandé.

La date limite pour disposer de votre diplôme DALF avant une date de candidature importante dépend des délais de résultat et d'émission du diplôme. Après la session d'examen, les résultats sont généralement communiqués dans un délai de six à huit semaines. Le diplôme officiel lui-même est envoyé quelques semaines après la communication des résultats. En pratique, comptez trois à quatre mois entre le passage de l'examen et la réception du diplôme certifié. Pour une candidature universitaire en mars, passer le DALF en session d'automne (novembre-décembre) de l'année précédente est donc le calendrier idéal.

## Questions fréquentes supplémentaires sur le DALF et les admissions

**Q : Le DALF est-il reconnu pour l'inscription à des formations professionnelles et des écoles paramédicales ?**
Les formations paramédicales (infirmiers, kinésithérapeutes, sages-femmes) et les écoles de formation professionnelle (IFSI, IFMK, etc.) appliquent généralement les mêmes exigences de maîtrise du français que les formations universitaires. Le DALF C1 est reconnu pour l'admission dans ces formations. Certaines formations très pratiques et locales peuvent cependant avoir leurs propres critères spécifiques qu'il est conseillé de vérifier directement auprès de l'établissement.

**Q : Mon université d'origine en France peut-elle me remettre une attestation de maîtrise du français basée sur mes résultats académiques sans que j'aie un DALF ?**
Certaines universités proposent des tests de français institutionnels à leurs étudiants étrangers et peuvent délivrer des attestations internes. Ces attestations ne remplacent pas les certifications officielles comme le DALF pour une procédure d'admission externe dans un autre établissement. Si vous cherchez à vous inscrire dans un nouvel établissement, vous aurez généralement besoin d'une certification reconnue nationalement.

**Q : Le niveau B2 du DELF suffit-il pour certaines formations universitaires ?**
Pour les licences dans les filières scientifiques (mathématiques, physique, informatique) où le volume de contenu rhétorique est limité, certaines universités acceptent un DELF B2 comme justificatif linguistique minimal. Pour les formations en lettres, droit, sciences humaines et sociales, le DALF C1 est généralement la norme. Pour les masters de recherche et les grandes écoles, le DALF C1 ou C2 est recommandé ou exigé.

**Q : Le DALF certifie-t-il uniquement la compréhension du français ou aussi la production ?**
Le DALF certifie l'ensemble des compétences communicatives en français : compréhension de l'oral, compréhension de l'écrit, production écrite et production orale. L'examen est divisé en quatre épreuves correspondant à ces quatre compétences. Pour obtenir le diplôme, vous devez obtenir une note minimale dans chaque épreuve individuellement et atteindre la note globale requise. Le DALF est donc une certification équilibrée qui atteste d'une maîtrise globale et non d'une compétence partielle.

**Q : Comment les universités étrangères reconnaissent-elles le DALF pour les étudiants qui veulent ensuite reprendre des études hors de France ?**
Le DALF est reconnu dans plus de 175 pays signataires des conventions de coopération linguistique avec la France. Les universités étrangères qui acceptent des candidats franco phones ou des étudiants ayant fait des études en français reconnaissent généralement le DALF comme preuve de compétence. Pour les candidatures dans des universités anglophones, le certificat de langue demandé est généralement l'IELTS ou le TOEFL, non le DALF. Mais si vous souhaitez valoriser un séjour d'études en France dans une candidature internationale future, le DALF constitue une preuve formelle reconnue.
`;

await appendAndPatch('bc70d36a-2c27-4518-a05f-894dd2f6e31c', EXT_L1);
