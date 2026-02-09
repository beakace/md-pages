"use client";

import { motion } from "framer-motion";

export default function MidCTA() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-8">
      <motion.div
        className="max-w-[48rem] mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="font-serif text-xl sm:text-2xl md:text-3xl italic leading-[1.4] text-muted dark:text-muted-dark mb-8">
          Gotów na nową stronę?
        </p>
        <a
          href="#kontakt"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          }}
          className="group inline-flex items-center gap-3 text-base sm:text-lg font-medium border-b-2 border-accent pb-1 hover:border-accent/60 transition-colors duration-300"
        >
          Porozmawiajmy
          <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>
    </section>
  );
}
