"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { slides } from "@/lib/data";

export function HomeSlider() {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  function go(dir: number) {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }

  const inner = (
    <>
      <p className="chip">{current.tag}</p>
      <h2>{current.title}</h2>
      <p>{current.text}</p>
      <span className="btn btn-primary">{current.cta}</span>
    </>
  );

  return (
    <section className="slider" aria-roledescription="karuzela" aria-label="Promocje i ważne informacje">
      <div className="slider-frame">
        {current.href.startsWith("http") ? (
          <a className="slider-slide" href={current.href} target="_blank" rel="noopener noreferrer">
            <div className="wrap">{inner}</div>
          </a>
        ) : (
          <Link className="slider-slide" href={current.href}>
            <div className="wrap">{inner}</div>
          </Link>
        )}
        <button className="slider-nav prev" type="button" aria-label="Poprzedni slajd" onClick={() => go(-1)}>
          ‹
        </button>
        <button className="slider-nav next" type="button" aria-label="Następny slajd" onClick={() => go(1)}>
          ›
        </button>
        <div className="slider-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              className={i === index ? "active" : undefined}
              aria-label={`Slajd ${i + 1}: ${slide.title}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
