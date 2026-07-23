import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteUrl, siteTitle } from "../../lib/site";
import {
  categories,
  categoryLabel,
  getArticle,
  getArticlesByCategory,
  isCategory,
  type CategorySlug,
} from "../../lib/content";
import Breadcrumbs from "../../components/Breadcrumbs";

type Props = { params: Promise<{ category: string; slug: string }> };

export function generateStaticParams() {
  return categories.flatMap((c) =>
    getArticlesByCategory(c.slug).map((a) => ({ category: c.slug, slug: a.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  if (!isCategory(category)) return {};
  const result = await getArticle(category, slug);
  if (!result) return {};
  const { frontmatter } = result;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: [frontmatter.keyword],
    alternates: { canonical: `${siteUrl}/${category}/${slug}` },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      publishedTime: frontmatter.date,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  if (!isCategory(category)) notFound();

  const result = await getArticle(category, slug);
  if (!result) notFound();

  const { frontmatter, html } = result;
  const label = categoryLabel(category as CategorySlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: { "@type": "Organization", name: siteTitle },
    publisher: {
      "@type": "Organization",
      name: siteTitle,
      logo: { "@type": "ImageObject", url: `${siteUrl}/icon.svg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/${category}/${slug}`,
    },
  };

  return (
    <div className="flex-1 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label, href: `/${category}` },
            { label: frontmatter.title },
          ]}
        />

        <span className="mt-4 inline-block rounded-full bg-blue-light px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue">
          {label}
        </span>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
          {frontmatter.title}
        </h1>

        <p className="mt-3 text-sm text-gray-text">{formatDate(frontmatter.date)}</p>

        <div className="prose mt-8" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
