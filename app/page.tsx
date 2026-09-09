import Link from "next/link";
import { company, news, promos } from "@/lib/data";
import { StoreFinder } from "@/components/StoreFinder";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-copy">
          <p className="hero-kicker">Tradycja handlu od {company.founded}</p>
          <h1>Świeże. Lokalne. Nasze.</h1>
          <p>Sieć sklepów, własna piekarnia, wędliny i bary drive. Spółdzielnia z polskim kapitałem — blisko domu.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" href="/sklepy">Znajdź sklep</Link>
            <a className="btn btn-light" href={company.links.eshop} target="_blank" rel="noopener noreferrer">Zamów w e-sklepie</a>
            <Link className="btn btn-outline" href="/karta-klienta">Karta klienta</Link>
          </div>
        </div>
      </section>
      <div className="wrap">
        <div className="stats">
          {[["1897","rok założenia"],["1700+","pracowników"],["17 000 m²","powierzchni supermarketów"],["700 t","pieczywa miesięcznie"],["ISO 22000","bezpieczeństwo żywności"]].map(([n,l]) => (
            <div className="stat" key={l}><b>{n}</b><span>{l}</span></div>
          ))}
        </div>
      </div>
      <section className="section band"><div className="wrap">
        <h2>Promocje</h2>
        <div className="grid grid-3">{promos.map((p)=><article className="card" key={p.title}><span className="chip">{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>
      </div></section>
      <section className="section"><div className="wrap">
        <h2>Aktualności</h2>
        <div className="grid grid-3">{news.map((n)=><article className="card" key={n.slug}><p className="muted">{n.date}</p><h3><Link href={`/aktualnosci/${n.slug}`}>{n.title}</Link></h3><p>{n.lead}</p></article>)}</div>
      </div></section>
      <section className="section band"><div className="wrap">
        <h2>Produkcja własna</h2>
        <div className="grid grid-3">
          <Link className="card" href="/produkcja/pieczywo"><h3>Pieczywo</h3><p>Zakwas powyżej 40 godzin. 20 ton mąki dziennie.</p></Link>
          <Link className="card" href="/produkcja/wedliny"><h3>Wędliny i garmażerka</h3><p>Ponad 150 pozycji. Bez mięsa oddzielanego mechanicznie.</p></Link>
          <Link className="card" href="/produkcja/torty"><h3>Torty i słodkości</h3><p>Na zamówienie, z dowozem od 300 zł na terenie miasta.</p></Link>
        </div>
      </div></section>
      <section className="section"><div className="wrap">
        <h2>Znajdź sklep</h2>
        <StoreFinder compact />
        <p style={{marginTop:16}}><Link className="btn btn-ghost" href="/sklepy">Pełna lista</Link></p>
      </div></section>
      <section className="section band"><div className="wrap grid grid-2">
        <div><h2>Karta klienta</h2><p>5 zł = 1 punkt. 200 punktów = e-bon 10 zł. 400 punktów = e-bon 30 zł.</p><Link className="btn btn-primary" href="/karta-klienta">Zasady programu</Link></div>
        <div><h2>Lokalni patrioci</h2><p>Mąka, mięso, owoce i warzywa z Podlasia. Sklepy blisko domu.</p><Link className="btn btn-ghost" href="/lokalni-patrioci">Czytaj więcej</Link></div>
      </div></section>
    </>
  );
}
