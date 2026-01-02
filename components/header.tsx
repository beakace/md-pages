"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2  h-[4rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        {/* Mobile: arrow to top (left) + Kontakt CTA (right) */}
        <div className="sm:hidden flex w-screen max-w-[36rem] px-4 items-center justify-between">
          <Link
            href="#home"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 bg-white/80 text-gray-700 shadow-sm backdrop-blur hover:bg-white transition dark:bg-gray-950/60 dark:text-white/80 dark:border-white/10"
            onClick={() => {
              setActiveSection("Start");
              setTimeOfLastClick(Date.now());
            }}
            aria-label="Wróć na górę"
          >
            <Image
              src="/MD.svg"
              alt="MD"
              width={22}
              height={22}
              className="h-[22px] w-[22px] dark:invert"
              priority
            />
          </Link>
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition dark:bg-white dark:text-gray-900"
            onClick={() => {
              setActiveSection("Kontakt");
              setTimeOfLastClick(Date.now());
            }}
          >
            Kontakt
          </Link>
        </div>

        {/* Desktop: full nav */}
        <ul className="hidden sm:flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
