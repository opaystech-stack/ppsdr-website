import { PageIntro } from "@/components/PpsdrListing";
import type {Metadata} from "next";
import {LegalPageContent} from "@/components/LegalPageContent";

export function generateMetadata({params}: {params: {locale: string}}): Metadata {
  const en = params.locale === "en";
  return {title: en ? "Privacy policy" : "Politique de confidentialité", description: en ? "Learn how PPSDR collects, uses, retains and protects personal data submitted through its website." : "Découvrez comment PPSDR collecte, utilise, conserve et protège les données personnelles transmises sur son site."};
}

export default function PolitiqueConfidentialitePage({params}: {params: {locale: string}}) {
  return <LegalPageContent locale={params.locale === "en" ? "en" : "fr"} kind="privacy"/>;
}
