const fs = require('fs');

if (fs.existsSync('data/pages_raw/appeals.html')) {
  const html = fs.readFileSync('data/pages_raw/appeals.html', 'utf8');
  const bgs = [...html.matchAll(/url\(['"]?([^'"()]+)['"]?\)/gi)].map(m => m[1]);
  console.log('URLs in CSS:', bgs);
  const imgs = [...html.matchAll(/<img[^>]+src=['"]([^'"]+)['"]/gi)].map(m => m[1]);
  console.log('IMG srcs:', imgs);
} else {
  console.log('No data/pages_raw/appeals.html');
}
