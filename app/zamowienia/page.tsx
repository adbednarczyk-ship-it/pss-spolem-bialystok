import { company, suburbs } from "@/lib/data";
export const metadata = { title: "Zamówienia i dostawy" };
export default function Page() {
  return (
    <section className="section"><div className="wrap">
      <h1>Zamówienia i dostawy</h1>
      <div className="grid grid-2">
        <article className="card">
          <h2>E-sklep</h2>
          <p>Minimum 75 zł. Białystok: 19,99 zł (75–299,99), 0 zł od 300 zł. Ościenne: 29,99 zł / 0 zł od 300 zł. Odbiór Opałek: 5 zł / 0 zł od 300 zł. Płatność przy odbiorze.</p>
          <p><a className="btn btn-primary" href={company.links.eshop} target="_blank" rel="noopener noreferrer">Przejdź do e-sklepu</a></p>
        </article>
        <article className="card">
          <h2>Telefon — Opałek</h2>
          <p>{company.phones.eshop}, poniedziałek–piątek 8:00–13:00. {company.emails.eshop}</p>
        </article>
      </div>
      <h2>Miejscowości ościenne</h2>
      <p>{suburbs.join(", ")}.</p>
    </div></section>
  );
}
