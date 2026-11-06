import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

export const Footer: React.FC = () => <footer className="ppsdr-footer">
  <div className="ppsdr-footer-social"><div className="ppsdr-footer-inner"><Link href="/" aria-label="PPSDR — accueil"><Image src="/images/ppsdr/logo-ppsdr.png" alt="Logo PPSDR" width={150} height={100}/></Link><div><span>Suivez-nous :</span><a aria-label="Facebook" href="https://www.facebook.com/ongd.ppsdr" target="_blank" rel="noreferrer"><Facebook/></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/henoc-muhindo-1408ab27b" target="_blank" rel="noreferrer"><Linkedin/></a><a aria-label="YouTube" href="https://youtube.com/@PPSDRONGDasbl" target="_blank" rel="noreferrer"><Youtube/></a></div></div></div>
  <div className="ppsdr-footer-main"><div className="ppsdr-footer-inner ppsdr-footer-columns">
    <div><p className="ppsdr-footer-mission">PPSDR oeuvre aux côtés des peuples autochtones pygmées et des paysans vulnérables.</p><span className="ppsdr-footer-rule"/></div>
    <div><h2>Navigation</h2><ul><li><Link href="/a-propos">À propos</Link></li><li><Link href="/domaines">Domaines d’intervention</Link></li><li><Link href="/nos-realisations">Nos réalisations</Link></li><li><Link href="/rapports">Rapports</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
    <div><h2>S’engager</h2><ul><li><Link href="/faire-un-don">Faire un don</Link></li><li><Link href="/devenir-partenaire">Devenir partenaire</Link></li><li><Link href="/publications">Publications</Link></li><li><Link href="/faq">FAQ</Link></li></ul></div>
    <address><h2>Contact</h2><ul><li><Phone/> <a href="tel:+243997133925">+243 997 133 925</a></li><li><Mail/> <a href="mailto:ppsdrcongo@gmail.com">ppsdrcongo@gmail.com</a></li><li><Mail/> <a href="mailto:ppsdrongdasbl@gmail.com">ppsdrongdasbl@gmail.com</a></li><li><MapPin/> <span>18 Avenue Osso, Q. Virunga, Goma, RDC</span></li></ul></address>
  </div></div>
  <div className="ppsdr-footer-bottom"><div className="ppsdr-footer-inner"><span>© 2026 PPSDR. Tous droits réservés.</span><div><Link href="/mentions-legales">Mentions légales</Link><Link href="/politique-de-confidentialite">Politique de confidentialité</Link></div></div></div>
</footer>;
