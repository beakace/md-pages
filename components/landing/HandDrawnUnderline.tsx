"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HandDrawnUnderline() {
  return (
    <motion.span
      className="absolute -bottom-3 sm:-bottom-4 left-0 right-0 h-[12px] sm:h-[16px] pointer-events-none"
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{
        duration: 0.8,
        delay: 0.9,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <Image
        src="/ancient/underline-orange.png"
        alt=""
        width={400}
        height={20}
        className="w-full h-full object-cover object-left"
        aria-hidden="true"
        priority
      />
    </motion.span>
  );
}
