import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className="min-h-screen text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
