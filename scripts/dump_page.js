const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/inspection_all_pages.json', 'utf8'));

function dumpPage(key) {
  console.log('\n==============================');
  console.log('=== PAGE:', key, '===');
  console.log('==============================');
  const page = data[key];
  if (!page || !page.modules) {
    console.log('No modules or raw:', page);
    return;
  }
  page.modules.forEach((m, i) => {
    console.log(`\n--- Module ${i} [${m.tag}] class: "${m.class}" ---`);
    if (m.bg_image) console.log(`  BG IMAGE: ${m.bg_image}`);
    if (m.headings && m.headings.length) console.log(`  HEADINGS: ${JSON.stringify(m.headings)}`);
    if (m.images && m.images.length) {
      console.log(`  IMAGES (${m.images.length}):`, m.images.map(img => typeof img === 'string' ? img : (img.src || img.url || JSON.stringify(img))));
    }
    if (m.paragraphs && m.paragraphs.length) {
      console.log(`  PARAGRAPHS (${m.paragraphs.length}):`, m.paragraphs.slice(0, 3));
    }
    if (m.links && m.links.length) {
      console.log(`  LINKS (${m.links.length}):`, m.links.slice(0, 5));
    }
  });
}

const keys = process.argv.slice(2);
keys.forEach(k => dumpPage(k));
