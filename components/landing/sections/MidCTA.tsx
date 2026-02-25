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
        className="absolute left-[10%] top-[-35%] md:top-[-20%] w-24 md:w-[30vh] opacity-10 pointer-events-none select-none rotate-45"
        style={{ filter: accentFilter }}
      />
      <img
        src="/svg/1.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-[5%] bottom-[-10%] w-[25vh] opacity-10 pointer-events-none select-none -rotate-12"
        style={{ filter: accentFilter }}
      />

      <div className="midcta-content max-w-[48rem] mx-auto text-center relative z-10 flex flex-col items-center">
        <p className="font-handwritten text-accent text-3xl md:text-4xl -rotate-3 mb-6">
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
          className="group relative inline-flex items-center justify-center gap-4 text-xl sm:text-2xl font-sans font-bold bg-ink dark:bg-chalk text-washi dark:text-ink px-10 py-5 min-h-[44px] organic-border hover:bg-ink/90 dark:hover:bg-chalk/90 transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-washi dark:focus-visible:ring-offset-surface-dark"
        >
          <span className="relative z-10 drop-shadow-sm">Porozmawiajmy</span>

          <span className="relative z-10 text-accent font-serif italic text-3xl transition-transform duration-300 group-hover:translate-x-3">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
