"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { accentFilter, prefersReducedMotion } from "@/lib/animations";
import LineSeparator from "@/components/landing/LineSeparator";

gsap.registerPlugin(ScrollTrigger);

const forMe = [
  "Usługi (sprzątanie, trenerzy, fizjoterapia, coaching...)",
  "Gabinety i praktyki (lekarze, prawnicy, architekci...)",
  "Sklepy i lokale (restauracje, kawiarnie, butiki...)",
  "Freelancerzy i jednoosobowe działalności",
];

const notForMe = [
  "Korporacje z długimi procesami decyzyjnymi",
  "Fani przestarzałych technologii.",
  "Klienci, dla których liczy się tylko cena",
  "Firmy, które szukają agencji 360°.",
];

export default function AudienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".audience-divider",
        { scaleY: 0 },
        {
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          scaleY: 1,
          duration: 1.5,
          ease: "power3.inOut",
        },
      );

      gsap.utils.toArray<HTMLElement>(".audience-yes-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 85%" },
          x: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });

        const checkMark = item.querySelector(".audience-check");
        if (checkMark) {
          gsap.fromTo(
            checkMark,
            { strokeDasharray: 50, strokeDashoffset: 50 },
            {
              scrollTrigger: { trigger: item, start: "top 85%" },
              strokeDashoffset: 0,
              duration: 0.6,
              delay: 0.2,
              ease: "power2.inOut",
            },
          );
        }
      });

      gsap.utils.toArray<HTMLElement>(".audience-no-item").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 85%" },
          x: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });

        const crossMark1 = item.querySelector(".audience-cross-1");
        const crossMark2 = item.querySelector(".audience-cross-2");
        if (crossMark1 && crossMark2) {
          gsap.fromTo(
            [crossMark1, crossMark2],
            { strokeDasharray: 50, strokeDashoffset: 50 },
            {
              scrollTrigger: { trigger: item, start: "top 85%" },
              strokeDashoffset: 0,
              duration: 0.4,
              stagger: 0.15,
              delay: 0.2,
              ease: "power2.out",
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-36 px-6 sm:px-8 relative bg-washi dark:bg-surface-dark [.alt-dimension_&]:bg-[url('/dimension2/pexels-edward-jenner-4252888.jpg')] [.alt-dimension_&]:bg-cover [.alt-dimension_&]:bg-center [.alt-dimension_&]:bg-no-repeat [.alt-dimension_&]:bg-fixed overflow-hidden">
      {/* Background overlay for alt-dimension - tailored to enhance the vivid red while keeping text readable */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/30 to-black/80 opacity-0 transition-opacity duration-1000 [.alt-dimension_&]:opacity-100 z-0 mix-blend-multiply" />
      <div className="absolute inset-0 pointer-events-none bg-black/40 opacity-0 transition-opacity duration-1000 [.alt-dimension_&]:opacity-100 z-0" />

      {/* Base dimension paper texture */}
      <div
        className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.08] transition-opacity duration-1000 [.alt-dimension_&]:opacity-0"
        style={{
          backgroundImage: "url('/paper-texture.png')",
        }}
      />

      <div className="max-w-[64rem] mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <p className="font-handwritten text-accent [.alt-dimension_&]:text-white text-2xl md:text-3xl rotate-2 [.alt-dimension_&]:font-sans [.alt-dimension_&]:uppercase [.alt-dimension_&]:tracking-[0.2em] [.alt-dimension_&]:text-xs [.alt-dimension_&]:font-bold [.alt-dimension_&]:not-italic [.alt-dimension_&]:transform-none transition-all duration-700">
            Z kim współpracuję?
          </p>
          <img
            src="/svg/8.svg"
            alt=""
            aria-hidden="true"
            className="w-12 md:w-16 mt-2 opacity-40 select-none pointer-events-none drop-shadow-sm transition-opacity duration-700 [.alt-dimension_&]:hidden"
            style={{ filter: accentFilter }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-0 relative">
          <div className="audience-divider hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-graphite/20 dark:via-chalk/15 [.alt-dimension_&]:via-white/30 to-transparent origin-top" />

          <div className="md:pr-16 lg:pr-24 flex flex-col items-center md:items-end text-center md:text-right">
            <h2 className="font-serif italic text-3xl md:text-4xl text-ink dark:text-chalk [.alt-dimension_&]:text-white leading-tight mb-10 transition-colors duration-700">
              Dla kogo jestem<br />najlepszym wyborem
            </h2>
            <ul className="space-y-10 md:space-y-8 w-full max-w-sm">
              {forMe.map((item, i) => (
                <li key={i} className="audience-yes-item flex flex-col md:flex-row items-center md:items-start md:justify-end gap-3 md:gap-5 group">
                  <span className="md:hidden shrink-0 w-8 h-8 rounded-full bg-green-500/10 [.alt-dimension_&]:bg-white/10 flex items-center justify-center transition-colors duration-700">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 [.alt-dimension_&]:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path className="audience-check" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-lg md:text-[17px] font-sans text-graphite/80 dark:text-chalk/70 [.alt-dimension_&]:text-white/80 leading-relaxed font-medium group-hover:text-ink dark:group-hover:text-chalk [.alt-dimension_&]:group-hover:text-white transition-colors duration-700">
                    {item}
                  </span>
                  <span className="hidden md:flex mt-1 shrink-0 w-6 h-6 rounded-full bg-green-500/10 [.alt-dimension_&]:bg-white/10 items-center justify-center transition-colors duration-700">
                    <svg className="w-3.5 h-3.5 text-green-600 dark:text-green-400 [.alt-dimension_&]:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path className="audience-check" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:pl-16 lg:pl-24 flex flex-col items-center md:items-start text-center md:text-left pt-16 md:pt-0 mt-8 md:mt-0 border-t md:border-t-0 border-graphite/10 dark:border-chalk/10 lg:border-none">
            <h2 className="font-serif italic text-3xl md:text-4xl text-ink dark:text-chalk [.alt-dimension_&]:text-white leading-tight mb-10 opacity-60 transition-colors duration-700">
              Dla kogo<br />
              <span className="relative inline-block text-accent [.alt-dimension_&]:text-white opacity-100 transition-colors duration-700">
                nie
                <svg className="absolute -bottom-1 left-0 w-full h-[3px] text-accent/50 [.alt-dimension_&]:text-white/50 transition-colors duration-700" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>{" "}
              jestem
            </h2>
            <ul className="space-y-10 md:space-y-8 w-full max-w-sm">
              {notForMe.map((item, i) => (
                <li key={i} className="audience-no-item flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 group opacity-70 hover:opacity-100 transition-opacity">
                  <span className="mt-0.5 shrink-0 w-8 h-8 md:w-6 md:h-6 rounded-full bg-accent/10 [.alt-dimension_&]:bg-white/10 flex items-center justify-center transition-colors duration-700">
                    <svg className="w-4 h-4 md:w-3.5 md:h-3.5 text-accent [.alt-dimension_&]:text-white transition-colors duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path className="audience-cross-1" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6" />
                      <path className="audience-cross-2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12" />
                    </svg>
                  </span>
                  <span className="text-lg md:text-[17px] font-sans text-graphite/70 dark:text-chalk/55 [.alt-dimension_&]:text-white/70 leading-relaxed font-medium transition-colors duration-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
