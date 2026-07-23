import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteUrl } from "../lib/site";
import {
  categories,
  categoryLabel,
  getArticlesByCategory,
  isCategory,
  type CategorySlug,
} from "../lib/content";
import Breadcrumbs from "../components/Breadcrumbs";

type Props = { params: Promise<{ category: string }> };

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

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!isCategory(category)) notFound();

  const label = categoryLabel(category as CategorySlug);
  const articles = getArticlesByCategory(category as CategorySlug);

  return (
    <div className="flex-1 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label }]} />

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {label}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-text">
          Artículos y guías sobre {label.toLowerCase()}.
        </p>

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
              Todavía no hay artículos en esta categoría.
            </p>
            <p className="mt-2 text-sm text-gray-text">Vuelve pronto.</p>
          </div>
        )}
      </div>
    </div>
  );
}
