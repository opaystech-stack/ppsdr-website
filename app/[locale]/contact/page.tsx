import { Link } from "@/i18n/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "@/components/PpsdrListing";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: params.locale === "en" ? "Contact PPSDR" : "Contact" };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const en = params.locale === "en";
  const contacts = [
    { title: en ? "Telephone" : "Téléphone", value: "+243 997 133 925", href: "tel:+243997133925", icon: Phone, image: "community-gathering-pavilion.webp" },
    { title: en ? "Email" : "E-mail", value: "ppsdrcongo@gmail.com", href: "mailto:ppsdrcongo@gmail.com", icon: Mail, image: "community-school-gathering.webp" },
    { title: en ? "Address" : "Adresse", value: en ? "18 Avenue Osso, Q. Virunga, Goma, DRC." : "18 Avenue Osso, Q. Virunga, Goma, RDC.", href: "", icon: MapPin, image: "community-meeting-thatched-hut.webp" },
  ];
  return <main className="c-site-main o-site-container ppsdr-contact-page">
    <PageIntro eyebrow="" title={en ? "Get in touch" : "Parlons-nous"} action={{ href: "/faire-un-don", label: en ? "Donate" : "Faire un don" }}>{en ? "Have a question, partnership proposal or field project? Contact our team." : "Une question, un partenariat, un projet sur le terrain : contactez notre équipe."}</PageIntro>
    <section className="ppsdr-contact-details o-module" aria-labelledby="contact-details-title"><div className="o-layout-container">
      <h2 id="contact-details-title">{en ? "Contact us directly" : "Nous joindre directement"}</h2>
      <div className="ppsdr-contact-cards">{contacts.map(({ title, value, href, icon: Icon, image }) => <article className="ppsdr-contact-card ppsdr-image-card" key={title}><Image src={`/images/ppsdr/${image}`} alt="" width={580} height={220} className="ppsdr-contact-card__image"/><div><Icon aria-hidden="true"/><h3>{title}</h3>{href ? <a href={href}>{value}</a> : <p>{value}</p>}</div></article>)}</div>
    </div></section>
    <section className="ppsdr-contact-form-section o-module"><div className="o-layout-container ppsdr-contact-columns">
      <div><h2>{en ? "Have a question? Write to us." : "Une question ? Écrivez-nous."}</h2><p>{en ? "Send us a message and our team will get back to you." : "Écrivez-nous et notre équipe vous répondra."}</p><ContactForm locale={en ? "en" : "fr"}/></div>
      <aside className="ppsdr-stay-informed"><h2>{en ? "Stay informed" : "Restez informé"}</h2><p>{en ? "Follow PPSDR on Facebook, YouTube and the founder’s LinkedIn page." : "Retrouvez PPSDR sur Facebook, YouTube et LinkedIn de Hénoc Muhindo."}</p><ul><li><a href="https://www.facebook.com/ongd.ppsdr" target="_blank" rel="noreferrer">Facebook</a></li><li><a href="https://youtube.com/@PPSDRONGDasbl" target="_blank" rel="noreferrer">YouTube</a></li><li><a href="https://www.linkedin.com/in/henoc-muhindo-1408ab27b" target="_blank" rel="noreferrer">{en ? "Hénoc Muhindo on LinkedIn" : "LinkedIn de Hénoc Muhindo"}</a></li></ul></aside>
    </div></section>
    <section className="ppsdr-contact-location o-module"><div className="o-layout-container"><h2>{en ? "Based in Goma, working across four provinces" : "Basés à Goma, actifs dans 4 provinces"}</h2><p>{en ? "Our headquarters are in Goma (18 Avenue Osso, Q. Virunga). Our teams work in North Kivu, South Kivu, Tshopo and Ituri." : "Notre siège est à Goma (18 Avenue Osso, Q. Virunga). Nos équipes interviennent au Nord Kivu, Sud Kivu, Tshopo et Ituri."}</p><Link href="/zones-d-intervention" className="c-btn">{en ? "See where we work" : "Voir nos zones d’intervention"}</Link></div></section>
  </main>;
}
