import type {MetadataRoute} from 'next';
import {domains} from '@/data/ppsdr-site';
import {ppsdrArticles} from '@/data/ppsdr-publications-v2';

const site = 'https://www.ppsdr.org';
const staticPages = [
  '/',
  '/a-propos',
  '/notre-histoire',
  '/domaines',
  '/campagne',
  '/pourquoi-nous-soutenir',
  '/partenariat',
  '/contact',
  '/publications',
  '/rapports',
  '/nos-realisations',
  '/mentions-legales',
  '/politique-de-confidentialite',
  '/zones-d-intervention',
];

const paths = [
  ...staticPages,
  ...domains.map(({slug}) => `/domaines/${slug}`),
  ...ppsdrArticles.map(({slug}) => `/publications/${slug}`),
];

function localizedUrl(locale: 'fr' | 'en', path: string) {
  const prefix = locale === 'en' ? '/en' : '';
  return `${site}${prefix}${path === '/' ? '' : path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) => {
    const fr = localizedUrl('fr', path);
    const en = localizedUrl('en', path);
    const alternates = {languages: {fr, en, 'x-default': fr}};
    const isHome = path === '/';
    const isDomain = path.startsWith('/domaines');
    const isArticle = path.startsWith('/publications/');
    const priority = isHome ? 1 : isDomain ? 0.8 : isArticle ? 0.7 : 0.6;
    const changeFrequency = (isHome ? 'weekly' : isArticle ? 'monthly' : 'yearly') as 'weekly' | 'monthly' | 'yearly';
    return [
      {url: fr, alternates, changeFrequency, priority},
      {url: en, alternates, changeFrequency, priority},
    ];
  });
}
