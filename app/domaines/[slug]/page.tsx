import Image from "next/image";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PpsdrListing";
import { domainPages } from "@/data/ppsdr-detail-pages";
import { domains } from "@/data/ppsdr-site";

export function generateStaticParams() { return domains.map(({ slug }) => ({ slug })); }

export default async function DomainePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = domainPages[slug];
  if (!page) notFound();
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title={page.title}>{page.intro}</PageIntro>
    {page.sections.map((section, index) => <section key={section.title} className={`o-module ${index % 2 === 0 ? "c-ip-block--grey" : ""}`}>
      <div className="o-layout-container">
        <div className={section.image ? "grid gap-8 md:grid-cols-2 items-center" : "max-w-5xl mx-auto"}>
          {section.image && <Image src={`/images/ppsdr/${section.image}`} alt={section.title} width={720} height={405} className={`w-full aspect-video object-cover ${index % 2 === 1 ? "md:order-2" : ""}`} />}
          <div><h2 className="c-icon-block__title">{section.title}</h2>{section.body && <p className="leading-relaxed">{section.body}</p>}{section.points && <ul className="space-y-4">{section.points.map((point) => <li key={point} className="border-l-4 border-[#ffbb22] pl-4">{point}</li>)}</ul>}</div>
        </div>
      </div>
    </section>)}
  </div>;
}
