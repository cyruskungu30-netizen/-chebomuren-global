 import type { MetadataRoute } from "next";

import { getAllProducts } from "@/lib/collections";
import { getAllJournalArticles } from "@/lib/journal";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://ubuntu-couture-house.vercel.app";

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

  const collectionRoutes = getAllProducts().map((product) => ({
    url: `${siteUrl}/collections/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const journalRoutes = getAllJournalArticles().map((article) => ({
    url: `${siteUrl}/journal/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency:
        route === "" ? ("weekly" as const) : ("monthly" as const),
      priority:
        route === ""
          ? 1
          : route === "/collections/catalogue"
            ? 0.95
            : 0.7,
    })),
    ...collectionRoutes,
    ...journalRoutes,
  ];
}