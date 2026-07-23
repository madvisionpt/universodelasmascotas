import { slugifyTema } from "./slug";

export type NavSubtema = { slug: string; label: string };
export type NavItem = {
  href: string;
  label: string;
  subtemas?: NavSubtema[];
  highlight?: boolean;
};

const taxonomy: { href: string; label: string; subtemas: string[] }[] = [
  {
    href: "/perros",
    label: "Perros",
    subtemas: ["Comportamiento", "Adiestramiento", "Razas", "Salud", "Nutrición", "Cachorros"],
  },
  {
    href: "/gatos",
    label: "Gatos",
    subtemas: ["Comportamiento", "Cuidados", "Razas", "Salud", "Nutrición", "Gatitos"],
  },
  {
    href: "/cuidados-generales",
    label: "Cuidados generales",
    subtemas: [
      "Primeros auxilios",
      "Higiene",
      "Verano/Invierno",
      "Mascotas y niños",
      "Envejecimiento",
    ],
  },
  {
    href: "/mascotas-pequenas",
    label: "Mascotas pequeñas",
    subtemas: ["Conejos", "Hámsters", "Aves", "Peces", "Reptiles"],
  },
  {
    href: "/viajes-y-ocio",
    label: "Viajes y ocio",
    subtemas: ["Viajar con mascotas", "Actividades"],
  },
];

export const mainNavLinks: NavItem[] = [
  ...taxonomy.map((item) => ({
    href: item.href,
    label: item.label,
    subtemas: item.subtemas.map((label) => ({ slug: slugifyTema(label), label })),
  })),
  { href: "/comparativas-y-productos", label: "Recomendaciones", highlight: true },
];

export function getSubtemaLabel(categoryHref: string, slug: string): string | undefined {
  return mainNavLinks
    .find((item) => item.href === categoryHref)
    ?.subtemas?.find((t) => t.slug === slug)?.label;
}
