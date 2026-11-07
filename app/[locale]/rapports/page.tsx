import Image from "next/image";
import { PageIntro } from "@/components/PpsdrListing";

type WpRendered = { rendered?: string };
type WpReport = { id: number; title: WpRendered; pdf_url?: string; fallbackImage?: string; acf?: { pdf_file?: number | string | null }; _embedded?: { [key: string]: Array<{ source_url?: string }> } };
type WpMedia = { source_url?: string };
const wpUrl = (process.env.NEXT_PUBLIC_WP_URL || "https://cms.ppsdr.org").replace(/\/$/, "");
const reportImages: Record<number, string> = {
  40: "/images/ppsdr/ashoka-changemakers-group.webp", 41: "/images/ppsdr/ashoka-changemakers-group.webp",
  42: "/images/ppsdr/ppsdr-riders-trail.webp", 43: "/images/ppsdr/ppsdr-riders-trail.webp",
  44: "/images/ppsdr/community-gathering-pavilion.webp", 45: "/images/ppsdr/community-gathering-pavilion.webp",
  46: "/images/ppsdr/community-document-registration.jpg", 47: "/images/ppsdr/community-document-registration.jpg",
};
const publishedReports: Record<"fr" | "en", WpReport[]> = {
  fr: [
    { id: 46, title: { rendered: "Autorisation provisoire de fonctionnement de PPSDR dans la chefferie Ntambuka, Idjwi — 31 décembre 2015" }, pdf_url: "https://cms.ppsdr.org/wp-content/uploads/2026/11/c1d4926e-3a46-4630-ae60-a708ebf679d5.pdf", fallbackImage: "/images/ppsdr/community-document-registration.jpg" },
    { id: 44, title: { rendered: "Rapport de mission de cartographie communautaire et participative de la concession forestière de Masekeseke à Lubero — août 2026" }, pdf_url: "https://cms.ppsdr.org/wp-content/uploads/2026/11/6b7c81cd-2fbc-4e86-b39f-43ca22bc22d9.pdf", fallbackImage: "/images/ppsdr/community-gathering-pavilion.webp" },
    { id: 42, title: { rendered: "Rapport narratif des activités de protection des gorilles à Masekeseke, Lubero — premier semestre 2026" }, pdf_url: "https://cms.ppsdr.org/wp-content/uploads/2026/11/1783146773.pdf", fallbackImage: "/images/ppsdr/ppsdr-riders-trail.webp" },
    { id: 40, title: { rendered: "Rapport de visite du coordonnateur de projets Ashoka en RDC — 2 avril 2024" }, pdf_url: "https://cms.ppsdr.org/wp-content/uploads/2026/11/1766485426.pdf", fallbackImage: "/images/ppsdr/ashoka-changemakers-group.webp" },
  ],
  en: [
    { id: 47, title: { rendered: "Provisional operating authorisation for PPSDR in Ntambuka Chiefdom, Idjwi — 31 December 2015" }, pdf_url: "https://cms.ppsdr.org/wp-content/uploads/2026/11/c1d4926e-3a46-4630-ae60-a708ebf679d5.pdf", fallbackImage: "/images/ppsdr/community-document-registration.jpg" },
    { id: 45, title: { rendered: "Community mapping mission report for the Masekeseke local community forest concession in Lubero — August 2026" }, pdf_url: "https://cms.ppsdr.org/wp-content/uploads/2026/11/6b7c81cd-2fbc-4e86-b39f-43ca22bc22d9.pdf", fallbackImage: "/images/ppsdr/community-gathering-pavilion.webp" },
    { id: 43, title: { rendered: "Narrative report on gorilla protection activities in Masekeseke forest, Lubero — first half of 2026" }, pdf_url: "https://cms.ppsdr.org/wp-content/uploads/2026/11/1783146773.pdf", fallbackImage: "/images/ppsdr/ppsdr-riders-trail.webp" },
    { id: 41, title: { rendered: "Ashoka project coordinator’s field visit to PPSDR in the DRC — 2 April 2024" }, pdf_url: "https://cms.ppsdr.org/wp-content/uploads/2026/11/1766485426.pdf", fallbackImage: "/images/ppsdr/ashoka-changemakers-group.webp" },
  ],
};

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
  const cmsReports = termId ? await getList<WpReport>(`ppsdr_reports?report_language=${termId}&_embed&per_page=100`) : [];
  const reports = cmsReports.length ? cmsReports : publishedReports[en ? "en" : "fr"];
  const reportsWithAssets = await Promise.all(reports.map(async (report) => {
    const file = report.acf?.pdf_file;
    const fileId = typeof file === "number" ? file : typeof file === "string" && /^\d+$/.test(file) ? Number(file) : undefined;
    const pdf = report.pdf_url || (fileId ? await getMediaUrl(fileId) : typeof file === "string" ? file : undefined);
    const image = report._embedded?.["wp:featuredmedia"]?.[0]?.source_url || report.fallbackImage || reportImages[report.id] || "/images/ppsdr/community-portrait-rural-school.webp";
    return { ...report, pdf, image };
  }));
  return <main className="c-site-main o-site-container">
    <PageIntro eyebrow="PPSDR" title={en ? "Reports" : "Rapports"} action={{ href: "/faire-un-don", label: en ? "Donate" : "Faire un don" }}>{en ? "Download PPSDR’s published reports." : "Consultez et téléchargez les rapports publiés par PPSDR."}</PageIntro>
    <section className="ppsdr-report-section o-module" aria-label={en ? "Reports" : "Rapports"}><div className="o-layout-container">
      {reportsWithAssets.length ? <div className="ppsdr-content-card-grid">{reportsWithAssets.map((report) => <article key={report.id} className="ppsdr-content-card ppsdr-report-card"><Image src={report.image} alt={clean(report.title.rendered)} width={640} height={360}/><div><h2>{clean(report.title.rendered)}</h2>{report.pdf ? <a href={report.pdf} className="c-btn" target="_blank" rel="noreferrer" download>{en ? "Download PDF" : "Télécharger le PDF"}</a> : <span className="ppsdr-report-missing">{en ? "PDF not available" : "PDF non disponible"}</span>}</div></article>)}</div> : <p className="ppsdr-search-empty">{en ? "Reports will appear here when published in WordPress." : "Les rapports publiés dans WordPress apparaîtront ici."}</p>}
    </div></section>
  </main>;
}
