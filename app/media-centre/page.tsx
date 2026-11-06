import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, FileText, Download, ShieldCheck, Mail, Phone } from "lucide-react";
import { EmailModule } from "@/components/modules/EmailModule";

export const metadata = {
  title: "Rapports & documents officiels - PPSDR ONGD",
  description:
    "Consultez et ouvrez les documents, rapports d'activités et cartographies participatives disponibles de PPSDR en RDC.",
};

const RAPPORTS = [
  {
    title: "La collaboration étroite entre Organisation de Développement est la clé de réussite pour tout développement communautaire",
    region: "Île d'Idjwi — Chefferie Ntambuka",
    excerpt:
      "Grâce à la collaboration entre PPSDR et la Chefferie Ntambuka dans l'île d'Idjwi, les impacts sont visibles dans l'agriculture avec les autochtones pygmées et paysans vulnérables : amélioration des rendements, structuration des champs communautaires et autonomie vivrière.",
    date: "2024-2025",
    pdfStatus: "[PDF DU RAPPORT À TÉLÉCHARGER / À VENIR]",
    image: "/images/ppsdr/cabbage-harvest.webp",
    alt: "Agriculture communautaire à Idjwi",
  },
  {
    title: "Rapport de cartographie communautaire et participative de la concession forestière de Masekeseke (Lubero, Nord-Kivu, RDC). Projet gorilles/pangolins.",
    region: "Territoire de Lubero — Nord-Kivu",
    excerpt:
      "La mission menée par l'équipe du PPSDR s'inscrit dans le projet de protection des gorilles de Grauer, des chimpanzés (Pan troglodytes) et des pangolins géants, associant la délimitation participative des terroirs traditionnels autochtones et la surveillance écosystémique.",
    date: "2025",
    pdfStatus: "[PDF DU RAPPORT À TÉLÉCHARGER / À VENIR]",
    image: "/images/ppsdr/rural-meeting-masisi.webp",
    alt: "Cartographie participative et conservation forestière",
  },
  {
    title: "Rapport d'activités de la protection des Grands singes (Gorilles) dans la Forêt de MASEKESEKE en Luberon, Province du Nord kivu, RDC avec les communautés autochtones.",
    region: "Forêt de Masekeseke — Lubero",
    excerpt:
      "Dans le cadre de la protection de l'environnement, PPSDR met en œuvre des actions de conservation communautaire des gorilles en partenariat direct avec les populations autochtones pygmées pour éradiquer le braconnage et valoriser les droits coutumiers.",
    date: "2025-2026",
    pdfStatus: "[PDF DU RAPPORT À TÉLÉCHARGER / À VENIR]",
    image: "/images/ppsdr/community-portrait-rural-school.webp",
    alt: "Patrouilles communautaires et sensibilisation à Lubero",
  },
  {
    title: "Rapport de Field visite d'Ashoka à PPSDR 2024",
    region: "Évaluation institutionnelle",
    excerpt:
      "L'organisation PPSDR a reçu une évaluation d'impact par ASHOKA pendant le processus d'élection des ASHOKA FELLOW en RDC l'année 2024. Le rapport consacre la pertinence de l'approche d'encadrement des peuples autochtones.",
    date: "2024",
    pdfStatus: "[PDF DU RAPPORT À TÉLÉCHARGER / À VENIR]",
    image: "/images/ppsdr/community-portrait-rural-school.webp",
    alt: "Visite d'évaluation Ashoka Fellows",
  },
];

export default function MediaCentrePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-[#373737]">
            <Link href="/" className="hover:text-[#960051]">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-[#403a60]">Rapports & documents</span>
          </nav>
        </div>
      </div>

      {/* Module 0: c-hero (Editorial layout) */}
      <div className="bg-white pt-10 pb-8 border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#403a60] tracking-tight mb-4">
            Rapports & documents
          </h1>
          <div className="w-16 h-1 bg-[#960051] mb-6" />
          <p className="text-lg sm:text-xl text-[#373737] max-w-4xl leading-relaxed mb-6 font-medium">
            Consultez et ouvrez les documents disponibles dans un format plus lisible et plus responsive.
          </p>
          <div className="p-4 bg-[#f0f1f2] border-l-4 border-[#006f62] text-sm text-[#373737] flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
            <div>
              <p><strong>Secrétariat de publication :</strong> Direction générale PPSDR, Goma, RDC</p>
              <p><strong>Demandes de documents spécifiques :</strong> ppsdrcongo@gmail.com</p>
            </div>
            <div>
              <a
                href="mailto:ppsdrcongo@gmail.com"
                className="inline-flex items-center text-[#960051] font-bold hover:underline"
              >
                <Mail className="w-4 h-4 mr-1.5" /> ppsdrcongo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Module 1: Grille des Rapports */}
      <section className="py-16 bg-[#f0f1f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {RAPPORTS.map((rap, idx) => (
              <div key={idx} className="bg-white border border-[#e5e9e8] shadow-sm grid grid-cols-1 lg:grid-cols-12 overflow-hidden items-center">
                <div className="relative aspect-[16/10] lg:col-span-4 bg-gray-200 min-h-[220px]">
                  <Image
                    src={rap.image}
                    alt={rap.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:col-span-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#960051] uppercase mb-2">
                      <span>{rap.region}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500">{rap.date}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#403a60] mb-3 leading-snug">
                      {rap.title}
                    </h2>
                    <p className="text-sm text-[#373737] leading-relaxed mb-6">
                      {rap.excerpt}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#960051] bg-red-50 px-3 py-1.5 border border-red-200">
                      {rap.pdfStatus}
                    </span>
                    <a
                      href="mailto:ppsdrcongo@gmail.com?subject=Demande de document"
                      className="inline-flex items-center text-xs font-bold text-[#403a60] hover:text-[#960051] transition-colors"
                    >
                      Demander le document <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 2: Bandeau don */}
      <section className="py-12 bg-[#960051] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl font-bold mb-6">
            Votre soutien permet de documenter et pérenniser nos actions de terrain
          </p>
          <Link
            href="/how-to-help/why-donate-to-sightsavers"
            className="inline-block bg-white text-[#960051] hover:bg-[#403a60] hover:text-white font-extrabold px-8 py-3.5 text-sm uppercase tracking-wider transition-colors shadow-md"
          >
            Faire un don
          </Link>
        </div>
      </section>

      {/* Email Module */}
      <EmailModule />
    </div>
  );
}
