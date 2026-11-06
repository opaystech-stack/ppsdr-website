import React from "react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";

export const metadata = {
  title: "Programme de Santé Communautaire | PPSDR ONGD",
  description:
    "Programme de santé communautaire de PPSDR : prévention, dépistage précoce de la malnutrition à Walikale et accompagnement des peuples autochtones en RDC.",
};

export default function AcceleratePage() {
  return (
    <div className="c-site-main o-site-container">
      {/* Module 0: c-hero-fullscreen */}
      <div className="o-module">
        <div
          className="c-hero-fullscreen"
          style={{
            backgroundImage: `url(/images/ppsdr/community-gathering-pavilion.webp)`,
            backgroundPosition: "right",
          }}
        >
          <div className="c-hero-fullscreen__inner o-layout-container c-hero-fullscreen__inner--align-left">
            <div className="c-hero-fullscreen__content c-hero-fullscreen__content__fullscreen_video">
              <h1 className="c-hero-fullscreen__title">Programme de Santé Communautaire</h1>
              <p className="c-hero-fullscreen__sub-title">
                La prévention, la sensibilisation et l&apos;accompagnement communautaire contribuent à améliorer durablement la santé des populations paysannes et des peuples autochtones en milieu rural.
              </p>
              <div className="c-hero-fullscreen__video--play--container">
                <Link href="/how-to-help" className="c-btn" style={{ textDecoration: "none" }}>
                  <span>Soutenir nos actions de santé</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="c-hero-fullscreen__mobile-image">
            <img
              src="/images/ppsdr/community-gathering-pavilion.webp"
              alt="Community meeting under an open-air pavilion"
            />
          </div>
        </div>
      </div>

      {/* Module 1: c-text-block-wrapper */}
      <div className="c-text-block-wrapper o-module c-text-block--right">
        <div className="o-layout-container">
          <div className="c-side-modules c-side-modules--third">
            <h2 className="c-module-heading">
              <strong>Journée mondiale de l&apos;allaitement maternel</strong>
            </h2>
          </div>
          <div className="o-content c-text-block c-text-block--third">
            <p className="lead">
              L&apos;allaitement maternel est le meilleur moyen de nourrir son enfant. Il lui apporte tous les nutriments nécessaires à sa croissance et à son développement harmonieux.
            </p>
            <p>
              Dans les milieux ruraux isolés de l&apos;Est de la RDC, l&apos;allaitement maternel exclusif constitue la première barrière de protection contre la malnutrition aiguë et les infections néonatales. PPSDR mène des campagnes de sensibilisation directe auprès des mères pygmées et paysannes.
            </p>
          </div>
        </div>
      </div>

      {/* Module 2: c-full-screen-media */}
      <div className="c-full-screen-media o-module">
        <div
          className="c-full-screen-media__image"
          style={{
            backgroundImage: `url(/images/ppsdr/community-portrait-rural-school.webp)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            minHeight: "450px",
            width: "100%",
          }}
        />
      </div>

      {/* Module 3: c-icon-block */}
      <div className="c-icon-block o-module c-ip-block--blueberry">
        <div className="o-layout-container">
          <h2 className="c-icon-block__title">
            <strong>Impact sanitaire et actions de terrain</strong>
          </h2>
          <div className="c-icon-block__scroll-overlay">
            <div className="c-icon-block__scroll-wrap">
              <div className="c-icon-block__content" data-mobile-scroll-inner="">
                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <h3 className="c-icon-block__heading">Dépistages précoces</h3>
                  <p className="c-icon-block__desc">
                    Identification rapide des enfants en situation de malnutrition sévère dans le territoire de Walikale et orientation médicale.
                  </p>
                </div>

                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <h3 className="c-icon-block__heading">Santé maternelle</h3>
                  <p className="c-icon-block__desc">
                    Sensibilisation aux pratiques d&apos;hygiène, espacement des naissances et protection de la santé de la mère et du nouveau-né.
                  </p>
                </div>

                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <h3 className="c-icon-block__heading">Urgences & Secours</h3>
                  <p className="c-icon-block__desc">
                    Intervention médicale et fourniture de trousses de premiers secours lors des sinistres communautaires à Idjwi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 4: c-text-block-wrapper */}
      <div className="c-text-block-wrapper o-module no-bottom-margin c-text-block--right">
        <div className="o-layout-container">
          <div className="c-side-modules c-side-modules--third">
            <h2 className="c-module-heading">
              <strong>Dépistage rapide à Walikale</strong>
            </h2>
          </div>
          <div className="o-content c-text-block c-text-block--third">
            <p className="lead">
              Les résultats du dépistage rapide de la malnutrition aiguë mené dans le territoire de Walikale confirment l&apos;urgence humanitaire et sanitaire.
            </p>
            <p>
              Pour répondre à cette vulnérabilité, PPSDR conjugue la prise en charge médicale d&apos;urgence avec l&apos;initiation aux cultures maraîchères locales afin d&apos;assurer une résilience nutritionnelle à long terme.
            </p>
          </div>
        </div>
      </div>

      {/* Module 5: c-icon-block */}
      <div className="c-icon-block o-module c-ip-block--white no-bottom-margin">
        <div className="o-layout-container">
          <h2 className="c-icon-block__title">
            <strong>Comment soutenir ce programme</strong>
          </h2>
          <div className="c-icon-block__scroll-overlay">
            <div className="c-icon-block__scroll-wrap">
              <div className="c-icon-block__content" data-mobile-scroll-inner="">
                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <h3 className="c-icon-block__heading">Mobile Money (RDC)</h3>
                  <p className="c-icon-block__desc">
                    Faites un don instantané via M-Pesa, Airtel Money ou Orange Money pour financer les bouillies enrichies et les soins de santé.
                  </p>
                  <Link href="/how-to-help" className="c-btn">Faire un don</Link>
                </div>

                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <h3 className="c-icon-block__heading">Partenariat médical</h3>
                  <p className="c-icon-block__desc">
                    Soutenez l&apos;équipement de nos équipes mobiles ou l&apos;approvisionnement en médicaments essentiels.
                  </p>
                  <Link href="/contact-us" className="c-btn c-btn--outline">Nous contacter</Link>
                </div>

                <div className="c-icon-card o-grid__m-1 o-grid__t-3 o-grid__d-3" data-mobile-scroll-card="">
                  <h3 className="c-icon-block__heading">Rapports d&apos;activité</h3>
                  <p className="c-icon-block__desc">
                    Consultez l&apos;ensemble de nos évaluations de terrain et rapports de missions sanitaires.
                  </p>
                  <Link href="/media-centre" className="c-btn c-btn--outline">Voir les rapports</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 6: c-discover-more-2 */}
      <div className="c-discover-more-2 o-module no-bottom-margin">
        <div className="o-layout-container">
          <h2 className="c-discover-more-2__title">Nos autres réalisations sur le terrain</h2>
          <div className="c-discover-more-2__grid">
            <Link className="c-discover-more-2__item" href="/stories-news-blogs" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Community meeting under an open-air pavilion"
                  src="/images/ppsdr/community-gathering-pavilion.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">
                  Réponse locale à la malnutrition à Goma
                </h3>
                <p className="c-discover-more-2__card-excerpt">
                  Cultures maraîchères et sécurité alimentaire en milieu péri-urbain pendant la crise.
                </p>
              </div>
            </Link>

            <Link className="c-discover-more-2__item" href="/about-us" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Community gathered at a rural school"
                  src="/images/ppsdr/community-school-gathering.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">
                  Partenariat avec MEDIHELP SUISSE
                </h3>
                <p className="c-discover-more-2__card-excerpt">
                  Actions conjointes pour les soins de base et l&apos;aide caritative en RDC.
                </p>
              </div>
            </Link>

            <Link className="c-discover-more-2__item" href="/where-we-work" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Farmers harvesting tomatoes beside a maize field"
                  src="/images/ppsdr/tomato-harvest-maize-field.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">
                  Projets intégrés sur l&apos;île d&apos;Idjwi
                </h3>
                <p className="c-discover-more-2__card-excerpt">
                  Santé, éducation et réinsertion agricole des peuples autochtones pygmées.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
