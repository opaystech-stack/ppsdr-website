import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ppsdrArticles } from "@/data/ppsdr-publications-v2";
import { publicationTranslations } from "@/data/ppsdr-publications-en";

export function generateStaticParams() { return ppsdrArticles.map(({ slug }) => ({ slug })); }
export default async function ArticlePage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const isEnglish = locale === "en";
  const article = ppsdrArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  const translated = isEnglish ? publicationTranslations[article.slug] : undefined;
  const related = ppsdrArticles.filter((item) => item.slug !== slug).slice(0, 2);
  return <div className="c-site-main o-site-container"><article className="o-module"><div className="o-layout-container max-w-5xl"><div className="grid md:grid-cols-2 gap-8 items-center"><div><p className="text-sm uppercase tracking-widest text-[#960051]">{isEnglish ? "PPSDR publications" : "Publications PPSDR"}</p><h1 className="my-5">{translated?.title ?? article.title}</h1>{(translated?.date ?? article.date) && <time className="text-[#686c74]">{translated?.date ?? article.date}</time>}</div><Image src={`/images/ppsdr/${article.image}`} alt={translated?.title ?? article.title} width={900} height={600} className="w-full aspect-video object-cover"/></div><div className="prose max-w-none mt-10"><p className="leading-relaxed whitespace-pre-line">{translated?.body ?? article.body}</p></div></div></article>
    <section className="c-discover-more-2 o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-discover-more-2__title">{isEnglish ? "Related articles" : "Articles liés"}</h2><div className="grid md:grid-cols-2 gap-6">{related.map((item) => { const itemTranslation = isEnglish ? publicationTranslations[item.slug] : undefined; return <Link key={item.slug} href={`/publications/${item.slug}`} className="c-icon-card bg-white p-5"><h3 className="c-icon-block__heading">{itemTranslation?.title ?? item.title}</h3><p>{itemTranslation?.summary ?? item.summary}</p></Link>; })}</div><Link href="/publications" className="c-readmore-link mt-6 inline-block">{isEnglish ? "← Back to publications" : "← Retour aux publications"}</Link></div></section>
  </div>;
}
