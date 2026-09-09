import { MailForm } from "@/components/MailForm";
import { company } from "@/lib/data";
export const metadata = { title: "Kontakt" };
export default function Page() {
  return (
    <section className="section"><div className="wrap grid grid-2">
      <div>
        <h1>Kontakt</h1>
        <p>{company.name}<br/>{company.address}<br/>{company.city}</p>
        <p>Sekretariat: {company.emails.office}<br/>E-sklep: {company.phones.eshop}<br/>Gastronomia: {company.phones.gastro}<br/>Lojalność: {company.phones.loyalty}<br/>Kadry: {company.phones.hr}</p>
      </div>
      <MailForm to={company.emails.office} topics={["Pytanie", "Reklamacja", "Współpraca", "Inne"]} />
    </div></section>
  );
}
