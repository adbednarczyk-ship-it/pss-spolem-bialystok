import { MailForm } from "@/components/MailForm";
import { company } from "@/lib/data";
export const metadata = { title: "Praca" };
export default function Page() {
  return (
    <section className="section"><div className="wrap grid grid-2">
      <div>
        <h1>Praca w Społem</h1>
        <p>Lokalny pracodawca: sklepy, bary, produkcja i logistyka. CV: {company.emails.hr}, tel. {company.phones.hr}. Aktualne oferty publikujemy też na Facebooku.</p>
      </div>
      <MailForm to={company.emails.hr} topics={["Sprzedaż", "Gastronomia", "Produkcja", "Logistyka", "Inne"]} />
    </div></section>
  );
}
