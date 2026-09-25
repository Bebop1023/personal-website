"use client";
import { useRef } from "react";

type Photo = { src: string; alt: string; caption: string; size?: string; position?: string };

// Horizontally scrollable photo strip with arrow buttons.
// Swipe on phones, scroll/drag with a trackpad, or use the arrows.
export default function Carousel({ photos }: { photos: Photo[] }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="carousel">
      <div className="carousel-track" ref={track}>
        {photos.map((ph) => (
          <figure key={ph.src} className={`slide ${ph.size || ""}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ph.src} alt={ph.alt} loading="lazy" style={ph.position ? { objectPosition: ph.position } : undefined} />
            <figcaption>{ph.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="carousel-controls">
        <span className="mono muted"><span className="hint-desk">Scroll for more →</span><span className="hint-touch">Swipe for more →</span></span>
        <div className="carousel-btns">
          <button type="button" aria-label="Previous photos" onClick={() => scroll(-1)}>←</button>
          <button type="button" aria-label="Next photos" onClick={() => scroll(1)}>→</button>
        </div>
      </div>
    </div>
  );
}
