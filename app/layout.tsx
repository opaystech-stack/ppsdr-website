import type {Metadata} from 'next';
import {getLocale} from 'next-intl/server';
import './globals.css';

export const metadata: Metadata = {
  title: {template: '%s | PPSDR ONGD', default: 'Autonomiser les communautés rurales vulnérables'},
  description: "Depuis 2011, PPSDR œuvre aux côtés des peuples autochtones pygmées et des paysans vulnérables de la RDC pour améliorer leur bien-être, favoriser l'accès à l'éducation et renforcer leur autonomie.",
  metadataBase: new URL('https://www.ppsdr.org'),
  icons: {icon: '/images/logo-ppsdr.png'},
};

export default async function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const locale = await getLocale();
  return <html lang={locale}><body className="flex flex-col min-h-screen">{children}</body></html>;
}
