import Image from "next/image";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";
import { Facebook, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

export const Footer: React.FC = () => { const t=useTranslations('footer'); const n=useTranslations('nav'); return <footer className="ppsdr-footer">
  <div className="ppsdr-footer-social"><div className="ppsdr-footer-inner"><Link href="/" aria-label={n('home')}><Image src="/images/ppsdr/logo-ppsdr.png" alt="Logo PPSDR" width={150} height={100}/></Link><div><span>{t('follow')}</span><a aria-label="Facebook" href="https://www.facebook.com/ongd.ppsdr" target="_blank" rel="noreferrer"><Facebook/></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/henoc-muhindo-1408ab27b" target="_blank" rel="noreferrer"><Linkedin/></a><a aria-label="YouTube" href="https://youtube.com/@PPSDRONGDasbl" target="_blank" rel="noreferrer"><Youtube/></a></div></div></div>
  <div className="ppsdr-footer-main"><div className="ppsdr-footer-inner ppsdr-footer-columns">
    <div><p className="ppsdr-footer-mission">{t('mission')}</p><span className="ppsdr-footer-rule"/></div>
    <div><h2>{t('navigation')}</h2><ul><li><Link href="/a-propos">{n('about')}</Link></li><li><Link href="/domaines">{n('domains')}</Link></li><li><Link href="/nos-realisations">{t('achievements')}</Link></li><li><Link href="/rapports">{n('reports')}</Link></li><li><Link href="/contact">{n('contact')}</Link></li></ul></div>
    <div><h2>{t('engage')}</h2><ul><li><Link href="/faire-un-don">{n('donate')}</Link></li><li><Link href="/partenariat">{n('becomePartner')}</Link></li><li><Link href="/publications">{t('publications')}</Link></li><li><Link href="/faq">{t('faq')}</Link></li></ul></div>
    <address><h2>Contact</h2><ul><li><Phone/> <a href="tel:+243997133925">+243 997 133 925</a></li><li><Mail/> <a href="mailto:ppsdrcongo@gmail.com">ppsdrcongo@gmail.com</a></li><li><Mail/> <a href="mailto:ppsdrongdasbl@gmail.com">ppsdrongdasbl@gmail.com</a></li><li><MapPin/> <span>18 Avenue Osso, Q. Virunga, Goma, RDC</span></li></ul></address>
  </div></div>
  <div className="ppsdr-footer-bottom"><div className="ppsdr-footer-inner"><span>{t('rights')}</span><div><Link href="/mentions-legales">{t('legal')}</Link><Link href="/politique-de-confidentialite">{t('privacy')}</Link></div></div></div>
</footer>; };
