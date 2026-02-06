"use client";

import { motion } from "framer-motion";
import { fadeIn, stagger, accentFilter } from "@/lib/animations";

const benefits = [
  {
    title: "Stronę, która działa",
    desc: "Szybka, czytelna, dopasowana do każdego urządzenia.",
  },
  {
    title: "Jasny przekaz",
    desc: "Strona, która mówi wprost czym się zajmujesz.",
  },
  {
    title: "Przemyślaną strukturę",
    desc: "Każdy element ma swoje miejsce i cel.",
  },
  {
    title: "Spokój głowy",
    desc: "Wiesz co dostajesz, kiedy i za ile.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 relative">
      {/* Doodle - arrow */}
      <div className="absolute right-[12%] -top-10 hidden lg:block">
        <motion.img
          src="/svg/9.svg"
          alt=""
          aria-hidden="true"
          className="w-44 pointer-events-none select-none -rotate-90 opacity-25"
          style={{ filter: accentFilter }}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>

      {/* Doodle - scribble */}
      <motion.img
        src="/svg/4.svg"
        alt=""
        aria-hidden="true"
        className="absolute -left-20 top-1/3 w-44 pointer-events-none select-none hidden lg:block opacity-20"
        style={{ filter: accentFilter }}
        initial={{ clipPath: "inset(0 0 0 100%)" }}
        whileInView={{ clipPath: "inset(0 0 0 0%)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      />

      <div className="max-w-[48rem] mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2
            className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-10 font-semibold"
            variants={fadeIn}
          >
            Dlatego robię to inaczej
          </motion.h2>

          <motion.ul
            className="space-y-4 text-[17px] leading-relaxed mb-16"
            variants={fadeIn}
          >
            {[
              "Mówię prostym językiem, nie technicznym żargonem",
              "Jestem terminowy i mam przejrzyste warunki",
              "Dowożę w tygodniach, nie miesiącach",
              "Nie znikam po publikacji",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
              >
                <span className="text-accent select-none">—</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Benefits grid */}
          <motion.h3
            className="font-sans text-sm uppercase tracking-[0.12em] text-muted dark:text-muted-dark mb-8"
            variants={fadeIn}
          >
            Co dostajesz
          </motion.h3>

          <div className="grid sm:grid-cols-2 gap-10 sm:gap-12">
            {benefits.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
              >
                <motion.span
                  className="block mb-4"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.4 }}
                  style={{
                    originX: 0,
                    width: "24px",
                    height: "2px",
                    backgroundColor: "var(--accent)",
                  }}
                />
                <h4 className="font-serif text-lg sm:text-xl tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-[15px] text-muted dark:text-muted-dark leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
