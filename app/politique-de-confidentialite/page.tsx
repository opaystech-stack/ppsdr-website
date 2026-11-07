import type {Metadata} from "next";
import {LegalPageContent} from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Découvrez comment PPSDR collecte, utilise, conserve et protège les données personnelles transmises sur son site.",
};

export default function PolitiqueConfidentialitePage() {
  return <LegalPageContent locale="fr" kind="privacy"/>;
}
