"use client";
import { servicesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function Uslugi() {
  const { ref } = useSectionInView("Usługi");
  return (
    <section
      ref={ref}
      id="services"
      className="mb-28 max-w-[50rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Usługi</SectionHeading>

      <div className="grid grid-cols-1 gap-px bg-black/5 dark:bg-white/5 sm:grid-cols-2">
        {servicesData.map((service, index) => (
          <motion.article
            key={service.title}
            className="bg-[#fafaf9] p-8 dark:bg-[#0c0c0c]"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {/* Em dash as visual marker */}
            <span
              className="block mb-4 text-accent text-2xl leading-none"
              aria-hidden="true"
            >
              —
            </span>
            <h3 className="font-serif text-xl tracking-tight mb-3">
              {service.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-muted dark:text-muted-dark">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
