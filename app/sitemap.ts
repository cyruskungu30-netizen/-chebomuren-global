 import type { MetadataRoute } from "next";

import { getAllProducts } from "@/lib/collections";
import { getAllJournalArticles } from "@/lib/journal";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://ubuntu-couture-house.vercel.app";

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/collections",
    "/collections/catalogue",
    "/craftsmanship",
    "/journal",
    "/global-story",
    "/campaign",
    "/gallery",
    "/contact",
    "/appointments",
    "/wishlist",
  ];

  const collectionRoutes: MetadataRoute.Sitemap = getAllProducts().map(
    (product) => ({
      url: `${siteUrl}/collections/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const journalRoutes: MetadataRoute.Sitemap = getAllJournalArticles().map(
    (article) => ({
      url: `${siteUrl}/journal/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const staticSitemapRoutes: MetadataRoute.Sitemap = staticRoutes.map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority:
        route === ""
          ? 1
          : route === "/collections/catalogue"
            ? 0.95
            : 0.7,
    }),
  );

  return [
    ...staticSitemapRoutes,
    ...collectionRoutes,
    ...journalRoutes,
  ];
}