"use client";

import { motion } from "framer-motion";
import HandDrawnUnderline from "../HandDrawnUnderline";
import { accentFilter } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 sm:px-8 max-w-[56rem] mx-auto relative">
      {/* Doodle - stars */}
      <motion.img
        src="/svg/3.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-4 md:-right-16 md:top-1/4 top-[17%] w-32 sm:w-40 pointer-events-none select-none block opacity-25"
        style={{ filter: accentFilter }}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          ease: [0.4, 0, 0.2, 1],
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.15] mb-8">
          Strony internetowe
          <br />
          <span className="relative inline-block italic">
            po ludzku
            <HandDrawnUnderline />
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted dark:text-muted-dark max-w-[34rem] leading-relaxed mb-10">
          Bez agencyjnych sztuczek. Bez przypadkowych szablonów AI.
          <br />
          Profesjonalnie, skutecznie i w rozsądnej cenie.
        </p>

        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          }}
          className="group inline-flex items-center gap-3 text-sm border-b border-accent pb-1 hover:border-accent/50 transition-colors duration-400"
        >
          Porozmawiajmy
          <span className="transition-transform duration-400 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
}
