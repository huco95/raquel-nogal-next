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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="min-h-screen text-gray-900 bg-slate-50 dark:text-white dark:bg-gray-800 font-body transition-all duration-300">
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
