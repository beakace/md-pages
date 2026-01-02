"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsArrowRight } from "react-icons/bs";
export default function Contact() {
  const { ref } = useSectionInView("Kontakt");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="relative mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* background blob (to make Contact pop) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 -bottom-28 left-1/2 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-[#dbd7fb] blur-[10rem] sm:h-[32rem] sm:w-[32rem] dark:bg-[#676394]"
      />
      <SectionHeading>Kontakt</SectionHeading>

      <p className="text-gray-700 -mt-6 leading-8 dark:text-white/80">
        Skontaktuj się ze mną, tak jak Ci wygodnie - porozmawiajmy o Twoich potrzebach i ustalmy wspólnie najlepsze rozwiązanie. <br /> Możesz też napisać na{" "}
        <a className="underline" href="mailto:michaldziuba26@gmail.com">
          michaldziuba26@gmail.com
        </a>{" "}
        lub umówić spotkanie Google Meet przez{" "}
        <a
          className="underline"
          href="https://calendly.com/michaldz/30min"
          target="_blank"
          rel="noreferrer"
        >
          Calendly
        </a>
        .
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-2">
        <a
          href="mailto:michaldziuba26@gmail.com"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Napisz maila
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>
        <a
          href="https://calendly.com/michaldz/30min"
          target="_blank"
          rel="noreferrer"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          Umów rozmowę 30 min
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </a>
      </div>
    </motion.section>
  );
}
