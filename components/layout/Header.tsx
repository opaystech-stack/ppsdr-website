"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const domains = [
  ["health", "/domaines/sante"], ["agriculture", "/domaines/agriculture"],
  ["education", "/domaines/education"], ["awareness", "/domaines/sensibilisation"],
  ["environment", "/domaines/environnement"], ["socialJustice", "/domaines/justice-sociale"],
] as const;

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainsOpen, setDomainsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");
  const LanguageSwitch = () => <div className="ppsdr-language-switch" aria-label={locale === "en" ? "Choose language" : "Choisir la langue"}>
    <Link href={pathname} locale="en" aria-current={locale === "en" ? "page" : undefined} className={locale === "en" ? "is-current" : ""}>EN</Link>
    <span aria-hidden="true">|</span>
    <Link href={pathname} locale="fr" aria-current={locale === "fr" ? "page" : undefined} className={locale === "fr" ? "is-current" : ""}>FR</Link>
  </div>;

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = query.trim();
    if (value) router.push({ pathname: "/recherche", query: { q: value } });
  }

  return <div className="ppsdr-sticky-header">
    <div className="ppsdr-utility-bar">
      <div className="ppsdr-utility-bar__inner">
        <nav className="ppsdr-utility-nav" aria-label={locale === "en" ? "Quick links" : "Liens rapides"}>
          <Link href="/publications">News</Link><span aria-hidden="true">|</span>
          <Link href="/partenariat">Partenariat</Link>
        </nav>
        <div className="ppsdr-utility-tools">
          <LanguageSwitch />
          <form className="ppsdr-search-form" onSubmit={submitSearch} role="search">
            <label className="sr-only" htmlFor="site-search">{locale === "en" ? "Search the site" : "Rechercher sur le site"}</label>
            <input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={locale === "en" ? "Search" : "Rechercher"} />
            <button type="submit" aria-label={locale === "en" ? "Search" : "Rechercher"}><Search aria-hidden="true" /></button>
          </form>
        </div>
      </div>
    </div>
    <header className="c-site-header c-site-header--sticky bg-white">
      <div className="c-site-header__stick"><div className="c-site-header__primary">
        <div className="c-site-header__left"><Link href="/" className="o-site-logo c-brand-lockup" aria-label={t("home")}><Image src="/images/ppsdr/logo-ppsdr.webp" alt="Logo PPSDR" width={56} height={64} priority/><span className="c-brand-lockup__name">PPSDR</span></Link></div>
        <nav className="c-nav-desktop js-nav-hide" aria-label={t("mainMenu")}><ul className="c-nav-desktop-inner">
          <li className="c-nav__header menu-item"><Link className="c-nav-desktop__header-btn" href="/a-propos">{t("about")}</Link></li>
          <li className={`c-nav__header menu-item menu-item-has-children ${domainsOpen ? "is-open" : ""}`}><button type="button" className="c-nav-desktop__header-btn" aria-expanded={domainsOpen} aria-controls="desktop-domains-menu" onClick={() => setDomainsOpen(!domainsOpen)}>{t("domains")} <ChevronDown aria-hidden="true" className="ml-1 inline h-4 w-4"/></button><ul id="desktop-domains-menu" className="c-nav-desktop__child" hidden={!domainsOpen}>{domains.map(([key, href]) => <li key={href}><Link href={href} onClick={() => setDomainsOpen(false)}>{t(key)}</Link></li>)}</ul></li>
          <li className="c-nav__header menu-item"><Link className="c-nav-desktop__header-btn" href="/rapports">{t("reports")}</Link></li>
          <li className="c-nav__header menu-item"><Link className="c-nav-desktop__header-btn" href="/contact">{t("contact")}</Link></li>
        </ul></nav>
        <div className="c-site-header__right"><Link href="/faire-un-don" className="c-btn c-btn--pay header-donate">{t("donate")}</Link><button type="button" className="o-hamburger" aria-label={mobileMenuOpen ? t("mobileMenuClose") : t("mobileMenuOpen")} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X aria-hidden="true"/> : <Menu aria-hidden="true"/>}</button></div>
      </div></div>
      {mobileMenuOpen && <nav className="c-nav-mobile" aria-label={t("mainMenu")}>
        <div className="c-nav-mobile-groups">
          <section aria-labelledby="mobile-navigation-title"><h2 id="mobile-navigation-title">Navigation</h2><ul className="c-nav-mobile-inner">
            <li><Link href="/a-propos" onClick={() => setMobileMenuOpen(false)}>{t("about")}</Link></li>
            <li className="c-nav-mobile-domain"><Link href="/domaines" onClick={() => setMobileMenuOpen(false)}>{t("domains")}</Link><ul className="c-nav-mobile__child">{domains.map(([key, href]) => <li key={href}><Link href={href} onClick={() => setMobileMenuOpen(false)}>{t(key)}</Link></li>)}</ul></li>
            <li><Link href="/nos-realisations" onClick={() => setMobileMenuOpen(false)}>{locale === "en" ? "Our achievements" : "Nos réalisations"}</Link></li>
            <li><Link href="/rapports" onClick={() => setMobileMenuOpen(false)}>{t("reports")}</Link></li>
            <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>{t("contact")}</Link></li>
          </ul></section>
        </div>
      </nav>}
    </header>
  </div>;
};
