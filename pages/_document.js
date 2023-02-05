import { Head, Html, Main, NextScript } from "next/document";

// Solution for dark theme flickering from: https://github.com/vercel/next.js/discussions/12533
const setInitialTheme = `
  (function () {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  })();
`;

export default function Document() {
  return (
    <Html lang="es">
      <Head></Head>
      <body className="text-gray-900 transition-all duration-300 bg-slate-50 dark:text-white dark:bg-gray-800 font-body">
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
