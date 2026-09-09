import { company } from "@/lib/data";
export const metadata = { title: "Lokalni patrioci" };
export default function Page() {
  return (
    <section className="section"><div className="wrap">
      <h1>Jesteśmy lokalnymi patriotami</h1>
      <p>Świeże grupy towarowe stanowią ponad 60% obrotu. Mąkę kupujemy z województwa podlaskiego. Mięso, warzywa i owoce — od lokalnych producentów.</p>
      <p>Sklepy są blisko klientów, a obsługa nie jest anonimowa. Dziękujemy za lojalność — {company.president}.</p>
    </div></section>
  );
}
