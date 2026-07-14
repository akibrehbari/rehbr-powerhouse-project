export const SITE_URL =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ??
  "https://rehbr-powerhouse-project.vercel.app";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;
}
