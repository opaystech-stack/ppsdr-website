import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { EmailModule } from "@/components/modules/EmailModule";

export const metadata = {
  title: "Zones d'intervention en RDC - PPSDR ONGD",
  description:
    "Découvrez les zones d'intervention de PPSDR en République démocratique du Congo : Goma, Île d'Idjwi, Territoire de Lubero et Walikale.",
};

const ZONES_RDC = [
  {
    name: "Île d'Idjwi (Province du Sud-Kivu)",
    antenne: "Antenne de Kisiza — Chefferie Ntambuka",
    focus: "Encadrement des peuples autochtones pygmées, maraîchage, éducation & rattrapage scolaire, aide d'urgence aux familles sinistrées.",
    image: "/images/ppsdr/cabbage-harvest.webp",
    alt: "Actions de PPSDR sur l'île d'Idjwi",
  },
  {
    name: "Territoire de Lubero (Province du Nord-Kivu)",
    antenne: "Concession forestière de Masekeseke",
    focus: "Conservation communautaire des grands singes (gorilles de Grauer, chimpanzés), cartographie participative et sensibilisation contre le braconnage.",
    image: "/images/ppsdr/community-gathering-pavilion.webp",
    alt: "Conservation forestière à Lubero",
  },
  {
    name: "Ville de Goma & Périphérie",
    antenne: "Coordination Générale / Siège National",
    focus: "Réponse à la malnutrition, formation des ménagères à la culture maraîchère hors-sol en période de guerre et coordination humanitaire.",
    image: "/images/ppsdr/community-workshop.webp",
    alt: "Projets maraîchers et nutrition à Goma",
  },
  {
    name: "Zone de santé de Walikale",
    antenne: "Missions conjointes de santé d'urgence",
    focus: "Dépistage rapide de la malnutrition aiguë, assistance nutritionnelle et médicale aux enfants et familles déplacées par les conflits.",
    image: "/images/ppsdr/community-gathering-pavilion.webp",
    alt: "Dépistage nutritionnel à Walikale",
  },
];

export default function WhereWeWorkPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-[#373737]">
            <Link href="/" className="hover:text-[#960051]">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-[#403a60]">Zones d&apos;intervention</span>
          </nav>
        </div>
      </div>

      {/* Module 0: c-hero (Editorial layout) */}
      <div className="bg-white pt-10 pb-8 border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#403a60] tracking-tight mb-4">
            Zones d&apos;intervention
          </h1>
          <div className="w-16 h-1 bg-[#960051] mb-6" />
          <p className="text-lg sm:text-xl text-[#373737] max-w-4xl leading-relaxed mb-6 font-medium">
            PPSDR concentre ses actions en République démocratique du Congo, auprès des peuples autochtones pygmées et des paysans les plus enclavés.
          </p>
          <p className="text-base text-[#686c74] max-w-3xl leading-relaxed">
            Fondée en 2011 à Goma, l&apos;organisation déploie ses équipes sur le terrain dans les zones rurales du Nord-Kivu et du Sud-Kivu, privilégiant les campements isolés qui ne reçoivent que peu d&apos;aide internationale.
          </p>
        </div>
      </div>

      {/* Module 1: Grille des Zones */}
      <section className="py-16 bg-[#f0f1f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#403a60] mb-4">
              Nos bassins d&apos;action prioritaires en RDC
            </h2>
            <div className="w-16 h-1 bg-[#960051] mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ZONES_RDC.map((zone, idx) => (
              <div key={idx} className="bg-white border border-[#e5e9e8] shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/10] w-full bg-gray-200 overflow-hidden">
                    <Image
                      src={zone.image}
                      alt={zone.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-xs font-bold text-[#960051] uppercase mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{zone.antenne}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#403a60] mb-3 group-hover:text-[#960051] transition-colors">
                      {zone.name}
                    </h3>
                    <p className="text-sm text-[#373737] leading-relaxed mb-4">
                      {zone.focus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 2: Présence continue depuis 2011 */}
      <section className="py-16 bg-white border-t border-[#e5e9e8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#960051] block mb-2">
            Ancrage local
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#403a60] mb-4">
            Un ancrage territorial durable
          </h2>
          <div className="w-16 h-1 bg-[#960051] mb-6" />
          <p className="text-base sm:text-lg text-[#373737] leading-relaxed mb-4">
            Contrairement aux interventions d&apos;urgence ponctuelles, PPSDR s&apos;implante sur la durée. Nos animateurs et professionnels de santé communautaire vivent aux côtés des populations et partagent leurs réalités quotidiennes.
          </p>
          <p className="text-base text-[#686c74] leading-relaxed mb-8">
            Cette présence constante renforce la confiance, garantit la pérennité des aménagements agricoles et préserve la dignité des familles autochtones.
          </p>
          <Link
            href="/about-us/our-history"
            className="inline-flex items-center text-sm font-bold text-[#960051] hover:text-[#403a60] transition-colors"
          >
            Découvrir l&apos;histoire de nos implantations <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </section>

      {/* Module 3: Bandeau don */}
      <section className="py-12 bg-[#960051] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl font-bold mb-6">
            Aidez-nous à étendre nos interventions aux campements les plus isolés
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
