"use client";

import React, { useState } from "react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { ChevronRight, ChevronDown, Phone, Mail, ArrowRight, HelpCircle } from "lucide-react";
import { EmailModule } from "@/components/modules/EmailModule";

interface FAQItem {
  q: string;
  a: React.ReactNode;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

const FAQ_DATA: FAQCategory[] = [
  {
    category: "Généralités sur PPSDR",
    items: [
      {
        q: "Que signifie le sigle PPSDR et quelle est la mission de l'organisation ?",
        a: (
          <div className="space-y-3">
            <p>
              PPSDR est le sigle de <strong>&laquo; Programmes de Promotion de la Santé et de Développement en Milieux Ruraux &raquo;</strong>. Il s&apos;agit d&apos;une organisation non gouvernementale sans but lucratif de droit congolais.
            </p>
            <p>
              Sa mission est d&apos;encadrer les peuples autochtones pygmées et les paysans vulnérables des milieux ruraux de la République démocratique du Congo afin d&apos;améliorer leur bien-être social, économique et sanitaire.
            </p>
          </div>
        ),
      },
      {
        q: "Qui est le fondateur de PPSDR et quand l'organisation a-t-elle été créée ?",
        a: (
          <div className="space-y-3">
            <p>
              PPSDR a été créée en <strong>2011 à Goma</strong>, en République démocratique du Congo, par <strong>MUHINDO MUTHETHE Hénoc</strong>, professionnel de santé publique et Ashoka Fellow.
            </p>
            <Link href="/about-us/our-history" className="text-[#960051] font-bold hover:underline inline-flex items-center text-sm">
              Découvrir l&apos;histoire de PPSDR <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        ),
      },
      {
        q: "Dans quelles régions de la RDC PPSDR intervient-elle ?",
        a: (
          <div className="space-y-3">
            <p>
              PPSDR intervient principalement dans la province du Nord-Kivu (ville de Goma, territoire de Lubero, zone de santé de Walikale) et dans la province du Sud-Kivu (territoire insulaire d&apos;Idjwi, Chefferie Ntambuka), ainsi qu&apos;à travers le territoire national.
            </p>
            <Link href="/where-we-work" className="text-[#960051] font-bold hover:underline inline-flex items-center text-sm">
              Consulter nos zones d&apos;intervention <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        ),
      },
    ],
  },
  {
    category: "Domaines d'action et méthodologie",
    items: [
      {
        q: "Quels sont les domaines d'intervention prioritaires de PPSDR ?",
        a: (
          <div className="space-y-2">
            <p>PPSDR déploie des actions coordonnées dans 6 domaines essentiels :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Santé communautaire :</strong> information, prévention, dépistage rapide de la malnutrition et accompagnement sanitaire.</li>
              <li><strong>Agriculture :</strong> culture maraîchère hors-sol, champs collectifs et renforcement de l&apos;autonomie vivrière des ménages.</li>
              <li><strong>Éducation :</strong> centres de rattrapage scolaire pour enfants pygmées, fournitures et intégration par le sport.</li>
              <li><strong>Apprentissage des métiers :</strong> ateliers de coupe et couture et émancipation économique des femmes.</li>
              <li><strong>Sensibilisation :</strong> plaidoyer pour les droits fondamentaux des autochtones et lutte contre les discriminations.</li>
              <li><strong>Protection de l&apos;environnement :</strong> conservation communautaire des forêts et des grands singes (gorilles de Grauer, pangolins).</li>
            </ul>
          </div>
        ),
      },
      {
        q: "Quelle est la particularité de votre approche auprès des peuples pygmées ?",
        a: (
          <p>
            L&apos;organisation agit dans une logique de proximité, d&apos;écoute et de renforcement progressif des capacités communautaires. Les peuples autochtones pygmées ne sont pas considérés comme de simples bénéficiaires passifs mais comme les acteurs premiers de leur propre développement, dans le respect strict de leur culture et de leurs savoirs traditionnels.
          </p>
        ),
      },
    ],
  },
  {
    category: "Dons, financements et transparence",
    items: [
      {
        q: "Comment puis-je faire un don à PPSDR ?",
        a: (
          <div className="space-y-3">
            <p>
              &laquo; En faisant un don, vous contribuez à améliorer le cadre de vie des personnes vulnérables et des populations pygmées en République démocratique du Congo. &raquo;
            </p>
            <p>Vous pouvez soutenir nos actions via :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Mobile Money (RDC) :</strong> [NUMÉROS AIRTEL/M-PESA/VODACOM À CONFIRMER] (M-Pesa, Airtel Money, Orange Money)</li>
              <li><strong>Virement bancaire :</strong> [COORDONNÉES BANCAIRES À CONFIRMER]</li>
            </ul>
            <p className="text-xs text-gray-500">Contact direct : +243 997 133 925 / ppsdrcongo@gmail.com</p>
          </div>
        ),
      },
      {
        q: "Comment PPSDR garantit-elle la traçabilité des fonds reçus ?",
        a: (
          <p>
            PPSDR pratique une politique de transparence totale. Les activités font l&apos;objet de visites d&apos;évaluation indépendantes régulières (PROLASA Canada, réseau Ashoka) et chaque donateur institutionnel ou individuel peut recevoir un rapport photographique et financier détaillé de l&apos;affectation de son don.
          </p>
        ),
      },
    ],
  },
  {
    category: "Contact et partenariats",
    items: [
      {
        q: "Comment contacter l'équipe de PPSDR ?",
        a: (
          <div className="space-y-3">
            <p>Vous pouvez nous contacter directement par les canaux suivants :</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Téléphone / WhatsApp :</strong> +243 997 133 925</li>
              <li><strong>E-mails :</strong> ppsdrcongo@gmail.com et ppsdrongdasbl@gmail.com</li>
              <li><strong>Siège :</strong> Goma, Province du Nord-Kivu, République démocratique du Congo</li>
              <li><strong>Réseaux sociaux :</strong> Facebook (https://www.facebook.com/ongd.ppsdr) et YouTube (https://youtube.com/@PPSDRONGDasbl)</li>
            </ul>
          </div>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "0-0": true,
    "2-0": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm text-[#373737]">
            <Link href="/" className="hover:text-[#960051]">Accueil</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/contact-us" className="hover:text-[#960051]">Contact</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-[#403a60]">Foire aux questions (FAQ)</span>
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
              Centre d&apos;aide & Questions fréquentes
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#403a60] leading-tight mb-4">
              Foire aux questions
            </h1>
            <div className="w-16 h-1 bg-[#960051] mb-6" />
            <p className="text-base sm:text-lg text-[#373737] leading-relaxed mb-6 font-medium">
              Trouvez les réponses aux questions les plus fréquemment posées sur les missions, les projets et les modalités de soutien à PPSDR en RDC.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#960051] hover:bg-[#75003f] text-white font-bold text-sm uppercase tracking-wider px-6 py-3 transition-colors shadow-sm"
            >
              Poser une autre question
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

      {/* Accordion Categories */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {FAQ_DATA.map((cat, catIdx) => (
            <div key={catIdx}>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#403a60] mb-4">
                {cat.category}
              </h2>
              <div className="w-16 h-1 bg-[#960051] mb-8" />

              <div className="divide-y divide-[#e5e9e8] border-t border-b border-[#e5e9e8]">
                {cat.items.map((item, itemIdx) => {
                  const id = `${catIdx}-${itemIdx}`;
                  const isOpen = !!openItems[id];
                  return (
                    <div key={itemIdx} className="py-5">
                      <button
                        onClick={() => toggleItem(id)}
                        className="w-full text-left flex items-center justify-between text-base sm:text-lg font-bold text-[#403a60] hover:text-[#960051] transition-colors focus:outline-none"
                      >
                        <span className="pr-4">{item.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 text-[#960051] transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="mt-4 text-sm sm:text-base text-[#373737] leading-relaxed pt-2">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Email Module */}
      <EmailModule />
    </div>
  );
}
