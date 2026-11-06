import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Smartphone, Building, Heart, CheckCircle2, ShieldCheck } from "lucide-react";
import { EmailModule } from "@/components/modules/EmailModule";

export const metadata = {
  title: "Faire un don - Soutenir PPSDR ONGD",
  description:
    "En faisant un don, vous contribuez à améliorer le cadre de vie des personnes vulnérables et des populations pygmées en République démocratique du Congo.",
};

const MODES_DE_DON = [
  {
    title: "Dons par Mobile Money",
    icon: Smartphone,
    instruction: "Effectuez votre don directement depuis votre téléphone portable en RDC :",
    details: [
      "M-Pesa (Vodacom) : [NUMÉROS AIRTEL/M-PESA/VODACOM À CONFIRMER]",
      "Airtel Money : [NUMÉROS AIRTEL/M-PESA/VODACOM À CONFIRMER]",
      "Orange Money : [NUMÉROS AIRTEL/M-PESA/VODACOM À CONFIRMER]",
    ],
    note: "Pour tout don par Mobile Money, merci d'envoyer un message de confirmation par SMS ou WhatsApp au +243 997 133 925.",
  },
  {
    title: "Virement bancaire (RDC & International)",
    icon: Building,
    instruction: "Pour les dons institutionnels, mécénats ou virements bancaires internationaux :",
    details: [
      "Titulaire du compte : PPSDR ONGD asbl",
      "Banque : [NOM DE LA BANQUE À CONFIRMER]",
      "Numéro de compte : [COORDONNÉES BANCAIRES À CONFIRMER]",
      "Code Swift / BIC : [CODE SWIFT À CONFIRMER]",
    ],
    note: "Un reçu de don et un certificat de traçabilité vous seront adressés sur simple demande par email à ppsdrcongo@gmail.com.",
  },
];

const IMPACTS_DON = [
  {
    montant: "50 $",
    impact: "Prend en charge les soins de santé de première urgence et les kits d'hygiène pour une famille pygmée sinistrée.",
    image: "/images/ppsdr/community-gathering-pavilion.webp",
    alt: "Soins médicaux communautaires",
  },
  {
    montant: "100 $",
    impact: "Fournit des semences maraîchères et des outils aratoires pour lancer l'autonomie agricole de 5 ménages paysans.",
    image: "/images/ppsdr/community-gathering-pavilion.webp",
    alt: "Agriculture maraîchère paysanne",
  },
  {
    montant: "250 $",
    impact: "Finance les fournitures scolaires, les tenues et l'encadrement en centre de rattrapage pour 10 enfants autochtones.",
    image: "/images/ppsdr/cabbage-harvest.webp",
    alt: "Éducation et rattrapage scolaire",
  },
];

export default function HowToHelpPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-[#373737]">
            <Link href="/" className="hover:text-[#960051]">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-[#403a60]">Faire un don</span>
          </nav>
        </div>
      </div>

      {/* Module 0: c-hero-fullscreen */}
      <div className="relative bg-[#403a60] overflow-hidden lg:min-h-[500px] flex items-center">
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat bg-right"
          style={{
            backgroundImage: `url("/images/ppsdr/community-school-gathering.webp")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#403a60] via-[#403a60]/85 to-transparent lg:w-3/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full z-10">
          <div className="bg-white p-8 sm:p-10 lg:max-w-xl shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#960051] block mb-2">
              Soutien direct aux actions de terrain
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#403a60] leading-tight mb-4">
              Faire un don
            </h1>
            <div className="w-16 h-1 bg-[#960051] mb-6" />
            <p className="text-base sm:text-lg text-[#373737] leading-relaxed mb-6 font-medium">
              « En faisant un don, vous contribuez à améliorer le cadre de vie des personnes vulnérables et des populations pygmées en République démocratique du Congo. »
            </p>
            <Link
              href="#modalites-don"
              className="inline-block bg-[#960051] hover:bg-[#75003f] text-white font-bold text-sm uppercase tracking-wider px-6 py-3 transition-colors shadow-sm"
            >
              Voir les modalités de don
            </Link>
          </div>
        </div>

        {/* Mobile fallback image */}
        <div className="lg:hidden relative w-full aspect-[16/9]">
          <Image
            src="/images/ppsdr/community-school-gathering.webp"
            alt="Community gathered at a rural school"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Module 1: c-cta-basic (Bandeau don) */}
      <section className="py-8 bg-[#960051] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xl sm:text-2xl font-bold text-center sm:text-left">
            « Nous avons besoin de votre soutien pour assurer le bon déroulement de nos activités sur le terrain. »
          </p>
          <a
            href="tel:+243997133925"
            className="bg-white text-[#960051] hover:bg-[#403a60] hover:text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 transition-colors whitespace-nowrap shadow-md"
          >
            Nous appeler (+243 997 133 925)
          </a>
        </div>
      </section>

      {/* Module 2: Section éditoriale */}
      <section className="py-16 bg-white border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[16/10] w-full bg-gray-100 shadow-md overflow-hidden">
              <Image
                src="/images/ppsdr/community-portrait-rural-school.webp"
                alt="Community members and school staff outside a rural school"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#403a60] mb-4">
                Votre soutien change concrètement des vies
              </h2>
              <div className="w-16 h-1 bg-[#960051] mb-6" />
              <p className="text-base sm:text-lg text-[#373737] leading-relaxed mb-4">
                Chaque contribution, qu&apos;elle soit modeste ou importante, est directement investie dans nos programmes communautaires : soins médicaux, approvisionnement en semences maraîchères, fournitures scolaires et formation professionnelle des femmes autochtones.
              </p>
              <p className="text-base text-[#686c74] leading-relaxed">
                PPSDR s&apos;engage à une gestion transparente et rigoureuse des fonds collectés, en concertation directe avec les comités de village et les chefs de campement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Module 3: Modalités de don (Mobile Money & Banque) */}
      <section id="modalites-don" className="py-16 bg-[#f0f1f2] border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#960051] block mb-2">
              Comment contribuer ?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#403a60] mb-4">
              Modalités de versement des dons
            </h2>
            <div className="w-16 h-1 bg-[#960051] mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MODES_DE_DON.map((mode, idx) => {
              const Icon = mode.icon;
              return (
                <div key={idx} className="bg-white border border-[#e5e9e8] p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-[#f0f1f2] text-[#960051] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#403a60] mb-3">
                      {mode.title}
                    </h3>
                    <p className="text-sm text-[#373737] mb-4">
                      {mode.instruction}
                    </p>
                    <ul className="space-y-2 mb-6 bg-[#f0f1f2] p-4 border-l-4 border-[#960051] text-sm font-semibold text-[#403a60]">
                      {mode.details.map((d, dIdx) => (
                        <li key={dIdx}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-[#686c74] italic pt-2 border-t border-gray-100">
                    {mode.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Module 4: Exemples concrets d'impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#403a60] mb-4">
              Exemples d&apos;impact de vos dons
            </h2>
            <div className="w-16 h-1 bg-[#960051] mx-auto mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {IMPACTS_DON.map((item, idx) => (
              <div key={idx} className="bg-[#f0f1f2] border border-[#e5e9e8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[16/10] w-full bg-gray-200 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-3xl font-extrabold text-[#960051] mb-3">
                      {item.montant}
                    </div>
                    <p className="text-sm text-[#373737] leading-relaxed mb-4">
                      {item.impact}
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
