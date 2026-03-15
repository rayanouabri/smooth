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

const EXT_L7 = `
## Le suivi post-aménagement : évaluer l'efficacité des mesures

Une fois les aménagements accordés et mis en œuvre, un suivi régulier de leur efficacité est souhaitable, aussi bien pour l'étudiant que pour le service universitaire qui les a instruits. Après le premier semestre d'application, il est utile de faire le point : les aménagements ont-ils effectivement permis de réduire le désavantage qu'ils visaient à compenser ? L'étudiant a-t-il pu exprimer pleinement ses connaissances dans les conditions aménagées ? Y a-t-il des ajustements à demander pour le semestre suivant ?

Ce suivi proactif est dans l'intérêt de l'étudiant : les services d'aménagement sont souvent sous-dotés en personnel et ne peuvent pas assurer un suivi individualisé sans l'initiative de l'étudiant lui-même. Une rencontre semestrielle avec le référent handicap ou le conseiller d'accompagnement permet d'adapter les aménagements si la situation de l'étudiant a évolué — amélioration ou aggravation d'une condition médicale, changement de formation impliquant des types d'épreuves différentes.

## Les technologies d'aide à la lecture et à l'écriture

Pour les étudiants présentant des troubles de la lecture ou de l'écriture (dyslexie sévère, déficience visuelle, paralysie des membres supérieurs), des technologies d'assistance existent et sont accessibles via les services universitaires d'aide au handicap ou en faisant une demande MDPH (Maison Départementale des Personnes Handicapées).

Les logiciels de synthèse vocale (lecture du texte à haute voix), les logiciels de reconnaissance vocale (dictée de texte), les correcteurs orthographiques avancés et les interfaces d'agrandissement d'écran sont des outils qui peuvent transformer radicalement l'accessibilité des contenus de cours et des épreuves pour les étudiants concernés. La formation à ces outils prend du temps, et il est recommandé de commencer à les utiliser dès le début de la formation et pas uniquement pendant les examens.

Les prêts de matériel informatique adapté (ordinateurs équipés de logiciels d'assistance) sont proposés par certains services d'aide au handicap universitaires pour les étudiants qui n'ont pas les moyens d'acquérir ces équipements. Renseignez-vous sur ces dispositifs dès votre inscription.

## Les pairs aidants et les tuteurs spécialisés

Dans le cadre des politiques d'inclusion universitaire, des dispositifs de tutorat spécialisé se développent dans les universités françaises. Des étudiants avancés formés à l'accompagnement pédagogique des étudiants en situation de handicap interviennent en soutien individuel ou en petit groupe, pour des séances de révision adaptées, d'aide à la prise de notes ou de préparation aux épreuves orales.

Ces tuteurs spécialisés sont différents des tuteurs généraux (aide à la réussite pour tous les étudiants) : ils ont reçu une formation spécifique aux problématiques du handicap dans le contexte académique et sont sensibilisés aux besoins particuliers des étudiants qu'ils accompagnent. Si votre université propose ce type de dispositif, il est fortement recommandé de l'utiliser.

## Le réseau associatif étudiant pour les personnes handicapées

En dehors de l'université, un réseau associatif actif accompagne les étudiants en situation de handicap dans leur parcours académique et personnel. Des associations comme Hanploi, l'APAJH (Association Pour Adultes et Jeunes Handicapés), ou l'Union Nationale des Associations de Parents, de Personnes Handicapées Mentales et de leurs amis (UNAPEI) proposent des ressources d'information juridique, des forums entre pairs et des conseils pratiques. Des réseaux d'anciens étudiants handicapés qui ont réussi des parcours académiques et professionnels accomplis témoignent régulièrement dans les universités et constituent des modèles inspirants pour les étudiants actuels.

Pour les étudiants étrangers en situation de handicap, le réseau des associations de la diaspora de leur pays d'origine peut également offrir un soutien informel et des connexions vers des ressources adaptées à leur situation spécifique, notamment pour naviguer les procédures MDPH qui peuvent être complexes en langue française.

## Les aménagements dans les formations en alternance

Les formations en alternance (licence professionnelle, master en apprentissage, BUT) combinent périodes de cours à l'université et périodes en entreprise. Les étudiants en situation de handicap en alternance bénéficient des mêmes droits aux aménagements pour les épreuves universitaires que les étudiants en formation initiale classique. Du côté de l'entreprise, la RQTH (Reconnaissance de la Qualité de Travailleur Handicapé) délivrée par la MDPH ouvre des droits spécifiques au salarié (aménagement du poste de travail, priorité de mobilité) que l'apprenti peut faire valoir auprès de son maître d'apprentissage.

La combinaison des droits côté entreprise et des aménagements côté université constitue un cadre protecteur pour les étudiants en situation de handicap qui choisissent la voie de l'alternance. Cette voie, souvent plus concrète et directement professionnalisante, peut d'ailleurs être une alternative adaptée pour des étudiants dont les difficultés académiques seraient moins présentes dans un contexte d'apprentissage pratique que dans le cadre plus théorique et abstrait de la formation initiale classique.

## La construction d'un réseau professionnel en contexte de handicap

Au-delà de l'université, la construction d'un réseau professionnel est une dimension importante du parcours des étudiants en situation de handicap. Des structures comme l'AGEFIPH (Association de Gestion du Fonds pour l'Insertion Professionnelle des Handicapés) et le FIPHFP (Fonds pour l'Insertion des Personnes Handicapées dans la Fonction Publique) soutiennent l'emploi des personnes handicapées et peuvent orienter les étudiants vers des entreprises et administrations sensibilisées à l'inclusion. Les forums de l'emploi «Différent et compétent» organisés régulièrement dans les grandes villes françaises permettent de rencontrer des recruteurs engagés dans des politiques d'inclusion active.

Pour les étudiants internationaux en situation de handicap, la double dimension internationale et handicap peut paradoxalement constituer un profil attractif pour certains employeurs engagés dans la diversité, qui voient dans ces candidats une combinaison de compétences interculturelles et d'une résilience démontrée par un parcours atypique.
`;

