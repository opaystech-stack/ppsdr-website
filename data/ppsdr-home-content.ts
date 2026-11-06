import type { ImageSlotName } from "@/data/image-slots";

export const ppsdrHome = {
  hero: {
    title: "Autonomiser les pygmées en RDC",
    description: "Promouvoir l’inclusion sociale et économique des communautés pygmées",
  },
  problems: {
    title: "Problèmes rencontrés par les pygmées",
    introduction: "La communauté pygmée, qui constitue la majeure partie des autochtones en Afrique, rencontre les problèmes suivants:",
    figures: [
      { value: "2.5M", label: "Estimation des pygmées en Afrique" },
      { value: "900K", label: "Estimation des pygmées en RDC" },
    ],
    issues: [
      { title: "Souvent considérée comme une tribu de classe inférieure", text: "Marginalisée et privée d’opportunités éducatives de base.", imageSlot: "problem-marginalisation" as ImageSlotName },
      { title: "Expulsés de force de leurs terres", text: "Ce qui en fait un peuple nomade sans accès à la terre.", imageSlot: "problem-displacement" as ImageSlotName },
      { title: "Seule tribu dépourvue de droits fondamentaux", text: "Tels que l’accès aux soins de santé, à l’éducation et à la justice.", imageSlot: "problem-rights" as ImageSlotName },
    ],
  },
  domainsTitle: "Nos domaines d’intervention",
  achievementsTitle: "Nos réalisations",
  partnerTitle: "Nos partenaires",
  partners: [
    { name: "PROLASA", slot: "partner-prolasa" as ImageSlotName },
    { name: "Ashoka", slot: "partner-ashoka" as ImageSlotName },
    { name: "FAO", slot: "partner-fao" as ImageSlotName },
    { name: "MEDIHELP", slot: "partner-medihelp" as ImageSlotName },
    { name: "Catalyst 2030", slot: "partner-catalyst" as ImageSlotName },
    { name: "AMA", slot: "partner-ama" as ImageSlotName },
    { name: "OENDDF", slot: "partner-oenddf" as ImageSlotName },
    { name: "ALHI", slot: "partner-alhi" as ImageSlotName },
    { name: "La Maison de l’Artemisia", slot: "partner-artemisia" as ImageSlotName },
    { name: "SESAM", slot: "partner-sesam" as ImageSlotName },
  ],
  donation: "En faisant un don, vous contribuez à améliorer le cadre de vie des personnes vulnérables et des populations pygmées en République démocratique du Congo.",
  actionsTitle: "Nos actions sur le terrain",
  actionCards: [
    {
      title: "Education",
      summary: "PPSDR a pour objectif d'accroître l'accès à l'éducation pour les enfants et jeunes pygmés",
      activities: ["Sensibilisations communautaires", "Soutien à l'inscription scolaire et bourses d'études", "Formation des enseignants locaux"],
      imageSlot: "field-education" as ImageSlotName,
    },
    {
      title: "Santé Sexuelle et Reproductive",
      summary: "Defis: Forte mortalité maternelle et infantile, recours aux pratiques traditionnelles chez les pygmées",
      activities: ["Formation des matrones et des agents de santé dans les communautés pygmées", "Fourniture des matériels de santé maternelle et éducation à la planification familiale", "Partenariats communautaires avec les centres de santé"],
      imageSlot: "field-health" as ImageSlotName,
    },
    {
      title: "Sécurité alimentaire et agriculture",
      summary: "PPSDR travaille pour renforcer la sécurité alimentaire des communautés pygmées grâce à la promotion de l’agriculture",
      activities: ["Formation aux techniques agricoles adaptées aux conditions locales", "Distribution des sémences aux communautés pygmées", "Orientations sur les crédits agricoles et recherche des marchés"],
      imageSlot: "field-food-security" as ImageSlotName,
    },
  ],
  advocacyTitle: "Plaidoyer et propriété foncière",
  advocacyProblem: "Stigmatisation de la communauté pygmée. Absence des propriétés foncières pour les familles pygmées.",
  advocacyActions: [
    "Plaidoyer pour accès égal à la justice et aux droits",
    "Formation des leaders communautaires sur les droits légaux",
    "Plaidoyer pour la reconnaissance des terres ancestrales",
  ],
  joinTitle: "Rejoignez-nous",
  joinText: "Soutenez les initiatives de santé maternelle, de bourses scolaires et de formation agricole.",
  formRecipient: "[ADRESSE E-MAIL DESTINATAIRE À CONFIRMER PAR LE CLIENT]",
};
