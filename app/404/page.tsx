import Link from "next/link";
export const metadata = { title: "Page introuvable" };
export default function Page404() { return <div className="c-site-main o-site-container"><section className="c-hero o-module"><div className="c-hero__layout-container"><div className="c-hero__content"><h1 className="c-hero__header">Page introuvable</h1><div className="c-hero__body"><div className="c-hero__body-text"><p>La page que vous cherchez n'existe pas ou a été déplacée.</p></div></div><Link href="/" className="c-btn inline-block mt-5">Retour à l'accueil</Link></div></div></section></div>; }
