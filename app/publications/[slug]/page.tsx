import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ppsdrArticles } from "@/data/ppsdr-publications-v2";

export function generateStaticParams() { return ppsdrArticles.map(({ slug }) => ({ slug })); }
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ppsdrArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = ppsdrArticles.filter((item) => item.slug !== slug).slice(0, 2);
  return <div className="c-site-main o-site-container"><article className="o-module"><div className="o-layout-container max-w-5xl"><div className="grid md:grid-cols-2 gap-8 items-center"><div><p className="text-sm uppercase tracking-widest text-[#960051]">Publications PPSDR</p><h1 className="my-5">{article.title}</h1>{article.date && <time className="text-[#686c74]">{article.date}</time>}</div><Image src={`/images/ppsdr/${article.image}`} alt={article.title} width={900} height={600} className="w-full aspect-video object-cover"/></div><div className="prose max-w-none mt-10"><p className="leading-relaxed whitespace-pre-line">{article.body}</p></div></div></article>
    <section className="c-discover-more-2 o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-discover-more-2__title">Articles liés</h2><div className="grid md:grid-cols-2 gap-6">{related.map((item) => <Link key={item.slug} href={`/publications/${item.slug}`} className="c-icon-card bg-white p-5"><h3 className="c-icon-block__heading">{item.title}</h3><p>{item.summary}</p></Link>)}</div><Link href="/publications" className="c-readmore-link mt-6 inline-block">← Retour aux publications</Link></div></section>
  </div>;
}
