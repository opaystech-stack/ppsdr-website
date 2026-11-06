import { PageIntro } from "@/components/PpsdrListing";
export function generateMetadata({params}: {params: {locale: string}}) { return {title: params.locale === "en" ? "Legal notice" : "Mentions légales"}; }
export default function MentionsLegalesPage({ params }: { params: { locale: string } }) { const en = params.locale === "en"; return <div className="c-site-main o-site-container"><PageIntro eyebrow="" title={en ? "Legal notice" : "Mentions légales"}>{en ? "[LEGAL CONTENT TO BE PROVIDED BY PPSDR.]" : "[CONTENU JURIDIQUE À FOURNIR PAR PPSDR.]"}</PageIntro></div>; }
