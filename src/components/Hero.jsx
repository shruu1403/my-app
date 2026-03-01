import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CarGraphic from "./CarGraphic";

gsap.registerPlugin(ScrollTrigger);

/* ── Metrics data ── */
const METRICS = [
  { value: "120%", label: "Growth" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "4.9/5", label: "Rating" },
  { value: "50+", label: "Projects Shipped" },
];

/* ── Headline text split into individual characters ── */
const HEADLINE = "WELCOME  ITZ  FIZZ";

/* ── Reveal cards shown as the car drives past ── */
const REVEAL_CARDS = [
  { title: "Strategy", desc: "Data-driven growth frameworks" },
  { title: "Design", desc: "Premium visual experiences" },
  { title: "Engineering", desc: "Scalable, modern tech stacks" },
  { title: "Results", desc: "Measurable business impact" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const metricsRef = useRef(null);
  const carRef = useRef(null);
  const roadRef = useRef(null);
  const cardsRef = useRef(null);
  const overlayRef = useRef(null);
  const scrollHintRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ────────────────────────────────────
         1. INITIAL LOAD ANIMATION
      ──────────────────────────────────── */

      // Headline letters stagger in
      const letters = headlineRef.current.querySelectorAll(".hero-letter");
      gsap.set(letters, { opacity: 0, y: 40 });
      gsap.to(letters, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: "power3.out",
        delay: 0.3,
      });

      // Metrics fade & slide in
      const metricItems = metricsRef.current.querySelectorAll(".metric-item");
      gsap.set(metricItems, { opacity: 0, y: 30 });
      gsap.to(metricItems, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        delay: 1.0,
      });

      // Car fades in at its starting position (left off-screen)
      gsap.set(carRef.current, { opacity: 0 });
      gsap.to(carRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.6,
      });

      // Road line fades in
      gsap.set(roadRef.current, { opacity: 0 });
      gsap.to(roadRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.8,
      });

      // Reveal cards – hidden initially
      const cards = cardsRef.current.querySelectorAll(".reveal-card");
      gsap.set(cards, { opacity: 0, y: 40, scale: 0.9 });

      /* ────────────────────────────────────
         2. SCROLL-DRIVEN ANIMATION
            Car drives left → right,
            content reveals as it passes,
            scroll up reverses everything.
      ──────────────────────────────────── */

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      /* — Phase 1 (0 → 0.15): Headline & metrics fade out, scroll hint hides — */
      scrollTl.to(
        headlineRef.current,
        { opacity: 0, y: -50, duration: 0.15, ease: "none" },
        0
      );
      scrollTl.to(
        metricsRef.current,
        { opacity: 0, y: -30, duration: 0.15, ease: "none" },
        0
      );
      scrollTl.to(
        scrollHintRef.current,
        { opacity: 0, duration: 0.08, ease: "none" },
        0
      );

      /* — Phase 2 (0.1 → 0.9): Car drives from far left to far right — */
      scrollTl.fromTo(
        carRef.current,
        { x: "-30vw" },
        { x: "100vw", duration: 0.8, ease: "none" },
        0.1
      );

      /* — Slight bounce / tilt while driving — */
      scrollTl.fromTo(
        carRef.current,
        { rotateZ: 0 },
        {
          rotateZ: 1.5,
          duration: 0.1,
          yoyo: true,
          repeat: 7,
          ease: "sine.inOut",
        },
        0.1
      );

      /* — Road line extends as car drives — */
      scrollTl.fromTo(
        roadRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "none" },
        0.1
      );

      /* — Phase 2b: Reveal cards appear one-by-one as car passes — */
      cards.forEach((card, i) => {
        const startAt = 0.18 + i * 0.18; // spread evenly across the full drive
        scrollTl.to(
          card,
          { opacity: 1, y: 0, scale: 1, duration: 0.12, ease: "power2.out" },
          startAt
        );
      });

      /* — Phase 3 (0.85 → 1): Overlay fade for transition — */
      scrollTl.to(
        overlayRef.current,
        { opacity: 0.7, duration: 0.15, ease: "none" },
        0.85
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #141414 100%)",
      }}
    >
      {/* ── Subtle grid background ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Radial glow ── */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#c8a96e]/[.06] blur-[120px]" />

      {/* ── Headline ── */}
      <h1
        ref={headlineRef}
        className="relative z-10 text-center tracking-[0.35em] md:tracking-[0.5em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold select-none will-change-transform"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {HEADLINE.split("").map((char, i) => (
          <span
            key={i}
            className="hero-letter inline-block will-change-[transform,opacity]"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {/* ── Impact Metrics (below headline) ── */}
      <div
        ref={metricsRef}
        className="relative z-10 mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-16"
      >
        {METRICS.map((m, i) => (
          <div
            key={i}
            className="metric-item text-center will-change-[transform,opacity]"
          >
            <p
              className="text-2xl md:text-3xl font-bold"
              style={{ color: "#c8a96e" }}
            >
              {m.value}
            </p>
            <p className="mt-1 text-xs md:text-sm tracking-widest uppercase text-neutral-400">
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Road line (horizontal, stretches as car drives) ── */}
      <div
        ref={roadRef}
        className="absolute left-0 z-[5] w-full origin-left"
        style={{ top: "62%" }}
      >
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#c8a96e]/40 to-transparent" />
        {/* dashed center line */}
        <div
          className="h-[1px] mt-[6px] w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #c8a96e33 0px, #c8a96e33 20px, transparent 20px, transparent 40px)",
          }}
        />
      </div>

      {/* ── Car Visual (absolute positioned, drives L→R) ── */}
      <div
        ref={carRef}
        className="absolute z-10 w-[55vw] max-w-[520px] will-change-transform"
        style={{
          top: "42%",
          left: "0",
          transform: "translateX(-30vw)",
        }}
      >
        <CarGraphic />
      </div>

      {/* ── Reveal cards (appear as car passes) ── */}
      <div
        ref={cardsRef}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        {REVEAL_CARDS.map((card, i) => {
          // Position cards across the screen
          const positions = [
            { top: "22%", left: "12%" },
            { top: "18%", left: "38%" },
            { top: "22%", left: "62%" },
            { top: "18%", left: "84%" },
          ];
          return (
            <div
              key={i}
              className="reveal-card absolute will-change-[transform,opacity] pointer-events-auto"
              style={{
                top: positions[i].top,
                left: positions[i].left,
                transform: "translate(-50%, 0)",
              }}
            >
              <div className="px-5 py-4 rounded-xl border border-[#c8a96e]/20 bg-[#111]/80 backdrop-blur-sm">
                <p
                  className="text-sm md:text-base font-semibold tracking-wide"
                  style={{ color: "#c8a96e" }}
                >
                  {card.title}
                </p>
                <p className="mt-1 text-[11px] md:text-xs text-neutral-400 tracking-wider">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Scroll hint ── */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-pulse"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-500">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-neutral-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* ── Dark overlay for scroll fade ── */}
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-20 bg-black opacity-0"
      />
    </section>
  );
}
