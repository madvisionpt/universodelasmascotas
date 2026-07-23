import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";
import { articles } from "./lib/articles";
import { categories, getArticlesByCategory } from "./lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ["", "/perros", "/gatos", "/comparativas", "/blog", "/contacto"];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogArticleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteUrl}/blog/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories
    .filter((c) => c.slug !== "perros" && c.slug !== "gatos")
    .map((c) => ({
      url: `${siteUrl}/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  const contentArticleEntries: MetadataRoute.Sitemap = categories.flatMap((c) =>
    getArticlesByCategory(c.slug).map((article) => ({
      url: `${siteUrl}/${c.slug}/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly",
      priority: 0.6,
    }))
  );

  return [
    ...staticEntries,
    ...categoryEntries,
    ...blogArticleEntries,
    ...contentArticleEntries,
  ];
}
