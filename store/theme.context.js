import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  isDarkTheme: true,
  toggleThemeHandler: () => {},
});

export function ThemeContextProvider(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => initialThemeHandler());

  const isLocalStorageEmpty = () => {
    return !("theme" in localStorage);
  };

  const initialThemeHandler = () => {
    if (isLocalStorageEmpty()) {
      localStorage.theme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "ligth";
    }

    const isDarkTheme = localStorage.theme === "dark";
    document.documentElement.classList.toggle("dark", isDarkTheme);
    setIsDarkTheme(isDarkTheme);
  };

  const toggleThemeHandler = () => {
    const isDarkTheme = localStorage.theme === "dark";
    localStorage.theme = isDarkTheme ? "light" : "dark";
    document.documentElement.classList.toggle("dark", !isDarkTheme);
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme: true, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
