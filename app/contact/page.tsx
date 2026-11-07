import {Link} from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Parlons-nous">Une question, un partenariat, un projet sur le terrain : contactez notre équipe.</PageIntro>
    <section className="c-icon-block o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-icon-block__title">Nous joindre directement</h2><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{[
      ["Téléphone", "+243 997 133 925", "tel:+243997133925"], ["E-mail", "ppsdrcongo@gmail.com", "mailto:ppsdrcongo@gmail.com"], ["E-mail", "ppsdrongdasbl@gmail.com", "mailto:ppsdrongdasbl@gmail.com"], ["Adresse", "18 Avenue Osso, Q. Virunga, Goma, RDC.", ""],
    ].map(([title, text, href]) => <article className="c-icon-card bg-white p-5" key={`${title}-${text}`}><h3 className="c-icon-block__heading">{title}</h3>{href ? <a href={href}>{text}</a> : <p>{text}</p>}</article>)}</div></div></section>
    <section className="c-text-block-wrapper o-module"><div className="o-layout-container grid gap-10 md:grid-cols-2"><div><h2>Une question ? Écrivez-nous.</h2><p>Écrivez-nous et notre équipe vous répondra.</p><form className="mt-6 space-y-4"><label className="block">Nom<input name="name" className="block w-full mt-2 p-3"/></label><label className="block">Téléphone ou e-mail<input name="contact" className="block w-full mt-2 p-3"/></label><label className="block">Message<textarea name="message" rows={4} className="block w-full mt-2 p-3"/></label><button type="button" disabled className="c-btn opacity-60 cursor-not-allowed">Envoyer</button><p className="text-sm">[Adresse e-mail destinataire à confirmer par le client]</p></form></div><div><h2>Restez informé</h2><p>Retrouvez PPSDR sur Facebook, YouTube et LinkedIn.</p><ul className="mt-4 space-y-2"><li><a className="c-readmore-link" href="https://www.facebook.com/profile.php?id=61593676719622" target="_blank" rel="noopener noreferrer">Facebook</a></li><li><a className="c-readmore-link" href="https://youtube.com/@PPSDRONGDasbl" target="_blank" rel="noopener noreferrer">YouTube</a></li><li><a className="c-readmore-link" href="https://www.linkedin.com/company/ppsdr-ongd/" target="_blank" rel="noopener noreferrer">LinkedIn PPSDR ONGD</a></li></ul></div></div></section>
    <section className="c-text-block-wrapper o-module c-ip-block--grey"><div className="o-layout-container"><h2>Basés à Goma, actifs dans 4 provinces</h2><p>Notre siège est à Goma (18 Avenue Osso, Q. Virunga). Nos équipes interviennent au Nord Kivu, Sud Kivu, Tshopo et Ituri.</p><Link href="/zones-d-intervention" className="c-btn inline-block mt-5">Voir nos zones d'intervention</Link></div></section>
  </div>;
}
