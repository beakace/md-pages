"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { accentFilter, prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: "Stronę, która działa",
    desc: "Szybka, czytelna, profesjonalna i dopasowana do każdego urządzenia.",
  },
  {
    title: "Jasny przekaz",
    desc: "Strona, która mówi wprost czym się zajmujesz i dla kogo jest.",
  },
  {
    title: "Przemyślaną strukturę",
    desc: "Każdy element ma swoje miejsce, cel i uzasadnienie.",
  },
  {
    title: "Spokój głowy",
    desc: "Wiesz dokładnie co dostajesz, kiedy i za ile.",
  },
];

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const titleChars = gsap.utils.toArray<HTMLElement>(".solution-title-char");
      gsap.fromTo(
        titleChars,
        { opacity: 0, y: 50, rotationX: -90, transformOrigin: "bottom" },
        {
          scrollTrigger: { trigger: ".solution-title", start: "top 80%" },
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "power3.out",
        },
      );

      gsap.from(".solution-list-item", {
        scrollTrigger: { trigger: ".solution-list", start: "top 75%" },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.utils.toArray<SVGPathElement>(".solution-svg-highlight").forEach((path) => {
        const length = path.getTotalLength?.() || 100;
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          scrollTrigger: { trigger: path, start: "top 85%" },
          strokeDashoffset: 0,
          duration: 1.2,
          ease: "power2.inOut",
          delay: 0.4,
        });
      });

      gsap.from(".benefit-card", {
        scrollTrigger: { trigger: ".benefits-grid", start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleText = "Dlatego robię to inaczej";

  return (
    <section ref={sectionRef} className="py-28 sm:py-40 px-6 sm:px-8 relative overflow-hidden bg-washi dark:bg-surface-dark">
      <div className="absolute -left-32 top-10 w-[40rem] h-[40rem] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />

      <img
        src="/svg/4.svg"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute -left-10 lg:left-[5%] top-[15%] w-48 lg:w-72 pointer-events-none select-none opacity-10 rotate-[15deg]"
        style={{ filter: accentFilter }}
      />

      <div className="max-w-[56rem] mx-auto relative z-10">
        <p className="font-handwritten text-accent text-xl md:text-2xl mb-6 -rotate-2">
          Moje zasady
        </p>

        <h2 className="solution-title font-serif italic text-4xl sm:text-5xl md:text-6xl text-ink dark:text-chalk leading-none mb-20 perspective-[800px] flex gap-x-[0.2em] flex-wrap">
          {titleText.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="inline-flex">
              {word.split("").map((char, charIdx) => (
                <span key={`${wordIdx}-${charIdx}`} className="solution-title-char inline-block">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h2>

        <ul className="solution-list space-y-10 sm:space-y-12 text-lg sm:text-xl md:text-2xl font-sans text-graphite/85 dark:text-chalk/75 mb-32 md:mb-40">
          {[
            { text: "Mówię prostym językiem, nie technicznym żargonem", hl: "prostym językiem", path: "M0,15 Q30,5 50,15 T100,10" },
            { text: "Jestem terminowy i mam przejrzyste warunki", hl: "przejrzyste warunki", path: "M0,10 Q35,20 65,10 T100,16" },
            { text: "Dowożę w tygodniach, nie miesiącach", hl: "tygodniach", path: "M0,18 Q40,5 60,15 T100,10" },
            { text: "Nie znikam po publikacji", hl: "Nie znikam", path: "M0,12 Q30,10 50,18 T100,8" },
          ].map((item, i) => {
            const parts = item.text.split(item.hl);
            return (
              <li key={i} className="solution-list-item flex items-start gap-6 group">
                <span className="text-accent/40 font-serif italic text-3xl md:text-4xl mt-[-6px] group-hover:text-accent transition-colors duration-500">
                  ~
                </span>
                <span className="leading-relaxed">
                  {parts[0]}
                  <span className="relative inline-block text-ink dark:text-chalk font-semibold whitespace-nowrap mx-1">
                    <span className="relative z-10 pb-1">{item.hl}</span>
                    <svg
                      className="absolute -bottom-1.5 md:-bottom-2 -left-1 w-[105%] h-[14px] text-accent/30 pointer-events-none z-0"
                      viewBox="0 0 100 24"
                      preserveAspectRatio="none"
                    >
                      <path
                        className="solution-svg-highlight"
                        d={item.path}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  {parts[1]}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="benefits-grid relative">
          <img
            src="/svg/9.svg"
            alt=""
            aria-hidden="true"
            className="absolute -top-24 right-0 lg:-right-20 w-24 lg:w-32 pointer-events-none select-none rotate-[230deg] opacity-20"
            style={{ filter: accentFilter }}
          />

          <p className="font-handwritten text-accent text-2xl md:text-3xl mb-12 -rotate-1 text-center md:text-left">
            Co dokładnie dostajesz?
          </p>

          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-16 lg:gap-y-20 relative z-10">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="benefit-card flex flex-col pt-8 border-t border-graphite/20 dark:border-chalk/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif italic text-xl md:text-2xl text-accent/50 mt-1">
                    0{i + 1}
                  </span>
                  <h4 className="font-serif italic text-2xl md:text-3xl text-ink dark:text-chalk leading-tight">
                    {item.title}
                  </h4>
                </div>
                <p className="font-sans text-base md:text-lg text-graphite/80 dark:text-chalk/70 leading-relaxed pr-2 sm:pr-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
