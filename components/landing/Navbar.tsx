"use client";

import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/theme-context";
import { Sun, Moon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      setVisible(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed -top-4 left-0 right-0 z-50 bg-washi dark:bg-surface-dark pt-4 will-change-transform"
      style={{
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <nav className="px-6 sm:px-10 py-5 flex items-center justify-between">
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
          <button
            onClick={toggleTheme}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted dark:text-muted-dark hover:text-ink dark:hover:text-[#e8e6e3] transition-colors duration-300 rounded-full focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-washi dark:focus-visible:ring-offset-surface-dark"
            style={{ WebkitTapHighlightColor: "transparent" }}
            aria-label={
              theme === "light" ? "Włącz tryb ciemny" : "Włącz tryb jasny"
            }
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>

          <a
            href="#kontakt"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
            }}
            className="group relative inline-flex items-center justify-center h-10 px-5 font-sans text-sm tracking-wide text-washi dark:text-surface-dark bg-ink dark:bg-chalk rounded-[10px] overflow-hidden transition-all duration-300 active:scale-95 outline-none hover:shadow-md shadow-sm"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2">
              Napisz do mnie
              <span className="absolute top-1/2 -translate-y-1/2 -right-4 w-1.5 h-1.5 rounded-full bg-accent opacity-0 scale-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
            </span>
            <div className="absolute inset-0 bg-white/10 dark:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </nav>
    </header>
  );
}
