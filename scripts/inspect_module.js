const fs = require('fs');

const file = process.argv[2] || 'data/home_modules.json';
const idx = parseInt(process.argv[3] || '0', 10);

const modules = JSON.parse(fs.readFileSync(file, 'utf8'));
const mod = modules.find(m => m.index === idx);
if (mod) {
  console.log(`=== MODULE ${mod.index} (${(mod.classes || []).join('.')}) ===`);
  console.log(mod.html);
} else {
  console.log('Module not found, total:', modules.length);
}
