import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, ShieldCheck, Heart, AlertCircle, Phone, Smartphone } from "lucide-react";
import { EmailModule } from "@/components/modules/EmailModule";

export const metadata = {
  title: "Appel d'urgence : Soutien aux populations pygmées sinistrées - PPSDR ONGD",
  description:
    "Aide d'urgence pour les familles pygmées sinistrées par les incendies sur l'île d'Idjwi et réponse à la malnutrition en RDC.",
};

const AXES_URGENCE = [
  {
    title: "Soins médicaux & Traitements cutanés",
    description:
      "Les mycoses et infections cutanées nécessitent un traitement spécifique. Les familles pygmées touchées par le sinistre sont particulièrement vulnérables et bénéficient de soins de première ligne.",
    image: "/images/ppsdr/community-gathering-pavilion.webp",
    alt: "Prise en charge médicale des familles pygmées",
  },
  {
    title: "Abris et kits de première nécessité",
    description:
      "Fourniture de bâches d'urgence, couvertures, nattes et ustensiles pour reloger dignement les ménages ayant perdu leur hutte dans les flammes.",
    image: "/images/ppsdr/community-workshop.webp",
    alt: "Évaluation des besoins d'abris à Idjwi",
  },
  {
    title: "Sécurité alimentaire & Nutrition",
    description:
      "Distribution de rations alimentaires d'urgence et suivi nutritionnel régulier des mères allaitantes et des enfants de moins de 5 ans.",
    image: "/images/ppsdr/community-gathering-pavilion.webp",
    alt: "Distribution d'aide alimentaire et nutritionnelle",
  },
  {
    title: "Relance agricole & Semences",
    description:
      "Distribution de semences vivrières et maraîchères de cycle court pour permettre aux familles sinistrées de reconstituer rapidement leur autonomie vivrière.",
    image: "/images/ppsdr/community-harvest-sorting.webp",
    alt: "Relance des champs communautaires pygmées",
  },
];

export default function AppealPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-[#373737]">
            <Link href="/" className="hover:text-[#960051]">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-[#403a60]">Campagne d&apos;urgence Idjwi</span>
          </nav>
        </div>
      </div>

      {/* Module 0: c-donation-form-hero */}
      <div className="relative bg-[#403a60] overflow-hidden lg:min-h-[580px] flex items-center">
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-no-repeat bg-right"
          style={{
            backgroundImage: `url("/images/ppsdr/community-school-gathering.webp")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#403a60] via-[#403a60]/90 to-transparent lg:w-3/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full z-10">
          <div className="bg-white p-8 sm:p-10 lg:max-w-xl shadow-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#960051] block mb-2">
              Appel d&apos;urgence humanitaire
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#403a60] leading-tight mb-4">
              Urgence incendies & vulnérabilité sur l&apos;île d&apos;Idjwi
            </h1>
            <div className="w-16 h-1 bg-[#960051] mb-6" />
            <p className="text-base sm:text-lg text-[#373737] leading-relaxed mb-6">
              « En faisant un don, vous contribuez à améliorer le cadre de vie des personnes vulnérables et des populations pygmées en République démocratique du Congo. »
            </p>

            {/* Donation selection */}
            <div className="bg-[#f0f1f2] p-6 border-l-4 border-[#960051]">
              <p className="text-xs font-bold text-[#403a60] uppercase tracking-wider mb-3">
                Modalités de don Mobile Money (RDC) :
              </p>
              <div className="bg-white p-3 border border-[#e5e9e8] mb-4 text-xs font-semibold text-[#403a60] space-y-1">
                <p>M-Pesa / Airtel Money / Orange Money :</p>
                <p className="text-[#960051] font-bold">[NUMÉROS AIRTEL/M-PESA/VODACOM À CONFIRMER]</p>
                <p className="text-gray-500 font-normal">Contact direct : +243 997 133 925</p>
              </div>
              <Link
                href="/how-to-help/why-donate-to-sightsavers"
                className="block w-full text-center bg-[#960051] hover:bg-[#75003f] text-white text-sm font-bold uppercase tracking-wider py-3.5 transition-colors shadow-sm"
              >
                Faire un don maintenant
              </Link>
            </div>
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

      {/* Module 1: Contexte de l'appel */}
      <section className="py-16 bg-white border-b border-[#e5e9e8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#403a60] mb-4">
            Quelques images des populations pygmées touchées par des incendies sur l&apos;île d&apos;Idjwi
          </h2>
          <div className="w-16 h-1 bg-[#960051] mb-6" />
          <p className="text-base sm:text-lg text-[#373737] leading-relaxed mb-4">
            Les mycoses nécessitent un traitement spécifique. Les familles pygmées touchées par le sinistre sont particulièrement vulnérables, privées de toit et de ressources alimentaires après la destruction de leurs campements.
          </p>
          <p className="text-base sm:text-lg text-[#373737] leading-relaxed">
            Grâce à votre mobilisation, PPSDR achemine sur place des trousses de soins cutanés, de l&apos;eau saine et des vivres de base, tout en accompagnant la reconstruction durable des habitations avec les autorités coutumières de la Chefferie Ntambuka.
          </p>
        </div>
      </section>

      {/* Module 2: Axes d'intervention d'urgence */}
      <section className="py-16 bg-[#f0f1f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#403a60] mb-4">
              Notre plan d&apos;action sur le terrain
            </h2>
            <div className="w-16 h-1 bg-[#960051] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AXES_URGENCE.map((axe, idx) => (
              <div key={idx} className="bg-white border border-[#e5e9e8] shadow-sm flex flex-col justify-between group">
                <div>
                  <div className="relative aspect-[16/10] w-full bg-gray-200 overflow-hidden">
                    <Image
                      src={axe.image}
                      alt={axe.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#403a60] mb-3 group-hover:text-[#960051] transition-colors">
                      {axe.title}
                    </h3>
                    <p className="text-sm text-[#373737] leading-relaxed">
                      {axe.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 3: Bandeau don d'urgence */}
      <section className="py-12 bg-[#960051] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            « Nous avons besoin de votre soutien pour assurer le bon déroulement de nos activités sur le terrain. »
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6" />
          <p className="text-lg text-white/95 max-w-2xl mx-auto mb-8">
            Votre générosité permet de sauver des vies, de soulager la souffrance des enfants et de restaurer la dignité des familles pygmées en RDC.
          </p>
          <Link
            href="/how-to-help/why-donate-to-sightsavers"
            className="inline-block bg-white text-[#960051] hover:bg-[#403a60] hover:text-white font-extrabold text-sm uppercase tracking-wider px-10 py-4 transition-colors shadow-md"
          >
            Faire un don maintenant
          </Link>
        </div>
      </section>

      {/* Email Module */}
      <EmailModule />
    </div>
  );
}
