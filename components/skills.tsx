"use client";
import { servicesData, skillsData } from "@/lib/data";
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

export default function Skills() {
  const { ref } = useSectionInView("Services");
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
        <SectionHeading>Services</SectionHeading>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.title}
            className="border borderBlack rounded-xl bg-white p-6 dark:bg-white/10"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-white/70">
              {service.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-sm text-gray-600 dark:text-white/60">
        Tech I use most often:
      </p>
      <ul className="mt-4 flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="border dark:bg-white/10 dark:text-white/80 bg-white borderBlack rounded-xl px-5 py-3"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index + servicesData.length}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
