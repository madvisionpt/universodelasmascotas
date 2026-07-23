import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { articles } from "../../lib/articles";
import { articleBodies } from "../../lib/article-content";
import { topicLabel } from "../../lib/topics";
import { siteUrl, siteTitle } from "../../lib/site";
import Breadcrumbs from "../../components/Breadcrumbs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `${siteUrl}/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      images: [{ url: article.image, width: 800, height: 533 }],
      type: "article",
      publishedTime: article.publishedAt,
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

function readingTime(html: string) {
  const words = html
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const body = articleBodies[slug];
  const related = articles
    .filter((a) => a.species === article.species && a.slug !== slug)
    .slice(0, 3);
  const mins = body ? readingTime(body) : 3;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: siteTitle },
    publisher: {
      "@type": "Organization",
      name: siteTitle,
      logo: { "@type": "ImageObject", url: `${siteUrl}/icon.svg` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`,
    },
  };

  return (
    <div className="flex-1 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 sm:pt-14">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: article.title },
          ]}
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-light px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue">
            {article.species === "perros" ? "Perros" : "Gatos"}
          </span>
          <span className="rounded-full bg-bg-soft px-3 py-1 text-xs font-semibold text-gray-text">
            {topicLabel(article.topic)}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        <p className="mt-3 text-sm text-gray-text">
          {formatDate(article.publishedAt)}&nbsp;·&nbsp;{mins} min de lectura
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-3xl px-4 sm:px-6">
        <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-96">
          <Image
            src={article.image}
            alt={article.alt}
            fill
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {body ? (
        <div
          className="prose mx-auto mt-10 max-w-3xl px-4 pb-16 sm:px-6"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      ) : (
        <div className="mx-auto mt-10 max-w-3xl px-4 pb-16 sm:px-6">
          <p className="text-base leading-relaxed text-gray-text">
            Contenido próximamente.
          </p>
        </div>
      )}

      {related.length > 0 && (
        <div className="border-t border-navy/10 bg-bg-soft">
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
            <h2 className="text-xl font-extrabold text-navy">
              Más artículos de{" "}
              {article.species === "perros" ? "perros" : "gatos"}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group flex flex-col rounded-2xl bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(15,30,61,0.3)]"
                >
                  <div className="relative h-36 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={rel.image}
                      alt={rel.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-sm font-bold leading-snug text-navy transition-colors group-hover:text-blue">
                    {rel.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
