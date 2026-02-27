"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function ButtonDemoSection() {
  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-washi dark:bg-surface-dark border-t border-b border-chalk/10 dark:border-ink/10">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        
        <div className="space-y-4">
          <p className="font-serif italic text-accent text-xl">
            Propozycja dla Ciebie
          </p>
          <h2 className="font-sans text-3xl md:text-5xl text-ink dark:text-chalk tracking-tight">
            Wybierz styl przycisku CTA
          </h2>
          <p className="text-muted-dark dark:text-muted max-w-xl mx-auto">
            Przygotowałem 3 nowe warianty oparte na czarnym tle z jasnym tekstem. 
            Zrezygnowaliśmy z kształtu "pigułki" (pill) na rzecz bardziej spójnych ze 
            stroną, lekko dopracowanych prostokątów z edytorialowymi detalami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 pb-8">
          
          {/* Variant 1: The Sharp Block */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-muted-dark dark:text-muted">
              Wariant 1: Blok i Strzałka
            </h3>
            <p className="text-xs text-muted-dark/70 dark:text-muted/70 min-h-[40px]">
              Klasyczny prostokąt. Przy najechaniu elegancko wsuwa się kierunkowa strzałka.
            </p>
            <div className="mt-4">
              <ButtonVariant1 />
            </div>
          </div>

          {/* Variant 2: The Block with Dot */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-muted-dark dark:text-muted">
              Wariant 2: Blok i Akcent
            </h3>
            <p className="text-xs text-muted-dark/70 dark:text-muted/70 min-h-[40px]">
              Prosta forma wzbogacona o subtelny, organiczny detal, który pojawia się przy kursorze.
            </p>
            <div className="mt-4">
              <ButtonVariant2 />
            </div>
          </div>

          {/* Variant 3: The Organic Block */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="font-sans text-sm uppercase tracking-[0.15em] text-muted-dark dark:text-muted">
              Wariant 3: Miękkie Krawędzie
            </h3>
            <p className="text-xs text-muted-dark/70 dark:text-muted/70 min-h-[40px]">
              Lekko asymetryczne rogi (human touch), płynnie zmieniające kształt pod myszką.
            </p>
            <div className="mt-4">
              <ButtonVariant3 />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// BUTTON VARIANTS
// ==========================================

function ButtonVariant1() {
  return (
    <button 
      className="group relative inline-flex items-center justify-center h-14 px-8 font-sans text-sm tracking-wide text-washi dark:text-surface-dark bg-ink dark:bg-chalk rounded-sm overflow-hidden transition-transform duration-300 active:scale-95 outline-none"
    >
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-x-1">
        Umów pierwszą lekcję
        {/* Animated arrow that comes in slightly */}
        <svg 
          viewBox="0 0 16 16" 
          fill="none" 
          className="w-4 h-4 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        >
          <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}

function ButtonVariant2() {
  return (
    <button 
      className="group relative inline-flex items-center justify-center h-14 px-8 font-sans text-sm tracking-wide text-washi dark:text-surface-dark bg-ink dark:bg-chalk rounded-sm overflow-hidden transition-all duration-300 active:scale-95 outline-none"
    >
      <span className="relative z-10 transition-transform duration-300 flex items-center gap-3">
        Umów pierwszą lekcję
        {/* Small subtle dot dot expands */}
        <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
      </span>
      <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}

function ButtonVariant3() {
  return (
    <button 
      className="group relative inline-flex items-center justify-center h-14 px-8 font-sans text-sm tracking-wide text-washi dark:text-surface-dark bg-ink dark:bg-chalk rounded-[12px_3px_12px_3px] hover:rounded-[3px_12px_3px_12px] overflow-hidden transition-all duration-500 active:scale-95 outline-none"
    >
      <span className="relative z-10 transition-transform duration-300 flex items-center justify-center group-hover:-translate-y-[1px]">
        Umów pierwszą lekcję
      </span>
      <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
