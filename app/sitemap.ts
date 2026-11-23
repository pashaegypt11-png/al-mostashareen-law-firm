import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://al-mostashareen.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["ar", "en"] as const;
  const paths = ["", "about", "services", "contact", "testimonials", "success-stories"];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path ? "/" + path : ""}`,
      lastModified: new Date("2026-01-01"),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.8,
    }))
  );
}
