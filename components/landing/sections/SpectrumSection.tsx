"use client";

import { motion } from "framer-motion";
import { fadeIn, stagger, accentFilter } from "@/lib/animations";

export default function SpectrumSection() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8">
      <motion.div
        className="max-w-[48rem] mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        {/* Nagłówek */}
        <motion.p
          className="font-sans text-xs uppercase tracking-[0.12em] text-muted dark:text-muted-dark mb-10 text-center"
          variants={fadeIn}
        >
          Najlepszy wybór
        </motion.p>

        {/* Trzy kolumny */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 text-center">
          {/* Freelancer — słaba opcja */}
          <motion.div variants={fadeIn}>
            <motion.img
              src="/svg/freelancer-icon.svg"
              alt=""
              aria-hidden="true"
              className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 opacity-25 -rotate-6"
              style={{ filter: accentFilter }}
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.12em] text-muted/50 dark:text-muted-dark/50 mb-2 line-through">
              Freelancer z neta
            </p>
            <p className="text-[11px] sm:text-sm text-muted/60 dark:text-muted-dark/60 leading-snug">
              Loteria
            </p>
          </motion.div>

          {/* W sam raz — środek, wyróżniony */}
          <motion.div variants={fadeIn}>
            <motion.img
              src="/svg/winner-icon.svg"
              alt=""
              aria-hidden="true"
              className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6"
              style={{ filter: accentFilter }}
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            />
            <p className="font-sans text-[14px] sm:text-sm uppercase tracking-[0.12em] text-accent mb-2 font-medium">
              ja :)
            </p>
            <p className="text-[14px] sm:text-sm leading-snug">
              Idealny balans
            </p>
          </motion.div>

          {/* Agencja — słaba opcja */}
          <motion.div variants={fadeIn}>
            <motion.img
              src="/svg/agency-icon.svg"
              alt=""
              aria-hidden="true"
              className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-6 opacity-25 rotate-6"
              style={{ filter: accentFilter }}
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            />
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.12em] text-muted/50 dark:text-muted-dark/50 mb-2 line-through">
              Agencja
            </p>
            <p className="text-[11px] sm:text-sm text-muted/60 dark:text-muted-dark/60 leading-snug">
              Drogo i wolno
            </p>
          </motion.div>
        </div>

        {/* Linia spektrum — | ———— — ———— | */}
        <motion.div
          className="flex items-center justify-between mt-8 sm:mt-12"
          variants={fadeIn}
        >
          <span
            className="w-px h-3 bg-black/20 dark:bg-white/20 shrink-0"
            aria-hidden
          />
          <motion.span
            className="flex-1 h-px bg-black/10 dark:bg-white/10 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            aria-hidden
          />
          <span className="w-8 h-0.5 bg-accent shrink-0 mx-1" aria-hidden />
          <motion.span
            className="flex-1 h-px bg-black/10 dark:bg-white/10 origin-right"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            aria-hidden
          />
          <span
            className="w-px h-3 bg-black/20 dark:bg-white/20 shrink-0"
            aria-hidden
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
