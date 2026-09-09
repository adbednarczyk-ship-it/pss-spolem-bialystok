import { company } from "@/lib/data";
export const metadata = { title: "Polityka prywatności" };
export default function Page() {
  return (
    <section className="section"><div className="wrap">
      <h1>Polityka prywatności</h1>
      <p>Administratorem danych jest {company.name}, {company.address}, {company.city}. IOD: {company.emails.iod}.</p>
      <p>Dane z formularzy przetwarzamy, żeby odpowiedzieć na wiadomość lub rekrutację. Podanie danych jest dobrowolne, ale potrzebne do kontaktu.</p>
    </div></section>
  );
}
