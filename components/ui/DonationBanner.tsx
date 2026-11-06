"use client";

import { Link } from "@/i18n/navigation";

export function DonationBanner({ locale }: { locale: "fr" | "en" }) {
  const en = locale === "en";
  return <section className="ppsdr-donation-banner" aria-labelledby="ppsdr-donation-banner-title">
    <div className="o-layout-container">
      <div className="ppsdr-donation-banner__content">
        <h2 id="ppsdr-donation-banner-title">{en ? "Your donation makes a difference on the ground" : "Votre don agit sur le terrain"}</h2>
        <p>{en ? "Your contribution supports Indigenous Pygmy peoples and vulnerable farmers in rural areas of the DRC." : "Votre contribution soutient les peuples autochtones pygmées et les paysans vulnérables des milieux ruraux de la RDC."}</p>
        <Link href="/faire-un-don" className="c-btn">{en ? "Donate" : "Faire un don"}</Link>
      </div>
    </div>
  </section>;
}
