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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>O mnie</SectionHeading>
      <p className="mb-3">
        Jestem web developerem z Wrocławia. Tworzę strony i landing page’e dla
        firm, które cenią <span className="font-medium">szybkość</span>,{" "}
        <span className="font-medium">klarowność</span> i{" "}
        <span className="font-medium">wyniki</span>.
      </p>
      <p className="mb-3">
        Moje doświadczenie w <span className="font-medium">marketingu</span>{" "}
        sprawia, że patrzę szerzej niż „sam kod” - liczą się przekaz, flow
        użytkownika i konwersja. Pomagam uporządkować ofertę, dobrać strukturę
        strony i zaplanować elementy, które mają realnie zwiększać liczbę
        zapytań.
      </p>
      <p>
        Jeśli potrzebujesz rzetelnego developera, który jasno komunikuje się i
        szybko dowozi - chętnie pomogę.
      </p>
    </motion.section>
  );
}
