import Image from "next/image";
import { getRecent } from "../lib/articles";

export default function LatestArticles() {
  const articles = getRecent(3);

  return (
    <section className="bg-bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-wider text-blue sm:text-sm">
          Blog
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Últimos artículos
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a
              href={`/blog/${article.slug}`}
              key={article.slug}
              className="group flex flex-col rounded-2xl bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,30,61,0.3)]"
            >
              <div className="relative h-44 w-full overflow-hidden rounded-2xl sm:h-48">
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-blue-light px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-blue">
                  {article.species === "perros" ? "PERROS" : "GATOS"}
                </span>
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

        <div className="mt-8 text-center sm:mt-10">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
          >
            Ver todo el blog
          </a>
        </div>
      </div>
    </section>
  );
}
