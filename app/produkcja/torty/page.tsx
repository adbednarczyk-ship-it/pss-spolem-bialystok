import { company } from "@/lib/data";
export const metadata = { title: "Torty i słodkości" };
export default function Page() {
  return (
    <section className="section"><div className="wrap">
      <h1>Torty i słodkie stoły</h1>
      <p>Torty na zamówienie i ciasta na przyjęcia. Od 300 zł darmowy transport na terenie Białegostoku.</p>
      <p>Tel. {company.phones.cakes} oraz 85 746 46 03 / 85 742 47 64.</p>
    </div></section>
  );
}
