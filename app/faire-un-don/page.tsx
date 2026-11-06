import Image from "next/image";
import {Link} from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";
import { DonationOptions } from "@/components/DonationOptions";

export const metadata = { title: "Faire un don | PPSDR" };

const impact = [
  ["Santé", "Prévention, accompagnement des mères et accès aux soins de proximité.", "community-workshop.webp", "/domaines/sante"],
  ["Éducation", "Soutien à la scolarisation, aux élèves et aux enseignants des communautés.", "schoolchildren-brick-school.webp", "/domaines/education"],
  ["Sécurité alimentaire", "Formations et pratiques agricoles adaptées aux familles rurales.", "cabbage-harvest.webp", "/domaines/agriculture"],
];

export default function FaireUnDonPage() {
  return <main className="c-site-main o-site-container ppsdr-donation-page">
    <PageIntro eyebrow="Soutenir PPSDR" title="Votre don agit sur le terrain">Chaque contribution aide PPSDR à accompagner les peuples autochtones pygmées et les paysans vulnérables de la RDC.</PageIntro>
    <section className="ppsdr-donation-section o-module"><div className="o-layout-container"><div className="ppsdr-section-heading"><span>Contribuer à notre action</span><h2>Choisissez votre moyen de don</h2><p>Indiquez votre préférence et l’équipe PPSDR vous transmettra les informations nécessaires pour effectuer le versement.</p></div><DonationOptions/></div></section>
    <section className="ppsdr-donation-impact o-module"><div className="o-layout-container"><div className="ppsdr-section-heading"><span>Un soutien concret</span><h2>Votre générosité accompagne les communautés</h2></div><div className="ppsdr-donation-impact-grid">{impact.map(([title, text, image, href]) => <Link href={href} className="ppsdr-donation-impact-card" key={title}><Image src={`/images/ppsdr/${image}`} alt="" width={600} height={360}/><div><h3>{title}</h3><p>{text}</p><span>Découvrir ce domaine →</span></div></Link>)}</div><p className="ppsdr-donation-contact">Vous souhaitez devenir partenaire ? <Link href="/devenir-partenaire">Échangeons avec PPSDR.</Link></p></div></section>
  </main>;
}
