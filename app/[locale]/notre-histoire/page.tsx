import {Link} from "@/i18n/navigation";
import { PageIntro } from "@/components/PpsdrListing";

export function generateMetadata({params}: {params: {locale: string}}) { return {title: params.locale === "en" ? "Our story" : "Notre histoire"}; }
const events = [
  ["5 octobre 2011 : la fondation", "À Goma, MUHINDO MUTHETHE Hénoc, professionnel de santé publique, crée PPSDR pour encadrer les peuples autochtones pygmées et les paysans vulnérables des milieux ruraux et améliorer leur bien-être social, économique et sanitaire."],
  ["D'abord la citoyenneté, puis l'éducation", "Après avoir mené le combat pour la citoyenneté des communautés pygmées en RDC, PPSDR découvre un levier encore plus puissant : l'éducation. Car éduquer un jeune, c'est libérer tout un peuple."],
  ["Ashoka Fellow : une reconnaissance internationale", "En 2024, Ashoka réalise une field visit d'évaluation d'impact à PPSDR et élit Hénoc Muhindo Ashoka Fellow en RDC, saluant son approche d'inclusion socio-économique des autochtones pygmées."],
  ["Au sommet des acteurs du changement", "Du 10 au 12 septembre 2025, le fondateur prend part au sommet inaugural des Ashoka Fellows à Nairobi, sous la devise : chacun est un acteur du changement."],
  ["2026 : aux côtés des victimes", "Inondations meurtrières à Ruwenzori en février, alerte Ebola en mai, attaque contre un site pygmée à Beni et cri d'alarme pour les déplacés de Boikene : en 2026, PPSDR est restée aux côtés des communautés frappées par les catastrophes et les violences, entre alertes, appels au secours et plaidoyer."],
];

export default function HistoirePage({params}: {params: {locale: string}}) {
  if (params.locale === 'en') return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Our story">Since 2011, one belief has guided PPSDR: no community should be invisible.</PageIntro>
    {[
      ['5 October 2011: founded','In Goma, public health professional MUHINDO MUTHETHE Hénoc founded PPSDR to support Indigenous Pygmy peoples and vulnerable farmers in rural areas and improve their social, economic and health well-being.'],
      ['First citizenship, then education','After advocating for citizenship for Pygmy communities in the Democratic Republic of the Congo, PPSDR identified a powerful next step: education. Educating one young person can help unlock a future for an entire community.'],
      ['Ashoka Fellow: international recognition','In 2024, Ashoka conducted an impact assessment field visit to PPSDR and selected Hénoc Muhindo as an Ashoka Fellow in the Democratic Republic of the Congo, recognising his approach to the socio-economic inclusion of Indigenous Pygmy peoples.'],
      ['At the gathering of changemakers','From 10 to 12 September 2025, PPSDR’s founder took part in the inaugural Ashoka Fellows Summit in Nairobi, under the theme: everyone is a changemaker.'],
      ['2026: standing with people affected','After deadly floods in Ruwenzori, an Ebola alert, an attack on a Pygmy site in Beni and an appeal for displaced people in Boikene, PPSDR stood with communities facing disasters and violence through alerts, calls for support and advocacy.'],
    ].map(([title,body],index)=><section key={title} className={`c-text-block-wrapper o-module ${index%2===0?'c-ip-block--grey':''}`}><div className="o-layout-container max-w-5xl"><h2>{title}</h2><p>{body}</p></div></section>)}
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/domaines" className="c-btn">Discover our work</Link></div></div></section>
  </div>;
  return <div className="c-site-main o-site-container">
    <PageIntro eyebrow="" title="Notre histoire">Depuis 2011, une conviction guide PPSDR : aucune communauté ne devrait être invisible.</PageIntro>
    {events.map(([title, text], index) => <section key={title} className={`c-text-block-wrapper o-module ${index % 2 === 0 ? "c-ip-block--grey" : ""}`}><div className="o-layout-container max-w-5xl"><h2>{title}</h2><p>{text}</p></div></section>)}
    <p className="o-layout-container py-5 text-sm">[AUTRES DATES CLÉS À FOURNIR PAR LE CLIENT]</p>
    <section className="c-cta-basic o-module"><div className="c-cta-basic__inner o-layout-container"><div className="c-cta-basic__content"><Link href="/domaines" className="c-btn">Découvrir nos actions</Link></div></div></section>
  </div>;
}
