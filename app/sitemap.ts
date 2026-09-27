import type { MetadataRoute } from "next";
import { site } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}${site.resume}`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
