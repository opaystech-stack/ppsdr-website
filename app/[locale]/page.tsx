import Image from "next/image";
import {Link} from "@/i18n/navigation";
import type { CSSProperties } from "react";

export function generateMetadata({ params }: { params: { locale: string } }) {
  return params.locale === "en"
    ? { title: "PPSDR NGO | Empowering vulnerable rural communities", description: "Since 2011, PPSDR has worked alongside vulnerable rural communities in the Democratic Republic of the Congo." }
    : { title: "PPSDR ONGD | Autonomiser les communautés rurales vulnerables", description: "Depuis 2011, PPSDR œuvre aux côtés des communautés rurales vulnérables en République démocratique du Congo." };
}

const domains = [
  ["Santé", "Prévention, sensibilisation et accompagnement communautaire pour protéger la santé des familles.", "community-workshop.webp"],
  ["Agriculture", "Des activités agricoles utiles pour renforcer l’autonomie alimentaire des ménages.", "cabbage-harvest.webp"],
  ["Éducation", "Un accompagnement éducatif et pédagogique pour les enfants et les enseignants.", "schoolyard-sunlight.webp"],
  ["Sensibilisation", "Informer, mobiliser et faire participer les communautés autour des messages utiles.", "community-gathering-pavilion.webp"],
  ["Environnement", "Protection durable de la forêt et gestion responsable des ressources naturelles.", "rural-meeting-masisi.webp"],
  ["Justice sociale", "Accompagnement des personnes vulnérables, inclusion sociale et défense des droits humains.", "vibrant-village-portrait.webp"],
];
const partners = [["PROLASA", "logo-prolasa.png"], ["Ashoka", "logo-ashoka.png"], ["FAO", "logo-fao.png"], ["MEDIHELP", "logo-medihelp.png"], ["Catalyst 2030", "logo-catalyst-2030.png"], ["AMA", "logo-ama.png"], ["OENDDF", "logo-oenddf.png"], ["ALHI", "logo-alhi.png"], ["La Maison de l’Artemisia", "logo-maison-artemisia.png"], ["SESAM", "logo-sesam.jpeg"]];

