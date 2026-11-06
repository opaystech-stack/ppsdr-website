import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | PPSDR ONGD",
    default: "PPSDR ONGD | Autonomiser les Pygmés et les communautés rurales vulnérables",
  },
  description:
    "Depuis 2011, PPSDR œuvre aux côtés des peuples autochtones pygmées et des paysans vulnérables de la RDC pour améliorer leur bien-être, favoriser l'accès à l'éducation et renforcer leur autonomie.",
  metadataBase: new URL("https://www.ppsdr.org"),
  icons: {
    icon: "/images/logo-ppsdr.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
