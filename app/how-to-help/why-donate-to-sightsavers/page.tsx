import React from "react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { ChevronRight, ArrowRight, ShieldCheck, Heart, Users, CheckCircle2, Award } from "lucide-react";
import { EmailModule } from "@/components/modules/EmailModule";

export const metadata = {
  title: "Pourquoi donner à PPSDR ? - Transparence & Impact en RDC",
  description:
    "En faisant un don, vous contribuez à améliorer le cadre de vie des personnes vulnérables et des populations pygmées en République démocratique du Congo.",
};

const STATS_IMPACT = [
  {
    number: "100%",
    label: "Des actions orientées directement vers les populations pygmées et paysannes les plus isolées.",
  },
  {
    number: "3+",
    label: "Régions couvertes par nos équipes de terrain (Nord-Kivu, Sud-Kivu Idjwi, Lubero).",
  },
  {
    number: "2011",
    label: "Plus de 15 années d'engagement sans interruption au service des communautés vulnérables.",
  },
];

const ENGAGEMENTS_TRANSPARENCE = [
  {
    title: "Proximité et écoute du terrain",
    text: "Toutes nos actions sont décidées avec l'accord et la participation active des chefs de campement et des communautés bénéficiaires.",
    image: "/images/ppsdr/rural-meeting-masisi.webp",
    alt: "Échanges communautaires avec les populations autochtones",
  },
  {
    title: "Évaluations de terrain indépendantes",
    text: "Nos activités font l'objet de visites d'évaluation régulières par des partenaires extérieurs de référence, dont PROLASA Canada et le réseau international ASHOKA.",
    image: "/images/ppsdr/ashoka-changemakers-group.webp",
    alt: "Délégation PROLASA Canada en visite d'évaluation à Idjwi",
  },
  {
    title: "Traçabilité rigoureuse des dons",
    text: "Chaque donateur peut recevoir sur demande un rapport photographique et narratif justifiant l'utilisation exacte de sa contribution sur le terrain.",
    image: "/images/ppsdr/schoolyard-sunlight.webp",
    alt: "Suivi opérationnel des actions communautaires",
  },
];

