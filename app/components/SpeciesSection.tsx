import Image from "next/image";
import { ArrowRightIcon } from "./icons";

const species = [
  {
    slug: "perros",
    emoji: "🐶",
    label: "Perros",
    image:
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=900&q=80&fit=crop&auto=format",
    alt: "Perro mirando a cámara",
    topics: [
      { label: "Salud", tema: "salud" },
      { label: "Alimentación", tema: "alimentacion" },
      { label: "Comportamiento", tema: "comportamiento" },
      { label: "Cachorros", tema: "cachorros" },
      { label: "Productos", tema: "productos" },
    ],
  },
  {
    slug: "gatos",
    emoji: "🐱",
    label: "Gatos",
    image:
      "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=900&q=80&fit=crop&auto=format",
    alt: "Gato mirando a cámara",
    topics: [
      { label: "Salud", tema: "salud" },
      { label: "Alimentación", tema: "alimentacion" },
      { label: "Comportamiento", tema: "comportamiento" },
      { label: "Gatitos", tema: "gatitos" },
      { label: "Productos", tema: "productos" },
    ],
  },
];

export default function SpeciesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Perros y gatos
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2">
          {species.map((s) => (
            <div
              key={s.slug}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="relative h-64 w-full sm:h-72">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              </div>

              <a
                href={`/${s.slug}`}
                className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-navy shadow-sm transition-colors hover:bg-white"
              >
                {s.emoji} {s.label}
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </a>

              <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-6">
                {s.topics.map((topic) => (
                  <a
                    key={topic.label}
                    href={`/blog?especie=${s.slug}&tema=${topic.tema}`}
                    className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-navy"
                  >
                    {topic.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
