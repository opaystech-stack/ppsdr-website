import { articles as originalArticles } from "@/data/ppsdr-site";

const summaries = [
  "Depuis 2011, une conviction guide PPSDR : aucune communauté ne devrait être invisible. L'histoire d'Olivier, boursier devenu leader.",
  "Le fondateur Hénoc Muhindo parmi les acteurs du changement, du 10 au 12 septembre 2025.",
  "Gardiens de la forêt, les pygmées protègent les grands singes grâce à leurs savoirs ancestraux.",
  "Des jardins potagers à Karisimbi et Nyiragongo face à la crise humanitaire.",
  "Sensibilisation village par village dans 8 sites du territoire de Lubero.",
];

const firstFive = originalArticles.map((article, index) => ({
  ...article,
  title: [
    "Pourquoi PPSDR agit en faveur des autochtones pygmées et des vulnérables en RDC",
    "Sommet inaugural des Ashoka Fellows à Nairobi, 2025",
    "Le rôle des communautés pygmées dans la biodiversité",
    "Une solution locale à la malnutrition à Goma, 2025",
    "Campagne grands singes à Lubero",
  ][index],
  summary: summaries[index],
  date: [undefined, "10–12 septembre 2025", undefined, "2025", "2025"][index],
  image: ["community-meeting-thatched-hut.webp", "ashoka-changemakers-group.webp", "rural-meeting-masisi.webp", "cabbage-harvest.webp", "ppsdr-riders-trail.webp"][index],
}));

export const ppsdrArticles = [
  ...firstFive,
  {
    slug: "bourse-cornerstone-academie", title: "Bourse Cornerstone : un jeune pygmée à l'académie", date: "15 août 2026",
    summary: "Grâce à une bourse d'études Cornerstone, un jeune pygmée franchit les portes de l'académie : première étape d'un parcours en leadership. Car éduquer un jeune, c'est libérer tout un peuple.",
    body: "Grâce à une bourse d'études Cornerstone, un jeune pygmée franchit les portes de l'académie : première étape d'un parcours en leadership. Car éduquer un jeune, c'est libérer tout un peuple.", image: "schoolchildren-brick-school.webp",
  },
  {
    slug: "deplaces-pygmees-boikene-beni", title: "Cri d'alarme : déplacés pygmées à Boikene, Beni", date: "12 juin 2026",
    summary: "Des familles ayant fui les massacres vivent à ciel ouvert dans une précarité extrême. PPSDR lance un appel urgent : kits d'urgence, eau potable, nourriture, soins médicaux, protection.",
    body: "Des familles ayant fui les massacres vivent à ciel ouvert dans une précarité extrême. PPSDR lance un appel urgent : kits d'urgence, eau potable, nourriture, soins médicaux, protection.", image: "community-gathering-blue-skies.webp",
  },
  {
    slug: "attaque-ngadi-beni", title: "Attaque meurtrière à Ngadi, Beni", date: "31 mai 2026",
    summary: "Six pygmées tués dans une attaque attribuée aux ADF. PPSDR condamne, présente ses condoléances et appelle à la justice.",
    body: "Six pygmées tués dans une attaque attribuée aux ADF. PPSDR condamne, présente ses condoléances et appelle à la justice.", image: "village-courtyard-meeting.webp",
  },
  {
    slug: "alerte-ebola-rdc", title: "Alerte Ebola en RDC", date: "23 mai 2026",
    summary: "Épidémie déclarée le 15 mai en Ituri et au Nord-Kivu : PPSDR alerte et appelle à la collaboration pour la riposte préventive.",
    body: "Épidémie déclarée le 15 mai en Ituri et au Nord-Kivu : PPSDR alerte et appelle à la collaboration pour la riposte préventive.", image: "community-workshop.webp",
  },
  {
    slug: "inondations-ruwenzori", title: "Inondations à Ruwenzori", date: "5 mars 2026",
    summary: "Le 22 février 2026, les rivières Butau, Lume et Thaliha débordent : plus de 120 disparus, 500 ménages affectés. PPSDR lance un appel au secours.",
    body: "Le 22 février 2026, les rivières Butau, Lume et Thaliha débordent : plus de 120 disparus, 500 ménages affectés. PPSDR lance un appel au secours.", image: "community-gathering-pavilion.webp",
  },
];
