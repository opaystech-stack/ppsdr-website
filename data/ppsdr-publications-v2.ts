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
  {
    slug: "droits-fonciers-pygmees-rdc",
    title: "Protection juridique des droits fonciers des pygmées en droit positif congolais (Regard sur la situation des pygmées de la RD Congo)",
    date: "10 avril 2024",
    summary: "La protection juridique des droits fonciers des autochtones pygmées demeure préoccupante en RDC. Analyse historique, cadre légal et plaidoyer de PPSDR.",
    image: "community-meeting-thatched-hut.webp",
    body: `La protection juridique des droits fonciers des autochtones pygmées demeure préoccupante en République Démocratique du Congo. Malgré certaines lois internationales et nationales qui régissent les droits fonciers des autochtones dans le pays, il s’observe le défi majeur dans l’applicabilité dont l’absence d’une politique nationale adéquate parait être un des défis clés dans son exécution.

## Contexte historique et théories de dépossession

Nous appuyant sur PROSPER NOBIRABO, M (2008) dans son travail portant sur la « dépossession des droits fonciers des autochtones en RD Congo : perspectives historiques et d’avenir », dans son mot de l’introduction, l’auteur mentionne que des chercheurs affirment que bien avant la Conférence de Berlin en 1885, plusieurs européens, des commerçants, des missionnaires, etc. ; s’étaient installés sur l’actuel territoire de la RDC.

Certains auraient obtenu des titres juridiques en bonne et due forme, leur donnant le droit d’occuper ces terres. D’autres s’y seraient installés en vertu de certaines théories du droit international antérieur au XVIIème siècle considérant l’Afrique en tant que « terra nullius », cette expression latine signifiant : une terre ou un territoire qui n’appartient à personne, c’est-à-dire un bien sans maitre, où chacun pouvait s’établir sans qu’un titre juridique ne soit nécessaire.

L’occupation du sol en tant qu’objet principal n’est venue que plus tard et notamment lorsque les puissances européennes ont voulu faire reconnaitre leur droit de souveraineté ; C’est alors qu’ont été conclu des nombreux traités, soit avec des chefs traditionnels Bantous, nilotiques soudanais, soit entre les puissances européennes ceux-ci se sont caractérisés par des malentendus quant à la nature des droits transférés ; alors qu’il s’agissait plutôt d’une autorisation d’occuper un terrain pour les chefs traditionnels congolais.

Les européens traitaient le plus souvent avec les groupes ethniques dominants, au détriment des minorités et des autochtones bacwa, bambuti ou les batwa. Au cours des négociations, personne n’a cherché à savoir si pour les « pygmées » le sol était inaliénable et quels étaient les pouvoirs réels des chefs traditionnels bantous, nilotiques ou soudanais sur les territoires congolais à l’époque.

Dans les différents traités, le cédant congolais était désigné par les termes « chef », ce qui donnait, à tort, l’impression que les structures politiques traditionnelles congolaises étaient hiérarchisées comme celles des européens. Le principe de souveraineté des européens présumait à tort que ces chefs traditionnels pouvaient engager le territoire tout entier. Cependant, les communautés autochtones étaient situées hors de la sphère de pouvoir des chefs traditionnels. C’est dans cette confusion qu’en 1885, Léopold II, roi des Belges, a créé l’État Indépendant du Congo, un territoire constitué des possessions de l’Association Internationale Africaine, qui était sa propriété, alors qu’il y a deux millions d'années, les peuples pygmées habitaient le territoire congolais ; Ainsi, ils en étaient les tout premiers occupants et vivaient de la cueillette et de la chasse.

Les vagues de migration d'autres groupes (Bantous, Nilotiques et Soudanais) vers cette partie de l'Afrique ont eu lieu au cours de deuxième millénaire avant Jésus-Christ, et les dernières ont eu lieu entre le VIIème siècle avant Jésus-Christ. Ces nouvelles communautés, notamment les Bantous, les Nilotiques et les Soudanais, ont toujours appartenu à des sociétés structurées, dont les dirigeants venaient d'anciennes lignes de chefs-les chefferies.

## Absence de droits fonciers reconnus et marginalisation continue

En effet, l'absence de propriété de terre chez les peuples autochtones "Pygmées" résulte du fait historique de leur occupation de la forêt où, selon la tradition des peuples chasseurs-cueilleurs, dans toute l'Afrique centrale, les droits fonciers n'étaient reconnus ni en vertu de la loi coutumière, ni en vertu de la loi écrite. Les sociétés de chasseurs-cueilleurs sont considérées comme tombant sous la juridiction des groupes dominants qui ont des prétentions sur les mêmes terres. Par ailleurs, l'invisibilité des droits fonciers des peuples autochtones du point de vue de la loi coutumière et de la loi écrite a signifié qu'ils n'ont pas reçu de compensation ni de terre de remplacement lorsqu'ils ont été expropriés de leurs terres à des fins agricoles, de conservation, de développement de l'agriculture industrielle ou de pâturages.

Les Pygmées, qui résident principalement en RDC, étaient historiquement des habitants des forêts, dépendant de la chasse et de la cueillette pour leur subsistance. Cependant, leur vie a pris un tournant dramatique lorsque les autorités coloniales belges ont promulgué une loi en 1925 créant des parcs nationaux et promouvant le tourisme dans la région. En conséquence, les pygmées ont été chassés de force de leurs forêts ancestrales, sans aucune compensation pour leurs terres. Ces espaces autrefois sacrés et abondants sont devenus des zones interdites, modifiant à jamais le mode de vie des pygmées.

Confrontés au déplacement et à la privation de terre, les Pygmées sont devenus nomades, luttant pour survivre sans ressources. Isolés des autres communautés, ils ont connu l'exclusion sociale et ont souvent été pris dans des conflits liés aux terres et aux forêts. PPSDR a reconnu que l'intégration des Pygmées dans la société était cruciale, non seulement pour leur bien-être mais aussi pour favoriser une coexistence pacifique.

Un obstacle majeur à l’inclusion des Pygmées a été leur marginalisation historique et le manque de plaidoyer en leur faveur. Bien qu’ils soient les premiers habitants du pays, ils sont restés sans voix et privés de la possibilité d’exprimer leurs opinions et de participer aux débats nationaux. Le manque d'éducation parmi les pygmées autochtones a encore plus entravé leur capacité à avoir des dirigeants capables de les représenter efficacement auprès des autorités publiques.

Pendant des décennies, depuis l’indépendance de la République démocratique du Congo en 1960, jusqu’à l’an 2022, le gouvernement n’a pas reconnu les Pygmées en tant que citoyens, ce qui a entraîné la négligence de leurs droits fondamentaux, notamment l’accès aux soins de santé, à l’éducation et à la justice.

Cette situation touche non seulement les pygmées de la RDC, mais aussi de toute l’Afrique en général car au Rwanda, les peuples autochtones "Pygmées"qui habitaient la forêt de Gishwati, du Parc des volcans et des zones de conservation de la forêt de Nyungwe au Rwanda, n'ont reçu des compensations, ni pour les terres dont ils ont été expropriés, ni pour la destruction de leur culture et de leurs ressources vivrières.

A l'heure actuelle, les peuples autochtones sont l'un des groupes ethniques les plus désavantagés dans la région des Grands Lacs en termes de la propriété foncière.

Les peuples autochtones ont une culture, une façon de vivre, des traditions et un droit coutumier qui leur sont propres. Malheureusement, ils sont souvent victimes de conflits, de discriminations et de conditions de travail oppressives. Les peuples autochtones pygmées n'ont pas toujours bénéficié de l'attention particulière en tant que groupe autochtone. Délaissés dans le processus d'intégration sociale des communautés nationales, leurs conditions de vie se caractérisent d'une part par diverses formes de maltraitance et d'autre part, par la stigmatisation sur le plan politique, administratif, économique, social et culturel.

La communauté internationale a aujourd'hui accepté le principe selon lequel les cultures, les façons de vivre, les traditions et le droit coutumier des peuples autochtones sont précieux et ont besoin d'être respectés de même que protégés, et que ces peuples devraient participer aux processus décisionnels des pays dans lesquels ils vivent.

La Convention n°169 adopte une attitude générale de respect pour les cultures et modes de vie des peuples autochtones, insistant sur leur droit à continuer d'exister et à se développer au rythme dicté par leurs propres priorités.

Elle prévoit la consultation et la participation des peuples autochtones chaque fois que sont envisagés des politiques et des programmes qui pourraient avoir une incidence sur eux (Coperaziona Italiana, et al.: Les droits des peuples autochtones instruments et bonne pratique. 2006, p.23).

## Problèmes rencontrés par les peuples autochtones pygmées en matière foncière

Des problèmes rencontrés par les peuples autochtones pygmées en matière foncière en République Démocratique du Congo depuis l’histoire sont à savoir :

### Accaparement des terres
Les terres ancestrales des peuples pygmées sont souvent convoitées par des entreprises extractives, des agriculteurs commerciaux ou d’autres acteurs économiques. Ces entreprises exploitent souvent les ressources naturelles présentes sur ces terres, entrainant ainsi la dégradation de l’environnement et le déplacement forcé des communautés pygmées.

### Expulsion forcée
Les pygmées sont souvent expulsés de leurs terres ancestrales par des autorités gouvernementales ou d’autres groupes plus puissants. Ces expulsions sont souvent effectuées sans consultation ni consentement préalable des communautés pygmées.

### Exclusion des processus décisionnels
Les peuples pygmées sont souvent exclus des processus de prise de décisions concernant l’utilisation des terres. Ils ne sont pas consultés ni impliqués dans les décisions relatives à l’attribution des concessions forestières, à l’exploitation minière ou à d’autres projets de développement qui affectent directement leurs terres et leur mode de vie.

### Discrimination et stigmatisation
Les pygmées sont souvent victimes de discrimination et de stigmatisation, ce qui affaibli leur position dans les litiges fonciers. Leur culture et leur tradition sont souvent mal comprises et dévalorisés, ce qui rend difficile leur défense de leurs droits fonciers devant les tribunaux ou les autorités compétentes.

Ce problème persiste en dépit des lois et des engagements internationaux visant à protéger les droits fonciers des peuples autochtones, y compris des peuples pygmées. Il est donc essentiel de mettre en œuvre des mesures concrètes pour garantir la reconnaissance et la protection des droits fonciers des peuples autochtones pygmées ainsi que leur inclusion effective dans les processus décisionnels concernant leurs terres ancestrales.

### De l’insécurité foncière
L’accès à leurs terres ancestrales et la sécurité de la tenure foncière sont des enjeux fondamentaux pour les peuples autochtones pygmées. Ces derniers entretiennent des liens étroits avec les forêts envers lesquelles ils dépendent pour leur bien-être, identité et survie. Les activités d’agriculture, d’élevage et d’exploitation tant artisanale qu’industrielle des bois ont, au cours des siècles, forcé beaucoup de ces peuples à abandonner leurs forêts et mode de vie traditionnel basé sur la chasse, la cueillette et le ramassage. Cela étant, la plupart de ces peuples sont devenus dépendant du travail occasionnel, ou doivent avoir recours à la mendicité pour survivre.

Par ailleurs, l’expulsion forcée des peuples autochtones pygmées de leurs terres ancestrales afin d’y créer des parcs nationaux a commencé au cours de la période coloniale, avec le décret royal de 1925 créant le Parc National des Virunga. Elle a continué après l’indépendance de la RDC, avec la création du Parc National de Kahuzi-Biega (PNKB) et de la Maiko. Entre les années 1960 et le début des années 1980, environ 6 000 Twa ont été expulsés de force de leurs terres ancestralesrespectivement dans les collines de Chatondo, de Katasomwa, de Munango, de Kabona, de Kakumbukumbu et de Bukulula; espaces à ce jour érigé en Parc National de Kahuzi-Biega, situé à cheval entre les territoires de Kabare, de Kalehe et de Shabunda en province du Sud-Kivu. À sa création, le Parc National de Kahuzi-Biega avait une superficie de 60 000 hectares, mais son extension en 1975 a porté sa superficie à 600 000 hectares. Cette extension a dépouillé les peuples autochtones pygmées de leurs terres et ce, sans qu’ils n’aient été consultés ni donné leur consentement et sans indemnisation juste et équitable, en violation du droit international et des dispositions de la loi congolaise sur l’expropriation pour cause d’utilité publique.

Les terres des peuples autochtones pygmées ont été aussi spoliées pour la mise en place de projets d’industries extractives et ce, souvent en violation du droit national en matière de consultations et du droit international relativement au droit des peuples autochtones au consentement libre, préalable et éclairé. Par exemple, des concessions ont été installées sur et à côté des terres ancestrales des peuples autochtones pygmées sans leur consultation ou consentement préalable, telles que la concession de la BBC et de l’Industrie de Transformation du Bois (ITB) dans les territoires d’Ingende et de Bikoro dans la province de l’Équateur. Les exploitants de ces concessions opèrent sans tenir compte des droits des peuples autochtones sur ces concessions et sans que ces derniers ne bénéficient de quelconque avantage issu de l’exploitation de leurs terres. Par ailleurs, malgré la conversion des titres de la société SODEFOR dans le district de Maindombe en province de Bandundu, les peuples autochtones pygmées des territoires d’Inongo, de Kiri et d’Oshwe demeurent toujours victimes de l’exploitation irrégulière de leurs forêts par les sociétés d’exploitation.

La dépossession des peuples autochtones pygmées de leurs terres ancestrales est à la base de la perte de leur mode de vie et culture traditionnels. Les conditions dans lesquelles ils vivent sont très précaires justifiées par leur état de pauvreté et de vulnérabilité. Bien que la RDC, ait voté en faveur de l’adoption de la Déclaration des Nations Unies sur les droits des peuples autochtones en 2007, aucune mesure n’a été prise pour améliorer, promouvoir et protéger les droits des peuples autochtones pygmées en RDC. Ceci va à l’encontre des recommandations faites par le Comité des droits de l’homme, le Comité des droits économiques, sociaux et culturels, le Comité pour l’élimination de la discrimination raciale et la Commission africaine des droits de l’homme et des peuples relativement à la nécessité d’adopter des mesures pour protéger leurs droits, dont leur droit à la terre (BARUME, A.K En voie de disparition ? les droits des autochtones en Afrique : le cas du Parc Ntaional de Kahuzi-Biega en RDC, 2003, p. 35).

## Omission des droits fonciers des pygmées par les réformes en cours

Depuis l’indépendance de la République Démocratique du Congo, ni la Constitution, ni la loi foncière de 1973 et le Code forestier de 2002 ne font aucune mention des peuples autochtones pygmées ni de leurs droits.

En outre, des initiatives en cours, touchant la gouvernance et les réformes foncières et forestières omettent de prendre en compte les points de vue des peuples autochtones pygmées et d’assurer qu’ils puissent y prendre part activement. Ainsi, le processus de zonage des forêts congolaises qui est présentement en cours en RDC ne prévoit aucun mécanisme permettant l’identification et la protection des forêts et territoires appartenant aux peuples autochtones pygmées.

L’initiative multilatérale REDD+ (Réduction des émissions liées à la déforestation et à la dégradation des forêts), mécanisme de financement de projets environnementaux visant l’atténuation des changements climatiques et la conservation des forêts, ainsi que le Plan d’action de l’Union européenne FLEGT (Forest Law Enforcement Governance and Trade) dont le but est d’éradiquer l’exploitation illégale des forêts et d’améliorer la gestion et la gouvernance des forêts dans les pays exportateurs de bois, représentent également des processus envers lesquels la RDC s’est engagée et qui sont susceptibles d’avoir des répercussions néfastes pour les peuples autochtones si le gouvernement de la RDC continue de nier leurs droits fonciers et si des mesures spéciales ne sont pas prise..

Au-delà des zones classées, le territoire compte des réserves dites communautaires ayant la vision de classement, et qui pourra spolier les terres des peuples autochtones pygmées sans leur consentement libre, et ceci au détriment des communautés locales et peuples autochtones pygmées, qui se voient exproprier leurs zones et terres traditionnelles par les organisations en charge de la gestion.

Cependant l’établissement des aires protégées dans certaines zones en RDC s’était fait sous le prix payé par la communauté forestière, (autochtones pygmées) et qui se traduit par l’expulsion et déplacement forcé, le refus de l’accès au moyen de survie et de subsistance élémentaire et une surveillance policière conduisant à des graves violations des droits humains (cas de la partie des basses altitudes du Parc national de Kahuzi à Itebero).

Dans toutes ces démarches réalisées sur les territoires gérés traditionnellement par les peuples autochtones Pygmées et communautés locales, leurs droits restent violés. Les Réserves des primates de Kisimba - Ikobo de PKI Tayna Réserve Communautaire de Tayna (LOUVAIN COOPERATION/UCL, Etude socio-économique des peuples autochtones pygmées de l’île d’Idjwi. 2017, p. 21).

## Problèmes de non-accès à la justice

En depit de l’article 12 de la Constitution de 2006 de la RDC prévoit que « Tous les Congolais sont égaux devant la loi et ont droit à une égale protection des lois » et l’article 150 spécifie que « le pouvoir judiciaire est le garant des libertés individuelles et des droits fondamentaux des citoyens. » Toutefois, en pratique, l’accès à la justice est souvent plus difficile pour les peuples autochtones pygmées qui, en plus d’être victimes de multiples violations à leurs droits, font l’objet de stigmatisation au sein de la société. Leur niveau d’analphabétisme, jumelé à l’ignorance de leurs droits, au manque d’accès à l’information en matière juridique et judiciaire, à l’utilisation des langues officielles qui ne leur sont pas familières et à l’éloignement géographique des instances judiciaires, en plus de l’absence des moyens financiers nécessaires pour entamer des procédures judiciaires, représentent tous des obstacles qui empêchent les peuples autochtones pygmées d’accéder à la justice.

Par ailleurs, les plaintes portées par les autochtones font rarement l’objet d’une enquête par l’appareil judiciaire et ce dernier est de surcroît lourdement affecté par la corruption et parfois négativement biaisé contre les peuples autochtones (VUDISA, M., réflexion sur le contentieux administratif congolais : analyse critique de quelques points et doctrines et de jurisprudence, Ed. RDC, 2019, p. 43).

Le problème le plus grave auquel sont confrontés les Pygmées est la non-reconnaissance de leurs droits territoriaux de chasseurs-cueilleurs auquel s’ajoute le déni de leur statut de peuple indigène dans de nombreux pays africains. Sans droits reconnus au niveau national sur les forêts dont ils dépendent, des étrangers ou l’Etat peuvent mettre la main sur leurs terres sans barrière légale et sans leur verser de compensation.

> « Avant, dans la forêt, nous avions tout ce dont nous avions besoin pour une vie facile et heureuse: nourriture, abri, médicaments, vêtements ». Déclare un des responsable pygmée, Mr BAHIDIKA BALEKE à L’Est de la république Démocratique du Congo.

> « Aujourd’hui, les pygmées ont perdu leurs repères et leurs moyens de subsistance, en tant que refuge matériel et spirituel, source de leur religion, de leurs moyens d’existence, de leur pharmacopée et de leur identité culturelle, ne peut être sous-estimée. (…) Les liens étroits qu’ils entretiennent avec la forêt qu’ils vénèrent et protègent depuis des générations constituent un élément central de leur identité », précise Survival International.

Beaucoup de personnes pensent que les « Pygmées ne possèdent pas la même valeur humaine que les autres communautés, et les Pygmées eux-mêmes considèrent comme ‘’normal’’ d'être discriminés. Mais peu à peu, avec l’éveil de conscience et la révolution de mentalité, les peuples autochtones ont pris conscience qu'ils ont des droits comme tout le monde ».

![Communauté autochtone réunie pour l'enregistrement et la reconnaissance de leurs droits fonciers](/images/ppsdr/community-document-registration.jpg)

## Le tournant juridique : la Loi n°22/030 du 15 juillet 2022

C’est sous le règne du président FELIX ANTOINE TSHISEKEDI par la promulgation de la loi n°22/030 du 15 juillet 2022 portant protection et promotion des droits des peuples autochtones pygmées à son article 48 dispose que "l'État congolais accorde désormais reconnaissance et protection juridique aux terres et aux ressources de peuples autochtones pygmées en République Démocratique du Congo.

Nous appuyant à cette même loi, à son article 42 stipulant que : « Sans préjudice des droits de propriété de l'Etat sur le sol et le sous-sol, les peuples autochtones pygmées ont droit aux terres et aux ressources naturelles qu'ils possèdent, occupent ou utilisent, conformément à la loi en vigueur. Aucune délocalisation, ni réinstallation ne peut se faire sans consentement libre, informé et préalable avant toute mise en valeur, l'utilisation ou l'exploitation des ressources minérales, hydriques, pétrolières ou autres sur les terres qu'ils possèdent, occupent et utilisent traditionnellement » , l’Article 47 prônant que : » Les peuples autochtones pygmées ont le droit de bénéficier des avantages adaptés, résultant de l'exploitation commerciale par un tiers, des terres et ressources naturelles qu'ils possèdent, occupent ou utilisent traditionnellement, sur base d'un cahier des charges » et l’Article 48 disant que l'Etat accorde reconnaissance et protection juridique aux terres et aux ressources que les peuples autochtones pygmées possèdent, occupent ou utilisent traditionnellement. Cette reconnaissance se fait dans le respect des us et coutumes des peuples concernés » ; Qu’en est-il des terres des pygmées ravis depuis des années qui soient d’ailleurs aujourd’hui l’objet de leur misère ?

## Recommandations et plaidoyer au Gouvernement congolais

Eu égard aux multiples violations constatées dans le droit foncier à ce qui concerne les peuples autochtones pygmées de la RDC, et dans le cadre de matérialisation de la loi n°22/030 du 15 juillet 2022 portant protection et promotion des droits des peuples autochtones pygmées, nous suggérons au Gouvernement congolais ceux qui suivent :

- Appuyer le projet de vulgarisation de cette loi à faveur des autochtones pygmées sur toute l’étendue du pays ;
- Garantir une compensation de terres aux pygmées de manière à le permettre d’avoir des espaces appropriés pour vivre pleinement leur culture et tradition et leur permettant aussi d’ériger leurs logements et pratiquer l’agriculture pour se développer ;
- Créer un ministère spécifique destiné à répondre efficacement aux préoccupations des peuples autochtones en tant que citoyens congolais tout en préservant leur caractère minoritaire.

Article publié à Goma, le 10 Avril 2024 par PPSDR, une organisation d’encadrement de peuple autochtones pygmées en République Démocratique du Congo ; Confectionné par Hénoc MUHINDO MUTHETHE, le coordinateur et Fondateur de PPSDR.

Pour plus d’information sur PPSDR, consultez notre site web : www.ppsdr.org . Ecrivez-nous sur : ppsdrongdasbl@gmail.com`,
  },
  {
    slug: "legal-protection-land-rights-pygmies-dr-congo",
    title: "Protection juridique des droits fonciers des pygmées en droit positif congolais (Regard sur la situation des pygmées de la RD Congo)",
    category: "Actualités",
    date: "10 avril 2024",
    image: "community-meeting-thatched-hut.webp",
    summary: "La protection juridique des droits fonciers des autochtones pygmées demeure préoccupante en République Démocratique du Congo. Analyse historique, cadre légal et plaidoyer de PPSDR.",
    body: `La protection juridique des droits fonciers des autochtones pygmées demeure préoccupante en République Démocratique du Congo. Malgré certaines lois internationales et nationales qui régissent les droits fonciers des autochtones dans le pays, il s’observe le défi majeur dans l’applicabilité dont l’absence d’une politique nationale adéquate parait être un des défis clés dans son exécution.

## Contexte historique et théories de la dépossession foncière

Nous appuyant sur PROSPER NOBIRABO, M (2008) dans son travail portant sur la « dépossession des droits fonciers des autochtones en RD Congo : perspectives historiques et d’avenir », dans son mot de l’introduction, l’auteur mentionne que des chercheurs affirment que bien avant la Conférence de Berlin en 1885, plusieurs européens, des commerçants, des missionnaires, etc. ; s’étaient installés sur l’actuel territoire de la RDC.

Certains auraient obtenu des titres juridiques en bonne et due forme, leur donnant le droit d’occuper ces terres. D’autres s’y seraient installés en vertu de certaines théories du droit international antérieur au XVIIème siècle considérant l’Afrique en tant que « terra nullius », cette expression latine signifiant : une terre ou un territoire qui n’appartient à personne, c’est-à-dire un bien sans maitre, où chacun pouvait s’établir sans qu’un titre juridique ne soit nécessaire.

L’occupation du sol en tant qu’objet principal n’est venue que plus tard et notamment lorsque les puissances européennes ont voulu faire reconnaitre leur droit de souveraineté ; C’est alors qu’ont été conclu des nombreux traités, soit avec des chefs traditionnels Bantous, nilotiques soudanais, soit entre les puissances européennes ceux-ci se sont caractérisés par des malentendus quant à la nature des droits transférés ; alors qu’il s’agissait plutôt d’une autorisation d’occuper un terrain pour les chefs traditionnels congolais.

Les européens traitaient le plus souvent avec les groupes ethniques dominants, au détriment des minorités et des autochtones bacwa, bambuti ou les batwa. Au cours des négociations, personne n’a cherché à savoir si pour les « pygmées » le sol était inaliénable et quels étaient les pouvoirs réels des chefs traditionnels bantous, nilotiques ou soudanais sur les territoires congolais à l’époque.

Dans les différents traités, le cédant congolais était désigné par les termes « chef », ce qui donnait, à tort, l’impression que les structures politiques traditionnelles congolaises étaient hiérarchisées comme celles des européens. Le principe de souveraineté des européens présumait à tort que ces chefs traditionnels pouvaient engager le territoire tout entier. Cependant, les communautés autochtones étaient situées hors de la sphère de pouvoir des chefs traditionnels. C’est dans cette confusion qu’en 1885, Léopold II, roi des Belges, a créé l’État Indépendant du Congo, un territoire constitué des possessions de l’Association Internationale Africaine, qui était sa propriété, alors qu’il y a deux millions d'années, les peuples pygmées habitaient le territoire congolais ; Ainsi, ils en étaient les tout premiers occupants et vivaient de la cueillette et de la chasse.

Les vagues de migration d'autres groupes (Bantous, Nilotiques et Soudanais) vers cette partie de l'Afrique ont eu lieu au cours de deuxième millénaire avant Jésus-Christ, et les dernières ont eu lieu entre le VIIème siècle avant Jésus-Christ. Ces nouvelles communautés, notamment les Bantous, les Nilotiques et les Soudanais, ont toujours appartenu à des sociétés structurées, dont les dirigeants venaient d'anciennes lignes de chefs-les chefferies.

## Absence de droits fonciers reconnus et marginalisation continue

En effet, l'absence de propriété de terre chez les peuples autochtones "Pygmées" résulte du fait historique de leur occupation de la forêt où, selon la tradition des peuples chasseurs-cueilleurs, dans toute l'Afrique centrale, les droits fonciers n'étaient reconnus ni en vertu de la loi coutumière, ni en vertu de la loi écrite. Les sociétés de chasseurs-cueilleurs sont considérées comme tombant sous la juridiction des groupes dominants qui ont des prétentions sur les mêmes terres. Par ailleurs, l'invisibilité des droits fonciers des peuples autochtones du point de vue de la loi coutumière et de la loi écrite a signifié qu'ils n'ont pas reçu de compensation ni de terre de remplacement lorsqu'ils ont été expropriés de leurs terres à des fins agricoles, de conservation, de développement de l'agriculture industrielle ou de pâturages.

Les Pygmées, qui résident principalement en RDC, étaient historiquement des habitants des forêts, dépendant de la chasse et de la cueillette pour leur subsistance. Cependant, leur vie a pris un tournant dramatique lorsque les autorités coloniales belges ont promulgué une loi en 1925 créant des parcs nationaux et promouvant le tourisme dans la région. En conséquence, les pygmées ont été chassés de force de leurs forêts ancestrales, sans aucune compensation pour leurs terres. Ces espaces autrefois sacrés et abondants sont devenus des zones interdites, modifiant à jamais le mode de vie des pygmées.

Confrontés au déplacement et à la privation de terre, les Pygmées sont devenus nomades, luttant pour survivre sans ressources. Isolés des autres communautés, ils ont connu l'exclusion sociale et ont souvent été pris dans des conflits liés aux terres et aux forêts. PPSDR a reconnu que l'intégration des Pygmées dans la société était cruciale, non seulement pour leur bien-être mais aussi pour favoriser une coexistence pacifique.

Un obstacle majeur à l’inclusion des Pygmées a été leur marginalisation historique et le manque de plaidoyer en leur faveur. Bien qu’ils soient les premiers habitants du pays, ils sont restés sans voix et privés de la possibilité d’exprimer leurs opinions et de participer aux débats nationaux. Le manque d'éducation parmi les pygmées autochtones a encore plus entravé leur capacité à avoir des dirigeants capables de les représenter efficacement auprès des autorités publiques.

Pendant des décennies, depuis l’indépendance de la République démocratique du Congo en 1960, jusqu’à l’an 2022, le gouvernement n’a pas reconnu les Pygmées en tant que citoyens, ce qui a entraîné la négligence de leurs droits fondamentaux, notamment l’accès aux soins de santé, à l’éducation et à la justice.

Cette situation touche non seulement les pygmées de la RDC, mais aussi de toute l’Afrique en général car au Rwanda, les peuples autochtones "Pygmées"qui habitaient la forêt de Gishwati, du Parc des volcans et des zones de conservation de la forêt de Nyungwe au Rwanda, n'ont reçu des compensations, ni pour les terres dont ils ont été expropriés, ni pour la destruction de leur culture et de leurs ressources vivrières.

## Les obstacles majeurs aux droits fonciers des peuples autochtones

### 1. Manque de reconnaissance juridique
L'un des principaux obstacles est le manque de reconnaissance juridique des droits fonciers des peuples autochtones. Dans de nombreux pays dont la RDC, les lois nationales ne reconnaissent pas les droits coutumiers des pygmées sur les terres qu'ils occupent traditionnellement, ce qui les rend vulnérables à l'expulsion et à la spoliation de leurs terres.

### 2. Expulsion forcée
Les pygmées sont souvent expulsés de leurs terres ancestrales par des autorités gouvernementales ou d’autres groupes plus puissants. Ces expulsions sont souvent effectuées sans consultation ni consentement préalable des communautés pygmées.

### 3. Exclusion des processus décisionnels
Les peuples pygmées sont souvent exclus des processus de prise de décisions concernant l’utilisation des terres. Ils ne sont pas consultés ni impliqués dans les décisions relatives à l’attribution des concessions forestières, à l’exploitation minière ou à d’autres projets de développement qui affectent directement leurs terres et leur mode de vie.

### 4. Discrimination et stigmatisation
Les pygmées sont souvent victimes de discrimination et de stigmatisation, ce qui affaibli leur position dans les litiges fonciers. Leur culture et leur tradition sont souvent mal comprises et dévalorisés, ce qui rend difficile leur défense de leurs droits fonciers devant les tribunaux ou les autorités compétentes.

Ce problème persiste en dépit des lois et des engagements internationaux visant à protéger les droits fonciers des peuples autochtones, y compris des peuples pygmées. Il est donc essentiel de mettre en œuvre des mesures concrètes pour garantir la reconnaissance et la protection des droits fonciers des peuples autochtones pygmées ainsi que leur inclusion effective dans les processus décisionnels concernant leurs terres ancestrales.

### 5. De l’insécurité foncière
L’accès à leurs terres ancestrales et la sécurité de la tenure foncière sont des enjeux fondamentaux pour les peuples autochtones pygmées. Ces derniers entretiennent des liens étroits avec les forêts envers lesquelles ils dépendent pour leur bien-être, identité et survie. Les activités d’agriculture, d’élevage et d’exploitation tant artisanale qu’industrielle des bois ont, au cours des siècles, forcé beaucoup de ces peuples à abandonner leurs forêts et mode de vie traditionnel basé sur la chasse, la cueillette et le ramassage. Cela étant, la plupart de ces peuples sont devenus dépendant du travail occasionnel, ou doivent avoir recours à la mendicité pour survivre.

Par ailleurs, l’expulsion forcée des peuples autochtones pygmées de leurs terres ancestrales afin d’y créer des parcs nationaux a commencé au cours de la période coloniale, avec le décret royal de 1925 créant le Parc National des Virunga. Elle a continué après l’indépendance de la RDC, avec la création du Parc National de Kahuzi-Biega (PNKB) et de la Maiko. Entre les années 1960 et le début des années 1980, environ 6 000 Twa ont été expulsés de force de leurs terres ancestrales respectivement dans les collines de Chatondo, de Katasomwa, de Munango, de Kabona, de Kakumbukumbu et de Bukulula; espaces à ce jour érigé en Parc National de Kahuzi-Biega, situé à cheval entre les territoires de Kabare, de Kalehe et de Shabunda en province du Sud-Kivu. À sa création, le Parc National de Kahuzi-Biega avait une superficie de 60 000 hectares, mais son extension en 1975 a porté sa superficie à 600 000 hectares. Cette extension a dépouillé les peuples autochtones pygmées de leurs terres et ce, sans qu’ils n’aient été consultés ni donné leur consentement et sans indemnisation juste et équitable, en violation du droit international et des dispositions de la loi congolaise sur l’expropriation pour cause d’utilité publique.

Les terres des peuples autochtones pygmées ont été aussi spoliées pour la mise en place de projets d’industries extractives et ce, souvent en violation du droit national en matière de consultations et du droit international relativement au droit des peuples autochtones au consentement libre, préalable et éclairé. Par exemple, des concessions ont été installées sur et à côté des terres ancestrales des peuples autochtones pygmées sans leur consultation ou consentement préalable, telles que la concession de la BBC et de l’Industrie de Transformation du Bois (ITB) dans les territoires d’Ingende et de Bikoro dans la province de l’Équateur. Les exploitants de ces concessions opèrent sans tenir compte des droits des peuples autochtones sur ces concessions et sans que ces derniers ne bénéficient de quelconque avantage issu de l’exploitation de leurs terres. Par ailleurs, malgré la conversion des titres de la société SODEFOR dans le district de Maindombe en province de Bandundu, les peuples autochtones pygmées des territoires d’Inongo, de Kiri et d’Oshwe demeurent toujours victimes de l’exploitation irrégulière de leurs forêts par les sociétés d’exploitation.

La dépossession des peuples autochtones pygmées de leurs terres ancestrales est à la base de la perte de leur mode de vie et culture traditionnels. Les conditions dans lesquelles ils vivent sont très précaires justifiées par leur état de pauvreté et de vulnérabilité. Bien que la RDC, ait voté en faveur de l’adoption de la Déclaration des Nations Unies sur les droits des peuples autochtones en 2007, aucune mesure n’a été prise pour améliorer, promouvoir et protéger les droits des peuples autochtones pygmées en RDC. Ceci va à l’encontre des recommandations faites par le Comité des droits de l’homme, le Comité des droits économiques, sociaux et culturels, le Comité pour l’élimination de la discrimination raciale et la Commission africaine des droits de l’homme et des peuples relativement à la nécessité d’adopter des mesures pour protéger leurs droits, dont leur droit à la terre.

## Omission des droits fonciers des pygmées par les réformes en cours

Depuis l’indépendance de la République Démocratique du Congo, ni la Constitution, ni la loi foncière de 1973 et le Code forestier de 2002 ne font aucune mention des peuples autochtones pygmées ni de leurs droits.

En outre, des initiatives en cours, touchant la gouvernance et les réformes foncières et forestières omettent de prendre en compte les points de vue des peuples autochtones pygmées et d’assurer qu’ils puissent y prendre part activement. Ainsi, le processus de zonage des forêts congolaises qui est présentement en cours en RDC ne prévoit aucun mécanisme permettant l’identification et la protection des forêts et territoires appartenant aux peuples autochtones pygmées.

L’initiative multilatérale REDD+ (Réduction des émissions liées à la déforestation et à la dégradation des forêts), mécanisme de financement de projets environnementaux visant l’atténuation des changements climatiques et la conservation des forêts, ainsi que le Plan d’action de l’Union européenne FLEGT (Forest Law Enforcement Governance and Trade) dont le but est d’éradiquer l’exploitation illégale des forêts et d’améliorer la gestion et la gouvernance des forêts dans les pays exportateurs de bois, représentent également des processus envers lesquels la RDC s’est engagée et qui sont susceptibles d’avoir des répercussions néfastes pour les peuples autochtones si le gouvernement de la RDC continue de nier leurs droits fonciers et si des mesures spéciales ne sont pas prise..

Au-delà des zones classées, le territoire compte des réserves dites communautaires ayant la vision de classement, et qui pourra spolier les terres des peuples autochtones pygmées sans leur consentement libre, et ceci au détriment des communautés locales et peuples autochtones pygmées, qui se voient exproprier leurs zones et terres traditionnelles par les organisations en charge de la gestion.

Cependant l’établissement des aires protégées dans certaines zones en RDC s’était fait sous le prix payé par la communauté forestière, (autochtones pygmées) et qui se traduit par l’expulsion et déplacement forcé, le refus de l’accès au moyen de survie et de subsistance élémentaire et une surveillance policière conduisant à des graves violations des droits humains (cas de la partie des basses altitudes du Parc national de Kahuzi à Itebero).

Dans toutes ces démarches réalisées sur les territoires gérés traditionnellement par les peuples autochtones Pygmées et communautés locales, leurs droits restent violés. Les Réserves des primates de Kisimba - Ikobo de PKI Tayna Réserve Communautaire de Tayna.

## Problèmes de non-accès à la justice

En depit de l’article 12 de la Constitution de 2006 de la RDC prévoit que « Tous les Congolais sont égaux devant la loi et ont droit à une égale protection des lois » et l’article 150 spécifie que « le pouvoir judiciaire est le garant des libertés individuelles et des droits fondamentaux des citoyens. » Toutefois, en pratique, l’accès à la justice est souvent plus difficile pour les peuples autochtones pygmées qui, en plus d’être victimes de multiples violations à leurs droits, font l’objet de stigmatisation au sein de la société. Leur niveau d’analphabétisme, jumelé à l’ignorance de leurs droits, au manque d’accès à l’information en matière juridique et judiciaire, à l’utilisation des langues officielles qui ne leur sont pas familières et à l’éloignement géographique des instances judiciaires, en plus de l’absence des moyens financiers nécessaires pour entamer des procédures judiciaires, représentent tous des obstacles qui empêchent les peuples autochtones pygmées d’accéder à la justice.

Par ailleurs, les plaintes portées par les autochtones font rarement l’objet d’une enquête par l’appareil judiciaire et ce dernier est de surcroît lourdement affecté par la corruption et parfois négativement biaisé contre les peuples autochtones (VUDISA, M., réflexion sur le contentieux administratif congolais : analyse critique de quelques points et doctrines et de jurisprudence, Ed. RDC, 2019, p. 43).

Le problème le plus grave auquel sont confrontés les Pygmées est la non-reconnaissance de leurs droits territoriaux de chasseurs-cueilleurs auquel s’ajoute le déni de leur statut de peuple indigène dans de nombreux pays africains. Sans droits reconnus au niveau national sur les forêts dont ils dépendent, des étrangers ou l’Etat peuvent mettre la main sur leurs terres sans barrière légale et sans leur verser de compensation.

> « Avant, dans la forêt, nous avions tout ce dont nous avions besoin pour une vie facile et heureuse: nourriture, abri, médicaments, vêtements ». Déclare un des responsable pygmée, Mr BAHIDIKA BALEKE à L’Est de la république Démocratique du Congo.

> « Aujourd’hui, les pygmées ont perdu leurs repères et leurs moyens de subsistance, en tant que refuge matériel et spirituel, source de leur religion, de leurs moyens d’existence, de leur pharmacopée et de leur identité culturelle, ne peut être sous-estimée. (…) Les liens étroits qu’ils entretiennent avec la forêt qu’ils vénèrent et protègent depuis des générations constituent un élément central de leur identité », précise Survival International.

Beaucoup de personnes pensent que les « Pygmées ne possèdent pas la même valeur humaine que les autres communautés, et les Pygmées eux-mêmes considèrent comme ‘’normal’’ d'être discriminés. Mais peu à peu, avec l’éveil de conscience et la révolution de mentalité, les peuples autochtones ont pris conscience qu'ils ont des droits comme tout le monde ».

![Communauté autochtone réunie pour l'enregistrement et la reconnaissance de leurs droits fonciers](/images/ppsdr/community-document-registration.jpg)

## Le tournant juridique : la Loi n°22/030 du 15 juillet 2022

C’est sous le règne du président FELIX ANTOINE TSHISEKEDI par la promulgation de la loi n°22/030 du 15 juillet 2022 portant protection et promotion des droits des peuples autochtones pygmées à son article 48 dispose que "l'État congolais accorde désormais reconnaissance et protection juridique aux terres et aux ressources de peuples autochtones pygmées en République Démocratique du Congo.

Nous appuyant à cette même loi, à son article 42 stipulant que : « Sans préjudice des droits de propriété de l'Etat sur le sol et le sous-sol, les peuples autochtones pygmées ont droit aux terres et aux ressources naturelles qu'ils possèdent, occupent ou utilisent, conformément à la loi en vigueur. Aucune délocalisation, ni réinstallation ne peut se faire sans consentement libre, informé et préalable avant toute mise en valeur, l'utilisation ou l'exploitation des ressources minérales, hydriques, pétrolières ou autres sur les terres qu'ils possèdent, occupent et utilisent traditionnellement » , l’Article 47 prônant que : » Les peuples autochtones pygmées ont le droit de bénéficier des avantages adaptés, résultant de l'exploitation commerciale par un tiers, des terres et ressources naturelles qu'ils possèdent, occupent ou utilisent traditionnellement, sur base d'un cahier des charges » et l’Article 48 disant que l'Etat accorde reconnaissance et protection juridique aux terres et aux ressources que les peuples autochtones pygmées possèdent, occupent ou utilisent traditionnellement. Cette reconnaissance se fait dans le respect des us et coutumes des peuples concernés » ; Qu’en est-il des terres des pygmées ravis depuis des années qui soient d’ailleurs aujourd’hui l’objet de leur misère ?

## Recommandations et plaidoyer au Gouvernement congolais

Eu égard aux multiples violations constatées dans le droit foncier à ce qui concerne les peuples autochtones pygmées de la RDC, et dans le cadre de matérialisation de la loi n°22/030 du 15 juillet 2022 portant protection et promotion des droits des peuples autochtones pygmées, nous suggérons au Gouvernement congolais ceux qui suivent :

- Appuyer le projet de vulgarisation de cette loi à faveur des autochtones pygmées sur toute l’étendue du pays ;
- Garantir une compensation de terres aux pygmées de manière à le permettre d’avoir des espaces appropriés pour vivre pleinement leur culture et tradition et leur permettant aussi d’ériger leurs logements et pratiquer l’agriculture pour se développer ;
- Créer un ministère spécifique destiné à répondre efficacement aux préoccupations des peuples autochtones en tant que citoyens congolais tout en préservant leur caractère minoritaire.

Article publié à Goma, le 10 Avril 2024 par PPSDR, une organisation d’encadrement de peuple autochtones pygmées en République Démocratique du Congo ; Confectionné par Hénoc MUHINDO MUTHETHE, le coordinateur et Fondateur de PPSDR.

Pour plus d’information sur PPSDR, consultez notre site web : www.ppsdr.org . Ecrivez-nous sur : ppsdrongdasbl@gmail.com`,
  },
];
