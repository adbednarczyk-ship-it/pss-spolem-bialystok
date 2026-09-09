"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(!localStorage.getItem("spolem-cookies"));
  }, []);
  if (!open) return null;
  return (
    <div className="cookie sans" role="dialog" aria-label="Cookies">
      <p>
        Używamy niezbędnych plików cookies, żeby strona działała. Szczegóły w{" "}
        <Link href="/polityka-cookies">polityce cookies</Link>.
      </p>
      <button
        className="btn btn-primary"
        onClick={() => {
          localStorage.setItem("spolem-cookies", "1");
          setOpen(false);
        }}
      >
        Rozumiem
      </button>
    </div>
  );
}
