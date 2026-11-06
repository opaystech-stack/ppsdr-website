const { chromium } = require("C:/Users/lamsa/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright");

const routes = [
  "/", "/a-propos", "/domaines", "/domaines/sante", "/domaines/agriculture", "/domaines/education",
  "/domaines/sensibilisation", "/domaines/environnement", "/domaines/justice-sociale", "/nos-realisations",
  "/devenir-partenaire", "/faire-un-don", "/publications", "/publications/pourquoi-ppsdr-agit",
  "/publications/sommet-ashoka-nairobi-2025", "/publications/communautes-biodiversite",
  "/publications/malnutrition-securite-alimentaire-goma", "/publications/protection-grands-singes-lubero",
  "/publications/bourse-cornerstone-academie", "/publications/deplaces-pygmees-boikene-beni",
  "/publications/attaque-ngadi-beni", "/publications/alerte-ebola-rdc", "/publications/inondations-ruwenzori",
  "/zones-d-intervention", "/contact", "/rapports", "/campagne", "/notre-histoire", "/pourquoi-nous-soutenir",
];
const widths = [1440, 1920, 768, 375, 390, 430];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  const errors = [];
  const badImages = [];
  const metrics = [];
  page.on("response", (res) => { if (res.status() >= 400 && /\.(?:png|jpe?g|webp|svg)(?:\?|$)/i.test(res.url())) badImages.push(`${res.status()} ${res.url()}`); });
  for (const route of routes) {
    for (const width of [1440, 375]) {
      await page.setViewportSize({ width, height: 900 });
      const response = await page.goto(`http://localhost:3000${route}`, { waitUntil: "networkidle" });
      if (!response || response.status() >= 400) errors.push(`${route} returned ${response?.status()}`);
      await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += innerHeight) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); } window.scrollTo(0, 0); });
      await page.waitForTimeout(120);
      const pageCheck = await page.evaluate(() => ({
        path: location.pathname,
        width: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        images: [...document.images].map(i => { const r=i.getBoundingClientRect(); return { src: i.currentSrc || i.src, ok: i.complete && i.naturalWidth > 0, visible: r.width > 0 && r.height > 0 }; }).filter(i => i.visible && i.src),
      }));
      if (pageCheck.scrollWidth > pageCheck.width) errors.push(`${route} at ${width}px horizontal overflow ${pageCheck.scrollWidth}/${pageCheck.width}`);
      for (const image of pageCheck.images) if (!image.ok) errors.push(`${route} at ${width}px unloaded image ${image.src}`);
    }
  }
  const homeSizes = [];
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
    homeSizes.push(await page.evaluate(() => ({ width: innerWidth, page: document.documentElement.scrollWidth, hero: document.querySelector(".c-hero-fullscreen__mobile-image img")?.currentSrc })));
  }
  console.log(JSON.stringify({ routesChecked: routes.length, responsiveWidths: homeSizes, routeFailures: errors, imageErrors: [...new Set(badImages)] }, null, 2));
  await browser.close();
  if (errors.length || badImages.length) process.exitCode = 1;
})();
