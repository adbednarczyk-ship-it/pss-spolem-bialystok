import { StoreFinder } from "@/components/StoreFinder";
export const metadata = { title: "Sklepy" };
export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Sklepy Społem w Białymstoku</h1>
        <p className="muted">Supermarkety, sklepy osiedlowe, Central i Hermes AGD.</p>
        <StoreFinder />
      </div>
    </section>
  );
}
