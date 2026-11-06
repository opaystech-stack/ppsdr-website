import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { articles, domains, stats } from "@/data/ppsdr-site";

export function PageIntro({ eyebrow, title, children, image: suppliedImage, action }: { eyebrow: string; title: string; children: React.ReactNode; image?: string; action?: { href: string; label: string } }) {
  const heading = title.toLocaleLowerCase("fr");
  const image = suppliedImage || (heading.includes("sant") || heading.includes("soin") ? "community-workshop.webp"
    : heading.includes("agri") || heading.includes("don") ? "cabbage-harvest.webp"
    : heading.includes("éduc") || heading.includes("école") ? "schoolyard-sunlight.webp"
    : heading.includes("contact") || heading.includes("parlons") ? "community-gathering-pavilion.webp"
    : heading.includes("publication") || heading.includes("récit") ? "community-gathering-blue-skies.webp"
    : heading.includes("résultat") || heading.includes("réalisation") ? "ashoka-changemakers-group.webp"
    : heading.includes("zone") || heading.includes("environnement") ? "rural-meeting-masisi.webp"
    : heading.includes("partenaire") ? "ashoka-changemakers-group.webp"
    : heading.includes("histoire") || heading.includes("propos") || heading.includes("organisation") ? "community-meeting-thatched-hut.webp"
    : heading.includes("faq") || heading.includes("question") ? "community-workshop.webp"
    : heading.includes("rapport") ? "community-portrait-rural-school.webp"
    : heading.includes("domaines") || heading.includes("terrains") ? "community-gathering-pavilion.webp"
    : "community-gathering-blue-skies.webp");
  return <section className="ppsdr-page-hero"><Image src={`/images/ppsdr/${image}`} alt="" fill priority sizes="100vw" className="ppsdr-page-hero__image"/><div className="ppsdr-page-hero__shade"/><div className="o-layout-container ppsdr-page-hero__inner"><div className="ppsdr-page-hero__card">{eyebrow && <p className="ppsdr-page-hero__eyebrow">{eyebrow}</p>}<h1>{title}</h1><span className="ppsdr-page-hero__rule"/><p>{children}</p>{action && <Link href={action.href} className="c-btn ppsdr-page-hero__action">{action.label}</Link>}</div></div></section>;
}

export function DomainCards({ title = "Nos domaines d'intervention", showReadMore = false }: { title?: string; showReadMore?: boolean }) {
  return <section className="o-module c-icon-block c-ip-block--grey"><div className="o-layout-container"><h2 className="c-icon-block__title">{title}</h2><div className="c-icon-block__scroll-wrap"><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{domains.map((d) => <Link key={d.slug} href={`/domaines/${d.slug}`} className="c-icon-card bg-white"><Image src={`/images/ppsdr/${d.image}`} alt={d.title} width={580} height={326} className="w-full aspect-[16/9] object-cover"/><div className="p-6"><h3 className="c-icon-block__heading">{d.title}</h3><p className="c-icon-block__desc">{d.intro}</p>{showReadMore && <span className="text-[#960051] font-bold">Lire plus →</span>}</div></Link>)}</div></div></div></section>;
}

export function Stats({ title = "Chiffres clés", locale = 'fr' }: { title?: string; locale?: 'fr'|'en' }) {
  const colors = ["#B5D8E0", "#46818F", "#E9A13B", "#D00000", "#7FB5BB", "#F2E8D5"];
  const values = locale === 'en' ? [
    ["27%", "Pygmy people have gained literacy skills"], ["10,220", "Pygmy people have earned primary school certificates"], ["125,000+", "families reached through PPSDR concessions and agricultural areas"], ["30", "community concessions acquired for Pygmy peoples"], ["500,000", "beneficiaries of PPSDR schools, Pygmy and non-Pygmy, children and adults"], ["800,000", "Pygmy people and other marginalised groups trained in agriculture"],
  ] : stats;
  return <section className="ppsdr-results o-module"><div className="o-layout-container"><h2>{title}</h2><div className="ppsdr-results-grid">{values.map(([n,l],i)=><article key={n} style={{ "--stat-color": colors[i%colors.length] } as React.CSSProperties}><strong>{n}</strong><span>{l}</span></article>)}</div></div></section>;
}

export function ArticleCards({ limit = articles.length }: { limit?: number }) {
  return <section className="o-module"><div className="o-layout-container"><h2 className="c-discover-more-2__title">Publications récentes</h2><div className="grid gap-6 md:grid-cols-3">{articles.slice(0,limit).map(a=><Link key={a.slug} href={`/publications/${a.slug}`} className="border border-[#ebebef] bg-white"><Image src={`/images/ppsdr/${a.image}`} alt={a.title} width={640} height={380} className="w-full aspect-[16/9] object-cover"/><div className="p-5"><h3 className="text-xl font-bold text-[#403a60]">{a.title}</h3><span className="mt-4 block text-[#960051] font-bold">Lire plus →</span></div></Link>)}</div><div className="mt-8"><Link className="c-btn" href="/publications">Toutes les publications</Link></div></div></section>;
}
