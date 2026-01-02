"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <p className="mb-3">
        I’m a web developer based in Wrocław, Poland. I build websites and
        landing pages for businesses that care about{" "}
        <span className="font-medium">speed</span>,{" "}
        <span className="font-medium">clarity</span>, and{" "}
        <span className="font-medium">results</span>.
      </p>
      <p className="mb-3">
        My background in <span className="font-medium">marketing</span> helps me
        think beyond “just code” — messaging, user flow, and conversion matter.
        On the technical side, I work mainly with{" "}
        <span className="font-medium">Next.js / React</span>, TypeScript, and
        Tailwind, and I also ship WordPress projects when that’s the right tool.
      </p>
      <p>
        If you need a reliable dev who communicates clearly and ships quickly,
        I’m happy to help.
      </p>
    </motion.section>
  );
}
