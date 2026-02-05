"use client";

import { motion } from "framer-motion";
import { fadeIn, stagger } from "@/lib/animations";

const forMe = [
  "Usługi (sprzątanie, trenerzy, fizjoterapia, coaching...)",
  "Gabinety i praktyki (lekarze, prawnicy, architekci...)",
  "Sklepy i lokale (restauracje, kawiarnie, butiki...)",
  "Freelancerzy i jednoosobowe działalności",
];

const notForMe = [
  "Korporacje z długimi procesami decyzyjnymi",
  "Projekty wymagające rozbudowanych systemów",
  "Klienci, dla których liczy się tylko cena",
];

export default function AudienceSection() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8">
      <div className="max-w-[56rem] mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Dwie kolumny na desktop, jedna na mobile */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-12">
            {/* Dla kogo TAK */}
            <motion.div variants={fadeIn}>
              <h2 className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-8 font-semibold">
                Dla kogo jestem najlepszym wyborem
              </h2>
              <ul className="space-y-3 text-[17px] text-muted dark:text-muted-dark">
                {forMe.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.5 }}
                  >
                    <span className="text-accent/60 select-none">—</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Dla kogo NIE */}
            <motion.div variants={fadeIn}>
              <h2 className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-8 font-semibold">
                Dla kogo <span className="text-accent">nie</span> jestem
                najlepszym wyborem
              </h2>
              <ul className="space-y-3 text-[17px] text-muted dark:text-muted-dark">
                {notForMe.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i, duration: 0.5 }}
                  >
                    <span className="text-accent/60 select-none">—</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
