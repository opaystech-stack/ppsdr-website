import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";

export const metadata = { title: "Nos réalisations" };

export default function NosRealisationsPage() {
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Des résultats concrets, sur le terrain">Des chiffres, des lieux, des vies : voici ce que l'action de PPSDR change concrètement.</PageIntro>
    <section className="o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-icon-block__title">En chiffres</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{[
      ["27 %", "de pygmées ont acquis des compétences en alphabétisation"], ["10 220", "certificats d'études primaires obtenus"], ["125 000+", "familles desservies par nos actions"],
      ["30", "concessions communautaires acquises pour les pygmées"], ["500 000", "bénéficiaires de nos écoles, pygmées et non-pygmées"], ["800 000", "personnes formées en agriculture, pygmées et groupes marginalisés"],
    ].map(([value, label]) => <article key={value} className="border-t-4 border-[#ffbb22] pt-4"><strong className="block text-4xl">{value}</strong><p>{label}</p></article>)}</div></div></section>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">Nos réalisations par domaine</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{[
      ["Éducation", "Bourses, écoles, 10 220 certificats", "schoolyard-sunlight.webp"], ["Agriculture", "800 000 formés, 30 concessions, jardins de Goma", "community-harvest-sorting.webp"], ["Santé", "Sensibilisations, dépistages à Walikale, partenariats", "community-workshop.webp"], ["Environnement", "Conservation à Lubero avec les communautés", "rural-meeting-masisi.webp"],
    ].map(([title, text, image]) => <article className="c-icon-card bg-white" key={title}><Image src={`/images/ppsdr/${image}`} alt={title} width={580} height={326} className="w-full aspect-video object-cover"/><div className="p-5"><h3 className="c-icon-block__heading">{title}</h3><p>{text}</p></div></article>)}</div></div></section>
    <section className="c-full-image-with-text o-module no-bottom-margin" style={{ backgroundImage: "url(/images/ppsdr/community-portrait-rural-school.webp)", backgroundPosition: "center", backgroundSize: "cover" }}><div className="c-full-image-with-text__inner o-layout-container"><div className="c-full-image-with-text__content"><h2>L'histoire d'Olivier</h2><p>Boursier PPSDR du primaire au diplôme d'État, puis formé à la Cornerstone Leadership Academy, Olivier prépare aujourd'hui des études en santé publique pour servir sa communauté sur l'île d'Idjwi.</p></div></div></section>
    <section className="c-text-block-wrapper o-module"><div className="o-layout-container max-w-5xl"><h2>Pour aller plus loin</h2><p>Consultez nos rapports d'activités et d'évaluation pour comprendre en détail nos interventions.</p><Link href="/rapports" className="c-readmore-link inline-block mt-4">Voir les rapports</Link></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/faire-un-don" className="c-btn">Soutenir nos réalisations</Link></div></div></section>
  </div>;
}
