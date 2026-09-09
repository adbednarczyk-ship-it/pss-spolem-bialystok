import type { MetadataRoute } from "next";
import { bars, news, stores } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pss-spolem-bialystok.vercel.app";
  const statics = ["", "/sklepy", "/bary", "/central", "/produkcja", "/produkcja/pieczywo", "/produkcja/wedliny", "/produkcja/torty", "/promocje", "/aktualnosci", "/karta-klienta", "/zamowienia", "/o-nas", "/lokalni-patrioci", "/praca", "/kontakt", "/polityka-prywatnosci", "/polityka-cookies"];
  return [
    ...statics.map((p) => ({ url: base + p })),
    ...stores.map((s) => ({ url: `${base}/sklepy/${s.slug}` })),
    ...bars.map((s) => ({ url: `${base}/bary/${s.slug}` })),
    ...news.map((s) => ({ url: `${base}/aktualnosci/${s.slug}` })),
  ];
}
