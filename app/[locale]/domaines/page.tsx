import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { DomainCards, PageIntro } from "@/components/PpsdrListing";

export function generateMetadata({params}: {params: {locale: string}}) { return {title: params.locale === "en" ? "Our areas of work" : "Domaines d’intervention"}; }

export default function DomainesPage({params}: {params: {locale: string}}) {
  if (params.locale === 'en') return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Six areas of work, one shared ambition">Health, agriculture, education, awareness-raising, environment and social justice: PPSDR works where communities’ needs are greatest.</PageIntro>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">Our areas of work</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{[
      ['Health','Information, prevention and community support for better health protection.','community-workshop.webp','sante'],['Agriculture','Practical activities that strengthen household food autonomy.','cabbage-harvest.webp','agriculture'],['Education','Educational support that encourages learning and social inclusion.','schoolyard-sunlight.webp','education'],['Awareness-raising','Informing and mobilising communities around useful messages.','community-gathering-pavilion.webp','sensibilisation'],['Environment','Protecting living environments and responsibly managing natural resources.','rural-meeting-masisi.webp','environnement'],['Social justice','Supporting vulnerable people, social inclusion and human dignity.','vibrant-village-portrait.webp','justice-sociale']
    ].map(([title,body,image,slug])=><Link href={`/domaines/${slug}`} key={slug} className="c-icon-card bg-white border border-[#ebebef]"><Image src={`/images/ppsdr/${image}`} alt="" width={580} height={326} className="w-full aspect-video object-cover"/><div className="p-5"><h3 className="c-icon-block__heading">{title}</h3><p>{body}</p></div></Link>)}</div></div></section>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">Step-by-step support</h2><div className="grid md:grid-cols-3 gap-7">{['Listen to community needs','Build solutions that fit','Move forward together'].map((title,i)=><article className="c-icon-card" key={title}><strong className="text-4xl text-[#ffbb22]">0{i+1}</strong><h3 className="c-icon-block__heading mt-4">{title}</h3></article>)}</div></div></section>
    <section className="o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-icon-block__title">What our work changes in practice</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{['800,000 people trained in agriculture','10,220 primary school certificates','27% of Pygmy people can read and write','30 community concessions acquired'].map(item=><p key={item} className="border-t-4 border-[#ffbb22] pt-4">{item}</p>)}</div></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><h2>Donate</h2><Link href="/faire-un-don" className="c-btn">Donate</Link><Link href="/contact" className="c-btn ml-3">Contact us</Link></div></div></section>
  </div>;
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Six terrains d'action, une même ambition">Santé, agriculture, éducation, sensibilisation, environnement, justice sociale : PPSDR intervient là où les besoins des communautés sont les plus grands.</PageIntro>
    <DomainCards title="Nos domaines d'intervention" showReadMore={false} />
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">Un accompagnement pas à pas</h2><div className="grid md:grid-cols-3 gap-7">{[
      ["Écoutons les besoins des communautés", ""], ["Construisons des solutions adaptées", ""], ["Avançons ensemble vers le changement", ""],
    ].map(([title], i) => <article className="c-icon-card" key={title}><strong className="text-4xl text-[#ffbb22]">0{i + 1}</strong><h3 className="c-icon-block__heading mt-4">{title}</h3></article>)}</div></div></section>
    <section className="o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-icon-block__title">Ce que nos domaines changent concrètement</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{[
      "800 000 personnes formées en agriculture", "10 220 certificats d'études primaires", "27 % de pygmées alphabétisés", "30 concessions communautaires acquises",
    ].map((item) => <p key={item} className="border-t-4 border-[#ffbb22] pt-4">{item}</p>)}</div></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><h2>Faire un don</h2><Link href="/faire-un-don" className="c-btn">Faire un don</Link><Link href="/contact" className="c-btn ml-3">Nous contacter</Link></div></div></section>
  </div>;
}
