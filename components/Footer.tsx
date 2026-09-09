import Link from "next/link";
import { company } from "@/lib/data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap grid grid-3">
        <div>
          <img src="/logo.webp" alt="PSS Społem Białystok" width="220" height="68" style={{height:48,width:"auto",marginBottom:12,filter:"brightness(0) invert(1)"}} />
          <strong>{company.short}</strong>
          <p>
            {company.address}
            <br />
            {company.city}
          </p>
          <p>
            KRS {company.krs}
            <br />
            NIP {company.nip}
            <br />
            REGON {company.regon}
          </p>
          <p>
            IOD: <a href={`mailto:${company.emails.iod}`}>{company.emails.iod}</a>
          </p>
        </div>
        <div>
          <strong>Zakupy</strong>
          <p>
            <a href={company.links.eshop}>E-sklep</a>
            <br />
            <Link href="/sklepy">Sklepy</Link>
            <br />
            <Link href="/promocje">Promocje</Link>
            <br />
            <Link href="/karta-klienta">Karta klienta</Link>
            <br />
            <Link href="/zamowienia">Zamówienia i dostawy</Link>
          </p>
        </div>
        <div>
          <strong>Spółdzielnia</strong>
          <p>
            <Link href="/produkcja">Produkcja własna</Link>
            <br />
            <Link href="/bary">Bary i drive</Link>
            <br />
            <Link href="/praca">Praca</Link>
            <br />
            <Link href="/kontakt">Kontakt</Link>
            <br />
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
            <br />
            <Link href="/polityka-cookies">Cookies</Link>
            <br />
            <a href={company.links.facebook}>Facebook</a>
          </p>
        </div>
      </div>
      <div className="wrap muted">© {new Date().getFullYear()} {company.short}</div>
    </footer>
  );
}
