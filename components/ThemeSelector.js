import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const prefersColorSchemeDark = "(prefers-color-scheme: dark)";

export default function ThemeSelector() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const onPrefersColorSchemeChange = (e) => {
      !("theme" in localStorage) && e.matches
        ? useDarkTheme()
        : useLightTheme();
    };

    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia(prefersColorSchemeDark).matches)
      ? useDarkTheme()
      : useLightTheme();

    window
      .matchMedia(prefersColorSchemeDark)
      .addEventListener("change", onPrefersColorSchemeChange);

    return () => {
      window
        .matchMedia(prefersColorSchemeDark)
        .removeEventListener("change", onPrefersColorSchemeChange);
    };
  }, []);

  const useDarkTheme = () => {
    setDarkTheme(true);
    document.documentElement.classList.add("dark");
  };

  const useLightTheme = () => {
    setDarkTheme(false);
    document.documentElement.classList.remove("dark");
  };

  const toggleTheme = () => {
    darkTheme ? useLightTheme() : useDarkTheme();
    localStorage.theme = darkTheme ? "light" : "dark";
  };

  return (
    <button onClick={toggleTheme} title="Cambiar tema">
      <span>
        {darkTheme ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )}
      </span>
    </button>
  );
}
