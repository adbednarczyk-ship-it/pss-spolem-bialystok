import { PlaceCard } from "@/components/PlaceCard";
import { bars, company } from "@/lib/data";
export const metadata = { title: "Bary i drive" };
export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Bary Białostockiej Gastronomii</h1>
        <p>Tradycyjne dania, okienka drive i dowóz. Zamówienia: {company.phones.gastro}.</p>
        <p><a className="btn btn-primary" href={company.links.gastro} target="_blank" rel="noopener noreferrer">Zamów online ↗</a></p>
        <div className="grid grid-3" style={{marginTop:24}}>
          {bars.map((b) => <PlaceCard key={b.slug} place={b} href={`/bary/${b.slug}`} />)}
        </div>
      </div>
    </section>
  );
}
