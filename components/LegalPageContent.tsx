import {PageIntro} from "@/components/PpsdrListing";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

const content: Record<"fr" | "en", Record<"legal" | "privacy", {intro: string; sections: LegalSection[]}>> = {
  fr: {
    legal: {
      intro: "Informations sur PPSDR, l’hébergement du site et les règles applicables à son utilisation.",
      sections: [
        {title: "Éditeur du site", paragraphs: ["PPSDR — Programmes de Promotion de la Santé et de Développement en Milieux Ruraux — est une organisation non gouvernementale de développement (ONGD) de droit congolais, créée le 5 octobre 2011 à Goma, en République démocratique du Congo.", "Siège social : 18 Avenue Osso, Quartier Virunga, Goma, Nord-Kivu, République démocratique du Congo.", "Téléphone : +243 997 133 925 — E-mail : ppsdrcongo@gmail.com", "Directeur de la publication : MUHINDO MUTHETHE Hénoc, fondateur de PPSDR.", "Numéro d’enregistrement ASBL :"]},
        {title: "Hébergement", paragraphs: ["Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis. Les contenus sont gérés via WordPress, hébergé par o2switch, 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France."]},
        {title: "Propriété intellectuelle", paragraphs: ["Les textes, images, photographies, logos et vidéos publiés sur ce site sont la propriété de PPSDR, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation écrite de PPSDR."]},
        {title: "Responsabilité", paragraphs: ["PPSDR s'efforce de tenir les informations de ce site à jour et exactes, mais ne peut garantir l'absence d'erreur ou d'omission. PPSDR ne peut être tenue responsable des dommages résultant de l'utilisation du site ou de son indisponibilité temporaire. Les liens vers des sites tiers sont fournis à titre informatif ; PPSDR n'est pas responsable de leur contenu."]},
        {title: "Données personnelles", paragraphs: ["Le traitement des données personnelles collectées sur ce site est décrit dans la Politique de confidentialité."]},
        {title: "Droit applicable", paragraphs: ["Le présent site est régi par le droit de la République démocratique du Congo. Tout litige relève des juridictions compétentes de Goma."]},
      ],
    },
    privacy: {
      intro: "Comment PPSDR collecte, utilise et protège les données personnelles transmises sur ce site.",
      sections: [
        {title: "Responsable du traitement", paragraphs: ["PPSDR — Programmes de Promotion de la Santé et de Développement en Milieux Ruraux, 18 Avenue Osso, Quartier Virunga, Goma, Nord-Kivu, République démocratique du Congo. E-mail : ppsdrcongo@gmail.com."]},
        {title: "Données collectées", items: ["Formulaire de contact et formulaire de partenariat : nom, adresse e-mail ou numéro de téléphone, sujet, message.", "Don : prénom, nom, adresse e-mail, numéro de téléphone, adresse postale, montant et fréquence du don, moyen de paiement choisi. Les paiements se font par Mobile Money ou par virement bancaire : PPSDR ne collecte ni ne conserve aucune donnée de carte bancaire.", "Navigation : données techniques nécessaires au fonctionnement du site (cookies techniques)."]},
        {title: "Finalités", paragraphs: ["Ces données servent uniquement à répondre à vos messages, à gérer les partenariats et les dons, et à améliorer le site. Elles ne sont jamais vendues ni cédées à des tiers."]},
        {title: "Destinataires", paragraphs: ["Seule l'équipe de PPSDR a accès à vos données. Nos hébergeurs (Vercel et o2switch) et notre système de gestion de contenu (WordPress) traitent ces données uniquement pour le compte de PPSDR."]},
        {title: "Durée de conservation", paragraphs: ["Vos messages et vos dons sont conservés 3 ans au maximum, puis supprimés, sauf obligation légale contraire."]},
        {title: "Vos droits", paragraphs: ["Vous pouvez demander l'accès, la rectification ou la suppression de vos données, ou vous opposer à leur traitement, en écrivant à ppsdrcongo@gmail.com. PPSDR répondra dans un délai raisonnable."]},
        {title: "Cookies", paragraphs: ["Ce site utilise uniquement des cookies techniques, nécessaires à son bon fonctionnement. Il n'utilise pas de cookies publicitaires ni de suivi."]},
        {title: "Sécurité", paragraphs: ["PPSDR met en place des mesures raisonnables pour protéger vos données contre tout accès non autorisé, toute perte ou toute divulgation."]},
        {title: "Enfants", paragraphs: ["Ce site ne s'adresse pas aux enfants. PPSDR ne collecte pas volontairement de données personnelles d'enfants."]},
        {title: "Contact et mise à jour", paragraphs: ["Pour toute question sur cette politique, écrivez à ppsdrcongo@gmail.com. Dernière mise à jour : 7 novembre 2026."]},
      ],
    },
  },
  en: {
    legal: {
      intro: "Information about PPSDR, the website hosting and the rules governing its use.",
      sections: [
        {title: "Website publisher", paragraphs: ["PPSDR — Programmes de Promotion de la Santé et de Développement en Milieux Ruraux — is a Congolese non-governmental development organisation (NGDO), established on 5 October 2011 in Goma, Democratic Republic of the Congo.", "Registered office: 18 Avenue Osso, Virunga Neighbourhood, Goma, North Kivu, Democratic Republic of the Congo.", "Telephone: +243 997 133 925 — Email: ppsdrcongo@gmail.com", "Publisher: MUHINDO MUTHETHE Hénoc, founder of PPSDR.", "Non-profit registration number:"]},
        {title: "Hosting", paragraphs: ["The website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, United States. Content is managed through WordPress, hosted by o2switch, 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France."]},
        {title: "Intellectual property", paragraphs: ["Unless otherwise stated, the text, images, photographs, logos and videos published on this website belong to PPSDR. Reproduction, including partial reproduction, is prohibited without PPSDR’s written permission."]},
        {title: "Liability", paragraphs: ["PPSDR endeavours to keep the information on this website accurate and up to date, but cannot guarantee that it is free from errors or omissions. PPSDR cannot be held liable for damage resulting from use of the website or its temporary unavailability. Links to third-party websites are provided for information; PPSDR is not responsible for their content."]},
        {title: "Personal data", paragraphs: ["The processing of personal data collected on this website is described in the Privacy Policy."]},
        {title: "Applicable law", paragraphs: ["This website is governed by the laws of the Democratic Republic of the Congo. Any dispute falls under the jurisdiction of the competent courts in Goma."]},
      ],
    },
    privacy: {
      intro: "How PPSDR collects, uses and protects personal data submitted through this website.",
      sections: [
        {title: "Data controller", paragraphs: ["PPSDR — Programmes de Promotion de la Santé et de Développement en Milieux Ruraux, 18 Avenue Osso, Virunga Neighbourhood, Goma, North Kivu, Democratic Republic of the Congo. Email: ppsdrcongo@gmail.com."]},
        {title: "Data collected", items: ["Contact and partnership forms: name, email address or telephone number, subject and message.", "Donations: first name, last name, email address, telephone number, postal address, donation amount and frequency, and chosen payment method. Payments are made through Mobile Money or bank transfer; PPSDR does not collect or store any bank card data.", "Browsing: technical data required for the website to function (technical cookies)."]},
        {title: "Purposes", paragraphs: ["This data is used only to respond to your messages, manage partnerships and donations, and improve the website. It is never sold or transferred to third parties."]},
        {title: "Recipients", paragraphs: ["Only the PPSDR team can access your data. Our hosting providers (Vercel and o2switch) and our content management system (WordPress) process this data solely on behalf of PPSDR."]},
        {title: "Retention period", paragraphs: ["Your messages and donation records are kept for no more than 3 years and then deleted, unless the law requires otherwise."]},
        {title: "Your rights", paragraphs: ["You may request access to, correction or deletion of your data, or object to its processing, by writing to ppsdrcongo@gmail.com. PPSDR will respond within a reasonable time."]},
        {title: "Cookies", paragraphs: ["This website uses only technical cookies required for it to function properly. It does not use advertising or tracking cookies."]},
        {title: "Security", paragraphs: ["PPSDR takes reasonable measures to protect your data against unauthorised access, loss or disclosure."]},
        {title: "Children", paragraphs: ["This website is not intended for children. PPSDR does not knowingly collect personal data from children."]},
        {title: "Contact and updates", paragraphs: ["For questions about this policy, write to ppsdrcongo@gmail.com. Last updated: 7 November 2026."]},
      ],
    },
  },
};

export function LegalPageContent({locale, kind}: {locale: "fr" | "en"; kind: "legal" | "privacy"}) {
  const isEnglish = locale === "en";
  const page = content[locale][kind];
  const title = kind === "legal" ? (isEnglish ? "Legal notice" : "Mentions légales") : (isEnglish ? "Privacy policy" : "Politique de confidentialité");

  return <div className="c-site-main o-site-container ppsdr-legal-page">
    <PageIntro eyebrow="" title={title}>{page.intro}</PageIntro>
    {page.sections.map((section, index) => <section className={`ppsdr-legal-section o-module ${index % 2 ? "c-ip-block--grey" : ""}`} key={section.title}>
      <div className="o-layout-container ppsdr-legal-section__inner">
        <h2>{section.title}</h2><span className="ppsdr-page-hero__rule" />
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
      </div>
    </section>)}
  </div>;
}
