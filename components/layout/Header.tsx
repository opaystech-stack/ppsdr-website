"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const domains = [
  ["Santé", "/domaines/sante"],
  ["Agriculture", "/domaines/agriculture"],
  ["Éducation", "/domaines/education"],
  ["Sensibilisation", "/domaines/sensibilisation"],
  ["Environnement", "/domaines/environnement"],
  ["Justice sociale", "/domaines/justice-sociale"],
] as const;

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainsOpen, setDomainsOpen] = useState(false);

  return (
    <header className="c-site-header c-site-header--sticky sticky top-0 z-50 bg-white">
      <div className="c-site-header__stick c-site-header__stick--sticky">
        <div className="c-site-header__primary">
          <div className="c-site-header__left">
            <Link href="/" className="o-site-logo c-brand-lockup" aria-label="PPSDR — accueil">
              <Image
                src="/images/ppsdr/logo-ppsdr.png"
                alt="Logo PPSDR"
                width={56}
                height={64}
                priority
              />
              <span className="c-brand-lockup__name">PPSDR</span>
            </Link>
          </div>

          <nav className="c-nav-desktop js-nav-hide" aria-label="Menu principal">
            <ul className="c-nav-desktop-inner">
              <li className="c-nav__header menu-item">
                <Link className="c-nav-desktop__header-btn" href="/a-propos">À propos</Link>
              </li>
              <li className={`c-nav__header menu-item menu-item-has-children ${domainsOpen ? "is-open" : ""}`}>
                <button
                  type="button"
                  className="c-nav-desktop__header-btn"
                  aria-expanded={domainsOpen}
                  aria-controls="desktop-domains-menu"
                  onClick={() => setDomainsOpen(!domainsOpen)}
                >
                  Domaines d&apos;intervention <ChevronDown aria-hidden="true" className="ml-1 inline h-4 w-4" />
                </button>
                <ul id="desktop-domains-menu" className="c-nav-desktop__child" hidden={!domainsOpen}>
                  {domains.map(([label, href]) => (
                    <li key={href}><Link href={href} onClick={() => setDomainsOpen(false)}>{label}</Link></li>
                  ))}
                </ul>
              </li>
              <li className="c-nav__header menu-item">
                <Link className="c-nav-desktop__header-btn" href="/rapports">Rapports</Link>
              </li>
              <li className="c-nav__header menu-item">
                <Link className="c-nav-desktop__header-btn" href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="c-site-header__right">
            <Link href="/faire-un-don" className="c-btn c-btn--pay header-donate">
              Faire un don
            </Link>
            <button
              type="button"
              className="o-hamburger"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav className="c-nav-mobile" aria-label="Menu mobile">
          <ul className="c-nav-mobile-inner">
            <li><Link href="/a-propos" onClick={() => setMobileMenuOpen(false)}>À propos</Link></li>
            <li>
              <button type="button" aria-expanded={domainsOpen} onClick={() => setDomainsOpen(!domainsOpen)}>
                Domaines d&apos;intervention <ChevronDown aria-hidden="true" className="ml-2 inline h-4 w-4" />
              </button>
              {domainsOpen && <ul className="c-nav-mobile__child">{domains.map(([label, href]) => <li key={href}><Link href={href} onClick={() => setMobileMenuOpen(false)}>{label}</Link></li>)}</ul>}
            </li>
            <li><Link href="/rapports" onClick={() => setMobileMenuOpen(false)}>Rapports</Link></li>
            <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>

          </ul>
        </nav>
      )}
    </header>
  );
};
