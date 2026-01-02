"use client";
import { servicesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Uslugi() {
  const { ref } = useSectionInView("Usługi");
  return (
    <section
      ref={ref}
      id="services"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <SectionHeading>Usługi</SectionHeading>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900/5 text-gray-900 ring-1 ring-black/5 transition group-hover:bg-gray-900/10 dark:bg-white/10 dark:text-white dark:ring-white/10 dark:group-hover:bg-white/15">
              <span aria-hidden="true">{service.icon}</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-white/70">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


