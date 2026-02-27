"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/animations";

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
        gsap.set(".pain-line", { scaleX: 0, transformOrigin: "left center" });
        gsap.set(".reveal-text-word", { opacity: 0, y: 30, rotationX: -40 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=180%",
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
        tl.to({}, { duration: 1.2 });
      });

      // Mobile: simple fade-up reveals (no pinning), consistent with other sections
      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(".problem-intro", 
          { y: 30, opacity: 0 },
          {
            scrollTrigger: { trigger: ".problem-intro", start: "top 85%" },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          }
        );

        [0, 1, 2].forEach((i) => {
          gsap.fromTo(`.pain-line-${i}`, 
            { scaleX: 0 },
            {
              scrollTrigger: { trigger: `.pain-line-${i}`, start: "top 90%" },
              scaleX: 1,
              transformOrigin: "top center",
              duration: 0.4,
              ease: "power2.out",
            }
          );
          gsap.fromTo(`.pain-text-${i}`, 
            { y: 20, opacity: 0 },
            {
              scrollTrigger: { trigger: `.pain-text-${i}`, start: "top 90%" },
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            }
          );
        });

        gsap.fromTo(".reveal-text-word", 
          { y: 20, opacity: 0 },
          {
            scrollTrigger: { trigger: ".reveal-text-word", start: "top 90%" },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.04,
            ease: "power2.out",
          }
        );
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
        <div className="max-w-[56rem] mx-auto w-full text-center">
          <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-ink dark:text-chalk leading-tight mb-8">
            Potrzebujesz nowej strony.
          </h2>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink dark:text-chalk leading-[1.3]">
            {revealWords.join(" ")}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-24 pb-16 md:pt-28 md:pb-0 flex flex-col justify-center px-6 sm:px-8 overflow-hidden bg-washi dark:bg-surface-dark"
    >
      <div className="bg-question absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 mix-blend-multiply dark:mix-blend-screen">
        <span className="font-serif italic text-[30vw] md:text-[25rem] leading-none text-ink/[0.02] dark:text-chalk/[0.02]">
          ?
        </span>
      </div>

      <div className="max-w-[56rem] mx-auto w-full relative z-10 flex flex-col items-center flex-1 justify-center">
        <div className="problem-content w-full md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mb-32 md:mb-0">
          <div className="problem-intro text-center mb-10 md:mb-16 flex flex-col items-center">
            <p className="font-handwritten text-accent text-xl md:text-2xl mb-4 -rotate-2">
              Szukasz wykonawcy
            </p>
            <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-ink dark:text-chalk leading-tight mb-4">
              Potrzebujesz nowej strony.
            </h2>
            <p className="font-sans text-lg sm:text-xl text-graphite/70 dark:text-chalk/60 max-w-2xl mx-auto">
              Ale wybór wykonawcy jest przytłaczający.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-14 md:mb-20">
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
            <p className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[2.75rem] leading-[1.3] text-ink dark:text-chalk flex flex-wrap justify-center gap-[0.25em]">
              {revealWords.map((word, i) => (
                <span key={i} className="reveal-text-word inline-block origin-bottom">
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
