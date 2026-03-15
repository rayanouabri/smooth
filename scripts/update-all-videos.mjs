// Script de mise à jour massive des vidéos avec SERVICE ROLE KEY
import { readFileSync } from 'fs';

const SUPABASE_URL = 'https://xkecqmsgvjjtujvlotpm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZWNxbXNndmpqdHVqdmxvdHBtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjU4NDIxNSwiZXhwIjoyMDgyMTYwMjE1fQ.jOOgWSgXTqOKtr1fFqh4RIhwXzd7ZcF9XjOihpCHCnU';

async function updateVideo(id, url) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/lessons?id=eq.${id}`, {
    method: 'PATCH',
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
    body: JSON.stringify({ video_url: url })
  });
  return res.status;
}

const videosByTheme = {
  logement: [
    'https://www.youtube.com/watch?v=Y-wlS9u5KdM',
    'https://www.youtube.com/watch?v=tYNb_HVwsqM',
    'https://www.youtube.com/watch?v=BijMy2JRBlc',
    'https://www.youtube.com/watch?v=OYs3TqKzPHU',
    'https://www.youtube.com/watch?v=gHxJksJLF_E',
    'https://www.youtube.com/watch?v=DZJIj3YKecs',
    'https://www.youtube.com/watch?v=P3QEiGEbSjE',
    'https://www.youtube.com/watch?v=xFXgvR6T5FE',
    'https://www.youtube.com/watch?v=2ZEJCiQR2bE',
    'https://www.youtube.com/watch?v=IZoQrJi7s4I',
    'https://www.youtube.com/watch?v=jHJax-c6T7M',
    'https://www.youtube.com/watch?v=XwfxIHCPjE4',
    'https://www.youtube.com/watch?v=FVzf5KRMKSE',
    'https://www.youtube.com/watch?v=L4z8STpbhCc',
    'https://www.youtube.com/watch?v=2l4z_jUL0S0',
    'https://www.youtube.com/watch?v=BfBsrUh5cWc',
    'https://www.youtube.com/watch?v=qZ1LrJzVb_c',
    'https://www.youtube.com/watch?v=V7Mw5G1H_Gc',
  ],
  banque: [
    'https://www.youtube.com/watch?v=qIRH8fVKYvM',
    'https://www.youtube.com/watch?v=3LWiJn2SLEY',
    'https://www.youtube.com/watch?v=T-A0v9Q0WLY',
    'https://www.youtube.com/watch?v=kQbqiX0HBJA',
    'https://www.youtube.com/watch?v=NU3nTEeYgVA',
    'https://www.youtube.com/watch?v=rj9J-lNXew4',
    'https://www.youtube.com/watch?v=LSMj-4Z0now',
    'https://www.youtube.com/watch?v=_4-z7BqP-_Q',
    'https://www.youtube.com/watch?v=Ao9JVZLqDeA',
    'https://www.youtube.com/watch?v=vNQ_gTxWxOc',
    'https://www.youtube.com/watch?v=r38aN9RGxIE',
    'https://www.youtube.com/watch?v=uG8NzGfGnio',
    'https://www.youtube.com/watch?v=JkS_K6BCWIU',
    'https://www.youtube.com/watch?v=2gTmYJlCtQA',
    'https://www.youtube.com/watch?v=EI9N1Fb6TZo',
    'https://www.youtube.com/watch?v=HxB8tcqGeb0',
    'https://www.youtube.com/watch?v=w7RA7RsFh1w',
    'https://www.youtube.com/watch?v=GBz06Nyf5kQ',
  ],
  transport: [
    'https://www.youtube.com/watch?v=XxWnT4cjxJ8',
    'https://www.youtube.com/watch?v=2_YCjqfOqs4',
    'https://www.youtube.com/watch?v=LL0b0bXpWuM',
    'https://www.youtube.com/watch?v=h_I3CcbScAo',
    'https://www.youtube.com/watch?v=OFhLMk2nSfM',
    'https://www.youtube.com/watch?v=b0L-E5kFCWE',
    'https://www.youtube.com/watch?v=NJC5_2IpVPY',
    'https://www.youtube.com/watch?v=b5KZN8KPEUQ',
    'https://www.youtube.com/watch?v=tQlN_j8_MJA',
    'https://www.youtube.com/watch?v=FBP1_ZyK_qc',
    'https://www.youtube.com/watch?v=GhqrKgkDPVk',
    'https://www.youtube.com/watch?v=JcB0dblTLRo',
    'https://www.youtube.com/watch?v=FNzRNzH6TXU',
    'https://www.youtube.com/watch?v=E3qrv8OqBb4',
    'https://www.youtube.com/watch?v=p_a-6sde0qc',
    'https://www.youtube.com/watch?v=K3TJF_bCiSI',
    'https://www.youtube.com/watch?v=ooEFMxIV0pE',
    'https://www.youtube.com/watch?v=lH-DYbmsEr8',
  ],
  emploi: [
    'https://www.youtube.com/watch?v=vOjAFemFJT4',
    'https://www.youtube.com/watch?v=PIeglfHSNdI',
    'https://www.youtube.com/watch?v=eGm-pUafjBY',
    'https://www.youtube.com/watch?v=IbZ1DfPbGJM',
    'https://www.youtube.com/watch?v=F4o3xVJnBbg',
    'https://www.youtube.com/watch?v=A7L0X1idpf4',
    'https://www.youtube.com/watch?v=Ox_H4cAyUdA',
    'https://www.youtube.com/watch?v=YGCGP_n9fxE',
    'https://www.youtube.com/watch?v=vSuGvpHqfiQ',
    'https://www.youtube.com/watch?v=XSEOBzS2zN0',
    'https://www.youtube.com/watch?v=aGG-3F2dM7w',
    'https://www.youtube.com/watch?v=tN7v1r1r8SM',
    'https://www.youtube.com/watch?v=JD3FjBY5MKo',
    'https://www.youtube.com/watch?v=pCr9a-gBJRs',
    'https://www.youtube.com/watch?v=t2l2sD_IINE',
    'https://www.youtube.com/watch?v=I4TYxL7YZFE',
    'https://www.youtube.com/watch?v=kVS5e6SIgFo',
    'https://www.youtube.com/watch?v=WFNiuvT8tOQ',
  ],
  sante: [
    'https://www.youtube.com/watch?v=HwBMlBfPG6I',
    'https://www.youtube.com/watch?v=qQ4BeyEI0Dw',
    'https://www.youtube.com/watch?v=6xofrG5uZgY',
    'https://www.youtube.com/watch?v=rfX3AAtiKCU',
    'https://www.youtube.com/watch?v=S9_Dyppg3F4',
    'https://www.youtube.com/watch?v=I9NIXErlhcA',
    'https://www.youtube.com/watch?v=48i3KrS7VPI',
    'https://www.youtube.com/watch?v=4hjli0Q-og0',
    'https://www.youtube.com/watch?v=oUDYaoZGV3Y',
    'https://www.youtube.com/watch?v=-n96QLoJIDo',
    'https://www.youtube.com/watch?v=J5gapscfVWA',
    'https://www.youtube.com/watch?v=0k5C68M7yn8',
    'https://www.youtube.com/watch?v=VPKc5Mc0j-I',
    'https://www.youtube.com/watch?v=X_yU5RFM1aU',
    'https://www.youtube.com/watch?v=yFgloHf2DQY',
    'https://www.youtube.com/watch?v=dfDRI2qg_z4',
    'https://www.youtube.com/watch?v=e8NzpJXke9Q',
    'https://www.youtube.com/watch?v=-NzdNGwlcSk',
  ],
  administratif: [
    'https://www.youtube.com/watch?v=GGxl4aWZKsw',
    'https://www.youtube.com/watch?v=vGf02wZCkT4',
    'https://www.youtube.com/watch?v=8RrzlexjOzw',
    'https://www.youtube.com/watch?v=iLyewVzr6yM',
    'https://www.youtube.com/watch?v=xkyPRMWBpgk',
    'https://www.youtube.com/watch?v=V7xaYFDmHfU',
    'https://www.youtube.com/watch?v=s0siZk1x4-c',
    'https://www.youtube.com/watch?v=CvqaYgwQg2c',
    'https://www.youtube.com/watch?v=X--V4D8sClE',
    'https://www.youtube.com/watch?v=unViGMfngyE',
    'https://www.youtube.com/watch?v=x9dsyhH6tP0',
    'https://www.youtube.com/watch?v=4q8X7AezHJ8',
    'https://www.youtube.com/watch?v=BcLwL5OWmKA',
    'https://www.youtube.com/watch?v=IBk08wTVnIs',
    'https://www.youtube.com/watch?v=fZHPKpaE0ZA',
    'https://www.youtube.com/watch?v=HZURshZkZXo',
    'https://www.youtube.com/watch?v=VM90PABJ2wQ',
    'https://www.youtube.com/watch?v=HSqy20bfXbA',
  ],
  culture: [
    'https://www.youtube.com/watch?v=dEMyuLETckA',
    'https://www.youtube.com/watch?v=0tEDaV85o-I',
    'https://www.youtube.com/watch?v=vKYohOU6oOI',
    'https://www.youtube.com/watch?v=UTjo7I2ZAcA',
    'https://www.youtube.com/watch?v=5ffNgumlEuI',
    'https://www.youtube.com/watch?v=a6_ncCOLlV4',
    'https://www.youtube.com/watch?v=5vkeTwttydM',
    'https://www.youtube.com/watch?v=df8SVpDfV7w',
    'https://www.youtube.com/watch?v=bMhPDL2q234',
    'https://www.youtube.com/watch?v=Ms7cF8mQ0BI',
    'https://www.youtube.com/watch?v=Ft6pyw6IUMA',
    'https://www.youtube.com/watch?v=uKHxRA3TSXg',
    'https://www.youtube.com/watch?v=smC-NaoVJ5Y',
    'https://www.youtube.com/watch?v=7XzshdF2bBU',
    'https://www.youtube.com/watch?v=WkcQi7D9sI8',
    'https://www.youtube.com/watch?v=SkbRltrnNpQ',
    'https://www.youtube.com/watch?v=HALoHsXvt4A',
    'https://www.youtube.com/watch?v=VtTTkIBc9ps',
  ],
  pratique: [
    'https://www.youtube.com/watch?v=2GJP2ybNgNg',
    'https://www.youtube.com/watch?v=AMhro_xg8MY',
    'https://www.youtube.com/watch?v=hrsRYA60Lcg',
    'https://www.youtube.com/watch?v=XlkRLE8xpUc',
    'https://www.youtube.com/watch?v=WqoniGtY1O8',
    'https://www.youtube.com/watch?v=JpDKqYVBMcg',
    'https://www.youtube.com/watch?v=THMpbQ1STxk',
    'https://www.youtube.com/watch?v=Wjbi5IMefaA',
    'https://www.youtube.com/watch?v=Vpu5HmDTeoQ',
    'https://www.youtube.com/watch?v=_Dn_EDR42dE',
    'https://www.youtube.com/watch?v=gfnFBF4FiKY',
    'https://www.youtube.com/watch?v=_UrWU4szxMM',
    'https://www.youtube.com/watch?v=8v2BeC0Vu7U',
    'https://www.youtube.com/watch?v=iAZDcb0cqJI',
    'https://www.youtube.com/watch?v=bqVwWmrv74I',
    'https://www.youtube.com/watch?v=MlPQ1NEY4lU',
    'https://www.youtube.com/watch?v=YRhkJMzceN0',
    'https://www.youtube.com/watch?v=g8GQE70Y2ig',
  ],
  francais: [
    'https://www.youtube.com/watch?v=R8UoeqzbVJk',
    'https://www.youtube.com/watch?v=2Cy5mB3jWxN',
    'https://www.youtube.com/watch?v=MsL7z2C4JK0',
    'https://www.youtube.com/watch?v=N_-lGPVdVBg',
    'https://www.youtube.com/watch?v=e0U-4Z0RQFI',
    'https://www.youtube.com/watch?v=2JqKnGSCAJQ',
    'https://www.youtube.com/watch?v=rUxPFwMjSF8',
    'https://www.youtube.com/watch?v=XPMx4stV1FQ',
    'https://www.youtube.com/watch?v=HwBMlBfPG6I',
    'https://www.youtube.com/watch?v=p-IFxIDGsf4',
    'https://www.youtube.com/watch?v=qA6_mRlhZS8',
    'https://www.youtube.com/watch?v=GH8N_4xMjr8',
    'https://www.youtube.com/watch?v=P0-GDAQ_lKA',
    'https://www.youtube.com/watch?v=v55nKLGT1G0',
    'https://www.youtube.com/watch?v=0gTJ-2gaGWE',
    'https://www.youtube.com/watch?v=5bGYCz3Bm1U',
    'https://www.youtube.com/watch?v=IbZ1DfPbGJM',
    'https://www.youtube.com/watch?v=vOjAFemFJT4',
  ],
  fiscal: [
    'https://www.youtube.com/watch?v=vC2lDyAFxKQ',
    'https://www.youtube.com/watch?v=YzPRqhUrq2I',
    'https://www.youtube.com/watch?v=a2yZG3GkX40',
    'https://www.youtube.com/watch?v=6JRv7oSwXik',
    'https://www.youtube.com/watch?v=QK3_4lGsrhE',
    'https://www.youtube.com/watch?v=mCt4pPP5Y_s',
    'https://www.youtube.com/watch?v=kVkJQD1kq7M',
    'https://www.youtube.com/watch?v=l073fC6Rq9s',
    'https://www.youtube.com/watch?v=jjxb3lOBkNI',
    'https://www.youtube.com/watch?v=mPOI7qJEmfI',
    'https://www.youtube.com/watch?v=6dJFbtF1yvk',
    'https://www.youtube.com/watch?v=vQ9cEiamF7g',
  ],
  aides: [
    'https://www.youtube.com/watch?v=MqE7kRJl3_U',
    'https://www.youtube.com/watch?v=aZNrFV0QLNM',
    'https://www.youtube.com/watch?v=4_dJVL0lg5o',
    'https://www.youtube.com/watch?v=8J-DT8F4cDY',
    'https://www.youtube.com/watch?v=H0qvxLlR_5g',
    'https://www.youtube.com/watch?v=Xk80IYDhm7g',
    'https://www.youtube.com/watch?v=UVxWeS9RGK4',
    'https://www.youtube.com/watch?v=bB3PfvLwkIQ',
    'https://www.youtube.com/watch?v=U1y4f7gsmMI',
    'https://www.youtube.com/watch?v=C1q4IEb1-0Q',
    'https://www.youtube.com/watch?v=R5_hVWjn-wU',
    'https://www.youtube.com/watch?v=FMrDF1AxEYA',
  ],
  universite: [
    'https://www.youtube.com/watch?v=HwBMlBfPG6I',
    'https://www.youtube.com/watch?v=XPMx4stV1FQ',
    'https://www.youtube.com/watch?v=N_-lGPVdVBg',
    'https://www.youtube.com/watch?v=e0U-4Z0RQFI',
    'https://www.youtube.com/watch?v=2JqKnGSCAJQ',
    'https://www.youtube.com/watch?v=rUxPFwMjSF8',
    'https://www.youtube.com/watch?v=9RmutpXqwfI',
    'https://www.youtube.com/watch?v=FN2J40qxXFg',
    'https://www.youtube.com/watch?v=4fLqEjGjEzM',
    'https://www.youtube.com/watch?v=vB4T3QMGTaA',
    'https://www.youtube.com/watch?v=QOqwb4kmbaw',
    'https://www.youtube.com/watch?v=1YXxGPi-8J8',
  ],
  securite: [
    'https://www.youtube.com/watch?v=-n96QLoJIDo',
    'https://www.youtube.com/watch?v=MlPQ1NEY4lU',
    'https://www.youtube.com/watch?v=gfnFBF4FiKY',
    'https://www.youtube.com/watch?v=_UrWU4szxMM',
    'https://www.youtube.com/watch?v=YRhkJMzceN0',
    'https://www.youtube.com/watch?v=g8GQE70Y2ig',
    'https://www.youtube.com/watch?v=K4R71sQFxCQ',
    'https://www.youtube.com/watch?v=yzNmJOp5qCA',
    'https://www.youtube.com/watch?v=5JeV3UygAMg',
    'https://www.youtube.com/watch?v=TdJ9FmHkbzA',
    'https://www.youtube.com/watch?v=hqr8dVbGYCk',
    'https://www.youtube.com/watch?v=LiGaHTh7u24',
  ],
};

function getTheme(courseTitle) {
  const t = (courseTitle || '').toLowerCase();
  if (t.includes('logement') || t.includes('bail') || t.includes('location') || t.includes('caution') || t.includes('quitter') || t.includes('etat des lieux') || t.includes('état des lieux') || t.includes('arnaque') || t.includes('garant') || t.includes('visale') || t.includes('copropri') || t.includes('annonce') || t.includes('déménag') || t.includes('demenag')) return 'logement';
  if (t.includes('banqu') || t.includes('bancaire') || t.includes('rib') || t.includes('chequ') || t.includes('chéqu') || t.includes('frais bancaire') || t.includes('agios') || t.includes('clôturer') || t.includes('cloturer') || t.includes('carte bancaire') || t.includes('virement')) return 'banque';
  if (t.includes('transport') || t.includes('navigo') || t.includes('velib') || t.includes('vélib') || t.includes('sncf') || t.includes('train') || t.includes('voyag') || t.includes('schengen')) return 'transport';
  if (t.includes('cv') || t.includes('emploi') || t.includes('travail') || t.includes('job') || t.includes('lettre') || t.includes('motivation') || t.includes('alternance') || t.includes('stage') || t.includes('statut') || t.includes('salari') || t.includes('linkedin') || t.includes('network') || t.includes('alumni') || t.includes('entretien') || t.includes('candidat') || t.includes('auto-entrepreneur') || t.includes('pôle emploi') || t.includes('pole emploi') || t.includes('télétravail') || t.includes('teletravail') || t.includes('législation') || t.includes('legislation')) return 'emploi';
  if (t.includes('santé') || t.includes('sante') || t.includes('carte vitale') || t.includes('médecin') || t.includes('medecin') || t.includes('cpam') || t.includes('sécu') || t.includes('secu') || t.includes('mutuelle') || t.includes('rembours') || t.includes('pharma') || t.includes('doctolib') || t.includes('lunettes') || t.includes('dents') || t.includes('sexuel') || t.includes('psycho') || t.includes('ofii') || t.includes('soins') || t.includes('ifsi')) return 'sante';
  if (t.includes('préfecture') || t.includes('prefecture') || t.includes('titre de séjour') || t.includes('titre de sejour') || t.includes('visa') || t.includes('vls-ts') || t.includes('anef') || t.includes('campus france') || t.includes('renouvellement') || t.includes('identit') || t.includes('légalisation') || t.includes('legalisation') || t.includes('permis de conduire') || t.includes('permis de séjour') || t.includes('service-public') || t.includes('aps') || t.includes('dossier prefecture') || t.includes('checklist') || t.includes('région')) return 'administratif';
  if (t.includes('français') || t.includes('francais') || t.includes('delf') || t.includes('dalf') || t.includes('b1') || t.includes('b2') || t.includes('a1') || t.includes('a2') || t.includes('améliorer son français')) return 'francais';
  if (t.includes('impôt') || t.includes('impot') || t.includes('fiscal') || t.includes('taxe') || t.includes('avis d') || t.includes('teom') || t.includes('déclarer ses')) return 'fiscal';
  if (t.includes('caf') || t.includes('apl') || t.includes('aide') || t.includes('bourse')) return 'aides';
  if (t.includes('universi') || t.includes('examen') || t.includes('inscription') || t.includes('campus') || t.includes('études en france')) return 'universite';
  if (t.includes('urgence') || t.includes('secours') || t.includes('sécurité') || t.includes('securite') || t.includes('pickpocket') || t.includes('objets trouvés')) return 'securite';
  if (t.includes('bise') || t.includes('tu ou vous') || t.includes('politesse') || t.includes('apéro') || t.includes('café') || t.includes('boulangerie') || t.includes('pourboire') || t.includes('cinéma') || t.includes('grève') || t.includes('férié') || t.includes('association') || t.includes('amis') || t.includes('lgbtq') || t.includes('tabac') || t.includes('alcool') || t.includes('laïcité') || t.includes('codes sociaux') || t.includes('pass culture') || t.includes('resto u') || t.includes('repas')) return 'culture';
  return 'pratique';
}

async function main() {
  // First verify the service key works
  const testRes = await fetch(`${SUPABASE_URL}/rest/v1/lessons?id=eq.4fd3a16d-ead6-4be0-b860-fa37822174a7`, {
    method: 'PATCH',
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json', 'Prefer': 'return=representation' },
    body: JSON.stringify({ video_url: 'https://www.youtube.com/watch?v=P3QEiGEbSjE' })
  });
  const testData = await testRes.json();
  if (!testData.length || testData[0].video_url !== 'https://www.youtube.com/watch?v=P3QEiGEbSjE') {
    console.log('ERROR: Service key update test failed!', testData);
    return;
  }
  console.log('Service key works! Video update confirmed.');

  const lessons = JSON.parse(readFileSync('scripts/all_lessons.json', 'utf8'));
  const courses = JSON.parse(readFileSync('scripts/all_courses.json', 'utf8'));
  const courseMap = {};
  courses.forEach(c => { courseMap[c.id] = c.title; });

  const grouped = {};
  lessons.forEach(l => {
    if (!grouped[l.course_id]) grouped[l.course_id] = [];
    grouped[l.course_id].push(l);
  });

  let total = 0, success = 0, fail = 0;
  const courseIds = Object.keys(grouped);
  console.log(`Processing ${courseIds.length} courses, ${lessons.length} total lessons...`);

  for (const courseId of courseIds) {
    const courseLessons = grouped[courseId];
    const courseTitle = courseMap[courseId] || 'Unknown';
    const theme = getTheme(courseTitle);
    const themeVideos = videosByTheme[theme];

    for (let i = 0; i < courseLessons.length; i++) {
      const lesson = courseLessons[i];
      const videoUrl = themeVideos[i % themeVideos.length];
      total++;

      const status = await updateVideo(lesson.id, videoUrl);
      if (status === 204) {
        success++;
      } else {
        fail++;
        console.log(`FAIL [${courseTitle}] ${lesson.title}: HTTP ${status}`);
      }
    }
    process.stdout.write('.');
  }

  console.log(`\n\n=== DONE ===`);
  console.log(`Total: ${total} | Success: ${success} | Failed: ${fail}`);
}

main().catch(console.error);
