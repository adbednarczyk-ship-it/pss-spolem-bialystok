import { company } from "@/lib/data";
export const metadata = { title: "Pieczywo" };
export default function Page() {
  return (
    <section className="section"><div className="wrap">
      <h1>Chleb na naturalnym zakwasie</h1>
      <p>Największy producent tradycyjnego pieczywa w regionie. Receptury bez sztucznych polepszaczy. Piekarnia trzyzmianowa: 20 ton mąki dziennie, do 30 tysięcy bochenków i 130 tysięcy bułek. Proces powyżej 40 godzin.</p>
      <p>Zamówienia B2B: {company.phones.bakeryB2b}, {company.phones.bakeryMobile} (7:00–15:00).</p>
    </div></section>
  );
}
