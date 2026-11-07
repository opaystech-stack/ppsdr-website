import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";
import { ppsdrArticles } from "@/data/ppsdr-publications-v2";

export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Le terrain en images et en récits" image="community-portrait-rural-school.webp">Retrouvez les images, comptes rendus et faits marquants des activités menées par PPSDR.</PageIntro>
    <section className="c-discover-more-2 o-module"><div className="o-layout-container"><h2 className="c-discover-more-2__title">Articles récents</h2><div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{ppsdrArticles.map((article) => <Link key={article.slug} href={`/publications/${article.slug}`} className="c-icon-card bg-white border border-[#ebebef]"><Image src={`/images/ppsdr/${article.image}`} alt={article.title} width={580} height={326} className="w-full aspect-video object-cover"/><div className="p-5"><h3 className="c-icon-block__heading">{article.title}</h3>{article.date && <time className="text-sm text-[#686c74]">{article.date}</time>}<p className="mt-3">{article.summary}</p><span className="c-readmore-link mt-4 inline-block">Lire l'article →</span></div></Link>)}</div></div></section>
  </div>;
}
