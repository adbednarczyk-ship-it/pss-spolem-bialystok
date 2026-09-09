import { company } from "@/lib/data";

export const metadata = { title: "Jesteśmy lokalnymi patriotami" };

export default function Page() {
  return (
    <section className="section band-together">
      <div className="wrap" style={{ maxWidth: 760 }}>
        <p className="hero-kicker" style={{ color: "var(--muted)", letterSpacing: ".14em" }}>
          Spółdzielnia
        </p>
        <h1>Jesteśmy lokalnymi patriotami</h1>
        <p className="muted">
          {company.president}, Prezes Zarządu
          <br />
          {company.vice}, Zastępca Prezesa Zarządu
        </p>
        <p>
          Jesteśmy jedną z najstarszych marek Białegostoku, obecną na rynku od zaborów przez czasy I RP, PRL-u aż po wolną Polskę. W czym tkwi fenomen naszej Spółdzielni, która w czasach wzmożonej konkurencji stale utrzymuje pozycję lidera? Niewątpliwie trudno byłoby zbudować tak rozpoznawalną markę bez najwyższej jakości produktów, oferowanych w sklepach i barach. Na bieżąco sprzedajemy świeżą żywność, którą sami produkujemy w swoich zakładach. Świeże grupy towarowe: pieczywo, mięso, owoce, warzywa, garmażerka i nabiał stanowią ponad 60% udziału w naszym obrocie. O tym, że białostoczanie wybierają rodzime „Społem”, decyduje także to, że sklepy sieci znajdują się blisko klientów, a nasza obsługa nie jest anonimowa — kupujący znają naszych sprzedawców. Nie bez znaczenia jest także pochodzenie produktów. Do naszych wypieków piekarskich i ciastkarskich kupujemy mąkę z terenu województwa podlaskiego. Mięso pochodzi z ubojni lokalnych producentów, podobnie warzywa i owoce. Zakup lokalnych produktów i promocja miejscowych przedsiębiorców niewątpliwie wpisują się w idee patriotyzmu gospodarczego.
        </p>
        <p>
          Miesięcznie produkujemy ok. 700 ton pieczywa, 50 ton ciast, 50 ton garmażerki oraz 250 ton mięsa i wędlin. PSS Społem jest największą spółdzielnią spożywczą w Polsce. Nasze łączne obroty za rok 2022 osiągnęły poziom 530 mln zł. Sieć sklepów i barów, z okienkami typu drive, to nie ostatnie nasze słowo. W najbliższym czasie przystąpimy do budowy magazynu logistycznego z częścią produkcyjną. Celem przedsięwzięcia jest osiągnięcie niezależności od strony zakupowej oraz poprawa rentowności firmy, co może pozwolić m.in. na zwiększenie płac. Niebawem pojawią się też nowe sklepy o powierzchni ponad 1 tys. m², które w miarę możliwości będą łączone z gastronomią. Zaplanowaliśmy także wprowadzenie zmian w naszych placówkach, ułatwiających i poprawiających komfort zakupów. Jesteśmy bardzo wdzięczni za lojalność i zaufanie wszystkich klientów i liczymy na dalsze wspólne lata dające nam możliwość dalszego rozwoju.
        </p>
        <p>
          <strong>{company.president}</strong>
          <br />
          Prezes Zarządu PSS Społem w Białymstoku
        </p>
      </div>
    </section>
  );
}
