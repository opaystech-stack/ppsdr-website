import {Link} from "@/i18n/navigation";
import { Accordion } from "@/components/ui/Accordion";
import { PageIntro } from "@/components/PpsdrListing";

export const metadata = { title: "Questions fréquentes" };

export default function FaqPage() {
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
      { title: "Puis-je devenir bénévole ou partenaire ?", content: <>[RÉPONSE À VALIDER PAR LE CLIENT] <Link className="c-readmore-link" href="/partenariat">Partenariat</Link></> },
    ]}/></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/contact" className="c-btn">Une autre question ? Écrivez-nous</Link></div></div></section>
  </div>;
}
