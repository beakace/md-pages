"use client";

import HandDrawnUnderline from "../HandDrawnUnderline";
import { accentFilter } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 sm:px-8 max-w-[56rem] mx-auto relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <img
        src="/svg/3.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-4 md:-right-16 md:top-1/4 top-[17%] w-32 sm:w-40 pointer-events-none select-none block opacity-25"
        style={{
          filter: accentFilter,
          clipPath: "inset(0 100% 0 0)",
          animation: "reveal-right 0.6s 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        }}
      />

      <div style={{ animation: "fade-up 1s cubic-bezier(0.25, 0.1, 0.25, 1) both" }}>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.15] mb-8">
          Strony internetowe
          <br />
          <span className="relative inline-block italic">
            po ludzku
            <HandDrawnUnderline />
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted dark:text-muted-dark max-w-[34rem] leading-relaxed mb-10">
          Bez agencyjnych sztuczek. Bez przypadkowych szablonów AI.
          <br />
          Profesjonalnie, skutecznie i w rozsądnej cenie.
        </p>

        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          }}
          className="group inline-flex items-center justify-center gap-3 text-sm md:text-base font-medium bg-ink dark:bg-chalk text-washi dark:text-ink px-8 py-4 organic-border hover:bg-ink/90 dark:hover:bg-chalk/90 transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-washi dark:focus-visible:ring-offset-surface-dark"
        >
          Porozmawiajmy
          <span className="text-accent transition-transform duration-400 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
