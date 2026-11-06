import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Award, Calendar, Heart, Shield } from "lucide-react";
import { EmailModule } from "@/components/modules/EmailModule";

export const metadata = {
  title: "Notre histoire - PPSDR ONGD",
  description:
    "Créée en 2011 à Goma par MUHINDO MUTHETHE Hénoc, découvrez les grandes étapes de l'engagement de PPSDR auprès des peuples autochtones pygmées en RDC.",
};

const TIMELINE = [
  {
    year: "2011",
    title: "Création de PPSDR à Goma",
    description:
      "Créée en 2011 à Goma, en République démocratique du Congo, par MUHINDO MUTHETHE Hénoc, professionnel de santé publique, PPSDR (Programmes de Promotion de la Santé et de Développement en Milieux Ruraux) naît de la volonté d'encadrer les peuples autochtones pygmées et les paysans des milieux ruraux les plus marginalisés.",
  },
  {
    year: "2013–2015",
    title: "Premières missions de santé communautaire",
    description:
      "Lancement des premières campagnes sanitaires itinérantes, sensibilisation à l'hygiène de base et aux maladies hydriques, et écoute directe des besoins des familles autochtones dans les campements de brousse.",
  },
  {
    year: "2017",
    title: "Implantation de l'antenne d'Idjwi (Kisiza)",
    description:
      "Installation du bureau d'antenne de Kisiza dans la Chefferie Ntambuka sur l'île d'Idjwi (Sud-Kivu). Lancement du programme pilote d'initiation à l'agriculture en trois phases pour assurer l'autonomie alimentaire durable des ménages pygmées.",
  },
  {
    year: "2020",
    title: "Partenariat avec PROLASA Canada",
    description:
      "Collaboration de terrain avec le Dr Barry Wecker et la délégation de PROLASA Canada, premier partenaire international sur le terrain, permettant de renforcer les consultations médicales et l'assistance humanitaire à Idjwi.",
  },
  {
    year: "2022",
    title: "Alliance avec MEDIHELP SUISSE",
    description:
      "Partenariat pour le Changement systématique : PPSDR et MEDIHELP unissent leurs efforts pour intensifier l'aide aux communautés vulnérables en RDC, réhabiliter des centres de soins et doter les soignants communautaires en médicaments essentiels.",
  },
  {
    year: "2024",
    title: "Élection Ashoka Fellow",
    description:
      "MUHINDO MUTHETHE Hénoc est officiellement élu boursier Ashoka (Ashoka Fellow), consacrant son approche novatrice d'émancipation communautaire et d'intégration citoyenne des peuples autochtones pygmées de la RDC.",
  },
  {
    year: "2025",
    title: "Sommet Ashoka à Nairobi & Réponse à la crise de Goma",
    description:
      "Participation au sommet inaugural des Ashoka Fellows à Nairobi (septembre 2025). Parallèlement, déploiement d'un programme d'urgence de culture maraîchère hors-sol pour répondre à la crise alimentaire et malnutrition dans la ville de Goma touchée par les conflits.",
  },
  {
    year: "2026",
    title: "Conservation communautaire à Masekeseke (Lubero)",
    description:
      "Amplification du projet de cartographie participative et de conservation communautaire des gorilles de Grauer, des chimpanzés et des pangolins géants dans la forêt de Masekeseke avec les populations autochtones du Nord-Kivu.",
  },
];

const ACTIONS_CARDS = [
  {
    title: "Nos domaines d'action",
    text: "Découvrez nos 6 axes prioritaires : santé, agriculture, éducation, métiers, sensibilisation et environnement.",
    image: "/images/ppsdr/community-workshop.webp",
    alt: "Actions de terrain PPSDR",
    href: "/programmes",
  },
  {
    title: "Faire un don",
    text: "Votre don soutient directement les familles vulnérables, l'accès aux soins, l'éducation et les activités communautaires sur le terrain.",
    image: "/images/ppsdr/community-gathering-pavilion.webp",
    alt: "Appui aux familles pygmées",
    href: "/how-to-help/why-donate-to-sightsavers",
  },
  {
    title: "Nous contacter",
    text: "Échangez avec notre coordination nationale à Goma ou avec nos antennes provinciales en RDC.",
    image: "/images/ppsdr/schoolchildren-brick-school.webp",
    alt: "Équipe de coordination PPSDR",
    href: "/contact-us",
  },
];

export default function OurHistoryPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-[#373737]">
            <Link href="/" className="hover:text-[#960051]">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/about-us" className="hover:text-[#960051]">À propos</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-[#403a60]">Notre histoire</span>
          </nav>
        </div>
      </div>

      {/* Module 0: c-default-hero--page */}
      <div className="bg-white pt-10 pb-8 border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#403a60] tracking-tight mb-4">
            Notre histoire
          </h1>
          <div className="w-16 h-1 bg-[#960051] mb-6" />
          <p className="text-lg sm:text-xl text-[#373737] max-w-3xl leading-relaxed">
            Créée en 2011 à Goma par MUHINDO MUTHETHE Hénoc, découvrez les grandes étapes de l&apos;engagement de PPSDR auprès des peuples autochtones pygmées et des paysans vulnérables de la RDC.
          </p>
        </div>
      </div>

      {/* Module 1: The Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-2 border-[#960051] ml-4 sm:ml-8 space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10">
                {/* Timeline node */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#403a60] border-4 border-white flex items-center justify-center text-white shadow">
                  <span className="w-2 h-2 rounded-full bg-[#960051]" />
                </div>

                <div className="bg-[#f0f1f2] p-6 border-l-4 border-[#403a60] shadow-sm">
                  <span className="inline-block text-sm font-extrabold text-[#960051] uppercase tracking-wider mb-1">
                    {item.year}
                  </span>
                  <h2 className="text-2xl font-bold text-[#403a60] mb-3">
                    {item.title}
                  </h2>
                  <p className="text-[#373737] text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 2: c-icon-block */}
      <section className="py-16 bg-[#f0f1f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#403a60] mb-4">
              En savoir plus sur nos actions
            </h2>
            <div className="w-16 h-1 bg-[#960051] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACTIONS_CARDS.map((card, idx) => (
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
                <div className="px-6 pb-6">
                  <Link
                    href={card.href}
                    className="inline-flex items-center text-sm font-bold text-[#960051] hover:text-[#403a60] transition-colors"
                  >
                    Découvrir <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
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
