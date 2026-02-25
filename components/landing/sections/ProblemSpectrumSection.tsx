"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { accentFilter, prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSpectrumSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [noMotion, setNoMotion] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setNoMotion(true);
      return;
    }

    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      
      mm.add("(min-width: 768px)", () => {
        gsap.set(".spectrum-content", { autoAlpha: 0, scale: 0.95 });
        gsap.set(".pain-line", { scaleX: 0, transformOrigin: "left center" });
        gsap.set(".reveal-text-word", { opacity: 0, y: 30, rotationX: -40 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=250%",
            pin: true,
            scrub: 1.2,
            anticipatePin: 1,
          },
        });

        tl.to(".bg-question", { scale: 1.2, opacity: 0.04, duration: 0.5 }, 0);

        tl.to(".pain-line-0", { scaleX: 1, duration: 0.2 }, 0.05)
          .fromTo(".pain-text-0", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2 }, 0.1)
          .to(".pain-line-1", { scaleX: 1, duration: 0.2 }, 0.15)
          .fromTo(".pain-text-1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2 }, 0.2)
          .to(".pain-line-2", { scaleX: 1, duration: 0.2 }, 0.25)
          .fromTo(".pain-text-2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2 }, 0.3);

        tl.to({}, { duration: 0.1 });

        tl.to(".problem-intro", { opacity: 0.3, duration: 0.3 }, 0.45);

        tl.to(".reveal-text-word", {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power3.out",
        }, 0.5);

        // Give the user much more time to actually read the finished text
        tl.to({}, { duration: 0.7 });

        tl.to(".problem-content", {
          autoAlpha: 0,
          scale: 1.05,
          y: "-15vh",
          filter: "blur(10px)",
          duration: 0.5,
          ease: "power2.inOut",
        }, 2.0); // Pushed back significantly to allow reading

        tl.to(".spectrum-content", {
          autoAlpha: 1,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        }, 2.2); // Also pushed back

        tl.fromTo(".spectrum-line-left",
          { scaleX: 0, transformOrigin: "right center" },
          { scaleX: 1, duration: 0.4, ease: "power4.out" },
          2.4);
        tl.fromTo(".spectrum-line-right",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.4, ease: "power4.out" },
          2.4);
        tl.from(".spectrum-dot", { scale: 0, duration: 0.3, ease: "power3.out" }, 2.5);

        tl.from(".spectrum-icon-0", { y: -50, opacity: 0, rotation: -15, duration: 0.5, ease: "power3.out" }, 2.6)
          .from(".spectrum-text-0", { opacity: 0, y: 10, duration: 0.3 }, 2.7);

        tl.from(".spectrum-icon-2", { y: -50, opacity: 0, rotation: 15, duration: 0.5, ease: "power3.out" }, 2.65)
          .from(".spectrum-text-2", { opacity: 0, y: 10, duration: 0.3 }, 2.75);

        tl.fromTo(".spectrum-icon-1",
          { y: -80, opacity: 0, scale: 0.5 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power3.out" },
          2.8)
          .from(".spectrum-text-1", { opacity: 0, y: 20, duration: 0.4 }, 2.9);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const painPoints = [
    { label: "Agencja?", desc: "Drogo i bardzo długo." },
    { label: "Freelancer z neta?", desc: "Całkowita loteria." },
    { label: "Kreatory / AI?", desc: "Musisz ogarniać sam." },
  ];

  const revealWords = "Szukasz kogoś, kto po prostu zrobi to dobrze. Bez komplikacji. W ustalonym terminie i na przejrzystych warunkach.".split(" ");

  if (noMotion) {
    return (
      <section className="py-28 sm:py-40 px-6 sm:px-8 relative bg-washi dark:bg-surface-dark">
        <div className="max-w-[56rem] mx-auto w-full flex flex-col items-center">
          <SpectrumContent />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative md:min-h-screen py-24 md:py-0 flex flex-col justify-center px-6 sm:px-8 overflow-hidden bg-washi dark:bg-surface-dark"
    >
      <div className="bg-question absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 mix-blend-multiply dark:mix-blend-screen">
        <span className="font-serif italic text-[30vw] md:text-[25rem] leading-none text-ink/[0.02] dark:text-chalk/[0.02]">
          ?
        </span>
      </div>

      <div className="max-w-[56rem] mx-auto w-full relative z-10 flex flex-col items-center">
        <div className="problem-content w-full md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mb-32 md:mb-0">
          <div className="problem-intro text-center mb-16 md:mb-24">
            <h2 className="font-sans text-2xl sm:text-3xl md:text-5xl uppercase tracking-[0.1em] font-bold text-ink dark:text-chalk mb-4">
              Potrzebujesz nowej strony.
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-graphite/60 dark:text-chalk/50">
              Ale wybór wykonawcy jest przytłaczający.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20 md:mb-32">
            {painPoints.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className={`pain-line pain-line-${i} absolute top-0 left-1/2 -ml-[2px] w-[3px] h-8 bg-accent/40 rounded-full`} style={{ transformOrigin: "top center" }} />
                <div className={`pain-text-${i} mt-12`}>
                  <p className="font-sans text-lg md:text-xl font-bold text-ink dark:text-chalk mb-2">
                    {item.label}
                  </p>
                  <p className="font-serif italic text-graphite/80 dark:text-chalk/60 text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center perspective-[1000px]">
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.3] text-ink dark:text-chalk flex flex-wrap justify-center gap-[0.25em]">
              {revealWords.map((word, i) => (
                <span key={i} className="reveal-text-word inline-block origin-bottom">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="spectrum-content w-full md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col items-center justify-center pt-16 md:pt-0">
          <SpectrumContent />
        </div>
      </div>
    </section>
  );
}

function SpectrumContent() {
  return (
    <>
      <p className="font-sans text-sm md:text-base uppercase tracking-[0.2em] text-accent font-bold mb-16 md:mb-24">
        Idealne rozwiązanie
      </p>

      <div className="grid grid-cols-3 gap-4 sm:gap-10 lg:gap-20 text-center w-full max-w-4xl mx-auto items-end">
        <div className="flex flex-col items-center">
          <img
            src="/svg/freelancer-icon.svg"
            alt=""
            aria-hidden="true"
            className="spectrum-icon-0 w-12 sm:w-16 lg:w-20 mb-6 opacity-30 -rotate-12"
            style={{ filter: accentFilter }}
          />
          <div className="spectrum-text-0">
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.12em] text-graphite/40 dark:text-chalk/30 mb-2 line-through font-bold">
              Freelancer z neta
            </p>
            <p className="font-serif italic text-sm sm:text-base text-graphite/50 dark:text-chalk/40">
              Loteria
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center relative z-10">
          <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full scale-150 -z-10" />
          <img
            src="/svg/winner-icon.svg"
            alt=""
            aria-hidden="true"
            className="spectrum-icon-1 w-20 sm:w-28 lg:w-36 mb-6 drop-shadow-xl"
            style={{ filter: accentFilter }}
          />
          <div className="spectrum-text-1">
            <p className="font-sans text-lg sm:text-xl lg:text-2xl uppercase tracking-[0.1em] text-ink dark:text-chalk font-bold mb-2">
              Strony po ludzku
            </p>
            <p className="font-serif italic text-lg lg:text-xl text-accent font-medium">
              Złoty środek
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/svg/agency-icon.svg"
            alt=""
            aria-hidden="true"
            className="spectrum-icon-2 w-12 sm:w-16 lg:w-20 mb-6 opacity-30 rotate-12"
            style={{ filter: accentFilter }}
          />
          <div className="spectrum-text-2">
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.12em] text-graphite/40 dark:text-chalk/30 mb-2 line-through font-bold">
              Agencja
            </p>
            <p className="font-serif italic text-sm sm:text-base text-graphite/50 dark:text-chalk/40">
              Biurokracja i koszty
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-16 md:mt-24 w-full max-w-4xl mx-auto relative h-12">
        <span className="w-0.5 h-6 bg-graphite/20 dark:bg-chalk/20 shrink-0 rounded-full" />
        <span className="spectrum-line-left flex-1 h-[2px] bg-gradient-to-r from-graphite/10 dark:from-chalk/10 to-accent/50" />
        <div className="spectrum-dot w-6 h-6 border-[3px] border-accent bg-washi dark:bg-surface-dark rounded-full mx-2 shadow-[0_0_15px_rgba(196,90,59,0.3)] z-10" />
        <span className="spectrum-line-right flex-1 h-[2px] bg-gradient-to-l from-graphite/10 dark:from-chalk/10 to-accent/50" />
        <span className="w-0.5 h-6 bg-graphite/20 dark:bg-chalk/20 shrink-0 rounded-full" />
      </div>
    </>
  );
}
