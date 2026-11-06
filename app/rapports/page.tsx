import Link from "next/link";
import { PageIntro } from "@/components/PpsdrListing";

export const metadata = { title: "Rapports" };
const reports = [
  ["Collaboration PPSDR – Chefferie Ntambuka à Idjwi", "Grâce à la collaboration entre PPSDR et la Chefferie Ntambuka dans l'île d'Idjwi, les impacts sont visibles dans l'agriculture avec les autochtones pygmées."],
  ["Cartographie communautaire de Masekeseke (Lubero)", "Protéger les gorilles de Grauer, les chimpanzés et les pangolins géants : cartographie participative, gouvernance locale et gestion adaptative."],
  ["Protection des grands singes à Masekeseke", "Conservation communautaire des gorilles avec les pygmées et piri : sensibilisation, réserves communautaires, retour progressif des gorilles."],
  ["Field visit d'Ashoka à PPSDR (2024)", "Évaluation d'impact de l'inclusion socio-économique des pygmées pendant le processus d'élection des Ashoka Fellows en RDC."],
];

export default function RapportsPage() {
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Nos rapports, en toute transparence">Consultez et ouvrez les documents disponibles dans un format plus lisible et plus responsive.</PageIntro>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">Documents</h2><div className="grid md:grid-cols-2 gap-7">{reports.map(([title, summary]) => <article key={title} className="c-icon-card bg-white border border-[#ebebef] p-6"><h3 className="c-icon-block__heading">{title}</h3><p>{summary}</p><p className="mt-4 text-sm">[FICHIERS PDF À FOURNIR PAR LE CLIENT]</p><button disabled className="c-btn opacity-60 cursor-not-allowed mt-4">Ouvrir le PDF</button></article>)}</div></div></section>
    <section className="c-text-block-wrapper o-module c-ip-block--grey"><div className="o-layout-container"><h2>Le terrain en récits</h2><p>Complétez votre lecture avec nos publications : comptes rendus, images et faits marquants des activités.</p><Link href="/publications" className="c-readmore-link inline-block mt-4">Voir les publications</Link></div></section>
    <section className="c-text-block-wrapper o-module"><div className="o-layout-container"><h2>La transparence, un engagement</h2><p>PPSDR documente ses interventions et rend compte de ses actions à ses partenaires, à ses donateurs et aux communautés.</p></div></section>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/contact" className="c-btn">Nous contacter</Link></div></div></section>
  </div>;
}
