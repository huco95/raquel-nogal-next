import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import usePrefersColorSchemeDark from "../hooks/usePrefersColorSchemeDark";

export default function ThemeSelector() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const isPrefersColorSchemaDark = usePrefersColorSchemeDark();

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && isPrefersColorSchemaDark)
    ) {
      darkTheme();
    } else {
      lightTheme();
    }
  }, [isPrefersColorSchemaDark]);

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
          <MoonIcon className="w-5 w-5" />
        ) : (
          <SunIcon className="w-5 w-5" />
        )}
      </span>
    </button>
  );
}
