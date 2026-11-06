import React from "react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";

export const metadata = {
  title: "À propos de PPSDR | Programmes de Promotion de la Santé et de Développement en Milieux Ruraux",
  description:
    "Une organisation engagée pour la santé, la dignité et le développement communautaire auprès des peuples autochtones pygmées et des paysans vulnérables en RDC.",
};

export default function AboutUsPage() {
  return (
    <div className="c-site-main o-site-container">
      {/* Module 0: c-hero */}
      <div className="c-hero o-module">
        <div className="c-hero__layout-container">
          <div className="c-hero__content">
            <h1 className="c-hero__header">À propos de PPSDR</h1>
            <div className="o-border-small" />
            <div className="o-flex">
              <div className="c-hero__body">
                <div className="c-hero__body-text">
                  <p>
                    Notre vision est celle d&apos;un monde où chaque communauté rurale et peuple autochtone en RDC accède à des soins de santé dignes, à l&apos;éducation et à une pleine participation sociale et économique.
                  </p>
                </div>
              </div>
              <div className="c-hero__media">
                <img
                  alt="Community gathered at a rural school"
                  src="/images/ppsdr/community-school-gathering.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 1: c-text-block-wrapper */}
      <div className="c-text-block-wrapper o-module">
        <div className="o-layout-container">
          <div className="c-side-modules c-side-modules--half">
            <h2 className="c-module-heading">
              Chez PPSDR, nous partons de la santé et du développement communautaire.
            </h2>
          </div>
          <div className="o-content c-text-block c-text-block--half">
            <p>
              Les <strong>Programmes de Promotion de la Santé et de Développement en Milieux Ruraux (PPSDR)</strong> accompagnent depuis 2011 les populations vulnérables et les peuples autochtones pygmées de la République démocratique du Congo.
            </p>
            <p>
              L&apos;organisation agit dans une logique de proximité, d&apos;écoute et de renforcement progressif des capacités dans les domaines de la santé communautaire, de l&apos;agriculture, de l&apos;éducation des enfants, de l&apos;apprentissage des métiers et de la conservation de l&apos;environnement.
            </p>
          </div>
        </div>
      </div>

      {/* Module 2: c-icon-block (Stat cards) */}
      <div className="c-icon-block o-module c-ip-block--blueberry no-bottom-margin">
        <div className="o-layout-container">
          <div className="c-icon-block__scroll-overlay" data-mobile-scroll="">
            <div className="c-icon-block__scroll-wrap">
              <div className="c-icon-block__content" data-mobile-scroll-inner="">
                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <h3 className="c-icon-block__heading">Depuis 2011</h3>
                  <p className="c-icon-block__desc">
                    Année de création de l&apos;ONGD à Goma par MUHINDO MUTHETHE Hénoc, au service exclusif des milieux ruraux.
                  </p>
                </div>

                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <h3 className="c-icon-block__heading">4 Territoires actifs</h3>
                  <p className="c-icon-block__desc">
                    Actions pérennes déployées à Goma, sur l&apos;île d&apos;Idjwi, dans le territoire de Lubero et à Walikale.
                  </p>
                </div>

                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <h3 className="c-icon-block__heading">6 Domaines vitaux</h3>
                  <p className="c-icon-block__desc">
                    Santé communautaire, Agriculture, Éducation, Apprentissage des métiers, Sensibilisation et Environnement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 3: c-cta-basic */}
      <div className="c-cta-basic o-module no-bottom-margin appeal-teiis">
        <div className="c-cta-basic__inner o-layout-container">
          <div className="c-cta-basic__content">
            <p className="">
              Depuis 2011 : découvrez le parcours et l&apos;histoire de notre engagement communautaire
            </p>
            <Link className="c-btn c-btn--outline cta-no-image" href="/about-us/our-history" id="cta">
              <span>Notre histoire</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Module 5: c-icon-block (What we do) */}
      <div className="c-icon-block o-module c-ip-block--grey no-bottom-margin">
        <div className="o-layout-container">
          <h2 className="c-icon-block__title">
            <strong>Nos axes d&apos;intervention</strong>
          </h2>
          <div className="c-icon-block__scroll-overlay" data-mobile-scroll="">
            <div className="c-icon-block__scroll-wrap">
              <div className="c-icon-block__content" data-mobile-scroll-inner="">
                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <img
                    alt="Community meeting under an open-air pavilion"
                    className="c-icon-card__image"
                    src="/images/ppsdr/community-gathering-pavilion.webp"
                  />
                  <div className="c-icon-card__content">
                    <h3 className="c-icon-block__heading">Santé & Nutrition</h3>
                    <p className="c-icon-block__desc">
                      Soins de première nécessité, prise en charge nutritionnelle et prévention sanitaire de proximité.
                    </p>
                  </div>
                </div>

                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <img
                    alt="Families sorting a harvest together in a garden"
                    className="c-icon-card__image"
                    src="/images/ppsdr/community-harvest-sorting.webp"
                  />
                  <div className="c-icon-card__content">
                    <h3 className="c-icon-block__heading">Agriculture durable</h3>
                    <p className="c-icon-block__desc">
                      Initiation maraîchère, mise en valeur des terres agricoles et autonomie alimentaire des ménages.
                    </p>
                  </div>
                </div>

                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <img
                    alt="Community members and school staff outside a rural school"
                    className="c-icon-card__image"
                    src="/images/ppsdr/community-portrait-rural-school.webp"
                  />
                  <div className="c-icon-card__content">
                    <h3 className="c-icon-block__heading">Éducation & Métiers</h3>
                    <p className="c-icon-block__desc">
                      Centres de rattrapage scolaire, bourses de fournitures et ateliers de qualification professionnelle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 8: c-cta-basic */}
      <div className="c-cta-basic o-module default">
        <div className="c-cta-basic__inner o-layout-container">
          <div className="c-cta-basic__content">
            <p className="">Vous souhaitez découvrir le détail de notre implantation géographique ?</p>
            <Link className="c-btn c-btn--outline cta-no-image" href="/where-we-work" id="cta">
              <span>Zones d&apos;intervention : voir la carte complète</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Module 10: c-text-block-wrapper */}
      <div className="c-text-block-wrapper o-module no-bottom-margin">
        <div className="o-layout-container">
          <div className="c-side-modules c-side-modules--third">
            <h2 className="c-module-heading">
              <strong>Gouvernance & Transparence</strong>
            </h2>
          </div>
          <div className="o-content c-text-block c-text-block--third">
            <p className="lead">
              Nous appliquons les standards de gestion les plus stricts pour garantir que chaque ressource soit directement investie au bénéfice des populations rurales.
            </p>
            <p>
              Reconnue par les autorités de la RDC et auditée par des partenaires internationaux comme PROLASA Canada et le réseau mondial Ashoka, PPSDR publie régulièrement ses bilans et rapports d&apos;activités.
            </p>
          </div>
        </div>
      </div>

      {/* Module 11: c-icon-block (Governance) */}
      <div className="c-icon-block o-module c-ip-block--white no-bottom-margin">
        <div className="o-layout-container">
          <div className="c-icon-block__scroll-overlay">
            <div className="c-icon-block__scroll-wrap">
              <div className="c-icon-block__content" data-mobile-scroll-inner="">
                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <img
                    alt="Community members and school staff outside a rural school"
                    className="c-icon-card__image"
                    src="/images/ppsdr/community-portrait-rural-school.webp"
                  />
                  <div className="c-icon-card__content">
                    <h3 className="c-icon-block__heading">Direction & Fondateur</h3>
                    <p className="c-icon-block__desc">
                      MUHINDO MUTHETHE Hénoc, Ashoka Fellow et entrepreneur social dévoué aux communautés rurales.
                    </p>
                  </div>
                </div>

                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <img
                    alt="Community gathered at a rural school"
                    className="c-icon-card__image"
                    src="/images/ppsdr/community-school-gathering.webp"
                  />
                  <div className="c-icon-card__content">
                    <h3 className="c-icon-block__heading">MEDIHELP SUISSE</h3>
                    <p className="c-icon-block__desc">
                      Partenariat humanitaire pour l&apos;accès universel aux soins de santé et le soutien communautaire.
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
                    <h3 className="c-icon-block__heading">PROLASA Canada</h3>
                    <p className="c-icon-block__desc">
                      Missions médicales conjointes et suivi rigoureux des projets auprès des autochtones à Idjwi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 12: c-cta-basic */}
      <div className="c-cta-basic o-module no-bottom-margin default">
        <div className="c-cta-basic__inner o-layout-container">
          <div className="c-cta-basic__content">
            <p className="">Pourquoi soutenir les programmes de PPSDR ?</p>
            <Link className="c-btn c-btn--outline cta-no-image" href="/how-to-help/why-donate-to-sightsavers" id="cta">
              <span>Comment vos dons changent des vies</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Module 14: c-discover-more-2 */}
      <div className="c-discover-more-2 o-module">
        <div className="o-layout-container">
          <h2 className="c-discover-more-2__title">Comment vous engager avec nous</h2>
          <div className="c-discover-more-2__grid">
            <Link className="c-discover-more-2__item" href="/how-to-help" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Community gathered at a rural school"
                  src="/images/ppsdr/community-school-gathering.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">Faire un don solidaire</h3>
                <p className="c-discover-more-2__card-excerpt">
                  Par Mobile Money ou virement bancaire pour appuyer directement les missions d&apos;urgence et de développement.
                </p>
              </div>
            </Link>

            <Link className="c-discover-more-2__item" href="/contact-us" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Schoolchildren gathered outside a brick school"
                  src="/images/ppsdr/schoolchildren-brick-school.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">Devenir partenaire</h3>
                <p className="c-discover-more-2__card-excerpt">
                  ONG, fondations et institutions : unissez vos forces aux nôtres pour un impact durable en RDC.
                </p>
              </div>
            </Link>

            <Link className="c-discover-more-2__item" href="/stories-news-blogs" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Students and teachers meeting in a sunny schoolyard"
                  src="/images/ppsdr/schoolyard-sunlight.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">Découvrir nos actualités</h3>
                <p className="c-discover-more-2__card-excerpt">
                  Suivez nos avancées, nos réussites communautaires et nos publications régulières.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Module 15: c-email-module */}
      <div className="c-email-module o-module no-bottom-margin">
        <div className="c-email-module__background" />
        <div className="c-email-module__content o-layout-container">
          <div className="c-email-module__left">
            <h2 className="c-email-module__header">Restez informés de nos actions de terrain</h2>
            <div className="c-email-module__image">
              <img
                alt="Community meeting under an open-air pavilion"
                src="/images/ppsdr/community-gathering-pavilion.webp"
              />
            </div>
            <div className="c-email-module__left-content">
              <div className="c-email-module__image-label">
                Les équipes de PPSDR sur le terrain auprès des communautés vulnérables et des peuples autochtones pygmées en RDC.
              </div>
              <div className="c-email-module__bottom-text">
                <span>Ensemble, soutenons la santé, l&apos;éducation et l&apos;autonomie des populations rurales.</span>
              </div>
            </div>
          </div>

          <div className="c-email-module__right">
            <div className="c-email-signup" data-email-signup="">
              <div className="c-email-signup__border-wrap">
                <div className="c-email-signup__top">
                  <div className="c-email-signup__icon" />
                  <h4 className="c-email-signup__header">Restez informés de nos actions</h4>
                </div>
                <p className="c-email-signup__desc">
                  Recevez nos rapports périodiques, nos actualités de terrain et les témoignages de nos bénéficiaires en RDC.
                </p>
                <form action="#" className="c-email-signup__form">
                  <div className="c-email-signup__field c-email-signup__field--name">
                    <label className="c-email-signup__label" htmlFor="name-about">
                      Prénom & Nom
                    </label>
                    <input
                      autoComplete="name"
                      className="c-email-signup__input"
                      id="name-about"
                      name="name"
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  <div className="c-email-signup__field c-email-signup__field--email">
                    <label className="c-email-signup__label" htmlFor="email-about">
                      Adresse e-mail
                    </label>
                    <input
                      autoComplete="email"
                      className="c-email-signup__input"
                      id="email-about"
                      name="email"
                      placeholder="votre.email@exemple.com"
                      required
                      type="email"
                    />
                  </div>
                  <p className="c-email-signup__unsub c-email-signup__unsub--inline">
                    Vous pouvez vous désinscrire à tout moment en écrivant à{" "}
                    <strong>ppsdrcongo@gmail.com</strong>.
                  </p>
                  <button className="c-email-signup__btn c-btn" type="submit">
                    <span className="c-email-signup__btn__text">S&apos;inscrire à la lettre d&apos;information</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
