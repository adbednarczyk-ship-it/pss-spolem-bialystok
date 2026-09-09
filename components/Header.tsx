"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company } from "@/lib/data";

const groups = [
  {
    label: "Zakupy",
    href: "/sklepy",
    items: [
      { href: "/sklepy", label: "Sieć sklepów", note: "Supermarkety i osiedlowe" },
      { href: "/promocje", label: "Promocje i gazetka", note: "Aktualne obniżki" },
      { href: "/karta-klienta", label: "Karta klienta", note: "Punkty i e-bony" },
      { href: "/zamowienia", label: "Zamówienia i dostawy", note: "E-sklep i telefon" },
    ],
  },
  {
    label: "Gastronomia",
    href: "/bary",
    items: [
      { href: "/bary", label: "Bary i drive", note: "Obiad blisko domu" },
      { href: company.links.gastro, label: "Zamów jedzenie", note: "Białostocka Gastronomia", external: true },
    ],
  },
  {
    label: "Produkcja",
    href: "/produkcja",
    items: [
      { href: "/produkcja/pieczywo", label: "Pieczywo", note: "Zakwas i wypiek własny" },
      { href: "/produkcja/wedliny", label: "Wędliny i garmażerka", note: "Ponad 150 pozycji" },
      { href: "/produkcja/torty", label: "Torty na zamówienie", note: "Z dowozem w mieście" },
    ],
  },
  {
    label: "Spółdzielnia",
    href: "/o-nas",
    items: [
      { href: "/o-nas", label: "O nas", note: "Tradycja od 1897" },
      { href: "/aktualnosci", label: "Aktualności", note: "Co słychać w Społem" },
      { href: "/praca", label: "Praca", note: "Dołącz do zespołu" },
      { href: "/kontakt", label: "Kontakt", note: "Centrala i działy" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    setOpen(false);
    setLocked(true);
    const el = document.activeElement;
    if (el instanceof HTMLElement) el.blur();
  }, [pathname]);

  return (
    <header className="header">
      <div className="wrap header-bar">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <img
            src="/logo.webp"
            alt='PSS Społem Białystok — Zaufaj tradycji'
            className="brand-logo"
            width={575}
            height={178}
          />
        </Link>

        <nav
          className={`nav${locked ? " is-locked" : ""}`}
          aria-label="Główne"
          onMouseLeave={() => setLocked(false)}
        >
          {groups.map((group) => (
            <div className="nav-item" key={group.label}>
              <Link href={group.href} className="nav-link" onClick={() => setLocked(true)}>
                {group.label}
                <span className="nav-caret" aria-hidden>
                  ▾
                </span>
              </Link>
              <div className="nav-panel">
                {group.items.map((item) =>
                  item.external ? (
                    <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                      <strong>{item.label}</strong>
                      <span>{item.note}</span>
                    </a>
                  ) : (
                    <Link key={item.href} href={item.href} onClick={() => setLocked(true)}>
                      <strong>{item.label}</strong>
                      <span>{item.note}</span>
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </nav>

        <div className="cta header-cta">
          <a className="btn btn-primary" href={company.links.eshop} target="_blank" rel="noopener noreferrer">
            E-sklep
          </a>
          <a className="btn btn-primary" href={company.links.gastro} target="_blank" rel="noopener noreferrer">
            Zamów jedzenie
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="menu-mobilne"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Zamknij" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu" id="menu-mobilne">
          <div className="wrap">
            {groups.map((group) => (
              <div className="mobile-group" key={group.label}>
                <p>{group.label}</p>
                {group.items.map((item) =>
                  item.external ? (
                    <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                      {item.label}
                    </a>
                  ) : (
                    <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            ))}
            <a className="btn btn-primary" href={company.links.eshop} target="_blank" rel="noopener noreferrer">
              Przejdź do e-sklepu
            </a>
            <a className="btn btn-primary" href={company.links.gastro} target="_blank" rel="noopener noreferrer" style={{marginTop: 8}}>
              Zamów jedzenie
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
