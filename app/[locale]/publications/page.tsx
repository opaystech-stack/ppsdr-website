import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";
import { ppsdrArticles } from "@/data/ppsdr-publications-v2";
import { publicationTranslations } from "@/data/ppsdr-publications-en";

export function generateMetadata({params}: {params: {locale: string}}) { return {title: params.locale === "en" ? "News" : "Actualités"}; }

export default function PublicationsPage({ params, searchParams }: { params: { locale: string }; searchParams?: { q?: string } }) {
  const isEnglish = params.locale === "en";
  const query = (searchParams?.q || "").trim().toLocaleLowerCase();
  const visibleArticles = query ? ppsdrArticles.filter((article) => {
    const translated = isEnglish ? publicationTranslations[article.slug] : undefined;
    return [article.title, article.summary, translated?.title, translated?.summary].some((value) => value?.toLocaleLowerCase().includes(query));
  }) : ppsdrArticles;
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="PPSDR" title={isEnglish ? "News" : "Actualités"} action={{ href: "/faire-un-don", label: isEnglish ? "Donate" : "Faire un don" }}>{isEnglish ? "Explore field stories and highlights from PPSDR activities." : "Retrouvez les récits de terrain et les faits marquants des activités menées par PPSDR."}</PageIntro>
    <section className="c-discover-more-2 o-module"><div className="o-layout-container"><h2 className="c-discover-more-2__title">{query ? (isEnglish ? "Search results" : "Résultats") : (isEnglish ? "Recent articles" : "Articles récents")}</h2><div className="ppsdr-content-card-grid">{visibleArticles.map((article) => { const translated = isEnglish ? publicationTranslations[article.slug] : undefined; const title = translated?.title ?? article.title; return <Link key={article.slug} href={`/publications/${article.slug}`} className="ppsdr-content-card"><Image src={`/images/ppsdr/${article.image}`} alt="" width={640} height={360}/><div><h2>{title}</h2><span>{isEnglish ? "Read more →" : "Lire plus →"}</span></div></Link>; })}</div></div></section>
  </div>;
}
