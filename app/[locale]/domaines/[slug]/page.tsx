import Image from "next/image";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PpsdrListing";
import { domainPages } from "@/data/ppsdr-detail-pages";
import { domainPagesEn } from "@/data/ppsdr-detail-pages-en";
import { domains } from "@/data/ppsdr-site";

const imageAlt: Record<string, { fr: string; en: string }> = {
  "1786774465.jpg": { fr: "Lauréat de PPSDR portant sa tenue de cérémonie de remise de diplôme", en: "PPSDR scholarship recipient wearing his graduation gown" },
  "breastfeeding-health-workshop.webp": { fr: "Équipe PPSDR animant un atelier sur l’allaitement maternel avec des mères et leurs enfants", en: "PPSDR team leading a breastfeeding workshop with mothers and their children" },
  "community-maternal-health-session.jpg": { fr: "Professionnel PPSDR échangeant avec des femmes lors d’une séance d’information sur la santé maternelle", en: "PPSDR staff member speaking with women during a maternal health information session" },
  "ppsdr-health-outreach-team.jpg": { fr: "Équipe PPSDR et partenaires réunis près d’un véhicule lors d’une mission de santé", en: "PPSDR team and partners gathered beside a vehicle during a health outreach mission" },
  "health-outreach-briefing.jpg": { fr: "Professionnels de santé participant à une réunion de coordination dans la cour d’un centre", en: "Health professionals taking part in a coordination meeting in a clinic courtyard" },
  "ppsdr-health-team-seminar.jpg": { fr: "Équipe PPSDR en séance de formation et de coordination sanitaire", en: "PPSDR team taking part in a health training and coordination session" },
  "community-workshop.webp": { fr: "Membres de la communauté lors d’un atelier PPSDR", en: "Community members taking part in a PPSDR workshop" },
  "agriOkey.jpg": { fr: "Agriculteurs préparant un terrain pour la culture", en: "Farmers preparing land for cultivation" },
  "sanc.jpg": { fr: "Réunion de sensibilisation sanitaire avec des mères", en: "Health awareness meeting with mothers" },
  "sanb.jpg": { fr: "Séance communautaire d’information sanitaire", en: "Community health information session" },
  "sana.jpg": { fr: "Femmes réunies devant un bâtiment communautaire", en: "Women gathered outside a community building" },
  "cabbage-harvest.webp": { fr: "Membres de la communauté récoltant des choux", en: "Community members harvesting cabbages" },
  "schoolyard-sunlight.webp": { fr: "Élèves réunis dans la cour d’une école", en: "Pupils gathered in a schoolyard" },
  "ppsdr-riders-trail.webp": { fr: "Équipe PPSDR en déplacement sur un sentier forestier", en: "PPSDR team travelling along a forest trail" },
  "vibrant-village-portrait.webp": { fr: "Portrait collectif d’une communauté villageoise", en: "Group portrait of a village community" },
  "sensibilisation-field-team-masisi.jpg": { fr: "Équipe PPSDR en gilets échangeant avec une communauté rurale à Masisi", en: "PPSDR field team in vests meeting with a rural community in Masisi" },
  "community-gathering-blue-skies.webp": { fr: "Rassemblement communautaire en plein air", en: "Community gathering outdoors under a blue sky" },
  "village-courtyard-meeting.webp": { fr: "Animateur communautaire prenant la parole au micro devant les habitants d’un village", en: "Community facilitator speaking into a microphone to village residents" },
  "community-portrait-rural-school.webp": { fr: "Communauté réunie devant une école rurale", en: "Community gathered outside a rural school" },
  "community-meeting-thatched-hut.webp": { fr: "Équipe PPSDR et habitants réunis devant des maisons rurales et une hutte traditionnelle", en: "PPSDR team and residents gathered outside rural homes and a traditional thatched shelter" },
  "community-harvest-sorting.webp": { fr: "Membres de la communauté triant une récolte", en: "Community members sorting a harvest" },
  "ashoka-changemakers-group.webp": { fr: "Participants du réseau Ashoka réunis", en: "Ashoka changemakers gathered together" },
  "schoolchildren-brick-school.webp": { fr: "Élèves réunis devant une école en briques", en: "Pupils gathered outside a brick school" },
  "rural-meeting-masisi.webp": { fr: "Réunion d’une communauté rurale à Masisi", en: "Rural community meeting in Masisi" },
  "community-gathering-pavilion.webp": { fr: "Communauté réunie sous un pavillon", en: "Community gathered under an open-air pavilion" },
  "village-procession-community.jpg": { fr: "Habitants et équipe PPSDR participant à une procession dans un village rural", en: "Residents and the PPSDR team taking part in a procession through a rural village" },
  "justice-award-ceremony.jpg": { fr: "Lauréat recevant un trophée et un certificat de reconnaissance lors d’une cérémonie", en: "Award recipient holding a trophy and certificate of recognition at a ceremony" },
  "justice-community-document-registration.jpg": { fr: "Membres d’une communauté rurale présentant leurs documents d’identification", en: "Rural community members presenting their identification documents" },
  "justice-community-concession-meeting.jpg": { fr: "Animateur lisant un document devant une communauté réunie dans une cour", en: "Facilitator reading a document to a community gathered in a courtyard" },
  "justice-schoolyard-community.jpg": { fr: "Habitants réunis avec l’équipe PPSDR dans la cour d’une école rurale", en: "Residents gathered with the PPSDR team in a rural schoolyard" },
  "bamboo-nursery-tending.jpg": { fr: "Agriculteur prenant soin de jeunes plants dans une pépinière de bambous", en: "Farmer tending young seedlings in a bamboo nursery" },
  "partnership-community-farm-visit.jpg": { fr: "Équipe PPSDR et partenaires en visite dans un champ agricole communautaire", en: "PPSDR team and partners visiting a community farm field" },
  "tropical-seedling-nursery.jpg": { fr: "Agent PPSDR arrosant de jeunes plants dans une pépinière tropicale", en: "PPSDR field worker watering young plants in a tropical nursery" },
  "gorilla-conservation-fieldwork.jpg": { fr: "Équipe PPSDR installant un panneau de sensibilisation à la protection des gorilles", en: "PPSDR team installing an awareness sign about gorilla conservation" },
  "community-gathering-under-trees.jpg": { fr: "Réunion communautaire PPSDR à l’ombre des arbres", en: "PPSDR community meeting held in the shade of trees" },
  "farmer-ripe-tomato.webp": { fr: "Agriculteur mangeant une tomate fraîche dans un champ de maïs", en: "Farmer eating a fresh tomato in a cornfield" },
};

export function generateStaticParams() { return domains.map(({ slug }) => ({ slug })); }

export default async function DomainePage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const page = locale === 'en' ? domainPagesEn[slug] : domainPages[slug];
  if (!page) notFound();
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="PPSDR" title={page.title} image={page.image} action={{ href: "/faire-un-don", label: locale === "en" ? "Donate" : "Faire un don" }}>{page.intro}</PageIntro>
    {page.sections.map((section, index) => <section key={section.title} className={`ppsdr-domain-section o-module ${index % 2 === 0 ? "c-ip-block--grey" : ""}`}>
      <div className="o-layout-container"><article className="ppsdr-domain-card">
        {section.image && <Image src={`/images/ppsdr/${section.image}`} alt={imageAlt[section.image]?.[locale === "en" ? "en" : "fr"] || section.title} width={720} height={405} className="ppsdr-domain-card__image"/>}
        <div className="ppsdr-domain-card__content"><strong className="ppsdr-card-number">{String(index + 1).padStart(2, "0")}</strong><h2 className="c-icon-block__title">{section.title}</h2>{section.body && <p className="leading-relaxed">{section.body}</p>}{section.points && <ul className="ppsdr-domain-points">{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</div>
      </article></div>
    </section>)}
  </div>;
}
