const BASE = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SVC  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';
const H = { 'apikey': SVC, 'Authorization': 'Bearer '+SVC, 'Content-Type': 'application/json' };

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

// Extension L4 : téléconsultation — ~500 mots supplémentaires
const extL4 = `

## L'accessibilité de la téléconsultation pour les étudiants internationaux

La téléconsultation représente une avancée particulièrement significative pour les étudiants étrangers qui rencontrent des barrières spécifiques à l'accès aux soins en France : éloignement géographique des centres médicaux, contraintes horaires liées à leur emploi du temps académique chargé, appréhension de communiquer en français au téléphone ou en face à face, ou simple récence de leur arrivée qui ne leur a pas encore laissé le temps de trouver un médecin traitant.

Consulter un médecin depuis sa chambre de résidence universitaire ou son appartement, en dehors des heures où les cours ont lieu, supprime un ensemble de contraintes qui peuvent constituer autant de freins à l'accès aux soins. La téléconsultation via Doctolib est accessible depuis n'importe quel appareil muni d'une caméra et d'un microphone : smartphone, tablette, ordinateur portable. L'interface est en français mais la configuration technique ne demande aucune compétence informatique particulière.

Pour les étudiants récemment arrivés qui n'ont pas encore de médecin traitant et qui ont besoin d'une consultation sans urgence immédiate (renouvellement d'un traitement ancien, question sur un symptôme nouveau, bilan de santé de départ), la téléconsultation avec un médecin généraliste disponible sur Doctolib est une option rapide et accessible sans avoir à d'abord trouver un praticien en présentiel.

## L'évolution de la réglementation sur la téléconsultation

La réglementation française de la téléconsultation a considérablement évolué depuis la pandémie de 2020. Avant cette crise, la téléconsultation était autorisée mais peu pratiquée, avec des restrictions significatives sur les remboursements. Sous l'impulsion des nécessités sanitaires, les règles ont été assouplies et les remboursements élargis, et ces évolutions ont en grande partie été pérennisées.

Aujourd'hui, une téléconsultation avec un médecin inscrit à la télémédecine et utilisant un outil certifié conforme (comme la solution intégrée à Doctolib) est remboursée par l'Assurance maladie dans les mêmes conditions qu'une consultation en cabinet, à condition de respecter certaines règles : la consultation doit être réalisée avec votre médecin traitant ou, s'il est indisponible, avec un autre médecin que votre médecin traitant peut vous avoir orienté, ou dans le cadre des «téléconsultations sans médecin traitant préalable» permises pour certains cas.

Pour les étudiants sans médecin traitant encore déclaré, des plateformes de téléconsultation partenaires de Doctolib et certains médecins proposent des consultations de télémédecine accessibles directement sans orientation préalable, remboursées à taux réduit mais évitant un coût total prohibitif. Ces options sont précieuses pendant la période transitoire où vous cherchez encore votre médecin traitant.

**Q : La téléconsultation peut-elle remplacer complètement la consultation en cabinet ?**
Non, et ce pour plusieurs raisons médicalement fondamentales. La téléconsultation est excellente pour les consultations d'orientation, les renouvellements d'ordonnances, les bilans de suivi, les questions de santé mentale et certaines dermatologies légères. Elle est inadaptée quand un examen physique est nécessaire (auscultation cardiaque et pulmonaire, palpation abdominale, examen neurologique, prise de tension artérielle), quand des examens techniques en cabinet sont requis (ECG, fond d'oeil, prèlèvement nasal ou vaginal) ou quand la situation médicale est suffisamment complexe pour nécessiter une présence physique. Le médecin lui-même décidera si votre demande est compatible avec une téléconsultation ou si elle nécessite une consultation physique.

**Q : Comment obtenir des arrêts de travail ou des justificatifs médicaux via téléconsultation ?**
Un médecin peut parfaitement délivrer un certificat médical ou un arrêt maladie lors d'une téléconsultation, à condition que la situation médicale le justifie. L'arrêt de travail ou le certificat sera transmis dans votre dossier Doctolib sous forme numérique et parfois envoyé directement à l'Assurance maladie pour les arrêts de travail. Pour les étudiants qui travaillent en parallèle de leurs études et ont besoin d'un justificatif pour l'employeur, assurez-vous que votre médecin sait que vous souhaitez un document formel dès le début de la consultation.
`;

await appendAndPatch('d2bfc9be-d927-42ff-a273-d01eabcb9ea6', extL4);
