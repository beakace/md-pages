"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Start() {
  const { ref } = useSectionInView("Start", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[42rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Small intro marker */}
        <p className="text-sm text-muted dark:text-muted-dark tracking-wide mb-6">
          Michał Dziuba — web developer
        </p>

        {/* Main headline - editorial serif */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.15] mb-8">
          Strony internetowe
          <br />
          <span className="italic">po ludzku</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted dark:text-muted-dark leading-relaxed max-w-[32rem] mx-auto mb-12">
          Tworzę szybkie, czytelne strony dla lokalnych firm — bez marketingowej
          nowomowy i zbędnych komplikacji.
        </p>
      </motion.div>

      {/* CTA - minimal, text-based */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Link
          href="#contact"
          className="group inline-flex items-center gap-2 text-[15px] border-b border-accent pb-1 text-[#1a1a1a] dark:text-[#e8e6e3] hover:border-accent/50 transition-colors duration-400"
          onClick={() => {
            setActiveSection("Kontakt");
            setTimeOfLastClick(Date.now());
          }}
        >
          Poproś o wycenę
          <span
            className="inline-block transition-transform duration-400 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
        <a
          href="https://calendly.com/michaldz/30min"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-[15px] text-muted dark:text-muted-dark hover:text-[#1a1a1a] dark:hover:text-[#e8e6e3] transition-colors duration-400"
        >
          Umów rozmowę
          <span
            className="inline-block transition-transform duration-400 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
}
