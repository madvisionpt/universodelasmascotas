import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const contentDir = path.join(process.cwd(), "content");

export type CategorySlug =
  | "perros"
  | "gatos"
  | "cuidados-generales"
  | "mascotas-pequenas"
  | "comparativas-y-productos"
  | "viajes-y-ocio";

export const categories: { slug: CategorySlug; label: string }[] = [
  { slug: "perros", label: "Perros" },
  { slug: "gatos", label: "Gatos" },
  { slug: "cuidados-generales", label: "Cuidados generales" },
  { slug: "mascotas-pequenas", label: "Mascotas pequeñas" },
  { slug: "comparativas-y-productos", label: "Comparativas y productos" },
  { slug: "viajes-y-ocio", label: "Viajes y ocio" },
];

export function isCategory(value: string): value is CategorySlug {
  return categories.some((c) => c.slug === value);
}

export function categoryLabel(slug: string): string {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}

export type ArticleFrontmatter = {
  title: string;
  description: string;
  category: CategorySlug;
  slug: string;
  keyword: string;
  date: string;
};

function categoryDir(category: CategorySlug): string {
  return path.join(contentDir, category);
}

function readCategoryFiles(category: CategorySlug): string[] {
  const dir = categoryDir(category);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
}

// gray-matter parses unquoted YAML dates (e.g. `date: 2026-07-20`) into a
// Date object rather than a string, so normalize back to "YYYY-MM-DD".
function normalizeFrontmatter(data: Record<string, unknown>): ArticleFrontmatter {
  const date = data.date;
  return {
    ...data,
    date: date instanceof Date ? date.toISOString().slice(0, 10) : String(date),
  } as ArticleFrontmatter;
}

export function getArticlesByCategory(category: CategorySlug): ArticleFrontmatter[] {
  return readCategoryFiles(category)
    .map((file) => {
      const raw = fs.readFileSync(path.join(categoryDir(category), file), "utf8");
      return normalizeFrontmatter(matter(raw).data);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllArticles(): ArticleFrontmatter[] {
  return categories.flatMap((c) => getArticlesByCategory(c.slug));
}

export async function getArticle(
  category: CategorySlug,
  slug: string
): Promise<{ frontmatter: ArticleFrontmatter; html: string } | null> {
  for (const file of readCategoryFiles(category)) {
    const raw = fs.readFileSync(path.join(categoryDir(category), file), "utf8");
    const { data, content } = matter(raw);
    if (data.slug === slug) {
      const processed = await remark().use(remarkHtml).process(content);
      return { frontmatter: normalizeFrontmatter(data), html: processed.toString() };
    }
  }
  return null;
}
