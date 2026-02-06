"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie-consent";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay before showing
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-[100] bg-[#1a1a1a] dark:bg-[#fafaf9] text-[#e8e6e3] dark:text-[#1a1a1a] rounded-lg shadow-2xl p-5"
        >
          <button
            onClick={handleDecline}
            className="absolute top-3 right-3 p-1 text-white/40 dark:text-black/40 hover:text-white/70 dark:hover:text-black/70 transition-colors"
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
              onClick={handleAccept}
              className="flex-1 text-sm font-medium py-2 px-4 bg-accent text-white rounded hover:bg-accent/90 transition-colors"
            >
              Akceptuję
            </button>
            <button
              onClick={handleDecline}
              className="text-sm py-2 px-4 text-white/60 dark:text-black/60 hover:text-white dark:hover:text-black transition-colors"
            >
              Odrzuć
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
