"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-6 right-6 text-xs text-muted dark:text-muted-dark hover:text-[#1a1a1a] dark:hover:text-[#e8e6e3] transition-colors duration-400"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Włącz tryb ciemny" : "Włącz tryb jasny"}
    >
      {theme === "light" ? "ciemny" : "jasny"}
    </button>
  );
}
