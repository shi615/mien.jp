const SITE_URL = "https://mien.jp";

export default function sitemap() {
  return [
    { path: "", priority: 1 },
    { path: "/menu/tanpin", priority: 0.8 },
    { path: "/menu/teisyoku", priority: 0.8 },
    { path: "/menu/otsukare", priority: 0.8 },
    { path: "/menu/tabehodai", priority: 0.8 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
