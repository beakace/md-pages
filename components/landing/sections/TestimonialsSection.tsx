"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { accentFilter, prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const topTestimonials = [
  {
    quote: "Widać, że tworzenie stron to jego pasja - efekty mówią same za siebie.",
    author: "Zespół CzystoTu",
    role: "Firma sprzątająca, Wrocław",
  },
  {
    quote: "Michał łączy wdrażanie i projektowanie stron na tyle dobrze, że zaoszczędzisz podwójny budżet bez utraty jakości",
    author: "Łukasz",
    role: "Przedsiębiorca, Wrocław",
  },
];

const featuredTestimonial = {
  quote: "Zdecydowanie polecam Michała! Świetna współpraca od początku do końca. Moja strona internetowa została wykonana profesjonalnie, elegancko i estetycznie - dokładnie tak jak ją sobie wyobrażałam :) Kontakt z Michałem był sprawny i bezproblemowy. Jest osobą pełną profesjonalizmu, zaangażowania - no po prostu świetny specjalista w swoim fachu!!!",
  author: "Ola",
  role: "Przedsiębiorca, Wrocław",
};

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      /* ── Header ── */
      gsap.from(".testimonials-title", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".testimonials-rule", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
      });

      /* ── Parallax background marks ── */
      gsap.to(".bg-quote-mark", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: (_i: number) => -100 * (_i + 1),
        ease: "none",
      });

      /* ── Top cards ── */
      gsap.utils
        .toArray<HTMLElement>(".testimonial-card")
        .forEach((card, i) => {
          gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 88%" },
            y: 60,
            opacity: 0,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
          });
        });

      /* ── Featured quote ── */
      const featured = document.querySelector(".testimonial-featured");
      if (featured) {
        gsap.from(featured, {
          scrollTrigger: { trigger: featured, start: "top 85%" },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        });

        const featuredLine = featured.querySelector(".testimonial-line");
        if (featuredLine) {
          gsap.fromTo(
            featuredLine,
            { scaleX: 0 },
            {
              scrollTrigger: { trigger: featured, start: "top 85%" },
              scaleX: 1,
              duration: 1,
              delay: 0.4,
              ease: "power3.out",
            },
          );
        }
      }

      /* ── Card accent lines ── */
      gsap.utils
        .toArray<HTMLElement>(".testimonial-card .testimonial-line")
        .forEach((line, i) => {
          gsap.fromTo(
            line,
            { scaleX: 0 },
            {
              scrollTrigger: {
                trigger: line.closest(".testimonial-card")!,
                start: "top 88%",
              },
              scaleX: 1,
              duration: 0.8,
              delay: 0.4 + i * 0.2,
              ease: "power3.out",
            },
          );
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-36 pb-28 sm:pt-48 sm:pb-40 relative px-6 sm:px-8 overflow-hidden bg-washi dark:bg-surface-dark [.alt-dimension_&]:bg-[url('/dimension2/pexels-edward-jenner-4252898.jpg')] [.alt-dimension_&]:bg-cover [.alt-dimension_&]:bg-center [.alt-dimension_&]:bg-no-repeat [.alt-dimension_&]:bg-fixed"
    >
      {/* Background overlay for alt-dimension */}
      <div className="absolute inset-0 pointer-events-none bg-black/60 opacity-0 transition-opacity duration-1000 [.alt-dimension_&]:opacity-100 z-0" />
      {/* ── Decorative background SVGs ── */}
      <img
        src="/svg/2.svg"
        alt=""
        aria-hidden="true"
        className="bg-quote-mark absolute left-[-5%] top-[10%] w-[30vh] opacity-[0.035] pointer-events-none select-none rotate-12 [.alt-dimension_&]:hidden"
        style={{ filter: accentFilter }}
      />
      <img
        src="/svg/3.svg"
        alt=""
        aria-hidden="true"
        className="bg-quote-mark absolute right-[-5%] top-[60%] w-[40vh] opacity-[0.035] pointer-events-none select-none -rotate-12 [.alt-dimension_&]:hidden"
        style={{ filter: accentFilter }}
      />

      {/* ── Section header with horizontal rule ── */}
      <div className="px-6 sm:px-8 max-w-[64rem] mx-auto mb-20 sm:mb-28 relative z-10">
        <p className="font-handwritten text-accent [.alt-dimension_&]:text-white text-xl md:text-2xl mb-4 -rotate-2 [.alt-dimension_&]:font-sans [.alt-dimension_&]:uppercase [.alt-dimension_&]:tracking-[0.2em] [.alt-dimension_&]:text-xs [.alt-dimension_&]:font-bold [.alt-dimension_&]:not-italic [.alt-dimension_&]:transform-none transition-all duration-700">
          Zaufali mi
        </p>
        <div className="flex items-end gap-8 sm:gap-12">
          <h2 className="testimonials-title font-serif italic text-4xl md:text-6xl text-ink dark:text-chalk [.alt-dimension_&]:text-white leading-none shrink-0 transition-colors duration-700">
            Opinie
          </h2>
          <div className="testimonials-rule h-[1px] bg-ink/10 dark:bg-chalk/10 [.alt-dimension_&]:bg-white/20 flex-1 mb-2 transition-colors duration-700" />
        </div>
      </div>

      <div className="relative z-10 px-6 sm:px-8 max-w-[64rem] mx-auto">
        {/* ── Top row — two cards side by side ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20 sm:mb-28">
          {topTestimonials.map((testimonial, i) => (
            <blockquote
              key={i}
              className="testimonial-card flex flex-col h-full group relative border border-ink/[0.06] dark:border-chalk/[0.06] [.alt-dimension_&]:border-white/10 rounded-sm p-8 sm:p-10 transition-colors duration-500 hover:border-accent/20 dark:hover:border-accent/20 [.alt-dimension_&]:hover:border-white/40 [.alt-dimension_&]:backdrop-blur-sm"
            >
              {/* Accent corner */}
              <span className="absolute top-0 left-0 w-8 h-[2px] bg-accent/40 [.alt-dimension_&]:bg-white/40 rounded-full transition-colors duration-700" />
              <span className="absolute top-0 left-0 w-[2px] h-8 bg-accent/40 [.alt-dimension_&]:bg-white/40 rounded-full transition-colors duration-700" />

              {/* Quote mark */}
              <span className="block font-serif text-accent/15 [.alt-dimension_&]:text-white/20 text-6xl leading-none mb-4 select-none pointer-events-none -mt-2 transition-colors duration-700">
                &ldquo;
              </span>

              <p className="font-serif text-lg sm:text-xl md:text-[1.375rem] italic leading-[1.55] text-ink dark:text-chalk [.alt-dimension_&]:text-white mb-8 transition-colors duration-700">
                {testimonial.quote}
              </p>

              <footer className="flex items-center gap-4 mt-auto">
                <div
                  className="testimonial-line w-10 h-[1.5px] bg-accent/50 [.alt-dimension_&]:bg-white/50 transition-colors duration-700"
                  style={{ transformOrigin: "left center" }}
                />
                <div>
                  <p className="font-sans font-semibold text-sm tracking-wide uppercase text-ink dark:text-chalk">
                    {testimonial.author}
                  </p>
                  <p className="font-serif italic text-sm text-graphite/50 dark:text-chalk/40 mt-0.5">
                    {testimonial.role}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* ── Thin divider ── */}
        <div className="flex items-center gap-6 mb-20 sm:mb-28 max-w-[48rem] mx-auto">
          <div className="flex-1 h-[1px] bg-ink/[0.06] dark:bg-chalk/[0.06]" />
          <span className="font-serif text-3xl text-accent/20 select-none leading-none">&ldquo;</span>
          <div className="flex-1 h-[1px] bg-ink/[0.06] dark:bg-chalk/[0.06]" />
        </div>

        {/* ── Featured quote — full width, editorial style ── */}
        <blockquote className="testimonial-featured relative max-w-[48rem] mx-auto">
          <p className="font-serif text-2xl sm:text-3xl md:text-[2.25rem] italic leading-[1.4] text-ink dark:text-chalk [.alt-dimension_&]:text-white text-center transition-colors duration-700">
            &bdquo;{featuredTestimonial.quote}&rdquo;
          </p>

          <footer className="mt-10 sm:mt-14 flex flex-col items-center gap-4">
            <div
              className="testimonial-line w-16 h-[1.5px] bg-accent/50 [.alt-dimension_&]:bg-white/50 transition-colors duration-700"
              style={{ transformOrigin: "center" }}
            />
            <div className="text-center">
              <p className="font-sans font-semibold text-sm tracking-wide uppercase text-ink dark:text-chalk [.alt-dimension_&]:text-white transition-colors duration-700">
                {featuredTestimonial.author}
              </p>
              <p className="font-serif italic text-sm text-graphite/50 dark:text-chalk/40 [.alt-dimension_&]:text-white/70 mt-1 transition-colors duration-700">
                {featuredTestimonial.role}
              </p>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
