import type { Metadata } from "next";
import { siteUrl } from "../lib/site";
import SpeciesPageContent from "../components/SpeciesPageContent";

export const metadata: Metadata = {
  title: "Gatos",
  description:
    "Guías de salud, alimentación, comportamiento y educación para cuidar mejor a tu gato.",
  alternates: {
    canonical: `${siteUrl}/gatos`,
  },
};

export default function GatosPage() {
  return <SpeciesPageContent species="gatos" />;
}
