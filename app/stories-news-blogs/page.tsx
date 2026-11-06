import React from "react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";

export const metadata = {
  title: "Publications, actualités et récits de terrain | PPSDR ONGD",
  description:
    "Suivez les actions de PPSDR sur le terrain en RDC : santé communautaire, relance agricole, éducation des peuples autochtones et protection de l'environnement.",
};

export default function StoriesNewsBlogsPage() {
  return (
    <div className="c-site-main o-site-container">
      {/* Module 0: c-default-hero */}
      <div className="c-default-hero o-module c-default-hero--page">
        <div className="o-layout-container">
          <div className="c-hero-fullscreen__content c-default-hero__title--long">
            <h1 className="c-default-hero__title">Publications, actualités et récits</h1>
          </div>
        </div>
      </div>

      {/* Module 1: c-text-block-wrapper */}
      <div className="c-text-block-wrapper o-module c-text-block--right">
        <div className="o-layout-container">
          <div className="c-side-modules c-side-modules--third">
            <h2 className="c-module-heading">
              <strong>Au cœur de l&apos;action</strong>
            </h2>
          </div>
          <div className="o-content c-text-block c-text-block--third">
            <p className="lead">
              Lisez nos derniers articles de terrain, découvrez les récits de nos bénéficiaires et suivez l&apos;avancée de nos programmes en République démocratique du Congo.
            </p>
          </div>
        </div>
      </div>

      {/* Module 2: c-discover-more-2 (Featured article) */}
      <div className="c-discover-more-2 o-module no-bottom-margin">
        <div className="o-layout-container">
          <div className="c-discover-more-2__grid">
            <Link
              className="c-discover-more-2__item"
              href="/news/2026/11/sightsavers-pledges-five-eye-health-commitments-ahead-of-global-summit"
              style={{ flex: 1 }}
            >
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Schoolchildren gathered outside a brick school"
                  src="/images/ppsdr/schoolchildren-brick-school.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <span className="text-xs font-bold uppercase tracking-wider text-[#960051] block mb-1">
                  Actualités / Ashoka Fellow / Septembre 2025
                </span>
                <h3 className="c-discover-more-2__card-header">
                  Le Fondateur de PPSDR, Mr Hénoc MUHINDO, un Ashoka fellow au sommet inaugural de Nairobi
                </h3>
                <p className="c-discover-more-2__card-excerpt">
                  Le Fondateur de PPSDR a pris part au sommet inaugural des boursiers Ashoka à Nairobi, réunissant les plus grands entrepreneurs sociaux pour accélérer la transformation systémique des communautés.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Module 3: c-icon-block (More stories) */}
      <div className="c-icon-block o-module c-ip-block--white no-bottom-margin">
        <div className="o-layout-container">
          <h2 className="c-icon-block__title">
            <strong>Toutes nos publications récentes</strong>
          </h2>
          <div className="c-icon-block__scroll-overlay">
            <div className="c-icon-block__scroll-wrap">
              <div className="c-icon-block__content" data-mobile-scroll-inner="">
                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <img
                    alt="Schoolchildren gathered outside a brick school"
                    className="c-icon-card__image"
                    src="/images/ppsdr/schoolchildren-brick-school.webp"
                  />
                  <div className="c-icon-card__content">
                    <h3 className="c-icon-block__heading">Restauration forestière</h3>
                    <p className="c-icon-block__desc">
                      Les communautés autochtones pygmées restaurent la forêt en faveur des animaux à risque d&apos;extinction à Lubero.
                    </p>
                  </div>
                </div>

                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <img
                    alt="Community members taking part in a health workshop"
                    className="c-icon-card__image"
                    src="/images/ppsdr/community-workshop.webp"
                  />
                  <div className="c-icon-card__content">
                    <h3 className="c-icon-block__heading">Malnutrition & Urgence</h3>
                    <p className="c-icon-block__desc">
                      Une solution locale à la malnutrition et à la sécurité alimentaire dans la ville de Goma pendant la guerre.
                    </p>
                  </div>
                </div>

                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <img
                    alt="Schoolchildren gathered outside a brick school"
                    className="c-icon-card__image"
                    src="/images/ppsdr/schoolchildren-brick-school.webp"
                  />
                  <div className="c-icon-card__content">
                    <h3 className="c-icon-block__heading">Missions internationales</h3>
                    <p className="c-icon-block__desc">
                      Évaluation conjointe de terrain avec le Dr Barry Wecker de PROLASA Canada à Goma et Idjwi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 4: c-cta-basic */}
      <div className="c-cta-basic o-module no-bottom-margin appeal-teiis">
        <div className="c-cta-basic__inner o-layout-container">
          <div className="c-cta-basic__content">
            <p className="">Vous souhaitez recevoir nos prochaines publications par e-mail ?</p>
            <Link className="c-btn c-btn--outline cta-no-image" href="/contact-us" id="cta">
              <span>Nous contacter pour être abonné</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Module 5: c-text-block-wrapper */}
      <div className="c-text-block-wrapper o-module no-bottom-margin">
        <div className="o-layout-container">
          <div className="o-content c-text-block c-text-block--none" style={{ textAlign: "center", padding: "2rem 0" }}>
            <p className="lead">
              Pour toute demande de reportage, d&apos;interview ou d&apos;accès à nos archives photographiques :{" "}
              <strong>ppsdrcongo@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
