"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".philosophy-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
        y: 25,
        opacity: 0,
        duration: 1.6,
        ease: "power2.out",
        stagger: 0.35,
      });

      const circle = sectionRef.current?.querySelector(".philosophy-circle") as SVGPathElement;
      if (circle) {
        const length = circle.getTotalLength?.() || 300;
        gsap.set(circle, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(circle, {
          scrollTrigger: { trigger: circle, start: "top 80%" },
          strokeDashoffset: 0,
          duration: 2.2,
          ease: "power2.inOut",
          delay: 0.8,
        });
      }


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-36 md:py-64 px-6 sm:px-8 w-full overflow-hidden bg-ink dark:bg-washi text-washi dark:text-ink [.alt-dimension_&]:bg-[url('/dimension2/pexels-resourceboy-18541781.jpg')] [.alt-dimension_&]:bg-cover [.alt-dimension_&]:bg-center [.alt-dimension_&]:bg-no-repeat [.alt-dimension_&]:bg-fixed [.alt-dimension_&]:text-white"
    >
      {/* Background overlay for alt-dimension */}
      <div className="absolute inset-0 pointer-events-none bg-black/60 opacity-0 transition-opacity duration-1000 [.alt-dimension_&]:opacity-50 z-0 border-y border-white/5" />

      {/* Self-hosted noise texture */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay transition-opacity duration-1000 [.alt-dimension_&]:opacity-0"
        style={{
          backgroundImage: "url('/paper-texture.png')",
        }}
      />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,var(--color-accent-muted)_0%,transparent_60%)] opacity-40 [.alt-dimension_&]:opacity-100 transition-opacity duration-1000" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <p className="philosophy-text font-sans text-xs sm:text-sm text-current/55 font-medium tracking-[0.15em] uppercase mb-6 sm:mb-8">
          Moja filozofia
        </p>

        <p className="philosophy-text font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.1]">
          Wierzę w partnerskie relacje
          <br className="hidden md:block" /> i tworzenie rozwiązań szytych na{" "}
          <span className="relative inline-block text-accent whitespace-nowrap">
            miarę.
            <svg
              className="absolute -inset-2 sm:-inset-4 w-[125%] h-[155%] text-accent pointer-events-none -translate-x-2 translate-y-1 opacity-65"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path
                className="philosophy-circle"
                d="M50,8 C82,3 97,38 92,65 C84,95 18,98 8,68 C2,42 22,3 50,12"
              />
            </svg>
          </span>
        </p>
      </div>
    </section>
  );
}
