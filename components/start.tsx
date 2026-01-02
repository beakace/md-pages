"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import TextRotate from "@/components/fancy/text/text-rotate";

export default function Start() {
  const { ref } = useSectionInView("Start", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              className="rounded-full h-24 w-24 border-[0.35rem] object-cover border-white shadow-xl"
              src="/avatar-md.png"
              alt="Portret"
              width={901}
              height={901}
              priority={true}
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5] text-2xl sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <span className="block">
          <span className="font-bold">Cześć, jestem Michał.</span> Tworzę
          szybkie, nowoczesne <span className="font-bold">strony</span>, które
        </span>
        <span className=" block w-full">
          <TextRotate
            as="span"
            texts={[
              "napędzają sprzedaż.",
              "wspierają biznes.",
              "budują zaufanie.",
              "ułatwiają życie.",
              "rozwijają markę.",
              "robią wrażenie.",
              "po prostu działają.",
            ]}
            mainClassName="inline-flex px-6 bg-gray-900 text-white dark:bg-[#676394]/20 dark:text-white overflow-hidden justify-center rounded-full"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden "
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Kontakt");
            setTimeOfLastClick(Date.now());
          }}
        >
          Poproś o wycenę
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <Link
          href="#work"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          onClick={() => {
            setActiveSection("Realizacje");
            setTimeOfLastClick(Date.now());
          }}
        >
          Zobacz realizacje
          <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>
    </section>
  );
}
