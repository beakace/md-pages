"use client";

import { motion } from "framer-motion";

interface LineSeparatorProps {
  delay?: number;
}

export default function LineSeparator({ delay = 0 }: LineSeparatorProps) {
  return (
    <div className="py-16 sm:py-24 flex justify-center">
      <motion.div
        className="h-px bg-accent/40 origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ width: "120px" }}
      />
    </div>
  );
}
