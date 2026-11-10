import Image from "next/image";
import { PageIntro } from "@/components/PpsdrListing";

type WpArticle = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt?: { rendered?: string };
  link: string;
  _embedded?: { [key: string]: Array<{ source_url?: string }> };
};

type ArticleCard = {
  id: number;
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
  image?: string;
};

const wpUrl = (process.env.NEXT_PUBLIC_WP_URL || "https://cms.ppsdr.org").replace(/\/$/, "");
const verifiedArticles: Record<"fr" | "en", ArticleCard[]> = {
  fr: [
    {
      id: 50,
      slug: "droits-fonciers-pygmees-rdc",
      date: "2024-04-10T10:00:00",
      title: "Protection juridique des droits fonciers des pygmées en droit positif congolais (Regard sur la situation des pygmées de la RD Congo)",
      excerpt: "",
      href: "/publications/droits-fonciers-pygmees-rdc",
      image: "/images/ppsdr/community-meeting-thatched-hut.webp",
    },
    {
      id: 9,
      slug: "article-test-affichage-des-actualites-ppsdr",
      date: "2026-11-06T15:30:23",
      title: "Article test — affichage des actualités PPSDR",
      excerpt: "",
      href: "https://cms.ppsdr.org/article-test-affichage-des-actualites-ppsdr/",
    },
  ],
  en: [
    {
      id: 51,
      slug: "legal-protection-land-rights-pygmies-dr-congo",
      date: "2024-04-10T10:00:00",
      title: "Legal Protection of Land Rights of the Pygmees in Positive Law Congolese (Reflection on the situation of pygmées de la RD Congo)",
      excerpt: "",
      href: "/en/publications/droits-fonciers-pygmees-rdc",
      image: "/images/ppsdr/community-meeting-thatched-hut.webp",
    },
    {
      id: 12,
      slug: "test-article-ppsdr-news-display",
      date: "2026-11-06T15:29:50",
      title: "Test article — PPSDR news display",
      excerpt: "",
      href: "https://cms.ppsdr.org/en/test-article-ppsdr-news-display/",
    },
  ],
};

function cleanHtml(value = "") {
  return value
    .replace(/<br\s*\/?\s*>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code: string) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/\s+/g, " ")
    .trim();
}

async function getPublishedArticles(locale: "fr" | "en"): Promise<ArticleCard[]> {
  try {
    const response = await fetch(`${wpUrl}/wp-json/wp/v2/posts?status=publish&per_page=100&_embed`, { next: { revalidate: 60 } });
    if (!response.ok) return verifiedArticles[locale];
    const posts = await response.json() as WpArticle[];
    const localized = posts.filter((post) => {
      // The CMS currently has no working `lang` query filter; its English permalinks use /en/.
      const isEnglishPost = new URL(post.link).pathname.startsWith("/en/");
      return post.slug !== "hello-world" && isEnglishPost === (locale === "en");
    });
    if (!localized.length) return verifiedArticles[locale];
    return localized.map((post) => {
      const isInternal = post.slug === "droits-fonciers-pygmees-rdc" || post.slug === "legal-protection-land-rights-pygmies-dr-congo";
      const internalSlug = isInternal ? post.slug : null;
      const href = internalSlug
        ? (locale === "en" ? `/en/publications/${internalSlug}` : `/publications/${internalSlug}`)
        : post.link;

      return {
        id: post.id,
        slug: post.slug,
        date: post.date,
        title: cleanHtml(post.title.rendered),
        excerpt: cleanHtml(post.excerpt?.rendered),
        href,
        image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
      };
    });
  } catch {
    return verifiedArticles[locale];
  }
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: params.locale === "en" ? "News" : "Actualités" };
}

export default async function PublicationsPage({ params, searchParams }: { params: { locale: "fr" | "en" }; searchParams?: { q?: string } }) {
  const isEnglish = params.locale === "en";
  const query = (searchParams?.q || "").trim().toLocaleLowerCase(isEnglish ? "en" : "fr");
  const articles = await getPublishedArticles(isEnglish ? "en" : "fr");
  const visibleArticles = query
    ? articles.filter((article) => `${article.title} ${article.excerpt}`.toLocaleLowerCase(isEnglish ? "en" : "fr").includes(query))
    : articles;

  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="PPSDR" title={isEnglish ? "News" : "Actualités"} image="community-portrait-rural-school.webp" action={{ href: "/faire-un-don", label: isEnglish ? "Donate" : "Faire un don" }}>
      {isEnglish ? "Read the latest articles published by PPSDR." : "Lisez les derniers articles publiés par PPSDR."}
    </PageIntro>
    <section className="c-discover-more-2 o-module">
      <div className="o-layout-container">
        <h2 className="c-discover-more-2__title">{query ? (isEnglish ? "Search results" : "Résultats") : (isEnglish ? "Recent articles" : "Articles récents")}</h2>
        {visibleArticles.length ? <div className="ppsdr-content-card-grid">
          {visibleArticles.map((article) => {
            const isExternal = article.href.startsWith("http");
            return <a key={article.id} href={article.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className="ppsdr-content-card">
              {article.image && <Image src={article.image} alt={article.title} width={640} height={360} />}
              <div>
                <p className="text-sm text-slate-600">{new Intl.DateTimeFormat(isEnglish ? "en" : "fr", { dateStyle: "long" }).format(new Date(article.date))}</p>
                <h2>{article.title}</h2>
                <span>{isEnglish ? "Read article →" : "Lire l’article →"}</span>
              </div>
            </a>;
          })}
        </div> : <p className="ppsdr-search-empty">{isEnglish ? "No published articles match your search." : "Aucun article publié ne correspond à votre recherche."}</p>}
      </div>
    </section>
  </div>;
}
