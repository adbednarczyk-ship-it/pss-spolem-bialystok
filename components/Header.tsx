import Link from "next/link";
import { company } from "@/lib/data";

const links = [
  { href: "/sklepy", label: "Sklepy" },
  { href: "/bary", label: "Bary" },
  { href: "/promocje", label: "Promocje" },
  { href: "/produkcja", label: "Produkcja" },
  { href: "/karta-klienta", label: "Karta klienta" },
  { href: "/aktualnosci", label: "Aktualności" },
  { href: "/o-nas", label: "O nas" },
  { href: "/praca", label: "Praca" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Header() {
  return (
    <>
      <div className="topbar sans">
        <div className="wrap">
          <a href={company.links.loyalty} target="_blank" rel="noopener noreferrer">
            Punkty i e-bony — zaloguj się
          </a>
          <span>Zakupy tel. {company.phones.eshop}</span>
        </div>
      </div>
      <header className="header">
        <div className="wrap">
          <Link href="/" className="logo">
            <div className="mark">S</div>
            <div>
              <strong>SPOŁEM</strong>
              <span>Białystok</span>
            </div>
          </Link>
          <nav className="nav" aria-label="Główne">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="cta">
            <a className="btn btn-ghost" href={company.links.gastro} target="_blank" rel="noopener noreferrer">
              Zamów jedzenie ↗
            </a>
            <a className="btn btn-primary" href={company.links.eshop} target="_blank" rel="noopener noreferrer">
              E-sklep ↗
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
