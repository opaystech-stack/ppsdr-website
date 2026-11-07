import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { PageIntro, Stats } from "@/components/PpsdrListing";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: params.locale === "en" ? "Our areas of work" : "Domaines d’intervention" };
}

const areas = {
  en: [
    ["Health", "Information, prevention and community support for better health protection.", "community-workshop.webp", "sante"],
    ["Agriculture", "Practical activities that strengthen household food autonomy.", "cabbage-harvest.webp", "agriculture"],
    ["Education", "Educational support that encourages learning and social inclusion.", "schoolyard-sunlight.webp", "education"],
    ["Awareness-raising", "Informing and mobilising communities around useful messages.", "community-gathering-pavilion.webp", "sensibilisation"],
    ["Environment", "Protecting living environments and responsibly managing natural resources.", "rural-meeting-masisi.webp", "environnement"],
    ["Social justice", "Supporting vulnerable people, social inclusion and human dignity.", "vibrant-village-portrait.webp", "justice-sociale"],
  ],
  fr: [
    ["Santé", "Prévention, sensibilisation et accompagnement communautaire pour protéger la santé des familles.", "community-workshop.webp", "sante"],
    ["Agriculture", "Des activités agricoles utiles pour renforcer l’autonomie alimentaire des ménages.", "cabbage-harvest.webp", "agriculture"],
    ["Éducation", "Un accompagnement éducatif et pédagogique pour les enfants et les enseignants.", "schoolyard-sunlight.webp", "education"],
    ["Sensibilisation", "Informer, mobiliser et faire participer les communautés autour de messages utiles.", "community-gathering-pavilion.webp", "sensibilisation"],
    ["Environnement", "Protection du cadre de vie et actions locales de préservation.", "rural-meeting-masisi.webp", "environnement"],
    ["Justice sociale", "Accompagnement des personnes vulnérables, inclusion et défense de la dignité.", "vibrant-village-portrait.webp", "justice-sociale"],
  ],
};

export default function DomainesPage({ params }: { params: { locale: "fr" | "en" } }) {
  const en = params.locale === "en";
  const cards = areas[params.locale];
  const steps = en ? ["Listen to community needs", "Build solutions that fit", "Move forward together"] : ["Écoutons les besoins des communautés", "Construisons des solutions adaptées", "Avançons ensemble vers le changement"];
  return <main className="c-site-main o-site-container">
    <PageIntro eyebrow="PPSDR" title={en ? "Six areas of work, one shared ambition" : "Six terrains d'action, une même ambition"} image="community-gathering-blue-skies.webp" action={{ href: "/faire-un-don", label: en ? "Donate" : "Faire un don" }}>{en ? "Health, agriculture, education, awareness-raising, environment and social justice: PPSDR works where communities’ needs are greatest." : "Santé, agriculture, éducation, sensibilisation, environnement, justice sociale : PPSDR intervient là où les besoins des communautés sont les plus grands."}</PageIntro>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">{en ? "Our areas of work" : "Nos domaines d’intervention"}</h2><div className="ppsdr-content-card-grid">{cards.map(([title, body, image, slug]) => <Link href={`/domaines/${slug}`} key={slug} className="ppsdr-content-card"><Image src={`/images/ppsdr/${image}`} alt={`${title}: PPSDR community work`} width={640} height={360}/><div><h2>{title}</h2><p>{body}</p><span>{en ? "Read more →" : "Lire plus →"}</span></div></Link>)}</div></div></section>
    <section className="ppsdr-numbered-steps o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">{en ? "Step-by-step support" : "Un accompagnement pas à pas"}</h2><div className="grid md:grid-cols-3 gap-7">{steps.map((title, i) => <article className="ppsdr-numbered-step" key={title}><strong>0{i + 1}</strong><h3>{title}</h3></article>)}</div></div></section>
    <Stats title={en ? "What our work changes in practice" : "Ce que nos domaines changent concrètement"} locale={params.locale}/>
  </main>;
}
