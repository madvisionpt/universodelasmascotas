import type { TopicSlug } from "./topics";

export type Species = "perros" | "gatos";

export type Article = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  species: Species;
  topic: TopicSlug;
  popular: boolean;
  publishedAt: string;
};

export const articles: Article[] = [
  {
    slug: "10-senales-perro-te-quiere",
    title: "10 señales de que tu perro te quiere",
    description: "Descubre cómo identificar el amor de tu perro.",
    image:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=800&q=80&fit=crop&auto=format",
    alt: "Perro mirando a cámara",
    species: "perros",
    topic: "comportamiento",
    popular: false,
    publishedAt: "2026-06-02",
  },
  {
    slug: "entender-lenguaje-felino",
    title: "Cómo entender el lenguaje felino",
    description: "Aprende a interpretar su comportamiento.",
    image:
      "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=800&q=80&fit=crop&auto=format",
    alt: "Gato mirando a cámara",
    species: "gatos",
    topic: "comportamiento",
    popular: false,
    publishedAt: "2026-06-10",
  },
  {
    slug: "guia-alimentacion-por-edades",
    title: "Guía de alimentación por edades",
    description: "La nutrición adecuada en cada etapa de su vida.",
    image:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?w=800&q=80&fit=crop&auto=format",
    alt: "Perro en el parque",
    species: "perros",
    topic: "alimentacion",
    popular: false,
    publishedAt: "2026-06-18",
  },
  {
    slug: "por-que-mi-perro-tiembla",
    title: "¿Por qué mi perro tiembla?",
    description: "Causas más comunes y cuándo debería preocuparte.",
    image:
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=80&fit=crop&auto=format",
    alt: "Perro nervioso de cerca",
    species: "perros",
    topic: "salud",
    popular: true,
    publishedAt: "2026-07-05",
  },
  {
    slug: "ensenar-a-un-cachorro-primeros-pasos",
    title: "Cómo enseñar a un cachorro: primeros pasos",
    description: "Las bases para educar a tu cachorro desde el primer día.",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&q=80&fit=crop&auto=format",
    alt: "Cachorro en una sesión de entrenamiento",
    species: "perros",
    topic: "cachorros",
    popular: true,
    publishedAt: "2026-07-12",
  },
  {
    slug: "trucos-para-educar-a-tu-gato",
    title: "Trucos para educar a tu gato",
    description: "Sí, también se puede: consejos prácticos y realistas.",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&q=80&fit=crop&auto=format",
    alt: "Gato jugando",
    species: "gatos",
    topic: "educacion",
    popular: true,
    publishedAt: "2026-07-18",
  },
];

export function getPopular(limit = 5): Article[] {
  return articles.filter((a) => a.popular).slice(0, limit);
}

export function getRecent(limit = 3): Article[] {
  return [...articles]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, limit);
}

export function getBySpecies(species: Species): Article[] {
  return articles.filter((a) => a.species === species);
}

export function getByTopic(topic: string): Article[] {
  return articles.filter((a) => a.topic === topic);
}

export function filterArticles(especie?: string, tema?: string): Article[] {
  return articles.filter(
    (a) => (!especie || a.species === especie) && (!tema || a.topic === tema)
  );
}
