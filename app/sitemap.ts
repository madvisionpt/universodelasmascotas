import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";
import { categories, getArticlesByCategory } from "./lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ["", "/comparativas", "/contacto"];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((c) => ({
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

  return [...staticEntries, ...categoryEntries, ...contentArticleEntries];
}
