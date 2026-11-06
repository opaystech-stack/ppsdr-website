import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";

export const metadata = { title: "Campagne d'appel" };
export default function CampagnePage() {
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="[CAMPAGNE À DÉFINIR PAR LE CLIENT]">[CAMPAGNE À DÉFINIR PAR LE CLIENT]</PageIntro>
    <section className="c-full-image-with-text o-module"><div className="o-layout-container"><Image src="/images/ppsdr/community-workshop.webp" alt="Community members taking part in a health workshop" width={1400} height={788} className="w-full aspect-video object-cover"/></div></section>
    <section className="c-text-block-wrapper o-module c-ip-block--grey"><div className="o-layout-container"><h2>Problématique</h2><p>[TEXTE CLIENT À FOURNIR]</p></div></section>
    <section className="c-text-block-wrapper o-module"><div className="o-layout-container"><h2>Objectif</h2><p>[OBJECTIF CHIFFRÉ À FOURNIR PAR LE CLIENT]</p></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/faire-un-don" className="c-btn">Faire un don</Link></div></div></section>
  </div>;
}
