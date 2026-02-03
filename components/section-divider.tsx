"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-24 sm:my-32 w-8 h-px bg-black/10 dark:bg-white/10 hidden sm:block"
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    />
  );
}
