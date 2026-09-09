"use client";

import { useEffect, useState } from "react";
import { slides } from "@/lib/data";

export function HomeSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = slides[index];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [paused]);

  function go(dir: number) {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }

  return (
    <section
      className="slider"
      aria-roledescription="karuzela"
      aria-label="Promocje i ważne informacje"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slider-frame">
        <div className="slider-slide" role="img" aria-label={current.title}>
          <img src={current.image} alt={current.title} />
        </div>
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
