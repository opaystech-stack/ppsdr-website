import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";
import { ppsdrArticles } from "@/data/ppsdr-publications-v2";

export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Le terrain en images et en récits">Retrouvez les images, comptes rendus et faits marquants des activités menées par PPSDR.</PageIntro>
    <section className="c-discover-more-2 o-module"><div className="o-layout-container"><h2 className="c-discover-more-2__title">Articles récents</h2><div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{ppsdrArticles.map((article) => <Link key={article.slug} href={`/publications/${article.slug}`} className="c-icon-card bg-white border border-[#ebebef]"><Image src={`/images/ppsdr/${article.image}`} alt={article.title} width={580} height={326} className="w-full aspect-video object-cover"/><div className="p-5"><h3 className="c-icon-block__heading">{article.title}</h3>{article.date && <time className="text-sm text-[#686c74]">{article.date}</time>}<p className="mt-3">{article.summary}</p><span className="c-readmore-link mt-4 inline-block">Lire l'article →</span></div></Link>)}</div></div></section>
    <section className="c-text-block-wrapper o-module c-ip-block--grey"><div className="o-layout-container max-w-5xl"><h2>Accueillir, échanger, rendre compte</h2><p>Les publications mettent en valeur les rencontres de terrain, l'accueil des partenaires comme PROLASA Canada à Kisiza (Idjwi) ou MEDIHELP Suisse, les échanges avec les communautés et les moments forts du suivi des projets.</p></div></section>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">Ne manquez aucune actualité</h2><p className="text-center">Retrouvez PPSDR sur Facebook (près de 5 000 abonnés) et YouTube pour suivre nos interventions en images.</p><div className="flex justify-center gap-4 mt-5"><a className="c-btn" href="https://www.facebook.com/ongd.ppsdr" target="_blank" rel="noreferrer">Facebook</a><a className="c-btn" href="https://youtube.com/@PPSDRONGDasbl" target="_blank" rel="noreferrer">YouTube</a></div></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/contact" className="c-btn">Nous contacter</Link></div></div></section>
  </div>;
}
