import type { MetadataRoute } from "next"
import { siteUrl, products, legalLinks } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-30")

  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    ...products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...legalLinks.map((link) => ({
      url: `${siteUrl}${link.href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: link.href === "/about-us" || link.href === "/contact-us" ? 0.7 : 0.3,
    })),
  ]
}
