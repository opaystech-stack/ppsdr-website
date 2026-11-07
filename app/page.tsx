import Image from "next/image";
import {Link} from "@/i18n/navigation";
import type { CSSProperties } from "react";

export const metadata = {
  title: {absolute: "Soutenir les communautés rurales en RDC | PPSDR ONGD"},
  description: "Depuis 2011, PPSDR œuvre aux côtés des communautés rurales vulnérables en République démocratique du Congo.",
  alternates: {canonical: 'https://www.ppsdr.org/', languages: {fr: 'https://www.ppsdr.org/', en: 'https://www.ppsdr.org/en', 'x-default': 'https://www.ppsdr.org/'}},
  openGraph: {title: 'Soutenir les communautés rurales en RDC | PPSDR ONGD', description: 'Depuis 2011, PPSDR accompagne les peuples autochtones pygmées et les paysans vulnérables en RDC.', url: 'https://www.ppsdr.org/', type: 'website', images: [{url: 'https://www.ppsdr.org/images/ppsdr/share-card.webp', width: 1200, height: 630, alt: 'PPSDR accompagne les communautés rurales en RDC'}]},
  twitter: {card: 'summary_large_image', title: 'Soutenir les communautés rurales en RDC | PPSDR ONGD', description: 'PPSDR accompagne les peuples autochtones pygmées et les communautés rurales en RDC.', images: ['https://www.ppsdr.org/images/ppsdr/share-card.webp']},
};

const domains = [
  ["Santé", "Prévention, sensibilisation et accompagnement communautaire pour protéger la santé des familles.", "breastfeeding-health-workshop.webp", "Séance PPSDR d’information sur l’allaitement maternel avec des mères et des familles"],
  ["Agriculture", "Des activités agricoles utiles pour renforcer l’autonomie alimentaire des ménages.", "community-harvest-garden-sorting.webp", "Membres de la communauté triant une récolte dans un jardin"],
  ["Éducation", "Un accompagnement éducatif et pédagogique pour les enfants et les enseignants.", "schoolyard-sunlight.webp"],
  ["Sensibilisation", "Informer, mobiliser et faire participer les communautés autour des messages utiles.", "community-gathering-pavilion.webp"],
  ["Environnement", "Protection durable de la forêt et gestion responsable des ressources naturelles.", "ppsdr-riders-trail.webp"],
  ["Justice sociale", "Accompagnement des personnes vulnérables, inclusion sociale et défense des droits humains.", "village-courtyard-meeting.webp"],
];
const partners = [["PROLASA", "logo-prolasa.png"], ["Ashoka", "logo-ashoka.png"], ["FAO", "logo-fao.png"], ["MEDIHELP", "logo-medihelp.png"], ["Catalyst 2030", "logo-catalyst-2030.png"], ["AMA", "logo-ama.png"], ["OENDDF", "logo-oenddf.png"], ["ALHI", "logo-alhi.png"], ["La Maison de l’Artemisia", "logo-maison-artemisia.png"], ["SESAM", "logo-sesam.webp"]];

