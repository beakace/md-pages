"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Rozmowa",
    desc: "Poznaję Twoją firmę i potrzeby. Ty poznajesz mnie. Sprawdzamy, czy jest sens iść dalej.",
    note: "15–30 min, bez zobowiązań",
    noteRot: "-rotate-[5deg]",
    doodle: "M15,85 Q25,50 50,45 T85,15",
  },
  {
    num: "02",
    title: "Propozycja",
    desc: "Dostajesz konkretną ofertę: co zrobię, kiedy, za ile. Bez ukrytych kosztów i żargonu.",
    note: "Jasne warunki",
    noteRot: "rotate-[3deg]",
    doodle: "M10,50 Q35,15 50,50 T90,50",
  },
  {
    num: "03",
    title: "Realizacja",
    desc: "Strona powstaje w 2–3 tygodnie. Widzisz postępy, zgłaszasz uwagi na bieżąco.",
    note: "Szybkie iteracje",
    noteRot: "-rotate-[3deg]",
    doodle: "M10,80 L30,50 L60,65 L90,20",
  },
  {
    num: "04",
    title: "Start",
    desc: "Publikuję stronę i pokazuję, jak z niej korzystać. Po starcie nie znikam — służę wsparciem i radą.",
    note: "Ciągła opieka",
    noteRot: "rotate-[2deg]",
    doodle: "M10,60 L40,80 L90,15",
  },
];

export default function OpusProcessSection() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".opus-process-step").forEach((step) => {
        gsap.from(step.querySelectorAll(".opus-step-text"), {
          scrollTrigger: { trigger: step, start: "top 82%" },
          y: 25,
          opacity: 0,
          duration: 1,
          stagger: 0.08,
          ease: "power2.out",
        });

        const doodlePath = step.querySelector(".opus-doodle-path");
        if (doodlePath) {
          gsap.fromTo(
            doodlePath,
            { strokeDashoffset: 250, strokeDasharray: 250 },
            {
              scrollTrigger: { trigger: step, start: "top 75%" },
              strokeDashoffset: 0,
              duration: 1.8,
              ease: "power2.inOut",
              delay: 0.2,
            },
          );
        }

        const note = step.querySelector(".opus-step-note");
        if (note) {
          gsap.from(note, {
            scrollTrigger: { trigger: step, start: "top 65%" },
            opacity: 0,
            scale: 0.85,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.5,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-28 md:py-36 px-6 md:px-16 lg:px-24 bg-washi dark:bg-surface-dark" id="proces">
      <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
        <p className="font-handwritten text-accent text-xl md:text-2xl mb-3 rotate-1">
          Prosty, przejrzysty proces
        </p>
        <h2 className="font-serif italic text-3xl md:text-5xl text-ink dark:text-chalk leading-tight">
          Jak wygląda współpraca?
        </h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-32 relative">
        {/* The connecting line is now centered on mobile, and on the left for desktop */}
        <div className="absolute left-1/2 md:left-[5.5rem] -translate-x-1/2 md:translate-x-0 top-0 bottom-0 w-px bg-graphite/10 dark:bg-chalk/10 -z-10" />

        {steps.map((step, idx) => (
          <div
            key={idx}
            className="opus-process-step flex flex-col md:flex-row gap-8 md:gap-14 items-center md:items-start relative"
          >
            <div className="w-full max-w-[16rem] h-40 md:w-44 md:h-28 shrink-0 relative flex items-center justify-center bg-washi dark:bg-surface-dark organic-border border border-graphite/10 dark:border-chalk/10 shadow-sm dark:shadow-none z-10 transition-transform hover:-translate-y-1 duration-500">
              <span className="absolute top-3 md:top-2 left-4 md:left-2.5 font-mono text-xs md:text-[10px] text-graphite/50 dark:text-chalk/40 opus-step-text">
                {step.num}
              </span>
              <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-1/2 md:h-1/2 text-accent">
                <path
                  className="opus-doodle-path"
                  d={step.doodle}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex-1 pt-2 md:pt-1 relative text-center md:text-left flex flex-col items-center md:items-start px-2 md:px-0">
              <h3 className="opus-step-text font-serif text-3xl md:text-3xl text-ink dark:text-chalk mb-4 md:mb-3">
                {step.title}
              </h3>
              <p className="opus-step-text font-sans text-lg md:text-lg text-graphite/70 dark:text-chalk/60 leading-relaxed max-w-sm md:max-w-lg">
                {step.desc}
              </p>

              <div
                className={`opus-step-note absolute md:-right-20 top-0 md:top-0 -top-8 font-handwritten text-xl text-accent/80 ${step.noteRot} hidden sm:block`}
              >
                {step.note}
                <svg
                  className="w-full h-2 text-accent/30 absolute -bottom-1 left-0"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q25,2 50,6 T100,4" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
