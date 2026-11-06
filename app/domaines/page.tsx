import {Link} from "@/i18n/navigation";
import { DomainCards, PageIntro } from "@/components/PpsdrListing";

export const metadata = { title: "Domaines d’intervention" };

export default function DomainesPage() {
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
