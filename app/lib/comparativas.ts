export type Comparativa = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const comparativas: Comparativa[] = [
  {
    slug: "mejor-pienso-para-perros",
    title: "Mejor pienso para perros",
    description:
      "Comparamos las mejores marcas según edad, tamaño y necesidades nutricionales.",
    image:
      "https://images.unsplash.com/photo-1591946559594-8c6d3b7391eb?w=800&q=80&fit=crop&auto=format",
    alt: "Comida seca para perros en un bol",
  },
  {
    slug: "mejor-arena-para-gatos",
    title: "Mejor arena para gatos",
    description:
      "Absorción, control de olores y facilidad de limpieza a examen.",
    image:
      "https://images.unsplash.com/photo-1727510160238-3c17eb5e6120?w=800&q=80&fit=crop&auto=format",
    alt: "Arenero para gatos",
  },
  {
    slug: "mejor-cama-para-perros",
    title: "Mejor cama para perros",
    description: "Comodidad y durabilidad para el descanso de tu perro.",
    image:
      "https://images.unsplash.com/photo-1581888227599-779811939961?w=800&q=80&fit=crop&auto=format",
    alt: "Perro descansando en una cama",
  },
  {
    slug: "mejor-rascador",
    title: "Mejor rascador",
    description:
      "Los rascadores que más gustan a los gatos y protegen tus muebles.",
    image:
      "https://images.unsplash.com/photo-1759165440303-40ef25cc6053?w=800&q=80&fit=crop&auto=format",
    alt: "Gato junto a un rascador",
  },
  {
    slug: "mejor-transportin",
    title: "Mejor transportín",
    description: "Seguridad y comodidad para los viajes con tu mascota.",
    image:
      "https://images.unsplash.com/photo-1527150602-a98f7a6f2746?w=800&q=80&fit=crop&auto=format",
    alt: "Transportín para mascotas",
  },
  {
    slug: "mejor-fuente-de-agua",
    title: "Mejor fuente de agua",
    description: "Mantén a tu mascota hidratada con las mejores opciones.",
    image:
      "https://images.unsplash.com/photo-1598191645993-f54b53d32195?w=800&q=80&fit=crop&auto=format",
    alt: "Fuente de agua para mascotas",
  },
];
