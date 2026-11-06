import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PpsdrListing";
import { domainPages } from "@/data/ppsdr-detail-pages";
import { domainPagesEn } from "@/data/ppsdr-detail-pages-en";
import { domains } from "@/data/ppsdr-site";

export function generateStaticParams() { return domains.map(({ slug }) => ({ slug })); }

export default async function DomainePage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const page = locale === 'en' ? domainPagesEn[slug] : domainPages[slug];
  if (!page) notFound();
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="PPSDR" title={page.title} image={page.image} action={{ href: "/faire-un-don", label: locale === "en" ? "Donate" : "Faire un don" }}>{page.intro}</PageIntro>
    {page.sections.map((section, index) => <section key={section.title} className={`ppsdr-domain-section o-module ${index % 2 === 0 ? "c-ip-block--grey" : ""}`}>
      <div className="o-layout-container"><article className="ppsdr-domain-card">
        <Image src={`/images/ppsdr/${section.image || page.image}`} alt="" width={720} height={405} className="ppsdr-domain-card__image"/>
        <div className="ppsdr-domain-card__content"><strong className="ppsdr-card-number">{String(index + 1).padStart(2, "0")}</strong><h2 className="c-icon-block__title">{section.title}</h2>{section.body && <p className="leading-relaxed">{section.body}</p>}{section.points && <ul className="ppsdr-domain-points" style={{ backgroundImage: `linear-gradient(rgba(18,31,36,.62),rgba(18,31,36,.62)),url(/images/ppsdr/${section.image || page.image})` }}>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</div>
      </article></div>
    </section>)}
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/domaines" className="c-btn">{locale === 'en' ? 'All areas of work' : 'Tous les domaines'}</Link></div></div></section>
  </div>;
}
