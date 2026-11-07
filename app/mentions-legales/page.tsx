import type {Metadata} from "next";
import {LegalPageContent} from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Éditeur, hébergement, propriété intellectuelle, responsabilité et droit applicable au site de PPSDR en RDC.",
};

export default function MentionsLegalesPage() {
  return <LegalPageContent locale="fr" kind="legal"/>;
}
