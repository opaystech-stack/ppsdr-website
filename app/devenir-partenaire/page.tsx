import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/PpsdrListing";

export const metadata = { title: "Devenons partenaires" };
const partners = [["PROLASA","logo-prolasa.png"],["Ashoka","logo-ashoka.png"],["FAO","logo-fao.png"],["MEDIHELP","logo-medihelp.png"],["Catalyst 2030","logo-catalyst-2030.png"],["AMA","logo-ama.png"],["OENDDF","logo-oenddf.png"],["ALHI","logo-alhi.png"],["La Maison de l'Artemisia","logo-maison-artemisia.png"],["SESAM","logo-sesam.jpeg"]];

export default function DevenirPartenairePage() {
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Devenons partenaires">Ensemble, allons plus loin pour les communautés rurales de la RDC.</PageIntro>
    <section className="c-text-block-wrapper o-module"><div className="o-layout-container max-w-5xl"><h2>Un partenaire ancré sur le terrain</h2><p className="mt-4">[CONTENU À DÉFINIR PAR LE CLIENT : types de partenariat, apports, contreparties.]</p><p className="mt-4">Depuis 2011, PPSDR mène des actions concrètes dans 4 provinces avec des résultats mesurés : 800 000 personnes formées en agriculture, 10 220 certificats scolaires, 30 concessions communautaires.</p></div></section>
    <section className="c-icon-block o-module c-ip-block--grey"><div className="o-layout-container"><h2 className="c-icon-block__title">Ils avancent avec nous</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">{partners.map(([name, file]) => <div key={name} className="min-h-28 border border-[#ebebef] bg-white flex items-center justify-center p-4"><Image src={`/images/partners/${file}`} alt={`Logo ${name}`} width={180} height={100} className="max-h-20 w-auto object-contain"/></div>)}</div></div></section>
    <section className="c-icon-block o-module"><div className="o-layout-container"><h2 className="c-icon-block__title">Ce que votre partenariat rend possible</h2><div className="grid md:grid-cols-3 gap-7">{[
      "Financer les activités de terrain (santé, éducation, agriculture).", "Équiper nos équipes et nos centres (matériel, écoles, centres de santé).", "Étendre nos zones d'intervention à de nouvelles communautés.",
    ].map((text) => <article className="c-icon-card border-t-4 border-[#ffbb22] pt-5" key={text}><p>{text}</p></article>)}</div></div></section>
    <section className="c-text-block-wrapper o-module c-ip-block--grey"><div className="o-layout-container max-w-5xl"><h2>Proposez votre partenariat</h2><form className="mt-6 grid md:grid-cols-2 gap-5"><label>Nom<input name="name" className="block w-full mt-2 p-3"/></label><label>Organisation<input name="organisation" className="block w-full mt-2 p-3"/></label><label>E-mail<input name="email" type="email" className="block w-full mt-2 p-3"/></label><label className="md:col-span-2">Message<textarea name="message" rows={4} className="block w-full mt-2 p-3"/></label><button type="button" disabled className="c-btn opacity-60 cursor-not-allowed justify-self-start">Envoyer</button><p>[Adresse e-mail destinataire à confirmer par le client]</p></form><Link href="/contact" className="c-readmore-link inline-block mt-5">Nous contacter</Link></div></section>
  </div>;
}
