import Link from "next/link";
import { mapsUrl, type Place } from "@/lib/data";

export function PlaceCard({ place, href }: { place: Place; href: string }) {
  return (
    <article className="card">
      <p className="chip">{place.type}</p>
      {place.tags?.map((t) => (
        <span className="chip" key={t}>
          {t}
        </span>
      ))}
      <h3>
        <Link href={href}>{place.name}</Link>
      </h3>
      <p>{place.address}, Białystok</p>
      <p className="muted">
        Pn–Pt {place.hoursWeek}
        <br />
        Sob {place.hoursSat}
        {place.hoursSun ? (
          <>
            <br />
            Nd {place.hoursSun}
          </>
        ) : (
          <>
            <br />
            Nd: sprawdź w placówce / niedziele handlowe
          </>
        )}
      </p>
      <p>
        {place.phones.map((p) => (
          <span key={p}>
            <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
            <br />
          </span>
        ))}
      </p>
      <p>
        <a className="btn btn-light" href={mapsUrl(place.address)} target="_blank" rel="noopener noreferrer">
          Nawiguj
        </a>
      </p>
    </article>
  );
}
