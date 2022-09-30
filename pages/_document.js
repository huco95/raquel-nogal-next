import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="min-h-screen text-gray-900 bg-white dark:text-white dark:bg-gray-800 font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
