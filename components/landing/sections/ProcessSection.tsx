"use client";

import { motion } from "framer-motion";
import { accentFilter } from "@/lib/animations";

const steps = [
  {
    step: "01",
    title: "Rozmowa",
    desc: "Poznaję Twoją firmę i potrzeby. Ty poznajesz mnie. Sprawdzamy, czy jest sens iść dalej.",
  },
  {
    step: "02",
    title: "Propozycja",
    desc: "Dostajesz konkretną ofertę: co zrobię, kiedy, za ile. Bez ukrytych kosztów.",
  },
  {
    step: "03",
    title: "Realizacja",
    desc: "Strona powstaje w 2-3 tygodnie. Widzisz postępy, zgłaszasz uwagi na bieżąco.",
  },
  {
    step: "04",
    title: "Start",
    desc: "Publikuję stronę i pokazuję, jak z niej korzystać. Po starcie jestem dostępny.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 relative">
      {/* Doodle - flourish */}
      <motion.img
        src="/svg/6.svg"
        alt=""
        aria-hidden="true"
        className="absolute right-[15%] top-20 w-56 pointer-events-none select-none hidden lg:block opacity-20"
        style={{ filter: accentFilter }}
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
      <div className="max-w-[64rem] mx-auto">
        <motion.h2
          className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-14 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Jak wygląda współpraca ze mną?
        </motion.h2>

        <div className="space-y-16 sm:space-y-24">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              className="relative grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-12 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * i, duration: 0.8 }}
            >
              {/* Large background number */}
              <div className="absolute -left-4 sm:left-0 top-0 pointer-events-none select-none opacity-[0.03]">
                <span className="font-serif text-[8rem] sm:text-[12rem] leading-none">
                  {item.step}
                </span>
              </div>

              {/* Step number + title */}
              <div className="relative z-10">
                <span className="text-accent text-sm tracking-wide block mb-2">
                  Krok {item.step}
                </span>
                <h3 className="font-serif text-lg sm:text-xl tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="relative z-10 text-[15px] sm:text-base text-muted dark:text-muted-dark leading-relaxed sm:pt-8">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
