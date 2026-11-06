const fs = require('fs');
const all = JSON.parse(fs.readFileSync('data/inspection_all_pages.json', 'utf8'));

const pages = [
  ['home', 'app/page.tsx'],
  ['about_us', 'app/about-us/page.tsx'],
  ['programmes', 'app/programmes/page.tsx'],
  ['accelerate', 'app/programmes/accelerate/page.tsx'],
  ['stories_news_blogs', 'app/stories-news-blogs/page.tsx'],
  ['single_article', 'app/news/2026/11/sightsavers-pledges-five-eye-health-commitments-ahead-of-global-summit/page.tsx'],
  ['how_to_help', 'app/how-to-help/page.tsx'],
  ['why_donate', 'app/how-to-help/why-donate-to-sightsavers/page.tsx'],
  ['contact_us', 'app/contact-us/page.tsx'],
  ['media_centre', 'app/media-centre/page.tsx'],
  ['where_we_work', 'app/where-we-work/page.tsx'],
  ['our_history', 'app/about-us/our-history/page.tsx'],
  ['appeals', 'app/appeals/make-extraordinary-change/page.tsx'],
  ['faq', 'app/contact-us/frequently-asked-questions/page.tsx'],
  ['404', 'app/not-found.tsx']
];

for (const [key, file] of pages) {
  const sight = all[key];
  console.log(`=== ${key} (${file}) ===`);
  console.log(`  Sightsavers modules: ${sight && sight.modules ? sight.modules.length : 'none'}`);
  if (sight && sight.modules) {
    sight.modules.forEach((m, idx) => {
      const mainClass = (m.classes || []).filter(c => c !== 'o-module' && c !== 'no-bottom-margin').join(' ') || m.tag;
      const h = m.h1 || (m.headings && m.headings[0] ? m.headings[0].text : '');
      console.log(`    M${idx}: ${mainClass} -> "${(h || '').substring(0, 45)}"`);
    });
  }
}
