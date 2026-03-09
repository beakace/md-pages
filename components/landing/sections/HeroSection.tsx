"use client";

import HandDrawnUnderline from "../HandDrawnUnderline";
import { accentFilter } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* ── Base Dimension Background ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02] dark:opacity-[0.04] transition-opacity duration-1000 [.alt-dimension_&]:opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(var(--grid-color) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Doodle container */}
      <div className="absolute inset-0 mx-auto max-w-[64rem] w-full h-full pointer-events-none z-10">
        <img
          src="/svg/3.svg"
          alt=""
          aria-hidden="true"
          className="absolute right-4 md:-right-16 md:top-1/4 top-[17%] w-32 sm:w-40 pointer-events-none select-none block opacity-25 transition-opacity duration-1000 [.alt-dimension_&]:hidden"
          style={{
            filter: accentFilter,
            clipPath: "inset(0 100% 0 0)",
            animation: "reveal-right 0.6s 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          }}
        />
      </div>

      {/* ── Alt Dimension Cinematic Background ── */}
      <div 
        className="absolute inset-0 opacity-0 transition-duration-1000 transition-opacity [.alt-dimension_&]:opacity-100 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[url('/dimension2/pexels-skylar-kang-6044224.jpg')] bg-cover bg-center bg-no-repeat xl:bg-fixed scale-105 [.alt-dimension_&]:animate-[subtle-zoom_20s_ease-out_forwards]" />
        
        {/* Dynamic Vignette / Gradient Overlay for readability and cinematic drama */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent md:w-2/3" />
      </div>

      {/* ── Content ── */}
      <div 
        className="relative z-10 w-full px-6 sm:px-8 max-w-[64rem] mx-auto"
        style={{ animation: "fade-up 1s cubic-bezier(0.25, 0.1, 0.25, 1) both" }}
      >
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight leading-[1.1] mb-8 transition-transform duration-700 [.alt-dimension_&]:tracking-tighter [.alt-dimension_&]:scale-[1.02] origin-left">
          Strony internetowe
          <br />
          <span className="relative inline-block italic [.alt-dimension_&]:not-italic [.alt-dimension_&]:uppercase [.alt-dimension_&]:font-bold [.alt-dimension_&]:text-accent [.alt-dimension_&]:tracking-widest [.alt-dimension_&]:mt-2">
            po ludzku
            {/* The underline is hidden in alt-dimension for a cleaner architectural look */}
            <span className="[.alt-dimension_&]:hidden">
              <HandDrawnUnderline />
            </span>
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted dark:text-muted-dark [.alt-dimension_&]:text-white/90 max-w-[34rem] leading-relaxed mb-12 transition-colors duration-700 font-sans">
          Bez agencyjnych sztuczek.<br />
          Bez przypadkowych szablonów AI.<br />
          Profesjonalnie, skutecznie i w rozsądnej cenie.
        </p>

        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          }}
          className="group relative inline-flex items-center justify-center h-14 md:h-16 px-8 md:px-10 font-sans text-sm md:text-base tracking-wide text-washi dark:text-surface-dark [.alt-dimension_&]:text-white bg-ink dark:bg-chalk [.alt-dimension_&]:bg-accent rounded-[12px] [.alt-dimension_&]:rounded-none overflow-hidden transition-all duration-500 active:scale-95 outline-none hover:shadow-xl shadow-sm"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2.5 font-medium [.alt-dimension_&]:uppercase [.alt-dimension_&]:tracking-widest">
            Wyceń swój projekt
            <span className="absolute top-1/2 -translate-y-1/2 -right-5 w-1.5 h-1.5 rounded-full bg-accent opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 [.alt-dimension_&]:bg-white [.alt-dimension_&]:rounded-none [.alt-dimension_&]:w-2 [.alt-dimension_&]:h-2" />
          </span>
          <div className="absolute inset-0 bg-white/10 dark:bg-black/10 [.alt-dimension_&]:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>
    </section>
  );
}
