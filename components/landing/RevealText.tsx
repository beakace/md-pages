"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  children: string;
}

export default function RevealText({ children }: RevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const words = useMemo(() => children.split(" "), [children]);

  return (
    <p
      ref={ref}
      className="text-lg text-center md:text-left sm:text-xl leading-relaxed"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.3em]"
          initial={{ opacity: 0.2 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0.2 }}
          transition={{
            duration: 0.5,
            delay: i * 0.03,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
