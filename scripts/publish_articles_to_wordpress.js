/**
 * Script to publish the two articles to WordPress (https://cms.ppsdr.org)
 * Usage:
 *   node scripts/publish_articles_to_wordpress.js [WP_USERNAME] [WP_APP_PASSWORD]
 * Or via env:
 *   WP_USERNAME=ppsdrong WP_APP_PASSWORD="xxxx xxxx xxxx xxxx" node scripts/publish_articles_to_wordpress.js
 */

const fs = require('fs');
const path = require('path');

const WP_URL = (process.env.NEXT_PUBLIC_WP_URL || 'https://cms.ppsdr.org').replace(/\/$/, '');
const USERNAME = process.argv[2] || process.env.WP_USERNAME || 'ppsdrong';
const PASSWORD = process.argv[3] || process.env.WP_APP_PASSWORD;

if (!PASSWORD) {
  console.log(`
========================================================================
WordPress REST API Publication Helper — PPSDR
========================================================================
Pour poster automatiquement ces deux articles sur WordPress :
1. Connectez-vous à https://cms.ppsdr.org/wp-admin
2. Allez dans Utilisateurs > Profil > "Mots de passe d'application"
3. Créez un mot de passe (ex: "antigravity-bot") et copiez-le
4. Lancez la commande suivante :
   node scripts/publish_articles_to_wordpress.js ${USERNAME} "VOTRE_MOT_DE_PASSE"
========================================================================
`);
}

const articlesToPublish = [
  {
    lang: 'fr',
    title: 'Protection juridique des droits fonciers des pygmées en droit positif congolais (Regard sur la situation des pygmées de la RD Congo)',
    slug: 'protection-juridique-droits-fonciers-pygmees-rdc',
    categories: [9], // Actualités
    excerpt: 'La protection juridique des droits fonciers des autochtones pygmées demeure préoccupante en République Démocratique du Congo. Analyse historique, cadre légal et plaidoyer de PPSDR.',
    featuredImageLocal: '/images/ppsdr/community-meeting-thatched-hut.webp',
    contentFile: path.join(__dirname, '..', 'artifacts', 'article-fr-wordpress-ready.html'),
  },
  {
    lang: 'en',
    title: 'Legal Protection of Land Rights of the Pygmees in Positive Law Congolese (Reflection on the situation of pygmées de la RD Congo)',
    slug: 'legal-protection-land-rights-pygmies-dr-congo',
    categories: [11], // News
    excerpt: 'The legal protection of land rights of the indigenous pygmy remains a concern in the Democratic Republic of the Congo. Historical background, legal framework, and PPSDR advocacy.',
    featuredImageLocal: '/images/ppsdr/community-meeting-thatched-hut.webp',
    contentFile: path.join(__dirname, '..', 'artifacts', 'article-en-wordpress-ready.html'),
  }
];

async function publish() {
  if (!PASSWORD) {
    console.log('Mode préparation : fichiers HTML WordPress générés avec succès dans artifacts/. En attente du mot de passe d’application pour exécution automatique.');
    return;
  }

  const authHeader = 'Basic ' + Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');

  for (const item of articlesToPublish) {
    console.log(`\nPublication de l'article [${item.lang.toUpperCase()}] : "${item.title}"...`);
    
    let contentHtml = '';
    if (fs.existsSync(item.contentFile)) {
      contentHtml = fs.readFileSync(item.contentFile, 'utf8');
    }

    const payload = {
      title: item.title,
      slug: item.slug,
      status: 'publish',
      categories: item.categories,
      excerpt: item.excerpt,
      content: contentHtml,
    };

    try {
      const res = await fetch(`${WP_URL}/wp-json/wp/v2/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader,
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (res.ok) {
        console.log(`✅ Succès ! Article créé avec ID #${data.id}`);
        console.log(`Lien direct CMS : ${data.link}`);
      } else {
        console.error(`❌ Erreur [${res.status}] :`, data.message || data);
      }
    } catch (err) {
      console.error(`❌ Échec de la requête :`, err.message);
    }
  }
}

publish();
