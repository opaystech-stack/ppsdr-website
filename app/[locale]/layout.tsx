import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {headers} from 'next/headers';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {DonationModalManager} from '@/components/DonationModalManager';
import {DonationBannerInjector} from '@/components/ui/DonationBannerInjector';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const locale = params.locale;
  const pathname = headers().get('x-ppsdr-pathname') || '/';
  const pathWithoutLocale = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  const frenchPath = pathWithoutLocale.endsWith('/') && pathWithoutLocale !== '/' ? pathWithoutLocale.slice(0, -1) : pathWithoutLocale;
  const englishPath = `/en${frenchPath === '/' ? '' : frenchPath}`;
  const canonical = locale === 'en' ? englishPath : frenchPath;
  const base = 'https://www.ppsdr.org';
  const frenchNames: Record<string, string> = {'/':'Accueil PPSDR','/a-propos':'À propos de PPSDR','/notre-histoire':'Notre histoire','/domaines':'Domaines d’intervention','/domaines/sante':'Santé communautaire','/domaines/agriculture':'Agriculture durable','/domaines/education':'Éducation inclusive','/domaines/sensibilisation':'Sensibilisation communautaire','/domaines/environnement':'Environnement et conservation','/domaines/justice-sociale':'Justice sociale et inclusion','/faire-un-don':'Faire un don à PPSDR','/pourquoi-nous-soutenir':'Pourquoi soutenir PPSDR','/partenariat':'Partenariat avec PPSDR','/contact':'Contacter PPSDR','/publications':'Actualités PPSDR','/rapports':'Rapports PPSDR','/nos-realisations':'Réalisations de PPSDR','/mentions-legales':'Mentions légales','/politique-de-confidentialite':'Confidentialité','/zones-d-intervention':'Zones d’intervention'};
  const englishNames: Record<string, string> = {'/':'PPSDR home','/a-propos':'About PPSDR','/notre-histoire':'Our history','/domaines':'Our areas of work','/domaines/sante':'Community health','/domaines/agriculture':'Sustainable agriculture','/domaines/education':'Inclusive education','/domaines/sensibilisation':'Community awareness','/domaines/environnement':'Environment and conservation','/domaines/justice-sociale':'Social justice and inclusion','/faire-un-don':'Donate to PPSDR','/pourquoi-nous-soutenir':'Why support PPSDR','/partenariat':'Partner with PPSDR','/contact':'Contact PPSDR','/publications':'PPSDR news and stories','/rapports':'PPSDR reports','/nos-realisations':'PPSDR achievements','/mentions-legales':'Legal notice','/politique-de-confidentialite':'Privacy policy','/zones-d-intervention':'Where we work'};
  const routeName = (locale === 'en' ? englishNames : frenchNames)[frenchPath] || frenchPath.split('/').filter(Boolean).map((part) => part.replaceAll('-', ' ')).join(' · ');
  const pageTitle = locale === 'en' ? `${routeName} | PPSDR community programmes in DR Congo` : `${routeName} | PPSDR : développement rural en RDC`;
  const pageDescription = locale === 'en'
    ? `${routeName}: PPSDR supports Indigenous Pygmy peoples and vulnerable communities through practical health, education and sustainable development programmes in DR Congo.`
    : `${routeName} : PPSDR accompagne les peuples autochtones pygmées et les communautés rurales en RDC par la santé, l’éducation et le développement durable.`;
  return {
    title: {absolute: locale === 'fr' && frenchPath === '/' ? 'Soutenir les communautés rurales en RDC | PPSDR ONGD' : pageTitle},
    description: pageDescription,
    alternates: {canonical: `${base}${canonical}`, languages: {fr: `${base}${frenchPath}`, en: `${base}${englishPath}`, 'x-default': `${base}${frenchPath}`}},
    openGraph: {url: `${base}${canonical}`, title: pageTitle, description: pageDescription, type: 'website', images: [{url: `${base}/images/ppsdr/share-card.webp`, width: 1200, height: 630, alt: 'PPSDR accompagne les communautés rurales en RDC'}]},
    twitter: {card: 'summary_large_image', title: pageTitle, description: pageDescription, images: [`${base}/images/ppsdr/share-card.webp`]},
  };
}

export default async function LocaleLayout({children, params}: Readonly<{children: React.ReactNode; params: {locale: string}}>) {
  const {locale} = params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  return <NextIntlClientProvider messages={messages}>
    <Header />
    <main className="flex-grow"><DonationModalManager>{children}</DonationModalManager><DonationBannerInjector/></main>
    <Footer />
  </NextIntlClientProvider>;
}
