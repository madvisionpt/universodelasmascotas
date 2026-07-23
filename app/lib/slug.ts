const DIACRITICS_RE = new RegExp("[\\u0300-\\u036f]", "g");
const NON_ALNUM_RE = new RegExp("[^a-z0-9]+", "g");
const EDGE_DASH_RE = new RegExp("^-+|-+$", "g");

export function slugifyTema(value: string): string {
  return value
    .normalize("NFD")
    .replace(DIACRITICS_RE, "")
    .toLowerCase()
    .trim()
    .replace(NON_ALNUM_RE, "-")
    .replace(EDGE_DASH_RE, "");
}
