import type { MetadataRoute } from "next";
import { company } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/company", priority: 0.8, changeFrequency: "monthly" },
    { path: "/company/services", priority: 0.7, changeFrequency: "monthly" },
    { path: "/company/projects", priority: 0.7, changeFrequency: "monthly" },
    { path: "/company/credentials", priority: 0.7, changeFrequency: "monthly" },
    { path: "/plant", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${company.siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
