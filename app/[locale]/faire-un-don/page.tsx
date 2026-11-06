import { Link } from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";
import { DonationOptions } from "@/components/DonationOptions";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return { title: params.locale === "en" ? "Donate | PPSDR" : "Faire un don | PPSDR" };
}

const impactFr = [
  ["Santé", "Soins de santé sexuelle et reproductive, dépistage de la malnutrition et promotion de l'allaitement pour les mères et les enfants.", "100% alloué aux soins de santé des mères et des enfants."],
  ["Éducation", "Scolarisation des enfants pygmées, bourses d'études et fournitures scolaires.", "100% alloué à la scolarisation et aux bourses."],
  ["Sécurité alimentaire et agriculture", "Formations agricoles, semences et cultures maraîchères pour nourrir les familles.", "100% alloué aux semences, aux formations et aux germoirs."],
  ["Environnement et justice sociale", "Protection des gorilles de Grauer et des forêts, plaidoyer pour les droits fonciers des communautés.", "100% alloué à la protection de la nature et à la défense des droits."],
];
const impactEn = [
  ["Health", "Sexual and reproductive health care, malnutrition screening, and breastfeeding support for mothers and children.", "100% allocated to health care for mothers and children."],
  ["Education", "School enrolment for Pygmy children, scholarships, and school supplies.", "100% allocated to schooling and scholarships."],
  ["Food security and agriculture", "Agricultural training, seeds, and market gardening to help feed families.", "100% allocated to seeds, training, and nurseries."],
  ["Environment and social justice", "Protection of Grauer’s gorillas and forests, and advocacy for community land rights.", "100% allocated to nature protection and the defence of rights."],
];

export default function FaireUnDonPage({ params }: { params: { locale: string } }) {
  const en = params.locale === "en";
  const impact = en ? impactEn : impactFr;
  return <main className="c-site-main o-site-container ppsdr-donation-page">
    <PageIntro eyebrow={en ? "Secure giving" : "Don sécurisé"} title={en ? "Your donation makes a difference on the ground" : "Votre don agit sur le terrain"}>
      <span>{en ? "Your contribution supports Indigenous Pygmy peoples and vulnerable farmers in rural areas of the DRC: health, education, food security, the environment, and social justice." : "Votre contribution soutient les peuples autochtones pygmées et les paysans vulnérables des milieux ruraux de la RDC : santé, éducation, sécurité alimentaire, environnement et justice sociale."}</span>
      <span className="ppsdr-donation-registration">{en ? "ONGD founded on 5 October 2011 in Goma, DRC" : "ONGD fondée le 5 octobre 2011 à Goma, RDC"}</span>
      <span className="ppsdr-donation-registration">{en ? "Registration number: to be completed by the client" : "Numéro d'enregistrement : à compléter par le client"}</span>
      <span className="ppsdr-donation-registration">{en ? "Governance: public reports and transparent management" : "Gouvernance : rapports publics et gestion transparente"}</span>
    </PageIntro>

    <section className="ppsdr-donation-section o-module" aria-label={en ? "Donation form" : "Formulaire de don"}>
      <div className="o-layout-container"><DonationOptions locale={en ? "en" : "fr"} /></div>
    </section>

    <section className="ppsdr-donation-impact o-module" aria-labelledby="donation-impact-title">
      <div className="o-layout-container">
        <div className="ppsdr-section-heading"><h2 id="donation-impact-title">{en ? "THE IMPACT OF YOUR CONTRIBUTION" : "L’IMPACT DE VOTRE CONTRIBUTION"}</h2><p>{en ? "The allocations shown describe the planned use of funds for each area of work." : "Les allocations indiquées décrivent les affectations prévues pour chaque domaine d'intervention."}</p></div>
        <div className="ppsdr-donation-impact-grid">{impact.map(([title, text, allocation]) => <article className="ppsdr-donation-impact-card" key={title}><span className="ppsdr-impact-check" aria-hidden="true">✓</span><h3>{title}</h3><p>{text}</p><strong>{allocation}</strong></article>)}</div>
      </div>
    </section>

    <section className="ppsdr-donation-transparency o-module" aria-labelledby="donation-transparency-title">
      <div className="o-layout-container"><div className="ppsdr-section-heading"><h2 id="donation-transparency-title">{en ? "TRANSPARENCY AND RECEIPTS" : "TRANSPARENCE ET REÇUS"}</h2><p>{en ? "PPSDR is committed to responsible fund management, activity monitoring, and providing official receipts on request." : "PPSDR s'engage à assurer une gestion responsable des fonds, un suivi des activités et la remise de reçus officiels sur demande."}</p><Link href="/rapports" className="c-btn">{en ? "View our reports" : "Voir nos rapports"}</Link></div><p className="ppsdr-donation-contact">{en ? "Direct contact:" : "Contact direct :"} <a href="mailto:ppsdrcongo@gmail.com">ppsdrcongo@gmail.com</a> — <a href="tel:+243997133925">+243 997 133 925</a></p></div>
    </section>
  </main>;
}
