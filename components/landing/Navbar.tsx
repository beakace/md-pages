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
            className="group flex items-center justify-center gap-2 text-sm font-medium bg-ink dark:bg-chalk text-washi dark:text-ink px-5 py-2.5 organic-border hover:bg-ink/90 dark:hover:bg-chalk/90 transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-washi dark:focus-visible:ring-offset-surface-dark"
          >
            Porozmawiajmy
            <span className="text-accent transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
