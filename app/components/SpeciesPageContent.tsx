import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import { getBySpecies, type Species } from "../lib/articles";

const speciesConfig: Record<
  Species,
  {
    label: string;
    intro: string;
    topics: { label: string; tema: string }[];
  }
> = {
  perros: {
    label: "Perros",
    intro:
      "Salud, alimentación, comportamiento y educación: todo lo que necesitas para cuidar mejor a tu perro.",
    topics: [
      { label: "Salud", tema: "salud" },
      { label: "Alimentación", tema: "alimentacion" },
      { label: "Comportamiento", tema: "comportamiento" },
      { label: "Cachorros", tema: "cachorros" },
      { label: "Razas", tema: "razas" },
      { label: "Productos", tema: "productos" },
    ],
  },
  gatos: {
    label: "Gatos",
    intro:
      "Salud, alimentación, comportamiento y educación: todo lo que necesitas para cuidar mejor a tu gato.",
    topics: [
      { label: "Salud", tema: "salud" },
      { label: "Alimentación", tema: "alimentacion" },
      { label: "Comportamiento", tema: "comportamiento" },
      { label: "Gatitos", tema: "gatitos" },
      { label: "Razas", tema: "razas" },
      { label: "Productos", tema: "productos" },
    ],
  },
};

export default function SpeciesPageContent({ species }: { species: Species }) {
  const config = speciesConfig[species];
  const articles = getBySpecies(species);

  return (
    <div className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: config.label }]} />

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {config.label}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-text">
          {config.intro}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {config.topics.map((topic) => (
            <a
              key={topic.tema}
              href={`/blog?especie=${species}&tema=${topic.tema}`}
              className="rounded-full border border-navy/10 bg-bg-soft px-4 py-2 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-blue hover:bg-blue-light hover:text-blue"
            >
              {topic.label}
            </a>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a
              href={`/blog?especie=${species}`}
              key={article.slug}
              className="group flex flex-col rounded-2xl bg-bg-soft p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,30,61,0.3)]"
            >
              <div className="relative h-44 w-full overflow-hidden rounded-2xl sm:h-48">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-base font-bold text-navy transition-colors duration-300 group-hover:text-blue sm:text-lg">
                {article.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-text">
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
