import type { Metadata } from "next";
import { siteUrl } from "../lib/site";
import SpeciesPageContent from "../components/SpeciesPageContent";

export const metadata: Metadata = {
  title: "Perros",
  description:
    "Guías de salud, alimentación, comportamiento y educación para cuidar mejor a tu perro.",
  alternates: {
    canonical: `${siteUrl}/perros`,
  },
};

export default function PerrosPage() {
  return <SpeciesPageContent species="perros" />;
}
