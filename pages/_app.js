import Head from "next/head";
import { ThemeContextProvider } from "../store/theme.context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Head>
        <title>Raquel Nogal</title>
        <meta
          name="description"
          content="Raquel Nogal: marketing y comunicación"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;
