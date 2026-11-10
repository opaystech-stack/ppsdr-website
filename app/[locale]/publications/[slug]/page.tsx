import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ppsdrArticles } from "@/data/ppsdr-publications-v2";
import { publicationTranslations } from "@/data/ppsdr-publications-en";

export function generateStaticParams() { return ppsdrArticles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({params}: {params: Promise<{slug: string; locale: string}>}) {
  const {slug, locale} = await params;
  const article = ppsdrArticles.find((item) => item.slug === slug);
  if (!article) return {};
  const translated = locale === 'en' ? publicationTranslations[slug] : undefined;
  const title = translated?.title ?? article.title;
  const description = translated?.summary ?? article.summary;
  return {title: `${title} | PPSDR`, description, openGraph: {title: `${title} | PPSDR`, description, type: 'article', images: [{url: `/images/ppsdr/${article.image}`} ]}, twitter: {title: `${title} | PPSDR`, description, images: [`/images/ppsdr/${article.image}`]}};
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const isEnglish = locale === "en";
  const article = ppsdrArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  const translated = isEnglish ? publicationTranslations[article.slug] : undefined;
  const related = ppsdrArticles.filter((item) => item.slug !== slug).slice(0, 3);
  const body = translated?.body ?? article.body;
  const paragraphMarkers = isEnglish
    ? [" Since 2011,", " Olivier’s story:", " Today, he is looking ahead", " We are deeply grateful"]
    : [" Depuis 2011,", " L'histoire d'Olivier", " Aujourd'hui, son regard", " Nous exprimons"];
  const structuredBody = slug === "pourquoi-ppsdr-agit"
    ? paragraphMarkers.reduce((text, marker) => text.replace(marker, `\n\n${marker.trimStart()}`), body)
    : body;
  const paragraphs = structuredBody.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean);
  const articleTitle = translated?.title ?? article.title;
  const articleStructuredData = {"@context":"https://schema.org","@type":"NewsArticle",headline:articleTitle,description:translated?.summary ?? article.summary,image:[`https://www.ppsdr.org/images/ppsdr/${article.image}`],author:{"@type":"Organization",name:"PPSDR",url:"https://www.ppsdr.org"},publisher:{"@type":"Organization",name:"PPSDR",logo:{"@type":"ImageObject",url:"https://www.ppsdr.org/images/ppsdr/logo-ppsdr.webp"}},mainEntityOfPage:`https://www.ppsdr.org${isEnglish ? `/en/publications/${slug}` : `/publications/${slug}`}`};
  const renderParagraph = (paragraph: string, index: number) => {
    if (paragraph.startsWith("### ")) {
      return <h3 key={index} className="text-xl font-bold text-[#403a60] mt-6 mb-3">{paragraph.replace(/^###\s+/, "")}</h3>;
    }
    if (paragraph.startsWith("## ")) {
      return <h2 key={index} className="text-2xl font-bold text-[#403a60] mt-8 mb-4 border-b border-slate-200 pb-2">{paragraph.replace(/^##\s+/, "")}</h2>;
    }
    if (paragraph.startsWith("> ")) {
      return <blockquote key={index} className="border-l-4 border-[#960051] pl-4 py-2 italic text-slate-700 my-4 bg-slate-50 rounded-r">{paragraph.replace(/^>\s+/, "")}</blockquote>;
    }
    if (paragraph.startsWith("![")) {
      const match = paragraph.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (match) {
        return <figure key={index} className="my-6">
          <Image src={match[2]} alt={match[1]} width={900} height={500} className="w-full rounded-lg object-cover" />
          {match[1] && <figcaption className="text-sm text-center text-slate-500 mt-2 italic">{match[1]}</figcaption>}
        </figure>;
      }
    }
    if (paragraph.startsWith("- ") || paragraph.startsWith("• ") || paragraph.startsWith(" ")) {
      const items = paragraph.split(/\n/).map((line) => line.replace(/^[-•]\s*/, "").trim()).filter(Boolean);
      return <ul key={index} className="list-disc list-inside space-y-2 my-4 pl-2 text-slate-700">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>;
    }
    return <p key={index} className="leading-relaxed text-slate-800 my-4">{paragraph}</p>;
  };

  return <div className="c-site-main o-site-container"><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleStructuredData)}}/><article className="o-module"><div className="o-layout-container max-w-5xl"><div className="grid md:grid-cols-2 gap-8 items-center"><div><p className="text-sm uppercase tracking-widest text-[#960051]">{isEnglish ? "PPSDR publications" : "Publications PPSDR"}</p><h1 className="my-5">{articleTitle}</h1>{(translated?.date ?? article.date) && <time className="text-[#686c74]">{translated?.date ?? article.date}</time>}</div><Image src={`/images/ppsdr/${article.image}`} alt={articleTitle} width={900} height={600} className="w-full aspect-video object-cover"/></div><div className="ppsdr-article-body max-w-none mt-10">{paragraphs.map(renderParagraph)}</div></div></article>
    <section className="c-discover-more-2 o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-discover-more-2__title">{isEnglish ? "Related articles" : "Articles liés"}</h2><div className="ppsdr-content-card-grid">{related.map((item) => { const itemTranslation = isEnglish ? publicationTranslations[item.slug] : undefined; const title = itemTranslation?.title ?? item.title; return <Link key={item.slug} href={`/publications/${item.slug}`} className="ppsdr-content-card"><Image src={`/images/ppsdr/${item.image}`} alt={title} width={640} height={360}/><div><h2>{title}</h2><p>{itemTranslation?.summary ?? item.summary}</p><span>{isEnglish ? "Read more →" : "Lire l’article →"}</span></div></Link>; })}</div><Link href="/publications" className="c-readmore-link mt-6 inline-block">{isEnglish ? "← Back to publications" : "← Retour aux publications"}</Link></div></section>
  </div>;
}
