import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";
import { ppsdrArticles } from "@/data/ppsdr-publications-v2";
import { publicationTranslations } from "@/data/ppsdr-publications-en";
import { domains } from "@/data/ppsdr-site";
import { domainPages } from "@/data/ppsdr-detail-pages";
import { domainPagesEn } from "@/data/ppsdr-detail-pages-en";

type Props = { params: { locale: "fr" | "en" }; searchParams?: { q?: string } };
type Result = { title: string; excerpt: string; href: string; image: string; external?: boolean };
type WpSearchItem = { title?: { rendered?: string }; excerpt?: { rendered?: string }; link?: string; _embedded?: { [key: string]: Array<{ source_url?: string }> } };

async function wordpressResults(query: string, locale: "fr" | "en"): Promise<Result[]> {
  const base = (process.env.NEXT_PUBLIC_WP_URL || "https://cms.ppsdr.org").replace(/\/$/, "");
  const paths = [`posts?search=${encodeURIComponent(query)}&lang=${locale}&_embed&per_page=50`, `ppsdr_reports?search=${encodeURIComponent(query)}&_embed&per_page=50`];
  const responses = await Promise.all(paths.map(async (path) => {
    try {
      const response = await fetch(`${base}/wp-json/wp/v2/${path}`, { next: { revalidate: 60 } });
      return response.ok ? await response.json() as WpSearchItem[] : [];
    } catch { return []; }
  }));
  return responses.flat().map((item) => ({
    title: (item.title?.rendered || "").replace(/<[^>]*>/g, ""),
    excerpt: (item.excerpt?.rendered || "").replace(/<[^>]*>/g, ""),
    href: item.link || "/rapports",
    image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/ppsdr/community-portrait-rural-school.webp",
    external: Boolean(item.link),
  })).filter((item) => item.title);
}

export function generateMetadata({ params }: Props) {
  return { title: params.locale === "en" ? "Search" : "Recherche" };
}

export default async function SearchPage({ params, searchParams }: Props) {
  const en = params.locale === "en";
  const query = (searchParams?.q || "").trim();
  const needle = query.toLocaleLowerCase(en ? "en" : "fr");
  const pages: Result[] = [
    { title: en ? "About PPSDR" : "À propos", excerpt: en ? "Organisation, mission, founder and goals." : "Organisation, mission, fondateur et objectifs.", href: "/a-propos", image: "community-meeting-thatched-hut.webp" },
    { title: en ? "Our areas of work" : "Domaines d’intervention", excerpt: domains.map((item) => `${item.title} ${item.intro} ${item.detail}`).join(" "), href: "/domaines", image: "community-gathering-pavilion.webp" },
    { title: en ? "Reports" : "Rapports", excerpt: en ? "PPSDR reports and downloadable PDF documents." : "Rapports PPSDR et documents PDF à télécharger.", href: "/rapports", image: "community-portrait-rural-school.webp" },
    { title: en ? "Contact" : "Contact", excerpt: en ? "Telephone, email and address in Goma." : "Téléphone, e-mail et adresse à Goma.", href: "/contact", image: "community-gathering-pavilion.webp" },
    { title: en ? "Partnership" : "Partenariat", excerpt: en ? "Work with PPSDR for rural communities." : "Construire un partenariat avec PPSDR pour les communautés rurales.", href: "/partenariat", image: "ashoka-changemakers-group.webp" },
    { title: en ? "Frequently asked questions" : "Questions fréquentes", excerpt: en ? "PPSDR organisation, areas of work and support." : "Organisation PPSDR, domaines d’intervention et soutien.", href: "/faq", image: "community-workshop.webp" },
    { title: en ? "Our achievements" : "Nos réalisations", excerpt: en ? "Education, agriculture, health, environment and results in numbers." : "Éducation, agriculture, santé, environnement et résultats chiffrés.", href: "/nos-realisations", image: "schoolyard-sunlight.webp" },
    { title: en ? "Our story" : "Notre histoire", excerpt: en ? "Since 2011, one belief has guided PPSDR: no community should be invisible." : "Depuis 2011, une conviction guide PPSDR : aucune communauté ne devrait être invisible.", href: "/notre-histoire", image: "community-meeting-thatched-hut.webp" },
    { title: en ? "Where we work" : "Zones d’intervention", excerpt: en ? "North Kivu, South Kivu, Tshopo and Ituri, with headquarters in Goma." : "Nord Kivu, Sud Kivu, Tshopo et Ituri, avec un siège à Goma.", href: "/zones-d-intervention", image: "rural-meeting-masisi.webp" },
    { title: en ? "Why support PPSDR" : "Pourquoi soutenir PPSDR", excerpt: en ? "No community should be invisible in its own country." : "Aucune communauté ne devrait être invisible aux yeux de son propre pays.", href: "/pourquoi-nous-soutenir", image: "community-school-gathering.webp" },
    ...domains.map((item) => {
      const page = (en ? domainPagesEn : domainPages)[item.slug];
      return { title: en ? (domainPagesEn[item.slug]?.title || item.title) : (domainPages[item.slug]?.title || item.title), excerpt: `${item.intro} ${item.detail} ${page?.sections.map((section) => `${section.title} ${section.body || ""} ${(section.points || []).join(" ")}`).join(" ") || ""}`, href: `/domaines/${item.slug}`, image: item.image };
    }),
    ...ppsdrArticles.map((article) => {
      const translation = en ? publicationTranslations[article.slug] : undefined;
      return { title: translation?.title || article.title, excerpt: `${translation?.summary || article.summary} ${translation?.body || article.body}`, href: `/publications/${article.slug}`, image: article.image };
    }),
  ];
  const results = query ? [...pages.filter((item) => `${item.title} ${item.excerpt}`.toLocaleLowerCase(en ? "en" : "fr").includes(needle)), ...await wordpressResults(query, params.locale)] : [];
  return <main className="c-site-main o-site-container">
    <PageIntro eyebrow="PPSDR" title={en ? "Search the site" : "Rechercher sur le site"} action={{ href: "/faire-un-don", label: en ? "Donate" : "Faire un don" }}>{query ? (en ? `Results for “${query}”` : `Résultats pour « ${query} »`) : (en ? "Enter a keyword in the search field above." : "Saisissez un mot-clé dans le champ de recherche ci-dessus.")}</PageIntro>
    {query && <section className="ppsdr-search-results o-module"><div className="o-layout-container">
      {results.length ? <div className="ppsdr-content-card-grid">{results.map((item,index) => item.external ? <a key={`${item.href}-${index}`} href={item.href} className="ppsdr-content-card"><Image src={item.image} alt="" width={640} height={360} unoptimized/><div><h2>{item.title}</h2><span>{en ? "Read more →" : "Lire plus →"}</span></div></a> : <Link key={item.href} href={item.href} className="ppsdr-content-card"><Image src={item.image.startsWith("/") ? item.image : `/images/ppsdr/${item.image}`} alt="" width={640} height={360} unoptimized/><div><h2>{item.title}</h2><span>{en ? "Read more →" : "Lire plus →"}</span></div></Link>)}</div> : <p className="ppsdr-search-empty">{en ? "No matching pages or articles were found." : "Aucune page ni publication correspondante n’a été trouvée."}</p>}
    </div></section>}
  </main>;
}
