"use client";
import { useEffect } from "react";

// Page-wide motion: scroll progress bar, nav state + active section,
// stat count-up, card spotlight on hover, and smooth image fade-in.
// Everything is skipped for visitors who prefer reduced motion.
export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    // 1) Scroll progress bar + nav shadow after scrolling
    const bar = document.querySelector<HTMLElement>(".progress");
    const nav = document.querySelector<HTMLElement>(".nav");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - innerHeight;
        const p = max > 0 ? scrollY / max : 0;
        if (bar) bar.style.transform = `scaleX(${p})`;
        nav?.classList.toggle("scrolled", scrollY > 12);
        ticking = false;
      });
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => removeEventListener("scroll", onScroll));

    // 2) Highlight the nav link for the section on screen
    const links = [...document.querySelectorAll<HTMLAnchorElement>(".nav nav a")];
    const sections = links
      .map((a) => document.querySelector<HTMLElement>(a.getAttribute("href") || ""))
      .filter(Boolean) as HTMLElement[];
    const secIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((a) => {
            const on = a.getAttribute("href") === `#${e.target.id}`;
            a.classList.toggle("active", on);
            if (on && innerWidth < 900) a.scrollIntoView({ block: "nearest", inline: "center", behavior: reduce ? "auto" : "smooth" });
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => secIO.observe(s));
    cleanups.push(() => secIO.disconnect());

    // 3) Count up the big stat numbers when they come into view
    const stats = [...document.querySelectorAll<HTMLElement>(".stat-value")];
    const statIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          statIO.unobserve(e.target);
          const el = e.target as HTMLElement;
          const text = el.dataset.final || el.textContent || "";
          el.dataset.final = text;
          const m = text.match(/^(\d+(?:\.\d+)?)(.*)$/);
          if (!m || reduce) return;
          const target = parseFloat(m[1]);
          const decimals = (m[1].split(".")[1] || "").length;
          const suffix = m[2];
          const start = performance.now();
          const dur = 1400;
          const step = (t: number) => {
            const k = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - k, 3);
            el.textContent = (target * eased).toFixed(decimals) + suffix;
            if (k < 1) requestAnimationFrame(step);
            else el.textContent = text;
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    stats.forEach((s) => statIO.observe(s));
    cleanups.push(() => statIO.disconnect());

    // 4) Soft spotlight that follows the cursor on cards (mouse only)
    if (!reduce && matchMedia("(hover: hover)").matches) {
      const cards = [...document.querySelectorAll<HTMLElement>(".project, .venture, .startup, .skills, .honors, .closer, .resume-card, .stat")];
      const move = (ev: MouseEvent) => {
        const el = ev.currentTarget as HTMLElement;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${ev.clientX - r.left}px`);
        el.style.setProperty("--my", `${ev.clientY - r.top}px`);
      };
      cards.forEach((c) => {
        c.classList.add("spot");
        c.addEventListener("mousemove", move);
      });
      cleanups.push(() => cards.forEach((c) => c.removeEventListener("mousemove", move)));
    }

    // 5) Images fade in once loaded instead of popping in
    document.querySelectorAll<HTMLImageElement>("main img").forEach((img) => {
      const done = () => img.classList.add("loaded");
      if (img.complete && img.naturalWidth) done();
      else {
        img.classList.add("fade-img");
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      }
    });

    return () => cleanups.forEach((f) => f());
  }, []);

  return <div className="progress" aria-hidden />;
}
