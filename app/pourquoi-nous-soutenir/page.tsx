import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { PageIntro, Stats } from "@/components/PpsdrListing";

export const metadata = { title: "Pourquoi soutenir PPSDR" };
const partners = [["PROLASA","logo-prolasa.png"],["Ashoka","logo-ashoka.png"],["FAO","logo-fao.png"],["MEDIHELP","logo-medihelp.png"],["Catalyst 2030","logo-catalyst-2030.png"],["AMA","logo-ama.png"],["OENDDF","logo-oenddf.png"],["ALHI","logo-alhi.png"],["La Maison de l'Artemisia","logo-maison-artemisia.png"],["SESAM","logo-sesam.jpeg"]];

export default function PourquoiPage() {
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Pourquoi soutenir PPSDR">Parce qu'aucune communauté ne devrait être invisible aux yeux de son propre pays.</PageIntro>
    <Stats title="Des chiffres, des vies" />
    <section className="c-full-image-with-text o-module" style={{ backgroundImage: "url(/images/ppsdr/schoolyard-sunlight.webp)", backgroundPosition: "center", backgroundSize: "cover" }}><div className="c-full-image-with-text__inner o-layout-container"><div className="c-full-image-with-text__content"><h2>L'histoire d'Olivier</h2><p>Jeune pygmée boursier de PPSDR du primaire jusqu'au diplôme d'État, Olivier a ensuite intégré la Cornerstone Leadership Academy : un an de formation en leadership, l'anglais, l'informatique. Aujourd'hui, il prépare des études en santé publique pour soigner et servir sa communauté sur l'île d'Idjwi.</p></div></div></section>
    <section className="c-icon-block o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-icon-block__title">14 ans d'action sur le terrain</h2><div className="grid md:grid-cols-3 gap-7">{[
      "Créée en 2011 à Goma, active dans 4 provinces.", "Un fondateur reconnu : Ashoka Fellow RDC 2024.", "Des partenaires internationaux : PROLASA, Ashoka, FAO, MEDIHELP.",
    ].map((item) => <article key={item} className="c-icon-card bg-white p-5"><p>{item}</p></article>)}</div></div></section>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">Ils avancent avec nous</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">{partners.map(([name, file]) => <div key={name} className="min-h-28 border border-[#ebebef] flex items-center justify-center p-4"><Image src={`/images/partners/${file}`} alt={`Logo ${name}`} width={180} height={100} className="max-h-20 w-auto object-contain"/></div>)}</div></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/faire-un-don" className="c-btn">Faire un don</Link></div></div></section>
  </div>;
}
