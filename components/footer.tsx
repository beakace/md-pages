import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="py-16 px-4 text-center">
      {/* Subtle separator */}
      <div className="w-12 h-px bg-accent/30 mx-auto mb-8" />

      <p className="text-sm text-muted dark:text-muted-dark mb-2">
        Michał Dziuba — {currentYear}
      </p>
      <p className="text-xs text-muted/60 dark:text-muted-dark/60">
        Strony internetowe po ludzku
      </p>
    </footer>
  );
}
