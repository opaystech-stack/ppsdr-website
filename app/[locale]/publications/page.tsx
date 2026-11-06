import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";
import { ppsdrArticles } from "@/data/ppsdr-publications-v2";
import { publicationTranslations } from "@/data/ppsdr-publications-en";

export function generateMetadata({params}: {params: {locale: string}}) { return {title: params.locale === "en" ? "Publications" : "Publications"}; }

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
    <section className="c-text-block-wrapper o-module c-ip-block--grey"><div className="o-layout-container max-w-5xl"><h2>{isEnglish ? "Welcoming, sharing and reporting" : "Accueillir, échanger, rendre compte"}</h2><p>{isEnglish ? "These stories highlight field visits, partner visits such as PROLASA Canada in Kisiza (Idjwi) and MEDIHELP Switzerland, exchanges with communities and key moments in project monitoring." : "Les publications mettent en valeur les rencontres de terrain, l'accueil des partenaires comme PROLASA Canada à Kisiza (Idjwi) ou MEDIHELP Suisse, les échanges avec les communautés et les moments forts du suivi des projets."}</p></div></section>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">{isEnglish ? "Keep up with our news" : "Ne manquez aucune actualité"}</h2><p className="text-center">{isEnglish ? "Follow PPSDR on Facebook and YouTube to see our work in the field." : "Retrouvez PPSDR sur Facebook (près de 5 000 abonnés) et YouTube pour suivre nos interventions en images."}</p><div className="flex justify-center gap-4 mt-5"><a className="c-btn" href="https://www.facebook.com/ongd.ppsdr" target="_blank" rel="noreferrer">Facebook</a><a className="c-btn" href="https://youtube.com/@PPSDRONGDasbl" target="_blank" rel="noreferrer">YouTube</a></div></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/contact" className="c-btn">{isEnglish ? "Contact us" : "Nous contacter"}</Link></div></div></section>
  </div>;
}