export default function WhyDonatePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-[#373737]">
            <Link href="/" className="hover:text-[#960051]">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/how-to-help" className="hover:text-[#960051]">Faire un don</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-[#403a60]">Pourquoi donner à PPSDR ?</span>
          </nav>
        </div>
      </div>

      {/* Module 0: c-hero-fullscreen */}
      <div className="relative bg-[#403a60] overflow-hidden lg:min-h-[500px] flex items-center">
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat bg-right"
          style={{
            backgroundImage: `url("/images/ppsdr/tomato-harvest-maize-field.webp")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#403a60] via-[#403a60]/85 to-transparent lg:w-3/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full z-10">
          <div className="bg-white p-8 sm:p-10 lg:max-w-xl shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#960051] block mb-2">
              Transparence & Efficacité
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#403a60] leading-tight mb-4">
              Pourquoi donner à PPSDR ?
            </h1>
            <div className="w-16 h-1 bg-[#960051] mb-6" />
            <p className="text-base sm:text-lg text-[#373737] leading-relaxed mb-6 font-medium">
              « En faisant un don, vous contribuez à améliorer le cadre de vie des personnes vulnérables et des populations pygmées en République démocratique du Congo. »
            </p>
            <Link
              href="/how-to-help"
              className="inline-block bg-[#960051] hover:bg-[#75003f] text-white font-bold text-sm uppercase tracking-wider px-6 py-3 transition-colors shadow-sm"
            >
              Faire un don maintenant
            </Link>
          </div>
        </div>

        {/* Mobile fallback image */}
        <div className="lg:hidden relative w-full aspect-[16/9]">
          <Image
            src="/images/ppsdr/tomato-harvest-maize-field.webp"
            alt="Farmers harvesting tomatoes beside a maize field"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Module 1: Bandeau d'engagement */}
      <section className="py-8 bg-[#960051] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xl sm:text-2xl font-bold text-center sm:text-left">
            « Votre don soutient directement les familles vulnérables, l&apos;accès aux soins, l&apos;éducation et les activités communautaires sur le terrain. »
          </p>
          <Link
            href="/contact-us"
            className="bg-white text-[#960051] hover:bg-[#403a60] hover:text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 transition-colors whitespace-nowrap shadow-md"
          >
            Nous contacter
          </Link>
        </div>
      </section>

      {/* Module 2: Section où vont vos dons */}
      <section className="py-16 bg-white border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#403a60] mb-4">
                Comment vos dons sont utilisés
              </h2>
              <div className="w-16 h-1 bg-[#960051] mb-6" />
              <p className="text-base sm:text-lg text-[#373737] leading-relaxed mb-4">
                PPSDR n&apos;a pas de structures bureaucratiques coûteuses. L&apos;intégralité des ressources mobilisées est affectée aux besoins réels et urgents identifiés sur le terrain en RDC :
              </p>
              <ul className="space-y-3 text-base text-[#373737] mb-6">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#960051] flex-shrink-0 mt-0.5" />
                  <span>Achat de médicaments d&apos;urgence, pansements et compléments nutritionnels pour les enfants.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#960051] flex-shrink-0 mt-0.5" />
                  <span>Acquisition de semences maraîchères de qualité et d&apos;outils agricoles pour l&apos;autonomie des ménages.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#960051] flex-shrink-0 mt-0.5" />
                  <span>Kits scolaires (cahiers, stylos, uniformes) pour les enfants pygmées des centres de rattrapage.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#960051] flex-shrink-0 mt-0.5" />
                  <span>Appui aux ateliers de coupe et couture et équipement pour l&apos;autonomisation des femmes.</span>
                </li>
              </ul>
            </div>

            <div className="relative aspect-[4/3] w-full bg-gray-100 shadow-md overflow-hidden">
              <Image
                src="/images/ppsdr/community-gathering-pavilion.webp"
                alt="Community meeting under an open-air pavilion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Module 3: Stats blueberry -> Stats PPSDR */}
      <section className="py-16 bg-[#403a60] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Notre impact sur le terrain</h2>
            <div className="w-16 h-1 bg-[#960051] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS_IMPACT.map((stat, idx) => (
              <div key={idx} className="border border-white/20 p-8 text-center flex flex-col items-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#960051] mb-3">
                  {stat.number}
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 4: Témoignage terrain */}
      <section className="relative bg-[#f0f1f2] py-16 border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[16/10] w-full bg-gray-200 overflow-hidden shadow-sm">
              <Image
                src="/images/ppsdr/schoolchildren-brick-school.webp"
                alt="Schoolchildren gathered outside a brick school"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-8">
              <div className="w-12 h-1 bg-[#960051] mb-6" />
              <blockquote className="text-xl sm:text-2xl font-bold text-[#403a60] leading-snug mb-6">
                &laquo; PPSDR accompagne les peuples autochtones pygmées et les communautés vulnérables avec des actions concrètes en santé, éducation, agriculture et autonomie. &raquo;
              </blockquote>
              <p className="text-sm font-semibold text-[#960051] uppercase tracking-wider">
                — Témoignage des comités villageois d&apos;Idjwi Sud
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 5: Modalités de paiement */}
      <section className="py-16 bg-white border-b border-[#e5e9e8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#403a60] mb-4">
              Canaux de versement de vos contributions
            </h2>
            <div className="w-16 h-1 bg-[#960051] mx-auto mb-6" />
          </div>

          <div className="bg-[#f0f1f2] p-8 border border-[#e5e9e8] space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#403a60] mb-2">1. Dons par Mobile Money (RDC)</h3>
              <p className="text-sm text-[#373737] mb-2">
                Airtel Money / M-Pesa / Orange Money : <strong>[NUMÉROS AIRTEL/M-PESA/VODACOM À CONFIRMER]</strong>
              </p>
              <p className="text-xs text-gray-500">
                Contact de confirmation : +243 997 133 925
              </p>
            </div>

            <div className="pt-4 border-t border-[#e5e9e8]">
              <h3 className="text-lg font-bold text-[#403a60] mb-2">2. Virements bancaires internationaux</h3>
              <p className="text-sm text-[#373737] mb-2">
                Coordonnées bancaires de l&apos;ONGD : <strong>[COORDONNÉES BANCAIRES À CONFIRMER]</strong>
              </p>
              <p className="text-xs text-gray-500">
                Email pour attestation de don : ppsdrcongo@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 6: c-discover-more */}
      <section className="py-16 bg-[#f0f1f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#403a60] mb-4">
              Garanties et gouvernance
            </h2>
            <div className="w-16 h-1 bg-[#960051] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENGAGEMENTS_TRANSPARENCE.map((card, idx) => (
              <div key={idx} className="bg-white border border-[#e5e9e8] shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/10] w-full bg-gray-200 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#403a60] mb-3 group-hover:text-[#960051] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[#373737] text-sm leading-relaxed mb-4">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Module */}
      <EmailModule />
    </div>
  );
}
