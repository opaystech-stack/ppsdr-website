import {Link} from '@/i18n/navigation';

type WpRendered = {rendered?: string};
type WpReport = {id: number; date: string; title: WpRendered; excerpt: WpRendered; pdf_url?: string; acf?: {pdf_file?: number | string | null};};
type WpNews = {id: number; date: string; title: WpRendered; link: string; excerpt: WpRendered;};
type WpMedia = {source_url?: string};

const wpUrl = (process.env.NEXT_PUBLIC_WP_URL || 'https://cms.ppsdr.org').replace(/\/$/, '');
async function getList<T>(path: string): Promise<T[]> {
  try {
    const response = await fetch(`${wpUrl}/wp-json/wp/v2/${path}`, {next: {revalidate: 60}});
    if (!response.ok) return [];
    return await response.json() as T[];
  } catch { return []; }
}
async function getMediaUrl(id: number): Promise<string | undefined> {
  try {
    const response = await fetch(`${wpUrl}/wp-json/wp/v2/media/${id}`, {next: {revalidate: 60}});
    if (!response.ok) return undefined;
    return (await response.json() as WpMedia).source_url;
  } catch { return undefined; }
}
const text = (value?: string) => (value || '').replace(/<[^>]*>/g, '').replace(/&#8217;/g, '’').replace(/&amp;/g, '&');

export function generateMetadata({params}: {params: {locale: string}}) { return {title: params.locale === "en" ? "Reports and news | PPSDR" : "Rapports et actualités | PPSDR"}; }

export default async function RapportsPage({params}: {params: {locale: 'fr' | 'en'}}) {
  const locale = params.locale;
  const [categories, languageTerms] = await Promise.all([
    getList<{id: number; slug: string}>(`categories?slug=${locale === 'en' ? 'news' : 'actualites'}`),
    getList<{id: number; slug: string}>(`report_language?slug=${locale}`),
  ]);
  const categoryId = categories[0]?.id;
  const languageTermId = languageTerms[0]?.id;
  const [reports, news] = await Promise.all([
    languageTermId ? getList<WpReport>(`ppsdr_reports?report_language=${languageTermId}&_embed&per_page=100`) : Promise.resolve([]),
    categoryId ? getList<WpNews>(`posts?categories=${categoryId}&lang=${locale}&per_page=100`) : Promise.resolve([]),
  ]);
  const reportsWithPdf = await Promise.all(reports.map(async (report) => {
    const acfFile = report.acf?.pdf_file;
    const fileId = typeof acfFile === 'number' ? acfFile : typeof acfFile === 'string' && /^\d+$/.test(acfFile) ? Number(acfFile) : undefined;
    const pdfUrl = report.pdf_url || (fileId ? await getMediaUrl(fileId) : typeof acfFile === 'string' ? acfFile : undefined);
    return {...report, pdfUrl};
  }));
  const en = locale === 'en';
  return <div className="c-site-main o-site-container">
    <section className="c-hero o-module"><div className="o-layout-container"><div className="c-hero__content"><p className="text-sm uppercase tracking-widest text-[#960051]">PPSDR</p><h1 className="c-hero__header">{en ? 'Reports and news' : 'Rapports et actualités'}</h1><p>{en ? 'Explore our reports and follow the latest news from PPSDR.' : 'Consultez nos rapports et suivez les dernières actualités de PPSDR.'}</p></div></div></section>
    <section className="c-icon-block o-module" aria-labelledby="reports-title"><div className="o-layout-container"><h2 id="reports-title" className="c-icon-block__title">{en ? 'Reports' : 'Rapports'}</h2>
      {reportsWithPdf.length ? <div className="grid md:grid-cols-2 gap-7">{reportsWithPdf.map((report) => {
        const pdf = report.pdfUrl;
        return <article key={report.id} className="c-icon-card bg-white border border-[#ebebef] p-6"><h3 className="c-icon-block__heading">{text(report.title.rendered)}</h3><p>{text(report.excerpt.rendered)}</p>{pdf && <a className="c-btn mt-4 inline-block" href={pdf} target="_blank" rel="noreferrer">{en ? 'Download PDF' : 'Télécharger le PDF'}</a>}</article>;
      })}</div> : <p className="c-icon-card bg-white border border-[#ebebef] p-6">{en ? 'Reports will appear here once published in WordPress.' : 'Les rapports publiés dans WordPress apparaîtront ici.'}</p>}
    </div></section>
    <section className="c-icon-block o-module c-ip-block--grey" aria-labelledby="news-title"><div className="o-layout-container"><h2 id="news-title" className="c-icon-block__title">{en ? 'News' : 'Actualités'}</h2>
      {news.length ? <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">{news.map((article) => <article key={article.id} className="c-icon-card bg-white border border-[#ebebef] p-6"><h3 className="c-icon-block__heading">{text(article.title.rendered)}</h3><time className="text-sm text-[#686c74]" dateTime={article.date}>{new Date(article.date).toLocaleDateString(en ? 'en-GB' : 'fr-FR')}</time><p className="mt-3">{text(article.excerpt.rendered)}</p><a className="c-readmore-link mt-4 inline-block" href={article.link}>{en ? 'Read article →' : 'Lire l’article →'}</a></article>)}</div> : <p className="c-icon-card bg-white border border-[#ebebef] p-6">{en ? 'News published in WordPress will appear here.' : 'Les actualités publiées dans WordPress apparaîtront ici.'}</p>}
    </div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/contact" className="c-btn">{en ? 'Contact us' : 'Nous contacter'}</Link></div></div></section>
  </div>;
}
