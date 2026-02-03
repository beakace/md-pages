"use client";
import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      {/* Minimal border line instead of glassmorphism */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-black/5 dark:bg-white/5 sm:top-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 sm:top-8">
        {/* Mobile: simple text links */}
        <motion.div
          className="sm:hidden flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="#home"
            className="text-sm tracking-wide text-muted dark:text-muted-dark hover:text-[#1a1a1a] dark:hover:text-[#e8e6e3] transition-colors duration-400"
            onClick={() => {
              setActiveSection("Start");
              setTimeOfLastClick(Date.now());
            }}
          >
            MD
          </Link>
          <Link
            href="#contact"
            className="text-sm tracking-wide text-[#1a1a1a] dark:text-[#e8e6e3] hover:text-accent transition-colors duration-400"
            onClick={() => {
              setActiveSection("Kontakt");
              setTimeOfLastClick(Date.now());
            }}
          >
            Kontakt
          </Link>
        </motion.div>

        {/* Desktop: full nav with subtle indicators */}
        <motion.ul
          className="hidden sm:flex items-center gap-8 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {links.map((link) => (
            <li key={link.hash} className="relative">
              <Link
                className={clsx(
                  "block py-2 transition-colors duration-400",
                  activeSection === link.name
                    ? "text-[#1a1a1a] dark:text-[#e8e6e3]"
                    : "text-muted dark:text-muted-dark hover:text-[#1a1a1a] dark:hover:text-[#e8e6e3]"
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
                    className="absolute -bottom-px left-0 right-0 h-px bg-accent"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
}
