"use client";

import { useMemo, useState } from "react";
import { PlaceCard } from "@/components/PlaceCard";
import { stores, type PlaceType } from "@/lib/data";

const filters: { id: "all" | PlaceType; label: string }[] = [
  { id: "all", label: "Wszystkie" },
  { id: "supermarket", label: "Supermarkety" },
  { id: "sklep", label: "Sklepy osiedlowe" },
  { id: "central", label: "Central" },
  { id: "agd", label: "AGD" },
];

export function StoreFinder({ compact = false }: { compact?: boolean }) {
  const [q, setQ] = useState("");
  const [type, setType] = useState<(typeof filters)[number]["id"]>("all");
  const list = useMemo(() => {
    return stores.filter((s) => {
      const okType = type === "all" || s.type === type;
      const blob = `${s.name} ${s.address} ${s.tags?.join(" ") ?? ""}`.toLowerCase();
      return okType && blob.includes(q.toLowerCase());
    });
  }, [q, type]);
  const shown = compact ? list.slice(0, 6) : list;
  return (
    <div>
      <input
        className="search sans"
        placeholder="Szukaj po nazwie lub ulicy…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Szukaj sklepu"
      />
      <div className="filters sans">
        {filters.map((f) => (
          <button key={f.id} className={type === f.id ? "active" : ""} onClick={() => setType(f.id)}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-3">
        {shown.map((s) => (
          <PlaceCard key={s.slug} place={s} href={s.type === "central" ? "/central" : `/sklepy/${s.slug}`} />
        ))}
      </div>
      {shown.length === 0 && <p>Brak placówek dla tego filtra.</p>}
    </div>
  );
}
