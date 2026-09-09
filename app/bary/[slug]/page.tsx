import { notFound } from "next/navigation";
import Link from "next/link";
import { bars, getBar, mapsUrl, company } from "@/lib/data";
type P = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return bars.map((s) => ({ slug: s.slug })); }
export async function generateMetadata({ params }: P) {
  const s = getBar((await params).slug);
  return { title: s?.name ?? "Bar" };
}
export default async function Page({ params }: P) {
  const s = getBar((await params).slug);
  if (!s) notFound();
  return (
    <section className="section">
      <div className="wrap">
        <p className="muted"><Link href="/bary">Bary</Link> / {s.name}</p>
        <h1>{s.name}</h1>
        <p>{s.address}, Białystok</p>
        <p>Pn–Pt {s.hoursWeek} · Sob {s.hoursSat}{s.hoursSun ? ` · Nd ${s.hoursSun}` : ""}</p>
        <p>{s.phones.join(" · ")}</p>
        <p><a className="btn btn-primary" href={company.links.gastro} target="_blank" rel="noopener noreferrer">Zamów jedzenie</a></p>
        <p><a className="btn btn-ghost" href={mapsUrl(s.address)} target="_blank" rel="noopener noreferrer">Nawiguj</a></p>
      </div>
    </section>
  );
}
