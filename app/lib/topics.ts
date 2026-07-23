export type TopicSlug =
  | "salud"
  | "alimentacion"
  | "comportamiento"
  | "educacion"
  | "cachorros"
  | "gatitos"
  | "razas"
  | "productos";

export const topics: { slug: TopicSlug; label: string }[] = [
  { slug: "salud", label: "Salud" },
  { slug: "alimentacion", label: "Alimentación" },
  { slug: "comportamiento", label: "Comportamiento" },
  { slug: "educacion", label: "Educación" },
  { slug: "cachorros", label: "Cachorros" },
  { slug: "gatitos", label: "Gatitos" },
  { slug: "razas", label: "Razas" },
  { slug: "productos", label: "Productos" },
];

export function topicLabel(slug: string): string {
  return topics.find((t) => t.slug === slug)?.label ?? slug;
}
