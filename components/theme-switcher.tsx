"use client";

import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Set the initial theme based on localStorage or system preference
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem("theme") || "light";
    setTheme(initialTheme);
    root.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";
    root.classList.remove(theme);
    root.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save preference in localStorage
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-lg bg-gray-200 p-2 text-sm dark:bg-gray-800"
    >
      Toggle {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
