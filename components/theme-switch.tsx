"use client";

import { useTheme } from "@/context/theme-context";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-6 right-6 z-[100] w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a]/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 hover:bg-[#1a1a1a]/10 dark:hover:bg-white/10 transition-all duration-300"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Włącz tryb ciemny" : "Włącz tryb jasny"}
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 text-[#1a1a1a]/70" />
      ) : (
        <Sun className="w-4 h-4 text-white/70" />
      )}
    </button>
  );
}
