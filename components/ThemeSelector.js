import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const prefersColorSchemeDark = "(prefers-color-scheme: dark)";

export default function ThemeSelector() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia(prefersColorSchemeDark).matches)
      ? darkTheme()
      : lightTheme();

    window
      .matchMedia(prefersColorSchemeDark)
      .addEventListener("change", (e) => {
        !("theme" in localStorage) && e.matches ? darkTheme() : lightTheme();
      });

    return () => {
      window
        .matchMedia(prefersColorSchemeDark)
        .removeEventListener("change", (e) => {
          !("theme" in localStorage) && e.matches ? darkTheme() : lightTheme();
        });
    };
  }, []);

  const darkTheme = () => {
    setIsDarkTheme(true);
    document.documentElement.classList.add("dark");
  };

  const lightTheme = () => {
    setIsDarkTheme(false);
    document.documentElement.classList.remove("dark");
  };

  const toggleTheme = () => {
    isDarkTheme ? lightTheme() : darkTheme();
    localStorage.theme = isDarkTheme ? "light" : "dark";
  };

  return (
    <button onClick={toggleTheme} title="Cambiar tema">
      <span>
        {isDarkTheme ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )}
      </span>
    </button>
  );
}
