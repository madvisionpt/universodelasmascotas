import type { Metadata } from "next";
import Image from "next/image";
import { siteUrl } from "../lib/site";
import { filterArticles } from "../lib/articles";
import { topics, topicLabel } from "../lib/topics";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Todos los artículos y guías sobre salud, alimentación, comportamiento y educación de mascotas.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

type BlogPageProps = {
  searchParams: Promise<{ especie?: string; tema?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { especie, tema } = await searchParams;
  const articles = filterArticles(especie, tema);

  const activeLabels = [
    especie === "perros" ? "Perros" : especie === "gatos" ? "Gatos" : null,
    tema ? topicLabel(tema) : null,
  ].filter(Boolean);

  return (
    <div className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Blog" }]} />

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Blog
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-text">
          {activeLabels.length > 0
            ? `Mostrando artículos de: ${activeLabels.join(" · ")}`
            : "Todos los artículos y guías del blog."}
        </p>

        <div className="mt-6 flex flex-wrap gap-2.5">
          <a
            href="/blog"
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              !especie && !tema
                ? "border-blue bg-blue-light text-blue"
                : "border-navy/10 bg-bg-soft text-navy hover:border-blue hover:bg-blue-light hover:text-blue"
            }`}
          >
            Todos
          </a>
          <a
            href="/blog?especie=perros"
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              especie === "perros"
                ? "border-blue bg-blue-light text-blue"
                : "border-navy/10 bg-bg-soft text-navy hover:border-blue hover:bg-blue-light hover:text-blue"
            }`}
          >
            Perros
          </a>
          <a
            href="/blog?especie=gatos"
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
              especie === "gatos"
                ? "border-blue bg-blue-light text-blue"
                : "border-navy/10 bg-bg-soft text-navy hover:border-blue hover:bg-blue-light hover:text-blue"
            }`}
          >
            Gatos
          </a>
          {topics.map((topic) => (
            <a
              key={topic.slug}
              href={`/blog?tema=${topic.slug}`}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                tema === topic.slug
                  ? "border-blue bg-blue-light text-blue"
                  : "border-navy/10 bg-bg-soft text-navy hover:border-blue hover:bg-blue-light hover:text-blue"
              }`}
            >
              {topic.label}
            </a>
          ))}
        </div>

        {articles.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <a
                href={`/blog/${article.slug}`}
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
                  <span className="absolute left-3 top-3 rounded-full bg-blue-light px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-blue">
                    {article.species === "perros" ? "PERROS" : "GATOS"}
                  </span>
                </div>
                <h2 className="mt-4 text-base font-bold text-navy sm:text-lg">
                  {article.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-text">
                  {article.description}
                </p>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl bg-bg-soft px-6 py-14 text-center">
            <p className="text-base font-semibold text-navy">
              Todavía no hay artículos en este tema.
            </p>
            <p className="mt-2 text-sm text-gray-text">
              Vuelve pronto o explora{" "}
              <a href="/blog" className="font-semibold text-blue">
                todos los artículos
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
