import { notFound } from "next/navigation";
import Link from "next/link";
import { getStore, mapsUrl, stores } from "@/lib/data";
type P = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return stores.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: P) {
  const s = getStore((await params).slug);
  return { title: s?.name ?? "Sklep" };
}
export default async function Page({ params }: P) {
  const s = getStore((await params).slug);
  if (!s) notFound();
  return (
    <section className="section">
      <div className="wrap">
        <p className="muted"><Link href="/sklepy">Sklepy</Link> / {s.name}</p>
        <h1>{s.name}</h1>
        <p>{s.address}, Białystok</p>
        <p>Pn–Pt {s.hoursWeek} · Sob {s.hoursSat} · Nd: sprawdź w sklepie / niedziele handlowe</p>
        <p>{s.phones.map((p) => <a key={p} href={"tel:" + p.replace(/\s/g, "")}>{p} </a>)}</p>
        <p><a className="btn btn-primary" href={mapsUrl(s.address)} target="_blank" rel="noopener noreferrer">Nawiguj</a></p>
      </div>
    </section>
  );
}
