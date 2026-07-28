import { categories } from "../lib/content";

export default function TopicsExplorer() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          Explora por categorías
        </h2>

        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/${category.slug}`}
              className="rounded-full border border-navy/10 bg-bg-soft px-5 py-2.5 text-sm font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-blue hover:bg-blue-light hover:text-blue"
            >
              {category.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
