"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { processSteps } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

interface ProcessItem {
  title: string;
  location: string;
  description: string;
  step: string;
}

interface TimelineElementProps {
  item: ProcessItem;
  index: number;
}

const TimelineElement: React.FC<TimelineElementProps> = ({ item, index }) => (
  <motion.div
    className="grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: index * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    }}
    viewport={{ once: true }}
  >
    {/* Step number with vertical line */}
    <div className="flex flex-col items-center">
      <span className="font-serif text-accent text-lg tabular-nums">
        {item.step}
      </span>
      <div className="w-px flex-1 bg-black/10 dark:bg-white/10 mt-3" />
    </div>

    {/* Content */}
    <div className="pb-12 last:pb-0">
      <h3 className="font-serif text-xl tracking-tight mb-1">{item.title}</h3>
      <p className="text-sm text-muted dark:text-muted-dark mb-3">
        {item.location}
      </p>
      <p className="text-[15px] leading-relaxed text-[#1a1a1a]/80 dark:text-[#e8e6e3]/80">
        {item.description}
      </p>
    </div>
  </motion.div>
);

export default function Proces() {
  const { ref } = useSectionInView("Proces");

  return (
    <section
      id="process"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 w-[min(100%,42rem)]"
    >
      <SectionHeading>Proces</SectionHeading>
      <div className="mt-12">
        {processSteps.map((item, index) => (
          <TimelineElement key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
