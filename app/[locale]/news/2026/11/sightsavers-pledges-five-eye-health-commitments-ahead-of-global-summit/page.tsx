import React from "react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";

export const metadata = {
  title: "Le Fondateur de PPSDR, un Ashoka fellow au sommet inaugural de Nairobi | PPSDR ONGD",
  description:
    "Mr Hénoc MUHINDO, Fondateur de PPSDR et Ashoka Fellow, a pris part au sommet inaugural des boursiers Ashoka tenu à Nairobi.",
};

export default function SingleArticlePage() {
  return (
    <div className="c-site-main o-site-container">
      {/* Module 0: c-default-hero */}
      <div className="c-default-hero o-module c-default-hero--post">
        <div className="o-layout-container">
          <div className="c-hero-fullscreen__content c-default-hero__title--long">
            <span className="text-xs font-bold uppercase tracking-wider text-[#960051] block mb-2">
              Actualités / Entrepreneuriat Social / Nairobi 2025
            </span>
            <h1 className="c-default-hero__title">
              Le Fondateur de PPSDR, Mr Hénoc MUHINDO, un Ashoka fellow au sommet inaugural de Nairobi
            </h1>
          </div>
        </div>
      </div>

      {/* Module 1: c-text-block-wrapper */}
      <div className="c-text-block-wrapper o-module no-bottom-margin c-text-block--right">
        <div className="o-layout-container">
          <div className="c-side-modules c-side-modules--third">
            <h2 className="c-module-heading">
              <strong>Transformation systémique</strong>
            </h2>
            <div className="text-sm text-gray-500 mt-4">
              <p><strong>Auteur :</strong> Rédaction PPSDR</p>
              <p><strong>Date :</strong> Septembre 2025</p>
              <p><strong>Lieu :</strong> Nairobi, Kenya</p>
            </div>
          </div>
          <div className="o-content c-text-block c-text-block--third">
            <div style={{ marginBottom: "2rem" }}>
              <img
                alt="Community meeting under an open-air pavilion"
                src="/images/ppsdr/community-gathering-pavilion.webp"
                style={{ width: "100%", height: "auto", borderRadius: "4px" }}
              />
              <span className="text-xs text-gray-500 block mt-1">
                Mr Hénoc MUHINDO, Fondateur de PPSDR, au sommet inaugural des boursiers Ashoka à Nairobi.
              </span>
            </div>

            <p className="lead">
              Le Fondateur de PPSDR, Mr Hénoc MUHINDO, un Ashoka fellow a pris part au sommet inaugural des boursiers Ashoka tenu à Nairobi, du 10 au 12 septembre 2025.
            </p>
            <p>
              Ce sommet historique a été une opportunité majeure pour plus de 80 entrepreneurs sociaux d&apos;Afrique centrale, orientale et australe de se réunir, d&apos;échanger sur leurs innovations respectives et de bâtir des collaborations durables pour un changement systémique à grande échelle au sein de leurs communautés.
            </p>

            <blockquote style={{ borderLeft: "4px solid #960051", paddingLeft: "1.5rem", margin: "2rem 0", fontStyle: "italic" }}>
              &laquo; ASHOKA est une organisation internationale qui rassemble les plus grands entrepreneurs sociaux du monde, unis par une vision audacieuse : Everyone A Changemaker. Notre engagement est d&apos;apporter cette vision au service des populations rurales les plus vulnérables de la République démocratique du Congo. &raquo;
            </blockquote>

            <p>
              Au cours des sessions plénières et des ateliers de travail collaboratif, Mr Hénoc MUHINDO a partagé le modèle novateur développé par PPSDR au Nord et Sud-Kivu : conjuguer santé communautaire, réinsertion agricole des peuples autochtones pygmées et conservation participative des forêts face aux crises récurrentes.
            </p>
            <p>
              Cette reconnaissance internationale conforte la démarche de PPSDR et ouvre de nouvelles perspectives de partenariats stratégiques pour amplifier l&apos;impact sur le terrain congolais.
            </p>
          </div>
        </div>
      </div>

      {/* Module 2: c-share-page */}
      <div className="c-share-page o-module">
        <div className="o-layout-container" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.5rem 0", borderTop: "1px solid #e5e9e8", borderBottom: "1px solid #e5e9e8" }}>
          <span style={{ fontWeight: 700, color: "#403a60" }}>Partager cet article :</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="c-btn c-btn--outline"
            style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="c-btn c-btn--outline"
            style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}
          >
            X (Twitter)
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="c-btn c-btn--outline"
            style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Module 3: c-cta-basic */}
      <div className="c-cta-basic o-module no-bottom-margin default">
        <div className="c-cta-basic__inner o-layout-container">
          <div className="c-cta-basic__content">
            <p className="">Découvrez toutes nos actualités et nos récits de terrain</p>
            <Link className="c-btn c-btn--outline cta-no-image" href="/stories-news-blogs" id="cta">
              <span>Toutes les publications de PPSDR</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Module 4: c-discover-more */}
      <div className="c-discover-more o-module">
        <div className="o-layout-container">
          <h2 className="c-discover-more__title" style={{ fontSize: "1.75rem", marginBottom: "1.5rem" }}>
            Articles et récits connexes
          </h2>
          <div className="c-discover-more-2__grid">
            <Link className="c-discover-more-2__item" href="/stories-news-blogs" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Community members taking part in a health workshop"
                  src="/images/ppsdr/community-workshop.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">
                  Restauration forestière en faveur des animaux en péril
                </h3>
                <p className="c-discover-more-2__card-excerpt">
                  Les communautés autochtones pygmées restaurent la forêt en faveur des espèces menacées à Lubero.
                </p>
              </div>
            </Link>

            <Link className="c-discover-more-2__item" href="/stories-news-blogs" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Community members taking part in a health workshop"
                  src="/images/ppsdr/community-workshop.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">
                  Solution locale à la malnutrition à Goma
                </h3>
                <p className="c-discover-more-2__card-excerpt">
                  Cultures maraîchères et résilience alimentaire des ménages vulnérables pendant la guerre.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Module 5: c-email-module */}
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
                  Recevez nos rapports de mission et nos récits d&apos;impact en RDC.
                </p>
                <form action="#" className="c-email-signup__form">
                  <div className="c-email-signup__field c-email-signup__field--name">
                    <label className="c-email-signup__label" htmlFor="name-article">
                      Prénom & Nom
                    </label>
                    <input
                      autoComplete="name"
                      className="c-email-signup__input"
                      id="name-article"
                      name="name"
                      placeholder="Votre nom complet"
                      required
                    />
                  </div>
                  <div className="c-email-signup__field c-email-signup__field--email">
                    <label className="c-email-signup__label" htmlFor="email-article">
                      Adresse e-mail
                    </label>
                    <input
                      autoComplete="email"
                      className="c-email-signup__input"
                      id="email-article"
                      name="email"
                      placeholder="votre.email@exemple.com"
                      required
                      type="email"
                    />
                  </div>
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
