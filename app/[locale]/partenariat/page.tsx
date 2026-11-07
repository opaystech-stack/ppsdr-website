import Image from "next/image";
import { PageIntro } from "@/components/PpsdrListing";
import { ContactForm } from "@/components/ContactForm";

const partners = [["PROLASA","logo-prolasa.png"],["Ashoka","logo-ashoka.png"],["FAO","logo-fao.png"],["MEDIHELP","logo-medihelp.png"],["Catalyst 2030","logo-catalyst-2030.png"],["AMA","logo-ama.png"],["OENDDF","logo-oenddf.png"],["ALHI","logo-alhi.png"],["La Maison de l'Artemisia","logo-maison-artemisia.png"],["SESAM","logo-sesam.webp"]];

export function generateMetadata({params}: {params: {locale: string}}) { return {title: params.locale === "en" ? "Partnership" : "Partenariat"}; }

export default function PartnershipPage({params}: {params: {locale: string}}) {
  const en = params.locale === "en";
  const items = en ? ["Fund field activities (health, education and agriculture).", "Equip our teams and centres (materials, schools and health centres).", "Extend our work to new communities."] : ["Financer les activités de terrain (santé, éducation, agriculture).", "Équiper nos équipes et nos centres (matériel, écoles, centres de santé).", "Étendre nos zones d'intervention à de nouvelles communautés."];
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title={en ? "Partnership" : "Partenariat"} image="partnership-community-farm-visit.jpg" action={{ href: "/faire-un-don", label: en ? "Donate" : "Faire un don" }}>{en ? "Together, we can go further for rural communities in the Democratic Republic of the Congo." : "Ensemble, allons plus loin pour les communautés rurales de la RDC."}</PageIntro>
    <section className="c-icon-block o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-icon-block__title">{en ? "Moving forward together" : "Ils avancent avec nous"}</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">{partners.map(([name,file])=><div key={name} className="min-h-28 border border-[#ebebef] bg-white flex items-center justify-center p-4"><Image src={`/images/partners/${file}`} alt={`Logo ${name}`} width={180} height={100} className="max-h-20 w-auto object-contain"/></div>)}</div></div></section>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">{en ? "What your partnership can support" : "Ce que votre partenariat rend possible"}</h2><div className="ppsdr-content-card-grid">{items.map((text,index)=><article className="ppsdr-content-card ppsdr-image-card" key={text}><Image src={`/images/ppsdr/${["community-workshop.webp","schoolyard-sunlight.webp","rural-meeting-masisi.webp"][index]}`} alt={text} width={640} height={360}/><div><strong className="ppsdr-card-number">0{index+1}</strong><h2>{text}</h2></div></article>)}</div></div></section>
    <section className="c-text-block-wrapper o-module c-ip-block--grey"><div className="o-layout-container max-w-5xl"><h2>{en ? "Propose a partnership" : "Proposez votre partenariat"}</h2><ContactForm locale={en ? "en" : "fr"} defaultSubject="partnership"/></div></section>
  </div>;
}
