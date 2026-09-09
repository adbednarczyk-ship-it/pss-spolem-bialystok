import { company } from "@/lib/data";
export const metadata = { title: "O nas" };
export default function Page() {
  return (
    <section className="section"><div className="wrap">
      <h1>Spółdzielnia od 1897 roku</h1>
      <p>{company.name} to firma ze 100% polskim kapitałem. Zatrudniamy ponad 1700 osób. Jesteśmy największą spółdzielnią spożywczą w Polsce.</p>
      <p>Sieć supermarketów ma ponad 17 000 m². W ofercie dominują produkty świeże i wyroby własne. Mamy certyfikat ISO 22000.</p>
      <p>Prezes Zarządu: {company.president}. Zastępca Prezesa: {company.vice}.</p>
    </div></section>
  );
}
