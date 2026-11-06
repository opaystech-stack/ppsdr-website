import {Link} from "@/i18n/navigation";
import { Accordion } from "@/components/ui/Accordion";
import { PageIntro } from "@/components/PpsdrListing";

export function generateMetadata({params}: {params: {locale: string}}) { return {title: params.locale === "en" ? "Frequently asked questions" : "Questions fréquentes"}; }

export default function FaqPage({params}: {params: {locale: string}}) {
  if (params.locale === 'en') return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Frequently asked questions">Find out more about PPSDR and its work.</PageIntro>
    <section className="c-overview-accordion o-module"><div className="o-layout-container max-w-5xl"><h2 className="c-overview-accordion__title">The organisation</h2><Accordion items={[
      {title:'What is PPSDR?',content:'The Programme for the Promotion of Health and Development in Rural Areas is an organisation founded in Goma in 2011. It supports Indigenous Pygmy peoples and vulnerable farmers in rural areas of the Democratic Republic of the Congo.'},
      {title:'Who leads PPSDR?',content:'MUHINDO MUTHETHE Hénoc, founder, public health professional and 2024 Ashoka Fellow in the Democratic Republic of the Congo.'},
    ]}/></div></section>
    <section className="c-overview-accordion o-module c-ip-block--grey"><div className="o-layout-container max-w-5xl"><h2 className="c-overview-accordion__title">Our work</h2><Accordion items={[
      {title:'What areas do you work in?',content:'Health, agriculture, education, awareness-raising, environment and social justice.'},
      {title:'Where do you work?',content:'North Kivu, South Kivu, Tshopo and Ituri, with headquarters in Goma.'},
    ]}/></div></section>
    <section className="c-overview-accordion o-module"><div className="o-layout-container max-w-5xl"><h2 className="c-overview-accordion__title">Supporting PPSDR</h2><Accordion items={[
      {title:'How can I donate?',content:<>See our donation page. <Link className="c-readmore-link" href="/faire-un-don">Donate</Link></>},
      {title:'Can I volunteer or become a partner?',content:<>[ANSWER TO BE CONFIRMED BY PPSDR] <Link className="c-readmore-link" href="/devenir-partenaire">Become a partner</Link></>},
    ]}/></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/contact" className="c-btn">Another question? Contact us</Link></div></div></section>
  </div>;
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Questions fréquentes">Tout ce que vous voulez savoir sur PPSDR et ses actions.</PageIntro>
    <section className="c-overview-accordion o-module"><div className="o-layout-container max-w-5xl"><h2 className="c-overview-accordion__title">L'organisation</h2><Accordion items={[
      { title: "Qu'est-ce que PPSDR ?", content: "Programmes de Promotion de la Santé et de Développement en Milieux Ruraux : une organisation créée en 2011 à Goma, qui accompagne les peuples autochtones pygmées et les paysans vulnérables des milieux ruraux de la RDC." },
      { title: "Qui dirige PPSDR ?", content: "MUHINDO MUTHETHE Hénoc, fondateur, professionnel de santé publique et Ashoka Fellow RDC 2024." },
    ]}/></div></section>
    <section className="c-overview-accordion o-module c-ip-block--grey"><div className="o-layout-container max-w-5xl"><h2 className="c-overview-accordion__title">Les actions</h2><Accordion items={[
      { title: "Dans quels domaines intervenez-vous ?", content: "Santé, agriculture, éducation, sensibilisation, environnement et justice sociale." },
      { title: "Où intervenez-vous ?", content: "Nord Kivu, Sud Kivu, Tshopo et Ituri, avec un siège à Goma." },
    ]}/></div></section>
    <section className="c-overview-accordion o-module"><div className="o-layout-container max-w-5xl"><h2 className="c-overview-accordion__title">Nous soutenir</h2><Accordion items={[
      { title: "Comment faire un don ?", content: <>Voir la page « Faire un don ». [MOYENS À CONFIRMER PAR LE CLIENT] <Link className="c-readmore-link" href="/faire-un-don">Faire un don</Link></> },
      { title: "Puis-je devenir bénévole ou partenaire ?", content: <>[RÉPONSE À VALIDER PAR LE CLIENT] <Link className="c-readmore-link" href="/devenir-partenaire">Devenir partenaire</Link></> },
    ]}/></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/contact" className="c-btn">Une autre question ? Écrivez-nous</Link></div></div></section>
  </div>;
}
