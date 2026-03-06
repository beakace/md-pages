"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { accentFilter, prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function MidCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".midcta-content", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 40,
        scale: 0.95,
        opacity: 0,
        rotation: -2,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.fromTo(
        ".midcta-underline",
        { strokeDasharray: 300, strokeDashoffset: 300 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          strokeDashoffset: 0,
          duration: 1.2,
          delay: 0.4,
          ease: "power2.inOut",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 sm:py-48 px-6 sm:px-8 relative bg-washi dark:bg-surface-dark">
      <img
        src="/svg/3.svg"
        alt=""
        aria-hidden="true"
        className="absolute left-[10%] top-[-35%] md:top-[-20%] w-24 md:w-[30vh] opacity-10 pointer-events-none select-none rotate-45 [.alt-dimension_&]:hidden"
        style={{ filter: accentFilter }}
      />
      <img
        src="/svg/1.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-[5%] bottom-[-10%] w-[25vh] opacity-10 pointer-events-none select-none -rotate-12 [.alt-dimension_&]:hidden"
        style={{ filter: accentFilter }}
      />

      <div className="midcta-content max-w-[48rem] mx-auto text-center relative z-10 flex flex-col items-center">
        <p className="font-handwritten text-accent text-3xl md:text-4xl -rotate-3 mb-6 [.alt-dimension_&]:text-white [.alt-dimension_&]:font-sans [.alt-dimension_&]:uppercase [.alt-dimension_&]:tracking-[0.2em] [.alt-dimension_&]:text-xs [.alt-dimension_&]:font-bold [.alt-dimension_&]:not-italic [.alt-dimension_&]:transform-none transition-all duration-700">
          Zróbmy to razem
        </p>

        <p className="font-serif text-4xl sm:text-5xl md:text-6xl italic leading-tight text-ink dark:text-chalk mb-12">
          Gotów na nową stronę?
        </p>

        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          }}
          className="group relative inline-flex items-center justify-center h-16 sm:h-[72px] px-10 sm:px-12 font-sans text-base sm:text-lg tracking-wide text-washi dark:text-surface-dark [.alt-dimension_&]:text-white bg-ink dark:bg-chalk [.alt-dimension_&]:bg-accent rounded-[14px] [.alt-dimension_&]:rounded-none overflow-hidden transition-all duration-500 active:scale-95 outline-none hover:shadow-xl shadow-sm"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-3 font-medium [.alt-dimension_&]:uppercase [.alt-dimension_&]:tracking-widest">
            Zacznijmy współpracę
            <span className="absolute top-1/2 -translate-y-1/2 -right-6 w-2 h-2 rounded-full bg-accent opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 [.alt-dimension_&]:bg-white [.alt-dimension_&]:rounded-none [.alt-dimension_&]:w-2.5 [.alt-dimension_&]:h-2.5" />
          </span>
          <div className="absolute inset-0 bg-white/10 dark:bg-black/10 [.alt-dimension_&]:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </div>
    </section>
  );
}
