"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { accentFilter, prefersReducedMotion } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

const intro = "Robię strony dla lokalnych firm.";

const paragraphs = [
  {
    text: "Przez lata prowadziłem projekty marketingowe. Widziałem, jak agencje robią z prostych rzeczy wielomiesięczne procesy. Teraz robię to sam, szybciej i prościej.",
    highlight: false,
  },
  {
    text: "Od kilku lat projektuję i buduję strony jako niezależny web designer i programista. Jestem człowiekiem, który mówi wprost, dotrzymuje terminów i jest łatwy w kontakcie.",
    highlight: false,
  },
  {
    text: "Szczęśliwy mąż, ojciec dwóch pięciolatków i gitarzysta po godzinach.",
    highlight: true,
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.from(".about-image-wrapper", {
        scrollTrigger: { trigger: ".about-container", start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.from(".about-text-element", {
        scrollTrigger: { trigger: ".about-container", start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.fromTo(
        ".about-signature",
        { opacity: 0, x: -20, rotationZ: -5 },
        {
          scrollTrigger: { trigger: ".about-signature", start: "top 90%" },
          opacity: 1,
          x: 0,
          rotationZ: 0,
          duration: 0.8,
          ease: "power3.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 sm:py-40 px-6 sm:px-8 relative bg-washi dark:bg-surface-dark overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply dark:mix-blend-screen dark:opacity-[0.08]"
        style={{
          backgroundImage: "url('/paper-texture.png')",
        }}
      />

      <div className="about-container max-w-[64rem] mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          <div className="flex justify-center relative">
            <img
              src="/svg/6.svg"
              alt=""
              aria-hidden="true"
              className="absolute -left-10 -bottom-10 w-48 opacity-20 pointer-events-none select-none -rotate-12"
              style={{ filter: accentFilter }}
            />

            <div className="about-image-wrapper relative w-full max-w-[320px] aspect-[4/4.5]">
              <Image
                src="/md-polaroid.png"
                alt="Michał Dziuba"
                fill
                quality={95}
                className="object-contain"
                sizes="(max-width: 1024px) 320px, 400px"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <div className="about-text-element flex flex-col items-center lg:items-start mb-10">
              <img
                src="/svg/5.svg"
                alt=""
                aria-hidden="true"
                className="w-16 md:w-24 mb-6 opacity-30 select-none pointer-events-none"
                style={{ filter: accentFilter }}
              />
              <p className="font-handwritten text-accent text-xl md:text-2xl mb-2 -rotate-2">
                Słowo na koniec
              </p>
              <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-ink dark:text-chalk leading-tight">
                O mnie
              </h2>
            </div>

            <p className="about-text-element font-serif italic text-2xl sm:text-3xl lg:text-4xl leading-[1.3] text-ink dark:text-chalk mb-12 relative">
              <span className="absolute -left-6 -top-4 text-6xl text-accent/20 font-serif">&ldquo;</span>
              {intro}
            </p>

            <div className="space-y-6 md:space-y-8 text-[17px] md:text-[19px] leading-relaxed max-w-[38rem] mx-auto lg:mx-0">
              {paragraphs.map((item, i) => (
                <p
                  key={i}
                  className={`about-text-element ${
                    item.highlight
                      ? "text-ink dark:text-chalk font-medium"
                      : "text-graphite/70 dark:text-chalk/60"
                  }`}
                >
                  {item.highlight && <span className="text-accent mr-2">✦</span>}
                  {item.text}
                </p>
              ))}
            </div>

            <div className="about-signature mt-16 pt-10 border-t border-transparent md:border-graphite/10 md:dark:border-chalk/10 inline-block w-full lg:w-auto text-center lg:text-left">
              <p className="font-handwritten text-4xl sm:text-5xl text-accent -rotate-3 hover:rotate-0 transition-transform duration-500 cursor-default">
                Michał Dziuba
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to reveal footer, matching the section's background texture */}
      <div className="h-[10vh] sm:h-[15vh] lg:h-[20vh]" />
    </section>
  );
}
