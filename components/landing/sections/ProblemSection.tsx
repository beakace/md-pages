"use client";

import { motion } from "framer-motion";
import ParallaxText from "../ParallaxText";
import RevealText from "../RevealText";
import { fadeIn, stagger } from "@/lib/animations";

export default function ProblemSection() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8">
      <div className="max-w-[48rem] mx-auto relative">
        {/* Large background number */}
        <div className="absolute -left-20 top-0 pointer-events-none select-none hidden lg:block">
          <ParallaxText speed={-0.2}>
            <span className="font-serif text-[20rem] leading-none text-black/[0.02] dark:text-white/[0.02]">
              ?
            </span>
          </ParallaxText>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="relative z-10"
        >
          <motion.h2
            className="font-sans text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-10 font-semibold"
            variants={fadeIn}
          >
            Potrzebujesz nowej strony.
            <br />
            Ale wybór jest przytłaczający.
          </motion.h2>

          <motion.div
            className="space-y-4 text-[17px] leading-relaxed text-muted dark:text-muted-dark"
            variants={fadeIn}
          >
            {[
              { text: "Agencja?", sub: "Drogo i długo." },
              { text: "Freelancer?", sub: "Loteria." },
              {
                text: "Kreatory albo AI?",
                sub: "Musisz to ogarniać sam i pilnować, żeby działało",
              },
            ].map((item, i) => (
              <motion.p
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
              >
                <span className="text-accent/60 select-none">—</span>
                <span>
                  <span className="text-[#1a1a1a] mr-1 dark:text-[#e8e6e3]">
                    {item.text}
                  </span>{" "}
                  {item.sub}
                </span>
              </motion.p>
            ))}
          </motion.div>

          <div className="mt-16">
            <RevealText>
              Szukasz kogoś, kto po prostu zrobi to dobrze. Bez komplikacji. W
              ustalonym terminie i na przejrzystych warunkach.
            </RevealText>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
