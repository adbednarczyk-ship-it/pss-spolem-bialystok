import { notFound } from "next/navigation";
import Link from "next/link";
import { getNews, news } from "@/lib/data";
type P = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return news.map((n) => ({ slug: n.slug })); }
export async function generateMetadata({ params }: P) {
  const n = getNews((await params).slug);
  return { title: n?.title ?? "Aktualność" };
}
export default async function Page({ params }: P) {
  const n = getNews((await params).slug);
  if (!n) notFound();
  return (
    <section className="section"><div className="wrap">
      <p className="muted"><Link href="/aktualnosci">Aktualności</Link> / {n.date}</p>
      <h1>{n.title}</h1>
      <p>{n.body}</p>
    </div></section>
  );
}
