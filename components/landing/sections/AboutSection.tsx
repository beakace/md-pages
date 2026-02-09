"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, stagger, accentFilter } from "@/lib/animations";

// Jedno źródło tekstu
const intro = "Robię strony dla lokalnych firm.";

const paragraphs = [
  {
    text: "Przez lata prowadziłem projekty marketingowe. Widziałem, jak agencje robią z prostych rzeczy wielomiesięczne procesy. Teraz robię to sam, szybciej i prościej.",
    highlight: false,
  },
  {
    text: "Od kilku lat projektuję i buduję strony jako niezależny web designer i programista. Jestem człowiekiem, który mówi wprost, dotrzymuje terminów i jest łatwy w kontakcie.",
    highlight: false,
  },
  {
    text: "Szczęśliwy mąż, ojciec dwóch pięciolatków i gitarzysta po godzinach.",
    highlight: true,
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 relative">
      <motion.div
        className="max-w-[56rem] mx-auto"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        {/* Grid: 1 col mobile (stacked), 2 col desktop */}
        <div className="grid md:grid-cols-[minmax(0,220px)_1fr] lg:grid-cols-[minmax(0,260px)_1fr] gap-8 md:gap-10 lg:gap-14 items-start">
          {/* Avatar column */}
          <motion.div
            className="flex justify-center md:block"
            variants={fadeIn}
          >
            {/* Mobile: okrągły avatar */}
            <div className="md:hidden relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-accent/10" />
              <Image
                src="/MD.png"
                alt="Michał Dziuba"
                width={128}
                height={128}
                quality={80}
                className="relative w-full h-full object-cover object-[center_30%] rounded-full"
                loading="lazy"
              />
            </div>
            {/* Desktop: pełne zdjęcie */}
            <Image
              src="/MD.png"
              alt="Michał Dziuba"
              width={520}
              height={520}
              quality={85}
              className="hidden md:block rounded-full w-full max-w-[260px] h-auto object-contain"
              sizes="260px"
              loading="lazy"
            />
          </motion.div>

          {/* Content column */}
          <div className="text-center md:text-left">
            {/* Doodle + heading */}
            <motion.img
              src="/svg/5.svg"
              alt=""
              aria-hidden="true"
              className="w-16 md:w-20 mx-auto md:mx-0 md:ml-1 mb-4 pointer-events-none select-none opacity-40"
              style={{ filter: accentFilter }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            />
            <motion.h2
              className="font-sans text-xl md:text-2xl lg:text-3xl uppercase tracking-[0.12em] leading-[1.3] mb-8 md:mb-10 font-semibold"
              variants={fadeIn}
            >
              O mnie
            </motion.h2>

            {/* Intro - italic na mobile, normalny na desktop */}
            <motion.p
              className="font-serif text-2xl md:font-sans md:text-lg italic md:not-italic leading-snug mb-8 md:mb-6 text-[#1a1a1a] dark:text-[#e8e6e3]"
              variants={fadeIn}
            >
              {intro}
            </motion.p>

            {/* Paragraphs */}
            <motion.div
              className="space-y-5 md:space-y-6 text-[15px] md:text-lg leading-relaxed max-w-[38rem] mx-auto md:mx-0"
              variants={fadeIn}
            >
              {paragraphs.map((item, i) => (
                <p
                  key={i}
                  className={
                    item.highlight
                      ? "text-[#1a1a1a] dark:text-[#e8e6e3]"
                      : "text-muted dark:text-muted-dark"
                  }
                >
                  {item.text}
                </p>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.div
              className="mt-10 md:mt-12 md:pt-8 md:border-t md:border-black/5 md:dark:border-white/5"
              variants={fadeIn}
            >
              <span className="font-serif italic text-xl text-accent">
                <span className="md:hidden">— Michał</span>
                <span className="hidden md:inline">Michał Dziuba</span>
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
