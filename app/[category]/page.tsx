import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteUrl } from "../lib/site";
import {
  categories,
  categoryLabel,
  getArticlesByCategory,
  getTemasByCategory,
  isCategory,
  slugifyTema,
  type CategorySlug,
} from "../lib/content";
import { getSubtemaLabel } from "../lib/nav";
import Breadcrumbs from "../components/Breadcrumbs";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ tema?: string }>;
};

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) return {};
  const label = categoryLabel(category);
  return {
    title: label,
    description: `Artículos y guías sobre ${label.toLowerCase()}.`,
    alternates: { canonical: `${siteUrl}/${category}` },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { category } = await params;
  if (!isCategory(category)) notFound();

  const { tema } = await searchParams;
  const label = categoryLabel(category as CategorySlug);
  const allArticles = getArticlesByCategory(category as CategorySlug);
  const temas = getTemasByCategory(category as CategorySlug);

  const articles = tema
    ? allArticles.filter((a) => a.tema && slugifyTema(a.tema) === tema)
    : allArticles;

  const activeTemaLabel = tema
    ? temas.find((t) => t.slug === tema)?.label ?? getSubtemaLabel(`/${category}`, tema) ?? tema
    : null;

  return (
    <div className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label }]} />

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {label}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-text">
          {activeTemaLabel
            ? `Mostrando artículos de: ${activeTemaLabel}`
            : `Artículos y guías sobre ${label.toLowerCase()}.`}
        </p>

        {temas.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href={`/${category}`}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                !tema
                  ? "border-blue bg-blue-light text-blue"
                  : "border-navy/10 bg-bg-soft text-navy hover:border-blue hover:bg-blue-light hover:text-blue"
              }`}
            >
              Todos
            </a>
            {temas.map((t) => (
              <a
                key={t.slug}
                href={`/${category}?tema=${t.slug}`}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  tema === t.slug
                    ? "border-blue bg-blue-light text-blue"
                    : "border-navy/10 bg-bg-soft text-navy hover:border-blue hover:bg-blue-light hover:text-blue"
                }`}
              >
                {t.label}
              </a>
            ))}
          </div>
        )}

        {articles.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <a
                key={article.slug}
                href={`/${category}/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-navy/10 bg-bg-soft p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue hover:shadow-[0_20px_40px_-20px_rgba(15,30,61,0.3)]"
              >
                <span className="text-xs font-semibold text-gray-text">
                  {formatDate(article.date)}
                </span>
                <h2 className="mt-2 text-lg font-bold text-navy transition-colors duration-300 group-hover:text-blue">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {article.description}
                </p>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl bg-bg-soft px-6 py-14 text-center">
            <p className="text-base font-semibold text-navy">
              {tema
                ? "Todavía no hay artículos en este tema."
                : "Todavía no hay artículos en esta categoría."}
            </p>
            <p className="mt-2 text-sm text-gray-text">
              {tema ? (
                <>
                  Vuelve pronto o explora{" "}
                  <a href={`/${category}`} className="font-semibold text-blue">
                    todos los artículos de {label.toLowerCase()}
                  </a>
                  .
                </>
              ) : (
                "Vuelve pronto."
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
