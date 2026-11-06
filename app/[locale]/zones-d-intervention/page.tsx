import {Link} from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";

export function generateMetadata({params}: {params: {locale: string}}) { return {title: params.locale === "en" ? "Where we work" : "Zones d'intervention"}; }

export default function ZonesPage({params}: {params: {locale: string}}) {
  if (params.locale === 'en') return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Where we work">PPSDR works in four provinces of the Democratic Republic of the Congo: North Kivu, South Kivu, Tshopo and Ituri.</PageIntro>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">Four provinces</h2><div className="grid md:grid-cols-2 gap-6">{[
      ['North Kivu','Goma (headquarters), Idjwi Island (Kisiza, Idjwi Sud), Walikale (Pinga health zone), Lubero (Masekeseke, Amekoni Mange), Beni (Boikene, Ngadi: 2026 displacement emergency).'],
      ['South Kivu','[DETAILS OF ACTIVITIES TO BE CONFIRMED BY PPSDR].'],
      ['Tshopo','East Kivu–Kinshasa corridor; the Kumu community in Bafwasende is involved in conservation.'],
      ['Ituri','[DETAILS OF ACTIVITIES TO BE CONFIRMED BY PPSDR].'],
    ].map(([title,body])=><article key={title} className="c-icon-card bg-white border border-[#ebebef] p-6"><h3 className="c-icon-block__heading">{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="c-icon-block o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-icon-block__title">From our headquarters to remote villages</h2><ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{['Goma headquarters (18 Avenue Osso, Q. Virunga)','Idjwi, Kisiza office and Idjwi Sud education centre','Walikale, four health areas in Pinga','Lubero, Masekeseke and Amekoni Mange concessions, eight awareness sites','Karisimbi and Nyiragongo, vegetable gardens','East Kivu–Kinshasa corridor, community conservation'].map(point=><li key={point} className="c-icon-card bg-white p-5">{point}</li>)}</ul></div></section>
    <section className="c-full-image-with-text o-module" style={{backgroundImage:'url(/images/ppsdr/schoolchildren-brick-school.webp)',backgroundPosition:'center',backgroundSize:'cover'}}><div className="c-full-image-with-text__inner o-layout-container"><div className="c-full-image-with-text__content"><h2>The East Kivu–Kinshasa corridor</h2><p>Our conservation work takes place in the East Kivu–Kinshasa green corridor, a vital area for Grauer’s gorillas, okapi and forest elephants, managed alongside local and Indigenous communities.</p></div></div></section>
    <section className="c-text-block-wrapper o-module c-ip-block--grey"><div className="o-layout-container"><h2>Map</h2><div className="border border-[#ebebef] min-h-48 p-6 bg-white">[MAP OF AREAS TO BE APPROVED BY PPSDR]</div></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/contact" className="c-btn">Contact us</Link></div></div></section>
  </div>;
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Là où nous agissons">PPSDR intervient dans quatre provinces de la RDC : Nord Kivu, Sud Kivu, Tshopo et Ituri.</PageIntro>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">Quatre provinces</h2><div className="grid md:grid-cols-2 gap-6">{[
      ["Nord Kivu", "Goma (siège), île d'Idjwi (Kisiza, Idjwi Sud), Walikale (zone de santé de Pinga), Lubero (Masekeseke, Amekoni Mange), Beni (Boikene, Ngadi : urgence déplacés 2026)."],
      ["Sud Kivu", "[DÉTAIL DES INTERVENTIONS À CONFIRMER PAR LE CLIENT]."],
      ["Tshopo", "Corridor Kivu Est–Kinshasa ; communauté kumu de Bafwasende associée à la conservation."],
      ["Ituri", "[DÉTAIL DES INTERVENTIONS À CONFIRMER PAR LE CLIENT]."],
    ].map(([title, body]) => <article key={title} className="c-icon-card bg-white border border-[#ebebef] p-6"><h3 className="c-icon-block__heading">{title}</h3><p>{body}</p></article>)}</div></div></section>
    <section className="c-icon-block o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-icon-block__title">Du siège aux villages les plus reculés</h2><ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{[
      "Goma, siège (18 Avenue Osso, Q. Virunga)", "Idjwi, antenne de Kisiza et centre éducatif d'Idjwi Sud", "Walikale, 4 aires de santé de Pinga", "Lubero, concessions de Masekeseke et Amekoni Mange, 8 sites de sensibilisation", "Karisimbi et Nyiragongo, jardins potagers", "Corridor Kivu Est–Kinshasa, conservation communautaire",
    ].map((point) => <li key={point} className="c-icon-card bg-white p-5">{point}</li>)}</ul></div></section>
    <section className="c-full-image-with-text o-module" style={{ backgroundImage: "url(/images/ppsdr/schoolchildren-brick-school.webp)", backgroundPosition: "center", backgroundSize: "cover" }}><div className="c-full-image-with-text__inner o-layout-container"><div className="c-full-image-with-text__content"><h2>Le corridor Kivu Est–Kinshasa</h2><p>Nos actions de conservation se déploient dans le corridor vert Kivu Est–Kinshasa, un espace vital pour les gorilles de Grauer, les okapis et les éléphants de forêt, géré avec les communautés locales et autochtones.</p></div></div></section>
    <section className="c-text-block-wrapper o-module c-ip-block--grey"><div className="o-layout-container"><h2>Carte</h2><div className="border border-[#ebebef] min-h-48 p-6 bg-white">[CARTE DES ZONES À VALIDER PAR LE CLIENT]</div></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/contact" className="c-btn">Nous contacter</Link></div></div></section>
  </div>;
}
