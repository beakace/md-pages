"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show navbar after scrolling past hero (roughly 60vh)
    const heroHeight = window.innerHeight * 0.6;
    setVisible(latest > heroHeight);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-[#fafaf9] dark:bg-[#0c0c0c] border-b-0 outline-none shadow-none will-change-transform"
      style={{ backfaceVisibility: "hidden" }}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -20,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <nav className="px-6 sm:px-10 py-5 flex items-center justify-between border-b-0">
        {/* Logo - anchor to top */}
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center hover:opacity-80 transition-opacity duration-300"
          aria-label="Strona główna"
        >
          <Image
            src="/svg/logo-md.svg"
            alt="MD"
            width={48}
            height={32}
            className="h-8 w-auto dark:invert"
          />
        </Link>

        <div className="flex items-center gap-6">
          {/* Theme toggle - subtle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-muted dark:text-muted-dark hover:text-[#1a1a1a] dark:hover:text-[#e8e6e3] transition-colors duration-300 outline-none focus:outline-none focus:ring-0 focus-visible:outline-none"
            style={{ WebkitTapHighlightColor: "transparent" }}
            aria-label={theme === "light" ? "Włącz tryb ciemny" : "Włącz tryb jasny"}
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          {/* CTA */}
          <Link
            href="#kontakt"
            className="group flex items-center gap-2 text-sm font-medium"
          >
            <span className="relative">
              Porozmawiajmy
              <span className="absolute left-0 -bottom-0.5 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
