import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import './globals.css';

export const metadata: Metadata = {
  title: {template: '%s | PPSDR ONGD', default: 'Autonomiser les communautés rurales vulnérables'},
  description: "Depuis 2011, PPSDR, ONG basée à Goma, accompagne les peuples autochtones pygmées et les communautés rurales vulnérables en RDC par la santé et l’éducation.",
  metadataBase: new URL('https://www.ppsdr.org'),
  icons: {icon: '/images/ppsdr/logo2.png'},
  openGraph: {
    type: 'website',
    siteName: 'PPSDR',
    locale: 'fr_FR',
    images: [{url: '/images/ppsdr/share-card.webp', width: 1200, height: 630, alt: 'PPSDR accompagne les communautés rurales en RDC'}],
  },
  twitter: {card: 'summary_large_image', images: ['/images/ppsdr/share-card.webp']},
};

export default async function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const locale = await getLocale();
  return <html lang={locale}><body className="flex flex-col min-h-screen">{children}</body></html>;
}
