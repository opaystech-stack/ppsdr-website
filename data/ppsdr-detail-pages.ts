export type DomainSection = { title: string; body?: string; points?: string[]; image?: string };

export const domainPages: Record<string, { title: string; intro: string; image: string; sections: DomainSection[] }> = {
  sante: {
    title: "Des soins plus proches des familles",
    intro: "Information, prévention et accompagnement communautaire pour une meilleure protection sanitaire.", image: "community-gathering-blue-skies.webp",
    sections: [
      { title: "Agir pour la santé des mères et des enfants", points: ["Former les matrones et les agents de santé dans les communautés pygmées.", "Fournir le matériel de santé maternelle et éduquer à la planification familiale.", "Travailler en partenariat avec les centres de santé communautaires."], body: "Forte mortalité maternelle et infantile, recours aux pratiques traditionnelles.", image: "breastfeeding-health-workshop.webp" },
      { title: "50 mères sensibilisées à Goma", body: "Le 7 août 2025, avec ISDD-asbl, PPSDR a célébré la journée mondiale de l'allaitement maternel au Centre de santé Méthodiste de Karisimbi : 15 femmes enceintes, 15 femmes allaitantes, 8 prestataires de soins et 12 leaders communautaires sensibilisés à l'allaitement maternel exclusif de 0 à 6 mois.", image: "community-maternal-health-session.jpg" },
      { title: "Dépister pour soigner, en pleine crise humanitaire", body: "Avec 4 organisations partenaires (Light and Salt, CARITAS Goma, APATAMACO, UJPD) sous la coordination du PRONANUT Nord-Kivu, PPSDR a mené un dépistage rapide dans 4 aires de santé de Pinga : 17,4 % des enfants en malnutrition aiguë, dont 4,7 % en forme sévère.", image: "ppsdr-health-outreach-team.jpg" },
      { title: "Prévenir, sensibiliser, orienter", body: "Les activités de santé de PPSDR s'appuient sur la sensibilisation, la prévention des risques, la promotion des bonnes pratiques et l'orientation vers une prise en charge adaptée.", image: "health-outreach-briefing.jpg" },
      { title: "Alerter pour prévenir : Ebola, mai 2026", body: "Le 15 mai 2026, face à la déclaration d'une épidémie d'Ebola en Ituri et au Nord-Kivu (Bunia, Mongbwalu, Beni, Butembo, Goma, Rutshuru), PPSDR a lancé une alerte et un appel à collaboration pour la riposte préventive : eau potable, hygiène, formation des relais communautaires et sensibilisation.", image: "ppsdr-health-team-seminar.jpg" },
    ],
  },
  agriculture: {
    title: "Nourrir les familles, durablement", intro: "Des activités agricoles utiles pour renforcer l'autonomie alimentaire des ménages.", image: "cabbage-harvest-community-garden.jpg",
    sections: [
      { title: "Cultiver l'autonomie alimentaire", points: ["Former aux techniques agricoles adaptées aux conditions locales.", "Distribuer des semences aux communautés pygmées.", "Orienter vers les crédits agricoles et la recherche de marchés."], image: "agriOkey.jpg" },
      { title: "Des jardins hors sol en pleine guerre", body: "Pendant la crise de guerre de 2025-2026, PPSDR a formé les ménagères de Goma à la culture maraîchère hors sol : les parcelles urbaines étant trop réduites, cette approche garantit la sécurité alimentaire des ménages et prévient la malnutrition.", image: "community-harvest-sorting.webp" },
      { title: "Un accompagnement pas à pas", body: "L'accompagnement agricole passe par les germoirs, la démonstration pratique, la préparation des sites et la mise en confiance progressive des communautés.", image: "bamboo-nursery-tending.jpg" },
      { title: "L'agriculture en chiffres", points: ["800 000 personnes formées", "30 concessions communautaires acquises", "125 000+ familles desservies"], image: "partnership-community-farm-visit.jpg" },
    ],
  },
  education: {
    title: "L'école pour chaque enfant", intro: "Un accompagnement éducatif qui soutient l'apprentissage et l'intégration sociale.", image: "schoolyard-sunlight.webp",
    sections: [
      { title: "Ouvrir les portes de l'école", points: ["Sensibiliser les communautés à l'importance de l'école.", "Soutenir l'inscription scolaire et offrir des bourses d'études.", "Former les enseignants locaux."], body: "Accroître l'accès à l'éducation pour les enfants et jeunes pygmés.", image: "community-portrait-rural-school.webp" },
      { title: "Une bourse qui ouvre l'université", body: "Grâce à une connexion facilitée par la communauté Ashoka, un jeune pygmée a obtenu une bourse universitaire : un symbole d'espoir pour toute sa communauté, la preuve que lorsque les barrières tombent, les jeunes autochtones participent pleinement à un avenir durable et équitable.", image: "1786774465.jpg" },
      { title: "Le football à l'école d'Idjwi Sud", body: "Le 22 janvier 2026, PPSDR a remis un ballon aux élèves du centre éducatif pygmée d'Idjwi Sud et offert un ordinateur portable à l'école pour enrichir l'apprentissage de l'informatique : premier pas vers l'intégration du football dans le programme d'inclusion socio-économique.", image: "schoolchildren-brick-school.webp" },
      { title: "L'éducation en chiffres", points: ["27 % de pygmées alphabétisés", "10 220 certificats d'études primaires", "500 000 bénéficiaires de nos écoles"], image: "ashoka-changemakers-group.webp" },
    ],
  },
  sensibilisation: {
    title: "Informer pour mobiliser", intro: "Informer, mobiliser et faire participer les communautés autour de messages utiles.", image: "sensibilisation-field-team-masisi.jpg",
    sections: [
      { title: "Un levier central de nos projets", body: "La sensibilisation est un levier central pour encourager l'adhésion des communautés, expliquer l'importance des projets et renforcer l'implication locale." },
      { title: "Sensibiliser village par village", body: "À Lubero, l'équipe PPSDR mène une campagne de sensibilisation des autochtones pygmées et des populations locales sur la protection des grands singes, village par village, dans 8 sites : Visigha, Nguvaghater, Masekeseke, Katoyo, Mitembe, Fatuwa, Kyabirimu et Kashugho.", image: "community-meeting-thatched-hut.webp" },
      { title: "Des messages simples qui sauvent", points: ["Allaitement maternel exclusif de 0 à 6 mois : le sein appartient au bébé.", "Protéger les gorilles, c'est protéger la forêt qui nous nourrit."], image: "village-courtyard-meeting.webp" },
    ],
  },
  environnement: {
    title: "Protéger la forêt avec ses gardiens", intro: "Protection du cadre de vie, gestion responsable des ressources et actions locales de préservation.", image: "ppsdr-riders-trail.webp",
    sections: [
      { title: "Les communautés, premières gardiennes de la forêt", body: "Avec les populations autochtones pygmées et piri, PPSDR protège les espèces menacées dans deux concessions forestières communautaires : Masekeseke (gorilles de Grauer, pangolin géant, chimpanzé) et Amekoni Mange (okapi, pangolins, éléphant de forêt, cercopithèque de Loest).", image: "rural-meeting-masisi.webp" },
      { title: "Connaître le terrain pour mieux le protéger", body: "La cartographie communautaire et participative de Masekeseke, sur le massif Muumbue, a identifié des investissements prioritaires : 4 ponts et 12 caniveaux, réhabilitation de l'école primaire et secondaire, construction d'un centre de santé, un petit marché de produits agricoles et 3 sources d'eau potable.", image: "village-procession-community.jpg" },
      { title: "Cinq engagements pour les grands singes", points: ["Sensibilisation à la protection des gorilles", "Éducation environnementale", "Prévention de la déforestation", "Réduction du braconnage", "Promotion de l'agriculture écologique"], image: "tropical-seedling-nursery.jpg" },
      { title: "Le corridor Kivu Est–Kinshasa", body: "Nos actions se déploient dans le corridor vert Kivu Est–Kinshasa : la rivière Lubero sépare le groupement Elimu Nzoa du secteur Bapere avant de rejoindre la Lindi, frontière naturelle entre le Nord-Kivu et la Tshopo, où la communauté kumu participe aussi à la conservation.", image: "gorilla-conservation-fieldwork.jpg" },
      { title: "Un cadre de vie sain pour tous", body: "PPSDR accompagne les communautés dans la protection de leur environnement, la valorisation des espaces utiles, l'assainissement et les pratiques locales favorables à un développement rural durable.", image: "community-gathering-under-trees.jpg" },
    ],
  },
  "justice-sociale": {
    title: "Des droits pour chacun", intro: "Accompagnement des personnes vulnérables, inclusion sociale et défense de la dignité humaine.", image: "vibrant-village-portrait.webp",
    sections: [
      { title: "Défendre les droits et la dignité", points: ["Plaidoyer pour un accès égal à la justice et aux droits.", "Formation des leaders communautaires sur leurs droits légaux.", "Plaidoyer pour la reconnaissance des terres ancestrales."], image: "justice-schoolyard-community.jpg" },
      { title: "Une stigmatisation à combattre", body: "La communauté pygmée subit la stigmatisation. La plupart des familles pygmées n'ont aucune propriété foncière : expulsées de force de leurs terres, elles sont devenues un peuple nomade sans accès à la terre.", image: "farmer-ripe-tomato.webp" },
      { title: "30 concessions pour rendre la terre", body: "PPSDR a acquis 30 concessions communautaires pour les pygmées et dessert plus de 125 000 familles à partir de concessions et de zones agricoles : rendre la terre, c'est rendre la dignité et l'autonomie.", image: "justice-community-concession-meeting.jpg" },
      { title: "Inclusion et protection au quotidien", body: "PPSDR soutient les communautés vulnérables par l'écoute, l'orientation, la mobilisation communautaire et les actions qui favorisent la cohésion sociale, la protection et l'accès aux droits essentiels.", image: "justice-community-document-registration.jpg" },
      { title: "Défendre les victimes, exiger la justice", body: "Le 31 mai 2026, une attaque attribuée aux ADF a visé un site pygmée à Ngadi (Beni), tuant six personnes dont le comédien Shukurani Nzanzu Mangese et ses deux parents. PPSDR a condamné cette violence, présenté ses condoléances et appelé à la justice et au respect des droits humains. En juin 2026, l'organisation a lancé un cri d'alarme pour les familles pygmées déplacées à Boikene (Beni), vivant à ciel ouvert sans nourriture, sans abri et sans eau potable.", image: "justice-award-ceremony.jpg" },
    ],
  },
};
