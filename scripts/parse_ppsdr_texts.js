const fs = require('fs');
const path = require('path');

const files = ['home', 'apropos', 'sante', 'agriculture', 'education', 'publications', 'rapport'];

files.forEach(f => {
  const filePath = `data/ppsdr/${f}.html`;
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf8');
    // extract headings and paragraphs
    const headings = [...html.matchAll(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi)].map(m => m[2].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
    const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
    console.log(`\n=================== ${f.toUpperCase()} ===================`);
    console.log('HEADINGS:', headings);
    console.log('PARAGRAPHS SAMPLE (count: ' + paragraphs.length + '):');
    paragraphs.forEach((p, idx) => console.log(`  [${idx}]: ${p.slice(0, 150)}...`));
  }
});
