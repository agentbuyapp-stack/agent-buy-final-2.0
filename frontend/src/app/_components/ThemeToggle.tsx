// components/ThemeToggle.tsx
"use client";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-end gap-1 p-1 bg-white dark:bg-gray-800">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-md transition-all ${
          theme === "light"
            ? "bg-white dark:bg-gray-700 shadow-sm"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        <Sun className="w-4 h-4 text-yellow-500" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-md transition-all ${
          theme === "dark"
            ? "bg-white dark:bg-gray-700 shadow-sm"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        <Moon className="w-4 h-4 text-blue-500" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-md transition-all ${
          theme === "system"
            ? "bg-white dark:bg-gray-700 shadow-sm"
            : "hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        <Monitor className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
};
