import { promos } from "@/lib/data";
export const metadata = { title: "Promocje" };
export default function Page() {
  return (
    <section className="section"><div className="wrap">
      <h1>Aktualne promocje</h1>
      <p className="muted">Miejsce na PDF gazetki. Poniższe kafelki są przykładowe.</p>
      <div className="grid grid-3">{promos.map(p => <article className="card" key={p.title}><span className="chip">{p.tag}</span><h2>{p.title}</h2><p>{p.text}</p></article>)}</div>
    </div></section>
  );
}
