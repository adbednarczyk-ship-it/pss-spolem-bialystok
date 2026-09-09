import { company } from "@/lib/data";
export const metadata = { title: "Karta klienta" };
export default function Page() {
  return (
    <section className="section"><div className="wrap">
      <h1>Społem znaczy razem</h1>
      <ol>
        <li>Zapytaj kasjera o kartę.</li>
        <li>Wpisz numer telefonu na terminalu i poczekaj na SMS.</li>
        <li>Zbieraj punkty i wymieniaj je na e-bony.</li>
      </ol>
      <ul>
        <li>5 zł = 1 punkt</li>
        <li>200 pkt = e-bon 10 zł</li>
        <li>400 pkt = e-bon 30 zł</li>
        <li>E-bon ważny 30 dni od wydruku, w sklepie lub barze</li>
        <li>Punkty wygasają po 24 miesiącach</li>
      </ul>
      <p>Infolinia {company.phones.loyalty} (Pn–Pt 8:00–14:00), {company.emails.loyalty}</p>
      <p><a className="btn btn-primary" href={company.links.loyalty} target="_blank" rel="noopener noreferrer">Zaloguj się / sprawdź punkty ↗</a></p>
    </div></section>
  );
}
