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
          Profesjonalnie, skutecznie i w rozsądnej cenie.
        </p>

        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          }}
          className="group relative inline-flex items-center justify-center h-14 px-8 font-sans text-sm tracking-wide text-washi dark:text-surface-dark bg-ink dark:bg-chalk rounded-[12px] overflow-hidden transition-all duration-300 active:scale-95 outline-none hover:shadow-lg shadow-sm"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2.5">
            Wyceń swój projekt
            <span className="absolute top-1/2 -translate-y-1/2 -right-5 w-1.5 h-1.5 rounded-full bg-accent opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
          </span>
          <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>
    </section>
  );
}
