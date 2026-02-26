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

      const strike = sectionRef.current?.querySelector(".philosophy-strike") as SVGPathElement;
      if (strike) {
        const length = strike.getTotalLength?.() || 300;
        gsap.set(strike, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(strike, {
          scrollTrigger: { trigger: strike, start: "top 75%" },
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 1.2,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 sm:py-36 md:py-44 px-6 sm:px-8 w-full overflow-hidden bg-ink dark:bg-washi text-washi dark:text-ink"
    >
      {/* Self-hosted noise texture */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "url('/paper-texture.png')",
        }}
      />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,rgba(196,90,59,0.06)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="philosophy-text flex items-center gap-3 mb-5 sm:mb-6 opacity-60">
          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <p className="font-sans text-xs sm:text-sm text-current/80 font-medium tracking-[0.15em] uppercase">
            Podejście, którego unikam
          </p>
          <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        
        <div className="relative inline-block mb-16 sm:mb-20">
          <blockquote className="philosophy-text font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-current/80 relative z-10">
            &ldquo;Zbudujemy stronę, wyślemy fakturę
            <br className="hidden sm:block" /> i znikniemy.&rdquo;
          </blockquote>
          
          <svg
            className="absolute top-1/2 left-[-5%] w-[110%] h-[120%] -translate-y-1/2 text-accent/50 pointer-events-none z-20"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path
              className="philosophy-strike"
              d="M0,80 Q50,50 100,20"
            />
          </svg>
        </div>

        <div className="philosophy-text w-full max-w-[12rem] h-px bg-current/10 my-4 relative">
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-accent/50"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
          >
            <path d="M50 20 L50 80 M20 50 L80 50" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        <p className="philosophy-text font-sans text-xs sm:text-sm text-current/55 font-medium tracking-[0.15em] uppercase mt-16 sm:mt-20 mb-6 sm:mb-8">
          Moja filozofia
        </p>

        <p className="philosophy-text font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.1]">
          Wierzę w partnerskie relacje
          <br className="hidden md:block" /> i tworzenie rozwiązań szytych na{" "}
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
