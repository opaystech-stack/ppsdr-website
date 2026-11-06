const { execSync } = require('child_process');

const pages = [
  ['home', 'https://www.sightsavers.org/'],
  ['about-us', 'https://www.sightsavers.org/about-us/'],
  ['programmes', 'https://www.sightsavers.org/programmes/'],
  ['accelerate', 'https://www.sightsavers.org/programmes/accelerate/'],
  ['stories-news-blogs', 'https://www.sightsavers.org/stories-news-blogs/'],
  ['single-article', 'https://www.sightsavers.org/news/2026/11/sightsavers-pledges-five-eye-health-commitments-ahead-of-global-summit/'],
  ['how-to-help', 'https://www.sightsavers.org/how-to-help/'],
  ['why-donate', 'https://www.sightsavers.org/how-to-help/why-donate-to-sightsavers/'],
  ['contact-us', 'https://www.sightsavers.org/contact-us/'],
  ['media-centre', 'https://www.sightsavers.org/media-centre/'],
  ['where-we-work', 'https://www.sightsavers.org/where-we-work/'],
  ['our-history', 'https://www.sightsavers.org/about-us/our-history/'],
  ['appeals', 'https://www.sightsavers.org/appeals/make-extraordinary-change/'],
  ['faq', 'https://www.sightsavers.org/contact-us/frequently-asked-questions/'],
  ['404', 'https://www.sightsavers.org/404/']
];

for (const [id, url] of pages) {
  console.log(`Dumping ${id} (${url})...`);
  try {
    execSync(`python scripts/dump_full_page.py "${url}" "data/${id}_modules.json"`, { stdio: 'inherit' });
  } catch (e) {
    console.error(`Error dumping ${id}:`, e.message);
  }
}
console.log('All pages dumped successfully!');
