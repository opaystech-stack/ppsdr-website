import Image from "next/image";
import { PageIntro } from "@/components/PpsdrListing";

type WpRendered = { rendered?: string };
type WpReport = { id: number; title: WpRendered; pdf_url?: string; acf?: { pdf_file?: number | string | null }; _embedded?: { [key: string]: Array<{ source_url?: string }> } };
type WpMedia = { source_url?: string };
const wpUrl = (process.env.NEXT_PUBLIC_WP_URL || "https://cms.ppsdr.org").replace(/\/$/, "");

async function getList<T>(path: string): Promise<T[]> {
  try {
    const response = await fetch(`${wpUrl}/wp-json/wp/v2/${path}`, { next: { revalidate: 60 } });
    if (!response.ok) return [];
    return await response.json() as T[];
  } catch { return []; }
}

async function getMediaUrl(id: number): Promise<string | undefined> {
  try {
    const response = await fetch(`${wpUrl}/wp-json/wp/v2/media/${id}`, { next: { revalidate: 60 } });
    if (!response.ok) return undefined;
    return (await response.json() as WpMedia).source_url;
  } catch { return undefined; }
}

function clean(value?: string) {
  return (value || "").replace(/<[^>]*>/g, "").replace(/&#8217;/g, "’").replace(/&amp;/g, "&");
}

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: params.locale === "en" ? "Reports" : "Rapports" };
}

export default async function RapportsPage({ params }: { params: { locale: "fr" | "en" } }) {
  const en = params.locale === "en";
  const terms = await getList<{ id: number; slug: string }>(`report_language?slug=${params.locale}`);
  const termId = terms[0]?.id;
  const reports = termId ? await getList<WpReport>(`ppsdr_reports?report_language=${termId}&_embed&per_page=100`) : [];
  const reportsWithAssets = await Promise.all(reports.map(async (report) => {
    const file = report.acf?.pdf_file;
    const fileId = typeof file === "number" ? file : typeof file === "string" && /^\d+$/.test(file) ? Number(file) : undefined;
    const pdf = report.pdf_url || (fileId ? await getMediaUrl(fileId) : typeof file === "string" ? file : undefined);
    const image = report._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/ppsdr/community-portrait-rural-school.webp";
    return { ...report, pdf, image };
  }));
  return <main className="c-site-main o-site-container">
    <PageIntro eyebrow="PPSDR" title={en ? "Reports" : "Rapports"} action={{ href: "/faire-un-don", label: en ? "Donate" : "Faire un don" }}>{en ? "Download PPSDR’s published reports." : "Consultez et téléchargez les rapports publiés par PPSDR."}</PageIntro>
    <section className="ppsdr-report-section o-module" aria-label={en ? "Reports" : "Rapports"}><div className="o-layout-container">
      {reportsWithAssets.length ? <div className="ppsdr-content-card-grid">{reportsWithAssets.map((report) => <article key={report.id} className="ppsdr-content-card ppsdr-report-card"><Image src={report.image} alt={clean(report.title.rendered)} width={640} height={360}/><div><h2>{clean(report.title.rendered)}</h2>{report.pdf ? <a href={report.pdf} className="c-btn" target="_blank" rel="noreferrer" download>{en ? "Download PDF" : "Télécharger le PDF"}</a> : <span className="ppsdr-report-missing">{en ? "PDF not available" : "PDF non disponible"}</span>}</div></article>)}</div> : <p className="ppsdr-search-empty">{en ? "Reports will appear here when published in WordPress." : "Les rapports publiés dans WordPress apparaîtront ici."}</p>}
    </div></section>
  </main>;
}