export default function HomePage({params}: {params: {locale: string}}) {
  if (params.locale === 'en') return <EnglishHomePage />;
  return <main className="ppsdr-home">
    <section className="o-module no-bottom-margin"><div className="c-hero-fullscreen" style={{ backgroundImage: "url(/images/ppsdr/hero-community-ppsdr.webp)", backgroundPosition: "right center" }}>
      <div className="c-hero-fullscreen__inner o-layout-container c-hero-fullscreen__inner--align-left"><div className="c-hero-fullscreen__content">
        <h1 className="c-hero-fullscreen__title">Autonomiser les communautés rurales vulnerables</h1>
        <p className="c-hero-fullscreen__sub-title">PPSDR œuvre aux côtés des peuples autochtones pygmées et des paysans vulnérables de la RDC pour améliorer leur bien-être.</p>
        <Link href="/domaines" className="c-btn">Découvrir nos actions</Link>
      </div></div>
      <div className="c-hero-fullscreen__mobile-image"><Image src="/images/ppsdr/hero-community-ppsdr.webp" alt="Des familles et des enfants réunis dans un village du Nord-Kivu" width={720} height={960} /></div>
    </div></section>

    <section className="ppsdr-highlights" aria-labelledby="highlights-title">
      <div className="ppsdr-highlights__story"><div className="ppsdr-highlights__story-inner">
        <h2 id="highlights-title">Agir pour que chaque communauté puisse vivre dans la dignité et faire valoir ses droits</h2>
        <p>En République démocratique du Congo, des millions de personnes restent confrontées à l’exclusion, à la précarité et à des obstacles dans l’accès aux services essentiels. Les peuples autochtones pygmées sont particulièrement touchés par ces inégalités. Depuis 2011, PPSDR agit à leurs côtés pour défendre leurs droits, favoriser leur inclusion et améliorer leurs conditions de vie.</p>
      </div></div>
      <div className="ppsdr-highlights__issues"><h2>Les défis auxquels les communautés font face</h2><div className="ppsdr-highlights__issue-list">
        {[
          ["Marginalisés et privés d’éducation de base", "PPSDR œuvre pour faciliter l’accès à l’éducation et offrir aux communautés des possibilités d’apprentissage.", "schoolchildren-brick-school.webp"],
          ["Expulsés de force de leurs terres, devenus nomades", "PPSDR accompagne les communautés dans la défense de leurs droits fonciers et la protection de leurs terres.", "multigenerational-village-portrait.webp"],
          ["Privés de droits fondamentaux", "PPSDR agit pour défendre les droits fondamentaux, lutter contre les discriminations et favoriser l’inclusion.", "village-courtyard-meeting.webp"],
        ].map(([title, text, image]) => <article className="ppsdr-issue" key={title}><Image src={`/images/ppsdr/${image}`} alt="" width={250} height={250}/><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </div></div>
    </section>

    <section className="ppsdr-domains o-module" aria-labelledby="domains-title"><div className="o-layout-container"><h2 id="domains-title">Des initiatives qui changent concrètement le quotidien des communautés</h2>
      <div className="ppsdr-domain-grid">{domains.map(([name, text, image]) => <Link href={`/domaines/${name === "Santé" ? "sante" : name === "Éducation" ? "education" : name === "Justice sociale" ? "justice-sociale" : name === "Sensibilisation" ? "sensibilisation" : name === "Environnement" ? "environnement" : "agriculture"}`} className="ppsdr-domain-card" key={name}><Image src={`/images/ppsdr/${image}`} alt="" width={500} height={300}/><div><h3>{name}</h3><p>{text}</p></div></Link>)}</div>
    </div></section>

    <section className="ppsdr-results o-module" aria-labelledby="results-title"><div className="o-layout-container"><h2 id="results-title">Des résultats concrets, sur le terrain</h2><div className="ppsdr-results-grid">
      {[["27%", "de pygmées alphabétisés", "#A2C3C8"], ["+10K", "certificats d’études primaires", "#46818F"], ["+125K", "familles desservies", "#E9A13B"], ["30", "concessions communautaires acquises", "#D00000"], ["500K", "bénéficiaires de nos écoles", "#7FB5BB"], ["800K", "personnes formées en agriculture", "#F2E8D5"]].map(([n, label, color]) => <article key={n} style={{ "--stat-color": color } as CSSProperties}><strong>{n}</strong><span>{label}</span></article>)}
    </div></div></section>

    <section className="ppsdr-steps o-module" style={{ backgroundImage: "linear-gradient(90deg,rgba(28,26,39,.08),rgba(28,26,39,.06)),url(/images/ppsdr/community-gathering-pavilion.webp)" }}><div className="o-layout-container"><div className="ppsdr-steps-panel"><h2>Un accompagnement pas à pas</h2><div className="ppsdr-step-list">
      {[["Écoutons les besoins des communautés", "Comprendre les réalités locales pour identifier les priorités et les actions à mener."], ["Construisons des solutions adaptées", "Mobiliser les ressources et les compétences pour répondre aux défis rencontrés sur le terrain."], ["Avançons ensemble vers le changement", "Accompagner les initiatives locales pour renforcer l’autonomie et améliorer durablement les conditions de vie."]].map(([title, text], i) => <article key={title}><span>0{i + 1}</span><p><strong>{title} :</strong> {text}</p></article>)}
    </div></div></div></section>

    <section className="ppsdr-work o-module" aria-labelledby="work-title"><div className="o-layout-container"><h2 id="work-title">Ce que nous faisons, concrètement</h2><div className="ppsdr-work-grid">
      {[["Éducation", "Plus d’enfants à l’école", "Sensibilisation des communautés, soutien à l’inscription scolaire, bourses d’études et formation des enseignants locaux.", "community-school-gathering.webp", "lead"], ["Santé", "Des mères et des enfants en meilleure santé", "Formation des matrones et agents de santé, matériel de santé maternelle, planification familiale et partenariats avec les centres de santé.", "community-workshop.webp", ""], ["Sécurité alimentaire", "Des récoltes pour nourrir les familles", "Formation aux techniques agricoles adaptées, distribution de semences, orientation vers les crédits agricoles et recherche de marchés.", "tomato-harvest-maize-field.webp", ""]].map(([title, heading, text, image, lead]) => <Link href={`/domaines/${title === "Éducation" ? "education" : title === "Santé" ? "sante" : "agriculture"}`} className={`ppsdr-work-card ${lead ? "ppsdr-work-card--lead" : ""}`} key={title}><Image src={`/images/ppsdr/${image}`} alt="" width={680} height={420}/><div className="ppsdr-work-card__body"><span>Actions / {title}</span><h3>{heading}</h3><p>{text}</p></div></Link>)}
    </div></div></section>

    <section className="ppsdr-donate c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><h2>Votre don agit sur le terrain</h2><p>En faisant un don, vous contribuez à améliorer le cadre de vie des personnes vulnérables et des populations pygmées en République démocratique du Congo.</p><Link href="/faire-un-don" className="c-btn c-btn--outline">Faire un don</Link></div></div></section>

    <section className="ppsdr-partners o-module"><div className="o-layout-container"><h2>Ils avancent avec nous</h2><div className="ppsdr-partner-logos">{partners.map(([name, file]) => <div key={name}><Image src={`/images/partners/${file}`} alt={`Logo ${name}`} width={180} height={100}/></div>)}</div><div className="ppsdr-partner-actions"><Link href="/devenir-partenaire" className="c-btn">Devenir partenaire</Link></div></div></section>

    <section className="ppsdr-contact o-module"><div className="o-layout-container ppsdr-contact-grid"><div className="ppsdr-contact-story"><h2>Une question ? Écrivez-nous.</h2><Image src="/images/ppsdr/community-school-gathering.webp" alt="Community gathered at a rural school" width={760} height={500}/><p>Contactez notre équipe pour toute question sur nos actions, nos partenariats ou nos interventions sur le terrain.</p><address><a href="tel:+243997133925">+243 997 133 925</a><br/><a href="mailto:ppsdrcongo@gmail.com">ppsdrcongo@gmail.com</a><br/>18 Avenue Osso, Q. Virunga, Goma, RDC.</address></div>
      <div className="ppsdr-contact-form"><p>Écrivez-nous pour en savoir plus sur nos actions et nos partenariats.</p><form><label>Nom<input name="name"/></label><label>Adresse e-mail ou téléphone<input name="contact"/></label><label>Votre message<textarea name="message" rows={4}/></label><button type="button" disabled>Envoyer</button></form></div>
    </div></section>
  </main>;
}

function EnglishHomePage() {
  const domains = [
    ['Health', 'Prevention, awareness and community support to protect family health.', 'community-workshop.webp', 'sante'],
    ['Agriculture', 'Agricultural activities that strengthen household food autonomy.', 'cabbage-harvest.webp', 'agriculture'],
    ['Education', 'Educational and teaching support for children and teachers.', 'schoolyard-sunlight.webp', 'education'],
    ['Awareness-raising', 'Informing and mobilising communities around practical messages.', 'community-gathering-pavilion.webp', 'sensibilisation'],
    ['Environment', 'Forest protection and responsible management of natural resources.', 'rural-meeting-masisi.webp', 'environnement'],
    ['Social justice', 'Support for vulnerable people, inclusion and human rights.', 'vibrant-village-portrait.webp', 'justice-sociale'],
  ];
  return <main className="ppsdr-home">
    <section className="o-module no-bottom-margin"><div className="c-hero-fullscreen" style={{backgroundImage:'url(/images/ppsdr/hero-community-ppsdr.webp)',backgroundPosition:'right center'}}><div className="c-hero-fullscreen__inner o-layout-container c-hero-fullscreen__inner--align-left"><div className="c-hero-fullscreen__content"><h1 className="c-hero-fullscreen__title">Empowering vulnerable rural communities</h1><p className="c-hero-fullscreen__sub-title">PPSDR works alongside Indigenous Pygmy peoples and vulnerable farmers in the Democratic Republic of the Congo to improve their well-being.</p><Link href="/domaines" className="c-btn">Discover our work</Link></div></div><div className="c-hero-fullscreen__mobile-image"><Image src="/images/ppsdr/hero-community-ppsdr.webp" alt="Families and children gathered in a village in North Kivu" width={720} height={960}/></div></div></section>
    <section className="ppsdr-highlights"><div className="ppsdr-highlights__story"><div className="ppsdr-highlights__story-inner"><h2>Working so every community can live with dignity and exercise its rights</h2><p>Across the Democratic Republic of the Congo, millions of people face exclusion, hardship and barriers to essential services. Indigenous Pygmy peoples are particularly affected by these inequalities. Since 2011, PPSDR has worked alongside them to defend their rights, support inclusion and improve living conditions.</p></div></div><div className="ppsdr-highlights__issues"><h2>Challenges communities face</h2><div className="ppsdr-highlights__issue-list">{[
      ['Marginalised and denied basic education','PPSDR works to improve access to education and learning opportunities.','schoolchildren-brick-school.webp'],
      ['Displaced from their ancestral lands','PPSDR supports communities in defending land rights and protecting their territories.','multigenerational-village-portrait.webp'],
      ['Denied fundamental rights','PPSDR defends fundamental rights, challenges discrimination and supports inclusion.','village-courtyard-meeting.webp'],
    ].map(([title,body,image])=><article className="ppsdr-issue" key={title}><Image src={`/images/ppsdr/${image}`} alt="" width={250} height={250}/><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>
    <section className="ppsdr-domains o-module"><div className="o-layout-container"><h2>Initiatives that make a practical difference in community life</h2><div className="ppsdr-domain-grid">{domains.map(([name,body,image,slug])=><Link href={`/domaines/${slug}`} className="ppsdr-domain-card" key={name}><Image src={`/images/ppsdr/${image}`} alt="" width={500} height={300}/><div><h3>{name}</h3><p>{body}</p></div></Link>)}</div></div></section>
    <section className="ppsdr-results o-module"><div className="o-layout-container"><h2>Practical results on the ground</h2><div className="ppsdr-results-grid">{[['27%','of Pygmy people can read and write','#A2C3C8'],['+10K','primary school certificates','#46818F'],['+125K','families reached','#E9A13B'],['30','community concessions acquired','#D00000'],['500K','school beneficiaries','#7FB5BB'],['800K','people trained in agriculture','#F2E8D5']].map(([number,label,color])=><article key={number} style={{'--stat-color':color} as CSSProperties}><strong>{number}</strong><span>{label}</span></article>)}</div></div></section>
    <section className="ppsdr-steps o-module" style={{backgroundImage:'linear-gradient(90deg,rgba(28,26,39,.08),rgba(28,26,39,.06)),url(/images/ppsdr/community-gathering-pavilion.webp)'}}><div className="o-layout-container"><div className="ppsdr-steps-panel"><h2>Step-by-step support</h2><div className="ppsdr-step-list">{[['Listen to community needs','Understand local realities and identify priorities together.'],['Build solutions that fit','Bring together resources and expertise to respond to local challenges.'],['Move forward together','Support local initiatives to strengthen autonomy and improve living conditions sustainably.']].map(([title,body],i)=><article key={title}><span>0{i+1}</span><p><strong>{title}:</strong> {body}</p></article>)}</div></div></div></section>
    <section className="ppsdr-work o-module"><div className="o-layout-container"><h2>What we do in practice</h2><div className="ppsdr-work-grid">{[['Education','More children in school','Community outreach, school enrolment support, scholarships and teacher training.','community-school-gathering.webp','education'],['Health','Healthier mothers and children','Training for birth attendants and health workers, maternal health equipment and partnerships with health centres.','community-workshop.webp','sante'],['Food security','Harvests that feed families','Training in appropriate farming methods, seeds, agricultural credit guidance and access to markets.','tomato-harvest-maize-field.webp','agriculture']].map(([title,heading,body,image,slug],i)=><Link href={`/domaines/${slug}`} className={`ppsdr-work-card ${i===0?'ppsdr-work-card--lead':''}`} key={title}><Image src={`/images/ppsdr/${image}`} alt="" width={680} height={420}/><div className="ppsdr-work-card__body"><span>Our work / {title}</span><h3>{heading}</h3><p>{body}</p></div></Link>)}</div></div></section>
    <section className="ppsdr-donate c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><h2>Your contribution makes a difference</h2><p>Your support helps improve living conditions for vulnerable people and Pygmy communities in the Democratic Republic of the Congo.</p><Link href="/faire-un-don" className="c-btn c-btn--outline">Donate</Link></div></div></section>
    <section className="ppsdr-contact o-module"><div className="o-layout-container ppsdr-contact-grid"><div className="ppsdr-contact-story"><h2>Questions? Get in touch.</h2><Image src="/images/ppsdr/community-school-gathering.webp" alt="Community gathered at a rural school" width={760} height={500}/><p>Contact our team to learn about our work, partnerships and field activities.</p><address><a href="tel:+243997133925">+243 997 133 925</a><br/><a href="mailto:ppsdrcongo@gmail.com">ppsdrcongo@gmail.com</a><br/>18 Avenue Osso, Q. Virunga, Goma, DRC.</address></div><div className="ppsdr-contact-form"><p>Write to us to learn more about our work and partnerships.</p><form><label>Name<input name="name"/></label><label>Email address or telephone<input name="contact"/></label><label>Your message<textarea name="message" rows={4}/></label><button type="button" disabled>Send</button></form></div></div></section>
  </main>;
}
