import { readFileSync } from 'fs';
const data = JSON.parse(readFileSync('C:/Users/rayan/AppData/Local/Temp/all_lessons.json','utf8'));
const videoMap = {};
data.forEach(l => {
  if (l.video_url) {
    if (!videoMap[l.video_url]) videoMap[l.video_url] = { count: 0, lessons: [] };
    videoMap[l.video_url].count++;
    videoMap[l.video_url].lessons.push(l.title.substring(0,60));
  }
});
console.log('Total lessons:', data.length);
console.log('Lessons with video:', data.filter(l=>l.video_url).length);
console.log('Lessons without video:', data.filter(l=>!l.video_url).length);
console.log('Unique videos:', Object.keys(videoMap).length);
console.log('\n--- Most reused videos (used in 2+ lessons) ---');
Object.entries(videoMap).filter(([,v])=>v.count>=2).sort((a,b)=>b[1].count-a[1].count).forEach(([url,v])=>{
  console.log(v.count+'x:', url);
});
console.log('\n--- Sample of unique video URLs (first 50) ---');
Object.keys(videoMap).sort().slice(0,50).forEach(u => console.log(u));
