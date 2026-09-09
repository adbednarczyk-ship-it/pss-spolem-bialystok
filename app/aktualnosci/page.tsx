import Link from "next/link";
import { news } from "@/lib/data";
export const metadata = { title: "Aktualności" };
export default function Page() {
  return (
    <section className="section"><div className="wrap">
      <h1>Aktualności</h1>
      <div className="grid grid-3">{news.map(n => <article className="card" key={n.slug}><p className="muted">{n.date}</p><h2><Link href={`/aktualnosci/${n.slug}`}>{n.title}</Link></h2><p>{n.lead}</p></article>)}</div>
    </div></section>
  );
}
