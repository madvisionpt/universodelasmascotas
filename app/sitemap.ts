import type { MetadataRoute } from "next";
import { siteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = ["", "/perros", "/gatos", "/comparativas", "/blog", "/contacto"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
