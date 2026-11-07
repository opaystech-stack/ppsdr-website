import { PageIntro } from "@/components/PpsdrListing";
import type {Metadata} from "next";
import {LegalPageContent} from "@/components/LegalPageContent";

export function generateMetadata({params}: {params: {locale: string}}): Metadata {
  const en = params.locale === "en";
  return {title: en ? "Legal notice" : "Mentions légales", description: en ? "Publisher, hosting, intellectual property, liability and applicable law for the PPSDR website in the DRC." : "Éditeur, hébergement, propriété intellectuelle, responsabilité et droit applicable au site de PPSDR en RDC."};
}

export default function MentionsLegalesPage({params}: {params: {locale: string}}) {
  return <LegalPageContent locale={params.locale === "en" ? "en" : "fr"} kind="legal"/>;
}
