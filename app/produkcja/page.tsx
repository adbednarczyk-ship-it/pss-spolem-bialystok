import Link from "next/link";
export const metadata = { title: "Produkcja własna" };
export default function Page() {
  return (
    <section className="section"><div className="wrap">
      <h1>Produkcja własna</h1>
      <p>Dwie piekarnie, ciastkarnia, zakład mięsny i garmażeryjny. Miesięcznie ok. 700 t pieczywa, 50 t ciast, 50 t garmażerki i 250 t mięsa i wędlin.</p>
      <div className="grid grid-3">
        <Link className="card" href="/produkcja/pieczywo"><h2>Pieczywo</h2></Link>
        <Link className="card" href="/produkcja/wedliny"><h2>Wędliny</h2></Link>
        <Link className="card" href="/produkcja/torty"><h2>Torty</h2></Link>
      </div>
    </div></section>
  );
}
