import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { PageIntro, Stats } from "@/components/PpsdrListing";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: params.locale === "en" ? "Our achievements" : "Nos réalisations" };
}

export default function NosRealisationsPage({ params }: { params: { locale: string } }) {
  const en = params.locale === "en";
  const cards = en ? [
    ["Education", "Scholarships, schools and 10,220 certificates", "schoolyard-sunlight.webp"],
    ["Agriculture", "800,000 trained, 30 concessions and Goma gardens", "community-harvest-sorting.webp"],
    ["Health", "Awareness, screenings in Walikale and partnerships", "community-workshop.webp"],
    ["Environment", "Conservation in Lubero alongside communities", "rural-meeting-masisi.webp"],
  ] : [
    ["Éducation", "Bourses, écoles, 10 220 certificats", "schoolyard-sunlight.webp"],
    ["Agriculture", "800 000 formés, 30 concessions, jardins de Goma", "community-harvest-sorting.webp"],
    ["Santé", "Sensibilisations, dépistages à Walikale, partenariats", "community-workshop.webp"],
    ["Environnement", "Conservation à Lubero avec les communautés", "rural-meeting-masisi.webp"],
  ];
  return <main className="c-site-main o-site-container">
    <PageIntro eyebrow="PPSDR" title={en ? "Practical results on the ground" : "Des résultats concrets, sur le terrain"} action={{ href: "/faire-un-don", label: en ? "Donate" : "Faire un don" }}>{en ? "Numbers, places and lives: here is what PPSDR’s work changes in practice." : "Des chiffres, des lieux, des vies : voici ce que l’action de PPSDR change concrètement."}</PageIntro>
    <Stats title={en ? "In numbers" : "En chiffres"} locale={en ? "en" : "fr"}/>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">{en ? "Our achievements by area" : "Nos réalisations par domaine"}</h2><div className="ppsdr-content-card-grid">{cards.map(([title, body, image]) => <article className="ppsdr-content-card" key={title}><Image src={`/images/ppsdr/${image}`} alt={title} width={640} height={360}/><div><h2>{title}</h2><p>{body}</p></div></article>)}</div></div></section>
    <section className="ppsdr-story-feature o-module" style={{ backgroundImage: "linear-gradient(0deg,rgba(17,27,31,.65),rgba(17,27,31,.2)),url(/images/ppsdr/community-portrait-rural-school.webp)" }}><div className="o-layout-container"><article><h2>{en ? "Olivier’s story" : "L’histoire d’Olivier"}</h2><p>{en ? "Supported by PPSDR from primary school through secondary school, then trained at Cornerstone Leadership Academy, Olivier is now preparing to study public health and serve his community on Idjwi Island." : "Boursier PPSDR du primaire au diplôme d’État, puis formé à la Cornerstone Leadership Academy, Olivier prépare aujourd’hui des études en santé publique pour servir sa communauté sur l’île d’Idjwi."}</p></article></div></section>
    <section className="c-text-block-wrapper o-module"><div className="o-layout-container max-w-5xl"><h2>{en ? "Find out more" : "Pour aller plus loin"}</h2><p>{en ? "Read our activity and evaluation reports to learn more about our work." : "Consultez nos rapports d’activités et d’évaluation pour comprendre en détail nos interventions."}</p><Link href="/rapports" className="c-readmore-link inline-block mt-4">{en ? "View reports" : "Voir les rapports"}</Link></div></section>
  </main>;
}
