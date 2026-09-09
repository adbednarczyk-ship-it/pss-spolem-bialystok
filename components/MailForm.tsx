"use client";

import { company } from "@/lib/data";

export function MailForm({ to, topics }: { to: string; topics: string[] }) {
  return (
    <form className="form sans" action={`mailto:${to}`} method="get">
      <input name="subject" placeholder="Imię i nazwisko" required />
      <input type="email" placeholder="E-mail" required />
      <input placeholder="Telefon" />
      <select defaultValue={topics[0]}>
        {topics.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <textarea name="body" rows={5} placeholder="Wiadomość" required />
      <label>
        <input type="checkbox" required /> Akceptuję przetwarzanie danych w celu odpowiedzi. Administrator: {company.name}. IOD: {company.emails.iod}.
      </label>
      <button className="btn btn-primary" type="submit">
        Wyślij e-mail
      </button>
    </form>
  );
}
