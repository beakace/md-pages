"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { accentFilter, prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Widać, że tworzenie stron to jego pasja - efekty mówią same za siebie.",
    author: "Zespół CzystoTu",
    role: "Firma sprzątająca, Wrocław",
    align: "left" as const,
  },
  {
    quote: "Michał łączy wdrażanie i projektowanie stron na tyle dobrze, że zaoszczędzisz podwójny budżet bez utraty jakości",
    author: "Łukasz",
    role: "Przedsiębiorca, Wrocław",
    align: "right" as const,
  },
  {
    quote: "Szybko, sprawnie i bez zbędnego komplikowania. Polecam każdemu, kto ceni swój czas.",
    author: "Sara",
    role: "Przedsiębiorca, Wrocław",
    align: "left" as const,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".testimonials-title", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

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

      gsap.utils.toArray<HTMLElement>(".testimonial-block").forEach((block) => {
        gsap.from(block, {
          scrollTrigger: { trigger: block, start: "top 85%" },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });

        const line = block.querySelector(".testimonial-line");
        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scrollTrigger: { trigger: block, start: "top 85%" },
              scaleX: 1,
              duration: 0.8,
              delay: 0.3,
              ease: "power3.out",
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-36 pb-24 sm:pt-48 sm:pb-36 relative overflow-hidden bg-washi dark:bg-surface-dark">
      <img
        src="/svg/2.svg"
        alt=""
        aria-hidden="true"
        className="bg-quote-mark absolute left-[-5%] top-[10%] w-[30vh] opacity-5 pointer-events-none select-none rotate-12"
        style={{ filter: accentFilter }}
      />
      <img
        src="/svg/3.svg"
        alt=""
        aria-hidden="true"
        className="bg-quote-mark absolute right-[-5%] top-[60%] w-[40vh] opacity-5 pointer-events-none select-none -rotate-12"
        style={{ filter: accentFilter }}
      />

      <div className="px-6 sm:px-8 max-w-[56rem] mx-auto mb-20 sm:mb-32 flex justify-between items-end relative z-10">
        <div>
          <p className="font-handwritten text-accent text-xl md:text-2xl mb-4 -rotate-2">
            Zaufali mi
          </p>
          <h2 className="testimonials-title font-serif italic text-4xl md:text-6xl text-ink dark:text-chalk leading-none">
            Opinie
          </h2>
        </div>
      </div>

      <div className="space-y-32 sm:space-y-48 relative z-10">
        {testimonials.map((testimonial, i) => (
          <blockquote
            key={i}
            className={`testimonial-block px-6 sm:px-8 max-w-[56rem] relative ${
              testimonial.align === "right"
                ? "ml-auto mr-6 sm:mr-8 md:mr-[10%] text-right"
                : "ml-6 sm:ml-8 md:ml-[10%]"
            }`}
          >
            <span
              className={`absolute top-[-2rem] ${testimonial.align === "right" ? "right-6 sm:right-8 text-right" : "left-6 sm:left-8"} font-serif text-8xl md:text-9xl text-accent/10 leading-none pointer-events-none select-none`}
            >
              &ldquo;
            </span>

            <p className="font-serif text-3xl sm:text-4xl md:text-5xl italic leading-[1.3] mb-10 sm:mb-12 text-ink dark:text-chalk">
              &bdquo;{testimonial.quote}&rdquo;
            </p>

            <footer
              className={`flex items-center gap-6 ${
                testimonial.align === "right" ? "justify-end" : ""
              }`}
            >
              <div
                className="testimonial-line w-16 sm:w-24 h-[2px] bg-accent/60"
                style={testimonial.align === "right" ? { transformOrigin: "right center" } : { transformOrigin: "left center" }}
              />
              <div className="text-left">
                <p className="font-sans font-bold text-lg md:text-xl text-ink dark:text-chalk mb-1">{testimonial.author}</p>
                <p className="font-serif italic text-base md:text-lg text-graphite/60 dark:text-chalk/50">
                  {testimonial.role}
                </p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
