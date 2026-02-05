"use client";

import { motion } from "framer-motion";

interface BigStatementProps {
  children: React.ReactNode;
  author?: string;
}

export default function BigStatement({ children, author }: BigStatementProps) {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8 overflow-hidden">
      <motion.blockquote
        className="text-center max-w-[48rem] mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="font-serif text-xl sm:text-2xl md:text-3xl italic leading-[1.4] text-muted/70 dark:text-muted-dark/70">
          {children}
        </p>
        {author && (
          <footer className="mt-6 text-xs sm:text-sm text-accent tracking-wide">
            — {author}
          </footer>
        )}
      </motion.blockquote>
    </section>
  );
}
