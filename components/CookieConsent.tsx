"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      const timer = setTimeout(() => {
        setMounted(true);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setVisible(true));
        });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = (value: string) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
    setTimeout(() => setMounted(false), 300);
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-[100] bg-ink dark:bg-washi text-[#e8e6e3] dark:text-ink rounded-lg shadow-2xl p-5 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <button
        onClick={() => dismiss("declined")}
        className="absolute top-2 right-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-white/40 dark:text-black/40 hover:text-white/70 dark:hover:text-black/70 transition-colors rounded-full focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Zamknij"
      >
        <X className="w-4 h-4" />
      </button>

      <p className="text-sm leading-relaxed pr-6 mb-4">
        Ta strona używa cookies, aby działać poprawnie i analizować ruch.{" "}
        <Link
          href="/polityka-prywatnosci"
          className="underline underline-offset-2 hover:text-accent transition-colors"
        >
          Polityka prywatności
        </Link>
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => dismiss("accepted")}
          className="flex-1 text-sm font-medium min-h-[44px] px-4 bg-accent text-white rounded hover:bg-accent/90 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          Akceptuję
        </button>
        <button
          onClick={() => dismiss("declined")}
          className="text-sm min-h-[44px] px-4 text-white/60 dark:text-black/60 hover:text-white dark:hover:text-black transition-colors rounded focus-visible:ring-2 focus-visible:ring-accent"
        >
          Odrzuć
        </button>
      </div>
    </div>
  );
}
