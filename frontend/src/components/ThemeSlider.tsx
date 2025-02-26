"use client";
import useThemeStore from "@/store/themes";
import { useState, useEffect } from "react";

const ThemeSlider = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isDarkTheme, toggleTheme } = useThemeStore();
  // Update the theme on toggle
  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkTheme]);

  return (
    <div
      id={isDarkTheme ? "dark" : ""}
      className="flex items-center justify-center transition-colors duration-500"
    >
      <div className="flex items-center">
        {/* Light icon */}
        <span className="text-gray-500 dark:text-gray-400 mr-3"></span>
        {/* Slider */}
        <div
          onClick={() => {
            toggleTheme();
            console.log(isDarkTheme);
          }}
          className="relative w-14 h-8 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all duration-300"
        >
          <div
            className={`w-6 h-6 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-transform duration-300 ${
              isDarkTheme ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </div>
        {/* Dark icon */}
        <span className="text-gray-500 dark:text-gray-400 ml-3"></span>
      </div>
    </div>
  );
};

export default ThemeSlider;
