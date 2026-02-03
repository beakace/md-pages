"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Kontakt");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true }}
    >
      <SectionHeading>Kontakt</SectionHeading>

      <p className="text-muted dark:text-muted-dark leading-relaxed mb-10">
        Porozmawiajmy o Twoich potrzebach i ustalmy wspólnie najlepsze
        rozwiązanie.
      </p>

      {/* Contact options - minimal text links */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
        <a
          href="mailto:michaldziuba26@gmail.com"
          className="group inline-flex items-center gap-2 text-[15px] border-b border-accent pb-1 text-[#1a1a1a] dark:text-[#e8e6e3] hover:border-accent/50 transition-colors duration-400"
        >
          Napisz maila
          <span
            className="inline-block transition-transform duration-400 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </a>
        <a
          href="https://calendly.com/michaldz/30min"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-[15px] text-muted dark:text-muted-dark hover:text-[#1a1a1a] dark:hover:text-[#e8e6e3] transition-colors duration-400"
        >
          Umów spotkanie
          <span
            className="inline-block transition-transform duration-400 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </a>
      </div>

      {/* Email address displayed subtly */}
      <p className="mt-10 text-sm text-muted dark:text-muted-dark">
        <a
          href="mailto:michaldziuba26@gmail.com"
          className="hover:text-[#1a1a1a] dark:hover:text-[#e8e6e3] transition-colors duration-400"
        >
          michaldziuba26@gmail.com
        </a>
      </p>
    </motion.section>
  );
}