const EXT_L8 = `
## La neurobiologie du stress et ses implications pratiques

Comprendre les mécanismes neurobiologiques du stress permet d'adopter des stratégies de gestion plus efficaces car fondées sur la physiologie réelle. Face à une menace perçue (réelle ou imaginaire, physique ou psychologique), le corps active le système nerveux sympathique, déclenchant une cascade hormonale : libération de cortisol et d'adrénaline, accélération du rythme cardiaque, dilatation des pupilles, mobilisation des réserves gluconénergétiques. Cette réaction de «combat ou fuite» est fonctionnelle face aux menaces physiques ancestrales, mais mal adaptée aux contraintes cognitives d'un examen universitaire.

La clé est de distinguer l'activation (niveau de stress modéré, état d'alerte optimal qui facilite la performance) de la suractivation (niveau de stress élevé, état d'anxiété qui inhibe la mémoire et la cognition). La zone d'activation optimale, décrite par la courbe de Yerkes-Dodson, correspond à un niveau d'enjeu ressenti suffisant pour mobiliser l'attention et les ressources sans dépasser le seuil qui produit les effets contre-productifs.

Pour maintenir dans cette zone optimale lors d'un examen, des techniques de régulation physiologique sont efficaces car elles agissent directement sur le système nerveux autonome. La respiration abdominale lente (6 respirations par minute, contre 15-20 en état de stress) active le nerf vague et stimule le système parasympathique, qui contrebalance la réponse au stress. Les techniques de cohérence cardiaque (applications HeartMath, inspiration sur 5 secondes, expiration sur 5 secondes) sont simples, rapidement apprenables et utilisables discrètement même en salle d'examen.

## La gestion du syndrome de la page blanche

Le syndrome de la page blanche — l'incapacité à commencer à écrire malgré la maîtrise des contenus — est une manifestation courante du stress d'examen dans les disciplines où la production écrite longue est exigée. Il touche particulièrement les étudiants perfectionnistes qui ont peur de commencer par quelque chose d'imparfait.

La stratégie la plus efficace contre le syndrome de la page blanche est l'action immédiate, même imparfaite. Écrire un brouillon de plan en quelques minutes, même approximatif, brise l'inhibition du démarrage et met la réflexion en mouvement. Rappeler-vous que les premières idées notées au brouillon ne sont pas commitantes : vous pouvez les modifier autant que nécessaire avant de commencer la rédaction définitive. L'important est de passer de l'état figé à l'état actif le plus rapidement possible.

Une autre technique est de commencer par la partie du devoir qui vous semble la plus accessible — pas nécessairement l'introduction. Si vous avez une idée claire de la deuxième partie mais que l'introduction vous bloque, rédigez d'abord la deuxième partie et revenez à l'introduction ensuite. La rédaction n'est pas obligatoirement linéaire, et les correcteurs ne savent pas dans quel ordre vous avez écrit les différentes parties.

## Les techniques de pleine conscience appliquées aux examens

Les pratiques de pleine conscience (mindfulness) — développées à partir de la tradition bouddhiste et adaptées au contexte occidental par des chercheurs comme Jon Kabat-Zinn — ont démontré une efficacité clinique dans la réduction de l'anxiété, l'amélioration de la concentration et la gestion du stress. Plusieurs études publiées dans des revues de psychologie de l'éducation montrent des effets positifs de la pratique régulière de la pleine conscience sur les performances académiques des étudiants anxieux.

La pleine conscience consiste essentiellement à observer son expérience présente (sensations, pensées, émotions) avec une attitude d'acceptation non-jugeante, sans se laisser emporter par les ruminations sur le passé ou les inquiétudes sur l'avenir. Lors d'un examen, une pratique simple consiste à remarquer quand votre attention dérive vers des pensées anxieuses («je vais rater cet examen», «je ne sais pas répondre à cette question») et à la ramener doucement sur la tâche présente — lire la question, organiser une réponse, rédiger le paragraphe en cours.

Des applications comme Headspace, Calm ou Insight Timer proposent des programmes guidés de méditation et de pleine conscience adaptés aux contextes de stress académique. Dix minutes de pratique quotidienne pendant les deux semaines précédant les examens peuvent produire des effets mesurables sur le niveau d'anxiété et la qualité de la récupération.

## La préparation mentale : techniques des athlètes appliquées aux examens

Les techniques de préparation mentale développées dans le sport de haut niveau sont directement applicables au contexte des examens universitaires, qui partagent avec la compétition sportive la combinaison d'enjeu élevé, de performance sous contrainte temporelle et de pression psychologique.

La visualisation positive — s'imaginer mentalement dans la salle d'examen, calme et concentré, en train de lire le sujet et de construire méthodiquement sa réponse — est une technique de préparation utilisée par de nombreux sportifs professionnels pour «répéter» mentalement une performance optimale. Des études en neurosciences cognitives montrent que la visualisation active des circuits neuronaux similaires à ceux impliqués dans l'action réelle, «entraînant» en quelque sorte le cerveau à reproduire dans la réalité la performance visualisée.

La routine pré-examen — une séquence d'actions habituelles et rassurantes réalisée avant chaque épreuve — aide à créer un état psychologique de préparation optimale. Cette routine peut inclure : se lever à la même heure, manger le même petit-déjeuner, écouter la même playlist de concentration, arriver à la salle avec la même avance. La répétition de cette routine crée une «ancre comportementale» qui déclench automatiquement l'état mental de concentration souhaité.

## La gestion du stress post-examen

Si le stress avant et pendant l'examen est bien documenté, le stress post-examen est une réalité moins souvent abordée. L'attente des résultats — qui peut durer plusieurs semaines — génère une anxiété d'anticipation qui peut être aussi invalidante que l'anxiété pré-examen. Les ruminations («j'aurais dû dire X», «cette réponse était incorrecte») sont une forme de pensée contre-productive qui nourrit l'anxiété sans rien changer au résultat.

Des stratégies pour gérer cette période incluent : limiter le temps consacré aux discussions comparatives avec des camarades après l'examen (ces discussions amplifient souvent inutilement l'anxiété), reprendre rapidement des activités normales (travail sur d'autres matières, sport, activités sociales), et pratiquer l'acceptation de l'incertitude — reconnaître qu'on n'a plus de contrôle sur le résultat et que l'attente fait partie du processus.

Lorsque les résultats tombent, quelle que soit la note obtenue, la règle la plus saine est de passer rapidement de l'émotion immédiate (satisfaction ou déception) à l'analyse constructive : qu'est-ce que ce résultat m'apprend sur ma préparation, sur ma maîtrise des contenus, sur ma gestion de l'examen ? Cette analyse post-examen, réalisée lors de la consultation de copie, est le point de départ d'une préparation améliorée pour les prochaines épreuves.
`;

await appendAndPatch('4f448018-2528-4570-9038-1abcbe1be9b6', EXT_L7);
await appendAndPatch('201a89fd-1685-4864-b756-6524941dadc8', EXT_L8);
