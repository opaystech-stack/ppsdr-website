import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";

export function generateMetadata({params}: {params: {locale: string}}) { return {title: params.locale === "en" ? "Campaign" : "Campagne d'appel"}; }
export default function CampagnePage({ params }: { params: { locale: string } }) {
  const isEnglish = params.locale === "en";
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title={isEnglish ? "[CAMPAIGN TO BE DEFINED BY THE CLIENT]" : "[CAMPAGNE À DÉFINIR PAR LE CLIENT]"}>{isEnglish ? "[CAMPAIGN TO BE DEFINED BY THE CLIENT]" : "[CAMPAGNE À DÉFINIR PAR LE CLIENT]"}</PageIntro>
    <section className="c-full-image-with-text o-module"><div className="o-layout-container"><Image src="/images/ppsdr/community-workshop.webp" alt="Community members taking part in a health workshop" width={1400} height={788} className="w-full aspect-video object-cover"/></div></section>
    <section className="c-text-block-wrapper o-module c-ip-block--grey"><div className="o-layout-container"><h2>{isEnglish ? "Challenge" : "Problématique"}</h2><p>{isEnglish ? "[CONTENT TO BE PROVIDED BY THE CLIENT]" : "[TEXTE CLIENT À FOURNIR]"}</p></div></section>
    <section className="c-text-block-wrapper o-module"><div className="o-layout-container"><h2>{isEnglish ? "Objective" : "Objectif"}</h2><p>{isEnglish ? "[QUANTIFIED OBJECTIVE TO BE PROVIDED BY THE CLIENT]" : "[OBJECTIF CHIFFRÉ À FOURNIR PAR LE CLIENT]"}</p></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/faire-un-don" className="c-btn">{isEnglish ? "Donate" : "Faire un don"}</Link></div></div></section>
  </div>;
}
