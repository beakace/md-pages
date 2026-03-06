"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Dimension = "base" | "alt";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Dimension; // Keeping name 'theme' for backward compatibility
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  // Default to base dimension. Base dimension uses dark mode styling by default.
  const [theme, setTheme] = useState<Dimension>("base");

  const toggleTheme = () => {
    if (theme === "base") {
      setTheme("alt");
      window.localStorage.setItem("dimension", "alt");
      document.documentElement.classList.add("alt-dimension");
      document.documentElement.classList.add("dark"); // Ensures text contrast on images
    } else {
      setTheme("base");
      window.localStorage.setItem("dimension", "base");
      document.documentElement.classList.remove("alt-dimension");
      document.documentElement.classList.remove("dark"); // Base is light mode version
    }
  };

  useEffect(() => {
    const localDimension = window.localStorage.getItem("dimension") as Dimension | null;

    if (localDimension === "alt") {
      setTheme("alt");
      document.documentElement.classList.add("alt-dimension");
      document.documentElement.classList.add("dark");
      return;
    }

    // Default: base (light mode version)
    setTheme("base");
    document.documentElement.classList.remove("alt-dimension");
    document.documentElement.classList.remove("dark"); // Base is light mode version
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