export default function HomePage() {
  const organization = {"@context":"https://schema.org","@type":"Organization",name:"Programmes de Promotion de la Santé et de Développement en Milieux Ruraux (PPSDR)",url:"https://www.ppsdr.org",logo:"https://www.ppsdr.org/images/ppsdr/logo-ppsdr.webp",email:["ppsdrcongo@gmail.com","ppsdrongdasbl@gmail.com"],telephone:"+243 997 133 925",address:{"@type":"PostalAddress",streetAddress:"18 Avenue Osso, Q. Virunga",addressLocality:"Goma",addressCountry:"CD"},sameAs:["https://www.facebook.com/profile.php?id=61593676719622","https://youtube.com/@PPSDRONGDasbl","https://www.linkedin.com/company/ppsdr-ongd/"]};
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organization)}}/><main className="ppsdr-home">
    <section className="o-module no-bottom-margin"><div className="c-hero-fullscreen" style={{ backgroundImage: "url(/images/ppsdr/multigenerational-village-portrait.webp)", backgroundPosition: "right center" }}>
      <div className="c-hero-fullscreen__inner o-layout-container c-hero-fullscreen__inner--align-left"><div className="c-hero-fullscreen__content">
        <h1 className="c-hero-fullscreen__title">Autonomiser les communautés rurales vulnérables</h1>
        <p className="c-hero-fullscreen__sub-title">PPSDR œuvre aux côtés des peuples autochtones pygmées et des paysans vulnérables de la RDC pour améliorer leur bien-être.</p>
        <Link href="/domaines" className="c-btn">Découvrir nos actions</Link>
      </div></div>
      <div className="c-hero-fullscreen__mobile-image"><Image src="/images/ppsdr/multigenerational-village-portrait.webp" alt="Familles et membres de l’équipe PPSDR réunis dans un village du Nord-Kivu" width={1600} height={900} priority /></div>
    </div></section>

    <section className="ppsdr-highlights" aria-labelledby="highlights-title">
      <div className="ppsdr-highlights__story"><div className="ppsdr-highlights__story-inner">
        <h2 id="highlights-title">Agir pour que chaque communauté puisse vivre dans la dignité et faire valoir ses droits</h2>
        <p>En République démocratique du Congo, des millions de personnes restent confrontées à l’exclusion, à la précarité et à des obstacles dans l’accès aux services essentiels. Les peuples autochtones pygmées sont particulièrement touchés par ces inégalités. Depuis 2011, PPSDR agit à leurs côtés pour défendre leurs droits, favoriser leur inclusion et améliorer leurs conditions de vie.</p>
      </div></div>
      <div className="ppsdr-highlights__issues"><h2>Les défis auxquels les communautés font face</h2><div className="ppsdr-highlights__issue-list">
        {[
          ["Marginalisés et privés d’éducation de base", "PPSDR œuvre pour faciliter l’accès à l’éducation et offrir aux communautés des possibilités d’apprentissage.", "schoolchildren-brick-school.webp"],
          ["Expulsés de force de leurs terres, devenus nomades", "PPSDR accompagne les communautés dans la défense de leurs droits fonciers et la protection de leurs terres.", "justice-community-concession-meeting.jpg"],
          ["Privés de droits fondamentaux", "PPSDR agit pour défendre les droits fondamentaux, lutter contre les discriminations et favoriser l’inclusion.", "vibrant-village-portrait.webp"],
        ].map(([title, text, image]) => <article className="ppsdr-issue" key={title}><Image src={`/images/ppsdr/${image}`} alt={title} width={250} height={250}/><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </div></div>
    </section>

    <section className="ppsdr-domains o-module" aria-labelledby="domains-title"><div className="o-layout-container"><h2 id="domains-title">Des initiatives qui changent concrètement le quotidien des communautés</h2>
      <div className="ppsdr-domain-grid">{domains.map(([name, text, image, alt]) => <Link href={`/domaines/${name === "Santé" ? "sante" : name === "Éducation" ? "education" : name === "Justice sociale" ? "justice-sociale" : name === "Sensibilisation" ? "sensibilisation" : name === "Environnement" ? "environnement" : "agriculture"}`} className="ppsdr-domain-card" key={name}><Image src={`/images/ppsdr/${image}`} alt={alt || `${name} : action de PPSDR auprès des communautés`} width={500} height={300}/><div><h3>{name}</h3><p>{text}</p></div></Link>)}</div>
    </div></section>

    <section className="ppsdr-results o-module" aria-labelledby="results-title"><div className="o-layout-container"><h2 id="results-title">Des résultats concrets, sur le terrain</h2><div className="ppsdr-results-grid">
      {[["27%", "de pygmées alphabétisés", "#A2C3C8"], ["+10K", "certificats d’études primaires", "#46818F"], ["+125K", "familles desservies", "#E9A13B"], ["30", "concessions communautaires acquises", "#D00000"], ["500K", "bénéficiaires de nos écoles", "#7FB5BB"], ["800K", "personnes formées en agriculture", "#F2E8D5"]].map(([n, label, color]) => <article key={n} style={{ "--stat-color": color } as CSSProperties}><strong>{n}</strong><span>{label}</span></article>)}
    </div></div></section>

    <section className="ppsdr-steps o-module" style={{ backgroundImage: "linear-gradient(90deg,rgba(28,26,39,.08),rgba(28,26,39,.06)),url(/images/ppsdr/rural-meeting-masisi.webp)" }}><div className="o-layout-container"><div className="ppsdr-steps-panel"><h2>Un accompagnement pas à pas</h2><div className="ppsdr-step-list">
      {[["Écoutons les besoins des communautés", "Comprendre les réalités locales pour identifier les priorités et les actions à mener."], ["Construisons des solutions adaptées", "Mobiliser les ressources et les compétences pour répondre aux défis rencontrés sur le terrain."], ["Avançons ensemble vers le changement", "Accompagner les initiatives locales pour renforcer l’autonomie et améliorer durablement les conditions de vie."]].map(([title, text], i) => <article key={title}><span>0{i + 1}</span><p><strong>{title} :</strong> {text}</p></article>)}
    </div></div></div></section>

    <section className="ppsdr-work o-module" aria-labelledby="work-title"><div className="o-layout-container"><h2 id="work-title">Ce que nous faisons, concrètement</h2><div className="ppsdr-work-grid">
      {[["Éducation", "Plus d’enfants à l’école", "Sensibilisation des communautés, soutien à l’inscription scolaire, bourses d’études et formation des enseignants locaux.", "rural-classroom-students.webp", "lead", "Élèves suivant un cours dans une salle de classe rurale en briques"], ["Santé", "Des mères et des enfants en meilleure santé", "Formation des matrones et agents de santé, matériel de santé maternelle, planification familiale et partenariats avec les centres de santé.", "clinic-registration-ppsdr.webp", "", "Équipe PPSDR enregistrant une mère et son enfant à la clinique"], ["Sécurité alimentaire", "Des récoltes pour nourrir les familles", "Formation aux techniques agricoles adaptées, distribution de semences, orientation vers les crédits agricoles et recherche de marchés.", "tomato-harvest-maize-field.webp", "", "Producteurs présentant une récolte de tomates dans un champ de maïs"]].map(([title, heading, text, image, lead, alt]) => <Link href={`/domaines/${title === "Éducation" ? "education" : title === "Santé" ? "sante" : "agriculture"}`} className={`ppsdr-work-card ${lead ? "ppsdr-work-card--lead" : ""}`} key={title}><Image src={`/images/ppsdr/${image}`} alt={alt} width={680} height={420}/><div className="ppsdr-work-card__body"><span>Actions / {title}</span><h3>{heading}</h3><p>{text}</p></div></Link>)}
    </div></div></section>

    <section className="ppsdr-donate c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><h2>Votre don agit sur le terrain</h2><p>En faisant un don, vous contribuez à améliorer le cadre de vie des personnes vulnérables et des populations pygmées en République démocratique du Congo.</p><Link href="/faire-un-don" className="c-btn c-btn--outline">Faire un don</Link></div></div></section>

    <section className="ppsdr-partners o-module"><div className="o-layout-container"><h2>Ils avancent avec nous</h2><div className="ppsdr-partner-logos">{partners.map(([name, file]) => <div key={name}><Image src={`/images/partners/${file}`} alt={`Logo ${name}`} width={180} height={100}/></div>)}</div><div className="ppsdr-partner-actions"><Link href="/partenariat" className="c-btn">Partenariat</Link></div></div></section>

    <section className="ppsdr-contact o-module"><div className="o-layout-container ppsdr-contact-grid"><div className="ppsdr-contact-story"><h2>Une question ? Écrivez-nous.</h2><Image src="/images/ppsdr/ppsdr-aid-team-vehicle.webp" alt="PPSDR aid team gathered beside a vehicle before an intervention" width={760} height={500}/><p>Contactez notre équipe pour toute question sur nos actions, nos partenariats ou nos interventions sur le terrain.</p><address><a href="tel:+243997133925">+243 997 133 925</a><br/><a href="mailto:ppsdrcongo@gmail.com">ppsdrcongo@gmail.com</a><br/>18 Avenue Osso, Q. Virunga, Goma, RDC.</address></div>
      <div className="ppsdr-contact-form"><p>Écrivez-nous pour en savoir plus sur nos actions et nos partenariats.</p><form><label>Nom<input name="name"/></label><label>Adresse e-mail ou téléphone<input name="contact"/></label><label>Votre message<textarea name="message" rows={4}/></label><button type="button" disabled>Envoyer</button></form></div>
    </div></section>
  </main></>;
}
