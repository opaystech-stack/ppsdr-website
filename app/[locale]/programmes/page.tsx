import React from "react";
import Image from "next/image";
import {Link} from "@/i18n/navigation";

export const metadata = {
  title: "Nos domaines d'intervention | PPSDR ONGD",
  description:
    "Découvrez les 6 domaines d'action intégrés de PPSDR en République démocratique du Congo : Santé, Agriculture, Éducation, Sensibilisation, Environnement et Métiers.",
};

export default function ProgrammesPage() {
  return (
    <div className="c-site-main o-site-container">
      {/* Module 0: c-hero */}
      <div className="c-hero o-module no-bottom-margin">
        <div className="c-hero__layout-container">
          <div className="c-hero__content">
            <h1 className="c-hero__header">Nos domaines d&apos;intervention</h1>
            <div className="o-border-small" />
            <div className="o-flex">
              <div className="c-hero__body">
                <div className="c-hero__body-text">
                  <p>
                    PPSDR déploie des programmes intégrés pour l&apos;encadrement des peuples autochtones pygmées et des paysans vulnérables dans les milieux ruraux de la RDC : santé communautaire, sécurité alimentaire, éducation, qualification des femmes et conservation environnementale.
                  </p>
                </div>
              </div>
              <div className="c-hero__media">
                <img
                  alt="Farmers harvesting tomatoes beside a maize field"
                  src="/images/ppsdr/tomato-harvest-maize-field.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 2: c-discover-more-2 (Current programmes / 3 core domains) */}
      <div className="c-discover-more-2 o-module no-bottom-margin">
        <div className="o-layout-container">
          <h2 className="c-discover-more-2__title">Nos programmes prioritaires</h2>
          <div className="c-discover-more-2__grid">
            <Link className="c-discover-more-2__item" href="/programmes/accelerate" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Community members taking part in a health workshop"
                  src="/images/ppsdr/community-workshop.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">DOMAINE DE LA SANTÉ</h3>
                <p className="c-discover-more-2__card-excerpt">
                  La prévention, la sensibilisation et l&apos;accompagnement communautaire contribuent à améliorer la santé des populations. Nos équipes organisent des dépistages nutritionnels et des soins de proximité.
                </p>
              </div>
            </Link>

            <Link className="c-discover-more-2__item" href="/where-we-work" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Community members harvesting cabbages"
                  src="/images/ppsdr/cabbage-harvest.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">DOMAINE DE L&apos;AGRICULTURE</h3>
                <p className="c-discover-more-2__card-excerpt">
                  PPSDR conduit un projet d&apos;initiation à l&apos;agriculture destiné aux peuples pygmées : apprentissage des techniques maraîchères, mise en valeur des champs collectifs et autonomie alimentaire.
                </p>
              </div>
            </Link>

            <Link className="c-discover-more-2__item" href="/about-us" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Élèves et membres de la communauté réunis dans une école rurale"
                  src="/images/ppsdr/community-school-gathering.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">DOMAINE DE L&apos;ÉDUCATION</h3>
                <p className="c-discover-more-2__card-excerpt">
                  Oublier l&apos;éducation des peuples pygmées, c&apos;est compromettre leur développement. PPSDR met en place des centres de rattrapage scolaire et distribue des kits de fournitures.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Module 4: c-discover-more-2 (Recent programmes / 3 other domains) */}
      <div className="c-discover-more-2 o-module">
        <div className="o-layout-container">
          <h2 className="c-discover-more-2__title">Autres volets d&apos;intervention</h2>
          <div className="c-discover-more-2__grid">
            <Link className="c-discover-more-2__item" href="/about-us" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Women learning practical tailoring skills"
                  src="/images/ppsdr/COUTURE.jpg"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">APPRENTISSAGE DES MÉTIERS</h3>
                <p className="c-discover-more-2__card-excerpt">
                  Lancement officiel du projet de coupe et couture : acquisition d&apos;une qualification pratique permettant aux femmes pygmées de générer leurs propres revenus.
                </p>
              </div>
            </Link>

            <Link className="c-discover-more-2__item" href="/about-us" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Communauté réunie sous un pavillon en plein air"
                  src="/images/ppsdr/community-gathering-pavilion.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">SENSIBILISATION COMMUNAUTAIRE</h3>
                <p className="c-discover-more-2__card-excerpt">
                  La sensibilisation permet aux communautés autochtones d&apos;exprimer leurs besoins et de prendre conscience de leurs droits fondamentaux.
                </p>
              </div>
            </Link>

            <Link className="c-discover-more-2__item" href="/stories-news-blogs" style={{ flex: 1 }}>
              <div className="c-discover-more-2__image c-tease-card__image">
                <img
                  alt="Équipe PPSDR en déplacement sur un sentier forestier"
                  src="/images/ppsdr/ppsdr-riders-trail.webp"
                />
              </div>
              <div className="c-discover-more-2__card-content">
                <h3 className="c-discover-more-2__card-header">PROTECTION DE L&apos;ENVIRONNEMENT</h3>
                <p className="c-discover-more-2__card-excerpt">
                  Les communautés autochtones jouent un rôle crucial dans la restauration forestière et la conservation des grands singes dans le territoire de Lubero.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Module 6: c-text-block-wrapper */}
      <div className="c-text-block-wrapper o-module c-text-block--right">
        <div className="o-layout-container">
          <div className="c-side-modules c-side-modules--third">
            <h2 className="c-module-heading">
              <strong>Évaluations & Rapports</strong>
            </h2>
          </div>
          <div className="o-content c-text-block c-text-block--third">
            <p className="lead">
              Nous évaluons régulièrement nos programmes pour mesurer leurs réalisations concrètes et optimiser nos méthodes d&apos;intervention sur le terrain congolais.
            </p>
            <p>
              Consultez nos bilans d&apos;étape, nos rapports d&apos;activité et les évaluations indépendantes conduites avec nos partenaires internationaux.
            </p>
            <p>
              <Link className="c-btn" href="/media-centre">
                Consulter les rapports & documents
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Module 7: c-cta-basic */}
      <div className="c-cta-basic o-module no-bottom-margin default">
        <div className="c-cta-basic__inner o-layout-container">
          <div className="c-cta-basic__content">
            <p className="">Vous souhaitez soutenir l&apos;un de nos programmes sur le terrain ?</p>
            <Link className="c-btn c-btn--outline cta-no-image" href="/how-to-help" id="cta">
              <span>Faire un don de solidarité</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
