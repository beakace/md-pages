"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function OMnie() {
  const { ref } = useSectionInView("O mnie");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[38rem] sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true }}
      id="about"
    >
      <SectionHeading>O mnie</SectionHeading>

      <div className="space-y-6 text-[15px] leading-relaxed text-muted dark:text-muted-dark">
        <p>
          Jestem web developerem z Wrocławia. Tworzę strony i landing page'e dla
          firm, które cenią{" "}
          <span className="text-[#1a1a1a] dark:text-[#e8e6e3]">szybkość</span>,{" "}
          <span className="text-[#1a1a1a] dark:text-[#e8e6e3]">klarowność</span>{" "}
          i{" "}
          <span className="text-[#1a1a1a] dark:text-[#e8e6e3]">wyniki</span>.
        </p>

        <p>
          Moje doświadczenie w marketingu sprawia, że patrzę szerzej niż sam
          kod — liczą się przekaz, flow użytkownika i konwersja. Pomagam
          uporządkować ofertę, dobrać strukturę strony i zaplanować elementy,
          które mają realnie zwiększać liczbę zapytań.
        </p>

        <p className="text-[#1a1a1a] dark:text-[#e8e6e3]">
          Jeśli potrzebujesz rzetelnego developera, który jasno się komunikuje i
          szybko dowozi — chętnie pomogę.
        </p>
      </div>
    </motion.section>
  );
}
